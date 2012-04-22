### Amber Skeleton scripts

#### amberServer

Launches the pharo image that acts as the file server for amber. The
root directory for the Amber File server is the root directory of the
**Amber Skeleton** project.

#### makeAmberServer

Makes the `amberServer` pharo image. See the README in the
`server/pharo`directory for additional instructions.

#### launchServer

Common script for launching the pharo vm. The expects the shell
variable `$AMBER_PHARO_VM` to point to the Pharo vm executable. 

This script `cd's` to the `server/pharo` directory and launches the pharo vm, consequently `FileDirectory default` is the `server/pharo` directory, as it should be.

The Amber install script arranges for the Amber server root to be the
root directory of the **Amber Skeleton** project.
