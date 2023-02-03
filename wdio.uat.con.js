const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {
    baseUrl: 'http://localhost/UAT',
    waitforTimeout: 5000,
    
})