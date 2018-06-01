var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);
module.exports = {
    readJsonFile: (jsonFileName) => {
        readFile(jsonFileName,'utf8'),then((response) => {
                return JSON.parse(response);
        });
    }
};