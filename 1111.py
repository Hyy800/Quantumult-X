import requests
import random
import string
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import binascii
import re
import time
from bs4 import BeautifulSoup
from urllib import parse
from urllib.parse import unquote

# 随机生成8位字符串
def uuid_a():
    characters = string.ascii_lowercase + string.digits
    random_string = ''.join(random.choice(characters) for i in range(8))
    return (random_string)

uuid = uuid_a()

# AES加密
def aes_encrypt(key: bytes, iv: bytes, plaintext: str) -> str:
    # 创建 AES 加密器
    cipher = AES.new(key, AES.MODE_CBC, iv)
    
    # 对明文进行填充
    padded_plaintext = pad(plaintext.encode(), AES.block_size)
    
    # 加密数据
    ciphertext = cipher.encrypt(padded_plaintext)
    
    # 返回十六进制编码的密文
    return binascii.hexlify(ciphertext).decode().upper() # 强制大写字母

# 转换密钥和 IV
key_text = "rwb6c4e7fz$6el%0"
iv_text = "z1b6c3t4e5f6k7w8"

# 转换为字节
key_bytes = key_text.encode('utf-8')
iv_bytes = iv_text.encode('utf-8')

# 创建会话以确保连接保持打开状态
session = requests.Session()

# 自定义请求头
headers = {
    'User-Agent': 'Octopus_Android',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip',
    'Content-Type': 'application/x-www-form-urlencoded'
}

# URL 和参数
url = "https://app.bazhuayujiasu.cc:18001/netbarcloud/vpn/octopusRegister.do"
params = {
    'phoneNumber': uuid,
    'password': '123456',
    'checkPassword': '123456',
    'id': '982228',
    'clientIp': '192.168.31.102',
    'from': '5'
}

# 发送 POST 请求
token = session.post(url, headers=headers, params=params).json().get("userid")


# 定义 URL 和参数
url2 = "https://app.bazhuayujiasu.cc:18001/netbarcloud/vpn/phLogin.do"

# 设置请求参数
params2 = {
    'phoneNumber': aes_encrypt(key_bytes, iv_bytes, uuid),
    'password': '255A42F2A6863798DBB392033F9D2FD7',
    'osType': 'android'
}

# 设置请求头
headers2 = {
    'User-Agent': 'Octopus_Android',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip'
}

# 发送 POST 请求
response3 = requests.post(url2, headers=headers2, params=params2)
phToken  = response3.json().get("data").get("phToken")
token = response3.json().get("data").get("vpnToken")

# 定义URL和参数
url3 = "https://app.bazhuayujiasu.cc:18001/netbarcloud/vpn/airportNode.do"

# 设置请求参数
params3 = {
    'phToken': phToken,
    'phoneNumber': uuid
}

# 设置请求头
headers3 = {
    'User-Agent': 'Octopus_Android',
    'token': token,
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip'
}

# 发送 POST 请求
porxy_url = requests.post(url3, headers=headers3, params=params3).json().get("data").replace("\\", "")

# 输出响应内容
print(porxy_url)



# 定义 URL 和参数
url = "https://www.otcopusapp.cc/lx3af288h5i8pz380/api/v1/client/subscribe"
params = {
    'token': '1d045ac3eba05ddc55477f1634625683'
}

# 设置请求头
headers4 = {
    'User-Agent': 'ClashforWindows/0.19.23',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip'
}
# 发送 GET 请求
response = requests.get(porxy_url, headers=headers4)


# 解析返回头参数
subscription_userinfo = response.headers.get('subscription-userinfo')
if subscription_userinfo:
    pass
else:
    print("没有找到 subscription-userinfo 头部信息。")
subscription_info = subscription_userinfo

# 将字符串按分号分隔，然后处理每个键值对
info_dict = {}
for item in subscription_info.split(';'):
    key, value = item.strip().split('=')
    info_dict[key] = value

# 转换字典中的字符串值为整数
info_dict['upload'] = int(info_dict['upload'])
info_dict['download'] = int(info_dict['download'])
info_dict['total'] = int(info_dict['total'])
info_dict['expire'] = int(info_dict['expire'])

# 将 upload 和 download 从字节转换为吉字节
info_dict['upload_GB'] = info_dict['upload'] / (1024 ** 3)
info_dict['download_GB'] = info_dict['download'] / (1024 ** 3)
info_dict['total_GB'] = info_dict['total'] / (1024 ** 3)

# 输出转换结果
print("\n影猫(八爪鱼)")
print(f"上传流量: {info_dict['upload_GB']:.2f} GB")
print(f"下载流量: {info_dict['download_GB']:.2f} GB")
print(f"总流量: {info_dict['total_GB']:.2f} GB")

# 计算剩余流量（假设总流量为 total，已用流量为 upload + download）
remaining_traffic_GB = (info_dict['total'] - (info_dict['upload'] + info_dict['download'])) / (1024 ** 3)
print(f"剩余流量: {remaining_traffic_GB:.2f} GB")

# 计算过期时间
import datetime
expire_time = datetime.datetime.fromtimestamp(info_dict['expire'])
print("过期时间:", expire_time.strftime('%Y-%m-%d %H:%M:%S'))
