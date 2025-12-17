(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9587], {
    34223: (e, t, n) => {
        "use strict";
        n.d(t, {
            t: () => d
        });
        var i = n(89688)
          , s = n(3711)
          , a = n(92938)
          , o = n(63321)
          , r = n(14232)
          , c = n(95062)
          , l = n.n(c)
          , d = function(e) {
            function t(e) {
                var n;
                return (0,
                s._)(this, t),
                (n = (0,
                i._)(this, t, [e])).state = {
                    hasError: !1
                },
                n
            }
            return (0,
            o._)(t, e),
            (0,
            a._)(t, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    var n, i = this.props, s = i.children, a = i.errorLogger, o = null == s ? void 0 : null === (n = s.type) || void 0 === n ? void 0 : n.displayName;
                    "undefined" != typeof console && "function" == typeof console.error && console.error("error in component: ".concat(o), e, t),
                    a && a(e, t),
                    this.setState({
                        hasError: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.hasError
                      , t = this.props
                      , n = t.children
                      , i = t.errorHandler;
                    return e ? i && i() || null : n
                }
            }]),
            t
        }(r.Component);
        d.propTypes = {
            children: l().node.isRequired,
            errorHandler: l().func,
            errorLogger: l().func
        },
        d.defaultProps = {
            errorHandler: null,
            errorLogger: null
        }
    }
    ,
    47668: e => {
        e.exports = {
            save: "styles_save__rvKhN",
            button: "styles_button__UrRif",
            icon: "styles_icon__Yg7X_",
            iconSave: "styles_iconSave__nyFwq",
            iconSaveAlt: "styles_iconSaveAlt__COr0X",
            iconSaveHover: "styles_iconSaveHover__HMZb2",
            iconBookmark: "styles_iconBookmark__ECLvG",
            navbarPlacement: "styles_navbarPlacement__EyEdm",
            text: "styles_text__00e5b",
            tooltip: "styles_tooltip__Gotkt",
            isSaved: "styles_isSaved__S4yTX",
            isAuthenticated: "styles_isAuthenticated__tpNJI",
            isInitialized: "styles_isInitialized___2z1K",
            isThumbnail: "styles_isThumbnail__D4Omh",
            "offset-s": "styles_offset-s__TXe50",
            "offset-s-only": "styles_offset-s-only__poCJI",
            "offset-m": "styles_offset-m__vtynE",
            isTitle: "styles_isTitle__jNNeh",
            disableHover: "styles_disableHover__gjE8w",
            ctaWrapper: "styles_ctaWrapper___3NKp",
            "live-dot-blink": "styles_live-dot-blink__Xivi8",
            "fade-in": "styles_fade-in__NOelM",
            "expand-in": "styles_expand-in__9K4MW",
            "chatblog-expand-in": "styles_chatblog-expand-in__2Kn4P"
        }
    }
    ,
    67672: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjgyNzEgMTEuMTkxOEwzLjAwMDAzIDE3LjQ5ODVWMUgxN1YxNy41NjU4TDEwLjcwMjQgMTEuMTk0NUw5Ljk5MzkzIDEwLjQ3NzhMOS4yODI3MSAxMS4xOTE4WiIgZmlsbD0iIzdDNEU5RiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzdDNEU5RiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgogICAg"
    }
    ,
    69995: (e, t, n) => {
        "use strict";
        n.d(t, {
            T: () => l,
            z: () => d
        });
        var i = n(29540)
          , s = n(87992)
          , a = n(48915)
          , o = n(89903)
          , r = n(96491)
          , c = n(66342);
        function l() {
            var e = (0,
            s.Jp)()
              , t = (0,
            i.hZ)(function(e) {
                return e.subscriptions
            })
              , n = (0,
            a.C)().vertical;
            return !!(((null == e ? void 0 : e["nbc-news-subscriptions"]) || c.cp) && ((null == t ? void 0 : t.nbcNews) || c.cp) && "news" === n)
        }
        function d() {
            var e = (0,
            s.Jp)()
              , t = (0,
            a.C)().vertical
              , n = (0,
            i.hZ)(function(e) {
                return e.subscriptions
            });
            return !!((0,
            o.B0)(r.HIDE_TABOOLA_ADS, t) && ((null == e ? void 0 : e["nbc-news-subscriptions"]) || c.cp) && !(null == e ? void 0 : e["show-taboola-for-subscribers"]) && ((null == n ? void 0 : n.nbcNews) || c.cp) && "news" === t)
        }
    }
    ,
    70723: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNi43NTA1NEMwIDExLjE1OSAzLjU5NTE3IDE1LjQ5NTEgOS4yNzQ5NCAxOS4yMjA2QzkuNDg2NDIgMTkuMzU1MSA5Ljc4ODU0IDE5LjUgMTAgMTkuNUMxMC4yMTE1IDE5LjUgMTAuNTEzNiAxOS4zNTUxIDEwLjczNTIgMTkuMjIwNkMxNi40MDQ5IDE1LjQ5NTEgMjAgMTEuMTU5IDIwIDYuNzUwNTRDMjAgMy4wODcxNSAxNy41NTI5IDAuNSAxNC4yOSAwLjVDMTIuNDI3IDAuNSAxMC45MTY0IDEuNDEwNjggMTAgMi44MDc3NEM5LjEwMzc0IDEuNDIxMDIgNy41NzMwMiAwLjUgNS43MDk5OCAwLjVDMi40NDcxNCAwLjUgMCAzLjA4NzE1IDAgNi43NTA1NFoiIGZpbGw9IiM3QzRFOUYiLz4KPHBhdGggZD0iTTIuMjA0NjUgNy4wMTUyN0MyLjIwNDY1IDQuNDU0MTggMy44MTYxOSAyLjc1IDUuOTg5OSAyLjc1QzcuNzUxMzUgMi43NSA4Ljc2MzI0IDMuODc2NSA5LjM2Mjg5IDQuODM5MzFDOS42MTU4NyA1LjIyNDQzIDkuNzc1MTQgNS4zMzAzNCA5Ljk5OTk5IDUuMzMwMzRDMTAuMjI0OSA1LjMzMDM0IDEwLjM2NTQgNS4yMTQ4MSAxMC42MzcxIDQuODM5MzFDMTEuMjgzNiAzLjg5NTc1IDEyLjI1OCAyLjc1IDE0LjAxMDEgMi43NUMxNi4xODM5IDIuNzUgMTcuNzk1NCA0LjQ1NDE4IDE3Ljc5NTQgNy4wMTUyN0MxNy43OTU0IDEwLjU5NyAxNC4xMTMyIDE0LjQ1NzggMTAuMTk2OCAxNy4xMzQ0QzEwLjEwMzEgMTcuMjAxOSAxMC4wMzc1IDE3LjI1IDkuOTk5OTkgMTcuMjVDOS45NjI1MyAxNy4yNSA5Ljg5Njk1IDE3LjIwMTkgOS44MTI2MiAxNy4xMzQ0QzUuODg2ODQgMTQuNDU3OCAyLjIwNDY1IDEwLjU5NyAyLjIwNDY1IDcuMDE1MjdaIiBmaWxsPSIjRDhDQUUyIi8+Cjwvc3ZnPgo="
    }
    ,
    81896: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjQyNzkgMTEuNjg4OUw5Ljk5MTcxIDExLjI2NzdMOS41NTM4OCAxMS42ODcyTDIuNTA1NDMgMTguNDM5N1YwLjYzMDQzNUgxNy40OTQ2VjE4LjUxMTlMMTAuNDI3OSAxMS42ODg5WiIgZmlsbD0iIzdDNEU5RiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzdDNEU5RiIgc3Ryb2tlLXdpZHRoPSIxLjI2MDg3Ii8+Cjwvc3ZnPgo="
    }
    ,
    90479: e => {
        e.exports = {
            container: "globalContainerStyles_container__4sqP_",
            XPNV_header_wrapper: "globalContainerStyles_XPNV_header_wrapper__3n4EH",
            "live-dot-blink": "globalContainerStyles_live-dot-blink__Di5YY",
            "fade-in": "globalContainerStyles_fade-in__5LTC6",
            "expand-in": "globalContainerStyles_expand-in__Py08d",
            "chatblog-expand-in": "globalContainerStyles_chatblog-expand-in__6bsZB"
        }
    }
    ,
    92486: e => {
        e.exports = {
            saveCTAContainer: "styles_saveCTAContainer___ztEC",
            animate: "styles_animate__yOCJX",
            slide: "styles_slide__tSKA7",
            offset: "styles_offset__WHEtY",
            message: "styles_message__cfQ3M",
            "live-dot-blink": "styles_live-dot-blink__KtlKe",
            "fade-in": "styles_fade-in__4h8KH",
            "expand-in": "styles_expand-in__xyZwJ",
            "chatblog-expand-in": "styles_chatblog-expand-in__cdWV5"
        }
    }
    ,
    94844: (e, t, n) => {
        "use strict";
        n.d(t, {
            e: () => B
        });
        var i = n(16927)
          , s = n(45526)
          , a = n(67684)
          , o = n(62701)
          , r = n(20294)
          , c = n(4902)
          , l = n(37876)
          , d = n(14232)
          , u = n(40625)
          , v = n(95062)
          , _ = n.n(v)
          , M = n(48011)
          , p = n(15039)
          , N = n.n(p)
          , y = n(21737)
          , g = n(89903)
          , h = n(78804)
          , b = n(87663)
          , I = n(96491)
          , j = n(65071)
          , T = n(97247)
          , f = n(92486)
          , D = n.n(f);
        function m(e) {
            var t = e.contentId
              , n = e.contentType
              , i = e.animateCTA
              , s = e.offset
              , a = (0,
            y.aL)().isUsa
              , o = (0,
            M.d4)(function(e) {
                return e.shared
            }).isChromeless
              , r = (0,
            j.Fo)(n)
              , c = (0,
            l.jsxs)(T.A, {
                to: r,
                "data-testid": "savedCTA__link",
                stopPropagation: "video" === n,
                children: ["Go to", "product" === n ? " Wishlist" : " Saved"]
            });
            return !o && a && t ? (0,
            l.jsx)("div", {
                className: N()(D().saveCTAContainer, void 0 !== i && i ? D().animate : "", void 0 !== s && s ? D().offset : ""),
                "data-testid": "savedCTA",
                children: (0,
                l.jsx)("div", {
                    className: D().message,
                    "data-testid": "savedCTA__message",
                    children: c
                })
            }) : null
        }
        m.propTypes = {
            contentId: _().string.isRequired,
            contentType: _().oneOf([j.fj, j.G_, j.bc, j.Ax]).isRequired,
            animateCTA: _().bool,
            offset: _().bool
        };
        var A = function(e) {
            var t = e.condition
              , n = e.wrapper
              , i = e.children;
            return t ? n(i) : i
        };
        A.propTypes = {
            children: _().oneOfType([_().object, _().string])
        };
        var x = n(47668)
          , k = n.n(x)
          , C = n(81896)
          , S = n.n(C)
          , E = n(67672)
          , w = n.n(E)
          , L = n(70723)
          , z = n.n(L)
          , O = n(87992)
          , U = {
            display: "inline-block",
            position: "absolute",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            height: 1,
            width: 1,
            margin: -1,
            padding: 0,
            border: 0
        };
        function Z(e) {
            var t = e.handleClick
              , n = (0,
            y.Cn)()
              , i = n.isToday
              , a = n.isNews;
            return (0,
            l.jsxs)("button", {
                "data-testid": "save-button",
                type: "button",
                className: k().button,
                onClick: function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t()
                },
                children: [(0,
                l.jsx)("span", {
                    className: N()("icon", k().icon, k().iconSave, (0,
                    s._)({
                        "icon-save-filled": i,
                        "icon-bookmark": a
                    }, k().iconBookmark, a)),
                    "aria-hidden": !0
                }), (0,
                l.jsx)("img", {
                    className: N()("icon", k().icon, k().iconSaveHover, k().iconRibbon),
                    src: w(),
                    alt: "Save hover state",
                    "data-testid": "icon-save-border-thick",
                    "aria-hidden": !0
                }), (0,
                l.jsx)("span", {
                    className: N()("icon", k().icon, k().iconSaveAlt, (0,
                    s._)({
                        "icon-save-thick": i,
                        "icon-bookmark-filled": a
                    }, k().iconBookmark, a)),
                    "data-testid": "icon-save-thick",
                    "aria-hidden": !0
                })]
            })
        }
        function P(e) {
            var t = e.handleClick;
            return (0,
            l.jsxs)("button", {
                "data-testid": "save-button",
                type: "button",
                className: k().button,
                onClick: function(e) {
                    e.preventDefault(),
                    t()
                },
                children: [(0,
                l.jsx)("span", {
                    className: N()("icon", "icon-heart-filled", k().icon, k().iconSave)
                }), (0,
                l.jsx)("img", {
                    className: N()(k().icon, k().iconSaveHover, k().iconHeart),
                    src: z(),
                    alt: "Save hover state",
                    "data-testid": "icon-heart"
                }), (0,
                l.jsx)("span", {
                    className: N()("icon", "icon-heart-thick", k().icon, k().iconSaveAlt),
                    "data-testid": "icon-save-thick"
                })]
            })
        }
        function H(e) {
            var t = e.handleClick
              , n = e.isItemBookmarked
              , i = e.navbarPlacement
              , a = void 0 !== i && i
              , o = e.hiddenText
              , r = void 0 === o ? "" : o
              , c = e.contentType
              , d = (0,
            O.Jp)()["nbc-news-bedrock"]
              , u = (0,
            j.Fo)(c);
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)("button", {
                    "data-testid": "save-button",
                    type: "button",
                    className: k().button,
                    onClick: t,
                    "aria-pressed": n,
                    children: [(0,
                    l.jsx)("span", {
                        className: N()("icon", "icon-save-filled", k().icon, k().iconSave, (0,
                        s._)({}, k().navbarPlacement, a))
                    }), (0,
                    l.jsx)("img", {
                        "data-testid": "icon-ribbon",
                        className: N()("icon", k().icon, k().iconSaveHover, k().iconRibbon, (0,
                        s._)({}, k().navbarPlacement, a)),
                        src: S(),
                        alt: "Save hover state",
                        "aria-hidden": !0
                    }), (0,
                    l.jsx)("span", {
                        className: N()("icon", "icon-save", k().icon, k().iconSaveAlt, (0,
                        s._)({}, k().navbarPlacement, a)),
                        "aria-hidden": !0
                    }), n || a ? null : (0,
                    l.jsxs)("span", {
                        className: k().text,
                        "data-testid": "nbc-save-button-text-save",
                        children: ["Save", !!r.length && (0,
                        l.jsx)("span", {
                            style: U,
                            "data-testid": "hidden-text",
                            children: r
                        })]
                    })]
                }), n && !a ? (0,
                l.jsxs)("span", {
                    className: k().text,
                    "data-testid": "nbc-save-button-text-goto",
                    children: ["Go to ", (0,
                    l.jsx)("a", {
                        className: "share__saved-link",
                        href: d ? u : "/my-news#activity",
                        "data-testid": "nbc-save-button-link",
                        children: "Saved"
                    })]
                }) : null]
            })
        }
        Z.propTypes = {
            handleClick: _().func.isRequired
        },
        P.propTypes = {
            handleClick: _().func.isRequired
        },
        H.propTypes = {
            handleClick: _().func.isRequired,
            isItemBookmarked: _().bool.isRequired,
            navbarPlacement: _().bool,
            hiddenText: _().string,
            contentType: _().oneOf([j.fj, j.G_]).isRequired
        };
        var R = {
            article: j.fj,
            video: j.G_,
            recipe: j.bc,
            relatedRecipe: j.bc,
            product: j.Ax,
            liveBlog: j.fj
        }
          , B = function(e) {
            var t, n, v, _, p, T = e.contentId, f = e.contentType, D = e.additionalClasses, x = e.navbarPlacement, C = e.options, S = void 0 === C ? {} : C, E = e.callbacks, w = (0,
            h.yI)(), L = (0,
            b.GP)(function(e) {
                return e.createBookmark
            }), z = (0,
            b.GP)(function(e) {
                return e.deleteBookmark
            }), O = (0,
            b.GP)(function(e) {
                return e.isContentBookmarked
            }), U = (0,
            b.GP)(function(e) {
                return e.bookmarks[T]
            }), B = (0,
            h.YK)(), Q = (0,
            h.$2)(), G = S.isThumbnail, W = S.isTitle, Y = S.offset, K = void 0 === Y ? null : Y, X = S.setAsSaved, q = S.pageRegion, F = void 0 === q ? "" : q, J = S.showCTA, V = S.useAccountSaveButtonStyle, $ = null != X ? X : U, ee = (0,
            r._)((0,
            d.useState)(!1), 2), et = ee[0], en = ee[1], ei = (0,
            r._)((0,
            d.useState)(!1), 2), es = ei[0], ea = ei[1], eo = (0,
            r._)((0,
            u.Wx)({
                triggerOnce: !0,
                threshold: 0
            }), 2), er = eo[0], ec = eo[1], el = (0,
            y.Cn)().vertical, ed = !!(0,
            g.B0)(I.MYNEWS_ENABLED, el), eu = void 0 !== V && V ? null === (v = (0,
            g.B0)(I.MYNEWS_ENABLED, el)) || void 0 === v ? void 0 : v.accountSaveButtonStyle : null === (_ = (0,
            g.B0)(I.MYNEWS_ENABLED, el)) || void 0 === _ ? void 0 : _.saveButtonStyle, ev = (0,
            M.d4)(function(e) {
                return e.shared
            }).isChromeless, e_ = "video" === f, eM = (0,
            y.z1)("mbt_mynews_save_click"), ep = (0,
            d.useRef)(null), eN = (0,
            d.useRef)(!1), ey = (0,
            y.aL)().isUsa, eg = w === j.K_, eh = w === j.zZ, eb = eg || eh || w === j.tg, eI = !ev && ey && T && ed, ej = function(e) {
                eM({
                    action: e,
                    placement: "share bar",
                    contentId: T
                })
            }, eT = (null == F ? void 0 : F.includes("top")) ? {
                "data-activity-map": "social-share-links-".concat(f, "-top")
            } : {}, ef = (t = (0,
            i._)(function() {
                return (0,
                c.__generator)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return ea(!0),
                        setTimeout(function() {
                            ea(!1)
                        }, 5e3),
                        (null == E ? void 0 : E.save) && E.save(),
                        [4, L({
                            contentId: T,
                            contentType: R[f],
                            customerId: B
                        })];
                    case 1:
                        return e.sent(),
                        ej("saved"),
                        [2]
                    }
                })
            }),
            function() {
                return t.apply(this, arguments)
            }
            ), eD = function() {
                eN.current = !0,
                Q(),
                ej("login")
            }, em = (n = (0,
            i._)(function() {
                return (0,
                c.__generator)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return (null == E ? void 0 : E.remove) && E.remove(),
                        [4, z({
                            contentId: T,
                            customerId: B
                        })];
                    case 1:
                        return e.sent(),
                        ej("remove"),
                        [2]
                    }
                })
            }),
            function() {
                return n.apply(this, arguments)
            }
            ), eA = function() {
                return eb ? w === j.zZ ? eD() : (clearTimeout(ep.current),
                en(!0),
                ep.current = setTimeout(function() {
                    return en(!1)
                }, 2e3),
                $) ? em() : ef() : null
            };
            if ((0,
            d.useEffect)(function() {
                T && ec && eg && window.HFSapi.identity && !X && O({
                    contentId: T,
                    customerId: B
                })
            }, [ec, T, w]),
            (0,
            d.useEffect)(function() {
                eN.current && eg && (eN.current = !1,
                U || ef())
            }, [U]),
            !R[f] || !eI)
                return null;
            var ex = f === R.product ? P : Z
              , ek = es && void 0 !== J && J
              , eC = null !== K;
            return (0,
            l.jsx)(A, {
                condition: ek,
                wrapper: function(e) {
                    return (0,
                    l.jsxs)("div", {
                        className: k().ctaWrapper,
                        children: [e, ek && (0,
                        l.jsx)(m, {
                            contentId: T,
                            contentType: R[f],
                            animateCTA: !0,
                            offset: eC
                        })]
                    })
                },
                children: (0,
                l.jsx)("div", (0,
                o._)((0,
                a._)({
                    "data-testid": "save-button-container"
                }, eT), {
                    className: N()(k().save, void 0 === D ? "" : D, "save-button-container", (p = {},
                    (0,
                    s._)(p, k().isSaved, $),
                    (0,
                    s._)(p, k().isAuthenticated, eg),
                    (0,
                    s._)(p, k().isInitialized, eb),
                    (0,
                    s._)(p, k().disableHover, et),
                    (0,
                    s._)(p, k().isThumbnail, void 0 !== G && G),
                    (0,
                    s._)(p, k().isTitle, void 0 !== W && W),
                    (0,
                    s._)(p, k()["offset-".concat(K)], K),
                    p)),
                    ref: er,
                    children: "withText" === eu ? (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsx)(H, {
                            handleClick: eA,
                            isItemBookmarked: $,
                            navbarPlacement: void 0 !== x && x,
                            hiddenText: "with a NBCUniversal Profile",
                            contentType: R[f]
                        }), (0,
                        l.jsx)("div", {
                            className: k().tooltip,
                            children: (0,
                            l.jsx)("span", {
                                children: {
                                    unauthenticated: e_ ? "Create your free profile or log in to save this video" : "Create your free profile or log in to save this article",
                                    authenticated: e_ ? "Save this video to watch later" : "Save this article to read later"
                                }[eg ? "authenticated" : "unauthenticated"]
                            })
                        })]
                    }) : (0,
                    l.jsx)(ex, {
                        handleClick: eA
                    })
                }))
            })
        };
        B.propTypes = {
            contentId: _().string.isRequired,
            navbarPlacement: _().bool,
            contentType: _().oneOf(Object.keys(R)).isRequired,
            additionalClasses: _().string,
            options: _().shape({
                isThumbnail: _().bool,
                isTitle: _().bool,
                offset: _().oneOf(["s-only", "s", "m"]),
                setAsSaved: _().bool,
                pageRegion: _().string,
                showCTA: _().bool
            }),
            callbacks: _().shape({
                remove: _().func,
                save: _().func
            })
        }
    }
}]);
