"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages = require("./messages");
const hr = require("./header");
function DoSomePrinting() {

    console.log(messages.Warnings);
    console.log(messages.Countries);
    console.log('The first item in messages.Countries = ', messages.Countries[0]);
}
DoSomePrinting();
