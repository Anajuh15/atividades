/*
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
 Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita",
  entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Ana Júlia Souza Gomes
*/
console.clear();
var teclado = require("prompt-sync")();
console.log("Quem telefonou para a v\u00EDtima?");
console.log("Quem esteve no local do crime?");
console.log("Quem mora perto da v\u00EDtima?");
console.log("Quem devia para a v\u00EDtima?");
console.log("Quem j\u00E1 trabalhou com a v\u00EDtima?");
("Se a pessoa responder positivamente a ".concat("segunda quest\u00E3o", " exibir ").concat("Suspeita"));
("Entre ".concat(3, ", e ").concat(4, " como ").concat("cumplice", " e ").concat(5, " como Assasino"));
("Caso contr\u00E1rio, ele ser\u00E1 classificar".concat("Inocente"));
