**************************************

[rewrite_local]
^http:\/\/101\.34\.60\.156:6543\/sk-api\/user\/vip_base_info url script-response-body https://raw.githubusercontent.com/Hyy800/Quantumult-X/refs/heads/Nana/123.js

[mitm]
hostname = 101.34.60.156

*************************************/

var hyy = JSON.parse($response.body);
const Hyy666 = typeof $task !== "undefined";

hyy = {
  "data" : [
    {
      "group_id" : 6,
      "group_status" : 6,
      "group_points_month" : 30,
      "group_popedom" : "{\"1\":{\"1\":\"1\",\"2\":\"2\",\"3\":\"3\",\"4\":\"4\",\"5\":\"5\"},\"2\":{\"1\":\"1\",\"2\":\"2\",\"3\":\"3\",\"4\":\"4\",\"5\":\"5\"},\"3\":{\"1\":\"1\",\"2\":\"2\",\"3\":\"3\",\"4\":\"4\",\"5\":\"5\"},\"4\":{\"1\":\"1\",\"2\":\"2\",\"3\":\"3\",\"4\":\"4\",\"5\":\"5\"},\"5\":{\"1\":\"1\",\"2\":\"2\",\"3\":\"3\",\"4\":\"4\",\"5\":\"5\"},\"20\":{\"1\":\"1\",\"2\":\"2\",\"3\":\"3\",\"4\":\"4\",\"5\":\"5\"}}",
      "group_points_free" : 6,
      "group_points_day" : 6,
      "group_points_week" : 6,
      "group_points_year" : 6,
      "group_name" : "永久会员",
      "group_type" : ",1,2,3,4,5,20,"
    }
  ],
  "code" : 200
};
$done({status: Hyy666 ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(hyy)});
