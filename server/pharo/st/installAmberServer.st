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
AmberServer singleton amberPath: '../..'.
AmberServer singleton port: 4002.
!
"initialize Amber server"
AmberOneClick 
  pngPath: 'images/amber.png';
  prepareImage
!
"save image as amberServer"
SmalltalkImage current saveAs: 'AmberServer.image'.
"...and quite"
WorldState addDeferredUIMessage: [
  SmalltalkImage current snapshot: true andQuit: true ].

