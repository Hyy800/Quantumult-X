// 生成设备 ID 的函数
function generateDeviceId() {
    const prefix = "001168.";
    const randomBytes = Math.random().toString(36).substr(2, 16); // 生成随机的 16 字符字符串
    return `${prefix}${randomBytes}`; // 返回生成的设备 ID
}

// 登录并获取令牌的函数
function loginAndGetToken(loginUrl, deviceId) {
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'BeesVPN/2 CFNetwork/1568.100.1 Darwin/24.0.0',
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
    };

    const payload = {
        "invite_token": "", // 邀请令牌（如果有的话）
        "device_id": deviceId // 使用生成的设备 ID
    };

    return new Promise((resolve, reject) => {
        $http.post(loginUrl, { headers: headers, body: JSON.stringify(payload) }, (error, response, data) => {
            if (error) {
                console.error('Failed to login:', error);
                return reject(null); // 出错返回 null
            }

            const result = JSON.parse(data);
            resolve(result.data.token || null); // 返回令牌
        });
    });
}

// 获取并处理订阅信息的函数
function fetchAndProcessSubscription(subscribeUrl, token) {
    const headers = {
        'Accept': '*/*',
        'User-Agent': 'BeesVPN/2 CFNetwork/1568.100.1 Darwin/24.0.0'
    };

    return new Promise((resolve, reject) => {
        $http.get(`${subscribeUrl}?token=${token}`, { headers: headers }, (error, response, data) => {
            if (error) {
                console.error('Failed to fetch subscription:', error);
                return reject(null); // 出错返回 null
            }

            const result = JSON.parse(data);
            const urls = [];

            // 处理响应数据
            result.data.forEach(item => {
                item.list.forEach(subItem => {
                    const url = subItem.url ? subItem.url.replace('vless:/\\/', 'vless://') : '';
                    if (url) {
                        urls.push(url); // 如果 URL 存在，则添加到数组
                    }
                });
            });
            resolve(urls); // 返回 URL 数组
        });
    });
}

// 主函数
async function main() {
    const apiUrl = 'https://94.74.97.241/api/v1'; // API 基本 URL
    const loginEndpoint = '/passport/auth/loginByDeviceId'; // 登录接口
    const subscribeEndpoint = '/client/appSubscribe'; // 订阅接口

    const deviceId = generateDeviceId(); // 生成设备 ID
    const token = await loginAndGetToken(apiUrl + loginEndpoint, deviceId); // 登录并获取令牌
    if (!token) return; // 如果没有令牌则退出

    const urls = await fetchAndProcessSubscription(apiUrl + subscribeEndpoint, token); // 获取订阅信息
    if (!urls) return; // 如果没有 URL 则退出

    const content = urls.join('\n'); // 将 URLs 连接为字符串
    const encodedContent = Buffer.from(content).toString('base64'); // 将字符串编码为 Base64
    console.log(encodedContent); // 输出 Base64 编码的内容

    $done(); // 结束脚本的执行
}

main(); // 调用主函数