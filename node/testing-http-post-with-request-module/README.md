[![Node.Js Logo](https://sub1.kevinchisholm.com/blog/images/node-js-logo-200.png)](http://www.nodejsconnect.com/)

# Testing HTTP POST with the Node.js request Module

## Code Examples for Blog Post [Testing HTTP POST with the Node.js request Module](https://blog.kevinchisholm.com/javascript/node-js/testing-http-post-node-js-request-module/)

## Dependencies

What you need to run this app:

* [Node.Js](https://nodejs.org)

## Instructions

### Setup

#### Clone this repo

```
git clone git@github.com:kevinchisholm/video-code-examples.git
```

#### Move into the project directory

```
cd video-code-examples/node/testing-http-post-with-request-module
```

#### Install Dependencies:

```
npm install
```

### Running the examples

### Open up two terminal windows (terminal A and terminal B), and make sure that you are in the root of the repository folder.

* In **terminal A**, execute this command:

```
node post-server.js
```

* In **terminal B**, execute this command: 

```
node test-post.js
```

* In **terminal A**, you should see the message: **The POST data received was XXX**.

* In **terminal B**, you should see the message: **JSON response from the server: XXX**.

_(In each case, **XXX** represents the data from the HTTP POST request)_
