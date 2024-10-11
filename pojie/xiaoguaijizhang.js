#小乖记账
#为什么啊
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {"code":0,"message":"successful","data":{"virtual":{},"_id":"66fb1b3012a137a45a8096b0","vip":3,"create_time":1727732527,"vip_create_time":1727732527,"phone":"","wechat_id":"o2GVx6R36oX0K2KRDg5_kmBSgucw","headimgurl":"https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIovZPhFHiaetGsibx51bGtYgEd4BYcUj85cjuYShgMDAnmJuxewJrha8j04iccEqKxYyV8xH8gSShLmvrg4H1VuBD6FLwwc0fztrSV2BES63m4Q/132","nick_name":"🍊","wechat_unionid":"opPgJ6hdI71n_2Uo4UDPRsn_Lx7I","os_type":"ios","channel":"AppStore","ver":"2.2.5","isVip": true,"membership_type":1}};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
