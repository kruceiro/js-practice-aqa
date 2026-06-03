const handleEven = () => {
    console.log('number is even');
};
const handleOdd = () => {
    console.log('number is odd');
};
const handleNum = (number, handleEven, handleOdd) => {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
};
handleNum(2, handleEven, handleOdd);
handleNum(9, handleEven, handleOdd);