#Amber Skeleton projects directory

This is where you save your source in [Cypress package format][1].

###Export
To **export** Amber source for a new project as a Cypress package:

```Smalltalk
AmberProjectExporter 
		registerPackage: 'MyPackageName' 
		type: 'cypress' 
		prefix: 'packages/'
```

Once the package is registered with the `AmberProjectExporter`,
subsequent `Commits` of the package will be written as a Cypress package
in the `packages/` directory.

### Import
To **import** Amber source saved as a Cypress package:

```Smalltalk
CypressAmberImporter
		importCypressPackages: #('MyPackageName')
		prefix:'packages/'
```

You can include the above expression in the `ready: option` of the `loadAmber()` function in your `index.html` file:

```javascript
  smalltalk.CypressAmberImporter._importCypressPackages_prefix_(
              [ 
                'MyPackageName',
              ],
              'packages/');
```

The `CypressAmberImporter` automatically registers the package
`MyPackageName` with the `AmberProjectExporter`.

[1]: https://github.com/CampSmalltalk/Cypress
