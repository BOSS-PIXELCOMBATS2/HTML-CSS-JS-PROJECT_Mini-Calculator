const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const operation = document.getElementById('operation');
const calculate = document.getElementById('calculate');
const output = document.getElementById('output');

Math.Factorial = function(x) {
  if (typeof(x) !== 'number') x = Number(x);
  if (isNaN(x)) throw 'Ошибка! Причина: Факториал может быть взят только из чисел';
  if (x < 0) throw 'Ошибка! Причина: Факториал может быть взят только из положительного числа';
  if (x === 0 || x === 1) return 1;
  return x * Math.Factorial(x - 1);
};

n1.addEventListener('blur', ()=> {
  const nv = Number(n1.value);
  if (isNaN(nv)) n1.value = 0;
  if (operation.value === '!' || operation.value === '√' && nv < 0) n1.value = 0;
  if (nv >= 999999999999999) n1.value = 999999999999999;
  if (nv <= -999999999999999) n1.value = -999999999999999;
});
n2.addEventListener('blur', ()=> {
  const nv = Number(n2.value);
  if (isNaN(nv)) n2.value = 0;
  if (nv >= 999999999999999) n2.value = 999999999999999;
  if (nv <= -999999999999999) n2.value = -999999999999999;
});
operation.addEventListener('change', ()=> {
  switch (operation.value) {
    case '+': n2.style.display = 'block'; break;
    case '-': n2.style.display = 'block'; break;
    case '*': n2.style.display = 'block'; break;
    case '/': n2.style.display = 'block'; break;
    case '^': n2.style.display = 'block'; break;
    case '!': n2.style.display = 'none'; break;
    case '|': n2.style.display = 'none'; break;
    case '√': n2.style.display = 'none'; break;
  }
});
calculate.addEventListener('click', ()=> {
  const v1 = n1.value;
  const v2 = n2.value;
  if (v1.trim() === '') n1.value = 0;
  if (v2.trim() === '') n2.value = 0;
  const n1v = Number(n1.value);
  const n2v = Number(n2.value);
  let result;
  switch (operation.value) {
    case '+': result = n1v + n2v; break;
    case '-': result = n1v - n2v; break;
    case '*': result = n1v * n2v; break;
    case '/': n2v === 0 ? n1v === 0 ? result = 'Не число' : n1v < 0 ? result = '-Бесконечность' : result = 'Бесконечность' : result = n1v / n2v; break;
    case '^': result = n1v ** n2v; break;
    case '!': result = Math.Factorial(n1v); break;
    case '|': result = Math.abs(n1v); break;
    case '√': result = Math.sqrt(n1v); break;
  }
  output.value = result;
});
