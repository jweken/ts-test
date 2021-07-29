//ts-check
// https://www.typescriptlang.org/docs/handbook/2/classes.html
/*
    A test class - removeable
*/
class A {
    constructor() {
        this.message = null;
        this.id = 0;
    }
}
function testClassA() {
    var B = new A();
    B.message = "text";
    B.id = 123;
    var h = B.message;
    console.log('\n\t', h, B.id, 'TestClass Resuli');
}
testClassA();
