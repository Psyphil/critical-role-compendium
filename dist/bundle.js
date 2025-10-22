var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global2, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global2.document ? factory(global2, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global2);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery2,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery2.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery2.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery2.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery2.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery2.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery2.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery2.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery2.fn.uniqueSort = function() {
          return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery2.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery2.find = find;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.unique = jQuery2.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery2.escapeSelector;
        find.getText = jQuery2.text;
        find.isXML = jQuery2.isXMLDoc;
        find.selectors = jQuery2.expr;
        find.support = jQuery2.support;
        find.uniqueSort = jQuery2.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self2[i], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery2)
          );
        }
        return jQuery2.makeArray(selector, this);
      };
      init.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery2.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery2.uniqueSort(
              jQuery2.merge(this.get(), jQuery2(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self2 = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self2.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self2;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery2.Callbacks("memory"),
              jQuery2.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery2.Deferred.getErrorHook) {
                      process.error = jQuery2.Deferred.getErrorHook();
                    } else if (jQuery2.Deferred.getStackHook) {
                      process.error = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery2.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery2.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery2.event.addProp);
      jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery2.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery2.event.fix(nativeEvent)
            );
          }
        }
        jQuery2.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery2.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery2.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery2(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery2.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery2.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery2.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(
          jQuery2.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery2(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self2 = jQuery2(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery2.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(
            new jQuery2.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery2.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery2.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery2.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery2(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self2.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = (function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      })();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
          jQuery2.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self2.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery2.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery2.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery2.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery2.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery2.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery2.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery2.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery2.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  }
});

// node_modules/bootstrap/dist/js/bootstrap.bundle.js
var require_bootstrap_bundle = __commonJS({
  "node_modules/bootstrap/dist/js/bootstrap.bundle.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_jquery()) : typeof define === "function" && define.amd ? define(["exports", "jquery"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.bootstrap = {}, global2.jQuery));
    })(exports, (function(exports2, $3) {
      "use strict";
      function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && "default" in e ? e : { "default": e };
      }
      var $__default = /* @__PURE__ */ _interopDefaultLegacy($3);
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _extends$1() {
        _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends$1.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var TRANSITION_END = "transitionend";
      var MAX_UID = 1e6;
      var MILLISECONDS_MULTIPLIER = 1e3;
      function toType(obj) {
        if (obj === null || typeof obj === "undefined") {
          return "" + obj;
        }
        return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
      }
      function getSpecialTransitionEndEvent() {
        return {
          bindType: TRANSITION_END,
          delegateType: TRANSITION_END,
          handle: function handle(event) {
            if ($__default["default"](event.target).is(this)) {
              return event.handleObj.handler.apply(this, arguments);
            }
            return void 0;
          }
        };
      }
      function transitionEndEmulator(duration) {
        var _this = this;
        var called = false;
        $__default["default"](this).one(Util.TRANSITION_END, function() {
          called = true;
        });
        setTimeout(function() {
          if (!called) {
            Util.triggerTransitionEnd(_this);
          }
        }, duration);
        return this;
      }
      function setTransitionEndSupport() {
        $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
        $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
      var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(prefix) {
          do {
            prefix += ~~(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
          var selector = element.getAttribute("data-target");
          if (!selector || selector === "#") {
            var hrefAttr = element.getAttribute("href");
            selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : "";
          }
          try {
            return document.querySelector(selector) ? selector : null;
          } catch (_) {
            return null;
          }
        },
        getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
          if (!element) {
            return 0;
          }
          var transitionDuration = $__default["default"](element).css("transition-duration");
          var transitionDelay = $__default["default"](element).css("transition-delay");
          var floatTransitionDuration = parseFloat(transitionDuration);
          var floatTransitionDelay = parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        },
        reflow: function reflow(element) {
          return element.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
          $__default["default"](element).trigger(TRANSITION_END);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
          return Boolean(TRANSITION_END);
        },
        isElement: function isElement(obj) {
          return (obj[0] || obj).nodeType;
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
          for (var property in configTypes) {
            if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
              var expectedTypes = configTypes[property];
              var value = config[property];
              var valueType = value && Util.isElement(value) ? "element" : toType(value);
              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
              }
            }
          }
        },
        findShadowRoot: function findShadowRoot(element) {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return Util.findShadowRoot(element.parentNode);
        },
        jQueryDetection: function jQueryDetection() {
          if (typeof $__default["default"] === "undefined") {
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          }
          var version = $__default["default"].fn.jquery.split(" ")[0].split(".");
          var minMajor = 1;
          var ltMajor = 2;
          var minMinor = 9;
          var minPatch = 1;
          var maxMajor = 4;
          if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
          }
        }
      };
      Util.jQueryDetection();
      setTransitionEndSupport();
      var NAME$a = "alert";
      var VERSION$a = "4.6.2";
      var DATA_KEY$a = "bs.alert";
      var EVENT_KEY$a = "." + DATA_KEY$a;
      var DATA_API_KEY$7 = ".data-api";
      var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
      var CLASS_NAME_ALERT = "alert";
      var CLASS_NAME_FADE$5 = "fade";
      var CLASS_NAME_SHOW$7 = "show";
      var EVENT_CLOSE = "close" + EVENT_KEY$a;
      var EVENT_CLOSED = "closed" + EVENT_KEY$a;
      var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$7;
      var SELECTOR_DISMISS = '[data-dismiss="alert"]';
      var Alert = /* @__PURE__ */ (function() {
        function Alert2(element) {
          this._element = element;
        }
        var _proto = Alert2.prototype;
        _proto.close = function close(element) {
          var rootElement = this._element;
          if (element) {
            rootElement = this._getRootElement(element);
          }
          var customEvent = this._triggerCloseEvent(rootElement);
          if (customEvent.isDefaultPrevented()) {
            return;
          }
          this._removeElement(rootElement);
        };
        _proto.dispose = function dispose() {
          $__default["default"].removeData(this._element, DATA_KEY$a);
          this._element = null;
        };
        _proto._getRootElement = function _getRootElement(element) {
          var selector = Util.getSelectorFromElement(element);
          var parent = false;
          if (selector) {
            parent = document.querySelector(selector);
          }
          if (!parent) {
            parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
          }
          return parent;
        };
        _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
          var closeEvent = $__default["default"].Event(EVENT_CLOSE);
          $__default["default"](element).trigger(closeEvent);
          return closeEvent;
        };
        _proto._removeElement = function _removeElement(element) {
          var _this = this;
          $__default["default"](element).removeClass(CLASS_NAME_SHOW$7);
          if (!$__default["default"](element).hasClass(CLASS_NAME_FADE$5)) {
            this._destroyElement(element);
            return;
          }
          var transitionDuration = Util.getTransitionDurationFromElement(element);
          $__default["default"](element).one(Util.TRANSITION_END, function(event) {
            return _this._destroyElement(element, event);
          }).emulateTransitionEnd(transitionDuration);
        };
        _proto._destroyElement = function _destroyElement(element) {
          $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
        };
        Alert2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var $element = $__default["default"](this);
            var data = $element.data(DATA_KEY$a);
            if (!data) {
              data = new Alert2(this);
              $element.data(DATA_KEY$a, data);
            }
            if (config === "close") {
              data[config](this);
            }
          });
        };
        Alert2._handleDismiss = function _handleDismiss(alertInstance) {
          return function(event) {
            if (event) {
              event.preventDefault();
            }
            alertInstance.close(this);
          };
        };
        _createClass(Alert2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$a;
          }
        }]);
        return Alert2;
      })();
      $__default["default"](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
      $__default["default"].fn[NAME$a] = Alert._jQueryInterface;
      $__default["default"].fn[NAME$a].Constructor = Alert;
      $__default["default"].fn[NAME$a].noConflict = function() {
        $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
        return Alert._jQueryInterface;
      };
      var NAME$9 = "button";
      var VERSION$9 = "4.6.2";
      var DATA_KEY$9 = "bs.button";
      var EVENT_KEY$9 = "." + DATA_KEY$9;
      var DATA_API_KEY$6 = ".data-api";
      var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
      var CLASS_NAME_ACTIVE$3 = "active";
      var CLASS_NAME_BUTTON = "btn";
      var CLASS_NAME_FOCUS = "focus";
      var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
      var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$9 + DATA_API_KEY$6 + " " + ("blur" + EVENT_KEY$9 + DATA_API_KEY$6);
      var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$9 + DATA_API_KEY$6;
      var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
      var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
      var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="button"]';
      var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
      var SELECTOR_INPUT = 'input:not([type="hidden"])';
      var SELECTOR_ACTIVE$2 = ".active";
      var SELECTOR_BUTTON = ".btn";
      var Button = /* @__PURE__ */ (function() {
        function Button2(element) {
          this._element = element;
          this.shouldAvoidTriggerChange = false;
        }
        var _proto = Button2.prototype;
        _proto.toggle = function toggle() {
          var triggerChangeEvent = true;
          var addAriaPressed = true;
          var rootElement = $__default["default"](this._element).closest(SELECTOR_DATA_TOGGLES)[0];
          if (rootElement) {
            var input = this._element.querySelector(SELECTOR_INPUT);
            if (input) {
              if (input.type === "radio") {
                if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$3)) {
                  triggerChangeEvent = false;
                } else {
                  var activeElement = rootElement.querySelector(SELECTOR_ACTIVE$2);
                  if (activeElement) {
                    $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$3);
                  }
                }
              }
              if (triggerChangeEvent) {
                if (input.type === "checkbox" || input.type === "radio") {
                  input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$3);
                }
                if (!this.shouldAvoidTriggerChange) {
                  $__default["default"](input).trigger("change");
                }
              }
              input.focus();
              addAriaPressed = false;
            }
          }
          if (!(this._element.hasAttribute("disabled") || this._element.classList.contains("disabled"))) {
            if (addAriaPressed) {
              this._element.setAttribute("aria-pressed", !this._element.classList.contains(CLASS_NAME_ACTIVE$3));
            }
            if (triggerChangeEvent) {
              $__default["default"](this._element).toggleClass(CLASS_NAME_ACTIVE$3);
            }
          }
        };
        _proto.dispose = function dispose() {
          $__default["default"].removeData(this._element, DATA_KEY$9);
          this._element = null;
        };
        Button2._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
          return this.each(function() {
            var $element = $__default["default"](this);
            var data = $element.data(DATA_KEY$9);
            if (!data) {
              data = new Button2(this);
              $element.data(DATA_KEY$9, data);
            }
            data.shouldAvoidTriggerChange = avoidTriggerChange;
            if (config === "toggle") {
              data[config]();
            }
          });
        };
        _createClass(Button2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$9;
          }
        }]);
        return Button2;
      })();
      $__default["default"](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE_CARROT, function(event) {
        var button = event.target;
        var initialButton = button;
        if (!$__default["default"](button).hasClass(CLASS_NAME_BUTTON)) {
          button = $__default["default"](button).closest(SELECTOR_BUTTON)[0];
        }
        if (!button || button.hasAttribute("disabled") || button.classList.contains("disabled")) {
          event.preventDefault();
        } else {
          var inputBtn = button.querySelector(SELECTOR_INPUT);
          if (inputBtn && (inputBtn.hasAttribute("disabled") || inputBtn.classList.contains("disabled"))) {
            event.preventDefault();
            return;
          }
          if (initialButton.tagName === "INPUT" || button.tagName !== "LABEL") {
            Button._jQueryInterface.call($__default["default"](button), "toggle", initialButton.tagName === "INPUT");
          }
        }
      }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function(event) {
        var button = $__default["default"](event.target).closest(SELECTOR_BUTTON)[0];
        $__default["default"](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
      });
      $__default["default"](window).on(EVENT_LOAD_DATA_API$2, function() {
        var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));
        for (var i = 0, len = buttons.length; i < len; i++) {
          var button = buttons[i];
          var input = button.querySelector(SELECTOR_INPUT);
          if (input.checked || input.hasAttribute("checked")) {
            button.classList.add(CLASS_NAME_ACTIVE$3);
          } else {
            button.classList.remove(CLASS_NAME_ACTIVE$3);
          }
        }
        buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$4));
        for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
          var _button = buttons[_i];
          if (_button.getAttribute("aria-pressed") === "true") {
            _button.classList.add(CLASS_NAME_ACTIVE$3);
          } else {
            _button.classList.remove(CLASS_NAME_ACTIVE$3);
          }
        }
      });
      $__default["default"].fn[NAME$9] = Button._jQueryInterface;
      $__default["default"].fn[NAME$9].Constructor = Button;
      $__default["default"].fn[NAME$9].noConflict = function() {
        $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
        return Button._jQueryInterface;
      };
      var NAME$8 = "carousel";
      var VERSION$8 = "4.6.2";
      var DATA_KEY$8 = "bs.carousel";
      var EVENT_KEY$8 = "." + DATA_KEY$8;
      var DATA_API_KEY$5 = ".data-api";
      var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
      var ARROW_LEFT_KEYCODE = 37;
      var ARROW_RIGHT_KEYCODE = 39;
      var TOUCHEVENT_COMPAT_WAIT = 500;
      var SWIPE_THRESHOLD = 40;
      var CLASS_NAME_CAROUSEL = "carousel";
      var CLASS_NAME_ACTIVE$2 = "active";
      var CLASS_NAME_SLIDE = "slide";
      var CLASS_NAME_RIGHT = "carousel-item-right";
      var CLASS_NAME_LEFT = "carousel-item-left";
      var CLASS_NAME_NEXT = "carousel-item-next";
      var CLASS_NAME_PREV = "carousel-item-prev";
      var CLASS_NAME_POINTER_EVENT = "pointer-event";
      var DIRECTION_NEXT = "next";
      var DIRECTION_PREV = "prev";
      var DIRECTION_LEFT = "left";
      var DIRECTION_RIGHT = "right";
      var EVENT_SLIDE = "slide" + EVENT_KEY$8;
      var EVENT_SLID = "slid" + EVENT_KEY$8;
      var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
      var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$8;
      var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$8;
      var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$8;
      var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$8;
      var EVENT_TOUCHEND = "touchend" + EVENT_KEY$8;
      var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$8;
      var EVENT_POINTERUP = "pointerup" + EVENT_KEY$8;
      var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
      var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
      var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
      var SELECTOR_ACTIVE$1 = ".active";
      var SELECTOR_ACTIVE_ITEM = ".active.carousel-item";
      var SELECTOR_ITEM = ".carousel-item";
      var SELECTOR_ITEM_IMG = ".carousel-item img";
      var SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev";
      var SELECTOR_INDICATORS = ".carousel-indicators";
      var SELECTOR_DATA_SLIDE = "[data-slide], [data-slide-to]";
      var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
      var Default$7 = {
        interval: 5e3,
        keyboard: true,
        slide: false,
        pause: "hover",
        wrap: true,
        touch: true
      };
      var DefaultType$7 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      };
      var PointerType = {
        TOUCH: "touch",
        PEN: "pen"
      };
      var Carousel = /* @__PURE__ */ (function() {
        function Carousel2(element, config) {
          this._items = null;
          this._interval = null;
          this._activeElement = null;
          this._isPaused = false;
          this._isSliding = false;
          this.touchTimeout = null;
          this.touchStartX = 0;
          this.touchDeltaX = 0;
          this._config = this._getConfig(config);
          this._element = element;
          this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
          this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
          this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
          this._addEventListeners();
        }
        var _proto = Carousel2.prototype;
        _proto.next = function next() {
          if (!this._isSliding) {
            this._slide(DIRECTION_NEXT);
          }
        };
        _proto.nextWhenVisible = function nextWhenVisible() {
          var $element = $__default["default"](this._element);
          if (!document.hidden && $element.is(":visible") && $element.css("visibility") !== "hidden") {
            this.next();
          }
        };
        _proto.prev = function prev() {
          if (!this._isSliding) {
            this._slide(DIRECTION_PREV);
          }
        };
        _proto.pause = function pause(event) {
          if (!event) {
            this._isPaused = true;
          }
          if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
            Util.triggerTransitionEnd(this._element);
            this.cycle(true);
          }
          clearInterval(this._interval);
          this._interval = null;
        };
        _proto.cycle = function cycle(event) {
          if (!event) {
            this._isPaused = false;
          }
          if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
          }
          if (this._config.interval && !this._isPaused) {
            this._updateInterval();
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
          }
        };
        _proto.to = function to(index) {
          var _this = this;
          this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
          var activeIndex = this._getItemIndex(this._activeElement);
          if (index > this._items.length - 1 || index < 0) {
            return;
          }
          if (this._isSliding) {
            $__default["default"](this._element).one(EVENT_SLID, function() {
              return _this.to(index);
            });
            return;
          }
          if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
          }
          var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;
          this._slide(direction, this._items[index]);
        };
        _proto.dispose = function dispose() {
          $__default["default"](this._element).off(EVENT_KEY$8);
          $__default["default"].removeData(this._element, DATA_KEY$8);
          this._items = null;
          this._config = null;
          this._element = null;
          this._interval = null;
          this._isPaused = null;
          this._isSliding = null;
          this._activeElement = null;
          this._indicatorsElement = null;
        };
        _proto._getConfig = function _getConfig(config) {
          config = _extends$1({}, Default$7, config);
          Util.typeCheckConfig(NAME$8, config, DefaultType$7);
          return config;
        };
        _proto._handleSwipe = function _handleSwipe() {
          var absDeltax = Math.abs(this.touchDeltaX);
          if (absDeltax <= SWIPE_THRESHOLD) {
            return;
          }
          var direction = absDeltax / this.touchDeltaX;
          this.touchDeltaX = 0;
          if (direction > 0) {
            this.prev();
          }
          if (direction < 0) {
            this.next();
          }
        };
        _proto._addEventListeners = function _addEventListeners() {
          var _this2 = this;
          if (this._config.keyboard) {
            $__default["default"](this._element).on(EVENT_KEYDOWN, function(event) {
              return _this2._keydown(event);
            });
          }
          if (this._config.pause === "hover") {
            $__default["default"](this._element).on(EVENT_MOUSEENTER, function(event) {
              return _this2.pause(event);
            }).on(EVENT_MOUSELEAVE, function(event) {
              return _this2.cycle(event);
            });
          }
          if (this._config.touch) {
            this._addTouchEventListeners();
          }
        };
        _proto._addTouchEventListeners = function _addTouchEventListeners() {
          var _this3 = this;
          if (!this._touchSupported) {
            return;
          }
          var start = function start2(event) {
            if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
              _this3.touchStartX = event.originalEvent.clientX;
            } else if (!_this3._pointerEvent) {
              _this3.touchStartX = event.originalEvent.touches[0].clientX;
            }
          };
          var move = function move2(event) {
            _this3.touchDeltaX = event.originalEvent.touches && event.originalEvent.touches.length > 1 ? 0 : event.originalEvent.touches[0].clientX - _this3.touchStartX;
          };
          var end = function end2(event) {
            if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
              _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
            }
            _this3._handleSwipe();
            if (_this3._config.pause === "hover") {
              _this3.pause();
              if (_this3.touchTimeout) {
                clearTimeout(_this3.touchTimeout);
              }
              _this3.touchTimeout = setTimeout(function(event2) {
                return _this3.cycle(event2);
              }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
            }
          };
          $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function(e) {
            return e.preventDefault();
          });
          if (this._pointerEvent) {
            $__default["default"](this._element).on(EVENT_POINTERDOWN, function(event) {
              return start(event);
            });
            $__default["default"](this._element).on(EVENT_POINTERUP, function(event) {
              return end(event);
            });
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
          } else {
            $__default["default"](this._element).on(EVENT_TOUCHSTART, function(event) {
              return start(event);
            });
            $__default["default"](this._element).on(EVENT_TOUCHMOVE, function(event) {
              return move(event);
            });
            $__default["default"](this._element).on(EVENT_TOUCHEND, function(event) {
              return end(event);
            });
          }
        };
        _proto._keydown = function _keydown(event) {
          if (/input|textarea/i.test(event.target.tagName)) {
            return;
          }
          switch (event.which) {
            case ARROW_LEFT_KEYCODE:
              event.preventDefault();
              this.prev();
              break;
            case ARROW_RIGHT_KEYCODE:
              event.preventDefault();
              this.next();
              break;
          }
        };
        _proto._getItemIndex = function _getItemIndex(element) {
          this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
          return this._items.indexOf(element);
        };
        _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
          var isNextDirection = direction === DIRECTION_NEXT;
          var isPrevDirection = direction === DIRECTION_PREV;
          var activeIndex = this._getItemIndex(activeElement);
          var lastItemIndex = this._items.length - 1;
          var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
          if (isGoingToWrap && !this._config.wrap) {
            return activeElement;
          }
          var delta = direction === DIRECTION_PREV ? -1 : 1;
          var itemIndex = (activeIndex + delta) % this._items.length;
          return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        };
        _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
          var targetIndex = this._getItemIndex(relatedTarget);
          var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));
          var slideEvent = $__default["default"].Event(EVENT_SLIDE, {
            relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
          });
          $__default["default"](this._element).trigger(slideEvent);
          return slideEvent;
        };
        _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
          if (this._indicatorsElement) {
            var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
            $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE$2);
            var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
            if (nextIndicator) {
              $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE$2);
            }
          }
        };
        _proto._updateInterval = function _updateInterval() {
          var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);
          if (!element) {
            return;
          }
          var elementInterval = parseInt(element.getAttribute("data-interval"), 10);
          if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
          } else {
            this._config.interval = this._config.defaultInterval || this._config.interval;
          }
        };
        _proto._slide = function _slide(direction, element) {
          var _this4 = this;
          var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
          var activeElementIndex = this._getItemIndex(activeElement);
          var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
          var nextElementIndex = this._getItemIndex(nextElement);
          var isCycling = Boolean(this._interval);
          var directionalClassName;
          var orderClassName;
          var eventDirectionName;
          if (direction === DIRECTION_NEXT) {
            directionalClassName = CLASS_NAME_LEFT;
            orderClassName = CLASS_NAME_NEXT;
            eventDirectionName = DIRECTION_LEFT;
          } else {
            directionalClassName = CLASS_NAME_RIGHT;
            orderClassName = CLASS_NAME_PREV;
            eventDirectionName = DIRECTION_RIGHT;
          }
          if (nextElement && $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE$2)) {
            this._isSliding = false;
            return;
          }
          var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
          if (slideEvent.isDefaultPrevented()) {
            return;
          }
          if (!activeElement || !nextElement) {
            return;
          }
          this._isSliding = true;
          if (isCycling) {
            this.pause();
          }
          this._setActiveIndicatorElement(nextElement);
          this._activeElement = nextElement;
          var slidEvent = $__default["default"].Event(EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
          if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
            $__default["default"](nextElement).addClass(orderClassName);
            Util.reflow(nextElement);
            $__default["default"](activeElement).addClass(directionalClassName);
            $__default["default"](nextElement).addClass(directionalClassName);
            var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
            $__default["default"](activeElement).one(Util.TRANSITION_END, function() {
              $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$2);
              $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2 + " " + orderClassName + " " + directionalClassName);
              _this4._isSliding = false;
              setTimeout(function() {
                return $__default["default"](_this4._element).trigger(slidEvent);
              }, 0);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2);
            $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE$2);
            this._isSliding = false;
            $__default["default"](this._element).trigger(slidEvent);
          }
          if (isCycling) {
            this.cycle();
          }
        };
        Carousel2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var data = $__default["default"](this).data(DATA_KEY$8);
            var _config = _extends$1({}, Default$7, $__default["default"](this).data());
            if (typeof config === "object") {
              _config = _extends$1({}, _config, config);
            }
            var action = typeof config === "string" ? config : _config.slide;
            if (!data) {
              data = new Carousel2(this, _config);
              $__default["default"](this).data(DATA_KEY$8, data);
            }
            if (typeof config === "number") {
              data.to(config);
            } else if (typeof action === "string") {
              if (typeof data[action] === "undefined") {
                throw new TypeError('No method named "' + action + '"');
              }
              data[action]();
            } else if (_config.interval && _config.ride) {
              data.pause();
              data.cycle();
            }
          });
        };
        Carousel2._dataApiClickHandler = function _dataApiClickHandler(event) {
          var selector = Util.getSelectorFromElement(this);
          if (!selector) {
            return;
          }
          var target = $__default["default"](selector)[0];
          if (!target || !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL)) {
            return;
          }
          var config = _extends$1({}, $__default["default"](target).data(), $__default["default"](this).data());
          var slideIndex = this.getAttribute("data-slide-to");
          if (slideIndex) {
            config.interval = false;
          }
          Carousel2._jQueryInterface.call($__default["default"](target), config);
          if (slideIndex) {
            $__default["default"](target).data(DATA_KEY$8).to(slideIndex);
          }
          event.preventDefault();
        };
        _createClass(Carousel2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$8;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$7;
          }
        }]);
        return Carousel2;
      })();
      $__default["default"](document).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
      $__default["default"](window).on(EVENT_LOAD_DATA_API$1, function() {
        var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));
        for (var i = 0, len = carousels.length; i < len; i++) {
          var $carousel = $__default["default"](carousels[i]);
          Carousel._jQueryInterface.call($carousel, $carousel.data());
        }
      });
      $__default["default"].fn[NAME$8] = Carousel._jQueryInterface;
      $__default["default"].fn[NAME$8].Constructor = Carousel;
      $__default["default"].fn[NAME$8].noConflict = function() {
        $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
        return Carousel._jQueryInterface;
      };
      var NAME$7 = "collapse";
      var VERSION$7 = "4.6.2";
      var DATA_KEY$7 = "bs.collapse";
      var EVENT_KEY$7 = "." + DATA_KEY$7;
      var DATA_API_KEY$4 = ".data-api";
      var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
      var CLASS_NAME_SHOW$6 = "show";
      var CLASS_NAME_COLLAPSE = "collapse";
      var CLASS_NAME_COLLAPSING = "collapsing";
      var CLASS_NAME_COLLAPSED = "collapsed";
      var DIMENSION_WIDTH = "width";
      var DIMENSION_HEIGHT = "height";
      var EVENT_SHOW$4 = "show" + EVENT_KEY$7;
      var EVENT_SHOWN$4 = "shown" + EVENT_KEY$7;
      var EVENT_HIDE$4 = "hide" + EVENT_KEY$7;
      var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$7;
      var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
      var SELECTOR_ACTIVES = ".show, .collapsing";
      var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="collapse"]';
      var Default$6 = {
        toggle: true,
        parent: ""
      };
      var DefaultType$6 = {
        toggle: "boolean",
        parent: "(string|element)"
      };
      var Collapse = /* @__PURE__ */ (function() {
        function Collapse2(element, config) {
          this._isTransitioning = false;
          this._element = element;
          this._config = this._getConfig(config);
          this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
          var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$3));
          for (var i = 0, len = toggleList.length; i < len; i++) {
            var elem = toggleList[i];
            var selector = Util.getSelectorFromElement(elem);
            var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function(foundElem) {
              return foundElem === element;
            });
            if (selector !== null && filterElement.length > 0) {
              this._selector = selector;
              this._triggerArray.push(elem);
            }
          }
          this._parent = this._config.parent ? this._getParent() : null;
          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._element, this._triggerArray);
          }
          if (this._config.toggle) {
            this.toggle();
          }
        }
        var _proto = Collapse2.prototype;
        _proto.toggle = function toggle() {
          if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
            this.hide();
          } else {
            this.show();
          }
        };
        _proto.show = function show() {
          var _this = this;
          if (this._isTransitioning || $__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
            return;
          }
          var actives;
          var activesData;
          if (this._parent) {
            actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function(elem) {
              if (typeof _this._config.parent === "string") {
                return elem.getAttribute("data-parent") === _this._config.parent;
              }
              return elem.classList.contains(CLASS_NAME_COLLAPSE);
            });
            if (actives.length === 0) {
              actives = null;
            }
          }
          if (actives) {
            activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY$7);
            if (activesData && activesData._isTransitioning) {
              return;
            }
          }
          var startEvent = $__default["default"].Event(EVENT_SHOW$4);
          $__default["default"](this._element).trigger(startEvent);
          if (startEvent.isDefaultPrevented()) {
            return;
          }
          if (actives) {
            Collapse2._jQueryInterface.call($__default["default"](actives).not(this._selector), "hide");
            if (!activesData) {
              $__default["default"](actives).data(DATA_KEY$7, null);
            }
          }
          var dimension = this._getDimension();
          $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
          this._element.style[dimension] = 0;
          if (this._triggerArray.length) {
            $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr("aria-expanded", true);
          }
          this.setTransitioning(true);
          var complete = function complete2() {
            $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
            _this._element.style[dimension] = "";
            _this.setTransitioning(false);
            $__default["default"](_this._element).trigger(EVENT_SHOWN$4);
          };
          var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          var scrollSize = "scroll" + capitalizedDimension;
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          this._element.style[dimension] = this._element[scrollSize] + "px";
        };
        _proto.hide = function hide2() {
          var _this2 = this;
          if (this._isTransitioning || !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
            return;
          }
          var startEvent = $__default["default"].Event(EVENT_HIDE$4);
          $__default["default"](this._element).trigger(startEvent);
          if (startEvent.isDefaultPrevented()) {
            return;
          }
          var dimension = this._getDimension();
          this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
          Util.reflow(this._element);
          $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
          var triggerArrayLength = this._triggerArray.length;
          if (triggerArrayLength > 0) {
            for (var i = 0; i < triggerArrayLength; i++) {
              var trigger = this._triggerArray[i];
              var selector = Util.getSelectorFromElement(trigger);
              if (selector !== null) {
                var $elem = $__default["default"]([].slice.call(document.querySelectorAll(selector)));
                if (!$elem.hasClass(CLASS_NAME_SHOW$6)) {
                  $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr("aria-expanded", false);
                }
              }
            }
          }
          this.setTransitioning(true);
          var complete = function complete2() {
            _this2.setTransitioning(false);
            $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN$4);
          };
          this._element.style[dimension] = "";
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        };
        _proto.setTransitioning = function setTransitioning(isTransitioning) {
          this._isTransitioning = isTransitioning;
        };
        _proto.dispose = function dispose() {
          $__default["default"].removeData(this._element, DATA_KEY$7);
          this._config = null;
          this._parent = null;
          this._element = null;
          this._triggerArray = null;
          this._isTransitioning = null;
        };
        _proto._getConfig = function _getConfig(config) {
          config = _extends$1({}, Default$6, config);
          config.toggle = Boolean(config.toggle);
          Util.typeCheckConfig(NAME$7, config, DefaultType$6);
          return config;
        };
        _proto._getDimension = function _getDimension() {
          var hasWidth = $__default["default"](this._element).hasClass(DIMENSION_WIDTH);
          return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
        };
        _proto._getParent = function _getParent() {
          var _this3 = this;
          var parent;
          if (Util.isElement(this._config.parent)) {
            parent = this._config.parent;
            if (typeof this._config.parent.jquery !== "undefined") {
              parent = this._config.parent[0];
            }
          } else {
            parent = document.querySelector(this._config.parent);
          }
          var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
          var children = [].slice.call(parent.querySelectorAll(selector));
          $__default["default"](children).each(function(i, element) {
            _this3._addAriaAndCollapsedClass(Collapse2._getTargetFromElement(element), [element]);
          });
          return parent;
        };
        _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
          var isOpen = $__default["default"](element).hasClass(CLASS_NAME_SHOW$6);
          if (triggerArray.length) {
            $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr("aria-expanded", isOpen);
          }
        };
        Collapse2._getTargetFromElement = function _getTargetFromElement(element) {
          var selector = Util.getSelectorFromElement(element);
          return selector ? document.querySelector(selector) : null;
        };
        Collapse2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var $element = $__default["default"](this);
            var data = $element.data(DATA_KEY$7);
            var _config = _extends$1({}, Default$6, $element.data(), typeof config === "object" && config ? config : {});
            if (!data && _config.toggle && typeof config === "string" && /show|hide/.test(config)) {
              _config.toggle = false;
            }
            if (!data) {
              data = new Collapse2(this, _config);
              $element.data(DATA_KEY$7, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        };
        _createClass(Collapse2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$7;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$6;
          }
        }]);
        return Collapse2;
      })();
      $__default["default"](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
        if (event.currentTarget.tagName === "A") {
          event.preventDefault();
        }
        var $trigger = $__default["default"](this);
        var selector = Util.getSelectorFromElement(this);
        var selectors = [].slice.call(document.querySelectorAll(selector));
        $__default["default"](selectors).each(function() {
          var $target = $__default["default"](this);
          var data = $target.data(DATA_KEY$7);
          var config = data ? "toggle" : $trigger.data();
          Collapse._jQueryInterface.call($target, config);
        });
      });
      $__default["default"].fn[NAME$7] = Collapse._jQueryInterface;
      $__default["default"].fn[NAME$7].Constructor = Collapse;
      $__default["default"].fn[NAME$7].noConflict = function() {
        $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
        return Collapse._jQueryInterface;
      };
      var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
      var timeoutDuration = (function() {
        var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
        for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
          if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
            return 1;
          }
        }
        return 0;
      })();
      function microtaskDebounce(fn) {
        var called = false;
        return function() {
          if (called) {
            return;
          }
          called = true;
          window.Promise.resolve().then(function() {
            called = false;
            fn();
          });
        };
      }
      function taskDebounce(fn) {
        var scheduled = false;
        return function() {
          if (!scheduled) {
            scheduled = true;
            setTimeout(function() {
              scheduled = false;
              fn();
            }, timeoutDuration);
          }
        };
      }
      var supportsMicroTasks = isBrowser && window.Promise;
      var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
      function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
      }
      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        }
        var window2 = element.ownerDocument.defaultView;
        var css = window2.getComputedStyle(element, null);
        return property ? css[property] : css;
      }
      function getParentNode(element) {
        if (element.nodeName === "HTML") {
          return element;
        }
        return element.parentNode || element.host;
      }
      function getScrollParent(element) {
        if (!element) {
          return document.body;
        }
        switch (element.nodeName) {
          case "HTML":
          case "BODY":
            return element.ownerDocument.body;
          case "#document":
            return element.body;
        }
        var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
        if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
          return element;
        }
        return getScrollParent(getParentNode(element));
      }
      function getReferenceNode(reference) {
        return reference && reference.referenceNode ? reference.referenceNode : reference;
      }
      var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
      var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
      function isIE(version) {
        if (version === 11) {
          return isIE11;
        }
        if (version === 10) {
          return isIE10;
        }
        return isIE11 || isIE10;
      }
      function getOffsetParent(element) {
        if (!element) {
          return document.documentElement;
        }
        var noOffsetParent = isIE(10) ? document.body : null;
        var offsetParent = element.offsetParent || null;
        while (offsetParent === noOffsetParent && element.nextElementSibling) {
          offsetParent = (element = element.nextElementSibling).offsetParent;
        }
        var nodeName = offsetParent && offsetParent.nodeName;
        if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
          return element ? element.ownerDocument.documentElement : document.documentElement;
        }
        if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
          return getOffsetParent(offsetParent);
        }
        return offsetParent;
      }
      function isOffsetContainer(element) {
        var nodeName = element.nodeName;
        if (nodeName === "BODY") {
          return false;
        }
        return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
      }
      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }
        return node;
      }
      function findCommonOffsetParent(element1, element2) {
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return document.documentElement;
        }
        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1;
        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer;
        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }
          return getOffsetParent(commonAncestorContainer);
        }
        var element1root = getRoot(element1);
        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }
      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
        var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
        var nodeName = element.nodeName;
        if (nodeName === "BODY" || nodeName === "HTML") {
          var html = element.ownerDocument.documentElement;
          var scrollingElement = element.ownerDocument.scrollingElement || html;
          return scrollingElement[upperSide];
        }
        return element[upperSide];
      }
      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var scrollTop = getScroll(element, "top");
        var scrollLeft = getScroll(element, "left");
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }
      function getBordersSize(styles, axis) {
        var sideA = axis === "x" ? "Left" : "Top";
        var sideB = sideA === "Left" ? "Right" : "Bottom";
        return parseFloat(styles["border" + sideA + "Width"]) + parseFloat(styles["border" + sideB + "Width"]);
      }
      function getSize(axis, body, html, computedStyle) {
        return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
      }
      function getWindowSizes(document2) {
        var body = document2.body;
        var html = document2.documentElement;
        var computedStyle = isIE(10) && getComputedStyle(html);
        return {
          height: getSize("Height", body, html, computedStyle),
          width: getSize("Width", body, html, computedStyle)
        };
      }
      var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      var createClass = /* @__PURE__ */ (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      var defineProperty = function(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      };
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function getClientRect(offsets) {
        return _extends({}, offsets, {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }
      function getBoundingClientRect(element) {
        var rect = {};
        try {
          if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, "top");
            var scrollLeft = getScroll(element, "left");
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } else {
            rect = element.getBoundingClientRect();
          }
        } catch (e) {
        }
        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        };
        var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
        var width = sizes.width || element.clientWidth || result.width;
        var height = sizes.height || element.clientHeight || result.height;
        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height;
        if (horizScrollbar || vertScrollbar) {
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, "x");
          vertScrollbar -= getBordersSize(styles, "y");
          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }
        return getClientRect(result);
      }
      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var isIE102 = isIE(10);
        var isHTML = parent.nodeName === "HTML";
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);
        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = parseFloat(styles.borderTopWidth);
        var borderLeftWidth = parseFloat(styles.borderLeftWidth);
        if (fixedPosition && isHTML) {
          parentRect.top = Math.max(parentRect.top, 0);
          parentRect.left = Math.max(parentRect.left, 0);
        }
        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;
        if (!isIE102 && isHTML) {
          var marginTop = parseFloat(styles.marginTop);
          var marginLeft = parseFloat(styles.marginLeft);
          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft;
          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }
        if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
          offsets = includeScroll(offsets, parent);
        }
        return offsets;
      }
      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var html = element.ownerDocument.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
        var offset2 = {
          top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
          left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
          width,
          height
        };
        return getClientRect(offset2);
      }
      function isFixed(element) {
        var nodeName = element.nodeName;
        if (nodeName === "BODY" || nodeName === "HTML") {
          return false;
        }
        if (getStyleComputedProperty(element, "position") === "fixed") {
          return true;
        }
        var parentNode = getParentNode(element);
        if (!parentNode) {
          return false;
        }
        return isFixed(parentNode);
      }
      function getFixedPositionOffsetParent(element) {
        if (!element || !element.parentElement || isIE()) {
          return document.documentElement;
        }
        var el = element.parentElement;
        while (el && getStyleComputedProperty(el, "transform") === "none") {
          el = el.parentElement;
        }
        return el || document.documentElement;
      }
      function getBoundaries(popper, reference, padding, boundariesElement) {
        var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        var boundaries = { top: 0, left: 0 };
        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
        if (boundariesElement === "viewport") {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        } else {
          var boundariesNode = void 0;
          if (boundariesElement === "scrollParent") {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === "BODY") {
              boundariesNode = popper.ownerDocument.documentElement;
            }
          } else if (boundariesElement === "window") {
            boundariesNode = popper.ownerDocument.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }
          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
          if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
          } else {
            boundaries = offsets;
          }
        }
        padding = padding || 0;
        var isPaddingNumber = typeof padding === "number";
        boundaries.left += isPaddingNumber ? padding : padding.left || 0;
        boundaries.top += isPaddingNumber ? padding : padding.top || 0;
        boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
        boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
        return boundaries;
      }
      function getArea(_ref) {
        var width = _ref.width, height = _ref.height;
        return width * height;
      }
      function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
        var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        if (placement.indexOf("auto") === -1) {
          return placement;
        }
        var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };
        var sortedAreas = Object.keys(rects).map(function(key) {
          return _extends({
            key
          }, rects[key], {
            area: getArea(rects[key])
          });
        }).sort(function(a, b) {
          return b.area - a.area;
        });
        var filteredAreas = sortedAreas.filter(function(_ref2) {
          var width = _ref2.width, height = _ref2.height;
          return width >= popper.clientWidth && height >= popper.clientHeight;
        });
        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
        var variation = placement.split("-")[1];
        return computedPlacement + (variation ? "-" + variation : "");
      }
      function getReferenceOffsets(state, popper, reference) {
        var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
        return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
      }
      function getOuterSizes(element) {
        var window2 = element.ownerDocument.defaultView;
        var styles = window2.getComputedStyle(element);
        var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        var result = {
          width: element.offsetWidth + y,
          height: element.offsetHeight + x
        };
        return result;
      }
      function getOppositePlacement(placement) {
        var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash[matched];
        });
      }
      function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split("-")[0];
        var popperRect = getOuterSizes(popper);
        var popperOffsets = {
          width: popperRect.width,
          height: popperRect.height
        };
        var isHoriz = ["right", "left"].indexOf(placement) !== -1;
        var mainSide = isHoriz ? "top" : "left";
        var secondarySide = isHoriz ? "left" : "top";
        var measurement = isHoriz ? "height" : "width";
        var secondaryMeasurement = !isHoriz ? "height" : "width";
        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
        if (placement === secondarySide) {
          popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
        } else {
          popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
        }
        return popperOffsets;
      }
      function find(arr, check) {
        if (Array.prototype.find) {
          return arr.find(check);
        }
        return arr.filter(check)[0];
      }
      function findIndex(arr, prop, value) {
        if (Array.prototype.findIndex) {
          return arr.findIndex(function(cur) {
            return cur[prop] === value;
          });
        }
        var match = find(arr, function(obj) {
          return obj[prop] === value;
        });
        return arr.indexOf(match);
      }
      function runModifiers(modifiers2, data, ends) {
        var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
        modifiersToRun.forEach(function(modifier) {
          if (modifier["function"]) {
            console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          }
          var fn = modifier["function"] || modifier.fn;
          if (modifier.enabled && isFunction(fn)) {
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
          }
        });
        return data;
      }
      function update() {
        if (this.state.isDestroyed) {
          return;
        }
        var data = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: false,
          offsets: {}
        };
        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
        data.originalPlacement = data.placement;
        data.positionFixed = this.options.positionFixed;
        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
        data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
        data = runModifiers(this.modifiers, data);
        if (!this.state.isCreated) {
          this.state.isCreated = true;
          this.options.onCreate(data);
        } else {
          this.options.onUpdate(data);
        }
      }
      function isModifierEnabled(modifiers2, modifierName) {
        return modifiers2.some(function(_ref) {
          var name = _ref.name, enabled = _ref.enabled;
          return enabled && name === modifierName;
        });
      }
      function getSupportedPropertyName(property) {
        var prefixes = [false, "ms", "Webkit", "Moz", "O"];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var toCheck = prefix ? "" + prefix + upperProp : property;
          if (typeof document.body.style[toCheck] !== "undefined") {
            return toCheck;
          }
        }
        return null;
      }
      function destroy() {
        this.state.isDestroyed = true;
        if (isModifierEnabled(this.modifiers, "applyStyle")) {
          this.popper.removeAttribute("x-placement");
          this.popper.style.position = "";
          this.popper.style.top = "";
          this.popper.style.left = "";
          this.popper.style.right = "";
          this.popper.style.bottom = "";
          this.popper.style.willChange = "";
          this.popper.style[getSupportedPropertyName("transform")] = "";
        }
        this.disableEventListeners();
        if (this.options.removeOnDestroy) {
          this.popper.parentNode.removeChild(this.popper);
        }
        return this;
      }
      function getWindow(element) {
        var ownerDocument = element.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
      }
      function attachToScrollParents(scrollParent, event, callback, scrollParents) {
        var isBody = scrollParent.nodeName === "BODY";
        var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
        target.addEventListener(event, callback, { passive: true });
        if (!isBody) {
          attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }
        scrollParents.push(target);
      }
      function setupEventListeners(reference, options, state, updateBound) {
        state.updateBound = updateBound;
        getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
        var scrollElement = getScrollParent(reference);
        attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
        state.scrollElement = scrollElement;
        state.eventsEnabled = true;
        return state;
      }
      function enableEventListeners() {
        if (!this.state.eventsEnabled) {
          this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
        }
      }
      function removeEventListeners(reference, state) {
        getWindow(reference).removeEventListener("resize", state.updateBound);
        state.scrollParents.forEach(function(target) {
          target.removeEventListener("scroll", state.updateBound);
        });
        state.updateBound = null;
        state.scrollParents = [];
        state.scrollElement = null;
        state.eventsEnabled = false;
        return state;
      }
      function disableEventListeners() {
        if (this.state.eventsEnabled) {
          cancelAnimationFrame(this.scheduleUpdate);
          this.state = removeEventListeners(this.reference, this.state);
        }
      }
      function isNumeric(n) {
        return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
      }
      function setStyles(element, styles) {
        Object.keys(styles).forEach(function(prop) {
          var unit = "";
          if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = "px";
          }
          element.style[prop] = styles[prop] + unit;
        });
      }
      function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(function(prop) {
          var value = attributes[prop];
          if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
          } else {
            element.removeAttribute(prop);
          }
        });
      }
      function applyStyle(data) {
        setStyles(data.instance.popper, data.styles);
        setAttributes(data.instance.popper, data.attributes);
        if (data.arrowElement && Object.keys(data.arrowStyles).length) {
          setStyles(data.arrowElement, data.arrowStyles);
        }
        return data;
      }
      function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
        var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
        var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
        popper.setAttribute("x-placement", placement);
        setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
        return options;
      }
      function getRoundedOffsets(data, shouldRound) {
        var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
        var round = Math.round, floor = Math.floor;
        var noRound = function noRound2(v) {
          return v;
        };
        var referenceWidth = round(reference.width);
        var popperWidth = round(popper.width);
        var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
        var isVariation = data.placement.indexOf("-") !== -1;
        var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
        var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
        var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
        var verticalToInteger = !shouldRound ? noRound : round;
        return {
          left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
          top: verticalToInteger(popper.top),
          bottom: verticalToInteger(popper.bottom),
          right: horizontalToInteger(popper.right)
        };
      }
      var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
      function computeStyle(data, options) {
        var x = options.x, y = options.y;
        var popper = data.offsets.popper;
        var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
          return modifier.name === "applyStyle";
        }).gpuAcceleration;
        if (legacyGpuAccelerationOption !== void 0) {
          console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        }
        var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
        var offsetParent = getOffsetParent(data.instance.popper);
        var offsetParentRect = getBoundingClientRect(offsetParent);
        var styles = {
          position: popper.position
        };
        var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
        var sideA = x === "bottom" ? "top" : "bottom";
        var sideB = y === "right" ? "left" : "right";
        var prefixedProperty = getSupportedPropertyName("transform");
        var left = void 0, top = void 0;
        if (sideA === "bottom") {
          if (offsetParent.nodeName === "HTML") {
            top = -offsetParent.clientHeight + offsets.bottom;
          } else {
            top = -offsetParentRect.height + offsets.bottom;
          }
        } else {
          top = offsets.top;
        }
        if (sideB === "right") {
          if (offsetParent.nodeName === "HTML") {
            left = -offsetParent.clientWidth + offsets.right;
          } else {
            left = -offsetParentRect.width + offsets.right;
          }
        } else {
          left = offsets.left;
        }
        if (gpuAcceleration && prefixedProperty) {
          styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
          styles[sideA] = 0;
          styles[sideB] = 0;
          styles.willChange = "transform";
        } else {
          var invertTop = sideA === "bottom" ? -1 : 1;
          var invertLeft = sideB === "right" ? -1 : 1;
          styles[sideA] = top * invertTop;
          styles[sideB] = left * invertLeft;
          styles.willChange = sideA + ", " + sideB;
        }
        var attributes = {
          "x-placement": data.placement
        };
        data.attributes = _extends({}, attributes, data.attributes);
        data.styles = _extends({}, styles, data.styles);
        data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
        return data;
      }
      function isModifierRequired(modifiers2, requestingName, requestedName) {
        var requesting = find(modifiers2, function(_ref) {
          var name = _ref.name;
          return name === requestingName;
        });
        var isRequired = !!requesting && modifiers2.some(function(modifier) {
          return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });
        if (!isRequired) {
          var _requesting = "`" + requestingName + "`";
          var requested = "`" + requestedName + "`";
          console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
        }
        return isRequired;
      }
      function arrow(data, options) {
        var _data$offsets$arrow;
        if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
          return data;
        }
        var arrowElement = options.element;
        if (typeof arrowElement === "string") {
          arrowElement = data.instance.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return data;
          }
        } else {
          if (!data.instance.popper.contains(arrowElement)) {
            console.warn("WARNING: `arrow.element` must be child of its popper element!");
            return data;
          }
        }
        var placement = data.placement.split("-")[0];
        var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
        var isVertical = ["left", "right"].indexOf(placement) !== -1;
        var len = isVertical ? "height" : "width";
        var sideCapitalized = isVertical ? "Top" : "Left";
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? "left" : "top";
        var opSide = isVertical ? "bottom" : "right";
        var arrowElementSize = getOuterSizes(arrowElement)[len];
        if (reference[opSide] - arrowElementSize < popper[side]) {
          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
        }
        if (reference[side] + arrowElementSize > popper[opSide]) {
          data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
        }
        data.offsets.popper = getClientRect(data.offsets.popper);
        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
        var css = getStyleComputedProperty(data.instance.popper);
        var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
        var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
        var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
        data.arrowElement = arrowElement;
        data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
        return data;
      }
      function getOppositeVariation(variation) {
        if (variation === "end") {
          return "start";
        } else if (variation === "start") {
          return "end";
        }
        return variation;
      }
      var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
      var validPlacements = placements.slice(3);
      function clockwise(placement) {
        var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var index = validPlacements.indexOf(placement);
        var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
        return counter ? arr.reverse() : arr;
      }
      var BEHAVIORS = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
      };
      function flip(data, options) {
        if (isModifierEnabled(data.instance.modifiers, "inner")) {
          return data;
        }
        if (data.flipped && data.placement === data.originalPlacement) {
          return data;
        }
        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
        var placement = data.placement.split("-")[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split("-")[1] || "";
        var flipOrder = [];
        switch (options.behavior) {
          case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;
          case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
          case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
          default:
            flipOrder = options.behavior;
        }
        flipOrder.forEach(function(step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }
          placement = data.placement.split("-")[0];
          placementOpposite = getOppositePlacement(placement);
          var popperOffsets = data.offsets.popper;
          var refOffsets = data.offsets.reference;
          var floor = Math.floor;
          var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
          var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
          var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
          var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
          var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
          var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
          var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
          var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
          var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
          var flippedVariation = flippedVariationByRef || flippedVariationByContent;
          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            data.flipped = true;
            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? "-" + variation : "");
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, "flip");
          }
        });
        return data;
      }
      function keepTogether(data) {
        var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
        var placement = data.placement.split("-")[0];
        var floor = Math.floor;
        var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
        var side = isVertical ? "right" : "bottom";
        var opSide = isVertical ? "left" : "top";
        var measurement = isVertical ? "width" : "height";
        if (popper[side] < floor(reference[opSide])) {
          data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
        }
        if (popper[opSide] > floor(reference[side])) {
          data.offsets.popper[opSide] = floor(reference[side]);
        }
        return data;
      }
      function toValue(str, measurement, popperOffsets, referenceOffsets) {
        var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
        var value = +split[1];
        var unit = split[2];
        if (!value) {
          return str;
        }
        if (unit.indexOf("%") === 0) {
          var element = void 0;
          switch (unit) {
            case "%p":
              element = popperOffsets;
              break;
            case "%":
            case "%r":
            default:
              element = referenceOffsets;
          }
          var rect = getClientRect(element);
          return rect[measurement] / 100 * value;
        } else if (unit === "vh" || unit === "vw") {
          var size = void 0;
          if (unit === "vh") {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          }
          return size / 100 * value;
        } else {
          return value;
        }
      }
      function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [0, 0];
        var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
        var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
          return frag.trim();
        });
        var divider = fragments.indexOf(find(fragments, function(frag) {
          return frag.search(/,|\s/) !== -1;
        }));
        if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
          console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        }
        var splitRegex = /\s*,\s*|\s+/;
        var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
        ops = ops.map(function(op, index) {
          var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
          var mergeWithPrevious = false;
          return op.reduce(function(a, b) {
            if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
              a[a.length - 1] = b;
              mergeWithPrevious = true;
              return a;
            } else if (mergeWithPrevious) {
              a[a.length - 1] += b;
              mergeWithPrevious = false;
              return a;
            } else {
              return a.concat(b);
            }
          }, []).map(function(str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
          });
        });
        ops.forEach(function(op, index) {
          op.forEach(function(frag, index2) {
            if (isNumeric(frag)) {
              offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
            }
          });
        });
        return offsets;
      }
      function offset(data, _ref) {
        var offset2 = _ref.offset;
        var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
        var basePlacement = placement.split("-")[0];
        var offsets = void 0;
        if (isNumeric(+offset2)) {
          offsets = [+offset2, 0];
        } else {
          offsets = parseOffset(offset2, popper, reference, basePlacement);
        }
        if (basePlacement === "left") {
          popper.top += offsets[0];
          popper.left -= offsets[1];
        } else if (basePlacement === "right") {
          popper.top += offsets[0];
          popper.left += offsets[1];
        } else if (basePlacement === "top") {
          popper.left += offsets[0];
          popper.top -= offsets[1];
        } else if (basePlacement === "bottom") {
          popper.left += offsets[0];
          popper.top += offsets[1];
        }
        data.popper = popper;
        return data;
      }
      function preventOverflow(data, options) {
        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
        if (data.instance.reference === boundariesElement) {
          boundariesElement = getOffsetParent(boundariesElement);
        }
        var transformProp = getSupportedPropertyName("transform");
        var popperStyles = data.instance.popper.style;
        var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
        popperStyles.top = "";
        popperStyles.left = "";
        popperStyles[transformProp] = "";
        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
        popperStyles.top = top;
        popperStyles.left = left;
        popperStyles[transformProp] = transform;
        options.boundaries = boundaries;
        var order = options.priority;
        var popper = data.offsets.popper;
        var check = {
          primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
              value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty({}, placement, value);
          },
          secondary: function secondary(placement) {
            var mainSide = placement === "right" ? "left" : "top";
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
              value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
            }
            return defineProperty({}, mainSide, value);
          }
        };
        order.forEach(function(placement) {
          var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
          popper = _extends({}, popper, check[side](placement));
        });
        data.offsets.popper = popper;
        return data;
      }
      function shift(data) {
        var placement = data.placement;
        var basePlacement = placement.split("-")[0];
        var shiftvariation = placement.split("-")[1];
        if (shiftvariation) {
          var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
          var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
          var side = isVertical ? "left" : "top";
          var measurement = isVertical ? "width" : "height";
          var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
          };
          data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
        }
        return data;
      }
      function hide(data) {
        if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
          return data;
        }
        var refRect = data.offsets.reference;
        var bound = find(data.instance.modifiers, function(modifier) {
          return modifier.name === "preventOverflow";
        }).boundaries;
        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
          if (data.hide === true) {
            return data;
          }
          data.hide = true;
          data.attributes["x-out-of-boundaries"] = "";
        } else {
          if (data.hide === false) {
            return data;
          }
          data.hide = false;
          data.attributes["x-out-of-boundaries"] = false;
        }
        return data;
      }
      function inner(data) {
        var placement = data.placement;
        var basePlacement = placement.split("-")[0];
        var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
        var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
        var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
        popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
        data.placement = getOppositePlacement(placement);
        data.offsets.popper = getClientRect(popper);
        return data;
      }
      var modifiers = {
        /**
         * Modifier used to shift the popper on the start or end of its reference
         * element.<br />
         * It will read the variation of the `placement` property.<br />
         * It can be one either `-end` or `-start`.
         * @memberof modifiers
         * @inner
         */
        shift: {
          /** @prop {number} order=100 - Index used to define the order of execution */
          order: 100,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: shift
        },
        /**
         * The `offset` modifier can shift your popper on both its axis.
         *
         * It accepts the following units:
         * - `px` or unit-less, interpreted as pixels
         * - `%` or `%r`, percentage relative to the length of the reference element
         * - `%p`, percentage relative to the length of the popper element
         * - `vw`, CSS viewport width unit
         * - `vh`, CSS viewport height unit
         *
         * For length is intended the main axis relative to the placement of the popper.<br />
         * This means that if the placement is `top` or `bottom`, the length will be the
         * `width`. In case of `left` or `right`, it will be the `height`.
         *
         * You can provide a single value (as `Number` or `String`), or a pair of values
         * as `String` divided by a comma or one (or more) white spaces.<br />
         * The latter is a deprecated method because it leads to confusion and will be
         * removed in v2.<br />
         * Additionally, it accepts additions and subtractions between different units.
         * Note that multiplications and divisions aren't supported.
         *
         * Valid examples are:
         * ```
         * 10
         * '10%'
         * '10, 10'
         * '10%, 10'
         * '10 + 10%'
         * '10 - 5vh + 3%'
         * '-10px + 5vh, 5px - 6%'
         * ```
         * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
         * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
         * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
         *
         * @memberof modifiers
         * @inner
         */
        offset: {
          /** @prop {number} order=200 - Index used to define the order of execution */
          order: 200,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: offset,
          /** @prop {Number|String} offset=0
           * The offset value as described in the modifier description
           */
          offset: 0
        },
        /**
         * Modifier used to prevent the popper from being positioned outside the boundary.
         *
         * A scenario exists where the reference itself is not within the boundaries.<br />
         * We can say it has "escaped the boundaries" — or just "escaped".<br />
         * In this case we need to decide whether the popper should either:
         *
         * - detach from the reference and remain "trapped" in the boundaries, or
         * - if it should ignore the boundary and "escape with its reference"
         *
         * When `escapeWithReference` is set to`true` and reference is completely
         * outside its boundaries, the popper will overflow (or completely leave)
         * the boundaries in order to remain attached to the edge of the reference.
         *
         * @memberof modifiers
         * @inner
         */
        preventOverflow: {
          /** @prop {number} order=300 - Index used to define the order of execution */
          order: 300,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: preventOverflow,
          /**
           * @prop {Array} [priority=['left','right','top','bottom']]
           * Popper will try to prevent overflow following these priorities by default,
           * then, it could overflow on the left and on top of the `boundariesElement`
           */
          priority: ["left", "right", "top", "bottom"],
          /**
           * @prop {number} padding=5
           * Amount of pixel used to define a minimum distance between the boundaries
           * and the popper. This makes sure the popper always has a little padding
           * between the edges of its container
           */
          padding: 5,
          /**
           * @prop {String|HTMLElement} boundariesElement='scrollParent'
           * Boundaries used by the modifier. Can be `scrollParent`, `window`,
           * `viewport` or any DOM element.
           */
          boundariesElement: "scrollParent"
        },
        /**
         * Modifier used to make sure the reference and its popper stay near each other
         * without leaving any gap between the two. Especially useful when the arrow is
         * enabled and you want to ensure that it points to its reference element.
         * It cares only about the first axis. You can still have poppers with margin
         * between the popper and its reference element.
         * @memberof modifiers
         * @inner
         */
        keepTogether: {
          /** @prop {number} order=400 - Index used to define the order of execution */
          order: 400,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: keepTogether
        },
        /**
         * This modifier is used to move the `arrowElement` of the popper to make
         * sure it is positioned between the reference element and its popper element.
         * It will read the outer size of the `arrowElement` node to detect how many
         * pixels of conjunction are needed.
         *
         * It has no effect if no `arrowElement` is provided.
         * @memberof modifiers
         * @inner
         */
        arrow: {
          /** @prop {number} order=500 - Index used to define the order of execution */
          order: 500,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: arrow,
          /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
          element: "[x-arrow]"
        },
        /**
         * Modifier used to flip the popper's placement when it starts to overlap its
         * reference element.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         *
         * **NOTE:** this modifier will interrupt the current update cycle and will
         * restart it if it detects the need to flip the placement.
         * @memberof modifiers
         * @inner
         */
        flip: {
          /** @prop {number} order=600 - Index used to define the order of execution */
          order: 600,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: flip,
          /**
           * @prop {String|Array} behavior='flip'
           * The behavior used to change the popper's placement. It can be one of
           * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
           * placements (with optional variations)
           */
          behavior: "flip",
          /**
           * @prop {number} padding=5
           * The popper will flip if it hits the edges of the `boundariesElement`
           */
          padding: 5,
          /**
           * @prop {String|HTMLElement} boundariesElement='viewport'
           * The element which will define the boundaries of the popper position.
           * The popper will never be placed outside of the defined boundaries
           * (except if `keepTogether` is enabled)
           */
          boundariesElement: "viewport",
          /**
           * @prop {Boolean} flipVariations=false
           * The popper will switch placement variation between `-start` and `-end` when
           * the reference element overlaps its boundaries.
           *
           * The original placement should have a set variation.
           */
          flipVariations: false,
          /**
           * @prop {Boolean} flipVariationsByContent=false
           * The popper will switch placement variation between `-start` and `-end` when
           * the popper element overlaps its reference boundaries.
           *
           * The original placement should have a set variation.
           */
          flipVariationsByContent: false
        },
        /**
         * Modifier used to make the popper flow toward the inner of the reference element.
         * By default, when this modifier is disabled, the popper will be placed outside
         * the reference element.
         * @memberof modifiers
         * @inner
         */
        inner: {
          /** @prop {number} order=700 - Index used to define the order of execution */
          order: 700,
          /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
          enabled: false,
          /** @prop {ModifierFn} */
          fn: inner
        },
        /**
         * Modifier used to hide the popper when its reference element is outside of the
         * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
         * be used to hide with a CSS selector the popper when its reference is
         * out of boundaries.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         * @memberof modifiers
         * @inner
         */
        hide: {
          /** @prop {number} order=800 - Index used to define the order of execution */
          order: 800,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: hide
        },
        /**
         * Computes the style that will be applied to the popper element to gets
         * properly positioned.
         *
         * Note that this modifier will not touch the DOM, it just prepares the styles
         * so that `applyStyle` modifier can apply it. This separation is useful
         * in case you need to replace `applyStyle` with a custom implementation.
         *
         * This modifier has `850` as `order` value to maintain backward compatibility
         * with previous versions of Popper.js. Expect the modifiers ordering method
         * to change in future major versions of the library.
         *
         * @memberof modifiers
         * @inner
         */
        computeStyle: {
          /** @prop {number} order=850 - Index used to define the order of execution */
          order: 850,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: computeStyle,
          /**
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3D transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties
           */
          gpuAcceleration: true,
          /**
           * @prop {string} [x='bottom']
           * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
           * Change this if your popper should grow in a direction different from `bottom`
           */
          x: "bottom",
          /**
           * @prop {string} [x='left']
           * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
           * Change this if your popper should grow in a direction different from `right`
           */
          y: "right"
        },
        /**
         * Applies the computed styles to the popper element.
         *
         * All the DOM manipulations are limited to this modifier. This is useful in case
         * you want to integrate Popper.js inside a framework or view library and you
         * want to delegate all the DOM manipulations to it.
         *
         * Note that if you disable this modifier, you must make sure the popper element
         * has its position set to `absolute` before Popper.js can do its work!
         *
         * Just disable this modifier and define your own to achieve the desired effect.
         *
         * @memberof modifiers
         * @inner
         */
        applyStyle: {
          /** @prop {number} order=900 - Index used to define the order of execution */
          order: 900,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: applyStyle,
          /** @prop {Function} */
          onLoad: applyStyleOnLoad,
          /**
           * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3D transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties
           */
          gpuAcceleration: void 0
        }
      };
      var Defaults = {
        /**
         * Popper's placement.
         * @prop {Popper.placements} placement='bottom'
         */
        placement: "bottom",
        /**
         * Set this to true if you want popper to position it self in 'fixed' mode
         * @prop {Boolean} positionFixed=false
         */
        positionFixed: false,
        /**
         * Whether events (resize, scroll) are initially enabled.
         * @prop {Boolean} eventsEnabled=true
         */
        eventsEnabled: true,
        /**
         * Set to true if you want to automatically remove the popper when
         * you call the `destroy` method.
         * @prop {Boolean} removeOnDestroy=false
         */
        removeOnDestroy: false,
        /**
         * Callback called when the popper is created.<br />
         * By default, it is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onCreate}
         */
        onCreate: function onCreate() {
        },
        /**
         * Callback called when the popper is updated. This callback is not called
         * on the initialization/creation of the popper, but only on subsequent
         * updates.<br />
         * By default, it is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onUpdate}
         */
        onUpdate: function onUpdate() {
        },
        /**
         * List of modifiers used to modify the offsets before they are applied to the popper.
         * They provide most of the functionalities of Popper.js.
         * @prop {modifiers}
         */
        modifiers
      };
      var Popper = (function() {
        function Popper2(reference, popper) {
          var _this = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          classCallCheck(this, Popper2);
          this.scheduleUpdate = function() {
            return requestAnimationFrame(_this.update);
          };
          this.update = debounce(this.update.bind(this));
          this.options = _extends({}, Popper2.Defaults, options);
          this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
          };
          this.reference = reference && reference.jquery ? reference[0] : reference;
          this.popper = popper && popper.jquery ? popper[0] : popper;
          this.options.modifiers = {};
          Object.keys(_extends({}, Popper2.Defaults.modifiers, options.modifiers)).forEach(function(name) {
            _this.options.modifiers[name] = _extends({}, Popper2.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
          });
          this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
            return _extends({
              name
            }, _this.options.modifiers[name]);
          }).sort(function(a, b) {
            return a.order - b.order;
          });
          this.modifiers.forEach(function(modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
              modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
          });
          this.update();
          var eventsEnabled = this.options.eventsEnabled;
          if (eventsEnabled) {
            this.enableEventListeners();
          }
          this.state.eventsEnabled = eventsEnabled;
        }
        createClass(Popper2, [{
          key: "update",
          value: function update$$1() {
            return update.call(this);
          }
        }, {
          key: "destroy",
          value: function destroy$$1() {
            return destroy.call(this);
          }
        }, {
          key: "enableEventListeners",
          value: function enableEventListeners$$1() {
            return enableEventListeners.call(this);
          }
        }, {
          key: "disableEventListeners",
          value: function disableEventListeners$$1() {
            return disableEventListeners.call(this);
          }
          /**
           * Schedules an update. It will run on the next UI update available.
           * @method scheduleUpdate
           * @memberof Popper
           */
          /**
           * Collection of utilities useful when writing custom modifiers.
           * Starting from version 1.7, this method is available only if you
           * include `popper-utils.js` before `popper.js`.
           *
           * **DEPRECATION**: This way to access PopperUtils is deprecated
           * and will be removed in v2! Use the PopperUtils module directly instead.
           * Due to the high instability of the methods contained in Utils, we can't
           * guarantee them to follow semver. Use them at your own risk!
           * @static
           * @private
           * @type {Object}
           * @deprecated since version 1.8
           * @member Utils
           * @memberof Popper
           */
        }]);
        return Popper2;
      })();
      Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
      Popper.placements = placements;
      Popper.Defaults = Defaults;
      var Popper$1 = Popper;
      var NAME$6 = "dropdown";
      var VERSION$6 = "4.6.2";
      var DATA_KEY$6 = "bs.dropdown";
      var EVENT_KEY$6 = "." + DATA_KEY$6;
      var DATA_API_KEY$3 = ".data-api";
      var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
      var ESCAPE_KEYCODE$1 = 27;
      var SPACE_KEYCODE = 32;
      var TAB_KEYCODE = 9;
      var ARROW_UP_KEYCODE = 38;
      var ARROW_DOWN_KEYCODE = 40;
      var RIGHT_MOUSE_BUTTON_WHICH = 3;
      var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE$1);
      var CLASS_NAME_DISABLED$1 = "disabled";
      var CLASS_NAME_SHOW$5 = "show";
      var CLASS_NAME_DROPUP = "dropup";
      var CLASS_NAME_DROPRIGHT = "dropright";
      var CLASS_NAME_DROPLEFT = "dropleft";
      var CLASS_NAME_MENURIGHT = "dropdown-menu-right";
      var CLASS_NAME_POSITION_STATIC = "position-static";
      var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
      var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
      var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
      var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
      var EVENT_CLICK = "click" + EVENT_KEY$6;
      var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
      var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
      var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
      var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
      var SELECTOR_FORM_CHILD = ".dropdown form";
      var SELECTOR_MENU = ".dropdown-menu";
      var SELECTOR_NAVBAR_NAV = ".navbar-nav";
      var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
      var PLACEMENT_TOP = "top-start";
      var PLACEMENT_TOPEND = "top-end";
      var PLACEMENT_BOTTOM = "bottom-start";
      var PLACEMENT_BOTTOMEND = "bottom-end";
      var PLACEMENT_RIGHT = "right-start";
      var PLACEMENT_LEFT = "left-start";
      var Default$5 = {
        offset: 0,
        flip: true,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
      };
      var DefaultType$5 = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
      };
      var Dropdown = /* @__PURE__ */ (function() {
        function Dropdown2(element, config) {
          this._element = element;
          this._popper = null;
          this._config = this._getConfig(config);
          this._menu = this._getMenuElement();
          this._inNavbar = this._detectNavbar();
          this._addEventListeners();
        }
        var _proto = Dropdown2.prototype;
        _proto.toggle = function toggle() {
          if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
            return;
          }
          var isActive = $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5);
          Dropdown2._clearMenus();
          if (isActive) {
            return;
          }
          this.show(true);
        };
        _proto.show = function show(usePopper) {
          if (usePopper === void 0) {
            usePopper = false;
          }
          if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
            return;
          }
          var relatedTarget = {
            relatedTarget: this._element
          };
          var showEvent = $__default["default"].Event(EVENT_SHOW$3, relatedTarget);
          var parent = Dropdown2._getParentFromElement(this._element);
          $__default["default"](parent).trigger(showEvent);
          if (showEvent.isDefaultPrevented()) {
            return;
          }
          if (!this._inNavbar && usePopper) {
            if (typeof Popper$1 === "undefined") {
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            }
            var referenceElement = this._element;
            if (this._config.reference === "parent") {
              referenceElement = parent;
            } else if (Util.isElement(this._config.reference)) {
              referenceElement = this._config.reference;
              if (typeof this._config.reference.jquery !== "undefined") {
                referenceElement = this._config.reference[0];
              }
            }
            if (this._config.boundary !== "scrollParent") {
              $__default["default"](parent).addClass(CLASS_NAME_POSITION_STATIC);
            }
            this._popper = new Popper$1(referenceElement, this._menu, this._getPopperConfig());
          }
          if ("ontouchstart" in document.documentElement && $__default["default"](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
            $__default["default"](document.body).children().on("mouseover", null, $__default["default"].noop);
          }
          this._element.focus();
          this._element.setAttribute("aria-expanded", true);
          $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
          $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_SHOWN$3, relatedTarget));
        };
        _proto.hide = function hide2() {
          if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || !$__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
            return;
          }
          var relatedTarget = {
            relatedTarget: this._element
          };
          var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
          var parent = Dropdown2._getParentFromElement(this._element);
          $__default["default"](parent).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            return;
          }
          if (this._popper) {
            this._popper.destroy();
          }
          $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
          $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
        };
        _proto.dispose = function dispose() {
          $__default["default"].removeData(this._element, DATA_KEY$6);
          $__default["default"](this._element).off(EVENT_KEY$6);
          this._element = null;
          this._menu = null;
          if (this._popper !== null) {
            this._popper.destroy();
            this._popper = null;
          }
        };
        _proto.update = function update2() {
          this._inNavbar = this._detectNavbar();
          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        };
        _proto._addEventListeners = function _addEventListeners() {
          var _this = this;
          $__default["default"](this._element).on(EVENT_CLICK, function(event) {
            event.preventDefault();
            event.stopPropagation();
            _this.toggle();
          });
        };
        _proto._getConfig = function _getConfig(config) {
          config = _extends$1({}, this.constructor.Default, $__default["default"](this._element).data(), config);
          Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
          return config;
        };
        _proto._getMenuElement = function _getMenuElement() {
          if (!this._menu) {
            var parent = Dropdown2._getParentFromElement(this._element);
            if (parent) {
              this._menu = parent.querySelector(SELECTOR_MENU);
            }
          }
          return this._menu;
        };
        _proto._getPlacement = function _getPlacement() {
          var $parentDropdown = $__default["default"](this._element.parentNode);
          var placement = PLACEMENT_BOTTOM;
          if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
            placement = $__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
          } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
            placement = PLACEMENT_RIGHT;
          } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
            placement = PLACEMENT_LEFT;
          } else if ($__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
            placement = PLACEMENT_BOTTOMEND;
          }
          return placement;
        };
        _proto._detectNavbar = function _detectNavbar() {
          return $__default["default"](this._element).closest(".navbar").length > 0;
        };
        _proto._getOffset = function _getOffset() {
          var _this2 = this;
          var offset2 = {};
          if (typeof this._config.offset === "function") {
            offset2.fn = function(data) {
              data.offsets = _extends$1({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
              return data;
            };
          } else {
            offset2.offset = this._config.offset;
          }
          return offset2;
        };
        _proto._getPopperConfig = function _getPopperConfig() {
          var popperConfig = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };
          if (this._config.display === "static") {
            popperConfig.modifiers.applyStyle = {
              enabled: false
            };
          }
          return _extends$1({}, popperConfig, this._config.popperConfig);
        };
        Dropdown2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var data = $__default["default"](this).data(DATA_KEY$6);
            var _config = typeof config === "object" ? config : null;
            if (!data) {
              data = new Dropdown2(this, _config);
              $__default["default"](this).data(DATA_KEY$6, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        };
        Dropdown2._clearMenus = function _clearMenus(event) {
          if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === "keyup" && event.which !== TAB_KEYCODE)) {
            return;
          }
          var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));
          for (var i = 0, len = toggles.length; i < len; i++) {
            var parent = Dropdown2._getParentFromElement(toggles[i]);
            var context = $__default["default"](toggles[i]).data(DATA_KEY$6);
            var relatedTarget = {
              relatedTarget: toggles[i]
            };
            if (event && event.type === "click") {
              relatedTarget.clickEvent = event;
            }
            if (!context) {
              continue;
            }
            var dropdownMenu = context._menu;
            if (!$__default["default"](parent).hasClass(CLASS_NAME_SHOW$5)) {
              continue;
            }
            if (event && (event.type === "click" && /input|textarea/i.test(event.target.tagName) || event.type === "keyup" && event.which === TAB_KEYCODE) && $__default["default"].contains(parent, event.target)) {
              continue;
            }
            var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
            $__default["default"](parent).trigger(hideEvent);
            if (hideEvent.isDefaultPrevented()) {
              continue;
            }
            if ("ontouchstart" in document.documentElement) {
              $__default["default"](document.body).children().off("mouseover", null, $__default["default"].noop);
            }
            toggles[i].setAttribute("aria-expanded", "false");
            if (context._popper) {
              context._popper.destroy();
            }
            $__default["default"](dropdownMenu).removeClass(CLASS_NAME_SHOW$5);
            $__default["default"](parent).removeClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
          }
        };
        Dropdown2._getParentFromElement = function _getParentFromElement(element) {
          var parent;
          var selector = Util.getSelectorFromElement(element);
          if (selector) {
            parent = document.querySelector(selector);
          }
          return parent || element.parentNode;
        };
        Dropdown2._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
          if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE$1 && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default["default"](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
            return;
          }
          if (this.disabled || $__default["default"](this).hasClass(CLASS_NAME_DISABLED$1)) {
            return;
          }
          var parent = Dropdown2._getParentFromElement(this);
          var isActive = $__default["default"](parent).hasClass(CLASS_NAME_SHOW$5);
          if (!isActive && event.which === ESCAPE_KEYCODE$1) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          if (!isActive || event.which === ESCAPE_KEYCODE$1 || event.which === SPACE_KEYCODE) {
            if (event.which === ESCAPE_KEYCODE$1) {
              $__default["default"](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger("focus");
            }
            $__default["default"](this).trigger("click");
            return;
          }
          var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function(item) {
            return $__default["default"](item).is(":visible");
          });
          if (items.length === 0) {
            return;
          }
          var index = items.indexOf(event.target);
          if (event.which === ARROW_UP_KEYCODE && index > 0) {
            index--;
          }
          if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
            index++;
          }
          if (index < 0) {
            index = 0;
          }
          items[index].focus();
        };
        _createClass(Dropdown2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$6;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$5;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$5;
          }
        }]);
        return Dropdown2;
      })();
      $__default["default"](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$2 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
        event.preventDefault();
        event.stopPropagation();
        Dropdown._jQueryInterface.call($__default["default"](this), "toggle");
      }).on(EVENT_CLICK_DATA_API$2, SELECTOR_FORM_CHILD, function(e) {
        e.stopPropagation();
      });
      $__default["default"].fn[NAME$6] = Dropdown._jQueryInterface;
      $__default["default"].fn[NAME$6].Constructor = Dropdown;
      $__default["default"].fn[NAME$6].noConflict = function() {
        $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
        return Dropdown._jQueryInterface;
      };
      var NAME$5 = "modal";
      var VERSION$5 = "4.6.2";
      var DATA_KEY$5 = "bs.modal";
      var EVENT_KEY$5 = "." + DATA_KEY$5;
      var DATA_API_KEY$2 = ".data-api";
      var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
      var ESCAPE_KEYCODE = 27;
      var CLASS_NAME_SCROLLABLE = "modal-dialog-scrollable";
      var CLASS_NAME_SCROLLBAR_MEASURER = "modal-scrollbar-measure";
      var CLASS_NAME_BACKDROP = "modal-backdrop";
      var CLASS_NAME_OPEN = "modal-open";
      var CLASS_NAME_FADE$4 = "fade";
      var CLASS_NAME_SHOW$4 = "show";
      var CLASS_NAME_STATIC = "modal-static";
      var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
      var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
      var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
      var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
      var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
      var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
      var EVENT_RESIZE = "resize" + EVENT_KEY$5;
      var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$5;
      var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
      var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
      var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
      var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
      var SELECTOR_DIALOG = ".modal-dialog";
      var SELECTOR_MODAL_BODY = ".modal-body";
      var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="modal"]';
      var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="modal"]';
      var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
      var SELECTOR_STICKY_CONTENT = ".sticky-top";
      var Default$4 = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
      };
      var DefaultType$4 = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      };
      var Modal = /* @__PURE__ */ (function() {
        function Modal2(element, config) {
          this._config = this._getConfig(config);
          this._element = element;
          this._dialog = element.querySelector(SELECTOR_DIALOG);
          this._backdrop = null;
          this._isShown = false;
          this._isBodyOverflowing = false;
          this._ignoreBackdropClick = false;
          this._isTransitioning = false;
          this._scrollbarWidth = 0;
        }
        var _proto = Modal2.prototype;
        _proto.toggle = function toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        };
        _proto.show = function show(relatedTarget) {
          var _this = this;
          if (this._isShown || this._isTransitioning) {
            return;
          }
          var showEvent = $__default["default"].Event(EVENT_SHOW$2, {
            relatedTarget
          });
          $__default["default"](this._element).trigger(showEvent);
          if (showEvent.isDefaultPrevented()) {
            return;
          }
          this._isShown = true;
          if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
            this._isTransitioning = true;
          }
          this._checkScrollbar();
          this._setScrollbar();
          this._adjustDialog();
          this._setEscapeEvent();
          this._setResizeEvent();
          $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function(event) {
            return _this.hide(event);
          });
          $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function() {
            $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function(event) {
              if ($__default["default"](event.target).is(_this._element)) {
                _this._ignoreBackdropClick = true;
              }
            });
          });
          this._showBackdrop(function() {
            return _this._showElement(relatedTarget);
          });
        };
        _proto.hide = function hide2(event) {
          var _this2 = this;
          if (event) {
            event.preventDefault();
          }
          if (!this._isShown || this._isTransitioning) {
            return;
          }
          var hideEvent = $__default["default"].Event(EVENT_HIDE$2);
          $__default["default"](this._element).trigger(hideEvent);
          if (!this._isShown || hideEvent.isDefaultPrevented()) {
            return;
          }
          this._isShown = false;
          var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
          if (transition) {
            this._isTransitioning = true;
          }
          this._setEscapeEvent();
          this._setResizeEvent();
          $__default["default"](document).off(EVENT_FOCUSIN);
          $__default["default"](this._element).removeClass(CLASS_NAME_SHOW$4);
          $__default["default"](this._element).off(EVENT_CLICK_DISMISS$1);
          $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);
          if (transition) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $__default["default"](this._element).one(Util.TRANSITION_END, function(event2) {
              return _this2._hideModal(event2);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            this._hideModal();
          }
        };
        _proto.dispose = function dispose() {
          [window, this._element, this._dialog].forEach(function(htmlElement) {
            return $__default["default"](htmlElement).off(EVENT_KEY$5);
          });
          $__default["default"](document).off(EVENT_FOCUSIN);
          $__default["default"].removeData(this._element, DATA_KEY$5);
          this._config = null;
          this._element = null;
          this._dialog = null;
          this._backdrop = null;
          this._isShown = null;
          this._isBodyOverflowing = null;
          this._ignoreBackdropClick = null;
          this._isTransitioning = null;
          this._scrollbarWidth = null;
        };
        _proto.handleUpdate = function handleUpdate() {
          this._adjustDialog();
        };
        _proto._getConfig = function _getConfig(config) {
          config = _extends$1({}, Default$4, config);
          Util.typeCheckConfig(NAME$5, config, DefaultType$4);
          return config;
        };
        _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
          var _this3 = this;
          var hideEventPrevented = $__default["default"].Event(EVENT_HIDE_PREVENTED);
          $__default["default"](this._element).trigger(hideEventPrevented);
          if (hideEventPrevented.isDefaultPrevented()) {
            return;
          }
          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
          if (!isModalOverflowing) {
            this._element.style.overflowY = "hidden";
          }
          this._element.classList.add(CLASS_NAME_STATIC);
          var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
          $__default["default"](this._element).off(Util.TRANSITION_END);
          $__default["default"](this._element).one(Util.TRANSITION_END, function() {
            _this3._element.classList.remove(CLASS_NAME_STATIC);
            if (!isModalOverflowing) {
              $__default["default"](_this3._element).one(Util.TRANSITION_END, function() {
                _this3._element.style.overflowY = "";
              }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
            }
          }).emulateTransitionEnd(modalTransitionDuration);
          this._element.focus();
        };
        _proto._showElement = function _showElement(relatedTarget) {
          var _this4 = this;
          var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
          var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;
          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            document.body.appendChild(this._element);
          }
          this._element.style.display = "block";
          this._element.removeAttribute("aria-hidden");
          this._element.setAttribute("aria-modal", true);
          this._element.setAttribute("role", "dialog");
          if ($__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
            modalBody.scrollTop = 0;
          } else {
            this._element.scrollTop = 0;
          }
          if (transition) {
            Util.reflow(this._element);
          }
          $__default["default"](this._element).addClass(CLASS_NAME_SHOW$4);
          if (this._config.focus) {
            this._enforceFocus();
          }
          var shownEvent = $__default["default"].Event(EVENT_SHOWN$2, {
            relatedTarget
          });
          var transitionComplete = function transitionComplete2() {
            if (_this4._config.focus) {
              _this4._element.focus();
            }
            _this4._isTransitioning = false;
            $__default["default"](_this4._element).trigger(shownEvent);
          };
          if (transition) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
            $__default["default"](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
          } else {
            transitionComplete();
          }
        };
        _proto._enforceFocus = function _enforceFocus() {
          var _this5 = this;
          $__default["default"](document).off(EVENT_FOCUSIN).on(EVENT_FOCUSIN, function(event) {
            if (document !== event.target && _this5._element !== event.target && $__default["default"](_this5._element).has(event.target).length === 0) {
              _this5._element.focus();
            }
          });
        };
        _proto._setEscapeEvent = function _setEscapeEvent() {
          var _this6 = this;
          if (this._isShown) {
            $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function(event) {
              if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
                event.preventDefault();
                _this6.hide();
              } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
                _this6._triggerBackdropTransition();
              }
            });
          } else if (!this._isShown) {
            $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
          }
        };
        _proto._setResizeEvent = function _setResizeEvent() {
          var _this7 = this;
          if (this._isShown) {
            $__default["default"](window).on(EVENT_RESIZE, function(event) {
              return _this7.handleUpdate(event);
            });
          } else {
            $__default["default"](window).off(EVENT_RESIZE);
          }
        };
        _proto._hideModal = function _hideModal() {
          var _this8 = this;
          this._element.style.display = "none";
          this._element.setAttribute("aria-hidden", true);
          this._element.removeAttribute("aria-modal");
          this._element.removeAttribute("role");
          this._isTransitioning = false;
          this._showBackdrop(function() {
            $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);
            _this8._resetAdjustments();
            _this8._resetScrollbar();
            $__default["default"](_this8._element).trigger(EVENT_HIDDEN$2);
          });
        };
        _proto._removeBackdrop = function _removeBackdrop() {
          if (this._backdrop) {
            $__default["default"](this._backdrop).remove();
            this._backdrop = null;
          }
        };
        _proto._showBackdrop = function _showBackdrop(callback) {
          var _this9 = this;
          var animate = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4) ? CLASS_NAME_FADE$4 : "";
          if (this._isShown && this._config.backdrop) {
            this._backdrop = document.createElement("div");
            this._backdrop.className = CLASS_NAME_BACKDROP;
            if (animate) {
              this._backdrop.classList.add(animate);
            }
            $__default["default"](this._backdrop).appendTo(document.body);
            $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, function(event) {
              if (_this9._ignoreBackdropClick) {
                _this9._ignoreBackdropClick = false;
                return;
              }
              if (event.target !== event.currentTarget) {
                return;
              }
              if (_this9._config.backdrop === "static") {
                _this9._triggerBackdropTransition();
              } else {
                _this9.hide();
              }
            });
            if (animate) {
              Util.reflow(this._backdrop);
            }
            $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW$4);
            if (!callback) {
              return;
            }
            if (!animate) {
              callback();
              return;
            }
            var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
            $__default["default"](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
          } else if (!this._isShown && this._backdrop) {
            $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW$4);
            var callbackRemove = function callbackRemove2() {
              _this9._removeBackdrop();
              if (callback) {
                callback();
              }
            };
            if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
              var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
              $__default["default"](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        };
        _proto._adjustDialog = function _adjustDialog() {
          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
          if (!this._isBodyOverflowing && isModalOverflowing) {
            this._element.style.paddingLeft = this._scrollbarWidth + "px";
          }
          if (this._isBodyOverflowing && !isModalOverflowing) {
            this._element.style.paddingRight = this._scrollbarWidth + "px";
          }
        };
        _proto._resetAdjustments = function _resetAdjustments() {
          this._element.style.paddingLeft = "";
          this._element.style.paddingRight = "";
        };
        _proto._checkScrollbar = function _checkScrollbar() {
          var rect = document.body.getBoundingClientRect();
          this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        };
        _proto._setScrollbar = function _setScrollbar() {
          var _this10 = this;
          if (this._isBodyOverflowing) {
            var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
            var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT));
            $__default["default"](fixedContent).each(function(index, element) {
              var actualPadding2 = element.style.paddingRight;
              var calculatedPadding2 = $__default["default"](element).css("padding-right");
              $__default["default"](element).data("padding-right", actualPadding2).css("padding-right", parseFloat(calculatedPadding2) + _this10._scrollbarWidth + "px");
            });
            $__default["default"](stickyContent).each(function(index, element) {
              var actualMargin = element.style.marginRight;
              var calculatedMargin = $__default["default"](element).css("margin-right");
              $__default["default"](element).data("margin-right", actualMargin).css("margin-right", parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
            });
            var actualPadding = document.body.style.paddingRight;
            var calculatedPadding = $__default["default"](document.body).css("padding-right");
            $__default["default"](document.body).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
          }
          $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
        };
        _proto._resetScrollbar = function _resetScrollbar() {
          var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
          $__default["default"](fixedContent).each(function(index, element) {
            var padding2 = $__default["default"](element).data("padding-right");
            $__default["default"](element).removeData("padding-right");
            element.style.paddingRight = padding2 ? padding2 : "";
          });
          var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
          $__default["default"](elements).each(function(index, element) {
            var margin = $__default["default"](element).data("margin-right");
            if (typeof margin !== "undefined") {
              $__default["default"](element).css("margin-right", margin).removeData("margin-right");
            }
          });
          var padding = $__default["default"](document.body).data("padding-right");
          $__default["default"](document.body).removeData("padding-right");
          document.body.style.paddingRight = padding ? padding : "";
        };
        _proto._getScrollbarWidth = function _getScrollbarWidth() {
          var scrollDiv = document.createElement("div");
          scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };
        Modal2._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
          return this.each(function() {
            var data = $__default["default"](this).data(DATA_KEY$5);
            var _config = _extends$1({}, Default$4, $__default["default"](this).data(), typeof config === "object" && config ? config : {});
            if (!data) {
              data = new Modal2(this, _config);
              $__default["default"](this).data(DATA_KEY$5, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config](relatedTarget);
            } else if (_config.show) {
              data.show(relatedTarget);
            }
          });
        };
        _createClass(Modal2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$5;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$4;
          }
        }]);
        return Modal2;
      })();
      $__default["default"](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
        var _this11 = this;
        var target;
        var selector = Util.getSelectorFromElement(this);
        if (selector) {
          target = document.querySelector(selector);
        }
        var config = $__default["default"](target).data(DATA_KEY$5) ? "toggle" : _extends$1({}, $__default["default"](target).data(), $__default["default"](this).data());
        if (this.tagName === "A" || this.tagName === "AREA") {
          event.preventDefault();
        }
        var $target = $__default["default"](target).one(EVENT_SHOW$2, function(showEvent) {
          if (showEvent.isDefaultPrevented()) {
            return;
          }
          $target.one(EVENT_HIDDEN$2, function() {
            if ($__default["default"](_this11).is(":visible")) {
              _this11.focus();
            }
          });
        });
        Modal._jQueryInterface.call($__default["default"](target), config, this);
      });
      $__default["default"].fn[NAME$5] = Modal._jQueryInterface;
      $__default["default"].fn[NAME$5].Constructor = Modal;
      $__default["default"].fn[NAME$5].noConflict = function() {
        $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
        return Modal._jQueryInterface;
      };
      var uriAttrs = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"];
      var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      var DefaultWhitelist = {
        // Global attributes allowed on any supplied element below.
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
      var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
      function allowedAttribute(attr, allowedAttributeList) {
        var attrName = attr.nodeName.toLowerCase();
        if (allowedAttributeList.indexOf(attrName) !== -1) {
          if (uriAttrs.indexOf(attrName) !== -1) {
            return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
          }
          return true;
        }
        var regExp = allowedAttributeList.filter(function(attrRegex) {
          return attrRegex instanceof RegExp;
        });
        for (var i = 0, len = regExp.length; i < len; i++) {
          if (regExp[i].test(attrName)) {
            return true;
          }
        }
        return false;
      }
      function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
        if (unsafeHtml.length === 0) {
          return unsafeHtml;
        }
        if (sanitizeFn && typeof sanitizeFn === "function") {
          return sanitizeFn(unsafeHtml);
        }
        var domParser = new window.DOMParser();
        var createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
        var whitelistKeys = Object.keys(whiteList);
        var elements = [].slice.call(createdDocument.body.querySelectorAll("*"));
        var _loop = function _loop2(i2, len2) {
          var el = elements[i2];
          var elName = el.nodeName.toLowerCase();
          if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
            el.parentNode.removeChild(el);
            return "continue";
          }
          var attributeList = [].slice.call(el.attributes);
          var whitelistedAttributes = [].concat(whiteList["*"] || [], whiteList[elName] || []);
          attributeList.forEach(function(attr) {
            if (!allowedAttribute(attr, whitelistedAttributes)) {
              el.removeAttribute(attr.nodeName);
            }
          });
        };
        for (var i = 0, len = elements.length; i < len; i++) {
          var _ret = _loop(i);
          if (_ret === "continue") continue;
        }
        return createdDocument.body.innerHTML;
      }
      var NAME$4 = "tooltip";
      var VERSION$4 = "4.6.2";
      var DATA_KEY$4 = "bs.tooltip";
      var EVENT_KEY$4 = "." + DATA_KEY$4;
      var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
      var CLASS_PREFIX$1 = "bs-tooltip";
      var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", "g");
      var DISALLOWED_ATTRIBUTES = ["sanitize", "whiteList", "sanitizeFn"];
      var CLASS_NAME_FADE$3 = "fade";
      var CLASS_NAME_SHOW$3 = "show";
      var HOVER_STATE_SHOW = "show";
      var HOVER_STATE_OUT = "out";
      var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
      var SELECTOR_ARROW = ".arrow";
      var TRIGGER_HOVER = "hover";
      var TRIGGER_FOCUS = "focus";
      var TRIGGER_CLICK = "click";
      var TRIGGER_MANUAL = "manual";
      var AttachmentMap = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      };
      var Default$3 = {
        animation: true,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        selector: false,
        placement: "top",
        offset: 0,
        container: false,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: true,
        sanitizeFn: null,
        whiteList: DefaultWhitelist,
        popperConfig: null
      };
      var DefaultType$3 = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
      };
      var Event$1 = {
        HIDE: "hide" + EVENT_KEY$4,
        HIDDEN: "hidden" + EVENT_KEY$4,
        SHOW: "show" + EVENT_KEY$4,
        SHOWN: "shown" + EVENT_KEY$4,
        INSERTED: "inserted" + EVENT_KEY$4,
        CLICK: "click" + EVENT_KEY$4,
        FOCUSIN: "focusin" + EVENT_KEY$4,
        FOCUSOUT: "focusout" + EVENT_KEY$4,
        MOUSEENTER: "mouseenter" + EVENT_KEY$4,
        MOUSELEAVE: "mouseleave" + EVENT_KEY$4
      };
      var Tooltip = /* @__PURE__ */ (function() {
        function Tooltip2(element, config) {
          if (typeof Popper$1 === "undefined") {
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          }
          this._isEnabled = true;
          this._timeout = 0;
          this._hoverState = "";
          this._activeTrigger = {};
          this._popper = null;
          this.element = element;
          this.config = this._getConfig(config);
          this.tip = null;
          this._setListeners();
        }
        var _proto = Tooltip2.prototype;
        _proto.enable = function enable() {
          this._isEnabled = true;
        };
        _proto.disable = function disable() {
          this._isEnabled = false;
        };
        _proto.toggleEnabled = function toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        };
        _proto.toggle = function toggle(event) {
          if (!this._isEnabled) {
            return;
          }
          if (event) {
            var dataKey = this.constructor.DATA_KEY;
            var context = $__default["default"](event.currentTarget).data(dataKey);
            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              $__default["default"](event.currentTarget).data(dataKey, context);
            }
            context._activeTrigger.click = !context._activeTrigger.click;
            if (context._isWithActiveTrigger()) {
              context._enter(null, context);
            } else {
              context._leave(null, context);
            }
          } else {
            if ($__default["default"](this.getTipElement()).hasClass(CLASS_NAME_SHOW$3)) {
              this._leave(null, this);
              return;
            }
            this._enter(null, this);
          }
        };
        _proto.dispose = function dispose() {
          clearTimeout(this._timeout);
          $__default["default"].removeData(this.element, this.constructor.DATA_KEY);
          $__default["default"](this.element).off(this.constructor.EVENT_KEY);
          $__default["default"](this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
          if (this.tip) {
            $__default["default"](this.tip).remove();
          }
          this._isEnabled = null;
          this._timeout = null;
          this._hoverState = null;
          this._activeTrigger = null;
          if (this._popper) {
            this._popper.destroy();
          }
          this._popper = null;
          this.element = null;
          this.config = null;
          this.tip = null;
        };
        _proto.show = function show() {
          var _this = this;
          if ($__default["default"](this.element).css("display") === "none") {
            throw new Error("Please use show on visible elements");
          }
          var showEvent = $__default["default"].Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            $__default["default"](this.element).trigger(showEvent);
            var shadowRoot = Util.findShadowRoot(this.element);
            var isInTheDom = $__default["default"].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);
            if (showEvent.isDefaultPrevented() || !isInTheDom) {
              return;
            }
            var tip = this.getTipElement();
            var tipId = Util.getUID(this.constructor.NAME);
            tip.setAttribute("id", tipId);
            this.element.setAttribute("aria-describedby", tipId);
            this.setContent();
            if (this.config.animation) {
              $__default["default"](tip).addClass(CLASS_NAME_FADE$3);
            }
            var placement = typeof this.config.placement === "function" ? this.config.placement.call(this, tip, this.element) : this.config.placement;
            var attachment = this._getAttachment(placement);
            this.addAttachmentClass(attachment);
            var container = this._getContainer();
            $__default["default"](tip).data(this.constructor.DATA_KEY, this);
            if (!$__default["default"].contains(this.element.ownerDocument.documentElement, this.tip)) {
              $__default["default"](tip).appendTo(container);
            }
            $__default["default"](this.element).trigger(this.constructor.Event.INSERTED);
            this._popper = new Popper$1(this.element, tip, this._getPopperConfig(attachment));
            $__default["default"](tip).addClass(CLASS_NAME_SHOW$3);
            $__default["default"](tip).addClass(this.config.customClass);
            if ("ontouchstart" in document.documentElement) {
              $__default["default"](document.body).children().on("mouseover", null, $__default["default"].noop);
            }
            var complete = function complete2() {
              if (_this.config.animation) {
                _this._fixTransition();
              }
              var prevHoverState = _this._hoverState;
              _this._hoverState = null;
              $__default["default"](_this.element).trigger(_this.constructor.Event.SHOWN);
              if (prevHoverState === HOVER_STATE_OUT) {
                _this._leave(null, _this);
              }
            };
            if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
              var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
              $__default["default"](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
              complete();
            }
          }
        };
        _proto.hide = function hide2(callback) {
          var _this2 = this;
          var tip = this.getTipElement();
          var hideEvent = $__default["default"].Event(this.constructor.Event.HIDE);
          var complete = function complete2() {
            if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
              tip.parentNode.removeChild(tip);
            }
            _this2._cleanTipClass();
            _this2.element.removeAttribute("aria-describedby");
            $__default["default"](_this2.element).trigger(_this2.constructor.Event.HIDDEN);
            if (_this2._popper !== null) {
              _this2._popper.destroy();
            }
            if (callback) {
              callback();
            }
          };
          $__default["default"](this.element).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            return;
          }
          $__default["default"](tip).removeClass(CLASS_NAME_SHOW$3);
          if ("ontouchstart" in document.documentElement) {
            $__default["default"](document.body).children().off("mouseover", null, $__default["default"].noop);
          }
          this._activeTrigger[TRIGGER_CLICK] = false;
          this._activeTrigger[TRIGGER_FOCUS] = false;
          this._activeTrigger[TRIGGER_HOVER] = false;
          if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
            var transitionDuration = Util.getTransitionDurationFromElement(tip);
            $__default["default"](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
          this._hoverState = "";
        };
        _proto.update = function update2() {
          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        };
        _proto.isWithContent = function isWithContent() {
          return Boolean(this.getTitle());
        };
        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
        };
        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $__default["default"](this.config.template)[0];
          return this.tip;
        };
        _proto.setContent = function setContent() {
          var tip = this.getTipElement();
          this.setElementContent($__default["default"](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
          $__default["default"](tip).removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$3);
        };
        _proto.setElementContent = function setElementContent($element, content) {
          if (typeof content === "object" && (content.nodeType || content.jquery)) {
            if (this.config.html) {
              if (!$__default["default"](content).parent().is($element)) {
                $element.empty().append(content);
              }
            } else {
              $element.text($__default["default"](content).text());
            }
            return;
          }
          if (this.config.html) {
            if (this.config.sanitize) {
              content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
            }
            $element.html(content);
          } else {
            $element.text(content);
          }
        };
        _proto.getTitle = function getTitle() {
          var title = this.element.getAttribute("data-original-title");
          if (!title) {
            title = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
          }
          return title;
        };
        _proto._getPopperConfig = function _getPopperConfig(attachment) {
          var _this3 = this;
          var defaultBsConfig = {
            placement: attachment,
            modifiers: {
              offset: this._getOffset(),
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: SELECTOR_ARROW
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this3._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              return _this3._handlePopperPlacementChange(data);
            }
          };
          return _extends$1({}, defaultBsConfig, this.config.popperConfig);
        };
        _proto._getOffset = function _getOffset() {
          var _this4 = this;
          var offset2 = {};
          if (typeof this.config.offset === "function") {
            offset2.fn = function(data) {
              data.offsets = _extends$1({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
              return data;
            };
          } else {
            offset2.offset = this.config.offset;
          }
          return offset2;
        };
        _proto._getContainer = function _getContainer() {
          if (this.config.container === false) {
            return document.body;
          }
          if (Util.isElement(this.config.container)) {
            return $__default["default"](this.config.container);
          }
          return $__default["default"](document).find(this.config.container);
        };
        _proto._getAttachment = function _getAttachment(placement) {
          return AttachmentMap[placement.toUpperCase()];
        };
        _proto._setListeners = function _setListeners() {
          var _this5 = this;
          var triggers = this.config.trigger.split(" ");
          triggers.forEach(function(trigger) {
            if (trigger === "click") {
              $__default["default"](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function(event) {
                return _this5.toggle(event);
              });
            } else if (trigger !== TRIGGER_MANUAL) {
              var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
              var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
              $__default["default"](_this5.element).on(eventIn, _this5.config.selector, function(event) {
                return _this5._enter(event);
              }).on(eventOut, _this5.config.selector, function(event) {
                return _this5._leave(event);
              });
            }
          });
          this._hideModalHandler = function() {
            if (_this5.element) {
              _this5.hide();
            }
          };
          $__default["default"](this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
          if (this.config.selector) {
            this.config = _extends$1({}, this.config, {
              trigger: "manual",
              selector: ""
            });
          } else {
            this._fixTitle();
          }
        };
        _proto._fixTitle = function _fixTitle() {
          var titleType = typeof this.element.getAttribute("data-original-title");
          if (this.element.getAttribute("title") || titleType !== "string") {
            this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
            this.element.setAttribute("title", "");
          }
        };
        _proto._enter = function _enter(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $__default["default"](event.currentTarget).data(dataKey);
          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $__default["default"](event.currentTarget).data(dataKey, context);
          }
          if (event) {
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          }
          if ($__default["default"](context.getTipElement()).hasClass(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
            context._hoverState = HOVER_STATE_SHOW;
            return;
          }
          clearTimeout(context._timeout);
          context._hoverState = HOVER_STATE_SHOW;
          if (!context.config.delay || !context.config.delay.show) {
            context.show();
            return;
          }
          context._timeout = setTimeout(function() {
            if (context._hoverState === HOVER_STATE_SHOW) {
              context.show();
            }
          }, context.config.delay.show);
        };
        _proto._leave = function _leave(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $__default["default"](event.currentTarget).data(dataKey);
          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $__default["default"](event.currentTarget).data(dataKey, context);
          }
          if (event) {
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
          }
          if (context._isWithActiveTrigger()) {
            return;
          }
          clearTimeout(context._timeout);
          context._hoverState = HOVER_STATE_OUT;
          if (!context.config.delay || !context.config.delay.hide) {
            context.hide();
            return;
          }
          context._timeout = setTimeout(function() {
            if (context._hoverState === HOVER_STATE_OUT) {
              context.hide();
            }
          }, context.config.delay.hide);
        };
        _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
          for (var trigger in this._activeTrigger) {
            if (this._activeTrigger[trigger]) {
              return true;
            }
          }
          return false;
        };
        _proto._getConfig = function _getConfig(config) {
          var dataAttributes = $__default["default"](this.element).data();
          Object.keys(dataAttributes).forEach(function(dataAttr) {
            if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
              delete dataAttributes[dataAttr];
            }
          });
          config = _extends$1({}, this.constructor.Default, dataAttributes, typeof config === "object" && config ? config : {});
          if (typeof config.delay === "number") {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }
          if (typeof config.title === "number") {
            config.title = config.title.toString();
          }
          if (typeof config.content === "number") {
            config.content = config.content.toString();
          }
          Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
          if (config.sanitize) {
            config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
          }
          return config;
        };
        _proto._getDelegateConfig = function _getDelegateConfig() {
          var config = {};
          if (this.config) {
            for (var key in this.config) {
              if (this.constructor.Default[key] !== this.config[key]) {
                config[key] = this.config[key];
              }
            }
          }
          return config;
        };
        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $__default["default"](this.getTipElement());
          var tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX$1);
          if (tabClass !== null && tabClass.length) {
            $tip.removeClass(tabClass.join(""));
          }
        };
        _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
          this.tip = popperData.instance.popper;
          this._cleanTipClass();
          this.addAttachmentClass(this._getAttachment(popperData.placement));
        };
        _proto._fixTransition = function _fixTransition() {
          var tip = this.getTipElement();
          var initConfigAnimation = this.config.animation;
          if (tip.getAttribute("x-placement") !== null) {
            return;
          }
          $__default["default"](tip).removeClass(CLASS_NAME_FADE$3);
          this.config.animation = false;
          this.hide();
          this.show();
          this.config.animation = initConfigAnimation;
        };
        Tooltip2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var $element = $__default["default"](this);
            var data = $element.data(DATA_KEY$4);
            var _config = typeof config === "object" && config;
            if (!data && /dispose|hide/.test(config)) {
              return;
            }
            if (!data) {
              data = new Tooltip2(this, _config);
              $element.data(DATA_KEY$4, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        };
        _createClass(Tooltip2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$4;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$3;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME$4;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY$4;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event$1;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY$4;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$3;
          }
        }]);
        return Tooltip2;
      })();
      $__default["default"].fn[NAME$4] = Tooltip._jQueryInterface;
      $__default["default"].fn[NAME$4].Constructor = Tooltip;
      $__default["default"].fn[NAME$4].noConflict = function() {
        $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
        return Tooltip._jQueryInterface;
      };
      var NAME$3 = "popover";
      var VERSION$3 = "4.6.2";
      var DATA_KEY$3 = "bs.popover";
      var EVENT_KEY$3 = "." + DATA_KEY$3;
      var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
      var CLASS_PREFIX = "bs-popover";
      var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", "g");
      var CLASS_NAME_FADE$2 = "fade";
      var CLASS_NAME_SHOW$2 = "show";
      var SELECTOR_TITLE = ".popover-header";
      var SELECTOR_CONTENT = ".popover-body";
      var Default$2 = _extends$1({}, Tooltip.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      });
      var DefaultType$2 = _extends$1({}, Tooltip.DefaultType, {
        content: "(string|element|function)"
      });
      var Event2 = {
        HIDE: "hide" + EVENT_KEY$3,
        HIDDEN: "hidden" + EVENT_KEY$3,
        SHOW: "show" + EVENT_KEY$3,
        SHOWN: "shown" + EVENT_KEY$3,
        INSERTED: "inserted" + EVENT_KEY$3,
        CLICK: "click" + EVENT_KEY$3,
        FOCUSIN: "focusin" + EVENT_KEY$3,
        FOCUSOUT: "focusout" + EVENT_KEY$3,
        MOUSEENTER: "mouseenter" + EVENT_KEY$3,
        MOUSELEAVE: "mouseleave" + EVENT_KEY$3
      };
      var Popover = /* @__PURE__ */ (function(_Tooltip) {
        _inheritsLoose(Popover2, _Tooltip);
        function Popover2() {
          return _Tooltip.apply(this, arguments) || this;
        }
        var _proto = Popover2.prototype;
        _proto.isWithContent = function isWithContent() {
          return this.getTitle() || this._getContent();
        };
        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };
        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $__default["default"](this.config.template)[0];
          return this.tip;
        };
        _proto.setContent = function setContent() {
          var $tip = $__default["default"](this.getTipElement());
          this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());
          var content = this._getContent();
          if (typeof content === "function") {
            content = content.call(this.element);
          }
          this.setElementContent($tip.find(SELECTOR_CONTENT), content);
          $tip.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$2);
        };
        _proto._getContent = function _getContent() {
          return this.element.getAttribute("data-content") || this.config.content;
        };
        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $__default["default"](this.getTipElement());
          var tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX);
          if (tabClass !== null && tabClass.length > 0) {
            $tip.removeClass(tabClass.join(""));
          }
        };
        Popover2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var data = $__default["default"](this).data(DATA_KEY$3);
            var _config = typeof config === "object" ? config : null;
            if (!data && /dispose|hide/.test(config)) {
              return;
            }
            if (!data) {
              data = new Popover2(this, _config);
              $__default["default"](this).data(DATA_KEY$3, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        };
        _createClass(Popover2, null, [{
          key: "VERSION",
          get: (
            // Getters
            function get() {
              return VERSION$3;
            }
          )
        }, {
          key: "Default",
          get: function get() {
            return Default$2;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME$3;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY$3;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event2;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY$3;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType$2;
          }
        }]);
        return Popover2;
      })(Tooltip);
      $__default["default"].fn[NAME$3] = Popover._jQueryInterface;
      $__default["default"].fn[NAME$3].Constructor = Popover;
      $__default["default"].fn[NAME$3].noConflict = function() {
        $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
        return Popover._jQueryInterface;
      };
      var NAME$2 = "scrollspy";
      var VERSION$2 = "4.6.2";
      var DATA_KEY$2 = "bs.scrollspy";
      var EVENT_KEY$2 = "." + DATA_KEY$2;
      var DATA_API_KEY$1 = ".data-api";
      var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
      var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
      var CLASS_NAME_ACTIVE$1 = "active";
      var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
      var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
      var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
      var METHOD_OFFSET = "offset";
      var METHOD_POSITION = "position";
      var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
      var SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group";
      var SELECTOR_NAV_LINKS = ".nav-link";
      var SELECTOR_NAV_ITEMS = ".nav-item";
      var SELECTOR_LIST_ITEMS = ".list-group-item";
      var SELECTOR_DROPDOWN$1 = ".dropdown";
      var SELECTOR_DROPDOWN_ITEMS = ".dropdown-item";
      var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
      var Default$1 = {
        offset: 10,
        method: "auto",
        target: ""
      };
      var DefaultType$1 = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      };
      var ScrollSpy = /* @__PURE__ */ (function() {
        function ScrollSpy2(element, config) {
          var _this = this;
          this._element = element;
          this._scrollElement = element.tagName === "BODY" ? window : element;
          this._config = this._getConfig(config);
          this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
          this._offsets = [];
          this._targets = [];
          this._activeTarget = null;
          this._scrollHeight = 0;
          $__default["default"](this._scrollElement).on(EVENT_SCROLL, function(event) {
            return _this._process(event);
          });
          this.refresh();
          this._process();
        }
        var _proto = ScrollSpy2.prototype;
        _proto.refresh = function refresh() {
          var _this2 = this;
          var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
          var offsetMethod = this._config.method === "auto" ? autoMethod : this._config.method;
          var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
          this._offsets = [];
          this._targets = [];
          this._scrollHeight = this._getScrollHeight();
          var targets = [].slice.call(document.querySelectorAll(this._selector));
          targets.map(function(element) {
            var target;
            var targetSelector = Util.getSelectorFromElement(element);
            if (targetSelector) {
              target = document.querySelector(targetSelector);
            }
            if (target) {
              var targetBCR = target.getBoundingClientRect();
              if (targetBCR.width || targetBCR.height) {
                return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
              }
            }
            return null;
          }).filter(Boolean).sort(function(a, b) {
            return a[0] - b[0];
          }).forEach(function(item) {
            _this2._offsets.push(item[0]);
            _this2._targets.push(item[1]);
          });
        };
        _proto.dispose = function dispose() {
          $__default["default"].removeData(this._element, DATA_KEY$2);
          $__default["default"](this._scrollElement).off(EVENT_KEY$2);
          this._element = null;
          this._scrollElement = null;
          this._config = null;
          this._selector = null;
          this._offsets = null;
          this._targets = null;
          this._activeTarget = null;
          this._scrollHeight = null;
        };
        _proto._getConfig = function _getConfig(config) {
          config = _extends$1({}, Default$1, typeof config === "object" && config ? config : {});
          if (typeof config.target !== "string" && Util.isElement(config.target)) {
            var id = $__default["default"](config.target).attr("id");
            if (!id) {
              id = Util.getUID(NAME$2);
              $__default["default"](config.target).attr("id", id);
            }
            config.target = "#" + id;
          }
          Util.typeCheckConfig(NAME$2, config, DefaultType$1);
          return config;
        };
        _proto._getScrollTop = function _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        };
        _proto._getScrollHeight = function _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        };
        _proto._getOffsetHeight = function _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        };
        _proto._process = function _process() {
          var scrollTop = this._getScrollTop() + this._config.offset;
          var scrollHeight = this._getScrollHeight();
          var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
          if (this._scrollHeight !== scrollHeight) {
            this.refresh();
          }
          if (scrollTop >= maxScroll) {
            var target = this._targets[this._targets.length - 1];
            if (this._activeTarget !== target) {
              this._activate(target);
            }
            return;
          }
          if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            this._activeTarget = null;
            this._clear();
            return;
          }
          for (var i = this._offsets.length; i--; ) {
            var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === "undefined" || scrollTop < this._offsets[i + 1]);
            if (isActiveTarget) {
              this._activate(this._targets[i]);
            }
          }
        };
        _proto._activate = function _activate(target) {
          this._activeTarget = target;
          this._clear();
          var queries = this._selector.split(",").map(function(selector) {
            return selector + '[data-target="' + target + '"],' + selector + '[href="' + target + '"]';
          });
          var $link = $__default["default"]([].slice.call(document.querySelectorAll(queries.join(","))));
          if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
            $link.closest(SELECTOR_DROPDOWN$1).find(SELECTOR_DROPDOWN_TOGGLE$1).addClass(CLASS_NAME_ACTIVE$1);
            $link.addClass(CLASS_NAME_ACTIVE$1);
          } else {
            $link.addClass(CLASS_NAME_ACTIVE$1);
            $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$1);
            $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$1);
          }
          $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
            relatedTarget: target
          });
        };
        _proto._clear = function _clear() {
          [].slice.call(document.querySelectorAll(this._selector)).filter(function(node) {
            return node.classList.contains(CLASS_NAME_ACTIVE$1);
          }).forEach(function(node) {
            return node.classList.remove(CLASS_NAME_ACTIVE$1);
          });
        };
        ScrollSpy2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var data = $__default["default"](this).data(DATA_KEY$2);
            var _config = typeof config === "object" && config;
            if (!data) {
              data = new ScrollSpy2(this, _config);
              $__default["default"](this).data(DATA_KEY$2, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        };
        _createClass(ScrollSpy2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$2;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default$1;
          }
        }]);
        return ScrollSpy2;
      })();
      $__default["default"](window).on(EVENT_LOAD_DATA_API, function() {
        var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
        var scrollSpysLength = scrollSpys.length;
        for (var i = scrollSpysLength; i--; ) {
          var $spy = $__default["default"](scrollSpys[i]);
          ScrollSpy._jQueryInterface.call($spy, $spy.data());
        }
      });
      $__default["default"].fn[NAME$2] = ScrollSpy._jQueryInterface;
      $__default["default"].fn[NAME$2].Constructor = ScrollSpy;
      $__default["default"].fn[NAME$2].noConflict = function() {
        $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
        return ScrollSpy._jQueryInterface;
      };
      var NAME$1 = "tab";
      var VERSION$1 = "4.6.2";
      var DATA_KEY$1 = "bs.tab";
      var EVENT_KEY$1 = "." + DATA_KEY$1;
      var DATA_API_KEY = ".data-api";
      var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
      var CLASS_NAME_DROPDOWN_MENU = "dropdown-menu";
      var CLASS_NAME_ACTIVE = "active";
      var CLASS_NAME_DISABLED = "disabled";
      var CLASS_NAME_FADE$1 = "fade";
      var CLASS_NAME_SHOW$1 = "show";
      var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
      var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
      var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
      var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
      var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
      var SELECTOR_DROPDOWN = ".dropdown";
      var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
      var SELECTOR_ACTIVE = ".active";
      var SELECTOR_ACTIVE_UL = "> li > .active";
      var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
      var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
      var SELECTOR_DROPDOWN_ACTIVE_CHILD = "> .dropdown-menu .active";
      var Tab = /* @__PURE__ */ (function() {
        function Tab2(element) {
          this._element = element;
        }
        var _proto = Tab2.prototype;
        _proto.show = function show() {
          var _this = this;
          if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED) || this._element.hasAttribute("disabled")) {
            return;
          }
          var target;
          var previous;
          var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
          var selector = Util.getSelectorFromElement(this._element);
          if (listElement) {
            var itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
            previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
            previous = previous[previous.length - 1];
          }
          var hideEvent = $__default["default"].Event(EVENT_HIDE$1, {
            relatedTarget: this._element
          });
          var showEvent = $__default["default"].Event(EVENT_SHOW$1, {
            relatedTarget: previous
          });
          if (previous) {
            $__default["default"](previous).trigger(hideEvent);
          }
          $__default["default"](this._element).trigger(showEvent);
          if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
            return;
          }
          if (selector) {
            target = document.querySelector(selector);
          }
          this._activate(this._element, listElement);
          var complete = function complete2() {
            var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN$1, {
              relatedTarget: _this._element
            });
            var shownEvent = $__default["default"].Event(EVENT_SHOWN$1, {
              relatedTarget: previous
            });
            $__default["default"](previous).trigger(hiddenEvent);
            $__default["default"](_this._element).trigger(shownEvent);
          };
          if (target) {
            this._activate(target, target.parentNode, complete);
          } else {
            complete();
          }
        };
        _proto.dispose = function dispose() {
          $__default["default"].removeData(this._element, DATA_KEY$1);
          this._element = null;
        };
        _proto._activate = function _activate(element, container, callback) {
          var _this2 = this;
          var activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
          var active = activeElements[0];
          var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE$1);
          var complete = function complete2() {
            return _this2._transitionComplete(element, active, callback);
          };
          if (active && isTransitioning) {
            var transitionDuration = Util.getTransitionDurationFromElement(active);
            $__default["default"](active).removeClass(CLASS_NAME_SHOW$1).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };
        _proto._transitionComplete = function _transitionComplete(element, active, callback) {
          if (active) {
            $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
            var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];
            if (dropdownChild) {
              $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
            }
            if (active.getAttribute("role") === "tab") {
              active.setAttribute("aria-selected", false);
            }
          }
          $__default["default"](element).addClass(CLASS_NAME_ACTIVE);
          if (element.getAttribute("role") === "tab") {
            element.setAttribute("aria-selected", true);
          }
          Util.reflow(element);
          if (element.classList.contains(CLASS_NAME_FADE$1)) {
            element.classList.add(CLASS_NAME_SHOW$1);
          }
          var parent = element.parentNode;
          if (parent && parent.nodeName === "LI") {
            parent = parent.parentNode;
          }
          if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
            var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];
            if (dropdownElement) {
              var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
              $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
            }
            element.setAttribute("aria-expanded", true);
          }
          if (callback) {
            callback();
          }
        };
        Tab2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var $this = $__default["default"](this);
            var data = $this.data(DATA_KEY$1);
            if (!data) {
              data = new Tab2(this);
              $this.data(DATA_KEY$1, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        };
        _createClass(Tab2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION$1;
          }
        }]);
        return Tab2;
      })();
      $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        event.preventDefault();
        Tab._jQueryInterface.call($__default["default"](this), "show");
      });
      $__default["default"].fn[NAME$1] = Tab._jQueryInterface;
      $__default["default"].fn[NAME$1].Constructor = Tab;
      $__default["default"].fn[NAME$1].noConflict = function() {
        $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
        return Tab._jQueryInterface;
      };
      var NAME = "toast";
      var VERSION = "4.6.2";
      var DATA_KEY = "bs.toast";
      var EVENT_KEY = "." + DATA_KEY;
      var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
      var CLASS_NAME_FADE = "fade";
      var CLASS_NAME_HIDE = "hide";
      var CLASS_NAME_SHOW = "show";
      var CLASS_NAME_SHOWING = "showing";
      var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
      var EVENT_HIDE = "hide" + EVENT_KEY;
      var EVENT_HIDDEN = "hidden" + EVENT_KEY;
      var EVENT_SHOW = "show" + EVENT_KEY;
      var EVENT_SHOWN = "shown" + EVENT_KEY;
      var SELECTOR_DATA_DISMISS = '[data-dismiss="toast"]';
      var Default = {
        animation: true,
        autohide: true,
        delay: 500
      };
      var DefaultType = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      };
      var Toast = /* @__PURE__ */ (function() {
        function Toast2(element, config) {
          this._element = element;
          this._config = this._getConfig(config);
          this._timeout = null;
          this._setListeners();
        }
        var _proto = Toast2.prototype;
        _proto.show = function show() {
          var _this = this;
          var showEvent = $__default["default"].Event(EVENT_SHOW);
          $__default["default"](this._element).trigger(showEvent);
          if (showEvent.isDefaultPrevented()) {
            return;
          }
          this._clearTimeout();
          if (this._config.animation) {
            this._element.classList.add(CLASS_NAME_FADE);
          }
          var complete = function complete2() {
            _this._element.classList.remove(CLASS_NAME_SHOWING);
            _this._element.classList.add(CLASS_NAME_SHOW);
            $__default["default"](_this._element).trigger(EVENT_SHOWN);
            if (_this._config.autohide) {
              _this._timeout = setTimeout(function() {
                _this.hide();
              }, _this._config.delay);
            }
          };
          this._element.classList.remove(CLASS_NAME_HIDE);
          Util.reflow(this._element);
          this._element.classList.add(CLASS_NAME_SHOWING);
          if (this._config.animation) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };
        _proto.hide = function hide2() {
          if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
            return;
          }
          var hideEvent = $__default["default"].Event(EVENT_HIDE);
          $__default["default"](this._element).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            return;
          }
          this._close();
        };
        _proto.dispose = function dispose() {
          this._clearTimeout();
          if (this._element.classList.contains(CLASS_NAME_SHOW)) {
            this._element.classList.remove(CLASS_NAME_SHOW);
          }
          $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
          $__default["default"].removeData(this._element, DATA_KEY);
          this._element = null;
          this._config = null;
        };
        _proto._getConfig = function _getConfig(config) {
          config = _extends$1({}, Default, $__default["default"](this._element).data(), typeof config === "object" && config ? config : {});
          Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
          return config;
        };
        _proto._setListeners = function _setListeners() {
          var _this2 = this;
          $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function() {
            return _this2.hide();
          });
        };
        _proto._close = function _close() {
          var _this3 = this;
          var complete = function complete2() {
            _this3._element.classList.add(CLASS_NAME_HIDE);
            $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
          };
          this._element.classList.remove(CLASS_NAME_SHOW);
          if (this._config.animation) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };
        _proto._clearTimeout = function _clearTimeout() {
          clearTimeout(this._timeout);
          this._timeout = null;
        };
        Toast2._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function() {
            var $element = $__default["default"](this);
            var data = $element.data(DATA_KEY);
            var _config = typeof config === "object" && config;
            if (!data) {
              data = new Toast2(this, _config);
              $element.data(DATA_KEY, data);
            }
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError('No method named "' + config + '"');
              }
              data[config](this);
            }
          });
        };
        _createClass(Toast2, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);
        return Toast2;
      })();
      $__default["default"].fn[NAME] = Toast._jQueryInterface;
      $__default["default"].fn[NAME].Constructor = Toast;
      $__default["default"].fn[NAME].noConflict = function() {
        $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
        return Toast._jQueryInterface;
      };
      exports2.Alert = Alert;
      exports2.Button = Button;
      exports2.Carousel = Carousel;
      exports2.Collapse = Collapse;
      exports2.Dropdown = Dropdown;
      exports2.Modal = Modal;
      exports2.Popover = Popover;
      exports2.Scrollspy = ScrollSpy;
      exports2.Tab = Tab;
      exports2.Toast = Toast;
      exports2.Tooltip = Tooltip;
      exports2.Util = Util;
      Object.defineProperty(exports2, "__esModule", { value: true });
    }));
  }
});

