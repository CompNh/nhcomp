var Lc = Object.defineProperty;
var Ac = (r, n, t) => n in r ? Lc(r, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[n] = t;
var N = (r, n, t) => Ac(r, typeof n != "symbol" ? n + "" : n, t);
import * as z from "react";
import w, { useRef as Be, useContext as Yc, useMemo as Mi, useDebugValue as go, createElement as Pi, useEffect as Me, useState as xe, forwardRef as Mr, useReducer as Oa, useImperativeHandle as Ti, useLayoutEffect as Ra, cloneElement as Oi, createRef as wt, Component as we, useCallback as Fc } from "react";
import * as Lr from "xlsx";
import jc from "jspdf";
import Wc from "jspdf-autotable";
import * as Hc from "react-dom";
import Ri, { createPortal as Na } from "react-dom";
var Ar = { exports: {} }, pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function $c() {
  if (vo) return pr;
  vo = 1;
  var r = w, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, p = null, f = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (f = c.ref);
    for (u in c) e.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: s, key: p, ref: f, props: d, _owner: a.current };
  }
  return pr.Fragment = t, pr.jsx = i, pr.jsxs = i, pr;
}
var fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Bc() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && function() {
    var r = w, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function y(h) {
      if (h === null || typeof h != "object")
        return null;
      var E = m && h[m] || h[g];
      return typeof E == "function" ? E : null;
    }
    var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(h) {
      {
        for (var E = arguments.length, R = new Array(E > 1 ? E - 1 : 0), H = 1; H < E; H++)
          R[H - 1] = arguments[H];
        x("error", h, R);
      }
    }
    function x(h, E, R) {
      {
        var H = b.ReactDebugCurrentFrame, ee = H.getStackAddendum();
        ee !== "" && (E += "%s", R = R.concat([ee]));
        var oe = R.map(function(U) {
          return String(U);
        });
        oe.unshift("Warning: " + E), Function.prototype.apply.call(console[h], console, oe);
      }
    }
    var S = !1, M = !1, _ = !1, k = !1, C = !1, P;
    P = Symbol.for("react.module.reference");
    function I(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === e || h === o || C || h === a || h === l || h === u || k || h === f || S || M || _ || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === P || h.getModuleId !== void 0));
    }
    function T(h, E, R) {
      var H = h.displayName;
      if (H)
        return H;
      var ee = E.displayName || E.name || "";
      return ee !== "" ? R + "(" + ee + ")" : R;
    }
    function L(h) {
      return h.displayName || "Context";
    }
    function $(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
            var E = h;
            return L(E) + ".Consumer";
          case i:
            var R = h;
            return L(R._context) + ".Provider";
          case c:
            return T(h, h.render, "ForwardRef");
          case d:
            var H = h.displayName || null;
            return H !== null ? H : $(h.type) || "Memo";
          case p: {
            var ee = h, oe = ee._payload, U = ee._init;
            try {
              return $(U(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, K = 0, Y, j, W, q, fe, he, _e;
    function Ht() {
    }
    Ht.__reactDisabledLog = !0;
    function ur() {
      {
        if (K === 0) {
          Y = console.log, j = console.info, W = console.warn, q = console.error, fe = console.group, he = console.groupCollapsed, _e = console.groupEnd;
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
            log: B({}, h, {
              value: Y
            }),
            info: B({}, h, {
              value: j
            }),
            warn: B({}, h, {
              value: W
            }),
            error: B({}, h, {
              value: q
            }),
            group: B({}, h, {
              value: fe
            }),
            groupCollapsed: B({}, h, {
              value: he
            }),
            groupEnd: B({}, h, {
              value: _e
            })
          });
        }
        K < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var et = b.ReactCurrentDispatcher, dt;
    function Fe(h, E, R) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (ee) {
            var H = ee.stack.trim().match(/\n( *(at )?)/);
            dt = H && H[1] || "";
          }
        return `
` + dt + h;
      }
    }
    var je = !1, pt;
    {
      var Bt = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new Bt();
    }
    function We(h, E) {
      if (!h || je)
        return "";
      {
        var R = pt.get(h);
        if (R !== void 0)
          return R;
      }
      var H;
      je = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = et.current, et.current = null, ur();
      try {
        if (E) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (Te) {
              H = Te;
            }
            Reflect.construct(h, [], U);
          } else {
            try {
              U.call();
            } catch (Te) {
              H = Te;
            }
            h.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            H = Te;
          }
          h();
        }
      } catch (Te) {
        if (Te && H && typeof Te.stack == "string") {
          for (var Q = Te.stack.split(`
`), Se = H.stack.split(`
`), ue = Q.length - 1, me = Se.length - 1; ue >= 1 && me >= 0 && Q[ue] !== Se[me]; )
            me--;
          for (; ue >= 1 && me >= 0; ue--, me--)
            if (Q[ue] !== Se[me]) {
              if (ue !== 1 || me !== 1)
                do
                  if (ue--, me--, me < 0 || Q[ue] !== Se[me]) {
                    var Re = `
` + Q[ue].replace(" at new ", " at ");
                    return h.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", h.displayName)), typeof h == "function" && pt.set(h, Re), Re;
                  }
                while (ue >= 1 && me >= 0);
              break;
            }
        }
      } finally {
        je = !1, et.current = oe, $t(), Error.prepareStackTrace = ee;
      }
      var Vt = h ? h.displayName || h.name : "", St = Vt ? Fe(Vt) : "";
      return typeof h == "function" && pt.set(h, St), St;
    }
    function dc(h, E, R) {
      return We(h, !1);
    }
    function pc(h) {
      var E = h.prototype;
      return !!(E && E.isReactComponent);
    }
    function Nr(h, E, R) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return We(h, pc(h));
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
            return dc(h.render);
          case d:
            return Nr(h.type, E, R);
          case p: {
            var H = h, ee = H._payload, oe = H._init;
            try {
              return Nr(oe(ee), E, R);
            } catch {
            }
          }
        }
      return "";
    }
    var dr = Object.prototype.hasOwnProperty, to = {}, ro = b.ReactDebugCurrentFrame;
    function Ir(h) {
      if (h) {
        var E = h._owner, R = Nr(h.type, h._source, E ? E.type : null);
        ro.setExtraStackFrame(R);
      } else
        ro.setExtraStackFrame(null);
    }
    function fc(h, E, R, H, ee) {
      {
        var oe = Function.call.bind(dr);
        for (var U in h)
          if (oe(h, U)) {
            var Q = void 0;
            try {
              if (typeof h[U] != "function") {
                var Se = Error((H || "React class") + ": " + R + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              Q = h[U](E, U, H, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              Q = ue;
            }
            Q && !(Q instanceof Error) && (Ir(ee), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", R, U, typeof Q), Ir(null)), Q instanceof Error && !(Q.message in to) && (to[Q.message] = !0, Ir(ee), D("Failed %s type: %s", R, Q.message), Ir(null));
          }
      }
    }
    var hc = Array.isArray;
    function Kn(h) {
      return hc(h);
    }
    function mc(h) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, R = E && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return R;
      }
    }
    function gc(h) {
      try {
        return no(h), !1;
      } catch {
        return !0;
      }
    }
    function no(h) {
      return "" + h;
    }
    function ao(h) {
      if (gc(h))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mc(h)), no(h);
    }
    var oo = b.ReactCurrentOwner, vc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, io, so;
    function yc(h) {
      if (dr.call(h, "ref")) {
        var E = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function wc(h) {
      if (dr.call(h, "key")) {
        var E = Object.getOwnPropertyDescriptor(h, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function bc(h, E) {
      typeof h.ref == "string" && oo.current;
    }
    function Dc(h, E) {
      {
        var R = function() {
          io || (io = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        R.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function xc(h, E) {
      {
        var R = function() {
          so || (so = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        R.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var kc = function(h, E, R, H, ee, oe, U) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: h,
        key: E,
        ref: R,
        props: U,
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
        value: H
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function _c(h, E, R, H, ee) {
      {
        var oe, U = {}, Q = null, Se = null;
        R !== void 0 && (ao(R), Q = "" + R), wc(E) && (ao(E.key), Q = "" + E.key), yc(E) && (Se = E.ref, bc(E, ee));
        for (oe in E)
          dr.call(E, oe) && !vc.hasOwnProperty(oe) && (U[oe] = E[oe]);
        if (h && h.defaultProps) {
          var ue = h.defaultProps;
          for (oe in ue)
            U[oe] === void 0 && (U[oe] = ue[oe]);
        }
        if (Q || Se) {
          var me = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Q && Dc(U, me), Se && xc(U, me);
        }
        return kc(h, Q, Se, ee, H, oo.current, U);
      }
    }
    var Gn = b.ReactCurrentOwner, co = b.ReactDebugCurrentFrame;
    function zt(h) {
      if (h) {
        var E = h._owner, R = Nr(h.type, h._source, E ? E.type : null);
        co.setExtraStackFrame(R);
      } else
        co.setExtraStackFrame(null);
    }
    var Qn;
    Qn = !1;
    function qn(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function lo() {
      {
        if (Gn.current) {
          var h = $(Gn.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Sc(h) {
      return "";
    }
    var uo = {};
    function Cc(h) {
      {
        var E = lo();
        if (!E) {
          var R = typeof h == "string" ? h : h.displayName || h.name;
          R && (E = `

Check the top-level render call using <` + R + ">.");
        }
        return E;
      }
    }
    function po(h, E) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var R = Cc(E);
        if (uo[R])
          return;
        uo[R] = !0;
        var H = "";
        h && h._owner && h._owner !== Gn.current && (H = " It was passed a child from " + $(h._owner.type) + "."), zt(h), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, H), zt(null);
      }
    }
    function fo(h, E) {
      {
        if (typeof h != "object")
          return;
        if (Kn(h))
          for (var R = 0; R < h.length; R++) {
            var H = h[R];
            qn(H) && po(H, E);
          }
        else if (qn(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ee = y(h);
          if (typeof ee == "function" && ee !== h.entries)
            for (var oe = ee.call(h), U; !(U = oe.next()).done; )
              qn(U.value) && po(U.value, E);
        }
      }
    }
    function Ec(h) {
      {
        var E = h.type;
        if (E == null || typeof E == "string")
          return;
        var R;
        if (typeof E == "function")
          R = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === d))
          R = E.propTypes;
        else
          return;
        if (R) {
          var H = $(E);
          fc(R, h.props, "prop", H, h);
        } else if (E.PropTypes !== void 0 && !Qn) {
          Qn = !0;
          var ee = $(E);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mc(h) {
      {
        for (var E = Object.keys(h.props), R = 0; R < E.length; R++) {
          var H = E[R];
          if (H !== "children" && H !== "key") {
            zt(h), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), zt(null);
            break;
          }
        }
        h.ref !== null && (zt(h), D("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var ho = {};
    function mo(h, E, R, H, ee, oe) {
      {
        var U = I(h);
        if (!U) {
          var Q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Sc();
          Se ? Q += Se : Q += lo();
          var ue;
          h === null ? ue = "null" : Kn(h) ? ue = "array" : h !== void 0 && h.$$typeof === n ? (ue = "<" + ($(h.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, Q);
        }
        var me = _c(h, E, R, ee, oe);
        if (me == null)
          return me;
        if (U) {
          var Re = E.children;
          if (Re !== void 0)
            if (H)
              if (Kn(Re)) {
                for (var Vt = 0; Vt < Re.length; Vt++)
                  fo(Re[Vt], h);
                Object.freeze && Object.freeze(Re);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fo(Re, h);
        }
        if (dr.call(E, "key")) {
          var St = $(h), Te = Object.keys(E).filter(function(Ic) {
            return Ic !== "key";
          }), Un = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ho[St + Un]) {
            var Nc = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Un, St, Nc, St), ho[St + Un] = !0;
          }
        }
        return h === e ? Mc(me) : Ec(me), me;
      }
    }
    function Pc(h, E, R) {
      return mo(h, E, R, !0);
    }
    function Tc(h, E, R) {
      return mo(h, E, R, !1);
    }
    var Oc = Tc, Rc = Pc;
    fr.Fragment = e, fr.jsx = Oc, fr.jsxs = Rc;
  }()), fr;
}
var wo;
function zc() {
  return wo || (wo = 1, process.env.NODE_ENV === "production" ? Ar.exports = $c() : Ar.exports = Bc()), Ar.exports;
}
var v = zc(), ye = function() {
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
function Vc(r) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = r(t)), n[t];
  };
}
var Kc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gc = /* @__PURE__ */ Vc(
  function(r) {
    return Kc.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ie = "-ms-", Dr = "-moz-", te = "-webkit-", Ni = "comm", Tn = "rule", Ia = "decl", Qc = "@import", Ii = "@keyframes", qc = "@layer", Li = Math.abs, La = String.fromCharCode, fa = Object.assign;
function Uc(r, n) {
  return ve(r, 0) ^ 45 ? (((n << 2 ^ ve(r, 0)) << 2 ^ ve(r, 1)) << 2 ^ ve(r, 2)) << 2 ^ ve(r, 3) : 0;
}
function Ai(r) {
  return r.trim();
}
function rt(r, n) {
  return (r = n.exec(r)) ? r[0] : r;
}
function V(r, n, t) {
  return r.replace(n, t);
}
function qr(r, n, t) {
  return r.indexOf(n, t);
}
function ve(r, n) {
  return r.charCodeAt(n) | 0;
}
function Xt(r, n, t) {
  return r.slice(n, t);
}
function Ke(r) {
  return r.length;
}
function Yi(r) {
  return r.length;
}
function yr(r, n) {
  return n.push(r), r;
}
function Xc(r, n) {
  return r.map(n).join("");
}
function bo(r, n) {
  return r.filter(function(t) {
    return !rt(t, n);
  });
}
var On = 1, Zt = 1, Fi = 0, Ae = 0, ge = 0, cr = "";
function Rn(r, n, t, e, a, o, i, s) {
  return { value: r, root: n, parent: t, type: e, props: a, children: o, line: On, column: Zt, length: i, return: "", siblings: s };
}
function ht(r, n) {
  return fa(Rn("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, n);
}
function Kt(r) {
  for (; r.root; )
    r = ht(r.root, { children: [r] });
  yr(r, r.siblings);
}
function Zc() {
  return ge;
}
function Jc() {
  return ge = Ae > 0 ? ve(cr, --Ae) : 0, Zt--, ge === 10 && (Zt = 1, On--), ge;
}
function He() {
  return ge = Ae < Fi ? ve(cr, Ae++) : 0, Zt++, ge === 10 && (Zt = 1, On++), ge;
}
function Tt() {
  return ve(cr, Ae);
}
function Ur() {
  return Ae;
}
function Nn(r, n) {
  return Xt(cr, r, n);
}
function ha(r) {
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
function el(r) {
  return On = Zt = 1, Fi = Ke(cr = r), Ae = 0, [];
}
function tl(r) {
  return cr = "", r;
}
function Xn(r) {
  return Ai(Nn(Ae - 1, ma(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function rl(r) {
  for (; (ge = Tt()) && ge < 33; )
    He();
  return ha(r) > 2 || ha(ge) > 3 ? "" : " ";
}
function nl(r, n) {
  for (; --n && He() && !(ge < 48 || ge > 102 || ge > 57 && ge < 65 || ge > 70 && ge < 97); )
    ;
  return Nn(r, Ur() + (n < 6 && Tt() == 32 && He() == 32));
}
function ma(r) {
  for (; He(); )
    switch (ge) {
      // ] ) " '
      case r:
        return Ae;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && ma(ge);
        break;
      // (
      case 40:
        r === 41 && ma(r);
        break;
      // \
      case 92:
        He();
        break;
    }
  return Ae;
}
function al(r, n) {
  for (; He() && r + ge !== 57; )
    if (r + ge === 84 && Tt() === 47)
      break;
  return "/*" + Nn(n, Ae - 1) + "*" + La(r === 47 ? r : He());
}
function ol(r) {
  for (; !ha(Tt()); )
    He();
  return Nn(r, Ae);
}
function il(r) {
  return tl(Xr("", null, null, null, [""], r = el(r), 0, [0], r));
}
function Xr(r, n, t, e, a, o, i, s, c) {
  for (var l = 0, u = 0, d = i, p = 0, f = 0, m = 0, g = 1, y = 1, b = 1, D = 0, x = "", S = a, M = o, _ = e, k = x; y; )
    switch (m = D, D = He()) {
      // (
      case 40:
        if (m != 108 && ve(k, d - 1) == 58) {
          qr(k += V(Xn(D), "&", "&\f"), "&\f", Li(l ? s[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += Xn(D);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += rl(m);
        break;
      // \
      case 92:
        k += nl(Ur() - 1, 7);
        continue;
      // /
      case 47:
        switch (Tt()) {
          case 42:
          case 47:
            yr(sl(al(He(), Ur()), n, t, c), c);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * g:
        s[l++] = Ke(k) * b;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (D) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + u:
            b == -1 && (k = V(k, /\f/g, "")), f > 0 && Ke(k) - d && yr(f > 32 ? xo(k + ";", e, t, d - 1, c) : xo(V(k, " ", "") + ";", e, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if (yr(_ = Do(k, n, t, l, u, a, s, x, S = [], M = [], d, o), o), D === 123)
              if (u === 0)
                Xr(k, n, _, _, S, o, d, s, M);
              else
                switch (p === 99 && ve(k, 3) === 110 ? 100 : p) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xr(r, _, _, e && yr(Do(r, _, _, 0, 0, a, s, x, a, S = [], d, M), M), a, M, d, s, e ? S : M);
                    break;
                  default:
                    Xr(k, _, _, _, [""], M, 0, s, M);
                }
        }
        l = u = f = 0, g = b = 1, x = k = "", d = i;
        break;
      // :
      case 58:
        d = 1 + Ke(k), f = m;
      default:
        if (g < 1) {
          if (D == 123)
            --g;
          else if (D == 125 && g++ == 0 && Jc() == 125)
            continue;
        }
        switch (k += La(D), D * g) {
          // &
          case 38:
            b = u > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Ke(k) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Tt() === 45 && (k += Xn(He())), p = Tt(), u = d = Ke(x = k += ol(Ur())), D++;
            break;
          // -
          case 45:
            m === 45 && Ke(k) == 2 && (g = 0);
        }
    }
  return o;
}
function Do(r, n, t, e, a, o, i, s, c, l, u, d) {
  for (var p = a - 1, f = a === 0 ? o : [""], m = Yi(f), g = 0, y = 0, b = 0; g < e; ++g)
    for (var D = 0, x = Xt(r, p + 1, p = Li(y = i[g])), S = r; D < m; ++D)
      (S = Ai(y > 0 ? f[D] + " " + x : V(x, /&\f/g, f[D]))) && (c[b++] = S);
  return Rn(r, n, t, a === 0 ? Tn : s, c, l, u, d);
}
function sl(r, n, t, e) {
  return Rn(r, n, t, Ni, La(Zc()), Xt(r, 2, -2), 0, e);
}
function xo(r, n, t, e, a) {
  return Rn(r, n, t, Ia, Xt(r, 0, e), Xt(r, e + 1, -1), e, a);
}
function ji(r, n, t) {
  switch (Uc(r, n)) {
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
      }) ? ~qr(r + (t = t[n].value), "span", 0) ? r : ie + V(r, "-start", "") + r + ie + "grid-row-span:" + (~qr(t, "span", 0) ? rt(t, /\d+/) : +rt(t, /\d+/) - +rt(r, /\d+/)) + ";" : ie + V(r, "-start", "") + r;
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
      if (Ke(r) - 1 - n > 6)
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
            return ~qr(r, "stretch", 0) ? ji(V(r, "stretch", "fill-available"), n, t) + r : r;
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
function ln(r, n) {
  for (var t = "", e = 0; e < r.length; e++)
    t += n(r[e], e, r, n) || "";
  return t;
}
function cl(r, n, t, e) {
  switch (r.type) {
    case qc:
      if (r.children.length) break;
    case Qc:
    case Ia:
      return r.return = r.return || r.value;
    case Ni:
      return "";
    case Ii:
      return r.return = r.value + "{" + ln(r.children, e) + "}";
    case Tn:
      if (!Ke(r.value = r.props.join(","))) return "";
  }
  return Ke(t = ln(r.children, e)) ? r.return = r.value + "{" + t + "}" : "";
}
function ll(r) {
  var n = Yi(r);
  return function(t, e, a, o) {
    for (var i = "", s = 0; s < n; s++)
      i += r[s](t, e, a, o) || "";
    return i;
  };
}
function ul(r) {
  return function(n) {
    n.root || (n = n.return) && r(n);
  };
}
function dl(r, n, t, e) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ia:
        r.return = ji(r.value, r.length, t);
        return;
      case Ii:
        return ln([ht(r, { value: V(r.value, "@", "@" + te) })], e);
      case Tn:
        if (r.length)
          return Xc(t = r.props, function(a) {
            switch (rt(a, e = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Kt(ht(r, { props: [V(a, /:(read-\w+)/, ":" + Dr + "$1")] })), Kt(ht(r, { props: [a] })), fa(r, { props: bo(t, e) });
                break;
              // :placeholder
              case "::placeholder":
                Kt(ht(r, { props: [V(a, /:(plac\w+)/, ":" + te + "input-$1")] })), Kt(ht(r, { props: [V(a, /:(plac\w+)/, ":" + Dr + "$1")] })), Kt(ht(r, { props: [V(a, /:(plac\w+)/, ie + "input-$1")] })), Kt(ht(r, { props: [a] })), fa(r, { props: bo(t, e) });
                break;
            }
            return "";
          });
    }
}
var pl = {
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
}, Lt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Wi = "active", Hi = "data-styled-version", In = "6.1.15", Aa = `/*!sc*/
`, un = typeof window < "u" && "HTMLElement" in window, fl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), hl = {}, ko = /invalid hook call/i, Yr = /* @__PURE__ */ new Set(), $i = function(r, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", e = "The component ".concat(r).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
        ko.test(i) ? (o = !1, Yr.delete(e)) : a.apply(void 0, It([i], s, !1));
      }, Be(), o && !Yr.has(e) && (console.warn(e), Yr.add(e));
    } catch (i) {
      ko.test(i.message) && Yr.delete(e);
    } finally {
      console.error = a;
    }
  }
}, Ln = Object.freeze([]), Jt = Object.freeze({});
function Bi(r, n, t) {
  return t === void 0 && (t = Jt), r.theme !== t.theme && r.theme || n || t.theme;
}
var ga = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ml = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, gl = /(^-|-$)/g;
function _o(r) {
  return r.replace(ml, "-").replace(gl, "");
}
var vl = /(a)(d)/gi, Fr = 52, So = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function va(r) {
  var n, t = "";
  for (n = Math.abs(r); n > Fr; n = n / Fr | 0) t = So(n % Fr) + t;
  return (So(n % Fr) + t).replace(vl, "$1-$2");
}
var Zn, zi = 5381, Et = function(r, n) {
  for (var t = n.length; t; ) r = 33 * r ^ n.charCodeAt(--t);
  return r;
}, Vi = function(r) {
  return Et(zi, r);
};
function Ki(r) {
  return va(Vi(r) >>> 0);
}
function Gi(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function Jn(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var Qi = typeof Symbol == "function" && Symbol.for, qi = Qi ? Symbol.for("react.memo") : 60115, yl = Qi ? Symbol.for("react.forward_ref") : 60112, wl = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, bl = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ui = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Dl = ((Zn = {})[yl] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Zn[qi] = Ui, Zn);
function Co(r) {
  return ("type" in (n = r) && n.type.$$typeof) === qi ? Ui : "$$typeof" in r ? Dl[r.$$typeof] : wl;
  var n;
}
var xl = Object.defineProperty, kl = Object.getOwnPropertyNames, Eo = Object.getOwnPropertySymbols, _l = Object.getOwnPropertyDescriptor, Sl = Object.getPrototypeOf, Mo = Object.prototype;
function Xi(r, n, t) {
  if (typeof n != "string") {
    if (Mo) {
      var e = Sl(n);
      e && e !== Mo && Xi(r, e, t);
    }
    var a = kl(n);
    Eo && (a = a.concat(Eo(n)));
    for (var o = Co(r), i = Co(n), s = 0; s < a.length; ++s) {
      var c = a[s];
      if (!(c in bl || t && t[c] || i && c in i || o && c in o)) {
        var l = _l(n, c);
        try {
          xl(r, c, l);
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
function Ya(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function Mt(r, n) {
  return r && n ? "".concat(r, " ").concat(n) : r || n || "";
}
function ya(r, n) {
  if (r.length === 0) return "";
  for (var t = r[0], e = 1; e < r.length; e++) t += r[e];
  return t;
}
function er(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function wa(r, n, t) {
  if (t === void 0 && (t = !1), !t && !er(r) && !Array.isArray(r)) return n;
  if (Array.isArray(n)) for (var e = 0; e < n.length; e++) r[e] = wa(r[e], n[e]);
  else if (er(n)) for (var e in n) r[e] = wa(r[e], n[e]);
  return r;
}
function Fa(r, n) {
  Object.defineProperty(r, "toString", { value: n });
}
var Cl = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function El() {
  for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
  for (var t = r[0], e = [], a = 1, o = r.length; a < o; a += 1) e.push(r[a]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function nt(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(El.apply(void 0, It([Cl[r]], n, !1)).trim());
}
var Ml = function() {
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
    for (var e = this.groupSizes[n], a = this.indexOfGroup(n), o = a + e, i = a; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(Aa);
    return t;
  }, r;
}(), Pl = 1 << 30, Zr = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Map(), Jr = 1, jr = function(r) {
  if (Zr.has(r)) return Zr.get(r);
  for (; dn.has(Jr); ) Jr++;
  var n = Jr++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > Pl)) throw nt(16, "".concat(n));
  return Zr.set(r, n), dn.set(n, r), n;
}, Tl = function(r, n) {
  Jr = n + 1, Zr.set(r, n), dn.set(n, r);
}, Ol = "style[".concat(Lt, "][").concat(Hi, '="').concat(In, '"]'), Rl = new RegExp("^".concat(Lt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Nl = function(r, n, t) {
  for (var e, a = t.split(","), o = 0, i = a.length; o < i; o++) (e = a[o]) && r.registerName(n, e);
}, Il = function(r, n) {
  for (var t, e = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Aa), a = [], o = 0, i = e.length; o < i; o++) {
    var s = e[o].trim();
    if (s) {
      var c = s.match(Rl);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (Tl(u, l), Nl(r, u, c[3]), r.getTag().insertRules(l, a)), a.length = 0;
      } else a.push(s);
    }
  }
}, Po = function(r) {
  for (var n = document.querySelectorAll(Ol), t = 0, e = n.length; t < e; t++) {
    var a = n[t];
    a && a.getAttribute(Lt) !== Wi && (Il(r, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function Ll() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zi = function(r) {
  var n = document.head, t = r || n, e = document.createElement("style"), a = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(Lt, "]")));
    return c[c.length - 1];
  }(t), o = a !== void 0 ? a.nextSibling : null;
  e.setAttribute(Lt, Wi), e.setAttribute(Hi, In);
  var i = Ll();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, o), e;
}, Al = function() {
  function r(n) {
    this.element = Zi(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
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
}(), Yl = function() {
  function r(n) {
    this.element = Zi(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Fl = function() {
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
}(), To = un, jl = { isServer: !un, useCSSOMInjection: !fl }, pn = function() {
  function r(n, t, e) {
    n === void 0 && (n = Jt), t === void 0 && (t = {});
    var a = this;
    this.options = ye(ye({}, jl), n), this.gs = t, this.names = new Map(e), this.server = !!n.isServer, !this.server && un && To && (To = !1, Po(this)), Fa(this, function() {
      return function(o) {
        for (var i = o.getTag(), s = i.length, c = "", l = function(d) {
          var p = function(b) {
            return dn.get(b);
          }(d);
          if (p === void 0) return "continue";
          var f = o.names.get(p), m = i.getGroup(d);
          if (f === void 0 || !f.size || m.length === 0) return "continue";
          var g = "".concat(Lt, ".g").concat(d, '[id="').concat(p, '"]'), y = "";
          f !== void 0 && f.forEach(function(b) {
            b.length > 0 && (y += "".concat(b, ","));
          }), c += "".concat(m).concat(g, '{content:"').concat(y, '"}').concat(Aa);
        }, u = 0; u < s; u++) l(u);
        return c;
      }(a);
    });
  }
  return r.registerId = function(n) {
    return jr(n);
  }, r.prototype.rehydrate = function() {
    !this.server && un && Po(this);
  }, r.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new r(ye(ye({}, this.options), n), this.gs, t && this.names || void 0);
  }, r.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var e = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new Fl(a) : e ? new Al(a) : new Yl(a);
    }(this.options), new Ml(n)));
    var n;
  }, r.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, r.prototype.registerName = function(n, t) {
    if (jr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(n, e);
    }
  }, r.prototype.insertRules = function(n, t, e) {
    this.registerName(n, t), this.getTag().insertRules(jr(n), e);
  }, r.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, r.prototype.clearRules = function(n) {
    this.getTag().clearGroup(jr(n)), this.clearNames(n);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}(), Wl = /&/g, Hl = /^\s*\/\/.*$/gm;
function Ji(r, n) {
  return r.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
      return "".concat(n, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ji(t.children, n)), t;
  });
}
function $l(r) {
  var n, t, e, a = Jt, o = a.options, i = o === void 0 ? Jt : o, s = a.plugins, c = s === void 0 ? Ln : s, l = function(p, f, m) {
    return m.startsWith(t) && m.endsWith(t) && m.replaceAll(t, "").length > 0 ? ".".concat(n) : p;
  }, u = c.slice();
  u.push(function(p) {
    p.type === Tn && p.value.includes("&") && (p.props[0] = p.props[0].replace(Wl, t).replace(e, l));
  }), i.prefix && u.push(dl), u.push(cl);
  var d = function(p, f, m, g) {
    f === void 0 && (f = ""), m === void 0 && (m = ""), g === void 0 && (g = "&"), n = g, t = f, e = new RegExp("\\".concat(t, "\\b"), "g");
    var y = p.replace(Hl, ""), b = il(m || f ? "".concat(m, " ").concat(f, " { ").concat(y, " }") : y);
    i.namespace && (b = Ji(b, i.namespace));
    var D = [];
    return ln(b, ll(u.concat(ul(function(x) {
      return D.push(x);
    })))), D;
  };
  return d.hash = c.length ? c.reduce(function(p, f) {
    return f.name || nt(15), Et(p, f.name);
  }, zi).toString() : "", d;
}
var Bl = new pn(), ba = $l(), es = w.createContext({ shouldForwardProp: void 0, styleSheet: Bl, stylis: ba });
es.Consumer;
w.createContext(void 0);
function Da() {
  return Yc(es);
}
var Oo = function() {
  function r(n, t) {
    var e = this;
    this.inject = function(a, o) {
      o === void 0 && (o = ba);
      var i = e.name + o.hash;
      a.hasNameForId(e.id, i) || a.insertRules(e.id, i, o(e.rules, i, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, Fa(this, function() {
      throw nt(12, String(e.name));
    });
  }
  return r.prototype.getName = function(n) {
    return n === void 0 && (n = ba), this.name + n.hash;
  }, r;
}(), zl = function(r) {
  return r >= "A" && r <= "Z";
};
function Ro(r) {
  for (var n = "", t = 0; t < r.length; t++) {
    var e = r[t];
    if (t === 1 && e === "-" && r[0] === "-") return r;
    zl(e) ? n += "-" + e.toLowerCase() : n += e;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var ts = function(r) {
  return r == null || r === !1 || r === "";
}, rs = function(r) {
  var n, t, e = [];
  for (var a in r) {
    var o = r[a];
    r.hasOwnProperty(a) && !ts(o) && (Array.isArray(o) && o.isCss || At(o) ? e.push("".concat(Ro(a), ":"), o, ";") : er(o) ? e.push.apply(e, It(It(["".concat(a, " {")], rs(o), !1), ["}"], !1)) : e.push("".concat(Ro(a), ": ").concat((n = a, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in pl || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function gt(r, n, t, e) {
  if (ts(r)) return [];
  if (Ya(r)) return [".".concat(r.styledComponentId)];
  if (At(r)) {
    if (!At(o = r) || o.prototype && o.prototype.isReactComponent || !n) return [r];
    var a = r(n);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof Oo || er(a) || a === null || console.error("".concat(Gi(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gt(a, n, t, e);
  }
  var o;
  return r instanceof Oo ? t ? (r.inject(t, e), [r.getName(e)]) : [r] : er(r) ? rs(r) : Array.isArray(r) ? Array.prototype.concat.apply(Ln, r.map(function(i) {
    return gt(i, n, t, e);
  })) : [r.toString()];
}
function ns(r) {
  for (var n = 0; n < r.length; n += 1) {
    var t = r[n];
    if (At(t) && !Ya(t)) return !1;
  }
  return !0;
}
var Vl = Vi(In), Kl = function() {
  function r(n, t, e) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (e === void 0 || e.isStatic) && ns(n), this.componentId = t, this.baseHash = Et(Vl, t), this.baseStyle = e, pn.registerId(t);
  }
  return r.prototype.generateAndInjectStyles = function(n, t, e) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, e) : "";
    if (this.isStatic && !e.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) a = Mt(a, this.staticRulesId);
    else {
      var o = ya(gt(this.rules, n, t, e)), i = va(Et(this.baseHash, o) >>> 0);
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
          var p = ya(gt(d, n, t, e));
          c = Et(c, p + u), l += p;
        }
      }
      if (l) {
        var f = va(c >>> 0);
        t.hasNameForId(this.componentId, f) || t.insertRules(this.componentId, f, e(l, ".".concat(f), void 0, this.componentId)), a = Mt(a, f);
      }
    }
    return a;
  }, r;
}(), kr = w.createContext(void 0);
kr.Consumer;
function xt(r) {
  var n = w.useContext(kr), t = Mi(function() {
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
var ea = {}, No = /* @__PURE__ */ new Set();
function Gl(r, n, t) {
  var e = Ya(r), a = r, o = !Jn(r), i = n.attrs, s = i === void 0 ? Ln : i, c = n.componentId, l = c === void 0 ? function(S, M) {
    var _ = typeof S != "string" ? "sc" : _o(S);
    ea[_] = (ea[_] || 0) + 1;
    var k = "".concat(_, "-").concat(Ki(In + _ + ea[_]));
    return M ? "".concat(M, "-").concat(k) : k;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(S) {
    return Jn(S) ? "styled.".concat(S) : "Styled(".concat(Gi(S), ")");
  }(r) : u, p = n.displayName && n.componentId ? "".concat(_o(n.displayName), "-").concat(n.componentId) : n.componentId || l, f = e && a.attrs ? a.attrs.concat(s).filter(Boolean) : s, m = n.shouldForwardProp;
  if (e && a.shouldForwardProp) {
    var g = a.shouldForwardProp;
    if (n.shouldForwardProp) {
      var y = n.shouldForwardProp;
      m = function(S, M) {
        return g(S, M) && y(S, M);
      };
    } else m = g;
  }
  var b = new Kl(t, p, e ? a.componentStyle : void 0);
  function D(S, M) {
    return function(_, k, C) {
      var P = _.attrs, I = _.componentStyle, T = _.defaultProps, L = _.foldedComponentIds, $ = _.styledComponentId, B = _.target, K = w.useContext(kr), Y = Da(), j = _.shouldForwardProp || Y.shouldForwardProp;
      process.env.NODE_ENV !== "production" && go($);
      var W = Bi(k, K, T) || Jt, q = function($t, et, dt) {
        for (var Fe, je = ye(ye({}, et), { className: void 0, theme: dt }), pt = 0; pt < $t.length; pt += 1) {
          var Bt = At(Fe = $t[pt]) ? Fe(je) : Fe;
          for (var We in Bt) je[We] = We === "className" ? Mt(je[We], Bt[We]) : We === "style" ? ye(ye({}, je[We]), Bt[We]) : Bt[We];
        }
        return et.className && (je.className = Mt(je.className, et.className)), je;
      }(P, k, W), fe = q.as || B, he = {};
      for (var _e in q) q[_e] === void 0 || _e[0] === "$" || _e === "as" || _e === "theme" && q.theme === W || (_e === "forwardedAs" ? he.as = q.forwardedAs : j && !j(_e, fe) || (he[_e] = q[_e], j || process.env.NODE_ENV !== "development" || Gc(_e) || No.has(_e) || !ga.has(fe) || (No.add(_e), console.warn('styled-components: it looks like an unknown prop "'.concat(_e, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ht = function($t, et) {
        var dt = Da(), Fe = $t.generateAndInjectStyles(et, dt.styleSheet, dt.stylis);
        return process.env.NODE_ENV !== "production" && go(Fe), Fe;
      }(I, q);
      process.env.NODE_ENV !== "production" && _.warnTooManyClasses && _.warnTooManyClasses(Ht);
      var ur = Mt(L, $);
      return Ht && (ur += " " + Ht), q.className && (ur += " " + q.className), he[Jn(fe) && !ga.has(fe) ? "class" : "className"] = ur, C && (he.ref = C), Pi(fe, he);
    }(x, S, M);
  }
  D.displayName = d;
  var x = w.forwardRef(D);
  return x.attrs = f, x.componentStyle = b, x.displayName = d, x.shouldForwardProp = m, x.foldedComponentIds = e ? Mt(a.foldedComponentIds, a.styledComponentId) : "", x.styledComponentId = p, x.target = e ? a.target : r, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = e ? function(M) {
      for (var _ = [], k = 1; k < arguments.length; k++) _[k - 1] = arguments[k];
      for (var C = 0, P = _; C < P.length; C++) wa(M, P[C], !0);
      return M;
    }({}, a.defaultProps, S) : S;
  } }), process.env.NODE_ENV !== "production" && ($i(d, p), x.warnTooManyClasses = /* @__PURE__ */ function(S, M) {
    var _ = {}, k = !1;
    return function(C) {
      if (!k && (_[C] = !0, Object.keys(_).length >= 200)) {
        var P = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(S).concat(P, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), k = !0, _ = {};
      }
    };
  }(d, p)), Fa(x, function() {
    return ".".concat(x.styledComponentId);
  }), o && Xi(x, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function Io(r, n) {
  for (var t = [r[0]], e = 0, a = n.length; e < a; e += 1) t.push(n[e], r[e + 1]);
  return t;
}
var Lo = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function as(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (At(r) || er(r)) return Lo(gt(Io(Ln, It([r], n, !0))));
  var e = r;
  return n.length === 0 && e.length === 1 && typeof e[0] == "string" ? gt(e) : Lo(gt(Io(e, n)));
}
function xa(r, n, t) {
  if (t === void 0 && (t = Jt), !n) throw nt(1, n);
  var e = function(a) {
    for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
    return r(n, t, as.apply(void 0, It([a], o, !1)));
  };
  return e.attrs = function(a) {
    return xa(r, n, ye(ye({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, e.withConfig = function(a) {
    return xa(r, n, ye(ye({}, t), a));
  }, e;
}
var os = function(r) {
  return xa(Gl, r);
}, F = os;
ga.forEach(function(r) {
  F[r] = os(r);
});
var Ql = function() {
  function r(n, t) {
    this.rules = n, this.componentId = t, this.isStatic = ns(n), pn.registerId(this.componentId + 1);
  }
  return r.prototype.createStyles = function(n, t, e, a) {
    var o = a(ya(gt(this.rules, t, e, a)), ""), i = this.componentId + n;
    e.insertRules(i, i, o);
  }, r.prototype.removeStyles = function(n, t) {
    t.clearRules(this.componentId + n);
  }, r.prototype.renderStyles = function(n, t, e, a) {
    n > 2 && pn.registerId(this.componentId + n), this.removeStyles(n, e), this.createStyles(n, t, e, a);
  }, r;
}();
function ql(r) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  var e = as.apply(void 0, It([r], n, !1)), a = "sc-global-".concat(Ki(JSON.stringify(e))), o = new Ql(e, a);
  process.env.NODE_ENV !== "production" && $i(a);
  var i = function(c) {
    var l = Da(), u = w.useContext(kr), d = w.useRef(l.styleSheet.allocateGSInstance(a)).current;
    return process.env.NODE_ENV !== "production" && w.Children.count(c.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && e.some(function(p) {
      return typeof p == "string" && p.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.styleSheet.server && s(d, c, l.styleSheet, u, l.stylis), w.useLayoutEffect(function() {
      if (!l.styleSheet.server) return s(d, c, l.styleSheet, u, l.stylis), function() {
        return o.removeStyles(d, l.styleSheet);
      };
    }, [d, c, l.styleSheet, u, l.stylis]), null;
  };
  function s(c, l, u, d, p) {
    if (o.isStatic) o.renderStyles(c, hl, u, p);
    else {
      var f = ye(ye({}, l), { theme: Bi(l, d, i.defaultProps) });
      o.renderStyles(c, f, u, p);
    }
  }
  return w.memo(i);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Wr = "__sc-".concat(Lt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Wr] || (window[Wr] = 0), window[Wr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Wr] += 1);
var is = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ao = w.createContext && /* @__PURE__ */ w.createContext(is), Ul = ["attr", "size", "title"];
function Xl(r, n) {
  if (r == null) return {};
  var t = Zl(r, n), e, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      e = o[a], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(r, e) && (t[e] = r[e]);
  }
  return t;
}
function Zl(r, n) {
  if (r == null) return {};
  var t = {};
  for (var e in r)
    if (Object.prototype.hasOwnProperty.call(r, e)) {
      if (n.indexOf(e) >= 0) continue;
      t[e] = r[e];
    }
  return t;
}
function fn() {
  return fn = Object.assign ? Object.assign.bind() : function(r) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
    }
    return r;
  }, fn.apply(this, arguments);
}
function Yo(r, n) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(r);
    n && (e = e.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function hn(r) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Yo(Object(t), !0).forEach(function(e) {
      Jl(r, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Yo(Object(t)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return r;
}
function Jl(r, n, t) {
  return n = eu(n), n in r ? Object.defineProperty(r, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = t, r;
}
function eu(r) {
  var n = tu(r, "string");
  return typeof n == "symbol" ? n : n + "";
}
function tu(r, n) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var e = t.call(r, n);
    if (typeof e != "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(r);
}
function ss(r) {
  return r && r.map((n, t) => /* @__PURE__ */ w.createElement(n.tag, hn({
    key: t
  }, n.attr), ss(n.child)));
}
function Pe(r) {
  return (n) => /* @__PURE__ */ w.createElement(ru, fn({
    attr: hn({}, r.attr)
  }, n), ss(r.child));
}
function ru(r) {
  var n = (t) => {
    var {
      attr: e,
      size: a,
      title: o
    } = r, i = Xl(r, Ul), s = a || t.size || "1em", c;
    return t.className && (c = t.className), r.className && (c = (c ? c + " " : "") + r.className), /* @__PURE__ */ w.createElement("svg", fn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, e, i, {
      className: c,
      style: hn(hn({
        color: r.color || t.color
      }, t.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ w.createElement("title", null, o), r.children);
  };
  return Ao !== void 0 ? /* @__PURE__ */ w.createElement(Ao.Consumer, null, (t) => n(t)) : n(is);
}
function nu(r) {
  return Pe({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(r);
}
function ja(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(r);
}
function cs(r) {
  return Pe({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(r);
}
function au(r) {
  return Pe({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(r);
}
function ls(r) {
  return Pe({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(r);
}
function ou(r) {
  return Pe({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }, child: [] }] })(r);
}
function iu(r) {
  return Pe({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z" }, child: [] }] })(r);
}
function us(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(r);
}
function su(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(r);
}
function ds(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(r);
}
function ps(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(r);
}
function fs(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(r);
}
function ta(r) {
  return Pe({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(r);
}
function hs(r) {
  return Pe({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(r);
}
const An = F.button`
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
`, cu = F.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  gap: 8px;

  & > button {
    min-width: 80px;
    height: 36px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 16px;
    transition: background 0.2s ease;
  }
`, lu = F.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: none;
  display: inline-block;  
  opacity: 1;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 3px;
  position: relative; /* ✅ 기준점 추가! */

  &:checked {
    background-color: ${({ $checkedColor: r }) => r || "#007bff"};
    border-color: ${({ $checkedColor: r }) => r || "#007bff"};
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 5px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg); // 체크 표시 모양
  }  
`, en = F.input`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 8px;
  height : 30px;
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
`, uu = F.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  gap: 6px;
`, ms = F.div`
  position: fixed;
  z-index: 9999;
  width: 192px;
  border: 1px solid ${(r) => r.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(r) => r.theme.colors.prime};
  color: ${(r) => r.theme.colors.font};
  transform: translate(0, 5px);
`, gs = F.label`
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(r) => r.theme.colors.backgroundLight || "#f3f4f6"};
  border-bottom: 1px solid ${(r) => r.theme.colors.second || "#d1d5db"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: ${(r) => r.theme.colors.text || "#374151"};
`, vs = F.ul`
  font-size: 14px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
`, ys = F.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${(r) => r.disabled ? "not-allowed" : "pointer"};
  opacity: ${(r) => r.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${(r) => r.disabled ? "inherit" : r.theme.colors.primeHover};
  }
`, ws = F.hr`
  border-top: 1px solid ${(r) => r.theme.colors.second};
  margin: 4px 0;
`, bs = F.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`, du = F.div`  
  width: 100%;  
  height: 100%; 
  display: flex;
  flex-direction: column;  
  background-color: ${(r) => r.theme.colors.background}; 
  color: ${(r) => r.theme.colors.font};
  overflow: hidden; 
`, pu = F.div`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  width: 100%;  
  overflow-x: auto;
  overflow-y: auto;    
`, fu = F.table`    
  width: 100%;
  height: 100%;
  table-layout: fixed; /* ✅ 테이블이 부모 크기에 맞춰짐 */
  border-collapse: collapse;
  background-color: ${(r) => r.theme.colors.background};
  color: ${(r) => r.theme.colors.font};   
  table-layout: auto; 
`, Ds = F(An)`
  width: 24px;
  height: 24px;
  background-color: ${(r) => r.theme.colors.fourth}; /* ✅ 기본 배경색 */
  color: ${(r) => r.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(r) => r.theme.colors.active}; /* ✅ hover 스타일 */
  }
`, xs = F(An)`
  width: 24px;
  height: 24px;
  background-color: ${(r) => r.theme.colors.third}; /* ✅ 기본 배경색 */
  color: ${(r) => r.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(r) => r.theme.colors.active}; /* ✅ hover 스타일 */
  }
`, hu = F.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(r) => r.theme.colors.prime};
  color: ${(r) => r.theme.colors.font};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* ✅ 스크롤 시에도 그림자로 구분 */
    
`, mu = F.tr`
  background-color: ${(r) => r.theme.colors.second};
  color: ${(r) => r.theme.colors.font};  
`, Hr = F.th`
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
`, gu = F.tr`
  position: "sticky";
  background-color: ${(r) => r.theme.colors.primeHover};
  border-bottom: 1px solid ${(r) => r.theme.colors.font};
`, vu = F.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${(r) => r.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`, yu = F.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`, wu = F.tbody`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  overflow-y: auto;  
`, bu = F.tr`
  height: 80%;
  border-bottom: 1px solid ${(r) => r.theme.colors.secondHover};  
`, tn = F.td`
  padding: 5px;
  border-bottom: 1px solid ${(r) => r.theme.colors.secondHover};
  font-weight: ${(r) => r.$isEdited ? "bold" : "normal"};
  color: ${(r) => r.$isEdited ? r.theme.colors.third : "inherit"};
  
  white-space: nowrap; /* 줄 바꿈 방지, 내용이 길면 셀 크기 증가 */
  min-width: max-content; /* 내용에 맞게 최소 크기 조정 */
  
`, Du = F.tr`
  background-color: ${(r) => r.theme.colors.secondHover};
  cursor: pointer;
  border-bottom: 2px solid ${(r) => r.theme.colors.second};
`, xu = F.td`
  padding: 5px;
  font-weight: bold;
  border-bottom: 2px solid ${(r) => r.theme.colors.second};
`, ku = F.div`
  display: flex;
  align-items: center;
  padding: 2px;
  gap: 8px;
  white-space: nowrap;
`;
F.div`
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  height: 40px; /* ✅ GridPagination 높이 설정 */    
`;
const _u = F.tr`
  pointer-events: none;
  background-color: ${(r) => r.theme.colors.background};
`, Su = F.td`
  padding: 0;
  border: none;
  height: 100%;
`, ra = (r) => r.__group === !0, ka = (r) => r.map((n, t) => ({
  ...n,
  rowKey: n.rowKey ?? ks(t)
})), ks = (r) => `row-${Date.now()}-${Math.random()}-${r}`, _s = (r, n, t) => t ? [...r].sort((e, a) => {
  const o = e[n], i = a[n];
  if (o == null || i == null) return 0;
  if (typeof o == "number" && typeof i == "number")
    return t === "asc" ? o - i : i - o;
  const s = String(o).toLowerCase(), c = String(i).toLowerCase();
  return t === "asc" ? s.localeCompare(c) : c.localeCompare(s);
}) : [...r], Cu = (r, n, t) => [...r].sort((e, a) => {
  let o = 0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i], c = t, l = e[s] ?? "", u = a[s] ?? "";
    if (typeof l == "number" && typeof u == "number" ? o = l - u : o = String(l).localeCompare(String(u)), c === "desc" && (o = -o), o !== 0) return o;
  }
  return o;
}), mn = (r, n, t = /* @__PURE__ */ new Set(), e = 0) => {
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
    s.__children = mn(s.__children, n, t, e + 1), o.push(s), t.has(s.__groupKey) && !o.includes(s) && o.push(...s.__children);
  }), o;
}, Eu = (r, n) => r.filter(
  (t) => Object.entries(n).every(([e, a]) => a ? String(t[e]).toLowerCase().includes(a.toLowerCase()) : !0)
), gn = (r, n, t, e) => {
  const a = (n - 1) * t, o = a + t;
  let i = [...r];
  return (e == null ? void 0 : e.group) !== void 0 && (i = Cu(
    i,
    e == null ? void 0 : e.group.column,
    (e == null ? void 0 : e.sortDirection) === void 0 ? "asc" : e == null ? void 0 : e.sortDirection
  )), i.slice(a, o);
}, tt = (r) => {
  let n = [...r.originalData];
  return Object.keys(r.filters).length > 0 && (n = Eu(n, r.filters)), r.sortedColumn && r.sortDirection && (n = _s(n, r.sortedColumn, r.sortDirection)), r.pagingable && (n = gn(
    n,
    r.pagenate.currentPage,
    r.pagenate.pageSize,
    r
  )), r.group.column.length > 0 && (n = mn(n, r.group.column, r.group.expanded)), {
    ...r,
    data: n
  };
}, Mu = (r) => {
  if (r.length === 0) {
    console.warn("데이터가 없습니다.");
    return;
  }
  const n = ["rowKey"], t = r.map((o) => {
    const i = { ...o };
    return n.forEach((s) => delete i[s]), i;
  }), e = Lr.utils.json_to_sheet(t), a = Lr.utils.book_new();
  Lr.utils.book_append_sheet(a, e, "Sheet1"), Lr.writeFile(a, "export.xlsx");
}, Pu = (r) => {
  if (r.length === 0) {
    console.warn("데이터가 없습니다.");
    return;
  }
  const n = ["rowKey"], t = new jc(), e = Object.keys(r[0]).filter((o) => !n.includes(o)), a = r.map((o) => e.map((i) => o[i]));
  Wc(t, {
    head: [e.map(String)],
    // 컬럼명
    body: a
    // 데이터
  }), t.save("export.pdf");
}, Tu = ({
  menuPosition: r,
  options: n,
  onClose: t,
  reducer: e,
  style: a
}) => {
  var f, m, g, y, b, D, x;
  const o = Be(null), { filters: i, sortedColumn: s, sortDirection: c, group: l, activeExportSurport: u } = e == null ? void 0 : e.state;
  if (Me(() => {
    const S = (M) => {
      o.current && !o.current.contains(M.target) && t();
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [t]), !r || !n) return null;
  const d = [
    /** Export Support */
    u && {
      label: "Excel Export",
      icon: /* @__PURE__ */ v.jsx(ou, { style: { color: "green", fontSize: "14px" } }),
      onClick: () => Mu(e == null ? void 0 : e.state.originalData)
    },
    u && {
      label: "PDF Export",
      icon: /* @__PURE__ */ v.jsx(iu, { style: { color: "red", fontSize: "14px" } }),
      onClick: () => Pu(e == null ? void 0 : e.state.originalData)
    },
    u && { divider: !0 },
    /** Sort Part */
    n.sortable && r.column.sortable && {
      label: ((f = n.contextMenuLabels) == null ? void 0 : f.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ v.jsx(fs, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort(r.column.key, "asc"),
      disabled: s === r.column.key && c === "asc"
    },
    n.sortable && r.column.sortable && {
      label: ((m = n.contextMenuLabels) == null ? void 0 : m.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ v.jsx(ps, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort(r.column.key, "desc"),
      disabled: s === r.column.key && c === "desc"
    },
    n.sortable && r.column.sortable && {
      label: ((g = n.contextMenuLabels) == null ? void 0 : g.clearSort) || "정렬 해제",
      icon: /* @__PURE__ */ v.jsx(ta, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort("", null),
      disabled: s !== r.column.key
    },
    n.sortable && r.column.sortable && n.grouping && { divider: !0 },
    /** Group Part */
    n.grouping && {
      label: ((y = n.contextMenuLabels) == null ? void 0 : y.group) || "그룹화",
      icon: /* @__PURE__ */ v.jsx(ds, { style: { color: "#16A34A", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setGroup(r.column.key),
      disabled: Array.isArray(l == null ? void 0 : l.column) && l.column.includes(r.column.key)
    },
    n.grouping && {
      label: ((b = n.contextMenuLabels) == null ? void 0 : b.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ v.jsx(ta, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.removeGroup(r.column.key),
      disabled: Array.isArray(l == null ? void 0 : l.column) && !l.column.includes(r.column.key)
    },
    (n.grouping || n.sortable) && n.filterable && r.column.filterable && { divider: !0 },
    /** Filter Part */
    n.filterable && r.column.filterable && {
      label: ((D = n.contextMenuLabels) == null ? void 0 : D.filter) || "필터",
      icon: /* @__PURE__ */ v.jsx(us, { style: { color: "#D97706", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setFilter({ [r.column.key]: "" }),
      disabled: Array.isArray(i == null ? void 0 : i.column) && i.column.includes(r.column.key)
    },
    n.filterable && r.column.filterable && {
      label: ((x = n.contextMenuLabels) == null ? void 0 : x.clearFilter) || "필터 해제",
      icon: /* @__PURE__ */ v.jsx(ta, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.clearFilter(r.column.key),
      disabled: Array.isArray(i == null ? void 0 : i.column) && !i.column.includes(r.column.key)
    }
  ].filter(Boolean), p = /* @__PURE__ */ v.jsxs(ms, { ref: o, style: { ...a, top: `${r.y}px`, left: `${r.x}px` }, children: [
    /* @__PURE__ */ v.jsx(gs, { children: r.column.label }),
    /* @__PURE__ */ v.jsx(vs, { children: d.map(
      (S, M) => S.divider ? /* @__PURE__ */ v.jsx(ws, {}, `divider-${M}`) : /* @__PURE__ */ v.jsxs(
        ys,
        {
          disabled: S.disabled,
          onClick: () => {
            !S.disabled && S.onClick && S.onClick(), t();
          },
          children: [
            S.icon && /* @__PURE__ */ v.jsx(bs, { children: S.icon }),
            /* @__PURE__ */ v.jsx("span", { children: S.label })
          ]
        },
        M
      )
    ) })
  ] });
  return Ri.createPortal(p, document.body);
}, Ou = ({
  columns: r,
  showRowNumCol: n,
  showRowCheckboxCol: t,
  options: e,
  reducer: a,
  editedRows: o,
  style: i
}) => {
  const [s, c] = xe(null), { filters: l, sortedColumn: u, sortDirection: d, group: p } = a.state, f = (g, y) => {
    g.preventDefault(), e && c({ x: g.clientX, y: g.clientY, column: y });
  }, m = () => c(null);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(hu, { style: i, children: [
      /* @__PURE__ */ v.jsxs(mu, { children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ v.jsx(Hr, { width: 40, children: /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ v.jsx(Ds, { onClick: a.applyAllChanges, children: /* @__PURE__ */ v.jsx(ja, {}) }),
          /* @__PURE__ */ v.jsx(xs, { onClick: a.resetAllChanges, children: /* @__PURE__ */ v.jsx(hs, {}) })
        ] }) }),
        n && /* @__PURE__ */ v.jsx(Hr, { width: 40, children: "No." }),
        t && /* @__PURE__ */ v.jsx(Hr, { width: 40, children: "✔" }),
        r.map((g) => {
          var y;
          return /* @__PURE__ */ v.jsx(Hr, { width: g.width, sticky: g.sticky, onContextMenu: (b) => f(b, g), children: /* @__PURE__ */ v.jsxs(yu, { children: [
            /* @__PURE__ */ v.jsx("span", { children: g.label }),
            g.sortable && u === g.key && d !== null && (d === "asc" ? /* @__PURE__ */ v.jsx(fs, { style: { color: "#2563EB", fontSize: "10px" } }) : /* @__PURE__ */ v.jsx(ps, { style: { color: "#2563EB", fontSize: "10px" } })),
            ((y = p.column) == null ? void 0 : y.includes(g.key)) && /* @__PURE__ */ v.jsx(ds, { style: { color: "#16A34A", fontSize: "10px" } }),
            (e == null ? void 0 : e.filterable) && l[g.key] !== void 0 && /* @__PURE__ */ v.jsx(us, { style: { color: "#D97706", fontSize: "10px" } })
          ] }) }, g.key);
        })
      ] }),
      r.some((g) => (e == null ? void 0 : e.filterable) && l[g.key] !== void 0) && /* @__PURE__ */ v.jsxs(gu, { children: [
        n && /* @__PURE__ */ v.jsx("td", { style: { padding: "8px" }, children: " " }),
        t && /* @__PURE__ */ v.jsx("td", { style: { padding: "8px" }, children: " " }),
        r.map((g) => /* @__PURE__ */ v.jsx("td", { style: { padding: "8px" }, children: g.filterable && l[g.key] !== void 0 && /* @__PURE__ */ v.jsx(
          vu,
          {
            type: "text",
            value: l[g.key] || "",
            onChange: (y) => a.setFilter({ ...l, [g.key]: y.target.value }),
            placeholder: "필터 입력..."
          }
        ) }, g.key))
      ] })
    ] }),
    e && /* @__PURE__ */ v.jsx(
      Tu,
      {
        menuPosition: s,
        options: e,
        onClose: m,
        reducer: a
      }
    )
  ] });
};
function Ru(r) {
  return Pe({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" }, child: [] }] })(r);
}
const Nu = ({
  menuPosition: r,
  onClose: n,
  reducer: t,
  style: e
}) => {
  const a = Be(null);
  if (Me(() => {
    const i = (s) => {
      a.current && !a.current.contains(s.target) && n();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [n]), !r) return null;
  const o = [
    /** Row Add/Delete Support */
    {
      label: "Add Row",
      icon: /* @__PURE__ */ v.jsx(Ru, { style: { color: "green", fontSize: "14px" } }),
      onClick: () => t.addRow()
    }
  ].filter(Boolean);
  return Na(
    /* @__PURE__ */ v.jsxs(
      ms,
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
          /* @__PURE__ */ v.jsx(gs, { children: "" }),
          /* @__PURE__ */ v.jsx(vs, { children: o.map(
            (i, s) => i.divider ? /* @__PURE__ */ v.jsx(ws, {}, `divider-${s}`) : /* @__PURE__ */ v.jsxs(
              ys,
              {
                disabled: i.disabled,
                onClick: () => {
                  !i.disabled && i.onClick && i.onClick(), n();
                },
                children: [
                  i.icon && /* @__PURE__ */ v.jsx(bs, { children: i.icon }),
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
}, _t = ql`
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
`, xr = w.forwardRef(
  ({ apply: r, children: n, ...t }, e) => /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsx(
      An,
      {
        ...t,
        ref: e,
        style: {
          ...t.style
        },
        children: n
      }
    )
  ] })
), Ss = Mr(({
  id: r,
  apply: n,
  label: t,
  labelPosition: e = "right",
  labelColor: a = "#333",
  labelSize: o = "14px",
  labelGap: i = 6,
  labelLetterSpacing: s = 1,
  children: c,
  onChange: l,
  checkedColor: u,
  checked: d,
  ...p
}, f) => {
  const [m, g] = xe(!!d);
  Me(() => {
    g(!!d);
  }, [d]);
  const y = (D) => {
    const x = !m;
    if (g(x), l) {
      const S = Object.assign({}, D, {
        target: { ...D.target, checked: x, rowKey: r }
      });
      l(S);
    }
  }, b = e === "bottom";
  return /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: b ? "column" : "row",
          alignItems: "center",
          gap: t ? `${i}px` : void 0
        },
        children: [
          /* @__PURE__ */ v.jsx(
            lu,
            {
              ...p,
              ref: f,
              $checkedColor: u,
              type: "checkbox",
              checked: m,
              onChange: y
            }
          ),
          t && /* @__PURE__ */ v.jsx(
            "span",
            {
              style: {
                color: a,
                fontSize: o,
                lineHeight: 1.3,
                letterSpacing: s
              },
              children: t
            }
          )
        ]
      }
    )
  ] });
}), Iu = (r, n) => ({
  isOpen: !1,
  options: r,
  selectedItem: r.find((t) => t.key === n)
});
function Lu(r, n) {
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
function Au(r, n) {
  const [t, e] = Oa(Lu, Iu(r, n));
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
const Yu = F.div`
  position: relative;  
`, Fu = F.button`
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
`, ju = F.div`
  position: absolute;
  left: 0;
  margin-top: 4px;  
  width: 144px;
  border: 1px solid ${({ theme: r }) => r.colors.second};
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${({ theme: r }) => r.colors.prime};
  color: ${({ theme: r }) => r.colors.font};  
`, Wu = F.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: r }) => r.colors.primeHover};
  }
`;
F.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid gray;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background: ${({ color: r, theme: n }) => r || n.colors.background};
`;
const Fo = (r, n) => {
  let t = [];
  return n === !0 ? t = [{ key: "all", value: "ALL" }, ...r] : t = r, t;
}, jo = (r, n) => n === void 0 ? r : n(r), Wa = Mr(
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
    const l = Au(
      Fo(n, t),
      s
    ), u = Be(null), d = Be(null), [p, f] = xe({
      top: 0,
      left: 0,
      width: 0
    });
    return Me(() => {
      const g = Fo(n, t);
      l.setOptions(g);
    }, [n, t]), Me(() => {
      if (e !== void 0) {
        const g = l.state.options.find((y) => y.key === e);
        l.selectItem(g ?? void 0);
      }
    }, [e, l.state.options]), Me(() => {
      const g = (y) => {
        u.current && !u.current.contains(y.target) && d.current && !d.current.contains(y.target) && l.setIsOpen(!1);
      };
      return l.state.isOpen && (window.addEventListener("click", g), setTimeout(() => {
        if (d.current) {
          const y = d.current.getBoundingClientRect();
          f({
            top: y.bottom + window.scrollY,
            left: y.left + window.scrollX,
            width: y.width
          });
        }
      }, 0)), () => {
        window.removeEventListener("click", g);
      };
    }, [l.state.isOpen]), Ti(c, () => u.current, []), /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
      /* @__PURE__ */ v.jsx(_t, {}),
      /* @__PURE__ */ v.jsxs(Yu, { children: [
        /* @__PURE__ */ v.jsxs(
          Fu,
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
                  children: jo(
                    ((m = l.state.selectedItem) == null ? void 0 : m.value) ?? "",
                    o
                  )
                }
              ),
              /* @__PURE__ */ v.jsx(cs, { style: { width: 12, height: 12, flexShrink: 0 } })
            ]
          }
        ),
        l.state.isOpen && Na(
          /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
            ju,
            {
              ref: u,
              style: {
                position: "absolute",
                top: `${p.top}px`,
                left: `${p.left}px`,
                width: `${p.width}px`,
                zIndex: 9999
              },
              children: l.state.options.map((g) => /* @__PURE__ */ v.jsx(
                Wu,
                {
                  onClick: () => {
                    l.selectItem(g), a == null || a(g), l.setIsOpen(!1);
                  },
                  children: jo(
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
Wa.displayName = "DropDownBox";
function Cs(r) {
  var n, t, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (n = 0; n < a; n++) r[n] && (t = Cs(r[n])) && (e && (e += " "), e += t);
  } else for (t in r) r[t] && (e && (e += " "), e += t);
  return e;
}
function De() {
  for (var r, n, t = 0, e = "", a = arguments.length; t < a; t++) (r = arguments[t]) && (n = Cs(r)) && (e && (e += " "), e += n);
  return e;
}
const Es = 6048e5, Hu = 864e5, Yn = 6e4, Fn = 36e5, $u = 1e3, Wo = Symbol.for("constructDateFrom");
function ae(r, n) {
  return typeof r == "function" ? r(n) : r && typeof r == "object" && Wo in r ? r[Wo](n) : r instanceof Date ? new r.constructor(n) : new Date(n);
}
function A(r, n) {
  return ae(n || r, r);
}
function $e(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
  return isNaN(n) ? ae((t == null ? void 0 : t.in) || r, NaN) : (n && e.setDate(e.getDate() + n), e);
}
function ze(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
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
function Ms(r, n, t) {
  return ae(r, +A(r) + n);
}
function Bu(r, n, t) {
  return Ms(r, n * Fn);
}
let zu = {};
function Wt() {
  return zu;
}
function lt(r, n) {
  var s, c, l, u;
  const t = Wt(), e = (n == null ? void 0 : n.weekStartsOn) ?? ((c = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = A(r, n == null ? void 0 : n.in), o = a.getDay(), i = (o < e ? 7 : 0) + o - e;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function tr(r, n) {
  return lt(r, { ...n, weekStartsOn: 1 });
}
function Ps(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = ae(t, 0);
  a.setFullYear(e + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = tr(a), i = ae(t, 0);
  i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0);
  const s = tr(i);
  return t.getTime() >= o.getTime() ? e + 1 : t.getTime() >= s.getTime() ? e : e - 1;
}
function vn(r) {
  const n = A(r), t = new Date(
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
  const t = A(r, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function rr(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = Yt(e), i = Yt(a), s = +o - vn(o), c = +i - vn(i);
  return Math.round((s - c) / Hu);
}
function Vu(r, n) {
  const t = Ps(r, n), e = ae(r, 0);
  return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), tr(e);
}
function _a(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
  return e.setTime(e.getTime() + n * Yn), e;
}
function Ha(r, n, t) {
  return ze(r, n * 3, t);
}
function Ku(r, n, t) {
  return Ms(r, n * 1e3);
}
function yn(r, n, t) {
  return $e(r, n * 7, t);
}
function at(r, n, t) {
  return ze(r, n * 12, t);
}
function Ho(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = ae.bind(null, a));
    const o = A(a, e);
    (!t || t < o || isNaN(+o)) && (t = o);
  }), ae(e, t || NaN);
}
function $o(r, n) {
  let t, e = n == null ? void 0 : n.in;
  return r.forEach((a) => {
    !e && typeof a == "object" && (e = ae.bind(null, a));
    const o = A(a, e);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), ae(e, t || NaN);
}
function Gu(r, n, t) {
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
function wn(r) {
  return !(!ot(r) && typeof r != "number" || isNaN(+A(r)));
}
function bn(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), i = e.getMonth() - a.getMonth();
  return o * 12 + i;
}
function Ot(r, n) {
  const t = A(r, n == null ? void 0 : n.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Dn(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = e.getFullYear() - a.getFullYear(), i = Ot(e) - Ot(a);
  return o * 4 + i;
}
function xn(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() - a.getFullYear();
}
function Qu(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  ), o = Bo(e, a), i = Math.abs(
    rr(e, a)
  );
  e.setDate(e.getDate() - o * i);
  const s = +(Bo(e, a) === -o), c = o * (i - s);
  return c === 0 ? 0 : c;
}
function Bo(r, n) {
  const t = r.getFullYear() - n.getFullYear() || r.getMonth() - n.getMonth() || r.getDate() - n.getDate() || r.getHours() - n.getHours() || r.getMinutes() - n.getMinutes() || r.getSeconds() - n.getSeconds() || r.getMilliseconds() - n.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Ts(r, n) {
  const t = A(r, n == null ? void 0 : n.in);
  return t.setHours(23, 59, 59, 999), t;
}
function Os(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Sa(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = t.getMonth(), a = e - e % 3;
  return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t;
}
function Rs(r, n) {
  const t = A(r, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ns(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function jn(r, n) {
  const t = A(r, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function qu(r, n) {
  var s, c;
  const t = Wt(), e = t.weekStartsOn ?? ((c = (s = t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? 0, a = A(r, n == null ? void 0 : n.in), o = a.getDay(), i = (o < e ? -7 : 0) + 6 - (o - e);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
const Uu = {
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
}, Xu = (r, n, t) => {
  let e;
  const a = Uu[r];
  return typeof a == "string" ? e = a : n === 1 ? e = a.one : e = a.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function na(r) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : r.defaultWidth;
    return r.formats[t] || r.formats[r.defaultWidth];
  };
}
const Zu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ju = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ed = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, td = {
  date: na({
    formats: Zu,
    defaultWidth: "full"
  }),
  time: na({
    formats: Ju,
    defaultWidth: "full"
  }),
  dateTime: na({
    formats: ed,
    defaultWidth: "full"
  })
}, rd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nd = (r, n, t, e) => rd[r];
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
const ad = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, od = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, id = {
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
}, sd = {
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
}, cd = {
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
}, ld = {
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
}, ud = (r, n) => {
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
}, dd = {
  ordinalNumber: ud,
  era: hr({
    values: ad,
    defaultWidth: "wide"
  }),
  quarter: hr({
    values: od,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: hr({
    values: id,
    defaultWidth: "wide"
  }),
  day: hr({
    values: sd,
    defaultWidth: "wide"
  }),
  dayPeriod: hr({
    values: cd,
    defaultWidth: "wide",
    formattingValues: ld,
    defaultFormattingWidth: "wide"
  })
};
function mr(r) {
  return (n, t = {}) => {
    const e = t.width, a = e && r.matchPatterns[e] || r.matchPatterns[r.defaultMatchWidth], o = n.match(a);
    if (!o)
      return null;
    const i = o[0], s = e && r.parsePatterns[e] || r.parsePatterns[r.defaultParseWidth], c = Array.isArray(s) ? fd(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      pd(s, (d) => d.test(i))
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
function pd(r, n) {
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && n(r[t]))
      return t;
}
function fd(r, n) {
  for (let t = 0; t < r.length; t++)
    if (n(r[t]))
      return t;
}
function hd(r) {
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
const md = /^(\d+)(th|st|nd|rd)?/i, gd = /\d+/i, vd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, yd = {
  any: [/^b/i, /^(a|c)/i]
}, wd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, bd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Dd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xd = {
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
}, kd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _d = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Sd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Cd = {
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
}, Ed = {
  ordinalNumber: hd({
    matchPattern: md,
    parsePattern: gd,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: mr({
    matchPatterns: vd,
    defaultMatchWidth: "wide",
    parsePatterns: yd,
    defaultParseWidth: "any"
  }),
  quarter: mr({
    matchPatterns: wd,
    defaultMatchWidth: "wide",
    parsePatterns: bd,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: mr({
    matchPatterns: Dd,
    defaultMatchWidth: "wide",
    parsePatterns: xd,
    defaultParseWidth: "any"
  }),
  day: mr({
    matchPatterns: kd,
    defaultMatchWidth: "wide",
    parsePatterns: _d,
    defaultParseWidth: "any"
  }),
  dayPeriod: mr({
    matchPatterns: Sd,
    defaultMatchWidth: "any",
    parsePatterns: Cd,
    defaultParseWidth: "any"
  })
}, Is = {
  code: "en-US",
  formatDistance: Xu,
  formatLong: td,
  formatRelative: nd,
  localize: dd,
  match: Ed,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Md(r, n) {
  const t = A(r, n == null ? void 0 : n.in);
  return rr(t, jn(t)) + 1;
}
function $a(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = +tr(t) - +Vu(t);
  return Math.round(e / Es) + 1;
}
function Ba(r, n) {
  var u, d, p, f;
  const t = A(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = Wt(), o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((f = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = ae((n == null ? void 0 : n.in) || r, 0);
  i.setFullYear(e + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = lt(i, n), c = ae((n == null ? void 0 : n.in) || r, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = lt(c, n);
  return +t >= +s ? e + 1 : +t >= +l ? e : e - 1;
}
function Pd(r, n) {
  var s, c, l, u;
  const t = Wt(), e = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Ba(r, n), o = ae((n == null ? void 0 : n.in) || r, 0);
  return o.setFullYear(a, 0, e), o.setHours(0, 0, 0, 0), lt(o, n);
}
function Ls(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = +lt(t, n) - +Pd(t, n);
  return Math.round(e / Es) + 1;
}
function ne(r, n) {
  const t = r < 0 ? "-" : "", e = Math.abs(r).toString().padStart(n, "0");
  return t + e;
}
const ft = {
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
}, zo = {
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
    return ft.y(r, n);
  },
  // Local week-numbering year
  Y: function(r, n, t, e) {
    const a = Ba(r, e), o = a > 0 ? a : 1 - a;
    if (n === "YY") {
      const i = o % 100;
      return ne(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : ne(o, n.length);
  },
  // ISO week-numbering year
  R: function(r, n) {
    const t = Ps(r);
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
        return ft.M(r, n);
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
    const a = Ls(r, e);
    return n === "wo" ? t.ordinalNumber(a, { unit: "week" }) : ne(a, n.length);
  },
  // ISO week of year
  I: function(r, n, t) {
    const e = $a(r);
    return n === "Io" ? t.ordinalNumber(e, { unit: "week" }) : ne(e, n.length);
  },
  // Day of the month
  d: function(r, n, t) {
    return n === "do" ? t.ordinalNumber(r.getDate(), { unit: "date" }) : ft.d(r, n);
  },
  // Day of year
  D: function(r, n, t) {
    const e = Md(r);
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
    return ft.h(r, n);
  },
  // Hour [0-23]
  H: function(r, n, t) {
    return n === "Ho" ? t.ordinalNumber(r.getHours(), { unit: "hour" }) : ft.H(r, n);
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
    return n === "mo" ? t.ordinalNumber(r.getMinutes(), { unit: "minute" }) : ft.m(r, n);
  },
  // Second
  s: function(r, n, t) {
    return n === "so" ? t.ordinalNumber(r.getSeconds(), { unit: "second" }) : ft.s(r, n);
  },
  // Fraction of second
  S: function(r, n) {
    return ft.S(r, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, n, t) {
    const e = r.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return Ko(e);
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
        return Ko(e);
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
        return "GMT" + Vo(e, ":");
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
        return "GMT" + Vo(e, ":");
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
function Vo(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(a) : t + String(a) + n + ne(o, 2);
}
function Ko(r, n) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + ne(Math.abs(r) / 60, 2) : Ct(r, n);
}
function Ct(r, n = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), a = ne(Math.trunc(e / 60), 2), o = ne(e % 60, 2);
  return t + a + n + o;
}
const Go = (r, n) => {
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
}, As = (r, n) => {
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
}, Td = (r, n) => {
  const t = r.match(/(P+)(p+)?/) || [], e = t[1], a = t[2];
  if (!a)
    return Go(r, n);
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
  return o.replace("{{date}}", Go(e, n)).replace("{{time}}", As(a, n));
}, Ca = {
  p: As,
  P: Td
}, Od = /^D+$/, Rd = /^Y+$/, Nd = ["D", "DD", "YY", "YYYY"];
function Id(r) {
  return Od.test(r);
}
function Ld(r) {
  return Rd.test(r);
}
function Ad(r, n, t) {
  const e = Yd(r, n, t);
  if (console.warn(e), Nd.includes(r)) throw new RangeError(e);
}
function Yd(r, n, t) {
  const e = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${n}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Fd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, jd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Wd = /^'([^]*?)'?$/, Hd = /''/g, $d = /[a-zA-Z]/;
function Qo(r, n, t) {
  var u, d, p, f, m, g, y, b;
  const e = Wt(), a = (t == null ? void 0 : t.locale) ?? e.locale ?? Is, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((f = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((g = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : g.weekStartsOn) ?? e.weekStartsOn ?? ((b = (y = e.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = A(r, t == null ? void 0 : t.in);
  if (!wn(s))
    throw new RangeError("Invalid time value");
  let c = n.match(jd).map((D) => {
    const x = D[0];
    if (x === "p" || x === "P") {
      const S = Ca[x];
      return S(D, a.formatLong);
    }
    return D;
  }).join("").match(Fd).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const x = D[0];
    if (x === "'")
      return { isToken: !1, value: Bd(D) };
    if (zo[x])
      return { isToken: !0, value: D };
    if (x.match($d))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: D };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return c.map((D) => {
    if (!D.isToken) return D.value;
    const x = D.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Ld(x) || !(t != null && t.useAdditionalDayOfYearTokens) && Id(x)) && Ad(x, n, String(r));
    const S = zo[x[0]];
    return S(s, x, a.localize, l);
  }).join("");
}
function Bd(r) {
  const n = r.match(Wd);
  return n ? n[1].replace(Hd, "'") : r;
}
function qo(r, n) {
  return A(r, n == null ? void 0 : n.in).getDate();
}
function zd(r, n) {
  return A(r, n == null ? void 0 : n.in).getDay();
}
function Vd(r, n) {
  const t = A(r, n == null ? void 0 : n.in), e = t.getFullYear(), a = t.getMonth(), o = ae(t, 0);
  return o.setFullYear(e, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Kd() {
  return Object.assign({}, Wt());
}
function it(r, n) {
  return A(r, n == null ? void 0 : n.in).getHours();
}
function Gd(r, n) {
  const t = A(r, n == null ? void 0 : n.in).getDay();
  return t === 0 ? 7 : t;
}
function st(r, n) {
  return A(r, n == null ? void 0 : n.in).getMinutes();
}
function Ee(r, n) {
  return A(r, n == null ? void 0 : n.in).getMonth();
}
function vt(r) {
  return A(r).getSeconds();
}
function Ea(r) {
  return +A(r);
}
function G(r, n) {
  return A(r, n == null ? void 0 : n.in).getFullYear();
}
function bt(r, n) {
  return +A(r) > +A(n);
}
function Ft(r, n) {
  return +A(r) < +A(n);
}
function Qd(r, n) {
  return +A(r) == +A(n);
}
function qd(r, n) {
  const t = Ud(n) ? new n(0) : ae(n, 0);
  return t.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), t.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), t;
}
function Ud(r) {
  var n;
  return typeof r == "function" && ((n = r.prototype) == null ? void 0 : n.constructor) === r;
}
const Xd = 10;
class Ys {
  constructor() {
    N(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class Zd extends Ys {
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
class Jd extends Ys {
  constructor(t, e) {
    super();
    N(this, "priority", Xd);
    N(this, "subPriority", -1);
    this.context = t || ((a) => ae(e, a));
  }
  set(t, e) {
    return e.timestampIsSet ? t : ae(t, qd(t, this.context));
  }
}
class J {
  run(n, t, e, a) {
    const o = this.parse(n, t, e, a);
    return o ? {
      setter: new Zd(
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
class ep extends J {
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
}, Qe = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function pe(r, n) {
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
function qe(r, n) {
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
    value: e * (a * Fn + o * Yn + i * $u),
    rest: n.slice(t[0].length)
  };
}
function Fs(r) {
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
function kn(r, n) {
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
function za(r) {
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
function js(r, n) {
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
function Ws(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class tp extends J {
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
        return pe(le(4, t), o);
      case "yo":
        return pe(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return pe(le(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a) {
    const o = t.getFullYear();
    if (a.isTwoDigitYear) {
      const s = js(
        a.year,
        o
      );
      return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in e) || e.era === 1 ? a.year : 1 - a.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class rp extends J {
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
        return pe(le(4, t), o);
      case "Yo":
        return pe(
          a.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return pe(le(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, a, o) {
    const i = Ba(t, o);
    if (a.isTwoDigitYear) {
      const c = js(
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
class np extends J {
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
    return kn(e === "R" ? 4 : e.length, t);
  }
  set(t, e, a) {
    const o = ae(t, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), tr(o);
  }
}
class ap extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 130);
    N(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return kn(e === "u" ? 4 : e.length, t);
  }
  set(t, e, a) {
    return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class op extends J {
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
class ip extends J {
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
class sp extends J {
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
        return pe(
          ce(de.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return pe(le(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return pe(
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
class cp extends J {
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
        return pe(
          ce(de.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return pe(le(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return pe(
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
function lp(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in), a = Ls(e, t) - n;
  return e.setDate(e.getDate() - a * 7), A(e, t == null ? void 0 : t.in);
}
class up extends J {
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
    return lt(lp(t, a, o), o);
  }
}
function dp(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in), a = $a(e, t) - n;
  return e.setDate(e.getDate() - a * 7), e;
}
class pp extends J {
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
    return tr(dp(t, a));
  }
}
const fp = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], hp = [
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
class mp extends J {
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
    const a = t.getFullYear(), o = Ws(a), i = t.getMonth();
    return o ? e >= 1 && e <= hp[i] : e >= 1 && e <= fp[i];
  }
  set(t, e, a) {
    return t.setDate(a), t.setHours(0, 0, 0, 0), t;
  }
}
class gp extends J {
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
    return Ws(a) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, a) {
    return t.setMonth(0, a), t.setHours(0, 0, 0, 0), t;
  }
}
function Va(r, n, t) {
  var d, p, f, m;
  const e = Wt(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? e.weekStartsOn ?? ((m = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = A(r, t == null ? void 0 : t.in), i = o.getDay(), c = (n % 7 + 7) % 7, l = 7 - a, u = n < 0 || n > 6 ? n - (i + l) % 7 : (c + l) % 7 - (i + l) % 7;
  return $e(o, u, t);
}
class vp extends J {
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
    return t = Va(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class yp extends J {
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
        return pe(le(e.length, t), i);
      // 3rd
      case "eo":
        return pe(
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
    return t = Va(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
class wp extends J {
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
        return pe(le(e.length, t), i);
      // 3rd
      case "co":
        return pe(
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
    return t = Va(t, a, o), t.setHours(0, 0, 0, 0), t;
  }
}
function bp(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in), a = Gd(e, t), o = n - a;
  return $e(e, o, t);
}
class Dp extends J {
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
        return pe(
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
        return pe(
          a.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return pe(
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
        return pe(
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
    return t = bp(t, a), t.setHours(0, 0, 0, 0), t;
  }
}
class xp extends J {
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
    return t.setHours(za(a), 0, 0, 0), t;
  }
}
class kp extends J {
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
    return t.setHours(za(a), 0, 0, 0), t;
  }
}
class _p extends J {
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
    return t.setHours(za(a), 0, 0, 0), t;
  }
}
class Sp extends J {
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
class Cp extends J {
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
class Ep extends J {
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
class Mp extends J {
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
class Pp extends J {
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
class Tp extends J {
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
class Op extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 30);
    N(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const a = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return pe(le(e.length, t), a);
  }
  set(t, e, a) {
    return t.setMilliseconds(a), t;
  }
}
class Rp extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 10);
    N(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return qe(
          Qe.basicOptionalMinutes,
          t
        );
      case "XX":
        return qe(Qe.basic, t);
      case "XXXX":
        return qe(
          Qe.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return qe(
          Qe.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return qe(Qe.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : ae(
      t,
      t.getTime() - vn(t) - a
    );
  }
}
class Np extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 10);
    N(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return qe(
          Qe.basicOptionalMinutes,
          t
        );
      case "xx":
        return qe(Qe.basic, t);
      case "xxxx":
        return qe(
          Qe.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return qe(
          Qe.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return qe(Qe.extended, t);
    }
  }
  set(t, e, a) {
    return e.timestampIsSet ? t : ae(
      t,
      t.getTime() - vn(t) - a
    );
  }
}
class Ip extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 40);
    N(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Fs(t);
  }
  set(t, e, a) {
    return [ae(t, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Lp extends J {
  constructor() {
    super(...arguments);
    N(this, "priority", 20);
    N(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Fs(t);
  }
  set(t, e, a) {
    return [ae(t, a), { timestampIsSet: !0 }];
  }
}
const Ap = {
  G: new ep(),
  y: new tp(),
  Y: new rp(),
  R: new np(),
  u: new ap(),
  Q: new op(),
  q: new ip(),
  M: new sp(),
  L: new cp(),
  w: new up(),
  I: new pp(),
  d: new mp(),
  D: new gp(),
  E: new vp(),
  e: new yp(),
  c: new wp(),
  i: new Dp(),
  a: new xp(),
  b: new kp(),
  B: new _p(),
  h: new Sp(),
  H: new Cp(),
  K: new Ep(),
  k: new Mp(),
  m: new Pp(),
  s: new Tp(),
  S: new Op(),
  X: new Rp(),
  x: new Np(),
  t: new Ip(),
  T: new Lp()
}, Yp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jp = /^'([^]*?)'?$/, Wp = /''/g, Hp = /\S/, $p = /[a-zA-Z]/;
function Bp(r, n, t, e) {
  var y, b, D, x, S, M, _, k;
  const a = () => ae((e == null ? void 0 : e.in) || t, NaN), o = Kd(), i = (e == null ? void 0 : e.locale) ?? o.locale ?? Is, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((b = (y = e == null ? void 0 : e.locale) == null ? void 0 : y.options) == null ? void 0 : b.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((x = (D = o.locale) == null ? void 0 : D.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, c = (e == null ? void 0 : e.weekStartsOn) ?? ((M = (S = e == null ? void 0 : e.locale) == null ? void 0 : S.options) == null ? void 0 : M.weekStartsOn) ?? o.weekStartsOn ?? ((k = (_ = o.locale) == null ? void 0 : _.options) == null ? void 0 : k.weekStartsOn) ?? 0;
  if (!n)
    return r ? a() : A(t, e == null ? void 0 : e.in);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: c,
    locale: i
  }, u = [new Jd(e == null ? void 0 : e.in, t)], d = n.match(Fp).map((C) => {
    const P = C[0];
    if (P in Ca) {
      const I = Ca[P];
      return I(C, i.formatLong);
    }
    return C;
  }).join("").match(Yp), p = [];
  for (let C of d) {
    const P = C[0], I = Ap[P];
    if (I) {
      const { incompatibleTokens: T } = I;
      if (Array.isArray(T)) {
        const $ = p.find(
          (B) => T.includes(B.token) || B.token === P
        );
        if ($)
          throw new RangeError(
            `The format string mustn't contain \`${$.fullToken}\` and \`${C}\` at the same time`
          );
      } else if (I.incompatibleTokens === "*" && p.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${C}\` and any other token at the same time`
        );
      p.push({ token: P, fullToken: C });
      const L = I.run(
        r,
        C,
        i.match,
        l
      );
      if (!L)
        return a();
      u.push(L.setter), r = L.rest;
    } else {
      if (P.match($p))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (C === "''" ? C = "'" : P === "'" && (C = zp(C)), r.indexOf(C) === 0)
        r = r.slice(C.length);
      else
        return a();
    }
  }
  if (r.length > 0 && Hp.test(r))
    return a();
  const f = u.map((C) => C.priority).sort((C, P) => P - C).filter((C, P, I) => I.indexOf(C) === P).map(
    (C) => u.filter((P) => P.priority === C).sort((P, I) => I.subPriority - P.subPriority)
  ).map((C) => C[0]);
  let m = A(t, e == null ? void 0 : e.in);
  if (isNaN(+m)) return a();
  const g = {};
  for (const C of f) {
    if (!C.validate(m, l))
      return a();
    const P = C.set(m, g, l);
    Array.isArray(P) ? (m = P[0], Object.assign(g, P[1])) : m = P;
  }
  return m;
}
function zp(r) {
  return r.match(jp)[1].replace(Wp, "'");
}
function Vp(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear() && e.getMonth() === a.getMonth();
}
function Kp(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return +Sa(e) == +Sa(a);
}
function Gp(r, n, t) {
  const [e, a] = ut(
    t == null ? void 0 : t.in,
    r,
    n
  );
  return e.getFullYear() === a.getFullYear();
}
function _r(r, n, t) {
  const e = +A(r, t == null ? void 0 : t.in), [a, o] = [
    +A(n.start, t == null ? void 0 : t.in),
    +A(n.end, t == null ? void 0 : t.in)
  ].sort((i, s) => i - s);
  return e >= a && e <= o;
}
function Qp(r, n, t) {
  return $e(r, -1, t);
}
function qp(r, n) {
  const t = () => ae(n == null ? void 0 : n.in, NaN), a = Jp(r);
  let o;
  if (a.date) {
    const l = ef(a.date, 2);
    o = tf(l.restDateString, l.year);
  }
  if (!o || isNaN(+o)) return t();
  const i = +o;
  let s = 0, c;
  if (a.time && (s = rf(a.time), isNaN(s)))
    return t();
  if (a.timezone) {
    if (c = nf(a.timezone), isNaN(c)) return t();
  } else {
    const l = new Date(i + s), u = A(0, n == null ? void 0 : n.in);
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
  return A(i + s + c, n == null ? void 0 : n.in);
}
const $r = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Up = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Xp = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, Zp = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Jp(r) {
  const n = {}, t = r.split($r.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? e = t[0] : (n.date = t[0], e = t[1], $r.timeZoneDelimiter.test(n.date) && (n.date = r.split($r.timeZoneDelimiter)[0], e = r.substr(
    n.date.length,
    r.length
  ))), e) {
    const a = $r.timezone.exec(e);
    a ? (n.time = e.replace(a[1], ""), n.timezone = a[1]) : n.time = e;
  }
  return n;
}
function ef(r, n) {
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
function tf(r, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const t = r.match(Up);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], a = gr(t[1]), o = gr(t[2]) - 1, i = gr(t[3]), s = gr(t[4]), c = gr(t[5]) - 1;
  if (e)
    return lf(n, s, c) ? af(n, s, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !sf(n, o, i) || !cf(n, a) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(n, o, Math.max(a, i)), l);
  }
}
function gr(r) {
  return r ? parseInt(r) : 1;
}
function rf(r) {
  const n = r.match(Xp);
  if (!n) return NaN;
  const t = aa(n[1]), e = aa(n[2]), a = aa(n[3]);
  return uf(t, e, a) ? t * Fn + e * Yn + a * 1e3 : NaN;
}
function aa(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function nf(r) {
  if (r === "Z") return 0;
  const n = r.match(Zp);
  if (!n) return 0;
  const t = n[1] === "+" ? -1 : 1, e = parseInt(n[2]), a = n[3] && parseInt(n[3]) || 0;
  return df(e, a) ? t * (e * Fn + a * Yn) : NaN;
}
function af(r, n, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(r, 0, 4);
  const a = e.getUTCDay() || 7, o = (n - 1) * 7 + t + 1 - a;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const of = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Hs(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function sf(r, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (of[n] || (Hs(r) ? 29 : 28));
}
function cf(r, n) {
  return n >= 1 && n <= (Hs(r) ? 366 : 365);
}
function lf(r, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function uf(r, n, t) {
  return r === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && r >= 0 && r < 25;
}
function df(r, n) {
  return n >= 0 && n <= 59;
}
function Ie(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in), a = e.getFullYear(), o = e.getDate(), i = ae(r, 0);
  i.setFullYear(a, n, 15), i.setHours(0, 0, 0, 0);
  const s = Vd(i);
  return e.setMonth(n, Math.min(o, s)), e;
}
function rn(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
  return e.setHours(n), e;
}
function nn(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
  return e.setMinutes(n), e;
}
function Qt(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in), a = Math.trunc(e.getMonth() / 3) + 1, o = n - a;
  return Ie(e, e.getMonth() + o * 3);
}
function an(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
  return e.setSeconds(n), e;
}
function Ve(r, n, t) {
  const e = A(r, t == null ? void 0 : t.in);
  return isNaN(+e) ? ae(r, NaN) : (e.setFullYear(n), e);
}
function Rt(r, n, t) {
  return ze(r, -n, t);
}
function $s(r, n, t) {
  return Ha(r, -1, t);
}
function Uo(r, n, t) {
  return yn(r, -1, t);
}
function nr(r, n, t) {
  return at(r, -n, t);
}
function Wn() {
  return typeof window < "u";
}
function lr(r) {
  return Bs(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function Oe(r) {
  var n;
  return (r == null || (n = r.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Je(r) {
  var n;
  return (n = (Bs(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : n.documentElement;
}
function Bs(r) {
  return Wn() ? r instanceof Node || r instanceof Oe(r).Node : !1;
}
function ke(r) {
  return Wn() ? r instanceof Element || r instanceof Oe(r).Element : !1;
}
function Ze(r) {
  return Wn() ? r instanceof HTMLElement || r instanceof Oe(r).HTMLElement : !1;
}
function Xo(r) {
  return !Wn() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof Oe(r).ShadowRoot;
}
function Pr(r) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: e,
    display: a
  } = Ye(r);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !["inline", "contents"].includes(a);
}
function pf(r) {
  return ["table", "td", "th"].includes(lr(r));
}
function Hn(r) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return r.matches(n);
    } catch {
      return !1;
    }
  });
}
function Ka(r) {
  const n = Ga(), t = ke(r) ? Ye(r) : r;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((e) => t[e] ? t[e] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e) => (t.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some((e) => (t.contain || "").includes(e));
}
function ff(r) {
  let n = Dt(r);
  for (; Ze(n) && !ar(n); ) {
    if (Ka(n))
      return n;
    if (Hn(n))
      return null;
    n = Dt(n);
  }
  return null;
}
function Ga() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ar(r) {
  return ["html", "body", "#document"].includes(lr(r));
}
function Ye(r) {
  return Oe(r).getComputedStyle(r);
}
function $n(r) {
  return ke(r) ? {
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
    Xo(r) && r.host || // Fallback.
    Je(r)
  );
  return Xo(n) ? n.host : n;
}
function zs(r) {
  const n = Dt(r);
  return ar(n) ? r.ownerDocument ? r.ownerDocument.body : r.body : Ze(n) && Pr(n) ? n : zs(n);
}
function Sr(r, n, t) {
  var e;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const a = zs(r), o = a === ((e = r.ownerDocument) == null ? void 0 : e.body), i = Oe(a);
  if (o) {
    const s = Ma(i);
    return n.concat(i, i.visualViewport || [], Pr(a) ? a : [], s && t ? Sr(s) : []);
  }
  return n.concat(a, Sr(a, [], t));
}
function Ma(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
const or = Math.min, Nt = Math.max, _n = Math.round, Br = Math.floor, Xe = (r) => ({
  x: r,
  y: r
}), hf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mf = {
  start: "end",
  end: "start"
};
function gf(r, n, t) {
  return Nt(r, or(n, t));
}
function Bn(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function ir(r) {
  return r.split("-")[0];
}
function Tr(r) {
  return r.split("-")[1];
}
function vf(r) {
  return r === "x" ? "y" : "x";
}
function Qa(r) {
  return r === "y" ? "height" : "width";
}
function Cr(r) {
  return ["top", "bottom"].includes(ir(r)) ? "y" : "x";
}
function qa(r) {
  return vf(Cr(r));
}
function yf(r, n, t) {
  t === void 0 && (t = !1);
  const e = Tr(r), a = qa(r), o = Qa(a);
  let i = a === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (i = Sn(i)), [i, Sn(i)];
}
function wf(r) {
  const n = Sn(r);
  return [Pa(r), n, Pa(n)];
}
function Pa(r) {
  return r.replace(/start|end/g, (n) => mf[n]);
}
function bf(r, n, t) {
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
function Df(r, n, t, e) {
  const a = Tr(r);
  let o = bf(ir(r), t === "start", e);
  return a && (o = o.map((i) => i + "-" + a), n && (o = o.concat(o.map(Pa)))), o;
}
function Sn(r) {
  return r.replace(/left|right|bottom|top/g, (n) => hf[n]);
}
function xf(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Vs(r) {
  return typeof r != "number" ? xf(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function Cn(r) {
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
function Zo(r, n, t) {
  let {
    reference: e,
    floating: a
  } = r;
  const o = Cr(n), i = qa(n), s = Qa(i), c = ir(n), l = o === "y", u = e.x + e.width / 2 - a.width / 2, d = e.y + e.height / 2 - a.height / 2, p = e[s] / 2 - a[s] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: u,
        y: e.y - a.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: e.y + e.height
      };
      break;
    case "right":
      f = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: e.x - a.width,
        y: d
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  switch (Tr(n)) {
    case "start":
      f[i] -= p * (t && l ? -1 : 1);
      break;
    case "end":
      f[i] += p * (t && l ? -1 : 1);
      break;
  }
  return f;
}
const kf = async (r, n, t) => {
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
  } = Zo(l, e, c), p = e, f = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: y,
      fn: b
    } = s[g], {
      x: D,
      y: x,
      data: S,
      reset: M
    } = await b({
      x: u,
      y: d,
      initialPlacement: e,
      placement: p,
      strategy: a,
      middlewareData: f,
      rects: l,
      platform: i,
      elements: {
        reference: r,
        floating: n
      }
    });
    u = D ?? u, d = x ?? d, f = {
      ...f,
      [y]: {
        ...f[y],
        ...S
      }
    }, M && m <= 50 && (m++, typeof M == "object" && (M.placement && (p = M.placement), M.rects && (l = M.rects === !0 ? await i.getElementRects({
      reference: r,
      floating: n,
      strategy: a
    }) : M.rects), {
      x: u,
      y: d
    } = Zo(l, p, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: a,
    middlewareData: f
  };
};
async function _f(r, n) {
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
    altBoundary: p = !1,
    padding: f = 0
  } = Bn(n, r), m = Vs(f), y = s[p ? d === "floating" ? "reference" : "floating" : d], b = Cn(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), D = d === "floating" ? {
    x: e,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) ? await (o.getScale == null ? void 0 : o.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = Cn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: D,
    offsetParent: x,
    strategy: c
  }) : D);
  return {
    top: (b.top - M.top + m.top) / S.y,
    bottom: (M.bottom - b.bottom + m.bottom) / S.y,
    left: (b.left - M.left + m.left) / S.x,
    right: (M.right - b.right + m.right) / S.x
  };
}
const Sf = (r) => ({
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
    } = Bn(r, n) || {};
    if (l == null)
      return {};
    const d = Vs(u), p = {
      x: t,
      y: e
    }, f = qa(a), m = Qa(f), g = await i.getDimensions(l), y = f === "y", b = y ? "top" : "left", D = y ? "bottom" : "right", x = y ? "clientHeight" : "clientWidth", S = o.reference[m] + o.reference[f] - p[f] - o.floating[m], M = p[f] - o.reference[f], _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let k = _ ? _[x] : 0;
    (!k || !await (i.isElement == null ? void 0 : i.isElement(_))) && (k = s.floating[x] || o.floating[m]);
    const C = S / 2 - M / 2, P = k / 2 - g[m] / 2 - 1, I = or(d[b], P), T = or(d[D], P), L = I, $ = k - g[m] - T, B = k / 2 - g[m] / 2 + C, K = gf(L, B, $), Y = !c.arrow && Tr(a) != null && B !== K && o.reference[m] / 2 - (B < L ? I : T) - g[m] / 2 < 0, j = Y ? B < L ? B - L : B - $ : 0;
    return {
      [f]: p[f] + j,
      data: {
        [f]: K,
        centerOffset: B - K - j,
        ...Y && {
          alignmentOffset: j
        }
      },
      reset: Y
    };
  }
}), Cf = function(r) {
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
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = Bn(r, n);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const b = ir(a), D = Cr(s), x = ir(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), M = p || (x || !g ? [Sn(s)] : wf(s)), _ = m !== "none";
      !p && _ && M.push(...Df(s, g, m, S));
      const k = [s, ...M], C = await _f(n, y), P = [];
      let I = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && P.push(C[b]), d) {
        const B = yf(a, i, S);
        P.push(C[B[0]], C[B[1]]);
      }
      if (I = [...I, {
        placement: a,
        overflows: P
      }], !P.every((B) => B <= 0)) {
        var T, L;
        const B = (((T = o.flip) == null ? void 0 : T.index) || 0) + 1, K = k[B];
        if (K)
          return {
            data: {
              index: B,
              overflows: I
            },
            reset: {
              placement: K
            }
          };
        let Y = (L = I.filter((j) => j.overflows[0] <= 0).sort((j, W) => j.overflows[1] - W.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!Y)
          switch (f) {
            case "bestFit": {
              var $;
              const j = ($ = I.filter((W) => {
                if (_) {
                  const q = Cr(W.placement);
                  return q === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((q) => q > 0).reduce((q, fe) => q + fe, 0)]).sort((W, q) => W[1] - q[1])[0]) == null ? void 0 : $[0];
              j && (Y = j);
              break;
            }
            case "initialPlacement":
              Y = s;
              break;
          }
        if (a !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
async function Ef(r, n) {
  const {
    placement: t,
    platform: e,
    elements: a
  } = r, o = await (e.isRTL == null ? void 0 : e.isRTL(a.floating)), i = ir(t), s = Tr(t), c = Cr(t) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = o && c ? -1 : 1, d = Bn(n, r);
  let {
    mainAxis: p,
    crossAxis: f,
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
  return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), c ? {
    x: f * u,
    y: p * l
  } : {
    x: p * l,
    y: f * u
  };
}
const Mf = function(r) {
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
      } = n, c = await Ef(n, r);
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
function Ks(r) {
  const n = Ye(r);
  let t = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const a = Ze(r), o = a ? r.offsetWidth : t, i = a ? r.offsetHeight : e, s = _n(t) !== o || _n(e) !== i;
  return s && (t = o, e = i), {
    width: t,
    height: e,
    $: s
  };
}
function Ua(r) {
  return ke(r) ? r : r.contextElement;
}
function qt(r) {
  const n = Ua(r);
  if (!Ze(n))
    return Xe(1);
  const t = n.getBoundingClientRect(), {
    width: e,
    height: a,
    $: o
  } = Ks(n);
  let i = (o ? _n(t.width) : t.width) / e, s = (o ? _n(t.height) : t.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Pf = /* @__PURE__ */ Xe(0);
function Gs(r) {
  const n = Oe(r);
  return !Ga() || !n.visualViewport ? Pf : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Tf(r, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Oe(r) ? !1 : n;
}
function jt(r, n, t, e) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const a = r.getBoundingClientRect(), o = Ua(r);
  let i = Xe(1);
  n && (e ? ke(e) && (i = qt(e)) : i = qt(r));
  const s = Tf(o, t, e) ? Gs(o) : Xe(0);
  let c = (a.left + s.x) / i.x, l = (a.top + s.y) / i.y, u = a.width / i.x, d = a.height / i.y;
  if (o) {
    const p = Oe(o), f = e && ke(e) ? Oe(e) : e;
    let m = p, g = Ma(m);
    for (; g && e && f !== m; ) {
      const y = qt(g), b = g.getBoundingClientRect(), D = Ye(g), x = b.left + (g.clientLeft + parseFloat(D.paddingLeft)) * y.x, S = b.top + (g.clientTop + parseFloat(D.paddingTop)) * y.y;
      c *= y.x, l *= y.y, u *= y.x, d *= y.y, c += x, l += S, m = Oe(g), g = Ma(m);
    }
  }
  return Cn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Xa(r, n) {
  const t = $n(r).scrollLeft;
  return n ? n.left + t : jt(Je(r)).left + t;
}
function Qs(r, n, t) {
  t === void 0 && (t = !1);
  const e = r.getBoundingClientRect(), a = e.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Xa(r, e)
  )), o = e.top + n.scrollTop;
  return {
    x: a,
    y: o
  };
}
function Of(r) {
  let {
    elements: n,
    rect: t,
    offsetParent: e,
    strategy: a
  } = r;
  const o = a === "fixed", i = Je(e), s = n ? Hn(n.floating) : !1;
  if (e === i || s && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Xe(1);
  const u = Xe(0), d = Ze(e);
  if ((d || !d && !o) && ((lr(e) !== "body" || Pr(i)) && (c = $n(e)), Ze(e))) {
    const f = jt(e);
    l = qt(e), u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
  }
  const p = i && !d && !o ? Qs(i, c, !0) : Xe(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function Rf(r) {
  return Array.from(r.getClientRects());
}
function Nf(r) {
  const n = Je(r), t = $n(r), e = r.ownerDocument.body, a = Nt(n.scrollWidth, n.clientWidth, e.scrollWidth, e.clientWidth), o = Nt(n.scrollHeight, n.clientHeight, e.scrollHeight, e.clientHeight);
  let i = -t.scrollLeft + Xa(r);
  const s = -t.scrollTop;
  return Ye(e).direction === "rtl" && (i += Nt(n.clientWidth, e.clientWidth) - a), {
    width: a,
    height: o,
    x: i,
    y: s
  };
}
function If(r, n) {
  const t = Oe(r), e = Je(r), a = t.visualViewport;
  let o = e.clientWidth, i = e.clientHeight, s = 0, c = 0;
  if (a) {
    o = a.width, i = a.height;
    const l = Ga();
    (!l || l && n === "fixed") && (s = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function Lf(r, n) {
  const t = jt(r, !0, n === "fixed"), e = t.top + r.clientTop, a = t.left + r.clientLeft, o = Ze(r) ? qt(r) : Xe(1), i = r.clientWidth * o.x, s = r.clientHeight * o.y, c = a * o.x, l = e * o.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Jo(r, n, t) {
  let e;
  if (n === "viewport")
    e = If(r, t);
  else if (n === "document")
    e = Nf(Je(r));
  else if (ke(n))
    e = Lf(n, t);
  else {
    const a = Gs(r);
    e = {
      x: n.x - a.x,
      y: n.y - a.y,
      width: n.width,
      height: n.height
    };
  }
  return Cn(e);
}
function qs(r, n) {
  const t = Dt(r);
  return t === n || !ke(t) || ar(t) ? !1 : Ye(t).position === "fixed" || qs(t, n);
}
function Af(r, n) {
  const t = n.get(r);
  if (t)
    return t;
  let e = Sr(r, [], !1).filter((s) => ke(s) && lr(s) !== "body"), a = null;
  const o = Ye(r).position === "fixed";
  let i = o ? Dt(r) : r;
  for (; ke(i) && !ar(i); ) {
    const s = Ye(i), c = Ka(i);
    !c && s.position === "fixed" && (a = null), (o ? !c && !a : !c && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Pr(i) && !c && qs(r, i)) ? e = e.filter((u) => u !== i) : a = s, i = Dt(i);
  }
  return n.set(r, e), e;
}
function Yf(r) {
  let {
    element: n,
    boundary: t,
    rootBoundary: e,
    strategy: a
  } = r;
  const i = [...t === "clippingAncestors" ? Hn(n) ? [] : Af(n, this._c) : [].concat(t), e], s = i[0], c = i.reduce((l, u) => {
    const d = Jo(n, u, a);
    return l.top = Nt(d.top, l.top), l.right = or(d.right, l.right), l.bottom = or(d.bottom, l.bottom), l.left = Nt(d.left, l.left), l;
  }, Jo(n, s, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ff(r) {
  const {
    width: n,
    height: t
  } = Ks(r);
  return {
    width: n,
    height: t
  };
}
function jf(r, n, t) {
  const e = Ze(n), a = Je(n), o = t === "fixed", i = jt(r, !0, o, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Xe(0);
  if (e || !e && !o)
    if ((lr(n) !== "body" || Pr(a)) && (s = $n(n)), e) {
      const p = jt(n, !0, o, n);
      c.x = p.x + n.clientLeft, c.y = p.y + n.clientTop;
    } else a && (c.x = Xa(a));
  const l = a && !e && !o ? Qs(a, s) : Xe(0), u = i.left + s.scrollLeft - c.x - l.x, d = i.top + s.scrollTop - c.y - l.y;
  return {
    x: u,
    y: d,
    width: i.width,
    height: i.height
  };
}
function oa(r) {
  return Ye(r).position === "static";
}
function ei(r, n) {
  if (!Ze(r) || Ye(r).position === "fixed")
    return null;
  if (n)
    return n(r);
  let t = r.offsetParent;
  return Je(r) === t && (t = t.ownerDocument.body), t;
}
function Us(r, n) {
  const t = Oe(r);
  if (Hn(r))
    return t;
  if (!Ze(r)) {
    let a = Dt(r);
    for (; a && !ar(a); ) {
      if (ke(a) && !oa(a))
        return a;
      a = Dt(a);
    }
    return t;
  }
  let e = ei(r, n);
  for (; e && pf(e) && oa(e); )
    e = ei(e, n);
  return e && ar(e) && oa(e) && !Ka(e) ? t : e || ff(r) || t;
}
const Wf = async function(r) {
  const n = this.getOffsetParent || Us, t = this.getDimensions, e = await t(r.floating);
  return {
    reference: jf(r.reference, await n(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function Hf(r) {
  return Ye(r).direction === "rtl";
}
const $f = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Of,
  getDocumentElement: Je,
  getClippingRect: Yf,
  getOffsetParent: Us,
  getElementRects: Wf,
  getClientRects: Rf,
  getDimensions: Ff,
  getScale: qt,
  isElement: ke,
  isRTL: Hf
};
function Xs(r, n) {
  return r.x === n.x && r.y === n.y && r.width === n.width && r.height === n.height;
}
function Bf(r, n) {
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
      width: p,
      height: f
    } = l;
    if (s || n(), !p || !f)
      return;
    const m = Br(d), g = Br(a.clientWidth - (u + p)), y = Br(a.clientHeight - (d + f)), b = Br(u), x = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: Nt(0, or(1, c)) || 1
    };
    let S = !0;
    function M(_) {
      const k = _[0].intersectionRatio;
      if (k !== c) {
        if (!S)
          return i();
        k ? i(!1, k) : e = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Xs(l, r.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      t = new IntersectionObserver(M, {
        ...x,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(M, x);
    }
    t.observe(r);
  }
  return i(!0), o;
}
function zf(r, n, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = Ua(r), u = a || o ? [...l ? Sr(l) : [], ...Sr(n)] : [];
  u.forEach((b) => {
    a && b.addEventListener("scroll", t, {
      passive: !0
    }), o && b.addEventListener("resize", t);
  });
  const d = l && s ? Bf(l, t) : null;
  let p = -1, f = null;
  i && (f = new ResizeObserver((b) => {
    let [D] = b;
    D && D.target === l && f && (f.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(n);
    })), t();
  }), l && !c && f.observe(l), f.observe(n));
  let m, g = c ? jt(r) : null;
  c && y();
  function y() {
    const b = jt(r);
    g && !Xs(g, b) && t(), g = b, m = requestAnimationFrame(y);
  }
  return t(), () => {
    var b;
    u.forEach((D) => {
      a && D.removeEventListener("scroll", t), o && D.removeEventListener("resize", t);
    }), d == null || d(), (b = f) == null || b.disconnect(), f = null, c && cancelAnimationFrame(m);
  };
}
const Vf = Mf, Kf = Cf, ti = Sf, Gf = (r, n, t) => {
  const e = /* @__PURE__ */ new Map(), a = {
    platform: $f,
    ...t
  }, o = {
    ...a.platform,
    _c: e
  };
  return kf(r, n, {
    ...a,
    platform: o
  });
};
var on = typeof document < "u" ? Ra : Me;
function En(r, n) {
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
        if (!En(r[e], n[e]))
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
      if (!(o === "_owner" && r.$$typeof) && !En(r[o], n[o]))
        return !1;
    }
    return !0;
  }
  return r !== r && n !== n;
}
function Zs(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ri(r, n) {
  const t = Zs(r);
  return Math.round(n * t) / t;
}
function ia(r) {
  const n = z.useRef(r);
  return on(() => {
    n.current = r;
  }), n;
}
function Qf(r) {
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
  } = r, [u, d] = z.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = z.useState(e);
  En(p, e) || f(e);
  const [m, g] = z.useState(null), [y, b] = z.useState(null), D = z.useCallback((W) => {
    W !== _.current && (_.current = W, g(W));
  }, []), x = z.useCallback((W) => {
    W !== k.current && (k.current = W, b(W));
  }, []), S = o || m, M = i || y, _ = z.useRef(null), k = z.useRef(null), C = z.useRef(u), P = c != null, I = ia(c), T = ia(a), L = ia(l), $ = z.useCallback(() => {
    if (!_.current || !k.current)
      return;
    const W = {
      placement: n,
      strategy: t,
      middleware: p
    };
    T.current && (W.platform = T.current), Gf(_.current, k.current, W).then((q) => {
      const fe = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      B.current && !En(C.current, fe) && (C.current = fe, Hc.flushSync(() => {
        d(fe);
      }));
    });
  }, [p, n, t, T, L]);
  on(() => {
    l === !1 && C.current.isPositioned && (C.current.isPositioned = !1, d((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [l]);
  const B = z.useRef(!1);
  on(() => (B.current = !0, () => {
    B.current = !1;
  }), []), on(() => {
    if (S && (_.current = S), M && (k.current = M), S && M) {
      if (I.current)
        return I.current(S, M, $);
      $();
    }
  }, [S, M, $, I, P]);
  const K = z.useMemo(() => ({
    reference: _,
    floating: k,
    setReference: D,
    setFloating: x
  }), [D, x]), Y = z.useMemo(() => ({
    reference: S,
    floating: M
  }), [S, M]), j = z.useMemo(() => {
    const W = {
      position: t,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return W;
    const q = ri(Y.floating, u.x), fe = ri(Y.floating, u.y);
    return s ? {
      ...W,
      transform: "translate(" + q + "px, " + fe + "px)",
      ...Zs(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: q,
      top: fe
    };
  }, [t, s, Y.floating, u.x, u.y]);
  return z.useMemo(() => ({
    ...u,
    update: $,
    refs: K,
    elements: Y,
    floatingStyles: j
  }), [u, $, K, Y, j]);
}
const qf = (r) => {
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
      return e && n(e) ? e.current != null ? ti({
        element: e.current,
        padding: a
      }).fn(t) : {} : e ? ti({
        element: e,
        padding: a
      }).fn(t) : {};
    }
  };
}, Uf = (r, n) => ({
  ...Vf(r),
  options: [r, n]
}), Xf = (r, n) => ({
  ...Kf(r),
  options: [r, n]
}), Zf = (r, n) => ({
  ...qf(r),
  options: [r, n]
}), Js = {
  ...z
}, Jf = Js.useInsertionEffect, eh = Jf || ((r) => r());
function th(r) {
  const n = z.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return eh(() => {
    n.current = r;
  }), z.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
      e[a] = arguments[a];
    return n.current == null ? void 0 : n.current(...e);
  }, []);
}
var Mn = typeof document < "u" ? Ra : Me;
let ni = !1, rh = 0;
const ai = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + rh++
);
function nh() {
  const [r, n] = z.useState(() => ni ? ai() : void 0);
  return Mn(() => {
    r == null && n(ai());
  }, []), z.useEffect(() => {
    ni = !0;
  }, []), r;
}
const ah = Js.useId, ec = ah || nh;
let Er;
process.env.NODE_ENV !== "production" && (Er = /* @__PURE__ */ new Set());
function oh() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = Er) != null && r.has(a))) {
    var o;
    (o = Er) == null || o.add(a), console.warn(a);
  }
}
function ih() {
  for (var r, n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  const a = "Floating UI: " + t.join(" ");
  if (!((r = Er) != null && r.has(a))) {
    var o;
    (o = Er) == null || o.add(a), console.error(a);
  }
}
const sh = /* @__PURE__ */ z.forwardRef(function(n, t) {
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
    stroke: p,
    d: f,
    style: {
      transform: m,
      ...g
    } = {},
    ...y
  } = n;
  process.env.NODE_ENV !== "production" && (t || oh("The `ref` prop is required for `FloatingArrow`."));
  const b = ec(), [D, x] = z.useState(!1);
  if (Mn(() => {
    if (!a) return;
    Ye(a).direction === "rtl" && x(!0);
  }, [a]), !a)
    return null;
  const [S, M] = e.split("-"), _ = S === "top" || S === "bottom";
  let k = d;
  (_ && i != null && i.x || !_ && i != null && i.y) && (k = null);
  const C = u * 2, P = C / 2, I = s / 2 * (l / -8 + 1), T = c / 2 * l / 4, L = !!f, $ = k && M === "end" ? "bottom" : "top";
  let B = k && M === "end" ? "right" : "left";
  k && D && (B = M === "end" ? "left" : "right");
  const K = (o == null ? void 0 : o.x) != null ? k || o.x : "", Y = (o == null ? void 0 : o.y) != null ? k || o.y : "", j = f || "M0,0" + (" H" + s) + (" L" + (s - I) + "," + (c - T)) + (" Q" + s / 2 + "," + c + " " + I + "," + (c - T)) + " Z", W = {
    top: L ? "rotate(180deg)" : "",
    left: L ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: L ? "" : "rotate(180deg)",
    right: L ? "rotate(-90deg)" : "rotate(90deg)"
  }[S];
  return /* @__PURE__ */ v.jsxs("svg", {
    ...y,
    "aria-hidden": !0,
    ref: t,
    width: L ? s : s + C,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [B]: K,
      [$]: Y,
      [S]: _ || L ? "100%" : "calc(100% - " + C / 2 + "px)",
      transform: [W, m].filter((q) => !!q).join(" "),
      ...g
    },
    children: [C > 0 && /* @__PURE__ */ v.jsx("path", {
      clipPath: "url(#" + b + ")",
      fill: "none",
      stroke: p,
      strokeWidth: C + (f ? 0 : 1),
      d: j
    }), /* @__PURE__ */ v.jsx("path", {
      stroke: C && !f ? y.fill : "none",
      d: j
    }), /* @__PURE__ */ v.jsx("clipPath", {
      id: b,
      children: /* @__PURE__ */ v.jsx("rect", {
        x: -P,
        y: P * (L ? -1 : 1),
        width: s + C,
        height: s
      })
    })]
  });
});
function ch() {
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
const lh = /* @__PURE__ */ z.createContext(null), uh = /* @__PURE__ */ z.createContext(null), dh = () => {
  var r;
  return ((r = z.useContext(lh)) == null ? void 0 : r.id) || null;
}, ph = () => z.useContext(uh);
function fh(r) {
  const {
    open: n = !1,
    onOpenChange: t,
    elements: e
  } = r, a = ec(), o = z.useRef({}), [i] = z.useState(() => ch()), s = dh() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = e.reference;
    f && !ke(f) && ih("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = z.useState(e.reference), u = th((f, m, g) => {
    o.current.openEvent = f ? m : void 0, i.emit("openchange", {
      open: f,
      event: m,
      reason: g,
      nested: s
    }), t == null || t(f, m, g);
  }), d = z.useMemo(() => ({
    setPositionReference: l
  }), []), p = z.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return z.useMemo(() => ({
    dataRef: o,
    open: n,
    onOpenChange: u,
    elements: p,
    events: i,
    floatingId: a,
    refs: d
  }), [n, u, p, i, a, d]);
}
function hh(r) {
  r === void 0 && (r = {});
  const {
    nodeId: n
  } = r, t = fh({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), e = r.rootContext || t, a = e.elements, [o, i] = z.useState(null), [s, c] = z.useState(null), u = (a == null ? void 0 : a.domReference) || o, d = z.useRef(null), p = ph();
  Mn(() => {
    u && (d.current = u);
  }, [u]);
  const f = Qf({
    ...r,
    elements: {
      ...a,
      ...s && {
        reference: s
      }
    }
  }), m = z.useCallback((x) => {
    const S = ke(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    c(S), f.refs.setReference(S);
  }, [f.refs]), g = z.useCallback((x) => {
    (ke(x) || x === null) && (d.current = x, i(x)), (ke(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !ke(x)) && f.refs.setReference(x);
  }, [f.refs]), y = z.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: m,
    domReference: d
  }), [f.refs, g, m]), b = z.useMemo(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), D = z.useMemo(() => ({
    ...f,
    ...e,
    refs: y,
    elements: b,
    nodeId: n
  }), [f, y, b, n, e]);
  return Mn(() => {
    e.dataRef.current.floatingContext = D;
    const x = p == null ? void 0 : p.nodesRef.current.find((S) => S.id === n);
    x && (x.context = D);
  }), z.useMemo(() => ({
    ...f,
    context: D,
    refs: y,
    elements: b
  }), [f, y, b, D]);
}
/*!
  react-datepicker v8.2.1
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var Ta = function(n, t) {
  return Ta = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, a) {
    e.__proto__ = a;
  } || function(e, a) {
    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
  }, Ta(n, t);
};
function be(r, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Ta(r, n);
  function t() {
    this.constructor = r;
  }
  r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var Z = function() {
  return Z = Object.assign || function(t) {
    for (var e, a = 1, o = arguments.length; a < o; a++) {
      e = arguments[a];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Z.apply(this, arguments);
};
function Ue(r, n, t) {
  if (t || arguments.length === 2) for (var e = 0, a = n.length, o; e < a; e++)
    (o || !(e in n)) && (o || (o = Array.prototype.slice.call(n, 0, e)), o[e] = n[e]);
  return r.concat(o || Array.prototype.slice.call(n));
}
var mh = function(r) {
  var n = r.showTimeSelectOnly, t = n === void 0 ? !1 : n, e = r.showTime, a = e === void 0 ? !1 : e, o = r.className, i = r.children, s = t ? "Choose Time" : "Choose Date".concat(a ? " and Time" : "");
  return w.createElement("div", { className: o, role: "dialog", "aria-label": s, "aria-modal": "true" }, i);
}, gh = function(r, n) {
  var t = Be(null), e = Be(r);
  e.current = r;
  var a = Fc(function(o) {
    var i, s = o.composed && o.composedPath && o.composedPath().find(function(c) {
      return c instanceof Node;
    }) || o.target;
    t.current && !t.current.contains(s) && (n && s instanceof HTMLElement && s.classList.contains(n) || (i = e.current) === null || i === void 0 || i.call(e, o));
  }, [n]);
  return Me(function() {
    return document.addEventListener("mousedown", a), function() {
      document.removeEventListener("mousedown", a);
    };
  }, [a]), t;
}, zn = function(r) {
  var n = r.children, t = r.onClickOutside, e = r.className, a = r.containerRef, o = r.style, i = r.ignoreClass, s = gh(t, i);
  return w.createElement("div", { className: e, style: o, ref: function(c) {
    s.current = c, a && (a.current = c);
  } }, n);
}, O;
(function(r) {
  r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Home = "Home", r.End = "End", r.Enter = "Enter", r.Space = " ", r.Tab = "Tab", r.Escape = "Escape", r.Backspace = "Backspace", r.X = "x";
})(O || (O = {}));
function tc() {
  var r = typeof window < "u" ? window : globalThis;
  return r;
}
var Or = 12;
function re(r) {
  if (r == null)
    return /* @__PURE__ */ new Date();
  var n = typeof r == "string" ? qp(r) : A(r);
  return Vn(n) ? n : /* @__PURE__ */ new Date();
}
function sa(r, n, t, e, a) {
  a === void 0 && (a = re());
  for (var o = sr(t) || sr(Za()), i = Array.isArray(n) ? n : [n], s = 0, c = i; s < c.length; s++) {
    var l = c[s], u = Bp(r, l, a, {
      locale: o
    });
    if (Vn(u) && (!e || r === se(u, l, t)))
      return u;
  }
  return null;
}
function Vn(r, n) {
  return wn(r) && !Ft(r, /* @__PURE__ */ new Date("1/1/1800"));
}
function se(r, n, t) {
  if (t === "en")
    return Qo(r, n, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? sr(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), e = e || sr(Za()), Qo(r, n, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Ne(r, n) {
  var t = n.dateFormat, e = n.locale, a = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return r && se(r, a, e) || "";
}
function vh(r, n, t) {
  if (!r)
    return "";
  var e = Ne(r, t), a = n ? Ne(n, t) : "";
  return "".concat(e, " - ").concat(a);
}
function yh(r, n) {
  if (!(r != null && r.length))
    return "";
  var t = r[0] ? Ne(r[0], n) : "";
  if (r.length === 1)
    return t;
  if (r.length === 2 && r[1]) {
    var e = Ne(r[1], n);
    return "".concat(t, ", ").concat(e);
  }
  var a = r.length - 1;
  return "".concat(t, " (+").concat(a, ")");
}
function ca(r, n) {
  var t = n.hour, e = t === void 0 ? 0 : t, a = n.minute, o = a === void 0 ? 0 : a, i = n.second, s = i === void 0 ? 0 : i;
  return rn(nn(an(r, s), o), e);
}
function wh(r) {
  return $a(r);
}
function bh(r, n) {
  return se(r, "ddd", n);
}
function sn(r) {
  return Yt(r);
}
function yt(r, n, t) {
  var e = sr(n || Za());
  return lt(r, {
    locale: e,
    weekStartsOn: t
  });
}
function ct(r) {
  return Rs(r);
}
function wr(r) {
  return jn(r);
}
function oi(r) {
  return Sa(r);
}
function ii() {
  return Yt(re());
}
function si(r) {
  return Ts(r);
}
function Dh(r) {
  return qu(r);
}
function xh(r) {
  return Os(r);
}
function Ge(r, n) {
  return r && n ? Gp(r, n) : !r && !n;
}
function Ce(r, n) {
  return r && n ? Vp(r, n) : !r && !n;
}
function Pn(r, n) {
  return r && n ? Kp(r, n) : !r && !n;
}
function X(r, n) {
  return r && n ? Gu(r, n) : !r && !n;
}
function Pt(r, n) {
  return r && n ? Qd(r, n) : !r && !n;
}
function br(r, n, t) {
  var e, a = Yt(n), o = Ts(t);
  try {
    e = _r(r, { start: a, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function Za() {
  var r = tc();
  return r.__localeId__;
}
function sr(r) {
  if (typeof r == "string") {
    var n = tc();
    return n.__localeData__ ? n.__localeData__[r] : void 0;
  } else
    return r;
}
function kh(r, n, t) {
  return n(se(r, "EEEE", t));
}
function _h(r, n) {
  return se(r, "EEEEEE", n);
}
function Sh(r, n) {
  return se(r, "EEE", n);
}
function Ja(r, n) {
  return se(Ie(re(), r), "LLLL", n);
}
function rc(r, n) {
  return se(Ie(re(), r), "LLL", n);
}
function Ch(r, n) {
  return se(Qt(re(), r), "QQQ", n);
}
function Le(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.excludeDateIntervals, s = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Rr(r, { minDate: e, maxDate: a }) || o && o.some(function(u) {
    return u instanceof Date ? X(r, u) : X(r, u.date);
  }) || i && i.some(function(u) {
    var d = u.start, p = u.end;
    return _r(r, { start: d, end: p });
  }) || s && !s.some(function(u) {
    return X(r, u);
  }) || c && !c.some(function(u) {
    var d = u.start, p = u.end;
    return _r(r, { start: d, end: p });
  }) || l && !l(re(r)) || !1;
}
function eo(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeDates, a = t.excludeDateIntervals;
  return a && a.length > 0 ? a.some(function(o) {
    var i = o.start, s = o.end;
    return _r(r, { start: i, end: s });
  }) : e && e.some(function(o) {
    var i;
    return o instanceof Date ? X(r, o) : X(r, (i = o.date) !== null && i !== void 0 ? i : /* @__PURE__ */ new Date());
  }) || !1;
}
function nc(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Rr(r, {
    minDate: e ? Rs(e) : void 0,
    maxDate: a ? Os(a) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return Ce(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return Ce(r, c);
  }) || s && !s(re(r)) || !1;
}
function zr(r, n, t, e) {
  var a = G(r), o = Ee(r), i = G(n), s = Ee(n), c = G(e);
  return a === i && a === c ? o <= t && t <= s : a < i ? c === a && o <= t || c === i && s >= t || c < i && c > a : !1;
}
function Eh(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates;
  return Rr(r, { minDate: e, maxDate: a }) || o && o.some(function(s) {
    return Ce(s instanceof Date ? s : s.date, r);
  }) || i && !i.some(function(s) {
    return Ce(s, r);
  }) || !1;
}
function Vr(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Rr(r, { minDate: e, maxDate: a }) || (o == null ? void 0 : o.some(function(c) {
    return Pn(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return Pn(r, c);
  }) || s && !s(re(r)) || !1;
}
function Kr(r, n, t) {
  if (!n || !t || !wn(n) || !wn(t))
    return !1;
  var e = G(n), a = G(t);
  return e <= r && a >= r;
}
function cn(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate, c = new Date(r, 0, 1);
  return Rr(c, {
    minDate: e ? jn(e) : void 0,
    maxDate: a ? Ns(a) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return Ge(c, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return Ge(c, l);
  }) || s && !s(re(c)) || !1;
}
function Gr(r, n, t, e) {
  var a = G(r), o = Ot(r), i = G(n), s = Ot(n), c = G(e);
  return a === i && a === c ? o <= t && t <= s : a < i ? c === a && o <= t || c === i && s >= t || c < i && c > a : !1;
}
function Rr(r, n) {
  var t, e = n === void 0 ? {} : n, a = e.minDate, o = e.maxDate;
  return (t = a && rr(r, a) < 0 || o && rr(r, o) > 0) !== null && t !== void 0 ? t : !1;
}
function ci(r, n) {
  return n.some(function(t) {
    return it(t) === it(r) && st(t) === st(r) && vt(t) === vt(r);
  });
}
function li(r, n) {
  var t = n === void 0 ? {} : n, e = t.excludeTimes, a = t.includeTimes, o = t.filterTime;
  return e && ci(r, e) || a && !ci(r, a) || o && !o(r) || !1;
}
function ui(r, n) {
  var t = n.minTime, e = n.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var a = re();
  a = rn(a, it(r)), a = nn(a, st(r)), a = an(a, vt(r));
  var o = re();
  o = rn(o, it(t)), o = nn(o, st(t)), o = an(o, vt(t));
  var i = re();
  i = rn(i, it(e)), i = nn(i, st(e)), i = an(i, vt(e));
  var s;
  try {
    s = !_r(a, { start: o, end: i });
  } catch {
    s = !1;
  }
  return s;
}
function di(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = Rt(r, 1);
  return e && bn(e, o) > 0 || a && a.every(function(i) {
    return bn(i, o) > 0;
  }) || !1;
}
function pi(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = ze(r, 1);
  return e && bn(o, e) > 0 || a && a.every(function(i) {
    return bn(o, i) > 0;
  }) || !1;
}
function Mh(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = jn(r), i = $s(o);
  return e && Dn(e, i) > 0 || a && a.every(function(s) {
    return Dn(s, i) > 0;
  }) || !1;
}
function Ph(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = Ns(r), i = Ha(o, 1);
  return e && Dn(i, e) > 0 || a && a.every(function(s) {
    return Dn(i, s) > 0;
  }) || !1;
}
function fi(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.includeDates, o = nr(r, 1);
  return e && xn(e, o) > 0 || a && a.every(function(i) {
    return xn(i, o) > 0;
  }) || !1;
}
function Th(r, n) {
  var t = n === void 0 ? {} : n, e = t.minDate, a = t.yearItemNumber, o = a === void 0 ? Or : a, i = wr(nr(r, o)), s = mt(i, o).endPeriod, c = e && G(e);
  return c && c > s || !1;
}
function hi(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.includeDates, o = at(r, 1);
  return e && xn(o, e) > 0 || a && a.every(function(i) {
    return xn(o, i) > 0;
  }) || !1;
}
function Oh(r, n) {
  var t = n === void 0 ? {} : n, e = t.maxDate, a = t.yearItemNumber, o = a === void 0 ? Or : a, i = at(r, o), s = mt(i, o).startPeriod, c = e && G(e);
  return c && c < s || !1;
}
function ac(r) {
  var n = r.minDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return rr(a, n) >= 0;
    });
    return $o(e);
  } else return t ? $o(t) : n;
}
function oc(r) {
  var n = r.maxDate, t = r.includeDates;
  if (t && n) {
    var e = t.filter(function(a) {
      return rr(a, n) <= 0;
    });
    return Ho(e);
  } else return t ? Ho(t) : n;
}
function mi(r, n) {
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
        for (var p = 0, f = d.length; p < f; p++) {
          var m = d[p];
          if (m) {
            var s = se(m, "MM.dd.yyyy"), c = e.get(s) || [];
            c.includes(u) || (c.push(u), e.set(s, c));
          }
        }
    }
  }
  return e;
}
function Rh(r, n) {
  return r.length !== n.length ? !1 : r.every(function(t, e) {
    return t === n[e];
  });
}
function Nh(r, n) {
  r === void 0 && (r = []), n === void 0 && (n = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return r.forEach(function(e) {
    var a = e.date, o = e.holidayName;
    if (ot(a)) {
      var i = se(a, "MM.dd.yyyy"), s = t.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === n && Rh(s.holidayNames, [o]))) {
        s.className = n;
        var c = s.holidayNames;
        s.holidayNames = c ? Ue(Ue([], c, !0), [o], !1) : [o], t.set(i, s);
      }
    }
  }), t;
}
function Ih(r, n, t, e, a) {
  for (var o = a.length, i = [], s = 0; s < o; s++) {
    var c = r, l = a[s];
    l && (c = Bu(c, it(l)), c = _a(c, st(l)), c = Ku(c, vt(l)));
    var u = _a(r, (t + 1) * e);
    bt(c, n) && Ft(c, u) && l != null && i.push(l);
  }
  return i;
}
function gi(r) {
  return r < 10 ? "0".concat(r) : "".concat(r);
}
function mt(r, n) {
  n === void 0 && (n = Or);
  var t = Math.ceil(G(r) / n) * n, e = t - (n - 1);
  return { startPeriod: e, endPeriod: t };
}
function Lh(r) {
  var n = new Date(r.getFullYear(), r.getMonth(), r.getDate()), t = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 24);
  return Math.round((+t - +n) / 36e5);
}
function vi(r) {
  var n = r.getSeconds(), t = r.getMilliseconds();
  return A(r.getTime() - n * 1e3 - t);
}
function Ah(r, n) {
  return vi(r).getTime() === vi(n).getTime();
}
function yi(r) {
  if (!ot(r))
    throw new Error("Invalid date");
  var n = new Date(r);
  return n.setHours(0, 0, 0, 0), n;
}
function wi(r, n) {
  if (!ot(r) || !ot(n))
    throw new Error("Invalid date received");
  var t = yi(r), e = yi(n);
  return Ft(t, e);
}
function ic(r) {
  return r.key === O.Space;
}
var Yh = (
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
          var u = a.split(":"), d = u[0], p = u[1];
          l.setHours(Number(d)), l.setMinutes(Number(p));
        }
        (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, l);
      }, e.renderTimeInput = function() {
        var a = e.state.time, o = e.props, i = o.date, s = o.timeString, c = o.customTimeInput;
        return c ? Oi(c, {
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
), Fh = (
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
        i === O.Space && (e.preventDefault(), e.key = O.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isSameDay = function(e) {
        return X(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var a = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !a && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), Le(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return eo(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return X(t.props.day, yt(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && X(e, yt(t.props.day, t.props.locale, t.props.calendarStartDay));
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
        var e, a = t.props, o = a.day, i = a.selectsStart, s = a.selectsEnd, c = a.selectsRange, l = a.selectsDisabledDaysInRange, u = a.startDate, d = a.endDate, p = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(i || s || c) || !p || !l && t.isDisabled() ? !1 : i && d && (Ft(p, d) || Pt(p, d)) ? br(o, p, d) : s && u && (bt(p, u) || Pt(p, u)) || c && u && !d && (bt(p, u) || Pt(p, u)) ? br(o, u, p) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, i = a.startDate, s = a.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? X(o, c) : X(o, i);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var a = t.props, o = a.day, i = a.endDate, s = a.selectsEnd, c = a.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s || c ? X(o, l) : X(o, i);
      }, t.isRangeStart = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : X(o, a);
      }, t.isRangeEnd = function() {
        var e = t.props, a = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : X(i, a);
      }, t.isWeekend = function() {
        var e = zd(t.props.day);
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
        return De("react-datepicker__day", a, "react-datepicker__day--" + bh(t.props.day), {
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
          return u instanceof Date ? X(u, a) : X(u == null ? void 0 : u.date, a);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, a = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && X(a, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(qo(t.props.day), t.props.day) : qo(t.props.day);
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
), jh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.weekNumberEl = wt(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var a, o, i = e.key;
        i === O.Space && (e.preventDefault(), e.key = O.Enter), (o = (a = t.props).handleOnKeyDown) === null || o === void 0 || o.call(a, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !X(t.props.date, t.props.selected) && X(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || X(t.props.date, t.props.selected) && X(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var a = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && X(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (a = !0), t.props.inline && !t.props.shouldFocusDayInline && (a = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (a = !0)), a && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
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
        "react-datepicker__week-number--selected": !!s && X(this.props.date, this.props.selected)
      };
      return w.createElement("div", { ref: this.weekNumberEl, className: De(c), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, n;
  }(we)
), Wh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return Le(e, {
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
          var p = !t.isDisabled(d);
          if (p) {
            l = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, a, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((i = t.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : n.defaultProps.shouldCloseOnSelect) && ((c = (s = t.props).setOpen) === null || c === void 0 || c.call(s, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : wh(e);
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
          a.push(w.createElement(jh, Z({ key: "W" }, n.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: i })));
        }
        return a.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = $e(e, s);
          return w.createElement(Fh, Z({}, n.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return yt(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !X(t.startOfWeek(), t.props.selected) && X(t.startOfWeek(), t.props.preSelection);
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
        "react-datepicker__week--selected": X(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return w.createElement("div", { className: De(t) }, this.renderDays());
    }, n;
  }(we)
), vr, Hh = 6, Ut = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, la = (vr = {}, vr[Ut.TWO_COLUMNS] = {
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
}, vr), Qr = 1;
function bi(r, n) {
  return r ? Ut.FOUR_COLUMNS : n ? Ut.TWO_COLUMNS : Ut.THREE_COLUMNS;
}
var $h = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.MONTH_REFS = Ue([], Array(12), !0).map(function() {
        return wt();
      }), t.QUARTER_REFS = Ue([], Array(4), !0).map(function() {
        return wt();
      }), t.isDisabled = function(e) {
        return Le(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return eo(e, {
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
        return !i || !s ? !1 : Ce(Ie(o, e), i);
      }, t.isRangeStartQuarter = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Pn(Qt(o, e), i);
      }, t.isRangeEndMonth = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Ce(Ie(o, e), s);
      }, t.isRangeEndQuarter = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate;
        return !i || !s ? !1 : Pn(Qt(o, e), s);
      }, t.isInSelectingRangeMonth = function(e) {
        var a, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, p = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(s || c || l) || !p ? !1 : s && d ? zr(p, d, e, i) : c && u || l && u && !d ? zr(u, p, e, i) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.startDate, c = o.selectsStart, l = Ie(i, e), u = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c ? Ce(l, u) : Ce(l, s);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var a;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = Ie(i, e), d = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return c || l ? Ce(u, d) : Ce(u, s);
      }, t.isInSelectingRangeQuarter = function(e) {
        var a, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, p = (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        return !(s || c || l) || !p ? !1 : s && d ? Gr(p, d, e, i) : c && u || l && u && !d ? Gr(u, p, e, i) : !1;
      }, t.isWeekInMonth = function(e) {
        var a = t.props.day, o = $e(e, 6);
        return Ce(e, a) || Ce(o, a);
      }, t.isCurrentMonth = function(e, a) {
        return G(e) === G(re()) && a === Ee(re());
      }, t.isCurrentQuarter = function(e, a) {
        return G(e) === G(re()) && a === Ot(re());
      }, t.isSelectedMonth = function(e, a, o) {
        return Ee(o) === a && G(e) === G(o);
      }, t.isSelectMonthInList = function(e, a, o) {
        return o.some(function(i) {
          return t.isSelectedMonth(e, a, i);
        });
      }, t.isSelectedQuarter = function(e, a, o) {
        return Ot(e) === a && G(e) === G(o);
      }, t.renderWeeks = function() {
        for (var e = [], a = t.props.fixedHeight, o = 0, i = !1, s = yt(ct(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(m) {
          return t.props.showWeekPicker ? yt(m, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(m) {
          return t.props.showWeekPicker ? yt(m, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(w.createElement(Wh, Z({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: s, month: Ee(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !i; ) {
          o++, s = yn(s, 1);
          var p = a && o >= Hh, f = !a && !t.isWeekInMonth(s);
          if (p || f)
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
        var i, s = t.props, c = s.selected, l = s.preSelection, u = s.setPreSelection, d = s.minDate, p = s.maxDate, f = s.showFourColumnMonthYearPicker, m = s.showTwoColumnMonthYearPicker;
        if (l) {
          var g = bi(f, m), y = t.getVerticalOffset(g), b = (i = la[g]) === null || i === void 0 ? void 0 : i.grid, D = function(k, C, P) {
            var I, T, L = C, $ = P;
            switch (k) {
              case O.ArrowRight:
                L = ze(C, Qr), $ = P === 11 ? 0 : P + Qr;
                break;
              case O.ArrowLeft:
                L = Rt(C, Qr), $ = P === 0 ? 11 : P - Qr;
                break;
              case O.ArrowUp:
                L = Rt(C, y), $ = !((I = b == null ? void 0 : b[0]) === null || I === void 0) && I.includes(P) ? P + 12 - y : P - y;
                break;
              case O.ArrowDown:
                L = ze(C, y), $ = !((T = b == null ? void 0 : b[b.length - 1]) === null || T === void 0) && T.includes(P) ? P - 12 + y : P + y;
                break;
            }
            return { newCalculatedDate: L, newCalculatedMonth: $ };
          }, x = function(k, C, P) {
            for (var I = 40, T = k, L = !1, $ = 0, B = D(T, C, P), K = B.newCalculatedDate, Y = B.newCalculatedMonth; !L; ) {
              if ($ >= I) {
                K = C, Y = P;
                break;
              }
              if (d && K < d) {
                T = O.ArrowRight;
                var j = D(T, K, Y);
                K = j.newCalculatedDate, Y = j.newCalculatedMonth;
              }
              if (p && K > p) {
                T = O.ArrowLeft;
                var j = D(T, K, Y);
                K = j.newCalculatedDate, Y = j.newCalculatedMonth;
              }
              if (Eh(K, t.props)) {
                var j = D(T, K, Y);
                K = j.newCalculatedDate, Y = j.newCalculatedMonth;
              } else
                L = !0;
              $++;
            }
            return { newCalculatedDate: K, newCalculatedMonth: Y };
          };
          if (a === O.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var S = x(a, l, o), M = S.newCalculatedDate, _ = S.newCalculatedMonth;
          switch (a) {
            case O.ArrowRight:
            case O.ArrowLeft:
            case O.ArrowUp:
            case O.ArrowDown:
              t.handleMonthNavigation(_, M);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var a, o;
        return (o = (a = la[e]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, a) {
        var o = t.props, i = o.disabledKeyboardNavigation, s = o.handleOnMonthKeyDown, c = e.key;
        c !== O.Tab && e.preventDefault(), i || t.handleKeyboardNavigation(e, c, a), s && s(e);
      }, t.onQuarterClick = function(e, a) {
        var o = Qt(t.props.day, a);
        Vr(o, t.props) || t.handleDayClick(oi(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var a = Qt(t.props.day, e);
        Vr(a, t.props) || t.handleDayMouseEnter(oi(a));
      }, t.handleQuarterNavigation = function(e, a) {
        var o, i, s, c;
        t.isDisabled(a) || t.isExcluded(a) || ((i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, a), (c = (s = t.QUARTER_REFS[e - 1]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, a) {
        var o, i, s = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case O.Enter:
              t.onQuarterClick(e, a), (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, t.props.selected);
              break;
            case O.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 4 ? 1 : a + 1, Ha(t.props.preSelection, 1));
              break;
            case O.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(a === 1 ? 4 : a - 1, $s(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var a, o = t.props, i = o.day, s = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = Ie(i, e);
        return {
          isDisabled: (a = (s || c || l || u) && nc(d, t.props)) !== null && a !== void 0 ? a : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var a = t.isMonthDisabledForLabelDate(e).isDisabled;
        return a;
      }, t.getMonthClassNames = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate, c = a.preSelection, l = a.monthClassName, u = l ? l(Ie(o, e)) : void 0, d = t.getSelection();
        return De("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": i && s ? zr(i, s, e, o) : void 0,
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
        var a = Ot(t.props.preSelection), o = Vr(t.props.day, t.props), i = e === a && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getAriaLabel = function(e) {
        var a = t.props, o = a.chooseDayAriaLabelPrefix, i = o === void 0 ? "Choose" : o, s = a.disabledDayAriaLabelPrefix, c = s === void 0 ? "Not available" : s, l = a.day, u = a.locale, d = Ie(l, e), p = t.isDisabled(d) || t.isExcluded(d) ? c : i;
        return "".concat(p, " ").concat(se(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var a = t.props, o = a.day, i = a.startDate, s = a.endDate, c = a.selected, l = a.minDate, u = a.maxDate, d = a.excludeDates, p = a.includeDates, f = a.filterDate, m = a.preSelection, g = a.disabledKeyboardNavigation, y = (l || u || d || p || f) && Vr(Qt(o, e), t.props);
        return De("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": y,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !g && m && t.isSelectedQuarter(o, e, m) && !y,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": i && s ? Gr(i, s, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e),
          "react-datepicker__quarter-text--today": t.isCurrentQuarter(o, e)
        });
      }, t.getMonthContent = function(e) {
        var a = t.props, o = a.showFullMonthYearPicker, i = a.renderMonthContent, s = a.locale, c = a.day, l = rc(e, s), u = Ja(e, s);
        return i ? i(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var a, o = t.props, i = o.renderQuarterContent, s = o.locale, c = Ch(e, s);
        return (a = i == null ? void 0 : i(e, c)) !== null && a !== void 0 ? a : c;
      }, t.renderMonths = function() {
        var e, a = t.props, o = a.showTwoColumnMonthYearPicker, i = a.showFourColumnMonthYearPicker, s = a.day, c = a.selected, l = (e = la[bi(i, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return w.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(p, f) {
            return w.createElement("div", { ref: t.MONTH_REFS[p], key: f, onClick: function(m) {
              t.onMonthClick(m, p);
            }, onKeyDown: function(m) {
              ic(m) && (m.preventDefault(), m.key = O.Enter), t.onMonthKeyDown(m, p);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(p);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(p);
            } : void 0, tabIndex: Number(t.getTabIndex(p)), className: t.getMonthClassNames(p), "aria-disabled": t.isMonthDisabled(p), role: "option", "aria-label": t.getAriaLabel(p), "aria-current": t.isCurrentMonth(s, p) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(s, p, c) : void 0 }, t.getMonthContent(p));
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
), Bh = (
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
      return w.createElement(zn, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(we)
), zh = (
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
        return w.createElement(Bh, Z({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
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
        return rc(o, t.props.locale);
      } : function(o) {
        return Ja(o, t.props.locale);
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
function Vh(r, n) {
  for (var t = [], e = ct(r), a = ct(n); !bt(e, a); )
    t.push(re(e)), e = ze(e, 1);
  return t;
}
var Kh = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(a) {
          var o = Ea(a), i = Ge(e.props.date, a) && Ce(e.props.date, a);
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
        monthYearsList: Vh(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return n.prototype.render = function() {
      var t = De({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return w.createElement(zn, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(we)
), Gh = (
  /** @class */
  function(r) {
    be(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = ct(t.props.minDate), a = ct(t.props.maxDate), o = []; !bt(e, a); ) {
          var i = Ea(e);
          o.push(w.createElement("option", { key: i, value: i }, se(e, t.props.dateFormat, t.props.locale))), e = ze(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return w.createElement("select", { value: Ea(ct(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var a = se(t.props.date, t.props.dateFormat, t.props.locale);
        return w.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          w.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, a)
        );
      }, t.renderDropdown = function() {
        return w.createElement(Kh, Z({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, a = [t.renderReadView(!e)];
        return e && a.unshift(t.renderDropdown()), a;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var a = re(e);
        Ge(t.props.date, a) && Ce(t.props.date, a) || t.props.onChange(a);
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
), Qh = (
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
        (t.props.minTime || t.props.maxTime) && ui(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && li(e, t.props) || (o = (a = t.props).onChange) === null || o === void 0 || o.call(a, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && Ah(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && ui(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && li(e, t.props);
      }, t.liClasses = function(e) {
        var a, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (it(e) * 3600 + st(e) * 60 + vt(e)) % (((a = t.props.intervals) !== null && a !== void 0 ? a : n.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, a) {
        var o, i;
        e.key === O.Space && (e.preventDefault(), e.key = O.Enter), (e.key === O.ArrowUp || e.key === O.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === O.ArrowDown || e.key === O.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === O.Enter && t.handleClick(a), (i = (o = t.props).handleOnKeyDown) === null || i === void 0 || i.call(o, e);
      }, t.renderTimes = function() {
        for (var e, a = [], o = typeof t.props.format == "string" ? t.props.format : "p", i = (e = t.props.intervals) !== null && e !== void 0 ? e : n.defaultProps.intervals, s = t.props.selected || t.props.openToDate || re(), c = sn(s), l = t.props.injectTimes && t.props.injectTimes.sort(function(y, b) {
          return y.getTime() - b.getTime();
        }), u = 60 * Lh(s), d = u / i, p = 0; p < d; p++) {
          var f = _a(c, p * i);
          if (a.push(f), l) {
            var m = Ih(c, f, p, i, l);
            a = a.concat(m);
          }
        }
        var g = a.reduce(function(y, b) {
          return b.getTime() <= s.getTime() ? b : y;
        }, a[0]);
        return a.map(function(y) {
          return w.createElement("li", { key: y.valueOf(), onClick: t.handleClick.bind(t, y), className: t.liClasses(y), ref: function(b) {
            y === g && (t.centerLi = b);
          }, onKeyDown: function(b) {
            t.handleOnKeyDown(b, y);
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
), Di = 3, qh = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.YEAR_REFS = Ue([], Array(e.props.yearItemNumber), !0).map(function() {
        return wt();
      }), e.isDisabled = function(a) {
        return Le(a, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(a) {
        return eo(a, {
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
        var i, s, c, l, u = e.props, d = u.date, p = u.yearItemNumber;
        if (!(d === void 0 || p === void 0)) {
          var f = mt(d, p).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, o), a - f < 0 ? e.updateFocusOnPaginate(p - (f - a)) : a - f >= p ? e.updateFocusOnPaginate(Math.abs(p - (a - f))) : (l = (c = e.YEAR_REFS[a - f]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(a, o) {
        return X(a, o);
      }, e.isCurrentYear = function(a) {
        return a === G(re());
      }, e.isRangeStart = function(a) {
        return e.props.startDate && e.props.endDate && Ge(Ve(re(), a), e.props.startDate);
      }, e.isRangeEnd = function(a) {
        return e.props.startDate && e.props.endDate && Ge(Ve(re(), a), e.props.endDate);
      }, e.isInRange = function(a) {
        return Kr(a, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(a) {
        var o = e.props, i = o.selectsStart, s = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(i || s || c) || !e.selectingDate() ? !1 : i && u ? Kr(a, e.selectingDate(), u) : s && l || c && l && !u ? Kr(a, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var i = e.props, s = i.startDate, c = i.selectsStart, l = Ve(re(), a);
        return c ? Ge(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ge(l, s ?? null);
      }, e.isSelectingRangeEnd = function(a) {
        var o;
        if (!e.isInSelectingRange(a))
          return !1;
        var i = e.props, s = i.endDate, c = i.selectsEnd, l = i.selectsRange, u = Ve(re(), a);
        return c || l ? Ge(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ge(u, s ?? null);
      }, e.isKeyboardSelected = function(a) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, i = o.minDate, s = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = wr(Ve(e.props.date, a)), p = (i || s || c || l || u) && cn(a, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !X(d, wr(e.props.selected)) && X(d, wr(e.props.preSelection)) && !p;
        }
      }, e.onYearClick = function(a, o) {
        var i = e.props.date;
        i !== void 0 && e.handleYearClick(wr(Ve(i, o)), a);
      }, e.onYearKeyDown = function(a, o) {
        var i, s, c = a.key, l = e.props, u = l.date, d = l.yearItemNumber, p = l.handleOnKeyDown;
        if (c !== O.Tab && a.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case O.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(a, o), (s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, e.props.selected);
              break;
            case O.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, at(e.props.preSelection, 1));
              break;
            case O.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, nr(e.props.preSelection, 1));
              break;
            case O.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var f = mt(u, d).startPeriod, m = Di, g = o - m;
              if (g < f) {
                var y = d % m;
                o >= f && o < f + y ? m = y : m += y, g = o - m;
              }
              e.handleYearNavigation(g, nr(e.props.preSelection, m));
              break;
            }
            case O.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var b = mt(u, d).endPeriod, m = Di, g = o + m;
              if (g > b) {
                var y = d % m;
                o <= b && o > b - y ? m = y : m += y, g = o + m;
              }
              e.handleYearNavigation(g, at(e.props.preSelection, m));
              break;
            }
          }
        p && p(a);
      }, e.getYearClassNames = function(a) {
        var o = e.props, i = o.date, s = o.minDate, c = o.maxDate, l = o.selected, u = o.excludeDates, d = o.includeDates, p = o.filterDate, f = o.yearClassName;
        return De("react-datepicker__year-text", "react-datepicker__year-".concat(a), i ? f == null ? void 0 : f(Ve(i, a)) : void 0, {
          "react-datepicker__year-text--selected": l ? a === G(l) : void 0,
          "react-datepicker__year-text--disabled": (s || c || u || d || p) && cn(a, e.props),
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
        var o = G(e.props.preSelection), i = cn(a, e.props);
        return a === o && !i ? "0" : "-1";
      }, e.getYearContent = function(a) {
        return e.props.renderYearContent ? e.props.renderYearContent(a) : a;
      }, e;
    }
    return n.prototype.render = function() {
      var t = this, e = [], a = this.props, o = a.date, i = a.yearItemNumber, s = a.onYearMouseEnter, c = a.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = mt(o, i), u = l.startPeriod, d = l.endPeriod, p = function(g) {
        e.push(w.createElement("div", { ref: f.YEAR_REFS[g - u], onClick: function(y) {
          t.onYearClick(y, g);
        }, onKeyDown: function(y) {
          ic(y) && (y.preventDefault(), y.key = O.Enter), t.onYearKeyDown(y, g);
        }, tabIndex: Number(f.getYearTabIndex(g)), className: f.getYearClassNames(g), onMouseEnter: f.props.usePointerEvent ? void 0 : function(y) {
          return s(y, g);
        }, onPointerEnter: f.props.usePointerEvent ? function(y) {
          return s(y, g);
        } : void 0, onMouseLeave: f.props.usePointerEvent ? void 0 : function(y) {
          return c(y, g);
        }, onPointerLeave: f.props.usePointerEvent ? function(y) {
          return c(y, g);
        } : void 0, key: g, "aria-current": f.isCurrentYear(g) ? "date" : void 0 }, f.getYearContent(g)));
      }, f = this, m = u; m <= d; m++)
        p(m);
      return w.createElement(
        "div",
        { className: "react-datepicker__year" },
        w.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, n;
  }(we)
);
function Uh(r, n, t, e) {
  for (var a = [], o = 0; o < 2 * n + 1; o++) {
    var i = r + n - o, s = !0;
    t && (s = G(t) <= i), e && s && (s = G(e) >= i), s && a.push(i);
  }
  return a;
}
var Xh = (
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
        yearsList: Uh(e.props.year, i, e.props.minDate, e.props.maxDate)
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
      return w.createElement(zn, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, n;
  }(we)
), Zh = (
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
        return w.createElement(Xh, Z({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
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
), Jh = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], em = function(r) {
  var n = (r.className || "").split(/\s+/);
  return Jh.some(function(t) {
    return n.indexOf(t) >= 0;
  });
}, tm = (
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
        em(a.target) && ((i = (o = e.props).onDropdownFocus) === null || i === void 0 || i.call(o, a));
      }, e.getDateInView = function() {
        var a = e.props, o = a.preSelection, i = a.selected, s = a.openToDate, c = ac(e.props), l = oc(e.props), u = re(), d = s || i || o;
        return d || (c && Ft(u, c) ? c : l && bt(u, l) ? l : u);
      }, e.increaseMonth = function() {
        e.setState(function(a) {
          var o = a.date;
          return {
            date: ze(o, 1)
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
        e.setState({ selectingDate: Ve(re(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(a, o);
      }, e.handleYearMouseLeave = function(a, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(a, o);
      }, e.handleYearChange = function(a) {
        var o, i, s, c;
        (i = (o = e.props).onYearChange) === null || i === void 0 || i.call(o, a), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(a), (c = (s = e.props).setOpen) === null || c === void 0 || c.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(a);
      }, e.getEnabledPreSelectionDateForMonth = function(a) {
        if (!Le(a, e.props))
          return a;
        for (var o = ct(a), i = xh(a), s = Qu(i, o), c = null, l = 0; l <= s; l++) {
          var u = $e(o, l);
          if (!Le(u, e.props)) {
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
            date: Ve(i, Number(a))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Ie(i, Number(a))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(a) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Ve(Ie(i, Ee(a)), G(a))
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
        return e.props.formatWeekDay ? kh(a, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? Sh(a, o) : _h(a, o);
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
              d = fi(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = Th(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = Mh(e.state.date, e.props);
              break;
            default:
              d = di(u, e.props);
              break;
          }
          if (!(!((i = e.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : n.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && d || e.props.showTimeSelectOnly)) {
            var p = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], f = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], m = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (m = e.decreaseYear), d && e.props.showDisabledMonthNavigation && (f.push("react-datepicker__navigation--previous--disabled"), m = void 0);
            var g = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, y = e.props, b = y.previousMonthButtonLabel, D = b === void 0 ? n.defaultProps.previousMonthButtonLabel : b, x = y.previousYearButtonLabel, S = x === void 0 ? n.defaultProps.previousYearButtonLabel : x, M = e.props, _ = M.previousMonthAriaLabel, k = _ === void 0 ? typeof D == "string" ? D : "Previous Month" : _, C = M.previousYearAriaLabel, P = C === void 0 ? typeof S == "string" ? S : "Previous Year" : C;
            return w.createElement(
              "button",
              { type: "button", className: f.join(" "), onClick: m, onKeyDown: e.props.handleOnKeyDown, "aria-label": g ? P : k },
              w.createElement("span", { className: p.join(" ") }, g ? S : D)
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
              o = hi(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = Oh(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = Ph(e.state.date, e.props);
              break;
            default:
              o = pi(e.state.date, e.props);
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
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, p = d === void 0 ? n.defaultProps.nextMonthButtonLabel : d, f = u.nextYearButtonLabel, m = f === void 0 ? n.defaultProps.nextYearButtonLabel : f, g = e.props, y = g.nextMonthAriaLabel, b = y === void 0 ? typeof p == "string" ? p : "Next Month" : y, D = g.nextYearAriaLabel, x = D === void 0 ? typeof m == "string" ? m : "Next Year" : D;
            return w.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? x : b },
              w.createElement("span", { className: s.join(" ") }, l ? m : p)
            );
          }
        }
      }, e.renderCurrentMonth = function(a) {
        a === void 0 && (a = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), w.createElement("h2", { className: o.join(" ") }, se(a, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showYearDropdown || a))
          return w.createElement(Zh, Z({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: G(e.state.date) }));
      }, e.renderMonthDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthDropdown || a))
          return w.createElement(zh, Z({}, n.defaultProps, e.props, { month: Ee(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(a) {
        if (a === void 0 && (a = !1), !(!e.props.showMonthYearDropdown || a))
          return w.createElement(Gh, Z({}, n.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(a) {
        e.props.onSelect(ii(), a), e.props.setPreSelection && e.props.setPreSelection(ii());
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
        var l = di(e.state.date, e.props), u = pi(e.state.date, e.props), d = fi(e.state.date, e.props), p = hi(e.state.date, e.props), f = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return w.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (i = (o = e.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(o, Z(Z({}, e.state), { customHeaderCount: c, monthDate: s, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: p })),
          f && w.createElement("div", { className: "react-datepicker__day-names" }, e.header(s))
        );
      }, e.renderYearHeader = function(a) {
        var o = a.monthDate, i = e.props, s = i.showYearPicker, c = i.yearItemNumber, l = c === void 0 ? n.defaultProps.yearItemNumber : c, u = mt(o, l), d = u.startPeriod, p = u.endPeriod;
        return w.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(d, " - ").concat(p) : G(o));
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
            var p = d - u + c, f = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? at(l, p) : ze(l, p), m = "month-".concat(d), g = d < s - 1, y = d > 0;
            i.push(w.createElement(
              "div",
              { key: m, ref: function(b) {
                e.monthContainer = b ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: f, i: d }),
              w.createElement($h, Z({}, n.defaultProps, e.props, { containerRef: e.containerRef, ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: f, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: g, monthShowsDuplicateDaysStart: y }))
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
            w.createElement(qh, Z({}, n.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return w.createElement(Qh, Z({}, n.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var a = e.props.selected ? new Date(e.props.selected) : void 0, o = a && Vn(a) && !!e.props.selected, i = o ? "".concat(gi(a.getHours()), ":").concat(gi(a.getMinutes())) : "";
        if (e.props.showTimeInput)
          return w.createElement(Yh, Z({}, n.defaultProps, e.props, { date: a, timeString: i, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var a, o = mt(e.state.date, (a = e.props.yearItemNumber) !== null && a !== void 0 ? a : n.defaultProps.yearItemNumber), i = o.startPeriod, s = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(i, " - ").concat(s) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = G(e.state.date) : c = "".concat(Ja(Ee(e.state.date), e.props.locale), " ").concat(G(e.state.date)), w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
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
      if (this.props.preSelection && (!X(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var a = !Ce(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return a && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !X(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, n.prototype.render = function() {
      var t = this.props.container || mh;
      return w.createElement(
        zn,
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
), rm = function(r) {
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
}, sc = (
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
      return Ri.createPortal(this.props.children, this.el);
    }, n;
  }(we)
), nm = "[tabindex], a, button, input, select, textarea", am = function(r) {
  return (r instanceof HTMLAnchorElement || !r.disabled) && r.tabIndex !== -1;
}, cc = (
  /** @class */
  function(r) {
    be(n, r);
    function n(t) {
      var e = r.call(this, t) || this;
      return e.getTabChildren = function() {
        var a;
        return Array.prototype.slice.call((a = e.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(nm), 1, -1).filter(am);
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
function om(r) {
  var n = function(t) {
    var e, a = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Be(null), i = hh(Z({ open: !a, whileElementsMounted: zf, placement: t.popperPlacement, middleware: Ue([
      Xf({ padding: 15 }),
      Uf(10),
      Zf({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), s = Z(Z({}, t), { hidePopper: a, popperProps: Z(Z({}, i), { arrowRef: o }) });
    return w.createElement(r, Z({}, s));
  };
  return n;
}
var im = (
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
      var t = this.props, e = t.className, a = t.wrapperClassName, o = t.hidePopper, i = o === void 0 ? n.defaultProps.hidePopper : o, s = t.popperComponent, c = t.targetComponent, l = t.enableTabLoop, u = t.popperOnKeyDown, d = t.portalId, p = t.portalHost, f = t.popperProps, m = t.showArrow, g = void 0;
      if (!i) {
        var y = De("react-datepicker-popper", e);
        g = w.createElement(
          cc,
          { enableTabLoop: l },
          w.createElement(
            "div",
            { ref: f.refs.setFloating, style: f.floatingStyles, className: y, "data-placement": f.placement, onKeyDown: u },
            s,
            m && w.createElement(sh, { ref: f.arrowRef, context: f.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (g = Pi(this.props.popperContainer, {}, g)), d && !i && (g = w.createElement(sc, { portalId: d, portalHost: p }, g));
      var b = De("react-datepicker-wrapper", a);
      return w.createElement(
        w.Fragment,
        null,
        w.createElement("div", { ref: f.refs.setReference, className: b }, c),
        g
      );
    }, n;
  }(we)
), sm = om(im), xi = "react-datepicker-ignore-onclickoutside";
function cm(r, n) {
  return r && n ? Ee(r) !== Ee(n) || G(r) !== G(n) : r !== n;
}
var ua = "Date input not valid.", lm = (
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
          return Vn(s) ? Ue(Ue([], o, !0), [Z(Z({}, i), { date: s })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var a, o = e.getPreSelection(), i = ac(e.props), s = oc(e.props), c = i && Ft(o, sn(i)) ? i : s && bt(o, si(s)) ? s : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (a = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && a !== void 0 ? a : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: mi(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(Z(Z({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(Z(Z({}, e.state), { wasHidden: !0 }));
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
          lastPreSelectChange: da
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
            lastPreSelectChange: um
          });
          var p = e.props, f = p.selectsRange, m = p.startDate, g = p.endDate, y = (a = e.props.dateFormat) !== null && a !== void 0 ? a : n.defaultProps.dateFormat, b = (o = e.props.strictParsing) !== null && o !== void 0 ? o : n.defaultProps.strictParsing, D = (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : "";
          if (f) {
            var x = D.split("-", 2).map(function(T) {
              return T.trim();
            }), S = x[0], M = x[1], _ = sa(S ?? "", y, e.props.locale, b), k = sa(M ?? "", y, e.props.locale, b), C = (m == null ? void 0 : m.getTime()) !== (_ == null ? void 0 : _.getTime()), P = (g == null ? void 0 : g.getTime()) !== (k == null ? void 0 : k.getTime());
            if (!C && !P || _ && Le(_, e.props) || k && Le(k, e.props))
              return;
            (s = (i = e.props).onChange) === null || s === void 0 || s.call(i, [_, k], d);
          } else {
            var I = sa(D, y, e.props.locale, b, (c = e.props.selected) !== null && c !== void 0 ? c : void 0);
            (I || !D) && e.setSelected(I, d, !0);
          }
        }
      }, e.handleSelect = function(a, o, i) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(a, o, !1, i), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(a);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var s = e.props, c = s.startDate, l = s.endDate;
          c && !l && (e.props.swapRange || !wi(a, c)) && e.setOpen(!1);
        }
      }, e.setSelected = function(a, o, i, s) {
        var c, l, u = a;
        if (e.props.showYearPicker) {
          if (u !== null && cn(G(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && nc(u, e.props))
            return;
        } else if (u !== null && Le(u, e.props))
          return;
        var d = e.props, p = d.onChange, f = d.selectsRange, m = d.startDate, g = d.endDate, y = d.selectsMultiple, b = d.selectedDates, D = d.minTime, x = d.swapRange;
        if (!Pt(e.props.selected, u) || e.props.allowSameDay || f || y)
          if (u !== null && (e.props.selected && (!i || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = ca(u, {
            hour: it(e.props.selected),
            minute: st(e.props.selected),
            second: vt(e.props.selected)
          })), !i && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && D && (u = ca(u, {
            hour: D.getHours(),
            minute: D.getMinutes(),
            second: D.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: s })), f) {
            var S = !m && !g, M = m && !g, _ = m && g;
            S ? p == null || p([u, null], o) : M && (u === null ? p == null || p([null, null], o) : wi(u, m) ? x ? p == null || p([u, m], o) : p == null || p([u, null], o) : p == null || p([m, u], o)), _ && (p == null || p([u, null], o));
          } else if (y) {
            if (u !== null)
              if (!(b != null && b.length))
                p == null || p([u], o);
              else {
                var k = b.some(function(P) {
                  return X(P, u);
                });
                if (k) {
                  var C = b.filter(function(P) {
                    return !X(P, u);
                  });
                  p == null || p(C, o);
                } else
                  p == null || p(Ue(Ue([], b, !0), [u], !1), o);
              }
          } else
            p == null || p(u, o);
        i || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(a) {
        var o = ot(e.props.minDate), i = ot(e.props.maxDate), s = !0;
        if (a) {
          var c = sn(a);
          if (o && i)
            s = br(a, e.props.minDate, e.props.maxDate);
          else if (o) {
            var l = sn(e.props.minDate);
            s = bt(a, l) || Pt(c, l);
          } else if (i) {
            var u = si(e.props.maxDate);
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
          var s = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? a : ca(s, {
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
          (d === O.ArrowDown || d === O.ArrowUp || d === O.Enter) && ((s = e.onInputClick) === null || s === void 0 || s.call(e));
          return;
        }
        if (e.state.open) {
          if (d === O.ArrowDown || d === O.ArrowUp) {
            a.preventDefault();
            var p = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', f = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(p);
            f instanceof HTMLElement && f.focus({ preventScroll: !0 });
            return;
          }
          var m = re(e.state.preSelection);
          d === O.Enter ? (a.preventDefault(), a.target.blur(), e.inputOk() && e.state.lastPreSelectChange === da ? (e.handleSelect(m, a), !e.props.shouldCloseOnSelect && e.setPreSelection(m)) : e.setOpen(!1)) : d === O.Escape ? (a.preventDefault(), a.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === O.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ua });
        }
      }, e.onPortalKeyDown = function(a) {
        var o = a.key;
        o === O.Escape && (a.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(a) {
        var o, i, s, c, l, u, d = e.props, p = d.minDate, f = d.maxDate, m = d.disabledKeyboardNavigation, g = d.showWeekPicker, y = d.shouldCloseOnSelect, b = d.locale, D = d.calendarStartDay, x = d.adjustDateOnChange, S = d.inline;
        if ((i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, a), !m) {
          var M = a.key, _ = a.shiftKey, k = re(e.state.preSelection), C = function(K, Y) {
            var j = Y;
            switch (K) {
              case O.ArrowRight:
                j = g ? yn(Y, 1) : $e(Y, 1);
                break;
              case O.ArrowLeft:
                j = g ? Uo(Y) : Qp(Y);
                break;
              case O.ArrowUp:
                j = Uo(Y);
                break;
              case O.ArrowDown:
                j = yn(Y, 1);
                break;
              case O.PageUp:
                j = _ ? nr(Y, 1) : Rt(Y, 1);
                break;
              case O.PageDown:
                j = _ ? at(Y, 1) : ze(Y, 1);
                break;
              case O.Home:
                j = yt(Y, b, D);
                break;
              case O.End:
                j = Dh(Y);
                break;
            }
            return j;
          }, P = function(K, Y) {
            for (var j = 40, W = K, q = !1, fe = 0, he = C(K, Y); !q; ) {
              if (fe >= j) {
                he = Y;
                break;
              }
              p && he < p && (W = O.ArrowRight, he = Le(p, e.props) ? C(W, he) : p), f && he > f && (W = O.ArrowLeft, he = Le(f, e.props) ? C(W, he) : f), Le(he, e.props) ? ((W === O.PageUp || W === O.Home) && (W = O.ArrowRight), (W === O.PageDown || W === O.End) && (W = O.ArrowLeft), he = C(W, he)) : q = !0, fe++;
            }
            return he;
          };
          if (M === O.Enter) {
            a.preventDefault(), e.handleSelect(k, a), !y && e.setPreSelection(k);
            return;
          } else if (M === O.Escape) {
            a.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (s = e.props).onInputError) === null || c === void 0 || c.call(s, { code: 1, msg: ua });
            return;
          }
          var I = null;
          switch (M) {
            case O.ArrowLeft:
            case O.ArrowRight:
            case O.ArrowUp:
            case O.ArrowDown:
            case O.PageUp:
            case O.PageDown:
            case O.Home:
            case O.End:
              I = P(M, k);
              break;
          }
          if (!I) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: ua });
            return;
          }
          if (a.preventDefault(), e.setState({ lastPreSelectChange: da }), x && e.setSelected(I), e.setPreSelection(I), S) {
            var T = Ee(k), L = Ee(I), $ = G(k), B = G(I);
            T !== L || $ !== B ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(a) {
        var o = a.key;
        o === O.Escape && (a.preventDefault(), e.sendFocusBackToInput());
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
        return !e.props.inline && !e.isCalendarOpen() ? null : w.createElement(tm, Z({ showMonthYearDropdown: void 0, ref: function(i) {
          e.calendar = i;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (a = e.props.dateFormatCalendar) !== null && a !== void 0 ? a : n.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Nh(e.modifyHolidays()), outsideClickIgnoreClass: xi, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : n.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var a = e.props, o = a.dateFormat, i = o === void 0 ? n.defaultProps.dateFormat : o, s = a.locale, c = e.props.showTimeInput || e.props.showTimeSelect, l = c ? "PPPPp" : "PPPP", u;
        return e.props.selectsRange ? u = "Selected start date: ".concat(Ne(e.props.startDate, {
          dateFormat: l,
          locale: s
        }), ". ").concat(e.props.endDate ? "End date: " + Ne(e.props.endDate, {
          dateFormat: l,
          locale: s
        }) : "") : e.props.showTimeSelectOnly ? u = "Selected time: ".concat(Ne(e.props.selected, { dateFormat: i, locale: s })) : e.props.showYearPicker ? u = "Selected year: ".concat(Ne(e.props.selected, { dateFormat: "yyyy", locale: s })) : e.props.showMonthYearPicker ? u = "Selected month: ".concat(Ne(e.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : e.props.showQuarterYearPicker ? u = "Selected quarter: ".concat(Ne(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : u = "Selected date: ".concat(Ne(e.props.selected, {
          dateFormat: l,
          locale: s
        })), w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var a, o, i, s = De(e.props.className, (a = {}, a[xi] = e.state.open, a)), c = e.props.customInput || w.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, p = d === void 0 ? n.defaultProps.dateFormat : d, f = u.locale, m = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? vh(e.props.startDate, e.props.endDate, {
          dateFormat: p,
          locale: f
        }) : e.props.selectsMultiple ? yh((i = e.props.selectedDates) !== null && i !== void 0 ? i : [], {
          dateFormat: p,
          locale: f
        }) : Ne(e.props.selected, {
          dateFormat: p,
          locale: f
        });
        return Oi(c, (o = {}, o[l] = function(g) {
          e.input = g;
        }, o.value = m, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = De(c.props.className, s), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var a = e.props, o = a.isClearable, i = a.disabled, s = a.selected, c = a.startDate, l = a.endDate, u = a.clearButtonTitle, d = a.clearButtonClassName, p = d === void 0 ? "" : d, f = a.ariaLabelClose, m = f === void 0 ? "Close" : f, g = a.selectedDates;
        return o && (s != null || c != null || l != null || g != null && g.length) ? w.createElement("button", { type: "button", className: De("react-datepicker__close-icon", p, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": m, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
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
      t.inline && cm(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: mi(this.props.highlightDates)
      }), !e.focused && !Pt(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (a = this.props).onCalendarOpen) === null || o === void 0 || o.call(a)), e.open === !0 && this.state.open === !1 && ((s = (i = this.props).onCalendarClose) === null || s === void 0 || s.call(i)));
    }, n.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, a = t.icon, o = t.calendarIconClassname, i = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), w.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && w.createElement(rm, Z({ icon: a, className: De(i, !i && o, c && "react-datepicker-ignore-onclickoutside") }, s ? {
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
          cc,
          { enableTabLoop: this.props.enableTabLoop },
          w.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = w.createElement(sc, Z({ portalId: this.props.portalId }, this.props), e)), w.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return w.createElement(sm, Z({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, n;
  }(we)
), um = "input", da = "navigate";
const dm = F.div`
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
`, pm = F.button`
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
`, fm = F.div`
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
`, hm = w.forwardRef(
  ({ value: r, onClick: n }, t) => /* @__PURE__ */ v.jsxs(pm, { onClick: n, ref: t, children: [
    r === "" || r === void 0 ? "날짜입력" : r,
    /* @__PURE__ */ v.jsx(nu, { style: { padding: "5px" } })
  ] })
), lc = Mr(
  ({ value: r, onChange: n, minDate: t, maxDate: e }, a) => {
    const [o, i] = xe(r ?? null), [s, c] = xe({ top: 0, left: 0, width: 0 }), l = Be(null);
    return Me(() => {
      i(r ?? null);
    }, [r]), Me(() => {
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
    }, [o]), Ti(a, () => l.current, []), /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
      /* @__PURE__ */ v.jsx(_t, {}),
      /* @__PURE__ */ v.jsx(dm, { ref: l, children: /* @__PURE__ */ v.jsx(
        lm,
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
          customInput: /* @__PURE__ */ v.jsx(hm, {}),
          popperContainer: ({ children: u }) => Na(
            /* @__PURE__ */ v.jsx(
              fm,
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
lc.displayName = "SingleDatePicker";
const mm = ({
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
    tn,
    {
      $isEdited: e,
      onDoubleClick: () => c && u && o(n.rowKey, r.key, a),
      children: t ? (
        /* ✅ cellType이 있으면 자동 UI 적용 */
        r.cellType ? ki(
          r,
          n,
          l,
          i,
          s,
          !0,
          a
        ) : /* @__PURE__ */ v.jsx(
          en,
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
        ki(
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
}, ki = (r, n, t, e, a, o, i) => {
  var c, l;
  const s = new KeyboardEvent("keydown", { key: "Enter" });
  switch ((c = r.cellType) == null ? void 0 : c.type) {
    case "Button":
      return o ? /* @__PURE__ */ v.jsx(xr, { disabled: !0, children: r.cellType.content }) : /* @__PURE__ */ v.jsx(xr, { id: n.rowKey, children: r.cellType.content });
    case "Check":
      return o ? /* @__PURE__ */ v.jsx(
        Ss,
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
        i ? /* @__PURE__ */ v.jsx(ja, {}) : i !== n[r.key] ? "UnChecked" : ""
      );
    case "DropDownBox":
      const [u, d] = xe(n[r.key]);
      return o ? /* @__PURE__ */ v.jsx(
        Wa,
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
      const [p, f] = xe(n[r.key]);
      return o ? /* @__PURE__ */ v.jsx(
        lc,
        {
          value: p,
          onChange: (m) => {
            e(m ? m.toLocaleDateString("sv-SE") : ""), f(m ? m.toLocaleDateString("sv-SE") : ""), a(s, n);
          }
        }
      ) : /* @__PURE__ */ v.jsx(v.Fragment, { children: i instanceof Date ? i.toLocaleDateString("sv-SE") : i });
    default:
      return /* @__PURE__ */ v.jsx(v.Fragment, { children: n[r.key] });
  }
}, gm = ({
  row: r,
  rowNum: n,
  selectedRows: t,
  showRowNumCol: e,
  showRowCheckboxCol: a,
  showActionColumn: o,
  onToggleRow: i,
  reducer: s
}) => /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
  o && /* @__PURE__ */ v.jsx(tn, { children: s.state.editedRows[r.rowKey] && /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
    /* @__PURE__ */ v.jsx(Ds, { onClick: () => s.applyRowChanges(r.rowKey), children: /* @__PURE__ */ v.jsx(ja, { size: 12 }) }),
    /* @__PURE__ */ v.jsx(xs, { onClick: () => s.resetRowChanges(r.rowKey), children: /* @__PURE__ */ v.jsx(hs, { size: 12 }) })
  ] }) }),
  e && /* @__PURE__ */ v.jsx(tn, { children: n }),
  a && /* @__PURE__ */ v.jsx(tn, { children: /* @__PURE__ */ v.jsx(Ss, { checked: t.has(r), onChange: () => i(r) }) })
] }), vm = ({
  row: r,
  columns: n,
  level: t,
  isExpanded: e,
  onToggleGroupExpand: a,
  showRowNumCol: o,
  showRowCheckboxCol: i
}) => {
  const s = r.__groupKey;
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: /* @__PURE__ */ v.jsx(Du, { onClick: () => a(s), children: /* @__PURE__ */ v.jsx(xu, { colSpan: n.length + (o ? 1 : 0) + (i ? 1 : 0), children: /* @__PURE__ */ v.jsxs(ku, { style: { paddingLeft: `${t * 16}px` }, children: [
    /* @__PURE__ */ v.jsx("span", { children: e ? /* @__PURE__ */ v.jsx(cs, {}) : /* @__PURE__ */ v.jsx(ls, {}) }),
    /* @__PURE__ */ v.jsxs("span", { children: [
      s,
      " (",
      r.__children.length,
      ")"
    ] })
  ] }) }) }) });
}, ym = ({
  columns: r,
  showRowNumCol: n,
  showRowCheckboxCol: t,
  selectedRows: e,
  isCellEditable: a,
  onToggleRow: o,
  onToggleGroupExpand: i,
  reducer: s,
  style: c,
  bodyHeight: l
}) => {
  const [u, d] = xe(null), p = 35, f = Mi(() => {
    const _ = (k) => k.reduce((C, P) => {
      if (ra(P)) {
        const I = P, T = s.state.group.expanded.has(I.__groupKey);
        return C + 1 + (T ? _(I.__children) : 0);
      } else
        return C + 1;
    }, 0);
    return _(s.state.data);
  }, [s.state.data, s.state.group.expanded]), m = Math.max(0, l - f * p), g = (_, k, C) => {
    s.setEditingCell(_, k, C);
  }, y = (_, k) => {
    _.preventDefault(), d({ x: _.clientX, y: _.clientY, row: k });
  }, b = () => d(null), D = (_) => {
    if (!s.state.editingCell) return;
    const { rowKey: k, colKey: C } = s.state.editingCell;
    s.setEditingCell(k, C, _);
    const P = s.state.originalData.find((T) => T.rowKey === k);
    (P ? P[C] : void 0) !== _ ? s.editCell(k, C, _) : s.removeEditedCell(k, C);
  }, x = (_, k) => {
    if (!s.state.editingCell) return;
    const { rowKey: C, colKey: P } = s.state.editingCell, I = r.findIndex((T) => T.key === P);
    if (_.key === "Enter" && s.clearEditingCell(), _.key === "Tab") {
      _.preventDefault();
      for (let T = I + 1; T < r.length; T++)
        if (r[T].editable !== !1) {
          s.clearEditingCell(), s.setEditingCell(C, r[T].key, k[r[T].key]);
          return;
        }
      s.clearEditingCell();
    }
  }, S = (_, k) => {
    const C = s.state.group.expanded.has(_.__groupKey);
    let P = 0;
    return /* @__PURE__ */ v.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        vm,
        {
          row: _,
          columns: r,
          level: k,
          isExpanded: C,
          onToggleGroupExpand: i,
          showRowNumCol: n,
          showRowCheckboxCol: t
        }
      ),
      C && _.__children.map(
        (I) => ra(I) ? S(I, k + 1) : M(I, k + 1, ++P)
      )
    ] }, _.__groupKey);
  }, M = (_, k, C) => {
    const P = Object.keys(s.state.editedRows).length > 0;
    return /* @__PURE__ */ v.jsxs(bu, { onContextMenu: (I) => y(I, _), children: [
      /* @__PURE__ */ v.jsx(
        gm,
        {
          row: _,
          rowNum: C,
          selectedRows: e,
          showRowNumCol: n,
          showRowCheckboxCol: t,
          showActionColumn: P,
          onToggleRow: o,
          reducer: s
        }
      ),
      r.map((I) => {
        var B, K, Y, j, W, q;
        const T = ((B = s.state.editedRows[_.rowKey]) == null ? void 0 : B[I.key]) !== void 0, L = ((K = s.state.editingCell) == null ? void 0 : K.rowKey) === _.rowKey && ((Y = s.state.editingCell) == null ? void 0 : Y.colKey) === I.key, $ = L ? (j = s.state.editingCell) == null ? void 0 : j.value : ((W = s.state.editedRows[_.rowKey]) == null ? void 0 : W[I.key]) ?? _[I.key];
        return /* @__PURE__ */ v.jsx(
          mm,
          {
            col: I,
            row: _,
            isEditing: L,
            isEdited: T,
            cellValue: $,
            handleCellDoubleClick: g,
            handleCellChange: D,
            handleKeyDown: x,
            isCellEditable: a,
            cellprops: (q = I.cellType) == null ? void 0 : q.cellProps
          },
          I.key
        );
      })
    ] }, _.rowKey);
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(wu, { style: { ...c }, children: [
      s.state.data.map(
        (_, k) => ra(_) ? S(_, 0) : M(_, 0, k + 1)
      ),
      m > 0 && /* @__PURE__ */ v.jsx(_u, { children: /* @__PURE__ */ v.jsx(
        Su,
        {
          colSpan: r.length + (n ? 1 : 0) + (t ? 1 : 0),
          style: { height: m }
        }
      ) })
    ] }),
    s.state.isCellEditable && /* @__PURE__ */ v.jsx(Nu, { menuPosition: u, onClose: b, reducer: s })
  ] });
}, wm = (r, n, t, e, a) => {
  const o = ka(r);
  return {
    originalData: [...o],
    data: n ? gn(o, 1, t) : o,
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
function bm(r, n) {
  switch (n.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...r,
        sortedColumn: n.column,
        sortDirection: n.direction,
        data: n.direction === null ? [...r.originalData] : _s(r.originalData, n.column, n.direction)
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
        data: mn(r.originalData, t)
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
        data: t.length > 0 ? mn(r.originalData, t, e) : [...r.originalData]
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
      ), e = r.pagingable ? gn(t, r.pagenate.currentPage, r.pagenate.pageSize, r) : t;
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
        rowKey: ks(r.originalData.length)
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
    /** 🔹 Grid Data 변경경 */
    case "RESET_DATA":
      return {
        ...r,
        originalData: n.payload,
        // ✅ 원본 데이터 업데이트
        data: r.pagingable ? gn(n.payload, r.pagenate.currentPage, r.pagenate.pageSize) : n.payload,
        // ✅ 페이징 시 빈 Set 사용
        editedRows: {},
        // ✅ 수정된 데이터 초기화
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    // ✅ 새로운 상태 적용
    default:
      return r;
  }
}
function Dm(r, n = !1, t = 10, e = !0, a = !0) {
  const [o, i] = Oa(bm, wm(r, n, t, e, a));
  return {
    state: o,
    updateGridState: () => {
      i({
        type: "SET_GRID_STATE",
        state: tt(o)
      });
    },
    setSort: (T, L) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          sortedColumn: T,
          sortDirection: L
        })
      });
    },
    setFilter: (T) => {
      const L = { ...o.filters, ...T };
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          filters: L
        })
      });
    },
    clearFilter: (T) => {
      const L = { ...o.filters };
      delete L[T], i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          filters: L
        })
      });
    },
    setGroup: (T) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          group: {
            ...o.group,
            column: [...o.group.column, T]
          }
        })
      });
    },
    removeGroup: (T) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          group: {
            ...o.group,
            column: o.group.column.filter((L) => L !== T)
          }
        })
      });
    },
    expandGroup: (T) => {
      const L = new Set(o.group.expanded);
      L.has(T) ? L.delete(T) : L.add(T), i({
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
    toggleRow: (T) => {
      i({ type: "TOGGLE_ROW", row: T });
    },
    setPage: (T) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          pagenate: {
            ...o.pagenate,
            currentPage: T
          }
        })
      });
    },
    setPageSize: (T) => {
      i({
        type: "SET_GRID_STATE",
        state: tt({
          ...o,
          pagenate: {
            ...o.pagenate,
            pageSize: T
          }
        })
      });
    },
    editCell: (T, L, $) => {
      i({ type: "EDIT_CELL", payload: { rowKey: T, colKey: L, newValue: $ } });
    },
    setEditingCell: (T, L, $) => {
      i({ type: "SET_EDITING_CELL", payload: { rowKey: T, colKey: L, value: $ } });
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
    removeEditedCell: (T, L) => {
      i({ type: "REMOVE_EDITED_CELL", payload: { rowKey: T, colKey: L } });
    },
    applyRowChanges: (T) => {
      i({ type: "APPLY_ROW_CHANGES", payload: { rowKey: T } });
    },
    resetRowChanges: (T) => {
      i({ type: "RESET_ROW_CHANGES", payload: { rowKey: T } });
    },
    addRow: () => {
      i({ type: "ADD_ROW" });
    },
    resetData: (T) => {
      i({ type: "RESET_DATA", payload: T });
    }
  };
}
const xm = F.div`  
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${(r) => r.theme.colors.font};
  background-color: ${(r) => r.theme.colors.second};
`, km = F.span`
  font-size: 14px;
  color: ${(r) => r.theme.colors.font};
`, _m = F.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: visible;
`, Sm = F.span`
  font-size: 14px;
  color: ${(r) => r.theme.colors.font};
`, pa = F.button`
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
`, Cm = ({
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
  return /* @__PURE__ */ v.jsxs(xm, { style: i, children: [
    /* @__PURE__ */ v.jsxs(km, { children: [
      "Total ",
      /* @__PURE__ */ v.jsx("b", { children: t }),
      " items | Page ",
      r,
      " / ",
      n
    ] }),
    /* @__PURE__ */ v.jsxs(_m, { children: [
      /* @__PURE__ */ v.jsx(Sm, { children: "Page Size:" }),
      /* @__PURE__ */ v.jsx(
        Wa,
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
      /* @__PURE__ */ v.jsx(pa, { onClick: () => r > 1 && a(r - 1), disabled: r === 1, children: /* @__PURE__ */ v.jsx(au, { size: 14 }) }),
      Array.from({ length: n }, (c, l) => l + 1).map((c) => /* @__PURE__ */ v.jsx(pa, { $active: c === r, onClick: () => a(c), children: c }, c)),
      /* @__PURE__ */ v.jsx(pa, { onClick: () => r < n && a(r + 1), disabled: r === n, children: /* @__PURE__ */ v.jsx(ls, { size: 14 }) })
    ] })
  ] });
}, Bm = ({
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
  const u = Dm(
    ka(n),
    o,
    i == null ? void 0 : i.pageSize,
    l,
    s
  ), { pagenate: d } = u.state, p = n.length, f = Math.ceil(p / d.pageSize), m = Be(null), [g, y] = xe(0);
  Me(() => {
    u.resetData(ka(n));
  }, [n]), Ra(() => {
    if (!m.current) return;
    const D = () => {
      var C;
      const S = ((C = m.current) == null ? void 0 : C.clientHeight) || 0, M = 40, _ = o ? 40 : 0, k = S - M - _;
      y(k > 0 ? k : 0);
    }, x = new ResizeObserver(D);
    return x.observe(m.current), D(), () => x.disconnect();
  }, [o]);
  const b = (D) => {
    u.clearEditingCell();
  };
  return /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsxs(du, { ref: m, children: [
      /* @__PURE__ */ v.jsx(pu, { onScroll: b, children: /* @__PURE__ */ v.jsxs(fu, { children: [
        /* @__PURE__ */ v.jsx(
          Ou,
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
          ym,
          {
            reducer: u,
            columns: r,
            isCellEditable: s,
            showRowNumCol: e,
            showRowCheckboxCol: a,
            selectedRows: u.state.selectedRows,
            onToggleRow: u.toggleRow,
            onToggleGroupExpand: u.expandGroup,
            style: c.body,
            bodyHeight: g
          }
        )
      ] }) }),
      o && /* @__PURE__ */ v.jsx(
        Cm,
        {
          currentPage: d.currentPage,
          totalPages: f,
          onPageChange: u.setPage,
          totalDataCount: n.length,
          pageSize: u.state.pagenate.pageSize,
          onPageSizeChange: u.setPageSize,
          style: c.pagination
        }
      )
    ] })
  ] });
}, Em = ({ label: r, isRequired: n, toolTip: t, style: e }) => /* @__PURE__ */ v.jsxs(
  uu,
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
          children: /* @__PURE__ */ v.jsx(su, {})
        }
      )
    ]
  }
), zm = Mr(
  ({ apply: r, children: n, ...t }, e) => /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
    /* @__PURE__ */ v.jsx(_t, {}),
    /* @__PURE__ */ v.jsx(
      An,
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
), Mm = Mr(
  ({
    apply: r,
    onChange: n,
    value: t,
    textType: e,
    ...a
  }, o) => {
    const i = e === "rangeNumber", [s, c] = xe(
      typeof t == "string" ? t : ""
    ), [l, u] = xe({
      min: "",
      max: ""
    });
    Me(() => {
      i ? typeof t == "object" && t !== null && "min" in t && "max" in t && u({
        min: String(t.min),
        max: String(t.max)
      }) : typeof t == "string" && c(t);
    }, [t, i]);
    const d = (f) => {
      const m = f.target.value;
      c(m), n == null || n({ target: { value: m } });
    }, p = Be(l);
    return Me(() => {
      const f = p.current;
      if (l.min !== f.min || l.max !== f.max) {
        const m = parseFloat(l.min), g = parseFloat(l.max);
        n == null || n({
          target: {
            value: {
              min: isNaN(m) ? 0 : m,
              max: isNaN(g) ? 0 : g
            }
          }
        }), p.current = l;
      }
    }, [l, n]), /* @__PURE__ */ v.jsxs(xt, { theme: kt, children: [
      /* @__PURE__ */ v.jsx(_t, {}),
      i ? /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
        /* @__PURE__ */ v.jsx(
          en,
          {
            type: "number",
            placeholder: "min",
            value: l.min,
            onChange: (f) => {
              const m = f.target.value;
              u((g) => ({ ...g, min: m }));
            },
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ v.jsx("span", { children: "~" }),
        /* @__PURE__ */ v.jsx(
          en,
          {
            type: "number",
            placeholder: "max",
            value: l.max,
            onChange: (f) => {
              const m = f.target.value;
              u((g) => ({ ...g, max: m }));
            },
            style: { flex: 1 }
          }
        )
      ] }) : /* @__PURE__ */ v.jsx(
        en,
        {
          ...a,
          ref: o,
          type: e ?? "text",
          style: { ...a.style },
          value: s,
          onChange: d
        }
      )
    ] });
  }
);
Mm.displayName = "TextBox";
const _i = ["1fr", "1fr"], Vm = ({
  rowSizes: r = _i,
  colSizes: n = _i,
  children: t,
  gap: e = 10,
  border: a
}) => {
  var f;
  const [o, i] = xe(r), [s, c] = xe(n), [l, u] = xe(window.innerHeight), [d, p] = xe(window.innerWidth);
  return Me(() => {
    const m = () => {
      u(window.innerHeight), p(window.innerWidth), window.innerWidth < 768 ? (c(["1fr"]), i(r.map(() => "auto"))) : (c(n), i(r));
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
        children: (f = w.Children) == null ? void 0 : f.toArray(t).filter((m) => {
          if (!w.isValidElement(m)) return !1;
          const [g, y] = m.props.startPosition;
          return g <= o.length && y <= s.length;
        })
      }
    )
  ] });
}, Pm = F.div`
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  font-weight: 600;
  color: #333;

`, Tm = F.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;  
`, Om = F.div`
  width: 4px;
  height: 20px;
  background-color: #6366f1; // 보라색 (Tailwind 기준: indigo-500)
  border-radius: 2px;
`, Rm = F.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`, Nm = () => {
  const r = "0123456789ABCDEF";
  let n = "#";
  for (let t = 0; t < 6; t++)
    n += r[Math.floor(Math.random() * 16)];
  return n;
}, uc = ({
  startPosition: r,
  endPosition: n,
  children: t,
  level: e,
  border: a,
  transparent: o = !1,
  title: i = void 0
}) => {
  const [s, c] = r, [l, u] = n, d = Nm();
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: {
        gridRow: `${s} / ${l + 1}`,
        gridColumn: `${c} / ${u + 1}`,
        border: a,
        background: t || o ? "transparent" : d,
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
      children: [
        i && /* @__PURE__ */ v.jsxs(Tm, { children: [
          /* @__PURE__ */ v.jsx(Om, {}),
          /* @__PURE__ */ v.jsx(Rm, { children: i })
        ] }),
        t || !o && `${e}Lv [${s}, ${c}] ~ [${l}, ${u}]`
      ]
    }
  );
}, Si = ["1fr", "1fr"], Im = ({
  rowSizes: r = Si,
  colSizes: n = Si,
  children: t,
  gap: e = 10,
  border: a,
  level: o = 0,
  title: i = void 0
}) => /* @__PURE__ */ v.jsxs("div", { style: { width: "100%", height: "100%" }, children: [
  i && /* @__PURE__ */ v.jsx(Pm, { children: i }),
  /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateRows: r.join(" "),
        gridTemplateColumns: n.join(" "),
        gap: `${e}px`,
        width: "100%",
        height: "100%",
        border: a
      },
      children: w.Children.map(t, (s) => w.isValidElement(s) && s.type === uc ? w.cloneElement(s, { level: o + 1 }) : s)
    }
  )
] }), Ci = (r) => r.reduce((n, t) => (n[t.key] = "", n), {}), Lm = (r, n) => {
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
function Am(r) {
  const [n, t] = Oa(Lm, Ci(r));
  return {
    state: n,
    setFieldValue: (o) => {
      t({ type: "UPDATE_FIELD", payload: o });
    },
    resetForm: () => {
      t({ type: "RESET_FORM", defaultState: Ci(r) });
    }
  };
}
const Ym = (r = "필수 입력 항목입니다.") => (n) => n ? void 0 : r, Km = (r, n) => (t) => (t == null ? void 0 : t.length) >= r ? void 0 : n || `${r}자 이상 입력해주세요`, Gm = (r = "이메일 형식이 올바르지 않습니다.") => (n) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) ? void 0 : r, Qm = (r = "숫자만 입력 가능합니다.") => (n) => n == null || n === "" ? void 0 : isNaN(Number(n)) ? r : void 0, qm = (r, n) => (t) => (t == null ? void 0 : t.length) <= r ? void 0 : n || `${r}자 이하로 입력해주세요`, Um = (r = "유효한 날짜 형식이 아닙니다.") => (n) => n instanceof Date && !isNaN(n.getTime()) ? void 0 : r, Xm = (r, n = "허용되지 않은 값입니다.") => (t) => r.includes(t) ? void 0 : n, Zm = (r, n = "유효하지 않은 값입니다.") => (t) => r(t) ? void 0 : n, Ei = (r, n) => {
  const t = {};
  return r.forEach((e) => {
    const a = n[e.key];
    let o;
    e.isRequired && (o = Ym(e.requiredMessage)(a)), !o && e.validate && (o = e.validate(a)), o && (t[e.key] = o);
  }), t;
}, Jm = ({
  title: r,
  division: n,
  formFields: t,
  isActivateInitialButton: e = !0,
  onSubmit: a,
  onSerach: o
}) => {
  const i = Am(t), [s, c] = xe({}), l = Array.from({ length: n.row }, () => "1fr"), u = Array.from({ length: n.col }, () => "1fr");
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    r && /* @__PURE__ */ v.jsx(
      "div",
      {
        style: {
          marginBottom: "16px",
          borderBottom: "1px solid #ccc",
          fontSize: "15px",
          fontWeight: 600,
          color: "#333"
        },
        children: r
      }
    ),
    /* @__PURE__ */ v.jsx(Im, { rowSizes: l, colSizes: u, gap: 10, children: t.map((d) => {
      const [p, f] = d.position, m = d.span || { row: 1, col: 1 }, g = [p, f], y = [p + m.row - 1, f + m.col - 1], b = i.state[d.key], D = w.isValidElement(d.component) ? w.cloneElement(d.component, {
        value: b,
        onChange: (x) => {
          var _, k;
          const S = ((_ = x == null ? void 0 : x.target) == null ? void 0 : _.value) ?? (x == null ? void 0 : x.key) ?? x;
          i.setFieldValue({ key: d.key, value: S });
          const M = (k = d.component.props) == null ? void 0 : k.onChange;
          typeof M == "function" && M(x);
        },
        onKeyDown: d.filter,
        disabled: d.disabled,
        readOnly: d.isReadOnly
      }) : null;
      return /* @__PURE__ */ v.jsxs(uc, { startPosition: g, endPosition: y, children: [
        /* @__PURE__ */ v.jsx(
          Em,
          {
            label: d.label,
            isRequired: d.isRequired,
            toolTip: d.toolTip
          }
        ),
        D,
        s[d.key] && /* @__PURE__ */ v.jsx("div", { style: { color: "red", fontSize: 12 }, children: s[d.key] })
      ] }, d.key);
    }) }),
    /* @__PURE__ */ v.jsxs(cu, { children: [
      a && /* @__PURE__ */ v.jsx(
        xr,
        {
          type: "button",
          style: { minWidth: 80, height: 36 },
          onClick: () => {
            const d = Ei(t, i.state);
            c(d), Object.keys(d).length === 0 && (a == null || a(i.state));
          },
          children: "제출"
        }
      ),
      o && /* @__PURE__ */ v.jsx(
        xr,
        {
          type: "button",
          style: { minWidth: 80, height: 36 },
          onClick: () => {
            const d = Ei(t, i.state);
            c(d), Object.keys(d).length === 0 && o(i.state);
          },
          children: "검색"
        }
      ),
      e && /* @__PURE__ */ v.jsx(
        xr,
        {
          type: "button",
          style: { minWidth: 80, height: 36 },
          onClick: () => i.resetForm(),
          children: "초기화"
        }
      )
    ] })
  ] });
}, eg = (r) => {
  const n = ["Backspace", "Tab", "ArrowLeft", "ArrowRight"];
  !/^[0-9]$/.test(r.key) && !n.includes(r.key) && r.preventDefault();
};
export {
  zm as AvartarButton,
  xr as Button,
  Ss as CheckBox,
  Wa as DropDownBox,
  Jm as Form,
  Bm as Grid,
  Em as Label,
  Im as Layout,
  Vm as PageDesigner,
  uc as Section,
  lc as SingleDatePicker,
  Mm as TextBox,
  Zm as custom,
  eg as filterNumber,
  Um as isDate,
  Gm as isEmail,
  Xm as isIn,
  Qm as isNumber,
  Ym as isRequired,
  qm as maxLength,
  Km as minLength
};
