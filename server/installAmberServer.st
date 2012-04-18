"Bootstrap FileTree"
Gofer new
      url: 'http://ss3.gemstone.com/ss/FileTree';
      package: 'ConfigurationOfFileTree';
      load.
    ((Smalltalk at: #ConfigurationOfFileTree) project version: '1.0') load. 
!
"Install latest FileTree"
Gofer new
        repository: (MCFileTreeRepository new directory: 
                    (FileDirectory default directoryNamed: 'filetree/repository/'));
        package: 'MonticelloFileTree-Core';
        load.
!
"Install Basic Amber server code"
Gofer new
        repository: (MCFileTreeRepository new directory: 
                    (FileDirectory default directoryNamed: 'amber-server/packages/'));
        package: 'Amber';
        load.
!
"Install Cypress support for Amber"
Gofer new
        repository: (MCFileTreeRepository new directory: 
                    (FileDirectory default directoryNamed: 'Cypress/packages/'));
        package: 'Cypress-Structure';
        package: 'Cypress-AmberFileServer';
        load.
!
"initialize Amber server"
AmberOneClick prepareImage.
!
