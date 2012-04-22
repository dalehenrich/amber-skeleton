#Amber Skeleton `server/projects` directory

###`amber-cypress` project

The mount point for the [amber-cypress][3]. The **amber-cypress**
project implements the code that loads and stores [Cypress package format][4] for Amber Smalltalk.


###`amber` project

The mount point for the `git submodule` that references the [Amber
project][1]. Currently, this `submodule` is a reference to my fork of
the Amber project, but there is no special dependency upon my fork and
this reference can be replace wGith a reference to your own Amber project.

*To replace a `git submodule` reference, follow these [instructions to
first remove the amber, then add a reference your own amber submodule][2].*

###`importer` project

The `importer` project implements the fundamental **Amber Skeleton**
support:

  * **AmberProjectImporter** loads code from a specified location.
  * **AmberProjectStandardExporter** saves code to a specified location.
    If you use **AmberProjectImporter** to load the code, 
    **AmberProjectStandardExporter** will save the code in the original location

[1]: https://github.com/NicolasPetton/amber
[2]: http://chrisjean.com/2009/04/20/git-submodules-adding-using-removing-and-updating/
[3]: https://github.com/CampSmalltalk/amber-cypress
[4]: https://github.com/CampSmalltalk/Cypress
