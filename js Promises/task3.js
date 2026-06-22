
async function fetchToDo(todoId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    return data;
}
async function fetchUser(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
}

async function getData() {
    try {
        const allPromises = await Promise.all([fetchToDo(1), fetchUser(1)]);
        const racePromises = await Promise.race([fetchToDo(1), fetchUser(1)]);

        console.log('ALL:', allPromises);
        console.log('RACE:', racePromises);
    }
    catch (error) {
        console.log(error);
    }
}

getData()