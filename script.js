let myLibrary = [];
let newBook;


function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read 
}

const container = document.querySelector('.container');
const addModal = document.querySelector('.popModal button');
const modal = document.querySelector('[data-modal]');

function showModal() {
    addModal.addEventListener('click', function () {
        container.style.filter = 'blur(2px)';
        modal.style.display = 'flex';
    }
    )
}

addModal.addEventListener('click', showModal)


function closeModal() {
    let closeBtn = document.querySelector('[data-close]');
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        container.style.filter = 'none';
    });
};


let createCard = document.querySelector('.add')

function addBookCard() {

    const bookCard = document.querySelector('.book-cards');
    

    modal.style.display = 'none';
    container.style.filter = 'none';


    if (createCard){

    let newCard = document.createElement('div');

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

    //  READ BUTTON
    let cardButton = document.createElement('button');

    const readCheck = document.querySelector('[data-check]');
    if (readCheck.checked) {
        cardButton.classList.add('read');
        cardButton.textContent = 'Read';
        cardButton.style.background = 'lime'
    }
    if (readCheck.checked === false) {
        cardButton.classList.add('read');
        cardButton.textContent = 'Not read';
        cardButton.style.background = 'tomato';
    }
    cardButton.addEventListener('click', () => {
        if (cardButton.textContent === 'Read') {
            cardButton.style.background = 'tomato';
            cardButton.textContent = 'Not read';
        }
        else if (cardButton.textContent === 'Not read') {
            cardButton.style.background = 'lime';
            cardButton.textContent = 'Read';
        };
    })

    
    newCard.appendChild(cardButton);

    // REMOVE CARD BUTTON
    const removeCardBtn = document.createElement('button');
    removeCardBtn.classList.add('remove-card');
    removeCardBtn.textContent = 'X';
    newCard.appendChild(removeCardBtn);

    newCard.classList.add('card');

    newCard.classList.add('card');
    newCard.style.display = 'flex';


    removeCardBtn.addEventListener('click', () => {
        let cardIndex = myLibrary.findIndex((element) => this.newCard);
        myLibrary.splice(cardIndex, 1);

        let allBooks = bookCard.querySelectorAll('.card');
        allBooks.forEach(books => bookCard.removeChild(books));

    });

    bookCard.appendChild(newCard);
    

    const addBookToLibrary = () => {
        newCard = new Book(cardTitle.textContent, cardAuthor.textContent, cardPages.textContent, cardButton.textContent);
        myLibrary.push(newCard);

    }


    addBookToLibrary();

}
}

createCard.addEventListener('click', addBookCard);