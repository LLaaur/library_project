let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addNewBooks() {
    const addBtn = document.querySelector('.add');
    const bookDiv = document.createElement('div');
    const bookCards = document.querySelector('.book-cards');
    addBtn.addEventListener('click', function () {
        bookDiv.classList.add('card');
        bookCards.insertAdjacentElement('beforebegin', bookDiv);
        bookCards.appendChild(bookDiv);
    }
    )
}

addNewBooks();