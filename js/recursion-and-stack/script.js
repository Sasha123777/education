
function getReverseNumber(n, a = 0) {
    if (n === 0) {
        return a;
    }

    return getReverseNumber(Math.trunc(parseInt((n/10).toFixed(1))), 10 * a + n % 10);
}

console.log(getReverseNumber(123))
console.log(getReverseNumber(45))
console.log(getReverseNumber(1))
console.log(getReverseNumber(845123))