const car1 = {
	brand: 'AUDI',
	model: 'A6',
	year: 2024,
};
const car2 = {
	brand: 'BMW',
	model: 'M3',
	owner: 'John',
};
const car3 = { ...car1, ...car2 };
console.log(car3);
