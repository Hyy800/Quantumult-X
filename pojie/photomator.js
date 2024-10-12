/*******************************
脚本功能：Photomator照片编辑-解锁订阅
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body /*******************************
脚本功能：Photomator照片编辑-解锁订阅
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/photomator.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/photomator.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
let obj = {};

if (typeof $response === "undefined") {
    // 删除特定的请求头并保存修改后的请求头
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    obj.headers = $request.headers;
} else {
    let body = JSON.parse($response.body || "{}");

    if (body.subscriber) {
        const productId = "pixelmator_photo_lifetime_v1";
        const entitlement = "pixelmator_photo_pro_access";

        // 更新订阅者的权限和订阅信息
        body.subscriber.entitlements[entitlement] = body.subscriber.subscriptions[productId] = {
            expires_date: "2999-01-01T00:00:00Z",
            original_purchase_date: "2021-01-01T00:00:00Z",
            purchase_date: "2021-01-01T00:00:00Z",
            ownership_type: "PURCHASED",
            store: "app_store",
            product_identifier: productId
        };

        obj.body = JSON.stringify(body);
    }
}

$done(obj);
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/photomator.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
let obj = {};

if (typeof $response === "undefined") {
    // 删除特定的请求头并保存修改后的请求头
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    obj.headers = $request.headers;
} else {
    let body = JSON.parse($response.body || "{}");

    if (body.subscriber) {
        const productId = "pixelmator_photo_lifetime_v1";
        const entitlement = "pixelmator_photo_pro_access";

        // 更新订阅者的权限和订阅信息
        body.subscriber.entitlements[entitlement] = body.subscriber.subscriptions[productId] = {
            expires_date: "2999-01-01T00:00:00Z",
            original_purchase_date: "2021-01-01T00:00:00Z",
            purchase_date: "2021-01-01T00:00:00Z",
            ownership_type: "PURCHASED",
            store: "app_store",
            product_identifier: productId
        };

        obj.body = JSON.stringify(body);
    }
}

$done(obj);
