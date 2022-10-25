/*
Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma
contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
Ex.: 0 5 10 15 20 25 … 45 50 Fim!
*/


var numero = 50
for (var contador = 0; contador <= numero;contador = contador + 5) {
    
    console.log(contador)
    
}


/*
Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas
na ordem inversa.
Ex.: 50 45 40 35 30 25 … 5 0 Fim!
*/
console.log("--")

var numero1 = 0
for (var contador1 = 50; contador1 >= numero1;contador1 = contador1 - 5) {
    console.log(contador1)
    
}
