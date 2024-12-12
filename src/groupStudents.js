// src/groupStudents.js

/**
 * Groups students by their grades into predefined categories (A, B, C, F).
 * 
 * @param {Array} students - List of student objects with `name` and `grade` properties.
 * @returns {Object} - An object with grade categories (A, B, C, F) as keys and arrays of students as values.
 */
function groupStudentsByGrade(students) {
  // Initialize grade groups
  const groups = { A: [], B: [], C: [], F: [] };

  // Categorize students based on their grades
  students.forEach(student => {
    if (student.grade >= 90) {
      groups.A.push(student); // Grade A: 90 and above
    } else if (student.grade >= 80) {
      groups.B.push(student); // Grade B: 80-89
    } else if (student.grade >= 70) {
      groups.C.push(student); // Grade C: 70-79
    } else {
      groups.F.push(student); // Grade F: below 70
    }
  });

  return groups;
}

module.exports = groupStudentsByGrade;