/******************************* 
Moises-解锁订阅
2024-10-12
********************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/Moises.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/Moises.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const product_id = "pro_annual";  // 产品 ID，修改为年度订阅
    const entitlement = "pro";  // 权益名称，表示专业版权益
    let data = {
      "expires_date": "2999-01-01T00:00:00Z",  // 设置过期日期为一个很远的未来
      "original_purchase_date": "2024-10-12T00:00:00Z",  // 原始购买日期，设置为当前日期
      "purchase_date": "2024-10-12T00:00:00Z",  // 购买日期，设置为当前日期
      "ownership_type": "PURCHASED",  // 拥有类型为已购买
      "store": "app_store"  // 指定为应用商店
    };
    let subscriber = body.subscriber;  // 获取订阅者信息
    subscriber.entitlements[(entitlement)] = subscriber.subscriptions[(product_id)] = data;  // 更新订阅者的权益和订阅信息
    subscriber.entitlements[(entitlement)].product_identifier = product_id;  // 设置权益的产品标识符
    obj.body = JSON.stringify(body);  // 将修改后的对象转换为字符串
  } 
}

$done(obj);  // 结束脚本并返回修改后的对象