"Change these values as needed"
AmberServer singleton stop. "necessary if you are changing the port number"
AmberServer singleton amberPath: 'projects/amber'.
AmberServer singleton port: 4003.
!
"refresh Amber GUI"
AmberServerControl startUp: true.
!

