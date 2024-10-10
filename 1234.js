/*************************************

项目名称：4k影视
下载地址：
更新日期：2024-10-10
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/101\.34\.60\.156:6543\/sk-api\/vod\/bangdan url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = 101.34.60.156

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data" : [
    {
      "data" : [
        {
          "vod_sub" : "1",
          "vod_pic_slide" : "1",
          "vod_score" : 1,
          "group_id" : 1,
       }
    ]}
]};
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});


