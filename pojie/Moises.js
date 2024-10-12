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
    const product_id = "pro_yearly";//修改这个数值
    const entitlement = "pro";//修改这个数值
    let data = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    subscriber.entitlements[(entitlement)] = subscriber.subscriptions[(product_id)] = data;        
    subscriber.entitlements[(entitlement)].product_identifier = product_id;   
    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
