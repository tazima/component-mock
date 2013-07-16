
/**
 * Export registerMock and deregisterMock.
 */

exports = module.exports = {
  registerMock: registerMock,
  deregisterMock: deregisterMock
};

// get global require
var globalRequire = window.require;

if (!globalRequire) throw new Error("globl require is not exist.");

var originalMockMap = {};

/**
 * register mock
 * @param {String} moduleName
 * @param {Object} mock
 */

function registerMock(moduleName, mock) {
  if (!originalMockMap[moduleName]) {
    // store module only first time to keep original module.
    originalMockMap[moduleName] = globalRequire.modules[moduleName];
  }
  globalRequire.register(moduleName, function(exports, require, module) {
    module.exports = mock;
  });
}

/**
 * deregister mock
 * @param {String} moduleName
 */

function deregisterMock(moduleName) {
  globalRequire.register(moduleName, originalMockMap[moduleName]);
}
