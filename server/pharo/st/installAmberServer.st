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
"set up the standard amberPath and port"
AmberServer singleton amberPath: '../projects/amber'.
AmberServer singleton port: 4001.
!
"initialize Amber server"
AmberOneClick 
  pngPath: 'images/amber.png';
  prepareImage
!
"save image as amberServer"
(Smalltalk image)
  saveAs: 'AmberServer.image';
  snapshot: true andQuit: true.

