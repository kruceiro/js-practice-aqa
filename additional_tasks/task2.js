// Task #2 -> Grades analysis

const grades = [1, 2, 3, 4, 6];

const analyzeGrades = (grades) => {
    const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    if (averageGrade < 3) {
        return 'Failed';
    }

    if (averageGrade >= 3 && averageGrade <= 4) {
        return 'Passed';
    }

    return 'Excellent';
}

console.log(analyzeGrades([1, 2, 3, 4, 5]));
console.log(analyzeGrades([1, 2, 1]));
console.log(analyzeGrades([5, 5, 4]));