let myLibrary = [];
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
      infoString = title + ", " + author + ", " + pages + ", " + read;
      return infoString;
    });
}

function addBookToLibrary(object) {
  myLibrary.push(object);
  console.log(myLibrary);
}

const container = document.querySelector(".container");
function display(myLibrary, size) {
  for (let i = size; i < myLibrary.length; i++) {
    //console.log(myLibrary[i]);
    const card = document.createElement("div");
    card.classList.add("card" + i);
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remove book";
    removeBtn.setAttribute("class", "btn");
    removeBtn.setAttribute("type", "submit");
    removeBtn.dataset.indexNum = i;

    let readBtn = document.createElement("button");
    readBtn.textContent = "click if read";
    readBtn.setAttribute("class", "readbtn");
    readBtn.setAttribute("type", "submit");
    readBtn.dataset.readNum = i;

    card.setAttribute("style", "white-space: pre;");

    card.textContent += myLibrary[i].title + "\r\n"; //I think later on you can fix this to ensure it looks better
    card.textContent += myLibrary[i].author + " \r\n";
    card.textContent += myLibrary[i].pages + " \r\n";

    let readPart = document.createElement("div");
    readPart.textContent += myLibrary[i].read;
    readPart.setAttribute("class", "read" + i);

    card.appendChild(readPart);
    card.appendChild(removeBtn);
    card.appendChild(readBtn);
    container.appendChild(card);
  }
}

let hobbit = new Book("hobbit", "david", "200", "read");
let punpun = new Book("punpun", "ben", "200", "unread");
let vagabond = new Book("vagabond", "boo", "300", "read");

function makeFormCheck() {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector("#read");

  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity("You gotta fill this out yo!");
    return false;
  }
  if (authorInput.validity.valueMissing) {
    authorInput.setCustomValidity("You gotta fill this out yo!");
    return false;
  }
  if (pagesInput.validity.valueMissing) {
    pagesInput.setCustomValidity("You gotta fill this out yo!");
    return false;
  }
  if (readInput.validity.valueMissing) {
    readInput.setCustomValidity("You gotta fill this out yo!");
    return false;
  }
  return true;
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.getElementById("closeBtn");
function newBook(dialog, showButton, closeButton) {
  //works
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
    let newBook = new Book(title, author, pages, read);
    if (makeFormCheck() == true) {
      addBookToLibrary(newBook);
      display(myLibrary, size); //learn how to get last length index
      changeRead();
      removeBook();
      console.log(size);

      if (picked == false) {
        //the issue is the size?
        size += 1;
      } else {
        size = myLibrary.length - 1;
        console.log(size);

        console.log("working");
        display(myLibrary, size); //learn how to get last length index
        picked = false;
        size += 1; // reset the size back for logic to work one before to display it
      }

      e.preventDefault();
      dialog.close();
    } else {
      makeFormCheck();
    }
  });
}

addBookToLibrary(hobbit);
addBookToLibrary(punpun);
addBookToLibrary(vagabond);

let picked = false;
function removeBook() {
  //see how to remove based on index
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.getAttribute("data-index-num");
      let cardChose = document.querySelector(".card" + index);
      container.removeChild(cardChose); //remove() removed everything removeChild removes the thing
      myLibrary.splice(index); //removes it out of the arr now
      return (picked = true);
    });
  });
}

function changeRead() {
  let buttons = document.querySelectorAll(".readbtn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let index = button.getAttribute("data-read-num");
      let readDiv = document.querySelector(".read" + index);
      console.log(readDiv);
      if (myLibrary[index].read === "read") {
        this.read = "unread";
        readDiv.textContent = "unread";
      } else {
        this.read = "read";
        readDiv.textContent = "read";
      }
    });
  });
}

display(myLibrary, 0);
newBook(dialog, showButton, closeButton);
changeRead();
removeBook();
