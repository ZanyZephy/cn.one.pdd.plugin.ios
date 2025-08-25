var exec = require('cordova/exec');

exports.getUUID = function (success, error) {
    var serviceName = 'IOSUUID';
    exec(success, error, serviceName, 'getUUID', []);
};