// node_modules/bootstrap-select/dist/js/bootstrap-select.js
var init_bootstrap_select = __esm({
  "node_modules/bootstrap-select/dist/js/bootstrap-select.js"() {
    (function($3) {
      "use strict";
      var DISALLOWED_ATTRIBUTES = ["sanitize", "whiteList", "sanitizeFn"];
      var uriAttrs = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
      ];
      var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      var DefaultWhitelist = {
        // Global attributes allowed on any supplied element below.
        "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
      var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
      var ParseableAttributes = ["title", "placeholder"];
      function allowedAttribute(attr, allowedAttributeList) {
        var attrName = attr.nodeName.toLowerCase();
        if ($3.inArray(attrName, allowedAttributeList) !== -1) {
          if ($3.inArray(attrName, uriAttrs) !== -1) {
            return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
          }
          return true;
        }
        var regExp = $3(allowedAttributeList).filter(function(index, value) {
          return value instanceof RegExp;
        });
        for (var i = 0, l = regExp.length; i < l; i++) {
          if (attrName.match(regExp[i])) {
            return true;
          }
        }
        return false;
      }
      function sanitizeHtml(unsafeElements, whiteList, sanitizeFn) {
        if (sanitizeFn && typeof sanitizeFn === "function") {
          return sanitizeFn(unsafeElements);
        }
        var whitelistKeys = Object.keys(whiteList);
        for (var i = 0, len = unsafeElements.length; i < len; i++) {
          var elements = unsafeElements[i].querySelectorAll("*");
          for (var j = 0, len2 = elements.length; j < len2; j++) {
            var el = elements[j];
            var elName = el.nodeName.toLowerCase();
            if (whitelistKeys.indexOf(elName) === -1) {
              el.parentNode.removeChild(el);
              continue;
            }
            var attributeList = [].slice.call(el.attributes);
            var whitelistedAttributes = [].concat(whiteList["*"] || [], whiteList[elName] || []);
            for (var k = 0, len3 = attributeList.length; k < len3; k++) {
              var attr = attributeList[k];
              if (!allowedAttribute(attr, whitelistedAttributes)) {
                el.removeAttribute(attr.nodeName);
              }
            }
          }
        }
      }
      function getAttributesObject($select) {
        var attributesObject = {}, attrVal;
        ParseableAttributes.forEach(function(item) {
          attrVal = $select.attr(item);
          if (attrVal) attributesObject[item] = attrVal;
        });
        if (!attributesObject.placeholder && attributesObject.title) {
          attributesObject.placeholder = attributesObject.title;
        }
        return attributesObject;
      }
      if (!("classList" in document.createElement("_"))) {
        (function(view) {
          if (!("Element" in view)) return;
          var classListProp = "classList", protoProp = "prototype", elemCtrProto = view.Element[protoProp], objCtr = Object, classListGetter = function() {
            var $elem = $3(this);
            return {
              add: function(classes) {
                classes = Array.prototype.slice.call(arguments).join(" ");
                return $elem.addClass(classes);
              },
              remove: function(classes) {
                classes = Array.prototype.slice.call(arguments).join(" ");
                return $elem.removeClass(classes);
              },
              toggle: function(classes, force) {
                return $elem.toggleClass(classes, force);
              },
              contains: function(classes) {
                return $elem.hasClass(classes);
              }
            };
          };
          if (objCtr.defineProperty) {
            var classListPropDesc = {
              get: classListGetter,
              enumerable: true,
              configurable: true
            };
            try {
              objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) {
              if (ex.number === void 0 || ex.number === -2146823252) {
                classListPropDesc.enumerable = false;
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
              }
            }
          } else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
          }
        })(window);
      }
      var testElement = document.createElement("_");
      testElement.classList.add("c1", "c2");
      if (!testElement.classList.contains("c2")) {
        var _add = DOMTokenList.prototype.add, _remove = DOMTokenList.prototype.remove;
        DOMTokenList.prototype.add = function() {
          Array.prototype.forEach.call(arguments, _add.bind(this));
        };
        DOMTokenList.prototype.remove = function() {
          Array.prototype.forEach.call(arguments, _remove.bind(this));
        };
      }
      testElement.classList.toggle("c3", false);
      if (testElement.classList.contains("c3")) {
        var _toggle = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          } else {
            return _toggle.call(this, token);
          }
        };
      }
      testElement = null;
      Object.values = typeof Object.values === "function" ? Object.values : function(obj) {
        return Object.keys(obj).map(function(key) {
          return obj[key];
        });
      };
      function isEqual(array1, array2) {
        return array1.length === array2.length && array1.every(function(element, index) {
          return element === array2[index];
        });
      }
      ;
      if (!String.prototype.startsWith) {
        (function() {
          "use strict";
          var toString = {}.toString;
          var startsWith = function(search) {
            if (this == null) {
              throw new TypeError();
            }
            var string = String(this);
            if (search && toString.call(search) == "[object RegExp]") {
              throw new TypeError();
            }
            var stringLength = string.length;
            var searchString = String(search);
            var searchLength = searchString.length;
            var position = arguments.length > 1 ? arguments[1] : void 0;
            var pos = position ? Number(position) : 0;
            if (pos != pos) {
              pos = 0;
            }
            var start = Math.min(Math.max(pos, 0), stringLength);
            if (searchLength + start > stringLength) {
              return false;
            }
            var index = -1;
            while (++index < searchLength) {
              if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
                return false;
              }
            }
            return true;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String.prototype, "startsWith", {
              "value": startsWith,
              "configurable": true,
              "writable": true
            });
          } else {
            String.prototype.startsWith = startsWith;
          }
        })();
      }
      function toKebabCase(str) {
        return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function($4, ofs) {
          return (ofs ? "-" : "") + $4.toLowerCase();
        });
      }
      function getSelectedOptions(select, ignoreDisabled) {
        var selectedOptions = select.selectedOptions, options = [], opt;
        if (ignoreDisabled) {
          for (var i = 0, len = selectedOptions.length; i < len; i++) {
            opt = selectedOptions[i];
            if (!(opt.disabled || opt.parentNode.tagName === "OPTGROUP" && opt.parentNode.disabled)) {
              options.push(opt);
            }
          }
          return options;
        }
        return selectedOptions;
      }
      function getSelectValues(select, selectedOptions) {
        var value = [], options = selectedOptions || select.selectedOptions, opt;
        for (var i = 0, len = options.length; i < len; i++) {
          opt = options[i];
          if (!(opt.disabled || opt.parentNode.tagName === "OPTGROUP" && opt.parentNode.disabled)) {
            value.push(opt.value);
          }
        }
        if (!select.multiple) {
          return !value.length ? null : value[0];
        }
        return value;
      }
      var valHooks = {
        useDefault: false,
        _set: $3.valHooks.select.set
      };
      $3.valHooks.select.set = function(elem, value) {
        if (value && !valHooks.useDefault) $3(elem).data("selected", true);
        return valHooks._set.apply(this, arguments);
      };
      var changedArguments = null;
      var EventIsSupported = (function() {
        try {
          new Event("change");
          return true;
        } catch (e) {
          return false;
        }
      })();
      $3.fn.triggerNative = function(eventName) {
        var el = this[0], event;
        if (el.dispatchEvent) {
          if (EventIsSupported) {
            event = new Event(eventName, {
              bubbles: true
            });
          } else {
            event = document.createEvent("Event");
            event.initEvent(eventName, true, false);
          }
          el.dispatchEvent(event);
        }
      };
      function stringSearch(li, searchString, method, normalize) {
        var stringTypes = [
          "display",
          "subtext",
          "tokens"
        ], searchSuccess = false;
        for (var i = 0; i < stringTypes.length; i++) {
          var stringType = stringTypes[i], string = li[stringType];
          if (string) {
            string = string.toString();
            if (stringType === "display") {
              string = string.replace(/<[^>]+>/g, "");
            }
            if (normalize) string = normalizeToBase(string);
            string = string.toUpperCase();
            if (typeof method === "function") {
              searchSuccess = method(string, searchString);
            } else if (method === "contains") {
              searchSuccess = string.indexOf(searchString) >= 0;
            } else if (method === "containsAll") {
              var searchArray = searchString.split(" ");
              var notAllMatched = false;
              searchSuccess = false;
              for (var searchSubString in searchArray) {
                searchSuccess = string.indexOf(searchArray[searchSubString]) >= 0;
                if (!searchSuccess) notAllMatched = true;
              }
              if (notAllMatched) searchSuccess = false;
            } else {
              searchSuccess = string.startsWith(searchString);
            }
            if (searchSuccess) break;
          }
        }
        return searchSuccess;
      }
      function toInteger(value) {
        return parseInt(value, 10) || 0;
      }
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboMarksExtendedRange = "\\u1ab0-\\u1aff", rsComboMarksSupplementRange = "\\u1dc0-\\u1dff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
      var rsCombo = "[" + rsComboRange + "]";
      var reComboMark = RegExp(rsCombo, "g");
      function deburrLetter(key) {
        return deburredLetters[key];
      }
      ;
      function normalizeToBase(string) {
        string = string.toString();
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      var escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      var createEscaper = function(map) {
        var escaper = function(match) {
          return map[match];
        };
        var source = "(?:" + Object.keys(map).join("|") + ")";
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, "g");
        return function(string) {
          string = string == null ? "" : "" + string;
          return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
      };
      var htmlEscape = createEscaper(escapeMap);
      var keyCodeMap = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9"
      };
      var keyCodes = {
        ESCAPE: 27,
        // KeyboardEvent.which value for Escape (Esc) key
        ENTER: 13,
        // KeyboardEvent.which value for Enter key
        SPACE: 32,
        // KeyboardEvent.which value for space key
        TAB: 9,
        // KeyboardEvent.which value for tab key
        ARROW_UP: 38,
        // KeyboardEvent.which value for up arrow key
        ARROW_DOWN: 40
        // KeyboardEvent.which value for down arrow key
      };
      var Dropdown = window.Dropdown || window.bootstrap && window.bootstrap.Dropdown;
      function getVersion() {
        var version2;
        try {
          version2 = $3.fn.dropdown.Constructor.VERSION;
        } catch (err) {
          version2 = Dropdown.VERSION;
        }
        return version2;
      }
      var version = {
        success: false,
        major: "3"
      };
      try {
        version.full = (getVersion() || "").split(" ")[0].split(".");
        version.major = version.full[0];
        version.success = true;
      } catch (err) {
      }
      var selectId = 0;
      var EVENT_KEY = ".bs.select";
      var classNames = {
        DISABLED: "disabled",
        DIVIDER: "divider",
        SHOW: "open",
        DROPUP: "dropup",
        MENU: "dropdown-menu",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        // to-do: replace with more advanced template/customization options
        BUTTONCLASS: "btn-default",
        POPOVERHEADER: "popover-title",
        ICONBASE: "glyphicon",
        TICKICON: "glyphicon-ok"
      };
      var Selector = {
        MENU: "." + classNames.MENU,
        DATA_TOGGLE: 'data-toggle="dropdown"'
      };
      var elementTemplates = {
        div: document.createElement("div"),
        span: document.createElement("span"),
        i: document.createElement("i"),
        subtext: document.createElement("small"),
        a: document.createElement("a"),
        li: document.createElement("li"),
        whitespace: document.createTextNode("\xA0"),
        fragment: document.createDocumentFragment(),
        option: document.createElement("option")
      };
      elementTemplates.selectedOption = elementTemplates.option.cloneNode(false);
      elementTemplates.selectedOption.setAttribute("selected", true);
      elementTemplates.noResults = elementTemplates.li.cloneNode(false);
      elementTemplates.noResults.className = "no-results";
      elementTemplates.a.setAttribute("role", "option");
      elementTemplates.a.className = "dropdown-item";
      elementTemplates.subtext.className = "text-muted";
      elementTemplates.text = elementTemplates.span.cloneNode(false);
      elementTemplates.text.className = "text";
      elementTemplates.checkMark = elementTemplates.span.cloneNode(false);
      var REGEXP_ARROW = new RegExp(keyCodes.ARROW_UP + "|" + keyCodes.ARROW_DOWN);
      var REGEXP_TAB_OR_ESCAPE = new RegExp("^" + keyCodes.TAB + "$|" + keyCodes.ESCAPE);
      var generateOption = {
        li: function(content, classes, optgroup) {
          var li = elementTemplates.li.cloneNode(false);
          if (content) {
            if (content.nodeType === 1 || content.nodeType === 11) {
              li.appendChild(content);
            } else {
              li.innerHTML = content;
            }
          }
          if (typeof classes !== "undefined" && classes !== "") li.className = classes;
          if (typeof optgroup !== "undefined" && optgroup !== null) li.classList.add("optgroup-" + optgroup);
          return li;
        },
        a: function(text, classes, inline) {
          var a = elementTemplates.a.cloneNode(true);
          if (text) {
            if (text.nodeType === 11) {
              a.appendChild(text);
            } else {
              a.insertAdjacentHTML("beforeend", text);
            }
          }
          if (typeof classes !== "undefined" && classes !== "") a.classList.add.apply(a.classList, classes.split(/\s+/));
          if (inline) a.setAttribute("style", inline);
          return a;
        },
        text: function(options, useFragment) {
          var textElement = elementTemplates.text.cloneNode(false), subtextElement, iconElement;
          if (options.content) {
            textElement.innerHTML = options.content;
          } else {
            textElement.textContent = options.text;
            if (options.icon) {
              var whitespace = elementTemplates.whitespace.cloneNode(false);
              iconElement = (useFragment === true ? elementTemplates.i : elementTemplates.span).cloneNode(false);
              iconElement.className = this.options.iconBase + " " + options.icon;
              elementTemplates.fragment.appendChild(iconElement);
              elementTemplates.fragment.appendChild(whitespace);
            }
            if (options.subtext) {
              subtextElement = elementTemplates.subtext.cloneNode(false);
              subtextElement.textContent = options.subtext;
              textElement.appendChild(subtextElement);
            }
          }
          if (useFragment === true) {
            while (textElement.childNodes.length > 0) {
              elementTemplates.fragment.appendChild(textElement.childNodes[0]);
            }
          } else {
            elementTemplates.fragment.appendChild(textElement);
          }
          return elementTemplates.fragment;
        },
        label: function(options) {
          var textElement = elementTemplates.text.cloneNode(false), subtextElement, iconElement;
          textElement.innerHTML = options.display;
          if (options.icon) {
            var whitespace = elementTemplates.whitespace.cloneNode(false);
            iconElement = elementTemplates.span.cloneNode(false);
            iconElement.className = this.options.iconBase + " " + options.icon;
            elementTemplates.fragment.appendChild(iconElement);
            elementTemplates.fragment.appendChild(whitespace);
          }
          if (options.subtext) {
            subtextElement = elementTemplates.subtext.cloneNode(false);
            subtextElement.textContent = options.subtext;
            textElement.appendChild(subtextElement);
          }
          elementTemplates.fragment.appendChild(textElement);
          return elementTemplates.fragment;
        }
      };
      var getOptionData = {
        fromOption: function(option, type) {
          var value;
          switch (type) {
            case "divider":
              value = option.getAttribute("data-divider") === "true";
              break;
            case "text":
              value = option.textContent;
              break;
            case "label":
              value = option.label;
              break;
            case "style":
              value = option.style.cssText;
              break;
            case "title":
              value = option.title;
              break;
            default:
              value = option.getAttribute("data-" + toKebabCase(type));
              break;
          }
          return value;
        },
        fromDataSource: function(option, type) {
          var value;
          switch (type) {
            case "text":
            case "label":
              value = option.text || option.value || "";
              break;
            default:
              value = option[type];
              break;
          }
          return value;
        }
      };
      function showNoResults(searchMatch, searchValue) {
        if (!searchMatch.length) {
          elementTemplates.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + htmlEscape(searchValue) + '"');
          this.$menuInner[0].firstChild.appendChild(elementTemplates.noResults);
        }
      }
      function filterHidden(item) {
        return !(item.hidden || this.options.hideDisabled && item.disabled);
      }
      var Selectpicker = function(element, options) {
        var that = this;
        if (!valHooks.useDefault) {
          $3.valHooks.select.set = valHooks._set;
          valHooks.useDefault = true;
        }
        this.$element = $3(element);
        this.$newElement = null;
        this.$button = null;
        this.$menu = null;
        this.options = options;
        this.selectpicker = {
          main: {
            data: [],
            optionQueue: elementTemplates.fragment.cloneNode(false),
            hasMore: false
          },
          search: {
            data: [],
            hasMore: false
          },
          current: {},
          // current is either equal to main or search depending on if a search is in progress
          view: {},
          // map of option values and their respective data (only used in conjunction with options.source)
          optionValuesDataMap: {},
          isSearching: false,
          keydown: {
            keyHistory: "",
            resetKeyHistory: {
              start: function() {
                return setTimeout(function() {
                  that.selectpicker.keydown.keyHistory = "";
                }, 800);
              }
            }
          }
        };
        this.sizeInfo = {};
        var winPad = this.options.windowPadding;
        if (typeof winPad === "number") {
          this.options.windowPadding = [winPad, winPad, winPad, winPad];
        }
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.setStyle = Selectpicker.prototype.setStyle;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.destroy = Selectpicker.prototype.destroy;
        this.remove = Selectpicker.prototype.remove;
        this.show = Selectpicker.prototype.show;
        this.hide = Selectpicker.prototype.hide;
        this.init();
      };
      Selectpicker.VERSION = "1.14.0-beta3";
      Selectpicker.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function(numSelected, numTotal) {
          return numSelected == 1 ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function(numAll, numGroup) {
          return [
            numAll == 1 ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)",
            numGroup == 1 ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        source: {
          pageSize: 40
        },
        //chunkSize: 40,
        chunkSize: Number.MAX_VALUE,
        doneButton: false,
        doneButtonText: "Close",
        multipleSeparator: " | ",
        styleBase: "btn",
        style: classNames.BUTTONCLASS,
        size: "auto",
        title: null,
        placeholder: null,
        titleTip: null,
        allowClear: false,
        selectedTextFormat: "values",
        width: false,
        container: false,
        hideDisabled: false,
        showSubtext: false,
        showIcon: true,
        showContent: true,
        dropupAuto: true,
        header: false,
        liveSearch: false,
        liveSearchPlaceholder: null,
        liveSearchNormalize: false,
        liveSearchStyle: "contains",
        actionsBox: false,
        iconBase: classNames.ICONBASE,
        tickIcon: classNames.TICKICON,
        showTick: false,
        template: {
          caret: '<span class="caret"></span>'
        },
        maxOptions: false,
        mobile: false,
        selectOnTab: true,
        dropdownAlignRight: false,
        windowPadding: 0,
        //virtualScroll: 600,
        virtualScroll: 1e6,
        display: false,
        sanitize: true,
        sanitizeFn: null,
        whiteList: DefaultWhitelist
      };
      Selectpicker.prototype = {
        constructor: Selectpicker,
        init: function() {
          var that = this, id = this.$element.attr("id"), element = this.$element[0], form = element.form;
          selectId++;
          this.selectId = "bs-select-" + selectId;
          element.classList.add("bs-select-hidden");
          this.multiple = this.$element.prop("multiple");
          this.autofocus = this.$element.prop("autofocus");
          if (element.classList.contains("show-tick")) {
            this.options.showTick = true;
          }
          this.$newElement = this.createDropdown();
          this.$element.after(this.$newElement).prependTo(this.$newElement);
          if (form && element.form === null) {
            if (!form.id) form.id = "form-" + this.selectId;
            element.setAttribute("form", form.id);
          }
          this.$button = this.$newElement.children("button");
          if (this.options.allowClear) this.$clearButton = this.$button.children(".bs-select-clear-selected");
          this.$menu = this.$newElement.children(Selector.MENU);
          this.$menuInner = this.$menu.children(".inner");
          this.$searchbox = this.$menu.find("input");
          element.classList.remove("bs-select-hidden");
          this.fetchData(function() {
            that.render(true);
            that.buildList();
            requestAnimationFrame(function() {
              that.$element.trigger("loaded" + EVENT_KEY);
            });
          });
          if (this.options.dropdownAlignRight === true) this.$menu[0].classList.add(classNames.MENURIGHT);
          if (typeof id !== "undefined") {
            this.$button.attr("data-id", id);
          }
          this.checkDisabled();
          this.clickListener();
          if (version.major > 4) this.dropdown = new Dropdown(this.$button[0]);
          if (this.options.liveSearch) {
            this.liveSearchListener();
            this.focusedParent = this.$searchbox[0];
          } else {
            this.focusedParent = this.$menuInner[0];
          }
          this.setStyle();
          this.setWidth();
          if (this.options.container) {
            this.selectPosition();
          } else {
            this.$element.on("hide" + EVENT_KEY, function() {
              if (that.isVirtual()) {
                var menuInner = that.$menuInner[0], emptyMenu = menuInner.firstChild.cloneNode(false);
                menuInner.replaceChild(emptyMenu, menuInner.firstChild);
                menuInner.scrollTop = 0;
              }
            });
          }
          this.$menu.data("this", this);
          this.$newElement.data("this", this);
          if (this.options.mobile) this.mobile();
          this.$newElement.on({
            "hide.bs.dropdown": function(e) {
              that.$element.trigger("hide" + EVENT_KEY, e);
            },
            "hidden.bs.dropdown": function(e) {
              that.$element.trigger("hidden" + EVENT_KEY, e);
            },
            "show.bs.dropdown": function(e) {
              that.$element.trigger("show" + EVENT_KEY, e);
            },
            "shown.bs.dropdown": function(e) {
              that.$element.trigger("shown" + EVENT_KEY, e);
            }
          });
          if (element.hasAttribute("required")) {
            this.$element.on("invalid" + EVENT_KEY, function() {
              that.$button[0].classList.add("bs-invalid");
              that.$element.on("shown" + EVENT_KEY + ".invalid", function() {
                that.$element.val(that.$element.val()).off("shown" + EVENT_KEY + ".invalid");
              }).on("rendered" + EVENT_KEY, function() {
                if (this.validity.valid) that.$button[0].classList.remove("bs-invalid");
                that.$element.off("rendered" + EVENT_KEY);
              });
              that.$button.on("blur" + EVENT_KEY, function() {
                that.$element.trigger("focus").trigger("blur");
                that.$button.off("blur" + EVENT_KEY);
              });
            });
          }
          if (form) {
            $3(form).on("reset" + EVENT_KEY, function() {
              requestAnimationFrame(function() {
                that.render();
              });
            });
          }
        },
        createDropdown: function() {
          var showTick = this.multiple || this.options.showTick ? " show-tick" : "", multiselectable = this.multiple ? ' aria-multiselectable="true"' : "", inputGroup = "", autofocus = this.autofocus ? " autofocus" : "";
          if (version.major < 4 && this.$element.parent().hasClass("input-group")) {
            inputGroup = " input-group-btn";
          }
          var drop, header = "", searchbox = "", actionsbox = "", donebutton = "", clearButton = "";
          if (this.options.header) {
            header = '<div class="' + classNames.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>";
          }
          if (this.options.liveSearch) {
            searchbox = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (this.options.liveSearchPlaceholder === null ? "" : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>';
          }
          if (this.multiple && this.options.actionsBox) {
            actionsbox = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn ' + classNames.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + classNames.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>";
          }
          if (this.multiple && this.options.doneButton) {
            donebutton = '<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm ' + classNames.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>";
          }
          if (this.options.allowClear) {
            clearButton = '<span class="close bs-select-clear-selected" title="' + this.options.deselectAllText + '"><span>&times;</span>';
          }
          drop = '<div class="dropdown bootstrap-select' + showTick + inputGroup + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + (this.options.display === "static" ? 'data-display="static"' : "") + Selector.DATA_TOGGLE + autofocus + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>' + clearButton + "</span>" + (version.major >= "4" ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + classNames.MENU + " " + (version.major >= "4" ? "" : classNames.SHOW) + '">' + header + searchbox + actionsbox + '<div class="inner ' + classNames.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + multiselectable + '><ul class="' + classNames.MENU + " inner " + (version.major >= "4" ? classNames.SHOW : "") + '" role="presentation"></ul></div>' + donebutton + "</div></div>";
          return $3(drop);
        },
        setPositionData: function() {
          this.selectpicker.view.canHighlight = [];
          this.selectpicker.view.size = 0;
          this.selectpicker.view.firstHighlightIndex = false;
          for (var i = 0; i < this.selectpicker.current.data.length; i++) {
            var li = this.selectpicker.current.data[i], canHighlight = true;
            if (li.type === "divider") {
              canHighlight = false;
              li.height = this.sizeInfo.dividerHeight;
            } else if (li.type === "optgroup-label") {
              canHighlight = false;
              li.height = this.sizeInfo.dropdownHeaderHeight;
            } else {
              li.height = this.sizeInfo.liHeight;
            }
            if (li.disabled) canHighlight = false;
            this.selectpicker.view.canHighlight.push(canHighlight);
            if (canHighlight) {
              this.selectpicker.view.size++;
              li.posinset = this.selectpicker.view.size;
              if (this.selectpicker.view.firstHighlightIndex === false) this.selectpicker.view.firstHighlightIndex = i;
            }
            li.position = (i === 0 ? 0 : this.selectpicker.current.data[i - 1].position) + li.height;
          }
        },
        isVirtual: function() {
          return this.options.virtualScroll !== false && this.selectpicker.main.data.length >= this.options.virtualScroll || this.options.virtualScroll === true;
        },
        createView: function(isSearching, setSize, refresh) {
          var that = this, scrollTop = 0;
          this.selectpicker.isSearching = isSearching;
          this.selectpicker.current = isSearching ? this.selectpicker.search : this.selectpicker.main;
          this.setPositionData();
          if (setSize) {
            if (refresh) {
              scrollTop = this.$menuInner[0].scrollTop;
            } else if (!that.multiple) {
              var element = that.$element[0], selectedIndex = (element.options[element.selectedIndex] || {}).liIndex;
              if (typeof selectedIndex === "number" && that.options.size !== false) {
                var selectedData = that.selectpicker.main.data[selectedIndex], position = selectedData && selectedData.position;
                if (position) {
                  scrollTop = position - (that.sizeInfo.menuInnerHeight + that.sizeInfo.liHeight) / 2;
                }
              }
            }
          }
          scroll(scrollTop, true);
          this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, updateValue) {
            if (!that.noScroll) scroll(this.scrollTop, updateValue);
            that.noScroll = false;
          });
          function scroll(scrollTop2, init) {
            var size = that.selectpicker.current.data.length, chunks = [], chunkSize, chunkCount, firstChunk, lastChunk, currentChunk, prevPositions, positionIsDifferent, previousElements, menuIsDifferent = true, isVirtual = that.isVirtual();
            that.selectpicker.view.scrollTop = scrollTop2;
            chunkSize = that.options.chunkSize;
            chunkCount = Math.ceil(size / chunkSize) || 1;
            for (var i = 0; i < chunkCount; i++) {
              var endOfChunk = (i + 1) * chunkSize;
              if (i === chunkCount - 1) {
                endOfChunk = size;
              }
              chunks[i] = [
                i * chunkSize + (!i ? 0 : 1),
                endOfChunk
              ];
              if (!size) break;
              if (currentChunk === void 0 && scrollTop2 - 1 <= that.selectpicker.current.data[endOfChunk - 1].position - that.sizeInfo.menuInnerHeight) {
                currentChunk = i;
              }
            }
            if (currentChunk === void 0) currentChunk = 0;
            prevPositions = [that.selectpicker.view.position0, that.selectpicker.view.position1];
            firstChunk = Math.max(0, currentChunk - 1);
            lastChunk = Math.min(chunkCount - 1, currentChunk + 1);
            that.selectpicker.view.position0 = isVirtual === false ? 0 : Math.max(0, chunks[firstChunk][0]) || 0;
            that.selectpicker.view.position1 = isVirtual === false ? size : Math.min(size, chunks[lastChunk][1]) || 0;
            positionIsDifferent = prevPositions[0] !== that.selectpicker.view.position0 || prevPositions[1] !== that.selectpicker.view.position1;
            if (that.activeElement !== void 0) {
              if (init) {
                if (that.activeElement !== that.selectedElement) {
                  that.defocusItem(that.activeElement);
                }
                that.activeElement = void 0;
              }
              if (that.activeElement !== that.selectedElement) {
                that.defocusItem(that.selectedElement);
              }
            }
            if (that.prevActiveElement !== void 0 && that.prevActiveElement !== that.activeElement && that.prevActiveElement !== that.selectedElement) {
              that.defocusItem(that.prevActiveElement);
            }
            if (init || positionIsDifferent || that.selectpicker.current.hasMore) {
              previousElements = that.selectpicker.view.visibleElements ? that.selectpicker.view.visibleElements.slice() : [];
              if (isVirtual === false) {
                that.selectpicker.view.visibleElements = that.selectpicker.current.elements;
              } else {
                that.selectpicker.view.visibleElements = that.selectpicker.current.elements.slice(that.selectpicker.view.position0, that.selectpicker.view.position1);
              }
              that.setOptionStatus();
              if (isSearching || isVirtual === false && init) menuIsDifferent = !isEqual(previousElements, that.selectpicker.view.visibleElements);
              if ((init || isVirtual === true) && menuIsDifferent) {
                var menuInner = that.$menuInner[0], menuFragment = document.createDocumentFragment(), emptyMenu = menuInner.firstChild.cloneNode(false), marginTop, marginBottom, elements = that.selectpicker.view.visibleElements, toSanitize = [];
                menuInner.replaceChild(emptyMenu, menuInner.firstChild);
                for (var i = 0, visibleElementsLen = elements.length; i < visibleElementsLen; i++) {
                  var element2 = elements[i], elText, elementData;
                  if (that.options.sanitize) {
                    elText = element2.lastChild;
                    if (elText) {
                      elementData = that.selectpicker.current.data[i + that.selectpicker.view.position0];
                      if (elementData && elementData.content && !elementData.sanitized) {
                        toSanitize.push(elText);
                        elementData.sanitized = true;
                      }
                    }
                  }
                  menuFragment.appendChild(element2);
                }
                if (that.options.sanitize && toSanitize.length) {
                  sanitizeHtml(toSanitize, that.options.whiteList, that.options.sanitizeFn);
                }
                if (isVirtual === true) {
                  marginTop = that.selectpicker.view.position0 === 0 ? 0 : that.selectpicker.current.data[that.selectpicker.view.position0 - 1].position;
                  marginBottom = that.selectpicker.view.position1 > size - 1 ? 0 : that.selectpicker.current.data[size - 1].position - that.selectpicker.current.data[that.selectpicker.view.position1 - 1].position;
                  menuInner.firstChild.style.marginTop = marginTop + "px";
                  menuInner.firstChild.style.marginBottom = marginBottom + "px";
                } else {
                  menuInner.firstChild.style.marginTop = 0;
                  menuInner.firstChild.style.marginBottom = 0;
                }
                menuInner.firstChild.appendChild(menuFragment);
                if (isVirtual === true && that.sizeInfo.hasScrollBar) {
                  var menuInnerInnerWidth = menuInner.firstChild.offsetWidth;
                  if (init && menuInnerInnerWidth < that.sizeInfo.menuInnerInnerWidth && that.sizeInfo.totalMenuWidth > that.sizeInfo.selectWidth) {
                    menuInner.firstChild.style.minWidth = that.sizeInfo.menuInnerInnerWidth + "px";
                  } else if (menuInnerInnerWidth > that.sizeInfo.menuInnerInnerWidth) {
                    that.$menu[0].style.minWidth = 0;
                    var actualMenuWidth = menuInner.firstChild.offsetWidth;
                    if (actualMenuWidth > that.sizeInfo.menuInnerInnerWidth) {
                      that.sizeInfo.menuInnerInnerWidth = actualMenuWidth;
                      menuInner.firstChild.style.minWidth = that.sizeInfo.menuInnerInnerWidth + "px";
                    }
                    that.$menu[0].style.minWidth = "";
                  }
                }
              }
              if ((!isSearching && that.options.source.data || isSearching && that.options.source.search) && that.selectpicker.current.hasMore && currentChunk === chunkCount - 1) {
                if (scrollTop2 > 0) {
                  var page = Math.floor(currentChunk * that.options.chunkSize / that.options.source.pageSize) + 2;
                  that.fetchData(function() {
                    that.render();
                    that.buildList(size, isSearching);
                    that.setPositionData();
                    scroll(scrollTop2);
                  }, isSearching ? "search" : "data", page, isSearching ? that.selectpicker.search.previousValue : void 0);
                }
              }
            }
            that.prevActiveElement = that.activeElement;
            if (!that.options.liveSearch) {
              that.$menuInner.trigger("focus");
            } else if (isSearching && init) {
              var index = 0, newActive;
              if (!that.selectpicker.view.canHighlight[index]) {
                index = 1 + that.selectpicker.view.canHighlight.slice(1).indexOf(true);
              }
              newActive = that.selectpicker.view.visibleElements[index];
              that.defocusItem(that.selectpicker.view.currentActive);
              that.activeElement = (that.selectpicker.current.data[index] || {}).element;
              that.focusItem(newActive);
            }
          }
          $3(window).off("resize" + EVENT_KEY + "." + this.selectId + ".createView").on("resize" + EVENT_KEY + "." + this.selectId + ".createView", function() {
            var isActive = that.$newElement.hasClass(classNames.SHOW);
            if (isActive) scroll(that.$menuInner[0].scrollTop);
          });
        },
        focusItem: function(li, liData, noStyle) {
          if (li) {
            liData = liData || this.selectpicker.current.data[this.selectpicker.current.elements.indexOf(this.activeElement)];
            var a = li.firstChild;
            if (a) {
              a.setAttribute("aria-setsize", this.selectpicker.view.size);
              a.setAttribute("aria-posinset", liData.posinset);
              if (noStyle !== true) {
                this.focusedParent.setAttribute("aria-activedescendant", a.id);
                li.classList.add("active");
                a.classList.add("active");
              }
            }
          }
        },
        defocusItem: function(li) {
          if (li) {
            li.classList.remove("active");
            if (li.firstChild) li.firstChild.classList.remove("active");
          }
        },
        setPlaceholder: function() {
          var that = this, updateIndex = false;
          if ((this.options.placeholder || this.options.allowClear) && !this.multiple) {
            if (!this.selectpicker.view.titleOption) this.selectpicker.view.titleOption = document.createElement("option");
            updateIndex = true;
            var element = this.$element[0], selectTitleOption = false, titleNotAppended = !this.selectpicker.view.titleOption.parentNode, selectedIndex = element.selectedIndex, selectedOption = element.options[selectedIndex], firstSelectable = element.querySelector("select > *:not(:disabled)"), firstSelectableIndex = firstSelectable ? firstSelectable.index : 0, navigation = window.performance && window.performance.getEntriesByType("navigation"), isNotBackForward = navigation && navigation.length ? navigation[0].type !== "back_forward" : window.performance.navigation.type !== 2;
            if (titleNotAppended) {
              this.selectpicker.view.titleOption.className = "bs-title-option";
              this.selectpicker.view.titleOption.value = "";
              selectTitleOption = !selectedOption || selectedIndex === firstSelectableIndex && selectedOption.defaultSelected === false && this.$element.data("selected") === void 0;
            }
            if (titleNotAppended || this.selectpicker.view.titleOption.index !== 0) {
              element.insertBefore(this.selectpicker.view.titleOption, element.firstChild);
            }
            if (selectTitleOption && isNotBackForward) {
              element.selectedIndex = 0;
            } else if (document.readyState !== "complete") {
              window.addEventListener("pageshow", function() {
                if (that.selectpicker.view.displayedValue !== element.value) that.render();
              });
            }
          }
          return updateIndex;
        },
        fetchData: function(callback, type, page, searchValue) {
          page = page || 1;
          type = type || "data";
          var that = this, data = this.options.source[type], builtData;
          if (data) {
            this.options.virtualScroll = true;
            if (typeof data === "function") {
              data.call(
                this,
                function(data2, more, totalItems) {
                  var current = that.selectpicker[type === "search" ? "search" : "main"];
                  current.hasMore = more;
                  current.totalItems = totalItems;
                  builtData = that.buildData(data2, type);
                  callback.call(that, builtData);
                  that.$element.trigger("fetched" + EVENT_KEY);
                },
                page,
                searchValue
              );
            } else if (Array.isArray(data)) {
              builtData = that.buildData(data, type);
              callback.call(that, builtData);
            }
          } else {
            builtData = this.buildData(false, type);
            callback.call(that, builtData);
          }
        },
        buildData: function(data, type) {
          var that = this;
          var dataGetter = data === false ? getOptionData.fromOption : getOptionData.fromDataSource;
          var optionSelector = ':not([hidden]):not([data-hidden="true"]):not([style*="display: none"])', mainData = [], startLen = this.selectpicker.main.data ? this.selectpicker.main.data.length : 0, optID = 0, startIndex = this.setPlaceholder() && !data ? 1 : 0;
          if (type === "search") {
            startLen = this.selectpicker.search.data.length;
          }
          if (this.options.hideDisabled) optionSelector += ":not(:disabled)";
          var selectOptions = data ? data.filter(filterHidden, this) : this.$element[0].querySelectorAll("select > *" + optionSelector);
          function addDivider(config) {
            var previousData = mainData[mainData.length - 1];
            if (previousData && previousData.type === "divider" && (previousData.optID || config.optID)) {
              return;
            }
            config = config || {};
            config.type = "divider";
            mainData.push(config);
          }
          function addOption(item2, config) {
            config = config || {};
            config.divider = dataGetter(item2, "divider");
            if (config.divider === true) {
              addDivider({
                optID: config.optID
              });
            } else {
              var liIndex = mainData.length + startLen, cssText = dataGetter(item2, "style"), inlineStyle = cssText ? htmlEscape(cssText) : "", optionClass = (item2.className || "") + (config.optgroupClass || "");
              if (config.optID) optionClass = "opt " + optionClass;
              config.optionClass = optionClass.trim();
              config.inlineStyle = inlineStyle;
              config.text = dataGetter(item2, "text");
              config.title = dataGetter(item2, "title");
              config.content = dataGetter(item2, "content");
              config.tokens = dataGetter(item2, "tokens");
              config.subtext = dataGetter(item2, "subtext");
              config.icon = dataGetter(item2, "icon");
              config.display = config.content || config.text;
              config.value = item2.value === void 0 ? item2.text : item2.value;
              config.type = "option";
              config.index = liIndex;
              config.option = !item2.option ? item2 : item2.option;
              config.option.liIndex = liIndex;
              config.selected = !!item2.selected;
              config.disabled = config.disabled || !!item2.disabled;
              if (data !== false) {
                if (that.selectpicker.optionValuesDataMap[config.value]) {
                  config = $3.extend(that.selectpicker.optionValuesDataMap[config.value], config);
                } else {
                  that.selectpicker.optionValuesDataMap[config.value] = config;
                }
              }
              mainData.push(config);
            }
          }
          function addOptgroup(index, selectOptions2) {
            var optgroup = selectOptions2[index], previous = index - 1 < startIndex ? false : selectOptions2[index - 1], next = selectOptions2[index + 1], options = data ? optgroup.children.filter(filterHidden, this) : optgroup.querySelectorAll("option" + optionSelector);
            if (!options.length) return;
            var config = {
              display: htmlEscape(dataGetter(item, "label")),
              subtext: dataGetter(optgroup, "subtext"),
              icon: dataGetter(optgroup, "icon"),
              type: "optgroup-label",
              optgroupClass: " " + (optgroup.className || ""),
              optgroup
            }, headerIndex, lastIndex;
            optID++;
            if (previous) {
              addDivider({ optID });
            }
            config.optID = optID;
            mainData.push(config);
            for (var j = 0, len2 = options.length; j < len2; j++) {
              var option = options[j];
              if (j === 0) {
                headerIndex = mainData.length - 1;
                lastIndex = headerIndex + len2;
              }
              addOption(option, {
                headerIndex,
                lastIndex,
                optID: config.optID,
                optgroupClass: config.optgroupClass,
                disabled: optgroup.disabled
              });
            }
            if (next) {
              addDivider({ optID });
            }
          }
          for (var len = selectOptions.length, i = startIndex; i < len; i++) {
            var item = selectOptions[i], children = item.children;
            if (children && children.length) {
              addOptgroup.call(this, i, selectOptions);
            } else {
              addOption.call(this, item, {});
            }
          }
          switch (type) {
            case "data": {
              if (!this.selectpicker.main.data) {
                this.selectpicker.main.data = [];
              }
              Array.prototype.push.apply(this.selectpicker.main.data, mainData);
              this.selectpicker.current.data = this.selectpicker.main.data;
              break;
            }
            case "search": {
              Array.prototype.push.apply(this.selectpicker.search.data, mainData);
              break;
            }
          }
          return mainData;
        },
        buildList: function(size, searching) {
          var that = this, selectData = searching ? this.selectpicker.search.data : this.selectpicker.main.data, mainElements = [], widestOptionLength = 0;
          if ((that.options.showTick || that.multiple) && !elementTemplates.checkMark.parentNode) {
            elementTemplates.checkMark.className = this.options.iconBase + " " + that.options.tickIcon + " check-mark";
            elementTemplates.a.appendChild(elementTemplates.checkMark);
          }
          function buildElement(mainElements2, item2) {
            var liElement, combinedLength = 0;
            switch (item2.type) {
              case "divider":
                liElement = generateOption.li(
                  false,
                  classNames.DIVIDER,
                  item2.optID ? item2.optID + "div" : void 0
                );
                break;
              case "option":
                liElement = generateOption.li(
                  generateOption.a(
                    generateOption.text.call(that, item2),
                    item2.optionClass,
                    item2.inlineStyle
                  ),
                  "",
                  item2.optID
                );
                if (liElement.firstChild) {
                  liElement.firstChild.id = that.selectId + "-" + item2.index;
                }
                break;
              case "optgroup-label":
                liElement = generateOption.li(
                  generateOption.label.call(that, item2),
                  "dropdown-header" + item2.optgroupClass,
                  item2.optID
                );
                break;
            }
            if (!item2.element) {
              item2.element = liElement;
            } else {
              item2.element.innerHTML = liElement.innerHTML;
            }
            mainElements2.push(item2.element);
            if (item2.display) combinedLength += item2.display.length;
            if (item2.subtext) combinedLength += item2.subtext.length;
            if (item2.icon) combinedLength += 1;
            if (combinedLength > widestOptionLength) {
              widestOptionLength = combinedLength;
              that.selectpicker.view.widestOption = mainElements2[mainElements2.length - 1];
            }
          }
          var startIndex = size || 0;
          for (var len = selectData.length, i = startIndex; i < len; i++) {
            var item = selectData[i];
            buildElement(mainElements, item);
          }
          if (size) {
            if (searching) {
              Array.prototype.push.apply(this.selectpicker.search.elements, mainElements);
            } else {
              Array.prototype.push.apply(this.selectpicker.main.elements, mainElements);
              this.selectpicker.current.elements = this.selectpicker.main.elements;
            }
          } else {
            if (searching) {
              this.selectpicker.search.elements = mainElements;
            } else {
              this.selectpicker.main.elements = this.selectpicker.current.elements = mainElements;
            }
          }
        },
        findLis: function() {
          return this.$menuInner.find(".inner > li");
        },
        render: function(init) {
          var that = this, element = this.$element[0], placeholderSelected = this.setPlaceholder() && element.selectedIndex === 0, selectedOptions = getSelectedOptions(element, this.options.hideDisabled), selectedCount = selectedOptions.length, selectedValues = getSelectValues(element, selectedOptions), button = this.$button[0], buttonInner = button.querySelector(".filter-option-inner-inner"), multipleSeparator = document.createTextNode(this.options.multipleSeparator), titleFragment = elementTemplates.fragment.cloneNode(false), titleTipFragment = elementTemplates.fragment.cloneNode(false), showCount, countMax, hasContent = false;
          function createSelected(item) {
            if (item.selected) {
              that.createOption(item, true);
            } else if (item.children && item.children.length) {
              item.children.map(createSelected);
            }
          }
          if (this.options.source.data && init) {
            selectedOptions.map(createSelected);
            element.appendChild(this.selectpicker.main.optionQueue);
            if (placeholderSelected) placeholderSelected = element.selectedIndex === 0;
          }
          button.classList.toggle("bs-placeholder", that.multiple ? !selectedCount : !selectedValues && selectedValues !== 0);
          if (!that.multiple && selectedOptions.length === 1) {
            that.selectpicker.view.displayedValue = selectedValues;
          }
          if (this.options.selectedTextFormat === "static") {
            titleFragment = generateOption.text.call(this, { text: this.options.placeholder }, true);
          } else {
            showCount = this.multiple && this.options.selectedTextFormat.indexOf("count") !== -1 && selectedCount > 0;
            if (showCount) {
              countMax = this.options.selectedTextFormat.split(">");
              showCount = countMax.length > 1 && selectedCount > countMax[1] || countMax.length === 1 && selectedCount >= 2;
            }
            if (showCount === false) {
              if (!placeholderSelected) {
                for (var selectedIndex = 0; selectedIndex < selectedCount; selectedIndex++) {
                  if (selectedIndex < 50) {
                    var option = selectedOptions[selectedIndex], thisData = this.selectpicker.main.data[option.liIndex], titleOptions = {};
                    if (option) {
                      if (this.multiple && selectedIndex > 0) {
                        titleFragment.appendChild(multipleSeparator.cloneNode(false));
                      }
                      if (option.title) {
                        titleOptions.text = option.title;
                      } else if (thisData) {
                        if (thisData.content && that.options.showContent) {
                          titleOptions.content = thisData.content.toString();
                          hasContent = true;
                        } else {
                          if (that.options.showIcon) {
                            titleOptions.icon = thisData.icon;
                          }
                          if (that.options.showSubtext && !that.multiple && option.subtext) titleOptions.subtext = " " + option.subtext;
                          titleOptions.text = option.text.trim();
                        }
                      }
                      titleFragment.appendChild(generateOption.text.call(this, titleOptions, true));
                    }
                  } else {
                    break;
                  }
                }
                if (selectedCount > 49) {
                  titleFragment.appendChild(document.createTextNode("..."));
                }
              }
            } else {
              var optionSelector = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"]):not([style*="display: none"])';
              if (this.options.hideDisabled) optionSelector += ":not(:disabled)";
              var totalCount = this.$element[0].querySelectorAll("select > option" + optionSelector + ", optgroup" + optionSelector + " option" + optionSelector).length, tr8nText = typeof this.options.countSelectedText === "function" ? this.options.countSelectedText(selectedCount, totalCount) : this.options.countSelectedText;
              titleFragment = generateOption.text.call(this, {
                text: tr8nText.replace("{0}", selectedCount.toString()).replace("{1}", totalCount.toString())
              }, true);
            }
          }
          if (!titleFragment.childNodes.length) {
            titleFragment = generateOption.text.call(this, {
              text: this.options.placeholder ? this.options.placeholder : this.options.noneSelectedText
            }, true);
          }
          button.title = titleFragment.textContent.replace(/<[^>]*>?/g, "").trim();
          if (this.options.sanitize && hasContent) {
            sanitizeHtml([titleFragment], that.options.whiteList, that.options.sanitizeFn);
          }
          buttonInner.innerHTML = "";
          buttonInner.appendChild(titleFragment);
          if (this.options.titleTip && !button.querySelector(".title-tip")) {
            var titleTip = document.createElement("div");
            titleTip.setAttribute("class", "title-tip");
            titleTipFragment = generateOption.text.call(this, {
              text: this.options.titleTip ? this.options.titleTip : ""
            }, true);
            titleTip.appendChild(titleTipFragment);
            button.querySelector(".filter-option").prepend(titleTip);
          }
          if (version.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
            var filterExpand = button.querySelector(".filter-expand"), clone = buttonInner.cloneNode(true);
            clone.className = "filter-expand";
            if (filterExpand) {
              button.replaceChild(clone, filterExpand);
            } else {
              button.appendChild(clone);
            }
          }
          this.$element.trigger("rendered" + EVENT_KEY);
        },
        /**
         * @param [style]
         * @param [status]
         */
        setStyle: function(newStyle, status) {
          var button = this.$button[0], newElement = this.$newElement[0], style = this.options.style.trim(), buttonClass;
          if (this.$element.attr("class")) {
            this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
          }
          if (version.major < 4) {
            newElement.classList.add("bs3");
            if (newElement.parentNode.classList && newElement.parentNode.classList.contains("input-group") && (newElement.previousElementSibling || newElement.nextElementSibling) && (newElement.previousElementSibling || newElement.nextElementSibling).classList.contains("input-group-addon")) {
              newElement.classList.add("bs3-has-addon");
            }
          }
          if (newStyle) {
            buttonClass = newStyle.trim();
          } else {
            buttonClass = style;
          }
          if (status == "add") {
            if (buttonClass) button.classList.add.apply(button.classList, buttonClass.split(" "));
          } else if (status == "remove") {
            if (buttonClass) button.classList.remove.apply(button.classList, buttonClass.split(" "));
          } else {
            if (style) button.classList.remove.apply(button.classList, style.split(" "));
            if (buttonClass) button.classList.add.apply(button.classList, buttonClass.split(" "));
          }
        },
        liHeight: function(refresh) {
          if (!refresh && (this.options.size === false || Object.keys(this.sizeInfo).length)) return;
          var newElement = elementTemplates.div.cloneNode(false), menu = elementTemplates.div.cloneNode(false), menuInner = elementTemplates.div.cloneNode(false), menuInnerInner = document.createElement("ul"), divider = elementTemplates.li.cloneNode(false), dropdownHeader = elementTemplates.li.cloneNode(false), li, a = elementTemplates.a.cloneNode(false), text = elementTemplates.span.cloneNode(false), header = this.options.header && this.$menu.find("." + classNames.POPOVERHEADER).length > 0 ? this.$menu.find("." + classNames.POPOVERHEADER)[0].cloneNode(true) : null, search = this.options.liveSearch ? elementTemplates.div.cloneNode(false) : null, actions = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(true) : null, doneButton = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(true) : null, firstOption = this.$element[0].options[0];
          this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth;
          text.className = "text";
          a.className = "dropdown-item " + (firstOption ? firstOption.className : "");
          newElement.className = this.$menu[0].parentNode.className + " " + classNames.SHOW;
          newElement.style.width = 0;
          if (this.options.width === "auto") menu.style.minWidth = 0;
          menu.className = classNames.MENU + " " + classNames.SHOW;
          menuInner.className = "inner " + classNames.SHOW;
          menuInnerInner.className = classNames.MENU + " inner " + (version.major >= "4" ? classNames.SHOW : "");
          divider.className = classNames.DIVIDER;
          dropdownHeader.className = "dropdown-header";
          text.appendChild(document.createTextNode("\u200B"));
          if (this.selectpicker.current.data.length) {
            for (var i = 0; i < this.selectpicker.current.data.length; i++) {
              var data = this.selectpicker.current.data[i];
              if (data.type === "option" && $3(data.element.firstChild).css("display") !== "none") {
                li = data.element;
                break;
              }
            }
          } else {
            li = elementTemplates.li.cloneNode(false);
            a.appendChild(text);
            li.appendChild(a);
          }
          dropdownHeader.appendChild(text.cloneNode(true));
          if (this.selectpicker.view.widestOption) {
            menuInnerInner.appendChild(this.selectpicker.view.widestOption.cloneNode(true));
          }
          menuInnerInner.appendChild(li);
          menuInnerInner.appendChild(divider);
          menuInnerInner.appendChild(dropdownHeader);
          if (header) menu.appendChild(header);
          if (search) {
            var input = document.createElement("input");
            search.className = "bs-searchbox";
            input.className = "form-control";
            search.appendChild(input);
            menu.appendChild(search);
          }
          if (actions) menu.appendChild(actions);
          menuInner.appendChild(menuInnerInner);
          menu.appendChild(menuInner);
          if (doneButton) menu.appendChild(doneButton);
          newElement.appendChild(menu);
          document.body.appendChild(newElement);
          var liHeight = li.offsetHeight, dropdownHeaderHeight = dropdownHeader ? dropdownHeader.offsetHeight : 0, headerHeight = header ? header.offsetHeight : 0, searchHeight = search ? search.offsetHeight : 0, actionsHeight = actions ? actions.offsetHeight : 0, doneButtonHeight = doneButton ? doneButton.offsetHeight : 0, dividerHeight = $3(divider).outerHeight(true), menuStyle = window.getComputedStyle(menu), menuWidth = menu.offsetWidth, menuPadding = {
            vert: toInteger(menuStyle.paddingTop) + toInteger(menuStyle.paddingBottom) + toInteger(menuStyle.borderTopWidth) + toInteger(menuStyle.borderBottomWidth),
            horiz: toInteger(menuStyle.paddingLeft) + toInteger(menuStyle.paddingRight) + toInteger(menuStyle.borderLeftWidth) + toInteger(menuStyle.borderRightWidth)
          }, menuExtras = {
            vert: menuPadding.vert + toInteger(menuStyle.marginTop) + toInteger(menuStyle.marginBottom) + 2,
            horiz: menuPadding.horiz + toInteger(menuStyle.marginLeft) + toInteger(menuStyle.marginRight) + 2
          }, scrollBarWidth;
          menuInner.style.overflowY = "scroll";
          scrollBarWidth = menu.offsetWidth - menuWidth;
          document.body.removeChild(newElement);
          this.sizeInfo.liHeight = liHeight;
          this.sizeInfo.dropdownHeaderHeight = dropdownHeaderHeight;
          this.sizeInfo.headerHeight = headerHeight;
          this.sizeInfo.searchHeight = searchHeight;
          this.sizeInfo.actionsHeight = actionsHeight;
          this.sizeInfo.doneButtonHeight = doneButtonHeight;
          this.sizeInfo.dividerHeight = dividerHeight;
          this.sizeInfo.menuPadding = menuPadding;
          this.sizeInfo.menuExtras = menuExtras;
          this.sizeInfo.menuWidth = menuWidth;
          this.sizeInfo.menuInnerInnerWidth = menuWidth - menuPadding.horiz;
          this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth;
          this.sizeInfo.scrollBarWidth = scrollBarWidth;
          this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight;
          this.setPositionData();
        },
        getSelectPosition: function() {
          var that = this, $window = $3(window), pos = that.$newElement.offset(), $container = $3(that.options.container), containerPos;
          if (that.options.container && $container.length && !$container.is("body")) {
            containerPos = $container.offset();
            containerPos.top += parseInt($container.css("borderTopWidth"));
            containerPos.left += parseInt($container.css("borderLeftWidth"));
          } else {
            containerPos = { top: 0, left: 0 };
          }
          var winPad = that.options.windowPadding;
          this.sizeInfo.selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
          this.sizeInfo.selectOffsetBot = $window.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - containerPos.top - winPad[2];
          this.sizeInfo.selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
          this.sizeInfo.selectOffsetRight = $window.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - containerPos.left - winPad[1];
          this.sizeInfo.selectOffsetTop -= winPad[0];
          this.sizeInfo.selectOffsetLeft -= winPad[3];
        },
        setMenuSize: function(isAuto) {
          this.getSelectPosition();
          var selectWidth = this.sizeInfo.selectWidth, liHeight = this.sizeInfo.liHeight, headerHeight = this.sizeInfo.headerHeight, searchHeight = this.sizeInfo.searchHeight, actionsHeight = this.sizeInfo.actionsHeight, doneButtonHeight = this.sizeInfo.doneButtonHeight, divHeight = this.sizeInfo.dividerHeight, menuPadding = this.sizeInfo.menuPadding, menuInnerHeight, menuHeight, divLength = 0, minHeight, _minHeight, maxHeight, menuInnerMinHeight, estimate, isDropup;
          if (this.options.dropupAuto) {
            estimate = liHeight * this.selectpicker.current.data.length + menuPadding.vert;
            isDropup = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && estimate + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot;
            if (this.selectpicker.isSearching === true) {
              isDropup = this.selectpicker.dropup;
            }
            this.$newElement.toggleClass(classNames.DROPUP, isDropup);
            this.selectpicker.dropup = isDropup;
          }
          if (this.options.size === "auto") {
            _minHeight = this.selectpicker.current.data.length > 3 ? this.sizeInfo.liHeight * 3 + this.sizeInfo.menuExtras.vert - 2 : 0;
            menuHeight = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert;
            minHeight = _minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
            menuInnerMinHeight = Math.max(_minHeight - menuPadding.vert, 0);
            if (this.$newElement.hasClass(classNames.DROPUP)) {
              menuHeight = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert;
            }
            maxHeight = menuHeight;
            menuInnerHeight = menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert;
          } else if (this.options.size && this.options.size != "auto" && this.selectpicker.current.elements.length > this.options.size) {
            for (var i = 0; i < this.options.size; i++) {
              if (this.selectpicker.current.data[i].type === "divider") divLength++;
            }
            menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;
            menuInnerHeight = menuHeight - menuPadding.vert;
            maxHeight = menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
            minHeight = menuInnerMinHeight = "";
          }
          this.$menu.css({
            "max-height": maxHeight + "px",
            "overflow": "hidden",
            "min-height": minHeight + "px"
          });
          this.$menuInner.css({
            "max-height": menuInnerHeight + "px",
            "overflow": "hidden auto",
            "min-height": menuInnerMinHeight + "px"
          });
          this.sizeInfo.menuInnerHeight = Math.max(menuInnerHeight, 1);
          if (this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight) {
            this.sizeInfo.hasScrollBar = true;
            this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth;
          }
          if (this.options.dropdownAlignRight === "auto") {
            this.$menu.toggleClass(classNames.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - selectWidth);
          }
          if (this.dropdown && this.dropdown._popper) this.dropdown._popper.update();
        },
        setSize: function(refresh) {
          this.liHeight(refresh);
          if (this.options.header) this.$menu.css("padding-top", 0);
          if (this.options.size !== false) {
            var that = this, $window = $3(window);
            this.setMenuSize();
            if (this.options.liveSearch) {
              this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                return that.setMenuSize();
              });
            }
            if (this.options.size === "auto") {
              $window.off("resize" + EVENT_KEY + "." + this.selectId + ".setMenuSize scroll" + EVENT_KEY + "." + this.selectId + ".setMenuSize").on("resize" + EVENT_KEY + "." + this.selectId + ".setMenuSize scroll" + EVENT_KEY + "." + this.selectId + ".setMenuSize", function() {
                return that.setMenuSize();
              });
            } else if (this.options.size && this.options.size != "auto" && this.selectpicker.current.elements.length > this.options.size) {
              $window.off("resize" + EVENT_KEY + "." + this.selectId + ".setMenuSize scroll" + EVENT_KEY + "." + this.selectId + ".setMenuSize");
            }
          }
          this.createView(false, true, refresh);
        },
        setWidth: function() {
          var that = this;
          if (this.options.width === "auto") {
            requestAnimationFrame(function() {
              that.$menu.css("min-width", "0");
              that.$element.on("loaded" + EVENT_KEY, function() {
                that.liHeight();
                that.setMenuSize();
                var $selectClone = that.$newElement.clone().appendTo("body"), btnWidth = $selectClone.css("width", "auto").children("button").outerWidth();
                $selectClone.remove();
                that.sizeInfo.selectWidth = Math.max(that.sizeInfo.totalMenuWidth, btnWidth);
                that.$newElement.css("width", that.sizeInfo.selectWidth + "px");
              });
            });
          } else if (this.options.width === "fit") {
            this.$menu.css("min-width", "");
            this.$newElement.css("width", "").addClass("fit-width");
          } else if (this.options.width) {
            this.$menu.css("min-width", "");
            this.$newElement.css("width", this.options.width);
          } else {
            this.$menu.css("min-width", "");
            this.$newElement.css("width", "");
          }
          if (this.$newElement.hasClass("fit-width") && this.options.width !== "fit") {
            this.$newElement[0].classList.remove("fit-width");
          }
        },
        selectPosition: function() {
          this.$bsContainer = $3('<div class="bs-container" />');
          var that = this, $container = $3(this.options.container), pos, containerPos, actualHeight, getPlacement = function($element) {
            var containerPosition = {}, display = that.options.display || // Bootstrap 3 doesn't have $.fn.dropdown.Constructor.Default
            ($3.fn.dropdown.Constructor.Default ? $3.fn.dropdown.Constructor.Default.display : false);
            that.$bsContainer.addClass($element.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(classNames.DROPUP, $element.hasClass(classNames.DROPUP));
            pos = $element.offset();
            if (!$container.is("body")) {
              containerPos = $container.offset();
              containerPos.top += parseInt($container.css("borderTopWidth")) - $container.scrollTop();
              containerPos.left += parseInt($container.css("borderLeftWidth")) - $container.scrollLeft();
            } else {
              containerPos = { top: 0, left: 0 };
            }
            actualHeight = $element.hasClass(classNames.DROPUP) ? 0 : $element[0].offsetHeight;
            if (version.major < 4 || display === "static") {
              containerPosition.top = pos.top - containerPos.top + actualHeight;
              containerPosition.left = pos.left - containerPos.left;
            }
            containerPosition.width = $element[0].offsetWidth;
            that.$bsContainer.css(containerPosition);
          };
          this.$button.on("click.bs.dropdown.data-api", function() {
            if (that.isDisabled()) {
              return;
            }
            getPlacement(that.$newElement);
            that.$bsContainer.appendTo(that.options.container).toggleClass(classNames.SHOW, !that.$button.hasClass(classNames.SHOW)).append(that.$menu);
          });
          $3(window).off("resize" + EVENT_KEY + "." + this.selectId + " scroll" + EVENT_KEY + "." + this.selectId).on("resize" + EVENT_KEY + "." + this.selectId + " scroll" + EVENT_KEY + "." + this.selectId, function() {
            var isActive = that.$newElement.hasClass(classNames.SHOW);
            if (isActive) getPlacement(that.$newElement);
          });
          this.$element.on("hide" + EVENT_KEY, function() {
            that.$menu.data("height", that.$menu.height());
            that.$bsContainer.detach();
          });
        },
        createOption: function(data, init) {
          var optionData = !data.option ? data : data.option;
          if (optionData && optionData.nodeType !== 1) {
            var option = (init ? elementTemplates.selectedOption : elementTemplates.option).cloneNode(true);
            if (optionData.value !== void 0) option.value = optionData.value;
            option.textContent = optionData.text;
            option.selected = true;
            if (optionData.liIndex !== void 0) {
              option.liIndex = optionData.liIndex;
            } else if (!init) {
              option.liIndex = data.index;
            }
            data.option = option;
            this.selectpicker.main.optionQueue.appendChild(option);
          }
        },
        setOptionStatus: function(selectedOnly) {
          var that = this;
          that.noScroll = false;
          if (that.selectpicker.view.visibleElements && that.selectpicker.view.visibleElements.length) {
            for (var i = 0; i < that.selectpicker.view.visibleElements.length; i++) {
              var liData = that.selectpicker.current.data[i + that.selectpicker.view.position0], option = liData.option;
              if (option) {
                if (selectedOnly !== true) {
                  that.setDisabled(liData);
                }
                that.setSelected(liData);
              }
            }
            if (this.options.source.data) this.$element[0].appendChild(this.selectpicker.main.optionQueue);
          }
        },
        /**
         * @param {Object} liData - the option object that is being changed
         * @param {boolean} selected - true if the option is being selected, false if being deselected
         */
        setSelected: function(liData, selected) {
          selected = selected === void 0 ? liData.selected : selected;
          var li = liData.element, activeElementIsSet = this.activeElement !== void 0, thisIsActive = this.activeElement === li, prevActive, a, keepActive = thisIsActive || selected && !this.multiple && !activeElementIsSet;
          if (!li) return;
          if (selected !== void 0) {
            liData.selected = selected;
            if (liData.option) liData.option.selected = selected;
          }
          if (selected && this.options.source.data) {
            this.createOption(liData, false);
          }
          a = li.firstChild;
          if (selected) {
            this.selectedElement = li;
          }
          li.classList.toggle("selected", selected);
          if (keepActive) {
            this.focusItem(li, liData);
            this.selectpicker.view.currentActive = li;
            this.activeElement = li;
          } else {
            this.defocusItem(li);
          }
          if (a) {
            a.classList.toggle("selected", selected);
            if (selected) {
              a.setAttribute("aria-selected", true);
            } else {
              if (this.multiple) {
                a.setAttribute("aria-selected", false);
              } else {
                a.removeAttribute("aria-selected");
              }
            }
          }
          if (!keepActive && !activeElementIsSet && selected && this.prevActiveElement !== void 0) {
            prevActive = this.prevActiveElement;
            this.defocusItem(prevActive);
          }
        },
        /**
         * @param {number} index - the index of the option that is being disabled
         * @param {boolean} disabled - true if the option is being disabled, false if being enabled
         */
        setDisabled: function(liData) {
          var disabled = liData.disabled, li = liData.element, a;
          if (!li) return;
          a = li.firstChild;
          li.classList.toggle(classNames.DISABLED, disabled);
          if (a) {
            if (version.major >= "4") a.classList.toggle(classNames.DISABLED, disabled);
            if (disabled) {
              a.setAttribute("aria-disabled", disabled);
              a.setAttribute("tabindex", -1);
            } else {
              a.removeAttribute("aria-disabled");
              a.setAttribute("tabindex", 0);
            }
          }
        },
        isDisabled: function() {
          return this.$element[0].disabled;
        },
        checkDisabled: function() {
          if (this.isDisabled()) {
            this.$newElement[0].classList.add(classNames.DISABLED);
            this.$button.addClass(classNames.DISABLED).attr("aria-disabled", true);
          } else {
            if (this.$button[0].classList.contains(classNames.DISABLED)) {
              this.$newElement[0].classList.remove(classNames.DISABLED);
              this.$button.removeClass(classNames.DISABLED).attr("aria-disabled", false);
            }
          }
        },
        clickListener: function() {
          var that = this, $document = $3(document);
          $document.data("spaceSelect", false);
          this.$button.on("keyup", function(e) {
            if (/(32)/.test(e.keyCode.toString(10)) && $document.data("spaceSelect")) {
              e.preventDefault();
              $document.data("spaceSelect", false);
            }
          });
          this.$newElement.on("show.bs.dropdown", function() {
            if (!that.dropdown && version.major >= "4") {
              that.dropdown = that.$button.data("bs.dropdown");
              that.dropdown._menu = that.$menu[0];
            }
          });
          function clearSelection(e) {
            if (that.multiple) {
              that.deselectAll();
            } else {
              var element = that.$element[0], prevValue = element.value, prevIndex = element.selectedIndex, prevOption = element.options[prevIndex], prevData = prevOption ? that.selectpicker.main.data[prevOption.liIndex] : false;
              if (prevData) {
                that.setSelected(prevData, false);
              }
              element.selectedIndex = 0;
              changedArguments = [prevIndex, false, prevValue];
              that.$element.triggerNative("change");
            }
            if (that.$newElement.hasClass(classNames.SHOW)) {
              if (that.options.liveSearch) {
                that.$searchbox.trigger("focus");
              }
              that.createView(false);
            }
          }
          this.$button.on("click.bs.dropdown.data-api", function(e) {
            if (that.options.allowClear) {
              var target = e.target, clearButton = that.$clearButton[0];
              if (/MSIE|Trident/.test(window.navigator.userAgent)) {
                target = document.elementFromPoint(e.clientX, e.clientY);
              }
              if (target === clearButton || target.parentElement === clearButton) {
                e.stopImmediatePropagation();
                clearSelection(e);
              }
            }
            if (!that.$newElement.hasClass(classNames.SHOW)) {
              that.setSize();
            }
          });
          function setFocus() {
            if (that.options.liveSearch) {
              that.$searchbox.trigger("focus");
            } else {
              that.$menuInner.trigger("focus");
            }
          }
          function checkPopperExists() {
            if (that.dropdown && that.dropdown._popper && that.dropdown._popper.state) {
              setFocus();
            } else {
              requestAnimationFrame(checkPopperExists);
            }
          }
          this.$element.on("shown" + EVENT_KEY, function() {
            if (that.$menuInner[0].scrollTop !== that.selectpicker.view.scrollTop) {
              that.$menuInner[0].scrollTop = that.selectpicker.view.scrollTop;
            }
            if (version.major > 3) {
              requestAnimationFrame(checkPopperExists);
            } else {
              setFocus();
            }
          });
          this.$menuInner.on("mouseenter", "li a", function(e) {
            var hoverLi = this.parentElement, position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0, index = Array.prototype.indexOf.call(hoverLi.parentElement.children, hoverLi), hoverData = that.selectpicker.current.data[index + position0];
            that.focusItem(hoverLi, hoverData, true);
          });
          this.$menuInner.on("click", "li a", function(e, retainActive) {
            var $this = $3(this), element = that.$element[0], position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0, clickedData = that.selectpicker.current.data[$this.parent().index() + position0], clickedElement = clickedData.element, prevValue = getSelectValues(element), prevIndex = element.selectedIndex, prevOption = element.options[prevIndex], prevData = prevOption ? that.selectpicker.main.data[prevOption.liIndex] : false, triggerChange = true;
            if (that.multiple && that.options.maxOptions !== 1) {
              e.stopPropagation();
            }
            e.preventDefault();
            if (!that.isDisabled() && !$this.parent().hasClass(classNames.DISABLED)) {
              var option = clickedData.option, $option = $3(option), state = option.selected, optgroupData = that.selectpicker.current.data.find(function(datum) {
                return datum.optID === clickedData.optID && datum.type === "optgroup-label";
              }), optgroup = optgroupData ? optgroupData.optgroup : void 0, dataGetter = optgroup instanceof Element ? getOptionData.fromOption : getOptionData.fromDataSource, optgroupOptions = optgroup && optgroup.children, maxOptions = parseInt(that.options.maxOptions), maxOptionsGrp = optgroup && parseInt(dataGetter(optgroup, "maxOptions")) || false;
              if (clickedElement === that.activeElement) retainActive = true;
              if (!retainActive) {
                that.prevActiveElement = that.activeElement;
                that.activeElement = void 0;
              }
              if (!that.multiple || maxOptions === 1) {
                if (prevData) that.setSelected(prevData, !!state);
                that.setSelected(clickedData, !state);
              } else {
                that.setSelected(clickedData, !state);
                that.focusedParent.focus();
                if (maxOptions !== false || maxOptionsGrp !== false) {
                  var maxReached = maxOptions < getSelectedOptions(element).length, selectedGroupOptions = 0;
                  if (optgroup && optgroup.children) {
                    for (var i = 0; i < optgroup.children.length; i++) {
                      if (optgroup.children[i].selected) selectedGroupOptions++;
                    }
                  }
                  var maxReachedGrp = maxOptionsGrp < selectedGroupOptions;
                  if (maxOptions && maxReached || maxOptionsGrp && maxReachedGrp) {
                    if (maxOptions && maxOptions === 1) {
                      element.selectedIndex = -1;
                      that.setOptionStatus(true);
                    } else if (maxOptionsGrp && maxOptionsGrp === 1) {
                      for (var i = 0; i < optgroupOptions.length; i++) {
                        var _option = optgroupOptions[i];
                        that.setSelected(that.selectpicker.current.data[_option.liIndex], false);
                      }
                      that.setSelected(clickedData, true);
                    } else {
                      var maxOptionsText = typeof that.options.maxOptionsText === "string" ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText, maxOptionsArr = typeof maxOptionsText === "function" ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText, maxTxt = maxOptionsArr[0].replace("{n}", maxOptions), maxTxtGrp = maxOptionsArr[1].replace("{n}", maxOptionsGrp), $notify = $3('<div class="notify"></div>');
                      if (maxOptionsArr[2]) {
                        maxTxt = maxTxt.replace("{var}", maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                        maxTxtGrp = maxTxtGrp.replace("{var}", maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                      }
                      that.$menu.append($notify);
                      if (maxOptions && maxReached) {
                        $notify.append($3("<div>" + maxTxt + "</div>"));
                        triggerChange = false;
                        that.$element.trigger("maxReached" + EVENT_KEY);
                      }
                      if (maxOptionsGrp && maxReachedGrp) {
                        $notify.append($3("<div>" + maxTxtGrp + "</div>"));
                        triggerChange = false;
                        that.$element.trigger("maxReachedGrp" + EVENT_KEY);
                      }
                      setTimeout(function() {
                        that.setSelected(clickedData, false);
                      }, 10);
                      $notify[0].classList.add("fadeOut");
                      setTimeout(function() {
                        $notify.remove();
                      }, 1050);
                    }
                  }
                }
              }
              if (that.options.source.data) that.$element[0].appendChild(that.selectpicker.main.optionQueue);
              if (!that.multiple || that.multiple && that.options.maxOptions === 1) {
                that.$button.trigger("focus");
              } else if (that.options.liveSearch) {
                that.$searchbox.trigger("focus");
              }
              if (triggerChange) {
                if (that.multiple || prevIndex !== element.selectedIndex) {
                  changedArguments = [option.index, $option.prop("selected"), prevValue];
                  that.$element.triggerNative("change");
                }
              }
            }
          });
          this.$menu.on("click", "li." + classNames.DISABLED + " a, ." + classNames.POPOVERHEADER + ", ." + classNames.POPOVERHEADER + " :not(.close)", function(e) {
            if (e.currentTarget == this) {
              e.preventDefault();
              e.stopPropagation();
              if (that.options.liveSearch && !$3(e.target).hasClass("close")) {
                that.$searchbox.trigger("focus");
              } else {
                that.$button.trigger("focus");
              }
            }
          });
          this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (that.options.liveSearch) {
              that.$searchbox.trigger("focus");
            } else {
              that.$button.trigger("focus");
            }
          });
          this.$menu.on("click", "." + classNames.POPOVERHEADER + " .close", function() {
            that.$button.trigger("click");
          });
          this.$searchbox.on("click", function(e) {
            e.stopPropagation();
          });
          this.$menu.on("click", ".actions-btn", function(e) {
            if (that.options.liveSearch) {
              that.$searchbox.trigger("focus");
            } else {
              that.$button.trigger("focus");
            }
            e.preventDefault();
            e.stopPropagation();
            if ($3(this).hasClass("bs-select-all")) {
              that.selectAll();
            } else {
              that.deselectAll();
            }
          });
          this.$button.on("focus" + EVENT_KEY, function(e) {
            var tabindex = that.$element[0].getAttribute("tabindex");
            if (tabindex !== void 0 && e.originalEvent && e.originalEvent.isTrusted) {
              this.setAttribute("tabindex", tabindex);
              that.$element[0].setAttribute("tabindex", -1);
              that.selectpicker.view.tabindex = tabindex;
            }
          }).on("blur" + EVENT_KEY, function(e) {
            if (that.selectpicker.view.tabindex !== void 0 && e.originalEvent && e.originalEvent.isTrusted) {
              that.$element[0].setAttribute("tabindex", that.selectpicker.view.tabindex);
              this.setAttribute("tabindex", -1);
              that.selectpicker.view.tabindex = void 0;
            }
          });
          this.$element.on("change" + EVENT_KEY, function() {
            that.render();
            that.$element.trigger("changed" + EVENT_KEY, changedArguments);
            changedArguments = null;
          }).on("focus" + EVENT_KEY, function() {
            if (!that.options.mobile) that.$button[0].focus();
          });
        },
        liveSearchListener: function() {
          var that = this;
          this.$button.on("click.bs.dropdown.data-api", function() {
            if (!!that.$searchbox.val()) {
              that.$searchbox.val("");
              that.selectpicker.search.previousValue = void 0;
            }
          });
          this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
            e.stopPropagation();
          });
          this.$searchbox.on("input propertychange", function() {
            var searchValue = that.$searchbox[0].value;
            that.selectpicker.search.elements = [];
            that.selectpicker.search.data = [];
            if (searchValue) {
              that.selectpicker.search.previousValue = searchValue;
              if (that.options.source.search) {
                that.fetchData(function(builtData) {
                  that.render();
                  that.buildList(void 0, true);
                  that.noScroll = true;
                  that.$menuInner.scrollTop(0);
                  that.createView(true);
                  showNoResults.call(that, builtData, searchValue);
                }, "search", 0, searchValue);
              } else {
                var i, searchMatch = [], q = searchValue.toUpperCase(), cache = {}, cacheArr = [], searchStyle = that._searchStyle(), normalizeSearch = that.options.liveSearchNormalize;
                if (normalizeSearch) q = normalizeToBase(q);
                for (var i = 0; i < that.selectpicker.main.data.length; i++) {
                  var li = that.selectpicker.main.data[i];
                  if (!cache[i]) {
                    cache[i] = stringSearch(li, q, searchStyle, normalizeSearch);
                  }
                  if (cache[i] && li.headerIndex !== void 0 && cacheArr.indexOf(li.headerIndex) === -1) {
                    if (li.headerIndex > 0) {
                      cache[li.headerIndex - 1] = true;
                      cacheArr.push(li.headerIndex - 1);
                    }
                    cache[li.headerIndex] = true;
                    cacheArr.push(li.headerIndex);
                    cache[li.lastIndex + 1] = true;
                  }
                  if (cache[i] && li.type !== "optgroup-label") cacheArr.push(i);
                }
                for (var i = 0, cacheLen = cacheArr.length; i < cacheLen; i++) {
                  var index = cacheArr[i], prevIndex = cacheArr[i - 1], li = that.selectpicker.main.data[index], liPrev = that.selectpicker.main.data[prevIndex];
                  if (li.type !== "divider" || li.type === "divider" && liPrev && liPrev.type !== "divider" && cacheLen - 1 !== i) {
                    that.selectpicker.search.data.push(li);
                    searchMatch.push(that.selectpicker.main.elements[index]);
                  }
                }
                that.activeElement = void 0;
                that.noScroll = true;
                that.$menuInner.scrollTop(0);
                that.selectpicker.search.elements = searchMatch;
                that.createView(true);
                showNoResults.call(that, searchMatch, searchValue);
              }
            } else if (that.selectpicker.search.previousValue) {
              that.$menuInner.scrollTop(0);
              that.createView(false);
            }
          });
        },
        _searchStyle: function() {
          return this.options.liveSearchStyle || "contains";
        },
        val: function(value) {
          var element = this.$element[0];
          if (typeof value !== "undefined") {
            var selectedOptions = getSelectedOptions(element).length, prevValue = getSelectValues(element, selectedOptions);
            changedArguments = [null, null, prevValue];
            if (!Array.isArray(value)) value = [value];
            value = value.map(String);
            for (var i = 0; i < selectedOptions.length; i++) {
              var item = selectedOptions[i];
              if (item && value.indexOf(String(item.value)) === -1) {
                this.setSelected(item, false);
              }
            }
            this.selectpicker.main.data.filter(function(item2) {
              if (value.indexOf(String(item2.value)) !== -1) {
                this.setSelected(item2, true);
                return true;
              }
              return false;
            }, this);
            if (this.options.source.data) element.appendChild(this.selectpicker.main.optionQueue);
            this.$element.trigger("changed" + EVENT_KEY, changedArguments);
            if (this.$newElement.hasClass(classNames.SHOW)) {
              if (this.multiple) {
                this.setOptionStatus(true);
              } else {
                var liSelectedIndex = (element.options[element.selectedIndex] || {}).liIndex;
                if (typeof liSelectedIndex === "number") {
                  this.setSelected(this.selectpicker.current.data[liSelectedIndex], true);
                }
              }
            }
            this.refresh();
            changedArguments = null;
            return this.$element;
          } else {
            return this.$element.val();
          }
        },
        changeAll: function(status) {
          if (!this.multiple) return;
          if (typeof status === "undefined") status = true;
          var element = this.$element[0], previousSelected = 0, currentSelected = 0, prevValue = getSelectValues(element);
          element.classList.add("bs-select-hidden");
          for (var i = 0, data = this.selectpicker.current.data, len = data.length; i < len; i++) {
            var liData = data[i], option = liData.option;
            if (option && !liData.disabled && liData.type !== "divider") {
              if (liData.selected) previousSelected++;
              option.selected = status;
              liData.selected = status;
              if (status === true) currentSelected++;
            }
          }
          element.classList.remove("bs-select-hidden");
          if (previousSelected === currentSelected) return;
          this.setOptionStatus();
          changedArguments = [null, null, prevValue];
          this.$element.triggerNative("change");
        },
        selectAll: function() {
          return this.changeAll(true);
        },
        deselectAll: function() {
          return this.changeAll(false);
        },
        toggle: function(e, state) {
          var isActive, triggerClick = state === void 0;
          e = e || window.event;
          if (e) e.stopPropagation();
          if (triggerClick === false) {
            isActive = this.$newElement[0].classList.contains(classNames.SHOW);
            triggerClick = state === true && isActive === false || state === false && isActive === true;
          }
          if (triggerClick) this.$button.trigger("click.bs.dropdown.data-api");
        },
        open: function(e) {
          this.toggle(e, true);
        },
        close: function(e) {
          this.toggle(e, false);
        },
        keydown: function(e) {
          var $this = $3(this), isToggle = $this.hasClass("dropdown-toggle"), $parent = isToggle ? $this.closest(".dropdown") : $this.closest(Selector.MENU), that = $parent.data("this"), $items = that.findLis(), index, isActive, liActive, activeLi, offset, updateScroll = false, downOnTab = e.which === keyCodes.TAB && !isToggle && !that.options.selectOnTab, isArrowKey = REGEXP_ARROW.test(e.which) || downOnTab, scrollTop = that.$menuInner[0].scrollTop, isVirtual = that.isVirtual(), position0 = isVirtual === true ? that.selectpicker.view.position0 : 0;
          if (e.which >= 112 && e.which <= 123) return;
          isActive = that.$menu.hasClass(classNames.SHOW);
          if (!isActive && (isArrowKey || e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105 || e.which >= 65 && e.which <= 90)) {
            that.$button.trigger("click.bs.dropdown.data-api");
            if (that.options.liveSearch) {
              that.$searchbox.trigger("focus");
              return;
            }
          }
          if (e.which === keyCodes.ESCAPE && isActive) {
            e.preventDefault();
            that.$button.trigger("click.bs.dropdown.data-api").trigger("focus");
          }
          if (isArrowKey) {
            if (!$items.length) return;
            liActive = that.activeElement;
            index = liActive ? Array.prototype.indexOf.call(liActive.parentElement.children, liActive) : -1;
            if (index !== -1) {
              that.defocusItem(liActive);
            }
            if (e.which === keyCodes.ARROW_UP) {
              if (index !== -1) index--;
              if (index + position0 < 0) index += $items.length;
              if (!that.selectpicker.view.canHighlight[index + position0]) {
                index = that.selectpicker.view.canHighlight.slice(0, index + position0).lastIndexOf(true) - position0;
                if (index === -1) index = $items.length - 1;
              }
            } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) {
              index++;
              if (index + position0 >= that.selectpicker.view.canHighlight.length) index = that.selectpicker.view.firstHighlightIndex;
              if (!that.selectpicker.view.canHighlight[index + position0]) {
                index = index + 1 + that.selectpicker.view.canHighlight.slice(index + position0 + 1).indexOf(true);
              }
            }
            e.preventDefault();
            var liActiveIndex = position0 + index;
            if (e.which === keyCodes.ARROW_UP) {
              if (position0 === 0 && index === $items.length - 1) {
                that.$menuInner[0].scrollTop = that.$menuInner[0].scrollHeight;
                liActiveIndex = that.selectpicker.current.elements.length - 1;
              } else {
                activeLi = that.selectpicker.current.data[liActiveIndex];
                if (activeLi) {
                  offset = activeLi.position - activeLi.height;
                  updateScroll = offset < scrollTop;
                }
              }
            } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) {
              if (index === that.selectpicker.view.firstHighlightIndex) {
                that.$menuInner[0].scrollTop = 0;
                liActiveIndex = that.selectpicker.view.firstHighlightIndex;
              } else {
                activeLi = that.selectpicker.current.data[liActiveIndex];
                if (activeLi) {
                  offset = activeLi.position - that.sizeInfo.menuInnerHeight;
                  updateScroll = offset > scrollTop;
                }
              }
            }
            liActive = that.selectpicker.current.elements[liActiveIndex];
            that.activeElement = (that.selectpicker.current.data[liActiveIndex] || {}).element;
            that.focusItem(liActive);
            that.selectpicker.view.currentActive = liActive;
            if (updateScroll) that.$menuInner[0].scrollTop = offset;
            if (that.options.liveSearch) {
              that.$searchbox.trigger("focus");
            } else {
              $this.trigger("focus");
            }
          } else if (!$this.is("input") && !REGEXP_TAB_OR_ESCAPE.test(e.which) || e.which === keyCodes.SPACE && that.selectpicker.keydown.keyHistory) {
            var searchMatch, matches = [], keyHistory;
            e.preventDefault();
            that.selectpicker.keydown.keyHistory += keyCodeMap[e.which];
            if (that.selectpicker.keydown.resetKeyHistory.cancel) clearTimeout(that.selectpicker.keydown.resetKeyHistory.cancel);
            that.selectpicker.keydown.resetKeyHistory.cancel = that.selectpicker.keydown.resetKeyHistory.start();
            keyHistory = that.selectpicker.keydown.keyHistory;
            if (/^(.)\1+$/.test(keyHistory)) {
              keyHistory = keyHistory.charAt(0);
            }
            for (var i = 0; i < that.selectpicker.current.data.length; i++) {
              var li = that.selectpicker.current.data[i], hasMatch;
              hasMatch = stringSearch(li, keyHistory, "startsWith", true);
              if (hasMatch && that.selectpicker.view.canHighlight[i]) {
                matches.push(li.element);
              }
            }
            if (matches.length) {
              var matchIndex = 0;
              $items.removeClass("active").find("a").removeClass("active");
              if (keyHistory.length === 1) {
                matchIndex = matches.indexOf(that.activeElement);
                if (matchIndex === -1 || matchIndex === matches.length - 1) {
                  matchIndex = 0;
                } else {
                  matchIndex++;
                }
              }
              searchMatch = matches[matchIndex];
              activeLi = that.selectpicker.main.data[searchMatch];
              if (scrollTop - activeLi.position > 0) {
                offset = activeLi.position - activeLi.height;
                updateScroll = true;
              } else {
                offset = activeLi.position - that.sizeInfo.menuInnerHeight;
                updateScroll = activeLi.position > scrollTop + that.sizeInfo.menuInnerHeight;
              }
              liActive = that.selectpicker.main.elements[searchMatch];
              that.activeElement = liActive;
              that.focusItem(liActive);
              if (liActive) liActive.firstChild.focus();
              if (updateScroll) that.$menuInner[0].scrollTop = offset;
              $this.trigger("focus");
            }
          }
          if (isActive && (e.which === keyCodes.SPACE && !that.selectpicker.keydown.keyHistory || e.which === keyCodes.ENTER || e.which === keyCodes.TAB && that.options.selectOnTab)) {
            if (e.which !== keyCodes.SPACE) e.preventDefault();
            if (!that.options.liveSearch || e.which !== keyCodes.SPACE) {
              that.$menuInner.find(".active a").trigger("click", true);
              $this.trigger("focus");
              if (!that.options.liveSearch) {
                e.preventDefault();
                $3(document).data("spaceSelect", true);
              }
            }
            if (e.which === keyCodes.ENTER) {
              that.dropdown.hide();
            }
          }
        },
        mobile: function() {
          this.options.mobile = true;
          this.$element[0].classList.add("mobile-device");
        },
        refresh: function() {
          var that = this;
          var config = $3.extend({}, this.options, getAttributesObject(this.$element), this.$element.data());
          this.options = config;
          this.selectpicker.main.data = [];
          if (this.options.source.data) {
            this.render();
            this.buildList();
          } else {
            this.fetchData(function() {
              that.render();
              that.buildList();
            });
          }
          this.checkDisabled();
          this.setStyle();
          this.setWidth();
          if (this.$element.hasClass("ajaxselect")) this.setSize(true);
          this.$element.trigger("refreshed" + EVENT_KEY);
        },
        hide: function() {
          this.$newElement.hide();
        },
        show: function() {
          this.$newElement.show();
        },
        remove: function() {
          this.$newElement.remove();
          this.$element.remove();
        },
        destroy: function() {
          this.$newElement.before(this.$element).remove();
          if (this.$bsContainer) {
            this.$bsContainer.remove();
          } else {
            this.$menu.remove();
          }
          if (this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode) {
            this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption);
          }
          this.$element.off(EVENT_KEY).removeData("selectpicker").removeClass("bs-select-hidden selectpicker mobile-device");
          $3(window).off(EVENT_KEY + "." + this.selectId);
        }
      };
      function Plugin(option) {
        var args = arguments;
        var _option = option;
        [].shift.apply(args);
        if (!version.success) {
          try {
            version.full = (getVersion() || "").split(" ")[0].split(".");
          } catch (err) {
            if (Selectpicker.BootstrapVersion) {
              version.full = Selectpicker.BootstrapVersion.split(" ")[0].split(".");
            } else {
              version.full = [version.major, "0", "0"];
              console.warn(
                "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                err
              );
            }
          }
          version.major = version.full[0];
          version.success = true;
        }
        if (version.major >= "4") {
          var toUpdate = [];
          if (Selectpicker.DEFAULTS.style === classNames.BUTTONCLASS) toUpdate.push({ name: "style", className: "BUTTONCLASS" });
          if (Selectpicker.DEFAULTS.iconBase === classNames.ICONBASE) toUpdate.push({ name: "iconBase", className: "ICONBASE" });
          if (Selectpicker.DEFAULTS.tickIcon === classNames.TICKICON) toUpdate.push({ name: "tickIcon", className: "TICKICON" });
          classNames.DIVIDER = "dropdown-divider";
          classNames.SHOW = "show";
          classNames.BUTTONCLASS = "btn-light";
          classNames.POPOVERHEADER = "popover-header";
          classNames.ICONBASE = "";
          classNames.TICKICON = "bs-ok-default";
          for (var i = 0; i < toUpdate.length; i++) {
            var option = toUpdate[i];
            Selectpicker.DEFAULTS[option.name] = classNames[option.className];
          }
        }
        if (version.major > "4") {
          Selector.DATA_TOGGLE = 'data-bs-toggle="dropdown"';
        }
        var value;
        var chain = this.each(function() {
          var $this = $3(this);
          if ($this.is("select")) {
            var data = $this.data("selectpicker"), options = typeof _option == "object" && _option;
            if (options.title) options.placeholder = options.title;
            if (!data) {
              var dataAttributes = $this.data();
              for (var dataAttr in dataAttributes) {
                if (Object.prototype.hasOwnProperty.call(dataAttributes, dataAttr) && $3.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
                  delete dataAttributes[dataAttr];
                }
              }
              var config = $3.extend({}, Selectpicker.DEFAULTS, $3.fn.selectpicker.defaults || {}, getAttributesObject($this), dataAttributes, options);
              config.template = $3.extend({}, Selectpicker.DEFAULTS.template, $3.fn.selectpicker.defaults ? $3.fn.selectpicker.defaults.template : {}, dataAttributes.template, options.template);
              config.source = $3.extend({}, Selectpicker.DEFAULTS.source, $3.fn.selectpicker.defaults ? $3.fn.selectpicker.defaults.source : {}, options.source);
              $this.data("selectpicker", data = new Selectpicker(this, config));
            } else if (options) {
              for (var i2 in options) {
                if (Object.prototype.hasOwnProperty.call(options, i2)) {
                  data.options[i2] = options[i2];
                }
              }
            }
            if (typeof _option == "string") {
              if (data[_option] instanceof Function) {
                value = data[_option].apply(data, args);
              } else {
                value = data.options[_option];
              }
            }
          }
        });
        if (typeof value !== "undefined") {
          return value;
        } else {
          return chain;
        }
      }
      var old = $3.fn.selectpicker;
      $3.fn.selectpicker = Plugin;
      $3.fn.selectpicker.Constructor = Selectpicker;
      $3.fn.selectpicker.noConflict = function() {
        $3.fn.selectpicker = old;
        return this;
      };
      function keydownHandler() {
        if (version.major < 5) {
          if ($3.fn.dropdown) {
            var bootstrapKeydown = $3.fn.dropdown.Constructor._dataApiKeydownHandler || $3.fn.dropdown.Constructor.prototype.keydown;
            return bootstrapKeydown.apply(this, arguments);
          }
        } else {
          return Dropdown.dataApiKeydownHandler;
        }
      }
      $3(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > [" + Selector.DATA_TOGGLE + "]", keydownHandler).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", keydownHandler).on("keydown" + EVENT_KEY, ".bootstrap-select [" + Selector.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', Selectpicker.prototype.keydown).on("focusin.modal", ".bootstrap-select [" + Selector.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function(e) {
        e.stopPropagation();
      });
      document.addEventListener("DOMContentLoaded", function() {
        $3(".selectpicker").each(function() {
          var $selectpicker = $3(this);
          Plugin.call($selectpicker, $selectpicker.data());
        });
      });
    })(jQuery);
  }
});

