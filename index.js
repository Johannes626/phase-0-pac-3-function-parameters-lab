const string = 'Hi, my name is'
function introduction(name) {
    let greeting = `${string} ${name}.`
    return greeting
}

function introductionWithLanguage(name, language) {
    let greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return greeting
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    let greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return greeting
}