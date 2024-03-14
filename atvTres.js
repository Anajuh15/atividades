/*
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: Ana Júlia Souza
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "a" || letra == "A" || letra == "e") {
    console.log("\u00C0 letra digitada ".concat(letra, " \u00E9 uma vogal"));
}
else {
    console.log("\u00C0 letra digitada ".concat(letra, " \u00E9 uma consoante"));
}
