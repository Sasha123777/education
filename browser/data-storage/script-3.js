// Задача 3

async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const requestBD = indexedDB.open('usersBD');

        requestBD.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore('users');
        };

        requestBD.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(['users'], 'readwrite');
            const userStore = transaction.objectStore('users', { keyPath: 'id' });

            json.forEach((element) => {
                const addRequest = userStore.put(element, element.id);
                addRequest.onsuccess = (event) => {
                    console.log('Пользователь успешно добавлен');
                }
            });
        };
    } catch (error) {
        console.error(error.message);
    }
}

await getUsers();


function getUserById(id) {
    const requestBD = indexedDB.open('usersBD');

    requestBD.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['users'], 'readwrite');
        const userStore = transaction.objectStore('users').get(id);

        userStore.onsuccess = ()=> {
            const user = userStore.result;

            if(user !== undefined) {
                return user;
            }
            else {
                const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;

                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        if(result.length === 0) {
                            alert('такого пользователя нет!');
                            return false;
                        }
                        else {
                            const userStoreAdd = transaction.objectStore('users', { keyPath: 'id' });

                            const addRequest = userStoreAdd.put(result, result.id);
                            addRequest.onsuccess = (event) => {
                                return 'Пользователь успешно добавлен';
                            }
                        }
                    })
            }
        }
    };
}

setTimeout(() => {
    getUserById(1);
    getUserById(11);
    getUserById(30);
})