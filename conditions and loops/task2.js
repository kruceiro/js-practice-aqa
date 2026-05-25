// Task 2

const averageGrade = 100;

switch (true) {
    case averageGrade < 0 || averageGrade > 100:
        console.log('Invalid value');
        break;
    case averageGrade < 60:
        console.log('Unsatisfactory');
        break;
    case averageGrade <= 70:
        console.log('Satisfactory');
        break;
    case averageGrade <= 80:
        console.log('Good');
        break;
    case averageGrade <= 90:
        console.log('Very good');
        break;
    default:
        console.log('Excellent');
}