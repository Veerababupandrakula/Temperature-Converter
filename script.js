function convert() {
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('result').innerText = celsius.toFixed(2) + ' °C';
  }