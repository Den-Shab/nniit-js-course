//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n == (n & ~0)
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    for (let i = 2; i <= 20; i += 2) {
        arr.push(i);
    }
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n == 0){
        return 0
    }
    return (n + recSumTo(n - 1))
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n == 1){
        return 1
    }
    return factorial(n - 1) * n
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 0){
        return false
    }
    return ((n & (n - 1)) == 0)
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n == 0){
        return 0
    }
    if (n == 1){ 
        return 1
    }
    if(n == 2){ 
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