// src/globals.ts
var globals_exports = {};
var import_bootstrap_bundle;
var init_globals = __esm({
  "src/globals.ts"() {
    "use strict";
    import_bootstrap_bundle = __toESM(require_bootstrap_bundle());
    init_bootstrap_select();
  }
});

// src/domain/data/entity.ts
var EntityCollection;
var init_entity = __esm({
  "src/domain/data/entity.ts"() {
    "use strict";
    EntityCollection = class {
      constructor() {
        this.itemsMap = /* @__PURE__ */ new Map();
      }
      get length() {
        return this.itemsMap.size;
      }
      add(series, episode, entry) {
        if (!entry || !entry.key) return;
        const key = entry.key;
        const descTexts = Array.isArray(entry.descriptions) ? [...entry.descriptions] : [];
        const tagTexts = Array.isArray(entry.tags) ? [...entry.tags] : [];
        const descData = {
          series,
          episode,
          values: descTexts
        };
        const tagData = {
          series,
          episode,
          values: tagTexts
        };
        const existing = this.itemsMap.get(key);
        if (existing) {
          if (descTexts.length) {
            const descriptionsForEpisode = existing.descriptions.find((d) => d.series === series && d.episode === episode);
            if (descriptionsForEpisode) {
              descriptionsForEpisode.values.push(...descTexts);
            } else {
              existing.descriptions.push(descData);
            }
          }
          if (tagTexts.length) {
            const tagsForEpisode = existing.tags.find((t) => t.series === series && t.episode === episode);
            if (tagsForEpisode) {
              tagsForEpisode.values.push(...tagTexts);
            } else {
              existing.tags.push(tagData);
            }
          }
        } else {
          const newEntry = {
            key,
            descriptions: descData.values.length ? [descData] : [],
            tags: tagData.values.length ? [tagData] : []
          };
          this.itemsMap.set(key, newEntry);
        }
      }
      find(key) {
        return this.itemsMap.get(key);
      }
      get(index) {
        return Array.from(this.itemsMap.values())[index];
      }
      forEach(callback) {
        this.itemsMap.forEach(callback);
      }
      toArray() {
        return Array.from(this.itemsMap.values());
      }
      sort() {
        this.itemsMap = new Map([...this.itemsMap.entries()].sort());
      }
    };
  }
});

