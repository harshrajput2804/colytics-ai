(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 4063, e => {
        "use strict";
        var t = e.i(43476);
        function a() {
            return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("style", { dangerouslySetInnerHTML: { __html: `
  /* ---- CSS Variables ---- */
  :root {
    --cb-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --cb-accent: #4f46e5;
    --cb-accent-hover: #4338ca;
    --cb-success: #10b981;
    --cb-danger: #ef4444;
    --cb-text: #1f2937;
    --cb-text-muted: #6b7280;
    --cb-border: #e5e7eb;
    --cb-bg: #ffffff;
    --cb-bg-overlay: rgba(0, 0, 0, 0.4);
    --cb-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    --cb-radius: 10px;
  }

  /* ---- Bottom Bar ---- */
  #cb-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--cb-bg);
    border-top: 1px solid var(--cb-border);
    box-shadow: var(--cb-shadow);
    z-index: 9999;
    font-family: var(--cb-font);
    font-size: 13px;
    line-height: 1.5;
    color: var(--cb-text);
    transform: translateY(120%);
    transition: transform 0.35s ease;
  }
  #cb-bar.cb-show {
    transform: translateY(0);
  }
  #cb-bar .cb-bar-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  #cb-bar .cb-bar-text {
    flex: 1;
    min-width: 0;
  }
  #cb-bar .cb-bar-text p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #cb-bar .cb-bar-text a {
    color: var(--cb-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  #cb-bar .cb-bar-text a:hover {
    color: var(--cb-accent-hover);
  }
  #cb-bar .cb-bar-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }

  /* ---- Buttons ---- */
  .cb-btn {
    padding: 8px 16px;
    border-radius: 6px;
    font-family: var(--cb-font);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: 1.5px solid transparent;
    transition: all 0.2s ease;
    line-height: 1.4;
    white-space: nowrap;
  }
  .cb-btn:focus {
    outline: 2px solid var(--cb-accent);
    outline-offset: 2px;
  }
  .cb-btn-primary {
    background: var(--cb-accent);
    color: #fff;
    border-color: var(--cb-accent);
  }
  .cb-btn-primary:hover {
    background: var(--cb-accent-hover);
    border-color: var(--cb-accent-hover);
  }
  .cb-btn-secondary {
    background: #fff;
    color: var(--cb-text);
    border-color: var(--cb-border);
  }
  .cb-btn-secondary:hover {
    background: #f9fafb;
  }
  .cb-btn-ghost {
    background: transparent;
    color: var(--cb-text-muted);
    border-color: transparent;
    text-decoration: underline;
    padding: 8px 10px;
  }
  .cb-btn-ghost:hover {
    color: var(--cb-text);
  }

  /* ---- Detail Panel Overlay ---- */
  #cb-panel-overlay {
    position: fixed;
    inset: 0;
    background: var(--cb-bg-overlay);
    z-index: 10000;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease, visibility 0.25s ease;
  }
  #cb-panel-overlay.cb-active {
    opacity: 1;
    visibility: visible;
  }

  /* ---- Detail Panel ---- */
  #cb-panel {
    background: var(--cb-bg);
    border-radius: var(--cb-radius) var(--cb-radius) 0 0;
    box-shadow: 0 -10px 40px rgba(0,0,0,0.15);
    width: 100%;
    max-width: 560px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    font-family: var(--cb-font);
    color: var(--cb-text);
    transform: translateY(100%);
    transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  }
  #cb-panel-overlay.cb-active #cb-panel {
    transform: translateY(0);
  }

  /* Panel Header */
  #cb-panel .cb-panel-head {
    padding: 18px 22px 12px;
    border-bottom: 1px solid var(--cb-border);
    flex-shrink: 0;
  }
  #cb-panel .cb-panel-head h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }
  #cb-panel .cb-panel-head p {
    margin: 4px 0 0;
    font-size: 12px;
    color: var(--cb-text-muted);
  }

  /* Panel Body */
  #cb-panel .cb-panel-body {
    padding: 14px 22px;
    overflow-y: auto;
    flex: 1;
  }
  #cb-panel .cb-panel-body::-webkit-scrollbar { width: 5px; }
  #cb-panel .cb-panel-body::-webkit-scrollbar-thumb {
    background: #d1d5db; border-radius: 3px;
  }

  /* Category Row */
  #cb-panel .cb-cat {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #f3f4f6;
  }
  #cb-panel .cb-cat:last-child { border-bottom: none; }
  #cb-panel .cb-cat-info { flex: 1; min-width: 0; }
  #cb-panel .cb-cat-title {
    font-size: 13px;
    font-weight: 600;
    margin: 0;
  }
  #cb-panel .cb-cat-desc {
    font-size: 12px;
    color: var(--cb-text-muted);
    margin: 3px 0 0;
    line-height: 1.45;
  }
  #cb-panel .cb-cat-tools {
    font-size: 11px;
    color: #9ca3af;
    margin-top: 3px;
    font-style: italic;
  }

  /* Toggle Switch */
  .cb-toggle {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .cb-toggle input {
    position: absolute;
    opacity: 0;
    width: 0; height: 0;
  }
  .cb-toggle-track {
    width: 40px;
    height: 22px;
    background: #d1d5db;
    border-radius: 999px;
    position: relative;
    transition: background 0.2s ease;
  }
  .cb-toggle input:checked + .cb-toggle-track {
    background: var(--cb-success);
  }
  .cb-toggle input:disabled + .cb-toggle-track {
    opacity: 0.45;
  }
  .cb-toggle input:focus + .cb-toggle-track {
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.25);
  }
  .cb-toggle-thumb {
    width: 16px; height: 16px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 3px; left: 3px;
    transition: transform 0.2s ease;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }
  .cb-toggle input:checked + .cb-toggle-track .cb-toggle-thumb {
    transform: translateX(18px);
  }

  /* CCPA in panel */
  #cb-panel .cb-ccpa-line {
    margin-top: 12px;
    padding: 10px 14px;
    background: #fef9c3;
    border-radius: 6px;
    font-size: 12px;
    color: #854d0e;
  }
  #cb-panel .cb-ccpa-line a {
    color: #854d0e;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
  }

  /* Panel Footer */
  #cb-panel .cb-panel-foot {
    padding: 14px 22px 18px;
    border-top: 1px solid var(--cb-border);
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    flex-shrink: 0;
  }

  /* Floating Button */
  #cb-float {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--cb-accent);
    color: #fff;
    border: none;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    transition: transform 0.2s ease, background 0.2s ease;
  }
  #cb-float:hover { transform: scale(1.1); background: var(--cb-accent-hover); }
  #cb-float:focus { outline: 2px solid var(--cb-accent); outline-offset: 2px; }
  #cb-float svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

  /* ---- Mobile ---- */
  @media (max-width: 640px) {
    #cb-bar .cb-bar-inner {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 12px 14px;
    }
    #cb-bar .cb-bar-text p {
      white-space: normal;
      font-size: 12px;
    }
    #cb-bar .cb-bar-actions {
      justify-content: stretch;
    }
    #cb-bar .cb-bar-actions .cb-btn {
      flex: 1;
      text-align: center;
    }
    #cb-panel { max-width: 100%; max-height: 85vh; }
    #cb-panel .cb-panel-foot { flex-direction: column; }
    #cb-panel .cb-panel-foot .cb-btn { width: 100%; text-align: center; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    #cb-bar, #cb-panel, #cb-panel-overlay, .cb-toggle-track, .cb-toggle-thumb, .cb-btn {
      transition: none !important;
    }
  }
      ` } }), (0, t.jsx)("div", { id: "cb-bar", role: "dialog", "aria-modal": !1, "aria-label": "Cookie consent", children: (0, t.jsxs)("div", { className: "cb-bar-inner", children: [(0, t.jsx)("div", { className: "cb-bar-text", children: (0, t.jsxs)("p", { children: ["We use cookies to improve your experience on Colytics AI.", " ", (0, t.jsx)("a", { href: "/cookie-policy", target: "_blank", rel: "noopener noreferrer", children: "Cookie Policy" }), "."] }) }), (0, t.jsxs)("div", { className: "cb-bar-actions", children: [(0, t.jsx)("button", { className: "cb-btn cb-btn-secondary", id: "cb-btn-customize", type: "button", children: "Customize" }), (0, t.jsx)("button", { className: "cb-btn cb-btn-primary", id: "cb-btn-accept-all", type: "button", children: "Accept All" })] })] }) }), (0, t.jsx)("div", { id: "cb-panel-overlay", style: { display: "none" }, role: "dialog", "aria-modal": !0, "aria-labelledby": "cb-panel-title", children: (0, t.jsxs)("div", { id: "cb-panel", role: "document", children: [(0, t.jsxs)("div", { className: "cb-panel-head", children: [(0, t.jsx)("h3", { id: "cb-panel-title", children: "Cookie Preferences" }), (0, t.jsx)("p", { children: "All categories are enabled by default. You can disable any non-essential category below." })] }), (0, t.jsxs)("div", { className: "cb-panel-body", children: [(0, t.jsxs)("div", { className: "cb-cat", children: [(0, t.jsxs)("div", { className: "cb-cat-info", children: [(0, t.jsx)("p", { className: "cb-cat-title", children: "Strictly Necessary" }), (0, t.jsx)("p", { className: "cb-cat-desc", children: "Required for the site to function. Cannot be disabled." })] }), (0, t.jsxs)("label", { className: "cb-toggle", "aria-label": "Strictly Necessary always on", children: [(0, t.jsx)("input", { type: "checkbox", id: "cb-tog-necessary", defaultChecked: !0, disabled: !0 }), (0, t.jsx)("span", { className: "cb-toggle-track", children: (0, t.jsx)("span", { className: "cb-toggle-thumb" }) })] })] }), (0, t.jsxs)("div", { className: "cb-cat", children: [(0, t.jsxs)("div", { className: "cb-cat-info", children: [(0, t.jsx)("p", { className: "cb-cat-title", children: "Performance / Analytics" }), (0, t.jsx)("p", { className: "cb-cat-desc", children: "Helps us understand how visitors use our site." }), (0, t.jsx)("p", { className: "cb-cat-tools", children: "Google Analytics, Microsoft Clarity" })] }), (0, t.jsxs)("label", { className: "cb-toggle", htmlFor: "cb-tog-analytics", "aria-label": "Toggle Analytics", children: [(0, t.jsx)("input", { type: "checkbox", id: "cb-tog-analytics", "data-cat": "analytics", defaultChecked: !0 }), (0, t.jsx)("span", { className: "cb-toggle-track", children: (0, t.jsx)("span", { className: "cb-toggle-thumb" }) })] })] }), (0, t.jsxs)("div", { className: "cb-cat", children: [(0, t.jsxs)("div", { className: "cb-cat-info", children: [(0, t.jsx)("p", { className: "cb-cat-title", children: "Marketing / Targeting" }), (0, t.jsx)("p", { className: "cb-cat-desc", children: "Used for relevant ads and campaign measurement." }), (0, t.jsx)("p", { className: "cb-cat-tools", children: "Mailchimp, HubSpot, ActiveCampaign" })] }), (0, t.jsxs)("label", { className: "cb-toggle", htmlFor: "cb-tog-marketing", "aria-label": "Toggle Marketing", children: [(0, t.jsx)("input", { type: "checkbox", id: "cb-tog-marketing", "data-cat": "marketing", defaultChecked: !0 }), (0, t.jsx)("span", { className: "cb-toggle-track", children: (0, t.jsx)("span", { className: "cb-toggle-thumb" }) })] })] }), (0, t.jsxs)("div", { className: "cb-cat", children: [(0, t.jsxs)("div", { className: "cb-cat-info", children: [(0, t.jsx)("p", { className: "cb-cat-title", children: "Functional" }), (0, t.jsx)("p", { className: "cb-cat-desc", children: "Remembers your preferences and settings." }), (0, t.jsx)("p", { className: "cb-cat-tools", children: "Preferences, Trello, Cloudflare" })] }), (0, t.jsxs)("label", { className: "cb-toggle", htmlFor: "cb-tog-functional", "aria-label": "Toggle Functional", children: [(0, t.jsx)("input", { type: "checkbox", id: "cb-tog-functional", "data-cat": "functional", defaultChecked: !0 }), (0, t.jsx)("span", { className: "cb-toggle-track", children: (0, t.jsx)("span", { className: "cb-toggle-thumb" }) })] })] }), (0, t.jsxs)("div", { className: "cb-ccpa-line", children: [(0, t.jsx)("strong", { children: "California residents:" }), (0, t.jsx)("a", { id: "cb-ccpa-optout", children: "Do Not Sell or Share My Personal Information" })] })] }), (0, t.jsxs)("div", { className: "cb-panel-foot", children: [(0, t.jsx)("button", { className: "cb-btn cb-btn-ghost", id: "cb-btn-close", type: "button", children: "Close" }), (0, t.jsx)("button", { className: "cb-btn cb-btn-secondary", id: "cb-btn-save", type: "button", children: "Save Preferences" }), (0, t.jsx)("button", { className: "cb-btn cb-btn-primary", id: "cb-btn-accept-panel", type: "button", children: "Accept All" })] })] }) }), (0, t.jsx)("button", { id: "cb-float", type: "button", "aria-label": "Cookie settings", title: "Cookie Settings", style: { display: "none" }, children: (0, t.jsxs)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [(0, t.jsx)("circle", { cx: "12", cy: "12", r: "3" }), (0, t.jsx)("path", { d: "M12 1v4m0 14v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M1 12h4m14 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" })] }) }), (0, t.jsx)("script", { dangerouslySetInnerHTML: { __html: `
(function() {
  'use strict';

  const CFG = {
    lsKey: 'colytics_consent',
    cookieName: 'colytics_consent',
    version: '2.0',
    days: 365
  };

  const $ = (s) => document.getElementById(s);

  // --- State ---
  let consent = loadConsent();

  // --- DOM refs ---
  const bar        = $('cb-bar');
  const panelOverlay = $('cb-panel-overlay');
  const panel      = $('cb-panel');
  const floatBtn   = $('cb-float');
  const toggles = {
    necessary:  $('cb-tog-necessary'),
    analytics:  $('cb-tog-analytics'),
    marketing:  $('cb-tog-marketing'),
    functional: $('cb-tog-functional')
  };

  // --- Init ---
  function init() {
    if (!consent) {
      // First visit: show bar, all categories checked by default
      consent = {
        categories: { necessary: true, analytics: true, marketing: true, functional: true },
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        version: CFG.version
      };
      // Don't save yet — wait for user action
      showBar();
    } else {
      // Returning user: apply saved consent
      applyConsent(consent.categories);
      showFloat();
    }

    bindEvents();
    pushGoogleConsent(consent ? consent.categories : { necessary: true, analytics: true, marketing: true, functional: true });
    activateScripts(consent ? consent.categories : { necessary: true, analytics: true, marketing: true, functional: true });
  }

  // --- Event Binding ---
  function bindEvents() {
    $('cb-btn-accept-all').addEventListener('click', () => {
      const allOn = { necessary: true, analytics: true, marketing: true, functional: true };
      setToggles(allOn);
      saveAndApply(allOn);
      hideBar();
      hidePanel();
      showFloat();
    });

    $('cb-btn-customize').addEventListener('click', () => {
      // Sync toggles with current consent state
      if (consent) setToggles(consent.categories);
      showPanel();
    });

    $('cb-btn-accept-panel').addEventListener('click', () => {
      const cats = readToggles();
      saveAndApply(cats);
      hidePanel();
      hideBar();
      showFloat();
    });

    $('cb-btn-save').addEventListener('click', () => {
      const cats = readToggles();
      saveAndApply(cats);
      hidePanel();
      hideBar();
      showFloat();
    });

    $('cb-btn-close').addEventListener('click', () => {
      hidePanel();
    });

    panelOverlay.addEventListener('click', (e) => {
      if (e.target === panelOverlay) hidePanel();
    });

    $('cb-ccpa-optout').addEventListener('click', (e) => {
      e.preventDefault();
      toggles.analytics.checked = false;
      toggles.marketing.checked = false;
      const cats = readToggles();
      saveAndApply(cats);
      hidePanel();
      hideBar();
      showFloat();
    });

    floatBtn.addEventListener('click', () => {
      if (consent) setToggles(consent.categories);
      showPanel();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') hidePanel();
    });
  }

  // --- Toggle Helpers ---
  function readToggles() {
    return {
      necessary: true,
      analytics: toggles.analytics.checked,
      marketing: toggles.marketing.checked,
      functional: toggles.functional.checked
    };
  }
  function setToggles(cats) {
    toggles.analytics.checked  = !!cats.analytics;
    toggles.marketing.checked  = !!cats.marketing;
    toggles.functional.checked = !!cats.functional;
  }

  // --- Consent Save & Apply ---
  function saveAndApply(categories) {
    consent = {
      categories,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      version: CFG.version
    };
    localStorage.setItem(CFG.lsKey, JSON.stringify(consent));
    setCookie(CFG.cookieName, JSON.stringify(consent), CFG.days);
    pushGoogleConsent(categories);
    activateScripts(categories);
  }

  function loadConsent() {
    try {
      const raw = localStorage.getItem(CFG.lsKey);
      if (raw) return JSON.parse(raw);
    } catch(e) { /* ignore */ }
    return null;
  }

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }

  // --- Google Consent Mode v2 ---
  function pushGoogleConsent(cats) {
    if (typeof gtag !== 'function') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(function() {
        this.set('consent', buildConsentState(cats));
      });
      return;
    }
    gtag('consent', 'update', buildConsentState(cats));
  }

  function buildConsentState(cats) {
    return {
      analytics_storage:  cats.analytics  ? 'granted' : 'denied',
      ad_storage:         cats.marketing  ? 'granted' : 'denied',
      ad_user_data:       cats.marketing  ? 'granted' : 'denied',
      ad_personalization: cats.marketing  ? 'granted' : 'denied',
      wait_for_update: 500
    };
  }

  // --- Script Activation ---
  function activateScripts(cats) {
    document.querySelectorAll('script[type="text/plain"][data-cookie-category]').forEach(function(el) {
      const cat = el.getAttribute('data-cookie-category');
      const allowed = cat === 'necessary' || cats[cat];
      if (allowed) {
        const newEl = document.createElement('script');
        newEl.type = 'text/javascript';
        if (el.src) newEl.src = el.src;
        else newEl.textContent = el.textContent;
        ['data-cookie-category','type'].forEach(function(a) { newEl.removeAttribute(a); });
        el.parentNode.replaceChild(newEl, el);
      }
    });
  }

  function applyConsent(cats) {
    pushGoogleConsent(cats);
    activateScripts(cats);
  }

  // --- UI Show/Hide ---
  function showBar()  { bar.classList.add('cb-show'); }
  function hideBar()  { bar.classList.remove('cb-show'); }
  function showPanel() {
    panelOverlay.style.display = '';
    requestAnimationFrame(() => panelOverlay.classList.add('cb-active'));
    document.body.style.overflow = 'hidden';
  }
  function hidePanel() {
    panelOverlay.classList.remove('cb-active');
    setTimeout(() => { panelOverlay.style.display = 'none'; }, 300);
    document.body.style.overflow = '';
  }
  function showFloat() { floatBtn.style.display = 'none'; }

  // --- Public API ---
  window.ColyticsConsent = {
    getConsent: () => consent,
    show: () => { showPanel(); },
    hide: () => { hidePanel(); hideBar(); },
    reset: () => {
      localStorage.removeItem(CFG.lsKey);
      document.cookie = CFG.cookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
      consent = null;
      showBar();
      hidePanel();
    }
  };

  // Run
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
      ` } })] });
        }
        e.s(["CookieConsentBanner", () => a]);
    }, 81e3, e => {
        "use strict";
        var t = e.i(71645);
        function a() { return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? !1; }
        function n() { var e; return (0, t.useEffect)(() => { if (a())
            return; let e = Array.from(document.querySelectorAll(".reveal-heading, main header h1, main section > h1, main section > h2, main section > h3, main article > h1, main article > h2, main article > h3, main section > div > h2, main section > div > h3, main section > div > div > h2, main section > div > div > h3")).filter(e => !e.closest("[data-no-heading-reveal]")); if (!e.length)
            return; let t = new IntersectionObserver(e => { for (let a of e)
            a.isIntersecting && (a.target.classList.add("is-visible"), t.unobserve(a.target)); }, { rootMargin: "0px 0px -10% 0px", threshold: .01 }); return e.forEach(e => { e.classList.add("reveal-ready"), t.observe(e); }), () => t.disconnect(); }, []), e = { selector: ".parallax-layer" }, (0, t.useEffect)(() => { let t = e?.selector ?? ".parallax-layer", n = Array.from(document.querySelectorAll(t)); if (!n.length || a())
            return; let c = 0, o = () => { c || (c = window.requestAnimationFrame(() => { c = 0; let e = window.scrollY || 0; for (let t of n) {
            let a = t.getAttribute("data-speed"), n = e * (a ? Number(a) : .08);
            t.style.transform = `translate3d(0, ${n}px, 0)`;
        } })); }; return o(), window.addEventListener("scroll", o, { passive: !0 }), () => { window.removeEventListener("scroll", o), c && window.cancelAnimationFrame(c); }; }, [e?.selector]), (0, t.useEffect)(() => { if (a())
            return; let e = Array.from(document.querySelectorAll((void 0) ?? "main.landing-page > section")); if (!e.length)
            return; let t = new IntersectionObserver(e => { for (let a of e)
            a.isIntersecting && (a.target.classList.add("is-visible"), t.unobserve(a.target)); }, { rootMargin: "0px 0px -12% 0px", threshold: .12 }); return e.forEach(e => { e.classList.add("page-section-reveal"), t.observe(e); }), () => t.disconnect(); }, [void 0]), null; }
        e.s(["VisualEnhancements", () => n], 81e3);
    }]);
