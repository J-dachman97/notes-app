/** README template from https://gist.github.com/Igormandello/57d57ee9a9f32a5414009cbe191db432 **/
---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    $ npm --version

If you need to update `npm`, you can use the following command

    $ npm install npm -g

###
### Yarn installation
  After installing node, run the following command.

      $ npm install -g yarn

---

## Install the app 

    $ git clone https://github.com/J-dachman97/notes-app
    $ cd notes-app
    $ yarn install
    $ cd client
    $ yarn install


## to run the project

    -open two terminals

    In the first window:
        -navigate to root folder
        -node index.js
            -if this is successful you should see listening on port: 4000 in your terminal window 

    In the second window:
        -navigate to root folder
        -cd client
        -npm start
            -if this is successful you should see the front end start up

Enjoy!
