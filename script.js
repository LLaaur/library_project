let myLibrary = [];
let newBook;


function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
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
    let closeBtn = document.querySelector('[data-close]');
    closeBtn.addEventListener('click', function(){
        modal.style.display = 'none';
        container.style.filter = 'none';
    });
};

closeModal();

function addBookCard(){

    event.preventDefault()

    const bookCard = document.querySelector('.book-cards');

    modal.style.display = 'none';
    container.style.filter = 'none';

    let newCard = document.createElement('div');
    newCard.setAttribute('id', myLibrary.indexOf())
 
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

    //  READ BUTTON
    const cardButton = document.createElement('button');
    cardButton.classList.add('read');
    cardButton.textContent = 'Read';
    newCard.appendChild(cardButton);

    // REMOVE CARD BUTTON
    const removeCardBtn = document.createElement('button');
    removeCardBtn.classList.add('remove-card');
    removeCardBtn.textContent = 'X';
    newCard.appendChild(removeCardBtn);

    removeCardBtn.addEventListener('click', () => {
        let cardIndex = myLibrary.findIndex((element) => this.newCard);
        myLibrary.splice(cardIndex, 1);

    })

    const addBookToLibrary = () =>{
        newCard = new Book(cardTitle.textContent, cardAuthor.textContent, cardPages.textContent);
        myLibrary.push(newCard);
    }


    addBookToLibrary();
}
