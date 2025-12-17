(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7388], {
    301: (e, M, i) => {
        "use strict";
        i.d(M, {
            L: () => t
        });
        var t = function(e) {
            return e.replace(/https?:\/\/[^/]+|\?.+$/g, "")
        }
    }
    ,
    7492: () => {}
    ,
    7535: () => {}
    ,
    17667: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB2aWV3Qm94PSIwIDAgMTc5LjcyIDE3OS43MiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2IzYjRiODsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxNzkuNzIiIHkyPSIxNzkuNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTdlOGU4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2NhY2NjZSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj4KICAgIDxnPgogICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIxNzkuNzIiIGhlaWdodD0iMTc5LjcyIi8+CiAgICAgIDxnPgogICAgICAgIDxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iODkuODYiIGN5PSI2Ny4zIiByPSI0MC44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxLjI3IDgzLjI1KSByb3RhdGUoLTQ1KSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTE1MS40MSwxNjEuMjRjMC0yNC40NS0xNy4zMS00NS4wNC00MC4yOC01MC4xNC02LjQyLDMuMTYtMTMuNjQsNC45NC0yMS4yNyw0Ljk0cy0xNC44NS0xLjc4LTIxLjI3LTQuOTRjLTIyLjk3LDUuMS00MC4yOCwyNS42OS00MC4yOCw1MC4xNHYxNC4yYzAsMS40NC4wNiwyLjg3LjE4LDQuMjloMTIyLjc0Yy4xMi0xLjQxLjE4LTIuODQuMTgtNC4yOXYtMTQuMloiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+"
    }
    ,
    18025: (e, M, i) => {
        "use strict";
        var t = i(25037)
          , o = i(5902)
          , n = i(96491);
        e.exports = function(e) {
            return "es" === n.DEFAULT_LANGUAGE[e] ? t : o
        }
    }
    ,
    20268: (e, M, i) => {
        "use strict";
        i.d(M, {
            A: () => j
        });
        var t = i(16927)
          , o = i(67684)
          , n = i(4902)
          , s = i(37876)
          , r = i(14232)
          , N = i(21737)
          , l = i(78804)
          , a = i(87663)
          , c = i(65071)
          , d = i(61702)
          , j = function(e) {
            var M = function(M) {
                var i, d, j = M.article, D = M.recipe, g = M.video;
                return j && (i = j.id,
                d = c.fj),
                D && (i = D.id,
                d = c.bc),
                g && (i = g.id,
                d = c.G_),
                !function(e) {
                    var M = e.contentId
                      , i = e.contentType
                      , o = (0,
                    l.yI)()
                      , s = (0,
                    l.$2)()
                      , d = (0,
                    a.GP)(function(e) {
                        return e.createBookmark
                    })
                      , j = (0,
                    l.Wk)()
                      , D = (0,
                    l.YK)()
                      , g = (0,
                    N.z1)("mbt_mynews_save_click");
                    function u() {
                        return (u = (0,
                        t._)(function() {
                            return (0,
                            n.__generator)(this, function(e) {
                                return d({
                                    contentId: M,
                                    contentType: i,
                                    customerId: D
                                }),
                                g({
                                    action: "Saved",
                                    placement: "URL param link",
                                    contentId: M
                                }),
                                [2]
                            })
                        })).apply(this, arguments)
                    }
                    r.useEffect(function() {
                        if (o === c.K_ || o === c.zZ) {
                            var e, i, t = new URLSearchParams(null === (i = window) || void 0 === i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.search).get("account");
                            t && ("save" === t.toLowerCase() && o === c.K_ && function() {
                                u.apply(this, arguments)
                            }(),
                            ("save" === t.toLowerCase() || j) && o === c.zZ && (s(),
                            g({
                                action: "Login from URL param link",
                                placement: "URL param link",
                                contentId: M
                            })))
                        }
                    }, [o])
                }({
                    contentId: i,
                    contentType: d
                }),
                (0,
                s.jsx)(e, (0,
                o._)({}, M))
            };
            return e.getInitialProps && (M.getInitialProps = e.getInitialProps),
            M.propTypes = {
                article: d.jZ,
                recipe: d.D4,
                video: d.Ki
            },
            M
        }
    }
    ,
    23584: (e, M, i) => {
        "use strict";
        i.d(M, {
            A: () => l
        });
        var t = i(67684)
          , o = i(20294)
          , n = i(37876)
          , s = i(14232)
          , r = i(48148)
          , N = i(51845);
        (0,
        N.stub)("register", ["mbt_scrolled_percentage"], {
            allowDuplicate: !0
        });
        let l = function(e) {
            var M = e.contentType
              , i = e.contentUrl
              , l = e.children
              , a = (0,
            o._)((0,
            s.useState)({}), 2)[1]
              , c = (0,
            s.useRef)(null)
              , d = (0,
            s.useCallback)(function() {
                if (c.current) {
                    var e = c.current.getBoundingClientRect()
                      , o = e.top
                      , n = Math.abs(o) / (Math.abs(o) + e.bottom) * 100;
                    a(function(e) {
                        var o = e.scrolled_25
                          , s = e.scrolled_50
                          , r = e.scrolled_75;
                        if (n > 100 && o && s && r)
                            return e;
                        var l = (0,
                        t._)({}, e)
                          , a = !1;
                        return !e.scrolled_25 && n >= 25 && ((0,
                        N.stub)("track", "mbt_scrolled_percentage", {
                            type: M,
                            url: i,
                            percent: 25
                        }),
                        l.scrolled_25 = !0,
                        a = !0),
                        !e.scrolled_50 && n >= 50 && ((0,
                        N.stub)("track", "mbt_scrolled_percentage", {
                            type: M,
                            url: i,
                            percent: 50
                        }),
                        l.scrolled_50 = !0,
                        a = !0),
                        !e.scrolled_75 && n >= 75 && ((0,
                        N.stub)("track", "mbt_scrolled_percentage", {
                            type: M,
                            url: i,
                            percent: 75
                        }),
                        l.scrolled_75 = !0,
                        a = !0),
                        a ? l : e
                    })
                }
            }, [M, i]);
            return (0,
            s.useEffect)(function() {
                return r.A.on("scroll", d, "throttle"),
                function() {
                    r.A.remove("scroll", d, "throttle")
                }
            }, [d]),
            (0,
            n.jsx)("div", {
                ref: c,
                children: l
            })
        }
    }
    ,
    26144: (e, M, i) => {
        "use strict";
        i.d(M, {
            y: () => T
        });
        var t = i(34846)
          , o = i(56557)
          , n = i.n(o)
          , s = i(20355)
          , r = i.n(s)
          , N = i(5492)
          , l = i.n(N)
          , a = i(66315)
          , c = i.n(a)
          , d = i(64301)
          , j = i.n(d)
          , D = i(71576)
          , g = i.n(D)
          , u = i(30786)
          , I = i(18025)
          , z = i.n(I);
        n().extend(r()),
        n().extend(g()),
        n().extend(j()),
        n().extend(c()),
        n().extend(l());
        var T = function(e, M, i) {
            if (e === M)
                return n()(e).format("MMM. D, YYYY, h:mm A z");
            var o = (0,
            t.Bd)().t;
            if (60 > (0,
            u.getSecondsElapsed)(e))
                return o("Updated now");
            var s = z()(i);
            return o("updated_time_ago", {
                time: n()(e).locale(s).fromNow(!0)
            })
        }
    }
    ,
    50703: (e, M, i) => {
        "use strict";
        i.d(M, {
            A: () => u
        });
        var t = i(37876)
          , o = i(14232)
          , n = i(95062)
          , s = i.n(n)
          , r = i(15039)
          , N = i.n(r)
          , l = i(80784)
          , a = i(50999)
          , c = i(80481)
          , d = i(87992)
          , j = i(61702)
          , D = i(11806);
        function g(e) {
            var M = e.isBreaking
              , i = void 0 !== M && M
              , n = e.label
              , s = void 0 === n ? null : n
              , r = e.timestampWithUpdatedText
              , j = void 0 === r ? null : r
              , g = e.heroLayoutType
              , u = void 0 === g ? {} : g
              , I = e.isArticleBadge
              , z = (0,
            o.useContext)(d._b).isLive
              , T = j && s !== D.Ay.t(c.h.ANALYSIS) && s !== D.Ay.t(c.h.FIRST_ON_NBC_NEWS) && s !== D.Ay.t(c.h.EXCLUSIVE) && s !== D.Ay.t(c.h.SPECIAL_REPORT);
            return (0,
            t.jsxs)("div", {
                className: N()("live-flag", {
                    "live-flag--active": z && !i,
                    "live-flag--breaking": i || void 0 !== I && I,
                    "live-flag--wide grid-col-push-1-xl": null == u ? void 0 : u.wide
                }),
                "data-testid": "live-flag",
                children: [(0,
                t.jsx)(l.U, {}), (0,
                t.jsxs)("div", {
                    className: "live-flag__container",
                    "data-testid": "live-flag__container",
                    children: [z && (0,
                    t.jsx)("div", {
                        className: "live-flag__dot-container",
                        children: (0,
                        t.jsx)(a.V, {
                            className: "live-flag__dot",
                            "data-testid": "live-flag__dot"
                        })
                    }), s && (0,
                    t.jsx)("div", {
                        className: "live-flag__label",
                        children: (0,
                        t.jsx)("div", {
                            className: "live-flag__label-text",
                            children: s
                        })
                    }), T && (0,
                    t.jsx)("div", {
                        className: "live-flag__timestamp",
                        "data-testid": "live-flag__timestamp",
                        children: (0,
                        t.jsx)("div", {
                            children: j
                        })
                    })]
                })]
            })
        }
        i(84042),
        g.propTypes = {
            isArticleBadge: s().bool,
            isBreaking: s().bool,
            label: s().string,
            timestampWithUpdatedText: s().node,
            heroLayoutType: j.v6
        };
        let u = g
    }
    ,
    50999: (e, M, i) => {
        "use strict";
        i.d(M, {
            V: () => a
        });
        var t = i(67684)
          , o = i(65699)
          , n = i(37876);
        i(14232);
        var s = i(95062)
          , r = i.n(s)
          , N = i(15039)
          , l = i.n(N);
        function a(e) {
            var M = e.className
              , i = (0,
            o._)(e, ["className"]);
            return (0,
            n.jsx)("span", (0,
            t._)({
                className: l()("inline-blinking-live-dot", void 0 === M ? "" : M)
            }, i))
        }
        i(7492),
        a.propTypes = {
            className: r().string
        }
    }
    ,
    54707: (e, M, i) => {
        "use strict";
        i.d(M, {
            G: () => n
        });
        var t = i(37876);
        i(14232);
        var o = i(50481);
        function n(e) {
            var M = e.className;
            return (0,
            t.jsx)(o.s, {
                buttonText: "Skip to table of contents",
                onClick: function() {
                    var e, M = document.querySelector("#table-of-contents"), i = null == M ? void 0 : M.querySelector("a:not([disabled]), button:not([disabled])");
                    null == M || null === (e = M.scrollIntoView) || void 0 === e || e.call(M, !0),
                    null == i || i.focus()
                },
                showIcon: !0,
                className: M
            })
        }
    }
    ,
    55497: (e, M, i) => {
        "use strict";
        i.d(M, {
            T: () => l
        });
        var t = i(37876);
        i(14232);
        var o = i(34846)
          , n = i(43987)
          , s = i(97247)
          , r = i(73967)
          , N = i.n(r)
          , l = function(e) {
            var M = e.dateCreated
              , i = e.datePublished
              , r = e.delimiter
              , l = e.hideMicroData
              , a = e.meta
              , c = e.orgName
              , d = e.orgUrl
              , j = e.showCreatedDate
              , D = e.source
              , g = e.testId
              , u = void 0 === g ? "content-timestamp-with-source" : g;
            return (0,
            t.jsxs)("div", {
                className: N().contentTimestampWithSource,
                "data-testid": u,
                children: [(0,
                t.jsx)(n.A, {
                    dateCreated: M,
                    datePublished: i,
                    delimiter: void 0 === r ? ", " : r,
                    hideMicroData: void 0 === l || l,
                    meta: void 0 === a || a,
                    showCreatedDate: void 0 !== j && j,
                    testId: "".concat(u, "__timestamp")
                }), D && c && (0,
                t.jsxs)("span", {
                    "data-testid": "".concat(u, "__source"),
                    children: [M || i ? " / " : "", (0,
                    t.jsx)(o.x6, {
                        children: "Source"
                    }), ": ", (0,
                    t.jsx)(s.H, {
                        className: N().contentSourceLink,
                        href: d,
                        children: c
                    })]
                })]
            })
        }
    }
    ,
    56048: (e, M, i) => {
        "use strict";
        i.d(M, {
            A: () => t
        });
        let t = {
            article: function(e) {
                return /^\d+$/.test(e) ? e.length >= 7 ? "wbna".concat(e) : "flna".concat(e) : e.replace(/n(?:cna)?(\d+)/, "ncna$1").replace(/t(?:dna)?(\d+)/, "tdna$1").replace(/(\d{1}[A-Fa-f]{1}\d+)$/, function(e) {
                    return "flna".concat(e.toUpperCase())
                }).replace(/[iI](\d+)/, "flnaI$1").replace(/[fF](\d+)/, "flna$1")
            },
            recipe: function(e) {
                return e.replace(/t(?:drp)?(\d+)/, "tdrp$1")
            },
            slideshow: function(e) {
                return e.replace(/n(?:csl)?(\d+)/, "ncsl$1").replace(/t(?:dsl)?(\d+)/, "tdsl$1").replace(/^(\d+)$/, "wbsl$1")
            }
        }
    }
    ,
    58232: (e, M, i) => {
        "use strict";
        function t(e) {
            var M = e.featureFlags
              , i = !!(null == M ? void 0 : M["nbc-news-bedrock"])
              , t = !!(null == M ? void 0 : M["account-history"]);
            return !i || t
        }
        i.d(M, {
            F: () => t
        })
    }
    ,
    58605: e => {
        e.exports = {
            bookmarkButton: "styles_bookmarkButton__Mz77M",
            bookmarkButtonWrapper: "styles_bookmarkButtonWrapper__7hTEA",
            backgroundRibbon: "styles_backgroundRibbon__8BOQx",
            shouldShow: "styles_shouldShow__qnidq",
            message: "styles_message__Oiggm",
            myNewsLink: "styles_myNewsLink__MSSjC",
            "live-dot-blink": "styles_live-dot-blink__cA_X1",
            "fade-in": "styles_fade-in__u15zk",
            "expand-in": "styles_expand-in__PsxLj",
            "chatblog-expand-in": "styles_chatblog-expand-in__Bb7rf"
        }
    }
    ,
    63535: (e, M, i) => {
        "use strict";
        i.d(M, {
            N: () => l
        });
        var t = i(37876);
        i(14232);
        var o = i(77328)
          , n = i.n(o)
          , s = i(95062)
          , r = i(68552)
          , N = i(61702);
        function l(e) {
            var M = e.videos
              , i = e.vertical
              , o = void 0 === i ? "" : i
              , s = e.section
              , N = void 0 === s ? "" : s;
            return (0,
            t.jsx)(n(), {
                children: (void 0 === M ? [] : M).map(function(e) {
                    return (0,
                    t.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0,
                            r.jo)({
                                video: e,
                                vertical: o,
                                section: N
                            }))
                        }
                    }, "VideoObjectLD-".concat(e.id))
                })
            })
        }
        l.propTypes = {
            videos: (0,
            s.arrayOf)(N.Ki),
            vertical: s.string,
            section: s.string
        }
    }
    ,
    64905: (e, M, i) => {
        "use strict";
        i.d(M, {
            DT: () => n,
            LL: () => o,
            lp: () => t
        });
        var t = function(e) {
            var M, i = [];
            return e && ((null === (M = e.primaryMedia) || void 0 === M ? void 0 : M.video) && i.push(e.primaryMedia.video),
            Array.isArray(e.body) && e.body.forEach(function(e) {
                "embeddedVideo" === e.type && e.video && i.push(e.video)
            })),
            i
        }
          , o = function(e) {
            var M, i = [];
            return e && ((null === (M = e.primaryMedia) || void 0 === M ? void 0 : M.video) && i.push(e.primaryMedia.video),
            e.associatedVideo && i.push(e.associatedVideo)),
            i
        }
          , n = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , M = e.article
              , i = e.liveBlogCards
              , o = t(M);
            return Array.isArray(i) && i.flatMap(function(e) {
                var M;
                return (null === (M = e.content) || void 0 === M ? void 0 : M.markupAndEmbeds) || []
            }).filter(function(e) {
                return "embeddedVideo" === e.type && e.video
            }).forEach(function(e) {
                return o.push(e.video)
            }),
            o
        }
    }
    ,
    65735: () => {}
    ,
    67632: e => {
        e.exports = {
            sponsoredWrap: "styles_sponsoredWrap__D35cp",
            sponsoredInner: "styles_sponsoredInner__kmr6b",
            sponsoredTop: "styles_sponsoredTop__C9wxp",
            nbcSponsoredLogo: "styles_nbcSponsoredLogo__Z_E12",
            sponsoredLogo: "styles_sponsoredLogo__oQRFo",
            sponsoredLabel: "styles_sponsoredLabel__8H6dX",
            sponsoredMore: "styles_sponsoredMore__jCgOI",
            moreInfo: "styles_moreInfo__7pyr2",
            "live-dot-blink": "styles_live-dot-blink__aV1_W",
            "fade-in": "styles_fade-in__4JDa6",
            "expand-in": "styles_expand-in__pZ3IZ",
            "chatblog-expand-in": "styles_chatblog-expand-in__kW1yx"
        }
    }
    ,
    67654: e => {
        e.exports = {
            container: "styles_container__7dSAS",
            showMoreButton: "styles_showMoreButton__DiKRW",
            accordion: "styles_accordion__oE5l9",
            expandableAuthors: "styles_expandableAuthors__5y3sX",
            list: "styles_list__19e_a",
            timestamp: "styles_timestamp__ZDKvG",
            displayedAuthors: "styles_displayedAuthors__weBPI",
            "live-dot-blink": "styles_live-dot-blink__JXu2B",
            "fade-in": "styles_fade-in__RgH_x",
            "expand-in": "styles_expand-in__Lpz7J",
            "chatblog-expand-in": "styles_chatblog-expand-in__u3_kw"
        }
    }
    ,
    69279: (e, M, i) => {
        "use strict";
        i.d(M, {
            T: () => A
        });
        var t = i(45526)
          , o = i(20294)
          , n = i(37876)
          , s = i(14232)
          , r = i(95062)
          , N = i.n(r)
          , l = i(15039)
          , a = i.n(l)
          , c = i(21737)
          , d = i(87663)
          , j = i(89903)
          , D = i(96491)
          , g = i(78804)
          , u = i(97247)
          , I = i(94844)
          , z = i(65071)
          , T = i(58605)
          , y = i.n(T);
        function A(e) {
            var M = e.contentId
              , i = e.contentType
              , r = e.pageRegion
              , N = e.isChromeless
              , l = (0,
            o._)((0,
            s.useState)(""), 2)
              , T = l[0]
              , A = l[1]
              , x = (0,
            o._)((0,
            s.useState)(!1), 2)
              , L = x[0]
              , C = x[1]
              , w = (0,
            g.yI)()
              , O = (0,
            d.GP)(function(e) {
                return e.bookmarks
            })
              , v = "Create your free account \nor log in to save this ".concat(i)
              , p = "Save this ".concat(i, " \nto ").concat(i === z.G_ ? "watch" : "read", " later")
              , E = (0,
            c.aL)().isUsa
              , k = (0,
            c.Cn)().vertical
              , h = w === z.K_
              , _ = w === z.zZ
              , m = !!(0,
            j.B0)(D.MYNEWS_ENABLED, k)
              , S = !(void 0 !== N && N) && E && M && m
              , Q = (0,
            z.Fo)(i)
              , Y = (0,
            n.jsxs)(u.A, {
                to: Q,
                className: y().myNewsLink,
                "data-testid": "bookmark-button__link",
                children: ["Go to", (0,
                n.jsx)("br", {}), "Saved"]
            });
            return ((0,
            s.useEffect)(function() {
                var e = null == O ? void 0 : O[M];
                C(e),
                _ && A(v),
                h && e && A(""),
                h && !1 === e && A(p),
                h && void 0 === e && A("")
            }, [O, w, M]),
            S) ? (0,
            n.jsxs)("div", {
                className: "bookmark-button__container ".concat(y().bookmarkButton, " dn-print"),
                "data-testid": "bookmark-button",
                children: [(0,
                n.jsxs)("div", {
                    className: y().bookmarkButtonWrapper,
                    children: [(0,
                    n.jsx)("div", {
                        className: a()(y().backgroundRibbon, (0,
                        t._)({}, y().shouldShow, h || _))
                    }), (0,
                    n.jsx)(I.e, {
                        contentId: M,
                        contentType: i,
                        callbacks: {
                            save: function() {
                                A(""),
                                C(!0)
                            },
                            remove: function() {
                                A(p),
                                C(!1)
                            }
                        },
                        options: {
                            pageRegion: void 0 === r ? "" : r
                        }
                    })]
                }), (0,
                n.jsx)("span", {
                    className: y().message,
                    "data-testid": "bookmark-button__message",
                    children: L ? Y : T
                })]
            }) : null
        }
        A.propTypes = {
            contentId: N().string.isRequired,
            contentType: N().oneOf([z.fj, z.G_, z.bc, z.Ax]).isRequired,
            pageRegion: N().string,
            isChromeless: N().bool
        }
    }
    ,
    71740: (e, M, i) => {
        "use strict";
        i.d(M, {
            A: () => Z
        });
        var t = i(16927)
          , o = i(45526)
          , n = i(20294)
          , s = i(4902)
          , r = i(37876)
          , N = i(14232)
          , l = i(48011)
          , a = i(15039)
          , c = i.n(a)
          , d = i(18847)
          , j = i.n(d)
          , D = i(95062)
          , g = i.n(D)
          , u = i(90327)
          , I = i(87992)
          , z = i(3073)
          , T = i(61702);
        i(75714);
        var y = "article-hero-headline"
          , A = function(e) {
            var M, i = e.additionalClasses, t = void 0 === i ? {
                htag: null,
                wrapper: null
            } : i, n = e.children, s = e.dek, l = e.isLiveBlog, a = void 0 !== l && l, d = e.isRecipe, j = void 0 !== d && d, D = e.isPresentationStyleWide, g = void 0 !== D && D, T = e.heroLayoutType, A = void 0 === T ? {} : T, x = e.path, L = e.timestamp, C = e.isArticleBadge, w = void 0 !== C && C, O = (0,
            z.Qn)(x) ? "h2" : "h1", v = (0,
            N.useContext)(I.kj), p = v.breakingNews, E = v.unibrow, k = p && !a, h = p || a;
            return (0,
            r.jsxs)("div", {
                className: c()(y, "layout-grid-item", (M = {
                    "grid-col-10-l": (!h || !w) && !(null == A ? void 0 : A.wide) && !j
                },
                (0,
                o._)(M, "".concat(y, "--live-breaking"), h || w),
                (0,
                o._)(M, "".concat(y, "--recipe"), j),
                (0,
                o._)(M, "grid-col-11-xl grid-col-push-1-xl", (null == A ? void 0 : A.wide) && !g),
                (0,
                o._)(M, "grid-col-8-xl grid-col-push-2-xl grid-col-10-m grid-col-push-1-m", g),
                (0,
                o._)(M, "grid-col-10-m grid-col-12-l grid-col-10-xl grid-col-push-1-m grid-col-push-0-l grid-col-push-1-xl", j),
                M), null == t ? void 0 : t.wrapper),
                children: [(k || w) && (0,
                r.jsx)(u.d, {
                    size: "div",
                    className: c()("article-hero__tax-term", {
                        "article-hero__tax-term--live-breaking": h || w
                    }),
                    unibrow: E
                }), (0,
                r.jsx)(O, {
                    className: c()("".concat(y, "__htag"), null == t ? void 0 : t.htag, "lh-none-print black-print", (0,
                    o._)({}, "".concat(y, "__htag--live-breaking"), h || w)),
                    children: n
                }), void 0 === s ? null : s, void 0 === L ? null : L]
            })
        };
        A.propTypes = {
            additionalClasses: g().shape({
                htag: g().string,
                wrapper: g().string
            }),
            children: g().node.isRequired,
            dek: g().node,
            isLiveBlog: g().bool,
            isRecipe: g().bool,
            isPresentationStyleWide: g().bool,
            heroLayoutType: T.v6,
            path: g().string.isRequired,
            timestamp: g().node,
            isArticleBadge: g().bool
        };
        var x = i(34846)
          , L = i(26144)
          , C = i(50703)
          , w = function(e) {
            var M = e.heroLayoutType
              , i = e.isLiveBlog
              , t = e.isArticleBadge
              , o = e.label
              , n = e.vertical
              , s = (0,
            N.useContext)(I.kj)
              , l = s.breakingNews
              , a = s.dateCreated
              , c = s.datePublished
              , d = l && !i;
            if (!(null == o ? void 0 : o.length))
                return null;
            var j = (0,
            x.Bd)().t;
            return (0,
            r.jsx)(C.A, {
                isBreaking: d,
                isArticleBadge: t,
                label: j(o),
                heroLayoutType: void 0 === M ? {} : M,
                timestampWithUpdatedText: d ? (0,
                L.y)(c, a, n) : null
            })
        };
        w.propTypes = {
            heroLayoutType: T.v6,
            isLiveBlog: g().bool.isRequired,
            label: g().string.isRequired,
            vertical: g().string.isRequired
        };
        var O = i(11806)
          , v = i(46330)
          , p = i(67632)
          , E = i.n(p);
        let k = function(e) {
            var M = e.externalUrl
              , i = e.primaryImage
              , t = (0,
            n._)((0,
            N.useState)(!1), 2)
              , s = t[0]
              , l = t[1];
            return (0,
            r.jsx)("aside", {
                className: c()(E().sponsoredWrap, "layout-grid-container", (0,
                o._)({}, E().sponsoredMore, s)),
                children: (0,
                r.jsxs)("div", {
                    className: c()(E().sponsoredInner, "layout-grid-item grid-col-12 grid-col-10-m grid-col-push-1-m grid-col-7-l grid-col-push-0-l grid-col-6-xl\n          grid-col-push-2-xl"),
                    children: [(0,
                    r.jsxs)("section", {
                        className: E().sponsoredTop,
                        children: [(null == i ? void 0 : i.url) ? (0,
                        r.jsx)("a", {
                            href: void 0 === M ? "#" : M,
                            className: E().sponsoredLogo,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            r.jsx)(v.A, {
                                src: i.url.primary,
                                alt: i.altText
                            })
                        }) : (0,
                        r.jsx)("div", {
                            className: E().nbcSponsoredLogo,
                            children: (0,
                            r.jsx)(v.A, {
                                src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzggMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RjUyQUYyRDQtODZDNy00NDlDLTlDMzItQjRGRkU1NkU1RUE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9Ikljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDU0LjAwMDAwMCwgLTM1Ni4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iTkJDLU5ld3MtTG9nby3igJQtVmVydGljYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNTQuMDAwMDAwLCAzNTYuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxnPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjMuNDAwMjg4KSIgZmlsbD0iIzAxMDIwMSI+ICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMSIgcG9pbnRzPSIwIDYuMzAxMzAyODggMS4yMjkyMjU3MyA2LjMwMTMwMjg4IDEuMjI5MjI1NzMgMi44MzAzODk0MiA0Ljk5NjM1MzA5IDYuNTA2NjM5NDIgNC45OTYzNTMwOSAwLjI1MjYwMDk2MiAzLjc3NDY1MDY5IDAuMjUyNjAwOTYyIDMuNzc0NjUwNjkgMy42Mjg2MTA1OCAwIDAuMDIzMzcwMTkyMyI+PC9wb2x5Z29uPiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ljk2NjM3Mjc2LDMuNzIzNTMzNjUgTDguMDg1NDc5OTUsMy43MjM1MzM2NSBDOC4zMzc0Mzk2LDMuNzMxNDY2MzUgOC44MDI0MDA1LDMuOTg0Njg3NSA4LjgwMjQwMDUsNC41MTQxNTg2NSBDOC44MDI0MDA1LDUuMDYwMDI0MDQgOC4zMjk0ODQ5OSw1LjI5Njg5OTA0IDguMDUzNzA5NDYsNS4zMjA3OTMyNyBMNi45NjYzNzI3Niw1LjMyMDc5MzI3IEw2Ljk2NjM3Mjc2LDMuNzIzNTMzNjUgWiBNNS43MjExODk5MSw2LjI5MzI5MzI3IEw4LjY1MjYwNDc5LDYuMjkzMjkzMjcgQzkuMzQ2MDkyODEsNi4yOTMyOTMyNyAxMC4xNTc5ODk0LDUuNjEzNDM3NSAxMC4xNTc5ODk0LDQuNjg4MzQxMzUgQzEwLjE1Nzk4OTQsMy43Mzk0NDcxMiA5LjU0MzE4NDg3LDMuMjcyOTA4NjUgOS4xNDEzODE1OSwzLjA4MzE0OTA0IEM5LjE0MTM4MTU5LDMuMDgzMTQ5MDQgOS44ODIxNjU5NSwyLjY2NDA2MjUgOS44NTAzOTU0NiwxLjc2MzAwNDgxIEM5LjgxMTA1MzcyLDAuNTUzMTk3MTE1IDguNjkxODk4NjEsMC4yNTI2MjAxOTIgOC4yOTgwOTc4NiwwLjI1MjYyMDE5MiBMNS43MjExODk5MSwwLjI1MjYyMDE5MiBMNS43MjExODk5MSw2LjI5MzI5MzI3IFogTTYuOTU4NDE4MTYsMS4yNjQ5Mjc4OCBMNy44NzI0MzA3NywxLjI2NDkyNzg4IEM4LjE3OTY0MTM2LDEuMjg4NDg1NTggOC41NTAwMDk1OCwxLjUyNTY5NzEyIDguNTUwMDA5NTgsMS45NTI3MTYzNSBDOC41NTAwMDk1OCwyLjM1NTg4OTQyIDguMjY2NjE0ODgsMi42NDA1NTI4OCA3Ljg5NjI0NjY2LDIuNjg4MDA0ODEgTDYuOTU4NDE4MTYsMi42ODgwMDQ4MSBMNi45NTg0MTgxNiwxLjI2NDkyNzg4IFoiIGlkPSJGaWxsLTIiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuNzc1NjI2NywxLjUwMTc1OTYyIEMxMy40ODMyNDM0LDAuNjQwMTI1IDExLjczMzc1NzksMS41MTc3MjExNSAxMS42MjMzMDM5LDMuMTE1MDI4ODUgQzExLjU3NjAwNzYsNS4wNTIwNDgwOCAxMy40ODMyNDM0LDUuODUwMzE3MzEgMTQuNzc1NjI2Nyw1LjAxMjUyODg1IEwxNC43NzU2MjY3LDYuMjUzODI2OTIgQzEyLjQ5MDQ1MTUsNy4xMDc1Mjg4NSAxMC4zOTQwNzgyLDUuNDk0NjQ0MjMgMTAuMzg2MTIzNiwzLjE1NDUgQzEwLjM5NDA3ODIsMS4xNzAwMjg4NSAxMi41NzcxMzc1LC0wLjU4NTE2MzQ2MiAxNC43NzU2MjY3LDAuMjkyNDMyNjkyIEwxNC43NzU2MjY3LDEuNTAxNzU5NjIgWiIgaWQ9IkZpbGwtNCI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTYiIHBvaW50cz0iMTcuNjQzODEyMSAwLjAyMzM1MDk2MTUgMjEuNDE4NDYyOCAzLjYyODU5MTM1IDIxLjQxODQ2MjggMC4yNTI2Mjk4MDggMjIuNjQwMjEzMSAwLjI1MjYyOTgwOCAyMi42NDAyMTMxIDYuNTA2NjIwMTkgMTguODczMDM3OCAyLjgzMDM3MDE5IDE4Ljg3MzAzNzggNi4zMDEyODM2NSAxNy42NDM4MTIxIDYuMzAxMjgzNjUiPjwvcG9seWdvbj4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC04IiBwb2ludHM9IjI0LjQzNjg4OTUgMS4zMDQzODQ2MiAyNC40MzY4ODk1IDIuNzExNSAyNi4zOTg5NDUgMi43MTE1IDI2LjM5ODk0NSAzLjc3ODk1MTkyIDI0LjQzNjg4OTUgMy43Nzg5NTE5MiAyNC40MzY4ODk1IDUuMjI1ODI2OTIgMjYuMzk4OTQ1IDUuMjI1ODI2OTIgMjYuMzk4OTQ1IDYuMjkzMzI2OTIgMjMuMjA3MjgwNSA2LjI5MzMyNjkyIDIzLjIwNzI4MDUgMC4yNTI2MDU3NjkgMjYuMzk4OTQ1IDAuMjUyNjA1NzY5IDI2LjM5ODk0NSAxLjMwNDM4NDYyIj48L3BvbHlnb24+ICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTAiIHBvaW50cz0iMjcuODk2MDU4OCAwLjI1MjYwNTc2OSAyOS40ODgwODE1IDMuNzk0ODY1MzggMzAuMDU1MjU0MiAyLjUyMTc0MDM4IDI4Ljk5MTczMzQgMC4yNTI2MDU3NjkgMzAuMjQ0MzkxNyAwLjI1MjYwNTc2OSAzMC42Mzg2MjM3IDEuMTkzNTY3MzEgMzEuMDE2OTk0NSAwLjI1MjYwNTc2OSAzMi4yNDYxNzIzIDAuMjUyNjA1NzY5IDMxLjIyOTU2NDQgMi41MTQwOTYxNSAzMS43OTcwNzI2IDMuNzk0ODY1MzggMzMuMzE4MDMxIDAuMjUyNjA1NzY5IDM0LjY2NTMyOTkgMC4yNTI2MDU3NjkgMzEuOTA3MjM5MSA2LjUzMDQ5MDM4IDMwLjY3MDA1ODggMy44NjU3Nzg4NSAyOS40NDA3ODUxIDYuNTM4NDcxMTUgMjYuNjAzNjI3NSAwLjI1MjYwNTc2OSI+PC9wb2x5Z29uPiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNi4zMTIxNjc1LDAuMDg2NjgyNjkyMyBDMzYuNDIyNzE3MywwLjA4NjY4MjY5MjMgMzYuOTk4MTMyMiwwLjExODE3MzA3NyAzNy41NDk3NzkxLDAuNDUwMzM2NTM4IEwzNy41NDk3NzkxLDEuNjI4NTU3NjkgQzM3LjIyNjY1OTMsMS40MjI4MzY1NCAzNi44MDEwNDAxLDEuMTQ2MTA1NzcgMzYuMzkxMjgyMiwxLjE0NjEwNTc3IEMzNS44OTQ1MDI5LDEuMTQ2MTA1NzcgMzUuNTc5Mzg1NiwxLjUxNzc0MDM4IDM1LjU3OTM4NTYsMS44NTc4MzY1NCBDMzUuNTc5Mzg1NiwyLjcxOTQ3MTE1IDM3Ljk3NTAxNDksMi42NDA1Mjg4NSAzNy45NzUwMTQ5LDQuNTQ2MDU3NjkgQzM3Ljk3NTAxNDksNS4xNzg0MTM0NiAzNy41MjU5MTUzLDYuNDgzMDc2OTIgMzUuOTQxNzk5Miw2LjQ4MzA3NjkyIEMzNS45MTAzNjQyLDYuNDgzMDc2OTIgMzUuNDIyMDE4Nyw2LjUzMDQ4MDc3IDM0LjU3MDY4NDUsNi4wODc1NDgwOCBMMzQuNTcwNjg0NSw0Ljc3NTI4ODQ2IEMzNS4wNDM2NDc5LDUuMjg5MzI2OTIgMzUuNjM0NTg4Nyw1LjQyMzY1Mzg1IDM1Ljg2MzExNTgsNS40MjM2NTM4NSBDMzYuMzc1MzczLDUuNDIzNjUzODUgMzYuNzQ1Nzg5Miw1LjAyMDA5NjE1IDM2Ljc0NTc4OTIsNC41MzAxNDQyMyBDMzYuNzQ1Nzg5MiwzLjU4OTEzNDYyIDM0LjQxMzM2NTQsMy43NjMzNjUzOCAzNC40MTMzNjU0LDEuODU3ODM2NTQgQzM0LjQxMzM2NTQsMC44MjE5NzExNTQgMzUuMjk1NjA3NiwwLjA4NjY4MjY5MjMgMzYuMzEyMTY3NSwwLjA4NjY4MjY5MjMiIGlkPSJGaWxsLTEzIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuMjczODI2LDAgTDIzLjI3NjM2NTcsMCBDMjQuMTc5MDIxNCwwLjAwMDI0MDM4NDYxNSAyNS4wOTAyNTQ3LDAuMzA2NDQyMzA4IDI1Ljc1NzA5OTYsMC44Nzc2OTIzMDggQzI2LjIxNTE2MDIsMS4yODgzMTczMSAyNi42MDAzMzU0LDEuNzY1MDQ4MDggMjYuODIxOTE0MiwyLjI5OTQ3MTE1IEMyNy40MTk3NTU0LDMuNTA3MTYzNDYgMjcuMDY3MzA5LDUuMDkzMDc2OTIgMjYuNDQ1MzY0NCw2LjE3ODAyODg1IEMyNS4xOTQsOS4wMDE0OTAzOCAyMy45NDMxNjI3LDExLjgyNDMyNjkgMjIuNjkyOTAwNCwxNC42NDcwMTkyIEMyMi42MzIwOTA4LDE0Ljc4NTQ4MDggMjIuNTcxMDQxNiwxNC45MjIzNTU4IDIyLjUwOTk5MjQsMTUuMDU4Nzk4MSBDMjIuMjczMjcxMSwxNS41OTM3OTgxIDIyLjAzNTg3ODksMTYuMTI4Nzk4MSAyMS43OTg0ODY4LDE2LjY2NDM3NSBDMjEuNzMzODQzNiwxNi44MTA2NzMxIDIxLjY4MzE5MjksMTYuOTkzMjIxMiAyMS41Nzk0OTU2LDE3LjExNTY3MzEgQzIxLjU0ODY4MzUsMTYuOTIwMDk2MiAyMS41MTgwNjMxLDE2LjcyNDg1NTggMjEuNDg3MDExMywxNi41Mjk4MDc3IEMyMC45MzY2NTgzLDEzLjA0NDA4NjUgMjAuMzg2MDY1Niw5LjU1NzQ1MTkyIDE5LjgzNTcxMjUsNi4wNzA4MTczMSBDMTkuNjk1NjQ0NCw1LjAxMDYyNSAyMC44MjY1ODc2LDQuNTU4ODk0MjMgMjEuNDg5MzExNSw0LjA0OTYxNTM4IEMyMS40NTY4MjIyLDMuODkzNzAxOTIgMjEuMjg1MjcxMSwzLjkwMTczMDc3IDIxLjE3ODQxMTEsMy44Mjg0MTM0NiBDMjAuNjM1MjkzOCwzLjgyMjY5MjMxIDIwLjA5MTg4OSwzLjgxNjkyMzA4IDE5LjU0ODI0NDYsMy44MTEyNSBDMTkuNTMyLDMuNzk0NDIzMDggMTkuNTE2MTg2NiwzLjc3ODE3MzA4IDE5LjUwMDEzMzcsMy43NjIyMTE1NCBDMTkuNTA3NzA0OSwyLjM4OTQyMzA4IDIwLjI0NDc1MTYsMS4xMjQyNzg4NSAyMS40ODkzMTE1LDAuNDU4MzY1Mzg1IEMyMS43Nzk3MDI0LDAuMjg5OTUxOTIzIDIyLjA5NjI1NzMsMC4xNjkyNzg4NDYgMjIuNDI1NzUwMywwLjA5Mzk0MjMwNzcgQzIyLjcwMjE5NjcsMC4wMzA5NjE1Mzg1IDIyLjk4NzU1NjEsOS42MTUzODQ2MmUtMDUgMjMuMjczODI2LDAgWiBNMTEuOTg4ODgwMiwxLjA5OTc1OTYyIEMxMi42ODY3Mjg5LDAuMzg4NTU3NjkyIDEzLjYzMzc1NzksMC4wNDM4OTQyMzA4IDE0LjU4NjM0NTUsMC4wNDM4OTQyMzA4IEMxNS40NTc0MjI0LDAuMDQzOTQyMzA3NyAxNi4zMzMxOTU1LDAuMzMyMjExNTM4IDE3LjAyNzAxODksMC44OTE5NzExNTQgQzE3LjM4Mzk2OTcsMS4xODA3MjExNSAxNy42OTkyMzA4LDEuNTMwNjI1IDE3LjkzNDc1NDEsMS45MjE3Nzg4NSBDMTguMzI4NDU5LDIuNjUyMTE1MzggMTguNTU3MzY5NSwzLjQ4MjUgMTguNDE4NDAzNSw0LjQwMjc0MDM4IEMxNy44MDA4Njc2LDguMzc1OTEzNDYgMTcuMTgzNzYyOSwxMi4zNDgxMjUgMTYuNTY1NjA0LDE2LjMyMTczMDggQzE2LjUyODIyNywxNi41NjQwODY1IDE2LjQ5MDQxODcsMTYuODA2NjM0NiAxNi40NTI4NDk5LDE3LjA0OTAzODUgQzE2LjQ2MDIyOTUsMTcuMDY2NDkwNCAxNi40NDQ2MDc4LDE3LjA4MjMwNzcgMTYuNDI4MTIzNiwxNy4wOTExNTM4IEMxNi4zNjkxODI4LDE2Ljk3MzAyODggMTYuMzEwNTI5NiwxNi44NTU2NzMxIDE2LjI1MTk3MjMsMTYuNzM4MDc2OSBDMTUuOTY4MTQ2MywxNi4xNjk0NzEyIDE1LjcwNjA3NTcsMTUuNTkyNTQ4MSAxNS40NDY2ODg1LDE1LjAxMjAxOTIgQzE1LjM0NjgyNDcsMTQuNzg3NTQ4MSAxNS4yNDcxNTI2LDE0LjU2MjY0NDIgMTUuMTQ3MDAxMywxNC4zMzg3NSBDMTMuNzYxNDE0OSwxMS4yMzQ5MDM4IDEyLjM3NTM0OTMsOC4xMzEwNTc2OSAxMC45ODkwOTIxLDUuMDI3NSBDMTAuNTMxMDMxNSwzLjYwNjI1IDEwLjk1NzY1NywyLjExODQxMzQ2IDExLjk4ODg4MDIsMS4wOTk3NTk2MiBaIE0yNy4zNjQ4ODc4LDYuODcyOTMyNjkgQzI4LjEwNDcxMzcsNS43ODk5MDM4NSAyOS4yOTQ4MzczLDUuMTg1NzIxMTUgMzAuNTkzOTI5NCw1LjE4NTcyMTE1IEMzMC43ODQwNzMxLDUuMTg1NzIxMTUgMzAuOTc2NTY0OSw1LjE5ODcwMTkyIDMxLjE3MDMwMjYsNS4yMjQ5NTE5MiBDMzIuMjkyMzMyOSw1LjQyOTk1MTkyIDMzLjQxNDg0MjQsNi4xNjE3Nzg4NSAzMy45NTYwOTA4LDcuMjQ2MTA1NzcgQzM0LjYxODYyMyw4LjM4MDQ4MDc3IDM0LjQ3MjAzNzgsMTAuMDk3NTk2MiAzMy43MzQxMjg2LDExLjE0OTcxMTUgQzMzLjI3NjA2ODEsMTEuODg4ODQ2MiAzMi41MjIxMDU5LDEyLjI1ODYwNTggMzEuODgzMDU0MiwxMi43NDMwNzY5IEMzMS40MjE4MzEsMTMuMDYxNjM0NiAzMC45NjEyMzA4LDEzLjM3ODIyMTIgMzAuNTAwMzkwOSwxMy42OTU1Mjg4IEMzMC40MzcyODEyLDEzLjczOTYxNTQgMzAuMzczNTAwNiwxMy43ODM2MDU4IDMwLjMwOTkxMTcsMTMuODI3NDAzOCBDMjcuNTQ1NDQ3NywxNS43MzEwNTc3IDI0Ljc4MTYwNjYsMTcuNjM0NDcxMiAyMi4wMTcwOTQ2LDE5LjUzODU1NzcgQzIxLjkzMDg4NzgsMTkuNTk4MzE3MyAyMS43NDgyNjczLDE5Ljc3Nzc4ODUgMjEuNjQ1NDMyNSwxOS43Nzc3ODg1IEMyMS42ODMxOTI5LDE5LjY2NTM4NDYgMjEuNzE2MzUzMSwxOS41NTEzOTQyIDIxLjc1OTI0MDksMTkuNDQwOTEzNSBDMjMuMzgwMzAyNiwxNS4yNzcyMTE1IDI1LjM2OTA5NzEsMTEuMjY3MzA3NyAyNy4xNzM5Mjk0LDcuMTgxMzQ2MTUgQzI3LjIzMzkyNDMsNy4wNzM5OTAzOCAyNy4yOTcwODIsNi45NzE1Mzg0NiAyNy4zNjQ4ODc4LDYuODcyOTMyNjkgWiBNNi4wMDE0MTIzNiw1LjQ0NjczMDc3IEM2LjQ0MDE2MTQxLDUuMjg1MDQ4MDggNi44OTMyODYyNSw1LjIwNzk4MDc3IDcuMzQwOTk2MjIsNS4yMDc5ODA3NyBDOC44MjU3Mjc2Miw1LjIwODAyODg1IDEwLjI1MDIyNDUsNi4wNTU4MTczMSAxMC44ODU2MzQzLDcuNDc4MzY1MzggQzEwLjkxMDE2OSw3LjUzMzk5MDM4IDEwLjkzNTA4Nyw3LjU4OTE4MjY5IDEwLjk1OTMzNDIsNy42NDQ2NjM0NiBDMTIuNjg1MjQzNCwxMS41MDI4MzY1IDE0LjQxMTQ4OCwxNS4zNjA1Mjg4IDE2LjEzNjY3ODQsMTkuMjE4MzE3MyBDMTYuMjIwMTA1OSwxOS40MDQ1NjczIDE2LjMwMzUzMzQsMTkuNTkxMjk4MSAxNi4zODY5MTMsMTkuNzc3Nzg4NSBDMTYuMjY4Njk2MSwxOS43Nzc3ODg1IDE2LjIyMjg4NTIsMTkuNzI2NzMwOCAxNi4xMjY5NTA4LDE5LjY2MDE5MjMgQzEzLjMwODE5NDIsMTcuNzExMTUzOCAxMC40ODk2MjkzLDE1Ljc2MjQ1MTkgNy42NzEyNTU5OSwxMy44MTMxMjUgQzcuNTI0NzE4NzksMTMuNzExNzMwOCA3LjM3ODE4MTU5LDEzLjYxMDE5MjMgNy4yMzE4MzYwNywxMy41MDg3OTgxIEM2LjQ2NjQ2OTEsMTIuOTgwMDQ4MSA1LjcwMTk2NDY5LDEyLjQ1MDkxMzUgNC45MzY3ODk0MSwxMS45MjIxMTU0IEMzLjc4MTc5MDY3LDEwLjk0Mzk0MjMgMy4zMDcwNTQyMiw5LjQ4MTM5NDIzIDMuNjk5NjU3LDguMDAyNDUxOTIgQzMuOTk1MTI3MzYsNi44OTI4MzY1NCA0LjkxMjMwMjY1LDUuODU3NzQwMzggNi4wMDE0MTIzNiw1LjQ0NjczMDc3IFogTTMxLjM1MTEwMjEsMTQuNDAzOTQyMyBDMzEuOTIxNDg1NSwxNC4wMzQ1MTkyIDMyLjY2MjUwOTUsMTMuODQgMzMuMzk1MDAzOCwxMy44NCBDMzMuOTM1MjQ1OSwxMy44NDAwNDgxIDM0LjQ3MDk4MzYsMTMuOTQ1OTEzNSAzNC45Mjk3MTUsMTQuMTY1NTc2OSBDMzUuNzY1ODEwOCwxNC40OTQ0NzEyIDM2LjU1MTYzOTMsMTUuMzE2MTA1OCAzNi45MjAyMzQ2LDE2LjEzNjg3NSBDMzcuNDQzOTQ0NSwxNy4yNDkyNzg4IDM3LjI5MjQ3MTYsMTguNzQzMTczMSAzNi42MjIyMjQ1LDE5Ljc2Njc3ODggQzM2LjU2ODk4NjEsMTkuODQ3MzU1OCAzNi41MTI4MjQ3LDE5LjkyNDg1NTggMzYuNDUzMDIxNCwxOS45OTk0MjMxIEMzNS42NTExNCwyMC45Nzc0MDM4IDM0LjU3ODAzNTMsMjEuNTExMzQ2MiAzMy4zMTYyMjQ1LDIxLjQ3ODk0MjMgQzI5LjQyOTA1OTMsMjEuNDgxODc1IDI1LjU0MTQ2MjgsMjEuNDg0MTM0NiAyMS42NTM4MTg0LDIxLjQ4Njg3NSBDMjEuNTAzMjU2LDIxLjQ4Njg3NSAyMS4zNTMzMTY1LDIxLjQ4Njg3NSAyMS4yMDI1MTQ1LDIxLjQ4NzU5NjIgQzIxLjI5MDM5ODUsMjEuNDI2MTUzOCAyMS4zNzY5ODg3LDIxLjM2NTU3NjkgMjEuNDY0ODI0NywyMS4zMDQ2MTU0IEMyMi41NzIyODc1LDIwLjUzMTY4MjcgMjMuNjc4NTA0NCwxOS43NTg5NDIzIDI0Ljc4NTUzNTksMTguOTg2NjgyNyBDMjQuOTAwNjg2LDE4LjkwNjEwNTggMjUuMDE1OTc5OCwxOC44MjU1NzY5IDI1LjEzMTA4MiwxOC43NDQ3NTk2IEMyNy4yMDUyMjA3LDE3LjI5NzQ1MTkgMjkuMjc3Mzk0NywxNS44NTE1Mzg1IDMxLjM1MTEwMjEsMTQuNDAzOTQyMyBaIE0zLjA0NDc0NDAxLDE0LjE2NTU3NjkgQzMuNTAzNjE5MTcsMTMuOTQ1ODY1NCA0LjAzOTQwNDc5LDEzLjg0IDQuNTc5OTgyMzUsMTMuODQgQzUuMzEyNjIwNDMsMTMuODQgNi4wNTQwMjc3NCwxNC4wMzQ1NjczIDYuNjI0MjE5NDIsMTQuNDAzOTQyMyBDOC44MTcwMDYzMSwxNS45MzQxODI3IDExLjAxMDAzMjgsMTcuNDY0ODU1OCAxMy4yMDE3NjU0LDE4Ljk5NTYyNSBDMTMuOTU0MDUwNCwxOS41MTkzNzUgMTQuNzA1NjY0NiwyMC4wNDQ0MjMxIDE1LjQ1Njg5NTMsMjAuNTY5MDM4NSBDMTUuODk1NjkyMywyMC44NzQ5NTE5IDE2LjMzMzkxNDIsMjEuMTgwNjczMSAxNi43NzIxMzYyLDIxLjQ4NzU5NjIgQzEyLjczNDQwODYsMjEuNDg0NTY3MyA4LjY5NjIwMTc3LDIxLjQ4MTg3NSA0LjY1NzYxMTYsMjEuNDc4OTQyMyBDMy4zOTY4MDcwNiwyMS41MTEzNDYyIDIuMzI0MzczMjcsMjAuOTc3NDAzOCAxLjUyMTAwNjMxLDE5Ljk5OTQyMzEgQzEuMjIyNjEyODYsMTkuNjI0NzExNSAxLjAwNDAwNTA0LDE5LjE2MzY1MzggMC44NzUzODk2NiwxOC42NzIyNTk2IEMwLjY1NDcyMTMxMSwxNy44MzAwOTYyIDAuNjk3NTYxMTYsMTYuODk1MDQ4MSAxLjA1NDk0MzI1LDE2LjEzNjg3NSBDMS40MjM0NDI2MiwxNS4zMTYxMDU4IDIuMjA5MjcxMTIsMTQuNDk0NDcxMiAzLjA0NDc0NDAxLDE0LjE2NTU3NjkgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=",
                                alt: "Sponsor Logo",
                                minWidth: 20,
                                minHeight: 20,
                                layout: "fixed"
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: E().sponsoredLabel,
                            children: (0,
                            r.jsx)("a", {
                                href: "#",
                                className: E().moreInfoLink,
                                title: O.Ay.t("Click to see more info"),
                                onClick: function(e) {
                                    e.preventDefault(),
                                    l(!s)
                                },
                                children: O.Ay.t("What's this?")
                            })
                        })]
                    }), s ? (0,
                    r.jsx)("div", {
                        className: E().moreInfo,
                        children: O.Ay.t("This content was paid for by an advertiser and created by the NBC News Brand Studio. The NBC News editorial organization was not involved in its creation or production. This content represents the views and opinions of the advertiser, who is responsible for all of the material contained therein. Links are not endorsements by NBC News.")
                    }) : null]
                })
            })
        };
        var h = i(81237);
        let _ = function() {
            return (0,
            r.jsx)("div", {
                className: "dn db-print layout-grid-item",
                children: (0,
                r.jsx)(h.A, {
                    textColor: "black",
                    sunriseColor: "#FF503C",
                    width: "60",
                    height: "12"
                })
            })
        };
        var m = i(43987);
        i(65735);
        var S = function(e) {
            var M = e.content
              , i = M.dateCreated
              , t = M.datePublished
              , o = M.dateModified;
            return (0,
            r.jsx)("div", {
                className: c()("recipe__time-stamp dn-print"),
                children: (0,
                r.jsx)(m.A, {
                    dateCreated: i,
                    datePublished: o || t,
                    delimiter: ", ",
                    meta: !0,
                    showCreatedDate: !0,
                    timeZone: "EST"
                })
            })
        };
        S.propTypes = {
            content: T.Ki.isRequired
        };
        var Q = i(80481)
          , Y = i(10616)
          , b = i(61623)
          , U = i(13560)
          , f = i(86130);
        i(7535);
        var B = i(86029)
          , R = "article-hero"
          , P = j()((0,
        t._)(function() {
            return (0,
            s.__generator)(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, Promise.resolve().then(i.bind(i, 40918))];
                case 1:
                    return [2, e.sent().DisclaimerDefault]
                }
            })
        }), {
            loadableGenerated: {
                webpack: function() {
                    return [40918]
                }
            },
            ssr: !1
        })
          , W = function(e, M) {
            var i, t;
            return (((M || {})["article-badge"] ? null == e ? void 0 : null === (t = e.taxonomy) || void 0 === t ? void 0 : null === (i = t.badge) || void 0 === i ? void 0 : i.name : null == e ? void 0 : e.flag) || "").trim().toUpperCase()
        };
        let Z = (0,
        l.Ng)(function(e) {
            var M = e.tve
              , i = e.video;
            return {
                authenticated: M.authenticated,
                hasTempPass: M.hasTempPass,
                provider: M.provider,
                videoError: i.error
            }
        })(function(e) {
            var M, i, t, s, l, a, d, j, D, g = e.additionalClasses, z = e.bylineBrand, T = void 0 === z ? null : z, y = e.content, x = e.authenticated, L = void 0 !== x && x, C = e.hasTempPass, O = void 0 !== C && C, v = e.heroLayoutType, p = void 0 === v ? {} : v, E = e.isChromeless, h = void 0 !== E && E, m = e.isLiveBlog, Z = void 0 !== m && m, G = e.isPresentationStyleWide, H = void 0 !== G && G, V = e.isRecipe, X = void 0 !== V && V, F = e.isShoppable, J = void 0 !== F && F, K = e.path, q = e.primaryMediaBannerEnabled, $ = void 0 !== q && q, ee = e.provider, eM = void 0 !== ee && ee, ei = e.stylizedTag, et = e.tableOfContentsEnabled, eo = e.vertical, en = e.videoError, es = void 0 === en ? "" : en, er = e.view, eN = (0,
            n._)((0,
            N.useState)(!1), 2), el = eN[0], ea = eN[1], ec = (0,
            n._)((0,
            N.useState)(!1), 2), ed = ec[0], ej = ec[1], eD = (0,
            n._)((0,
            N.useState)(!1), 2), eg = eD[0], eu = eD[1], eI = (0,
            N.useContext)(I.xo).isSorM, ez = void 0 !== eI && eI, eT = (0,
            N.useContext)(I.cq), ey = (0,
            U.zQ)(y.taxonomy.sections, "shopping");
            (0,
            N.useEffect)(function() {
                ea(!0)
            }, []);
            var eA = (0,
            N.useMemo)(function() {
                return {
                    authenticated: L,
                    block: R,
                    content: y,
                    hasStickyVideo: ed,
                    hasTempPass: O,
                    isChromeless: h,
                    isLiveBlog: Z,
                    isMobile: ez,
                    isRecipe: X,
                    isShoppingSection: ey,
                    isVideoPlaying: eg,
                    isPresentationStyleWide: H,
                    heroLayoutType: p,
                    provider: eM,
                    vertical: eo,
                    videoError: es,
                    primaryMediaBannerEnabled: $,
                    setStickyVideoFlag: ej,
                    setVideoPlayState: function() {
                        return eu(!0)
                    },
                    pipAlignDesktop: J ? "top" : "bottom",
                    pipAlignMobile: J ? "top" : "bottom"
                }
            }, [L, R, y, ed, O, h, Z, ez, X, ey, eg, H, p, eM, eo, es, $, J])
              , ex = y.breakingNews && !Z
              , eL = y.breakingNews || Z
              , eC = W(y, eT)
              , ew = [Q.h.BREAKING_NEWS, Q.h.DEVELOPING].includes(eC) && !ex ? null : eC
              , eO = !!ew
              , ev = eO && !Z
              , ep = (0,
            N.useCallback)(function() {
                var e = y.nativeAd
                  , M = y.source;
                if (!e || !M)
                    return null;
                var i = M.organization
                  , t = void 0 === i ? {} : i
                  , o = t.externalUrl
                  , n = t.primaryImage;
                return (0,
                r.jsx)("div", {
                    className: "article-hero__sponsor",
                    children: (0,
                    r.jsx)(k, {
                        externalUrl: o,
                        primaryImage: n
                    })
                })
            }, [y])
              , eE = (0,
            N.useCallback)(function() {
                return Z || !eO ? null : (0,
                r.jsx)(w, {
                    isLiveBlog: Z,
                    isArticleBadge: ev,
                    vertical: eo,
                    label: ew,
                    heroLayoutType: p
                })
            }, [eO, Z, eo, p, ev, ew])
              , ek = (0,
            N.useCallback)(function() {
                var e = y.ecommerceEnabled
                  , M = y.taxonomy
                  , i = y.unibrow;
                return (0,
                r.jsx)("aside", {
                    className: c()("article-hero__unibrow-grid layout-grid-item", {
                        "grid-col-2-l": !(null == p ? void 0 : p.wide) && !X,
                        dn: ex || ev,
                        "grid-col-11-xl grid-col-push-1-xl": null == p ? void 0 : p.wide,
                        "grid-col-11-m": H,
                        "grid-col-10-m grid-col-12-l grid-col-10-xl grid-col-push-1-m grid-col-push-0-l grid-col-push-1-xl": X
                    }),
                    children: (0,
                    r.jsx)(u.d, {
                        size: "div",
                        className: c()({
                            "article-hero__tax-term": !(null == p ? void 0 : p.wide) && !X,
                            "article-hero__ecommerce-enabled": e,
                            "article-hero__enhanced-opinion": (0,
                            b.dV)(eo, M),
                            "dn-print": X
                        }),
                        unibrow: i,
                        enableLogos: !0,
                        hasDefaultTextStyle: (null == p ? void 0 : p.wide) || X
                    })
                })
            }, [y, Z, p, X, H, eo, ev, ex]);
            if ((0,
            b.Bg)(y))
                return null;
            var eh = null == y ? void 0 : y.ecommerceEnabled
              , e_ = null == y ? void 0 : null === (M = y.ecommerceMetadata) || void 0 === M ? void 0 : M.disclaimer
              , em = !!(null == e_ ? void 0 : null === (t = e_.body[0]) || void 0 === t ? void 0 : null === (i = t.html) || void 0 === i ? void 0 : i.trim())
              , eS = (0,
            Y.CX)(e_)
              , eQ = eT.ARTICLE_HERO_ALL_PURPOSE_EMBED
              , eY = (0,
            Y.aR)(eA)
              , eb = (0,
            Y.xM)(eA, eQ)
              , eU = c()("article-hero__container", (D = {},
            (0,
            o._)(D, eY, !H),
            (0,
            o._)(D, "article-hero__container--breaking", eO),
            (0,
            o._)(D, "article-hero__live-breaking", eO),
            (0,
            o._)(D, "article-hero__live-blog", Z),
            (0,
            o._)(D, "article-hero__sticky-video", ed),
            (0,
            o._)(D, "article-hero__presentation-wide", H),
            (0,
            o._)(D, "bg-none-print", X),
            D));
            return (0,
            r.jsxs)("section", {
                className: eU,
                "data-testid": "article-hero",
                children: [(0,
                r.jsxs)("div", {
                    className: c()("article-hero__bg-container", {
                        "article-hero__bg-container--recipe": X
                    }),
                    "data-authors": (0,
                    Y.n9)(eA),
                    children: [!Z && !eO && (0,
                    r.jsx)("div", {
                        className: "article-hero__divider"
                    }), el && em && eh && !eS && (0,
                    r.jsx)("div", {
                        className: "disclaimer-container",
                        children: (0,
                        r.jsx)(P, {
                            type: null == e_ ? void 0 : e_.type,
                            verbiage: null == e_ ? void 0 : null === (s = e_.body[0]) || void 0 === s ? void 0 : s.html
                        })
                    }), (0,
                    r.jsxs)("header", {
                        className: c()("article-hero__header", "mh0-print", "layout-grid-container", {
                            "article-hero__is-tagged": !!ei || eL || ev,
                            "pb0-print pl0-print mb0-print article-hero__header--recipe": X,
                            "article-hero__is-breaking--wide": (eL || ev) && H
                        }),
                        children: [ei, eE(), !Z && (void 0 === er ? null : er) !== f.g.START_TODAY_APP && ek(), X && (0,
                        r.jsx)(_, {}), (0,
                        r.jsx)(A, {
                            additionalClasses: (void 0 === g ? {
                                headline: {}
                            } : g).headline,
                            dek: (0,
                            Y.vw)(eA, eL || ev),
                            isLiveBlog: Z,
                            isRecipe: X,
                            isArticleBadge: eO,
                            isPresentationStyleWide: H,
                            heroLayoutType: p,
                            path: void 0 === K ? "" : K,
                            timestamp: X ? (0,
                            r.jsx)(S, {
                                content: y
                            }) : null,
                            vertical: eo,
                            children: y.headline.primary
                        }), T && (0,
                        r.jsx)(B.e, {
                            authors: y.authors,
                            enableToCSkipOverlay: void 0 !== et && et,
                            brand: T,
                            createdAt: y.date.createdAt,
                            publishedAt: y.date.publishedAt,
                            source: y.source,
                            orgName: null === (a = y.source) || void 0 === a ? void 0 : null === (l = a.organization) || void 0 === l ? void 0 : l.name,
                            orgUrl: null === (j = y.source) || void 0 === j ? void 0 : null === (d = j.organization) || void 0 === d ? void 0 : d.externalUrl
                        })]
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: c()("article-hero__media-holder", {
                        "layout-grid-container": !H,
                        "dn-print": X,
                        "article-hero__media-holder--compact": eL || ev
                    }),
                    children: [eb && (0,
                    r.jsx)("div", {
                        className: c()("article-hero__media-container", {
                            "layout-grid-item": !H,
                            "grid-col-10-xl grid-col-push-2-xl": !Z && !(null == p ? void 0 : p.wide) && !X && !H,
                            "grid-col-7_5-l grid-col-6-xl grid-col-push-2-xl": Z && !(null == p ? void 0 : p.wide) && !H,
                            "grid-col-11-m grid-col-10-xl grid-col-push-1-xl": (null == p ? void 0 : p.wide) && !H,
                            "grid-col-10-m grid-col-12-l grid-col-10-xl grid-col-push-1-m grid-col-push-0-l grid-col-push-1-xl": X && !H
                        }),
                        children: eb
                    }), (0,
                    Y.rr)(eA), ep()]
                })]
            })
        })
    }
    ,
    73967: e => {
        e.exports = {
            contentTimestampWithSource: "styles_contentTimestampWithSource__FIhli",
            contentSourceLink: "styles_contentSourceLink__pwSG7"
        }
    }
    ,
    75714: () => {}
    ,
    81237: (e, M, i) => {
        "use strict";
        i.d(M, {
            A: () => r
        });
        var t = i(37876);
        i(14232);
        var o = i(95062)
          , n = i.n(o)
          , s = function(e) {
            var M = e.sunriseColor
              , i = void 0 === M ? "white" : M
              , o = e.textColor
              , n = void 0 === o ? "white" : o
              , s = e.width
              , r = e.height;
            return (0,
            t.jsxs)("svg", {
                width: void 0 === s ? "137" : s,
                height: void 0 === r ? "21" : r,
                viewBox: "0 0 137 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M40.6504 1.73926V6.09822H45.899V20.6057H50.8771V6.09822H56.0944V1.73926H40.6504Z",
                    fill: n
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M72.0826 12.8532C71.8553 13.4733 71.5132 14.0451 71.0742 14.5386C70.6343 15.023 70.0973 15.4092 69.4982 15.6721C68.8837 15.9457 68.1896 16.0849 67.4391 16.0849C66.6683 16.0849 65.9647 15.9457 65.3503 15.6721C64.7516 15.41 64.2155 15.0236 63.7774 14.5386C63.3358 14.0465 62.9925 13.4744 62.7659 12.8532C62.5267 12.209 62.4078 11.5008 62.4078 10.7441C62.4078 9.99203 62.5267 9.28378 62.7659 8.63806C62.9921 8.01623 63.3355 7.44355 63.7774 6.95108C64.2168 6.46834 64.7527 6.08324 65.3503 5.82069C65.9647 5.54551 66.6667 5.40324 67.4391 5.40324C68.1911 5.40324 68.8837 5.54551 69.4982 5.82069C70.0961 6.08439 70.6327 6.4693 71.0742 6.95108C71.5026 7.42794 71.8434 7.99548 72.0826 8.63806C72.3271 9.31304 72.4494 10.0262 72.4438 10.7441C72.4438 11.5008 72.3218 12.2075 72.0826 12.8532V12.8532ZM74.6326 3.71625C73.743 2.86259 72.6658 2.18717 71.4369 1.71031C70.208 1.22876 68.8634 0.98877 67.4391 0.98877C65.996 0.98877 64.6452 1.22798 63.4257 1.70953C62.2077 2.18639 61.132 2.86025 60.2315 3.71547C59.3186 4.58688 58.5957 5.63764 58.1083 6.80176C57.6002 7.99313 57.3438 9.31974 57.3438 10.7441C57.3438 12.17 57.6002 13.4989 58.1083 14.6903C58.5954 15.8537 59.3183 16.9035 60.2315 17.7734C61.1305 18.6271 62.2062 19.3041 63.4257 19.7825C64.6452 20.2594 65.9944 20.5017 67.4391 20.5017C68.8634 20.5017 70.2096 20.2594 71.4369 19.7825C72.6674 19.3041 73.743 18.6271 74.6326 17.7734C75.5254 16.9182 76.2336 15.8816 76.7402 14.6903C77.2468 13.5005 77.5047 12.17 77.5047 10.7441C77.5047 9.31974 77.2468 7.99391 76.7402 6.80255C76.255 5.6411 75.5378 4.59091 74.6326 3.71625",
                    fill: n
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M93.2218 13.1088C93.0021 13.7089 92.6639 14.2587 92.2274 14.7255C91.7747 15.1996 91.2292 15.5753 90.6248 15.8293C89.9932 16.106 89.2615 16.2467 88.4516 16.2467H85.4967V6.09979H88.4798C89.3272 6.09979 90.0776 6.23112 90.7108 6.48753C91.3425 6.74237 91.8756 7.10197 92.2962 7.56007C92.7183 8.0166 93.0389 8.55757 93.2499 9.16263C93.4626 9.7677 93.5673 10.44 93.5673 11.1576C93.5673 11.8393 93.4516 12.4928 93.2218 13.1088V13.1088ZM95.7468 4.25332C94.8478 3.44657 93.7643 2.81805 92.526 2.3881C91.2909 1.95502 89.915 1.73926 88.4407 1.73926H80.5186V20.6057H88.4673C89.9275 20.6057 91.2925 20.3868 92.526 19.9569C93.7627 19.5253 94.8478 18.8921 95.7468 18.076C96.6564 17.2467 97.3787 16.2329 97.8653 15.1023C98.3734 13.9469 98.6298 12.621 98.6298 11.1576C98.6298 9.69421 98.3734 8.36995 97.8653 7.21298C97.3809 6.08518 96.6582 5.07553 95.7468 4.25332V4.25332ZM106.403 13.556L108.683 6.82055L110.963 13.556H106.403ZM111.766 1.73926H105.601L98.5376 20.5056L98.4985 20.6088H104.135L105.06 17.915H112.334L113.261 20.6088H118.896L111.785 1.78929L111.766 1.73926Z",
                    fill: n
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M130.904 1.29614L126.933 8.1254L122.929 1.3321L122.907 1.29614H117.284L124.445 12.5641V20.1641H129.423V12.5641L136.557 1.29614H130.904Z",
                    fill: n
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M36.7698 19.8269C36.3758 10.0176 28.2997 2.18774 18.3943 2.18774C8.55612 2.18774 0.520644 9.91287 0.0250223 19.6267C0.00806966 19.9444 -0.00027193 20.2624 6.75736e-06 20.5805H4.7686C4.7686 20.2724 4.77955 19.9629 4.80065 19.658C5.27751 12.5739 11.1906 6.95712 18.3935 6.95712C25.623 6.95712 31.5556 12.6169 31.9918 19.7393C32.009 20.0184 32.0176 20.2975 32.0176 20.5797H36.7862C36.7862 20.3295 36.7815 20.0754 36.7706 19.8269",
                    fill: i
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.3946 8.31824C11.8929 8.31824 6.57479 13.3776 6.1589 19.7722C6.13936 20.038 6.13232 20.3077 6.13232 20.5798H10.9009C10.9009 20.2882 10.9173 19.9974 10.951 19.7128C11.3817 15.9902 14.5571 13.0868 18.3939 13.0868C22.2525 13.0868 25.4397 16.0183 25.8438 19.7699C25.8735 20.0365 25.8876 20.3054 25.8876 20.5798H30.6562C30.6562 20.3171 30.6484 20.0607 30.632 19.8012C30.2301 13.3917 24.9042 8.31824 18.3939 8.31824",
                    fill: i
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.3943 14.4502C17.5891 14.4501 16.7917 14.6086 16.0477 14.9168C15.3038 15.2249 14.6278 15.6766 14.0585 16.246C13.4891 16.8155 13.0375 17.4915 12.7295 18.2355C12.4214 18.9795 12.263 19.7769 12.2632 20.5821H24.5247C24.5249 19.777 24.3665 18.9796 24.0585 18.2357C23.7505 17.4917 23.299 16.8157 22.7297 16.2463C22.1605 15.6769 21.4846 15.2252 20.7407 14.917C19.9968 14.6088 19.1995 14.4502 18.3943 14.4502",
                    fill: i
                })]
            })
        };
        s.propTypes = {
            sunriseColor: n().string,
            textColor: n().string,
            height: n().string,
            width: n().string
        };
        let r = s
    }
    ,
    83724: e => {
        e.exports = {
            container: "styles_container__RAR5D",
            name: "styles_name__oT6sx",
            hover: "styles_hover__IPZoK",
            image: "styles_image__HwKWk",
            nameContainer: "styles_nameContainer__jTG6T",
            jobTitle: "styles_jobTitle__XWYoT"
        }
    }
    ,
    84042: () => {}
    ,
    86029: (e, M, i) => {
        "use strict";
        i.d(M, {
            e: () => C
        });
        var t = i(20294)
          , o = i(37876)
          , n = i(14232)
          , s = i(15039)
          , r = i.n(s)
          , N = i(87673)
          , l = i(45526)
          , a = i(9874)
          , c = i(31310)
          , d = i(17667)
          , j = i.n(d)
          , D = i(97247)
          , g = i(83724)
          , u = i.n(g);
        function I(e) {
            var M = e.imageURL
              , i = e.jobTitle
              , t = e.linkURL
              , n = e.name;
            return (0,
            o.jsx)(D.H, {
                href: t,
                children: (0,
                o.jsxs)("div", {
                    className: r()(u().container, (0,
                    l._)({}, u().hover, t)),
                    "data-testid": "author-card",
                    children: [M ? (0,
                    o.jsx)(c.V, {
                        url: M,
                        responsiveFlavors: {
                            s: a.Ay.FOCAL_100x100,
                            m: a.Ay.FOCAL_100x100,
                            l: a.Ay.FOCAL_100x100
                        },
                        className: u().image
                    }) : (0,
                    o.jsx)("img", {
                        src: j(),
                        alt: n,
                        className: u().image
                    }), (0,
                    o.jsxs)("div", {
                        className: u().nameContainer,
                        children: [(0,
                        o.jsx)("p", {
                            className: u().name,
                            children: n
                        }), i && (0,
                        o.jsx)("p", {
                            className: u().jobTitle,
                            children: i
                        })]
                    })]
                })
            })
        }
        var z = i(55497)
          , T = i(54707)
          , y = i(85993)
          , A = i(87992)
          , x = i(67654)
          , L = i.n(x);
        function C(e) {
            var M = e.authors
              , i = e.className
              , s = e.createdAt
              , l = e.orgName
              , a = e.orgUrl
              , c = e.publishedAt
              , d = e.source
              , j = (0,
            t._)(n.useState(!1), 2)
              , D = j[0]
              , g = j[1]
              , u = (0,
            n.useContext)(A.xo)
              , x = u.isS
              , C = u.isSorM
              , w = (void 0 === M ? [] : M).filter(function(e) {
                return (null == e ? void 0 : e.authorType) === "author"
            })
              , O = w.filter(function(e) {
                var M;
                return null == e ? void 0 : null === (M = e.person) || void 0 === M ? void 0 : M.name.toLowerCase().includes("paid for by")
            })
              , v = function(e, M, i) {
                if (!(null == e ? void 0 : e.length))
                    return {
                        displayedAuthors: [],
                        expandableAuthors: []
                    };
                var t = M ? 1 : 2
                  , o = function(e) {
                    return {
                        displayedAuthors: e.slice(0, t),
                        expandableAuthors: e.slice(t)
                    }
                };
                return o(i ? [i].concat((0,
                y._)(e.filter(function(e) {
                    return e !== i
                }))) : e)
            }(w, void 0 !== x && x, O[0])
              , p = v.displayedAuthors
              , E = v.expandableAuthors;
            function k(e) {
                var M, i, t, n;
                return (null == e ? void 0 : null === (M = e.person) || void 0 === M ? void 0 : M.name) ? (0,
                o.jsx)(I, {
                    name: e.person.name,
                    linkURL: null === (i = e.person.url) || void 0 === i ? void 0 : i.primary,
                    imageURL: null === (n = e.person.primaryImage) || void 0 === n ? void 0 : null === (t = n.url) || void 0 === t ? void 0 : t.primary,
                    jobTitle: e.person.jobTitle[0]
                }, e.person.name) : null
            }
            return (0,
            o.jsxs)("section", {
                className: r()(i, L().container),
                "data-testid": "expandable-byline",
                "data-activity-map": "inline-byline-article-top",
                children: [(0,
                o.jsx)(z.T, {
                    dateCreated: s,
                    datePublished: c,
                    orgName: l,
                    orgUrl: a,
                    showCreatedDate: s === c,
                    source: d,
                    testId: "expandable-byline__timestamp"
                }), (0,
                o.jsxs)("div", {
                    className: "relative",
                    children: [w.length > 0 && (0,
                    o.jsx)("div", {
                        className: L().displayedAuthors,
                        children: p.map(k)
                    }), E.length > 0 && (0,
                    o.jsx)(N.n, {
                        title: D ? "collapse" : "+ ".concat(E.length, " more"),
                        openDirection: "up",
                        isOpen: D,
                        onToggle: function() {
                            return g(function(e) {
                                return !e
                            })
                        },
                        additionalStyles: {
                            accordion: L().accordion,
                            accordion__header: L().showMoreButton,
                            accordion__content: L().expandableAuthors
                        },
                        onKeyDown: function(e) {
                            ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation()
                        },
                        children: (0,
                        o.jsx)("div", {
                            className: L().list,
                            children: E.map(k)
                        })
                    }), !(void 0 !== C && C) && (0,
                    o.jsx)(T.G, {})]
                })]
            })
        }
    }
}]);
