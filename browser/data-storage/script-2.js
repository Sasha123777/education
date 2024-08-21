// Задача 2

function setLocalStorageByType(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

setLocalStorageByType('test', [1,2,3])
setLocalStorageByType('test1', 3)
setLocalStorageByType('test2', {name: 'test'})
setLocalStorageByType('test3', [{name: 'test'}])

function getLocalStorageByType(key) {
    return JSON.parse(localStorage.getItem(key));
}

console.log(getLocalStorageByType('test'))
console.log(getLocalStorageByType('test1'))
console.log(getLocalStorageByType('test2'))
console.log(getLocalStorageByType('test3'))