/* 
Напишите программу, которая через prompt считывает число и выводит в консоль
число равное 10% от введенного числа.
*/
let userNumber = +prompt("Введите число")
console.log(userNumber * 10 / 100)

/*
Напишите программу, которая получает два числа и выводит наименьшее.
*/
let number1 = +prompt("Введите первое число")
let number2 = +prompt("Введите второе число")
if(number1>number2) {
    console.log(`Число ${number2} самое маленькое`)
  } else {
    console.log(`Число ${number1} самое маленькое`)
  }

  /*
  Напишите программу, которая считывает через prompt число и выводит одно
  из следующих сообщений: "Число меньше 100", "Число больше 100", "Число равно 100"
  */

let number = +prompt("Введите число")
if(number>100) {
    console.log(`Число ${number} больше 100`)
} else if(number<100) {
    console.log(`Число ${number} меньше 100`)
} else {
    console.log(`Число ${number} равно 100`)
}

/*
Напишите программу, которая запрашивает у пользователя его имя возраст(в годах)
и выводит в консоль сообщение `Hello <name>`, если пользователь совершеннолетний, или 
`Hi <name>` если пользователь несовершеннолетний.
*/
let userName = prompt("Введите свое имя:")
let userAge = +prompt("Введите свой возраст в годах :")
if(userAge >= 18){
    console.log(`Hello ${userName}`)
} else {
    console.log(`Hi ${userName}`)
}




