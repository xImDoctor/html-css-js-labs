'use strict';

/**
 * Возвращает дробную часть числа.
 * @param {number} num - Число.
 * @returns {number} Дробная часть числа.
 */
function getDecimal(num) {
    return Math.abs(num % 1);
}


/**
 * Нормализует URL, добавляя префикс https://.
 * @param {string} url - Адрес сайта.
 * @returns {string} Нормализованный URL.
 */
function normalizeUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://"))
        return "https://" + url;

    return url.replace("http://", "https://");
}


/**
 * Проверяет наличие спама в строке.
 * @param {string} str - Входная строка.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


/**
 * Усекает строку до указанной длины и добавляет многоточие, если необходимо.
 * @param {string} str - Входная строка.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усеченная строка.
 */
function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + "…";
    
    return str;
}

/**
 * Преобразует строку вида 'var-test-text' в 'varTestText'.
 * @param {string} str - Входная строка.
 * @returns {string} Преобразованная строка.
 */
function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

/**
 * Возвращает массив чисел Фибоначчи до указанного числа n.
 * @param {number} n - Число Фибоначчи.
 * @returns {Array<BigInt>} Массив чисел Фибоначчи.
 */
function fibs(n) {
    const fibArray = [];
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++)
        fibArray.push(fibs(a));

    return fibArray;
}


/**
 * Возвращает массив, отсортированный по убыванию.
 * @param {Array<number>} arr - Входной массив.
 * @returns {Array<number>} Отсортированный массив по убыванию.
 */
function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}


/**
 * Возвращает массив уникальных значений.
 * @template T
 * @param {Array<T>} arr - Входной массив.
 * @returns {Array<T>} Массив уникальных значений.
 */
function unique(arr) {
    return [...new Set(arr)];
}

module.exports = { getDecimal, normalizeUrl, checkSpam, truncate, camelize, fibs, arrReverseSorted, unique };