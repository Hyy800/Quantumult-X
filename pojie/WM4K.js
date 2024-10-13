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

if (Hyy666) {
    hyy = {
	"ENCRYPTION": 0, // 加密状态，0表示未加密
	"code": 1, // 返回状态码，1表示成功
	"data": {
		"vod_play_list": [ // 视频播放列表
			{
				"urls": [ // URL对象列表
					{
						"is_free": true // 该内容是否免费，true表示免费
					}
					// 这里可以有更多的URL对象，每个对象代表一个视频链接及其属性
				]
			}
			// 可能还有更多的视频播放对象
		]
	}
	"msg" : "ok"
};

$done({ status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy) });
