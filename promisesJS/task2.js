function fetchToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if(!response.ok) {
            throw new Error("Nothing to fetch [ToDo]");
        }
        return response.json();
    })
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if(!response.ok) {
            throw new Error("Nothing to fetch [User]");
        }
        return response.json();
    })
}

Promise.all([fetchToDo(), fetchUser()]) 
    .then(results => {
        const [todo, user] = results;
        console.log('Promise All results: ', {todo, user})
    })
    .catch(error => console.log('Promise All error: ', error))

    Promise.race([fetchToDo(), fetchUser()]) 
    .then(resultsOne => {
        console.log('Promise Race results: ', resultsOne)
    })
    .catch(error => console.log('Promise Race error: ', error))