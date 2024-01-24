// // Ex10: Use ES6 feature to refactor the code
// function getUserSubscriptionInfo(user) {
//     let plan, status;
//     if (user) {
//       if (user.subscription) {
//         if (user.subscription.plan) {
//           plan = user.subscription.plan.name;
//         }
//         if (user.subscription.status) {
//           status = user.subscription.status;
//         }
//       }
//     }
//     return { plan: plan || 'No Plan', status: status || 'Inactive' };
//   }

// Example user object
function getUserSubscriptionInfo(user) {
  let plan = user?.subscription?.plan?.name || "NO Plan";
  let status = user?.subscription?.status || "Inactive";
  return { plan, status };
}
const user = {
  id: "123",
  name: "Alice",
  subscription: {
    plan: { name: "Premium" },
    status: "Active",
  },
};

console.log(getUserSubscriptionInfo(user));
