/*
[rewrite_local]
^http:\/\/101\.34\.60\.156:6543\/sk-api\/vod\/skjson\?url url https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/123.js
*
[mitm]
hostname = 101.34.60.156
*/
let response = {
  "data": {
    "isPlayLoading": true,
    "currentUrlStatus": "stop",
    "hasNext": true,
    "code": 200,
    "currentIndex": 1,
    "mingwei": 1,
  },
  "code": 200
};

$done({body: JSON.stringify(response)});
