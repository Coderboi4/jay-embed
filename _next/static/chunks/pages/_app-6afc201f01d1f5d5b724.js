_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [200], {
        "+tY/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = n("q1tI");
            const o = Object(r.createContext)(null);
            o.displayName = "PopoverContext";
            const i = o.Provider
        },
        0: function(e, t, n) {
            n("74v/"), e.exports = n("nOHt")
        },
        "4nv/": function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                n && Object.defineProperty(e, t, {
                    enumerable: n.enumerable,
                    configurable: n.configurable,
                    writable: n.writable,
                    value: n.initializer ? n.initializer.call(r) : void 0
                })
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "74v/": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("cha2")
            }])
        },
        "7nDK": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = n("q1tI");
            const o = Object(r.createContext)(null);
            o.displayName = "PopoverManagerContext";
            const i = o.Provider
        },
        "8Bbg": function(e, t, n) {
            e.exports = n("B5Ud")
        },
        ACih: function(e, t, n) {
            "use strict"
        },
        B5Ud: function(e, t, n) {
            "use strict";
            var r = n("AroE");
            t.__esModule = !0, t.Container = function(e) {
                0;
                return e.children
            }, t.createUrl = s, t.default = void 0;
            var o = r(n("q1tI")),
                i = n("g/15");
            async function a({
                Component: e,
                ctx: t
            }) {
                return {
                    pageProps: await (0, i.loadGetInitialProps)(e, t)
                }
            }
            t.AppInitialProps = i.AppInitialProps, t.NextWebVitalsMetric = i.NextWebVitalsMetric;
            class c extends o.default.Component {
                componentDidCatch(e, t) {
                    throw e
                }
                render() {
                    const {
                        router: e,
                        Component: t,
                        pageProps: n,
                        __N_SSG: r,
                        __N_SSP: i
                    } = this.props;
                    return o.default.createElement(t, Object.assign({}, n, r || i ? {} : {
                        url: s(e)
                    }))
                }
            }

            function s(e) {
                const {
                    pathname: t,
                    asPath: n,
                    query: r
                } = e;
                return {
                    get query() {
                        return r
                    },
                    get pathname() {
                        return t
                    },
                    get asPath() {
                        return n
                    },
                    back: () => {
                        e.back()
                    },
                    push: (t, n) => e.push(t, n),
                    pushTo: (t, n) => {
                        const r = n ? t : "",
                            o = n || t;
                        return e.push(r, o)
                    },
                    replace: (t, n) => e.replace(t, n),
                    replaceTo: (t, n) => {
                        const r = n ? t : "",
                            o = n || t;
                        return e.replace(r, o)
                    }
                }
            }
            t.default = c, c.origGetInitialProps = a, c.getInitialProps = a
        },
        BO21: function(e, t, n) {},
        EaFg: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, o) {
                var i = {};
                return Object.keys(r).forEach((function(e) {
                    i[e] = r[e]
                })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = n.slice().reverse().reduce((function(n, r) {
                    return r(e, t, n) || n
                }), i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        JrLk: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("ufqH"),
                o = n("vOnD"),
                i = n("AFXh");
            const a = Object(o.d)(i.a).withConfig({
                componentId: "sc-1bheiy9-0"
            })(["border-color:", ";color:", ";&:hover{background:", ";}&:focus{border-color:", ";}&:active{background:", ";border-color:", ";}&:disabled{background:transparent;border-color:", ";color:", ";}"], (({
                theme: e
            }) => Object(r.j)(.5, e.interactive.normal)), (({
                theme: e
            }) => e.header.primary), (({
                theme: e
            }) => e.backgroundModifier.active), (({
                theme: e
            }) => e.accent.primary), (({
                theme: e
            }) => e.background.tertiary), (({
                theme: e
            }) => e.background.tertiary), (({
                theme: e
            }) => e.interactive.muted), (({
                theme: e
            }) => e.text.muted))
        },
        Mka9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("2vnA"),
                o = n("q1tI");
            const i = e => {
                Object(o.useEffect)((() => Object(r.autorun)(e)))
            }
        },
        ZUW4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("q1tI");
            const o = r.useLayoutEffect
        },
        cha2: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return Lr
            }));
            var r, o = n("nKUr"),
                i = n("cpVT"),
                a = (n("pome"), n("BO21"), n("2vnA")),
                c = n("aoTL"),
                s = n("8Bbg"),
                u = n.n(s),
                d = n("q1tI"),
                l = n.n(d),
                f = n("vOnD"),
                p = n("4nv/"),
                m = n("EaFg"),
                h = (n("ACih"), n("CqYv"));
            let v = (r = class {
                constructor(e, t) {
                    this.id = Object(h.a)(), this.manager = void 0, this.render = void 0, this.manager = e, this.render = t.render
                }
                dismiss() {
                    this.manager.dismiss(this)
                }
            }, Object(m.a)(r.prototype, "dismiss", [a.action], Object.getOwnPropertyDescriptor(r.prototype, "dismiss"), r.prototype), r);
            var b, g;
            let y = (b = class {
                constructor() {
                    Object(p.a)(this, "modals", g, this)
                }
                spawn(e) {
                    this.modals.push(new v(this, e))
                }
                dismiss(e) {
                    const t = this.modals.indexOf(e);
                    t >= 0 && this.modals.splice(t, 1)
                }
            }, g = Object(m.a)(b.prototype, "modals", [a.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), Object(m.a)(b.prototype, "spawn", [a.action], Object.getOwnPropertyDescriptor(b.prototype, "spawn"), b.prototype), Object(m.a)(b.prototype, "dismiss", [a.action], Object.getOwnPropertyDescriptor(b.prototype, "dismiss"), b.prototype), b);
            var O = n("+VeW"),
                w = n("EGzX"),
                j = n("8jkX"),
                x = n("ufqH"),
                E = n("mrSG"),
                k = "right-scroll-bar-position",
                P = "width-before-scroll-bar";

            function C(e) {
                return e
            }

            function S(e, t) {
                void 0 === t && (t = C);
                var n = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : e
                    },
                    useMedium: function(e) {
                        var o = t(e, r);
                        return n.push(o),
                            function() {
                                n = n.filter((function(e) {
                                    return e !== o
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; n.length;) {
                            var t = n;
                            n = [], t.forEach(e)
                        }
                        n = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var t = [];
                        if (n.length) {
                            var o = n;
                            n = [], o.forEach(e), t = n
                        }
                        var i = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            a = function() {
                                return Promise.resolve().then(i)
                            };
                        a(), n = {
                            push: function(e) {
                                t.push(e), a()
                            },
                            filter: function(e) {
                                return t = t.filter(e), n
                            }
                        }
                    }
                }
            }

            function D(e, t) {
                return void 0 === t && (t = C), S(e, t)
            }

            function M(e) {
                void 0 === e && (e = {});
                var t = S(null);
                return t.options = E.a({
                    async: !0,
                    ssr: !1
                }, e), t
            }
            var L = M();

            function I(e, t) {
                return function(e, t) {
                    var n = Object(d.useState)((function() {
                        return {
                            value: e,
                            callback: t,
                            facade: {
                                get current() {
                                    return n.value
                                },
                                set current(e) {
                                    var t = n.value;
                                    t !== e && (n.value = e, n.callback(e, t))
                                }
                            }
                        }
                    }))[0];
                    return n.callback = t, n.facade
                }(t, (function(t) {
                    return e.forEach((function(e) {
                        return function(e, t) {
                            return "function" === typeof e ? e(t) : e && (e.current = t), e
                        }(e, t)
                    }))
                }))
            }
            var N = function() {},
                A = d.forwardRef((function(e, t) {
                    var n = d.useRef(null),
                        r = d.useState({
                            onScrollCapture: N,
                            onWheelCapture: N,
                            onTouchMoveCapture: N
                        }),
                        o = r[0],
                        i = r[1],
                        a = e.forwardProps,
                        c = e.children,
                        s = e.className,
                        u = e.removeScrollBar,
                        l = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        m = e.noIsolation,
                        h = e.inert,
                        v = e.allowPinchZoom,
                        b = e.as,
                        g = void 0 === b ? "div" : b,
                        y = E.b(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        O = p,
                        w = I([n, t]),
                        j = E.a({}, y, o);
                    return d.createElement(d.Fragment, null, l && d.createElement(O, {
                        sideCar: L,
                        removeScrollBar: u,
                        shards: f,
                        noIsolation: m,
                        inert: h,
                        setCallbacks: i,
                        allowPinchZoom: !!v,
                        lockRef: n
                    }), a ? d.cloneElement(d.Children.only(c), E.a({}, j, {
                        ref: w
                    })) : d.createElement(g, E.a({}, j, {
                        className: s,
                        ref: w
                    }), c))
                }));

            function T() {
                return (T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            A.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, A.classNames = {
                fullWidth: P,
                zeroRight: k
            };
            n("17x9");
            var F = "data-focus-lock",
                W = "data-focus-lock-disabled",
                B = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                R = function(e) {
                    var t = e.children;
                    return d.createElement(d.Fragment, null, d.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: B
                    }), t, t && d.createElement("div", {
                        key: "guard-last",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: B
                    }))
                };
            R.propTypes = {}, R.defaultProps = {
                children: null
            };
            var z = D({}, (function(e) {
                    return {
                        target: e.target,
                        currentTarget: e.currentTarget
                    }
                })),
                _ = D(),
                q = D(),
                H = M({
                    async: !0
                }),
                U = [],
                G = d.forwardRef((function(e, t) {
                    var n, r = d.useState(),
                        o = r[0],
                        i = r[1],
                        a = d.useRef(),
                        c = d.useRef(!1),
                        s = d.useRef(null),
                        u = e.children,
                        l = e.disabled,
                        f = e.noFocusGuards,
                        p = e.persistentFocus,
                        m = e.crossFrame,
                        h = e.autoFocus,
                        v = (e.allowTextSelection, e.group),
                        b = e.className,
                        g = e.whiteList,
                        y = e.shards,
                        O = void 0 === y ? U : y,
                        w = e.as,
                        j = void 0 === w ? "div" : w,
                        x = e.lockProps,
                        E = void 0 === x ? {} : x,
                        k = e.sideCar,
                        P = e.returnFocus,
                        C = e.onActivation,
                        S = e.onDeactivation,
                        D = d.useState({})[0],
                        M = d.useCallback((function() {
                            s.current = s.current || document && document.activeElement, a.current && C && C(a.current), c.current = !0
                        }), [C]),
                        L = d.useCallback((function() {
                            c.current = !1, S && S(a.current)
                        }), [S]),
                        N = d.useCallback((function(e) {
                            var t = s.current;
                            if (Boolean(P) && t && t.focus) {
                                var n = "object" === typeof P ? P : void 0;
                                s.current = null, e ? Promise.resolve().then((function() {
                                    return t.focus(n)
                                })) : t.focus(n)
                            }
                        }), [P]),
                        A = d.useCallback((function(e) {
                            c.current && z.useMedium(e)
                        }), []),
                        R = _.useMedium,
                        q = d.useCallback((function(e) {
                            a.current !== e && (a.current = e, i(e))
                        }), []);
                    var G = T(((n = {})[W] = l && "disabled", n[F] = v, n), E),
                        X = !0 !== f,
                        Y = X && "tail" !== f,
                        V = I([t, q]);
                    return d.createElement(d.Fragment, null, X && [d.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: l ? -1 : 0,
                        style: B
                    }), d.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: l ? -1 : 1,
                        style: B
                    })], !l && d.createElement(k, {
                        id: D,
                        sideCar: H,
                        observed: o,
                        disabled: l,
                        persistentFocus: p,
                        crossFrame: m,
                        autoFocus: h,
                        whiteList: g,
                        shards: O,
                        onActivation: M,
                        onDeactivation: L,
                        returnFocus: N
                    }), d.createElement(j, T({
                        ref: V
                    }, G, {
                        className: b,
                        onBlur: R,
                        onFocus: A
                    }), u), Y && d.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: l ? -1 : 0,
                        style: B
                    }))
                }));
            G.propTypes = {}, G.defaultProps = {
                children: void 0,
                disabled: !1,
                returnFocus: !1,
                noFocusGuards: !1,
                autoFocus: !0,
                persistentFocus: !1,
                crossFrame: !0,
                allowTextSelection: void 0,
                group: void 0,
                className: void 0,
                whiteList: void 0,
                shards: void 0,
                as: "div",
                lockProps: {},
                onActivation: void 0,
                onDeactivation: void 0
            };
            var X = G,
                Y = M(),
                V = "data-focus-on-hidden",
                Z = d.forwardRef((function(e, t) {
                    var n = d.useState(!1),
                        r = n[0],
                        o = n[1],
                        i = e.children,
                        a = e.autoFocus,
                        c = e.shards,
                        s = e.enabled,
                        u = void 0 === s || s,
                        l = e.scrollLock,
                        f = void 0 === l || l,
                        p = e.focusLock,
                        m = void 0 === p || p,
                        h = e.returnFocus,
                        v = void 0 === h || h,
                        b = e.inert,
                        g = e.allowPinchZoom,
                        y = e.sideCar,
                        O = e.className,
                        w = e.shouldIgnore,
                        j = e.style,
                        x = e.as,
                        k = E.b(e, ["children", "autoFocus", "shards", "enabled", "scrollLock", "focusLock", "returnFocus", "inert", "allowPinchZoom", "sideCar", "className", "shouldIgnore", "style", "as"]),
                        P = y,
                        C = r.onActivation,
                        S = r.onDeactivation,
                        D = E.b(r, ["onActivation", "onDeactivation"]);
                    return d.createElement(d.Fragment, null, d.createElement(X, {
                        ref: t,
                        sideCar: y,
                        disabled: !(r && u && m),
                        returnFocus: v,
                        autoFocus: a,
                        shards: c,
                        onActivation: C,
                        onDeactivation: S,
                        className: O,
                        as: A,
                        whiteList: w,
                        lockProps: E.a({}, D, {
                            sideCar: y,
                            shards: c,
                            allowPinchZoom: g,
                            as: x,
                            inert: b,
                            style: j,
                            enabled: u && f
                        })
                    }, i), u && d.createElement(P, E.a({}, k, {
                        sideCar: Y,
                        setLockProps: o,
                        shards: c
                    })))
                })),
                K = function(e) {
                    var t = e.sideCar,
                        n = E.b(e, ["sideCar"]);
                    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var r = t.read();
                    if (!r) throw new Error("Sidecar medium not found");
                    return d.createElement(r, E.a({}, n))
                };

            function $(e, t) {
                return e.useMedium(t), K
            }
            K.isSideCarExport = !0;
            var J = function(e, t) {
                    return function(n) {
                        var r, o = [];

                        function i() {
                            r = e(o.map((function(e) {
                                return e.props
                            }))), t(r)
                        }
                        var a, c, s, u = function(e) {
                            var t, a;

                            function c() {
                                return e.apply(this, arguments) || this
                            }
                            a = e, (t = c).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, c.peek = function() {
                                return r
                            };
                            var s = c.prototype;
                            return s.componentDidMount = function() {
                                o.push(this), i()
                            }, s.componentDidUpdate = function() {
                                i()
                            }, s.componentWillUnmount = function() {
                                var e = o.indexOf(this);
                                o.splice(e, 1), i()
                            }, s.render = function() {
                                return l.a.createElement(n, this.props)
                            }, c
                        }(d.PureComponent);
                        return a = u, c = "displayName", s = "SideEffect(" + function(e) {
                            return e.displayName || e.name || "Component"
                        }(n) + ")", c in a ? Object.defineProperty(a, c, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[c] = s, u
                    }
                },
                Q = function(e) {
                    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
                    return t
                },
                ee = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                te = function() {
                    return document && Q(document.querySelectorAll("[data-no-focus-lock]")).some((function(e) {
                        return e.contains(document.activeElement)
                    }))
                },
                ne = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                re = function e(t) {
                    for (var n = t.length, r = 0; r < n; r += 1)
                        for (var o = function(n) {
                                if (r !== n && t[r].contains(t[n])) return {
                                    v: e(t.filter((function(e) {
                                        return e !== t[n]
                                    })))
                                }
                            }, i = 0; i < n; i += 1) {
                            var a = o(i);
                            if ("object" === ("undefined" === typeof a ? "undefined" : ne(a))) return a.v
                        }
                    return t
                },
                oe = function e(t) {
                    return t.parentNode ? e(t.parentNode) : t
                },
                ie = function(e) {
                    return ee(e).filter(Boolean).reduce((function(e, t) {
                        var n = t.getAttribute(F);
                        return e.push.apply(e, n ? re(Q(oe(t).querySelectorAll('[data-focus-lock="' + n + '"]:not([' + W + '="disabled"])'))) : [t]), e
                    }), [])
                },
                ae = function(e) {
                    return e === document.activeElement
                },
                ce = function(e) {
                    var t = document && document.activeElement;
                    return !(!t || t.dataset && t.dataset.focusGuard) && ie(e).reduce((function(e, n) {
                        return e || n.contains(t) || function(e) {
                            return t = Q(e.querySelectorAll("iframe")), n = ae, !!t.filter((function(e) {
                                return e === n
                            }))[0];
                            var t, n
                        }(n)
                    }), !1)
                },
                se = function(e, t) {
                    var n = e.tabIndex - t.tabIndex,
                        r = e.index - t.index;
                    if (n) {
                        if (!e.tabIndex) return 1;
                        if (!t.tabIndex) return -1
                    }
                    return n || r
                },
                ue = function(e, t, n) {
                    return Q(e).map((function(e, t) {
                        return {
                            node: e,
                            index: t,
                            tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                        }
                    })).filter((function(e) {
                        return !t || e.tabIndex >= 0
                    })).sort(se)
                },
                de = ["button:enabled:not([readonly])", "select:enabled:not([readonly])", "textarea:enabled:not([readonly])", "input:enabled:not([readonly])", "a[href]", "area[href]", "iframe", "object", "embed", "[tabindex]", "[contenteditable]", "[autofocus]"],
                le = de.join(","),
                fe = le + ", [data-focus-guard]",
                pe = function(e, t) {
                    return e.reduce((function(e, n) {
                        return e.concat(Q(n.querySelectorAll(t ? fe : le)), n.parentNode ? Q(n.parentNode.querySelectorAll(de.join(","))).filter((function(e) {
                            return e === n
                        })) : [])
                    }), [])
                },
                me = function e(t) {
                    return !t || t === document || t.nodeType === Node.DOCUMENT_NODE || !((n = window.getComputedStyle(t, null)) && n.getPropertyValue && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))) && e(t.parentNode && t.parentNode.nodeType === t.DOCUMENT_FRAGMENT_NODE ? t.parentNode.host : t.parentNode);
                    var n
                },
                he = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return n.push(t), t.parentNode && e(t.parentNode, n), n
                },
                ve = function(e, t) {
                    for (var n = he(e), r = he(t), o = 0; o < n.length; o += 1) {
                        var i = n[o];
                        if (r.indexOf(i) >= 0) return i
                    }
                    return !1
                },
                be = function(e) {
                    return Q(e).filter((function(e) {
                        return me(e)
                    })).filter((function(e) {
                        return function(e) {
                            return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                        }(e)
                    }))
                },
                ge = function(e, t) {
                    return ue(be(pe(e, t)), !0, t)
                },
                ye = function(e) {
                    return ue(be(pe(e)), !1)
                },
                Oe = function(e) {
                    return be(function(e) {
                        var t = e.querySelectorAll("[data-autofocus-inside]");
                        return Q(t).map((function(e) {
                            return pe([e])
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), [])
                    }(e))
                },
                we = function(e) {
                    return "INPUT" === e.tagName && "radio" === e.type
                },
                je = function(e, t) {
                    return we(e) && e.name ? function(e, t) {
                        return t.filter(we).filter((function(t) {
                            return t.name === e.name
                        })).filter((function(e) {
                            return e.checked
                        }))[0] || e
                    }(e, t) : e
                },
                xe = function(e, t) {
                    return e.length > 1 ? e.indexOf(je(e[t], e)) : t
                },
                Ee = function(e) {
                    return e[0] && e.length > 1 ? je(e[0], e) : e[0]
                },
                ke = function(e) {
                    return e && e.dataset && e.dataset.focusGuard
                },
                Pe = function(e) {
                    return !ke(e)
                },
                Ce = function(e, t, n, r) {
                    var o = e.length,
                        i = e[0],
                        a = e[o - 1],
                        c = ke(n);
                    if (!(e.indexOf(n) >= 0)) {
                        var s = t.indexOf(n),
                            u = t.indexOf(r || s),
                            d = e.indexOf(r),
                            l = s - u,
                            f = t.indexOf(i),
                            p = t.indexOf(a),
                            m = function(e) {
                                var t = new Set;
                                return e.forEach((function(n) {
                                    return t.add(je(n, e))
                                })), e.filter((function(e) {
                                    return t.has(e)
                                }))
                            }(t),
                            h = m.indexOf(n) - m.indexOf(r || s),
                            v = xe(e, 0),
                            b = xe(e, o - 1);
                        return -1 === s || -1 === d ? "NEW_FOCUS" : !l && d >= 0 ? d : s <= f && c && Math.abs(l) > 1 ? b : s >= p && c && Math.abs(l) > 1 ? v : l && Math.abs(h) > 1 ? d : s <= f ? b : s > p ? v : l ? Math.abs(l) > 1 ? d : (o + d + l) % o : void 0
                    }
                },
                Se = function(e, t, n) {
                    var r = ee(e),
                        o = ee(t),
                        i = r[0],
                        a = null;
                    return o.filter(Boolean).forEach((function(e) {
                        a = ve(a || e, e) || a, n.filter(Boolean).forEach((function(e) {
                            var t = ve(i, e);
                            t && (a = !a || t.contains(a) ? t : ve(t, a))
                        }))
                    })), a
                },
                De = function(e, t) {
                    var n = document && document.activeElement,
                        r = ie(e).filter(Pe),
                        o = Se(n || e, e, r),
                        i = ye(r),
                        a = ge(r).filter((function(e) {
                            var t = e.node;
                            return Pe(t)
                        }));
                    if (a[0] || (a = i)[0]) {
                        var c, s = ye([o]).map((function(e) {
                                return e.node
                            })),
                            u = function(e, t) {
                                var n = new Map;
                                return t.forEach((function(e) {
                                    return n.set(e.node, e)
                                })), e.map((function(e) {
                                    return n.get(e)
                                })).filter(Boolean)
                            }(s, a),
                            d = u.map((function(e) {
                                return e.node
                            })),
                            l = Ce(d, s, n, t);
                        if ("NEW_FOCUS" === l) {
                            var f = i.map((function(e) {
                                return e.node
                            })).filter((c = function(e) {
                                return e.reduce((function(e, t) {
                                    return e.concat(Oe(t))
                                }), [])
                            }(r), function(e) {
                                return !!e.autofocus || e.dataset && !!e.dataset.autofocus || c.indexOf(e) >= 0
                            }));
                            return {
                                node: f && f.length ? Ee(f) : Ee(d)
                            }
                        }
                        return void 0 === l ? l : u[l]
                    }
                },
                Me = 0,
                Le = !1,
                Ie = function(e, t) {
                    var n, r = De(e, t);
                    if (!Le && r) {
                        if (Me > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Le = !0, void setTimeout((function() {
                            Le = !1
                        }), 1);
                        Me++, (n = r.node).focus(), n.contentWindow && n.contentWindow.focus(), Me--
                    }
                };

            function Ne(e) {
                var t = window.setImmediate;
                "undefined" !== typeof t ? t(e) : setTimeout(e, 1)
            }
            var Ae = function() {
                    return document && document.activeElement === document.body || te()
                },
                Te = null,
                Fe = null,
                We = null,
                Be = !1,
                Re = function() {
                    return !0
                };

            function ze(e, t, n, r) {
                var o = null,
                    i = e;
                do {
                    var a = r[i];
                    if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
                    else {
                        if (!a.lockItem) break;
                        if (i !== e) return;
                        o = null
                    }
                } while ((i += n) !== t);
                o && (o.node.tabIndex = 0)
            }
            var _e = function(e) {
                    return e && "current" in e ? e.current : e
                },
                qe = function() {
                    var e, t = !1;
                    if (Te) {
                        var n = Te,
                            r = n.observed,
                            o = n.persistentFocus,
                            i = n.autoFocus,
                            a = n.shards,
                            c = n.crossFrame,
                            s = r || We && We.portaledElement,
                            u = document && document.activeElement;
                        if (s) {
                            var d = [s].concat(a.map(_e).filter(Boolean));
                            if (u && ! function(e) {
                                    return (Te.whiteList || Re)(e)
                                }(u) || (o || (c ? Boolean(Be) : "meanwhile" === Be) || !Ae() || !Fe && i) && (!s || ce(d) || (e = u, We && We.portaledElement === e) || (document && !Fe && u && !i ? (u.blur && u.blur(), document.body.focus()) : (t = Ie(d, Fe), We = {})), Be = !1, Fe = document && document.activeElement), document) {
                                var l = document && document.activeElement,
                                    f = function(e) {
                                        var t = ie(e).filter(Pe),
                                            n = Se(e, e, t),
                                            r = ge([n], !0),
                                            o = ge(t).filter((function(e) {
                                                var t = e.node;
                                                return Pe(t)
                                            })).map((function(e) {
                                                return e.node
                                            }));
                                        return r.map((function(e) {
                                            var t = e.node;
                                            return {
                                                node: t,
                                                index: e.index,
                                                lockItem: o.indexOf(t) >= 0,
                                                guard: ke(t)
                                            }
                                        }))
                                    }(d),
                                    p = f.map((function(e) {
                                        return e.node
                                    })).indexOf(l);
                                p > -1 && (f.filter((function(e) {
                                    var t = e.guard,
                                        n = e.node;
                                    return t && n.dataset.focusAutoGuard
                                })).forEach((function(e) {
                                    return e.node.removeAttribute("tabIndex")
                                })), ze(p, f.length, 1, f), ze(p, -1, -1, f))
                            }
                        }
                    }
                    return t
                },
                He = function(e) {
                    qe() && e && (e.stopPropagation(), e.preventDefault())
                },
                Ue = function() {
                    return Ne(qe)
                },
                Ge = function(e) {
                    var t = e.target,
                        n = e.currentTarget;
                    n.contains(t) || (We = {
                        observerNode: n,
                        portaledElement: t
                    })
                },
                Xe = function() {
                    Be = "just", setTimeout((function() {
                        Be = "meanwhile"
                    }), 0)
                };
            z.assignSyncMedium(Ge), _.assignMedium(Ue), q.assignMedium((function(e) {
                return e({
                    moveFocusInside: Ie,
                    focusInside: ce
                })
            }));
            var Ye, Ve = J((function(e) {
                return e.filter((function(e) {
                    return !e.disabled
                }))
            }), (function(e) {
                var t = e.slice(-1)[0];
                t && !Te && (document.addEventListener("focusin", He, !0), document.addEventListener("focusout", Ue), window.addEventListener("blur", Xe));
                var n = Te,
                    r = n && t && t.id === n.id;
                Te = t, n && !r && (n.onDeactivation(), e.filter((function(e) {
                    return e.id === n.id
                })).length || n.returnFocus(!t)), t ? (Fe = null, r && n.observed === t.observed || t.onActivation(), qe(), Ne(qe)) : (document.removeEventListener("focusin", He, !0), document.removeEventListener("focusout", Ue), window.removeEventListener("blur", Xe), Fe = null)
            }))((function() {
                return null
            }));
            $(H, Ve);

            function Ze() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = Ye || n.nc;
                return t && e.setAttribute("nonce", t), e
            }
            var Ke = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(n) {
                            var r, o;
                            0 == e && (t = Ze()) && (o = n, (r = t).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(t)), e++
                        },
                        remove: function() {
                            !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                $e = function() {
                    var e = function() {
                        var e = Ke();
                        return function(t) {
                            d.useEffect((function() {
                                return e.add(t),
                                    function() {
                                        e.remove()
                                    }
                            }), [])
                        }
                    }();
                    return function(t) {
                        var n = t.styles;
                        return e(n), null
                    }
                },
                Je = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                Qe = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                et = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" === typeof window) return Je;
                    var t = function(e) {
                            var t = window.getComputedStyle(document.body),
                                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = t["padding" === e ? "paddingTop" : "marginTop"],
                                o = t["padding" === e ? "paddingRight" : "marginRight"];
                            return [Qe(n), Qe(r), Qe(o)]
                        }(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                tt = $e(),
                nt = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        c = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .with-scroll-bars-hidden {\n   overflow: hidden " + r + ";\n   padding-right: " + c + "px " + r + ";\n  }\n  body {\n    overflow: hidden " + r + ";\n    " + [t && "position: relative " + r + ";", "margin" === n && "\n    padding-left: " + o + "px;\n    padding-top: " + i + "px;\n    padding-right: " + a + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + c + "px " + r + ";\n    ", "padding" === n && "padding-right: " + c + "px " + r + ";"].filter(Boolean).join("") + "\n  }\n  \n  ." + k + " {\n    right: " + c + "px " + r + ";\n  }\n  \n  ." + P + " {\n    margin-right: " + c + "px " + r + ";\n  }\n  \n  ." + k + " ." + k + " {\n    right: 0 " + r + ";\n  }\n  \n  ." + P + " ." + P + " {\n    margin-right: 0 " + r + ";\n  }\n"
                },
                rt = function(e) {
                    var t = d.useState(et(e.gapMode)),
                        n = t[0],
                        r = t[1];
                    d.useEffect((function() {
                        r(et(e.gapMode))
                    }), [e.gapMode]);
                    var o = e.noRelative,
                        i = e.noImportant,
                        a = e.gapMode,
                        c = void 0 === a ? "margin" : a;
                    return d.createElement(tt, {
                        styles: nt(n, !o, c, i ? "" : "!important")
                    })
                },
                ot = function(e, t) {
                    var n = t;
                    do {
                        if (it(e, n)) {
                            var r = at(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                it = function(e, t) {
                    return "v" === e ? function(e) {
                        var t = window.getComputedStyle(e);
                        return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY)
                    }(t) : function(e) {
                        var t = window.getComputedStyle(e);
                        return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX)
                    }(t)
                },
                at = function(e, t) {
                    return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
                        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
                    }(t);
                    var n
                },
                ct = !1;
            if ("undefined" !== typeof window) try {
                var st = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ct = !0, !0
                    }
                });
                window.addEventListener("test", st, st), window.removeEventListener("test", st, st)
            } catch (Ir) {
                ct = !1
            }
            var ut = !!ct && {
                    passive: !1
                },
                dt = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                lt = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ft = function(e) {
                    return e && "current" in e ? e.current : e
                },
                pt = function(e) {
                    return "\n  .block-interactivity-" + e + " {pointer-events: none;}\n  .allow-interactivity-" + e + " {pointer-events: all;}\n"
                },
                mt = 0,
                ht = [];
            $(L, (function(e) {
                var t = d.useRef([]),
                    n = d.useRef([0, 0]),
                    r = d.useRef(),
                    o = d.useState(mt++)[0],
                    i = d.useState((function() {
                        return $e()
                    }))[0],
                    a = d.useRef(e);
                d.useEffect((function() {
                    a.current = e
                }), [e]), d.useEffect((function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-" + o);
                        var t = [e.lockRef.current].concat((e.shards || []).map(ft)).filter(Boolean);
                        return t.forEach((function(e) {
                                return e.classList.add("allow-interactivity-" + o)
                            })),
                            function() {
                                document.body.classList.remove("block-interactivity-" + o), t.forEach((function(e) {
                                    return e.classList.remove("allow-interactivity-" + o)
                                }))
                            }
                    }
                }), [e.inert, e.lockRef.current, e.shards]);
                var c = d.useCallback((function(e, t) {
                        if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                        var o, i = dt(e),
                            c = n.current,
                            s = "deltaX" in e ? e.deltaX : c[0] - i[0],
                            u = "deltaY" in e ? e.deltaY : c[1] - i[1],
                            d = e.target,
                            l = Math.abs(s) > Math.abs(u) ? "h" : "v",
                            f = ot(l, d);
                        if (!f) return !0;
                        if (f ? o = l : (o = "v" === l ? "h" : "v", f = ot(l, d)), !f) return !1;
                        if (!r.current && "changedTouches" in e && (s || u) && (r.current = o), !o) return !0;
                        var p = r.current || o;
                        return function(e, t, n, r, o) {
                            var i = r,
                                a = n.target,
                                c = t.contains(a),
                                s = !1,
                                u = i > 0,
                                d = 0,
                                l = 0;
                            do {
                                var f = at(e, a),
                                    p = f[0],
                                    m = f[1] - f[2] - p;
                                (p || m) && it(e, a) && (d += m, l += p), a = a.parentNode
                            } while (!c && a !== document.body || c && (t.contains(a) || t === a));
                            return (u && (o && 0 === d || !o && i > d) || !u && (o && 0 === l || !o && -i > l)) && (s = !0), s
                        }(p, t, e, "h" === p ? s : u, !0)
                    }), []),
                    s = d.useCallback((function(e) {
                        var n = e;
                        if (ht.length && ht[ht.length - 1] === i) {
                            var r = "deltaY" in n ? lt(n) : dt(n),
                                o = t.current.filter((function(e) {
                                    return e.name === n.type && e.target === n.target && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                                    var t, o
                                }))[0];
                            if (o && o.should) n.preventDefault();
                            else if (!o) {
                                var s = (a.current.shards || []).map(ft).filter(Boolean).filter((function(e) {
                                    return e.contains(n.target)
                                }));
                                (s.length > 0 ? c(n, s[0]) : !a.current.noIsolation) && n.preventDefault()
                            }
                        }
                    }), []),
                    u = d.useCallback((function(e, n, r, o) {
                        var i = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o
                        };
                        t.current.push(i), setTimeout((function() {
                            t.current = t.current.filter((function(e) {
                                return e !== i
                            }))
                        }), 1)
                    }), []),
                    l = d.useCallback((function(e) {
                        n.current = dt(e), r.current = void 0
                    }), []),
                    f = d.useCallback((function(t) {
                        u(t.type, lt(t), t.target, c(t, e.lockRef.current))
                    }), []),
                    p = d.useCallback((function(t) {
                        u(t.type, dt(t), t.target, c(t, e.lockRef.current))
                    }), []);
                d.useEffect((function() {
                    return ht.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", s, ut), document.addEventListener("touchmove", s, ut), document.addEventListener("touchstart", l, ut),
                        function() {
                            ht = ht.filter((function(e) {
                                return e !== i
                            })), document.removeEventListener("wheel", s, ut), document.removeEventListener("touchmove", s, ut), document.removeEventListener("touchstart", l, ut)
                        }
                }), []);
                var m = e.removeScrollBar,
                    h = e.inert;
                return d.createElement(d.Fragment, null, h ? d.createElement(i, {
                    styles: pt(o)
                }) : null, m ? d.createElement(rt, {
                    gapMode: "margin"
                }) : null)
            }));
            var vt = "undefined" !== typeof document ? document.body : null,
                bt = new WeakMap,
                gt = new WeakMap,
                yt = {},
                Ot = 0,
                wt = $e(),
                jt = function() {
                    return d.createElement(wt, {
                        styles: "\n [data-focus-on-hidden] {\n   pointer-events: none !important;\n }\n"
                    })
                },
                xt = function(e) {
                    return "current" in e ? e.current : e
                };
            var Et = $(Y, (function(e) {
                    var t = e.setLockProps,
                        n = e.onEscapeKey,
                        r = e.onClickOutside,
                        o = e.shards,
                        i = e.onActivation,
                        a = e.onDeactivation,
                        c = e.noIsolation,
                        s = Object(d.useState)(void 0),
                        u = s[0],
                        l = s[1],
                        f = Object(d.useRef)(null),
                        p = Object(d.useRef)(0);
                    return d.useEffect((function() {
                        var e = function(e) {
                                e.defaultPrevented || "Escape" !== e.code && "Escape" !== e.key && 27 !== e.keyCode || !n || n(e)
                            },
                            t = function(e) {
                                e.defaultPrevented || e.target === f.current || e instanceof MouseEvent && 0 !== e.button || o && o.map(xt).some((function(t) {
                                    return t && t.contains(e.target) || t === e.target
                                })) || r && r(e)
                            },
                            i = function(e) {
                                t(e), p.current = e.touches.length
                            },
                            a = function(e) {
                                p.current = e.touches.length
                            };
                        if (u) return document.addEventListener("keydown", e), document.addEventListener("mousedown", t), document.addEventListener("touchstart", i), document.addEventListener("touchend", a),
                            function() {
                                document.removeEventListener("keydown", e), document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", i), document.removeEventListener("touchend", a)
                            }
                    }), [u, r, n]), Object(d.useEffect)((function() {
                        if (u) return i && i(u),
                            function() {
                                a && a()
                            }
                    }), [!!u]), Object(d.useEffect)((function() {
                        var e = function() {
                                return null
                            },
                            n = !1;
                        return t({
                                onMouseDown: function(e) {
                                    f.current = e.target
                                },
                                onTouchStart: function(e) {
                                    f.current = e.target
                                },
                                onActivation: function(t) {
                                    e = function(e, t, n) {
                                        void 0 === t && (t = vt), void 0 === n && (n = "data-aria-hidden");
                                        var r = Array.isArray(e) ? e : [e];
                                        yt[n] || (yt[n] = new WeakMap);
                                        var o = yt[n],
                                            i = [],
                                            a = function(e) {
                                                !e || r.indexOf(e) >= 0 || Array.prototype.forEach.call(e.children, (function(e) {
                                                    if (r.some((function(t) {
                                                            return e.contains(t)
                                                        }))) a(e);
                                                    else {
                                                        var t = e.getAttribute("aria-hidden"),
                                                            c = null !== t && "false" !== t,
                                                            s = (bt.get(e) || 0) + 1,
                                                            u = (o.get(e) || 0) + 1;
                                                        bt.set(e, s), o.set(e, u), i.push(e), 1 === s && c && gt.set(e, !0), 1 === u && e.setAttribute(n, "true"), c || e.setAttribute("aria-hidden", "true")
                                                    }
                                                }))
                                            };
                                        return a(t), Ot++,
                                            function() {
                                                i.forEach((function(e) {
                                                    var t = bt.get(e) - 1,
                                                        r = o.get(e) - 1;
                                                    bt.set(e, t), o.set(e, r), t || (gt.has(e) || e.removeAttribute("aria-hidden"), gt.delete(e)), r || e.removeAttribute(n)
                                                })), --Ot || (bt = new WeakMap, bt = new WeakMap, gt = new WeakMap, yt = {})
                                            }
                                    }([t].concat((o || []).map(xt)), document.body, c ? void 0 : V), l((function() {
                                        return t
                                    }))
                                },
                                onDeactivation: function() {
                                    e(), n || l(null)
                                }
                            }),
                            function() {
                                n = !0, t(!1)
                            }
                    }), []), d.createElement(jt, null)
                })),
                kt = function(e) {
                    return d.createElement(Et, E.a({}, e))
                },
                Pt = d.forwardRef((function(e, t) {
                    return d.createElement(Z, E.a({}, e, {
                        ref: t,
                        sideCar: kt
                    }))
                })),
                Ct = n("p+cf"),
                St = n("ytgV"),
                Dt = n("xnAi");
            const Mt = f.d.div.withConfig({
                    componentId: "bzx27k-0"
                })(["position:fixed;z-index:", ";top:0;right:0;bottom:0;left:0;width:100%;pointer-events:none;"], Ct.b),
                Lt = f.d.div.withConfig({
                    componentId: "bzx27k-1"
                })(["", ";"], Object(x.a)()),
                It = Object(f.d)(Pt).withConfig({
                    componentId: "bzx27k-2"
                })(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]),
                Nt = Object(f.d)(w.animated.div).withConfig({
                    componentId: "bzx27k-3"
                })(["", ";background:", ";opacity:0.85;pointer-events:all;"], Object(x.a)(), Object(x.g)(0, 0, 0)),
                At = Object(f.d)(w.animated.div).withConfig({
                    componentId: "bzx27k-4"
                })(["position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none;& > *{pointer-events:all;}"]);

            function Tt() {
                const e = Object(St.a)(O.a),
                    t = Object(c.b)((() => e.modals.slice())),
                    n = Object(j.useTransition)(t, {
                        key: e => e.id,
                        config: {
                            friction: 15,
                            tension: 300,
                            clamp: !0
                        },
                        from: {
                            contentOpacity: 0,
                            contentScale: .9,
                            filterOpacity: 0
                        },
                        enter: {
                            contentOpacity: 1,
                            contentScale: 1,
                            filterOpacity: .85
                        },
                        leave: {
                            contentOpacity: 0,
                            contentScale: .9,
                            filterOpacity: 0
                        }
                    });
                return Object(o.jsx)(Mt, {
                    children: n(((e, t) => Object(o.jsx)(Dt.b, {
                        value: t,
                        children: Object(o.jsxs)(Lt, {
                            children: [Object(o.jsx)(Nt, {
                                style: {
                                    opacity: e.filterOpacity
                                }
                            }), Object(o.jsx)(It, {
                                onClickOutside: () => t.dismiss(),
                                onEscapeKey: () => t.dismiss(),
                                children: Object(o.jsx)(At, {
                                    role: "dialog",
                                    style: {
                                        opacity: e.contentOpacity,
                                        scale: e.contentScale
                                    },
                                    children: t.render()
                                })
                            })]
                        })
                    })))
                })
            }
            var Ft, Wt, Bt = n("y25k");

            function Rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            class zt extends d.Component {
                constructor(...e) {
                    super(...e), this.state = {}
                }
                componentDidCatch(e, t) {
                    this.setState({
                        caughtError: {
                            error: e,
                            info: t
                        }
                    })
                }
                render() {
                    const {
                        children: e
                    } = this.props, {
                        caughtError: t
                    } = this.state;
                    return t ? Object(o.jsx)(Bt.a, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                                Object(i.a)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, t)) : e
                }
            }

            function _t(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _t(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            let Ht = (Ft = class {
                constructor() {
                    Object(p.a)(this, "popovers", Wt, this)
                }
                spawn(e) {
                    this.popovers.push(e)
                }
                dismiss(e) {
                    var t;
                    const n = this.popovers.find((t => t.name === e));
                    n && (null === (t = n.onDismiss) || void 0 === t || t.call(n), this.popovers = this.popovers.filter((t => t.name !== e)))
                }
                update(e, t) {
                    const n = this.popovers.find((t => t.name === e));
                    if (!n) return;
                    const r = this.popovers.indexOf(n);
                    this.popovers[r] = qt(qt({}, n), t)
                }
            }, Wt = Object(m.a)(Ft.prototype, "popovers", [a.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), Object(m.a)(Ft.prototype, "spawn", [a.action], Object.getOwnPropertyDescriptor(Ft.prototype, "spawn"), Ft.prototype), Object(m.a)(Ft.prototype, "dismiss", [a.action], Object.getOwnPropertyDescriptor(Ft.prototype, "dismiss"), Ft.prototype), Object(m.a)(Ft.prototype, "update", [a.action], Object.getOwnPropertyDescriptor(Ft.prototype, "update"), Ft.prototype), Ft);
            var Ut = n("7nDK");

            function Gt(e) {
                var t = e.getBoundingClientRect();
                return {
                    width: t.width,
                    height: t.height,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    x: t.left,
                    y: t.top
                }
            }

            function Xt(e) {
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function Yt(e) {
                var t = Xt(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function Vt(e) {
                return e instanceof Xt(e).Element || e instanceof Element
            }

            function Zt(e) {
                return e instanceof Xt(e).HTMLElement || e instanceof HTMLElement
            }

            function Kt(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof Xt(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function $t(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function Jt(e) {
                return ((Vt(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function Qt(e) {
                return Gt(Jt(e)).left + Yt(e).scrollLeft
            }

            function en(e) {
                return Xt(e).getComputedStyle(e)
            }

            function tn(e) {
                var t = en(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function nn(e, t, n) {
                void 0 === n && (n = !1);
                var r = Jt(t),
                    o = Gt(e),
                    i = Zt(t),
                    a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = {
                        x: 0,
                        y: 0
                    };
                return (i || !i && !n) && (("body" !== $t(t) || tn(r)) && (a = function(e) {
                    return e !== Xt(e) && Zt(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : Yt(e);
                    var t
                }(t)), Zt(t) ? ((c = Gt(t)).x += t.clientLeft, c.y += t.clientTop) : r && (c.x = Qt(r))), {
                    x: o.left + a.scrollLeft - c.x,
                    y: o.top + a.scrollTop - c.y,
                    width: o.width,
                    height: o.height
                }
            }

            function rn(e) {
                return {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }

            function on(e) {
                return "html" === $t(e) ? e : e.assignedSlot || e.parentNode || (Kt(e) ? e.host : null) || Jt(e)
            }

            function an(e) {
                return ["html", "body", "#document"].indexOf($t(e)) >= 0 ? e.ownerDocument.body : Zt(e) && tn(e) ? e : an(on(e))
            }

            function cn(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = an(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = Xt(r),
                    a = o ? [i].concat(i.visualViewport || [], tn(r) ? r : []) : r,
                    c = t.concat(a);
                return o ? c : c.concat(cn(on(a)))
            }

            function sn(e) {
                return ["table", "td", "th"].indexOf($t(e)) >= 0
            }

            function un(e) {
                return Zt(e) && "fixed" !== en(e).position ? e.offsetParent : null
            }

            function dn(e) {
                for (var t = Xt(e), n = un(e); n && sn(n) && "static" === en(n).position;) n = un(n);
                return n && ("html" === $t(n) || "body" === $t(n) && "static" === en(n).position) ? t : n || function(e) {
                    for (var t = navigator.userAgent.toLowerCase().includes("firefox"), n = on(e); Zt(n) && ["html", "body"].indexOf($t(n)) < 0;) {
                        var r = en(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || ["transform", "perspective"].includes(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var ln = "top",
                fn = "bottom",
                pn = "right",
                mn = "left",
                hn = "auto",
                vn = [ln, fn, pn, mn],
                bn = "start",
                gn = "end",
                yn = "viewport",
                On = "popper",
                wn = vn.reduce((function(e, t) {
                    return e.concat([t + "-" + bn, t + "-" + gn])
                }), []),
                jn = [].concat(vn, [hn]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + bn, t + "-" + gn])
                }), []),
                xn = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function En(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }

            function kn(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var Pn = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function Cn() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function Sn(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    i = void 0 === o ? Pn : o;
                return function(e, t, n) {
                    void 0 === n && (n = i);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, Pn, i),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        a = [],
                        c = !1,
                        s = {
                            state: o,
                            setOptions: function(n) {
                                u(), o.options = Object.assign({}, i, o.options, n), o.scrollParents = {
                                    reference: Vt(e) ? cn(e) : e.contextElement ? cn(e.contextElement) : [],
                                    popper: cn(t)
                                };
                                var c = function(e) {
                                    var t = En(e);
                                    return xn.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, o.options.modifiers)));
                                return o.orderedModifiers = c.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        i = e.effect;
                                    if ("function" === typeof i) {
                                        var c = i({
                                                state: o,
                                                name: t,
                                                instance: s,
                                                options: r
                                            }),
                                            u = function() {};
                                        a.push(c || u)
                                    }
                                })), s.update()
                            },
                            forceUpdate: function() {
                                if (!c) {
                                    var e = o.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (Cn(t, n)) {
                                        o.rects = {
                                            reference: nn(t, dn(n), "fixed" === o.options.strategy),
                                            popper: rn(n)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < o.orderedModifiers.length; r++)
                                            if (!0 !== o.reset) {
                                                var i = o.orderedModifiers[r],
                                                    a = i.fn,
                                                    u = i.options,
                                                    d = void 0 === u ? {} : u,
                                                    l = i.name;
                                                "function" === typeof a && (o = a({
                                                    state: o,
                                                    options: d,
                                                    name: l,
                                                    instance: s
                                                }) || o)
                                            } else o.reset = !1, r = -1
                                    }
                                }
                            },
                            update: kn((function() {
                                return new Promise((function(e) {
                                    s.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                u(), c = !0
                            }
                        };
                    if (!Cn(e, t)) return s;

                    function u() {
                        a.forEach((function(e) {
                            return e()
                        })), a = []
                    }
                    return s.setOptions(n).then((function(e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), s
                }
            }
            var Dn = {
                passive: !0
            };
            var Mn = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        o = r.scroll,
                        i = void 0 === o || o,
                        a = r.resize,
                        c = void 0 === a || a,
                        s = Xt(t.elements.popper),
                        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return i && u.forEach((function(e) {
                            e.addEventListener("scroll", n.update, Dn)
                        })), c && s.addEventListener("resize", n.update, Dn),
                        function() {
                            i && u.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, Dn)
                            })), c && s.removeEventListener("resize", n.update, Dn)
                        }
                },
                data: {}
            };

            function Ln(e) {
                return e.split("-")[0]
            }

            function In(e) {
                return e.split("-")[1]
            }

            function Nn(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function An(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? Ln(o) : null,
                    a = o ? In(o) : null,
                    c = n.x + n.width / 2 - r.width / 2,
                    s = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case ln:
                        t = {
                            x: c,
                            y: n.y - r.height
                        };
                        break;
                    case fn:
                        t = {
                            x: c,
                            y: n.y + n.height
                        };
                        break;
                    case pn:
                        t = {
                            x: n.x + n.width,
                            y: s
                        };
                        break;
                    case mn:
                        t = {
                            x: n.x - r.width,
                            y: s
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var u = i ? Nn(i) : null;
                if (null != u) {
                    var d = "y" === u ? "height" : "width";
                    switch (a) {
                        case bn:
                            t[u] = t[u] - (n[d] / 2 - r[d] / 2);
                            break;
                        case gn:
                            t[u] = t[u] + (n[d] / 2 - r[d] / 2)
                    }
                }
                return t
            }
            var Tn = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = An({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                },
                Fn = Math.max,
                Wn = Math.min,
                Bn = Math.round,
                Rn = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function zn(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    i = e.offsets,
                    a = e.position,
                    c = e.gpuAcceleration,
                    s = e.adaptive,
                    u = e.roundOffsets,
                    d = !0 === u ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: Bn(Bn(t * r) / r) || 0,
                            y: Bn(Bn(n * r) / r) || 0
                        }
                    }(i) : "function" === typeof u ? u(i) : i,
                    l = d.x,
                    f = void 0 === l ? 0 : l,
                    p = d.y,
                    m = void 0 === p ? 0 : p,
                    h = i.hasOwnProperty("x"),
                    v = i.hasOwnProperty("y"),
                    b = mn,
                    g = ln,
                    y = window;
                if (s) {
                    var O = dn(n),
                        w = "clientHeight",
                        j = "clientWidth";
                    O === Xt(n) && "static" !== en(O = Jt(n)).position && (w = "scrollHeight", j = "scrollWidth"), o === ln && (g = fn, m -= O[w] - r.height, m *= c ? 1 : -1), o === mn && (b = pn, f -= O[j] - r.width, f *= c ? 1 : -1)
                }
                var x, E = Object.assign({
                    position: a
                }, s && Rn);
                return c ? Object.assign({}, E, ((x = {})[g] = v ? "0" : "", x[b] = h ? "0" : "", x.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", x)) : Object.assign({}, E, ((t = {})[g] = v ? m + "px" : "", t[b] = h ? f + "px" : "", t.transform = "", t))
            }
            var _n = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function qn(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return _n[e]
                }))
            }
            var Hn = {
                start: "end",
                end: "start"
            };

            function Un(e) {
                return e.replace(/start|end/g, (function(e) {
                    return Hn[e]
                }))
            }

            function Gn(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && Kt(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function Xn(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Yn(e, t) {
                return t === yn ? Xn(function(e) {
                    var t = Xt(e),
                        n = Jt(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        i = n.clientHeight,
                        a = 0,
                        c = 0;
                    return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
                        width: o,
                        height: i,
                        x: a + Qt(e),
                        y: c
                    }
                }(e)) : Zt(t) ? function(e) {
                    var t = Gt(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : Xn(function(e) {
                    var t, n = Jt(e),
                        r = Yt(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = Fn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        a = Fn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        c = -r.scrollLeft + Qt(e),
                        s = -r.scrollTop;
                    return "rtl" === en(o || n).direction && (c += Fn(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: a,
                        x: c,
                        y: s
                    }
                }(Jt(e)))
            }

            function Vn(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = cn(on(e)),
                            n = ["absolute", "fixed"].indexOf(en(e).position) >= 0 && Zt(e) ? dn(e) : e;
                        return Vt(n) ? t.filter((function(e) {
                            return Vt(e) && Gn(e, n) && "body" !== $t(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(r, [n]),
                    i = o[0],
                    a = o.reduce((function(t, n) {
                        var r = Yn(e, n);
                        return t.top = Fn(r.top, t.top), t.right = Wn(r.right, t.right), t.bottom = Wn(r.bottom, t.bottom), t.left = Fn(r.left, t.left), t
                    }), Yn(e, i));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }

            function Zn(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function Kn(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function $n(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    i = n.boundary,
                    a = void 0 === i ? "clippingParents" : i,
                    c = n.rootBoundary,
                    s = void 0 === c ? yn : c,
                    u = n.elementContext,
                    d = void 0 === u ? On : u,
                    l = n.altBoundary,
                    f = void 0 !== l && l,
                    p = n.padding,
                    m = void 0 === p ? 0 : p,
                    h = Zn("number" !== typeof m ? m : Kn(m, vn)),
                    v = d === On ? "reference" : On,
                    b = e.elements.reference,
                    g = e.rects.popper,
                    y = e.elements[f ? v : d],
                    O = Vn(Vt(y) ? y : y.contextElement || Jt(e.elements.popper), a, s),
                    w = Gt(b),
                    j = An({
                        reference: w,
                        element: g,
                        strategy: "absolute",
                        placement: o
                    }),
                    x = Xn(Object.assign({}, g, j)),
                    E = d === On ? x : w,
                    k = {
                        top: O.top - E.top + h.top,
                        bottom: E.bottom - O.bottom + h.bottom,
                        left: O.left - E.left + h.left,
                        right: E.right - O.right + h.right
                    },
                    P = e.modifiersData.offset;
                if (d === On && P) {
                    var C = P[o];
                    Object.keys(k).forEach((function(e) {
                        var t = [pn, fn].indexOf(e) >= 0 ? 1 : -1,
                            n = [ln, fn].indexOf(e) >= 0 ? "y" : "x";
                        k[e] += C[n] * t
                    }))
                }
                return k
            }

            function Jn(e, t, n) {
                return Fn(e, Wn(t, n))
            }

            function Qn(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function er(e) {
                return [ln, pn, fn, mn].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var tr = Sn({
                    defaultModifiers: [Mn, Tn, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                c = n.roundOffsets,
                                s = void 0 === c || c,
                                u = {
                                    placement: Ln(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, zn(Object.assign({}, u, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: s
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, zn(Object.assign({}, u, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: s
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                Zt(o) && $t(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        Zt(r) && $t(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = jn.reduce((function(e, n) {
                                    return e[n] = function(e, t, n) {
                                        var r = Ln(e),
                                            o = [mn, ln].indexOf(r) >= 0 ? -1 : 1,
                                            i = "function" === typeof n ? n(Object.assign({}, t, {
                                                placement: e
                                            })) : n,
                                            a = i[0],
                                            c = i[1];
                                        return a = a || 0, c = (c || 0) * o, [mn, pn].indexOf(r) >= 0 ? {
                                            x: c,
                                            y: a
                                        } : {
                                            x: a,
                                            y: c
                                        }
                                    }(n, t.rects, i), e
                                }), {}),
                                c = a[t.placement],
                                s = c.x,
                                u = c.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, c = void 0 === a || a, s = n.fallbackPlacements, u = n.padding, d = n.boundary, l = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, v = t.options.placement, b = Ln(v), g = s || (b === v || !m ? [qn(v)] : function(e) {
                                        if (Ln(e) === hn) return [];
                                        var t = qn(e);
                                        return [Un(e), t, Un(t)]
                                    }(v)), y = [v].concat(g).reduce((function(e, n) {
                                        return e.concat(Ln(n) === hn ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                a = n.padding,
                                                c = n.flipVariations,
                                                s = n.allowedAutoPlacements,
                                                u = void 0 === s ? jn : s,
                                                d = In(r),
                                                l = d ? c ? wn : wn.filter((function(e) {
                                                    return In(e) === d
                                                })) : vn,
                                                f = l.filter((function(e) {
                                                    return u.indexOf(e) >= 0
                                                }));
                                            0 === f.length && (f = l);
                                            var p = f.reduce((function(t, n) {
                                                return t[n] = $n(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: a
                                                })[Ln(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: d,
                                            rootBoundary: l,
                                            padding: u,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }) : n)
                                    }), []), O = t.rects.reference, w = t.rects.popper, j = new Map, x = !0, E = y[0], k = 0; k < y.length; k++) {
                                    var P = y[k],
                                        C = Ln(P),
                                        S = In(P) === bn,
                                        D = [ln, fn].indexOf(C) >= 0,
                                        M = D ? "width" : "height",
                                        L = $n(t, {
                                            placement: P,
                                            boundary: d,
                                            rootBoundary: l,
                                            altBoundary: f,
                                            padding: u
                                        }),
                                        I = D ? S ? pn : mn : S ? fn : ln;
                                    O[M] > w[M] && (I = qn(I));
                                    var N = qn(I),
                                        A = [];
                                    if (i && A.push(L[C] <= 0), c && A.push(L[I] <= 0, L[N] <= 0), A.every((function(e) {
                                            return e
                                        }))) {
                                        E = P, x = !1;
                                        break
                                    }
                                    j.set(P, A)
                                }
                                if (x)
                                    for (var T = function(e) {
                                            var t = y.find((function(t) {
                                                var n = j.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return E = t, "break"
                                        }, F = m ? 3 : 1; F > 0; F--) {
                                        if ("break" === T(F)) break
                                    }
                                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                c = void 0 !== a && a,
                                s = n.boundary,
                                u = n.rootBoundary,
                                d = n.altBoundary,
                                l = n.padding,
                                f = n.tether,
                                p = void 0 === f || f,
                                m = n.tetherOffset,
                                h = void 0 === m ? 0 : m,
                                v = $n(t, {
                                    boundary: s,
                                    rootBoundary: u,
                                    padding: l,
                                    altBoundary: d
                                }),
                                b = Ln(t.placement),
                                g = In(t.placement),
                                y = !g,
                                O = Nn(b),
                                w = "x" === O ? "y" : "x",
                                j = t.modifiersData.popperOffsets,
                                x = t.rects.reference,
                                E = t.rects.popper,
                                k = "function" === typeof h ? h(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : h,
                                P = {
                                    x: 0,
                                    y: 0
                                };
                            if (j) {
                                if (i || c) {
                                    var C = "y" === O ? ln : mn,
                                        S = "y" === O ? fn : pn,
                                        D = "y" === O ? "height" : "width",
                                        M = j[O],
                                        L = j[O] + v[C],
                                        I = j[O] - v[S],
                                        N = p ? -E[D] / 2 : 0,
                                        A = g === bn ? x[D] : E[D],
                                        T = g === bn ? -E[D] : -x[D],
                                        F = t.elements.arrow,
                                        W = p && F ? rn(F) : {
                                            width: 0,
                                            height: 0
                                        },
                                        B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        R = B[C],
                                        z = B[S],
                                        _ = Jn(0, x[D], W[D]),
                                        q = y ? x[D] / 2 - N - _ - R - k : A - _ - R - k,
                                        H = y ? -x[D] / 2 + N + _ + z + k : T + _ + z + k,
                                        U = t.elements.arrow && dn(t.elements.arrow),
                                        G = U ? "y" === O ? U.clientTop || 0 : U.clientLeft || 0 : 0,
                                        X = t.modifiersData.offset ? t.modifiersData.offset[t.placement][O] : 0,
                                        Y = j[O] + q - X - G,
                                        V = j[O] + H - X;
                                    if (i) {
                                        var Z = Jn(p ? Wn(L, Y) : L, M, p ? Fn(I, V) : I);
                                        j[O] = Z, P[O] = Z - M
                                    }
                                    if (c) {
                                        var K = "x" === O ? ln : mn,
                                            $ = "x" === O ? fn : pn,
                                            J = j[w],
                                            Q = J + v[K],
                                            ee = J - v[$],
                                            te = Jn(p ? Wn(Q, Y) : Q, J, p ? Fn(ee, V) : ee);
                                        j[w] = te, P[w] = te - J
                                    }
                                }
                                t.modifiersData[r] = P
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                o = n.elements.arrow,
                                i = n.modifiersData.popperOffsets,
                                a = Ln(n.placement),
                                c = Nn(a),
                                s = [mn, pn].indexOf(a) >= 0 ? "height" : "width";
                            if (o && i) {
                                var u = n.modifiersData[r + "#persistent"].padding,
                                    d = rn(o),
                                    l = "y" === c ? ln : mn,
                                    f = "y" === c ? fn : pn,
                                    p = n.rects.reference[s] + n.rects.reference[c] - i[c] - n.rects.popper[s],
                                    m = i[c] - n.rects.reference[c],
                                    h = dn(o),
                                    v = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                                    b = p / 2 - m / 2,
                                    g = u[l],
                                    y = v - d[s] - u[f],
                                    O = v / 2 - d[s] / 2 + b,
                                    w = Jn(g, O, y),
                                    j = c;
                                n.modifiersData[r] = ((t = {})[j] = w, t.centerOffset = w - O, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.element,
                                i = void 0 === o ? "[data-popper-arrow]" : o,
                                a = n.padding,
                                c = void 0 === a ? 0 : a;
                            null != i && ("string" !== typeof i || (i = t.elements.popper.querySelector(i))) && Gn(t.elements.popper, i) && (c = "function" === typeof c ? c(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : c, t.elements.arrow = i, t.modifiersData[r + "#persistent"] = {
                                padding: Zn("number" !== typeof c ? c : Kn(c, vn))
                            })
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = $n(t, {
                                    elementContext: "reference"
                                }),
                                c = $n(t, {
                                    altBoundary: !0
                                }),
                                s = Qn(a, r),
                                u = Qn(c, o, i),
                                d = er(s),
                                l = er(u);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: s,
                                popperEscapeOffsets: u,
                                isReferenceHidden: d,
                                hasPopperEscaped: l
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": d,
                                "data-popper-escaped": l
                            })
                        }
                    }]
                }),
                nr = n("+tY/");

            function rr(e) {
                const {
                    popover: t
                } = e, n = Object(St.a)(Ut.a), r = Object(d.useRef)(null);
                return Object(d.useLayoutEffect)((() => {
                    const {
                        current: e
                    } = r;
                    if (!e) return;
                    const n = tr(t.anchor, e, {
                        placement: t.placement,
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 8]
                            }
                        }]
                    });
                    return () => {
                        n.destroy()
                    }
                })), Object(o.jsx)(nr.b, {
                    value: t,
                    children: Object(o.jsx)(Pt, {
                        ref: r,
                        shards: t.shards,
                        onClickOutside: () => n.dismiss(t.name),
                        onEscapeKey: () => n.dismiss(t.name),
                        children: t.render()
                    })
                })
            }
            const or = f.d.div.withConfig({
                componentId: "sc-1ru3l2d-0"
            })(["& > *{z-index:", ";}"], Ct.c);

            function ir() {
                const e = Object(St.a)(Ut.a);
                return Object(c.b)((() => Object(o.jsx)(or, {
                    children: e.popovers.map((e => Object(o.jsx)(rr, {
                        popover: e
                    }, e.name)))
                })))
            }
            var ar = n("adZo");
            const cr = {
                color: "dark",
                display: "cozy",
                fontSize: 16,
                confirmExit: !1,
                expandSections: !1
            };
            var sr, ur, dr;

            function lr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lr(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            let pr = (sr = a.computed.struct, ur = class {
                constructor() {
                    Object(p.a)(this, "settings", dr, this)
                }
                load() {
                    var e;
                    const t = this.settings,
                        n = JSON.parse(null !== (e = localStorage.getItem("settings")) && void 0 !== e ? e : "{}");
                    for (const [r, o] of Object.entries(n)) Object.keys(t).includes(r) && (t[r] = o)
                }
                dump() {
                    const e = JSON.stringify(this.settings);
                    localStorage.setItem("settings", e)
                }
                get theme() {
                    const {
                        color: e,
                        display: t,
                        fontSize: n
                    } = this.settings;
                    return fr(fr({}, ar.b[e]), {}, {
                        appearance: {
                            color: e,
                            display: t,
                            fontSize: n
                        }
                    })
                }
            }, dr = Object(m.a)(ur.prototype, "settings", [a.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return fr({}, cr)
                }
            }), Object(m.a)(ur.prototype, "theme", [sr], Object.getOwnPropertyDescriptor(ur.prototype, "theme"), ur.prototype), ur);
            var mr = n("Lu/x");
            const hr = f.b `${Object(f.c)(["",";html,body{padding:0;margin:0;background:",";line-height:1;color:",";font-family:",";font-size:","px;text-rendering:optimizeLegibility;text-size-adjust:100%;height:100%;overflow:hidden;}button,input,textarea{font-family:inherit;}#app,#__next{height:100%;}pre,code{font-family:",";}a{color:",";text-decoration:none;&:hover{text-decoration:underline;}}img{text-indent:100%;white-space:nowrap;overflow:hidden;}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;scrollbar-color:",";scrollbar-width:auto;&::-webkit-scrollbar{",";}&::-webkit-scroll-corner{background-color:transparent;}&::-webkit-scrollbar-thumb{background-color:",";border:4px solid transparent;border-radius:8px;min-height:40px;background-clip:padding-box;}&::-webkit-scrollbar-track{background-color:",";border:4px solid transparent;border-radius:8px;margin-bottom:8px;background-clip:padding-box;}&::-webkit-scrollbar-corner{background-color:transparent;}&::-webkit-resizer{background-image:",";background-repeat:no-repeat;background-position:bottom right;}}"],[300,400,500,600,700].map((e=>Object(x.d)({fontFamily:"Whitney",fontStyle:"normal",fontWeight:String(e),fontFilePath:` / static / whitney - $ {
                e
            }
            `,fileFormats:["woff2","woff"],fontDisplay:"swap"}))),(({theme:e})=>e.background.primary),(({theme:e})=>e.text.normal),(({theme:e})=>e.font.sans),(({theme:e})=>e.appearance.fontSize),(({theme:e})=>e.font.mono),(({theme:e})=>e.text.link),(({theme:e})=>`
            $ {
                e.scrollbar.auto.thumb
            }
            $ {
                e.scrollbar.auto.track
            }
            `),Object(x.i)(16),(({theme:e})=>e.scrollbar.auto.thumb),(({theme:e})=>e.scrollbar.auto.track),(({theme:e})=>`
            url("/static/resizer-${e.appearance.color}.svg")
            `))}`;
            var vr, br;

            function gr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? gr(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            let Or = (vr = class {
                constructor() {
                    Object(p.a)(this, "tooltips", br, this)
                }
                add(e) {
                    const t = Object(h.a)();
                    return this.tooltips.push(yr(yr({}, e), {}, {
                        id: t
                    })), () => {
                        const e = this.tooltips.findIndex((e => e.id === t));
                        e >= 0 && this.tooltips.splice(e, 1)
                    }
                }
            }, br = Object(m.a)(vr.prototype, "tooltips", [a.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }), Object(m.a)(vr.prototype, "add", [a.action], Object.getOwnPropertyDescriptor(vr.prototype, "add"), vr.prototype), vr);
            var wr = n("srCQ"),
                jr = n("Mka9"),
                xr = n("ZUW4");
            const Er = Object(f.d)(w.animated.div).withConfig({
                    componentId: "sc-1q1pha4-0"
                })(["padding:8px 11px;background:", ";border-radius:4px;font-size:15px;font-weight:500;color:", ";box-shadow:", ";transform-origin:bottom;"], Object(x.g)(0, 0, 0), Object(x.g)(255, 255, 255), (({
                    theme: e
                }) => e.elavation.high)),
                kr = f.d.div.withConfig({
                    componentId: "sc-1q1pha4-1"
                })(["&,&::before{", ' position:absolute;z-index:-1;}&::before{content:"";transform:rotate(45deg);background:', ";}"], Object(x.i)(10), Object(x.g)(0, 0, 0));

            function Pr(e) {
                const {
                    tooltip: t
                } = e, n = Object(d.useRef)(null), r = Object(d.useRef)(null);
                Object(xr.a)((() => {
                    const {
                        current: e
                    } = n, {
                        current: o
                    } = r;
                    if (!e || !o) return;
                    const i = tr(t.anchor, e, {
                        placement: "top",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 4]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: o
                            }
                        }]
                    });
                    return () => {
                        i.destroy()
                    }
                }));
                const {
                    0: i,
                    1: a
                } = Object(d.useState)(!1), c = Object(j.useTransition)(i, {
                    key: Number(i),
                    config: {
                        friction: 20,
                        tension: 400,
                        clamp: !0
                    },
                    from: {
                        opacity: 0,
                        scale: .9
                    },
                    enter: {
                        opacity: 1,
                        scale: 1
                    },
                    leave: {
                        opacity: 0,
                        scale: .9
                    }
                }), s = () => a(!0), u = () => a(!1);
                return Object(jr.a)((() => (t.anchor.addEventListener("mouseenter", s), t.anchor.addEventListener("mouseleave", u), () => {
                    t.anchor.removeEventListener("mouseenter", s), t.anchor.removeEventListener("mouseleave", u)
                }))), c(((e, i) => i && Object(o.jsx)("div", {
                    ref: n,
                    style: {
                        pointerEvents: "none",
                        position: "absolute"
                    },
                    children: Object(o.jsxs)(Er, {
                        style: e,
                        children: [t.content, Object(o.jsx)(kr, {
                            ref: r
                        })]
                    })
                })))
            }
            const Cr = f.d.div.withConfig({
                componentId: "den5bi-0"
            })(["& > *{z-index:", ";}"], Ct.d);

            function Sr() {
                const e = Object(St.a)(wr.a);
                return Object(c.b)((() => Object(o.jsx)(Cr, {
                    children: e.tooltips.map((e => Object(o.jsx)(Pr, {
                        tooltip: e
                    }, e.id)))
                })))
            }

            function Dr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Mr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dr(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            class Lr extends u.a {
                constructor(e) {
                    super(e), this.preferenceManager = new pr, this.modalManager = new y, this.popoverManager = new Ht, this.tooltipManager = new Or, this.disposers = []
                }
                componentDidMount() {
                    this.preferenceManager.load(), this.disposers.push(Object(a.autorun)((() => this.preferenceManager.dump()), {
                        delay: 500
                    }))
                }
                componentWillUnmount() {
                    for (const e of this.disposers) e()
                }
                render() {
                    const {
                        Component: e,
                        pageProps: t
                    } = this.props;
                    return Object(o.jsx)(c.a, {
                        children: () => Object(o.jsxs)(f.a, {
                            theme: this.preferenceManager.theme,
                            children: [Object(o.jsx)(hr, {}), Object(o.jsx)(zt, {
                                children: Object(o.jsx)(mr.b, {
                                    value: this.preferenceManager,
                                    children: Object(o.jsx)(O.b, {
                                        value: this.modalManager,
                                        children: Object(o.jsx)(Ut.b, {
                                            value: this.popoverManager,
                                            children: Object(o.jsxs)(wr.b, {
                                                value: this.tooltipManager,
                                                children: [Object(o.jsx)(e, Mr({}, t)), Object(o.jsx)(Tt, {}), Object(o.jsx)(ir, {}), Object(o.jsx)(Sr, {})]
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }
            }
        },
        pome: function(e, t, n) {},
        y25k: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var r = n("nKUr"),
                o = n("g4pe"),
                i = n.n(o),
                a = n("YFqc"),
                c = n.n(a),
                s = n("20a2"),
                u = n.n(s),
                d = (n("q1tI"), n("vOnD")),
                l = n("pWTd"),
                f = n("GyG+"),
                p = n("JrLk"),
                m = n("B4ld");
            const h = d.d.div.withConfig({
                    componentId: "sc-1ewc626-0"
                })(["height:100%;overflow:auto;padding:64px 32px 0;", "{padding:32px 16px;}"], m.b),
                v = d.d.h1.withConfig({
                    componentId: "sc-1ewc626-1"
                })(["margin:0;color:", ";font-size:28px;"], (({
                    theme: e
                }) => e.header.primary)),
                b = d.d.p.withConfig({
                    componentId: "sc-1ewc626-2"
                })(["margin:16px 0;max-width:600px;font-size:16px;line-height:1.375;"]),
                g = Object(d.d)(l.a).withConfig({
                    componentId: "sc-1ewc626-3"
                })(["max-width:1200px;margin-bottom:32px;"]),
                y = new Map([
                    [400, "Bad request"],
                    [403, "Forbidden"],
                    [404, "Page not found"],
                    [405, "Method not allowed"],
                    [500, "Internal server error"]
                ]);

            function O(e) {
                var t;
                const {
                    error: n,
                    info: o,
                    title: a,
                    statusCode: s
                } = e, d = null !== a && void 0 !== a ? a : s && y.has(s) ? `Error ${s}: ${y.get(s)}` : "An unexpected error has occurred";
                return Object(r.jsxs)(h, {
                    children: [Object(r.jsx)(i.a, {
                        children: Object(r.jsx)("title", {
                            children: d
                        }, "title")
                    }), Object(r.jsx)(v, {
                        children: d
                    }), Object(r.jsxs)(b, {
                        children: ["If you didn't expect this, please report it on the", " ", Object(r.jsx)("a", {
                            href: "/discord",
                            target: "blank",
                            rel: "noopener",
                            children: "Discord support server"
                        }), ", or create an issue on the", " ", Object(r.jsx)("a", {
                            href: "https://github.com/discohook/site",
                            target: "blank",
                            rel: "noopener",
                            children: "GitHub repository"
                        }), "."]
                    }), s ? Object(r.jsx)(c.a, {
                        href: "/",
                        children: Object(r.jsx)(p.a, {
                            children: "Home"
                        })
                    }) : Object(r.jsx)(f.a, {
                        onClick: () => u.a.reload(),
                        children: "Refresh"
                    }), n && o && Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(b, {
                            children: "Technical details are provided below (please forward this)"
                        }), Object(r.jsxs)(g, {
                            children: [String(n), "\n", null === (t = n.stack) || void 0 === t ? void 0 : t.replace(String(n), "").replace(/^\n|\n$/g, ""), o.componentStack]
                        })]
                    })]
                })
            }
        }
    },
    [
        [0, 0, 2, 3, 1, 4]
    ]
]);
//# sourceMappingURL=_app-6afc201f01d1f5d5b724.js.map