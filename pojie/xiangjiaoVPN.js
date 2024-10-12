/*
香蕉vpn
*
[rewrite_local]
^https:\/\/120\.78\.75\.97:9000\/bana\/v1\/banalogin url https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiangjiaoVPN.js

[mitm]
hostname = 120.78.75.97
*/

var hyy = JSON.parse($response.body);

hyy.data.user.subscription = { 
  ...hyy.data.user.subscription,
  "plan": "Banana VIP Monthly",
  "expired": "2099-09-09 03:48:37",
  "remaining_traffic": "9999.9GB",
  "transfer_enable": "9999.9GB",
  "level": 3
};

$done({ body: JSON.stringify(hyy) });