// src/domain/data/manifest.ts
var init_manifest = __esm({
  "src/domain/data/manifest.ts"() {
    "use strict";
  }
});

// src/domain/data/index.ts
var init_data = __esm({
  "src/domain/data/index.ts"() {
    "use strict";
    init_entity();
    init_manifest();
  }
});

// src/providers/dataProvider.ts
var DataProvider, DataSearch;
var init_dataProvider = __esm({
  "src/providers/dataProvider.ts"() {
    "use strict";
    init_data();
    DataProvider = class {
      constructor(dataPath) {
        this.data = {
          entries: new EntityCollection(),
          seriesWithEpisodes: /* @__PURE__ */ new Map(),
          tags: /* @__PURE__ */ new Set()
        };
        this.manifestPath = dataPath;
      }
      async loadData() {
        try {
          const manifestResponse = await fetch(this.manifestPath);
          if (!manifestResponse.ok) {
            throw new Error("Could not load episode manifest");
          }
          const manifest = await manifestResponse.json();
          for (const seriesEntry of manifest.series) {
            const episodes = /* @__PURE__ */ new Set();
            this.data.seriesWithEpisodes.set(seriesEntry.key, { series: seriesEntry, episodes });
            for (const episodeEntry of seriesEntry.episodes) {
              try {
                const episodeResponse = await fetch(`data/${seriesEntry.key}/${episodeEntry.id}.json`);
                if (!episodeResponse.ok) continue;
                episodes.add(episodeEntry);
                const entries = await episodeResponse.json();
                const validEntries = entries.filter((e) => e && e.key);
                validEntries.forEach((entry) => {
                  this.data.entries.add(seriesEntry.key, episodeEntry.id, entry);
                });
                validEntries.forEach((entry) => {
                  (entry.tags || []).forEach((tag) => this.data.tags.add(tag));
                });
              } catch (err) {
              }
            }
          }
          this.data.entries.sort();
          if (this.data.entries.length === 0) {
            throw new Error("No episodes loaded");
          }
        } catch (error) {
          console.error(`Failed to load episodes. Make sure you have a data/manifest.json file listing your episode files. Error: ${error}`);
        }
      }
      searchEntries(request) {
        const searcher = new DataSearch(request);
        return searcher.search(this.data.entries);
      }
    };
    DataSearch = class {
      constructor(searchRequest) {
        this.searchRequest = searchRequest;
      }
      search(entries) {
        const results = [];
        entries.forEach((entry) => {
          if (this.matchExcludeKeys(entry)) return;
          if (!this.matchSearchKeys(entry)) return;
          const filteredEntry = {
            key: entry.key,
            descriptions: this.filterSearchEntityData(entry.descriptions),
            tags: this.filterSearchEntityData(entry.tags)
          };
          if (filteredEntry.descriptions.length === 0 && filteredEntry.tags.length === 0) return;
          if (!this.matchTags(filteredEntry)) return;
          results.push(filteredEntry);
        });
        return results;
      }
      matchExcludeKeys(item) {
        if (!this.searchRequest.excludeKeys || this.searchRequest.excludeKeys.size === 0) return false;
        return this.searchRequest.excludeKeys.has(item.key);
      }
      matchSearchKeys(item) {
        if (!this.searchRequest.searchKeys) return true;
        const lowerSearchTerm = this.searchRequest.searchKeys.toLowerCase();
        return item.key.toLowerCase().includes(lowerSearchTerm);
      }
      filterSearchEntityData(entityData) {
        var _a;
        const lowerSearchTerm = (_a = this.searchRequest.searchEntityData) == null ? void 0 : _a.toLowerCase();
        return entityData.filter(
          (data) => this.matchSeries(data) && this.matchEpisodes(data) && (!lowerSearchTerm || data.values.some((value) => value.toLowerCase().includes(lowerSearchTerm)))
        );
      }
      matchSeries(item) {
        if (!this.searchRequest.series || this.searchRequest.series.size === 0) return true;
        return this.searchRequest.series.has(item.series);
      }
      matchEpisodes(item) {
        if (!this.searchRequest.episodes || this.searchRequest.episodes.size === 0) return true;
        return this.searchRequest.episodes.has(`${item.series}::${item.episode}`);
      }
      matchTags(item) {
        if (!this.searchRequest.tags || this.searchRequest.tags.size === 0) return true;
        return Array.from(this.searchRequest.tags).every(
          (tag) => item.tags.some((t) => t.values.includes(tag))
        );
      }
    };
  }
});

