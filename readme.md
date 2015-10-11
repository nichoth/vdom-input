# vdom input

`virtual-dom` wrapper around an input element. Returns an observable state object usable with the [mercury](https://github.com/Raynos/mercury) interface.


## install

    $ npm install vdom-input


## example

```js
var vdom = require('virtual-dom');
var h = vdom.h;
var Input = require('vdom-input');

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

var loop = require('main-loop')(state(), Input.render, vdom);
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```


## methods

### Input.hasValue(state)

Return boolean
