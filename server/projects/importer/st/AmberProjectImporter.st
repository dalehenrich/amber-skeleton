Smalltalk current createPackage: 'AmberProjectImporter' properties: #{}!
Browser subclass: #AmberProjectBrowser
	instanceVariableNames: ''
	package: 'AmberProjectImporter'!

!AmberProjectBrowser methodsFor: 'actions'!

commitPackage
	selectedPackage ifNotNil: [
	]
! !

Object subclass: #AmberProjectImporter
	instanceVariableNames: ''
	package: 'AmberProjectImporter'!
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

!AmberProjectImporter class methodsFor: 'initialization'!

initialize

	Transcript cr; show: 'I was initialized'
! !

!AmberProjectImporter class methodsFor: 'private'!

get: type url: ajaxUrl onComplete: completeBlock
	
	type == #st ifTrue: [ ^self  getSt: ajaxUrl onComplete: completeBlock ].
	type == #js ifTrue: [ ^self  getJs: ajaxUrl onComplete: completeBlock ].
	self error: 'Unknown type: ', type printString
!

getJs: ajaxUrl onComplete: completeBlock
	jQuery 
		getScript: ajaxUrl
		onSuccess: completeBlock
!

getSt: ajaxUrl onComplete: completeBlock
	jQuery 
		ajax: ajaxUrl
        	options: #{
			'type' -> 'GET'.
    			'complete' -> [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [ | chunks |
				Importer new import: jqXHR responseText readStream.
				completeBlock value  ]]
		}
!

import: type subDir: packageSubDir packages: packageNameList extension: extension prefix: prefix

	| loadBlock |
	loadBlock := [:index | | packageName next |
		packageName := packageNameList at: index.
		jQuery 
			get: type
			url: (prefix, packageSubDir, packageName, extension) 
			onSuccess: [ 
				Package init: packageName.
				self registerPackage: packageName at: prefix.
				next := index + 1.
				next <= packageNameList size
					ifTrue: [ loadBlock value: next ]]].
	packageNameList size >= 1 
		ifTrue: [ loadBlock value: 1 ]
! !

!AmberProjectImporter class methodsFor: 'registry'!

packageRegistry
	"AmberProjectImporter packageRegistry"

	packageRegistry ifNil: [ packageRegistry := Dictionary new ].
	^packageRegistry
!

prefixForPackage: packageName

	^self packageRegistry at: packageName ifAbsent: ['']
!

registerPackage: packageName at: prefix

	self packageRegistry at: packageName put: prefix
!

resetRegistry

	packageRegistry := nil
! !

