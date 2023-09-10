const library = [];

function book(title,author,pages,read){
 //add constructors here
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;

}

function addBookToLibrary(book){
 //read book information
 library.push(book);

}

// work on thus tomorrow 
function display(){

}

const book1 = new book("csm","david","100","read");
const book2 = new book("lol","dad","120","unread");

addBookToLibrary(book1);
addBookToLibrary(book2);

for(let i =0 ; i<library.length;i++){
 console.log(library[i]);
}