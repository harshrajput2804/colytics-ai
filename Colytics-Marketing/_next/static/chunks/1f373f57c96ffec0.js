(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 98183, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = { assign: function () { return s; }, searchParamsToUrlQuery: function () { return a; }, urlQueryToSearchParams: function () { return l; } };
        for (var o in n)
            Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
        function a(e) { let t = {}; for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n];
        } return t; }
        function i(e) { return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e); }
        function l(e) { let t = new URLSearchParams; for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n)
                    t.append(r, i(e));
            else
                t.set(r, i(n)); return t; }
        function s(e, ...t) { for (let r of t) {
            for (let t of r.keys())
                e.delete(t);
            for (let [t, n] of r.entries())
                e.append(t, n);
        } return e; }
    }, 95057, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = { formatUrl: function () { return l; }, formatWithValidation: function () { return c; }, urlObjectKeys: function () { return s; } };
        for (var o in n)
            Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
        let a = e.r(90809)._(e.r(98183)), i = /https?|ftp|gopher|file/;
        function l(e) { let { auth: t, hostname: r } = e, n = e.protocol || "", o = e.pathname || "", l = e.hash || "", s = e.query || "", c = !1; t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), s && "object" == typeof s && (s = String(a.urlQueryToSearchParams(s))); let u = e.search || s && `?${s}` || ""; return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || i.test(n)) && !1 !== c ? (c = "//" + (c || ""), o && "/" !== o[0] && (o = "/" + o)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), u && "?" !== u[0] && (u = "?" + u), o = o.replace(/[?#]/g, encodeURIComponent), u = u.replace("#", "%23"), `${n}${c}${o}${u}${l}`; }
        let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function c(e) { return l(e); }
    }, 18581, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }), Object.defineProperty(r, "useMergedRef", { enumerable: !0, get: function () { return o; } });
        let n = e.r(71645);
        function o(e, t) { let r = (0, n.useRef)(null), o = (0, n.useRef)(null); return (0, n.useCallback)(n => { if (null === n) {
            let e = r.current;
            e && (r.current = null, e());
            let t = o.current;
            t && (o.current = null, t());
        }
        else
            e && (r.current = a(e, n)), t && (o.current = a(t, n)); }, [e, t]); }
        function a(e, t) { if ("function" != typeof e)
            return e.current = t, () => { e.current = null; }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null);
        } }
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), t.exports = r.default);
    }, 18967, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = { DecodeError: function () { return b; }, MiddlewareNotFoundError: function () { return w; }, MissingStaticPage: function () { return x; }, NormalizeError: function () { return v; }, PageNotFoundError: function () { return y; }, SP: function () { return h; }, ST: function () { return g; }, WEB_VITALS: function () { return a; }, execOnce: function () { return i; }, getDisplayName: function () { return d; }, getLocationOrigin: function () { return c; }, getURL: function () { return u; }, isAbsoluteUrl: function () { return s; }, isResSent: function () { return f; }, loadGetInitialProps: function () { return p; }, normalizeRepeatedSlashes: function () { return m; }, stringifyError: function () { return k; } };
        for (var o in n)
            Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
        let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function i(e) { let t, r = !1; return (...n) => (r || (r = !0, t = e(...n)), t); }
        let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, s = e => l.test(e);
        function c() { let { protocol: e, hostname: t, port: r } = window.location; return `${e}//${t}${r ? ":" + r : ""}`; }
        function u() { let { href: e } = window.location, t = c(); return e.substring(t.length); }
        function d(e) { return "string" == typeof e ? e : e.displayName || e.name || "Unknown"; }
        function f(e) { return e.finished || e.headersSent; }
        function m(e) { let t = e.split("?"); return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : ""); }
        async function p(e, t) { let r = t.res || t.ctx && t.ctx.res; if (!e.getInitialProps)
            return t.ctx && t.Component ? { pageProps: await p(t.Component, t.ctx) } : {}; let n = await e.getInitialProps(t); if (r && f(r))
            return n; if (!n)
            throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", { value: "E394", enumerable: !1, configurable: !0 }); return n; }
        let h = "undefined" != typeof performance, g = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class b extends Error {
        }
        class v extends Error {
        }
        class y extends Error {
            constructor(e) { super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`; }
        }
        class x extends Error {
            constructor(e, t) { super(), this.message = `Failed to load static file for page: ${e} ${t}`; }
        }
        class w extends Error {
            constructor() { super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"; }
        }
        function k(e) { return JSON.stringify({ message: e.message, stack: e.stack }); }
    }, 73668, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }), Object.defineProperty(r, "isLocalURL", { enumerable: !0, get: function () { return a; } });
        let n = e.r(18967), o = e.r(52817);
        function a(e) { if (!(0, n.isAbsoluteUrl)(e))
            return !0; try {
            let t = (0, n.getLocationOrigin)(), r = new URL(e, t);
            return r.origin === t && (0, o.hasBasePath)(r.pathname);
        }
        catch (e) {
            return !1;
        } }
    }, 84508, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }), Object.defineProperty(r, "errorOnce", { enumerable: !0, get: function () { return n; } });
        let n = e => { };
    }, 22016, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var n = { default: function () { return b; }, useLinkStatus: function () { return y; } };
        for (var o in n)
            Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
        let a = e.r(90809), i = e.r(43476), l = a._(e.r(71645)), s = e.r(95057), c = e.r(8372), u = e.r(18581), d = e.r(18967), f = e.r(5550);
        e.r(33525);
        let m = e.r(91949), p = e.r(73668), h = e.r(9396);
        function g(e) { return "string" == typeof e ? e : (0, s.formatUrl)(e); }
        function b(t) { var r; let n, o, a, [s, b] = (0, l.useOptimistic)(m.IDLE_LINK_STATUS), y = (0, l.useRef)(null), { href: x, as: w, children: k, prefetch: E = null, passHref: j, replace: N, shallow: C, scroll: S, onClick: O, onMouseEnter: R, onTouchStart: P, legacyBehavior: _ = !1, onNavigate: T, ref: z, unstable_dynamicOnHover: A, ...M } = t; n = k, _ && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", { children: n })); let I = l.default.useContext(c.AppRouterContext), L = !1 !== E, D = !1 !== E ? null === (r = E) || "auto" === r ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR, { href: F, as: W } = l.default.useMemo(() => { let e = g(x); return { href: e, as: w ? g(w) : e }; }, [x, w]); if (_) {
            if (n?.$$typeof === Symbol.for("react.lazy"))
                throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", { value: "E863", enumerable: !1, configurable: !0 });
            o = l.default.Children.only(n);
        } let $ = _ ? o && "object" == typeof o && o.ref : z, B = l.default.useCallback(e => (null !== I && (y.current = (0, m.mountLinkInstance)(e, F, I, D, L, b)), () => { y.current && ((0, m.unmountLinkForCurrentNavigation)(y.current), y.current = null), (0, m.unmountPrefetchableInstance)(e); }), [L, F, I, D, b]), U = { ref: (0, u.useMergedRef)(B, $), onClick(t) { _ || "function" != typeof O || O(t), _ && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !I || t.defaultPrevented || function (t, r, n, o, a, i, s) { if ("undefined" != typeof window) {
                let c, { nodeName: u } = t.currentTarget;
                if ("A" === u.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download"))
                    return;
                if (!(0, p.isLocalURL)(r)) {
                    a && (t.preventDefault(), location.replace(r));
                    return;
                }
                if (t.preventDefault(), s) {
                    let e = !1;
                    if (s({ preventDefault: () => { e = !0; } }), e)
                        return;
                }
                let { dispatchNavigateAction: d } = e.r(99781);
                l.default.startTransition(() => { d(n || r, a ? "replace" : "push", i ?? !0, o.current); });
            } }(t, F, W, y, N, S, T); }, onMouseEnter(e) { _ || "function" != typeof R || R(e), _ && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), I && L && (0, m.onNavigationIntent)(e.currentTarget, !0 === A); }, onTouchStart: function (e) { _ || "function" != typeof P || P(e), _ && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), I && L && (0, m.onNavigationIntent)(e.currentTarget, !0 === A); } }; return (0, d.isAbsoluteUrl)(W) ? U.href = W : _ && !j && ("a" !== o.type || "href" in o.props) || (U.href = (0, f.addBasePath)(W)), a = _ ? l.default.cloneElement(o, U) : (0, i.jsx)("a", { ...M, ...U, children: n }), (0, i.jsx)(v.Provider, { value: s, children: a }); }
        e.r(84508);
        let v = (0, l.createContext)(m.IDLE_LINK_STATUS), y = () => (0, l.useContext)(v);
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), t.exports = r.default);
    }, 7670, 47163, e => {
        "use strict";
        function t() { for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
            (e = arguments[r]) && (t = function e(t) { var r, n, o = ""; if ("string" == typeof t || "number" == typeof t)
                o += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var a = t.length;
                    for (r = 0; r < a; r++)
                        t[r] && (n = e(t[r])) && (o && (o += " "), o += n);
                }
                else
                    for (n in t)
                        t[n] && (o && (o += " "), o += n); return o; }(e)) && (n && (n += " "), n += t); return n; }
        e.s(["clsx", () => t], 7670);
        let r = (e = new Map, t = null, r) => ({ nextPart: e, validators: t, classGroupId: r }), n = [], o = (e, t, r) => { if (0 == e.length - t)
            return r.classGroupId; let n = e[t], a = r.nextPart.get(n); if (a) {
            let r = o(e, t + 1, a);
            if (r)
                return r;
        } let i = r.validators; if (null === i)
            return; let l = 0 === t ? e.join("-") : e.slice(t).join("-"), s = i.length; for (let e = 0; e < s; e++) {
            let t = i[e];
            if (t.validator(l))
                return t.classGroupId;
        } }, a = (e, t) => { let n = r(); for (let r in e)
            i(e[r], n, r, t); return n; }, i = (e, t, r, n) => { let o = e.length; for (let a = 0; a < o; a++)
            l(e[a], t, r, n); }, l = (e, t, r, n) => { "string" == typeof e ? s(e, t, r) : "function" == typeof e ? c(e, t, r, n) : u(e, t, r, n); }, s = (e, t, r) => { ("" === e ? t : d(t, e)).classGroupId = r; }, c = (e, t, r, n) => { f(e) ? i(e(n), t, r, n) : (null === t.validators && (t.validators = []), t.validators.push({ classGroupId: r, validator: e })); }, u = (e, t, r, n) => { let o = Object.entries(e), a = o.length; for (let e = 0; e < a; e++) {
            let [a, l] = o[e];
            i(l, d(t, a), r, n);
        } }, d = (e, t) => { let n = e, o = t.split("-"), a = o.length; for (let e = 0; e < a; e++) {
            let t = o[e], a = n.nextPart.get(t);
            a || (a = r(), n.nextPart.set(t, a)), n = a;
        } return n; }, f = e => "isThemeGetter" in e && !0 === e.isThemeGetter, m = [], p = (e, t, r, n, o) => ({ modifiers: e, hasImportantModifier: t, baseClassName: r, maybePostfixModifierPosition: n, isExternal: o }), h = /\s+/, g = e => { let t; if ("string" == typeof e)
            return e; let r = ""; for (let n = 0; n < e.length; n++)
            e[n] && (t = g(e[n])) && (r && (r += " "), r += t); return r; }, b = [], v = e => { let t = t => t[e] || b; return t.isThemeGetter = !0, t; }, y = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, x = /^\((?:(\w[\w-]*):)?(.+)\)$/i, w = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, E = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, j = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, N = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, C = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, S = e => w.test(e), O = e => !!e && !Number.isNaN(Number(e)), R = e => !!e && Number.isInteger(Number(e)), P = e => e.endsWith("%") && O(e.slice(0, -1)), _ = e => k.test(e), T = () => !0, z = e => E.test(e) && !j.test(e), A = () => !1, M = e => N.test(e), I = e => C.test(e), L = e => !F(e) && !Y(e), D = e => et(e, ea, A), F = e => y.test(e), W = e => et(e, ei, z), $ = e => et(e, el, O), B = e => et(e, ec, T), U = e => et(e, es, A), G = e => et(e, en, A), K = e => et(e, eo, I), V = e => et(e, eu, M), Y = e => x.test(e), q = e => er(e, ei), H = e => er(e, es), X = e => er(e, en), Z = e => er(e, ea), J = e => er(e, eo), Q = e => er(e, eu, !0), ee = e => er(e, ec, !0), et = (e, t, r) => { let n = y.exec(e); return !!n && (n[1] ? t(n[1]) : r(n[2])); }, er = (e, t, r = !1) => { let n = x.exec(e); return !!n && (n[1] ? t(n[1]) : r); }, en = e => "position" === e || "percentage" === e, eo = e => "image" === e || "url" === e, ea = e => "length" === e || "size" === e || "bg-size" === e, ei = e => "length" === e, el = e => "number" === e, es = e => "family-name" === e, ec = e => "number" === e || "weight" === e, eu = e => "shadow" === e, ed = ((e, ...t) => { let r, i, l, s, c = e => { let t = i(e); if (t)
            return t; let n = ((e, t) => { let { parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o, sortModifiers: a } = t, i = [], l = e.trim().split(h), s = ""; for (let e = l.length - 1; e >= 0; e -= 1) {
            let t = l[e], { isExternal: c, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: m } = r(t);
            if (c) {
                s = t + (s.length > 0 ? " " + s : s);
                continue;
            }
            let p = !!m, h = n(p ? f.substring(0, m) : f);
            if (!h) {
                if (!p || !(h = n(f))) {
                    s = t + (s.length > 0 ? " " + s : s);
                    continue;
                }
                p = !1;
            }
            let g = 0 === u.length ? "" : 1 === u.length ? u[0] : a(u).join(":"), b = d ? g + "!" : g, v = b + h;
            if (i.indexOf(v) > -1)
                continue;
            i.push(v);
            let y = o(h, p);
            for (let e = 0; e < y.length; ++e) {
                let t = y[e];
                i.push(b + t);
            }
            s = t + (s.length > 0 ? " " + s : s);
        } return s; })(e, r); return l(e, n), n; }; return s = u => { var d; let f; return i = (r = { cache: (e => { if (e < 1)
                return { get: () => void 0, set: () => { } }; let t = 0, r = Object.create(null), n = Object.create(null), o = (o, a) => { r[o] = a, ++t > e && (t = 0, n = r, r = Object.create(null)); }; return { get(e) { let t = r[e]; return void 0 !== t ? t : void 0 !== (t = n[e]) ? (o(e, t), t) : void 0; }, set(e, t) { e in r ? r[e] = t : o(e, t); } }; })((d = t.reduce((e, t) => t(e), e())).cacheSize), parseClassName: (e => { let { prefix: t, experimentalParseClassName: r } = e, n = e => { let t, r = [], n = 0, o = 0, a = 0, i = e.length; for (let l = 0; l < i; l++) {
                let i = e[l];
                if (0 === n && 0 === o) {
                    if (":" === i) {
                        r.push(e.slice(a, l)), a = l + 1;
                        continue;
                    }
                    if ("/" === i) {
                        t = l;
                        continue;
                    }
                }
                "[" === i ? n++ : "]" === i ? n-- : "(" === i ? o++ : ")" === i && o--;
            } let l = 0 === r.length ? e : e.slice(a), s = l, c = !1; return l.endsWith("!") ? (s = l.slice(0, -1), c = !0) : l.startsWith("!") && (s = l.slice(1), c = !0), p(r, c, s, t && t > a ? t - a : void 0); }; if (t) {
                let e = t + ":", r = n;
                n = t => t.startsWith(e) ? r(t.slice(e.length)) : p(m, !1, t, void 0, !0);
            } if (r) {
                let e = n;
                n = t => r({ className: t, parseClassName: e });
            } return n; })(d), sortModifiers: (f = new Map, d.orderSensitiveModifiers.forEach((e, t) => { f.set(e, 1e6 + t); }), e => { let t = [], r = []; for (let n = 0; n < e.length; n++) {
                let o = e[n], a = "[" === o[0], i = f.has(o);
                a || i ? (r.length > 0 && (r.sort(), t.push(...r), r = []), t.push(o)) : r.push(o);
            } return r.length > 0 && (r.sort(), t.push(...r)), t; }), ...(e => { let t = (e => { let { theme: t, classGroups: r } = e; return a(r, t); })(e), { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = e; return { getClassGroupId: e => { if (e.startsWith("[") && e.endsWith("]")) {
                    var r;
                    let t, n, o;
                    return -1 === (r = e).slice(1, -1).indexOf(":") ? void 0 : (n = (t = r.slice(1, -1)).indexOf(":"), (o = t.slice(0, n)) ? "arbitrary.." + o : void 0);
                } let n = e.split("-"), a = +("" === n[0] && n.length > 1); return o(n, a, t); }, getConflictingClassGroupIds: (e, t) => { if (t) {
                    let t = i[e], o = r[e];
                    if (t) {
                        if (o) {
                            let e = Array(o.length + t.length);
                            for (let t = 0; t < o.length; t++)
                                e[t] = o[t];
                            for (let r = 0; r < t.length; r++)
                                e[o.length + r] = t[r];
                            return e;
                        }
                        return t;
                    }
                    return o || n;
                } return r[e] || n; } }; })(d) }).cache.get, l = r.cache.set, s = c, c(u); }, (...e) => s(((...e) => { let t, r, n = 0, o = ""; for (; n < e.length;)
            (t = e[n++]) && (r = g(t)) && (o && (o += " "), o += r); return o; })(...e)); })(() => { let e = v("color"), t = v("font"), r = v("text"), n = v("font-weight"), o = v("tracking"), a = v("leading"), i = v("breakpoint"), l = v("container"), s = v("spacing"), c = v("radius"), u = v("shadow"), d = v("inset-shadow"), f = v("text-shadow"), m = v("drop-shadow"), p = v("blur"), h = v("perspective"), g = v("aspect"), b = v("ease"), y = v("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], k = () => [...w(), Y, F], E = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], N = () => [Y, F, s], C = () => [S, "full", "auto", ...N()], z = () => [R, "none", "subgrid", Y, F], A = () => ["auto", { span: ["full", R, Y, F] }, R, Y, F], M = () => [R, "auto", Y, F], I = () => ["auto", "min", "max", "fr", Y, F], et = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], er = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], en = () => ["auto", ...N()], eo = () => [S, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], ea = () => [S, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], ei = () => [S, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], el = () => [e, Y, F], es = () => [...w(), X, G, { position: [Y, F] }], ec = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], eu = () => ["auto", "cover", "contain", Z, D, { size: [Y, F] }], ed = () => [P, q, W], ef = () => ["", "none", "full", c, Y, F], em = () => ["", O, q, W], ep = () => ["solid", "dashed", "dotted", "double"], eh = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], eg = () => [O, P, X, G], eb = () => ["", "none", p, Y, F], ev = () => ["none", O, Y, F], ey = () => ["none", O, Y, F], ex = () => [O, Y, F], ew = () => [S, "full", ...N()]; return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [_], breakpoint: [_], color: [T], container: [_], "drop-shadow": [_], ease: ["in", "out", "in-out"], font: [L], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [_], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [_], shadow: [_], spacing: ["px", O], text: [_], "text-shadow": [_], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", S, F, Y, g] }], container: ["container"], columns: [{ columns: [O, F, Y, l] }], "break-after": [{ "break-after": x() }], "break-before": [{ "break-before": x() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: k() }], overflow: [{ overflow: E() }], "overflow-x": [{ "overflow-x": E() }], "overflow-y": [{ "overflow-y": E() }], overscroll: [{ overscroll: j() }], "overscroll-x": [{ "overscroll-x": j() }], "overscroll-y": [{ "overscroll-y": j() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: C() }], "inset-x": [{ "inset-x": C() }], "inset-y": [{ "inset-y": C() }], start: [{ "inset-s": C(), start: C() }], end: [{ "inset-e": C(), end: C() }], "inset-bs": [{ "inset-bs": C() }], "inset-be": [{ "inset-be": C() }], top: [{ top: C() }], right: [{ right: C() }], bottom: [{ bottom: C() }], left: [{ left: C() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [R, "auto", Y, F] }], basis: [{ basis: [S, "full", "auto", l, ...N()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [O, S, "auto", "initial", "none", F] }], grow: [{ grow: ["", O, Y, F] }], shrink: [{ shrink: ["", O, Y, F] }], order: [{ order: [R, "first", "last", "none", Y, F] }], "grid-cols": [{ "grid-cols": z() }], "col-start-end": [{ col: A() }], "col-start": [{ "col-start": M() }], "col-end": [{ "col-end": M() }], "grid-rows": [{ "grid-rows": z() }], "row-start-end": [{ row: A() }], "row-start": [{ "row-start": M() }], "row-end": [{ "row-end": M() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": I() }], "auto-rows": [{ "auto-rows": I() }], gap: [{ gap: N() }], "gap-x": [{ "gap-x": N() }], "gap-y": [{ "gap-y": N() }], "justify-content": [{ justify: [...et(), "normal"] }], "justify-items": [{ "justify-items": [...er(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...er()] }], "align-content": [{ content: ["normal", ...et()] }], "align-items": [{ items: [...er(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...er(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": et() }], "place-items": [{ "place-items": [...er(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...er()] }], p: [{ p: N() }], px: [{ px: N() }], py: [{ py: N() }], ps: [{ ps: N() }], pe: [{ pe: N() }], pbs: [{ pbs: N() }], pbe: [{ pbe: N() }], pt: [{ pt: N() }], pr: [{ pr: N() }], pb: [{ pb: N() }], pl: [{ pl: N() }], m: [{ m: en() }], mx: [{ mx: en() }], my: [{ my: en() }], ms: [{ ms: en() }], me: [{ me: en() }], mbs: [{ mbs: en() }], mbe: [{ mbe: en() }], mt: [{ mt: en() }], mr: [{ mr: en() }], mb: [{ mb: en() }], ml: [{ ml: en() }], "space-x": [{ "space-x": N() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": N() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: eo() }], "inline-size": [{ inline: ["auto", ...ea()] }], "min-inline-size": [{ "min-inline": ["auto", ...ea()] }], "max-inline-size": [{ "max-inline": ["none", ...ea()] }], "block-size": [{ block: ["auto", ...ei()] }], "min-block-size": [{ "min-block": ["auto", ...ei()] }], "max-block-size": [{ "max-block": ["none", ...ei()] }], w: [{ w: [l, "screen", ...eo()] }], "min-w": [{ "min-w": [l, "screen", "none", ...eo()] }], "max-w": [{ "max-w": [l, "screen", "none", "prose", { screen: [i] }, ...eo()] }], h: [{ h: ["screen", "lh", ...eo()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...eo()] }], "max-h": [{ "max-h": ["screen", "lh", ...eo()] }], "font-size": [{ text: ["base", r, q, W] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [n, ee, B] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", P, F] }], "font-family": [{ font: [H, U, t] }], "font-features": [{ "font-features": [F] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [o, Y, F] }], "line-clamp": [{ "line-clamp": [O, "none", Y, $] }], leading: [{ leading: [a, ...N()] }], "list-image": [{ "list-image": ["none", Y, F] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", Y, F] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: el() }], "text-color": [{ text: el() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...ep(), "wavy"] }], "text-decoration-thickness": [{ decoration: [O, "from-font", "auto", Y, W] }], "text-decoration-color": [{ decoration: el() }], "underline-offset": [{ "underline-offset": [O, "auto", Y, F] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: N() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, F] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", Y, F] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: es() }], "bg-repeat": [{ bg: ec() }], "bg-size": [{ bg: eu() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, R, Y, F], radial: ["", Y, F], conic: [R, Y, F] }, J, K] }], "bg-color": [{ bg: el() }], "gradient-from-pos": [{ from: ed() }], "gradient-via-pos": [{ via: ed() }], "gradient-to-pos": [{ to: ed() }], "gradient-from": [{ from: el() }], "gradient-via": [{ via: el() }], "gradient-to": [{ to: el() }], rounded: [{ rounded: ef() }], "rounded-s": [{ "rounded-s": ef() }], "rounded-e": [{ "rounded-e": ef() }], "rounded-t": [{ "rounded-t": ef() }], "rounded-r": [{ "rounded-r": ef() }], "rounded-b": [{ "rounded-b": ef() }], "rounded-l": [{ "rounded-l": ef() }], "rounded-ss": [{ "rounded-ss": ef() }], "rounded-se": [{ "rounded-se": ef() }], "rounded-ee": [{ "rounded-ee": ef() }], "rounded-es": [{ "rounded-es": ef() }], "rounded-tl": [{ "rounded-tl": ef() }], "rounded-tr": [{ "rounded-tr": ef() }], "rounded-br": [{ "rounded-br": ef() }], "rounded-bl": [{ "rounded-bl": ef() }], "border-w": [{ border: em() }], "border-w-x": [{ "border-x": em() }], "border-w-y": [{ "border-y": em() }], "border-w-s": [{ "border-s": em() }], "border-w-e": [{ "border-e": em() }], "border-w-bs": [{ "border-bs": em() }], "border-w-be": [{ "border-be": em() }], "border-w-t": [{ "border-t": em() }], "border-w-r": [{ "border-r": em() }], "border-w-b": [{ "border-b": em() }], "border-w-l": [{ "border-l": em() }], "divide-x": [{ "divide-x": em() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": em() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...ep(), "hidden", "none"] }], "divide-style": [{ divide: [...ep(), "hidden", "none"] }], "border-color": [{ border: el() }], "border-color-x": [{ "border-x": el() }], "border-color-y": [{ "border-y": el() }], "border-color-s": [{ "border-s": el() }], "border-color-e": [{ "border-e": el() }], "border-color-bs": [{ "border-bs": el() }], "border-color-be": [{ "border-be": el() }], "border-color-t": [{ "border-t": el() }], "border-color-r": [{ "border-r": el() }], "border-color-b": [{ "border-b": el() }], "border-color-l": [{ "border-l": el() }], "divide-color": [{ divide: el() }], "outline-style": [{ outline: [...ep(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [O, Y, F] }], "outline-w": [{ outline: ["", O, q, W] }], "outline-color": [{ outline: el() }], shadow: [{ shadow: ["", "none", u, Q, V] }], "shadow-color": [{ shadow: el() }], "inset-shadow": [{ "inset-shadow": ["none", d, Q, V] }], "inset-shadow-color": [{ "inset-shadow": el() }], "ring-w": [{ ring: em() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: el() }], "ring-offset-w": [{ "ring-offset": [O, W] }], "ring-offset-color": [{ "ring-offset": el() }], "inset-ring-w": [{ "inset-ring": em() }], "inset-ring-color": [{ "inset-ring": el() }], "text-shadow": [{ "text-shadow": ["none", f, Q, V] }], "text-shadow-color": [{ "text-shadow": el() }], opacity: [{ opacity: [O, Y, F] }], "mix-blend": [{ "mix-blend": [...eh(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": eh() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [O] }], "mask-image-linear-from-pos": [{ "mask-linear-from": eg() }], "mask-image-linear-to-pos": [{ "mask-linear-to": eg() }], "mask-image-linear-from-color": [{ "mask-linear-from": el() }], "mask-image-linear-to-color": [{ "mask-linear-to": el() }], "mask-image-t-from-pos": [{ "mask-t-from": eg() }], "mask-image-t-to-pos": [{ "mask-t-to": eg() }], "mask-image-t-from-color": [{ "mask-t-from": el() }], "mask-image-t-to-color": [{ "mask-t-to": el() }], "mask-image-r-from-pos": [{ "mask-r-from": eg() }], "mask-image-r-to-pos": [{ "mask-r-to": eg() }], "mask-image-r-from-color": [{ "mask-r-from": el() }], "mask-image-r-to-color": [{ "mask-r-to": el() }], "mask-image-b-from-pos": [{ "mask-b-from": eg() }], "mask-image-b-to-pos": [{ "mask-b-to": eg() }], "mask-image-b-from-color": [{ "mask-b-from": el() }], "mask-image-b-to-color": [{ "mask-b-to": el() }], "mask-image-l-from-pos": [{ "mask-l-from": eg() }], "mask-image-l-to-pos": [{ "mask-l-to": eg() }], "mask-image-l-from-color": [{ "mask-l-from": el() }], "mask-image-l-to-color": [{ "mask-l-to": el() }], "mask-image-x-from-pos": [{ "mask-x-from": eg() }], "mask-image-x-to-pos": [{ "mask-x-to": eg() }], "mask-image-x-from-color": [{ "mask-x-from": el() }], "mask-image-x-to-color": [{ "mask-x-to": el() }], "mask-image-y-from-pos": [{ "mask-y-from": eg() }], "mask-image-y-to-pos": [{ "mask-y-to": eg() }], "mask-image-y-from-color": [{ "mask-y-from": el() }], "mask-image-y-to-color": [{ "mask-y-to": el() }], "mask-image-radial": [{ "mask-radial": [Y, F] }], "mask-image-radial-from-pos": [{ "mask-radial-from": eg() }], "mask-image-radial-to-pos": [{ "mask-radial-to": eg() }], "mask-image-radial-from-color": [{ "mask-radial-from": el() }], "mask-image-radial-to-color": [{ "mask-radial-to": el() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": w() }], "mask-image-conic-pos": [{ "mask-conic": [O] }], "mask-image-conic-from-pos": [{ "mask-conic-from": eg() }], "mask-image-conic-to-pos": [{ "mask-conic-to": eg() }], "mask-image-conic-from-color": [{ "mask-conic-from": el() }], "mask-image-conic-to-color": [{ "mask-conic-to": el() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: es() }], "mask-repeat": [{ mask: ec() }], "mask-size": [{ mask: eu() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", Y, F] }], filter: [{ filter: ["", "none", Y, F] }], blur: [{ blur: eb() }], brightness: [{ brightness: [O, Y, F] }], contrast: [{ contrast: [O, Y, F] }], "drop-shadow": [{ "drop-shadow": ["", "none", m, Q, V] }], "drop-shadow-color": [{ "drop-shadow": el() }], grayscale: [{ grayscale: ["", O, Y, F] }], "hue-rotate": [{ "hue-rotate": [O, Y, F] }], invert: [{ invert: ["", O, Y, F] }], saturate: [{ saturate: [O, Y, F] }], sepia: [{ sepia: ["", O, Y, F] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", Y, F] }], "backdrop-blur": [{ "backdrop-blur": eb() }], "backdrop-brightness": [{ "backdrop-brightness": [O, Y, F] }], "backdrop-contrast": [{ "backdrop-contrast": [O, Y, F] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", O, Y, F] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [O, Y, F] }], "backdrop-invert": [{ "backdrop-invert": ["", O, Y, F] }], "backdrop-opacity": [{ "backdrop-opacity": [O, Y, F] }], "backdrop-saturate": [{ "backdrop-saturate": [O, Y, F] }], "backdrop-sepia": [{ "backdrop-sepia": ["", O, Y, F] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": N() }], "border-spacing-x": [{ "border-spacing-x": N() }], "border-spacing-y": [{ "border-spacing-y": N() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, F] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [O, "initial", Y, F] }], ease: [{ ease: ["linear", "initial", b, Y, F] }], delay: [{ delay: [O, Y, F] }], animate: [{ animate: ["none", y, Y, F] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [h, Y, F] }], "perspective-origin": [{ "perspective-origin": k() }], rotate: [{ rotate: ev() }], "rotate-x": [{ "rotate-x": ev() }], "rotate-y": [{ "rotate-y": ev() }], "rotate-z": [{ "rotate-z": ev() }], scale: [{ scale: ey() }], "scale-x": [{ "scale-x": ey() }], "scale-y": [{ "scale-y": ey() }], "scale-z": [{ "scale-z": ey() }], "scale-3d": ["scale-3d"], skew: [{ skew: ex() }], "skew-x": [{ "skew-x": ex() }], "skew-y": [{ "skew-y": ex() }], transform: [{ transform: [Y, F, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: k() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: ew() }], "translate-x": [{ "translate-x": ew() }], "translate-y": [{ "translate-y": ew() }], "translate-z": [{ "translate-z": ew() }], "translate-none": ["translate-none"], accent: [{ accent: el() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: el() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, F] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": N() }], "scroll-mx": [{ "scroll-mx": N() }], "scroll-my": [{ "scroll-my": N() }], "scroll-ms": [{ "scroll-ms": N() }], "scroll-me": [{ "scroll-me": N() }], "scroll-mbs": [{ "scroll-mbs": N() }], "scroll-mbe": [{ "scroll-mbe": N() }], "scroll-mt": [{ "scroll-mt": N() }], "scroll-mr": [{ "scroll-mr": N() }], "scroll-mb": [{ "scroll-mb": N() }], "scroll-ml": [{ "scroll-ml": N() }], "scroll-p": [{ "scroll-p": N() }], "scroll-px": [{ "scroll-px": N() }], "scroll-py": [{ "scroll-py": N() }], "scroll-ps": [{ "scroll-ps": N() }], "scroll-pe": [{ "scroll-pe": N() }], "scroll-pbs": [{ "scroll-pbs": N() }], "scroll-pbe": [{ "scroll-pbe": N() }], "scroll-pt": [{ "scroll-pt": N() }], "scroll-pr": [{ "scroll-pr": N() }], "scroll-pb": [{ "scroll-pb": N() }], "scroll-pl": [{ "scroll-pl": N() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", Y, F] }], fill: [{ fill: ["none", ...el()] }], "stroke-w": [{ stroke: [O, q, W, $] }], stroke: [{ stroke: ["none", ...el()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] }; });
        function ef(...e) { return ed(t(e)); }
        e.s(["cn", () => ef], 47163);
    }, 75254, e => {
        "use strict";
        var t = e.i(71645);
        let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
        var n = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
        let o = (0, t.forwardRef)(({ color: e = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: i, className: l = "", children: s, iconNode: c, ...u }, d) => (0, t.createElement)("svg", { ref: d, ...n, width: o, height: o, stroke: e, strokeWidth: i ? 24 * Number(a) / Number(o) : a, className: r("lucide", l), ...u }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(s) ? s : [s]])), a = (e, n) => { let a = (0, t.forwardRef)(({ className: a, ...i }, l) => (0, t.createElement)(o, { ref: l, iconNode: n, className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, a), ...i })); return a.displayName = `${e}`, a; };
        e.s(["default", () => a], 75254);
    }, 69480, 20783, 91918, 67881, e => {
        "use strict";
        let t, r;
        var n = e.i(43476), o = e.i(71645);
        function a(e, t) { if ("function" == typeof e)
            return e(t); null != e && (e.current = t); }
        function i(...e) { return t => { let r = !1, n = e.map(e => { let n = a(e, t); return r || "function" != typeof n || (r = !0), n; }); if (r)
            return () => { for (let t = 0; t < n.length; t++) {
                let r = n[t];
                "function" == typeof r ? r() : a(e[t], null);
            } }; }; }
        function l(...e) { return o.useCallback(i(...e), e); }
        e.s(["composeRefs", () => i, "useComposedRefs", () => l], 20783);
        var s = o.forwardRef((e, t) => { let { children: r, ...a } = e, i = o.Children.toArray(r), l = i.find(d); if (l) {
            let e = l.props.children, r = i.map(t => t !== l ? t : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
            return (0, n.jsx)(c, { ...a, ref: t, children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null });
        } return (0, n.jsx)(c, { ...a, ref: t, children: r }); });
        s.displayName = "Slot";
        var c = o.forwardRef((e, t) => { let { children: r, ...n } = e; if (o.isValidElement(r)) {
            var a;
            let e, l, s = (a = r, (l = (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (l = (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref);
            return o.cloneElement(r, { ...function (e, t) { let r = { ...t }; for (let n in t) {
                    let o = e[n], a = t[n];
                    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => { a(...e), o(...e); } : o && (r[n] = o) : "style" === n ? r[n] = { ...o, ...a } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "));
                } return { ...e, ...r }; }(n, r.props), ref: t ? i(t, s) : s });
        } return o.Children.count(r) > 1 ? o.Children.only(null) : null; });
        c.displayName = "SlotClone";
        var u = ({ children: e }) => (0, n.jsx)(n.Fragment, { children: e });
        function d(e) { return o.isValidElement(e) && e.type === u; }
        e.s(["Slot", () => s], 91918);
        var f = e.i(7670);
        let m = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e, p = f.clsx;
        var h = e.i(47163);
        let g = (t = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", r = { variants: { variant: { default: "bg-primary text-white hover:bg-primary/90", destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60", outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2 has-[>svg]:px-3", sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5", lg: "h-10 rounded-md px-6 has-[>svg]:px-4", icon: "size-9", "icon-sm": "size-8", "icon-lg": "size-10" } }, defaultVariants: { variant: "default", size: "default" } }, e => { var n; if ((null == r ? void 0 : r.variants) == null)
            return p(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className); let { variants: o, defaultVariants: a } = r, i = Object.keys(o).map(t => { let r = null == e ? void 0 : e[t], n = null == a ? void 0 : a[t]; if (null === r)
            return null; let i = m(r) || m(n); return o[t][i]; }), l = e && Object.entries(e).reduce((e, t) => { let [r, n] = t; return void 0 === n || (e[r] = n), e; }, {}); return p(t, i, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, t) => { let { class: r, className: n, ...o } = t; return Object.entries(o).every(e => { let [t, r] = e; return Array.isArray(r) ? r.includes({ ...a, ...l }[t]) : ({ ...a, ...l })[t] === r; }) ? [...e, r, n] : e; }, []), null == e ? void 0 : e.class, null == e ? void 0 : e.className); });
        function b({ className: e, variant: t, size: r, asChild: o = !1, ...a }) { let i = o ? s : "button"; return (0, n.jsx)(i, { "data-slot": "button", className: (0, h.cn)(g({ variant: t, size: r, className: e })), ...a }); }
        e.s(["Button", () => b], 67881);
        var v = e.i(74080);
        let y = `
  .colytics-compliance__link {
    color: #6b7280;
    text-decoration: underline;
    text-decoration-offset: 2px;
    font-weight: 500;
  }
  .colytics-compliance__link:hover,
  .colytics-compliance__link:focus {
    color: #4b5563;
  }
  .colytics-compliance__dpdp-link {
    color: #6b7280;
    text-decoration: underline;
    text-decoration-offset: 2px;
    font-weight: 500;
    word-break: break-all;
  }
  .colytics-compliance__dpdp-link:hover,
  .colytics-compliance__dpdp-link:focus {
    color: #4b5563;
  }
  @media (max-width: 480px) {
    .colytics-compliance {
      font-size: 13px;
    }
  }
`;
        function x({ checked: e, onCheckedChange: t }) { return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("style", { children: y }), (0, n.jsxs)("div", { className: "colytics-compliance", role: "region", "aria-label": "Consent and privacy notices", style: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: "14px", lineHeight: "1.6", color: "#6b7280", maxWidth: "560px", marginTop: "16px" }, children: [(0, n.jsxs)("div", { style: { display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", padding: "12px 14px", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "8px", transition: "all 0.2s ease" }, children: [(0, n.jsx)("input", { type: "checkbox", name: "marketing_consent", id: "marketing_consent", required: !0, checked: e, onChange: e => t(e.target.checked), "aria-required": "true", "aria-describedby": "marketing_consent_desc", style: { width: "18px", height: "18px", minWidth: "18px", minHeight: "18px", marginTop: "1px", accentColor: "#4f46e5", cursor: "pointer" } }), (0, n.jsxs)("label", { htmlFor: "marketing_consent", id: "marketing_consent_desc", style: { cursor: "pointer", lineHeight: "1.55", color: "#374151" }, children: [(0, n.jsx)("span", { "aria-hidden": "true", style: { color: "#dc2626", fontWeight: "600" }, children: "*" }), " ", "I agree to receive", " ", (0, n.jsx)("a", { href: "/cookie-policy", target: "_blank", rel: "noopener noreferrer", className: "colytics-compliance__link", children: "promotional emails" }), " ", "and marketing communications from Colytics AI. I understand I can unsubscribe at any time."] })] }), (0, n.jsxs)("p", { style: { fontSize: "13px", marginBottom: "10px", padding: "0 2px" }, children: ["By signing up, you agree to our", " ", (0, n.jsx)("a", { href: "/privacy-policy", target: "_blank", rel: "noopener noreferrer", className: "colytics-compliance__link", children: "Privacy Policy" }), " ", "and", " ", (0, n.jsx)("a", { href: "/terms-of-service", target: "_blank", rel: "noopener noreferrer", className: "colytics-compliance__link", children: "Terms of Service" }), "."] })] })] }); }
        let w = function ({ open: e, onClose: t }) {
            let r = (0, o.useRef)(null), a = (0, o.useRef)(null), [i, l] = (0, o.useState)(1), [s, c] = (0, o.useState)(""), [u, d] = (0, o.useState)(""), [f, m] = (0, o.useState)(!0), [p, h] = (0, o.useState)(["", "", "", "", "", ""]), [g, b] = (0, o.useState)(""), [y, w] = (0, o.useState)(!1);
            function k() { t(); }
            if ((0, o.useEffect)(() => { e && (l(1), c(""), d(""), m(!0), h(["", "", "", "", "", ""]), w(!1), setTimeout(() => { w(!0), r.current?.focus(); }, 80)); }, [e]), (0, o.useEffect)(() => { function r(r) { "Escape" === r.key && e && t(); } return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r); }, [e, t]), !e)
                return null;
            let E = (0, n.jsx)("div", { className: "fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4", role: "dialog", "aria-modal": "true", children: (0, n.jsx)("div", { className: "bg-white rounded-[18px] w-full shadow-2xl flex flex-col overflow-hidden", style: { maxWidth: 440, width: "min(440px, 96vw)", maxHeight: "90vh", opacity: +!!y, transform: y ? "translateY(0) scale(1)" : "translateY(10px) scale(0.995)", transition: "opacity 320ms ease, transform 320ms cubic-bezier(0.16,1,0.3,1)" }, children: (0, n.jsxs)("div", { className: "relative flex flex-col flex-1 overflow-hidden", children: [(0, n.jsx)("button", { className: "absolute right-4 top-4 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 z-10", onClick: k, "aria-label": "Close", children: (0, n.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, n.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), (0, n.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) }), (0, n.jsxs)("div", { className: "flex-1 overflow-y-auto", style: { scrollbarWidth: "none", scrollbarColor: "rgba(0,0,0,0.2) transparent", msOverflowStyle: "auto" }, children: [(0, n.jsx)("style", { children: `
              div::-webkit-scrollbar {
                width: 0;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background-color: rgba(0,0,0,0.2);
                border-radius: 3px;
              }
            ` }), (0, n.jsxs)("div", { style: { padding: "clamp(1.25rem, 4vw, 2rem) clamp(1rem, 4vw, 2.5rem)" }, className: "text-left", children: [1 === i && (0, n.jsxs)("div", { children: [(0, n.jsx)("h2", { className: "heading-3-lg mb-3", children: "Get Early Access" }), (0, n.jsx)("p", { className: "text-body text-sm mb-6", children: "Join the waitlist for Colytics AI. Be the first to see your brand's AI visibility score." }), (0, n.jsx)("label", { className: "block font-medium text-gray-700 mb-1", style: { fontSize: 12 }, children: "Full Name" }), (0, n.jsx)("input", { ref: r, value: s, onChange: e => c(e.target.value), placeholder: "Your name", style: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)", height: 48, fontSize: 15 }, className: "mt-1 mb-5 w-full rounded-xl border-2 border-gray-300 px-4 placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-0 focus:border-gray-400" }), (0, n.jsx)("label", { className: "block font-medium text-gray-700 mb-1", style: { fontSize: 12 }, children: "Work Email" }), (0, n.jsx)("input", { ref: a, value: u, onChange: e => d(e.target.value), placeholder: "you@company.com", style: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)", height: 44, fontSize: 15 }, className: "mt-1 mb-5 w-full rounded-lg border border-gray-200 px-4 placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-0 focus:border-gray-300" }), (0, n.jsx)(x, { checked: f, onCheckedChange: m }), g && (0, n.jsx)("div", { className: "text-sm text-red-600 mt-3", children: g }), (0, n.jsx)("button", { className: "mt-6 w-full rounded-full bg-black text-white py-3.5 font-medium", style: { height: 52 }, onClick: function () { return (b(""), s.trim()) ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) ? f ? void (l(2), setTimeout(() => { let e = document.querySelector(".ea-otp-box"); e?.focus(); }, 80)) : b("Please agree to receive communications.") : b("Please enter a valid email.") : b("Please enter your name."); }, children: "Get Early Access" }), (0, n.jsx)("div", { className: "text-xs text-center text-gray-400 mt-5", children: "Don't see the email? Check your spam or junk folder." })] }), 2 === i && (0, n.jsxs)("div", { children: [(0, n.jsx)("h2", { className: "heading-3-lg mb-2", children: "Verify Your Email" }), (0, n.jsxs)("p", { className: "text-body text-sm mb-4", children: ["We've sent a 6-digit code to ", (0, n.jsx)("strong", { className: "text-gray-900", children: u })] }), (0, n.jsx)("div", { className: "flex gap-2 sm:gap-3 justify-between mb-4 max-w-full", children: p.map((e, t) => (0, n.jsx)("input", { value: e, onChange: e => (function (e, t) { let r = t.replace(/[^0-9]/g, "").slice(0, 1), n = p.slice(); if (n[e] = r, h(n), r && e < 5) {
                                                                let t = document.querySelectorAll(".ea-otp-box");
                                                                t[e + 1]?.focus();
                                                            } })(t, e.target.value), className: "ea-otp-box flex-1 min-w-0 max-w-14 h-12 sm:h-14 text-center rounded-xl border border-gray-200 text-base sm:text-lg font-semibold", inputMode: "numeric" }, t)) }), g && (0, n.jsx)("div", { className: "text-sm text-red-600 mb-2", children: g }), (0, n.jsx)("button", { className: "w-full rounded-full bg-black text-white py-3.5 font-medium", onClick: function () { let e = p.join(""); return 6 !== e.length ? b("Please enter all 6 digits.") : "000000" === e ? b("Invalid OTP. Please try again.") : void (localStorage.setItem("colytics_early_access", JSON.stringify({ name: s, email: u, verified: !0, timestamp: new Date().toISOString() })), l(3)); }, children: "Verify OTP" }), (0, n.jsx)("button", { className: "mt-3 w-full text-sm text-gray-600", onClick: () => l(1), children: "← Use a different email" })] }), 3 === i && (0, n.jsxs)("div", { className: "text-left", children: [(0, n.jsx)("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4", children: (0, n.jsx)("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "#10b981", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) }), (0, n.jsx)("h3", { className: "heading-3-lg", children: "You're on the list!" }), (0, n.jsx)("p", { className: "text-body text-sm mt-3", children: "We've verified your email. You're now on the early access waitlist for Colytics AI." }), (0, n.jsx)("button", { className: "mt-6 w-full rounded-full bg-black text-white py-3 font-medium", onClick: k, children: "Got it" })] })] })] })] }) }) });
            return "undefined" == typeof document ? null : (0, v.createPortal)(E, document.body);
        };
        function k({ label: e = "Run my free audit →", className: t }) { let [r, a] = (0, o.useState)(!1); return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(b, { className: (0, h.cn)("text-button h-11 px-6 rounded-full bg-[#0a0a0a] !text-white hover:bg-[#1a1a1a] border-0 transition-transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg", t), onClick: () => a(!0), children: e }), (0, n.jsx)(w, { open: r, onClose: () => a(!1) })] }); }
        e.s(["default", () => k], 69480);
    }, 13293, e => {
        "use strict";
        let t, r, n;
        var o, a, i, l, s, c, u, d, f, m = e.i(43476), p = e.i(22016), h = e.i(67881), g = e.i(75254);
        let b = (0, g.default)("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);
        var v = e.i(69480), y = e.i(71645);
        function x(e, t, { checkForDefaultPrevented: r = !0 } = {}) { return function (n) { if (e?.(n), !1 === r || !n.defaultPrevented)
            return t?.(n); }; }
        var w = e.i(20783), k = globalThis?.document ? y.useLayoutEffect : () => { }, E = y["useId".toString()] || (() => void 0), j = 0;
        function N(e) { let [t, r] = y.useState(E()); return k(() => { e || r(e => e ?? String(j++)); }, [e]), e || (t ? `radix-${t}` : ""); }
        function C(e) { let t = y.useRef(e); return y.useEffect(() => { t.current = e; }), y.useMemo(() => (...e) => t.current?.(...e), []); }
        var S = e.i(74080), O = e.i(91918), R = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => { let r = y.forwardRef((e, r) => { let { asChild: n, ...o } = e, a = n ? O.Slot : t; return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, m.jsx)(a, { ...o, ref: r }); }); return r.displayName = `Primitive.${t}`, { ...e, [t]: r }; }, {}), P = "dismissableLayer.update", _ = y.createContext({ layers: new Set, layersWithOutsidePointerEventsDisabled: new Set, branches: new Set }), T = y.forwardRef((e, t) => { let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: n, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: i, onDismiss: l, ...s } = e, c = y.useContext(_), [u, f] = y.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, h] = y.useState({}), g = (0, w.useComposedRefs)(t, e => f(e)), b = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), k = b.indexOf(v), E = u ? b.indexOf(u) : -1, j = c.layersWithOutsidePointerEventsDisabled.size > 0, N = E >= k, S = function (e, t = globalThis?.document) { let r = C(e), n = y.useRef(!1), o = y.useRef(() => { }); return y.useEffect(() => { let e = e => { if (e.target && !n.current) {
            let n = function () { A("dismissableLayer.pointerDownOutside", r, a, { discrete: !0 }); }, a = { originalEvent: e };
            "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, { once: !0 })) : n();
        }
        else
            t.removeEventListener("click", o.current); n.current = !1; }, a = window.setTimeout(() => { t.addEventListener("pointerdown", e); }, 0); return () => { window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current); }; }, [t, r]), { onPointerDownCapture: () => n.current = !0 }; }(e => { let t = e.target, r = [...c.branches].some(e => e.contains(t)); N && !r && (o?.(e), i?.(e), e.defaultPrevented || l?.()); }, p), O = function (e, t = globalThis?.document) { let r = C(e), n = y.useRef(!1); return y.useEffect(() => { let e = e => { e.target && !n.current && A("dismissableLayer.focusOutside", r, { originalEvent: e }, { discrete: !1 }); }; return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e); }, [t, r]), { onFocusCapture: () => n.current = !0, onBlurCapture: () => n.current = !1 }; }(e => { let t = e.target; ![...c.branches].some(e => e.contains(t)) && (a?.(e), i?.(e), e.defaultPrevented || l?.()); }, p); return !function (e, t = globalThis?.document) { let r = C(e); y.useEffect(() => { let e = e => { "Escape" === e.key && r(e); }; return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 }); }, [r, t]); }(e => { E === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && l && (e.preventDefault(), l())); }, p), y.useEffect(() => { if (u)
            return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (d = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), z(), () => { r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = d); }; }, [u, p, r, c]), y.useEffect(() => () => { u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), z()); }, [u, c]), y.useEffect(() => { let e = () => h({}); return document.addEventListener(P, e), () => document.removeEventListener(P, e); }, []), (0, m.jsx)(R.div, { ...s, ref: g, style: { pointerEvents: j ? N ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: x(e.onFocusCapture, O.onFocusCapture), onBlurCapture: x(e.onBlurCapture, O.onBlurCapture), onPointerDownCapture: x(e.onPointerDownCapture, S.onPointerDownCapture) }); });
        function z() { let e = new CustomEvent(P); document.dispatchEvent(e); }
        function A(e, t, r, { discrete: n }) { let o = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r }); if (t && o.addEventListener(e, t, { once: !0 }), n)
            o && S.flushSync(() => o.dispatchEvent(a));
        else
            o.dispatchEvent(a); }
        T.displayName = "DismissableLayer", y.forwardRef((e, t) => { let r = y.useContext(_), n = y.useRef(null), o = (0, w.useComposedRefs)(t, n); return y.useEffect(() => { let e = n.current; if (e)
            return r.branches.add(e), () => { r.branches.delete(e); }; }, [r.branches]), (0, m.jsx)(R.div, { ...e, ref: o }); }).displayName = "DismissableLayerBranch";
        var M = "focusScope.autoFocusOnMount", I = "focusScope.autoFocusOnUnmount", L = { bubbles: !1, cancelable: !0 }, D = y.forwardRef((e, t) => { let { loop: r = !1, trapped: n = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i } = e, [l, s] = y.useState(null), c = C(o), u = C(a), d = y.useRef(null), f = (0, w.useComposedRefs)(t, e => s(e)), p = y.useRef({ paused: !1, pause() { this.paused = !0; }, resume() { this.paused = !1; } }).current; y.useEffect(() => { if (n) {
            let e = function (e) { if (p.paused || !l)
                return; let t = e.target; l.contains(t) ? d.current = t : $(d.current, { select: !0 }); }, t = function (e) { if (p.paused || !l)
                return; let t = e.relatedTarget; null !== t && (l.contains(t) || $(d.current, { select: !0 })); };
            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
            let r = new MutationObserver(function (e) { if (document.activeElement === document.body)
                for (let t of e)
                    t.removedNodes.length > 0 && $(l); });
            return l && r.observe(l, { childList: !0, subtree: !0 }), () => { document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect(); };
        } }, [n, l, p.paused]), y.useEffect(() => { if (l) {
            B.add(p);
            let e = document.activeElement;
            if (!l.contains(e)) {
                let t = new CustomEvent(M, L);
                l.addEventListener(M, c), l.dispatchEvent(t), t.defaultPrevented || (function (e, { select: t = !1 } = {}) { let r = document.activeElement; for (let n of e)
                    if ($(n, { select: t }), document.activeElement !== r)
                        return; }(F(l).filter(e => "A" !== e.tagName), { select: !0 }), document.activeElement === e && $(l));
            }
            return () => { l.removeEventListener(M, c), setTimeout(() => { let t = new CustomEvent(I, L); l.addEventListener(I, u), l.dispatchEvent(t), t.defaultPrevented || $(e ?? document.body, { select: !0 }), l.removeEventListener(I, u), B.remove(p); }, 0); };
        } }, [l, c, u, p]); let h = y.useCallback(e => { if (!r && !n || p.paused)
            return; let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey, o = document.activeElement; if (t && o) {
            var a;
            let t, n = e.currentTarget, [i, l] = [W(t = F(a = n), a), W(t.reverse(), a)];
            i && l ? e.shiftKey || o !== l ? e.shiftKey && o === i && (e.preventDefault(), r && $(l, { select: !0 })) : (e.preventDefault(), r && $(i, { select: !0 })) : o === n && e.preventDefault();
        } }, [r, n, p.paused]); return (0, m.jsx)(R.div, { tabIndex: -1, ...i, ref: f, onKeyDown: h }); });
        function F(e) { let t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: e => { let t = "INPUT" === e.tagName && "hidden" === e.type; return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } }); for (; r.nextNode();)
            t.push(r.currentNode); return t; }
        function W(e, t) { for (let r of e)
            if (!function (e, { upTo: t }) { if ("hidden" === getComputedStyle(e).visibility)
                return !0; for (; e && (void 0 === t || e !== t);) {
                if ("none" === getComputedStyle(e).display)
                    return !0;
                e = e.parentElement;
            } return !1; }(r, { upTo: t }))
                return r; }
        function $(e, { select: t = !1 } = {}) { if (e && e.focus) {
            var r;
            let n = document.activeElement;
            e.focus({ preventScroll: !0 }), e !== n && (r = e) instanceof HTMLInputElement && "select" in r && t && e.select();
        } }
        D.displayName = "FocusScope";
        var B = (n = [], { add(e) { let t = n[0]; e !== t && t?.pause(), (n = U(n, e)).unshift(e); }, remove(e) { n = U(n, e), n[0]?.resume(); } });
        function U(e, t) { let r = [...e], n = r.indexOf(t); return -1 !== n && r.splice(n, 1), r; }
        var G = y.forwardRef((e, t) => { let { container: r, ...n } = e, [o, a] = y.useState(!1); k(() => a(!0), []); let i = r || o && globalThis?.document?.body; return i ? S.default.createPortal((0, m.jsx)(R.div, { ...n, ref: t }), i) : null; });
        G.displayName = "Portal";
        var K = e => { var t; let r, n, { present: o, children: a } = e, i = function (e) { var t, r; let [n, o] = y.useState(), a = y.useRef({}), i = y.useRef(e), l = y.useRef("none"), [s, c] = (t = e ? "mounted" : "unmounted", r = { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }, y.useReducer((e, t) => r[e][t] ?? e, t)); return y.useEffect(() => { let e = V(a.current); l.current = "mounted" === s ? e : "none"; }, [s]), k(() => { let t = a.current, r = i.current; if (r !== e) {
            let n = l.current, o = V(t);
            e ? c("MOUNT") : "none" === o || t?.display === "none" ? c("UNMOUNT") : r && n !== o ? c("ANIMATION_OUT") : c("UNMOUNT"), i.current = e;
        } }, [e, c]), k(() => { if (n) {
            let e, t = n.ownerDocument.defaultView ?? window, r = r => { let o = V(a.current).includes(r.animationName); if (r.target === n && o && (c("ANIMATION_END"), !i.current)) {
                let r = n.style.animationFillMode;
                n.style.animationFillMode = "forwards", e = t.setTimeout(() => { "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r); });
            } }, o = e => { e.target === n && (l.current = V(a.current)); };
            return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => { t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r); };
        } c("ANIMATION_END"); }, [n, c]), { isPresent: ["mounted", "unmountSuspended"].includes(s), ref: y.useCallback(e => { e && (a.current = getComputedStyle(e)), o(e); }, []) }; }(o), l = "function" == typeof a ? a({ present: i.isPresent }) : y.Children.only(a), s = (0, w.useComposedRefs)(i.ref, (t = l, (n = (r = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) && "isReactWarning" in r && r.isReactWarning) ? t.ref : (n = (r = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in r && r.isReactWarning) ? t.props.ref : t.props.ref || t.ref)); return "function" == typeof a || i.isPresent ? y.cloneElement(l, { ref: s }) : null; };
        function V(e) { return e?.animationName || "none"; }
        K.displayName = "Presence";
        var Y = 0;
        function q() { let e = document.createElement("span"); return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e; }
        var H = function () { return (H = Object.assign || function (e) { for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e; }).apply(this, arguments); };
        function X(e, t) { var r = {}; for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]); if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]); return r; }
        var Z = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"), J = "width-before-scroll-bar";
        function Q(e, t) { return "function" == typeof e ? e(t) : e && (e.current = t), e; }
        var ee = "undefined" != typeof window ? y.useLayoutEffect : y.useEffect, et = new WeakMap, er = (void 0 === o && (o = {}), (void 0 === a && (a = function (e) { return e; }), i = [], l = !1, s = { read: function () { if (l)
                throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."); return i.length ? i[i.length - 1] : null; }, useMedium: function (e) { var t = a(e, l); return i.push(t), function () { i = i.filter(function (e) { return e !== t; }); }; }, assignSyncMedium: function (e) { for (l = !0; i.length;) {
                var t = i;
                i = [], t.forEach(e);
            } i = { push: function (t) { return e(t); }, filter: function () { return i; } }; }, assignMedium: function (e) { l = !0; var t = []; if (i.length) {
                var r = i;
                i = [], r.forEach(e), t = i;
            } var n = function () { var r = t; t = [], r.forEach(e); }, o = function () { return Promise.resolve().then(n); }; o(), i = { push: function (e) { t.push(e), o(); }, filter: function (e) { return t = t.filter(e), i; } }; } }).options = H({ async: !0, ssr: !1 }, o), s), en = function () { }, eo = y.forwardRef(function (e, t) { var r, n, o, a, i = y.useRef(null), l = y.useState({ onScrollCapture: en, onWheelCapture: en, onTouchMoveCapture: en }), s = l[0], c = l[1], u = e.forwardProps, d = e.children, f = e.className, m = e.removeScrollBar, p = e.enabled, h = e.shards, g = e.sideCar, b = e.noRelative, v = e.noIsolation, x = e.inert, w = e.allowPinchZoom, k = e.as, E = e.gapMode, j = X(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = (r = [i, t], n = function (e) { return r.forEach(function (t) { return Q(t, e); }); }, (o = (0, y.useState)(function () { return { value: null, callback: n, facade: { get current() { return o.value; }, set current(value) { var e = o.value; e !== value && (o.value = value, o.callback(value, e)); } } }; })[0]).callback = n, a = o.facade, ee(function () { var e = et.get(a); if (e) {
            var t = new Set(e), n = new Set(r), o = a.current;
            t.forEach(function (e) { n.has(e) || Q(e, null); }), n.forEach(function (e) { t.has(e) || Q(e, o); });
        } et.set(a, r); }, [r]), a), C = H(H({}, j), s); return y.createElement(y.Fragment, null, p && y.createElement(g, { sideCar: er, removeScrollBar: m, shards: h, noRelative: b, noIsolation: v, inert: x, setCallbacks: c, allowPinchZoom: !!w, lockRef: i, gapMode: E }), u ? y.cloneElement(y.Children.only(d), H(H({}, C), { ref: N })) : y.createElement(void 0 === k ? "div" : k, H({}, C, { className: f, ref: N }), d)); });
        eo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }, eo.classNames = { fullWidth: J, zeroRight: Z };
        var ea = function (e) { var t = e.sideCar, r = X(e, ["sideCar"]); if (!t)
            throw Error("Sidecar: please provide `sideCar` property to import the right car"); var n = t.read(); if (!n)
            throw Error("Sidecar medium not found"); return y.createElement(n, H({}, r)); };
        ea.isSideCarExport = !0;
        var ei = function () { var e = 0, t = null; return { add: function (r) { if (0 == e && (t = function () { if (!document)
                return null; var e = document.createElement("style"); e.type = "text/css"; var t = f || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0); return t && e.setAttribute("nonce", t), e; }())) {
                var n, o;
                (n = t).styleSheet ? n.styleSheet.cssText = r : n.appendChild(document.createTextNode(r)), o = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(o);
            } e++; }, remove: function () { --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null); } }; }, el = function () { var e = ei(); return function (t, r) { y.useEffect(function () { return e.add(t), function () { e.remove(); }; }, [t && r]); }; }, es = function () { var e = el(); return function (t) { return e(t.styles, t.dynamic), null; }; }, ec = { left: 0, top: 0, right: 0, gap: 0 }, eu = function (e) { return parseInt(e || "", 10) || 0; }, ed = function (e) { var t = window.getComputedStyle(document.body), r = t["padding" === e ? "paddingLeft" : "marginLeft"], n = t["padding" === e ? "paddingTop" : "marginTop"], o = t["padding" === e ? "paddingRight" : "marginRight"]; return [eu(r), eu(n), eu(o)]; }, ef = function (e) { if (void 0 === e && (e = "margin"), "undefined" == typeof window)
            return ec; var t = ed(e), r = document.documentElement.clientWidth, n = window.innerWidth; return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, n - r + t[2] - t[0]) }; }, em = es(), ep = "data-scroll-locked", eh = function (e, t, r, n) { var o = e.left, a = e.top, i = e.right, l = e.gap; return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(l, "px ").concat(n, ";\n  }\n  body[").concat(ep, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(l, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Z, " {\n    right: ").concat(l, "px ").concat(n, ";\n  }\n  \n  .").concat(J, " {\n    margin-right: ").concat(l, "px ").concat(n, ";\n  }\n  \n  .").concat(Z, " .").concat(Z, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(J, " .").concat(J, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(ep, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n"); }, eg = function () { var e = parseInt(document.body.getAttribute(ep) || "0", 10); return isFinite(e) ? e : 0; }, eb = function () { y.useEffect(function () { return document.body.setAttribute(ep, (eg() + 1).toString()), function () { var e = eg() - 1; e <= 0 ? document.body.removeAttribute(ep) : document.body.setAttribute(ep, e.toString()); }; }, []); }, ev = function (e) { var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = void 0 === n ? "margin" : n; eb(); var a = y.useMemo(function () { return ef(o); }, [o]); return y.createElement(em, { styles: eh(a, !t, o, r ? "" : "!important") }); }, ey = !1;
        if ("undefined" != typeof window)
            try {
                var ex = Object.defineProperty({}, "passive", { get: function () { return ey = !0, !0; } });
                window.addEventListener("test", ex, ex), window.removeEventListener("test", ex, ex);
            }
            catch (e) {
                ey = !1;
            }
        var ew = !!ey && { passive: !1 }, ek = function (e, t) { if (!(e instanceof Element))
            return !1; var r = window.getComputedStyle(e); return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t]); }, eE = function (e, t) { var r = t.ownerDocument, n = t; do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), ej(e, n)) {
                var o = eN(e, n);
                if (o[1] > o[2])
                    return !0;
            }
            n = n.parentNode;
        } while (n && n !== r.body); return !1; }, ej = function (e, t) { return "v" === e ? ek(t, "overflowY") : ek(t, "overflowX"); }, eN = function (e, t) { return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]; }, eC = function (e, t, r, n, o) { var a, i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1), l = i * n, s = r.target, c = t.contains(s), u = !1, d = l > 0, f = 0, m = 0; do {
            if (!s)
                break;
            var p = eN(e, s), h = p[0], g = p[1] - p[2] - i * h;
            (h || g) && ej(e, s) && (f += g, m += h);
            var b = s.parentNode;
            s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
        } while (!c && s !== document.body || c && (t.contains(s) || t === s)); return d && (o && 1 > Math.abs(f) || !o && l > f) ? u = !0 : !d && (o && 1 > Math.abs(m) || !o && -l > m) && (u = !0), u; }, eS = function (e) { return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]; }, eO = function (e) { return [e.deltaX, e.deltaY]; }, eR = function (e) { return e && "current" in e ? e.current : e; }, eP = 0, e_ = [];
        let eT = (c = function (e) { var t = y.useRef([]), r = y.useRef([0, 0]), n = y.useRef(), o = y.useState(eP++)[0], a = y.useState(es)[0], i = y.useRef(e); y.useEffect(function () { i.current = e; }, [e]), y.useEffect(function () { if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (function (e, t, r) { if (r || 2 == arguments.length)
                for (var n, o = 0, a = t.length; o < a; o++)
                    !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]); return e.concat(n || Array.prototype.slice.call(t)); })([e.lockRef.current], (e.shards || []).map(eR), !0).filter(Boolean);
            return t.forEach(function (e) { return e.classList.add("allow-interactivity-".concat(o)); }), function () { document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function (e) { return e.classList.remove("allow-interactivity-".concat(o)); }); };
        } }, [e.inert, e.lockRef.current, e.shards]); var l = y.useCallback(function (e, t) { if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
            return !i.current.allowPinchZoom; var o, a = eS(e), l = r.current, s = "deltaX" in e ? e.deltaX : l[0] - a[0], c = "deltaY" in e ? e.deltaY : l[1] - a[1], u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v"; if ("touches" in e && "h" === d && "range" === u.type)
            return !1; var f = window.getSelection(), m = f && f.anchorNode; if (m && (m === u || m.contains(u)))
            return !1; var p = eE(d, u); if (!p)
            return !0; if (p ? o = d : (o = "v" === d ? "h" : "v", p = eE(d, u)), !p)
            return !1; if (!n.current && "changedTouches" in e && (s || c) && (n.current = o), !o)
            return !0; var h = n.current || o; return eC(h, t, e, "h" === h ? s : c, !0); }, []), s = y.useCallback(function (e) { if (e_.length && e_[e_.length - 1] === a) {
            var r = "deltaY" in e ? eO(e) : eS(e), n = t.current.filter(function (t) { var n; return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta, n[0] === r[0] && n[1] === r[1]); })[0];
            if (n && n.should) {
                e.cancelable && e.preventDefault();
                return;
            }
            if (!n) {
                var o = (i.current.shards || []).map(eR).filter(Boolean).filter(function (t) { return t.contains(e.target); });
                (o.length > 0 ? l(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault();
            }
        } }, []), c = y.useCallback(function (e, r, n, o) { var a = { name: e, delta: r, target: n, should: o, shadowParent: function (e) { for (var t = null; null !== e;)
                e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode; return t; }(n) }; t.current.push(a), setTimeout(function () { t.current = t.current.filter(function (e) { return e !== a; }); }, 1); }, []), u = y.useCallback(function (e) { r.current = eS(e), n.current = void 0; }, []), d = y.useCallback(function (t) { c(t.type, eO(t), t.target, l(t, e.lockRef.current)); }, []), f = y.useCallback(function (t) { c(t.type, eS(t), t.target, l(t, e.lockRef.current)); }, []); y.useEffect(function () { return e_.push(a), e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }), document.addEventListener("wheel", s, ew), document.addEventListener("touchmove", s, ew), document.addEventListener("touchstart", u, ew), function () { e_ = e_.filter(function (e) { return e !== a; }), document.removeEventListener("wheel", s, ew), document.removeEventListener("touchmove", s, ew), document.removeEventListener("touchstart", u, ew); }; }, []); var m = e.removeScrollBar, p = e.inert; return y.createElement(y.Fragment, null, p ? y.createElement(a, { styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n") }) : null, m ? y.createElement(ev, { noRelative: e.noRelative, gapMode: e.gapMode }) : null); }, er.useMedium(c), ea);
        var ez = y.forwardRef(function (e, t) { return y.createElement(eo, H({}, e, { ref: t, sideCar: eT })); });
        ez.classNames = eo.classNames;
        var eA = new WeakMap, eM = new WeakMap, eI = {}, eL = 0, eD = function (e) { return e && (e.host || eD(e.parentNode)); }, eF = function (e, t, r, n) { var o = (Array.isArray(e) ? e : [e]).map(function (e) { if (t.contains(e))
            return e; var r = eD(e); return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null); }).filter(function (e) { return !!e; }); eI[r] || (eI[r] = new WeakMap); var a = eI[r], i = [], l = new Set, s = new Set(o), c = function (e) { !e || l.has(e) || (l.add(e), c(e.parentNode)); }; o.forEach(c); var u = function (e) { !e || s.has(e) || Array.prototype.forEach.call(e.children, function (e) { if (l.has(e))
            u(e);
        else
            try {
                var t = e.getAttribute(n), o = null !== t && "false" !== t, s = (eA.get(e) || 0) + 1, c = (a.get(e) || 0) + 1;
                eA.set(e, s), a.set(e, c), i.push(e), 1 === s && o && eM.set(e, !0), 1 === c && e.setAttribute(r, "true"), o || e.setAttribute(n, "true");
            }
            catch (t) {
                console.error("aria-hidden: cannot operate on ", e, t);
            } }); }; return u(t), l.clear(), eL++, function () { i.forEach(function (e) { var t = eA.get(e) - 1, o = a.get(e) - 1; eA.set(e, t), a.set(e, o), t || (eM.has(e) || e.removeAttribute(n), eM.delete(e)), o || e.removeAttribute(r); }), --eL || (eA = new WeakMap, eA = new WeakMap, eM = new WeakMap, eI = {}); }; }, eW = function (e, t, r) { void 0 === r && (r = "data-aria-hidden"); var n = Array.from(Array.isArray(e) ? e : [e]), o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body); return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), eF(n, o, r, "aria-hidden")) : function () { return null; }; }, e$ = "Dialog", [eB, eU] = function (e, t = []) { let r = [], n = () => { let t = r.map(e => y.createContext(e)); return function (r) { let n = r?.[e] || t; return y.useMemo(() => ({ [`__scope${e}`]: { ...r, [e]: n } }), [r, n]); }; }; return n.scopeName = e, [function (t, n) { let o = y.createContext(n), a = r.length; r = [...r, n]; let i = t => { let { scope: r, children: n, ...i } = t, l = r?.[e]?.[a] || o, s = y.useMemo(() => i, Object.values(i)); return (0, m.jsx)(l.Provider, { value: s, children: n }); }; return i.displayName = t + "Provider", [i, function (r, i) { let l = i?.[e]?.[a] || o, s = y.useContext(l); if (s)
                    return s; if (void 0 !== n)
                    return n; throw Error(`\`${r}\` must be used within \`${t}\``); }]; }, function (...e) { let t = e[0]; if (1 === e.length)
                return t; let r = () => { let r = e.map(e => ({ useScope: e(), scopeName: e.scopeName })); return function (e) { let n = r.reduce((t, { useScope: r, scopeName: n }) => { let o = r(e)[`__scope${n}`]; return { ...t, ...o }; }, {}); return y.useMemo(() => ({ [`__scope${t.scopeName}`]: n }), [n]); }; }; return r.scopeName = t.scopeName, r; }(n, ...t)]; }(e$), [eG, eK] = eB(e$), eV = e => { let { __scopeDialog: t, children: r, open: n, defaultOpen: o, onOpenChange: a, modal: i = !0 } = e, l = y.useRef(null), s = y.useRef(null), [c = !1, u] = function ({ prop: e, defaultProp: t, onChange: r = () => { } }) { let [n, o] = function ({ defaultProp: e, onChange: t }) { let r = y.useState(e), [n] = r, o = y.useRef(n), a = C(t); return y.useEffect(() => { o.current !== n && (a(n), o.current = n); }, [n, o, a]), r; }({ defaultProp: t, onChange: r }), a = void 0 !== e, i = a ? e : n, l = C(r); return [i, y.useCallback(t => { if (a) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && l(r);
            }
            else
                o(t); }, [a, e, o, l])]; }({ prop: n, defaultProp: o, onChange: a }); return (0, m.jsx)(eG, { scope: t, triggerRef: l, contentRef: s, contentId: N(), titleId: N(), descriptionId: N(), open: c, onOpenChange: u, onOpenToggle: y.useCallback(() => u(e => !e), [u]), modal: i, children: r }); };
        eV.displayName = e$;
        var eY = "DialogTrigger", eq = y.forwardRef((e, t) => { let { __scopeDialog: r, ...n } = e, o = eK(eY, r), a = (0, w.useComposedRefs)(t, o.triggerRef); return (0, m.jsx)(R.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": tr(o.open), ...n, ref: a, onClick: x(e.onClick, o.onOpenToggle) }); });
        eq.displayName = eY;
        var eH = "DialogPortal", [eX, eZ] = eB(eH, { forceMount: void 0 }), eJ = e => { let { __scopeDialog: t, forceMount: r, children: n, container: o } = e, a = eK(eH, t); return (0, m.jsx)(eX, { scope: t, forceMount: r, children: y.Children.map(n, e => (0, m.jsx)(K, { present: r || a.open, children: (0, m.jsx)(G, { asChild: !0, container: o, children: e }) })) }); };
        eJ.displayName = eH;
        var eQ = "DialogOverlay", e0 = y.forwardRef((e, t) => { let r = eZ(eQ, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = eK(eQ, e.__scopeDialog); return a.modal ? (0, m.jsx)(K, { present: n || a.open, children: (0, m.jsx)(e1, { ...o, ref: t }) }) : null; });
        e0.displayName = eQ;
        var e1 = y.forwardRef((e, t) => { let { __scopeDialog: r, ...n } = e, o = eK(eQ, r); return (0, m.jsx)(ez, { as: O.Slot, allowPinchZoom: !0, shards: [o.contentRef], children: (0, m.jsx)(R.div, { "data-state": tr(o.open), ...n, ref: t, style: { pointerEvents: "auto", ...n.style } }) }); }), e2 = "DialogContent", e4 = y.forwardRef((e, t) => { let r = eZ(e2, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, a = eK(e2, e.__scopeDialog); return (0, m.jsx)(K, { present: n || a.open, children: a.modal ? (0, m.jsx)(e6, { ...o, ref: t }) : (0, m.jsx)(e8, { ...o, ref: t }) }); });
        e4.displayName = e2;
        var e6 = y.forwardRef((e, t) => { let r = eK(e2, e.__scopeDialog), n = y.useRef(null), o = (0, w.useComposedRefs)(t, r.contentRef, n); return y.useEffect(() => { let e = n.current; if (e)
            return eW(e); }, []), (0, m.jsx)(e5, { ...e, ref: o, trapFocus: r.open, disableOutsidePointerEvents: !0, onCloseAutoFocus: x(e.onCloseAutoFocus, e => { e.preventDefault(), r.triggerRef.current?.focus(); }), onPointerDownOutside: x(e.onPointerDownOutside, e => { let t = e.detail.originalEvent, r = 0 === t.button && !0 === t.ctrlKey; (2 === t.button || r) && e.preventDefault(); }), onFocusOutside: x(e.onFocusOutside, e => e.preventDefault()) }); }), e8 = y.forwardRef((e, t) => { let r = eK(e2, e.__scopeDialog), n = y.useRef(!1), o = y.useRef(!1); return (0, m.jsx)(e5, { ...e, ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, onCloseAutoFocus: t => { e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1; }, onInteractOutside: t => { e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0)); let a = t.target; r.triggerRef.current?.contains(a) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault(); } }); }), e5 = y.forwardRef((e, t) => { let { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, l = eK(e2, r), s = y.useRef(null), c = (0, w.useComposedRefs)(t, s); return y.useEffect(() => { let e = document.querySelectorAll("[data-radix-focus-guard]"); return document.body.insertAdjacentElement("afterbegin", e[0] ?? q()), document.body.insertAdjacentElement("beforeend", e[1] ?? q()), Y++, () => { 1 === Y && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Y--; }; }, []), (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(D, { asChild: !0, loop: !0, trapped: n, onMountAutoFocus: o, onUnmountAutoFocus: a, children: (0, m.jsx)(T, { role: "dialog", id: l.contentId, "aria-describedby": l.descriptionId, "aria-labelledby": l.titleId, "data-state": tr(l.open), ...i, ref: c, onDismiss: () => l.onOpenChange(!1) }) }), (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(ti, { titleId: l.titleId }), (0, m.jsx)(tl, { contentRef: s, descriptionId: l.descriptionId })] })] }); }), e3 = "DialogTitle", e9 = y.forwardRef((e, t) => { let { __scopeDialog: r, ...n } = e, o = eK(e3, r); return (0, m.jsx)(R.h2, { id: o.titleId, ...n, ref: t }); });
        e9.displayName = e3;
        var e7 = "DialogDescription";
        y.forwardRef((e, t) => { let { __scopeDialog: r, ...n } = e, o = eK(e7, r); return (0, m.jsx)(R.p, { id: o.descriptionId, ...n, ref: t }); }).displayName = e7;
        var te = "DialogClose", tt = y.forwardRef((e, t) => { let { __scopeDialog: r, ...n } = e, o = eK(te, r); return (0, m.jsx)(R.button, { type: "button", ...n, ref: t, onClick: x(e.onClick, () => o.onOpenChange(!1)) }); });
        function tr(e) { return e ? "open" : "closed"; }
        tt.displayName = te;
        var tn = "DialogTitleWarning", [to, ta] = (u = { contentName: e2, titleName: e3, docsSlug: "dialog" }, t = y.createContext(u), (r = e => { let { children: r, ...n } = e, o = y.useMemo(() => n, Object.values(n)); return (0, m.jsx)(t.Provider, { value: o, children: r }); }).displayName = tn + "Provider", [r, function (e) { let r = y.useContext(t); if (r)
                return r; if (void 0 !== u)
                return u; throw Error(`\`${e}\` must be used within \`${tn}\``); }]), ti = ({ titleId: e }) => {
            let t = ta(tn), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
            return y.useEffect(() => { e && (document.getElementById(e) || console.error(r)); }, [r, e]), null;
        }, tl = ({ contentRef: e, descriptionId: t }) => { let r = ta("DialogDescriptionWarning"), n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`; return y.useEffect(() => { let r = e.current?.getAttribute("aria-describedby"); t && r && (document.getElementById(t) || console.warn(n)); }, [n, e, t]), null; };
        let ts = (0, g.default)("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
        var tc = e.i(47163);
        function tu({ ...e }) { return (0, m.jsx)(eV, { "data-slot": "sheet", ...e }); }
        function td({ ...e }) { return (0, m.jsx)(eq, { "data-slot": "sheet-trigger", ...e }); }
        function tf({ ...e }) { return (0, m.jsx)(tt, { "data-slot": "sheet-close", ...e }); }
        function tm({ ...e }) { return (0, m.jsx)(eJ, { "data-slot": "sheet-portal", ...e }); }
        function tp({ className: e, ...t }) { return (0, m.jsx)(e0, { "data-slot": "sheet-overlay", className: (0, tc.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e), ...t }); }
        function th({ className: e, children: t, side: r = "right", ...n }) { return (0, m.jsxs)(tm, { children: [(0, m.jsx)(tp, {}), (0, m.jsxs)(e4, { "data-slot": "sheet-content", className: (0, tc.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", "right" === r && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", "left" === r && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", "top" === r && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", "bottom" === r && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", e), ...n, children: [t, (0, m.jsxs)(tt, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [(0, m.jsx)(ts, { className: "size-4" }), (0, m.jsx)("span", { className: "sr-only", children: "Close" })] })] })] }); }
        function tg({ className: e, ...t }) { return (0, m.jsx)("div", { "data-slot": "sheet-header", className: (0, tc.cn)("flex flex-col gap-1.5 p-4", e), ...t }); }
        function tb({ className: e, ...t }) { return (0, m.jsx)(e9, { "data-slot": "sheet-title", className: (0, tc.cn)("text-foreground font-semibold", e), ...t }); }
        let tv = [{ label: "Overview", href: "/#what-colytics-is" }, { label: "AI Visibility", href: "/#ai-search-visibility" }, { label: "Scoring", href: "/#proprietary-scoring" }, { label: "Ask AI", href: "/#ask-ai" }, { label: "ROI", href: "/#roi-calculator" }, { label: "Pricing", href: "/#pricing" }, { label: "Blog", href: "/blog" }];
        function ty() { return (0, m.jsx)("header", { id: "site-header", className: "fixed top-0 left-0 right-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-border/40 transition-all", children: (0, m.jsxs)("div", { className: "w-full flex items-center justify-between max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6", children: [(0, m.jsx)(p.default, { href: "/", className: "flex items-center shrink-0", children: (0, m.jsx)("img", { src: "/logo/colytics-logo-side.svg", alt: "Colytics AI", className: "h-8 sm:h-10 w-auto -my-4 sm:-my-6" }) }), (0, m.jsx)("nav", { className: "hidden md:flex items-center gap-7", children: tv.map(e => (0, m.jsx)(p.default, { href: e.href, className: "text-ui-md text-muted-foreground hover:text-foreground transition-colors", children: e.label }, e.href)) }), (0, m.jsx)("div", { className: "hidden sm:flex items-center gap-3", children: (0, m.jsx)(v.default, { label: "Get early access →" }) }), (0, m.jsx)("div", { className: "flex items-center gap-2 sm:hidden", children: (0, m.jsxs)(tu, { children: [(0, m.jsx)(td, { asChild: !0, children: (0, m.jsxs)(h.Button, { variant: "outline", size: "icon-sm", className: "rounded-full bg-white", children: [(0, m.jsx)(b, { className: "h-4 w-4" }), (0, m.jsx)("span", { className: "sr-only", children: "Open menu" })] }) }), (0, m.jsxs)(th, { side: "right", className: "w-[88vw] sm:w-sm overflow-y-auto px-4", children: [(0, m.jsx)(tg, { className: "px-0 pt-6", children: (0, m.jsx)(tb, { className: "heading-3-lg text-left", children: "Menu" }) }), (0, m.jsxs)("div", { className: "space-y-6 pb-6 pt-2", children: [(0, m.jsx)("div", { className: "grid gap-2", children: tv.map(e => (0, m.jsx)(tf, { asChild: !0, children: (0, m.jsx)(p.default, { href: e.href, className: "rounded-lg border border-border px-3 py-2 text-ui-md text-foreground transition-colors hover:bg-muted", children: e.label }) }, e.href)) }), (0, m.jsx)("div", { className: "grid gap-2 pt-2", children: (0, m.jsx)(v.default, { label: "Get early access →", className: "w-full" }) })] })] })] }) })] }) }); }
        e.s(["Header", () => ty], 13293);
    }, 18925, e => {
        "use strict";
        function t() { return null; }
        e.s(["CcpaOptOutButton", () => t]);
    }]);
