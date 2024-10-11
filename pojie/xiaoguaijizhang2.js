/*************************************

项目名称：小乖记账-解锁会员
更新日期：2024-10-12
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang2.js
[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {"code":0,"message":"successful","data":{"virtual":{},"_id":"    ","vip":3,"create_time":    ,"vip_create_time":    ,"phone":"","wechat_id":"    ","headimgurl":"https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIovZPhFHiaetGsibx51bGtYgEd4BYcUj85cjuYShgMDAnmJuxewJrha8j04iccEqKxYyV8xH8gSShLmvrg4H1VuBD6FLwwc0fztrSV2BES63m4Q/132","nick_name":"   ","wechat_unionid":"   ","os_type":"ios","channel":"AppStore","ver":"2.2.5","isVip":true,"membership_type":1}};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});