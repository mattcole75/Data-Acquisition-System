const axios = require('../shared/axios/auth');
const crypto = require('crypto');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./tmp');
const config = require('../config/config');

axios.post('/user/login', {
    email: config.get('user'),
    password: crypto.createHash('sha256').update(config.get('password')).digest('hex')
})
.then(res => {
    localStorage.setItem('localId', res.data.user.localId);
    localStorage.setItem('idToken', res.data.user.idToken);
})
.catch(err => {
    console.log(err);
});