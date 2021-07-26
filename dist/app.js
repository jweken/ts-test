"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages = require("./messages");
console.log(messages.Warnings);
console.log(messages.Countries);
console.log('The first item in messages.Countries = ', messages.Countries[0]);

var k = messages.Countries.Last;
console.log(k-1, messages.Countries[k-1]);