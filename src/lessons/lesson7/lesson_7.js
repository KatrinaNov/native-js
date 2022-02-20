console.log('Lesson 7');

// console.dir(()=> {});
// console.dir(function () {});
// console.dir(class {});

// function Test(name) {
//     this.name = name;
// }
// Test.prototype.someFunc = function () {};
// Test.prototype.sayName = function () {};
// Test.prototype.sayBye = function () {};
// Test.prototype = {
//     someFunc() {},
//     sayName() {},
//     sayBye() {},
//     constructor: Test,
// };

// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// Test.prototype.someFunc = function () {};
//
//
// console.dir(Test);
// let obj = new Test('Yo');
// console.log(obj);
//
// obj.__proto__.sayBye = function () {};
// delete obj.__proto__.sayName;
//
// let obj2 = new Test('Bla');
// console.log(obj2);
//
// console.log(Test.prototype === obj.__proto__);
// console.log(obj2.__proto__ === obj.__proto__);


// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// let obj = new Test('Yo');
//
// let objPrototype = Object.getPrototypeOf(obj);
// console.log(objPrototype);
// console.log(obj.__proto__ === objPrototype);
// console.log(Test.prototype === objPrototype);

//objPrototype.sayBye = function () {};
//objPrototype = { YoYoYo: () => {}};
// obj.__proto__ = { YoYoYo: () => {}};
// console.log(obj);

// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// Test.prototype = {};
//
// let obj = new Test('Yo');
// console.log(obj);

// Object.prototype = { Yo: () =>{} };
// let obj = {};
// delete Object.prototype.toLocaleString;
// Object.prototype.toString = function () {
//     return 'Нежданчик';
// }
// console.log(obj);
// alert({})

// let obj = { name: 'Yo'};
// //Object.setPrototypeOf(obj, { Bla: 'Bla' });
// //console.log(obj)
// let protoObj = Object.create(null);
// console.log(protoObj)
// protoObj.bla = 'vla';
// // Object.setPrototypeOf(obj, protoObj);
// // Object.setPrototypeOf(obj, null);
// // console.log(obj)

// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// class Test2 extends Test {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//
//     sayBla() {
//     }
// }
//
// let obj = new Test2('Yo', 20);
// console.log(obj);

// function Test(name) {
//     this.name = name;
// }
// Test.prototype.sayName = function () {};
//
// let obj = new Test('Yo');
// console.log(obj);
//
// function Test2(name, age) {
//     Test.call(this, name);
//     this.age = age;
// }
// //Test2.prototype.sayBye = function () {};
// Test2.prototype = Object.create(Test.prototype, {
//     constructor: {
//         value: Test2,
//     },
//     sayBye: {
//         value: function () {},
//     },
// });
//
// let obj2 = new Test2('Bla', 10);
// console.log(obj2);

// Function.prototype.customBind = function (ctx, ...args) {
//     //debugger
//     const _this = this;
//     return function (...args2) {
//         //console.log(this)
//         return _this.call(ctx, ...args, ...args2);
//     }
// }
//
// Function.prototype._bind = function (ctx, ...args) {
//     ctx.__bindFunc__ = this;
//     return function (...args2) {
//         return ctx.__bindFunc__(...args, ...args2);
//     }
// }
//
// let obj = {
//     name: 'Evgen',
//     sayName() {
//         console.log(this.name)
//     }
// };
//
// let obj2 = { name: 'Yo' };
// let obj3 = { name: 'Bla' };
//
// obj.sayName._bind(obj2).bind(obj3)()

// let obj = { a: 0 };
// let obj2 = {};
// Object.setPrototypeOf(obj2, obj);
// console.log(obj2);
// console.log(obj2.hasOwnProperty('a')); // false
// obj2.a += 1; // obj2.a = obj2.a + 1
// console.log(obj2.hasOwnProperty('a')); // true
// console.log(obj2.a); // 1


class Test {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

class Test2 extends Test {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayBla() {
    }
}

let obj = new Test2 ('dcdfd', 515);
//console.log(obj)
//console.log(obj instanceof Test )

let obj3 = new obj.constructor('sdfdfd', 5);
console.log(obj3 instanceof Test )
