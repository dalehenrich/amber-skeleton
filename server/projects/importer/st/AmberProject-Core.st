Smalltalk current createPackage: 'AmberProject-Core' properties: #{}!
Object subclass: #AmberProjectExporter
	instanceVariableNames: 'packageName prefix'
	package: 'AmberProject-Core'!

!AmberProjectExporter methodsFor: 'accessing'!

packageName

	^packageName
!

packageName: aString

	packageName := aString
!

prefix

	prefix ifNil: [ prefix := '' ].
	^prefix
!

prefix: aString

	prefix := aString
! !

!AmberProjectExporter methodsFor: 'exporting'!

export

	self subclassResponsibility
! !

!AmberProjectExporter methodsFor: 'printing'!

printString

	^super printString, '(', self prefix, ' : ', self packageName, ')'
! !

!AmberProjectExporter methodsFor: 'private'!

ajaxPutAt: anURL data: aString
	jQuery 
		ajax: anURL	options: #{	'type' -> 'PUT'.
								'data' -> aString.
								'contentType' -> 'text/plain;charset=UTF-8'.
								'error' -> [window alert: 'PUT request failed at:  ', anURL] }
! !

AmberProjectExporter class instanceVariableNames: 'exporters packageRegistry'!

!AmberProjectExporter class methodsFor: 'accessing'!

exporterFor: aType

	^(self exporters at: aType ifAbsent: [ AmberProjectStandardExporter ]) new
!

exporters
	"AmberProjectExporter exporters"

	exporters ifNil:[ exporters := Dictionary new ].
	^exporters
!

resetExporters

	exporters := nil
! !

!AmberProjectExporter class methodsFor: 'exporting'!

exportPackageNamed: aPackageName
	"AmberProjectExporter exportPackageNamed: 'AmberProject-Core'"

	(self exporterForPackage: aPackageName) export
! !

!AmberProjectExporter class methodsFor: 'registry'!

exporterForPackage: packageName

	^self packageRegistry at: packageName ifAbsent: [(AmberProjectStandardExporter new) packageName: packageName; yourself]
!

packageRegistry
	"AmberProjectExporter packageRegistry"

	packageRegistry ifNil: [ packageRegistry := Dictionary new ].
	^packageRegistry
!

registerPackage: packageName type: type prefix: prefix
	"AmberProjectExporter 
		registerPackage: 'Cypress-ExportImport' 
		type: 'st' 
		prefix: 'server/projects/amber-cypress/'
	"

	self packageRegistry at: packageName put: ((self exporterFor: type asString) packageName: packageName; prefix: prefix; yourself)
!

resetRegistry

	packageRegistry := nil
! !

AmberProjectExporter subclass: #AmberProjectStandardExporter
	instanceVariableNames: ''
	package: 'AmberProject-Core'!

!AmberProjectStandardExporter methodsFor: 'exporting'!

export
	| package |
	package := Package named: self packageName.
	{	
		Exporter 			-> (self prefix, '/js/', self packageName, '.js').
		StrippedExporter 	-> (self prefix, '/js/', self packageName, '.deploy.js').
 		ChunkExporter 	-> (self prefix, '/st/', self packageName, '.st')
	} do: [:commitStrategy| | fileContents |
		fileContents := (commitStrategy key new exportPackage: self packageName).
		self ajaxPutAt: commitStrategy value data:  fileContents]
! !

!AmberProjectStandardExporter class methodsFor: 'initialization'!

initialize

	(AmberProjectExporter exporters)
		at: 'st' put: self;
		at: 'js' put: self
! !

Object subclass: #AmberProjectImporter
	instanceVariableNames: ''
	package: 'AmberProject-Core'!
!AmberProjectImporter commentStamp!
## AmberProjectImporter

Add flexibility to your project structure.

AmberProjectImporter allows you to store code in arbitrary locations on disk.

### Installation

Include the `AmberProjectImporter.js` file in your standard Amber load script in your `index.html` file:

