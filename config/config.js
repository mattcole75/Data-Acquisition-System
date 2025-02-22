const convict = require('convict');

const config = convict({
    version: {
        type: String,
        default: '0.1'
    },
    application: {
        type: String,
        default: 'das'
    },
    user: {
        type: String,
        default: 'althea.vestrit@system.com'
    },
    password: {
        type: String,
        default: '1234abcd!'
    }
});

module.exports = config;