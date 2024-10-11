/*******************************
脚本功能：小乖记账 - 解锁高级功能
脚本作者：YourName
注意事项：查看频道说明
频道地址：https://t.me/YourChannel
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.xiaogua\.com\/.+\/(user\/info|subscription\/status) url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaogua.js
^https:\/\/api\.xiaogua\.com\/.+\/(user\/info|subscription\/status) url script-request-header https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaogua.js
[mitm] 
hostname = api.xiaogua.com
*******************************/
let obj = {};

if (typeof $response == "undefined") {
  // 请求处理
  delete $request.headers["x-app-etag"];
  delete $request.headers["X-App-ETag"];
  obj.headers = $request.headers;
} else {
  // 响应处理
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if (body && body.user) {
    // 修改用户信息
    body.user.vipStatus = true; // 设置用户为VIP
    body.user.membershipType = "premium"; // 设置会员类型为高级
    body.user.subscriptionEndDate = "2999-12-31T23:59:59Z"; // 设置订阅到期时间
    obj.body = JSON.stringify(body);
  }
}

$done(obj);
