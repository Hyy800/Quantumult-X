/*************************************

项目名称：4k影视
下载地址：
更新日期：2024-10-10
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
http:\/\/101\.34\.60\.156:6543\/sk-api\/user\/ulog_count\?user_id url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/12345.js

[mitm]
hostname = 101.34.60.156

*************************************/

/*************************************

项目名称：4k影视
下载地址：
更新日期：2024-10-10
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http?:\/\/101\.34\.60\.156:6543\/sk-api\/user\/open_vip url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/123.js

[mitm]
hostname = 101.34.60.156

*************************************/

// 解析原始响应
var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

// 创建自定义会话响应
hyy = {
  "data": {
    "user_id": 459,
    "user_nick_name": "永久会员",
    "expiretime": null, // 表示没有过期
    "paytype": 1,
    "user_points": 9999,
    "user_phone": "1",
    "user_extend": 1,
    "group_id": 1,
    "user_qq": "1"
  },
  "code": 200,
  "message": "获取会员信息成功"
};

// 返回自定义响应
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
