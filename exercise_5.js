var Book = function (title, genre, author, read, readDate) {
    this.bookTitle = title;
    this.genre = genre;
    this.author = author;
    this.read = read || false;
    this.readDate = readDate || null;
};

var BookList = function (bookShelf){
    this.bookShelf = bookShelf;

    this.currBook = function() {
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false) {
                return bookShelf[i];
            }
        }
    }();

    this.prevBook = function() {
        var theGreatest = null;
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].readDate > theGreatest) {
                theGreatest = bookShelf[i];
            }
        }
        return theGreatest;
    }();


    this.booksRead = function() {
        var counter = 0;
        for (var i = 0; i < this.bookShelf.length; i++){
            if (this.bookShelf[i].read){
                counter++;
            }
        }
        return counter;
    };

    this.booksNotRead = bookShelf.length - this.booksRead();

    this.findNextBook = function() {
        for (var i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].read === false && this.bookShelf[i] !== this.currBook) {
                this.nextBook = this.bookShelf[i];
                return this.nextBook;
            }
        }
           
        this.nextBook = null;
        return this.nextBook;
    };


    this.addBook = function(newBook){
        this.bookShelf.push(newBook);
    };

    this.finishCurrentBook = function() {
        this.currBook.read = true;
        this.currBook.readDate = new Date();
        this.prevBook = this.currBook;
        this.currBook = this.nextBook;
        this.nextBook = this.findNextBook();
    };
    this.nextBook = this.findNextBook();
};



book1 = new Book("mobius dick", "sci fi", "Lilo", true, new Date(2013, 2, 25));
book2 = new Book("bob", "fantasy", "Gracie", true, new Date(2013, 0, 25));
book3 = new Book("hackbright", "nerd", "liz", false);
book4 = new Book("something else", "English Classics", "Shakespeare", true, new Date(2011, 0, 25));
book5 = new Book("Bible", "religion", "God, Matthew, Mark, Luke, John", false);
book6 = new Book("Bible2", "religion", "God, Matthew, Mark, Luke, John", false);

shelfOfBooks = [book1, book2, book3, book5, book6];
bookList = new BookList(shelfOfBooks);

// console.log(bookList.booksRead());
// console.log(bookList.booksNotRead);
// console.log(bookList.findNextBook());
// console.log(bookList.lastBook());

// console.log(bookList.bookShelf);
// bookList.addBook(book4);
// console.log(bookList.bookShelf);
console.log(bookList.nextBook);
console.log(bookList.currBook);
console.log(bookList.prevBook);

console.log(' ');

console.log(bookList.finishCurrentBook());
console.log(bookList.nextBook);
console.log(bookList.currBook);
console.log(bookList.prevBook);


// var bob = function(){
//     console.log("hi");
// }();
