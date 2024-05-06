/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  return x * pow(x, n - 1);
}

console.log(pow(2, 2));  // 4
console.log(pow(2, 0));  // 1
console.log(pow(2, -2)); // 0.25

/**
* Возвращает сумму чисел от 1 до n,
* используя арифметическую прогрессию
*
* @param {number} n число, по которое ищется сумма
* @return {number} сумма чисел от 1 до n
*/
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(100)); // 5050



/**
 * Проверяет год на високосность
 *
 * @param {number} year год, который нужно проверить, натуральное число
 * @return {boolean} true, если год високосный, иначе - false.
 */
function isLeap(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}


/**
* Возвращает факториал числа n.
*
* @param {number} n число, для которого находится факториал
* @return {number} факториал числа n!
*/
function factorial(n) {
  if (n === 0)
    return 1n;
  return BigInt(n) * factorial(n - 1);
}

console.log(factorial(0)); // 1n
console.log(factorial(5)); // 120n

// Функция fib(n), возвращающая n-е число Фибоначчи
/**
 * Возвращает n-ое число Фибоначчи.
 *
 * @param {number} n номер искомого числа Фибоначчи
 * @return {number} n-oe число Фибоначчи
 */
function fib(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}

console.log(fib(0));   // 0n
console.log(fib(100)); // 354224848179261915075n

// Функция compare(x), возвращающая функцию для сравнения
/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function compare(x) {
  return function (y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

console.log(compare(5)(4)); // false
console.log(compare(5)(5)); // null
console.log(compare(5)(6)); // true

// Функция sum(...), возвращающая сумму всех аргументов
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum());       // 0
console.log(sum(1));      // 1
console.log(sum(1, 2));   // 3
