/*************************************
项目名称：小乖记账
更新日期：2024-10-13
脚本作者：Hyy
**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

const isTestMode = $request.headers['X-Test-Mode'] === 'true';

var hyy = JSON.parse($response.body);

const Hyy666 = typeof $task !== "undefined";

hyy = {
    "code": 0,
    "message": "successful",
    "data": {
        "virtual": {},
        "vip": 1,
        "isVip": true,
        "membership_type": 1
    }
};

$done({
    status: Hyy666 ? "HTTP/1.1 200 OK" : 200, 
    body: JSON.stringify(hyy),
    headers: {
        "Content-Type": "application/json"
    },
    testMode: isTestMode
});