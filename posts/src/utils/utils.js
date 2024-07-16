// import CryptoJS from "crypto-js";
// import { SECRET_KEY } from "../constants/Constants";

/**
 * The EncryptData function encrypts data using AES encryption with a secret key.
 * @returns The function `EncryptData` returns the encrypted text of the input data after encrypting it
 * using the AES encryption algorithm with a secret key.
 */
// export const EncryptData = (data) => {
//   const encryptedtext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);
//   return encryptedtext.toString();
// };

/**
 * The function DecryptData decrypts an encrypted text using AES encryption with a secret key and
 * returns the decrypted text as a JSON object.
 * @returns The DecryptData function returns the decrypted and parsed JSON data from the encrypted text
 * input.
 */
// export const DecryptData = (encryptedtext) => {
//   const text = CryptoJS.AES.decrypt(encryptedtext, SECRET_KEY);
//   const decryptedtext = text.toString(CryptoJS.enc.Utf8);
//   return JSON.parse(decryptedtext);
// };

/**
 * The function `convertObjToQueryString` converts an object into a query string.
 * @returns A query string representation of the input object is being returned.
 */
export const convertObjToQueryString = (obj) => {
  return "?" + new URLSearchParams(obj).toString();
};
