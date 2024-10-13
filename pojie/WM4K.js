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

var response = JSON.parse($response.body);

// 提取并修改数据
var updatedData = {
    ...response.data.vod_play_list.urls,
    "group_id" = 3,
    "is_free" = true,
    "try_see" = 99999999,
};

// 将结果转换为 JSON 字符串并返回
$done({ body: JSON.stringify(updatedData) });
