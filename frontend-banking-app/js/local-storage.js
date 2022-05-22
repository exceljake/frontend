export function setItem(item, data) {
    return localStorage.setItem(item, JSON.stringify(data));
}

export function getItem(item) {
    return localStorage.getItem(item);
}