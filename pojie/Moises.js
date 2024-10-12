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
    "planCycle": "lifetime" // 假设用户的付费计划是按月的
  },
  "currentMonthlyUsage": 0, // 当前月度使用量
  "isPro": true, // 用户现在是高级会员
  "plan": "pro", // 设置为 Pro 计划
}};
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
