/*************************************

项目名称：vpn
下载地址：
更新日期：2024-10-18
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.go01\.top\/proxy\/user\/my\/info url script-response-body https://raw.githubusercontent.com/Hyy-Max/Quantumult-X/refs/heads/main/pojie/1232.js

[mitm]
hostname = api.go01.top

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy ={
  "msg" : "success",
  "data" : {
    "account" : "72779618",
    "serverName" : "bee",
    "vipValid" : true,
    "safeMode" : false,
    "china" : true,
    "defaultServerId" : "0b83ddce5cab4c37a29bd3927f536b2c",
    "promoteCount" : 0,
    "vipEndTime" : "2024-10-19 12:11",
    "shareUrl" : "http://106.52.81.117/share/#/?code=72779618",
    "hasSignin" : true,
    "name" : "",
    "vipType" : "svip",  // 将VIP类型修改为SVIP
    "svipEndTime" : "2099-12-31 23:59",  // 修改SVIP到期时间为2099年
    "promoteNumber" : "72779618",
    "email" : "",
    "phone" : "",
    "defaultServerLogo" : "http://106.52.81.117/images/flag/xinjiapo.png",
    "qingUrl" : "http://fn99.cc",
    "defaultServerName" : "新加坡",
    "hasNewMessage" : false,
    "hasPassword" : false,
    "leftFlow" : 0,
    "logo" : "",
    "svipValid" : true  // 设置SVIP有效
  },
  "code" : 0
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
