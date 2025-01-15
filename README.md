# Library Administrative Site

A comprehensive administrative site for a local library. This application includes various algorithms designed to handle and manipulate datasets of accounts, authors, and books to streamline library operations. The project emphasizes clean and efficient JavaScript code while integrating advanced features and best practices.

## Features

- **Accounts Management**:
  - Retrieve details about library accounts, including borrowing history and account holder information.
- **Authors Management**:
  - Manage and retrieve data on authors whose books are in the library.
- **Books Management**:
  - Track books, including their borrowing status and the accounts currently in possession of them.
- **Data Analysis**:
  - Analyze borrowing trends and generate insights based on the datasets.

## Project Structure

The editable code files are located in the `public/src/` directory. All data files can be found in the `public/data/` directory.

## Datasets

1. **Accounts**
   - Each account is represented as an object containing personal details and borrowing history.
2. **Authors**
   - Each author is represented as an object with a unique numeric ID and name.
3. **Books**
   - Each book includes information about the title, genre, author, and borrowing history.

## Instructions

### Guidelines for Development

- Use well-named variables that clearly describe their purpose.
- Leverage native array methods such as `find()`, `filter()`, `map()`, and `reduce()`.
- Incorporate both function declarations and arrow functions.
- Create reusable helper functions where applicable.
- Employ advanced JavaScript features:
  - Ternary operators
  - Spread operator
  - Object shorthand
  - Array and object destructuring
  - For/in loops

### Prohibited Actions

- Do not change the names of the functions.
- Do not edit files outside of the `public/src/` directory.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd library-admin-site
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Analyze Datasets**: Use the provided functions to process accounts, authors, and books datasets.
2. **Implement Algorithms**: Write algorithms in the `public/src/` directory to fulfill various administrative tasks.
3. **Test Functionality**: Utilize the provided tests and live site to verify your solutions.

## Dependencies

- JavaScript
- Node.js
- npm

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push the branch.
   ```bash
   git commit -m "Description of changes"
   git push origin feature/your-feature-name
   ```
4. Open a pull request.

##

