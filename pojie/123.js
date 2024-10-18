/*************************************

项目名称：vpn
下载地址：
更新日期：2024-10-18
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/music\.telescope1\.vip\/api\/v5\/pay\/pay\/check url script-response-body https://raw.githubusercontent.com/Hyy-Max/Quantumult-X/refs/heads/main/pojie/123.js

[mitm]
hostname = api.telescoep2.vip

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "message": "支付成功", // 此字段描述支付状态的信息，这里表示支付已完成
  "status": "success",  // 此字段表示交易的状态，说明交易已成功
  "code": 200           // 通常，代码200表示成功
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
