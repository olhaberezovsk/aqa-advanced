const Book = require('./book')

class Ebook extends Book {
    constructor (name, author, publishYear, fileFormat) {
        super(name, author, publishYear),
        this.fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat(value) {
        if (typeof value !== 'string') {
            throw new Error ('Please enter the format using letters')
        }

        this._fileFormat = value;
    }

    printInfo() {
        console.log(`The book ${this.name} by ${this.author} was published in ${this.publishYear} in ${this.fileFormat} format`)
    }

    static addingFormat(bookInstance, format) {
        return new Ebook (bookInstance.name, bookInstance.author, bookInstance.publishYear, format)
    }
}

module.exports = Ebook;