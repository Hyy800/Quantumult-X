/*************************************

项目名称：小乖记账-解锁会员
更新日期：2024-10-12
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang2.js
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
  // 替换为提供的 JSON 数据
  obj.body = JSON.stringify({
    "code": 0,
    "message": "successful",
    "data": {
      "virtual": {},
      "_id": "66fb1b3012a137a45a8096b0",
      "vip": 3,
      "create_time": 1727732527,
      "vip_create_time": 1727732527,
      "phone": "",
      "wechat_id": "o2GVx6R36oX0K2KRDg5_kmBSgucw",
      "headimgurl": "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIovZPhFHiaetGsibx51bGtYgEd4BYcUj85cjuYShgMDAnmJuxewJrha8j04iccEqKxYyV8xH8gSShLmvrg4H1VuBD6FLwwc0fztrSV2BES63m4Q/132",
      "nick_name": "f09f8d8a",
      "wechat_unionid": "opPgJ6hdI71n_2Uo4UDPRsn_Lx7I",
      "os_type": "ios",
      "channel": "AppStore",
      "ver": "2.2.5",
      "isVip": true,
      "membership_type": 1
    }
  });
}

$done(obj);