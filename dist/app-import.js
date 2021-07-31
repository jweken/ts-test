"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("./messages");
var item = messages_1.Countries.Last;
console.log(item);
var Items = messages_1.Countries;
for (var x = 0; x < Items.Last; x++) {
    console.log(Items[x]);
}
