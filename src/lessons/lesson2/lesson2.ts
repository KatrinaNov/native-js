console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Задачки на замыкание
// №1
function makeCounterС() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counterС = makeCounterС();
let counter2С = makeCounterС();

// alert( counterС() ); // 0
// alert( counterС() ); // 1
//
// alert( counter2С() ); // ? => 0
// alert( counter2С() ); // ? => 1

// №2

function Counter() {
  let count = 0;
//@ts-ignore
  this.up = function () {
    return ++count;
  };
  //@ts-ignore
  this.down = function () {
    return --count;
  };
}

//@ts-ignore
let counterConst = new Counter();

// alert( counterConst.up() ); // ? => 1
// alert( counterConst.up() ); // ? => 2
// alert( counterConst.down() ); // ? => 1

// 4
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a: number, b: number) {
  return (f: number) => f >= a && f <= b
}

function inArray(arr: number[]) {
  return (x: number) => arr.includes(x)
}

//
// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// 5
let users = [
  {name: "John", age: 20, surname: "Johnson"},
  {name: "Pete", age: 18, surname: "Peterson"},
  {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(value: string) {
  return (a: any, b: any) => a[value] > b[value] ? 1 : -1
}

users.sort(byField('name'));
users.sort(byField('age'));

//6
function makeArmy() {
  // debugger
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let x = i
    let shooter = function () {
      // функция shooter
      return x // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();
console.log(army[0]()); // у 0-го стрелка будет номер 10
console.log(army[5]()); // и у 5-го стрелка тоже будет номер 10


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
  return function (b: number) {
    return a + b;
  }
}

// console.log(sum(3)(6))
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
function makeCounter() {
  let a = 0;

  function innerCount() {
    a += 1
    return a
  }

  return innerCount;
}

const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function makeCounter2(n: number) {
  let a = n
  return {
    increase() {
      return ++a;
    },
    decrease() {
      return --a;
    },
    reset() {
      return a = 0
    },
    set() {
      return a = n
    }
  }
}

const counter3 = makeCounter2(5);
// console.log(counter3.increase()); // 6
// console.log(counter3.increase()); // 7
// console.log(counter3.decrease()); // 6
// console.log(counter3.decrease()); // 5
// console.log(counter3.reset()); // 0
// console.log(counter3.increase()); // 1
// console.log(counter3.set()); // 5

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
function superSum(num: number) {
  if (num <= 0) return 0;
  if (num === 1) return (n: number) => n;
  let _args: number[] = [];

  function helper(...args: number[]) {
    _args = [..._args, ...args];
    if (_args.length >= num) {
      _args.length = num;
      return _args.reduce((acc, number) => acc + number);
    } else {
      return helper;
    }
  }

  return helper;
}

//@ts-ignore
console.log(superSum(2)(2)(5));

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//1
function sumTo(n: number) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum;
}

function sumToRecursion(n: number): number {
  if (n === 0) {
    return 0;
  }
  return sumToRecursion(n - 1) + n
}

function sumToMath(n: number) {
  return (n + 1) * n / 2
}

console.log(sumTo(100))
console.log(sumToRecursion(100))
console.log(sumToMath(100))

//2
function factorial(n: number): number {
  if (n === 0) {
    return 1
  }
  return factorial(n - 1) * n
}
alert( factorial(5) );

//3
function fib(n: number): number {
  if (n <= 2) {
    return 1;
  }
  return fib(n-1) + fib(n-2)
}
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757 => долго

function fibFast(n: number): number {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c =a + b;
    a = b;
    b = c;
  }
  return b;
}
// alert(fibFast(3)); // 2
// alert(fibFast(7)); // 13
// alert(fibFast(77)); // 5527939700884757 => долго

//4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printListLoop(list: any) {
  let temp = list;
  while (temp) {
    console.log(temp.value)
    temp = temp.next
  }
}
// printListLoop(list);

function printList(list: any) {
  console.log(list.value)
  if (list.next) {
    printList(list.next)
  }
}
// printList(list);

function reversePrintListLoop(list: any) {
  let temp = list;
  let arr = [];
  while (temp) {
    arr.push(temp.value)
    temp = temp.next
  }
  for (let i = arr.length -1; i >=0; i--) {
    console.log(arr[i])
  }
}
// reversePrintListLoop(list);

function reversePrintList(list: any) {

  if (list.next) {
    reversePrintList(list.next)
  }
  console.log(list.value)
}
// reversePrintList(list);


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const arrExample = [1, 2, [3, 4, [5, 6]]];
function myFlat(arr: Array<any>, d = 1): any {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? myFlat(val, d - 1) : val), [])
    : arr.slice();
};
console.log(myFlat(arrExample, Infinity))



// just a plug
export default () => {
};