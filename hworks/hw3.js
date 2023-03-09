// TASK 1
// user admin true welcome, 'user'
// false not correct user
//
// function  handleWelcome(user) {
//     if (user.toLowerCase() === 'admin') {
//         return `welcome, ${user}`
//     } else {
//         return 'not correct user'
//     }
// }
//
// console.log(handleWelcome('admin'))


// TASK 2
// today is 'day' of february
// on february only 28 day, your day is 'day' of another month

// function handleDay(day) {
//     if (day === 28) {
//         return `today is ${day} of february`
//     } else {
//         return `on february only 28 day, your day is ${day} of another month`
//     }
// }
// console.log(handleDay(61))


// TASK 3
// 'num' is equals of 50
// 'num' is not correct
// function handleNum(num) {
//     if (num === 50) {
//         return `${num} is equals of 50`
//     } else {
//         return `${num} is not correct`
//     }
// }
//
// console.log(handleNum(51))


// TASK 4
// 'user' 'age' old, welcome
// 'user' 'age' old, rejected
// function handleAge(user, age) {
//     if (age >= 18) {
//         return `${user} ${age} old, welcome`
//     } else {
//         return `${user} ${age} old, rejected`
//     }
// }
//
// console.log(handleAge('Vasya', 19))

// TASK 5
// 'user' name is too short (min 3)
// 'user' name is accepted
// function handleName(user) {
//     if (user.length < 3) {
//         return `${user} name is too short (min 3)`
//     } else {
//         return `${user} name is s accepted`
//     }
// }
//
// console.log(handleName('Vasya'))

// TASK 6
// 'user' name is too long (max 5)
// 'user' name is accepted
// function handleName(user) {
//     if (user.length > 5) {
//         return `${user} name is too long (max 5)`
//     } else {
//         return `${user} name is s accepted`
//     }
// }
//
// console.log(handleName('Vasiliy'))


// TASK 7
// 'age' must be a number ('20')
// function handleCheckAge(age) {
//     if (typeof age === 'string') {
//         return `${age} must be a number `
//     } else {
//         return `welcome!`
//     }
// }
//
// console.log(handleCheckAge('20'))

// TASK 8
// 'age' must be a string (20)
// 'age' must be older then 23
// function handleCheckAge(age) {
//     if (typeof age === 'string') {
//         return `${age} must be a number `
//     } else if (age <= 23) {
//         return `${age} must be older then 23`
//     } else {
//         return `error`
//     }
// }
//
// console.log(handleCheckAge(23))


// TASK 9
// today is monday/tuesday/wednesday/thursday/friday weekend
// max days of weeks 7
// function handleCheckDay(day) {
//     if (day == '1') {
//         return 'today is monday'
//     } else if (day == '2') {
//         return 'today is tuesday'
//     } else if (day == '3') {
//         return 'today is wednesday'
//     } else if (day == '4') {
//         return 'today is thursday'
//     } else if (day == '5') {
//         return 'today is friday'
//     } else if (day == '6') {
//         return 'today is weekend'
//     } else if (day == '7') {
//         return 'today is weekend'
//     } else {
//         return 'max days of weeks 7'
//     }
// }
//
// console.log(handleCheckDay(9))