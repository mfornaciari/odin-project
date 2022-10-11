class Book {
  constructor({ title = '', author = '', pages = 0, read = false }) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    const readString = this.read ? 'already read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}.`;
  }
}

function addBookToLibrary(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData);
  const bookInfo = convertToBookInfo(dataObject);
  library.push(new Book(bookInfo));
  updateTable(library[library.length - 1], list);
}

function convertToBookInfo(dataObject) {
  return {
    ...dataObject,
    pages: parseInt(dataObject.pages),
    read: dataObject.read ? true : false,
  };
}

function updateTable(book, list) {
  const bookInfo = document.createElement('li');
  bookInfo.textContent = book.info();
  list.append(bookInfo);
}

const library = [];
const form = document.getElementById('form');
const list = document.getElementById('book-list');
form.addEventListener('submit', addBookToLibrary);
