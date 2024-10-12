/*
Moises-音乐人应用
*
[rewrite_local]
^https:\/\/api\.moises\.ai\/graphql url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/Moises.js

[mitm]
hostname = api.moises.ai
*/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "subscription": { 
  "isPremium": true, // 现在用户是付费用户
  "details": {
    "__typename": "UserSubscriptionDetails",
    "providerGateway": "永久", // 使用"永久"来表示不是周期性的计划
    "providerName": "示例提供商", // 假设的提供商名称
    "planCycle": "永久" // 使用"永久"来表示无固定周期
  },
  "currentMonthlyUsage": 0, // 当前月度使用量
  "isPro": true, // 现在用户是高级会员
  "availableCredits": 5, // 用户可用的信用点数
  "plan": "高级", // 修改为高级计划
  "subscriptionType": "individual" // 订阅类型：个人
}};

/*

"subscription": { 
  "isPremium": true, // 现在用户是付费用户
  "details": {
    "__typename": "UserSubscriptionDetails",
    "providerGateway": "永久", // 使用"永久"来表示不是周期性的计划
    "providerName": "示例提供商", // 假设的提供商名称
    "planCycle": "永久" // 使用"永久"来表示无固定周期
  },
  "currentMonthlyUsage": 0, // 当前月度使用量
  "isPro": true, // 现在用户是高级会员
  "availableCredits": 5, // 用户可用的信用点数
  "plan": "高级", // 修改为高级计划
  "subscriptionType": "individual" // 订阅类型：个人
}

*/
