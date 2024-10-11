/*************************************
项目名称：小乖记账-解锁会员
更新日期：2024-10-12
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js
[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

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
    body.user.isVip = true; // 设置用户为VIP
    body.user.membership_type = "premium"; // 设置会员类型为高级
    body.user.subscriptionEndDate = "2999-12-31T23:59:59Z"; // 设置订阅到期时间
    obj.body = JSON.stringify(body);
  }
}

$done(obj);
