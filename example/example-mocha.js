
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
