/*************************************

项目名称：淼播4k-强制登陆永久会员账号
更新日期：2024-10-10
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http?:\/\/101\.34\.60\.156:6543\/sk-api\/user\/open_vip url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = 101.34.60.156

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data" : {
    "tgm" : "rebpvb",
    "user_points" : 1,
    "user_pid_2" : 0,
    "user_id" : 9,
    "user_phone" : "18633999183",
    "user_extend" : 0,
    "user_reg_time" : 1726854553,
    "user_name" : "18633999183",
    "group_id" : 3,
    "user_email" : "",
    "user_pid" : 0,
    "user_nick_name" : "APP_zjCKZrQo",
    "user_qq" : "",
    "user_random" : "df2887c6f38d624e3b7d3e6b42c45de5",
    "user_portrait" : "",
    "user_end_time" : 4070908800
  },
  "code" : 200
};
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
