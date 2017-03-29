# Nightwatch / RobotJS Example

This is a simple example to overcome the limitations with the gecko driver and
lack of actions class support.

The goal is to use something similar to the Robot class in Java's AWT package.

## Dependencies
* Make sure you have [java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed.
* Make sure you have [yarn](https://yarnpkg.com/en/docs/install) or npm installed.
* Install node dependencies
  ```
  yarn
  ```
   or
  ```
  npm install
  ```

## Running the Test
* Execute default tests (when firefox opens, make sure to bring the focus to this window)
```
npm test
```
* Execute the same test in chrome
```
./node_modules/nightwatch/bin/nightwatch --env chrome
```
