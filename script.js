let myLibrary = [];
let newBook;


function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
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

    event.preventDefault()

    const bookCard = document.querySelector('.book-cards');

    modal.style.display = 'none';
    container.style.filter = 'none';

    let newCard = document.createElement('div');
 
    newCard.classList.add('card');
    newCard.style.display = 'flex';
    
    bookCard.insertAdjacentElement('beforeend', newCard);

    // BOOK NAME 

    let cardTitle = document.createElement('p');
    cardTitle.textContent = document.querySelector('[data-title]').value;
    newCard.appendChild(cardTitle);

    // AUTHOR NAME

    let cardAuthor = document.createElement('p');
    cardAuthor.textContent = document.querySelector('[data-author]').value;
    newCard.appendChild(cardAuthor);

    // BOOK PAGES

    let cardPages = document.createElement('p');
    cardPages.textContent = document.querySelector('[data-pages]').value + ' pages';
    newCard.appendChild(cardPages);


    const addBookToLibrary = () =>{
        newCard = new Book(cardTitle.textContent, cardAuthor.textContent, cardPages.textContent);
        myLibrary.push(newCard);
    }

    addBookToLibrary();
}
