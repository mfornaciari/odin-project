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
}

function convertToBookInfo(dataObject) {
  return {
    ...dataObject,
    pages: parseInt(dataObject.pages),
    read: dataObject.read ? true : false,
  };
}

const library = [];
const form = document.getElementById('form');
form.addEventListener('submit', addBookToLibrary);
