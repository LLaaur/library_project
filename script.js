let myLibrary = [];
let newBook;


function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

function addBookToLibrary(){
    newBook = new Book(title, author, pages);

    myLibrary.push(newBook);
}

const container = document.querySelector('.container');
const addModal = document.querySelector('.popModal');
const modal = document.querySelector('[data-modal]');


function showModal(){
    addModal.addEventListener('click', function () {
        container.style.filter = 'blur(2px)';
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

function addBookCard(){
    const bookCard = document.querySelector('.book-cards');

    modal.style.display = 'none';
    container.style.filter = 'none';

    const newCard = document.createElement('div');

    newCard.classList.add('card');
    newCard.style.display = 'flex';
    
    bookCard.insertAdjacentElement('beforeend', newCard);

    const addBtn = document.querySelector('.add');

    addBtn.addEventListener('click', function(){

    })
}