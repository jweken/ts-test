define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fruit = void 0;
    /**/
    console.log("eerste");
    var Fruit;
    (function (Fruit) {
        Fruit[Fruit["Apple"] = 0] = "Apple";
        Fruit[Fruit["Pear"] = 1] = "Pear";
        Fruit[Fruit["Pineapple"] = 2] = "Pineapple";
        Fruit[Fruit["Banana"] = 3] = "Banana";
    })(Fruit = exports.Fruit || (exports.Fruit = {}));
    console.log(Fruit);
});
