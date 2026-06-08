const person = {
    firstName: 'Alex',
    lastName: 'Garfield',
    age: 30,
};
person.email = 'test_email123@gmail.com';
delete person.age;
console.log(person);