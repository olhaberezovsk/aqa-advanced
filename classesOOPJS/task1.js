const Book = require('./book')
const Ebook = require('./ebook')

const bookHP = new Book('Harry Potter and the Philosophers Stone', 'J. K. Rowling', 1997)
const bookLOTR = new Book('The Lord of the Rings', 'J. R. R. Tolkien' , 1954)
const bookBBL = new Book('Babel', 'R. F. Kuang', 2022)

bookHP.printInfo();
bookLOTR.printInfo();
bookBBL.printInfo();

const booksArray = [bookHP, bookLOTR, bookBBL];
const theOldestBook = Book.showOldestBook(booksArray);
console.log(theOldestBook);

const bookColony = new Ebook('Colony. New dark ages', 'Max Kidruk', 2022, 'PDF')

bookColony.printInfo();

const bookNew = Ebook.addingFormat(bookHP, 'Paper');
console.log(bookNew);
