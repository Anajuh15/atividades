/* 
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
 sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA,
 utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
 Nome: Ana Júlia Souza Gomes
 */

let teclado = require(`prompt-sync`)();
let raio: number = parseFloat(teclado(`Digite o valor do raio da lata: `));
let altura: number = parseFloat(teclado(`Digite a altura da lata: `));
let resultado: number = 3.14 * (raio * raio) * altura
console.log( `o resultado é ${resultado}`);