###Setup

Download and copy the **image**, **changes**, and **sources** files for PharoCore1.3
into this directory.

At the moment, Pharo1.4 hits an emergency evaluator ... I haven't characterized the problem, yet.

###Prepare image

Now would be a good time to bring up the image and set the window size
to your preference and then save the image. 

###Build Amber server image

Execute the `../../bin/makeAmberServer &` script to install the code necessary
to turn a Pharo image into an Amber server.

###Run Amber server

Execute the `../../bin/amberServer &` and then bring up Amber on
`http://localhost:4001`.

