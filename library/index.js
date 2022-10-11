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

function addBookToLibrary() {
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData);
  const bookInfo = convertToBookInfo(dataObject);
  library.push(new Book(bookInfo));
  updateList(library[library.length - 1], list);
}

function convertToBookInfo(dataObject) {
  return {
    ...dataObject,
    pages: parseInt(dataObject.pages),
    read: dataObject.read ? true : false,
  };
}

function updateList(book, list) {
  const bookRow = document.createElement('li');
  bookRow.textContent = book.info();
  list.append(bookRow);
}

// Stored books
const library = [];

// HTML Elements
const newBookButton = document.getElementById('new-book-button');
const dialog = document.getElementById('dialog');
const form = dialog.querySelector('form');
const list = document.getElementById('book-list');

// Event listeners
newBookButton.addEventListener('click', () => {
  dialog.showModal();
});
form.addEventListener('submit', addBookToLibrary);