// src/providers/index.ts
var init_providers = __esm({
  "src/providers/index.ts"() {
    "use strict";
    init_dataProvider();
  }
});

// src/domain/controls/modeswitch.ts
var ModeSwitch;
var init_modeswitch = __esm({
  "src/domain/controls/modeswitch.ts"() {
    "use strict";
    ModeSwitch = class {
      constructor(selector, options) {
        this.options = options;
        this.currentButton = null;
        if (typeof selector === "string") {
          this.inputElement = $(selector);
        } else if (selector instanceof HTMLInputElement) {
          this.inputElement = $(selector);
        } else {
          throw new Error("Dropdown selector must be a string or HTMLInputElement");
        }
        this.inputElement.attr("style", "pointer-events: none !important;position: absolute !important;display: block !important;opacity: 0 !important;border: none;z-index: 0 !important;");
        this.items = /* @__PURE__ */ new Map([
          [this.options.defaultItem.key, this.options.defaultItem.icon],
          [this.options.alternativeItem.key, this.options.alternativeItem.icon]
        ]);
        const selected = this.inputElement.prop("checked");
        this.changeMode(selected ? this.options.alternativeItem.key : this.options.defaultItem.key);
      }
      changeMode(mode) {
        this.inputElement.prop("checked", mode != this.options.defaultItem.key);
        this.options.setModeHandler.call(this, mode);
        this.createButton(mode);
      }
      createButton(mode) {
        var _a;
        mode = this.not(mode);
        (_a = this.currentButton) == null ? void 0 : _a.remove();
        this.currentButton = $(`<button class="btn" aria-label="Activate ${mode} mode">${this.items.get(mode)}</button>`).insertAfter(this.inputElement).on("click", (_) => {
          this.changeMode(mode);
        });
      }
      not(mode) {
        return mode == this.options.defaultItem.key ? this.options.alternativeItem.key : this.options.defaultItem.key;
      }
    };
  }
});

