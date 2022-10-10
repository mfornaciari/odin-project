let library = [];

class Book {
  constructor({ title = '', author = '', pages = 0, read = false }) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    const readString = read ? 'already read' : 'not read yet';
    return `${title} by ${author}, ${pages} pages, ${readString}.`;
  }
}

function addBookToLibrary({ title = '', author = '', pages = 0, read = false }) {
  const bookInfo = { title, author, pages, read };
  library.push(new Book(bookInfo));
}