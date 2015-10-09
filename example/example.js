var createElement = require('virtual-dom/create-element');
var h = require('virtual-dom/h');
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
  }

});

var virtualEl = Input.render( state() );
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);
