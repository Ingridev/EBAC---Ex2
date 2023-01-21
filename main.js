/* Exercício 1
-------------------
-------------------

10 + 15 = 25 (NUMBER)
“10” + 2 = 102 (STRING)
“10” * 2 = 20 (NUMBER)
“10” / 3 = 3.3333333333333335 (NUMBER FLOAT)
“10” % 3 = 1 (NUMBER) 
10 + true = 10 (NUMBER)
10 == ”10” = TRUE (BOOLEAN)
10 === “10” = FALSE (BOOLEAN)
10 < 11 = TRUE (BOOLEAN)
10 > 12 = FALSE (BOOLEAN)
10 <= 10.1 = FALSE (BOOLEAN)
10 > 9.99 = TRUE (BOOLEAN)
10 != “dez” = TRUE (BOOLEAN)
10 + true = 10true (STRING)
“dez” + true = deztrue (STRING)
10 + false = 10 (NUMBER)
10 * false = 10 (NUMBER)
true + true = TRUE (NUMBER)
10++ = 11 (NUMBER)
10-- = 9 (NUMBER)
1 & 1 = 1 (NUMBER)
1 & 0 = 0 (NUMBER)
0 & 0 = 0 (NUMBER)
0 & 1 = 0 (NUMBER)
0 / 1 = 0 (NUMBER)
5 + 5 == 10 = TRUE (BOOLEAN)
“5” + ”5” == 10 = FALSE (BOOLEAN)
“5” * 2 > 9 = TRUE (BOOLEAN)
(10 + 10) * 2 = 40 (NUMBER)
10 + 10 * 2 = 30 (NUMBER)

Exercício 2
-------------------
-------------------

a) branco == “branco” - FALSE

b) branco == cinza - FALSE

c) carro === branco - TRUE 

d) var cavalo = carro == “preto” ? “cinza” : “marron” - CINZA
*/

//e)
const carro = 'preto'
const valor = 30000
const prestacao = 750
const entrada = 3000
const resultado = (valor - entrada) / prestacao

console.log(`Com a entrada no valor de R$${entrada} reais, ainda será necessario ${resultado}x parcelas de R$${prestacao} reais.`)


//f) 
const branco = 'preto'
const preto = 'cinza'
const cinza = 'branco'
const somaString = branco + preto + cinza
console.log(somaString.length)
