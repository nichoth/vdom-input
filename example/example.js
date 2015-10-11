var vdom = require('virtual-dom');
var h = vdom.h;
var Input = require('../Input.js');

// return observable state object
var state = Input({

  value: 'example',

  // passed to html element
  attrs: {
    style: {
      color: 'red'
    },
    placeholder: 'placeholder'
  },

  // tab in an input that contains text
  onComplete: function() {
    console.log('complete');
  },
  // backspace in an input without any value
  onDelete: function() {
    console.log("delete");
  }

});

// var virtualEl = Input.render( state() );
// var el = createElement(virtualEl);

var loop = require('main-loop')(state(), Input.render, vdom);
state(loop.update);
document.getElementById('content').appendChild(loop.target);
