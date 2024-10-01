// Завдання 1 Фільтрація та пошук у масиві об'єктів
const products = [
  { name: "Ноутбук", category: "Електроніка", price: 1500, inStock: 10 },
  { name: "Смартфон", category: "Електроніка", price: 800, inStock: 0 },
  { name: "Клавіатура", category: "Аксесуари", price: 100, inStock: 25 },
  { name: "Монітор", category: "Електроніка", price: 300, inStock: 5 },
  { name: "Мишка", category: "Аксесуари", price: 50, inStock: 0 }
];

function getAvailableProducts(products) {
  return products.filter(product => product.inStock > 0);
}

function findProductByName(products, productName) {
  const product = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
  return product ? product : "Товар не знайдено";
}

function executeTask1() {
  let result = "=== Завдання 1 ===\n\n";
  result += "Доступні товари:\n" + JSON.stringify(getAvailableProducts(products), null, 2) + "\n\n";
  result += "Пошук товару 'Монітор':\n" + JSON.stringify(findProductByName(products, "Монітор"), null, 2) + "\n\n";
  result += "Пошук товару 'Телевізор':\n" + JSON.stringify(findProductByName(products, "Телевізор"), null, 2);
  displayOutput(result);
}

// Завдання 2 Групування та сортування масиву об'єктів
const students = [
  { name: "Анна", age: 20, grade: 85, group: "A" },
  { name: "Богдан", age: 22, grade: 92, group: "B" },
  { name: "Вікторія", age: 19, grade: 78, group: "A" },
  { name: "Геннадій", age: 21, grade: 88, group: "C" },
  { name: "Діана", age: 20, grade: 95, group: "B" }
];

function groupBy(students) {
  return students.reduce((acc, student) => {
      if (!acc[student.group]) {
          acc[student.group] = [];
      }
      acc[student.group].push(student);
      return acc;
  }, {});
}

function sortStudentsByGrade(students) {
  return [...students].sort((a, b) => b.grade - a.grade);
}

function executeTask2() {
  let result = "=== Завдання 2 ===\n\n";
  result += "Групування студентів за групами:\n" + JSON.stringify(groupBy(students), null, 2) + "\n\n";
  result += "Студенти, відсортовані за оцінками:\n" + JSON.stringify(sortStudentsByGrade(students), null, 2);
  displayOutput(result);
}

// Завдання 3 Статистичний аналіз даних з масиву обєктів
const employees = [
  { name: "Ігор", position: "Менеджер", salary: 50000, years: 5 },
  { name: "Марія", position: "Розробник", salary: 70000, years: 3 },
  { name: "Олександр", position: "Дизайнер", salary: 45000, years: 7 },
  { name: "Світлана", position: "QA Інженер", salary: 60000, years: 4 },
  { name: "Юрій", position: "Розробник", salary: 75000, years: 6 }
];

function getAverageSalary(employees) {
  const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
  return (totalSalary / employees.length).toFixed(2);
}

function findMostExperiencedEmployee(employees) {
  return employees.reduce((mostExperienced, current) => {
      return (current.years > mostExperienced.years) ? current : mostExperienced;
  }, employees[0]);
}

function executeTask3() {
  let result = "=== Завдання 3 ===\n\n";
  result += "Середня зарплата працівників: " + getAverageSalary(employees) + "\n\n";
  result += "Працівник з найбільшим досвідом:\n" + JSON.stringify(findMostExperiencedEmployee(employees), null, 2);
  displayOutput(result);
}

// Завдання 4 Обробка та аналіз даних про книги
const books = [
  { title: "Війна і Мир", author: "Лев Толстой", year: 1869, rating: 5, isRead: true },
  { title: "1984", author: "Джордж Орвелл", year: 1949, rating: 4.5, isRead: false },
  { title: "Брати Карамазови", author: "Федір Достоєвський", year: 1880, rating: 4.8, isRead: true },
  { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, rating: 4.2, isRead: false },
  { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, rating: 4.9, isRead: true }
];

