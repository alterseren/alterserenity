// Завдання 1: Робота з об'єктами
function task1() {
    let book = {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
      isRead: false,
      bookInfo: function() {
        return `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? 'Так' : 'Ні'}`;
      }
    };
  
    document.getElementById('output').innerText = book.bookInfo();
    book.isRead = !book.isRead;
    document.getElementById('output').innerText += "\n" + book.bookInfo();
  }
  
  // Завдання 2: Робота з масивами та об'єктами
  function task2() {
    let library = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: true },
      { title: "1984", author: "George Orwell", year: 1949, isRead: false },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, isRead: true }
    ];
  
    function displayLibrary() {
      let output = '';
      library.forEach(book => {
        book.bookInfo = function() {
          return `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? 'Так' : 'Ні'}`;
        };
        output += book.bookInfo() + "\n";
      });
      document.getElementById('output').innerText = output;
    }
  
    library.push({ title: "Brave New World", author: "Aldous Huxley", year: 1932, isRead: false });
    displayLibrary();
  }
  
  // Завдання 3: Робота з методами масивів
  function task3() {
    let library = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: true },
      { title: "1984", author: "George Orwell", year: 1949, isRead: false },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, isRead: true }
    ];
  
    // Сортування
    library.sort((a, b) => a.year - b.year);
    console.log("Відсортовані книги:", library);
  
    // Фільтрація непрочитаних книг
    let unreadBooks = library.filter(book => !book.isRead);
    console.log("Непрочитані книги:", unreadBooks);
  
    // Пошук книги Tolkien
    let tolkienBook = library.find(book => book.author === "J.R.R. Tolkien");
    console.log("Книга Tolkien:", tolkienBook);
  
    document.getElementById('output').innerText = `
      Відсортовані книги:\n${JSON.stringify(library, null, 2)}\n
      Непрочитані книги:\n${JSON.stringify(unreadBooks, null, 2)}\n
      Книга Tolkien:\n${JSON.stringify(tolkienBook, null, 2)}
    `;
  }
  
  // Завдання 4: Взаємодія з користувачем
  function task4() {
    let library = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: true },
      { title: "1984", author: "George Orwell", year: 1949, isRead: false },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, isRead: true }
    ];
  
    function displayLibrary() {
      let output = '';
      library.forEach(book => {
        book.bookInfo = function() {
          return `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? 'Так' : 'Ні'}`;
        };
        output += book.bookInfo() + "\n";
      });
      document.getElementById('output').innerText = output;
    }
  
    let title = prompt("Введіть назву книги:");
    let author = prompt("Введіть автора книги:");
    let year = parseInt(prompt("Введіть рік видання книги:"));
    let isRead = confirm("Чи прочитана книга?");
  
    library.push({ title, author, year, isRead });
    displayLibrary();
  }
  