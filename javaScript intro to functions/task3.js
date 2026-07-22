// Task 3

function checkOrder(available, ordered) {
	const largeOrder = 'Your order is too large, we don’t have enough goods.';
	const emptyOrder = 'Your order is empty.';
	const acceptedOrder = 'Your order is accepted.';
	if (ordered === 0) {
		return emptyOrder;
	} else if (available < ordered) {
		return largeOrder;
	} else {
		return acceptedOrder;
	}
}
console.log(checkOrder(5, 10));
console.log(checkOrder(5, 0));
console.log(checkOrder(10, 5));
