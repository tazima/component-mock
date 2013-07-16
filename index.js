
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
 * Register mock.
 * @param {String} moduleName
 * @param {Object} mock
 * @api public
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
 * Deregister mock.
 * @param {String} moduleName
 * @api public
 */

function deregisterMock(moduleName) {
  globalRequire.register(moduleName, originalMockMap[moduleName]);
}
