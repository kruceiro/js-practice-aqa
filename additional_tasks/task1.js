// Task #1 -> Password validation

const validatePassword = (password, repeatPassword) => {
	const passwordRules = {
		minLength: 8,
		numberRegex: /\d/,
		letterRegex: /\p{L}/u,
	};

	if (password !== repeatPassword) {
		return 'Passwords do not match';
	}
	if (password.length < passwordRules.minLength) {
		return `Password too short`;
	}
	if (!passwordRules.numberRegex.test(password)) {
		return `Password must contain a number`;
	}
	if (!passwordRules.letterRegex.test(password)) {
		return `Password must contain a letter`;
	} else {
		return 'Password is valid';
	}
};
console.log(validatePassword('1a', '2b')); // Passwords do not match
console.log(validatePassword('Passw0r', 'Passw0r')); // Password too short
console.log(validatePassword('Password', 'Password')); // Password must contain a number
console.log(validatePassword('12345678', '12345678')); // Password must contain a letter
console.log(validatePassword('Password1', 'Password1')); // Password is valid