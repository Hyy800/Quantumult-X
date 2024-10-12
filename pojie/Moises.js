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
  "isPremium": true, // 用户现在是付费用户
  "details": {
    "__typename": "UserSubscriptionDetails",
    "providerGateway": "示例网关", // 假设的提供商网关
    "providerName": "示例提供商", // 假设的提供商名称
    "planCycle": "monthly" // 假设用户的付费计划是按月的
  },
  "currentMonthlyUsage": 0, // 当前月度使用量
  "isPro": true, // 用户现在是高级会员
  "availableCredits": 10, // 假设新的可用信用点数
  "plan": "pro", // 设置为 Pro 计划
  "subscriptionType": "individual" // 订阅类型：个人
}};
