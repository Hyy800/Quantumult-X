/*************************************
项目名称：完美4k-解锁会员
更新日期：2024-10-14
脚本作者：Hyy
**************************************
[rewrite_local]
^http:\/\/111\.229\.140\.167:8762\/apptov5\/v1\/vod\/getVod url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/WM4K.js

[mitm]
hostname = 111.229.140.167

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data" : {
    "is_down" : true,
    "pay_video_login_permission_desc" : "",
    "need_groups" : [],
  },
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
