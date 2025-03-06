import N, { useRef as He, useEffect as Ue, useState as Je, useReducer as It } from "react";
var ne = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Nt() {
  if (Me) return X;
  Me = 1;
  var t = N, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(s, u, R) {
    var v, C = {}, O = null, f = null;
    R !== void 0 && (O = "" + R), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (f = u.ref);
    for (v in u) r.call(u, v) && !d.hasOwnProperty(v) && (C[v] = u[v]);
    if (s && s.defaultProps) for (v in u = s.defaultProps, u) C[v] === void 0 && (C[v] = u[v]);
    return { $$typeof: n, type: s, key: O, ref: f, props: C, _owner: o.current };
  }
  return X.Fragment = a, X.jsx = g, X.jsxs = g, X;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Gt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var t = N, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, w = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = p && e[p] || e[w];
      return typeof l == "function" ? l : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
          c[h - 1] = arguments[h];
        k("error", e, c);
      }
    }
    function k(e, l, c) {
      {
        var h = P.ReactDebugCurrentFrame, x = h.getStackAddendum();
        x !== "" && (l += "%s", c = c.concat([x]));
        var _ = c.map(function(E) {
          return String(E);
        });
        _.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var K = !1, M = !1, H = !1, b = !1, S = !1, F;
    F = Symbol.for("react.module.reference");
    function U(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === d || S || e === o || e === R || e === v || b || e === f || K || M || H || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === C || e.$$typeof === g || e.$$typeof === s || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function ot(e, l, c) {
      var h = e.displayName;
      if (h)
        return h;
      var x = l.displayName || l.name || "";
      return x !== "" ? c + "(" + x + ")" : c;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case R:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var l = e;
            return ye(l) + ".Consumer";
          case g:
            var c = e;
            return ye(c._context) + ".Provider";
          case u:
            return ot(e, e.render, "ForwardRef");
          case C:
            var h = e.displayName || null;
            return h !== null ? h : $(e.type) || "Memo";
          case O: {
            var x = e, _ = x._payload, E = x._init;
            try {
              return $(E(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, J = 0, me, be, Ee, xe, _e, Ce, Re;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function st() {
      {
        if (J === 0) {
          me = console.log, be = console.info, Ee = console.warn, xe = console.error, _e = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
        J++;
      }
    }
    function ct() {
      {
        if (J--, J === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, e, {
              value: me
            }),
            info: V({}, e, {
              value: be
            }),
            warn: V({}, e, {
              value: Ee
            }),
            error: V({}, e, {
              value: xe
            }),
            group: V({}, e, {
              value: _e
            }),
            groupCollapsed: V({}, e, {
              value: Ce
            }),
            groupEnd: V({}, e, {
              value: Re
            })
          });
        }
        J < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = P.ReactCurrentDispatcher, se;
    function Q(e, l, c) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (x) {
            var h = x.stack.trim().match(/\n( *(at )?)/);
            se = h && h[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ce = !1, ee;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new ut();
    }
    function Se(e, l) {
      if (!e || ce)
        return "";
      {
        var c = ee.get(e);
        if (c !== void 0)
          return c;
      }
      var h;
      ce = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = oe.current, oe.current = null, st();
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
              h = A;
            }
            Reflect.construct(e, [], E);
          } else {
            try {
              E.call();
            } catch (A) {
              h = A;
            }
            e.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            h = A;
          }
          e();
        }
      } catch (A) {
        if (A && h && typeof A.stack == "string") {
          for (var y = A.stack.split(`
`), L = h.stack.split(`
`), j = y.length - 1, T = L.length - 1; j >= 1 && T >= 0 && y[j] !== L[T]; )
            T--;
          for (; j >= 1 && T >= 0; j--, T--)
            if (y[j] !== L[T]) {
              if (j !== 1 || T !== 1)
                do
                  if (j--, T--, T < 0 || y[j] !== L[T]) {
                    var I = `
` + y[j].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, I), I;
                  }
                while (j >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ce = !1, oe.current = _, ct(), Error.prepareStackTrace = x;
      }
      var Y = e ? e.displayName || e.name : "", W = Y ? Q(Y) : "";
      return typeof e == "function" && ee.set(e, W), W;
    }
    function dt(e, l, c) {
      return Se(e, !1);
    }
    function ft(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function te(e, l, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, ft(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case R:
          return Q("Suspense");
        case v:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return dt(e.render);
          case C:
            return te(e.type, l, c);
          case O: {
            var h = e, x = h._payload, _ = h._init;
            try {
              return te(_(x), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, je = {}, Te = P.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var l = e._owner, c = te(e.type, e._source, l ? l.type : null);
        Te.setExtraStackFrame(c);
      } else
        Te.setExtraStackFrame(null);
    }
    function pt(e, l, c, h, x) {
      {
        var _ = Function.call.bind(q);
        for (var E in e)
          if (_(e, E)) {
            var y = void 0;
            try {
              if (typeof e[E] != "function") {
                var L = Error((h || "React class") + ": " + c + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              y = e[E](l, E, h, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              y = j;
            }
            y && !(y instanceof Error) && (re(x), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", c, E, typeof y), re(null)), y instanceof Error && !(y.message in je) && (je[y.message] = !0, re(x), m("Failed %s type: %s", c, y.message), re(null));
          }
      }
    }
    var gt = Array.isArray;
    function ue(e) {
      return gt(e);
    }
    function ht(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function vt(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function De(e) {
      if (vt(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), Oe(e);
    }
    var ke = P.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Pe;
    function mt(e) {
      if (q.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (q.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Et(e, l) {
      typeof e.ref == "string" && ke.current;
    }
    function xt(e, l) {
      {
        var c = function() {
          Le || (Le = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function _t(e, l) {
      {
        var c = function() {
          Pe || (Pe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Ct = function(e, l, c, h, x, _, E) {
      var y = {
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
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Rt(e, l, c, h, x) {
      {
        var _, E = {}, y = null, L = null;
        c !== void 0 && (De(c), y = "" + c), bt(l) && (De(l.key), y = "" + l.key), mt(l) && (L = l.ref, Et(l, x));
        for (_ in l)
          q.call(l, _) && !yt.hasOwnProperty(_) && (E[_] = l[_]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (_ in j)
            E[_] === void 0 && (E[_] = j[_]);
        }
        if (y || L) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && xt(E, T), L && _t(E, T);
        }
        return Ct(e, y, L, x, h, ke.current, E);
      }
    }
    var de = P.ReactCurrentOwner, Ae = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var l = e._owner, c = te(e.type, e._source, l ? l.type : null);
        Ae.setExtraStackFrame(c);
      } else
        Ae.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ie() {
      {
        if (de.current) {
          var e = $(de.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wt(e) {
      return "";
    }
    var Ne = {};
    function St(e) {
      {
        var l = Ie();
        if (!l) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function Ge(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = St(l);
        if (Ne[c])
          return;
        Ne[c] = !0;
        var h = "";
        e && e._owner && e._owner !== de.current && (h = " It was passed a child from " + $(e._owner.type) + "."), B(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, h), B(null);
      }
    }
    function Fe(e, l) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var c = 0; c < e.length; c++) {
            var h = e[c];
            pe(h) && Ge(h, l);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = D(e);
          if (typeof x == "function" && x !== e.entries)
            for (var _ = x.call(e), E; !(E = _.next()).done; )
              pe(E.value) && Ge(E.value, l);
        }
      }
    }
    function jt(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === C))
          c = l.propTypes;
        else
          return;
        if (c) {
          var h = $(l);
          pt(c, e.props, "prop", h, e);
        } else if (l.PropTypes !== void 0 && !fe) {
          fe = !0;
          var x = $(l);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var l = Object.keys(e.props), c = 0; c < l.length; c++) {
          var h = l[c];
          if (h !== "children" && h !== "key") {
            B(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var ze = {};
    function Ke(e, l, c, h, x, _) {
      {
        var E = U(e);
        if (!E) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = wt();
          L ? y += L : y += Ie();
          var j;
          e === null ? j = "null" : ue(e) ? j = "array" : e !== void 0 && e.$$typeof === n ? (j = "<" + ($(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, y);
        }
        var T = Rt(e, l, c, x, _);
        if (T == null)
          return T;
        if (E) {
          var I = l.children;
          if (I !== void 0)
            if (h)
              if (ue(I)) {
                for (var Y = 0; Y < I.length; Y++)
                  Fe(I[Y], e);
                Object.freeze && Object.freeze(I);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(I, e);
        }
        if (q.call(l, "key")) {
          var W = $(e), A = Object.keys(l).filter(function(At) {
            return At !== "key";
          }), ge = A.length > 0 ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[W + ge]) {
            var Pt = A.length > 0 ? "{" + A.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, W, Pt, W), ze[W + ge] = !0;
          }
        }
        return e === r ? Tt(T) : jt(T), T;
      }
    }
    function Ot(e, l, c) {
      return Ke(e, l, c, !0);
    }
    function Dt(e, l, c) {
      return Ke(e, l, c, !1);
    }
    var kt = Dt, Lt = Ot;
    Z.Fragment = r, Z.jsx = kt, Z.jsxs = Lt;
  }()), Z;
}
var Ve;
function Ft() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? ne.exports = Nt() : ne.exports = Gt()), ne.exports;
}
var i = Ft(), qe = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, We = N.createContext && /* @__PURE__ */ N.createContext(qe), zt = ["attr", "size", "title"];
function Kt(t, n) {
  if (t == null) return {};
  var a = Mt(t, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (o = 0; o < d.length; o++)
      r = d[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
function Mt(t, n) {
  if (t == null) return {};
  var a = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (n.indexOf(r) >= 0) continue;
      a[r] = t[r];
    }
  return a;
}
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
  }, ae.apply(this, arguments);
}
function Be(t, n) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function le(t) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Be(Object(a), !0).forEach(function(r) {
      $t(t, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Be(Object(a)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return t;
}
function $t(t, n, a) {
  return n = Vt(n), n in t ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = a, t;
}
function Vt(t) {
  var n = Wt(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Wt(t, n) {
  if (typeof t != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(t, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Xe(t) {
  return t && t.map((n, a) => /* @__PURE__ */ N.createElement(n.tag, le({
    key: a
  }, n.attr), Xe(n.child)));
}
function G(t) {
  return (n) => /* @__PURE__ */ N.createElement(Bt, ae({
    attr: le({}, t.attr)
  }, n), Xe(t.child));
}
function Bt(t) {
  var n = (a) => {
    var {
      attr: r,
      size: o,
      title: d
    } = t, g = Kt(t, zt), s = o || a.size || "1em", u;
    return a.className && (u = a.className), t.className && (u = (u ? u + " " : "") + t.className), /* @__PURE__ */ N.createElement("svg", ae({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, r, g, {
      className: u,
      style: le(le({
        color: t.color || a.color
      }, a.style), t.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ N.createElement("title", null, d), t.children);
  };
  return We !== void 0 ? /* @__PURE__ */ N.createElement(We.Consumer, null, (a) => n(a)) : n(qe);
}
function Ze(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(t);
}
function Yt(t) {
  return G({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(t);
}
function Ht(t) {
  return G({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(t);
}
function Qe(t) {
  return G({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(t);
}
function et(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(t);
}
function tt(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(t);
}
function rt(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(t);
}
function nt(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(t);
}
function he(t) {
  return G({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(t);
}
function at(t) {
  return G({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(t);
}
const Ut = ({
  menuPosition: t,
  options: n,
  onClose: a,
  reducer: r
}) => {
  var g, s, u, R, v, C, O;
  const o = He(null);
  if (Ue(() => {
    const f = (p) => {
      o.current && !o.current.contains(p.target) && a();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [a]), !t || !n) return null;
  const d = [
    n.sortable && t.column.sortable && {
      label: ((g = n.contextMenuLabels) == null ? void 0 : g.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ i.jsx(nt, { style: { color: "#2563EB", fontSize: "14px" } }),
      // ✅ text-blue-600
      onClick: () => r == null ? void 0 : r.setSort(t.column.key, "asc")
    },
    n.sortable && t.column.sortable && {
      label: ((s = n.contextMenuLabels) == null ? void 0 : s.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ i.jsx(rt, { style: { color: "#2563EB", fontSize: "14px" } }),
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
      label: ((R = n.contextMenuLabels) == null ? void 0 : R.group) || "그룹화",
      icon: /* @__PURE__ */ i.jsx(tt, { style: { color: "#16A34A", fontSize: "14px" } }),
      // ✅ text-green-600
      onClick: () => r == null ? void 0 : r.setGroup(t.column.key)
    },
    n.grouping && {
      label: ((v = n.contextMenuLabels) == null ? void 0 : v.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ i.jsx(he, { style: { color: "#DC2626", fontSize: "14px" } }),
      // ✅ text-red-600
      onClick: () => r == null ? void 0 : r.removeGroup(t.column.key)
    },
    (n.grouping || n.sortable) && n.filterable && t.column.filterable && { divider: !0 },
    n.filterable && t.column.filterable && {
      label: ((C = n.contextMenuLabels) == null ? void 0 : C.filter) || "필터",
      icon: /* @__PURE__ */ i.jsx(et, { style: { color: "#D97706", fontSize: "14px" } }),
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
      className: "nh-context-menu",
      style: {
        top: `${t.y}px`,
        left: `${t.x}px`
      },
      children: /* @__PURE__ */ i.jsx("ul", { className: "nh-context-menu-list", children: d.map(
        (f, p) => f.divider ? /* @__PURE__ */ i.jsx("hr", { className: "nh-context-divider" }, `divider-${p}`) : /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: `nh-context-item ${f.disabled ? "nh-context-disabled" : ""}`,
            onClick: () => {
              !f.disabled && f.onClick && f.onClick(), a();
            },
            children: [
              f.icon && /* @__PURE__ */ i.jsx("span", { className: "nh-context-icon", children: f.icon }),
              /* @__PURE__ */ i.jsx("span", { children: f.label })
            ]
          },
          p
        )
      ) })
    }
  );
}, Jt = ({
  columns: t,
  showRowNumCol: n,
  showRowCheckboxCol: a,
  options: r,
  reducer: o,
  editedRows: d
}) => {
  const [g, s] = Je(null), { filters: u, sortedColumn: R, sortDirection: v, group: C } = o.state, O = (p, w) => {
    p.preventDefault(), r && s({ x: p.clientX, y: p.clientY, column: w });
  }, f = () => s(null);
  return console.log(d), /* @__PURE__ */ i.jsxs("thead", { className: "nh-grid-header", children: [
    /* @__PURE__ */ i.jsxs("tr", { className: "nh-grid-header-row", children: [
      d && Object.keys(d).length > 0 && /* @__PURE__ */ i.jsx("th", { className: "nh-grid-header-cell nh-action-header", children: /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center" }, children: [
        /* @__PURE__ */ i.jsx("button", { className: "nh-btn nh-btn-apply", onClick: o.applyAllChanges, children: /* @__PURE__ */ i.jsx(Ze, {}) }),
        /* @__PURE__ */ i.jsx("button", { className: "nh-btn nh-btn-reset", onClick: o.resetAllChanges, children: /* @__PURE__ */ i.jsx(at, {}) })
      ] }) }),
      n && /* @__PURE__ */ i.jsx("th", { className: "nh-grid-header-cell", children: "No." }),
      a && /* @__PURE__ */ i.jsx("th", { className: "nh-grid-header-cell", children: "✔" }),
      t.map((p) => {
        var w;
        return /* @__PURE__ */ i.jsx(
          "th",
          {
            className: `nh-grid-header-cell ${p.sticky === "left" ? "sticky-left" : ""} ${p.sticky === "right" ? "sticky-right" : ""}`,
            style: { width: p.width ? `${p.width}px` : "auto", textAlign: p.align || "left" },
            title: p.tooltip,
            onContextMenu: (D) => O(D, p),
            children: /* @__PURE__ */ i.jsxs("div", { className: "nh-grid-header-content", children: [
              /* @__PURE__ */ i.jsx("span", { children: p.label }),
              p.sortable && R === p.key && v !== null && (v === "asc" ? /* @__PURE__ */ i.jsx(nt, { style: { color: "#2563EB", fontSize: "14px" } }) : /* @__PURE__ */ i.jsx(rt, { style: { color: "#2563EB", fontSize: "14px" } })),
              ((w = C.column) == null ? void 0 : w.includes(p.key)) && /* @__PURE__ */ i.jsx(tt, { style: { color: "#16A34A", fontSize: "14px" } }),
              (r == null ? void 0 : r.filterable) && u[p.key] !== void 0 && /* @__PURE__ */ i.jsx(et, { style: { color: "#D97706", fontSize: "14px" } })
            ] })
          },
          p.key
        );
      })
    ] }),
    t.some((p) => (r == null ? void 0 : r.filterable) && u[p.key] !== void 0) ? /* @__PURE__ */ i.jsxs("tr", { className: "nh-grid-filter-row", children: [
      n ? /* @__PURE__ */ i.jsx("td", { style: { padding: "8px" }, children: " " }) : null,
      a ? /* @__PURE__ */ i.jsx("td", { style: { padding: "8px" }, children: " " }) : null,
      t.map((p) => /* @__PURE__ */ i.jsx("td", { style: { padding: "8px" }, children: p.filterable && u[p.key] !== void 0 && /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          value: u[p.key] || "",
          onChange: (w) => o.setFilter({ ...u, [p.key]: w.target.value }),
          className: "nh-grid-filter-input",
          placeholder: "필터 입력..."
        }
      ) }, p.key))
    ] }) : null,
    r && /* @__PURE__ */ i.jsx(
      Ut,
      {
        menuPosition: g,
        options: r,
        onClose: f,
        reducer: o
      }
    )
  ] });
}, Ye = (t) => t.__group === !0, lt = (t, n, a) => a ? [...t].sort((r, o) => {
  const d = r[n], g = o[n];
  if (d == null || g == null) return 0;
  if (typeof d == "number" && typeof g == "number")
    return a === "asc" ? d - g : g - d;
  const s = String(d).toLowerCase(), u = String(g).toLowerCase();
  return a === "asc" ? s.localeCompare(u) : u.localeCompare(s);
}) : [...t], qt = (t, n, a) => [...t].sort((r, o) => {
  let d = 0;
  for (let g = 0; g < n.length; g++) {
    const s = n[g], u = a, R = r[s] ?? "", v = o[s] ?? "";
    if (typeof R == "number" && typeof v == "number" ? d = R - v : d = String(R).localeCompare(String(v)), u === "desc" && (d = -d), d !== 0) return d;
  }
  return d;
}), ie = (t, n, a = /* @__PURE__ */ new Set(), r = 0) => {
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
    s.__children = ie(s.__children, n, a, r + 1), d.push(s), a.has(s.__groupKey) && !d.includes(s) && d.push(...s.__children);
  }), d;
}, Xt = (t, n) => t.filter(
  (a) => Object.entries(n).every(([r, o]) => o ? String(a[r]).toLowerCase().includes(o.toLowerCase()) : !0)
), ve = (t, n, a, r) => {
  const o = (n - 1) * a, d = o + a;
  let g = [...t];
  return (r == null ? void 0 : r.group) !== void 0 && (g = qt(
    g,
    r == null ? void 0 : r.group.column,
    (r == null ? void 0 : r.sortDirection) === void 0 ? "asc" : r == null ? void 0 : r.sortDirection
  )), g.slice(o, d);
}, z = (t) => {
  let n = [...t.originalData];
  return Object.keys(t.filters).length > 0 && (n = Xt(n, t.filters)), t.sortedColumn && t.sortDirection && (n = lt(n, t.sortedColumn, t.sortDirection)), n = ve(
    n,
    t.pagenate.currentPage,
    t.pagenate.pageSize,
    t
  ), t.group.column.length > 0 && (n = ie(n, t.group.column, t.group.expanded)), {
    ...t,
    data: n
  };
}, it = (t) => t.map((n, a) => ({
  ...n,
  rowKey: n.rowKey ?? `row-${Date.now()}-${Math.random()}-${a}`
})), Zt = ({
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
  }, R = (f) => {
    if (!s.state.editingCell) return;
    const { rowKey: p, colKey: w } = s.state.editingCell;
    s.setEditingCell(p, w, f);
    const D = s.state.originalData.find((m) => m.rowKey === p);
    (D ? D[w] : void 0) !== f ? s.editCell(p, w, f) : s.removeEditedCell(p, w);
  }, v = (f, p) => {
    if (!s.state.editingCell) return;
    const { rowKey: w, colKey: D } = s.state.editingCell, P = t.findIndex((m) => m.key === D);
    if (f.key === "Enter" && s.clearEditingCell(), f.key === "Tab") {
      f.preventDefault();
      for (let m = P + 1; m < t.length; m++)
        if (t[m].editable !== !1) {
          s.clearEditingCell(), s.setEditingCell(w, t[m].key, p[t[m].key]);
          return;
        }
      s.clearEditingCell();
    }
  }, C = (f, p) => {
    const w = f.__groupKey, D = s.state.group.expanded.has(w);
    let P = 0;
    return /* @__PURE__ */ i.jsxs(N.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        "tr",
        {
          style: {
            backgroundColor: "var(--color-second-hover)",
            cursor: "pointer",
            borderBottom: "2px solid var(--color-second)"
          },
          onClick: () => g(w),
          children: /* @__PURE__ */ i.jsx("td", { className: "nh-table-cell", colSpan: t.length + (n ? 1 : 0) + (a ? 1 : 0), children: /* @__PURE__ */ i.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: `${n ? "50px" : ""}${a ? "50px" : ""}min-content ${t.slice(1).map((m) => m.width ? `${m.width}px` : "auto").join("")}`,
                whiteSpace: "nowrap",
                fontWeight: "bold",
                alignItems: "center"
              },
              children: /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", paddingLeft: `${p * 16}px` }, children: [
                /* @__PURE__ */ i.jsx("span", { style: { marginRight: "4px" }, children: D ? /* @__PURE__ */ i.jsx(Yt, {}) : /* @__PURE__ */ i.jsx(Qe, {}) }),
                /* @__PURE__ */ i.jsxs("span", { children: [
                  w,
                  " (",
                  f.__children.length,
                  ")"
                ] })
              ] })
            }
          ) })
        }
      ),
      D && f.__children.map(
        (m) => Ye(m) ? C(m, p + 1) : O(m, p + 1, ++P)
        // ✅ 그룹 내부 Row Num 증가
      )
    ] }, `group-${w}`);
  }, O = (f, p, w) => {
    const D = (k) => {
      var K, M;
      return ((K = s.state.editingCell) == null ? void 0 : K.rowKey) === f.rowKey && ((M = s.state.editingCell) == null ? void 0 : M.colKey) === k;
    }, P = s.state.editedRows[f.rowKey] !== void 0, m = o && Object.keys(s.state.editedRows).length > 0;
    return /* @__PURE__ */ i.jsxs("tr", { style: { borderBottom: "1px solid var(--color-second-hover)" }, children: [
      m && /* @__PURE__ */ i.jsx("td", { className: "nh-table-cell nh-action-cell", children: P && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("button", { className: "nh-btn nh-btn-apply", onClick: () => s.applyRowChanges(f.rowKey), children: /* @__PURE__ */ i.jsx(Ze, {}) }),
        /* @__PURE__ */ i.jsx("button", { className: "nh-btn nh-btn-reset", onClick: () => s.resetRowChanges(f.rowKey), children: /* @__PURE__ */ i.jsx(at, {}) })
      ] }) }),
      n ? /* @__PURE__ */ i.jsx("td", { className: "nh-table-cell text-center", children: w }) : null,
      a ? /* @__PURE__ */ i.jsx("td", { className: "nh-table-cell text-center", children: /* @__PURE__ */ i.jsx("input", { type: "checkbox", checked: r.has(f), onChange: () => d(f) }) }) : null,
      t.map((k) => {
        var M, H, b, S, F;
        const K = D(k.key) ? (M = s.state.editingCell) == null ? void 0 : M.value : ((H = s.state.editedRows[f.rowKey]) == null ? void 0 : H[k.key]) ?? (k.renderCell ? k.renderCell(f) : f[k.key]);
        return /* @__PURE__ */ i.jsx(
          "td",
          {
            className: "nh-table-cell",
            style: {
              paddingLeft: `${p * 16}px`,
              fontWeight: ((b = s.state.editedRows[f.rowKey]) == null ? void 0 : b[k.key]) !== void 0 ? "bold" : "normal",
              color: ((S = s.state.editedRows[f.rowKey]) == null ? void 0 : S[k.key]) !== void 0 ? "red" : "inherit"
            },
            onDoubleClick: () => o && u(f.rowKey, k.key, K),
            children: D(k.key) ? /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                value: ((F = s.state.editingCell) == null ? void 0 : F.value) ?? "",
                onChange: (U) => R(U.target.value),
                onKeyDown: (U) => v(U, f),
                className: "nh-edit-input"
              }
            ) : K
          },
          k.key
        );
      })
    ] }, f.rowKey);
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx("tbody", { children: s.state.data.map(
    (f, p) => Ye(f) ? C(f, 0) : O(f, 0, p + 1)
  ) }) });
}, Qt = (t, n, a) => {
  const r = it(t);
  return {
    originalData: [...r],
    data: n ? ve(r, 1, a) : r,
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
function er(t, n) {
  switch (n.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...t,
        sortedColumn: n.column,
        sortDirection: n.direction,
        data: n.direction === null ? [...t.originalData] : lt(t.originalData, n.column, n.direction)
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
        data: ie(t.originalData, a)
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
        data: a.length > 0 ? ie(t.originalData, a, r) : [...t.originalData]
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
        data: ve(a, t.pagenate.currentPage, t.pagenate.pageSize, t),
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
function tr(t, n = !1, a = 10) {
  const [r, o] = It(er, Qt(t, n, a));
  return {
    state: r,
    updateGridState: () => {
      o({
        type: "SET_GRID_STATE",
        state: z(r)
      });
    },
    setSort: (b, S) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          sortedColumn: b,
          sortDirection: S
        })
      });
    },
    setFilter: (b) => {
      const S = { ...r.filters, ...b };
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          filters: S
        })
      });
    },
    clearFilter: (b) => {
      const S = { ...r.filters };
      delete S[b], o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          filters: S
        })
      });
    },
    setGroup: (b) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          group: {
            ...r.group,
            column: [...r.group.column, b]
          }
        })
      });
    },
    removeGroup: (b) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          group: {
            ...r.group,
            column: r.group.column.filter((S) => S !== b)
          }
        })
      });
    },
    expandGroup: (b) => {
      const S = new Set(r.group.expanded);
      S.has(b) ? S.delete(b) : S.add(b), o({
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
    toggleRow: (b) => {
      o({ type: "TOGGLE_ROW", row: b });
    },
    setPage: (b) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          pagenate: {
            ...r.pagenate,
            currentPage: b
          }
        })
      });
    },
    setPageSize: (b) => {
      o({
        type: "SET_GRID_STATE",
        state: z({
          ...r,
          pagenate: {
            ...r.pagenate,
            pageSize: b
          }
        })
      });
    },
    editCell: (b, S, F) => {
      o({ type: "EDIT_CELL", payload: { rowKey: b, colKey: S, newValue: F } });
    },
    setEditingCell: (b, S, F) => {
      o({ type: "SET_EDITING_CELL", payload: { rowKey: b, colKey: S, value: F } });
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
    removeEditedCell: (b, S) => {
      o({ type: "REMOVE_EDITED_CELL", payload: { rowKey: b, colKey: S } });
    },
    applyRowChanges: (b) => {
      o({ type: "APPLY_ROW_CHANGES", payload: { rowKey: b } });
    },
    resetRowChanges: (b) => {
      o({ type: "RESET_ROW_CHANGES", payload: { rowKey: b } });
    }
  };
}
const rr = ({
  currentPage: t,
  totalPages: n,
  totalDataCount: a,
  pageSize: r,
  onPageChange: o,
  onPageSizeChange: d
}) => {
  const g = [10, 20, 30, 50, 100], [s, u] = Je(!1), R = He(null);
  return Ue(() => {
    const v = (C) => {
      R.current && !R.current.contains(C.target) && u(!1);
    };
    return s && window.addEventListener("click", v), () => {
      window.removeEventListener("click", v);
    };
  }, [s]), /* @__PURE__ */ i.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        borderTop: "1px solid var(--color-font)",
        backgroundColor: "var(--color-second)"
      },
      children: [
        /* @__PURE__ */ i.jsxs("span", { style: { fontSize: "14px", color: "var(--color-font)" }, children: [
          "Total ",
          /* @__PURE__ */ i.jsx("b", { children: a }),
          " page | Page ",
          t,
          " / ",
          n
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "nh-dropdown-container", children: [
          /* @__PURE__ */ i.jsx("span", { className: "nh-dropdown-label", children: "Page Size:" }),
          /* @__PURE__ */ i.jsxs("div", { className: "nh-dropdown-wrapper", ref: R, children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: (v) => {
                  v.stopPropagation(), u(!s);
                },
                className: "nh-dropdown-button",
                children: r
              }
            ),
            s && /* @__PURE__ */ i.jsx("div", { className: "nh-dropdown-menu", children: g.map((v, C) => /* @__PURE__ */ i.jsx(
              "div",
              {
                onClick: () => {
                  d(v), u(!1);
                },
                className: "nh-dropdown-item",
                children: v
              },
              C
            )) })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "4px" }, children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "nh-button",
              onClick: () => t > 1 && o(t - 1),
              disabled: t === 1,
              children: /* @__PURE__ */ i.jsx(Ht, { size: 14 })
            }
          ),
          Array.from({ length: n }, (v, C) => C + 1).map((v) => /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `nh-button ${v === t ? "nh-button-active" : ""}`,
              onClick: () => o(v),
              children: v
            },
            v
          )),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "nh-button",
              onClick: () => t < n && o(t + 1),
              disabled: t === n,
              children: /* @__PURE__ */ i.jsx(Qe, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, ar = ({
  columns: t,
  data: n,
  options: a,
  showRowNumCol: r = !0,
  showRowCheckboxCol: o = !1,
  pagingable: d = !1,
  pagination: g,
  isCellEditable: s = !1
}) => {
  const u = tr(it(n), d, g == null ? void 0 : g.pageSize), { pagenate: R } = u.state, v = n.length, C = Math.ceil(v / R.pageSize);
  return console.log("Grid.tsx - editedRows:", u.state.editedRows), /* @__PURE__ */ i.jsxs("div", { className: "nh-grid-container", children: [
    /* @__PURE__ */ i.jsxs("table", { className: "nh-grid-table", children: [
      /* @__PURE__ */ i.jsx(
        Jt,
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
        Zt,
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
      rr,
      {
        currentPage: R.currentPage,
        totalPages: C,
        onPageChange: u.setPage,
        totalDataCount: n.length,
        pageSize: u.state.pagenate.pageSize,
        onPageSizeChange: u.setPageSize
      }
    )
  ] });
};
export {
  ar as Grid
};
