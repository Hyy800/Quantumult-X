/*************************************

项目名称：4k影视
下载地址：
更新日期：2024-10-10
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/101\.34\.60\.156:6543\/sk-api\/user\/get_user_info\?user_id url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = 101.34.60.156

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data" : {
    "tgm" : "1008611",
    "user_points" : 0,
    "user_pid_2" : 0,
    "user_id" : 471,
    "user_phone" : "",
    "user_extend" : 0,
    "user_reg_time" : 1728529657,
    "user_name" : "2205333599@qq.com",
    "group_id" : 3,
    "user_email" : "2205333599@qq.com",
    "user_pid" : 0,
    "user_nick_name" : "请你洗干净菊花",
    "user_qq" : "",
    "user_random" : "fb211d90c8ec9a104c45275bdbb7681f",
    "user_portrait" : "",
    "user_end_time" : 1728616530
  },
  "code" : 200
};
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});


