// Написать цикл, который создает множество параграфов с каждым 
// десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.

const numbers = document.querySelector(".numbers")
for(let i = 100; i >= 50; i -=10){
    numbers.insertAdjacent("bevoreend", `<p>${i}</p>`)
}

// Написать цикл, который проходится по массиву строк, для каждой 
// строки создает параграф и добавляет его в div с классом 
// strings_container. Строки взять произвольные.

const arrayStr = ["One", "Two", "Tree", "Four", "Five"]
const div = document.querySelector(".strings_container")

for (let i = 0; i < arrayStr.length; i++) {
    div.insertAdjacentHTML("beforeend", `<p>${arrayStr[i]}</p>`)
    
}

// Написать цикл, который проходится по массиву с объектами - 
// у объектов свойства first_name, last_name и  age (данные взять 
// произвольные) - и создает карточки только для совершеннолетних 
// пользователей. Карточка должна содержать информацию об имени, 
// фамилии и возрасте пользователя. Добавить все карточки в div с 
// классом users_container.

const arrayUsers = [
    {
        firstName: "Ivan",
        lastName : "Ivanov",
        age:  23
    },
    {
        firstName: "Denis",
        lastName: "Sidorov",
        age: 18
    },
    {
        firstName: "Mihail",
        lastName: "Petrov",
        age: 17
    },
    {
        firstName: "Semen",
        lastName: "Lobanov",
        age: 28
    },
    {
        firstName: "Maksim",
        lastName: "Terexin",
        age: 45
    }
]

const usersData = document.querySelector(".users-container")

for (let i = 0; i < arrayUsers.length; i++) {
    if(arrayUsers[i].age >= 18){
        usersData.insertAdjacentHTML("beforeend",
                                      `<div class = "user">
                                      <h3>${arrayUsers[i].firstName} ${arrayUsers.last_name}</h3>
                                      <p> Возраст ${arrayUsers.age}</p>
                                    </div>}`)
    }
    
}
