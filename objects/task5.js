const users = [
    {
        name: 'John',
        email: 'john_doe@gmail.com',
        age: 44,
        gender: 'male',
        registered: true
    },
    {
        name: 'Alex',
        email: 'alex_doe@gmail.com',
        age: 25,
        gender: 'male',
        registered: false
    },
    {
        name: 'Monica',
        email: 'monica_doe@gmail.com',
        age: 30,
        gender: 'female',
        registered: true
    },
    {
        name: 'Anna',
        email: 'anna-for-test@gmail.com',
        age: 18,
        gender: 'female',
        registered: true
    },
];
for (const { name, email, age, gender, registered } of users) {
    console.log(
        `Name: ${name}, Email: ${email}, Age: ${age}, Gender: ${gender}, Registered: ${registered}`
    );
}