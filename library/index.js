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

function addBookToLibrary(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData);
  const bookInfo = convertToBookInfo(dataObject);
  library.push(new Book(bookInfo));
  updateTable(library[library.length - 1], tableBody);
}

function convertToBookInfo(dataObject) {
  return {
    ...dataObject,
    pages: parseInt(dataObject.pages),
    read: dataObject.read ? true : false,
  };
}

function updateTable(book, tableBody) {
  const row = document.createElement('tr');

  for (const value of Object.values(book)) {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
  }

  tableBody.append(row);
}

const library = [];
const form = document.getElementById('form');
const tableBody = document.getElementById('table-body');
form.addEventListener('submit', addBookToLibrary);
