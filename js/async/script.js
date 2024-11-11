// задача 1

function promiseAll(promiseArray) {
    const results = [];
    let count = 0;

    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise.then((val) => {
                results[index] = val;
                count += 1;
                
                if (count === promiseArray.length) {
                    resolve(results);
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    });
}

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log);

promiseAll([
    new Promise(resolve => setTimeout(() => resolve(5), 3000)),
    new Promise(resolve => setTimeout(() => resolve(6), 2000)),
    new Promise(resolve => setTimeout(() => resolve(7), 1000))
]).then(console.log);


//задача 2
//const id = 0;
const id = 1;
const url = `https://swapi.dev/api/films/${id}/`;

function renderCharacterProfile(character) {
    console.log(character)
}

function renderErrorMessage(err) {
    console.log(err)
}

const getDataFetch = () => {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (movie) {
            const characterUrl = movie.characters[0]
            return fetch(characterUrl)
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (character) {
            renderCharacterProfile(character)
        })
        .catch(function () {
            renderErrorMessage('Ошибка выполнения запроса')
        })
}

const getDataAsync =  async () => {
    try {
        const response = await fetch(url);

        if(response.status !== 200) {
            throw new Error('Ошибка выполнения запроса');
        }

        const data =  await response.json();

        if(data.characters.length === 0) {
            throw new Error('В ответе запроса нет необходимых данных');
        }

        const responseCharacter = await fetch(data.characters[0]);

        if (responseCharacter.status !== 200) {
            throw new Error('Ошибка выполнения запроса');
        }

        return await responseCharacter.json();
    }
    catch (e) {
        throw e;
    }
}

getDataFetch();

const result = await getDataAsync();
console.log(result)
