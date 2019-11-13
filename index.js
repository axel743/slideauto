const readline = require('readline-sync')

function start() {
    const content = {}

    content.Resultado = askReturnSerchTerm()
    content.prefix = askReturnSerchPrefix()

    function askReturnSerchTerm() {
        return readline.question('Diga o termo a ser procurado na Wikipedia:')
    }
    function askReturnSerchPrefix() {
        const prefixes = ['Quem e', 'O que e', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
    console.log(content)
}
start()