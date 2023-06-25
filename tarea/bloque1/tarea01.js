/* Para éste ejercicio, se quiere realizar un programa que intercambie los valores de 
dos variables. Por ejemplo, si nosotros tenemos:

var x = 3

var y = 5

querríamos que el programa intercambie x por y, es decir que resulte en lo siguiente:

x = 5

y = 3

*/

let x = 3;
let y = 5;
console.log(x , y); 

let z = y;
y = x;
x = z;

console.log(x , y);

//destruccturing

[x, y] = [y, x]

console.log(x , y);