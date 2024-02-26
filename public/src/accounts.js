function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  let id = account.id
  let totalBorrows = 0
  books.forEach((book) => {
    for (let account in book.borrows) {
      const accountLog = book.borrows
       if (accountLog[account].id === id) {
        totalBorrows++
       }
    }
  })
  return totalBorrows
}

function assignAuthorToAccouunt(bookPossessed, authors) {
  bookPossessed.forEach((book) => {
    let authorId = book.authorId;
    let authorFound = authors.find((author) => authorId === author.id);
    book.author = authorFound;
  }) 
  return bookPossessed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let id = account.id;
  let bookPossessed = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let value in book.borrows) {
      let borrowed = book.borrows;
      if (borrowed[value].id === id) {
        if (borrowed[value].returned === false) {
          bookPossessed.push(book);
        }          
      }
    }
  }
  let accountFound = assignAuthorToAccouunt(bookPossessed, authors)
  return accountFound;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
