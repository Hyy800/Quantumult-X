/*******************************
脚本功能：每日减脂-解锁会员
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fastdiet\.incmoon\.com\/dailyFastDiet\/user\/info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/MRJZ.js

[mitm] 
hostname = fastdiet.incmoon.com
*******************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "msg": "请求成功",
  "data": {
    "vipInfo": { // VIP信息部分
      "vipExpDay": 36385, // VIP有效天数，设置为99年
      "vipType": "VIP", // VIP类型
      "vipRole": "vip", // 用户的VIP角色
      "showExpPop": true // 设置为显示VIP相关的经验弹窗
    },
    "activityInfo": { // 活动信息部分
      "showRedBookActivity": false // 设置为不显示红书活动
    }
  },
  "code": 200 // 响应码
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
