# Nerves Test - Examination Checker

This repository contains solutions for algorithm challenges and a database design task. Follow the instructions below to understand the structure and how to run the tests for this project.

## Repository Structure

The project is divided into two main parts:

### Part 1: Algorithm Challenges
This part contains implementations and corresponding tests for three algorithm challenges.

#### 1. Allocate Resources Based on Priorities
- **Source File:** `src/allocateResources.js`
- **Test File:** `test/allocateResources.test.js`
- **Description:** Allocates a given budget to projects based on their priorities.

#### 2. Approval Workflow Simulation
- **Source File:** `src/approvalWorkflow.js`
- **Test File:** `test/approvalWorkflow.test.js`
- **Description:** Simulates an approval process by determining the appropriate approver for a purchase amount.

#### 3. Group Students by Grade
- **Source File:** `src/groupStudents.js`
- **Test File:** `test/groupStudents.test.js`
- **Description:** Groups students into grade categories (A, B, C, F) based on their scores.

### Part 2: Database Design
This part contains a database design document in PDF format.

- **File:** `database/Database.pdf`
- **Description:** Outlines the structure and relationships of a database for the given problem.

## How to Run the Tests

Follow these steps to set up the environment and run the tests:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jiramethnate/nerves-test-jirameth.git
   cd nerves-test-jirameth
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm installed. Run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Tests:**
   Use the following command to execute all test cases:
   ```bash
   npm test
   ```

4. **Verify Output:**
   - Check that all test cases pass without errors.
   - Review the test files (`test/*.test.js`) for detailed assertions and expected results.

## Notes

- **Algorithm Challenges:** Each challenge has a dedicated source file and test file for modularity.
- **Database Design:** The `Database.pdf` file provides a visual representation of the database schema, including tables, fields, and relationships.

For any questions or issues, feel free to open an issue in the repository.