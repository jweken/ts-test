/** booleans are a basic type
 * @author JWE
 *
 *  Todo find comments in Handbook
*/
let isDone = false;
let decimal = 6 / 5;
let binary = 0b11010110;
let hex = 0x22CA;
let octal = 0o333;
function myprint() {
    console.log('boolean: isDone =', isDone);
    console.log('binary: =', binary);
    console.log('hex: =', hex);
    console.log('octal: =', octal);
    console.log('decimal: =', decimal);
}
function go() {
    myprint();
}
go();
