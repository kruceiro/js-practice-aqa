function fetchToDo(todoId) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((response) => response.json());
}
function fetchUser(userId) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => response.json());
}

const allPromises = Promise.all([fetchToDo(1), fetchUser(1)]);
const racePromises = Promise.race([fetchToDo(1), fetchUser(1)]);

allPromises.then((result) => console.log('ALL:', result)).catch((error) => console.log(error));

racePromises.then((result) => console.log('RACE:', result)).catch((error) => console.log(error));
