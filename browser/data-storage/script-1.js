// Задача 1

function setCookieByDay(name, value, domain) {
    const today = new Date();
    let date = new Date(today.setDate(today.getDate() + 3));
    date = date.toUTCString();

    document.cookie = `${name}=${encodeURIComponent(value)}; domain=${domain}; expires=${date}; samesite`
}