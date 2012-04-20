Smalltalk current createPackage: 'AmberProjectImporter' properties: #{}!
Object subclass: #AmberProjectImporter
	instanceVariableNames: ''
	package: 'AmberProjectImporter'!

!AmberProjectImporter class methodsFor: 'not yet classified'!

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
		prefix: 'st/'"

	self get: prefix, packageName, '.st' onComplete: [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [ |chunks |
            			chunks := jqXHR responseText.
            			Importer new import: chunks readStream ]]
!

importSTPackages: packageNameList prefix: prefix
	"AmberProjectImporter
		importSTPackages: #('AmberProjectPage')
		prefix: 'st/'"

	| loadBlock |
	loadBlock := [:index | | packageName next |
		packageName := packageNameList at: index.
Transcript cr; show: 'import ', packageName.
		self get: prefix, packageName, '.st'  onComplete: [:jqXHR :textStatus | 
			jqXHR readyState = 4 ifTrue: [ | chunks |
				Importer new import: jqXHR responseText readStream.
				next := index + 1.
				next <= packageNameList size
					ifTrue: [ loadBlock value: next ]  ]]].
	packageNameList size >= 1 
		ifTrue: [ loadBlock value: 1 ]
! !

