var exec = require('cordova/exec');

exports.getUUID = function (success, error) {
    var serviceName = 'UUIDiOSPlugin';
    exec(success, error, serviceName, 'getUUID', []);
};
