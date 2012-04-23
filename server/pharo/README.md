#Pharo Amber File Server

##Installation

 1. Download and copy the **image**, **changes**, and **sources** files for PharoCore1.3
into this directory. *At the moment, Pharo1.4 hits an emergency evaluator ... I haven't 
characterized the problem, yet.*

 2. Execute `../../bin/makeAmberServer` to install the Amber File Server support code into a Pharo image.
    The script saves the image as `AmberServer.image`.

 3. Execute `../../bin/amberServer &` to launch the Amber File Server image. 

 4. Change the port (4002 by default).
   
 5. Press the `Start server` button to start the Amber File Server process.

 6. Bring up Amber on `http://localhost:4002` and start development.

## Install Scripts

You can edit the install script in the
`server/pharo/st/installAmberServer.st` file if you would like to
customize any aspect of the File Server image.

## Laurent Laffont's Amber 0.9.1 OneClick

The bulk of the work for the Amber File Server is based on the [Amber 0.9.1 OneClick][2] done 
by [Laurent Laffont][1].

[1]: https://github.com/lolgzs
[2]: http://forum.world.st/ANN-Amber-0-9-1-OneClick-td4378569.html