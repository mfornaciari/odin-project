// IDs of all books ever created
const bookIds = [];

class Book {
  constructor({ title = '', author = '', pages = 0, read = false }) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = bookIds.length;
    bookIds.push(this.id);
  }

  info() {
    const readString = this.read ? 'already read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}.`;
  }
}

function addToLibrary() {
  const formData = new FormData(form);
  const book = createBook(formData);
  library.push(book);
  addToList(library[library.length - 1]);
}

function createBook(formData) {
  const dataObject = Object.fromEntries(formData);
  const bookInfo = convertToBookInfo(dataObject);
  return new Book(bookInfo);
}

function convertToBookInfo(dataObject) {
  return {
    ...dataObject,
    pages: parseInt(dataObject.pages),
    read: dataObject.read ? true : false,
  };
}

function addToList(book) {
  const bookRow = createRow(book);
  list.append(bookRow);
}

function createRow(book) {
  const row = document.createElement('li');
  row.id = book.id;
  const text = createSpan(book.info());
  const removeButton = createRemoveButton(book.id);
  row.append(text);
  row.append(removeButton);
  return row;
}

function createSpan(text) {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function createRemoveButton(bookId) {
  const button = document.createElement('button');
  button.textContent = 'REMOVE';
  button.addEventListener('click', () => removeFromLibrary(bookId));
  return button;
}

function removeFromLibrary(bookId) {
  library = library.filter(storedBook => storedBook.Id === bookId);
  removeFromList(bookId);
}

function removeFromList(bookId) {
  document.getElementById(bookId).remove();
}

// Stored books
let library = [];

// HTML Elements
const newBookButton = document.getElementById('new-book-button');
const dialog = document.getElementById('dialog');
const form = dialog.querySelector('form');
const list = document.getElementById('book-list');

// Event listeners
newBookButton.addEventListener('click', () => {
  dialog.showModal();
});
form.addEventListener('submit', addToLibrary);