```html
<html> 
  <head> 
    <script src="js/amber.js" type="text/javascript"></script>
  </head>
  <body>
    <script type="text/javascript">
      loadAmber({
        files: [ 'AmberProjectImporter.js' ],
        prefix: 'projects/hello/js',
        ready: function() {}
        }); 
    </script>
  </body> 
</html>
```!

AmberProjectImporter class instanceVariableNames: 'packageRegistry'!

!AmberProjectImporter class methodsFor: 'importing'!

importDeployJsPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importDeployJsPackages: #('AmberProjectPage')
		prefix:''"

	self 
		import: #js 
		subDir: 'js/' 
		packages: packageNameList 
		extension: '.deploy.js' 
		prefix: prefix
!

importJsPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importJsPackages: #('AmberProjectPage')
		prefix:''"

	self 
		import: #js 
		subDir: 'js/' 
		packages: packageNameList 
		extension: '.js' 
		prefix: prefix
!

importStPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importStPackages: #('AmberProjectPage')
		prefix:''"

	self 
		import: #st 
		subDir: 'st/' 
		packages: packageNameList 
		extension: '.st' 
		prefix: prefix
! !

!AmberProjectImporter class methodsFor: 'private'!

get: type url: ajaxUrl onSuccess: successBlock
	
	type == #st ifTrue: [ ^self  getSt: ajaxUrl onSuccess: successBlock ].
	type == #js ifTrue: [ ^self  getJs: ajaxUrl onSuccess: successBlock ].
	self error: 'Unknown type: ', type printString
!

getJs: ajaxUrl onSuccess: successBlock

	jQuery 
		ajax: ajaxUrl
        	options: #{
			'type' -> 'GET'.
			'async' -> false.
			'dataType' -> 'script'.
    			'complete' -> [:jqXHR :textStatus | 
				jqXHR readyState = 4 ifTrue: [ successBlock value  ]].
			'error' -> [window alert: 'getJs request failed at:  ', ajaxUrl]
		}
!

getSt: ajaxUrl onSuccess: successBlock

	jQuery 
		ajax: ajaxUrl
        	options: #{
			'type' -> 'GET'.
			'async' -> false.
    			'complete' -> [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [
				Importer new import: jqXHR responseText readStream.
				successBlock value  ]].
			'error' -> [window alert: 'getSt request failed at:  ', ajaxUrl]
		}
!

import: type subDir: packageSubDir packages: packageNameList extension: extension prefix: prefix

	| loadBlock |
	loadBlock := [:index | | packageName next |
		packageName := packageNameList at: index.
		self 
			get: type
			url: (prefix, packageSubDir, packageName, extension) 
			onSuccess: [ 
				Package init: packageName.
				AmberProjectExporter registerPackage: packageName type: type prefix:prefix.
				next := index + 1.
				next <= packageNameList size
					ifTrue: [ loadBlock value: next ]]].
	packageNameList size >= 1 
		ifTrue: [ loadBlock value: 1 ]
! !

!Browser methodsFor: '*AmberProject-Core'!

commitPackage

	true ifTrue: [ ^self commitPackageAmberProject ].
	selectedPackage ifNotNil: [ |package|
               						 package := Package named: selectedPackage.
               						 {	Exporter 			-> (package commitPathJs, '/', selectedPackage, '.js').
                        					StrippedExporter 	-> (package commitPathJs, '/', selectedPackage, '.deploy.js').
                       						 ChunkExporter 		-> (package commitPathSt, '/', selectedPackage, '.st') 			} 
                 
                						do: [:commitStrategy| |fileContents|
                                                                     	fileContents := (commitStrategy key new exportPackage: selectedPackage).
                                                                     	self ajaxPutAt: commitStrategy value data:  fileContents]
         						]
!

commitPackageAmberProject

	selectedPackage ifNotNil: [ (AmberProjectExporter exporterForPackage: selectedPackage) export ]
! !

