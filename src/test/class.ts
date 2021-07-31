//ts-check
// https://www.typescriptlang.org/docs/handbook/2/classes.html
/*
    A test class - removeable
*/
class TestExample {
    message: string = null
    id: Number = 0
}

function testClass() {
    var Result = new TestExample()
    Result.message = "text"
    Result.id = 123
    console.log('\n\t', 'TestExample : Result is | ', Result.message, Result.id)

}

testClass()