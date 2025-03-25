var Tc = Object.defineProperty;
var Rc = (r, n, t) => n in r ? Tc(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t;
var N = (r, n, t) => Rc(r, typeof n != "symbol" ? n + "" : n, t);
import * as B from "react";
import w, { useRef as Xe, useContext as Nc, useMemo as Ic, useDebugValue as po, createElement as _i, useEffect as Le, useState as Ce, useReducer as Ea, forwardRef as En, useImperativeHandle as Si, useLayoutEffect as Ma, cloneElement as Ci, createRef as wt, Component as we, useCallback as Lc } from "react";
import * as Ir from "xlsx";
import Ac from "jspdf";
import Yc from "jspdf-autotable";
import * as Fc from "react-dom";
import jc, { createPortal as Pa } from "react-dom";
var Lr = { exports: {} }, fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function Wc() {
  if (ho) return fr;
  ho = 1;
  var r = w, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, f = null, p = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (u in c) e.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: s, key: f, ref: p, props: d, _owner: a.current };
  }
  return fr.Fragment = t, fr.jsx = i, fr.jsxs = i, fr;
}
var pr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function Hc() {
  return mo || (mo = 1, process.env.NODE_ENV !== "production" && function() {
    var r = w, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function y(h) {
      if (h === null || typeof h != "object")
        return null;
      var S = m && h[m] || h[g];
      return typeof S == "function" ? S : null;
    }
    var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(h) {
      {
        for (var S = arguments.length, R = new Array(S > 1 ? S - 1 : 0), Y = 1; Y < S; Y++)
          R[Y - 1] = arguments[Y];
        D("error", h, R);
      }
    }
    function D(h, S, R) {
      {
        var Y = x.ReactDebugCurrentFrame, ee = Y.getStackAddendum();
        ee !== "" && (S += "%s", R = R.concat([ee]));
        var oe = R.map(function(q) {
          return String(q);
        });
        oe.unshift("Warning: " + S), Function.prototype.apply.call(console[h], console, oe);
      }
    }
    var k = !1, E = !1, C = !1, _ = !1, M = !1, O;
    O = Symbol.for("react.module.reference");
    function P(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === e || h === o || M || h === a || h === l || h === u || _ || h === p || k || E || C || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === O || h.getModuleId !== void 0));
    }
    function L(h, S, R) {
      var Y = h.displayName;
      if (Y)
        return Y;
      var ee = S.displayName || S.name || "";
      return ee !== "" ? R + "(" + ee + ")" : R;
    }
    function F(h) {
      return h.displayName || "Context";
    }
    function $(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case e:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case s:
            var S = h;
            return F(S) + ".Consumer";
          case i:
            var R = h;
            return F(R._context) + ".Provider";
          case c:
            return L(h, h.render, "ForwardRef");
          case d:
            var Y = h.displayName || null;
            return Y !== null ? Y : $(h.type) || "Memo";
          case f: {
            var ee = h, oe = ee._payload, q = ee._init;
            try {
              return $(q(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, K = 0, A, j, W, Z, pe, he, ke;
    function Ht() {
    }
    Ht.__reactDisabledLog = !0;
    function ur() {
      {
        if (K === 0) {
          A = console.log, j = console.info, W = console.warn, Z = console.error, pe = console.group, he = console.groupCollapsed, ke = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: Ht,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        K++;
      }
    }
    function $t() {
      {
        if (K--, K === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, h, {
              value: A
            }),
            info: H({}, h, {
              value: j
            }),
            warn: H({}, h, {
              value: W
            }),
            error: H({}, h, {
              value: Z
            }),
            group: H({}, h, {
              value: pe
            }),
            groupCollapsed: H({}, h, {
              value: he
            }),
            groupEnd: H({}, h, {
              value: ke
            })
          });
        }
        K < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var et = x.ReactCurrentDispatcher, dt;
    function Fe(h, S, R) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (ee) {
            var Y = ee.stack.trim().match(/\n( *(at )?)/);
            dt = Y && Y[1] || "";
          }
        return `
` + dt + h;
      }
    }
    var je = !1, ft;
    {
      var Bt = typeof WeakMap == "function" ? WeakMap : Map;
      ft = new Bt();
    }
    function We(h, S) {
      if (!h || je)
        return "";
      {
        var R = ft.get(h);
        if (R !== void 0)
          return R;
      }
      var Y;
      je = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = et.current, et.current = null, ur();
      try {
        if (S) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Pe) {
              Y = Pe;
            }
            Reflect.construct(h, [], q);
          } else {
            try {
              q.call();
            } catch (Pe) {
              Y = Pe;
            }
            h.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            Y = Pe;
          }
          h();
        }
      } catch (Pe) {
        if (Pe && Y && typeof Pe.stack == "string") {
          for (var Q = Pe.stack.split(`
`), _e = Y.stack.split(`
`), ue = Q.length - 1, me = _e.length - 1; ue >= 1 && me >= 0 && Q[ue] !== _e[me]; )
            me--;
          for (; ue >= 1 && me >= 0; ue--, me--)
            if (Q[ue] !== _e[me]) {
              if (ue !== 1 || me !== 1)
                do
                  if (ue--, me--, me < 0 || Q[ue] !== _e[me]) {
                    var Te = `
` + Q[ue].replace(" at new ", " at ");
                    return h.displayName && Te.includes("<anonymous>") && (Te = Te.replace("<anonymous>", h.displayName)), typeof h == "function" && ft.set(h, Te), Te;
                  }
                while (ue >= 1 && me >= 0);
              break;
            }
        }
      } finally {
        je = !1, et.current = oe, $t(), Error.prepareStackTrace = ee;
      }
      var Vt = h ? h.displayName || h.name : "", St = Vt ? Fe(Vt) : "";
      return typeof h == "function" && ft.set(h, St), St;
    }
    function sc(h, S, R) {
      return We(h, !1);
    }
    function cc(h) {
      var S = h.prototype;
      return !!(S && S.isReactComponent);
    }
    function Rr(h, S, R) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return We(h, cc(h));
      if (typeof h == "string")
        return Fe(h);
      switch (h) {
        case l:
          return Fe("Suspense");
        case u:
          return Fe("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return sc(h.render);
          case d:
            return Rr(h.type, S, R);
          case f: {
            var Y = h, ee = Y._payload, oe = Y._init;
            try {
              return Rr(oe(ee), S, R);
            } catch {
            }
          }
        }
      return "";
    }
    var dr = Object.prototype.hasOwnProperty, Za = {}, Ja = x.ReactDebugCurrentFrame;
    function Nr(h) {
      if (h) {
        var S = h._owner, R = Rr(h.type, h._source, S ? S.type : null);
        Ja.setExtraStackFrame(R);
      } else
        Ja.setExtraStackFrame(null);
    }
    function lc(h, S, R, Y, ee) {
      {
        var oe = Function.call.bind(dr);
        for (var q in h)
          if (oe(h, q)) {
            var Q = void 0;
            try {
              if (typeof h[q] != "function") {
                var _e = Error((Y || "React class") + ": " + R + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              Q = h[q](S, q, Y, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              Q = ue;
            }
            Q && !(Q instanceof Error) && (Nr(ee), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", R, q, typeof Q), Nr(null)), Q instanceof Error && !(Q.message in Za) && (Za[Q.message] = !0, Nr(ee), b("Failed %s type: %s", R, Q.message), Nr(null));
          }
      }
    }
    var uc = Array.isArray;
    function zn(h) {
      return uc(h);
    }
    function dc(h) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, R = S && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return R;
      }
    }
    function fc(h) {
      try {
        return eo(h), !1;
      } catch {
        return !0;
      }
    }
    function eo(h) {
      return "" + h;
    }
    function to(h) {
      if (fc(h))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dc(h)), eo(h);
    }
    var ro = x.ReactCurrentOwner, pc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, no, ao;
    function hc(h) {
      if (dr.call(h, "ref")) {
        var S = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function mc(h) {
      if (dr.call(h, "key")) {
        var S = Object.getOwnPropertyDescriptor(h, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function gc(h, S) {
      typeof h.ref == "string" && ro.current;
    }
    function vc(h, S) {
      {
        var R = function() {
          no || (no = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        R.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function yc(h, S) {
      {
        var R = function() {
          ao || (ao = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        R.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var wc = function(h, S, R, Y, ee, oe, q) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: h,
        key: S,
        ref: R,
        props: q,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return Q._store = {}, Object.defineProperty(Q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function bc(h, S, R, Y, ee) {
      {
        var oe, q = {}, Q = null, _e = null;
        R !== void 0 && (to(R), Q = "" + R), mc(S) && (to(S.key), Q = "" + S.key), hc(S) && (_e = S.ref, gc(S, ee));
        for (oe in S)
          dr.call(S, oe) && !pc.hasOwnProperty(oe) && (q[oe] = S[oe]);
        if (h && h.defaultProps) {
          var ue = h.defaultProps;
          for (oe in ue)
            q[oe] === void 0 && (q[oe] = ue[oe]);
        }
        if (Q || _e) {
          var me = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Q && vc(q, me), _e && yc(q, me);
        }
        return wc(h, Q, _e, ee, Y, ro.current, q);
      }
    }
    var Vn = x.ReactCurrentOwner, oo = x.ReactDebugCurrentFrame;
    function zt(h) {
      if (h) {
        var S = h._owner, R = Rr(h.type, h._source, S ? S.type : null);
        oo.setExtraStackFrame(R);
      } else
        oo.setExtraStackFrame(null);
    }
    var Kn;
    Kn = !1;
    function Gn(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function io() {
      {
        if (Vn.current) {
          var h = $(Vn.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Dc(h) {
      return "";
    }
    var so = {};
    function xc(h) {
      {
        var S = io();
        if (!S) {
          var R = typeof h == "string" ? h : h.displayName || h.name;
          R && (S = `

Check the top-level render call using <` + R + ">.");
        }
        return S;
      }
    }
    function co(h, S) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var R = xc(S);
        if (so[R])
          return;
        so[R] = !0;
        var Y = "";
        h && h._owner && h._owner !== Vn.current && (Y = " It was passed a child from " + $(h._owner.type) + "."), zt(h), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, Y), zt(null);
      }
    }
    function lo(h, S) {
      {
        if (typeof h != "object")
          return;
        if (zn(h))
          for (var R = 0; R < h.length; R++) {
            var Y = h[R];
            Gn(Y) && co(Y, S);
          }
        else if (Gn(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ee = y(h);
          if (typeof ee == "function" && ee !== h.entries)
            for (var oe = ee.call(h), q; !(q = oe.next()).done; )
              Gn(q.value) && co(q.value, S);
        }
      }
    }
    function kc(h) {
      {
        var S = h.type;
        if (S == null || typeof S == "string")
          return;
        var R;
        if (typeof S == "function")
          R = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === d))
          R = S.propTypes;
        else
          return;
        if (R) {
          var Y = $(S);
          lc(R, h.props, "prop", Y, h);
        } else if (S.PropTypes !== void 0 && !Kn) {
          Kn = !0;
          var ee = $(S);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _c(h) {
      {
        for (var S = Object.keys(h.props), R = 0; R < S.length; R++) {
          var Y = S[R];
          if (Y !== "children" && Y !== "key") {
            zt(h), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), zt(null);
            break;
          }
        }
        h.ref !== null && (zt(h), b("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var uo = {};
    function fo(h, S, R, Y, ee, oe) {
      {
        var q = P(h);
        if (!q) {
          var Q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = Dc();
          _e ? Q += _e : Q += io();
          var ue;
          h === null ? ue = "null" : zn(h) ? ue = "array" : h !== void 0 && h.$$typeof === n ? (ue = "<" + ($(h.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, Q);
        }
        var me = bc(h, S, R, ee, oe);
        if (me == null)
          return me;
        if (q) {
          var Te = S.children;
          if (Te !== void 0)
            if (Y)
              if (zn(Te)) {
                for (var Vt = 0; Vt < Te.length; Vt++)
                  lo(Te[Vt], h);
                Object.freeze && Object.freeze(Te);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lo(Te, h);
        }
        if (dr.call(S, "key")) {
          var St = $(h), Pe = Object.keys(S).filter(function(Oc) {
            return Oc !== "key";
          }), Qn = Pe.length > 0 ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!uo[St + Qn]) {
            var Pc = Pe.length > 0 ? "{" + Pe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qn, St, Pc, St), uo[St + Qn] = !0;
          }
        }
        return h === e ? _c(me) : kc(me), me;
      }
    }
    function Sc(h, S, R) {
      return fo(h, S, R, !0);
    }
    function Cc(h, S, R) {
      return fo(h, S, R, !1);
    }
    var Ec = Cc, Mc = Sc;
    pr.Fragment = e, pr.jsx = Ec, pr.jsxs = Mc;
  }()), pr;
}
var go;
function $c() {
  return go || (go = 1, process.env.NODE_ENV === "production" ? Lr.exports = Wc() : Lr.exports = Hc()), Lr.exports;
}
var v = $c(), ye = function() {
  return ye = Object.assign || function(n) {
    for (var t, e = 1, a = arguments.length; e < a; e++) {
      t = arguments[e];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, ye.apply(this, arguments);
};
function It(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
function Bc(r) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = r(t)), n[t];
  };
}
var zc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vc = /* @__PURE__ */ Bc(
  function(r) {
    return zc.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ie = "-ms-", Dr = "-moz-", te = "-webkit-", Ei = "comm", Mn = "rule", Oa = "decl", Kc = "@import", Mi = "@keyframes", Gc = "@layer", Pi = Math.abs, Ta = String.fromCharCode, ua = Object.assign;
function Qc(r, n) {
  return ve(r, 0) ^ 45 ? (((n << 2 ^ ve(r, 0)) << 2 ^ ve(r, 1)) << 2 ^ ve(r, 2)) << 2 ^ ve(r, 3) : 0;
}
function Oi(r) {
  return r.trim();
}
function rt(r, n) {
  return (r = n.exec(r)) ? r[0] : r;
}
function V(r, n, t) {
  return r.replace(n, t);
}
function Qr(r, n, t) {
  return r.indexOf(n, t);
}
function ve(r, n) {
  return r.charCodeAt(n) | 0;
}
function Xt(r, n, t) {
  return r.slice(n, t);
}
function Ve(r) {
  return r.length;
}
function Ti(r) {
  return r.length;
}
function yr(r, n) {
  return n.push(r), r;
}
function qc(r, n) {
  return r.map(n).join("");
}
function vo(r, n) {
  return r.filter(function(t) {
    return !rt(t, n);
  });
}
var Pn = 1, Zt = 1, Ri = 0, Ae = 0, ge = 0, cr = "";
function On(r, n, t, e, a, o, i, s) {
  return { value: r, root: n, parent: t, type: e, props: a, children: o, line: Pn, column: Zt, length: i, return: "", siblings: s };
}
function ht(r, n) {
  return ua(On("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, n);
}
function Kt(r) {
  for (; r.root; )
    r = ht(r.root, { children: [r] });
  yr(r, r.siblings);
}
function Uc() {
  return ge;
}
function Xc() {
  return ge = Ae > 0 ? ve(cr, --Ae) : 0, Zt--, ge === 10 && (Zt = 1, Pn--), ge;
}
function He() {
  return ge = Ae < Ri ? ve(cr, Ae++) : 0, Zt++, ge === 10 && (Zt = 1, Pn++), ge;
}
function Ot() {
  return ve(cr, Ae);
}
function qr() {
  return Ae;
}
function Tn(r, n) {
  return Xt(cr, r, n);
}
function da(r) {
  switch (r) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Zc(r) {
  return Pn = Zt = 1, Ri = Ve(cr = r), Ae = 0, [];
}
function Jc(r) {
  return cr = "", r;
}
function qn(r) {
  return Oi(Tn(Ae - 1, fa(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function el(r) {
  for (; (ge = Ot()) && ge < 33; )
    He();
  return da(r) > 2 || da(ge) > 3 ? "" : " ";
}
function tl(r, n) {
  for (; --n && He() && !(ge < 48 || ge > 102 || ge > 57 && ge < 65 || ge > 70 && ge < 97); )
    ;
  return Tn(r, qr() + (n < 6 && Ot() == 32 && He() == 32));
}
function fa(r) {
  for (; He(); )
    switch (ge) {
      // ] ) " '
      case r:
        return Ae;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && fa(ge);
        break;
      // (
      case 40:
        r === 41 && fa(r);
        break;
      // \
      case 92:
        He();
        break;
    }
  return Ae;
}
function rl(r, n) {
  for (; He() && r + ge !== 57; )
    if (r + ge === 84 && Ot() === 47)
      break;
  return "/*" + Tn(n, Ae - 1) + "*" + Ta(r === 47 ? r : He());
}
function nl(r) {
  for (; !da(Ot()); )
    He();
  return Tn(r, Ae);
}
function al(r) {
  return Jc(Ur("", null, null, null, [""], r = Zc(r), 0, [0], r));
}
function Ur(r, n, t, e, a, o, i, s, c) {
  for (var l = 0, u = 0, d = i, f = 0, p = 0, m = 0, g = 1, y = 1, x = 1, b = 0, D = "", k = a, E = o, C = e, _ = D; y; )
    switch (m = b, b = He()) {
      // (
      case 40:
        if (m != 108 && ve(_, d - 1) == 58) {
          Qr(_ += V(qn(b), "&", "&\f"), "&\f", Pi(l ? s[l - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += qn(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += el(m);
        break;
      // \
      case 92:
        _ += tl(qr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            yr(ol(rl(He(), qr()), n, t, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * g:
        s[l++] = Ve(_) * x;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + u:
            x == -1 && (_ = V(_, /\f/g, "")), p > 0 && Ve(_) - d && yr(p > 32 ? wo(_ + ";", e, t, d - 1, c) : wo(V(_, " ", "") + ";", e, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (yr(C = yo(_, n, t, l, u, a, s, D, k = [], E = [], d, o), o), b === 123)
              if (u === 0)
                Ur(_, n, C, C, k, o, d, s, E);
              else
                switch (f === 99 && ve(_, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ur(r, C, C, e && yr(yo(r, C, C, 0, 0, a, s, D, a, k = [], d, E), E), a, E, d, s, e ? k : E);
                    break;
                  default:
                    Ur(_, C, C, C, [""], E, 0, s, E);
                }
        }
        l = u = p = 0, g = x = 1, D = _ = "", d = i;
        break;
      // :
      case 58:
        d = 1 + Ve(_), p = m;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && Xc() == 125)
            continue;
        }
        switch (_ += Ta(b), b * g) {
          // &
          case 38:
            x = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Ve(_) - 1) * x, x = 1;
            break;
          // @
          case 64:
            Ot() === 45 && (_ += qn(He())), f = Ot(), u = d = Ve(D = _ += nl(qr())), b++;
            break;
          // -
          case 45:
            m === 45 && Ve(_) == 2 && (g = 0);
        }
    }
  return o;
}
function yo(r, n, t, e, a, o, i, s, c, l, u, d) {
  for (var f = a - 1, p = a === 0 ? o : [""], m = Ti(p), g = 0, y = 0, x = 0; g < e; ++g)
    for (var b = 0, D = Xt(r, f + 1, f = Pi(y = i[g])), k = r; b < m; ++b)
      (k = Oi(y > 0 ? p[b] + " " + D : V(D, /&\f/g, p[b]))) && (c[x++] = k);
  return On(r, n, t, a === 0 ? Mn : s, c, l, u, d);
}
function ol(r, n, t, e) {
  return On(r, n, t, Ei, Ta(Uc()), Xt(r, 2, -2), 0, e);
}
function wo(r, n, t, e, a) {
  return On(r, n, t, Oa, Xt(r, 0, e), Xt(r, e + 1, -1), e, a);
}
function Ni(r, n, t) {
  switch (Qc(r, n)) {
    // color-adjust
    case 5103:
      return te + "print-" + r + r;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + r + r;
    // tab-size
    case 4789:
      return Dr + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + r + Dr + r + ie + r + r;
    // writing-mode
    case 5936:
      switch (ve(r, n + 11)) {
        // vertical-l(r)
        case 114:
          return te + r + ie + V(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return te + r + ie + V(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return te + r + ie + V(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return te + r + ie + r + r;
    // order
    case 6165:
      return te + r + ie + "flex-" + r + r;
    // align-items
    case 5187:
      return te + r + V(r, /(\w+).+(:[^]+)/, te + "box-$1$2" + ie + "flex-$1$2") + r;
    // align-self
    case 5443:
      return te + r + ie + "flex-item-" + V(r, /flex-|-self/g, "") + (rt(r, /flex-|baseline/) ? "" : ie + "grid-row-" + V(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return te + r + ie + "flex-line-pack" + V(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return te + r + ie + V(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return te + r + ie + V(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return te + "box-" + V(r, "-grow", "") + te + r + ie + V(r, "grow", "positive") + r;
    // transition
    case 4554:
      return te + V(r, /([^-])(transform)/g, "$1" + te + "$2") + r;
    // cursor
    case 6187:
      return V(V(V(r, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return V(r, /(image-set\([^]*)/, te + "$1$`$1");
    // justify-content
    case 4968:
      return V(V(r, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + r + r;
    // justify-self
    case 4200:
      if (!rt(r, /flex-|baseline/)) return ie + "grid-column-align" + Xt(r, n) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return ie + V(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(e, a) {
        return n = a, rt(e.props, /grid-\w+-end/);
      }) ? ~Qr(r + (t = t[n].value), "span", 0) ? r : ie + V(r, "-start", "") + r + ie + "grid-row-span:" + (~Qr(t, "span", 0) ? rt(t, /\d+/) : +rt(t, /\d+/) - +rt(r, /\d+/)) + ";" : ie + V(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(e) {
        return rt(e.props, /grid-\w+-start/);
      }) ? r : ie + V(V(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(r, /(.+)-inline(.+)/, te + "$1$2") + r;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ve(r) - 1 - n > 6)
        switch (ve(r, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ve(r, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return V(r, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + Dr + (ve(r, n + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~Qr(r, "stretch", 0) ? Ni(V(r, "stretch", "fill-available"), n, t) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return V(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, a, o, i, s, c, l) {
        return ie + a + ":" + o + l + (i ? ie + a + "-span:" + (s ? c : +c - +o) + l : "") + r;
      });
    // position: sticky
    case 4949:
      if (ve(r, n + 6) === 121)
        return V(r, ":", ":" + te) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ve(r, ve(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return V(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + te + (ve(r, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + ie + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return V(r, ":", ":" + ie) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return V(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function sn(r, n) {
  for (var t = "", e = 0; e < r.length; e++)
    t += n(r[e], e, r, n) || "";
  return t;
}
function il(r, n, t, e) {
  switch (r.type) {
    case Gc:
      if (r.children.length) break;
    case Kc:
    case Oa:
      return r.return = r.return || r.value;
    case Ei:
      return "";
    case Mi:
      return r.return = r.value + "{" + sn(r.children, e) + "}";
    case Mn:
      if (!Ve(r.value = r.props.join(","))) return "";
  }
  return Ve(t = sn(r.children, e)) ? r.return = r.value + "{" + t + "}" : "";
}
function sl(r) {
  var n = Ti(r);
  return function(t, e, a, o) {
    for (var i = "", s = 0; s < n; s++)
      i += r[s](t, e, a, o) || "";
    return i;
  };
}
function cl(r) {
  return function(n) {
    n.root || (n = n.return) && r(n);
  };
}
function ll(r, n, t, e) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Oa:
        r.return = Ni(r.value, r.length, t);
        return;
      case Mi:
        return sn([ht(r, { value: V(r.value, "@", "@" + te) })], e);
      case Mn:
        if (r.length)
          return qc(t = r.props, function(a) {
            switch (rt(a, e = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Kt(ht(r, { props: [V(a, /:(read-\w+)/, ":" + Dr + "$1")] })), Kt(ht(r, { props: [a] })), ua(r, { props: vo(t, e) });
                break;
              // :placeholder
              case "::placeholder":
                Kt(ht(r, { props: [V(a, /:(plac\w+)/, ":" + te + "input-$1")] })), Kt(ht(r, { props: [V(a, /:(plac\w+)/, ":" + Dr + "$1")] })), Kt(ht(r, { props: [V(a, /:(plac\w+)/, ie + "input-$1")] })), Kt(ht(r, { props: [a] })), ua(r, { props: vo(t, e) });
                break;
            }
            return "";
          });
    }
}
var ul = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Lt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ii = "active", Li = "data-styled-version", Rn = "6.1.15", Ra = `/*!sc*/
`, cn = typeof window < "u" && "HTMLElement" in window, dl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), fl = {}, bo = /invalid hook call/i, Ar = /* @__PURE__ */ new Set(), Ai = function(r, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(r).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
        bo.test(i) ? (o = !1, Ar.delete(e)) : a.apply(void 0, It([i], s, !1));
      }, Xe(), o && !Ar.has(e) && (console.warn(e), Ar.add(e));
    } catch (i) {
      bo.test(i.message) && Ar.delete(e);
    } finally {
      console.error = a;
    }
  }
}, Nn = Object.freeze([]), Jt = Object.freeze({});
function Yi(r, n, t) {
  return t === void 0 && (t = Jt), r.theme !== t.theme && r.theme || n || t.theme;
}
var pa = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), pl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, hl = /(^-|-$)/g;
function Do(r) {
  return r.replace(pl, "-").replace(hl, "");
}
var ml = /(a)(d)/gi, Yr = 52, xo = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function ha(r) {
  var n, t = "";
  for (n = Math.abs(r); n > Yr; n = n / Yr | 0) t = xo(n % Yr) + t;
  return (xo(n % Yr) + t).replace(ml, "$1-$2");
}
var Un, Fi = 5381, Et = function(r, n) {
  for (var t = n.length; t; ) r = 33 * r ^ n.charCodeAt(--t);
  return r;
}, ji = function(r) {
  return Et(Fi, r);
};
function Wi(r) {
  return ha(ji(r) >>> 0);
}
function Hi(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function Xn(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var $i = typeof Symbol == "function" && Symbol.for, Bi = $i ? Symbol.for("react.memo") : 60115, gl = $i ? Symbol.for("react.forward_ref") : 60112, vl = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, yl = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, zi = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, wl = ((Un = {})[gl] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Un[Bi] = zi, Un);
function ko(r) {
  return ("type" in (n = r) && n.type.$$typeof) === Bi ? zi : "$$typeof" in r ? wl[r.$$typeof] : vl;
  var n;
}
var bl = Object.defineProperty, Dl = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, xl = Object.getOwnPropertyDescriptor, kl = Object.getPrototypeOf, So = Object.prototype;
function Vi(r, n, t) {
  if (typeof n != "string") {
    if (So) {
      var e = kl(n);
      e && e !== So && Vi(r, e, t);
    }
    var a = Dl(n);
    _o && (a = a.concat(_o(n)));
    for (var o = ko(r), i = ko(n), s = 0; s < a.length; ++s) {
      var c = a[s];
      if (!(c in yl || t && t[c] || i && c in i || o && c in o)) {
        var l = xl(n, c);
        try {
          bl(r, c, l);
        } catch {
        }
      }
    }
  }
  return r;
}
function At(r) {
  return typeof r == "function";
}
function Na(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Mt(r, n) {
  return r && n ? "".concat(r, " ").concat(n) : r || n || "";
}
function ma(r, n) {
  if (r.length === 0) return "";
  for (var t = r[0], e = 1; e < r.length; e++) t += r[e];
  return t;
}
function er(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function ga(r, n, t) {
  if (t === void 0 && (t = !1), !t && !er(r) && !Array.isArray(r)) return n;
  if (Array.isArray(n)) for (var e = 0; e < n.length; e++) r[e] = ga(r[e], n[e]);
  else if (er(n)) for (var e in n) r[e] = ga(r[e], n[e]);
  return r;
}
function Ia(r, n) {
  Object.defineProperty(r, "toString", { value: n });
}
var _l = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Sl() {
  for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
  for (var t = r[0], e = [], a = 1, o = r.length; a < o; a += 1) e.push(r[a]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function nt(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(Sl.apply(void 0, It([_l[r]], n, !1)).trim());
}
var Cl = function() {
  function r(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return r.prototype.indexOfGroup = function(n) {
    for (var t = 0, e = 0; e < n; e++) t += this.groupSizes[e];
    return t;
  }, r.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var e = this.groupSizes, a = e.length, o = a; n >= o; ) if ((o <<= 1) < 0) throw nt(16, "".concat(n));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(e), this.length = o;
      for (var i = a; i < o; i++) this.groupSizes[i] = 0;
    }
    for (var s = this.indexOfGroup(n + 1), c = (i = 0, t.length); i < c; i++) this.tag.insertRule(s, t[i]) && (this.groupSizes[n]++, s++);
  }, r.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], e = this.indexOfGroup(n), a = e + t;
      this.groupSizes[n] = 0;
      for (var o = e; o < a; o++) this.tag.deleteRule(e);
    }
  }, r.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var e = this.groupSizes[n], a = this.indexOfGroup(n), o = a + e, i = a; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(Ra);
    return t;
  }, r;
}(), El = 1 << 30, Xr = /* @__PURE__ */ new Map(), ln = /* @__PURE__ */ new Map(), Zr = 1, Fr = function(r) {
  if (Xr.has(r)) return Xr.get(r);
  for (; ln.has(Zr); ) Zr++;
  var n = Zr++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > El)) throw nt(16, "".concat(n));
  return Xr.set(r, n), ln.set(n, r), n;
}, Ml = function(r, n) {
  Zr = n + 1, Xr.set(r, n), ln.set(n, r);
}, Pl = "style[".concat(Lt, "][").concat(Li, '="').concat(Rn, '"]'), Ol = new RegExp("^".concat(Lt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Tl = function(r, n, t) {
  for (var e, a = t.split(","), o = 0, i = a.length; o < i; o++) (e = a[o]) && r.registerName(n, e);
}, Rl = function(r, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ra), a = [], o = 0, i = e.length; o < i; o++) {
    var s = e[o].trim();
    if (s) {
      var c = s.match(Ol);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (Ml(u, l), Tl(r, u, c[3]), r.getTag().insertRules(l, a)), a.length = 0;
      } else a.push(s);
    }
  }
}, Co = function(r) {
  for (var n = document.querySelectorAll(Pl), t = 0, e = n.length; t < e; t++) {
    var a = n[t];
    a && a.getAttribute(Lt) !== Ii && (Rl(r, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function Nl() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ki = function(r) {
  var n = document.head, t = r || n, e = document.createElement("style"), a = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(Lt, "]")));
    return c[c.length - 1];
  }(t), o = a !== void 0 ? a.nextSibling : null;
  e.setAttribute(Lt, Ii), e.setAttribute(Li, Rn);
  var i = Nl();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, o), e;
}, Il = function() {
  function r(n) {
    this.element = Ki(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, a = 0, o = e.length; a < o; a++) {
        var i = e[a];
        if (i.ownerNode === t) return i;
      }
      throw nt(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(n, t) {
    try {
      return this.sheet.insertRule(t, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, r.prototype.getRule = function(n) {
    var t = this.sheet.cssRules[n];
    return t && t.cssText ? t.cssText : "";
  }, r;
}(), Ll = function() {
  function r(n) {
    this.element = Ki(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 0) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, r.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, r;
}(), Al = function() {
  function r(n) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, r.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, r.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, r;
}(), Eo = cn, Yl = { isServer: !cn, useCSSOMInjection: !dl }, un = function() {
  function r(n, t, e) {
    n === void 0 && (n = Jt), t === void 0 && (t = {});
    var a = this;
    this.options = ye(ye({}, Yl), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && cn && Eo && (Eo = !1, Co(this)), Ia(this, function() {
      return function(o) {
        for (var i = o.getTag(), s = i.length, c = "", l = function(d) {
          var f = function(x) {
            return ln.get(x);
          }(d);
          if (f === void 0) return "continue";
          var p = o.names.get(f), m = i.getGroup(d);
          if (p === void 0 || !p.size || m.length === 0) return "continue";
          var g = "".concat(Lt, ".g").concat(d, '[id="').concat(f, '"]'), y = "";
          p !== void 0 && p.forEach(function(x) {
            x.length > 0 && (y += "".concat(x, ","));
          }), c += "".concat(m).concat(g, '{content:"').concat(y, '"}').concat(Ra);
        }, u = 0; u < s; u++) l(u);
        return c;
      }(a);
    });
  }
  return r.registerId = function(n) {
    return Fr(n);
  }, r.prototype.rehydrate = function() {
    !this.server && cn && Co(this);
  }, r.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new r(ye(ye({}, this.options), n), this.gs, t && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new Al(a) : e ? new Il(a) : new Ll(a);
    }(this.options), new Cl(n)));
    var n;
  }, r.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, r.prototype.registerName = function(n, t) {
    if (Fr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, r.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(Fr(n), e);
  }, r.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, r.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Fr(n)), this.clearNames(n);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), Fl = /&/g, jl = /^\s*\/\/.*$/gm;
function Gi(r, n) {
  return r.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Gi(t.children, n)), t;
  });
}
function Wl(r) {
  var n, t, e, a = Jt, o = a.options, i = o === void 0 ? Jt : o, s = a.plugins, c = s === void 0 ? Nn : s, l = function(f, p, m) {
    return m.startsWith(t) && m.endsWith(t) && m.replaceAll(t, "").length > 0 ? ".".concat(n) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === Mn && f.value.includes("&") && (f.props[0] = f.props[0].replace(Fl, t).replace(e, l));
  }), i.prefix && u.push(ll), u.push(il);
  var d = function(f, p, m, g) {
    p === void 0 && (p = ""), m === void 0 && (m = ""), g === void 0 && (g = "&"), n = g, t = p, e = new RegExp("\\".concat(t, "\\b"), "g");
    var y = f.replace(jl, ""), x = al(m || p ? "".concat(m, " ").concat(p, " { ").concat(y, " }") : y);
    i.namespace && (x = Gi(x, i.namespace));
    var b = [];
    return sn(x, sl(u.concat(cl(function(D) {
      return b.push(D);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(f, p) {
    return p.name || nt(15), Et(f, p.name);
  }, Fi).toString() : "", d;
}
var Hl = new un(), va = Wl(), Qi = w.createContext({ shouldForwardProp: void 0, styleSheet: Hl, stylis: va });
Qi.Consumer;
w.createContext(void 0);
function ya() {
  return Nc(Qi);
}
var Mo = function() {
  function r(n, t) {
    var e = this;
    this.inject = function(a, o) {
      o === void 0 && (o = va);
      var i = e.name + o.hash;
      a.hasNameForId(e.id, i) || a.insertRules(e.id, i, o(e.rules, i, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Ia(this, function() {
      throw nt(12, String(e.name));
    });
  }
  return r.prototype.getName = function(n) {
    return n === void 0 && (n = va), this.name + n.hash;
  }, r;
}(), $l = function(r) {
  return r >= "A" && r <= "Z";
};
function Po(r) {
  for (var n = "", t = 0; t < r.length; t++) {
    var e = r[t];
    if (t === 1 && e === "-" && r[0] === "-") return r;
    $l(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var qi = function(r) {
  return r == null || r === !1 || r === "";
}, Ui = function(r) {
  var n, t, e = [];
  for (var a in r) {
    var o = r[a];
    r.hasOwnProperty(a) && !qi(o) && (Array.isArray(o) && o.isCss || At(o) ? e.push("".concat(Po(a), ":"), o, ";") : er(o) ? e.push.apply(e, It(It(["".concat(a, " {")], Ui(o), !1), ["}"], !1)) : e.push("".concat(Po(a), ": ").concat((n = a, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in ul || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function gt(r, n, t, e) {
  if (qi(r)) return [];
  if (Na(r)) return [".".concat(r.styledComponentId)];
  if (At(r)) {
    if (!At(o = r) || o.prototype && o.prototype.isReactComponent || !n) return [r];
    var a = r(n);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof Mo || er(a) || a === null || console.error("".concat(Hi(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gt(a, n, t, e);
  }
  var o;
  return r instanceof Mo ? t ? (r.inject(t, e), [r.getName(e)]) : [r] : er(r) ? Ui(r) : Array.isArray(r) ? Array.prototype.concat.apply(Nn, r.map(function(i) {
    return gt(i, n, t, e);
  })) : [r.toString()];
}
function Xi(r) {
  for (var n = 0; n < r.length; n += 1) {
    var t = r[n];
    if (At(t) && !Na(t)) return !1;
  }
  return !0;
}
var Bl = ji(Rn), zl = function() {
  function r(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (e === void 0 || e.isStatic) && Xi(n), this.componentId = t, this.baseHash = Et(Bl, t), this.baseStyle = e, un.registerId(t);
  }
  return r.prototype.generateAndInjectStyles = function(n, t, e) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) a = Mt(a, this.staticRulesId);
    else {
      var o = ma(gt(this.rules, n, t, e)), i = ha(Et(this.baseHash, o) >>> 0);
      if (!t.hasNameForId(this.componentId, i)) {
        var s = e(o, ".".concat(i), void 0, this.componentId);
        t.insertRules(this.componentId, i, s);
      }
      a = Mt(a, i), this.staticRulesId = i;
    }
    else {
      for (var c = Et(this.baseHash, e.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = Et(c, d));
        else if (d) {
          var f = ma(gt(d, n, t, e));
          c = Et(c, f + u), l += f;
        }
      }
      if (l) {
        var p = ha(c >>> 0);
        t.hasNameForId(this.componentId, p) || t.insertRules(this.componentId, p, e(l, ".".concat(p), void 0, this.componentId)), a = Mt(a, p);
      }
    }
    return a;
  }, r;
}(), kr = w.createContext(void 0);
kr.Consumer;
function xt(r) {
  var n = w.useContext(kr), t = Ic(function() {
    return function(e, a) {
      if (!e) throw nt(14);
      if (At(e)) {
        var o = e(a);
        if (process.env.NODE_ENV !== "production" && (o === null || Array.isArray(o) || typeof o != "object")) throw nt(7);
        return o;
      }
      if (Array.isArray(e) || typeof e != "object") throw nt(8);
      return a ? ye(ye({}, a), e) : e;
    }(r.theme, n);
  }, [r.theme, n]);
  return r.children ? w.createElement(kr.Provider, { value: t }, r.children) : null;
}
var Zn = {}, Oo = /* @__PURE__ */ new Set();
function Vl(r, n, t) {
  var e = Na(r), a = r, o = !Xn(r), i = n.attrs, s = i === void 0 ? Nn : i, c = n.componentId, l = c === void 0 ? function(k, E) {
    var C = typeof k != "string" ? "sc" : Do(k);
    Zn[C] = (Zn[C] || 0) + 1;
    var _ = "".concat(C, "-").concat(Wi(Rn + C + Zn[C]));
    return E ? "".concat(E, "-").concat(_) : _;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(k) {
    return Xn(k) ? "styled.".concat(k) : "Styled(".concat(Hi(k), ")");
  }(r) : u, f = n.displayName && n.componentId ? "".concat(Do(n.displayName), "-").concat(n.componentId) : n.componentId || l, p = e && a.attrs ? a.attrs.concat(s).filter(Boolean) : s, m = n.shouldForwardProp;
  if (e && a.shouldForwardProp) {
    var g = a.shouldForwardProp;
    if (n.shouldForwardProp) {
      var y = n.shouldForwardProp;
      m = function(k, E) {
        return g(k, E) && y(k, E);
      };
    } else m = g;
  }
  var x = new zl(t, f, e ? a.componentStyle : void 0);
  function b(k, E) {
    return function(C, _, M) {
      var O = C.attrs, P = C.componentStyle, L = C.defaultProps, F = C.foldedComponentIds, $ = C.styledComponentId, H = C.target, K = w.useContext(kr), A = ya(), j = C.shouldForwardProp || A.shouldForwardProp;
      process.env.NODE_ENV !== "production" && po($);
      var W = Yi(_, K, L) || Jt, Z = function($t, et, dt) {
        for (var Fe, je = ye(ye({}, et), { className: void 0, theme: dt }), ft = 0; ft < $t.length; ft += 1) {
          var Bt = At(Fe = $t[ft]) ? Fe(je) : Fe;
          for (var We in Bt) je[We] = We === "className" ? Mt(je[We], Bt[We]) : We === "style" ? ye(ye({}, je[We]), Bt[We]) : Bt[We];
        }
        return et.className && (je.className = Mt(je.className, et.className)), je;
      }(O, _, W), pe = Z.as || H, he = {};
      for (var ke in Z) Z[ke] === void 0 || ke[0] === "$" || ke === "as" || ke === "theme" && Z.theme === W || (ke === "forwardedAs" ? he.as = Z.forwardedAs : j && !j(ke, pe) || (he[ke] = Z[ke], j || process.env.NODE_ENV !== "development" || Vc(ke) || Oo.has(ke) || !pa.has(pe) || (Oo.add(ke), console.warn('styled-components: it looks like an unknown prop "'.concat(ke, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ht = function($t, et) {
        var dt = ya(), Fe = $t.generateAndInjectStyles(et, dt.styleSheet, dt.stylis);
        return process.env.NODE_ENV !== "production" && po(Fe), Fe;
      }(P, Z);
      process.env.NODE_ENV !== "production" && C.warnTooManyClasses && C.warnTooManyClasses(Ht);
      var ur = Mt(F, $);
      return Ht && (ur += " " + Ht), Z.className && (ur += " " + Z.className), he[Xn(pe) && !pa.has(pe) ? "class" : "className"] = ur, M && (he.ref = M), _i(pe, he);
    }(D, k, E);
  }
  b.displayName = d;
  var D = w.forwardRef(b);
  return D.attrs = p, D.componentStyle = x, D.displayName = d, D.shouldForwardProp = m, D.foldedComponentIds = e ? Mt(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = f, D.target = e ? a.target : r, Object.defineProperty(D, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = e ? function(E) {
      for (var C = [], _ = 1; _ < arguments.length; _++) C[_ - 1] = arguments[_];
      for (var M = 0, O = C; M < O.length; M++) ga(E, O[M], !0);
      return E;
    }({}, a.defaultProps, k) : k;
  } }), process.env.NODE_ENV !== "production" && (Ai(d, f), D.warnTooManyClasses = /* @__PURE__ */ function(k, E) {
    var C = {}, _ = !1;
    return function(M) {
      if (!_ && (C[M] = !0, Object.keys(C).length >= 200)) {
        var O = E ? ' with the id of "'.concat(E, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(O, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, C = {};
      }
    };
  }(d, f)), Ia(D, function() {
    return ".".concat(D.styledComponentId);
  }), o && Vi(D, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), D;
}
function To(r, n) {
  for (var t = [r[0]], e = 0, a = n.length; e < a; e += 1) t.push(n[e], r[e + 1]);
  return t;
}
var Ro = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function Zi(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (At(r) || er(r)) return Ro(gt(To(Nn, It([r], n, !0))));
  var e = r;
  return n.length === 0 && e.length === 1 && typeof e[0] == "string" ? gt(e) : Ro(gt(To(e, n)));
}
function wa(r, n, t) {
  if (t === void 0 && (t = Jt), !n) throw nt(1, n);
  var e = function(a) {
    for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
    return r(n, t, Zi.apply(void 0, It([a], o, !1)));
  };
  return e.attrs = function(a) {
    return wa(r, n, ye(ye({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, e.withConfig = function(a) {
    return wa(r, n, ye(ye({}, t), a));
  }, e;
}
var Ji = function(r) {
  return wa(Vl, r);
}, z = Ji;
pa.forEach(function(r) {
  z[r] = Ji(r);
});
var Kl = function() {
  function r(n, t) {
    this.rules = n, this.componentId = t, this.isStatic = Xi(n), un.registerId(this.componentId + 1);
  }
  return r.prototype.createStyles = function(n, t, e, a) {
    var o = a(ma(gt(this.rules, t, e, a)), ""), i = this.componentId + n;
    e.insertRules(i, i, o);
  }, r.prototype.removeStyles = function(n, t) {
    t.clearRules(this.componentId + n);
  }, r.prototype.renderStyles = function(n, t, e, a) {
    n > 2 && un.registerId(this.componentId + n), this.removeStyles(n, e), this.createStyles(n, t, e, a);
  }, r;
}();
function Gl(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  var e = Zi.apply(void 0, It([r], n, !1)), a = "sc-global-".concat(Wi(JSON.stringify(e))), o = new Kl(e, a);
  process.env.NODE_ENV !== "production" && Ai(a);
  var i = function(c) {
    var l = ya(), u = w.useContext(kr), d = w.useRef(l.styleSheet.allocateGSInstance(a)).current;
    return process.env.NODE_ENV !== "production" && w.Children.count(c.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && e.some(function(f) {
      return typeof f == "string" && f.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.styleSheet.server && s(d, c, l.styleSheet, u, l.stylis), w.useLayoutEffect(function() {
      if (!l.styleSheet.server) return s(d, c, l.styleSheet, u, l.stylis), function() {
        return o.removeStyles(d, l.styleSheet);
      };
    }, [d, c, l.styleSheet, u, l.stylis]), null;
  };
  function s(c, l, u, d, f) {
    if (o.isStatic) o.renderStyles(c, fl, u, f);
    else {
      var p = ye(ye({}, l), { theme: Yi(l, d, i.defaultProps) });
      o.renderStyles(c, p, u, f);
    }
  }
  return w.memo(i);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jr = "__sc-".concat(Lt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
var es = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, No = w.createContext && /* @__PURE__ */ w.createContext(es), Ql = ["attr", "size", "title"];
function ql(r, n) {
  if (r == null) return {};
  var t = Ul(r, n), e, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      e = o[a], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(r, e) && (t[e] = r[e]);
  }
  return t;
}
function Ul(r, n) {
  if (r == null) return {};
  var t = {};
  for (var e in r)
    if (Object.prototype.hasOwnProperty.call(r, e)) {
      if (n.indexOf(e) >= 0) continue;
      t[e] = r[e];
    }
  return t;
}
function dn() {
  return dn = Object.assign ? Object.assign.bind() : function(r) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
    }
    return r;
  }, dn.apply(this, arguments);
}
function Io(r, n) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(r);
    n && (e = e.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function fn(r) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Io(Object(t), !0).forEach(function(e) {
      Xl(r, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Io(Object(t)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return r;
}
function Xl(r, n, t) {
  return n = Zl(n), n in r ? Object.defineProperty(r, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = t, r;
}
function Zl(r) {
  var n = Jl(r, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Jl(r, n) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var e = t.call(r, n);
    if (typeof e != "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(r);
}
function ts(r) {
  return r && r.map((n, t) => /* @__PURE__ */ w.createElement(n.tag, fn({
    key: t
  }, n.attr), ts(n.child)));
}
function Me(r) {
  return (n) => /* @__PURE__ */ w.createElement(eu, dn({
    attr: fn({}, r.attr)
  }, n), ts(r.child));
}
function eu(r) {
  var n = (t) => {
    var {
      attr: e,
      size: a,
      title: o
    } = r, i = ql(r, Ql), s = a || t.size || "1em", c;
    return t.className && (c = t.className), r.className && (c = (c ? c + " " : "") + r.className), /* @__PURE__ */ w.createElement("svg", dn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, e, i, {
      className: c,
      style: fn(fn({
        color: r.color || t.color
      }, t.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ w.createElement("title", null, o), r.children);
  };
  return No !== void 0 ? /* @__PURE__ */ w.createElement(No.Consumer, null, (t) => n(t)) : n(es);
}
function tu(r) {
  return Me({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(r);
}
function La(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(r);
}
function rs(r) {
  return Me({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(r);
}
function ru(r) {
  return Me({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(r);
}
function ns(r) {
  return Me({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(r);
}
function nu(r) {
  return Me({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }, child: [] }] })(r);
}
function au(r) {
  return Me({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z" }, child: [] }] })(r);
}
function as(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(r);
}
function ou(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(r);
}
function os(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(r);
}
function is(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(r);
}
function ss(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(r);
}
function Jn(r) {
  return Me({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(r);
}
function cs(r) {
  return Me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(r);
}
const In = z.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px; 
  min-height: 24px;
  padding: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  color: ${(r) => r.theme.colors.font}; /* ✅ 테마 적용 */
  background-color: ${(r) => r.theme.colors.second}; /* ✅ 테마 적용 */

  &:hover {
    background-color: ${(r) => r.theme.colors.secondHover}; /* ✅ 테마 적용 */
    color: ${(r) => r.theme.colors.font}; /* ✅ 테마 적용 */
  }
`, iu = z.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: auto;
  display: inline-block;
  visibility: visible;
  opacity: 1;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 3px;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }
`, ls = z.input.attrs({ type: "text" })`
  display: flex;
  align-items: center;
  width: 85%;
  padding: 8px;
  height : 11px;
  border: 1px solid ${({ theme: r }) => r.colors.second};
  border-radius: 5px;
  font-size: 14px;
  color: ${({ theme: r }) => r.colors.font};
  background-color: ${({ theme: r }) => r.colors.prime};

  &:focus {
    outline: none;
    border-color: ${({ theme: r }) => r.colors.fourth};
    box-shadow: 0 0 4px ${({ theme: r }) => r.colors.fourth};
  }
`, su = z.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  gap: 6px;
`, us = z.div`
  position: fixed;
  z-index: 9999;
  width: 192px;
  border: 1px solid ${(r) => r.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(r) => r.theme.colors.prime};
  color: ${(r) => r.theme.colors.font};
  transform: translate(0, 5px);
`, ds = z.label`
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(r) => r.theme.colors.backgroundLight || "#f3f4f6"};
  border-bottom: 1px solid ${(r) => r.theme.colors.second || "#d1d5db"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: ${(r) => r.theme.colors.text || "#374151"};
`, fs = z.ul`
  font-size: 14px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
`, ps = z.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${(r) => r.disabled ? "not-allowed" : "pointer"};
  opacity: ${(r) => r.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${(r) => r.disabled ? "inherit" : r.theme.colors.primeHover};
  }
`, hs = z.hr`
  border-top: 1px solid ${(r) => r.theme.colors.second};
  margin: 4px 0;
`, ms = z.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`, cu = z.div`  
  width: 100%;  
  height: 100%; 
  display: flex;
  flex-direction: column;  
  background-color: ${(r) => r.theme.colors.background}; 
  color: ${(r) => r.theme.colors.font};
  overflow: hidden; 
`, lu = z.div`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  width: 100%;  
  overflow-x: auto;
  overflow-y: auto;    
`, uu = z.table`    
  width: 100%;
  height: 100%;
  table-layout: fixed; /* ✅ 테이블이 부모 크기에 맞춰짐 */
  border-collapse: collapse;
  background-color: ${(r) => r.theme.colors.background};
  color: ${(r) => r.theme.colors.font};   
  table-layout: auto; 
`, gs = z(In)`
  width: 24px;
  height: 24px;
  background-color: ${(r) => r.theme.colors.fourth}; /* ✅ 기본 배경색 */
  color: ${(r) => r.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(r) => r.theme.colors.active}; /* ✅ hover 스타일 */
  }
`, vs = z(In)`
  width: 24px;
  height: 24px;
  background-color: ${(r) => r.theme.colors.third}; /* ✅ 기본 배경색 */
  color: ${(r) => r.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(r) => r.theme.colors.active}; /* ✅ hover 스타일 */
  }
`, du = z.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(r) => r.theme.colors.prime};
  color: ${(r) => r.theme.colors.font};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* ✅ 스크롤 시에도 그림자로 구분 */
    
`, fu = z.tr`
  background-color: ${(r) => r.theme.colors.second};
  color: ${(r) => r.theme.colors.font};  
`, Wr = z.th`
  position: ${(r) => r.sticky ? "sticky" : "relative"};
  ${(r) => r.sticky === "left" && `left: 0; background-color: ${r.theme.colors.prime};`}
  ${(r) => r.sticky === "right" && `right: 0; background-color: ${r.theme.colors.prime};`}
  text-align: left;
  padding: 5px;  
  width: ${(r) => r.width ? `${r.width}px` : "auto"};
  min-width: ${(r) => r.width ? `${r.width}px` : "50px"};
  border-right: 1px solid ${(r) => r.theme.colors.primeHover};
  background-color: ${(r) => r.theme.colors.second};
  font-weight: bold;
`, pu = z.tr`
  position: "sticky";
  background-color: ${(r) => r.theme.colors.primeHover};
  border-bottom: 1px solid ${(r) => r.theme.colors.font};
`, hu = z.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${(r) => r.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`, mu = z.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`, gu = z.tbody`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  overflow-y: auto;  
`, vu = z.tr`
  height: 80%;
  border-bottom: 1px solid ${(r) => r.theme.colors.secondHover};  
`, Jr = z.td`
  padding: 5px;
  border-bottom: 1px solid ${(r) => r.theme.colors.secondHover};
  font-weight: ${(r) => r.$isEdited ? "bold" : "normal"};
  color: ${(r) => r.$isEdited ? r.theme.colors.third : "inherit"};
  
  white-space: nowrap; /* 줄 바꿈 방지, 내용이 길면 셀 크기 증가 */
  min-width: max-content; /* 내용에 맞게 최소 크기 조정 */
  
`, yu = z.tr`
  background-color: ${(r) => r.theme.colors.secondHover};
  cursor: pointer;
  border-bottom: 2px solid ${(r) => r.theme.colors.second};
`, wu = z.td`
  padding: 5px;
  font-weight: bold;
  border-bottom: 2px solid ${(r) => r.theme.colors.second};
`, bu = z.div`
  display: flex;
  align-items: center;
  padding: 2px;
  gap: 8px;
  white-space: nowrap;
`;
z.div`
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  height: 40px; /* ✅ GridPagination 높이 설정 */    
`;
const Lo = (r) => r.__group === !0, ys = (r) => r.map((n, t) => ({
  ...n,
  rowKey: n.rowKey ?? ws(t)
})), ws = (r) => `row-${Date.now()}-${Math.random()}-${r}`, bs = (r, n, t) => t ? [...r].sort((e, a) => {
  const o = e[n], i = a[n];
  if (o == null || i == null) return 0;
  if (typeof o == "number" && typeof i == "number")
    return t === "asc" ? o - i : i - o;
  const s = String(o).toLowerCase(), c = String(i).toLowerCase();
  return t === "asc" ? s.localeCompare(c) : c.localeCompare(s);
}) : [...r], Du = (r, n, t) => [...r].sort((e, a) => {
  let o = 0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i], c = t, l = e[s] ?? "", u = a[s] ?? "";
    if (typeof l == "number" && typeof u == "number" ? o = l - u : o = String(l).localeCompare(String(u)), c === "desc" && (o = -o), o !== 0) return o;
  }
  return o;
}), pn = (r, n, t = /* @__PURE__ */ new Set(), e = 0) => {
  if (n.length === e) return r;
  const a = n[e], o = [], i = /* @__PURE__ */ new Map();
  return r.forEach((s) => {
    const c = String(s[a]);
    i.has(c) || i.set(c, {
      __group: !0,
      __groupKey: c,
      __children: [],
      __groupLevel: e
    }), i.get(c).__children.push(s);
  }), i.forEach((s) => {
    s.__children = pn(s.__children, n, t, e + 1), o.push(s), t.has(s.__groupKey) && !o.includes(s) && o.push(...s.__children);
  }), o;
}, xu = (r, n) => r.filter(
  (t) => Object.entries(n).every(([e, a]) => a ? String(t[e]).toLowerCase().includes(a.toLowerCase()) : !0)
), Aa = (r, n, t, e) => {
  const a = (n - 1) * t, o = a + t;
  let i = [...r];
  return (e == null ? void 0 : e.group) !== void 0 && (i = Du(
    i,
    e == null ? void 0 : e.group.column,
    (e == null ? void 0 : e.sortDirection) === void 0 ? "asc" : e == null ? void 0 : e.sortDirection
  )), i.slice(a, o);
}, tt = (r) => {
  let n = [...r.originalData];
  return Object.keys(r.filters).length > 0 && (n = xu(n, r.filters)), r.sortedColumn && r.sortDirection && (n = bs(n, r.sortedColumn, r.sortDirection)), r.pagingable && (n = Aa(
    n,
    r.pagenate.currentPage,
    r.pagenate.pageSize,
    r
  )), r.group.column.length > 0 && (n = pn(n, r.group.column, r.group.expanded)), {
    ...r,
    data: n
  };
}, ku = (r) => {
  if (r.length === 0) {
    console.warn("데이터가 없습니다.");
    return;
  }
  const n = ["rowKey"], t = r.map((o) => {
    const i = { ...o };
    return n.forEach((s) => delete i[s]), i;
  }), e = Ir.utils.json_to_sheet(t), a = Ir.utils.book_new();
  Ir.utils.book_append_sheet(a, e, "Sheet1"), Ir.writeFile(a, "export.xlsx");
}, _u = (r) => {
  if (r.length === 0) {
    console.warn("데이터가 없습니다.");
    return;
  }
  const n = ["rowKey"], t = new Ac(), e = Object.keys(r[0]).filter((o) => !n.includes(o)), a = r.map((o) => e.map((i) => o[i]));
  Yc(t, {
    head: [e.map(String)],
    // 컬럼명
    body: a
    // 데이터
  }), t.save("export.pdf");
}, Su = ({
  menuPosition: r,
  options: n,
  onClose: t,
  reducer: e,
  style: a
}) => {
  var f, p, m, g, y, x, b;
  const o = Xe(null), { filters: i, sortedColumn: s, sortDirection: c, group: l, activeExportSurport: u } = e == null ? void 0 : e.state;
  if (Le(() => {
    const D = (k) => {
      o.current && !o.current.contains(k.target) && t();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [t]), !r || !n) return null;
  const d = [
    /** Export Support */
    u && {
      label: "Excel Export",
      icon: /* @__PURE__ */ v.jsx(nu, { style: { color: "green", fontSize: "14px" } }),
      onClick: () => ku(e == null ? void 0 : e.state.originalData)
    },
    u && {
      label: "PDF Export",
      icon: /* @__PURE__ */ v.jsx(au, { style: { color: "red", fontSize: "14px" } }),
      onClick: () => _u(e == null ? void 0 : e.state.originalData)
    },
    u && { divider: !0 },
    /** Sort Part */
    n.sortable && r.column.sortable && {
      label: ((f = n.contextMenuLabels) == null ? void 0 : f.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ v.jsx(ss, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort(r.column.key, "asc"),
      disabled: s === r.column.key && c === "asc"
    },
    n.sortable && r.column.sortable && {
      label: ((p = n.contextMenuLabels) == null ? void 0 : p.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ v.jsx(is, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort(r.column.key, "desc"),
      disabled: s === r.column.key && c === "desc"
    },
    n.sortable && r.column.sortable && {
      label: ((m = n.contextMenuLabels) == null ? void 0 : m.clearSort) || "정렬 해제",
      icon: /* @__PURE__ */ v.jsx(Jn, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort("", null),
      disabled: s !== r.column.key
    },
    n.sortable && r.column.sortable && n.grouping && { divider: !0 },
    /** Group Part */
    n.grouping && {
      label: ((g = n.contextMenuLabels) == null ? void 0 : g.group) || "그룹화",
      icon: /* @__PURE__ */ v.jsx(os, { style: { color: "#16A34A", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setGroup(r.column.key),
      disabled: Array.isArray(l == null ? void 0 : l.column) && l.column.includes(r.column.key)
    },
    n.grouping && {
      label: ((y = n.contextMenuLabels) == null ? void 0 : y.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ v.jsx(Jn, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.removeGroup(r.column.key),
      disabled: Array.isArray(l == null ? void 0 : l.column) && !l.column.includes(r.column.key)
    },
    (n.grouping || n.sortable) && n.filterable && r.column.filterable && { divider: !0 },
    /** Filter Part */
    n.filterable && r.column.filterable && {
      label: ((x = n.contextMenuLabels) == null ? void 0 : x.filter) || "필터",
      icon: /* @__PURE__ */ v.jsx(as, { style: { color: "#D97706", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setFilter({ [r.column.key]: "" }),
      disabled: Array.isArray(i == null ? void 0 : i.column) && i.column.includes(r.column.key)
    },
    n.filterable && r.column.filterable && {
      label: ((b = n.contextMenuLabels) == null ? void 0 : b.clearFilter) || "필터 해제",
      icon: /* @__PURE__ */ v.jsx(Jn, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.clearFilter(r.column.key),
      disabled: Array.isArray(i == null ? void 0 : i.column) && !i.column.includes(r.column.key)
    }
  ].filter(Boolean);
  return /* @__PURE__ */ v.jsxs(us, { ref: o, style: { ...a, top: `${r.y}px`, left: `${r.x}px` }, children: [
    /* @__PURE__ */ v.jsx(ds, { children: r.column.label }),
    /* @__PURE__ */ v.jsx(fs, { children: d.map(
      (D, k) => D.divider ? /* @__PURE__ */ v.jsx(hs, {}, `divider-${k}`) : /* @__PURE__ */ v.jsxs(
        ps,
        {
          disabled: D.disabled,
          onClick: () => {
            !D.disabled && D.onClick && D.onClick(), t();
          },
          children: [
            D.icon && /* @__PURE__ */ v.jsx(ms, { children: D.icon }),
            /* @__PURE__ */ v.jsx("span", { children: D.label })
          ]
        },
        k
      )
    ) })
  ] });
}, Cu = ({
  columns: r,
  showRowNumCol: n,
  showRowCheckboxCol: t,
  options: e,
  reducer: a,
  editedRows: o,
  style: i
}) => {
  const [s, c] = Ce(null), { filters: l, sortedColumn: u, sortDirection: d, group: f } = a.state, p = (g, y) => {
    g.preventDefault(), e && c({ x: g.clientX, y: g.clientY, column: y });
  }, m = () => c(null);
  return /* @__PURE__ */ v.jsxs(du, { style: i, children: [
    /* @__PURE__ */ v.jsxs(fu, { children: [
      o && Object.keys(o).length > 0 && /* @__PURE__ */ v.jsx(Wr, { width: 40, children: /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
        /* @__PURE__ */ v.jsx(gs, { onClick: a.applyAllChanges, children: /* @__PURE__ */ v.jsx(La, {}) }),
        /* @__PURE__ */ v.jsx(vs, { onClick: a.resetAllChanges, children: /* @__PURE__ */ v.jsx(cs, {}) })
      ] }) }),
      n && /* @__PURE__ */ v.jsx(Wr, { width: 40, children: "No." }),
      t && /* @__PURE__ */ v.jsx(Wr, { width: 40, children: "✔" }),
      r.map((g) => {
        var y;
        return /* @__PURE__ */ v.jsx(Wr, { width: g.width, sticky: g.sticky, onContextMenu: (x) => p(x, g), children: /* @__PURE__ */ v.jsxs(mu, { children: [
          /* @__PURE__ */ v.jsx("span", { children: g.label }),
          g.sortable && u === g.key && d !== null && (d === "asc" ? /* @__PURE__ */ v.jsx(ss, { style: { color: "#2563EB", fontSize: "10px" } }) : /* @__PURE__ */ v.jsx(is, { style: { color: "#2563EB", fontSize: "10px" } })),
          ((y = f.column) == null ? void 0 : y.includes(g.key)) && /* @__PURE__ */ v.jsx(os, { style: { color: "#16A34A", fontSize: "10px" } }),
          (e == null ? void 0 : e.filterable) && l[g.key] !== void 0 && /* @__PURE__ */ v.jsx(as, { style: { color: "#D97706", fontSize: "10px" } })
        ] }) }, g.key);
      })
    ] }),
    r.some((g) => (e == null ? void 0 : e.filterable) && l[g.key] !== void 0) && /* @__PURE__ */ v.jsxs(pu, { children: [
      n && /* @__PURE__ */ v.jsx("td", { style: { padding: "8px" }, children: " " }),
      t && /* @__PURE__ */ v.jsx("td", { style: { padding: "8px" }, children: " " }),
      r.map((g) => /* @__PURE__ */ v.jsx("td", { style: { padding: "8px" }, children: g.filterable && l[g.key] !== void 0 && /* @__PURE__ */ v.jsx(
        hu,
        {
          type: "text",
          value: l[g.key] || "",
          onChange: (y) => a.setFilter({ ...l, [g.key]: y.target.value }),
          placeholder: "필터 입력..."
        }
      ) }, g.key))
    ] }),
    e && /* @__PURE__ */ v.jsx(
      Su,
      {
        menuPosition: s,
        options: e,
        onClose: m,
        reducer: a
      }
    )
  ] });
};
function Eu(r) {
  return Me({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" }, child: [] }] })(r);
}
const Mu = ({
  menuPosition: r,
  onClose: n,
  reducer: t,
  style: e
}) => {
  const a = Xe(null);
  if (Le(() => {
    const i = (s) => {
      a.current && !a.current.contains(s.target) && n();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [n]), !r) return null;
  const o = [
    /** Row Add/Delete Support */
    {
      label: "Add Row",
      icon: /* @__PURE__ */ v.jsx(Eu, { style: { color: "green", fontSize: "14px" } }),
      onClick: () => t.addRow()
    }
  ].filter(Boolean);
  return Pa(
    /* @__PURE__ */ v.jsxs(
      us,
      {
        ref: a,
        style: {
          ...e,
          position: "absolute",
          top: `${r.y}px`,
          left: `${r.x}px`,
          zIndex: 1e3
        },
        children: [
          /* @__PURE__ */ v.jsx(ds, { children: "" }),
          /* @__PURE__ */ v.jsx(fs, { children: o.map(
            (i, s) => i.divider ? /* @__PURE__ */ v.jsx(hs, {}, `divider-${s}`) : /* @__PURE__ */ v.jsxs(
              ps,
              {
                disabled: i.disabled,
                onClick: () => {
                  !i.disabled && i.onClick && i.onClick(), n();
                },
                children: [
                  i.icon && /* @__PURE__ */ v.jsx(ms, { children: i.icon }),
                  /* @__PURE__ */ v.jsx("span", { children: i.label })
                ]
              },
              s
            )
          ) })
        ]
      }
    ),
    document.body
    // ✅ <body>에 추가하여 <table> 내부에서 벗어남!
  );
}, kt = {
  colors: {
    background: "#F9FAFB",
    font: "#111827",
    fontEdited: "#FF4500",
    prime: "#F9FAFB",
    primeHover: "#D6D6DA",
    second: "#e3e4e6",
    secondHover: "#D6D6DA",
    third: "#EF4444",
    thirdHover: "#DC2626",
    fourth: "#3B82F6",
    fourthHover: "#60A5FA",
    active: "#9fd0f1"
  }
}, _t = Gl`
  body, html {
    height: 100%;
  }

  body {
    background-color: ${(r) => r.theme.colors.background};
    color: ${(r) => r.theme.colors.font};
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    word-spacing: 2px;
    text-align: left;
    visibility: visible;
  }
`, xr = ({
  apply: r,
  children: n,
  ...t
}) => /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
  /* @__PURE__ */ v.jsx(_t, {}),
  /* @__PURE__ */ v.jsx(
    In,
    {
      ...t,
      style: {
        ...t.style
      },
      children: n
    }
  )
] }), Ds = ({
  id: r,
  apply: n,
  children: t,
  onChange: e,
  checked: a,
  ...o
}) => {
  const [i, s] = Ce(!!a);
  Le(() => {
    s(!!a);
  }, [a]);
  const c = (l) => {
    const u = !i;
    if (s(u), e) {
      const d = Object.assign({}, l, {
        target: { ...l.target, checked: u, rowKey: r }
        // ✅ checked 값 덮어쓰기
      });
      e(d);
    }
  };
  return /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsx(
      iu,
      {
        ...o,
        style: {
          ...o.style
        },
        type: "checkbox",
        checked: i,
        onChange: c,
        children: t
      }
    )
  ] });
}, Pu = (r, n) => ({
  isOpen: !1,
  options: r,
  selectedItem: r.find((t) => t.key === n)
});
function Ou(r, n) {
  switch (n.type) {
    case "SET_OPTIONS":
      return {
        ...r,
        options: n.options
      };
    case "SET_IS_OPEN":
      return {
        ...r,
        isOpen: n.isOpen
      };
    case "SELECT_ITEM":
      return {
        ...r,
        selectedItem: n.item,
        isOpen: n.isOpen
      };
    default:
      return r;
  }
}
function Tu(r, n) {
  const [t, e] = Ea(Ou, Pu(r, n));
  return {
    state: t,
    setOptions: (s) => {
      e({
        type: "SET_OPTIONS",
        options: s
      });
    },
    selectItem: (s) => {
      e({
        type: "SELECT_ITEM",
        item: s,
        isOpen: !1
      });
    },
    setIsOpen: (s) => {
      e({
        type: "SET_IS_OPEN",
        isOpen: s
      });
    }
  };
}
const Ru = z.div`
  position: relative;  
`, Nu = z.button`
  display: flex;
  align-items: center;  
  padding: 4px;
  height: 35px;
  font-size: 14px;
  border: 1px solid ${({ theme: r }) => r.colors.second};
  border-radius: 5px;
  background: ${({ theme: r }) => r.colors.prime};
  color: ${({ theme: r }) => r.colors.font};
  width: 90%;
      &:focus {
    outline: none;
    border-color: ${({ theme: r }) => r.colors.fourth};
    box-shadow: 0 0 4px ${({ theme: r }) => r.colors.fourth};
  }
`, Iu = z.div`
  position: absolute;
  left: 0;
  margin-top: 4px;  
  width: 144px;
  border: 1px solid ${({ theme: r }) => r.colors.second};
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${({ theme: r }) => r.colors.prime};
  color: ${({ theme: r }) => r.colors.font};  
`, Lu = z.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: r }) => r.colors.primeHover};
  }
`;
z.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid gray;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background: ${({ color: r, theme: n }) => r || n.colors.background};
`;
const Au = (r, n) => {
  let t = [];
  return n === !0 ? t = [{ key: "all", value: "ALL" }, ...r] : t = r, t;
}, Ao = (r, n) => n === void 0 ? r : n(r), Ya = En(
  ({
    id: r,
    options: n,
    isActiveAll: t,
    value: e,
    onChange: a,
    onTranslate: o,
    style: i,
    defualtKey: s
  }, c) => {
    var m;
    const l = Tu(
      Au(n, t),
      s
    ), u = Xe(null), d = Xe(null), [f, p] = Ce({
      top: 0,
      left: 0,
      width: 0
    });
    return Le(() => {
      if (e !== void 0) {
        const g = l.state.options.find((y) => y.key === e);
        g ? l.selectItem(g) : l.selectItem(void 0);
      }
    }, [e, l.state.options]), Le(() => {
      const g = (y) => {
        u.current && !u.current.contains(y.target) && d.current && !d.current.contains(y.target) && l.setIsOpen(!1);
      };
      return l.state.isOpen && (window.addEventListener("click", g), setTimeout(() => {
        if (d.current) {
          const y = d.current.getBoundingClientRect();
          p({
            top: y.bottom + window.scrollY,
            left: y.left + window.scrollX,
            width: y.width
          });
        }
      }, 0)), () => {
        window.removeEventListener("click", g);
      };
    }, [l.state.isOpen]), Si(c, () => u.current, []), /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
      /* @__PURE__ */ v.jsx(_t, {}),
      /* @__PURE__ */ v.jsxs(Ru, { children: [
        /* @__PURE__ */ v.jsxs(
          Nu,
          {
            ref: d,
            id: r,
            onClick: () => l.setIsOpen(!l.state.isOpen),
            style: { height: "30px", ...i },
            children: [
              /* @__PURE__ */ v.jsx(
                "span",
                {
                  style: {
                    flexGrow: 1,
                    textAlign: "left",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: Ao(
                    ((m = l.state.selectedItem) == null ? void 0 : m.value) ?? "",
                    o
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(rs, { style: { width: 12, height: 12, flexShrink: 0 } })
            ]
          }
        ),
        l.state.isOpen && Pa(
          /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
            Iu,
            {
              ref: u,
              style: {
                position: "absolute",
                top: `${f.top}px`,
                left: `${f.left}px`,
                width: `${f.width}px`,
                zIndex: 9999
              },
              children: l.state.options.map((g) => /* @__PURE__ */ v.jsx(
                Lu,
                {
                  onClick: () => {
                    l.selectItem(g), a == null || a(g), l.setIsOpen(!1);
                  },
                  children: Ao(
                    g.value,
                    o
                  )
                },
                g.key
              ))
            }
          ) }),
          document.body
        )
      ] })
    ] });
  }
);
Ya.displayName = "DropDownBox";
function xs(r) {
  var n, t, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (n = 0; n < a; n++) r[n] && (t = xs(r[n])) && (e && (e += " "), e += t);
  } else for (t in r) r[t] && (e && (e += " "), e += t);
  return e;
}
function De() {
  for (var r, n, t = 0, e = "", a = arguments.length; t < a; t++) (r = arguments[t]) && (n = xs(r)) && (e && (e += " "), e += n);
  return e;
}
const ks = 6048e5, Yu = 864e5, Ln = 6e4, An = 36e5, Fu = 1e3, Yo = Symbol.for("constructDateFrom");
function ae(r, n) {
  return typeof r == "function" ? r(n) : r && typeof r == "object" && Yo in r ? r[Yo](n) : r instanceof Date ? new r.constructor(n) : new Date(n);
}
function I(r, n) {
  return ae(n || r, r);
}
function $e(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return isNaN(n) ? ae((t == null ? void 0 : t.in) || r, NaN) : (n && e.setDate(e.getDate() + n), e);
}
function Be(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  if (isNaN(n)) return ae(r, NaN);
  if (!n)
    return e;
  const a = e.getDate(), o = ae(r, e.getTime());
  o.setMonth(e.getMonth() + n + 1, 0);
  const i = o.getDate();
  return a >= i ? o : (e.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    a
  ), e);
}
function _s(r, n, t) {
  return ae(r, +I(r) + n);
}
function ju(r, n, t) {
  return _s(r, n * An);
}
let Wu = {};
function Wt() {
  return Wu;
}
function lt(r, n) {
  var s, c, l, u;
  const t = Wt(), e = (n == null ? void 0 : n.weekStartsOn) ?? ((c = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = I(r, n == null ? void 0 : n.in), o = a.getDay(), i = (o < e ? 7 : 0) + o - e;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function tr(r, n) {
  return lt(r, { ...n, weekStartsOn: 1 });
}
function Ss(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = ae(t, 0);
  a.setFullYear(e + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = tr(a), i = ae(t, 0);
  i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0);
  const s = tr(i);
  return t.getTime() >= o.getTime() ? e + 1 : t.getTime() >= s.getTime() ? e : e - 1;
}
function hn(r) {
  const n = I(r), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +r - +t;
}
function ut(r, ...n) {
  const t = ae.bind(
    null,
    n.find((e) => typeof e == "object")
  );
  return n.map(t);
}
function Yt(r, n) {
  const t = I(r, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function rr(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = Yt(e), i = Yt(a), s = +o - hn(o), c = +i - hn(i);
  return Math.round((s - c) / Yu);
}
function Hu(r, n) {
  const t = Ss(r, n), e = ae(r, 0);
  return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), tr(e);
}
function ba(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setTime(e.getTime() + n * Ln), e;
}
function Fa(r, n, t) {
  return Be(r, n * 3, t);
}
function $u(r, n, t) {
  return _s(r, n * 1e3);
}
function mn(r, n, t) {
  return $e(r, n * 7, t);
}
function at(r, n, t) {
  return Be(r, n * 12, t);
}
function Fo(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = ae.bind(null, a));
    const o = I(a, e);
    (!t || t < o || isNaN(+o)) && (t = o);
  }), ae(e, t || NaN);
}
function jo(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = ae.bind(null, a));
    const o = I(a, e);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), ae(e, t || NaN);
}
function Bu(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +Yt(e) == +Yt(a);
}
function ot(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function gn(r) {
  return !(!ot(r) && typeof r != "number" || isNaN(+I(r)));
}
function vn(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), i = e.getMonth() - a.getMonth();
  return o * 12 + i;
}
function Tt(r, n) {
  const t = I(r, n == null ? void 0 : n.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function yn(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), i = Tt(e) - Tt(a);
  return o * 4 + i;
}
function wn(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() - a.getFullYear();
}
function zu(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = Wo(e, a), i = Math.abs(
    rr(e, a)
  );
  e.setDate(e.getDate() - o * i);
  const s = +(Wo(e, a) === -o), c = o * (i - s);
  return c === 0 ? 0 : c;
}
function Wo(r, n) {
  const t = r.getFullYear() - n.getFullYear() || r.getMonth() - n.getMonth() || r.getDate() - n.getDate() || r.getHours() - n.getHours() || r.getMinutes() - n.getMinutes() || r.getSeconds() - n.getSeconds() || r.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Cs(r, n) {
  const t = I(r, n == null ? void 0 : n.in);
  return t.setHours(23, 59, 59, 999), t;
}
function Es(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Da(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = t.getMonth(), a = e - e % 3;
  return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
function Ms(r, n) {
  const t = I(r, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ps(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Yn(r, n) {
  const t = I(r, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Vu(r, n) {
  var s, c;
  const t = Wt(), e = t.weekStartsOn ?? ((c = (s = t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = I(r, n == null ? void 0 : n.in), o = a.getDay(), i = (o < e ? -7 : 0) + 6 - (o - e);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
const Ku = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Gu = (r, n, t) => {
  let e;
  const a = Ku[r];
  return typeof a == "string" ? e = a : n === 1 ? e = a.one : e = a.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function ea(r) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[t] || r.formats[r.defaultWidth];
  };
}
const Qu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Uu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xu = {
  date: ea({
    formats: Qu,
    defaultWidth: "full"
  }),
  time: ea({
    formats: qu,
    defaultWidth: "full"
  }),
  dateTime: ea({
    formats: Uu,
    defaultWidth: "full"
  })
}, Zu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ju = (r, n, t, e) => Zu[r];
function hr(r) {
  return (n, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let a;
    if (e === "formatting" && r.formattingValues) {
      const i = r.defaultFormattingWidth || r.defaultWidth, s = t != null && t.width ? String(t.width) : i;
      a = r.formattingValues[s] || r.formattingValues[i];
    } else {
      const i = r.defaultWidth, s = t != null && t.width ? String(t.width) : r.defaultWidth;
      a = r.values[s] || r.values[i];
    }
    const o = r.argumentCallback ? r.argumentCallback(n) : n;
    return a[o];
  };
}
const ed = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, td = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rd = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, nd = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, ad = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, od = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, id = (r, n) => {
  const t = Number(r), e = t % 100;
  if (e > 20 || e < 10)
    switch (e % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, sd = {
  ordinalNumber: id,
  era: hr({
    values: ed,
    defaultWidth: "wide"
  }),
  quarter: hr({
    values: td,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: hr({
    values: rd,
    defaultWidth: "wide"
  }),
  day: hr({
    values: nd,
    defaultWidth: "wide"
  }),
  dayPeriod: hr({
    values: ad,
    defaultWidth: "wide",
    formattingValues: od,
    defaultFormattingWidth: "wide"
  })
};
function mr(r) {
  return (n, t = {}) => {
    const e = t.width, a = e && r.matchPatterns[e] || r.matchPatterns[r.defaultMatchWidth], o = n.match(a);
    if (!o)
      return null;
    const i = o[0], s = e && r.parsePatterns[e] || r.parsePatterns[r.defaultParseWidth], c = Array.isArray(s) ? ld(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      cd(s, (d) => d.test(i))
    );
    let l;
    l = r.valueCallback ? r.valueCallback(c) : c, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = n.slice(i.length);
    return { value: l, rest: u };
  };
}
function cd(r, n) {
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && n(r[t]))
      return t;
}
function ld(r, n) {
  for (let t = 0; t < r.length; t++)
    if (n(r[t]))
      return t;
}
function ud(r) {
  return (n, t = {}) => {
    const e = n.match(r.matchPattern);
    if (!e) return null;
    const a = e[0], o = n.match(r.parsePattern);
    if (!o) return null;
    let i = r.valueCallback ? r.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = n.slice(a.length);
    return { value: i, rest: s };
  };
}
const dd = /^(\d+)(th|st|nd|rd)?/i, fd = /\d+/i, pd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, hd = {
  any: [/^b/i, /^(a|c)/i]
}, md = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, gd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, wd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Dd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xd = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, kd = {
  ordinalNumber: ud({
    matchPattern: dd,
    parsePattern: fd,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: mr({
    matchPatterns: pd,
    defaultMatchWidth: "wide",
    parsePatterns: hd,
    defaultParseWidth: "any"
  }),
  quarter: mr({
    matchPatterns: md,
    defaultMatchWidth: "wide",
    parsePatterns: gd,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: mr({
    matchPatterns: vd,
    defaultMatchWidth: "wide",
    parsePatterns: yd,
    defaultParseWidth: "any"
  }),
  day: mr({
    matchPatterns: wd,
    defaultMatchWidth: "wide",
    parsePatterns: bd,
    defaultParseWidth: "any"
  }),
  dayPeriod: mr({
    matchPatterns: Dd,
    defaultMatchWidth: "any",
    parsePatterns: xd,
    defaultParseWidth: "any"
  })
}, Os = {
  code: "en-US",
  formatDistance: Gu,
  formatLong: Xu,
  formatRelative: Ju,
  localize: sd,
  match: kd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function _d(r, n) {
  const t = I(r, n == null ? void 0 : n.in);
  return rr(t, Yn(t)) + 1;
}
function ja(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = +tr(t) - +Hu(t);
  return Math.round(e / ks) + 1;
}
function Wa(r, n) {
  var u, d, f, p;
  const t = I(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = Wt(), o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = ae((n == null ? void 0 : n.in) || r, 0);
  i.setFullYear(e + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = lt(i, n), c = ae((n == null ? void 0 : n.in) || r, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = lt(c, n);
  return +t >= +s ? e + 1 : +t >= +l ? e : e - 1;
}
function Sd(r, n) {
  var s, c, l, u;
  const t = Wt(), e = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Wa(r, n), o = ae((n == null ? void 0 : n.in) || r, 0);
  return o.setFullYear(a, 0, e), o.setHours(0, 0, 0, 0), lt(o, n);
}
function Ts(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = +lt(t, n) - +Sd(t, n);
  return Math.round(e / ks) + 1;
}
function ne(r, n) {
  const t = r < 0 ? "-" : "", e = Math.abs(r).toString().padStart(n, "0");
  return t + e;
}
const pt = {
  // Year
  y(r, n) {
    const t = r.getFullYear(), e = t > 0 ? t : 1 - t;
    return ne(n === "yy" ? e % 100 : e, n.length);
  },
  // Month
  M(r, n) {
    const t = r.getMonth();
    return n === "M" ? String(t + 1) : ne(t + 1, 2);
  },
  // Day of the month
  d(r, n) {
    return ne(r.getDate(), n.length);
  },
  // AM or PM
  a(r, n) {
    const t = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(r, n) {
    return ne(r.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(r, n) {
    return ne(r.getHours(), n.length);
  },
  // Minute
  m(r, n) {
    return ne(r.getMinutes(), n.length);
  },
  // Second
  s(r, n) {
    return ne(r.getSeconds(), n.length);
  },
  // Fraction of second
  S(r, n) {
    const t = n.length, e = r.getMilliseconds(), a = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return ne(a, n.length);
  }
}, Gt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ho = {
  // Era
  G: function(r, n, t) {
    const e = r.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(e, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(e, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return t.era(e, { width: "wide" });
    }
  },
  // Year
  y: function(r, n, t) {
    if (n === "yo") {
      const e = r.getFullYear(), a = e > 0 ? e : 1 - e;
      return t.ordinalNumber(a, { unit: "year" });
    }
    return pt.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, t, e) {
    const a = Wa(r, e), o = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const i = o % 100;
      return ne(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : ne(o, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const t = Ss(r);
    return ne(t, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(r, n) {
    const t = r.getFullYear();
    return ne(t, n.length);
  },
  // Quarter
  Q: function(r, n, t) {
    const e = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
        return String(e);
      // 01, 02, 03, 04
      case "QQ":
        return ne(e, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(r, n, t) {
    const e = Math.ceil((r.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "q":
        return String(e);
      // 01, 02, 03, 04
      case "qq":
        return ne(e, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(r, n, t) {
    const e = r.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return pt.M(r, n);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(e, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return t.month(e, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(r, n, t) {
    const e = r.getMonth();
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return String(e + 1);
      // 01, 02, ..., 12
      case "LL":
        return ne(e + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(r, n, t, e) {
    const a = Ts(r, e);
    return n === "wo" ? t.ordinalNumber(a, { unit: "week" }) : ne(a, n.length);
  },
  // ISO week of year
  I: function(r, n, t) {
    const e = ja(r);
    return n === "Io" ? t.ordinalNumber(e, { unit: "week" }) : ne(e, n.length);
  },
  // Day of the month
  d: function(r, n, t) {
    return n === "do" ? t.ordinalNumber(r.getDate(), { unit: "date" }) : pt.d(r, n);
  },
  // Day of year
  D: function(r, n, t) {
    const e = _d(r);
    return n === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : ne(e, n.length);
  },
  // Day of week
  E: function(r, n, t) {
    const e = r.getDay();
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(r, n, t, e) {
    const a = r.getDay(), o = (a - e.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return ne(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(r, n, t, e) {
    const a = r.getDay(), o = (a - e.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return ne(o, n.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return t.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(r, n, t) {
    const e = r.getDay(), a = e === 0 ? 7 : e;
    switch (n) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return ne(a, n.length);
      // 2nd
      case "io":
        return t.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(r, n, t) {
    const a = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(r, n, t) {
    const e = r.getHours();
    let a;
    switch (e === 12 ? a = Gt.noon : e === 0 ? a = Gt.midnight : a = e / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(r, n, t) {
    const e = r.getHours();
    let a;
    switch (e >= 17 ? a = Gt.evening : e >= 12 ? a = Gt.afternoon : e >= 4 ? a = Gt.morning : a = Gt.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(r, n, t) {
    if (n === "ho") {
      let e = r.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return pt.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, t) {
    return n === "Ho" ? t.ordinalNumber(r.getHours(), { unit: "hour" }) : pt.H(r, n);
  },
  // Hour [0-11]
  K: function(r, n, t) {
    const e = r.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : ne(e, n.length);
  },
  // Hour [1-24]
  k: function(r, n, t) {
    let e = r.getHours();
    return e === 0 && (e = 24), n === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : ne(e, n.length);
  },
  // Minute
  m: function(r, n, t) {
    return n === "mo" ? t.ordinalNumber(r.getMinutes(), { unit: "minute" }) : pt.m(r, n);
  },
  // Second
  s: function(r, n, t) {
    return n === "so" ? t.ordinalNumber(r.getSeconds(), { unit: "second" }) : pt.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return pt.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, t) {
    const e = r.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return Bo(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ct(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ct(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return Bo(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ct(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ct(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + $o(e, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ct(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, n, t) {
    const e = r.getTimezoneOffset();
    switch (n) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + $o(e, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ct(e, ":");
    }
  },
  // Seconds timestamp
  t: function(r, n, t) {
    const e = Math.trunc(+r / 1e3);
    return ne(e, n.length);
  },
  // Milliseconds timestamp
  T: function(r, n, t) {
    return ne(+r, n.length);
  }
};
function $o(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(a) : t + String(a) + n + ne(o, 2);
}
function Bo(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + ne(Math.abs(r) / 60, 2) : Ct(r, n);
}
function Ct(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = ne(Math.trunc(e / 60), 2), o = ne(e % 60, 2);
  return t + a + n + o;
}
const zo = (r, n) => {
  switch (r) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Rs = (r, n) => {
  switch (r) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, Cd = (r, n) => {
  const t = r.match(/(P+)(p+)?/) || [], e = t[1], a = t[2];
  if (!a)
    return zo(r, n);
  let o;
  switch (e) {
    case "P":
      o = n.dateTime({ width: "short" });
      break;
    case "PP":
      o = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = n.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", zo(e, n)).replace("{{time}}", Rs(a, n));
}, xa = {
  p: Rs,
  P: Cd
}, Ed = /^D+$/, Md = /^Y+$/, Pd = ["D", "DD", "YY", "YYYY"];
function Od(r) {
  return Ed.test(r);
}
function Td(r) {
  return Md.test(r);
}
function Rd(r, n, t) {
  const e = Nd(r, n, t);
  if (console.warn(e), Pd.includes(r)) throw new RangeError(e);
}
function Nd(r, n, t) {
  const e = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Id = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ld = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ad = /^'([^]*?)'?$/, Yd = /''/g, Fd = /[a-zA-Z]/;
function Vo(r, n, t) {
  var u, d, f, p, m, g, y, x;
  const e = Wt(), a = (t == null ? void 0 : t.locale) ?? e.locale ?? Os, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((p = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((g = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : g.weekStartsOn) ?? e.weekStartsOn ?? ((x = (y = e.locale) == null ? void 0 : y.options) == null ? void 0 : x.weekStartsOn) ?? 0, s = I(r, t == null ? void 0 : t.in);
  if (!gn(s))
    throw new RangeError("Invalid time value");
  let c = n.match(Ld).map((b) => {
    const D = b[0];
    if (D === "p" || D === "P") {
      const k = xa[D];
      return k(b, a.formatLong);
    }
    return b;
  }).join("").match(Id).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const D = b[0];
    if (D === "'")
      return { isToken: !1, value: jd(b) };
    if (Ho[D])
      return { isToken: !0, value: b };
    if (D.match(Fd))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: b };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const D = b.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Td(D) || !(t != null && t.useAdditionalDayOfYearTokens) && Od(D)) && Rd(D, n, String(r));
    const k = Ho[D[0]];
    return k(s, D, a.localize, l);
  }).join("");
}
function jd(r) {
  const n = r.match(Ad);
  return n ? n[1].replace(Yd, "'") : r;
}
function Ko(r, n) {
  return I(r, n == null ? void 0 : n.in).getDate();
}
function Wd(r, n) {
  return I(r, n == null ? void 0 : n.in).getDay();
}
function Hd(r, n) {
  const t = I(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = t.getMonth(), o = ae(t, 0);
  return o.setFullYear(e, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function $d() {
  return Object.assign({}, Wt());
}
function it(r, n) {
  return I(r, n == null ? void 0 : n.in).getHours();
}
function Bd(r, n) {
  const t = I(r, n == null ? void 0 : n.in).getDay();
  return t === 0 ? 7 : t;
}
function st(r, n) {
  return I(r, n == null ? void 0 : n.in).getMinutes();
}
function Ee(r, n) {
  return I(r, n == null ? void 0 : n.in).getMonth();
}
function vt(r) {
  return I(r).getSeconds();
}
function ka(r) {
  return +I(r);
}
function G(r, n) {
  return I(r, n == null ? void 0 : n.in).getFullYear();
}
function bt(r, n) {
  return +I(r) > +I(n);
}
function Ft(r, n) {
  return +I(r) < +I(n);
}
function zd(r, n) {
  return +I(r) == +I(n);
}
function Vd(r, n) {
  const t = Kd(n) ? new n(0) : ae(n, 0);
  return t.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), t.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), t;
}
function Kd(r) {
  var n;
  return typeof r == "function" && ((n = r.prototype) == null ? void 0 : n.constructor) === r;
}
const Gd = 10;
class Ns {
  constructor() {
    N(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class Qd extends Ns {
  constructor(n, t, e, a, o) {
    super(), this.value = n, this.validateValue = t, this.setValue = e, this.priority = a, o && (this.subPriority = o);
  }
  validate(n, t) {
    return this.validateValue(n, this.value, t);
  }
  set(n, t, e) {
    return this.setValue(n, t, this.value, e);
  }
}
class qd extends Ns {
  constructor(t, e) {
    super();
    N(this, "priority", Gd);
    N(this, "subPriority", -1);
    this.context = t || ((a) => ae(e, a));
  }
  set(t, e) {
    return e.timestampIsSet ? t : ae(t, Vd(t, this.context));
  }
}
class J {
  run(n, t, e, a) {
    const o = this.parse(n, t, e, a);
    return o ? {
      setter: new Qd(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(n, t, e) {
    return !0;
  }
}
class Ud extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 140);
    N(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return a.era(t, { width: "abbreviated" }) || a.era(t, { width: "narrow" });
      // A, B
      case "GGGGG":
        return a.era(t, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return a.era(t, { width: "wide" }) || a.era(t, { width: "abbreviated" }) || a.era(t, { width: "narrow" });
    }
  }
  set(t, e, a) {
    return e.era = a, t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const de = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Ge = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function fe(r, n) {
  return r && {
    value: n(r.value),
    rest: r.rest
  };
}
function ce(r, n) {
  const t = n.match(r);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function Qe(r, n) {
  const t = n.match(r);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, a = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, i = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (a * An + o * Ln + i * Fu),
    rest: n.slice(t[0].length)
  };
}
function Is(r) {
  return ce(de.anyDigitsSigned, r);
}
function le(r, n) {
  switch (r) {
    case 1:
      return ce(de.singleDigit, n);
    case 2:
      return ce(de.twoDigits, n);
    case 3:
      return ce(de.threeDigits, n);
    case 4:
      return ce(de.fourDigits, n);
    default:
      return ce(new RegExp("^\\d{1," + r + "}"), n);
  }
}
function bn(r, n) {
  switch (r) {
    case 1:
      return ce(de.singleDigitSigned, n);
    case 2:
      return ce(de.twoDigitsSigned, n);
    case 3:
      return ce(de.threeDigitsSigned, n);
    case 4:
      return ce(de.fourDigitsSigned, n);
    default:
      return ce(new RegExp("^-?\\d{1," + r + "}"), n);
  }
}
function Ha(r) {
  switch (r) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ls(r, n) {
  const t = n > 0, e = t ? n : 1 - n;
  let a;
  if (e <= 50)
    a = r || 100;
  else {
    const o = e + 50, i = Math.trunc(o / 100) * 100, s = r >= o % 100;
    a = r + i - (s ? 100 : 0);
  }
  return t ? a : 1 - a;
}
function As(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class Xd extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 130);
    N(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return fe(le(4, t), o);
      case "yo":
        return fe(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return fe(le(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a) {
    const o = t.getFullYear();
    if (a.isTwoDigitYear) {
      const s = Ls(
        a.year,
        o
      );
      return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Zd extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 130);
    N(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return fe(le(4, t), o);
      case "Yo":
        return fe(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return fe(le(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a, o) {
    const i = Wa(t, o);
    if (a.isTwoDigitYear) {
      const c = Ls(
        a.year,
        i
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), lt(t, o);
    }
    const s = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(s, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), lt(t, o);
  }
}
class Jd extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 130);
    N(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e) {
    return bn(e === "R" ? 4 : e.length, t);
  }
  set(t, e, a) {
    const o = ae(t, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), tr(o);
  }
}
class ef extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 130);
    N(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return bn(e === "u" ? 4 : e.length, t);
  }
  set(t, e, a) {
    return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class tf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 120);
    N(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return le(e.length, t);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, a) {
    return t.setMonth((a - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class rf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 120);
    N(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return le(e.length, t);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return a.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return a.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, a) {
    return t.setMonth((a - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class nf extends J {
  constructor() {
    super(...arguments);
    N(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    N(this, "priority", 110);
  }
  parse(t, e, a) {
    const o = (i) => i - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "M":
        return fe(
          ce(de.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return fe(le(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return fe(
          a.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return a.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(t, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return a.month(t, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return a.month(t, { width: "wide", context: "formatting" }) || a.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class af extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 110);
    N(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (i) => i - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return fe(
          ce(de.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return fe(le(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return fe(
          a.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return a.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(t, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return a.month(t, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return a.month(t, { width: "wide", context: "standalone" }) || a.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function of(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in), a = Ts(e, t) - n;
  return e.setDate(e.getDate() - a * 7), I(e, t == null ? void 0 : t.in);
}
class sf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 100);
    N(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "w":
        return ce(de.week, t);
      case "wo":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a, o) {
    return lt(of(t, a, o), o);
  }
}
function cf(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in), a = ja(e, t) - n;
  return e.setDate(e.getDate() - a * 7), e;
}
class lf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 100);
    N(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "I":
        return ce(de.week, t);
      case "Io":
        return a.ordinalNumber(t, { unit: "week" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, a) {
    return tr(cf(t, a));
  }
}
const uf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], df = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class ff extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 90);
    N(this, "subPriority", 1);
    N(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "d":
        return ce(de.date, t);
      case "do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear(), o = As(a), i = t.getMonth();
    return o ? e >= 1 && e <= df[i] : e >= 1 && e <= uf[i];
  }
  set(t, e, a) {
    return t.setDate(a), t.setHours(0, 0, 0, 0), t;
  }
}
class pf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 90);
    N(this, "subpriority", 1);
    N(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    switch (e) {
      case "D":
      case "DD":
        return ce(de.dayOfYear, t);
      case "Do":
        return a.ordinalNumber(t, { unit: "date" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    const a = t.getFullYear();
    return As(a) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, a) {
    return t.setMonth(0, a), t.setHours(0, 0, 0, 0), t;
  }
}
function $a(r, n, t) {
  var d, f, p, m;
  const e = Wt(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? e.weekStartsOn ?? ((m = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = I(r, t == null ? void 0 : t.in), i = o.getDay(), c = (n % 7 + 7) % 7, l = 7 - a, u = n < 0 || n > 6 ? n - (i + l) % 7 : (c + l) % 7 - (i + l) % 7;
  return $e(o, u, t);
}
class hf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 90);
    N(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return a.day(t, { width: "wide", context: "formatting" }) || a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = $a(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class mf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 90);
    N(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      // 3
      case "e":
      case "ee":
        return fe(le(e.length, t), i);
      // 3rd
      case "eo":
        return fe(
          a.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      // Tue
      case "eee":
        return a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return a.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return a.day(t, { width: "wide", context: "formatting" }) || a.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(t, { width: "short", context: "formatting" }) || a.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = $a(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class gf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 90);
    N(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, e, a, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      // 3
      case "c":
      case "cc":
        return fe(le(e.length, t), i);
      // 3rd
      case "co":
        return fe(
          a.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      // Tue
      case "ccc":
        return a.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return a.day(t, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return a.day(t, { width: "wide", context: "standalone" }) || a.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(t, { width: "short", context: "standalone" }) || a.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, a, o) {
    return t = $a(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
function vf(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in), a = Bd(e, t), o = n - a;
  return $e(e, o, t);
}
class yf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 90);
    N(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, a) {
    const o = (i) => i === 0 ? 7 : i;
    switch (e) {
      // 2
      case "i":
      case "ii":
        return le(e.length, t);
      // 2nd
      case "io":
        return a.ordinalNumber(t, { unit: "day" });
      // Tue
      case "iii":
        return fe(
          a.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // T
      case "iiiii":
        return fe(
          a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return fe(
          a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tuesday
      case "iiii":
      default:
        return fe(
          a.day(t, {
            width: "wide",
            context: "formatting"
          }) || a.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(t, {
            width: "short",
            context: "formatting"
          }) || a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 7;
  }
  set(t, e, a) {
    return t = vf(t, a), t.setHours(0, 0, 0, 0), t;
  }
}
class wf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 80);
    N(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(Ha(a), 0, 0, 0), t;
  }
}
class bf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 80);
    N(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(Ha(a), 0, 0, 0), t;
  }
}
class Df extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 80);
    N(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, a) {
    return t.setHours(Ha(a), 0, 0, 0), t;
  }
}
class xf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 70);
    N(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "h":
        return ce(de.hour12h, t);
      case "ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, a) {
    const o = t.getHours() >= 12;
    return o && a < 12 ? t.setHours(a + 12, 0, 0, 0) : !o && a === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class kf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 70);
    N(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "H":
        return ce(de.hour23h, t);
      case "Ho":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, a) {
    return t.setHours(a, 0, 0, 0), t;
  }
}
class _f extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 70);
    N(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "K":
        return ce(de.hour11h, t);
      case "Ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, a) {
    return t.getHours() >= 12 && a < 12 ? t.setHours(a + 12, 0, 0, 0) : t.setHours(a, 0, 0, 0), t;
  }
}
class Sf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 70);
    N(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "k":
        return ce(de.hour24h, t);
      case "ko":
        return a.ordinalNumber(t, { unit: "hour" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, a) {
    const o = a <= 24 ? a % 24 : a;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class Cf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 60);
    N(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "m":
        return ce(de.minute, t);
      case "mo":
        return a.ordinalNumber(t, { unit: "minute" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setMinutes(a, 0, 0), t;
  }
}
class Ef extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 50);
    N(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, a) {
    switch (e) {
      case "s":
        return ce(de.second, t);
      case "so":
        return a.ordinalNumber(t, { unit: "second" });
      default:
        return le(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, a) {
    return t.setSeconds(a, 0), t;
  }
}
class Mf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 30);
    N(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const a = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return fe(le(e.length, t), a);
  }
  set(t, e, a) {
    return t.setMilliseconds(a), t;
  }
}
class Pf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 10);
    N(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return Qe(
          Ge.basicOptionalMinutes,
          t
        );
      case "XX":
        return Qe(Ge.basic, t);
      case "XXXX":
        return Qe(
          Ge.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Qe(
          Ge.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Qe(Ge.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : ae(
      t,
      t.getTime() - hn(t) - a
    );
  }
}
class Of extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 10);
    N(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return Qe(
          Ge.basicOptionalMinutes,
          t
        );
      case "xx":
        return Qe(Ge.basic, t);
      case "xxxx":
        return Qe(
          Ge.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Qe(
          Ge.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Qe(Ge.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : ae(
      t,
      t.getTime() - hn(t) - a
    );
  }
}
class Tf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 40);
    N(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Is(t);
  }
  set(t, e, a) {
    return [ae(t, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Rf extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 20);
    N(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Is(t);
  }
  set(t, e, a) {
    return [ae(t, a), { timestampIsSet: !0 }];
  }
}
const Nf = {
  G: new Ud(),
  y: new Xd(),
  Y: new Zd(),
  R: new Jd(),
  u: new ef(),
  Q: new tf(),
  q: new rf(),
  M: new nf(),
  L: new af(),
  w: new sf(),
  I: new lf(),
  d: new ff(),
  D: new pf(),
  E: new hf(),
  e: new mf(),
  c: new gf(),
  i: new yf(),
  a: new wf(),
  b: new bf(),
  B: new Df(),
  h: new xf(),
  H: new kf(),
  K: new _f(),
  k: new Sf(),
  m: new Cf(),
  s: new Ef(),
  S: new Mf(),
  X: new Pf(),
  x: new Of(),
  t: new Tf(),
  T: new Rf()
}, If = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Lf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Af = /^'([^]*?)'?$/, Yf = /''/g, Ff = /\S/, jf = /[a-zA-Z]/;
function Wf(r, n, t, e) {
  var y, x, b, D, k, E, C, _;
  const a = () => ae((e == null ? void 0 : e.in) || t, NaN), o = $d(), i = (e == null ? void 0 : e.locale) ?? o.locale ?? Os, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((x = (y = e == null ? void 0 : e.locale) == null ? void 0 : y.options) == null ? void 0 : x.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((D = (b = o.locale) == null ? void 0 : b.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, c = (e == null ? void 0 : e.weekStartsOn) ?? ((E = (k = e == null ? void 0 : e.locale) == null ? void 0 : k.options) == null ? void 0 : E.weekStartsOn) ?? o.weekStartsOn ?? ((_ = (C = o.locale) == null ? void 0 : C.options) == null ? void 0 : _.weekStartsOn) ?? 0;
  if (!n)
    return r ? a() : I(t, e == null ? void 0 : e.in);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: c,
    locale: i
  }, u = [new qd(e == null ? void 0 : e.in, t)], d = n.match(Lf).map((M) => {
    const O = M[0];
    if (O in xa) {
      const P = xa[O];
      return P(M, i.formatLong);
    }
    return M;
  }).join("").match(If), f = [];
  for (let M of d) {
    const O = M[0], P = Nf[O];
    if (P) {
      const { incompatibleTokens: L } = P;
      if (Array.isArray(L)) {
        const $ = f.find(
          (H) => L.includes(H.token) || H.token === O
        );
        if ($)
          throw new RangeError(
            `The format string mustn't contain \`${$.fullToken}\` and \`${M}\` at the same time`
          );
      } else if (P.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${M}\` and any other token at the same time`
        );
      f.push({ token: O, fullToken: M });
      const F = P.run(
        r,
        M,
        i.match,
        l
      );
      if (!F)
        return a();
      u.push(F.setter), r = F.rest;
    } else {
      if (O.match(jf))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + O + "`"
        );
      if (M === "''" ? M = "'" : O === "'" && (M = Hf(M)), r.indexOf(M) === 0)
        r = r.slice(M.length);
      else
        return a();
    }
  }
  if (r.length > 0 && Ff.test(r))
    return a();
  const p = u.map((M) => M.priority).sort((M, O) => O - M).filter((M, O, P) => P.indexOf(M) === O).map(
    (M) => u.filter((O) => O.priority === M).sort((O, P) => P.subPriority - O.subPriority)
  ).map((M) => M[0]);
  let m = I(t, e == null ? void 0 : e.in);
  if (isNaN(+m)) return a();
  const g = {};
  for (const M of p) {
    if (!M.validate(m, l))
      return a();
    const O = M.set(m, g, l);
    Array.isArray(O) ? (m = O[0], Object.assign(g, O[1])) : m = O;
  }
  return m;
}
function Hf(r) {
  return r.match(Af)[1].replace(Yf, "'");
}
function $f(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth();
}
function Bf(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +Da(e) == +Da(a);
}
function zf(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear();
}
function _r(r, n, t) {
  const e = +I(r, t == null ? void 0 : t.in), [a, o] = [
    +I(n.start, t == null ? void 0 : t.in),
    +I(n.end, t == null ? void 0 : t.in)
  ].sort((i, s) => i - s);
  return e >= a && e <= o;
}
function Vf(r, n, t) {
  return $e(r, -1, t);
}
function Kf(r, n) {
  const t = () => ae(n == null ? void 0 : n.in, NaN), a = Uf(r);
  let o;
  if (a.date) {
    const l = Xf(a.date, 2);
    o = Zf(l.restDateString, l.year);
  }
  if (!o || isNaN(+o)) return t();
  const i = +o;
  let s = 0, c;
  if (a.time && (s = Jf(a.time), isNaN(s)))
    return t();
  if (a.timezone) {
    if (c = ep(a.timezone), isNaN(c)) return t();
  } else {
    const l = new Date(i + s), u = I(0, n == null ? void 0 : n.in);
    return u.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), u.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), u;
  }
  return I(i + s + c, n == null ? void 0 : n.in);
}
const Hr = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Gf = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Qf = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, qf = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Uf(r) {
  const n = {}, t = r.split(Hr.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? e = t[0] : (n.date = t[0], e = t[1], Hr.timeZoneDelimiter.test(n.date) && (n.date = r.split(Hr.timeZoneDelimiter)[0], e = r.substr(
    n.date.length,
    r.length
  ))), e) {
    const a = Hr.timezone.exec(e);
    a ? (n.time = e.replace(a[1], ""), n.timezone = a[1]) : n.time = e;
  }
  return n;
}
function Xf(r, n) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"
  ), e = r.match(t);
  if (!e) return { year: NaN, restDateString: "" };
  const a = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: r.slice((e[1] || e[2]).length)
  };
}
function Zf(r, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const t = r.match(Gf);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], a = gr(t[1]), o = gr(t[2]) - 1, i = gr(t[3]), s = gr(t[4]), c = gr(t[5]) - 1;
  if (e)
    return op(n, s, c) ? tp(n, s, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !np(n, o, i) || !ap(n, a) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(n, o, Math.max(a, i)), l);
  }
}
function gr(r) {
  return r ? parseInt(r) : 1;
}
function Jf(r) {
  const n = r.match(Qf);
  if (!n) return NaN;
  const t = ta(n[1]), e = ta(n[2]), a = ta(n[3]);
  return ip(t, e, a) ? t * An + e * Ln + a * 1e3 : NaN;
}
function ta(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function ep(r) {
  if (r === "Z") return 0;
  const n = r.match(qf);
  if (!n) return 0;
  const t = n[1] === "+" ? -1 : 1, e = parseInt(n[2]), a = n[3] && parseInt(n[3]) || 0;
  return sp(e, a) ? t * (e * An + a * Ln) : NaN;
}
function tp(r, n, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(r, 0, 4);
  const a = e.getUTCDay() || 7, o = (n - 1) * 7 + t + 1 - a;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const rp = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ys(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function np(r, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (rp[n] || (Ys(r) ? 29 : 28));
}
function ap(r, n) {
  return n >= 1 && n <= (Ys(r) ? 366 : 365);
}
function op(r, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function ip(r, n, t) {
  return r === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && r >= 0 && r < 25;
}
function sp(r, n) {
  return n >= 0 && n <= 59;
}
function Ne(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in), a = e.getFullYear(), o = e.getDate(), i = ae(r, 0);
  i.setFullYear(a, n, 15), i.setHours(0, 0, 0, 0);
  const s = Hd(i);
  return e.setMonth(n, Math.min(o, s)), e;
}
function en(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setHours(n), e;
}
function tn(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setMinutes(n), e;
}
function Qt(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in), a = Math.trunc(e.getMonth() / 3) + 1, o = n - a;
  return Ne(e, e.getMonth() + o * 3);
}
function rn(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setSeconds(n), e;
}
function ze(r, n, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return isNaN(+e) ? ae(r, NaN) : (e.setFullYear(n), e);
}
function Rt(r, n, t) {
  return Be(r, -n, t);
}
function Fs(r, n, t) {
  return Fa(r, -1, t);
}
function Go(r, n, t) {
  return mn(r, -1, t);
}
function nr(r, n, t) {
  return at(r, -n, t);
}
function Fn() {
  return typeof window < "u";
}
function lr(r) {
  return js(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function Oe(r) {
  var n;
  return (r == null || (n = r.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Je(r) {
  var n;
  return (n = (js(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : n.documentElement;
}
function js(r) {
  return Fn() ? r instanceof Node || r instanceof Oe(r).Node : !1;
}
function xe(r) {
  return Fn() ? r instanceof Element || r instanceof Oe(r).Element : !1;
}
function Ze(r) {
  return Fn() ? r instanceof HTMLElement || r instanceof Oe(r).HTMLElement : !1;
}
function Qo(r) {
  return !Fn() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof Oe(r).ShadowRoot;
}
function Mr(r) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: e,
    display: a
  } = Ye(r);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !["inline", "contents"].includes(a);
}
function cp(r) {
  return ["table", "td", "th"].includes(lr(r));
}
function jn(r) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return r.matches(n);
    } catch {
      return !1;
    }
  });
}
function Ba(r) {
  const n = za(), t = xe(r) ? Ye(r) : r;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((e) => t[e] ? t[e] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e) => (t.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some((e) => (t.contain || "").includes(e));
}
function lp(r) {
  let n = Dt(r);
  for (; Ze(n) && !ar(n); ) {
    if (Ba(n))
      return n;
    if (jn(n))
      return null;
    n = Dt(n);
  }
  return null;
}
function za() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ar(r) {
  return ["html", "body", "#document"].includes(lr(r));
}
function Ye(r) {
  return Oe(r).getComputedStyle(r);
}
function Wn(r) {
  return xe(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function Dt(r) {
  if (lr(r) === "html")
    return r;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    Qo(r) && r.host || // Fallback.
    Je(r)
  );
  return Qo(n) ? n.host : n;
}
function Ws(r) {
  const n = Dt(r);
  return ar(n) ? r.ownerDocument ? r.ownerDocument.body : r.body : Ze(n) && Mr(n) ? n : Ws(n);
}
function Sr(r, n, t) {
  var e;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const a = Ws(r), o = a === ((e = r.ownerDocument) == null ? void 0 : e.body), i = Oe(a);
  if (o) {
    const s = _a(i);
    return n.concat(i, i.visualViewport || [], Mr(a) ? a : [], s && t ? Sr(s) : []);
  }
  return n.concat(a, Sr(a, [], t));
}
function _a(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
const or = Math.min, Nt = Math.max, Dn = Math.round, $r = Math.floor, Ue = (r) => ({
  x: r,
  y: r
}), up = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dp = {
  start: "end",
  end: "start"
};
function fp(r, n, t) {
  return Nt(r, or(n, t));
}
function Hn(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function ir(r) {
  return r.split("-")[0];
}
function Pr(r) {
  return r.split("-")[1];
}
function pp(r) {
  return r === "x" ? "y" : "x";
}
function Va(r) {
  return r === "y" ? "height" : "width";
}
function Cr(r) {
  return ["top", "bottom"].includes(ir(r)) ? "y" : "x";
}
function Ka(r) {
  return pp(Cr(r));
}
function hp(r, n, t) {
  t === void 0 && (t = !1);
  const e = Pr(r), a = Ka(r), o = Va(a);
  let i = a === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (i = xn(i)), [i, xn(i)];
}
function mp(r) {
  const n = xn(r);
  return [Sa(r), n, Sa(n)];
}
function Sa(r) {
  return r.replace(/start|end/g, (n) => dp[n]);
}
function gp(r, n, t) {
  const e = ["left", "right"], a = ["right", "left"], o = ["top", "bottom"], i = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return t ? n ? a : e : n ? e : a;
    case "left":
    case "right":
      return n ? o : i;
    default:
      return [];
  }
}
function vp(r, n, t, e) {
  const a = Pr(r);
  let o = gp(ir(r), t === "start", e);
  return a && (o = o.map((i) => i + "-" + a), n && (o = o.concat(o.map(Sa)))), o;
}
function xn(r) {
  return r.replace(/left|right|bottom|top/g, (n) => up[n]);
}
function yp(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Hs(r) {
  return typeof r != "number" ? yp(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function kn(r) {
  const {
    x: n,
    y: t,
    width: e,
    height: a
  } = r;
  return {
    width: e,
    height: a,
    top: t,
    left: n,
    right: n + e,
    bottom: t + a,
    x: n,
    y: t
  };
}
function qo(r, n, t) {
  let {
    reference: e,
    floating: a
  } = r;
  const o = Cr(n), i = Ka(n), s = Va(i), c = ir(n), l = o === "y", u = e.x + e.width / 2 - a.width / 2, d = e.y + e.height / 2 - a.height / 2, f = e[s] / 2 - a[s] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: e.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: e.y + e.height
      };
      break;
    case "right":
      p = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: e.x - a.width,
        y: d
      };
      break;
    default:
      p = {
        x: e.x,
        y: e.y
      };
  }
  switch (Pr(n)) {
    case "start":
      p[i] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      p[i] += f * (t && l ? -1 : 1);
      break;
  }
  return p;
}
const wp = async (r, n, t) => {
  const {
    placement: e = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: i
  } = t, s = o.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(n));
  let l = await i.getElementRects({
    reference: r,
    floating: n,
    strategy: a
  }), {
    x: u,
    y: d
  } = qo(l, e, c), f = e, p = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: y,
      fn: x
    } = s[g], {
      x: b,
      y: D,
      data: k,
      reset: E
    } = await x({
      x: u,
      y: d,
      initialPlacement: e,
      placement: f,
      strategy: a,
      middlewareData: p,
      rects: l,
      platform: i,
      elements: {
        reference: r,
        floating: n
      }
    });
    u = b ?? u, d = D ?? d, p = {
      ...p,
      [y]: {
        ...p[y],
        ...k
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (l = E.rects === !0 ? await i.getElementRects({
      reference: r,
      floating: n,
      strategy: a
    }) : E.rects), {
      x: u,
      y: d
    } = qo(l, f, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: a,
    middlewareData: p
  };
};
async function bp(r, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: e,
    y: a,
    platform: o,
    rects: i,
    elements: s,
    strategy: c
  } = r, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Hn(n, r), m = Hs(p), y = s[f ? d === "floating" ? "reference" : "floating" : d], x = kn(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    x: e,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), k = await (o.isElement == null ? void 0 : o.isElement(D)) ? await (o.getScale == null ? void 0 : o.getScale(D)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = kn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: D,
    strategy: c
  }) : b);
  return {
    top: (x.top - E.top + m.top) / k.y,
    bottom: (E.bottom - x.bottom + m.bottom) / k.y,
    left: (x.left - E.left + m.left) / k.x,
    right: (E.right - x.right + m.right) / k.x
  };
}
const Dp = (r) => ({
  name: "arrow",
  options: r,
  async fn(n) {
    const {
      x: t,
      y: e,
      placement: a,
      rects: o,
      platform: i,
      elements: s,
      middlewareData: c
    } = n, {
      element: l,
      padding: u = 0
    } = Hn(r, n) || {};
    if (l == null)
      return {};
    const d = Hs(u), f = {
      x: t,
      y: e
    }, p = Ka(a), m = Va(p), g = await i.getDimensions(l), y = p === "y", x = y ? "top" : "left", b = y ? "bottom" : "right", D = y ? "clientHeight" : "clientWidth", k = o.reference[m] + o.reference[p] - f[p] - o.floating[m], E = f[p] - o.reference[p], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let _ = C ? C[D] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(C))) && (_ = s.floating[D] || o.floating[m]);
    const M = k / 2 - E / 2, O = _ / 2 - g[m] / 2 - 1, P = or(d[x], O), L = or(d[b], O), F = P, $ = _ - g[m] - L, H = _ / 2 - g[m] / 2 + M, K = fp(F, H, $), A = !c.arrow && Pr(a) != null && H !== K && o.reference[m] / 2 - (H < F ? P : L) - g[m] / 2 < 0, j = A ? H < F ? H - F : H - $ : 0;
    return {
      [p]: f[p] + j,
      data: {
        [p]: K,
        centerOffset: H - K - j,
        ...A && {
          alignmentOffset: j
        }
      },
      reset: A
    };
  }
}), xp = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(n) {
      var t, e;
      const {
        placement: a,
        middlewareData: o,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = n, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = Hn(r, n);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const x = ir(a), b = Cr(s), D = ir(s) === s, k = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = f || (D || !g ? [xn(s)] : mp(s)), C = m !== "none";
      !f && C && E.push(...vp(s, g, m, k));
      const _ = [s, ...E], M = await bp(n, y), O = [];
      let P = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && O.push(M[x]), d) {
        const H = hp(a, i, k);
        O.push(M[H[0]], M[H[1]]);
      }
      if (P = [...P, {
        placement: a,
        overflows: O
      }], !O.every((H) => H <= 0)) {
        var L, F;
        const H = (((L = o.flip) == null ? void 0 : L.index) || 0) + 1, K = _[H];
        if (K)
          return {
            data: {
              index: H,
              overflows: P
            },
            reset: {
              placement: K
            }
          };
        let A = (F = P.filter((j) => j.overflows[0] <= 0).sort((j, W) => j.overflows[1] - W.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var $;
              const j = ($ = P.filter((W) => {
                if (C) {
                  const Z = Cr(W.placement);
                  return Z === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Z === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((Z) => Z > 0).reduce((Z, pe) => Z + pe, 0)]).sort((W, Z) => W[1] - Z[1])[0]) == null ? void 0 : $[0];
              j && (A = j);
              break;
            }
            case "initialPlacement":
              A = s;
              break;
          }
        if (a !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function kp(r, n) {
  const {
    placement: t,
    platform: e,
    elements: a
  } = r, o = await (e.isRTL == null ? void 0 : e.isRTL(a.floating)), i = ir(t), s = Pr(t), c = Cr(t) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = o && c ? -1 : 1, d = Hn(n, r);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
    x: p * u,
    y: f * l
  } : {
    x: f * l,
    y: p * u
  };
}
const _p = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(n) {
      var t, e;
      const {
        x: a,
        y: o,
        placement: i,
        middlewareData: s
      } = n, c = await kp(n, r);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : {
        x: a + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
};
function $s(r) {
  const n = Ye(r);
  let t = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const a = Ze(r), o = a ? r.offsetWidth : t, i = a ? r.offsetHeight : e, s = Dn(t) !== o || Dn(e) !== i;
  return s && (t = o, e = i), {
    width: t,
    height: e,
    $: s
  };
}
function Ga(r) {
  return xe(r) ? r : r.contextElement;
}
function qt(r) {
  const n = Ga(r);
  if (!Ze(n))
    return Ue(1);
  const t = n.getBoundingClientRect(), {
    width: e,
    height: a,
    $: o
  } = $s(n);
  let i = (o ? Dn(t.width) : t.width) / e, s = (o ? Dn(t.height) : t.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Sp = /* @__PURE__ */ Ue(0);
function Bs(r) {
  const n = Oe(r);
  return !za() || !n.visualViewport ? Sp : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Cp(r, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Oe(r) ? !1 : n;
}
function jt(r, n, t, e) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const a = r.getBoundingClientRect(), o = Ga(r);
  let i = Ue(1);
  n && (e ? xe(e) && (i = qt(e)) : i = qt(r));
  const s = Cp(o, t, e) ? Bs(o) : Ue(0);
  let c = (a.left + s.x) / i.x, l = (a.top + s.y) / i.y, u = a.width / i.x, d = a.height / i.y;
  if (o) {
    const f = Oe(o), p = e && xe(e) ? Oe(e) : e;
    let m = f, g = _a(m);
    for (; g && e && p !== m; ) {
      const y = qt(g), x = g.getBoundingClientRect(), b = Ye(g), D = x.left + (g.clientLeft + parseFloat(b.paddingLeft)) * y.x, k = x.top + (g.clientTop + parseFloat(b.paddingTop)) * y.y;
      c *= y.x, l *= y.y, u *= y.x, d *= y.y, c += D, l += k, m = Oe(g), g = _a(m);
    }
  }
  return kn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Qa(r, n) {
  const t = Wn(r).scrollLeft;
  return n ? n.left + t : jt(Je(r)).left + t;
}
function zs(r, n, t) {
  t === void 0 && (t = !1);
  const e = r.getBoundingClientRect(), a = e.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Qa(r, e)
  )), o = e.top + n.scrollTop;
  return {
    x: a,
    y: o
  };
}
function Ep(r) {
  let {
    elements: n,
    rect: t,
    offsetParent: e,
    strategy: a
  } = r;
  const o = a === "fixed", i = Je(e), s = n ? jn(n.floating) : !1;
  if (e === i || s && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ue(1);
  const u = Ue(0), d = Ze(e);
  if ((d || !d && !o) && ((lr(e) !== "body" || Mr(i)) && (c = Wn(e)), Ze(e))) {
    const p = jt(e);
    l = qt(e), u.x = p.x + e.clientLeft, u.y = p.y + e.clientTop;
  }
  const f = i && !d && !o ? zs(i, c, !0) : Ue(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + f.y
  };
}
function Mp(r) {
  return Array.from(r.getClientRects());
}
function Pp(r) {
  const n = Je(r), t = Wn(r), e = r.ownerDocument.body, a = Nt(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), o = Nt(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let i = -t.scrollLeft + Qa(r);
  const s = -t.scrollTop;
  return Ye(e).direction === "rtl" && (i += Nt(n.clientWidth, e.clientWidth) - a), {
    width: a,
    height: o,
    x: i,
    y: s
  };
}
function Op(r, n) {
  const t = Oe(r), e = Je(r), a = t.visualViewport;
  let o = e.clientWidth, i = e.clientHeight, s = 0, c = 0;
  if (a) {
    o = a.width, i = a.height;
    const l = za();
    (!l || l && n === "fixed") && (s = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function Tp(r, n) {
  const t = jt(r, !0, n === "fixed"), e = t.top + r.clientTop, a = t.left + r.clientLeft, o = Ze(r) ? qt(r) : Ue(1), i = r.clientWidth * o.x, s = r.clientHeight * o.y, c = a * o.x, l = e * o.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Uo(r, n, t) {
  let e;
  if (n === "viewport")
    e = Op(r, t);
  else if (n === "document")
    e = Pp(Je(r));
  else if (xe(n))
    e = Tp(n, t);
  else {
    const a = Bs(r);
    e = {
      x: n.x - a.x,
      y: n.y - a.y,
      width: n.width,
      height: n.height
    };
  }
  return kn(e);
}
function Vs(r, n) {
  const t = Dt(r);
  return t === n || !xe(t) || ar(t) ? !1 : Ye(t).position === "fixed" || Vs(t, n);
}
function Rp(r, n) {
  const t = n.get(r);
  if (t)
    return t;
  let e = Sr(r, [], !1).filter((s) => xe(s) && lr(s) !== "body"), a = null;
  const o = Ye(r).position === "fixed";
  let i = o ? Dt(r) : r;
  for (; xe(i) && !ar(i); ) {
    const s = Ye(i), c = Ba(i);
    !c && s.position === "fixed" && (a = null), (o ? !c && !a : !c && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Mr(i) && !c && Vs(r, i)) ? e = e.filter((u) => u !== i) : a = s, i = Dt(i);
  }
  return n.set(r, e), e;
}
function Np(r) {
  let {
    element: n,
    boundary: t,
    rootBoundary: e,
    strategy: a
  } = r;
  const i = [...t === "clippingAncestors" ? jn(n) ? [] : Rp(n, this._c) : [].concat(t), e], s = i[0], c = i.reduce((l, u) => {
    const d = Uo(n, u, a);
    return l.top = Nt(d.top, l.top), l.right = or(d.right, l.right), l.bottom = or(d.bottom, l.bottom), l.left = Nt(d.left, l.left), l;
  }, Uo(n, s, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ip(r) {
  const {
    width: n,
    height: t
  } = $s(r);
  return {
    width: n,
    height: t
  };
}
function Lp(r, n, t) {
  const e = Ze(n), a = Je(n), o = t === "fixed", i = jt(r, !0, o, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ue(0);
  if (e || !e && !o)
    if ((lr(n) !== "body" || Mr(a)) && (s = Wn(n)), e) {
      const f = jt(n, !0, o, n);
      c.x = f.x + n.clientLeft, c.y = f.y + n.clientTop;
    } else a && (c.x = Qa(a));
  const l = a && !e && !o ? zs(a, s) : Ue(0), u = i.left + s.scrollLeft - c.x - l.x, d = i.top + s.scrollTop - c.y - l.y;
  return {
    x: u,
    y: d,
    width: i.width,
    height: i.height
  };
}
function ra(r) {
  return Ye(r).position === "static";
}
function Xo(r, n) {
  if (!Ze(r) || Ye(r).position === "fixed")
    return null;
  if (n)
    return n(r);
  let t = r.offsetParent;
  return Je(r) === t && (t = t.ownerDocument.body), t;
}
function Ks(r, n) {
  const t = Oe(r);
  if (jn(r))
    return t;
  if (!Ze(r)) {
    let a = Dt(r);
    for (; a && !ar(a); ) {
      if (xe(a) && !ra(a))
        return a;
      a = Dt(a);
    }
    return t;
  }
  let e = Xo(r, n);
  for (; e && cp(e) && ra(e); )
    e = Xo(e, n);
  return e && ar(e) && ra(e) && !Ba(e) ? t : e || lp(r) || t;
}
const Ap = async function(r) {
  const n = this.getOffsetParent || Ks, t = this.getDimensions, e = await t(r.floating);
  return {
    reference: Lp(r.reference, await n(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function Yp(r) {
  return Ye(r).direction === "rtl";
}
const Fp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ep,
  getDocumentElement: Je,
  getClippingRect: Np,
  getOffsetParent: Ks,
  getElementRects: Ap,
  getClientRects: Mp,
  getDimensions: Ip,
  getScale: qt,
  isElement: xe,
  isRTL: Yp
};
function Gs(r, n) {
  return r.x === n.x && r.y === n.y && r.width === n.width && r.height === n.height;
}
function jp(r, n) {
  let t = null, e;
  const a = Je(r);
  function o() {
    var s;
    clearTimeout(e), (s = t) == null || s.disconnect(), t = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), o();
    const l = r.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: p
    } = l;
    if (s || n(), !f || !p)
      return;
    const m = $r(d), g = $r(a.clientWidth - (u + f)), y = $r(a.clientHeight - (d + p)), x = $r(u), D = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -x + "px",
      threshold: Nt(0, or(1, c)) || 1
    };
    let k = !0;
    function E(C) {
      const _ = C[0].intersectionRatio;
      if (_ !== c) {
        if (!k)
          return i();
        _ ? i(!1, _) : e = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Gs(l, r.getBoundingClientRect()) && i(), k = !1;
    }
    try {
      t = new IntersectionObserver(E, {
        ...D,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(E, D);
    }
    t.observe(r);
  }
  return i(!0), o;
}
function Wp(r, n, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = Ga(r), u = a || o ? [...l ? Sr(l) : [], ...Sr(n)] : [];
  u.forEach((x) => {
    a && x.addEventListener("scroll", t, {
      passive: !0
    }), o && x.addEventListener("resize", t);
  });
  const d = l && s ? jp(l, t) : null;
  let f = -1, p = null;
  i && (p = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === l && p && (p.unobserve(n), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var D;
      (D = p) == null || D.observe(n);
    })), t();
  }), l && !c && p.observe(l), p.observe(n));
  let m, g = c ? jt(r) : null;
  c && y();
  function y() {
    const x = jt(r);
    g && !Gs(g, x) && t(), g = x, m = requestAnimationFrame(y);
  }
  return t(), () => {
    var x;
    u.forEach((b) => {
      a && b.removeEventListener("scroll", t), o && b.removeEventListener("resize", t);
    }), d == null || d(), (x = p) == null || x.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const Hp = _p, $p = xp, Zo = Dp, Bp = (r, n, t) => {
  const e = /* @__PURE__ */ new Map(), a = {
    platform: Fp,
    ...t
  }, o = {
    ...a.platform,
    _c: e
  };
  return wp(r, n, {
    ...a,
    platform: o
  });
};
var nn = typeof document < "u" ? Ma : Le;
function _n(r, n) {
  if (r === n)
    return !0;
  if (typeof r != typeof n)
    return !1;
  if (typeof r == "function" && r.toString() === n.toString())
    return !0;
  let t, e, a;
  if (r && n && typeof r == "object") {
    if (Array.isArray(r)) {
      if (t = r.length, t !== n.length) return !1;
      for (e = t; e-- !== 0; )
        if (!_n(r[e], n[e]))
          return !1;
      return !0;
    }
    if (a = Object.keys(r), t = a.length, t !== Object.keys(n).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(n, a[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = a[e];
      if (!(o === "_owner" && r.$$typeof) && !_n(r[o], n[o]))
        return !1;
    }
    return !0;
  }
  return r !== r && n !== n;
}
function Qs(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jo(r, n) {
  const t = Qs(r);
  return Math.round(n * t) / t;
}
function na(r) {
  const n = B.useRef(r);
  return nn(() => {
    n.current = r;
  }), n;
}
function zp(r) {
  r === void 0 && (r = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: a,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = r, [u, d] = B.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = B.useState(e);
  _n(f, e) || p(e);
  const [m, g] = B.useState(null), [y, x] = B.useState(null), b = B.useCallback((W) => {
    W !== C.current && (C.current = W, g(W));
  }, []), D = B.useCallback((W) => {
    W !== _.current && (_.current = W, x(W));
  }, []), k = o || m, E = i || y, C = B.useRef(null), _ = B.useRef(null), M = B.useRef(u), O = c != null, P = na(c), L = na(a), F = na(l), $ = B.useCallback(() => {
    if (!C.current || !_.current)
      return;
    const W = {
      placement: n,
      strategy: t,
      middleware: f
    };
    L.current && (W.platform = L.current), Bp(C.current, _.current, W).then((Z) => {
      const pe = {
        ...Z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      H.current && !_n(M.current, pe) && (M.current = pe, Fc.flushSync(() => {
        d(pe);
      }));
    });
  }, [f, n, t, L, F]);
  nn(() => {
    l === !1 && M.current.isPositioned && (M.current.isPositioned = !1, d((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [l]);
  const H = B.useRef(!1);
  nn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), nn(() => {
    if (k && (C.current = k), E && (_.current = E), k && E) {
      if (P.current)
        return P.current(k, E, $);
      $();
    }
  }, [k, E, $, P, O]);
  const K = B.useMemo(() => ({
    reference: C,
    floating: _,
    setReference: b,
    setFloating: D
  }), [b, D]), A = B.useMemo(() => ({
    reference: k,
    floating: E
  }), [k, E]), j = B.useMemo(() => {
    const W = {
      position: t,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return W;
    const Z = Jo(A.floating, u.x), pe = Jo(A.floating, u.y);
    return s ? {
      ...W,
      transform: "translate(" + Z + "px, " + pe + "px)",
      ...Qs(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: Z,
      top: pe
    };
  }, [t, s, A.floating, u.x, u.y]);
  return B.useMemo(() => ({
    ...u,
    update: $,
    refs: K,
    elements: A,
    floatingStyles: j
  }), [u, $, K, A, j]);
}
const Vp = (r) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(t) {
      const {
        element: e,
        padding: a
      } = typeof r == "function" ? r(t) : r;
      return e && n(e) ? e.current != null ? Zo({
        element: e.current,
        padding: a
      }).fn(t) : {} : e ? Zo({
        element: e,
        padding: a
      }).fn(t) : {};
    }
  };
}, Kp = (r, n) => ({
  ...Hp(r),
  options: [r, n]
}), Gp = (r, n) => ({
  ...$p(r),
  options: [r, n]
}), Qp = (r, n) => ({
  ...Vp(r),
  options: [r, n]
}), qs = {
  ...B
}, qp = qs.useInsertionEffect, Up = qp || ((r) => r());
function Xp(r) {
  const n = B.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Up(() => {
    n.current = r;
  }), B.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
      e[a] = arguments[a];
    return n.current == null ? void 0 : n.current(...e);
  }, []);
}
var Sn = typeof document < "u" ? Ma : Le;
let ei = !1, Zp = 0;
const ti = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Zp++
);
function Jp() {
  const [r, n] = B.useState(() => ei ? ti() : void 0);
  return Sn(() => {
    r == null && n(ti());
  }, []), B.useEffect(() => {
    ei = !0;
  }, []), r;
}
const eh = qs.useId, Us = eh || Jp;
let Er;
process.env.NODE_ENV !== "production" && (Er = /* @__PURE__ */ new Set());
function th() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = Er) != null && r.has(a))) {
    var o;
    (o = Er) == null || o.add(a), console.warn(a);
  }
}
function rh() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = Er) != null && r.has(a))) {
    var o;
    (o = Er) == null || o.add(a), console.error(a);
  }
}
const nh = /* @__PURE__ */ B.forwardRef(function(n, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: a
      },
      middlewareData: {
        arrow: o,
        shift: i
      }
    },
    width: s = 14,
    height: c = 7,
    tipRadius: l = 0,
    strokeWidth: u = 0,
    staticOffset: d,
    stroke: f,
    d: p,
    style: {
      transform: m,
      ...g
    } = {},
    ...y
  } = n;
  process.env.NODE_ENV !== "production" && (t || th("The `ref` prop is required for `FloatingArrow`."));
  const x = Us(), [b, D] = B.useState(!1);
  if (Sn(() => {
    if (!a) return;
    Ye(a).direction === "rtl" && D(!0);
  }, [a]), !a)
    return null;
  const [k, E] = e.split("-"), C = k === "top" || k === "bottom";
  let _ = d;
  (C && i != null && i.x || !C && i != null && i.y) && (_ = null);
  const M = u * 2, O = M / 2, P = s / 2 * (l / -8 + 1), L = c / 2 * l / 4, F = !!p, $ = _ && E === "end" ? "bottom" : "top";
  let H = _ && E === "end" ? "right" : "left";
  _ && b && (H = E === "end" ? "left" : "right");
  const K = (o == null ? void 0 : o.x) != null ? _ || o.x : "", A = (o == null ? void 0 : o.y) != null ? _ || o.y : "", j = p || "M0,0" + (" H" + s) + (" L" + (s - P) + "," + (c - L)) + (" Q" + s / 2 + "," + c + " " + P + "," + (c - L)) + " Z", W = {
    top: F ? "rotate(180deg)" : "",
    left: F ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: F ? "" : "rotate(180deg)",
    right: F ? "rotate(-90deg)" : "rotate(90deg)"
  }[k];
  return /* @__PURE__ */ v.jsxs("svg", {
    ...y,
    "aria-hidden": !0,
    ref: t,
    width: F ? s : s + M,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [H]: K,
      [$]: A,
      [k]: C || F ? "100%" : "calc(100% - " + M / 2 + "px)",
      transform: [W, m].filter((Z) => !!Z).join(" "),
      ...g
    },
    children: [M > 0 && /* @__PURE__ */ v.jsx("path", {
      clipPath: "url(#" + x + ")",
      fill: "none",
      stroke: f,
      strokeWidth: M + (p ? 0 : 1),
      d: j
    }), /* @__PURE__ */ v.jsx("path", {
      stroke: M && !p ? y.fill : "none",
      d: j
    }), /* @__PURE__ */ v.jsx("clipPath", {
      id: x,
      children: /* @__PURE__ */ v.jsx("rect", {
        x: -O,
        y: O * (F ? -1 : 1),
        width: s + M,
        height: s
      })
    })]
  });
});
function ah() {
  const r = /* @__PURE__ */ new Map();
  return {
    emit(n, t) {
      var e;
      (e = r.get(n)) == null || e.forEach((a) => a(t));
    },
    on(n, t) {
      r.set(n, [...r.get(n) || [], t]);
    },
    off(n, t) {
      var e;
      r.set(n, ((e = r.get(n)) == null ? void 0 : e.filter((a) => a !== t)) || []);
    }
  };
}
const oh = /* @__PURE__ */ B.createContext(null), ih = /* @__PURE__ */ B.createContext(null), sh = () => {
  var r;
  return ((r = B.useContext(oh)) == null ? void 0 : r.id) || null;
}, ch = () => B.useContext(ih);
function lh(r) {
  const {
    open: n = !1,
    onOpenChange: t,
    elements: e
  } = r, a = Us(), o = B.useRef({}), [i] = B.useState(() => ah()), s = sh() != null;
  if (process.env.NODE_ENV !== "production") {
    const p = e.reference;
    p && !xe(p) && rh("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = B.useState(e.reference), u = Xp((p, m, g) => {
    o.current.openEvent = p ? m : void 0, i.emit("openchange", {
      open: p,
      event: m,
      reason: g,
      nested: s
    }), t == null || t(p, m, g);
  }), d = B.useMemo(() => ({
    setPositionReference: l
  }), []), f = B.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return B.useMemo(() => ({
    dataRef: o,
    open: n,
    onOpenChange: u,
    elements: f,
    events: i,
    floatingId: a,
    refs: d
  }), [n, u, f, i, a, d]);
}
function uh(r) {
  r === void 0 && (r = {});
  const {
    nodeId: n
  } = r, t = lh({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), e = r.rootContext || t, a = e.elements, [o, i] = B.useState(null), [s, c] = B.useState(null), u = (a == null ? void 0 : a.domReference) || o, d = B.useRef(null), f = ch();
  Sn(() => {
    u && (d.current = u);
  }, [u]);
  const p = zp({
    ...r,
    elements: {
      ...a,
      ...s && {
        reference: s
      }
    }
  }), m = B.useCallback((D) => {
    const k = xe(D) ? {
      getBoundingClientRect: () => D.getBoundingClientRect(),
      contextElement: D
    } : D;
    c(k), p.refs.setReference(k);
  }, [p.refs]), g = B.useCallback((D) => {
    (xe(D) || D === null) && (d.current = D, i(D)), (xe(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    D !== null && !xe(D)) && p.refs.setReference(D);
  }, [p.refs]), y = B.useMemo(() => ({
    ...p.refs,
    setReference: g,
    setPositionReference: m,
    domReference: d
  }), [p.refs, g, m]), x = B.useMemo(() => ({
    ...p.elements,
    domReference: u
  }), [p.elements, u]), b = B.useMemo(() => ({
    ...p,
    ...e,
    refs: y,
    elements: x,
    nodeId: n
  }), [p, y, x, n, e]);
  return Sn(() => {
    e.dataRef.current.floatingContext = b;
    const D = f == null ? void 0 : f.nodesRef.current.find((k) => k.id === n);
    D && (D.context = b);
  }), B.useMemo(() => ({
    ...p,
    context: b,
    refs: y,
    elements: x
  }), [p, y, x, b]);
}
/*!
  react-datepicker v8.2.1
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var Ca = function(n, t) {
  return Ca = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, a) {
    e.__proto__ = a;
  } || function(e, a) {
    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
  }, Ca(n, t);
};
function be(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Ca(r, n);
  function t() {
    this.constructor = r;
  }
  r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var X = function() {
  return X = Object.assign || function(t) {
    for (var e, a = 1, o = arguments.length; a < o; a++) {
      e = arguments[a];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, X.apply(this, arguments);
};
function qe(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
var dh = function(r) {
  var n = r.showTimeSelectOnly, t = n === void 0 ? !1 : n, e = r.showTime, a = e === void 0 ? !1 : e, o = r.className, i = r.children, s = t ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return w.createElement("div", { className: o, role: "dialog", "aria-label": s, "aria-modal": "true" }, i);
}, fh = function(r, n) {
  var t = Xe(null), e = Xe(r);
  e.current = r;
  var a = Lc(function(o) {
    var i, s = o.composed && o.composedPath && o.composedPath().find(function(c) {
      return c instanceof Node;
    }) || o.target;
    t.current && !t.current.contains(s) && (n && s instanceof HTMLElement && s.classList.contains(n) || (i = e.current) === null || i === void 0 || i.call(e, o));
  }, [n]);
  return Le(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), t;
}, $n = function(r) {
  var n = r.children, t = r.onClickOutside, e = r.className, a = r.containerRef, o = r.style, i = r.ignoreClass, s = fh(t, i);
  return w.createElement("div", { className: e, style: o, ref: function(c) {
    s.current = c, a && (a.current = c);
  } }, n);
}, T;
(function(r) {
  r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Home = "Home", r.End = "End", r.Enter = "Enter", r.Space = " ", r.Tab = "Tab", r.Escape = "Escape", r.Backspace = "Backspace", r.X = "x";
})(T || (T = {}));
function Xs() {
  var r = typeof window < "u" ? window : globalThis;
  return r;
}
var Or = 12;
function re(r) {
  if (r == null)
    return /* @__PURE__ */ new Date();
  var n = typeof r == "string" ? Kf(r) : I(r);
  return Bn(n) ? n : /* @__PURE__ */ new Date();
}
function aa(r, n, t, e, a) {
  a === void 0 && (a = re());
  for (var o = sr(t) || sr(qa()), i = Array.isArray(n) ? n : [n], s = 0, c = i; s < c.length; s++) {
    var l = c[s], u = Wf(r, l, a, {
      locale: o
    });
    if (Bn(u) && (!e || r === se(u, l, t)))
      return u;
  }
  return null;
}
function Bn(r, n) {
  return gn(r) && !Ft(r, /* @__PURE__ */ new Date("1/1/1800"));
}
function se(r, n, t) {
  if (t === "en")
    return Vo(r, n, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? sr(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), e = e || sr(qa()), Vo(r, n, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Re(r, n) {
  var t = n.dateFormat, e = n.locale, a = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return r && se(r, a, e) || "";
}
function ph(r, n, t) {
  if (!r)
    return "";
  var e = Re(r, t), a = n ? Re(n, t) : "";
  return "".concat(e, " - ").concat(a);
}
function hh(r, n) {
  if (!(r != null && r.length))
    return "";
  var t = r[0] ? Re(r[0], n) : "";
  if (r.length === 1)
    return t;
  if (r.length === 2 && r[1]) {
    var e = Re(r[1], n);
    return "".concat(t, ", ").concat(e);
  }
  var a = r.length - 1;
  return "".concat(t, " (+").concat(a, ")");
}
function oa(r, n) {
  var t = n.hour, e = t === void 0 ? 0 : t, a = n.minute, o = a === void 0 ? 0 : a, i = n.second, s = i === void 0 ? 0 : i;
  return en(tn(rn(r, s), o), e);
}
function mh(r) {
  return ja(r);
}
function gh(r, n) {
  return se(r, "ddd", n);
}
function an(r) {
  return Yt(r);
}
function yt(r, n, t) {
  var e = sr(n || qa());
  return lt(r, {
    locale: e,
    weekStartsOn: t
  });
}
function ct(r) {
  return Ms(r);
}
function wr(r) {
  return Yn(r);
}
function ri(r) {
  return Da(r);
}
function ni() {
  return Yt(re());
}
function ai(r) {
  return Cs(r);
}
function vh(r) {
  return Vu(r);
}
function yh(r) {
  return Es(r);
}
function Ke(r, n) {
  return r && n ? zf(r, n) : !r && !n;
}
function Se(r, n) {
  return r && n ? $f(r, n) : !r && !n;
}
function Cn(r, n) {
  return r && n ? Bf(r, n) : !r && !n;
}
function U(r, n) {
  return r && n ? Bu(r, n) : !r && !n;
}
function Pt(r, n) {
  return r && n ? zd(r, n) : !r && !n;
}
function br(r, n, t) {
  var e, a = Yt(n), o = Cs(t);
  try {
    e = _r(r, { start: a, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function qa() {
  var r = Xs();
  return r.__localeId__;
}
function sr(r) {
  if (typeof r == "string") {
    var n = Xs();
    return n.__localeData__ ? n.__localeData__[r] : void 0;
  } else
    return r;
}
function wh(r, n, t) {
  return n(se(r, "EEEE", t));
}
function bh(r, n) {
  return se(r, "EEEEEE", n);
}
function Dh(r, n) {
  return se(r, "EEE", n);
}
function Ua(r, n) {
  return se(Ne(re(), r), "LLLL", n);
}
function Zs(r, n) {
  return se(Ne(re(), r), "LLL", n);
}
function xh(r, n) {
  return se(Qt(re(), r), "QQQ", n);
}
function Ie(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.excludeDateIntervals, s = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Tr(r, { minDate: e, maxDate: a }) || o && o.some(function(u) {
    return u instanceof Date ? U(r, u) : U(r, u.date);
  }) || i && i.some(function(u) {
    var d = u.start, f = u.end;
    return _r(r, { start: d, end: f });
  }) || s && !s.some(function(u) {
    return U(r, u);
  }) || c && !c.some(function(u) {
    var d = u.start, f = u.end;
    return _r(r, { start: d, end: f });
  }) || l && !l(re(r)) || !1;
}
function Xa(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeDates, a = t.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(o) {
    var i = o.start, s = o.end;
    return _r(r, { start: i, end: s });
  }) : e && e.some(function(o) {
    var i;
    return o instanceof Date ? U(r, o) : U(r, (i = o.date) !== null && i !== void 0 ? i : /* @__PURE__ */ new Date());
  }) || !1;
}
function Js(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Tr(r, {
    minDate: e ? Ms(e) : void 0,
    maxDate: a ? Es(a) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return Se(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return Se(r, c);
  }) || s && !s(re(r)) || !1;
}
function Br(r, n, t, e) {
  var a = G(r), o = Ee(r), i = G(n), s = Ee(n), c = G(e);
  return a === i && a === c ? o <= t && t <= s : a < i ? c === a && o <= t || c === i && s >= t || c < i && c > a : !1;
}
function kh(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates;
  return Tr(r, { minDate: e, maxDate: a }) || o && o.some(function(s) {
    return Se(s instanceof Date ? s : s.date, r);
  }) || i && !i.some(function(s) {
    return Se(s, r);
  }) || !1;
}
function zr(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Tr(r, { minDate: e, maxDate: a }) || (o == null ? void 0 : o.some(function(c) {
    return Cn(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return Cn(r, c);
  }) || s && !s(re(r)) || !1;
}
function Vr(r, n, t) {
  if (!n || !t || !gn(n) || !gn(t))
    return !1;
  var e = G(n), a = G(t);
  return e <= r && a >= r;
}
function on(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate, c = new Date(r, 0, 1);
  return Tr(c, {
    minDate: e ? Yn(e) : void 0,
    maxDate: a ? Ps(a) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return Ke(c, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return Ke(c, l);
  }) || s && !s(re(c)) || !1;
}
function Kr(r, n, t, e) {
  var a = G(r), o = Tt(r), i = G(n), s = Tt(n), c = G(e);
  return a === i && a === c ? o <= t && t <= s : a < i ? c === a && o <= t || c === i && s >= t || c < i && c > a : !1;
}
function Tr(r, n) {
  var t, e = n === void 0 ? {} : n, a = e.minDate, o = e.maxDate;
  return (t = a && rr(r, a) < 0 || o && rr(r, o) > 0) !== null && t !== void 0 ? t : !1;
}
function oi(r, n) {
  return n.some(function(t) {
    return it(t) === it(r) && st(t) === st(r) && vt(t) === vt(r);
  });
}
function ii(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeTimes, a = t.includeTimes, o = t.filterTime;
  return e && oi(r, e) || a && !oi(r, a) || o && !o(r) || !1;
}
function si(r, n) {
  var t = n.minTime, e = n.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var a = re();
  a = en(a, it(r)), a = tn(a, st(r)), a = rn(a, vt(r));
  var o = re();
  o = en(o, it(t)), o = tn(o, st(t)), o = rn(o, vt(t));
  var i = re();
  i = en(i, it(e)), i = tn(i, st(e)), i = rn(i, vt(e));
  var s;
  try {
    s = !_r(a, { start: o, end: i });
  } catch {
    s = !1;
  }
  return s;
}
function ci(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = Rt(r, 1);
  return e && vn(e, o) > 0 || a && a.every(function(i) {
    return vn(i, o) > 0;
  }) || !1;
}
function li(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = Be(r, 1);
  return e && vn(o, e) > 0 || a && a.every(function(i) {
    return vn(o, i) > 0;
  }) || !1;
}
function _h(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = Yn(r), i = Fs(o);
  return e && yn(e, i) > 0 || a && a.every(function(s) {
    return yn(s, i) > 0;
  }) || !1;
}
function Sh(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = Ps(r), i = Fa(o, 1);
  return e && yn(i, e) > 0 || a && a.every(function(s) {
    return yn(i, s) > 0;
  }) || !1;
}
function ui(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = nr(r, 1);
  return e && wn(e, o) > 0 || a && a.every(function(i) {
    return wn(i, o) > 0;
  }) || !1;
}
function Ch(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.yearItemNumber, o = a === void 0 ? Or : a, i = wr(nr(r, o)), s = mt(i, o).endPeriod, c = e && G(e);
  return c && c > s || !1;
}
function di(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = at(r, 1);
  return e && wn(o, e) > 0 || a && a.every(function(i) {
    return wn(o, i) > 0;
  }) || !1;
}
function Eh(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.yearItemNumber, o = a === void 0 ? Or : a, i = at(r, o), s = mt(i, o).startPeriod, c = e && G(e);
  return c && c < s || !1;
}
function ec(r) {
  var n = r.minDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return rr(a, n) >= 0;
    });
    return jo(e);
  } else return t ? jo(t) : n;
}
function tc(r) {
  var n = r.maxDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return rr(a, n) <= 0;
    });
    return Fo(e);
  } else return t ? Fo(t) : n;
}
function fi(r, n) {
  var t;
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), a = 0, o = r.length; a < o; a++) {
    var i = r[a];
    if (ot(i)) {
      var s = se(i, "MM.dd.yyyy"), c = e.get(s) || [];
      c.includes(n) || (c.push(n), e.set(s, c));
    } else if (typeof i == "object") {
      var l = Object.keys(i), u = (t = l[0]) !== null && t !== void 0 ? t : "", d = i[u];
      if (typeof u == "string" && Array.isArray(d))
        for (var f = 0, p = d.length; f < p; f++) {
          var m = d[f];
          if (m) {
            var s = se(m, "MM.dd.yyyy"), c = e.get(s) || [];
            c.includes(u) || (c.push(u), e.set(s, c));
          }
        }
    }
  }
  return e;
}
function Mh(r, n) {
  return r.length !== n.length ? !1 : r.every(function(t, e) {
    return t === n[e];
  });
}
function Ph(r, n) {
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return r.forEach(function(e) {
    var a = e.date, o = e.holidayName;
    if (ot(a)) {
      var i = se(a, "MM.dd.yyyy"), s = t.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === n && Mh(s.holidayNames, [o]))) {
        s.className = n;
        var c = s.holidayNames;
        s.holidayNames = c ? qe(qe([], c, !0), [o], !1) : [o], t.set(i, s);
      }
    }
  }), t;
}
function Oh(r, n, t, e, a) {
  for (var o = a.length, i = [], s = 0; s < o; s++) {
    var c = r, l = a[s];
    l && (c = ju(c, it(l)), c = ba(c, st(l)), c = $u(c, vt(l)));
    var u = ba(r, (t + 1) * e);
    bt(c, n) && Ft(c, u) && l != null && i.push(l);
  }
  return i;
}
function pi(r) {
  return r < 10 ? "0".concat(r) : "".concat(r);
}
function mt(r, n) {
  n === void 0 && (n = Or);
  var t = Math.ceil(G(r) / n) * n, e = t - (n - 1);
  return { startPeriod: e, endPeriod: t };
}
function Th(r) {
  var n = new Date(r.getFullYear(), r.getMonth(), r.getDate()), t = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 24);
  return Math.round((+t - +n) / 36e5);
}
function hi(r) {
  var n = r.getSeconds(), t = r.getMilliseconds();
  return I(r.getTime() - n * 1e3 - t);
}
function Rh(r, n) {
  return hi(r).getTime() === hi(n).getTime();
}
function mi(r) {
  if (!ot(r))
    throw new Error("Invalid date");
  var n = new Date(r);
  return n.setHours(0, 0, 0, 0), n;
}
function gi(r, n) {
  if (!ot(r) || !ot(n))
    throw new Error("Invalid date received");
  var t = mi(r), e = mi(n);
  return Ft(t, e);
}
function rc(r) {
  return r.key === T.Space;
}
var Nh = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.inputRef = w.createRef(), e.onTimeChange = function(a) {
        var o, i;
        e.setState({ time: a });
        var s = e.props.date, c = s instanceof Date && !isNaN(+s), l = c ? s : /* @__PURE__ */ new Date();
        if (a != null && a.includes(":")) {
          var u = a.split(":"), d = u[0], f = u[1];
          l.setHours(Number(d)), l.setMinutes(Number(f));
        }
        (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, l);
      }, e.renderTimeInput = function() {
        var a = e.state.time, o = e.props, i = o.date, s = o.timeString, c = o.customTimeInput;
        return c ? Ci(c, {
          date: i,
          value: a,
          onChange: e.onTimeChange
        }) : w.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var l;
          (l = e.inputRef.current) === null || l === void 0 || l.focus();
        }, required: !0, value: a, onChange: function(l) {
          e.onTimeChange(l.target.value || s);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return n.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, n.prototype.render = function() {
      return w.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        w.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        w.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          w.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, n;
  }(we)
), Ih = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.dayEl = wt(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, i = e.key;
        i === T.Space && (e.preventDefault(), e.key = T.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isSameDay = function(e) {
        return U(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var a = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !a && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), Ie(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return Xa(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return U(t.props.day, yt(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && U(e, yt(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, a = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var i = se(a, "MM.dd.yyyy");
        return o.get(i);
      }, t.getHolidaysClass = function() {
        var e, a = t.props, o = a.day, i = a.holidays;
        if (!i)
          return [void 0];
        var s = se(o, "MM.dd.yyyy");
        return i.has(s) ? [(e = i.get(s)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : br(a, o, i);
      }, t.isInSelectingRange = function() {
        var e, a = t.props, o = a.day, i = a.selectsStart, s = a.selectsEnd, c = a.selectsRange, l = a.selectsDisabledDaysInRange, u = a.startDate, d = a.endDate, f = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(i || s || c) || !f || !l && t.isDisabled() ? !1 : i && d && (Ft(f, d) || Pt(f, d)) ? br(o, f, d) : s && u && (bt(f, u) || Pt(f, u)) || c && u && !d && (bt(f, u) || Pt(f, u)) ? br(o, u, f) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, i = a.startDate, s = a.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? U(o, c) : U(o, i);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, i = a.endDate, s = a.selectsEnd, c = a.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s || c ? U(o, l) : U(o, i);
      }, t.isRangeStart = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : U(o, a);
      }, t.isRangeEnd = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : U(i, a);
      }, t.isWeekend = function() {
        var e = Wd(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === Ee(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (Ee(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(re());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(a) {
          return t.isSameDayOrWeek(a);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var a = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return De("react-datepicker__day", a, "react-datepicker__day--" + gh(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var e = t.props, a = e.day, o = e.ariaLabelPrefixWhenEnabled, i = o === void 0 ? "Choose" : o, s = e.ariaLabelPrefixWhenDisabled, c = s === void 0 ? "Not available" : s, l = t.isDisabled() || t.isExcluded() ? c : i;
        return "".concat(l, " ").concat(se(a, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, a = e.day, o = e.holidays, i = o === void 0 ? /* @__PURE__ */ new Map() : o, s = e.excludeDates, c = se(a, "MM.dd.yyyy"), l = [];
        return i.has(c) && l.push.apply(l, i.get(c).holidayNames), t.isExcluded() && l.push(s == null ? void 0 : s.filter(function(u) {
          return u instanceof Date ? U(u, a) : U(u == null ? void 0 : u.date, a);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, a = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && U(a, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(Ko(t.props.day), t.props.day) : Ko(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          w.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && w.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return n.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, n.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, n.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, n.prototype.isDayActiveElement = function() {
      var t, e, a;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((a = document.activeElement) === null || a === void 0 ? void 0 : a.classList.contains("react-datepicker__day"));
    }, n.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, n;
  }(we)
), Lh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.weekNumberEl = wt(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, i = e.key;
        i === T.Space && (e.preventDefault(), e.key = T.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !U(t.props.date, t.props.selected) && U(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || U(t.props.date, t.props.selected) && U(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var a = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && U(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), t.props.inline && !t.props.shouldFocusDayInline && (a = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, n.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, n.prototype.render = function() {
      var t = this.props, e = t.weekNumber, a = t.isWeekDisabled, o = t.ariaLabelPrefix, i = o === void 0 ? n.defaultProps.ariaLabelPrefix : o, s = t.onClick, c = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!s && !a,
        "react-datepicker__week-number--selected": !!s && U(this.props.date, this.props.selected)
      };
      return w.createElement("div", { ref: this.weekNumberEl, className: De(c), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, n;
  }(we)
), Ah = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return Ie(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, a) {
        t.props.onDayClick && t.props.onDayClick(e, a);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, a, o) {
        for (var i, s, c, l = new Date(e), u = 0; u < 7; u++) {
          var d = new Date(e);
          d.setDate(d.getDate() + u);
          var f = !t.isDisabled(d);
          if (f) {
            l = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, a, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((i = t.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : n.defaultProps.shouldCloseOnSelect) && ((c = (s = t.props).setOpen) === null || c === void 0 || c.call(s, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : mh(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), a = $e(e, 6), o = new Date(e); o <= a; ) {
          if (!t.isDisabled(o))
            return !1;
          o = $e(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), a = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var i = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          a.push(w.createElement(Lh, X({ key: "W" }, n.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: i })));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = $e(e, s);
          return w.createElement(Ih, X({}, n.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return yt(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !U(t.startOfWeek(), t.props.selected) && U(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": U(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return w.createElement("div", { className: De(t) }, this.renderDays());
    }, n;
  }(we)
), vr, Yh = 6, Ut = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, ia = (vr = {}, vr[Ut.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, vr[Ut.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, vr[Ut.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, vr), Gr = 1;
function vi(r, n) {
  return r ? Ut.FOUR_COLUMNS : n ? Ut.TWO_COLUMNS : Ut.THREE_COLUMNS;
}
var Fh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.MONTH_REFS = qe([], Array(12), !0).map(function() {
        return wt();
      }), t.QUARTER_REFS = qe([], Array(4), !0).map(function() {
        return wt();
      }), t.isDisabled = function(e) {
        return Ie(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return Xa(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, a) {
        var o, i;
        (i = (o = t.props).onDayClick) === null || i === void 0 || i.call(o, e, a, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var a, o;
        (o = (a = t.props).onDayMouseEnter) === null || o === void 0 || o.call(a, e);
      }, t.handleMouseLeave = function() {
        var e, a;
        (a = (e = t.props).onMouseLeave) === null || a === void 0 || a.call(e);
      }, t.isRangeStartMonth = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Se(Ne(o, e), i);
      }, t.isRangeStartQuarter = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Cn(Qt(o, e), i);
      }, t.isRangeEndMonth = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Se(Ne(o, e), s);
      }, t.isRangeEndQuarter = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Cn(Qt(o, e), s);
      }, t.isInSelectingRangeMonth = function(e) {
        var a, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(s || c || l) || !f ? !1 : s && d ? Br(f, d, e, i) : c && u || l && u && !d ? Br(u, f, e, i) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.startDate, c = o.selectsStart, l = Ne(i, e), u = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c ? Se(l, u) : Se(l, s);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = Ne(i, e), d = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c || l ? Se(u, d) : Se(u, s);
      }, t.isInSelectingRangeQuarter = function(e) {
        var a, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(s || c || l) || !f ? !1 : s && d ? Kr(f, d, e, i) : c && u || l && u && !d ? Kr(u, f, e, i) : !1;
      }, t.isWeekInMonth = function(e) {
        var a = t.props.day, o = $e(e, 6);
        return Se(e, a) || Se(o, a);
      }, t.isCurrentMonth = function(e, a) {
        return G(e) === G(re()) && a === Ee(re());
      }, t.isCurrentQuarter = function(e, a) {
        return G(e) === G(re()) && a === Tt(re());
      }, t.isSelectedMonth = function(e, a, o) {
        return Ee(o) === a && G(e) === G(o);
      }, t.isSelectMonthInList = function(e, a, o) {
        return o.some(function(i) {
          return t.isSelectedMonth(e, a, i);
        });
      }, t.isSelectedQuarter = function(e, a, o) {
        return Tt(e) === a && G(e) === G(o);
      }, t.renderWeeks = function() {
        for (var e = [], a = t.props.fixedHeight, o = 0, i = !1, s = yt(ct(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(m) {
          return t.props.showWeekPicker ? yt(m, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(m) {
          return t.props.showWeekPicker ? yt(m, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(w.createElement(Ah, X({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: s, month: Ee(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !i; ) {
          o++, s = mn(s, 1);
          var f = a && o >= Yh, p = !a && !t.isWeekInMonth(s);
          if (f || p)
            if (t.props.peekNextMonth)
              i = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, a) {
        var o = t.isMonthDisabledForLabelDate(a), i = o.isDisabled, s = o.labelDate;
        i || t.handleDayClick(ct(s), e);
      }, t.onMonthMouseEnter = function(e) {
        var a = t.isMonthDisabledForLabelDate(e), o = a.isDisabled, i = a.labelDate;
        o || t.handleDayMouseEnter(ct(i));
      }, t.handleMonthNavigation = function(e, a) {
        var o, i, s, c;
        (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, a), (c = (s = t.MONTH_REFS[e]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, a, o) {
        var i, s = t.props, c = s.selected, l = s.preSelection, u = s.setPreSelection, d = s.minDate, f = s.maxDate, p = s.showFourColumnMonthYearPicker, m = s.showTwoColumnMonthYearPicker;
        if (l) {
          var g = vi(p, m), y = t.getVerticalOffset(g), x = (i = ia[g]) === null || i === void 0 ? void 0 : i.grid, b = function(_, M, O) {
            var P, L, F = M, $ = O;
            switch (_) {
              case T.ArrowRight:
                F = Be(M, Gr), $ = O === 11 ? 0 : O + Gr;
                break;
              case T.ArrowLeft:
                F = Rt(M, Gr), $ = O === 0 ? 11 : O - Gr;
                break;
              case T.ArrowUp:
                F = Rt(M, y), $ = !((P = x == null ? void 0 : x[0]) === null || P === void 0) && P.includes(O) ? O + 12 - y : O - y;
                break;
              case T.ArrowDown:
                F = Be(M, y), $ = !((L = x == null ? void 0 : x[x.length - 1]) === null || L === void 0) && L.includes(O) ? O - 12 + y : O + y;
                break;
            }
            return { newCalculatedDate: F, newCalculatedMonth: $ };
          }, D = function(_, M, O) {
            for (var P = 40, L = _, F = !1, $ = 0, H = b(L, M, O), K = H.newCalculatedDate, A = H.newCalculatedMonth; !F; ) {
              if ($ >= P) {
                K = M, A = O;
                break;
              }
              if (d && K < d) {
                L = T.ArrowRight;
                var j = b(L, K, A);
                K = j.newCalculatedDate, A = j.newCalculatedMonth;
              }
              if (f && K > f) {
                L = T.ArrowLeft;
                var j = b(L, K, A);
                K = j.newCalculatedDate, A = j.newCalculatedMonth;
              }
              if (kh(K, t.props)) {
                var j = b(L, K, A);
                K = j.newCalculatedDate, A = j.newCalculatedMonth;
              } else
                F = !0;
              $++;
            }
            return { newCalculatedDate: K, newCalculatedMonth: A };
          };
          if (a === T.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var k = D(a, l, o), E = k.newCalculatedDate, C = k.newCalculatedMonth;
          switch (a) {
            case T.ArrowRight:
            case T.ArrowLeft:
            case T.ArrowUp:
            case T.ArrowDown:
              t.handleMonthNavigation(C, E);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var a, o;
        return (o = (a = ia[e]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, a) {
        var o = t.props, i = o.disabledKeyboardNavigation, s = o.handleOnMonthKeyDown, c = e.key;
        c !== T.Tab && e.preventDefault(), i || t.handleKeyboardNavigation(e, c, a), s && s(e);
      }, t.onQuarterClick = function(e, a) {
        var o = Qt(t.props.day, a);
        zr(o, t.props) || t.handleDayClick(ri(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var a = Qt(t.props.day, e);
        zr(a, t.props) || t.handleDayMouseEnter(ri(a));
      }, t.handleQuarterNavigation = function(e, a) {
        var o, i, s, c;
        t.isDisabled(a) || t.isExcluded(a) || ((i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, a), (c = (s = t.QUARTER_REFS[e - 1]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, a) {
        var o, i, s = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case T.Enter:
              t.onQuarterClick(e, a), (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, t.props.selected);
              break;
            case T.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 4 ? 1 : a + 1, Fa(t.props.preSelection, 1));
              break;
            case T.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 1 ? 4 : a - 1, Fs(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var a, o = t.props, i = o.day, s = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = Ne(i, e);
        return {
          isDisabled: (a = (s || c || l || u) && Js(d, t.props)) !== null && a !== void 0 ? a : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var a = t.isMonthDisabledForLabelDate(e).isDisabled;
        return a;
      }, t.getMonthClassNames = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate, c = a.preSelection, l = a.monthClassName, u = l ? l(Ne(o, e)) : void 0, d = t.getSelection();
        return De("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": i && s ? Br(i, s, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Ee(t.props.preSelection), o = t.isMonthDisabledForLabelDate(a).isDisabled, i = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var a = Tt(t.props.preSelection), o = zr(t.props.day, t.props), i = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getAriaLabel = function(e) {
        var a = t.props, o = a.chooseDayAriaLabelPrefix, i = o === void 0 ? "Choose" : o, s = a.disabledDayAriaLabelPrefix, c = s === void 0 ? "Not available" : s, l = a.day, u = a.locale, d = Ne(l, e), f = t.isDisabled(d) || t.isExcluded(d) ? c : i;
        return "".concat(f, " ").concat(se(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate, c = a.selected, l = a.minDate, u = a.maxDate, d = a.excludeDates, f = a.includeDates, p = a.filterDate, m = a.preSelection, g = a.disabledKeyboardNavigation, y = (l || u || d || f || p) && zr(Qt(o, e), t.props);
        return De("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": y,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !g && m && t.isSelectedQuarter(o, e, m) && !y,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": i && s ? Kr(i, s, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e),
          "react-datepicker__quarter-text--today": t.isCurrentQuarter(o, e)
        });
      }, t.getMonthContent = function(e) {
        var a = t.props, o = a.showFullMonthYearPicker, i = a.renderMonthContent, s = a.locale, c = a.day, l = Zs(e, s), u = Ua(e, s);
        return i ? i(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var a, o = t.props, i = o.renderQuarterContent, s = o.locale, c = xh(e, s);
        return (a = i == null ? void 0 : i(e, c)) !== null && a !== void 0 ? a : c;
      }, t.renderMonths = function() {
        var e, a = t.props, o = a.showTwoColumnMonthYearPicker, i = a.showFourColumnMonthYearPicker, s = a.day, c = a.selected, l = (e = ia[vi(i, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return w.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(f, p) {
            return w.createElement("div", { ref: t.MONTH_REFS[f], key: p, onClick: function(m) {
              t.onMonthClick(m, f);
            }, onKeyDown: function(m) {
              rc(m) && (m.preventDefault(), m.key = T.Enter), t.onMonthKeyDown(m, f);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(f);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(f);
            } : void 0, tabIndex: Number(t.getTabIndex(f)), className: t.getMonthClassNames(f), "aria-disabled": t.isMonthDisabled(f), role: "option", "aria-label": t.getAriaLabel(f), "aria-current": t.isCurrentMonth(s, f) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(s, f, c) : void 0 }, t.getMonthContent(f));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, a = e.day, o = e.selected, i = [1, 2, 3, 4];
        return w.createElement("div", { className: "react-datepicker__quarter-wrapper" }, i.map(function(s, c) {
          return w.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
            t.onQuarterClick(l, s);
          }, onKeyDown: function(l) {
            t.onQuarterKeyDown(l, s);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(s);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(s);
          } : void 0, className: t.getQuarterClassNames(s), "aria-selected": o ? t.isSelectedQuarter(a, s, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(s)), "aria-current": t.isCurrentQuarter(a, s) ? "date" : void 0 }, t.getQuarterContent(s));
        }));
      }, t.getClassNames = function() {
        var e = t.props, a = e.selectingDate, o = e.selectsStart, i = e.selectsEnd, s = e.showMonthYearPicker, c = e.showQuarterYearPicker, l = e.showWeekPicker;
        return De("react-datepicker__month", {
          "react-datepicker__month--selecting-range": a && (o || i)
        }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": l });
      }, t;
    }
    return n.prototype.getSelection = function() {
      var t = this.props, e = t.selected, a = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return a;
      if (e)
        return [e];
    }, n.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, a = t.showQuarterYearPicker, o = t.day, i = t.ariaLabelPrefix, s = i === void 0 ? "Month " : i, c = s ? s.trim() + " " : "";
      return w.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(se(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : a ? this.renderQuarters() : this.renderWeeks());
    }, n;
  }(we)
), jh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, a) {
          return w.createElement(
            "div",
            { className: t.isSelectedMonth(a) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, a), "aria-selected": t.isSelectedMonth(a) ? "true" : void 0 },
            t.isSelectedMonth(a) ? w.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return n.prototype.render = function() {
      return w.createElement($n, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(we)
), Wh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(a, o) {
          return w.createElement("option", { key: a, value: o }, a);
        });
      }, t.renderSelectMode = function(e) {
        return w.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(a) {
          return t.onChange(parseInt(a.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, a) {
        return w.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          w.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, a[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return w.createElement(jh, X({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var a = t.state.dropdownVisible, o = [t.renderReadView(!a, e)];
        return a && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return n.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return Zs(o, t.props.locale);
      } : function(o) {
        return Ua(o, t.props.locale);
      }), a;
      switch (this.props.dropdownMode) {
        case "scroll":
          a = this.renderScrollMode(e);
          break;
        case "select":
          a = this.renderSelectMode(e);
          break;
      }
      return w.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, a);
    }, n;
  }(we)
);
function Hh(r, n) {
  for (var t = [], e = ct(r), a = ct(n); !bt(e, a); )
    t.push(re(e)), e = Be(e, 1);
  return t;
}
var $h = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(a) {
          var o = ka(a), i = Ke(e.props.date, a) && Se(e.props.date, a);
          return w.createElement(
            "div",
            { className: i ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": i ? "true" : void 0 },
            i ? w.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            se(a, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(a) {
        return e.props.onChange(a);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: Hh(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return n.prototype.render = function() {
      var t = De({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return w.createElement($n, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(we)
), Bh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = ct(t.props.minDate), a = ct(t.props.maxDate), o = []; !bt(e, a); ) {
          var i = ka(e);
          o.push(w.createElement("option", { key: i, value: i }, se(e, t.props.dateFormat, t.props.locale))), e = Be(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return w.createElement("select", { value: ka(ct(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var a = se(t.props.date, t.props.dateFormat, t.props.locale);
        return w.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          w.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, a)
        );
      }, t.renderDropdown = function() {
        return w.createElement($h, X({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var a = re(e);
        Ke(t.props.date, a) && Se(t.props.date, a) || t.props.onChange(a);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return n.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return w.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(we)
), zh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, a, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && n.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((a = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && a !== void 0 ? a : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var a, o;
        (t.props.minTime || t.props.maxTime) && si(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && ii(e, t.props) || (o = (a = t.props).onChange) === null || o === void 0 || o.call(a, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && Rh(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && si(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && ii(e, t.props);
      }, t.liClasses = function(e) {
        var a, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (it(e) * 3600 + st(e) * 60 + vt(e)) % (((a = t.props.intervals) !== null && a !== void 0 ? a : n.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, a) {
        var o, i;
        e.key === T.Space && (e.preventDefault(), e.key = T.Enter), (e.key === T.ArrowUp || e.key === T.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === T.ArrowDown || e.key === T.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === T.Enter && t.handleClick(a), (i = (o = t.props).handleOnKeyDown) === null || i === void 0 || i.call(o, e);
      }, t.renderTimes = function() {
        for (var e, a = [], o = typeof t.props.format == "string" ? t.props.format : "p", i = (e = t.props.intervals) !== null && e !== void 0 ? e : n.defaultProps.intervals, s = t.props.selected || t.props.openToDate || re(), c = an(s), l = t.props.injectTimes && t.props.injectTimes.sort(function(y, x) {
          return y.getTime() - x.getTime();
        }), u = 60 * Th(s), d = u / i, f = 0; f < d; f++) {
          var p = ba(c, f * i);
          if (a.push(p), l) {
            var m = Oh(c, p, f, i, l);
            a = a.concat(m);
          }
        }
        var g = a.reduce(function(y, x) {
          return x.getTime() <= s.getTime() ? x : y;
        }, a[0]);
        return a.map(function(y) {
          return w.createElement("li", { key: y.valueOf(), onClick: t.handleClick.bind(t, y), className: t.liClasses(y), ref: function(x) {
            y === g && (t.centerLi = x);
          }, onKeyDown: function(x) {
            t.handleOnKeyDown(x, y);
          }, tabIndex: y === g ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(y) ? "true" : void 0, "aria-disabled": t.isDisabledTime(y) ? "true" : void 0 }, se(y, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? w.createElement(w.Fragment, null) : w.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          w.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, n.prototype.render = function() {
      var t = this, e, a = this.state.height;
      return w.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : n.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        w.createElement(
          "div",
          { className: "react-datepicker__time" },
          w.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            w.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: a ? { height: a } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, n.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, n;
  }(we)
), yi = 3, Vh = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.YEAR_REFS = qe([], Array(e.props.yearItemNumber), !0).map(function() {
        return wt();
      }), e.isDisabled = function(a) {
        return Ie(a, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(a) {
        return Xa(a, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var a;
        return (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(a) {
        var o = function() {
          var i, s;
          (s = (i = e.YEAR_REFS[a]) === null || i === void 0 ? void 0 : i.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(a, o) {
        e.props.onDayClick && e.props.onDayClick(a, o);
      }, e.handleYearNavigation = function(a, o) {
        var i, s, c, l, u = e.props, d = u.date, f = u.yearItemNumber;
        if (!(d === void 0 || f === void 0)) {
          var p = mt(d, f).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, o), a - p < 0 ? e.updateFocusOnPaginate(f - (p - a)) : a - p >= f ? e.updateFocusOnPaginate(Math.abs(f - (a - p))) : (l = (c = e.YEAR_REFS[a - p]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(a, o) {
        return U(a, o);
      }, e.isCurrentYear = function(a) {
        return a === G(re());
      }, e.isRangeStart = function(a) {
        return e.props.startDate && e.props.endDate && Ke(ze(re(), a), e.props.startDate);
      }, e.isRangeEnd = function(a) {
        return e.props.startDate && e.props.endDate && Ke(ze(re(), a), e.props.endDate);
      }, e.isInRange = function(a) {
        return Vr(a, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(a) {
        var o = e.props, i = o.selectsStart, s = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(i || s || c) || !e.selectingDate() ? !1 : i && u ? Vr(a, e.selectingDate(), u) : s && l || c && l && !u ? Vr(a, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var i = e.props, s = i.startDate, c = i.selectsStart, l = ze(re(), a);
        return c ? Ke(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ke(l, s ?? null);
      }, e.isSelectingRangeEnd = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var i = e.props, s = i.endDate, c = i.selectsEnd, l = i.selectsRange, u = ze(re(), a);
        return c || l ? Ke(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ke(u, s ?? null);
      }, e.isKeyboardSelected = function(a) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, i = o.minDate, s = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = wr(ze(e.props.date, a)), f = (i || s || c || l || u) && on(a, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !U(d, wr(e.props.selected)) && U(d, wr(e.props.preSelection)) && !f;
        }
      }, e.onYearClick = function(a, o) {
        var i = e.props.date;
        i !== void 0 && e.handleYearClick(wr(ze(i, o)), a);
      }, e.onYearKeyDown = function(a, o) {
        var i, s, c = a.key, l = e.props, u = l.date, d = l.yearItemNumber, f = l.handleOnKeyDown;
        if (c !== T.Tab && a.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case T.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(a, o), (s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, e.props.selected);
              break;
            case T.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, at(e.props.preSelection, 1));
              break;
            case T.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, nr(e.props.preSelection, 1));
              break;
            case T.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var p = mt(u, d).startPeriod, m = yi, g = o - m;
              if (g < p) {
                var y = d % m;
                o >= p && o < p + y ? m = y : m += y, g = o - m;
              }
              e.handleYearNavigation(g, nr(e.props.preSelection, m));
              break;
            }
            case T.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var x = mt(u, d).endPeriod, m = yi, g = o + m;
              if (g > x) {
                var y = d % m;
                o <= x && o > x - y ? m = y : m += y, g = o + m;
              }
              e.handleYearNavigation(g, at(e.props.preSelection, m));
              break;
            }
          }
        f && f(a);
      }, e.getYearClassNames = function(a) {
        var o = e.props, i = o.date, s = o.minDate, c = o.maxDate, l = o.selected, u = o.excludeDates, d = o.includeDates, f = o.filterDate, p = o.yearClassName;
        return De("react-datepicker__year-text", "react-datepicker__year-".concat(a), i ? p == null ? void 0 : p(ze(i, a)) : void 0, {
          "react-datepicker__year-text--selected": l ? a === G(l) : void 0,
          "react-datepicker__year-text--disabled": (s || c || u || d || f) && on(a, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(a),
          "react-datepicker__year-text--range-start": e.isRangeStart(a),
          "react-datepicker__year-text--range-end": e.isRangeEnd(a),
          "react-datepicker__year-text--in-range": e.isInRange(a),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(a),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(a),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(a),
          "react-datepicker__year-text--today": e.isCurrentYear(a)
        });
      }, e.getYearTabIndex = function(a) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = G(e.props.preSelection), i = on(a, e.props);
        return a === o && !i ? "0" : "-1";
      }, e.getYearContent = function(a) {
        return e.props.renderYearContent ? e.props.renderYearContent(a) : a;
      }, e;
    }
    return n.prototype.render = function() {
      var t = this, e = [], a = this.props, o = a.date, i = a.yearItemNumber, s = a.onYearMouseEnter, c = a.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = mt(o, i), u = l.startPeriod, d = l.endPeriod, f = function(g) {
        e.push(w.createElement("div", { ref: p.YEAR_REFS[g - u], onClick: function(y) {
          t.onYearClick(y, g);
        }, onKeyDown: function(y) {
          rc(y) && (y.preventDefault(), y.key = T.Enter), t.onYearKeyDown(y, g);
        }, tabIndex: Number(p.getYearTabIndex(g)), className: p.getYearClassNames(g), onMouseEnter: p.props.usePointerEvent ? void 0 : function(y) {
          return s(y, g);
        }, onPointerEnter: p.props.usePointerEvent ? function(y) {
          return s(y, g);
        } : void 0, onMouseLeave: p.props.usePointerEvent ? void 0 : function(y) {
          return c(y, g);
        }, onPointerLeave: p.props.usePointerEvent ? function(y) {
          return c(y, g);
        } : void 0, key: g, "aria-current": p.isCurrentYear(g) ? "date" : void 0 }, p.getYearContent(g)));
      }, p = this, m = u; m <= d; m++)
        f(m);
      return w.createElement(
        "div",
        { className: "react-datepicker__year" },
        w.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, n;
  }(we)
);
function Kh(r, n, t, e) {
  for (var a = [], o = 0; o < 2 * n + 1; o++) {
    var i = r + n - o, s = !0;
    t && (s = G(t) <= i), e && s && (s = G(e) >= i), s && a.push(i);
  }
  return a;
}
var Gh = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      e.renderOptions = function() {
        var s = e.props.year, c = e.state.yearsList.map(function(d) {
          return w.createElement(
            "div",
            { className: s === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": s === d ? "true" : void 0 },
            s === d ? w.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), l = e.props.minDate ? G(e.props.minDate) : null, u = e.props.maxDate ? G(e.props.maxDate) : null;
        return (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.unshift(w.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          w.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.push(w.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          w.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), c;
      }, e.onChange = function(s) {
        e.props.onChange(s);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(s) {
        var c = e.state.yearsList.map(function(l) {
          return l + s;
        });
        e.setState({
          yearsList: c
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var a = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, i = a || (o ? 10 : 5);
      return e.state = {
        yearsList: Kh(e.props.year, i, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = wt(), e;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, a = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = a && a instanceof HTMLElement ? a.offsetTop + (a.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, n.prototype.render = function() {
      var t = De({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return w.createElement($n, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(we)
), Qh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? G(t.props.minDate) : 1900, a = t.props.maxDate ? G(t.props.maxDate) : 2100, o = [], i = e; i <= a; i++)
          o.push(w.createElement("option", { key: i, value: i }, i));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return w.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return w.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(a) {
            return t.toggleDropdown(a);
          } },
          w.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return w.createElement(Gh, X({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, a) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, a), t.setOpen();
      }, t.onSelect = function(e, a) {
        var o, i;
        (i = (o = t.props).onSelect) === null || i === void 0 || i.call(o, e, a);
      }, t.setOpen = function() {
        var e, a;
        (a = (e = t.props).setOpen) === null || a === void 0 || a.call(e, !0);
      }, t;
    }
    return n.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return w.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(we)
), qh = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], Uh = function(r) {
  var n = (r.className || "").split(/\s+/);
  return qh.some(function(t) {
    return n.indexOf(t) >= 0;
  });
}, Xh = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(a) {
        e.props.onClickOutside(a);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(a) {
        var o, i;
        Uh(a.target) && ((i = (o = e.props).onDropdownFocus) === null || i === void 0 || i.call(o, a));
      }, e.getDateInView = function() {
        var a = e.props, o = a.preSelection, i = a.selected, s = a.openToDate, c = ec(e.props), l = tc(e.props), u = re(), d = s || i || o;
        return d || (c && Ft(u, c) ? c : l && bt(u, l) ? l : u);
      }, e.increaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: Be(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: Rt(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(a, o, i) {
        e.props.onSelect(a, o, i), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.handleDayMouseEnter = function(a) {
        e.setState({ selectingDate: a }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(a);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(a, o) {
        e.setState({ selectingDate: ze(re(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(a, o);
      }, e.handleYearMouseLeave = function(a, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(a, o);
      }, e.handleYearChange = function(a) {
        var o, i, s, c;
        (i = (o = e.props).onYearChange) === null || i === void 0 || i.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(a), (c = (s = e.props).setOpen) === null || c === void 0 || c.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.getEnabledPreSelectionDateForMonth = function(a) {
        if (!Ie(a, e.props))
          return a;
        for (var o = ct(a), i = yh(a), s = zu(i, o), c = null, l = 0; l <= s; l++) {
          var u = $e(o, l);
          if (!Ie(u, e.props)) {
            c = u;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(a) {
        var o, i, s, c = (o = e.getEnabledPreSelectionDateForMonth(a)) !== null && o !== void 0 ? o : a;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (s = (i = e.props).setOpen) === null || s === void 0 || s.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(a) {
        var o, i;
        (i = (o = e.props).onMonthChange) === null || i === void 0 || i.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(a) {
        e.handleYearChange(a), e.handleMonthChange(a);
      }, e.changeYear = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: ze(i, Number(a))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Ne(i, Number(a))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: ze(Ne(i, Ee(a)), G(a))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(a) {
        a === void 0 && (a = e.state.date);
        var o = yt(a, e.props.locale, e.props.calendarStartDay), i = [];
        return e.props.showWeekNumbers && i.push(w.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), i.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = $e(o, s), l = e.formatWeekday(c, e.props.locale), u = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return w.createElement("div", { key: s, "aria-label": se(c, "EEEE", e.props.locale), className: De("react-datepicker__day-name", u) }, l);
        }));
      }, e.formatWeekday = function(a, o) {
        return e.props.formatWeekDay ? wh(a, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? Dh(a, o) : bh(a, o);
      }, e.decreaseYear = function() {
        e.setState(function(a) {
          var o, i = a.date;
          return {
            date: nr(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var a, o, i;
        if (!e.props.renderCustomHeader) {
          var s = (a = e.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, u = Rt(e.state.date, l), d;
          switch (!0) {
            case e.props.showMonthYearPicker:
              d = ui(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = Ch(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = _h(e.state.date, e.props);
              break;
            default:
              d = ci(u, e.props);
              break;
          }
          if (!(!((i = e.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : n.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && d || e.props.showTimeSelectOnly)) {
            var f = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], p = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], m = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (m = e.decreaseYear), d && e.props.showDisabledMonthNavigation && (p.push("react-datepicker__navigation--previous--disabled"), m = void 0);
            var g = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, y = e.props, x = y.previousMonthButtonLabel, b = x === void 0 ? n.defaultProps.previousMonthButtonLabel : x, D = y.previousYearButtonLabel, k = D === void 0 ? n.defaultProps.previousYearButtonLabel : D, E = e.props, C = E.previousMonthAriaLabel, _ = C === void 0 ? typeof b == "string" ? b : "Previous Month" : C, M = E.previousYearAriaLabel, O = M === void 0 ? typeof k == "string" ? k : "Previous Year" : M;
            return w.createElement(
              "button",
              { type: "button", className: p.join(" "), onClick: m, onKeyDown: e.props.handleOnKeyDown, "aria-label": g ? O : _ },
              w.createElement("span", { className: f.join(" ") }, g ? k : b)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(a) {
          var o, i = a.date;
          return {
            date: at(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var a;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = di(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = Eh(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = Sh(e.state.date, e.props);
              break;
            default:
              o = li(e.state.date, e.props);
              break;
          }
          if (!(!((a = e.props.forceShowMonthNavigation) !== null && a !== void 0 ? a : n.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var i = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], s = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && i.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && i.push("react-datepicker__navigation--next--with-today-button");
            var c = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.increaseYear), o && e.props.showDisabledMonthNavigation && (i.push("react-datepicker__navigation--next--disabled"), c = void 0);
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, f = d === void 0 ? n.defaultProps.nextMonthButtonLabel : d, p = u.nextYearButtonLabel, m = p === void 0 ? n.defaultProps.nextYearButtonLabel : p, g = e.props, y = g.nextMonthAriaLabel, x = y === void 0 ? typeof f == "string" ? f : "Next Month" : y, b = g.nextYearAriaLabel, D = b === void 0 ? typeof m == "string" ? m : "Next Year" : b;
            return w.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? D : x },
              w.createElement("span", { className: s.join(" ") }, l ? m : f)
            );
          }
        }
      }, e.renderCurrentMonth = function(a) {
        a === void 0 && (a = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), w.createElement("h2", { className: o.join(" ") }, se(a, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showYearDropdown || a))
          return w.createElement(Qh, X({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: G(e.state.date) }));
      }, e.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthDropdown || a))
          return w.createElement(Wh, X({}, n.defaultProps, e.props, { month: Ee(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthYearDropdown || a))
          return w.createElement(Bh, X({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(a) {
        e.props.onSelect(ni(), a), e.props.setPreSelection && e.props.setPreSelection(ni());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return w.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(a) {
        var o = a.monthDate, i = a.i;
        return w.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          w.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(i !== 0),
            e.renderMonthYearDropdown(i !== 0),
            e.renderYearDropdown(i !== 0)
          ),
          w.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(a) {
        var o, i, s = a.monthDate, c = a.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = ci(e.state.date, e.props), u = li(e.state.date, e.props), d = ui(e.state.date, e.props), f = di(e.state.date, e.props), p = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return w.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (i = (o = e.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(o, X(X({}, e.state), { customHeaderCount: c, monthDate: s, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: f })),
          p && w.createElement("div", { className: "react-datepicker__day-names" }, e.header(s))
        );
      }, e.renderYearHeader = function(a) {
        var o = a.monthDate, i = e.props, s = i.showYearPicker, c = i.yearItemNumber, l = c === void 0 ? n.defaultProps.yearItemNumber : c, u = mt(o, l), d = u.startPeriod, f = u.endPeriod;
        return w.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(d, " - ").concat(f) : G(o));
      }, e.renderHeader = function(a) {
        var o = a.monthDate, i = a.i, s = i === void 0 ? 0 : i, c = { monthDate: o, i: s };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var a, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var i = [], s = (a = e.props.monthsShown) !== null && a !== void 0 ? a : n.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? at(e.state.date, c) : Rt(e.state.date, c), u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < s; ++d) {
            var f = d - u + c, p = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? at(l, f) : Be(l, f), m = "month-".concat(d), g = d < s - 1, y = d > 0;
            i.push(w.createElement(
              "div",
              { key: m, ref: function(x) {
                e.monthContainer = x ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: p, i: d }),
              w.createElement(Fh, X({}, n.defaultProps, e.props, { containerRef: e.containerRef, ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: p, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: g, monthShowsDuplicateDaysStart: y }))
            ));
          }
          return i;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return w.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            w.createElement(Vh, X({}, n.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return w.createElement(zh, X({}, n.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var a = e.props.selected ? new Date(e.props.selected) : void 0, o = a && Bn(a) && !!e.props.selected, i = o ? "".concat(pi(a.getHours()), ":").concat(pi(a.getMinutes())) : "";
        if (e.props.showTimeInput)
          return w.createElement(Nh, X({}, n.defaultProps, e.props, { date: a, timeString: i, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var a, o = mt(e.state.date, (a = e.props.yearItemNumber) !== null && a !== void 0 ? a : n.defaultProps.yearItemNumber), i = o.startPeriod, s = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(i, " - ").concat(s) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = G(e.state.date) : c = "".concat(Ua(Ee(e.state.date), e.props.locale), " ").concat(G(e.state.date)), w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return w.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = wt(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Or
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, n.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!U(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var a = !Se(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return a && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !U(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, n.prototype.render = function() {
      var t = this.props.container || dh;
      return w.createElement(
        $n,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, ignoreClass: this.props.outsideClickIgnoreClass },
        w.createElement(
          "div",
          { style: { display: "contents" }, ref: this.containerRef },
          w.createElement(
            t,
            { className: De("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly
            }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
            this.renderAriaLiveRegion(),
            this.renderPreviousButton(),
            this.renderNextButton(),
            this.renderMonths(),
            this.renderYears(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.renderChildren()
          )
        )
      );
    }, n;
  }(we)
), Zh = function(r) {
  var n = r.icon, t = r.className, e = t === void 0 ? "" : t, a = r.onClick, o = "react-datepicker__calendar-icon";
  if (typeof n == "string")
    return w.createElement("i", { className: "".concat(o, " ").concat(n, " ").concat(e), "aria-hidden": "true", onClick: a });
  if (w.isValidElement(n)) {
    var i = n;
    return w.cloneElement(i, {
      className: "".concat(i.props.className || "", " ").concat(o, " ").concat(e),
      onClick: function(s) {
        typeof i.props.onClick == "function" && i.props.onClick(s), typeof a == "function" && a(s);
      }
    });
  }
  return w.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a },
    w.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, nc = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return n.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, n.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, n.prototype.render = function() {
      return jc.createPortal(this.props.children, this.el);
    }, n;
  }(we)
), Jh = "[tabindex], a, button, input, select, textarea", em = function(r) {
  return (r instanceof HTMLAnchorElement || !r.disabled) && r.tabIndex !== -1;
}, ac = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = e.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(Jh), 1, -1).filter(em);
      }, e.handleFocusStart = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[a.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var a = e.getTabChildren();
        a && a.length > 1 && a[0].focus();
      }, e.tabLoopRef = wt(), e;
    }
    return n.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : n.defaultProps.enableTabLoop) ? w.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        w.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        w.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, n.defaultProps = {
      enableTabLoop: !0
    }, n;
  }(we)
);
function tm(r) {
  var n = function(t) {
    var e, a = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Xe(null), i = uh(X({ open: !a, whileElementsMounted: Wp, placement: t.popperPlacement, middleware: qe([
      Gp({ padding: 15 }),
      Kp(10),
      Qp({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), s = X(X({}, t), { hidePopper: a, popperProps: X(X({}, i), { arrowRef: o }) });
    return w.createElement(r, X({}, s));
  };
  return n;
}
var rm = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var t = this.props, e = t.className, a = t.wrapperClassName, o = t.hidePopper, i = o === void 0 ? n.defaultProps.hidePopper : o, s = t.popperComponent, c = t.targetComponent, l = t.enableTabLoop, u = t.popperOnKeyDown, d = t.portalId, f = t.portalHost, p = t.popperProps, m = t.showArrow, g = void 0;
      if (!i) {
        var y = De("react-datepicker-popper", e);
        g = w.createElement(
          ac,
          { enableTabLoop: l },
          w.createElement(
            "div",
            { ref: p.refs.setFloating, style: p.floatingStyles, className: y, "data-placement": p.placement, onKeyDown: u },
            s,
            m && w.createElement(nh, { ref: p.arrowRef, context: p.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (g = _i(this.props.popperContainer, {}, g)), d && !i && (g = w.createElement(nc, { portalId: d, portalHost: f }, g));
      var x = De("react-datepicker-wrapper", a);
      return w.createElement(
        w.Fragment,
        null,
        w.createElement("div", { ref: p.refs.setReference, className: x }, c),
        g
      );
    }, n;
  }(we)
), nm = tm(rm), wi = "react-datepicker-ignore-onclickoutside";
function am(r, n) {
  return r && n ? Ee(r) !== Ee(n) || G(r) !== G(n) : r !== n;
}
var sa = "Date input not valid.", om = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : re();
      }, e.modifyHolidays = function() {
        var a;
        return (a = e.props.holidays) === null || a === void 0 ? void 0 : a.reduce(function(o, i) {
          var s = new Date(i.date);
          return Bn(s) ? qe(qe([], o, !0), [X(X({}, i), { date: s })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var a, o = e.getPreSelection(), i = ec(e.props), s = tc(e.props), c = i && Ft(o, an(i)) ? i : s && bt(o, ai(s)) ? s : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && a !== void 0 ? a : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: fi(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(X(X({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(X(X({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.setFocus = function() {
        var a, o;
        (o = (a = e.input) === null || a === void 0 ? void 0 : a.focus) === null || o === void 0 || o.call(a, { preventScroll: !0 });
      }, e.setBlur = function() {
        var a, o;
        (o = (a = e.input) === null || a === void 0 ? void 0 : a.blur) === null || o === void 0 || o.call(a), e.cancelFocusInput();
      }, e.deferBlur = function() {
        requestAnimationFrame(function() {
          e.setBlur();
        });
      }, e.setOpen = function(a, o) {
        o === void 0 && (o = !1), e.setState({
          open: a,
          preSelection: a && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: ca
        }, function() {
          a || e.setState(function(i) {
            return {
              focused: o ? i.focused : !1
            };
          }, function() {
            !o && e.deferBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return ot(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(a) {
        var o, i, s = e.state.wasHidden, c = s ? e.state.open : !0;
        s && e.resetHiddenStatus(), e.state.preventFocus || ((i = (o = e.props).onFocus) === null || i === void 0 || i.call(o, a), c && !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
      }, e.sendFocusBackToInput = function() {
        e.preventFocusTimeout && e.clearPreventFocusTimeout(), e.setState({ preventFocus: !0 }, function() {
          e.preventFocusTimeout = setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        });
      }, e.cancelFocusInput = function() {
        clearTimeout(e.inputFocusTimeout), e.inputFocusTimeout = void 0;
      }, e.deferFocusInput = function() {
        e.cancelFocusInput(), e.inputFocusTimeout = setTimeout(function() {
          return e.setFocus();
        }, 1);
      }, e.handleDropdownFocus = function() {
        e.cancelFocusInput();
      }, e.handleBlur = function(a) {
        var o, i;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((i = (o = e.props).onBlur) === null || i === void 0 || i.call(o, a)), e.state.open && e.props.open === !1 && e.setOpen(!1), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(a) {
        var o, i;
        e.props.inline || e.setOpen(!1), (i = (o = e.props).onClickOutside) === null || i === void 0 || i.call(o, a), e.props.withPortal && a.preventDefault();
      }, e.handleChange = function() {
        for (var a, o, i, s, c, l = [], u = 0; u < arguments.length; u++)
          l[u] = arguments[u];
        var d = l[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, l), !d || typeof d.isDefaultPrevented != "function" || d.isDefaultPrevented()))) {
          e.setState({
            inputValue: (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : null,
            lastPreSelectChange: im
          });
          var f = e.props, p = f.selectsRange, m = f.startDate, g = f.endDate, y = (a = e.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, x = (o = e.props.strictParsing) !== null && o !== void 0 ? o : n.defaultProps.strictParsing, b = (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : "";
          if (p) {
            var D = b.split("-", 2).map(function(L) {
              return L.trim();
            }), k = D[0], E = D[1], C = aa(k ?? "", y, e.props.locale, x), _ = aa(E ?? "", y, e.props.locale, x), M = (m == null ? void 0 : m.getTime()) !== (C == null ? void 0 : C.getTime()), O = (g == null ? void 0 : g.getTime()) !== (_ == null ? void 0 : _.getTime());
            if (!M && !O || C && Ie(C, e.props) || _ && Ie(_, e.props))
              return;
            (s = (i = e.props).onChange) === null || s === void 0 || s.call(i, [C, _], d);
          } else {
            var P = aa(b, y, e.props.locale, x, (c = e.props.selected) !== null && c !== void 0 ? c : void 0);
            (P || !b) && e.setSelected(P, d, !0);
          }
        }
      }, e.handleSelect = function(a, o, i) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(a, o, !1, i), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(a);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var s = e.props, c = s.startDate, l = s.endDate;
          c && !l && (e.props.swapRange || !gi(a, c)) && e.setOpen(!1);
        }
      }, e.setSelected = function(a, o, i, s) {
        var c, l, u = a;
        if (e.props.showYearPicker) {
          if (u !== null && on(G(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && Js(u, e.props))
            return;
        } else if (u !== null && Ie(u, e.props))
          return;
        var d = e.props, f = d.onChange, p = d.selectsRange, m = d.startDate, g = d.endDate, y = d.selectsMultiple, x = d.selectedDates, b = d.minTime, D = d.swapRange;
        if (!Pt(e.props.selected, u) || e.props.allowSameDay || p || y)
          if (u !== null && (e.props.selected && (!i || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = oa(u, {
            hour: it(e.props.selected),
            minute: st(e.props.selected),
            second: vt(e.props.selected)
          })), !i && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && b && (u = oa(u, {
            hour: b.getHours(),
            minute: b.getMinutes(),
            second: b.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: s })), p) {
            var k = !m && !g, E = m && !g, C = m && g;
            k ? f == null || f([u, null], o) : E && (u === null ? f == null || f([null, null], o) : gi(u, m) ? D ? f == null || f([u, m], o) : f == null || f([u, null], o) : f == null || f([m, u], o)), C && (f == null || f([u, null], o));
          } else if (y) {
            if (u !== null)
              if (!(x != null && x.length))
                f == null || f([u], o);
              else {
                var _ = x.some(function(O) {
                  return U(O, u);
                });
                if (_) {
                  var M = x.filter(function(O) {
                    return !U(O, u);
                  });
                  f == null || f(M, o);
                } else
                  f == null || f(qe(qe([], x, !0), [u], !1), o);
              }
          } else
            f == null || f(u, o);
        i || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(a) {
        var o = ot(e.props.minDate), i = ot(e.props.maxDate), s = !0;
        if (a) {
          var c = an(a);
          if (o && i)
            s = br(a, e.props.minDate, e.props.maxDate);
          else if (o) {
            var l = an(e.props.minDate);
            s = bt(a, l) || Pt(c, l);
          } else if (i) {
            var u = ai(e.props.maxDate);
            s = Ft(a, u) || Pt(c, u);
          }
        }
        s && e.setState({
          preSelection: a
        });
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(a) {
        var o, i;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var s = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? a : oa(s, {
            hour: it(a),
            minute: st(a)
          });
          e.setState({
            preSelection: c
          }), (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, c), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var a, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (a = e.props).onInputClick) === null || o === void 0 || o.call(a);
      }, e.onInputKeyDown = function(a) {
        var o, i, s, c, l, u;
        (i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, a);
        var d = a.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (d === T.ArrowDown || d === T.ArrowUp || d === T.Enter) && ((s = e.onInputClick) === null || s === void 0 || s.call(e));
          return;
        }
        if (e.state.open) {
          if (d === T.ArrowDown || d === T.ArrowUp) {
            a.preventDefault();
            var f = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', p = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(f);
            p instanceof HTMLElement && p.focus({ preventScroll: !0 });
            return;
          }
          var m = re(e.state.preSelection);
          d === T.Enter ? (a.preventDefault(), a.target.blur(), e.inputOk() && e.state.lastPreSelectChange === ca ? (e.handleSelect(m, a), !e.props.shouldCloseOnSelect && e.setPreSelection(m)) : e.setOpen(!1)) : d === T.Escape ? (a.preventDefault(), a.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === T.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: sa });
        }
      }, e.onPortalKeyDown = function(a) {
        var o = a.key;
        o === T.Escape && (a.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(a) {
        var o, i, s, c, l, u, d = e.props, f = d.minDate, p = d.maxDate, m = d.disabledKeyboardNavigation, g = d.showWeekPicker, y = d.shouldCloseOnSelect, x = d.locale, b = d.calendarStartDay, D = d.adjustDateOnChange, k = d.inline;
        if ((i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, a), !m) {
          var E = a.key, C = a.shiftKey, _ = re(e.state.preSelection), M = function(K, A) {
            var j = A;
            switch (K) {
              case T.ArrowRight:
                j = g ? mn(A, 1) : $e(A, 1);
                break;
              case T.ArrowLeft:
                j = g ? Go(A) : Vf(A);
                break;
              case T.ArrowUp:
                j = Go(A);
                break;
              case T.ArrowDown:
                j = mn(A, 1);
                break;
              case T.PageUp:
                j = C ? nr(A, 1) : Rt(A, 1);
                break;
              case T.PageDown:
                j = C ? at(A, 1) : Be(A, 1);
                break;
              case T.Home:
                j = yt(A, x, b);
                break;
              case T.End:
                j = vh(A);
                break;
            }
            return j;
          }, O = function(K, A) {
            for (var j = 40, W = K, Z = !1, pe = 0, he = M(K, A); !Z; ) {
              if (pe >= j) {
                he = A;
                break;
              }
              f && he < f && (W = T.ArrowRight, he = Ie(f, e.props) ? M(W, he) : f), p && he > p && (W = T.ArrowLeft, he = Ie(p, e.props) ? M(W, he) : p), Ie(he, e.props) ? ((W === T.PageUp || W === T.Home) && (W = T.ArrowRight), (W === T.PageDown || W === T.End) && (W = T.ArrowLeft), he = M(W, he)) : Z = !0, pe++;
            }
            return he;
          };
          if (E === T.Enter) {
            a.preventDefault(), e.handleSelect(_, a), !y && e.setPreSelection(_);
            return;
          } else if (E === T.Escape) {
            a.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (s = e.props).onInputError) === null || c === void 0 || c.call(s, { code: 1, msg: sa });
            return;
          }
          var P = null;
          switch (E) {
            case T.ArrowLeft:
            case T.ArrowRight:
            case T.ArrowUp:
            case T.ArrowDown:
            case T.PageUp:
            case T.PageDown:
            case T.Home:
            case T.End:
              P = O(E, _);
              break;
          }
          if (!P) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: sa });
            return;
          }
          if (a.preventDefault(), e.setState({ lastPreSelectChange: ca }), D && e.setSelected(P), e.setPreSelection(P), k) {
            var L = Ee(_), F = Ee(P), $ = G(_), H = G(P);
            L !== F || $ !== H ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(a) {
        var o = a.key;
        o === T.Escape && (a.preventDefault(), e.sendFocusBackToInput());
      }, e.onClearClick = function(a) {
        a && a.preventDefault && a.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, i = o.selectsRange, s = o.onChange;
        i ? s == null || s([null, null], a) : s == null || s(null, a), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(a) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (a.target === document || a.target === document.documentElement || a.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(a) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var a, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : w.createElement(Xh, X({ showMonthYearDropdown: void 0, ref: function(i) {
          e.calendar = i;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (a = e.props.dateFormatCalendar) !== null && a !== void 0 ? a : n.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Ph(e.modifyHolidays()), outsideClickIgnoreClass: wi, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : n.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var a = e.props, o = a.dateFormat, i = o === void 0 ? n.defaultProps.dateFormat : o, s = a.locale, c = e.props.showTimeInput || e.props.showTimeSelect, l = c ? "PPPPp" : "PPPP", u;
        return e.props.selectsRange ? u = "Selected start date: ".concat(Re(e.props.startDate, {
          dateFormat: l,
          locale: s
        }), ". ").concat(e.props.endDate ? "End date: " + Re(e.props.endDate, {
          dateFormat: l,
          locale: s
        }) : "") : e.props.showTimeSelectOnly ? u = "Selected time: ".concat(Re(e.props.selected, { dateFormat: i, locale: s })) : e.props.showYearPicker ? u = "Selected year: ".concat(Re(e.props.selected, { dateFormat: "yyyy", locale: s })) : e.props.showMonthYearPicker ? u = "Selected month: ".concat(Re(e.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : e.props.showQuarterYearPicker ? u = "Selected quarter: ".concat(Re(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : u = "Selected date: ".concat(Re(e.props.selected, {
          dateFormat: l,
          locale: s
        })), w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var a, o, i, s = De(e.props.className, (a = {}, a[wi] = e.state.open, a)), c = e.props.customInput || w.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, f = d === void 0 ? n.defaultProps.dateFormat : d, p = u.locale, m = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? ph(e.props.startDate, e.props.endDate, {
          dateFormat: f,
          locale: p
        }) : e.props.selectsMultiple ? hh((i = e.props.selectedDates) !== null && i !== void 0 ? i : [], {
          dateFormat: f,
          locale: p
        }) : Re(e.props.selected, {
          dateFormat: f,
          locale: p
        });
        return Ci(c, (o = {}, o[l] = function(g) {
          e.input = g;
        }, o.value = m, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = De(c.props.className, s), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var a = e.props, o = a.isClearable, i = a.disabled, s = a.selected, c = a.startDate, l = a.endDate, u = a.clearButtonTitle, d = a.clearButtonClassName, f = d === void 0 ? "" : d, p = a.ariaLabelClose, m = p === void 0 ? "Close" : p, g = a.selectedDates;
        return o && (s != null || c != null || l != null || g != null && g.length) ? w.createElement("button", { type: "button", className: De("react-datepicker__close-icon", f, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": m, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          readOnly: !1,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: Or,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.componentDidUpdate = function(t, e) {
      var a, o, i, s;
      t.inline && am(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: fi(this.props.highlightDates)
      }), !e.focused && !Pt(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (a = this.props).onCalendarOpen) === null || o === void 0 || o.call(a)), e.open === !0 && this.state.open === !1 && ((s = (i = this.props).onCalendarClose) === null || s === void 0 || s.call(i)));
    }, n.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, a = t.icon, o = t.calendarIconClassname, i = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), w.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && w.createElement(Zh, X({ icon: a, className: De(i, !i && o, c && "react-datepicker-ignore-onclickoutside") }, s ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, n.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? w.createElement(
          ac,
          { enableTabLoop: this.props.enableTabLoop },
          w.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = w.createElement(nc, X({ portalId: this.props.portalId }, this.props), e)), w.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return w.createElement(nm, X({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, n;
  }(we)
), im = "input", ca = "navigate";
const sm = z.div`
  display: inline-flex;
  align-items: center;
  position: relative;  
  width: 100%;

  .react-datepicker {
    border: 1px solid ${({ theme: r }) => r.colors.second};
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme: r }) => r.colors.prime};
  }

  .react-datepicker__header {
    background-color: ${({ theme: r }) => r.colors.fourth};
    color: white;
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme: r }) => r.colors.third};
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: ${({ theme: r }) => r.colors.fourthHover};
    color: white;
  }
`, cm = z.button`
  width: 144px;
  padding: 8px;
  font-size: 14px;
  height : 30px;
  border: 1px solid ${({ theme: r }) => r.colors.second};
  border-radius: 4px;
  background: ${({ theme: r }) => r.colors.prime};
  color: ${({ theme: r }) => r.colors.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: ${({ theme: r }) => r.colors.third};
  }

  &:focus {
    border-color: ${({ theme: r }) => r.colors.fourth};
  }

  svg {
    color: ${({ theme: r }) => r.colors.font};
  }
`, lm = z.div`
  font-size: 12px; /* ✅ 기본 폰트 크기 조정 */
  
  .react-datepicker {
    border: 1px solid ${({ theme: r }) => r.colors.second};
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    background: ${({ theme: r }) => r.colors.prime};
  }

  .react-datepicker__header {
    background: ${({ theme: r }) => r.colors.primeHover};
    padding: 4px;
  }

  .react-datepicker__day {
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin: 2px;
  }

  .react-datepicker__day--selected {
    background: ${({ theme: r }) => r.colors.fourth};
    color: white;
  }

  .react-datepicker__day:hover {
    background: ${({ theme: r }) => r.colors.third};
    color: white;
  }
`, um = w.forwardRef(
  ({ value: r, onClick: n }, t) => /* @__PURE__ */ v.jsxs(cm, { onClick: n, ref: t, children: [
    r === "" || r === void 0 ? "날짜입력" : r,
    /* @__PURE__ */ v.jsx(tu, { style: { padding: "5px" } })
  ] })
), oc = En(
  ({ value: r, onChange: n, minDate: t, maxDate: e }, a) => {
    const [o, i] = Ce(r ?? null), [s, c] = Ce({ top: 0, left: 0, width: 0 }), l = Xe(null);
    return Le(() => {
      i(r ?? null);
    }, [r]), Le(() => {
      const u = () => {
        if (l.current) {
          const d = l.current.getBoundingClientRect();
          c({
            top: d.bottom + window.scrollY,
            left: d.left + window.scrollX,
            width: d.width
          });
        }
      };
      return u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
    }, [o]), Si(a, () => l.current, []), /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
      /* @__PURE__ */ v.jsx(_t, {}),
      /* @__PURE__ */ v.jsx(sm, { ref: l, children: /* @__PURE__ */ v.jsx(
        om,
        {
          selected: o,
          onChange: (u) => {
            i(u), n == null || n(u);
          },
          wrapperClassName: "w-full",
          dateFormat: "yyyy-MM-dd",
          placeholderText: "날짜 선택",
          minDate: t,
          maxDate: e,
          customInput: /* @__PURE__ */ v.jsx(um, {}),
          popperContainer: ({ children: u }) => Pa(
            /* @__PURE__ */ v.jsx(
              lm,
              {
                style: {
                  position: "absolute",
                  top: `${s.top}px`,
                  left: `${s.left}px`,
                  zIndex: 9999
                },
                children: u
              }
            ),
            document.body
          )
        }
      ) })
    ] });
  }
);
oc.displayName = "SingleDatePicker";
const dm = ({
  col: r,
  row: n,
  isEditing: t,
  isEdited: e,
  cellValue: a,
  handleCellDoubleClick: o,
  handleCellChange: i,
  handleKeyDown: s,
  isCellEditable: c,
  cellprops: l
}) => {
  const u = r.editable ?? n[r.key] !== void 0;
  return /* @__PURE__ */ v.jsx(
    Jr,
    {
      $isEdited: e,
      onDoubleClick: () => c && u && o(n.rowKey, r.key, a),
      children: t ? (
        /* ✅ cellType이 있으면 자동 UI 적용 */
        r.cellType ? bi(
          r,
          n,
          l,
          i,
          s,
          !0,
          a
        ) : /* @__PURE__ */ v.jsx(
          ls,
          {
            type: "text",
            value: a,
            onChange: (d) => i(d.target.value),
            onKeyDown: (d) => s(d, n)
          }
        )
      ) : r.renderCell ? (
        /* ✅ renderCell이 있으면 실행 (사용자 정의 UI) */
        r.renderCell(n)
      ) : r.cellType ? (
        /* ✅ cellType이 있으면 자동 UI 적용 */
        bi(
          r,
          n,
          l,
          i,
          s,
          !1,
          a
        )
      ) : (
        /* ✅ 기본값 렌더링 */
        a
      )
    }
  );
}, bi = (r, n, t, e, a, o, i) => {
  var c, l;
  const s = new KeyboardEvent("keydown", { key: "Enter" });
  switch ((c = r.cellType) == null ? void 0 : c.type) {
    case "Button":
      return o ? /* @__PURE__ */ v.jsx(xr, { disabled: !0, children: r.cellType.content }) : /* @__PURE__ */ v.jsx(xr, { id: n.rowKey, children: r.cellType.content });
    case "Check":
      return o ? /* @__PURE__ */ v.jsx(
        Ds,
        {
          id: n.rowKey,
          ...t,
          checked: !!i,
          onChange: (m) => {
            e(m.target.checked), a(s, n);
          }
        }
      ) : (
        /*수정 모드가 아닐 경우 Check Icon, 수정모드 완료시 완본 UnChecked 된경우 Unchecked 표시*/
        i ? /* @__PURE__ */ v.jsx(La, {}) : i !== n[r.key] ? "UnChecked" : ""
      );
    case "DropDownBox":
      const [u, d] = Ce(n[r.key]);
      return o ? /* @__PURE__ */ v.jsx(
        Ya,
        {
          id: n.rowKey,
          ...t,
          style: { zIndex: 50 },
          defualtKey: u,
          onChange: (m) => {
            e(m.key), d(m.key), a(s, n);
          }
        }
      ) : /* @__PURE__ */ v.jsx(v.Fragment, { children: (l = t.options.find((m) => m.key === i)) == null ? void 0 : l.value });
    case "SingleDatePicker":
      const [f, p] = Ce(n[r.key]);
      return o ? /* @__PURE__ */ v.jsx(
        oc,
        {
          value: f,
          onChange: (m) => {
            e(m ? m.toLocaleDateString("sv-SE") : ""), p(m ? m.toLocaleDateString("sv-SE") : ""), a(s, n);
          }
        }
      ) : /* @__PURE__ */ v.jsx(v.Fragment, { children: i instanceof Date ? i.toLocaleDateString("sv-SE") : i });
    default:
      return /* @__PURE__ */ v.jsx(v.Fragment, { children: n[r.key] });
  }
}, fm = ({
  row: r,
  rowNum: n,
  selectedRows: t,
  showRowNumCol: e,
  showRowCheckboxCol: a,
  showActionColumn: o,
  onToggleRow: i,
  reducer: s
}) => /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
  o && /* @__PURE__ */ v.jsx(Jr, { children: s.state.editedRows[r.rowKey] && /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
    /* @__PURE__ */ v.jsx(gs, { onClick: () => s.applyRowChanges(r.rowKey), children: /* @__PURE__ */ v.jsx(La, { size: 12 }) }),
    /* @__PURE__ */ v.jsx(vs, { onClick: () => s.resetRowChanges(r.rowKey), children: /* @__PURE__ */ v.jsx(cs, { size: 12 }) })
  ] }) }),
  e && /* @__PURE__ */ v.jsx(Jr, { children: n }),
  a && /* @__PURE__ */ v.jsx(Jr, { children: /* @__PURE__ */ v.jsx(Ds, { checked: t.has(r), onChange: () => i(r) }) })
] }), pm = ({
  row: r,
  columns: n,
  level: t,
  isExpanded: e,
  onToggleGroupExpand: a,
  showRowNumCol: o,
  showRowCheckboxCol: i
}) => {
  const s = r.__groupKey;
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: /* @__PURE__ */ v.jsx(yu, { onClick: () => a(s), children: /* @__PURE__ */ v.jsx(wu, { colSpan: n.length + (o ? 1 : 0) + (i ? 1 : 0), children: /* @__PURE__ */ v.jsxs(bu, { style: { paddingLeft: `${t * 16}px` }, children: [
    /* @__PURE__ */ v.jsx("span", { children: e ? /* @__PURE__ */ v.jsx(rs, {}) : /* @__PURE__ */ v.jsx(ns, {}) }),
    /* @__PURE__ */ v.jsxs("span", { children: [
      s,
      " (",
      r.__children.length,
      ")"
    ] })
  ] }) }) }) });
}, hm = ({
  columns: r,
  showRowNumCol: n,
  showRowCheckboxCol: t,
  selectedRows: e,
  isCellEditable: a,
  onToggleRow: o,
  onToggleGroupExpand: i,
  reducer: s,
  style: c
}) => {
  const [l, u] = Ce(null), d = (b, D, k) => {
    s.setEditingCell(b, D, k);
  }, f = (b, D) => {
    b.preventDefault(), u({ x: b.clientX, y: b.clientY, row: D });
  }, p = () => u(null), m = (b) => {
    if (!s.state.editingCell) return;
    const { rowKey: D, colKey: k } = s.state.editingCell;
    s.setEditingCell(D, k, b);
    const E = s.state.originalData.find((_) => _.rowKey === D);
    (E ? E[k] : void 0) !== b ? s.editCell(D, k, b) : s.removeEditedCell(D, k);
  }, g = (b, D) => {
    if (!s.state.editingCell) return;
    const { rowKey: k, colKey: E } = s.state.editingCell, C = r.findIndex((_) => _.key === E);
    if (b.key === "Enter" && s.clearEditingCell(), b.key === "Tab") {
      b.preventDefault();
      for (let _ = C + 1; _ < r.length; _++)
        if (r[_].editable !== !1) {
          s.clearEditingCell(), s.setEditingCell(k, r[_].key, D[r[_].key]);
          return;
        }
      s.clearEditingCell();
    }
  }, y = (b, D) => {
    const k = s.state.group.expanded.has(b.__groupKey);
    let E = 0;
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        pm,
        {
          row: b,
          columns: r,
          level: D,
          isExpanded: k,
          onToggleGroupExpand: i,
          showRowNumCol: n,
          showRowCheckboxCol: t
        }
      ),
      k && b.__children.map(
        (C) => Lo(C) ? y(C, D + 1) : x(C, D + 1, ++E)
      )
    ] });
  }, x = (b, D, k) => {
    const E = Object.keys(s.state.editedRows).length > 0;
    return /* @__PURE__ */ v.jsxs(vu, { onContextMenu: (C) => f(C, b), children: [
      /* @__PURE__ */ v.jsx(
        fm,
        {
          row: b,
          rowNum: k,
          selectedRows: e,
          showRowNumCol: n,
          showRowCheckboxCol: t,
          showActionColumn: E,
          onToggleRow: o,
          reducer: s
        }
      ),
      r.map((C) => {
        var P, L, F, $, H, K;
        const _ = ((P = s.state.editedRows[b.rowKey]) == null ? void 0 : P[C.key]) !== void 0, M = ((L = s.state.editingCell) == null ? void 0 : L.rowKey) === b.rowKey && ((F = s.state.editingCell) == null ? void 0 : F.colKey) === C.key, O = M ? ($ = s.state.editingCell) == null ? void 0 : $.value : ((H = s.state.editedRows[b.rowKey]) == null ? void 0 : H[C.key]) ?? b[C.key];
        return /* @__PURE__ */ v.jsx(
          dm,
          {
            col: C,
            row: b,
            isEditing: M,
            isEdited: _,
            cellValue: O,
            handleCellDoubleClick: d,
            handleCellChange: m,
            handleKeyDown: g,
            isCellEditable: a,
            cellprops: (K = C.cellType) == null ? void 0 : K.cellProps
          },
          C.key
        );
      })
    ] }, b.rowKey);
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(gu, { style: { ...c }, children: s.state.data.map((b, D) => Lo(b) ? y(b, 0) : x(b, 0, D + 1)) }),
    s.state.isCellEditable && /* @__PURE__ */ v.jsx(
      Mu,
      {
        menuPosition: l,
        onClose: p,
        reducer: s
      }
    )
  ] });
}, mm = (r, n, t, e, a) => {
  const o = ys(r);
  return {
    originalData: [...o],
    data: n ? Aa(o, 1, t) : o,
    // ✅ 페이징 시 빈 Set 사용
    sortedColumn: null,
    sortDirection: null,
    filters: {},
    group: {
      column: [],
      expanded: /* @__PURE__ */ new Set()
      // ✅ 초기 확장 상태 저장
    },
    selectedRows: /* @__PURE__ */ new Set(),
    pagingable: n,
    pagenate: {
      pageSize: t,
      currentPage: 1
    },
    editedRows: {},
    editingCell: null,
    activeExportSurport: e,
    isCellEditable: a
  };
};
function gm(r, n) {
  switch (n.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...r,
        sortedColumn: n.column,
        sortDirection: n.direction,
        data: n.direction === null ? [...r.originalData] : bs(r.originalData, n.column, n.direction)
        // ✅ 정렬된 데이터 반영
      };
    /** 🔹 특정 컬럼에 필터 적용 */
    case "SET_FILTER": {
      const t = {
        ...r.filters,
        // 기존 필터 유지
        ...n.filters
        // 새로운 필터 추가 or 업데이트
      };
      return {
        ...r,
        filters: t
      };
    }
    /** 🔹 특정 컬럼의 필터 제거 */
    case "CLEAR_FILTER":
      return {
        ...r,
        filters: Object.fromEntries(
          Object.entries(r.filters).filter(([t]) => t !== n.column)
        )
      };
    /** 🔹 컬럼을 그룹핑 */
    case "SET_GROUP": {
      const t = [...r.group.column, n.column];
      return {
        ...r,
        group: {
          ...r.group,
          column: t,
          // ✅ 새로운 그룹 컬럼 추가
          expanded: new Set(r.group.expanded)
          // ✅ 기존 확장 상태 유지
        },
        data: pn(r.originalData, t)
      };
    }
    /** 🔹 컬럼 그룹핑 해제 */
    case "REMOVE_GROUP": {
      const t = r.group.column.filter((a) => a !== n.column), e = new Set(r.group.expanded);
      return e.delete(n.column), {
        ...r,
        group: {
          column: t,
          // ✅ 그룹 컬럼에서 제거
          expanded: e
          // ✅ 확장 목록에서도 제거
        },
        data: t.length > 0 ? pn(r.originalData, t, e) : [...r.originalData]
        // ✅ 모든 그룹이 해제되면 원본 데이터 복원
      };
    }
    case "TOGGLE_ROW": {
      const t = new Set(r.selectedRows);
      return t.has(n.row) ? t.delete(n.row) : t.add(n.row), {
        ...r,
        selectedRows: t
        // ✅ 변경된 상태 적용
      };
    }
    /** 🔹 특정 Row 선택/해제 */
    case "TOGGLE_GROUP_EXPAND": {
      const t = new Set(r.group.expanded);
      return t.has(n.column) ? t.delete(n.column) : t.add(n.column), {
        ...r,
        group: {
          ...r.group,
          // ✅ 기존 그룹 상태 유지
          expanded: t
          // ✅ 업데이트된 그룹 상태 저장
        }
      };
    }
    /** 🔹 페이지 변경 */
    case "SET_PAGE":
      return {
        ...r,
        pagenate: {
          ...r.pagenate,
          currentPage: n.page
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 */
    case "SET_PAGE_SIZE":
      return {
        ...r,
        pagenate: {
          ...r.pagenate,
          pageSize: n.pageSize
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 중 */
    case "SET_EDITING_CELL":
      return {
        ...r,
        editingCell: {
          rowKey: n.payload.rowKey,
          colKey: n.payload.colKey,
          value: n.payload.value
        }
      };
    /** 🔹 페이지 변경 종료*/
    case "CLEAR_EDITING_CELL":
      return {
        ...r,
        editingCell: null
      };
    /** 🔹 페이지 변경*/
    case "EDIT_CELL": {
      const { rowKey: t, colKey: e, newValue: a } = n.payload;
      return {
        ...r,
        editedRows: {
          ...r.editedRows,
          [t]: {
            ...r.editedRows[t],
            [e]: a
          }
        }
      };
    }
    /** 🔹 페이지 변경 제거*/
    case "REMOVE_EDITED_CELL": {
      const { rowKey: t, colKey: e } = n.payload, a = { ...r.editedRows[t] };
      if (delete a[e], Object.keys(a).length === 0) {
        const o = { ...r.editedRows };
        return delete o[t], {
          ...r,
          editedRows: o
        };
      }
      return {
        ...r,
        editedRows: {
          ...r.editedRows,
          [t]: a
        }
      };
    }
    /** 🔹 로우 변경 적용*/
    case "APPLY_ROW_CHANGES": {
      const { rowKey: t } = n.payload, e = r.editedRows[t];
      if (!e) return r;
      const a = r.data.map(
        (s) => s.rowKey === t ? { ...s, ...e } : s
      ), o = r.originalData.map(
        (s) => s.rowKey === t ? { ...s, ...e } : s
      ), i = { ...r.editedRows };
      return delete i[t], {
        ...r,
        data: a,
        originalData: o,
        // ✅ 원본 데이터 업데이트
        editedRows: i,
        // ✅ 해당 Row만 제거
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    /** 🔹 로우 변경 되돌리기*/
    case "RESET_ROW_CHANGES": {
      const { rowKey: t } = n.payload, e = r.originalData.find(
        (i) => i.rowKey === t
      ), a = { ...r.editedRows };
      if (delete a[t], !e)
        return {
          ...r,
          data: r.data.filter((i) => i.rowKey !== t),
          editedRows: a
          // ✅ 해당 Row의 변경 사항 삭제
        };
      const o = r.data.map(
        (i) => i.rowKey === t ? e : i
      );
      return {
        ...r,
        data: o,
        // ✅ 변경된 데이터 복원
        editedRows: a,
        // ✅ 해당 Row의 변경 사항 삭제
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    /** 🔹전체 로우 변경 적용*/
    case "APPLY_ALL_CHANGES": {
      const t = r.originalData.map(
        (a) => r.editedRows[a.rowKey] ? { ...a, ...r.editedRows[a.rowKey] } : a
      ), e = r.pagingable ? Aa(t, r.pagenate.currentPage, r.pagenate.pageSize, r) : t;
      return {
        ...r,
        originalData: t,
        data: e,
        editedRows: {},
        // ✅ 적용 후 초기화
        editingCell: null
      };
    }
    /** 🔹전체 로우 변경 되돌리기*/
    case "RESET_ALL_CHANGES":
      return {
        ...r,
        editedRows: {},
        // ✅ 모든 변경 사항 초기화
        editingCell: null
      };
    /** 🔹Add Row*/
    case "ADD_ROW": {
      const t = {
        ...Object.keys(r.originalData[0]).reduce((a, o) => (a[o] = "", a), {}),
        rowKey: ws(r.originalData.length)
      }, e = [t, ...r.data];
      return {
        ...r,
        data: e,
        editedRows: {
          ...r.editedRows,
          [t.rowKey]: {
            ...r.editedRows[t.rowKey]
          }
        }
      };
    }
    /** 🔹 Grid 상태 변경 */
    case "SET_GRID_STATE":
      return { ...r, ...n.state };
    // ✅ 새로운 상태 적용
    default:
      return r;
  }
}
function vm(r, n = !1, t = 10, e = !0, a = !0) {
  const [o, i] = Ea(gm, mm(r, n, t, e, a));
  return {
    state: o,
    updateGridState: () => {
      i({
        type: "SET_GRID_STATE",
        state: tt(o)
      });
    },
    setSort: (P, L) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          sortedColumn: P,
          sortDirection: L
        })
      });
    },
    setFilter: (P) => {
      const L = { ...o.filters, ...P };
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          filters: L
        })
      });
    },
    clearFilter: (P) => {
      const L = { ...o.filters };
      delete L[P], i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          filters: L
        })
      });
    },
    setGroup: (P) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          group: {
            ...o.group,
            column: [...o.group.column, P]
          }
        })
      });
    },
    removeGroup: (P) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          group: {
            ...o.group,
            column: o.group.column.filter((L) => L !== P)
          }
        })
      });
    },
    expandGroup: (P) => {
      const L = new Set(o.group.expanded);
      L.has(P) ? L.delete(P) : L.add(P), i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          group: {
            ...o.group,
            expanded: L
          }
        })
      });
    },
    toggleRow: (P) => {
      i({ type: "TOGGLE_ROW", row: P });
    },
    setPage: (P) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          pagenate: {
            ...o.pagenate,
            currentPage: P
          }
        })
      });
    },
    setPageSize: (P) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          pagenate: {
            ...o.pagenate,
            pageSize: P
          }
        })
      });
    },
    editCell: (P, L, F) => {
      i({ type: "EDIT_CELL", payload: { rowKey: P, colKey: L, newValue: F } });
    },
    setEditingCell: (P, L, F) => {
      i({ type: "SET_EDITING_CELL", payload: { rowKey: P, colKey: L, value: F } });
    },
    clearEditingCell: () => {
      i({ type: "CLEAR_EDITING_CELL" });
    },
    applyAllChanges: () => {
      i({ type: "APPLY_ALL_CHANGES" });
    },
    resetAllChanges: () => {
      i({ type: "RESET_ALL_CHANGES" });
    },
    removeEditedCell: (P, L) => {
      i({ type: "REMOVE_EDITED_CELL", payload: { rowKey: P, colKey: L } });
    },
    applyRowChanges: (P) => {
      i({ type: "APPLY_ROW_CHANGES", payload: { rowKey: P } });
    },
    resetRowChanges: (P) => {
      i({ type: "RESET_ROW_CHANGES", payload: { rowKey: P } });
    },
    addRow: () => {
      i({ type: "ADD_ROW" });
    }
  };
}
const ym = z.div`  
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${(r) => r.theme.colors.font};
  background-color: ${(r) => r.theme.colors.second};
`, wm = z.span`
  font-size: 14px;
  color: ${(r) => r.theme.colors.font};
`, bm = z.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: visible;
`, Dm = z.span`
  font-size: 14px;
  color: ${(r) => r.theme.colors.font};
`, la = z.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${(r) => r.$active ? r.theme.colors.active : r.theme.colors.second};
  color: ${(r) => r.theme.colors.font};
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(r) => r.theme.colors.secondHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, xm = ({
  currentPage: r,
  totalPages: n,
  totalDataCount: t,
  pageSize: e,
  onPageChange: a,
  onPageSizeChange: o,
  style: i
}) => {
  const s = [
    { key: "10", value: "10" },
    { key: "20", value: "20" },
    { key: "30", value: "30" }
  ];
  return /* @__PURE__ */ v.jsxs(ym, { style: i, children: [
    /* @__PURE__ */ v.jsxs(wm, { children: [
      "Total ",
      /* @__PURE__ */ v.jsx("b", { children: t }),
      " items | Page ",
      r,
      " / ",
      n
    ] }),
    /* @__PURE__ */ v.jsxs(bm, { children: [
      /* @__PURE__ */ v.jsx(Dm, { children: "Page Size:" }),
      /* @__PURE__ */ v.jsx(
        Ya,
        {
          options: s,
          defualtKey: String(e),
          style: { width: 80 },
          onChange: (c) => {
            o(parseInt(c.value, 10));
          }
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "4px" }, children: [
      /* @__PURE__ */ v.jsx(la, { onClick: () => r > 1 && a(r - 1), disabled: r === 1, children: /* @__PURE__ */ v.jsx(ru, { size: 14 }) }),
      Array.from({ length: n }, (c, l) => l + 1).map((c) => /* @__PURE__ */ v.jsx(la, { $active: c === r, onClick: () => a(c), children: c }, c)),
      /* @__PURE__ */ v.jsx(la, { onClick: () => r < n && a(r + 1), disabled: r === n, children: /* @__PURE__ */ v.jsx(ns, { size: 14 }) })
    ] })
  ] });
}, Am = ({
  columns: r,
  data: n,
  options: t,
  showRowNumCol: e = !0,
  showRowCheckboxCol: a = !1,
  pagingable: o = !1,
  pagination: i,
  isCellEditable: s = !1,
  customStyles: c = {},
  activeExportSurport: l
}) => {
  const u = vm(ys(n), o, i == null ? void 0 : i.pageSize, l, s), { pagenate: d } = u.state, f = n.length, p = Math.ceil(f / d.pageSize), m = Xe(null), [g, y] = Ce(null);
  Ma(() => {
    var b;
    if (m.current) {
      const D = ((b = m.current.parentElement) == null ? void 0 : b.clientHeight) || 500;
      y(D - 40);
    }
  }, []);
  const x = (b) => {
    u.clearEditingCell();
  };
  return /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsxs(cu, { ref: m, children: [
      /* @__PURE__ */ v.jsx(lu, { $maxHeight: g, onScroll: x, children: /* @__PURE__ */ v.jsxs(uu, { children: [
        /* @__PURE__ */ v.jsx(
          Cu,
          {
            columns: r,
            showRowNumCol: e,
            showRowCheckboxCol: a,
            options: t,
            reducer: u,
            editedRows: u.state.editedRows,
            style: c.header
          }
        ),
        /* @__PURE__ */ v.jsx(
          hm,
          {
            reducer: u,
            columns: r,
            isCellEditable: s,
            showRowNumCol: e,
            showRowCheckboxCol: a,
            selectedRows: u.state.selectedRows,
            onToggleRow: u.toggleRow,
            onToggleGroupExpand: u.expandGroup,
            style: c.body
          }
        )
      ] }) }),
      o && /* @__PURE__ */ v.jsx(
        xm,
        {
          currentPage: d.currentPage,
          totalPages: p,
          onPageChange: u.setPage,
          totalDataCount: n.length,
          pageSize: u.state.pagenate.pageSize,
          onPageSizeChange: u.setPageSize,
          style: c.pagination
        }
      )
    ] })
  ] });
}, km = ({ label: r, isRequired: n, toolTip: t, style: e }) => /* @__PURE__ */ v.jsxs(
  su,
  {
    style: { ...e },
    children: [
      /* @__PURE__ */ v.jsx("span", { children: r }),
      n && /* @__PURE__ */ v.jsx("span", { style: { color: "#ff4d4f", fontSize: "16px", lineHeight: 1 }, children: "*" }),
      t && /* @__PURE__ */ v.jsx(
        "span",
        {
          title: t,
          style: {
            display: "inline-flex",
            alignItems: "center",
            color: "#999",
            cursor: "help",
            fontSize: "13px"
          },
          children: /* @__PURE__ */ v.jsx(ou, {})
        }
      )
    ]
  }
), Ym = En(
  ({ apply: r, children: n, ...t }, e) => /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsx(
      In,
      {
        ref: e,
        ...t,
        style: {
          width: "2rem",
          height: "2rem",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          ...t.style
        },
        children: n
      }
    )
  ] })
), _m = En(
  ({
    apply: r,
    onChange: n,
    value: t,
    textType: e,
    ...a
  }, o) => {
    const [i, s] = Ce(t ? String(t) : "");
    Le(() => {
      s(t ? String(t) : "");
    }, [t]);
    const c = (l) => {
      s(l.target.value), n && n(l);
    };
    return /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
      /* @__PURE__ */ v.jsx(_t, {}),
      /* @__PURE__ */ v.jsx(
        ls,
        {
          ...a,
          ref: o,
          type: e === void 0 ? "text" : e,
          style: { ...a.style },
          value: i,
          onChange: c
        }
      )
    ] });
  }
);
_m.displayName = "TextBox";
const Di = ["1fr", "1fr"], Fm = ({
  rowSizes: r = Di,
  colSizes: n = Di,
  children: t,
  gap: e = 10,
  border: a
}) => {
  var p;
  const [o, i] = Ce(r), [s, c] = Ce(n), [l, u] = Ce(window.innerHeight), [d, f] = Ce(window.innerWidth);
  return Le(() => {
    const m = () => {
      u(window.innerHeight), f(window.innerWidth), window.innerWidth < 768 ? (c(["1fr"]), i(r.map(() => "auto"))) : (c(n), i(r));
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [r, n]), /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateRows: o.join(" "),
          gridTemplateColumns: s.join(" "),
          gap: `${e}px`,
          width: `${d}px`,
          height: `${l}px`,
          // ✅ 고정된 높이 설정
          minHeight: "100vh",
          border: a,
          position: "relative",
          overflow: "hidden"
          // ✅ 내부에서 스크롤 제어
        },
        children: (p = w.Children) == null ? void 0 : p.toArray(t).filter((m) => {
          if (!w.isValidElement(m)) return !1;
          const [g, y] = m.props.startPosition;
          return g <= o.length && y <= s.length;
        })
      }
    )
  ] });
}, Sm = () => {
  const r = "0123456789ABCDEF";
  let n = "#";
  for (let t = 0; t < 6; t++)
    n += r[Math.floor(Math.random() * 16)];
  return n;
}, ic = ({
  startPosition: r,
  endPosition: n,
  children: t,
  level: e,
  border: a
}) => {
  const [o, i] = r, [s, c] = n, l = Sm();
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        gridRow: `${o} / ${s + 1}`,
        gridColumn: `${i} / ${c + 1}`,
        border: a,
        background: t ? "transparent" : l,
        display: "flex",
        flexDirection: "column",
        // ✅ 내부 요소 세로 정렬
        width: "100%",
        height: "100%",
        padding: 0,
        // ✅ 내부 여백 제거
        margin: 0,
        // ✅ 외부 여백 제거
        overflow: "hidden"
        // ✅ 내부 스크롤 문제 방지
      },
      children: t || `${e}Lv [${o}, ${i}] ~ [${s}, ${c}]`
    }
  );
}, xi = ["1fr", "1fr"], Cm = ({
  rowSizes: r = xi,
  colSizes: n = xi,
  children: t,
  gap: e = 10,
  border: a,
  level: o = 0
}) => /* @__PURE__ */ v.jsx(
  "div",
  {
    style: {
      display: "grid",
      gridTemplateRows: r.join(" "),
      gridTemplateColumns: n.join(" "),
      gap: `${e}px`,
      width: "100%",
      height: "100%",
      border: a,
      background: "#f9f9f9"
    },
    children: w.Children.map(t, (i) => w.isValidElement(i) && i.type === ic ? w.cloneElement(i, { level: o + 1 }) : i)
  }
), ki = (r) => r.reduce((n, t) => (n[t.key] = "", n), {}), Em = (r, n) => {
  switch (n.type) {
    case "UPDATE_FIELD":
      return { ...r, [n.payload.key]: n.payload.value };
    case "RESET_FORM":
      return { ...n.defaultState };
    // ✅ 폼 초기화 기능 추가  
    default:
      return r;
  }
};
function Mm(r) {
  const [n, t] = Ea(Em, ki(r));
  return {
    state: n,
    setFieldValue: (o) => {
      t({ type: "UPDATE_FIELD", payload: o });
    },
    resetForm: () => {
      t({ type: "RESET_FORM", defaultState: ki(r) });
    }
  };
}
const Pm = (r = "필수 입력 항목입니다.") => (n) => n ? void 0 : r, jm = (r, n) => (t) => (t == null ? void 0 : t.length) >= r ? void 0 : n || `${r}자 이상 입력해주세요`, Wm = (r = "이메일 형식이 올바르지 않습니다.") => (n) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) ? void 0 : r, Hm = (r = "숫자만 입력 가능합니다.") => (n) => isNaN(n) ? r : void 0, $m = (r, n) => (t) => (t == null ? void 0 : t.length) <= r ? void 0 : n || `${r}자 이하로 입력해주세요`, Bm = (r = "유효한 날짜 형식이 아닙니다.") => (n) => n instanceof Date && !isNaN(n.getTime()) ? void 0 : r, zm = (r, n = "허용되지 않은 값입니다.") => (t) => r.includes(t) ? void 0 : n, Vm = (r, n = "유효하지 않은 값입니다.") => (t) => r(t) ? void 0 : n, Om = (r, n) => {
  const t = {};
  return r.forEach((e) => {
    const a = n[e.key];
    let o;
    e.isRequired && (o = Pm(e.requiredMessage)(a)), !o && e.validate && (o = e.validate(a)), o && (t[e.key] = o);
  }), t;
}, Km = ({
  title: r,
  division: n,
  formFields: t,
  isActivateInitialButton: e = !0,
  onSubmit: a,
  onSerach: o
}) => {
  const i = Mm(t), [s, c] = Ce({}), l = Array.from({ length: n.row }, () => "1fr"), u = Array.from({ length: n.col }, () => "1fr");
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    r && /* @__PURE__ */ v.jsx("h2", { style: { textAlign: "left", marginBottom: "10px" }, children: r }),
    /* @__PURE__ */ v.jsx(Cm, { rowSizes: l, colSizes: u, gap: 10, children: t.map((d) => {
      const [f, p] = d.position, m = d.span || { row: 1, col: 1 }, g = [f, p], y = [f + m.row - 1, p + m.col - 1], x = i.state[d.key], b = w.isValidElement(d.component) ? w.cloneElement(d.component, {
        value: x,
        onChange: (D) => {
          var E;
          const k = ((E = D == null ? void 0 : D.target) == null ? void 0 : E.value) ?? (D == null ? void 0 : D.key) ?? D;
          i.setFieldValue({ key: d.key, value: k });
        }
      }) : null;
      return /* @__PURE__ */ v.jsxs(ic, { startPosition: g, endPosition: y, children: [
        /* @__PURE__ */ v.jsx(
          km,
          {
            label: d.label,
            isRequired: d.isRequired,
            toolTip: d.toolTip
          }
        ),
        b,
        s[d.key] && /* @__PURE__ */ v.jsx("div", { style: { color: "red", fontSize: 12 }, children: s[d.key] })
      ] }, d.key);
    }) }),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: "15px", gap: "2px" }, children: [
      a && /* @__PURE__ */ v.jsx(xr, { type: "button", onClick: () => {
        const d = Om(t, i.state);
        c(d), Object.keys(d).length === 0 && (a == null || a(i.state));
      }, children: "제출" }),
      o && /* @__PURE__ */ v.jsx(xr, { type: "button", onClick: () => o(i.state), children: "검색" }),
      e && /* @__PURE__ */ v.jsx(xr, { type: "button", onClick: () => i.resetForm(), children: "초기화" })
    ] })
  ] });
};
export {
  Ym as AvartarButton,
  xr as Button,
  Ds as CheckBox,
  Ya as DropDownBox,
  Km as Form,
  Am as Grid,
  km as Label,
  Cm as Layout,
  Fm as PageDesigner,
  ic as Section,
  oc as SingleDatePicker,
  _m as TextBox,
  Vm as custom,
  Bm as isDate,
  Wm as isEmail,
  zm as isIn,
  Hm as isNumber,
  Pm as isRequired,
  $m as maxLength,
  jm as minLength
};
