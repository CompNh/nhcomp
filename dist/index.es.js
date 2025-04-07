var Ri = Object.defineProperty;
var Ni = (r, a, t) => a in r ? Ri(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var R = (r, a, t) => Ni(r, typeof a != "symbol" ? a + "" : a, t);
import * as $ from "react";
import y, { useRef as Ae, useEffect as we, useState as he, forwardRef as Kt, useReducer as wn, useImperativeHandle as Ua, useLayoutEffect as bn, cloneElement as Xa, createRef as Je, Component as de, useCallback as Li, createElement as Ii, useMemo as Yi } from "react";
import V, { styled as ht, createGlobalStyle as Fi, ThemeProvider as rt } from "styled-components";
import * as Jt from "xlsx";
import Ai from "jspdf";
import ji from "jspdf-autotable";
import * as Wi from "react-dom";
import Za, { createPortal as Dn } from "react-dom";
var er = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function Hi() {
  if (ta) return Ot;
  ta = 1;
  var r = y, a = Symbol.for("react.element"), t = Symbol.for("react.fragment"), e = Object.prototype.hasOwnProperty, n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var u, d = {}, f = null, h = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c) e.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: a, type: s, key: f, ref: h, props: d, _owner: n.current };
  }
  return Ot.Fragment = t, Ot.jsx = i, Ot.jsxs = i, Ot;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function $i() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && function() {
    var r = y, a = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function w(p) {
      if (p === null || typeof p != "object")
        return null;
      var k = m && p[m] || p[v];
      return typeof k == "function" ? k : null;
    }
    var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(p) {
      {
        for (var k = arguments.length, O = new Array(k > 1 ? k - 1 : 0), A = 1; A < k; A++)
          O[A - 1] = arguments[A];
        x("error", p, O);
      }
    }
    function x(p, k, O) {
      {
        var A = b.ReactDebugCurrentFrame, Z = A.getStackAddendum();
        Z !== "" && (k += "%s", O = O.concat([Z]));
        var re = O.map(function(G) {
          return String(G);
        });
        re.unshift("Warning: " + k), Function.prototype.apply.call(console[p], console, re);
      }
    }
    var E = !1, N = !1, C = !1, S = !1, _ = !1, P;
    P = Symbol.for("react.module.reference");
    function L(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === e || p === o || _ || p === n || p === l || p === u || S || p === h || E || N || C || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === P || p.getModuleId !== void 0));
    }
    function M(p, k, O) {
      var A = p.displayName;
      if (A)
        return A;
      var Z = k.displayName || k.name || "";
      return Z !== "" ? O + "(" + Z + ")" : O;
    }
    function Y(p) {
      return p.displayName || "Context";
    }
    function H(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case e:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var k = p;
            return Y(k) + ".Consumer";
          case i:
            var O = p;
            return Y(O._context) + ".Provider";
          case c:
            return M(p, p.render, "ForwardRef");
          case d:
            var A = p.displayName || null;
            return A !== null ? A : H(p.type) || "Memo";
          case f: {
            var Z = p, re = Z._payload, G = Z._init;
            try {
              return H(G(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, z = 0, F, W, j, ne, De, xe, An;
    function jn() {
    }
    jn.__reactDisabledLog = !0;
    function oi() {
      {
        if (z === 0) {
          F = console.log, W = console.info, j = console.warn, ne = console.error, De = console.group, xe = console.groupCollapsed, An = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: jn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        z++;
      }
    }
    function ii() {
      {
        if (z--, z === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, p, {
              value: F
            }),
            info: B({}, p, {
              value: W
            }),
            warn: B({}, p, {
              value: j
            }),
            error: B({}, p, {
              value: ne
            }),
            group: B({}, p, {
              value: De
            }),
            groupCollapsed: B({}, p, {
              value: xe
            }),
            groupEnd: B({}, p, {
              value: An
            })
          });
        }
        z < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Kr = b.ReactCurrentDispatcher, zr;
    function qt(p, k, O) {
      {
        if (zr === void 0)
          try {
            throw Error();
          } catch (Z) {
            var A = Z.stack.trim().match(/\n( *(at )?)/);
            zr = A && A[1] || "";
          }
        return `
` + zr + p;
      }
    }
    var Qr = !1, Ut;
    {
      var si = typeof WeakMap == "function" ? WeakMap : Map;
      Ut = new si();
    }
    function Wn(p, k) {
      if (!p || Qr)
        return "";
      {
        var O = Ut.get(p);
        if (O !== void 0)
          return O;
      }
      var A;
      Qr = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = Kr.current, Kr.current = null, oi();
      try {
        if (k) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (ke) {
              A = ke;
            }
            Reflect.construct(p, [], G);
          } else {
            try {
              G.call();
            } catch (ke) {
              A = ke;
            }
            p.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            A = ke;
          }
          p();
        }
      } catch (ke) {
        if (ke && A && typeof ke.stack == "string") {
          for (var Q = ke.stack.split(`
`), ge = A.stack.split(`
`), se = Q.length - 1, ue = ge.length - 1; se >= 1 && ue >= 0 && Q[se] !== ge[ue]; )
            ue--;
          for (; se >= 1 && ue >= 0; se--, ue--)
            if (Q[se] !== ge[ue]) {
              if (se !== 1 || ue !== 1)
                do
                  if (se--, ue--, ue < 0 || Q[se] !== ge[ue]) {
                    var Ce = `
` + Q[se].replace(" at new ", " at ");
                    return p.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", p.displayName)), typeof p == "function" && Ut.set(p, Ce), Ce;
                  }
                while (se >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        Qr = !1, Kr.current = re, ii(), Error.prepareStackTrace = Z;
      }
      var vt = p ? p.displayName || p.name : "", ot = vt ? qt(vt) : "";
      return typeof p == "function" && Ut.set(p, ot), ot;
    }
    function ci(p, k, O) {
      return Wn(p, !1);
    }
    function li(p) {
      var k = p.prototype;
      return !!(k && k.isReactComponent);
    }
    function Xt(p, k, O) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Wn(p, li(p));
      if (typeof p == "string")
        return qt(p);
      switch (p) {
        case l:
          return qt("Suspense");
        case u:
          return qt("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return ci(p.render);
          case d:
            return Xt(p.type, k, O);
          case f: {
            var A = p, Z = A._payload, re = A._init;
            try {
              return Xt(re(Z), k, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Tt = Object.prototype.hasOwnProperty, Hn = {}, $n = b.ReactDebugCurrentFrame;
    function Zt(p) {
      if (p) {
        var k = p._owner, O = Xt(p.type, p._source, k ? k.type : null);
        $n.setExtraStackFrame(O);
      } else
        $n.setExtraStackFrame(null);
    }
    function ui(p, k, O, A, Z) {
      {
        var re = Function.call.bind(Tt);
        for (var G in p)
          if (re(p, G)) {
            var Q = void 0;
            try {
              if (typeof p[G] != "function") {
                var ge = Error((A || "React class") + ": " + O + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              Q = p[G](k, G, A, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              Q = se;
            }
            Q && !(Q instanceof Error) && (Zt(Z), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", O, G, typeof Q), Zt(null)), Q instanceof Error && !(Q.message in Hn) && (Hn[Q.message] = !0, Zt(Z), D("Failed %s type: %s", O, Q.message), Zt(null));
          }
      }
    }
    var di = Array.isArray;
    function Vr(p) {
      return di(p);
    }
    function fi(p) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, O = k && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return O;
      }
    }
    function pi(p) {
      try {
        return Bn(p), !1;
      } catch {
        return !0;
      }
    }
    function Bn(p) {
      return "" + p;
    }
    function Kn(p) {
      if (pi(p))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fi(p)), Bn(p);
    }
    var zn = b.ReactCurrentOwner, hi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qn, Vn;
    function mi(p) {
      if (Tt.call(p, "ref")) {
        var k = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function gi(p) {
      if (Tt.call(p, "key")) {
        var k = Object.getOwnPropertyDescriptor(p, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function vi(p, k) {
      typeof p.ref == "string" && zn.current;
    }
    function yi(p, k) {
      {
        var O = function() {
          Qn || (Qn = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        O.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function wi(p, k) {
      {
        var O = function() {
          Vn || (Vn = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        O.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var bi = function(p, k, O, A, Z, re, G) {
      var Q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: p,
        key: k,
        ref: O,
        props: G,
        // Record the component responsible for creating this element.
        _owner: re
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
        value: A
      }), Object.defineProperty(Q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(Q.props), Object.freeze(Q)), Q;
    };
    function Di(p, k, O, A, Z) {
      {
        var re, G = {}, Q = null, ge = null;
        O !== void 0 && (Kn(O), Q = "" + O), gi(k) && (Kn(k.key), Q = "" + k.key), mi(k) && (ge = k.ref, vi(k, Z));
        for (re in k)
          Tt.call(k, re) && !hi.hasOwnProperty(re) && (G[re] = k[re]);
        if (p && p.defaultProps) {
          var se = p.defaultProps;
          for (re in se)
            G[re] === void 0 && (G[re] = se[re]);
        }
        if (Q || ge) {
          var ue = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          Q && yi(G, ue), ge && wi(G, ue);
        }
        return bi(p, Q, ge, Z, A, zn.current, G);
      }
    }
    var Gr = b.ReactCurrentOwner, Gn = b.ReactDebugCurrentFrame;
    function gt(p) {
      if (p) {
        var k = p._owner, O = Xt(p.type, p._source, k ? k.type : null);
        Gn.setExtraStackFrame(O);
      } else
        Gn.setExtraStackFrame(null);
    }
    var qr;
    qr = !1;
    function Ur(p) {
      return typeof p == "object" && p !== null && p.$$typeof === a;
    }
    function qn() {
      {
        if (Gr.current) {
          var p = H(Gr.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function xi(p) {
      return "";
    }
    var Un = {};
    function ki(p) {
      {
        var k = qn();
        if (!k) {
          var O = typeof p == "string" ? p : p.displayName || p.name;
          O && (k = `

Check the top-level render call using <` + O + ">.");
        }
        return k;
      }
    }
    function Xn(p, k) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var O = ki(k);
        if (Un[O])
          return;
        Un[O] = !0;
        var A = "";
        p && p._owner && p._owner !== Gr.current && (A = " It was passed a child from " + H(p._owner.type) + "."), gt(p), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, A), gt(null);
      }
    }
    function Zn(p, k) {
      {
        if (typeof p != "object")
          return;
        if (Vr(p))
          for (var O = 0; O < p.length; O++) {
            var A = p[O];
            Ur(A) && Xn(A, k);
          }
        else if (Ur(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var Z = w(p);
          if (typeof Z == "function" && Z !== p.entries)
            for (var re = Z.call(p), G; !(G = re.next()).done; )
              Ur(G.value) && Xn(G.value, k);
        }
      }
    }
    function _i(p) {
      {
        var k = p.type;
        if (k == null || typeof k == "string")
          return;
        var O;
        if (typeof k == "function")
          O = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === d))
          O = k.propTypes;
        else
          return;
        if (O) {
          var A = H(k);
          ui(O, p.props, "prop", A, p);
        } else if (k.PropTypes !== void 0 && !qr) {
          qr = !0;
          var Z = H(k);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ci(p) {
      {
        for (var k = Object.keys(p.props), O = 0; O < k.length; O++) {
          var A = k[O];
          if (A !== "children" && A !== "key") {
            gt(p), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), gt(null);
            break;
          }
        }
        p.ref !== null && (gt(p), D("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    var Jn = {};
    function ea(p, k, O, A, Z, re) {
      {
        var G = L(p);
        if (!G) {
          var Q = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = xi();
          ge ? Q += ge : Q += qn();
          var se;
          p === null ? se = "null" : Vr(p) ? se = "array" : p !== void 0 && p.$$typeof === a ? (se = "<" + (H(p.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : se = typeof p, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, Q);
        }
        var ue = Di(p, k, O, Z, re);
        if (ue == null)
          return ue;
        if (G) {
          var Ce = k.children;
          if (Ce !== void 0)
            if (A)
              if (Vr(Ce)) {
                for (var vt = 0; vt < Ce.length; vt++)
                  Zn(Ce[vt], p);
                Object.freeze && Object.freeze(Ce);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zn(Ce, p);
        }
        if (Tt.call(k, "key")) {
          var ot = H(p), ke = Object.keys(k).filter(function(Oi) {
            return Oi !== "key";
          }), Xr = ke.length > 0 ? "{key: someKey, " + ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jn[ot + Xr]) {
            var Ti = ke.length > 0 ? "{" + ke.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xr, ot, Ti, ot), Jn[ot + Xr] = !0;
          }
        }
        return p === e ? Ci(ue) : _i(ue), ue;
      }
    }
    function Ei(p, k, O) {
      return ea(p, k, O, !0);
    }
    function Si(p, k, O) {
      return ea(p, k, O, !1);
    }
    var Mi = Si, Pi = Ei;
    Rt.Fragment = e, Rt.jsx = Mi, Rt.jsxs = Pi;
  }()), Rt;
}
var na;
function Bi() {
  return na || (na = 1, process.env.NODE_ENV === "production" ? er.exports = Hi() : er.exports = $i()), er.exports;
}
var g = Bi(), Ja = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, aa = y.createContext && /* @__PURE__ */ y.createContext(Ja), Ki = ["attr", "size", "title"];
function zi(r, a) {
  if (r == null) return {};
  var t = Qi(r, a), e, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++)
      e = o[n], !(a.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(r, e) && (t[e] = r[e]);
  }
  return t;
}
function Qi(r, a) {
  if (r == null) return {};
  var t = {};
  for (var e in r)
    if (Object.prototype.hasOwnProperty.call(r, e)) {
      if (a.indexOf(e) >= 0) continue;
      t[e] = r[e];
    }
  return t;
}
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(r) {
    for (var a = 1; a < arguments.length; a++) {
      var t = arguments[a];
      for (var e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
    }
    return r;
  }, vr.apply(this, arguments);
}
function oa(r, a) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(r);
    a && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function yr(r) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? oa(Object(t), !0).forEach(function(e) {
      Vi(r, e, t[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : oa(Object(t)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
    });
  }
  return r;
}
function Vi(r, a, t) {
  return a = Gi(a), a in r ? Object.defineProperty(r, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[a] = t, r;
}
function Gi(r) {
  var a = qi(r, "string");
  return typeof a == "symbol" ? a : a + "";
}
function qi(r, a) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var e = t.call(r, a);
    if (typeof e != "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(r);
}
function eo(r) {
  return r && r.map((a, t) => /* @__PURE__ */ y.createElement(a.tag, yr({
    key: t
  }, a.attr), eo(a.child)));
}
function be(r) {
  return (a) => /* @__PURE__ */ y.createElement(Ui, vr({
    attr: yr({}, r.attr)
  }, a), eo(r.child));
}
function Ui(r) {
  var a = (t) => {
    var {
      attr: e,
      size: n,
      title: o
    } = r, i = zi(r, Ki), s = n || t.size || "1em", c;
    return t.className && (c = t.className), r.className && (c = (c ? c + " " : "") + r.className), /* @__PURE__ */ y.createElement("svg", vr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, e, i, {
      className: c,
      style: yr(yr({
        color: r.color || t.color
      }, t.style), r.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ y.createElement("title", null, o), r.children);
  };
  return aa !== void 0 ? /* @__PURE__ */ y.createElement(aa.Consumer, null, (t) => a(t)) : a(Ja);
}
function Xi(r) {
  return be({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(r);
}
function xn(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(r);
}
function to(r) {
  return be({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(r);
}
function Zi(r) {
  return be({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(r);
}
function ro(r) {
  return be({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(r);
}
function Ji(r) {
  return be({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }, child: [] }] })(r);
}
function es(r) {
  return be({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z" }, child: [] }] })(r);
}
function no(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(r);
}
function ts(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(r);
}
function ao(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(r);
}
function oo(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(r);
}
function io(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(r);
}
function Zr(r) {
  return be({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(r);
}
function so(r) {
  return be({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(r);
}
const Lr = ht.button`
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
`, rs = ht.input.attrs({ type: "checkbox" })`
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
`, lr = ht.input`
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
`, ns = ht.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  gap: 6px;
`, co = V.div`
  position: fixed;
  z-index: 9999;
  width: 192px;
  border: 1px solid ${(r) => r.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(r) => r.theme.colors.prime};
  color: ${(r) => r.theme.colors.font};
  transform: translate(0, 5px);
`, lo = V.label`
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(r) => r.theme.colors.backgroundLight || "#f3f4f6"};
  border-bottom: 1px solid ${(r) => r.theme.colors.second || "#d1d5db"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: ${(r) => r.theme.colors.text || "#374151"};
`, uo = V.ul`
  font-size: 14px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
`, fo = V.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${(r) => r.disabled ? "not-allowed" : "pointer"};
  opacity: ${(r) => r.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${(r) => r.disabled ? "inherit" : r.theme.colors.primeHover};
  }
`, po = V.hr`
  border-top: 1px solid ${(r) => r.theme.colors.second};
  margin: 4px 0;
`, ho = V.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`, as = V.div`  
  width: 100%;  
  height: 100%; 
  display: flex;
  flex-direction: column;  
  background-color: ${(r) => r.theme.colors.background}; 
  color: ${(r) => r.theme.colors.font};
  overflow: hidden; 
`, os = V.div`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  width: 100%;  
  overflow-x: auto;
  overflow-y: auto;    
`, is = V.table`    
  width: 100%;
  height: 100%;
  table-layout: fixed; /* ✅ 테이블이 부모 크기에 맞춰짐 */
  border-collapse: collapse;
  background-color: ${(r) => r.theme.colors.background};
  color: ${(r) => r.theme.colors.font};   
  table-layout: auto; 
`, mo = V(Lr)`
  width: 24px;
  height: 24px;
  background-color: ${(r) => r.theme.colors.fourth}; /* ✅ 기본 배경색 */
  color: ${(r) => r.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(r) => r.theme.colors.active}; /* ✅ hover 스타일 */
  }
`, go = V(Lr)`
  width: 24px;
  height: 24px;
  background-color: ${(r) => r.theme.colors.third}; /* ✅ 기본 배경색 */
  color: ${(r) => r.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(r) => r.theme.colors.active}; /* ✅ hover 스타일 */
  }
`, ss = V.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(r) => r.theme.colors.prime};
  color: ${(r) => r.theme.colors.font};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* ✅ 스크롤 시에도 그림자로 구분 */
    
`, cs = V.tr`
  background-color: ${(r) => r.theme.colors.second};
  color: ${(r) => r.theme.colors.font};  
`, tr = V.th`
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
`, ls = V.tr`
  position: "sticky";
  background-color: ${(r) => r.theme.colors.primeHover};
  border-bottom: 1px solid ${(r) => r.theme.colors.font};
`, us = V.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${(r) => r.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`, ds = V.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`, fs = V.tbody`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  overflow-y: auto;  
`, ps = V.tr`
  height: 80%;
  border-bottom: 1px solid ${(r) => r.theme.colors.secondHover};  
`, ur = V.td`
  padding: 5px;
  border-bottom: 1px solid ${(r) => r.theme.colors.secondHover};
  font-weight: ${(r) => r.$isEdited ? "bold" : "normal"};
  color: ${(r) => r.$isEdited ? r.theme.colors.third : "inherit"};
  
  white-space: nowrap; /* 줄 바꿈 방지, 내용이 길면 셀 크기 증가 */
  min-width: max-content; /* 내용에 맞게 최소 크기 조정 */
  
`, hs = V.tr`
  background-color: ${(r) => r.theme.colors.secondHover};
  cursor: pointer;
  border-bottom: 2px solid ${(r) => r.theme.colors.second};
`, ms = V.td`
  padding: 5px;
  font-weight: bold;
  border-bottom: 2px solid ${(r) => r.theme.colors.second};
`, gs = V.div`
  display: flex;
  align-items: center;
  padding: 2px;
  gap: 8px;
  white-space: nowrap;
`;
V.div`
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  height: 40px; /* ✅ GridPagination 높이 설정 */    
`;
const vs = V.tr`
  pointer-events: none;
  background-color: ${(r) => r.theme.colors.background};
`, ys = V.td`
  padding: 0;
  border: none;
  height: 100%;
`, Jr = (r) => r.__group === !0, dn = (r) => r.map((a, t) => ({
  ...a,
  rowKey: a.rowKey ?? vo(t)
})), vo = (r) => `row-${Date.now()}-${Math.random()}-${r}`, yo = (r, a, t) => t ? [...r].sort((e, n) => {
  const o = e[a], i = n[a];
  if (o == null || i == null) return 0;
  if (typeof o == "number" && typeof i == "number")
    return t === "asc" ? o - i : i - o;
  const s = String(o).toLowerCase(), c = String(i).toLowerCase();
  return t === "asc" ? s.localeCompare(c) : c.localeCompare(s);
}) : [...r], ws = (r, a, t) => [...r].sort((e, n) => {
  let o = 0;
  for (let i = 0; i < a.length; i++) {
    const s = a[i], c = t, l = e[s] ?? "", u = n[s] ?? "";
    if (typeof l == "number" && typeof u == "number" ? o = l - u : o = String(l).localeCompare(String(u)), c === "desc" && (o = -o), o !== 0) return o;
  }
  return o;
}), wr = (r, a, t = /* @__PURE__ */ new Set(), e = 0) => {
  if (a.length === e) return r;
  const n = a[e], o = [], i = /* @__PURE__ */ new Map();
  return r.forEach((s) => {
    const c = String(s[n]);
    i.has(c) || i.set(c, {
      __group: !0,
      __groupKey: c,
      __children: [],
      __groupLevel: e
    }), i.get(c).__children.push(s);
  }), i.forEach((s) => {
    s.__children = wr(s.__children, a, t, e + 1), o.push(s), t.has(s.__groupKey) && !o.includes(s) && o.push(...s.__children);
  }), o;
}, bs = (r, a) => r.filter(
  (t) => Object.entries(a).every(([e, n]) => n ? String(t[e]).toLowerCase().includes(n.toLowerCase()) : !0)
), br = (r, a, t, e) => {
  const n = (a - 1) * t, o = n + t;
  let i = [...r];
  return (e == null ? void 0 : e.group) !== void 0 && (i = ws(
    i,
    e == null ? void 0 : e.group.column,
    (e == null ? void 0 : e.sortDirection) === void 0 ? "asc" : e == null ? void 0 : e.sortDirection
  )), i.slice(n, o);
}, He = (r) => {
  let a = [...r.originalData];
  return Object.keys(r.filters).length > 0 && (a = bs(a, r.filters)), r.sortedColumn && r.sortDirection && (a = yo(a, r.sortedColumn, r.sortDirection)), r.pagingable && (a = br(
    a,
    r.pagenate.currentPage,
    r.pagenate.pageSize,
    r
  )), r.group.column.length > 0 && (a = wr(a, r.group.column, r.group.expanded)), {
    ...r,
    data: a
  };
}, Ds = (r) => {
  if (r.length === 0) {
    console.warn("데이터가 없습니다.");
    return;
  }
  const a = ["rowKey"], t = r.map((o) => {
    const i = { ...o };
    return a.forEach((s) => delete i[s]), i;
  }), e = Jt.utils.json_to_sheet(t), n = Jt.utils.book_new();
  Jt.utils.book_append_sheet(n, e, "Sheet1"), Jt.writeFile(n, "export.xlsx");
}, xs = (r) => {
  if (r.length === 0) {
    console.warn("데이터가 없습니다.");
    return;
  }
  const a = ["rowKey"], t = new Ai(), e = Object.keys(r[0]).filter((o) => !a.includes(o)), n = r.map((o) => e.map((i) => o[i]));
  ji(t, {
    head: [e.map(String)],
    // 컬럼명
    body: n
    // 데이터
  }), t.save("export.pdf");
}, ks = ({
  menuPosition: r,
  options: a,
  onClose: t,
  reducer: e,
  style: n
}) => {
  var h, m, v, w, b, D, x;
  const o = Ae(null), { filters: i, sortedColumn: s, sortDirection: c, group: l, activeExportSurport: u } = e == null ? void 0 : e.state;
  if (we(() => {
    const E = (N) => {
      o.current && !o.current.contains(N.target) && t();
    };
    return document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, [t]), !r || !a) return null;
  const d = [
    /** Export Support */
    u && {
      label: "Excel Export",
      icon: /* @__PURE__ */ g.jsx(Ji, { style: { color: "green", fontSize: "14px" } }),
      onClick: () => Ds(e == null ? void 0 : e.state.originalData)
    },
    u && {
      label: "PDF Export",
      icon: /* @__PURE__ */ g.jsx(es, { style: { color: "red", fontSize: "14px" } }),
      onClick: () => xs(e == null ? void 0 : e.state.originalData)
    },
    u && { divider: !0 },
    /** Sort Part */
    a.sortable && r.column.sortable && {
      label: ((h = a.contextMenuLabels) == null ? void 0 : h.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ g.jsx(io, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort(r.column.key, "asc"),
      disabled: s === r.column.key && c === "asc"
    },
    a.sortable && r.column.sortable && {
      label: ((m = a.contextMenuLabels) == null ? void 0 : m.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ g.jsx(oo, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort(r.column.key, "desc"),
      disabled: s === r.column.key && c === "desc"
    },
    a.sortable && r.column.sortable && {
      label: ((v = a.contextMenuLabels) == null ? void 0 : v.clearSort) || "정렬 해제",
      icon: /* @__PURE__ */ g.jsx(Zr, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setSort("", null),
      disabled: s !== r.column.key
    },
    a.sortable && r.column.sortable && a.grouping && { divider: !0 },
    /** Group Part */
    a.grouping && {
      label: ((w = a.contextMenuLabels) == null ? void 0 : w.group) || "그룹화",
      icon: /* @__PURE__ */ g.jsx(ao, { style: { color: "#16A34A", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setGroup(r.column.key),
      disabled: Array.isArray(l == null ? void 0 : l.column) && l.column.includes(r.column.key)
    },
    a.grouping && {
      label: ((b = a.contextMenuLabels) == null ? void 0 : b.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ g.jsx(Zr, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.removeGroup(r.column.key),
      disabled: Array.isArray(l == null ? void 0 : l.column) && !l.column.includes(r.column.key)
    },
    (a.grouping || a.sortable) && a.filterable && r.column.filterable && { divider: !0 },
    /** Filter Part */
    a.filterable && r.column.filterable && {
      label: ((D = a.contextMenuLabels) == null ? void 0 : D.filter) || "필터",
      icon: /* @__PURE__ */ g.jsx(no, { style: { color: "#D97706", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.setFilter({ [r.column.key]: "" }),
      disabled: Array.isArray(i == null ? void 0 : i.column) && i.column.includes(r.column.key)
    },
    a.filterable && r.column.filterable && {
      label: ((x = a.contextMenuLabels) == null ? void 0 : x.clearFilter) || "필터 해제",
      icon: /* @__PURE__ */ g.jsx(Zr, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => e == null ? void 0 : e.clearFilter(r.column.key),
      disabled: Array.isArray(i == null ? void 0 : i.column) && !i.column.includes(r.column.key)
    }
  ].filter(Boolean), f = /* @__PURE__ */ g.jsxs(co, { ref: o, style: { ...n, top: `${r.y}px`, left: `${r.x}px` }, children: [
    /* @__PURE__ */ g.jsx(lo, { children: r.column.label }),
    /* @__PURE__ */ g.jsx(uo, { children: d.map(
      (E, N) => E.divider ? /* @__PURE__ */ g.jsx(po, {}, `divider-${N}`) : /* @__PURE__ */ g.jsxs(
        fo,
        {
          disabled: E.disabled,
          onClick: () => {
            !E.disabled && E.onClick && E.onClick(), t();
          },
          children: [
            E.icon && /* @__PURE__ */ g.jsx(ho, { children: E.icon }),
            /* @__PURE__ */ g.jsx("span", { children: E.label })
          ]
        },
        N
      )
    ) })
  ] });
  return Za.createPortal(f, document.body);
}, _s = ({
  columns: r,
  showRowNumCol: a,
  showRowCheckboxCol: t,
  options: e,
  reducer: n,
  editedRows: o,
  style: i
}) => {
  const [s, c] = he(null), { filters: l, sortedColumn: u, sortDirection: d, group: f } = n.state, h = (v, w) => {
    v.preventDefault(), e && c({ x: v.clientX, y: v.clientY, column: w });
  }, m = () => c(null);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs(ss, { style: i, children: [
      /* @__PURE__ */ g.jsxs(cs, { children: [
        o && Object.keys(o).length > 0 && /* @__PURE__ */ g.jsx(tr, { width: 40, children: /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ g.jsx(mo, { onClick: n.applyAllChanges, children: /* @__PURE__ */ g.jsx(xn, {}) }),
          /* @__PURE__ */ g.jsx(go, { onClick: n.resetAllChanges, children: /* @__PURE__ */ g.jsx(so, {}) })
        ] }) }),
        a && /* @__PURE__ */ g.jsx(tr, { width: 40, children: "No." }),
        t && /* @__PURE__ */ g.jsx(tr, { width: 40, children: "✔" }),
        r.map((v) => {
          var w;
          return /* @__PURE__ */ g.jsx(tr, { width: v.width, sticky: v.sticky, onContextMenu: (b) => h(b, v), children: /* @__PURE__ */ g.jsxs(ds, { children: [
            /* @__PURE__ */ g.jsx("span", { children: v.label }),
            v.sortable && u === v.key && d !== null && (d === "asc" ? /* @__PURE__ */ g.jsx(io, { style: { color: "#2563EB", fontSize: "10px" } }) : /* @__PURE__ */ g.jsx(oo, { style: { color: "#2563EB", fontSize: "10px" } })),
            ((w = f.column) == null ? void 0 : w.includes(v.key)) && /* @__PURE__ */ g.jsx(ao, { style: { color: "#16A34A", fontSize: "10px" } }),
            (e == null ? void 0 : e.filterable) && l[v.key] !== void 0 && /* @__PURE__ */ g.jsx(no, { style: { color: "#D97706", fontSize: "10px" } })
          ] }) }, v.key);
        })
      ] }),
      r.some((v) => (e == null ? void 0 : e.filterable) && l[v.key] !== void 0) && /* @__PURE__ */ g.jsxs(ls, { children: [
        a && /* @__PURE__ */ g.jsx("td", { style: { padding: "8px" }, children: " " }),
        t && /* @__PURE__ */ g.jsx("td", { style: { padding: "8px" }, children: " " }),
        r.map((v) => /* @__PURE__ */ g.jsx("td", { style: { padding: "8px" }, children: v.filterable && l[v.key] !== void 0 && /* @__PURE__ */ g.jsx(
          us,
          {
            type: "text",
            value: l[v.key] || "",
            onChange: (w) => n.setFilter({ ...l, [v.key]: w.target.value }),
            placeholder: "필터 입력..."
          }
        ) }, v.key))
      ] })
    ] }),
    e && /* @__PURE__ */ g.jsx(
      ks,
      {
        menuPosition: s,
        options: e,
        onClose: m,
        reducer: n
      }
    )
  ] });
};
function Cs(r) {
  return be({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" }, child: [] }] })(r);
}
const Es = ({
  menuPosition: r,
  onClose: a,
  reducer: t,
  style: e
}) => {
  const n = Ae(null);
  if (we(() => {
    const i = (s) => {
      n.current && !n.current.contains(s.target) && a();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [a]), !r) return null;
  const o = [
    /** Row Add/Delete Support */
    {
      label: "Add Row",
      icon: /* @__PURE__ */ g.jsx(Cs, { style: { color: "green", fontSize: "14px" } }),
      onClick: () => t.addRow()
    }
  ].filter(Boolean);
  return Dn(
    /* @__PURE__ */ g.jsxs(
      co,
      {
        ref: n,
        style: {
          ...e,
          position: "absolute",
          top: `${r.y}px`,
          left: `${r.x}px`,
          zIndex: 1e3
        },
        children: [
          /* @__PURE__ */ g.jsx(lo, { children: "" }),
          /* @__PURE__ */ g.jsx(uo, { children: o.map(
            (i, s) => i.divider ? /* @__PURE__ */ g.jsx(po, {}, `divider-${s}`) : /* @__PURE__ */ g.jsxs(
              fo,
              {
                disabled: i.disabled,
                onClick: () => {
                  !i.disabled && i.onClick && i.onClick(), a();
                },
                children: [
                  i.icon && /* @__PURE__ */ g.jsx(ho, { children: i.icon }),
                  /* @__PURE__ */ g.jsx("span", { children: i.label })
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
}, nt = {
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
}, at = Fi`
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
`, jt = y.forwardRef(
  ({ apply: r, children: a, ...t }, e) => /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
    /* @__PURE__ */ g.jsx(at, {}),
    /* @__PURE__ */ g.jsx(
      Lr,
      {
        ...t,
        ref: e,
        style: {
          ...t.style
        },
        children: a
      }
    )
  ] })
), wo = Kt(({
  id: r,
  apply: a,
  label: t,
  labelPosition: e = "right",
  labelColor: n = "#333",
  labelSize: o = "14px",
  labelGap: i = 6,
  labelLetterSpacing: s = 1,
  children: c,
  onChange: l,
  checkedColor: u,
  checked: d,
  ...f
}, h) => {
  const [m, v] = he(!!d);
  we(() => {
    v(!!d);
  }, [d]);
  const w = (D) => {
    const x = !m;
    if (v(x), l) {
      const E = Object.assign({}, D, {
        target: { ...D.target, checked: x, rowKey: r }
      });
      l(E);
    }
  }, b = e === "bottom";
  return /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
    /* @__PURE__ */ g.jsx(at, {}),
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: b ? "column" : "row",
          alignItems: "center",
          gap: t ? `${i}px` : void 0
        },
        children: [
          /* @__PURE__ */ g.jsx(
            rs,
            {
              ...f,
              ref: h,
              $checkedColor: u,
              type: "checkbox",
              checked: m,
              onChange: w
            }
          ),
          t && /* @__PURE__ */ g.jsx(
            "span",
            {
              style: {
                color: n,
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
}), Ss = (r, a) => ({
  isOpen: !1,
  options: r,
  selectedItem: r.find((t) => t.key === a)
});
function Ms(r, a) {
  switch (a.type) {
    case "SET_OPTIONS":
      return {
        ...r,
        options: a.options
      };
    case "SET_IS_OPEN":
      return {
        ...r,
        isOpen: a.isOpen
      };
    case "SELECT_ITEM":
      return {
        ...r,
        selectedItem: a.item,
        isOpen: a.isOpen
      };
    default:
      return r;
  }
}
function Ps(r, a) {
  const [t, e] = wn(Ms, Ss(r, a));
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
const Ts = V.div`
  position: relative;  
`, Os = V.button`
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
`, Rs = V.div`
  position: absolute;
  left: 0;
  margin-top: 4px;  
  width: 144px;
  border: 1px solid ${({ theme: r }) => r.colors.second};
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${({ theme: r }) => r.colors.prime};
  color: ${({ theme: r }) => r.colors.font};  
`, Ns = V.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: r }) => r.colors.primeHover};
  }
`;
V.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid gray;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background: ${({ color: r, theme: a }) => r || a.colors.background};
`;
const ia = (r, a) => {
  let t = [];
  return a === !0 ? t = [{ key: "all", value: "ALL" }, ...r] : t = r, t;
}, sa = (r, a) => a === void 0 ? r : a(r), kn = Kt(
  ({
    id: r,
    options: a,
    isActiveAll: t,
    value: e,
    onChange: n,
    onTranslate: o,
    style: i,
    defualtKey: s
  }, c) => {
    var m;
    const l = Ps(
      ia(a, t),
      s
    ), u = Ae(null), d = Ae(null), [f, h] = he({
      top: 0,
      left: 0,
      width: 0
    });
    return we(() => {
      const v = ia(a, t);
      l.setOptions(v);
    }, [a, t]), we(() => {
      if (e !== void 0) {
        const v = l.state.options.find((w) => w.key === e);
        l.selectItem(v ?? void 0);
      }
    }, [e, l.state.options]), we(() => {
      const v = (w) => {
        u.current && !u.current.contains(w.target) && d.current && !d.current.contains(w.target) && l.setIsOpen(!1);
      };
      return l.state.isOpen && (window.addEventListener("click", v), setTimeout(() => {
        if (d.current) {
          const w = d.current.getBoundingClientRect();
          h({
            top: w.bottom + window.scrollY,
            left: w.left + window.scrollX,
            width: w.width
          });
        }
      }, 0)), () => {
        window.removeEventListener("click", v);
      };
    }, [l.state.isOpen]), Ua(c, () => u.current, []), /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
      /* @__PURE__ */ g.jsx(at, {}),
      /* @__PURE__ */ g.jsxs(Ts, { children: [
        /* @__PURE__ */ g.jsxs(
          Os,
          {
            ref: d,
            id: r,
            onClick: () => l.setIsOpen(!l.state.isOpen),
            style: { height: "30px", ...i },
            children: [
              /* @__PURE__ */ g.jsx(
                "span",
                {
                  style: {
                    flexGrow: 1,
                    textAlign: "left",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: sa(
                    ((m = l.state.selectedItem) == null ? void 0 : m.value) ?? "",
                    o
                  )
                }
              ),
              /* @__PURE__ */ g.jsx(to, { style: { width: 12, height: 12, flexShrink: 0 } })
            ]
          }
        ),
        l.state.isOpen && Dn(
          /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsx(
            Rs,
            {
              ref: u,
              style: {
                position: "absolute",
                top: `${f.top}px`,
                left: `${f.left}px`,
                width: `${f.width}px`,
                zIndex: 9999
              },
              children: l.state.options.map((v) => /* @__PURE__ */ g.jsx(
                Ns,
                {
                  onClick: () => {
                    l.selectItem(v), n == null || n(v), l.setIsOpen(!1);
                  },
                  children: sa(
                    v.value,
                    o
                  )
                },
                v.key
              ))
            }
          ) }),
          document.body
        )
      ] })
    ] });
  }
);
kn.displayName = "DropDownBox";
function bo(r) {
  var a, t, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var n = r.length;
    for (a = 0; a < n; a++) r[a] && (t = bo(r[a])) && (e && (e += " "), e += t);
  } else for (t in r) r[t] && (e && (e += " "), e += t);
  return e;
}
function pe() {
  for (var r, a, t = 0, e = "", n = arguments.length; t < n; t++) (r = arguments[t]) && (a = bo(r)) && (e && (e += " "), e += a);
  return e;
}
const Do = 6048e5, Ls = 864e5, Ir = 6e4, Yr = 36e5, Is = 1e3, ca = Symbol.for("constructDateFrom");
function te(r, a) {
  return typeof r == "function" ? r(a) : r && typeof r == "object" && ca in r ? r[ca](a) : r instanceof Date ? new r.constructor(a) : new Date(a);
}
function I(r, a) {
  return te(a || r, r);
}
function Te(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return isNaN(a) ? te((t == null ? void 0 : t.in) || r, NaN) : (a && e.setDate(e.getDate() + a), e);
}
function Oe(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  if (isNaN(a)) return te(r, NaN);
  if (!a)
    return e;
  const n = e.getDate(), o = te(r, e.getTime());
  o.setMonth(e.getMonth() + a + 1, 0);
  const i = o.getDate();
  return n >= i ? o : (e.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    n
  ), e);
}
function xo(r, a, t) {
  return te(r, +I(r) + a);
}
function Ys(r, a, t) {
  return xo(r, a * Yr);
}
let Fs = {};
function mt() {
  return Fs;
}
function Ve(r, a) {
  var s, c, l, u;
  const t = mt(), e = (a == null ? void 0 : a.weekStartsOn) ?? ((c = (s = a == null ? void 0 : a.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, n = I(r, a == null ? void 0 : a.in), o = n.getDay(), i = (o < e ? 7 : 0) + o - e;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function xt(r, a) {
  return Ve(r, { ...a, weekStartsOn: 1 });
}
function ko(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = t.getFullYear(), n = te(t, 0);
  n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = xt(n), i = te(t, 0);
  i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0);
  const s = xt(i);
  return t.getTime() >= o.getTime() ? e + 1 : t.getTime() >= s.getTime() ? e : e - 1;
}
function Dr(r) {
  const a = I(r), t = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return t.setUTCFullYear(a.getFullYear()), +r - +t;
}
function Ge(r, ...a) {
  const t = te.bind(
    null,
    a.find((e) => typeof e == "object")
  );
  return a.map(t);
}
function dt(r, a) {
  const t = I(r, a == null ? void 0 : a.in);
  return t.setHours(0, 0, 0, 0), t;
}
function kt(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  ), o = dt(e), i = dt(n), s = +o - Dr(o), c = +i - Dr(i);
  return Math.round((s - c) / Ls);
}
function As(r, a) {
  const t = ko(r, a), e = te(r, 0);
  return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), xt(e);
}
function fn(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setTime(e.getTime() + a * Ir), e;
}
function _n(r, a, t) {
  return Oe(r, a * 3, t);
}
function js(r, a, t) {
  return xo(r, a * 1e3);
}
function xr(r, a, t) {
  return Te(r, a * 7, t);
}
function $e(r, a, t) {
  return Oe(r, a * 12, t);
}
function la(r, a) {
  let t, e = a == null ? void 0 : a.in;
  return r.forEach((n) => {
    !e && typeof n == "object" && (e = te.bind(null, n));
    const o = I(n, e);
    (!t || t < o || isNaN(+o)) && (t = o);
  }), te(e, t || NaN);
}
function ua(r, a) {
  let t, e = a == null ? void 0 : a.in;
  return r.forEach((n) => {
    !e && typeof n == "object" && (e = te.bind(null, n));
    const o = I(n, e);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), te(e, t || NaN);
}
function Ws(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  );
  return +dt(e) == +dt(n);
}
function Be(r) {
  return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
}
function kr(r) {
  return !(!Be(r) && typeof r != "number" || isNaN(+I(r)));
}
function _r(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  ), o = e.getFullYear() - n.getFullYear(), i = e.getMonth() - n.getMonth();
  return o * 12 + i;
}
function ct(r, a) {
  const t = I(r, a == null ? void 0 : a.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Cr(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  ), o = e.getFullYear() - n.getFullYear(), i = ct(e) - ct(n);
  return o * 4 + i;
}
function Er(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  );
  return e.getFullYear() - n.getFullYear();
}
function Hs(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  ), o = da(e, n), i = Math.abs(
    kt(e, n)
  );
  e.setDate(e.getDate() - o * i);
  const s = +(da(e, n) === -o), c = o * (i - s);
  return c === 0 ? 0 : c;
}
function da(r, a) {
  const t = r.getFullYear() - a.getFullYear() || r.getMonth() - a.getMonth() || r.getDate() - a.getDate() || r.getHours() - a.getHours() || r.getMinutes() - a.getMinutes() || r.getSeconds() - a.getSeconds() || r.getMilliseconds() - a.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function _o(r, a) {
  const t = I(r, a == null ? void 0 : a.in);
  return t.setHours(23, 59, 59, 999), t;
}
function Co(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function pn(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = t.getMonth(), n = e - e % 3;
  return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
}
function Eo(r, a) {
  const t = I(r, a == null ? void 0 : a.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function So(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Fr(r, a) {
  const t = I(r, a == null ? void 0 : a.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function $s(r, a) {
  var s, c;
  const t = mt(), e = t.weekStartsOn ?? ((c = (s = t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? 0, n = I(r, a == null ? void 0 : a.in), o = n.getDay(), i = (o < e ? -7 : 0) + 6 - (o - e);
  return n.setDate(n.getDate() + i), n.setHours(23, 59, 59, 999), n;
}
const Bs = {
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
}, Ks = (r, a, t) => {
  let e;
  const n = Bs[r];
  return typeof n == "string" ? e = n : a === 1 ? e = n.one : e = n.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function en(r) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : r.defaultWidth;
    return r.formats[t] || r.formats[r.defaultWidth];
  };
}
const zs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Qs = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Vs = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gs = {
  date: en({
    formats: zs,
    defaultWidth: "full"
  }),
  time: en({
    formats: Qs,
    defaultWidth: "full"
  }),
  dateTime: en({
    formats: Vs,
    defaultWidth: "full"
  })
}, qs = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Us = (r, a, t, e) => qs[r];
function Nt(r) {
  return (a, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let n;
    if (e === "formatting" && r.formattingValues) {
      const i = r.defaultFormattingWidth || r.defaultWidth, s = t != null && t.width ? String(t.width) : i;
      n = r.formattingValues[s] || r.formattingValues[i];
    } else {
      const i = r.defaultWidth, s = t != null && t.width ? String(t.width) : r.defaultWidth;
      n = r.values[s] || r.values[i];
    }
    const o = r.argumentCallback ? r.argumentCallback(a) : a;
    return n[o];
  };
}
const Xs = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Js = {
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
}, ec = {
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
}, tc = {
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
}, rc = {
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
}, nc = (r, a) => {
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
}, ac = {
  ordinalNumber: nc,
  era: Nt({
    values: Xs,
    defaultWidth: "wide"
  }),
  quarter: Nt({
    values: Zs,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: Nt({
    values: Js,
    defaultWidth: "wide"
  }),
  day: Nt({
    values: ec,
    defaultWidth: "wide"
  }),
  dayPeriod: Nt({
    values: tc,
    defaultWidth: "wide",
    formattingValues: rc,
    defaultFormattingWidth: "wide"
  })
};
function Lt(r) {
  return (a, t = {}) => {
    const e = t.width, n = e && r.matchPatterns[e] || r.matchPatterns[r.defaultMatchWidth], o = a.match(n);
    if (!o)
      return null;
    const i = o[0], s = e && r.parsePatterns[e] || r.parsePatterns[r.defaultParseWidth], c = Array.isArray(s) ? ic(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      oc(s, (d) => d.test(i))
    );
    let l;
    l = r.valueCallback ? r.valueCallback(c) : c, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = a.slice(i.length);
    return { value: l, rest: u };
  };
}
function oc(r, a) {
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t) && a(r[t]))
      return t;
}
function ic(r, a) {
  for (let t = 0; t < r.length; t++)
    if (a(r[t]))
      return t;
}
function sc(r) {
  return (a, t = {}) => {
    const e = a.match(r.matchPattern);
    if (!e) return null;
    const n = e[0], o = a.match(r.parsePattern);
    if (!o) return null;
    let i = r.valueCallback ? r.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = a.slice(n.length);
    return { value: i, rest: s };
  };
}
const cc = /^(\d+)(th|st|nd|rd)?/i, lc = /\d+/i, uc = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, dc = {
  any: [/^b/i, /^(a|c)/i]
}, fc = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, hc = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, mc = {
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
}, gc = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, vc = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yc = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wc = {
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
}, bc = {
  ordinalNumber: sc({
    matchPattern: cc,
    parsePattern: lc,
    valueCallback: (r) => parseInt(r, 10)
  }),
  era: Lt({
    matchPatterns: uc,
    defaultMatchWidth: "wide",
    parsePatterns: dc,
    defaultParseWidth: "any"
  }),
  quarter: Lt({
    matchPatterns: fc,
    defaultMatchWidth: "wide",
    parsePatterns: pc,
    defaultParseWidth: "any",
    valueCallback: (r) => r + 1
  }),
  month: Lt({
    matchPatterns: hc,
    defaultMatchWidth: "wide",
    parsePatterns: mc,
    defaultParseWidth: "any"
  }),
  day: Lt({
    matchPatterns: gc,
    defaultMatchWidth: "wide",
    parsePatterns: vc,
    defaultParseWidth: "any"
  }),
  dayPeriod: Lt({
    matchPatterns: yc,
    defaultMatchWidth: "any",
    parsePatterns: wc,
    defaultParseWidth: "any"
  })
}, Mo = {
  code: "en-US",
  formatDistance: Ks,
  formatLong: Gs,
  formatRelative: Us,
  localize: ac,
  match: bc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Dc(r, a) {
  const t = I(r, a == null ? void 0 : a.in);
  return kt(t, Fr(t)) + 1;
}
function Cn(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = +xt(t) - +As(t);
  return Math.round(e / Do) + 1;
}
function En(r, a) {
  var u, d, f, h;
  const t = I(r, a == null ? void 0 : a.in), e = t.getFullYear(), n = mt(), o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((d = (u = a == null ? void 0 : a.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = te((a == null ? void 0 : a.in) || r, 0);
  i.setFullYear(e + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = Ve(i, a), c = te((a == null ? void 0 : a.in) || r, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = Ve(c, a);
  return +t >= +s ? e + 1 : +t >= +l ? e : e - 1;
}
function xc(r, a) {
  var s, c, l, u;
  const t = mt(), e = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((c = (s = a == null ? void 0 : a.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((u = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, n = En(r, a), o = te((a == null ? void 0 : a.in) || r, 0);
  return o.setFullYear(n, 0, e), o.setHours(0, 0, 0, 0), Ve(o, a);
}
function Po(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = +Ve(t, a) - +xc(t, a);
  return Math.round(e / Do) + 1;
}
function ee(r, a) {
  const t = r < 0 ? "-" : "", e = Math.abs(r).toString().padStart(a, "0");
  return t + e;
}
const qe = {
  // Year
  y(r, a) {
    const t = r.getFullYear(), e = t > 0 ? t : 1 - t;
    return ee(a === "yy" ? e % 100 : e, a.length);
  },
  // Month
  M(r, a) {
    const t = r.getMonth();
    return a === "M" ? String(t + 1) : ee(t + 1, 2);
  },
  // Day of the month
  d(r, a) {
    return ee(r.getDate(), a.length);
  },
  // AM or PM
  a(r, a) {
    const t = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
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
  h(r, a) {
    return ee(r.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(r, a) {
    return ee(r.getHours(), a.length);
  },
  // Minute
  m(r, a) {
    return ee(r.getMinutes(), a.length);
  },
  // Second
  s(r, a) {
    return ee(r.getSeconds(), a.length);
  },
  // Fraction of second
  S(r, a) {
    const t = a.length, e = r.getMilliseconds(), n = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return ee(n, a.length);
  }
}, yt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, fa = {
  // Era
  G: function(r, a, t) {
    const e = r.getFullYear() > 0 ? 1 : 0;
    switch (a) {
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
  y: function(r, a, t) {
    if (a === "yo") {
      const e = r.getFullYear(), n = e > 0 ? e : 1 - e;
      return t.ordinalNumber(n, { unit: "year" });
    }
    return qe.y(r, a);
  },
  // Local week-numbering year
  Y: function(r, a, t, e) {
    const n = En(r, e), o = n > 0 ? n : 1 - n;
    if (a === "YY") {
      const i = o % 100;
      return ee(i, 2);
    }
    return a === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : ee(o, a.length);
  },
  // ISO week-numbering year
  R: function(r, a) {
    const t = ko(r);
    return ee(t, a.length);
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
  u: function(r, a) {
    const t = r.getFullYear();
    return ee(t, a.length);
  },
  // Quarter
  Q: function(r, a, t) {
    const e = Math.ceil((r.getMonth() + 1) / 3);
    switch (a) {
      // 1, 2, 3, 4
      case "Q":
        return String(e);
      // 01, 02, 03, 04
      case "QQ":
        return ee(e, 2);
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
  q: function(r, a, t) {
    const e = Math.ceil((r.getMonth() + 1) / 3);
    switch (a) {
      // 1, 2, 3, 4
      case "q":
        return String(e);
      // 01, 02, 03, 04
      case "qq":
        return ee(e, 2);
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
  M: function(r, a, t) {
    const e = r.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return qe.M(r, a);
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
  L: function(r, a, t) {
    const e = r.getMonth();
    switch (a) {
      // 1, 2, ..., 12
      case "L":
        return String(e + 1);
      // 01, 02, ..., 12
      case "LL":
        return ee(e + 1, 2);
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
  w: function(r, a, t, e) {
    const n = Po(r, e);
    return a === "wo" ? t.ordinalNumber(n, { unit: "week" }) : ee(n, a.length);
  },
  // ISO week of year
  I: function(r, a, t) {
    const e = Cn(r);
    return a === "Io" ? t.ordinalNumber(e, { unit: "week" }) : ee(e, a.length);
  },
  // Day of the month
  d: function(r, a, t) {
    return a === "do" ? t.ordinalNumber(r.getDate(), { unit: "date" }) : qe.d(r, a);
  },
  // Day of year
  D: function(r, a, t) {
    const e = Dc(r);
    return a === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : ee(e, a.length);
  },
  // Day of week
  E: function(r, a, t) {
    const e = r.getDay();
    switch (a) {
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
  e: function(r, a, t, e) {
    const n = r.getDay(), o = (n - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return ee(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(r, a, t, e) {
    const n = r.getDay(), o = (n - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return ee(o, a.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(n, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(n, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return t.day(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(r, a, t) {
    const e = r.getDay(), n = e === 0 ? 7 : e;
    switch (a) {
      // 2
      case "i":
        return String(n);
      // 02
      case "ii":
        return ee(n, a.length);
      // 2nd
      case "io":
        return t.ordinalNumber(n, { unit: "day" });
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
  a: function(r, a, t) {
    const n = r.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(r, a, t) {
    const e = r.getHours();
    let n;
    switch (e === 12 ? n = yt.noon : e === 0 ? n = yt.midnight : n = e / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(r, a, t) {
    const e = r.getHours();
    let n;
    switch (e >= 17 ? n = yt.evening : e >= 12 ? n = yt.afternoon : e >= 4 ? n = yt.morning : n = yt.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(r, a, t) {
    if (a === "ho") {
      let e = r.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return qe.h(r, a);
  },
  // Hour [0-23]
  H: function(r, a, t) {
    return a === "Ho" ? t.ordinalNumber(r.getHours(), { unit: "hour" }) : qe.H(r, a);
  },
  // Hour [0-11]
  K: function(r, a, t) {
    const e = r.getHours() % 12;
    return a === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : ee(e, a.length);
  },
  // Hour [1-24]
  k: function(r, a, t) {
    let e = r.getHours();
    return e === 0 && (e = 24), a === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : ee(e, a.length);
  },
  // Minute
  m: function(r, a, t) {
    return a === "mo" ? t.ordinalNumber(r.getMinutes(), { unit: "minute" }) : qe.m(r, a);
  },
  // Second
  s: function(r, a, t) {
    return a === "so" ? t.ordinalNumber(r.getSeconds(), { unit: "second" }) : qe.s(r, a);
  },
  // Fraction of second
  S: function(r, a) {
    return qe.S(r, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(r, a, t) {
    const e = r.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (a) {
      // Hours and optional minutes
      case "X":
        return ha(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return it(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return it(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(r, a, t) {
    const e = r.getTimezoneOffset();
    switch (a) {
      // Hours and optional minutes
      case "x":
        return ha(e);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return it(e);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return it(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(r, a, t) {
    const e = r.getTimezoneOffset();
    switch (a) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + pa(e, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + it(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(r, a, t) {
    const e = r.getTimezoneOffset();
    switch (a) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + pa(e, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + it(e, ":");
    }
  },
  // Seconds timestamp
  t: function(r, a, t) {
    const e = Math.trunc(+r / 1e3);
    return ee(e, a.length);
  },
  // Milliseconds timestamp
  T: function(r, a, t) {
    return ee(+r, a.length);
  }
};
function pa(r, a = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), n = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(n) : t + String(n) + a + ee(o, 2);
}
function ha(r, a) {
  return r % 60 === 0 ? (r > 0 ? "-" : "+") + ee(Math.abs(r) / 60, 2) : it(r, a);
}
function it(r, a = "") {
  const t = r > 0 ? "-" : "+", e = Math.abs(r), n = ee(Math.trunc(e / 60), 2), o = ee(e % 60, 2);
  return t + n + a + o;
}
const ma = (r, a) => {
  switch (r) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    case "PPPP":
    default:
      return a.date({ width: "full" });
  }
}, To = (r, a) => {
  switch (r) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    case "pppp":
    default:
      return a.time({ width: "full" });
  }
}, kc = (r, a) => {
  const t = r.match(/(P+)(p+)?/) || [], e = t[1], n = t[2];
  if (!n)
    return ma(r, a);
  let o;
  switch (e) {
    case "P":
      o = a.dateTime({ width: "short" });
      break;
    case "PP":
      o = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = a.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = a.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", ma(e, a)).replace("{{time}}", To(n, a));
}, hn = {
  p: To,
  P: kc
}, _c = /^D+$/, Cc = /^Y+$/, Ec = ["D", "DD", "YY", "YYYY"];
function Sc(r) {
  return _c.test(r);
}
function Mc(r) {
  return Cc.test(r);
}
function Pc(r, a, t) {
  const e = Tc(r, a, t);
  if (console.warn(e), Ec.includes(r)) throw new RangeError(e);
}
function Tc(r, a, t) {
  const e = r[0] === "Y" ? "years" : "days of the month";
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${a}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Oc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Rc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Nc = /^'([^]*?)'?$/, Lc = /''/g, Ic = /[a-zA-Z]/;
function ga(r, a, t) {
  var u, d, f, h, m, v, w, b;
  const e = mt(), n = (t == null ? void 0 : t.locale) ?? e.locale ?? Mo, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((h = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((v = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? e.weekStartsOn ?? ((b = (w = e.locale) == null ? void 0 : w.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = I(r, t == null ? void 0 : t.in);
  if (!kr(s))
    throw new RangeError("Invalid time value");
  let c = a.match(Rc).map((D) => {
    const x = D[0];
    if (x === "p" || x === "P") {
      const E = hn[x];
      return E(D, n.formatLong);
    }
    return D;
  }).join("").match(Oc).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const x = D[0];
    if (x === "'")
      return { isToken: !1, value: Yc(D) };
    if (fa[x])
      return { isToken: !0, value: D };
    if (x.match(Ic))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: D };
  });
  n.localize.preprocessor && (c = n.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: n
  };
  return c.map((D) => {
    if (!D.isToken) return D.value;
    const x = D.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Mc(x) || !(t != null && t.useAdditionalDayOfYearTokens) && Sc(x)) && Pc(x, a, String(r));
    const E = fa[x[0]];
    return E(s, x, n.localize, l);
  }).join("");
}
function Yc(r) {
  const a = r.match(Nc);
  return a ? a[1].replace(Lc, "'") : r;
}
function va(r, a) {
  return I(r, a == null ? void 0 : a.in).getDate();
}
function Fc(r, a) {
  return I(r, a == null ? void 0 : a.in).getDay();
}
function Ac(r, a) {
  const t = I(r, a == null ? void 0 : a.in), e = t.getFullYear(), n = t.getMonth(), o = te(t, 0);
  return o.setFullYear(e, n + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function jc() {
  return Object.assign({}, mt());
}
function Ke(r, a) {
  return I(r, a == null ? void 0 : a.in).getHours();
}
function Wc(r, a) {
  const t = I(r, a == null ? void 0 : a.in).getDay();
  return t === 0 ? 7 : t;
}
function ze(r, a) {
  return I(r, a == null ? void 0 : a.in).getMinutes();
}
function ye(r, a) {
  return I(r, a == null ? void 0 : a.in).getMonth();
}
function Xe(r) {
  return I(r).getSeconds();
}
function mn(r) {
  return +I(r);
}
function K(r, a) {
  return I(r, a == null ? void 0 : a.in).getFullYear();
}
function et(r, a) {
  return +I(r) > +I(a);
}
function ft(r, a) {
  return +I(r) < +I(a);
}
function Hc(r, a) {
  return +I(r) == +I(a);
}
function $c(r, a) {
  const t = Bc(a) ? new a(0) : te(a, 0);
  return t.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()), t.setHours(
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ), t;
}
function Bc(r) {
  var a;
  return typeof r == "function" && ((a = r.prototype) == null ? void 0 : a.constructor) === r;
}
const Kc = 10;
class Oo {
  constructor() {
    R(this, "subPriority", 0);
  }
  validate(a, t) {
    return !0;
  }
}
class zc extends Oo {
  constructor(a, t, e, n, o) {
    super(), this.value = a, this.validateValue = t, this.setValue = e, this.priority = n, o && (this.subPriority = o);
  }
  validate(a, t) {
    return this.validateValue(a, this.value, t);
  }
  set(a, t, e) {
    return this.setValue(a, t, this.value, e);
  }
}
class Qc extends Oo {
  constructor(t, e) {
    super();
    R(this, "priority", Kc);
    R(this, "subPriority", -1);
    this.context = t || ((n) => te(e, n));
  }
  set(t, e) {
    return e.timestampIsSet ? t : te(t, $c(t, this.context));
  }
}
class X {
  run(a, t, e, n) {
    const o = this.parse(a, t, e, n);
    return o ? {
      setter: new zc(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(a, t, e) {
    return !0;
  }
}
class Vc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 140);
    R(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(t, { width: "abbreviated" }) || n.era(t, { width: "narrow" });
      // A, B
      case "GGGGG":
        return n.era(t, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(t, { width: "wide" }) || n.era(t, { width: "abbreviated" }) || n.era(t, { width: "narrow" });
    }
  }
  set(t, e, n) {
    return e.era = n, t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const ce = {
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
}, Le = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function le(r, a) {
  return r && {
    value: a(r.value),
    rest: r.rest
  };
}
function oe(r, a) {
  const t = a.match(r);
  return t ? {
    value: parseInt(t[0], 10),
    rest: a.slice(t[0].length)
  } : null;
}
function Ie(r, a) {
  const t = a.match(r);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, n = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, i = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (n * Yr + o * Ir + i * Is),
    rest: a.slice(t[0].length)
  };
}
function Ro(r) {
  return oe(ce.anyDigitsSigned, r);
}
function ie(r, a) {
  switch (r) {
    case 1:
      return oe(ce.singleDigit, a);
    case 2:
      return oe(ce.twoDigits, a);
    case 3:
      return oe(ce.threeDigits, a);
    case 4:
      return oe(ce.fourDigits, a);
    default:
      return oe(new RegExp("^\\d{1," + r + "}"), a);
  }
}
function Sr(r, a) {
  switch (r) {
    case 1:
      return oe(ce.singleDigitSigned, a);
    case 2:
      return oe(ce.twoDigitsSigned, a);
    case 3:
      return oe(ce.threeDigitsSigned, a);
    case 4:
      return oe(ce.fourDigitsSigned, a);
    default:
      return oe(new RegExp("^-?\\d{1," + r + "}"), a);
  }
}
function Sn(r) {
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
function No(r, a) {
  const t = a > 0, e = t ? a : 1 - a;
  let n;
  if (e <= 50)
    n = r || 100;
  else {
    const o = e + 50, i = Math.trunc(o / 100) * 100, s = r >= o % 100;
    n = r + i - (s ? 100 : 0);
  }
  return t ? n : 1 - n;
}
function Lo(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
class Gc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 130);
    R(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, n) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return le(ie(4, t), o);
      case "yo":
        return le(
          n.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return le(ie(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, n) {
    const o = t.getFullYear();
    if (n.isTwoDigitYear) {
      const s = No(
        n.year,
        o
      );
      return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in e) || e.era === 1 ? n.year : 1 - n.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class qc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 130);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return le(ie(4, t), o);
      case "Yo":
        return le(
          n.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return le(ie(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, n, o) {
    const i = En(t, o);
    if (n.isTwoDigitYear) {
      const c = No(
        n.year,
        i
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Ve(t, o);
    }
    const s = !("era" in e) || e.era === 1 ? n.year : 1 - n.year;
    return t.setFullYear(s, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Ve(t, o);
  }
}
class Uc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 130);
    R(this, "incompatibleTokens", [
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
    return Sr(e === "R" ? 4 : e.length, t);
  }
  set(t, e, n) {
    const o = te(t, 0);
    return o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0), xt(o);
  }
}
class Xc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 130);
    R(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return Sr(e === "u" ? 4 : e.length, t);
  }
  set(t, e, n) {
    return t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Zc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 120);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return ie(e.length, t);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || n.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, n) {
    return t.setMonth((n - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Jc extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 120);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    switch (e) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return ie(e.length, t);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || n.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || n.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || n.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, n) {
    return t.setMonth((n - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class el extends X {
  constructor() {
    super(...arguments);
    R(this, "incompatibleTokens", [
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
    R(this, "priority", 110);
  }
  parse(t, e, n) {
    const o = (i) => i - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "M":
        return le(
          oe(ce.month, t),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return le(ie(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return le(
          n.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.month(t, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return n.month(t, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(t, { width: "wide", context: "formatting" }) || n.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, n) {
    return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class tl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 110);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    const o = (i) => i - 1;
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return le(
          oe(ce.month, t),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return le(ie(2, t), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return le(
          n.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || n.month(t, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return n.month(t, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(t, { width: "wide", context: "standalone" }) || n.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || n.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, n) {
    return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function rl(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in), n = Po(e, t) - a;
  return e.setDate(e.getDate() - n * 7), I(e, t == null ? void 0 : t.in);
}
class nl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 100);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    switch (e) {
      case "w":
        return oe(ce.week, t);
      case "wo":
        return n.ordinalNumber(t, { unit: "week" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, n, o) {
    return Ve(rl(t, n, o), o);
  }
}
function al(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in), n = Cn(e, t) - a;
  return e.setDate(e.getDate() - n * 7), e;
}
class ol extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 100);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    switch (e) {
      case "I":
        return oe(ce.week, t);
      case "Io":
        return n.ordinalNumber(t, { unit: "week" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, n) {
    return xt(al(t, n));
  }
}
const il = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], sl = [
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
class cl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 90);
    R(this, "subPriority", 1);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    switch (e) {
      case "d":
        return oe(ce.date, t);
      case "do":
        return n.ordinalNumber(t, { unit: "date" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    const n = t.getFullYear(), o = Lo(n), i = t.getMonth();
    return o ? e >= 1 && e <= sl[i] : e >= 1 && e <= il[i];
  }
  set(t, e, n) {
    return t.setDate(n), t.setHours(0, 0, 0, 0), t;
  }
}
class ll extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 90);
    R(this, "subpriority", 1);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    switch (e) {
      case "D":
      case "DD":
        return oe(ce.dayOfYear, t);
      case "Do":
        return n.ordinalNumber(t, { unit: "date" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    const n = t.getFullYear();
    return Lo(n) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, n) {
    return t.setMonth(0, n), t.setHours(0, 0, 0, 0), t;
  }
}
function Mn(r, a, t) {
  var d, f, h, m;
  const e = mt(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? e.weekStartsOn ?? ((m = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = I(r, t == null ? void 0 : t.in), i = o.getDay(), c = (a % 7 + 7) % 7, l = 7 - n, u = a < 0 || a > 6 ? a - (i + l) % 7 : (c + l) % 7 - (i + l) % 7;
  return Te(o, u, t);
}
class ul extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 90);
    R(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(t, { width: "short", context: "formatting" }) || n.day(t, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return n.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(t, { width: "short", context: "formatting" }) || n.day(t, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return n.day(t, { width: "wide", context: "formatting" }) || n.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(t, { width: "short", context: "formatting" }) || n.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, n, o) {
    return t = Mn(t, n, o), t.setHours(0, 0, 0, 0), t;
  }
}
class dl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 90);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      // 3
      case "e":
      case "ee":
        return le(ie(e.length, t), i);
      // 3rd
      case "eo":
        return le(
          n.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      // Tue
      case "eee":
        return n.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(t, { width: "short", context: "formatting" }) || n.day(t, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return n.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(t, { width: "short", context: "formatting" }) || n.day(t, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return n.day(t, { width: "wide", context: "formatting" }) || n.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.day(t, { width: "short", context: "formatting" }) || n.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, n, o) {
    return t = Mn(t, n, o), t.setHours(0, 0, 0, 0), t;
  }
}
class fl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 90);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      // 3
      case "c":
      case "cc":
        return le(ie(e.length, t), i);
      // 3rd
      case "co":
        return le(
          n.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      // Tue
      case "ccc":
        return n.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || n.day(t, { width: "short", context: "standalone" }) || n.day(t, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return n.day(t, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(t, { width: "short", context: "standalone" }) || n.day(t, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return n.day(t, { width: "wide", context: "standalone" }) || n.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || n.day(t, { width: "short", context: "standalone" }) || n.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, n, o) {
    return t = Mn(t, n, o), t.setHours(0, 0, 0, 0), t;
  }
}
function pl(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in), n = Wc(e, t), o = a - n;
  return Te(e, o, t);
}
class hl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 90);
    R(this, "incompatibleTokens", [
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
  parse(t, e, n) {
    const o = (i) => i === 0 ? 7 : i;
    switch (e) {
      // 2
      case "i":
      case "ii":
        return ie(e.length, t);
      // 2nd
      case "io":
        return n.ordinalNumber(t, { unit: "day" });
      // Tue
      case "iii":
        return le(
          n.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(t, {
            width: "short",
            context: "formatting"
          }) || n.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // T
      case "iiiii":
        return le(
          n.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return le(
          n.day(t, {
            width: "short",
            context: "formatting"
          }) || n.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tuesday
      case "iiii":
      default:
        return le(
          n.day(t, {
            width: "wide",
            context: "formatting"
          }) || n.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(t, {
            width: "short",
            context: "formatting"
          }) || n.day(t, {
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
  set(t, e, n) {
    return t = pl(t, n), t.setHours(0, 0, 0, 0), t;
  }
}
class ml extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 80);
    R(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return n.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, n) {
    return t.setHours(Sn(n), 0, 0, 0), t;
  }
}
class gl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 80);
    R(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return n.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, n) {
    return t.setHours(Sn(n), 0, 0, 0), t;
  }
}
class vl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 80);
    R(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || n.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, n) {
    return t.setHours(Sn(n), 0, 0, 0), t;
  }
}
class yl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 70);
    R(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "h":
        return oe(ce.hour12h, t);
      case "ho":
        return n.ordinalNumber(t, { unit: "hour" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, n) {
    const o = t.getHours() >= 12;
    return o && n < 12 ? t.setHours(n + 12, 0, 0, 0) : !o && n === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(n, 0, 0, 0), t;
  }
}
class wl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 70);
    R(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "H":
        return oe(ce.hour23h, t);
      case "Ho":
        return n.ordinalNumber(t, { unit: "hour" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, n) {
    return t.setHours(n, 0, 0, 0), t;
  }
}
class bl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 70);
    R(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "K":
        return oe(ce.hour11h, t);
      case "Ko":
        return n.ordinalNumber(t, { unit: "hour" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, n) {
    return t.getHours() >= 12 && n < 12 ? t.setHours(n + 12, 0, 0, 0) : t.setHours(n, 0, 0, 0), t;
  }
}
class Dl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 70);
    R(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "k":
        return oe(ce.hour24h, t);
      case "ko":
        return n.ordinalNumber(t, { unit: "hour" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, n) {
    const o = n <= 24 ? n % 24 : n;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class xl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 60);
    R(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "m":
        return oe(ce.minute, t);
      case "mo":
        return n.ordinalNumber(t, { unit: "minute" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, n) {
    return t.setMinutes(n, 0, 0), t;
  }
}
class kl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 50);
    R(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, n) {
    switch (e) {
      case "s":
        return oe(ce.second, t);
      case "so":
        return n.ordinalNumber(t, { unit: "second" });
      default:
        return ie(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, n) {
    return t.setSeconds(n, 0), t;
  }
}
class _l extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 30);
    R(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const n = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return le(ie(e.length, t), n);
  }
  set(t, e, n) {
    return t.setMilliseconds(n), t;
  }
}
class Cl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 10);
    R(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return Ie(
          Le.basicOptionalMinutes,
          t
        );
      case "XX":
        return Ie(Le.basic, t);
      case "XXXX":
        return Ie(
          Le.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Ie(
          Le.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Ie(Le.extended, t);
    }
  }
  set(t, e, n) {
    return e.timestampIsSet ? t : te(
      t,
      t.getTime() - Dr(t) - n
    );
  }
}
class El extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 10);
    R(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return Ie(
          Le.basicOptionalMinutes,
          t
        );
      case "xx":
        return Ie(Le.basic, t);
      case "xxxx":
        return Ie(
          Le.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Ie(
          Le.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Ie(Le.extended, t);
    }
  }
  set(t, e, n) {
    return e.timestampIsSet ? t : te(
      t,
      t.getTime() - Dr(t) - n
    );
  }
}
class Sl extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 40);
    R(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ro(t);
  }
  set(t, e, n) {
    return [te(t, n * 1e3), { timestampIsSet: !0 }];
  }
}
class Ml extends X {
  constructor() {
    super(...arguments);
    R(this, "priority", 20);
    R(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ro(t);
  }
  set(t, e, n) {
    return [te(t, n), { timestampIsSet: !0 }];
  }
}
const Pl = {
  G: new Vc(),
  y: new Gc(),
  Y: new qc(),
  R: new Uc(),
  u: new Xc(),
  Q: new Zc(),
  q: new Jc(),
  M: new el(),
  L: new tl(),
  w: new nl(),
  I: new ol(),
  d: new cl(),
  D: new ll(),
  E: new ul(),
  e: new dl(),
  c: new fl(),
  i: new hl(),
  a: new ml(),
  b: new gl(),
  B: new vl(),
  h: new yl(),
  H: new wl(),
  K: new bl(),
  k: new Dl(),
  m: new xl(),
  s: new kl(),
  S: new _l(),
  X: new Cl(),
  x: new El(),
  t: new Sl(),
  T: new Ml()
}, Tl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ol = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Rl = /^'([^]*?)'?$/, Nl = /''/g, Ll = /\S/, Il = /[a-zA-Z]/;
function Yl(r, a, t, e) {
  var w, b, D, x, E, N, C, S;
  const n = () => te((e == null ? void 0 : e.in) || t, NaN), o = jc(), i = (e == null ? void 0 : e.locale) ?? o.locale ?? Mo, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((b = (w = e == null ? void 0 : e.locale) == null ? void 0 : w.options) == null ? void 0 : b.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((x = (D = o.locale) == null ? void 0 : D.options) == null ? void 0 : x.firstWeekContainsDate) ?? 1, c = (e == null ? void 0 : e.weekStartsOn) ?? ((N = (E = e == null ? void 0 : e.locale) == null ? void 0 : E.options) == null ? void 0 : N.weekStartsOn) ?? o.weekStartsOn ?? ((S = (C = o.locale) == null ? void 0 : C.options) == null ? void 0 : S.weekStartsOn) ?? 0;
  if (!a)
    return r ? n() : I(t, e == null ? void 0 : e.in);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: c,
    locale: i
  }, u = [new Qc(e == null ? void 0 : e.in, t)], d = a.match(Ol).map((_) => {
    const P = _[0];
    if (P in hn) {
      const L = hn[P];
      return L(_, i.formatLong);
    }
    return _;
  }).join("").match(Tl), f = [];
  for (let _ of d) {
    const P = _[0], L = Pl[P];
    if (L) {
      const { incompatibleTokens: M } = L;
      if (Array.isArray(M)) {
        const H = f.find(
          (B) => M.includes(B.token) || B.token === P
        );
        if (H)
          throw new RangeError(
            `The format string mustn't contain \`${H.fullToken}\` and \`${_}\` at the same time`
          );
      } else if (L.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${_}\` and any other token at the same time`
        );
      f.push({ token: P, fullToken: _ });
      const Y = L.run(
        r,
        _,
        i.match,
        l
      );
      if (!Y)
        return n();
      u.push(Y.setter), r = Y.rest;
    } else {
      if (P.match(Il))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (_ === "''" ? _ = "'" : P === "'" && (_ = Fl(_)), r.indexOf(_) === 0)
        r = r.slice(_.length);
      else
        return n();
    }
  }
  if (r.length > 0 && Ll.test(r))
    return n();
  const h = u.map((_) => _.priority).sort((_, P) => P - _).filter((_, P, L) => L.indexOf(_) === P).map(
    (_) => u.filter((P) => P.priority === _).sort((P, L) => L.subPriority - P.subPriority)
  ).map((_) => _[0]);
  let m = I(t, e == null ? void 0 : e.in);
  if (isNaN(+m)) return n();
  const v = {};
  for (const _ of h) {
    if (!_.validate(m, l))
      return n();
    const P = _.set(m, v, l);
    Array.isArray(P) ? (m = P[0], Object.assign(v, P[1])) : m = P;
  }
  return m;
}
function Fl(r) {
  return r.match(Rl)[1].replace(Nl, "'");
}
function Al(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  );
  return e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth();
}
function jl(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  );
  return +pn(e) == +pn(n);
}
function Wl(r, a, t) {
  const [e, n] = Ge(
    t == null ? void 0 : t.in,
    r,
    a
  );
  return e.getFullYear() === n.getFullYear();
}
function Wt(r, a, t) {
  const e = +I(r, t == null ? void 0 : t.in), [n, o] = [
    +I(a.start, t == null ? void 0 : t.in),
    +I(a.end, t == null ? void 0 : t.in)
  ].sort((i, s) => i - s);
  return e >= n && e <= o;
}
function Hl(r, a, t) {
  return Te(r, -1, t);
}
function $l(r, a) {
  const t = () => te(a == null ? void 0 : a.in, NaN), n = Ql(r);
  let o;
  if (n.date) {
    const l = Vl(n.date, 2);
    o = Gl(l.restDateString, l.year);
  }
  if (!o || isNaN(+o)) return t();
  const i = +o;
  let s = 0, c;
  if (n.time && (s = ql(n.time), isNaN(s)))
    return t();
  if (n.timezone) {
    if (c = Ul(n.timezone), isNaN(c)) return t();
  } else {
    const l = new Date(i + s), u = I(0, a == null ? void 0 : a.in);
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
  return I(i + s + c, a == null ? void 0 : a.in);
}
const rr = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Bl = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Kl = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, zl = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Ql(r) {
  const a = {}, t = r.split(rr.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return a;
  if (/:/.test(t[0]) ? e = t[0] : (a.date = t[0], e = t[1], rr.timeZoneDelimiter.test(a.date) && (a.date = r.split(rr.timeZoneDelimiter)[0], e = r.substr(
    a.date.length,
    r.length
  ))), e) {
    const n = rr.timezone.exec(e);
    n ? (a.time = e.replace(n[1], ""), a.timezone = n[1]) : a.time = e;
  }
  return a;
}
function Vl(r, a) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + a) + "})|(\\d{2}|[+-]\\d{" + (2 + a) + "})$)"
  ), e = r.match(t);
  if (!e) return { year: NaN, restDateString: "" };
  const n = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? n : o * 100,
    restDateString: r.slice((e[1] || e[2]).length)
  };
}
function Gl(r, a) {
  if (a === null) return /* @__PURE__ */ new Date(NaN);
  const t = r.match(Bl);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], n = It(t[1]), o = It(t[2]) - 1, i = It(t[3]), s = It(t[4]), c = It(t[5]) - 1;
  if (e)
    return tu(a, s, c) ? Xl(a, s, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !Jl(a, o, i) || !eu(a, n) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(a, o, Math.max(n, i)), l);
  }
}
function It(r) {
  return r ? parseInt(r) : 1;
}
function ql(r) {
  const a = r.match(Kl);
  if (!a) return NaN;
  const t = tn(a[1]), e = tn(a[2]), n = tn(a[3]);
  return ru(t, e, n) ? t * Yr + e * Ir + n * 1e3 : NaN;
}
function tn(r) {
  return r && parseFloat(r.replace(",", ".")) || 0;
}
function Ul(r) {
  if (r === "Z") return 0;
  const a = r.match(zl);
  if (!a) return 0;
  const t = a[1] === "+" ? -1 : 1, e = parseInt(a[2]), n = a[3] && parseInt(a[3]) || 0;
  return nu(e, n) ? t * (e * Yr + n * Ir) : NaN;
}
function Xl(r, a, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(r, 0, 4);
  const n = e.getUTCDay() || 7, o = (a - 1) * 7 + t + 1 - n;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const Zl = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Io(r) {
  return r % 400 === 0 || r % 4 === 0 && r % 100 !== 0;
}
function Jl(r, a, t) {
  return a >= 0 && a <= 11 && t >= 1 && t <= (Zl[a] || (Io(r) ? 29 : 28));
}
function eu(r, a) {
  return a >= 1 && a <= (Io(r) ? 366 : 365);
}
function tu(r, a, t) {
  return a >= 1 && a <= 53 && t >= 0 && t <= 6;
}
function ru(r, a, t) {
  return r === 24 ? a === 0 && t === 0 : t >= 0 && t < 60 && a >= 0 && a < 60 && r >= 0 && r < 25;
}
function nu(r, a) {
  return a >= 0 && a <= 59;
}
function Se(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in), n = e.getFullYear(), o = e.getDate(), i = te(r, 0);
  i.setFullYear(n, a, 15), i.setHours(0, 0, 0, 0);
  const s = Ac(i);
  return e.setMonth(a, Math.min(o, s)), e;
}
function dr(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setHours(a), e;
}
function fr(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setMinutes(a), e;
}
function wt(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in), n = Math.trunc(e.getMonth() / 3) + 1, o = a - n;
  return Se(e, e.getMonth() + o * 3);
}
function pr(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return e.setSeconds(a), e;
}
function Re(r, a, t) {
  const e = I(r, t == null ? void 0 : t.in);
  return isNaN(+e) ? te(r, NaN) : (e.setFullYear(a), e);
}
function lt(r, a, t) {
  return Oe(r, -a, t);
}
function Yo(r, a, t) {
  return _n(r, -1, t);
}
function ya(r, a, t) {
  return xr(r, -1, t);
}
function _t(r, a, t) {
  return $e(r, -a, t);
}
function Ar() {
  return typeof window < "u";
}
function Pt(r) {
  return Fo(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function _e(r) {
  var a;
  return (r == null || (a = r.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function We(r) {
  var a;
  return (a = (Fo(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : a.documentElement;
}
function Fo(r) {
  return Ar() ? r instanceof Node || r instanceof _e(r).Node : !1;
}
function me(r) {
  return Ar() ? r instanceof Element || r instanceof _e(r).Element : !1;
}
function je(r) {
  return Ar() ? r instanceof HTMLElement || r instanceof _e(r).HTMLElement : !1;
}
function wa(r) {
  return !Ar() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof _e(r).ShadowRoot;
}
function zt(r) {
  const {
    overflow: a,
    overflowX: t,
    overflowY: e,
    display: n
  } = Pe(r);
  return /auto|scroll|overlay|hidden|clip/.test(a + e + t) && !["inline", "contents"].includes(n);
}
function au(r) {
  return ["table", "td", "th"].includes(Pt(r));
}
function jr(r) {
  return [":popover-open", ":modal"].some((a) => {
    try {
      return r.matches(a);
    } catch {
      return !1;
    }
  });
}
function Pn(r) {
  const a = Tn(), t = me(r) ? Pe(r) : r;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((e) => t[e] ? t[e] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !a && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !a && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e) => (t.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some((e) => (t.contain || "").includes(e));
}
function ou(r) {
  let a = tt(r);
  for (; je(a) && !Ct(a); ) {
    if (Pn(a))
      return a;
    if (jr(a))
      return null;
    a = tt(a);
  }
  return null;
}
function Tn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(r) {
  return ["html", "body", "#document"].includes(Pt(r));
}
function Pe(r) {
  return _e(r).getComputedStyle(r);
}
function Wr(r) {
  return me(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function tt(r) {
  if (Pt(r) === "html")
    return r;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    wa(r) && r.host || // Fallback.
    We(r)
  );
  return wa(a) ? a.host : a;
}
function Ao(r) {
  const a = tt(r);
  return Ct(a) ? r.ownerDocument ? r.ownerDocument.body : r.body : je(a) && zt(a) ? a : Ao(a);
}
function Ht(r, a, t) {
  var e;
  a === void 0 && (a = []), t === void 0 && (t = !0);
  const n = Ao(r), o = n === ((e = r.ownerDocument) == null ? void 0 : e.body), i = _e(n);
  if (o) {
    const s = gn(i);
    return a.concat(i, i.visualViewport || [], zt(n) ? n : [], s && t ? Ht(s) : []);
  }
  return a.concat(n, Ht(n, [], t));
}
function gn(r) {
  return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
const Et = Math.min, ut = Math.max, Mr = Math.round, nr = Math.floor, Fe = (r) => ({
  x: r,
  y: r
}), iu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, su = {
  start: "end",
  end: "start"
};
function cu(r, a, t) {
  return ut(r, Et(a, t));
}
function Hr(r, a) {
  return typeof r == "function" ? r(a) : r;
}
function St(r) {
  return r.split("-")[0];
}
function Qt(r) {
  return r.split("-")[1];
}
function lu(r) {
  return r === "x" ? "y" : "x";
}
function On(r) {
  return r === "y" ? "height" : "width";
}
function $t(r) {
  return ["top", "bottom"].includes(St(r)) ? "y" : "x";
}
function Rn(r) {
  return lu($t(r));
}
function uu(r, a, t) {
  t === void 0 && (t = !1);
  const e = Qt(r), n = Rn(r), o = On(n);
  let i = n === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return a.reference[o] > a.floating[o] && (i = Pr(i)), [i, Pr(i)];
}
function du(r) {
  const a = Pr(r);
  return [vn(r), a, vn(a)];
}
function vn(r) {
  return r.replace(/start|end/g, (a) => su[a]);
}
function fu(r, a, t) {
  const e = ["left", "right"], n = ["right", "left"], o = ["top", "bottom"], i = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return t ? a ? n : e : a ? e : n;
    case "left":
    case "right":
      return a ? o : i;
    default:
      return [];
  }
}
function pu(r, a, t, e) {
  const n = Qt(r);
  let o = fu(St(r), t === "start", e);
  return n && (o = o.map((i) => i + "-" + n), a && (o = o.concat(o.map(vn)))), o;
}
function Pr(r) {
  return r.replace(/left|right|bottom|top/g, (a) => iu[a]);
}
function hu(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function jo(r) {
  return typeof r != "number" ? hu(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function Tr(r) {
  const {
    x: a,
    y: t,
    width: e,
    height: n
  } = r;
  return {
    width: e,
    height: n,
    top: t,
    left: a,
    right: a + e,
    bottom: t + n,
    x: a,
    y: t
  };
}
function ba(r, a, t) {
  let {
    reference: e,
    floating: n
  } = r;
  const o = $t(a), i = Rn(a), s = On(i), c = St(a), l = o === "y", u = e.x + e.width / 2 - n.width / 2, d = e.y + e.height / 2 - n.height / 2, f = e[s] / 2 - n[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: e.y - n.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: e.y + e.height
      };
      break;
    case "right":
      h = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: e.x - n.width,
        y: d
      };
      break;
    default:
      h = {
        x: e.x,
        y: e.y
      };
  }
  switch (Qt(a)) {
    case "start":
      h[i] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      h[i] += f * (t && l ? -1 : 1);
      break;
  }
  return h;
}
const mu = async (r, a, t) => {
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i
  } = t, s = o.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(a));
  let l = await i.getElementRects({
    reference: r,
    floating: a,
    strategy: n
  }), {
    x: u,
    y: d
  } = ba(l, e, c), f = e, h = {}, m = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: w,
      fn: b
    } = s[v], {
      x: D,
      y: x,
      data: E,
      reset: N
    } = await b({
      x: u,
      y: d,
      initialPlacement: e,
      placement: f,
      strategy: n,
      middlewareData: h,
      rects: l,
      platform: i,
      elements: {
        reference: r,
        floating: a
      }
    });
    u = D ?? u, d = x ?? d, h = {
      ...h,
      [w]: {
        ...h[w],
        ...E
      }
    }, N && m <= 50 && (m++, typeof N == "object" && (N.placement && (f = N.placement), N.rects && (l = N.rects === !0 ? await i.getElementRects({
      reference: r,
      floating: a,
      strategy: n
    }) : N.rects), {
      x: u,
      y: d
    } = ba(l, f, c)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: n,
    middlewareData: h
  };
};
async function gu(r, a) {
  var t;
  a === void 0 && (a = {});
  const {
    x: e,
    y: n,
    platform: o,
    rects: i,
    elements: s,
    strategy: c
  } = r, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Hr(a, r), m = jo(h), w = s[f ? d === "floating" ? "reference" : "floating" : d], b = Tr(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(w))) == null || t ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), D = d === "floating" ? {
    x: e,
    y: n,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), E = await (o.isElement == null ? void 0 : o.isElement(x)) ? await (o.getScale == null ? void 0 : o.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Tr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: D,
    offsetParent: x,
    strategy: c
  }) : D);
  return {
    top: (b.top - N.top + m.top) / E.y,
    bottom: (N.bottom - b.bottom + m.bottom) / E.y,
    left: (b.left - N.left + m.left) / E.x,
    right: (N.right - b.right + m.right) / E.x
  };
}
const vu = (r) => ({
  name: "arrow",
  options: r,
  async fn(a) {
    const {
      x: t,
      y: e,
      placement: n,
      rects: o,
      platform: i,
      elements: s,
      middlewareData: c
    } = a, {
      element: l,
      padding: u = 0
    } = Hr(r, a) || {};
    if (l == null)
      return {};
    const d = jo(u), f = {
      x: t,
      y: e
    }, h = Rn(n), m = On(h), v = await i.getDimensions(l), w = h === "y", b = w ? "top" : "left", D = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", E = o.reference[m] + o.reference[h] - f[h] - o.floating[m], N = f[h] - o.reference[h], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let S = C ? C[x] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(C))) && (S = s.floating[x] || o.floating[m]);
    const _ = E / 2 - N / 2, P = S / 2 - v[m] / 2 - 1, L = Et(d[b], P), M = Et(d[D], P), Y = L, H = S - v[m] - M, B = S / 2 - v[m] / 2 + _, z = cu(Y, B, H), F = !c.arrow && Qt(n) != null && B !== z && o.reference[m] / 2 - (B < Y ? L : M) - v[m] / 2 < 0, W = F ? B < Y ? B - Y : B - H : 0;
    return {
      [h]: f[h] + W,
      data: {
        [h]: z,
        centerOffset: B - z - W,
        ...F && {
          alignmentOffset: W
        }
      },
      reset: F
    };
  }
}), yu = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(a) {
      var t, e;
      const {
        placement: n,
        middlewareData: o,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = a, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...w
      } = Hr(r, a);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const b = St(n), D = $t(s), x = St(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), N = f || (x || !v ? [Pr(s)] : du(s)), C = m !== "none";
      !f && C && N.push(...pu(s, v, m, E));
      const S = [s, ...N], _ = await gu(a, w), P = [];
      let L = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (u && P.push(_[b]), d) {
        const B = uu(n, i, E);
        P.push(_[B[0]], _[B[1]]);
      }
      if (L = [...L, {
        placement: n,
        overflows: P
      }], !P.every((B) => B <= 0)) {
        var M, Y;
        const B = (((M = o.flip) == null ? void 0 : M.index) || 0) + 1, z = S[B];
        if (z)
          return {
            data: {
              index: B,
              overflows: L
            },
            reset: {
              placement: z
            }
          };
        let F = (Y = L.filter((W) => W.overflows[0] <= 0).sort((W, j) => W.overflows[1] - j.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!F)
          switch (h) {
            case "bestFit": {
              var H;
              const W = (H = L.filter((j) => {
                if (C) {
                  const ne = $t(j.placement);
                  return ne === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ne === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((ne) => ne > 0).reduce((ne, De) => ne + De, 0)]).sort((j, ne) => j[1] - ne[1])[0]) == null ? void 0 : H[0];
              W && (F = W);
              break;
            }
            case "initialPlacement":
              F = s;
              break;
          }
        if (n !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
async function wu(r, a) {
  const {
    placement: t,
    platform: e,
    elements: n
  } = r, o = await (e.isRTL == null ? void 0 : e.isRTL(n.floating)), i = St(t), s = Qt(t), c = $t(t) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = o && c ? -1 : 1, d = Hr(a, r);
  let {
    mainAxis: f,
    crossAxis: h,
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
  return s && typeof m == "number" && (h = s === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: f * l
  } : {
    x: f * l,
    y: h * u
  };
}
const bu = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(a) {
      var t, e;
      const {
        x: n,
        y: o,
        placement: i,
        middlewareData: s
      } = a, c = await wu(a, r);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : {
        x: n + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
};
function Wo(r) {
  const a = Pe(r);
  let t = parseFloat(a.width) || 0, e = parseFloat(a.height) || 0;
  const n = je(r), o = n ? r.offsetWidth : t, i = n ? r.offsetHeight : e, s = Mr(t) !== o || Mr(e) !== i;
  return s && (t = o, e = i), {
    width: t,
    height: e,
    $: s
  };
}
function Nn(r) {
  return me(r) ? r : r.contextElement;
}
function bt(r) {
  const a = Nn(r);
  if (!je(a))
    return Fe(1);
  const t = a.getBoundingClientRect(), {
    width: e,
    height: n,
    $: o
  } = Wo(a);
  let i = (o ? Mr(t.width) : t.width) / e, s = (o ? Mr(t.height) : t.height) / n;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Du = /* @__PURE__ */ Fe(0);
function Ho(r) {
  const a = _e(r);
  return !Tn() || !a.visualViewport ? Du : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function xu(r, a, t) {
  return a === void 0 && (a = !1), !t || a && t !== _e(r) ? !1 : a;
}
function pt(r, a, t, e) {
  a === void 0 && (a = !1), t === void 0 && (t = !1);
  const n = r.getBoundingClientRect(), o = Nn(r);
  let i = Fe(1);
  a && (e ? me(e) && (i = bt(e)) : i = bt(r));
  const s = xu(o, t, e) ? Ho(o) : Fe(0);
  let c = (n.left + s.x) / i.x, l = (n.top + s.y) / i.y, u = n.width / i.x, d = n.height / i.y;
  if (o) {
    const f = _e(o), h = e && me(e) ? _e(e) : e;
    let m = f, v = gn(m);
    for (; v && e && h !== m; ) {
      const w = bt(v), b = v.getBoundingClientRect(), D = Pe(v), x = b.left + (v.clientLeft + parseFloat(D.paddingLeft)) * w.x, E = b.top + (v.clientTop + parseFloat(D.paddingTop)) * w.y;
      c *= w.x, l *= w.y, u *= w.x, d *= w.y, c += x, l += E, m = _e(v), v = gn(m);
    }
  }
  return Tr({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Ln(r, a) {
  const t = Wr(r).scrollLeft;
  return a ? a.left + t : pt(We(r)).left + t;
}
function $o(r, a, t) {
  t === void 0 && (t = !1);
  const e = r.getBoundingClientRect(), n = e.left + a.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Ln(r, e)
  )), o = e.top + a.scrollTop;
  return {
    x: n,
    y: o
  };
}
function ku(r) {
  let {
    elements: a,
    rect: t,
    offsetParent: e,
    strategy: n
  } = r;
  const o = n === "fixed", i = We(e), s = a ? jr(a.floating) : !1;
  if (e === i || s && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Fe(1);
  const u = Fe(0), d = je(e);
  if ((d || !d && !o) && ((Pt(e) !== "body" || zt(i)) && (c = Wr(e)), je(e))) {
    const h = pt(e);
    l = bt(e), u.x = h.x + e.clientLeft, u.y = h.y + e.clientTop;
  }
  const f = i && !d && !o ? $o(i, c, !0) : Fe(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + f.y
  };
}
function _u(r) {
  return Array.from(r.getClientRects());
}
function Cu(r) {
  const a = We(r), t = Wr(r), e = r.ownerDocument.body, n = ut(a.scrollWidth, a.clientWidth, e.scrollWidth, e.clientWidth), o = ut(a.scrollHeight, a.clientHeight, e.scrollHeight, e.clientHeight);
  let i = -t.scrollLeft + Ln(r);
  const s = -t.scrollTop;
  return Pe(e).direction === "rtl" && (i += ut(a.clientWidth, e.clientWidth) - n), {
    width: n,
    height: o,
    x: i,
    y: s
  };
}
function Eu(r, a) {
  const t = _e(r), e = We(r), n = t.visualViewport;
  let o = e.clientWidth, i = e.clientHeight, s = 0, c = 0;
  if (n) {
    o = n.width, i = n.height;
    const l = Tn();
    (!l || l && a === "fixed") && (s = n.offsetLeft, c = n.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function Su(r, a) {
  const t = pt(r, !0, a === "fixed"), e = t.top + r.clientTop, n = t.left + r.clientLeft, o = je(r) ? bt(r) : Fe(1), i = r.clientWidth * o.x, s = r.clientHeight * o.y, c = n * o.x, l = e * o.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Da(r, a, t) {
  let e;
  if (a === "viewport")
    e = Eu(r, t);
  else if (a === "document")
    e = Cu(We(r));
  else if (me(a))
    e = Su(a, t);
  else {
    const n = Ho(r);
    e = {
      x: a.x - n.x,
      y: a.y - n.y,
      width: a.width,
      height: a.height
    };
  }
  return Tr(e);
}
function Bo(r, a) {
  const t = tt(r);
  return t === a || !me(t) || Ct(t) ? !1 : Pe(t).position === "fixed" || Bo(t, a);
}
function Mu(r, a) {
  const t = a.get(r);
  if (t)
    return t;
  let e = Ht(r, [], !1).filter((s) => me(s) && Pt(s) !== "body"), n = null;
  const o = Pe(r).position === "fixed";
  let i = o ? tt(r) : r;
  for (; me(i) && !Ct(i); ) {
    const s = Pe(i), c = Pn(i);
    !c && s.position === "fixed" && (n = null), (o ? !c && !n : !c && s.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || zt(i) && !c && Bo(r, i)) ? e = e.filter((u) => u !== i) : n = s, i = tt(i);
  }
  return a.set(r, e), e;
}
function Pu(r) {
  let {
    element: a,
    boundary: t,
    rootBoundary: e,
    strategy: n
  } = r;
  const i = [...t === "clippingAncestors" ? jr(a) ? [] : Mu(a, this._c) : [].concat(t), e], s = i[0], c = i.reduce((l, u) => {
    const d = Da(a, u, n);
    return l.top = ut(d.top, l.top), l.right = Et(d.right, l.right), l.bottom = Et(d.bottom, l.bottom), l.left = ut(d.left, l.left), l;
  }, Da(a, s, n));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Tu(r) {
  const {
    width: a,
    height: t
  } = Wo(r);
  return {
    width: a,
    height: t
  };
}
function Ou(r, a, t) {
  const e = je(a), n = We(a), o = t === "fixed", i = pt(r, !0, o, a);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Fe(0);
  if (e || !e && !o)
    if ((Pt(a) !== "body" || zt(n)) && (s = Wr(a)), e) {
      const f = pt(a, !0, o, a);
      c.x = f.x + a.clientLeft, c.y = f.y + a.clientTop;
    } else n && (c.x = Ln(n));
  const l = n && !e && !o ? $o(n, s) : Fe(0), u = i.left + s.scrollLeft - c.x - l.x, d = i.top + s.scrollTop - c.y - l.y;
  return {
    x: u,
    y: d,
    width: i.width,
    height: i.height
  };
}
function rn(r) {
  return Pe(r).position === "static";
}
function xa(r, a) {
  if (!je(r) || Pe(r).position === "fixed")
    return null;
  if (a)
    return a(r);
  let t = r.offsetParent;
  return We(r) === t && (t = t.ownerDocument.body), t;
}
function Ko(r, a) {
  const t = _e(r);
  if (jr(r))
    return t;
  if (!je(r)) {
    let n = tt(r);
    for (; n && !Ct(n); ) {
      if (me(n) && !rn(n))
        return n;
      n = tt(n);
    }
    return t;
  }
  let e = xa(r, a);
  for (; e && au(e) && rn(e); )
    e = xa(e, a);
  return e && Ct(e) && rn(e) && !Pn(e) ? t : e || ou(r) || t;
}
const Ru = async function(r) {
  const a = this.getOffsetParent || Ko, t = this.getDimensions, e = await t(r.floating);
  return {
    reference: Ou(r.reference, await a(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function Nu(r) {
  return Pe(r).direction === "rtl";
}
const Lu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ku,
  getDocumentElement: We,
  getClippingRect: Pu,
  getOffsetParent: Ko,
  getElementRects: Ru,
  getClientRects: _u,
  getDimensions: Tu,
  getScale: bt,
  isElement: me,
  isRTL: Nu
};
function zo(r, a) {
  return r.x === a.x && r.y === a.y && r.width === a.width && r.height === a.height;
}
function Iu(r, a) {
  let t = null, e;
  const n = We(r);
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
      height: h
    } = l;
    if (s || a(), !f || !h)
      return;
    const m = nr(d), v = nr(n.clientWidth - (u + f)), w = nr(n.clientHeight - (d + h)), b = nr(u), x = {
      rootMargin: -m + "px " + -v + "px " + -w + "px " + -b + "px",
      threshold: ut(0, Et(1, c)) || 1
    };
    let E = !0;
    function N(C) {
      const S = C[0].intersectionRatio;
      if (S !== c) {
        if (!E)
          return i();
        S ? i(!1, S) : e = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !zo(l, r.getBoundingClientRect()) && i(), E = !1;
    }
    try {
      t = new IntersectionObserver(N, {
        ...x,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(N, x);
    }
    t.observe(r);
  }
  return i(!0), o;
}
function Yu(r, a, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = Nn(r), u = n || o ? [...l ? Ht(l) : [], ...Ht(a)] : [];
  u.forEach((b) => {
    n && b.addEventListener("scroll", t, {
      passive: !0
    }), o && b.addEventListener("resize", t);
  });
  const d = l && s ? Iu(l, t) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((b) => {
    let [D] = b;
    D && D.target === l && h && (h.unobserve(a), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(a);
    })), t();
  }), l && !c && h.observe(l), h.observe(a));
  let m, v = c ? pt(r) : null;
  c && w();
  function w() {
    const b = pt(r);
    v && !zo(v, b) && t(), v = b, m = requestAnimationFrame(w);
  }
  return t(), () => {
    var b;
    u.forEach((D) => {
      n && D.removeEventListener("scroll", t), o && D.removeEventListener("resize", t);
    }), d == null || d(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const Fu = bu, Au = yu, ka = vu, ju = (r, a, t) => {
  const e = /* @__PURE__ */ new Map(), n = {
    platform: Lu,
    ...t
  }, o = {
    ...n.platform,
    _c: e
  };
  return mu(r, a, {
    ...n,
    platform: o
  });
};
var hr = typeof document < "u" ? bn : we;
function Or(r, a) {
  if (r === a)
    return !0;
  if (typeof r != typeof a)
    return !1;
  if (typeof r == "function" && r.toString() === a.toString())
    return !0;
  let t, e, n;
  if (r && a && typeof r == "object") {
    if (Array.isArray(r)) {
      if (t = r.length, t !== a.length) return !1;
      for (e = t; e-- !== 0; )
        if (!Or(r[e], a[e]))
          return !1;
      return !0;
    }
    if (n = Object.keys(r), t = n.length, t !== Object.keys(a).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(a, n[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = n[e];
      if (!(o === "_owner" && r.$$typeof) && !Or(r[o], a[o]))
        return !1;
    }
    return !0;
  }
  return r !== r && a !== a;
}
function Qo(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _a(r, a) {
  const t = Qo(r);
  return Math.round(a * t) / t;
}
function nn(r) {
  const a = $.useRef(r);
  return hr(() => {
    a.current = r;
  }), a;
}
function Wu(r) {
  r === void 0 && (r = {});
  const {
    placement: a = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: n,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = r, [u, d] = $.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = $.useState(e);
  Or(f, e) || h(e);
  const [m, v] = $.useState(null), [w, b] = $.useState(null), D = $.useCallback((j) => {
    j !== C.current && (C.current = j, v(j));
  }, []), x = $.useCallback((j) => {
    j !== S.current && (S.current = j, b(j));
  }, []), E = o || m, N = i || w, C = $.useRef(null), S = $.useRef(null), _ = $.useRef(u), P = c != null, L = nn(c), M = nn(n), Y = nn(l), H = $.useCallback(() => {
    if (!C.current || !S.current)
      return;
    const j = {
      placement: a,
      strategy: t,
      middleware: f
    };
    M.current && (j.platform = M.current), ju(C.current, S.current, j).then((ne) => {
      const De = {
        ...ne,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      B.current && !Or(_.current, De) && (_.current = De, Wi.flushSync(() => {
        d(De);
      }));
    });
  }, [f, a, t, M, Y]);
  hr(() => {
    l === !1 && _.current.isPositioned && (_.current.isPositioned = !1, d((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [l]);
  const B = $.useRef(!1);
  hr(() => (B.current = !0, () => {
    B.current = !1;
  }), []), hr(() => {
    if (E && (C.current = E), N && (S.current = N), E && N) {
      if (L.current)
        return L.current(E, N, H);
      H();
    }
  }, [E, N, H, L, P]);
  const z = $.useMemo(() => ({
    reference: C,
    floating: S,
    setReference: D,
    setFloating: x
  }), [D, x]), F = $.useMemo(() => ({
    reference: E,
    floating: N
  }), [E, N]), W = $.useMemo(() => {
    const j = {
      position: t,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return j;
    const ne = _a(F.floating, u.x), De = _a(F.floating, u.y);
    return s ? {
      ...j,
      transform: "translate(" + ne + "px, " + De + "px)",
      ...Qo(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: ne,
      top: De
    };
  }, [t, s, F.floating, u.x, u.y]);
  return $.useMemo(() => ({
    ...u,
    update: H,
    refs: z,
    elements: F,
    floatingStyles: W
  }), [u, H, z, F, W]);
}
const Hu = (r) => {
  function a(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: r,
    fn(t) {
      const {
        element: e,
        padding: n
      } = typeof r == "function" ? r(t) : r;
      return e && a(e) ? e.current != null ? ka({
        element: e.current,
        padding: n
      }).fn(t) : {} : e ? ka({
        element: e,
        padding: n
      }).fn(t) : {};
    }
  };
}, $u = (r, a) => ({
  ...Fu(r),
  options: [r, a]
}), Bu = (r, a) => ({
  ...Au(r),
  options: [r, a]
}), Ku = (r, a) => ({
  ...Hu(r),
  options: [r, a]
}), Vo = {
  ...$
}, zu = Vo.useInsertionEffect, Qu = zu || ((r) => r());
function Vu(r) {
  const a = $.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Qu(() => {
    a.current = r;
  }), $.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return a.current == null ? void 0 : a.current(...e);
  }, []);
}
var Rr = typeof document < "u" ? bn : we;
let Ca = !1, Gu = 0;
const Ea = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Gu++
);
function qu() {
  const [r, a] = $.useState(() => Ca ? Ea() : void 0);
  return Rr(() => {
    r == null && a(Ea());
  }, []), $.useEffect(() => {
    Ca = !0;
  }, []), r;
}
const Uu = Vo.useId, Go = Uu || qu;
let Bt;
process.env.NODE_ENV !== "production" && (Bt = /* @__PURE__ */ new Set());
function Xu() {
  for (var r, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const n = "Floating UI: " + t.join(" ");
  if (!((r = Bt) != null && r.has(n))) {
    var o;
    (o = Bt) == null || o.add(n), console.warn(n);
  }
}
function Zu() {
  for (var r, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const n = "Floating UI: " + t.join(" ");
  if (!((r = Bt) != null && r.has(n))) {
    var o;
    (o = Bt) == null || o.add(n), console.error(n);
  }
}
const Ju = /* @__PURE__ */ $.forwardRef(function(a, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: n
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
    d: h,
    style: {
      transform: m,
      ...v
    } = {},
    ...w
  } = a;
  process.env.NODE_ENV !== "production" && (t || Xu("The `ref` prop is required for `FloatingArrow`."));
  const b = Go(), [D, x] = $.useState(!1);
  if (Rr(() => {
    if (!n) return;
    Pe(n).direction === "rtl" && x(!0);
  }, [n]), !n)
    return null;
  const [E, N] = e.split("-"), C = E === "top" || E === "bottom";
  let S = d;
  (C && i != null && i.x || !C && i != null && i.y) && (S = null);
  const _ = u * 2, P = _ / 2, L = s / 2 * (l / -8 + 1), M = c / 2 * l / 4, Y = !!h, H = S && N === "end" ? "bottom" : "top";
  let B = S && N === "end" ? "right" : "left";
  S && D && (B = N === "end" ? "left" : "right");
  const z = (o == null ? void 0 : o.x) != null ? S || o.x : "", F = (o == null ? void 0 : o.y) != null ? S || o.y : "", W = h || "M0,0" + (" H" + s) + (" L" + (s - L) + "," + (c - M)) + (" Q" + s / 2 + "," + c + " " + L + "," + (c - M)) + " Z", j = {
    top: Y ? "rotate(180deg)" : "",
    left: Y ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: Y ? "" : "rotate(180deg)",
    right: Y ? "rotate(-90deg)" : "rotate(90deg)"
  }[E];
  return /* @__PURE__ */ g.jsxs("svg", {
    ...w,
    "aria-hidden": !0,
    ref: t,
    width: Y ? s : s + _,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [B]: z,
      [H]: F,
      [E]: C || Y ? "100%" : "calc(100% - " + _ / 2 + "px)",
      transform: [j, m].filter((ne) => !!ne).join(" "),
      ...v
    },
    children: [_ > 0 && /* @__PURE__ */ g.jsx("path", {
      clipPath: "url(#" + b + ")",
      fill: "none",
      stroke: f,
      strokeWidth: _ + (h ? 0 : 1),
      d: W
    }), /* @__PURE__ */ g.jsx("path", {
      stroke: _ && !h ? w.fill : "none",
      d: W
    }), /* @__PURE__ */ g.jsx("clipPath", {
      id: b,
      children: /* @__PURE__ */ g.jsx("rect", {
        x: -P,
        y: P * (Y ? -1 : 1),
        width: s + _,
        height: s
      })
    })]
  });
});
function ed() {
  const r = /* @__PURE__ */ new Map();
  return {
    emit(a, t) {
      var e;
      (e = r.get(a)) == null || e.forEach((n) => n(t));
    },
    on(a, t) {
      r.set(a, [...r.get(a) || [], t]);
    },
    off(a, t) {
      var e;
      r.set(a, ((e = r.get(a)) == null ? void 0 : e.filter((n) => n !== t)) || []);
    }
  };
}
const td = /* @__PURE__ */ $.createContext(null), rd = /* @__PURE__ */ $.createContext(null), nd = () => {
  var r;
  return ((r = $.useContext(td)) == null ? void 0 : r.id) || null;
}, ad = () => $.useContext(rd);
function od(r) {
  const {
    open: a = !1,
    onOpenChange: t,
    elements: e
  } = r, n = Go(), o = $.useRef({}), [i] = $.useState(() => ed()), s = nd() != null;
  if (process.env.NODE_ENV !== "production") {
    const h = e.reference;
    h && !me(h) && Zu("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = $.useState(e.reference), u = Vu((h, m, v) => {
    o.current.openEvent = h ? m : void 0, i.emit("openchange", {
      open: h,
      event: m,
      reason: v,
      nested: s
    }), t == null || t(h, m, v);
  }), d = $.useMemo(() => ({
    setPositionReference: l
  }), []), f = $.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return $.useMemo(() => ({
    dataRef: o,
    open: a,
    onOpenChange: u,
    elements: f,
    events: i,
    floatingId: n,
    refs: d
  }), [a, u, f, i, n, d]);
}
function id(r) {
  r === void 0 && (r = {});
  const {
    nodeId: a
  } = r, t = od({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), e = r.rootContext || t, n = e.elements, [o, i] = $.useState(null), [s, c] = $.useState(null), u = (n == null ? void 0 : n.domReference) || o, d = $.useRef(null), f = ad();
  Rr(() => {
    u && (d.current = u);
  }, [u]);
  const h = Wu({
    ...r,
    elements: {
      ...n,
      ...s && {
        reference: s
      }
    }
  }), m = $.useCallback((x) => {
    const E = me(x) ? {
      getBoundingClientRect: () => x.getBoundingClientRect(),
      contextElement: x
    } : x;
    c(E), h.refs.setReference(E);
  }, [h.refs]), v = $.useCallback((x) => {
    (me(x) || x === null) && (d.current = x, i(x)), (me(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    x !== null && !me(x)) && h.refs.setReference(x);
  }, [h.refs]), w = $.useMemo(() => ({
    ...h.refs,
    setReference: v,
    setPositionReference: m,
    domReference: d
  }), [h.refs, v, m]), b = $.useMemo(() => ({
    ...h.elements,
    domReference: u
  }), [h.elements, u]), D = $.useMemo(() => ({
    ...h,
    ...e,
    refs: w,
    elements: b,
    nodeId: a
  }), [h, w, b, a, e]);
  return Rr(() => {
    e.dataRef.current.floatingContext = D;
    const x = f == null ? void 0 : f.nodesRef.current.find((E) => E.id === a);
    x && (x.context = D);
  }), $.useMemo(() => ({
    ...h,
    context: D,
    refs: w,
    elements: b
  }), [h, w, b, D]);
}
/*!
  react-datepicker v8.2.1
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var yn = function(a, t) {
  return yn = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
  }, yn(a, t);
};
function fe(r, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
  yn(r, a);
  function t() {
    this.constructor = r;
  }
  r.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
}
var U = function() {
  return U = Object.assign || function(t) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, U.apply(this, arguments);
};
function Ye(r, a, t) {
  if (t || arguments.length === 2) for (var e = 0, n = a.length, o; e < n; e++)
    (o || !(e in a)) && (o || (o = Array.prototype.slice.call(a, 0, e)), o[e] = a[e]);
  return r.concat(o || Array.prototype.slice.call(a));
}
var sd = function(r) {
  var a = r.showTimeSelectOnly, t = a === void 0 ? !1 : a, e = r.showTime, n = e === void 0 ? !1 : e, o = r.className, i = r.children, s = t ? "Choose Time" : "Choose Date".concat(n ? " and Time" : "");
  return y.createElement("div", { className: o, role: "dialog", "aria-label": s, "aria-modal": "true" }, i);
}, cd = function(r, a) {
  var t = Ae(null), e = Ae(r);
  e.current = r;
  var n = Li(function(o) {
    var i, s = o.composed && o.composedPath && o.composedPath().find(function(c) {
      return c instanceof Node;
    }) || o.target;
    t.current && !t.current.contains(s) && (a && s instanceof HTMLElement && s.classList.contains(a) || (i = e.current) === null || i === void 0 || i.call(e, o));
  }, [a]);
  return we(function() {
    return document.addEventListener("mousedown", n), function() {
      document.removeEventListener("mousedown", n);
    };
  }, [n]), t;
}, $r = function(r) {
  var a = r.children, t = r.onClickOutside, e = r.className, n = r.containerRef, o = r.style, i = r.ignoreClass, s = cd(t, i);
  return y.createElement("div", { className: e, style: o, ref: function(c) {
    s.current = c, n && (n.current = c);
  } }, a);
}, T;
(function(r) {
  r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Home = "Home", r.End = "End", r.Enter = "Enter", r.Space = " ", r.Tab = "Tab", r.Escape = "Escape", r.Backspace = "Backspace", r.X = "x";
})(T || (T = {}));
function qo() {
  var r = typeof window < "u" ? window : globalThis;
  return r;
}
var Vt = 12;
function J(r) {
  if (r == null)
    return /* @__PURE__ */ new Date();
  var a = typeof r == "string" ? $l(r) : I(r);
  return Br(a) ? a : /* @__PURE__ */ new Date();
}
function an(r, a, t, e, n) {
  n === void 0 && (n = J());
  for (var o = Mt(t) || Mt(In()), i = Array.isArray(a) ? a : [a], s = 0, c = i; s < c.length; s++) {
    var l = c[s], u = Yl(r, l, n, {
      locale: o
    });
    if (Br(u) && (!e || r === ae(u, l, t)))
      return u;
  }
  return null;
}
function Br(r, a) {
  return kr(r) && !ft(r, /* @__PURE__ */ new Date("1/1/1800"));
}
function ae(r, a, t) {
  if (t === "en")
    return ga(r, a, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? Mt(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), e = e || Mt(In()), ga(r, a, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Ee(r, a) {
  var t = a.dateFormat, e = a.locale, n = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return r && ae(r, n, e) || "";
}
function ld(r, a, t) {
  if (!r)
    return "";
  var e = Ee(r, t), n = a ? Ee(a, t) : "";
  return "".concat(e, " - ").concat(n);
}
function ud(r, a) {
  if (!(r != null && r.length))
    return "";
  var t = r[0] ? Ee(r[0], a) : "";
  if (r.length === 1)
    return t;
  if (r.length === 2 && r[1]) {
    var e = Ee(r[1], a);
    return "".concat(t, ", ").concat(e);
  }
  var n = r.length - 1;
  return "".concat(t, " (+").concat(n, ")");
}
function on(r, a) {
  var t = a.hour, e = t === void 0 ? 0 : t, n = a.minute, o = n === void 0 ? 0 : n, i = a.second, s = i === void 0 ? 0 : i;
  return dr(fr(pr(r, s), o), e);
}
function dd(r) {
  return Cn(r);
}
function fd(r, a) {
  return ae(r, "ddd", a);
}
function mr(r) {
  return dt(r);
}
function Ze(r, a, t) {
  var e = Mt(a || In());
  return Ve(r, {
    locale: e,
    weekStartsOn: t
  });
}
function Qe(r) {
  return Eo(r);
}
function Ft(r) {
  return Fr(r);
}
function Sa(r) {
  return pn(r);
}
function Ma() {
  return dt(J());
}
function Pa(r) {
  return _o(r);
}
function pd(r) {
  return $s(r);
}
function hd(r) {
  return Co(r);
}
function Ne(r, a) {
  return r && a ? Wl(r, a) : !r && !a;
}
function ve(r, a) {
  return r && a ? Al(r, a) : !r && !a;
}
function Nr(r, a) {
  return r && a ? jl(r, a) : !r && !a;
}
function q(r, a) {
  return r && a ? Ws(r, a) : !r && !a;
}
function st(r, a) {
  return r && a ? Hc(r, a) : !r && !a;
}
function At(r, a, t) {
  var e, n = dt(a), o = _o(t);
  try {
    e = Wt(r, { start: n, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function In() {
  var r = qo();
  return r.__localeId__;
}
function Mt(r) {
  if (typeof r == "string") {
    var a = qo();
    return a.__localeData__ ? a.__localeData__[r] : void 0;
  } else
    return r;
}
function md(r, a, t) {
  return a(ae(r, "EEEE", t));
}
function gd(r, a) {
  return ae(r, "EEEEEE", a);
}
function vd(r, a) {
  return ae(r, "EEE", a);
}
function Yn(r, a) {
  return ae(Se(J(), r), "LLLL", a);
}
function Uo(r, a) {
  return ae(Se(J(), r), "LLL", a);
}
function yd(r, a) {
  return ae(wt(J(), r), "QQQ", a);
}
function Me(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.maxDate, o = t.excludeDates, i = t.excludeDateIntervals, s = t.includeDates, c = t.includeDateIntervals, l = t.filterDate;
  return Gt(r, { minDate: e, maxDate: n }) || o && o.some(function(u) {
    return u instanceof Date ? q(r, u) : q(r, u.date);
  }) || i && i.some(function(u) {
    var d = u.start, f = u.end;
    return Wt(r, { start: d, end: f });
  }) || s && !s.some(function(u) {
    return q(r, u);
  }) || c && !c.some(function(u) {
    var d = u.start, f = u.end;
    return Wt(r, { start: d, end: f });
  }) || l && !l(J(r)) || !1;
}
function Fn(r, a) {
  var t = a === void 0 ? {} : a, e = t.excludeDates, n = t.excludeDateIntervals;
  return n && n.length > 0 ? n.some(function(o) {
    var i = o.start, s = o.end;
    return Wt(r, { start: i, end: s });
  }) : e && e.some(function(o) {
    var i;
    return o instanceof Date ? q(r, o) : q(r, (i = o.date) !== null && i !== void 0 ? i : /* @__PURE__ */ new Date());
  }) || !1;
}
function Xo(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Gt(r, {
    minDate: e ? Eo(e) : void 0,
    maxDate: n ? Co(n) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return ve(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return ve(r, c);
  }) || s && !s(J(r)) || !1;
}
function ar(r, a, t, e) {
  var n = K(r), o = ye(r), i = K(a), s = ye(a), c = K(e);
  return n === i && n === c ? o <= t && t <= s : n < i ? c === n && o <= t || c === i && s >= t || c < i && c > n : !1;
}
function wd(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.maxDate, o = t.excludeDates, i = t.includeDates;
  return Gt(r, { minDate: e, maxDate: n }) || o && o.some(function(s) {
    return ve(s instanceof Date ? s : s.date, r);
  }) || i && !i.some(function(s) {
    return ve(s, r);
  }) || !1;
}
function or(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Gt(r, { minDate: e, maxDate: n }) || (o == null ? void 0 : o.some(function(c) {
    return Nr(r, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return Nr(r, c);
  }) || s && !s(J(r)) || !1;
}
function ir(r, a, t) {
  if (!a || !t || !kr(a) || !kr(t))
    return !1;
  var e = K(a), n = K(t);
  return e <= r && n >= r;
}
function gr(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate, c = new Date(r, 0, 1);
  return Gt(c, {
    minDate: e ? Fr(e) : void 0,
    maxDate: n ? So(n) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return Ne(c, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return Ne(c, l);
  }) || s && !s(J(c)) || !1;
}
function sr(r, a, t, e) {
  var n = K(r), o = ct(r), i = K(a), s = ct(a), c = K(e);
  return n === i && n === c ? o <= t && t <= s : n < i ? c === n && o <= t || c === i && s >= t || c < i && c > n : !1;
}
function Gt(r, a) {
  var t, e = a === void 0 ? {} : a, n = e.minDate, o = e.maxDate;
  return (t = n && kt(r, n) < 0 || o && kt(r, o) > 0) !== null && t !== void 0 ? t : !1;
}
function Ta(r, a) {
  return a.some(function(t) {
    return Ke(t) === Ke(r) && ze(t) === ze(r) && Xe(t) === Xe(r);
  });
}
function Oa(r, a) {
  var t = a === void 0 ? {} : a, e = t.excludeTimes, n = t.includeTimes, o = t.filterTime;
  return e && Ta(r, e) || n && !Ta(r, n) || o && !o(r) || !1;
}
function Ra(r, a) {
  var t = a.minTime, e = a.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var n = J();
  n = dr(n, Ke(r)), n = fr(n, ze(r)), n = pr(n, Xe(r));
  var o = J();
  o = dr(o, Ke(t)), o = fr(o, ze(t)), o = pr(o, Xe(t));
  var i = J();
  i = dr(i, Ke(e)), i = fr(i, ze(e)), i = pr(i, Xe(e));
  var s;
  try {
    s = !Wt(n, { start: o, end: i });
  } catch {
    s = !1;
  }
  return s;
}
function Na(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.includeDates, o = lt(r, 1);
  return e && _r(e, o) > 0 || n && n.every(function(i) {
    return _r(i, o) > 0;
  }) || !1;
}
function La(r, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, n = t.includeDates, o = Oe(r, 1);
  return e && _r(o, e) > 0 || n && n.every(function(i) {
    return _r(o, i) > 0;
  }) || !1;
}
function bd(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.includeDates, o = Fr(r), i = Yo(o);
  return e && Cr(e, i) > 0 || n && n.every(function(s) {
    return Cr(s, i) > 0;
  }) || !1;
}
function Dd(r, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, n = t.includeDates, o = So(r), i = _n(o, 1);
  return e && Cr(i, e) > 0 || n && n.every(function(s) {
    return Cr(i, s) > 0;
  }) || !1;
}
function Ia(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.includeDates, o = _t(r, 1);
  return e && Er(e, o) > 0 || n && n.every(function(i) {
    return Er(i, o) > 0;
  }) || !1;
}
function xd(r, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, n = t.yearItemNumber, o = n === void 0 ? Vt : n, i = Ft(_t(r, o)), s = Ue(i, o).endPeriod, c = e && K(e);
  return c && c > s || !1;
}
function Ya(r, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, n = t.includeDates, o = $e(r, 1);
  return e && Er(o, e) > 0 || n && n.every(function(i) {
    return Er(o, i) > 0;
  }) || !1;
}
function kd(r, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, n = t.yearItemNumber, o = n === void 0 ? Vt : n, i = $e(r, o), s = Ue(i, o).startPeriod, c = e && K(e);
  return c && c < s || !1;
}
function Zo(r) {
  var a = r.minDate, t = r.includeDates;
  if (t && a) {
    var e = t.filter(function(n) {
      return kt(n, a) >= 0;
    });
    return ua(e);
  } else return t ? ua(t) : a;
}
function Jo(r) {
  var a = r.maxDate, t = r.includeDates;
  if (t && a) {
    var e = t.filter(function(n) {
      return kt(n, a) <= 0;
    });
    return la(e);
  } else return t ? la(t) : a;
}
function Fa(r, a) {
  var t;
  r === void 0 && (r = []), a === void 0 && (a = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), n = 0, o = r.length; n < o; n++) {
    var i = r[n];
    if (Be(i)) {
      var s = ae(i, "MM.dd.yyyy"), c = e.get(s) || [];
      c.includes(a) || (c.push(a), e.set(s, c));
    } else if (typeof i == "object") {
      var l = Object.keys(i), u = (t = l[0]) !== null && t !== void 0 ? t : "", d = i[u];
      if (typeof u == "string" && Array.isArray(d))
        for (var f = 0, h = d.length; f < h; f++) {
          var m = d[f];
          if (m) {
            var s = ae(m, "MM.dd.yyyy"), c = e.get(s) || [];
            c.includes(u) || (c.push(u), e.set(s, c));
          }
        }
    }
  }
  return e;
}
function _d(r, a) {
  return r.length !== a.length ? !1 : r.every(function(t, e) {
    return t === a[e];
  });
}
function Cd(r, a) {
  r === void 0 && (r = []), a === void 0 && (a = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return r.forEach(function(e) {
    var n = e.date, o = e.holidayName;
    if (Be(n)) {
      var i = ae(n, "MM.dd.yyyy"), s = t.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === a && _d(s.holidayNames, [o]))) {
        s.className = a;
        var c = s.holidayNames;
        s.holidayNames = c ? Ye(Ye([], c, !0), [o], !1) : [o], t.set(i, s);
      }
    }
  }), t;
}
function Ed(r, a, t, e, n) {
  for (var o = n.length, i = [], s = 0; s < o; s++) {
    var c = r, l = n[s];
    l && (c = Ys(c, Ke(l)), c = fn(c, ze(l)), c = js(c, Xe(l)));
    var u = fn(r, (t + 1) * e);
    et(c, a) && ft(c, u) && l != null && i.push(l);
  }
  return i;
}
function Aa(r) {
  return r < 10 ? "0".concat(r) : "".concat(r);
}
function Ue(r, a) {
  a === void 0 && (a = Vt);
  var t = Math.ceil(K(r) / a) * a, e = t - (a - 1);
  return { startPeriod: e, endPeriod: t };
}
function Sd(r) {
  var a = new Date(r.getFullYear(), r.getMonth(), r.getDate()), t = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 24);
  return Math.round((+t - +a) / 36e5);
}
function ja(r) {
  var a = r.getSeconds(), t = r.getMilliseconds();
  return I(r.getTime() - a * 1e3 - t);
}
function Md(r, a) {
  return ja(r).getTime() === ja(a).getTime();
}
function Wa(r) {
  if (!Be(r))
    throw new Error("Invalid date");
  var a = new Date(r);
  return a.setHours(0, 0, 0, 0), a;
}
function Ha(r, a) {
  if (!Be(r) || !Be(a))
    throw new Error("Invalid date received");
  var t = Wa(r), e = Wa(a);
  return ft(t, e);
}
function ei(r) {
  return r.key === T.Space;
}
var Pd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.inputRef = y.createRef(), e.onTimeChange = function(n) {
        var o, i;
        e.setState({ time: n });
        var s = e.props.date, c = s instanceof Date && !isNaN(+s), l = c ? s : /* @__PURE__ */ new Date();
        if (n != null && n.includes(":")) {
          var u = n.split(":"), d = u[0], f = u[1];
          l.setHours(Number(d)), l.setMinutes(Number(f));
        }
        (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, l);
      }, e.renderTimeInput = function() {
        var n = e.state.time, o = e.props, i = o.date, s = o.timeString, c = o.customTimeInput;
        return c ? Xa(c, {
          date: i,
          value: n,
          onChange: e.onTimeChange
        }) : y.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var l;
          (l = e.inputRef.current) === null || l === void 0 || l.focus();
        }, required: !0, value: n, onChange: function(l) {
          e.onTimeChange(l.target.value || s);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return a.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, a.prototype.render = function() {
      return y.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        y.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        y.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          y.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, a;
  }(de)
), Td = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.dayEl = Je(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var n, o, i = e.key;
        i === T.Space && (e.preventDefault(), e.key = T.Enter), (o = (n = t.props).handleOnKeyDown) === null || o === void 0 || o.call(n, e);
      }, t.isSameDay = function(e) {
        return q(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var n = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !n && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), Me(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return Fn(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return q(t.props.day, Ze(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && q(e, Ze(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, n = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var i = ae(n, "MM.dd.yyyy");
        return o.get(i);
      }, t.getHolidaysClass = function() {
        var e, n = t.props, o = n.day, i = n.holidays;
        if (!i)
          return [void 0];
        var s = ae(o, "MM.dd.yyyy");
        return i.has(s) ? [(e = i.get(s)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, n = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : At(n, o, i);
      }, t.isInSelectingRange = function() {
        var e, n = t.props, o = n.day, i = n.selectsStart, s = n.selectsEnd, c = n.selectsRange, l = n.selectsDisabledDaysInRange, u = n.startDate, d = n.endDate, f = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(i || s || c) || !f || !l && t.isDisabled() ? !1 : i && d && (ft(f, d) || st(f, d)) ? At(o, f, d) : s && u && (et(f, u) || st(f, u)) || c && u && !d && (et(f, u) || st(f, u)) ? At(o, u, f) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var n = t.props, o = n.day, i = n.startDate, s = n.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? q(o, c) : q(o, i);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var n = t.props, o = n.day, i = n.endDate, s = n.selectsEnd, c = n.selectsRange, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s || c ? q(o, l) : q(o, i);
      }, t.isRangeStart = function() {
        var e = t.props, n = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : q(o, n);
      }, t.isRangeEnd = function() {
        var e = t.props, n = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : q(i, n);
      }, t.isWeekend = function() {
        var e = Fc(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === ye(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (ye(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(J());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(n) {
          return t.isSameDayOrWeek(n);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var n = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return pe("react-datepicker__day", n, "react-datepicker__day--" + fd(t.props.day), {
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
        var e = t.props, n = e.day, o = e.ariaLabelPrefixWhenEnabled, i = o === void 0 ? "Choose" : o, s = e.ariaLabelPrefixWhenDisabled, c = s === void 0 ? "Not available" : s, l = t.isDisabled() || t.isExcluded() ? c : i;
        return "".concat(l, " ").concat(ae(n, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, n = e.day, o = e.holidays, i = o === void 0 ? /* @__PURE__ */ new Map() : o, s = e.excludeDates, c = ae(n, "MM.dd.yyyy"), l = [];
        return i.has(c) && l.push.apply(l, i.get(c).holidayNames), t.isExcluded() && l.push(s == null ? void 0 : s.filter(function(u) {
          return u instanceof Date ? q(u, n) : q(u == null ? void 0 : u.date, n);
        }).map(function(u) {
          if (!(u instanceof Date))
            return u == null ? void 0 : u.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, n = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && q(n, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(va(t.props.day), t.props.day) : va(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          y.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && y.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return a.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, a.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, a.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, a.prototype.isDayActiveElement = function() {
      var t, e, n;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((n = document.activeElement) === null || n === void 0 ? void 0 : n.classList.contains("react-datepicker__day"));
    }, a.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, a;
  }(de)
), Od = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.weekNumberEl = Je(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var n, o, i = e.key;
        i === T.Space && (e.preventDefault(), e.key = T.Enter), (o = (n = t.props).handleOnKeyDown) === null || o === void 0 || o.call(n, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !q(t.props.date, t.props.selected) && q(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || q(t.props.date, t.props.selected) && q(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var n = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && q(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (n = !0), t.props.inline && !t.props.shouldFocusDayInline && (n = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (n = !0)), n && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, a.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, a.prototype.render = function() {
      var t = this.props, e = t.weekNumber, n = t.isWeekDisabled, o = t.ariaLabelPrefix, i = o === void 0 ? a.defaultProps.ariaLabelPrefix : o, s = t.onClick, c = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!s && !n,
        "react-datepicker__week-number--selected": !!s && q(this.props.date, this.props.selected)
      };
      return y.createElement("div", { ref: this.weekNumberEl, className: pe(c), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, a;
  }(de)
), Rd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return Me(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, n) {
        t.props.onDayClick && t.props.onDayClick(e, n);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, n, o) {
        for (var i, s, c, l = new Date(e), u = 0; u < 7; u++) {
          var d = new Date(e);
          d.setDate(d.getDate() + u);
          var f = !t.isDisabled(d);
          if (f) {
            l = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, n, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((i = t.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : a.defaultProps.shouldCloseOnSelect) && ((c = (s = t.props).setOpen) === null || c === void 0 || c.call(s, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : dd(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), n = Te(e, 6), o = new Date(e); o <= n; ) {
          if (!t.isDisabled(o))
            return !1;
          o = Te(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), n = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var i = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          n.push(y.createElement(Od, U({ key: "W" }, a.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: i })));
        }
        return n.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = Te(e, s);
          return y.createElement(Td, U({}, a.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return Ze(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !q(t.startOfWeek(), t.props.selected) && q(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": q(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return y.createElement("div", { className: pe(t) }, this.renderDays());
    }, a;
  }(de)
), Yt, Nd = 6, Dt = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, sn = (Yt = {}, Yt[Dt.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, Yt[Dt.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, Yt[Dt.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, Yt), cr = 1;
function $a(r, a) {
  return r ? Dt.FOUR_COLUMNS : a ? Dt.TWO_COLUMNS : Dt.THREE_COLUMNS;
}
var Ld = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.MONTH_REFS = Ye([], Array(12), !0).map(function() {
        return Je();
      }), t.QUARTER_REFS = Ye([], Array(4), !0).map(function() {
        return Je();
      }), t.isDisabled = function(e) {
        return Me(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return Fn(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, n) {
        var o, i;
        (i = (o = t.props).onDayClick) === null || i === void 0 || i.call(o, e, n, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var n, o;
        (o = (n = t.props).onDayMouseEnter) === null || o === void 0 || o.call(n, e);
      }, t.handleMouseLeave = function() {
        var e, n;
        (n = (e = t.props).onMouseLeave) === null || n === void 0 || n.call(e);
      }, t.isRangeStartMonth = function(e) {
        var n = t.props, o = n.day, i = n.startDate, s = n.endDate;
        return !i || !s ? !1 : ve(Se(o, e), i);
      }, t.isRangeStartQuarter = function(e) {
        var n = t.props, o = n.day, i = n.startDate, s = n.endDate;
        return !i || !s ? !1 : Nr(wt(o, e), i);
      }, t.isRangeEndMonth = function(e) {
        var n = t.props, o = n.day, i = n.startDate, s = n.endDate;
        return !i || !s ? !1 : ve(Se(o, e), s);
      }, t.isRangeEndQuarter = function(e) {
        var n = t.props, o = n.day, i = n.startDate, s = n.endDate;
        return !i || !s ? !1 : Nr(wt(o, e), s);
      }, t.isInSelectingRangeMonth = function(e) {
        var n, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (n = t.props.selectingDate) !== null && n !== void 0 ? n : t.props.preSelection;
        return !(s || c || l) || !f ? !1 : s && d ? ar(f, d, e, i) : c && u || l && u && !d ? ar(u, f, e, i) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var n;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.startDate, c = o.selectsStart, l = Se(i, e), u = (n = t.props.selectingDate) !== null && n !== void 0 ? n : t.props.preSelection;
        return c ? ve(l, u) : ve(l, s);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var n;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.endDate, c = o.selectsEnd, l = o.selectsRange, u = Se(i, e), d = (n = t.props.selectingDate) !== null && n !== void 0 ? n : t.props.preSelection;
        return c || l ? ve(u, d) : ve(u, s);
      }, t.isInSelectingRangeQuarter = function(e) {
        var n, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, u = o.startDate, d = o.endDate, f = (n = t.props.selectingDate) !== null && n !== void 0 ? n : t.props.preSelection;
        return !(s || c || l) || !f ? !1 : s && d ? sr(f, d, e, i) : c && u || l && u && !d ? sr(u, f, e, i) : !1;
      }, t.isWeekInMonth = function(e) {
        var n = t.props.day, o = Te(e, 6);
        return ve(e, n) || ve(o, n);
      }, t.isCurrentMonth = function(e, n) {
        return K(e) === K(J()) && n === ye(J());
      }, t.isCurrentQuarter = function(e, n) {
        return K(e) === K(J()) && n === ct(J());
      }, t.isSelectedMonth = function(e, n, o) {
        return ye(o) === n && K(e) === K(o);
      }, t.isSelectMonthInList = function(e, n, o) {
        return o.some(function(i) {
          return t.isSelectedMonth(e, n, i);
        });
      }, t.isSelectedQuarter = function(e, n, o) {
        return ct(e) === n && K(e) === K(o);
      }, t.renderWeeks = function() {
        for (var e = [], n = t.props.fixedHeight, o = 0, i = !1, s = Ze(Qe(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(m) {
          return t.props.showWeekPicker ? Ze(m, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(m) {
          return t.props.showWeekPicker ? Ze(m, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, u = t.props.selected ? l(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(y.createElement(Rd, U({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: s, month: ye(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: u, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !i; ) {
          o++, s = xr(s, 1);
          var f = n && o >= Nd, h = !n && !t.isWeekInMonth(s);
          if (f || h)
            if (t.props.peekNextMonth)
              i = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, n) {
        var o = t.isMonthDisabledForLabelDate(n), i = o.isDisabled, s = o.labelDate;
        i || t.handleDayClick(Qe(s), e);
      }, t.onMonthMouseEnter = function(e) {
        var n = t.isMonthDisabledForLabelDate(e), o = n.isDisabled, i = n.labelDate;
        o || t.handleDayMouseEnter(Qe(i));
      }, t.handleMonthNavigation = function(e, n) {
        var o, i, s, c;
        (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, n), (c = (s = t.MONTH_REFS[e]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, n, o) {
        var i, s = t.props, c = s.selected, l = s.preSelection, u = s.setPreSelection, d = s.minDate, f = s.maxDate, h = s.showFourColumnMonthYearPicker, m = s.showTwoColumnMonthYearPicker;
        if (l) {
          var v = $a(h, m), w = t.getVerticalOffset(v), b = (i = sn[v]) === null || i === void 0 ? void 0 : i.grid, D = function(S, _, P) {
            var L, M, Y = _, H = P;
            switch (S) {
              case T.ArrowRight:
                Y = Oe(_, cr), H = P === 11 ? 0 : P + cr;
                break;
              case T.ArrowLeft:
                Y = lt(_, cr), H = P === 0 ? 11 : P - cr;
                break;
              case T.ArrowUp:
                Y = lt(_, w), H = !((L = b == null ? void 0 : b[0]) === null || L === void 0) && L.includes(P) ? P + 12 - w : P - w;
                break;
              case T.ArrowDown:
                Y = Oe(_, w), H = !((M = b == null ? void 0 : b[b.length - 1]) === null || M === void 0) && M.includes(P) ? P - 12 + w : P + w;
                break;
            }
            return { newCalculatedDate: Y, newCalculatedMonth: H };
          }, x = function(S, _, P) {
            for (var L = 40, M = S, Y = !1, H = 0, B = D(M, _, P), z = B.newCalculatedDate, F = B.newCalculatedMonth; !Y; ) {
              if (H >= L) {
                z = _, F = P;
                break;
              }
              if (d && z < d) {
                M = T.ArrowRight;
                var W = D(M, z, F);
                z = W.newCalculatedDate, F = W.newCalculatedMonth;
              }
              if (f && z > f) {
                M = T.ArrowLeft;
                var W = D(M, z, F);
                z = W.newCalculatedDate, F = W.newCalculatedMonth;
              }
              if (wd(z, t.props)) {
                var W = D(M, z, F);
                z = W.newCalculatedDate, F = W.newCalculatedMonth;
              } else
                Y = !0;
              H++;
            }
            return { newCalculatedDate: z, newCalculatedMonth: F };
          };
          if (n === T.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), u == null || u(c));
            return;
          }
          var E = x(n, l, o), N = E.newCalculatedDate, C = E.newCalculatedMonth;
          switch (n) {
            case T.ArrowRight:
            case T.ArrowLeft:
            case T.ArrowUp:
            case T.ArrowDown:
              t.handleMonthNavigation(C, N);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var n, o;
        return (o = (n = sn[e]) === null || n === void 0 ? void 0 : n.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, n) {
        var o = t.props, i = o.disabledKeyboardNavigation, s = o.handleOnMonthKeyDown, c = e.key;
        c !== T.Tab && e.preventDefault(), i || t.handleKeyboardNavigation(e, c, n), s && s(e);
      }, t.onQuarterClick = function(e, n) {
        var o = wt(t.props.day, n);
        or(o, t.props) || t.handleDayClick(Sa(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var n = wt(t.props.day, e);
        or(n, t.props) || t.handleDayMouseEnter(Sa(n));
      }, t.handleQuarterNavigation = function(e, n) {
        var o, i, s, c;
        t.isDisabled(n) || t.isExcluded(n) || ((i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, n), (c = (s = t.QUARTER_REFS[e - 1]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, n) {
        var o, i, s = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case T.Enter:
              t.onQuarterClick(e, n), (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, t.props.selected);
              break;
            case T.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(n === 4 ? 1 : n + 1, _n(t.props.preSelection, 1));
              break;
            case T.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(n === 1 ? 4 : n - 1, Yo(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var n, o = t.props, i = o.day, s = o.minDate, c = o.maxDate, l = o.excludeDates, u = o.includeDates, d = Se(i, e);
        return {
          isDisabled: (n = (s || c || l || u) && Xo(d, t.props)) !== null && n !== void 0 ? n : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var n = t.isMonthDisabledForLabelDate(e).isDisabled;
        return n;
      }, t.getMonthClassNames = function(e) {
        var n = t.props, o = n.day, i = n.startDate, s = n.endDate, c = n.preSelection, l = n.monthClassName, u = l ? l(Se(o, e)) : void 0, d = t.getSelection();
        return pe("react-datepicker__month-text", "react-datepicker__month-".concat(e), u, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": i && s ? ar(i, s, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var n = ye(t.props.preSelection), o = t.isMonthDisabledForLabelDate(n).isDisabled, i = e === n && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var n = ct(t.props.preSelection), o = or(t.props.day, t.props), i = e === n && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getAriaLabel = function(e) {
        var n = t.props, o = n.chooseDayAriaLabelPrefix, i = o === void 0 ? "Choose" : o, s = n.disabledDayAriaLabelPrefix, c = s === void 0 ? "Not available" : s, l = n.day, u = n.locale, d = Se(l, e), f = t.isDisabled(d) || t.isExcluded(d) ? c : i;
        return "".concat(f, " ").concat(ae(d, "MMMM yyyy", u));
      }, t.getQuarterClassNames = function(e) {
        var n = t.props, o = n.day, i = n.startDate, s = n.endDate, c = n.selected, l = n.minDate, u = n.maxDate, d = n.excludeDates, f = n.includeDates, h = n.filterDate, m = n.preSelection, v = n.disabledKeyboardNavigation, w = (l || u || d || f || h) && or(wt(o, e), t.props);
        return pe("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": w,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !v && m && t.isSelectedQuarter(o, e, m) && !w,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": i && s ? sr(i, s, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e),
          "react-datepicker__quarter-text--today": t.isCurrentQuarter(o, e)
        });
      }, t.getMonthContent = function(e) {
        var n = t.props, o = n.showFullMonthYearPicker, i = n.renderMonthContent, s = n.locale, c = n.day, l = Uo(e, s), u = Yn(e, s);
        return i ? i(e, l, u, c) : o ? u : l;
      }, t.getQuarterContent = function(e) {
        var n, o = t.props, i = o.renderQuarterContent, s = o.locale, c = yd(e, s);
        return (n = i == null ? void 0 : i(e, c)) !== null && n !== void 0 ? n : c;
      }, t.renderMonths = function() {
        var e, n = t.props, o = n.showTwoColumnMonthYearPicker, i = n.showFourColumnMonthYearPicker, s = n.day, c = n.selected, l = (e = sn[$a(i, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(u, d) {
          return y.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, u.map(function(f, h) {
            return y.createElement("div", { ref: t.MONTH_REFS[f], key: h, onClick: function(m) {
              t.onMonthClick(m, f);
            }, onKeyDown: function(m) {
              ei(m) && (m.preventDefault(), m.key = T.Enter), t.onMonthKeyDown(m, f);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(f);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(f);
            } : void 0, tabIndex: Number(t.getTabIndex(f)), className: t.getMonthClassNames(f), "aria-disabled": t.isMonthDisabled(f), role: "option", "aria-label": t.getAriaLabel(f), "aria-current": t.isCurrentMonth(s, f) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(s, f, c) : void 0 }, t.getMonthContent(f));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, n = e.day, o = e.selected, i = [1, 2, 3, 4];
        return y.createElement("div", { className: "react-datepicker__quarter-wrapper" }, i.map(function(s, c) {
          return y.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
            t.onQuarterClick(l, s);
          }, onKeyDown: function(l) {
            t.onQuarterKeyDown(l, s);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(s);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(s);
          } : void 0, className: t.getQuarterClassNames(s), "aria-selected": o ? t.isSelectedQuarter(n, s, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(s)), "aria-current": t.isCurrentQuarter(n, s) ? "date" : void 0 }, t.getQuarterContent(s));
        }));
      }, t.getClassNames = function() {
        var e = t.props, n = e.selectingDate, o = e.selectsStart, i = e.selectsEnd, s = e.showMonthYearPicker, c = e.showQuarterYearPicker, l = e.showWeekPicker;
        return pe("react-datepicker__month", {
          "react-datepicker__month--selecting-range": n && (o || i)
        }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": l });
      }, t;
    }
    return a.prototype.getSelection = function() {
      var t = this.props, e = t.selected, n = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return n;
      if (e)
        return [e];
    }, a.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, n = t.showQuarterYearPicker, o = t.day, i = t.ariaLabelPrefix, s = i === void 0 ? "Month " : i, c = s ? s.trim() + " " : "";
      return y.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(ae(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : n ? this.renderQuarters() : this.renderWeeks());
    }, a;
  }(de)
), Id = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, n) {
          return y.createElement(
            "div",
            { className: t.isSelectedMonth(n) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, n), "aria-selected": t.isSelectedMonth(n) ? "true" : void 0 },
            t.isSelectedMonth(n) ? y.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return a.prototype.render = function() {
      return y.createElement($r, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(de)
), Yd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(n, o) {
          return y.createElement("option", { key: n, value: o }, n);
        });
      }, t.renderSelectMode = function(e) {
        return y.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(n) {
          return t.onChange(parseInt(n.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, n) {
        return y.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          y.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          y.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, n[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return y.createElement(Id, U({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var n = t.state.dropdownVisible, o = [t.renderReadView(!n, e)];
        return n && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return Uo(o, t.props.locale);
      } : function(o) {
        return Yn(o, t.props.locale);
      }), n;
      switch (this.props.dropdownMode) {
        case "scroll":
          n = this.renderScrollMode(e);
          break;
        case "select":
          n = this.renderSelectMode(e);
          break;
      }
      return y.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, n);
    }, a;
  }(de)
);
function Fd(r, a) {
  for (var t = [], e = Qe(r), n = Qe(a); !et(e, n); )
    t.push(J(e)), e = Oe(e, 1);
  return t;
}
var Ad = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(n) {
          var o = mn(n), i = Ne(e.props.date, n) && ve(e.props.date, n);
          return y.createElement(
            "div",
            { className: i ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": i ? "true" : void 0 },
            i ? y.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            ae(n, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(n) {
        return e.props.onChange(n);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: Fd(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return a.prototype.render = function() {
      var t = pe({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return y.createElement($r, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(de)
), jd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = Qe(t.props.minDate), n = Qe(t.props.maxDate), o = []; !et(e, n); ) {
          var i = mn(e);
          o.push(y.createElement("option", { key: i, value: i }, ae(e, t.props.dateFormat, t.props.locale))), e = Oe(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return y.createElement("select", { value: mn(Qe(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var n = ae(t.props.date, t.props.dateFormat, t.props.locale);
        return y.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          y.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          y.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, n)
        );
      }, t.renderDropdown = function() {
        return y.createElement(Ad, U({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, n = [t.renderReadView(!e)];
        return e && n.unshift(t.renderDropdown()), n;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var n = J(e);
        Ne(t.props.date, n) && ve(t.props.date, n) || t.props.onChange(n);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return y.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(de)
), Wd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, n, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && a.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((n = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && n !== void 0 ? n : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var n, o;
        (t.props.minTime || t.props.maxTime) && Ra(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Oa(e, t.props) || (o = (n = t.props).onChange) === null || o === void 0 || o.call(n, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && Md(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && Ra(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Oa(e, t.props);
      }, t.liClasses = function(e) {
        var n, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (Ke(e) * 3600 + ze(e) * 60 + Xe(e)) % (((n = t.props.intervals) !== null && n !== void 0 ? n : a.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, n) {
        var o, i;
        e.key === T.Space && (e.preventDefault(), e.key = T.Enter), (e.key === T.ArrowUp || e.key === T.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === T.ArrowDown || e.key === T.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === T.Enter && t.handleClick(n), (i = (o = t.props).handleOnKeyDown) === null || i === void 0 || i.call(o, e);
      }, t.renderTimes = function() {
        for (var e, n = [], o = typeof t.props.format == "string" ? t.props.format : "p", i = (e = t.props.intervals) !== null && e !== void 0 ? e : a.defaultProps.intervals, s = t.props.selected || t.props.openToDate || J(), c = mr(s), l = t.props.injectTimes && t.props.injectTimes.sort(function(w, b) {
          return w.getTime() - b.getTime();
        }), u = 60 * Sd(s), d = u / i, f = 0; f < d; f++) {
          var h = fn(c, f * i);
          if (n.push(h), l) {
            var m = Ed(c, h, f, i, l);
            n = n.concat(m);
          }
        }
        var v = n.reduce(function(w, b) {
          return b.getTime() <= s.getTime() ? b : w;
        }, n[0]);
        return n.map(function(w) {
          return y.createElement("li", { key: w.valueOf(), onClick: t.handleClick.bind(t, w), className: t.liClasses(w), ref: function(b) {
            w === v && (t.centerLi = b);
          }, onKeyDown: function(b) {
            t.handleOnKeyDown(b, w);
          }, tabIndex: w === v ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(w) ? "true" : void 0, "aria-disabled": t.isDisabledTime(w) ? "true" : void 0 }, ae(w, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? y.createElement(y.Fragment, null) : y.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          y.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
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
    }), a.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, a.prototype.render = function() {
      var t = this, e, n = this.state.height;
      return y.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : a.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        y.createElement(
          "div",
          { className: "react-datepicker__time" },
          y.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            y.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: n ? { height: n } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, a.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, a;
  }(de)
), Ba = 3, Hd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.YEAR_REFS = Ye([], Array(e.props.yearItemNumber), !0).map(function() {
        return Je();
      }), e.isDisabled = function(n) {
        return Me(n, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(n) {
        return Fn(n, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var n;
        return (n = e.props.selectingDate) !== null && n !== void 0 ? n : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(n) {
        var o = function() {
          var i, s;
          (s = (i = e.YEAR_REFS[n]) === null || i === void 0 ? void 0 : i.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(n, o) {
        e.props.onDayClick && e.props.onDayClick(n, o);
      }, e.handleYearNavigation = function(n, o) {
        var i, s, c, l, u = e.props, d = u.date, f = u.yearItemNumber;
        if (!(d === void 0 || f === void 0)) {
          var h = Ue(d, f).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, o), n - h < 0 ? e.updateFocusOnPaginate(f - (h - n)) : n - h >= f ? e.updateFocusOnPaginate(Math.abs(f - (n - h))) : (l = (c = e.YEAR_REFS[n - h]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(n, o) {
        return q(n, o);
      }, e.isCurrentYear = function(n) {
        return n === K(J());
      }, e.isRangeStart = function(n) {
        return e.props.startDate && e.props.endDate && Ne(Re(J(), n), e.props.startDate);
      }, e.isRangeEnd = function(n) {
        return e.props.startDate && e.props.endDate && Ne(Re(J(), n), e.props.endDate);
      }, e.isInRange = function(n) {
        return ir(n, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(n) {
        var o = e.props, i = o.selectsStart, s = o.selectsEnd, c = o.selectsRange, l = o.startDate, u = o.endDate;
        return !(i || s || c) || !e.selectingDate() ? !1 : i && u ? ir(n, e.selectingDate(), u) : s && l || c && l && !u ? ir(n, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(n) {
        var o;
        if (!e.isInSelectingRange(n))
          return !1;
        var i = e.props, s = i.startDate, c = i.selectsStart, l = Re(J(), n);
        return c ? Ne(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ne(l, s ?? null);
      }, e.isSelectingRangeEnd = function(n) {
        var o;
        if (!e.isInSelectingRange(n))
          return !1;
        var i = e.props, s = i.endDate, c = i.selectsEnd, l = i.selectsRange, u = Re(J(), n);
        return c || l ? Ne(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Ne(u, s ?? null);
      }, e.isKeyboardSelected = function(n) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, i = o.minDate, s = o.maxDate, c = o.excludeDates, l = o.includeDates, u = o.filterDate, d = Ft(Re(e.props.date, n)), f = (i || s || c || l || u) && gr(n, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !q(d, Ft(e.props.selected)) && q(d, Ft(e.props.preSelection)) && !f;
        }
      }, e.onYearClick = function(n, o) {
        var i = e.props.date;
        i !== void 0 && e.handleYearClick(Ft(Re(i, o)), n);
      }, e.onYearKeyDown = function(n, o) {
        var i, s, c = n.key, l = e.props, u = l.date, d = l.yearItemNumber, f = l.handleOnKeyDown;
        if (c !== T.Tab && n.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case T.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(n, o), (s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, e.props.selected);
              break;
            case T.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, $e(e.props.preSelection, 1));
              break;
            case T.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, _t(e.props.preSelection, 1));
              break;
            case T.ArrowUp: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var h = Ue(u, d).startPeriod, m = Ba, v = o - m;
              if (v < h) {
                var w = d % m;
                o >= h && o < h + w ? m = w : m += w, v = o - m;
              }
              e.handleYearNavigation(v, _t(e.props.preSelection, m));
              break;
            }
            case T.ArrowDown: {
              if (u === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var b = Ue(u, d).endPeriod, m = Ba, v = o + m;
              if (v > b) {
                var w = d % m;
                o <= b && o > b - w ? m = w : m += w, v = o + m;
              }
              e.handleYearNavigation(v, $e(e.props.preSelection, m));
              break;
            }
          }
        f && f(n);
      }, e.getYearClassNames = function(n) {
        var o = e.props, i = o.date, s = o.minDate, c = o.maxDate, l = o.selected, u = o.excludeDates, d = o.includeDates, f = o.filterDate, h = o.yearClassName;
        return pe("react-datepicker__year-text", "react-datepicker__year-".concat(n), i ? h == null ? void 0 : h(Re(i, n)) : void 0, {
          "react-datepicker__year-text--selected": l ? n === K(l) : void 0,
          "react-datepicker__year-text--disabled": (s || c || u || d || f) && gr(n, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(n),
          "react-datepicker__year-text--range-start": e.isRangeStart(n),
          "react-datepicker__year-text--range-end": e.isRangeEnd(n),
          "react-datepicker__year-text--in-range": e.isInRange(n),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(n),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(n),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(n),
          "react-datepicker__year-text--today": e.isCurrentYear(n)
        });
      }, e.getYearTabIndex = function(n) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = K(e.props.preSelection), i = gr(n, e.props);
        return n === o && !i ? "0" : "-1";
      }, e.getYearContent = function(n) {
        return e.props.renderYearContent ? e.props.renderYearContent(n) : n;
      }, e;
    }
    return a.prototype.render = function() {
      var t = this, e = [], n = this.props, o = n.date, i = n.yearItemNumber, s = n.onYearMouseEnter, c = n.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = Ue(o, i), u = l.startPeriod, d = l.endPeriod, f = function(v) {
        e.push(y.createElement("div", { ref: h.YEAR_REFS[v - u], onClick: function(w) {
          t.onYearClick(w, v);
        }, onKeyDown: function(w) {
          ei(w) && (w.preventDefault(), w.key = T.Enter), t.onYearKeyDown(w, v);
        }, tabIndex: Number(h.getYearTabIndex(v)), className: h.getYearClassNames(v), onMouseEnter: h.props.usePointerEvent ? void 0 : function(w) {
          return s(w, v);
        }, onPointerEnter: h.props.usePointerEvent ? function(w) {
          return s(w, v);
        } : void 0, onMouseLeave: h.props.usePointerEvent ? void 0 : function(w) {
          return c(w, v);
        }, onPointerLeave: h.props.usePointerEvent ? function(w) {
          return c(w, v);
        } : void 0, key: v, "aria-current": h.isCurrentYear(v) ? "date" : void 0 }, h.getYearContent(v)));
      }, h = this, m = u; m <= d; m++)
        f(m);
      return y.createElement(
        "div",
        { className: "react-datepicker__year" },
        y.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, a;
  }(de)
);
function $d(r, a, t, e) {
  for (var n = [], o = 0; o < 2 * a + 1; o++) {
    var i = r + a - o, s = !0;
    t && (s = K(t) <= i), e && s && (s = K(e) >= i), s && n.push(i);
  }
  return n;
}
var Bd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      e.renderOptions = function() {
        var s = e.props.year, c = e.state.yearsList.map(function(d) {
          return y.createElement(
            "div",
            { className: s === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": s === d ? "true" : void 0 },
            s === d ? y.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), l = e.props.minDate ? K(e.props.minDate) : null, u = e.props.maxDate ? K(e.props.maxDate) : null;
        return (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.unshift(y.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          y.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.push(y.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          y.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
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
      var n = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, i = n || (o ? 10 : 5);
      return e.state = {
        yearsList: $d(e.props.year, i, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = Je(), e;
    }
    return a.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, n = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = n && n instanceof HTMLElement ? n.offsetTop + (n.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, a.prototype.render = function() {
      var t = pe({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return y.createElement($r, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(de)
), Kd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? K(t.props.minDate) : 1900, n = t.props.maxDate ? K(t.props.maxDate) : 2100, o = [], i = e; i <= n; i++)
          o.push(y.createElement("option", { key: i, value: i }, i));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return y.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return y.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(n) {
            return t.toggleDropdown(n);
          } },
          y.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          y.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return y.createElement(Bd, U({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, n = [t.renderReadView(!e)];
        return e && n.unshift(t.renderDropdown()), n;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, n) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, n), t.setOpen();
      }, t.onSelect = function(e, n) {
        var o, i;
        (i = (o = t.props).onSelect) === null || i === void 0 || i.call(o, e, n);
      }, t.setOpen = function() {
        var e, n;
        (n = (e = t.props).setOpen) === null || n === void 0 || n.call(e, !0);
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return y.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(de)
), zd = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], Qd = function(r) {
  var a = (r.className || "").split(/\s+/);
  return zd.some(function(t) {
    return a.indexOf(t) >= 0;
  });
}, Vd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(n) {
        e.props.onClickOutside(n);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(n) {
        var o, i;
        Qd(n.target) && ((i = (o = e.props).onDropdownFocus) === null || i === void 0 || i.call(o, n));
      }, e.getDateInView = function() {
        var n = e.props, o = n.preSelection, i = n.selected, s = n.openToDate, c = Zo(e.props), l = Jo(e.props), u = J(), d = s || i || o;
        return d || (c && ft(u, c) ? c : l && et(u, l) ? l : u);
      }, e.increaseMonth = function() {
        e.setState(function(n) {
          var o = n.date;
          return {
            date: Oe(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(n) {
          var o = n.date;
          return {
            date: lt(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(n, o, i) {
        e.props.onSelect(n, o, i), e.props.setPreSelection && e.props.setPreSelection(n);
      }, e.handleDayMouseEnter = function(n) {
        e.setState({ selectingDate: n }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(n);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(n, o) {
        e.setState({ selectingDate: Re(J(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(n, o);
      }, e.handleYearMouseLeave = function(n, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(n, o);
      }, e.handleYearChange = function(n) {
        var o, i, s, c;
        (i = (o = e.props).onYearChange) === null || i === void 0 || i.call(o, n), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(n), (c = (s = e.props).setOpen) === null || c === void 0 || c.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(n);
      }, e.getEnabledPreSelectionDateForMonth = function(n) {
        if (!Me(n, e.props))
          return n;
        for (var o = Qe(n), i = hd(n), s = Hs(i, o), c = null, l = 0; l <= s; l++) {
          var u = Te(o, l);
          if (!Me(u, e.props)) {
            c = u;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(n) {
        var o, i, s, c = (o = e.getEnabledPreSelectionDateForMonth(n)) !== null && o !== void 0 ? o : n;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (s = (i = e.props).setOpen) === null || s === void 0 || s.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(n) {
        var o, i;
        (i = (o = e.props).onMonthChange) === null || i === void 0 || i.call(o, n), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(n) {
        e.handleYearChange(n), e.handleMonthChange(n);
      }, e.changeYear = function(n) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Re(i, Number(n))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(n) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Se(i, Number(n))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(n) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Re(Se(i, ye(n)), K(n))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(n) {
        n === void 0 && (n = e.state.date);
        var o = Ze(n, e.props.locale, e.props.calendarStartDay), i = [];
        return e.props.showWeekNumbers && i.push(y.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), i.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = Te(o, s), l = e.formatWeekday(c, e.props.locale), u = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return y.createElement("div", { key: s, "aria-label": ae(c, "EEEE", e.props.locale), className: pe("react-datepicker__day-name", u) }, l);
        }));
      }, e.formatWeekday = function(n, o) {
        return e.props.formatWeekDay ? md(n, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? vd(n, o) : gd(n, o);
      }, e.decreaseYear = function() {
        e.setState(function(n) {
          var o, i = n.date;
          return {
            date: _t(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var n, o, i;
        if (!e.props.renderCustomHeader) {
          var s = (n = e.props.monthsShown) !== null && n !== void 0 ? n : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, u = lt(e.state.date, l), d;
          switch (!0) {
            case e.props.showMonthYearPicker:
              d = Ia(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = xd(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = bd(e.state.date, e.props);
              break;
            default:
              d = Na(u, e.props);
              break;
          }
          if (!(!((i = e.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && d || e.props.showTimeSelectOnly)) {
            var f = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], h = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], m = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (m = e.decreaseYear), d && e.props.showDisabledMonthNavigation && (h.push("react-datepicker__navigation--previous--disabled"), m = void 0);
            var v = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, w = e.props, b = w.previousMonthButtonLabel, D = b === void 0 ? a.defaultProps.previousMonthButtonLabel : b, x = w.previousYearButtonLabel, E = x === void 0 ? a.defaultProps.previousYearButtonLabel : x, N = e.props, C = N.previousMonthAriaLabel, S = C === void 0 ? typeof D == "string" ? D : "Previous Month" : C, _ = N.previousYearAriaLabel, P = _ === void 0 ? typeof E == "string" ? E : "Previous Year" : _;
            return y.createElement(
              "button",
              { type: "button", className: h.join(" "), onClick: m, onKeyDown: e.props.handleOnKeyDown, "aria-label": v ? P : S },
              y.createElement("span", { className: f.join(" ") }, v ? E : D)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(n) {
          var o, i = n.date;
          return {
            date: $e(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var n;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = Ya(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = kd(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = Dd(e.state.date, e.props);
              break;
            default:
              o = La(e.state.date, e.props);
              break;
          }
          if (!(!((n = e.props.forceShowMonthNavigation) !== null && n !== void 0 ? n : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
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
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, u = e.props, d = u.nextMonthButtonLabel, f = d === void 0 ? a.defaultProps.nextMonthButtonLabel : d, h = u.nextYearButtonLabel, m = h === void 0 ? a.defaultProps.nextYearButtonLabel : h, v = e.props, w = v.nextMonthAriaLabel, b = w === void 0 ? typeof f == "string" ? f : "Next Month" : w, D = v.nextYearAriaLabel, x = D === void 0 ? typeof m == "string" ? m : "Next Year" : D;
            return y.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? x : b },
              y.createElement("span", { className: s.join(" ") }, l ? m : f)
            );
          }
        }
      }, e.renderCurrentMonth = function(n) {
        n === void 0 && (n = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), y.createElement("h2", { className: o.join(" ") }, ae(n, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(n) {
        if (n === void 0 && (n = !1), !(!e.props.showYearDropdown || n))
          return y.createElement(Kd, U({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: K(e.state.date) }));
      }, e.renderMonthDropdown = function(n) {
        if (n === void 0 && (n = !1), !(!e.props.showMonthDropdown || n))
          return y.createElement(Yd, U({}, a.defaultProps, e.props, { month: ye(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(n) {
        if (n === void 0 && (n = !1), !(!e.props.showMonthYearDropdown || n))
          return y.createElement(jd, U({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(n) {
        e.props.onSelect(Ma(), n), e.props.setPreSelection && e.props.setPreSelection(Ma());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return y.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(n) {
        var o = n.monthDate, i = n.i;
        return y.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          y.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(i !== 0),
            e.renderMonthYearDropdown(i !== 0),
            e.renderYearDropdown(i !== 0)
          ),
          y.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(n) {
        var o, i, s = n.monthDate, c = n.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = Na(e.state.date, e.props), u = La(e.state.date, e.props), d = Ia(e.state.date, e.props), f = Ya(e.state.date, e.props), h = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return y.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (i = (o = e.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(o, U(U({}, e.state), { customHeaderCount: c, monthDate: s, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: l, nextMonthButtonDisabled: u, prevYearButtonDisabled: d, nextYearButtonDisabled: f })),
          h && y.createElement("div", { className: "react-datepicker__day-names" }, e.header(s))
        );
      }, e.renderYearHeader = function(n) {
        var o = n.monthDate, i = e.props, s = i.showYearPicker, c = i.yearItemNumber, l = c === void 0 ? a.defaultProps.yearItemNumber : c, u = Ue(o, l), d = u.startPeriod, f = u.endPeriod;
        return y.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(d, " - ").concat(f) : K(o));
      }, e.renderHeader = function(n) {
        var o = n.monthDate, i = n.i, s = i === void 0 ? 0 : i, c = { monthDate: o, i: s };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var n, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var i = [], s = (n = e.props.monthsShown) !== null && n !== void 0 ? n : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? $e(e.state.date, c) : lt(e.state.date, c), u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < s; ++d) {
            var f = d - u + c, h = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? $e(l, f) : Oe(l, f), m = "month-".concat(d), v = d < s - 1, w = d > 0;
            i.push(y.createElement(
              "div",
              { key: m, ref: function(b) {
                e.monthContainer = b ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: h, i: d }),
              y.createElement(Ld, U({}, a.defaultProps, e.props, { containerRef: e.containerRef, ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: h, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: v, monthShowsDuplicateDaysStart: w }))
            ));
          }
          return i;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return y.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            y.createElement(Hd, U({}, a.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return y.createElement(Wd, U({}, a.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var n = e.props.selected ? new Date(e.props.selected) : void 0, o = n && Br(n) && !!e.props.selected, i = o ? "".concat(Aa(n.getHours()), ":").concat(Aa(n.getMinutes())) : "";
        if (e.props.showTimeInput)
          return y.createElement(Pd, U({}, a.defaultProps, e.props, { date: n, timeString: i, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var n, o = Ue(e.state.date, (n = e.props.yearItemNumber) !== null && n !== void 0 ? n : a.defaultProps.yearItemNumber), i = o.startPeriod, s = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(i, " - ").concat(s) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = K(e.state.date) : c = "".concat(Yn(ye(e.state.date), e.props.locale), " ").concat(K(e.state.date)), y.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return y.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = Je(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Vt
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, a.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!q(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var n = !ve(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return n && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !q(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, a.prototype.render = function() {
      var t = this.props.container || sd;
      return y.createElement(
        $r,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, ignoreClass: this.props.outsideClickIgnoreClass },
        y.createElement(
          "div",
          { style: { display: "contents" }, ref: this.containerRef },
          y.createElement(
            t,
            { className: pe("react-datepicker", this.props.className, {
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
    }, a;
  }(de)
), Gd = function(r) {
  var a = r.icon, t = r.className, e = t === void 0 ? "" : t, n = r.onClick, o = "react-datepicker__calendar-icon";
  if (typeof a == "string")
    return y.createElement("i", { className: "".concat(o, " ").concat(a, " ").concat(e), "aria-hidden": "true", onClick: n });
  if (y.isValidElement(a)) {
    var i = a;
    return y.cloneElement(i, {
      className: "".concat(i.props.className || "", " ").concat(o, " ").concat(e),
      onClick: function(s) {
        typeof i.props.onClick == "function" && i.props.onClick(s), typeof n == "function" && n(s);
      }
    });
  }
  return y.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: n },
    y.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, ti = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return a.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, a.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, a.prototype.render = function() {
      return Za.createPortal(this.props.children, this.el);
    }, a;
  }(de)
), qd = "[tabindex], a, button, input, select, textarea", Ud = function(r) {
  return (r instanceof HTMLAnchorElement || !r.disabled) && r.tabIndex !== -1;
}, ri = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.getTabChildren = function() {
        var n;
        return Array.prototype.slice.call((n = e.tabLoopRef.current) === null || n === void 0 ? void 0 : n.querySelectorAll(qd), 1, -1).filter(Ud);
      }, e.handleFocusStart = function() {
        var n = e.getTabChildren();
        n && n.length > 1 && n[n.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var n = e.getTabChildren();
        n && n.length > 1 && n[0].focus();
      }, e.tabLoopRef = Je(), e;
    }
    return a.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : a.defaultProps.enableTabLoop) ? y.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        y.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        y.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, a.defaultProps = {
      enableTabLoop: !0
    }, a;
  }(de)
);
function Xd(r) {
  var a = function(t) {
    var e, n = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Ae(null), i = id(U({ open: !n, whileElementsMounted: Yu, placement: t.popperPlacement, middleware: Ye([
      Bu({ padding: 15 }),
      $u(10),
      Ku({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), s = U(U({}, t), { hidePopper: n, popperProps: U(U({}, i), { arrowRef: o }) });
    return y.createElement(r, U({}, s));
  };
  return a;
}
var Zd = (
  /** @class */
  function(r) {
    fe(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = this.props, e = t.className, n = t.wrapperClassName, o = t.hidePopper, i = o === void 0 ? a.defaultProps.hidePopper : o, s = t.popperComponent, c = t.targetComponent, l = t.enableTabLoop, u = t.popperOnKeyDown, d = t.portalId, f = t.portalHost, h = t.popperProps, m = t.showArrow, v = void 0;
      if (!i) {
        var w = pe("react-datepicker-popper", e);
        v = y.createElement(
          ri,
          { enableTabLoop: l },
          y.createElement(
            "div",
            { ref: h.refs.setFloating, style: h.floatingStyles, className: w, "data-placement": h.placement, onKeyDown: u },
            s,
            m && y.createElement(Ju, { ref: h.arrowRef, context: h.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (v = Ii(this.props.popperContainer, {}, v)), d && !i && (v = y.createElement(ti, { portalId: d, portalHost: f }, v));
      var b = pe("react-datepicker-wrapper", n);
      return y.createElement(
        y.Fragment,
        null,
        y.createElement("div", { ref: h.refs.setReference, className: b }, c),
        v
      );
    }, a;
  }(de)
), Jd = Xd(Zd), Ka = "react-datepicker-ignore-onclickoutside";
function ef(r, a) {
  return r && a ? ye(r) !== ye(a) || K(r) !== K(a) : r !== a;
}
var cn = "Date input not valid.", tf = (
  /** @class */
  function(r) {
    fe(a, r);
    function a(t) {
      var e = r.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : J();
      }, e.modifyHolidays = function() {
        var n;
        return (n = e.props.holidays) === null || n === void 0 ? void 0 : n.reduce(function(o, i) {
          var s = new Date(i.date);
          return Br(s) ? Ye(Ye([], o, !0), [U(U({}, i), { date: s })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var n, o = e.getPreSelection(), i = Zo(e.props), s = Jo(e.props), c = i && ft(o, mr(i)) ? i : s && et(o, Pa(s)) ? s : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (n = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && n !== void 0 ? n : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: Fa(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(U(U({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(U(U({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.setFocus = function() {
        var n, o;
        (o = (n = e.input) === null || n === void 0 ? void 0 : n.focus) === null || o === void 0 || o.call(n, { preventScroll: !0 });
      }, e.setBlur = function() {
        var n, o;
        (o = (n = e.input) === null || n === void 0 ? void 0 : n.blur) === null || o === void 0 || o.call(n), e.cancelFocusInput();
      }, e.deferBlur = function() {
        requestAnimationFrame(function() {
          e.setBlur();
        });
      }, e.setOpen = function(n, o) {
        o === void 0 && (o = !1), e.setState({
          open: n,
          preSelection: n && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: ln
        }, function() {
          n || e.setState(function(i) {
            return {
              focused: o ? i.focused : !1
            };
          }, function() {
            !o && e.deferBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return Be(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(n) {
        var o, i, s = e.state.wasHidden, c = s ? e.state.open : !0;
        s && e.resetHiddenStatus(), e.state.preventFocus || ((i = (o = e.props).onFocus) === null || i === void 0 || i.call(o, n), c && !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
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
      }, e.handleBlur = function(n) {
        var o, i;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((i = (o = e.props).onBlur) === null || i === void 0 || i.call(o, n)), e.state.open && e.props.open === !1 && e.setOpen(!1), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(n) {
        var o, i;
        e.props.inline || e.setOpen(!1), (i = (o = e.props).onClickOutside) === null || i === void 0 || i.call(o, n), e.props.withPortal && n.preventDefault();
      }, e.handleChange = function() {
        for (var n, o, i, s, c, l = [], u = 0; u < arguments.length; u++)
          l[u] = arguments[u];
        var d = l[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, l), !d || typeof d.isDefaultPrevented != "function" || d.isDefaultPrevented()))) {
          e.setState({
            inputValue: (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : null,
            lastPreSelectChange: rf
          });
          var f = e.props, h = f.selectsRange, m = f.startDate, v = f.endDate, w = (n = e.props.dateFormat) !== null && n !== void 0 ? n : a.defaultProps.dateFormat, b = (o = e.props.strictParsing) !== null && o !== void 0 ? o : a.defaultProps.strictParsing, D = (d == null ? void 0 : d.target) instanceof HTMLInputElement ? d.target.value : "";
          if (h) {
            var x = D.split("-", 2).map(function(M) {
              return M.trim();
            }), E = x[0], N = x[1], C = an(E ?? "", w, e.props.locale, b), S = an(N ?? "", w, e.props.locale, b), _ = (m == null ? void 0 : m.getTime()) !== (C == null ? void 0 : C.getTime()), P = (v == null ? void 0 : v.getTime()) !== (S == null ? void 0 : S.getTime());
            if (!_ && !P || C && Me(C, e.props) || S && Me(S, e.props))
              return;
            (s = (i = e.props).onChange) === null || s === void 0 || s.call(i, [C, S], d);
          } else {
            var L = an(D, w, e.props.locale, b, (c = e.props.selected) !== null && c !== void 0 ? c : void 0);
            (L || !D) && e.setSelected(L, d, !0);
          }
        }
      }, e.handleSelect = function(n, o, i) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(n, o, !1, i), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(n);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var s = e.props, c = s.startDate, l = s.endDate;
          c && !l && (e.props.swapRange || !Ha(n, c)) && e.setOpen(!1);
        }
      }, e.setSelected = function(n, o, i, s) {
        var c, l, u = n;
        if (e.props.showYearPicker) {
          if (u !== null && gr(K(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && Xo(u, e.props))
            return;
        } else if (u !== null && Me(u, e.props))
          return;
        var d = e.props, f = d.onChange, h = d.selectsRange, m = d.startDate, v = d.endDate, w = d.selectsMultiple, b = d.selectedDates, D = d.minTime, x = d.swapRange;
        if (!st(e.props.selected, u) || e.props.allowSameDay || h || w)
          if (u !== null && (e.props.selected && (!i || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = on(u, {
            hour: Ke(e.props.selected),
            minute: ze(e.props.selected),
            second: Xe(e.props.selected)
          })), !i && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && D && (u = on(u, {
            hour: D.getHours(),
            minute: D.getMinutes(),
            second: D.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: s })), h) {
            var E = !m && !v, N = m && !v, C = m && v;
            E ? f == null || f([u, null], o) : N && (u === null ? f == null || f([null, null], o) : Ha(u, m) ? x ? f == null || f([u, m], o) : f == null || f([u, null], o) : f == null || f([m, u], o)), C && (f == null || f([u, null], o));
          } else if (w) {
            if (u !== null)
              if (!(b != null && b.length))
                f == null || f([u], o);
              else {
                var S = b.some(function(P) {
                  return q(P, u);
                });
                if (S) {
                  var _ = b.filter(function(P) {
                    return !q(P, u);
                  });
                  f == null || f(_, o);
                } else
                  f == null || f(Ye(Ye([], b, !0), [u], !1), o);
              }
          } else
            f == null || f(u, o);
        i || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(n) {
        var o = Be(e.props.minDate), i = Be(e.props.maxDate), s = !0;
        if (n) {
          var c = mr(n);
          if (o && i)
            s = At(n, e.props.minDate, e.props.maxDate);
          else if (o) {
            var l = mr(e.props.minDate);
            s = et(n, l) || st(c, l);
          } else if (i) {
            var u = Pa(e.props.maxDate);
            s = ft(n, u) || st(c, u);
          }
        }
        s && e.setState({
          preSelection: n
        });
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(n) {
        var o, i;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var s = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? n : on(s, {
            hour: Ke(n),
            minute: ze(n)
          });
          e.setState({
            preSelection: c
          }), (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, c), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var n, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (n = e.props).onInputClick) === null || o === void 0 || o.call(n);
      }, e.onInputKeyDown = function(n) {
        var o, i, s, c, l, u;
        (i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, n);
        var d = n.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (d === T.ArrowDown || d === T.ArrowUp || d === T.Enter) && ((s = e.onInputClick) === null || s === void 0 || s.call(e));
          return;
        }
        if (e.state.open) {
          if (d === T.ArrowDown || d === T.ArrowUp) {
            n.preventDefault();
            var f = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', h = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(f);
            h instanceof HTMLElement && h.focus({ preventScroll: !0 });
            return;
          }
          var m = J(e.state.preSelection);
          d === T.Enter ? (n.preventDefault(), n.target.blur(), e.inputOk() && e.state.lastPreSelectChange === ln ? (e.handleSelect(m, n), !e.props.shouldCloseOnSelect && e.setPreSelection(m)) : e.setOpen(!1)) : d === T.Escape ? (n.preventDefault(), n.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === T.Tab && e.setOpen(!1), e.inputOk() || (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: cn });
        }
      }, e.onPortalKeyDown = function(n) {
        var o = n.key;
        o === T.Escape && (n.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(n) {
        var o, i, s, c, l, u, d = e.props, f = d.minDate, h = d.maxDate, m = d.disabledKeyboardNavigation, v = d.showWeekPicker, w = d.shouldCloseOnSelect, b = d.locale, D = d.calendarStartDay, x = d.adjustDateOnChange, E = d.inline;
        if ((i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, n), !m) {
          var N = n.key, C = n.shiftKey, S = J(e.state.preSelection), _ = function(z, F) {
            var W = F;
            switch (z) {
              case T.ArrowRight:
                W = v ? xr(F, 1) : Te(F, 1);
                break;
              case T.ArrowLeft:
                W = v ? ya(F) : Hl(F);
                break;
              case T.ArrowUp:
                W = ya(F);
                break;
              case T.ArrowDown:
                W = xr(F, 1);
                break;
              case T.PageUp:
                W = C ? _t(F, 1) : lt(F, 1);
                break;
              case T.PageDown:
                W = C ? $e(F, 1) : Oe(F, 1);
                break;
              case T.Home:
                W = Ze(F, b, D);
                break;
              case T.End:
                W = pd(F);
                break;
            }
            return W;
          }, P = function(z, F) {
            for (var W = 40, j = z, ne = !1, De = 0, xe = _(z, F); !ne; ) {
              if (De >= W) {
                xe = F;
                break;
              }
              f && xe < f && (j = T.ArrowRight, xe = Me(f, e.props) ? _(j, xe) : f), h && xe > h && (j = T.ArrowLeft, xe = Me(h, e.props) ? _(j, xe) : h), Me(xe, e.props) ? ((j === T.PageUp || j === T.Home) && (j = T.ArrowRight), (j === T.PageDown || j === T.End) && (j = T.ArrowLeft), xe = _(j, xe)) : ne = !0, De++;
            }
            return xe;
          };
          if (N === T.Enter) {
            n.preventDefault(), e.handleSelect(S, n), !w && e.setPreSelection(S);
            return;
          } else if (N === T.Escape) {
            n.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (s = e.props).onInputError) === null || c === void 0 || c.call(s, { code: 1, msg: cn });
            return;
          }
          var L = null;
          switch (N) {
            case T.ArrowLeft:
            case T.ArrowRight:
            case T.ArrowUp:
            case T.ArrowDown:
            case T.PageUp:
            case T.PageDown:
            case T.Home:
            case T.End:
              L = P(N, S);
              break;
          }
          if (!L) {
            (u = (l = e.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: cn });
            return;
          }
          if (n.preventDefault(), e.setState({ lastPreSelectChange: ln }), x && e.setSelected(L), e.setPreSelection(L), E) {
            var M = ye(S), Y = ye(L), H = K(S), B = K(L);
            M !== Y || H !== B ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(n) {
        var o = n.key;
        o === T.Escape && (n.preventDefault(), e.sendFocusBackToInput());
      }, e.onClearClick = function(n) {
        n && n.preventDefault && n.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, i = o.selectsRange, s = o.onChange;
        i ? s == null || s([null, null], n) : s == null || s(null, n), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(n) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (n.target === document || n.target === document.documentElement || n.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(n) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var n, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : y.createElement(Vd, U({ showMonthYearDropdown: void 0, ref: function(i) {
          e.calendar = i;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (n = e.props.dateFormatCalendar) !== null && n !== void 0 ? n : a.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Cd(e.modifyHolidays()), outsideClickIgnoreClass: Ka, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : a.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var n = e.props, o = n.dateFormat, i = o === void 0 ? a.defaultProps.dateFormat : o, s = n.locale, c = e.props.showTimeInput || e.props.showTimeSelect, l = c ? "PPPPp" : "PPPP", u;
        return e.props.selectsRange ? u = "Selected start date: ".concat(Ee(e.props.startDate, {
          dateFormat: l,
          locale: s
        }), ". ").concat(e.props.endDate ? "End date: " + Ee(e.props.endDate, {
          dateFormat: l,
          locale: s
        }) : "") : e.props.showTimeSelectOnly ? u = "Selected time: ".concat(Ee(e.props.selected, { dateFormat: i, locale: s })) : e.props.showYearPicker ? u = "Selected year: ".concat(Ee(e.props.selected, { dateFormat: "yyyy", locale: s })) : e.props.showMonthYearPicker ? u = "Selected month: ".concat(Ee(e.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : e.props.showQuarterYearPicker ? u = "Selected quarter: ".concat(Ee(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : u = "Selected date: ".concat(Ee(e.props.selected, {
          dateFormat: l,
          locale: s
        })), y.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, u);
      }, e.renderDateInput = function() {
        var n, o, i, s = pe(e.props.className, (n = {}, n[Ka] = e.state.open, n)), c = e.props.customInput || y.createElement("input", { type: "text" }), l = e.props.customInputRef || "ref", u = e.props, d = u.dateFormat, f = d === void 0 ? a.defaultProps.dateFormat : d, h = u.locale, m = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? ld(e.props.startDate, e.props.endDate, {
          dateFormat: f,
          locale: h
        }) : e.props.selectsMultiple ? ud((i = e.props.selectedDates) !== null && i !== void 0 ? i : [], {
          dateFormat: f,
          locale: h
        }) : Ee(e.props.selected, {
          dateFormat: f,
          locale: h
        });
        return Xa(c, (o = {}, o[l] = function(v) {
          e.input = v;
        }, o.value = m, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = pe(c.props.className, s), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var n = e.props, o = n.isClearable, i = n.disabled, s = n.selected, c = n.startDate, l = n.endDate, u = n.clearButtonTitle, d = n.clearButtonClassName, f = d === void 0 ? "" : d, h = n.ariaLabelClose, m = h === void 0 ? "Close" : h, v = n.selectedDates;
        return o && (s != null || c != null || l != null || v != null && v.length) ? y.createElement("button", { type: "button", className: pe("react-datepicker__close-icon", f, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": m, onClick: e.onClearClick, title: u, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(a, "defaultProps", {
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
          yearItemNumber: Vt,
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
    }), a.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.componentDidUpdate = function(t, e) {
      var n, o, i, s;
      t.inline && ef(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: Fa(this.props.highlightDates)
      }), !e.focused && !st(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (n = this.props).onCalendarOpen) === null || o === void 0 || o.call(n)), e.open === !0 && this.state.open === !1 && ((s = (i = this.props).onCalendarClose) === null || s === void 0 || s.call(i)));
    }, a.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, n = t.icon, o = t.calendarIconClassname, i = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), y.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && y.createElement(Gd, U({ icon: n, className: pe(i, !i && o, c && "react-datepicker-ignore-onclickoutside") }, s ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, a.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? y.createElement(
          ri,
          { enableTabLoop: this.props.enableTabLoop },
          y.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = y.createElement(ti, U({ portalId: this.props.portalId }, this.props), e)), y.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return y.createElement(Jd, U({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, a;
  }(de)
), rf = "input", ln = "navigate";
const nf = ht.div`
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
`, af = ht.button`
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
`, of = ht.div`
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
`, sf = y.forwardRef(
  ({ value: r, onClick: a }, t) => /* @__PURE__ */ g.jsxs(af, { onClick: a, ref: t, children: [
    r === "" || r === void 0 ? "날짜입력" : r,
    /* @__PURE__ */ g.jsx(Xi, { style: { padding: "5px" } })
  ] })
), ni = Kt(
  ({ value: r, onChange: a, minDate: t, maxDate: e }, n) => {
    const [o, i] = he(r ?? null), [s, c] = he({ top: 0, left: 0, width: 0 }), l = Ae(null);
    return we(() => {
      i(r ?? null);
    }, [r]), we(() => {
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
    }, [o]), Ua(n, () => l.current, []), /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
      /* @__PURE__ */ g.jsx(at, {}),
      /* @__PURE__ */ g.jsx(nf, { ref: l, children: /* @__PURE__ */ g.jsx(
        tf,
        {
          selected: o,
          onChange: (u) => {
            i(u), a == null || a(u);
          },
          wrapperClassName: "w-full",
          dateFormat: "yyyy-MM-dd",
          placeholderText: "날짜 선택",
          minDate: t,
          maxDate: e,
          customInput: /* @__PURE__ */ g.jsx(sf, {}),
          popperContainer: ({ children: u }) => Dn(
            /* @__PURE__ */ g.jsx(
              of,
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
ni.displayName = "SingleDatePicker";
const cf = ({
  col: r,
  row: a,
  isEditing: t,
  isEdited: e,
  cellValue: n,
  handleCellDoubleClick: o,
  handleCellChange: i,
  handleKeyDown: s,
  isCellEditable: c,
  cellprops: l
}) => {
  const u = r.editable ?? a[r.key] !== void 0;
  return /* @__PURE__ */ g.jsx(
    ur,
    {
      $isEdited: e,
      onDoubleClick: () => c && u && o(a.rowKey, r.key, n),
      children: t ? (
        /* ✅ cellType이 있으면 자동 UI 적용 */
        r.cellType ? za(
          r,
          a,
          l,
          i,
          s,
          !0,
          n
        ) : /* @__PURE__ */ g.jsx(
          lr,
          {
            type: "text",
            value: n,
            onChange: (d) => i(d.target.value),
            onKeyDown: (d) => s(d, a)
          }
        )
      ) : r.renderCell ? (
        /* ✅ renderCell이 있으면 실행 (사용자 정의 UI) */
        r.renderCell(a)
      ) : r.cellType ? (
        /* ✅ cellType이 있으면 자동 UI 적용 */
        za(
          r,
          a,
          l,
          i,
          s,
          !1,
          n
        )
      ) : (
        /* ✅ 기본값 렌더링 */
        n
      )
    }
  );
}, za = (r, a, t, e, n, o, i) => {
  var c, l;
  const s = new KeyboardEvent("keydown", { key: "Enter" });
  switch ((c = r.cellType) == null ? void 0 : c.type) {
    case "Button":
      return o ? /* @__PURE__ */ g.jsx(jt, { disabled: !0, children: r.cellType.content }) : /* @__PURE__ */ g.jsx(jt, { id: a.rowKey, children: r.cellType.content });
    case "Check":
      return o ? /* @__PURE__ */ g.jsx(
        wo,
        {
          id: a.rowKey,
          ...t,
          checked: !!i,
          onChange: (m) => {
            e(m.target.checked), n(s, a);
          }
        }
      ) : (
        /*수정 모드가 아닐 경우 Check Icon, 수정모드 완료시 완본 UnChecked 된경우 Unchecked 표시*/
        i ? /* @__PURE__ */ g.jsx(xn, {}) : i !== a[r.key] ? "UnChecked" : ""
      );
    case "DropDownBox":
      const [u, d] = he(a[r.key]);
      return o ? /* @__PURE__ */ g.jsx(
        kn,
        {
          id: a.rowKey,
          ...t,
          style: { zIndex: 50 },
          defualtKey: u,
          onChange: (m) => {
            e(m.key), d(m.key), n(s, a);
          }
        }
      ) : /* @__PURE__ */ g.jsx(g.Fragment, { children: (l = t.options.find((m) => m.key === i)) == null ? void 0 : l.value });
    case "SingleDatePicker":
      const [f, h] = he(a[r.key]);
      return o ? /* @__PURE__ */ g.jsx(
        ni,
        {
          value: f,
          onChange: (m) => {
            e(m ? m.toLocaleDateString("sv-SE") : ""), h(m ? m.toLocaleDateString("sv-SE") : ""), n(s, a);
          }
        }
      ) : /* @__PURE__ */ g.jsx(g.Fragment, { children: i instanceof Date ? i.toLocaleDateString("sv-SE") : i });
    default:
      return /* @__PURE__ */ g.jsx(g.Fragment, { children: a[r.key] });
  }
}, lf = ({
  row: r,
  rowNum: a,
  selectedRows: t,
  showRowNumCol: e,
  showRowCheckboxCol: n,
  showActionColumn: o,
  onToggleRow: i,
  reducer: s
}) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
  o && /* @__PURE__ */ g.jsx(ur, { children: s.state.editedRows[r.rowKey] && /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
    /* @__PURE__ */ g.jsx(mo, { onClick: () => s.applyRowChanges(r.rowKey), children: /* @__PURE__ */ g.jsx(xn, { size: 12 }) }),
    /* @__PURE__ */ g.jsx(go, { onClick: () => s.resetRowChanges(r.rowKey), children: /* @__PURE__ */ g.jsx(so, { size: 12 }) })
  ] }) }),
  e && /* @__PURE__ */ g.jsx(ur, { children: a }),
  n && /* @__PURE__ */ g.jsx(ur, { children: /* @__PURE__ */ g.jsx(wo, { checked: t.has(r), onChange: () => i(r) }) })
] }), uf = ({
  row: r,
  columns: a,
  level: t,
  isExpanded: e,
  onToggleGroupExpand: n,
  showRowNumCol: o,
  showRowCheckboxCol: i
}) => {
  const s = r.__groupKey;
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: /* @__PURE__ */ g.jsx(hs, { onClick: () => n(s), children: /* @__PURE__ */ g.jsx(ms, { colSpan: a.length + (o ? 1 : 0) + (i ? 1 : 0), children: /* @__PURE__ */ g.jsxs(gs, { style: { paddingLeft: `${t * 16}px` }, children: [
    /* @__PURE__ */ g.jsx("span", { children: e ? /* @__PURE__ */ g.jsx(to, {}) : /* @__PURE__ */ g.jsx(ro, {}) }),
    /* @__PURE__ */ g.jsxs("span", { children: [
      s,
      " (",
      r.__children.length,
      ")"
    ] })
  ] }) }) }) });
}, df = ({
  columns: r,
  showRowNumCol: a,
  showRowCheckboxCol: t,
  selectedRows: e,
  isCellEditable: n,
  onToggleRow: o,
  onToggleGroupExpand: i,
  reducer: s,
  style: c,
  bodyHeight: l
}) => {
  const [u, d] = he(null), f = 35, h = Yi(() => {
    const C = (S) => S.reduce((_, P) => {
      if (Jr(P)) {
        const L = P, M = s.state.group.expanded.has(L.__groupKey);
        return _ + 1 + (M ? C(L.__children) : 0);
      } else
        return _ + 1;
    }, 0);
    return C(s.state.data);
  }, [s.state.data, s.state.group.expanded]), m = Math.max(0, l - h * f), v = (C, S, _) => {
    s.setEditingCell(C, S, _);
  }, w = (C, S) => {
    C.preventDefault(), d({ x: C.clientX, y: C.clientY, row: S });
  }, b = () => d(null), D = (C) => {
    if (!s.state.editingCell) return;
    const { rowKey: S, colKey: _ } = s.state.editingCell;
    s.setEditingCell(S, _, C);
    const P = s.state.originalData.find((M) => M.rowKey === S);
    (P ? P[_] : void 0) !== C ? s.editCell(S, _, C) : s.removeEditedCell(S, _);
  }, x = (C, S) => {
    if (!s.state.editingCell) return;
    const { rowKey: _, colKey: P } = s.state.editingCell, L = r.findIndex((M) => M.key === P);
    if (C.key === "Enter" && s.clearEditingCell(), C.key === "Tab") {
      C.preventDefault();
      for (let M = L + 1; M < r.length; M++)
        if (r[M].editable !== !1) {
          s.clearEditingCell(), s.setEditingCell(_, r[M].key, S[r[M].key]);
          return;
        }
      s.clearEditingCell();
    }
  }, E = (C, S) => {
    const _ = s.state.group.expanded.has(C.__groupKey);
    let P = 0;
    return /* @__PURE__ */ g.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ g.jsx(
        uf,
        {
          row: C,
          columns: r,
          level: S,
          isExpanded: _,
          onToggleGroupExpand: i,
          showRowNumCol: a,
          showRowCheckboxCol: t
        }
      ),
      _ && C.__children.map(
        (L) => Jr(L) ? E(L, S + 1) : N(L, S + 1, ++P)
      )
    ] }, C.__groupKey);
  }, N = (C, S, _) => {
    const P = Object.keys(s.state.editedRows).length > 0;
    return /* @__PURE__ */ g.jsxs(ps, { onContextMenu: (L) => w(L, C), children: [
      /* @__PURE__ */ g.jsx(
        lf,
        {
          row: C,
          rowNum: _,
          selectedRows: e,
          showRowNumCol: a,
          showRowCheckboxCol: t,
          showActionColumn: P,
          onToggleRow: o,
          reducer: s
        }
      ),
      r.map((L) => {
        var B, z, F, W, j, ne;
        const M = ((B = s.state.editedRows[C.rowKey]) == null ? void 0 : B[L.key]) !== void 0, Y = ((z = s.state.editingCell) == null ? void 0 : z.rowKey) === C.rowKey && ((F = s.state.editingCell) == null ? void 0 : F.colKey) === L.key, H = Y ? (W = s.state.editingCell) == null ? void 0 : W.value : ((j = s.state.editedRows[C.rowKey]) == null ? void 0 : j[L.key]) ?? C[L.key];
        return /* @__PURE__ */ g.jsx(
          cf,
          {
            col: L,
            row: C,
            isEditing: Y,
            isEdited: M,
            cellValue: H,
            handleCellDoubleClick: v,
            handleCellChange: D,
            handleKeyDown: x,
            isCellEditable: n,
            cellprops: (ne = L.cellType) == null ? void 0 : ne.cellProps
          },
          L.key
        );
      })
    ] }, C.rowKey);
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs(fs, { style: { ...c }, children: [
      s.state.data.map(
        (C, S) => Jr(C) ? E(C, 0) : N(C, 0, S + 1)
      ),
      m > 0 && /* @__PURE__ */ g.jsx(vs, { children: /* @__PURE__ */ g.jsx(
        ys,
        {
          colSpan: r.length + (a ? 1 : 0) + (t ? 1 : 0),
          style: { height: m }
        }
      ) })
    ] }),
    s.state.isCellEditable && /* @__PURE__ */ g.jsx(Es, { menuPosition: u, onClose: b, reducer: s })
  ] });
}, ff = (r, a, t, e, n) => {
  const o = dn(r);
  return {
    originalData: [...o],
    data: a ? br(o, 1, t) : o,
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
    pagingable: a,
    pagenate: {
      pageSize: t,
      currentPage: 1
    },
    editedRows: {},
    editingCell: null,
    activeExportSurport: e,
    isCellEditable: n
  };
};
function pf(r, a) {
  switch (a.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...r,
        sortedColumn: a.column,
        sortDirection: a.direction,
        data: a.direction === null ? [...r.originalData] : yo(r.originalData, a.column, a.direction)
        // ✅ 정렬된 데이터 반영
      };
    /** 🔹 특정 컬럼에 필터 적용 */
    case "SET_FILTER": {
      const t = {
        ...r.filters,
        // 기존 필터 유지
        ...a.filters
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
          Object.entries(r.filters).filter(([t]) => t !== a.column)
        )
      };
    /** 🔹 컬럼을 그룹핑 */
    case "SET_GROUP": {
      const t = [...r.group.column, a.column];
      return {
        ...r,
        group: {
          ...r.group,
          column: t,
          // ✅ 새로운 그룹 컬럼 추가
          expanded: new Set(r.group.expanded)
          // ✅ 기존 확장 상태 유지
        },
        data: wr(r.originalData, t)
      };
    }
    /** 🔹 컬럼 그룹핑 해제 */
    case "REMOVE_GROUP": {
      const t = r.group.column.filter((n) => n !== a.column), e = new Set(r.group.expanded);
      return e.delete(a.column), {
        ...r,
        group: {
          column: t,
          // ✅ 그룹 컬럼에서 제거
          expanded: e
          // ✅ 확장 목록에서도 제거
        },
        data: t.length > 0 ? wr(r.originalData, t, e) : [...r.originalData]
        // ✅ 모든 그룹이 해제되면 원본 데이터 복원
      };
    }
    case "TOGGLE_ROW": {
      const t = new Set(r.selectedRows);
      return t.has(a.row) ? t.delete(a.row) : t.add(a.row), {
        ...r,
        selectedRows: t
        // ✅ 변경된 상태 적용
      };
    }
    /** 🔹 특정 Row 선택/해제 */
    case "TOGGLE_GROUP_EXPAND": {
      const t = new Set(r.group.expanded);
      return t.has(a.column) ? t.delete(a.column) : t.add(a.column), {
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
          currentPage: a.page
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 */
    case "SET_PAGE_SIZE":
      return {
        ...r,
        pagenate: {
          ...r.pagenate,
          pageSize: a.pageSize
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 중 */
    case "SET_EDITING_CELL":
      return {
        ...r,
        editingCell: {
          rowKey: a.payload.rowKey,
          colKey: a.payload.colKey,
          value: a.payload.value
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
      const { rowKey: t, colKey: e, newValue: n } = a.payload;
      return {
        ...r,
        editedRows: {
          ...r.editedRows,
          [t]: {
            ...r.editedRows[t],
            [e]: n
          }
        }
      };
    }
    /** 🔹 페이지 변경 제거*/
    case "REMOVE_EDITED_CELL": {
      const { rowKey: t, colKey: e } = a.payload, n = { ...r.editedRows[t] };
      if (delete n[e], Object.keys(n).length === 0) {
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
          [t]: n
        }
      };
    }
    /** 🔹 로우 변경 적용*/
    case "APPLY_ROW_CHANGES": {
      const { rowKey: t } = a.payload, e = r.editedRows[t];
      if (!e) return r;
      const n = r.data.map(
        (s) => s.rowKey === t ? { ...s, ...e } : s
      ), o = r.originalData.map(
        (s) => s.rowKey === t ? { ...s, ...e } : s
      ), i = { ...r.editedRows };
      return delete i[t], {
        ...r,
        data: n,
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
      const { rowKey: t } = a.payload, e = r.originalData.find(
        (i) => i.rowKey === t
      ), n = { ...r.editedRows };
      if (delete n[t], !e)
        return {
          ...r,
          data: r.data.filter((i) => i.rowKey !== t),
          editedRows: n
          // ✅ 해당 Row의 변경 사항 삭제
        };
      const o = r.data.map(
        (i) => i.rowKey === t ? e : i
      );
      return {
        ...r,
        data: o,
        // ✅ 변경된 데이터 복원
        editedRows: n,
        // ✅ 해당 Row의 변경 사항 삭제
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    /** 🔹전체 로우 변경 적용*/
    case "APPLY_ALL_CHANGES": {
      const t = r.originalData.map(
        (n) => r.editedRows[n.rowKey] ? { ...n, ...r.editedRows[n.rowKey] } : n
      ), e = r.pagingable ? br(t, r.pagenate.currentPage, r.pagenate.pageSize, r) : t;
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
        ...Object.keys(r.originalData[0]).reduce((n, o) => (n[o] = "", n), {}),
        rowKey: vo(r.originalData.length)
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
      return { ...r, ...a.state };
    // ✅ 새로운 상태 적용
    /** 🔹 Grid Data 변경경 */
    case "RESET_DATA":
      return {
        ...r,
        originalData: a.payload,
        // ✅ 원본 데이터 업데이트
        data: r.pagingable ? br(a.payload, r.pagenate.currentPage, r.pagenate.pageSize) : a.payload,
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
function hf(r, a = !1, t = 10, e = !0, n = !0) {
  const [o, i] = wn(pf, ff(r, a, t, e, n));
  return {
    state: o,
    updateGridState: () => {
      i({
        type: "SET_GRID_STATE",
        state: He(o)
      });
    },
    setSort: (M, Y) => {
      i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          sortedColumn: M,
          sortDirection: Y
        })
      });
    },
    setFilter: (M) => {
      const Y = { ...o.filters, ...M };
      i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          filters: Y
        })
      });
    },
    clearFilter: (M) => {
      const Y = { ...o.filters };
      delete Y[M], i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          filters: Y
        })
      });
    },
    setGroup: (M) => {
      i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          group: {
            ...o.group,
            column: [...o.group.column, M]
          }
        })
      });
    },
    removeGroup: (M) => {
      i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          group: {
            ...o.group,
            column: o.group.column.filter((Y) => Y !== M)
          }
        })
      });
    },
    expandGroup: (M) => {
      const Y = new Set(o.group.expanded);
      Y.has(M) ? Y.delete(M) : Y.add(M), i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          group: {
            ...o.group,
            expanded: Y
          }
        })
      });
    },
    toggleRow: (M) => {
      i({ type: "TOGGLE_ROW", row: M });
    },
    setPage: (M) => {
      i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          pagenate: {
            ...o.pagenate,
            currentPage: M
          }
        })
      });
    },
    setPageSize: (M) => {
      i({
        type: "SET_GRID_STATE",
        state: He({
          ...o,
          pagenate: {
            ...o.pagenate,
            pageSize: M
          }
        })
      });
    },
    editCell: (M, Y, H) => {
      i({ type: "EDIT_CELL", payload: { rowKey: M, colKey: Y, newValue: H } });
    },
    setEditingCell: (M, Y, H) => {
      i({ type: "SET_EDITING_CELL", payload: { rowKey: M, colKey: Y, value: H } });
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
    removeEditedCell: (M, Y) => {
      i({ type: "REMOVE_EDITED_CELL", payload: { rowKey: M, colKey: Y } });
    },
    applyRowChanges: (M) => {
      i({ type: "APPLY_ROW_CHANGES", payload: { rowKey: M } });
    },
    resetRowChanges: (M) => {
      i({ type: "RESET_ROW_CHANGES", payload: { rowKey: M } });
    },
    addRow: () => {
      i({ type: "ADD_ROW" });
    },
    resetData: (M) => {
      i({ type: "RESET_DATA", payload: M });
    }
  };
}
const mf = V.div`  
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${(r) => r.theme.colors.font};
  background-color: ${(r) => r.theme.colors.second};
`, gf = V.span`
  font-size: 14px;
  color: ${(r) => r.theme.colors.font};
`, vf = V.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: visible;
`, yf = V.span`
  font-size: 14px;
  color: ${(r) => r.theme.colors.font};
`, un = V.button`
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
`, wf = ({
  currentPage: r,
  totalPages: a,
  totalDataCount: t,
  pageSize: e,
  onPageChange: n,
  onPageSizeChange: o,
  style: i
}) => {
  const s = [
    { key: "10", value: "10" },
    { key: "20", value: "20" },
    { key: "30", value: "30" }
  ];
  return /* @__PURE__ */ g.jsxs(mf, { style: i, children: [
    /* @__PURE__ */ g.jsxs(gf, { children: [
      "Total ",
      /* @__PURE__ */ g.jsx("b", { children: t }),
      " items | Page ",
      r,
      " / ",
      a
    ] }),
    /* @__PURE__ */ g.jsxs(vf, { children: [
      /* @__PURE__ */ g.jsx(yf, { children: "Page Size:" }),
      /* @__PURE__ */ g.jsx(
        kn,
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
    /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: "4px" }, children: [
      /* @__PURE__ */ g.jsx(un, { onClick: () => r > 1 && n(r - 1), disabled: r === 1, children: /* @__PURE__ */ g.jsx(Zi, { size: 14 }) }),
      Array.from({ length: a }, (c, l) => l + 1).map((c) => /* @__PURE__ */ g.jsx(un, { $active: c === r, onClick: () => n(c), children: c }, c)),
      /* @__PURE__ */ g.jsx(un, { onClick: () => r < a && n(r + 1), disabled: r === a, children: /* @__PURE__ */ g.jsx(ro, { size: 14 }) })
    ] })
  ] });
}, Nf = ({
  columns: r,
  data: a,
  options: t,
  showRowNumCol: e = !0,
  showRowCheckboxCol: n = !1,
  pagingable: o = !1,
  pagination: i,
  isCellEditable: s = !1,
  customStyles: c = {},
  activeExportSurport: l
}) => {
  const u = hf(
    dn(a),
    o,
    i == null ? void 0 : i.pageSize,
    l,
    s
  ), { pagenate: d } = u.state, f = a.length, h = Math.ceil(f / d.pageSize), m = Ae(null), [v, w] = he(0);
  we(() => {
    u.resetData(dn(a));
  }, [a]), bn(() => {
    if (!m.current) return;
    const D = () => {
      var _;
      const E = ((_ = m.current) == null ? void 0 : _.clientHeight) || 0, N = 40, C = o ? 40 : 0, S = E - N - C;
      w(S > 0 ? S : 0);
    }, x = new ResizeObserver(D);
    return x.observe(m.current), D(), () => x.disconnect();
  }, [o]);
  const b = (D) => {
    u.clearEditingCell();
  };
  return /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
    /* @__PURE__ */ g.jsx(at, {}),
    /* @__PURE__ */ g.jsxs(as, { ref: m, children: [
      /* @__PURE__ */ g.jsx(os, { onScroll: b, children: /* @__PURE__ */ g.jsxs(is, { children: [
        /* @__PURE__ */ g.jsx(
          _s,
          {
            columns: r,
            showRowNumCol: e,
            showRowCheckboxCol: n,
            options: t,
            reducer: u,
            editedRows: u.state.editedRows,
            style: c.header
          }
        ),
        /* @__PURE__ */ g.jsx(
          df,
          {
            reducer: u,
            columns: r,
            isCellEditable: s,
            showRowNumCol: e,
            showRowCheckboxCol: n,
            selectedRows: u.state.selectedRows,
            onToggleRow: u.toggleRow,
            onToggleGroupExpand: u.expandGroup,
            style: c.body,
            bodyHeight: v
          }
        )
      ] }) }),
      o && /* @__PURE__ */ g.jsx(
        wf,
        {
          currentPage: d.currentPage,
          totalPages: h,
          onPageChange: u.setPage,
          totalDataCount: a.length,
          pageSize: u.state.pagenate.pageSize,
          onPageSizeChange: u.setPageSize,
          style: c.pagination
        }
      )
    ] })
  ] });
}, bf = ({ label: r, isRequired: a, toolTip: t, style: e }) => /* @__PURE__ */ g.jsxs(
  ns,
  {
    style: { ...e },
    children: [
      /* @__PURE__ */ g.jsx("span", { children: r }),
      a && /* @__PURE__ */ g.jsx("span", { style: { color: "#ff4d4f", fontSize: "16px", lineHeight: 1 }, children: "*" }),
      t && /* @__PURE__ */ g.jsx(
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
          children: /* @__PURE__ */ g.jsx(ts, {})
        }
      )
    ]
  }
), Lf = Kt(
  ({ apply: r, children: a, ...t }, e) => /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
    /* @__PURE__ */ g.jsx(at, {}),
    /* @__PURE__ */ g.jsx(
      Lr,
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
        children: a
      }
    )
  ] })
), Df = Kt(
  ({
    apply: r,
    onChange: a,
    value: t,
    textType: e,
    ...n
  }, o) => {
    const i = e === "rangeNumber", [s, c] = he(
      typeof t == "string" ? t : ""
    ), [l, u] = he({
      min: "",
      max: ""
    });
    we(() => {
      i ? typeof t == "object" && t !== null && "min" in t && "max" in t && u({
        min: String(t.min),
        max: String(t.max)
      }) : typeof t == "string" && c(t);
    }, [t, i]);
    const d = (h) => {
      const m = h.target.value;
      c(m), a == null || a({ target: { value: m } });
    }, f = Ae(l);
    return we(() => {
      const h = f.current;
      if (l.min !== h.min || l.max !== h.max) {
        const m = parseFloat(l.min), v = parseFloat(l.max);
        a == null || a({
          target: {
            value: {
              min: isNaN(m) ? 0 : m,
              max: isNaN(v) ? 0 : v
            }
          }
        }), f.current = l;
      }
    }, [l, a]), /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
      /* @__PURE__ */ g.jsx(at, {}),
      i ? /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
        /* @__PURE__ */ g.jsx(
          lr,
          {
            type: "number",
            placeholder: "min",
            value: l.min,
            onChange: (h) => {
              const m = h.target.value;
              u((v) => ({ ...v, min: m }));
            },
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ g.jsx("span", { children: "~" }),
        /* @__PURE__ */ g.jsx(
          lr,
          {
            type: "number",
            placeholder: "max",
            value: l.max,
            onChange: (h) => {
              const m = h.target.value;
              u((v) => ({ ...v, max: m }));
            },
            style: { flex: 1 }
          }
        )
      ] }) : /* @__PURE__ */ g.jsx(
        lr,
        {
          ...n,
          ref: o,
          type: e ?? "text",
          style: { ...n.style },
          value: s,
          onChange: d
        }
      )
    ] });
  }
);
Df.displayName = "TextBox";
const Qa = ["1fr", "1fr"], If = ({
  rowSizes: r = Qa,
  colSizes: a = Qa,
  children: t,
  gap: e = 10,
  border: n
}) => {
  var h;
  const [o, i] = he(r), [s, c] = he(a), [l, u] = he(window.innerHeight), [d, f] = he(window.innerWidth);
  return we(() => {
    const m = () => {
      u(window.innerHeight), f(window.innerWidth), window.innerWidth < 768 ? (c(["1fr"]), i(r.map(() => "auto"))) : (c(a), i(r));
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [r, a]), /* @__PURE__ */ g.jsxs(rt, { theme: nt, children: [
    /* @__PURE__ */ g.jsx(at, {}),
    /* @__PURE__ */ g.jsx(
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
          border: n,
          position: "relative",
          overflow: "hidden"
          // ✅ 내부에서 스크롤 제어
        },
        children: (h = y.Children) == null ? void 0 : h.toArray(t).filter((m) => {
          if (!y.isValidElement(m)) return !1;
          const [v, w] = m.props.startPosition;
          return v <= o.length && w <= s.length;
        })
      }
    )
  ] });
}, xf = () => {
  const r = "0123456789ABCDEF";
  let a = "#";
  for (let t = 0; t < 6; t++)
    a += r[Math.floor(Math.random() * 16)];
  return a;
}, ai = ({
  startPosition: r,
  endPosition: a,
  children: t,
  level: e,
  border: n,
  transparent: o = !1
}) => {
  const [i, s] = r, [c, l] = a, u = xf();
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      style: {
        gridRow: `${i} / ${c + 1}`,
        gridColumn: `${s} / ${l + 1}`,
        border: n,
        background: t || o ? "transparent" : u,
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
      children: t || !o && `${e}Lv [${i}, ${s}] ~ [${c}, ${l}]`
    }
  );
}, Va = ["1fr", "1fr"], kf = ({
  rowSizes: r = Va,
  colSizes: a = Va,
  children: t,
  gap: e = 10,
  border: n,
  level: o = 0
}) => /* @__PURE__ */ g.jsx(
  "div",
  {
    style: {
      display: "grid",
      gridTemplateRows: r.join(" "),
      gridTemplateColumns: a.join(" "),
      gap: `${e}px`,
      width: "100%",
      height: "100%",
      border: n
    },
    children: y.Children.map(t, (i) => y.isValidElement(i) && i.type === ai ? y.cloneElement(i, { level: o + 1 }) : i)
  }
), Ga = (r) => r.reduce((a, t) => (a[t.key] = "", a), {}), _f = (r, a) => {
  switch (a.type) {
    case "UPDATE_FIELD":
      return { ...r, [a.payload.key]: a.payload.value };
    case "RESET_FORM":
      return { ...a.defaultState };
    // ✅ 폼 초기화 기능 추가  
    default:
      return r;
  }
};
function Cf(r) {
  const [a, t] = wn(_f, Ga(r));
  return {
    state: a,
    setFieldValue: (o) => {
      t({ type: "UPDATE_FIELD", payload: o });
    },
    resetForm: () => {
      t({ type: "RESET_FORM", defaultState: Ga(r) });
    }
  };
}
const Ef = (r = "필수 입력 항목입니다.") => (a) => a ? void 0 : r, Yf = (r, a) => (t) => (t == null ? void 0 : t.length) >= r ? void 0 : a || `${r}자 이상 입력해주세요`, Ff = (r = "이메일 형식이 올바르지 않습니다.") => (a) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) ? void 0 : r, Af = (r = "숫자만 입력 가능합니다.") => (a) => a == null || a === "" ? void 0 : isNaN(Number(a)) ? r : void 0, jf = (r, a) => (t) => (t == null ? void 0 : t.length) <= r ? void 0 : a || `${r}자 이하로 입력해주세요`, Wf = (r = "유효한 날짜 형식이 아닙니다.") => (a) => a instanceof Date && !isNaN(a.getTime()) ? void 0 : r, Hf = (r, a = "허용되지 않은 값입니다.") => (t) => r.includes(t) ? void 0 : a, $f = (r, a = "유효하지 않은 값입니다.") => (t) => r(t) ? void 0 : a, qa = (r, a) => {
  const t = {};
  return r.forEach((e) => {
    const n = a[e.key];
    let o;
    e.isRequired && (o = Ef(e.requiredMessage)(n)), !o && e.validate && (o = e.validate(n)), o && (t[e.key] = o);
  }), t;
}, Bf = ({
  title: r,
  division: a,
  formFields: t,
  isActivateInitialButton: e = !0,
  onSubmit: n,
  onSerach: o
}) => {
  const i = Cf(t), [s, c] = he({}), l = Array.from({ length: a.row }, () => "1fr"), u = Array.from({ length: a.col }, () => "1fr");
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    r && /* @__PURE__ */ g.jsx(
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
    /* @__PURE__ */ g.jsx(kf, { rowSizes: l, colSizes: u, gap: 10, children: t.map((d) => {
      const [f, h] = d.position, m = d.span || { row: 1, col: 1 }, v = [f, h], w = [f + m.row - 1, h + m.col - 1], b = i.state[d.key], D = y.isValidElement(d.component) ? y.cloneElement(d.component, {
        value: b,
        onChange: (x) => {
          var C, S;
          const E = ((C = x == null ? void 0 : x.target) == null ? void 0 : C.value) ?? (x == null ? void 0 : x.key) ?? x;
          i.setFieldValue({ key: d.key, value: E });
          const N = (S = d.component.props) == null ? void 0 : S.onChange;
          typeof N == "function" && N(x);
        },
        onKeyDown: d.filter,
        disabled: d.disabled,
        readOnly: d.isReadOnly
      }) : null;
      return /* @__PURE__ */ g.jsxs(ai, { startPosition: v, endPosition: w, children: [
        /* @__PURE__ */ g.jsx(
          bf,
          {
            label: d.label,
            isRequired: d.isRequired,
            toolTip: d.toolTip
          }
        ),
        D,
        s[d.key] && /* @__PURE__ */ g.jsx("div", { style: { color: "red", fontSize: 12 }, children: s[d.key] })
      ] }, d.key);
    }) }),
    /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: "15px", gap: "2px" }, children: [
      n && /* @__PURE__ */ g.jsx(jt, { type: "button", onClick: () => {
        const d = qa(t, i.state);
        c(d), Object.keys(d).length === 0 && (n == null || n(i.state));
      }, children: "제출" }),
      o && /* @__PURE__ */ g.jsx(jt, { type: "button", onClick: () => {
        const d = qa(t, i.state);
        c(d), Object.keys(d).length === 0 && o(i.state);
      }, children: "검색" }),
      e && /* @__PURE__ */ g.jsx(jt, { type: "button", onClick: () => i.resetForm(), children: "초기화" })
    ] })
  ] });
}, Kf = (r) => {
  const a = ["Backspace", "Tab", "ArrowLeft", "ArrowRight"];
  !/^[0-9]$/.test(r.key) && !a.includes(r.key) && r.preventDefault();
};
export {
  Lf as AvartarButton,
  jt as Button,
  wo as CheckBox,
  kn as DropDownBox,
  Bf as Form,
  Nf as Grid,
  bf as Label,
  kf as Layout,
  If as PageDesigner,
  ai as Section,
  ni as SingleDatePicker,
  Df as TextBox,
  $f as custom,
  Kf as filterNumber,
  Wf as isDate,
  Ff as isEmail,
  Hf as isIn,
  Af as isNumber,
  Ef as isRequired,
  jf as maxLength,
  Yf as minLength
};
