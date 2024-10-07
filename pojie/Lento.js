/*************************************

项目名称：Lento-壁纸
下载地址：
更新日期：2024-08-06
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/lentoapp\.com:8081\/getUserMemberShipInfo url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/Lento.js
[mitm]
hostname = lentoapp.com

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
	"data" :  {
		"expiretime" : "null",
		"paytype" : 1
	},
	"meta" :  {
		"code" : 200,
		"message" : "获取作者信息成功"
	}
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
