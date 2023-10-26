// Напишите функцию, которая принимает два числовых аргумента и возвращает 
// наименьшее из них.

console.log("Задание 1")
function minNumber (num1, num2) {
    if(num1 <  num2){
    console.log(`Наименьшее число ${num1}`)
} else {
    console.log(`Наименьшее число ${num2}`)
}
}
minNumber(25, 16)

// Напишите функцию, которая принимает два числовых аргумента и выводит в 
// консоль все четные числа из их диапазона от большего к меньшему.

console.log("Задание 2")
function evenNum (num_1, num_2) {
    if(num_1 < num_2){
        maxNum = num_2
        minNum = num_1
    } else {
        maxNum = num_1
        minNum = num_2
    }
    if(maxNum % 2 != 0) {
        maxNum = maxNum - 1
    }
 for (let i = maxNum; i >= minNum; i-=2) {
    console.log(i)
     }
}

evenNum(3, 15)


// Напишите функцию power, которая принимает два числовых аргумента 
// (основание степени и саму степень) и возвращает число в указанной степени. 
// Значение степени должно быть указано по умолчанию 2.
console.log("Задание 3")
const deg = 2

function power(numb, deg) {
    const result = numb ** deg
    console.log(result) 
}
power(2, 3)



// Напишите функцию, которая принимает числовой аргумент n и считает сумму 
// чисел от 1 до n.
console.log("Задание 4")
function printSum(n){
    let sum = 0
    for( let i = 1; i <= n ; i++){
        sum = sum + i
      }
      console.log(sum)
       
}
printSum(5)


// Напишите функцию, которая принимает два числовых аргумента n и m и считает 
// сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль 
// (в начале сумму четных чисел, а затем сумму нечетных).
console.log("Задание 5")
function sumEvenOdd(n,m) {
    let sumEven = 0
    let sumOdd = 0
     
    for (let i = n; i <= m; i++) {
        if(i % 2 == 0){
           sumEven = sumEven + i 
                 
        } else {
            sumOdd = sumOdd + i
        }
    }
    console.log(`Сумма четных чисел - ${sumEven}, сумма нечетных чисел - ${sumOdd}`)
}
    sumEvenOdd(1,5)

// Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. Если входной массив пуст, 
// функция возвращает null. Если есть несколько одинаковых по длине элементов - 
// функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
console.log("Задание 6")
function printLongStr(str){
    let maxStr = 0
    if(str.length == 0) return null
 for(let i = 0; i < str.length; i++){
    if(str[i].length > str[maxStr].length){
        maxStr = i
    }
 } 
 return str[maxStr]
}

console.log(printLongStr(["one", "two", "three", "four"]))