const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        infoString = title+", "+author+", "+pages+", "+read;
        return infoString;
    }
}

function addBookToLibrary(object){ 
    myLibrary.push(object); 
}

const container = document.querySelector(".container");
function display(myLibrary){
    for(let i = 0; i<myLibrary.length;i++){
        console.log(myLibrary[i]);
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'white-space: pre;');


        card.textContent += myLibrary[i].title + "\r\n"; //I think later on you can fix this to ensure it looks better   
        card.textContent += myLibrary[i].author + " \r\n";
        card.textContent += myLibrary[i].pages + " \r\n";
        card.textContent += myLibrary[i].read + " \r\n";


        container.appendChild(card);

    }
}

let hobbit = new Book("hobbit","david","200","read");
let punpun = new Book("punpun","ben","200","unread");
let vagabond = new Book("vagabond","boo","300","read");





const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.getElementById("closeBtn");

function newBook(dialog,showButton,closeButton){
    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
    dialog.showModal();
    });
    
    //issue is data not being submitted learn how to get data
  
    // "Close" button closes the dialog
    closeButton.addEventListener("click", (e) => {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = document.getElementById("read").value;
        let newBook = new Book(title,author,pages,read);

        addBookToLibrary(newBook);
        display(myLibrary);
        e.preventDefault();
        dialog.close();
    });
}

newBook(dialog,showButton,closeButton);
/*
addBookToLibrary(hobbit);
addBookToLibrary(punpun);
addBookToLibrary(vagabond);
console.log(myLibrary); //its being added but the val not working :c

display(myLibrary);
*/


