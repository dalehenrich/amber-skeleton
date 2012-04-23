#Amber Skeleton

**Amber Skeleton** is a template project for creating your own [Amber-based][1] projects.

## Features

### Link to Amber using `git submodule`

By using `git submodules` to link to Amber,
you no longer need to [fork and include the entire Amber source tree][2] as
part of your own project.

See [Working with submodules][3] and [Git Submodules: Adding, Using, Removing, Updating][4] for more information about using submodules.

### Easily load code from other Amber-based projects

You can use `git submodules` to link to other Amber projects and then
arrange to load the code from that project by including the following
expression in the `ready: option` of the `loadAmber()` function in your `index.html` file:

```javascript
smalltalk.AmberProjectImporter._importStPackages_prefix_(
              [ 
                'ExternalProjectPackage',
              ],
              '/projects/externalProject/');
```

The above expression will load the code form the `/projects/externalProject/st` directory. If you want to load the development `'.js` code use the following:

```javascript
smalltalk.AmberProjectImporter._importJsPackages_prefix_(
              [ 
                'ExternalProjectPackage',
              ],
              '/projects/externalProject/');
```

and for deployment (i.e., loading the `.deploy.js` files:

```javascript
smalltalk.AmberProjectImporter._importDeployJsPackages_prefix_(
              [ 
                'ExternalProjectPackage',
              ],
              '/projects/externalProject/');
```

When you use **AmberProjectImporter** to import your code,
**AmberProjectExporter** will
automatically commit your code to the same directories (`js` and `st`) from which you loaded
the code.

### Share code with other Smalltalk dialects

If you install the [Cypress package][5] support (included by default)
and register your package as a **cypress** package:

```Smalltalk
AmberProjectExporter 
		registerPackage: 'MyPackageName' 
		type: 'cypress' 
		prefix: 'packages/'
```

You package will be stored in the [Cypress package][5] format which is
understood by a number of Smalltalk dialects ([Pharo][6], [Squeak][7], [GemStone][8],
[Amber][9], and [VW][10] as of this writing. A VAST port is in the works).

If you want to load code from another Smalltalk dialect that was saved
in [Cypress package][5] format, execute the following code in a
workspace: 

```Smalltalk
CypressAmberImporter
		importCypressPackages: #('ForeignPackageName')  
		prefix: 'path to directory containing ForiegnPackageName.package'
```

*As of this writing, I haven't done any experiments loading code from
other dialects - Amber is the first `non-Monticello` dialect I've worked
with), so I'll be interested in your results:).*

### Manage Pharo-based server code in same project as Amber code

This project is a perfect example.

## Installation

To start working with your own **Amber Skeleton** project:

  1. [Fork the Amber Skeleton][11] project.
  2. [Rename the forked project] to the name you want the project to
     have. *Note that you might want to have a personal fork of the 
     Amber Skeleton project so you can customize the project for your
     own needs.*
  3. Clone your project to your local machine.
  4. Change the commit reference for the `git submodules` (i.e., remove
     and add the submodule references). It is easier
     to this immediately after cloning. See [Git Submodules: Adding,
     Using, Removing, Updating][4] for more information about using
     submodules.
  4. `init and update` the `git submodules:

```shell
    git submodule init
    git submodule update
```

[1]: https://github.com/NicolasPetton/amber
[2]: https://github.com/NicolasPetton/amber/wiki/Writing-my-first-app
[3]: http://help.github.com/submodules/
[4]: http://chrisjean.com/2009/04/20/git-submodules-adding-using-removing-and-updating/
[5]: https://github.com/CampSmalltalk/Cypress
[6]: https://github.com/dalehenrich/filetree/tree/pharo1.3
[7]: https://github.com/dalehenrich/filetree/tree/squeak4.3
[8]: https://github.com/dalehenrich/filetree/tree/gemstone2.4
[9]: https://github.com/dalehenrich/amber-skeleton
[10]: https://github.com/CampSmalltalk/STIG
[11]: https://github.com/dalehenrich/amber-skeleton/fork_select
[12]: https://github.com/blog/128-let-there-be-renaming
