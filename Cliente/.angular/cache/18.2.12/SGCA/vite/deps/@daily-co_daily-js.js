import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@daily-co/daily-js/dist/daily-esm.js
function e(e2, t2) {
  if (null == e2) return {};
  var n2, r2, i2 = function(e3, t3) {
    if (null == e3) return {};
    var n3, r3, i3 = {}, o3 = Object.keys(e3);
    for (r3 = 0; r3 < o3.length; r3++) n3 = o3[r3], t3.indexOf(n3) >= 0 || (i3[n3] = e3[n3]);
    return i3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < o2.length; r2++) n2 = o2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (i2[n2] = e2[n2]);
  }
  return i2;
}
function t(e2, t2) {
  if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function n(e2) {
  return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, n(e2);
}
function r(e2) {
  var t2 = function(e3, t3) {
    if ("object" !== n(e3) || null === e3) return e3;
    var r2 = e3[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var i2 = r2.call(e3, t3 || "default");
      if ("object" !== n(i2)) return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e3);
  }(e2, "string");
  return "symbol" === n(t2) ? t2 : String(t2);
}
function i(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var i2 = t2[n2];
    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, r(i2.key), i2);
  }
}
function o(e2, t2, n2) {
  return t2 && i(e2.prototype, t2), n2 && i(e2, n2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function a(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function s(e2, t2) {
  return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, s(e2, t2);
}
function c(e2, t2) {
  if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
  e2.prototype = Object.create(t2 && t2.prototype, {
    constructor: {
      value: e2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(e2, "prototype", {
    writable: false
  }), t2 && s(e2, t2);
}
function l(e2, t2) {
  if (t2 && ("object" === n(t2) || "function" == typeof t2)) return t2;
  if (void 0 !== t2) throw new TypeError("Derived constructors may only return object or undefined");
  return a(e2);
}
function u(e2) {
  return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, u(e2);
}
function d(e2, t2, n2) {
  return (t2 = r(t2)) in e2 ? Object.defineProperty(e2, t2, {
    value: n2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[t2] = n2, e2;
}
function p(e2, t2, n2, r2, i2, o2, a2) {
  try {
    var s2 = e2[o2](a2), c2 = s2.value;
  } catch (e3) {
    return void n2(e3);
  }
  s2.done ? t2(c2) : Promise.resolve(c2).then(r2, i2);
}
function h(e2) {
  return function() {
    var t2 = this, n2 = arguments;
    return new Promise(function(r2, i2) {
      var o2 = e2.apply(t2, n2);
      function a2(e3) {
        p(o2, r2, i2, a2, s2, "next", e3);
      }
      function s2(e3) {
        p(o2, r2, i2, a2, s2, "throw", e3);
      }
      a2(void 0);
    });
  };
}
function f(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function v(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3)) return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null != n2) {
      var r2, i2, o2, a2, s2 = [], c2 = true, l2 = false;
      try {
        if (o2 = (n2 = n2.call(e3)).next, 0 === t3) {
          if (Object(n2) !== n2) return;
          c2 = false;
        } else for (; !(c2 = (r2 = o2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3); c2 = true) ;
      } catch (e4) {
        l2 = true, i2 = e4;
      } finally {
        try {
          if (!c2 && null != n2.return && (a2 = n2.return(), Object(a2) !== a2)) return;
        } finally {
          if (l2) throw i2;
        }
      }
      return s2;
    }
  }(e2, t2) || function(e3, t3) {
    if (e3) {
      if ("string" == typeof e3) return f(e3, t3);
      var n2 = Object.prototype.toString.call(e3).slice(8, -1);
      return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? f(e3, t3) : void 0;
    }
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
var g;
var m = {};
var y = {
  get exports() {
    return m;
  },
  set exports(e2) {
    m = e2;
  }
};
var _ = "object" == typeof Reflect ? Reflect : null;
var b = _ && "function" == typeof _.apply ? _.apply : function(e2, t2, n2) {
  return Function.prototype.apply.call(e2, t2, n2);
};
g = _ && "function" == typeof _.ownKeys ? _.ownKeys : Object.getOwnPropertySymbols ? function(e2) {
  return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
} : function(e2) {
  return Object.getOwnPropertyNames(e2);
};
var w = Number.isNaN || function(e2) {
  return e2 != e2;
};
function S() {
  S.init.call(this);
}
y.exports = S, m.once = function(e2, t2) {
  return new Promise(function(n2, r2) {
    function i2(n3) {
      e2.removeListener(t2, o2), r2(n3);
    }
    function o2() {
      "function" == typeof e2.removeListener && e2.removeListener("error", i2), n2([].slice.call(arguments));
    }
    x(e2, t2, o2, {
      once: true
    }), "error" !== t2 && function(e3, t3, n3) {
      "function" == typeof e3.on && x(e3, "error", t3, n3);
    }(e2, i2, {
      once: true
    });
  });
}, S.EventEmitter = S, S.prototype._events = void 0, S.prototype._eventsCount = 0, S.prototype._maxListeners = void 0;
var k = 10;
function M(e2) {
  if ("function" != typeof e2) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e2);
}
function C(e2) {
  return void 0 === e2._maxListeners ? S.defaultMaxListeners : e2._maxListeners;
}
function E(e2, t2, n2, r2) {
  var i2, o2, a2, s2;
  if (M(n2), void 0 === (o2 = e2._events) ? (o2 = e2._events = /* @__PURE__ */ Object.create(null), e2._eventsCount = 0) : (void 0 !== o2.newListener && (e2.emit("newListener", t2, n2.listener ? n2.listener : n2), o2 = e2._events), a2 = o2[t2]), void 0 === a2) a2 = o2[t2] = n2, ++e2._eventsCount;
  else if ("function" == typeof a2 ? a2 = o2[t2] = r2 ? [n2, a2] : [a2, n2] : r2 ? a2.unshift(n2) : a2.push(n2), (i2 = C(e2)) > 0 && a2.length > i2 && !a2.warned) {
    a2.warned = true;
    var c2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(t2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c2.name = "MaxListenersExceededWarning", c2.emitter = e2, c2.type = t2, c2.count = a2.length, s2 = c2, console && console.warn && console.warn(s2);
  }
  return e2;
}
function T() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function P(e2, t2, n2) {
  var r2 = {
    fired: false,
    wrapFn: void 0,
    target: e2,
    type: t2,
    listener: n2
  }, i2 = T.bind(r2);
  return i2.listener = n2, r2.wrapFn = i2, i2;
}
function O(e2, t2, n2) {
  var r2 = e2._events;
  if (void 0 === r2) return [];
  var i2 = r2[t2];
  return void 0 === i2 ? [] : "function" == typeof i2 ? n2 ? [i2.listener || i2] : [i2] : n2 ? function(e3) {
    for (var t3 = new Array(e3.length), n3 = 0; n3 < t3.length; ++n3) t3[n3] = e3[n3].listener || e3[n3];
    return t3;
  }(i2) : j(i2, i2.length);
}
function A(e2) {
  var t2 = this._events;
  if (void 0 !== t2) {
    var n2 = t2[e2];
    if ("function" == typeof n2) return 1;
    if (void 0 !== n2) return n2.length;
  }
  return 0;
}
function j(e2, t2) {
  for (var n2 = new Array(t2), r2 = 0; r2 < t2; ++r2) n2[r2] = e2[r2];
  return n2;
}
function x(e2, t2, n2, r2) {
  if ("function" == typeof e2.on) r2.once ? e2.once(t2, n2) : e2.on(t2, n2);
  else {
    if ("function" != typeof e2.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e2);
    e2.addEventListener(t2, function i2(o2) {
      r2.once && e2.removeEventListener(t2, i2), n2(o2);
    });
  }
}
Object.defineProperty(S, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return k;
  },
  set: function(e2) {
    if ("number" != typeof e2 || e2 < 0 || w(e2)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e2 + ".");
    k = e2;
  }
}), S.init = function() {
  void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, S.prototype.setMaxListeners = function(e2) {
  if ("number" != typeof e2 || e2 < 0 || w(e2)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + ".");
  return this._maxListeners = e2, this;
}, S.prototype.getMaxListeners = function() {
  return C(this);
}, S.prototype.emit = function(e2) {
  for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2.push(arguments[n2]);
  var r2 = "error" === e2, i2 = this._events;
  if (void 0 !== i2) r2 = r2 && void 0 === i2.error;
  else if (!r2) return false;
  if (r2) {
    var o2;
    if (t2.length > 0 && (o2 = t2[0]), o2 instanceof Error) throw o2;
    var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
    throw a2.context = o2, a2;
  }
  var s2 = i2[e2];
  if (void 0 === s2) return false;
  if ("function" == typeof s2) b(s2, this, t2);
  else {
    var c2 = s2.length, l2 = j(s2, c2);
    for (n2 = 0; n2 < c2; ++n2) b(l2[n2], this, t2);
  }
  return true;
}, S.prototype.addListener = function(e2, t2) {
  return E(this, e2, t2, false);
}, S.prototype.on = S.prototype.addListener, S.prototype.prependListener = function(e2, t2) {
  return E(this, e2, t2, true);
}, S.prototype.once = function(e2, t2) {
  return M(t2), this.on(e2, P(this, e2, t2)), this;
}, S.prototype.prependOnceListener = function(e2, t2) {
  return M(t2), this.prependListener(e2, P(this, e2, t2)), this;
}, S.prototype.removeListener = function(e2, t2) {
  var n2, r2, i2, o2, a2;
  if (M(t2), void 0 === (r2 = this._events)) return this;
  if (void 0 === (n2 = r2[e2])) return this;
  if (n2 === t2 || n2.listener === t2) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[e2], r2.removeListener && this.emit("removeListener", e2, n2.listener || t2));
  else if ("function" != typeof n2) {
    for (i2 = -1, o2 = n2.length - 1; o2 >= 0; o2--) if (n2[o2] === t2 || n2[o2].listener === t2) {
      a2 = n2[o2].listener, i2 = o2;
      break;
    }
    if (i2 < 0) return this;
    0 === i2 ? n2.shift() : function(e3, t3) {
      for (; t3 + 1 < e3.length; t3++) e3[t3] = e3[t3 + 1];
      e3.pop();
    }(n2, i2), 1 === n2.length && (r2[e2] = n2[0]), void 0 !== r2.removeListener && this.emit("removeListener", e2, a2 || t2);
  }
  return this;
}, S.prototype.off = S.prototype.removeListener, S.prototype.removeAllListeners = function(e2) {
  var t2, n2, r2;
  if (void 0 === (n2 = this._events)) return this;
  if (void 0 === n2.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n2[e2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[e2]), this;
  if (0 === arguments.length) {
    var i2, o2 = Object.keys(n2);
    for (r2 = 0; r2 < o2.length; ++r2) "removeListener" !== (i2 = o2[r2]) && this.removeAllListeners(i2);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if ("function" == typeof (t2 = n2[e2])) this.removeListener(e2, t2);
  else if (void 0 !== t2) for (r2 = t2.length - 1; r2 >= 0; r2--) this.removeListener(e2, t2[r2]);
  return this;
}, S.prototype.listeners = function(e2) {
  return O(this, e2, true);
}, S.prototype.rawListeners = function(e2) {
  return O(this, e2, false);
}, S.listenerCount = function(e2, t2) {
  return "function" == typeof e2.listenerCount ? e2.listenerCount(t2) : A.call(e2, t2);
}, S.prototype.listenerCount = A, S.prototype.eventNames = function() {
  return this._eventsCount > 0 ? g(this._events) : [];
};
var L = Object.prototype.hasOwnProperty;
function I(e2, t2, n2) {
  for (n2 of e2.keys()) if (D(n2, t2)) return n2;
}
function D(e2, t2) {
  var n2, r2, i2;
  if (e2 === t2) return true;
  if (e2 && t2 && (n2 = e2.constructor) === t2.constructor) {
    if (n2 === Date) return e2.getTime() === t2.getTime();
    if (n2 === RegExp) return e2.toString() === t2.toString();
    if (n2 === Array) {
      if ((r2 = e2.length) === t2.length) for (; r2-- && D(e2[r2], t2[r2]); ) ;
      return -1 === r2;
    }
    if (n2 === Set) {
      if (e2.size !== t2.size) return false;
      for (r2 of e2) {
        if ((i2 = r2) && "object" == typeof i2 && !(i2 = I(t2, i2))) return false;
        if (!t2.has(i2)) return false;
      }
      return true;
    }
    if (n2 === Map) {
      if (e2.size !== t2.size) return false;
      for (r2 of e2) {
        if ((i2 = r2[0]) && "object" == typeof i2 && !(i2 = I(t2, i2))) return false;
        if (!D(r2[1], t2.get(i2))) return false;
      }
      return true;
    }
    if (n2 === ArrayBuffer) e2 = new Uint8Array(e2), t2 = new Uint8Array(t2);
    else if (n2 === DataView) {
      if ((r2 = e2.byteLength) === t2.byteLength) for (; r2-- && e2.getInt8(r2) === t2.getInt8(r2); ) ;
      return -1 === r2;
    }
    if (ArrayBuffer.isView(e2)) {
      if ((r2 = e2.byteLength) === t2.byteLength) for (; r2-- && e2[r2] === t2[r2]; ) ;
      return -1 === r2;
    }
    if (!n2 || "object" == typeof e2) {
      for (n2 in r2 = 0, e2) {
        if (L.call(e2, n2) && ++r2 && !L.call(t2, n2)) return false;
        if (!(n2 in t2) || !D(e2[n2], t2[n2])) return false;
      }
      return Object.keys(t2).length === r2;
    }
  }
  return e2 != e2 && t2 != t2;
}
var N = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
};
var R = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
};
var F = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
};
var B = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
};
var U = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
var V = class _V {
  static getFirstMatch(e2, t2) {
    const n2 = t2.match(e2);
    return n2 && n2.length > 0 && n2[1] || "";
  }
  static getSecondMatch(e2, t2) {
    const n2 = t2.match(e2);
    return n2 && n2.length > 1 && n2[2] || "";
  }
  static matchAndReturnConst(e2, t2, n2) {
    if (e2.test(t2)) return n2;
  }
  static getWindowsVersionName(e2) {
    switch (e2) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e2) {
    const t2 = e2.split(".").splice(0, 2).map((e3) => parseInt(e3, 10) || 0);
    if (t2.push(0), 10 === t2[0]) switch (t2[1]) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return;
    }
  }
  static getAndroidVersionName(e2) {
    const t2 = e2.split(".").splice(0, 2).map((e3) => parseInt(e3, 10) || 0);
    if (t2.push(0), !(1 === t2[0] && t2[1] < 5)) return 1 === t2[0] && t2[1] < 6 ? "Cupcake" : 1 === t2[0] && t2[1] >= 6 ? "Donut" : 2 === t2[0] && t2[1] < 2 ? "Eclair" : 2 === t2[0] && 2 === t2[1] ? "Froyo" : 2 === t2[0] && t2[1] > 2 ? "Gingerbread" : 3 === t2[0] ? "Honeycomb" : 4 === t2[0] && t2[1] < 1 ? "Ice Cream Sandwich" : 4 === t2[0] && t2[1] < 4 ? "Jelly Bean" : 4 === t2[0] && t2[1] >= 4 ? "KitKat" : 5 === t2[0] ? "Lollipop" : 6 === t2[0] ? "Marshmallow" : 7 === t2[0] ? "Nougat" : 8 === t2[0] ? "Oreo" : 9 === t2[0] ? "Pie" : void 0;
  }
  static getVersionPrecision(e2) {
    return e2.split(".").length;
  }
  static compareVersions(e2, t2, n2 = false) {
    const r2 = _V.getVersionPrecision(e2), i2 = _V.getVersionPrecision(t2);
    let o2 = Math.max(r2, i2), a2 = 0;
    const s2 = _V.map([e2, t2], (e3) => {
      const t3 = o2 - _V.getVersionPrecision(e3), n3 = e3 + new Array(t3 + 1).join(".0");
      return _V.map(n3.split("."), (e4) => new Array(20 - e4.length).join("0") + e4).reverse();
    });
    for (n2 && (a2 = o2 - Math.min(r2, i2)), o2 -= 1; o2 >= a2; ) {
      if (s2[0][o2] > s2[1][o2]) return 1;
      if (s2[0][o2] === s2[1][o2]) {
        if (o2 === a2) return 0;
        o2 -= 1;
      } else if (s2[0][o2] < s2[1][o2]) return -1;
    }
  }
  static map(e2, t2) {
    const n2 = [];
    let r2;
    if (Array.prototype.map) return Array.prototype.map.call(e2, t2);
    for (r2 = 0; r2 < e2.length; r2 += 1) n2.push(t2(e2[r2]));
    return n2;
  }
  static find(e2, t2) {
    let n2, r2;
    if (Array.prototype.find) return Array.prototype.find.call(e2, t2);
    for (n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) {
      const r3 = e2[n2];
      if (t2(r3, n2)) return r3;
    }
  }
  static assign(e2, ...t2) {
    const n2 = e2;
    let r2, i2;
    if (Object.assign) return Object.assign(e2, ...t2);
    for (r2 = 0, i2 = t2.length; r2 < i2; r2 += 1) {
      const e3 = t2[r2];
      if ("object" == typeof e3 && null !== e3) {
        Object.keys(e3).forEach((t3) => {
          n2[t3] = e3[t3];
        });
      }
    }
    return e2;
  }
  static getBrowserAlias(e2) {
    return N[e2];
  }
  static getBrowserTypeByAlias(e2) {
    return R[e2] || "";
  }
};
var J = /version\/(\d+(\.?_?\d+)+)/i;
var $ = [{
  test: [/googlebot/i],
  describe(e2) {
    const t2 = {
      name: "Googlebot"
    }, n2 = V.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/opera/i],
  describe(e2) {
    const t2 = {
      name: "Opera"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/opr\/|opios/i],
  describe(e2) {
    const t2 = {
      name: "Opera"
    }, n2 = V.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/SamsungBrowser/i],
  describe(e2) {
    const t2 = {
      name: "Samsung Internet for Android"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/Whale/i],
  describe(e2) {
    const t2 = {
      name: "NAVER Whale Browser"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/MZBrowser/i],
  describe(e2) {
    const t2 = {
      name: "MZ Browser"
    }, n2 = V.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/focus/i],
  describe(e2) {
    const t2 = {
      name: "Focus"
    }, n2 = V.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/swing/i],
  describe(e2) {
    const t2 = {
      name: "Swing"
    }, n2 = V.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/coast/i],
  describe(e2) {
    const t2 = {
      name: "Opera Coast"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/opt\/\d+(?:.?_?\d+)+/i],
  describe(e2) {
    const t2 = {
      name: "Opera Touch"
    }, n2 = V.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/yabrowser/i],
  describe(e2) {
    const t2 = {
      name: "Yandex Browser"
    }, n2 = V.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/ucbrowser/i],
  describe(e2) {
    const t2 = {
      name: "UC Browser"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/Maxthon|mxios/i],
  describe(e2) {
    const t2 = {
      name: "Maxthon"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/epiphany/i],
  describe(e2) {
    const t2 = {
      name: "Epiphany"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/puffin/i],
  describe(e2) {
    const t2 = {
      name: "Puffin"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/sleipnir/i],
  describe(e2) {
    const t2 = {
      name: "Sleipnir"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/k-meleon/i],
  describe(e2) {
    const t2 = {
      name: "K-Meleon"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/micromessenger/i],
  describe(e2) {
    const t2 = {
      name: "WeChat"
    }, n2 = V.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/qqbrowser/i],
  describe(e2) {
    const t2 = {
      name: /qqbrowserlite/i.test(e2) ? "QQ Browser Lite" : "QQ Browser"
    }, n2 = V.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/msie|trident/i],
  describe(e2) {
    const t2 = {
      name: "Internet Explorer"
    }, n2 = V.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/\sedg\//i],
  describe(e2) {
    const t2 = {
      name: "Microsoft Edge"
    }, n2 = V.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/edg([ea]|ios)/i],
  describe(e2) {
    const t2 = {
      name: "Microsoft Edge"
    }, n2 = V.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/vivaldi/i],
  describe(e2) {
    const t2 = {
      name: "Vivaldi"
    }, n2 = V.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/seamonkey/i],
  describe(e2) {
    const t2 = {
      name: "SeaMonkey"
    }, n2 = V.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/sailfish/i],
  describe(e2) {
    const t2 = {
      name: "Sailfish"
    }, n2 = V.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/silk/i],
  describe(e2) {
    const t2 = {
      name: "Amazon Silk"
    }, n2 = V.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/phantom/i],
  describe(e2) {
    const t2 = {
      name: "PhantomJS"
    }, n2 = V.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/slimerjs/i],
  describe(e2) {
    const t2 = {
      name: "SlimerJS"
    }, n2 = V.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
  describe(e2) {
    const t2 = {
      name: "BlackBerry"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/(web|hpw)[o0]s/i],
  describe(e2) {
    const t2 = {
      name: "WebOS Browser"
    }, n2 = V.getFirstMatch(J, e2) || V.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/bada/i],
  describe(e2) {
    const t2 = {
      name: "Bada"
    }, n2 = V.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/tizen/i],
  describe(e2) {
    const t2 = {
      name: "Tizen"
    }, n2 = V.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/qupzilla/i],
  describe(e2) {
    const t2 = {
      name: "QupZilla"
    }, n2 = V.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/firefox|iceweasel|fxios/i],
  describe(e2) {
    const t2 = {
      name: "Firefox"
    }, n2 = V.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/electron/i],
  describe(e2) {
    const t2 = {
      name: "Electron"
    }, n2 = V.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/MiuiBrowser/i],
  describe(e2) {
    const t2 = {
      name: "Miui"
    }, n2 = V.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/chromium/i],
  describe(e2) {
    const t2 = {
      name: "Chromium"
    }, n2 = V.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e2) || V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/chrome|crios|crmo/i],
  describe(e2) {
    const t2 = {
      name: "Chrome"
    }, n2 = V.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/GSA/i],
  describe(e2) {
    const t2 = {
      name: "Google Search"
    }, n2 = V.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test(e2) {
    const t2 = !e2.test(/like android/i), n2 = e2.test(/android/i);
    return t2 && n2;
  },
  describe(e2) {
    const t2 = {
      name: "Android Browser"
    }, n2 = V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/playstation 4/i],
  describe(e2) {
    const t2 = {
      name: "PlayStation 4"
    }, n2 = V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/safari|applewebkit/i],
  describe(e2) {
    const t2 = {
      name: "Safari"
    }, n2 = V.getFirstMatch(J, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/.*/i],
  describe(e2) {
    const t2 = -1 !== e2.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
    return {
      name: V.getFirstMatch(t2, e2),
      version: V.getSecondMatch(t2, e2)
    };
  }
}];
var q = [{
  test: [/Roku\/DVP/],
  describe(e2) {
    const t2 = V.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e2);
    return {
      name: B.Roku,
      version: t2
    };
  }
}, {
  test: [/windows phone/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e2);
    return {
      name: B.WindowsPhone,
      version: t2
    };
  }
}, {
  test: [/windows /i],
  describe(e2) {
    const t2 = V.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e2), n2 = V.getWindowsVersionName(t2);
    return {
      name: B.Windows,
      version: t2,
      versionName: n2
    };
  }
}, {
  test: [/Macintosh(.*?) FxiOS(.*?)\//],
  describe(e2) {
    const t2 = {
      name: B.iOS
    }, n2 = V.getSecondMatch(/(Version\/)(\d[\d.]+)/, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/macintosh/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e2).replace(/[_\s]/g, "."), n2 = V.getMacOSVersionName(t2), r2 = {
      name: B.MacOS,
      version: t2
    };
    return n2 && (r2.versionName = n2), r2;
  }
}, {
  test: [/(ipod|iphone|ipad)/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e2).replace(/[_\s]/g, ".");
    return {
      name: B.iOS,
      version: t2
    };
  }
}, {
  test(e2) {
    const t2 = !e2.test(/like android/i), n2 = e2.test(/android/i);
    return t2 && n2;
  },
  describe(e2) {
    const t2 = V.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e2), n2 = V.getAndroidVersionName(t2), r2 = {
      name: B.Android,
      version: t2
    };
    return n2 && (r2.versionName = n2), r2;
  }
}, {
  test: [/(web|hpw)[o0]s/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e2), n2 = {
      name: B.WebOS
    };
    return t2 && t2.length && (n2.version = t2), n2;
  }
}, {
  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e2) || V.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e2) || V.getFirstMatch(/\bbb(\d+)/i, e2);
    return {
      name: B.BlackBerry,
      version: t2
    };
  }
}, {
  test: [/bada/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e2);
    return {
      name: B.Bada,
      version: t2
    };
  }
}, {
  test: [/tizen/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e2);
    return {
      name: B.Tizen,
      version: t2
    };
  }
}, {
  test: [/linux/i],
  describe: () => ({
    name: B.Linux
  })
}, {
  test: [/CrOS/],
  describe: () => ({
    name: B.ChromeOS
  })
}, {
  test: [/PlayStation 4/],
  describe(e2) {
    const t2 = V.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e2);
    return {
      name: B.PlayStation4,
      version: t2
    };
  }
}];
var W = [{
  test: [/googlebot/i],
  describe: () => ({
    type: "bot",
    vendor: "Google"
  })
}, {
  test: [/huawei/i],
  describe(e2) {
    const t2 = V.getFirstMatch(/(can-l01)/i, e2) && "Nova", n2 = {
      type: F.mobile,
      vendor: "Huawei"
    };
    return t2 && (n2.model = t2), n2;
  }
}, {
  test: [/nexus\s*(?:7|8|9|10).*/i],
  describe: () => ({
    type: F.tablet,
    vendor: "Nexus"
  })
}, {
  test: [/ipad/i],
  describe: () => ({
    type: F.tablet,
    vendor: "Apple",
    model: "iPad"
  })
}, {
  test: [/Macintosh(.*?) FxiOS(.*?)\//],
  describe: () => ({
    type: F.tablet,
    vendor: "Apple",
    model: "iPad"
  })
}, {
  test: [/kftt build/i],
  describe: () => ({
    type: F.tablet,
    vendor: "Amazon",
    model: "Kindle Fire HD 7"
  })
}, {
  test: [/silk/i],
  describe: () => ({
    type: F.tablet,
    vendor: "Amazon"
  })
}, {
  test: [/tablet(?! pc)/i],
  describe: () => ({
    type: F.tablet
  })
}, {
  test(e2) {
    const t2 = e2.test(/ipod|iphone/i), n2 = e2.test(/like (ipod|iphone)/i);
    return t2 && !n2;
  },
  describe(e2) {
    const t2 = V.getFirstMatch(/(ipod|iphone)/i, e2);
    return {
      type: F.mobile,
      vendor: "Apple",
      model: t2
    };
  }
}, {
  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
  describe: () => ({
    type: F.mobile,
    vendor: "Nexus"
  })
}, {
  test: [/[^-]mobi/i],
  describe: () => ({
    type: F.mobile
  })
}, {
  test: (e2) => "blackberry" === e2.getBrowserName(true),
  describe: () => ({
    type: F.mobile,
    vendor: "BlackBerry"
  })
}, {
  test: (e2) => "bada" === e2.getBrowserName(true),
  describe: () => ({
    type: F.mobile
  })
}, {
  test: (e2) => "windows phone" === e2.getBrowserName(),
  describe: () => ({
    type: F.mobile,
    vendor: "Microsoft"
  })
}, {
  test(e2) {
    const t2 = Number(String(e2.getOSVersion()).split(".")[0]);
    return "android" === e2.getOSName(true) && t2 >= 3;
  },
  describe: () => ({
    type: F.tablet
  })
}, {
  test: (e2) => "android" === e2.getOSName(true),
  describe: () => ({
    type: F.mobile
  })
}, {
  test: (e2) => "macos" === e2.getOSName(true),
  describe: () => ({
    type: F.desktop,
    vendor: "Apple"
  })
}, {
  test: (e2) => "windows" === e2.getOSName(true),
  describe: () => ({
    type: F.desktop
  })
}, {
  test: (e2) => "linux" === e2.getOSName(true),
  describe: () => ({
    type: F.desktop
  })
}, {
  test: (e2) => "playstation 4" === e2.getOSName(true),
  describe: () => ({
    type: F.tv
  })
}, {
  test: (e2) => "roku" === e2.getOSName(true),
  describe: () => ({
    type: F.tv
  })
}];
var z = [{
  test: (e2) => "microsoft edge" === e2.getBrowserName(true),
  describe(e2) {
    if (/\sedg\//i.test(e2)) return {
      name: U.Blink
    };
    const t2 = V.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e2);
    return {
      name: U.EdgeHTML,
      version: t2
    };
  }
}, {
  test: [/trident/i],
  describe(e2) {
    const t2 = {
      name: U.Trident
    }, n2 = V.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: (e2) => e2.test(/presto/i),
  describe(e2) {
    const t2 = {
      name: U.Presto
    }, n2 = V.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test(e2) {
    const t2 = e2.test(/gecko/i), n2 = e2.test(/like gecko/i);
    return t2 && !n2;
  },
  describe(e2) {
    const t2 = {
      name: U.Gecko
    }, n2 = V.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}, {
  test: [/(apple)?webkit\/537\.36/i],
  describe: () => ({
    name: U.Blink
  })
}, {
  test: [/(apple)?webkit/i],
  describe(e2) {
    const t2 = {
      name: U.WebKit
    }, n2 = V.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e2);
    return n2 && (t2.version = n2), t2;
  }
}];
var H = class {
  constructor(e2, t2 = false) {
    if (null == e2 || "" === e2) throw new Error("UserAgent parameter can't be empty");
    this._ua = e2, this.parsedResult = {}, true !== t2 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e2) {
    return e2.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e2 = V.find($, (e3) => {
      if ("function" == typeof e3.test) return e3.test(this);
      if (e3.test instanceof Array) return e3.test.some((e4) => this.test(e4));
      throw new Error("Browser's test function is not valid");
    });
    return e2 && (this.parsedResult.browser = e2.describe(this.getUA())), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(e2) {
    return e2 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e2 = V.find(q, (e3) => {
      if ("function" == typeof e3.test) return e3.test(this);
      if (e3.test instanceof Array) return e3.test.some((e4) => this.test(e4));
      throw new Error("Browser's test function is not valid");
    });
    return e2 && (this.parsedResult.os = e2.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(e2) {
    const {
      name: t2
    } = this.getOS();
    return e2 ? String(t2).toLowerCase() || "" : t2 || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(e2 = false) {
    const {
      type: t2
    } = this.getPlatform();
    return e2 ? String(t2).toLowerCase() || "" : t2 || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e2 = V.find(W, (e3) => {
      if ("function" == typeof e3.test) return e3.test(this);
      if (e3.test instanceof Array) return e3.test.some((e4) => this.test(e4));
      throw new Error("Browser's test function is not valid");
    });
    return e2 && (this.parsedResult.platform = e2.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(e2) {
    return e2 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e2 = V.find(z, (e3) => {
      if ("function" == typeof e3.test) return e3.test(this);
      if (e3.test instanceof Array) return e3.test.some((e4) => this.test(e4));
      throw new Error("Browser's test function is not valid");
    });
    return e2 && (this.parsedResult.engine = e2.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return V.assign({}, this.parsedResult);
  }
  satisfies(e2) {
    const t2 = {};
    let n2 = 0;
    const r2 = {};
    let i2 = 0;
    if (Object.keys(e2).forEach((o2) => {
      const a2 = e2[o2];
      "string" == typeof a2 ? (r2[o2] = a2, i2 += 1) : "object" == typeof a2 && (t2[o2] = a2, n2 += 1);
    }), n2 > 0) {
      const e3 = Object.keys(t2), n3 = V.find(e3, (e4) => this.isOS(e4));
      if (n3) {
        const e4 = this.satisfies(t2[n3]);
        if (void 0 !== e4) return e4;
      }
      const r3 = V.find(e3, (e4) => this.isPlatform(e4));
      if (r3) {
        const e4 = this.satisfies(t2[r3]);
        if (void 0 !== e4) return e4;
      }
    }
    if (i2 > 0) {
      const e3 = Object.keys(r2), t3 = V.find(e3, (e4) => this.isBrowser(e4, true));
      if (void 0 !== t3) return this.compareVersion(r2[t3]);
    }
  }
  isBrowser(e2, t2 = false) {
    const n2 = this.getBrowserName().toLowerCase();
    let r2 = e2.toLowerCase();
    const i2 = V.getBrowserTypeByAlias(r2);
    return t2 && i2 && (r2 = i2.toLowerCase()), r2 === n2;
  }
  compareVersion(e2) {
    let t2 = [0], n2 = e2, r2 = false;
    const i2 = this.getBrowserVersion();
    if ("string" == typeof i2) return ">" === e2[0] || "<" === e2[0] ? (n2 = e2.substr(1), "=" === e2[1] ? (r2 = true, n2 = e2.substr(2)) : t2 = [], ">" === e2[0] ? t2.push(1) : t2.push(-1)) : "=" === e2[0] ? n2 = e2.substr(1) : "~" === e2[0] && (r2 = true, n2 = e2.substr(1)), t2.indexOf(V.compareVersions(i2, n2, r2)) > -1;
  }
  isOS(e2) {
    return this.getOSName(true) === String(e2).toLowerCase();
  }
  isPlatform(e2) {
    return this.getPlatformType(true) === String(e2).toLowerCase();
  }
  isEngine(e2) {
    return this.getEngineName(true) === String(e2).toLowerCase();
  }
  is(e2, t2 = false) {
    return this.isBrowser(e2, t2) || this.isOS(e2) || this.isPlatform(e2);
  }
  some(e2 = []) {
    return e2.some((e3) => this.is(e3));
  }
};
var G = class {
  static getParser(e2, t2 = false) {
    if ("string" != typeof e2) throw new Error("UserAgent should be a string");
    return new H(e2, t2);
  }
  static parse(e2) {
    return new H(e2).getResult();
  }
  static get BROWSER_MAP() {
    return R;
  }
  static get ENGINE_MAP() {
    return U;
  }
  static get OS_MAP() {
    return B;
  }
  static get PLATFORMS_MAP() {
    return F;
  }
};
function Q() {
  return Date.now() + Math.random().toString();
}
function K() {
  throw new Error("Method must be implemented in subclass");
}
function Y(e2, t2) {
  return null != t2 && t2.proxyUrl ? t2.proxyUrl + ("/" === t2.proxyUrl.slice(-1) ? "" : "/") + e2.substring(8) : e2;
}
function X(e2) {
  return null != e2 && e2.callObjectBundleUrlOverride ? e2.callObjectBundleUrlOverride : Y("https://c.daily.co/call-machine/versioned/".concat("0.73.0", "/static/call-machine-object-bundle.js"), e2);
}
function Z(e2) {
  try {
    new URL(e2);
  } catch (e3) {
    return false;
  }
  return true;
}
var ee = Object.prototype.toString;
function te(e2) {
  switch (ee.call(e2)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true;
    default:
      return de(e2, Error);
  }
}
function ne(e2, t2) {
  return ee.call(e2) === `[object ${t2}]`;
}
function re(e2) {
  return ne(e2, "ErrorEvent");
}
function ie(e2) {
  return ne(e2, "DOMError");
}
function oe(e2) {
  return ne(e2, "String");
}
function ae(e2) {
  return "object" == typeof e2 && null !== e2 && "__sentry_template_string__" in e2 && "__sentry_template_values__" in e2;
}
function se(e2) {
  return null === e2 || ae(e2) || "object" != typeof e2 && "function" != typeof e2;
}
function ce(e2) {
  return ne(e2, "Object");
}
function le(e2) {
  return "undefined" != typeof Event && de(e2, Event);
}
function ue(e2) {
  return Boolean(e2 && e2.then && "function" == typeof e2.then);
}
function de(e2, t2) {
  try {
    return e2 instanceof t2;
  } catch (e3) {
    return false;
  }
}
function pe(e2) {
  return !("object" != typeof e2 || null === e2 || !e2.__isVue && !e2._isVue);
}
function he(e2, t2 = 0) {
  return "string" != typeof e2 || 0 === t2 || e2.length <= t2 ? e2 : `${e2.slice(0, t2)}...`;
}
function fe(e2, t2) {
  if (!Array.isArray(e2)) return "";
  const n2 = [];
  for (let t3 = 0; t3 < e2.length; t3++) {
    const r2 = e2[t3];
    try {
      pe(r2) ? n2.push("[VueViewModel]") : n2.push(String(r2));
    } catch (e3) {
      n2.push("[value cannot be serialized]");
    }
  }
  return n2.join(t2);
}
function ve(e2, t2, n2 = false) {
  return !!oe(e2) && (ne(t2, "RegExp") ? t2.test(e2) : !!oe(t2) && (n2 ? e2 === t2 : e2.includes(t2)));
}
function ge(e2, t2 = [], n2 = false) {
  return t2.some((t3) => ve(e2, t3, n2));
}
function me(e2, t2, n2 = 250, r2, i2, o2, a2) {
  if (!(o2.exception && o2.exception.values && a2 && de(a2.originalException, Error))) return;
  const s2 = o2.exception.values.length > 0 ? o2.exception.values[o2.exception.values.length - 1] : void 0;
  var c2, l2;
  s2 && (o2.exception.values = (c2 = ye(e2, t2, i2, a2.originalException, r2, o2.exception.values, s2, 0), l2 = n2, c2.map((e3) => (e3.value && (e3.value = he(e3.value, l2)), e3))));
}
function ye(e2, t2, n2, r2, i2, o2, a2, s2) {
  if (o2.length >= n2 + 1) return o2;
  let c2 = [...o2];
  if (de(r2[i2], Error)) {
    _e(a2, s2);
    const o3 = e2(t2, r2[i2]), l2 = c2.length;
    be(o3, i2, l2, s2), c2 = ye(e2, t2, n2, r2[i2], i2, [o3, ...c2], o3, l2);
  }
  return Array.isArray(r2.errors) && r2.errors.forEach((r3, o3) => {
    if (de(r3, Error)) {
      _e(a2, s2);
      const l2 = e2(t2, r3), u2 = c2.length;
      be(l2, `errors[${o3}]`, u2, s2), c2 = ye(e2, t2, n2, r3, i2, [l2, ...c2], l2, u2);
    }
  }), c2;
}
function _e(e2, t2) {
  e2.mechanism = e2.mechanism || {
    type: "generic",
    handled: true
  }, e2.mechanism = __spreadProps(__spreadValues(__spreadValues({}, e2.mechanism), "AggregateError" === e2.type && {
    is_exception_group: true
  }), {
    exception_id: t2
  });
}
function be(e2, t2, n2, r2) {
  e2.mechanism = e2.mechanism || {
    type: "generic",
    handled: true
  }, e2.mechanism = __spreadProps(__spreadValues({}, e2.mechanism), {
    type: "chained",
    source: t2,
    exception_id: n2,
    parent_id: r2
  });
}
function we(e2) {
  return void 0 === e2 ? void 0 : e2 >= 400 && e2 < 500 ? "warning" : e2 >= 500 ? "error" : void 0;
}
var Se = "8.33.1";
var ke = globalThis;
function Me(e2, t2, n2) {
  const r2 = n2 || ke, i2 = r2.__SENTRY__ = r2.__SENTRY__ || {}, o2 = i2[Se] = i2[Se] || {};
  return o2[e2] || (o2[e2] = t2());
}
var Ce = ke;
function Ee(e2, t2 = {}) {
  if (!e2) return "<unknown>";
  try {
    let n2 = e2;
    const r2 = 5, i2 = [];
    let o2 = 0, a2 = 0;
    const s2 = " > ", c2 = s2.length;
    let l2;
    const u2 = Array.isArray(t2) ? t2 : t2.keyAttrs, d2 = !Array.isArray(t2) && t2.maxStringLength || 80;
    for (; n2 && o2++ < r2 && (l2 = Te(n2, u2), !("html" === l2 || o2 > 1 && a2 + i2.length * c2 + l2.length >= d2)); ) i2.push(l2), a2 += l2.length, n2 = n2.parentNode;
    return i2.reverse().join(s2);
  } catch (e3) {
    return "<unknown>";
  }
}
function Te(e2, t2) {
  const n2 = e2, r2 = [];
  if (!n2 || !n2.tagName) return "";
  if (Ce.HTMLElement && n2 instanceof HTMLElement && n2.dataset) {
    if (n2.dataset.sentryComponent) return n2.dataset.sentryComponent;
    if (n2.dataset.sentryElement) return n2.dataset.sentryElement;
  }
  r2.push(n2.tagName.toLowerCase());
  const i2 = t2 && t2.length ? t2.filter((e3) => n2.getAttribute(e3)).map((e3) => [e3, n2.getAttribute(e3)]) : null;
  if (i2 && i2.length) i2.forEach((e3) => {
    r2.push(`[${e3[0]}="${e3[1]}"]`);
  });
  else {
    n2.id && r2.push(`#${n2.id}`);
    const e3 = n2.className;
    if (e3 && oe(e3)) {
      const t3 = e3.split(/\s+/);
      for (const e4 of t3) r2.push(`.${e4}`);
    }
  }
  const o2 = ["aria-label", "type", "name", "title", "alt"];
  for (const e3 of o2) {
    const t3 = n2.getAttribute(e3);
    t3 && r2.push(`[${e3}="${t3}"]`);
  }
  return r2.join("");
}
var Pe = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
var Oe = ["debug", "info", "warn", "error", "log", "assert", "trace"];
var Ae = {};
function je(e2) {
  if (!("console" in ke)) return e2();
  const t2 = ke.console, n2 = {}, r2 = Object.keys(Ae);
  r2.forEach((e3) => {
    const r3 = Ae[e3];
    n2[e3] = t2[e3], t2[e3] = r3;
  });
  try {
    return e2();
  } finally {
    r2.forEach((e3) => {
      t2[e3] = n2[e3];
    });
  }
}
var xe = Me("logger", function() {
  let e2 = false;
  const t2 = {
    enable: () => {
      e2 = true;
    },
    disable: () => {
      e2 = false;
    },
    isEnabled: () => e2
  };
  return Pe ? Oe.forEach((n2) => {
    t2[n2] = (...t3) => {
      e2 && je(() => {
        ke.console[n2](`Sentry Logger [${n2}]:`, ...t3);
      });
    };
  }) : Oe.forEach((e3) => {
    t2[e3] = () => {
    };
  }), t2;
});
var Le = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Ie(e2, t2 = false) {
  const {
    host: n2,
    path: r2,
    pass: i2,
    port: o2,
    projectId: a2,
    protocol: s2,
    publicKey: c2
  } = e2;
  return `${s2}://${c2}${t2 && i2 ? `:${i2}` : ""}@${n2}${o2 ? `:${o2}` : ""}/${r2 ? `${r2}/` : r2}${a2}`;
}
function De(e2) {
  return {
    protocol: e2.protocol,
    publicKey: e2.publicKey || "",
    pass: e2.pass || "",
    host: e2.host,
    port: e2.port || "",
    path: e2.path || "",
    projectId: e2.projectId
  };
}
function Ne(e2) {
  const t2 = "string" == typeof e2 ? function(e3) {
    const t3 = Le.exec(e3);
    if (!t3) return void je(() => {
      console.error(`Invalid Sentry Dsn: ${e3}`);
    });
    const [n2, r2, i2 = "", o2 = "", a2 = "", s2 = ""] = t3.slice(1);
    let c2 = "", l2 = s2;
    const u2 = l2.split("/");
    if (u2.length > 1 && (c2 = u2.slice(0, -1).join("/"), l2 = u2.pop()), l2) {
      const e4 = l2.match(/^\d+/);
      e4 && (l2 = e4[0]);
    }
    return De({
      host: o2,
      pass: i2,
      path: c2,
      projectId: l2,
      port: a2,
      protocol: n2,
      publicKey: r2
    });
  }(e2) : De(e2);
  if (t2 && function(e3) {
    if (!Pe) return true;
    const {
      port: t3,
      projectId: n2,
      protocol: r2
    } = e3;
    return !(["protocol", "publicKey", "host", "projectId"].find((t4) => !e3[t4] && (xe.error(`Invalid Sentry Dsn: ${t4} missing`), true)) || (n2.match(/^\d+$/) ? /* @__PURE__ */ function(e4) {
      return "http" === e4 || "https" === e4;
    }(r2) ? t3 && isNaN(parseInt(t3, 10)) && (xe.error(`Invalid Sentry Dsn: Invalid port ${t3}`), 1) : (xe.error(`Invalid Sentry Dsn: Invalid protocol ${r2}`), 1) : (xe.error(`Invalid Sentry Dsn: Invalid projectId ${n2}`), 1)));
  }(t2)) return t2;
}
var Re = class extends Error {
  constructor(e2, t2 = "warn") {
    super(e2), this.message = e2, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t2;
  }
};
function Fe(e2, t2, n2) {
  if (!(t2 in e2)) return;
  const r2 = e2[t2], i2 = n2(r2);
  "function" == typeof i2 && Ue(i2, r2), e2[t2] = i2;
}
function Be(e2, t2, n2) {
  try {
    Object.defineProperty(e2, t2, {
      value: n2,
      writable: true,
      configurable: true
    });
  } catch (n3) {
    Pe && xe.log(`Failed to add non-enumerable property "${t2}" to object`, e2);
  }
}
function Ue(e2, t2) {
  try {
    const n2 = t2.prototype || {};
    e2.prototype = t2.prototype = n2, Be(e2, "__sentry_original__", t2);
  } catch (e3) {
  }
}
function Ve(e2) {
  return e2.__sentry_original__;
}
function Je(e2) {
  if (te(e2)) return __spreadValues({
    message: e2.message,
    name: e2.name,
    stack: e2.stack
  }, qe(e2));
  if (le(e2)) {
    const t2 = __spreadValues({
      type: e2.type,
      target: $e(e2.target),
      currentTarget: $e(e2.currentTarget)
    }, qe(e2));
    return "undefined" != typeof CustomEvent && de(e2, CustomEvent) && (t2.detail = e2.detail), t2;
  }
  return e2;
}
function $e(e2) {
  try {
    return t2 = e2, "undefined" != typeof Element && de(t2, Element) ? Ee(e2) : Object.prototype.toString.call(e2);
  } catch (e3) {
    return "<unknown>";
  }
  var t2;
}
function qe(e2) {
  if ("object" == typeof e2 && null !== e2) {
    const t2 = {};
    for (const n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
    return t2;
  }
  return {};
}
function We(e2) {
  return ze(e2, /* @__PURE__ */ new Map());
}
function ze(e2, t2) {
  if (function(e3) {
    if (!ce(e3)) return false;
    try {
      const t3 = Object.getPrototypeOf(e3).constructor.name;
      return !t3 || "Object" === t3;
    } catch (e4) {
      return true;
    }
  }(e2)) {
    const n2 = t2.get(e2);
    if (void 0 !== n2) return n2;
    const r2 = {};
    t2.set(e2, r2);
    for (const n3 of Object.getOwnPropertyNames(e2)) void 0 !== e2[n3] && (r2[n3] = ze(e2[n3], t2));
    return r2;
  }
  if (Array.isArray(e2)) {
    const n2 = t2.get(e2);
    if (void 0 !== n2) return n2;
    const r2 = [];
    return t2.set(e2, r2), e2.forEach((e3) => {
      r2.push(ze(e3, t2));
    }), r2;
  }
  return e2;
}
var He = "?";
var Ge = /\(error: (.*)\)/;
var Qe = /captureMessage|captureException/;
function Ke(e2) {
  return e2[e2.length - 1] || {};
}
var Ye = "<anonymous>";
function Xe(e2) {
  try {
    return e2 && "function" == typeof e2 && e2.name || Ye;
  } catch (e3) {
    return Ye;
  }
}
function Ze(e2) {
  const t2 = e2.exception;
  if (t2) {
    const e3 = [];
    try {
      return t2.values.forEach((t3) => {
        t3.stacktrace.frames && e3.push(...t3.stacktrace.frames);
      }), e3;
    } catch (e4) {
      return;
    }
  }
}
var et = {};
var tt = {};
function nt(e2, t2) {
  et[e2] = et[e2] || [], et[e2].push(t2);
}
function rt(e2, t2) {
  tt[e2] || (t2(), tt[e2] = true);
}
function it(e2, t2) {
  const n2 = e2 && et[e2];
  if (n2) for (const r2 of n2) try {
    r2(t2);
  } catch (t3) {
    Pe && xe.error(`Error while triggering instrumentation handler.
Type: ${e2}
Name: ${Xe(r2)}
Error:`, t3);
  }
}
function ot() {
  "console" in ke && Oe.forEach(function(e2) {
    e2 in ke.console && Fe(ke.console, e2, function(t2) {
      return Ae[e2] = t2, function(...t3) {
        it("console", {
          args: t3,
          level: e2
        });
        const n2 = Ae[e2];
        n2 && n2.apply(ke.console, t3);
      };
    });
  });
}
var at = ke;
function st(e2) {
  return e2 && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e2.toString());
}
function ct() {
  if ("string" == typeof EdgeRuntime) return true;
  if (!function() {
    if (!("fetch" in at)) return false;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), true;
    } catch (e3) {
      return false;
    }
  }()) return false;
  if (st(at.fetch)) return true;
  let e2 = false;
  const t2 = at.document;
  if (t2 && "function" == typeof t2.createElement) try {
    const n2 = t2.createElement("iframe");
    n2.hidden = true, t2.head.appendChild(n2), n2.contentWindow && n2.contentWindow.fetch && (e2 = st(n2.contentWindow.fetch)), t2.head.removeChild(n2);
  } catch (e3) {
    Pe && xe.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e3);
  }
  return e2;
}
function lt() {
  return Date.now() / 1e3;
}
var ut = function() {
  const {
    performance: e2
  } = ke;
  if (!e2 || !e2.now) return lt;
  const t2 = Date.now() - e2.now(), n2 = null == e2.timeOrigin ? t2 : e2.timeOrigin;
  return () => (n2 + e2.now()) / 1e3;
}();
function dt(e2, t2) {
  const n2 = "fetch";
  nt(n2, e2), rt(n2, () => function(e3, t3 = false) {
    if (t3 && !ct()) return;
    Fe(ke, "fetch", function(t4) {
      return function(...n3) {
        const {
          method: r2,
          url: i2
        } = function(e4) {
          if (0 === e4.length) return {
            method: "GET",
            url: ""
          };
          if (2 === e4.length) {
            const [t6, n4] = e4;
            return {
              url: ht(t6),
              method: pt(n4, "method") ? String(n4.method).toUpperCase() : "GET"
            };
          }
          const t5 = e4[0];
          return {
            url: ht(t5),
            method: pt(t5, "method") ? String(t5.method).toUpperCase() : "GET"
          };
        }(n3), o2 = {
          args: n3,
          fetchData: {
            method: r2,
            url: i2
          },
          startTimestamp: 1e3 * ut()
        };
        e3 || it("fetch", __spreadValues({}, o2));
        const a2 = new Error().stack;
        return t4.apply(ke, n3).then((t5) => __async(this, null, function* () {
          return e3 ? e3(t5) : it("fetch", __spreadProps(__spreadValues({}, o2), {
            endTimestamp: 1e3 * ut(),
            response: t5
          })), t5;
        }), (e4) => {
          throw it("fetch", __spreadProps(__spreadValues({}, o2), {
            endTimestamp: 1e3 * ut(),
            error: e4
          })), te(e4) && void 0 === e4.stack && (e4.stack = a2, Be(e4, "framesToPop", 1)), e4;
        });
      };
    });
  }(void 0, t2));
}
function pt(e2, t2) {
  return !!e2 && "object" == typeof e2 && !!e2[t2];
}
function ht(e2) {
  return "string" == typeof e2 ? e2 : e2 ? pt(e2, "url") ? e2.url : e2.toString ? e2.toString() : "" : "";
}
(() => {
  const {
    performance: e2
  } = ke;
  if (!e2 || !e2.now) return;
  const t2 = 36e5, n2 = e2.now(), r2 = Date.now(), i2 = e2.timeOrigin ? Math.abs(e2.timeOrigin + n2 - r2) : t2, o2 = i2 < t2, a2 = e2.timing && e2.timing.navigationStart, s2 = "number" == typeof a2 ? Math.abs(a2 + n2 - r2) : t2;
  (o2 || s2 < t2) && i2 <= s2 && e2.timeOrigin;
})();
var ft = null;
function vt() {
  ft = ke.onerror, ke.onerror = function(e2, t2, n2, r2, i2) {
    return it("error", {
      column: r2,
      error: i2,
      line: n2,
      msg: e2,
      url: t2
    }), !(!ft || ft.__SENTRY_LOADER__) && ft.apply(this, arguments);
  }, ke.onerror.__SENTRY_INSTRUMENTED__ = true;
}
var gt = null;
function mt() {
  gt = ke.onunhandledrejection, ke.onunhandledrejection = function(e2) {
    return it("unhandledrejection", e2), !(gt && !gt.__SENTRY_LOADER__) || gt.apply(this, arguments);
  }, ke.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
function yt() {
  const e2 = ke, t2 = e2.crypto || e2.msCrypto;
  let n2 = () => 16 * Math.random();
  try {
    if (t2 && t2.randomUUID) return t2.randomUUID().replace(/-/g, "");
    t2 && t2.getRandomValues && (n2 = () => {
      const e3 = new Uint8Array(1);
      return t2.getRandomValues(e3), e3[0];
    });
  } catch (e3) {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (e3) => (e3 ^ (15 & n2()) >> e3 / 4).toString(16));
}
function _t(e2) {
  return e2.exception && e2.exception.values ? e2.exception.values[0] : void 0;
}
function bt(e2) {
  const {
    message: t2,
    event_id: n2
  } = e2;
  if (t2) return t2;
  const r2 = _t(e2);
  return r2 ? r2.type && r2.value ? `${r2.type}: ${r2.value}` : r2.type || r2.value || n2 || "<unknown>" : n2 || "<unknown>";
}
function wt(e2, t2, n2) {
  const r2 = e2.exception = e2.exception || {}, i2 = r2.values = r2.values || [], o2 = i2[0] = i2[0] || {};
  o2.value || (o2.value = t2 || ""), o2.type || (o2.type = n2 || "Error");
}
function St(e2, t2) {
  const n2 = _t(e2);
  if (!n2) return;
  const r2 = n2.mechanism;
  if (n2.mechanism = __spreadValues(__spreadValues({
    type: "generic",
    handled: true
  }, r2), t2), t2 && "data" in t2) {
    const e3 = __spreadValues(__spreadValues({}, r2 && r2.data), t2.data);
    n2.mechanism.data = e3;
  }
}
function kt(e2) {
  if (e2 && e2.__sentry_captured__) return true;
  try {
    Be(e2, "__sentry_captured__", true);
  } catch (e3) {
  }
  return false;
}
function Mt(e2, t2 = 100, n2 = 1 / 0) {
  try {
    return Et("", e2, t2, n2);
  } catch (e3) {
    return {
      ERROR: `**non-serializable** (${e3})`
    };
  }
}
function Ct(e2, t2 = 3, n2 = 102400) {
  const r2 = Mt(e2, t2);
  return i2 = r2, function(e3) {
    return ~-encodeURI(e3).split(/%..|./).length;
  }(JSON.stringify(i2)) > n2 ? Ct(e2, t2 - 1, n2) : r2;
  var i2;
}
function Et(e2, t2, n2 = 1 / 0, r2 = 1 / 0, i2 = /* @__PURE__ */ function() {
  const e3 = "function" == typeof WeakSet, t3 = e3 ? /* @__PURE__ */ new WeakSet() : [];
  return [function(n3) {
    if (e3) return !!t3.has(n3) || (t3.add(n3), false);
    for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] === n3) return true;
    return t3.push(n3), false;
  }, function(n3) {
    if (e3) t3.delete(n3);
    else for (let e4 = 0; e4 < t3.length; e4++) if (t3[e4] === n3) {
      t3.splice(e4, 1);
      break;
    }
  }];
}()) {
  const [o2, a2] = i2;
  if (null == t2 || ["boolean", "string"].includes(typeof t2) || "number" == typeof t2 && Number.isFinite(t2)) return t2;
  const s2 = function(e3, t3) {
    try {
      if ("domain" === e3 && t3 && "object" == typeof t3 && t3._events) return "[Domain]";
      if ("domainEmitter" === e3) return "[DomainEmitter]";
      if ("undefined" != typeof global && t3 === global) return "[Global]";
      if ("undefined" != typeof window && t3 === window) return "[Window]";
      if ("undefined" != typeof document && t3 === document) return "[Document]";
      if (pe(t3)) return "[VueViewModel]";
      if (ce(n3 = t3) && "nativeEvent" in n3 && "preventDefault" in n3 && "stopPropagation" in n3) return "[SyntheticEvent]";
      if ("number" == typeof t3 && !Number.isFinite(t3)) return `[${t3}]`;
      if ("function" == typeof t3) return `[Function: ${Xe(t3)}]`;
      if ("symbol" == typeof t3) return `[${String(t3)}]`;
      if ("bigint" == typeof t3) return `[BigInt: ${String(t3)}]`;
      const r3 = function(e4) {
        const t4 = Object.getPrototypeOf(e4);
        return t4 ? t4.constructor.name : "null prototype";
      }(t3);
      return /^HTML(\w*)Element$/.test(r3) ? `[HTMLElement: ${r3}]` : `[object ${r3}]`;
    } catch (e4) {
      return `**non-serializable** (${e4})`;
    }
    var n3;
  }(e2, t2);
  if (!s2.startsWith("[object ")) return s2;
  if (t2.__sentry_skip_normalization__) return t2;
  const c2 = "number" == typeof t2.__sentry_override_normalization_depth__ ? t2.__sentry_override_normalization_depth__ : n2;
  if (0 === c2) return s2.replace("object ", "");
  if (o2(t2)) return "[Circular ~]";
  const l2 = t2;
  if (l2 && "function" == typeof l2.toJSON) try {
    return Et("", l2.toJSON(), c2 - 1, r2, i2);
  } catch (e3) {
  }
  const u2 = Array.isArray(t2) ? [] : {};
  let d2 = 0;
  const p2 = Je(t2);
  for (const e3 in p2) {
    if (!Object.prototype.hasOwnProperty.call(p2, e3)) continue;
    if (d2 >= r2) {
      u2[e3] = "[MaxProperties ~]";
      break;
    }
    const t3 = p2[e3];
    u2[e3] = Et(e3, t3, c2 - 1, r2, i2), d2++;
  }
  return a2(t2), u2;
}
var Tt;
function Pt(e2) {
  return new At((t2) => {
    t2(e2);
  });
}
function Ot(e2) {
  return new At((t2, n2) => {
    n2(e2);
  });
}
!function(e2) {
  e2[e2.PENDING = 0] = "PENDING";
  e2[e2.RESOLVED = 1] = "RESOLVED";
  e2[e2.REJECTED = 2] = "REJECTED";
}(Tt || (Tt = {}));
var At = class _At {
  constructor(e2) {
    _At.prototype.__init.call(this), _At.prototype.__init2.call(this), _At.prototype.__init3.call(this), _At.prototype.__init4.call(this), this._state = Tt.PENDING, this._handlers = [];
    try {
      e2(this._resolve, this._reject);
    } catch (e3) {
      this._reject(e3);
    }
  }
  then(e2, t2) {
    return new _At((n2, r2) => {
      this._handlers.push([false, (t3) => {
        if (e2) try {
          n2(e2(t3));
        } catch (e3) {
          r2(e3);
        }
        else n2(t3);
      }, (e3) => {
        if (t2) try {
          n2(t2(e3));
        } catch (e4) {
          r2(e4);
        }
        else r2(e3);
      }]), this._executeHandlers();
    });
  }
  catch(e2) {
    return this.then((e3) => e3, e2);
  }
  finally(e2) {
    return new _At((t2, n2) => {
      let r2, i2;
      return this.then((t3) => {
        i2 = false, r2 = t3, e2 && e2();
      }, (t3) => {
        i2 = true, r2 = t3, e2 && e2();
      }).then(() => {
        i2 ? n2(r2) : t2(r2);
      });
    });
  }
  __init() {
    this._resolve = (e2) => {
      this._setResult(Tt.RESOLVED, e2);
    };
  }
  __init2() {
    this._reject = (e2) => {
      this._setResult(Tt.REJECTED, e2);
    };
  }
  __init3() {
    this._setResult = (e2, t2) => {
      this._state === Tt.PENDING && (ue(t2) ? t2.then(this._resolve, this._reject) : (this._state = e2, this._value = t2, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Tt.PENDING) return;
      const e2 = this._handlers.slice();
      this._handlers = [], e2.forEach((e3) => {
        e3[0] || (this._state === Tt.RESOLVED && e3[1](this._value), this._state === Tt.REJECTED && e3[2](this._value), e3[0] = true);
      });
    };
  }
};
function jt(e2) {
  const t2 = [];
  function n2(e3) {
    return t2.splice(t2.indexOf(e3), 1)[0] || Promise.resolve(void 0);
  }
  return {
    $: t2,
    add: function(r2) {
      if (!(void 0 === e2 || t2.length < e2)) return Ot(new Re("Not adding Promise because buffer limit was reached."));
      const i2 = r2();
      return -1 === t2.indexOf(i2) && t2.push(i2), i2.then(() => n2(i2)).then(null, () => n2(i2).then(null, () => {
      })), i2;
    },
    drain: function(e3) {
      return new At((n3, r2) => {
        let i2 = t2.length;
        if (!i2) return n3(true);
        const o2 = setTimeout(() => {
          e3 && e3 > 0 && n3(false);
        }, e3);
        t2.forEach((e4) => {
          Pt(e4).then(() => {
            --i2 || (clearTimeout(o2), n3(true));
          }, r2);
        });
      });
    }
  };
}
function xt(e2) {
  if (!e2) return {};
  const t2 = e2.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t2) return {};
  const n2 = t2[6] || "", r2 = t2[8] || "";
  return {
    host: t2[4],
    path: t2[5],
    protocol: t2[2],
    search: n2,
    hash: r2,
    relative: t2[5] + n2 + r2
  };
}
var Lt = ["fatal", "error", "warning", "log", "info", "debug"];
function It(e2) {
  return "warn" === e2 ? "warning" : Lt.includes(e2) ? e2 : "log";
}
var Dt = /^sentry-/;
function Nt(e2) {
  const t2 = function(e3) {
    if (!e3 || !oe(e3) && !Array.isArray(e3)) return;
    if (Array.isArray(e3)) return e3.reduce((e4, t3) => {
      const n3 = Rt(t3);
      return Object.entries(n3).forEach(([t4, n4]) => {
        e4[t4] = n4;
      }), e4;
    }, {});
    return Rt(e3);
  }(e2);
  if (!t2) return;
  const n2 = Object.entries(t2).reduce((e3, [t3, n3]) => {
    if (t3.match(Dt)) {
      e3[t3.slice(7)] = n3;
    }
    return e3;
  }, {});
  return Object.keys(n2).length > 0 ? n2 : void 0;
}
function Rt(e2) {
  return e2.split(",").map((e3) => e3.split("=").map((e4) => decodeURIComponent(e4.trim()))).reduce((e3, [t2, n2]) => (t2 && n2 && (e3[t2] = n2), e3), {});
}
function Ft(e2, t2 = []) {
  return [e2, t2];
}
function Bt(e2, t2) {
  const [n2, r2] = e2;
  return [n2, [...r2, t2]];
}
function Ut(e2, t2) {
  const n2 = e2[1];
  for (const e3 of n2) {
    if (t2(e3, e3[0].type)) return true;
  }
  return false;
}
function Vt(e2) {
  return ke.__SENTRY__ && ke.__SENTRY__.encodePolyfill ? ke.__SENTRY__.encodePolyfill(e2) : new TextEncoder().encode(e2);
}
function Jt(e2) {
  const [t2, n2] = e2;
  let r2 = JSON.stringify(t2);
  function i2(e3) {
    "string" == typeof r2 ? r2 = "string" == typeof e3 ? r2 + e3 : [Vt(r2), e3] : r2.push("string" == typeof e3 ? Vt(e3) : e3);
  }
  for (const e3 of n2) {
    const [t3, n3] = e3;
    if (i2(`
${JSON.stringify(t3)}
`), "string" == typeof n3 || n3 instanceof Uint8Array) i2(n3);
    else {
      let e4;
      try {
        e4 = JSON.stringify(n3);
      } catch (t4) {
        e4 = JSON.stringify(Mt(n3));
      }
      i2(e4);
    }
  }
  return "string" == typeof r2 ? r2 : function(e3) {
    const t3 = e3.reduce((e4, t4) => e4 + t4.length, 0), n3 = new Uint8Array(t3);
    let r3 = 0;
    for (const t4 of e3) n3.set(t4, r3), r3 += t4.length;
    return n3;
  }(r2);
}
function $t(e2) {
  const t2 = "string" == typeof e2.data ? Vt(e2.data) : e2.data;
  return [We({
    type: "attachment",
    length: t2.length,
    filename: e2.filename,
    content_type: e2.contentType,
    attachment_type: e2.attachmentType
  }), t2];
}
var qt = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket"
};
function Wt(e2) {
  return qt[e2];
}
function zt(e2) {
  if (!e2 || !e2.sdk) return;
  const {
    name: t2,
    version: n2
  } = e2.sdk;
  return {
    name: t2,
    version: n2
  };
}
function Ht(e2, {
  statusCode: t2,
  headers: n2
}, r2 = Date.now()) {
  const i2 = __spreadValues({}, e2), o2 = n2 && n2["x-sentry-rate-limits"], a2 = n2 && n2["retry-after"];
  if (o2) for (const e3 of o2.trim().split(",")) {
    const [t3, n3, , , o3] = e3.split(":", 5), a3 = parseInt(t3, 10), s2 = 1e3 * (isNaN(a3) ? 60 : a3);
    if (n3) for (const e4 of n3.split(";")) "metric_bucket" === e4 && o3 && !o3.split(";").includes("custom") || (i2[e4] = r2 + s2);
    else i2.all = r2 + s2;
  }
  else a2 ? i2.all = r2 + function(e3, t3 = Date.now()) {
    const n3 = parseInt(`${e3}`, 10);
    if (!isNaN(n3)) return 1e3 * n3;
    const r3 = Date.parse(`${e3}`);
    return isNaN(r3) ? 6e4 : r3 - t3;
  }(a2, r2) : 429 === t2 && (i2.all = r2 + 6e4);
  return i2;
}
function Gt() {
  return {
    traceId: yt(),
    spanId: yt().substring(16)
  };
}
var Qt = ke;
var Kt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function Yt() {
  return Xt(ke), ke;
}
function Xt(e2) {
  const t2 = e2.__SENTRY__ = e2.__SENTRY__ || {};
  return t2.version = t2.version || Se, t2[Se] = t2[Se] || {};
}
function Zt(e2, t2 = {}) {
  if (t2.user && (!e2.ipAddress && t2.user.ip_address && (e2.ipAddress = t2.user.ip_address), e2.did || t2.did || (e2.did = t2.user.id || t2.user.email || t2.user.username)), e2.timestamp = t2.timestamp || ut(), t2.abnormal_mechanism && (e2.abnormal_mechanism = t2.abnormal_mechanism), t2.ignoreDuration && (e2.ignoreDuration = t2.ignoreDuration), t2.sid && (e2.sid = 32 === t2.sid.length ? t2.sid : yt()), void 0 !== t2.init && (e2.init = t2.init), !e2.did && t2.did && (e2.did = `${t2.did}`), "number" == typeof t2.started && (e2.started = t2.started), e2.ignoreDuration) e2.duration = void 0;
  else if ("number" == typeof t2.duration) e2.duration = t2.duration;
  else {
    const t3 = e2.timestamp - e2.started;
    e2.duration = t3 >= 0 ? t3 : 0;
  }
  t2.release && (e2.release = t2.release), t2.environment && (e2.environment = t2.environment), !e2.ipAddress && t2.ipAddress && (e2.ipAddress = t2.ipAddress), !e2.userAgent && t2.userAgent && (e2.userAgent = t2.userAgent), "number" == typeof t2.errors && (e2.errors = t2.errors), t2.status && (e2.status = t2.status);
}
var en = "_sentrySpan";
function tn(e2, t2) {
  t2 ? Be(e2, en, t2) : delete e2[en];
}
function nn(e2) {
  return e2[en];
}
var rn = class _rn {
  constructor() {
    this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Gt();
  }
  clone() {
    const e2 = new _rn();
    return e2._breadcrumbs = [...this._breadcrumbs], e2._tags = __spreadValues({}, this._tags), e2._extra = __spreadValues({}, this._extra), e2._contexts = __spreadValues({}, this._contexts), e2._user = this._user, e2._level = this._level, e2._session = this._session, e2._transactionName = this._transactionName, e2._fingerprint = this._fingerprint, e2._eventProcessors = [...this._eventProcessors], e2._requestSession = this._requestSession, e2._attachments = [...this._attachments], e2._sdkProcessingMetadata = __spreadValues({}, this._sdkProcessingMetadata), e2._propagationContext = __spreadValues({}, this._propagationContext), e2._client = this._client, e2._lastEventId = this._lastEventId, tn(e2, nn(this)), e2;
  }
  setClient(e2) {
    this._client = e2;
  }
  setLastEventId(e2) {
    this._lastEventId = e2;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e2) {
    this._scopeListeners.push(e2);
  }
  addEventProcessor(e2) {
    return this._eventProcessors.push(e2), this;
  }
  setUser(e2) {
    return this._user = e2 || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    }, this._session && Zt(this._session, {
      user: e2
    }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e2) {
    return this._requestSession = e2, this;
  }
  setTags(e2) {
    return this._tags = __spreadValues(__spreadValues({}, this._tags), e2), this._notifyScopeListeners(), this;
  }
  setTag(e2, t2) {
    return this._tags = __spreadProps(__spreadValues({}, this._tags), {
      [e2]: t2
    }), this._notifyScopeListeners(), this;
  }
  setExtras(e2) {
    return this._extra = __spreadValues(__spreadValues({}, this._extra), e2), this._notifyScopeListeners(), this;
  }
  setExtra(e2, t2) {
    return this._extra = __spreadProps(__spreadValues({}, this._extra), {
      [e2]: t2
    }), this._notifyScopeListeners(), this;
  }
  setFingerprint(e2) {
    return this._fingerprint = e2, this._notifyScopeListeners(), this;
  }
  setLevel(e2) {
    return this._level = e2, this._notifyScopeListeners(), this;
  }
  setTransactionName(e2) {
    return this._transactionName = e2, this._notifyScopeListeners(), this;
  }
  setContext(e2, t2) {
    return null === t2 ? delete this._contexts[e2] : this._contexts[e2] = t2, this._notifyScopeListeners(), this;
  }
  setSession(e2) {
    return e2 ? this._session = e2 : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(e2) {
    if (!e2) return this;
    const t2 = "function" == typeof e2 ? e2(this) : e2, [n2, r2] = t2 instanceof on ? [t2.getScopeData(), t2.getRequestSession()] : ce(t2) ? [e2, e2.requestSession] : [], {
      tags: i2,
      extra: o2,
      user: a2,
      contexts: s2,
      level: c2,
      fingerprint: l2 = [],
      propagationContext: u2
    } = n2 || {};
    return this._tags = __spreadValues(__spreadValues({}, this._tags), i2), this._extra = __spreadValues(__spreadValues({}, this._extra), o2), this._contexts = __spreadValues(__spreadValues({}, this._contexts), s2), a2 && Object.keys(a2).length && (this._user = a2), c2 && (this._level = c2), l2.length && (this._fingerprint = l2), u2 && (this._propagationContext = u2), r2 && (this._requestSession = r2), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, tn(this, void 0), this._attachments = [], this._propagationContext = Gt(), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(e2, t2) {
    const n2 = "number" == typeof t2 ? t2 : 100;
    if (n2 <= 0) return this;
    const r2 = __spreadValues({
      timestamp: lt()
    }, e2), i2 = this._breadcrumbs;
    return i2.push(r2), this._breadcrumbs = i2.length > n2 ? i2.slice(-n2) : i2, this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(e2) {
    return this._attachments.push(e2), this;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: nn(this)
    };
  }
  setSDKProcessingMetadata(e2) {
    return this._sdkProcessingMetadata = __spreadValues(__spreadValues({}, this._sdkProcessingMetadata), e2), this;
  }
  setPropagationContext(e2) {
    return this._propagationContext = e2, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e2, t2) {
    const n2 = t2 && t2.event_id ? t2.event_id : yt();
    if (!this._client) return xe.warn("No client configured on scope - will not capture exception!"), n2;
    const r2 = new Error("Sentry syntheticException");
    return this._client.captureException(e2, __spreadProps(__spreadValues({
      originalException: e2,
      syntheticException: r2
    }, t2), {
      event_id: n2
    }), this), n2;
  }
  captureMessage(e2, t2, n2) {
    const r2 = n2 && n2.event_id ? n2.event_id : yt();
    if (!this._client) return xe.warn("No client configured on scope - will not capture message!"), r2;
    const i2 = new Error(e2);
    return this._client.captureMessage(e2, t2, __spreadProps(__spreadValues({
      originalException: e2,
      syntheticException: i2
    }, n2), {
      event_id: r2
    }), this), r2;
  }
  captureEvent(e2, t2) {
    const n2 = t2 && t2.event_id ? t2.event_id : yt();
    return this._client ? (this._client.captureEvent(e2, __spreadProps(__spreadValues({}, t2), {
      event_id: n2
    }), this), n2) : (xe.warn("No client configured on scope - will not capture event!"), n2);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach((e2) => {
      e2(this);
    }), this._notifyingListeners = false);
  }
};
var on = rn;
var an = class {
  constructor(e2, t2) {
    let n2, r2;
    n2 = e2 || new on(), r2 = t2 || new on(), this._stack = [{
      scope: n2
    }], this._isolationScope = r2;
  }
  withScope(e2) {
    const t2 = this._pushScope();
    let n2;
    try {
      n2 = e2(t2);
    } catch (e3) {
      throw this._popScope(), e3;
    }
    return ue(n2) ? n2.then((e3) => (this._popScope(), e3), (e3) => {
      throw this._popScope(), e3;
    }) : (this._popScope(), n2);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e2 = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: e2
    }), e2;
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop();
  }
};
function sn() {
  const e2 = Xt(Yt());
  return e2.stack = e2.stack || new an(Me("defaultCurrentScope", () => new on()), Me("defaultIsolationScope", () => new on()));
}
function cn(e2) {
  return sn().withScope(e2);
}
function ln(e2, t2) {
  const n2 = sn();
  return n2.withScope(() => (n2.getStackTop().scope = e2, t2(e2)));
}
function un(e2) {
  return sn().withScope(() => e2(sn().getIsolationScope()));
}
function dn(e2) {
  const t2 = Xt(e2);
  return t2.acs ? t2.acs : {
    withIsolationScope: un,
    withScope: cn,
    withSetScope: ln,
    withSetIsolationScope: (e3, t3) => un(t3),
    getCurrentScope: () => sn().getScope(),
    getIsolationScope: () => sn().getIsolationScope()
  };
}
function pn() {
  return dn(Yt()).getCurrentScope();
}
function hn() {
  return dn(Yt()).getIsolationScope();
}
function fn() {
  return pn().getClient();
}
function vn(e2) {
  const t2 = e2._sentryMetrics;
  if (!t2) return;
  const n2 = {};
  for (const [, [e3, r2]] of t2) {
    (n2[e3] || (n2[e3] = [])).push(We(r2));
  }
  return n2;
}
function gn(e2) {
  const {
    spanId: t2,
    traceId: n2
  } = e2.spanContext(), {
    parent_span_id: r2
  } = _n(e2);
  return We({
    parent_span_id: r2,
    span_id: t2,
    trace_id: n2
  });
}
function mn(e2) {
  return "number" == typeof e2 ? yn(e2) : Array.isArray(e2) ? e2[0] + e2[1] / 1e9 : e2 instanceof Date ? yn(e2.getTime()) : ut();
}
function yn(e2) {
  return e2 > 9999999999 ? e2 / 1e3 : e2;
}
function _n(e2) {
  if (function(e3) {
    return "function" == typeof e3.getSpanJSON;
  }(e2)) return e2.getSpanJSON();
  try {
    const {
      spanId: t2,
      traceId: n2
    } = e2.spanContext();
    if (function(e3) {
      const t3 = e3;
      return !!(t3.attributes && t3.startTime && t3.name && t3.endTime && t3.status);
    }(e2)) {
      const {
        attributes: r2,
        startTime: i2,
        name: o2,
        endTime: a2,
        parentSpanId: s2,
        status: c2
      } = e2;
      return We({
        span_id: t2,
        trace_id: n2,
        data: r2,
        description: o2,
        parent_span_id: s2,
        start_timestamp: mn(i2),
        timestamp: mn(a2) || void 0,
        status: bn(c2),
        op: r2["sentry.op"],
        origin: r2["sentry.origin"],
        _metrics_summary: vn(e2)
      });
    }
    return {
      span_id: t2,
      trace_id: n2
    };
  } catch (e3) {
    return {};
  }
}
function bn(e2) {
  if (e2 && 0 !== e2.code) return 1 === e2.code ? "ok" : e2.message || "unknown_error";
}
function wn(e2) {
  return e2._sentryRootSpan || e2;
}
var Sn = "production";
function kn(e2, t2) {
  const n2 = t2.getOptions(), {
    publicKey: r2
  } = t2.getDsn() || {}, i2 = We({
    environment: n2.environment || Sn,
    release: n2.release,
    public_key: r2,
    trace_id: e2
  });
  return t2.emit("createDsc", i2), i2;
}
function Mn(e2) {
  const t2 = fn();
  if (!t2) return {};
  const n2 = kn(_n(e2).trace_id || "", t2), r2 = wn(e2), i2 = r2._frozenDsc;
  if (i2) return i2;
  const o2 = r2.spanContext().traceState, a2 = o2 && o2.get("sentry.dsc"), s2 = a2 && Nt(a2);
  if (s2) return s2;
  const c2 = _n(r2), l2 = c2.data || {}, u2 = l2["sentry.sample_rate"];
  null != u2 && (n2.sample_rate = `${u2}`);
  const d2 = l2["sentry.source"], p2 = c2.description;
  return "url" !== d2 && p2 && (n2.transaction = p2), function(e3) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return false;
    const t3 = fn(), n3 = e3 || t3 && t3.getOptions();
    return !!n3 && (n3.enableTracing || "tracesSampleRate" in n3 || "tracesSampler" in n3);
  }() && (n2.sampled = String(function(e3) {
    const {
      traceFlags: t3
    } = e3.spanContext();
    return 1 === t3;
  }(r2))), t2.emit("createDsc", n2, r2), n2;
}
function Cn(e2, t2, n2, r2) {
  const i2 = zt(n2), o2 = e2.type && "replay_event" !== e2.type ? e2.type : "event";
  !function(e3, t3) {
    t3 && (e3.sdk = e3.sdk || {}, e3.sdk.name = e3.sdk.name || t3.name, e3.sdk.version = e3.sdk.version || t3.version, e3.sdk.integrations = [...e3.sdk.integrations || [], ...t3.integrations || []], e3.sdk.packages = [...e3.sdk.packages || [], ...t3.packages || []]);
  }(e2, n2 && n2.sdk);
  const a2 = function(e3, t3, n3, r3) {
    const i3 = e3.sdkProcessingMetadata && e3.sdkProcessingMetadata.dynamicSamplingContext;
    return __spreadValues(__spreadValues(__spreadValues({
      event_id: e3.event_id,
      sent_at: (/* @__PURE__ */ new Date()).toISOString()
    }, t3 && {
      sdk: t3
    }), !!n3 && r3 && {
      dsn: Ie(r3)
    }), i3 && {
      trace: We(__spreadValues({}, i3))
    });
  }(e2, i2, r2, t2);
  delete e2.sdkProcessingMetadata;
  return Ft(a2, [[{
    type: o2
  }, e2]]);
}
function En(e2, t2, n2, r2 = 0) {
  return new At((i2, o2) => {
    const a2 = e2[r2];
    if (null === t2 || "function" != typeof a2) i2(t2);
    else {
      const s2 = a2(__spreadValues({}, t2), n2);
      Kt && a2.id && null === s2 && xe.log(`Event processor "${a2.id}" dropped event`), ue(s2) ? s2.then((t3) => En(e2, t3, n2, r2 + 1).then(i2)).then(null, o2) : En(e2, s2, n2, r2 + 1).then(i2).then(null, o2);
    }
  });
}
function Tn(e2, t2) {
  const {
    fingerprint: n2,
    span: r2,
    breadcrumbs: i2,
    sdkProcessingMetadata: o2
  } = t2;
  !function(e3, t3) {
    const {
      extra: n3,
      tags: r3,
      user: i3,
      contexts: o3,
      level: a2,
      transactionName: s2
    } = t3, c2 = We(n3);
    c2 && Object.keys(c2).length && (e3.extra = __spreadValues(__spreadValues({}, c2), e3.extra));
    const l2 = We(r3);
    l2 && Object.keys(l2).length && (e3.tags = __spreadValues(__spreadValues({}, l2), e3.tags));
    const u2 = We(i3);
    u2 && Object.keys(u2).length && (e3.user = __spreadValues(__spreadValues({}, u2), e3.user));
    const d2 = We(o3);
    d2 && Object.keys(d2).length && (e3.contexts = __spreadValues(__spreadValues({}, d2), e3.contexts));
    a2 && (e3.level = a2);
    s2 && "transaction" !== e3.type && (e3.transaction = s2);
  }(e2, t2), r2 && function(e3, t3) {
    e3.contexts = __spreadValues({
      trace: gn(t3)
    }, e3.contexts), e3.sdkProcessingMetadata = __spreadValues({
      dynamicSamplingContext: Mn(t3)
    }, e3.sdkProcessingMetadata);
    const n3 = wn(t3), r3 = _n(n3).description;
    r3 && !e3.transaction && "transaction" === e3.type && (e3.transaction = r3);
  }(e2, r2), function(e3, t3) {
    e3.fingerprint = e3.fingerprint ? function(e4) {
      return Array.isArray(e4) ? e4 : [e4];
    }(e3.fingerprint) : [], t3 && (e3.fingerprint = e3.fingerprint.concat(t3));
    e3.fingerprint && !e3.fingerprint.length && delete e3.fingerprint;
  }(e2, n2), function(e3, t3) {
    const n3 = [...e3.breadcrumbs || [], ...t3];
    e3.breadcrumbs = n3.length ? n3 : void 0;
  }(e2, i2), function(e3, t3) {
    e3.sdkProcessingMetadata = __spreadValues(__spreadValues({}, e3.sdkProcessingMetadata), t3);
  }(e2, o2);
}
function Pn(e2, t2) {
  const {
    extra: n2,
    tags: r2,
    user: i2,
    contexts: o2,
    level: a2,
    sdkProcessingMetadata: s2,
    breadcrumbs: c2,
    fingerprint: l2,
    eventProcessors: u2,
    attachments: d2,
    propagationContext: p2,
    transactionName: h2,
    span: f2
  } = t2;
  On(e2, "extra", n2), On(e2, "tags", r2), On(e2, "user", i2), On(e2, "contexts", o2), On(e2, "sdkProcessingMetadata", s2), a2 && (e2.level = a2), h2 && (e2.transactionName = h2), f2 && (e2.span = f2), c2.length && (e2.breadcrumbs = [...e2.breadcrumbs, ...c2]), l2.length && (e2.fingerprint = [...e2.fingerprint, ...l2]), u2.length && (e2.eventProcessors = [...e2.eventProcessors, ...u2]), d2.length && (e2.attachments = [...e2.attachments, ...d2]), e2.propagationContext = __spreadValues(__spreadValues({}, e2.propagationContext), p2);
}
function On(e2, t2, n2) {
  if (n2 && Object.keys(n2).length) {
    e2[t2] = __spreadValues({}, e2[t2]);
    for (const r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[t2][r2] = n2[r2]);
  }
}
function An(e2, t2, n2, r2, i2, o2) {
  const {
    normalizeDepth: a2 = 3,
    normalizeMaxBreadth: s2 = 1e3
  } = e2, c2 = __spreadProps(__spreadValues({}, t2), {
    event_id: t2.event_id || n2.event_id || yt(),
    timestamp: t2.timestamp || lt()
  }), l2 = n2.integrations || e2.integrations.map((e3) => e3.name);
  !function(e3, t3) {
    const {
      environment: n3,
      release: r3,
      dist: i3,
      maxValueLength: o3 = 250
    } = t3;
    "environment" in e3 || (e3.environment = "environment" in t3 ? n3 : Sn);
    void 0 === e3.release && void 0 !== r3 && (e3.release = r3);
    void 0 === e3.dist && void 0 !== i3 && (e3.dist = i3);
    e3.message && (e3.message = he(e3.message, o3));
    const a3 = e3.exception && e3.exception.values && e3.exception.values[0];
    a3 && a3.value && (a3.value = he(a3.value, o3));
    const s3 = e3.request;
    s3 && s3.url && (s3.url = he(s3.url, o3));
  }(c2, e2), function(e3, t3) {
    t3.length > 0 && (e3.sdk = e3.sdk || {}, e3.sdk.integrations = [...e3.sdk.integrations || [], ...t3]);
  }(c2, l2), i2 && i2.emit("applyFrameMetadata", t2), void 0 === t2.type && function(e3, t3) {
    const n3 = ke._sentryDebugIds;
    if (!n3) return;
    let r3;
    const i3 = jn.get(t3);
    i3 ? r3 = i3 : (r3 = /* @__PURE__ */ new Map(), jn.set(t3, r3));
    const o3 = Object.entries(n3).reduce((e4, [n4, i4]) => {
      let o4;
      const a3 = r3.get(n4);
      a3 ? o4 = a3 : (o4 = t3(n4), r3.set(n4, o4));
      for (let t4 = o4.length - 1; t4 >= 0; t4--) {
        const n5 = o4[t4];
        if (n5.filename) {
          e4[n5.filename] = i4;
          break;
        }
      }
      return e4;
    }, {});
    try {
      e3.exception.values.forEach((e4) => {
        e4.stacktrace.frames.forEach((e5) => {
          e5.filename && (e5.debug_id = o3[e5.filename]);
        });
      });
    } catch (e4) {
    }
  }(c2, e2.stackParser);
  const u2 = function(e3, t3) {
    if (!t3) return e3;
    const n3 = e3 ? e3.clone() : new on();
    return n3.update(t3), n3;
  }(r2, n2.captureContext);
  n2.mechanism && St(c2, n2.mechanism);
  const d2 = i2 ? i2.getEventProcessors() : [], p2 = Me("globalScope", () => new on()).getScopeData();
  if (o2) {
    Pn(p2, o2.getScopeData());
  }
  if (u2) {
    Pn(p2, u2.getScopeData());
  }
  const h2 = [...n2.attachments || [], ...p2.attachments];
  h2.length && (n2.attachments = h2), Tn(c2, p2);
  return En([...d2, ...p2.eventProcessors], c2, n2).then((e3) => (e3 && function(e4) {
    const t3 = {};
    try {
      e4.exception.values.forEach((e5) => {
        e5.stacktrace.frames.forEach((e6) => {
          e6.debug_id && (e6.abs_path ? t3[e6.abs_path] = e6.debug_id : e6.filename && (t3[e6.filename] = e6.debug_id), delete e6.debug_id);
        });
      });
    } catch (e5) {
    }
    if (0 === Object.keys(t3).length) return;
    e4.debug_meta = e4.debug_meta || {}, e4.debug_meta.images = e4.debug_meta.images || [];
    const n3 = e4.debug_meta.images;
    Object.entries(t3).forEach(([e5, t4]) => {
      n3.push({
        type: "sourcemap",
        code_file: e5,
        debug_id: t4
      });
    });
  }(e3), "number" == typeof a2 && a2 > 0 ? function(e4, t3, n3) {
    if (!e4) return null;
    const r3 = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, e4), e4.breadcrumbs && {
      breadcrumbs: e4.breadcrumbs.map((e5) => __spreadValues(__spreadValues({}, e5), e5.data && {
        data: Mt(e5.data, t3, n3)
      }))
    }), e4.user && {
      user: Mt(e4.user, t3, n3)
    }), e4.contexts && {
      contexts: Mt(e4.contexts, t3, n3)
    }), e4.extra && {
      extra: Mt(e4.extra, t3, n3)
    });
    e4.contexts && e4.contexts.trace && r3.contexts && (r3.contexts.trace = e4.contexts.trace, e4.contexts.trace.data && (r3.contexts.trace.data = Mt(e4.contexts.trace.data, t3, n3)));
    e4.spans && (r3.spans = e4.spans.map((e5) => __spreadValues(__spreadValues({}, e5), e5.data && {
      data: Mt(e5.data, t3, n3)
    })));
    return r3;
  }(e3, a2, s2) : e3));
}
var jn = /* @__PURE__ */ new WeakMap();
function xn(e2) {
  if (e2) return function(e3) {
    return e3 instanceof on || "function" == typeof e3;
  }(e2) || function(e3) {
    return Object.keys(e3).some((e4) => Ln.includes(e4));
  }(e2) ? {
    captureContext: e2
  } : e2;
}
var Ln = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
function In(e2, t2) {
  return pn().captureEvent(e2, t2);
}
function Dn(e2, t2) {
  return n2 = __spreadValues({
    sentry_key: e2.publicKey,
    sentry_version: "7"
  }, t2 && {
    sentry_client: `${t2.name}/${t2.version}`
  }), Object.keys(n2).map((e3) => `${encodeURIComponent(e3)}=${encodeURIComponent(n2[e3])}`).join("&");
  var n2;
}
var Nn = [];
function Rn(e2, t2) {
  for (const n2 of t2) n2 && n2.afterAllSetup && n2.afterAllSetup(e2);
}
function Fn(e2, t2, n2) {
  if (n2[t2.name]) Kt && xe.log(`Integration skipped because it was already installed: ${t2.name}`);
  else {
    if (n2[t2.name] = t2, -1 === Nn.indexOf(t2.name) && "function" == typeof t2.setupOnce && (t2.setupOnce(), Nn.push(t2.name)), t2.setup && "function" == typeof t2.setup && t2.setup(e2), "function" == typeof t2.preprocessEvent) {
      const n3 = t2.preprocessEvent.bind(t2);
      e2.on("preprocessEvent", (t3, r2) => n3(t3, r2, e2));
    }
    if ("function" == typeof t2.processEvent) {
      const n3 = t2.processEvent.bind(t2), r2 = Object.assign((t3, r3) => n3(t3, r3, e2), {
        id: t2.name
      });
      e2.addEventProcessor(r2);
    }
    Kt && xe.log(`Integration installed: ${t2.name}`);
  }
}
var Bn = "Not capturing exception because it's already been captured.";
var Un = class {
  constructor(e2) {
    if (this._options = e2, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e2.dsn ? this._dsn = Ne(e2.dsn) : Kt && xe.warn("No DSN provided, client will not send events."), this._dsn) {
      const i2 = (t2 = this._dsn, n2 = e2.tunnel, r2 = e2._metadata ? e2._metadata.sdk : void 0, n2 || `${function(e3) {
        return `${function(e4) {
          const t3 = e4.protocol ? `${e4.protocol}:` : "", n3 = e4.port ? `:${e4.port}` : "";
          return `${t3}//${e4.host}${n3}${e4.path ? `/${e4.path}` : ""}/api/`;
        }(e3)}${e3.projectId}/envelope/`;
      }(t2)}?${Dn(t2, r2)}`);
      this._transport = e2.transport(__spreadProps(__spreadValues({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this)
      }, e2.transportOptions), {
        url: i2
      }));
    }
    var t2, n2, r2;
  }
  captureException(e2, t2, n2) {
    const r2 = yt();
    if (kt(e2)) return Kt && xe.log(Bn), r2;
    const i2 = __spreadValues({
      event_id: r2
    }, t2);
    return this._process(this.eventFromException(e2, i2).then((e3) => this._captureEvent(e3, i2, n2))), i2.event_id;
  }
  captureMessage(e2, t2, n2, r2) {
    const i2 = __spreadValues({
      event_id: yt()
    }, n2), o2 = ae(e2) ? e2 : String(e2), a2 = se(e2) ? this.eventFromMessage(o2, t2, i2) : this.eventFromException(e2, i2);
    return this._process(a2.then((e3) => this._captureEvent(e3, i2, r2))), i2.event_id;
  }
  captureEvent(e2, t2, n2) {
    const r2 = yt();
    if (t2 && t2.originalException && kt(t2.originalException)) return Kt && xe.log(Bn), r2;
    const i2 = __spreadValues({
      event_id: r2
    }, t2), o2 = (e2.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(e2, i2, o2 || n2)), i2.event_id;
  }
  captureSession(e2) {
    "string" != typeof e2.release ? Kt && xe.warn("Discarded session because of missing or non-string release") : (this.sendSession(e2), Zt(e2, {
      init: false
    }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(e2) {
    const t2 = this._transport;
    return t2 ? (this.emit("flush"), this._isClientDoneProcessing(e2).then((n2) => t2.flush(e2).then((e3) => n2 && e3))) : Pt(true);
  }
  close(e2) {
    return this.flush(e2).then((e3) => (this.getOptions().enabled = false, this.emit("close"), e3));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e2) {
    this._eventProcessors.push(e2);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({
      name: e2
    }) => e2.startsWith("Spotlight"))) && this._setupIntegrations();
  }
  getIntegrationByName(e2) {
    return this._integrations[e2];
  }
  addIntegration(e2) {
    const t2 = this._integrations[e2.name];
    Fn(this, e2, this._integrations), t2 || Rn(this, [e2]);
  }
  sendEvent(e2, t2 = {}) {
    this.emit("beforeSendEvent", e2, t2);
    let n2 = Cn(e2, this._dsn, this._options._metadata, this._options.tunnel);
    for (const e3 of t2.attachments || []) n2 = Bt(n2, $t(e3));
    const r2 = this.sendEnvelope(n2);
    r2 && r2.then((t3) => this.emit("afterSendEvent", e2, t3), null);
  }
  sendSession(e2) {
    const t2 = function(e3, t3, n2, r2) {
      const i2 = zt(n2);
      return Ft(__spreadValues(__spreadValues({
        sent_at: (/* @__PURE__ */ new Date()).toISOString()
      }, i2 && {
        sdk: i2
      }), !!r2 && t3 && {
        dsn: Ie(t3)
      }), ["aggregates" in e3 ? [{
        type: "sessions"
      }, e3] : [{
        type: "session"
      }, e3.toJSON()]]);
    }(e2, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(t2);
  }
  recordDroppedEvent(e2, t2, n2) {
    if (this._options.sendClientReports) {
      const r2 = "number" == typeof n2 ? n2 : 1, i2 = `${e2}:${t2}`;
      Kt && xe.log(`Recording outcome: "${i2}"${r2 > 1 ? ` (${r2} times)` : ""}`), this._outcomes[i2] = (this._outcomes[i2] || 0) + r2;
    }
  }
  on(e2, t2) {
    const n2 = this._hooks[e2] = this._hooks[e2] || [];
    return n2.push(t2), () => {
      const e3 = n2.indexOf(t2);
      e3 > -1 && n2.splice(e3, 1);
    };
  }
  emit(e2, ...t2) {
    const n2 = this._hooks[e2];
    n2 && n2.forEach((e3) => e3(...t2));
  }
  sendEnvelope(e2) {
    return this.emit("beforeEnvelope", e2), this._isEnabled() && this._transport ? this._transport.send(e2).then(null, (e3) => (Kt && xe.error("Error while sending event:", e3), e3)) : (Kt && xe.error("Transport disabled"), Pt({}));
  }
  _setupIntegrations() {
    const {
      integrations: e2
    } = this._options;
    this._integrations = function(e3, t2) {
      const n2 = {};
      return t2.forEach((t3) => {
        t3 && Fn(e3, t3, n2);
      }), n2;
    }(this, e2), Rn(this, e2);
  }
  _updateSessionFromEvent(e2, t2) {
    let n2 = false, r2 = false;
    const i2 = t2.exception && t2.exception.values;
    if (i2) {
      r2 = true;
      for (const e3 of i2) {
        const t3 = e3.mechanism;
        if (t3 && false === t3.handled) {
          n2 = true;
          break;
        }
      }
    }
    const o2 = "ok" === e2.status;
    (o2 && 0 === e2.errors || o2 && n2) && (Zt(e2, __spreadProps(__spreadValues({}, n2 && {
      status: "crashed"
    }), {
      errors: e2.errors || Number(r2 || n2)
    })), this.captureSession(e2));
  }
  _isClientDoneProcessing(e2) {
    return new At((t2) => {
      let n2 = 0;
      const r2 = setInterval(() => {
        0 == this._numProcessing ? (clearInterval(r2), t2(true)) : (n2 += 1, e2 && n2 >= e2 && (clearInterval(r2), t2(false)));
      }, 1);
    });
  }
  _isEnabled() {
    return false !== this.getOptions().enabled && void 0 !== this._transport;
  }
  _prepareEvent(e2, t2, n2, r2 = hn()) {
    const i2 = this.getOptions(), o2 = Object.keys(this._integrations);
    return !t2.integrations && o2.length > 0 && (t2.integrations = o2), this.emit("preprocessEvent", e2, t2), e2.type || r2.setLastEventId(e2.event_id || t2.event_id), An(i2, e2, t2, n2, this, r2).then((e3) => {
      if (null === e3) return e3;
      const t3 = __spreadValues(__spreadValues({}, r2.getPropagationContext()), n2 ? n2.getPropagationContext() : void 0);
      if (!(e3.contexts && e3.contexts.trace) && t3) {
        const {
          traceId: n3,
          spanId: r3,
          parentSpanId: i3,
          dsc: o3
        } = t3;
        e3.contexts = __spreadValues({
          trace: We({
            trace_id: n3,
            span_id: r3,
            parent_span_id: i3
          })
        }, e3.contexts);
        const a2 = o3 || kn(n3, this);
        e3.sdkProcessingMetadata = __spreadValues({
          dynamicSamplingContext: a2
        }, e3.sdkProcessingMetadata);
      }
      return e3;
    });
  }
  _captureEvent(e2, t2 = {}, n2) {
    return this._processEvent(e2, t2, n2).then((e3) => e3.event_id, (e3) => {
      if (Kt) {
        const t3 = e3;
        "log" === t3.logLevel ? xe.log(t3.message) : xe.warn(t3);
      }
    });
  }
  _processEvent(e2, t2, n2) {
    const r2 = this.getOptions(), {
      sampleRate: i2
    } = r2, o2 = Jn(e2), a2 = Vn(e2), s2 = e2.type || "error", c2 = `before send for type \`${s2}\``, l2 = void 0 === i2 ? void 0 : function(e3) {
      if ("boolean" == typeof e3) return Number(e3);
      const t3 = "string" == typeof e3 ? parseFloat(e3) : e3;
      if (!("number" != typeof t3 || isNaN(t3) || t3 < 0 || t3 > 1)) return t3;
      Kt && xe.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e3)} of type ${JSON.stringify(typeof e3)}.`);
    }(i2);
    if (a2 && "number" == typeof l2 && Math.random() > l2) return this.recordDroppedEvent("sample_rate", "error", e2), Ot(new Re(`Discarding event because it's not included in the random sample (sampling rate = ${i2})`, "log"));
    const u2 = "replay_event" === s2 ? "replay" : s2, d2 = (e2.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e2, t2, n2, d2).then((n3) => {
      if (null === n3) throw this.recordDroppedEvent("event_processor", u2, e2), new Re("An event processor returned `null`, will not send event.", "log");
      if (t2.data && true === t2.data.__sentry__) return n3;
      const i3 = function(e3, t3, n4, r3) {
        const {
          beforeSend: i4,
          beforeSendTransaction: o3,
          beforeSendSpan: a3
        } = t3;
        if (Vn(n4) && i4) return i4(n4, r3);
        if (Jn(n4)) {
          if (n4.spans && a3) {
            const t4 = [];
            for (const r4 of n4.spans) {
              const n5 = a3(r4);
              n5 ? t4.push(n5) : e3.recordDroppedEvent("before_send", "span");
            }
            n4.spans = t4;
          }
          if (o3) {
            if (n4.spans) {
              const e4 = n4.spans.length;
              n4.sdkProcessingMetadata = __spreadProps(__spreadValues({}, n4.sdkProcessingMetadata), {
                spanCountBeforeProcessing: e4
              });
            }
            return o3(n4, r3);
          }
        }
        return n4;
      }(this, r2, n3, t2);
      return function(e3, t3) {
        const n4 = `${t3} must return \`null\` or a valid event.`;
        if (ue(e3)) return e3.then((e4) => {
          if (!ce(e4) && null !== e4) throw new Re(n4);
          return e4;
        }, (e4) => {
          throw new Re(`${t3} rejected with ${e4}`);
        });
        if (!ce(e3) && null !== e3) throw new Re(n4);
        return e3;
      }(i3, c2);
    }).then((r3) => {
      if (null === r3) {
        if (this.recordDroppedEvent("before_send", u2, e2), o2) {
          const t3 = 1 + (e2.spans || []).length;
          this.recordDroppedEvent("before_send", "span", t3);
        }
        throw new Re(`${c2} returned \`null\`, will not send event.`, "log");
      }
      const i3 = n2 && n2.getSession();
      if (!o2 && i3 && this._updateSessionFromEvent(i3, r3), o2) {
        const e3 = (r3.sdkProcessingMetadata && r3.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r3.spans ? r3.spans.length : 0);
        e3 > 0 && this.recordDroppedEvent("before_send", "span", e3);
      }
      const a3 = r3.transaction_info;
      if (o2 && a3 && r3.transaction !== e2.transaction) {
        const e3 = "custom";
        r3.transaction_info = __spreadProps(__spreadValues({}, a3), {
          source: e3
        });
      }
      return this.sendEvent(r3, t2), r3;
    }).then(null, (e3) => {
      if (e3 instanceof Re) throw e3;
      throw this.captureException(e3, {
        data: {
          __sentry__: true
        },
        originalException: e3
      }), new Re(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e3}`);
    });
  }
  _process(e2) {
    this._numProcessing++, e2.then((e3) => (this._numProcessing--, e3), (e3) => (this._numProcessing--, e3));
  }
  _clearOutcomes() {
    const e2 = this._outcomes;
    return this._outcomes = {}, Object.entries(e2).map(([e3, t2]) => {
      const [n2, r2] = e3.split(":");
      return {
        reason: n2,
        category: r2,
        quantity: t2
      };
    });
  }
  _flushOutcomes() {
    Kt && xe.log("Flushing outcomes...");
    const e2 = this._clearOutcomes();
    if (0 === e2.length) return void (Kt && xe.log("No outcomes to send"));
    if (!this._dsn) return void (Kt && xe.log("No dsn provided, will not send outcomes"));
    Kt && xe.log("Sending outcomes:", e2);
    const t2 = (n2 = e2, Ft((r2 = this._options.tunnel && Ie(this._dsn)) ? {
      dsn: r2
    } : {}, [[{
      type: "client_report"
    }, {
      timestamp: i2 || lt(),
      discarded_events: n2
    }]]));
    var n2, r2, i2;
    this.sendEnvelope(t2);
  }
};
function Vn(e2) {
  return void 0 === e2.type;
}
function Jn(e2) {
  return "transaction" === e2.type;
}
function $n(e2, t2, n2 = jt(e2.bufferSize || 64)) {
  let r2 = {};
  return {
    send: function(i2) {
      const o2 = [];
      if (Ut(i2, (t3, n3) => {
        const i3 = Wt(n3);
        if (function(e3, t4, n4 = Date.now()) {
          return function(e4, t5) {
            return e4[t5] || e4.all || 0;
          }(e3, t4) > n4;
        }(r2, i3)) {
          const r3 = qn(t3, n3);
          e2.recordDroppedEvent("ratelimit_backoff", i3, r3);
        } else o2.push(t3);
      }), 0 === o2.length) return Pt({});
      const a2 = Ft(i2[0], o2), s2 = (t3) => {
        Ut(a2, (n3, r3) => {
          const i3 = qn(n3, r3);
          e2.recordDroppedEvent(t3, Wt(r3), i3);
        });
      };
      return n2.add(() => t2({
        body: Jt(a2)
      }).then((e3) => (void 0 !== e3.statusCode && (e3.statusCode < 200 || e3.statusCode >= 300) && Kt && xe.warn(`Sentry responded with status code ${e3.statusCode} to sent event.`), r2 = Ht(r2, e3), e3), (e3) => {
        throw s2("network_error"), e3;
      })).then((e3) => e3, (e3) => {
        if (e3 instanceof Re) return Kt && xe.error("Skipped sending event because buffer is full."), s2("queue_overflow"), Pt({});
        throw e3;
      });
    },
    flush: (e3) => n2.drain(e3)
  };
}
function qn(e2, t2) {
  if ("event" === t2 || "transaction" === t2) return Array.isArray(e2) ? e2[1] : void 0;
}
var Wn = 100;
function zn(e2, t2) {
  const n2 = fn(), r2 = hn();
  if (!n2) return;
  const {
    beforeBreadcrumb: i2 = null,
    maxBreadcrumbs: o2 = Wn
  } = n2.getOptions();
  if (o2 <= 0) return;
  const a2 = __spreadValues({
    timestamp: lt()
  }, e2), s2 = i2 ? je(() => i2(a2, t2)) : a2;
  null !== s2 && (n2.emit && n2.emit("beforeAddBreadcrumb", s2, t2), r2.addBreadcrumb(s2, o2));
}
var Hn;
var Gn = /* @__PURE__ */ new WeakMap();
var Qn = () => ({
  name: "FunctionToString",
  setupOnce() {
    Hn = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...e2) {
        const t2 = Ve(this), n2 = Gn.has(fn()) && void 0 !== t2 ? t2 : this;
        return Hn.apply(n2, e2);
      };
    } catch (e2) {
    }
  },
  setup(e2) {
    Gn.set(e2, true);
  }
});
var Kn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"];
var Yn = (e2 = {}) => ({
  name: "InboundFilters",
  processEvent(t2, n2, r2) {
    const i2 = r2.getOptions(), o2 = function(e3 = {}, t3 = {}) {
      return {
        allowUrls: [...e3.allowUrls || [], ...t3.allowUrls || []],
        denyUrls: [...e3.denyUrls || [], ...t3.denyUrls || []],
        ignoreErrors: [...e3.ignoreErrors || [], ...t3.ignoreErrors || [], ...e3.disableErrorDefaults ? [] : Kn],
        ignoreTransactions: [...e3.ignoreTransactions || [], ...t3.ignoreTransactions || []],
        ignoreInternal: void 0 === e3.ignoreInternal || e3.ignoreInternal
      };
    }(e2, i2);
    return function(e3, t3) {
      if (t3.ignoreInternal && function(e4) {
        try {
          return "SentryError" === e4.exception.values[0].type;
        } catch (e5) {
        }
        return false;
      }(e3)) return Kt && xe.warn(`Event dropped due to being internal Sentry Error.
Event: ${bt(e3)}`), true;
      if (function(e4, t4) {
        if (e4.type || !t4 || !t4.length) return false;
        return function(e5) {
          const t5 = [];
          e5.message && t5.push(e5.message);
          let n3;
          try {
            n3 = e5.exception.values[e5.exception.values.length - 1];
          } catch (e6) {
          }
          n3 && n3.value && (t5.push(n3.value), n3.type && t5.push(`${n3.type}: ${n3.value}`));
          return t5;
        }(e4).some((e5) => ge(e5, t4));
      }(e3, t3.ignoreErrors)) return Kt && xe.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${bt(e3)}`), true;
      if (function(e4) {
        if (e4.type) return false;
        if (!e4.exception || !e4.exception.values || 0 === e4.exception.values.length) return false;
        return !e4.message && !e4.exception.values.some((e5) => e5.stacktrace || e5.type && "Error" !== e5.type || e5.value);
      }(e3)) return Kt && xe.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${bt(e3)}`), true;
      if (function(e4, t4) {
        if ("transaction" !== e4.type || !t4 || !t4.length) return false;
        const n3 = e4.transaction;
        return !!n3 && ge(n3, t4);
      }(e3, t3.ignoreTransactions)) return Kt && xe.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${bt(e3)}`), true;
      if (function(e4, t4) {
        if (!t4 || !t4.length) return false;
        const n3 = Xn(e4);
        return !!n3 && ge(n3, t4);
      }(e3, t3.denyUrls)) return Kt && xe.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${bt(e3)}.
Url: ${Xn(e3)}`), true;
      if (!function(e4, t4) {
        if (!t4 || !t4.length) return true;
        const n3 = Xn(e4);
        return !n3 || ge(n3, t4);
      }(e3, t3.allowUrls)) return Kt && xe.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${bt(e3)}.
Url: ${Xn(e3)}`), true;
      return false;
    }(t2, o2) ? null : t2;
  }
});
function Xn(e2) {
  try {
    let t2;
    try {
      t2 = e2.exception.values[0].stacktrace.frames;
    } catch (e3) {
    }
    return t2 ? function(e3 = []) {
      for (let t3 = e3.length - 1; t3 >= 0; t3--) {
        const n2 = e3[t3];
        if (n2 && "<anonymous>" !== n2.filename && "[native code]" !== n2.filename) return n2.filename || null;
      }
      return null;
    }(t2) : null;
  } catch (t2) {
    return Kt && xe.error(`Cannot extract url for event ${bt(e2)}`), null;
  }
}
var Zn = () => {
  let e2;
  return {
    name: "Dedupe",
    processEvent(t2) {
      if (t2.type) return t2;
      try {
        if (function(e3, t3) {
          if (!t3) return false;
          if (function(e4, t4) {
            const n2 = e4.message, r2 = t4.message;
            if (!n2 && !r2) return false;
            if (n2 && !r2 || !n2 && r2) return false;
            if (n2 !== r2) return false;
            if (!tr(e4, t4)) return false;
            if (!er(e4, t4)) return false;
            return true;
          }(e3, t3)) return true;
          if (function(e4, t4) {
            const n2 = nr(t4), r2 = nr(e4);
            if (!n2 || !r2) return false;
            if (n2.type !== r2.type || n2.value !== r2.value) return false;
            if (!tr(e4, t4)) return false;
            if (!er(e4, t4)) return false;
            return true;
          }(e3, t3)) return true;
          return false;
        }(t2, e2)) return Kt && xe.warn("Event dropped due to being a duplicate of previously captured event."), null;
      } catch (e3) {
      }
      return e2 = t2;
    }
  };
};
function er(e2, t2) {
  let n2 = Ze(e2), r2 = Ze(t2);
  if (!n2 && !r2) return true;
  if (n2 && !r2 || !n2 && r2) return false;
  if (r2.length !== n2.length) return false;
  for (let e3 = 0; e3 < r2.length; e3++) {
    const t3 = r2[e3], i2 = n2[e3];
    if (t3.filename !== i2.filename || t3.lineno !== i2.lineno || t3.colno !== i2.colno || t3.function !== i2.function) return false;
  }
  return true;
}
function tr(e2, t2) {
  let n2 = e2.fingerprint, r2 = t2.fingerprint;
  if (!n2 && !r2) return true;
  if (n2 && !r2 || !n2 && r2) return false;
  try {
    return !(n2.join("") !== r2.join(""));
  } catch (e3) {
    return false;
  }
}
function nr(e2) {
  return e2.exception && e2.exception.values && e2.exception.values[0];
}
var rr = ke;
var ir = 0;
function or() {
  return ir > 0;
}
function ar(e2, t2 = {}, n2) {
  if ("function" != typeof e2) return e2;
  try {
    const t3 = e2.__sentry_wrapped__;
    if (t3) return "function" == typeof t3 ? t3 : e2;
    if (Ve(e2)) return e2;
  } catch (t3) {
    return e2;
  }
  const r2 = function() {
    const r3 = Array.prototype.slice.call(arguments);
    try {
      n2 && "function" == typeof n2 && n2.apply(this, arguments);
      const i2 = r3.map((e3) => ar(e3, t2));
      return e2.apply(this, i2);
    } catch (e3) {
      throw ir++, setTimeout(() => {
        ir--;
      }), function(...e4) {
        const t3 = dn(Yt());
        if (2 === e4.length) {
          const [n3, r4] = e4;
          return n3 ? t3.withSetScope(n3, r4) : t3.withScope(r4);
        }
        t3.withScope(e4[0]);
      }((n3) => {
        var i2, o2;
        n3.addEventProcessor((e4) => (t2.mechanism && (wt(e4, void 0, void 0), St(e4, t2.mechanism)), e4.extra = __spreadProps(__spreadValues({}, e4.extra), {
          arguments: r3
        }), e4)), i2 = e3, pn().captureException(i2, xn(o2));
      }), e3;
    }
  };
  try {
    for (const t3 in e2) Object.prototype.hasOwnProperty.call(e2, t3) && (r2[t3] = e2[t3]);
  } catch (e3) {
  }
  Ue(r2, e2), Be(e2, "__sentry_wrapped__", r2);
  try {
    Object.getOwnPropertyDescriptor(r2, "name").configurable && Object.defineProperty(r2, "name", {
      get: () => e2.name
    });
  } catch (e3) {
  }
  return r2;
}
var sr = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function cr(e2, t2) {
  const n2 = dr(e2, t2), r2 = {
    type: t2 && t2.name,
    value: hr(t2)
  };
  return n2.length && (r2.stacktrace = {
    frames: n2
  }), void 0 === r2.type && "" === r2.value && (r2.value = "Unrecoverable error caught"), r2;
}
function lr(e2, t2, n2, r2) {
  const i2 = fn(), o2 = i2 && i2.getOptions().normalizeDepth, a2 = function(e3) {
    for (const t3 in e3) if (Object.prototype.hasOwnProperty.call(e3, t3)) {
      const n3 = e3[t3];
      if (n3 instanceof Error) return n3;
    }
    return;
  }(t2), s2 = {
    __serialized__: Ct(t2, o2)
  };
  if (a2) return {
    exception: {
      values: [cr(e2, a2)]
    },
    extra: s2
  };
  const c2 = {
    exception: {
      values: [{
        type: le(t2) ? t2.constructor.name : r2 ? "UnhandledRejection" : "Error",
        value: gr(t2, {
          isUnhandledRejection: r2
        })
      }]
    },
    extra: s2
  };
  if (n2) {
    const t3 = dr(e2, n2);
    t3.length && (c2.exception.values[0].stacktrace = {
      frames: t3
    });
  }
  return c2;
}
function ur(e2, t2) {
  return {
    exception: {
      values: [cr(e2, t2)]
    }
  };
}
function dr(e2, t2) {
  const n2 = t2.stacktrace || t2.stack || "", r2 = function(e3) {
    if (e3 && pr.test(e3.message)) return 1;
    return 0;
  }(t2), i2 = function(e3) {
    if ("number" == typeof e3.framesToPop) return e3.framesToPop;
    return 0;
  }(t2);
  try {
    return e2(n2, r2, i2);
  } catch (e3) {
  }
  return [];
}
var pr = /Minified React error #\d+;/i;
function hr(e2) {
  const t2 = e2 && e2.message;
  return t2 ? t2.error && "string" == typeof t2.error.message ? t2.error.message : t2 : "No error message";
}
function fr(e2, t2, n2, r2, i2) {
  let o2;
  if (re(t2) && t2.error) {
    return ur(e2, t2.error);
  }
  if (ie(t2) || ne(t2, "DOMException")) {
    const i3 = t2;
    if ("stack" in t2) o2 = ur(e2, t2);
    else {
      const t3 = i3.name || (ie(i3) ? "DOMError" : "DOMException"), a2 = i3.message ? `${t3}: ${i3.message}` : t3;
      o2 = vr(e2, a2, n2, r2), wt(o2, a2);
    }
    return "code" in i3 && (o2.tags = __spreadProps(__spreadValues({}, o2.tags), {
      "DOMException.code": `${i3.code}`
    })), o2;
  }
  if (te(t2)) return ur(e2, t2);
  if (ce(t2) || le(t2)) {
    return o2 = lr(e2, t2, n2, i2), St(o2, {
      synthetic: true
    }), o2;
  }
  return o2 = vr(e2, t2, n2, r2), wt(o2, `${t2}`, void 0), St(o2, {
    synthetic: true
  }), o2;
}
function vr(e2, t2, n2, r2) {
  const i2 = {};
  if (r2 && n2) {
    const r3 = dr(e2, n2);
    r3.length && (i2.exception = {
      values: [{
        value: t2,
        stacktrace: {
          frames: r3
        }
      }]
    });
  }
  if (ae(t2)) {
    const {
      __sentry_template_string__: e3,
      __sentry_template_values__: n3
    } = t2;
    return i2.logentry = {
      message: e3,
      params: n3
    }, i2;
  }
  return i2.message = t2, i2;
}
function gr(e2, {
  isUnhandledRejection: t2
}) {
  const n2 = function(e3, t3 = 40) {
    const n3 = Object.keys(Je(e3));
    n3.sort();
    const r3 = n3[0];
    if (!r3) return "[object has no keys]";
    if (r3.length >= t3) return he(r3, t3);
    for (let e4 = n3.length; e4 > 0; e4--) {
      const r4 = n3.slice(0, e4).join(", ");
      if (!(r4.length > t3)) return e4 === n3.length ? r4 : he(r4, t3);
    }
    return "";
  }(e2), r2 = t2 ? "promise rejection" : "exception";
  if (re(e2)) return `Event \`ErrorEvent\` captured as ${r2} with message \`${e2.message}\``;
  if (le(e2)) {
    return `Event \`${function(e3) {
      try {
        const t3 = Object.getPrototypeOf(e3);
        return t3 ? t3.constructor.name : void 0;
      } catch (e4) {
      }
    }(e2)}\` (type=${e2.type}) captured as ${r2}`;
  }
  return `Object captured as ${r2} with keys: ${n2}`;
}
var mr = class extends Un {
  constructor(e2) {
    const t2 = __spreadValues({
      parentSpanIsAlwaysRootSpan: true
    }, e2);
    !function(e3, t3, n2 = [t3], r2 = "npm") {
      const i2 = e3._metadata || {};
      i2.sdk || (i2.sdk = {
        name: `sentry.javascript.${t3}`,
        packages: n2.map((e4) => ({
          name: `${r2}:@sentry/${e4}`,
          version: Se
        })),
        version: Se
      }), e3._metadata = i2;
    }(t2, "browser", ["browser"], rr.SENTRY_SDK_SOURCE || "npm"), super(t2), t2.sendClientReports && rr.document && rr.document.addEventListener("visibilitychange", () => {
      "hidden" === rr.document.visibilityState && this._flushOutcomes();
    });
  }
  eventFromException(e2, t2) {
    return function(e3, t3, n2, r2) {
      const i2 = fr(e3, t3, n2 && n2.syntheticException || void 0, r2);
      return St(i2), i2.level = "error", n2 && n2.event_id && (i2.event_id = n2.event_id), Pt(i2);
    }(this._options.stackParser, e2, t2, this._options.attachStacktrace);
  }
  eventFromMessage(e2, t2 = "info", n2) {
    return function(e3, t3, n3 = "info", r2, i2) {
      const o2 = vr(e3, t3, r2 && r2.syntheticException || void 0, i2);
      return o2.level = n3, r2 && r2.event_id && (o2.event_id = r2.event_id), Pt(o2);
    }(this._options.stackParser, e2, t2, n2, this._options.attachStacktrace);
  }
  captureUserFeedback(e2) {
    if (!this._isEnabled()) return void (sr && xe.warn("SDK not enabled, will not capture user feedback."));
    const t2 = function(e3, {
      metadata: t3,
      tunnel: n2,
      dsn: r2
    }) {
      const i2 = __spreadValues(__spreadValues({
        event_id: e3.event_id,
        sent_at: (/* @__PURE__ */ new Date()).toISOString()
      }, t3 && t3.sdk && {
        sdk: {
          name: t3.sdk.name,
          version: t3.sdk.version
        }
      }), !!n2 && !!r2 && {
        dsn: Ie(r2)
      }), o2 = /* @__PURE__ */ function(e4) {
        return [{
          type: "user_report"
        }, e4];
      }(e3);
      return Ft(i2, [o2]);
    }(e2, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this.sendEnvelope(t2);
  }
  _prepareEvent(e2, t2, n2) {
    return e2.platform = e2.platform || "javascript", super._prepareEvent(e2, t2, n2);
  }
};
var yr = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
var _r = ke;
var br;
var wr;
var Sr;
var kr;
function Mr() {
  if (!_r.document) return;
  const e2 = it.bind(null, "dom"), t2 = Cr(e2, true);
  _r.document.addEventListener("click", t2, false), _r.document.addEventListener("keypress", t2, false), ["EventTarget", "Node"].forEach((t3) => {
    const n2 = _r[t3] && _r[t3].prototype;
    n2 && n2.hasOwnProperty && n2.hasOwnProperty("addEventListener") && (Fe(n2, "addEventListener", function(t4) {
      return function(n3, r2, i2) {
        if ("click" === n3 || "keypress" == n3) try {
          const r3 = this, o2 = r3.__sentry_instrumentation_handlers__ = r3.__sentry_instrumentation_handlers__ || {}, a2 = o2[n3] = o2[n3] || {
            refCount: 0
          };
          if (!a2.handler) {
            const r4 = Cr(e2);
            a2.handler = r4, t4.call(this, n3, r4, i2);
          }
          a2.refCount++;
        } catch (e3) {
        }
        return t4.call(this, n3, r2, i2);
      };
    }), Fe(n2, "removeEventListener", function(e3) {
      return function(t4, n3, r2) {
        if ("click" === t4 || "keypress" == t4) try {
          const n4 = this, i2 = n4.__sentry_instrumentation_handlers__ || {}, o2 = i2[t4];
          o2 && (o2.refCount--, o2.refCount <= 0 && (e3.call(this, t4, o2.handler, r2), o2.handler = void 0, delete i2[t4]), 0 === Object.keys(i2).length && delete n4.__sentry_instrumentation_handlers__);
        } catch (e4) {
        }
        return e3.call(this, t4, n3, r2);
      };
    }));
  });
}
function Cr(e2, t2 = false) {
  return (n2) => {
    if (!n2 || n2._sentryCaptured) return;
    const r2 = function(e3) {
      try {
        return e3.target;
      } catch (e4) {
        return null;
      }
    }(n2);
    if (function(e3, t3) {
      return "keypress" === e3 && (!t3 || !t3.tagName || "INPUT" !== t3.tagName && "TEXTAREA" !== t3.tagName && !t3.isContentEditable);
    }(n2.type, r2)) return;
    Be(n2, "_sentryCaptured", true), r2 && !r2._sentryId && Be(r2, "_sentryId", yt());
    const i2 = "keypress" === n2.type ? "input" : n2.type;
    if (!function(e3) {
      if (e3.type !== wr) return false;
      try {
        if (!e3.target || e3.target._sentryId !== Sr) return false;
      } catch (e4) {
      }
      return true;
    }(n2)) {
      e2({
        event: n2,
        name: i2,
        global: t2
      }), wr = n2.type, Sr = r2 ? r2._sentryId : void 0;
    }
    clearTimeout(br), br = _r.setTimeout(() => {
      Sr = void 0, wr = void 0;
    }, 1e3);
  };
}
function Er() {
  if (!function() {
    const e3 = Qt.chrome, t3 = e3 && e3.app && e3.app.runtime, n2 = "history" in Qt && !!Qt.history.pushState && !!Qt.history.replaceState;
    return !t3 && n2;
  }()) return;
  const e2 = _r.onpopstate;
  function t2(e3) {
    return function(...t3) {
      const n2 = t3.length > 2 ? t3[2] : void 0;
      if (n2) {
        const e4 = kr, t4 = String(n2);
        kr = t4;
        it("history", {
          from: e4,
          to: t4
        });
      }
      return e3.apply(this, t3);
    };
  }
  _r.onpopstate = function(...t3) {
    const n2 = _r.location.href, r2 = kr;
    kr = n2;
    if (it("history", {
      from: r2,
      to: n2
    }), e2) try {
      return e2.apply(this, t3);
    } catch (e3) {
    }
  }, Fe(_r.history, "pushState", t2), Fe(_r.history, "replaceState", t2);
}
var Tr = {};
function Pr(e2) {
  Tr[e2] = void 0;
}
var Or = "__sentry_xhr_v3__";
function Ar() {
  if (!_r.XMLHttpRequest) return;
  const e2 = XMLHttpRequest.prototype;
  e2.open = new Proxy(e2.open, {
    apply(e3, t2, n2) {
      const r2 = 1e3 * ut(), i2 = oe(n2[0]) ? n2[0].toUpperCase() : void 0, o2 = function(e4) {
        if (oe(e4)) return e4;
        try {
          return e4.toString();
        } catch (e5) {
        }
        return;
      }(n2[1]);
      if (!i2 || !o2) return e3.apply(t2, n2);
      t2[Or] = {
        method: i2,
        url: o2,
        request_headers: {}
      }, "POST" === i2 && o2.match(/sentry_key/) && (t2.__sentry_own_request__ = true);
      const a2 = () => {
        const e4 = t2[Or];
        if (e4 && 4 === t2.readyState) {
          try {
            e4.status_code = t2.status;
          } catch (e5) {
          }
          it("xhr", {
            endTimestamp: 1e3 * ut(),
            startTimestamp: r2,
            xhr: t2
          });
        }
      };
      return "onreadystatechange" in t2 && "function" == typeof t2.onreadystatechange ? t2.onreadystatechange = new Proxy(t2.onreadystatechange, {
        apply: (e4, t3, n3) => (a2(), e4.apply(t3, n3))
      }) : t2.addEventListener("readystatechange", a2), t2.setRequestHeader = new Proxy(t2.setRequestHeader, {
        apply(e4, t3, n3) {
          const [r3, i3] = n3, o3 = t3[Or];
          return o3 && oe(r3) && oe(i3) && (o3.request_headers[r3.toLowerCase()] = i3), e4.apply(t3, n3);
        }
      }), e3.apply(t2, n2);
    }
  }), e2.send = new Proxy(e2.send, {
    apply(e3, t2, n2) {
      const r2 = t2[Or];
      if (!r2) return e3.apply(t2, n2);
      void 0 !== n2[0] && (r2.body = n2[0]);
      return it("xhr", {
        startTimestamp: 1e3 * ut(),
        xhr: t2
      }), e3.apply(t2, n2);
    }
  });
}
function jr(e2, t2 = function(e3) {
  const t3 = Tr[e3];
  if (t3) return t3;
  let n2 = _r[e3];
  if (st(n2)) return Tr[e3] = n2.bind(_r);
  const r2 = _r.document;
  if (r2 && "function" == typeof r2.createElement) try {
    const t4 = r2.createElement("iframe");
    t4.hidden = true, r2.head.appendChild(t4);
    const i2 = t4.contentWindow;
    i2 && i2[e3] && (n2 = i2[e3]), r2.head.removeChild(t4);
  } catch (t4) {
    yr && xe.warn(`Could not create sandbox iframe for ${e3} check, bailing to window.${e3}: `, t4);
  }
  return n2 ? Tr[e3] = n2.bind(_r) : n2;
}("fetch")) {
  let n2 = 0, r2 = 0;
  return $n(e2, function(i2) {
    const o2 = i2.body.length;
    n2 += o2, r2++;
    const a2 = __spreadValues({
      body: i2.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e2.headers,
      keepalive: n2 <= 6e4 && r2 < 15
    }, e2.fetchOptions);
    if (!t2) return Pr("fetch"), Ot("No fetch implementation available");
    try {
      return t2(e2.url, a2).then((e3) => (n2 -= o2, r2--, {
        statusCode: e3.status,
        headers: {
          "x-sentry-rate-limits": e3.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": e3.headers.get("Retry-After")
        }
      }));
    } catch (e3) {
      return Pr("fetch"), n2 -= o2, r2--, Ot(e3);
    }
  });
}
function xr(e2, t2, n2, r2) {
  const i2 = {
    filename: e2,
    function: "<anonymous>" === t2 ? He : t2,
    in_app: true
  };
  return void 0 !== n2 && (i2.lineno = n2), void 0 !== r2 && (i2.colno = r2), i2;
}
var Lr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var Ir = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var Dr = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var Nr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var Rr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var Fr = function(...e2) {
  const t2 = e2.sort((e3, t3) => e3[0] - t3[0]).map((e3) => e3[1]);
  return (e3, n2 = 0, r2 = 0) => {
    const i2 = [], o2 = e3.split("\n");
    for (let e4 = n2; e4 < o2.length; e4++) {
      const n3 = o2[e4];
      if (n3.length > 1024) continue;
      const a2 = Ge.test(n3) ? n3.replace(Ge, "$1") : n3;
      if (!a2.match(/\S*Error: /)) {
        for (const e5 of t2) {
          const t3 = e5(a2);
          if (t3) {
            i2.push(t3);
            break;
          }
        }
        if (i2.length >= 50 + r2) break;
      }
    }
    return function(e4) {
      if (!e4.length) return [];
      const t3 = Array.from(e4);
      /sentryWrapped/.test(Ke(t3).function || "") && t3.pop();
      t3.reverse(), Qe.test(Ke(t3).function || "") && (t3.pop(), Qe.test(Ke(t3).function || "") && t3.pop());
      return t3.slice(0, 50).map((e5) => __spreadProps(__spreadValues({}, e5), {
        filename: e5.filename || Ke(t3).filename,
        function: e5.function || He
      }));
    }(i2.slice(r2));
  };
}(...[[30, (e2) => {
  const t2 = Lr.exec(e2);
  if (t2) {
    const [, e3, n3, r2] = t2;
    return xr(e3, He, +n3, +r2);
  }
  const n2 = Ir.exec(e2);
  if (n2) {
    if (n2[2] && 0 === n2[2].indexOf("eval")) {
      const e4 = Dr.exec(n2[2]);
      e4 && (n2[2] = e4[1], n2[3] = e4[2], n2[4] = e4[3]);
    }
    const [e3, t3] = Br(n2[1] || He, n2[2]);
    return xr(t3, e3, n2[3] ? +n2[3] : void 0, n2[4] ? +n2[4] : void 0);
  }
}], [50, (e2) => {
  const t2 = Nr.exec(e2);
  if (t2) {
    if (t2[3] && t2[3].indexOf(" > eval") > -1) {
      const e4 = Rr.exec(t2[3]);
      e4 && (t2[1] = t2[1] || "eval", t2[3] = e4[1], t2[4] = e4[2], t2[5] = "");
    }
    let e3 = t2[3], n2 = t2[1] || He;
    return [n2, e3] = Br(n2, e3), xr(e3, n2, t2[4] ? +t2[4] : void 0, t2[5] ? +t2[5] : void 0);
  }
}]]);
var Br = (e2, t2) => {
  const n2 = -1 !== e2.indexOf("safari-extension"), r2 = -1 !== e2.indexOf("safari-web-extension");
  return n2 || r2 ? [-1 !== e2.indexOf("@") ? e2.split("@")[0] : He, n2 ? `safari-extension:${t2}` : `safari-web-extension:${t2}`] : [e2, t2];
};
var Ur = 1024;
var Vr = (e2 = {}) => {
  const t2 = __spreadValues({
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true
  }, e2);
  return {
    name: "Breadcrumbs",
    setup(e3) {
      var n2;
      t2.console && function(e4) {
        const t3 = "console";
        nt(t3, e4), rt(t3, ot);
      }(/* @__PURE__ */ function(e4) {
        return function(t3) {
          if (fn() !== e4) return;
          const n3 = {
            category: "console",
            data: {
              arguments: t3.args,
              logger: "console"
            },
            level: It(t3.level),
            message: fe(t3.args, " ")
          };
          if ("assert" === t3.level) {
            if (false !== t3.args[0]) return;
            n3.message = `Assertion failed: ${fe(t3.args.slice(1), " ") || "console.assert"}`, n3.data.arguments = t3.args.slice(1);
          }
          zn(n3, {
            input: t3.args,
            level: t3.level
          });
        };
      }(e3)), t2.dom && (n2 = /* @__PURE__ */ function(e4, t3) {
        return function(n3) {
          if (fn() !== e4) return;
          let r2, i2, o2 = "object" == typeof t3 ? t3.serializeAttribute : void 0, a2 = "object" == typeof t3 && "number" == typeof t3.maxStringLength ? t3.maxStringLength : void 0;
          a2 && a2 > Ur && (sr && xe.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a2} was configured. Sentry will use 1024 instead.`), a2 = Ur), "string" == typeof o2 && (o2 = [o2]);
          try {
            const e5 = n3.event, t4 = function(e6) {
              return !!e6 && !!e6.target;
            }(e5) ? e5.target : e5;
            r2 = Ee(t4, {
              keyAttrs: o2,
              maxStringLength: a2
            }), i2 = function(e6) {
              if (!Ce.HTMLElement) return null;
              let t5 = e6;
              for (let e7 = 0; e7 < 5; e7++) {
                if (!t5) return null;
                if (t5 instanceof HTMLElement) {
                  if (t5.dataset.sentryComponent) return t5.dataset.sentryComponent;
                  if (t5.dataset.sentryElement) return t5.dataset.sentryElement;
                }
                t5 = t5.parentNode;
              }
              return null;
            }(t4);
          } catch (e5) {
            r2 = "<unknown>";
          }
          if (0 === r2.length) return;
          const s2 = {
            category: `ui.${n3.name}`,
            message: r2
          };
          i2 && (s2.data = {
            "ui.component_name": i2
          }), zn(s2, {
            event: n3.event,
            name: n3.name,
            global: n3.global
          });
        };
      }(e3, t2.dom), nt("dom", n2), rt("dom", Mr)), t2.xhr && function(e4) {
        nt("xhr", e4), rt("xhr", Ar);
      }(/* @__PURE__ */ function(e4) {
        return function(t3) {
          if (fn() !== e4) return;
          const {
            startTimestamp: n3,
            endTimestamp: r2
          } = t3, i2 = t3.xhr[Or];
          if (!n3 || !r2 || !i2) return;
          const {
            method: o2,
            url: a2,
            status_code: s2,
            body: c2
          } = i2, l2 = {
            method: o2,
            url: a2,
            status_code: s2
          }, u2 = {
            xhr: t3.xhr,
            input: c2,
            startTimestamp: n3,
            endTimestamp: r2
          };
          zn({
            category: "xhr",
            data: l2,
            type: "http",
            level: we(s2)
          }, u2);
        };
      }(e3)), t2.fetch && dt(/* @__PURE__ */ function(e4) {
        return function(t3) {
          if (fn() !== e4) return;
          const {
            startTimestamp: n3,
            endTimestamp: r2
          } = t3;
          if (r2 && (!t3.fetchData.url.match(/sentry_key/) || "POST" !== t3.fetchData.method)) if (t3.error) {
            zn({
              category: "fetch",
              data: t3.fetchData,
              level: "error",
              type: "http"
            }, {
              data: t3.error,
              input: t3.args,
              startTimestamp: n3,
              endTimestamp: r2
            });
          } else {
            const e5 = t3.response, i2 = __spreadProps(__spreadValues({}, t3.fetchData), {
              status_code: e5 && e5.status
            }), o2 = {
              input: t3.args,
              response: e5,
              startTimestamp: n3,
              endTimestamp: r2
            };
            zn({
              category: "fetch",
              data: i2,
              type: "http",
              level: we(i2.status_code)
            }, o2);
          }
        };
      }(e3)), t2.history && function(e4) {
        const t3 = "history";
        nt(t3, e4), rt(t3, Er);
      }(/* @__PURE__ */ function(e4) {
        return function(t3) {
          if (fn() !== e4) return;
          let n3 = t3.from, r2 = t3.to;
          const i2 = xt(rr.location.href);
          let o2 = n3 ? xt(n3) : void 0;
          const a2 = xt(r2);
          o2 && o2.path || (o2 = i2), i2.protocol === a2.protocol && i2.host === a2.host && (r2 = a2.relative), i2.protocol === o2.protocol && i2.host === o2.host && (n3 = o2.relative), zn({
            category: "navigation",
            data: {
              from: n3,
              to: r2
            }
          });
        };
      }(e3)), t2.sentry && e3.on("beforeSendEvent", /* @__PURE__ */ function(e4) {
        return function(t3) {
          fn() === e4 && zn({
            category: "sentry." + ("transaction" === t3.type ? "transaction" : "event"),
            event_id: t3.event_id,
            level: t3.level,
            message: bt(t3)
          }, {
            event: t3
          });
        };
      }(e3));
    }
  };
};
var Jr = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
var $r = (e2 = {}) => {
  const t2 = __spreadValues({
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true
  }, e2);
  return {
    name: "BrowserApiErrors",
    setupOnce() {
      t2.setTimeout && Fe(rr, "setTimeout", qr), t2.setInterval && Fe(rr, "setInterval", qr), t2.requestAnimationFrame && Fe(rr, "requestAnimationFrame", Wr), t2.XMLHttpRequest && "XMLHttpRequest" in rr && Fe(XMLHttpRequest.prototype, "send", zr);
      const e3 = t2.eventTarget;
      if (e3) {
        (Array.isArray(e3) ? e3 : Jr).forEach(Hr);
      }
    }
  };
};
function qr(e2) {
  return function(...t2) {
    const n2 = t2[0];
    return t2[0] = ar(n2, {
      mechanism: {
        data: {
          function: Xe(e2)
        },
        handled: false,
        type: "instrument"
      }
    }), e2.apply(this, t2);
  };
}
function Wr(e2) {
  return function(t2) {
    return e2.apply(this, [ar(t2, {
      mechanism: {
        data: {
          function: "requestAnimationFrame",
          handler: Xe(e2)
        },
        handled: false,
        type: "instrument"
      }
    })]);
  };
}
function zr(e2) {
  return function(...t2) {
    const n2 = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e3) => {
      e3 in n2 && "function" == typeof n2[e3] && Fe(n2, e3, function(t3) {
        const n3 = {
          mechanism: {
            data: {
              function: e3,
              handler: Xe(t3)
            },
            handled: false,
            type: "instrument"
          }
        }, r2 = Ve(t3);
        return r2 && (n3.mechanism.data.handler = Xe(r2)), ar(t3, n3);
      });
    }), e2.apply(this, t2);
  };
}
function Hr(e2) {
  const t2 = rr, n2 = t2[e2] && t2[e2].prototype;
  n2 && n2.hasOwnProperty && n2.hasOwnProperty("addEventListener") && (Fe(n2, "addEventListener", function(t3) {
    return function(n3, r2, i2) {
      try {
        "function" == typeof r2.handleEvent && (r2.handleEvent = ar(r2.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: Xe(r2),
              target: e2
            },
            handled: false,
            type: "instrument"
          }
        }));
      } catch (e3) {
      }
      return t3.apply(this, [n3, ar(r2, {
        mechanism: {
          data: {
            function: "addEventListener",
            handler: Xe(r2),
            target: e2
          },
          handled: false,
          type: "instrument"
        }
      }), i2]);
    };
  }), Fe(n2, "removeEventListener", function(e3) {
    return function(t3, n3, r2) {
      const i2 = n3;
      try {
        const n4 = i2 && i2.__sentry_wrapped__;
        n4 && e3.call(this, t3, n4, r2);
      } catch (e4) {
      }
      return e3.call(this, t3, i2, r2);
    };
  }));
}
var Gr = (e2 = {}) => {
  const t2 = __spreadValues({
    onerror: true,
    onunhandledrejection: true
  }, e2);
  return {
    name: "GlobalHandlers",
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(e3) {
      t2.onerror && (!function(e4) {
        !function(e5) {
          const t3 = "error";
          nt(t3, e5), rt(t3, vt);
        }((t3) => {
          const {
            stackParser: n2,
            attachStacktrace: r2
          } = Kr();
          if (fn() !== e4 || or()) return;
          const {
            msg: i2,
            url: o2,
            line: a2,
            column: s2,
            error: c2
          } = t3, l2 = function(e5, t4, n3, r3) {
            const i3 = e5.exception = e5.exception || {}, o3 = i3.values = i3.values || [], a3 = o3[0] = o3[0] || {}, s3 = a3.stacktrace = a3.stacktrace || {}, c3 = s3.frames = s3.frames || [], l3 = isNaN(parseInt(r3, 10)) ? void 0 : r3, u2 = isNaN(parseInt(n3, 10)) ? void 0 : n3, d2 = oe(t4) && t4.length > 0 ? t4 : function() {
              try {
                return Ce.document.location.href;
              } catch (e6) {
                return "";
              }
            }();
            0 === c3.length && c3.push({
              colno: l3,
              filename: d2,
              function: He,
              in_app: true,
              lineno: u2
            });
            return e5;
          }(fr(n2, c2 || i2, void 0, r2, false), o2, a2, s2);
          l2.level = "error", In(l2, {
            originalException: c2,
            mechanism: {
              handled: false,
              type: "onerror"
            }
          });
        });
      }(e3), Qr("onerror")), t2.onunhandledrejection && (!function(e4) {
        !function(e5) {
          const t3 = "unhandledrejection";
          nt(t3, e5), rt(t3, mt);
        }((t3) => {
          const {
            stackParser: n2,
            attachStacktrace: r2
          } = Kr();
          if (fn() !== e4 || or()) return;
          const i2 = function(e5) {
            if (se(e5)) return e5;
            try {
              if ("reason" in e5) return e5.reason;
              if ("detail" in e5 && "reason" in e5.detail) return e5.detail.reason;
            } catch (e6) {
            }
            return e5;
          }(t3), o2 = se(i2) ? {
            exception: {
              values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(i2)}`
              }]
            }
          } : fr(n2, i2, void 0, r2, true);
          o2.level = "error", In(o2, {
            originalException: i2,
            mechanism: {
              handled: false,
              type: "onunhandledrejection"
            }
          });
        });
      }(e3), Qr("onunhandledrejection"));
    }
  };
};
function Qr(e2) {
  sr && xe.log(`Global Handler attached: ${e2}`);
}
function Kr() {
  const e2 = fn();
  return e2 && e2.getOptions() || {
    stackParser: () => [],
    attachStacktrace: false
  };
}
var Yr = () => ({
  name: "HttpContext",
  preprocessEvent(e2) {
    if (!rr.navigator && !rr.location && !rr.document) return;
    const t2 = e2.request && e2.request.url || rr.location && rr.location.href, {
      referrer: n2
    } = rr.document || {}, {
      userAgent: r2
    } = rr.navigator || {}, i2 = __spreadValues(__spreadValues(__spreadValues({}, e2.request && e2.request.headers), n2 && {
      Referer: n2
    }), r2 && {
      "User-Agent": r2
    }), o2 = __spreadProps(__spreadValues(__spreadValues({}, e2.request), t2 && {
      url: t2
    }), {
      headers: i2
    });
    e2.request = o2;
  }
});
var Xr = (e2 = {}) => {
  const t2 = e2.limit || 5, n2 = e2.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(e3, r2, i2) {
      const o2 = i2.getOptions();
      me(cr, o2.stackParser, o2.maxValueLength, n2, t2, e3, r2);
    }
  };
};
var Zr = "new";
var ei = "loading";
var ti = "loaded";
var ni = "joining-meeting";
var ri = "joined-meeting";
var ii = "left-meeting";
var oi = "error";
var ai = "blocked";
var si = "off";
var ci = "sendable";
var li = "loading";
var ui = "interrupted";
var di = "playable";
var pi = "unknown";
var hi = "full";
var fi = "lobby";
var vi = "none";
var gi = "base";
var mi = "*";
var yi = "ejected";
var _i = "nbf-room";
var bi = "nbf-token";
var wi = "exp-room";
var Si = "exp-token";
var ki = "no-room";
var Mi = "meeting-full";
var Ci = "end-of-life";
var Ei = "not-allowed";
var Ti = "connection-error";
var Pi = "cam-in-use";
var Oi = "mic-in-use";
var Ai = "cam-mic-in-use";
var ji = "permissions";
var xi = "undefined-mediadevices";
var Li = "not-found";
var Ii = "constraints";
var Di = "unknown";
var Ni = "iframe-ready-for-launch-config";
var Ri = "iframe-launch-config";
var Fi = "theme-updated";
var Bi = "loading";
var Ui = "load-attempt-failed";
var Vi = "loaded";
var Ji = "started-camera";
var $i = "camera-error";
var qi = "joining-meeting";
var Wi = "joined-meeting";
var zi = "left-meeting";
var Hi = "participant-joined";
var Gi = "participant-updated";
var Qi = "participant-left";
var Ki = "participant-counts-updated";
var Yi = "access-state-updated";
var Xi = "meeting-session-summary-updated";
var Zi = "meeting-session-state-updated";
var eo = "meeting-session-data-error";
var to = "waiting-participant-added";
var no = "waiting-participant-updated";
var ro = "waiting-participant-removed";
var io = "track-started";
var oo = "track-stopped";
var ao = "transcription-started";
var so = "transcription-stopped";
var co = "transcription-error";
var lo = "recording-started";
var uo = "recording-stopped";
var po = "recording-stats";
var ho = "recording-error";
var fo = "recording-upload-completed";
var vo = "recording-data";
var go = "app-message";
var mo = "transcription-message";
var yo = "remote-media-player-started";
var _o = "remote-media-player-updated";
var bo = "remote-media-player-stopped";
var wo = "local-screen-share-started";
var So = "local-screen-share-stopped";
var ko = "local-screen-share-canceled";
var Mo = "active-speaker-change";
var Co = "active-speaker-mode-change";
var Eo = "network-quality-change";
var To = "network-connection";
var Po = "cpu-load-change";
var Oo = "face-counts-updated";
var Ao = "fullscreen";
var jo = "exited-fullscreen";
var xo = "live-streaming-started";
var Lo = "live-streaming-updated";
var Io = "live-streaming-stopped";
var Do = "live-streaming-error";
var No = "lang-updated";
var Ro = "receive-settings-updated";
var Fo = "input-settings-updated";
var Bo = "nonfatal-error";
var Uo = "error";
var Vo = 4096;
var Jo = 102400;
var $o = "iframe-call-message";
var qo = "local-screen-start";
var Wo = "daily-method-update-live-streaming-endpoints";
var zo = "transmit-log";
var Ho = "daily-custom-track";
var Go = {
  NONE: "none",
  BGBLUR: "background-blur",
  BGIMAGE: "background-image",
  FACE_DETECTION: "face-detection"
};
var Qo = {
  NONE: "none",
  NOISE_CANCELLATION: "noise-cancellation"
};
var Ko = {
  PLAY: "play",
  PAUSE: "pause"
};
var Yo = ["jpg", "png", "jpeg"];
var Xo = "add-endpoints";
var Zo = "remove-endpoints";
var ea = "sip-call-transfer";
function ta() {
  return !na() && "undefined" != typeof window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function na() {
  return "undefined" != typeof navigator && navigator.product && "ReactNative" === navigator.product;
}
function ra() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function ia() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(e2, t2) {
    if (!e2 || !t2) return true;
    switch (e2) {
      case "Chrome":
        return t2.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(13 === t2.major && 0 === t2.minor && 0 === t2.point);
      case "Firefox":
        return t2.major >= 67;
    }
    return true;
  }(pa(), ha()) || na());
}
function oa() {
  if (na()) return false;
  if (!document) return false;
  var e2 = document.createElement("iframe");
  return !!e2.requestFullscreen || !!e2.webkitRequestFullscreen;
}
var aa = function() {
  try {
    var e2 = document.createElement("canvas"), t2 = null != e2.getContext("webgl2");
    return e2.remove(), t2;
  } catch (e3) {
    return false;
  }
}();
function sa() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return !na() && !!aa && (e2 ? function() {
    if (da()) return false;
    return ["Chrome", "Firefox"].includes(pa());
  }() : function() {
    if (da()) return false;
    var e3 = pa();
    if ("Safari" === e3) {
      var t2 = ma();
      if (t2.major < 15 || 15 === t2.major && t2.minor < 4) return false;
    }
    if ("Chrome" === e3) {
      return fa().major >= 77;
    }
    if ("Firefox" === e3) {
      return ya().major >= 97;
    }
    return ["Chrome", "Firefox", "Safari"].includes(e3);
  }());
}
function ca() {
  if (na()) return false;
  if (ua()) return false;
  if ("undefined" == typeof AudioWorkletNode) return false;
  switch (pa()) {
    case "Chrome":
    case "Firefox":
      return true;
    case "Safari":
      return ha().major >= 17 && ha().minor >= 4;
  }
  return false;
}
function la() {
  return ra() && !function() {
    var e2, t2 = pa();
    if (!ta()) return true;
    switch (t2) {
      case "Chrome":
        return (e2 = fa()).major && e2.major > 0 && e2.major < 75;
      case "Firefox":
        return (e2 = ya()).major < 91;
      case "Safari":
        return (e2 = ma()).major < 13 || 13 === e2.major && e2.minor < 1;
      default:
        return true;
    }
  }();
}
function ua() {
  return ta().match(/Linux; Android/);
}
function da() {
  var e2, t2, n2 = ta(), r2 = n2.match(/Mac/) && (!na() && "undefined" != typeof window && null !== (e2 = window) && void 0 !== e2 && null !== (t2 = e2.navigator) && void 0 !== t2 && t2.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(n2.match(/Mobi/) || n2.match(/Android/) || r2) || !!ta().match(/DailyAnd\//) || void 0;
}
function pa() {
  if ("undefined" != typeof window) {
    var e2 = ta();
    return va() ? "Safari" : e2.indexOf("Edge") > -1 ? "Edge" : e2.match(/Chrome\//) ? "Chrome" : e2.indexOf("Safari") > -1 || ga() ? "Safari" : e2.indexOf("Firefox") > -1 ? "Firefox" : e2.indexOf("MSIE") > -1 || e2.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function ha() {
  switch (pa()) {
    case "Chrome":
      return fa();
    case "Safari":
      return ma();
    case "Firefox":
      return ya();
    case "Edge":
      return function() {
        var e2 = 0, t2 = 0;
        if ("undefined" != typeof window) {
          var n2 = ta().match(/Edge\/(\d+).(\d+)/);
          if (n2) try {
            e2 = parseInt(n2[1]), t2 = parseInt(n2[2]);
          } catch (e3) {
          }
        }
        return {
          major: e2,
          minor: t2
        };
      }();
  }
}
function fa() {
  var e2 = 0, t2 = 0, n2 = 0, r2 = 0, i2 = false;
  if ("undefined" != typeof window) {
    var o2 = ta(), a2 = o2.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a2) try {
      e2 = parseInt(a2[1]), t2 = parseInt(a2[2]), n2 = parseInt(a2[3]), r2 = parseInt(a2[4]), i2 = o2.indexOf("OPR/") > -1;
    } catch (e3) {
    }
  }
  return {
    major: e2,
    minor: t2,
    build: n2,
    patch: r2,
    opera: i2
  };
}
function va() {
  return !!ta().match(/iPad|iPhone|iPod/i) && ra();
}
function ga() {
  return ta().indexOf("AppleWebKit/605.1.15") > -1;
}
function ma() {
  var e2 = 0, t2 = 0, n2 = 0;
  if ("undefined" != typeof window) {
    var r2 = ta().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (r2) try {
      e2 = parseInt(r2[1]), t2 = parseInt(r2[2]), n2 = parseInt(r2[4]);
    } catch (e3) {
    }
    else (va() || ga()) && (e2 = 14, t2 = 0, n2 = 3);
  }
  return {
    major: e2,
    minor: t2,
    point: n2
  };
}
function ya() {
  var e2 = 0, t2 = 0;
  if ("undefined" != typeof window) {
    var n2 = ta().match(/Firefox\/(\d+).(\d+)/);
    if (n2) try {
      e2 = parseInt(n2[1]), t2 = parseInt(n2[2]);
    } catch (e3) {
    }
  }
  return {
    major: e2,
    minor: t2
  };
}
var _a = function() {
  function e2() {
    t(this, e2);
  }
  return o(e2, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function(e3, t2, n2) {
      K();
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function(e3, t2, n2) {
      K();
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function(e3, t2, n2, r2) {
      K();
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function(e3, t2) {
      K();
    }
  }, {
    key: "removeListener",
    value: function(e3) {
      K();
    }
  }]), e2;
}();
function ba(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function wa(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? ba(Object(n2), true).forEach(function(t3) {
      d(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ba(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Sa(e2) {
  var t2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }();
  return function() {
    var n2, r2 = u(e2);
    if (t2) {
      var i2 = u(this).constructor;
      n2 = Reflect.construct(r2, arguments, i2);
    } else n2 = r2.apply(this, arguments);
    return l(this, n2);
  };
}
var ka = function() {
  c(n2, _a);
  var e2 = Sa(n2);
  function n2() {
    var r2;
    return t(this, n2), (r2 = e2.call(this))._wrappedListeners = {}, r2._messageCallbacks = {}, r2;
  }
  return o(n2, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function(e3, t2, n3) {
      var r2 = this, i2 = function(i3) {
        if (i3.data && "iframe-call-message" === i3.data.what && (!i3.data.callClientId || i3.data.callClientId === t2) && (!i3.data.from || "module" !== i3.data.from)) {
          var o2 = wa({}, i3.data);
          if (delete o2.from, o2.callbackStamp && r2._messageCallbacks[o2.callbackStamp]) {
            var a2 = o2.callbackStamp;
            r2._messageCallbacks[a2].call(n3, o2), delete r2._messageCallbacks[a2];
          }
          delete o2.what, delete o2.callbackStamp, e3.call(n3, o2);
        }
      };
      this._wrappedListeners[e3] = i2, window.addEventListener("message", i2);
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function(e3, t2, n3) {
      var r2 = function(r3) {
        var i2;
        if (!(!r3.data || r3.data.what !== $o || !r3.data.action || r3.data.from && "module" !== r3.data.from || r3.data.callClientId && t2 && r3.data.callClientId !== t2 || null != r3 && null !== (i2 = r3.data) && void 0 !== i2 && i2.callFrameId)) {
          var o2 = r3.data;
          e3.call(n3, o2);
        }
      };
      this._wrappedListeners[e3] = r2, window.addEventListener("message", r2);
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function(e3, t2, n3, r2) {
      if (!n3) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
      var i2 = wa({}, e3);
      if (i2.what = $o, i2.from = "module", i2.callClientId = n3, t2) {
        var o2 = Q();
        this._messageCallbacks[o2] = t2, i2.callbackStamp = o2;
      }
      var a2 = r2 ? r2.contentWindow : window, s2 = this._callMachineTargetOrigin(r2);
      s2 && a2.postMessage(i2, s2);
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function(e3, t2) {
      e3.what = $o, e3.callClientId = t2, e3.from = "embedded", window.postMessage(e3, this._targetOriginFromWindowLocation());
    }
  }, {
    key: "removeListener",
    value: function(e3) {
      var t2 = this._wrappedListeners[e3];
      t2 && (window.removeEventListener("message", t2), delete this._wrappedListeners[e3]);
    }
  }, {
    key: "forwardPackagedMessageToCallMachine",
    value: function(e3, t2, n3) {
      var r2 = wa({}, e3);
      r2.callClientId = n3;
      var i2 = t2 ? t2.contentWindow : window, o2 = this._callMachineTargetOrigin(t2);
      o2 && i2.postMessage(r2, o2);
    }
  }, {
    key: "addListenerForPackagedMessagesFromCallMachine",
    value: function(e3, t2) {
      var n3 = function(n4) {
        if (n4.data && "iframe-call-message" === n4.data.what && (!n4.data.callClientId || n4.data.callClientId === t2) && (!n4.data.from || "module" !== n4.data.from)) {
          var r2 = n4.data;
          e3(r2);
        }
      };
      return this._wrappedListeners[e3] = n3, window.addEventListener("message", n3), e3;
    }
  }, {
    key: "removeListenerForPackagedMessagesFromCallMachine",
    value: function(e3) {
      var t2 = this._wrappedListeners[e3];
      t2 && (window.removeEventListener("message", t2), delete this._wrappedListeners[e3]);
    }
  }, {
    key: "_callMachineTargetOrigin",
    value: function(e3) {
      return e3 ? e3.src ? new URL(e3.src).origin : void 0 : this._targetOriginFromWindowLocation();
    }
  }, {
    key: "_targetOriginFromWindowLocation",
    value: function() {
      return "file:" === window.location.protocol ? "*" : window.location.origin;
    }
  }]), n2;
}();
function Ma(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ca(e2) {
  var t2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }();
  return function() {
    var n2, r2 = u(e2);
    if (t2) {
      var i2 = u(this).constructor;
      n2 = Reflect.construct(r2, arguments, i2);
    } else n2 = r2.apply(this, arguments);
    return l(this, n2);
  };
}
var Ea = function() {
  c(n2, _a);
  var e2 = Ca(n2);
  function n2() {
    var r2;
    return t(this, n2), r2 = e2.call(this), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new m.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new m.EventEmitter(), r2._wrappedListeners = {}, r2._messageCallbacks = {}, r2;
  }
  return o(n2, [{
    key: "addListenerForMessagesFromCallMachine",
    value: function(e3, t2, n3) {
      this._addListener(e3, global.callMachineToDailyJsEmitter, t2, n3, "received call machine message");
    }
  }, {
    key: "addListenerForMessagesFromDailyJs",
    value: function(e3, t2, n3) {
      this._addListener(e3, global.dailyJsToCallMachineEmitter, t2, n3, "received daily-js message");
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function(e3, t2, n3) {
      this._sendMessage(e3, global.dailyJsToCallMachineEmitter, n3, t2, "sending message to call machine");
    }
  }, {
    key: "sendMessageToDailyJs",
    value: function(e3, t2) {
      this._sendMessage(e3, global.callMachineToDailyJsEmitter, t2, null, "sending message to daily-js");
    }
  }, {
    key: "removeListener",
    value: function(e3) {
      var t2 = this._wrappedListeners[e3];
      t2 && (global.callMachineToDailyJsEmitter.removeListener("message", t2), global.dailyJsToCallMachineEmitter.removeListener("message", t2), delete this._wrappedListeners[e3]);
    }
  }, {
    key: "_addListener",
    value: function(e3, t2, n3, r2, i2) {
      var o2 = this, a2 = function(t3) {
        if (t3.callClientId === n3) {
          if (t3.callbackStamp && o2._messageCallbacks[t3.callbackStamp]) {
            var i3 = t3.callbackStamp;
            o2._messageCallbacks[i3].call(r2, t3), delete o2._messageCallbacks[i3];
          }
          e3.call(r2, t3);
        }
      };
      this._wrappedListeners[e3] = a2, t2.addListener("message", a2);
    }
  }, {
    key: "_sendMessage",
    value: function(e3, t2, n3, r2, i2) {
      var o2 = function(e4) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n4 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? Ma(Object(n4), true).forEach(function(t4) {
            d(e4, t4, n4[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n4)) : Ma(Object(n4)).forEach(function(t4) {
            Object.defineProperty(e4, t4, Object.getOwnPropertyDescriptor(n4, t4));
          });
        }
        return e4;
      }({}, e3);
      if (o2.callClientId = n3, r2) {
        var a2 = Q();
        this._messageCallbacks[a2] = r2, o2.callbackStamp = a2;
      }
      t2.emit("message", o2);
    }
  }]), n2;
}();
var Ta = "replace";
var Pa = "shallow-merge";
var Oa = [Ta, Pa];
var Aa = function() {
  function e2() {
    var n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = n2.data, i2 = n2.mergeStrategy, o2 = void 0 === i2 ? Ta : i2;
    t(this, e2), e2._validateMergeStrategy(o2), e2._validateData(r2, o2), this.mergeStrategy = o2, this.data = r2;
  }
  return o(e2, [{
    key: "isNoOp",
    value: function() {
      return e2.isNoOpUpdate(this.data, this.mergeStrategy);
    }
  }], [{
    key: "isNoOpUpdate",
    value: function(e3, t2) {
      return 0 === Object.keys(e3).length && t2 === Pa;
    }
  }, {
    key: "_validateMergeStrategy",
    value: function(e3) {
      if (!Oa.includes(e3)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(Oa, "]"));
    }
  }, {
    key: "_validateData",
    value: function(e3, t2) {
      if (!function(e4) {
        if (null == e4 || "object" !== n(e4)) return false;
        var t3 = Object.getPrototypeOf(e4);
        return null == t3 || t3 === Object.prototype;
      }(e3)) throw Error("Meeting session data must be a plain (map-like) object");
      var r2;
      try {
        if (r2 = JSON.stringify(e3), t2 === Ta) {
          var i2 = JSON.parse(r2);
          D(i2, e3) || console.warn("The meeting session data provided will be modified when serialized.", i2, e3);
        } else if (t2 === Pa) {
          for (var o2 in e3) if (Object.hasOwnProperty.call(e3, o2) && void 0 !== e3[o2]) {
            var a2 = JSON.parse(JSON.stringify(e3[o2]));
            D(e3[o2], a2) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a2, e3[o2]);
          }
        }
      } catch (e4) {
        throw Error("Meeting session data must be serializable to JSON: ".concat(e4));
      }
      if (r2.length > Jo) throw Error("Meeting session data is too large (".concat(r2.length, " characters). Maximum size suppported is ").concat(Jo, "."));
    }
  }]), e2;
}();
function ja(e2, t2, n2) {
  return ja = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }() ? Reflect.construct.bind() : function(e3, t3, n3) {
    var r2 = [null];
    r2.push.apply(r2, t3);
    var i2 = new (Function.bind.apply(e3, r2))();
    return n3 && s(i2, n3.prototype), i2;
  }, ja.apply(null, arguments);
}
function xa(e2) {
  var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return xa = function(e3) {
    if (null === e3 || (n2 = e3, -1 === Function.toString.call(n2).indexOf("[native code]"))) return e3;
    var n2;
    if ("function" != typeof e3) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t2) {
      if (t2.has(e3)) return t2.get(e3);
      t2.set(e3, r2);
    }
    function r2() {
      return ja(e3, arguments, u(this).constructor);
    }
    return r2.prototype = Object.create(e3.prototype, {
      constructor: {
        value: r2,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), s(r2, e3);
  }, xa(e2);
}
function La(e2) {
  var t2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }();
  return function() {
    var n2, r2 = u(e2);
    if (t2) {
      var i2 = u(this).constructor;
      n2 = Reflect.construct(r2, arguments, i2);
    } else n2 = r2.apply(this, arguments);
    return l(this, n2);
  };
}
function Ia(e2) {
  var t2, n2 = null === (t2 = window._daily) || void 0 === t2 ? void 0 : t2.pendings;
  if (n2) {
    var r2 = n2.indexOf(e2);
    -1 !== r2 && n2.splice(r2, 1);
  }
}
var Da = function() {
  function e2(n2) {
    t(this, e2), this._currentLoad = null, this._callClientId = n2;
  }
  return o(e2, [{
    key: "load",
    value: function() {
      var e3, t2 = this, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = arguments.length > 1 ? arguments[1] : void 0, i2 = arguments.length > 2 ? arguments[2] : void 0;
      if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), void r2(true);
      e3 = this._callClientId, window._daily.pendings.push(e3), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Na(n2, function() {
        r2(false);
      }, function(e4, n3) {
        n3 || Ia(t2._callClientId), i2(e4, n3);
      }), this._currentLoad.start();
    }
  }, {
    key: "cancel",
    value: function() {
      this._currentLoad && this._currentLoad.cancel(), Ia(this._callClientId);
    }
  }, {
    key: "loaded",
    get: function() {
      return this._currentLoad && this._currentLoad.succeeded;
    }
  }]), e2;
}();
var Na = function() {
  function e2() {
    var n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = arguments.length > 1 ? arguments[1] : void 0, i2 = arguments.length > 2 ? arguments[2] : void 0;
    t(this, e2), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = n2, this._successCallback = r2, this._failureCallback = i2;
  }
  return o(e2, [{
    key: "start",
    value: function() {
      var e3 = this;
      if (!this._currentAttempt) {
        this._currentAttempt = new Ba(this._dailyConfig, this._successCallback, function t2(n2) {
          e3._currentAttempt.cancelled || (e3._attemptsRemaining--, e3._failureCallback(n2, e3._attemptsRemaining > 0), e3._attemptsRemaining <= 0 || setTimeout(function() {
            e3._currentAttempt.cancelled || (e3._currentAttempt = new Ba(e3._dailyConfig, e3._successCallback, t2), e3._currentAttempt.start());
          }, 3e3));
        }), this._currentAttempt.start();
      }
    }
  }, {
    key: "cancel",
    value: function() {
      this._currentAttempt && this._currentAttempt.cancel();
    }
  }, {
    key: "cancelled",
    get: function() {
      return this._currentAttempt && this._currentAttempt.cancelled;
    }
  }, {
    key: "succeeded",
    get: function() {
      return this._currentAttempt && this._currentAttempt.succeeded;
    }
  }]), e2;
}();
var Ra = function() {
  c(n2, xa(Error));
  var e2 = La(n2);
  function n2() {
    return t(this, n2), e2.apply(this, arguments);
  }
  return o(n2);
}();
var Fa = 2e4;
var Ba = function() {
  function e2(n3, r2, i2) {
    t(this, e2), this._loadAttemptImpl = na() || !n3.avoidEval ? new Ua(n3, r2, i2) : new Va(n3, r2, i2);
  }
  var n2;
  return o(e2, [{
    key: "start",
    value: (n2 = h(function* () {
      return this._loadAttemptImpl.start();
    }), function() {
      return n2.apply(this, arguments);
    })
  }, {
    key: "cancel",
    value: function() {
      this._loadAttemptImpl.cancel();
    }
  }, {
    key: "cancelled",
    get: function() {
      return this._loadAttemptImpl.cancelled;
    }
  }, {
    key: "succeeded",
    get: function() {
      return this._loadAttemptImpl.succeeded;
    }
  }]), e2;
}();
var Ua = function() {
  function e2(n3, r3, i3) {
    t(this, e2), this.cancelled = false, this.succeeded = false, this._networkTimedOut = false, this._networkTimeout = null, this._iosCache = "undefined" != typeof iOSCallObjectBundleCache && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = n3, this._successCallback = r3, this._failureCallback = i3;
  }
  var n2, r2, i2, a2;
  return o(e2, [{
    key: "start",
    value: (a2 = h(function* () {
      var e3 = X(this._dailyConfig);
      !(yield this._tryLoadFromIOSCache(e3)) && this._loadFromNetwork(e3);
    }), function() {
      return a2.apply(this, arguments);
    })
  }, {
    key: "cancel",
    value: function() {
      clearTimeout(this._networkTimeout), this.cancelled = true;
    }
  }, {
    key: "_tryLoadFromIOSCache",
    value: (i2 = h(function* (e3) {
      if (!this._iosCache) return false;
      try {
        var t2 = yield this._iosCache.get(e3);
        return !!this.cancelled || !!t2 && (t2.code ? (Function('"use strict";' + t2.code)(), this.succeeded = true, this._successCallback(), true) : (this._refetchHeaders = t2.refetchHeaders, false));
      } catch (e4) {
        return false;
      }
    }), function(e3) {
      return i2.apply(this, arguments);
    })
  }, {
    key: "_loadFromNetwork",
    value: (r2 = h(function* (e3) {
      var t2 = this;
      this._networkTimeout = setTimeout(function() {
        t2._networkTimedOut = true, t2._failureCallback({
          msg: "Timed out (>".concat(Fa, " ms) when loading call object bundle ").concat(e3),
          type: "timeout"
        });
      }, Fa);
      try {
        var n3 = this._refetchHeaders ? {
          headers: this._refetchHeaders
        } : {}, r3 = yield fetch(e3, n3);
        if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new Ra();
        var i3 = yield this._getBundleCodeFromResponse(e3, r3);
        if (this.cancelled) throw new Ra();
        Function('"use strict";' + i3)(), this._iosCache && this._iosCache.set(e3, i3, r3.headers), this.succeeded = true, this._successCallback();
      } catch (t3) {
        if (clearTimeout(this._networkTimeout), t3 instanceof Ra || this.cancelled || this._networkTimedOut) return;
        this._failureCallback({
          msg: "Failed to load call object bundle ".concat(e3, ": ").concat(t3),
          type: t3.message
        });
      }
    }), function(e3) {
      return r2.apply(this, arguments);
    })
  }, {
    key: "_getBundleCodeFromResponse",
    value: (n2 = h(function* (e3, t2) {
      if (t2.ok) return yield t2.text();
      if (this._iosCache && 304 === t2.status) return (yield this._iosCache.renew(e3, t2.headers)).code;
      throw new Error("Received ".concat(t2.status, " response"));
    }), function(e3, t2) {
      return n2.apply(this, arguments);
    })
  }]), e2;
}();
var Va = function() {
  function e2(n2, r2, i2) {
    t(this, e2), this.cancelled = false, this.succeeded = false, this._dailyConfig = n2, this._successCallback = r2, this._failureCallback = i2, this._attemptId = Q(), this._networkTimeout = null, this._scriptElement = null;
  }
  return o(e2, [{
    key: "start",
    value: function() {
      window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
      var e3 = X(this._dailyConfig);
      "object" === ("undefined" == typeof document ? "undefined" : n(document)) ? this._startLoading(e3) : this._failureCallback({
        msg: "Call object bundle must be loaded in a DOM/web context",
        type: "missing context"
      });
    }
  }, {
    key: "cancel",
    value: function() {
      this._stopLoading(), this.cancelled = true;
    }
  }, {
    key: "_startLoading",
    value: function(e3) {
      var t2 = this;
      this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
        t2._stopLoading(), t2._failureCallback({
          msg: "Timed out (>".concat(Fa, " ms) when loading call object bundle ").concat(e3),
          type: "timeout"
        });
      }, Fa);
      var n2 = document.getElementsByTagName("head")[0], r2 = document.createElement("script");
      this._scriptElement = r2, r2.onload = function() {
        t2._stopLoading(), t2.succeeded = true, t2._successCallback();
      }, r2.onerror = function(e4) {
        t2._stopLoading(), t2._failureCallback({
          msg: "Failed to load call object bundle ".concat(e4.target.src),
          type: e4.message
        });
      }, r2.src = e3, n2.appendChild(r2);
    }
  }, {
    key: "_stopLoading",
    value: function() {
      this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
    }
  }, {
    key: "_signUpForCallMachineLoadWaitlist",
    value: function() {
      window._dailyCallMachineLoadWaitlist.add(this._attemptId);
    }
  }, {
    key: "_withdrawFromCallMachineLoadWaitlist",
    value: function() {
      window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
    }
  }]), e2;
}();
var Ja = function(e2, t2, n2) {
  return true === Wa(e2.local, t2, n2);
};
var $a = function(e2, t2, n2) {
  return e2.local.streams && e2.local.streams[t2] && e2.local.streams[t2].stream && e2.local.streams[t2].stream["get".concat("video" === n2 ? "Video" : "Audio", "Tracks")]()[0];
};
var qa = function(e2, t2, n2, r2) {
  var i2 = za(e2, t2, n2, r2);
  return i2 && i2.pendingTrack;
};
var Wa = function(e2, t2, n2) {
  if (!e2) return false;
  var r2 = function(e3) {
    switch (e3) {
      case "avatar":
        return true;
      case "staged":
        return e3;
      default:
        return !!e3;
    }
  }, i2 = e2.public.subscribedTracks;
  return i2 && i2[t2] ? -1 === ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n2) && i2[t2].custom ? [true, "staged"].includes(i2[t2].custom) ? r2(i2[t2].custom) : r2(i2[t2].custom[n2]) : r2(i2[t2][n2]) : !i2 || r2(i2.ALL);
};
var za = function(e2, t2, n2, r2) {
  var i2 = Object.values(e2.streams || {}).filter(function(e3) {
    return e3.participantId === t2 && e3.type === n2 && e3.pendingTrack && e3.pendingTrack.kind === r2;
  }).sort(function(e3, t3) {
    return new Date(t3.starttime) - new Date(e3.starttime);
  });
  return i2 && i2[0];
};
var Ha = function(e2, t2) {
  var n2 = e2.local.public.customTracks;
  if (n2 && n2[t2]) return n2[t2].track;
};
function Ga(e2, t2) {
  for (var n2 = t2.getState(), r2 = 0, i2 = ["cam", "screen"]; r2 < i2.length; r2++) for (var o2 = i2[r2], a2 = 0, s2 = ["video", "audio"]; a2 < s2.length; a2++) {
    var c2 = s2[a2], l2 = "cam" === o2 ? c2 : "screen".concat(c2.charAt(0).toUpperCase() + c2.slice(1)), u2 = e2.tracks[l2];
    if (u2) {
      var d2 = e2.local ? $a(n2, o2, c2) : qa(n2, e2.session_id, o2, c2);
      "playable" === u2.state && (u2.track = d2), u2.persistentTrack = d2;
    }
  }
}
function Qa(e2, t2) {
  try {
    var n2 = t2.getState();
    for (var r2 in e2.tracks) if (!Ka(r2)) {
      var i2 = e2.tracks[r2].kind;
      if (i2) {
        var o2 = e2.tracks[r2];
        if (o2) {
          var a2 = e2.local ? Ha(n2, r2) : qa(n2, e2.session_id, r2, i2);
          "playable" === o2.state && (e2.tracks[r2].track = a2), o2.persistentTrack = a2;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (e3) {
    console.error(e3);
  }
}
function Ka(e2) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(e2);
}
function Ya(e2, t2, n2) {
  var r2 = n2.getState();
  if (e2.local) {
    if (e2.audio) try {
      e2.audioTrack = r2.local.streams.cam.stream.getAudioTracks()[0], e2.audioTrack || (e2.audio = false);
    } catch (e3) {
    }
    if (e2.video) try {
      e2.videoTrack = r2.local.streams.cam.stream.getVideoTracks()[0], e2.videoTrack || (e2.video = false);
    } catch (e3) {
    }
    if (e2.screen) try {
      e2.screenVideoTrack = r2.local.streams.screen.stream.getVideoTracks()[0], e2.screenAudioTrack = r2.local.streams.screen.stream.getAudioTracks()[0], e2.screenVideoTrack || e2.screenAudioTrack || (e2.screen = false);
    } catch (e3) {
    }
  } else {
    var i2 = true;
    try {
      var o2 = r2.participants[e2.session_id];
      o2 && o2.public && o2.public.rtcType && "peer-to-peer" === o2.public.rtcType.impl && o2.private && !["connected", "completed"].includes(o2.private.peeringState) && (i2 = false);
    } catch (e3) {
      console.error(e3);
    }
    if (!i2) return e2.audio = false, e2.audioTrack = false, e2.video = false, e2.videoTrack = false, e2.screen = false, void (e2.screenTrack = false);
    try {
      r2.streams;
      if (e2.audio && Ja(r2, e2.session_id, "cam-audio")) {
        var a2 = qa(r2, e2.session_id, "cam", "audio");
        a2 && (t2 && t2.audioTrack && t2.audioTrack.id === a2.id ? e2.audioTrack = a2 : a2.muted || (e2.audioTrack = a2)), e2.audioTrack || (e2.audio = false);
      }
      if (e2.video && Ja(r2, e2.session_id, "cam-video")) {
        var s2 = qa(r2, e2.session_id, "cam", "video");
        s2 && (t2 && t2.videoTrack && t2.videoTrack.id === s2.id ? e2.videoTrack = s2 : s2.muted || (e2.videoTrack = s2)), e2.videoTrack || (e2.video = false);
      }
      if (e2.screen && Ja(r2, e2.session_id, "screen-audio")) {
        var c2 = qa(r2, e2.session_id, "screen", "audio");
        c2 && (t2 && t2.screenAudioTrack && t2.screenAudioTrack.id === c2.id ? e2.screenAudioTrack = c2 : c2.muted || (e2.screenAudioTrack = c2));
      }
      if (e2.screen && Ja(r2, e2.session_id, "screen-video")) {
        var l2 = qa(r2, e2.session_id, "screen", "video");
        l2 && (t2 && t2.screenVideoTrack && t2.screenVideoTrack.id === l2.id ? e2.screenVideoTrack = l2 : l2.muted || (e2.screenVideoTrack = l2));
      }
      e2.screenVideoTrack || e2.screenAudioTrack || (e2.screen = false);
    } catch (e3) {
      console.error("unexpected error matching up tracks", e3);
    }
  }
}
function Xa(e2, t2) {
  var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = function(e3, t3) {
      if (!e3) return;
      if ("string" == typeof e3) return Za(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3) return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return Za(e3, t3);
    }(e2)) || t2 && e2 && "number" == typeof e2.length) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return {
        s: i2,
        n: function() {
          return r2 >= e2.length ? {
            done: true
          } : {
            done: false,
            value: e2[r2++]
          };
        },
        e: function(e3) {
          throw e3;
        },
        f: i2
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, a2 = true, s2 = false;
  return {
    s: function() {
      n2 = n2.call(e2);
    },
    n: function() {
      var e3 = n2.next();
      return a2 = e3.done, e3;
    },
    e: function(e3) {
      s2 = true, o2 = e3;
    },
    f: function() {
      try {
        a2 || null == n2.return || n2.return();
      } finally {
        if (s2) throw o2;
      }
    }
  };
}
function Za(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
var es = /* @__PURE__ */ new Map();
var ts = null;
function ns(e2, t2) {
  var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = function(e3, t3) {
      if (!e3) return;
      if ("string" == typeof e3) return rs(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3) return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return rs(e3, t3);
    }(e2)) || t2 && e2 && "number" == typeof e2.length) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return {
        s: i2,
        n: function() {
          return r2 >= e2.length ? {
            done: true
          } : {
            done: false,
            value: e2[r2++]
          };
        },
        e: function(e3) {
          throw e3;
        },
        f: i2
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, a2 = true, s2 = false;
  return {
    s: function() {
      n2 = n2.call(e2);
    },
    n: function() {
      var e3 = n2.next();
      return a2 = e3.done, e3;
    },
    e: function(e3) {
      s2 = true, o2 = e3;
    },
    f: function() {
      try {
        a2 || null == n2.return || n2.return();
      } finally {
        if (s2) throw o2;
      }
    }
  };
}
function rs(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
var is = /* @__PURE__ */ new Map();
var os = null;
function as(e2) {
  cs() ? function(e3) {
    es.has(e3) || (es.set(e3, {}), navigator.mediaDevices.enumerateDevices().then(function(t2) {
      es.has(e3) && (es.get(e3).lastDevicesString = JSON.stringify(t2), ts || (ts = function() {
        var e4 = h(function* () {
          var e5, t3 = yield navigator.mediaDevices.enumerateDevices(), n2 = Xa(es.keys());
          try {
            for (n2.s(); !(e5 = n2.n()).done; ) {
              var r2 = e5.value, i2 = JSON.stringify(t3);
              i2 !== es.get(r2).lastDevicesString && (es.get(r2).lastDevicesString = i2, r2(t3));
            }
          } catch (e6) {
            n2.e(e6);
          } finally {
            n2.f();
          }
        });
        return function() {
          return e4.apply(this, arguments);
        };
      }(), navigator.mediaDevices.addEventListener("devicechange", ts)));
    }).catch(function() {
    }));
  }(e2) : function(e3) {
    is.has(e3) || (is.set(e3, {}), navigator.mediaDevices.enumerateDevices().then(function(t2) {
      is.has(e3) && (is.get(e3).lastDevicesString = JSON.stringify(t2), os || (os = setInterval(h(function* () {
        var e4, t3 = yield navigator.mediaDevices.enumerateDevices(), n2 = ns(is.keys());
        try {
          for (n2.s(); !(e4 = n2.n()).done; ) {
            var r2 = e4.value, i2 = JSON.stringify(t3);
            i2 !== is.get(r2).lastDevicesString && (is.get(r2).lastDevicesString = i2, r2(t3));
          }
        } catch (e5) {
          n2.e(e5);
        } finally {
          n2.f();
        }
      }), 3e3)));
    }));
  }(e2);
}
function ss(e2) {
  cs() ? function(e3) {
    es.has(e3) && (es.delete(e3), 0 === es.size && ts && (navigator.mediaDevices.removeEventListener("devicechange", ts), ts = null));
  }(e2) : function(e3) {
    is.has(e3) && (is.delete(e3), 0 === is.size && os && (clearInterval(os), os = null));
  }(e2);
}
function cs() {
  return na() || void 0 !== navigator.mediaDevices.ondevicechange;
}
var ls = /* @__PURE__ */ new Set();
function us(e2, t2) {
  var n2 = t2.isLocalScreenVideo;
  return e2 && "live" === e2.readyState && !function(e3, t3) {
    return (!t3.isLocalScreenVideo || "Chrome" !== pa()) && e3.muted && !ls.has(e3.id);
  }(e2, {
    isLocalScreenVideo: n2
  });
}
var ds = ["result"];
var ps = ["preserveIframe"];
function hs(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function fs(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? hs(Object(n2), true).forEach(function(t3) {
      d(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : hs(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function vs(e2) {
  var t2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }();
  return function() {
    var n2, r2 = u(e2);
    if (t2) {
      var i2 = u(this).constructor;
      n2 = Reflect.construct(r2, arguments, i2);
    } else n2 = r2.apply(this, arguments);
    return l(this, n2);
  };
}
function gs(e2, t2) {
  var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = function(e3, t3) {
      if (!e3) return;
      if ("string" == typeof e3) return ms(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      "Object" === n3 && e3.constructor && (n3 = e3.constructor.name);
      if ("Map" === n3 || "Set" === n3) return Array.from(e3);
      if ("Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return ms(e3, t3);
    }(e2)) || t2 && e2 && "number" == typeof e2.length) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return {
        s: i2,
        n: function() {
          return r2 >= e2.length ? {
            done: true
          } : {
            done: false,
            value: e2[r2++]
          };
        },
        e: function(e3) {
          throw e3;
        },
        f: i2
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, a2 = true, s2 = false;
  return {
    s: function() {
      n2 = n2.call(e2);
    },
    n: function() {
      var e3 = n2.next();
      return a2 = e3.done, e3;
    },
    e: function(e3) {
      s2 = true, o2 = e3;
    },
    f: function() {
      try {
        a2 || null == n2.return || n2.return();
      } finally {
        if (s2) throw o2;
      }
    }
  };
}
function ms(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
var ys = {};
var _s = "video";
var bs = "voice";
var ws = na() ? {
  data: {}
} : {
  data: {},
  topology: "none"
};
var Ss = {
  present: 0,
  hidden: 0
};
var ks = {
  maxBitrate: {
    min: 1e5,
    max: 25e5
  },
  maxFramerate: {
    min: 1,
    max: 30
  },
  scaleResolutionDownBy: {
    min: 1,
    max: 8
  }
};
var Ms = Object.keys(ks);
var Cs = ["state", "volume", "simulcastEncodings"];
var Es = {
  androidInCallNotification: {
    title: "string",
    subtitle: "string",
    iconName: "string",
    disableForCustomOverride: "boolean"
  },
  disableAutoDeviceManagement: {
    audio: "boolean",
    video: "boolean"
  }
};
var Ts = {
  id: {
    iconPath: "string",
    iconPathDarkMode: "string",
    label: "string",
    tooltip: "string",
    visualState: "'default' | 'sidebar-open' | 'active'"
  }
};
var Ps = {
  id: {
    allow: "string",
    controlledBy: "'*' | 'owners' | string[]",
    csp: "string",
    iconURL: "string",
    label: "string",
    loading: "'eager' | 'lazy'",
    location: "'main' | 'sidebar'",
    name: "string",
    referrerPolicy: "string",
    sandbox: "string",
    src: "string",
    srcdoc: "string",
    shared: "string[] | 'owners' | boolean"
  }
};
var Os = {
  customIntegrations: {
    validate: Ks,
    help: Gs()
  },
  customTrayButtons: {
    validate: Qs,
    help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Ts))
  },
  url: {
    validate: function(e2) {
      return "string" == typeof e2;
    },
    help: "url should be a string"
  },
  baseUrl: {
    validate: function(e2) {
      return "string" == typeof e2;
    },
    help: "baseUrl should be a string"
  },
  token: {
    validate: function(e2) {
      return "string" == typeof e2;
    },
    help: "token should be a string",
    queryString: "t"
  },
  dailyConfig: {
    validate: function(e2, t2) {
      try {
        return t2.validateDailyConfig(e2), true;
      } catch (e3) {
        console.error("Failed to validate dailyConfig", e3);
      }
      return false;
    },
    help: "Unsupported dailyConfig. Check error logs for detailed info."
  },
  reactNativeConfig: {
    validate: function(e2) {
      return Ys(e2, Es);
    },
    help: "reactNativeConfig should look like ".concat(JSON.stringify(Es), ", all fields optional")
  },
  lang: {
    validate: function(e2) {
      return ["da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(e2);
    },
    help: "language not supported. Options are: da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user"
  },
  userName: true,
  userData: {
    validate: function(e2) {
      try {
        return Js(e2), true;
      } catch (e3) {
        return console.error(e3), false;
      }
    },
    help: "invalid userData type provided"
  },
  startVideoOff: true,
  startAudioOff: true,
  activeSpeakerMode: true,
  showLeaveButton: true,
  showLocalVideo: true,
  showParticipantsBar: true,
  showFullscreenButton: true,
  showUserNameChangeUI: true,
  iframeStyle: true,
  customLayout: true,
  cssFile: true,
  cssText: true,
  bodyClass: true,
  videoSource: {
    validate: function(e2, t2) {
      return e2 instanceof MediaStreamTrack && (t2._sharedTracks.videoDeviceId = e2), t2._preloadCache.videoDeviceId = e2, true;
    }
  },
  audioSource: {
    validate: function(e2, t2) {
      return e2 instanceof MediaStreamTrack && (t2._sharedTracks.audioDeviceId = e2), t2._preloadCache.audioDeviceId = e2, true;
    }
  },
  subscribeToTracksAutomatically: {
    validate: function(e2, t2) {
      return t2._preloadCache.subscribeToTracksAutomatically = e2, true;
    }
  },
  theme: {
    validate: function(e2) {
      var t2 = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], r2 = function(e3) {
        for (var n2 = 0, r3 = Object.keys(e3); n2 < r3.length; n2++) {
          var i2 = r3[n2];
          if (!t2.includes(i2)) return console.error('unsupported color "'.concat(i2, '". Valid colors: ').concat(t2.join(", "))), false;
          if (!e3[i2].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(i2, ' theme color should be provided in valid hex color format. Received: "').concat(e3[i2], '"')), false;
        }
        return true;
      };
      return "object" === n(e2) && ("light" in e2 && "dark" in e2 || "colors" in e2) ? "light" in e2 && "dark" in e2 ? "colors" in e2.light ? "colors" in e2.dark ? r2(e2.light.colors) && r2(e2.dark.colors) : (console.error('Dark theme is missing "colors" property.', e2), false) : (console.error('Light theme is missing "colors" property.', e2), false) : r2(e2.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e2), false);
    },
    help: "unsupported theme configuration. Check error logs for detailed info."
  },
  layoutConfig: {
    validate: function(e2) {
      if ("grid" in e2) {
        var t2 = e2.grid;
        if ("maxTilesPerPage" in t2) {
          if (!Number.isInteger(t2.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t2.maxTilesPerPage, ".")), false;
          if (t2.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), false;
        }
        if ("minTilesPerPage" in t2) {
          if (!Number.isInteger(t2.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t2.minTilesPerPage, ".")), false;
          if (t2.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), false;
          if ("maxTilesPerPage" in t2 && t2.minTilesPerPage > t2.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), false;
        }
      }
      return true;
    },
    help: "unsupported layoutConfig. Check error logs for detailed info."
  },
  receiveSettings: {
    validate: function(e2) {
      return $s(e2, {
        allowAllParticipantsKey: false
      });
    },
    help: Hs({
      allowAllParticipantsKey: false
    })
  },
  sendSettings: {
    validate: function(e2, t2) {
      return !!function(e3, t3) {
        try {
          return t3.validateUpdateSendSettings(e3), true;
        } catch (e4) {
          return console.error("Failed to validate send settings", e4), false;
        }
      }(e2, t2) && (t2._preloadCache.sendSettings = e2, true);
    },
    help: "Invalid sendSettings provided. Check error logs for detailed info."
  },
  inputSettings: {
    validate: function(e2, t2) {
      var n2;
      return !!qs(e2) && (t2._preloadCache.inputSettings || (t2._preloadCache.inputSettings = {}), Ws(e2, null === (n2 = t2.properties) || void 0 === n2 ? void 0 : n2.dailyConfig), e2.audio && (t2._preloadCache.inputSettings.audio = e2.audio), e2.video && (t2._preloadCache.inputSettings.video = e2.video), true);
    },
    help: zs()
  },
  layout: {
    validate: function(e2) {
      return "custom-v1" === e2 || "browser" === e2 || "none" === e2;
    },
    help: 'layout may only be set to "custom-v1"',
    queryString: "layout"
  },
  emb: {
    queryString: "emb"
  },
  embHref: {
    queryString: "embHref"
  },
  dailyJsVersion: {
    queryString: "dailyJsVersion"
  },
  proxy: {
    queryString: "proxy"
  },
  strictMode: true,
  allowMultipleCallInstances: true
};
var As = {
  styles: {
    validate: function(e2) {
      for (var t2 in e2) if ("cam" !== t2 && "screen" !== t2) return false;
      if (e2.cam) {
        for (var n2 in e2.cam) if ("div" !== n2 && "video" !== n2) return false;
      }
      if (e2.screen) {
        for (var r2 in e2.screen) if ("div" !== r2 && "video" !== r2) return false;
      }
      return true;
    },
    help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"
  },
  setSubscribedTracks: {
    validate: function(e2, t2) {
      if (t2._preloadCache.subscribeToTracksAutomatically) return false;
      var n2 = [true, false, "staged"];
      if (n2.includes(e2) || !na() && "avatar" === e2) return true;
      var r2 = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"];
      return function e3(t3) {
        var i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (var o2 in t3) if ("custom" === o2) {
          if (!n2.includes(t3[o2]) && !e3(t3[o2], true)) return false;
        } else {
          var a2 = !i2 && !r2.includes(o2), s2 = !n2.includes(t3[o2]);
          if (a2 || s2) return false;
        }
        return true;
      }(e2);
    },
    help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(na() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")
  },
  setAudio: true,
  setVideo: true,
  setScreenShare: {
    validate: function(e2) {
      return false === e2;
    },
    help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares"
  },
  eject: true,
  updatePermissions: {
    validate: function(e2) {
      for (var t2 = 0, n2 = Object.entries(e2); t2 < n2.length; t2++) {
        var r2 = v(n2[t2], 2), i2 = r2[0], o2 = r2[1];
        switch (i2) {
          case "hasPresence":
            if ("boolean" != typeof o2) return false;
            break;
          case "canSend":
            if (o2 instanceof Set || o2 instanceof Array || Array.isArray(o2)) {
              var a2, s2 = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], c2 = gs(o2);
              try {
                for (c2.s(); !(a2 = c2.n()).done; ) {
                  var l2 = a2.value;
                  if (!s2.includes(l2)) return false;
                }
              } catch (e3) {
                c2.e(e3);
              } finally {
                c2.f();
              }
            } else if ("boolean" != typeof o2) return false;
            (o2 instanceof Array || Array.isArray(o2)) && (e2.canSend = new Set(o2));
            break;
          case "canAdmin":
            if (o2 instanceof Set || o2 instanceof Array || Array.isArray(o2)) {
              var u2, d2 = ["participants", "streaming", "transcription"], p2 = gs(o2);
              try {
                for (p2.s(); !(u2 = p2.n()).done; ) {
                  var h2 = u2.value;
                  if (!d2.includes(h2)) return false;
                }
              } catch (e3) {
                p2.e(e3);
              } finally {
                p2.f();
              }
            } else if ("boolean" != typeof o2) return false;
            (o2 instanceof Array || Array.isArray(o2)) && (e2.canAdmin = new Set(o2));
            break;
          default:
            return false;
        }
      }
      return true;
    },
    help: "updatePermissions can take hasPresence, canSend, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)."
  }
};
Promise.any || (Promise.any = function() {
  var e2 = h(function* (e3) {
    return new Promise(function(t2, n2) {
      var r2 = [];
      e3.forEach(function(i2) {
        return Promise.resolve(i2).then(function(e4) {
          t2(e4);
        }).catch(function(t3) {
          r2.push(t3), r2.length === e3.length && n2(r2);
        });
      });
    });
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
}());
var js = function() {
  c(ee2, m);
  var r2, i2, s2, l2, u2, p2, f2, g2, y2, _2, b2, w2, S2, k2, M2, C2, E2, T2, P2, O2, A2, j2, x2, L2, I2, N2, R2, F2, B2, U2, V2, J2, $2, q2, W2, z2, H2, K2, Z2 = vs(ee2);
  function ee2(e2) {
    var n2, r3, i3, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t(this, ee2), d(a(r3 = Z2.call(this)), "startListeningForDeviceChanges", function() {
      as(r3.handleDeviceChange);
    }), d(a(r3), "stopListeningForDeviceChanges", function() {
      ss(r3.handleDeviceChange);
    }), d(a(r3), "handleDeviceChange", function(e3) {
      e3 = e3.map(function(e4) {
        return JSON.parse(JSON.stringify(e4));
      }), r3.emitDailyJSEvent({
        action: "available-devices-updated",
        availableDevices: e3
      });
    }), d(a(r3), "handleNativeAppStateChange", function() {
      var e3 = h(function* (e4) {
        if ("destroyed" === e4) return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield r3.destroy());
        var t2 = "active" === e4;
        r3.disableReactNativeAutoDeviceManagement("video") || (t2 ? r3.camUnmutedBeforeLosingNativeActiveState && r3.setLocalVideo(true) : (r3.camUnmutedBeforeLosingNativeActiveState = r3.localVideo(), r3.camUnmutedBeforeLosingNativeActiveState && r3.setLocalVideo(false)));
      });
      return function(t2) {
        return e3.apply(this, arguments);
      };
    }()), d(a(r3), "handleNativeAudioFocusChange", function(e3) {
      r3.disableReactNativeAutoDeviceManagement("audio") || (r3._hasNativeAudioFocus = e3, r3.toggleParticipantAudioBasedOnNativeAudioFocus(), r3._hasNativeAudioFocus ? r3.micUnmutedBeforeLosingNativeAudioFocus && r3.setLocalAudio(true) : (r3.micUnmutedBeforeLosingNativeAudioFocus = r3.localAudio(), r3.setLocalAudio(false)));
    }), d(a(r3), "handleNativeSystemScreenCaptureStop", function() {
      r3.stopScreenShare();
    }), r3.strictMode = void 0 === o2.strictMode || o2.strictMode, r3.allowMultipleCallInstances = null !== (n2 = o2.allowMultipleCallInstances) && void 0 !== n2 && n2, Object.keys(ys).length && (r3._logDuplicateInstanceAttempt(), !r3.allowMultipleCallInstances)) {
      if (r3.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = {
      pendings: [],
      instances: {}
    }), r3.callClientId = Q(), i3 = a(r3), ys[i3.callClientId] = i3, window._daily.instances[r3.callClientId] = {}, r3._sharedTracks = {}, window._daily.instances[r3.callClientId].tracks = r3._sharedTracks, o2.dailyJsVersion = ee2.version(), r3._iframe = e2, r3._callObjectMode = "none" === o2.layout && !r3._iframe, r3._preloadCache = {
      subscribeToTracksAutomatically: true,
      audioDeviceId: null,
      videoDeviceId: null,
      outputDeviceId: null,
      inputSettings: null,
      sendSettings: null,
      videoTrackForNetworkConnectivityTest: null,
      videoTrackForConnectionQualityTest: null
    }, void 0 !== o2.showLocalVideo ? r3._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : r3._showLocalVideo = !!o2.showLocalVideo : r3._showLocalVideo = true, void 0 !== o2.showParticipantsBar ? r3._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : r3._showParticipantsBar = !!o2.showParticipantsBar : r3._showParticipantsBar = true, void 0 !== o2.customIntegrations ? r3._callObjectMode ? console.error("customIntegrations is not available in call object mode") : r3._customIntegrations = o2.customIntegrations : r3._customIntegrations = {}, void 0 !== o2.customTrayButtons ? r3._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : r3._customTrayButtons = o2.customTrayButtons : r3._customTrayButtons = {}, void 0 !== o2.activeSpeakerMode ? r3._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : r3._activeSpeakerMode = !!o2.activeSpeakerMode : r3._activeSpeakerMode = false, o2.receiveSettings ? r3._callObjectMode ? r3._receiveSettings = o2.receiveSettings : console.error("receiveSettings is only available in call object mode") : r3._receiveSettings = {}, r3.validateProperties(o2), r3.properties = fs({}, o2), r3._preloadCache.inputSettings || (r3._preloadCache.inputSettings = {}), o2.inputSettings && o2.inputSettings.audio && (r3._preloadCache.inputSettings.audio = o2.inputSettings.audio), o2.inputSettings && o2.inputSettings.video && (r3._preloadCache.inputSettings.video = o2.inputSettings.video), r3._callObjectLoader = r3._callObjectMode ? new Da(r3.callClientId) : null, r3._callState = Zr, r3._isPreparingToJoin = false, r3._accessState = {
      access: pi
    }, r3._meetingSessionSummary = {}, r3._finalSummaryOfPrevSession = {}, r3._meetingSessionState = tc(ws, r3._callObjectMode), r3._nativeInCallAudioMode = _s, r3._participants = {}, r3._isScreenSharing = false, r3._participantCounts = Ss, r3._rmpPlayerState = {}, r3._waitingParticipants = {}, r3._network = {
      threshold: "good",
      quality: 100
    }, r3._activeSpeaker = {}, r3._localAudioLevel = 0, r3._isLocalAudioLevelObserverRunning = false, r3._remoteParticipantsAudioLevel = {}, r3._isRemoteParticipantsAudioLevelObserverRunning = false, r3._maxAppMessageSize = Vo, r3._messageChannel = na() ? new Ea() : new ka(), r3._iframe && (r3._iframe.requestFullscreen ? r3._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === r3._iframe ? (r3.emitDailyJSEvent({
        action: Ao
      }), r3.sendMessageToCallMachine({
        action: Ao
      })) : (r3.emitDailyJSEvent({
        action: jo
      }), r3.sendMessageToCallMachine({
        action: jo
      }));
    }) : r3._iframe.webkitRequestFullscreen && r3._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === r3._iframe ? (r3.emitDailyJSEvent({
        action: Ao
      }), r3.sendMessageToCallMachine({
        action: Ao
      })) : (r3.emitDailyJSEvent({
        action: jo
      }), r3.sendMessageToCallMachine({
        action: jo
      }));
    })), na()) {
      var s3 = r3.nativeUtils();
      s3.addAudioFocusChangeListener && s3.removeAudioFocusChangeListener && s3.addAppStateChangeListener && s3.removeAppStateChangeListener && s3.addSystemScreenCaptureStopListener && s3.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), r3._hasNativeAudioFocus = true, s3.addAudioFocusChangeListener(r3.handleNativeAudioFocusChange), s3.addAppStateChangeListener(r3.handleNativeAppStateChange), s3.addSystemScreenCaptureStopListener(r3.handleNativeSystemScreenCaptureStop);
    }
    return r3._callObjectMode && r3.startListeningForDeviceChanges(), r3._messageChannel.addListenerForMessagesFromCallMachine(r3.handleMessageFromCallMachine, r3.callClientId, a(r3)), r3;
  }
  return o(ee2, [{
    key: "destroy",
    value: (K2 = h(function* () {
      var e2, t2;
      try {
        yield this.leave();
      } catch (e3) {
      }
      var n2 = this._iframe;
      if (n2) {
        var r3 = n2.parentElement;
        r3 && r3.removeChild(n2);
      }
      if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), na()) {
        var i3 = this.nativeUtils();
        i3.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), i3.removeAppStateChangeListener(this.handleNativeAppStateChange), i3.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
      }
      this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = true, this.emitDailyJSEvent({
        action: "call-instance-destroyed"
      }), delete ys[this.callClientId], (null === (e2 = window) || void 0 === e2 || null === (t2 = e2._daily) || void 0 === t2 ? void 0 : t2.instances) && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
    }), function() {
      return K2.apply(this, arguments);
    })
  }, {
    key: "isDestroyed",
    value: function() {
      return !!this._destroyed;
    }
  }, {
    key: "loadCss",
    value: function(e2) {
      var t2 = e2.bodyClass, n2 = e2.cssFile, r3 = e2.cssText;
      return Us(), this.sendMessageToCallMachine({
        action: "load-css",
        cssFile: this.absoluteUrl(n2),
        bodyClass: t2,
        cssText: r3
      }), this;
    }
  }, {
    key: "iframe",
    value: function() {
      return Us(), this._iframe;
    }
  }, {
    key: "meetingState",
    value: function() {
      return this._callState;
    }
  }, {
    key: "accessState",
    value: function() {
      return Fs(this._callObjectMode, "accessState()"), this._accessState;
    }
  }, {
    key: "participants",
    value: function() {
      return this._participants;
    }
  }, {
    key: "participantCounts",
    value: function() {
      return this._participantCounts;
    }
  }, {
    key: "waitingParticipants",
    value: function() {
      return Fs(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
    }
  }, {
    key: "validateParticipantProperties",
    value: function(e2, t2) {
      for (var n2 in t2) {
        if (!As[n2]) throw new Error("unrecognized updateParticipant property ".concat(n2));
        if (As[n2].validate && !As[n2].validate(t2[n2], this, this._participants[e2])) throw new Error(As[n2].help);
      }
    }
  }, {
    key: "updateParticipant",
    value: function(e2, t2) {
      return this._participants.local && this._participants.local.session_id === e2 && (e2 = "local"), e2 && t2 && (this.validateParticipantProperties(e2, t2), this.sendMessageToCallMachine({
        action: "update-participant",
        id: e2,
        properties: t2
      })), this;
    }
  }, {
    key: "updateParticipants",
    value: function(e2) {
      var t2 = this._participants.local && this._participants.local.session_id;
      for (var n2 in e2) n2 === t2 && (n2 = "local"), n2 && e2[n2] && this.validateParticipantProperties(n2, e2[n2]);
      return this.sendMessageToCallMachine({
        action: "update-participants",
        participants: e2
      }), this;
    }
  }, {
    key: "updateWaitingParticipant",
    value: (H2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (Fs(this._callObjectMode, "updateWaitingParticipant()"), Ls(this._callState, "updateWaitingParticipant()"), "string" != typeof t2 || "object" !== n(r3)) throw new Error("updateWaitingParticipant() must take an id string and a updates object");
      return new Promise(function(n2, i3) {
        e2.sendMessageToCallMachine({
          action: "daily-method-update-waiting-participant",
          id: t2,
          updates: r3
        }, function(e3) {
          e3.error && i3(e3.error), e3.id || i3(new Error("unknown error in updateWaitingParticipant()")), n2({
            id: e3.id
          });
        });
      });
    }), function() {
      return H2.apply(this, arguments);
    })
  }, {
    key: "updateWaitingParticipants",
    value: (z2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (Fs(this._callObjectMode, "updateWaitingParticipants()"), Ls(this._callState, "updateWaitingParticipants()"), "object" !== n(t2)) throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
      return new Promise(function(n2, r3) {
        e2.sendMessageToCallMachine({
          action: "daily-method-update-waiting-participants",
          updatesById: t2
        }, function(e3) {
          e3.error && r3(e3.error), e3.ids || r3(new Error("unknown error in updateWaitingParticipants()")), n2({
            ids: e3.ids
          });
        });
      });
    }), function() {
      return z2.apply(this, arguments);
    })
  }, {
    key: "requestAccess",
    value: (W2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = t2.access, r3 = void 0 === n2 ? {
        level: hi
      } : n2, i3 = t2.name, o2 = void 0 === i3 ? "" : i3;
      return Fs(this._callObjectMode, "requestAccess()"), Ls(this._callState, "requestAccess()"), new Promise(function(t3, n3) {
        e2.sendMessageToCallMachine({
          action: "daily-method-request-access",
          access: r3,
          name: o2
        }, function(e3) {
          e3.error && n3(e3.error), e3.access || n3(new Error("unknown error in requestAccess()")), t3({
            access: e3.access,
            granted: e3.granted
          });
        });
      });
    }), function() {
      return W2.apply(this, arguments);
    })
  }, {
    key: "localAudio",
    value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
    }
  }, {
    key: "localVideo",
    value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
    }
  }, {
    key: "setLocalAudio",
    value: function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "forceDiscardTrack" in t2 && (na() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), t2 = {}) : e2 && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), t2 = {})), this.sendMessageToCallMachine({
        action: "local-audio",
        state: e2,
        options: t2
      }), this;
    }
  }, {
    key: "localScreenAudio",
    value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
    }
  }, {
    key: "localScreenVideo",
    value: function() {
      return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
    }
  }, {
    key: "updateScreenShare",
    value: function(e2) {
      if (this._isScreenSharing) return this.sendMessageToCallMachine({
        action: "local-screen-update",
        options: e2
      }), this;
      console.warn("There is no screen share in progress. Try calling startScreenShare first.");
    }
  }, {
    key: "setLocalVideo",
    value: function(e2) {
      return this.sendMessageToCallMachine({
        action: "local-video",
        state: e2
      }), this;
    }
  }, {
    key: "getReceiveSettings",
    value: (q2 = h(function* (e2) {
      var t2 = this, r3 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showInheritedValues, i3 = void 0 !== r3 && r3;
      if (Fs(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
      switch (n(e2)) {
        case "string":
          return new Promise(function(n2) {
            t2.sendMessageToCallMachine({
              action: "get-single-participant-receive-settings",
              id: e2,
              showInheritedValues: i3
            }, function(e3) {
              n2(e3.receiveSettings);
            });
          });
        case "undefined":
          return this._receiveSettings;
        default:
          throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
      }
    }), function(e2) {
      return q2.apply(this, arguments);
    })
  }, {
    key: "updateReceiveSettings",
    value: ($2 = h(function* (e2) {
      var t2 = this;
      if (Fs(this._callObjectMode, "updateReceiveSettings()"), !$s(e2, {
        allowAllParticipantsKey: true
      })) throw new Error(Hs({
        allowAllParticipantsKey: true
      }));
      return Ls(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(n2) {
        t2.sendMessageToCallMachine({
          action: "update-receive-settings",
          receiveSettings: e2
        }, function(e3) {
          n2({
            receiveSettings: e3.receiveSettings
          });
        });
      });
    }), function(e2) {
      return $2.apply(this, arguments);
    })
  }, {
    key: "_prepInputSettingsToPresentToUser",
    value: function(e2) {
      var t2, n2, r3, i3, o2, a2, s3, c2;
      if (e2) {
        var l3 = {}, u3 = "none" === (null === (t2 = e2.audio) || void 0 === t2 || null === (n2 = t2.processor) || void 0 === n2 ? void 0 : n2.type) && (null === (r3 = e2.audio) || void 0 === r3 || null === (i3 = r3.processor) || void 0 === i3 ? void 0 : i3._isDefaultWhenNone);
        if (e2.audio && !u3) {
          var d2 = fs({}, e2.audio.processor);
          delete d2._isDefaultWhenNone, l3.audio = fs(fs({}, e2.audio), {}, {
            processor: d2
          });
        }
        var p3 = "none" === (null === (o2 = e2.video) || void 0 === o2 || null === (a2 = o2.processor) || void 0 === a2 ? void 0 : a2.type) && (null === (s3 = e2.video) || void 0 === s3 || null === (c2 = s3.processor) || void 0 === c2 ? void 0 : c2._isDefaultWhenNone);
        if (e2.video && !p3) {
          var h2 = fs({}, e2.video.processor);
          delete h2._isDefaultWhenNone, l3.video = fs(fs({}, e2.video), {}, {
            processor: h2
          });
        }
        return l3;
      }
    }
  }, {
    key: "getInputSettings",
    value: function() {
      var e2 = this;
      return Us(), new Promise(function(t2) {
        t2(e2._getInputSettings());
      });
    }
  }, {
    key: "_getInputSettings",
    value: function() {
      var e2, t2, n2, r3, i3, o2, a2, s3, c2 = {
        processor: {
          type: "none",
          _isDefaultWhenNone: true
        }
      };
      this._inputSettings ? (e2 = (null === (n2 = this._inputSettings) || void 0 === n2 ? void 0 : n2.video) || c2, t2 = (null === (r3 = this._inputSettings) || void 0 === r3 ? void 0 : r3.audio) || c2) : (e2 = (null === (i3 = this._preloadCache) || void 0 === i3 || null === (o2 = i3.inputSettings) || void 0 === o2 ? void 0 : o2.video) || c2, t2 = (null === (a2 = this._preloadCache) || void 0 === a2 || null === (s3 = a2.inputSettings) || void 0 === s3 ? void 0 : s3.audio) || c2);
      var l3 = {
        audio: t2,
        video: e2
      };
      return this._prepInputSettingsToPresentToUser(l3);
    }
  }, {
    key: "updateInputSettings",
    value: (J2 = h(function* (e2) {
      var t2 = this;
      return Us(), qs(e2) ? (e2 && (this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), Ws(e2, this.properties.dailyConfig), e2.audio && (this._preloadCache.inputSettings.audio = e2.audio), e2.video && (this._preloadCache.inputSettings.video = e2.video)), e2.video || e2.audio ? this._callObjectMode && !this._callMachineInitialized ? this._getInputSettings() : new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine({
          action: "update-input-settings",
          inputSettings: e2
        }, function(e3) {
          e3.error ? r3(e3.error) : n2({
            inputSettings: t2._prepInputSettingsToPresentToUser(e3.inputSettings)
          });
        });
      }) : this._getInputSettings()) : (console.error(zs()), Promise.reject(zs()));
    }), function(e2) {
      return J2.apply(this, arguments);
    })
  }, {
    key: "setBandwidth",
    value: function(e2) {
      var t2 = e2.kbs, n2 = e2.trackConstraints;
      if (Us(), this._callMachineInitialized) return this.sendMessageToCallMachine({
        action: "set-bandwidth",
        kbs: t2,
        trackConstraints: n2
      }), this;
    }
  }, {
    key: "getDailyLang",
    value: function() {
      var e2 = this;
      if (Us(), this._callMachineInitialized) return new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "get-daily-lang"
        }, function(e3) {
          delete e3.action, delete e3.callbackStamp, t2(e3);
        });
      });
    }
  }, {
    key: "setDailyLang",
    value: function(e2) {
      return Us(), this.sendMessageToCallMachine({
        action: "set-daily-lang",
        lang: e2
      }), this;
    }
  }, {
    key: "setProxyUrl",
    value: function(e2) {
      return this.sendMessageToCallMachine({
        action: "set-proxy-url",
        proxyUrl: e2
      }), this;
    }
  }, {
    key: "setIceConfig",
    value: function(e2) {
      return this.sendMessageToCallMachine({
        action: "set-ice-config",
        iceConfig: e2
      }), this;
    }
  }, {
    key: "meetingSessionSummary",
    value: function() {
      return [ii, oi].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
    }
  }, {
    key: "getMeetingSession",
    value: (V2 = h(function* () {
      var e2 = this;
      return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), Ls(this._callState, "getMeetingSession()"), new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "get-meeting-session"
        }, function(e3) {
          delete e3.action, delete e3.callbackStamp, t2(e3);
        });
      });
    }), function() {
      return V2.apply(this, arguments);
    })
  }, {
    key: "meetingSessionState",
    value: function() {
      return Ls(this._callState, "meetingSessionState"), this._meetingSessionState;
    }
  }, {
    key: "setMeetingSessionData",
    value: function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "replace";
      Fs(this._callObjectMode, "setMeetingSessionData()"), Ls(this._callState, "setMeetingSessionData");
      try {
        !function(e3, t3) {
          new Aa({
            data: e3,
            mergeStrategy: t3
          });
        }(e2, t2);
      } catch (e3) {
        throw console.error(e3), e3;
      }
      try {
        this.sendMessageToCallMachine({
          action: "set-session-data",
          data: e2,
          mergeStrategy: t2
        });
      } catch (e3) {
        throw new Error("Error setting meeting session data: ".concat(e3));
      }
    }
  }, {
    key: "setUserName",
    value: function(e2, t2) {
      var n2 = this;
      return this.properties.userName = e2, new Promise(function(r3) {
        n2.sendMessageToCallMachine({
          action: "set-user-name",
          name: null != e2 ? e2 : "",
          thisMeetingOnly: na() || !!t2 && !!t2.thisMeetingOnly
        }, function(e3) {
          delete e3.action, delete e3.callbackStamp, r3(e3);
        });
      });
    }
  }, {
    key: "setUserData",
    value: (U2 = h(function* (e2) {
      var t2 = this;
      try {
        Js(e2);
      } catch (e3) {
        throw console.error(e3), e3;
      }
      if (this.properties.userData = e2, this._callMachineInitialized) return new Promise(function(n2) {
        try {
          t2.sendMessageToCallMachine({
            action: "set-user-data",
            userData: e2
          }, function(e3) {
            delete e3.action, delete e3.callbackStamp, n2(e3);
          });
        } catch (e3) {
          throw new Error("Error setting user data: ".concat(e3));
        }
      });
    }), function(e2) {
      return U2.apply(this, arguments);
    })
  }, {
    key: "validateAudioLevelInterval",
    value: function(e2) {
      if (e2 && (e2 < 100 || "number" != typeof e2)) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
    }
  }, {
    key: "startLocalAudioLevelObserver",
    value: function(e2) {
      var t2 = this;
      if ("undefined" == typeof AudioWorkletNode && !na()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
      if (this.validateAudioLevelInterval(e2), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = true, new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine({
          action: "start-local-audio-level-observer",
          interval: e2
        }, function(e3) {
          t2._isLocalAudioLevelObserverRunning = !e3.error, e3.error ? r3({
            error: e3.error
          }) : n2();
        });
      });
      this._preloadCache.localAudioLevelObserver = {
        enabled: true,
        interval: e2
      };
    }
  }, {
    key: "isLocalAudioLevelObserverRunning",
    value: function() {
      return this._isLocalAudioLevelObserverRunning;
    }
  }, {
    key: "stopLocalAudioLevelObserver",
    value: function() {
      this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = false, this.sendMessageToCallMachine({
        action: "stop-local-audio-level-observer"
      });
    }
  }, {
    key: "startRemoteParticipantsAudioLevelObserver",
    value: function(e2) {
      var t2 = this;
      if (this.validateAudioLevelInterval(e2), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = true, new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine({
          action: "start-remote-participants-audio-level-observer",
          interval: e2
        }, function(e3) {
          t2._isRemoteParticipantsAudioLevelObserverRunning = !e3.error, e3.error ? r3({
            error: e3.error
          }) : n2();
        });
      });
      this._preloadCache.remoteParticipantsAudioLevelObserver = {
        enabled: true,
        interval: e2
      };
    }
  }, {
    key: "isRemoteParticipantsAudioLevelObserverRunning",
    value: function() {
      return this._isRemoteParticipantsAudioLevelObserverRunning;
    }
  }, {
    key: "stopRemoteParticipantsAudioLevelObserver",
    value: function() {
      this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = false, this.sendMessageToCallMachine({
        action: "stop-remote-participants-audio-level-observer"
      });
    }
  }, {
    key: "startCamera",
    value: (B2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (Fs(this._callObjectMode, "startCamera()"), Ds(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
        yield this.load(t2);
      } catch (e3) {
        return Promise.reject(e3);
      }
      else {
        if (this._didPreAuth) {
          if (t2.url && t2.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
          if (t2.token && t2.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
        }
        this.validateProperties(t2), this.properties = fs(fs({}, this.properties), t2);
      }
      return new Promise(function(t3) {
        e2.sendMessageToCallMachine({
          action: "start-camera",
          properties: xs(e2.properties, e2.callClientId),
          preloadCache: xs(e2._preloadCache, e2.callClientId)
        }, function(e3) {
          delete e3.action, delete e3.callbackStamp, t3(e3);
        });
      });
    }), function() {
      return B2.apply(this, arguments);
    })
  }, {
    key: "validateCustomTrack",
    value: function(e2, t2, n2) {
      if (n2 && n2.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
      if (t2 && "music" !== t2 && "speech" !== t2 && !(t2 instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
      if (!!n2 && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(n2)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
      if (!(e2 instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
    }
  }, {
    key: "startCustomTrack",
    value: function() {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        track,
        mode,
        trackName
      };
      return Us(), Ls(this._callState, "startCustomTrack()"), this.validateCustomTrack(t2.track, t2.mode, t2.trackName), new Promise(function(n2, r3) {
        e2._sharedTracks.customTrack = t2.track, t2.track = Ho, e2.sendMessageToCallMachine({
          action: "start-custom-track",
          properties: t2
        }, function(e3) {
          e3.error ? r3({
            error: e3.error
          }) : n2(e3.mediaTag);
        });
      });
    }
  }, {
    key: "stopCustomTrack",
    value: function(e2) {
      var t2 = this;
      return Us(), Ls(this._callState, "stopCustomTrack()"), new Promise(function(n2) {
        t2.sendMessageToCallMachine({
          action: "stop-custom-track",
          mediaTag: e2
        }, function(e3) {
          n2(e3.mediaTag);
        });
      });
    }
  }, {
    key: "setCamera",
    value: function(e2) {
      var t2 = this;
      return Vs(), Ns(this._callMachineInitialized, "setCamera()"), new Promise(function(n2) {
        t2.sendMessageToCallMachine({
          action: "set-camera",
          cameraDeviceId: e2
        }, function(e3) {
          n2({
            device: e3.device
          });
        });
      });
    }
  }, {
    key: "setAudioDevice",
    value: (F2 = h(function* (e2) {
      return Vs(), this.nativeUtils().setAudioDevice(e2), {
        deviceId: yield this.nativeUtils().getAudioDevice()
      };
    }), function(e2) {
      return F2.apply(this, arguments);
    })
  }, {
    key: "cycleCamera",
    value: function() {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new Promise(function(n2) {
        e2.sendMessageToCallMachine({
          action: "cycle-camera",
          properties: t2
        }, function(e3) {
          n2({
            device: e3.device
          });
        });
      });
    }
  }, {
    key: "cycleMic",
    value: function() {
      var e2 = this;
      return Us(), new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "cycle-mic"
        }, function(e3) {
          t2({
            device: e3.device
          });
        });
      });
    }
  }, {
    key: "getCameraFacingMode",
    value: function() {
      var e2 = this;
      return Vs(), new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "get-camera-facing-mode"
        }, function(e3) {
          t2(e3.facingMode);
        });
      });
    }
  }, {
    key: "setInputDevicesAsync",
    value: (R2 = h(function* (e2) {
      var t2 = this, n2 = e2.audioDeviceId, r3 = e2.videoDeviceId, i3 = e2.audioSource, o2 = e2.videoSource;
      return Us(), void 0 !== i3 && (n2 = i3), void 0 !== o2 && (r3 = o2), n2 && (this._preloadCache.audioDeviceId = n2, this._sharedTracks.audioDeviceId = n2), r3 && (this._preloadCache.videoDeviceId = r3, this._sharedTracks.videoDeviceId = r3), this._callObjectMode && this.needsLoad() ? {
        camera: {
          deviceId: this._preloadCache.videoDeviceId
        },
        mic: {
          deviceId: this._preloadCache.audioDeviceId
        },
        speaker: {
          deviceId: this._preloadCache.outputDeviceId
        }
      } : (n2 instanceof MediaStreamTrack && (n2 = Ho), r3 instanceof MediaStreamTrack && (r3 = Ho), new Promise(function(e3) {
        t2.sendMessageToCallMachine({
          action: "set-input-devices",
          audioDeviceId: n2,
          videoDeviceId: r3
        }, function(n3) {
          delete n3.action, delete n3.callbackStamp, n3.returnPreloadCache ? e3({
            camera: {
              deviceId: t2._preloadCache.videoDeviceId
            },
            mic: {
              deviceId: t2._preloadCache.audioDeviceId
            },
            speaker: {
              deviceId: t2._preloadCache.outputDeviceId
            }
          }) : e3(n3);
        });
      }));
    }), function(e2) {
      return R2.apply(this, arguments);
    })
  }, {
    key: "setOutputDeviceAsync",
    value: (N2 = h(function* (e2) {
      var t2 = this, n2 = e2.outputDeviceId;
      return Us(), n2 && (this._preloadCache.outputDeviceId = n2), this._callObjectMode && this.needsLoad() ? {
        camera: {
          deviceId: this._preloadCache.videoDeviceId
        },
        mic: {
          deviceId: this._preloadCache.audioDeviceId
        },
        speaker: {
          deviceId: this._preloadCache.outputDeviceId
        }
      } : new Promise(function(e3) {
        t2.sendMessageToCallMachine({
          action: "set-output-device",
          outputDeviceId: n2
        }, function(n3) {
          delete n3.action, delete n3.callbackStamp, n3.returnPreloadCache ? e3({
            camera: {
              deviceId: t2._preloadCache.videoDeviceId
            },
            mic: {
              deviceId: t2._preloadCache.audioDeviceId
            },
            speaker: {
              deviceId: t2._preloadCache.outputDeviceId
            }
          }) : e3(n3);
        });
      });
    }), function(e2) {
      return N2.apply(this, arguments);
    })
  }, {
    key: "getInputDevices",
    value: (I2 = h(function* () {
      var e2 = this;
      return this._callObjectMode && this.needsLoad() ? {
        camera: {
          deviceId: this._preloadCache.videoDeviceId
        },
        mic: {
          deviceId: this._preloadCache.audioDeviceId
        },
        speaker: {
          deviceId: this._preloadCache.outputDeviceId
        }
      } : new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "get-input-devices"
        }, function(n2) {
          delete n2.action, delete n2.callbackStamp, n2.returnPreloadCache ? t2({
            camera: {
              deviceId: e2._preloadCache.videoDeviceId
            },
            mic: {
              deviceId: e2._preloadCache.audioDeviceId
            },
            speaker: {
              deviceId: e2._preloadCache.outputDeviceId
            }
          }) : t2(n2);
        });
      });
    }), function() {
      return I2.apply(this, arguments);
    })
  }, {
    key: "nativeInCallAudioMode",
    value: function() {
      return Vs(), this._nativeInCallAudioMode;
    }
  }, {
    key: "setNativeInCallAudioMode",
    value: function(e2) {
      if (Vs(), [_s, bs].includes(e2)) {
        if (e2 !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = e2, !this.disableReactNativeAutoDeviceManagement("audio") && Is(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
      } else console.error("invalid in-call audio mode specified: ", e2);
    }
  }, {
    key: "preAuth",
    value: (L2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (Fs(this._callObjectMode, "preAuth()"), Ds(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(t2)), !t2.url) throw new Error("preAuth() requires at least a url to be provided");
      return this.validateProperties(t2), this.properties = fs(fs({}, this.properties), t2), new Promise(function(t3, n2) {
        e2.sendMessageToCallMachine({
          action: "daily-method-preauth",
          properties: xs(e2.properties, e2.callClientId),
          preloadCache: xs(e2._preloadCache, e2.callClientId)
        }, function(r3) {
          return r3.error ? n2(r3.error) : r3.access ? (e2._didPreAuth = true, void t3({
            access: r3.access
          })) : n2(new Error("unknown error in preAuth()"));
        });
      });
    }), function() {
      return L2.apply(this, arguments);
    })
  }, {
    key: "load",
    value: (x2 = h(function* (e2) {
      var t2 = this;
      if (this.needsLoad()) {
        if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
        if (e2 && (this.validateProperties(e2), this.properties = fs(fs({}, this.properties), e2)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
        return this._updateCallState(ei), this.emitDailyJSEvent({
          action: Bi
        }), this._callObjectMode ? new Promise(function(e3, n2) {
          t2._callObjectLoader.cancel();
          var r3 = Date.now();
          t2._callObjectLoader.load(t2.properties.dailyConfig, function(n3) {
            t2._bundleLoadTime = n3 ? "no-op" : Date.now() - r3, t2._updateCallState(ti), n3 && t2.emitDailyJSEvent({
              action: Vi
            }), e3();
          }, function(e4, r4) {
            if (t2.emitDailyJSEvent({
              action: Ui
            }), !r4) {
              t2._updateCallState(oi), t2.resetMeetingDependentVars();
              var i3 = {
                action: Uo,
                errorMsg: e4.msg,
                error: {
                  type: "connection-error",
                  msg: "Failed to load call object bundle.",
                  details: {
                    on: "load",
                    sourceError: e4,
                    bundleUrl: X(t2.properties.dailyConfig)
                  }
                }
              };
              t2._maybeSendToSentry(i3), t2.emitDailyJSEvent(i3), n2(e4.msg);
            }
          });
        }) : (this._iframe.src = Y(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise(function(e3, n2) {
          t2._loadedCallback = function(r3) {
            t2._callState !== oi ? (t2._updateCallState(ti), (t2.properties.cssFile || t2.properties.cssText) && t2.loadCss(t2.properties), e3()) : n2(r3);
          };
        }));
      }
    }), function(e2) {
      return x2.apply(this, arguments);
    })
  }, {
    key: "join",
    value: (j2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this._testCallInProgress && this.stopTestCallQuality();
      var n2 = false;
      if (this.needsLoad()) {
        this.updateIsPreparingToJoin(true);
        try {
          yield this.load(t2);
        } catch (e3) {
          return this.updateIsPreparingToJoin(false), Promise.reject(e3);
        }
      } else {
        if (n2 = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
          if (t2.url && t2.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(false), Promise.reject();
          if (t2.token && t2.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(false), Promise.reject();
        }
        if (t2.url && !this._callObjectMode && t2.url && t2.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(t2.url, ")")), this.updateIsPreparingToJoin(false), Promise.reject();
        this.validateProperties(t2), this.properties = fs(fs({}, this.properties), t2);
      }
      return void 0 !== t2.showLocalVideo && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!t2.showLocalVideo), void 0 !== t2.showParticipantsBar && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!t2.showParticipantsBar), this._callState === ri || this._callState === ni ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(false)) : (this._updateCallState(ni, false), this.emitDailyJSEvent({
        action: qi
      }), this._preloadCache.inputSettings || (this._preloadCache.inputSettings = {}), t2.inputSettings && t2.inputSettings.audio && (this._preloadCache.inputSettings.audio = t2.inputSettings.audio), t2.inputSettings && t2.inputSettings.video && (this._preloadCache.inputSettings.video = t2.inputSettings.video), this.sendMessageToCallMachine({
        action: "join-meeting",
        properties: xs(this.properties, this.callClientId),
        preloadCache: xs(this._preloadCache, this.callClientId)
      }), new Promise(function(t3, r3) {
        e2._joinedCallback = function(i3, o2) {
          if (e2._callState !== oi) {
            if (e2._updateCallState(ri), i3) for (var a2 in i3) {
              if (e2._callObjectMode) {
                var s3 = e2._callMachine().store;
                Ga(i3[a2], s3), Qa(i3[a2], s3), Ya(i3[a2], e2._participants[a2], s3);
              }
              e2._participants[a2] = fs({}, i3[a2]), e2.toggleParticipantAudioBasedOnNativeAudioFocus();
            }
            n2 && e2.loadCss(e2.properties), t3(i3);
          } else r3(o2);
        };
      }));
    }), function() {
      return j2.apply(this, arguments);
    })
  }, {
    key: "leave",
    value: (A2 = h(function* () {
      var e2 = this;
      return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(t2) {
        e2._callState === ii || e2._callState === oi ? t2() : e2._callObjectLoader && !e2._callObjectLoader.loaded ? (e2._callObjectLoader.cancel(), e2._updateCallState(ii), e2.resetMeetingDependentVars(), e2.emitDailyJSEvent({
          action: ii
        }), t2()) : (e2._resolveLeave = t2, e2.sendMessageToCallMachine({
          action: "leave-meeting"
        }));
      });
    }), function() {
      return A2.apply(this, arguments);
    })
  }, {
    key: "startScreenShare",
    value: (O2 = h(function* () {
      var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (Ns(this._callMachineInitialized, "startScreenShare()"), t2.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", t2.screenVideoSendSettings), t2.mediaStream && (this._sharedTracks.screenMediaStream = t2.mediaStream, t2.mediaStream = Ho), "undefined" != typeof DailyNativeUtils && void 0 !== DailyNativeUtils.isIOS && DailyNativeUtils.isIOS) {
        var n2 = this.nativeUtils();
        if (yield n2.isScreenBeingCaptured()) return void this.emitDailyJSEvent({
          action: Bo,
          type: "screen-share-error",
          errorMsg: "Could not start the screen sharing. The screen is already been captured!"
        });
        n2.setSystemScreenCaptureStartCallback(function() {
          n2.setSystemScreenCaptureStartCallback(null), e2.sendMessageToCallMachine({
            action: qo,
            captureOptions: t2
          });
        }), n2.presentSystemScreenCapturePrompt();
      } else this.sendMessageToCallMachine({
        action: qo,
        captureOptions: t2
      });
    }), function() {
      return O2.apply(this, arguments);
    })
  }, {
    key: "stopScreenShare",
    value: function() {
      Ns(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({
        action: "local-screen-stop"
      });
    }
  }, {
    key: "startRecording",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.sendMessageToCallMachine(fs({
        action: "local-recording-start"
      }, e2));
    }
  }, {
    key: "updateRecording",
    value: function(e2) {
      var t2 = e2.layout, n2 = void 0 === t2 ? {
        preset: "default"
      } : t2, r3 = e2.instanceId;
      this.sendMessageToCallMachine({
        action: "daily-method-update-recording",
        layout: n2,
        instanceId: r3
      });
    }
  }, {
    key: "stopRecording",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.sendMessageToCallMachine(fs({
        action: "local-recording-stop"
      }, e2));
    }
  }, {
    key: "startLiveStreaming",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.sendMessageToCallMachine(fs({
        action: "daily-method-start-live-streaming"
      }, e2));
    }
  }, {
    key: "updateLiveStreaming",
    value: function(e2) {
      var t2 = e2.layout, n2 = void 0 === t2 ? {
        preset: "default"
      } : t2, r3 = e2.instanceId;
      this.sendMessageToCallMachine({
        action: "daily-method-update-live-streaming",
        layout: n2,
        instanceId: r3
      });
    }
  }, {
    key: "addLiveStreamingEndpoints",
    value: function(e2) {
      var t2 = e2.endpoints, n2 = e2.instanceId;
      this.sendMessageToCallMachine({
        action: Wo,
        endpointsOp: Xo,
        endpoints: t2,
        instanceId: n2
      });
    }
  }, {
    key: "removeLiveStreamingEndpoints",
    value: function(e2) {
      var t2 = e2.endpoints, n2 = e2.instanceId;
      this.sendMessageToCallMachine({
        action: Wo,
        endpointsOp: Zo,
        endpoints: t2,
        instanceId: n2
      });
    }
  }, {
    key: "stopLiveStreaming",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.sendMessageToCallMachine(fs({
        action: "daily-method-stop-live-streaming"
      }, e2));
    }
  }, {
    key: "validateDailyConfig",
    value: function(e2) {
      e2.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(e2.camSimulcastEncodings)), e2.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), ua() && e2.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
    }
  }, {
    key: "validateSimulcastEncodings",
    value: function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (e2) {
        if (!(e2 instanceof Array || Array.isArray(e2))) throw new Error("encodings must be an Array");
        if (!ec(e2.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
        for (var r3 = 0; r3 < e2.length; r3++) {
          var i3 = e2[r3];
          for (var o2 in this._validateEncodingLayerHasValidProperties(i3), i3) if (Ms.includes(o2)) {
            if ("number" != typeof i3[o2]) throw new Error("".concat(o2, " must be a number"));
            if (t2) {
              var a2 = t2[o2], s3 = a2.min, c2 = a2.max;
              if (!ec(i3[o2], s3, c2)) throw new Error("".concat(o2, " value not in range. valid range: ").concat(s3, " to ").concat(c2));
            }
          } else if (!["active", "scalabilityMode"].includes(o2)) throw new Error("Invalid key ".concat(o2, ", valid keys are:") + Object.values(Ms));
          if (n2 && !i3.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
        }
      }
    }
  }, {
    key: "startRemoteMediaPlayer",
    value: (P2 = h(function* (e2) {
      var t2 = this, n2 = e2.url, r3 = e2.settings, i3 = void 0 === r3 ? {
        state: Ko.PLAY
      } : r3;
      try {
        !function(e3) {
          if ("string" != typeof e3) throw new Error('url parameter must be "string" type');
        }(n2), Zs(i3), function(e3) {
          for (var t3 in e3) if (!Cs.includes(t3)) throw new Error("Invalid key ".concat(t3, ", valid keys are: ").concat(Cs));
          e3.simulcastEncodings && this.validateSimulcastEncodings(e3.simulcastEncodings, ks, true);
        }(i3);
      } catch (e3) {
        throw console.error("invalid argument Error: ".concat(e3)), console.error('startRemoteMediaPlayer arguments must be of the form:\n  { url: "playback url",\n  settings?:\n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'), e3;
      }
      return new Promise(function(e3, r4) {
        t2.sendMessageToCallMachine({
          action: "daily-method-start-remote-media-player",
          url: n2,
          settings: i3
        }, function(t3) {
          t3.error ? r4({
            error: t3.error,
            errorMsg: t3.errorMsg
          }) : e3({
            session_id: t3.session_id,
            remoteMediaPlayerState: {
              state: t3.state,
              settings: t3.settings
            }
          });
        });
      });
    }), function(e2) {
      return P2.apply(this, arguments);
    })
  }, {
    key: "stopRemoteMediaPlayer",
    value: (T2 = h(function* (e2) {
      var t2 = this;
      if ("string" != typeof e2) throw new Error(" remotePlayerID must be of type string");
      return new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine({
          action: "daily-method-stop-remote-media-player",
          session_id: e2
        }, function(e3) {
          e3.error ? r3({
            error: e3.error,
            errorMsg: e3.errorMsg
          }) : n2();
        });
      });
    }), function(e2) {
      return T2.apply(this, arguments);
    })
  }, {
    key: "updateRemoteMediaPlayer",
    value: (E2 = h(function* (e2) {
      var t2 = this, n2 = e2.session_id, r3 = e2.settings;
      try {
        Zs(r3);
      } catch (e3) {
        throw console.error("invalid argument Error: ".concat(e3)), console.error('updateRemoteMediaPlayer arguments must be of the form:\n  session_id: "participant session",\n  { settings?: {state: "play"|"pause"} }'), e3;
      }
      return new Promise(function(e3, i3) {
        t2.sendMessageToCallMachine({
          action: "daily-method-update-remote-media-player",
          session_id: n2,
          settings: r3
        }, function(t3) {
          t3.error ? i3({
            error: t3.error,
            errorMsg: t3.errorMsg
          }) : e3({
            session_id: t3.session_id,
            remoteMediaPlayerState: {
              state: t3.state,
              settings: t3.settings
            }
          });
        });
      });
    }), function(e2) {
      return E2.apply(this, arguments);
    })
  }, {
    key: "startTranscription",
    value: function(e2) {
      Ls(this._callState, "startTranscription()"), this.sendMessageToCallMachine(fs({
        action: "daily-method-start-transcription"
      }, e2));
    }
  }, {
    key: "updateTranscription",
    value: function(e2) {
      if (Ls(this._callState, "updateTranscription()"), !e2) throw new Error("updateTranscription Error: options is mandatory");
      if ("object" !== n(e2)) throw new Error("updateTranscription Error: options must be object type");
      if (e2.participants && !Array.isArray(e2.participants)) throw new Error("updateTranscription Error: participants must be an array");
      this.sendMessageToCallMachine(fs({
        action: "daily-method-update-transcription"
      }, e2));
    }
  }, {
    key: "stopTranscription",
    value: function(e2) {
      if (Ls(this._callState, "stopTranscription()"), e2 && "object" !== n(e2)) throw new Error("stopTranscription Error: options must be object type");
      if (e2 && !e2.instanceId) throw new Error('"instanceId" not provided');
      this.sendMessageToCallMachine(fs({
        action: "daily-method-stop-transcription"
      }, e2));
    }
  }, {
    key: "startDialOut",
    value: (C2 = h(function* (e2) {
      var t2 = this;
      Ls(this._callState, "startDialOut()");
      var n2 = function(e3) {
        if (e3) {
          if (!Array.isArray(e3)) throw new Error("Error starting dial out: audio codec must be an array");
          if (e3.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
          e3.forEach(function(e4) {
            if ("string" != typeof e4) throw new Error("Error starting dial out: audio codec must be a string");
            if ("OPUS" !== e4 && "PCMU" !== e4 && "PCMA" !== e4 && "G722" !== e4) throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
          });
        }
      };
      if (!e2.sipUri && !e2.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
      if (e2.sipUri && e2.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
      if (e2.sipUri) {
        if ("string" != typeof e2.sipUri) throw new Error("Error starting dial out: sipUri must be a string");
        if (!e2.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
        if (e2.video && "boolean" != typeof e2.video) throw new Error("Error starting dial out: video must be a boolean value");
        !function(e3) {
          if (e3 && (n2(e3.audio), e3.video)) {
            if (!Array.isArray(e3.video)) throw new Error("Error starting dial out: video codec must be an array");
            if (e3.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
            e3.video.forEach(function(e4) {
              if ("string" != typeof e4) throw new Error("Error starting dial out: video codec must be a string");
              if ("H264" !== e4 && "VP8" !== e4) throw new Error("Error starting dial out: video codec must be H264 or VP8");
            });
          }
        }(e2.codecs);
      }
      if (e2.phoneNumber) {
        if ("string" != typeof e2.phoneNumber) throw new Error("Error starting dial out: phoneNumber must be a string");
        if (!/^\+\d{1,}$/.test(e2.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
        e2.codecs && n2(e2.codecs.audio);
      }
      if (e2.callerId) {
        if ("string" != typeof e2.callerId) throw new Error("Error starting dial out: callerId must be a string");
        if (e2.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
      }
      if (e2.displayName) {
        if ("string" != typeof e2.displayName) throw new Error("Error starting dial out: displayName must be a string");
        if (e2.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
      }
      if (e2.userId) {
        if ("string" != typeof e2.userId) throw new Error("Error starting dial out: userId must be a string");
        if (e2.userId.length > 36) throw new Error("Error starting dial out: userId length must be less than or equal to 36");
      }
      return new Promise(function(n3, r3) {
        t2.sendMessageToCallMachine(fs({
          action: "dialout-start"
        }, e2), function(e3) {
          e3.error ? r3(e3.error) : n3(e3);
        });
      });
    }), function(e2) {
      return C2.apply(this, arguments);
    })
  }, {
    key: "stopDialOut",
    value: function(e2) {
      var t2 = this;
      return Ls(this._callState, "stopDialOut()"), new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine(fs({
          action: "dialout-stop"
        }, e2), function(e3) {
          e3.error ? r3(e3.error) : n2(e3);
        });
      });
    }
  }, {
    key: "sipCallTransfer",
    value: (M2 = h(function* (e2) {
      var t2 = this;
      if (Ls(this._callState, "sipCallTransfer()"), !e2) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
      return e2.useSipRefer = false, Xs(e2, "sipCallTransfer"), new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine(fs({
          action: ea
        }, e2), function(e3) {
          e3.error ? r3(e3.error) : n2(e3);
        });
      });
    }), function(e2) {
      return M2.apply(this, arguments);
    })
  }, {
    key: "sipRefer",
    value: (k2 = h(function* (e2) {
      var t2 = this;
      if (Ls(this._callState, "sipRefer()"), !e2) throw new Error("sessionId and toEndPoint are mandatory parameter");
      return e2.useSipRefer = true, Xs(e2, "sipRefer"), new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine(fs({
          action: ea
        }, e2), function(e3) {
          e3.error ? r3(e3.error) : n2(e3);
        });
      });
    }), function(e2) {
      return k2.apply(this, arguments);
    })
  }, {
    key: "sendDTMF",
    value: (S2 = h(function* (e2) {
      var t2 = this;
      return Ls(this._callState, "sendDTMF()"), function(e3) {
        var t3 = e3.sessionId, n2 = e3.tones;
        if (!t3 || !n2) throw new Error("sessionId and tones are mandatory parameter");
        if ("string" != typeof t3 || "string" != typeof n2) throw new Error("sessionId and tones should be of string type");
        if (n2.length > 20) throw new Error("tones string must be upto 20 characters");
        var r3 = /[^0-9A-D*#]/g, i3 = n2.match(r3);
        if (i3 && i3[0]) throw new Error("".concat(i3[0], " is not valid DTMF tone"));
      }(e2), new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine(fs({
          action: "send-dtmf"
        }, e2), function(e3) {
          e3.error ? r3(e3.error) : n2(e3);
        });
      });
    }), function(e2) {
      return S2.apply(this, arguments);
    })
  }, {
    key: "getNetworkStats",
    value: function() {
      var e2 = this;
      if (this._callState !== ri) {
        return {
          stats: {
            latest: {}
          }
        };
      }
      return new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "get-calc-stats"
        }, function(n2) {
          t2(fs({
            stats: n2.stats
          }, e2._network));
        });
      });
    }
  }, {
    key: "testWebsocketConnectivity",
    value: (w2 = h(function* () {
      var e2 = this;
      if (Rs(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
        yield this.load();
      } catch (e3) {
        return Promise.reject(e3);
      }
      return new Promise(function(t2, n2) {
        e2.sendMessageToCallMachine({
          action: "test-websocket-connectivity"
        }, function(e3) {
          e3.error ? n2(e3.error) : t2(e3.results);
        });
      });
    }), function() {
      return w2.apply(this, arguments);
    })
  }, {
    key: "abortTestWebsocketConnectivity",
    value: function() {
      this.sendMessageToCallMachine({
        action: "abort-test-websocket-connectivity"
      });
    }
  }, {
    key: "_validateVideoTrackForNetworkTests",
    value: function(e2) {
      return e2 ? e2 instanceof MediaStreamTrack ? !!us(e2, {
        isLocalScreenVideo: false
      }) || (console.error("Video track is not playable. This test needs a live video track."), false) : (console.error("Video track needs to be of type `MediaStreamTrack`."), false) : (console.error("Missing video track. You must provide a video track in order to run this test."), false);
    }
  }, {
    key: "testCallQuality",
    value: (b2 = h(function* () {
      var t2 = this;
      Us(), Fs(this._callObjectMode, "testCallQuality()"), Ns(this._callMachineInitialized, "testCallQuality()", null, true), Ds(this._callState, this._isPreparingToJoin, "testCallQuality()");
      var n2 = this._testCallAlreadyInProgress, r3 = function(e2) {
        n2 || (t2._testCallInProgress = e2);
      };
      if (r3(true), this.needsLoad()) try {
        var i3 = this._callState;
        yield this.load(), this._callState = i3;
      } catch (e2) {
        return r3(false), Promise.reject(e2);
      }
      return new Promise(function(n3) {
        t2.sendMessageToCallMachine({
          action: "test-call-quality",
          dailyJsVersion: t2.properties.dailyJsVersion
        }, function(i4) {
          var o2 = i4.results, a2 = o2.result, s3 = e(o2, ds);
          if ("failed" === a2) {
            var c2, l3 = fs({}, s3);
            null !== (c2 = s3.error) && void 0 !== c2 && c2.details ? (s3.error.details = JSON.parse(s3.error.details), l3.error = fs(fs({}, l3.error), {}, {
              details: fs({}, l3.error.details)
            }), l3.error.details.duringTest = "testCallQuality") : (l3.error = l3.error ? fs({}, l3.error) : {}, l3.error.details = {
              duringTest: "testCallQuality"
            }), t2._maybeSendToSentry(l3);
          }
          r3(false), n3(fs({
            result: a2
          }, s3));
        });
      });
    }), function() {
      return b2.apply(this, arguments);
    })
  }, {
    key: "stopTestCallQuality",
    value: function() {
      this.sendMessageToCallMachine({
        action: "stop-test-call-quality"
      });
    }
  }, {
    key: "testConnectionQuality",
    value: (_2 = h(function* (e2) {
      var t2;
      na() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), t2 = yield this.testPeerToPeerCallQuality(e2)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), t2 = yield this.testCallQuality());
      var n2 = {
        result: t2.result,
        secondsElapsed: t2.secondsElapsed
      };
      return t2.data && (n2.data = {
        maxRTT: t2.data.maxRoundTripTime,
        packetLoss: t2.data.avgRecvPacketLoss
      }), n2;
    }), function(e2) {
      return _2.apply(this, arguments);
    })
  }, {
    key: "testPeerToPeerCallQuality",
    value: (y2 = h(function* (e2) {
      var t2 = this;
      if (Rs(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
        yield this.load();
      } catch (e3) {
        return Promise.reject(e3);
      }
      var n2 = e2.videoTrack, r3 = e2.duration;
      if (!this._validateVideoTrackForNetworkTests(n2)) throw new Error("Video track error");
      return this._sharedTracks.videoTrackForConnectionQualityTest = n2, new Promise(function(e3, n3) {
        t2.sendMessageToCallMachine({
          action: "test-p2p-call-quality",
          duration: r3
        }, function(t3) {
          t3.error ? n3(t3.error) : e3(t3.results);
        });
      });
    }), function(e2) {
      return y2.apply(this, arguments);
    })
  }, {
    key: "stopTestConnectionQuality",
    value: function() {
      na() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
    }
  }, {
    key: "stopTestPeerToPeerCallQuality",
    value: function() {
      this.sendMessageToCallMachine({
        action: "stop-test-p2p-call-quality"
      });
    }
  }, {
    key: "testNetworkConnectivity",
    value: (g2 = h(function* (e2) {
      var t2 = this;
      if (Rs(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
        yield this.load();
      } catch (e3) {
        return Promise.reject(e3);
      }
      if (!this._validateVideoTrackForNetworkTests(e2)) throw new Error("Video track error");
      return this._sharedTracks.videoTrackForNetworkConnectivityTest = e2, new Promise(function(e3, n2) {
        t2.sendMessageToCallMachine({
          action: "test-network-connectivity"
        }, function(t3) {
          t3.error ? n2(t3.error) : e3(t3.results);
        });
      });
    }), function(e2) {
      return g2.apply(this, arguments);
    })
  }, {
    key: "abortTestNetworkConnectivity",
    value: function() {
      this.sendMessageToCallMachine({
        action: "abort-test-network-connectivity"
      });
    }
  }, {
    key: "getCpuLoadStats",
    value: function() {
      var e2 = this;
      return new Promise(function(t2) {
        if (e2._callState === ri) {
          e2.sendMessageToCallMachine({
            action: "get-cpu-load-stats"
          }, function(e3) {
            t2(e3.cpuStats);
          });
        } else t2({
          cpuLoadState: void 0,
          cpuLoadStateReason: void 0,
          stats: {}
        });
      });
    }
  }, {
    key: "_validateEncodingLayerHasValidProperties",
    value: function(e2) {
      var t2;
      if (!((null === (t2 = Object.keys(e2)) || void 0 === t2 ? void 0 : t2.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(Ms));
    }
  }, {
    key: "_validateVideoSendSettings",
    value: function(e2, t2) {
      var r3 = "screenVideo" === e2 ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], i3 = "Video send settings should be either an object or one of the supported presets: ".concat(r3.join());
      if ("string" == typeof t2) {
        if (!r3.includes(t2)) throw new Error(i3);
      } else {
        if ("object" !== n(t2)) throw new Error(i3);
        if (!t2.maxQuality && !t2.encodings && void 0 === t2.allowAdaptiveLayers) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
        if (t2.maxQuality && -1 === ["low", "medium", "high"].indexOf(t2.maxQuality)) throw new Error("maxQuality must be either low, medium or high");
        if (t2.encodings) {
          var o2 = false;
          switch (Object.keys(t2.encodings).length) {
            case 1:
              o2 = !t2.encodings.low;
              break;
            case 2:
              o2 = !t2.encodings.low || !t2.encodings.medium;
              break;
            case 3:
              o2 = !t2.encodings.low || !t2.encodings.medium || !t2.encodings.high;
              break;
            default:
              o2 = true;
          }
          if (o2) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
          t2.encodings.low && this._validateEncodingLayerHasValidProperties(t2.encodings.low), t2.encodings.medium && this._validateEncodingLayerHasValidProperties(t2.encodings.medium), t2.encodings.high && this._validateEncodingLayerHasValidProperties(t2.encodings.high);
        }
      }
    }
  }, {
    key: "validateUpdateSendSettings",
    value: function(e2) {
      var t2 = this;
      if (!e2 || 0 === Object.keys(e2).length) throw new Error("Send settings must contain at least information for one track!");
      Object.entries(e2).forEach(function(e3) {
        var n2 = v(e3, 2), r3 = n2[0], i3 = n2[1];
        t2._validateVideoSendSettings(r3, i3);
      });
    }
  }, {
    key: "updateSendSettings",
    value: function(e2) {
      var t2 = this;
      return this.validateUpdateSendSettings(e2), this.needsLoad() ? (this._preloadCache.sendSettings = e2, {
        sendSettings: this._preloadCache.sendSettings
      }) : new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine({
          action: "update-send-settings",
          sendSettings: e2
        }, function(e3) {
          e3.error ? r3(e3.error) : n2(e3.sendSettings);
        });
      });
    }
  }, {
    key: "getSendSettings",
    value: function() {
      return this._sendSettings || this._preloadCache.sendSettings;
    }
  }, {
    key: "getLocalAudioLevel",
    value: function() {
      return this._localAudioLevel;
    }
  }, {
    key: "getRemoteParticipantsAudioLevel",
    value: function() {
      return this._remoteParticipantsAudioLevel;
    }
  }, {
    key: "getActiveSpeaker",
    value: function() {
      return Us(), this._activeSpeaker;
    }
  }, {
    key: "setActiveSpeakerMode",
    value: function(e2) {
      return Us(), this.sendMessageToCallMachine({
        action: "set-active-speaker-mode",
        enabled: e2
      }), this;
    }
  }, {
    key: "activeSpeakerMode",
    value: function() {
      return Us(), this._activeSpeakerMode;
    }
  }, {
    key: "subscribeToTracksAutomatically",
    value: function() {
      return this._preloadCache.subscribeToTracksAutomatically;
    }
  }, {
    key: "setSubscribeToTracksAutomatically",
    value: function(e2) {
      return Ls(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = e2, this.sendMessageToCallMachine({
        action: "daily-method-subscribe-to-tracks-automatically",
        enabled: e2
      }), this;
    }
  }, {
    key: "enumerateDevices",
    value: (f2 = h(function* () {
      var e2 = this;
      if (this._callObjectMode) {
        var t2 = yield navigator.mediaDevices.enumerateDevices();
        return "Firefox" === pa() && ha().major > 115 && ha().major < 123 && (t2 = t2.filter(function(e3) {
          return "audiooutput" !== e3.kind;
        })), {
          devices: t2.map(function(e3) {
            var t3 = JSON.parse(JSON.stringify(e3));
            if (!na() && "videoinput" === e3.kind && e3.getCapabilities) {
              var n2, r3 = e3.getCapabilities();
              t3.facing = (null == r3 || null === (n2 = r3.facingMode) || void 0 === n2 ? void 0 : n2.length) >= 1 ? r3.facingMode[0] : void 0;
            }
            return t3;
          })
        };
      }
      return new Promise(function(t3) {
        e2.sendMessageToCallMachine({
          action: "enumerate-devices"
        }, function(e3) {
          t3({
            devices: e3.devices
          });
        });
      });
    }), function() {
      return f2.apply(this, arguments);
    })
  }, {
    key: "sendAppMessage",
    value: function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
      if (Ls(this._callState, "sendAppMessage()"), JSON.stringify(e2).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
      return this.sendMessageToCallMachine({
        action: "app-msg",
        data: e2,
        to: t2
      }), this;
    }
  }, {
    key: "addFakeParticipant",
    value: function(e2) {
      return Us(), Ls(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(fs({
        action: "add-fake-participant"
      }, e2)), this;
    }
  }, {
    key: "setShowNamesMode",
    value: function(e2) {
      return Bs(this._callObjectMode, "setShowNamesMode()"), Us(), e2 && "always" !== e2 && "never" !== e2 ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({
        action: "set-show-names",
        mode: e2
      }), this);
    }
  }, {
    key: "setShowLocalVideo",
    value: function() {
      var e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return Bs(this._callObjectMode, "setShowLocalVideo()"), Us(), Ls(this._callState, "setShowLocalVideo()"), "boolean" != typeof e2 ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
        action: "set-show-local-video",
        show: e2
      }), this._showLocalVideo = e2, this);
    }
  }, {
    key: "showLocalVideo",
    value: function() {
      return Bs(this._callObjectMode, "showLocalVideo()"), Us(), this._showLocalVideo;
    }
  }, {
    key: "setShowParticipantsBar",
    value: function() {
      var e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return Bs(this._callObjectMode, "setShowParticipantsBar()"), Us(), Ls(this._callState, "setShowParticipantsBar()"), "boolean" != typeof e2 ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({
        action: "set-show-participants-bar",
        show: e2
      }), this._showParticipantsBar = e2, this);
    }
  }, {
    key: "showParticipantsBar",
    value: function() {
      return Bs(this._callObjectMode, "showParticipantsBar()"), Us(), this._showParticipantsBar;
    }
  }, {
    key: "customIntegrations",
    value: function() {
      return Us(), Bs(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
    }
  }, {
    key: "setCustomIntegrations",
    value: function(e2) {
      return Us(), Bs(this._callObjectMode, "setCustomIntegrations()"), Ls(this._callState, "setCustomIntegrations()"), Ks(e2) ? (this.sendMessageToCallMachine({
        action: "set-custom-integrations",
        integrations: e2
      }), this._customIntegrations = e2, this) : this;
    }
  }, {
    key: "startCustomIntegrations",
    value: function(e2) {
      var t2 = this;
      if (Us(), Bs(this._callObjectMode, "startCustomIntegrations()"), Ls(this._callState, "startCustomIntegrations()"), Array.isArray(e2) && e2.some(function(e3) {
        return "string" != typeof e3;
      }) || !Array.isArray(e2) && "string" != typeof e2) return console.error("startCustomIntegrations() only accepts string | string[]"), this;
      var n2 = "string" == typeof e2 ? [e2] : e2, r3 = n2.filter(function(e3) {
        return !(e3 in t2._customIntegrations);
      });
      return r3.length ? (console.error(`Can't find custom integration(s): "`.concat(r3.join(", "), '"')), this) : (this.sendMessageToCallMachine({
        action: "start-custom-integrations",
        ids: n2
      }), this);
    }
  }, {
    key: "stopCustomIntegrations",
    value: function(e2) {
      var t2 = this;
      if (Us(), Bs(this._callObjectMode, "stopCustomIntegrations()"), Ls(this._callState, "stopCustomIntegrations()"), Array.isArray(e2) && e2.some(function(e3) {
        return "string" != typeof e3;
      }) || !Array.isArray(e2) && "string" != typeof e2) return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
      var n2 = "string" == typeof e2 ? [e2] : e2, r3 = n2.filter(function(e3) {
        return !(e3 in t2._customIntegrations);
      });
      return r3.length ? (console.error(`Can't find custom integration(s): "`.concat(r3.join(", "), '"')), this) : (this.sendMessageToCallMachine({
        action: "stop-custom-integrations",
        ids: n2
      }), this);
    }
  }, {
    key: "customTrayButtons",
    value: function() {
      return Bs(this._callObjectMode, "customTrayButtons()"), Us(), this._customTrayButtons;
    }
  }, {
    key: "updateCustomTrayButtons",
    value: function(e2) {
      return Bs(this._callObjectMode, "updateCustomTrayButtons()"), Us(), Ls(this._callState, "updateCustomTrayButtons()"), Qs(e2) ? (this.sendMessageToCallMachine({
        action: "update-custom-tray-buttons",
        btns: e2
      }), this._customTrayButtons = e2, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Ts))), this);
    }
  }, {
    key: "theme",
    value: function() {
      return Bs(this._callObjectMode, "theme()"), this.properties.theme;
    }
  }, {
    key: "setTheme",
    value: function(e2) {
      var t2 = this;
      return Bs(this._callObjectMode, "setTheme()"), new Promise(function(n2, r3) {
        try {
          t2.validateProperties({
            theme: e2
          }), t2.properties.theme = fs({}, e2), t2.sendMessageToCallMachine({
            action: "set-theme",
            theme: t2.properties.theme
          });
          try {
            t2.emitDailyJSEvent({
              action: Fi,
              theme: t2.properties.theme
            });
          } catch (e3) {
            console.log("could not emit 'theme-updated'", e3);
          }
          n2(t2.properties.theme);
        } catch (e3) {
          r3(e3);
        }
      });
    }
  }, {
    key: "requestFullscreen",
    value: (p2 = h(function* () {
      if (Us(), this._iframe && !document.fullscreenElement && oa()) try {
        (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
      } catch (e2) {
        console.log("could not make video call fullscreen", e2);
      }
    }), function() {
      return p2.apply(this, arguments);
    })
  }, {
    key: "exitFullscreen",
    value: function() {
      Us(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
    }
  }, {
    key: "getSidebarView",
    value: (u2 = h(function* () {
      var e2 = this;
      return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(t2) {
        e2.sendMessageToCallMachine({
          action: "get-sidebar-view"
        }, function(e3) {
          t2(e3.view);
        });
      });
    }), function() {
      return u2.apply(this, arguments);
    })
  }, {
    key: "setSidebarView",
    value: function(e2) {
      return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({
        action: "set-sidebar-view",
        view: e2
      }), this);
    }
  }, {
    key: "room",
    value: (l2 = h(function* () {
      var e2 = this, t2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeRoomConfigDefaults, n2 = void 0 === t2 || t2;
      return this._accessState.access === pi || this.needsLoad() ? this.properties.url ? {
        roomUrlPendingJoin: this.properties.url
      } : null : new Promise(function(t3) {
        e2.sendMessageToCallMachine({
          action: "lib-room-info",
          includeRoomConfigDefaults: n2
        }, function(e3) {
          delete e3.action, delete e3.callbackStamp, t3(e3);
        });
      });
    }), function() {
      return l2.apply(this, arguments);
    })
  }, {
    key: "geo",
    value: (s2 = h(function* () {
      try {
        var e2 = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
        return {
          current: (yield e2.json()).geo
        };
      } catch (e3) {
        return console.error("geo lookup failed", e3), {
          current: ""
        };
      }
    }), function() {
      return s2.apply(this, arguments);
    })
  }, {
    key: "setNetworkTopology",
    value: (i2 = h(function* (e2) {
      var t2 = this;
      return Us(), Ls(this._callState, "setNetworkTopology()"), new Promise(function(n2, r3) {
        t2.sendMessageToCallMachine({
          action: "set-network-topology",
          opts: e2
        }, function(e3) {
          e3.error ? r3({
            error: e3.error
          }) : n2({
            workerId: e3.workerId
          });
        });
      });
    }), function(e2) {
      return i2.apply(this, arguments);
    })
  }, {
    key: "getNetworkTopology",
    value: (r2 = h(function* () {
      var e2 = this;
      return new Promise(function(t2, n2) {
        e2.needsLoad() && t2({
          topology: "none"
        }), e2.sendMessageToCallMachine({
          action: "get-network-topology"
        }, function(e3) {
          e3.error ? n2({
            error: e3.error
          }) : t2({
            topology: e3.topology
          });
        });
      });
    }), function() {
      return r2.apply(this, arguments);
    })
  }, {
    key: "setPlayNewParticipantSound",
    value: function(e2) {
      if (Us(), "number" != typeof e2 && true !== e2 && false !== e2) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(e2));
      this.sendMessageToCallMachine({
        action: "daily-method-set-play-ding",
        arg: e2
      });
    }
  }, {
    key: "on",
    value: function(e2, t2) {
      return m.prototype.on.call(this, e2, t2);
    }
  }, {
    key: "once",
    value: function(e2, t2) {
      return m.prototype.once.call(this, e2, t2);
    }
  }, {
    key: "off",
    value: function(e2, t2) {
      return m.prototype.off.call(this, e2, t2);
    }
  }, {
    key: "validateProperties",
    value: function(e2) {
      for (var t2 in e2) {
        if (!Os[t2]) throw new Error("unrecognized property '".concat(t2, "'"));
        if (Os[t2].validate && !Os[t2].validate(e2[t2], this)) throw new Error("property '".concat(t2, "': ").concat(Os[t2].help));
      }
    }
  }, {
    key: "assembleMeetingUrl",
    value: function() {
      var e2, t2, n2 = fs(fs({}, this.properties), {}, {
        emb: this.callClientId,
        embHref: encodeURIComponent(window.location.href),
        proxy: null !== (e2 = this.properties.dailyConfig) && void 0 !== e2 && e2.proxyUrl ? encodeURIComponent(null === (t2 = this.properties.dailyConfig) || void 0 === t2 ? void 0 : t2.proxyUrl) : void 0
      }), r3 = n2.url.match(/\?/) ? "&" : "?";
      return n2.url + r3 + Object.keys(Os).filter(function(e3) {
        return Os[e3].queryString && void 0 !== n2[e3];
      }).map(function(e3) {
        return "".concat(Os[e3].queryString, "=").concat(n2[e3]);
      }).join("&");
    }
  }, {
    key: "needsLoad",
    value: function() {
      return [Zr, ei, ii, oi].includes(this._callState);
    }
  }, {
    key: "sendMessageToCallMachine",
    value: function(e2, t2) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      this._messageChannel.sendMessageToCallMachine(e2, t2, this.callClientId, this._iframe);
    }
  }, {
    key: "forwardPackagedMessageToCallMachine",
    value: function(e2) {
      this._messageChannel.forwardPackagedMessageToCallMachine(e2, this._iframe, this.callClientId);
    }
  }, {
    key: "addListenerForPackagedMessagesFromCallMachine",
    value: function(e2) {
      return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(e2, this.callClientId);
    }
  }, {
    key: "removeListenerForPackagedMessagesFromCallMachine",
    value: function(e2) {
      this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(e2);
    }
  }, {
    key: "handleMessageFromCallMachine",
    value: function(t2) {
      switch (t2.action) {
        case Ni:
          this.sendMessageToCallMachine(fs({
            action: Ri
          }, this.properties));
          break;
        case "call-machine-initialized":
          this._callMachineInitialized = true;
          var n2 = {
            action: zo,
            level: "log",
            code: 1011,
            stats: {
              event: "bundle load",
              time: "no-op" === this._bundleLoadTime ? 0 : this._bundleLoadTime,
              preLoaded: "no-op" === this._bundleLoadTime,
              url: X(this.properties.dailyConfig)
            }
          };
          this.sendMessageToCallMachine(n2), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
          break;
        case Vi:
          this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(t2);
          break;
        case Wi:
          var r3, i3 = fs({}, t2);
          delete i3.internal, this._maxAppMessageSize = (null === (r3 = t2.internal) || void 0 === r3 ? void 0 : r3._maxAppMessageSize) || Vo, this._joinedCallback && (this._joinedCallback(t2.participants), this._joinedCallback = null), this.emitDailyJSEvent(i3);
          break;
        case Hi:
        case Gi:
          if (this._callState === ii) return;
          if (t2.participant && t2.participant.session_id) {
            var o2 = t2.participant.local ? "local" : t2.participant.session_id;
            if (this._callObjectMode) {
              var a2 = this._callMachine().store;
              Ga(t2.participant, a2), Qa(t2.participant, a2), Ya(t2.participant, this._participants[o2], a2);
            }
            try {
              this.maybeParticipantTracksStopped(this._participants[o2], t2.participant), this.maybeParticipantTracksStarted(this._participants[o2], t2.participant), this.maybeEventRecordingStopped(this._participants[o2], t2.participant), this.maybeEventRecordingStarted(this._participants[o2], t2.participant);
            } catch (e2) {
              console.error("track events error", e2);
            }
            this.compareEqualForParticipantUpdateEvent(t2.participant, this._participants[o2]) || (this._participants[o2] = fs({}, t2.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(t2));
          }
          break;
        case Qi:
          if (t2.participant && t2.participant.session_id) {
            var s3 = this._participants[t2.participant.session_id];
            s3 && this.maybeParticipantTracksStopped(s3, null), delete this._participants[t2.participant.session_id], this.emitDailyJSEvent(t2);
          }
          break;
        case Ki:
          D(this._participantCounts, t2.participantCounts) || (this._participantCounts = t2.participantCounts, this.emitDailyJSEvent(t2));
          break;
        case Yi:
          var c2 = {
            access: t2.access
          };
          t2.awaitingAccess && (c2.awaitingAccess = t2.awaitingAccess), D(this._accessState, c2) || (this._accessState = c2, this.emitDailyJSEvent(t2));
          break;
        case Xi:
          if (t2.meetingSession) {
            this._meetingSessionSummary = t2.meetingSession, this.emitDailyJSEvent(t2);
            var l3 = fs(fs({}, t2), {}, {
              action: "meeting-session-updated"
            });
            this.emitDailyJSEvent(l3);
          }
          break;
        case Uo:
          var u3;
          this._iframe && !t2.preserveIframe && (this._iframe.src = ""), this._updateCallState(oi), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(t2.errorMsg), this._loadedCallback = null), t2.preserveIframe;
          var d2 = e(t2, ps);
          null != d2 && null !== (u3 = d2.error) && void 0 !== u3 && u3.details && (d2.error.details = JSON.parse(d2.error.details)), this._maybeSendToSentry(t2), this._joinedCallback && (this._joinedCallback(null, d2), this._joinedCallback = null), this.emitDailyJSEvent(d2);
          break;
        case zi:
          this._callState !== oi && this._updateCallState(ii), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(t2);
          break;
        case "selected-devices-updated":
          t2.devices && this.emitDailyJSEvent(t2);
          break;
        case Eo:
          var p3 = t2.threshold, h2 = t2.quality;
          p3 === this._network.threshold && h2 === this._network.quality || (this._network.quality = h2, this._network.threshold = p3, this.emitDailyJSEvent(t2));
          break;
        case Po:
          t2 && t2.cpuLoadState && this.emitDailyJSEvent(t2);
          break;
        case Oo:
          t2 && void 0 !== t2.faceCounts && this.emitDailyJSEvent(t2);
          break;
        case Mo:
          var f3 = t2.activeSpeaker;
          this._activeSpeaker.peerId !== f3.peerId && (this._activeSpeaker.peerId = f3.peerId, this.emitDailyJSEvent({
            action: t2.action,
            activeSpeaker: this._activeSpeaker
          }));
          break;
        case "show-local-video-changed":
          if (this._callObjectMode) return;
          var v2 = t2.show;
          this._showLocalVideo = v2, this.emitDailyJSEvent({
            action: t2.action,
            show: v2
          });
          break;
        case Co:
          var g3 = t2.enabled;
          this._activeSpeakerMode !== g3 && (this._activeSpeakerMode = g3, this.emitDailyJSEvent({
            action: t2.action,
            enabled: this._activeSpeakerMode
          }));
          break;
        case to:
        case no:
        case ro:
          this._waitingParticipants = t2.allWaitingParticipants, this.emitDailyJSEvent({
            action: t2.action,
            participant: t2.participant
          });
          break;
        case Ro:
          D(this._receiveSettings, t2.receiveSettings) || (this._receiveSettings = t2.receiveSettings, this.emitDailyJSEvent({
            action: t2.action,
            receiveSettings: t2.receiveSettings
          }));
          break;
        case Fo:
          if (!D(this._inputSettings, t2.inputSettings)) {
            var m2 = this._getInputSettings();
            this._inputSettings = t2.inputSettings, this._preloadCache.inputSettings = {}, D(m2, this._getInputSettings()) || this.emitDailyJSEvent({
              action: t2.action,
              inputSettings: this._getInputSettings()
            });
          }
          break;
        case "send-settings-updated":
          D(this._sendSettings, t2.sendSettings) || (this._sendSettings = t2.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({
            action: t2.action,
            sendSettings: t2.sendSettings
          }));
          break;
        case "local-audio-level":
          this._localAudioLevel = t2.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(t2);
          break;
        case "remote-participants-audio-level":
          this._remoteParticipantsAudioLevel = t2.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(t2);
          break;
        case yo:
          var y3 = t2.session_id;
          this._rmpPlayerState[y3] = t2.playerState, this.emitDailyJSEvent(t2);
          break;
        case bo:
          delete this._rmpPlayerState[t2.session_id], this.emitDailyJSEvent(t2);
          break;
        case _o:
          var _3 = t2.session_id, b3 = this._rmpPlayerState[_3];
          b3 && this.compareEqualForRMPUpdateEvent(b3, t2.remoteMediaPlayerState) || (this._rmpPlayerState[_3] = t2.remoteMediaPlayerState, this.emitDailyJSEvent(t2));
          break;
        case "custom-button-click":
        case "sidebar-view-changed":
          this.emitDailyJSEvent(t2);
          break;
        case Zi:
          var w3 = this._meetingSessionState.topology !== (t2.meetingSessionState && t2.meetingSessionState.topology);
          this._meetingSessionState = tc(t2.meetingSessionState, this._callObjectMode), (this._callObjectMode || w3) && this.emitDailyJSEvent(t2);
          break;
        case wo:
          this._isScreenSharing = true, this.emitDailyJSEvent(t2);
          break;
        case So:
        case ko:
          this._isScreenSharing = false, this.emitDailyJSEvent(t2);
          break;
        case lo:
        case uo:
        case po:
        case ho:
        case fo:
        case ao:
        case so:
        case co:
        case Ji:
        case $i:
        case go:
        case mo:
        case "test-completed":
        case To:
        case vo:
        case xo:
        case Lo:
        case Io:
        case Do:
        case Bo:
        case No:
        case "dialin-ready":
        case "dialin-connected":
        case "dialin-error":
        case "dialin-stopped":
        case "dialin-warning":
        case "dialout-connected":
        case "dialout-answered":
        case "dialout-error":
        case "dialout-stopped":
        case "dialout-warning":
          this.emitDailyJSEvent(t2);
          break;
        case "request-fullscreen":
          this.requestFullscreen();
          break;
        case "request-exit-fullscreen":
          this.exitFullscreen();
      }
    }
  }, {
    key: "maybeEventRecordingStopped",
    value: function(e2, t2) {
      var n2 = "record";
      e2 && (t2.local || false !== t2[n2] || e2[n2] === t2[n2] || this.emitDailyJSEvent({
        action: uo
      }));
    }
  }, {
    key: "maybeEventRecordingStarted",
    value: function(e2, t2) {
      var n2 = "record";
      e2 && (t2.local || true !== t2[n2] || e2[n2] === t2[n2] || this.emitDailyJSEvent({
        action: lo
      }));
    }
  }, {
    key: "maybeEventTrackStopped",
    value: function(e2, t2, n2, r3) {
      e2 && ("ended" !== e2.readyState && t2 && e2.id === t2.id || this.emitDailyJSEvent({
        action: oo,
        track: e2,
        participant: n2,
        type: r3
      }));
    }
  }, {
    key: "maybeEventTrackStarted",
    value: function(e2, t2, n2, r3) {
      t2 && (e2 && "ended" !== e2.readyState && t2.id === e2.id || this.emitDailyJSEvent({
        action: io,
        track: t2,
        participant: n2,
        type: r3
      }));
    }
  }, {
    key: "maybeParticipantTracksStopped",
    value: function(e2, t2) {
      if (e2) for (var n2 in e2.tracks) this.maybeEventTrackStopped(e2.tracks[n2].track, t2 && t2.tracks[n2] ? t2.tracks[n2].track : null, t2, n2);
    }
  }, {
    key: "maybeParticipantTracksStarted",
    value: function(e2, t2) {
      if (t2) for (var n2 in t2.tracks) this.maybeEventTrackStarted(e2 && e2.tracks[n2] ? e2.tracks[n2].track : null, t2.tracks[n2].track, t2, n2);
    }
  }, {
    key: "compareEqualForRMPUpdateEvent",
    value: function(e2, t2) {
      var n2, r3;
      return e2.state === t2.state && (null === (n2 = e2.settings) || void 0 === n2 ? void 0 : n2.volume) === (null === (r3 = t2.settings) || void 0 === r3 ? void 0 : r3.volume);
    }
  }, {
    key: "emitDailyJSEvent",
    value: function(e2) {
      try {
        e2.callClientId = this.callClientId, this.emit(e2.action, e2);
      } catch (t2) {
        console.log("could not emit", e2, t2);
      }
    }
  }, {
    key: "compareEqualForParticipantUpdateEvent",
    value: function(e2, t2) {
      return !!D(e2, t2) && (!e2.videoTrack || !t2.videoTrack || e2.videoTrack.id === t2.videoTrack.id && e2.videoTrack.muted === t2.videoTrack.muted && e2.videoTrack.enabled === t2.videoTrack.enabled) && (!e2.audioTrack || !t2.audioTrack || e2.audioTrack.id === t2.audioTrack.id && e2.audioTrack.muted === t2.audioTrack.muted && e2.audioTrack.enabled === t2.audioTrack.enabled);
    }
  }, {
    key: "nativeUtils",
    value: function() {
      return na() ? "undefined" == typeof DailyNativeUtils ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
    }
  }, {
    key: "updateIsPreparingToJoin",
    value: function(e2) {
      this._updateCallState(this._callState, e2);
    }
  }, {
    key: "_updateCallState",
    value: function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
      if (e2 !== this._callState || t2 !== this._isPreparingToJoin) {
        var n2 = this._callState, r3 = this._isPreparingToJoin;
        this._callState = e2, this._isPreparingToJoin = t2;
        var i3 = this._callState === ri;
        this.updateShowAndroidOngoingMeetingNotification(i3);
        var o2 = Is(n2, r3), a2 = Is(this._callState, this._isPreparingToJoin);
        o2 !== a2 && (this.updateKeepDeviceAwake(a2), this.updateDeviceAudioMode(a2), this.updateNoOpRecordingEnsuringBackgroundContinuity(a2));
      }
    }
  }, {
    key: "resetMeetingDependentVars",
    value: function() {
      this._participants = {}, this._participantCounts = Ss, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = false, this._didPreAuth = false, this._accessState = {
        access: pi
      }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = tc(ws, this._callObjectMode), this._isScreenSharing = false, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = false, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = false, this._maxAppMessageSize = Vo, this._callMachineInitialized = false, this._bundleLoadTime = void 0, this._preloadCache;
    }
  }, {
    key: "updateKeepDeviceAwake",
    value: function(e2) {
      na() && this.nativeUtils().setKeepDeviceAwake(e2, this.callClientId);
    }
  }, {
    key: "updateDeviceAudioMode",
    value: function(e2) {
      if (na() && !this.disableReactNativeAutoDeviceManagement("audio")) {
        var t2 = e2 ? this._nativeInCallAudioMode : "idle";
        this.nativeUtils().setAudioMode(t2);
      }
    }
  }, {
    key: "updateShowAndroidOngoingMeetingNotification",
    value: function(e2) {
      if (na() && this.nativeUtils().setShowOngoingMeetingNotification) {
        var t2, n2, r3, i3;
        if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
          var o2 = this.properties.reactNativeConfig.androidInCallNotification;
          t2 = o2.title, n2 = o2.subtitle, r3 = o2.iconName, i3 = o2.disableForCustomOverride;
        }
        i3 && (e2 = false), this.nativeUtils().setShowOngoingMeetingNotification(e2, t2, n2, r3, this.callClientId);
      }
    }
  }, {
    key: "updateNoOpRecordingEnsuringBackgroundContinuity",
    value: function(e2) {
      na() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(e2);
    }
  }, {
    key: "toggleParticipantAudioBasedOnNativeAudioFocus",
    value: function() {
      var e2, t2;
      if (na()) {
        var n2 = null === (e2 = this._callMachine()) || void 0 === e2 || null === (t2 = e2.store) || void 0 === t2 ? void 0 : t2.getState();
        for (var r3 in null == n2 ? void 0 : n2.streams) {
          var i3 = n2.streams[r3];
          i3 && i3.pendingTrack && "audio" === i3.pendingTrack.kind && (i3.pendingTrack.enabled = this._hasNativeAudioFocus);
        }
      }
    }
  }, {
    key: "disableReactNativeAutoDeviceManagement",
    value: function(e2) {
      return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[e2];
    }
  }, {
    key: "absoluteUrl",
    value: function(e2) {
      if (void 0 !== e2) {
        var t2 = document.createElement("a");
        return t2.href = e2, t2.href;
      }
    }
  }, {
    key: "sayHello",
    value: function() {
      var e2 = "hello, world.";
      return console.log(e2), e2;
    }
  }, {
    key: "_logUseAfterDestroy",
    value: function() {
      var e2 = Object.values(ys)[0];
      if (this.needsLoad()) {
        if (e2 && !e2.needsLoad()) {
          var t2 = {
            action: zo,
            level: "error",
            code: this.strictMode ? 9995 : 9997
          };
          e2.sendMessageToCallMachine(t2);
        } else if (!this.strictMode) {
          console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
        }
      } else {
        var n2 = {
          action: zo,
          level: "error",
          code: this.strictMode ? 9995 : 9997
        };
        this._messageChannel.sendMessageToCallMachine(n2, null, this.callClientId, this._iframe);
      }
    }
  }, {
    key: "_logDuplicateInstanceAttempt",
    value: function() {
      for (var e2 = 0, t2 = Object.values(ys); e2 < t2.length; e2++) {
        var n2 = t2[e2];
        n2._callMachineInitialized ? (n2.sendMessageToCallMachine({
          action: zo,
          level: "warn",
          code: this.allowMultipleCallInstances ? 9993 : 9992
        }), n2._delayDuplicateInstanceLog = false) : n2._delayDuplicateInstanceLog = true;
      }
    }
  }, {
    key: "_maybeSendToSentry",
    value: function(e2) {
      var t2, n2, r3, i3, o2, a2;
      if (null !== (t2 = e2.error) && void 0 !== t2 && t2.type) {
        if (![Ti, Ci, ki].includes(e2.error.type)) return;
        if (e2.error.type === ki && e2.error.msg.includes("deleted")) return;
      }
      var s3 = null !== (n2 = this.properties) && void 0 !== n2 && n2.url ? new URL(this.properties.url) : void 0, c2 = "production";
      s3 && s3.host.includes(".staging.daily") && (c2 = "staging");
      var l3, u3, d2, p3, h2, f3 = [Yn(), Qn(), $r(), Vr(), Gr(), Xr(), Zn(), Yr()].filter(function(e3) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(e3.name);
      }), v2 = new mr({
        dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844",
        transport: jr,
        stackParser: Fr,
        integrations: f3,
        environment: c2
      }), g3 = new on();
      if (g3.setClient(v2), v2.init(), this.session_id && g3.setExtra("sessionId", this.session_id), this.properties) {
        var m2 = fs({}, this.properties);
        m2.userName = m2.userName ? "[Filtered]" : void 0, m2.userData = m2.userData ? "[Filtered]" : void 0, m2.token = m2.token ? "[Filtered]" : void 0, g3.setExtra("properties", m2);
      }
      if (s3) {
        var y3 = s3.searchParams.get("domain");
        if (!y3) {
          var _3 = s3.host.match(/(.*?)\./);
          y3 = _3 && _3[1] || "";
        }
        y3 && g3.setTag("domain", y3);
      }
      e2.error && (g3.setTag("fatalErrorType", e2.error.type), g3.setExtra("errorDetails", e2.error.details), (null === (l3 = e2.error.details) || void 0 === l3 ? void 0 : l3.uri) && g3.setTag("serverAddress", e2.error.details.uri), (null === (u3 = e2.error.details) || void 0 === u3 ? void 0 : u3.workerGroup) && g3.setTag("workerGroup", e2.error.details.workerGroup), (null === (d2 = e2.error.details) || void 0 === d2 ? void 0 : d2.geoGroup) && g3.setTag("geoGroup", e2.error.details.geoGroup), (null === (p3 = e2.error.details) || void 0 === p3 ? void 0 : p3.on) && g3.setTag("connectionAttempt", e2.error.details.on), null !== (h2 = e2.error.details) && void 0 !== h2 && h2.bundleUrl && (g3.setTag("bundleUrl", e2.error.details.bundleUrl), g3.setTag("bundleError", e2.error.details.sourceError.type)));
      g3.setTags({
        callMode: this._callObjectMode ? na() ? "reactNative" : null !== (r3 = this.properties) && void 0 !== r3 && null !== (i3 = r3.dailyConfig) && void 0 !== i3 && null !== (o2 = i3.callMode) && void 0 !== o2 && o2.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame",
        version: ee2.version()
      });
      var b3 = (null === (a2 = e2.error) || void 0 === a2 ? void 0 : a2.msg) || e2.errorMsg;
      g3.captureException(new Error(b3));
    }
  }, {
    key: "_callMachine",
    value: function() {
      var e2, t2, n2;
      return null === (e2 = window._daily) || void 0 === e2 || null === (t2 = e2.instances) || void 0 === t2 || null === (n2 = t2[this.callClientId]) || void 0 === n2 ? void 0 : n2.callMachine;
    }
  }], [{
    key: "supportedBrowser",
    value: function() {
      if (na()) return {
        supported: true,
        mobile: true,
        name: "React Native",
        version: null,
        supportsScreenShare: true,
        supportsSfu: true,
        supportsVideoProcessing: false,
        supportsAudioProcessing: false
      };
      var e2 = G.getParser(ta());
      return {
        supported: !!la(),
        mobile: "mobile" === e2.getPlatformType(),
        name: e2.getBrowserName(),
        version: e2.getBrowserVersion(),
        supportsFullscreen: !!oa(),
        supportsScreenShare: !!ia(),
        supportsSfu: !!la(),
        supportsVideoProcessing: sa(),
        supportsAudioProcessing: ca()
      };
    }
  }, {
    key: "version",
    value: function() {
      return "0.73.0";
    }
  }, {
    key: "createCallObject",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e2.layout = "none", new ee2(null, e2);
    }
  }, {
    key: "wrap",
    value: function(e2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (Us(), !e2 || !e2.contentWindow || "string" != typeof e2.src) throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
      return t2.layout || (t2.customLayout ? t2.layout = "custom-v1" : t2.layout = "browser"), new ee2(e2, t2);
    }
  }, {
    key: "createFrame",
    value: function(e2, t2) {
      var n2, r3;
      Us(), e2 && t2 ? (n2 = e2, r3 = t2) : e2 && e2.append ? (n2 = e2, r3 = {}) : (n2 = document.body, r3 = e2 || {});
      var i3 = r3.iframeStyle;
      i3 || (i3 = n2 === document.body ? {
        position: "fixed",
        border: "1px solid black",
        backgroundColor: "white",
        width: "375px",
        height: "450px",
        right: "1em",
        bottom: "1em"
      } : {
        border: 0,
        width: "100%",
        height: "100%"
      });
      var o2 = document.createElement("iframe");
      window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? o2.allow = "microphone, camera" : o2.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", o2.style.visibility = "hidden", n2.appendChild(o2), o2.style.visibility = null, Object.keys(i3).forEach(function(e3) {
        return o2.style[e3] = i3[e3];
      }), r3.layout || (r3.customLayout ? r3.layout = "custom-v1" : r3.layout = "browser");
      try {
        return new ee2(o2, r3);
      } catch (e3) {
        throw n2.removeChild(o2), e3;
      }
    }
  }, {
    key: "createTransparentFrame",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Us();
      var t2 = document.createElement("iframe");
      return t2.allow = "microphone; camera; autoplay", t2.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    ", document.body.appendChild(t2), e2.layout || (e2.layout = "custom-v1"), ee2.wrap(t2, e2);
    }
  }, {
    key: "getCallInstance",
    value: function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
      return e2 ? ys[e2] : Object.values(ys)[0];
    }
  }]), ee2;
}();
function xs(e2, t2) {
  var n2 = {};
  for (var r2 in e2) if (e2[r2] instanceof MediaStreamTrack) n2[r2] = Ho;
  else if ("dailyConfig" === r2) {
    if (e2[r2].modifyLocalSdpHook) {
      var i2 = window._daily.instances[t2].customCallbacks || {};
      i2.modifyLocalSdpHook = e2[r2].modifyLocalSdpHook, window._daily.instances[t2].customCallbacks = i2, delete e2[r2].modifyLocalSdpHook;
    }
    if (e2[r2].modifyRemoteSdpHook) {
      var o2 = window._daily.instances[t2].customCallbacks || {};
      o2.modifyRemoteSdpHook = e2[r2].modifyRemoteSdpHook, window._daily.instances[t2].customCallbacks = o2, delete e2[r2].modifyRemoteSdpHook;
    }
    n2[r2] = e2[r2];
  } else n2[r2] = e2[r2];
  return n2;
}
function Ls(e2) {
  var t2 = arguments.length > 2 ? arguments[2] : void 0;
  if (e2 !== ri) {
    var n2 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " only supported after join.");
    throw t2 && (n2 += " ".concat(t2)), console.error(n2), new Error(n2);
  }
}
function Is(e2, t2) {
  return [ni, ri].includes(e2) || t2;
}
function Ds(e2, t2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "This daily-js method", r2 = arguments.length > 3 ? arguments[3] : void 0;
  if (Is(e2, t2)) {
    var i2 = "".concat(n2, " not supported after joining a meeting.");
    throw r2 && (i2 += " ".concat(r2)), console.error(i2), new Error(i2);
  }
}
function Ns(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", n2 = arguments.length > 2 ? arguments[2] : void 0;
  if (!e2) {
    var r2 = "".concat(t2, arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw n2 && (r2 += " ".concat(n2)), console.error(r2), new Error(r2);
  }
}
function Rs(e2) {
  if (e2) {
    var t2 = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
    throw console.error(t2), new Error(t2);
  }
}
function Fs(e2) {
  if (!e2) {
    var t2 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(t2), new Error(t2);
  }
}
function Bs(e2) {
  if (e2) {
    var t2 = "".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(t2), new Error(t2);
  }
}
function Us() {
  if (na()) throw new Error("This daily-js method is not currently supported in React Native");
}
function Vs() {
  if (!na()) throw new Error("This daily-js method is only supported in React Native");
}
function Js(e2) {
  if (void 0 === e2) return true;
  var t2;
  if ("string" == typeof e2) t2 = e2;
  else try {
    t2 = JSON.stringify(e2), D(JSON.parse(t2), e2) || console.warn("The userData provided will be modified when serialized.");
  } catch (e3) {
    throw Error("userData must be serializable to JSON: ".concat(e3));
  }
  if (t2.length > 4096) throw Error("userData is too large (".concat(t2.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return true;
}
function $s(e2, t2) {
  for (var n2 = t2.allowAllParticipantsKey, r2 = function(e3) {
    var t3 = ["local"];
    return n2 || t3.push("*"), e3 && !t3.includes(e3);
  }, i2 = function(e3) {
    return !!(void 0 === e3.layer || Number.isInteger(e3.layer) && e3.layer >= 0 || "inherit" === e3.layer);
  }, o2 = function(e3) {
    return !!e3 && !(e3.video && !i2(e3.video)) && !(e3.screenVideo && !i2(e3.screenVideo));
  }, a2 = 0, s2 = Object.entries(e2); a2 < s2.length; a2++) {
    var c2 = v(s2[a2], 2), l2 = c2[0], u2 = c2[1];
    if (!r2(l2) || !o2(u2)) return false;
  }
  return true;
}
function qs(e2) {
  return "object" === n(e2) && !(e2.video && ("object" !== n(e2.video) || !function(e3) {
    var t3 = ["type", "config"];
    if (!e3) return false;
    if ("object" !== n(e3)) return false;
    if (!function(e4) {
      if ("string" != typeof e4) return false;
      if (!Object.values(Go).includes(e4)) return console.error("inputSettings video processor type invalid"), false;
      return true;
    }(e3.type)) return false;
    if (e3.config) {
      if ("object" !== n(e3.config)) return false;
      if (!function(e4, t4) {
        var n2 = Object.keys(t4);
        if (0 === n2.length) return true;
        var r3 = "invalid object in inputSettings -> video -> processor -> config";
        switch (e4) {
          case Go.BGBLUR:
            return n2.length > 1 || "strength" !== n2[0] ? (console.error(r3), false) : !("number" != typeof t4.strength || t4.strength <= 0 || t4.strength > 1 || isNaN(t4.strength)) || (console.error("".concat(r3, "; expected: {0 < strength <= 1}, got: ").concat(t4.strength)), false);
          case Go.BGIMAGE:
            return !(void 0 !== t4.source && !function(e5) {
              if ("default" === e5.source) return e5.type = "default", true;
              if (e5.source instanceof ArrayBuffer) return true;
              if (Z(e5.source)) return e5.type = "url", !!function(e6) {
                var t6 = new URL(e6), n4 = t6.pathname;
                if ("data:" === t6.protocol) try {
                  var r4 = n4.substring(n4.indexOf(":") + 1, n4.indexOf(";")).split("/")[1];
                  return Yo.includes(r4);
                } catch (e7) {
                  return console.error("failed to deduce blob content type", e7), false;
                }
                var i3 = n4.split(".").at(-1).toLowerCase().trim();
                return Yo.includes(i3);
              }(e5.source) || (console.error("invalid image type; supported types: [".concat(Yo.join(", "), "]")), false);
              return t5 = e5.source, n3 = Number(t5), isNaN(n3) || !Number.isInteger(n3) || n3 <= 0 || n3 > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), false) : (e5.type = "daily-preselect", true);
              var t5, n3;
            }(t4));
          default:
            return true;
        }
      }(e3.type, e3.config)) return false;
    }
    return Object.keys(e3).filter(function(e4) {
      return !t3.includes(e4);
    }).forEach(function(t4) {
      console.warn("invalid key inputSettings -> video -> processor : ".concat(t4)), delete e3[t4];
    }), true;
  }(e2.video.processor))) && !(e2.audio && ("object" !== n(e2.audio) || (r2 = e2.audio.processor, i2 = ["type"], !r2 || "object" !== n(r2) || (Object.keys(r2).filter(function(e3) {
    return !i2.includes(e3);
  }).forEach(function(e3) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(e3)), delete r2[e3];
  }), t2 = r2.type, "string" != typeof t2 || !Object.values(Qo).includes(t2) && (console.error("inputSettings audio processor type invalid"), 1)))));
  var t2, r2, i2;
}
function Ws(e2, t2) {
  var n2, r2 = [];
  e2.video && !sa(null !== (n2 = null == t2 ? void 0 : t2.useLegacyVideoProcessor) && void 0 !== n2 && n2) && (delete e2.video, r2.push("video")), e2.audio && !ca() && (delete e2.audio, r2.push("audio")), r2.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(r2.join(", ")));
}
function zs() {
  var e2 = Object.values(Go).join(" | "), t2 = Object.values(Qo).join(" | ");
  return "inputSettings must be of the form: { video?: { processor: { type: [ ".concat(e2, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t2, " ] } } }");
}
function Hs(e2) {
  var t2 = e2.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(gi).concat(t2 ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function Gs() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(Ps), ".");
}
function Qs(e2) {
  if (e2 && "object" !== n(e2) || Array.isArray(e2)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Ts), ".")), false;
  if (e2) for (var t2 = 0, r2 = Object.entries(e2); t2 < r2.length; t2++) for (var i2 = v(r2[t2], 1)[0], o2 = 0, a2 = Object.entries(e2[i2]); o2 < a2.length; o2++) {
    var s2 = v(a2[o2], 2), c2 = s2[0], l2 = s2[1], u2 = Ts.id[c2];
    if (!u2) return console.error("customTrayButton does not support key ".concat(c2)), false;
    switch (c2) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!Z(l2)) return console.error("customTrayButton ".concat(c2, " should be a url.")), false;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(l2)) return console.error("customTrayButton ".concat(c2, " should be ").concat(u2, ". Got: ").concat(l2)), false;
        break;
      default:
        if (n(l2) !== u2) return console.error("customTrayButton ".concat(c2, " should be a ").concat(u2, ".")), false;
    }
  }
  return true;
}
function Ks(e2) {
  if (!e2 || e2 && "object" !== n(e2) || Array.isArray(e2)) return console.error(Gs()), false;
  for (var t2 = function(e3) {
    return "".concat(e3, " should be ").concat(Ps.id[e3]);
  }, r2 = function(e3, t3) {
    return console.error("customIntegration ".concat(e3, ": ").concat(t3));
  }, i2 = 0, o2 = Object.entries(e2); i2 < o2.length; i2++) {
    var a2 = v(o2[i2], 1)[0];
    if (!("label" in e2[a2])) return r2(a2, "label is required"), false;
    if (!("location" in e2[a2])) return r2(a2, "location is required"), false;
    if (!("src" in e2[a2]) && !("srcdoc" in e2[a2])) return r2(a2, "src or srcdoc is required"), false;
    for (var s2 = 0, c2 = Object.entries(e2[a2]); s2 < c2.length; s2++) {
      var l2 = v(c2[s2], 2), u2 = l2[0], d2 = l2[1];
      switch (u2) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if ("string" != typeof d2) return r2(a2, t2(u2)), false;
          break;
        case "iconURL":
          if (!Z(d2)) return r2(a2, "".concat(u2, " should be a url")), false;
          break;
        case "src":
          if ("srcdoc" in e2[a2]) return r2(a2, "cannot have both src and srcdoc"), false;
          if (!Z(d2)) return r2(a2, 'src "'.concat(d2, '" is not a valid URL')), false;
          break;
        case "srcdoc":
          if ("src" in e2[a2]) return r2(a2, "cannot have both src and srcdoc"), false;
          if ("string" != typeof d2) return r2(a2, t2(u2)), false;
          break;
        case "location":
          if (!["main", "sidebar"].includes(d2)) return r2(a2, t2(u2)), false;
          break;
        case "controlledBy":
          if ("*" !== d2 && "owners" !== d2 && (!Array.isArray(d2) || d2.some(function(e3) {
            return "string" != typeof e3;
          }))) return r2(a2, t2(u2)), false;
          break;
        case "shared":
          if ((!Array.isArray(d2) || d2.some(function(e3) {
            return "string" != typeof e3;
          })) && "owners" !== d2 && "boolean" != typeof d2) return r2(a2, t2(u2)), false;
          break;
        default:
          if (!Ps.id[u2]) return console.error("customIntegration does not support key ".concat(u2)), false;
      }
    }
  }
  return true;
}
function Ys(e2, t2) {
  if (void 0 === t2) return false;
  switch (n(t2)) {
    case "string":
      return n(e2) === t2;
    case "object":
      if ("object" !== n(e2)) return false;
      for (var r2 in e2) if (!Ys(e2[r2], t2[r2])) return false;
      return true;
    default:
      return false;
  }
}
function Xs(e2, t2) {
  var n2 = e2.sessionId, r2 = e2.toEndPoint, i2 = e2.useSipRefer;
  if (!n2 || !r2) throw new Error("".concat(t2, "() requires a sessionId and toEndPoint"));
  if ("string" != typeof n2 || "string" != typeof r2) throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (i2 && !r2.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!r2.startsWith("sip:") && !r2.startsWith("+")) throw new Error("toEndPoint: ".concat(r2, ' must starts with either "sip:" or "+"'));
}
function Zs(e2) {
  if ("object" !== n(e2)) throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (e2.state && !Object.values(Ko).includes(e2.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Ko));
  if (e2.volume) {
    if ("number" != typeof e2.volume) throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (e2.volume < 0 || e2.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function ec(e2, t2, n2) {
  return !("number" != typeof e2 || e2 < t2 || e2 > n2);
}
function tc(e2, t2) {
  return e2 && !t2 && delete e2.data, e2;
}
export {
  hi as DAILY_ACCESS_LEVEL_FULL,
  fi as DAILY_ACCESS_LEVEL_LOBBY,
  vi as DAILY_ACCESS_LEVEL_NONE,
  pi as DAILY_ACCESS_UNKNOWN,
  Ai as DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE,
  Pi as DAILY_CAMERA_ERROR_CAM_IN_USE,
  Ii as DAILY_CAMERA_ERROR_CONSTRAINTS,
  Oi as DAILY_CAMERA_ERROR_MIC_IN_USE,
  Li as DAILY_CAMERA_ERROR_NOT_FOUND,
  ji as DAILY_CAMERA_ERROR_PERMISSIONS,
  xi as DAILY_CAMERA_ERROR_UNDEF_MEDIADEVICES,
  Di as DAILY_CAMERA_ERROR_UNKNOWN,
  Yi as DAILY_EVENT_ACCESS_STATE_UPDATED,
  Mo as DAILY_EVENT_ACTIVE_SPEAKER_CHANGE,
  Co as DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE,
  go as DAILY_EVENT_APP_MSG,
  $i as DAILY_EVENT_CAMERA_ERROR,
  Po as DAILY_EVENT_CPU_LOAD_CHANGE,
  Uo as DAILY_EVENT_ERROR,
  jo as DAILY_EVENT_EXIT_FULLSCREEN,
  Oo as DAILY_EVENT_FACE_COUNTS_UPDATED,
  Ao as DAILY_EVENT_FULLSCREEN,
  Ri as DAILY_EVENT_IFRAME_LAUNCH_CONFIG,
  Ni as DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG,
  Fo as DAILY_EVENT_INPUT_SETTINGS_UPDATED,
  Wi as DAILY_EVENT_JOINED_MEETING,
  qi as DAILY_EVENT_JOINING_MEETING,
  No as DAILY_EVENT_LANG_UPDATED,
  zi as DAILY_EVENT_LEFT_MEETING,
  Do as DAILY_EVENT_LIVE_STREAMING_ERROR,
  xo as DAILY_EVENT_LIVE_STREAMING_STARTED,
  Io as DAILY_EVENT_LIVE_STREAMING_STOPPED,
  Lo as DAILY_EVENT_LIVE_STREAMING_UPDATED,
  Vi as DAILY_EVENT_LOADED,
  Bi as DAILY_EVENT_LOADING,
  Ui as DAILY_EVENT_LOAD_ATTEMPT_FAILED,
  ko as DAILY_EVENT_LOCAL_SCREEN_SHARE_CANCELED,
  wo as DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED,
  So as DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED,
  eo as DAILY_EVENT_MEETING_SESSION_DATA_ERROR,
  Zi as DAILY_EVENT_MEETING_SESSION_STATE_UPDATED,
  Xi as DAILY_EVENT_MEETING_SESSION_SUMMARY_UPDATED,
  To as DAILY_EVENT_NETWORK_CONNECTION,
  Eo as DAILY_EVENT_NETWORK_QUALITY_CHANGE,
  Bo as DAILY_EVENT_NONFATAL_ERROR,
  Ki as DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED,
  Hi as DAILY_EVENT_PARTICIPANT_JOINED,
  Qi as DAILY_EVENT_PARTICIPANT_LEFT,
  Gi as DAILY_EVENT_PARTICIPANT_UPDATED,
  Ro as DAILY_EVENT_RECEIVE_SETTINGS_UPDATED,
  vo as DAILY_EVENT_RECORDING_DATA,
  ho as DAILY_EVENT_RECORDING_ERROR,
  lo as DAILY_EVENT_RECORDING_STARTED,
  po as DAILY_EVENT_RECORDING_STATS,
  uo as DAILY_EVENT_RECORDING_STOPPED,
  fo as DAILY_EVENT_RECORDING_UPLOAD_COMPLETED,
  yo as DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED,
  bo as DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED,
  _o as DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED,
  Ji as DAILY_EVENT_STARTED_CAMERA,
  Fi as DAILY_EVENT_THEME_UPDATED,
  io as DAILY_EVENT_TRACK_STARTED,
  oo as DAILY_EVENT_TRACK_STOPPED,
  co as DAILY_EVENT_TRANSCRIPTION_ERROR,
  mo as DAILY_EVENT_TRANSCRIPTION_MSG,
  ao as DAILY_EVENT_TRANSCRIPTION_STARTED,
  so as DAILY_EVENT_TRANSCRIPTION_STOPPED,
  to as DAILY_EVENT_WAITING_PARTICIPANT_ADDED,
  ro as DAILY_EVENT_WAITING_PARTICIPANT_REMOVED,
  no as DAILY_EVENT_WAITING_PARTICIPANT_UPDATED,
  Ti as DAILY_FATAL_ERROR_CONNECTION,
  yi as DAILY_FATAL_ERROR_EJECTED,
  Ci as DAILY_FATAL_ERROR_EOL,
  wi as DAILY_FATAL_ERROR_EXP_ROOM,
  Si as DAILY_FATAL_ERROR_EXP_TOKEN,
  Mi as DAILY_FATAL_ERROR_MEETING_FULL,
  _i as DAILY_FATAL_ERROR_NBF_ROOM,
  bi as DAILY_FATAL_ERROR_NBF_TOKEN,
  Ei as DAILY_FATAL_ERROR_NOT_ALLOWED,
  ki as DAILY_FATAL_ERROR_NO_ROOM,
  mi as DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY,
  gi as DAILY_RECEIVE_SETTINGS_BASE_KEY,
  oi as DAILY_STATE_ERROR,
  ri as DAILY_STATE_JOINED,
  ni as DAILY_STATE_JOINING,
  ii as DAILY_STATE_LEFT,
  Zr as DAILY_STATE_NEW,
  ai as DAILY_TRACK_STATE_BLOCKED,
  ui as DAILY_TRACK_STATE_INTERRUPTED,
  li as DAILY_TRACK_STATE_LOADING,
  si as DAILY_TRACK_STATE_OFF,
  di as DAILY_TRACK_STATE_PLAYABLE,
  ci as DAILY_TRACK_STATE_SENDABLE,
  js as default
};
/*! Bundled license information:

@daily-co/daily-js/dist/daily-esm.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
//# sourceMappingURL=@daily-co_daily-js.js.map
