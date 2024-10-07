/*************************************

项目名称：超级应用锁
下载地址：
更新日期：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.safeapp\.studio\/super-app-lock\/member\/info url script-response-body https://raw.githubusercontent.com/Hyy-Max/Quantumult-X/refs/heads/main/pojie/chaojiyingyongsuo.js
[mitm]
hostname = api.safeapp.studio

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
	"code": "0",
	"message": "ok",
	"result": {
	  "vipType": 211,
	  "vipTypeName": "Lifetime",
	  "isExpired": false,
	  "expiredIn": 4092595200000
	},
	"requestId": "",
	"success": true
  };

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
