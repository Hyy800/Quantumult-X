import requests
import json
import base64
import pyaes
import re

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

def n():
    o = b'VXH2THdPBsHEp+TY'
    p = b'VXH2THdPBsHEp+TY'
    q = i()
    if not q:
        print("dashabi")
        return
    if 'data' not in q:
        print("dashabi")
        return
    for r in q['data']:
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

    # 使用正则表达式提取排序键（按名称排序）
    def sort_key(link):
        match = re.search(r'#(.+)$', link)
        return match.group(1) if match else ''

    # 按照提取的名称排序
    Hyy.sort(key=sort_key)

    # 写入到文件
    with open('Hyy.txt', 'w') as f:
        for link in Hyy:
            f.write(link + '\n')

if __name__ == "__main__":
    n()