(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Hello = function Hello(props) {

  return {

    props: props, // set props

    render: function render() {

      // get `word` from props obj with
      // es6 destructuring:
      var word = this.props.word;

      return(
        // Fill in the { blanks }
        React.createElement(
          "p",
          null,
          "Hello, ",
          word,
          "!"
        )
      );
    }
  };
};

exports["default"] = Hello;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helloWorldJs = require('./hello-world.js');

var _helloWorldJs2 = _interopRequireDefault(_helloWorldJs);

var word = 'puppy';

React.render(React.createElement(_helloWorldJs2['default'], { word: word }), document.getElementById('content'));

},{"./hello-world.js":1}]},{},[2]);
