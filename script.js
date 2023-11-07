const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const books = getBooks();
console.log(books);

const titles = books.map((book) => book.title);
titles;

// Map method
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

// Filter method
const logBooks = books.filter(
  (book) => book.pages > 500 && book.hasMovieAdaptation
);
// .filter((book) => book.hasMovieAdaptation);
logBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce method

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

const people = [
  { name: "Kennedy Musau", age: 70 },
  { name: "Marge Lenana", age: 700 },
  { name: "Emily Mbithe", age: 80 },
];

const totalAge = people.reduce((cur, person) => cur + person.age, 0);
totalAge;

const oldestAge = people.reduce(
  (cur, person) => (person.age > cur ? person.age : cur),
  0
);
oldestAge;

const output = people.reduce((acc, cur, i, arr) => {
  const split = cur.name.split(" ");

  let part = `${split[0][0]}${split[1][0]}`;

  i === arr.length - 1 ? (part += ".") : (part += ", ");
  return acc + part;
}, "");
output;
const split = "Kennedy Musau".split(" ");
split;

// Sort method
const numbered = [2, 6, 12, 6, 8, 3, 1];
const sorted = numbered.slice().sort((a, b) => b - a);
sorted;
numbered;

const sortedByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => `${book.title} has ${book.pages}`);
sortedByPages;

// Working with immutable data

//  1) adding a boook
const newBook = {
  id: 6,
  title: "Harry Porter and the chamber of secrets",
  author: "J. K. ROwling",
};

const booksAferAdd = [...books, newBook];

booksAferAdd;

//  2) Deleting a book
const booksAfterDelete = booksAferAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, title: "kenya", pages: 2, read: "no" } : book
);

booksAfterUpdate;


// destructuring

const book = getBook(3);
console.log(book);

// destructuring in objects
const { genres, author, title, publicationDate, reviews } = book;
console.log(author, title, genres);

// destructuring in arrays and rest in arrays ...otherGenres
const [primaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, otherGenres);

// rest in objects
const { pages, ...otherProperties } = book;
otherProperties;

// rest in arrays
otherGenres;

// Spread in arrays
console.log([...genres, "water"]);

// Spread in objects
const updatedBook = {
  ...book,
  // add new property
  moviePublicationDate: "2001",

  // update existing property
  pages: 20,
};

updatedBook;

const getYear = (str) => str.split("-")[0];
const summary = `${title}, is a  ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}.`;
summary;

const pagesRange = pages > 1000 ? "Over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

console.log(0 && "You are awesome");
console.log(true || "You are awesome");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish ?? "Not translated";
spanishTranslation;

console.log(0 ?? "No data");
console.log(null ?? "empty string");
console.log(false ?? "empty string");
console.log(!true && "some string");

console.log(undefined ?? 0);

console.log(reviews.goodreads.reviewsCount);
// console.log(reviews.librarything.reviewsCount);

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

async function fetchData() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// fetchData();

const todos = fetchData();
console.log(todos);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

console.log("jona");
