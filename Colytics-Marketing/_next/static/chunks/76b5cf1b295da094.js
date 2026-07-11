(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 87524, e => {
        "use strict";
        var t = e.i(43476), a = e.i(71645);
        let r = ["#site-header", "#landing-hero", "#site-footer"], s = "168,124,27", i = "194,148,31";
        function l(e) { return Math.max(0, Math.min(1, e)); }
        function n() { let e = (0, a.useRef)(null), n = (0, a.useRef)({ scrollProgress: 0, ctaBoost: 0 }); return (0, a.useEffect)(() => { let t = window.matchMedia("(prefers-reduced-motion: reduce)"), a = e.current; if (!a)
            return; let o = a.getContext("2d", { alpha: !0 }); if (!o)
            return; let d = 0, c = 0, p = 0, m = 1, u = .85, x = t.matches, h = e => e * u, f = Array.from({ length: 60 }, (e, t) => ({ seed: 37.91 * t, size: 1.5 + 2 * Math.random() })), b = () => { m = Math.min(window.devicePixelRatio || 1, 2), c = window.innerWidth, p = window.innerHeight, a.width = Math.floor(c * m), a.height = Math.floor(p * m), a.style.width = `${c}px`, a.style.height = `${p}px`, o.setTransform(m, 0, 0, m, 0, 0); }, g = () => { let e = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1), t = l(window.scrollY / e), a = document.getElementById("cta"), r = 0; if (a) {
            let e = a.getBoundingClientRect();
            r = l((.92 * window.innerHeight - e.top) / Math.max(.75 * window.innerHeight, 1));
        } n.current = { scrollProgress: t, ctaBoost: r }; }, y = e => { let t = .001 * e, { scrollProgress: a, ctaBoost: m } = n.current, b = function (e) { let t = []; for (let a of r) {
            let r = document.querySelector(a);
            if (!r)
                continue;
            let s = r.getBoundingClientRect(), i = Math.max(0, s.top), l = Math.min(e, s.bottom);
            l > i && t.push([i, l]);
        } let a = function (e) { if (0 === e.length)
            return []; let t = [...e].sort((e, t) => e[0] - t[0]), a = [t[0]]; for (let e = 1; e < t.length; e++) {
            let r = a[a.length - 1], [s, i] = t[e];
            s <= r[1] ? r[1] = Math.max(r[1], i) : a.push([s, i]);
        } return a; }(t), s = [], i = 0; for (let [e, t] of a)
            i < e && s.push({ y0: i, y1: e, fullBleed: !1 }), s.push({ y0: e, y1: t, fullBleed: !0 }), i = t; return i < e && s.push({ y0: i, y1: e, fullBleed: !1 }), 0 === s.length && s.push({ y0: 0, y1: e, fullBleed: !1 }), s; }(p); u = .85 * (1 + b.filter(e => e.fullBleed).reduce((e, t) => e + (t.y1 - t.y0), 0) / Math.max(p, 1) * (1.35 - 1)); let g = l(.035 + .05 * Math.pow(a, 1.6) + .04 * m + (Math.sin(1.5 * t) + 1) * .015); o.clearRect(0, 0, c, p); let w = 40 * Math.sin(.18 * t), v = 28 * Math.cos(.14 * t), j = o.createRadialGradient(.14 * c + w, .2 * p + v, 10, .14 * c + w, .2 * p + v, .56 * Math.max(c, p)); j.addColorStop(0, `rgba(${s},${h(.24 * g)})`), j.addColorStop(1, `rgba(${s},0)`), o.fillStyle = j, o.fillRect(0, 0, c, p); let N = o.createRadialGradient(.88 * c - .7 * w, .14 * p - .5 * v, 10, .88 * c - .7 * w, .14 * p - .5 * v, .5 * Math.max(c, p)); N.addColorStop(0, `rgba(${i},${h(.16 * g)})`), N.addColorStop(1, `rgba(${i},0)`), o.fillStyle = N, o.fillRect(0, 0, c, p); let _ = h(.02 + .045 * g), k = o.createLinearGradient(-(.2 * c) + Math.sin(.25 * t) * c * .2, 0, 1.2 * c + Math.sin(.25 * t) * c * .2, p); k.addColorStop(0, `rgba(${s},${.4 * _})`), k.addColorStop(.48, `rgba(${s},${_})`), k.addColorStop(1, `rgba(${s},0)`), o.fillStyle = k, o.fillRect(0, 0, c, p); for (let e = 0; e < 3; e++) {
            o.beginPath();
            for (let a = 0; a <= c; a += 12) {
                let r = p * (.55 + .08 * e) + Math.sin(.004 * a + t * (.8 + .3 * e)) * (10 + 20 * g) + Math.cos(.002 * a + t * (.4 + .2 * e)) * (8 + 15 * g);
                0 === a ? o.moveTo(a, r) : o.lineTo(a, r);
            }
            o.lineTo(c, p), o.lineTo(0, p), o.closePath(), o.fillStyle = `rgba(${s},${h(.02 + .02 * g)})`, o.fill();
        } let C = []; for (let e = 0; e < f.length; e++) {
            let a = f[e], r = e / f.length * c + 80 * Math.sin(a.seed + .02 * t), s = .5 * p + 250 * Math.cos(1.3 * a.seed + .03 * t);
            C.push({ x: r, y: s });
        } for (let e = 0; e < C.length; e++)
            for (let t = e + 1; t < C.length; t++) {
                let a = C[e], r = C[t], i = a.x - r.x, l = a.y - r.y, n = Math.sqrt(i * i + l * l);
                if (n < 180) {
                    let e = h((1 - n / 180) * (.06 + .12 * g));
                    o.beginPath(), o.moveTo(a.x, a.y), o.lineTo(r.x, r.y), o.strokeStyle = `rgba(${s},${e})`, o.lineWidth = 1, o.stroke();
                }
            } for (let e = 0; e < f.length; e++) {
            let t = f[e], a = C[e];
            o.beginPath(), o.arc(a.x, a.y, t.size, 0, 2 * Math.PI), o.fillStyle = `rgba(${s},${h(.18 + .22 * g)})`, o.fill();
        } for (let e = 0; e < 12; e++) {
            let a = C[e], r = C[(e + 7) % C.length], s = (.08 * t + .13 * e) % 1, i = a.x + (r.x - a.x) * s, l = a.y + (r.y - a.y) * s;
            o.beginPath(), o.arc(i, l, 2.5, 0, 2 * Math.PI), o.fillStyle = `rgba(255,255,255,${h(.2 + .22 * g)})`, o.fill();
        } let S = h(.025 + .07 * g); for (let e = 0; e < 35; e++) {
            let a = 17.31 * e, r = (Math.sin(a + t * (.08 + .005 * e)) + 1) * .5 * c, i = (Math.cos(1.7 * a + t * (.06 + .004 * e)) + 1) * .5 * p, l = .8 + e % 3 * .45 + .9 * g;
            o.beginPath(), o.arc(r, i, l, 0, 2 * Math.PI), o.fillStyle = `rgba(${s},${S * (.6 + e % 5 * .08)})`, o.fill();
        } var A = c; for (let e of (o.globalCompositeOperation = "destination-in", o.fillStyle = "rgba(0,0,0,0)", b))
            e.fullBleed || o.fillRect(0, e.y0, A, e.y1 - e.y0); o.globalCompositeOperation = "source-over", x || (d = window.requestAnimationFrame(y)); }; return b(), g(), d = window.requestAnimationFrame(y), window.addEventListener("resize", b), window.addEventListener("scroll", g, { passive: !0 }), () => { window.removeEventListener("resize", b), window.removeEventListener("scroll", g), d && window.cancelAnimationFrame(d); }; }, []), (0, t.jsx)("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden", "aria-hidden": "true", children: (0, t.jsx)("canvas", { ref: e, className: "h-full w-full" }) }); }
        e.s(["GlobalSurfaceAnimation", () => n, "HERO_FULL_BLEED_ALPHA_SCALE", 0, 1.35, "SURFACE_ALPHA_SCALE", 0, .85]);
    }, 98879, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "default", { enumerable: !0, get: function () { return n; } });
        let r = e.r(71645), s = "undefined" == typeof window, i = s ? () => { } : r.useLayoutEffect, l = s ? () => { } : r.useEffect;
        function n(e) { let { headManager: t, reduceComponentsToState: a } = e; function n() { if (t && t.mountedInstances) {
            let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
            t.updateHead(a(e));
        } } return s && (t?.mountedInstances?.add(e.children), n()), i(() => (t?.mountedInstances?.add(e.children), () => { t?.mountedInstances?.delete(e.children); })), i(() => (t && (t._pendingUpdate = n), () => { t && (t._pendingUpdate = n); })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => { t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null); })), null; }
    }, 25633, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var r = { default: function () { return h; }, defaultHead: function () { return p; } };
        for (var s in r)
            Object.defineProperty(a, s, { enumerable: !0, get: r[s] });
        let i = e.r(55682), l = e.r(90809), n = e.r(43476), o = l._(e.r(71645)), d = i._(e.r(98879)), c = e.r(42732);
        function p() { return [(0, n.jsx)("meta", { charSet: "utf-8" }, "charset"), (0, n.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport")]; }
        function m(e, t) { return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t); }
        e.r(33525);
        let u = ["name", "httpEquiv", "charSet", "itemProp"];
        function x(e) { let t, a, r, s; return e.reduce(m, []).reverse().concat(p().reverse()).filter((t = new Set, a = new Set, r = new Set, s = {}, e => { let i = !0, l = !1; if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
            l = !0;
            let a = e.key.slice(e.key.indexOf("$") + 1);
            t.has(a) ? i = !1 : t.add(a);
        } switch (e.type) {
            case "title":
            case "base":
                a.has(e.type) ? i = !1 : a.add(e.type);
                break;
            case "meta": for (let t = 0, a = u.length; t < a; t++) {
                let a = u[t];
                if (e.props.hasOwnProperty(a))
                    if ("charSet" === a)
                        r.has(a) ? i = !1 : r.add(a);
                    else {
                        let t = e.props[a], r = s[a] || new Set;
                        ("name" !== a || !l) && r.has(t) ? i = !1 : (r.add(t), s[a] = r);
                    }
            }
        } return i; })).reverse().map((e, t) => { let a = e.key || t; return o.default.cloneElement(e, { key: a }); }); }
        let h = function ({ children: e }) { let t = (0, o.useContext)(c.HeadManagerContext); return (0, n.jsx)(d.default, { reduceComponentsToState: x, headManager: t, children: e }); };
        ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
    }, 88143, (e, t, a) => {
        "use strict";
        function r({ widthInt: e, heightInt: t, blurWidth: a, blurHeight: r, blurDataURL: s, objectFit: i }) { let l = a ? 40 * a : e, n = r ? 40 * r : t, o = l && n ? `viewBox='0 0 ${l} ${n}'` : ""; return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${o ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`; }
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "getImageBlurSvg", { enumerable: !0, get: function () { return r; } });
    }, 87690, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var r = { VALID_LOADERS: function () { return i; }, imageConfigDefault: function () { return l; } };
        for (var s in r)
            Object.defineProperty(a, s, { enumerable: !0, get: r[s] });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"], l = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", loaderFile: "", domains: [], disableStaticImages: !1, minimumCacheTTL: 14400, formats: ["image/webp"], maximumRedirects: 3, dangerouslyAllowLocalIP: !1, dangerouslyAllowSVG: !1, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment", localPatterns: void 0, remotePatterns: [], qualities: [75], unoptimized: !1 };
    }, 8927, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "getImgProps", { enumerable: !0, get: function () { return o; } }), e.r(33525);
        let r = e.r(88143), s = e.r(87690), i = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function l(e) { return void 0 !== e.default; }
        function n(e) { return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN; }
        function o({ src: e, sizes: t, unoptimized: a = !1, priority: o = !1, preload: d = !1, loading: c, className: p, quality: m, width: u, height: x, fill: h = !1, style: f, overrideSrc: b, onLoad: g, onLoadingComplete: y, placeholder: w = "empty", blurDataURL: v, fetchPriority: j, decoding: N = "async", layout: _, objectFit: k, objectPosition: C, lazyBoundary: S, lazyRoot: A, ...M }, E) {
            var P;
            let F, R, O, { imgConf: $, showAltText: D, blurComplete: I, defaultLoader: z } = E, L = $ || s.imageConfigDefault;
            if ("allSizes" in L)
                F = L;
            else {
                let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t), t = L.deviceSizes.sort((e, t) => e - t), a = L.qualities?.sort((e, t) => e - t);
                F = { ...L, allSizes: e, deviceSizes: t, qualities: a };
            }
            if (void 0 === z)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", { value: "E163", enumerable: !1, configurable: !0 });
            let T = M.loader || z;
            delete M.loader, delete M.srcSet;
            let B = "__next_img_default" in T;
            if (B) {
                if ("custom" === F.loader)
                    throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", { value: "E252", enumerable: !1, configurable: !0 });
            }
            else {
                let e = T;
                T = t => { let { config: a, ...r } = t; return e(r); };
            }
            if (_) {
                "fill" === _ && (h = !0);
                let e = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[_];
                e && (f = { ...f, ...e });
                let a = { responsive: "100vw", fill: "100vw" }[_];
                a && !t && (t = a);
            }
            let H = "", G = n(u), W = n(x);
            if ((P = e) && "object" == typeof P && (l(P) || void 0 !== P.src)) {
                let t = l(e) ? e.default : e;
                if (!t.src)
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", { value: "E460", enumerable: !1, configurable: !0 });
                if (!t.height || !t.width)
                    throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", { value: "E48", enumerable: !1, configurable: !0 });
                if (R = t.blurWidth, O = t.blurHeight, v = v || t.blurDataURL, H = t.src, !h)
                    if (G || W) {
                        if (G && !W) {
                            let e = G / t.width;
                            W = Math.round(t.height * e);
                        }
                        else if (!G && W) {
                            let e = W / t.height;
                            G = Math.round(t.width * e);
                        }
                    }
                    else
                        G = t.width, W = t.height;
            }
            let q = !o && !d && ("lazy" === c || void 0 === c);
            (!(e = "string" == typeof e ? e : H) || e.startsWith("data:") || e.startsWith("blob:")) && (a = !0, q = !1), F.unoptimized && (a = !0), B && !F.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (a = !0);
            let U = n(m), Y = Object.assign(h ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: k, objectPosition: C } : {}, D ? {} : { color: "transparent" }, f), X = I || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0, r.getImageBlurSvg)({ widthInt: G, heightInt: W, blurWidth: R, blurHeight: O, blurDataURL: v || "", objectFit: Y.objectFit })}")` : `url("${w}")`, V = i.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit, Q = X ? { backgroundSize: V, backgroundPosition: Y.objectPosition || "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: X } : {}, K = function ({ config: e, src: t, unoptimized: a, width: r, quality: s, sizes: i, loader: l }) { if (a)
                return { src: t, srcSet: void 0, sizes: void 0 }; let { widths: n, kind: o } = function ({ deviceSizes: e, allSizes: t }, a, r) { if (r) {
                let a = /(^|\s)(1?\d?\d)vw/g, s = [];
                for (let e; e = a.exec(r);)
                    s.push(parseInt(e[2]));
                if (s.length) {
                    let a = .01 * Math.min(...s);
                    return { widths: t.filter(t => t >= e[0] * a), kind: "w" };
                }
                return { widths: t, kind: "w" };
            } return "number" != typeof a ? { widths: e, kind: "w" } : { widths: [...new Set([a, 2 * a].map(e => t.find(t => t >= e) || t[t.length - 1]))], kind: "x" }; }(e, r, i), d = n.length - 1; return { sizes: i || "w" !== o ? i : "100vw", srcSet: n.map((a, r) => `${l({ config: e, src: t, quality: s, width: a })} ${"w" === o ? a : r + 1}${o}`).join(", "), src: l({ config: e, src: t, quality: s, width: n[d] }) }; }({ config: F, src: e, unoptimized: a, width: G, quality: U, sizes: t, loader: T }), J = q ? "lazy" : c;
            return { props: { ...M, loading: J, fetchPriority: j, width: G, height: W, decoding: N, className: p, style: { ...Y, ...Q }, sizes: K.sizes, srcSet: K.srcSet, src: b || K.src }, meta: { unoptimized: a, preload: d || o, placeholder: w, fill: h } };
        }
    }, 18556, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "ImageConfigContext", { enumerable: !0, get: function () { return i; } });
        let r = e.r(55682)._(e.r(71645)), s = e.r(87690), i = r.default.createContext(s.imageConfigDefault);
    }, 65856, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "RouterContext", { enumerable: !0, get: function () { return r; } });
        let r = e.r(55682)._(e.r(71645)).default.createContext(null);
    }, 70965, (e, t, a) => {
        "use strict";
        function r(e, t) { let a = e || 75; return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - a) < Math.abs(e - a) ? t : e, 0) : a; }
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "findClosestQuality", { enumerable: !0, get: function () { return r; } });
    }, 1948, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "default", { enumerable: !0, get: function () { return i; } });
        let r = e.r(70965);
        function s({ config: e, src: t, width: a, quality: s }) {
            if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
                throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", { value: "E871", enumerable: !1, configurable: !0 });
            let i = (0, r.findClosestQuality)(s, e);
            return `${e.path}?url=${encodeURIComponent(t)}&w=${a}&q=${i}${t.startsWith("/_next/static/media/"), ""}`;
        }
        s.__next_img_default = !0;
        let i = s;
    }, 5500, (e, t, a) => {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), Object.defineProperty(a, "Image", { enumerable: !0, get: function () { return w; } });
        let r = e.r(55682), s = e.r(90809), i = e.r(43476), l = s._(e.r(71645)), n = r._(e.r(74080)), o = r._(e.r(25633)), d = e.r(8927), c = e.r(87690), p = e.r(18556);
        e.r(33525);
        let m = e.r(65856), u = r._(e.r(1948)), x = e.r(18581), h = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [32, 48, 64, 96, 128, 256, 384], qualities: [75], path: "/_next/image/", loader: "default", dangerouslyAllowSVG: !1, unoptimized: !0 };
        function f(e, t, a, r, s, i, l) { let n = e?.src; e && e["data-loaded-src"] !== n && (e["data-loaded-src"] = n, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => { }).then(() => { if (e.parentElement && e.isConnected) {
            if ("empty" !== t && s(!0), a?.current) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let r = !1, s = !1;
                a.current({ ...t, nativeEvent: t, currentTarget: e, target: e, isDefaultPrevented: () => r, isPropagationStopped: () => s, persist: () => { }, preventDefault: () => { r = !0, t.preventDefault(); }, stopPropagation: () => { s = !0, t.stopPropagation(); } });
            }
            r?.current && r.current(e);
        } })); }
        function b(e) { return l.use ? { fetchPriority: e } : { fetchpriority: e }; }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let g = (0, l.forwardRef)(({ src: e, srcSet: t, sizes: a, height: r, width: s, decoding: n, className: o, style: d, fetchPriority: c, placeholder: p, loading: m, unoptimized: u, fill: h, onLoadRef: g, onLoadingCompleteRef: y, setBlurComplete: w, setShowAltText: v, sizesInput: j, onLoad: N, onError: _, ...k }, C) => { let S = (0, l.useCallback)(e => { e && (_ && (e.src = e.src), e.complete && f(e, p, g, y, w, u, j)); }, [e, p, g, y, w, _, u, j]), A = (0, x.useMergedRef)(C, S); return (0, i.jsx)("img", { ...k, ...b(c), loading: m, width: s, height: r, decoding: n, "data-nimg": h ? "fill" : "1", className: o, style: d, sizes: a, srcSet: t, src: e, ref: A, onLoad: e => { f(e.currentTarget, p, g, y, w, u, j); }, onError: e => { v(!0), "empty" !== p && w(!0), _ && _(e); } }); });
        function y({ isAppRouter: e, imgAttributes: t }) { let a = { as: "image", imageSrcSet: t.srcSet, imageSizes: t.sizes, crossOrigin: t.crossOrigin, referrerPolicy: t.referrerPolicy, ...b(t.fetchPriority) }; return e && n.default.preload ? (n.default.preload(t.src, a), null) : (0, i.jsx)(o.default, { children: (0, i.jsx)("link", { rel: "preload", href: t.srcSet ? void 0 : t.src, ...a }, "__nimg-" + t.src + t.srcSet + t.sizes) }); }
        let w = (0, l.forwardRef)((e, t) => { let a = (0, l.useContext)(m.RouterContext), r = (0, l.useContext)(p.ImageConfigContext), s = (0, l.useMemo)(() => { let e = h || r || c.imageConfigDefault, t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t), a = e.deviceSizes.sort((e, t) => e - t), s = e.qualities?.sort((e, t) => e - t); return { ...e, allSizes: t, deviceSizes: a, qualities: s, localPatterns: "undefined" == typeof window ? r?.localPatterns : e.localPatterns }; }, [r]), { onLoad: n, onLoadingComplete: o } = e, x = (0, l.useRef)(n); (0, l.useEffect)(() => { x.current = n; }, [n]); let f = (0, l.useRef)(o); (0, l.useEffect)(() => { f.current = o; }, [o]); let [b, w] = (0, l.useState)(!1), [v, j] = (0, l.useState)(!1), { props: N, meta: _ } = (0, d.getImgProps)(e, { defaultLoader: u.default, imgConf: s, blurComplete: b, showAltText: v }); return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(g, { ...N, unoptimized: _.unoptimized, placeholder: _.placeholder, fill: _.fill, onLoadRef: x, onLoadingCompleteRef: f, setBlurComplete: w, setShowAltText: j, sizesInput: e.sizes, ref: t }), _.preload ? (0, i.jsx)(y, { isAppRouter: !a, imgAttributes: N }) : null] }); });
        ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
    }, 57242, e => {
        "use strict";
        var t = e.i(43476), a = e.i(69480);
        function r() { return (0, t.jsx)("section", { id: "aeo-lifecycle", className: "enhanced-surface section-spacing bg-white border-t border-[#e8e8e8]", children: (0, t.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, t.jsxs)("div", { className: "max-w-3xl mb-14", children: [(0, t.jsx)("p", { className: "section-label mb-5", children: "THE AEO LIFECYCLE (CIRCULAR LOOP)" }), (0, t.jsx)("h2", { className: "heading-2 max-w-3xl", children: "One closed loop. No other platform runs it." }), (0, t.jsx)("p", { className: "text-body mt-5 max-w-2xl", children: "Every pass learns what worked and feeds it back into your scores, priorities and content briefs — so Colytics gets sharper with every cycle." })] }), (0, t.jsxs)("div", { className: "mx-auto w-full max-w-5xl", children: [(0, t.jsx)("div", { className: "relative mx-auto w-full", style: { maxWidth: 720 }, children: (0, t.jsx)("img", { src: "/life_cycle.png", alt: "The AEO Lifecycle (Circular Loop)", width: 720, height: 720, loading: "lazy", className: "w-full h-auto block" }) }), (0, t.jsxs)("div", { className: "mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-6 sm:p-8", children: [(0, t.jsx)("p", { className: "text-[12px] font-semibold uppercase tracking-[0.2em] text-[#737373]", children: "Why the loop matters" }), (0, t.jsx)("p", { className: "mt-4 text-[16px] leading-relaxed text-[#4a4a4a]", children: "Every pass learns what worked and feeds it back into your scores, priorities and content briefs — so Colytics gets sharper with every cycle." })] }), (0, t.jsx)("div", { className: "mx-auto mt-7 w-full max-w-7xl border-t border-[#e8e8e8] pt-7", children: (0, t.jsxs)("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4", children: [(0, t.jsx)("p", { className: "text-body flex-1", children: "Run the whole lifecycle in one system." }), (0, t.jsx)(a.default, { label: "Ask your first question", className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] !text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors w-full sm:w-auto min-h-11" })] }) })] })] }) }); }
        e.s(["AeoLifecycleSection", () => r]);
    }, 69786, e => {
        "use strict";
        var t = e.i(43476), a = e.i(71645), r = e.i(75254);
        let s = (0, r.default)("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]), i = (0, r.default)("Globe", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]]), l = (0, r.default)("ListChecks", [["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }], ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }], ["path", { d: "M13 6h8", key: "15sg57" }], ["path", { d: "M13 12h8", key: "h98zly" }], ["path", { d: "M13 18h8", key: "oe0vm4" }]]), n = (0, r.default)("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
        var o = e.i(69480);
        let d = [{ number: "01", title: "Connect Your Domain", body: "Add your website URL. Add prompts and topics. Colytics begins crawling, analyzing content structure, and mapping your schema coverage." }, { number: "02", title: "See Your Citation Gaps", body: "Within minutes, see where competitors are cited and you are not. Understand the structural reasons behind every gap." }, { number: "03", title: "Execute the Fix List", body: "Get a prioritized roadmap of content, schema, and structural changes ranked by expected citation impact. Ship fixes. Track gains." }];
        function c() { let e = (0, a.useRef)(null); (0, a.useRef)(null); let [r, i] = (0, a.useState)(0), [l, n] = (0, a.useState)(!1); (0, a.useEffect)(() => { let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = () => n(e.matches); return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t); }, []), (0, a.useEffect)(() => { if (l)
            return void i(100); let t = e.current; if (!t)
            return; let a = 0, r = 0, s = () => { a = 0; let e = t.getBoundingClientRect(), l = .6 * window.innerHeight, n = .1 * window.innerHeight, o = 100 * Math.max(0, Math.min(1, (l - e.top) / (l - n + .8 * e.height))); i(r += (o - r) * .08), Math.abs(o - r) > .1 && (a = requestAnimationFrame(s)); }, n = () => { a || (a = requestAnimationFrame(s)); }; return s(), window.addEventListener("scroll", n, { passive: !0 }), window.addEventListener("resize", n), () => { window.removeEventListener("scroll", n), window.removeEventListener("resize", n), a && cancelAnimationFrame(a); }; }, [l]); let c = [0, 38, 72].reduce((e, t, a) => r >= t ? a : e, -1); return (0, t.jsxs)("section", { ref: e, id: "solutions", className: "section-spacing bg-white border-t border-[#e8e8e8]", children: [(0, t.jsxs)("div", { className: "max-w-3xl mx-auto min-w-0", children: [(0, t.jsxs)("div", { className: "mb-10 sm:mb-16", children: [(0, t.jsx)("p", { className: "text-xs font-semibold uppercase tracking-widest text-[#737373] mb-4", children: "How It Works" }), (0, t.jsx)("h2", { className: "heading-2-sm", children: "Three steps to AI visibility and AEO intelligence." })] }), (0, t.jsxs)("div", { className: "relative", children: [(0, t.jsx)("div", { className: "absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#e5e5e5] hidden sm:block" }), (0, t.jsx)("div", { className: "absolute left-[19px] top-0 w-[2px] bg-[#b7973073] hidden sm:block transition-none pointer-events-none", style: { height: `${r}%`, boxShadow: "0 0 8px #b7973073" } }), (0, t.jsx)("div", { className: "space-y-0", children: d.map((e, a) => { let r = c >= a; return (0, t.jsxs)("div", { className: "relative flex gap-6 sm:gap-10 pb-16 last:pb-0", children: [(0, t.jsx)("div", { className: "relative z-10 shrink-0 hidden sm:flex items-start pt-1", children: (0, t.jsx)("div", { className: `w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${r ? "border-[#D4AF37] bg-[#D4AF37] text-white shadow-[0_0_16px_rgba(37,99,235,0.35)]" : "border-[#d4d4d4] bg-white text-[#a3a3a3]"}`, children: r && a === d.length - 1 && c === d.length - 1 ? (0, t.jsx)(s, { className: "w-4 h-4", strokeWidth: 2.5 }) : e.number }) }), (0, t.jsxs)("div", { className: "flex-1 pt-1", children: [(0, t.jsx)("div", { className: "flex items-center gap-3 mb-3 sm:hidden", children: (0, t.jsx)("div", { className: `w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-500 ${r ? "border-[#D4AF37] bg-[#D4AF37] text-white" : "border-[#d4d4d4] bg-white text-[#a3a3a3]"}`, children: e.number }) }), (0, t.jsx)("h3", { className: `heading-3-lg mb-3 transition-colors duration-500 ${r ? "text-[#0a0a0a]" : "text-[#c0c0c0]"}`, children: e.title }), (0, t.jsx)("p", { className: `text-body-dark max-w-xl transition-colors duration-500 ${r ? "text-[#525252]" : "text-[#c8c8c8]"}`, children: e.body }), (0, t.jsxs)("div", { className: `mt-6 transition-all duration-700 ${r ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"}`, children: [0 === a && (0, t.jsx)(p, {}), 1 === a && (0, t.jsx)(m, {}), 2 === a && (0, t.jsx)(u, {})] })] })] }, e.number); }) })] })] }), (0, t.jsx)("div", { className: "mx-auto mt-20 w-full max-w-3xl border-t border-[#e8e8e8] pt-8", children: (0, t.jsxs)("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4", children: [(0, t.jsx)("p", { className: "text-body", children: "Your first audit is minutes away." }), (0, t.jsx)(o.default, { label: "Run my free audit", className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] !text-white rounded-lg text-button hover:bg-[#0a0a0a]/90 transition-colors whitespace-nowrap w-full sm:w-auto" })] }) })] }); }
        function p() { return (0, t.jsxs)("div", { className: "rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] max-w-lg", children: [(0, t.jsx)("p", { className: "ui-heading mb-4", children: "Setup Target Domain" }), (0, t.jsxs)("div", { className: "flex items-center gap-2.5 p-3 border border-[#e8e8e8] rounded-xl mb-4 bg-[#fafafa]", children: [(0, t.jsx)(i, { className: "w-4 h-4 text-[#a3a3a3] shrink-0" }), (0, t.jsx)("span", { className: "text-sm text-[#525252]", children: "yourwebsite.com" })] }), (0, t.jsx)("p", { className: "text-[11px] font-semibold text-[#737373] uppercase tracking-widest mb-3", children: "Target Prompts" }), (0, t.jsxs)("div", { className: "space-y-2", children: [(0, t.jsxs)("div", { className: "flex items-center gap-2.5 p-3 border border-[#e8e8e8] rounded-xl", children: [(0, t.jsx)(n, { className: "w-4 h-4 text-[#a3a3a3] shrink-0" }), (0, t.jsx)("span", { className: "text-sm text-[#525252]", children: "best enterprise seo tools" })] }), (0, t.jsxs)("div", { className: "flex items-center gap-2.5 p-3 border border-[#e8e8e8] rounded-xl", children: [(0, t.jsx)(n, { className: "w-4 h-4 text-[#a3a3a3] shrink-0" }), (0, t.jsx)("span", { className: "text-sm text-[#525252]", children: "how to improve ai search visibility" })] })] }), (0, t.jsxs)("div", { className: "mt-5 flex items-center gap-2", children: [(0, t.jsx)("div", { className: "w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0", children: (0, t.jsx)(s, { className: "w-3 h-3 text-white", strokeWidth: 3 }) }), (0, t.jsx)("span", { className: "text-sm font-medium text-green-600", children: "Crawling initialized" })] })] }); }
        function m() { return (0, t.jsxs)("div", { className: "rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] max-w-lg", children: [(0, t.jsxs)("div", { className: "flex items-start justify-between gap-3 mb-4", children: [(0, t.jsx)("p", { className: "ui-heading", children: "Citation Gap: 'best seo tools'" }), (0, t.jsx)("span", { className: "shrink-0 px-2.5 py-1 bg-red-50 text-red-600 rounded-full text-[11px] font-semibold border border-red-100", children: "Missed Citation" })] }), (0, t.jsxs)("div", { className: "p-3.5 border border-[#e8e8e8] rounded-xl mb-3 bg-[#fafafa]", children: [(0, t.jsx)("p", { className: "text-[10px] font-semibold text-[#a3a3a3] uppercase tracking-widest mb-2", children: "ChatGPT Response" }), (0, t.jsxs)("p", { className: "text-xs text-[#525252] leading-relaxed", children: ['"Top options include', " ", (0, t.jsx)("span", { className: "bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded font-medium", children: "Competitor A" }), " ", "and", " ", (0, t.jsx)("span", { className: "bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded font-medium", children: "Competitor B" }), " ", 'for enterprise teams needing scalable SEO workflows..."'] })] }), (0, t.jsxs)("div", { className: "p-3.5 bg-red-50 border border-red-100 rounded-xl", children: [(0, t.jsx)("p", { className: "text-xs font-semibold text-red-800 mb-2", children: "Why you missed this:" }), (0, t.jsxs)("ul", { className: "text-xs text-red-700 space-y-1 list-disc pl-4", children: [(0, t.jsx)("li", { children: "Missing relevant Schema markup" }), (0, t.jsx)("li", { children: "Content lacks structured lists" }), (0, t.jsx)("li", { children: 'Low entity density for "enterprise seo"' })] })] })] }); }
        function u() { return (0, t.jsxs)("div", { className: "rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] max-w-lg", children: [(0, t.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [(0, t.jsx)("p", { className: "ui-heading", children: "Prioritized Fixes" }), (0, t.jsx)(l, { className: "w-4 h-4 text-[#a3a3a3]" })] }), (0, t.jsx)("div", { className: "space-y-2.5", children: [{ done: !0, title: "Add SoftwareApplication Schema", impact: "High" }, { done: !1, title: "Structure pricing page data", impact: "Medium" }, { done: !1, title: "Increase entity density on /enterprise", impact: "Medium" }].map(e => (0, t.jsxs)("div", { className: `flex items-start gap-3 p-3 rounded-xl border ${e.done ? "border-green-200 bg-green-50" : "border-[#e8e8e8] bg-white"}`, children: [(0, t.jsx)("div", { className: `mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center border ${e.done ? "border-green-500 bg-green-500" : "border-[#d4d4d4]"}`, children: e.done ? (0, t.jsx)(s, { className: "w-3 h-3 text-white", strokeWidth: 3 }) : null }), (0, t.jsxs)("div", { children: [(0, t.jsx)("p", { className: "text-sm font-medium text-[#0a0a0a]", children: e.title }), (0, t.jsxs)("p", { className: "text-xs text-[#737373] mt-0.5", children: ["Expected Impact: ", e.impact] })] })] }, e.title)) })] }); }
        e.s(["HowItWorks", () => c], 69786);
    }, 79160, e => {
        "use strict";
        var t = e.i(43476), a = e.i(71645);
        function r() { let [e, r] = (0, a.useState)(1), [s, i] = (0, a.useState)(75), [l, n] = (0, a.useState)(375), [o, d] = (0, a.useState)("Multiple tools"), [c, p] = (0, a.useState)("Pro - $49/mo"), m = e * ("Doing it fully by hand" === o ? 62.75 : 23.25), u = m * s, x = Math.max(l - 49 * ("Pro - $49/mo" === c), 0), h = u + x; return (0, t.jsx)("div", { className: "px-6", children: (0, t.jsx)("div", { className: "max-w-6xl mx-auto", children: (0, t.jsxs)("div", { className: "overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-[0_-4px_60px_rgba(0,0,0,0.08)]", children: [(0, t.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden opacity-80", children: (0, t.jsx)("div", { className: "motion-sweep h-px w-1/3 bg-linear-to-r from-transparent via-[#1549f0] to-transparent" }) }), (0, t.jsxs)("div", { className: "flex items-center gap-2 border-b border-[#e8e8e8] bg-[#fafafa] px-4 py-3", children: [(0, t.jsxs)("div", { className: "flex gap-1.5", children: [(0, t.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#ff5f57]" }), (0, t.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#ffbd2e]" }), (0, t.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#28c840]" })] }), (0, t.jsx)("div", { className: "flex-1 flex justify-center", children: (0, t.jsxs)("div", { className: "flex items-center gap-2 rounded-md border border-[#e8e8e8] bg-white px-3 py-1 text-[11px] font-mono text-[#9a9a9a]", children: [(0, t.jsx)("span", { className: "inline-block h-2 w-2 rounded-full border border-[#cfcfcf]" }), "app.colytics.ai/roi-calculator"] }) }), (0, t.jsx)("div", { className: "w-14" })] }), (0, t.jsxs)("div", { className: "grid gap-0 lg:grid-cols-[320px_1fr]", children: [(0, t.jsxs)("div", { className: "space-y-5 border-b border-[#e8e8e8] bg-[#fafafa] px-5 py-5 lg:row-span-2 lg:border-b-0 lg:border-r", children: [(0, t.jsxs)("label", { className: "block", children: [(0, t.jsxs)("div", { className: "mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-600", children: [(0, t.jsx)("span", { children: "Websites / Clients" }), (0, t.jsx)("span", { children: e })] }), (0, t.jsx)("input", { type: "range", min: 1, max: 20, value: e, onChange: e => r(Number(e.target.value)), className: "w-full accent-gray-700" })] }), (0, t.jsxs)("label", { className: "block", children: [(0, t.jsxs)("div", { className: "mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-600", children: [(0, t.jsx)("span", { children: "Blended Hourly Rate" }), (0, t.jsxs)("span", { children: ["$", s] })] }), (0, t.jsx)("input", { type: "range", min: 25, max: 250, step: 5, value: s, onChange: e => i(Number(e.target.value)), className: "w-full accent-gray-700" })] }), (0, t.jsxs)("label", { className: "block", children: [(0, t.jsx)("div", { className: "mb-2 text-[11px] uppercase tracking-[0.25em] text-gray-600", children: "Current Monthly Tool Spend" }), (0, t.jsx)("input", { type: "number", min: 0, value: l, onChange: e => n(Number(e.target.value) || 0), className: "w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500" })] }), (0, t.jsxs)("label", { className: "block", children: [(0, t.jsx)("div", { className: "mb-2 text-[11px] uppercase tracking-[0.25em] text-gray-600", children: "Compare Against" }), (0, t.jsxs)("select", { value: o, onChange: e => d(e.target.value), className: "w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500", children: [(0, t.jsx)("option", { children: "Doing it fully by hand" }), (0, t.jsx)("option", { children: "Multiple tools" })] })] }), (0, t.jsxs)("label", { className: "block", children: [(0, t.jsx)("div", { className: "mb-2 text-[11px] uppercase tracking-[0.25em] text-gray-600", children: "Your Colytics Plan" }), (0, t.jsxs)("select", { value: c, onChange: e => p(e.target.value), className: "w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500", children: [(0, t.jsx)("option", { children: "Free - $0/mo" }), (0, t.jsx)("option", { children: "Pro - $49/mo" })] })] })] }), (0, t.jsx)("div", { className: "px-5 py-5 lg:pb-4", children: (0, t.jsxs)("div", { className: "space-y-4", children: [(0, t.jsxs)("div", { children: [(0, t.jsx)("div", { className: "text-[10px] uppercase tracking-[0.35em] text-gray-500", children: 1 === e ? "1 site" : `${e} sites` }), (0, t.jsxs)("div", { className: "mt-1 text-4xl font-semibold tracking-tight md:text-5xl", children: [m.toFixed(0), " HRS"] }), (0, t.jsxs)("p", { className: "mt-1 text-sm text-gray-600", children: ["saved every month with Colytics AI vs. your ", o.toLowerCase()] })] }), (0, t.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [(0, t.jsxs)("div", { className: "border border-gray-200 bg-gray-50 p-4", children: [(0, t.jsx)("div", { className: "text-[11px] uppercase tracking-[0.25em] text-gray-500", children: "Time Value / Month" }), (0, t.jsxs)("div", { className: "mt-2 text-2xl font-semibold", children: ["$", u.toLocaleString()] })] }), (0, t.jsxs)("div", { className: "border border-gray-200 bg-gray-50 p-4", children: [(0, t.jsx)("div", { className: "text-[11px] uppercase tracking-[0.25em] text-gray-500", children: "Tool Savings / Month" }), (0, t.jsxs)("div", { className: "mt-2 text-2xl font-semibold", children: ["$", x.toLocaleString()] })] })] }), (0, t.jsxs)("div", { className: "border border-gray-300 bg-white px-4 py-4", children: [(0, t.jsx)("div", { className: "text-[11px] uppercase tracking-[0.25em] text-gray-500", children: "Total Saved Per Year" }), (0, t.jsxs)("div", { className: "mt-2 text-3xl font-semibold", children: ["$", (12 * h).toLocaleString()] })] })] }) }), (0, t.jsxs)("div", { className: "px-5 pb-5 pt-0 lg:col-span-2 lg:pt-0", children: [(0, t.jsx)("div", { className: "overflow-x-auto pb-2", children: (0, t.jsxs)("table", { className: "w-full min-w-[760px] border-collapse text-sm", children: [(0, t.jsx)("thead", { children: (0, t.jsxs)("tr", { className: "border-b border-gray-300 text-left text-[10px] uppercase tracking-[0.25em] text-gray-600", children: [(0, t.jsx)("th", { className: "w-[38%] pb-3 pr-4 font-medium", children: "Module & Lifecycle Work" }), (0, t.jsx)("th", { className: "whitespace-nowrap pb-3 pr-4 font-medium", children: "Manual" }), (0, t.jsx)("th", { className: "whitespace-nowrap pb-3 pr-4 font-medium", children: "Multiple Tools" }), (0, t.jsx)("th", { className: "whitespace-nowrap pb-3 pr-4 font-medium", children: "Colytics AI" }), (0, t.jsx)("th", { className: "whitespace-nowrap pb-3 pr-4 text-right font-medium", children: "Save vs Manual" }), (0, t.jsx)("th", { className: "whitespace-nowrap pb-3 text-right font-medium", children: "Save vs Tools" })] }) }), (0, t.jsxs)("tbody", { children: [[["A · Website & Content Analyzer", 8, 3, .5], ["B · Structured Data & AI Files", 6, 2.5, .5], ["C · AI SEO / AEO Visibility", 7, 3, .75], ["D · Keyword → Prompt Intelligence", 6, 2.5, .5], ["E · Prompt Tracking & Multi-Model", 10, 4, .5], ["F · Competitor AI Intelligence", 6, 3, .5], ["G · Reports & Alerts", 5, 2.5, .25], ["H · Impact Analytics", 4, 2, .25], ["I · Content Generation & Detection", 16, 6, 1.5]].map(e => { let a = e[1] - e[3], r = e[2] - e[3]; return (0, t.jsxs)("tr", { className: "border-b border-gray-200 align-top", children: [(0, t.jsx)("td", { className: "py-2.5 pr-4 text-gray-800", children: e[0] }), (0, t.jsx)("td", { className: "whitespace-nowrap py-2.5 pr-4 text-gray-700 tabular-nums", children: e[1].toFixed(1) }), (0, t.jsx)("td", { className: "whitespace-nowrap py-2.5 pr-4 text-gray-700 tabular-nums", children: e[2].toFixed(1) }), (0, t.jsx)("td", { className: "whitespace-nowrap py-2.5 pr-4 text-gray-700 tabular-nums", children: e[3].toFixed(2) }), (0, t.jsxs)("td", { className: "whitespace-nowrap py-2.5 pr-4 text-right font-medium text-gray-900 tabular-nums", children: [a.toFixed(a >= 10 ? 1 : 2), " h"] }), (0, t.jsxs)("td", { className: "whitespace-nowrap py-2.5 text-right font-medium text-gray-900 tabular-nums", children: [r.toFixed(r >= 10 ? 1 : 2), " h"] })] }, e[0]); }), (0, t.jsxs)("tr", { className: "border-b border-gray-300 bg-gray-50 font-semibold", children: [(0, t.jsx)("td", { className: "py-3 pr-4", children: "Total per site / month" }), (0, t.jsx)("td", { className: "whitespace-nowrap py-3 pr-4 tabular-nums", children: "68.0" }), (0, t.jsx)("td", { className: "whitespace-nowrap py-3 pr-4 tabular-nums", children: "28.5" }), (0, t.jsx)("td", { className: "whitespace-nowrap py-3 pr-4 tabular-nums", children: "5.25" }), (0, t.jsx)("td", { className: "whitespace-nowrap py-3 pr-4 text-right tabular-nums", children: "62.75 hrs" }), (0, t.jsx)("td", { className: "whitespace-nowrap py-3 text-right tabular-nums", children: "23.25 hrs" })] })] })] }) }), (0, t.jsxs)("p", { className: "mt-4 text-xs text-gray-600", children: ["Colytics runs the lifecycle in ~", "5.25", " hrs/site/mo vs ~", ("Doing it fully by hand" === o ? 68 : 28.5).toFixed(1), " with separate tools."] }), (0, t.jsx)("p", { className: "mt-4 text-[11px] leading-relaxed text-gray-500", children: 'Illustrative benchmarks for a monthly AEO cycle, based on agency experience — starting points you can tune. "Multiple tools" assumes a typical stack (rank tracker + AI monitor + schema tool + AI writer + detector). Defaults: $375/mo example stack, $75/hr blended rate.' })] })] })] }) }) }); }
        e.s(["RoiMockup", () => r, "default", 0, r]);
    }, 48571, e => {
        "use strict";
        var t = e.i(43476);
        let a = (0, e.i(75254).default)("MessageSquareText", [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }], ["path", { d: "M13 8H7", key: "14i4kc" }], ["path", { d: "M17 12H7", key: "16if0g" }]]);
        var r = e.i(83086), s = e.i(71645);
        let i = [{ id: "chatgpt", label: "ChatGPT", value: 52, color: "#0a0a0a" }, { id: "gemini", label: "Gemini", value: 38, color: "#4285f4" }, { id: "perplexity", label: "Perplexity", value: 61, color: "#5046e5" }], l = { chatgpt: "Your ChatGPT share slipped after a competitor updated comparison pages and improved schema. Focus on adding product schema and FAQ to priority pages, ranked High impact / Low effort.", gemini: "Your Gemini share slipped because a competitor published structured comparison pages. Add Product schema and an FAQ block to pricing, ranked High impact / Low effort. Open the fix?", perplexity: "Perplexity citations dropped after a key page lost schema signals. Restore structured data on top-performing pages and re-audit the crawl to recover citations." };
        function n() { let [e, n] = (0, s.useState)(i[1]); return (0, t.jsxs)("div", { className: "relative min-w-0", children: [(0, t.jsx)("div", { className: "absolute -inset-2 sm:-inset-4 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(21,73,240,0.10),transparent_60%)] blur-2xl" }), (0, t.jsxs)("div", { className: "relative mockup-shell overflow-hidden rounded-2xl sm:rounded-3xl border border-[#e8e8e8] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]", children: [(0, t.jsxs)("div", { className: "flex items-center gap-2 border-b border-[#e8e8e8] bg-[#fafafa] px-4 py-3", children: [(0, t.jsxs)("div", { className: "flex gap-1.5", children: [(0, t.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#ff5f57]" }), (0, t.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#ffbd2e]" }), (0, t.jsx)("div", { className: "h-3 w-3 rounded-full bg-[#28c840]" })] }), (0, t.jsx)("div", { className: "flex flex-1 justify-center", children: (0, t.jsxs)("div", { className: "flex items-center gap-2 rounded-md border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-bold text-[#000000] shadow-[0_0_0_3px_rgba(212,175,55,0.06)]", children: [(0, t.jsx)(a, { className: "h-3 w-3" }), "Ask AI"] }) }), (0, t.jsx)("div", { className: "w-14" })] }), (0, t.jsxs)("div", { className: "flex flex-col gap-4 bg-white p-4 sm:p-5 md:p-6", children: [(0, t.jsxs)("div", { className: "mb-2", children: [(0, t.jsx)("div", { className: "mb-2 text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]", children: "Share of voice - Last 30 days" }), (0, t.jsx)("div", { className: "space-y-3", children: i.map(e => (0, t.jsx)("div", { className: "flex items-center gap-3", children: (0, t.jsxs)("div", { className: "flex-1", children: [(0, t.jsxs)("div", { className: "mb-1 flex items-center justify-between", children: [(0, t.jsx)("div", { className: "text-[13px] font-medium text-[#0a0a0a]", children: e.label }), (0, t.jsxs)("div", { className: "font-mono text-[13px] text-[#525252]", children: [e.value, "%"] })] }), (0, t.jsx)("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-[#f3f3f3]", children: (0, t.jsx)("button", { type: "button", onClick: () => n(e), className: "block h-full cursor-pointer rounded-full transition-all", style: { width: `${e.value}%`, background: e.color }, "aria-label": `Show ${e.label} answer` }) })] }) }, e.id)) })] }), (0, t.jsxs)("div", { className: "rounded-2xl border border-[#e8e8e8] bg-[#fafafa] p-3 sm:p-4", children: [(0, t.jsxs)("div", { className: "mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [(0, t.jsxs)("div", { className: "min-w-0", children: [(0, t.jsx)("div", { className: "mb-1 text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]", children: "Question" }), (0, t.jsxs)("p", { className: "text-[13px] sm:text-[14px] font-medium text-[#0a0a0a]", children: ["Why did ", e.label, " share change?"] })] }), (0, t.jsxs)("button", { className: "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#1549f0]/20 bg-[#1549f0] px-3 py-2.5 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(21,73,240,0.20)] transition-colors hover:bg-[#0f3fd0]", children: [(0, t.jsx)(r.Sparkles, { className: "h-3.5 w-3.5 text-white" }), "Ask AI"] })] }), (0, t.jsx)("div", { className: "mb-3 h-px bg-[#e8e8e8]" }), (0, t.jsx)("p", { className: "mb-3 text-[13px] leading-relaxed text-[#525252]", children: l[e.id] }), (0, t.jsx)("div", { className: "grid gap-2 grid-cols-1 sm:grid-cols-3", children: [{ label: "Cause", value: "Schema gap" }, { label: "Effect", value: "Score -6 pts" }, { label: "Next move", value: "Fix FAQ schema" }].map(e => (0, t.jsxs)("div", { className: "rounded-xl border border-[#e8e8e8] bg-white p-3", children: [(0, t.jsx)("div", { className: "mb-1 text-[10px] uppercase tracking-[0.16em] text-[#9a9a9a]", children: e.label }), (0, t.jsx)("div", { className: "text-[12px] font-medium text-[#0a0a0a]", children: e.value })] }, e.label)) })] })] })] })] }); }
        e.s(["AskAiMockup", () => n], 48571);
    }, 82844, e => {
        "use strict";
        var t = e.i(43476), a = e.i(71645), r = e.i(69480);
        function s() {
            let e = (0, a.useRef)(null), [s, i] = (0, a.useState)(!1);
            return (0, a.useEffect)(() => { let t = new IntersectionObserver(([e]) => { i(e.isIntersecting); }, { threshold: .1, rootMargin: "0px 0px -10% 0px" }); return e.current && t.observe(e.current), () => t.disconnect(); }, []), (0, t.jsxs)("section", { id: "cta", className: "py-24 px-6 bg-white relative overflow-hidden border-t border-neutral-100", children: [(0, t.jsx)("div", { className: "absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" }), (0, t.jsx)("div", { className: "absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#BF953F]/3 blur-[120px] pointer-events-none" }), (0, t.jsxs)("div", { className: "max-w-5xl mx-auto", children: [(0, t.jsx)("style", { dangerouslySetInnerHTML: { __html: `
              .cta-black-card {
                position: relative;
                background:
                  radial-gradient(
                    circle at 85% 50%,
                    rgba(212,175,55,0.28) 0%,
                    rgba(212,175,55,0.12) 18%,
                    rgba(18,18,18,0.96) 55%,
                    #050505 100%
                  );
                background-color: #050505;

                box-shadow:
                  0 35px 80px rgba(0,0,0,0.45),
                  0 8px 30px rgba(212,175,55,0.06);

                border: 1px solid rgba(212,175,55,0.18);

                transform: perspective(1200px) rotateX(15deg) scale(0.93) translateY(50px);
                opacity: 0.6;

                transition:
                  transform 1.1s cubic-bezier(0.16, 1, 0.3, 1),
                  opacity 1.1s ease-out,
                  border-color 0.5s ease;

                will-change: transform, opacity;
              }

              .cta-black-card::before {
                content: "";
                position: absolute;
                inset: 0;

                background-image:
                  linear-gradient(
                    rgba(255,255,255,0.025) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(255,255,255,0.025) 1px,
                    transparent 1px
                  );

                background-size: 36px 36px;
                pointer-events: none;
              }

              .cta-black-card::after {
                content: "";
                position: absolute;
                inset: 0;

                background:
                  radial-gradient(
                    circle at 80% 70%,
                    rgba(212,175,55,0.15),
                    transparent 40%
                  );

                pointer-events: none;
              }

              .cta-black-card.in-view {
                transform:
                  perspective(1200px)
                  rotateX(0deg)
                  scale(1)
                  translateY(0);

                opacity: 1;
                border-color: rgba(212,175,55,0.32);
              }
            ` } }), (0, t.jsxs)("div", { ref: e, className: `cta-black-card rounded-[32px] p-8 md:p-14 relative overflow-hidden text-left ${s ? "in-view" : ""}`, children: [(0, t.jsxs)("div", { className: "absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0", children: [(0, t.jsx)("p", { className: "hidden sm:block text-center font-serif leading-none text-[#D4AF37]/[0.05] select-none whitespace-nowrap", style: { fontSize: "clamp(80px, 15vw, 200px)" }, children: "Colytics AI" }), (0, t.jsx)("img", { src: "/logo/notext.png", alt: "logo", className: "w-[280px] sm:w-[480px] md:w-[600px] h-auto block opacity-[0.08]" })] }), (0, t.jsxs)("div", { className: "relative z-10 max-w-3xl", children: [(0, t.jsxs)("div", { className: "flex items-center gap-2 mb-8", children: [(0, t.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" }), (0, t.jsx)("span", { className: "text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]", children: "Early Access Open" })] }), (0, t.jsx)("h2", { className: "font-serif text-[42px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#FAFAF8] mb-8", children: "Your competitors are already being cited." }), (0, t.jsx)("div", { className: "space-y-4 mb-10", children: ["Discover AI citations your competitors already have", "See exactly which LLMs are citing your site", "Optimize for AEO and claim your AI visibility"].map((e, a) => (0, t.jsxs)("div", { className: "flex items-center gap-3", children: [(0, t.jsx)("div", { className: "w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0", children: (0, t.jsx)("svg", { className: "w-2.5 h-2.5 text-[#D4AF37]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, children: (0, t.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) }) }), (0, t.jsx)("span", { className: "text-[15px] text-[#E8E8E8] font-medium", children: e })] }, a)) }), (0, t.jsxs)("div", { className: "border-t border-[#D4AF37]/15 pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6", children: [(0, t.jsxs)("div", { children: [(0, t.jsx)("p", { className: "text-[11px] text-[#D4AF37] uppercase tracking-widest font-semibold mb-3", children: "Enterprise Ready" }), (0, t.jsxs)("div", { className: "flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/60", children: [(0, t.jsx)("span", { children: "No credit card needed" }), (0, t.jsx)("span", { children: "Bank-level encryption" }), (0, t.jsx)("span", { children: "GDPR & CCPA compliant" })] })] }), (0, t.jsx)(r.default, { label: "Ask your first question", className: "inline-flex items-center justify-center gap-2 px-8 py-4 !bg-[#E0B84D] hover:!bg-[#E8C15A] !text-[#0a0a0a] rounded-lg text-button transition-all duration-300 w-full sm:w-auto min-h-11 font-bold shadow-[0_10px_35px_rgba(224,184,77,0.28)] hover:shadow-[0_15px_45px_rgba(224,184,77,0.4)] border border-[#D4AF37]/20 hover:scale-[1.02]" })] })] })] })] })] });
        }
        e.s(["CtaSection", () => s]);
    }, 31866, e => {
        "use strict";
        var t = e.i(43476), a = e.i(71645), r = e.i(47163);
        e.s(["TracingBeam", 0, ({ children: e, className: s, showLeftBeam: i = !0, showRightBeam: l = !0 }) => {
                let n = (0, a.useRef)(null);
                return (0, t.jsxs)("div", { ref: n, className: (0, r.cn)("relative h-full w-full tracing-beam-wrapper", s), children: [(0, t.jsx)("style", { dangerouslySetInnerHTML: { __html: `
                .tracing-beam-wrapper {
                    --beam-width: 32px;
                    --beam-height: 100%;
                    --hatched-width: 24px;
                    --line-left: 24px;
                    --content-pl: 24px;
                }
                @media (min-width: 640px) {
                    .tracing-beam-wrapper {
                        --beam-width: 48px;
                        --beam-height: 100%;
                        --hatched-width: 36px;
                        --line-left: 36px;
                        --content-pl: 36px;
                    }
                }
                @media (min-width: 768px) {
                    .tracing-beam-wrapper {
                        --beam-width: 64px;
                        --beam-height: 100%;
                        --hatched-width: 48px;
                        --line-left: 48px;
                        --content-pl: 48px;
                    }
                }
                @media (min-width: 1280px) {
                    .tracing-beam-wrapper {
                        --line-left: 48px;
                        --hatched-width: 48px;
                        --beam-width: 64px;
                        --beam-height: 100%;
                        --content-pl: max(0px, calc(48px - (100vw - 1280px) / 2));
                    }
                }
                @keyframes beam-loop {
                    0% {
                        top: 0%;
                        transform: translateY(-50%);
                        opacity: 0;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        top: 100%;
                        transform: translateY(-50%);
                        opacity: 0;
                    }
                }
                .animate-beam-loop {
                    animation: beam-loop 60s linear infinite;
                }
            ` } }), i && (0, t.jsxs)("div", { className: "hidden sm:block absolute top-0 pointer-events-none z-20 left-0 w-[var(--beam-width)] h-[var(--beam-height)]", children: [(0, t.jsx)("div", { className: "absolute inset-y-0 left-0 border-r border-border opacity-[0.25] w-[var(--hatched-width)]", style: { backgroundImage: `repeating-linear-gradient(
                -45deg,
                #000,
                #000 1px,
                transparent 1px,
                transparent 14px
              )` }, children: (0, t.jsx)("div", { className: "absolute inset-y-0 left-0 w-px bg-border/20" }) }), (0, t.jsxs)("div", { className: "absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10 left-[var(--line-left)]", children: [(0, t.jsxs)("div", { className: "absolute top-0 left-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.9),0_0_6px_rgba(212,175,55,0.5)] animate-beam-loop z-30", children: [(0, t.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] animate-ping opacity-45 scale-150" }), (0, t.jsx)("div", { className: "absolute inset-[-3px] rounded-full bg-[#D4AF37]/20" })] }), (0, t.jsx)("div", { className: "absolute top-0 left-[-1px] w-[2px] h-80 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent animate-beam-loop" }), (0, t.jsx)("div", { className: "absolute top-0 left-[-10px] w-[20px] h-40 animate-beam-loop", style: { background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)" } })] })] }), (0, t.jsx)("div", { className: (0, r.cn)("relative transition-all duration-300 pl-0 sm:pl-[var(--content-pl)]", l && "pr-0 sm:pr-[var(--content-pl)]"), children: e }), l && (0, t.jsxs)("div", { className: "hidden sm:block absolute top-0 pointer-events-none z-20 right-0 w-[var(--beam-width)] h-[var(--beam-height)]", children: [(0, t.jsx)("div", { className: "absolute inset-y-0 right-0 border-l border-border opacity-[0.25] w-[var(--hatched-width)]", style: { backgroundImage: `repeating-linear-gradient(
                -45deg,
                #000,
                #000 1px,
                transparent 1px,
                transparent 14px
              )` }, children: (0, t.jsx)("div", { className: "absolute inset-y-0 right-0 w-px bg-border/20" }) }), (0, t.jsxs)("div", { className: "absolute top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10 right-[var(--line-left)]", children: [(0, t.jsxs)("div", { className: "absolute top-0 right-[-2.5px] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.9),0_0_6px_rgba(212,175,55,0.5)] animate-beam-loop z-30", children: [(0, t.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] animate-ping opacity-45 scale-150" }), (0, t.jsx)("div", { className: "absolute inset-[-3px] rounded-full bg-[#D4AF37]/20" })] }), (0, t.jsx)("div", { className: "absolute top-0 right-[-1px] w-[2px] h-80 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent animate-beam-loop" }), (0, t.jsx)("div", { className: "absolute top-0 right-[-10px] w-[20px] h-40 animate-beam-loop", style: { background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)" } })] })] })] });
            }]);
    }]);
