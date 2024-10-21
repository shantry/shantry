const form = document.getElementById('celsiusForm');
    const celsiusInput = document.getElementById('celsiusInput');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const celsius = Number(celsiusInput.value);
      if (isNaN(celsius)) {
        output.textContent = 'Invalid input, please enter a valid number.';
      } else {
        const fahrenheit = celsius * 1.8 + 32;
        output.textContent = `${celsius} Celcius converted to Fahrenheit is: ${fahrenheit} `;
      }
      celsiusInput.value = '';
    });