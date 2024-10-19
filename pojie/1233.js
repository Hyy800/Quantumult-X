/*************************************

项目名称：vpn
下载地址：
更新日期：2024-10-18
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/api\.xiguavpn\.xyz\/hot\/m_net_user_data url script-response-body http://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/pojie/1233.js

[mitm]
hostname = api.xiguavpn.xyz

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "remark": "成功",
  "result": {
    "m_network_invitation_validity": true,
    "m_network_premium_duration_time": 999,  // 可能需要根据铂金用户的特权设置适当的时间
    "is_world_open": 1,
    "m_network_identification": 27084322,
    "m_network_premium_category_type": 3,  // 更改为铂金用户类型
    "m_network_user_identity": "3",
    "m_network_category_type": 1,
    "m_network_daily_duration_time": 99999,  // 可能需要更改为铂金用户的每日使用时长
    "m_network_meeting": "5b56e861ea613fe7e490f6493910371d",
    "m_network_new_user_indicator": 1,
    "m_network_authentication_secret": "",
    "m_network_today_premium_indicator": 3  // 可能需要更改为铂金用户的指示器
  },
  "code": 200
};

$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
