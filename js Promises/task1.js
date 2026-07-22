const newFunction = (randomText, msTimer) => {
	setTimeout(() => {
		console.log(randomText);
	}, msTimer);
};
console.log('Request sent...');
newFunction('Hello world!', 3000);
