const kelvin = 293; // kelvin temperature

let celsius = kelvin - 273; /* Celsius is 273 degrees less than Kelvin. So, we need 
convert Kelvin to Celsius subtracting 273 from the kelvin variable*/
console.log(`The temperature is ${celsius} degrees Celsius`);

let fahrenheit = celsius * (9 / 5) + 32; /* converting celsius to fahrenheit */
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);

let newton = celsius * (33 / 100); /* Converting celsius to Newton*/
console.log(`The temperature is ${Math.floor(newton)} degrees Newton.`);
