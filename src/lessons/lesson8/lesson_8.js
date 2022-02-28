// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// const str = 'fgfggg';
// console.log(str[0]);

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// Number.prototype.plus = function (num) {
// 	return this + num;
// }
// Number.prototype.minus = function (num) {
// 	return this - num;
// }
// console.log((2).plus(3).minus(1))

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

// function getString(a, b, c, d) {
// 	return `${b}${a}${c}${a}${d}`
// }
//
// function getStr() {
// 	return [].slice.call(arguments, 1).join(arguments[0])
// }
//
// function getStr(separator, ...args) {
//     return args.join(separator);
// }
// console.log(getStr('*', '1', 'b', '1c'))

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};
// var sum = 0;
//
// function countValues(list) {
//     sum += list.valueNode;
//     if (list.next) {
//         for (let i = 0; i < list.next.length; i++) {
//             countValues(list.next[i])
//         }
//     }
//     return sum
// }

// function getValue(x) {
//     let sum = 0
//     for (let key in x) {
//         if (key === 'valueNode') {
//             sum += x[key]
//         }
//         else {
//             sum += getValue(x[key])
//         }
//     }
//     return sum
// }

// console.log(countValues(tree))


// Task 5
// исправить код, что бы работал правильно

//
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(func, name, author) {
    func.call(this, name, author)
    return this
}

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев')

// var book = new Foo(Book, 'js', 'petr');
// console.log(book)
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// function f(a, b) {
//     if (b !== undefined) {
//         return a + b
//     } else {
//         return function(b) {
//             return a + b
//         }
//     }
// }

// console.log(f(2,3))
// console.log(f(2)(3))

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// function f2(arg) {
//     var val = arg;
//     return function(arg2) {
//         return (arg2 !== undefined) ?  f2(arg2 + val) : val
//     }
// }


// let sum = 0
//
// const foo = (number = 0) => {
//     if (number === 0) return sum
//     sum += number
//     return foo
// };
//
// console.log(foo(1)(2)(3)(6)(5)())


// свой map
// const array=[1,2,3,4]
// Array.prototype.myMap=function(callback){
//     console.log(this)
//     const newArr=[]
//     for (let i=0;i<this.length;i++){
//         newArr.push(callback(this[i]))
//     }
//     return newArr
// }

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

function seven(arg = 0) {
    return 7 + arg;
}
function one(arg = 0) {
    return 1 + arg;
}
//
// function plus(arg) {
//     return arg
// }

// function minus(arg) {
//     return -arg
// }
//
//
// console.log(seven(plus(one())))

// Task 10
// Реализовать функцию сортировки массива пузырьком

let arr = [3, 6, 1, 44, 553, 5]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
    return arr;
}

// console.log(bubbleSort(arr))

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

const str = "())({}}{()][][";
const str1 = "()({}){()[]}";

// function checkPair(str) {
//     if (str.length % 2) return false
//     // пары скобок
//     let br = "(){}[]";
//     // стек открывающих скобок
//     let stek = [];
//     for (let i = 0; i < str.length; i++) {
//         let index = br.indexOf(str[i]);
//         // если скобка закрывающая
//         if (index % 2) {
//             // если открывающих скобок нет, плохо
//             if (stek.length === 0) return false;
//             // берем последнюю скобку из открывающих
//             let lastBracket = stek.pop();
//             // если открывающая не соответствует закрывающей - плохо
//             if (lastBracket !== br[index - 1]) return false
//         } else {
//             // если открывающая, добавляем ее в стек.
//             stek.push(str[i])
//         }
//     }
//     return stek.length === 0
// }

// function checkPair(str) {
//     const stack = []
//     const obj = {
//         "(": ')',
//         "[": ']',
//         "{": '}',
//     }
//     for (let i = 0; i < str.length; i++) {
//         const bracket = str[i]
//         if (bracket === '(' || bracket === '[' || bracket === '[') {
//             stack.push(bracket)
//         } else {
//             const lastEl = stack.pop()
//             if (bracket !== obj[lastEl]) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// console.log(checkPair(str))
// console.log(checkPair('{}[]()'))
// console.log(checkPair('{)'))

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
// function uniqueArray(arr) {
//     return [...new Set(arr)]
// }

