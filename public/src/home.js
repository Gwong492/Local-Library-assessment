function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  const arrayOfAccounts = []
  accounts.forEach((account) => arrayOfAccounts.push(1))
  if (accounts.length > 0) {
    return arrayOfAccounts.reduce((total, num) => total + num,)
  } else {
    return 0
  }
}

function getBooksBorrowedCount(books) {
  let numberOfBorrowedBooks = 0;
  books.forEach((book) => {
    const borrowed = book.borrows; 
    for (let item in borrowed) {
      if (borrowed[item].returned === false) {
        numberOfBorrowedBooks += 1;
      };
    }
  }
)
  return numberOfBorrowedBooks;
}

function getMostCommonGenres(books) {
  let mostCommonGenre = [];
  books.forEach((book) => {
    const genreFound = book.genre;
    if (mostCommonGenre.length === 0) {
      const countedGenre = { name: genreFound, count: 1 };
      mostCommonGenre.push(countedGenre);
    } else {
      const existingGenre = mostCommonGenre.find((genre) => genre.name === genreFound);
      if (existingGenre) {
        existingGenre.count++;
      } else {
        const countedGenre = { name: genreFound, count: 1 };
        mostCommonGenre.push(countedGenre);
      }
    }
  });
  mostCommonGenre.sort((genresA, genresB) => genresA.count < genresB.count ? 1 : -1)
  return mostCommonGenre.slice(0,5)
}

function getMostPopularBooks(books) {
  mostPopularBook = [];
  books.forEach((book) => {
    const booksCounted = {name: book.title, count: book.borrows.length}
    mostPopularBook.push(booksCounted)
  })
  mostPopularBook.sort((booksA, booksB) => booksA.count < booksB.count ? 1 : -1)
  return mostPopularBook.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  let mostPopularBook = [];
  books.forEach((book) => {
    const booksCounted = {name: book.title, count: book.borrows.length, authorId: book.authorId};
    mostPopularBook.push(booksCounted);
  })
  mostPopularBook.forEach((book) => {
    if (mostPopularAuthors.length === 0) {
      const authorsCounted = {name: book.authorId, count: book.count}
      mostPopularAuthors.push(authorsCounted)
    } else {
      const existingAuthor = mostPopularAuthors.find((author) => author.name === book.authorId);
      if (existingAuthor) {
        existingAuthor.count += book.count
      } else {
        const authorsCounted = {name: book.authorId, count: book.count}
        mostPopularAuthors.push(authorsCounted)
      }
    }
  })
  mostPopularAuthors.map((elementId) => authors.forEach((author) => {
    if (elementId.name === author.id) {
      elementId.name = `${author.name.first} ${author.name.last}`
    }
  }))
  mostPopularAuthors.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1)
  return mostPopularAuthors.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
