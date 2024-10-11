/*************************************

项目名称：小乖记账-解锁会员
下载地址：
更新日期：2024-10-10
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

// 解析原始响应
var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

// 创建自定义会话响应
hyy = {"isVip": true,  "membership_type": 1};

// 返回自定义响应
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});



