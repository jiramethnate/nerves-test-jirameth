// tests/groupStudents.test.js

/**
 * Tests the groupStudentsByGrade function to ensure it groups students into the correct
 * grade categories (A, B, C, F) based on their scores.
 * 
 * Test Scenario:
 * - A list of students with various grades is provided.
 * - The function should group students into grade categories:
 *   - A: 90 and above
 *   - B: 80-89
 *   - C: 70-79
 *   - F: below 70
 */
const groupStudentsByGrade = require("../src/groupStudents");

test("should group students by grade", () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 67 },
  ];

  const result = groupStudentsByGrade(students);

  // Verify the result groups students into the expected categories
  expect(result).toEqual({
    A: [{ name: "Bob", grade: 92 }], // Only Bob qualifies for grade A
    B: [{ name: "Alice", grade: 85 }], // Alice qualifies for grade B
    C: [], // No students in grade C (70-79)
    F: [{ name: "Charlie", grade: 67 }], // Charlie falls in grade F
  });
});