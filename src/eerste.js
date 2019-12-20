"use strict";
exports.__esModule = true;
/**/
console.log("eerste.js");
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Pear"] = 1] = "Pear";
    Fruit[Fruit["Pineapple"] = 2] = "Pineapple";
    Fruit[Fruit["Banana"] = 3] = "Banana";
})(Fruit = exports.Fruit || (exports.Fruit = {}));
var p = Fruit["Banana"]
console.log(Fruit["Apple"], Fruit[p]);