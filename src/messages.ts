export enum Warnings {
    None = 0,
    "Het plok is over.",
    "Het plok is niet over.",
    "De kat krabt de krullen van de trap.",
    "Het bestand is niet gevonden.",
    "Er is een fout opgetreden."
}


export enum Countries {
    Nederland = 0,
    België,
    Duitsland,
    Frankrijk,
    VerenigdeStaten,
    Thailand,
    Cambodja,
    Last
}

export var last = Countries.Last

export function LasCountry() {
    var k = Countries.Last;
    console.log(k - 1, Countries[k - 1]);
}


