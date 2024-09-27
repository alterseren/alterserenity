// Масив авто
const cars = [
  { brand: "Toyota", model: "Camry", year: 2018, engine: "бензин", inUse: true },
  { brand: "Honda", model: "Civic", year: 2012, engine: "дизель", inUse: false },
  { brand: "BMW", model: "X5", year: 2020, engine: "бензин", inUse: true },
  { brand: "Tesla", model: "Model S", year: 2021, engine: "електро", inUse: true },
  { brand: "Ford", model: "Focus", year: 2015, engine: "бензин", inUse: false }
];

// для іконок 
function getEngineIcon(engine) {
  switch (engine) {
    case "бензин":
      return '<i class="bx bx-gas-pump"></i>';
    case "дизель":
      return '<i class="bx bx-oil"></i>';
    case "електро":
      return '<i class="bx bx-battery"></i>';
    default:
      return '';
  }
}

// Вивести усі авто з іконками
function task1() {
  const output = cars.map(car => `${getEngineIcon(car.engine)} ${car.brand} ${car.model}, ${car.year}, двигун: ${car.engine}, використовується: ${car.inUse ? 'так' : 'ні'}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}

// Авто після 2015 р 
function task2() {
  const filteredCars = cars.filter(car => car.year > 2015);
  const output = filteredCars.map(car => `${getEngineIcon(car.engine)} ${car.brand} ${car.model}, ${car.year}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}

// Авто з бензиновим двигуном 
function task3() {
  const filteredCars = cars.filter(car => car.engine === "бензин");
  const output = filteredCars.map(car => `${getEngineIcon(car.engine)} ${car.brand} ${car.model}, ${car.year}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}

// Використовувані авто 
function task4() {
  const filteredCars = cars.filter(car => car.inUse);
  const output = filteredCars.map(car => `${getEngineIcon(car.engine)} ${car.brand} ${car.model}, ${car.year}`).join('<br>');
  document.getElementById("output").innerHTML = output;
}
