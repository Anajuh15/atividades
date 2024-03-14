/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente,
tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E),
conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3
Nome Aluno: Ana Julia Souza
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite a primeira nota:"));
var n2 = parseFloat(teclado("Digite a segunda nota:"));
var media = (n1 + n2) / 2;
if (media >= 8.5 && media <= 10) {
    console.log("A media ".concat(media, " tem nota \"A\""));
}
if (media >= 7 && media < 8.5) {
    console.log("A media ".concat(media, " tem nota \"B\""));
}
if (media >= 5 && media < 7) {
    console.log("A media ".concat(media, " tem nota \"C\""));
}
if (media >= 3 && media < 5) {
    console.log("A media ".concat(media, "tem nota \"D\""));
}
if (media < 3) {
    console.log("A media ".concat(media, " tem nota \"E\""));
}
