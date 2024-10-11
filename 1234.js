###瞬连vpn-niubi

[rewrite_local]
^https://soonlink.xn--wqr30o34q.xn--io0a7i/api/v1/user/getSubscribe url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = soonlink.xn, wqr30o34q.xn

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "status": "success",
  "message": "操作成功",
  "data": {
    "month_price": 50000,
    "half_year_price": 240000,
    "group_id": 4,
    "speed_limit": null,
    "two_year_price": null,
    "reset_price": null,
    "year_price": 420000,
    "onetime_price": null,
    "capacity_limit": null,
    "sort": 7,
    "quarter_price": 127500,
    "updated_at": 1723559574,
    "name": "Team计划",
    "id": 9,
    "show": 1,
    "renew": 1,
    "three_year_price": null,
    "transfer_enable": 9999,
    "reset_traffic_method": null,
    "created_at": 1720811414,
    "content": [
      {
        "feature": "无带宽速率限制",
        "support": true
      },
      {
        "feature": "解锁Netfilx、Hulu、HBO、Disney+、Dazn等主流流媒体平台",
        "support": true
      },
      {
        "feature": "支持海外用户，支持全球使用",
        "support": true
      },
      {
        "feature": "支持30设备同时使用",
        "support": true
      },
      {
        "feature": "智能负载加速+IPLC",
        "support": true
      },
      {
        "feature": "全球主流地区高速节点",
        "support": true
      },
      {
        "feature": "7*24小时技术支持",
        "support": true
      }
    ]
  },
  "error": null
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
