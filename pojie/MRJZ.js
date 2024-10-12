/*******************************
脚本功能：每日减脂-解锁会员
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fastdiet\.incmoon\.com\/dailyFastDiet\/user\/info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/MRJZ.js

[mitm] 
hostname = fastdiet.incmoon.com
*******************************/

let obj = JSON.parse($response.body);

obj.data = {
    ...obj.data,
    vipInfo: {
        ...obj.data.vipInfo,
        vipExpDay: 99999,
        vipRole: "vip",
    },
    activityInfo: {
        ...obj.data.activityInfo,
        showRedBookActivity: false
    }
};

$done({ body: JSON.stringify(obj) });
