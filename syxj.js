/*
水印相机
*
[rewrite_local]
^https:\/\/cfg\.thread0\.com:8091\/appmanage\/app\/config url script-response-header https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/syxj.js

[mitm]
hostname = cfg.thread0.com
*/
var modifiedHeaders = $response.headers;

modifiedHeaders['isVip'] = '1';

$done({headers: modifiedHeaders});
