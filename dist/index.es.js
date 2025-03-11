import F, { useRef as Mt, useContext as Bn, useMemo as Kn, useDebugValue as cr, createElement as Wn, useEffect as Pr, useState as Ir, useReducer as Yn } from "react";
var qe = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function Un() {
  if (lr) return Me;
  lr = 1;
  var e = F, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, d) {
    var m, h = {}, b = null, x = null;
    d !== void 0 && (b = "" + d), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (m in l) n.call(l, m) && !a.hasOwnProperty(m) && (h[m] = l[m]);
    if (c && c.defaultProps) for (m in l = c.defaultProps, l) h[m] === void 0 && (h[m] = l[m]);
    return { $$typeof: t, type: c, key: b, ref: x, props: h, _owner: o.current };
  }
  return Me.Fragment = r, Me.jsx = s, Me.jsxs = s, Me;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function qn() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = Symbol.iterator, v = "@@iterator";
    function R(i) {
      if (i === null || typeof i != "object")
        return null;
      var u = g && i[g] || i[v];
      return typeof u == "function" ? u : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(i) {
      {
        for (var u = arguments.length, y = new Array(u > 1 ? u - 1 : 0), E = 1; E < u; E++)
          y[E - 1] = arguments[E];
        S("error", i, y);
      }
    }
    function S(i, u, y) {
      {
        var E = C.ReactDebugCurrentFrame, P = E.getStackAddendum();
        P !== "" && (u += "%s", y = y.concat([P]));
        var L = y.map(function(O) {
          return String(O);
        });
        L.unshift("Warning: " + u), Function.prototype.apply.call(console[i], console, L);
      }
    }
    var A = !1, $ = !1, k = !1, f = !1, T = !1, B;
    B = Symbol.for("react.module.reference");
    function Ce(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === a || T || i === o || i === d || i === m || f || i === x || A || $ || k || typeof i == "object" && i !== null && (i.$$typeof === b || i.$$typeof === h || i.$$typeof === s || i.$$typeof === c || i.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === B || i.getModuleId !== void 0));
    }
    function _e(i, u, y) {
      var E = i.displayName;
      if (E)
        return E;
      var P = u.displayName || u.name || "";
      return P !== "" ? y + "(" + P + ")" : y;
    }
    function le(i) {
      return i.displayName || "Context";
    }
    function J(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var u = i;
            return le(u) + ".Consumer";
          case s:
            var y = i;
            return le(y._context) + ".Provider";
          case l:
            return _e(i, i.render, "ForwardRef");
          case h:
            var E = i.displayName || null;
            return E !== null ? E : J(i.type) || "Memo";
          case b: {
            var P = i, L = P._payload, O = P._init;
            try {
              return J(O(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, me = 0, We, Re, Fe, U, ue, de, K;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function ze() {
      {
        if (me === 0) {
          We = console.log, Re = console.info, Fe = console.warn, U = console.error, ue = console.group, de = console.groupCollapsed, K = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        me++;
      }
    }
    function je() {
      {
        if (me--, me === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, i, {
              value: We
            }),
            info: oe({}, i, {
              value: Re
            }),
            warn: oe({}, i, {
              value: Fe
            }),
            error: oe({}, i, {
              value: U
            }),
            group: oe({}, i, {
              value: ue
            }),
            groupCollapsed: oe({}, i, {
              value: de
            }),
            groupEnd: oe({}, i, {
              value: K
            })
          });
        }
        me < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = C.ReactCurrentDispatcher, pe;
    function Z(i, u, y) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (P) {
            var E = P.stack.trim().match(/\n( *(at )?)/);
            pe = E && E[1] || "";
          }
        return `
` + pe + i;
      }
    }
    var Q = !1, fe;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Oe();
    }
    function ee(i, u) {
      if (!i || Q)
        return "";
      {
        var y = fe.get(i);
        if (y !== void 0)
          return y;
      }
      var E;
      Q = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = ie.current, ie.current = null, ze();
      try {
        if (u) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (Y) {
              E = Y;
            }
            Reflect.construct(i, [], O);
          } else {
            try {
              O.call();
            } catch (Y) {
              E = Y;
            }
            i.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            E = Y;
          }
          i();
        }
      } catch (Y) {
        if (Y && E && typeof Y.stack == "string") {
          for (var j = Y.stack.split(`
`), W = E.stack.split(`
`), z = j.length - 1, G = W.length - 1; z >= 1 && G >= 0 && j[z] !== W[G]; )
            G--;
          for (; z >= 1 && G >= 0; z--, G--)
            if (j[z] !== W[G]) {
              if (z !== 1 || G !== 1)
                do
                  if (z--, G--, G < 0 || j[z] !== W[G]) {
                    var q = `
` + j[z].replace(" at new ", " at ");
                    return i.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", i.displayName)), typeof i == "function" && fe.set(i, q), q;
                  }
                while (z >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        Q = !1, ie.current = L, je(), Error.prepareStackTrace = P;
      }
      var De = i ? i.displayName || i.name : "", ye = De ? Z(De) : "";
      return typeof i == "function" && fe.set(i, ye), ye;
    }
    function wn(i, u, y) {
      return ee(i, !1);
    }
    function xn(i) {
      var u = i.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ye(i, u, y) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return ee(i, xn(i));
      if (typeof i == "string")
        return Z(i);
      switch (i) {
        case d:
          return Z("Suspense");
        case m:
          return Z("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            return wn(i.render);
          case h:
            return Ye(i.type, u, y);
          case b: {
            var E = i, P = E._payload, L = E._init;
            try {
              return Ye(L(P), u, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Ge = Object.prototype.hasOwnProperty, Ut = {}, qt = C.ReactDebugCurrentFrame;
    function Ue(i) {
      if (i) {
        var u = i._owner, y = Ye(i.type, i._source, u ? u.type : null);
        qt.setExtraStackFrame(y);
      } else
        qt.setExtraStackFrame(null);
    }
    function En(i, u, y, E, P) {
      {
        var L = Function.call.bind(Ge);
        for (var O in i)
          if (L(i, O)) {
            var j = void 0;
            try {
              if (typeof i[O] != "function") {
                var W = Error((E || "React class") + ": " + y + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              j = i[O](u, O, E, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              j = z;
            }
            j && !(j instanceof Error) && (Ue(P), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", y, O, typeof j), Ue(null)), j instanceof Error && !(j.message in Ut) && (Ut[j.message] = !0, Ue(P), w("Failed %s type: %s", y, j.message), Ue(null));
          }
      }
    }
    var Sn = Array.isArray;
    function wt(i) {
      return Sn(i);
    }
    function Cn(i) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, y = u && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return y;
      }
    }
    function _n(i) {
      try {
        return Xt(i), !1;
      } catch {
        return !0;
      }
    }
    function Xt(i) {
      return "" + i;
    }
    function Jt(i) {
      if (_n(i))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cn(i)), Xt(i);
    }
    var Zt = C.ReactCurrentOwner, Rn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, er;
    function kn(i) {
      if (Ge.call(i, "ref")) {
        var u = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function jn(i) {
      if (Ge.call(i, "key")) {
        var u = Object.getOwnPropertyDescriptor(i, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function On(i, u) {
      typeof i.ref == "string" && Zt.current;
    }
    function Tn(i, u) {
      {
        var y = function() {
          Qt || (Qt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        y.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Dn(i, u) {
      {
        var y = function() {
          er || (er = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        y.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var An = function(i, u, y, E, P, L, O) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: u,
        ref: y,
        props: O,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Pn(i, u, y, E, P) {
      {
        var L, O = {}, j = null, W = null;
        y !== void 0 && (Jt(y), j = "" + y), jn(u) && (Jt(u.key), j = "" + u.key), kn(u) && (W = u.ref, On(u, P));
        for (L in u)
          Ge.call(u, L) && !Rn.hasOwnProperty(L) && (O[L] = u[L]);
        if (i && i.defaultProps) {
          var z = i.defaultProps;
          for (L in z)
            O[L] === void 0 && (O[L] = z[L]);
        }
        if (j || W) {
          var G = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          j && Tn(O, G), W && Dn(O, G);
        }
        return An(i, j, W, P, E, Zt.current, O);
      }
    }
    var xt = C.ReactCurrentOwner, tr = C.ReactDebugCurrentFrame;
    function Te(i) {
      if (i) {
        var u = i._owner, y = Ye(i.type, i._source, u ? u.type : null);
        tr.setExtraStackFrame(y);
      } else
        tr.setExtraStackFrame(null);
    }
    var Et;
    Et = !1;
    function St(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function rr() {
      {
        if (xt.current) {
          var i = J(xt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function In(i) {
      return "";
    }
    var nr = {};
    function $n(i) {
      {
        var u = rr();
        if (!u) {
          var y = typeof i == "string" ? i : i.displayName || i.name;
          y && (u = `

Check the top-level render call using <` + y + ">.");
        }
        return u;
      }
    }
    function or(i, u) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var y = $n(u);
        if (nr[y])
          return;
        nr[y] = !0;
        var E = "";
        i && i._owner && i._owner !== xt.current && (E = " It was passed a child from " + J(i._owner.type) + "."), Te(i), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, E), Te(null);
      }
    }
    function ir(i, u) {
      {
        if (typeof i != "object")
          return;
        if (wt(i))
          for (var y = 0; y < i.length; y++) {
            var E = i[y];
            St(E) && or(E, u);
          }
        else if (St(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var P = R(i);
          if (typeof P == "function" && P !== i.entries)
            for (var L = P.call(i), O; !(O = L.next()).done; )
              St(O.value) && or(O.value, u);
        }
      }
    }
    function Ln(i) {
      {
        var u = i.type;
        if (u == null || typeof u == "string")
          return;
        var y;
        if (typeof u == "function")
          y = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === h))
          y = u.propTypes;
        else
          return;
        if (y) {
          var E = J(u);
          En(y, i.props, "prop", E, i);
        } else if (u.PropTypes !== void 0 && !Et) {
          Et = !0;
          var P = J(u);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nn(i) {
      {
        for (var u = Object.keys(i.props), y = 0; y < u.length; y++) {
          var E = u[y];
          if (E !== "children" && E !== "key") {
            Te(i), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Te(null);
            break;
          }
        }
        i.ref !== null && (Te(i), w("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var ar = {};
    function sr(i, u, y, E, P, L) {
      {
        var O = Ce(i);
        if (!O) {
          var j = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = In();
          W ? j += W : j += rr();
          var z;
          i === null ? z = "null" : wt(i) ? z = "array" : i !== void 0 && i.$$typeof === t ? (z = "<" + (J(i.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : z = typeof i, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, j);
        }
        var G = Pn(i, u, y, P, L);
        if (G == null)
          return G;
        if (O) {
          var q = u.children;
          if (q !== void 0)
            if (E)
              if (wt(q)) {
                for (var De = 0; De < q.length; De++)
                  ir(q[De], i);
                Object.freeze && Object.freeze(q);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(q, i);
        }
        if (Ge.call(u, "key")) {
          var ye = J(i), Y = Object.keys(u).filter(function(Hn) {
            return Hn !== "key";
          }), Ct = Y.length > 0 ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ar[ye + Ct]) {
            var Vn = Y.length > 0 ? "{" + Y.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ct, ye, Vn, ye), ar[ye + Ct] = !0;
          }
        }
        return i === n ? Nn(G) : Ln(G), G;
      }
    }
    function Fn(i, u, y) {
      return sr(i, u, y, !0);
    }
    function zn(i, u, y) {
      return sr(i, u, y, !1);
    }
    var Gn = zn, Mn = Fn;
    Ve.Fragment = n, Ve.jsx = Gn, Ve.jsxs = Mn;
  }()), Ve;
}
var dr;
function Xn() {
  return dr || (dr = 1, process.env.NODE_ENV === "production" ? qe.exports = Un() : qe.exports = qn()), qe.exports;
}
var p = Xn(), H = function() {
  return H = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, H.apply(this, arguments);
};
function xe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Jn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Zn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Qn = /* @__PURE__ */ Jn(
  function(e) {
    return Zn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), N = "-ms-", Be = "-moz-", I = "-webkit-", $r = "comm", ht = "rule", Vt = "decl", eo = "@import", Lr = "@keyframes", to = "@layer", Nr = Math.abs, Ht = String.fromCharCode, Dt = Object.assign;
function ro(e, t) {
  return V(e, 0) ^ 45 ? (((t << 2 ^ V(e, 0)) << 2 ^ V(e, 1)) << 2 ^ V(e, 2)) << 2 ^ V(e, 3) : 0;
}
function Fr(e) {
  return e.trim();
}
function se(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _(e, t, r) {
  return e.replace(t, r);
}
function rt(e, t, r) {
  return e.indexOf(t, r);
}
function V(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pe(e, t, r) {
  return e.slice(t, r);
}
function re(e) {
  return e.length;
}
function zr(e) {
  return e.length;
}
function He(e, t) {
  return t.push(e), e;
}
function no(e, t) {
  return e.map(t).join("");
}
function pr(e, t) {
  return e.filter(function(r) {
    return !se(r, t);
  });
}
var gt = 1, Ie = 1, Gr = 0, X = 0, M = 0, Ne = "";
function mt(e, t, r, n, o, a, s, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: gt, column: Ie, length: s, return: "", siblings: c };
}
function he(e, t) {
  return Dt(mt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ae(e) {
  for (; e.root; )
    e = he(e.root, { children: [e] });
  He(e, e.siblings);
}
function oo() {
  return M;
}
function io() {
  return M = X > 0 ? V(Ne, --X) : 0, Ie--, M === 10 && (Ie = 1, gt--), M;
}
function te() {
  return M = X < Gr ? V(Ne, X++) : 0, Ie++, M === 10 && (Ie = 1, gt++), M;
}
function we() {
  return V(Ne, X);
}
function nt() {
  return X;
}
function yt(e, t) {
  return Pe(Ne, e, t);
}
function At(e) {
  switch (e) {
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
function ao(e) {
  return gt = Ie = 1, Gr = re(Ne = e), X = 0, [];
}
function so(e) {
  return Ne = "", e;
}
function _t(e) {
  return Fr(yt(X - 1, Pt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function co(e) {
  for (; (M = we()) && M < 33; )
    te();
  return At(e) > 2 || At(M) > 3 ? "" : " ";
}
function lo(e, t) {
  for (; --t && te() && !(M < 48 || M > 102 || M > 57 && M < 65 || M > 70 && M < 97); )
    ;
  return yt(e, nt() + (t < 6 && we() == 32 && te() == 32));
}
function Pt(e) {
  for (; te(); )
    switch (M) {
      // ] ) " '
      case e:
        return X;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pt(M);
        break;
      // (
      case 40:
        e === 41 && Pt(e);
        break;
      // \
      case 92:
        te();
        break;
    }
  return X;
}
function uo(e, t) {
  for (; te() && e + M !== 57; )
    if (e + M === 84 && we() === 47)
      break;
  return "/*" + yt(t, X - 1) + "*" + Ht(e === 47 ? e : te());
}
function po(e) {
  for (; !At(we()); )
    te();
  return yt(e, X);
}
function fo(e) {
  return so(ot("", null, null, null, [""], e = ao(e), 0, [0], e));
}
function ot(e, t, r, n, o, a, s, c, l) {
  for (var d = 0, m = 0, h = s, b = 0, x = 0, g = 0, v = 1, R = 1, C = 1, w = 0, S = "", A = o, $ = a, k = n, f = S; R; )
    switch (g = w, w = te()) {
      // (
      case 40:
        if (g != 108 && V(f, h - 1) == 58) {
          rt(f += _(_t(w), "&", "&\f"), "&\f", Nr(d ? c[d - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        f += _t(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        f += co(g);
        break;
      // \
      case 92:
        f += lo(nt() - 1, 7);
        continue;
      // /
      case 47:
        switch (we()) {
          case 42:
          case 47:
            He(ho(uo(te(), nt()), t, r, l), l);
            break;
          default:
            f += "/";
        }
        break;
      // {
      case 123 * v:
        c[d++] = re(f) * C;
      // } ; \0
      case 125 * v:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            R = 0;
          // ;
          case 59 + m:
            C == -1 && (f = _(f, /\f/g, "")), x > 0 && re(f) - h && He(x > 32 ? hr(f + ";", n, r, h - 1, l) : hr(_(f, " ", "") + ";", n, r, h - 2, l), l);
            break;
          // @ ;
          case 59:
            f += ";";
          // { rule/at-rule
          default:
            if (He(k = fr(f, t, r, d, m, o, c, S, A = [], $ = [], h, a), a), w === 123)
              if (m === 0)
                ot(f, t, k, k, A, a, h, c, $);
              else
                switch (b === 99 && V(f, 3) === 110 ? 100 : b) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ot(e, k, k, n && He(fr(e, k, k, 0, 0, o, c, S, o, A = [], h, $), $), o, $, h, c, n ? A : $);
                    break;
                  default:
                    ot(f, k, k, k, [""], $, 0, c, $);
                }
        }
        d = m = x = 0, v = C = 1, S = f = "", h = s;
        break;
      // :
      case 58:
        h = 1 + re(f), x = g;
      default:
        if (v < 1) {
          if (w == 123)
            --v;
          else if (w == 125 && v++ == 0 && io() == 125)
            continue;
        }
        switch (f += Ht(w), w * v) {
          // &
          case 38:
            C = m > 0 ? 1 : (f += "\f", -1);
            break;
          // ,
          case 44:
            c[d++] = (re(f) - 1) * C, C = 1;
            break;
          // @
          case 64:
            we() === 45 && (f += _t(te())), b = we(), m = h = re(S = f += po(nt())), w++;
            break;
          // -
          case 45:
            g === 45 && re(f) == 2 && (v = 0);
        }
    }
  return a;
}
function fr(e, t, r, n, o, a, s, c, l, d, m, h) {
  for (var b = o - 1, x = o === 0 ? a : [""], g = zr(x), v = 0, R = 0, C = 0; v < n; ++v)
    for (var w = 0, S = Pe(e, b + 1, b = Nr(R = s[v])), A = e; w < g; ++w)
      (A = Fr(R > 0 ? x[w] + " " + S : _(S, /&\f/g, x[w]))) && (l[C++] = A);
  return mt(e, t, r, o === 0 ? ht : c, l, d, m, h);
}
function ho(e, t, r, n) {
  return mt(e, t, r, $r, Ht(oo()), Pe(e, 2, -2), 0, n);
}
function hr(e, t, r, n, o) {
  return mt(e, t, r, Vt, Pe(e, 0, n), Pe(e, n + 1, -1), n, o);
}
function Mr(e, t, r) {
  switch (ro(e, t)) {
    // color-adjust
    case 5103:
      return I + "print-" + e + e;
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
      return I + e + e;
    // tab-size
    case 4789:
      return Be + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return I + e + Be + e + N + e + e;
    // writing-mode
    case 5936:
      switch (V(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return I + e + N + _(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return I + e + N + _(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return I + e + N + _(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return I + e + N + e + e;
    // order
    case 6165:
      return I + e + N + "flex-" + e + e;
    // align-items
    case 5187:
      return I + e + _(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + N + "flex-$1$2") + e;
    // align-self
    case 5443:
      return I + e + N + "flex-item-" + _(e, /flex-|-self/g, "") + (se(e, /flex-|baseline/) ? "" : N + "grid-row-" + _(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return I + e + N + "flex-line-pack" + _(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return I + e + N + _(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return I + e + N + _(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return I + "box-" + _(e, "-grow", "") + I + e + N + _(e, "grow", "positive") + e;
    // transition
    case 4554:
      return I + _(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
    // cursor
    case 6187:
      return _(_(_(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return _(e, /(image-set\([^]*)/, I + "$1$`$1");
    // justify-content
    case 4968:
      return _(_(e, /(.+:)(flex-)?(.*)/, I + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + I + e + e;
    // justify-self
    case 4200:
      if (!se(e, /flex-|baseline/)) return N + "grid-column-align" + Pe(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return N + _(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, se(n.props, /grid-\w+-end/);
      }) ? ~rt(e + (r = r[t].value), "span", 0) ? e : N + _(e, "-start", "") + e + N + "grid-row-span:" + (~rt(r, "span", 0) ? se(r, /\d+/) : +se(r, /\d+/) - +se(e, /\d+/)) + ";" : N + _(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return se(n.props, /grid-\w+-start/);
      }) ? e : N + _(_(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _(e, /(.+)-inline(.+)/, I + "$1$2") + e;
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
      if (re(e) - 1 - t > 6)
        switch (V(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (V(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return _(e, /(.+:)(.+)-([^]+)/, "$1" + I + "$2-$3$1" + Be + (V(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~rt(e, "stretch", 0) ? Mr(_(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return _(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, a, s, c, l, d) {
        return N + o + ":" + a + d + (s ? N + o + "-span:" + (c ? l : +l - +a) + d : "") + e;
      });
    // position: sticky
    case 4949:
      if (V(e, t + 6) === 121)
        return _(e, ":", ":" + I) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (V(e, V(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return _(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + I + (V(e, 14) === 45 ? "inline-" : "") + "box$3$1" + I + "$2$3$1" + N + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return _(e, ":", ":" + N) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return _(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function st(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function go(e, t, r, n) {
  switch (e.type) {
    case to:
      if (e.children.length) break;
    case eo:
    case Vt:
      return e.return = e.return || e.value;
    case $r:
      return "";
    case Lr:
      return e.return = e.value + "{" + st(e.children, n) + "}";
    case ht:
      if (!re(e.value = e.props.join(","))) return "";
  }
  return re(r = st(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function mo(e) {
  var t = zr(e);
  return function(r, n, o, a) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, a) || "";
    return s;
  };
}
function yo(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function vo(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Vt:
        e.return = Mr(e.value, e.length, r);
        return;
      case Lr:
        return st([he(e, { value: _(e.value, "@", "@" + I) })], n);
      case ht:
        if (e.length)
          return no(r = e.props, function(o) {
            switch (se(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ae(he(e, { props: [_(o, /:(read-\w+)/, ":" + Be + "$1")] })), Ae(he(e, { props: [o] })), Dt(e, { props: pr(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Ae(he(e, { props: [_(o, /:(plac\w+)/, ":" + I + "input-$1")] })), Ae(he(e, { props: [_(o, /:(plac\w+)/, ":" + Be + "$1")] })), Ae(he(e, { props: [_(o, /:(plac\w+)/, N + "input-$1")] })), Ae(he(e, { props: [o] })), Dt(e, { props: pr(r, n) });
                break;
            }
            return "";
          });
    }
}
var bo = {
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
}, Ee = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Vr = "active", Hr = "data-styled-version", vt = "6.1.15", Bt = `/*!sc*/
`, ct = typeof window < "u" && "HTMLElement" in window, wo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), xo = {}, gr = /invalid hook call/i, Xe = /* @__PURE__ */ new Set(), Br = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        for (var c = [], l = 1; l < arguments.length; l++) c[l - 1] = arguments[l];
        gr.test(s) ? (a = !1, Xe.delete(n)) : o.apply(void 0, xe([s], c, !1));
      }, Mt(), a && !Xe.has(n) && (console.warn(n), Xe.add(n));
    } catch (s) {
      gr.test(s.message) && Xe.delete(n);
    } finally {
      console.error = o;
    }
  }
}, bt = Object.freeze([]), $e = Object.freeze({});
function Kr(e, t, r) {
  return r === void 0 && (r = $e), e.theme !== r.theme && e.theme || t || r.theme;
}
var It = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Eo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, So = /(^-|-$)/g;
function mr(e) {
  return e.replace(Eo, "-").replace(So, "");
}
var Co = /(a)(d)/gi, Je = 52, yr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $t(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Je; t = t / Je | 0) r = yr(t % Je) + r;
  return (yr(t % Je) + r).replace(Co, "$1-$2");
}
var Rt, Wr = 5381, ve = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Yr = function(e) {
  return ve(Wr, e);
};
function Ur(e) {
  return $t(Yr(e) >>> 0);
}
function qr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function kt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Xr = typeof Symbol == "function" && Symbol.for, Jr = Xr ? Symbol.for("react.memo") : 60115, _o = Xr ? Symbol.for("react.forward_ref") : 60112, Ro = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ko = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Zr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, jo = ((Rt = {})[_o] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Rt[Jr] = Zr, Rt);
function vr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Jr ? Zr : "$$typeof" in e ? jo[e.$$typeof] : Ro;
  var t;
}
var Oo = Object.defineProperty, To = Object.getOwnPropertyNames, br = Object.getOwnPropertySymbols, Do = Object.getOwnPropertyDescriptor, Ao = Object.getPrototypeOf, wr = Object.prototype;
function Qr(e, t, r) {
  if (typeof t != "string") {
    if (wr) {
      var n = Ao(t);
      n && n !== wr && Qr(e, n, r);
    }
    var o = To(t);
    br && (o = o.concat(br(t)));
    for (var a = vr(e), s = vr(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in ko || r && r[l] || s && l in s || a && l in a)) {
        var d = Do(t, l);
        try {
          Oo(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function Se(e) {
  return typeof e == "function";
}
function Kt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function be(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Lt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
  return r;
}
function Le(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Nt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Le(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Nt(e[n], t[n]);
  else if (Le(t)) for (var n in t) e[n] = Nt(e[n], t[n]);
  return e;
}
function Wt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Po = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Io() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, a = e.length; o < a; o += 1) n.push(e[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function ce(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Io.apply(void 0, xe([Po[e]], t, !1)).trim());
}
var $o = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, a = o; t >= a; ) if ((a <<= 1) < 0) throw ce(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var s = o; s < a; s++) this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), l = (s = 0, r.length); s < l; s++) this.tag.insertRule(c, r[s]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < o; a++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n, s = o; s < a; s++) r += "".concat(this.tag.getRule(s)).concat(Bt);
    return r;
  }, e;
}(), Lo = 1 << 30, it = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), at = 1, Ze = function(e) {
  if (it.has(e)) return it.get(e);
  for (; lt.has(at); ) at++;
  var t = at++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Lo)) throw ce(16, "".concat(t));
  return it.set(e, t), lt.set(t, e), t;
}, No = function(e, t) {
  at = t + 1, it.set(e, t), lt.set(t, e);
}, Fo = "style[".concat(Ee, "][").concat(Hr, '="').concat(vt, '"]'), zo = new RegExp("^".concat(Ee, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Go = function(e, t, r) {
  for (var n, o = r.split(","), a = 0, s = o.length; a < s; a++) (n = o[a]) && e.registerName(t, n);
}, Mo = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Bt), o = [], a = 0, s = n.length; a < s; a++) {
    var c = n[a].trim();
    if (c) {
      var l = c.match(zo);
      if (l) {
        var d = 0 | parseInt(l[1], 10), m = l[2];
        d !== 0 && (No(m, d), Go(e, m, l[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, xr = function(e) {
  for (var t = document.querySelectorAll(Fo), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(Ee) !== Vr && (Mo(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Vo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var en = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(Ee, "]")));
    return l[l.length - 1];
  }(r), a = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ee, Vr), n.setAttribute(Hr, vt);
  var s = Vo();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, a), n;
}, Ho = function() {
  function e(t) {
    this.element = en(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, a = n.length; o < a; o++) {
        var s = n[o];
        if (s.ownerNode === r) return s;
      }
      throw ce(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Bo = function() {
  function e(t) {
    this.element = en(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Ko = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Er = ct, Wo = { isServer: !ct, useCSSOMInjection: !wo }, ut = function() {
  function e(t, r, n) {
    t === void 0 && (t = $e), r === void 0 && (r = {});
    var o = this;
    this.options = H(H({}, Wo), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && ct && Er && (Er = !1, xr(this)), Wt(this, function() {
      return function(a) {
        for (var s = a.getTag(), c = s.length, l = "", d = function(h) {
          var b = function(C) {
            return lt.get(C);
          }(h);
          if (b === void 0) return "continue";
          var x = a.names.get(b), g = s.getGroup(h);
          if (x === void 0 || !x.size || g.length === 0) return "continue";
          var v = "".concat(Ee, ".g").concat(h, '[id="').concat(b, '"]'), R = "";
          x !== void 0 && x.forEach(function(C) {
            C.length > 0 && (R += "".concat(C, ","));
          }), l += "".concat(g).concat(v, '{content:"').concat(R, '"}').concat(Bt);
        }, m = 0; m < c; m++) d(m);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Ze(t);
  }, e.prototype.rehydrate = function() {
    !this.server && ct && xr(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(H(H({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Ko(o) : n ? new Ho(o) : new Bo(o);
    }(this.options), new $o(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ze(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Ze(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ze(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Yo = /&/g, Uo = /^\s*\/\/.*$/gm;
function tn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = tn(r.children, t)), r;
  });
}
function qo(e) {
  var t, r, n, o = $e, a = o.options, s = a === void 0 ? $e : a, c = o.plugins, l = c === void 0 ? bt : c, d = function(b, x, g) {
    return g.startsWith(r) && g.endsWith(r) && g.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, m = l.slice();
  m.push(function(b) {
    b.type === ht && b.value.includes("&") && (b.props[0] = b.props[0].replace(Yo, r).replace(n, d));
  }), s.prefix && m.push(vo), m.push(go);
  var h = function(b, x, g, v) {
    x === void 0 && (x = ""), g === void 0 && (g = ""), v === void 0 && (v = "&"), t = v, r = x, n = new RegExp("\\".concat(r, "\\b"), "g");
    var R = b.replace(Uo, ""), C = fo(g || x ? "".concat(g, " ").concat(x, " { ").concat(R, " }") : R);
    s.namespace && (C = tn(C, s.namespace));
    var w = [];
    return st(C, mo(m.concat(yo(function(S) {
      return w.push(S);
    })))), w;
  };
  return h.hash = l.length ? l.reduce(function(b, x) {
    return x.name || ce(15), ve(b, x.name);
  }, Wr).toString() : "", h;
}
var Xo = new ut(), Ft = qo(), rn = F.createContext({ shouldForwardProp: void 0, styleSheet: Xo, stylis: Ft });
rn.Consumer;
F.createContext(void 0);
function zt() {
  return Bn(rn);
}
var Sr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, a) {
      a === void 0 && (a = Ft);
      var s = n.name + a.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, a(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Wt(this, function() {
      throw ce(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ft), this.name + t.hash;
  }, e;
}(), Jo = function(e) {
  return e >= "A" && e <= "Z";
};
function Cr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Jo(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var nn = function(e) {
  return e == null || e === !1 || e === "";
}, on = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var a = e[o];
    e.hasOwnProperty(o) && !nn(a) && (Array.isArray(a) && a.isCss || Se(a) ? n.push("".concat(Cr(o), ":"), a, ";") : Le(a) ? n.push.apply(n, xe(xe(["".concat(o, " {")], on(a), !1), ["}"], !1)) : n.push("".concat(Cr(o), ": ").concat((t = o, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in bo || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ge(e, t, r, n) {
  if (nn(e)) return [];
  if (Kt(e)) return [".".concat(e.styledComponentId)];
  if (Se(e)) {
    if (!Se(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Sr || Le(o) || o === null || console.error("".concat(qr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ge(o, t, r, n);
  }
  var a;
  return e instanceof Sr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Le(e) ? on(e) : Array.isArray(e) ? Array.prototype.concat.apply(bt, e.map(function(s) {
    return ge(s, t, r, n);
  })) : [e.toString()];
}
function an(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Se(r) && !Kt(r)) return !1;
  }
  return !0;
}
var Zo = Yr(vt), Qo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && an(t), this.componentId = r, this.baseHash = ve(Zo, r), this.baseStyle = n, ut.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = be(o, this.staticRulesId);
    else {
      var a = Lt(ge(this.rules, t, r, n)), s = $t(ve(this.baseHash, a) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var c = n(a, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, c);
      }
      o = be(o, s), this.staticRulesId = s;
    }
    else {
      for (var l = ve(this.baseHash, n.hash), d = "", m = 0; m < this.rules.length; m++) {
        var h = this.rules[m];
        if (typeof h == "string") d += h, process.env.NODE_ENV !== "production" && (l = ve(l, h));
        else if (h) {
          var b = Lt(ge(h, t, r, n));
          l = ve(l, b + m), d += b;
        }
      }
      if (d) {
        var x = $t(l >>> 0);
        r.hasNameForId(this.componentId, x) || r.insertRules(this.componentId, x, n(d, ".".concat(x), void 0, this.componentId)), o = be(o, x);
      }
    }
    return o;
  }, e;
}(), Ke = F.createContext(void 0);
Ke.Consumer;
function ei(e) {
  var t = F.useContext(Ke), r = Kn(function() {
    return function(n, o) {
      if (!n) throw ce(14);
      if (Se(n)) {
        var a = n(o);
        if (process.env.NODE_ENV !== "production" && (a === null || Array.isArray(a) || typeof a != "object")) throw ce(7);
        return a;
      }
      if (Array.isArray(n) || typeof n != "object") throw ce(8);
      return o ? H(H({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? F.createElement(Ke.Provider, { value: r }, e.children) : null;
}
var jt = {}, _r = /* @__PURE__ */ new Set();
function ti(e, t, r) {
  var n = Kt(e), o = e, a = !kt(e), s = t.attrs, c = s === void 0 ? bt : s, l = t.componentId, d = l === void 0 ? function(A, $) {
    var k = typeof A != "string" ? "sc" : mr(A);
    jt[k] = (jt[k] || 0) + 1;
    var f = "".concat(k, "-").concat(Ur(vt + k + jt[k]));
    return $ ? "".concat($, "-").concat(f) : f;
  }(t.displayName, t.parentComponentId) : l, m = t.displayName, h = m === void 0 ? function(A) {
    return kt(A) ? "styled.".concat(A) : "Styled(".concat(qr(A), ")");
  }(e) : m, b = t.displayName && t.componentId ? "".concat(mr(t.displayName), "-").concat(t.componentId) : t.componentId || d, x = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, g = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var R = t.shouldForwardProp;
      g = function(A, $) {
        return v(A, $) && R(A, $);
      };
    } else g = v;
  }
  var C = new Qo(r, b, n ? o.componentStyle : void 0);
  function w(A, $) {
    return function(k, f, T) {
      var B = k.attrs, Ce = k.componentStyle, _e = k.defaultProps, le = k.foldedComponentIds, J = k.styledComponentId, oe = k.target, me = F.useContext(Ke), We = zt(), Re = k.shouldForwardProp || We.shouldForwardProp;
      process.env.NODE_ENV !== "production" && cr(J);
      var Fe = Kr(f, me, _e) || $e, U = function(je, ie, pe) {
        for (var Z, Q = H(H({}, ie), { className: void 0, theme: pe }), fe = 0; fe < je.length; fe += 1) {
          var Oe = Se(Z = je[fe]) ? Z(Q) : Z;
          for (var ee in Oe) Q[ee] = ee === "className" ? be(Q[ee], Oe[ee]) : ee === "style" ? H(H({}, Q[ee]), Oe[ee]) : Oe[ee];
        }
        return ie.className && (Q.className = be(Q.className, ie.className)), Q;
      }(B, f, Fe), ue = U.as || oe, de = {};
      for (var K in U) U[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && U.theme === Fe || (K === "forwardedAs" ? de.as = U.forwardedAs : Re && !Re(K, ue) || (de[K] = U[K], Re || process.env.NODE_ENV !== "development" || Qn(K) || _r.has(K) || !It.has(ue) || (_r.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ke = function(je, ie) {
        var pe = zt(), Z = je.generateAndInjectStyles(ie, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && cr(Z), Z;
      }(Ce, U);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(ke);
      var ze = be(le, J);
      return ke && (ze += " " + ke), U.className && (ze += " " + U.className), de[kt(ue) && !It.has(ue) ? "class" : "className"] = ze, T && (de.ref = T), Wn(ue, de);
    }(S, A, $);
  }
  w.displayName = h;
  var S = F.forwardRef(w);
  return S.attrs = x, S.componentStyle = C, S.displayName = h, S.shouldForwardProp = g, S.foldedComponentIds = n ? be(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = b, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = n ? function($) {
      for (var k = [], f = 1; f < arguments.length; f++) k[f - 1] = arguments[f];
      for (var T = 0, B = k; T < B.length; T++) Nt($, B[T], !0);
      return $;
    }({}, o.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (Br(h, b), S.warnTooManyClasses = /* @__PURE__ */ function(A, $) {
    var k = {}, f = !1;
    return function(T) {
      if (!f && (k[T] = !0, Object.keys(k).length >= 200)) {
        var B = $ ? ' with the id of "'.concat($, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, k = {};
      }
    };
  }(h, b)), Wt(S, function() {
    return ".".concat(S.styledComponentId);
  }), a && Qr(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function Rr(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var kr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function sn(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Se(e) || Le(e)) return kr(ge(Rr(bt, xe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ge(n) : kr(ge(Rr(n, t)));
}
function Gt(e, t, r) {
  if (r === void 0 && (r = $e), !t) throw ce(1, t);
  var n = function(o) {
    for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
    return e(t, r, sn.apply(void 0, xe([o], a, !1)));
  };
  return n.attrs = function(o) {
    return Gt(e, t, H(H({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Gt(e, t, H(H({}, r), o));
  }, n;
}
var cn = function(e) {
  return Gt(ti, e);
}, D = cn;
It.forEach(function(e) {
  D[e] = cn(e);
});
var ri = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = an(t), ut.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, o) {
    var a = o(Lt(ge(this.rules, r, n, o)), ""), s = this.componentId + t;
    n.insertRules(s, s, a);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, o) {
    t > 2 && ut.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, o);
  }, e;
}();
function ni(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = sn.apply(void 0, xe([e], t, !1)), o = "sc-global-".concat(Ur(JSON.stringify(n))), a = new ri(n, o);
  process.env.NODE_ENV !== "production" && Br(o);
  var s = function(l) {
    var d = zt(), m = F.useContext(Ke), h = F.useRef(d.styleSheet.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && F.Children.count(l.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(b) {
      return typeof b == "string" && b.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.styleSheet.server && c(h, l, d.styleSheet, m, d.stylis), F.useLayoutEffect(function() {
      if (!d.styleSheet.server) return c(h, l, d.styleSheet, m, d.stylis), function() {
        return a.removeStyles(h, d.styleSheet);
      };
    }, [h, l, d.styleSheet, m, d.stylis]), null;
  };
  function c(l, d, m, h, b) {
    if (a.isStatic) a.renderStyles(l, xo, m, b);
    else {
      var x = H(H({}, d), { theme: Kr(d, h, s.defaultProps) });
      a.renderStyles(l, x, m, b);
    }
  }
  return F.memo(s);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qe = "__sc-".concat(Ee, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Qe] || (window[Qe] = 0), window[Qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qe] += 1);
var ln = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, jr = F.createContext && /* @__PURE__ */ F.createContext(ln), oi = ["attr", "size", "title"];
function ii(e, t) {
  if (e == null) return {};
  var r = ai(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ai(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dt.apply(this, arguments);
}
function Or(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Or(Object(r), !0).forEach(function(n) {
      si(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Or(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function si(e, t, r) {
  return t = ci(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ci(e) {
  var t = li(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function li(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function un(e) {
  return e && e.map((t, r) => /* @__PURE__ */ F.createElement(t.tag, pt({
    key: r
  }, t.attr), un(t.child)));
}
function ne(e) {
  return (t) => /* @__PURE__ */ F.createElement(ui, dt({
    attr: pt({}, e.attr)
  }, t), un(e.child));
}
function ui(e) {
  var t = (r) => {
    var {
      attr: n,
      size: o,
      title: a
    } = e, s = ii(e, oi), c = o || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ F.createElement("svg", dt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, s, {
      className: l,
      style: pt(pt({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ F.createElement("title", null, a), e.children);
  };
  return jr !== void 0 ? /* @__PURE__ */ F.createElement(jr.Consumer, null, (r) => t(r)) : t(ln);
}
function dn(e) {
  return ne({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(e);
}
function di(e) {
  return ne({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(e);
}
function pi(e) {
  return ne({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(e);
}
function pn(e) {
  return ne({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function fn(e) {
  return ne({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(e);
}
function hn(e) {
  return ne({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" }, child: [] }] })(e);
}
function gn(e) {
  return ne({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function mn(e) {
  return ne({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function Ot(e) {
  return ne({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
function yn(e) {
  return ne({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z" }, child: [] }] })(e);
}
const fi = D.div`
  position: fixed;
  z-index: 9999;
  width: 192px;
  border: 1px solid ${(e) => e.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(e) => e.theme.colors.prime};
  color: ${(e) => e.theme.colors.font};
  transform: translate(0, 5px);
`, hi = D.ul`
  font-size: 14px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
`, gi = D.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${(e) => e.disabled ? "not-allowed" : "pointer"};
  opacity: ${(e) => e.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${(e) => e.disabled ? "inherit" : e.theme.colors.primeHover};
  }
`, mi = D.hr`
  border-top: 1px solid ${(e) => e.theme.colors.second};
  margin: 4px 0;
`, yi = D.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`, vi = ({
  menuPosition: e,
  options: t,
  onClose: r,
  reducer: n,
  style: o
}) => {
  var c, l, d, m, h, b, x;
  const a = Mt(null);
  if (Pr(() => {
    const g = (v) => {
      a.current && !a.current.contains(v.target) && r();
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [r]), !e || !t) return null;
  const s = [
    t.sortable && e.column.sortable && {
      label: ((c = t.contextMenuLabels) == null ? void 0 : c.sortAsc) || "오름차순 정렬",
      icon: /* @__PURE__ */ p.jsx(mn, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.setSort(e.column.key, "asc")
    },
    t.sortable && e.column.sortable && {
      label: ((l = t.contextMenuLabels) == null ? void 0 : l.sortDesc) || "내림차순 정렬",
      icon: /* @__PURE__ */ p.jsx(gn, { style: { color: "#2563EB", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.setSort(e.column.key, "desc")
    },
    t.sortable && e.column.sortable && {
      label: ((d = t.contextMenuLabels) == null ? void 0 : d.clearSort) || "정렬 해제",
      icon: /* @__PURE__ */ p.jsx(Ot, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.setSort(e.column.key, null)
    },
    t.sortable && e.column.sortable && t.grouping && { divider: !0 },
    t.grouping && {
      label: ((m = t.contextMenuLabels) == null ? void 0 : m.group) || "그룹화",
      icon: /* @__PURE__ */ p.jsx(hn, { style: { color: "#16A34A", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.setGroup(e.column.key)
    },
    t.grouping && {
      label: ((h = t.contextMenuLabels) == null ? void 0 : h.ungroup) || "그룹 해제",
      icon: /* @__PURE__ */ p.jsx(Ot, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.removeGroup(e.column.key)
    },
    (t.grouping || t.sortable) && t.filterable && e.column.filterable && { divider: !0 },
    t.filterable && e.column.filterable && {
      label: ((b = t.contextMenuLabels) == null ? void 0 : b.filter) || "필터",
      icon: /* @__PURE__ */ p.jsx(fn, { style: { color: "#D97706", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.setFilter({ [e.column.key]: "" })
    },
    t.filterable && e.column.filterable && {
      label: ((x = t.contextMenuLabels) == null ? void 0 : x.clearFilter) || "필터 해제",
      icon: /* @__PURE__ */ p.jsx(Ot, { style: { color: "#DC2626", fontSize: "14px" } }),
      onClick: () => n == null ? void 0 : n.clearFilter(e.column.key)
    }
  ].filter(Boolean);
  return /* @__PURE__ */ p.jsx(fi, { ref: a, style: { ...o, top: `${e.y}px`, left: `${e.x}px` }, children: /* @__PURE__ */ p.jsx(hi, { children: s.map(
    (g, v) => g.divider ? /* @__PURE__ */ p.jsx(mi, {}, `divider-${v}`) : /* @__PURE__ */ p.jsxs(
      gi,
      {
        disabled: g.disabled,
        onClick: () => {
          !g.disabled && g.onClick && g.onClick(), r();
        },
        children: [
          g.icon && /* @__PURE__ */ p.jsx(yi, { children: g.icon }),
          /* @__PURE__ */ p.jsx("span", { children: g.label })
        ]
      },
      v
    )
  ) }) });
}, bi = D.thead`
  background-color: ${(e) => e.theme.colors.prime};
  color: ${(e) => e.theme.colors.font};
`, wi = D.tr`
  background-color: ${(e) => e.theme.colors.second};
  color: ${(e) => e.theme.colors.font};
  border-bottom: 2px solid ${(e) => e.theme.colors.font};
`, et = D.th`
  position: ${(e) => e.sticky ? "sticky" : "relative"};
  ${(e) => e.sticky === "left" && `left: 0; background-color: ${e.theme.colors.prime};`}
  ${(e) => e.sticky === "right" && `right: 0; background-color: ${e.theme.colors.prime};`}
  text-align: left;
  padding: 5px;
  width: ${(e) => e.width ? `${e.width}px` : "auto"};
  min-width: ${(e) => e.width ? `${e.width}px` : "50px"};
  border-right: 1px solid ${(e) => e.theme.colors.primeHover};
  background-color: ${(e) => e.theme.colors.second};
  font-weight: bold;
`, xi = D.tr`
  background-color: ${(e) => e.theme.colors.primeHover};
  border-bottom: 1px solid ${(e) => e.theme.colors.font};
`, Ei = D.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${(e) => e.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`, Si = D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`, Tr = D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  background-color: ${(e) => e.apply ? e.theme.colors.fourth : e.theme.colors.third};
  color: white;

  &:hover {
    background-color: ${(e) => e.apply ? e.theme.colors.fourthHover : e.theme.colors.thirdHover};
  }
`, Ci = ({
  columns: e,
  showRowNumCol: t,
  showRowCheckboxCol: r,
  options: n,
  reducer: o,
  editedRows: a,
  style: s
}) => {
  const [c, l] = Ir(null), { filters: d, sortedColumn: m, sortDirection: h, group: b } = o.state, x = (v, R) => {
    v.preventDefault(), n && l({ x: v.clientX, y: v.clientY, column: R });
  }, g = () => l(null);
  return /* @__PURE__ */ p.jsxs(bi, { style: s, children: [
    /* @__PURE__ */ p.jsxs(wi, { children: [
      a && Object.keys(a).length > 0 && /* @__PURE__ */ p.jsx(et, { width: 40, children: /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }, children: [
        /* @__PURE__ */ p.jsx(Tr, { apply: !0, onClick: o.applyAllChanges, children: /* @__PURE__ */ p.jsx(dn, {}) }),
        /* @__PURE__ */ p.jsx(Tr, { onClick: o.resetAllChanges, children: /* @__PURE__ */ p.jsx(yn, {}) })
      ] }) }),
      t && /* @__PURE__ */ p.jsx(et, { width: 40, children: "No." }),
      r && /* @__PURE__ */ p.jsx(et, { width: 40, children: "✔" }),
      e.map((v) => {
        var R;
        return /* @__PURE__ */ p.jsx(et, { width: v.width, sticky: v.sticky, onContextMenu: (C) => x(C, v), children: /* @__PURE__ */ p.jsxs(Si, { children: [
          /* @__PURE__ */ p.jsx("span", { children: v.label }),
          v.sortable && m === v.key && h !== null && (h === "asc" ? /* @__PURE__ */ p.jsx(mn, { style: { color: "#2563EB", fontSize: "10px" } }) : /* @__PURE__ */ p.jsx(gn, { style: { color: "#2563EB", fontSize: "10px" } })),
          ((R = b.column) == null ? void 0 : R.includes(v.key)) && /* @__PURE__ */ p.jsx(hn, { style: { color: "#16A34A", fontSize: "10px" } }),
          (n == null ? void 0 : n.filterable) && d[v.key] !== void 0 && /* @__PURE__ */ p.jsx(fn, { style: { color: "#D97706", fontSize: "10px" } })
        ] }) }, v.key);
      })
    ] }),
    e.some((v) => (n == null ? void 0 : n.filterable) && d[v.key] !== void 0) && /* @__PURE__ */ p.jsxs(xi, { children: [
      t && /* @__PURE__ */ p.jsx("td", { style: { padding: "8px" }, children: " " }),
      r && /* @__PURE__ */ p.jsx("td", { style: { padding: "8px" }, children: " " }),
      e.map((v) => /* @__PURE__ */ p.jsx("td", { style: { padding: "8px" }, children: v.filterable && d[v.key] !== void 0 && /* @__PURE__ */ p.jsx(
        Ei,
        {
          type: "text",
          value: d[v.key] || "",
          onChange: (R) => o.setFilter({ ...d, [v.key]: R.target.value }),
          placeholder: "필터 입력..."
        }
      ) }, v.key))
    ] }),
    n && /* @__PURE__ */ p.jsx(vi, { menuPosition: c, options: n, onClose: g, reducer: o })
  ] });
}, Dr = (e) => e.__group === !0, vn = (e, t, r) => r ? [...e].sort((n, o) => {
  const a = n[t], s = o[t];
  if (a == null || s == null) return 0;
  if (typeof a == "number" && typeof s == "number")
    return r === "asc" ? a - s : s - a;
  const c = String(a).toLowerCase(), l = String(s).toLowerCase();
  return r === "asc" ? c.localeCompare(l) : l.localeCompare(c);
}) : [...e], _i = (e, t, r) => [...e].sort((n, o) => {
  let a = 0;
  for (let s = 0; s < t.length; s++) {
    const c = t[s], l = r, d = n[c] ?? "", m = o[c] ?? "";
    if (typeof d == "number" && typeof m == "number" ? a = d - m : a = String(d).localeCompare(String(m)), l === "desc" && (a = -a), a !== 0) return a;
  }
  return a;
}), ft = (e, t, r = /* @__PURE__ */ new Set(), n = 0) => {
  if (t.length === n) return e;
  const o = t[n], a = [], s = /* @__PURE__ */ new Map();
  return e.forEach((c) => {
    const l = String(c[o]);
    s.has(l) || s.set(l, {
      __group: !0,
      __groupKey: l,
      __children: [],
      __groupLevel: n
    }), s.get(l).__children.push(c);
  }), s.forEach((c) => {
    c.__children = ft(c.__children, t, r, n + 1), a.push(c), r.has(c.__groupKey) && !a.includes(c) && a.push(...c.__children);
  }), a;
}, Ri = (e, t) => e.filter(
  (r) => Object.entries(t).every(([n, o]) => o ? String(r[n]).toLowerCase().includes(o.toLowerCase()) : !0)
), Yt = (e, t, r, n) => {
  const o = (t - 1) * r, a = o + r;
  let s = [...e];
  return (n == null ? void 0 : n.group) !== void 0 && (s = _i(
    s,
    n == null ? void 0 : n.group.column,
    (n == null ? void 0 : n.sortDirection) === void 0 ? "asc" : n == null ? void 0 : n.sortDirection
  )), s.slice(o, a);
}, ae = (e) => {
  let t = [...e.originalData];
  return Object.keys(e.filters).length > 0 && (t = Ri(t, e.filters)), e.sortedColumn && e.sortDirection && (t = vn(t, e.sortedColumn, e.sortDirection)), e.pagingable && (t = Yt(
    t,
    e.pagenate.currentPage,
    e.pagenate.pageSize,
    e
  )), e.group.column.length > 0 && (t = ft(t, e.group.column, e.group.expanded)), {
    ...e,
    data: t
  };
}, bn = (e) => e.map((t, r) => ({
  ...t,
  rowKey: t.rowKey ?? `row-${Date.now()}-${Math.random()}-${r}`
})), ki = D.tbody``, ji = D.tr`
  height: 80%;
  border-bottom: 1px solid ${(e) => e.theme.colors.secondHover};
`, tt = D.td`
  padding: 5px;
  border-bottom: 1px solid ${(e) => e.theme.colors.secondHover};
  font-weight: ${(e) => e.$isEdited ? "bold" : "normal"};
  color: ${(e) => e.$isEdited ? e.theme.colors.third : "inherit"};
`, Oi = D.input`
  width: 100%;
  padding: 4px;
  border: 1px solid ${(e) => e.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`, Ti = D.tr`
  background-color: ${(e) => e.theme.colors.secondHover};
  cursor: pointer;
  border-bottom: 2px solid ${(e) => e.theme.colors.second};
`, Di = D.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  white-space: nowrap;
  padding: 8px;
  gap: 8px;
`, Ai = D.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`, Ar = D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  background-color: ${(e) => e.apply ? e.theme.colors.fourth : e.theme.colors.third};
  color: white;

  &:hover {
    background-color: ${(e) => e.apply ? e.theme.colors.fourthHover : e.theme.colors.thirdHover};
  }
`, Pi = ({
  columns: e,
  showRowNumCol: t,
  showRowCheckboxCol: r,
  selectedRows: n,
  isCellEditable: o,
  onToggleRow: a,
  onToggleGroupExpand: s,
  reducer: c,
  style: l
}) => {
  const d = (g, v, R) => {
    c.setEditingCell(g, v, R);
  }, m = (g) => {
    if (!c.state.editingCell) return;
    const { rowKey: v, colKey: R } = c.state.editingCell;
    c.setEditingCell(v, R, g);
    const C = c.state.originalData.find((S) => S.rowKey === v);
    (C ? C[R] : void 0) !== g ? c.editCell(v, R, g) : c.removeEditedCell(v, R);
  }, h = (g, v) => {
    if (!c.state.editingCell) return;
    const { rowKey: R, colKey: C } = c.state.editingCell, w = e.findIndex((S) => S.key === C);
    if (g.key === "Enter" && c.clearEditingCell(), g.key === "Tab") {
      g.preventDefault();
      for (let S = w + 1; S < e.length; S++)
        if (e[S].editable !== !1) {
          c.clearEditingCell(), c.setEditingCell(R, e[S].key, v[e[S].key]);
          return;
        }
      c.clearEditingCell();
    }
  }, b = (g, v) => {
    const R = g.__groupKey, C = c.state.group.expanded.has(R);
    let w = 0;
    return /* @__PURE__ */ p.jsxs(F.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Ti, { onClick: () => s(R), children: /* @__PURE__ */ p.jsx(tt, { colSpan: e.length + (t ? 1 : 0) + (r ? 1 : 0), children: /* @__PURE__ */ p.jsxs(Di, { style: { paddingLeft: `${v * 16}px` }, children: [
        /* @__PURE__ */ p.jsx("span", { children: C ? /* @__PURE__ */ p.jsx(di, {}) : /* @__PURE__ */ p.jsx(pn, {}) }),
        /* @__PURE__ */ p.jsxs("span", { children: [
          R,
          " (",
          g.__children.length,
          ")"
        ] })
      ] }) }) }),
      C && g.__children.map(
        (S) => Dr(S) ? b(S, v + 1) : x(S, v + 1, ++w)
      )
    ] }, `group-${R}`);
  }, x = (g, v, R) => {
    const C = o && Object.keys(c.state.editedRows).length > 0;
    return /* @__PURE__ */ p.jsxs(ji, { children: [
      C && /* @__PURE__ */ p.jsx(Ai, { children: c.state.editedRows[g.rowKey] && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(Ar, { apply: !0, onClick: () => c.applyRowChanges(g.rowKey), children: /* @__PURE__ */ p.jsx(dn, {}) }),
        /* @__PURE__ */ p.jsx(Ar, { onClick: () => c.resetRowChanges(g.rowKey), children: /* @__PURE__ */ p.jsx(yn, {}) })
      ] }) }),
      t && /* @__PURE__ */ p.jsx(tt, { children: R }),
      r && /* @__PURE__ */ p.jsx(tt, { children: /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: n.has(g), onChange: () => a(g) }) }),
      e.map((w) => {
        var k, f, T, B, Ce, _e;
        const S = ((k = c.state.editedRows[g.rowKey]) == null ? void 0 : k[w.key]) !== void 0, A = ((f = c.state.editingCell) == null ? void 0 : f.rowKey) === g.rowKey && ((T = c.state.editingCell) == null ? void 0 : T.colKey) === w.key, $ = A ? (B = c.state.editingCell) == null ? void 0 : B.value : ((Ce = c.state.editedRows[g.rowKey]) == null ? void 0 : Ce[w.key]) ?? g[w.key];
        return /* @__PURE__ */ p.jsx(
          tt,
          {
            $isEdited: S,
            onDoubleClick: () => o && d(g.rowKey, w.key, $),
            children: A ? /* @__PURE__ */ p.jsx(
              Oi,
              {
                type: "text",
                value: ((_e = c.state.editingCell) == null ? void 0 : _e.value) ?? "",
                onChange: (le) => m(le.target.value),
                onKeyDown: (le) => h(le, g)
              }
            ) : $
          },
          w.key
        );
      })
    ] }, g.rowKey);
  };
  return /* @__PURE__ */ p.jsx(ki, { children: c.state.data.map((g, v) => Dr(g) ? b(g, 0) : x(g, 0, v + 1)) });
}, Ii = (e, t, r) => {
  const n = bn(e);
  return {
    originalData: [...n],
    data: t ? Yt(n, 1, r) : n,
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
    pagingable: t,
    pagenate: {
      pageSize: r,
      currentPage: 1
    },
    editedRows: {},
    editingCell: null
  };
};
function $i(e, t) {
  switch (t.type) {
    /** 🔹 컬럼 정렬 변경 */
    case "SET_SORT":
      return {
        ...e,
        sortedColumn: t.column,
        sortDirection: t.direction,
        data: t.direction === null ? [...e.originalData] : vn(e.originalData, t.column, t.direction)
        // ✅ 정렬된 데이터 반영
      };
    /** 🔹 특정 컬럼에 필터 적용 */
    case "SET_FILTER": {
      const r = {
        ...e.filters,
        // 기존 필터 유지
        ...t.filters
        // 새로운 필터 추가 or 업데이트
      };
      return {
        ...e,
        filters: r
      };
    }
    /** 🔹 특정 컬럼의 필터 제거 */
    case "CLEAR_FILTER":
      return {
        ...e,
        filters: Object.fromEntries(
          Object.entries(e.filters).filter(([r]) => r !== t.column)
        )
      };
    /** 🔹 컬럼을 그룹핑 */
    case "SET_GROUP": {
      const r = [...e.group.column, t.column];
      return {
        ...e,
        group: {
          ...e.group,
          column: r,
          // ✅ 새로운 그룹 컬럼 추가
          expanded: new Set(e.group.expanded)
          // ✅ 기존 확장 상태 유지
        },
        data: ft(e.originalData, r)
      };
    }
    /** 🔹 컬럼 그룹핑 해제 */
    case "REMOVE_GROUP": {
      const r = e.group.column.filter((o) => o !== t.column), n = new Set(e.group.expanded);
      return n.delete(t.column), {
        ...e,
        group: {
          column: r,
          // ✅ 그룹 컬럼에서 제거
          expanded: n
          // ✅ 확장 목록에서도 제거
        },
        data: r.length > 0 ? ft(e.originalData, r, n) : [...e.originalData]
        // ✅ 모든 그룹이 해제되면 원본 데이터 복원
      };
    }
    case "TOGGLE_ROW": {
      const r = new Set(e.selectedRows);
      return r.has(t.row) ? r.delete(t.row) : r.add(t.row), {
        ...e,
        selectedRows: r
        // ✅ 변경된 상태 적용
      };
    }
    /** 🔹 특정 Row 선택/해제 */
    case "TOGGLE_GROUP_EXPAND": {
      const r = new Set(e.group.expanded);
      return r.has(t.column) ? r.delete(t.column) : r.add(t.column), {
        ...e,
        group: {
          ...e.group,
          // ✅ 기존 그룹 상태 유지
          expanded: r
          // ✅ 업데이트된 그룹 상태 저장
        }
      };
    }
    /** 🔹 페이지 변경 */
    case "SET_PAGE":
      return {
        ...e,
        pagenate: {
          ...e.pagenate,
          currentPage: t.page
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    /** 🔹 페이지 변경 */
    case "SET_PAGE_SIZE":
      return {
        ...e,
        pagenate: {
          ...e.pagenate,
          pageSize: t.pageSize
          // ✅ pagenate 내부 currentPage 수정
        }
      };
    case "SET_EDITING_CELL":
      return {
        ...e,
        editingCell: {
          rowKey: t.payload.rowKey,
          colKey: t.payload.colKey,
          value: t.payload.value
        }
      };
    case "CLEAR_EDITING_CELL":
      return {
        ...e,
        editingCell: null
      };
    case "EDIT_CELL": {
      const { rowKey: r, colKey: n, newValue: o } = t.payload;
      return {
        ...e,
        editedRows: {
          ...e.editedRows,
          [r]: {
            ...e.editedRows[r],
            [n]: o
          }
        }
      };
    }
    case "REMOVE_EDITED_CELL": {
      const { rowKey: r, colKey: n } = t.payload, o = { ...e.editedRows[r] };
      if (delete o[n], Object.keys(o).length === 0) {
        const a = { ...e.editedRows };
        return delete a[r], {
          ...e,
          editedRows: a
        };
      }
      return {
        ...e,
        editedRows: {
          ...e.editedRows,
          [r]: o
        }
      };
    }
    case "APPLY_ROW_CHANGES": {
      const { rowKey: r } = t.payload, n = e.editedRows[r];
      if (!n) return e;
      const o = e.data.map(
        (c) => c.rowKey === r ? { ...c, ...n } : c
      ), a = e.originalData.map(
        (c) => c.rowKey === r ? { ...c, ...n } : c
      ), s = { ...e.editedRows };
      return delete s[r], {
        ...e,
        data: o,
        originalData: a,
        // ✅ 원본 데이터 업데이트
        editedRows: s,
        // ✅ 해당 Row만 제거
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    case "RESET_ROW_CHANGES": {
      const { rowKey: r } = t.payload, n = e.originalData.find(
        (s) => s.rowKey === r
      );
      if (!n) return e;
      const o = e.data.map(
        (s) => s.rowKey === r ? n : s
      ), a = { ...e.editedRows };
      return delete a[r], {
        ...e,
        data: o,
        // ✅ 변경된 데이터 복원
        editedRows: a,
        // ✅ 해당 Row의 변경 사항 삭제
        editingCell: null
        // ✅ 편집 상태 초기화
      };
    }
    case "APPLY_ALL_CHANGES": {
      const r = e.originalData.map(
        (o) => e.editedRows[o.rowKey] ? { ...o, ...e.editedRows[o.rowKey] } : o
      ), n = e.pagingable ? Yt(r, e.pagenate.currentPage, e.pagenate.pageSize, e) : r;
      return {
        ...e,
        originalData: r,
        data: n,
        editedRows: {},
        // ✅ 적용 후 초기화
        editingCell: null
      };
    }
    case "RESET_ALL_CHANGES":
      return {
        ...e,
        editedRows: {},
        // ✅ 모든 변경 사항 초기화
        editingCell: null
      };
    /** 🔹 Grid 상태 변경 */
    case "SET_GRID_STATE":
      return { ...e, ...t.state };
    // ✅ 새로운 상태 적용
    default:
      return e;
  }
}
function Li(e, t = !1, r = 10) {
  const [n, o] = Yn($i, Ii(e, t, r));
  return {
    state: n,
    updateGridState: () => {
      o({
        type: "SET_GRID_STATE",
        state: ae(n)
      });
    },
    setSort: (f, T) => {
      o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          sortedColumn: f,
          sortDirection: T
        })
      });
    },
    setFilter: (f) => {
      const T = { ...n.filters, ...f };
      o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          filters: T
        })
      });
    },
    clearFilter: (f) => {
      const T = { ...n.filters };
      delete T[f], o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          filters: T
        })
      });
    },
    setGroup: (f) => {
      o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          group: {
            ...n.group,
            column: [...n.group.column, f]
          }
        })
      });
    },
    removeGroup: (f) => {
      o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          group: {
            ...n.group,
            column: n.group.column.filter((T) => T !== f)
          }
        })
      });
    },
    expandGroup: (f) => {
      const T = new Set(n.group.expanded);
      T.has(f) ? T.delete(f) : T.add(f), o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          group: {
            ...n.group,
            expanded: T
          }
        })
      });
    },
    toggleRow: (f) => {
      o({ type: "TOGGLE_ROW", row: f });
    },
    setPage: (f) => {
      o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          pagenate: {
            ...n.pagenate,
            currentPage: f
          }
        })
      });
    },
    setPageSize: (f) => {
      o({
        type: "SET_GRID_STATE",
        state: ae({
          ...n,
          pagenate: {
            ...n.pagenate,
            pageSize: f
          }
        })
      });
    },
    editCell: (f, T, B) => {
      o({ type: "EDIT_CELL", payload: { rowKey: f, colKey: T, newValue: B } });
    },
    setEditingCell: (f, T, B) => {
      o({ type: "SET_EDITING_CELL", payload: { rowKey: f, colKey: T, value: B } });
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
    removeEditedCell: (f, T) => {
      o({ type: "REMOVE_EDITED_CELL", payload: { rowKey: f, colKey: T } });
    },
    applyRowChanges: (f) => {
      o({ type: "APPLY_ROW_CHANGES", payload: { rowKey: f } });
    },
    resetRowChanges: (f) => {
      o({ type: "RESET_ROW_CHANGES", payload: { rowKey: f } });
    }
  };
}
const Ni = D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${(e) => e.theme.colors.font};
  background-color: ${(e) => e.theme.colors.second};
`, Fi = D.span`
  font-size: 14px;
  color: ${(e) => e.theme.colors.font};
`, zi = D.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Gi = D.span`
  font-size: 14px;
  color: ${(e) => e.theme.colors.font};
`, Mi = D.div`
  position: relative;
`, Vi = D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px;
  height: 24px;
  font-size: 14px;
  border-radius: 6px;
  background-color: ${(e) => e.theme.colors.prime};
  color: ${(e) => e.theme.colors.font};
  width: 64px;
  cursor: pointer;
  border: none;
`, Hi = D.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  width: 144px;
  border: 1px solid ${(e) => e.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(e) => e.theme.colors.prime};
  color: ${(e) => e.theme.colors.font};
  z-index: 1000;
`, Bi = D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: ${(e) => e.theme.colors.primeHover};
  }
`, Tt = D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${(e) => e.$active ? e.theme.colors.active : e.theme.colors.second};
  color: ${(e) => e.theme.colors.font};
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(e) => e.theme.colors.secondHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, Ki = ({
  currentPage: e,
  totalPages: t,
  totalDataCount: r,
  pageSize: n,
  onPageChange: o,
  onPageSizeChange: a,
  style: s
}) => {
  const c = [10, 20, 30, 50, 100], [l, d] = Ir(!1), m = Mt(null);
  return Pr(() => {
    const h = (b) => {
      m.current && !m.current.contains(b.target) && d(!1);
    };
    return l && window.addEventListener("click", h), () => {
      window.removeEventListener("click", h);
    };
  }, [l]), /* @__PURE__ */ p.jsxs(Ni, { style: s, children: [
    /* @__PURE__ */ p.jsxs(Fi, { children: [
      "Total ",
      /* @__PURE__ */ p.jsx("b", { children: r }),
      " items | Page ",
      e,
      " / ",
      t
    ] }),
    /* @__PURE__ */ p.jsxs(zi, { children: [
      /* @__PURE__ */ p.jsx(Gi, { children: "Page Size:" }),
      /* @__PURE__ */ p.jsxs(Mi, { ref: m, children: [
        /* @__PURE__ */ p.jsx(
          Vi,
          {
            onClick: (h) => {
              h.stopPropagation(), d(!l);
            },
            children: n
          }
        ),
        l && /* @__PURE__ */ p.jsx(Hi, { children: c.map((h, b) => /* @__PURE__ */ p.jsx(
          Bi,
          {
            onClick: () => {
              a(h), d(!1);
            },
            children: h
          },
          b
        )) })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", gap: "4px" }, children: [
      /* @__PURE__ */ p.jsx(Tt, { onClick: () => e > 1 && o(e - 1), disabled: e === 1, children: /* @__PURE__ */ p.jsx(pi, { size: 14 }) }),
      Array.from({ length: t }, (h, b) => b + 1).map((h) => /* @__PURE__ */ p.jsx(Tt, { $active: h === e, onClick: () => o(h), children: h }, h)),
      /* @__PURE__ */ p.jsx(Tt, { onClick: () => e < t && o(e + 1), disabled: e === t, children: /* @__PURE__ */ p.jsx(pn, { size: 14 }) })
    ] })
  ] });
}, Wi = {
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
    fourthHover: "#2563EB",
    active: "#9fd0f1"
  }
}, Yi = ni`
  body, html {
    height: 100%;
  }

  body {
    background-color: ${(e) => e.theme.colors.background};
    color: ${(e) => e.theme.colors.font};
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    word-spacing: 2px;
    text-align: left;
    visibility: visible;
  }
`, Ui = D.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(e) => e.theme.colors.background}; 
  color: ${(e) => e.theme.colors.font};
`, qi = D.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(e) => e.theme.colors.background};
  color: ${(e) => e.theme.colors.font};
`, Ji = ({
  columns: e,
  data: t,
  options: r,
  showRowNumCol: n = !0,
  showRowCheckboxCol: o = !1,
  pagingable: a = !1,
  pagination: s,
  isCellEditable: c = !1,
  customStyles: l = {}
}) => {
  const d = Li(bn(t), a, s == null ? void 0 : s.pageSize), { pagenate: m } = d.state, h = t.length, b = Math.ceil(h / m.pageSize);
  return /* @__PURE__ */ p.jsxs(ei, { theme: Wi, children: [
    /* @__PURE__ */ p.jsx(Yi, {}),
    /* @__PURE__ */ p.jsxs(Ui, { children: [
      /* @__PURE__ */ p.jsxs(qi, { children: [
        /* @__PURE__ */ p.jsx(
          Ci,
          {
            columns: e,
            showRowNumCol: n,
            showRowCheckboxCol: o,
            options: r,
            reducer: d,
            editedRows: d.state.editedRows,
            style: l.header
          }
        ),
        /* @__PURE__ */ p.jsx(
          Pi,
          {
            reducer: d,
            columns: e,
            isCellEditable: c,
            showRowNumCol: n,
            showRowCheckboxCol: o,
            selectedRows: d.state.selectedRows,
            onToggleRow: d.toggleRow,
            onToggleGroupExpand: d.expandGroup,
            style: l.body
          }
        )
      ] }),
      a && /* @__PURE__ */ p.jsx(
        Ki,
        {
          currentPage: m.currentPage,
          totalPages: b,
          onPageChange: d.setPage,
          totalDataCount: t.length,
          pageSize: d.state.pagenate.pageSize,
          onPageSizeChange: d.setPageSize,
          style: l.pagination
        }
      )
    ] })
  ] });
};
export {
  Ji as Grid
};
