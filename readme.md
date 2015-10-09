# vdom input

`virtual-dom` wrapper around an input element. Returns an observable state object usable with the [mercury](https://github.com/Raynos/mercury) interface.


## install

    $ npm install vdom-input


## example

```js
var createElement = require('virtual-dom/create-element');
var h = require('virtual-dom/h');
var Input = require('../Input.js');

// return observable state object (instance of `observ-struct`)
var state = Input({
  value: 'example',

  // called on tab in an input that contains text
  onComplete: function() {
    console.log('complete');
  }

});

var virtualEl = Input.render( state() );
var el = createElement(virtualEl);

document.getElementById('content').appendChild(el);
```


## methods

### Input.hasValue(state)

Return boolean
