import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


//console.log(this)


// function f() {
//     console.log('Function ', this);
// }
//
// f()

// let obj = { name: 'Evgen' };
// function f() {
//     console.log('Function ', this);
// }
// f()
//
// obj.f = f;
// obj.f();

// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna' };
//
// function f() {
//     console.log('Function ', this);
// }
//
// obj.f = f;
// obj2.f = obj.f;
// obj2.f();

// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         function inner() {
//             console.log('Function ', this);
//         }
//         inner();
//     }
// };
//
// obj2.f();


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         const _this = this;
//         function inner() {
//             console.log('Function ', this);
//             console.log('closure _this', _this);
//         }
//         inner();
//     }
// };
//
// obj2.f();


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         function inner() {
//             console.log('Function ', this);
//         }
//         return inner;
//     }
// };
//
// obj.f = obj2.f();
// obj.f();


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     f() {
//         function inner() {
//             console.log('Function ', this);
//         }
//         return inner;
//     },
//     innerObj: {
//         name: 'innerObj',
//         f() {
//             console.log('Function ', this);
//         },
//     }
// };
//
// obj2.innerObj.f();

// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna' };
//
// function f() {
//     function inner() {
//         console.log('Function ', this);
//     }
//     return inner;
// }
//
// obj.f = f();
// obj.f();


// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna' };
//
// function f() {
//     function inner() {
//         console.log('Function ', this);
//     }
//     return inner;
// }
//
// obj.f = f();
// obj2.f = obj.f;
// obj2.f();


// var test = function UUUU() {
//     // UUUU(); - работает всегда
//     // test(); - работает пока есть test
// };
//
// console.dir(test);
//
// let test2 = test;
// test = null;
// test2()
//
// console.dir(test2);


// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna' };
//
// function f() {
//     function inner() {
//         console.log('Function ', this);
//     }
//     return inner;
// }
//
// f.f = f();
// f.f();


// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna' };
//
// let arrow = () => {
//     console.log('arrow ', this);
// };
//
// arrow();


// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Hanna' };
//
// let arrow = () => {
//     console.log('arrow ', this);
// };
//
// obj2.a = arrow;
// obj2.a();


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     a: () => {
//         console.log('arrow ', this);
//         function inner() {
//             console.log('Function ', this);
//         }
//         inner();
//     },
// };
//
// obj2.a();


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     a: () => {
//         console.log('arrow ', this);
//         let inner = () => {
//             console.log('Function ', this);
//         }
//         inner();
//     },
// };
//
// obj.a = obj2.a();



// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     a()  {
//         console.log('arrow ', this);
//         let inner = () => {
//             console.log('Function ', this);
//         }
//         inner();
//     },
// };
//
// obj.a = obj2.a();


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Hanna',
//     a()  {
//         let bla = 'bla';
//         console.log('arrow ', this);
//         let inner = () => {
//             console.log('Function ', this);
//             console.log(bla);
//         }
//         return inner;
//     },
// };
//
// obj.a = obj2.a();
// obj.a();


// let obj2 = {
//     name: 'Hanna',
//     test() {
//         setTimeout(function() {
//             console.log('Function ', this);
//         }, 100);
//         setTimeout(() => {
//             console.log('arrow ', this);
//         }, 100);
//     },
// };
//
// obj2.test();


// Call, Apply, Bind

// let obj = { name: 'Evgen'};
// let obj2 = {
//     name: 'Hanna',
//     sayHi() {
//         console.log(`Hi! My name is ${this.name}`);
//     }
// };
//
// //obj2.sayHi.bind(obj)()
// let bindedFunc = obj2.sayHi.bind(obj);
// bindedFunc()


// let obj = { name: 'Evgen'};
// let obj2 = {
//     name: 'Hanna',
//     sayHi( a1:any, a2:any, a3:any) {
//         console.log(`Hi! My name is ${this.name}. My args are - ${a1},${a2},${a3}`);
//     }
// };

// // @ts-ignore
// obj2.sayHi.bind(obj, 100, 200, 250, 400)(500, 1000);
// // @ts-ignore
// obj2.sayHi();

// obj2.sayHi.call(obj, 50, 100, 150);
// obj2.sayHi.apply(obj, [50, 100, 150]);
//
// function test(a: any, b: any, c: any) {
//     console.log(arguments);
//     console.log([].filter.call(arguments, el => el > 11));
// }
//
// test(5,10,20)

// function test(a, b, c) {
//     console.log(arguments);
//     console.log([].filter.call(arguments, el => el > 11));
// }
//
// test(5,10,20)


// const constructor = (name, age, city) => {
//     return {
//         name, age, city, sayHi() { console.log(this.name)},
//     };
// }
//
// let obj = constructor('Hanna', 30, 'Minsk');
// console.log(obj);


//console.dir(function() {})


// function Test(name, age) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//
// }
// Test.prototype.sayHi = function(){ return this.name};
// Test.prototype.sayHi = function(){ return this.name};
// Test.prototype.sayHi = function(){ return this.name};
// Test.prototype = {
//     constructor: Test,
//     admn(){},
//     mcbvcv(){}
// };
//
// let obj = new Test('Hanna', 20);
// let obj2 = new Test('Evgen', 35);
// console.log(obj.sayHi === obj2.sayHi);


// just a plug
export const Lesson5 = () => {
    // Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

    // type someObjType = {
    //     name: string;
    //     age: number;
    //     greeting?: () => void
    //     sayHi?: () => void
    // }
    //
    // let someObj: someObjType = {
    //     name: 'Eugene',
    //     age: 32,
    //     sayHi() {
    //         //@ts-ignore
    //         return `My name is ${this.name}. I am ${this.age}`
    //     }
    // }
    function greeting() {
        //@ts-ignore
        return `My name is ${this.name}. I am ${this.age}`
    }
    //
    //
    // someObj.greeting = greeting
    // console.log(someObj.greeting())
    // //@ts-ignore
    // console.log(someObj.sayHi())

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

    const counter = {
        count: 0,
        getCurrentCount() {
            console.log(this.count)
        },
        increment() {
            ++this.count
        },
        decrement() {
            --this.count
        },
        setCurrentCount(newValue: number) {
            this.count = newValue
        },
        resetCurrentCount() {
            this.count = 0
        },
    }
    // console.log(counter.count)
    // counter.increment()
    // console.log(counter.count)
    // counter.setCurrentCount(7)
    // console.log(counter.count)


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
    const counter1 = {
        count: 0,
        getCurrentCount() {
            console.log(this.count)
        },
        increment() {
            ++this.count
            return this
        },
        decrement() {
            --this.count
            return this
        },
        setCurrentCount(newValue: number) {
            this.count = newValue
            return this
        },
        resetCurrentCount() {
            this.count = 0
            return this
        },
    }
    //@ts-ignore
    counter1.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

    function MyFirstConstructorFunc(name: string, age: number) {
        //@ts-ignore
        this.name = name;
        //@ts-ignore
        this.age = age;
    }
    MyFirstConstructorFunc.prototype.greeting = greeting;
    //@ts-ignore
    let obj = new MyFirstConstructorFunc('Kate', 25)
    console.log(obj.greeting())


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

    let One = {
        name: 'One'
    };
    let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};

    // Two.sayHello.bind(One)()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

    const helperObj = {
        name: 'Kate',
        age: 35,
        changeName(name: string) {
            this.name = name
            return this
        },
        setAge(age: number) {
            this.age = age
            return this
        },
        greeting: Two.sayHello
    }
    helperObj.greeting()

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя

    //?????????????????????????????????????????????
    function sumTwoNumbers(a:number,b:number):number {return a + b};

    // function bindNumber(sumTwoNumbers: Function, num: number) {
    //     return function inner(num2: number) {
    //         return sumTwoNumbers(num, num2)
    //     }()
    // }
    const bindNumber = (callBack: any, num: any) => {
        return callBack.bind(null, num)
    }
    console.log(bindNumber(sumTwoNumbers, 5)(10))


// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
    function someFunc(One: any, helperObj: any) {
        return function(str: string) {
            helperObj.changeName.bind(One, str)()
        }
    }
    someFunc(One, helperObj)('Alex')
    console.log(One)


// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
    helperObj.setAge.bind(Two, 30)()
    console.log(Two)

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
    //@ts-ignore
    One.hi = helperObj.greeting.bind(Two)
      //@ts-ignore
    One.hi()

// Реализовать задачи 2-4 из Bind с помощью Call















    return <div></div>

};