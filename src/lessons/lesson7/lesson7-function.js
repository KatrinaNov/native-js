//console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

function Animal(name = 'Animal') {
    //@ts-ignore
    this.name = name
}

Animal.prototype = {
    walk() {
        console.log(`${this.name} walking`)
    },
    eat() {
        console.log(`${this.name} eating`)
    },
    sleep() {
        console.log(`${this.name} sleeping`)
    },
    constructor: Animal,
}

//@ts-ignore
const cat = new Animal('Barsik')
console.log(cat)
cat.walk()
cat.eat()
cat.sleep()


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

function Monkey(name = 'Monkey') {
    //@ts-ignore
    Animal.call(this, name)
}

Monkey.prototype = Object.create(Animal.prototype, {
    roar: {
        value: function () {
            console.log(`${this.name} roaring`)
        }
    },
    climb: {
        value: function () {
            console.log(`${this.name} clombing`)
        }
    },
    constructor: {
        value: Monkey,
    },
})


//@ts-ignore
const monkey = new Monkey('My monkey')
console.log(monkey)
monkey.roar()
monkey.climb()
monkey.eat()

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

function Human(name = 'Human') {
    //@ts-ignore
    Monkey.call(this, name)
}

Human.prototype = Object.create(Monkey.prototype, {
    speak: {
        value: function () {
            console.log(`${this.name} speaking`)
        }
    },
    think: {
        value: function () {
            console.log(`${this.name} thinking`)
        }
    },
    constructor: {
        value: Human,
    },
})

const human = new Human('Kate')
human.speak()
human.think()
human.eat()

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
// export default () => {
// };