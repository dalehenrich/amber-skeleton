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

	self importJs: 'js/' packages: packageNameList extension: '.deploy.js' prefix: prefix
!

importJsPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importJsPackages: #('AmberProjectPage')
		prefix:''"

	self importJs: 'js/' packages: packageNameList extension: '.js' prefix: prefix
!

importStPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importStPackages: #('AmberProjectPage')
		prefix:''"

	self importSt: 'st/' packages: packageNameList prefix: prefix
! !

!AmberProjectImporter class methodsFor: 'initialization'!

initialize

	Transcript cr; show: 'I was initialized'
! !

!AmberProjectImporter class methodsFor: 'private'!

get: ajaxUrl onComplete: completeBlock
	jQuery 
		ajax: ajaxUrl
        	options: #{
			'type' -> 'GET'.
    			'complete' -> [ :jqXHR :textStatus |  completeBlock value: jqXHR value: textStatus]
		}
!

importJs: packageSubDir packages: packageNameList extension: extension prefix: prefix

	| loadBlock |
	loadBlock := [:index | | packageName next |
		packageName := packageNameList at: index.
		jQuery 
			getScript: (prefix, packageSubDir, packageName, extension) 
			onSuccess: [ 
				Package init: packageName.
				self registerPackage: packageName at: prefix.
				next := index + 1.
				next <= packageNameList size
					ifTrue: [ loadBlock value: next ]]].
	packageNameList size >= 1 
		ifTrue: [ loadBlock value: 1 ]
!

importSt: packageSubDir packages: packageNameList prefix: prefix

	| loadBlock |
	loadBlock := [:index | | packageName next |
		packageName := packageNameList at: index.
		self get: prefix, packageSubDir, packageName, '.st' onComplete: [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [ | chunks |
				Importer new import: jqXHR responseText readStream.
				Package init: packageName.
				self registerPackage: packageName at: prefix.
				next := index + 1.
				next <= packageNameList size
					ifTrue: [ loadBlock value: next ]  ]]].
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

