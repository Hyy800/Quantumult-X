/*************************************
项目名称：小乖记账
更新日期：2024-10-13
脚本作者：Hyy
**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang2.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

var originalResponse = JSON.parse($response.body);

// 判定条件是否满足，比如某个字段的值等于某个预期值
if (originalResponse.data && originalResponse.data.vip === 1) {
    // 如果条件满足，修改响应体数据
    originalResponse = {
        "code": 0,
        "message": "successful",
        "data": {
            "virtual": {},
            "vip": 3,
            "isVip": true,
            "membership_type": 1
        }
    };
}

// 完成并返回最终响应体
$done({status: 200, body: JSON.stringify(originalResponse)});