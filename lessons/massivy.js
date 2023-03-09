// let array = []
//
// console.log(typeof array)

// массив -  это список, где можно хранить разные типы данных(строки, числа и т.д)
// массив риферальный тип данных
// у массивов тип данных - object
// обьекты не равны
//  в js все фуннкции это обьекты


// let students = ['aigerim', 'yrys', 'nurali', 'nurdan']
// // kakoito_massiv.map() - перебирает массив
// console.log(students.map((student, index) => student + index))
// console.log(students[0])

// a = []
// b = []
//
// console.log(a === b) // false - массивы никогда не будут равны



// МЕТОДЫ МАССИВОВ

// МЕТОДЫ КОТОРЫЕ МУТИРУЮТ МАССИВ
// push - добавляет элемент в конец массива
// pop - удаляет последний элемент из массива и возвращает его:
// shift - удаляет первый элемент
// unshift - добавляет в начало списка
// если получать элемент из массива по индексу - some_massiv[some_index]


// МЕТОДЫ КОТОРЫЕ СОЗДАЮТ НОВЫЙ ОБЬЕКТ
//  reverse - переварачивает массив
// filter - фильтрует и возвращает значения true
// console.log(students.filter(el => el))


// let students = [12, '2', null]
// students.push('aigerim')
// students.pop()
// students.shift()
// students.unshift('hello')


// let str = 'hello'

// console.log(str.split('')) // [ 'h', 'e', 'l', 'l', 'o' ]
// console.log(str.split('').join(''))



let numbers = [1, 2, 3, 4, 5, 6]

// console.log(numbers.map(number => number + 1)) // проходит циклом и добавляет + 1 к каждому числу
// console.log(numbers.map((number, index) => index))
// console.log(numbers.filter((number, index) => number < 4))
