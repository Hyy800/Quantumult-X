import requests
import json
import base64
import pyaes
import re
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

a = "c237ec6fe9655305d7b45253f8332c7d"
b = "3696517159397367808"
Hyy = []

def c(d, e, f):
    d = base64.b64decode(d)
    aes = pyaes.AESModeOfOperationCBC(e, iv=f)
    decrypted = b""
    while d:
        decrypted += aes.decrypt(d[:16])
        d = d[16:]
    padding_len = decrypted[-1]
    return decrypted[:-padding_len].decode('utf-8')

def i():
    j = "https://api.9527.click/v2/node/list"
    k = {
        'Host': 'api.9527.click',
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Accept': '*/*',
        'User-Agent': 'International/3.3.35 (iPhone; iOS 16.5; Scale/3.00)',
        'Accept-Language': 'zh-Hans-CN;q=1',
        'Accept-Encoding': 'gzip, deflate, br'
    }
    l = {
        "key": "G8Jxb2YtcONGmQwN7b5odg==",
        "uid": b,
        "vercode": "1",
        "uuid": "B9DB74AE-017A-47DB-BDD7-C24FAC3A8460"
    }
    m = requests.post(j, headers=k, json=l)
    if m.status_code == 200:
        return json.loads(m.text)
    else:
        print(f"fw: {m.status_code}")
        return None

def activate_node(decrypted_host, index):
    new_url = f"https://{decrypted_host}/api/node/v3/user/try"
    new_headers = {
        'Host': decrypted_host,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    new_body = {
        "sign": a,
        "uid": b,
        "type": 1,
        "platform": "1"
    }
    
    response_new = requests.post(new_url, headers=new_headers, json=new_body)
    if response_new.status_code == 200:
        return (index, decrypted_host, True)
    else:
        return (index, decrypted_host, False)

def n():
    start_time = time.time()  # 开始计时

    o = b'VXH2THdPBsHEp+TY'
    p = b'VXH2THdPBsHEp+TY'
    q = i()
    if not q:
        print("dashabi")
        return
    if 'data' not in q:
        print("dashabi")
        return

    successful_responses = 0
    futures = []

    with ThreadPoolExecutor() as executor:
        for index, r in enumerate(q['data'], start=1):
            if 'ip' in r and r['ip']:
                r['ip'] = c(r['ip'], o, p)
            if 'host' in r and r['host']:
                r['host'] = c(r['host'], o, p)
            if 'ov_host' in r and r['ov_host']:
                r['ov_host'] = c(r['ov_host'], o, p)
            s = r.get('host') or r.get('ip')
            t = r.get('name', 'sb')
            u = f"trojan://{b}@{s}:443?allowInsecure=1#{t}"
            Hyy.append(u)

            # 同时发起请求
            if 'host' in r and r['host']:
                decrypted_host = r['host']
                futures.append(executor.submit(activate_node, decrypted_host, index))

        for future in as_completed(futures):
            index, decrypted_host, success = future.result()
            if success:
                print(f"{index}. 激活: {decrypted_host}")
                successful_responses += 1
            else:
                print(f"{index}. 新请求失败，无法激活: {decrypted_host}")

    # 使用正则表达式提取排序键（按名称排序）
    def sort_key(link):
        match = re.search(r'#(.+)$', link)
        return match.group(1) if match else ''

    # 按照提取的名称排序
    Hyy.sort(key=sort_key)

    # 打印已激活的节点数量
    print(f"已激活 {successful_responses} 个节点")

    # 计算并打印脚本运行时间
    end_time = time.time()  # 结束计时
    total_time = end_time - start_time
    minutes, seconds = divmod(total_time, 60)
    print(f"脚本运行时间: {int(minutes)} 分 {int(seconds)} 秒")

if __name__ == "__main__":
    n()