/*************************************
项目名称：小乖记账
更新日期：2024-10-13
脚本作者：Hyy
**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://gitee.com/hyy800/quantumult-x/raw/master/xiaoguaijizhang.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

if (Hyy666) {
    hyy = {
        "code": 0,
        "message": "successful",
        "data": {
            "virtual": {},
            "_id": "66fb1b3012a137a45a8096b0",
            "vip": 3,
            "isVip": true,
            "membership_type": 1
        }
    };
} else {
    hyy = {
        "code": 1,
        "message": "failed",
        "data": {}
    };
}

$done({ status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy) });
