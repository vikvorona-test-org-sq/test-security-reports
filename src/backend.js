/*
 * Copyright (C) 2009-2024 SonarSource SA
 * All rights reserved
 * mailto:info AT sonarsource DOT com
 */
const crypto = require("crypto");
const key = "123";
const iv = "12345";

crypto.createCipheriv("DES", key, iv); // Noncompliant
location.href = "javascript:void(0)"; // Sensitive
