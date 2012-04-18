"Bootstrap FileTree"
Gofer new
      repository: (MCDirectoryRepository new directory:
                    (FileDirectory default directoryNamed: 'monticello/'));
      package: 'MonticelloFileTree-Core';
      load.
!
"Install latest FileTree"
Gofer new
        repository: (MCFileTreeRepository new directory: 
                    (FileDirectory default directoryNamed: 'projects/filetree/repository/'));
        package: 'MonticelloFileTree-Core';
        load.
!
"Install Basic Amber server code"
Gofer new
        repository: (MCFileTreeRepository new directory: 
                    (FileDirectory default directoryNamed: 'projects/amber-server/packages/'));
        package: 'Amber';
        load.
!
"Install Cypress support for Amber"
Gofer new
        repository: (MCFileTreeRepository new directory: 
                    (FileDirectory default directoryNamed: 'projects/Cypress/packages/'));
        package: 'Cypress-Structure';
        package: 'Cypress-AmberFileServer';
        load.
!
"initialize Amber server"
AmberOneClick prepareImage.
!
