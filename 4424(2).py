
import requests
import json
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.backends import default_backend
import base64
import re
from urllib.parse import quote

url = "https://api.9527.click/v2/node/list"
headers = {
    'Accept': "*/*",
    'Accept-Encoding': "gzip, deflate, br",
    'Connection': "keep-alive",
    'Content-Type': "application/json",
    'Host': "api.9527.click",
    'User-Agent': "International/3.3.35 (iPhone; iOS 16.5; Scale/3.00)",
    'Accept-Language': "zh-Hans-CN;q=1"
}
body = {
    "key": "G8Jxb2YtcONGmQwN7b5odg==",
    "uid": 3648425794742788096,
    "vercode": "1",
    "uuid": "9AB5B4EB-7FFF-4A62-9465-2AC6F5C1509C"
}

def aes_decrypt_with_cryptography(ciphertext: str, key: str, iv: str) -> str:
    ciphertext_bytes = base64.b64decode(ciphertext)
    cipher = Cipher(algorithms.AES(key.encode('utf-8')), modes.CBC(iv.encode('utf-8')), backend=default_backend())
    decryptor = cipher.decryptor()
    padded_data = decryptor.update(ciphertext_bytes) + decryptor.finalize()

    # Unpad the decrypted data
    unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
    decrypted_data = unpadder.update(padded_data) + unpadder.finalize()

    return decrypted_data.decode('utf-8')

def post_to_dpaste(encoded_content):
    try:
        response = requests.post("https://dpaste.com/api/", data={'expiry_days': 3, 'content': encoded_content})
        response.raise_for_status()
        dpaste_url = response.text.strip() + ".txt"
        print(f"恭喜你成功获得订阅: {dpaste_url}")
    except requests.RequestException:
        print("你长丑了、获取失败.")

def alphanumeric_sort_key(s):
    return [int(text) if text.isdigit() else text.lower() for text in re.split('([0-9]+)', s)]

# 执行HTTP请求并处理响应
try:
    response = requests.post(url, headers=headers, json=body)
    response.raise_for_status()  # 检查请求是否成功
    json_response = response.json()

    nodes = json_response.get("data", [])
    
    aes_key = "VXH2THdPBsHEp+TY"
    aes_iv = "VXH2THdPBsHEp+TY"

    node_password = "3648425794742788096"

    trojan_links = []
    for node in nodes:
        encrypted_host = node.get('host', '')
        host = aes_decrypt_with_cryptography(encrypted_host, aes_key, aes_iv)
        
        port = node.get('port', '443')  # 默认使用443端口
        name = node.get('name', 'Unnamed Node')

        # 根据模板生成Trojan链接
        trojan_link = f"trojan://{quote(node_password)}@{host}:{port}#{quote(name)}"

        trojan_links.append((name, trojan_link))

    trojan_links.sort(key=lambda x: alphanumeric_sort_key(x[0]))

    sorted_trojan_links = [link for _, link in trojan_links]

    combined_content = "\n".join(sorted_trojan_links)

    encoded_content = base64.b64encode(combined_content.encode('utf-8')).decode('utf-8')

    post_to_dpaste(encoded_content)

except requests.exceptions.RequestException as e:
    print(f"请求出现错误: {e}")
except json.JSONDecodeError as e:
    print(f"解析JSON时出错: {e}")
except (ValueError, KeyError) as e:
    print(f"解密时出错: {e}")
