// src/approvalWorkflow.js

/**
 * Determines if a purchase can be approved based on the approvers' limits.
 * Finds the first approver whose approval limit is sufficient for the purchase.
 *
 * @param {Array} approvers - List of approvers with `name` and `limit` properties.
 * @param {number} purchaseAmount - The total amount to be approved.
 * @returns {Object} - Approval result with `approved` status and approver's name (if approved).
 */
function approvePurchase(approvers, purchaseAmount) {
  // Sort approvers by their approval limits in ascending order
  approvers.sort((a, b) => a.limit - b.limit);

  // Find the first approver with sufficient approval limit
  for (const approver of approvers) {
    if (purchaseAmount <= approver.limit) {
      return { approved: true, approver: approver.name };
    }
  }
  // If no approver can approve, return disapproval
  return { approved: false, approver: null };
}

module.exports = approvePurchase;