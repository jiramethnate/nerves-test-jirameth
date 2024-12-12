// tests/allocateResources.test.js

/**
 * Tests the allocateResources function to ensure it properly allocates budgets to projects
 * based on their priority while respecting the total budget limit.
 *
 * Test Scenario:
 * - Three projects are given with different priorities and budget requirements.
 * - The total budget is less than the sum of all project budgets.
 * - The function should allocate the available budget starting with the highest priority project.
 */
const allocateResources = require("../src/allocateResources");

test("should allocate resources based on priority", () => {
  const projects = [
    { name: "Project A", budget: 5000, priority: 1 },
    { name: "Project B", budget: 3000, priority: 2 },
    { name: "Project C", budget: 2000, priority: 3 },
  ];
  const totalBudget = 8000;
  const result = allocateResources(projects, totalBudget);

  // Verify the result matches the expected allocation
  expect(result).toEqual([
    { name: "Project A", allocated: 5000 },
    { name: "Project B", allocated: 3000 },
    { name: "Project C", allocated: 0 }, // No budget left for the third project
  ]);
});