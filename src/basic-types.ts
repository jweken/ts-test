
/** booleans are a basic type
 * @author JWE
 *  
 *  Todo find comments in Handbook
*/
let isDone: boolean = false
let decimal: number = 6 / 5.37
let binary: number = 0b11010110
let hex: number = 0x22CA
let octal: number = 0o333


function myprint() {
    console.log('boolean: isDone =', isDone)
    console.log('binary: =', binary);
    console.log('hex: =', hex)
    console.log('octal: =', octal)
    console.log('decimal: =', decimal)
}
function go() {

    myprint()
}

go()

