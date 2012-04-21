Smalltalk current createPackage: 'AmberProject-CypressExporter' properties: #{}!
AmberProjectExporter subclass: #AmberProjectCypressExporter
	instanceVariableNames: ''
	package: 'AmberProject-CypressExporter'!

!AmberProjectCypressExporter methodsFor: 'exporting'!

export

	| package |
	package := Package named: self packageName.
	{	
		Exporter 			-> (package commitPathJs, '/', self packageName, '.js').
		StrippedExporter 	-> (package commitPathJs, '/', self packageName, '.deploy.js').
 		ChunkExporter 	-> (package commitPathSt, '/', self packageName, '.st')
	} do: [:commitStrategy| | fileContents |
		fileContents := (commitStrategy key new exportPackage: self packageName).
		self ajaxPutAt: commitStrategy value data:  fileContents]
! !

!AmberProjectCypressExporter class methodsFor: 'initialization'!

initialize

	(AmberProjectExporter exporters)
		 at: 'cypress' put: self
! !

