'use strict';

class Book {
    constructor(title, pubYear, price) {
        this._title = title;
        this._pubYear = pubYear;
        this._price = price;
    }

    get title() {
        return this._title;
    }

    set title(text) {
        if (typeof text === 'string' && text.trim() !== '')
            this._title = text.trim();
        else
            console.error('Title должен быть непустой строкой.');
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(newPubYear) {
        if (typeof newPubYear === 'number' && newPubYear > 0)
            this._pubYear = newPubYear;
        else
            console.error('pubYear должен быть положительным числом.');
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if (typeof newPrice === 'number' && newPrice > 0)
            this._price = newPrice;
        else
            console.error('Price должен быть положительным числом.');
    }

    show() {
        console.log(`Название: ${this._title},\nГод публикации: ${this._pubYear},\nЦена: ${this._price}`);
    }

    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}



let book1 = new Book('Game of Thrones', 1925, 2300);
book1.show();
book1.price = 1900;
book1.show();

console.log(book1._price);

let book2 = new Book('To Kill a Mockingbird', 1960, 890);
book2.show()
let book3 = new Book('1984', 1949, 250);
book3.show()


let books = [book1, book2, book3];
// console.log(books);
books.sort(Book.compare);
console.log("Книги после сортировки по году издания:");
for (let i = 0; i < books.length; ++i)
    books[i].show();



// Задание 4
function isEmpty(_object) {

    for (let key in _object)
        return false;

    if (Object.getOwnPropertySymbols(_object).length > 0)
        return false;

    return true;
}

let obj1 = { [Symbol()]: true };
let obj2 = {};

console.log("Объект 1", isEmpty(obj1));
console.log("Объект 2", isEmpty(obj2));


// Задание 5
let classObject = {

    className: "open menu",

    addClass(cls) {
        let classes = this.className.split(' ');
        if (!classes.includes(cls))
            this.className += " " + cls;

        return this;
    },

    removeClass(cls) {
        let classes = this.className.split(' ');
        if (classes.includes(cls)) {
            classes.pop(cls);
            this.className = classes.join(' ');
        }
    }
}

classObject.addClass('close');
console.log(classObject.className);

classObject.addClass('open');
console.log(classObject.className);

classObject.removeClass('menu');
console.log(classObject.className);


// Задание 6
let jsonString = JSON.stringify(classObject, null, 2);
console.log(jsonString);

let object2 = JSON.parse(jsonString);
console.log(JSON.stringify(classObject) === JSON.stringify(object2));


// Задание 7
function getSecondsToday() {

    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.floor((now - start) / 1000) // 'cause ms
}

console.log("Секунд с начала дня: ", getSecondsToday());