let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const container = document.querySelector('.container');
const addModal = document.querySelector('.popModal');
const modal = document.querySelector('[data-modal]');

function addNewBooks() {

    const bookDiv = document.createElement('div');
    const bookCards = document.querySelector('.book-cards');
    addModal.addEventListener('click', function () {
        container.style.filter = 'blur(2px)';
        bookDiv.classList.add('card');
        bookCards.insertAdjacentElement('beforebegin', bookDiv);
        bookCards.appendChild(bookDiv);
        modal.style.display = 'flex';
    }
    )
}

function closeModal(){
    const closeBtn = document.querySelector('[data-close]');
    closeBtn.addEventListener('click', function(){
        modal.style.display = 'none';
        container.style.filter = 'none';
    })
}



closeModal();
addNewBooks();