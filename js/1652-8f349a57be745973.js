"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1652], {
    9626: (n, e, t) => {
        t.d(e, {
            $$: () => _
        });
        var i, o, r = t(67684), u = t(62701), l = t(20294), a = t(85993), d = t(14232), c = t(89890), s = t(39324), v = t.n(s), f = t(56557), m = t.n(f), h = t(25628), p = t(41224), g = t(87992), w = parseInt(null === (o = v()()) || void 0 === o ? void 0 : null === (i = o.publicRuntimeConfig) || void 0 === i ? void 0 : i.LIVE_BLOG_POLLING_INTERVAL, 10), b = Number.isNaN(w) ? 0 : w;
        function y(n) {
            var e, t, i, o = null == n ? void 0 : null === (t = n.cards) || void 0 === t ? void 0 : null === (e = t.items) || void 0 === e ? void 0 : e[0];
            return m()().diff(m()(null == o ? void 0 : null === (i = o.date) || void 0 === i ? void 0 : i.publishedAt), "h") >= 12 ? 0 : b
        }
        function _(n) {
            var e, t, i, o, s, v, f, m, w, b, _, A, I, E, L, k, D, M, C, N, P = n.initialData, T = n.articleId, S = (0,
            g.Jp)(), G = null !== (C = null == S ? void 0 : null === (e = S["live-blog-card-query-limits"]) || void 0 === e ? void 0 : e.firstPage) && void 0 !== C ? C : h.dK.FIRST_PAGE, Z = null !== (N = null == S ? void 0 : null === (t = S["live-blog-card-query-limits"]) || void 0 === t ? void 0 : t.loadMore) && void 0 !== N ? N : h.dK.LOAD_MORE, x = (0,
            c.Ay)(function() {
                return (0,
                h.e6)({
                    queryLimit: G,
                    articleId: T
                })
            }, h.sV, {
                refreshInterval: y,
                refreshWhenHidden: !0,
                fallbackData: void 0 === P ? {
                    cards: {
                        items: []
                    }
                } : P
            }), O = x.data, V = x.error, Q = x.isValidating;
            (0,
            d.useEffect)(function() {
                V && (0,
                p.vV)(V)
            }, [V]);
            var R = (0,
            l._)((0,
            d.useState)(O), 2)
              , K = R[0]
              , q = R[1]
              , H = (0,
            d.useMemo)(function() {
                return function(n, e) {
                    if (!(null == n ? void 0 : null === (t = n.cards) || void 0 === t ? void 0 : t.items) || !(null == e ? void 0 : null === (i = e.cards) || void 0 === i ? void 0 : i.items))
                        return {
                            newItems: new Map,
                            hasDeletedItems: !1,
                            countNewItems: 0
                        };
                    var t, i, o, r, u = new Map(null == n ? void 0 : null === (o = n.cards) || void 0 === o ? void 0 : o.items.map(function(n) {
                        return [n.id, n]
                    })), d = new Map(null == e ? void 0 : null === (r = e.cards) || void 0 === r ? void 0 : r.items.map(function(n) {
                        return [n.id, n]
                    })), c = (0,
                    a._)(u.entries()), s = c.findIndex(function(n) {
                        var e = (0,
                        l._)(n, 1)[0];
                        return d.has(e)
                    }), v = s >= 0, f = v ? new Map(c.slice(s)) : new Map, m = (0,
                    a._)(d.entries());
                    return {
                        newItems: new Map(v ? c.slice(0, s) : u),
                        hasDeletedItems: v && (0,
                        a._)(f.entries()).some(function(n, e) {
                            var t, i = (0,
                            l._)(n, 1)[0];
                            return (null === (t = m[e]) || void 0 === t ? void 0 : t[0]) !== i
                        }),
                        countNewItems: v ? s : u.size
                    }
                }(O, K)
            }, [O, K])
              , X = H.newItems
              , z = H.hasDeletedItems
              , B = H.countNewItems
              , U = (0,
            d.useCallback)(function() {
                q((0,
                u._)((0,
                r._)({}, O), {
                    cards: {
                        items: O.cards.items.map(function(n) {
                            return (0,
                            u._)((0,
                            r._)({}, n), {
                                newActiveItem: X.has(n.id)
                            })
                        })
                    }
                }))
            }, [O])
              , W = Array.isArray(null == K ? void 0 : null === (i = K.cards) || void 0 === i ? void 0 : i.items) && (null === (s = K.cards) || void 0 === s ? void 0 : s.items[(null === (o = K.cards) || void 0 === o ? void 0 : o.items.length) - 1])
              , j = null == W ? void 0 : null === (v = W.date) || void 0 === v ? void 0 : v.publishedAt
              , F = j ? (0,
            h.e6)({
                excludeCard: W.id,
                datePublished: j,
                queryLimit: Z,
                articleId: T
            }) : null
              , $ = (0,
            c.Ay)(F, h.sV, {
                refreshWhenHidden: !0,
                revalidateOnFocus: !1
            })
              , J = $.data
              , Y = $.isLoading
              , nn = $.error;
            (0,
            d.useEffect)(function() {
                nn && (0,
                p.vV)(nn)
            }, [nn]);
            var ne = (0,
            d.useCallback)(function() {
                var n, e;
                (null == J ? void 0 : null === (e = J.cards) || void 0 === e ? void 0 : null === (n = e.items) || void 0 === n ? void 0 : n.length) && q(function(n) {
                    var e, t;
                    return (0,
                    u._)((0,
                    r._)({}, n), {
                        cards: {
                            items: (0,
                            a._)(null == n ? void 0 : null === (e = n.cards) || void 0 === e ? void 0 : e.items).concat((0,
                            a._)(null == J ? void 0 : null === (t = J.cards) || void 0 === t ? void 0 : t.items))
                        }
                    })
                })
            }, [J]);
            return (0,
            d.useEffect)(function() {
                z && U()
            }, [z]),
            {
                latestItems: null == O ? void 0 : null === (f = O.cards) || void 0 === f ? void 0 : f.items,
                latestPublishedDate: null == O ? void 0 : null === (_ = O.cards) || void 0 === _ ? void 0 : null === (b = _.items) || void 0 === b ? void 0 : null === (w = b[0]) || void 0 === w ? void 0 : null === (m = w.date) || void 0 === m ? void 0 : m.publishedAt,
                isLatestValidating: Q,
                latestDataError: V,
                activeItems: (null == K ? void 0 : null === (A = K.cards) || void 0 === A ? void 0 : A.items) || [],
                activeLatestPublishedDate: null == K ? void 0 : null === (k = K.cards) || void 0 === k ? void 0 : null === (L = k.items) || void 0 === L ? void 0 : null === (E = L[0]) || void 0 === E ? void 0 : null === (I = E.date) || void 0 === I ? void 0 : I.publishedAt,
                makeLatestActive: U,
                hasDeletedItems: z,
                countNewItems: B,
                newItems: X,
                loadMoreCards: ne,
                loadMoreError: nn,
                isMoreCardsAvailable: !!(null == J ? void 0 : null === (M = J.cards) || void 0 === M ? void 0 : null === (D = M.items) || void 0 === D ? void 0 : D.length),
                isFetchingMoreCardsToLoad: Y
            }
        }
    }
    ,
    21596: (n, e, t) => {
        t.d(e, {
            D: () => c
        });
        var i = t(48915)
          , o = t(76697)
          , r = t(89903)
          , u = t(96491)
          , l = t(65071)
          , a = t(78804)
          , d = t(87663);
        function c(n) {
            var e = (0,
            d.hZ)(function(n) {
                return n.showGate
            })
              , t = (0,
            a.yI)()
              , c = (0,
            i.C)().vertical
              , s = (0,
            o.a)().isUsa
              , v = (0,
            r.B0)(u.GATED_CONTENT, c)
              , f = function(n) {
                if ((null == n ? void 0 : n.type) === "recipe")
                    return !n.ecommerceEnabled;
                var e = n.taxonomy
                  , t = (void 0 === e ? {} : e).additionalTerms;
                return !!(null == t ? void 0 : t.find(function(n) {
                    return "gated-content" === n.slug
                }))
            }(n)
              , m = (0,
            a.Wk)() ? !e : t === l.K_;
            return !v || !f || m && s
        }
    }
    ,
    21737: (n, e, t) => {
        t.d(e, {
            D2: () => w,
            Cj: () => l,
            sq: () => d,
            DT: () => m.D,
            aL: () => f.a,
            ZC: () => a.Z,
            z1: () => v,
            Cn: () => c.C
        });
        var i = t(20294)
          , o = t(14232)
          , r = t(26269)
          , u = t.n(r);
        function l() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 800
              , e = (0,
            i._)((0,
            o.useState)(!1), 2)
              , t = e[0]
              , r = e[1]
              , l = (0,
            o.useCallback)(function(n) {
                "string" == typeof n || "number" == typeof n ? (u()(n.toString()),
                r(!0)) : r(!1)
            }, []);
            return (0,
            o.useEffect)(function() {
                var e;
                return t && n && (e = setTimeout(function() {
                    return r(!1)
                }, n)),
                function() {
                    clearTimeout(e)
                }
            }, [t, n]),
            [t, l]
        }
        t(60366);
        var a = t(63620)
          , d = function(n, e) {
            var t = (0,
            o.useRef)(!0);
            (0,
            o.useEffect)(function() {
                if (t.current) {
                    t.current = !1;
                    return
                }
                n()
            }, e)
        }
          , c = t(48915)
          , s = t(51845);
        function v(n) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                allowDuplicate: !0
            };
            return (0,
            o.useEffect)(function() {
                (0,
                s.stub)("register", n, e)
            }, [n, e]),
            function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0,
                s.stub)("track", n, e)
            }
        }
        var f = t(76697)
          , m = t(21596)
          , h = t(81481);
        h.A.getSmallMQL,
        h.A.getMediumMQL,
        h.A.getLargeMQL,
        h.A.getXLargeMQL,
        h.A.getXXLargeMQL,
        h.A.getXXXLargeMQL,
        t(9626);
        var p = ["[tabindex]:not([tabindex='-1'])", "a[href]", "button", "details", "input:not([type='hidden'])", "select", "textarea"].map(function(n) {
            return "".concat(n, ":not([disabled])")
        }).join(", ");
        function g(n) {
            return Array.from(n.querySelectorAll(p)).filter(function(n) {
                return n.offsetParent
            })
        }
        function w(n, e, t) {
            var r = (0,
            o.useRef)([])
              , u = (0,
            i._)((0,
            o.useState)(null), 2)
              , l = u[0]
              , a = u[1];
            function d(e, t, i) {
                return function(o) {
                    ("open" === e ? n : !n) && t.includes(o.key) && (o.preventDefault(),
                    a("keydown"),
                    i({
                        up: "ArrowUp" === o.key,
                        down: "ArrowDown" === o.key,
                        tab: "Tab" === o.key,
                        space: " " === o.key,
                        escape: "Escape" === o.key,
                        isHoldingShift: o.shiftKey
                    }))
                }
            }
            function c(n, e) {
                var t = g(document)
                  , i = r.current[n]
                  , o = t.indexOf(i)
                  , u = t[o + e];
                null == u || u.focus()
            }
            return (0,
            o.useEffect)(function() {
                if ((null == e ? void 0 : e.current) && n && (r.current = g(e.current),
                "keydown" === l)) {
                    var t;
                    null === (t = r.current[0]) || void 0 === t || t.focus()
                }
            }, [n]),
            {
                button: {
                    onClick: function() {
                        t(),
                        a("click")
                    },
                    onKeyDown: d("closed", ["ArrowDown", " ", "Enter"], t)
                },
                content: {
                    onKeyDown: d("open", ["ArrowDown", "ArrowUp", "Tab", " ", "Escape"], function(n) {
                        var e, i = n.up, o = n.down, u = n.tab, l = n.space, a = n.escape, d = n.isHoldingShift, s = r.current, v = s.indexOf(document.activeElement);
                        if (i || o) {
                            var f, m = o ? 0 : s.length - 1, h = null !== (f = s[v + (o ? 1 : -1)]) && void 0 !== f ? f : s[m];
                            null == h || h.focus()
                        }
                        l && (null === (e = s[v]) || void 0 === e || e.click()),
                        u && (t(),
                        d ? c(0, -1) : c(s.length - 1, 1)),
                        a && (t(),
                        c(0, -1))
                    })
                }
            }
        }
    }
    ,
    43914: (n, e, t) => {
        t.d(e, {
            A: () => a
        });
        var i = t(20294)
          , o = t(37876);
        t(14232);
        var r = t(39324)
          , u = t.n(r)
          , l = {
            woff: "woff",
            woff2: "woff2"
        };
        let a = function() {
            var n = u()().publicRuntimeConfig.iconfontAssetPaths
              , e = (void 0 === n ? [] : n).map(function(n) {
                var e = (0,
                i._)(/\.(\w+)$/.exec(n) || [], 2)[1]
                  , t = "url(".concat(n, ")")
                  , o = e ? ' format("'.concat(l[e], '")') : "";
                return "".concat(t).concat(o)
            }).join(", ");
            return e ? (0,
            o.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n    @font-face {\n      font-family: iconfont;\n      src: ".concat(e, ";\n      font-display: swap;\n    }\n").replace(/\s/g, "")
                }
            }) : null
        }
    }
    ,
    60366: (n, e, t) => {
        t.d(e, {
            s: () => o
        });
        var i = t(14232)
          , o = function(n, e, t) {
            var o = (0,
            i.useCallback)(n, t);
            (0,
            i.useEffect)(function() {
                var n = setTimeout(function() {
                    o()
                }, e);
                return function() {
                    clearTimeout(n)
                }
            }, [o, e])
        }
    }
    ,
    63620: (n, e, t) => {
        t.d(e, {
            Z: () => o
        });
        var i = t(14232);
        function o(n) {
            var e = (0,
            i.useRef)();
            return (0,
            i.useEffect)(function() {
                e.current = n
            }),
            e.current
        }
    }
    ,
    76697: (n, e, t) => {
        t.d(e, {
            a: () => u
        });
        var i = t(20294)
          , o = t(8345)
          , r = t(65071);
        function u() {
            var n = (0,
            i._)((0,
            o.A)([r.mQ]), 1)[0][r.mQ];
            return {
                geoLocation: n,
                isUsa: n === r.Iz
            }
        }
    }
    ,
    78804: (n, e, t) => {
        t.d(e, {
            $2: () => c,
            Be: () => f,
            NE: () => v,
            O4: () => s,
            Vx: () => h,
            Wk: () => a,
            YK: () => m,
            dN: () => p,
            yI: () => d
        });
        var i = t(87663)
          , o = t(96491)
          , r = t(89903)
          , u = t(48915)
          , l = t(98570);
        function a() {
            var n = (0,
            u.C)().vertical
              , e = (0,
            l.J)()
              , t = (0,
            r.B0)(o.MYNEWS_ENABLED, n, e);
            return (null == t ? void 0 : t.accountType) === "bedrock"
        }
        function d() {
            return a() ? (0,
            i.hZ)(function(n) {
                return n.authenticationState
            }) : (0,
            i.GP)(function(n) {
                return n.authenticationState
            })
        }
        function c() {
            return a() ? (0,
            i.hZ)(function(n) {
                return n.setAuthenticationModal
            }) : (0,
            i.GP)(function(n) {
                return n.authenticate
            })
        }
        function s() {
            return a() ? (0,
            i.hZ)(function(n) {
                var e;
                return null === (e = n.user) || void 0 === e ? void 0 : e.first_name
            }) : (0,
            i.GP)(function(n) {
                var e;
                return null === (e = n.user) || void 0 === e ? void 0 : e.givenName
            })
        }
        function v() {
            return a() ? (0,
            i.hZ)(function(n) {
                return n.loading
            }) : (0,
            i.GP)(function(n) {
                return n.loading
            })
        }
        function f() {
            var n, e, t, o;
            return a() ? (0,
            i.hZ)(function(n) {
                return n.userSignout
            }) : null !== (o = null === (t = window) || void 0 === t ? void 0 : null === (e = t.HFSapi) || void 0 === e ? void 0 : null === (n = e.identity) || void 0 === n ? void 0 : n.unauthenticate) && void 0 !== o ? o : function() {}
        }
        function m() {
            return a() ? (0,
            i.hZ)(function(n) {
                var e;
                return null === (e = n.user) || void 0 === e ? void 0 : e.user_id
            }) : (0,
            i.GP)(function(n) {
                var e;
                return null === (e = n.customer) || void 0 === e ? void 0 : e.customerId
            })
        }
        function h() {
            return a() ? (0,
            i.hZ)(function(n) {
                var e;
                return null === (e = n.user) || void 0 === e ? void 0 : e.zipcode
            }) : (0,
            i.GP)(function(n) {
                var e;
                return null === (e = n.customer) || void 0 === e ? void 0 : e.zipCode
            })
        }
        function p() {
            return a() ? (0,
            i.hZ)(function(n) {
                return n.updateUserProfile
            }) : (0,
            i.GP)(function(n) {
                return n.saveCustomer
            })
        }
    }
}]);
