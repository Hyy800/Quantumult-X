const a = () => {
    const b = "0123456789abcdef";
    let c = "001168.";
    for (let i = 0; i < 32; i++) {
        c += b.charAt(Math.floor(Math.random() * b.length));
    }
    return c;
}

const d = async () => {
    const e = 'https://94.74.97.241/api/v1/passport/auth/loginByDeviceId';
    const f = {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'BeesVPN/2 CFNetwork/1568.100.1 Darwin/24.0.0'
    };
    const g = JSON.stringify({ invite_token: "", device_id: a() });

    try {
        const h = await c({
            url: e,
            method: 'POST',
            headers: f,
            body: g
        });
        const i = JSON.parse(h.body);
        return i.data ? i.data.token : null;
    } catch (j) {
        console.log('Login failed.');
        return null;
    }
}

const k = async (l) => {
    const m = `https://94.74.97.241/api/v1/client/appSubscribe?token=${l}`;
    const n = {
        'User-Agent': 'BeesVPN/2 CFNetwork/1568.100.1 Darwin/24.0.0'
    };

    try {
        const o = await c({
            url: m,
            method: 'GET',
            headers: n
        });
        const p = JSON.parse(o.body);
        return p.data.flatMap(q => 
            q.list.map(r => 
                r.url.replace('vless:\\/\\/', 'vless://').replace(/\\/g, '')
            )
        );
    } catch (s) {
        console.log('è·åè®¢éå¤±è´¥.');
        return null;
    }
}

const t = async (u) => {
    try {
        const v = await c({
            url: "https://dpaste.com/api/",
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `expiry_days=3&content=${encodeURIComponent(u)}`
        });
        const w = v.body.trim() + ".txt";
        console.log(`恭喜你获得订阅: ${w}`);
    } catch (x) {
        console.log("ä½ é¿ä¸äºãè·åå¤±è´¥.");
    }
}

const c = (y) => {
    return new Promise((z, aa) => {
        if (typeof $task !== "undefined") {
            $task.fetch(y).then(response => z(response)).catch(err => aa(err));
        } else if (typeof $httpClient !== "undefined") {
            $httpClient[y.method.toLowerCase()](y, (ab, ac, ad) => {
                if (ab) {
                    aa(ab);
                } else {
                    z({ status: ac.statusCode, headers: ac.headers, body: ad });
                }
            });
        } else {
            aa("ä¸æ¯æçèæ¬ç¯å¢");
        }
    });
}

(async () => {
    const ae = await d();
    if (!ae) {
        return $done();
    }
    const af = await k(ae);
    if (!af) {
        return $done();
    }
    const ag = btoa(af.join("\n"));
    await t(ag);
    $done();
})();
