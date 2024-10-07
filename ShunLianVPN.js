/*************************************

项目名称：瞬连VPN-会员
下载地址：
更新日期：2024-10-08
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/soonlink\.xn--wqr30o34q\.xn--io0a7i\/api\/v1\/user\/getSubscribe url script-response-body https://raw.githubusercontent.com/Hyy-Max/Quantumult-X/refs/heads/main/ShunLianVPN.js

[mitm]
hostname = soonlink.xn，wqr30o34q.xn，soonlink.xn--wqr30o34q.xn--io0a7i


*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "status" : "success",
  "message" : "操作成功",
  "data" : {
    "expired_at" : 1720811414,
    "reset_day" : null,
    "subscribe_url" : "https://soonlink.xn--wqr30o34q.xn--io0a7i/api/v1/client/subscribe?token=f2dc0a1fda7182610d7fb28c58215bb0",
    "u" : 9701,
    "d" : 9728,
    "uuid" : "11111111-1234-1234-1234-121728317661",
    "email" : null,
    "transfer_enable" : 9999,
    "token" : "f2dc0a1fda7182610d7fb28c58215bb0",
    "plan_id" : 9,
    "plan" : {
      "month_price" : 50000,
      "half_year_price" : 240000,
      "group_id" : 4,
      "speed_limit" : null,
      "two_year_price" : null,
      "reset_price" : null,
      "year_price" : 420000,
      "onetime_price" : null,
      "capacity_limit" : null,
      "sort" : 7,
      "quarter_price" : 127500,
      "updated_at" : 1723559574,
      "name" : "Team计划",
      "id" : 9,
      "show" : 1,
      "renew" : 1,
      "three_year_price" : null,
      "transfer_enable" : 9999,
      "reset_traffic_method" : null,
      "created_at" : 1720811414,
      "content" : "[\n    {\n        \"feature\":\"无带宽速率限制\",\n        \"support\":true\n    },\n\t{\n        \"feature\":\"解锁Netfilx、Hulu、HBO、Disney+、Dazn等主流流媒体平台\",\n        \"support\":true\n    },\n    {\n        \"feature\":\"支持海外用户，支持全球使用\",\n        \"support\":true\n    },\n\t{\n        \"feature\":\"支持30设备同时使用\",\n        \"support\":true\n    },\n\t{\n        \"feature\":\"智能负载加速+IPLC\",\n        \"support\":true\n    },\n    {\n        \"feature\":\"全球主流地区高速节点\",\n        \"support\":true\n    },\n {\n        \"feature\":\"7*24小时技术支持\",\n        \"support\":true\n    }\n]"
    }
  },
  "error" : null
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
