const CryptoJS = require('crypto-js');

const SECRET_KEY = process.env.CRYPTO_SECRET;

const encrypt = (text) =>{
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}
const decrypt = (cipherText) =>{
    const bytes= CryptoJS.AES.decrypt(cipherText, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return bytes;
}

module.exports = {encrypt, decrypt};