##

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/1234.js

[mitm]
hostname = api.revenuecat.com

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "request_date_ms" : 1728683360971,
  "request_date" : "2024-10-11T21:49:20Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-10-11T21:48:26Z",
    "original_application_version" : "491",
    "other_purchases" : {

    },
    "management_url" : puls,
    "subscriptions" : {

    },
    "entitlements" : {

    },
    "original_purchase_date" : "2024-10-11T21:47:38Z",
    "original_app_user_id" : "$RCAnonymousID:542a1cc3dca14386a5d282f6a0c2bad6",
    "last_seen" : "2024-10-11T21:49:04Z"
  }
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
