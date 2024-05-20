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
        console.log(`Title: ${this._title}, Public Year: ${this._pubYear}, Price: ${this._price}`);
    }

    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}



const book1 = new Book('The Great Gatsby', 1925, 15.99);
book1.show();

console.log(book1._price);
