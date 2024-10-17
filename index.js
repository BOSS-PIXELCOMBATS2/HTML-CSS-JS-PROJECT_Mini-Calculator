const output = document.getElementById('output');
const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const operation = document.getElementById('operation');
const calculate = document.getElementById('calculate');

Math.factorial = function(x) {
        if (typeof(x) !== 'number') x = +x;
        if (isNaN(x)) throw new TypeError('Parameter: \'x\' must be a number.');
        if (x < 0) throw new TypeError('Parameter: \'x\' must be a positive number.');
        if (x === 0 || x === 1) return 1;
        return x * Math.factorial(x - 1);
};

number1.addEventListener('blur', ()=> {
        const numberValue = +number1.value;
        if (isNaN(numberValue)) number1.value = 0;
        if (operation.value === '!' || operation.value === '√' && numberValue < 0) number1.value = 0;
        if (numberValue >= 999999999999999) n1.value = 999999999999999;
        if (numberValue <= -999999999999999) n1.value = -999999999999999;
});
number2.addEventListener('blur', ()=> {
        const numberValue = +number2.value;
        if (isNaN(nv)) number2.value = 0;
        if (numberValue >= 999999999999999) number2.value = 999999999999999;
        if (numberValue <= -999999999999999) number2.value = -999999999999999;
});
operation.addEventListener('change', ()=> {
        switch (operation.value) {
                case '+': number2.style.display = 'block'; break;
                case '-': number2.style.display = 'block'; break;
                case '*': number2.style.display = 'block'; break;
                case '/': number2.style.display = 'block'; break;
                case '^': number2.style.display = 'block'; break;
                case '!': number2.style.display = 'none'; break;
                case '|': number2.style.display = 'none'; break;
                case '√': number2.style.display = 'none'; break;
        }
});
calculate.addEventListener('click', ()=> {
        const value1 = number1.value;
        const value2 = number2.value;
        if (value1.trim() === '') number1.value = 0;
        if (value2.trim() === '') number2.value = 0;
        const number1value = +number1.value;
        const number2value = +number2.value;
        let result;
        switch (operation.value) {
                case '+': result = number1value + number2value; break;
                case '-': result = number1value - number2value; break;
                case '*': result = number1value * number2value; break;
                case '/': number2value === 0 ? number1value === 0 ? result = 'Not a number' : number1value < 0 ? result = '-Infinity' : result = 'Infinity' : result = number1value / number2value; break;
                case '^': result = number1value ** number2value; break;
                case '!': result = Math.factorial(number1value); break;
                case '|': result = Math.abs(number1value); break;
                case '√': number1value < 0 ? result = 'Not a number' : result = Math.sqrt(number1value); break;
        }
        output.value = result;
});
