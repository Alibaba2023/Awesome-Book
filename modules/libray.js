class Library {
  constructor() {
    this.allBook = JSON.parse(localStorage.getItem('data')) || [];
    this.addedBookList = document.querySelector('.added-book-list');
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', this.addBook.bind(this));
    this.displayBooks();
  }

  updatedLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.allBook));
  }

  addBook() {
    const title = document.querySelector('.book-title');
    const author = document.querySelector('.book-author');
    if (title.value !== '' && author.value !== '') {
      this.allBook.push({ title: title.value, author: author.value });
      this.updatedLocalStorage();
      this.displayBooks();
      title.value = '';
      author.value = '';
    }
  }

  removeBook(index) {
    this.allBook.splice(index, 1);
    this.updatedLocalStorage();
    this.displayBooks();
  }

  displayBooks() {
    this.addedBookList.innerHTML = '';
    this.allBook.forEach((book, index) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `
      <div class="book-item">
        <p>"${book.title}" By "${book.author}"</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>`;
      this.addedBookList.appendChild(bookItem);
      const removeBtn = bookItem.querySelector('.remove-btn');
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });
    });
  }
}

export default Library;