// src/domain/controls/lightswitch.ts
var LightSwitch;
var init_lightswitch = __esm({
  "src/domain/controls/lightswitch.ts"() {
    "use strict";
    init_modeswitch();
    ((LightSwitch2) => {
      function Init(selector, defaultTheme, setTheme) {
        const icons = {
          light: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-4ym8mv"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
          dark: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-4ym8mv"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
        };
        const alternativeTheme = defaultTheme == "light" ? "dark" : "light";
        return new ModeSwitch(selector, {
          defaultItem: { key: defaultTheme, icon: icons[defaultTheme] },
          alternativeItem: { key: alternativeTheme, icon: icons[alternativeTheme] },
          setModeHandler: setTheme
        });
      }
      LightSwitch2.Init = Init;
    })(LightSwitch || (LightSwitch = {}));
  }
});

// src/domain/controls/selectpicker.ts
var SelectPickerOptionsDefaults, SelectPicker;
var init_selectpicker = __esm({
  "src/domain/controls/selectpicker.ts"() {
    "use strict";
    SelectPickerOptionsDefaults = class {
      constructor() {
        this.interval = false;
      }
    };
    SelectPicker = class {
      constructor(selector, className, opts) {
        this.entries = /* @__PURE__ */ new Map();
        this.pauseChangeEvent = false;
        this.onChangeHandler = null;
        this.m_values = [];
        this.className = className || "";
        this.options = __spreadValues(__spreadValues({}, new SelectPickerOptionsDefaults()), opts);
        this.options.maxOptions = this.options.interval ? 1 : this.options.maxOptions;
        if (typeof selector === "string") {
          this.selectElement = $(selector);
        } else if (selector instanceof HTMLSelectElement) {
          this.selectElement = $(selector);
        } else {
          throw new Error("Dropdown selector must be a string or HTMLSelectElement");
        }
        this.selectElement.selectpicker(opts);
        this.buttonElement = this.selectElement.siblings(".dropdown-toggle");
        this.selectElement.on("changed.bs.select", (e, clickedIndex, isSelected, previousValue) => {
          var _a;
          this.render();
          if (!this.pauseChangeEvent) {
            (_a = this.onChangeHandler) == null ? void 0 : _a.call(this, e, clickedIndex, isSelected, previousValue);
          }
        });
      }
      selected() {
        const selectedValues = this.selectElement.val();
        if (!selectedValues || selectedValues.length == 0) return [];
        const selectedValuesArray = typeof selectedValues === "string" ? [selectedValues] : selectedValues;
        return selectedValuesArray.map((v) => this.entries.get(v)).filter((o) => o !== void 0);
      }
      set values(value) {
        var _a;
        const selectedValuesArray = value.map((e) => e.value);
        if (this.options.interval && selectedValuesArray.length != 0) {
          let selectedOptionElement = this.selectElement.find(`option[value="${selectedValuesArray[0]}`).prev();
          while (selectedOptionElement.length > 0) {
            selectedValuesArray.push((_a = selectedOptionElement.attr("value")) != null ? _a : "");
            selectedOptionElement = selectedOptionElement.prev();
          }
        }
        this.m_values = selectedValuesArray.filter((s) => s);
      }
      get values() {
        return this.m_values;
      }
      deselectEntry(value) {
        const newSelected = this.selected().filter((s) => s.value !== value).map((s) => s.value);
        this.selectElement.selectpicker("deselectAll");
        if (newSelected.length > 0) {
          this.selectElement.selectpicker("val", newSelected);
        }
        this.render();
        return this;
      }
      setEntries(entries, selectedValues) {
        this.pauseChangeEvent = true;
        if (selectedValues === void 0) {
          selectedValues = this.selected().map((e) => e.value);
        }
        if (typeof selectedValues === "string") {
          selectedValues = [selectedValues];
        }
        if (typeof entries[0] === "string") {
          entries = entries.map((o) => ({ value: o, text: o }));
        }
        this.selectElement.empty();
        entries.sort((a, b) => a.text > b.text ? 1 : a.text < b.text ? -1 : 0).forEach((opt) => this.addOption(opt, selectedValues ? selectedValues.includes(opt.value) : false));
        this.refresh();
        this.pauseChangeEvent = false;
        return this;
      }
      addOption(opt, selected = false) {
        this.entries.set(opt.value, opt);
        const option = $("<option></option>").attr("value", opt.value).text(opt.text);
        if (selected) {
          option.prop("selected", true);
        }
        if (this.options.interval && opt.group === void 0) {
          opt.group = "";
        }
        const parentElement = opt.group === void 0 ? this.selectElement : this.getOrAddOptionGroup(opt.group);
        return option.appendTo(parentElement);
      }
      getOrAddOptionGroup(label) {
        const optGroupElement = this.selectElement.find(`optgroup[label="${label}"]`);
        if (optGroupElement.length == 1) return optGroupElement;
        const maxOptions = this.options.interval ? ' data-max-options="1"' : "";
        return $(`<optgroup label="${label}"${maxOptions} />`).appendTo(this.selectElement);
      }
      refresh() {
        this.selectElement.selectpicker("refresh");
        this.render();
        return this;
      }
      render() {
        const selectedContainer = this.buttonElement.find(".filter-option-inner-inner");
        selectedContainer.toggleClass("filter-pill-holder", true);
        const selected = this.selected();
        this.values = selected;
        if (selected.length === 0) return;
        selectedContainer.empty();
        if (this.options.interval) {
          const entry = this.entries.values().next().value;
          const pill = this.renderPill(entry, "disabled");
          selectedContainer.append(pill, "\xA0\u2013\xA0");
        }
        selected.forEach((s) => {
          const pill = this.renderPill(s);
          selectedContainer.append(pill);
        });
      }
      renderPill(entry, className = "") {
        var _a;
        if (!entry) return $();
        const pill = document.createElement("span");
        pill.className = `filter-pill ${className ? className : this.className}`;
        pill.setAttribute("data-value", entry.value);
        pill.setAttribute("data-type", this.className);
        pill.textContent = (_a = entry.selectedText) != null ? _a : entry.text;
        pill.addEventListener("click", (ev) => {
          ev.stopPropagation();
          this.deselectEntry(entry.value);
        });
        return $(pill);
      }
    };
    ((SelectPicker2) => {
      SelectPicker2.Null = null;
    })(SelectPicker || (SelectPicker = {}));
  }
});

