const remoteURL = "http://localhost:5002"

export default {
    get(tableName, id) {
        return fetch(`${remoteURL}/${tableName}/${id}`).then(result => result.json())
    },
    getAll(tableName) {
        return fetch(`${remoteURL}/${tableName}`).then(result => result.json())
    },
}