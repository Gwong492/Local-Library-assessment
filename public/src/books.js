function findAuthorById(authors, id) {
  let authorFound = null;
  for (let author in authors) {
    if (authors[author].id === id){
      authorFound = authors[author];
    }
  }
  return authorFound;
}

function findBookById(books, id) {
  let bookFound = null;
  for (let book in books) {
    if (books[book].id === id){
      bookFound = books[book];
    }
  }
  return bookFound;
}

function partitionBooksByBorrowedStatus(books) {
  let booksBorrowedStatus = []
  const booksCheckedOut = books.filter((book) => book.borrows[0].returned === false)
  const booksReturned = books.filter((book) => book.borrows[0].returned === true)
  return booksBorrowedStatus = [[...booksCheckedOut], [...booksReturned]]
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  let borrowers = []
  borrows.forEach((status) => {
    const accountFound = accounts.find((account) => account.id === status.id)
    accountFound.returned = status.returned
    borrowers.push(accountFound)
  })
  return borrowers.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
