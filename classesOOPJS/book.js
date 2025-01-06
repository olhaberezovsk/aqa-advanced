const { isNumberObject } = require("util/types")

class Book {
    constructor(name, author, publishYear) {
        this.name = name,
        this.author = author,
        this.publishYear = publishYear
    }

    get name() {
        return this._name
    } 

    get author() {
        return this._author
    } 

    get publishYear() {
        return this._publishYear
    } 

    set name(value) {
        if(typeof value !== 'string') {
            throw new Error ('Please reenter the name of the book using letters!')
        }

        this._name = value;
    }

    set author(value) {
        if(typeof value !== 'string') {
            throw new Error ('Please reenter the authors name using letters!')
        }

        this._author = value;
    }

    set publishYear(value) {
        if(!Number.isInteger(value)) {
            throw new Error ('Please reenter the year using correct date!')
        }
        this._publishYear = value;
    }

    printInfo() {
        console.log(`The book ${this.name} by ${this.author} was published in ${this.publishYear}`)
    }

    static showOldestBook(bookList) {
        return bookList.reduce((current, oldest) => current._publishYear < oldest._publishYear ? current : oldest)
    }
}

module.exports = Book;