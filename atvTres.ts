/*
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: Ana Júlia Souza
*/

const teclado = require(`prompt-sync`)();

let letra : string = teclado(`Digite a letra: `);

if (letra == `a` || letra == `A` || letra == `e`){
    console.log(`À letra digitada ${letra} é uma vogal`);
}
else{
    console.log(`À letra digitada ${letra} é uma consoante`);
}
