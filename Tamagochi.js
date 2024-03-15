const tamagochi = {
    name: 'Max',
    food: 3,
    energy: 2,
    mood: 1,
    setName: function (name)  {
        this.name = name
    },
    eat: function ()  {
        this.food <= 5 ? this.food++ && this.mood-- : tamagochi
    },
    sleep: function () {
        this.energy <= 5 ? this.energy++ && this.food-- : tamagochi
    },
    play: function () {
        this.mood <= 5 ? this.mood++ && this.energy-- : tamagochi
    },
    getStatus: function  () {
        this.food <= 0 || this.energy <= 0 || this.mood <= 0 ? console.log(`${this.name} умер`) : false


        const a = () => {
            return  tamagochi.food < 3 ? `Я голоден '${this.food}'` : ` Я не голоден '${this.food}'`
        }
        const b = () => {
            return tamagochi.energy < 3 ? `Я хочу спать '${this.energy}'` : `Я не хочу спать '${this.energy}'`
        }
        const c = () => {
            return tamagochi.mood < 3 ? `Мне скучно '${this.mood}'` : `Мне весело '${this.mood}'`
        }
        console.log('',
            `Еда:${a()}\n`,
            `Энергия:${b()}\n`,
            `Настроение:${c()}`
        )
    },
}
console.log(tamagochi)
tamagochi.setName('Jamic')

console.log(tamagochi)
console.log(tamagochi.getStatus())
