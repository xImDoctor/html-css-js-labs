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

