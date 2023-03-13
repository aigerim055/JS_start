//  ФУНКЦИЯ - это именованный блок кода, который принимает каиее-то значения,
//  совершает над ними определенные действия и возвращает результат этих действий.
// аргументы - это значения функции при обьявлении
//
//  return - это ключевое слово для возвращения результата выполнения функции

// DRY - don't repeat yourself

// когда создаем функцию при помощи function - это назыв function declaration

// function handleClick(a, b) {
//     // let a = 2
//     return a + b
// }
//
// console.log(handleClick(1,4))



// УСЛОВНЫЕ ВЫРАЖЕНИЯ
// if and else - можно исп только один раз, а else if - бесконечно

// function handleSum (arg, foo) {
//     if (arg > foo) {
//         return 'yes'
//     }  else if ( arg == foo){
//         return 'yes'
//     } else {
//         return 'no'
//     }
// }
//
// console.log(handleSum(10, 10))

// function handleSum (user) {
//     return `hello, '${user}`
// }
// //
// console.log(handleSum('Ivan'))

// форматирование строк - `${some_str}`

// function handleHello(user, day) {
//     if (day > 31){
//         let res = day - 31
//         return `ERROR ${res}`
//     } else {
//         if (day <= 15) {
//             if (day % 2 === 0) {
//                 return `welcome ${user}! how are you? today is ${day}, great day, first part of month`
//             } else {
//                 return `welcome ${user}! how are you? today is ${day}, simple day, first part of month`
//             }
//         } else {
//             if (day % 2 === 0) {
//                 return `welcome ${user}! how are you? today is ${day}, great day, second part of month`
//             } else {
//                 return `welcome ${user}! how are you? today is ${day}, simple day, second part of month`
//             }
//         }
//
//     }
// }
//
// console.log(handleHello('Vasya', 15))



//  || - или - 1 true
//  && - и - должно быть 2 true

// function LogIn(age, name, email) {
//     if (age && name && email) {
//         if (Number(age) <= 18) {
//             return `error AGE`
//         } else {
//             if (name.length <= 5) {
//                 return `error NAME`
//             } else {
//                 let check_email = email.includes('@')
//                 // console.log(check_email)
//                 // console.log(email[1])
//                 // console.log(typeof email[1])
//                 tochka = email.indexOf('@') + 1
//                 if (check_email) {
//                     if (email[tochka] === '.') {
//                         return `error EMAIL`
//                     } else {
//                         return 'accepted EMAIL'
//                     }
//                 } else {
//                     return `error EMAIL`
//                 }
//             }
//         }
//     } else {
//         return 'error'
//     }
// }

// console.log(LogIn('19', 'vasyaaa', 't.yyy@.ashsh'))






const checkWorld = (arg) => arg < 5 ? true : false


console.log(checkWorld(7))