function getUnreadBooks(books) {
  return books
      .filter(book => !book.isRead)
      .map(book => book.title);
}

function getBooksByAuthor(books, authorName) {
  return books
      .filter(book => book.author.toLowerCase() === authorName.toLowerCase())
      .sort((a, b) => a.year - b.year);
}

function getTopRatedBooks(books) {
  return books
      .filter(book => book.rating > 4)
      .sort((a, b) => b.rating - a.rating);
}

function executeTask4() {
  let result = "=== Завдання 4 ===\n\n";
  result += "Непрочитані книги:\n" + JSON.stringify(getUnreadBooks(books), null, 2) + "\n\n";
  result += "Книги автора 'Джордж Орвелл':\n" + JSON.stringify(getBooksByAuthor(books, "Джордж Орвелл"), null, 2) + "\n\n";
  result += "Топ-рейтинговані книги:\n" + JSON.stringify(getTopRatedBooks(books), null, 2);
  displayOutput(result);
}

// Завдання 5 Фільтрація та маніпуляція вкладених обєктів у масиві
const orders = [
  {
      orderId: 1,
      customer: { name: "Олена", email: "olena@example.com" },
      items: ["Ноутбук", "Мишка"],
      total: 1600
  },
  {
      orderId: 2,
      customer: { name: "Іван", email: "ivan@example.com" },
      items: ["Смартфон"],
      total: 800
  },
  {
      orderId: 3,
      customer: { name: "Олена", email: "olena@example.com" },
      items: ["Клавіатура", "Монітор"],
      total: 400
  },
  {
      orderId: 4,
      customer: { name: "Марія", email: "maria@example.com" },
      items: ["Ноутбук"],
      total: 1500
  }
];

function getTotalSpentByCustomer(orders, customerName) {
  return orders
      .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase())
      .reduce((acc, order) => acc + order.total, 0);
}

function executeTask5() {
  let result = "=== Завдання 5 ===\n\n";
  result += "Загальна сума, витрачена Оленою: " + getTotalSpentByCustomer(orders, "Олена") + "\n\n";
  result += "Загальна сума, витрачена Іваном: " + getTotalSpentByCustomer(orders, "Іван") + "\n\n";
  result += "Загальна сума, витрачена Сергієм: " + getTotalSpentByCustomer(orders, "Сергій");
  displayOutput(result);
}

// Завдання 6: Обєднання та оптимізація даних у масиві об'єктів
const productsTask6 = [
  { productId: 1, name: "Ноутбук", price: 1500 },
  { productId: 2, name: "Смартфон", price: 800 },
  { productId: 3, name: "Клавіатура", price: 100 },
  { productId: 4, name: "Монітор", price: 300 },
  { productId: 5, name: "Мишка", price: 50 }
];

const purchases = [
  { purchaseId: 101, productId: 1, quantity: 2 },
  { purchaseId: 102, productId: 3, quantity: 5 },
  { purchaseId: 103, productId: 2, quantity: 1 },
  { purchaseId: 104, productId: 1, quantity: 1 },
  { purchaseId: 105, productId: 5, quantity: 10 }
];

function getTotalSales(products, purchases) {
  return purchases.reduce((acc, purchase) => {
      const product = products.find(p => p.productId === purchase.productId);
      if (product) {
          if (!acc[product.name]) {
              acc[product.name] = 0;
          }
          acc[product.name] += product.price * purchase.quantity;
      }
      return acc;
  }, {});
}

function executeTask6() {
  let result = "=== Завдання 6 ===\n\n";
  result += "Загальні продажі:\n" + JSON.stringify(getTotalSales(productsTask6, purchases), null, 2);
  displayOutput(result);
}

// Функція для відображення результатів
function displayOutput(content) {
  document.getElementById('output').textContent = content;
}
