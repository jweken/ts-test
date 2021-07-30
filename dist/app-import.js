define(["require", "exports", "./messages"], function (require, exports, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var item = messages_1.Countries.Last;
    console.log(item);
    var Items = messages_1.Countries;
    for (var x = 0; x < Items.Last; x++) {
        console.log(Items[x]);
    }
});
