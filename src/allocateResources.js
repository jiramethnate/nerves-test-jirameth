// src/allocateResources.js

/**
 * Allocates budgets to projects based on their priority, starting with the highest priority.
 * Projects with lower budgets are allocated first.
 * 
 * @param {Array} projects - List of project objects with `name`, `priority`, and `budget` properties.
 * @param {number} totalBudget - Total budget available for allocation.
 * @returns {Array} - List of projects with their names and allocated budgets.
 */
function allocateResources(projects, totalBudget) {
  // Sort projects by priority in ascending order
  const sortedProjects = projects.sort((a, b) => a.priority - b.priority);

  let remainingBudget = totalBudget;
  // Allocate budget to each project
  const result = sortedProjects.map((project) => {
    if (remainingBudget >= project.budget) {
      // Allocate full budget if enough funds are available
      remainingBudget -= project.budget;
      return { name: project.name, allocated: project.budget };
    } else {
      // Allocate the remaining budget if funds are insufficient
      const allocated = remainingBudget;
      remainingBudget = 0;
      return { name: project.name, allocated };
    }
  });

  return result;
}

module.exports = allocateResources;