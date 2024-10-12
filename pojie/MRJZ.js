/*******************************
脚本功能：每日减脂-解锁会员
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fastdiet\.incmoon\.com\/dailyFastDiet\/user\/info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/MRJZ.js

[mitm] 
hostname = fastdiet.incmoon.com
*******************************/

var response = JSON.parse($response.body); // 解析当前响应的 JSON 数据
const isTaskDefined = typeof $task !== "undefined"; // 判断当前环境是否支持 $task

// 构造新的响应体
response = {
  "data": {
    "vipInfo": { // VIP信息部分
      "vipExpDay": 99999, // VIP有效天数，设置为99年
      "vipRole": "vip", // 用户的VIP角色
    },
    "activityInfo": { // 活动信息部分
      "showRedBookActivity": false // 设置为不显示红书活动
    }
  },
};

// 返回修改后的响应对象
$done({status: isTaskDefined ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(response)});
