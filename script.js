let myLibrary = [];

class Book {
    constructor(id, author, title, pages, read) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary.append(book);
}

function removeBookFromLibrary(id) {
    let idx = myLibrary.map(e => e.id).indexOf(id);
    myLibrary.splice(idx, 1);
}

function showLibrary() {
    for (let i = 0, n = myLibrary.length; i < n; i++) {
        console.log(myLibrary[i]);
    }
}

function changeReadStatus(id) {
    let idx = myLibrary.map(e => e.id).indexOf(id);
    myLibrary[idx].read = !myLibrary[idx].read;
}