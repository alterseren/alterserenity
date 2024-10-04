document.getElementById('fahrenheit').addEventListener('input', function() {
    const fahrenheit = parseFloat(this.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (5 / 9) * (fahrenheit - 32);
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
});

document.getElementById('celsius').addEventListener('input', function() {
    const celsius = parseFloat(this.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }
});
