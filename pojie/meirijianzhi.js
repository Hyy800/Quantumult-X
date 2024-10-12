/*******************************
脚本功能：每日减脂-解锁会员
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fastdiet\.incmoon\.com\/dailyFastDiet\/user\/info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/meirijianzhi.js

[mitm] 
hostname = fastdiet.incmoon.com
*******************************/

var response = {
  "msg": "请求成功",
  "data": {
    "vipInfo": {
      "vipExpDay": 999999,
      "vipType": "permanent",
      "vipRole": "vip",
      "showExpPop": false
    }
  },
  "code": 200
};


$done({status: "HTTP/1.1 200 OK", body: JSON.stringify(response)});
