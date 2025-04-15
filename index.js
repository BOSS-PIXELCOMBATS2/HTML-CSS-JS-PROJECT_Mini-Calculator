const Output = document.getElementById('output'),
        Number1 = document.getElementById('number-1'),
        Number2 = document.getElementById('number-2'),
        Operation = document.getElementById('operation'),
        Calculate = document.getElementById('calculate');

const MaxNumberValue = 999999999999999, MinNumberValue = -999999999999999;

Math.Factorial = function(x) {
        x = +x;
        if (isNaN(x)) throw new TypeError('Parameter \'x\' must be a number.');
        if (x < 0) throw new TypeError('Parameter \'x\' must be a positive number.');
        if (!Number.isInteger(x)) throw new RangeError('Parameter \'x\' must be a positive integer.');
        if (x === 0 || x === 1) return 1;
        return x * Math.Factorial(x - 1);
};

Number1.addEventListener('blur', ()=> {
        const NumberValue = +number1.value;
        if (isNaN(NumberValue)) number1.value = 0;
        if (Operation.value === '!' || Operation.value === '√' && NumberValue < 0) Number1.value = 0;
        if (Operation.value === '!' && !Number.isInteger(NumberValue)) Number1.value = Math.round(NumberValue);
        if (NumberValue >= MaxNumberValue) Number1.value = MaxNumberValue;
        if (NumberValue <= MinNumberValue) Number1.value = MinNumberValue;
});
Number2.addEventListener('blur', ()=> {
        const NumberValue = +Number2.value;
        if (isNaN(NumberValue)) Number2.value = 0;
        if (NumberValue >= MaxNumberValue) Number2.value = MaxNumberValue;
        if (NumberValue <= MinNumberValue) Number2.value = MinNumberValue;
});
Operation.addEventListener('change', ()=> {
        switch (Operation.value) {
                case '+': Number2.style.display = 'block'; break;
                case '-': Number2.style.display = 'block'; break;
                case '*': Number2.style.display = 'block'; break;
                case '/': Number2.style.display = 'block'; break;
                case '^': Number2.style.display = 'block'; break;
                case '!': Number2.style.display = 'none'; break;
                case '|': Number2.style.display = 'none'; break;
                case '√': Number2.style.display = 'none'; break;
        }
});
Calculate.addEventListener('click', ()=> {
        const Value1 = Number1.value;
        const Value2 = Number2.value;
        if (Value1.trim() === '') Number1.value = 0;
        if (Value2.trim() === '') Number2.value = 0;
        const Number1Value = +Number1.value;
        const Number2Value = +Number2.value;
        let Result = 0;
        switch (Operation.value) {
                case '+': Result = Number1Value + Number2Value; break;
                case '-': Result = Number1Value - Number2Value; break;
                case '*': Result = Number1Value * Number2Value; break;
                case '/': Number2Value === 0 ? Number1Value === 0 ? Result = 'Not a number' : Number1Value < 0 ? Result = '-Infinity' : Result = 'Infinity' : Result = Number1Value / Number2Value; break;
                case '^': Result = Number1Value ** Number2Value; break;
                case '!': Result = Math.Factorial(Number1Value); break;
                case '|': Result = Math.abs(Number1Value); break;
                case '√': Number1Value < 0 ? Result = 'Not a number' : Result = Math.sqrt(Number1Value); break;
        }
        Output.value = Result;
});
