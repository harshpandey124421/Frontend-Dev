// Q3_library_management_system.js
"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

let b1 = new Book("Demo Book", "Alex", "111");
let b2 = new Book("JS Guide", "John", "222");
let b3 = new Book("Node Master", "Ryan", "333");

let books = [b1, b2, b3];

// Display available books
let available = books.filter(b => !b.isIssued);
console.log("Available:", available);

// Issue by ISBN
function issueByISBN(code) {
  let found = books.find(b => b.isbn === code);
  if (found) {
    found.issueBook();
    console.log("Issued:", found);
  } else {
    console.log("Book not found");
  }
}

issueByISBN("222");
