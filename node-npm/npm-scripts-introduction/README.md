[![NPM Logo](https://sub1.kevinchisholm.com/blog/images/npm-logo.png)](https://blog.kevinchisholm.com)

# Getting started with npm scripts

## Dependencies

What you need to run this app:

* [Node.Js](https://nodejs.org)

## Instructions

### Setup

* Clone this repo:

````
git clone https://github.com/kevinchisholm/getting-started-with-npm-scripts.git
````

* Run this command:

````
npm install
````

## Running the examples

### Build the SASS file only:

````
npm run build:sass
````

### Build the .coffee file only:

````
npm run build:coffee
````

### Uglify the JavaScript file only:

````
npm run build:js
````

### Build SASS, build .coffee and uglify the JavaScript file:

````
npm run build
````

### Start the web server:

````
node index.js
````

### Start the web server, build SASS, build .coffee and uglify the JavaScript file:

````
npm start
````

### Delete all built files:

````
npm run clean
````












