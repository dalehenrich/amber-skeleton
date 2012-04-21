Smalltalk current createPackage: 'AmberProject-CypressExporter' properties: #{}!
AmberProjectExporter subclass: #AmberProjectCypressExporter
	instanceVariableNames: ''
	package: 'AmberProject-CypressExporter'!

!AmberProjectCypressExporter methodsFor: 'exporting'!

export
	self exportPackageStructure
!

exportPackageStructure
	|  packageStructure stream |
	packageStructure := CypressPackageStructure fromPackage: (CypressPackageDefinition new name: self packageName).
	stream := StringStream on: String new.
	packageStructure writeJsonOn: stream.
	self 
		ajaxPutAt: self prefix, 'packages/' 
		data: stream contents
! !

!AmberProjectCypressExporter class methodsFor: 'initialization'!

initialize

	(AmberProjectExporter exporters)
		 at: 'cypress' put: self
! !

