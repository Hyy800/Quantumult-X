##TaskFlow任务与清单-解锁订阅
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = api.revenuecat.com

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

var hyy = {
  "subscriber": {
    "management_url": "puls"
  }
};

$done({status: "HTTP/1.1 200 OK", body: JSON.stringify(hyy)});
