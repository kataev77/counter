function createCounter() {
    const counterObject = {
        value: 0,
        increment: function () {
            this.value++
        },
        decrement: function () {
            if (this.value >= 0) {
                this.value--
            }
        },
        incrementBy: function (amount) {
            this.value += amount
        },
        print: function () {
            console.log(this.value)
        },
        reset: function () {
                this.value = 0
        }
    }
    return counterObject
}
const counterr = createCounter()











// let x  = 1
//
// const logConsole = function () {
//     console.log(x)
// }
// x = 2
// logConsole()
//
// function makeCounter(count) {
//
//     return function () {
//         return count++
//     }
// }
// let counter = makeCounter(0)
// let counter2 = makeCounter(0)
//
// alert(counter())
// alert(counter())
//
// alert(counter2())
// alert(counter2())
//
//
// function createIncrement() {
//     let count = 0
//     function increment() {
//         count++
//     }
//     function log() {
//         let message = `Count is ${count}`
//         console.log(message)
//     }
//
//     return [increment, log]
// }
//
// const [increment, log] = createIncrement()
// increment()
// increment()
// increment()
// log()