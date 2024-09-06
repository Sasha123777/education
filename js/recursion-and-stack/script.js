
function getReverseNumber(n, a = 0) {
    console.log(n, a);
    if (n === 0) {
        return a;
    }

    const isNoValid = n.toString().includes('0');

    if(isNoValid) {
        return 'число n не должно содержать нулей';
    }
    console.log(n, a);
    return getReverseNumber(Math.trunc(parseInt((n / 10).toFixed(1))), 10 * a + n % 10);
}

console.log(getReverseNumber(123))
console.log(getReverseNumber(45))
console.log(getReverseNumber(1))
console.log(getReverseNumber(845123))
console.log(getReverseNumber(1023))


/*
Втрой параметр в функции нужен для того чтобы запоминать результат
Первый параметр нужен для того чтобы запоминать текущее число, которое обрезается
если рассмотреть на примере 123

n    a
123  0
12   3
1    32
0    321
*/