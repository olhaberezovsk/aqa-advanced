async function fetchToDo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
        throw new Error(`Nothing to fetch [ToDo], ${response.status}`);
    }
    return response.json();
}

async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
        throw new Error(`Nothing to fetch [ToDo], ${response.status}`);
    }
    return response.json();
}

async function fetchAll() {
    try {
        const [todo, user] = await Promise.all([fetchToDo(), fetchUser()]);
        console.log('Promise All results: ', {todo, user})
        const promiceRaceResult = await Promise.race([fetchToDo(), fetchUser()])
        console.log('Promise Race results: ', promiceRaceResult)
    }
    catch(error) {
        console.log("Nothing to display!", error);
    }
}

fetchAll();