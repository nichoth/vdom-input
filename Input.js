var h = require('virtual-dom/h');
var state = require('@nichoth/state');
var value = require('observ');
var codes = require('@nichoth/keycodes');
var extend = require('xtend');
var noop = function() {};

module.exports = Input;

function Input(opts) {

  opts = opts || {};
  opts.onComplete = opts.onComplete || noop;

  var defaults = {
    type: 'text',
  };

  var s = state({
    value: value( opts.value || '' ),
    attrs: extend(defaults, opts.attrs),
    handles: {
      onChange: onChange(),
      onComplete: onComplete()
    }
  });

  function onChange() {
    return function(data) {
      s.value.set(data.value);
    };
  }

  function onComplete() {
    return function() {
      opts.onComplete();
    };
  }

  return s;
}

Input.hasValue = function(state) {
  return !!state.value;
};

Input.render = function(state) {

  var attrs = extend(state.attrs, {
    value: state.value,
    oninput: function(ev) {
      state.handles.onChange({ value: ev.target.value });
    },
    onkeydown: function(ev) {
      // tab in input with a value
      if ( ev.keyCode === codes.tab && !ev.shiftKey ) {
        if ( state.value ) {
          state.handles.onComplete();
        }
      }
    }
  });

  return h('input.vdom-input', attrs, []);
};
