const crypto = require("crypto");
const key = "123";
const iv = "12345";

crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant
// AZBURwZL83ztCUnc4EG6
// AZBURwZL83ztCUnc4EG5
