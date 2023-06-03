const title = document.querySelector('.book-title');
const author = document.querySelector('.book-author');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('.form_container');
const addedBookList = document.querySelector('.added-book-list');

let allBook = [];

function saveData() {
  localStorage.setItem('data', JSON.stringify(allBook));
}

function displayBooks() {
  addedBookList.innerHTML = '';
  allBook.forEach((book, index) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
      <div class="book-item">
        <p>Title: ${book.Title}</p>
        <p>Author: ${book.Author}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
        <hr>
      </div>`;
    addedBookList.appendChild(bookItem);
  });
}

function addBook() {
  if (title.value !== '' && author.value !== '') {
    allBook.push({ Title: title.value, Author: author.value });
    title.value = '';
    author.value = '';
    saveData();
    displayBooks();
  }
}

function removeBook(index) {
  allBook.splice(index, 1);
  saveData();
  displayBooks();
}

addBtn.addEventListener('click', addBook);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook();
  event.target.reset();
});

addedBookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const { index } = event.target.dataset;
    removeBook(index);
  }
});

function retrieveData() {
  const savedData = localStorage.getItem('data');
  if (savedData) {
    allBook = JSON.parse(savedData);
  }
  displayBooks();
}

window.addEventListener('load', retrieveData);
