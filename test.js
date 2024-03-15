// for (let i = 0; i < 4; i+= 1) {
//     console.log(i)
// }
//
// const arr = ['a', 'b', 'c', 'd']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let i = arr.length; i > 0; i--) {
//     console.log(arr[i - 1])
// }

// while (x < 3) {
//     console.log(x)
//     x++
// }

// while (true){
//     console.log(x)
//     x++
//     break
// }

// let word = ''
// while (word.length < 5) {
//     const value = prompt('Введите букву')
//     if (value.length === 0) {
//         break
//     }
//     word += value
//     console.log(word)
// }

// let x = 3
// do {
//     console.log(x)
//     x++
// }while (x < 3)
//
// let y = 3
// while (y < 3) {
//     console.log(y)
//     y++
// }


const arr = ['a', 'b', 'c', 'd']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// for (let letter of arr) {
//     console.log('letter:', letter)
// }
// const user = {
//     name: 'John',
//     age: 21,
//     isMarried: false
// }
//
// for (let key in user) {
//     if (key === 'age'){
//         break
//     }
//     console.log(key, user[key])
// }

// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }

const input = prompt('Введите число')
const number = Number(input)

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${i*number}`)
}