import { a as Vu, b as $u, c as Qu, d as Uu, e as Wu, f as Hu, g as Gu, h as b, i as Yu } from "./chunk-YO34EUEW.js";
import "./chunk-7DMRJLOO.js";
import "./chunk-GEB3I7EJ.js";
import "./chunk-Y7PZGHIM.js";
import "./chunk-QWE42ONM.js";
import "./chunk-7FLNH4VK.js";
import { a as Du, b as Pu, c as Mu } from "./chunk-ZVWWXIZ7.js";
import "./chunk-CD7GW6WK.js";
import "./chunk-PORMSOAO.js";
import "./chunk-F7YA6PUO.js";
import { a as it, d as _u, e as vu, f as Su, g as xu } from "./chunk-KE6ARSQA.js";
import "./chunk-O6Q4EDOF.js";
import { a as Ou } from "./chunk-KJKZO3CZ.js";
import "./chunk-OFCKRY7R.js";
import "./chunk-SEUBLGWQ.js";
import "./chunk-ANUEJWSB.js";
import "./chunk-YLSQDSR3.js";
import { b as Iu, c as zu, d as Ne, e as st, f as Lu, g as ju } from "./chunk-2GQIIRU5.js";
import { a as Tu, b as ku } from "./chunk-2UWMRSJ2.js";
import "./chunk-H6YPQ6NK.js";
import "./chunk-Q4YRD5YU.js";
import { a as D, b as Y, c as Ru, d as rt, e as Ce, f as ot, g as ke } from "./chunk-VEONZOKC.js";
import { q as Cu, t as Fu, u as Bu, x as Nu, z as qu } from "./chunk-7NIALR5J.js";
import { a as ge, b as bu, c as Ku } from "./chunk-TIWJ52NN.js";
import { a as Ee } from "./chunk-3MTV67SU.js";
import "./chunk-DFVC7MLY.js";
import { a as wu } from "./chunk-5FDS4GNQ.js";
import {
  Ca as Wt,
  Ea as Ht,
  Eb as nu,
  F as et,
  Ga as Gt,
  Gc as yu,
  Ha as Te,
  Ka as Yt,
  Lb as iu,
  Na as Xt,
  Oc as Au,
  Pa as Zt,
  Q as Vt,
  Qb as ru,
  T as v,
  Tb as ou,
  V as H,
  Wa as l,
  Wb as su,
  Xa as c,
  Y as Pe,
  Ya as h,
  Z as w,
  Zb as G,
  a as we,
  ab as Oe,
  ba as j,
  cb as J,
  d as jt,
  eb as Jt,
  fc as au,
  ga as he,
  ka as pe,
  la as fe,
  lb as ut,
  lc as lu,
  mc as cu,
  na as Me,
  nb as o,
  nc as nt,
  ob as eu,
  pa as $t,
  pc as mu,
  rc as du,
  sc as hu,
  ta as Qt,
  tc as pu,
  uc as fu,
  va as tt,
  vb as V,
  vc as gu,
  wc as Eu,
  yb as tu,
  za as Ut,
  zb as uu,
} from "./chunk-IISBUUCH.js";
function Xu(i, e) {
  return [
    { provide: ge, useValue: i },
    { provide: Du, useValue: e },
  ];
}
var Zu = (() => {
  let e = class e {
    constructor() {
      (this.bannedBreadcrumbUrls = [
        "https://www.google-analytics.com",
        "https://stats.g.doubleclick.net",
        "https://cdn.cookielaw.org",
        "https://cloudflareinsights.com/cdn-cgi/rum",
      ]),
        (this.ngZone = w(Te)),
        (this.config = w(ge)),
        (this.sentryConfig = w(bu)),
        Su({
          enabled: this.config.production && location.host !== "localhost:4200" && location.host !== "localhost:4300",
          environment: this.config.environment,
          debug: this.config.environment !== "production",
          dsn: this.sentryConfig.dsn,
          release: this.sentryConfig.release,
          sampleRate: this.config.environment === "production" ? 0.5 : 1,
          denyUrls: [/cdn\.cookielaw\.org/, /www\.gstatic\.com\/recaptcha/, /multipay\.komoju\.com/],
          ignoreErrors: [
            /network error/i,
            /invalid action/i,
            /loading chunk/i,
            /No Firebase App/i,
            /Non-Error exception captured/i,
            /(Uncaught)?\s*\(in promise\):?\s*Timeout/i,
            /Timeout \(n\)/,
            /Firebase: Error \(auth\/network-request-failed\)/,
            /animate is not a function/,
            /invalid reception unification/,
            /Importing a module script failed/,
            /Failed to fetch dynamically imported module/,
            /error loading dynamically imported module/,
            /this\.komojuFields\.nativeElement.submit is not a function/,
            /undefined is not an object \(evaluating 'a\.L'\)/,
            /XhrError/,
            /'text\/html' is not a valid JavaScript MIME type/,
          ],
          integrations: [new xu.GlobalHandlers({ onerror: !1, onunhandledrejection: !1 })],
          beforeBreadcrumb: (u, n) => this.filterBreadcrumb(u, n),
        });
    }
    extractError(u) {
      if (u == null) return null;
      let n = u.ngOriginalError ? u.ngOriginalError : u;
      return typeof n == "string" || n instanceof Error
        ? n
        : n instanceof au
        ? n.status === 0 || n.status >= 400
          ? null
          : n.error instanceof Error
          ? n.error
          : n.error instanceof ErrorEvent
          ? n.error.message
          : typeof n.error == "string"
          ? `Server returned code ${n.status} with body "${n.error}"`
          : n.message
        : n.message
        ? (_u({ message: "Unknown error", data: n }), new Error(n.message))
        : (this.ngZone.runOutsideAngular(() => {
            vu((r) => {
              r.addBreadcrumb({ message: "Unknown error", data: n });
            }),
              it(u);
          }),
          null);
    }
    handleError(u) {
      let n = this.extractError(u);
      n !== null &&
        (this.config.production || console.error(n),
        this.ngZone.runOutsideAngular(() => {
          it(n);
        }));
    }
    filterBreadcrumb(u, n) {
      return (u.category === "xhr" &&
        u.type === "http" &&
        this.bannedBreadcrumbUrls.some((r) => (u.data?.url).includes(r))) ||
        (u.category === "xhr" && u.type === "http" && /^.*\.svg$/.test(u.data?.url))
        ? null
        : u;
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = H({ token: e, factory: e.ɵfac }));
  let i = e;
  return i;
})();
var Ju = { provide: $t, useClass: Zu };
function en(i) {
  return [
    {
      provide: Pu,
      useFactory: () => {
        let e = Mu();
        return i ? wu(e, i) : e;
      },
    },
  ];
}
function tn() {
  return [he([Tu.forRoot({ name: "__triad_db" })])];
}
function un(i, e, t) {
  return [he(Bu, Cu), yu({ basePath: "assets/icons" }), Xu(i, e), en(t), tn(), Ju, Au(Ou, { color: "basic-light" })];
}
var nn = (() => {
  let e = class e {
    constructor() {
      this.config = w(ge);
    }
    initialize() {
      this.logCurrentVersion();
    }
    logCurrentVersion() {
      let u = this.config.versions.triadVersion;
      console.log(
        `%cv${u}`,
        "color: #fff; background-color: brown; padding: 4px 8px; border-radius: 4px; font-size: 13px; font-weight: bold"
      );
      let n = document.querySelector("body");
      n && n.setAttribute("data-version", u);
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var rn = (() => {
  let e = class e {
    constructor() {
      (this.triadService = w(nn)), (this.ticketService = w(Wu));
    }
    ngOnInit() {
      this.triadService.initialize(), this.ticketService.initialize();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["app-root"]],
      standalone: !0,
      features: [V],
      decls: 1,
      vars: 0,
      template: function (n, r) {
        n & 1 && h(0, "router-outlet");
      },
      dependencies: [G, du],
    }));
  let i = e;
  return i;
})();
function ei(i) {
  let e = i;
  return 5;
}
var on = [
  "ja",
  [["\u5348\u524D", "\u5348\u5F8C"], void 0, void 0],
  void 0,
  [
    ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
    void 0,
    [
      "\u65E5\u66DC\u65E5",
      "\u6708\u66DC\u65E5",
      "\u706B\u66DC\u65E5",
      "\u6C34\u66DC\u65E5",
      "\u6728\u66DC\u65E5",
      "\u91D1\u66DC\u65E5",
      "\u571F\u66DC\u65E5",
    ],
    ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
  ],
  void 0,
  [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708",
    ],
    void 0,
  ],
  void 0,
  [["BC", "AD"], ["\u7D00\u5143\u524D", "\u897F\u66A6"], void 0],
  0,
  [6, 0],
  ["y/MM/dd", void 0, "y\u5E74M\u6708d\u65E5", "y\u5E74M\u6708d\u65E5EEEE"],
  ["H:mm", "H:mm:ss", "H:mm:ss z", "H\u6642mm\u5206ss\u79D2 zzzz"],
  ["{1} {0}", void 0, void 0, void 0],
  [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
  ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
  "JPY",
  "\uFFE5",
  "\u65E5\u672C\u5186",
  {
    BYN: [void 0, "\u0440."],
    CNY: ["\u5143", "\uFFE5"],
    JPY: ["\uFFE5"],
    PHP: [void 0, "\u20B1"],
    RON: [void 0, "\u30EC\u30A4"],
    XXX: [],
  },
  "ltr",
  ei,
];
function sn(i) {
  return new v(3e3, !1);
}
function ti() {
  return new v(3100, !1);
}
function ui() {
  return new v(3101, !1);
}
function ni(i) {
  return new v(3001, !1);
}
function ii(i) {
  return new v(3003, !1);
}
function ri(i) {
  return new v(3004, !1);
}
function oi(i, e) {
  return new v(3005, !1);
}
function si() {
  return new v(3006, !1);
}
function ai() {
  return new v(3007, !1);
}
function li(i, e) {
  return new v(3008, !1);
}
function ci(i) {
  return new v(3002, !1);
}
function mi(i, e, t, u, n) {
  return new v(3010, !1);
}
function di() {
  return new v(3011, !1);
}
function hi() {
  return new v(3012, !1);
}
function pi() {
  return new v(3200, !1);
}
function fi() {
  return new v(3202, !1);
}
function gi() {
  return new v(3013, !1);
}
function Ei(i) {
  return new v(3014, !1);
}
function Ci(i) {
  return new v(3015, !1);
}
function Fi(i) {
  return new v(3016, !1);
}
function Bi(i, e) {
  return new v(3404, !1);
}
function yi(i) {
  return new v(3502, !1);
}
function Ai(i) {
  return new v(3503, !1);
}
function Di() {
  return new v(3300, !1);
}
function _i(i) {
  return new v(3504, !1);
}
function vi(i) {
  return new v(3301, !1);
}
function Si(i, e) {
  return new v(3302, !1);
}
function xi(i) {
  return new v(3303, !1);
}
function bi(i, e) {
  return new v(3400, !1);
}
function wi(i) {
  return new v(3401, !1);
}
function Pi(i) {
  return new v(3402, !1);
}
function Mi(i, e) {
  return new v(3505, !1);
}
function ue(i) {
  switch (i.length) {
    case 0:
      return new Ce();
    case 1:
      return i[0];
    default:
      return new ot(i);
  }
}
function yn(i, e, t = new Map(), u = new Map()) {
  let n = [],
    r = [],
    s = -1,
    a = null;
  if (
    (e.forEach((m) => {
      let d = m.get("offset"),
        f = d == s,
        p = (f && a) || new Map();
      m.forEach((A, y) => {
        let E = y,
          B = A;
        if (y !== "offset")
          switch (((E = i.normalizePropertyName(E, n)), B)) {
            case ke:
              B = t.get(y);
              break;
            case Y:
              B = u.get(y);
              break;
            default:
              B = i.normalizeStyleValue(y, E, B, n);
              break;
          }
        p.set(E, B);
      }),
        f || r.push(p),
        (a = p),
        (s = d);
    }),
    n.length)
  )
    throw yi(n);
  return r;
}
function Pt(i, e, t, u) {
  switch (e) {
    case "start":
      i.onStart(() => u(t && at(t, "start", i)));
      break;
    case "done":
      i.onDone(() => u(t && at(t, "done", i)));
      break;
    case "destroy":
      i.onDestroy(() => u(t && at(t, "destroy", i)));
      break;
  }
}
function at(i, e, t) {
  let u = t.totalTime,
    n = !!t.disabled,
    r = Mt(i.element, i.triggerName, i.fromState, i.toState, e || i.phaseName, u ?? i.totalTime, n),
    s = i._data;
  return s != null && (r._data = s), r;
}
function Mt(i, e, t, u, n = "", r = 0, s) {
  return { element: i, triggerName: e, fromState: t, toState: u, phaseName: n, totalTime: r, disabled: !!s };
}
function L(i, e, t) {
  let u = i.get(e);
  return u || i.set(e, (u = t)), u;
}
function an(i) {
  let e = i.indexOf(":"),
    t = i.substring(1, e),
    u = i.slice(e + 1);
  return [t, u];
}
var Ti = typeof document > "u" ? null : document.documentElement;
function Tt(i) {
  let e = i.parentNode || i.host || null;
  return e === Ti ? null : e;
}
function Oi(i) {
  return i.substring(1, 6) == "ebkit";
}
var oe = null,
  ln = !1;
function ki(i) {
  oe || ((oe = Ni() || {}), (ln = oe.style ? "WebkitAppearance" in oe.style : !1));
  let e = !0;
  return (
    oe.style &&
      !Oi(i) &&
      ((e = i in oe.style), !e && ln && (e = "Webkit" + i.charAt(0).toUpperCase() + i.slice(1) in oe.style)),
    e
  );
}
function Ni() {
  return typeof document < "u" ? document.body : null;
}
function An(i, e) {
  for (; e; ) {
    if (e === i) return !0;
    e = Tt(e);
  }
  return !1;
}
function Dn(i, e, t) {
  if (t) return Array.from(i.querySelectorAll(e));
  let u = i.querySelector(e);
  return u ? [u] : [];
}
var Ot = (() => {
    let e = class e {
      validateStyleProperty(u) {
        return ki(u);
      }
      matchesElement(u, n) {
        return !1;
      }
      containsElement(u, n) {
        return An(u, n);
      }
      getParentElement(u) {
        return Tt(u);
      }
      query(u, n, r) {
        return Dn(u, n, r);
      }
      computeStyle(u, n, r) {
        return r || "";
      }
      animate(u, n, r, s, a, m = [], d) {
        return new Ce(r, s);
      }
    };
    (e.ɵfac = function (n) {
      return new (n || e)();
    }),
      (e.ɵprov = H({ token: e, factory: e.ɵfac }));
    let i = e;
    return i;
  })(),
  Rt = class Rt {};
Rt.NOOP = new Ot();
var le = Rt,
  ce = class {};
var qi = 1e3,
  _n = "{{",
  Ri = "}}",
  vn = "ng-enter",
  pt = "ng-leave",
  qe = "ng-trigger",
  Ke = ".ng-trigger",
  cn = "ng-animating",
  ft = ".ng-animating";
function ee(i) {
  if (typeof i == "number") return i;
  let e = i.match(/^(-?[\.\d]+)(m?s)/);
  return !e || e.length < 2 ? 0 : gt(parseFloat(e[1]), e[2]);
}
function gt(i, e) {
  switch (e) {
    case "s":
      return i * qi;
    default:
      return i;
  }
}
function je(i, e, t) {
  return i.hasOwnProperty("duration") ? i : Ii(i, e, t);
}
function Ii(i, e, t) {
  let u = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    n,
    r = 0,
    s = "";
  if (typeof i == "string") {
    let a = i.match(u);
    if (a === null) return e.push(sn(i)), { duration: 0, delay: 0, easing: "" };
    n = gt(parseFloat(a[1]), a[2]);
    let m = a[3];
    m != null && (r = gt(parseFloat(m), a[4]));
    let d = a[5];
    d && (s = d);
  } else n = i;
  if (!t) {
    let a = !1,
      m = e.length;
    n < 0 && (e.push(ti()), (a = !0)), r < 0 && (e.push(ui()), (a = !0)), a && e.splice(m, 0, sn(i));
  }
  return { duration: n, delay: r, easing: s };
}
function zi(i) {
  return i.length ? (i[0] instanceof Map ? i : i.map((e) => new Map(Object.entries(e)))) : [];
}
function Z(i, e, t) {
  e.forEach((u, n) => {
    let r = kt(n);
    t && !t.has(n) && t.set(n, i.style[r]), (i.style[r] = u);
  });
}
function ae(i, e) {
  e.forEach((t, u) => {
    let n = kt(u);
    i.style[n] = "";
  });
}
function Ae(i) {
  return Array.isArray(i) ? (i.length == 1 ? i[0] : Ru(i)) : i;
}
function Li(i, e, t) {
  let u = e.params || {},
    n = Sn(i);
  n.length &&
    n.forEach((r) => {
      u.hasOwnProperty(r) || t.push(ni(r));
    });
}
var Et = new RegExp(`${_n}\\s*(.+?)\\s*${Ri}`, "g");
function Sn(i) {
  let e = [];
  if (typeof i == "string") {
    let t;
    for (; (t = Et.exec(i)); ) e.push(t[1]);
    Et.lastIndex = 0;
  }
  return e;
}
function _e(i, e, t) {
  let u = `${i}`,
    n = u.replace(Et, (r, s) => {
      let a = e[s];
      return a == null && (t.push(ii(s)), (a = "")), a.toString();
    });
  return n == u ? i : n;
}
var Ki = /-+([a-z0-9])/g;
function kt(i) {
  return i.replace(Ki, (...e) => e[1].toUpperCase());
}
function ji(i, e) {
  return i === 0 || e === 0;
}
function Vi(i, e, t) {
  if (t.size && e.length) {
    let u = e[0],
      n = [];
    if (
      (t.forEach((r, s) => {
        u.has(s) || n.push(s), u.set(s, r);
      }),
      n.length)
    )
      for (let r = 1; r < e.length; r++) {
        let s = e[r];
        n.forEach((a) => s.set(a, Nt(i, a)));
      }
  }
  return e;
}
function z(i, e, t) {
  switch (e.type) {
    case D.Trigger:
      return i.visitTrigger(e, t);
    case D.State:
      return i.visitState(e, t);
    case D.Transition:
      return i.visitTransition(e, t);
    case D.Sequence:
      return i.visitSequence(e, t);
    case D.Group:
      return i.visitGroup(e, t);
    case D.Animate:
      return i.visitAnimate(e, t);
    case D.Keyframes:
      return i.visitKeyframes(e, t);
    case D.Style:
      return i.visitStyle(e, t);
    case D.Reference:
      return i.visitReference(e, t);
    case D.AnimateChild:
      return i.visitAnimateChild(e, t);
    case D.AnimateRef:
      return i.visitAnimateRef(e, t);
    case D.Query:
      return i.visitQuery(e, t);
    case D.Stagger:
      return i.visitStagger(e, t);
    default:
      throw ri(e.type);
  }
}
function Nt(i, e) {
  return window.getComputedStyle(i)[e];
}
var $i = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Ve = class extends ce {
    normalizePropertyName(e, t) {
      return kt(e);
    }
    normalizeStyleValue(e, t, u, n) {
      let r = "",
        s = u.toString().trim();
      if ($i.has(t) && u !== 0 && u !== "0")
        if (typeof u == "number") r = "px";
        else {
          let a = u.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && n.push(oi(e, u));
        }
      return s + r;
    }
  };
var $e = "*";
function Qi(i, e) {
  let t = [];
  return typeof i == "string" ? i.split(/\s*,\s*/).forEach((u) => Ui(u, t, e)) : t.push(i), t;
}
function Ui(i, e, t) {
  if (i[0] == ":") {
    let m = Wi(i, t);
    if (typeof m == "function") {
      e.push(m);
      return;
    }
    i = m;
  }
  let u = i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (u == null || u.length < 4) return t.push(Ci(i)), e;
  let n = u[1],
    r = u[2],
    s = u[3];
  e.push(mn(n, s));
  let a = n == $e && s == $e;
  r[0] == "<" && !a && e.push(mn(s, n));
}
function Wi(i, e) {
  switch (i) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (t, u) => parseFloat(u) > parseFloat(t);
    case ":decrement":
      return (t, u) => parseFloat(u) < parseFloat(t);
    default:
      return e.push(Fi(i)), "* => *";
  }
}
var Re = new Set(["true", "1"]),
  Ie = new Set(["false", "0"]);
function mn(i, e) {
  let t = Re.has(i) || Ie.has(i),
    u = Re.has(e) || Ie.has(e);
  return (n, r) => {
    let s = i == $e || i == n,
      a = e == $e || e == r;
    return (
      !s && t && typeof n == "boolean" && (s = n ? Re.has(i) : Ie.has(i)),
      !a && u && typeof r == "boolean" && (a = r ? Re.has(e) : Ie.has(e)),
      s && a
    );
  };
}
var xn = ":self",
  Hi = new RegExp(`s*${xn}s*,?`, "g");
function bn(i, e, t, u) {
  return new Ct(i).build(e, t, u);
}
var dn = "",
  Ct = class {
    constructor(e) {
      this._driver = e;
    }
    build(e, t, u) {
      let n = new Ft(t);
      return this._resetContextStyleTimingState(n), z(this, Ae(e), n);
    }
    _resetContextStyleTimingState(e) {
      (e.currentQuerySelector = dn),
        (e.collectedStyles = new Map()),
        e.collectedStyles.set(dn, new Map()),
        (e.currentTime = 0);
    }
    visitTrigger(e, t) {
      let u = (t.queryCount = 0),
        n = (t.depCount = 0),
        r = [],
        s = [];
      return (
        e.name.charAt(0) == "@" && t.errors.push(si()),
        e.definitions.forEach((a) => {
          if ((this._resetContextStyleTimingState(t), a.type == D.State)) {
            let m = a,
              d = m.name;
            d
              .toString()
              .split(/\s*,\s*/)
              .forEach((f) => {
                (m.name = f), r.push(this.visitState(m, t));
              }),
              (m.name = d);
          } else if (a.type == D.Transition) {
            let m = this.visitTransition(a, t);
            (u += m.queryCount), (n += m.depCount), s.push(m);
          } else t.errors.push(ai());
        }),
        { type: D.Trigger, name: e.name, states: r, transitions: s, queryCount: u, depCount: n, options: null }
      );
    }
    visitState(e, t) {
      let u = this.visitStyle(e.styles, t),
        n = (e.options && e.options.params) || null;
      if (u.containsDynamicStyles) {
        let r = new Set(),
          s = n || {};
        u.styles.forEach((a) => {
          a instanceof Map &&
            a.forEach((m) => {
              Sn(m).forEach((d) => {
                s.hasOwnProperty(d) || r.add(d);
              });
            });
        }),
          r.size && t.errors.push(li(e.name, [...r.values()]));
      }
      return { type: D.State, name: e.name, style: u, options: n ? { params: n } : null };
    }
    visitTransition(e, t) {
      (t.queryCount = 0), (t.depCount = 0);
      let u = z(this, Ae(e.animation), t),
        n = Qi(e.expr, t.errors);
      return {
        type: D.Transition,
        matchers: n,
        animation: u,
        queryCount: t.queryCount,
        depCount: t.depCount,
        options: se(e.options),
      };
    }
    visitSequence(e, t) {
      return { type: D.Sequence, steps: e.steps.map((u) => z(this, u, t)), options: se(e.options) };
    }
    visitGroup(e, t) {
      let u = t.currentTime,
        n = 0,
        r = e.steps.map((s) => {
          t.currentTime = u;
          let a = z(this, s, t);
          return (n = Math.max(n, t.currentTime)), a;
        });
      return (t.currentTime = n), { type: D.Group, steps: r, options: se(e.options) };
    }
    visitAnimate(e, t) {
      let u = Zi(e.timings, t.errors);
      t.currentAnimateTimings = u;
      let n,
        r = e.styles ? e.styles : rt({});
      if (r.type == D.Keyframes) n = this.visitKeyframes(r, t);
      else {
        let s = e.styles,
          a = !1;
        if (!s) {
          a = !0;
          let d = {};
          u.easing && (d.easing = u.easing), (s = rt(d));
        }
        t.currentTime += u.duration + u.delay;
        let m = this.visitStyle(s, t);
        (m.isEmptyStep = a), (n = m);
      }
      return (t.currentAnimateTimings = null), { type: D.Animate, timings: u, style: n, options: null };
    }
    visitStyle(e, t) {
      let u = this._makeStyleAst(e, t);
      return this._validateStyleAst(u, t), u;
    }
    _makeStyleAst(e, t) {
      let u = [],
        n = Array.isArray(e.styles) ? e.styles : [e.styles];
      for (let a of n)
        typeof a == "string" ? (a === Y ? u.push(a) : t.errors.push(ci(a))) : u.push(new Map(Object.entries(a)));
      let r = !1,
        s = null;
      return (
        u.forEach((a) => {
          if (a instanceof Map && (a.has("easing") && ((s = a.get("easing")), a.delete("easing")), !r)) {
            for (let m of a.values())
              if (m.toString().indexOf(_n) >= 0) {
                r = !0;
                break;
              }
          }
        }),
        { type: D.Style, styles: u, easing: s, offset: e.offset, containsDynamicStyles: r, options: null }
      );
    }
    _validateStyleAst(e, t) {
      let u = t.currentAnimateTimings,
        n = t.currentTime,
        r = t.currentTime;
      u && r > 0 && (r -= u.duration + u.delay),
        e.styles.forEach((s) => {
          typeof s != "string" &&
            s.forEach((a, m) => {
              let d = t.collectedStyles.get(t.currentQuerySelector),
                f = d.get(m),
                p = !0;
              f &&
                (r != n &&
                  r >= f.startTime &&
                  n <= f.endTime &&
                  (t.errors.push(mi(m, f.startTime, f.endTime, r, n)), (p = !1)),
                (r = f.startTime)),
                p && d.set(m, { startTime: r, endTime: n }),
                t.options && Li(a, t.options, t.errors);
            });
        });
    }
    visitKeyframes(e, t) {
      let u = { type: D.Keyframes, styles: [], options: null };
      if (!t.currentAnimateTimings) return t.errors.push(di()), u;
      let n = 1,
        r = 0,
        s = [],
        a = !1,
        m = !1,
        d = 0,
        f = e.steps.map((P) => {
          let M = this._makeStyleAst(P, t),
            N = M.offset != null ? M.offset : Xi(M.styles),
            O = 0;
          return (
            N != null && (r++, (O = M.offset = N)), (m = m || O < 0 || O > 1), (a = a || O < d), (d = O), s.push(O), M
          );
        });
      m && t.errors.push(hi()), a && t.errors.push(pi());
      let p = e.steps.length,
        A = 0;
      r > 0 && r < p ? t.errors.push(fi()) : r == 0 && (A = n / (p - 1));
      let y = p - 1,
        E = t.currentTime,
        B = t.currentAnimateTimings,
        S = B.duration;
      return (
        f.forEach((P, M) => {
          let N = A > 0 ? (M == y ? 1 : A * M) : s[M],
            O = N * S;
          (t.currentTime = E + B.delay + O),
            (B.duration = O),
            this._validateStyleAst(P, t),
            (P.offset = N),
            u.styles.push(P);
        }),
        u
      );
    }
    visitReference(e, t) {
      return { type: D.Reference, animation: z(this, Ae(e.animation), t), options: se(e.options) };
    }
    visitAnimateChild(e, t) {
      return t.depCount++, { type: D.AnimateChild, options: se(e.options) };
    }
    visitAnimateRef(e, t) {
      return { type: D.AnimateRef, animation: this.visitReference(e.animation, t), options: se(e.options) };
    }
    visitQuery(e, t) {
      let u = t.currentQuerySelector,
        n = e.options || {};
      t.queryCount++, (t.currentQuery = e);
      let [r, s] = Gi(e.selector);
      (t.currentQuerySelector = u.length ? u + " " + r : r), L(t.collectedStyles, t.currentQuerySelector, new Map());
      let a = z(this, Ae(e.animation), t);
      return (
        (t.currentQuery = null),
        (t.currentQuerySelector = u),
        {
          type: D.Query,
          selector: r,
          limit: n.limit || 0,
          optional: !!n.optional,
          includeSelf: s,
          animation: a,
          originalSelector: e.selector,
          options: se(e.options),
        }
      );
    }
    visitStagger(e, t) {
      t.currentQuery || t.errors.push(gi());
      let u = e.timings === "full" ? { duration: 0, delay: 0, easing: "full" } : je(e.timings, t.errors, !0);
      return { type: D.Stagger, animation: z(this, Ae(e.animation), t), timings: u, options: null };
    }
  };
function Gi(i) {
  let e = !!i.split(/\s*,\s*/).find((t) => t == xn);
  return (
    e && (i = i.replace(Hi, "")),
    (i = i
      .replace(/@\*/g, Ke)
      .replace(/@\w+/g, (t) => Ke + "-" + t.slice(1))
      .replace(/:animating/g, ft)),
    [i, e]
  );
}
function Yi(i) {
  return i ? we({}, i) : null;
}
var Ft = class {
  constructor(e) {
    (this.errors = e),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function Xi(i) {
  if (typeof i == "string") return null;
  let e = null;
  if (Array.isArray(i))
    i.forEach((t) => {
      if (t instanceof Map && t.has("offset")) {
        let u = t;
        (e = parseFloat(u.get("offset"))), u.delete("offset");
      }
    });
  else if (i instanceof Map && i.has("offset")) {
    let t = i;
    (e = parseFloat(t.get("offset"))), t.delete("offset");
  }
  return e;
}
function Zi(i, e) {
  if (i.hasOwnProperty("duration")) return i;
  if (typeof i == "number") {
    let r = je(i, e).duration;
    return lt(r, 0, "");
  }
  let t = i;
  if (t.split(/\s+/).some((r) => r.charAt(0) == "{" && r.charAt(1) == "{")) {
    let r = lt(0, 0, "");
    return (r.dynamic = !0), (r.strValue = t), r;
  }
  let n = je(t, e);
  return lt(n.duration, n.delay, n.easing);
}
function se(i) {
  return i ? ((i = we({}, i)), i.params && (i.params = Yi(i.params))) : (i = {}), i;
}
function lt(i, e, t) {
  return { duration: i, delay: e, easing: t };
}
function qt(i, e, t, u, n, r, s = null, a = !1) {
  return {
    type: 1,
    element: i,
    keyframes: e,
    preStyleProps: t,
    postStyleProps: u,
    duration: n,
    delay: r,
    totalTime: n + r,
    easing: s,
    subTimeline: a,
  };
}
var ve = class {
    constructor() {
      this._map = new Map();
    }
    get(e) {
      return this._map.get(e) || [];
    }
    append(e, t) {
      let u = this._map.get(e);
      u || this._map.set(e, (u = [])), u.push(...t);
    }
    has(e) {
      return this._map.has(e);
    }
    clear() {
      this._map.clear();
    }
  },
  Ji = 1,
  e0 = ":enter",
  t0 = new RegExp(e0, "g"),
  u0 = ":leave",
  n0 = new RegExp(u0, "g");
function wn(i, e, t, u, n, r = new Map(), s = new Map(), a, m, d = []) {
  return new Bt().buildKeyframes(i, e, t, u, n, r, s, a, m, d);
}
var Bt = class {
    buildKeyframes(e, t, u, n, r, s, a, m, d, f = []) {
      d = d || new ve();
      let p = new yt(e, t, d, n, r, f, []);
      p.options = m;
      let A = m.delay ? ee(m.delay) : 0;
      p.currentTimeline.delayNextStep(A), p.currentTimeline.setStyles([s], null, p.errors, m), z(this, u, p);
      let y = p.timelines.filter((E) => E.containsAnimation());
      if (y.length && a.size) {
        let E;
        for (let B = y.length - 1; B >= 0; B--) {
          let S = y[B];
          if (S.element === t) {
            E = S;
            break;
          }
        }
        E && !E.allowOnlyTimelineStyles() && E.setStyles([a], null, p.errors, m);
      }
      return y.length ? y.map((E) => E.buildKeyframes()) : [qt(t, [], [], [], 0, A, "", !1)];
    }
    visitTrigger(e, t) {}
    visitState(e, t) {}
    visitTransition(e, t) {}
    visitAnimateChild(e, t) {
      let u = t.subInstructions.get(t.element);
      if (u) {
        let n = t.createSubContext(e.options),
          r = t.currentTimeline.currentTime,
          s = this._visitSubInstructions(u, n, n.options);
        r != s && t.transformIntoNewTimeline(s);
      }
      t.previousNode = e;
    }
    visitAnimateRef(e, t) {
      let u = t.createSubContext(e.options);
      u.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([e.options, e.animation.options], t, u),
        this.visitReference(e.animation, u),
        t.transformIntoNewTimeline(u.currentTimeline.currentTime),
        (t.previousNode = e);
    }
    _applyAnimationRefDelays(e, t, u) {
      for (let n of e) {
        let r = n?.delay;
        if (r) {
          let s = typeof r == "number" ? r : ee(_e(r, n?.params ?? {}, t.errors));
          u.delayNextStep(s);
        }
      }
    }
    _visitSubInstructions(e, t, u) {
      let r = t.currentTimeline.currentTime,
        s = u.duration != null ? ee(u.duration) : null,
        a = u.delay != null ? ee(u.delay) : null;
      return (
        s !== 0 &&
          e.forEach((m) => {
            let d = t.appendInstructionToTimeline(m, s, a);
            r = Math.max(r, d.duration + d.delay);
          }),
        r
      );
    }
    visitReference(e, t) {
      t.updateOptions(e.options, !0), z(this, e.animation, t), (t.previousNode = e);
    }
    visitSequence(e, t) {
      let u = t.subContextCount,
        n = t,
        r = e.options;
      if (r && (r.params || r.delay) && ((n = t.createSubContext(r)), n.transformIntoNewTimeline(), r.delay != null)) {
        n.previousNode.type == D.Style && (n.currentTimeline.snapshotCurrentStyles(), (n.previousNode = Qe));
        let s = ee(r.delay);
        n.delayNextStep(s);
      }
      e.steps.length &&
        (e.steps.forEach((s) => z(this, s, n)),
        n.currentTimeline.applyStylesToKeyframe(),
        n.subContextCount > u && n.transformIntoNewTimeline()),
        (t.previousNode = e);
    }
    visitGroup(e, t) {
      let u = [],
        n = t.currentTimeline.currentTime,
        r = e.options && e.options.delay ? ee(e.options.delay) : 0;
      e.steps.forEach((s) => {
        let a = t.createSubContext(e.options);
        r && a.delayNextStep(r),
          z(this, s, a),
          (n = Math.max(n, a.currentTimeline.currentTime)),
          u.push(a.currentTimeline);
      }),
        u.forEach((s) => t.currentTimeline.mergeTimelineCollectedStyles(s)),
        t.transformIntoNewTimeline(n),
        (t.previousNode = e);
    }
    _visitTiming(e, t) {
      if (e.dynamic) {
        let u = e.strValue,
          n = t.params ? _e(u, t.params, t.errors) : u;
        return je(n, t.errors);
      } else return { duration: e.duration, delay: e.delay, easing: e.easing };
    }
    visitAnimate(e, t) {
      let u = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
        n = t.currentTimeline;
      u.delay && (t.incrementTime(u.delay), n.snapshotCurrentStyles());
      let r = e.style;
      r.type == D.Keyframes
        ? this.visitKeyframes(r, t)
        : (t.incrementTime(u.duration), this.visitStyle(r, t), n.applyStylesToKeyframe()),
        (t.currentAnimateTimings = null),
        (t.previousNode = e);
    }
    visitStyle(e, t) {
      let u = t.currentTimeline,
        n = t.currentAnimateTimings;
      !n && u.hasCurrentStyleProperties() && u.forwardFrame();
      let r = (n && n.easing) || e.easing;
      e.isEmptyStep ? u.applyEmptyStep(r) : u.setStyles(e.styles, r, t.errors, t.options), (t.previousNode = e);
    }
    visitKeyframes(e, t) {
      let u = t.currentAnimateTimings,
        n = t.currentTimeline.duration,
        r = u.duration,
        a = t.createSubContext().currentTimeline;
      (a.easing = u.easing),
        e.styles.forEach((m) => {
          let d = m.offset || 0;
          a.forwardTime(d * r), a.setStyles(m.styles, m.easing, t.errors, t.options), a.applyStylesToKeyframe();
        }),
        t.currentTimeline.mergeTimelineCollectedStyles(a),
        t.transformIntoNewTimeline(n + r),
        (t.previousNode = e);
    }
    visitQuery(e, t) {
      let u = t.currentTimeline.currentTime,
        n = e.options || {},
        r = n.delay ? ee(n.delay) : 0;
      r &&
        (t.previousNode.type === D.Style || (u == 0 && t.currentTimeline.hasCurrentStyleProperties())) &&
        (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = Qe));
      let s = u,
        a = t.invokeQuery(e.selector, e.originalSelector, e.limit, e.includeSelf, !!n.optional, t.errors);
      t.currentQueryTotal = a.length;
      let m = null;
      a.forEach((d, f) => {
        t.currentQueryIndex = f;
        let p = t.createSubContext(e.options, d);
        r && p.delayNextStep(r),
          d === t.element && (m = p.currentTimeline),
          z(this, e.animation, p),
          p.currentTimeline.applyStylesToKeyframe();
        let A = p.currentTimeline.currentTime;
        s = Math.max(s, A);
      }),
        (t.currentQueryIndex = 0),
        (t.currentQueryTotal = 0),
        t.transformIntoNewTimeline(s),
        m && (t.currentTimeline.mergeTimelineCollectedStyles(m), t.currentTimeline.snapshotCurrentStyles()),
        (t.previousNode = e);
    }
    visitStagger(e, t) {
      let u = t.parentContext,
        n = t.currentTimeline,
        r = e.timings,
        s = Math.abs(r.duration),
        a = s * (t.currentQueryTotal - 1),
        m = s * t.currentQueryIndex;
      switch (r.duration < 0 ? "reverse" : r.easing) {
        case "reverse":
          m = a - m;
          break;
        case "full":
          m = u.currentStaggerTime;
          break;
      }
      let f = t.currentTimeline;
      m && f.delayNextStep(m);
      let p = f.currentTime;
      z(this, e.animation, t),
        (t.previousNode = e),
        (u.currentStaggerTime = n.currentTime - p + (n.startTime - u.currentTimeline.startTime));
    }
  },
  Qe = {},
  yt = class i {
    constructor(e, t, u, n, r, s, a, m) {
      (this._driver = e),
        (this.element = t),
        (this.subInstructions = u),
        (this._enterClassName = n),
        (this._leaveClassName = r),
        (this.errors = s),
        (this.timelines = a),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = Qe),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = m || new Ue(this._driver, t, 0)),
        a.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(e, t) {
      if (!e) return;
      let u = e,
        n = this.options;
      u.duration != null && (n.duration = ee(u.duration)), u.delay != null && (n.delay = ee(u.delay));
      let r = u.params;
      if (r) {
        let s = n.params;
        s || (s = this.options.params = {}),
          Object.keys(r).forEach((a) => {
            (!t || !s.hasOwnProperty(a)) && (s[a] = _e(r[a], s, this.errors));
          });
      }
    }
    _copyOptions() {
      let e = {};
      if (this.options) {
        let t = this.options.params;
        if (t) {
          let u = (e.params = {});
          Object.keys(t).forEach((n) => {
            u[n] = t[n];
          });
        }
      }
      return e;
    }
    createSubContext(e = null, t, u) {
      let n = t || this.element,
        r = new i(
          this._driver,
          n,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(n, u || 0)
        );
      return (
        (r.previousNode = this.previousNode),
        (r.currentAnimateTimings = this.currentAnimateTimings),
        (r.options = this._copyOptions()),
        r.updateOptions(e),
        (r.currentQueryIndex = this.currentQueryIndex),
        (r.currentQueryTotal = this.currentQueryTotal),
        (r.parentContext = this),
        this.subContextCount++,
        r
      );
    }
    transformIntoNewTimeline(e) {
      return (
        (this.previousNode = Qe),
        (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(e, t, u) {
      let n = { duration: t ?? e.duration, delay: this.currentTimeline.currentTime + (u ?? 0) + e.delay, easing: "" },
        r = new At(
          this._driver,
          e.element,
          e.keyframes,
          e.preStyleProps,
          e.postStyleProps,
          n,
          e.stretchStartingKeyframe
        );
      return this.timelines.push(r), n;
    }
    incrementTime(e) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
    }
    delayNextStep(e) {
      e > 0 && this.currentTimeline.delayNextStep(e);
    }
    invokeQuery(e, t, u, n, r, s) {
      let a = [];
      if ((n && a.push(this.element), e.length > 0)) {
        (e = e.replace(t0, "." + this._enterClassName)), (e = e.replace(n0, "." + this._leaveClassName));
        let m = u != 1,
          d = this._driver.query(this.element, e, m);
        u !== 0 && (d = u < 0 ? d.slice(d.length + u, d.length) : d.slice(0, u)), a.push(...d);
      }
      return !r && a.length == 0 && s.push(Ei(t)), a;
    }
  },
  Ue = class i {
    constructor(e, t, u, n) {
      (this._driver = e),
        (this.element = t),
        (this.startTime = u),
        (this._elementTimelineStylesLookup = n),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(t)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(t, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(e) {
      let t = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || t
        ? (this.forwardTime(this.currentTime + e), t && this.snapshotCurrentStyles())
        : (this.startTime += e);
    }
    fork(e, t) {
      return (
        this.applyStylesToKeyframe(), new i(this._driver, e, t || this.currentTime, this._elementTimelineStylesLookup)
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()), this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += Ji), this._loadKeyframe();
    }
    forwardTime(e) {
      this.applyStylesToKeyframe(), (this.duration = e), this._loadKeyframe();
    }
    _updateStyle(e, t) {
      this._localTimelineStyles.set(e, t),
        this._globalTimelineStyles.set(e, t),
        this._styleSummary.set(e, { time: this.currentTime, value: t });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(e) {
      e && this._previousKeyframe.set("easing", e);
      for (let [t, u] of this._globalTimelineStyles) this._backFill.set(t, u || Y), this._currentKeyframe.set(t, Y);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(e, t, u, n) {
      t && this._previousKeyframe.set("easing", t);
      let r = (n && n.params) || {},
        s = i0(e, this._globalTimelineStyles);
      for (let [a, m] of s) {
        let d = _e(m, r, u);
        this._pendingStyles.set(a, d),
          this._localTimelineStyles.has(a) || this._backFill.set(a, this._globalTimelineStyles.get(a) ?? Y),
          this._updateStyle(a, d);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((e, t) => {
          this._currentKeyframe.set(t, e);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((e, t) => {
          this._currentKeyframe.has(t) || this._currentKeyframe.set(t, e);
        }));
    }
    snapshotCurrentStyles() {
      for (let [e, t] of this._localTimelineStyles) this._pendingStyles.set(e, t), this._updateStyle(e, t);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let e = [];
      for (let t in this._currentKeyframe) e.push(t);
      return e;
    }
    mergeTimelineCollectedStyles(e) {
      e._styleSummary.forEach((t, u) => {
        let n = this._styleSummary.get(u);
        (!n || t.time > n.time) && this._updateStyle(u, t.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let e = new Set(),
        t = new Set(),
        u = this._keyframes.size === 1 && this.duration === 0,
        n = [];
      this._keyframes.forEach((a, m) => {
        let d = new Map([...this._backFill, ...a]);
        d.forEach((f, p) => {
          f === ke ? e.add(p) : f === Y && t.add(p);
        }),
          u || d.set("offset", m / this.duration),
          n.push(d);
      });
      let r = [...e.values()],
        s = [...t.values()];
      if (u) {
        let a = n[0],
          m = new Map(a);
        a.set("offset", 0), m.set("offset", 1), (n = [a, m]);
      }
      return qt(this.element, n, r, s, this.duration, this.startTime, this.easing, !1);
    }
  },
  At = class extends Ue {
    constructor(e, t, u, n, r, s, a = !1) {
      super(e, t, s.delay),
        (this.keyframes = u),
        (this.preStyleProps = n),
        (this.postStyleProps = r),
        (this._stretchStartingKeyframe = a),
        (this.timings = { duration: s.duration, delay: s.delay, easing: s.easing });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let e = this.keyframes,
        { delay: t, duration: u, easing: n } = this.timings;
      if (this._stretchStartingKeyframe && t) {
        let r = [],
          s = u + t,
          a = t / s,
          m = new Map(e[0]);
        m.set("offset", 0), r.push(m);
        let d = new Map(e[0]);
        d.set("offset", hn(a)), r.push(d);
        let f = e.length - 1;
        for (let p = 1; p <= f; p++) {
          let A = new Map(e[p]),
            y = A.get("offset"),
            E = t + y * u;
          A.set("offset", hn(E / s)), r.push(A);
        }
        (u = s), (t = 0), (n = ""), (e = r);
      }
      return qt(this.element, e, this.preStyleProps, this.postStyleProps, u, t, n, !0);
    }
  };
function hn(i, e = 3) {
  let t = Math.pow(10, e - 1);
  return Math.round(i * t) / t;
}
function i0(i, e) {
  let t = new Map(),
    u;
  return (
    i.forEach((n) => {
      if (n === "*") {
        u ??= e.keys();
        for (let r of u) t.set(r, Y);
      } else for (let [r, s] of n) t.set(r, s);
    }),
    t
  );
}
function pn(i, e, t, u, n, r, s, a, m, d, f, p, A) {
  return {
    type: 0,
    element: i,
    triggerName: e,
    isRemovalTransition: n,
    fromState: t,
    fromStyles: r,
    toState: u,
    toStyles: s,
    timelines: a,
    queriedElements: m,
    preStyleProps: d,
    postStyleProps: f,
    totalTime: p,
    errors: A,
  };
}
var ct = {},
  We = class {
    constructor(e, t, u) {
      (this._triggerName = e), (this.ast = t), (this._stateStyles = u);
    }
    match(e, t, u, n) {
      return r0(this.ast.matchers, e, t, u, n);
    }
    buildStyles(e, t, u) {
      let n = this._stateStyles.get("*");
      return e !== void 0 && (n = this._stateStyles.get(e?.toString()) || n), n ? n.buildStyles(t, u) : new Map();
    }
    build(e, t, u, n, r, s, a, m, d, f) {
      let p = [],
        A = (this.ast.options && this.ast.options.params) || ct,
        y = (a && a.params) || ct,
        E = this.buildStyles(u, y, p),
        B = (m && m.params) || ct,
        S = this.buildStyles(n, B, p),
        P = new Set(),
        M = new Map(),
        N = new Map(),
        O = n === "void",
        me = { params: Pn(B, A), delay: this.ast.options?.delay },
        U = f ? [] : wn(e, t, this.ast.animation, r, s, E, S, me, d, p),
        q = 0;
      return (
        U.forEach((R) => {
          q = Math.max(R.duration + R.delay, q);
        }),
        p.length
          ? pn(t, this._triggerName, u, n, O, E, S, [], [], M, N, q, p)
          : (U.forEach((R) => {
              let ne = R.element,
                de = L(M, ne, new Set());
              R.preStyleProps.forEach((ie) => de.add(ie));
              let It = L(N, ne, new Set());
              R.postStyleProps.forEach((ie) => It.add(ie)), ne !== t && P.add(ne);
            }),
            pn(t, this._triggerName, u, n, O, E, S, U, [...P.values()], M, N, q))
      );
    }
  };
function r0(i, e, t, u, n) {
  return i.some((r) => r(e, t, u, n));
}
function Pn(i, e) {
  let t = we({}, e);
  return (
    Object.entries(i).forEach(([u, n]) => {
      n != null && (t[u] = n);
    }),
    t
  );
}
var Dt = class {
  constructor(e, t, u) {
    (this.styles = e), (this.defaultParams = t), (this.normalizer = u);
  }
  buildStyles(e, t) {
    let u = new Map(),
      n = Pn(e, this.defaultParams);
    return (
      this.styles.styles.forEach((r) => {
        typeof r != "string" &&
          r.forEach((s, a) => {
            s && (s = _e(s, n, t));
            let m = this.normalizer.normalizePropertyName(a, t);
            (s = this.normalizer.normalizeStyleValue(a, m, s, t)), u.set(a, s);
          });
      }),
      u
    );
  }
};
function o0(i, e, t) {
  return new _t(i, e, t);
}
var _t = class {
  constructor(e, t, u) {
    (this.name = e),
      (this.ast = t),
      (this._normalizer = u),
      (this.transitionFactories = []),
      (this.states = new Map()),
      t.states.forEach((n) => {
        let r = (n.options && n.options.params) || {};
        this.states.set(n.name, new Dt(n.style, r, u));
      }),
      fn(this.states, "true", "1"),
      fn(this.states, "false", "0"),
      t.transitions.forEach((n) => {
        this.transitionFactories.push(new We(e, n, this.states));
      }),
      (this.fallbackTransition = s0(e, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(e, t, u, n) {
    return this.transitionFactories.find((s) => s.match(e, t, u, n)) || null;
  }
  matchStyles(e, t, u) {
    return this.fallbackTransition.buildStyles(e, t, u);
  }
};
function s0(i, e, t) {
  let u = [(s, a) => !0],
    n = { type: D.Sequence, steps: [], options: null },
    r = { type: D.Transition, animation: n, matchers: u, options: null, queryCount: 0, depCount: 0 };
  return new We(i, r, e);
}
function fn(i, e, t) {
  i.has(e) ? i.has(t) || i.set(t, i.get(e)) : i.has(t) && i.set(e, i.get(t));
}
var a0 = new ve(),
  vt = class {
    constructor(e, t, u) {
      (this.bodyNode = e),
        (this._driver = t),
        (this._normalizer = u),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(e, t) {
      let u = [],
        n = [],
        r = bn(this._driver, t, u, n);
      if (u.length) throw Ai(u);
      n.length && void 0, this._animations.set(e, r);
    }
    _buildPlayer(e, t, u) {
      let n = e.element,
        r = yn(this._normalizer, e.keyframes, t, u);
      return this._driver.animate(n, r, e.duration, e.delay, e.easing, [], !0);
    }
    create(e, t, u = {}) {
      let n = [],
        r = this._animations.get(e),
        s,
        a = new Map();
      if (
        (r
          ? ((s = wn(this._driver, t, r, vn, pt, new Map(), new Map(), u, a0, n)),
            s.forEach((f) => {
              let p = L(a, f.element, new Map());
              f.postStyleProps.forEach((A) => p.set(A, null));
            }))
          : (n.push(Di()), (s = [])),
        n.length)
      )
        throw _i(n);
      a.forEach((f, p) => {
        f.forEach((A, y) => {
          f.set(y, this._driver.computeStyle(p, y, Y));
        });
      });
      let m = s.map((f) => {
          let p = a.get(f.element);
          return this._buildPlayer(f, new Map(), p);
        }),
        d = ue(m);
      return this._playersById.set(e, d), d.onDestroy(() => this.destroy(e)), this.players.push(d), d;
    }
    destroy(e) {
      let t = this._getPlayer(e);
      t.destroy(), this._playersById.delete(e);
      let u = this.players.indexOf(t);
      u >= 0 && this.players.splice(u, 1);
    }
    _getPlayer(e) {
      let t = this._playersById.get(e);
      if (!t) throw vi(e);
      return t;
    }
    listen(e, t, u, n) {
      let r = Mt(t, "", "", "");
      return Pt(this._getPlayer(e), u, r, n), () => {};
    }
    command(e, t, u, n) {
      if (u == "register") {
        this.register(e, n[0]);
        return;
      }
      if (u == "create") {
        let s = n[0] || {};
        this.create(e, t, s);
        return;
      }
      let r = this._getPlayer(e);
      switch (u) {
        case "play":
          r.play();
          break;
        case "pause":
          r.pause();
          break;
        case "reset":
          r.reset();
          break;
        case "restart":
          r.restart();
          break;
        case "finish":
          r.finish();
          break;
        case "init":
          r.init();
          break;
        case "setPosition":
          r.setPosition(parseFloat(n[0]));
          break;
        case "destroy":
          this.destroy(e);
          break;
      }
    }
  },
  gn = "ng-animate-queued",
  l0 = ".ng-animate-queued",
  mt = "ng-animate-disabled",
  c0 = ".ng-animate-disabled",
  m0 = "ng-star-inserted",
  d0 = ".ng-star-inserted",
  h0 = [],
  Mn = { namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1 },
  p0 = { namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0 },
  Q = "__ng_removed",
  Se = class {
    get params() {
      return this.options.params;
    }
    constructor(e, t = "") {
      this.namespaceId = t;
      let u = e && e.hasOwnProperty("value"),
        n = u ? e.value : e;
      if (((this.value = g0(n)), u)) {
        let r = e,
          { value: s } = r,
          a = jt(r, ["value"]);
        this.options = a;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(e) {
      let t = e.params;
      if (t) {
        let u = this.options.params;
        Object.keys(t).forEach((n) => {
          u[n] == null && (u[n] = t[n]);
        });
      }
    }
  },
  De = "void",
  dt = new Se(De),
  St = class {
    constructor(e, t, u) {
      (this.id = e),
        (this.hostElement = t),
        (this._engine = u),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + e),
        $(t, this._hostClassName);
    }
    listen(e, t, u, n) {
      if (!this._triggers.has(t)) throw Si(u, t);
      if (u == null || u.length == 0) throw xi(t);
      if (!E0(u)) throw bi(u, t);
      let r = L(this._elementListeners, e, []),
        s = { name: t, phase: u, callback: n };
      r.push(s);
      let a = L(this._engine.statesByElement, e, new Map());
      return (
        a.has(t) || ($(e, qe), $(e, qe + "-" + t), a.set(t, dt)),
        () => {
          this._engine.afterFlush(() => {
            let m = r.indexOf(s);
            m >= 0 && r.splice(m, 1), this._triggers.has(t) || a.delete(t);
          });
        }
      );
    }
    register(e, t) {
      return this._triggers.has(e) ? !1 : (this._triggers.set(e, t), !0);
    }
    _getTrigger(e) {
      let t = this._triggers.get(e);
      if (!t) throw wi(e);
      return t;
    }
    trigger(e, t, u, n = !0) {
      let r = this._getTrigger(t),
        s = new xe(this.id, t, e),
        a = this._engine.statesByElement.get(e);
      a || ($(e, qe), $(e, qe + "-" + t), this._engine.statesByElement.set(e, (a = new Map())));
      let m = a.get(t),
        d = new Se(u, this.id);
      if (
        (!(u && u.hasOwnProperty("value")) && m && d.absorbOptions(m.options),
        a.set(t, d),
        m || (m = dt),
        !(d.value === De) && m.value === d.value)
      ) {
        if (!B0(m.params, d.params)) {
          let B = [],
            S = r.matchStyles(m.value, m.params, B),
            P = r.matchStyles(d.value, d.params, B);
          B.length
            ? this._engine.reportError(B)
            : this._engine.afterFlush(() => {
                ae(e, S), Z(e, P);
              });
        }
        return;
      }
      let A = L(this._engine.playersByElement, e, []);
      A.forEach((B) => {
        B.namespaceId == this.id && B.triggerName == t && B.queued && B.destroy();
      });
      let y = r.matchTransition(m.value, d.value, e, d.params),
        E = !1;
      if (!y) {
        if (!n) return;
        (y = r.fallbackTransition), (E = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: e,
          triggerName: t,
          transition: y,
          fromState: m,
          toState: d,
          player: s,
          isFallbackTransition: E,
        }),
        E ||
          ($(e, gn),
          s.onStart(() => {
            Fe(e, gn);
          })),
        s.onDone(() => {
          let B = this.players.indexOf(s);
          B >= 0 && this.players.splice(B, 1);
          let S = this._engine.playersByElement.get(e);
          if (S) {
            let P = S.indexOf(s);
            P >= 0 && S.splice(P, 1);
          }
        }),
        this.players.push(s),
        A.push(s),
        s
      );
    }
    deregister(e) {
      this._triggers.delete(e),
        this._engine.statesByElement.forEach((t) => t.delete(e)),
        this._elementListeners.forEach((t, u) => {
          this._elementListeners.set(
            u,
            t.filter((n) => n.name != e)
          );
        });
    }
    clearElementCache(e) {
      this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
      let t = this._engine.playersByElement.get(e);
      t && (t.forEach((u) => u.destroy()), this._engine.playersByElement.delete(e));
    }
    _signalRemovalForInnerTriggers(e, t) {
      let u = this._engine.driver.query(e, Ke, !0);
      u.forEach((n) => {
        if (n[Q]) return;
        let r = this._engine.fetchNamespacesByElement(n);
        r.size ? r.forEach((s) => s.triggerLeaveAnimation(n, t, !1, !0)) : this.clearElementCache(n);
      }),
        this._engine.afterFlushAnimationsDone(() => u.forEach((n) => this.clearElementCache(n)));
    }
    triggerLeaveAnimation(e, t, u, n) {
      let r = this._engine.statesByElement.get(e),
        s = new Map();
      if (r) {
        let a = [];
        if (
          (r.forEach((m, d) => {
            if ((s.set(d, m.value), this._triggers.has(d))) {
              let f = this.trigger(e, d, De, n);
              f && a.push(f);
            }
          }),
          a.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, e, !0, t, s),
            u && ue(a).onDone(() => this._engine.processLeaveNode(e)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(e) {
      let t = this._elementListeners.get(e),
        u = this._engine.statesByElement.get(e);
      if (t && u) {
        let n = new Set();
        t.forEach((r) => {
          let s = r.name;
          if (n.has(s)) return;
          n.add(s);
          let m = this._triggers.get(s).fallbackTransition,
            d = u.get(s) || dt,
            f = new Se(De),
            p = new xe(this.id, s, e);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: s,
              transition: m,
              fromState: d,
              toState: f,
              player: p,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(e, t) {
      let u = this._engine;
      if ((e.childElementCount && this._signalRemovalForInnerTriggers(e, t), this.triggerLeaveAnimation(e, t, !0)))
        return;
      let n = !1;
      if (u.totalAnimations) {
        let r = u.players.length ? u.playersByQueriedElement.get(e) : [];
        if (r && r.length) n = !0;
        else {
          let s = e;
          for (; (s = s.parentNode); )
            if (u.statesByElement.get(s)) {
              n = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(e), n)) u.markElementAsRemoved(this.id, e, !1, t);
      else {
        let r = e[Q];
        (!r || r === Mn) &&
          (u.afterFlush(() => this.clearElementCache(e)), u.destroyInnerAnimations(e), u._onRemovalComplete(e, t));
      }
    }
    insertNode(e, t) {
      $(e, this._hostClassName);
    }
    drainQueuedTransitions(e) {
      let t = [];
      return (
        this._queue.forEach((u) => {
          let n = u.player;
          if (n.destroyed) return;
          let r = u.element,
            s = this._elementListeners.get(r);
          s &&
            s.forEach((a) => {
              if (a.name == u.triggerName) {
                let m = Mt(r, u.triggerName, u.fromState.value, u.toState.value);
                (m._data = e), Pt(u.player, a.phase, m, a.callback);
              }
            }),
            n.markedForDestroy
              ? this._engine.afterFlush(() => {
                  n.destroy();
                })
              : t.push(u);
        }),
        (this._queue = []),
        t.sort((u, n) => {
          let r = u.transition.ast.depCount,
            s = n.transition.ast.depCount;
          return r == 0 || s == 0 ? r - s : this._engine.driver.containsElement(u.element, n.element) ? 1 : -1;
        })
      );
    }
    destroy(e) {
      this.players.forEach((t) => t.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, e);
    }
  },
  xt = class {
    _onRemovalComplete(e, t) {
      this.onRemovalComplete(e, t);
    }
    constructor(e, t, u, n) {
      (this.bodyNode = e),
        (this.driver = t),
        (this._normalizer = u),
        (this.scheduler = n),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (r, s) => {});
    }
    get queuedPlayers() {
      let e = [];
      return (
        this._namespaceList.forEach((t) => {
          t.players.forEach((u) => {
            u.queued && e.push(u);
          });
        }),
        e
      );
    }
    createNamespace(e, t) {
      let u = new St(e, t, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, t)
          ? this._balanceNamespaceList(u, t)
          : (this.newHostElements.set(t, u), this.collectEnterElement(t)),
        (this._namespaceLookup[e] = u)
      );
    }
    _balanceNamespaceList(e, t) {
      let u = this._namespaceList,
        n = this.namespacesByHostElement;
      if (u.length - 1 >= 0) {
        let s = !1,
          a = this.driver.getParentElement(t);
        for (; a; ) {
          let m = n.get(a);
          if (m) {
            let d = u.indexOf(m);
            u.splice(d + 1, 0, e), (s = !0);
            break;
          }
          a = this.driver.getParentElement(a);
        }
        s || u.unshift(e);
      } else u.push(e);
      return n.set(t, e), e;
    }
    register(e, t) {
      let u = this._namespaceLookup[e];
      return u || (u = this.createNamespace(e, t)), u;
    }
    registerTrigger(e, t, u) {
      let n = this._namespaceLookup[e];
      n && n.register(t, u) && this.totalAnimations++;
    }
    destroy(e, t) {
      e &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let u = this._fetchNamespace(e);
          this.namespacesByHostElement.delete(u.hostElement);
          let n = this._namespaceList.indexOf(u);
          n >= 0 && this._namespaceList.splice(n, 1), u.destroy(t), delete this._namespaceLookup[e];
        }));
    }
    _fetchNamespace(e) {
      return this._namespaceLookup[e];
    }
    fetchNamespacesByElement(e) {
      let t = new Set(),
        u = this.statesByElement.get(e);
      if (u) {
        for (let n of u.values())
          if (n.namespaceId) {
            let r = this._fetchNamespace(n.namespaceId);
            r && t.add(r);
          }
      }
      return t;
    }
    trigger(e, t, u, n) {
      if (ze(t)) {
        let r = this._fetchNamespace(e);
        if (r) return r.trigger(t, u, n), !0;
      }
      return !1;
    }
    insertNode(e, t, u, n) {
      if (!ze(t)) return;
      let r = t[Q];
      if (r && r.setForRemoval) {
        (r.setForRemoval = !1), (r.setForMove = !0);
        let s = this.collectedLeaveElements.indexOf(t);
        s >= 0 && this.collectedLeaveElements.splice(s, 1);
      }
      if (e) {
        let s = this._fetchNamespace(e);
        s && s.insertNode(t, u);
      }
      n && this.collectEnterElement(t);
    }
    collectEnterElement(e) {
      this.collectedEnterElements.push(e);
    }
    markElementAsDisabled(e, t) {
      t
        ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), $(e, mt))
        : this.disabledNodes.has(e) && (this.disabledNodes.delete(e), Fe(e, mt));
    }
    removeNode(e, t, u) {
      if (ze(t)) {
        this.scheduler?.notify();
        let n = e ? this._fetchNamespace(e) : null;
        n ? n.removeNode(t, u) : this.markElementAsRemoved(e, t, !1, u);
        let r = this.namespacesByHostElement.get(t);
        r && r.id !== e && r.removeNode(t, u);
      } else this._onRemovalComplete(t, u);
    }
    markElementAsRemoved(e, t, u, n, r) {
      this.collectedLeaveElements.push(t),
        (t[Q] = {
          namespaceId: e,
          setForRemoval: n,
          hasAnimation: u,
          removedBeforeQueried: !1,
          previousTriggersValues: r,
        });
    }
    listen(e, t, u, n, r) {
      return ze(t) ? this._fetchNamespace(e).listen(t, u, n, r) : () => {};
    }
    _buildInstruction(e, t, u, n, r) {
      return e.transition.build(
        this.driver,
        e.element,
        e.fromState.value,
        e.toState.value,
        u,
        n,
        e.fromState.options,
        e.toState.options,
        t,
        r
      );
    }
    destroyInnerAnimations(e) {
      let t = this.driver.query(e, Ke, !0);
      t.forEach((u) => this.destroyActiveAnimationsForElement(u)),
        this.playersByQueriedElement.size != 0 &&
          ((t = this.driver.query(e, ft, !0)), t.forEach((u) => this.finishActiveQueriedAnimationOnElement(u)));
    }
    destroyActiveAnimationsForElement(e) {
      let t = this.playersByElement.get(e);
      t &&
        t.forEach((u) => {
          u.queued ? (u.markedForDestroy = !0) : u.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(e) {
      let t = this.playersByQueriedElement.get(e);
      t && t.forEach((u) => u.finish());
    }
    whenRenderingDone() {
      return new Promise((e) => {
        if (this.players.length) return ue(this.players).onDone(() => e());
        e();
      });
    }
    processLeaveNode(e) {
      let t = e[Q];
      if (t && t.setForRemoval) {
        if (((e[Q] = Mn), t.namespaceId)) {
          this.destroyInnerAnimations(e);
          let u = this._fetchNamespace(t.namespaceId);
          u && u.clearElementCache(e);
        }
        this._onRemovalComplete(e, t.setForRemoval);
      }
      e.classList?.contains(mt) && this.markElementAsDisabled(e, !1),
        this.driver.query(e, c0, !0).forEach((u) => {
          this.markElementAsDisabled(u, !1);
        });
    }
    flush(e = -1) {
      let t = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((u, n) => this._balanceNamespaceList(u, n)), this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let u = 0; u < this.collectedEnterElements.length; u++) {
          let n = this.collectedEnterElements[u];
          $(n, m0);
        }
      if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
        let u = [];
        try {
          t = this._flushAnimations(u, e);
        } finally {
          for (let n = 0; n < u.length; n++) u[n]();
        }
      } else
        for (let u = 0; u < this.collectedLeaveElements.length; u++) {
          let n = this.collectedLeaveElements[u];
          this.processLeaveNode(n);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((u) => u()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let u = this._whenQuietFns;
        (this._whenQuietFns = []),
          t.length
            ? ue(t).onDone(() => {
                u.forEach((n) => n());
              })
            : u.forEach((n) => n());
      }
    }
    reportError(e) {
      throw Pi(e);
    }
    _flushAnimations(e, t) {
      let u = new ve(),
        n = [],
        r = new Map(),
        s = [],
        a = new Map(),
        m = new Map(),
        d = new Map(),
        f = new Set();
      this.disabledNodes.forEach((g) => {
        f.add(g);
        let C = this.driver.query(g, l0, !0);
        for (let F = 0; F < C.length; F++) f.add(C[F]);
      });
      let p = this.bodyNode,
        A = Array.from(this.statesByElement.keys()),
        y = Fn(A, this.collectedEnterElements),
        E = new Map(),
        B = 0;
      y.forEach((g, C) => {
        let F = vn + B++;
        E.set(C, F), g.forEach((_) => $(_, F));
      });
      let S = [],
        P = new Set(),
        M = new Set();
      for (let g = 0; g < this.collectedLeaveElements.length; g++) {
        let C = this.collectedLeaveElements[g],
          F = C[Q];
        F &&
          F.setForRemoval &&
          (S.push(C), P.add(C), F.hasAnimation ? this.driver.query(C, d0, !0).forEach((_) => P.add(_)) : M.add(C));
      }
      let N = new Map(),
        O = Fn(A, Array.from(P));
      O.forEach((g, C) => {
        let F = pt + B++;
        N.set(C, F), g.forEach((_) => $(_, F));
      }),
        e.push(() => {
          y.forEach((g, C) => {
            let F = E.get(C);
            g.forEach((_) => Fe(_, F));
          }),
            O.forEach((g, C) => {
              let F = N.get(C);
              g.forEach((_) => Fe(_, F));
            }),
            S.forEach((g) => {
              this.processLeaveNode(g);
            });
        });
      let me = [],
        U = [];
      for (let g = this._namespaceList.length - 1; g >= 0; g--)
        this._namespaceList[g].drainQueuedTransitions(t).forEach((F) => {
          let _ = F.player,
            T = F.element;
          if ((me.push(_), this.collectedEnterElements.length)) {
            let k = T[Q];
            if (k && k.setForMove) {
              if (k.previousTriggersValues && k.previousTriggersValues.has(F.triggerName)) {
                let re = k.previousTriggersValues.get(F.triggerName),
                  K = this.statesByElement.get(F.element);
                if (K && K.has(F.triggerName)) {
                  let be = K.get(F.triggerName);
                  (be.value = re), K.set(F.triggerName, be);
                }
              }
              _.destroy();
              return;
            }
          }
          let W = !p || !this.driver.containsElement(p, T),
            I = N.get(T),
            te = E.get(T),
            x = this._buildInstruction(F, u, te, I, W);
          if (x.errors && x.errors.length) {
            U.push(x);
            return;
          }
          if (W) {
            _.onStart(() => ae(T, x.fromStyles)), _.onDestroy(() => Z(T, x.toStyles)), n.push(_);
            return;
          }
          if (F.isFallbackTransition) {
            _.onStart(() => ae(T, x.fromStyles)), _.onDestroy(() => Z(T, x.toStyles)), n.push(_);
            return;
          }
          let Kt = [];
          x.timelines.forEach((k) => {
            (k.stretchStartingKeyframe = !0), this.disabledNodes.has(k.element) || Kt.push(k);
          }),
            (x.timelines = Kt),
            u.append(T, x.timelines);
          let Jn = { instruction: x, player: _, element: T };
          s.push(Jn),
            x.queriedElements.forEach((k) => L(a, k, []).push(_)),
            x.preStyleProps.forEach((k, re) => {
              if (k.size) {
                let K = m.get(re);
                K || m.set(re, (K = new Set())), k.forEach((be, Je) => K.add(Je));
              }
            }),
            x.postStyleProps.forEach((k, re) => {
              let K = d.get(re);
              K || d.set(re, (K = new Set())), k.forEach((be, Je) => K.add(Je));
            });
        });
      if (U.length) {
        let g = [];
        U.forEach((C) => {
          g.push(Mi(C.triggerName, C.errors));
        }),
          me.forEach((C) => C.destroy()),
          this.reportError(g);
      }
      let q = new Map(),
        R = new Map();
      s.forEach((g) => {
        let C = g.element;
        u.has(C) && (R.set(C, C), this._beforeAnimationBuild(g.player.namespaceId, g.instruction, q));
      }),
        n.forEach((g) => {
          let C = g.element;
          this._getPreviousPlayers(C, !1, g.namespaceId, g.triggerName, null).forEach((_) => {
            L(q, C, []).push(_), _.destroy();
          });
        });
      let ne = S.filter((g) => Bn(g, m, d)),
        de = new Map();
      Cn(de, this.driver, M, d, Y).forEach((g) => {
        Bn(g, m, d) && ne.push(g);
      });
      let ie = new Map();
      y.forEach((g, C) => {
        Cn(ie, this.driver, new Set(g), m, ke);
      }),
        ne.forEach((g) => {
          let C = de.get(g),
            F = ie.get(g);
          de.set(g, new Map([...(C?.entries() ?? []), ...(F?.entries() ?? [])]));
        });
      let Ze = [],
        zt = [],
        Lt = {};
      s.forEach((g) => {
        let { element: C, player: F, instruction: _ } = g;
        if (u.has(C)) {
          if (f.has(C)) {
            F.onDestroy(() => Z(C, _.toStyles)), (F.disabled = !0), F.overrideTotalTime(_.totalTime), n.push(F);
            return;
          }
          let T = Lt;
          if (R.size > 1) {
            let I = C,
              te = [];
            for (; (I = I.parentNode); ) {
              let x = R.get(I);
              if (x) {
                T = x;
                break;
              }
              te.push(I);
            }
            te.forEach((x) => R.set(x, T));
          }
          let W = this._buildAnimation(F.namespaceId, _, q, r, ie, de);
          if ((F.setRealPlayer(W), T === Lt)) Ze.push(F);
          else {
            let I = this.playersByElement.get(T);
            I && I.length && (F.parentPlayer = ue(I)), n.push(F);
          }
        } else ae(C, _.fromStyles), F.onDestroy(() => Z(C, _.toStyles)), zt.push(F), f.has(C) && n.push(F);
      }),
        zt.forEach((g) => {
          let C = r.get(g.element);
          if (C && C.length) {
            let F = ue(C);
            g.setRealPlayer(F);
          }
        }),
        n.forEach((g) => {
          g.parentPlayer ? g.syncPlayerEvents(g.parentPlayer) : g.destroy();
        });
      for (let g = 0; g < S.length; g++) {
        let C = S[g],
          F = C[Q];
        if ((Fe(C, pt), F && F.hasAnimation)) continue;
        let _ = [];
        if (a.size) {
          let W = a.get(C);
          W && W.length && _.push(...W);
          let I = this.driver.query(C, ft, !0);
          for (let te = 0; te < I.length; te++) {
            let x = a.get(I[te]);
            x && x.length && _.push(...x);
          }
        }
        let T = _.filter((W) => !W.destroyed);
        T.length ? C0(this, C, T) : this.processLeaveNode(C);
      }
      return (
        (S.length = 0),
        Ze.forEach((g) => {
          this.players.push(g),
            g.onDone(() => {
              g.destroy();
              let C = this.players.indexOf(g);
              this.players.splice(C, 1);
            }),
            g.play();
        }),
        Ze
      );
    }
    afterFlush(e) {
      this._flushFns.push(e);
    }
    afterFlushAnimationsDone(e) {
      this._whenQuietFns.push(e);
    }
    _getPreviousPlayers(e, t, u, n, r) {
      let s = [];
      if (t) {
        let a = this.playersByQueriedElement.get(e);
        a && (s = a);
      } else {
        let a = this.playersByElement.get(e);
        if (a) {
          let m = !r || r == De;
          a.forEach((d) => {
            d.queued || (!m && d.triggerName != n) || s.push(d);
          });
        }
      }
      return (u || n) && (s = s.filter((a) => !((u && u != a.namespaceId) || (n && n != a.triggerName)))), s;
    }
    _beforeAnimationBuild(e, t, u) {
      let n = t.triggerName,
        r = t.element,
        s = t.isRemovalTransition ? void 0 : e,
        a = t.isRemovalTransition ? void 0 : n;
      for (let m of t.timelines) {
        let d = m.element,
          f = d !== r,
          p = L(u, d, []);
        this._getPreviousPlayers(d, f, s, a, t.toState).forEach((y) => {
          let E = y.getRealPlayer();
          E.beforeDestroy && E.beforeDestroy(), y.destroy(), p.push(y);
        });
      }
      ae(r, t.fromStyles);
    }
    _buildAnimation(e, t, u, n, r, s) {
      let a = t.triggerName,
        m = t.element,
        d = [],
        f = new Set(),
        p = new Set(),
        A = t.timelines.map((E) => {
          let B = E.element;
          f.add(B);
          let S = B[Q];
          if (S && S.removedBeforeQueried) return new Ce(E.duration, E.delay);
          let P = B !== m,
            M = F0((u.get(B) || h0).map((q) => q.getRealPlayer())).filter((q) => {
              let R = q;
              return R.element ? R.element === B : !1;
            }),
            N = r.get(B),
            O = s.get(B),
            me = yn(this._normalizer, E.keyframes, N, O),
            U = this._buildPlayer(E, me, M);
          if ((E.subTimeline && n && p.add(B), P)) {
            let q = new xe(e, a, B);
            q.setRealPlayer(U), d.push(q);
          }
          return U;
        });
      d.forEach((E) => {
        L(this.playersByQueriedElement, E.element, []).push(E),
          E.onDone(() => f0(this.playersByQueriedElement, E.element, E));
      }),
        f.forEach((E) => $(E, cn));
      let y = ue(A);
      return (
        y.onDestroy(() => {
          f.forEach((E) => Fe(E, cn)), Z(m, t.toStyles);
        }),
        p.forEach((E) => {
          L(n, E, []).push(y);
        }),
        y
      );
    }
    _buildPlayer(e, t, u) {
      return t.length > 0
        ? this.driver.animate(e.element, t, e.duration, e.delay, e.easing, u)
        : new Ce(e.duration, e.delay);
    }
  },
  xe = class {
    constructor(e, t, u) {
      (this.namespaceId = e),
        (this.triggerName = t),
        (this.element = u),
        (this._player = new Ce()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(e) {
      this._containsRealPlayer ||
        ((this._player = e),
        this._queuedCallbacks.forEach((t, u) => {
          t.forEach((n) => Pt(e, u, void 0, n));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(e.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(e) {
      this.totalTime = e;
    }
    syncPlayerEvents(e) {
      let t = this._player;
      t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
        e.onDone(() => this.finish()),
        e.onDestroy(() => this.destroy());
    }
    _queueEvent(e, t) {
      L(this._queuedCallbacks, e, []).push(t);
    }
    onDone(e) {
      this.queued && this._queueEvent("done", e), this._player.onDone(e);
    }
    onStart(e) {
      this.queued && this._queueEvent("start", e), this._player.onStart(e);
    }
    onDestroy(e) {
      this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(e) {
      this.queued || this._player.setPosition(e);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(e) {
      let t = this._player;
      t.triggerCallback && t.triggerCallback(e);
    }
  };
function f0(i, e, t) {
  let u = i.get(e);
  if (u) {
    if (u.length) {
      let n = u.indexOf(t);
      u.splice(n, 1);
    }
    u.length == 0 && i.delete(e);
  }
  return u;
}
function g0(i) {
  return i ?? null;
}
function ze(i) {
  return i && i.nodeType === 1;
}
function E0(i) {
  return i == "start" || i == "done";
}
function En(i, e) {
  let t = i.style.display;
  return (i.style.display = e ?? "none"), t;
}
function Cn(i, e, t, u, n) {
  let r = [];
  t.forEach((m) => r.push(En(m)));
  let s = [];
  u.forEach((m, d) => {
    let f = new Map();
    m.forEach((p) => {
      let A = e.computeStyle(d, p, n);
      f.set(p, A), (!A || A.length == 0) && ((d[Q] = p0), s.push(d));
    }),
      i.set(d, f);
  });
  let a = 0;
  return t.forEach((m) => En(m, r[a++])), s;
}
function Fn(i, e) {
  let t = new Map();
  if ((i.forEach((a) => t.set(a, [])), e.length == 0)) return t;
  let u = 1,
    n = new Set(e),
    r = new Map();
  function s(a) {
    if (!a) return u;
    let m = r.get(a);
    if (m) return m;
    let d = a.parentNode;
    return t.has(d) ? (m = d) : n.has(d) ? (m = u) : (m = s(d)), r.set(a, m), m;
  }
  return (
    e.forEach((a) => {
      let m = s(a);
      m !== u && t.get(m).push(a);
    }),
    t
  );
}
function $(i, e) {
  i.classList?.add(e);
}
function Fe(i, e) {
  i.classList?.remove(e);
}
function C0(i, e, t) {
  ue(t).onDone(() => i.processLeaveNode(e));
}
function F0(i) {
  let e = [];
  return Tn(i, e), e;
}
function Tn(i, e) {
  for (let t = 0; t < i.length; t++) {
    let u = i[t];
    u instanceof ot ? Tn(u.players, e) : e.push(u);
  }
}
function B0(i, e) {
  let t = Object.keys(i),
    u = Object.keys(e);
  if (t.length != u.length) return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (!e.hasOwnProperty(r) || i[r] !== e[r]) return !1;
  }
  return !0;
}
function Bn(i, e, t) {
  let u = t.get(i);
  if (!u) return !1;
  let n = e.get(i);
  return n ? u.forEach((r) => n.add(r)) : e.set(i, u), t.delete(i), !0;
}
var ye = class {
  constructor(e, t, u, n) {
    (this._driver = t),
      (this._normalizer = u),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (r, s) => {}),
      (this._transitionEngine = new xt(e.body, t, u, n)),
      (this._timelineEngine = new vt(e.body, t, u)),
      (this._transitionEngine.onRemovalComplete = (r, s) => this.onRemovalComplete(r, s));
  }
  registerTrigger(e, t, u, n, r) {
    let s = e + "-" + n,
      a = this._triggerCache[s];
    if (!a) {
      let m = [],
        d = [],
        f = bn(this._driver, r, m, d);
      if (m.length) throw Bi(n, m);
      d.length && void 0, (a = o0(n, f, this._normalizer)), (this._triggerCache[s] = a);
    }
    this._transitionEngine.registerTrigger(t, n, a);
  }
  register(e, t) {
    this._transitionEngine.register(e, t);
  }
  destroy(e, t) {
    this._transitionEngine.destroy(e, t);
  }
  onInsert(e, t, u, n) {
    this._transitionEngine.insertNode(e, t, u, n);
  }
  onRemove(e, t, u) {
    this._transitionEngine.removeNode(e, t, u);
  }
  disableAnimations(e, t) {
    this._transitionEngine.markElementAsDisabled(e, t);
  }
  process(e, t, u, n) {
    if (u.charAt(0) == "@") {
      let [r, s] = an(u),
        a = n;
      this._timelineEngine.command(r, t, s, a);
    } else this._transitionEngine.trigger(e, t, u, n);
  }
  listen(e, t, u, n, r) {
    if (u.charAt(0) == "@") {
      let [s, a] = an(u);
      return this._timelineEngine.listen(s, t, a, r);
    }
    return this._transitionEngine.listen(e, t, u, n, r);
  }
  flush(e = -1) {
    this._transitionEngine.flush(e);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(e) {
    this._transitionEngine.afterFlushAnimationsDone(e);
  }
};
function y0(i, e) {
  let t = null,
    u = null;
  return (
    Array.isArray(e) && e.length
      ? ((t = ht(e[0])), e.length > 1 && (u = ht(e[e.length - 1])))
      : e instanceof Map && (t = ht(e)),
    t || u ? new bt(i, t, u) : null
  );
}
var Be = class Be {
  constructor(e, t, u) {
    (this._element = e), (this._startStyles = t), (this._endStyles = u), (this._state = 0);
    let n = Be.initialStylesByElement.get(e);
    n || Be.initialStylesByElement.set(e, (n = new Map())), (this._initialStyles = n);
  }
  start() {
    this._state < 1 &&
      (this._startStyles && Z(this._element, this._startStyles, this._initialStyles), (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (Z(this._element, this._initialStyles),
        this._endStyles && (Z(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (Be.initialStylesByElement.delete(this._element),
        this._startStyles && (ae(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles && (ae(this._element, this._endStyles), (this._endStyles = null)),
        Z(this._element, this._initialStyles),
        (this._state = 3));
  }
};
Be.initialStylesByElement = new WeakMap();
var bt = Be;
function ht(i) {
  let e = null;
  return (
    i.forEach((t, u) => {
      A0(u) && ((e = e || new Map()), e.set(u, t));
    }),
    e
  );
}
function A0(i) {
  return i === "display" || i === "position";
}
var He = class {
    constructor(e, t, u, n) {
      (this.element = e),
        (this.keyframes = t),
        (this.options = u),
        (this._specialStyles = n),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = u.duration),
        (this._delay = u.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished || ((this._finished = !0), this._onDoneFns.forEach((e) => e()), (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let e = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(this.element, e, this.options)),
        (this._finalKeyframe = e.length ? e[e.length - 1] : new Map());
      let t = () => this._onFinish();
      this.domPlayer.addEventListener("finish", t),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", t);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(e) {
      let t = [];
      return (
        e.forEach((u) => {
          t.push(Object.fromEntries(u));
        }),
        t
      );
    }
    _triggerWebAnimation(e, t, u) {
      return e.animate(this._convertKeyframesToObject(t), u);
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((e) => e()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    setPosition(e) {
      this.domPlayer === void 0 && this.init(), (this.domPlayer.currentTime = e * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let e = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((u, n) => {
          n !== "offset" && e.set(n, this._finished ? u : Nt(this.element, n));
        }),
        (this.currentSnapshot = e);
    }
    triggerCallback(e) {
      let t = e === "start" ? this._onStartFns : this._onDoneFns;
      t.forEach((u) => u()), (t.length = 0);
    }
  },
  Ge = class {
    validateStyleProperty(e) {
      return !0;
    }
    validateAnimatableStyleProperty(e) {
      return !0;
    }
    matchesElement(e, t) {
      return !1;
    }
    containsElement(e, t) {
      return An(e, t);
    }
    getParentElement(e) {
      return Tt(e);
    }
    query(e, t, u) {
      return Dn(e, t, u);
    }
    computeStyle(e, t, u) {
      return Nt(e, t);
    }
    animate(e, t, u, n, r, s = []) {
      let a = n == 0 ? "both" : "forwards",
        m = { duration: u, delay: n, fill: a };
      r && (m.easing = r);
      let d = new Map(),
        f = s.filter((y) => y instanceof He);
      ji(u, n) &&
        f.forEach((y) => {
          y.currentSnapshot.forEach((E, B) => d.set(B, E));
        });
      let p = zi(t).map((y) => new Map(y));
      p = Vi(e, p, d);
      let A = y0(e, p);
      return new He(e, p, m, A);
    }
  };
var Le = "@",
  On = "@.disabled",
  Ye = class {
    constructor(e, t, u, n) {
      (this.namespaceId = e), (this.delegate = t), (this.engine = u), (this._onDestroy = n), (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(e) {
      this.delegate.destroyNode?.(e);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(e, t) {
      return this.delegate.createElement(e, t);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    appendChild(e, t) {
      this.delegate.appendChild(e, t), this.engine.onInsert(this.namespaceId, t, e, !1);
    }
    insertBefore(e, t, u, n = !0) {
      this.delegate.insertBefore(e, t, u), this.engine.onInsert(this.namespaceId, t, e, n);
    }
    removeChild(e, t, u) {
      this.engine.onRemove(this.namespaceId, t, this.delegate);
    }
    selectRootElement(e, t) {
      return this.delegate.selectRootElement(e, t);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, t, u, n) {
      this.delegate.setAttribute(e, t, u, n);
    }
    removeAttribute(e, t, u) {
      this.delegate.removeAttribute(e, t, u);
    }
    addClass(e, t) {
      this.delegate.addClass(e, t);
    }
    removeClass(e, t) {
      this.delegate.removeClass(e, t);
    }
    setStyle(e, t, u, n) {
      this.delegate.setStyle(e, t, u, n);
    }
    removeStyle(e, t, u) {
      this.delegate.removeStyle(e, t, u);
    }
    setProperty(e, t, u) {
      t.charAt(0) == Le && t == On ? this.disableAnimations(e, !!u) : this.delegate.setProperty(e, t, u);
    }
    setValue(e, t) {
      this.delegate.setValue(e, t);
    }
    listen(e, t, u) {
      return this.delegate.listen(e, t, u);
    }
    disableAnimations(e, t) {
      this.engine.disableAnimations(e, t);
    }
  },
  wt = class extends Ye {
    constructor(e, t, u, n, r) {
      super(t, u, n, r), (this.factory = e), (this.namespaceId = t);
    }
    setProperty(e, t, u) {
      t.charAt(0) == Le
        ? t.charAt(1) == "." && t == On
          ? ((u = u === void 0 ? !0 : !!u), this.disableAnimations(e, u))
          : this.engine.process(this.namespaceId, e, t.slice(1), u)
        : this.delegate.setProperty(e, t, u);
    }
    listen(e, t, u) {
      if (t.charAt(0) == Le) {
        let n = D0(e),
          r = t.slice(1),
          s = "";
        return (
          r.charAt(0) != Le && ([r, s] = _0(r)),
          this.engine.listen(this.namespaceId, n, r, s, (a) => {
            let m = a._data || -1;
            this.factory.scheduleListenerCallback(m, u, a);
          })
        );
      }
      return this.delegate.listen(e, t, u);
    }
  };
function D0(i) {
  switch (i) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return i;
  }
}
function _0(i) {
  let e = i.indexOf("."),
    t = i.substring(0, e),
    u = i.slice(e + 1);
  return [t, u];
}
var Xe = class {
  constructor(e, t, u) {
    (this.delegate = e),
      (this.engine = t),
      (this._zone = u),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (t.onRemovalComplete = (n, r) => {
        let s = r?.parentNode(n);
        s && r.removeChild(s, n);
      });
  }
  createRenderer(e, t) {
    let u = "",
      n = this.delegate.createRenderer(e, t);
    if (!e || !t?.data?.animation) {
      let d = this._rendererCache,
        f = d.get(n);
      if (!f) {
        let p = () => d.delete(n);
        (f = new Ye(u, n, this.engine, p)), d.set(n, f);
      }
      return f;
    }
    let r = t.id,
      s = t.id + "-" + this._currentId;
    this._currentId++, this.engine.register(s, e);
    let a = (d) => {
      Array.isArray(d) ? d.forEach(a) : this.engine.registerTrigger(r, s, e, d.name, d);
    };
    return t.data.animation.forEach(a), new wt(this, s, n, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(e, t, u) {
    if (e >= 0 && e < this._microtaskId) {
      this._zone.run(() => t(u));
      return;
    }
    let n = this._animationCallbacksBuffer;
    n.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          n.forEach((r) => {
            let [s, a] = r;
            s(a);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      n.push([t, u]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var S0 = (() => {
  let e = class e extends ye {
    constructor(u, n, r) {
      super(u, n, r, w(Wt, { optional: !0 }));
    }
    ngOnDestroy() {
      this.flush();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)(Pe(iu), Pe(le), Pe(ce));
  }),
    (e.ɵprov = H({ token: e, factory: e.ɵfac }));
  let i = e;
  return i;
})();
function x0() {
  return new Ve();
}
function b0(i, e, t) {
  return new Xe(i, e, t);
}
var kn = [
    { provide: ce, useFactory: x0 },
    { provide: ye, useClass: S0 },
    { provide: Ht, useFactory: b0, deps: [lu, ye, Te] },
  ],
  w0 = [{ provide: le, useFactory: () => new Ge() }, { provide: tt, useValue: "BrowserAnimations" }, ...kn],
  Or = [{ provide: le, useClass: Ot }, { provide: tt, useValue: "NoopAnimations" }, ...kn];
function Nn() {
  return Gt("NgEagerAnimations"), [...w0];
}
var qn = (() => {
  let e = class e extends zu {};
  (e.ɵfac = (() => {
    let u;
    return function (r) {
      return (u || (u = Me(e)))(r || e);
    };
  })()),
    (e.ɵcmp = j({
      type: e,
      selectors: [["asb-auth-modal"]],
      standalone: !0,
      features: [Yt, V],
      decls: 13,
      vars: 1,
      consts: [
        [3, "close"],
        [1, "content"],
        [1, "note"],
        [1, "title"],
        [1, "action"],
        [
          "tpl-button",
          "",
          "color",
          "primary",
          "width",
          "fixed",
          "buttonType",
          "filled",
          "icon",
          "arrow-right",
          3,
          "click",
        ],
      ],
      template: function (n, r) {
        n & 1 &&
          (l(0, "tpl-modal", 0),
          J("close", function () {
            return r.close();
          }),
          l(1, "tpl-modal-header"),
          o(2),
          c(),
          l(3, "div", 1)(4, "p", 2),
          o(
            5,
            " ASOBI TICKET\u306E\u3054\u5229\u7528\u306B\u306F\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3ID\u3067\u306E\u30ED\u30B0\u30A4\u30F3\u304C\u5FC5\u8981\u3067\u3059\u3002 "
          ),
          h(6, "br"),
          o(
            7,
            " ASOBI TICKET\u306B\u306F\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3ID\u306E\u4F1A\u54E1\u60C5\u5831\u30FB\u4E3B\u9023\u7D61\u5148\u304C\u9023\u643A\u3055\u308C\u307E\u3059\u3002 "
          ),
          c(),
          l(8, "h2", 3),
          o(9, "\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3ID \u3067\u30ED\u30B0\u30A4\u30F3"),
          c(),
          l(10, "div", 4)(11, "button", 5),
          J("click", function () {
            return r.signIn();
          }),
          o(12, " \u30ED\u30B0\u30A4\u30F3\u30FB\u65B0\u898F\u767B\u9332 "),
          c()()()()),
          n & 2 && (Ut(2), eu(r.headerText));
      },
      dependencies: [G, Nu, qu, Ee],
      styles: [
        "tpl-modal[_ngcontent-%COMP%]{--modal-content-background: var(--tpl-color-background)}.content[_ngcontent-%COMP%]{padding-top:8px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin-bottom:16px;text-align:center}.content[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-bottom:16px}.content[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] > button[tpl-button][_ngcontent-%COMP%]{font-size:1.3rem}.content[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] > button[tpl-button][_ngcontent-%COMP%] + button[tpl-button][_ngcontent-%COMP%]{margin-top:8px}.content[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{font-size:14px;line-height:1.7;margin-bottom:32px;text-align:center}",
      ],
    }));
  let i = e;
  return i;
})();
var Rn = (() => {
  let e = class e extends Ne {
    constructor() {
      super(...arguments), (this._dialog = w(Fu));
    }
    openAuthModal({ returnPath: u, headerText: n } = {}) {
      return this._dialog.open(qn, { maxWidth: "580px", width: "95%", data: { returnPath: u, headerText: n } });
    }
  };
  (e.ɵfac = (() => {
    let u;
    return function (r) {
      return (u || (u = Me(e)))(r || e);
    };
  })()),
    (e.ɵprov = H({ token: e, factory: e.ɵfac, providedIn: "root" }));
  let i = e;
  return i;
})();
var In = (() => {
  let e = class e {
    constructor() {
      this.sessionService = w(ju);
    }
    signUp() {
      this.sessionService.navigateSignUp();
    }
    scrollToElement(u) {
      u.scrollIntoView({ behavior: "smooth" });
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["page-pre-companion"]],
      standalone: !0,
      features: [V],
      decls: 178,
      vars: 0,
      consts: [
        ["step01", ""],
        ["step02", ""],
        [1, "section"],
        [1, "section-heading"],
        [1, "about"],
        [1, "about-text"],
        [1, "about-note"],
        [1, "about-note-item"],
        [1, "about-signup"],
        [1, "about-signup-text"],
        ["tpl-button", "", "icon", "arrow-right", 1, "about-signup-button", 3, "click"],
        [1, "flow"],
        [1, "flow-header"],
        [1, "flow-header-step", 3, "click"],
        [1, "flow-header-step-index"],
        [1, "flow-header-step-title"],
        ["src", "./assets/guide/pre-companion/arrow.svg", "alt", "", 1, "flow-header-step-arrow"],
        [1, "flow-content"],
        [1, "flow-content-heading"],
        [1, "flow-content-heading-index"],
        [1, "flow-content-heading-title"],
        [1, "flow-content-text"],
        [1, "flow-content-section"],
        [1, "flow-content-section-title"],
        [1, "flow-content-item"],
        [1, "flow-content-item-title"],
        ["src", "./assets/guide/pre-companion/step01_01.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step01_02.png", "alt", "", 1, "flow-content-item-image"],
        [1, "flow-content-item-note"],
        ["src", "./assets/guide/pre-companion/step01_03.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step01_04.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step01_05.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step01_06.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step01_07.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step01_08.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step02_01.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step02_02.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step02_03.png", "alt", "", 1, "flow-content-item-image"],
        ["src", "./assets/guide/pre-companion/step02_04.png", "alt", "", 1, "flow-content-item-image"],
        [1, "faq"],
        [1, "faq-item"],
        ["type", "checkbox", "id", "faq-01", 1, "faq-item-check"],
        ["for", "faq-01", 1, "faq-item-q"],
        [1, "faq-item-q-inner"],
        [1, "faq-item-a"],
        [1, "faq-item-a-inner"],
        ["type", "checkbox", "id", "faq-02", 1, "faq-item-check"],
        ["for", "faq-02", 1, "faq-item-q"],
        [1, "faq-item-a-content"],
        [1, "faq-item-a-note"],
        ["type", "checkbox", "id", "faq-03", 1, "faq-item-check"],
        ["for", "faq-03", 1, "faq-item-q"],
        ["type", "checkbox", "id", "faq-04", 1, "faq-item-check"],
        ["for", "faq-04", 1, "faq-item-q"],
        ["type", "checkbox", "id", "faq-05", 1, "faq-item-check"],
        ["for", "faq-05", 1, "faq-item-q"],
      ],
      template: function (n, r) {
        if (n & 1) {
          let s = Oe();
          l(0, "section", 2)(1, "h2", 3),
            o(2, "\u4E8B\u524D\u540C\u884C\u8005\u6307\u5B9A\u3068\u306F"),
            c(),
            l(3, "div", 4)(4, "div", 5),
            o(
              5,
              " \u4E8B\u524D\u306E\u540C\u884C\u8005\u6307\u5B9A\u304C\u5FC5\u8981\u306A\u53D7\u4ED8\u306B\u304A\u3044\u3066\u3001\u4E00\u7DD2\u306B\u53C2\u52A0\u3055\u308C\u308B\u540C\u884C\u8005\u3092\u7533\u8FBC\u8005\u304C\u304A\u7533\u8FBC\u307F\u6642\u306B\u3054\u6307\u5B9A\u3044\u305F\u3060\u304F\u30B7\u30B9\u30C6\u30E0\u3067\u3059\u3002 "
            ),
            c(),
            l(6, "div", 6)(7, "div", 7),
            o(
              8,
              " \u203B\u3059\u3079\u3066\u306E\u516C\u6F14\u3067\u4E8B\u524D\u540C\u884C\u8005\u6307\u5B9A\u304C\u5FC5\u9808\u3067\u306F\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u4E8B\u524D\u540C\u884C\u8005\u6307\u5B9A\u304C\u5FC5\u8981\u306A\u516C\u6F14\u304B\u306F\u53D7\u4ED8\u30DA\u30FC\u30B8\u306B\u3066\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
            ),
            c(),
            l(9, "div", 7),
            o(
              10,
              " \u203B\u30EA\u30BB\u30FC\u30EB\u3092\u884C\u3046\u5834\u5408\u306F\u3001\u7533\u8FBC\u8005\u30FB\u540C\u884C\u8005\u3092\u305D\u308C\u305E\u308C\u51FA\u54C1\u3059\u308B\u4E8B\u306F\u53EF\u80FD\u3067\u3059\u3002\u30EA\u30BB\u30FC\u30EB\u306E\u6709\u7121\u3001\u6761\u4EF6\u306F\u53D7\u4ED8\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u306E\u3067\u3001\u5404\u53D7\u4ED8\u306B\u3066\u3054\u78BA\u8A8D\u306E\u3046\u3048\u304A\u7533\u8FBC\u307F\u304F\u3060\u3055\u3044\u3002 "
            ),
            c()(),
            l(11, "div", 8)(12, "div", 9),
            o(13, "\u540C\u884C\u8005\u6307\u5B9A\u306B\u306F\u3001\u540C\u884C\u8005\u3082\u4E8B\u524D\u306B"),
            h(14, "br"),
            o(15, "\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3ID\u3078\u306E\u767B\u9332\u304C\u5FC5\u8981\u3067\u3059"),
            c(),
            l(16, "a", 10),
            J("click", function () {
              return pe(s), fe(r.signUp());
            }),
            o(17, "\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332\u306F\u3053\u3061\u3089"),
            c()()()(),
            l(18, "section", 2)(19, "h2", 3),
            o(20, "\u4E8B\u524D\u540C\u884C\u8005\u767B\u9332\u306E\u6D41\u308C"),
            c(),
            l(21, "div", 11)(22, "div", 12)(23, "a", 13),
            J("click", function () {
              pe(s);
              let m = ut(39);
              return fe(r.scrollToElement(m));
            }),
            l(24, "div", 14),
            o(25, "STEP 01"),
            c(),
            l(26, "div", 15),
            o(27, "\u540C\u884C\u8005\u3092\u30EA\u30B9\u30C8\u306B"),
            h(28, "br"),
            o(29, "\u8FFD\u52A0\u3059\u308B"),
            c()(),
            h(30, "img", 16),
            l(31, "a", 13),
            J("click", function () {
              pe(s);
              let m = ut(97);
              return fe(r.scrollToElement(m));
            }),
            l(32, "div", 14),
            o(33, "STEP 02"),
            c(),
            l(34, "div", 15),
            o(35, "\u304A\u7533\u8FBC\u307F\u6642\u306B"),
            h(36, "br"),
            o(37, "\u540C\u884C\u8005\u3092\u9078\u629E\u3059\u308B"),
            c()()(),
            l(38, "div", 17, 0)(40, "h3", 18)(41, "div", 19),
            o(42, "STEP 01"),
            c(),
            l(43, "div", 20),
            o(44, "\u540C\u884C\u8005\u3092\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0\u3059\u308B"),
            c()(),
            l(45, "div", 21),
            o(
              46,
              " \u7533\u8FBC\u8005\u307E\u305F\u306F\u8FFD\u52A0\u3057\u305F\u3044\u540C\u884C\u8005\u306E\u30DE\u30A4\u30DA\u30FC\u30B8\u5185\u300C\u540C\u884C\u8005\u8A2D\u5B9A\u300D\u3088\u308A\u8FFD\u52A0\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
            ),
            h(47, "br"),
            o(48, "\u8FFD\u52A0\u3092\u884C\u3046\u3068\u3001"),
            l(49, "em"),
            o(50, "\u7533\u8FBC\u8005\u30FB\u540C\u884C\u8005\u305D\u308C\u305E\u308C\u306E"),
            c(),
            o(51, "\u540C\u884C\u8005\u4E00\u89A7\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002 "),
            c(),
            l(52, "div", 22)(53, "h4", 23),
            o(54, "\u7533\u8FBC\u8005\u5074\u306E\u64CD\u4F5C"),
            c(),
            l(55, "div", 24)(56, "div", 25),
            o(57, "\u53F3\u4E0A\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u30BF\u30C3\u30D7"),
            c(),
            h(58, "img", 26),
            c(),
            l(59, "div", 24)(60, "div", 25),
            o(61, "\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u30DE\u30A4\u30DA\u30FC\u30B8\u3092\u30BF\u30C3\u30D7"),
            c(),
            h(62, "img", 27),
            l(63, "div", 28),
            o(
              64,
              "\u203B\u30C1\u30B1\u30C3\u30C8\u30B5\u30A4\u30C8\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3044\u308B\u72B6\u614B"
            ),
            c()(),
            l(65, "div", 24)(66, "div", 25),
            o(67, "\u30DE\u30A4\u30DA\u30FC\u30B8\u3067\u540C\u884C\u8005\u8A2D\u5B9A\u3092\u30BF\u30C3\u30D7"),
            c(),
            h(68, "img", 29),
            c(),
            l(69, "div", 24)(70, "div", 25),
            o(71, "\u540C\u884C\u8005\u3092\u8FFD\u52A0\u3059\u308B\u3092\u30BF\u30C3\u30D7"),
            c(),
            h(72, "img", 30),
            c(),
            l(73, "div", 24)(74, "div", 25),
            o(
              75,
              "\u540C\u884C\u8005\u767B\u9332\u30B3\u30FC\u30C9\u3082\u3057\u304F\u306F\u62DB\u5F85URL\u306E\u3044\u305A\u308C\u304B\u3092\u540C\u884C\u8005\u306B\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044"
            ),
            c(),
            h(76, "img", 31),
            c()(),
            l(77, "div", 22)(78, "h4", 23),
            o(79, "\u540C\u884C\u8005\u5074\u306E\u64CD\u4F5C"),
            c(),
            l(80, "div", 24)(81, "div", 25),
            o(
              82,
              "\u540C\u884C\u8005\u8A2D\u5B9A\u30DA\u30FC\u30B8\u3067\u53D7\u9818\u3057\u305F\u540C\u884C\u8005\u767B\u9332\u30B3\u30FC\u30C9\u3092\u5165\u529B"
            ),
            c(),
            h(83, "img", 32),
            l(84, "div", 28),
            o(
              85,
              "\u203B\u62DB\u5F85URL\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u305F\u5834\u5408\u3053\u306E\u64CD\u4F5C\u306F\u4E0D\u8981\u3067\u3059"
            ),
            c()(),
            l(86, "div", 24)(87, "div", 25),
            o(88, "\u7533\u8FBC\u8005\u306E\u540D\u524D\u3092\u78BA\u8A8D\u3057\u3066\u62DB\u5F85\u3092\u627F\u8A8D"),
            c(),
            h(89, "img", 33),
            c(),
            l(90, "div", 24)(91, "div", 25),
            o(92, "\u540C\u884C\u8005\u4E00\u89A7\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059"),
            c(),
            h(93, "img", 34),
            l(94, "div", 28),
            o(
              95,
              "\u203B\u7533\u8FBC\u8005\u306E\u540C\u884C\u8005\u4E00\u89A7\u306B\u3082\u540C\u6642\u306B\u767B\u9332\u3055\u308C\u307E\u3059"
            ),
            c()()()(),
            l(96, "div", 17, 1)(98, "h3", 18)(99, "div", 19),
            o(100, "STEP 02"),
            c(),
            l(101, "div", 20),
            o(102, "\u304A\u7533\u8FBC\u307F\u6642\u306B\u540C\u884C\u8005\u3092\u9078\u629E\u3059\u308B"),
            c()(),
            l(103, "div", 21),
            o(
              104,
              "\u30C1\u30B1\u30C3\u30C8\u3092\u304A\u7533\u8FBC\u307F\u306E\u969B\u306B\u4E8B\u524D\u306B\u767B\u9332\u3057\u305F\u540C\u884C\u8005\u4E00\u89A7\u304B\u3089\u540C\u884C\u8005\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"
            ),
            c(),
            l(105, "div", 22)(106, "h4", 23),
            o(107, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u753B\u9762"),
            c(),
            l(108, "div", 24)(109, "div", 25),
            o(110, "\u30BF\u30C3\u30D7\u3057\u3066\u540C\u884C\u8005\u4E00\u89A7\u3092\u958B\u304F"),
            c(),
            h(111, "img", 35),
            c(),
            l(112, "div", 24)(113, "div", 25),
            o(
              114,
              "\u4E8B\u524D\u306B\u767B\u9332\u3055\u308C\u305F\u4E00\u89A7\u304B\u3089\u540C\u884C\u8005\u3092\u9078\u629E"
            ),
            c(),
            h(115, "img", 36),
            c(),
            l(116, "div", 24)(117, "div", 25),
            o(118, "\u540C\u884C\u8005\u3068\u3057\u3066\u8A2D\u5B9A\u3059\u308B\u3092\u30BF\u30C3\u30D7"),
            c(),
            h(119, "img", 37),
            c(),
            l(120, "div", 24)(121, "div", 25),
            o(
              122,
              "\u753B\u9762\u306B\u6CBF\u3063\u3066\u9032\u307F\u304A\u7533\u8FBC\u307F\u3092\u5B8C\u4E86\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002"
            ),
            c(),
            h(123, "img", 38),
            c()()()()(),
            l(124, "section", 2)(125, "h2", 3),
            o(126, "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F"),
            c(),
            l(127, "div", 39)(128, "div", 40),
            h(129, "input", 41),
            l(130, "label", 42)(131, "div", 43),
            o(
              132,
              "\u7533\u8FBC\u8005\u81EA\u8EAB\u3092\u540C\u884C\u8005\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u304B\uFF1F"
            ),
            c()(),
            l(133, "div", 44)(134, "div", 45),
            o(135, "\u3067\u304D\u307E\u305B\u3093\u3002"),
            c()()(),
            l(136, "div", 40),
            h(137, "input", 46),
            l(138, "label", 47)(139, "div", 43),
            o(
              140,
              "\u8907\u6570\u4EBA\u3067\u53C2\u52A0\u3057\u305F\u3044\u5834\u5408\u3001\u304A\u4E92\u3044\u3092\u540C\u884C\u8005\u3068\u3057\u3066\u7533\u8FBC\u307F\u3067\u304D\u307E\u3059\u304B\uFF1F"
            ),
            c()(),
            l(141, "div", 44)(142, "div", 45)(143, "div", 48),
            o(
              144,
              " \u304A\u4E92\u3044\u3092\u540C\u884C\u8005\u3068\u3057\u3066\u304A\u7533\u8FBC\u307F\u3044\u305F\u3060\u304F\u3053\u3068\u304C\u53EF\u80FD\u306A\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u304C\u3001\u540C\u3058\u516C\u6F14\u65E5\u3092\u7533\u8FBC\u8005\u30FB\u540C\u884C\u8005\u5165\u308C\u66FF\u3048\u3066\u304A\u7533\u8FBC\u307F\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001\u540C\u3058\u516C\u6F14\u65E5\u306E\u5F53\u9078\u306F1\u4EF6\u306E\u307F\u3068\u306A\u308A\u307E\u3059\u3002 "
            ),
            l(145, "div", 49),
            o(
              146,
              "\u203B\u5165\u308C\u66FF\u3048\u3066\u304A\u7533\u8FBC\u307F\u3044\u305F\u3060\u3044\u305F\u3068\u3057\u3066\u3082\u5F53\u9078\u78BA\u7387\u304C\u4E0A\u304C\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"
            ),
            c()()()()(),
            l(147, "div", 40),
            h(148, "input", 50),
            l(149, "label", 51)(150, "div", 43),
            o(
              151,
              " \u7533\u8FBC\u8005\u3068\u3057\u3066\u30C1\u30B1\u30C3\u30C8\u3092\u8CFC\u5165\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u4ED6\u306E\u65B9\u304C\u7533\u8FBC\u307F\u3057\u305F\u30C1\u30B1\u30C3\u30C8\u306E\u540C\u884C\u8005\u3068\u3057\u3066\u767B\u9332\u3067\u304D\u307E\u3059\u304B\uFF1F "
            ),
            c()(),
            l(152, "div", 44)(153, "div", 45),
            o(
              154,
              " \u3059\u3067\u306B\u516C\u6F14\u306E\u30C1\u30B1\u30C3\u30C8\u3092\u304A\u6301\u3061\u3067\u3042\u308C\u3070\u3001\u540C\u3058\u516C\u6F14\u306B\u540C\u884C\u8005\u3068\u3057\u3066\u767B\u9332\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 "
            ),
            c()()(),
            l(155, "div", 40),
            h(156, "input", 52),
            l(157, "label", 53)(158, "div", 43),
            o(
              159,
              "\u7533\u8FBC\u307F\u3057\u305F\u516C\u6F14\u306B\u540C\u884C\u8005\u767B\u9332\u304C\u3067\u304D\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u305F\u3044\u3067\u3059\u3002"
            ),
            c()(),
            l(160, "div", 44)(161, "div", 45),
            o(
              162,
              " \u540C\u884C\u8005\u6307\u5B9A\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3ID\u306B\u3054\u767B\u9332\u3044\u305F\u3060\u3044\u3066\u3044\u308B\u540C\u884C\u8005\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u5B9B\u306B\u300C\u540C\u884C\u8005\u767B\u9332\u5B8C\u4E86\u300D\u306E\u30E1\u30FC\u30EB\u304C\u5C4A\u304D\u307E\u3059\u3002\u8FF7\u60D1\u30E1\u30FC\u30EB\u30D5\u30A3\u30EB\u30BF\u306E\u8A2D\u5B9A\u3092\u884C\u3063\u3066\u3044\u308B\u5834\u5408\u306F\u300C@mail.asobiticket2.asobistore.jp\u300D\u304B\u3089\u306E\u30E1\u30FC\u30EB\u304C\u53D7\u4FE1\u3067\u304D\u308B\u8A2D\u5B9A\u3078\u4E8B\u524D\u306B\u3054\u5909\u66F4\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"
            ),
            h(163, "br"),
            o(
              164,
              "\u7533\u8FBC\u72B6\u6CC1\u304C\u540C\u884C\u8005\u306E\u30DE\u30A4\u30DA\u30FC\u30B8\u3067\u3054\u78BA\u8A8D\u3044\u305F\u3060\u3051\u308B\u3088\u3046\u306B\u306A\u308B\u306E\u306F\u3001\u3054\u5F53\u9078\u30FB\u5165\u91D1\u5F8C\u306B\u5BFE\u8C61\u516C\u6F14\u306E\u30C1\u30B1\u30C3\u30C8\u304C\u767A\u5238\u958B\u59CB\u3057\u3066\u304B\u3089\u3068\u306A\u308A\u307E\u3059\u3002 "
            ),
            c()()(),
            l(165, "div", 40),
            h(166, "input", 54),
            l(167, "label", 55)(168, "div", 43),
            o(
              169,
              " \u540C\u884C\u8005\u767B\u9332\u5F8C\u306B\u540C\u884C\u8005\u306E\u5909\u66F4\u306F\u3067\u304D\u307E\u3059\u304B\uFF1F\u307E\u305F\u3001\u540C\u884C\u8005\u3092\u5909\u66F4\u3057\u305F\u5F8C\u306B\u3001\u518D\u5EA6\u5909\u66F4\u3067\u304D\u307E\u3059\u304B\uFF1F "
            ),
            c()(),
            l(170, "div", 44)(171, "div", 45)(172, "div", 48),
            o(
              173,
              " \u62BD\u9078\u53D7\u4ED8\u306E\u5834\u5408\uFF1A\u304A\u7533\u8FBC\u307F\u671F\u9593\u5185\u3067\u3042\u308C\u3070\u53EF\u80FD\u3067\u3059\u3002\u4E00\u5EA6\u304A\u7533\u8FBC\u307F\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u305F\u5F8C\u3001\u6539\u3081\u3066\u304A\u7533\u8FBC\u307F\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002"
            ),
            h(174, "br"),
            o(
              175,
              "\u5148\u7740\u53D7\u4ED8\u306E\u5834\u5408\uFF1A\u304A\u7533\u8FBC\u307F\u30FB\u3054\u5165\u91D1\u5B8C\u4E86\u3055\u308C\u305F\u5834\u5408\u306F\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002 "
            ),
            l(176, "div", 49),
            o(
              177,
              " \u203B\u304A\u7533\u8FBC\u307F\u3055\u308C\u308B\u516C\u6F14\u306E\u53D7\u4ED8\u671F\u9593\u7D42\u4E86\u5F8C\u306F\u3001\u7533\u8FBC\u8005\u30FB\u540C\u884C\u8005\u3092\u5909\u66F4\u3059\u308B\u4E8B\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u30EA\u30BB\u30FC\u30EB\u3092\u884C\u3046\u5834\u5408\u306F\u3001\u7533\u8FBC\u8005\u30FB\u540C\u884C\u8005\u3092\u51FA\u54C1\u3059\u308B\u4E8B\u306F\u53EF\u80FD\u3067\u3059\u3002\u5404\u53D7\u4ED8\u306B\u3066\u3054\u78BA\u8A8D\u306E\u3046\u3048\u304A\u7533\u8FBC\u307F\u304F\u3060\u3055\u3044\u3002 "
            ),
            c()()()()()()();
        }
      },
      dependencies: [G, Ee],
      styles: [
        '[_nghost-%COMP%]{--background: #f7f7f9;display:block;margin-top:32px}.section[_ngcontent-%COMP%] + .section[_ngcontent-%COMP%]{margin-top:80px}.section-heading[_ngcontent-%COMP%]{font-size:2rem;font-weight:600;margin-bottom:32px;position:relative;text-align:center}.section-heading[_ngcontent-%COMP%]:after{background-color:var(--tpl-color-accent);content:"";display:block;height:5px;margin:8px auto 0;width:64px}@media screen and (max-width: 768px){.section-heading[_ngcontent-%COMP%]{font-size:1.9rem}.section-heading[_ngcontent-%COMP%]:after{width:40px}}.about-text[_ngcontent-%COMP%]{font-size:1.6rem;line-height:1.75}@media screen and (max-width: 768px){.about-text[_ngcontent-%COMP%]{font-size:1.5rem}}.about-note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.3rem;margin-top:12px}.about-note-item[_ngcontent-%COMP%]{line-height:1.4;margin-left:1em;text-indent:-1em}.about-note-item[_ngcontent-%COMP%] + .about-note-item[_ngcontent-%COMP%]{margin-top:6px}.about-signup[_ngcontent-%COMP%]{background-color:var(--background);margin-top:24px;padding:20px 24px 24px;text-align:center}@media screen and (max-width: 768px){.about-signup[_ngcontent-%COMP%]{padding:20px 16px 24px}}.about-signup-text[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;line-height:1.6}.about-signup-button[_ngcontent-%COMP%]{margin-top:12px}.flow-header[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.flow-header-step[_ngcontent-%COMP%]{background-color:var(--background);border-radius:10px;box-shadow:0 3px 6px #00000026;cursor:pointer;padding:16px 24px}@media screen and (min-width: 768.01px){.flow-header-step[_ngcontent-%COMP%]{transition:opacity .2s ease-out}.flow-header-step[_ngcontent-%COMP%]:hover{opacity:.8}}@media screen and (max-width: 768px){.flow-header-step[_ngcontent-%COMP%]{padding:12px 16px}}.flow-header-step-index[_ngcontent-%COMP%]{color:var(--tpl-color-primary);font-family:var(--tpl-number-font-family);font-size:2.3rem;font-weight:700}@media screen and (max-width: 768px){.flow-header-step-index[_ngcontent-%COMP%]{font-size:1.7rem}}.flow-header-step-title[_ngcontent-%COMP%]{font-size:1.7rem;line-height:1.4;margin-top:4px}@media screen and (max-width: 768px){.flow-header-step-title[_ngcontent-%COMP%]{font-size:1.3rem}}.flow-header-step-arrow[_ngcontent-%COMP%]{display:block;height:auto;margin:0 24px;transform:rotate(-90deg);width:20px}@media screen and (max-width: 768px){.flow-header-step-arrow[_ngcontent-%COMP%]{margin:0 12px;width:16px}}.flow-content[_ngcontent-%COMP%]{padding-top:56px}@media screen and (max-width: 768px){.flow-content[_ngcontent-%COMP%]{padding-top:40px}}.flow-content-heading[_ngcontent-%COMP%]{text-align:center}.flow-content-heading-index[_ngcontent-%COMP%]{color:var(--tpl-color-primary);font-family:var(--tpl-number-font-family);font-size:3.7rem;font-weight:700}@media screen and (max-width: 768px){.flow-content-heading-index[_ngcontent-%COMP%]{font-size:3rem}}.flow-content-heading-title[_ngcontent-%COMP%]{font-size:1.9rem;font-weight:600;line-height:1.4;margin-top:2px}@media screen and (max-width: 768px){.flow-content-heading-title[_ngcontent-%COMP%]{font-size:1.7rem}}.flow-content-text[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1.75;margin:24px 0;text-align:center}.flow-content-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:var(--tpl-color-accent);font-style:normal;font-weight:600}@media screen and (max-width: 768px){.flow-content-text[_ngcontent-%COMP%]{font-size:1.4rem;margin:16px 0;text-align:left}}.flow-content-section[_ngcontent-%COMP%]{background-color:var(--background);border-radius:10px;margin:0 auto;max-width:400px;overflow:hidden;padding:32px 24px}.flow-content-section[_ngcontent-%COMP%] + .flow-content-section[_ngcontent-%COMP%]{margin-top:32px}@media screen and (max-width: 768px){.flow-content-section[_ngcontent-%COMP%]{max-width:100%;padding:24px 16px}}.flow-content-section-title[_ngcontent-%COMP%]{background-color:var(--tpl-color-primary);color:var(--tpl-color-primary-contrast);font-size:1.7rem;font-weight:600;margin:-32px -24px 24px;padding:16px 24px;text-align:center}@media screen and (max-width: 768px){.flow-content-section-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:-24px -16px 24px;padding:12px 16px}}.flow-content-item[_ngcontent-%COMP%]{margin:0 auto;max-width:280px}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]{margin-top:32px}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]:before{background:url(/assets/guide/pre-companion/arrow.svg) center center/cover no-repeat;content:"";display:block;height:18px;margin:0 auto 32px;width:20px}@media screen and (max-width: 768px){.flow-content-item[_ngcontent-%COMP%]{max-width:100%}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]{margin-top:24px}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]:before{height:15px;margin-bottom:24px;width:16px}}.flow-content-item-title[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;margin-bottom:10px}.flow-content-item-note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.3rem;margin-top:8px}.flow-content-item-image[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 3px 6px #00000026;display:block;height:auto;width:100%}.faq-item[_ngcontent-%COMP%] + .faq-item[_ngcontent-%COMP%]{border-top:1px solid var(--tpl-color-border)}.faq-item-check[_ngcontent-%COMP%]{display:none}.faq-item-q[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid var(--app-color-gold);cursor:pointer;display:flex;font-size:1.7rem;letter-spacing:.025em;line-height:1.8;padding:20px 0}.faq-item-q[_ngcontent-%COMP%]:before{color:var(--tpl-color-primary);content:"Q.";font-family:var(--tpl-number-font-family);font-size:4.2rem;font-weight:400;line-height:1;margin-right:24px}.faq-item-q[_ngcontent-%COMP%]:after{border-bottom:2px solid var(--tpl-color-primary);border-right:2px solid var(--tpl-color-primary);content:"";flex-shrink:0;height:12px;margin-left:auto;transform:rotate(45deg);transition:transform .2s ease-out;width:12px}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-q[_ngcontent-%COMP%]:after{transform:rotate(-135deg)}@media screen and (max-width: 768px){.faq-item-q[_ngcontent-%COMP%]{font-size:1.5rem;padding:12px 0}.faq-item-q[_ngcontent-%COMP%]:before{font-size:3.5rem;margin-right:16px}.faq-item-q[_ngcontent-%COMP%]:after{height:8px;width:8px}}.faq-item-q-inner[_ngcontent-%COMP%]{flex:1;margin-right:16px}.faq-item-a[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:max-height .3s ease-out}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a[_ngcontent-%COMP%]{max-height:200px}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a[_ngcontent-%COMP%]   .faq-item-a-inner[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}@media screen and (max-width: 768px){.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a[_ngcontent-%COMP%]{max-height:400px}}.faq-item-a-inner[_ngcontent-%COMP%]{align-items:flex-start;display:flex;flex:1;font-size:1.5rem;line-height:1.8;opacity:0;padding:10px 0 20px;transform:translateY(-10px);transition:opacity .3s ease-out,transform .3s ease-out}.faq-item-a-inner[_ngcontent-%COMP%]:before{color:var(--tpl-color-accent);content:"A.";font-family:var(--tpl-number-font-family);font-size:4.2rem;font-weight:400;line-height:1;margin-right:24px;margin-top:-8px}@media screen and (max-width: 768px){.faq-item-a-inner[_ngcontent-%COMP%]{font-size:1.4rem}.faq-item-a-inner[_ngcontent-%COMP%]:before{font-size:3.5rem;margin-right:16px}}.faq-item-a-note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.3rem;margin-top:12px}',
      ],
    }));
  let i = e;
  return i;
})();
var zn = (() => {
  let e = class e {};
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["page-resale"]],
      standalone: !0,
      features: [V],
      decls: 335,
      vars: 0,
      consts: [
        [1, "title"],
        [1, "section"],
        [1, "overview"],
        [1, "overview-item"],
        [1, "overview-item-note"],
        [1, "section-heading"],
        [1, "subsection"],
        [1, "subsection-heading"],
        [1, "subsection-content"],
        [1, "text-attention"],
        [1, "subsection-content", "unordered-list"],
        [1, "info"],
        [1, "info-title"],
        ["href", "https://www.7ps.jp/lp-receive/", "target", "_blank"],
        ["href", "https://www.zengin-net.jp/zengin_system/member/", "target", "_blank"],
        [1, "unordered-list"],
        [1, "flow-content"],
        [1, "flow-content-heading"],
        [1, "flow-content-heading-index"],
        [1, "flow-content-section"],
        [1, "flow-content-section-title"],
        [1, "flow-content-section-content", "numbered-list"],
        ["routerLink", "/mypage/entries"],
        [1, "flow-content-section-content", "unordered-list"],
        [1, "text-bold"],
        [1, "a-paragraph"],
        [1, "text-small"],
        ["routerLink", "/mypage"],
        ["href", "https://faq.asobiticket2.asobistore.jp/hc/ja/requests/new", "target", "_blank"],
        ["href", "https://faq.asobiticket2.asobistore.jp/hc/ja", "target", "_blank"],
      ],
      template: function (n, r) {
        n & 1 &&
          (l(0, "h1", 0),
          o(1, " \u300CASOBI TICKET \u516C\u5F0F\u30EA\u30BB\u30FC\u30EB\u300D "),
          h(2, "br"),
          o(
            3,
            ` \u306B\u3064\u3044\u3066\u306E\u3054\u6848\u5185
`
          ),
          c(),
          l(4, "section", 1)(5, "div", 2)(6, "div", 3)(7, "p"),
          o(
            8,
            " \u300CASOBI TICKET\u516C\u5F0F\u30EA\u30BB\u30FC\u30EB\u300D\u306F\u30C1\u30B1\u30C3\u30C8\u8CFC\u5165\u5F8C\u306B\u3054\u6765\u5834\u3044\u305F\u3060\u3051\u306A\u304F\u306A\u3063\u305F\u65B9\u3068\u30C1\u30B1\u30C3\u30C8\u8CFC\u5165\u3092\u3054\u5E0C\u671B\u306E\u65B9\u3092\u5BFE\u8C61\u306B\u3001\u62BD\u9078\u306B\u3088\u308B\u81EA\u52D5\u30DE\u30C3\u30C1\u30F3\u30B0\u3092\u884C\u3046\u30B7\u30B9\u30C6\u30E0\u3067\u3059\u3002 "
          ),
          c(),
          l(9, "p", 4),
          o(
            10,
            " \u30EA\u30BB\u30FC\u30EB\u306E\u5B9F\u65BD\u306F\u30A4\u30D9\u30F3\u30C8\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002\u5B9F\u65BD\u6709\u7121\u3084\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306F\u30A4\u30D9\u30F3\u30C8\u516C\u5F0F\u30B5\u30A4\u30C8\u3088\u308A\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()(),
          l(11, "div", 3)(12, "p"),
          o(
            13,
            "\u30EA\u30BB\u30FC\u30EB\u306F\u62BD\u9078\u8CA9\u58F2\u3068\u306A\u308A\u307E\u3059\u3002 \u30EA\u30BB\u30FC\u30EB\u7D42\u4E86\u65E5\u307E\u3067\u6BCE\u65E5\u62BD\u9078\u3092\u884C\u3044\u307E\u3059\u3002\uFF08\u6BCE\u65E510:00\u4EE5\u964D\u62BD\u9078\uFF09"
          ),
          c()(),
          l(14, "div", 3)(15, "p"),
          o(
            16,
            "\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u6642\u3001\u51FA\u54C1\u8005\u3001\u7533\u8FBC\u8005\u3068\u3082\u306B\u624B\u6570\u6599\u304C\u767A\u751F\u3044\u305F\u3057\u307E\u3059\u3002"
          ),
          c()(),
          l(17, "div", 3)(18, "p"),
          o(
            19,
            "\u76F8\u624B\u3092\u6307\u5B9A\u3057\u3066\u306E\u8B72\u6E21\u306F\u3067\u304D\u307E\u305B\u3093\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"
          ),
          c()()()(),
          l(20, "section", 1)(21, "h2", 5),
          o(22, "\u51FA\u54C1\u8005\u306E\u6D41\u308C"),
          c(),
          l(23, "div", 6)(24, "div", 7),
          o(25, "\u3010\u51FA\u54C1\u5BFE\u8C61\u30C1\u30B1\u30C3\u30C8\u3011"),
          c(),
          l(26, "div", 8)(27, "p"),
          o(28, " \u30A4\u30D9\u30F3\u30C8\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002"),
          h(29, "br"),
          o(
            30,
            " \u516C\u5F0F\u30B5\u30A4\u30C8\u307E\u305F\u306F\u5BFE\u8C61\u30A4\u30D9\u30F3\u30C8 \u30EA\u30BB\u30FC\u30EB\u53D7\u4ED8\u5185\u306B\u6CE8\u610F\u4E8B\u9805\u3092\u8A18\u8F09\u3057\u3066\u304A\u308A\u307E\u3059\u306E\u3067\u5FC5\u305A\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()()(),
          l(31, "div", 6)(32, "div", 7)(33, "span", 9),
          o(34, "\u3010\u5FC5\u305A\u304A\u8AAD\u307F\u304F\u3060\u3055\u3044\u3011"),
          c()(),
          l(35, "ul", 10)(36, "li"),
          o(
            37,
            " \u30EA\u30BB\u30FC\u30EB\u3078\u51FA\u54C1\u3055\u308C\u3066\u3082\u3001\u5FC5\u305A\u3057\u3082\u30EA\u30BB\u30FC\u30EB\u304C\u6210\u7ACB\u3059\u308B\u3068\u306F\u9650\u308A\u307E\u305B\u3093\u3002\u62BD\u9078\u306B\u3088\u308A\u30EA\u30BB\u30FC\u30EB\u4E0D\u6210\u7ACB\u3068\u306A\u3063\u305F\u5834\u5408\u3001\u30C1\u30B1\u30C3\u30C8\u306F\u5909\u308F\u3089\u305A\u5143\u306E\u3054\u8CFC\u5165\u8005\u306E\u3082\u306E\u3068\u306A\u308A\u3001\u30C1\u30B1\u30C3\u30C8\u4EE3\u91D1\u306E\u8FD4\u91D1\u3082\u3054\u3056\u3044\u307E\u305B\u3093\u3002 "
          ),
          c(),
          l(38, "li"),
          o(
            39,
            "\u8907\u6570\u679A\u3092\u51FA\u54C1\u3057\u3066\u3082\u3001\u4E00\u90E8\u306E\u307F\u30EA\u30BB\u30FC\u30EB\u304C\u6210\u7ACB\u3059\u308B\u53EF\u80FD\u6027\u304C\u3054\u3056\u3044\u307E\u3059\u3002"
          ),
          c(),
          l(40, "li"),
          o(
            41,
            "\u4E00\u5EA6\u304A\u7533\u8FBC\u307F\u3044\u305F\u3060\u304F\u3068\u3001\u51FA\u54C1\u306E\u53D6\u6D88\u3057\u3092\u884C\u308F\u306A\u3044\u9650\u308A\u3001\u81EA\u52D5\u7684\u306B\u6BCE\u65E5\u62BD\u9078\u306E\u5BFE\u8C61\u3068\u306A\u308A\u307E\u3059\u3002"
          ),
          c(),
          l(42, "li"),
          o(
            43,
            "\u30EA\u30BB\u30FC\u30EB\u304C\u6210\u7ACB\u3057\u305F\u5834\u5408\u306B\u9650\u308A\u3001\u300C\u7533\u8FBC\u8A73\u7D30\u300D\u30DA\u30FC\u30B8\u306B\u300E\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u300F\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002"
          ),
          c(),
          l(44, "li"),
          o(
            45,
            "\u30EA\u30BB\u30FC\u30EB\u304C\u6210\u7ACB\u3057\u305F\u5834\u5408\u306F\u624B\u6570\u6599\u3092\u5DEE\u3057\u5F15\u3044\u3066\u3054\u8FD4\u91D1\u3044\u305F\u3057\u307E\u3059\u3002"
          ),
          c(),
          l(46, "li"),
          o(
            47,
            "\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u5F8C\u306E\u5909\u66F4\u30FB\u53D6\u6D88\u3057\u306F\u4E00\u5207\u3067\u304D\u307E\u305B\u3093\u3002"
          ),
          c(),
          l(48, "li"),
          o(
            49,
            " \u8FD4\u91D1\u624B\u7D9A\u304D\u306F\u3001\u51FA\u54C1\u516C\u6F14\u7D42\u4E86\u5F8C\u3092\u4E88\u5B9A\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u8FD4\u91D1\u624B\u7D9A\u304D\u958B\u59CB\u3068\u306A\u308A\u6B21\u7B2C\u3054\u767B\u9332\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3078\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          c(),
          l(50, "li"),
          o(
            51,
            " \u8FD4\u91D1\u624B\u7D9A\u304D\u65B9\u6CD5\u306F\u4EE5\u4E0B\u3088\u308A\u3054\u9078\u629E\u3044\u305F\u3060\u3051\u307E\u3059\u3002 "
          ),
          l(52, "p", 11)(53, "span", 12),
          o(
            54,
            "\uFF1C\u30BB\u30D6\u30F3ATM\u53D7\u53D6\uFF08\u73FE\u91D1\u53D7\u53D6\u30B5\u30FC\u30D3\u30B9\uFF09\uFF1E"
          ),
          c(),
          h(55, "br"),
          o(
            56,
            " \u304A\u8FD1\u304F\u306E\u30BB\u30D6\u30F3\u9280\u884CATM\u306B\u3066\u8FD4\u91D1\u306E\u304A\u624B\u7D9A\u304D\u304C\u53EF\u80FD\u3067\u3059\u3002 "
          ),
          h(57, "br"),
          o(
            58,
            " \u53D7\u53D6\u756A\u53F7\u53D6\u5F97\u5F8C\u3001\u30BB\u30D6\u30F3\u9280\u884CATM \u306B\u30665\u65E5\u9593\u4EE5\u5185\u306B\u304A\u53D7\u53D6\u308A\u304F\u3060\u3055\u3044\u3002 "
          ),
          h(59, "br"),
          o(
            60,
            " \u30BB\u30D6\u30F3\u9280\u884CATM\u53D7\u53D6\u306E\u64CD\u4F5C\u65B9\u6CD5\u306B\u3064\u304D\u307E\u3057\u3066\u306F "
          ),
          l(61, "a", 13),
          o(62, "\u3053\u3061\u3089"),
          c(),
          o(63, " \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002 "),
          h(64, "br"),
          o(
            65,
            " \u203B\u8FD4\u91D1\u624B\u7D9A\u304D\u306FGMO\u30DA\u30A4\u30E1\u30F3\u30C8\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u306E\u8FD4\u91D1\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u4E8B\u524D\u306B \u300C@gmo-pg.com\u300D\u304B\u3089\u306E\u30E1\u30FC\u30EB\u3092\u53D7\u3051\u53D6\u308C\u308B\u3088\u3046\u8A2D\u5B9A\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          h(66, "br"),
          c(),
          l(67, "p", 11)(68, "span", 12),
          o(69, "\uFF1C\u9280\u884C\u53E3\u5EA7\u3078\u306E\u304A\u632F\u8FBC\u307F\uFF1E"),
          c(),
          h(70, "br"),
          o(
            71,
            " \u3054\u6307\u5B9A\u3044\u305F\u3060\u3044\u305F\u53E3\u5EA7\u3078\u304A\u632F\u8FBC\u306B\u3066\u3054\u8FD4\u91D1\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          h(72, "br"),
          o(
            73,
            " \u53D6\u6271\u53EF\u80FD\u306A\u9280\u884C\uFF08\u4FE1\u91D1\u3001\u4FE1\u7D44\u542B\u3080\uFF09\u306F "
          ),
          l(74, "a", 14),
          o(75, "\u3053\u3061\u3089"),
          c(),
          o(76, " \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002 "),
          c()(),
          l(77, "li"),
          o(
            78,
            " \u3054\u8FD4\u91D1\u6642\u306E\u3054\u6848\u5185\u30E1\u30FC\u30EB\u3084\u9280\u884C\u632F\u8FBC\u660E\u7D30\u306B\u8A18\u8F09\u3055\u308C\u308B\u632F\u8FBC\u5143\u306E\u540D\u7FA9\u306F\u305D\u308C\u305E\u308C\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002 "
          ),
          h(79, "br"),
          o(
            80,
            " \u3053\u3061\u3089\u306F\u30B7\u30B9\u30C6\u30E0\u4E0A\u306E\u4ED5\u69D8\u3068\u306A\u308A\u307E\u3059\u305F\u3081\u3001\u3054\u4E86\u627F\u306E\u307B\u3069\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          h(81, "br"),
          l(82, "ul", 15)(83, "li"),
          o(84, " \u53E3\u5EA7\u3067\u306E\u8868\u8A18 "),
          h(85, "br"),
          o(86, " \uFF71\uFF7F\uFF8B\uFF9E\uFF81\uFF79\uFF6F\uFF84 "),
          c(),
          l(87, "li"),
          o(88, " \u4E00\u90E8\u91D1\u878D\u6A5F\u95A2\u3067\u306F\u4E0B\u8A18\u8868\u8A18 "),
          h(89, "br"),
          o(90, " \uFF7C\uFF9E\uFF70\uFF74\uFF91\uFF75\uFF70 "),
          c(),
          l(91, "li"),
          o(92, " \u30E1\u30FC\u30EB\u3067\u306E\u8868\u8A18"),
          h(93, "br"),
          o(
            94,
            " \u682A\u5F0F\u4F1A\u793E\u30C6\u30A4\u30D1\u30FC\u30BA/\uFF71\uFF7F\uFF8B\uFF9E\uFF81\uFF79\uFF6F\uFF84 "
          ),
          c()()()()(),
          l(95, "div", 16)(96, "h3", 17)(97, "div", 18),
          o(98, "STEP 01"),
          c()(),
          l(99, "div", 19)(100, "h4", 20),
          o(101, "\u51FA\u54C1\u3059\u308B"),
          c(),
          l(102, "ol", 21)(103, "li")(104, "a", 22),
          o(105, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            106,
            " \u3088\u308A\u3001\u51FA\u54C1\u3059\u308B\u516C\u6F14\u306E\u7533\u8FBC\u8A73\u7D30\u30DA\u30FC\u30B8\u306B\u3066\u300C\u30EA\u30BB\u30FC\u30EB\u306B\u51FA\u54C1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059"
          ),
          h(107, "br"),
          o(
            108,
            " \u30FB\u30EA\u30BB\u30FC\u30EB\u62BD\u9078\u4E2D\uFF08\u6BCE\u65E510:00\uFF5E\u62BD\u9078\u7D42\u4E86\u307E\u3067\uFF09\u306F\u51FA\u54C1\u3067\u304D\u307E\u305B\u3093\u3002 "
          ),
          c(),
          l(109, "li"),
          o(
            110,
            " \u51FA\u54C1\u3059\u308B\u30C1\u30B1\u30C3\u30C8\u3092\u9078\u629E\u5F8C\u300C\u6B21\u3078\u300D\u3092\u62BC\u3057\u3001\u51FA\u54C1\u5185\u5BB9\u3092\u78BA\u8A8D\u3001\u6CE8\u610F\u4E8B\u9805\u306B\u540C\u610F\u306E\u4E0A\u3001\u300C\u3053\u306E\u5185\u5BB9\u3067\u7533\u8FBC\u3080\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059"
          ),
          h(111, "br"),
          o(
            112,
            " \u203B\u8907\u6570\u679A\u51FA\u54C1\u3057\u3066\u3082\u3001\u4E00\u90E8\u306E\u307F\u30EA\u30BB\u30FC\u30EB\u304C\u6210\u7ACB\u3059\u308B\u53EF\u80FD\u6027\u304C\u3054\u3056\u3044\u307E\u3059\u3002 "
          ),
          c(),
          l(113, "li"),
          o(
            114,
            "\u51FA\u54C1\u5B8C\u4E86\u5F8C\u3001\u78BA\u8A8D\u30E1\u30FC\u30EB\u304C\u5C4A\u304D\u307E\u3059\u3002"
          ),
          c()()(),
          l(115, "div", 19)(116, "h4", 20),
          o(117, "\u51FA\u54C1\u306E\u53D6\u6D88\u3057"),
          c(),
          l(118, "ol", 21)(119, "li"),
          o(
            120,
            "\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u5F8C\u306E\u5909\u66F4\u30FB\u53D6\u6D88\u3057\u306F\u4E00\u5207\u3067\u304D\u307E\u305B\u3093\u3002"
          ),
          c(),
          l(121, "li")(122, "a", 22),
          o(123, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            124,
            "\uFF1E\u7533\u8FBC\u8A73\u7D30\u30DA\u30FC\u30B8\u300C\u51FA\u54C1\u53D6\u308A\u6D88\u3057\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059 "
          ),
          l(125, "ul", 15)(126, "li"),
          o(
            127,
            "\u30EA\u30BB\u30FC\u30EB\u62BD\u9078\u4E2D\uFF08\u6BCE\u65E510:00\uFF5E\u62BD\u9078\u7D42\u4E86\u307E\u3067\uFF09\u306F\u53D6\u6D88\u3057\u304C\u3067\u304D\u307E\u305B\u3093\u3002"
          ),
          c(),
          l(128, "li"),
          o(
            129,
            " \u300C\u51FA\u54C1\u53D6\u308A\u6D88\u3057\u300D\u30DC\u30BF\u30F3\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u3066\u3082\u3001\u30EA\u30BB\u30FC\u30EB\u7533\u8FBC\u8005\u306E\u5165\u91D1\u5F85\u3061\u306E\u5834\u5408\u3001\u53D6\u6D88\u3057\u304C\u3067\u304D\u307E\u305B\u3093\u3002"
          ),
          h(130, "br"),
          o(
            131,
            " \uFF08\u7533\u8FBC\u8005\u304C\u5165\u91D1\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30EA\u30BB\u30FC\u30EB\u306F\u6210\u7ACB\u3057\u307E\u305B\u3093\uFF09 "
          ),
          c()()(),
          l(132, "li"),
          o(
            133,
            " \u53D6\u6D88\u3057\u5E0C\u671B\u5185\u5BB9\u3068\u5408\u3063\u3066\u3044\u308B\u304B\u3092\u78BA\u8A8D\u3057\u3001\u300C\u6C7A\u5B9A\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059"
          ),
          h(134, "br"),
          o(
            135,
            " \u53D6\u6D88\u3057\u5B8C\u4E86\u5F8C\u3001\u78BA\u8A8D\u30E1\u30FC\u30EB\u304C\u5C4A\u304D\u307E\u3059\u3002"
          ),
          h(136, "br"),
          o(137, " \u30FB\u300C"),
          l(138, "a", 22),
          o(139, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(140, "\u300D\u30DA\u30FC\u30B8\u3067\u3082\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "),
          c()()()(),
          l(141, "div", 16)(142, "h3", 17)(143, "div", 18),
          o(144, "STEP 02"),
          c()(),
          l(145, "div", 19)(146, "h4", 20),
          o(147, "\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u306E\u78BA\u8A8D"),
          c(),
          l(148, "ul", 23)(149, "li"),
          o(
            150,
            "\u30EA\u30BB\u30FC\u30EB\u7D42\u4E86\u65E5\u307E\u3067\u6BCE\u65E5 10:00\u4EE5\u964D\u306B\u62BD\u9078\u304C\u884C\u308F\u308C\u307E\u3059\u3002"
          ),
          c(),
          l(151, "li"),
          o(
            152,
            "\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u306F\u3001\u7533\u8FBC\u8005\u304C\u6C7A\u6E08\u3092\u5B8C\u4E86\u3057\u305F\u30BF\u30A4\u30DF\u30F3\u30B0\u306B\u306A\u308A\u307E\u3059\u3002"
          ),
          c(),
          l(153, "li")(154, "a", 22),
          o(155, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            156,
            " \uFF1E\u51FA\u54C1\u3055\u308C\u305F\u516C\u6F14\u306E\u300C\u7533\u8FBC\u8A73\u7D30\u300D\u304B\u3089\u30EA\u30BB\u30FC\u30EB\u306E\u7D50\u679C\u304C\u3054\u78BA\u8A8D\u3044\u305F\u3060\u3051\u307E\u3059\u3002 "
          ),
          c(),
          l(157, "li"),
          o(
            158,
            " \u30EA\u30BB\u30FC\u30EB\u304C\u6210\u7ACB\u3057\u305F\u65B9\u306B\u306F\u30B5\u30DD\u30FC\u30C8\u3067\u9806\u6B21\u30E1\u30FC\u30EB\u3067\u3082\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u304C\u3001\u5FC5\u305A\u3054\u81EA\u8EAB\u306E "
          ),
          l(159, "a", 22),
          o(160, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(161, " \u3067\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "),
          c(),
          l(162, "li"),
          o(
            163,
            "\u30EA\u30BB\u30FC\u30EB\u4E0D\u6210\u7ACB\u306E\u5834\u5408\u3001\u30C1\u30B1\u30C3\u30C8\u306F\u5909\u308F\u3089\u305A\u5143\u306E\u3054\u8CFC\u5165\u8005\u306E\u3082\u306E\u3068\u306A\u308A\u3001\u30C1\u30B1\u30C3\u30C8\u4EE3\u91D1\u306E\u8FD4\u91D1\u3082\u3054\u3056\u3044\u307E\u305B\u3093\u3002"
          ),
          c()()()(),
          l(164, "div", 16)(165, "h3", 17)(166, "div", 18),
          o(167, "STEP 03"),
          c()(),
          l(168, "div", 19)(169, "h4", 20),
          o(170, "\u8FD4\u91D1\u624B\u7D9A\u304D"),
          c(),
          l(171, "ul", 15)(172, "li"),
          o(
            173,
            " \u8FD4\u91D1\u624B\u7D9A\u304D\u306F\u5404\u30A4\u30D9\u30F3\u30C8\u304B\u3089\u7D041\u30F5\u6708\u5F8C\u3092\u4E88\u5B9A\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u8FD4\u91D1\u624B\u7D9A\u304D\u958B\u59CB\u3068\u306A\u308A\u6B21\u7B2C\u3054\u767B\u9332\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3078\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          c(),
          l(174, "li"),
          o(
            175,
            " \u8FD4\u91D1\u624B\u7D9A\u304D\u65B9\u6CD5\u306F\u4EE5\u4E0B\u3088\u308A\u3054\u9078\u629E\u3044\u305F\u3060\u3051\u307E\u3059\u3002 "
          ),
          l(176, "p", 11)(177, "span", 12),
          o(
            178,
            "\uFF1C\u30BB\u30D6\u30F3ATM\u53D7\u53D6\uFF08\u73FE\u91D1\u53D7\u53D6\u30B5\u30FC\u30D3\u30B9\uFF09\uFF1E"
          ),
          c(),
          h(179, "br"),
          o(
            180,
            " \u304A\u8FD1\u304F\u306E\u30BB\u30D6\u30F3\u9280\u884CATM\u306B\u3066\u8FD4\u91D1\u306E\u304A\u624B\u7D9A\u304D\u304C\u53EF\u80FD\u3067\u3059\u3002 "
          ),
          h(181, "br"),
          o(
            182,
            " \u53D7\u53D6\u756A\u53F7\u53D6\u5F97\u5F8C\u3001\u30BB\u30D6\u30F3\u9280\u884CATM \u306B\u30665\u65E5\u9593\u4EE5\u5185\u306B\u304A\u53D7\u53D6\u308A\u304F\u3060\u3055\u3044\u3002 "
          ),
          h(183, "br"),
          o(
            184,
            " \u30BB\u30D6\u30F3\u9280\u884CATM\u53D7\u53D6\u306E\u64CD\u4F5C\u65B9\u6CD5\u306B\u3064\u304D\u307E\u3057\u3066\u306F "
          ),
          l(185, "a", 13),
          o(186, "\u3053\u3061\u3089"),
          c(),
          o(187, " \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002 "),
          h(188, "br"),
          o(
            189,
            " \u203B\u8FD4\u91D1\u624B\u7D9A\u304D\u306FGMO\u30DA\u30A4\u30E1\u30F3\u30C8\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u306E\u8FD4\u91D1\u30B7\u30B9\u30C6\u30E0\u3092\u4F7F\u7528\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u4E8B\u524D\u306B \u300C@gmo-pg.com\u300D\u304B\u3089\u306E\u30E1\u30FC\u30EB\u3092\u53D7\u3051\u53D6\u308C\u308B\u3088\u3046\u8A2D\u5B9A\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          h(190, "br"),
          c(),
          l(191, "p", 11)(192, "span", 12),
          o(193, "\uFF1C\u9280\u884C\u53E3\u5EA7\u3078\u306E\u304A\u632F\u8FBC\u307F\uFF1E"),
          c(),
          h(194, "br"),
          o(
            195,
            " \u3054\u6307\u5B9A\u3044\u305F\u3060\u3044\u305F\u53E3\u5EA7\u3078\u304A\u632F\u8FBC\u306B\u3066\u3054\u8FD4\u91D1\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          h(196, "br"),
          o(
            197,
            " \u53D6\u6271\u53EF\u80FD\u306A\u9280\u884C\uFF08\u4FE1\u91D1\u3001\u4FE1\u7D44\u542B\u3080\uFF09\u306F "
          ),
          l(198, "a", 14),
          o(199, "\u3053\u3061\u3089"),
          c(),
          o(200, " \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002 "),
          c()(),
          l(201, "li"),
          o(
            202,
            " \u8FD4\u91D1\u624B\u7D9A\u304D\u304C\u958B\u59CB\u3068\u306A\u308A\u307E\u3057\u305F\u3089\u3001\u8FD4\u91D1\u624B\u7D9A\u304D\u671F\u9593\u5185\u306B "
          ),
          l(203, "a", 22),
          o(204, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            205,
            " \uFF1E\u51FA\u54C1\u3055\u308C\u305F\u516C\u6F14\u306E\u300C\u7533\u8FBC\u8A73\u7D30\u300D\u306B\u8868\u793A\u3055\u308C\u308B\u300C\u8FD4\u91D1\u30EA\u30AF\u30A8\u30B9\u30C8\u300D\u30DC\u30BF\u30F3\u3088\u308A\u304A\u624B\u7D9A\u304D\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002 "
          ),
          c(),
          l(206, "li"),
          o(
            207,
            " \u3054\u8CFC\u5165\u3044\u305F\u3060\u3044\u305F\u30C1\u30B1\u30C3\u30C8\u4EE3\u91D1\u3088\u308A\u3001\u30EA\u30BB\u30FC\u30EB\u624B\u6570\u6599\u3092\u5DEE\u5F15\u3044\u305F\u91D1\u984D\u3092\u3054\u8FD4\u91D1\u3044\u305F\u3057\u307E\u3059\u3002\u30C1\u30B1\u30C3\u30C8\u3054\u8CFC\u5165\u6642\u306E\u5404\u7A2E\u624B\u6570\u6599\u306F\u3054\u8FD4\u91D1\u306E\u5BFE\u8C61\u5916\u3068\u306A\u308A\u307E\u3059\u3002 "
          ),
          c()(),
          l(208, "p", 24),
          o(
            209,
            "\u30EA\u30BB\u30FC\u30EB\u6210\u7ACB\u624B\u6570\u6599\uFF1A770\u5186 / \u679A\uFF08\u7A0E\u8FBC\uFF09"
          ),
          c(),
          l(210, "div", 24),
          o(211, "\u9001\u91D1\u624B\u6570\u6599\uFF1A220\u5186 / \u679A\uFF08\u7A0E\u8FBC\uFF09"),
          c(),
          l(212, "ul", 15)(213, "li"),
          o(
            214,
            " \u3054\u8FD4\u91D1\u6642\u306E\u3054\u6848\u5185\u30E1\u30FC\u30EB\u3084\u9280\u884C\u632F\u8FBC\u660E\u7D30\u306B\u8A18\u8F09\u3055\u308C\u308B\u632F\u8FBC\u5143\u306E\u540D\u7FA9\u306F\u305D\u308C\u305E\u308C\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002"
          ),
          h(215, "br"),
          o(
            216,
            " \u3053\u3061\u3089\u306F\u30B7\u30B9\u30C6\u30E0\u4E0A\u306E\u4ED5\u69D8\u3068\u306A\u308A\u307E\u3059\u305F\u3081\u3001\u3054\u4E86\u627F\u306E\u307B\u3069\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"
          ),
          h(217, "br"),
          l(218, "ul", 15)(219, "li"),
          o(220, " \u53E3\u5EA7\u3067\u306E\u8868\u8A18"),
          h(221, "br"),
          o(222, " \uFF71\uFF7F\uFF8B\uFF9E\uFF81\uFF79\uFF6F\uFF84 "),
          c(),
          l(223, "li"),
          o(224, " \u4E00\u90E8\u91D1\u878D\u6A5F\u95A2\u3067\u306F\u4E0B\u8A18\u8868\u8A18"),
          h(225, "br"),
          o(226, " \uFF7C\uFF9E\uFF70\uFF74\uFF91\uFF75\uFF70 "),
          c(),
          l(227, "li"),
          o(228, " \u30E1\u30FC\u30EB\u3067\u306E\u8868\u8A18"),
          h(229, "br"),
          o(
            230,
            " \u682A\u5F0F\u4F1A\u793E\u30C6\u30A4\u30D1\u30FC\u30BA/\uFF71\uFF7F\uFF8B\uFF9E\uFF81\uFF79\uFF6F\uFF84 "
          ),
          c()()(),
          l(231, "li"),
          o(
            232,
            "\u4E0D\u6210\u7ACB\u306E\u5834\u5408\u306F\u767A\u751F\u3057\u307E\u305B\u3093\u3002\u30C1\u30B1\u30C3\u30C8\u3054\u8CFC\u5165\u6642\u306E\u5404\u7A2E\u624B\u6570\u6599\u306F\u3054\u8FD4\u91D1\u306E\u5BFE\u8C61\u5916\u3068\u306A\u308A\u307E\u3059\u3002"
          ),
          c()()()()(),
          l(233, "section", 1)(234, "h2", 5),
          o(235, "\u7533\u8FBC\u8005\u306E\u6D41\u308C"),
          c(),
          l(236, "div", 6)(237, "div", 7),
          o(238, "\u3010\u30C1\u30B1\u30C3\u30C8\u6599\u91D1\u3011"),
          c(),
          l(239, "div", 8)(240, "p"),
          o(241, " \u30A4\u30D9\u30F3\u30C8\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002"),
          h(242, "br"),
          o(
            243,
            " \u7533\u8FBC\u307F\u5E0C\u671B\u306E\u30EA\u30BB\u30FC\u30EB\u53D7\u4ED8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()()(),
          l(244, "div", 6)(245, "div", 7),
          o(246, "\u3010\u624B\u6570\u6599\u3011"),
          c(),
          l(247, "div", 8)(248, "p", 25),
          o(
            249,
            " \u30C1\u30B1\u30C3\u30C8\u6599\u91D1\u3068\u306F\u5225\u3067\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002"
          ),
          h(250, "br"),
          o(
            251,
            " \u7533\u8FBC\u307F\u5E0C\u671B\u306E\u30EA\u30BB\u30FC\u30EB\u53D7\u4ED8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()()(),
          l(252, "div", 16)(253, "h3", 17)(254, "div", 18),
          o(255, "STEP 01"),
          c()(),
          l(256, "div", 19)(257, "h4", 20),
          o(258, "\u304A\u7533\u8FBC\u307F"),
          c(),
          l(259, "ul", 23)(260, "li"),
          o(
            261,
            "\u7533\u8FBC\u307F\u3057\u305F\u3044\u30A4\u30D9\u30F3\u30C8\u306E\u30EA\u30BB\u30FC\u30EB\u53D7\u4ED8\u3088\u308A\u300C\u7533\u8FBC\u307F\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3001\u7533\u8FBC\u307F\u624B\u7D9A\u304D\u3078\u304A\u9032\u307F\u304F\u3060\u3055\u3044\u3002"
          ),
          c(),
          l(262, "li"),
          o(263, "\u30EA\u30BB\u30FC\u30EB\u306F\u62BD\u9078\u53D7\u4ED8\u3068\u306A\u308A\u307E\u3059\u3002"),
          c(),
          l(264, "li"),
          o(
            265,
            " \u4E00\u5EA6\u304A\u7533\u8FBC\u307F\u3044\u305F\u3060\u304F\u3068\u304A\u7533\u8FBC\u307F\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u306A\u3044\u304B\u304E\u308A\u3001\u30EA\u30BB\u30FC\u30EB\u7D42\u4E86\u65E5\u307E\u3067\u6BCE\u65E5\u81EA\u52D5\u3067\u62BD\u9078\u306B\u30A8\u30F3\u30C8\u30EA\u30FC\u3055\u308C\u307E\u3059\u3002 "
          ),
          c(),
          l(266, "li"),
          o(
            267,
            " \u7533\u8FBC\u307F\u671F\u9593\u4E2D\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u304C\u53EF\u80FD\u3067\u3059\uFF08\u62BD\u9078\u4E2D\u3092\u9664\u304F\uFF09\u3002\u304A\u7533\u8FBC\u307F\u5185\u5BB9\u306E\u5909\u66F4\u30FB\u30AD\u30E3\u30F3\u30BB\u30EB\u3092\u3055\u308C\u308B\u5834\u5408\u306F\u3001 "
          ),
          l(268, "a", 22),
          o(269, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            270,
            " \u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u300C\u7533\u8FBC\u307F\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u300D\u30DC\u30BF\u30F3\u3088\u308A\u3001\u30AD\u30E3\u30F3\u30BB\u30EB\u3092\u884C\u3063\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3088\u3046\u3001\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"
          ),
          h(271, "br"),
          l(272, "span", 26),
          o(
            273,
            "\u203B\u5909\u66F4\u3092\u5E0C\u671B\u3055\u308C\u308B\u5834\u5408\u306F\u3001\u30DE\u30A4\u30DA\u30FC\u30B8\uFF1E "
          ),
          l(274, "a", 22),
          o(275, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            276,
            " \u3088\u308A\u4E00\u5EA6\u7533\u8FBC\u307F\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u3066\u3001\u518D\u5EA6\u521D\u3081\u304B\u3089\u7533\u8FBC\u307F\u3092\u3084\u308A\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
          ),
          c()(),
          l(277, "li"),
          o(
            278,
            "\u53D7\u4ED8\u671F\u9593\u7D42\u4E86\u5F8C\u306E\u7533\u8FBC\u307F\u5185\u5BB9\u306E\u5909\u66F4\u30FB\u30AD\u30E3\u30F3\u30BB\u30EB\u306F\u3067\u304D\u307E\u305B\u3093\u3002"
          ),
          c()()()(),
          l(279, "div", 16)(280, "h3", 17)(281, "div", 18),
          o(282, "STEP 02"),
          c()(),
          l(283, "div", 19)(284, "h4", 20),
          o(285, "\u5F53\u843D\u767A\u8868\u30FB\u5165\u91D1\u65B9\u6CD5"),
          c(),
          l(286, "ul", 23)(287, "li"),
          o(
            288,
            "\u30EA\u30BB\u30FC\u30EB\u7D42\u4E86\u65E5\u307E\u3067\u3001\u6BCE\u65E510:00\u4EE5\u964D\u306B\u62BD\u9078\u304C\u884C\u308F\u308C\u307E\u3059\u3002"
          ),
          c(),
          l(289, "li"),
          o(
            290,
            " \u62BD\u9078\u304C\u7D42\u308F\u308A\u6B21\u7B2C\u9806\u6B21\u3001\u5F53\u9078\u8005\u69D8\u306E\u307F "
          ),
          l(291, "a", 22),
          o(292, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(
            293,
            " \u306E\u304A\u7533\u8FBC\u307F\u304C\u5F53\u9078\u8868\u793A\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002 "
          ),
          c(),
          l(294, "li"),
          o(
            295,
            " \u5F53\u9078\u306E\u65B9\u306B\u306F\u30B5\u30DD\u30FC\u30C8\u3067\u30E1\u30FC\u30EB\u3067\u3082\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u304C\u3001\u5FC5\u305A\u3054\u81EA\u8EAB\u306E "
          ),
          l(296, "a", 22),
          o(297, "\u30C1\u30B1\u30C3\u30C8\u7533\u8FBC\u5C65\u6B74"),
          c(),
          o(298, " \u3067\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "),
          c(),
          l(299, "li"),
          o(
            300,
            "\u671F\u9650\u307E\u3067\u306B\u5165\u91D1\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u30C1\u30B1\u30C3\u30C8\u306E\u3054\u7528\u610F\u306F\u3067\u304D\u307E\u305B\u3093\u3002"
          ),
          c()()()(),
          l(301, "div", 16)(302, "h3", 17)(303, "div", 18),
          o(304, "STEP 03"),
          c()(),
          l(305, "div", 19)(306, "h4", 20),
          o(307, "\u30C1\u30B1\u30C3\u30C8\u53D7\u53D6\u30FB\u5165\u5834\u65B9\u6CD5"),
          c(),
          l(308, "p"),
          o(
            309,
            " \u7533\u8FBC\u307F\u3055\u308C\u305F\u53D7\u4ED8\u30DA\u30FC\u30B8\u306E\u300C\u25A0\u30C1\u30B1\u30C3\u30C8\u53D7\u53D6\u308A\u65B9\u6CD5\u30FB\u5165\u5834\u65B9\u6CD5\u300D\u306B\u8A18\u8F09\u306E\u6642\u9593\u3088\u308A \u300C "
          ),
          l(310, "a", 27),
          o(311, "\u30DE\u30A4\u30DA\u30FC\u30B8"),
          c(),
          o(
            312,
            " \u300D\u304B\u3089\u30C7\u30B8\u30BF\u30EB\u30C1\u30B1\u30C3\u30C8\u3092\u53D6\u5F97\u3044\u305F\u3060\u3051\u307E\u3059\u3002 \u5165\u5834\u65B9\u6CD5\u306F\u7533\u8FBC\u3055\u308C\u305F\u53D7\u4ED8\u30DA\u30FC\u30B8\u3067\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()()(),
          l(313, "div", 6)(314, "div", 7),
          o(315, "\u3010\u6CE8\u610F\u4E8B\u9805\u3011"),
          c(),
          l(316, "ul", 10)(317, "li", 9),
          o(
            318,
            " \u4E00\u5EA6\u304A\u7533\u8FBC\u307F\u3044\u305F\u3060\u304F\u3068\u3001\u304A\u7533\u8FBC\u307F\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u306A\u3044\u9650\u308A\u3001\u53D7\u4ED8\u7D42\u4E86\u65E5\u307E\u3067\u81EA\u52D5\u7684\u306B\u6BCE\u65E5\u62BD\u9078\u306E\u5BFE\u8C61\u3068\u306A\u308A\u307E\u3059\u3002 "
          ),
          c(),
          l(319, "li", 9),
          o(
            320,
            " \u652F\u6255\u3044\u65B9\u6CD5\u306F\u53D7\u4ED8\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002\u30AF\u30EC\u30B8\u30C3\u30C8\u652F\u6255\u3044\u3092\u9078\u629E\u3055\u308C\u305F\u5834\u5408\u3001\u5F53\u9078\u3068\u306A\u3063\u305F\u6642\u70B9\u3067\u81EA\u52D5\u7684\u306B\u5373\u6642\u6C7A\u6E08\u3055\u308C\u307E\u3059\u3002 "
          ),
          c(),
          l(321, "li", 9),
          o(
            322,
            "\u305D\u306E\u4ED6\u6CE8\u610F\u4E8B\u9805\u306F\u5FC5\u305A\u7533\u8FBC\u53D7\u4ED8\u30DA\u30FC\u30B8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002"
          ),
          c()()(),
          l(323, "div", 6)(324, "div", 7),
          o(325, "\u3010\u304A\u554F\u3044\u5408\u308F\u305B\u5148\u3011"),
          c(),
          l(326, "p", 8),
          o(327, " \u30E1\u30FC\u30EB\u3067\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306F "),
          l(328, "a", 28),
          o(329, "\u3053\u3061\u3089"),
          c(),
          h(330, "br"),
          o(331, " \u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306F "),
          l(332, "a", 29),
          o(333, "FAQ"),
          c(),
          o(334, " \u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "),
          c()()());
      },
      dependencies: [pu],
      styles: [
        '@charset "UTF-8";[_nghost-%COMP%]{--background: #f7f7f9;display:block;margin-top:32px}.title[_ngcontent-%COMP%]{font-size:2.8rem;font-weight:700;margin-bottom:60px;margin-top:16px;text-align:center}.section[_ngcontent-%COMP%] + .section[_ngcontent-%COMP%]{margin-top:80px}.section-heading[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;margin-bottom:32px;position:relative;text-align:center}.section-heading[_ngcontent-%COMP%]:after{background-color:var(--tpl-color-accent);content:"";display:block;height:5px;margin:8px auto 0;width:64px}@media screen and (max-width: 768px){.section-heading[_ngcontent-%COMP%]{font-size:1.9rem}.section-heading[_ngcontent-%COMP%]:after{width:40px}}.subsection[_ngcontent-%COMP%]{margin-top:24px}.subsection-heading[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;margin-bottom:8px;position:relative}.overview-item[_ngcontent-%COMP%]{color:var(--tpl-color-accent);font-size:1.6rem;font-weight:700}.overview-item[_ngcontent-%COMP%] + .overview-item[_ngcontent-%COMP%]{border-top:1px solid var(--tpl-color-border);margin-top:16px;padding-top:16px}.overview-item-note[_ngcontent-%COMP%]{color:var(--tpl-color-text);font-size:1.2rem;font-weight:400;margin-top:8px}.about-text[_ngcontent-%COMP%]{font-size:1.6rem;line-height:1.75}@media screen and (max-width: 768px){.about-text[_ngcontent-%COMP%]{font-size:1.5rem}}.about-note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.3rem;margin-top:12px}.about-note-item[_ngcontent-%COMP%]{line-height:1.4;margin-left:1em;text-indent:-1em}.about-note-item[_ngcontent-%COMP%] + .about-note-item[_ngcontent-%COMP%]{margin-top:6px}.about-signup[_ngcontent-%COMP%]{background-color:var(--background);margin-top:24px;padding:20px 24px 24px;text-align:center}@media screen and (max-width: 768px){.about-signup[_ngcontent-%COMP%]{padding:20px 16px 24px}}.about-signup-text[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;line-height:1.6}.about-signup-button[_ngcontent-%COMP%]{margin-top:12px}.flow-header[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.flow-header-step[_ngcontent-%COMP%]{background-color:var(--background);border-radius:10px;box-shadow:0 3px 6px #00000026;cursor:pointer;padding:16px 24px}@media screen and (min-width: 768.01px){.flow-header-step[_ngcontent-%COMP%]{transition:opacity .2s ease-out}.flow-header-step[_ngcontent-%COMP%]:hover{opacity:.8}}@media screen and (max-width: 768px){.flow-header-step[_ngcontent-%COMP%]{padding:12px 16px}}.flow-header-step-index[_ngcontent-%COMP%]{color:var(--tpl-color-primary);font-family:var(--tpl-number-font-family);font-size:2.3rem;font-weight:700}@media screen and (max-width: 768px){.flow-header-step-index[_ngcontent-%COMP%]{font-size:1.7rem}}.flow-header-step-title[_ngcontent-%COMP%]{font-size:1.7rem;line-height:1.4;margin-top:4px}@media screen and (max-width: 768px){.flow-header-step-title[_ngcontent-%COMP%]{font-size:1.3rem}}.flow-header-step-arrow[_ngcontent-%COMP%]{display:block;height:auto;margin:0 24px;transform:rotate(-90deg);width:20px}@media screen and (max-width: 768px){.flow-header-step-arrow[_ngcontent-%COMP%]{margin:0 12px;width:16px}}.flow-content[_ngcontent-%COMP%]{padding-top:56px}@media screen and (max-width: 768px){.flow-content[_ngcontent-%COMP%]{padding-top:40px}}.flow-content-heading[_ngcontent-%COMP%]{text-align:center}.flow-content-heading-index[_ngcontent-%COMP%]{color:var(--tpl-color-primary);font-family:var(--tpl-number-font-family);font-size:3.7rem;font-weight:700}@media screen and (max-width: 768px){.flow-content-heading-index[_ngcontent-%COMP%]{font-size:3rem}}.flow-content-heading-title[_ngcontent-%COMP%]{font-size:1.9rem;font-weight:700;line-height:1.4;margin-top:2px}@media screen and (max-width: 768px){.flow-content-heading-title[_ngcontent-%COMP%]{font-size:1.7rem}}.flow-content-text[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1.75;margin:24px 0;text-align:center}.flow-content-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:var(--tpl-color-accent);font-style:normal;font-weight:700}@media screen and (max-width: 768px){.flow-content-text[_ngcontent-%COMP%]{font-size:1.4rem;margin:16px 0;text-align:left}}.flow-content-section[_ngcontent-%COMP%]{background-color:var(--background);border-radius:10px;margin:24px auto 0;overflow:hidden;padding:32px 24px}.flow-content-section[_ngcontent-%COMP%] + .flow-content-section[_ngcontent-%COMP%]{margin-top:32px}@media screen and (max-width: 768px){.flow-content-section[_ngcontent-%COMP%]{max-width:100%;padding:24px 16px}}.flow-content-section-title[_ngcontent-%COMP%]{background-color:var(--tpl-color-primary);color:var(--tpl-color-primary-contrast);font-size:1.7rem;font-weight:700;margin:-32px -24px 24px;padding:16px 24px;text-align:center}@media screen and (max-width: 768px){.flow-content-section-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:-24px -16px 24px;padding:12px 16px}}.flow-content-item[_ngcontent-%COMP%]{margin:0 auto;max-width:280px}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]{margin-top:32px}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]:before{background:url(/assets/guide/pre-companion/arrow.svg) center center/cover no-repeat;content:"";display:block;height:18px;margin:0 auto 32px;width:20px}@media screen and (max-width: 768px){.flow-content-item[_ngcontent-%COMP%]{max-width:100%}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]{margin-top:24px}.flow-content-item[_ngcontent-%COMP%] + .flow-content-item[_ngcontent-%COMP%]:before{height:15px;margin-bottom:24px;width:16px}}.flow-content-item-title[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;margin-bottom:10px}.flow-content-item-note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.3rem;margin-top:8px}.flow-content-item-image[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 3px 6px #00000026;display:block;height:auto;width:100%}.faq-item[_ngcontent-%COMP%] + .faq-item[_ngcontent-%COMP%]{border-top:1px solid var(--tpl-color-border)}.faq-item-check[_ngcontent-%COMP%]{display:none}.faq-item-q[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid var(--app-color-gold);cursor:pointer;display:flex;font-size:1.7rem;letter-spacing:.025em;line-height:1.8;padding:20px 0}.faq-item-q[_ngcontent-%COMP%]:before{color:var(--tpl-color-primary);content:"Q.";font-family:var(--tpl-number-font-family);font-size:4.2rem;font-weight:400;line-height:1;margin-right:24px}.faq-item-q[_ngcontent-%COMP%]:after{border-bottom:2px solid var(--tpl-color-primary);border-right:2px solid var(--tpl-color-primary);content:"";flex-shrink:0;height:12px;margin-left:auto;transform:rotate(45deg);transition:transform .2s ease-out;width:12px}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-q[_ngcontent-%COMP%]:after{transform:rotate(-135deg)}@media screen and (max-width: 768px){.faq-item-q[_ngcontent-%COMP%]{font-size:1.5rem;padding:12px 0}.faq-item-q[_ngcontent-%COMP%]:before{font-size:3.5rem;margin-right:16px}.faq-item-q[_ngcontent-%COMP%]:after{height:8px;width:8px}}.faq-item-q-inner[_ngcontent-%COMP%]{flex:1;margin-right:16px}.faq-item-a[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:max-height .3s ease-out}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a[_ngcontent-%COMP%]{max-height:200px}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a[_ngcontent-%COMP%]   .faq-item-a-inner[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a.tall[_ngcontent-%COMP%]{max-height:300px}@media screen and (max-width: 768px){.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a[_ngcontent-%COMP%]{max-height:400px}.faq-item-check[_ngcontent-%COMP%]:checked ~ .faq-item-a.tall[_ngcontent-%COMP%]{max-height:400px}}.faq-item-a-inner[_ngcontent-%COMP%]{align-items:flex-start;display:flex;flex:1;font-size:1.5rem;line-height:1.8;opacity:0;padding:10px 0 20px;transform:translateY(-10px);transition:opacity .3s ease-out,transform .3s ease-out}.faq-item-a-inner[_ngcontent-%COMP%]:before{color:var(--tpl-color-accent);content:"A.";font-family:var(--tpl-number-font-family);font-size:4.2rem;font-weight:400;line-height:1;margin-right:24px;margin-top:-8px}@media screen and (max-width: 768px){.faq-item-a-inner[_ngcontent-%COMP%]{font-size:1.4rem}.faq-item-a-inner[_ngcontent-%COMP%]:before{font-size:3.5rem;margin-right:16px}}.faq-item-a-note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.3rem;margin-top:12px}.text-attention[_ngcontent-%COMP%]{color:var(--tpl-color-attention)}.text-bold[_ngcontent-%COMP%]{font-weight:700}.text-small[_ngcontent-%COMP%]{font-size:1.4rem}.numbered-list[_ngcontent-%COMP%]{--marker-width: 1.5em;padding-left:var(--marker-width)}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:none;position:relative}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(1):before{content:"\\2460"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(2):before{content:"\\2461"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(3):before{content:"\\2462"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(4):before{content:"\\2463"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(5):before{content:"\\2464"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(6):before{content:"\\2465"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(7):before{content:"\\2466"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(8):before{content:"\\2467"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(9):before{content:"\\2468"}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{display:inline-block;left:calc(var(--marker-width) * -1);position:absolute;width:var(--marker-width)}.numbered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:1em}.numbered-list[_ngcontent-%COMP%]   .unordered-list[_ngcontent-%COMP%]{margin-top:.4em}.unordered-list[_ngcontent-%COMP%]{--marker-width: 1em;padding-left:var(--marker-width)}.unordered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:none;position:relative}.unordered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"\\30fb";display:inline-block;left:calc(var(--marker-width) * -1);position:absolute;width:var(--marker-width)}.unordered-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:.4em}.unordered-list[_ngcontent-%COMP%]   .unordered-list[_ngcontent-%COMP%]{margin-top:.4em}a[_ngcontent-%COMP%]{color:var(--tpl-color-primary);cursor:pointer;text-decoration:underline}.info[_ngcontent-%COMP%]{margin:8px 0}.info-title[_ngcontent-%COMP%]{display:inline-block;font-weight:600;margin-bottom:4px}',
      ],
    }));
  let i = e;
  return i;
})();
var P0 = [
    {
      path: "guide",
      children: [
        { path: "pre-companion", component: In },
        { path: "resale", component: zn },
      ],
    },
  ],
  Ln = P0;
var Kn = (() => {
  let e = class e {
    constructor() {
      (this.router = w(hu)),
        (this.onDestroy$ = new Qt()),
        this.router.events
          .pipe(
            et((u) => u instanceof mu),
            et((u) => u.url === "/info/law"),
            Vt(this.onDestroy$)
          )
          .subscribe(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
    }
    ngOnInit() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    ngOnDestroy() {
      this.onDestroy$.emit(), window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["page-spec-comm-trans-law"]],
      standalone: !0,
      features: [V],
      decls: 129,
      vars: 0,
      consts: [
        [1, "title"],
        [1, "description"],
        [1, "main"],
        [1, "main-item-label"],
        [1, "main-item-value"],
        [1, "value-group"],
        [1, "sub-header"],
        ["href", "https://bnfaq.channel.or.jp/inquiry/2007"],
      ],
      template: function (n, r) {
        n & 1 &&
          (l(0, "h2", 0),
          o(1, "\u7279\u5B9A\u5546\u53D6\u5F15\u6CD5\u306B\u57FA\u3065\u304F\u8868\u8A18"),
          c(),
          l(2, "p", 1),
          o(
            3,
            ` \u300C\u7279\u5B9A\u5546\u53D6\u5F15\u306B\u95A2\u3059\u308B\u6CD5\u5F8B\u300D\u7B2C11\u6761 \u901A\u4FE1\u8CA9\u58F2\uFF08\u901A\u4FE1\u8CA9\u58F2\u306B\u3064\u3044\u3066\u306E\u5E83\u544A\uFF09\u306B\u57FA\u3065\u304D\u4EE5\u4E0B\u306B\u660E\u793A\u81F4\u3057\u307E\u3059\u3002
`
          ),
          c(),
          l(4, "main", 2)(5, "h3", 3),
          o(6, "\u8CA9\u58F2\u696D\u8005"),
          c(),
          l(7, "div", 4),
          o(
            8,
            "\u682A\u5F0F\u4F1A\u793E\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3\u30A8\u30F3\u30BF\u30FC\u30C6\u30A4\u30F3\u30E1\u30F3\u30C8"
          ),
          c(),
          l(9, "h3", 3),
          o(10, "\u904B\u55B6\u7D71\u62EC\u8CAC\u4EFB\u8005"),
          c(),
          l(11, "div", 4),
          o(12, "\u7530\u4E2D\u5FEB"),
          c(),
          l(13, "h3", 3),
          o(14, "\u6240\u5728\u5730"),
          c(),
          l(15, "div", 4),
          o(
            16,
            "\u3012108-0014 \u6771\u4EAC\u90FD\u6E2F\u533A\u829D5-37-8 \u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3\u672A\u6765\u7814\u7A76\u6240"
          ),
          c(),
          l(17, "h3", 3),
          o(18, "\u96FB\u8A71\u756A\u53F7"),
          c(),
          l(19, "div", 4),
          o(20, "044-280-0732 "),
          h(21, "br"),
          o(
            22,
            "\u53D7\u4ED8\u6642\u9593 \u6708\uFF5E\u91D1(\u795D\u65E5\u3001\u590F\u5B63\u30FB\u51AC\u5B63\u4F11\u696D\u65E5\u3092\u9664\u304F) 10:00\uFF5E17:00"
          ),
          c(),
          l(23, "h3", 3),
          o(24, "\u4EE3\u91D1"),
          c(),
          l(25, "div", 4)(26, "div", 5)(27, "h4", 6),
          o(28, "\u3010\u5546\u54C1\u8CFC\u5165\u3011"),
          c(),
          l(29, "p"),
          o(30, "\u5404\u5546\u54C1\u7D39\u4ECB\u30DA\u30FC\u30B8\u306B\u8A18\u8F09"),
          c()(),
          l(31, "div", 5)(32, "h4", 6),
          o(
            33,
            "\u3010\u30A2\u30BD\u30D3\u30B9\u30C8\u30A2\u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u767B\u9332\u3011"
          ),
          c(),
          l(34, "p"),
          o(35, "\u5E74\u4F1A\u8CBB \xA55,478(\u7A0E\u8FBC)"),
          c()()(),
          l(36, "h3", 3),
          o(37, "\u4EE3\u91D1\u4EE5\u5916\u306E\u5FC5\u8981\u6599\u91D1"),
          c(),
          l(38, "div", 4)(39, "ul")(40, "li")(41, "p"),
          o(42, " \u7269\u8CA9 "),
          h(43, "br"),
          o(
            44,
            " \u5229\u7528\u306B\u3042\u305F\u3063\u3066\u5FC5\u8981\u3068\u306A\u308B\u6D88\u8CBB\u7A0E\u3001\u9001\u6599\u3001\u4EE3\u5F15\u624B\u6570\u6599\u3001\u30B3\u30F3\u30D3\u30CB\u6C7A\u6E08\u624B\u6570\u6599\u7B49\u306F\u304A\u5BA2\u69D8\u306E\u8CA0\u62C5\u3068\u306A\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u8CBB\u7528\u304C\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001\u5404\u5546\u54C1\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3057\u3066\u304A\u308A\u307E\u3059\u3002 "
          ),
          c()(),
          l(45, "li")(46, "p"),
          o(
            47,
            " \u30C7\u30B8\u30BF\u30EB\u30B3\u30F3\u30C6\u30F3\u30C4\uFF08\u6620\u50CF\u914D\u4FE1\u3001\u96FB\u5B50\u66F8\u7C4D\u3001\u97F3\u697DDL\u3001Steam\u30B3\u30FC\u30C9\u3001\u30C7\u30B8\u30BF\u30EB\u30C1\u30B1\u30C3\u30C8\u306A\u3069\u3092\u542B\u3080\u304C\u3053\u308C\u306B\u9650\u3089\u306A\u3044\u3002\u4EE5\u4E0B\u540C\u3058\u3002\uFF09 "
          ),
          h(48, "br"),
          o(
            49,
            " \u5229\u7528\u306B\u3042\u305F\u3063\u3066\u5FC5\u8981\u3068\u306A\u308B\u6D88\u8CBB\u7A0E\u3001\u30B3\u30F3\u30D3\u30CB\u6C7A\u6E08\u624B\u6570\u6599\u3001\u3042\u3068\u6255\u3044\u624B\u6570\u6599\uFF08\u30DA\u30A4\u30C7\u30A3\uFF09\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u6599\u91D1\u7B49\u306F\u304A\u5BA2\u69D8\u306E\u8CA0\u62C5\u3068\u306A\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u8CBB\u7528\u304C\u5FC5\u8981\u306A\u5834\u5408\u306F\u3001\u5404\u5546\u54C1\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3057\u3066\u304A\u308A\u307E\u3059\u3002 "
          ),
          c()()()(),
          l(50, "h3", 3),
          o(51, "\u652F\u6255\u3044\u65B9\u6CD5"),
          c(),
          l(52, "div", 4)(53, "div", 5)(54, "h4", 6),
          o(55, "\u3010\u5546\u54C1\u8CFC\u5165\u3011"),
          c(),
          l(56, "ul")(57, "li")(58, "p"),
          o(59, " \u7269\u8CA9 "),
          h(60, "br"),
          o(
            61,
            " \u4EE3\u91D1\u5F15\u63DB\u30FB\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u30FB\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3 \u30B3\u30A4\u30F3\u6C7A\u6E08\u30FB\u30B3\u30F3\u30D3\u30CB\u6C7A\u6E08 "
          ),
          c()(),
          l(62, "li")(63, "p"),
          o(
            64,
            " \u30C7\u30B8\u30BF\u30EB\u30B3\u30F3\u30C6\u30F3\u30C4\uFF08\u30C7\u30B8\u30BF\u30EB\u30C1\u30B1\u30C3\u30C8\u3092\u9664\u304F\uFF09 "
          ),
          h(65, "br"),
          o(
            66,
            " \u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u30FB\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3 \u30B3\u30A4\u30F3\u6C7A\u6E08\u30FB\u3042\u3068\u6255\u3044\uFF08\u30DA\u30A4\u30C7\u30A3\uFF09 "
          ),
          h(67, "br"),
          o(
            68,
            " \u203B\u300CASOBISTORY\u300D\u3067\u8CA9\u58F2\u3059\u308B\u30C7\u30B8\u30BF\u30EB\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u652F\u6255\u65B9\u6CD5\u306F\u3001\u30D0\u30F3\u30C0\u30A4\u30CA\u30E0\u30B3 \u30B3\u30A4\u30F3\u6C7A\u6E08\u306E\u307F\u3068\u306A\u308A\u307E\u3059\u3002 "
          ),
          c()(),
          l(69, "li")(70, "p"),
          o(71, " \u30C7\u30B8\u30BF\u30EB\u30C1\u30B1\u30C3\u30C8 "),
          h(72, "br"),
          o(
            73,
            " \u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u30FB\u30B3\u30F3\u30D3\u30CB\u6C7A\u6E08\u30FBPay-easy\uFF08\u30DA\u30A4\u30B8\u30FC\uFF09\u6C7A\u6E08 "
          ),
          c()()()(),
          l(74, "div", 5)(75, "h4", 6),
          o(
            76,
            "\u3010\u30A2\u30BD\u30D3\u30B9\u30C8\u30A2\u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u767B\u9332\u3011"
          ),
          c(),
          l(77, "p"),
          o(78, "\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u306E\u307F"),
          c()()(),
          l(79, "h3", 3),
          o(80, "\u5546\u54C1\u306E\u5F15\u6E21\u3057\u6642\u671F"),
          c(),
          l(81, "div", 4)(82, "div", 5)(83, "h4", 6),
          o(84, "\u3010\u5546\u54C1\u8CFC\u5165\u3011"),
          c(),
          l(85, "ul")(86, "li")(87, "p"),
          o(88, " \u7269\u8CA9 "),
          h(89, "br"),
          o(
            90,
            " \u5546\u54C1\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002\u5404\u5546\u54C1\u7D39\u4ECB\u30DA\u30FC\u30B8\u306B\u63B2\u8F09\u3057\u3066\u3042\u308B\u767A\u9001\u4E88\u5B9A\u65E5\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()(),
          l(91, "li")(92, "p"),
          o(93, " \u30C7\u30B8\u30BF\u30EB\u30B3\u30F3\u30C6\u30F3\u30C4 "),
          h(94, "br"),
          o(
            95,
            " \u8CA9\u58F2\u696D\u8005\u306B\u3066\u652F\u6255\u51E6\u7406\u3092\u78BA\u8A8D\u5F8C\u901F\u3084\u304B\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u4E88\u7D04\u8CA9\u58F2\u5546\u54C1\u7B49\u3001\u7279\u5B9A\u306E\u63D0\u4F9B\u6642\u671F\u304C\u660E\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u305D\u306E\u6642\u70B9\u304B\u3089\u306E\u63D0\u4F9B\u3068\u306A\u308A\u307E\u3059\u3002 "
          ),
          c()()()(),
          l(96, "div", 5)(97, "h4", 6),
          o(
            98,
            "\u3010\u30A2\u30BD\u30D3\u30B9\u30C8\u30A2\u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u767B\u9332\u3011"
          ),
          c(),
          l(99, "p"),
          o(
            100,
            "\u8CA9\u58F2\u696D\u8005\u306B\u3066\u652F\u6255\u51E6\u7406\u3092\u78BA\u8A8D\u6B21\u7B2C\u3001\u3059\u3050\u306B\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u3059\u3002"
          ),
          c()()(),
          l(101, "h3", 3),
          o(102, "\u8FD4\u54C1\u306E\u5BFE\u5FDC"),
          c(),
          l(103, "div", 4)(104, "div", 5)(105, "h4", 6),
          o(106, "\u3010\u5546\u54C1\u8CFC\u5165\u3011"),
          c(),
          l(107, "ul")(108, "li")(109, "p"),
          o(110, " \u7269\u8CA9 "),
          h(111, "br"),
          o(
            112,
            " \u304A\u5BA2\u69D8\u90FD\u5408\u306B\u3088\u308B\u3054\u6CE8\u6587\u5B8C\u4E86\u5F8C\u306E\u30AD\u30E3\u30F3\u30BB\u30EB\u306F\u53D7\u3051\u4ED8\u3051\u3066\u304A\u308A\u307E\u305B\u3093\u3002 \u304A\u5C4A\u3051\u3057\u305F\u3054\u6CE8\u6587\u5546\u54C1\u306B\u4E0D\u5177\u5408\u304C\u3042\u308A\u3001\u5546\u54C1\u5230\u7740\u5F8C\uFF18\u65E5\u4EE5\u5185\u306B "
          ),
          l(113, "a", 7),
          o(114, "\u304A\u554F\u5408\u305B\u30D5\u30A9\u30FC\u30E0"),
          c(),
          o(
            115,
            " \u304B\u3089\u3054\u9023\u7D61\u3044\u305F\u3060\u3044\u305F\u5834\u5408\u3092\u9664\u3044\u3066\u3001 \u58F2\u8CB7\u5951\u7D04\u6210\u7ACB\u5F8C\u306E\u30AD\u30E3\u30F3\u30BB\u30EB\u53CA\u3073\u8FD4\u54C1\u306F\u304A\u53D7\u3051\u3044\u305F\u3057\u307E\u305B\u3093\u3002 \u5728\u5EAB\u304C\u3042\u308B\u5834\u5408\u306B\u9650\u308A\u3001\u4EA4\u63DB\u306E\u3054\u5BFE\u5FDC\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002 "
          ),
          c()(),
          l(116, "li")(117, "p"),
          o(118, " \u30C7\u30B8\u30BF\u30EB\u30B3\u30F3\u30C6\u30F3\u30C4 "),
          h(119, "br"),
          o(
            120,
            " \u304A\u5BA2\u69D8\u90FD\u5408\u306B\u3088\u308B\u652F\u6255\u5B8C\u4E86\u5F8C\u306E\u30AD\u30E3\u30F3\u30BB\u30EB\u306F\u53D7\u3051\u4ED8\u3051\u3066\u304A\u308A\u307E\u305B\u3093\u3002\u307E\u305F\u3001\u304A\u652F\u6255\u3044\u3044\u305F\u3060\u3044\u305F\u4EE3\u91D1\u306F\u8FD4\u91D1\u3044\u305F\u3057\u307E\u305B\u3093\u306E\u3067\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002 \u307E\u305F\u3001\u30C7\u30B8\u30BF\u30EB\u30B3\u30F3\u30C6\u30F3\u30C4\u3068\u3044\u3046\u5546\u54C1\u306E\u6027\u683C\u4E0A\u3001\u8FD4\u54C1\u306F\u4E00\u5207\u304A\u53D7\u3051\u3067\u304D\u307E\u305B\u3093\u3002\u6027\u8CEA\u4E0A\u3001\u8FD4\u54C1\u6271\u3044\u3067\u306F\u306A\u304F\u3001\u4E0D\u826F\u6642\u306E\u5BFE\u5FDC\u3068\u306A\u308A\u307E\u3059\u3002 \u4E0D\u826F\u6642\u306E\u5BFE\u5FDC\u306F\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u30D5\u30A1\u30A4\u30EB\u304C\u7834\u640D\u7B49\u306B\u3088\u308A\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30FB\u95B2\u89A7\u3068\u3082\u4E0D\u53EF\u80FD\u3060\u3063\u305F\u5834\u5408\u3001\u5F0A\u793E\u8ABF\u67FB\u306B\u3088\u308A\u8AB2\u91D1\u306E\u53D6\u6D88\u3092\u884C\u3044\u307E\u3059\u3002 \u304A\u5BA2\u69D8\u56FA\u6709\u306E\u74B0\u5883\u306B\u3088\u308B\u4E0D\u5177\u5408\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u8FD4\u54C1\u4E0D\u53EF\u3068\u306A\u308A\u307E\u3059\u3002 "
          ),
          c()()()(),
          l(121, "div", 5)(122, "h4", 6),
          o(
            123,
            "\u3010\u30A2\u30BD\u30D3\u30B9\u30C8\u30A2\u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u9000\u4F1A\u3011"
          ),
          c(),
          l(124, "p"),
          o(
            125,
            " \u30A2\u30BD\u30D3\u30B9\u30C8\u30A2\u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u30B5\u30FC\u30D3\u30B9\u306E\u9000\u4F1A\u3092\u3054\u5E0C\u671B\u306E\u5834\u5408\u3001 "
          ),
          l(126, "a", 7),
          o(127, "\u304A\u554F\u5408\u305B\u30D5\u30A9\u30FC\u30E0"),
          c(),
          o(
            128,
            " \u304B\u3089\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002 \u306A\u304A\u3001\u304A\u652F\u6255\u3044\u3044\u305F\u3060\u3044\u305F\u4F1A\u8CBB\u306F\u8FD4\u91D1\u3044\u305F\u3057\u307E\u305B\u3093\u306E\u3067\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002 "
          ),
          c()()()());
      },
      dependencies: [G],
      styles: [
        ".title[_ngcontent-%COMP%]{font-size:2.8rem;font-weight:700;margin-bottom:16px;margin-top:16px}.description[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:48px}.main[_ngcontent-%COMP%]{display:grid;gap:48px 16px;grid-template-columns:180px 1fr;padding-bottom:48px}.main-item-label[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.main-item-value[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1.6}.value-group[_ngcontent-%COMP%] + .value-group[_ngcontent-%COMP%]{margin-top:16px}.sub-header[_ngcontent-%COMP%]{display:inline-block;font-weight:600;margin-bottom:8px}a[_ngcontent-%COMP%]{color:var(--tpl-color-primary);text-decoration:underline}a[_ngcontent-%COMP%]:visited{color:var(--tpl-color-primary-shade)}ul[_ngcontent-%COMP%]{margin:0;padding-left:1.5em}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{font-size:1.2rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:12px}p[_ngcontent-%COMP%]{line-height:1.65}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{gap:16px;grid-template-columns:1fr}.main-item-label[_ngcontent-%COMP%]{font-size:2rem}.main-item-value[_ngcontent-%COMP%]{margin-bottom:40px}}",
      ],
    }));
  let i = e;
  return i;
})();
var M0 = [{ path: "info", children: [{ path: "law", component: Kn }] }],
  jn = M0;
var Vn = [
    {
      path: "",
      component: Yu,
      canActivate: [st],
      children: [...Vu, ...jn, ...Ln],
      providers: [{ provide: Ne, useClass: Rn }],
    },
    { path: "preview", canActivate: [st, Lu], loadChildren: () => import("./chunk-LMZWIWB5.js") },
    ...$u,
  ],
  $n = b.name === "production" ? Vn : Gu.concat(Vn);
function T0(i, e) {
  if (i & 1) {
    let t = Oe();
    l(0, "div", 1)(1, "div", 2)(2, "div", 3),
      o(
        3,
        " \u30D7\u30EC\u30DF\u30A2\u30E0\u4F1A\u54E1\u767B\u9332\u6E08\u307F\u3067\u3001\u304A\u7533\u3057\u8FBC\u307F\u304C\u51FA\u6765\u306A\u3044\u5834\u5408\u306F\u3001\u4E00\u5EA6 ASOBI TICKET \u306E\u30ED\u30B0\u30A2\u30A6\u30C8\u3092\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u7533\u3057\u8FBC\u307F\u304F\u3060\u3055\u3044\u3002 "
      ),
      c(),
      l(4, "button", 4),
      J("click", function () {
        pe(t);
        let n = Jt();
        return fe(n.signOut());
      }),
      o(5, " \u30ED\u30B0\u30A2\u30A6\u30C8 "),
      c()(),
      l(6, "div", 2)(7, "div", 3),
      o(
        8,
        "\u30ED\u30B0\u30A2\u30A6\u30C8\u5F8C\u3082\u304A\u7533\u3057\u8FBC\u307F\u304C\u51FA\u6765\u306A\u3044\u5834\u5408\u3001\u4EE5\u4E0B\u3088\u308A\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044"
      ),
      c(),
      l(9, "a", 5),
      o(10, " \u304A\u554F\u3044\u5408\u308F\u305B "),
      c()()();
  }
}
var Qn = (() => {
  let e = class e {
    constructor() {
      (this.assets = w(Ku)), (this.sessionService = w(ku)), (this.isSignedIn$ = this.sessionService.isSignedIn$);
    }
    signOut() {
      this.sessionService.signOut();
    }
  };
  (e.ɵfac = function (n) {
    return new (n || e)();
  }),
    (e.ɵcmp = j({
      type: e,
      selectors: [["asb-register-premium-button"]],
      standalone: !0,
      features: [V],
      decls: 2,
      vars: 3,
      consts: [
        ["class", "attention-list", 4, "ngIf"],
        [1, "attention-list"],
        [1, "attention"],
        [1, "attention-text"],
        [
          "tpl-button",
          "",
          "color",
          "basic-light",
          "size",
          "small",
          "buttonType",
          "stroked",
          "icon",
          "arrow-right",
          1,
          "attention-button",
          3,
          "click",
        ],
        [
          "tpl-button",
          "",
          "color",
          "basic-light",
          "size",
          "small",
          "buttonType",
          "stroked",
          "icon",
          "arrow-right",
          "href",
          "https://faq.asobiticket2.asobistore.jp/hc/ja/requests/new",
          "target",
          "_blank",
          "rel",
          "noopener noreferrer",
          1,
          "attention-button",
        ],
      ],
      template: function (n, r) {
        n & 1 && (Xt(0, T0, 11, 0, "div", 0), tu(1, "async")), n & 2 && Zt("ngIf", uu(1, 1, r.isSignedIn$) === !0);
      },
      dependencies: [G, ou, su, Ee],
      styles: [
        "[_nghost-%COMP%]{display:block}.note[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.4rem;font-weight:500;margin-left:auto;margin-right:auto;margin-top:12px;width:300px}.note[_ngcontent-%COMP%]:empty{display:none}.attention-list[_ngcontent-%COMP%]{margin-bottom:-16px;margin-top:32px}.attention[_ngcontent-%COMP%]{color:var(--tpl-color-text-light);font-size:1.4rem;font-weight:500;margin-left:auto;margin-right:auto;max-width:320px}.attention[_ngcontent-%COMP%] + .attention[_ngcontent-%COMP%]{margin-top:32px}.attention-button[_ngcontent-%COMP%]{display:block;margin:12px auto 0}",
      ],
    }));
  let i = e;
  return i;
})();
var Un = { apiEndpoint: b.apiEndpoint, authProviderId: b.authProviderId, boothType: "single" },
  Wn = {
    privacyPolicyLink: "https://legal.bandainamcoent.co.jp/privacy/",
    termsLink: "https://shop.asobistore.jp/guide/rule",
    specCommTransLawLink: b.specCommTransLawLink,
    relatedSiteLinks: [
      {
        type: "external",
        label: "\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A",
        href: `${b.groupSiteUrls.idp}/account.html?client_id=lalabit&backto=${encodeURIComponent(
          b.groupSiteUrls.ticket + "/mypage"
        )}`,
      },
      {
        type: "external",
        label: "\u4F4F\u6240\u5909\u66F4",
        href: `${b.groupSiteUrls.idp}/contact.html?client_id=lalabit&backto=${encodeURIComponent(
          b.groupSiteUrls.ticket + "/mypage"
        )}`,
      },
    ],
  };
var Hn = { common: { copyright: "&copy; copyright All Right Reserved." } };
var Gn = { revision: "3b7f6f7", branch: "HEAD", triadVersion: "1.11.5", ticketVersion: "1.11.5" };
var Yn = {
    type: "ticket",
    environment: b.name,
    production: b.production,
    tenantId: b.tenantId,
    recaptchaSiteKey: b.recaptchaSiteKey,
    recaptchaCheckboxSiteKey: b.recaptchaCheckboxSiteKey,
    kenallApiPublicKey: "c3f1641cf78bdf0ed7896ec44fcc874e52c65084",
    versions: Gn,
  },
  Xn = {
    logoImage: { src: "assets/images/logo.svg", originalWidth: 200, originalHeight: 50 },
    inSiteLinks: [
      { label: "\u53D7\u4ED8\u4E00\u89A7", href: "/receptions", type: "internal", authRequired: !1 },
      { label: "\u30DE\u30A4\u30DA\u30FC\u30B8", href: "/mypage", type: "internal", authRequired: !0 },
      {
        label: "FAQ\u30FB\u304A\u554F\u3044\u5408\u308F\u305B",
        href: "https://faq.asobiticket2.asobistore.jp/hc/ja",
        type: "external",
        authRequired: !1,
      },
    ],
    siteLinks: [
      { label: "ACCOUNT", href: b.groupSiteUrls.idp, theme: "accent", type: "external" },
      { label: "LIVE TICKET", href: "/", theme: "primary", type: "internal" },
      { label: "STORE", href: b.groupSiteUrls.store, theme: "store", type: "external" },
    ],
  };
ru(on);
var Zn = {
  providers: [
    he(nt),
    { provide: nu, useValue: "ja-JP" },
    fu($n, Eu(), gu({ scrollPositionRestoration: "enabled" })),
    un(Yn, Xn, Hn),
    Hu(Un, Wn),
    Nn(),
    Iu({ promoteMemberRankModalBottom: Qn }),
    { provide: Qu, useValue: b.gtmContainerId },
    { provide: Uu, useValue: b.oneTrustDomainScript },
  ],
};
cu(rn, Zn).catch((i) => console.error(i));
//# sourceMappingURL=main-KT2ZSOQH.js.map
