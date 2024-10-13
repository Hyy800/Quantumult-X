/*************************************

项目名称：Lento-壁纸
下载地址：
更新日期：2024-08-06
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/94\.74\.97\.241\/5066890-47b2-421a-bc34-873447d6ecee\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/VPN.js

[mitm]
hostname = 94.74.97.241

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
	  "data" : {
    "balance" : 999999,
    "plan_id" : 3,
    "is_vip" : true,
    "transfer_enable" : 99999999999999,
  }
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});




