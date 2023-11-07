//define a type for the book

type Book = {
    title: String;
    author: String;
    publicationYear: number;
};

//creating an array of book objects

let books: Book[] =[
{
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
},
{
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949
},
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925
},
];

//prit the list of books
console.log("List of Books:");
console.log(books);