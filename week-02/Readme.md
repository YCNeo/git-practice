# Readme

## Node version
NodeJS version: `v22.2.0`

## Introduction of `nvm` and `npm`
### `nvm` (Node Version Manager):

* __Purpose__: `nvm` is a tool that allows you to install and switch between multiple versions of Node.js on your development machine.

* __Usage__:
  * __Version Management__: Easily install different versions of Node.js and switch between them as needed.
  * __Environment Isolation__: Helps in managing projects that depend on different Node.js versions without conflicts.

* __Example Commands__:
  * `nvm install 14.17.0` installs Node.js version 14.17.0.
  * `nvm use 12.18.3` switches to Node.js version 12.18.3.

### `npm` (Node Package Manager):

* __Purpose__: `npm` is the default package manager for Node.js, used to install, share, and manage dependencies (libraries and frameworks) required by Node.js applications.

* __Usage__:
  * __Package Installation__: Install packages from the npm registry to use in your projects.
  * __Dependency Management__: Automatically handles the installation of a package's dependencies.
  * __Script Running__: Define and run scripts for tasks like building, testing, and deploying applications.

* __Example Commands__:
  * `npm install express` installs the Express framework into your project.
  * `npm run build` runs the build script defined in your package.json file.

### What is the difference?
* __Functionality__:
  * `nvm` manages Node.js versions, allowing you to switch between different versions of Node.js itself.
  * `npm` manages Node.js packages and dependencies, helping you install and manage libraries required for your application.

* __Scope__:
  * `nvm` affects the global Node.js environment on your machine.
  * `npm` operates at the project level, managing packages within your application's directory.

* __Usage Context__:
  * Use `nvm` when you need to work with multiple Node.js versions, especially if different projects require different versions.
  * Use `npm` to add, remove, or update libraries and tools your Node.js application depends on.

## About the Code testing: I put the test case at `./caseTest` folder