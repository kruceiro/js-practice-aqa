// Task #3 -> Order filtration

const orders = [
    {
        id: 1,
        price: 255,
        isPaid: true
    },
    {
        id: 2,
        price: 1000,
        isPaid: false
    },
    {
        id: 3,
        price: 100,
        isPaid: true
    },
    {
        id: 4,
        price: 550,
        isPaid: true
    }
];
const orderSum = (orders) => {
    const paidOrderIds = [];
    let totalSum = 0;
    let paidSum = 0;

    for (const { id, price, isPaid } of orders) {
        totalSum = totalSum + price;
        if (isPaid === true) {
            paidSum = paidSum + price;
            paidOrderIds.push(id);
        }
    }

    return {
        paidOrderIds,
        totalSum,
        paidSum
    };
}
console.log(orderSum(orders));