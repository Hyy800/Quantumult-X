/*************************************
项目名称：小乖记账-解锁会员
更新日期：2024-10-12
使用声明：仅供参考，转载与售卖！

**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js
[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
} else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  obj.body = JSON.stringify({
    "message": "successful",
    "data": {
      "vip": 1,
      "isVip": true,
      "membership_type": premium
    }
  });
}

$done(obj);
