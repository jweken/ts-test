import * as messages from "./messages"
import * as hr from "./header"

function DoSomePrinting() {
    hr.Header

    console.log(messages.Warnings)
    console.log(messages.Countries)
    console.log('The first item in messages.Countries = ', messages.Countries[0])



}

DoSomePrinting()