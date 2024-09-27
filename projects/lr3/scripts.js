// Масив автомобілів
const cars = [
  { brand: "Toyota", model: "Camry", year: 2018, engine: "бензин", inUse: true },
  { brand: "Honda", model: "Civic", year: 2012, engine: "дизель", inUse: false },
  { brand: "BMW", model: "X5", year: 2020, engine: "бензин", inUse: true },
  { brand: "Tesla", model: "Model S", year: 2021, engine: "електро", inUse: true },
  { brand: "Ford", model: "Focus", year: 2015, engine: "бензин", inUse: false }
];

// Вивести усі автомобілі
function task1() {
  const output = cars.map(car => `${car.brand} ${car.model}, ${car.year}, двигун: ${car.engine}, використовується: ${car.inUse ? 'так' : 'ні'}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}

// Автомобілі після 2015 року
function task2() {
  const filteredCars = cars.filter(car => car.year > 2015);
  const output = filteredCars.map(car => `${car.brand} ${car.model}, ${car.year}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}

// Автомобілі з бензиновим двигуном
function task3() {
  const filteredCars = cars.filter(car => car.engine === "бензин");
  const output = filteredCars.map(car => `${car.brand} ${car.model}, ${car.year}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}

// Використовувані автомобілі
function task4() {
  const filteredCars = cars.filter(car => car.inUse);
  const output = filteredCars.map(car => `${car.brand} ${car.model}, ${car.year}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}
