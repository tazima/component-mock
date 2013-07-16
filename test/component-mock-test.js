
/**
 * Module dependencies.
 */

var componentMock = require("component-mock");

describe("component-mock", function() {

  var target = "target",
      mock = "mock",
      otherMock = "otherMock";

  beforeEach(function() {
    require.register("target", function(exports, require, module) {
      exports = module.exports = target;
    });
  });

  describe("#registerMock", function() {
    it("should register mock", function() {
      componentMock.registerMock("target", mock);
      expect(require("target")).to.be.equal(mock);
    });

    it("should override registered mock", function() {
      componentMock.registerMock("target", mock);
      componentMock.registerMock("target", otherMock);
      expect(require("target")).to.be.equal(otherMock);
    });
  });

  describe("#deregisterMock", function() {
    it("should restore original target", function() {
      componentMock.registerMock("target", mock);
      componentMock.deregisterMock("target");
      expect(require("target")).to.be.equal(target);
    });

    it("should restore original target after multiple register", function() {
      componentMock.registerMock("target", mock);
      componentMock.registerMock("target", otherMock);
      componentMock.deregisterMock("target");
      expect(require("target")).to.be.equal(target);
    });
  });

});