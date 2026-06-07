

//(C * 9/5) + 32

const C = 22

comverter(C)

function comverter(C : number) {

   console.log('22c para Fahrenheit =', (C * 9 / 5) + 32, 'graus')
   console.log('22F para Celsius =', (C - 32) * 5 / 9, 'graus')
   console.log('22K para Celsius =', (C + 273.15), 'graus')

}


function converterTemperatura() {
   // 1. Obter o valor do input
   const inputCelsius = document.getElementById('celsius') as HTMLInputElement;
   const celsius = Number(inputCelsius.value);

   // 2. Fórmulas
   const fahrenheit = (celsius * 9 / 5) + 32;
   const kelvin = celsius + 273.15;

   // 3. Exibir os resultados
   const displayFahrenheit = document.getElementById('fahrenheit') as HTMLElement;
   const displayKelvin = document.getElementById('kelvin') as HTMLElement;

   displayFahrenheit.textContent = fahrenheit.toFixed(2)
   displayKelvin.textContent = kelvin.toFixed(2)
}
