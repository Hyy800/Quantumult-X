###小乖记账-解锁会员
    
[rewrite_local]
^https:\/\/tcbff\.xiaoguaijizhang\.cn\/v1\/account\/user\/find script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/xiaoguaijizhang.js

[mitm]
hostname = tcbff.xiaoguaijizhang.cn

*************************************/

// 解析响应体
var hyy = JSON.parse($response.body);

// 创建新的响应数据
hyy = {  
    "message": "successful",  
    "data": {    
        "vip": 3,    
        "channel": "AppStore",    
        "isVip": true  
    }
};

// 返回自定义的响应
$done({status: "HTTP/1.1 200 OK", body: JSON.stringify(hyy)});

确保保存的文件符合圈X的文件结构和格式，必要时调整 URL 和其他参数。如果有任何其他需求，欢迎继续询问！
