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
function display(myLibrary,size){
    for(let i = size; i<myLibrary.length;i++){
        console.log(myLibrary[i]);
        const card = document.createElement('div');
        card.classList.add('card' + i);
        let removeBtn = document.createElement('button');
        removeBtn.textContent = "remove book";
        removeBtn.setAttribute('id','btn' + i);
        removeBtn.setAttribute("type","submit");
        card.setAttribute('style', 'white-space: pre;');
        card.textContent += myLibrary[i].title + "\r\n"; //I think later on you can fix this to ensure it looks better   
        card.textContent += myLibrary[i].author + " \r\n";
        card.textContent += myLibrary[i].pages + " \r\n";
        card.textContent += myLibrary[i].read + " \r\n";
        card.appendChild(removeBtn);
        container.appendChild(card);

    }
}

let hobbit = new Book("hobbit","david","200","read");
let punpun = new Book("punpun","ben","200","unread");
let vagabond = new Book("vagabond","boo","300","read");





const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.getElementById("closeBtn");
function newBook(dialog,showButton,closeButton){ //works
    // "Show the dialog" button opens the dialog modally
    let size = myLibrary.length;

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
        display(myLibrary,size); //learn how to get last length index
        size += 1;

        e.preventDefault();
        dialog.close();
    });
}

addBookToLibrary(hobbit);


function removeBook(myLibrary){ 
    let cardChose = document.querySelector('.card0');
    let checker = document.querySelector("#btn0");
    checker.addEventListener("click",()=> {
        
        container.removeChild(cardChose); //remove() removed everything removeChild removes the thing
        myLibrary.slice(0); 
        console.log(myLibrary);

    });

}

newBook(dialog,showButton,closeButton);

display(myLibrary,0);
removeBook(myLibrary);



/*
addBookToLibrary(hobbit);
addBookToLibrary(punpun);
addBookToLibrary(vagabond);
console.log(myLibrary); //its being added but the val not working :c

display(myLibrary);
*/


