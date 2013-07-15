
/**
 * Export registerMock and deregisterMock.
 */

exports = module.exports = {
  registerMock: registerMock,
  deregisterMock: deregisterMock
};

var originalMockMap = {};

/**
 * register mock
 * @param {String} moduleName
 * @param {Object} mock
 */

function registerMock(moduleName, mock) {
  originalMockMap[moduleName] = require.modules[moduleName];
  require.register(moduleName, function(exports, require, module) {
    module.exports = mock;
  });
}

/**
 * deregister mock
 * @param {String} moduleName
 */

function deregisterMock(moduleName) {
  require.register(moduleName, originalMockMap[moduleName]);
}
