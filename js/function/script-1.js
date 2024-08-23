//Остаточные параметры функции

// задача 1

function sentenceGenerator(...strArr) {
    return strArr.sort(() => Math.random() - 0.5).join(' ');
}

console.log(sentenceGenerator("число", "рука", "я в лодке"))
console.log(sentenceGenerator("число", "рука", "я в лодке"))
console.log(sentenceGenerator("число", "рука", "я в лодке"))


// задача 2

function getPassportData() {
    if (arguments.length !== 2) return 'нельзя указать 1 аргумент или 3 аргумента - только 2';

    if (
        typeof arguments[0] != 'string' || typeof arguments[1] != 'string'
    ) return 'оба аргумента должны быть строкой';

    if (
        (arguments[0].toString().length === 4 && arguments[1].toString().length === 6) ||
        (arguments[1].toString().length === 4 && arguments[0].toString().length === 6)
    ) return `Паспорт: ${arguments[0].toString().length === 4 ? arguments[0] : arguments[1]} ${arguments[0].toString().length === 6 ? arguments[0] : arguments[1]}`;

    return 'некорректно введены данные!!!';
}

console.log(getPassportData("147985", "1334", "2322"))
console.log(getPassportData(147985, 1343))
console.log(getPassportData("147985", "13434"))
console.log(getPassportData("147985", "1334"))
console.log(getPassportData("1334", "147985"))