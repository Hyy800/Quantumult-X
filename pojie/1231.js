/*************************************

项目名称：vpn
下载地址：
更新日期：2024-10-18
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.telescoep2\.vip\/api\/v5\/user url script-response-body http://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/1231.js

[mitm]
hostname = api.telescoep2.vip

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data": { // 包含具体用户数据的对象
    "totalTransfer": 1073741824000, // 总传输量，以字节为单位（这里是1000GB）
    "timeRemaining": 9999999, // 剩余时间（该字段可能需要更新以反映会员状况或更长的有效期）
    "vip": 1, // VIP状态标识，1表示是VIP
    "channel": "GW", // 渠道来源信息
    "flowUsed": "1.0GB", // 假设已使用流量为1GB
    "cardActive": true, // 标识卡是否激活
    "expiredDate": "2099-12-31 23:59:59", // 更新至新的到期日期
    "flowTotal": "1000GB", // 总流量更新为1000GB
    "isTrial": false, // 不再为试用账户
    "paidUser": true, // 更新为付费用户
    "flowRemaining": "999GB", // 更新剩余流量为999GB
    "status": 1 // 用户状态的标识符，具体的状态需要根据上下文解释
  }
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
