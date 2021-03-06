
# component-mock [![Build Status](https://travis-ci.org/tazima/component-mock.png?branch=master)](https://travis-ci.org/tazima/component-mock)

  Component mock.

## Installation

  Install with [component(1)](http://component.io):

    $ component install tazima/component-mock

## API

### registerMock(moduleName. mock)

  Register mock.
  
### deregisterMock(moduleName)

  Deregister mock.
  
## Example

  Example using Mocha.
  
```js
// Suppose that `ListView` depends on `ItemView`.
// Mock `ItemView` for testingof `ListView`.

var componentMock = require("component-mock");

// require `ListView` after set ItemView mock.
var ListView = null;

describe("ListView", function() {

  beforeEach(function() {
    this.ItemViewMock = {};
    componentMock.registerMock("item-view", this.ItemViewMock);
    ListView = require("list-view");
  });

  afterEach(function() {
    componentMock.deregisterMock("item-view");
  });

  it("some test ...");

});
```

## License

  MIT
