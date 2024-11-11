
function getReverseNumber(n, a = 0, countPrev = 0) {
    const isNoValid = n.toString().includes('0');

    if((isNoValid && n.toString().length > 1) || (countPrev === 0 && n === 0)) {
        return 'число n не должно содержать нулей';
    }

    if (n === 0) {
        return a;
    }

    let count = countPrev + 1;

    return getReverseNumber(Math.trunc(parseInt((n / 10).toFixed(1))), 10 * a + n % 10, count);
}

console.log(getReverseNumber(123))
console.log(getReverseNumber(45))
console.log(getReverseNumber(1))
console.log(getReverseNumber(845123))
console.log(getReverseNumber(1023))
console.log(getReverseNumber(0))
console.log(getReverseNumber(10))
console.log(getReverseNumber(100000))


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