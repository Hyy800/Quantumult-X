###瞬连vpn

[rewrite_local]
^https:\/\/soonlink\.xn--wqr30o34q\.xn--io0a7i\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = soonlink.xn--wqr30o34q.xn--io0a7i

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "status": "success",
  "message": "操作成功",
  "data": {
    "commission_balance": 0,
    "banned": 0,
    "remind_expire": 1,
    "plan_id": 6,
    "discount": null,
    "uuid": "11111111-1234-1234-1234-121728504489",
    "created_at": 1728504499,
    "avatar_url": "https://cdn.v2ex.com/gravatar/d41d8cd98f00b204e9800998ecf8427e?s=64&d=identicon",
    "balance": 0,
    "remind_traffic": 1,
    "expired_at": 1950972499,  // 1728763699 + 10*365*24*60*60
    "commission_rate": null,
    "telegram_id": null,
    "email": null,
    "transfer_enable": 107374182400,  // 999GB = 999 * 1024 * 1024 * 1024
    "last_login_at": null
  },
  "error": null
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
