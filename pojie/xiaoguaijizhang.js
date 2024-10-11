




项目名称：小乖记账-解锁会员
更新日期：2024-10-10
使用声明：⚠️仅供参考，🈲转载与售卖！

[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

// 判定 VIP 状态
if (hyy.data.vip > 0) {
    hyy.data.isVip = true; // 设置为 VIP
    hyy.message = "欢迎，尊贵的 VIP 用户!";
} else {
    // 如果不是 VIP，直接返回不处理
    hyy = {"code": 1, "message": "非 VIP 用户，无法访问"}
};

// 最终构建的新 JSON 对象
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});



