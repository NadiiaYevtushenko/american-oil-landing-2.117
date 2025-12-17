(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7063], {
    367: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => r
        });
        let r = {
            getAndroidBridge: function() {
                return "undefined" != typeof StoryJsInterface ? StoryJsInterface : null
            },
            getIosBridge: function() {
                var e = window.webkit;
                return void 0 !== e ? e : null
            },
            trackPageView: function(e) {
                var t = this.getAndroidBridge();
                if (t)
                    try {
                        return t.trackPageView(e),
                        "android"
                    } catch (e) {
                        return e
                    }
                var n = this.getIosBridge();
                if (n)
                    try {
                        return n.messageHandlers.trackPageView.postMessage(e),
                        "ios"
                    } catch (e) {
                        return e
                    }
                return null
            },
            viewShort: function(e, t) {
                var n = this.getAndroidBridge();
                if (n)
                    try {
                        return n.viewShort(JSON.stringify({
                            videoId: e,
                            packageVideoIds: t
                        })),
                        "android"
                    } catch (e) {
                        return e
                    }
                var r = this.getIosBridge();
                if (r)
                    try {
                        return r.messageHandlers.viewShort.postMessage(JSON.stringify({
                            videoId: e,
                            packageVideoIds: t
                        })),
                        "ios"
                    } catch (e) {
                        return e
                    }
                return null
            },
            viewVideo: function(e) {
                var t = this.getAndroidBridge();
                if (t)
                    try {
                        return t.viewVideo(e),
                        "android"
                    } catch (e) {
                        return e
                    }
                var n = this.getIosBridge();
                if (n)
                    try {
                        return n.messageHandlers.viewVideo.postMessage(e),
                        "ios"
                    } catch (e) {
                        return e
                    }
                return null
            },
            viewFullScreenLiveStream: function(e) {
                if (e)
                    try {
                        return e.messageHandlers.viewFullScreenLiveStream.postMessage(""),
                        "ios"
                    } catch (e) {
                        return e
                    }
                return null
            },
            getVideoStatus: function(e) {
                window.addEventListener("videoStatusChange", function(t) {
                    var n, r = null == t ? void 0 : null === (n = t.detail) || void 0 === n ? void 0 : n.videoStatus;
                    r && e(r)
                })
            },
            playbackAction: function(e) {
                window.addEventListener("requestPlaybackAction", function(t) {
                    var n, r = null == t ? void 0 : null === (n = t.detail) || void 0 === n ? void 0 : n.playbackAction;
                    r && e(r)
                })
            },
            pipStatus: function(e) {
                var t = this.getIosBridge();
                if (t)
                    try {
                        return t.messageHandlers.pipStatus.postMessage(e),
                        "ios"
                    } catch (e) {
                        return e
                    }
                return null
            }
        }
    }
    ,
    1749: (e, t, n) => {
        "use strict";
        n.d(t, {
            T: () => l,
            v: () => m
        });
        var r = n(67684)
          , a = n(62701)
          , i = n(65699)
          , s = n(37876)
          , o = n(14232)
          , c = n(48011)
          , d = n(59331)
          , u = n(48148)
          , l = {
            TRANSPARENT: "transparent",
            TRANSPARENT_LIGHT: "transparentLight",
            LIGHT: "light",
            DARK: "dark",
            VERTICAL: "vertical"
        }
          , v = function(e, t, n) {
            e && n(e({
                content: t
            }))
        }
          , f = function(e, t, n) {
            e && n(e({
                content: t
            }))
        }
          , g = function(e, t, n, r, a, i) {
            e && i(e({
                content: t,
                path: n,
                section: r,
                vertical: a
            }))
        }
          , h = function(e, t) {
            e <= -1 || t(e)
        }
          , p = (0,
        c.Ng)(function(e, t) {
            var n, r, a, i, s = e.navbar.active, o = e.article, c = e.front, d = e.recipe, u = e.slideshow, l = e.video, v = t.pageView, f = t.path, g = t.section, h = t.vertical, p = {};
            switch (v) {
            case "article":
            case "showBlog":
                p = null !== (r = null == o ? void 0 : null === (n = o.content) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : {};
                break;
            case "front":
                p = c;
                break;
            case "recipe":
                p = null !== (a = null == d ? void 0 : d.current) && void 0 !== a ? a : {};
                break;
            case "slideshow":
                p = null !== (i = null == u ? void 0 : u.current) && void 0 !== i ? i : {};
                break;
            case "video":
                p = l;
                break;
            default:
                p = {}
            }
            return {
                navbarActive: s,
                navbarContent: p,
                pageView: v,
                path: f,
                section: g,
                vertical: h
            }
        }, function(e) {
            return {
                navbarActivate: function() {
                    return e((0,
                    d.Yf)())
                },
                navbarDeactivate: function() {
                    return e((0,
                    d.LU)())
                },
                navbarSetShortcutVisible: function(t) {
                    return e((0,
                    d.Vm)(t))
                },
                navbarSetHeadline: function(t) {
                    return e((0,
                    d.Zb)(t))
                },
                navbarSetTheme: function(t) {
                    return e((0,
                    d.Yl)(t))
                },
                navbarSetDuration: function(t) {
                    return e((0,
                    d.rU)(t))
                }
            }
        })((0,
        o.memo)(function(e) {
            var t = e.children
              , n = e.Page
              , c = e.getActiveAt
              , d = e.getHeadline
              , l = e.getShowShortcuts
              , p = e.getTheme
              , m = e.localAnimationDuration
              , b = (0,
            i._)(e, ["children", "Page", "getActiveAt", "getHeadline", "getShowShortcuts", "getTheme", "localAnimationDuration"])
              , y = (0,
            o.useRef)(!1)
              , x = b.navbarActive
              , j = void 0 !== x && x
              , _ = b.navbarActivate
              , S = b.navbarContent
              , T = b.navbarDeactivate
              , w = b.navbarSetHeadline
              , A = b.navbarSetShortcutVisible
              , k = b.navbarSetTheme
              , I = b.navbarSetDuration
              , E = b.path
              , N = b.section
              , R = b.vertical
              , C = (0,
            o.useMemo)(function() {
                return Object.keys(b).filter(function(e) {
                    return -1 === e.search(/^navbar[A-Z]/)
                }).reduce(function(e, t) {
                    return e[t] = null == b ? void 0 : b[t],
                    e
                }, {})
            }, [b]);
            return (0,
            o.useEffect)(function() {
                y.current = !0
            }, []),
            y.current || (v(d, S, w),
            f(l, S, A),
            g(p, S, E, N, R, k),
            h(m, I)),
            (0,
            o.useEffect)(function() {
                if (c) {
                    var e = "function" == typeof c ? c({
                        vertical: R,
                        navbarContent: S
                    }) : c;
                    if (e) {
                        var t = function(t) {
                            if (t > e && !j) {
                                _();
                                return
                            }
                            t < e && j && T()
                        };
                        return u.A.on("scroll", t, "throttle"),
                        function() {
                            u.A.remove("scroll", t, "throttle")
                        }
                    }
                }
            }, [j, c, R, S, _, T]),
            (0,
            s.jsx)(n, (0,
            a._)((0,
            r._)({}, C), {
                children: t
            }))
        }, function() {
            return !1
        }))
          , m = function(e) {
            var t = e.activeAt
              , n = e.setDuration
              , a = e.headline
              , i = e.showShortcuts
              , o = e.theme;
            return function(e) {
                var c = function(c) {
                    return (0,
                    s.jsx)(p, (0,
                    r._)({
                        getActiveAt: t,
                        getHeadline: a,
                        getShowShortcuts: i,
                        getTheme: o,
                        localAnimationDuration: n,
                        Page: e
                    }, c))
                };
                return c.getInitialProps = e.getInitialProps,
                c
            }
        }
    }
    ,
    17327: () => {}
    ,
    24276: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => i
        });
        var r = n(95062)
          , a = n.n(r);
        let i = a().shape({
            header: a().shape({
                css: a().shape({
                    link: a().arrayOf(a().string)
                }),
                js: a().shape({
                    html: a().arrayOf(a().string),
                    src: a().arrayOf(a().string)
                }),
                html: a().arrayOf(a().string)
            }),
            footer: a().shape({
                css: a().shape({
                    link: a().arrayOf(a().string)
                }),
                js: a().shape({
                    html: a().arrayOf(a().string),
                    src: a().arrayOf(a().string)
                }),
                html: a().arrayOf(a().string)
            })
        })
    }
    ,
    87063: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            UnwrappedErrorPage: () => L,
            default: () => q,
            navbarConfig: () => O,
            validatedStatusCode: () => H
        });
        var r = n(16927)
          , a = n(67684)
          , i = n(62701)
          , s = n(4902)
          , o = n(37876)
          , c = n(14232)
          , d = n(95062)
          , u = n.n(d)
          , l = n(77328)
          , v = n.n(l)
          , f = n(15039)
          , g = n.n(f)
          , h = n(39324)
          , p = n.n(h)
          , m = n(48011)
          , b = n(62256)
          , y = {
            entretenimiento: "telemundo",
            msnbc: "msnbc",
            news: "nbcnews",
            noticias: "telemundo",
            deportes: "telemundo",
            select: "select",
            shows: "telemundo",
            telemundo: "telemundo",
            today: "today"
        }
          , x = function(e, t) {
            return "https://nodeassets.nbcnews.com/cdnassets/projects/ramen/favicon/".concat(y[e] || y.news, "/all-other-sizes-PNG.ico/").concat(t)
        };
        function j(e) {
            var t, n = e.pageType, r = (0,
            c.useContext)(b.O);
            return (0,
            o.jsxs)(v(), {
                children: [(0,
                o.jsx)("link", {
                    rel: "shortcut icon",
                    type: "image/x-icon",
                    href: x(r, "favicon.ico")
                }), (0,
                o.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: x(r, "favicon-16x16.png")
                }), (0,
                o.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: x(r, "favicon-32x32.png")
                }), (0,
                o.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: x(r, "favicon-96x96.png")
                }), (0,
                o.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            "@context": {
                                "@vocab": "http://schema.org",
                                pageType: {
                                    "@id": "Text",
                                    "@type": "@id"
                                },
                                vertical: {
                                    "@id": "Text",
                                    "@type": "@id"
                                },
                                subVertical: {
                                    "@id": "Text",
                                    "@type": "@id"
                                },
                                section: {
                                    "@id": "Text",
                                    "@type": "@id"
                                },
                                subSection: {
                                    "@id": "Text",
                                    "@type": "@id"
                                },
                                packageId: {
                                    "@id": "Text",
                                    "@type": "@id"
                                },
                                sponsor: {
                                    "@id": "Text",
                                    "@type": "@id"
                                }
                            },
                            "@type": "Dataset",
                            pageType: (t = {
                                pageType: n,
                                vertical: r
                            }).pageType,
                            vertical: t.vertical,
                            subVertical: "",
                            section: "",
                            subSection: "",
                            packageId: "",
                            sponsor: ""
                        })
                    }
                })]
            })
        }
        j.propTypes = {
            pageType: u().string.isRequired
        };
        var _ = n(34846)
          , S = n(68745)
          , T = n(20309);
        n(17327);
        var w = function(e) {
            var t = e.vertical
              , n = e.code
              , r = (0,
            _.Bd)().t
              , a = r("ERROR_H1_".concat(n))
              , i = (0,
            o.jsx)("a", {
                href: "/".concat((0,
                S.A)(t)),
                className: "error-message__text--branded",
                children: (0,
                T.getDisplayNameForVertical)(t)
            })
              , s = r("ERROR_TEXT_".concat(n)).split("{{link}}");
            return s.splice(1, 0, i),
            (0,
            o.jsxs)("div", {
                className: "error-message",
                children: [(0,
                o.jsxs)("div", {
                    className: "error-message__headline-container",
                    children: [(0,
                    o.jsx)("h1", {
                        className: "error-message__headline",
                        children: a
                    }), (0,
                    o.jsx)("div", {
                        className: "error-message__headline-pattern"
                    })]
                }), (0,
                o.jsx)("div", {
                    className: "error-message__text-container",
                    children: (0,
                    o.jsx)("p", {
                        className: "error-message__text",
                        children: c.Children.toArray(s)
                    })
                })]
            })
        };
        w.propTypes = {
            vertical: u().string.isRequired,
            code: u().number.isRequired
        };
        var A = n(54601)
          , k = n(97776)
          , I = n(43914)
          , E = n(61629)
          , N = n(1749)
          , R = n(24276)
          , C = n(90479)
          , P = n.n(C)
          , V = "true" === p()().publicRuntimeConfig.ENABLE_ERROR_PAGE_PREVIEW
          , D = {
            403: "Forbidden",
            404: "NotFound",
            500: "InternalServerError"
        }
          , O = {
            theme: function(e) {
                switch (e.vertical) {
                case "telemundo":
                case "deportes":
                case "localstationdeportes":
                case "noticias":
                case "entretenimiento":
                case "shows":
                case "news":
                case "select":
                case "msnbc":
                    return N.T.VERTICAL;
                default:
                    return N.T.LIGHT
                }
            }
        }
          , H = function(e) {
            return Object.keys(D).includes("".concat(e)) ? e : 500
        };
        function L(e) {
            var t, n, r = e.statusCode, s = e.vertical, c = e.layout, d = !e.isChromeless && Object.keys(null != c ? c : {}).length > 0;
            return (0,
            o.jsxs)("div", {
                className: g()(P().container),
                "data-testid": "error-page",
                children: [(t = function() {
                    return (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        o.jsx)(v(), {
                            children: (0,
                            o.jsx)(I.A, {})
                        }), (0,
                        o.jsx)(E.W, {
                            vertical: s
                        }), (0,
                        o.jsxs)("div", {
                            children: [(0,
                            o.jsx)(j, {
                                pageType: D[r] || D[500]
                            }), (0,
                            o.jsx)(w, {
                                code: r,
                                vertical: s
                            })]
                        })]
                    })
                }
                ,
                n = (0,
                i._)((0,
                a._)({}, c), {
                    marquees: []
                }),
                d ? (0,
                o.jsx)(A.q, {
                    layout: n,
                    vertical: s,
                    children: (0,
                    o.jsx)(t, {})
                }) : (0,
                o.jsx)(t, {})), (0,
                o.jsx)(k.I, {})]
            })
        }
        L.propTypes = {
            isChromeless: u().bool.isRequired,
            statusCode: u().number.isRequired,
            vertical: u().string.isRequired,
            layout: R.Z.isRequired
        },
        L.getInitialProps = function() {
            var e = (0,
            r._)(function(e) {
                var t, n, r, a, i, o, c, d, u;
                return (0,
                s.__generator)(this, function(s) {
                    return t = e.req,
                    n = e.res,
                    r = e.err,
                    V && (a = (null == t ? void 0 : null === (i = t.params) || void 0 === i ? void 0 : i.statusCode) && parseInt(null == t ? void 0 : null === (o = t.params) || void 0 === o ? void 0 : o.statusCode, 10)),
                    c = a || (null == n ? void 0 : n.statusCode),
                    d = null == r ? void 0 : r.statusCode,
                    u = n.locals.layout,
                    [2, {
                        statusCode: H(c || d),
                        layout: u
                    }]
                })
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        let q = (0,
        N.v)(O)((0,
        m.Ng)(function(e) {
            var t = e.shared;
            return {
                vertical: t.vertical,
                isChromeless: t.isChromeless
            }
        })(L))
    }
    ,
    97776: (e, t, n) => {
        "use strict";
        n.d(t, {
            I: () => g
        });
        var r = n(37876);
        n(14232);
        var a = n(39324)
          , i = n.n(a)
          , s = n(95062)
          , o = n.n(s)
          , c = n(86369)
          , d = n.n(c)
          , u = n(367)
          , l = n(45105)
          , v = n.n(l)
          , f = n(89099);
        function g(e) {
            var t, n = (0,
            f.useRouter)(), a = e.isChromeless, s = void 0 !== a && a, o = e.pageID, c = void 0 === o ? "" : o, l = i()().publicRuntimeConfig.dev, g = n && n.query.adobeLaunchEnv ? n.query.adobeLaunchEnv : l ? "Staging" : "Production", h = s ? {
                Staging: "//assets.adobedtm.com/a2ef59fba8e9/cc4d79a84dbc/launch-486f773164c9-staging.min.js",
                Production: "//assets.adobedtm.com/a2ef59fba8e9/cc4d79a84dbc/launch-090c00ff8651.min.js"
            } : {
                Dev_1: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-EN2e599cbd777a4ccfbbeced35f4cb44ce-development.min.js",
                Dev_2: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-EN333a0d1b6e5f4ec78664fb6291f53814-development.min.js",
                Dev_3: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-4d8583682bc8-development.min.js",
                Dev_4: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-938016caa262-development.min.js",
                Dev_5: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-12c0ac7b9b78-development.min.js",
                TelemundoTest: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-EN6027f91084de4c6283d895babece1603-development.min.js",
                TagTesting: "//assets.adobedtm.com/a2ef59fba8e9/0c702136bee3/launch-3ee417934b8e-development.min.js",
                Staging: "//assets.adobedtm.com/launch-EN73ef4bfbb64046d89ea9b8f64998688c-staging.min.js",
                Production: "//assets.adobedtm.com/launch-EN03682f66064449c8b87d78eae3e2fc57.min.js"
            }, p = null !== (t = h[g]) && void 0 !== t ? t : h.Production;
            if (s && c) {
                var m = "window.__MobileApi = ".concat(d()(u.A), "; __MobileApi.trackPageView('").concat(c, "');");
                return (0,
                r.jsx)(v(), {
                    id: "mobile-api-launch",
                    strategy: "beforeInteractive",
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })
            }
            return (0,
            r.jsx)(v(), {
                id: "adobe-launch",
                src: p,
                strategy: "beforeInteractive"
            })
        }
        g.propTypes = {
            isChromeless: o().bool,
            pageID: o().string
        }
    }
}]);
