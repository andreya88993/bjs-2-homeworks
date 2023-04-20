class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.type = null;
      this.state = 100;
    }

    fix() {
      return this.state = 1.5 * this.state;
    }
  
    set state (number) {
      if (number < 0) {
       this._state = 0
      } else if (number > 100) {
       this._state = 100;
      } else {
        this._state = number;
      }  
    }
    get state() {
      return this._state;
    }
  }  
  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
  }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
      
    }
  }
  
   class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
      
  }
    }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
      
  }
    }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
      
  }
    }


    class Library {
        constructor(name) {
          this.name = name;
          this.books = [];
        }
        addBook(book) {
         if(book.state > 30) {
           this.books.push(book);
         }  
        }
        findBookBy(type, value) {
          for(let book of this.books) {
            if(book[type] === value) {
              return book;
            }
         }
           return null;
        }  
        giveBookByName(bookName) {
          for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
              const book = this.books[i];
              this.books.splice(i, 1);
              return book;
            }
          }
          return null;
        }
      }