import React from 'react'
import CryptoJS from 'crypto-js';
export const  Encryptedid =(id)=> {
    var encrypted = CryptoJS.AES.encrypt(id, process.env.REACT_APP_SECRETKEY).toString();
    var encodedEncrypted = btoa(encrypted);
    return encodedEncrypted

}

export const  Decryptedid =(decoded)=> {

    return CryptoJS.AES.decrypt(decoded, process.env.REACT_APP_SECRETKEY).toString(CryptoJS.enc.Utf8)

}
