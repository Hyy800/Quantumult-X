/*************************************

项目名称：4k影视
下载地址：
更新日期：2024-10-10
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/101\.34\.60\.156:6543\/sk-api\/user\/open_vip https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/123.js

[mitm]
hostname = 101.34.60.156

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data" : {
    "tgm" : "aoldgb",
    "user_points" : 36,
    "user_id" : 36,
    "user_phone" : "36",
    "user_extend" : 36,
    "user_reg_time" : 1728522613,
    "user_name" : "2205444587@qq.com",
    "group_id" : 36,
    "user_email" : "2205444587@qq.com",
    "user_nick_name" : "APP_Xp9JtT3u",
    "user_qq" : "",
    "user_end_time" : 1728609085
  },
  "code" : 200
};
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