// function uniqueArray(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// function uniqueArray(arr) {
//     return arr.filter((item, index, arr) => arr.indexOf(item) === index);
// }
//
// function uniqueArray(arr) {
//     let newArr = {}
//
//     arr.forEach(item => {
//         newArr[item] = item
//     })
//     return Object.keys(newArr)
// }
//
// console.log(uniqueArray([3,5,3,3,4,7,5]))

// const intervalId = setInterval(() => { console.log('a') }, 10)
// setTimeout(() => {
//     const promise = new Promise((res) => { console.log('b'); res('c') });
//     promise.then((value) => {
//         console.log(value);
//         setTimeout(() => {
//             console.log('d')
//             clearInterval(intervalId)
//         }, 10)
//     })
//     console.log('e')
// }, 10)

// a b e c a d
(async()=>{
    await new Promise((res,rej)=>res(1))
    return 2
})().then((n)=>console.log('then', n))
    .catch((n)=>console.log('catch', n))

//

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// function double(arr) {
//     return arr.filter(item => item).map(item => item*2)
// }
//
// console.log(double([1, 2, null, 7, 8, null, 3]))

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};
// var arrOfValues = []
//
// function getValuesOfTree(tree) {
//     arrOfValues.push(tree.value);
//     if (tree.children) {
//         // for (let i=0; i < tree.children.length; i++) {
//         //     getValuesOfTree(tree.children[i])
//         // }
//         tree.children.forEach((item) => {
//             getValuesOfTree(item)
//         })
//     }
//     return arrOfValues;
// }

// console.log(getValuesOfTree(tree2))

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// var sumOfValues = 0
// function sumValuesOfTree(tree) {
//     sumOfValues += tree.value;
//     if (tree.children) {
//         // for (let i=0; i < tree.children.length; i++) {
//         //     getValuesOfTree(tree.children[i])
//         // }
//         tree.children.forEach((item) => {
//             sumValuesOfTree(item)
//         })
//     }
//     return sumOfValues;
// }
//
// console.log(sumValuesOfTree(tree2))

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// function Bomba(time) {
//     this.time = time;
// }
// Bomba.prototype.detonate = function() {
//     setTimeout(() => alert('Boom!'), this.time)
// }
//
// const bomba = new Bomba(2000);
// bomba.detonate()

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

function rle(str) {
    let newStr = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === newStr[newStr.length-1]) {
            count +=1
        } else {
            count && newStr.push(count+1)
            newStr.push(str[i]);
            count = 0;
        }
    }
    count && newStr.push(count+1)
    return newStr.join('');
}
//
console.log(rle('AAVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// function isSorted(arr) {
//     // console.log(arr.sort().join(''))
//     // console.log(arr.join(''))
//     return arr.join('') === [...arr].sort().join('')
// }
//
// console.log(isSorted([3, 9, -3, 10]))

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// function missing(arr) {
//     let number = arr.sort().find((item, i) => item !== i+1)
//     return number && number - 1
// }
//
//
// console.log(missing([1, 4, 3]))
// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

/**
 * LinkedList has 2 members, head and tail:
 * - head is a value
 * - tail is either another LinkedList, or null
 */
class LinkedList {
    constructor(head, ...tail) {
        this.head = head
        this.tail = tail.length
            ? new LinkedList(...tail)
            : null
    }

    add(item) {
        if (this.tail) {
            this.tail.add(item)
        } else {
            this.tail = new LinkedList(item)
        }
    }

    has(item) {
        if (this.head === item) {
            return true
        }
        if (this.tail === null) {
            return false
        }
        return this.tail.has(item)
    }
}

let list = new LinkedList(1, 2, 3)
// console.log(list.add(4))
// console.log(list.add(5))
// console.log(list.has(1))                        // true
// console.log(list.has(4))                         // true
// console.log(list.has(6))


// Task 21
// Что выведет консоль?

// Promise
//     .resolve()
//     .then(() => console.log(1))
//     .then(() => console.log(2))
//     .then(() => console.log(3));
//
// Promise
//     .resolve()
//     .then(() => console.log(4))
//     .then(() => console.log(5))
//     .then(() => console.log(6));

//1 4 2 5 3 6