// Task #4 -> Test results analysis

const testResults = [
    { name: "Login test", passed: true },
    { name: "Checkout test", passed: false },
    { name: "Profile test", passed: true }
]
const analyzeTests = (testResults) => {
    let passedCount = 0;
    let failedCount = 0;
    let status = null;
    for (const { name, passed } of testResults) {
        if (passed === true) {
            passedCount++;
        } else {
            failedCount++;
        }
    }
    if (failedCount > 0) {
        status = 'Build failed';
    } else {
        status = 'Build passed';
    }
    return {
        passed: passedCount,
        failed: failedCount,
        status
    };
}
console.log(analyzeTests(testResults))