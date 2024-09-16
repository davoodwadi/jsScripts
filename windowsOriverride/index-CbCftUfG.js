const __vite__fileDeps = ["./pageSignIn-Bn6SKYNF.js", "./putPreloader-YG6jLs1E.js", "./page-NWzulROZ.js", "./countryInputField-Dm2t4SUk.js", "./button-DUmZNV0E.js", "./wrapEmojiText-CZyOyt8f.js", "./scrollable-C20Fr3mN.js", "./pageSignQR-CySVYV_Q.js", "./textToSvgURL-Cnw_Q8Rw.js", "./pageAuthCode-D0FL5KCv.js", "./codeInputField-4BUMrXlT.js", "./pagePassword-BpefiXlr.js", "./htmlToSpan-D4DA0RUe.js", "./loginPage-Dy4Z1LP4.js", "./pageSignUp-B7-bzav6.js", "./avatar-QMf5nvPE.js", "./pageSignImport-CVn6FnkS.js", "./pageIm-BuomoSv_.js"]
  , __vite__mapDeps = i=>i.map(i=>__vite__fileDeps[i]);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver(r=>{
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity),
        r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const i = s(r);
        fetch(r.href, i)
    }
}
)();
const Dr = "modulepreload"
  , pr = function(t, e) {
    return new URL(t,e).href
}
  , Ts = {}
  , V = function(e, s, n) {
    let r = Promise.resolve();
    if (s && s.length > 0) {
        const i = document.getElementsByTagName("link")
          , o = document.querySelector("meta[property=csp-nonce]")
          , c = o?.nonce || o?.getAttribute("nonce");
        r = Promise.all(s.map(a=>{
            if (a = pr(a, n),
            a in Ts)
                return;
            Ts[a] = !0;
            const u = a.endsWith(".css")
              , l = u ? '[rel="stylesheet"]' : "";
            if (!!n)
                for (let g = i.length - 1; g >= 0; g--) {
                    const E = i[g];
                    if (E.href === a && (!u || E.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${a}"]${l}`))
                return;
            const f = document.createElement("link");
            if (f.rel = u ? "stylesheet" : Dr,
            u || (f.as = "script",
            f.crossOrigin = ""),
            f.href = a,
            c && f.setAttribute("nonce", c),
            document.head.appendChild(f),
            u)
                return new Promise((g,E)=>{
                    f.addEventListener("load", g),
                    f.addEventListener("error", ()=>E(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    return r.then(()=>e()).catch(i=>{
        const o = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (o.payload = i,
        window.dispatchEvent(o),
        !o.defaultPrevented)
            throw i
    }
    )
}
  , Ms = ["web.telegram.org", "webk.telegram.org"]
  , Pa = "pattern"
  , Ls = Math.min(4, navigator.hardwareConcurrency ?? 4)
  , x = {
    id: 1025907,
    hash: "452b0359b988148995f22ff0f4229750",
    version: "2.1.0",
    versionFull: "2.1.0 (520)",
    build: 520,
    langPackVersion: "5.5.8",
    langPack: "webk",
    langPackCode: "en",
    domains: Ms,
    baseDcId: 2,
    isMainDomain: Ms.includes(location.hostname),
    suffix: "K",
    threads: Ls,
    cryptoWorkers: Ls
};
x.isMainDomain && (x.id = 2496,
x.hash = "8da85b0d5bfe62527e5b244c209159c3");
function sn() {
    return document.activeElement?.blur ? (document.activeElement.blur(),
    !0) : !1
}
function zt(t) {
    if (t || (t = window.event),
    t) {
        t = t.originalEvent || t;
        try {
            t.stopPropagation && t.stopPropagation(),
            t.preventDefault && t.preventDefault(),
            t.returnValue = !1,
            t.cancelBubble = !0
        } catch {}
    }
    return !1
}
const ge = "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch
  , Ds = typeof window < "u" ? window : self
  , xe = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
  , Kt = true
  , nn = false
  , rn = false
  , on = undefined
  , Te = true
  , J = true
  , Me = false
  , ze = J && Te
  , ie = true
  , Er = Object.freeze(Object.defineProperty({
    __proto__: null,
    CHROMIUM_VERSION: on,
    IS_ANDROID: nn,
    IS_APPLE: Kt,
    IS_APPLE_MOBILE: Te,
    IS_CHROMIUM: rn,
    IS_FIREFOX: Me,
    IS_MOBILE: ie,
    IS_MOBILE_SAFARI: ze,
    IS_SAFARI: J,
    USER_AGENT: xe
}, Symbol.toStringTag, {
    value: "Module"
}));
function Fr(t, e) {
    return t.closest("." + e)
}
let Ie;
function qt(t) {
    Ie ? Ie.push(t) : (Ie = [t],
    requestAnimationFrame(()=>{
        const e = Ie;
        Ie = void 0,
        e.forEach(s=>s())
    }
    ))
}
let ye, Lt = !1;
function ka(t) {
    ye ? Lt ? t() : ye.push(t) : (ye = [t],
    requestAnimationFrame(()=>{
        Lt = !0;
        for (let e = 0; e < ye.length; ++e)
            ye[e]();
        ye = void 0,
        Lt = !1
    }
    ))
}
let Se;
function Ta() {
    return Se || (Se = new Promise(t=>qt(()=>t())),
    Se.then(()=>{
        Se = void 0
    }
    ),
    Se)
}
function vr() {
    return new Promise(t=>{
        qt(()=>{
            qt(t)
        }
        )
    }
    )
}
function Is(t) {
    t.style.transform = "translateY(-99999px)",
    t.focus(),
    vr().then(()=>{
        t.style.transform = ""
    }
    )
}
const ut = J && ie && ge && !1;
if (ut) {
    const t = "clientY";
    let e = 0;
    const s = {
        capture: !0,
        passive: !1
    }
      , n = i=>{
        const o = i.touches[0]
          , c = Fr(o.target, "scrollable-y");
        if (c) {
            const a = o[t]
              , u = e - a
              , l = c.scrollTop
              , h = c.scrollHeight
              , f = c.clientHeight
              , g = l ? Math.round(l + c.clientHeight + u) : l + u;
            (h === f || g >= h || g <= 0) && i.preventDefault()
        } else
            i.preventDefault()
    }
    ;
    let r = 0;
    document.addEventListener("focusin", i=>{
        !i.target.classList.contains("is-sticky-input-bugged") || i.timeStamp - r < 50 || (Is(i.target),
        document.addEventListener("touchmove", n, s),
        document.addEventListener("touchstart", o=>{
            if (o.touches.length > 1)
                return;
            e = o.touches[0][t]
        }
        ))
    }
    , {
        passive: !0
    }),
    document.addEventListener("focusout", i=>{
        document.removeEventListener("touchmove", n, s),
        r = i.timeStamp
    }
    , {
        passive: !0
    }),
    document.addEventListener("visibilitychange", ()=>{
        document.activeElement && document.activeElement.classList.contains("is-sticky-input-bugged") && document.activeElement.blur && Is(document.activeElement)
    }
    , {
        passive: !0
    })
}
function Ma(t) {
    ut && t.classList.add("is-sticky-input-bugged")
}
const an = "Roboto"
  , Ar = an + ', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
  , yr = "16px"
  , Sr = "400"
  , La = `${Sr} ${yr} ${Ar}`;
function lt() {}
function ps(t) {
    return new Promise(e=>{
        setTimeout(e, t)
    }
    )
}
const cn = "tgico";
function Ia(t) {
    return cn + "-" + t
}
const It = ["b", "б"]
  , Ot = {}
  , br = {
    text: an,
    icons: cn,
    monospace: "Roboto Mono"
};
function wr(t={
    text: It,
    icons: void 0,
    monospace: It
}) {
    if (!("fonts"in document))
        return Promise.resolve();
    const e = [];
    for (const s in t) {
        let n = t[s];
        n === "all" && (n = It);
        const r = br[s]
          , i = s === "icons" ? [500] : [400, 500];
        for (const o of i) {
            const c = (n || [void 0]).map(a=>{
                var h, f;
                const u = [o, "1rem", r].join(" ");
                return (h = Ot[u] ?? (Ot[u] = {}))[f = a || ""] ?? (h[f] = document.fonts.load(u, a))
            }
            );
            e.push(...c)
        }
    }
    return Promise.race([Promise.all(e).catch(lt), ps(1e3)])
}
const Jt = true;
function un(t) {
    return t instanceof URL || (t = new URL(t + "",location.href)),
    location.search && t.protocol !== "blob:" && new URLSearchParams(location.search).forEach((s,n)=>{
        t.searchParams.set(n, s)
    }
    ),
    t.searchParams.delete("swfix"),
    t
}
function Cr() {
    const t = {
        construct(e, s) {
            return s[0] = un(s[0]),
            new e(...s)
        }
    };
    [Worker, typeof SharedWorker < "u" && SharedWorker].filter(Boolean).forEach(e=>{
        window[e.name] = new Proxy(e,t)
    }
    )
}
Cr();
function _r() {
    Element.prototype.toggleAttribute || (Element.prototype.toggleAttribute = function(t, e) {
        return e !== void 0 && (e = !!e),
        this.hasAttribute(t) ? e ? !0 : (this.removeAttribute(t),
        !1) : e === !1 ? !1 : (this.setAttribute(t, ""),
        !0)
    }
    )
}
const ln = 0
  , Oa = 1271266957
  , Ra = 777
  , Ba = 2666e3
  , xa = 777e3
  , Na = 2147483647
  , Ua = ""
  , Wa = 20 * 1024 * 1024
  , Pr = ""
  , ja = [7322096, 16766590, 13338331, 9367192, 16749490, 16478047]
  , Va = "default_static"
  , ht = 4294967296
  , Ga = ht + 1
  , Ya = !1
  , kr = new Set(["web", "k", "z", "a"])
  , Ha = 2147483646
  , $a = new Set(["image/jpeg", "image/png", "image/bmp", "image/gif"])
  , za = "XTR"
  , Tr = 0
  , Mr = 1
  , Lr = new Set([Tr, Mr]);
Math.max(...Array.from(Lr)) + 1;
const Ka = !1;
class Fe {
    constructor(e) {
        this._constructor(e)
    }
    _constructor(e) {
        this.reuseResults = e,
        this.listeners = {},
        this.listenerResults = {}
    }
    addEventListener(e, s, n) {
        var i;
        const r = {
            callback: s,
            options: n
        };
        if (((i = this.listeners)[e] ?? (i[e] = new Set)).add(r),
        this.listenerResults.hasOwnProperty(e) && (s(...this.listenerResults[e]),
        n?.once)) {
            this.listeners[e].delete(r);
            return
        }
    }
    addMultipleEventsListeners(e) {
        for (const s in e)
            this.addEventListener(s, e[s])
    }
    removeEventListener(e, s, n) {
        if (this.listeners[e]) {
            for (const r of this.listeners[e])
                if (r.callback === s) {
                    this.listeners[e].delete(r);
                    break
                }
        }
    }
    invokeListenerCallback(e, s, ...n) {
        let r, i;
        try {
            r = s.callback(...n)
        } catch (o) {
            i = o
        }
        if (s.options?.once && this.removeEventListener(e, s.callback),
        i)
            throw i;
        return r
    }
    _dispatchEvent(e, s, ...n) {
        this.reuseResults && (this.listenerResults[e] = n);
        const r = s && []
          , i = this.listeners[e];
        if (i)
            for (const o of i) {
                const c = this.invokeListenerCallback(e, o, ...n);
                r && r.push(c)
            }
        return r
    }
    dispatchResultableEvent(e, ...s) {
        return this._dispatchEvent(e, !0, ...s)
    }
    dispatchEvent(e, ...s) {
        this._dispatchEvent(e, !1, ...s)
    }
    cleanup() {
        this.listeners = {},
        this.listenerResults = {}
    }
}
const H = {
    test: location.search.indexOf("test=1") > 0,
    debug: location.search.indexOf("debug=1") > 0,
    http: !1,
    ssl: !0,
    asServiceWorker: !1,
    transport: "websocket",
    noSharedWorker: location.search.indexOf("noSharedWorker=1") > 0,
    multipleTransports: !0
};
(H.http = location.search.indexOf("http=1") > 0) && (H.multipleTransports = !1);
H.multipleTransports && (H.http = !0);
H.http && (H.transport = "https");
const Ir = !1
  , De = H.debug
  , Or = typeof window < "u" ? window : self
  , _ = Or
  , hn = Date.now() % Math.random() * 1e8 | 0;
function rt(t, e) {
    const s = t.indexOf(e);
    return (s === -1 ? void 0 : t.splice(s, 1))?.[0]
}
const Ke = typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope
  , bt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && !Ke
  , pe = bt || Ke
  , Rr = ()=>self.clients.matchAll({
    includeUncontrolled: !1,
    type: "window"
})
  , dn = (t,...e)=>{
    try {
        t.postMessage(...e)
    } catch (s) {
        console.error("[worker] postMessage error:", s, e)
    }
}
  , fn = (t,...e)=>{
    Rr().then(s=>{
        s.length && s.slice(t ? 0 : -1).forEach(n=>{
            dn(n, ...e)
        }
        )
    }
    )
}
  , gn = (...t)=>{
    dn(self, ...t)
}
  , mn = ()=>{}
;
Ke && fn.bind(null, !1);
Ke && fn.bind(null, !0);
const Rt = {};
function me(t) {
    return Rt[t] ?? (Rt[t] = {
        type: t
    })
}
const Br = Date.now();
function dt() {
    return "[" + ((Date.now() - Br) / 1e3).toFixed(3) + "]"
}
var Es = (t=>(t[t.None = 0] = "None",
t[t.Error = 1] = "Error",
t[t.Warn = 2] = "Warn",
t[t.Log = 4] = "Log",
t[t.Debug = 8] = "Debug",
t))(Es || {});
const xr = [0, 1, 2, 4, 8]
  , Nr = J || Me
  , Os = !Nr
  , Bt = {
    reset: "\x1B[0m",
    bright: "\x1B[1m",
    dim: "\x1B[2m",
    underscore: "\x1B[4m",
    blink: "\x1B[5m",
    reverse: "\x1B[7m",
    hidden: "\x1B[8m",
    fg: {
        black: "\x1B[30m",
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m",
        blue: "\x1B[34m",
        magenta: "\x1B[35m",
        cyan: "\x1B[36m",
        white: "\x1B[37m"
    },
    bg: {
        black: "\x1B[40m",
        red: "\x1B[41m",
        green: "\x1B[42m",
        yellow: "\x1B[43m",
        blue: "\x1B[44m",
        magenta: "\x1B[45m",
        cyan: "\x1B[46m",
        white: "\x1B[47m"
    }
}
  , Ur = [["debug", 8], ["info", 4], ["warn", 2], ["error", 1], ["assert", 1], ["trace", 4], ["group", 4], ["groupCollapsed", 4], ["groupEnd", 4]];
function Q(t, e=7, s=!1, n="") {
    let r;
    !De && !s && (e = 1),
    Os ? n || (Ke ? n = Bt.fg.yellow : bt && (n = Bt.fg.cyan)) : n = "";
    const i = n;
    n ? n = `%s ${n}%s` : n = "%s";
    const o = function(...a) {
        return e & 4 && console.log(n, dt(), t, ...a)
    };
    Ur.forEach(([a,u])=>{
        o[a] = function(...l) {
            return e & u && console[a](n, dt(), t, ...l)
        }
    }
    ),
    o.setPrefix = function(a) {
        r = a,
        t = "[" + a + "]"
    }
    ,
    o.setPrefix(t),
    o.setLevel = function(a) {
        e = xr.slice(0, a + 1).reduce((u,l)=>u | l, 0)
    }
    ;
    const c = {};
    return o.bindPrefix = function(a, u=e) {
        return c[a] ?? (c[a] = Q(`${r}] ${Os && i ? Bt.reset : ""}[${a}`, u, s, i))
    }
    ,
    o
}
const Wr = !0;
class Fs extends Fe {
    constructor(e) {
        super(!1),
        this.logSuffix = e,
        this.onMessage = s=>{
            const n = s.data
              , r = s.source || s.currentTarget;
            this.processTaskMap[n.type](n, r, s)
        }
        ,
        this.processResultTask = s=>{
            const {taskId: n, result: r, error: i} = s.payload
              , o = this.awaiting[n];
            o && (this.debug && this.log.debug("done", o.taskType, r, i),
            "error"in s.payload ? o.reject(i) : o.resolve(r),
            delete this.awaiting[n])
        }
        ,
        this.processAckTask = s=>{
            const n = s.payload
              , r = this.awaiting[n.taskId];
            if (!r)
                return;
            const i = r.resolve
              , o = {
                cached: n.cached,
                result: n.cached ? "result"in n ? Promise.resolve(n.result) : Promise.reject(n.error) : new Promise((c,a)=>{
                    r.resolve = c,
                    r.reject = a
                }
                )
            };
            i(o),
            n.cached && delete this.awaiting[n.taskId]
        }
        ,
        this.processPingTask = (s,n,r)=>{
            this.pushTask(this.createTask("pong", void 0), r.source)
        }
        ,
        this.processPongTask = (s,n,r)=>{
            const i = this.pingResolves.get(n);
            i && (this.pingResolves.delete(n),
            i())
        }
        ,
        this.processCloseTask = (s,n,r)=>{
            this.detachPort(n)
        }
        ,
        this.processBatchTask = (s,n,r)=>{
            const i = {
                data: r.data,
                source: r.source,
                currentTarget: r.currentTarget
            };
            s.payload.forEach(o=>{
                i.data = o,
                this.onMessage(i)
            }
            )
        }
        ,
        this.processLockTask = (s,n,r)=>{
            const i = s.payload;
            this.requestedLocks.has(i) || (this.requestedLocks.set(i, n),
            navigator.locks.request(i, ()=>{
                this.processCloseTask(void 0, n, void 0),
                this.requestedLocks.delete(i)
            }
            ))
        }
        ,
        this.processInvokeTask = async(s,n,r)=>{
            const i = s.id
              , o = s.payload;
            let c, a, u;
            o.void || (c = {
                taskId: i
            },
            a = this.createTask("result", c)),
            o.withAck && (u = this.createTask("ack", {
                taskId: i,
                cached: !0
            }));
            let l;
            try {
                const h = this.listeners[o.type];
                if (!h?.size)
                    throw new Error("no listener");
                const f = h.values().next().value;
                let g = this.invokeListenerCallback(o.type, f, o.payload, n, r);
                if (o.void)
                    return;
                if (l = g instanceof Promise,
                u) {
                    const E = !l;
                    if (u.payload.cached = E,
                    E && (u.payload.result = g),
                    this.pushTask(u, n),
                    E)
                        return
                }
                l && (g = await g),
                c.result = g
            } catch (h) {
                if (this.log.error("worker task error:", h, s),
                o.void)
                    return;
                if (u && u.payload.cached) {
                    u.payload.error = h,
                    this.pushTask(u, n);
                    return
                }
                c.error = h
            }
            this.pushTask(a, n)
        }
        ,
        this.listenPorts = [],
        this.sendPorts = [],
        this.pingResolves = new Map,
        this.taskId = 0,
        this.awaiting = {},
        this.pending = new Map,
        this.log = Q("MP" + (e ? "-" + e : "")),
        this.debug = De,
        this.heldLocks = new Map,
        this.requestedLocks = new Map,
        this.processTaskMap = {
            result: this.processResultTask,
            ack: this.processAckTask,
            invoke: this.processInvokeTask,
            ping: this.processPingTask,
            pong: this.processPongTask,
            close: this.processCloseTask,
            lock: this.processLockTask,
            batch: this.processBatchTask
        }
    }
    setOnPortDisconnect(e) {
        this.onPortDisconnect = e
    }
    attachPort(e) {
        this.attachListenPort(e),
        this.attachSendPort(e)
    }
    attachListenPort(e) {
        this.listenPorts.push(e),
        e.addEventListener("message", this.onMessage)
    }
    attachSendPort(e) {
        if (this.log.warn("attaching send port"),
        e.start?.(),
        this.sendPorts.push(e),
        typeof window < "u" && Wr)
            if ("locks"in navigator) {
                const s = ["lock", hn, this.logSuffix || "", Math.random() * 2147483647 | 0].join("-");
                this.log.warn("created lock", s);
                const n = new Promise(r=>this.heldLocks.set(e, {
                    resolve: r,
                    id: s
                })).then(()=>this.heldLocks.delete(e));
                navigator.locks.request(s, ()=>(this.resendLockTask(e),
                n))
            } else
                window.addEventListener("beforeunload", ()=>{
                    const s = this.createTask("close", void 0);
                    this.postMessage(void 0, s)
                }
                );
        this.releasePending()
    }
    resendLockTask(e) {
        const s = this.heldLocks.get(e);
        s && this.pushTask(this.createTask("lock", s.id), e)
    }
    detachPort(e) {
        this.log.warn("disconnecting port"),
        rt(this.listenPorts, e),
        rt(this.sendPorts, e),
        e.removeEventListener?.("message", this.onMessage),
        e.close?.(),
        this.onPortDisconnect?.(e),
        this.heldLocks.get(e)?.resolve();
        const n = me("PORT_DISCONNECTED");
        for (const r in this.awaiting) {
            const i = this.awaiting[r];
            i.port === e && (i.reject(n),
            delete this.awaiting[r])
        }
    }
    postMessage(e, s) {
        (Array.isArray(e) ? e : e ? [e] : this.sendPorts).forEach(r=>{
            r.postMessage(s, s.transfer)
        }
        )
    }
    async releasePending() {
        this.releasingPending || (this.releasingPending = !0,
        await Promise.resolve(),
        this.debug && this.log.debug("releasing tasks, length:", this.pending.size),
        this.pending.forEach((e,s)=>{
            let n = e;
            {
                let i;
                n = [],
                e.forEach(o=>{
                    o.transfer ? (i = void 0,
                    n.push(o)) : (i || (i = this.createTask("batch", []),
                    n.push(i)),
                    i.payload.push(o))
                }
                )
            }
            const r = s ? [s] : this.sendPorts;
            r.length && (n.forEach(i=>{
                try {
                    this.postMessage(r, i)
                } catch (o) {
                    this.log.error("postMessage error:", o, i, r)
                }
            }
            ),
            this.pending.delete(s))
        }
        ),
        this.debug && this.log.debug("released tasks"),
        this.releasingPending = !1)
    }
    createTask(e, s, n) {
        return {
            type: e,
            payload: s,
            id: this.taskId++,
            transfer: n
        }
    }
    createInvokeTask(e, s, n, r, i) {
        return this.createTask("invoke", {
            type: e,
            payload: s,
            withAck: n,
            void: r
        }, i)
    }
    pushTask(e, s) {
        let n = this.pending.get(s);
        n || this.pending.set(s, n = []),
        n.push(e),
        this.releasePending()
    }
    invokeVoid(e, s, n, r) {
        const i = this.createInvokeTask(e, s, void 0, !0, r);
        this.pushTask(i, n)
    }
    invoke(e, s, n, r, i) {
        this.debug && this.log.debug("start", e, s);
        let o;
        const c = new Promise((a,u)=>{
            o = this.createInvokeTask(e, s, n, void 0, i),
            this.awaiting[o.id] = {
                resolve: a,
                reject: u,
                taskType: e,
                port: r
            },
            this.pushTask(o, r)
        }
        );
        if (pe) {
            c.finally(()=>{
                clearInterval(a)
            }
            );
            const a = Ds.setInterval(()=>{
                this.log.error("task still has no result", o, r)
            }
            , 6e4)
        }
        return c
    }
    invokeExceptSource(e, s, n) {
        const r = this.sendPorts.slice();
        rt(r, n),
        r.forEach(i=>{
            this.invokeVoid(e, s, i)
        }
        )
    }
}
class qe extends Fs {
    constructor() {
        super("MTPROTO"),
        qe.INSTANCE = this,
        _ && (_.mtprotoMessagePort = this)
    }
    static getInstance() {
        return this.INSTANCE
    }
}
class jr extends Fe {
    constructor() {
        super(),
        this.myId = ln,
        this.connectionStatus = {},
        this.premium = !1,
        this.addEventListener("user_auth", ({id: e})=>{
            this.myId = e.toPeerId()
        }
        ),
        this.addEventListener("premium_toggle_private", ({isNew: e, isPremium: s})=>{
            this.premium = s,
            e || this.dispatchEventSingle("premium_toggle", s)
        }
        ),
        this.addEventListener("connection_status_change", e=>{
            this.connectionStatus[e.name] = e
        }
        ),
        this.dispatchEvent = (e,...s)=>{
            super.dispatchEvent(e, ...s),
            qe.getInstance().invokeVoid("event", {
                name: e,
                args: s
            })
        }
        ,
        pe || this.addEventListener("settings_updated", ({settings: e})=>{
            this.settings = e
        }
        )
    }
    getConnectionStatus() {
        return this.connectionStatus
    }
    getPremium() {
        return this.premium
    }
    dispatchEventSingle(...e) {
        super.dispatchEvent(...e)
    }
}
const S = new jr;
_.rootScope = S;
const Vr = {
    isFulfilled: !1,
    isRejected: !1,
    notify: ()=>{}
    ,
    notifyAll: function(...t) {
        this.lastNotify = t,
        this.listeners?.forEach(e=>e(...t))
    },
    addNotifyListener: function(t) {
        this.lastNotify && t(...this.lastNotify),
        (this.listeners ?? (this.listeners = [])).push(t)
    },
    resolve: function(t) {
        this.isFulfilled || this.isRejected || (this.isFulfilled = !0,
        this._resolve(t),
        this.onFinish())
    },
    reject: function(...t) {
        this.isRejected || this.isFulfilled || (this.isRejected = !0,
        this._reject(...t),
        this.onFinish())
    },
    onFinish: function() {
        this.notify = this.notifyAll = this.lastNotify = null,
        this.listeners && (this.listeners.length = 0),
        this.cancel && (this.cancel = lt)
    }
};
function se() {
    let t, e;
    const s = new Promise((n,r)=>{
        t = n,
        e = r
    }
    );
    return Object.assign(s, Vr),
    s._resolve = t,
    s._reject = e,
    s
}
function qa(t, e) {
    t.then(e.resolve.bind(e), e.reject.bind(e))
}
self.deferredPromise = se;
function xt(t, e, s=!0) {
    let n = null, r, i;
    const o = ()=>{
        clearInterval(n),
        n = null
    }
      , c = (...a)=>{
        r = !0,
        i = a,
        n || (s && (r = !1,
        t(...i)),
        n = setInterval(()=>{
            if (!r) {
                o();
                return
            }
            r = !1,
            t(...i)
        }
        , e))
    }
    ;
    return c.clear = o,
    c
}
function Xt(t, e) {
    if (e)
        for (const s in e)
            e[s] !== void 0 && (t[s] = e[s]);
    return t
}
const je = class je {
    constructor(e) {
        Xt(this, e),
        H.test && (this.name += "_test"),
        this.storageIsAvailable = !0,
        this.log = Q(["IDB", e.name].join("-")),
        this.log("constructor"),
        this.openDatabase(!0),
        je.INSTANCES.push(this)
    }
    isAvailable() {
        return this.storageIsAvailable
    }
    openDatabase(e=!1) {
        if (this.openDbPromise && !e)
            return this.openDbPromise;
        const s = (o,c)=>{
            const a = Array.from(o.indexNames);
            for (const u of a)
                o.deleteIndex(u);
            if (c.indexes?.length)
                for (const u of c.indexes)
                    o.indexNames.contains(u.indexName) || o.createIndex(u.indexName, u.keyPath, u.objectParameters)
        }
          , n = (o,c)=>{
            const a = o.createObjectStore(c.name);
            s(a, c)
        }
        ;
        try {
            var r = indexedDB.open(this.name, this.version);
            if (!r)
                return Promise.reject()
        } catch (o) {
            return this.log.error("error opening db", o.message),
            this.storageIsAvailable = !1,
            Promise.reject(o)
        }
        let i = !1;
        return setTimeout(()=>{
            i || r.onerror(me("IDB_CREATE_TIMEOUT"))
        }
        , 3e3),
        this.openDbPromise = new Promise((o,c)=>{
            r.onsuccess = a=>{
                i = !0;
                const u = r.result;
                let l = !1;
                this.log("Opened"),
                u.onerror = h=>{
                    this.storageIsAvailable = !1,
                    this.log.error("Error creating/accessing IndexedDB database", h),
                    c(h)
                }
                ,
                u.onclose = h=>{
                    this.log.error("closed:", h),
                    !l && this.openDatabase()
                }
                ,
                u.onabort = h=>{
                    this.log.error("abort:", h);
                    const f = h.target;
                    this.openDatabase(l = !0),
                    f.onerror && f.onerror(h),
                    u.close()
                }
                ,
                u.onversionchange = h=>{
                    this.log.error("onversionchange, lol?")
                }
                ,
                o(this.db = u)
            }
            ,
            r.onerror = a=>{
                i = !0,
                this.storageIsAvailable = !1,
                this.log.error("Error creating/accessing IndexedDB database", a),
                c(a)
            }
            ,
            r.onupgradeneeded = a=>{
                i = !0,
                this.log.warn("performing idb upgrade from", a.oldVersion, "to", a.newVersion);
                const u = a.target
                  , l = u.result;
                this.stores.forEach(h=>{
                    if (!l.objectStoreNames.contains(h.name))
                        n(l, h);
                    else {
                        const g = u.transaction.objectStore(h.name);
                        s(g, h)
                    }
                }
                )
            }
        }
        )
    }
    static create(e) {
        return this.INSTANCES.find(s=>s.name === e.name) ?? new je(e)
    }
    static closeDatabases(e) {
        this.INSTANCES.forEach(s=>{
            if (e && e === s)
                return;
            const n = s.db;
            n && (n.onclose = ()=>{}
            ,
            n.close())
        }
        )
    }
}
;
je.INSTANCES = [];
let Zt = je;
class Gr {
    constructor(e, s) {
        this.storeName = s,
        this.log = Q(["IDB", e.name, s].join("-")),
        this.idb = Zt.create(e)
    }
    delete(e, s) {
        const n = Array.isArray(e);
        return n || (e = [].concat(e)),
        this.getObjectStore("readwrite", r=>{
            const i = e.map(o=>r.delete(o));
            return n ? i : i[0]
        }
        , "", s)
    }
    clear(e) {
        return this.getObjectStore("readwrite", s=>s.clear(), "", e)
    }
    save(e, s, n) {
        const r = Array.isArray(e);
        return r || (e = [].concat(e),
        s = [].concat(s)),
        this.getObjectStore("readwrite", i=>{
            const o = e.map((c,a)=>i.put(s[a], c));
            return r ? o : o[0]
        }
        , "", n)
    }
    get(e, s) {
        const n = Array.isArray(e);
        if (n) {
            if (!e.length)
                return Promise.resolve([])
        } else {
            if (!e)
                return;
            e = [].concat(e)
        }
        return this.getObjectStore("readonly", r=>{
            const i = e.map(o=>r.get(o));
            return n ? i : i[0]
        }
        , "", s)
    }
    getObjectStore(e, s, n, r=this.storeName) {
        let i;
        return n && (i = performance.now(),
        this.log(n + ": start")),
        this.idb.openDatabase().then(o=>new Promise((c,a)=>{
            const u = o.transaction([r], e, {
                durability: "relaxed"
            })
              , l = ()=>{
                clearTimeout(g),
                a(u.error)
            }
              , h = ()=>{
                clearTimeout(g),
                n && this.log(n + ": end", performance.now() - i);
                const k = D.map(T=>T.result);
                c(C ? k : k[0])
            }
            ;
            u.onerror = l;
            const f = e === "readwrite";
            f && (u.oncomplete = ()=>h());
            const g = setTimeout(()=>{
                this.log.error("transaction not finished", u, n)
            }
            , 1e4)
              , E = s(u.objectStore(r))
              , C = Array.isArray(E)
              , D = C ? E : [].concat(E);
            if (f)
                return;
            const F = D.length;
            let b = F;
            const P = ()=>{
                u.error || --b || h()
            }
            ;
            for (let k = 0; k < F; ++k) {
                const T = D[k];
                T.onerror = l,
                T.onsuccess = P
            }
        }
        ))
    }
    getAll(e) {
        return this.getObjectStore("readonly", s=>s.getAll(), "", e)
    }
}
function Rs() {}
const Nt = 16
  , we = class we {
    constructor(e, s) {
        this.db = e,
        this.storeName = s,
        this.cache = {},
        this.getPromises = new Map,
        this.keysToSet = new Set,
        this.saveDeferred = se(),
        this.keysToDelete = new Set,
        this.deleteDeferred = se(),
        this.storage = new Gr(e,s),
        we.STORAGES.length ? this.useStorage = we.STORAGES[0].useStorage : this.useStorage = !0,
        this.savingFreezed = !1,
        we.STORAGES.push(this),
        this.saveThrottled = xt(async()=>{
            const n = this.saveDeferred;
            this.saveDeferred = se();
            const r = this.keysToSet;
            if (r.size) {
                const i = Array.from(r.values());
                r.clear();
                const o = i.map(c=>this.cache[c]);
                try {
                    await this.storage.save(i, o)
                } catch (c) {
                    console.error("[AS]: set error:", c, i, o)
                }
            }
            n.resolve(),
            r.size && this.saveThrottled()
        }
        , Nt, !1),
        this.deleteThrottled = xt(async()=>{
            const n = this.deleteDeferred;
            this.deleteDeferred = se();
            const r = this.keysToDelete;
            if (r.size) {
                const i = Array.from(r.values());
                r.clear();
                try {
                    await this.storage.delete(i)
                } catch (o) {
                    console.error("[AS]: delete error:", o, i)
                }
            }
            n.resolve(),
            r.size && this.deleteThrottled()
        }
        , Nt, !1),
        this.getThrottled = xt(async()=>{
            const n = Array.from(this.getPromises.keys());
            this.storage.get(n).then(r=>{
                for (let i = 0, o = n.length; i < o; ++i) {
                    const c = n[i]
                      , a = this.getPromises.get(c);
                    a && (a.resolve(this.cache[c] = r[i]),
                    this.getPromises.delete(c))
                }
            }
            , r=>{
                new Set(["NO_ENTRY_FOUND", "STORAGE_OFFLINE"]).has(r.type) || (this.useStorage = !1,
                console.error("[AS]: get error:", r, n, s));
                for (let o = 0, c = n.length; o < c; ++o) {
                    const a = n[o]
                      , u = this.getPromises.get(a);
                    u && (u.resolve(void 0),
                    this.getPromises.delete(a))
                }
            }
            ).finally(()=>{
                this.getPromises.size && this.getThrottled()
            }
            )
        }
        , Nt, !1)
    }
    isAvailable() {
        return this.useStorage
    }
    getCache() {
        return this.cache
    }
    getFromCache(e) {
        return this.cache[e]
    }
    setToCache(e, s) {
        return this.cache[e] = s
    }
    async get(e, s=!0) {
        if (this.cache.hasOwnProperty(e) && s)
            return this.getFromCache(e);
        if (this.useStorage) {
            const n = this.getPromises.get(e);
            if (n)
                return n;
            const r = se();
            return this.getPromises.set(e, r),
            this.getThrottled(),
            r
        }
    }
    getAll() {
        return this.storage.getAll().catch(()=>[])
    }
    set(e, s=!1) {
        const n = this.useStorage && !s && !this.savingFreezed;
        for (const r in e)
            if (e.hasOwnProperty(r)) {
                const i = e[r];
                this.setToCache(r, i),
                n && (this.keysToSet.add(r),
                this.keysToDelete.delete(r),
                this.saveThrottled())
            }
        return n ? this.saveDeferred : Promise.resolve()
    }
    delete(e, s=!1) {
        return e = "" + e,
        s || delete this.cache[e],
        this.useStorage && (this.keysToSet.delete(e),
        this.keysToDelete.add(e),
        this.deleteThrottled()),
        this.useStorage ? this.deleteDeferred : Promise.resolve()
    }
    clear(e=!1) {
        if (!e)
            for (const s in this.cache)
                delete this.cache[s];
        return this.storage.clear().catch(Rs)
    }
    static toggleStorage(e, s) {
        return Promise.all(this.STORAGES.map(n=>{
            if (n.useStorage = e,
            !(!pe || !s))
                return e ? n.set(n.cache) : (n.keysToSet.clear(),
                n.keysToDelete.clear(),
                n.getPromises.forEach(r=>r.resolve(void 0)),
                n.getPromises.clear(),
                n.clear(!0))
        }
        )).catch(Rs)
    }
    static freezeSaving(e, s) {
        this.STORAGES.forEach(n=>n.savingFreezed = !0);
        try {
            e()
        } catch (n) {
            console.error("freezeSaving callback error:", n)
        }
        this.STORAGES.forEach(n=>n.savingFreezed = !1)
    }
}
;
we.STORAGES = [];
let Ve = we;
_ && (_.AppStorage = Ve);
const Yr = {
    name: "tweb",
    version: 7,
    stores: [{
        name: "session"
    }, {
        name: "stickerSets"
    }, {
        name: "users"
    }, {
        name: "chats"
    }, {
        name: "dialogs"
    }, {
        name: "messages"
    }]
};
class Hr extends Ve {
    constructor() {
        super(Yr, "session")
    }
}
const _e = new Hr;
_.stateStorage = _e;
function Dn(t, e, s) {
    const n = s && new Set(s)
      , r = a=>Object.keys(a).filter(u=>a[u] !== void 0)
      , i = s ? a=>r(a).filter(u=>!n.has(u)) : r
      , o = typeof t;
    return t && e && o === "object" && o === typeof e ? i(t).length === i(e).length && i(t).every(a=>Dn(t[a], e[a], s)) : t === e
}
function wt(t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
}
const $r = new Set(["javascript:"]);
function pn(t) {
    if (!t)
        return null;
    try {
        const e = new URL(t).protocol;
        return $r.has(e) ? null : e
    } catch {
        return null
    }
}
const zr = "((?:👨🏻‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏼‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏽‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏾‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👨🏿‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏻‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏻‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏼‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏼‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏽‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏽‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏾‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏾‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|👩🏿‍❤️?‍💋‍👨\uD83C[\uDFFB-\uDFFF]|👩🏿‍❤️?‍💋‍👩\uD83C[\uDFFB-\uDFFF]|🧑🏻‍❤️?‍💋‍🧑\uD83C[\uDFFC-\uDFFF]|🧑🏼‍❤️?‍💋‍🧑\uD83C[\uDFFB\uDFFD-\uDFFF]|🧑🏽‍❤️?‍💋‍🧑\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|🧑🏾‍❤️?‍💋‍🧑\uD83C[\uDFFB-\uDFFD\uDFFF]|🧑🏿‍❤️?‍💋‍🧑\uD83C[\uDFFB-\uDFFE]|👨🏻‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏻‍🤝‍👨\uD83C[\uDFFC-\uDFFF]|👨🏼‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏼‍🤝‍👨\uD83C[\uDFFB\uDFFD-\uDFFF]|👨🏽‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏽‍🤝‍👨\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|👨🏾‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏾‍🤝‍👨\uD83C[\uDFFB-\uDFFD\uDFFF]|👨🏿‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👨🏿‍🤝‍👨\uD83C[\uDFFB-\uDFFE]|👩🏻‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏻‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏻‍🤝‍👨\uD83C[\uDFFC-\uDFFF]|👩🏻‍🤝‍👩\uD83C[\uDFFC-\uDFFF]|👩🏼‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏼‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏼‍🤝‍👨\uD83C[\uDFFB\uDFFD-\uDFFF]|👩🏼‍🤝‍👩\uD83C[\uDFFB\uDFFD-\uDFFF]|👩🏽‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏽‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏽‍🤝‍👨\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|👩🏽‍🤝‍👩\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|👩🏾‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏾‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏾‍🤝‍👨\uD83C[\uDFFB-\uDFFD\uDFFF]|👩🏾‍🤝‍👩\uD83C[\uDFFB-\uDFFD\uDFFF]|👩🏿‍❤️?‍👨\uD83C[\uDFFB-\uDFFF]|👩🏿‍❤️?‍👩\uD83C[\uDFFB-\uDFFF]|👩🏿‍🤝‍👨\uD83C[\uDFFB-\uDFFE]|👩🏿‍🤝‍👩\uD83C[\uDFFB-\uDFFE]|🧑🏻‍❤️?‍🧑\uD83C[\uDFFC-\uDFFF]|🧑🏻‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏼‍❤️?‍🧑\uD83C[\uDFFB\uDFFD-\uDFFF]|🧑🏼‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏽‍❤️?‍🧑\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|🧑🏽‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏾‍❤️?‍🧑\uD83C[\uDFFB-\uDFFD\uDFFF]|🧑🏾‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|🧑🏿‍❤️?‍🧑\uD83C[\uDFFB-\uDFFE]|🧑🏿‍🤝‍🧑\uD83C[\uDFFB-\uDFFF]|👨‍❤️?‍💋‍👨|👩‍❤️?‍💋‍\uD83D[\uDC68\uDC69]|🫱🏻‍🫲\uD83C[\uDFFC-\uDFFF]|🫱🏼‍🫲\uD83C[\uDFFB\uDFFD-\uDFFF]|🫱🏽‍🫲\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|🫱🏾‍🫲\uD83C[\uDFFB-\uDFFD\uDFFF]|🫱🏿‍🫲\uD83C[\uDFFB-\uDFFE]|👨‍❤️?‍👨|👩‍❤️?‍\uD83D[\uDC68\uDC69]|🧑‍🤝‍🧑|👫\uD83C[\uDFFB-\uDFFF]|👬\uD83C[\uDFFB-\uDFFF]|👭\uD83C[\uDFFB-\uDFFF]|💏\uD83C[\uDFFB-\uDFFF]|💑\uD83C[\uDFFB-\uDFFF]|🤝\uD83C[\uDFFB-\uDFFF]|\uD83D[\uDC6B-\uDC6D\uDC8F\uDC91]|🤝)|(?:\uD83D[\uDC68\uDC69]|🧑)(?:\uD83C[\uDFFB-\uDFFF])?‍(?:⚕️?|⚖️?|✈️?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C[\uDFCB\uDFCC]|\uD83D[\uDD74\uDD75]|⛹)(?:(?:\uD83C[\uDFFB-\uDFFF]|️?)‍[♀♂]️?)|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?‍[♀♂]️?|(?:👨‍👨‍👦‍👦|👨‍👨‍👧‍\uD83D[\uDC66\uDC67]|👨‍👩‍👦‍👦|👨‍👩‍👧‍\uD83D[\uDC66\uDC67]|👩‍👩‍👦‍👦|👩‍👩‍👧‍\uD83D[\uDC66\uDC67]|👨‍👦‍👦|👨‍👧‍\uD83D[\uDC66\uDC67]|👨‍👨‍\uD83D[\uDC66\uDC67]|👨‍👩‍\uD83D[\uDC66\uDC67]|👩‍👦‍👦|👩‍👧‍\uD83D[\uDC66\uDC67]|👩‍👩‍\uD83D[\uDC66\uDC67]|🏳️?‍⚧️?|🏳️?‍🌈|😶‍🌫️?|❤️?‍🔥|❤️?‍🩹|🏴‍☠️?|🐕‍🦺|🐻‍❄️?|👁‍🗨|👨‍\uD83D[\uDC66\uDC67]|👩‍\uD83D[\uDC66\uDC67]|👯‍♀️?|👯‍♂️?|😮‍💨|😵‍💫|🤼‍♀️?|🤼‍♂️?|🧞‍♀️?|🧞‍♂️?|🧟‍♀️?|🧟‍♂️?|🐈‍⬛)|[#*0-9]️??⃣|(?:[©®™♟]️?)|(?:\uD83C[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE1A\uDE2F\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF3\uDFF5\uDFF7]|\uD83D[\uDC3F\uDC41\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]|[‼⁉ℹ↔-↙↩↪⌚⌛⌨⏏⏭-⏯⏱⏲⏸-⏺Ⓜ▪▫▶◀◻-◾☀-☄☎☑☔☕☘☠☢☣☦☪☮☯☸-☺♀♂♈-♓♠♣♥♦♨♻♿⚒-⚗⚙⚛⚜⚠⚡⚧⚪⚫⚰⚱⚽⚾⛄⛅⛈⛏⛑⛓⛔⛩⛪⛰-⛵⛸⛺⛽✂✈✉✏✒✔✖✝✡✳✴❄❇❗❣❤➡⤴⤵⬅-⬇⬛⬜⭐⭕〰〽㊗㊙])(?:️?|(?!︎))|(?:(?:\uD83C[\uDFCB\uDFCC]|\uD83D[\uDD74\uDD75\uDD90]|[☝⛷⛹✌✍])(?:️?|(?!︎))|(?:\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD7A\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD\uDEC3-\uDEC5\uDEF0-\uDEF6]|[✊✋]))(?:\uD83C[\uDFFB-\uDFFF])?|(?:🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿|🇦\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|🇧\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|🇨\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|🇩\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|🇪\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|🇫\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|🇬\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|🇭\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|🇮\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|🇯\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|🇰\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|🇱\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|🇲\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|🇳\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|🇴🇲|🇵\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|🇶🇦|🇷\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|🇸\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|🇹\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|🇺\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|🇻\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|🇼\uD83C[\uDDEB\uDDF8]|🇽🇰|🇾\uD83C[\uDDEA\uDDF9]|🇿\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C[\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC6F\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3C\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDDE-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]|[⏩-⏬⏰⏳♾⛎✅✨❌❎❓-❕➕-➗➰➿])|️)"
  , We = "a-z\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u00ff\\u0100-\\u024f\\u0253\\u0254\\u0256\\u0257\\u0259\\u025b\\u0263\\u0268\\u026f\\u0272\\u0289\\u028b\\u02bb\\u0300-\\u036f\\u1e00-\\u1eff\\u0400-\\u04ff\\u0500-\\u0527\\u2de0-\\u2dff\\ua640-\\ua69f\\u0591-\\u05bf\\u05c1-\\u05c2\\u05c4-\\u05c5\\u05c7\\u05d0-\\u05ea\\u05f0-\\u05f4\\ufb1d-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41\\ufb43-\\ufb44\\ufb46-\\ufb4f\\u0610-\\u061a\\u0620-\\u065f\\u066e-\\u06d3\\u06d5-\\u06dc\\u06de-\\u06e8\\u06ea-\\u06ef\\u06fa-\\u06fc\\u06ff\\u0750-\\u077f\\u08a0\\u08a2-\\u08ac\\u08e4-\\u08fe\\ufb50-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\u200c\\u0e01-\\u0e3a\\u0e40-\\u0e4e\\u1100-\\u11ff\\u3130-\\u3185\\uA960-\\uA97F\\uAC00-\\uD7AF\\uD7B0-\\uD7FF\\u3003\\u3005\\u303b\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uff9f\\uffa1-\\uffdc"
  , Kr = "0-9_" + We
  , Bs = "·"
  , Ze = "[" + We + "0-9]"
  , qr = "((?:https?|ftp)://|mailto:)?"
  , Jr = qr + "(?:" + Ze + "{1,64}(?::" + Ze + "{0,64})?@)?(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}|" + Ze + "[" + We + Bs + "0-9-]{0,64}(?:\\." + Ze + "[" + We + Bs + "0-9-]{0,64}){0,10}(?:\\.(xn--[0-9a-z]{2,16}|[" + We + `]{2,24})))(?::\\d{2,5})?(?:/(?:\\S{0,255}[^\\s.;,(\\[\\]{}<>"'])?)?`
  , En = "[a-zA-Z\\d_]{5,32}"
  , Xr = "(?:\\s|^)((?:(\\d{1,2}):(?:[0-5]?[0-9])|(?:\\d{1,2}|\\d{3,})):(?:[0-5][0-9]))(?:\\s|$)"
  , Zr = "\\/([a-zA-Z\\d_]{1,32})(?:@(" + En + "))?(\\b|$)"
  , Ja = new RegExp("(^| )(@)(" + En + ")|(" + Jr + ")|(\\n)|(" + zr + ")|(^|[\\s\\(\\]])(#[" + Kr + "]{2,64})|(^|\\s)" + Zr + "|" + Xr,"i")
  , Xa = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  , Za = /(^|\s|\n)(````?)([\s\S]+?)(````?)([\s\n\.,:?!;]|$)|(^|\s|\x01)(`|~~|\*\*|__|_-_|\|\|)([^\n]+?)\7([\x01\s\.,:?!;]|$)|@(\d+)\s*\((.+?)\)|(\[(.+?)\]\((.+?)\))/m
  , Qa = {
    Telegram: "tg://search_hashtag?hashtag={1}",
    Twitter: "https://twitter.com/hashtag/{1}",
    Instagram: "https://instagram.com/explore/tags/{1}/",
    "Google Plus": "https://plus.google.com/explore/{1}"
}
  , Qt = {
    "`": "messageEntityCode",
    "``": "messageEntityPre",
    "**": "messageEntityBold",
    __: "messageEntityItalic",
    "~~": "messageEntityStrike",
    "_-_": "messageEntityUnderline",
    "||": "messageEntitySpoiler"
};
new Set(Object.values(Qt));
const Fn = new Set(["messageEntityEmoji", "messageEntityLinebreak", "messageEntityCaret"])
  , ec = new Set(Fn);
for (const t in Qt)
    Fn.add(Qt[t]);
const Qr = /^\+\d+$/;
function vn(t, e) {
    pn(t) || (t = "https://" + t);
    const s = {
        url: t
    };
    let n, r, i;
    if (n = t.match(/^(?:https?:\/\/)?(?:(.+?)\.)?(?:(?:web|k|z|a)\.)?t(?:elegram)?\.me(?:\/(.+))?/)) {
        const o = new URL(t);
        let c = n[1];
        c && kr.has(n[1]) && (c = void 0),
        c && (o.pathname = c + (o.pathname === "/" ? "" : o.pathname));
        const a = o.pathname.slice(1)
          , u = a.split("/");
        if (u[0] && u[0][0] === "$" && u[0].length > 1)
            i = "invoice";
        else if (/^\+/.test(a) && !Qr.test(a))
            i = "joinchat";
        else if (u[0])
            switch (u[0]) {
            case "m":
            case "addlist":
            case "joinchat":
            case "addstickers":
            case "addemoji":
            case "voicechat":
            case "invoice":
            case "boost":
            case "giftcode":
                if (u.length !== 1 && !c) {
                    i = u[0];
                    break
                }
            default:
                if (u.length <= 2 || u[1]?.match(/^\d+(?:\?(?:comment|thread)=\d+)?$/) || u[1] === "s") {
                    i = "im";
                    break
                }
                break
            }
    } else
        t.match(/^(?:https?:\/\/)?telesco\.pe\/([^/?]+)\/(\d+)/) ? i = "im" : (r = t.match(/tg:(?:\/\/)?(.+?)(?:\?|$)/)) && (i = "tg_" + r[1]);
    return window[i] || (i = void 0),
    s.onclick = i,
    s
}
_ && (_.wrapUrl = vn);
function tc(t, e) {
    An(t),
    e === void 0 ? t.replaceChildren() : typeof e == "string" ? e ? t.textContent = e : t.replaceChildren() : t.replaceChildren(e)
}
function An(t) {
    t.setAttribute("dir", "auto")
}
function sc() {
    return "auto"
}
function ei(t) {
    return t.target = "_blank",
    t.rel = "noopener noreferrer",
    t
}
const nc = {
    context: void 0,
    registry: void 0
}
  , ti = (t,e)=>t === e
  , X = Symbol("solid-proxy")
  , es = Symbol("solid-track")
  , ft = {
    equals: ti
};
let yn = Cn;
const oe = 1
  , gt = 2
  , Sn = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
}
  , Ut = {};
var M = null;
let Wt = null
  , si = null
  , O = null
  , W = null
  , re = null
  , Ct = 0;
function it(t, e) {
    const s = O
      , n = M
      , r = t.length === 0
      , i = e === void 0 ? n : e
      , o = r ? Sn : {
        owned: null,
        cleanups: null,
        context: i ? i.context : null,
        owner: i
    }
      , c = r ? t : ()=>t(()=>K(()=>_t(o)));
    M = o,
    O = null;
    try {
        return ee(c, !0)
    } finally {
        O = s,
        M = n
    }
}
function ne(t, e) {
    e = e ? Object.assign({}, ft, e) : ft;
    const s = {
        value: t,
        observers: null,
        observerSlots: null,
        comparator: e.equals || void 0
    }
      , n = r=>(typeof r == "function" && (r = r(s.value)),
    wn(s, r));
    return [bn.bind(s), n]
}
function xs(t, e, s) {
    const n = Je(t, e, !0, oe);
    ve(n)
}
function ni(t, e, s) {
    const n = Je(t, e, !1, oe);
    ve(n)
}
function ri(t, e, s) {
    yn = gi;
    const n = Je(t, e, !1, oe);
    (!s || !s.render) && (n.user = !0),
    re ? re.push(n) : ve(n)
}
function rc(t, e) {
    let s;
    const n = Je(()=>{
        s ? s() : K(t),
        s = void 0
    }
    , void 0, !1, 0);
    return n.user = !0,
    r=>{
        s = r,
        ve(n)
    }
}
function ue(t, e, s) {
    s = s ? Object.assign({}, ft, s) : ft;
    const n = Je(t, e, !0, 0);
    return n.observers = null,
    n.observerSlots = null,
    n.comparator = s.equals || void 0,
    ve(n),
    bn.bind(n)
}
function ii(t) {
    return t && typeof t == "object" && "then"in t
}
function ic(t, e, s) {
    let n, r, i;
    arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0,
    r = t,
    i = e || {}) : (n = t,
    r = e,
    i = {});
    let o = null
      , c = Ut
      , a = !1
      , u = "initialValue"in i
      , l = typeof n == "function" && ue(n);
    const h = new Set
      , [f,g] = (i.storage || ne)(i.initialValue)
      , [E,C] = ne(void 0)
      , [D,F] = ne(void 0, {
        equals: !1
    })
      , [b,P] = ne(u ? "ready" : "unresolved");
    function k(w, v, d, m) {
        return o === w && (o = null,
        m !== void 0 && (u = !0),
        (w === c || v === c) && i.onHydrated && queueMicrotask(()=>i.onHydrated(m, {
            value: v
        })),
        c = Ut,
        T(v, d)),
        v
    }
    function T(w, v) {
        ee(()=>{
            v === void 0 && g(()=>w),
            P(v !== void 0 ? "errored" : u ? "ready" : "unresolved"),
            C(v);
            for (const d of h.keys())
                d.decrement();
            h.clear()
        }
        , !1)
    }
    function A() {
        const w = hi
          , v = f()
          , d = E();
        if (d !== void 0 && !o)
            throw d;
        return O && !O.user && w && xs(()=>{
            D(),
            o && (w.resolved || h.has(w) || (w.increment(),
            h.add(w)))
        }
        ),
        v
    }
    function R(w=!0) {
        if (w !== !1 && a)
            return;
        a = !1;
        const v = l ? l() : n;
        if (v == null || v === !1) {
            k(o, K(f));
            return
        }
        const d = c !== Ut ? c : K(()=>r(v, {
            value: f(),
            refetching: w
        }));
        return ii(d) ? (o = d,
        "value"in d ? (d.status === "success" ? k(o, d.value, void 0, v) : k(o, void 0, void 0, v),
        d) : (a = !0,
        queueMicrotask(()=>a = !1),
        ee(()=>{
            P(u ? "refreshing" : "pending"),
            F()
        }
        , !1),
        d.then(m=>k(d, m, void 0, v), m=>k(d, void 0, Pn(m), v)))) : (k(o, d, void 0, v),
        d)
    }
    return Object.defineProperties(A, {
        state: {
            get: ()=>b()
        },
        error: {
            get: ()=>E()
        },
        loading: {
            get() {
                const w = b();
                return w === "pending" || w === "refreshing"
            }
        },
        latest: {
            get() {
                if (!u)
                    return A();
                const w = E();
                if (w && !o)
                    throw w;
                return f()
            }
        }
    }),
    l ? xs(()=>R(!1)) : R(!1),
    [A, {
        refetch: R,
        mutate: g
    }]
}
function oi(t) {
    return ee(t, !1)
}
function K(t) {
    if (O === null)
        return t();
    const e = O;
    O = null;
    try {
        return t()
    } finally {
        O = e
    }
}
function oc(t, e, s) {
    const n = Array.isArray(t);
    let r, i = s && s.defer;
    return o=>{
        let c;
        if (n) {
            c = Array(t.length);
            for (let u = 0; u < t.length; u++)
                c[u] = t[u]()
        } else
            c = t();
        if (i)
            return i = !1,
            o;
        const a = K(()=>e(c, r, o));
        return r = c,
        a
    }
}
function ac(t) {
    ri(()=>K(t))
}
function ai(t) {
    return M === null || (M.cleanups === null ? M.cleanups = [t] : M.cleanups.push(t)),
    t
}
function ts() {
    return O
}
function cc() {
    return M
}
function uc(t, e) {
    const s = M
      , n = O;
    M = t,
    O = null;
    try {
        return ee(e, !0)
    } catch (r) {
        vs(r)
    } finally {
        M = s,
        O = n
    }
}
function ci(t) {
    const e = O
      , s = M;
    return Promise.resolve().then(()=>{
        O = e,
        M = s;
        let n;
        return ee(t, !1),
        O = M = null,
        n ? n.done : void 0
    }
    )
}
const [ui,lc] = ne(!1);
function hc() {
    return [ui, ci]
}
function dc(t, e) {
    const s = Symbol("context");
    return {
        id: s,
        Provider: mi(s),
        defaultValue: t
    }
}
function fc(t) {
    return M && M.context && M.context[t.id] !== void 0 ? M.context[t.id] : t.defaultValue
}
function li(t) {
    const e = ue(t)
      , s = ue(()=>ss(e()));
    return s.toArray = ()=>{
        const n = s();
        return Array.isArray(n) ? n : n != null ? [n] : []
    }
    ,
    s
}
let hi;
function bn() {
    if (this.sources && this.state)
        if (this.state === oe)
            ve(this);
        else {
            const t = W;
            W = null,
            ee(()=>Dt(this), !1),
            W = t
        }
    if (O) {
        const t = this.observers ? this.observers.length : 0;
        O.sources ? (O.sources.push(this),
        O.sourceSlots.push(t)) : (O.sources = [this],
        O.sourceSlots = [t]),
        this.observers ? (this.observers.push(O),
        this.observerSlots.push(O.sources.length - 1)) : (this.observers = [O],
        this.observerSlots = [O.sources.length - 1])
    }
    return this.value
}
function wn(t, e, s) {
    let n = t.value;
    return (!t.comparator || !t.comparator(n, e)) && (t.value = e,
    t.observers && t.observers.length && ee(()=>{
        for (let r = 0; r < t.observers.length; r += 1) {
            const i = t.observers[r]
              , o = Wt && Wt.running;
            o && Wt.disposed.has(i),
            (o ? !i.tState : !i.state) && (i.pure ? W.push(i) : re.push(i),
            i.observers && _n(i)),
            o || (i.state = oe)
        }
        if (W.length > 1e6)
            throw W = [],
            new Error
    }
    , !1)),
    e
}
function ve(t) {
    if (!t.fn)
        return;
    _t(t);
    const e = Ct;
    di(t, t.value, e)
}
function di(t, e, s) {
    let n;
    const r = M
      , i = O;
    O = M = t;
    try {
        n = t.fn(e)
    } catch (o) {
        return t.pure && (t.state = oe,
        t.owned && t.owned.forEach(_t),
        t.owned = null),
        t.updatedAt = s + 1,
        vs(o)
    } finally {
        O = i,
        M = r
    }
    (!t.updatedAt || t.updatedAt <= s) && (t.updatedAt != null && "observers"in t ? wn(t, n) : t.value = n,
    t.updatedAt = s)
}
function Je(t, e, s, n=oe, r) {
    const i = {
        fn: t,
        state: n,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: e,
        owner: M,
        context: M ? M.context : null,
        pure: s
    };
    return M === null || M !== Sn && (M.owned ? M.owned.push(i) : M.owned = [i]),
    i
}
function mt(t) {
    if (t.state === 0)
        return;
    if (t.state === gt)
        return Dt(t);
    if (t.suspense && K(t.suspense.inFallback))
        return t.suspense.effects.push(t);
    const e = [t];
    for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Ct); )
        t.state && e.push(t);
    for (let s = e.length - 1; s >= 0; s--)
        if (t = e[s],
        t.state === oe)
            ve(t);
        else if (t.state === gt) {
            const n = W;
            W = null,
            ee(()=>Dt(t, e[0]), !1),
            W = n
        }
}
function ee(t, e) {
    if (W)
        return t();
    let s = !1;
    e || (W = []),
    re ? s = !0 : re = [],
    Ct++;
    try {
        const n = t();
        return fi(s),
        n
    } catch (n) {
        s || (re = null),
        W = null,
        vs(n)
    }
}
function fi(t) {
    if (W && (Cn(W),
    W = null),
    t)
        return;
    const e = re;
    re = null,
    e.length && ee(()=>yn(e), !1)
}
function Cn(t) {
    for (let e = 0; e < t.length; e++)
        mt(t[e])
}
function gi(t) {
    let e, s = 0;
    for (e = 0; e < t.length; e++) {
        const n = t[e];
        n.user ? t[s++] = n : mt(n)
    }
    for (e = 0; e < s; e++)
        mt(t[e])
}
function Dt(t, e) {
    t.state = 0;
    for (let s = 0; s < t.sources.length; s += 1) {
        const n = t.sources[s];
        if (n.sources) {
            const r = n.state;
            r === oe ? n !== e && (!n.updatedAt || n.updatedAt < Ct) && mt(n) : r === gt && Dt(n, e)
        }
    }
}
function _n(t) {
    for (let e = 0; e < t.observers.length; e += 1) {
        const s = t.observers[e];
        s.state || (s.state = gt,
        s.pure ? W.push(s) : re.push(s),
        s.observers && _n(s))
    }
}
function _t(t) {
    let e;
    if (t.sources)
        for (; t.sources.length; ) {
            const s = t.sources.pop()
              , n = t.sourceSlots.pop()
              , r = s.observers;
            if (r && r.length) {
                const i = r.pop()
                  , o = s.observerSlots.pop();
                n < r.length && (i.sourceSlots[o] = n,
                r[n] = i,
                s.observerSlots[n] = o)
            }
        }
    if (t.owned) {
        for (e = t.owned.length - 1; e >= 0; e--)
            _t(t.owned[e]);
        t.owned = null
    }
    if (t.cleanups) {
        for (e = t.cleanups.length - 1; e >= 0; e--)
            t.cleanups[e]();
        t.cleanups = null
    }
    t.state = 0
}
function Pn(t) {
    return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error",{
        cause: t
    })
}
function vs(t, e=M) {
    const s = Pn(t);
    {
        console.error("solid error", s);
        return
    }
}
function ss(t) {
    if (typeof t == "function" && !t.length)
        return ss(t());
    if (Array.isArray(t)) {
        const e = [];
        for (let s = 0; s < t.length; s++) {
            const n = ss(t[s]);
            Array.isArray(n) ? e.push.apply(e, n) : e.push(n)
        }
        return e
    }
    return t
}
function mi(t, e) {
    return function(n) {
        let r;
        return ni(()=>r = K(()=>(M.context = {
            ...M.context,
            [t]: n.value
        },
        li(()=>n.children))), void 0),
        r
    }
}
const Di = Symbol("fallback");
function Ns(t) {
    for (let e = 0; e < t.length; e++)
        t[e]()
}
function pi(t, e, s={}) {
    let n = []
      , r = []
      , i = []
      , o = 0
      , c = e.length > 1 ? [] : null;
    return ai(()=>Ns(i)),
    ()=>{
        let a = t() || [], u, l;
        return a[es],
        K(()=>{
            let f = a.length, g, E, C, D, F, b, P, k, T;
            if (f === 0)
                o !== 0 && (Ns(i),
                i = [],
                n = [],
                r = [],
                o = 0,
                c && (c = [])),
                s.fallback && (n = [Di],
                r[0] = it(A=>(i[0] = A,
                s.fallback())),
                o = 1);
            else if (o === 0) {
                for (r = new Array(f),
                l = 0; l < f; l++)
                    n[l] = a[l],
                    r[l] = it(h);
                o = f
            } else {
                for (C = new Array(f),
                D = new Array(f),
                c && (F = new Array(f)),
                b = 0,
                P = Math.min(o, f); b < P && n[b] === a[b]; b++)
                    ;
                for (P = o - 1,
                k = f - 1; P >= b && k >= b && n[P] === a[k]; P--,
                k--)
                    C[k] = r[P],
                    D[k] = i[P],
                    c && (F[k] = c[P]);
                for (g = new Map,
                E = new Array(k + 1),
                l = k; l >= b; l--)
                    T = a[l],
                    u = g.get(T),
                    E[l] = u === void 0 ? -1 : u,
                    g.set(T, l);
                for (u = b; u <= P; u++)
                    T = n[u],
                    l = g.get(T),
                    l !== void 0 && l !== -1 ? (C[l] = r[u],
                    D[l] = i[u],
                    c && (F[l] = c[u]),
                    l = E[l],
                    g.set(T, l)) : i[u]();
                for (l = b; l < f; l++)
                    l in C ? (r[l] = C[l],
                    i[l] = D[l],
                    c && (c[l] = F[l],
                    c[l](l))) : r[l] = it(h);
                r = r.slice(0, o = f),
                n = a.slice(0)
            }
            return r
        }
        );
        function h(f) {
            if (i[l] = f,
            c) {
                const [g,E] = ne(l);
                return c[l] = E,
                e(a[l], g)
            }
            return e(a[l])
        }
    }
}
function gc(t, e) {
    return K(()=>t(e || {}))
}
function Qe() {
    return !0
}
const ns = {
    get(t, e, s) {
        return e === X ? s : t.get(e)
    },
    has(t, e) {
        return e === X ? !0 : t.has(e)
    },
    set: Qe,
    deleteProperty: Qe,
    getOwnPropertyDescriptor(t, e) {
        return {
            configurable: !0,
            enumerable: !0,
            get() {
                return t.get(e)
            },
            set: Qe,
            deleteProperty: Qe
        }
    },
    ownKeys(t) {
        return t.keys()
    }
};
function jt(t) {
    return (t = typeof t == "function" ? t() : t) ? t : {}
}
function Ei() {
    for (let t = 0, e = this.length; t < e; ++t) {
        const s = this[t]();
        if (s !== void 0)
            return s
    }
}
function mc(...t) {
    let e = !1;
    for (let o = 0; o < t.length; o++) {
        const c = t[o];
        e = e || !!c && X in c,
        t[o] = typeof c == "function" ? (e = !0,
        ue(c)) : c
    }
    if (e)
        return new Proxy({
            get(o) {
                for (let c = t.length - 1; c >= 0; c--) {
                    const a = jt(t[c])[o];
                    if (a !== void 0)
                        return a
                }
            },
            has(o) {
                for (let c = t.length - 1; c >= 0; c--)
                    if (o in jt(t[c]))
                        return !0;
                return !1
            },
            keys() {
                const o = [];
                for (let c = 0; c < t.length; c++)
                    o.push(...Object.keys(jt(t[c])));
                return [...new Set(o)]
            }
        },ns);
    const s = {}
      , n = Object.create(null);
    for (let o = t.length - 1; o >= 0; o--) {
        const c = t[o];
        if (!c)
            continue;
        const a = Object.getOwnPropertyNames(c);
        for (let u = a.length - 1; u >= 0; u--) {
            const l = a[u];
            if (l === "__proto__" || l === "constructor")
                continue;
            const h = Object.getOwnPropertyDescriptor(c, l);
            if (!n[l])
                n[l] = h.get ? {
                    enumerable: !0,
                    configurable: !0,
                    get: Ei.bind(s[l] = [h.get.bind(c)])
                } : h.value !== void 0 ? h : void 0;
            else {
                const f = s[l];
                f && (h.get ? f.push(h.get.bind(c)) : h.value !== void 0 && f.push(()=>h.value))
            }
        }
    }
    const r = {}
      , i = Object.keys(n);
    for (let o = i.length - 1; o >= 0; o--) {
        const c = i[o]
          , a = n[c];
        a && a.get ? Object.defineProperty(r, c, a) : r[c] = a ? a.value : void 0
    }
    return r
}
function Dc(t, ...e) {
    if (X in t) {
        const r = new Set(e.length > 1 ? e.flat() : e[0])
          , i = e.map(o=>new Proxy({
            get(c) {
                return o.includes(c) ? t[c] : void 0
            },
            has(c) {
                return o.includes(c) && c in t
            },
            keys() {
                return o.filter(c=>c in t)
            }
        },ns));
        return i.push(new Proxy({
            get(o) {
                return r.has(o) ? void 0 : t[o]
            },
            has(o) {
                return r.has(o) ? !1 : o in t
            },
            keys() {
                return Object.keys(t).filter(o=>!r.has(o))
            }
        },ns)),
        i
    }
    const s = {}
      , n = e.map(()=>({}));
    for (const r of Object.getOwnPropertyNames(t)) {
        const i = Object.getOwnPropertyDescriptor(t, r)
          , o = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
        let c = !1
          , a = 0;
        for (const u of e)
            u.includes(r) && (c = !0,
            o ? n[a][r] = i.value : Object.defineProperty(n[a], r, i)),
            ++a;
        c || (o ? s[r] = i.value : Object.defineProperty(s, r, i))
    }
    return [...n, s]
}
const Fi = t=>`Stale read from <${t}>.`;
function pc(t) {
    const e = "fallback"in t && {
        fallback: ()=>t.fallback
    };
    return ue(pi(()=>t.each, t.children, e || void 0))
}
function Ec(t) {
    const e = t.keyed
      , s = ue(()=>t.when, void 0, {
        equals: (n,r)=>e ? n === r : !n == !r
    });
    return ue(()=>{
        const n = s();
        if (n) {
            const r = t.children;
            return typeof r == "function" && r.length > 0 ? K(()=>r(e ? n : ()=>{
                if (!K(s))
                    throw Fi("Show");
                return t.when
            }
            )) : r
        }
        return t.fallback
    }
    , void 0, void 0)
}
const Fc = {
    messageActionChatCreate: "ActionCreateGroup",
    messageActionChatCreateYou: "ActionYouCreateGroup",
    messageActionChatEditTitle: "ActionChangedTitle",
    messageActionChatEditPhoto: "ActionChangedPhoto",
    messageActionChatEditVideo: "ActionChangedVideo",
    messageActionChatDeletePhoto: "ActionRemovedPhoto",
    messageActionChatReturn: "ActionAddUserSelf",
    messageActionChatReturnYou: "ActionAddUserSelfYou",
    messageActionChatJoined: "ActionAddUserSelfMega",
    messageActionChatJoinedYou: "ChannelMegaJoined",
    messageActionChatAddUser: "ActionAddUser",
    messageActionChatAddUsers: "ActionAddUser",
    messageActionChatLeave: "ActionLeftUser",
    messageActionChatLeaveYou: "YouLeft",
    messageActionChatDeleteUser: "ActionKickUser",
    messageActionChatJoinedByLink: "ActionInviteUser",
    messageActionPinMessage: "Chat.Service.Group.UpdatedPinnedMessage",
    messageActionContactSignUp: "Chat.Service.PeerJoinedTelegram",
    messageActionChannelCreate: "ActionCreateChannel",
    messageActionChannelEditTitle: "Chat.Service.Channel.UpdatedTitle",
    messageActionChannelEditPhoto: "Chat.Service.Channel.UpdatedPhoto",
    messageActionChannelEditVideo: "Chat.Service.Channel.UpdatedVideo",
    messageActionChannelDeletePhoto: "Chat.Service.Channel.RemovedPhoto",
    messageActionHistoryClear: "HistoryCleared",
    messageActionDiscussionStarted: "DiscussionStarted",
    messageActionGiveawayLaunch: "BoostingGiveawayJustStarted",
    messageActionChannelJoined: "ChannelJoined",
    messageActionChannelMigrateFrom: "ActionMigrateFromGroup",
    "messageActionPhoneCall.video_in_ok": "ChatList.Service.VideoCall.incoming",
    "messageActionPhoneCall.video_out_ok": "ChatList.Service.VideoCall.outgoing",
    "messageActionPhoneCall.video_missed": "ChatList.Service.VideoCall.Missed",
    "messageActionPhoneCall.video_cancelled": "ChatList.Service.VideoCall.Cancelled",
    "messageActionPhoneCall.in_ok": "ChatList.Service.Call.incoming",
    "messageActionPhoneCall.out_ok": "ChatList.Service.Call.outgoing",
    "messageActionPhoneCall.missed": "ChatList.Service.Call.Missed",
    "messageActionPhoneCall.cancelled": "ChatList.Service.Call.Cancelled",
    "messageActionGroupCall.started": "Chat.Service.VoiceChatStarted.Channel",
    "messageActionGroupCall.started_by": "Chat.Service.VoiceChatStarted",
    "messageActionGroupCall.started_byYou": "Chat.Service.VoiceChatStartedYou",
    "messageActionGroupCall.ended": "Chat.Service.VoiceChatFinished.Channel",
    "messageActionGroupCall.ended_by": "Chat.Service.VoiceChatFinished",
    "messageActionGroupCall.ended_byYou": "Chat.Service.VoiceChatFinishedYou",
    messageActionBotAllowed: "Chat.Service.BotPermissionAllowed"
}
  , vc = ie ? "Message.Unsupported.Mobile" : "Message.Unsupported.Desktop";
var le;
(t=>{
    t.strings = new Map,
    t.countriesList = [];
    let e, s;
    t.requestedServerLanguage = !1,
    t.isRTL = !1,
    [t.langCodeNormalized,t.setLangCodeNormalized] = ne();
    function n(d) {
        t.isRTL = d
    }
    t.setRTL = n;
    function r(d) {
        t.lastRequestedLangCode = d,
        t.lastRequestedNormalizedLangCode = d.split("-")[0],
        (0,
        t.setLangCodeNormalized)(t.lastRequestedNormalizedLangCode.split("-")[0])
    }
    function i() {
        return s || (s = Promise.all([_e.get("langPack"), t.polyfillPromise]).then(([d])=>d ? (t.lastRequestedLangCode || r(d.lang_code),
        E(d),
        d) : a()).finally(()=>{
            s = void 0
        }
        ))
    }
    t.getCacheLangPack = i;
    function o() {
        if (t.timeFormat === "h12")
            try {
                const d = T({
                    hour: "numeric",
                    minute: "numeric",
                    hour12: !0
                })
                  , m = new Date;
                m.setHours(0);
                const y = d.format(m);
                t.amPmCache.am = y.split(/\s/)[1],
                m.setHours(12);
                const p = d.format(m);
                t.amPmCache.pm = p.split(/\s/)[1]
            } catch (d) {
                console.error("cannot get am/pm", d),
                t.amPmCache = {
                    am: "AM",
                    pm: "PM"
                }
            }
    }
    function c(d, m=!!t.timeFormat && t.timeFormat !== d) {
        t.timeFormat = d,
        o(),
        m && (k.clear(),
        Array.from(document.querySelectorAll(".i18n")).forEach(p=>{
            const I = t.weakMap.get(p);
            I instanceof A && I.update()
        }
        ))
    }
    t.setTimeFormat = c;
    function a() {
        const d = x.langPackCode;
        return r(d),
        Promise.all([V(()=>import("./lang-nn4KIa5Q.js"), [], import.meta.url), V(()=>import("./langSign-CN-ja8rh.js"), [], import.meta.url), V(()=>import("./countries-CzeCvYH8.js"), [], import.meta.url)]).then(([m,y,p])=>{
            const I = [];
            h(m.default, I),
            h(y.default, I);
            const $ = {
                _: "langPackDifference",
                from_version: 0,
                lang_code: d,
                strings: I,
                version: 0,
                local: !0,
                countries: p.default
            };
            return g($)
        }
        )
    }
    t.loadLocalLangPack = a;
    function u(d, m) {
        m = !0,
        t.requestedServerLanguage = !0;
        const y = S.managers;
        return Promise.all([y.apiManager.invokeApiCacheable("langpack.getLangPack", {
            lang_code: d,
            lang_pack: m ? "web" : x.langPack
        }), !m && y.apiManager.invokeApiCacheable("langpack.getLangPack", {
            lang_code: d,
            lang_pack: "android"
        }), V(()=>import("./lang-nn4KIa5Q.js"), [], import.meta.url), V(()=>import("./langSign-CN-ja8rh.js"), [], import.meta.url), y.apiManager.invokeApiCacheable("help.getCountriesList", {
            lang_code: d,
            hash: 0
        }), t.polyfillPromise])
    }
    t.loadLangPack = u;
    function l(d, m) {
        return S.managers.apiManager.invokeApi("langpack.getStrings", {
            lang_pack: x.langPack,
            lang_code: d,
            keys: m
        })
    }
    t.getStrings = l;
    function h(d, m=[]) {
        for (const y in d) {
            const p = d[y];
            typeof p == "string" ? m.push({
                _: "langPackString",
                key: y,
                value: p
            }) : m.push({
                _: "langPackStringPluralized",
                key: y,
                ...p
            })
        }
        return m
    }
    t.formatLocalStrings = h;
    function f(d, m) {
        return r(d),
        u(d, m).then(([y,p,I,$,N,de])=>{
            let Ae = [];
            return [I, $].forEach(Pt=>{
                h(Pt.default, Ae)
            }
            ),
            Ae = Ae.concat(...[y.strings, p.strings].filter(Boolean)),
            y.strings = Ae,
            y.countries = N,
            g(y)
        }
        )
    }
    t.getLangPack = f;
    function g(d) {
        return d.appVersion = x.langPackVersion,
        _e.set({
            langPack: d
        }).then(()=>(E(d),
        d))
    }
    t.saveLangPack = g,
    t.polyfillPromise = function() {
        return typeof Intl < "u" && typeof Intl.PluralRules < "u" ? Promise.resolve() : V(()=>import("./pluralPolyfill-B0qpVVRH.js"), [], import.meta.url).then(m=>{
            window.Intl = Object.assign(typeof Intl < "u" ? Intl : {}, m.default)
        }
        )
    }();
    function E(d) {
        const m = t.lastRequestedLangCode;
        if (d.lang_code !== m)
            return;
        try {
            e = new Intl.PluralRules(t.lastRequestedNormalizedLangCode)
        } catch (p) {
            console.error("pluralRules error", p),
            e = new Intl.PluralRules(t.lastRequestedNormalizedLangCode.split("-", 1)[0])
        }
        try {
            e = new Intl.PluralRules(d.lang_code)
        } catch (p) {
            console.error("pluralRules error", p),
            e = new Intl.PluralRules(d.lang_code.split("-", 1)[0])
        }
        t.strings.clear();
        for (const p of d.strings)
            t.strings.set(p.key, p);
        d.countries && (t.countriesList.length = 0,
        t.countriesList.push(...d.countries.countries),
        d.countries.countries.forEach(p=>{
            if (p.name) {
                const I = p.default_name;
                t.strings.set(I, {
                    _: "langPackString",
                    key: I,
                    value: p.name
                })
            }
        }
        )),
        t.lastAppliedLangCode !== m && (t.lastAppliedLangCode && S.myId && (S.managers.appReactionsManager.resetAvailableReactions(),
        S.managers.appUsersManager.indexMyself(),
        S.managers.dialogsStorage.indexMyDialog()),
        t.lastAppliedLangCode = m,
        k.clear(),
        o(),
        S.dispatchEvent("language_change", m)),
        Array.from(document.querySelectorAll(".i18n")).forEach(p=>{
            const I = t.weakMap.get(p);
            I && I.update()
        }
        )
    }
    t.applyLangPack = E;
    function C(d, m, y, p) {
        const I = m[p === void 0 ? y.i++ : p];
        Array.isArray(I) ? d.push(...I) : d.push(I)
    }
    function D(d, m, y) {
        if (!y) {
            y = {
                i: 0
            };
            const N = d.match(/(%|un)\d+/g);
            N?.length && (y.i = Math.max(...N.map(de=>+de.replace(/\D/g, ""))))
        }
        const p = []
          , I = /(\*\*|__)(.+?)\1|(\n)|(\[.+?\]\(.*?\))|un\d|%\d\$.|%\S/g;
        let $ = 0;
        return d.replace(I, (N,de,Ae,Pt,Le,kt,gr)=>{
            if (kt > $ && p.push(gr.slice($, kt)),
            de) {
                let q;
                switch (de) {
                case "**":
                    {
                        q = document.createElement("b");
                        break
                    }
                case "__":
                    {
                        q = document.createElement("i");
                        break
                    }
                }
                q.append(...D(Ae, m, y)),
                p.push(q)
            } else if (Pt)
                p.push(document.createElement("br"));
            else if (Le) {
                const q = Le.lastIndexOf("]")
                  , mr = Le.slice(1, q)
                  , Tt = Le.slice(q + 2, Le.length - 1);
                let Y;
                if (Tt && pn(Tt)) {
                    Y = document.createElement("a");
                    const Mt = vn(Tt);
                    Y.href = Mt.url,
                    Mt.onclick && Y.setAttribute("onclick", Mt.onclick + "(this)"),
                    ei(Y)
                } else
                    Y = m[y.i++],
                    Y instanceof DocumentFragment && (Y = Y.firstChild),
                    typeof Y != "string" && (Y.textContent = "");
                const ks = D(mr, m, y);
                typeof Y == "string" ? p.push(...ks) : (Y.append(...ks),
                p.push(Y))
            } else if (m) {
                const q = N.replace(/\D/g, "");
                C(p, m, y, !q || Number.isNaN(+q) ? void 0 : Math.min(m.length - 1, +q - 1))
            }
            return $ = kt + N.length,
            ""
        }
        ),
        $ !== d.length && p.push(d.slice($)),
        p
    }
    t.superFormatter = D;
    function F(d, m=!1, y) {
        const p = t.strings.get(d);
        let I;
        if (p)
            if (p._ === "langPackStringPluralized" && y?.length) {
                let N = y[0];
                typeof N == "string" && (N = +N.replace(/\D/g, ""));
                const de = e.select(N);
                I = p[de + "_value"] || p.other_value
            } else
                p._ === "langPackString" ? I = p.value : I = d;
        else
            I = d;
        const $ = D(I, y);
        return m ? $.map(N=>N instanceof Node ? N.textContent : N).join("") : $
    }
    t.format = F,
    t.weakMap = new WeakMap;
    class b {
        constructor(m) {
            this.element = m?.element || document.createElement("span"),
            this.element.classList.add("i18n"),
            this.property = m?.property,
            t.weakMap.set(this.element, this)
        }
    }
    class P extends b {
        constructor(m={}) {
            super({
                ...m,
                property: m.property ?? "innerHTML"
            }),
            m?.key && this.update(m)
        }
        update(m) {
            if (Xt(this, m),
            this.property === "innerHTML")
                this.element.replaceChildren(...F(this.key, !1, this.args)),
                this.args?.length && this.element.normalize();
            else {
                const y = this.element[this.property]
                  , p = F(this.key, !0, this.args);
                y === void 0 ? this.element.dataset[this.property] = p : this.element[this.property] = p
            }
        }
        compareAndUpdate(m) {
            if (!(this.key === m.key && Dn(this.args, m.args)))
                return this.update(m)
        }
    }
    t.IntlElement = P;
    const k = new Map;
    function T(d={}) {
        const m = JSON.stringify(d);
        let y = k.get(m);
        return y || (y = new Intl.DateTimeFormat(t.lastRequestedNormalizedLangCode + "-u-hc-" + t.timeFormat,d),
        k.set(m, y)),
        y
    }
    t.getDateTimeFormat = T,
    t.amPmCache = {
        am: "AM",
        pm: "PM"
    };
    class A extends b {
        constructor(m) {
            super({
                ...m,
                property: m.property ?? "textContent"
            }),
            An(this.element),
            m?.date && this.update(m)
        }
        update(m) {
            Xt(this, m);
            let y;
            if (this.options.hour && this.options.minute && Object.keys(this.options).length === 2) {
                const p = this.date.getHours();
                y = ("0" + (t.timeFormat === "h12" ? p % 12 || 12 : p)).slice(-2) + ":" + ("0" + this.date.getMinutes()).slice(-2),
                t.timeFormat === "h12" && (y += " " + (p < 12 ? t.amPmCache.am : t.amPmCache.pm))
            } else {
                const p = T(this.options);
                y = wt(p.format(this.date))
            }
            this.element[this.property] = y
        }
    }
    t.IntlDateElement = A;
    function R(d, m) {
        return new P({
            key: d,
            args: m
        }).element
    }
    t.i18n = R;
    function w(d) {
        return new P(d).element
    }
    t.i18n_ = w;
    function v(d, m, y, p) {
        return new P({
            element: d,
            key: m,
            args: y,
            property: p
        }).element
    }
    t._i18n = v
}
)(le || (le = {}));
const U = le
  , Ge = le.i18n
  , Ac = le.i18n_
  , yc = le._i18n;
function vi(t, e) {
    const s = t.slice(0, 1);
    for (let n = 1; n < t.length; ++n) {
        const r = t.length - 1 === n;
        s.push(typeof e == "function" ? e(r) : e),
        s.push(t[n])
    }
    return s
}
function Sc(t, e=!0, s) {
    const n = vi(t, r=>{
        const i = r && e ? "AutoDownloadSettings.LastDelimeter" : "AutoDownloadSettings.Delimeter";
        return s ? le.format(i, !0) : Ge(i)
    }
    );
    return s ? n.join("") : n
}
_ && (_.I18n = le);
function Ai(t) {
    return +t < 0
}
function yi(t) {
    return +t >= 0
}
String.prototype.toUserId = function() {
    return (+this).toUserId()
}
;
String.prototype.toChatId = function() {
    return (+this).toChatId()
}
;
String.prototype.toPeerId = function(t) {
    return (+this).toPeerId(t)
}
;
String.prototype.isPeerId = function() {
    return /^[\d-]/.test(this.toString())
}
;
Number.prototype.toUserId = function() {
    return +this
}
;
Number.prototype.toChatId = function() {
    return Math.abs(this)
}
;
Number.prototype.toPeerId = function(t) {
    return t === void 0 ? +this : t ? -Math.abs(this) : +this
}
;
Number.prototype.isPeerId = function() {
    return !0
}
;
[["isUser", yi], ["isAnyChat", Ai]].forEach(t=>{
    const e = Array.isArray(t) ? t[0] : t
      , s = Array.isArray(t) ? t[1] : t;
    String.prototype[e] = function() {
        return s.call(null, this.toString())
    }
    ,
    Number.prototype[e] = function() {
        return s.call(null, +this)
    }
}
);
function Si(...t) {
    const e = t.reduce((r,i)=>r + (i.byteLength || i.length), 0)
      , s = new Uint8Array(e);
    let n = 0;
    return t.forEach(r=>{
        s.set(r instanceof ArrayBuffer ? new Uint8Array(r) : r, n),
        n += r.byteLength || r.length
    }
    ),
    s
}
Uint8Array.prototype.concat = function(...t) {
    return Si(this, ...t)
}
;
Uint8Array.prototype.toJSON = function() {
    return [...this]
}
;
Promise.prototype.finally = Promise.prototype.finally || function(t) {
    const e = s=>Promise.resolve(t()).then(s);
    return this.then(s=>e(()=>s), s=>e(()=>Promise.reject(s)))
}
;
class bi {
    constructor() {
        this.convertPromises = {}
    }
    init() {
        this.worker = new Worker(new URL("" + new URL("webp.worker-CJXTr_cK.js",import.meta.url).href,import.meta.url),{
            type: "module"
        }),
        this.worker.addEventListener("message", e=>{
            const n = e.data.payload
              , r = this.convertPromises[n.fileName];
            r && (n.bytes ? r.resolve(n.bytes) : r.reject(),
            delete this.convertPromises[n.fileName])
        }
        )
    }
    postMessage(e) {
        this.init && (this.init(),
        this.init = null),
        this.worker.postMessage(e)
    }
    convert(e, s) {
        if (this.convertPromises.hasOwnProperty(e))
            return this.convertPromises[e];
        const n = se();
        return this.postMessage({
            type: "convertWebp",
            payload: {
                fileName: e,
                bytes: s
            }
        }),
        this.convertPromises[e] = n
    }
}
const kn = new bi;
_.webpWorkerController = kn;
class wi {
    constructor() {
        this.prefix = "",
        this.cache = {},
        this.useStorage = !0,
        H.test && (this.prefix = "t_")
    }
    get(e, s=!0) {
        if (this.cache.hasOwnProperty(e) && s)
            return this.cache[e];
        if (this.useStorage) {
            let n;
            try {
                n = localStorage.getItem(this.prefix + e)
            } catch {
                throw this.useStorage = !1,
                me("STORAGE_OFFLINE")
            }
            if (n !== null)
                try {
                    n = JSON.parse(n)
                } catch {}
            else
                n = void 0;
            return n
        } else
            throw me("STORAGE_OFFLINE")
    }
    set(e, s=!1) {
        let n;
        for (const r in e)
            if (e.hasOwnProperty(r)) {
                const i = e[r];
                if (this.cache[r] = i,
                !s)
                    try {
                        if (!this.useStorage)
                            throw me("STORAGE_OFFLINE");
                        const o = JSON.stringify(i);
                        localStorage.setItem(this.prefix + r, o)
                    } catch (o) {
                        this.useStorage = !1,
                        n = o
                    }
            }
        if (n)
            throw n
    }
    delete(e, s=!1) {
        e = "" + e,
        s || delete this.cache[e];
        try {
            localStorage.removeItem(this.prefix + e)
        } catch {}
    }
    clear() {
        const e = ["dc", "server_time_offset", "xt_instance", "user_auth", "state_id", "k_build"];
        for (let s = 1; s <= 5; ++s)
            e.push(`dc${s}_server_salt`),
            e.push(`dc${s}_auth_key`),
            e.push(`dc${s}_hash`);
        for (const s of e)
            this.delete(s, !0)
    }
    toggleStorage(e, s) {
        if (this.useStorage = e,
        !!s)
            if (!e)
                this.clear();
            else
                return this.set(this.cache)
    }
}
const St = class St {
    constructor() {
        St.STORAGES.push(this),
        pe || (this.storage = new wi)
    }
    async proxy(e, ...s) {
        return pe ? qe.getInstance().invoke("localStorageProxy", {
            type: e,
            args: s
        }) : (s = Array.prototype.slice.call(s),
        this.storage[e].apply(this.storage, s))
    }
    get(e, s) {
        return this.proxy("get", e, s)
    }
    set(e, s) {
        return this.proxy("set", e, s)
    }
    delete(e, s) {
        return this.proxy("delete", e, s)
    }
    clear() {
        return this.proxy("clear")
    }
    toggleStorage(e, s) {
        return this.proxy("toggleStorage", e, s)
    }
}
;
St.STORAGES = [];
let rs = St;
const B = new rs;
_.appStorage = B;
function Ci(t) {
    return ze && t instanceof TouchEvent && t.touches[0].clientX < 30
}
class _i {
    constructor() {
        if (this.onPopState = e=>{
            const s = window.location.hash
              , n = e.state;
            if (this.debug && this.log("popstate", e, this.isPossibleSwipe, s),
            s !== this.currentHash)
                if (this.debug && this.log.warn(`hash changed, new=${s}, current=${this.currentHash}, overridden=${this.overriddenHash}`),
                n === this.id && this.overriddenHash && this.overriddenHash !== s)
                    this.overrideHash(this.overriddenHash);
                else if (n && !this.overriddenHash && s)
                    this.overrideHash();
                else {
                    this.currentHash = s,
                    this.onHashChange && this.onHashChange();
                    return
                }
            if (n !== this.id && (this.pushState(),
            !this.navigations.length))
                return;
            const r = this.navigations.pop();
            if (!r) {
                this.pushState();
                return
            }
            this.manual = !this.isPossibleSwipe,
            this.handleItem(r, this.navigations.length)
        }
        ,
        this.onKeyDown = e=>{
            const s = this.navigations[this.navigations.length - 1];
            s && e.key === "Escape" && (!s.onEscape || s.onEscape()) && (zt(e),
            this.back(s.type))
        }
        ,
        this.onTouchStart = e=>{
            e.touches.length > 1 || (this.debug && this.log("touchstart"),
            Ci(e) && (this.isPossibleSwipe = !0,
            window.addEventListener("touchend", ()=>{
                setTimeout(()=>{
                    this.isPossibleSwipe = !1
                }
                , 100)
            }
            , {
                passive: !0,
                once: !0
            })))
        }
        ,
        this.navigations = [],
        this.id = Date.now(),
        this.manual = !1,
        this.log = Q("NC"),
        this.debug = !0,
        this.currentHash = window.location.hash,
        this.overriddenHash = "",
        this.isPossibleSwipe = !1,
        window.addEventListener("popstate", this.onPopState),
        window.addEventListener("keydown", this.onKeyDown, {
            capture: !0,
            passive: !1
        }),
        ze) {
            const e = {
                passive: !0
            };
            window.addEventListener("touchstart", this.onTouchStart, e)
        }
        history.scrollRestoration = "manual",
        this.pushState()
    }
    overrideHash(e="") {
        e && e[0] !== "#" ? e = "#" + e : e === "#" && (e = ""),
        this.currentHash !== e && (this.overriddenHash = this.currentHash = e,
        this.replaceState(),
        this.pushState())
    }
    handleItem(e, s=this.navigations.indexOf(e)) {
        const n = e.onPop(this.manual ? void 0 : !1);
        this.debug && this.log("popstate, navigation:", e, this.navigations),
        n === !1 ? this.spliceItems(Math.min(this.navigations.length, s), 0, e) : e.noBlurOnPop || sn(),
        this.manual = !1
    }
    findItemByType(e) {
        for (let s = this.navigations.length - 1; s >= 0; --s) {
            const n = this.navigations[s];
            if (n.type === e)
                return {
                    item: n,
                    index: s
                }
        }
    }
    back(e) {
        if (e) {
            const s = this.findItemByType(e);
            if (s) {
                this.backByItem(s.item, s.index);
                return
            }
        }
        history.back()
    }
    backByItem(e, s=this.navigations.indexOf(e)) {
        s !== -1 && (this.manual = !0,
        this.navigations.splice(s, 1),
        this.handleItem(e, s))
    }
    onItemAdded(e) {
        this.debug && this.log("onItemAdded", e, this.navigations),
        e.noHistory || this.pushState()
    }
    pushItem(e) {
        this.navigations.push(e),
        this.onItemAdded(e)
    }
    unshiftItem(e) {
        this.navigations.unshift(e),
        this.onItemAdded(e)
    }
    spliceItems(e, s, ...n) {
        this.navigations.splice(e, s, ...n),
        n.forEach(r=>{
            this.onItemAdded(r)
        }
        )
    }
    pushState() {
        this.debug && this.log("push"),
        this.manual = !1,
        history.pushState(this.id, "")
    }
    replaceState() {
        this.debug && this.log.warn("replace");
        const e = location.origin + location.pathname + location.search + this.overriddenHash;
        history.replaceState(this.id, "", e)
    }
    removeItem(e) {
        e && rt(this.navigations, e)
    }
    removeByType(e, s=!1) {
        for (let n = this.navigations.length - 1; n >= 0 && !(this.navigations[n].type === e && (this.navigations.splice(n, 1),
        s)); --n)
            ;
    }
}
const is = new _i;
_.appNavigationController = is;
class Pi {
    reload() {
        try {
            is.spliceItems(0, 1 / 0),
            is.overrideHash(),
            location.reload()
        } catch {}
    }
    close() {
        try {
            window.close()
        } catch {}
    }
    focus() {
        window.focus()
    }
}
const Tn = new Pi;
function j(t) {
    if (t === null || typeof t != "object")
        return t;
    if (t instanceof Date)
        return new Date(t.getTime());
    if (Array.isArray(t))
        return t.map(r=>j(r));
    if (ArrayBuffer.isView(t))
        return t.slice();
    const e = new t.constructor;
    for (var s in t)
        t.hasOwnProperty(s) && (e[s] = j(t[s]));
    return e
}
const pt = typeof SharedWorker < "u" && !H.noSharedWorker
  , ki = ge ? "touchstart" : "mousemove";
class Ti extends Fe {
    constructor() {
        super(),
        this._isIdle = !0,
        this.focusPromise = Promise.resolve(),
        this.focusResolve = ()=>{}
        ,
        window.addEventListener("blur", ()=>{
            this.isIdle = !0,
            window.addEventListener("focus", ()=>{
                this.isIdle = !1
            }
            , {
                once: !0
            })
        }
        ),
        window.addEventListener(ki, ()=>{
            this.isIdle = !1
        }
        , {
            once: !0,
            passive: !0
        }),
        this.addEventListener("change", e=>{
            e ? this.focusPromise = new Promise(s=>{
                this.focusResolve = s
            }
            ) : this.focusResolve()
        }
        )
    }
    getFocusPromise() {
        return this.focusPromise
    }
    get isIdle() {
        return this._isIdle
    }
    set isIdle(e) {
        this._isIdle !== e && (this._isIdle = e,
        this.dispatchEvent("change", e))
    }
}
const Et = new Ti
  , Mi = 5e3
  , Li = 3e4
  , Ii = 2e4
  , Oi = pt;
class Ri extends Fe {
    constructor() {
        super(!1),
        this.log = Q("INSTANCE"),
        this.clearInstance = ()=>{
            this.masterInstance && !this.deactivated && (this.log.warn("clear master instance"),
            B.delete("xt_instance"))
        }
        ,
        this.checkInstance = async(e=Et.isIdle)=>{
            if (this.deactivated)
                return;
            const s = Date.now()
              , n = {
                id: this.instanceId,
                idle: e,
                time: s
            }
              , [r,i=x.build] = await Promise.all([B.get("xt_instance", !1), B.get("k_build", !1)]);
            if (i > x.build) {
                this.masterInstance = !1,
                S.managers.networkerFactory.stopAll(),
                this.deactivateInstance("version"),
                Xe.toggleStorages(!1, !1);
                return
            } else if (Oi) {
                B.set({
                    xt_instance: n
                });
                return
            }
            !e || !r || r.id === this.instanceId || r.time < s - Ii ? (B.set({
                xt_instance: n
            }),
            this.masterInstance || (this.masterInstance = !0,
            S.managers.networkerFactory.startAll(),
            this.log.warn("now master instance", n)),
            this.clearDeactivateTimeout()) : this.masterInstance && (this.masterInstance = !1,
            S.managers.networkerFactory.stopAll(),
            this.log.warn("now idle instance", n),
            this.deactivateTimeout || (this.deactivateTimeout = window.setTimeout(()=>this.deactivateInstance("tabs"), Li)))
        }
        ,
        this.log = Q("INSTANCE"),
        this.instanceId = hn
    }
    get deactivatedReason() {
        return this.deactivated
    }
    start() {
        if (this.reset(),
        !this.started) {
            this.started = !0,
            Et.addEventListener("change", this.checkInstance),
            setInterval(this.checkInstance, Mi),
            this.checkInstance();
            try {
                document.documentElement.addEventListener("beforeunload", this.clearInstance)
            } catch {}
        }
    }
    reset() {
        this.masterInstance = !1,
        this.clearDeactivateTimeout(),
        this.deactivated = void 0
    }
    activateInstance() {
        this.deactivated && (this.reset(),
        this.checkInstance(!1),
        this.dispatchEvent("activated"))
    }
    deactivateInstance(e) {
        this.masterInstance || this.deactivated || (this.log.warn("deactivate", e),
        this.clearDeactivateTimeout(),
        this.deactivated = e,
        this.dispatchEvent("deactivated", e))
    }
    clearDeactivateTimeout() {
        this.deactivateTimeout && (clearTimeout(this.deactivateTimeout),
        this.deactivateTimeout = 0)
    }
}
const Ft = new Ri;
_ && (_.singleInstance = Ft);
function Bi(t, e) {
    if (t !== void 0)
        return t = +t.toFixed(0),
        e ? t < ht ? t : t % ht : t
}
function xi(t) {
    return Bi(t, !0)
}
const Ni = 1e4;
class Mn extends Fe {
    constructor() {
        super(!1),
        this.isAvailable = !0,
        this.isPushEnabled = !1,
        this.localNotificationsAvailable = !0,
        this.started = !1,
        this.settings = {},
        this.isFirefox = false,
        this.userVisibleOnly = !this.isFirefox,
        this.log = Q("PUSH-API"),
        this.subscribe = ()=>{
            this.isAvailable && navigator.serviceWorker.ready.then(e=>{
                e.pushManager.subscribe({
                    userVisibleOnly: this.userVisibleOnly
                }).then(s=>{
                    this.isPushEnabled = !0,
                    this.pushSubscriptionNotify("subscribe", s)
                }
                ).catch(s=>{
                    Notification.permission === "denied" ? this.log("Permission for Notifications was denied") : (this.log("Unable to subscribe to push.", s),
                    this.userVisibleOnly || (this.userVisibleOnly = !0,
                    setTimeout(this.subscribe, 0)))
                }
                )
            }
            )
        }
        ,
        this.isAliveNotify = ()=>{
            if (!this.isAvailable || Ft.deactivatedReason)
                return;
            this.settings.baseUrl = (location.href || "").replace(/#.*$/, "");
            const e = {}
              , s = {
                push_action_mute1d: ie ? "PushNotification.Action.Mute1d.Mobile" : "PushNotification.Action.Mute1d",
                push_action_settings: ie ? "PushNotification.Action.Settings.Mobile" : "PushNotification.Action.Settings",
                push_message_nopreview: "PushNotification.Message.NoPreview"
            };
            for (const n in s)
                e[n] = U.format(s[n], !0);
            this.serviceMessagePort.invokeVoid("pushPing", {
                localNotifications: this.localNotificationsAvailable,
                lang: e,
                settings: this.settings
            }),
            this.isAliveTO = setTimeout(this.isAliveNotify, Ni)
        }
        ,
        (!("PushManager"in window) || !("Notification"in window) || !("serviceWorker"in navigator)) && (this.log.warn("Push messaging is not supported."),
        this.isAvailable = !1,
        this.localNotificationsAvailable = !1),
        this.isAvailable && Notification.permission === "denied" && this.log.warn("The user has blocked notifications.")
    }
    start() {
        this.started || (this.started = !0,
        this.getSubscription(),
        this.setUpServiceWorkerChannel())
    }
    setLocalNotificationsDisabled() {
        this.localNotificationsAvailable = !1
    }
    getSubscription() {
        this.isAvailable && navigator.serviceWorker.ready.then(e=>{
            e.pushManager.getSubscription().then(s=>{
                this.isPushEnabled = !!s,
                this.pushSubscriptionNotify("init", s)
            }
            ).catch(s=>{
                this.log.error("Error during getSubscription()", s)
            }
            )
        }
        )
    }
    unsubscribe() {
        this.isAvailable && navigator.serviceWorker.ready.then(e=>{
            e.pushManager.getSubscription().then(s=>{
                this.isPushEnabled = !1,
                s && (this.pushSubscriptionNotify("unsubscribe", s),
                setTimeout(()=>{
                    s.unsubscribe().then(n=>{
                        this.isPushEnabled = !1
                    }
                    ).catch(n=>{
                        this.log.error("Unsubscription error: ", n)
                    }
                    )
                }
                , 3e3))
            }
            ).catch(s=>{
                this.log.error("Error thrown while unsubscribing from push messaging.", s)
            }
            )
        }
        )
    }
    forceUnsubscribe() {
        this.isAvailable && navigator.serviceWorker.ready.then(e=>{
            e.pushManager.getSubscription().then(s=>{
                this.log.warn("force unsubscribe", s),
                s && s.unsubscribe().then(n=>{
                    this.log.warn("force unsubscribe successful", n),
                    this.isPushEnabled = !1
                }
                ).catch(n=>{
                    this.log.error("Unsubscription error: ", n)
                }
                )
            }
            ).catch(s=>{
                this.log.error("Error thrown while unsubscribing from push messaging.", s)
            }
            )
        }
        )
    }
    setSettings(e) {
        this.settings = j(e),
        clearTimeout(this.isAliveTO),
        this.isAliveNotify()
    }
    hidePushNotifications() {
        this.isAvailable && this.serviceMessagePort.invokeVoid("notificationsClear", void 0)
    }
    setUpServiceWorkerChannel() {
        this.isAvailable && (this.serviceMessagePort.addEventListener("pushClick", e=>{
            if (Ft.deactivatedReason) {
                Tn.reload();
                return
            }
            this.dispatchEvent("push_notification_click", e)
        }
        ),
        navigator.serviceWorker.ready.then(this.isAliveNotify))
    }
    pushSubscriptionNotify(e, s) {
        if (s) {
            const n = s.toJSON();
            if (!n || !n.endpoint || !n.keys || !n.keys.p256dh || !n.keys.auth) {
                this.log.warn("Invalid push subscription", n),
                this.unsubscribe(),
                this.isAvailable = !1,
                this.pushSubscriptionNotify(e);
                return
            }
            this.log.warn("Push", e, n),
            this.dispatchEvent("push_" + e, {
                tokenType: 10,
                tokenValue: JSON.stringify(n)
            })
        } else
            this.log.warn("Push", e, !1),
            this.dispatchEvent("push_" + e, !1)
    }
    ignorePushByMid(e, s) {
        this.isAvailable && this.serviceMessagePort.invokeVoid("shownNotification", e + "_" + xi(s))
    }
}
const vt = new Mn;
_ && (_.webPushApiManager = vt);
const Ui = Object.freeze(Object.defineProperty({
    __proto__: null,
    WebPushApiManager: Mn,
    default: vt
}, Symbol.toStringTag, {
    value: "Module"
}));
function Wi(t) {
    const e = document.createElement("script")
      , s = new Promise(n=>{
        e.onload = e.onerror = ()=>{
            n(e)
        }
    }
    );
    return e.src = t,
    document.body.appendChild(e),
    s
}
function ji(t) {
    const e = Date.now();
    return t ? e / 1e3 | 0 : e
}
class Ln {
    constructor() {
        this.disabled = H.test || !x.domains.includes(location.hostname)
    }
    setAuthorized(e) {
        if (!this.disabled)
            return B.get("tgme_sync").then(s=>{
                const n = ji(!0);
                if (e && s?.canRedirect === e && s.ts + 86400 > n)
                    return;
                B.set({
                    tgme_sync: {
                        canRedirect: e,
                        ts: n
                    }
                });
                const r = `_websync_?authed=${e ? "1" : "0"}&version=${encodeURIComponent(x.version + " " + x.suffix)}`
                  , o = ["//telegram.me/" + r, "//t.me/" + r].map(c=>Wi(c).then(a=>{
                    a.remove()
                }
                ));
                return Promise.all(o)
            }
            )
    }
}
const As = new Ln;
_ && (_.telegramMeWebManager = As);
const Vi = Object.freeze(Object.defineProperty({
    __proto__: null,
    TelegramMeWebManager: Ln,
    default: As
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ys = typeof RTCPeerConnection < "u" && !Me
  , Gi = ys;
let ot;
if (!J)
    ot = !0;
else
    try {
        ot = true
    } catch {
        ot = !1
    }
const Yi = ot
  , Hi = "filter"in (document.createElement("canvas").getContext("2d") || {})
  , $i = !!navigator?.geolocation?.getCurrentPosition && !1
  , zi = ys
  , In = document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp")
  , Ye = new Set(["image/jpeg", "image/png", "image/bmp"]);
In && Ye.add("image/webp");
const Ki = [["image/jxl", "data:image/jxl;base64,/woIAAAMABKIAgC4AF3lEgAAFSqjjBu8nOv58kOHxbSN6wxttW1hSaLIODZJJ3BIEkkaoCUzGM6qJAE="], ["image/avif", "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="]]
  , qi = Ki.map(([t,e])=>{
    const s = new Image
      , n = new Promise(r=>{
        s.onload = s.onerror = ()=>{
            const i = s.height === 2;
            r(i ? t : void 0)
        }
    }
    );
    return s.src = e,
    n
}
)
  , On = Promise.all(qi).then(t=>t.filter(Boolean))
  , Ss = document.createElement("video")
  , Ji = !!Ss.canPlayType("video/webm") && !J && !Te
  , Rn = !!Ss.canPlayType("video/quicktime") || J || Te
  , Xi = !!Ss.canPlayType('video/mp4; codecs="hev1"')
  , Zi = Object.freeze(Object.defineProperty({
    __proto__: null,
    IS_H265_SUPPORTED: Xi,
    IS_MOV_SUPPORTED: Rn,
    IS_WEBM_SUPPORTED: Ji
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bs = new Set(["image/gif", "video/mp4", "video/webm"]);
Rn && bs.add("video/quicktime");
const Qi = [...Ye].concat([...bs])
  , Bn = new Set(Qi)
  , eo = !Me && !1
  , to = "getDisplayMedia"in (navigator?.mediaDevices || {})
  , so = !!navigator?.vibrate
  , Us = document.createElement("audio")
  , xn = !!(Us.canPlayType && Us.canPlayType("audio/ogg;").replace(/no/, ""));
let Nn = !1;
try {
    const t = document.createElement("canvas").getContext("webgl")
      , e = t.getExtension("WEBGL_debug_renderer_info")
      , s = e && t.getParameter(e.UNMASKED_RENDERER_WEBGL) || "";
    (s.match(/Apple/) && !s.match(/Apple GPU/) || t.getSupportedExtensions().indexOf("WEBGL_compressed_texture_s3tc_srgb") === -1) && (Nn = !0)
} catch {}
const no = Nn
  , ro = "serviceWorker"in navigator
  , Ws = {
    CAN_USE_TRANSFERABLES: Yi,
    IS_APPLE_MX: no,
    IS_CALL_SUPPORTED: Gi,
    IS_CANVAS_FILTER_SUPPORTED: Hi,
    IS_EMOJI_SUPPORTED: Jt,
    IS_GEOLOCATION_SUPPORTED: $i,
    IS_GROUP_CALL_SUPPORTED: zi,
    IS_PARALLAX_SUPPORTED: eo,
    IS_SCREEN_SHARING_SUPPORTED: to,
    IS_TOUCH_SUPPORTED: ge,
    ...Zi,
    IS_VIBRATE_SUPPORTED: so,
    IS_OPUS_SUPPORTED: xn,
    IS_SHARED_WORKER_SUPPORTED: pt,
    IS_WEBP_SUPPORTED: In,
    IS_WEBRTC_SUPPORTED: ys,
    IS_LIVE_STREAM_SUPPORTED: ro,
    IMAGE_MIME_TYPES_SUPPORTED: Ye,
    MEDIA_MIME_TYPES_SUPPORTED: Bn,
    VIDEO_MIME_TYPES_SUPPORTED: bs,
    ...Er
};
function io() {
    const t = document.createElement("input");
    t.type = "time",
    t.value = "15:00",
    t.style.visibility = "hidden",
    document.body.append(t);
    const e = t.offsetWidth;
    return t.remove(),
    e > 110 ? "h12" : "h23"
}
const oo = {
    8: new Uint8Array(1),
    16: new Uint16Array(1),
    32: new Uint32Array(1)
};
function At(t) {
    const e = oo[t];
    return crypto.getRandomValues(e),
    e[0]
}
function bc() {
    return "" + At(32) + At(32) % 16777215
}
const ao = x.version
  , co = x.build
  , js = {
    _: "theme",
    access_hash: "",
    id: "",
    settings: [{
        _: "themeSettings",
        pFlags: {},
        base_theme: {
            _: "baseThemeClassic"
        },
        accent_color: 3379436,
        message_colors: [6072403],
        wallpaper: {
            _: "wallPaper",
            pFlags: {
                default: !0,
                pattern: !0
            },
            access_hash: "",
            document: void 0,
            id: "",
            slug: "pattern",
            settings: {
                _: "wallPaperSettings",
                pFlags: {},
                intensity: 50,
                background_color: 14409147,
                second_background_color: 7054727,
                third_background_color: 14014605,
                fourth_background_color: 8960132
            }
        }
    }, {
        _: "themeSettings",
        pFlags: {},
        base_theme: {
            _: "baseThemeNight"
        },
        accent_color: 8877281,
        message_colors: [8877281],
        wallpaper: {
            _: "wallPaper",
            pFlags: {
                default: !0,
                pattern: !0,
                dark: !0
            },
            access_hash: "",
            document: void 0,
            id: "",
            slug: "pattern",
            settings: {
                _: "wallPaperSettings",
                pFlags: {},
                intensity: -50,
                background_color: 16696470,
                second_background_color: 14511289,
                third_background_color: 9842623,
                fourth_background_color: 5200853
            }
        }
    }],
    slug: "",
    title: "",
    emoticon: "🏠",
    pFlags: {
        default: !0
    }
}
  , Vs = (t,e,s)=>({
    ...js,
    name: t,
    settings: {
        ...js.settings.find(n=>n.base_theme._ === e),
        highlightingColor: s
    }
})
  , G = {
    allDialogsLoaded: {},
    pinnedOrders: {},
    contactsListCachedTime: 0,
    updates: {},
    filtersArr: [],
    maxSeenMsgId: 0,
    stateCreatedTime: Date.now(),
    recentEmoji: [],
    recentCustomEmoji: [],
    topPeersCache: {},
    recentSearch: [],
    version: ao,
    build: co,
    authState: {
        _: ie ? "authStateSignIn" : "authStateSignQr"
    },
    hiddenPinnedMessages: {},
    settings: {
        messagesTextSize: 16,
        distanceUnit: "kilometers",
        sendShortcut: "enter",
        autoDownload: {
            photo: {
                contacts: !0,
                private: !0,
                groups: !0,
                channels: !0
            },
            video: {
                contacts: !0,
                private: !0,
                groups: !0,
                channels: !0
            },
            file: {
                contacts: !0,
                private: !0,
                groups: !0,
                channels: !0
            }
        },
        autoDownloadNew: {
            _: "autoDownloadSettings",
            file_size_max: 3145728,
            pFlags: {
                video_preload_large: !0,
                audio_preload_next: !0
            },
            photo_size_max: 1048576,
            video_size_max: 15728640,
            video_upload_maxbitrate: 100,
            small_queue_active_operations_max: 0,
            large_queue_active_operations_max: 0
        },
        stickers: {
            suggest: "all",
            dynamicPackOrder: !0,
            loop: !0
        },
        emoji: {
            suggest: !0,
            big: !0
        },
        themes: [Vs("day", "baseThemeClassic", "hsla(86.4, 43.846153%, 45.117647%, .4)"), Vs("night", "baseThemeNight", "hsla(299.142857, 44.166666%, 37.470588%, .4)")],
        theme: "system",
        notifications: {
            sound: !1
        },
        timeFormat: io(),
        liteMode: {
            all: !1,
            animations: !1,
            chat: !1,
            chat_background: !1,
            chat_spoilers: !1,
            effects: !1,
            effects_premiumstickers: !1,
            effects_reactions: !1,
            effects_emoji: !1,
            emoji: !1,
            emoji_messages: !1,
            emoji_panel: !1,
            gif: !1,
            stickers: !1,
            stickers_chat: !1,
            stickers_panel: !1,
            video: !1
        },
        savedAsForum: !1
    },
    playbackParams: {
        volume: 1,
        muted: !1,
        playbackRate: 1,
        playbackRates: {
            voice: 1,
            video: 1,
            audio: 1
        },
        loop: !1,
        round: !1
    },
    keepSigned: !0,
    chatContextMenuHintWasShown: !1,
    hideChatJoinRequests: {},
    stateId: At(32),
    notifySettings: {},
    confirmedWebViews: [],
    seenTooltips: {
        storySound: !1
    },
    hiddenSimilarChannels: [],
    appConfig: {},
    accountThemes: {},
    translations: {
        peers: {},
        enabledPeers: {},
        enabled: !0,
        showInMenu: !0,
        doNotTranslate: []
    }
};
function et(t, e) {
    t = t.split(" ", 1)[0],
    e = e.split(" ", 1)[0];
    const s = t.split(".")
      , n = e.split(".");
    for (let r = 0; r < s.length; ++r) {
        const i = +s[r]
          , o = +n[r];
        if (i > o)
            return 1;
        if (i < o)
            return -1
    }
    return 0
}
function uo(t) {
    return typeof t == "object" && t !== null
}
function Un(t, e, s, n, r, i) {
    for (const o in t) {
        const c = i ? `${i}.${o}` : o;
        r?.has(c) || (typeof e[o] != typeof t[o] ? (e[o] = j(t[o]),
        s?.(n || o)) : uo(t[o]) && Un(t[o], e[o], s, n || o, r, c))
    }
}
function lo(t, e, s) {
    const n = performance.now();
    return (s || console).warn(dt(), "start", e),
    t.then(()=>{
        (s || console).warn(dt(), "end", e, performance.now() - n)
    }
    ),
    t
}
function ho(t) {
    return (...e)=>lo(...e, t)
}
const fo = 24 * 60 * 60 * 1e3
  , tt = G.version
  , Oe = G.build
  , st = Object.keys(G)
  , go = ["contactsListCachedTime", "stateCreatedTime", "maxSeenMsgId", "filtersArr"];
async function mo() {
    const t = Q("STATE-LOADER", Es.Error)
      , e = performance.now()
      , s = ho(t)
      , n = st.map(A=>s(_e.get(A), "state " + A)).concat(s(B.get("user_auth"), "auth"), s(B.get("state_id"), "auth"), s(B.get("k_build"), "auth"), s(B.get("auth_key_fingerprint"), "auth"), s(B.get(`dc${x.baseDcId}_auth_key`), "auth")).concat(s(_e.get("user_auth"), "old auth"))
      , r = await Promise.all(n);
    t.warn("promises", performance.now() - e);
    const i = []
      , o = (A,R)=>{
        a[A] = R,
        i.push(A)
    }
      , c = A=>{
        i.length = 0,
        a = A,
        i.push(...Object.keys(a))
    }
    ;
    let a = {};
    for (let A = 0, R = st.length; A < R; ++A) {
        const w = st[A]
          , v = r[A];
        v !== void 0 ? a[w] = v : o(w, j(G[w]))
    }
    r.splice(0, st.length);
    let u = r.shift();
    const l = r.shift()
      , h = r.shift()
      , f = r.shift()
      , g = r.shift()
      , E = r.shift();
    if (!u && E) {
        u = E;
        const A = ["dc", "server_time_offset", "xt_instance"];
        for (let v = 1; v <= 5; ++v)
            A.push(`dc${v}_server_salt`),
            A.push(`dc${v}_auth_key`);
        const R = await Promise.all(A.map(v=>_e.get(v)));
        A.push("user_auth"),
        R.push(typeof u == "number" || typeof u == "string" ? {
            dcID: R[0] || x.baseDcId,
            date: Date.now() / 1e3 | 0,
            id: u.toPeerId(!1)
        } : u);
        const w = {};
        A.forEach((v,d)=>{
            w[v] = R[d]
        }
        ),
        await B.set(w)
    }
    u && (a.authState = {
        _: "authStateSignedIn"
    },
    S.dispatchEvent("user_auth", typeof u == "number" || typeof u == "string" ? {
        dcID: 0,
        date: Date.now() / 1e3 | 0,
        id: u.toPeerId(!1)
    } : u));
    const C = new Set
      , D = A=>{
        A.push("authState", "stateId");
        const R = new Map(A.map(v=>[v, a[v]]));
        a = j(G),
        R.forEach((v,d)=>{
            a[d] = v
        }
        );
        const w = ["chats", "dialogs", "users"];
        for (const v of w)
            C.add(v);
        c(a)
    }
    ;
    if (a.stateId !== l && (l !== void 0 && D([]),
    await B.set({
        state_id: a.stateId
    })),
    g) {
        const A = g.slice(0, 8);
        f ? f !== A && D([]) : D(["settings"]),
        f !== A && await B.set({
            auth_key_fingerprint: A
        })
    }
    const F = Date.now();
    a.stateCreatedTime + fo < F && (De && t("will refresh state", a.stateCreatedTime, F),
    (R=>{
        R.forEach(w=>{
            o(w, j(G[w]))
        }
        )
    }
    )(go));
    const b = a.settings.autoDownload;
    if (b?.private !== void 0) {
        const A = ["contacts", "private", "groups", "channels"];
        ["photo", "video", "file"].forEach(w=>{
            const v = b[w] = {};
            A.forEach(d=>{
                v[d] = b[d]
            }
            )
        }
        ),
        A.forEach(w=>{
            delete b[w]
        }
        ),
        o("settings", a.settings)
    }
    Un(G, a, A=>{
        o(A, a[A])
    }
    , void 0, new Set(["settings.themes"]));
    let k, T;
    if (a.version !== tt || a.build !== Oe) {
        if (a.build < 322 && (o("allDialogsLoaded", j(G.allDialogsLoaded)),
        o("pinnedOrders", j(G.pinnedOrders)),
        o("filtersArr", j(G.filtersArr)),
        C.add("dialogs")),
        et(a.version, "1.7.1") === -1) {
            let A = !1;
            if (et(a.version, "1.3.0") === -1)
                A = !0,
                a.settings.theme = j(G.settings.theme),
                a.settings.themes = j(G.settings.themes);
            else if (et(a.version, "1.7.1") === -1) {
                A = !0;
                const R = a.settings.themes;
                a.settings.themes = j(G.settings.themes);
                try {
                    R.forEach(w=>{
                        const v = w.background;
                        if (!v)
                            return;
                        const d = a.settings.themes.find(p=>p.name === w.name);
                        d.settings.highlightingColor = v.highlightingColor;
                        const m = p=>p && parseInt(p.slice(1), 16)
                          , y = (v.color || "").split(",").map(m);
                        if (v.color && !v.slug)
                            d.settings.wallpaper = {
                                _: "wallPaperNoFile",
                                id: 0,
                                pFlags: {},
                                settings: {
                                    _: "wallPaperSettings",
                                    pFlags: {}
                                }
                            };
                        else {
                            const p = {
                                _: "wallPaper",
                                id: 0,
                                access_hash: 0,
                                slug: v.slug,
                                document: {},
                                pFlags: {},
                                settings: {
                                    _: "wallPaperSettings",
                                    pFlags: {}
                                }
                            }
                              , I = p.settings;
                            d.settings.wallpaper = p,
                            v.slug && !v.color ? I.pFlags.blur = v.blur || void 0 : v.intensity && (I.intensity = v.intensity,
                            p.pFlags.pattern = !0,
                            p.pFlags.dark = v.intensity < 0 || void 0)
                        }
                        if (y.length) {
                            const p = d.settings.wallpaper.settings;
                            p.background_color = y[0],
                            p.second_background_color = y[1],
                            p.third_background_color = y[2],
                            p.fourth_background_color = y[3]
                        }
                    }
                    )
                } catch (w) {
                    console.error("migrating themes error", w)
                }
            }
            A && o("settings", a.settings)
        }
        if (a.build < 309 && (a.settings.liteMode.animations = !a.settings.animationsEnabled,
        a.settings.liteMode.video = !a.settings.autoPlay.videos,
        a.settings.liteMode.gif = !a.settings.autoPlay.gifs),
        a.build < 312 && typeof a.settings.stickers.suggest == "boolean" && (a.settings.stickers.suggest = a.settings.stickers.suggest ? "all" : "none"),
        a.build <= 432) {
            let A = !1;
            try {
                for (const R of a.settings.themes)
                    R.settings.highlightingColor || (R.settings.highlightingColor = R.settings.highlightningColor,
                    delete R.settings.highlightningColor,
                    A = !0)
            } catch {}
            A && o("settings", a.settings)
        }
        a.appConfig = j(G.appConfig),
        et(a.version, tt) !== 0 && (k = tt,
        T = a.version),
        o("version", tt),
        o("build", Oe)
    }
    return h !== Oe && (!h || h < Oe) && B.set({
        k_build: Oe
    }),
    S.settings = a.settings,
    De && t("state res", a, j(a)),
    t.warn("total", performance.now() - e),
    {
        state: a,
        resetStorages: C,
        newVersion: k,
        oldVersion: T,
        pushedKeys: i
    }
}
let Do;
function po() {
    return Do ?? (Do = mo())
}
class Eo {
    constructor() {
        this.sampleRate = 48e3,
        this.tasks = [],
        this.keepAlive = !1,
        this.log = Q("OPUS", Es.Error)
    }
    isPlaySupported() {
        return xn
    }
    loadWavWorker() {
        this.wavWorker || (this.wavWorker = new Worker("waveWorker.min.js"),
        this.wavWorker.addEventListener("message", e=>{
            const s = e.data;
            if (this.log("[WAV] got message:", s),
            s && s.page) {
                const n = s.page;
                this.onTaskEnd(this.tasks.shift(), n)
            }
        }
        ))
    }
    loadWorker() {
        this.worker || (this.worker = new Worker("decoderWorker.min.js"),
        this.worker.addEventListener("message", e=>{
            const s = e.data;
            this.log("[DECODER] got message", s),
            s.type === "done" ? (this.wavWorker.postMessage({
                command: "done"
            }),
            s.waveform && (this.tasks[0].waveform = s.waveform)) : this.wavWorker.postMessage({
                command: "encode",
                buffers: e.data
            }, J ? void 0 : s.map(n=>n.buffer))
        }
        ))
    }
    setKeepAlive(e) {
        this.keepAlive = e,
        this.keepAlive ? (this.loadWorker(),
        this.loadWavWorker()) : this.tasks.length || this.terminateWorkers()
    }
    onTaskEnd(e, s) {
        s ? (clearTimeout(e.timeout),
        e.callback.resolve({
            bytes: s,
            waveform: e.waveform
        })) : e.callback.reject("timeout"),
        this.tasks.length && this.executeNewTask(this.tasks[0]),
        this.terminateWorkers()
    }
    terminateWorkers(e=!1) {
        (this.keepAlive || this.tasks.length) && !e || (this.worker && (this.worker.terminate(),
        this.worker = null),
        this.wavWorker && (this.wavWorker.terminate(),
        this.wavWorker = null))
    }
    executeNewTask(e) {
        this.worker.postMessage({
            command: "init",
            decoderSampleRate: this.sampleRate,
            outputBufferSampleRate: this.sampleRate
        }),
        this.wavWorker.postMessage({
            command: "init",
            wavBitDepth: 16,
            wavSampleRate: this.sampleRate
        }),
        this.log("[DECODER] send decode"),
        this.worker.postMessage({
            command: "decode",
            pages: e.pages,
            waveform: e.withWaveform
        }, J ? void 0 : [e.pages.buffer]),
        e.timeout = window.setTimeout(()=>{
            this.log.error("decode timeout"),
            this.terminateWorkers(!0),
            this.tasks.length && (this.loadWorker(),
            this.loadWavWorker()),
            this.onTaskEnd(this.tasks.shift())
        }
        , 1e4)
    }
    pushDecodeTask(e, s) {
        return new Promise((n,r)=>{
            const i = {
                pages: e,
                withWaveform: s,
                callback: {
                    resolve: n,
                    reject: r
                },
                timeout: 0
            };
            this.loadWorker(),
            this.loadWavWorker(),
            this.tasks.push(i) === 1 && this.executeNewTask(i)
        }
        )
    }
    async decode(e, s=!1) {
        return this.pushDecodeTask(e, s).then(async n=>{
            const r = new Blob([n.bytes],{
                type: "audio/wav"
            });
            return {
                url: await Xe.invoke("createObjectURL", r),
                waveform: n.waveform
            }
        }
        )
    }
}
const Wn = new Eo;
_.opusDecodeController = Wn;
class Fo extends Fs {
    constructor() {
        super("CRYPTO"),
        this.lastIndex = -1
    }
    invokeCryptoNew({method: e, args: s, transfer: n}) {
        const r = {
            method: e,
            args: s
        }
          , i = this.listeners.invoke;
        if (i?.size) {
            let c = i.values().next().value.callback(r);
            return !pe && !(c instanceof Promise) && (c = Promise.resolve(c)),
            c
        }
        const o = e === "aes-encrypt" || e === "aes-decrypt" ? this.lastIndex = (this.lastIndex + 1) % this.sendPorts.length : 0;
        return this.invoke("invoke", r, void 0, this.sendPorts[o], n)
    }
    invokeCrypto(e, ...s) {
        return this.invokeCryptoNew({
            method: e,
            args: s
        })
    }
}
const at = new Fo;
_ && (_.cryptoMessagePort = at);
function vo(t) {
    return Array.isArray(t) ? t : [t]
}
function Ao(t) {
    return ["image/jpeg", "image/png", "image/gif", "image/svg+xml", "image/webp", "image/bmp", "image/avif", "image/jxl", "video/mp4", "video/webm", "video/quicktime", "audio/ogg", "audio/mpeg", "audio/mp4", "audio/wav", "application/json", "application/pdf"].indexOf(t) === -1 ? "application/octet-stream" : t
}
function jn(t, e="") {
    t = vo(t);
    const s = Ao(e);
    return new Blob(t,{
        type: s
    })
}
class yo {
    constructor(e, s, n) {
        this.mimeType = e,
        this.size = s,
        this.saveFileCallback = n,
        this.bytes = new Uint8Array(s)
    }
    async write(e, s) {
        const n = s + e.byteLength;
        if (n > this.bytes.byteLength) {
            const r = new Uint8Array(n);
            r.set(this.bytes, 0),
            this.bytes = r
        }
        this.bytes.set(e, s)
    }
    truncate() {
        this.bytes = new Uint8Array
    }
    trim(e) {
        this.bytes = this.bytes.slice(0, e)
    }
    finalize(e=!0) {
        const s = jn(this.bytes, this.mimeType);
        return e && this.saveFileCallback && this.saveFileCallback(s),
        s
    }
    getParts() {
        return this.bytes
    }
    replaceParts(e) {
        this.bytes = e
    }
}
const Ce = class Ce {
    constructor(e) {
        this.dbName = e,
        this.useStorage = !0,
        H.test && (this.dbName += "_test"),
        Ce.STORAGES.length && (this.useStorage = Ce.STORAGES[0].useStorage),
        this.openDatabase(),
        Ce.STORAGES.push(this)
    }
    openDatabase() {
        return this.openDbPromise ?? (this.openDbPromise = caches.open(this.dbName))
    }
    delete(e) {
        return this.timeoutOperation(s=>s.delete("/" + e))
    }
    deleteAll() {
        return caches.delete(this.dbName)
    }
    get(e) {
        return this.timeoutOperation(s=>s.match("/" + e))
    }
    save(e, s) {
        return this.timeoutOperation(n=>n.put("/" + e, s))
    }
    getFile(e, s="blob") {
        return this.get(e).then(n=>{
            if (!n)
                throw me("NO_ENTRY_FOUND");
            return n[s]()
        }
        )
    }
    saveFile(e, s) {
        s instanceof Blob || (s = jn(s));
        const n = new Response(s,{
            headers: {
                "Content-Length": "" + s.size
            }
        });
        return this.save(e, n).then(()=>s)
    }
    timeoutOperation(e) {
        return this.useStorage ? new Promise(async(s,n)=>{
            let r = !1;
            const i = setTimeout(()=>{
                n(),
                r = !0
            }
            , 15e3);
            try {
                const o = await this.openDatabase();
                if (!o)
                    throw this.useStorage = !1,
                    this.openDbPromise = void 0,
                    "no cache?";
                const c = await e(o);
                if (r)
                    return;
                s(c)
            } catch (o) {
                n(o)
            }
            clearTimeout(i)
        }
        ) : Promise.reject(me("STORAGE_OFFLINE"))
    }
    prepareWriting(e, s, n) {
        return {
            deferred: se(),
            getWriter: ()=>new yo(n,s,i=>this.saveFile(e, i).catch(()=>i))
        }
    }
    static toggleStorage(e, s) {
        return Promise.all(this.STORAGES.map(n=>{
            if (n.useStorage = e,
            !!s && !e)
                return n.deleteAll()
        }
        ))
    }
}
;
Ce.STORAGES = [];
let os = Ce;
function Gs(t, e) {
    return Promise.all([Ve.toggleStorage(t, e), os.toggleStorage(t, e), B.toggleStorage(t, e)]).then(lt, lt)
}
class So extends Fs {
    constructor() {
        super("SERVICE"),
        _ && (_.serviceMessagePort = this)
    }
}
const bo = "" + new URL("sw-CYMbYFsg.js",import.meta.url).href
  , ws = "";
function Ys(...t) {
    return t.join(ws)
}
function wo(t) {
    return t.split(ws)
}
function Co(t, e, s, n) {
    const r = e.split(ws)
      , i = r.length;
    let o = t;
    for (let a = 0; a < i - 1; ++a) {
        const u = r[a];
        o = o[u] ?? (o[u] = {})
    }
    const c = r[i - 1];
    s === void 0 && n ? delete o[c] : o[c] = s
}
const fe = "_";
function _o(t, e) {
    const s = ""
      , n = s[s.length - 1] || "";
    let r;
    switch (t._) {
    case "inputPhotoFileLocation":
        {
            r = ["photo", s[0], t.id, t.thumb_size].filter(Boolean).join(fe);
            break
        }
    case "inputDocumentFileLocation":
        {
            r = ["document", s[0], t.id, t.thumb_size].filter(Boolean).join(fe);
            break
        }
    case "inputPeerPhotoFileLocation":
        r = ["peerPhoto", t.photo_id, t.pFlags.big ? "big" : "small"].join(fe);
        break;
    case "inputStickerSetThumb":
        {
            r = ["stickerSetThumb", t.stickerset.id || t.stickerset.short_name || t.stickerset.emoticon || t.stickerset._, t.thumb_version].join(fe);
            break
        }
    case "inputFileLocation":
        {
            r = [t.volume_id, t.local_id].join(fe);
            break
        }
    case "inputWebFileLocation":
        {
            r = ["webFile", t.url].join(fe);
            break
        }
    case "inputWebFileGeoPointLocation":
        {
            const i = t.geo_point;
            r = ["geoPoint", i.lat, i.long, t.w, t.h, t.zoom, t.scale].join(fe);
            break
        }
    default:
        {
            console.error("Unrecognized location:", t),
            r = "";
            break
        }
    }
    return r + (e?.downloadId ? "_download" : "") + (n && "." + n)
}
function Po(t) {
    return t?._.includes("inputWebFile")
}
function ko(t) {
    return Po(t) ? _o(t) : t._ + (t.id ?? t.url)
}
function To(t) {
    return {
        downloaded: 0,
        url: "",
        type: t
    }
}
function Mo(t, e) {
    return t + (e !== void 0 ? "-" + e : "")
}
function Vt(t, e) {
    return t instanceof Promise ? t.then(e) : e(t)
}
function Hs(t) {
    return typeof t == "number" && t < ht
}
const as = Symbol("store-raw")
  , Pe = Symbol("store-node")
  , te = Symbol("store-has")
  , Vn = Symbol("store-self");
function Gn(t) {
    let e = t[X];
    if (!e && (Object.defineProperty(t, X, {
        value: e = new Proxy(t,Oo)
    }),
    !Array.isArray(t))) {
        const s = Object.keys(t)
          , n = Object.getOwnPropertyDescriptors(t);
        for (let r = 0, i = s.length; r < i; r++) {
            const o = s[r];
            n[o].get && Object.defineProperty(t, o, {
                enumerable: n[o].enumerable,
                get: n[o].get.bind(e)
            })
        }
    }
    return e
}
function he(t) {
    let e;
    return t != null && typeof t == "object" && (t[X] || !(e = Object.getPrototypeOf(t)) || e === Object.prototype || Array.isArray(t))
}
function Ee(t, e=new Set) {
    let s, n, r, i;
    if (s = t != null && t[as])
        return s;
    if (!he(t) || e.has(t))
        return t;
    if (Array.isArray(t)) {
        Object.isFrozen(t) ? t = t.slice(0) : e.add(t);
        for (let o = 0, c = t.length; o < c; o++)
            r = t[o],
            (n = Ee(r, e)) !== r && (t[o] = n)
    } else {
        Object.isFrozen(t) ? t = Object.assign({}, t) : e.add(t);
        const o = Object.keys(t)
          , c = Object.getOwnPropertyDescriptors(t);
        for (let a = 0, u = o.length; a < u; a++)
            i = o[a],
            !c[i].get && (r = t[i],
            (n = Ee(r, e)) !== r && (t[i] = n))
    }
    return t
}
function yt(t, e) {
    let s = t[e];
    return s || Object.defineProperty(t, e, {
        value: s = Object.create(null)
    }),
    s
}
function He(t, e, s) {
    if (t[e])
        return t[e];
    const [n,r] = ne(s, {
        equals: !1,
        internal: !0
    });
    return n.$ = r,
    t[e] = n
}
function Lo(t, e) {
    const s = Reflect.getOwnPropertyDescriptor(t, e);
    return !s || s.get || !s.configurable || e === X || e === Pe || (delete s.value,
    delete s.writable,
    s.get = ()=>t[X][e]),
    s
}
function Yn(t) {
    ts() && He(yt(t, Pe), Vn)()
}
function Io(t) {
    return Yn(t),
    Reflect.ownKeys(t)
}
const Oo = {
    get(t, e, s) {
        if (e === as)
            return t;
        if (e === X)
            return s;
        if (e === es)
            return Yn(t),
            s;
        const n = yt(t, Pe)
          , r = n[e];
        let i = r ? r() : t[e];
        if (e === Pe || e === te || e === "__proto__")
            return i;
        if (!r) {
            const o = Object.getOwnPropertyDescriptor(t, e);
            ts() && (typeof i != "function" || t.hasOwnProperty(e)) && !(o && o.get) && (i = He(n, e, i)())
        }
        return he(i) ? Gn(i) : i
    },
    has(t, e) {
        return e === as || e === X || e === es || e === Pe || e === te || e === "__proto__" ? !0 : (ts() && He(yt(t, te), e)(),
        e in t)
    },
    set() {
        return !0
    },
    deleteProperty() {
        return !0
    },
    ownKeys: Io,
    getOwnPropertyDescriptor: Lo
};
function z(t, e, s, n=!1) {
    if (!n && t[e] === s)
        return;
    const r = t[e]
      , i = t.length;
    s === void 0 ? (delete t[e],
    t[te] && t[te][e] && r !== void 0 && t[te][e].$()) : (t[e] = s,
    t[te] && t[te][e] && r === void 0 && t[te][e].$());
    let o = yt(t, Pe), c;
    if ((c = He(o, e, r)) && c.$(()=>s),
    Array.isArray(t) && t.length !== i) {
        for (let a = t.length; a < i; a++)
            (c = o[a]) && c.$();
        (c = He(o, "length", i)) && c.$(t.length)
    }
    (c = o[Vn]) && c.$()
}
function Hn(t, e) {
    const s = Object.keys(e);
    for (let n = 0; n < s.length; n += 1) {
        const r = s[n];
        z(t, r, e[r])
    }
}
function Ro(t, e) {
    if (typeof e == "function" && (e = e(t)),
    e = Ee(e),
    Array.isArray(e)) {
        if (t === e)
            return;
        let s = 0
          , n = e.length;
        for (; s < n; s++) {
            const r = e[s];
            t[s] !== r && z(t, s, r)
        }
        z(t, "length", n)
    } else
        Hn(t, e)
}
function Ne(t, e, s=[]) {
    let n, r = t;
    if (e.length > 1) {
        n = e.shift();
        const o = typeof n
          , c = Array.isArray(t);
        if (Array.isArray(n)) {
            for (let a = 0; a < n.length; a++)
                Ne(t, [n[a]].concat(e), s);
            return
        } else if (c && o === "function") {
            for (let a = 0; a < t.length; a++)
                n(t[a], a) && Ne(t, [a].concat(e), s);
            return
        } else if (c && o === "object") {
            const {from: a=0, to: u=t.length - 1, by: l=1} = n;
            for (let h = a; h <= u; h += l)
                Ne(t, [h].concat(e), s);
            return
        } else if (e.length > 1) {
            Ne(t[n], e, [n].concat(s));
            return
        }
        r = t[n],
        s = [n].concat(s)
    }
    let i = e[0];
    typeof i == "function" && (i = i(r, s),
    i === r) || n === void 0 && i == null || (i = Ee(i),
    n === void 0 || he(r) && he(i) && !Array.isArray(i) ? Hn(r, i) : z(t, n, i))
}
function $n(...[t,e]) {
    const s = Ee(t || {})
      , n = Array.isArray(s)
      , r = Gn(s);
    function i(...o) {
        oi(()=>{
            n && o.length === 1 ? Ro(s, o[0]) : Ne(s, o)
        }
        )
    }
    return [r, i]
}
const cs = Symbol("store-root");
function be(t, e, s, n, r) {
    const i = e[s];
    if (t === i)
        return;
    const o = Array.isArray(t);
    if (s !== cs && (!he(t) || !he(i) || o !== Array.isArray(i) || r && t[r] !== i[r])) {
        z(e, s, t);
        return
    }
    if (o) {
        if (t.length && i.length && (!n || r && t[0] && t[0][r] != null)) {
            let u, l, h, f, g, E, C, D;
            for (h = 0,
            f = Math.min(i.length, t.length); h < f && (i[h] === t[h] || r && i[h] && t[h] && i[h][r] === t[h][r]); h++)
                be(t[h], i, h, n, r);
            const F = new Array(t.length)
              , b = new Map;
            for (f = i.length - 1,
            g = t.length - 1; f >= h && g >= h && (i[f] === t[g] || r && i[h] && t[h] && i[f][r] === t[g][r]); f--,
            g--)
                F[g] = i[f];
            if (h > g || h > f) {
                for (l = h; l <= g; l++)
                    z(i, l, t[l]);
                for (; l < t.length; l++)
                    z(i, l, F[l]),
                    be(t[l], i, l, n, r);
                i.length > t.length && z(i, "length", t.length);
                return
            }
            for (C = new Array(g + 1),
            l = g; l >= h; l--)
                E = t[l],
                D = r && E ? E[r] : E,
                u = b.get(D),
                C[l] = u === void 0 ? -1 : u,
                b.set(D, l);
            for (u = h; u <= f; u++)
                E = i[u],
                D = r && E ? E[r] : E,
                l = b.get(D),
                l !== void 0 && l !== -1 && (F[l] = i[u],
                l = C[l],
                b.set(D, l));
            for (l = h; l < t.length; l++)
                l in F ? (z(i, l, F[l]),
                be(t[l], i, l, n, r)) : z(i, l, t[l])
        } else
            for (let u = 0, l = t.length; u < l; u++)
                be(t[u], i, u, n, r);
        i.length > t.length && z(i, "length", t.length);
        return
    }
    const c = Object.keys(t);
    for (let u = 0, l = c.length; u < l; u++)
        be(t[c[u]], i, c[u], n, r);
    const a = Object.keys(i);
    for (let u = 0, l = a.length; u < l; u++)
        t[a[u]] === void 0 && z(i, a[u], void 0)
}
function zn(t, e={}) {
    const {merge: s, key: n="id"} = e
      , r = Ee(t);
    return i=>{
        if (!he(i) || !he(r))
            return r;
        const o = be(r, {
            [cs]: i
        }, cs, s, n);
        return o === void 0 ? i : o
    }
}
const [Kn,us] = it(()=>$n({}))
  , Bo = (...t)=>{
    const e = t[0];
    us(...t),
    S.managers.appStateManager.setByKey(e, Ee(Kn[e]))
}
  , $s = (t,e)=>{
    if (typeof t == "object") {
        us(t);
        return
    }
    us(t, zn(e))
}
  , wc = ()=>[Kn, Bo];
function xo(t, e="asc") {
    if (!t)
        return [];
    const s = t instanceof Map ? [...t.keys()] : Object.keys(t).map(n=>+n);
    return e === "asc" ? s.sort((n,r)=>n - r) : s.sort((n,r)=>r - n)
}
const [qn,Jn] = $n({});
function Xn(t, e) {
    return typeof t == "function" ? ue(()=>e(t())) : e(t)
}
function Cc(t) {
    return Xn(t, e=>qn[e])
}
function _c(t) {
    return Xn(t, e=>qn[e?.toPeerId(!0)])
}
function No(t, e) {
    Jn(t, zn(e))
}
function Uo(t) {
    Jn(t)
}
class Wo extends qe {
    constructor() {
        super(),
        this.onMirrorTask = e=>{
            var o;
            const {name: s, key: n, value: r} = e;
            if (this.processMirrorTaskMap[s]?.(e),
            !e.hasOwnProperty("key")) {
                this.mirrors[s] = r;
                return
            }
            const i = (o = this.mirrors)[s] ?? (o[s] = {});
            Co(i, n, r, !0)
        }
        ,
        this.mirrors = {
            state: void 0,
            thumbs: {},
            stickerThumbs: {},
            availableReactions: void 0,
            messages: {},
            groupedMessages: {},
            peers: {},
            avatars: {}
        },
        this.processMirrorTaskMap = {
            messages: e=>{
                var o;
                const s = e.value;
                let n, r;
                if (s)
                    n = s.mid,
                    r = s.grouped_id;
                else {
                    const [c,a] = wo(e.key);
                    n = +a;
                    const u = this.mirrors.messages[c]?.[n];
                    if (!u)
                        return;
                    r = u.grouped_id
                }
                if (!r)
                    return;
                const i = (o = this.mirrors.groupedMessages)[r] ?? (o[r] = new Map);
                s ? i.set(n, s) : (i.delete(n),
                i.size || delete this.mirrors.groupedMessages[r])
            }
            ,
            state: e=>{
                e.key ? $s(e.key, e.value) : console.error(e)
            }
            ,
            peers: e=>{
                e.key ? No(e.key.toPeerId(), e.value) : Uo(e.value)
            }
        },
        this.tabState = {
            chatPeerIds: [],
            idleStartTime: 0
        },
        this.log("constructor"),
        this.registerWorker(),
        this.registerServiceWorker(),
        this.registerCryptoWorker(),
        this.addMultipleEventsListeners({
            convertWebp: ({fileName: e, bytes: s})=>kn.convert(e, s),
            convertOpus: ({fileName: e, bytes: s})=>Wn.pushDecodeTask(s, !1).then(n=>n.bytes),
            event: ({name: e, args: s})=>{
                S.dispatchEventSingle(e, ...s)
            }
            ,
            localStorageProxy: e=>{
                const s = e;
                return B[s.type](...s.args)
            }
            ,
            mirror: this.onMirrorTask,
            receivedServiceMessagePort: ()=>{
                this.log.warn("mtproto worker received service message port")
            }
        }),
        S.addEventListener("language_change", e=>{
            S.managers.networkerFactory.setLanguage(e),
            S.managers.appAttachMenuBotsManager.onLanguageChange()
        }
        ),
        window.addEventListener("online", ()=>{
            S.managers.networkerFactory.forceReconnectTimeout()
        }
        ),
        S.addEventListener("logging_out", ()=>{
            const e = ["cachedFiles", "cachedStreamChunks"];
            Promise.all([Gs(!1, !0), B.clear(), Promise.race([As.setAuthorized(!1), ps(3e3)]), vt.forceUnsubscribe(), Promise.all(e.map(s=>caches.delete(s)))]).finally(()=>{
                Tn.reload()
            }
            )
        }
        ),
        Et.addEventListener("change", e=>{
            this.updateTabStateIdle(e)
        }
        ),
        this.updateTabStateIdle(Et.isIdle)
    }
    sendEnvironment() {
        this.log("Passing environment:", Ws),
        this.invoke("environment", Ws)
    }
    pingServiceWorkerWithIframe() {
        if (this.pingServiceWorkerPromise)
            return this.pingServiceWorkerPromise;
        const e = this.pingServiceWorkerPromise = se()
          , s = document.createElement("iframe");
        s.hidden = !0;
        const n = ()=>{
            clearTimeout(o),
            setTimeout(()=>{
                this.pingServiceWorkerPromise = void 0
            }
            , 1e4),
            s.removeEventListener("load", r),
            s.removeEventListener("error", i),
            s.remove()
        }
          , r = ()=>{
            n(),
            e.resolve()
        }
          , i = ()=>{
            n(),
            e.reject()
        }
        ;
        s.addEventListener("load", r),
        s.addEventListener("error", i),
        s.src = "ping/" + (Math.random() * 4294967295 | 0) + ".nocache",
        document.body.append(s);
        const o = window.setTimeout(i, 1500);
        return e
    }
    attachServiceWorker(e) {
        if (this.lastServiceWorker === e) {
            this.log.warn("trying to attach same service worker");
            return
        }
        this.lastServiceWorker && this.serviceMessagePort.detachPort(this.lastServiceWorker),
        this.serviceMessagePort.attachSendPort(this.lastServiceWorker = e),
        this.serviceMessagePort.invokeVoid("hello", void 0)
    }
    _registerServiceWorker() {
        navigator.serviceWorker.register(bo, {
            type: "module",
            scope: "./"
        }).then(e=>{
            this.log("SW registered", e);
            const s = new URL(window.location.href)
              , n = "swfix"
              , r = +s.searchParams.get(n) || 0;
            if (e.active && !navigator.serviceWorker.controller) {
                if (r >= 3)
                    throw new Error("no controller");
                return e.unregister().then(()=>{
                    s.searchParams.set(n, "" + (r + 1)),
                    window.location.href = s.toString()
                }
                )
            }
            r && (s.searchParams.delete(n),
            history.pushState(void 0, "", s)),
            (e.installing || e.waiting || e.active).addEventListener("statechange", c=>{
                this.log("SW statechange", c)
            }
            );
            const o = navigator.serviceWorker.controller || e.installing || e.waiting || e.active;
            this.attachServiceWorker(o)
        }
        ).catch(e=>{
            this.log.error("SW registration failed!", e),
            this.invokeVoid("serviceWorkerOnline", !1)
        }
        )
    }
    registerServiceWorker() {
        if (!("serviceWorker"in navigator))
            return;
        this.serviceMessagePort = vt.serviceMessagePort = new So;
        const e = navigator.serviceWorker;
        this._registerServiceWorker(),
        e.addEventListener("controllerchange", ()=>{
            this.log.warn("controllerchange");
            const s = e.controller;
            this.attachServiceWorker(s),
            s.addEventListener("error", n=>{
                this.log.error("controller error:", n)
            }
            )
        }
        ),
        this.serviceMessagePort.attachListenPort(e),
        this.serviceMessagePort.addMultipleEventsListeners({
            port: (s,n,r)=>{
                this.log.warn("got service worker port"),
                this.invokeVoid("serviceWorkerPort", void 0, void 0, [r.ports[0]])
            }
            ,
            hello: (s,n)=>{
                this.serviceMessagePort.resendLockTask(n)
            }
            ,
            share: s=>{
                this.log("will try to share something"),
                this.share = s
            }
        }),
        e.addEventListener("messageerror", s=>{
            this.log.error("SW messageerror:", s)
        }
        )
    }
    async registerCryptoWorker() {
        const e = g=>fetch(g).then(E=>E.text()).then(E=>{
            const C = location.pathname.split("/");
            C[C.length - 1] = "";
            const D = location.origin + C.join("/");
            return E = E.replace(/(import (?:.+? from )?['"])\//g, "$1" + D),
            new Blob([E],{
                type: "application/javascript"
            })
        }
        )
          , s = {
            construct(g, E) {
                return {
                    url: un(E[0]).toString()
                }
            }
        }
          , n = [Worker, typeof SharedWorker < "u" && SharedWorker].filter(Boolean);
        n.forEach(g=>window[g.name] = new Proxy(g,s));
        const r = new Worker(new URL("" + new URL("crypto.worker-CfCshcpI.js",import.meta.url).href,import.meta.url),{
            type: "module"
        });
        n.forEach(g=>window[g.name] = g);
        const i = r.url
          , o = g=>new a(g,{
            type: "module"
        })
          , c = g=>this.attachWorkerToPort(g, at, "crypto")
          , a = pt ? SharedWorker : Worker;
        at.addEventListener("port", (g,E,C)=>{
            this.invokeVoid("cryptoPort", void 0, void 0, [C.ports[0]])
        }
        );
        const u = o(i);
        c(u);
        const l = await e(i);
        (await this.invoke("createProxyWorkerURLs", {
            originalUrl: i,
            blob: l
        })).slice(1).map(o).forEach(c)
    }
    registerWorker() {
        let e;
        pt ? e = new SharedWorker(new URL("" + new URL("mtproto.worker-CNB1eRAp.js",import.meta.url).href,import.meta.url),{
            type: "module"
        }) : e = new Worker(new URL("" + new URL("mtproto.worker-CNB1eRAp.js",import.meta.url).href,import.meta.url),{
            type: "module"
        }),
        this.onWorkerFirstMessage(e)
    }
    attachWorkerToPort(e, s, n) {
        const r = e.port || e;
        s.attachPort(r),
        e.addEventListener("error", i=>{
            this.log.error(n, "worker error", i)
        }
        )
    }
    onWorkerFirstMessage(e) {
        this.log("set webWorker"),
        this.attachWorkerToPort(e, this, "mtproto")
    }
    loadState() {
        return Promise.all([po().then(e=>(this.newVersion = e.newVersion,
        this.oldVersion = e.oldVersion,
        this.mirrors.state = e.state,
        $s(e.state),
        e))])
    }
    sendState() {
        return this.loadState().then(e=>{
            const [s] = e;
            return this.invoke("state", {
                ...s,
                userId: S.myId.toUserId()
            }),
            e
        }
        )
    }
    invokeCrypto(e, ...s) {
        return at.invokeCrypto(e, ...s)
    }
    async toggleStorages(e, s) {
        await Gs(e, s),
        this.invoke("toggleStorages", {
            enabled: e,
            clearWrite: s
        }),
        this.serviceMessagePort?.invokeVoid("toggleStorages", {
            enabled: e,
            clearWrite: s
        })
    }
    async getMirror(e) {
        return this.mirrors[e]
    }
    getState() {
        return this.getMirror("state")
    }
    getCacheContext(e, s=Pr, n=ko(e)) {
        return this.mirrors.thumbs[n]?.[s] || To(s)
    }
    getStickerCachedThumb(e, s) {
        const n = Mo(e, s);
        return this.mirrors.stickerThumbs[n]
    }
    getAvailableReactions() {
        var e;
        return (e = this.mirrors).availableReactions || (e.availableReactions = S.managers.appReactionsManager.getAvailableReactions())
    }
    getReaction(e) {
        return Vt(this.getAvailableReactions(), s=>s.find(n=>n.reaction === e))
    }
    getMessageFromStorage(e, s) {
        return e.endsWith("history") && Hs(s) && (e = this.getGlobalHistoryMessagesStorage()),
        this.mirrors.messages[e]?.[s]
    }
    getGroupsFirstMessage(e) {
        if (!e?.grouped_id)
            return e;
        const s = this.mirrors.groupedMessages[e.grouped_id];
        let n = Number.MAX_SAFE_INTEGER;
        for (const [r,i] of s)
            i.mid < n && (n = i.mid);
        return s.get(n)
    }
    getMidsByGroupedId(e, s="asc") {
        return xo(this.mirrors.groupedMessages[e], s)
    }
    getMessagesByGroupedId(e) {
        const s = this.getMidsByGroupedId(e, "asc")
          , n = this.mirrors.groupedMessages[e];
        return s.map(r=>n.get(r))
    }
    getHistoryMessagesStorage(e) {
        return `${e}_history`
    }
    getGlobalHistoryMessagesStorage() {
        return this.getHistoryMessagesStorage(ln)
    }
    getMessageById(e) {
        if (Hs(e))
            return this.getMessageFromStorage(this.getGlobalHistoryMessagesStorage(), e)
    }
    getMessageByPeer(e, s) {
        return e ? this.getMessageFromStorage(this.getHistoryMessagesStorage(e), s) : this.getMessageById(s)
    }
    getPeer(e) {
        return this.mirrors.peers[e]
    }
    getUser(e) {
        return this.mirrors.peers[e.toPeerId(!1)]
    }
    getChat(e) {
        return this.mirrors.peers[e.toPeerId(!0)]
    }
    isForum(e) {
        return !!this.getPeer(e)?.pFlags?.forum
    }
    isAvatarCached(e, s) {
        const n = this.mirrors.avatars[e];
        return s === void 0 ? !!n : !!(n && n[s] && !(n[s]instanceof Promise))
    }
    loadAvatar(e, s, n) {
        var i;
        const r = (i = this.mirrors.avatars)[e] ?? (i[e] = {});
        return r[n] ?? (r[n] = S.managers.appAvatarsManager.loadAvatar(e, s, n))
    }
    getAppConfig(e) {
        if (e && (this.appConfig = void 0),
        !this.appConfig) {
            const s = S.managers.apiManager.getAppConfig().then(n=>(this.appConfig === s && (this.appConfig = n),
            n));
            return this.appConfig = s
        }
        return this.appConfig
    }
    isPremiumFeaturesHidden() {
        return Vt(this.isPremiumPurchaseBlocked(), e=>e && !S.premium)
    }
    isPremiumPurchaseBlocked() {
        return Vt(this.getAppConfig(), e=>!!e.premium_purchase_blocked)
    }
    updateTabState(e, s) {
        this.tabState[e] = s,
        this.invokeVoid("tabState", this.tabState)
    }
    updateTabStateIdle(e) {
        this.updateTabState("idleStartTime", e ? Date.now() : 0)
    }
}
const Zn = new Wo;
_.apiManagerProxy = Zn;
const Xe = Zn
  , jo = {};
function Vo(t, e) {
    return new Proxy({},{
        get: (n,r,i)=>(...o)=>{
            const c = Xe.invoke("manager", {
                name: t,
                method: r,
                args: o
            }, e);
            return De && jo[t]?.has(r) && console.warn("manager request", t, r, o, e),
            c
        }
    })
}
function zs(t, e) {
    return new Proxy(t,{
        get: (s,n,r)=>s[n] ?? (s[n] = Vo(n, e))
    })
}
let Re;
function Go() {
    return Re || (Re = zs({}, !1),
    Re.acknowledged = zs({}, !0),
    Re)
}
function Qn(t, e, s) {
    return Math.min(s, Math.max(e, t))
}
function ce(t, e, s) {
    t /= 255,
    e /= 255,
    s /= 255;
    const n = Math.max(t, e, s)
      , r = n - Math.min(t, e, s)
      , i = r && (n === t ? (e - s) / r : n == e ? 2 + (s - t) / r : 4 + (t - e) / r);
    return [60 * (i < 0 ? i + 6 : i), n && r / n, n]
}
function Cs(t, e, s) {
    const n = (r,i=(r + t / 60) % 6)=>Math.round((s - s * e * Math.max(Math.min(i, 4 - i, 1), 0)) * 255);
    return [n(5), n(3), n(1)]
}
function ls(t, e, s, n=1) {
    t /= 255,
    e /= 255,
    s /= 255;
    const r = Math.max(t, e, s)
      , i = Math.min(t, e, s);
    let o, c;
    const a = (r + i) / 2;
    if (r === i)
        o = c = 0;
    else {
        const u = r - i;
        switch (c = a > .5 ? u / (2 - r - i) : u / (r + i),
        r) {
        case t:
            o = (e - s) / u + (e < s ? 6 : 0);
            break;
        case e:
            o = (s - t) / u + 2;
            break;
        case s:
            o = (t - e) / u + 4;
            break
        }
        o /= 6
    }
    return {
        h: o * 360,
        s: c * 100,
        l: a * 100,
        a: n
    }
}
function Pc(t) {
    return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`
}
function er(t, e, s, n) {
    t /= 360,
    e /= 100,
    s /= 100;
    let r, i, o;
    if (e === 0)
        r = i = o = s;
    else {
        const c = function(h, f, g) {
            return g < 0 && (g += 1),
            g > 1 && (g -= 1),
            g < .16666666666666666 ? h + (f - h) * 6 * g : g < .5 ? f : g < .6666666666666666 ? h + (f - h) * (.6666666666666666 - g) * 6 : h
        }
          , a = s < .5 ? s * (1 + e) : s + e - s * e
          , u = 2 * s - a;
        r = c(u, a, t + 1 / 3),
        i = c(u, a, t),
        o = c(u, a, t - 1 / 3)
    }
    return [r, i, o, n].map(c=>Math.round(c * 255))
}
function tr(t) {
    const e = t.slice(5, -1).split(", ")
      , s = +e.pop()
      , n = e.map(r=>r.endsWith("%") ? +r.slice(0, -1) : +r);
    return er(n[0], n[1], n[2], s)
}
function sr(t) {
    const e = []
      , s = t[0] === "#" ? 1 : 0;
    if (t.length === 5 + s && (t = (s ? "#" : "") + "0" + t.slice(s)),
    t.length === 3 + s)
        for (let n = s; n < t.length; ++n)
            e.push(parseInt(t[n] + t[n], 16));
    else if (t.length === 4 + s) {
        for (let n = s; n < t.length - 1; ++n)
            e.push(parseInt(t[n] + t[n], 16));
        e.push(parseInt(t[t.length - 1], 16))
    } else
        for (let n = s; n < t.length; n += 2)
            e.push(parseInt(t.slice(n, n + 2), 16));
    return e
}
function ae(t) {
    return sr(t.slice(0, 7))
}
function kc(t) {
    const e = sr(t);
    return ls(e[0], e[1], e[2], e[3])
}
function Ue(t) {
    return "#" + t.map(e=>("0" + e.toString(16)).slice(-2)).join("")
}
function Yo(t) {
    return Ue(tr(t))
}
function Ho(t) {
    return Yo(t).slice(0, -2)
}
function Gt(t, e, s) {
    const n = new Array(3);
    for (let r = 0; r < 3; ++r) {
        const i = t[r]
          , o = e[r];
        n[r] = Math.floor(o + (i - o) * s)
    }
    return n
}
function Ks(t) {
    return (t[0] * .2126 + t[1] * .7152 + t[2] * .0722) / 255
}
function $o(t, e) {
    return t.map((s,n)=>Math.round((s + e[n]) / 2))
}
function zo(t, e, s) {
    const n = ce(...e)
      , r = ce(...s)
      , i = Math.min(1.5 * n[1] / t[1], 1);
    return n[0] = Math.min(360, r[0] - n[0] + t[0]),
    n[1] = Math.min(1, r[1] * t[1] / n[1]),
    n[2] = Math.min(1, (r[2] / n[2] + i - 1) * t[2] / i),
    n[2] < .3 ? s : Cs(...n)
}
function Ko(t, e, s, n) {
    const r = ce(...s);
    if (Math.min(Math.abs(r[0] - t[0]), Math.abs(r[0] - t[0] - 360)) > 30)
        return s;
    const o = t[1] ? Math.min(1.5 * r[1] / t[1], 1) : 0;
    r[0] = Math.min(360, r[0] + e[0] - t[0]),
    r[1] = t[1] ? Math.min(1, r[1] * e[1] / t[1]) : 0,
    r[2] = t[2] ? Math.min(1, r[2] * (1 - o + o * e[2] / t[2])) : 0;
    let c = Cs(...r);
    const a = Ks(s)
      , u = Ks(c);
    if (n ? a > u : a < u) {
        const f = .4 * a / u + .6;
        c = qo(c, f)
    }
    return c
}
function qo(t, e) {
    return t.map(s=>Qn(Math.round(s * e), 0, 255))
}
function nr(t) {
    const e = (t < 0 ? 16777215 + t : t).toString(16);
    return "#" + (e.length >= 6 ? e : "0".repeat(6 - e.length) + e)
}
function nt(t) {
    return ae(nr(t))
}
function Tc(t) {
    return t.settings ? [t.settings.background_color, t.settings.second_background_color, t.settings.third_background_color, t.settings.fourth_background_color].filter(Boolean).map(nr).join(",") : ""
}
function Mc(t, e) {
    const s = t[3];
    return t.slice(0, 3).map((n,r)=>Qn(Math.round((s * (n / 255) + s * (e[r] / 255)) * 255), 0, 255))
}
function Lc(t) {
    const [e,s,n] = t;
    return .2126 * e / 255 + .7152 * s / 255 + .0722 * n / 255
}
function Ic(t) {
    return t > .5 ? [0, 0, 0] : [255, 255, 255]
}
function Oc(t, e) {
    const s = t > .5 ? 0 : 1
      , n = (t - s + e) / e;
    return +Math.max(.5, Math.min(.64, n)).toFixed(2)
}
function rr(t, e, s, n, r=!0) {
    if (t < s && e < n && r)
        return L(t, e);
    let i = s
      , o = n;
    return t / e > s / n ? o = e * s / t | 0 : (i = t * n / e | 0,
    i > s && (o = o * s / i | 0,
    i = s)),
    r && i >= t && o >= e && (i = t,
    o = e),
    L(i, o)
}
_.calcImageInBox = rr;
class Jo {
    constructor(e=0, s=e) {
        this.width = e,
        this.height = s
    }
    aspect(e, s) {
        return rr(this.width, this.height, e.width, e.height, s)
    }
    aspectFitted(e) {
        return this.aspect(e, !0)
    }
    aspectCovered(e) {
        return this.aspect(e, !1)
    }
}
function L(t, e) {
    return new Jo(t,e)
}
var Xo = (t=>(t[t.mobile = 0] = "mobile",
t[t.medium = 1] = "medium",
t[t.large = 2] = "large",
t))(Xo || {});
const Zo = 600
  , Qo = 1275
  , ea = 1680
  , qs = L(20, 20)
  , Js = L(36, 36)
  , Xs = L(18, 18);
class ta extends Fe {
    constructor() {
        super(),
        this.screenSizes = [{
            key: 0,
            value: Zo
        }, {
            key: 1,
            value: Qo
        }, {
            key: 2,
            value: ea
        }],
        this.sizes = {
            handhelds: {
                regular: L(340, 340),
                webpage: L(340, 200),
                album: L(340, 0),
                esgSticker: L(68, 68),
                animatedSticker: L(180, 180),
                staticSticker: L(180, 180),
                emojiSticker: L(112, 112),
                poll: L(240, 0),
                round: L(240, 240),
                documentName: L(200, 0),
                invoice: L(340, 340),
                extendedInvoice: L(340, 340),
                customEmoji: qs,
                esgCustomEmoji: Js,
                emojiStatus: Xs,
                popupSticker: L(68, 68)
            },
            desktop: {
                regular: L(420, 400),
                webpage: L(420, 380),
                album: L(420, 0),
                esgSticker: L(72, 72),
                animatedSticker: L(200, 200),
                staticSticker: L(200, 200),
                emojiSticker: L(112, 112),
                poll: L(330, 0),
                round: L(280, 280),
                documentName: L(240, 0),
                invoice: L(320, 320),
                extendedInvoice: L(420, 400),
                customEmoji: qs,
                esgCustomEmoji: Js,
                emojiStatus: Xs,
                popupSticker: L(80, 80)
            }
        },
        this.isMobile = !1,
        this.handleResize = ()=>{
            const e = window.innerWidth;
            let s = this.screenSizes[0].key;
            for (let r = this.screenSizes.length - 1; r >= 0; --r)
                if (this.screenSizes[r].value < e) {
                    s = (this.screenSizes[r + 1] || this.screenSizes[r]).key;
                    break
                }
            const n = this.activeScreen;
            this.activeScreen = s,
            this.isMobile = this.activeScreen === 0,
            this.active = this.isMobile ? this.sizes.handhelds : this.sizes.desktop,
            n !== s && n !== void 0 && this.dispatchEvent("changeScreen", n, s),
            n !== void 0 && this.dispatchEvent("resize")
        }
        ,
        window.addEventListener("resize", ()=>{
            this.rAF && window.cancelAnimationFrame(this.rAF),
            this.rAF = window.requestAnimationFrame(()=>{
                this.handleResize(),
                this.rAF = 0
            }
            )
        }
        ),
        this.handleResize()
    }
}
const ir = new ta;
_.mediaSizes = ir;
class sa {
    constructor() {
        this.resetCache = ()=>{
            this.computedStyle = void 0;
            const e = this.cache;
            this.cache = {};
            for (const s in e)
                this.getProperty(s)
        }
        ,
        this.cache = {},
        this.nightElement = document.createElement("div"),
        this.nightElement.className = "night",
        this.nightElement.style.display = "none",
        document.body.append(this.nightElement),
        S.addEventListener("theme_changed", this.resetCache),
        ir.addEventListener("resize", this.resetCache)
    }
    getProperty(e, s) {
        const n = this.cache[e]
          , r = s ? 1 : 0;
        if (n?.[r])
            return n[r];
        this.computedStyle ?? (this.computedStyle = window.getComputedStyle(document.documentElement)),
        this.nightComputedStyle ?? (this.nightComputedStyle = window.getComputedStyle(this.nightElement));
        const i = (s ? this.nightComputedStyle : this.computedStyle).getPropertyValue("--" + e).trim();
        return this.setPropertyCache(e, i, s)
    }
    getPropertyAsColor(e) {
        const s = this.getProperty(e);
        return s[0] === "#" ? s : `rgb(${s})`
    }
    getPropertyAsSize(e) {
        const s = this.getProperty(e);
        let n;
        return s[s.length - 1] === "%" || (s.indexOf("rem") ? n = +s.replace("rem", "") * 16 : n = +s.replace("px", "")),
        n
    }
    setPropertyCache(e, s, n) {
        var r;
        return ((r = this.cache)[e] ?? (r[e] = []))[n ? 1 : 0] = s
    }
}
const hs = new sa;
_ && (_.customProperties = hs);
function Zs(...t) {
    const [e,s] = ne(...t);
    return (...n)=>n.length === 0 ? e() : s(...n)
}
class na {
    constructor() {
        if (pe)
            return;
        this._width = Zs(),
        this._height = Zs(),
        this.viewport = window;
        const e = ()=>{
            this.setDimensions()
        }
        ;
        this.viewport.addEventListener("resize", e),
        e()
    }
    setDimensions() {
        const e = this.viewport;
        this._width(e.width || e.innerWidth),
        this._height(e.height || e.innerHeight)
    }
    get width() {
        return this._width()
    }
    get height() {
        return this._height()
    }
}
const ds = new na;
_ && (_.windowSize = ds);
class ra {
    isEnabled() {
        return !!(S.settings && S.settings.liteMode.all)
    }
    isAvailable(e) {
        return !!(S.settings && !S.settings.liteMode.all && !S.settings.liteMode[e])
    }
}
const or = new ra;
_ && (_.liteMode = or);
const Qs = {
    "primary-color": {
        rgb: !0,
        light: !0,
        lightFilled: !0,
        dark: !0,
        darkRgb: !0
    },
    "message-out-primary-color": {
        lightFilled: !0,
        rgb: !0
    },
    "surface-color": {
        rgb: !0
    },
    "danger-color": {
        rgb: !0,
        light: !0,
        dark: !0
    },
    "primary-text-color": {
        rgb: !0
    },
    "secondary-text-color": {
        light: !0,
        lightFilled: !0,
        rgb: !0
    },
    "message-background-color": {
        light: !0,
        lightFilled: !0,
        dark: !0,
        darkFilled: !0
    },
    "message-out-background-color": {
        light: !0,
        lightFilled: !0,
        dark: !0,
        darkFilled: !0,
        rgb: !0
    },
    "saved-color": {
        lightFilled: !0
    },
    "green-color": {}
}
  , Yt = {
    day: {
        "primary-color": "#3390ec",
        "message-out-primary-color": "#5CA853",
        "message-background-color": "#ffffff",
        "surface-color": "#ffffff",
        "danger-color": "#df3f40",
        "primary-text-color": "#000000",
        "secondary-text-color": "#707579",
        "saved-color": "#359AD4",
        "green-color": "#70b768"
    },
    night: {
        "primary-color": "#8774E1",
        "message-out-primary-color": "#8774E1",
        "message-background-color": "#212121",
        "surface-color": "#212121",
        "danger-color": "#ff595a",
        "primary-text-color": "#ffffff",
        "secondary-text-color": "#aaaaaa",
        "saved-color": "#8774E1",
        "green-color": "#5CC85E"
    }
};
class ia {
    constructor() {
        S.addEventListener("theme_change", e=>{
            this.setTheme(typeof e == "object" ? e : void 0)
        }
        ),
        S.addEventListener("theme_changed", ()=>{
            this.setWorkerThemeParams()
        }
        )
    }
    setWorkerThemeParams() {
        S.managers.apiManager.setThemeParams({
            _: "dataJSON",
            data: JSON.stringify(this.getThemeParamsForWebView())
        })
    }
    get themeColorElem() {
        return this._themeColorElem !== void 0 ? this._themeColorElem : this._themeColorElem = document.head.querySelector('[name="theme-color"]') || null
    }
    setThemeColor(e=this.themeColor) {
        e || (e = this.isNight() ? "#212121" : "#ffffff");
        const s = this.themeColorElem;
        s && s.setAttribute("content", e)
    }
    setThemeListener() {
        try {
            const e = window.matchMedia("(prefers-color-scheme: dark)")
              , s = ()=>{
                this.systemTheme = e.matches ? "night" : "day",
                S.myId ? S.dispatchEvent("theme_change") : this.setTheme()
            }
            ;
            "addEventListener"in e ? e.addEventListener("change", s) : "addListener"in e && e.addListener(s),
            s()
        } catch {}
    }
    applyHighlightingColor({hsla: e, element: s=document.documentElement}={}) {
        if (!e) {
            e = "hsla(85.5319, 36.9171%, 40.402%, .4)";
            const r = this.getTheme();
            r.settings?.highlightingColor && (e = r.settings.highlightingColor)
        }
        const n = tr(e);
        s.style.setProperty("--message-highlighting-color", e),
        s.style.setProperty("--message-highlighting-color-rgb", n.slice(0, 3).join(",")),
        s.style.setProperty("--message-highlighting-alpha", "" + n[3] / 255),
        !ge && e && (this.themeColor = Ho(e))
    }
    _setTheme(e) {
        const s = this.isNight();
        document.head.querySelector('[name="color-scheme"]')?.setAttribute("content", s ? "dark" : "light"),
        document.documentElement.classList.toggle("night", s),
        this.setThemeColor();
        const r = this.getTheme();
        this.applyTheme(r);
        let i = this.styleElement;
        i || (i = this.styleElement = document.createElement("style"),
        document.head.append(i));
        const o = document.createElement("div");
        this.applyTheme(S.settings.themes.find(c=>c.name === "night"), o, !0),
        i.textContent = `.night {${o.style.cssText}}`,
        this.applyHighlightingColor(),
        !e && S.dispatchEventSingle("theme_changed")
    }
    setTheme(e) {
        if (!("startViewTransition"in document) || !this.applied) {
            const c = !this.applied
              , a = this.applied;
            this.applied = !0,
            this._setTheme(c),
            a || this.setWorkerThemeParams();
            return
        }
        or.isAvailable("animations") || (e = void 0);
        const s = !this.isNight();
        e && (document.documentElement.classList.add("no-view-transition"),
        document.documentElement.classList.toggle("reverse", s),
        document.documentElement.offsetLeft);
        const n = document.startViewTransition(()=>{
            this._setTheme()
        }
        );
        if (!e)
            return;
        const {x: r, y: i} = e
          , o = Math.hypot(Math.max(r, ds.width - r), Math.max(i, ds.height - i));
        n.ready.then(()=>{
            document.documentElement.animate({
                clipPath: [`circle(0 at ${r}px ${i}px)`, `circle(${o}px at ${r}px ${i}px)`]
            }, {
                duration: 500,
                easing: "ease-in-out",
                pseudoElement: `::view-transition-${s ? "old" : "new"}(root)`,
                direction: s ? "reverse" : "normal"
            })
        }
        ),
        n.finished.finally(()=>{
            document.documentElement.classList.remove("no-view-transition", "reverse")
        }
        )
    }
    async switchTheme(e, s) {
        await S.managers.appStateManager.setByKey(Ys("settings", "theme"), e),
        S.dispatchEvent("theme_change", s)
    }
    isNight() {
        return this.getTheme().name === "night"
    }
    getTheme(e=S.settings.theme === "system" ? this.systemTheme : S.settings.theme) {
        return S.settings.themes.find(s=>s.name === e)
    }
    bindColorApplier(e) {
        const s = new Set;
        return {
            applyAppColor: n=>(s.add(n.name),
            this.applyAppColor({
                ...n,
                ...e
            })),
            finalize: ()=>{
                const n = e.isNight;
                for (const r in Qs)
                    s.has(r) || this.applyAppColor({
                        name: r,
                        hex: Yt[n ? "night" : "day"][r],
                        ...e
                    })
            }
        }
    }
    applyAppColor({name: e, hex: s, element: n, lightenAlpha: r=.08, darkenAlpha: i=r, mixColor: o, isNight: c=this.isNight(), saveToCache: a}) {
        const u = Qs[e]
          , l = ae(s)
          , h = ls(...l);
        o ?? (o = ae(Yt[c ? "night" : "day"]["surface-color"]));
        const f = Gt(l, o, r)
          , g = {
            ...h,
            l: h.l - i * 100
        }
          , E = [[e, s], u.rgb && [e + "-rgb", l.join(",")], u.light && ["light-" + e, `rgba(${l[0]}, ${l[1]}, ${l[2]}, ${r})`], u.lightFilled && ["light-filled-" + e, Ue(f)], u.dark && ["dark-" + e, `hsl(${g.h}, ${g.s}%, ${g.l}%)`]];
        a ?? (a = n === document.documentElement),
        E.filter(Boolean).forEach(([C,D])=>{
            n.style.setProperty("--" + C, D),
            a && hs.setPropertyCache(C, D, c)
        }
        )
    }
    async applyNewTheme(e) {
        const s = this.isNightTheme(e)
          , n = this.getTheme()
          , r = S.settings.themes
          , i = e.settings.find(c=>c.base_theme._ === (s ? "baseThemeNight" : "baseThemeClassic"))
          , o = {
            ...e,
            name: n.name,
            settings: {
                ...i,
                highlightingColor: ""
            }
        };
        await this.AppBackgroundTab.setBackgroundDocument(i.wallpaper, o.settings),
        r[r.indexOf(n)] = o,
        await S.managers.appStateManager.setByKey(Ys("settings", "themes"), S.settings.themes),
        S.dispatchEvent("theme_change")
    }
    isNightTheme(e) {
        return e.name === "night" || this.isNight()
    }
    getThemeSettings(e, s) {
        return s ?? (s = this.isNightTheme(e)),
        Array.isArray(e.settings) ? e.settings.find(r=>r.base_theme._ === (s ? "baseThemeNight" : "baseThemeClassic")) : e.settings
    }
    applyTheme(e, s=document.documentElement, n) {
        const r = this.isNightTheme(e)
          , i = this.getThemeSettings(e, r)
          , o = Yt[r ? "night" : "day"];
        let c = ce(...ae(o["primary-color"]))
          , a = ce(...nt(i.accent_color));
        const u = Ko(c, a, ae(o["primary-color"]), !r)
          , l = Ue(u)
          , {applyAppColor: h, finalize: f} = this.bindColorApplier({
            element: s,
            isNight: r,
            saveToCache: n
        });
        if (h({
            name: "primary-color",
            hex: l,
            darkenAlpha: .04
        }),
        h({
            name: "saved-color",
            hex: l,
            lightenAlpha: .64,
            mixColor: [255, 255, 255]
        }),
        !i.message_colors?.length)
            return;
        const g = r ? 1 : .12
          , E = ae(o["message-out-primary-color"]);
        c = ce(...E);
        const C = Gt(E, ae(o["surface-color"]), g);
        let F = nt(i.message_colors[0]);
        i.message_colors.length > 1 && (i.message_colors.slice(1).forEach(T=>{
            F = $o(F, nt(T))
        }
        ),
        F = zo(c, C, F)),
        a = ce(...F);
        const P = i.outbox_accent_color !== void 0 && ce(...nt(i.outbox_accent_color));
        let k = Gt(F, ae(o["surface-color"]), g);
        if (!r) {
            const T = ls(...k);
            T.s = Math.min(T.s + (r ? 8 : 63), 100),
            k = er(T.h, T.s, T.l, T.a).slice(0, 3)
        }
        h({
            name: "message-out-background-color",
            hex: Ue(k),
            lightenAlpha: g
        }),
        h({
            name: "message-out-primary-color",
            hex: r ? "#ffffff" : Ue(P ? Cs(...P) : F),
            mixColor: k
        }),
        f()
    }
    getThemeParamsForWebView() {
        const e = {
            bg_color: "surface-color",
            button_color: "primary-color",
            button_text_color: "#ffffff",
            hint_color: "secondary-text-color",
            link_color: "link-color",
            secondary_bg_color: "background-color-true",
            text_color: "primary-text-color",
            header_bg_color: "surface-color",
            accent_text_color: "primary-color",
            section_bg_color: "surface-color",
            section_header_text_color: "primary-color",
            subtitle_text_color: "secondary-text-color",
            destructive_text_color: "danger-color"
        }
          , s = {};
        for (const n in e) {
            const r = e[n];
            s[n] = r[0] === "#" ? r : hs.getProperty(r)
        }
        return s
    }
}
const ar = new ia;
_ && (_.themeController = ar);
class oa extends Fe {
    constructor() {
        super(...arguments),
        this.overlaysActive = 0,
        this.hasDarkOverlays = 0
    }
    get isOverlayActive() {
        return this.overlaysActive > 0
    }
    set isOverlayActive(e) {
        this.overlaysActive += e ? 1 : -1,
        this.dispatchEvent("change", this.isOverlayActive)
    }
    get isDarkOverlayActive() {
        return this.hasDarkOverlays > 0
    }
    set isDarkOverlayActive(e) {
        this.hasDarkOverlays += e ? 1 : -1,
        this.isOverlayActive = e
    }
}
const ct = new oa;
_ && (_.overlayCounter = ct);
function Rc(t, e=t.split("?")) {
    return cr(e?.[1])
}
function cr(t) {
    const e = {};
    return t && t.split("&").forEach(s=>{
        const [n,r=""] = s.split("=");
        e[n] = decodeURIComponent(r)
    }
    ),
    e
}
const aa = "onbeforeinstallprompt"in window;
let fs;
function ca() {
    window.addEventListener("beforeinstallprompt", t=>{
        fs = async()=>{
            t.prompt();
            const {outcome: e} = await t.userChoice;
            e === "accepted" && (fs = void 0)
        }
    }
    )
}
function Bc() {
    return fs
}
const _s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  , ua = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  , $e = _s.slice()
  , gs = ua.slice()
  , ke = 86400
  , xc = 1440
  , Nc = 10080;
function la() {
    const t = U.getDateTimeFormat({
        weekday: "long"
    })
      , e = new Date(Date.UTC(2017, 0, 2))
      , s = [];
    for (let n = 0; n < 7; ++n)
        s.push(wt(t.format(e))),
        e.setDate(e.getDate() + 1);
    return s
}
function ha() {
    const t = U.getDateTimeFormat({
        month: "long"
    })
      , e = new Date(Date.UTC(2017, 0, 1))
      , s = [];
    for (let n = 0; n < 12; ++n)
        s.push(wt(t.format(e))),
        e.setMonth(e.getMonth() + 1);
    return s
}
function en() {
    $e.splice(0, $e.length, ...ha()),
    gs.splice(0, gs.length, ...la())
}
const tn = t=>{
    const e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()))
      , s = e.getUTCDay() || 7;
    e.setUTCDate(e.getUTCDate() + 4 - s);
    const n = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
    return Math.ceil(((e.getTime() - n.getTime()) / ke + 1) / 7)
}
;
function Uc(t, e) {
    e || (e = new Date,
    e.setHours(0, 0, 0, 0));
    const s = {
        day: "numeric",
        month: "long"
    };
    return t.getFullYear() !== e.getFullYear() && (s.year = "numeric"),
    new U.IntlDateElement({
        date: t,
        options: s
    }).element
}
function da(t) {
    const e = new Date
      , s = e.getTime() / 1e3 | 0
      , n = t.getTime() / 1e3 | 0
      , r = {};
    return s - n < ke && e.getDate() === t.getDate() ? r.hour = r.minute = "2-digit" : e.getFullYear() !== t.getFullYear() ? (r.year = r.day = "numeric",
    r.month = "2-digit") : s - n < ke * 7 && tn(e) === tn(t) ? r.weekday = "short" : (r.month = "short",
    r.day = "numeric"),
    new U.IntlDateElement({
        date: t,
        options: r
    }).element
}
const ms = {
    hour: "2-digit",
    minute: "2-digit"
};
function fa(t, e={}) {
    e.combined && (e.noToday = !0);
    const s = new Date
      , n = new Date(t * 1e3)
      , i = (s.getTime() / 1e3 | 0) - t
      , o = e.combined ? void 0 : ga(n);
    let c;
    return !e.noToday && i < ke && s.getDate() === n.getDate() ? c = Ge(e.capitalize ? "Date.Today" : "Peer.Status.Today") : !e.noToday && i > 0 && i < ke * 2 && new Date(s.getTime() - ke * 1e3).getDate() === n.getDate() ? (c = Ge(e.capitalize ? "Yesterday" : "Peer.Status.Yesterday"),
    e.capitalize && (c.style.textTransform = "capitalize")) : s.getFullYear() !== n.getFullYear() ? c = new U.IntlDateElement({
        date: n,
        options: {
            month: "short",
            day: "numeric",
            year: "numeric",
            ...e.combined ? ms : {}
        }
    }).element : c = new U.IntlDateElement({
        date: n,
        options: {
            month: "short",
            day: "numeric",
            ...e.combined ? ms : {}
        }
    }).element,
    {
        dateEl: c,
        timeEl: o
    }
}
function Wc(t, e=!0, s=!1) {
    const {dateEl: n, timeEl: r} = fa(t, {
        capitalize: e,
        noToday: s
    })
      , i = document.createDocumentFragment();
    return i.append(n, " ", Ge("ScheduleController.at"), " ", r),
    i
}
function ga(t) {
    return new U.IntlDateElement({
        date: t,
        options: ms
    }).element
}
_ && (_.formatDateAccordingToTodayNew = da);
const jc = (t,e={})=>{
    const s = e.monthAsNumber ? "." : " "
      , n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + (e.noSeconds ? "" : ":" + ("0" + t.getSeconds()).slice(-2))
      , r = t.getFullYear();
    return (e.leadingZero ? ("0" + t.getDate()).slice(-2) : t.getDate()) + s + (e.monthAsNumber ? ("0" + (t.getMonth() + 1)).slice(-2) : _s[t.getMonth()]) + s + ("" + r).slice(e.shortYear ? 2 : 0) + (e.noTime ? "" : ", " + n)
}
;
function Vc(t, e) {
    const s = t >= 12 && !(t % 12);
    return Ge(e ? s ? "BoldYears" : "BoldMonths" : s ? "Years" : "Months", [s ? t / 12 : t])
}
const Z = 2013
  , ma = new RegExp("20[0-9]{1,2}")
  , Ps = "\\p{L}"
  , Da = new RegExp(`(${Ps}{3,})`,"iu")
  , pa = new RegExp(`(${Ps}{3,}) ([0-9]{0,4})`,"iu")
  , Ea = new RegExp(`([0-9]{0,4}) (${Ps}{2,})`,"iu")
  , Fa = new RegExp("^([0-9]{1,4})(\\.| |/|\\-)([0-9]{1,4})$","i")
  , va = new RegExp("^([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,2})(\\.| |/|\\-)([0-9]{1,4})$","i")
  , Aa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ya(t, e) {
    const s = t.trim().toLowerCase();
    if (s.length < 3)
        return;
    if (["today", U.format("Peer.Status.Today", !0)].some(i=>i.indexOf(s) === 0)) {
        const i = new Date
          , o = i.getFullYear()
          , c = i.getMonth()
          , a = i.getDate();
        i.setFullYear(o, c, a),
        i.setHours(0, 0, 0);
        const u = i.getTime();
        i.setFullYear(o, c, a + 1),
        i.setHours(0, 0, 0);
        const l = i.getTime() - 1;
        e.push({
            title: U.format("Date.Today", !0),
            minDate: u,
            maxDate: l
        });
        return
    }
    if (["yesterday", U.format("Peer.Status.Yesterday", !0)].some(i=>i.indexOf(s) === 0)) {
        const i = new Date
          , o = i.getFullYear()
          , c = i.getMonth()
          , a = i.getDate();
        i.setFullYear(o, c, a),
        i.setHours(0, 0, 0);
        const u = i.getTime() - 864e5;
        i.setFullYear(o, c, a + 1),
        i.setHours(0, 0, 0);
        const l = i.getTime() - 86400001;
        e.push({
            title: wt(U.format("Yesterday", !0)),
            minDate: u,
            maxDate: l
        });
        return
    }
    const n = Ca(s);
    if (n >= 0) {
        const i = new Date
          , o = i.getTime()
          , c = i.getDay()
          , a = n - c;
        i.setDate(i.getDate() + a),
        i.getTime() > o && i.setTime(i.getTime() - 6048e5);
        const u = i.getFullYear()
          , l = i.getMonth()
          , h = i.getDate();
        i.setFullYear(u, l, h),
        i.setHours(0, 0, 0);
        const f = i.getTime();
        i.setFullYear(u, l, h + 1),
        i.setHours(0, 0, 0);
        const g = i.getTime() - 1;
        e.push({
            title: lr(f),
            minDate: f,
            maxDate: g
        });
        return
    }
    let r;
    if ((r = Fa.exec(s)) !== null) {
        const i = r[1]
          , o = r[3]
          , c = parseInt(i)
          , a = parseInt(o);
        if (c > 0 && c <= 31) {
            if (a >= Z && c <= 12) {
                const u = a
                  , l = c - 1;
                Be(e, l, u);
                return
            } else if (a <= 12) {
                const u = c - 1
                  , l = a - 1;
                Ht(e, u, l)
            }
        } else if (c >= Z && a <= 12) {
            const u = c
              , l = a - 1;
            Be(e, l, u)
        }
        return
    }
    if ((r = va.exec(s)) !== null) {
        const i = r[1]
          , o = r[3]
          , c = r[5];
        if (!r[2] === r[4])
            return;
        const a = parseInt(i)
          , u = parseInt(o) - 1;
        let l = parseInt(c);
        l >= 10 && l <= 99 && (l += 2e3);
        const h = new Date().getFullYear();
        if (hr(a - 1, u) && l >= Z && l <= h) {
            const f = new Date;
            f.setFullYear(l, u, a),
            f.setHours(0, 0, 0);
            const g = f.getTime();
            f.setFullYear(l, u, a + 1),
            f.setHours(0, 0, 0);
            const E = f.getTime() - 1;
            e.push({
                title: ur(g),
                minDate: g,
                maxDate: E
            });
            return
        }
        return
    }
    if ((r = pa.exec(s)) !== null) {
        const i = r[1]
          , o = r[2]
          , c = $t(i);
        if (c >= 0) {
            const a = +o || new Date().getUTCFullYear();
            if (a > 0 && a <= 31) {
                const u = a - 1;
                Ht(e, u, c);
                return
            } else if (a >= Z) {
                Be(e, c, a);
                return
            }
        }
    }
    if ((r = Ea.exec(s)) !== null) {
        const i = r[1]
          , o = r[2]
          , c = $t(o);
        if (c >= 0) {
            const a = +i;
            if (a > 0 && a <= 31) {
                const u = a - 1;
                Ht(e, u, c);
                return
            } else
                a >= Z && Be(e, c, a)
        }
    }
    if ((r = Da.exec(s)) !== null) {
        const i = r[1]
          , o = $t(i);
        if (o >= 0) {
            const c = new Date().getFullYear();
            for (let a = c; a >= Z; --a)
                Be(e, o, a)
        }
    }
    if ((r = ma.exec(s)) !== null) {
        let i = +r[0];
        const o = new Date().getFullYear();
        if (i < Z) {
            i = Z;
            for (let c = o; c >= i; c--) {
                const a = new Date;
                a.setFullYear(c, 0, 1),
                a.setHours(0, 0, 0);
                const u = a.getTime();
                a.setFullYear(c + 1, 0, 1),
                a.setHours(0, 0, 0);
                const l = a.getTime() - 1;
                e.push({
                    title: "" + c,
                    minDate: u,
                    maxDate: l
                })
            }
        } else if (i <= o) {
            const c = new Date;
            c.setFullYear(i, 0, 1),
            c.setHours(0, 0, 0);
            const a = c.getTime();
            c.setFullYear(i + 1, 0, 1),
            c.setHours(0, 0, 0);
            const u = c.getTime() - 1;
            e.push({
                title: "" + i,
                minDate: a,
                maxDate: u
            })
        }
        return
    }
}
function Be(t, e, s) {
    const n = new Date().getFullYear()
      , r = Date.now();
    if (s >= Z && s <= n) {
        const i = new Date;
        i.setFullYear(s, e, 1),
        i.setHours(0, 0, 0);
        const o = i.getTime();
        if (o > r)
            return;
        i.setMonth(i.getMonth() + 1);
        const c = i.getTime() - 1;
        t.push({
            title: Sa(o),
            minDate: o,
            maxDate: c
        })
    }
}
function Ht(t, e, s) {
    if (hr(e, s)) {
        const n = new Date().getFullYear()
          , r = Date.now();
        for (let i = n; i >= Z; i--) {
            if (s === 1 && e === 28 && !wa(i))
                continue;
            const o = new Date;
            o.setFullYear(i, s, e + 1),
            o.setHours(0, 0, 0);
            const c = o.getTime();
            if (c > r)
                continue;
            o.setFullYear(i, s, e + 2),
            o.setHours(0, 0, 0);
            const a = o.getTime() - 1;
            i === n ? t.push({
                title: ba(c),
                minDate: c,
                maxDate: a
            }) : t.push({
                title: ur(c),
                minDate: c,
                maxDate: a
            })
        }
    }
}
function Sa(t) {
    const e = new Date(t);
    return $e[e.getMonth()] + " " + e.getFullYear()
}
function ba(t) {
    const e = new Date(t);
    return $e[e.getMonth()] + " " + e.getDate()
}
function ur(t) {
    const e = new Date(t);
    return ("0" + e.getDate()).slice(-2) + "." + ("0" + (e.getMonth() + 1)).slice(-2) + "." + e.getFullYear()
}
function lr(t) {
    const e = new Date(t);
    return gs[e.getDay()]
}
function hr(t, e) {
    return e >= 0 && e < 12 && t >= 0 && t < Aa[e]
}
function wa(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
}
function $t(t) {
    t = t.toLowerCase();
    for (let e = 0; e < 12; e++)
        if ([_s[e], $e[e]].some(s=>s.toLowerCase().indexOf(t) === 0))
            return e;
    return -1
}
function Ca(t) {
    const e = new Date;
    if (t.length <= 3)
        return -1;
    for (let s = 0; s < 7; s++)
        if (e.setDate(e.getDate() + 1),
        lr(e.getTime()).toLowerCase().indexOf(t) === 0)
            return e.getDay();
    return -1
}
_.fillTipDates = ya;
const dr = ie
  , fr = ie || !rn && (!J || ze) || on < 113
  , _a = !dr && !fr;
On.then(t=>{
    t.forEach(e=>{
        Ye.add(e),
        Bn.add(e)
    }
    ),
    console.log("Supported image mime types", Ye),
    Xe.sendEnvironment()
}
);
document.addEventListener("DOMContentLoaded", async()=>{
    try {
        x.isMainDomain && document.referrer && /(^|\.)(google|bing|duckduckgo|ya|yandex)\./i.test(new URL(document.referrer).host) && (localStorage.getItem("kz_version") === "Z" || At(8) > 127 ? (localStorage.setItem("kz_version", "Z"),
        location.href = "https://web.telegram.org/a/") : localStorage.setItem("kz_version", "K"))
    } catch {}
    _r(),
    Node.prototype.replaceChildren === void 0 && (Node.prototype.replaceChildren = function(...D) {
        this.textContent = "",
        D && this.append(...D)
    }
    ),
    S.managers = Go();
    const t = document.getElementById("manifest");
    t && (t.href = `site${Kt && !Te ? "_apple" : ""}.webmanifest?v=jw3mK7G9Aq`),
    Ft.start();
    const e = window.visualViewport || window;
    let s = !1, n;
    const r = ()=>{
        let D = (s && !ct.isOverlayActive ? e.height || e.innerHeight : window.innerHeight) * .01;
        D = +D.toFixed(2),
        n !== D && (ge && n < D && D - n > 1 && sn(),
        n = D,
        document.documentElement.style.setProperty("--vh", `${D}px`))
    }
    ;
    window.addEventListener("resize", r),
    r();
    const i = ()=>{
        const D = document.querySelector(".chat.active");
        if (!D)
            return;
        const F = D.cloneNode(!0);
        F.querySelectorAll(".chat-input, .chat-background").forEach(A=>A.remove());
        const b = F.querySelector(".bubbles")
          , P = b.querySelector(".bubbles-inner");
        b.replaceChildren(P),
        b.querySelectorAll("video").forEach(A=>A.muted = !0);
        const T = document.createElement("div");
        T.setAttribute("id", "printable"),
        T.append(F),
        document.body.append(T)
    }
      , o = ()=>{
        document.getElementById("printable")?.remove()
    }
    ;
    if (window.addEventListener("beforeprint", i),
    window.addEventListener("afterprint", o),
    ut) {
        const D = ()=>{
            s = F === 1 && ut && !ct.isOverlayActive,
            r(),
            e !== window && (s ? (window.removeEventListener("resize", r),
            e.addEventListener("resize", r)) : (e.removeEventListener("resize", r),
            window.addEventListener("resize", r)))
        }
        ;
        let F;
        window.onImTabChange = b=>{
            const P = F !== void 0;
            F = b,
            (P || F === 1) && D()
        }
        ,
        ct.addEventListener("change", ()=>{
            D()
        }
        )
    }
    Me && !Jt && document.addEventListener("dragstart", D=>{
        const F = D.target;
        if (F.tagName === "IMG" && F.classList.contains("emoji"))
            return zt(D),
            !1
    }
    ),
    Jt && document.documentElement.classList.add("native-emoji"),
    dr ? document.documentElement.classList.add("native-scroll") : fr ? document.documentElement.classList.add("overlay-scroll") : _a && document.documentElement.classList.add("custom-scroll"),
    document.addEventListener("dragstart", D=>{
        if (D.target?.tagName === "IMG")
            return D.preventDefault(),
            !1
    }
    ),
    document.addEventListener("contextmenu", D=>{
        D.target.tagName === "IMG" && !window.appMediaViewer && zt(D)
    }
    ),
    Me && document.documentElement.classList.add("is-firefox", "no-backdrop"),
    ie && document.documentElement.classList.add("is-mobile"),
    Kt ? (J && document.documentElement.classList.add("is-safari"),
    Te ? document.documentElement.classList.add("is-ios") : document.documentElement.classList.add("is-mac")) : nn && document.documentElement.classList.add("is-android"),
    ge ? document.documentElement.classList.add("is-touch") : document.documentElement.classList.add("no-touch"),
    aa && ca();
    const c = performance.now()
      , a = U.getCacheLangPack()
      , [u,l] = await Promise.all([Xe.sendState().then(([D])=>D), a]);
    U.setTimeFormat(u.state.settings.timeFormat),
    S.managers.rootScope.getPremium().then(D=>{
        S.premium = D
    }
    ),
    ar.setThemeListener(),
    l.appVersion !== x.langPackVersion ? U.getLangPack(l.lang_code) : en(),
    S.addEventListener("language_change", ()=>{
        en()
    }
    );
    function h(D, F) {
        D.style.opacity = "0",
        F.then(()=>{
            window.requestAnimationFrame(()=>{
                D.style.opacity = ""
            }
            )
        }
        )
    }
    console.log("got state, time:", performance.now() - c),
    await On,
    l.lang_code === "ar" || l.lang_code === "fa" && Ir && !1 ? (document.documentElement.classList.add("is-rtl"),
    document.documentElement.dir = "rtl",
    document.documentElement.lang = l.lang_code,
    U.setRTL(!0)) : document.documentElement.dir = "ltr";
    let f = u.state.authState;
    const E = location.hash.split("?")
      , C = cr(E[1] ?? E[0].slice(1));
    if (C.tgWebAuthToken && f._ !== "authStateSignedIn") {
        const D = {
            token: C.tgWebAuthToken,
            dcId: +C.tgWebAuthDcId,
            userId: C.tgWebAuthUserId.toUserId(),
            isTest: C.tgWebAuthTest !== void 0 && !!+C.tgWebAuthTest,
            tgAddr: C.tgaddr
        };
        if (D.isTest !== H.test) {
            const F = new URLSearchParams(location.search);
            +C.tgWebAuthTest ? F.set("test", "1") : F.delete("test"),
            location.search = F.toString();
            return
        }
        S.managers.appStateManager.pushToState("authState", f = {
            _: "authStateSignImport",
            data: D
        })
    }
    if (f._ !== "authStateSignedIn") {
        console.log("Will mount auth page:", f._, Date.now() / 1e3);
        const D = document.getElementById("auth-pages");
        let F;
        if (D) {
            F = D.querySelector(".scrollable"),
            (!ge || ze) && F.classList.add("no-scrollbar"),
            F.style.opacity = "0";
            const P = document.createElement("div");
            P.classList.add("auth-placeholder"),
            F.prepend(P),
            F.append(P.cloneNode())
        }
        try {
            await Promise.all([V(()=>Promise.resolve().then(()=>Vi), void 0, import.meta.url), V(()=>Promise.resolve().then(()=>Ui), void 0, import.meta.url)]).then(([P,k])=>{
                P.default.setAuthorized(!1),
                k.default.forceUnsubscribe()
            }
            )
        } catch {}
        let b;
        switch (f._) {
        case "authStateSignIn":
            b = (await V(()=>import("./pageSignIn-Bn6SKYNF.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url)).default.mount();
            break;
        case "authStateSignQr":
            b = (await V(()=>import("./pageSignQR-CySVYV_Q.js").then(P=>P.a), __vite__mapDeps([7, 2, 4, 1, 8]), import.meta.url)).default.mount();
            break;
        case "authStateAuthCode":
            b = (await V(()=>import("./pageAuthCode-D0FL5KCv.js"), __vite__mapDeps([9, 2, 0, 1, 3, 4, 5, 6, 7, 8, 10]), import.meta.url)).default.mount(f.sentCode);
            break;
        case "authStatePassword":
            b = (await V(()=>import("./pagePassword-BpefiXlr.js"), __vite__mapDeps([11, 1, 2, 4, 12, 5, 13]), import.meta.url)).default.mount();
            break;
        case "authStateSignUp":
            b = (await V(()=>import("./pageSignUp-B7-bzav6.js"), __vite__mapDeps([14, 13, 2, 5, 4, 15, 6, 1]), import.meta.url)).default.mount(f.authCode);
            break;
        case "authStateSignImport":
            b = (await V(()=>import("./pageSignImport-CVn6FnkS.js"), __vite__mapDeps([16, 1, 2]), import.meta.url)).default.mount(f.data);
            break
        }
        if (F) {
            b && await b;
            const P = "fonts"in document ? Promise.race([ps(1e3), document.fonts.ready]) : Promise.resolve();
            h(F, P)
        }
    } else
        console.log("Will mount IM page:", Date.now() / 1e3),
        h(document.getElementById("main-columns"), wr()),
        (await V(()=>import("./pageIm-BuomoSv_.js"), __vite__mapDeps([17, 2]), import.meta.url)).default.mount()
}
);
export {An as $, x as A, zn as B, ue as C, De as D, Fe as E, K as F, oi as G, it as H, ge as I, ri as J, oc as K, wc as L, _ as M, ln as N, ai as O, ne as P, Uc as Q, xa as R, G as S, ja as T, vc as U, tc as V, Fc as W, ke as X, ga as Y, rt as Z, V as _, S as a, xi as a$, Ga as a0, Xt as a1, Ba as a2, ar as a3, ae as a4, nr as a5, Pr as a6, L as a7, Ra as a8, Po as a9, Ds as aA, Ci as aB, ds as aC, j as aD, Dn as aE, Wc as aF, J as aG, nn as aH, Xa as aI, vo as aJ, Sr as aK, yr as aL, Ar as aM, da as aN, Ia as aO, Te as aP, Xo as aQ, Xi as aR, xt as aS, es as aT, hc as aU, pc as aV, ic as aW, Jt as aX, jc as aY, Wa as aZ, Bn as a_, lt as aa, Fr as ab, gc as ac, ni as ad, Ec as ae, mc as af, Kn as ag, Oa as ah, hs as ai, Vt as aj, ze as ak, is as al, ct as am, ie as an, Kt as ao, Na as ap, ji as aq, vr as ar, Qn as as, Ft as at, Q as au, fa as av, Ac as aw, vi as ax, me as ay, Es as az, Xe as b, ya as b$, kr as b0, Rc as b1, Dc as b2, Ha as b3, Ee as b4, Gt as b5, ac as b6, Vc as b7, zi as b8, Qr as b9, pn as bA, an as bB, Wn as bC, ut as bD, Ma as bE, Is as bF, dc as bG, fc as bH, uc as bI, cc as bJ, rc as bK, Ys as bL, Pc as bM, xc as bN, Nc as bO, la as bP, Jo as bQ, eo as bR, er as bS, Ue as bT, sr as bU, js as bV, $i as bW, Lr as bX, Mr as bY, Ka as bZ, Bc as b_, sc as ba, Gi as bb, Et as bc, Bi as bd, xo as be, Ua as bf, Cc as bg, Me as bh, xs as bi, At as bj, _c as bk, ro as bl, Tr as bm, La as bn, ls as bo, Tc as bp, Zs as bq, qa as br, $a as bs, rr as bt, Ye as bu, bs as bv, Za as bw, Qt as bx, Va as by, Jr as bz, _e as c, to as c0, Si as c1, so as c2, vt as c3, Tn as c4, Oc as c5, Mc as c6, Ic as c7, Lc as c8, os as c9, et as ca, rn as cb, Pa as cc, Bo as cd, As as ce, pt as cf, ka as cg, Go as ch, Ya as ci, wo as cj, nc as ck, fr as cl, no as cm, Yi as cn, jn as co, Hi as cp, Mo as cq, hn as cr, _o as cs, In as ct, kn as cu, Ja as cv, Qa as cw, ec as cx, Fn as cy, cn as cz, yc as d, zt as e, U as f, B as g, sn as h, Ge as i, se as j, or as k, wr as l, ir as m, qt as n, Ta as o, ps as p, Ji as q, bc as r, ei as s, Sc as t, za as u, uo as v, zr as w, kc as x, vn as y, $n as z};
//# sourceMappingURL=index-CbCftUfG.js.map