// src/domain/controls/index.ts
var init_controls = __esm({
  "src/domain/controls/index.ts"() {
    "use strict";
    init_lightswitch();
    init_selectpicker();
  }
});

// src/app.ts
var app_exports = {};
var CampaignLookup;
var init_app = __esm({
  "src/app.ts"() {
    "use strict";
    init_providers();
    init_controls();
    CampaignLookup = class {
      constructor() {
        this.dataProvider = new DataProvider("data/manifest.json");
        this.searchTerm = "";
        this.controls = {
          results: null,
          seriesSelect: SelectPicker.Null,
          episodeSelect: SelectPicker.Null,
          tagSelect: SelectPicker.Null,
          filterBadges: null,
          search: null
        };
        this.initControls();
        this.initEventListeners();
        this.initAsync();
      }
      initControls() {
        this.controls.seriesSelect = new SelectPicker("#series-select", "series");
        this.controls.episodeSelect = new SelectPicker("#episode-select", "episode", { interval: true });
        this.controls.tagSelect = new SelectPicker("#tag-select", "tag");
        this.controls.filterBadges = document.getElementById("filter-wrapper");
        this.controls.results = document.getElementById("key-results");
        this.controls.search = document.getElementById("search-input");
        LightSwitch.Init("#dark-mode-checkbox", "light", (theme) => document.documentElement.setAttribute("data-theme", theme));
      }
      async initAsync() {
        this.controls.results.innerHTML = '<div class="loading">Loading episodes...</div>';
        await this.dataProvider.loadData();
        await this.loadEpisodes();
        this.searchTerm = this.controls.search.value.toLowerCase();
        this.render();
        setTimeout(() => this.controls.search.focus(), 50);
      }
      async loadEpisodes() {
        try {
          this.populateSeriesSelector();
          this.populateEpisodeSelector();
          this.populateTagSelector();
        } catch (error) {
          this.showError(`Failed to load episodes. Make sure you have a data/manifest.json file listing your episode files. Error: ${error}`);
        }
      }
      populateSeriesSelector() {
        const series = Array.from(this.dataProvider.data.seriesWithEpisodes.values()).map((s) => s.series);
        this.controls.seriesSelect.setEntries(series.map((s) => ({ value: s.key, text: s.title, selectedText: s.shortTitle })));
      }
      populateEpisodeSelector() {
        const combinedSet = /* @__PURE__ */ new Set();
        if (this.controls.seriesSelect.values.length === 0) {
          this.dataProvider.data.seriesWithEpisodes.forEach((series) => series.episodes.forEach((episode) => combinedSet.add({ series: series.series, episode })));
        } else {
          this.controls.seriesSelect.values.forEach((seriesKey) => {
            const series = this.dataProvider.data.seriesWithEpisodes.get(seriesKey);
            series.episodes.forEach((episode) => combinedSet.add({ series: series.series, episode }));
          });
        }
        const episodes = Array.from(combinedSet);
        const options = episodes.map(({ series, episode }) => ({
          value: `${series.key}::${episode.id}`,
          text: episode.title,
          selectedText: episode.shortTitle,
          group: series.title
        }));
        this.controls.episodeSelect.setEntries(options);
      }
      populateTagSelector() {
        const tags = Array.from(this.dataProvider.data.tags);
        this.controls.tagSelect.setEntries(tags);
      }
      formatEpisodeName(episode) {
        return episode.replace(/_/g, " ").replace(/episode/i, "Episode").replace(/\b\w/g, (l) => l.toUpperCase());
      }
      initEventListeners() {
        if (this.controls.search) {
          this.controls.search.addEventListener("input", (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.render();
          });
        }
        if (this.controls.seriesSelect) {
          this.controls.seriesSelect.onChangeHandler = (_) => {
            this.populateEpisodeSelector();
            this.render();
          };
        }
        if (this.controls.episodeSelect) {
          this.controls.episodeSelect.onChangeHandler = (_) => {
            this.render();
          };
        }
        if (this.controls.tagSelect) {
          this.controls.tagSelect.onChangeHandler = (_) => {
            this.render();
          };
        }
      }
      formatDescription(item) {
        return item.descriptions.map((d) => {
          var _a, _b;
          const description = d.values.join("\n");
          const parts = description.split(/→|\n/).map((s) => s.trim()).filter((s) => s);
          const series = (_a = this.dataProvider.data.seriesWithEpisodes.get(d.series)) == null ? void 0 : _a.series;
          const seriesName = this.dataProvider.data.seriesWithEpisodes.size == 1 || this.controls.seriesSelect.values.length == 1 ? "" : (_b = series == null ? void 0 : series.shortTitle) != null ? _b : "";
          const episode = series == null ? void 0 : series.episodes.find((e) => e.id === d.episode);
          let html = "";
          let currentSpeaker = "";
          parts.forEach((part) => {
            var _a2;
            if (part === part.toUpperCase() && part.length < 30 && !part.includes(".")) {
              currentSpeaker = part;
            } else {
              if (currentSpeaker) {
                html += `<span class="speaker"><span>${this.escapeHtml(currentSpeaker)}</span>${this.filterPill("series", seriesName, "mini", "light")}${this.filterPill("episode", (_a2 = episode == null ? void 0 : episode.shortTitle) != null ? _a2 : "", "mini", "light")}</span>`;
                currentSpeaker = "";
              }
              html += `<p>${this.highlightText(this.escapeHtml(part), this.searchTerm)}</p>`;
            }
          });
          return html;
        }).join("");
      }
      render() {
        const keyResultsEl = document.getElementById("key-results");
        const descriptionResultsEl = document.getElementById("description-results");
        const statsEl = document.getElementById("stats");
        const keyEntries = this.dataProvider.searchEntries({
          searchKeys: this.searchTerm,
          series: new Set(this.controls.seriesSelect.values),
          episodes: new Set(this.controls.episodeSelect.values),
          tags: new Set(this.controls.tagSelect.values)
        });
        const mentionEntries = this.dataProvider.searchEntries({
          excludeKeys: new Set(keyEntries.map((e) => e.key)),
          searchEntityData: this.searchTerm,
          series: new Set(this.controls.seriesSelect.values),
          episodes: new Set(this.controls.episodeSelect.values),
          tags: new Set(this.controls.tagSelect.values)
        });
        statsEl.textContent = `Showing ${keyEntries.length} direct ${keyEntries.length === 1 ? "match" : "matches"} and ${mentionEntries.length} related ${mentionEntries.length === 1 ? "entry" : "entries"}.`;
        this.renderResults(keyResultsEl, keyEntries);
        this.renderResults(descriptionResultsEl, mentionEntries);
      }
      renderResults(container, entries) {
        if (entries.length === 0) {
          container.innerHTML = '<div class="no-results">No entries found. Try adjusting your search or filters.</div>';
          return;
        }
        container.innerHTML = entries.map((entry) => {
          const descHtml = this.formatDescription(entry);
          const tagsFlat = Array.from(new Set(entry.tags.flatMap((t) => t.values)));
          const tagsHtml = tagsFlat.length > 0 ? (
            // `<div class="entry-tags">` +
            `${tagsFlat.map((tag) => this.filterPill("tag", tag, "solid")).join("")}`
          ) : "";
          return `
                <div class="entry-card">
                    <div class="entry-title"><span>${this.escapeHtml(entry.key)}</span>${tagsHtml}</div>
                	<div class="entry-description">${descHtml}</div>
				</div>
            `;
        }).join("");
      }
      showError(message) {
        const errorContainer = document.getElementById("error-container");
        errorContainer.innerHTML = `<div class="error">${this.escapeHtml(message)}</div>`;
        document.getElementById("key-results").innerHTML = "";
      }
      escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
      }
      highlightText(text, term) {
        if (term !== "") {
          const re = new RegExp(term, "gi");
          const newText = text.replace(re, (match) => `<mark class="p-0">${match}</mark>`);
          return newText;
        }
        return text;
      }
      filterPill(type, value, ...classes) {
        if (!value) return "";
        return `<span class="filter-pill ${type} ${classes == null ? void 0 : classes.join(" ")}">${this.escapeHtml(value)}</span>`;
      }
    };
    new CampaignLookup();
  }
});

// src/entry.ts
var import_jquery = __toESM(require_jquery());
globalThis.$ = import_jquery.default;
globalThis.jQuery = import_jquery.default;
Promise.resolve().then(() => init_globals());
Promise.resolve().then(() => init_app());
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

bootstrap/dist/js/bootstrap.bundle.js:
  (*!
    * Bootstrap v4.6.2 (https://getbootstrap.com/)
    * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
  (**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)

bootstrap-select/dist/js/bootstrap-select.js:
  (*!
   * Bootstrap-select v1.14.0-gamma1 (https://developer.snapappointments.com/bootstrap-select)
   *
   * Copyright 2012-2023 SnapAppointments, LLC
   * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
   *)
*/
//# sourceMappingURL=bundle.js.map
