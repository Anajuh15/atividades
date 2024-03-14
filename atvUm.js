/*
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
 sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA,
 utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
 */
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o valor do raio da lata: "));
var altura = parseFloat(teclado("Digite a altura da lata: "));
var resultado = 3.14 * (raio * raio) * altura;
console.log("o resultado \u00E9 ".concat(resultado));
