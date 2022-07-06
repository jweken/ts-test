var obj: object

try {
    obj = open('.', 'file.ts')
}
catch (error) {
    console.error(error, 'line: 4')
}
console.log('obj = ', obj)

//has error