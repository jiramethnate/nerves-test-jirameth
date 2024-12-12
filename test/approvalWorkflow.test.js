// tests/approvalWorkflow.test.js

/**
 * Tests the approvePurchase function to ensure it identifies the correct approver
 * for a given purchase amount based on their approval limits.
 *
 * Test Scenario:
 * - Three approvers are given with different approval limits.
 * - A purchase amount is specified that falls within the limit of one of the approvers.
 * - The function should return the approver who can approve the purchase.
 */
const approvePurchase = require("../src/approvalWorkflow");

test("should approve purchase and return approver", () => {
  const approvers = [
    { name: "Manager", limit: 5000 },
    { name: "Director", limit: 20000 },
    { name: "CEO", limit: 50000 },
  ];
  const purchaseAmount = 15000;
  const result = approvePurchase(approvers, purchaseAmount);

  // Verify the result indicates the correct approver
  expect(result).toEqual({ approved: true, approver: "Director" });
});