class Book {

    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    get title() {
        return this.title;
    }

    set title(text) {
        if (text === '')
            return;

        this.title = text;
    }

    get pubYear() {
        return this.pubYear;
    }

    set pubYear(year) {
        if (year <= 0)
            return;

        this.pubYear = year;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        if (value <= 0)
            return;

        this.price = value;
    }
    
    show() {
        console.log(`Название: ${this.title}, Год публикации: ${this.pubYear}, Стоимость: ${this.price}`);
    }


    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}