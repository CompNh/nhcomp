import I, { useRef as qe, useEffect as Xe, useState as Ze, useReducer as $t } from "react";
var ae = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Mt() {
  if (We) return Z;
  We = 1;
  var t = I, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(s, u, C) {
    var y, R = {}, O = null, f = null;
    C !== void 0 && (O = "" + C), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (f = u.ref);
    for (y in u) r.call(u, y) && !d.hasOwnProperty(y) && (R[y] = u[y]);
    if (s && s.defaultProps) for (y in u = s.defaultProps, u) R[y] === void 0 && (R[y] = u[y]);
    return { $$typeof: n, type: s, key: O, ref: f, props: R, _owner: o.current };
  }
  return Z.Fragment = a, Z.jsx = g, Z.jsxs = g, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Kt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var t = I, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, w = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = p && e[p] || e[w];
      return typeof l == "function" ? l : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
          c[v - 1] = arguments[v];
        k("error", e, c);
      }
    }
    function k(e, l, c) {
      {
        var v = P.ReactDebugCurrentFrame, x = v.getStackAddendum();
        x !== "" && (l += "%s", c = c.concat([x]));
        var _ = c.map(function(E) {
          return String(E);
        });
        _.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var $ = !1, M = !1, U = !1, m = !1, S = !1, F;
    F = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === d || S || e === o || e === C || e === y || m || e === f || $ || M || U || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === R || e.$$typeof === g || e.$$typeof === s || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function ft(e, l, c) {
      var v = e.displayName;
      if (v)
        return v;
      var x = l.displayName || l.name || "";
      return x !== "" ? c + "(" + x + ")" : c;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case a:
          return "Portal";
        case d:
          return "Profiler";
        case o:
          return "StrictMode";
        case C:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var l = e;
            return be(l) + ".Consumer";
          case g:
            var c = e;
            return be(c._context) + ".Provider";
          case u:
            return ft(e, e.render, "ForwardRef");
          case R:
            var v = e.displayName || null;
            return v !== null ? v : K(e.type) || "Memo";
          case O: {
            var x = e, _ = x._payload, E = x._init;
            try {
              return K(E(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, q = 0, xe, _e, Re, Ce, we, Se, je;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function pt() {
      {
        if (q === 0) {
          xe = console.log, _e = console.info, Re = console.warn, Ce = console.error, we = console.group, Se = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        q++;
      }
    }
    function gt() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: xe
            }),
            info: W({}, e, {
              value: _e
            }),
            warn: W({}, e, {
              value: Re
            }),
            error: W({}, e, {
              value: Ce
            }),
            group: W({}, e, {
              value: we
            }),
            groupCollapsed: W({}, e, {
              value: Se
            }),
            groupEnd: W({}, e, {
              value: je
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = P.ReactCurrentDispatcher, ue;
    function ee(e, l, c) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
            ue = v && v[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var de = !1, te;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      te = new vt();
    }
    function Oe(e, l) {
      if (!e || de)
        return "";
      {
        var c = te.get(e);
        if (c !== void 0)
          return c;
      }
      var v;
      de = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ce.current, ce.current = null, pt();
      try {
        if (l) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (A) {
              v = A;
            }
            Reflect.construct(e, [], E);
          } else {
            try {
              E.call();
            } catch (A) {
              v = A;
            }
            e.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            v = A;
          }
          e();
        }
      } catch (A) {
        if (A && v && typeof A.stack == "string") {
          for (var h = A.stack.split(`
`), L = v.stack.split(`
`), j = h.length - 1, T = L.length - 1; j >= 1 && T >= 0 && h[j] !== L[T]; )
            T--;
          for (; j >= 1 && T >= 0; j--, T--)
            if (h[j] !== L[T]) {
              if (j !== 1 || T !== 1)
                do
                  if (j--, T--, T < 0 || h[j] !== L[T]) {
                    var N = `
` + h[j].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, N), N;
                  }
                while (j >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        de = !1, ce.current = _, gt(), Error.prepareStackTrace = x;
      }
      var H = e ? e.displayName || e.name : "", Y = H ? ee(H) : "";
      return typeof e == "function" && te.set(e, Y), Y;
    }
    function yt(e, l, c) {
      return Oe(e, !1);
    }
    function ht(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function re(e, l, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, ht(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case C:
          return ee("Suspense");
        case y:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return yt(e.render);
          case R:
            return re(e.type, l, c);
          case O: {
            var v = e, x = v._payload, _ = v._init;
            try {
              return re(_(x), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, De = {}, ke = P.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var l = e._owner, c = re(e.type, e._source, l ? l.type : null);
        ke.setExtraStackFrame(c);
      } else
        ke.setExtraStackFrame(null);
    }
    function mt(e, l, c, v, x) {
      {
        var _ = Function.call.bind(X);
        for (var E in e)
          if (_(e, E)) {
            var h = void 0;
            try {
              if (typeof e[E] != "function") {
                var L = Error((v || "React class") + ": " + c + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              h = e[E](l, E, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              h = j;
            }
            h && !(h instanceof Error) && (ne(x), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, E, typeof h), ne(null)), h instanceof Error && !(h.message in De) && (De[h.message] = !0, ne(x), b("Failed %s type: %s", c, h.message), ne(null));
          }
      }
    }
    var Et = Array.isArray;
    function fe(e) {
      return Et(e);
    }
    function bt(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function xt(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function Pe(e) {
      if (xt(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(e)), Le(e);
    }
    var Ae = P.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, Ie;
    function Rt(e) {
      if (X.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ct(e) {
      if (X.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, l) {
      typeof e.ref == "string" && Ae.current;
    }
    function St(e, l) {
      {
        var c = function() {
          Ne || (Ne = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function jt(e, l) {
      {
        var c = function() {
          Ie || (Ie = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Tt = function(e, l, c, v, x, _, E) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: c,
        props: E,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Ot(e, l, c, v, x) {
      {
        var _, E = {}, h = null, L = null;
        c !== void 0 && (Pe(c), h = "" + c), Ct(l) && (Pe(l.key), h = "" + l.key), Rt(l) && (L = l.ref, wt(l, x));
        for (_ in l)
          X.call(l, _) && !_t.hasOwnProperty(_) && (E[_] = l[_]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (_ in j)
            E[_] === void 0 && (E[_] = j[_]);
        }
        if (h || L) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && St(E, T), L && jt(E, T);
        }
        return Tt(e, h, L, x, v, Ae.current, E);
      }
    }
    var pe = P.ReactCurrentOwner, Ge = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var l = e._owner, c = re(e.type, e._source, l ? l.type : null);
        Ge.setExtraStackFrame(c);
      } else
        Ge.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Fe() {
      {
        if (pe.current) {
          var e = K(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Dt(e) {
      return "";
    }
    var ze = {};
    function kt(e) {
      {
        var l = Fe();
        if (!l) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function $e(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = kt(l);
        if (ze[c])
          return;
        ze[c] = !0;
        var v = "";
        e && e._owner && e._owner !== pe.current && (v = " It was passed a child from " + K(e._owner.type) + "."), B(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), B(null);
      }
    }
    function Me(e, l) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var c = 0; c < e.length; c++) {
            var v = e[c];
            ve(v) && $e(v, l);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = D(e);
          if (typeof x == "function" && x !== e.entries)
            for (var _ = x.call(e), E; !(E = _.next()).done; )
              ve(E.value) && $e(E.value, l);
        }
      }
    }
    function Lt(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === R))
          c = l.propTypes;
        else
          return;
        if (c) {
          var v = K(l);
          mt(c, e.props, "prop", v, e);
        } else if (l.PropTypes !== void 0 && !ge) {
          ge = !0;
          var x = K(l);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(e) {
      {
        for (var l = Object.keys(e.props), c = 0; c < l.length; c++) {
          var v = l[c];
          if (v !== "children" && v !== "key") {
            B(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var Ke = {};
    function Ve(e, l, c, v, x, _) {
      {
        var E = J(e);
        if (!E) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Dt();
          L ? h += L : h += Fe();
          var j;
          e === null ? j = "null" : fe(e) ? j = "array" : e !== void 0 && e.$$typeof === n ? (j = "<" + (K(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, h);
        }
        var T = Ot(e, l, c, x, _);
        if (T == null)
          return T;
        if (E) {
          var N = l.children;
          if (N !== void 0)
            if (v)
              if (fe(N)) {
                for (var H = 0; H < N.length; H++)
                  Me(N[H], e);
                Object.freeze && Object.freeze(N);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(N, e);
        }
        if (X.call(l, "key")) {
          var Y = K(e), A = Object.keys(l).filter(function(zt) {
            return zt !== "key";
          }), ye = A.length > 0 ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[Y + ye]) {
            var Ft = A.length > 0 ? "{" + A.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, Y, Ft, Y), Ke[Y + ye] = !0;
          }
        }
        return e === r ? Pt(T) : Lt(T), T;
      }
    }
    function At(e, l, c) {
      return Ve(e, l, c, !0);
    }
    function Nt(e, l, c) {
      return Ve(e, l, c, !1);
    }
    var It = Nt, Gt = At;
    Q.Fragment = r, Q.jsx = It, Q.jsxs = Gt;
  }()), Q;
}
var Be;
function Vt() {
  return Be || (Be = 1, process.env.NODE_ENV === "production" ? ae.exports = Mt() : ae.exports = Kt()), ae.exports;
}
var i = Vt(), Qe = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, He = I.createContext && /* @__PURE__ */ I.createContext(Qe), Wt = ["attr", "size", "title"];
function Yt(t, n) {
  if (t == null) return {};
  var a = Bt(t, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (o = 0; o < d.length; o++)
      r = d[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
function Bt(t, n) {
  if (t == null) return {};
  var a = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (n.indexOf(r) >= 0) continue;
      a[r] = t[r];
    }
  return a;
}
function le() {
  return le = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
  }, le.apply(this, arguments);
}
function Ue(t, n) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function ie(t) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ue(Object(a), !0).forEach(function(r) {
      Ht(t, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Ue(Object(a)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return t;
}
function Ht(t, n, a) {
  return n = Ut(n), n in t ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = a, t;
}
function Ut(t) {
  var n = Jt(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Jt(t, n) {
  if (typeof t != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(t, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function et(t) {
  return t && t.map((n, a) => /* @__PURE__ */ I.createElement(n.tag, ie({
    key: a
  }, n.attr), et(n.child)));
}
function G(t) {
  return (n) => /* @__PURE__ */ I.createElement(qt, le({
    attr: ie({}, t.attr)
  }, n), et(t.child));
}
function qt(t) {
  var n = (a) => {
    var {
      attr: r,
      size: o,
      title: d
    } = t, g = Yt(t, Wt), s = o || a.size || "1em", u;
    return a.className && (u = a.className), t.className && (u = (u ? u + " " : "") + t.className), /* @__PURE__ */ I.createElement("svg", le({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, r, g, {
      className: u,
      style: ie(ie({
        color: t.color || a.color
      }, a.style), t.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ I.createElement("title", null, d), t.children);
  };
  return He !== void 0 ? /* @__PURE__ */ I.createElement(He.Consumer, null, (a) => n(a)) : n(Qe);
}
function tt(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(t);
}
function Xt(t) {
  return G({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(t);
}
function Zt(t) {
  return G({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(t);
}
function rt(t) {
  return G({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(t);
}
function nt(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(t);
}
function at(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(t);
}
function lt(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(t);
}
function it(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(t);
}
function he(t) {
  return G({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(t);
}
function ot(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(t);
}
var Qt = "_1bop95o0", er = "_1bop95o1", tr = "_1bop95o2", rr = "_1bop95o3", nr = "_1bop95o4", ar = "_1bop95o5";
const lr = ({
  menuPosition: t,
  options: n,
  onClose: a,
  reducer: r
}) => {
  var g, s, u, C, y, R, O;
  const o = qe(null);
  if (Xe(() => {
    const f = (p) => {
      o.current && !o.current.contains(p.target) && a();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [a]), !t || !n) return null;
  const d = [
    n.sortable && t.column.sortable && {
      label: ((g = n.contextMenuLabels) == null ? void 0 : g.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ i.jsx(it, { style: { color: "#2563EB", fontSize: "14px" } }),
      // ✅ text-blue-600
      onClick: () => r == null ? void 0 : r.setSort(t.column.key, "asc")
    },
    n.sortable && t.column.sortable && {
      label: ((s = n.contextMenuLabels) == null ? void 0 : s.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ i.jsx(lt, { style: { color: "#2563EB", fontSize: "14px" } }),
      // ✅ text-blue-600
      onClick: () => r == null ? void 0 : r.setSort(t.column.key, "desc")
    },
    n.sortable && t.column.sortable && {
      label: ((u = n.contextMenuLabels) == null ? void 0 : u.clearSort) || "정렬 해제",
      icon: /* @__PURE__ */ i.jsx(he, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => r == null ? void 0 : r.setSort(t.column.key, null)
    },
    n.sortable && t.column.sortable && (n.grouping || n.filterable) && { divider: !0 },
    n.grouping && {
      label: ((C = n.contextMenuLabels) == null ? void 0 : C.group) || "그룹화",
      icon: /* @__PURE__ */ i.jsx(at, { style: { color: "#16A34A", fontSize: "14px" } }),
      // ✅ text-green-600
      onClick: () => r == null ? void 0 : r.setGroup(t.column.key)
    },
    n.grouping && {
      label: ((y = n.contextMenuLabels) == null ? void 0 : y.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ i.jsx(he, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => r == null ? void 0 : r.removeGroup(t.column.key)
    },
    (n.grouping || n.sortable) && n.filterable && t.column.filterable && { divider: !0 },
    n.filterable && t.column.filterable && {
      label: ((R = n.contextMenuLabels) == null ? void 0 : R.filter) || "필터",
      icon: /* @__PURE__ */ i.jsx(nt, { style: { color: "#D97706", fontSize: "14px" } }),
      // ✅ text-amber-500
      onClick: () => r == null ? void 0 : r.setFilter({ [t.column.key]: "" })
    },
    n.filterable && t.column.filterable && {
      label: ((O = n.contextMenuLabels) == null ? void 0 : O.clearFilter) || "필터 해제",
      icon: /* @__PURE__ */ i.jsx(he, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => r == null ? void 0 : r.clearFilter(t.column.key)
    }
  ].filter(Boolean);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: o,
      className: Qt,
      style: {
        top: `${t.y}px`,
        left: `${t.x}px`
      },
      children: /* @__PURE__ */ i.jsx("ul", { className: er, children: d.map(
        (f, p) => f.divider ? /* @__PURE__ */ i.jsx("hr", { className: nr }, `divider-${p}`) : /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: `${tr} ${f.disabled ? rr : ""}`,
            onClick: () => {
              !f.disabled && f.onClick && f.onClick(), a();
            },
            children: [
              f.icon && /* @__PURE__ */ i.jsx("span", { className: ar, children: f.icon }),
              /* @__PURE__ */ i.jsx("span", { children: f.label })
            ]
          },
          p
        )
      ) })
    }
  );
};
var ir = "_11mp04s0", or = "_11mp04s1", sr = "_11mp04s2", cr = "_11mp04s3", ur = "_11mp04s4", dr = "_11mp04s5", fr = "_11mp04s6", V = "gzst6e0", pr = "gzst6e1", oe = "gzst6e2", st = "gzst6e3", ct = "gzst6e4";
const gr = ({
  columns: t,
  showRowNumCol: n,
  showRowCheckboxCol: a,
  options: r,
  reducer: o,
  editedRows: d
}) => {
  const [g, s] = Ze(null), { filters: u, sortedColumn: C, sortDirection: y, group: R } = o.state, O = (p, w) => {
    p.preventDefault(), r && s({ x: p.clientX, y: p.clientY, column: w });
  }, f = () => s(null);
  return console.log(d), /* @__PURE__ */ i.jsxs("thead", { className: ir, children: [
    /* @__PURE__ */ i.jsxs("tr", { className: or, children: [
      d && Object.keys(d).length > 0 && /* @__PURE__ */ i.jsx("th", { className: `${V}`, style: { width: "60px" }, children: /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center" }, children: [
        /* @__PURE__ */ i.jsx("button", { className: `${oe} ${st}`, onClick: o.applyAllChanges, children: /* @__PURE__ */ i.jsx(tt, {}) }),
        /* @__PURE__ */ i.jsx("button", { className: `${oe} ${ct}`, onClick: o.resetAllChanges, children: /* @__PURE__ */ i.jsx(ot, {}) })
      ] }) }),
      n && /* @__PURE__ */ i.jsx("th", { className: V, style: { width: "30px" }, children: "No." }),
      a && /* @__PURE__ */ i.jsx("th", { className: V, style: { width: "30px" }, children: "✔" }),
      t.map((p) => {
        var w;
        return /* @__PURE__ */ i.jsx(
          "th",
          {
            className: `${V} ${p.sticky === "left" ? sr : ""} ${p.sticky === "right" ? cr : ""}`,
            style: { width: p.width ? `${p.width}px` : "auto", textAlign: p.align || "left" },
            title: p.tooltip,
            onContextMenu: (D) => O(D, p),
            children: /* @__PURE__ */ i.jsxs("div", { className: fr, children: [
              /* @__PURE__ */ i.jsx("span", { children: p.label }),
              p.sortable && C === p.key && y !== null && (y === "asc" ? /* @__PURE__ */ i.jsx(it, { style: { color: "#2563EB", fontSize: "14px" } }) : /* @__PURE__ */ i.jsx(lt, { style: { color: "#2563EB", fontSize: "14px" } })),
              ((w = R.column) == null ? void 0 : w.includes(p.key)) && /* @__PURE__ */ i.jsx(at, { style: { color: "#16A34A", fontSize: "14px" } }),
              (r == null ? void 0 : r.filterable) && u[p.key] !== void 0 && /* @__PURE__ */ i.jsx(nt, { style: { color: "#D97706", fontSize: "14px" } })
            ] })
          },
          p.key
        );
      })
    ] }),
    t.some((p) => (r == null ? void 0 : r.filterable) && u[p.key] !== void 0) ? /* @__PURE__ */ i.jsxs("tr", { className: ur, children: [
      n ? /* @__PURE__ */ i.jsx("td", { style: { padding: "8px" }, children: " " }) : null,
      a ? /* @__PURE__ */ i.jsx("td", { style: { padding: "8px" }, children: " " }) : null,
      t.map((p) => /* @__PURE__ */ i.jsx("td", { style: { padding: "8px" }, children: p.filterable && u[p.key] !== void 0 && /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          value: u[p.key] || "",
          onChange: (w) => o.setFilter({ ...u, [p.key]: w.target.value }),
          className: dr,
          placeholder: "필터 입력..."
        }
      ) }, p.key))
    ] }) : null,
    r && /* @__PURE__ */ i.jsx(lr, { menuPosition: g, options: r, onClose: f, reducer: o })
  ] });
}, Je = (t) => t.__group === !0, ut = (t, n, a) => a ? [...t].sort((r, o) => {
  const d = r[n], g = o[n];
  if (d == null || g == null) return 0;
  if (typeof d == "number" && typeof g == "number")
    return a === "asc" ? d - g : g - d;
  const s = String(d).toLowerCase(), u = String(g).toLowerCase();
  return a === "asc" ? s.localeCompare(u) : u.localeCompare(s);
}) : [...t], vr = (t, n, a) => [...t].sort((r, o) => {
  let d = 0;
  for (let g = 0; g < n.length; g++) {
    const s = n[g], u = a, C = r[s] ?? "", y = o[s] ?? "";
    if (typeof C == "number" && typeof y == "number" ? d = C - y : d = String(C).localeCompare(String(y)), u === "desc" && (d = -d), d !== 0) return d;
  }
  return d;
}), se = (t, n, a = /* @__PURE__ */ new Set(), r = 0) => {
  if (n.length === r) return t;
  const o = n[r], d = [], g = /* @__PURE__ */ new Map();
  return t.forEach((s) => {
    const u = String(s[o]);
    g.has(u) || g.set(u, {
      __group: !0,
      __groupKey: u,
      __children: [],
      __groupLevel: r
    }), g.get(u).__children.push(s);
  }), g.forEach((s) => {
    s.__children = se(s.__children, n, a, r + 1), d.push(s), a.has(s.__groupKey) && !d.includes(s) && d.push(...s.__children);
  }), d;
}, yr = (t, n) => t.filter(
  (a) => Object.entries(n).every(([r, o]) => o ? String(a[r]).toLowerCase().includes(o.toLowerCase()) : !0)
), Ee = (t, n, a, r) => {
  const o = (n - 1) * a, d = o + a;
  let g = [...t];
  return (r == null ? void 0 : r.group) !== void 0 && (g = vr(
    g,
    r == null ? void 0 : r.group.column,
    (r == null ? void 0 : r.sortDirection) === void 0 ? "asc" : r == null ? void 0 : r.sortDirection
  )), g.slice(o, d);
}, z = (t) => {
  let n = [...t.originalData];
  return Object.keys(t.filters).length > 0 && (n = yr(n, t.filters)), t.sortedColumn && t.sortDirection && (n = ut(n, t.sortedColumn, t.sortDirection)), n = Ee(
    n,
    t.pagenate.currentPage,
    t.pagenate.pageSize,
    t
  ), t.group.column.length > 0 && (n = se(n, t.group.column, t.group.expanded)), {
    ...t,
    data: n
  };
}, dt = (t) => t.map((n, a) => ({
  ...n,
  rowKey: n.rowKey ?? `row-${Date.now()}-${Math.random()}-${a}`
}));
var hr = "_1lu81yz1", mr = "_1lu81yz2", Er = "_1lu81yz3";
const br = ({
  columns: t,
  showRowNumCol: n = !1,
  showRowCheckboxCol: a = !1,
  selectedRows: r,
  isCellEditable: o = !1,
  onToggleRow: d,
  onToggleGroupExpand: g,
  reducer: s
}) => {
  const u = (f, p, w) => {
    s.setEditingCell(f, p, w);
  }, C = (f) => {
    if (!s.state.editingCell) return;
    const { rowKey: p, colKey: w } = s.state.editingCell;
    s.setEditingCell(p, w, f);
    const D = s.state.originalData.find((b) => b.rowKey === p);
    (D ? D[w] : void 0) !== f ? s.editCell(p, w, f) : s.removeEditedCell(p, w);
  }, y = (f, p) => {
    if (!s.state.editingCell) return;
    const { rowKey: w, colKey: D } = s.state.editingCell, P = t.findIndex((b) => b.key === D);
    if (f.key === "Enter" && s.clearEditingCell(), f.key === "Tab") {
      f.preventDefault();
      for (let b = P + 1; b < t.length; b++)
        if (t[b].editable !== !1) {
          s.clearEditingCell(), s.setEditingCell(w, t[b].key, p[t[b].key]);
          return;
        }
      s.clearEditingCell();
    }
  }, R = (f, p) => {
    const w = f.__groupKey, D = s.state.group.expanded.has(w);
    let P = 0;
    return /* @__PURE__ */ i.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ i.jsx("tr", { className: mr, onClick: () => g(w), children: /* @__PURE__ */ i.jsx("td", { colSpan: t.length + (n ? 1 : 0) + (a ? 1 : 0), children: /* @__PURE__ */ i.jsxs("div", { className: Er, style: { paddingLeft: `${p * 16}px` }, children: [
        /* @__PURE__ */ i.jsx("span", { children: D ? /* @__PURE__ */ i.jsx(Xt, {}) : /* @__PURE__ */ i.jsx(rt, {}) }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          w,
          " (",
          f.__children.length,
          ")"
        ] })
      ] }) }) }),
      D && f.__children.map(
        (b) => Je(b) ? R(b, p + 1) : O(b, p + 1, ++P)
      )
    ] }, `group-${w}`);
  }, O = (f, p, w) => {
    const D = (k) => {
      var $, M;
      return (($ = s.state.editingCell) == null ? void 0 : $.rowKey) === f.rowKey && ((M = s.state.editingCell) == null ? void 0 : M.colKey) === k;
    }, P = s.state.editedRows[f.rowKey] !== void 0, b = o && Object.keys(s.state.editedRows).length > 0;
    return /* @__PURE__ */ i.jsxs("tr", { className: pr, children: [
      b && /* @__PURE__ */ i.jsx("td", { className: `${V}`, children: P && /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center" }, children: [
        /* @__PURE__ */ i.jsx("button", { className: `${oe} ${st}`, onClick: () => s.applyRowChanges(f.rowKey), children: /* @__PURE__ */ i.jsx(tt, {}) }),
        /* @__PURE__ */ i.jsx("button", { className: `${oe} ${ct}`, onClick: () => s.resetRowChanges(f.rowKey), children: /* @__PURE__ */ i.jsx(ot, {}) })
      ] }) }),
      n ? /* @__PURE__ */ i.jsx("td", { className: `${V}`, children: w }) : null,
      a ? /* @__PURE__ */ i.jsx("td", { className: `${V}`, children: /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.has(f), onChange: () => d(f) }) }) : null,
      t.map((k) => {
        var M, U, m, S, F;
        const $ = D(k.key) ? (M = s.state.editingCell) == null ? void 0 : M.value : ((U = s.state.editedRows[f.rowKey]) == null ? void 0 : U[k.key]) ?? (k.renderCell ? k.renderCell(f) : f[k.key]);
        return /* @__PURE__ */ i.jsx(
          "td",
          {
            className: `${V}`,
            style: {
              paddingLeft: `${p * 16}px`,
              fontWeight: ((m = s.state.editedRows[f.rowKey]) == null ? void 0 : m[k.key]) !== void 0 ? "bold" : "normal",
              color: ((S = s.state.editedRows[f.rowKey]) == null ? void 0 : S[k.key]) !== void 0 ? "red" : "inherit"
            },
            onDoubleClick: () => o && u(f.rowKey, k.key, $),
            children: D(k.key) ? /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                value: ((F = s.state.editingCell) == null ? void 0 : F.value) ?? "",
                onChange: (J) => C(J.target.value),
                onKeyDown: (J) => y(J, f),
                className: hr
              }
            ) : $
          },
          k.key
        );
      })
    ] }, f.rowKey);
  };
  return /* @__PURE__ */ i.jsx("tbody", { children: s.state.data.map(
    (f, p) => Je(f) ? R(f, 0) : O(f, 0, p + 1)
  ) });
}, xr = (t, n, a) => {
  const r = dt(t);
  return {
    originalData: [...r],
    data: n ? Ee(r, 1, a) : r,
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
    pagenate: {
      pageSize: a,
      currentPage: 1
    },
    editedRows: {},
    editingCell: null
  };
};
function _r(t, n) {
  switch (n.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...t,
        sortedColumn: n.column,
        sortDirection: n.direction,
        data: n.direction === null ? [...t.originalData] : ut(t.originalData, n.column, n.direction)
        // ✅ 정렬된 데이터 반영
      };
    /** 🔹 특정 컬럼에 필터 적용 */
    case "SET_FILTER": {
      const a = {
        ...t.filters,
        // 기존 필터 유지
        ...n.filters
        // 새로운 필터 추가 or 업데이트
      };
      return {
        ...t,
        filters: a
      };
    }
    /** 🔹 특정 컬럼의 필터 제거 */
    case "CLEAR_FILTER":
      return {
        ...t,
        filters: Object.fromEntries(
          Object.entries(t.filters).filter(([a]) => a !== n.column)
        )
      };
    /** 🔹 컬럼을 그룹핑 */
    case "SET_GROUP": {
      const a = [...t.group.column, n.column];
      return {
        ...t,
        group: {
          ...t.group,
          column: a,
          // ✅ 새로운 그룹 컬럼 추가
          expanded: new Set(t.group.expanded)
          // ✅ 기존 확장 상태 유지
        },
        data: se(t.originalData, a)
      };
    }
    /** 🔹 컬럼 그룹핑 해제 */
    case "REMOVE_GROUP": {
      const a = t.group.column.filter((o) => o !== n.column), r = new Set(t.group.expanded);
      return r.delete(n.column), {
        ...t,
        group: {
          column: a,
          // ✅ 그룹 컬럼에서 제거
          expanded: r
          // ✅ 확장 목록에서도 제거
        },
        data: a.length > 0 ? se(t.originalData, a, r) : [...t.originalData]
        // ✅ 모든 그룹이 해제되면 원본 데이터 복원
      };
    }
    case "TOGGLE_ROW":
      return { ...t };
    /** 🔹 특정 Row 선택/해제 */
    case "TOGGLE_GROUP_EXPAND": {
      const a = new Set(t.group.expanded);
      return a.has(n.column) ? a.delete(n.column) : a.add(n.column), {
        ...t,
        group: {
          ...t.group,
          // ✅ 기존 그룹 상태 유지
          expanded: a
          // ✅ 업데이트된 그룹 상태 저장
        }
      };
    }
    /** 🔹 페이지 변경 */
    case "SET_PAGE":
      return {
        ...t,
        pagenate: {
          ...t.pagenate,
          currentPage: n.page
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 */
    case "SET_PAGE_SIZE":
      return {
        ...t,
        pagenate: {
          ...t.pagenate,
          pageSize: n.pageSize
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    case "SET_EDITING_CELL":
      return {
        ...t,
        editingCell: {
          rowKey: n.payload.rowKey,
          colKey: n.payload.colKey,
          value: n.payload.value
        }
      };
    case "CLEAR_EDITING_CELL":
      return {
        ...t,
        editingCell: null
      };
    case "EDIT_CELL": {
      const { rowKey: a, colKey: r, newValue: o } = n.payload;
      return {
        ...t,
        editedRows: {
          ...t.editedRows,
          [a]: {
            ...t.editedRows[a],
            [r]: o
          }
        }
      };
    }
    case "REMOVE_EDITED_CELL": {
      const { rowKey: a, colKey: r } = n.payload, o = { ...t.editedRows[a] };
      if (delete o[r], Object.keys(o).length === 0) {
        const d = { ...t.editedRows };
        return delete d[a], {
          ...t,
          editedRows: d
        };
      }
      return {
        ...t,
        editedRows: {
          ...t.editedRows,
          [a]: o
        }
      };
    }
    case "APPLY_ROW_CHANGES": {
      const { rowKey: a } = n.payload, r = t.editedRows[a];
      if (!r) return t;
      const o = t.data.map(
        (s) => s.rowKey === a ? { ...s, ...r } : s
      ), d = t.originalData.map(
        (s) => s.rowKey === a ? { ...s, ...r } : s
      ), g = { ...t.editedRows };
      return delete g[a], {
        ...t,
        data: o,
        originalData: d,
        // ✅ 원본 데이터 업데이트
        editedRows: g,
        // ✅ 해당 Row만 제거
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    case "RESET_ROW_CHANGES": {
      const { rowKey: a } = n.payload, r = t.originalData.find(
        (g) => g.rowKey === a
      );
      if (!r) return t;
      const o = t.data.map(
        (g) => g.rowKey === a ? r : g
      ), d = { ...t.editedRows };
      return delete d[a], {
        ...t,
        data: o,
        // ✅ 변경된 데이터 복원
        editedRows: d,
        // ✅ 해당 Row의 변경 사항 삭제
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    case "APPLY_ALL_CHANGES": {
      const a = t.originalData.map(
        (r) => t.editedRows[r.rowKey] ? { ...r, ...t.editedRows[r.rowKey] } : r
      );
      return {
        ...t,
        originalData: a,
        data: Ee(a, t.pagenate.currentPage, t.pagenate.pageSize, t),
        editedRows: {},
        // ✅ 적용 후 초기화
        editingCell: null
      };
    }
    case "RESET_ALL_CHANGES":
      return {
        ...t,
        editedRows: {},
        // ✅ 모든 변경 사항 초기화
        editingCell: null
      };
    /** 🔹 Grid 상태 변경 */
    case "SET_GRID_STATE":
      return { ...t, ...n.state };
    // ✅ 새로운 상태 적용
    default:
      return t;
  }
}
function Rr(t, n = !1, a = 10) {
  const [r, o] = $t(_r, xr(t, n, a));
  return {
    state: r,
    updateGridState: () => {
      o({
        type: "SET_GRID_STATE",
        state: z(r)
      });
    },
    setSort: (m, S) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          sortedColumn: m,
          sortDirection: S
        })
      });
    },
    setFilter: (m) => {
      const S = { ...r.filters, ...m };
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          filters: S
        })
      });
    },
    clearFilter: (m) => {
      const S = { ...r.filters };
      delete S[m], o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          filters: S
        })
      });
    },
    setGroup: (m) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          group: {
            ...r.group,
            column: [...r.group.column, m]
          }
        })
      });
    },
    removeGroup: (m) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          group: {
            ...r.group,
            column: r.group.column.filter((S) => S !== m)
          }
        })
      });
    },
    expandGroup: (m) => {
      const S = new Set(r.group.expanded);
      S.has(m) ? S.delete(m) : S.add(m), o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          group: {
            ...r.group,
            expanded: S
          }
        })
      });
    },
    toggleRow: (m) => {
      o({ type: "TOGGLE_ROW", row: m });
    },
    setPage: (m) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          pagenate: {
            ...r.pagenate,
            currentPage: m
          }
        })
      });
    },
    setPageSize: (m) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          pagenate: {
            ...r.pagenate,
            pageSize: m
          }
        })
      });
    },
    editCell: (m, S, F) => {
      o({ type: "EDIT_CELL", payload: { rowKey: m, colKey: S, newValue: F } });
    },
    setEditingCell: (m, S, F) => {
      o({ type: "SET_EDITING_CELL", payload: { rowKey: m, colKey: S, value: F } });
    },
    clearEditingCell: () => {
      o({ type: "CLEAR_EDITING_CELL" });
    },
    applyAllChanges: () => {
      o({ type: "APPLY_ALL_CHANGES" });
    },
    resetAllChanges: () => {
      o({ type: "RESET_ALL_CHANGES" });
    },
    removeEditedCell: (m, S) => {
      o({ type: "REMOVE_EDITED_CELL", payload: { rowKey: m, colKey: S } });
    },
    applyRowChanges: (m) => {
      o({ type: "APPLY_ROW_CHANGES", payload: { rowKey: m } });
    },
    resetRowChanges: (m) => {
      o({ type: "RESET_ROW_CHANGES", payload: { rowKey: m } });
    }
  };
}
var Cr = "i9immy0", wr = "i9immy1", Sr = "i9immy2", jr = "i9immy3", Tr = "i9immy4", Or = "i9immy5", Dr = "i9immy6", kr = "i9immy7", me = "i9immy8", Lr = "i9immy9";
const Pr = ({
  currentPage: t,
  totalPages: n,
  totalDataCount: a,
  pageSize: r,
  onPageChange: o,
  onPageSizeChange: d
}) => {
  const g = [10, 20, 30, 50, 100], [s, u] = Ze(!1), C = qe(null);
  return Xe(() => {
    const y = (R) => {
      C.current && !C.current.contains(R.target) && u(!1);
    };
    return s && window.addEventListener("click", y), () => {
      window.removeEventListener("click", y);
    };
  }, [s]), /* @__PURE__ */ i.jsxs("div", { className: Cr, children: [
    /* @__PURE__ */ i.jsxs("span", { className: wr, children: [
      "Total ",
      /* @__PURE__ */ i.jsx("b", { children: a }),
      " page | Page ",
      t,
      " / ",
      n
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: Sr, children: [
      /* @__PURE__ */ i.jsx("span", { className: jr, children: "Page Size:" }),
      /* @__PURE__ */ i.jsxs("div", { className: Tr, ref: C, children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: (y) => {
              y.stopPropagation(), u(!s);
            },
            className: Or,
            children: r
          }
        ),
        s && /* @__PURE__ */ i.jsx("div", { className: Dr, children: g.map((y, R) => /* @__PURE__ */ i.jsx(
          "div",
          {
            onClick: () => {
              d(y), u(!1);
            },
            className: kr,
            children: y
          },
          R
        )) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "4px" }, children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: me,
          onClick: () => t > 1 && o(t - 1),
          disabled: t === 1,
          children: /* @__PURE__ */ i.jsx(Zt, { size: 14 })
        }
      ),
      Array.from({ length: n }, (y, R) => R + 1).map((y) => /* @__PURE__ */ i.jsx(
        "button",
        {
          className: `${me} ${y === t ? Lr : ""}`,
          onClick: () => o(y),
          children: y
        },
        y
      )),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: me,
          onClick: () => t < n && o(t + 1),
          disabled: t === n,
          children: /* @__PURE__ */ i.jsx(rt, { size: 14 })
        }
      )
    ] })
  ] });
};
var Ar = "ss4n030", Nr = "ss4n031";
const Gr = ({
  columns: t,
  data: n,
  options: a,
  showRowNumCol: r = !0,
  showRowCheckboxCol: o = !1,
  pagingable: d = !1,
  pagination: g,
  isCellEditable: s = !1
}) => {
  const u = Rr(dt(n), d, g == null ? void 0 : g.pageSize), { pagenate: C } = u.state, y = n.length, R = Math.ceil(y / C.pageSize);
  return console.log("Grid.tsx - editedRows:", u.state.editedRows), /* @__PURE__ */ i.jsxs("div", { className: Ar, children: [
    /* @__PURE__ */ i.jsxs("table", { className: Nr, children: [
      /* @__PURE__ */ i.jsx(
        gr,
        {
          columns: t,
          showRowNumCol: r,
          showRowCheckboxCol: o,
          options: a,
          reducer: u,
          editedRows: u.state.editedRows
        }
      ),
      /* @__PURE__ */ i.jsx(
        br,
        {
          reducer: u,
          columns: t,
          isCellEditable: s,
          showRowNumCol: r,
          showRowCheckboxCol: o,
          selectedRows: u.state.selectedRows,
          onToggleRow: u.toggleRow,
          onToggleGroupExpand: u.expandGroup
        }
      )
    ] }),
    d && /* @__PURE__ */ i.jsx(
      Pr,
      {
        currentPage: C.currentPage,
        totalPages: R,
        onPageChange: u.setPage,
        totalDataCount: n.length,
        pageSize: u.state.pagenate.pageSize,
        onPageSizeChange: u.setPageSize
      }
    )
  ] });
};
export {
  Gr as Grid
};
