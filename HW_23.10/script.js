/*
Напишите цикл for, который выводит в консоль каждое второе число от 0 до 10
*/
const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 1; i < numbers1.length; i +=2) {
       
    console.log(numbers1[i])
        
    }
/*
Напишите цикл for, который выводит в консоль все числа от 55 до 20
*/

    for (let i = 55; i >= 20; i --) {
       
    console.log(i)
        
    }
/*
Дан массив const numbers = [3, 5, 11, 2, 8, 1, 6] Сформировать новый массив numbers_squared
и передать в него все элементы из массива numbers, возведенные в квадрат.
*/

const numbers = [3, 5, 11, 2, 8, 1, 6]
let numbers_squared =[]
for (let i = 0; i < numbers.length; i ++) {
    numbers_squared[i] = numbers[i]**2
    console.log(numbers_squared)
            
}

/*
Создать переменную last_elem и передать в нее последний элемент из сформированного массива
numbers_squared (обратиться к элементу массива по индексу)
*/

const last_elem = numbers_squared.pop()
console.log(last_elem)



/*
Дан объект user. Используя данные из объекта, сформировать строку в формате:
`Users name is <first_name> <last_name>. He is <age> years old`
*/
const user = {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500
}
const {first_name, last_name, age} = user
console.log(`Users name is ${first_name} ${last_name}. He is ${age} years old.`)