class Library {
  constructor() {
    this.allBook = [];
    this.storage = 'data';
  }

  // ADD METHOD
  addBook(title, author) {
    if (title.value !== '' && author.value !== '') {
      this.allBook.push({ title: title.value, author: author.value });
      localStorage.setItem(this.storage, JSON.stringify(this.allBook));
      title.value = '';
      author.value = '';
    }
  }

  // REMOVE METHOD
  removeBook(index) {
    this.allBook.splice(index, 1);
    localStorage.setItem(this.storage, JSON.stringify(this.allBook));
  }
}

const libraryBook = new Library();

const title = document.querySelector('.book-title');
const author = document.querySelector('.book-author');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('.form_container');
const addedBookList = document.querySelector('.added-book-list');

// DISPLAY METHOD
function displayBooks() {
  addedBookList.innerHTML = '';
  libraryBook.allBook.forEach((book, index) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
      <div class="book-item">
        <p>"${book.title}" By "${book.author}"</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>`;
    addedBookList.appendChild(bookItem);
  });
}
displayBooks();

addBtn.addEventListener('click', () => {
  libraryBook.addBook(title, author);
  displayBooks();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  libraryBook.addBook(title, author);
  displayBooks();
  localStorage.setItem(Library.storage, JSON.stringify(libraryBook.allBook));
  event.target.reset();
});

addedBookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const { index } = event.target.dataset;
    libraryBook.removeBook(index);
    displayBooks();
  }
});

// METHOD FOR RETRIEVE DATA
function retrieveData() {
  const savedData = localStorage.getItem(libraryBook.storage);
  if (savedData) {
    libraryBook.allBook = JSON.parse(savedData);
  }
  displayBooks();
}
const datePage = document.querySelector('.date-page');
const newdate = new Date();
datePage.textContent = newdate.toDateString();
window.addEventListener('load', retrieveData);

const aList = document.querySelector('.a-list');
const aAdd = document.querySelector('.a-add');
const aContact = document.querySelector('.a-contact');

const addContainer = document.querySelector('.add-container');
const formContainer = document.querySelector('.form-container');
const contactContainer = document.querySelector('.contact-container');

aList.addEventListener('click', () => {
  addContainer.classList.remove('display-none');
  formContainer.classList.add('display-none');
  contactContainer.classList.add('display-none');
});

aAdd.addEventListener('click', () => {
  formContainer.classList.remove('display-none');
  addContainer.classList.add('display-none');
  contactContainer.classList.add('display-none');
});

aContact.addEventListener('click', () => {
  contactContainer.classList.remove('display-none');
  addContainer.classList.add('display-none');
  formContainer.classList.add('display-none');
});