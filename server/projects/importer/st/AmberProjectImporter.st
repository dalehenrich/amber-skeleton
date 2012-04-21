Smalltalk current createPackage: 'AmberProjectImporter' properties: #{}!
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

get: ajaxUrl onComplete: completeBlock
	jQuery 
		ajax: ajaxUrl
        	options: #{
			'type' -> 'GET'.
    			'complete' -> [ :jqXHR :textStatus |  completeBlock value: jqXHR value: textStatus]
		}
!

importSTPackage: packageName prefix: prefix
	"AmberProjectImporter
		importSTPackage: 'AmberProjectImporter' 
		prefix: ''"

	self get: prefix, 'st/', packageName, '.st' onComplete: [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [ |chunks |
            			chunks := jqXHR responseText.
            			Importer new import: chunks readStream.
				self registerPackage: packageName at: prefix ]]
!

importSTPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importSTPackages: #('AmberProjectPage')
		prefix:''"

	| loadBlock |
	loadBlock := [:index | | packageName next |
		packageName := packageNameList at: index.
		self get: prefix, 'st/', packageName, '.st'  onComplete: [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [ | chunks |
				Importer new import: jqXHR responseText readStream.
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

