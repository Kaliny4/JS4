/*
Напиши функцию map(fn, array), которая принимает на вход функцию и
 массив, и обрабатывает каждый элемент массива этой функцией, 
 возвращая новый массив.
*/
`use strict`
function map(fn, array){
    let newArrey = [];
        for(let i=0; i<array.length; i++){
            newArrey.push(addd(array[i]))
            }      
        return newArrey
    }
    function addd(a) { return a + 5; } 
    console.log(map(addd, [1,2,3]));
    

/*Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
1 function checkAge(age) {
2 if (age > 18) {
3 return true;
4 } else {
5 return confirm('Родители разрешили?');
6 } }
*/

let age = prompt('Сколько вам лет?', '');
(age > 18) ? 
alert ("Access allowed") : alert("Родители разрешили?");



