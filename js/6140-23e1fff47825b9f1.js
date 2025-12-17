(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6140], {
    92: (e, t, n) => {
        "use strict";
        n.d(t, {
            Dp: () => _,
            H7: () => u,
            ZE: () => d
        });
        var i = n(85993)
          , a = n(85401)
          , r = n.n(a)
          , s = n(84921)
          , l = n.n(s)
          , o = n(89903)
          , c = n(96491)
          , d = "taboolaRecoReel";
        function u(e) {
            var t = e.adsEnabled
              , n = e.breakingNews
              , a = e.isLiveBlog
              , s = e.taboolaRecoReelEnabled
              , u = e.vertical;
            return !s || !t || n || a ? function(e) {
                return e
            }
            : function(e) {
                var t, n = e.reduce(function(e, t) {
                    return e + +((null == t ? void 0 : t.type) === "markup" && (null == t ? void 0 : t.element) === "p")
                }, 0), a = (0,
                o.B0)(c.TABOOLA_RECO_REEL, u), s = a.onlyIfParagraphsCount, _ = a.displayAfter, m = a.inverted;
                if (n < s)
                    return e;
                var p = {
                    body: e,
                    displayAfter: _
                }
                  , v = m ? function(e) {
                    var t = e.body
                      , n = e.displayAfter;
                    if (0 === n)
                        return t.length;
                    var i = 0;
                    return r()(t, function(e) {
                        return (null == e ? void 0 : e.type) === "markup" && (null == e ? void 0 : e.element) === "p" && (i += 1),
                        i === n
                    })
                }(p) : function(e) {
                    var t = e.body
                      , n = e.displayAfter;
                    if (0 === n)
                        return t.length;
                    var i = 0;
                    return l()(t, function(e) {
                        return (null == e ? void 0 : e.type) === "markup" && (null == e ? void 0 : e.element) === "p" && (i += 1),
                        i === n
                    })
                }(p);
                if (-1 === v)
                    return e;
                var h = e[(v = m ? v : v + 1) - 1];
                return v = (null == h ? void 0 : null === (t = h.presentation) || void 0 === t ? void 0 : t.size) === "small" ? v + 1 : v,
                (0,
                i._)(e.slice(0, v)).concat([{
                    type: d
                }], (0,
                i._)(e.slice(v)))
            }
        }
        function _(e) {
            var t = (0,
            o.B0)(c.TABOOLA_RECO_REEL, e);
            return !!t || t
        }
    }
    ,
    1514: e => {
        e.exports = {
            contentModule: "styles_contentModule__UxeOS",
            header: "styles_header__JG2vL",
            headline: "styles_headline__i_WGZ",
            description: "styles_description__9dBzM",
            footer: "styles_footer__8p5NY",
            timestamp: "styles_timestamp__d2toX",
            news: "styles_news__i8qBY",
            liveBlog: "styles_liveBlog__8VUTe",
            msnbc: "styles_msnbc__oqOBI",
            today: "styles_today__1xcqe",
            "live-dot-blink": "styles_live-dot-blink__3a5pS",
            "fade-in": "styles_fade-in__ZOF48",
            "expand-in": "styles_expand-in__nxvC4",
            "chatblog-expand-in": "styles_chatblog-expand-in__895Qn"
        }
    }
    ,
    2888: e => {
        e.exports = {
            carouselContainer: "styles_carouselContainer___FFWD",
            carousel: "styles_carousel__ySCrc",
            track: "styles_track__jT04T",
            slide: "styles_slide__TD_Jh",
            headline: "styles_headline__KkEmW",
            carouselDots: "styles_carouselDots__vqO7o",
            carouselDot: "styles_carouselDot__WfN7Z",
            active: "styles_active__ZOfEG",
            inactive: "styles_inactive__FQLxl",
            "live-dot-blink": "styles_live-dot-blink___U3rd",
            "fade-in": "styles_fade-in__Ly7xO",
            "expand-in": "styles_expand-in__126kj",
            "chatblog-expand-in": "styles_chatblog-expand-in__G7KMF"
        }
    }
    ,
    3499: e => {
        e.exports = {
            prosConsContainer: "styles_prosConsContainer__eA03S",
            isOde: "styles_isOde__kg6fj",
            select: "styles_select__DujrP",
            prosConsChild: "styles_prosConsChild__YO7KF",
            prosConsLabel: "styles_prosConsLabel__iovUC",
            prosConsItems: "styles_prosConsItems__WdrkZ",
            prosConsFallback: "styles_prosConsFallback__UDzfI",
            "live-dot-blink": "styles_live-dot-blink__P56L0",
            "fade-in": "styles_fade-in__FzeUH",
            "expand-in": "styles_expand-in__9_9kC",
            "chatblog-expand-in": "styles_chatblog-expand-in__0TMBE"
        }
    }
    ,
    6108: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => C
        });
        var i = n(37876);
        n(14232);
        var a = n(39324)
          , r = n.n(a)
          , s = n(48011)
          , l = n(95062)
          , o = n.n(l)
          , c = n(86369)
          , d = n.n(c)
          , u = n(45105)
          , _ = n.n(u)
          , m = n(67684)
          , p = n(20309);
        let v = JSON.parse('{"news":"/nbcnews","mach":"/nbcnews/mach","better":"/nbcnews/better","think":"/nbcnews/think","globalcitizen":"/nbcnews/globalcitizen","today":"/today","msnbc":"/msnbc","sponsoredcontent":"/nbcnews","telemundo":"/nbcu.telemundo/telemundo","noticias":"/nbcu.telemundo/noticias","deportes":"/nbcu.telemundo/deportes","shows":"/nbcu.telemundo/shows","entretenimiento":"/nbcu.telemundo/entretenimiento"}');
        var h = n(81481)
          , f = function(e) {
            return e.replace(/-/g, "")
        }
          , g = function(e) {
            return /^\/(\?.*|$)/.test(e)
        }
          , y = function(e, t) {
            return "article" === e && "today" === t
        };
        function x(e) {
            var t;
            return f((t = {},
            e.forEach(function(e) {
                !t[e] && (t[e] = !0)
            }),
            Object.keys(t)).join("|"))
        }
        let b = function(e) {
            var t, n, i, a, s, l, o, c, d, u, _, b, w, j, N, C, T, A, k, L, I, S, O, E, R, P, F, M, D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, B = r()().publicRuntimeConfig, U = B.DFP_AD_UNIT, H = B.MPS_URL_TELEMUNDO, q = B.MPS_URL_NBCNEWS, z = e.vertical, V = D.provider, W = void 0 === V ? "mps" : V, G = D.dfpAdUnit, K = D.mpsUrl, Y = void 0 === K ? (0,
            p.isTelemundoVertical)(z) ? H : q : K, Z = (A = e.currentPath,
            k = e.pageView,
            L = e.vertical,
            I = e.section,
            S = e.topic,
            O = e.subTopic,
            E = (void 0 === G ? U : G) + v[L],
            g(void 0 === A ? "" : A) && (E += "/homepage"),
            I && ("news" === L && "news" === I ? E += "/".concat(S) : E += "/".concat(I)),
            y(k, L) && (S && (E += "/".concat(S)),
            O && (E += "/".concat(O))),
            f(E));
            return {
                provider: W,
                preprocessors: (R = e.canonicalUrl,
                P = e.pageView,
                F = {
                    xfinity: !0
                },
                "gpt" !== W || (F.krux = {
                    id: "Hhr_tdFP"
                },
                "article" === P && (F.admantx = {
                    url: R,
                    id: "62263fff3cc1d07f85c7f8261a0c8f7dc096b35f59c82a713f20a9db8d562ff2"
                })),
                F),
                targeting: (t = e,
                n = Z,
                i = t.pageView,
                a = t.vertical,
                s = t.show,
                l = t.label,
                o = t.series,
                c = t.targeting,
                d = t.isChromeless,
                b = (_ = void 0 === (u = t.article) ? {} : u).ecommerceEnabled,
                w = _.sentiment,
                j = "bento",
                "article" === i && d && (j = "app"),
                b && (i = "ecommerce"),
                N = "nbcnews-bento",
                (0,
                p.isTelemundoVertical)(a) && (N = "telemundo-bento"),
                C = (0,
                m._)({
                    site: N,
                    type: "".concat(j).concat(i || ""),
                    pageid: function(e) {
                        var t, n = e.currentPath, i = void 0 === n ? "" : n, a = e.pageView, r = e.article, s = e.video, l = e.slideshow;
                        if (g(i))
                            return "homepage";
                        switch (a) {
                        case "front":
                            t = i.split("?")[0].replace(/[/-]/g, "");
                            break;
                        case "article":
                            t = null == r ? void 0 : r.id;
                            break;
                        case "video":
                            t = null == s ? void 0 : s.id;
                            break;
                        case "slideshow":
                            t = null == l ? void 0 : l.id
                        }
                        return t || null
                    }(t),
                    platform: "ramen",
                    sentiment: w
                }, void 0 === c ? {} : c),
                y(i, a) && (s && (C.show = f(s)),
                l && (C.label = f(l)),
                o && (C.series = f(o))),
                (T = "front" === i ? x(n.split("/").slice(2)) : function(e) {
                    var t = e.article;
                    if (!t || !t.taxonomy)
                        return null;
                    var n = t.taxonomy
                      , i = n.primaryVertical
                      , a = n.anchors
                      , r = n.channels
                      , s = n.courseTypes
                      , l = n.cuisines
                      , o = n.labels
                      , c = n.recipeCategories
                      , d = n.sections
                      , u = n.series
                      , _ = n.shows
                      , m = n.subtopics
                      , p = n.subverticals
                      , v = n.topics
                      , h = n.additionalTerms;
                    return x([].concat(i).concat(a).concat(r).concat(s).concat(l).concat(o).concat(c).concat(d).concat(u).concat(_).concat(m).concat(p).concat(v).concat(h).filter(function(e) {
                        return e
                    }).map(function(e) {
                        return e.slug
                    }))
                }(t)) && (C.targeting = T),
                C),
                refreshInterval: Number.isNaN(M = parseInt(r()().publicRuntimeConfig.DEFAULT_AD_REFRESH_INTERVAL, 10)) ? 30 : M,
                vendors: {
                    gptAdUnitPath: Z,
                    mpsUrl: Y
                },
                breakpoints: [h.L.l, h.L.m, h.L.s]
            }
        };
        var w = n(62701);
        function j(e) {
            var t, n = e || {}, i = n.taxonomy, a = n.url, r = n.nativeAd, s = i || {}, l = s.primaryVertical, o = s.primarySubvertical, c = s.primaryTopic, d = s.primarySection, u = s.primaryShow, _ = s.series, m = (null == o ? void 0 : o.slug) || (null == d ? void 0 : d.slug) || null;
            return {
                isNativeArticle: r,
                vertical: null == l ? void 0 : l.slug,
                topic: null == c ? void 0 : c.slug,
                section: m,
                show: null == u ? void 0 : u.slug,
                series: null == _ ? void 0 : null === (t = _[0]) || void 0 === t ? void 0 : t.slug,
                canonicalUrl: null == a ? void 0 : a.primary
            }
        }
        function N(e) {
            var t = e.state
              , n = e.isArticle
              , a = e.vertical
              , s = r()().publicRuntimeConfig.adsBundlePath
              , l = b(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.shared
                  , n = void 0 === t ? {} : t
                  , i = e.router
                  , a = e.article
                  , r = void 0 === a ? {} : a
                  , s = e.video
                  , l = void 0 === s ? {} : s
                  , o = e.slideshow
                  , c = void 0 === o ? {} : o
                  , d = e.liveBlog
                  , u = void 0 === d ? {} : d
                  , _ = {
                    pageView: n.pageView,
                    currentPath: (void 0 === i ? {} : i).path,
                    vertical: n.vertical,
                    section: n.section,
                    isChromeless: n.isChromeless,
                    article: null == r ? void 0 : null === (p = r.content) || void 0 === p ? void 0 : p[0]
                };
                switch (n.pageView) {
                case "article":
                    var p, v, h = null === (v = r.content) || void 0 === v ? void 0 : v[0];
                    return (0,
                    m._)((0,
                    w._)((0,
                    m._)({}, _), {
                        pageView: "article",
                        article: h
                    }), j(h));
                case "video":
                    return (0,
                    m._)((0,
                    w._)((0,
                    m._)({}, _), {
                        pageView: "video",
                        video: l.current
                    }), j(l.current));
                case "slideshow":
                    return (0,
                    m._)((0,
                    w._)((0,
                    m._)({}, _), {
                        pageView: "slideshow",
                        slideshow: c.current
                    }), j(c.current));
                case "card":
                    return (0,
                    m._)((0,
                    w._)((0,
                    m._)({}, _), {
                        pageView: "card",
                        card: u.card
                    }), j(u.card));
                default:
                    return _
                }
            }(t));
            return l ? (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(_(), {
                    id: "mps-config",
                    strategy: "beforeInteractive",
                    dangerouslySetInnerHTML: {
                        __html: "window.__mpsconfig = ".concat(d()(l), ";window.__isarticle = ").concat(void 0 !== n && n, ";window.__vertical = ").concat(d()(void 0 === a ? "" : a), ";")
                    }
                }), (0,
                i.jsx)(_(), {
                    id: "ads-bundle",
                    src: s
                })]
            }) : null
        }
        N.propTypes = {
            state: o().shape({}).isRequired,
            isArticle: o().bool,
            vertical: o().string
        };
        let C = (0,
        s.Ng)(function(e) {
            return {
                state: e
            }
        })(N)
    }
    ,
    6272: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => j
        });
        var i = n(37876)
          , a = n(14232)
          , r = n(15039)
          , s = n.n(r)
          , l = n(51845)
          , o = n(42336)
          , c = n(10616)
          , d = n(67684)
          , u = n(62701)
          , _ = n(20294)
          , m = n(48011)
          , p = n(89903)
          , v = n(9874)
          , h = n(367)
          , f = n(96491)
          , g = n(97247)
          , y = n(21492)
          , x = n(58415)
          , b = n(94844);
        n(55469);
        let w = (0,
        m.Ng)(function(e) {
            var t = e.shared;
            return {
                vertical: t.vertical,
                isChromeless: t.isChromeless
            }
        })(function(e) {
            var t, n = e.item, a = e.linkTracking, r = e.singleItem, l = e.vertical, o = e.isChromeless, c = e.isTrending, m = void 0 !== c && c, w = e.isNBCNewsCommerce, j = void 0 !== w && w, N = function() {
                var e = n.url;
                return !/\.(nbcnews|think|msnbc)\.com/.test(e)
            }, C = function() {
                var e = n.url;
                return /nbcnews.com\/think\//.test(e)
            }, T = function(e, t) {
                var a, r, s, l = n.url, o = n.unibrow, c = n.label;
                return C() ? (r = "Opinion",
                s = "/opinion") : (null == o ? void 0 : o.text) && (null === (a = o.url) || void 0 === a ? void 0 : a.primary) ? (r = o.text,
                s = o.url.primary) : c ? (r = c,
                s = l) : (r = (0,
                _._)(l.split("/"), 4)[3],
                s = N() ? l : "/".concat(r)),
                (0,
                i.jsx)("a", {
                    className: e,
                    href: s,
                    children: (0,
                    i.jsx)("span", {
                        className: t,
                        children: r
                    })
                })
            }, A = n.title, k = n.type, L = n.thumbnail, I = n.id, S = n.url, O = n.label, E = (0,
            p.B0)(f.TXT_IMG_TANDEM_HOVER, l), R = (null === (t = (0,
            p.B0)(f.MYNEWS_ENABLED, l)) || void 0 === t ? void 0 : t.teaseSaveEnabled) || !1, P = s()("related-item", {
                "related-item__default": !m && !j && "today" === l,
                "related-item__is-trending": m || j,
                "related-item__is-nbc-news-commerce": j,
                "related-item__single": r,
                "related-item__no-art": !L,
                "related-item__has-tandem-hover": E
            }), F = g.A, M = {
                to: S,
                icid: a
            };
            return "video" === k && I && void 0 !== o && o && (F = "button",
            M = {
                onClick: function() {
                    h.A.viewVideo(I)
                }
            }),
            (0,
            i.jsxs)("div", {
                className: P,
                children: [L ? (0,
                i.jsxs)("div", {
                    className: "related-item__thumbnail-wrapper",
                    children: [R && (0,
                    i.jsx)(b.e, {
                        contentId: I,
                        contentType: k,
                        options: {
                            isThumbnail: !0,
                            offset: "s",
                            showCTA: !0
                        }
                    }), (0,
                    i.jsx)(F, (0,
                    u._)((0,
                    d._)({}, M), {
                        className: s()("related-item__link related-item__picture-link"),
                        children: (0,
                        i.jsx)(x.A, {
                            responsiveFlavors: function() {
                                if (r) {
                                    var e = {
                                        m: v.Ay.FOCAL_280x140,
                                        xl: v.Ay.FOCAL_320x160
                                    };
                                    return ["msnbc", "select"].includes(l) ? (0,
                                    d._)({
                                        s: v.Ay.FOCAL_80x80
                                    }, e) : (0,
                                    d._)({
                                        s: v.Ay.FOCAL_60x60
                                    }, e)
                                }
                                return "msnbc" === l ? {
                                    s: v.Ay.FOCAL_80x80
                                } : {
                                    s: v.Ay.FOCAL_60x60,
                                    m: v.Ay.FOCAL_80x80
                                }
                            }(),
                            additionalStyles: {
                                raw: "related-item__thumbnail__image--raw",
                                thumbnail: "related-item__thumbnail__image"
                            },
                            thumbnail: L,
                            label: O,
                            type: k,
                            url: S,
                            originalWidth: 60,
                            originalHeight: 60
                        })
                    })), (0,
                    i.jsxs)("span", {
                        className: s()("related-item__eyebrow", {
                            think: C()
                        }),
                        children: [T("related-item__label", null), (0,
                        i.jsx)(F, (0,
                        u._)((0,
                        d._)({}, M), {
                            children: (0,
                            i.jsx)(y.A, {
                                type: k,
                                className: "related-item__icon",
                                radius: "today" === l
                            })
                        }))]
                    })]
                }) : null, (0,
                i.jsxs)("div", {
                    className: "related-item__info-wrapper",
                    children: [(0,
                    i.jsxs)("h3", {
                        className: "related-item__title",
                        children: [T(s()({
                            think: C()
                        }), "related-item__eyebrow"), (0,
                        i.jsx)(F, (0,
                        u._)((0,
                        d._)({}, M), {
                            className: "related-item__link",
                            children: A
                        }))]
                    }), R && !L && (0,
                    i.jsx)(b.e, {
                        contentId: I,
                        contentType: k,
                        options: {
                            isTitle: !0
                        }
                    })]
                })]
            })
        });
        n(94671);
        let j = function(e) {
            var t = e.additionalClasses
              , n = e.childOfRecommended
              , r = void 0 !== n && n
              , d = e.elementId
              , u = e.isBetterNewsCommerce
              , _ = void 0 !== u && u
              , m = e.isRightRail
              , p = void 0 !== m && m
              , v = e.isTrending
              , h = void 0 !== v && v
              , f = e.isNBCNewsCommerce
              , g = void 0 !== f && f
              , y = e.items
              , x = e.linkTracking
              , b = e.pageRegion
              , j = e.title
              , N = e.isValidNonEcommerceTodayArticle
              , C = void 0 !== N && N
              , T = (0,
            a.useRef)();
            (0,
            a.useEffect)(function() {
                C || (0,
                l.stub)("register", "mbt_mynews_related_inview")
            }, [C]);
            var A = 1 === y.length
              , k = !p
              , L = (0,
            c.$h)({
                componentName: "related",
                pageRegion: void 0 === b ? "article-body" : b,
                componentTitle: j
            });
            return (0,
            i.jsx)(o.A, {
                threshold: 0,
                callback: function(e) {
                    var t;
                    (null == e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.isIntersecting) && !r && (0,
                    l.stub)("track", "mbt_mynews_related_inview", {
                        placement: "body/right-rail"
                    })
                },
                children: (0,
                i.jsxs)("section", {
                    className: s()("related", {
                        "related--trending": h || g,
                        "related--single": A && k
                    }, void 0 === t ? "" : t, "dn-print"),
                    "data-activity-map": r ? null : L,
                    "data-testid": "related",
                    "aria-label": "Related content",
                    ref: T,
                    children: [(0,
                    i.jsx)("h3", {
                        className: s()({
                            related__title: !0,
                            "related__title--trending": h,
                            "related__title--nbcnews-commerce": g,
                            "related__title--betternews-commerce": _
                        }),
                        children: j
                    }), (0,
                    i.jsx)("div", {
                        id: d,
                        className: s()("related__items", {
                            "related__items--vertical": (h || g) && p,
                            "related__items--nbcnews-commerce": g,
                            "related__items--betternews-commerce": _
                        }),
                        children: null == y ? void 0 : y.map(function(e) {
                            return (0,
                            i.jsx)(w, {
                                item: e,
                                linkTracking: x,
                                singleItem: A && k,
                                isTrending: h,
                                isNBCNewsCommerce: g
                            }, e.title)
                        })
                    })]
                })
            })
        }
    }
    ,
    8118: e => {
        e.exports = {
            "product-title": "styles_product-title__J7dfX",
            "product-title__link": "styles_product-title__link__2LVXv",
            "live-dot-blink": "styles_live-dot-blink__TH2It",
            "fade-in": "styles_fade-in__njLX8",
            "expand-in": "styles_expand-in__3Tmt8",
            "chatblog-expand-in": "styles_chatblog-expand-in__N8GR2"
        }
    }
    ,
    8389: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => eo
        });
        var i = n(67684)
          , a = n(20294)
          , r = n(37876)
          , s = n(14232)
          , l = n(15039)
          , o = n.n(l)
          , c = n(11806)
          , d = n(48011)
          , u = n(40625)
          , _ = n(95062)
          , m = n.n(_)
          , p = n(82780)
          , v = n.n(p)
          , h = n(51845)
          , f = n(6272)
          , g = n(34223)
          , y = n(34846)
          , x = n(9874)
          , b = n(61702)
          , w = n(69527)
          , j = n(96491)
          , N = n(97247)
          , C = n(58415)
          , T = n(90327)
          , A = n(94844)
          , k = n(89903)
          , L = n(21737)
          , I = n(82589)
          , S = n.n(I)
          , O = "recommended_giftguide"
          , E = {
            s: x.Ay.FOCAL_100x100,
            l: x.Ay.FOCAL_147x147
        }
          , R = function(e) {
            var t, n = e.items, i = void 0 === n ? [] : n, a = (0,
            y.Bd)().t, s = (0,
            L.Cn)().vertical;
            if (!i || !i.length)
                return null;
            var l = (null === (t = (0,
            k.B0)(j.MYNEWS_ENABLED, s)) || void 0 === t ? void 0 : t.teaseSaveEnabled) || !1;
            return (0,
            r.jsx)("section", {
                className: S().ggWrapper,
                "data-testid": "gift-guide-wrapper",
                children: (0,
                r.jsxs)("div", {
                    className: S().ggInner,
                    children: [(0,
                    r.jsx)("h2", {
                        className: S().title,
                        children: a("Gift Guides")
                    }), (0,
                    r.jsx)("div", {
                        className: S().items,
                        children: i && i.slice(0, 4).map(function(e) {
                            var t = e.label
                              , n = e.thumbnail
                              , i = e.title
                              , a = e.unibrow
                              , s = e.url
                              , o = e.id
                              , c = e.type;
                            return (0,
                            r.jsxs)("div", {
                                className: S().item,
                                "data-testid": "gift-guide-item",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: S().imageContainer,
                                    children: [(0,
                                    r.jsx)(N.A, {
                                        href: s,
                                        className: S().itemThumbnail,
                                        icid: O,
                                        "data-testid": "gift-guide-image",
                                        children: (0,
                                        r.jsx)(C.A, {
                                            label: t,
                                            originalHeight: 100,
                                            originalWidth: 100,
                                            responsiveFlavors: E,
                                            thumbnail: n
                                        })
                                    }), l ? (0,
                                    r.jsx)(A.e, {
                                        contentId: o,
                                        contentType: c,
                                        options: {
                                            isThumbnail: !0,
                                            offset: "s",
                                            showCTA: !0
                                        }
                                    }) : null]
                                }), (0,
                                r.jsx)(T.d, {
                                    unibrow: a,
                                    hasDefaultTextStyle: !0
                                }), (0,
                                r.jsx)("h3", {
                                    className: S().itemTitle,
                                    "data-testid": "gift-guide-item-title",
                                    children: (0,
                                    r.jsx)(N.A, {
                                        href: s,
                                        icid: O,
                                        children: i
                                    })
                                })]
                            }, (0,
                            w.HZ)(i))
                        })
                    })]
                })
            })
        };
        R.propTypes = {
            items: m().arrayOf(b._2)
        },
        n(12387);
        var P = n(10616)
          , F = n(86130)
          , M = n(85993)
          , D = n(81481)
          , B = n(39324)
          , U = n.n(B)
          , H = n(13560)
          , q = H._U.SELECT
          , z = H._U.THINK
          , V = H._U.TODAY
          , W = H._U.TODAY.GIFT_GUIDE
          , G = function(e) {
            var t = e.isGiftGuide
              , n = e.isTrending
              , i = e.isNBCNewsCommerce
              , a = e.isBetterNewsCommerce
              , r = e.isValidNonEcommerceTodayArticle
              , s = e.isSelect;
            return i || !r && n || t || a || s ? 4 : r ? 3 : D.A.isS() ? 1 : 2
        }
          , K = function(e) {
            var t = e.id
              , n = e.type
              , i = v()(e, ["alternateTeaseImages"]) || []
              , a = i.find(function(e) {
                return "ASPECT_1X1" === e.aspectRatio
            })
              , r = i.find(function(e) {
                return "ASPECT_2X1" === e.aspectRatio
            })
              , s = v()(a, ["image", "url", "primary"], null)
              , l = v()(r, ["image", "url", "primary"], null)
              , o = v()(e, ["primaryImage", "url", "primary"])
              , c = {
                url: v()(e, ["unibrow", "url"]),
                text: v()(e, ["unibrow", "text"])
            }
              , d = v()(e, ["headline", "tease"]);
            return {
                id: t,
                url: v()(e, ["url", "primary"]),
                type: n,
                title: d,
                unibrow: c,
                thumbnail: s || l || o
            }
        }
          , Y = function(e) {
            var t, n, i, a = null !== (i = null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : null === (t = n.search) || void 0 === t ? void 0 : t.items) && void 0 !== i ? i : [];
            return a.length,
            a.map(K)
        }
          , Z = function(e, t) {
            var n, a, r;
            return (null !== (r = null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (n = a.curation) || void 0 === n ? void 0 : n.layouts) && void 0 !== r ? r : []).reduce(function(e, t) {
                return (0,
                M._)(t.packages).concat((0,
                M._)(e))
            }, []).filter(function(e) {
                var t, n;
                return null == e ? void 0 : null === (n = e.name) || void 0 === n ? void 0 : null === (t = n.toLowerCase()) || void 0 === t ? void 0 : t.startsWith("shop on the show")
            }).reduce(function(e, t) {
                return (0,
                M._)(e).concat((0,
                M._)(t.items))
            }, []).filter(function(e) {
                return e.id !== t
            }).map(function(e) {
                return (0,
                i._)({}, e, e.item)
            }).slice(0, 4).map(K)
        };
        function X(e) {
            var t = V.SECTION_STYLE
              , n = V.SECTION_FOOD
              , i = V.SECTION_PETS
              , a = V.SECTION_HOME
              , r = V.SECTION_TMRW_TODAY
              , s = V.SECTION_ABOUT
              , l = V.SECTION_INFORMATION
              , o = V.SECTION_PODCASTS
              , c = V.SECTION_GAMES
              , d = V.SECTION_MONEY
              , u = V.SECTION_HEALTH
              , _ = V.SECTION_LIFE
              , m = V.SECTION_KINDNESS
              , p = V.SECTION_PAID_CONTENT
              , v = V.SECTION_PARENTING_GUIDES
              , h = V.SECTION_PARENTS
              , f = V.SECTION_POPCULTURE
              , g = V.SECTION_SEASON_OF_KINDNESS
              , y = V.SECTION_TOGETHER
              , x = V.SECTION_VISIT_TODAY
              , b = V.SHOP_STYLE_TOPIC
              , w = V.SHOP_BEAUTY_TOPIC
              , j = V.SHOP_BESTSELLERS_LABEL
              , N = V.SHOP_DEALS_LABEL
              , C = V.SHOP_CLOTHING_LABEL
              , T = V.SHOP_KITCHEN_TOPIC
              , A = V.SHOP_FOOD_GROCERIES_LABEL
              , k = V.SHOP_COUNTER_TOP_APPLIANCES_LABEL
              , L = V.SHOP_PET_SUPPLIES_LABEL
              , I = V.SHOP_TECH_TOPIC
              , S = V.SHOP_BEDDING_LABEL
              , O = V.SHOP_WELLNESS_LABEL
              , E = V.SHOP_STORAGE_ORGANIZATION_LABEL
              , R = V.SHOP_CELEBRITY_FAVORITES_LABEL
              , P = V.SHOP_AMAZON_PRIME_DAY_TOPIC
              , F = V.SHOP_BLACK_FRIDAY_DEALS_TOPIC
              , M = V.SHOP_LIFESTYLE_FITNESS_TOPIC
              , D = V.SHOP_AMAZON_BESTSELLERS_TOPIC
              , B = V.SHOP_BESTSELLERS_TOPIC
              , U = V.SHOP_GIFT_GUIDES_TOPIC
              , H = V.SHOP_BEAUTY_PRODUCTS_TOPIC
              , q = V.SHOP_KIDS_BABIES_TOPIC
              , z = V.SHOP_FASHION_TOPIC
              , W = V.SHOP_CONSUMER_REPORTS_TOPIC
              , G = V.SHOP_TECH_GADGETS_TOPIC
              , K = V.SHOP_TIKTOK_TOPIC
              , Y = V.SHOP_ALL_DAY_TOPIC
              , Z = V.SHOP_POP_UP_SHOP_TOPIC
              , X = V.SHOP_TODAY_HOLIDAY_PLAZA_TOPIC;
            switch (e) {
            case t:
                return "\n        taxonomy: ".concat(b, "\n        OR taxonomy: ").concat(w, "\n        OR taxonomy: ").concat(j, "\n        OR taxonomy: ").concat(N, "\n        OR taxonomy: ").concat(C, "\n        OR taxonomy: ").concat(P, "\n        OR taxonomy: ").concat(F, "\n      ");
            case n:
                return "\n        taxonomy: ".concat(T, "\n        OR taxonomy:").concat(A, "\n        OR taxonomy: ").concat(k, "\n      ");
            case i:
                return "\n        taxonomy: ".concat(L, "\n        OR taxonomy: ").concat(P, "\n        OR taxonomy: ").concat(F, "\n      ");
            case a:
                return "\n        taxonomy: ".concat(T, "\n        OR taxonomy: ").concat(I, "\n        OR taxonomy: ").concat(S, "\n        OR taxonomy: ").concat(P, "\n        OR taxonomy: ").concat(F, "\n      ");
            case r:
                return "\n        taxonomy: ".concat(O, "\n        OR taxonomy: ").concat(E, "\n        OR taxonomy: ").concat(b, "\n        OR taxonomy: ").concat(w, "\n        OR taxonomy: ").concat(R, "\n        OR taxonomy: ").concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(B, "\n      ");
            case s:
            case l:
            case o:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(D, "\n      ");
            case c:
            case d:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(G, "\n      ");
            case u:
            case _:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(M, "\n      ");
            case p:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(W, "\n        OR taxonomy: ").concat(D, "\n      ");
            case v:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(q, "\n      ");
            case h:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(q, "\n        OR taxonomy: ").concat(U, "\n      ");
            case f:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(H, "\n        OR taxonomy: ").concat(z, "\n        OR taxonomy: ").concat(B, "\n        OR taxonomy: ").concat(K, "\n      ");
            case g:
            case m:
            case y:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(U, "\n      ");
            case x:
                return "\n        taxonomy: ".concat(P, "\n        OR taxonomy: ").concat(F, "\n        OR taxonomy: ").concat(Y, "\n        OR taxonomy: ").concat(Z, "\n        OR taxonomy: ").concat(X, "\n      ");
            default:
                return "taxonomy: ".concat(e)
            }
        }
        var J = function(e) {
            var t, n, i, a, r, s, l, o, c, d, u, _, m, p, v, h, f, g = e.articleID, y = e.isRightRail, x = e.taxonomy, b = (void 0 === x ? {} : x).primaryTopic, w = void 0 === b ? {} : b, j = e.isShopTheShow, N = U()().publicRuntimeConfig.API_URL_BENTO_PUBLIC;
            if (j)
                return "".concat(N, "/curation/taxonomy-terms/today/-1/on-the-show");
            var C = (i = e.isGiftGuide,
            l = void 0 === (s = (r = void 0 === (a = e.taxonomy) ? {} : a).primaryVertical) ? {} : s,
            c = void 0 === (o = r.primaryTopic) ? {} : o,
            u = void 0 === (d = r.primarySection) ? {} : d,
            m = void 0 === (_ = r.topics) ? [] : _,
            p = null == l ? void 0 : l.path,
            v = null !== (t = null == c ? void 0 : c.path) && void 0 !== t ? t : W,
            h = null == u ? void 0 : u.path,
            n = p === q.VERTICAL ? (null != m ? m : []).some(function(e) {
                var t;
                return (null !== (t = null == e ? void 0 : e.path) && void 0 !== t ? t : "") === q.SECTION_PRIME_DAY
            }) ? "taxonomy: ".concat(q.SECTION_PRIME_DAY) : "taxonomy: ".concat(v, "|primary") : p === z.VERTICAL ? "taxonomy: ".concat(z.VERTICAL) : void 0 === h && void 0 !== p ? X(p) : void 0 === h && void 0 === p ? X(h = W) : X(h),
            i && (n = "taxonomy: ".concat(W, "|primary")),
            n)
              , T = G(e)
              , A = null !== (f = null == w ? void 0 : w.path) && void 0 !== f ? f : W
              , k = "type:article AND NOT id:".concat(g, " AND autoCuration:true AND (").concat(C, ")");
            return "".concat(N, "/commerceRecommended?query=").concat(k, "&page=").concat(y || A !== W ? 1 : 2, "&size=").concat(T, "&sort=datePublished:desc")
        }
          , Q = function(e, t) {
            var n = e.articleID
              , i = e.isShopTheShow
              , a = J(e);
            i ? fetch(a).then(function(e) {
                return e.json()
            }).then(function(e) {
                return Z(e, n)
            }).then(t).catch(console.error) : fetch(a).then(function(e) {
                return e.json()
            }).then(Y).then(t).catch(console.error)
        }
          , $ = function(e) {
            var t = e.mobile
              , n = e.isTrending
              , i = e.isGiftGuide
              , a = e.isShopTheShow
              , r = e.isNBCNewsCommerce
              , s = e.isBetterNewsCommerce
              , l = e.isValidNonEcommerceTodayArticle
              , o = e.isSelect;
            return !!n || !!a || !!i || !!r || !!s || !!l || !!o || t && D.A.isSorM() || !t && D.A.isLorXL()
        };
        (0,
        h.stub)("register", "mbt_mynews_recommended_inview");
        var ee = function(e) {
            var t = e.isGiftGuide
              , n = e.isShopTheShow
              , i = e.isTrending
              , a = e.isValidNonEcommerceTodayArticle;
            return n ? c.Ay.t("Shop the Show") : i ? c.Ay.t("Trending") : a ? c.Ay.t("Shop TODAY") : t ? c.Ay.t("Gift Guides") : c.Ay.t("Recommended")
        }
          , et = function(e, t) {
            var n, i = e.additionalClasses, a = e.currentPath, s = e.isBetterNewsCommerce, l = e.isEmbeddedComponent, o = e.isGiftGuide, c = e.isNBCNewsCommerce, d = e.isRightRail, u = e.isShopTheShow, _ = e.isTrending, m = e.isValidNonEcommerceTodayArticle;
            if (!t.length)
                return null;
            var p = ee(e)
              , v = p.toLowerCase();
            return (n = u ? "ShoptheShow" : _ || c ? "recommended_shop" : v,
            o) ? (0,
            r.jsx)(R, {
                items: t,
                "data-testid": "gift-guide"
            }) : $(e) ? (0,
            r.jsx)(f.A, {
                additionalClasses: i,
                currentPath: a,
                elementId: v,
                isBetterNewsCommerce: s,
                isEmbeddedComponent: l,
                isNBCNewsCommerce: c,
                isRightRail: d,
                isTrending: _,
                isValidNonEcommerceTodayArticle: m,
                items: t,
                linkTracking: n,
                title: p,
                childOfRecommended: !0
            }) : null
        }
          , en = function(e, t) {
            e.boundingClientRect.height > 1 && t("track", "mbt_mynews_recommended_inview", {
                placement: "body/right-rail"
            })
        }
          , ei = {
            additionalClasses: "",
            articleID: "",
            isBetterNewsCommerce: !1,
            isEmbeddedComponent: !1,
            isGiftGuide: !1,
            isNBCNewsCommerce: !1,
            isRightRail: !1,
            isTrending: !1,
            isSelect: !1,
            isValidNonEcommerceTodayArticle: !1,
            isShopTheShow: !1,
            lazyLoad: !1,
            mobile: !0,
            pageRegion: "article-sidebar",
            taxonomy: {}
        }
          , ea = function(e, t) {
            var n = (0,
            i._)({}, t);
            return Object.keys(e).forEach(function(t) {
                void 0 !== e[t] && (n[t] = e[t])
            }),
            n
        }
          , er = function(e) {
            var t = ea(e, ei)
              , n = t.dataTestId
              , i = t.isRightRail
              , l = t.lazyLoad
              , c = t.isGiftGuide
              , _ = t.isTrending
              , m = t.isValidNonEcommerceTodayArticle
              , p = t.pageRegion
              , v = (0,
            a._)((0,
            s.useState)([]), 2)
              , f = v[0]
              , g = v[1]
              , y = (0,
            a._)((0,
            u.Wx)({
                initialInView: !l,
                triggerOnce: !0,
                rootMargin: i ? "0px" : "60px 0px"
            }), 2)
              , x = y[0]
              , b = y[1];
            (0,
            s.useEffect)(function() {
                b && Q(t, g)
            }, [b]);
            var w = (0,
            a._)((0,
            u.Wx)({
                threshold: 0
            }), 3)
              , j = w[0]
              , N = w[1]
              , C = w[2];
            (0,
            s.useEffect)(function() {
                var e = !_ && !m && !c;
                N && e && en(C, h.stub)
            }, [N, C, _, m, c]);
            var T = (0,
            s.useCallback)(function(e) {
                x(e),
                j(e)
            }, [x, j]);
            if ((0,
            d.d4)(function(e) {
                return e.shared.view
            }) === F.g.START_TODAY_APP)
                return null;
            var A = et(t, f)
              , k = o()("recommended-intersection-ref", {
                "recommended--sticky": i && !m
            })
              , L = (0,
            P.$h)({
                componentName: "recommended",
                pageRegion: p,
                componentTitle: ee(t)
            });
            return (0,
            r.jsx)("div", {
                className: k,
                "data-activity-map": L,
                "data-testid": void 0 === n ? "recommended-wrapper" : n,
                ref: A && T,
                children: A
            })
        };
        er.propTypes = {
            additionalClasses: m().string,
            articleID: m().string,
            isBetterNewsCommerce: m().bool,
            isEmbeddedComponent: m().bool,
            isGiftGuide: m().bool,
            isNBCNewsCommerce: m().bool,
            isRightRail: m().bool,
            isTrending: m().bool,
            isShopTheShow: m().bool,
            isSelect: m().bool,
            isValidNonEcommerceTodayArticle: m().bool,
            lazyLoad: m().bool,
            mobile: m().bool,
            pageRegion: b.az,
            taxonomy: m().shape({
                primarySection: m().shape({
                    id: m().string
                }),
                primaryTopic: m().shape({
                    id: m().string
                })
            })
        };
        var es = (0,
        d.Ng)(function(e) {
            return {
                taxonomy: v()(e, "article.content[0].taxonomy"),
                articleID: v()(e, "article.content[0].id")
            }
        })(er);
        function el(e) {
            return (0,
            r.jsx)(g.t, {
                children: (0,
                r.jsx)(es, (0,
                i._)({}, e))
            })
        }
        el.displayName = "SafeRecommended(Connect(Recommended))";
        let eo = el
    }
    ,
    8437: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => g
        });
        var i = n(20294)
          , a = n(37876)
          , r = n(14232)
          , s = n(95062)
          , l = n.n(s)
          , o = n(51845)
          , c = n(8819)
          , d = n(26677)
          , u = n(40311)
          , _ = n(76550)
          , m = n(23548)
          , p = n(99298);
        n(44184);
        var v = n(16883)
          , h = n.n(v);
        function f(e) {
            var t = e.article
              , n = t.id
              , s = t.body
              , l = t.ecommerceMetadata
              , u = void 0 === l ? {} : l
              , v = u.trackingId
              , f = u.shoppingListTitle
              , g = e.vertical
              , y = e.isEmbed;
            (0,
            p.Z)();
            var x = s.filter(function(e) {
                return "embeddedProduct" === e.type
            }).map(function(e) {
                var t = e.product;
                return {
                    item: t,
                    computedValues: {
                        headline: t.name,
                        teaseImage: t.teaseImage,
                        url: null
                    }
                }
            })
              , b = (0,
            _.AQ)(x)
              , w = (0,
            i._)((0,
            r.useState)(!1), 2)
              , j = w[0]
              , N = w[1];
            return (0,
            a.jsxs)("div", {
                className: "no-slanted-bg ".concat(h().container),
                "data-test-id": "shopping-cart",
                children: [!(void 0 !== y && y) && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(c.f, {}), (0,
                    a.jsx)("div", {
                        className: "nfw-anchor",
                        "data-article-page": "true",
                        "data-widget": "nongrocery-cart",
                        "data-article-products": b.join(",")
                    })]
                }), (0,
                a.jsx)(d.AL, {
                    content: {
                        subType: m.SHOP_LIST_BY_ONE_PRODUCT,
                        metadata: {
                            title: void 0 === f ? "" : f,
                            disclaimerKey: "TARGET_SHOP_THIS_LIST",
                            trackingId: "".concat(n, "cart").concat(v || "")
                        },
                        items: x
                    },
                    onScroll: function(e, t) {
                        var n = t.x
                          , i = t.width;
                        !j && n / i > .5 && ((0,
                        o.stub)("track", "mbt_bacon_scroll", {
                            action: "scroll"
                        }),
                        N(!0))
                    },
                    pageRegion: "article-body",
                    vertical: g,
                    useAltTitle: "today" === g,
                    titleSize: "small",
                    titleBgColor: "green"
                })]
            })
        }
        (0,
        o.stub)("register", "mbt_bacon_scroll"),
        f.propTypes = {
            vertical: l().string.isRequired,
            article: u.A.isRequired,
            isEmbed: l().bool
        };
        let g = f
    }
    ,
    8698: e => {
        e.exports = {
            container: "styles_container__XJV6X",
            productLink: "styles_productLink__x1uhn",
            teaseImage: "styles_teaseImage__5sN2q",
            superlative: "styles_superlative__qr53t",
            productName: "styles_productName__KosNU",
            listPrice: "styles_listPrice__mDtaz",
            salePrice: "styles_salePrice__eBF_u",
            onSale: "styles_onSale__vjCFB",
            rightCol: "styles_rightCol__EBP4g",
            prices: "styles_prices__jqkRV",
            offer: "styles_offer__6HKmT",
            seller: "styles_seller__bhKhR",
            sellerName: "styles_sellerName__2X_LL",
            learnMoreContainer: "styles_learnMoreContainer__eD0v5",
            learnMore: "styles_learnMore__Dn2UG",
            downArrow: "styles_downArrow__Ch5HS",
            "live-dot-blink": "styles_live-dot-blink__UZDfM",
            "fade-in": "styles_fade-in__BRL_g",
            "expand-in": "styles_expand-in__jLM_z",
            "chatblog-expand-in": "styles_chatblog-expand-in__YhVYJ"
        }
    }
    ,
    8819: (e, t, n) => {
        "use strict";
        n.d(t, {
            f: () => _
        });
        var i = n(20294)
          , a = n(37876)
          , r = n(14232)
          , s = n(77328)
          , l = n.n(s)
          , o = n(39324)
          , c = n.n(o)()().publicRuntimeConfig
          , d = c.NORTHFORK_SCRIPT
          , u = c.NORTHFORK_CSS
          , _ = function() {
            var e = (0,
            i._)((0,
            r.useState)(!1), 2)
              , t = e[0]
              , n = e[1];
            return ((0,
            r.useEffect)(function() {
                n(!0)
            }, []),
            t) ? (0,
            a.jsxs)(l(), {
                children: [(0,
                a.jsx)("link", {
                    href: u,
                    rel: "stylesheet"
                }), (0,
                a.jsx)("script", {
                    type: "text/javascript",
                    src: d,
                    id: "nfw-v2"
                })]
            }) : null
        }
    }
    ,
    12387: () => {}
    ,
    12638: e => {
        e.exports = {
            sponsoredTip: "SponsoredTip_sponsoredTip__4WJ0z",
            image: "SponsoredTip_image__HZRFa",
            content: "SponsoredTip_content__pKegn",
            text: "SponsoredTip_text__C2jrZ",
            "live-dot-blink": "SponsoredTip_live-dot-blink__jB_n7",
            "fade-in": "SponsoredTip_fade-in__NMH0s",
            "expand-in": "SponsoredTip_expand-in__bzCLM",
            "chatblog-expand-in": "SponsoredTip_chatblog-expand-in__vuTSM"
        }
    }
    ,
    12827: () => {}
    ,
    16883: e => {
        e.exports = {
            container: "styles_container__M_bh2",
            "live-dot-blink": "styles_live-dot-blink__I7JjH",
            "fade-in": "styles_fade-in__AW_I3",
            "expand-in": "styles_expand-in__0iScw",
            "chatblog-expand-in": "styles_chatblog-expand-in__uo7p8"
        }
    }
    ,
    17530: e => {
        e.exports = {
            statement: "styles_statement__G3MUd",
            statementHeading: "styles_statementHeading__PALAL",
            statementText: "styles_statementText__AjiyG",
            statementFooter: "styles_statementFooter__cbyEC",
            "live-dot-blink": "styles_live-dot-blink__FJ3U6",
            "fade-in": "styles_fade-in__4gZ8l",
            "expand-in": "styles_expand-in__szwia",
            "chatblog-expand-in": "styles_chatblog-expand-in__Z7WwA"
        }
    }
    ,
    21410: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => S
        });
        var i = n(16927)
          , a = n(45526)
          , r = n(20294)
          , s = n(4902)
          , l = n(37876)
          , o = n(14232)
          , c = n(48011)
          , d = n(95062)
          , u = n.n(d)
          , _ = n(82780)
          , m = n.n(_)
          , p = n(42336)
          , v = n(15039)
          , h = n.n(v)
          , f = n(31310)
          , g = n(9874)
          , y = n(61702)
          , x = n(51845)
          , b = n(61623)
          , w = n(82102)
          , j = n(81917)
          , N = n(39844)
          , C = n(13560)
          , T = function(e) {
            return "string" == typeof e && e.length > 0 ? e.split(/\n/) : []
        }
          , A = function(e) {
            var t = e.excludedTaxonomyPaths
              , n = e.includedTaxonomyPaths
              , i = e.newsletterBrand
              , a = e.newsletterDescription
              , r = e.newsletterKey
              , s = e.newsletterSignupSource
              , l = e.newsletterTitle
              , o = e.newsletterTeaseImageUrl;
            return {
                excluded: T(t),
                included: T(n),
                newsletterBrand: i,
                newsletterDescription: a,
                newsletterKey: r,
                newsletterSignupSource: s,
                newsletterTitle: l,
                newsletterTeaseImageUrl: o
            }
        }
          , k = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = (0,
            C.Sk)(e)
              , i = function(e) {
                return e.filter(function(e) {
                    return n.includes(e)
                }).length
            }
              , a = t.map(A).filter(function(e) {
                return !(i(e.excluded) > 0) && 0 !== i(e.included)
            }).sort(function(e, t) {
                var n = i(e.included)
                  , a = i(t.included);
                return n === a ? 0 : n < a ? -1 : 1
            });
            return a.length ? a.pop() : null
        };
        n(77093),
        (0,
        x.stub)("register", "newsletter_subscribe"),
        (0,
        x.stub)("register", "InlineNewsletterModule_Reached");
        var L = "nl-signup-inline"
          , I = function(e) {
            var t = e.article
              , n = e.getNewsletterData
              , c = e.newsletterData
              , d = e.vertical
              , u = e.isChromeless
              , _ = e.shouldThumbnailRender;
            (0,
            o.useEffect)(function() {
                var e;
                (e = (0,
                i._)(function() {
                    return (0,
                    s.__generator)(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, n()];
                        case 1:
                            return e.sent(),
                            requestAnimationFrame(function() {
                                window.parent.postMessage({
                                    sentinel: "amp",
                                    type: "embed-size",
                                    height: document.body.scrollHeight
                                }, "*")
                            }),
                            [2]
                        }
                    })
                }),
                function() {
                    return e.apply(this, arguments)
                }
                )()
            }, [n]);
            var v = (0,
            o.useCallback)(function(e) {
                (0,
                r._)(e, 1)[0].isIntersecting && (0,
                x.stub)("track", "InlineNewsletterModule_Reached", !0)
            }, [])
              , y = (0,
            o.useCallback)(function(e, t) {
                e && t && (0,
                x.stub)("track", "newsletter_subscribe", {
                    id: e,
                    placement: t
                })
            }, []);
            if (u || t.nativeAd || (0,
            b.RM)(t))
                return null;
            var w = (0,
            N.q)(d)
              , C = k(t.taxonomy || [], c);
            if (!C)
                return null;
            var T = m()(C, "newsletterTitle", null)
              , A = m()(C, "newsletterDescription", null)
              , I = m()(C, "newsletterTeaseImageUrl", null)
              , S = m()(C, "newsletterKey", null)
              , O = m()(C, "newsletterSignupSource", null)
              , E = (void 0 === _ || _) && I;
            return (0,
            l.jsx)(p.A, {
                callback: v,
                threshold: .25,
                children: (0,
                l.jsxs)("div", {
                    className: h()(L, (0,
                    a._)({}, "".concat(L, "--with-picture"), E)),
                    children: [E && (0,
                    l.jsx)("div", {
                        className: "".concat(L, "__header"),
                        children: "Email Newsletters"
                    }), (0,
                    l.jsxs)("div", {
                        className: h()("".concat(L, "__container"), (0,
                        a._)({}, "".concat(L, "__container--with-picture"), E)),
                        children: [(0,
                        l.jsxs)("div", {
                            className: h()("".concat(L, "__metadata"), (0,
                            a._)({}, "".concat(L, "__metadata--with-picture"), E)),
                            children: [E && (0,
                            l.jsx)("div", {
                                className: "".concat(L, "__picture-container"),
                                children: (0,
                                l.jsx)(f.V, {
                                    className: "".concat(L, "__picture"),
                                    responsiveFlavors: {
                                        s: g.Ay.FOCAL_460x460,
                                        m: g.Ay.FOCAL_300x300,
                                        xl: g.Ay.FOCAL_360x360
                                    },
                                    width: 460,
                                    height: 460,
                                    computedValues: {
                                        teaseImage: {
                                            url: {
                                                primary: I
                                            }
                                        }
                                    }
                                })
                            }), (0,
                            l.jsx)("div", {
                                className: "".concat(L, "__details-container"),
                                children: (0,
                                l.jsxs)("div", {
                                    className: "".concat(L, "__details"),
                                    children: [T && (0,
                                    l.jsx)("p", {
                                        className: h()("".concat(L, "__title"), (0,
                                        a._)({}, "".concat(L, "__title--with-picture"), E)),
                                        children: T
                                    }), A && (0,
                                    l.jsx)("p", {
                                        className: h()("".concat(L, "__description"), (0,
                                        a._)({}, "".concat(L, "__description--with-picture"), E)),
                                        children: A
                                    })]
                                })
                            })]
                        }), (0,
                        l.jsx)(j.x, {
                            grayscale: E,
                            newsletterId: S,
                            onSubmit: function() {
                                return y(S, O)
                            },
                            signupSource: O,
                            sitekey: w,
                            vertical: d
                        })]
                    })]
                })
            })
        };
        I.propTypes = {
            article: y.jZ.isRequired,
            getNewsletterData: u().func,
            newsletterData: u().arrayOf(y.IA),
            vertical: u().string.isRequired,
            isChromeless: u().bool.isRequired,
            shouldThumbnailRender: u().bool
        },
        I.defaultProps = {
            getNewsletterData: Function.prototype,
            newsletterData: [],
            shouldThumbnailRender: !0
        };
        let S = (0,
        c.Ng)(function(e) {
            var t = e.newsletter;
            return {
                newsletterData: m()(t, ["newsletterData", "Newsletters"], [])
            }
        }, function(e) {
            return {
                getNewsletterData: function() {
                    return e((0,
                    w.a)())
                }
            }
        })(I)
    }
    ,
    22494: () => {}
    ,
    27489: () => {}
    ,
    28641: () => {}
    ,
    32240: (e, t, n) => {
        "use strict";
        n.d(t, {
            Ay: () => _,
            S2: () => d,
            q3: () => l
        });
        var i = n(85993)
          , a = n(20692)
          , r = n.n(a)
          , s = n(20309)
          , l = /trackingCodePlaceholder/i
          , o = ["anrdoezrs.net", "ashleycarsondesigns.com", "birthdatecandles.com", "blankboxnyc.com", "bookofthemonth.com", "boomboxgifts.com", "bymarinabulatkina.com", "californiaclosets.com", "clarasunwoo.com", "click.linksynergy.com", "colorwowdeals.com", "colorwowhair.com", "cuddleclones.com", "go.redirectingat.com", "golfballs.com", "hairstory.com", "holodeck3dstudios.com", "indigolovesviolet.com", "jennifermillerjewelry.com", "linksynergy.com", "linksynergy.walmart.com", "loveisproject.co", "lunya.co", "mace.com", "maggielouiseconfections.com", "mailpix.com", "marlynschiff.com", "prodnaskincare.com", "schafskincare.com", "shanicollection.com", "shareasale.com", "shhhsilk.com", "shop.leota.com", "shop-links.co", "shopryanporter.com", "shrsl.com", "ss1.us", "tajacollection.com", "thecomfy.com", "undercovercolors.com", "wearcommando.com", "zeenwoman.com"]
          , c = ["amazon.com"]
          , d = function(e) {
            var t = e.baseUrl
              , n = e.vertical
              , i = void 0 === n ? "today" : n
              , a = e.pageRoute
              , r = e.trackingId
              , o = void 0 === r ? "" : r;
            if (!t)
                return null;
            if (l.test(t))
                return t.replace(l, o);
            if (t.includes("go.redirectingat")) {
                var c = "https://www.".concat(s.verticalToPath[i] || "".concat(i, ".com"), "/").concat(void 0 === a ? "" : a, "/").concat(o);
                return "".concat(t, "&sref=").concat(encodeURIComponent(c))
            }
            return t
        }
          , u = function(e, t) {
            return -1 !== e.indexOf(t)
        };
        function _(e) {
            var t = e.url
              , n = e.canonicalUrl
              , a = e.tag
              , s = e.override
              , l = r().parse(t).hostname
              , d = r().parse(t).domain;
            if (u(o, l) || u(o, d))
                return t.includes("www.nbcnews.com") ? t.replace("96128X1608529", "96128X1608993") : t;
            if (u(c, d))
                return function(e) {
                    var t, n = e.href, a = e.tag, r = e.override;
                    if (!r && -1 !== n.indexOf("tag="))
                        return n;
                    var s = new URL(n);
                    return (!s.searchParams.get("tag") || r) && (a.startsWith("tag=") ? (t = s.searchParams).set.apply(t, (0,
                    i._)(a.split("="))) : s.searchParams.set("tag", a)),
                    s.toString()
                }({
                    href: t,
                    tag: void 0 === a ? "tag=nb013-20" : a,
                    override: void 0 !== s && s
                });
            var _ = "96128X1550925";
            "string" == typeof n && n.includes("nbcnews.com") && (_ = "96128X1608993");
            var m = ["https://go.redirectingat.com/?xs=1&id=".concat(_), "url=".concat(encodeURIComponent(t))];
            return n && m.push("sref=".concat(encodeURIComponent(n))),
            m.join("&")
        }
    }
    ,
    37781: (e, t, n) => {
        "use strict";
        n.d(t, {
            _: () => o
        });
        var i = n(37876);
        n(14232);
        var a = n(95062)
          , r = n.n(a)
          , s = n(89068)
          , l = n.n(s);
        function o(e) {
            var t = e.children
              , n = void 0 === t ? "" : t;
            return n ? (0,
            i.jsx)("h3", {
                className: l().stepSubhed,
                children: n
            }) : null
        }
        o.propTypes = {
            children: r().string
        }
    }
    ,
    39729: e => {
        e.exports = {
            showMoreButtonWrapper: "styles_showMoreButtonWrapper__CikE6",
            showMoreButton: "styles_showMoreButton__xkTQ1",
            showMoreButtonTilt: "styles_showMoreButtonTilt__Orwk2",
            "live-dot-blink": "styles_live-dot-blink__yjRgz",
            "fade-in": "styles_fade-in__19hD_",
            "expand-in": "styles_expand-in__4fYC4",
            "chatblog-expand-in": "styles_chatblog-expand-in__ur56m"
        }
    }
    ,
    39844: (e, t, n) => {
        "use strict";
        n.d(t, {
            q: () => i
        });
        var i = function(e) {
            switch (e) {
            case "news":
            case "today":
            case "msnbc":
            default:
                return "6LeCn4odAAAAAFt1umE7XdVqlpUB2-e20vksHlQL";
            case "noticias":
                return "6LfHVOQUAAAAAPSCmupFMjHMATCo3lMVB9f6LFdK"
            }
        }
    }
    ,
    43526: (e, t, n) => {
        "use strict";
        n.d(t, {
            s: () => l
        });
        var i = n(20294)
          , a = n(14232)
          , r = n(39324)
          , s = n.n(r);
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = s()().publicRuntimeConfig.API_URL_BENTO_PUBLIC
              , r = (0,
            i._)(a.useState(null), 2)
              , l = r[0]
              , o = r[1]
              , c = (0,
            i._)(a.useState(!1), 2)
              , d = c[0]
              , u = c[1]
              , _ = (0,
            i._)(a.useState(!1), 2)
              , m = _[0]
              , p = _[1];
            return a.useEffect(function() {
                u(!0),
                fetch("".concat(n, "/").concat(e), t).then(function(e) {
                    return e.json()
                }).then(function(e) {
                    o(e.data),
                    u(!1)
                }).catch(function() {
                    p(!0),
                    u(!1)
                })
            }, [e]),
            [l, d, m]
        }
    }
    ,
    44184: () => {}
    ,
    45391: () => {}
    ,
    46293: e => {
        e.exports = {
            today: "styles_today__NH_PF",
            globalcitizen: "styles_globalcitizen__aGEFO",
            entretenimiento: "styles_entretenimiento__0w4EU",
            shows: "styles_shows__N9Tyr",
            telemundo: "styles_telemundo___Ahj7",
            select: "styles_select__foFeO",
            gridContainerLarge: "styles_gridContainerLarge__vcWw7",
            "live-dot-blink": "styles_live-dot-blink__nWeNh",
            "fade-in": "styles_fade-in__SHFf7",
            "expand-in": "styles_expand-in__i3zSU",
            "chatblog-expand-in": "styles_chatblog-expand-in__wjvLq"
        }
    }
    ,
    46983: e => {
        e.exports = {
            carousel: "styles_carousel__ebLB2",
            carousel__slide: "styles_carousel__slide__O9YTI",
            carousel__card: "styles_carousel__card__cbJIl",
            "live-dot-blink": "styles_live-dot-blink__Xj3Ab",
            "fade-in": "styles_fade-in__wQEHg",
            "expand-in": "styles_expand-in__LXTHu",
            "chatblog-expand-in": "styles_chatblog-expand-in__W0CR6"
        }
    }
    ,
    52331: () => {}
    ,
    53760: e => {
        e.exports = {
            card: "styles_card__SCi76",
            coverImage: "styles_coverImage__L6GCV",
            imageWrapper: "styles_imageWrapper__O37vg",
            byline: "styles_byline__zDQzc",
            "image-byline-wrapper": "styles_image-byline-wrapper__uYIeo",
            image: "styles_image__Rf5C2",
            txtWrapper: "styles_txtWrapper__3rsLX",
            withDek: "styles_withDek__PAKoZ",
            noImg: "styles_noImg__GEcBB",
            photos: "styles_photos__8MhVc",
            title: "styles_title__d487J",
            author: "styles_author__l7Srn",
            description: "styles_description__KQzRO",
            tiltWrapper: "styles_tiltWrapper__BcdP_",
            save: "styles_save__Pm5Gk",
            "live-dot-blink": "styles_live-dot-blink__fZlnd",
            "fade-in": "styles_fade-in__HfqBi",
            "expand-in": "styles_expand-in__1vpqR",
            "chatblog-expand-in": "styles_chatblog-expand-in__vKjSo"
        }
    }
    ,
    55469: () => {}
    ,
    57344: e => {
        e.exports = {
            prosConsContainer: "styles_prosConsContainer__HAJ1f",
            isOde: "styles_isOde__NbgjT",
            select: "styles_select___GeRZ",
            prosConsChild: "styles_prosConsChild__YRDyW",
            prosConsLabel: "styles_prosConsLabel__0oo4d",
            prosConsItems: "styles_prosConsItems__XysO1",
            prosConsFallback: "styles_prosConsFallback__ILgA3",
            "live-dot-blink": "styles_live-dot-blink__vCAcW",
            "fade-in": "styles_fade-in__Fjbfc",
            "expand-in": "styles_expand-in__vcLUu",
            "chatblog-expand-in": "styles_chatblog-expand-in__DpQ2E"
        }
    }
    ,
    60899: e => {
        e.exports = {
            msnbcDailyRecircBody: "styles_msnbcDailyRecircBody__XvMcK",
            head: "styles_head__BVIt4",
            hasItems: "styles_hasItems__uqKh1",
            hasColumnist: "styles_hasColumnist__enxZl",
            headshot: "styles_headshot__KrXYU",
            title: "styles_title__KDxjl",
            description: "styles_description__mlXyO",
            body: "styles_body__9vcW_",
            item: "styles_item__iMaSD",
            tease: "styles_tease__asSAU",
            info: "styles_info__n7etZ",
            unibrow: "styles_unibrow__0Vc6q",
            headline: "styles_headline__wqZah",
            externalLink: "styles_externalLink__8BZTI",
            author: "styles_author__vNJ72",
            "live-dot-blink": "styles_live-dot-blink__2IT15",
            "fade-in": "styles_fade-in__OayJp",
            "expand-in": "styles_expand-in__VXyTm",
            "chatblog-expand-in": "styles_chatblog-expand-in__ztd1t"
        }
    }
    ,
    61796: e => {
        e.exports = {
            rating: "styles_rating__0Q7Lu",
            stroke: "styles_stroke__76w2w",
            fill: "styles_fill__7ih_C",
            stars: "styles_stars__3AO1n"
        }
    }
    ,
    65811: e => {
        e.exports = {
            container: "styles_container__bBcJi",
            pollWrapper: "styles_pollWrapper__p2Mcx",
            today: "styles_today__Dp0lD",
            "live-dot-blink": "styles_live-dot-blink__vEPHL",
            "fade-in": "styles_fade-in__BKxCR",
            "expand-in": "styles_expand-in__B5cOy",
            "chatblog-expand-in": "styles_chatblog-expand-in__tOFad"
        }
    }
    ,
    68025: e => {
        e.exports = {
            inlineImage: "styles_inlineImage__FvnTh",
            small: "styles_small__gIJ9M",
            medium: "styles_medium__MEKii",
            large: "styles_large__HU_5F",
            noCaption: "styles_noCaption__qtPhQ",
            portrait: "styles_portrait__NEQhG",
            electionCard: "styles_electionCard__ikSk2",
            image: "styles_image__i32F7",
            caption: "styles_caption__TCewG",
            fullBleedContainer: "styles_fullBleedContainer__oCwQx",
            fullBleed: "styles_fullBleed__aWGTI",
            "live-dot-blink": "styles_live-dot-blink__0psxp",
            "fade-in": "styles_fade-in__u5vmV",
            "expand-in": "styles_expand-in__saThW",
            "chatblog-expand-in": "styles_chatblog-expand-in__hu0O2"
        }
    }
    ,
    68437: e => {
        e.exports = {
            expandableList: "styles_expandableList__NXxIG",
            expandableListAmp: "styles_expandableListAmp__NpiYy",
            expandableListHeader: "styles_expandableListHeader__6LFwQ",
            expandableListHeaderTab: "styles_expandableListHeaderTab__UiHp1",
            expandableListTitle: "styles_expandableListTitle__ipJc_",
            expandableListSubtitle: "styles_expandableListSubtitle__tWpJe",
            expandableListContainer: "styles_expandableListContainer__e3hjZ",
            expandableListContainerNoExpand: "styles_expandableListContainerNoExpand__88yol",
            expandableListContainerNoSubtitle: "styles_expandableListContainerNoSubtitle__YeYp_",
            expandableListAffordance: "styles_expandableListAffordance__qBtTj",
            expandableListOverlay: "styles_expandableListOverlay__dFuc_",
            expandableListButton: "styles_expandableListButton__uKotf",
            icon: "styles_icon__ysQo2",
            iconDown: "styles_iconDown__VezdI",
            iconUp: "styles_iconUp__z5BjC",
            "live-dot-blink": "styles_live-dot-blink__1CYgx",
            "fade-in": "styles_fade-in__a8c49",
            "expand-in": "styles_expand-in__mejwr",
            "chatblog-expand-in": "styles_chatblog-expand-in__ZjRtG"
        }
    }
    ,
    70348: e => {
        e.exports = {
            globalcitizen: "styles_globalcitizen__QnAGh",
            entretenimiento: "styles_entretenimiento__bqlnj",
            shows: "styles_shows__5i9m0",
            telemundo: "styles_telemundo__BZ0CP",
            select: "styles_select__Rw7pO",
            gridContainerLarge: "styles_gridContainerLarge__nRahM",
            accordion: "styles_accordion__Coahi",
            open: "styles_open__hWMLF",
            accordion__header: "styles_accordion__header__Zsz_0",
            accordion__icon: "styles_accordion__icon__EJPbU",
            accordion__content: "styles_accordion__content__9AV2h",
            "live-dot-blink": "styles_live-dot-blink__c5iMM",
            "fade-in": "styles_fade-in__qcMab",
            "expand-in": "styles_expand-in__5oLkY",
            "chatblog-expand-in": "styles_chatblog-expand-in__8CB90"
        }
    }
    ,
    70358: () => {}
    ,
    70924: () => {}
    ,
    71010: e => {
        e.exports = {
            mediaContainer: "promotionalStyles_mediaContainer__tQri0",
            mediaItem: "promotionalStyles_mediaItem__x4SoY",
            mobile: "promotionalStyles_mobile__R5RyA",
            selected: "promotionalStyles_selected__PWJrH",
            "live-dot-blink": "promotionalStyles_live-dot-blink__e_9wK",
            "fade-in": "promotionalStyles_fade-in__akZWE",
            "expand-in": "promotionalStyles_expand-in__YK6HR",
            "chatblog-expand-in": "promotionalStyles_chatblog-expand-in__iGuuy"
        }
    }
    ,
    72073: e => {
        e.exports = {
            accordion: "styles_accordion__Z2nEy",
            open: "styles_open__oYaF9",
            accordion__header: "styles_accordion__header__g6iuY",
            accordion__icon: "styles_accordion__icon__IsXjX",
            down: "styles_down__XcU6b",
            accordion__content: "styles_accordion__content__09JIS",
            closed: "styles_closed__PAn2s",
            affordance: "styles_affordance__g5t4E",
            "live-dot-blink": "styles_live-dot-blink__PYk1s",
            "fade-in": "styles_fade-in__OVB7F",
            "expand-in": "styles_expand-in__YfmdJ",
            "chatblog-expand-in": "styles_chatblog-expand-in__zSklt"
        }
    }
    ,
    72423: (e, t, n) => {
        "use strict";
        n.d(t, {
            b: () => I
        });
        var i = n(67684)
          , a = n(62701)
          , r = n(37876)
          , s = n(14232)
          , l = n(15039)
          , o = n.n(l)
          , c = n(87992)
          , d = n(32240)
          , u = n(26677)
          , _ = n(21737)
          , m = n(40625)
          , p = n(51845)
          , v = n(99298)
          , h = n(20294)
          , f = n(81481)
          , g = n(10616)
          , y = n(97247)
          , x = n(9874)
          , b = n(31310)
          , w = n(90327)
          , j = n(94844)
          , N = n(96829)
          , C = n.n(N)
          , T = function(e) {
            var t, n = e.article, i = e.fallbackImg, a = e.hasImages, s = e.vertical, l = e.icid, c = e.presentationStyle, d = e.position, u = e.isSingleCard, _ = n.url, m = n.teaseImage, v = n.unibrow, h = n.headline, f = n.id, g = (null == m ? void 0 : null === (t = m.url) || void 0 === t ? void 0 : t.primary) || i, N = function() {
                (0,
                p.stub)("track", "mbt_bacon_click", {
                    action: "itemClick",
                    presentation: c,
                    itemPosition: d,
                    itemName: null == h ? void 0 : h.primary,
                    itemId: f
                })
            };
            return (0,
            r.jsxs)("div", {
                className: o()(C().carouselCard, u && C().singleCarouselCard),
                "data-testid": "carousel-card",
                children: [a && (0,
                r.jsxs)("div", {
                    className: C().carouselCardImgContainer,
                    "data-testid": "carousel-image",
                    children: [(0,
                    r.jsx)(y.A, {
                        href: null == _ ? void 0 : _.primary,
                        "data-icid": l,
                        "data-testid": "carousel-image-link",
                        onClick: N,
                        children: (0,
                        r.jsx)(b.V, {
                            alt: null == m ? void 0 : m.altText,
                            responsiveFlavors: {
                                s: x.Ay.FOCAL_600x300,
                                m: x.Ay.FOCAL_720x360,
                                l: x.Ay.FOCAL_920x460,
                                xl: x.Ay.FOCAL_860x430
                            },
                            url: g,
                            originalHeight: null == m ? void 0 : m.height,
                            originalWidth: null == m ? void 0 : m.width,
                            className: C().pictureContainer
                        })
                    }), (0,
                    r.jsx)(j.e, {
                        contentId: f,
                        contentType: "article",
                        options: {
                            isThumbnail: !0,
                            showCTA: !0
                        }
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: o()(C().carouselCardTextContentWrapper, !a && C().carouselCardTextContentWithSave),
                    children: [(0,
                    r.jsxs)("div", {
                        className: C().carouselCardTextContent,
                        children: [v && (0,
                        r.jsx)(w.d, {
                            unibrow: v,
                            hasDefaultTextStyle: !0,
                            vertical: s,
                            className: C().carouselCardUnibrow
                        }), (null == h ? void 0 : h.primary) && (0,
                        r.jsx)(y.A, {
                            href: null == _ ? void 0 : _.primary,
                            className: o()(C().carouselCardHeadline, a ? C().headlineWithImg : C().headlineNoImg),
                            "data-icid": l,
                            "data-testid": "carousel-headline-link",
                            onClick: N,
                            children: null == h ? void 0 : h.primary
                        })]
                    }), !a && (0,
                    r.jsx)(j.e, {
                        contentId: f,
                        contentType: "article",
                        options: {
                            isTitle: !0
                        }
                    })]
                })]
            })
        }
          , A = n(2888)
          , k = n.n(A);
        (0,
        p.stub)("register", "mbt_bacon_click", {
            allowDuplicate: !0
        });
        var L = function(e) {
            var t = e.items
              , n = e.hasImages
              , i = e.vertical
              , a = e.title
              , l = e.activityMapComponentTitle
              , o = e.icid
              , c = e.presentationStyle
              , d = (0,
            h._)((0,
            s.useState)(0), 2)
              , u = d[0]
              , _ = d[1]
              , m = (0,
            h._)((0,
            s.useState)(!1), 2)
              , v = m[0]
              , y = m[1];
            (0,
            s.useEffect)(function() {
                y(f.A.isS());
                var e = function() {
                    y(f.A.isS())
                };
                return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }, []);
            for (var x = (0,
            s.useRef)(null), b = (0,
            s.useRef)(null), w = (0,
            s.useRef)(null), j = "select" === i ? "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/nebula-cms-fallback-logos-select-c21d31.png" : "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2025-08/nebula-cms-fallback-logos-today-27b942.jpg", N = t.slice(0, 4), C = Math.ceil(N.length / 2), A = function(e) {
                _(e)
            }, L = function() {
                if (x.current && b.current) {
                    var e = x.current - b.current;
                    e > 50 && u < C - 1 && A(u + 1),
                    e < -50 && u > 0 && A(u - 1)
                }
            }, I = v ? N.slice(0, 4) : N.slice(0, 3), S = [], O = 0; O < I.length; O += 2)
                S.push(I.slice(O, O + 2));
            var E = (0,
            g.$h)({
                componentName: "bacon",
                pageRegion: "article-body",
                componentTitle: l || ""
            });
            return (0,
            r.jsxs)("div", {
                className: k().carouselContainer,
                "data-testid": "carousel-container",
                "data-activity-map": E,
                children: [(0,
                r.jsx)("h2", {
                    className: k().headline,
                    children: a
                }), (0,
                r.jsx)("div", {
                    className: k().carousel,
                    ref: w,
                    "data-slides": v ? C : 1,
                    style: v ? {
                        "--slide-index": u,
                        "--slides": C
                    } : void 0,
                    onTouchStart: v ? function(e) {
                        b.current = null,
                        x.current = e.targetTouches[0].clientX
                    }
                    : void 0,
                    onTouchMove: v ? function(e) {
                        b.current = e.targetTouches[0].clientX
                    }
                    : void 0,
                    onTouchEnd: v ? function() {
                        x.current && b.current && L()
                    }
                    : void 0,
                    children: v ? (0,
                    r.jsx)("div", {
                        className: k().track,
                        "aria-live": "polite",
                        children: S.map(function(e, t) {
                            return (0,
                            r.jsx)("div", {
                                className: k().slide,
                                "data-count": N.length,
                                children: e.map(function(e, t) {
                                    return (0,
                                    r.jsx)(T, {
                                        article: e,
                                        fallbackImg: j,
                                        hasImages: n,
                                        vertical: i,
                                        icid: "".concat(o, "|").concat(c, "| pos").concat(t + 1),
                                        presentationStyle: c,
                                        position: t + 1,
                                        isSingleCard: 1 === N.length
                                    }, e.id)
                                })
                            }, "slide-".concat(t + 1))
                        })
                    }) : I.map(function(e, t) {
                        return (0,
                        r.jsx)(T, {
                            article: e,
                            fallbackImg: j,
                            hasImages: n,
                            vertical: i,
                            icid: "".concat(o, "|").concat(c, "|pos").concat(t + 1),
                            presentationStyle: c,
                            position: t + 1,
                            isSingleCard: 1 === N.length
                        }, e.id)
                    })
                }), v && C > 1 && (0,
                r.jsx)("div", {
                    className: k().carouselDots,
                    children: Array.from({
                        length: C
                    }).map(function(e, t) {
                        return (0,
                        r.jsx)("button", {
                            type: "button",
                            "aria-label": "Pagination",
                            className: "".concat(k().carouselDot, " ").concat(u === t ? k().active : k().inactive),
                            onClick: function() {
                                A(t),
                                (0,
                                p.stub)("track", "mbt_bacon_click", {
                                    action: "navClick",
                                    type: "pagingDotNumber: ".concat(t + 1),
                                    presentation: c,
                                    title: a
                                })
                            }
                        }, "".concat(t + 1, "/").concat(C))
                    })
                })]
            })
        };
        function I(e) {
            var t = e.id
              , n = e.title
              , l = e.description
              , h = e.presentation
              , f = e.curatedListTrackingId
              , g = e.articleTrackingId
              , y = e.items
              , x = e.disclaimerOverride
              , b = e.articleId
              , w = void 0 === b ? null : b
              , j = e.insertEndmark
              , N = e.className
              , C = e.ecommerceEnabled
              , T = e.shortDisclaimer
              , A = e.elementId
              , k = void 0 === A ? null : A;
            (0,
            v.Z)();
            var I = (h || {}).style
              , S = (0,
            _.Cn)().vertical
              , O = (0,
            m.Wx)({
                threshold: 0,
                triggerOnce: !0
            })
              , E = O.ref
              , R = O.inView;
            (0,
            s.useEffect)(function() {
                R && (0,
                p.stub)("track", "mbt_curatedlist_inview", {
                    id: t,
                    action: "impression",
                    presentation: I || "PRODUCT_BACON"
                })
            }, [R]);
            var P = (0,
            c.Jp)()["curated-list-presentation-styles"];
            if (!y)
                return null;
            var F = t && (null == f ? void 0 : f.includes(t)) ? f.replace(t, "") : f || ""
              , M = function(e) {
                var n = e.externalUrl || ""
                  , i = f ? "".concat(F).concat(g) : g;
                if (n.includes("go.redirectingat")) {
                    var a = "today" === S ? "shop" : "select"
                      , r = "select" === S ? "nbcnews" : S;
                    n = function(e, t, n) {
                        try {
                            var i = new URL(decodeURIComponent(e));
                            return i.searchParams.set(t, n),
                            i.toString()
                        } catch (t) {
                            return e
                        }
                    }(n, "sref", "https://www.".concat(r, ".com/").concat(a, "/").concat(i))
                }
                return w && (d.q3.test(n) && (n = (n = n.replace(d.q3, i)).replace(t, "")),
                t && n.includes(t) && (n = n.replace(f, i))),
                n
            }
              , D = (0,
            r.jsx)("div", {
                ref: E,
                "data-testid": "curated-list",
                className: o()("no-slanted-bg", void 0 === N ? "" : N, {
                    endmark: void 0 !== j && j
                }),
                id: k && "anchor-".concat(k),
                children: (0,
                r.jsx)(u.Kb, {
                    vertical: S,
                    shouldShowAdditionalSeller: !0,
                    inlineArticle: !0,
                    content: {
                        type: "oneOneProduct",
                        subType: "oneOneProduct",
                        metadata: {
                            description: l,
                            disclaimerKey: "OVERRIDE",
                            disclaimerOverride: void 0 === x ? null : x,
                            ecommerceEnabled: void 0 !== C && C,
                            title: n,
                            componentTitle: "curated-list",
                            trackingId: F,
                            shortDisclaimer: void 0 === T ? null : T,
                            hideDisclaimerLearnMore: !0
                        },
                        items: y.filter(function(e) {
                            return "product" === e.type
                        }).map(function(e) {
                            return {
                                type: e.type,
                                id: e.id,
                                item: (0,
                                a._)((0,
                                i._)({}, e), {
                                    offers: e.offers.map(function(e) {
                                        return (0,
                                        a._)((0,
                                        i._)({}, e), {
                                            externalUrl: M(e)
                                        })
                                    })
                                }),
                                computedValues: {
                                    headline: e.name,
                                    teaseImage: e.teaseImage,
                                    url: null
                                }
                            }
                        })
                    },
                    useAltTitle: "today" === S,
                    titleBgColor: "yellow",
                    presentationStyle: I
                })
            });
            if (!P)
                return D;
            switch (I) {
            case "ARTICLE_LIST":
            case "ARTICLE_LIST_NO_IMAGES":
                return (0,
                r.jsx)("div", {
                    ref: E,
                    "data-testid": "curated-list",
                    id: k && "anchor-".concat(k),
                    children: (0,
                    r.jsx)(L, {
                        vertical: S,
                        items: y,
                        title: n,
                        hasImages: "ARTICLE_LIST" === I,
                        activityMapComponentTitle: "ARTICLE_LIST" === I ? "curated-list-article-list" : "curated-list-article-list-no-images",
                        icid: "curated-list",
                        presentationStyle: I
                    })
                });
            default:
                return D
            }
        }
        (0,
        p.stub)("register", "mbt_curatedlist_inview")
    }
    ,
    77093: () => {}
    ,
    78461: () => {}
    ,
    79447: e => {
        e.exports = {
            flag: "styles_flag__phIcy"
        }
    }
    ,
    80787: e => {
        e.exports = {
            "picture-carousel__carousel-container": "styles_picture-carousel__carousel-container__gYz31",
            "carousel-pagination": "styles_carousel-pagination__1CUm1",
            "carousel-pagination__paging-dots": "styles_carousel-pagination__paging-dots__z2fY1",
            "carousel-pagination__paging-dot": "styles_carousel-pagination__paging-dot__0hGZd",
            "carousel-pagination__paging-dot-current": "styles_carousel-pagination__paging-dot-current__CS4KU",
            "carousel-pagination__chevron-button": "styles_carousel-pagination__chevron-button__AwVNo",
            "carousel-pagination__chevron-icon": "styles_carousel-pagination__chevron-icon__rARD5",
            "picture-carousel__first-picture": "styles_picture-carousel__first-picture__bAeO5",
            "live-dot-blink": "styles_live-dot-blink__3KgVo",
            "fade-in": "styles_fade-in__CJCW3",
            "expand-in": "styles_expand-in__BZU0V",
            "chatblog-expand-in": "styles_chatblog-expand-in__6Jv_F"
        }
    }
    ,
    81917: (e, t, n) => {
        "use strict";
        n.d(t, {
            x: () => A
        });
        var i = n(45526)
          , a = n(67684)
          , r = n(62701)
          , s = n(20294)
          , l = n(37876)
          , o = n(14232)
          , c = n(11806)
          , d = n(15039)
          , u = n.n(d)
          , _ = n(16927)
          , m = n(45267)
          , p = n(4902)
          , v = function() {
            var e = (0,
            _._)(function(e) {
                return (0,
                p.__generator)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, window.Sailthru.init({
                            customerId: e
                        })];
                    case 1:
                        return t.sent(),
                        [3, 3];
                    case 2:
                        return console.error("error initializing non-prod Sailthru client", t.sent()),
                        [3, 3];
                    case 3:
                        return [2]
                    }
                })
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , h = function() {
            var e = (0,
            _._)(function(e, t) {
                var n, i;
                return (0,
                p.__generator)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        if (!(window.Sailthru && "object" === (0,
                        m._)(window.Sailthru)))
                            return [3, 3];
                        if (!t)
                            return [3, 2];
                        return [4, v(t)];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        n = e.id,
                        i = e.email,
                        n && i && window.Sailthru.integration("userSignUp", e),
                        a.label = 3;
                    case 3:
                        return [2]
                    }
                })
            });
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , f = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          , g = n(89903)
          , y = n(96491)
          , x = n(40625)
          , b = n(82737)
          , w = n(39324)
          , j = n.n(w);
        n(90406);
        var N = o.lazy(function() {
            return n.e(6725).then(n.bind(n, 76725))
        })
          , C = j()().publicRuntimeConfig.SAILTHRU_CUSTOMER_ID
          , T = "nl-signup-input"
          , A = function(e) {
            var t, n, d, _, m, p = e.newsletterId, v = e.onError, w = void 0 === v ? Function.prototype : v, j = e.onSubmit, A = void 0 === j ? Function.prototype : j, k = e.renderOnSuccess, L = void 0 === k ? (0,
            l.jsx)("p", {
                children: c.Ay.t("You have been successfully added to our newsletter")
            }) : k, I = e.signupSource, S = void 0 === I ? null : I, O = e.sitekey, E = e.vertical, R = e.isRail, P = void 0 !== R && R, F = e.newsletterIdSource, M = void 0 === F ? null : F, D = e.grayscale, B = void 0 !== D && D, U = (0,
            s._)((0,
            o.useState)(""), 2), H = U[0], q = U[1], z = (0,
            s._)((0,
            o.useState)(!1), 2), V = z[0], W = z[1], G = (0,
            s._)((0,
            o.useState)(!1), 2), K = G[0], Y = G[1], Z = (0,
            o.useRef)(null), X = (0,
            o.useRef)(null), J = (0,
            o.useRef)(null), Q = (0,
            o.useCallback)(function(e) {
                q(e.target.value)
            }, []), $ = (0,
            o.useCallback)(function(e) {
                var t, n, i, a;
                (e.preventDefault(),
                f.test(String(H).toLowerCase())) ? (null === (t = X.current) || void 0 === t || t.setCustomValidity(""),
                null === (n = J.current) || void 0 === n || n.execute(),
                W(!1)) : (null === (i = X.current) || void 0 === i || i.setCustomValidity(c.Ay.t("Invalid email")),
                null === (a = Z.current) || void 0 === a || a.reportValidity(),
                W(!0))
            }, [H]), ee = (0,
            o.useCallback)(function() {
                var e, t;
                h({
                    id: H,
                    key: "email",
                    email: H,
                    lists: {
                        Master: 1
                    },
                    vars: (0,
                    r._)((0,
                    a._)((0,
                    i._)({}, p, 1), M && (0,
                    i._)({}, M, S)), {
                        sign_up_date: new Date().toISOString(),
                        referrer: null === (e = document) || void 0 === e ? void 0 : e.referrer,
                        domain: null === (t = document) || void 0 === t ? void 0 : t.location.href
                    }),
                    source: S,
                    onSuccess: function(e) {
                        var t = e.email;
                        Y(!0),
                        A(t)
                    },
                    onError: function() {
                        w()
                    }
                }, C)
            }, [H, p, S, A, w, M]), et = c.Ay.t((0,
            g.B0)(y.EMAIL_PLACEHOLDER_TXT, E)), en = (0,
            g.B0)(y.NL_SIGNUP_BUTTON_ANIMATED, E), ei = c.Ay.t("Sign Up");
            return (0,
            l.jsxs)("div", {
                className: T,
                "data-testid": "newsletter-signup-input",
                children: [(0,
                l.jsx)("div", {
                    className: u()("".concat(T, "__input-wrapper"), (t = {},
                    (0,
                    i._)(t, "".concat(T, "__input-wrapper--grayscale"), B),
                    (0,
                    i._)(t, "".concat(T, "__input-wrapper--rail"), P),
                    t)),
                    children: K ? (0,
                    l.jsx)("div", {
                        className: u()("".concat(T, "__submitted-message"), (0,
                        i._)({}, "".concat(T, "__submitted-message--rail"), P)),
                        children: o.cloneElement(L)
                    }) : (0,
                    l.jsxs)("form", {
                        className: u()("".concat(T, "__form"), (n = {},
                        (0,
                        i._)(n, "".concat(T, "__form--grayscale"), B),
                        (0,
                        i._)(n, "".concat(T, "__form--rail"), P),
                        n)),
                        ref: Z,
                        children: [(0,
                        l.jsx)("input", {
                            className: u()("".concat(T, "__input"), (d = {},
                            (0,
                            i._)(d, "".concat(T, "__input--grayscale"), B),
                            (0,
                            i._)(d, "".concat(T, "__input--invalid"), V),
                            (0,
                            i._)(d, "".concat(T, "__input--rail"), P),
                            d)),
                            name: "emailAddress",
                            onChange: Q,
                            placeholder: et,
                            ref: X,
                            value: H,
                            required: "required",
                            "aria-required": "true",
                            type: "email",
                            minLength: "3"
                        }), (0,
                        l.jsx)(b.$, {
                            id: "email-subscribe-button",
                            displayType: "inline-form-button",
                            title: ei,
                            animated: en,
                            onClick: $,
                            "data-confirm_howl": "false",
                            "data-show_prompt": "false",
                            additionalClasses: u()("".concat(T, "__button"), (_ = {},
                            (0,
                            i._)(_, "".concat(T, "__button--grayscale"), B),
                            (0,
                            i._)(_, "".concat(T, "__button--rail"), P),
                            _))
                        })]
                    })
                }), (0,
                l.jsxs)("footer", {
                    className: u()("".concat(T, "__footer"), (m = {},
                    (0,
                    i._)(m, "".concat(T, "__footer--grayscale"), B),
                    (0,
                    i._)(m, "".concat(T, "__footer--rail"), P),
                    m)),
                    children: [c.Ay.t("This site is protected by recaptcha"), "\xa0", (0,
                    l.jsxs)("span", {
                        className: u()("".concat(T, "__recaptcha-links"), (0,
                        i._)({}, "".concat(T, "__recaptcha-links--rail"), P)),
                        children: [(0,
                        l.jsx)("a", {
                            className: u()("".concat(T, "__recaptcha-link"), (0,
                            i._)({}, "".concat(T, "__recaptcha-link--rail"), P)),
                            href: "https://www.nbcuniversal.com/privacy",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: c.Ay.t("Privacy Policy")
                        }), P && "\xa0", "\xa0|\xa0", P && "\xa0", (0,
                        l.jsx)("a", {
                            className: u()("".concat(T, "__recaptcha-link"), (0,
                            i._)({}, "".concat(T, "__recaptcha-link--rail"), P)),
                            href: "https://www.nbcuniversal.com/terms",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: c.Ay.t("Terms of Service")
                        })]
                    })]
                }), O && (0,
                l.jsx)(x.pL, {
                    children: function(e) {
                        var t = e.inView
                          , n = e.ref;
                        return (0,
                        l.jsx)("div", {
                            ref: n,
                            children: t && (0,
                            l.jsx)(o.Suspense, {
                                fallback: null,
                                children: (0,
                                l.jsx)(N, {
                                    ref: J,
                                    onVerify: ee,
                                    sitekey: O,
                                    size: "invisible"
                                })
                            })
                        })
                    }
                })]
            })
        }
    }
    ,
    82589: e => {
        e.exports = {
            ggWrapper: "styles_ggWrapper__zM6tR",
            ggInner: "styles_ggInner__rMbKV",
            title: "styles_title__qw_V0",
            items: "styles_items__cxxNP",
            item: "styles_item__xRmUF",
            itemThumbnail: "styles_itemThumbnail__f4bYU",
            itemUnibrow: "styles_itemUnibrow__nVEgE",
            imageContainer: "styles_imageContainer__nYg3n",
            itemTitle: "styles_itemTitle__n1Mkv",
            "live-dot-blink": "styles_live-dot-blink__X5RUX",
            "fade-in": "styles_fade-in__0Bd1a",
            "expand-in": "styles_expand-in__k2mKH",
            "chatblog-expand-in": "styles_chatblog-expand-in__JjpUT"
        }
    }
    ,
    85193: e => {
        e.exports = {
            mediaContainer: "promotionalStyles_mediaContainer__YML9I",
            mediaItem: "promotionalStyles_mediaItem__7HhiP",
            mobile: "promotionalStyles_mobile__ynK6Y",
            selected: "promotionalStyles_selected__Oc494",
            "live-dot-blink": "promotionalStyles_live-dot-blink__2LTyl",
            "fade-in": "promotionalStyles_fade-in__D_h2Q",
            "expand-in": "promotionalStyles_expand-in__ofvbM",
            "chatblog-expand-in": "promotionalStyles_chatblog-expand-in__BgYTr"
        }
    }
    ,
    86450: (e, t, n) => {
        "use strict";
        n.d(t, {
            Pk: () => nU
        });
        var i = {};
        n.r(i),
        n.d(i, {
            IFRAMELY_EXTERNAL_EMBED: () => ed,
            advanced_embed: () => ea,
            brightkit: () => H,
            cnbc_video: () => et,
            facebook_embedded_post: () => G,
            facebook_video: () => K,
            facebook_video_live_vertical: () => Y,
            facebookplus_embedded_post: () => W,
            facebookvideo: () => Z,
            facebookvideosmall: () => X,
            instagram: () => Q,
            instagramplus: () => J,
            msnbc_video: () => ee,
            nbc_affiliates_video: () => es,
            opinary: () => $,
            pinterest_board: () => eo,
            pinterest_pin: () => el,
            sponsored_tip: () => ec,
            todayLegacyWidget: () => er,
            tweet_embed: () => V,
            tweetplus_embed: () => z,
            vimeo: () => en,
            vine: () => ei,
            youtubeplus: () => q
        });
        var a = n(67684)
          , r = n(62701)
          , s = n(37876)
          , l = n(14232)
          , o = n(15039)
          , c = n.n(o)
          , d = n(86999)
          , u = n(48011)
          , _ = n(82780)
          , m = n.n(_)
          , p = n(69527)
          , v = n(61623)
          , h = n(61702)
          , f = n(1767)
          , g = n(21120)
          , y = function(e) {
            var t = e.html
              , n = e.widget
              , i = (0,
            l.useRef)(null);
            (0,
            l.useEffect)(function() {
                (0,
                g.A)("//platform.twitter.com/widgets.js", {
                    attributes: {
                        defer: !0,
                        charset: "utf-8"
                    }
                }).then(function() {
                    var e, t, n;
                    null === (n = window) || void 0 === n || null === (t = n.twttr) || void 0 === t || null === (e = t.widgets) || void 0 === e || e.load(i.current)
                })
            }, []);
            var a = (t || (0,
            p.sc)(n.baseline)).replace(/<script[^<]+src="([^"]+)"[^<]*><\/script>/gi, "");
            return (0,
            s.jsx)("div", {
                ref: i,
                className: "embed-widget__use-presentation",
                dangerouslySetInnerHTML: {
                    __html: a
                }
            })
        }
          , x = function(e) {
            var t = e.html
              , n = e.className
              , i = e.widget;
            (0,
            l.useEffect)(function() {
                (0,
                g.A)("//www.instagram.com/embed.js").then(function() {
                    var e, t;
                    return null === (t = window.instgrm) || void 0 === t ? void 0 : null === (e = t.Embeds) || void 0 === e ? void 0 : e.process()
                })
            }, []);
            var a = (0,
            f.A)(((void 0 === t ? null : t) || i.baseline).trim(), "lazy")
              , r = c()(void 0 === n ? "" : n, "embed-widget__use-presentation");
            if (/^<iframe/.test(a)) {
                var o = "https://www.instagram.com/p/".concat(i.properties["instagram-id"]);
                return (0,
                s.jsx)("div", {
                    className: r,
                    children: (0,
                    s.jsx)("blockquote", {
                        className: "instagram-media embed-widget__blockquote",
                        "data-instgrm-captioned": !0,
                        "data-instgrm-permalink": o,
                        "data-instgrm-version": "8",
                        children: (0,
                        s.jsxs)("div", {
                            className: "embed-widget__outer",
                            children: [(0,
                            s.jsx)("div", {
                                className: "embed-widget__inner",
                                children: (0,
                                s.jsx)("div", {
                                    className: "embed-widget__profile"
                                })
                            }), (0,
                            s.jsx)("p", {
                                className: "embed-widget__paragraph",
                                children: (0,
                                s.jsx)("a", {
                                    href: o,
                                    children: o
                                })
                            })]
                        })
                    })
                })
            }
            return (0,
            s.jsx)("div", {
                className: r,
                dangerouslySetInnerHTML: {
                    __html: a
                }
            })
        }
          , b = n(45526);
        function w(e) {
            var t, n, i, a, r = e.className, o = void 0 === r ? "" : r, d = e.presentation, u = e.widget, _ = e.facebookPostType, m = void 0 === _ ? "post" : _, p = (0,
            l.useRef)(null), v = function() {
                return u.properties["facebookplus-post-url"] || u.properties["video-url"]
            };
            if ((0,
            l.useEffect)(function() {
                (0,
                g.A)("https://connect.facebook.net/en_US/sdk.js#xfbml=false&version=v2.10").thenOnFirstLoad(function() {
                    return window.FB.init({
                        version: "v2.10",
                        xfbml: !0
                    })
                }).then(function() {
                    return window.FB.XFBML.parse()
                })
            }, []),
            "video" === m || (null === (n = u.properties["facebookplus-post-url"]) || void 0 === n ? void 0 : n.includes("watch")) || (null === (i = u.properties["facebookplus-post-url"]) || void 0 === i ? void 0 : i.includes("video")))
                return t = d.size,
                (0,
                s.jsx)("div", {
                    className: "fb-video",
                    "data-href": v(),
                    "data-show-text": "true",
                    "data-testid": "facebook-embed-video",
                    width: "small" === t.toLowerCase() ? 360 : null,
                    ref: p
                });
            var h = c()((a = {
                "embed-widget__use-presentation": !0
            },
            (0,
            b._)(a, o, o),
            (0,
            b._)(a, "fb-post", "post" === m),
            a));
            return (0,
            s.jsx)("div", {
                className: h,
                "data-href": v(),
                "data-show-text": "true",
                "data-width": "auto",
                ref: p,
                "data-testid": "facebook-embed"
            })
        }
        var j = n(1636)
          , N = l.memo(function(e) {
            var t = e.widget
              , n = (0,
            l.useRef)(null);
            return (0,
            l.useEffect)(function() {
                var e;
                (null === (e = t.properties) || void 0 === e ? void 0 : e["video-source"]) && (0,
                g.A)(t.properties["video-source"], {
                    location: n.current
                })
            }, [t]),
            (0,
            s.jsx)("div", {
                className: "embed-widget__use-presentation",
                "data-testid": "nbc-affiliates-video-legacy",
                ref: n
            })
        }, function() {
            return !1
        })
          , C = function(e) {
            var t = e.widget
              , n = (0,
            l.useRef)(null);
            (0,
            l.useEffect)(function() {
                (0,
                g.A)("//assets.pinterest.com/js/pinit.js", {
                    attributes: {
                        defer: !0,
                        "data-pin-build": "parsePinBtns"
                    }
                }).then(function() {
                    return window.parsePinBtns && window.parsePinBtns(n.current)
                })
            }, []);
            var i = (0,
            f.A)(t.baseline.replace(/<script[^<]+src="([^"]+)"[^<]*><\/script>/gi, ""), "lazy");
            return (0,
            s.jsx)("div", {
                ref: n,
                "data-testid": "pinterest-embed",
                dangerouslySetInnerHTML: {
                    __html: i
                }
            })
        }
          , T = n(11806)
          , A = n(95062)
          , k = n.n(A)
          , L = n(31310)
          , I = n(9874)
          , S = n(12638)
          , O = n.n(S)
          , E = function(e) {
            var t = e.widget.properties
              , n = t["text-description"].replace(/%20/gi, " ");
            return (0,
            s.jsxs)("div", {
                className: c()("SponsoredTip", "df flex-row-m flex-column", O().sponsoredTip),
                children: [(0,
                s.jsx)("div", {
                    className: c()("SponsoredTipImg", O().image, "mt7-m mt6"),
                    children: (0,
                    s.jsx)(L.V, {
                        responsiveFlavors: {
                            s: I.Ay.FOCAL_1520x760,
                            m: I.Ay.FOCAL_240x240,
                            l: I.Ay.FOCAL_300x300,
                            xl: I.Ay.FOCAL_300x300
                        },
                        url: t["sponsor-image-source"],
                        flavor: "focal",
                        alt: "sponsor"
                    })
                }), (0,
                s.jsxs)("div", {
                    className: c()("SponsoredTipContent", O().content, "mr7 mt5-m"),
                    children: [(0,
                    s.jsx)("h3", {
                        className: c()(O().text, "f5 white ml5 mb1"),
                        children: T.Ay.t("SPONSORED")
                    }), (0,
                    s.jsx)("div", {}), (0,
                    s.jsx)("p", {
                        className: "white ml5 f4",
                        children: n
                    })]
                })]
            })
        };
        E.propTypes = {
            widget: k().shape().isRequired
        };
        var R = n(20294)
          , P = n(847)
          , F = n(87992)
          , M = n(81481);
        function D(e) {
            var t = e.children
              , n = e.onUnmount
              , i = void 0 === n ? void 0 : n;
            return (0,
            l.useLayoutEffect)(function() {
                return function() {
                    null == i || i()
                }
            }, []),
            void 0 === t ? void 0 : t
        }
        D.propTypes = {
            children: k().node,
            onUnmount: k().func
        };
        var B = function(e) {
            var t, n, i, o = e.presentation, d = e.widget, u = (0,
            l.useRef)(null), _ = (0,
            R._)((0,
            l.useState)(0), 2), p = _[0], v = _[1], h = (0,
            R._)((0,
            l.useState)(!0), 2), y = h[0], x = h[1], b = (0,
            l.useContext)(F.kj).subType;
            (0,
            l.useEffect)(function() {
                (0,
                g.A)("https://iframe.nbcnews.com/embed.js"),
                x(M.A.isSorM())
            }, []);
            var j = m()(d, "properties.iframely-embed-site", "")
              , N = j.toLowerCase()
              , C = m()(d, "properties.headline", "");
            if ("facebook" === N) {
                var T = (0,
                r._)((0,
                a._)({}, d), {
                    properties: {
                        "facebookplus-post-url": d.fallbackUrl
                    }
                });
                return (0,
                s.jsx)(w, {
                    presentation: o,
                    widget: T,
                    facebookPostType: "post"
                })
            }
            var A = d.baseline
              , k = d.fallbackUrl
              , L = (0,
            f.A)(void 0 === A ? "" : A, "lazy");
            t = L = L.replace(/<iframe/g, '<iframe data-src="'.concat(k, '" ')),
            n = (null == j ? void 0 : j.toLowerCase()) !== "twitter" && j ? "".concat(j, ", ") : "",
            i = "".concat(n).concat(null != C ? C : "").trim() || "Inline Frame",
            L = t.replace(/<iframe/g, '<iframe title="'.concat(i, '"'));
            var I = (k || "").match("https://dataviz.nbcnews.com") ? k.split("/").slice(-2)[0] : null
              , S = (k || "").match("/embedded-pkg/timeline")
              , O = (0,
            s.jsx)("div", {
                ref: u,
                dangerouslySetInnerHTML: {
                    __html: L
                }
            })
              , E = (0,
            s.jsx)("div", {
                className: "embed-widget__placeholder",
                "data-testid": "iframely-placeholder"
            });
            return (0,
            s.jsx)("div", {
                id: I,
                "data-testid": "iframely-wrapper",
                className: c()("embed-widget__use-presentation", "embed-widget__iframely-".concat(N), {
                    "embed-widget__iframely-timeline": S
                }),
                style: p ? {
                    "--iframe-height": "".concat(p, "px")
                } : void 0,
                children: "liveBlog" === b ? (0,
                s.jsx)(P.Ay, {
                    unmountIfInvisible: !0,
                    offset: y ? 100 : 500,
                    placeholder: E,
                    children: (0,
                    s.jsx)(D, {
                        onUnmount: function() {
                            var e, t = null == u ? void 0 : null === (e = u.current) || void 0 === e ? void 0 : e.offsetHeight;
                            t && v(t)
                        },
                        children: O
                    })
                }) : O
            })
        }
          , U = function(e) {
            var t = function(t) {
                var n = t.widget.baseline;
                return (0,
                s.jsx)("div", {
                    className: e,
                    "data-testid": "embed-widget__generic-div",
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        f.A)(n, "lazy")
                    }
                })
            };
            return t.propTypes = {
                widget: h.HL.isRequired
            },
            t
        }
          , H = U("embed-widget__hoot-suite-wrapper")
          , q = function(e) {
            var t = e.widget.properties["youtube-id"];
            return (0,
            s.jsx)("iframe", {
                loading: "lazy",
                title: "youtube embed",
                className: "embed-widget__use-presentation",
                src: "https://www.youtube.com/embed/".concat(t),
                frameBorder: "0",
                allowFullScreen: !0
            })
        };
        q.propTypes = {
            widget: h.HL.isRequired
        };
        var z = function(e) {
            return (0,
            s.jsx)(y, (0,
            a._)({}, e))
        }
          , V = function(e) {
            return (0,
            s.jsx)(y, (0,
            a._)({}, e))
        }
          , W = function(e) {
            return (0,
            s.jsx)(w, (0,
            r._)((0,
            a._)({}, e), {
                facebookPostType: "post"
            }))
        }
          , G = function(e) {
            return (0,
            s.jsx)(w, (0,
            r._)((0,
            a._)({}, e), {
                facebookPostType: "post"
            }))
        }
          , K = function(e) {
            return (0,
            s.jsx)(w, (0,
            r._)((0,
            a._)({}, e), {
                facebookPostType: "video"
            }))
        }
          , Y = function(e) {
            return (0,
            s.jsx)(w, (0,
            r._)((0,
            a._)({}, e), {
                facebookPostType: "video"
            }))
        }
          , Z = function() {
            return (0,
            s.jsx)("iframe", {
                loading: "lazy",
                title: "facebook video",
                className: "embed-widget__fb-video",
                src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNBCNews%2Fvideos%2F1756173594402663%2F&show_text=0&width=545",
                width: "545",
                height: "535",
                style: {
                    border: "none",
                    overflow: "hidden"
                },
                scrolling: "no",
                frameBorder: "0",
                allowTransparency: "true",
                allowFullScreen: "true"
            })
        }
          , X = function() {
            return (0,
            s.jsx)("iframe", {
                loading: "lazy",
                title: "facebook video",
                className: "embed-widget__fb-video-small",
                src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNBCNews%2Fvideos%2F1756173594402663%2F&show_text=0&width=368",
                width: "368",
                height: "300",
                style: {
                    border: "none",
                    overflow: "hidden"
                },
                scrolling: "no",
                frameBorder: "0",
                allowTransparency: "true",
                allowFullScreen: "true"
            })
        }
          , J = function(e) {
            return (0,
            s.jsx)(x, (0,
            a._)({}, e))
        }
          , Q = function(e) {
            return (0,
            s.jsx)(x, (0,
            a._)({}, e))
        }
          , $ = function(e) {
            var t = e.widget.fallbackUrl;
            return (0,
            s.jsxs)("div", {
                className: "embed-widget__opinary-widget-wrapper",
                children: [(0,
                s.jsx)("div", {
                    className: "embed-widget__opinary-widget",
                    children: (0,
                    s.jsx)("iframe", {
                        loading: "lazy",
                        title: "opinary embed",
                        className: "opinary-iframe",
                        width: "100%",
                        height: "400px",
                        src: t,
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        },
                        frameBorder: "0"
                    })
                }), (0,
                s.jsx)("script", {
                    src: "//compass.pressekompass.net/static/opinary.js"
                })]
            })
        };
        $.propTypes = {
            widget: h.HL.isRequired
        };
        var ee = U()
          , et = U()
          , en = U()
          , ei = U()
          , ea = function(e) {
            return (0,
            s.jsx)(j.k, (0,
            a._)({}, e))
        }
          , er = U()
          , es = function(e) {
            return (0,
            s.jsx)(N, (0,
            a._)({}, e))
        }
          , el = function(e) {
            return (0,
            s.jsx)(C, (0,
            a._)({}, e))
        }
          , eo = function(e) {
            return (0,
            s.jsx)(C, (0,
            a._)({}, e))
        }
          , ec = function(e) {
            return (0,
            s.jsx)(E, (0,
            a._)({}, e))
        }
          , ed = function(e) {
            return (0,
            s.jsx)(B, (0,
            a._)({}, e))
        };
        n(27489);
        var eu = {
            SMALL: "Small"
        }
          , e_ = (0,
        u.Ng)(function(e) {
            var t, n, i = e.article, a = e.shared, r = e.router;
            return {
                url: null === (n = i.content) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.url,
                vertical: a.vertical,
                domain: r.domain,
                isShellArticle: (0,
                v.Bg)(i)
            }
        })(function(e) {
            var t, n = e.elementId, a = void 0 === n ? null : n, r = e.presentation, l = e.widget, o = e.insertEndmark, d = e.isShellArticle, u = e.url, _ = r.size, v = l.baseline, h = l.name, f = l.properties, g = void 0 === f ? {} : f, y = l.publisher, x = (void 0 === y ? {} : y).name, b = i[h];
            if (!b) {
                if (v && "today" === x)
                    b = er;
                else {
                    if ((null == g ? void 0 : null === (t = g.embed) || void 0 === t ? void 0 : t.type) !== "ALL_PURPOSE_EMBED")
                        return null;
                    b = ea
                }
            }
            var w = u.canonical.includes("/sports")
              , j = c()("embed-widget", "embedWidget", {
                "embed-widget__small-widget": _ === eu.SMALL,
                "embed-widget__twitter": "tweet_embed" === h && _ === eu.SMALL,
                "embed-widget__youtube": "youtubeplus" === h,
                "embed-widget__opinary": "opinary" === h,
                "embed-widget__vimeo": "vimeo" === h,
                "embed-widget__pinterest": /pinterest/.test(h),
                "embedded-endmark": void 0 !== o && o,
                "embed-widget--shell-article": void 0 !== d && d,
                "embed-widget--scroll-table": w
            }, "embed-widget--".concat(_))
              , N = "advanced_embed" === h && v && !!((0,
            p.sc)(m()(g, "['embed-code']", "")) || "").match(/class=["“”]menu-embed["“”]/);
            return (0,
            s.jsx)("section", {
                id: a && "anchor-".concat(a),
                className: N ? "embed-widget__menu" : j,
                "data-testid": "embed-widget",
                children: b(e)
            })
        })
          , em = n(49079);
        n(78461);
        var ep = "blockquote";
        let ev = function(e) {
            var t = e.attribution
              , n = void 0 === t ? null : t
              , i = e.source
              , l = e.text
              , o = e.elementId
              , c = void 0 === o ? null : o
              , d = e.dataAttributes;
            return (0,
            s.jsx)("section", (0,
            r._)((0,
            a._)({
                className: ep,
                id: c && "anchor-".concat(c)
            }, d || {}), {
                children: (0,
                s.jsxs)("blockquote", {
                    className: "".concat(ep, "__quote"),
                    cite: n,
                    children: [(0,
                    p.sc)(void 0 === l ? "" : l).split(/[\n\r]+/).map(function(e) {
                        return (0,
                        s.jsx)("p", {
                            children: e
                        }, (0,
                        p.HZ)(e))
                    }), (0,
                    s.jsx)("small", {
                        className: "".concat(ep, "__source"),
                        children: (0,
                        s.jsx)(em.H, {
                            href: void 0 === i ? null : i,
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: (0,
                            s.jsx)("span", {
                                children: (0,
                                p.sc)(n)
                            })
                        })
                    })]
                })
            }))
        };
        var eh = n(6272)
          , ef = function(e) {
            var t = e.widget
              , n = (void 0 === t ? {} : t).properties
              , i = n["featuredlink-headline"]
              , a = n["featuredlink-label"]
              , r = n["featuredlink-linktext"]
              , l = n["featuredlink-image"]
              , o = [{
                url: n["featuredlink-linkurl"],
                label: (0,
                p.sc)(a),
                title: (0,
                p.sc)(i || r),
                thumbnail: l
            }];
            return (0,
            s.jsx)(eh.A, {
                title: "Related",
                elementId: "related",
                linkTracking: "related",
                items: o
            })
        };
        ef.propTypes = {
            widget: h.HL
        };
        var eg = n(37341);
        function ey(e) {
            var t = e.content
              , n = e.lazyloaded
              , i = e.elementId
              , a = void 0 === i ? "" : i
              , r = t.href
              , l = t.blank
              , o = t.image
              , d = o.altText
              , u = o.caption
              , _ = o.headline
              , m = o.source
              , p = o.url
              , v = (null == m ? void 0 : m.name) || ""
              , h = (null == m ? void 0 : m.copyright) || ""
              , f = "Image::".concat(d, "|").concat(v).concat(h ? "|".concat(h) : "")
              , g = (0,
            s.jsxs)("div", {
                className: c()("image-liftout__overlay layout-grid-item--with-gutter-s-only", {
                    "image-liftout__overlay--opacity-title": _.primary
                }),
                children: [(0,
                s.jsx)(L.V, {
                    responsiveFlavors: {
                        s: I.Ay.FOCAL_320x160,
                        m: I.Ay.FOCAL_678x339,
                        l: I.Ay.FOCAL_920x460,
                        xl: I.Ay.FOCAL_1160x580
                    },
                    alt: f,
                    url: p.primary,
                    className: "image-liftout__image",
                    lazyloaded: void 0 === n || n
                }), (0,
                s.jsx)("div", {
                    className: "image-liftout__label-wrapper",
                    children: (0,
                    s.jsx)("span", {
                        className: "image-liftout__label",
                        children: u
                    })
                })]
            });
            return (0,
            s.jsxs)("figure", {
                className: "image-liftout",
                id: a ? "anchor-".concat(a) : void 0,
                children: [r ? (0,
                s.jsx)("a", {
                    href: r,
                    target: l ? "_blank" : null,
                    rel: l ? "noreferrer" : null,
                    title: u,
                    children: g
                }) : g, (0,
                s.jsx)(eg.A, {
                    image: t.image,
                    className: "image-liftout__caption layout-grid-item--with-gutter-s-only"
                })]
            })
        }
        n(70358),
        ey.propTypes = {
            content: h.Sl.isRequired,
            lazyloaded: k().bool,
            elementId: k().string
        };
        var ex = n(53371)
          , eb = n(68025)
          , ew = n.n(eb)
          , ej = {
            portrait: {
                small: {
                    s: I.Ay.FIT_760w,
                    m: I.Ay.FIT_560w,
                    l: I.Ay.FIT_320w,
                    xl: I.Ay.FIT_360w
                },
                medium: {
                    s: I.Ay.FIT_760w,
                    l: I.Ay.FIT_560w
                },
                large: {
                    s: I.Ay.FIT_760w,
                    m: I.Ay.FIT_560w,
                    l: I.Ay.FIT_320w,
                    xl: I.Ay.FIT_678w
                }
            },
            landscape: {
                small: {
                    s: I.Ay.FIT_760w,
                    m: I.Ay.FIT_560w,
                    l: I.Ay.FIT_320w,
                    xl: I.Ay.FIT_360w
                },
                medium: {
                    s: I.Ay.FIT_760w,
                    l: I.Ay.FIT_560w
                },
                large: {
                    s: I.Ay.FIT_760w,
                    m: I.Ay.FIT_1000w,
                    xl: I.Ay.FIT_860w
                },
                fullBleed: {
                    s: I.Ay.FIT_760w,
                    m: I.Ay.FIT_1000w,
                    xl: I.Ay.FIT_2000w
                }
            }
        };
        function eN(e) {
            return e.height > e.width
        }
        function eC(e) {
            return "FULL_BLEED" === e
        }
        function eT(e) {
            return "small" === e || "halfsize" === e
        }
        function eA(e) {
            return "medium" === e || "normal" === e || null === e
        }
        function ek(e) {
            var t, n, i, a, r = e.content, l = r.image, o = r.image.caption, d = e.presentation, u = e.lazyloaded, _ = e.elementId, m = void 0 === _ ? "" : _, p = c()((a = {},
            (0,
            b._)(a, ew().fullBleedContainer, eC(d)),
            (0,
            b._)(a, ew().inlineImage, !eC(d)),
            (0,
            b._)(a, ew().large, !eT(d) && !eA(d) && !eC(d)),
            (0,
            b._)(a, ew().medium, eA(d)),
            (0,
            b._)(a, ew().small, eT(d)),
            (0,
            b._)(a, ew().portrait, eN(l)),
            (0,
            b._)(a, ew().noCaption, "string" != typeof o || o.length <= 0),
            (0,
            b._)(a, ew().electionCard, null === (i = l.imageContentType) || void 0 === i ? void 0 : null === (n = i.includes) || void 0 === n ? void 0 : n.call(i, "ELECTION_CARD")),
            a)), v = l.height, h = l.width;
            return (0,
            s.jsxs)("figure", {
                className: p,
                id: m ? "anchor-".concat(m) : void 0,
                children: [(0,
                s.jsx)(L.V, {
                    alt: (0,
                    ex.R)(l),
                    className: c()(ew().image, (0,
                    b._)({}, ew().fullBleed, eC(d))),
                    flavor: "fit",
                    originalHeight: v,
                    originalWidth: h,
                    responsiveFlavors: (t = ej[eN(l) ? "portrait" : "landscape"],
                    t = eT(d) ? t.small : eA(d) ? t.medium : eC(d) ? t.fullBleed : t.large),
                    retina: !0,
                    url: l.url.primary,
                    lazyloaded: void 0 === u || u
                }), (0,
                s.jsx)(eg.A, {
                    className: ew().caption,
                    image: l
                })]
            })
        }
        ek.propTypes = {
            content: h.Sl.isRequired,
            presentation: k().string.isRequired,
            lazyloaded: k().bool,
            elementId: k().string
        };
        var eL = n(64759);
        function eI() {
            return (0,
            s.jsx)("div", {
                className: "inline-video placeholder",
                "data-testid": "inline-video-placeholder"
            })
        }
        n(59880),
        n(45391);
        var eS = "liftout";
        function eO(e) {
            var t, n = e.elementId, i = e.size, a = void 0 === i ? "small" : i, r = e.text;
            return r ? (0,
            s.jsx)("div", {
                id: n && "anchor-".concat(n),
                className: c()(eS, (t = {},
                (0,
                b._)(t, "".concat(eS, "--small"), "small" === a),
                (0,
                b._)(t, "".concat(eS, "--large"), "large" === a),
                t)),
                "data-testid": "liftout",
                children: (0,
                s.jsx)("p", {
                    className: "".concat(eS, "__text"),
                    children: (0,
                    p.sc)(r)
                })
            }) : null
        }
        eO.propTypes = {
            elementId: k().string,
            size: k().oneOf(["small", "medium", "large"]),
            text: k().string.isRequired
        };
        var eE = n(97247)
          , eR = n(21410)
          , eP = n(16927)
          , eF = n(4902)
          , eM = n(65811)
          , eD = n.n(eM);
        let eB = (0,
        u.Ng)(function(e) {
            return {
                domain: e.router.domain
            }
        })(function(e) {
            var t = e.baseline
              , n = e.domain;
            (0,
            l.useEffect)(function() {
                var e;
                (e = (0,
                eP._)(function() {
                    return (0,
                    eF.__generator)(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, (0,
                            g.A)("//code.jquery.com/jquery-2.2.4.min.js")];
                        case 1:
                            return e.sent(),
                            [4, (0,
                            g.A)("//nvcdn.".concat(n || "nbcnews.com", "/_elliott/jenga?widgets=newsletter"))];
                        case 2:
                            return e.sent(),
                            new window.$j.ModuleLoader("polls").loadCSS = !1,
                            [2]
                        }
                    })
                }),
                function() {
                    return e.apply(this, arguments)
                }
                )()
            }, [n]);
            var i = (0,
            l.useCallback)(function(e) {
                if (e.target && "INPUT" === e.target.tagName) {
                    for (var t = "checked", n = e.target, i = n.parentNode.parentNode.querySelectorAll("label"), a = 0; a < i.length; a += 1)
                        i[a].classList ? i[a].classList.remove(t) : i[a].className = i[a].className.replace(t, "");
                    n.parentNode.className += " ".concat(t)
                }
            }, []);
            return (0,
            s.jsx)("div", {
                className: eD().container,
                "data-testid": "newsvine-poll",
                children: (0,
                s.jsx)("div", {
                    className: eD().pollWrapper,
                    dangerouslySetInnerHTML: {
                        __html: t
                    },
                    onClick: function(e) {
                        return i(e)
                    }
                })
            })
        });
        var eU = n(82440)
          , eH = n.n(eU)
          , eq = n(51845)
          , ez = n(30786)
          , eV = n(89903)
          , eW = n(96491)
          , eG = n(32240)
          , eK = n(10616)
          , eY = n(76550);
        (0,
        eq.stub)("register", "mbt_ecommerce_shop_button", {
            allowDuplicate: !0
        });
        var eZ = function(e) {
            var t;
            return null == e ? void 0 : null === (t = e.offers) || void 0 === t ? void 0 : t[0]
        }
          , eX = function(e) {
            var t, n = e.vertical, i = e.product, a = eZ(i), r = (0,
            eY.uG)(a).list, s = null == a ? void 0 : null === (t = a.seller) || void 0 === t ? void 0 : t.name;
            return (0,
            eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, n) && (s = "Comprar"),
            {
                name: i.name,
                listPrice: r,
                seller: s
            }
        }
          , eJ = function(e) {
            var t = e.vertical
              , n = e.product;
            (0,
            eq.stub)("track", "mbt_ecommerce_shop_button", (0,
            a._)({
                action: "itemClick"
            }, eX({
                vertical: t,
                product: n
            })))
        }
          , eQ = n(34846)
          , e$ = n(20913)
          , e0 = n(40079)
          , e1 = n(96365);
        n(55598);
        let e2 = function(e, t) {
            var n, i = e.productId, a = e.name, r = e.listPrice, o = e.salePrice, d = void 0 === o ? "" : o, u = e.productUrl, _ = e.priceDiscountPrefixText, m = e.isProductUnit, p = void 0 !== m && m, v = e.showPercentOff, h = void 0 !== v && v, f = e.seller, g = e.additionalStyles, y = void 0 === g ? {} : g, x = e.block, b = void 0 === x ? "ListicleProduct" : x, w = e.isLink, j = e.articlePublishDate, N = void 0 === j ? "" : j, C = e.vertical, T = e.target, A = e.trackingCode, k = void 0 === A ? "mbt_ecommerce_shop_button" : A, L = t.canonicalUrl, I = (0,
            eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, void 0 === C ? "" : C), S = (0,
            eQ.Bd)().t;
            if ((0,
            l.useEffect)(function() {
                (0,
                eq.stub)("register", k, {
                    allowDuplicate: !0
                })
            }, []),
            N) {
                var O = (0,
                ez.getDateTime)("Wed Apr 15 2020 00:00:00");
                n = (0,
                ez.getDateTime)(N) > O ? u : (0,
                eG.Ay)({
                    url: u,
                    canonicalUrl: void 0 === L ? "" : L
                })
            } else
                n = u;
            var E = "WaffleProduct" === b
              , R = (0,
            e0.o)(f)
              , P = ["".concat(b, "__priceBtn"), y.cost, {
                "shop-button-info__cost-fit-text": R && !h
            }]
              , F = (0,
            eY.T2)({
                salePrice: d,
                listPrice: r
            })
              , M = (void 0 === _ ? "" : _) || S("Now")
              , D = p ? "f4" : (0,
            e0.T)(f)
              , B = (0,
            eY.rt)(r, d)
              , U = !!B && h && F
              , H = p ? (0,
            s.jsxs)("div", {
                className: "shop-button-info__wrapper-outer",
                "data-testid": "shop-button-info__product-unit",
                children: [(0,
                s.jsx)("div", {
                    className: "shop-button-info__wrapper-inner",
                    children: (0,
                    s.jsx)("span", {
                        className: c()(P),
                        children: (0,
                        s.jsxs)(s.Fragment, {
                            children: [F && (0,
                            s.jsxs)("div", {
                                className: "shop-button-info-price shop-button-info__sale-cost",
                                children: ["$", d]
                            }), (0,
                            s.jsxs)("div", {
                                className: c()("shop-button-info-price shop-button-info__list-cost", {
                                    "strike fw5": F
                                }),
                                children: ["$", r]
                            }), p && (0,
                            s.jsx)("div", {
                                className: c()("shop-button-info-price shop-button-info__vendor-name-v2", D),
                                children: f
                            })]
                        })
                    })
                }), U && (0,
                s.jsx)("div", {
                    className: "shop-button-info__percent-off",
                    "data-testid": "percent-off",
                    children: "".concat(M, " ").concat(B, "% off")
                })]
            }) : (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsx)(e1.A, {
                    additionalStyles: y,
                    block: b,
                    isWaffle: E,
                    listPrice: r,
                    salePrice: d,
                    name: a,
                    seller: f,
                    shouldTrackClicks: !1,
                    trackingCode: k
                })
            });
            if (void 0 === w || w) {
                var q = I ? u : n
                  , z = (0,
                e$.Dw)(q)
                  , V = z.productAsin
                  , W = z.associateTag;
                return (0,
                s.jsx)(eE.A, {
                    className: c()("".concat(b, "__shopButtons"), {
                        "shop-button-info__shop-fit-text": R && !p
                    }, y.shop),
                    "data-aps-asc-tag": W,
                    "data-aps-asin": V,
                    "data-product-id": i,
                    "data-testid": "shop-button-info-link",
                    href: q,
                    onClick: function() {
                        (0,
                        eq.stub)("track", k, {
                            action: "itemClick",
                            name: a,
                            listPrice: r,
                            seller: f
                        })
                    },
                    rel: "sponsored noopener noreferrer",
                    target: E ? void 0 === T ? "_blank" : T : "_blank",
                    children: H
                }, n)
            }
            return (0,
            s.jsx)("div", {
                className: c()("".concat(b, "__shopButtons"), {
                    "shop-button-info__shop-fit-text": R && !p
                }, y.shop),
                "data-testid": "shop-button-info",
                children: H
            }, n)
        };
        var e6 = n(94844)
          , e4 = n(65071)
          , e3 = n(62870)
          , e7 = n(46293)
          , e8 = n.n(e7)
          , e9 = function(e) {
            var t, n = e.children, i = e.isLarge, a = void 0 !== i && i, r = e.productName, l = (0,
            eK.$h)({
                componentName: "listicle-product",
                pageRegion: "article-body",
                componentTitle: void 0 === r ? "" : r
            });
            return (0,
            s.jsx)("div", {
                className: c()("".concat("listicleProduct"), "dn-print mv8", (t = {},
                (0,
                b._)(t, e8().gridContainerLarge, a),
                (0,
                b._)(t, "listicle-product__grid-container--large", a),
                (0,
                b._)(t, "listicle-product__grid-container--small", !a),
                t)),
                "data-activity-map": l,
                "data-testid": "listicle-product-container",
                children: (0,
                s.jsx)("div", {
                    className: "listicle-product__grid-row",
                    children: void 0 === n ? null : n
                })
            })
        };
        e9.propTypes = {
            children: k().node,
            isLarge: k().bool,
            productName: k().string
        };
        var e5 = n(85193)
          , te = n.n(e5)
          , tt = function(e) {
            var t = e.media
              , n = e.selectMedia
              , i = void 0 === n ? function() {}
            : n
              , a = e.additionalStyles
              , r = void 0 === a ? {} : a
              , l = e.selectedIdx
              , o = void 0 === l ? -1 : l
              , d = e.isMobile
              , u = void 0 !== d && d;
            return (0,
            s.jsx)("div", {
                className: "df justify-start",
                children: (0,
                s.jsx)("ul", {
                    className: c()(te().mediaContainer, r.container),
                    children: t.map(function(e, t) {
                        var n = e.url;
                        return (0,
                        s.jsx)("li", {
                            className: c()(te().mediaItem, r.item, (0,
                            b._)({}, te().mobile, u)),
                            "data-testid": "promotional-media-item",
                            children: (0,
                            s.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    return i(n.primary, t)
                                },
                                className: c()((0,
                                b._)({}, te().selected, t === o), "css-reset-btn"),
                                children: (0,
                                s.jsx)(L.V, {
                                    url: n.primary,
                                    responsiveFlavors: {
                                        s: I.Ay.FOCAL_260x260
                                    },
                                    flavor: "focal"
                                })
                            })
                        }, n.primary)
                    })
                })
            })
        };
        tt.propTypes = {
            media: k().arrayOf(k().shape({
                url: k().shape({
                    primary: k().string
                })
            })).isRequired,
            selectMedia: k().func,
            additionalStyles: k().shape({
                container: k().oneOfType([k().string, k().arrayOf(k().string), k().bool]),
                item: k().oneOfType([k().string, k().arrayOf(k().string), k().bool])
            }),
            selectedIdx: k().number,
            isMobile: k().bool
        };
        var tn = n(3499)
          , ti = n.n(tn)
          , ta = function(e) {
            var t, n, i, a = e.pros, r = void 0 === a ? {
                label: null,
                items: []
            } : a, l = e.cons, o = void 0 === l ? {
                label: null,
                items: []
            } : l, d = e.dataActivityMapId, u = e.isOde;
            return (0,
            s.jsxs)("div", {
                className: c()(ti().prosConsContainer, (0,
                b._)({}, ti().isOde, void 0 !== u && u)),
                "data-testid": "listicle-product__pros-cons-container",
                "data-activity-map": d,
                children: [(0,
                s.jsxs)("div", {
                    className: ti().prosConsChild,
                    children: [(0,
                    s.jsx)("div", {
                        className: ti().prosConsLabel,
                        children: r.label || T.Ay.t("What we like")
                    }), (0,
                    s.jsx)("ul", {
                        className: ti().prosConsItems,
                        children: null === (t = r.items) || void 0 === t ? void 0 : t.slice(0, 3).map(function(e) {
                            return (0,
                            s.jsx)("li", {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }, e)
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: ti().prosConsChild,
                    children: [(0,
                    s.jsx)("div", {
                        className: ti().prosConsLabel,
                        children: o.label || T.Ay.t("Something to note")
                    }), (null === (n = o.items) || void 0 === n ? void 0 : n.length) > 0 && (0,
                    s.jsx)("ul", {
                        className: ti().prosConsItems,
                        children: o.items.slice(0, 3).map(function(e) {
                            return (0,
                            s.jsx)("li", {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }, e)
                        })
                    }), !((null === (i = o.items) || void 0 === i ? void 0 : i.length) > 0) && (0,
                    s.jsx)("div", {
                        className: ti().prosConsFallback,
                        children: T.Ay.t("Nothing to note at this time")
                    })]
                })]
            })
        }
          , tr = k().shape({
            label: k().string,
            items: k().arrayOf(k().string)
        });
        ta.propTypes = {
            pros: tr,
            cons: tr,
            dataActivityMapId: k().string.isRequired,
            isOde: k().bool
        },
        n(22494);
        var ts = "listicleProduct"
          , tl = (0,
        e3.t)(function(e) {
            var t, n, i, a, r, o, d, u, _, m, p = e.addClassNames, v = e.articleCanonicalUrl, h = e.articlePublishDate, f = e.hyphenId, g = e.product, y = e.size, x = void 0 === y ? "medium" : y, b = e.vertical, w = (0,
            R._)((0,
            l.useState)(null === (d = g.teaseImage) || void 0 === d ? void 0 : null === (o = d.url) || void 0 === o ? void 0 : o.primary), 2), j = w[0], N = w[1], C = (0,
            R._)((0,
            l.useState)(null === (u = g.teaseImage) || void 0 === u ? void 0 : u.width), 1)[0], T = (0,
            R._)((0,
            l.useState)(null === (_ = g.teaseImage) || void 0 === _ ? void 0 : _.height), 1)[0], A = (0,
            R._)((0,
            l.useState)(0), 2), k = A[0], S = A[1], O = (0,
            R._)((0,
            l.useState)(!1), 2), E = O[0], P = O[1], F = function() {
                P(M.A.isS())
            };
            (0,
            l.useEffect)(function() {
                P(M.A.isS());
                var e = M.A.getSmallMQL();
                return null == e || e.addListener(F),
                (0,
                eq.stub)("register", "mbt_ecommerce_shop_button", {
                    allowDuplicate: !0
                }),
                function() {
                    null == e || e.removeListener(F)
                }
            }, []);
            var D = function(e, t) {
                N(e),
                S(t)
            }
              , B = function() {
                var e;
                return null == g ? void 0 : null === (e = g.offers) || void 0 === e ? void 0 : e[0]
            }
              , U = function(e) {
                var t, n = null != e ? e : null === (t = B()) || void 0 === t ? void 0 : t.externalUrl;
                if (!(0,
                eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, b)) {
                    var i = (0,
                    ez.getDateTime)("Wed Apr 15 2020 00:00:00");
                    (0,
                    ez.getDateTime)(h) < i && (n = (0,
                    eG.Ay)({
                        url: n,
                        canonicalUrl: v
                    }))
                }
                return n
            }
              , H = function(e) {
                var t, n = g.id, i = g.name, a = g.teaseImage, r = null == e ? void 0 : null === (t = e.url) || void 0 === t ? void 0 : t.primary, l = null == e ? void 0 : e.width, o = null == e ? void 0 : e.height, d = "large" === x, u = d ? {
                    s: I.Ay.FOCAL_560x560
                } : {
                    s: I.Ay.FIT_320w,
                    m: I.Ay.FIT_360w,
                    l: I.Ay.FIT_260w,
                    xl: I.Ay.FIT_260w
                }, _ = d ? "focal" : "fit", m = d ? 560 : l || C, p = d ? 560 : o || T, v = c()("".concat(ts, "__pictureLink"), "listicle-product__picture-link", {
                    db: !r,
                    "db-m dn": !E,
                    "listicle-product__picture-link--isOde": d
                }), h = U();
                return (0,
                s.jsxs)("div", {
                    className: v,
                    "data-testid": "listicle-product__picture-link-wrapper",
                    children: [(0,
                    s.jsx)(eE.A, {
                        className: "w-100",
                        "data-product-id": n,
                        "data-testid": "listicle-product-picture-link",
                        href: h,
                        onClick: function() {
                            return eJ({
                                vertical: b,
                                product: g
                            })
                        },
                        rel: "sponsored noopener noreferrer",
                        target: "_blank",
                        children: (0,
                        s.jsx)(L.V, {
                            alt: (null == a ? void 0 : a.altText) || i,
                            flavor: _,
                            lazyloaded: !0,
                            originalHeight: p,
                            originalWidth: m,
                            responsiveFlavors: u,
                            url: r || j
                        })
                    }), (0,
                    s.jsx)(e6.e, {
                        contentId: n,
                        contentType: e4.Ax,
                        options: {
                            isThumbnail: !0,
                            showCTA: !0
                        }
                    })]
                })
            }
              , q = g.id
              , z = g.description
              , V = g.name
              , W = g.offers
              , G = g.promotionalMedia
              , K = g.prosAndCons
              , Y = U()
              , Z = (0,
            e$.Dw)(Y)
              , X = Z.productAsin
              , J = Z.associateTag
              , Q = (z || {}).primary
              , $ = K || {}
              , ee = $.pros
              , et = void 0 === ee ? {} : ee
              , en = $.cons
              , ei = "large" === x
              , ea = !!(null == G ? void 0 : G.length) && ei
              , er = (null == et ? void 0 : null === (m = et.items) || void 0 === m ? void 0 : m.length) > 0;
            return (0,
            s.jsx)("div", {
                id: q,
                className: void 0 === p ? "" : p,
                "data-hyphen-id": (void 0 === f ? "" : f) || void 0,
                "data-testid": "listicle-product",
                children: (0,
                s.jsxs)(e9, {
                    isLarge: ei,
                    productName: V,
                    children: [(0,
                    s.jsxs)("div", {
                        className: c()("listicle-product__border", {
                            "df flex-column flex-row-m": ei,
                            hasProsCons: er
                        }),
                        children: [ea && !E && (0,
                        s.jsx)(tt, {
                            additionalStyles: {
                                container: "dn df-m flex-column w-4-m flex-grow-0 flex-shrink-0",
                                item: "mb2"
                            },
                            media: G,
                            selectedIdx: k,
                            selectMedia: D
                        }), (0,
                        s.jsxs)("div", {
                            className: c()("df flex-column items-stretch listicle-product__card-container", {
                                "flex-row-l flex-grow-1": ei,
                                "flex-row-m": !ei,
                                "pb6-m": !er
                            }),
                            children: [H(), ei && (t = g.promotionalMedia,
                            (0,
                            s.jsx)("div", {
                                className: c()("listicle-product__mobile-media", {
                                    dn: E
                                }),
                                "data-testid": "listicle-media-wrapper",
                                children: (0,
                                s.jsx)(eH(), {
                                    afterSlide: function(e) {
                                        return S(e)
                                    },
                                    decorators: [],
                                    slideIndex: k,
                                    withoutControls: !0,
                                    children: t.map(function(e) {
                                        var t;
                                        return (null == e ? void 0 : null === (t = e.url) || void 0 === t ? void 0 : t.primary) && (0,
                                        s.jsx)("div", {
                                            className: "listicle-product__mobile-media-item",
                                            "data-testid": "listicle-media-item",
                                            children: H(e)
                                        }, e.url.primary)
                                    })
                                })
                            })), (0,
                            s.jsxs)("div", {
                                className: c()("".concat(ts, "__productCardInfo pt5 flex-grow-1"), {
                                    pb5: !er
                                }, {
                                    "pt0-m pb0-m": !ei
                                }, "listicle-product__card-info"),
                                children: [ea && E && (0,
                                s.jsx)(tt, {
                                    additionalStyles: {
                                        container: "dn-m df mb7"
                                    },
                                    isMobile: E,
                                    media: G,
                                    selectedIdx: k,
                                    selectMedia: D
                                }), (0,
                                eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, b) && (null == W ? void 0 : null === (n = W[0]) || void 0 === n ? void 0 : n.seller) ? (0,
                                s.jsxs)("p", {
                                    className: "listicle-product__seller-name",
                                    children: ["Vendido por\xa0", W[0].seller.name]
                                }) : null, (0,
                                s.jsxs)("a", {
                                    className: "".concat(ts, "__productTitleLink"),
                                    "data-aps-asc-tag": J,
                                    "data-aps-asin": X,
                                    "data-product-id": q,
                                    "data-testid": "listicle-product-title-link",
                                    href: Y,
                                    onClick: function() {
                                        eJ({
                                            vertical: b,
                                            product: g
                                        })
                                    },
                                    rel: "sponsored noopener noreferrer",
                                    target: "_blank",
                                    children: [(0,
                                    s.jsx)("h2", {
                                        className: c()("listicle-product__headline", {
                                            "listicle-product__headline--no-description": !Q
                                        }),
                                        children: V
                                    }), Q && (0,
                                    s.jsx)("p", {
                                        className: c()("listicle-product__description", {
                                            "listicle-product__description--large": ei
                                        }),
                                        "data-testid": "listicle__description",
                                        children: Q
                                    })]
                                }), (i = g.id,
                                a = g.name,
                                Array.isArray(r = g.offers) && 0 !== r.length ? (0,
                                s.jsx)("div", {
                                    className: "listicle-product__offers",
                                    children: r.map(function(e) {
                                        if (!e)
                                            return null;
                                        var t, n = U(e.externalUrl), r = null === (t = e.seller) || void 0 === t ? void 0 : t.name;
                                        (0,
                                        eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, b) && (r = "Comprar");
                                        var l = (0,
                                        eY.uG)(e)
                                          , o = l.list
                                          , c = l.sale;
                                        return (0,
                                        s.jsx)(e2, {
                                            additionalStyles: {
                                                shop: "listicle-product__button"
                                            },
                                            articlePublishDate: h,
                                            listPrice: o,
                                            name: a,
                                            productId: i,
                                            productUrl: n,
                                            salePrice: c,
                                            seller: r,
                                            vertical: b
                                        }, n)
                                    })
                                }) : null)]
                            })]
                        })]
                    }), er && (0,
                    s.jsx)(ta, {
                        cons: void 0 === en ? {} : en,
                        dataActivityMapId: (0,
                        eK.$h)({
                            componentName: "listicle-product",
                            pageRegion: "article-body",
                            componentTitle: V
                        }),
                        isOde: ei,
                        pros: et
                    })]
                })
            })
        }, void 0, function(e, t, n) {
            var i = e.product.id;
            return t ? n || i : void 0
        })
          , to = n(8118)
          , tc = n.n(to);
        function td(e) {
            var t = e.affiliateLink
              , n = e.onClick
              , i = e.productId
              , a = e.productName;
            return t && i && a ? (0,
            s.jsx)("h2", {
                className: tc()["product-title"],
                "data-testid": "product-title",
                children: (0,
                s.jsx)("a", {
                    className: tc()["product-title__link"],
                    "data-product-id": i,
                    "data-testid": "product-title__link",
                    href: t,
                    onClick: void 0 === n ? function() {}
                    : n,
                    rel: "sponsored noopener noreferrer",
                    target: "_blank",
                    children: a
                })
            }) : null
        }
        var tu = n(75154)
          , t_ = n(46983)
          , tm = n.n(t_)
          , tp = function(e) {
            var t = e.cards
              , n = void 0 === t ? [] : t
              , i = e.currentCardIndex
              , a = void 0 === i ? 0 : i
              , r = e.onResize
              , o = void 0 === r ? function() {}
            : r
              , c = e.onScroll
              , d = void 0 === c ? function() {}
            : c
              , u = e.renderCard
              , _ = void 0 === u ? function() {}
            : u
              , m = e.scrollDistance
              , p = void 0 === m ? 280 : m
              , v = (0,
            l.useRef)(null)
              , h = (0,
            l.useRef)(null)
              , f = (0,
            l.useRef)(null);
            return ((0,
            l.useEffect)(function() {
                var e, t;
                null == h || null === (t = h.current) || void 0 === t || null === (e = t.scrollTo) || void 0 === e || e.call(t, {
                    left: a * p,
                    behavior: "smooth"
                })
            }, [a, p]),
            (0,
            l.useEffect)(function() {
                var e = null == h ? void 0 : h.current
                  , t = function() {
                    if ((null == v ? void 0 : v.current) && e) {
                        var t = v.current.clientWidth
                          , n = e.scrollWidth
                          , i = e.scrollLeft;
                        o(i > 0, n - i > t)
                    }
                }
                  , i = function() {
                    t(),
                    f.current && clearTimeout(f.current);
                    var i = function() {
                        var t, i, a = e.scrollLeft;
                        if (e.scrollWidth - a - e.clientWidth > 0)
                            return Math.round(a / p);
                        var r = Math.floor((null !== (i = null === (t = v.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== i ? i : 0) / p) || 1;
                        return Math.max(n.length - r, 0)
                    };
                    f.current = setTimeout(function() {
                        d(i())
                    }, 50)
                };
                return window.addEventListener("resize", t),
                e && e.addEventListener("scroll", i),
                t(),
                function() {
                    window.removeEventListener("resize", t),
                    e && e.removeEventListener("scroll", i)
                }
            }, [o, d, p, n.length]),
            n.length) ? (0,
            s.jsx)("div", {
                className: tm().carousel,
                "data-testid": "carousel",
                ref: v,
                children: (0,
                s.jsx)("div", {
                    className: tm().carousel__slide,
                    ref: h,
                    "data-testid": "carousel-slide",
                    children: n.map(function(e, t) {
                        return _(e, t, "".concat(tm().carousel__card))
                    })
                })
            }) : null
        }
          , tv = n(79447)
          , th = n.n(tv)
          , tf = function(e) {
            var t = e.text;
            return (0,
            s.jsx)("div", {
                className: th().flag,
                children: t
            })
        }
          , tg = n(96268)
          , ty = n.n(tg)
          , tx = function(e) {
            var t = e.src
              , n = e.alt;
            return t && n ? (0,
            s.jsx)("img", {
                src: t,
                className: ty().badge,
                alt: n
            }) : null
        }
          , tb = n(80787)
          , tw = n.n(tb);
        function tj(e) {
            var t = e.numberOfPictures
              , n = e.carouselIndex
              , i = e.setCarouselIndex
              , a = e.actionSourceRef;
            return (0,
            s.jsxs)("div", {
                className: tw()["carousel-pagination"],
                "data-testid": "carousel-pagination",
                children: [(0,
                s.jsx)("button", {
                    type: "button",
                    className: tw()["carousel-pagination__chevron-button"],
                    onClick: function() {
                        n > 0 ? i(n - 1) : i(t - 1),
                        a.current = "click"
                    },
                    "aria-label": "Previous image",
                    "data-testid": "carousel-pagination__previous-btn",
                    children: (0,
                    s.jsx)("span", {
                        className: c()("icon", "icon-chevron-left", tw()["carousel-pagination__chevron-icon"])
                    })
                }), (0,
                s.jsx)("div", {
                    className: tw()["carousel-pagination__paging-dots"],
                    "data-testid": "carousel-pagination__paging-dots",
                    children: Array.from({
                        length: t
                    }).map(function(e, r) {
                        var l = r + 1;
                        return (0,
                        s.jsx)("button", {
                            type: "button",
                            "aria-label": "Image ".concat(l, " of ").concat(t),
                            onClick: function() {
                                i(r),
                                a.current = "dot"
                            },
                            "data-testid": "carousel-pagination__paging-dot",
                            className: c()(tw()["carousel-pagination__paging-dot"], (0,
                            b._)({}, tw()["carousel-pagination__paging-dot-current"], n === r))
                        }, "".concat(l, "/").concat(t))
                    })
                }), (0,
                s.jsx)("button", {
                    type: "button",
                    className: tw()["carousel-pagination__chevron-button"],
                    onClick: function() {
                        n < t - 1 ? i(n + 1) : i(0),
                        a.current = "click"
                    },
                    "aria-label": "Next image",
                    "data-testid": "carousel-pagination__next-btn",
                    children: (0,
                    s.jsx)("span", {
                        className: c()("icon", "icon-chevron-right", tw()["carousel-pagination__chevron-icon"])
                    })
                })]
            })
        }
        var tN = function(e) {
            var t, n = e.media, i = e.className, a = e.link, r = e.product, l = e.flavor, o = e.sizes, d = e.altText, u = e.contentId, _ = e.contentType, m = e.onClick, p = e.index, v = e.badgeAlt, h = e.badgeUrl, f = null == n ? void 0 : null === (t = n.url) || void 0 === t ? void 0 : t.primary, g = null == n ? void 0 : n.width, y = null == n ? void 0 : n.height;
            if (!f)
                return null;
            var x = (null != r ? r : {}).id
              , w = h && v;
            return (0,
            s.jsxs)("div", {
                className: c()(i, (0,
                b._)({}, tw()["picture-carousel__first-picture"], 0 === p)),
                children: [w && 0 === p && (0,
                s.jsx)(tx, {
                    src: h,
                    alt: v
                }), a ? (0,
                s.jsx)(eE.A, {
                    className: "w-100",
                    href: a,
                    rel: "sponsored noopener noreferrer",
                    "data-testid": "picture-carousel-link",
                    target: "_blank",
                    "data-product-id": x,
                    tabIndex: "-1",
                    onClick: m,
                    children: (0,
                    s.jsx)(L.V, {
                        alt: d,
                        flavor: l,
                        lazyloaded: !0,
                        originalHeight: y,
                        originalWidth: g,
                        responsiveFlavors: o,
                        url: f
                    })
                }) : (0,
                s.jsx)(L.V, {
                    alt: d,
                    flavor: l,
                    lazyloaded: !0,
                    originalHeight: y,
                    originalWidth: g,
                    responsiveFlavors: o,
                    url: f
                }), (0,
                s.jsx)(e6.e, {
                    contentId: u,
                    contentType: _,
                    options: {
                        isThumbnail: !0,
                        showCTA: !0
                    }
                })]
            })
        };
        function tC(e) {
            var t = e.product
              , n = e.media
              , i = e.link
              , a = e.flagName
              , r = e.badgeUrl
              , o = e.badgeAlt
              , c = e.additionalClasses
              , d = e.flavor
              , u = e.size
              , _ = e.sizes
              , m = e.altText
              , p = e.contentId
              , v = e.contentType
              , h = e.onClick
              , f = (0,
            R._)((0,
            l.useState)(0), 2)
              , g = f[0]
              , y = f[1]
              , x = (0,
            l.useRef)(null)
              , b = "large" === u ? "mbt_spotlightode_action" : "mbt_producttease_action";
            if (!n || n.length < 1)
                return null;
            var w = n.length
              , j = function(e, t) {
                (0,
                eq.stub)("track", b, {
                    action: "carousel image ".concat(e),
                    totalImages: w,
                    currentImage: t + 1
                })
            };
            return (0,
            s.jsxs)("div", {
                className: tw()["picture-carousel__carousel-container"],
                children: [(0,
                s.jsxs)("div", {
                    className: c,
                    "aria-roledescription": "carousel",
                    children: [a && (0,
                    s.jsx)(tf, {
                        text: a
                    }), (0,
                    s.jsx)("div", {
                        role: "group",
                        "aria-labelledby": "carousel-images",
                        children: (0,
                        s.jsx)(tp, {
                            cards: n,
                            currentCardIndex: g,
                            onScroll: function(e) {
                                "dot" === x.current ? (j("dot", e),
                                x.current = null) : "click" === x.current ? (j("click", e),
                                x.current = null) : j("swipe", e),
                                y(e)
                            },
                            renderCard: function(e, n, a) {
                                return (0,
                                s.jsx)(tN, {
                                    media: e,
                                    className: a,
                                    link: i,
                                    product: t,
                                    flavor: d,
                                    sizes: _,
                                    altText: m,
                                    contentId: p,
                                    contentType: v,
                                    onClick: h,
                                    index: n,
                                    badgeAlt: o,
                                    badgeUrl: r
                                }, "carousel-picture-".concat(n + 1))
                            }
                        })
                    })]
                }), (0,
                s.jsx)(tj, {
                    numberOfPictures: w,
                    carouselIndex: g,
                    setCarouselIndex: y,
                    actionSourceRef: x
                })]
            })
        }
        var tT = n(70348)
          , tA = n.n(tT)
          , tk = function(e) {
            var t, n = e.children, i = e.isLarge, a = e.productName, r = (0,
            eK.$h)({
                componentName: "listicle-product",
                pageRegion: "article-body",
                componentTitle: a
            });
            return (0,
            s.jsx)("div", {
                className: c()("".concat("listicleProduct"), "dn-print ", (t = {},
                (0,
                b._)(t, tA().gridContainerLarge, i),
                (0,
                b._)(t, "product__grid-container--large", i),
                (0,
                b._)(t, "product__grid-container--small", !i),
                t)),
                "data-activity-map": r,
                "data-testid": "product-container",
                children: (0,
                s.jsx)("div", {
                    className: "product__grid-row",
                    children: n
                })
            })
        }
          , tL = n(71010)
          , tI = n.n(tL)
          , tS = function(e) {
            var t = e.media
              , n = e.selectMedia
              , i = e.additionalStyles
              , a = e.selectedIdx
              , r = e.isMobile;
            return (0,
            s.jsx)("div", {
                className: "df justify-start",
                children: (0,
                s.jsx)("ul", {
                    className: c()(tI().mediaContainer, i.container),
                    children: t.map(function(e, t) {
                        var l = e.url;
                        return (0,
                        s.jsx)("li", {
                            className: c()(tI().mediaItem, i.item, (0,
                            b._)({}, tI().mobile, r)),
                            "data-testid": "promotional-media-item",
                            children: (0,
                            s.jsx)("button", {
                                type: "button",
                                onClick: function() {
                                    return n(l.primary, t)
                                },
                                className: c()((0,
                                b._)({}, tI().selected, t === a), "css-reset-btn"),
                                children: (0,
                                s.jsx)(L.V, {
                                    url: l.primary,
                                    responsiveFlavors: {
                                        s: I.Ay.FOCAL_260x260
                                    },
                                    flavor: "focal"
                                })
                            })
                        }, l.primary)
                    })
                })
            })
        }
          , tO = n(87673)
          , tE = n(57344)
          , tR = n.n(tE)
          , tP = function(e) {
            var t, n, i = e.pros, a = e.cons, r = e.dataActivityMapId, l = e.isOde;
            return (0,
            s.jsxs)("div", {
                className: c()(tR().prosConsContainer, (0,
                b._)({}, tR().isOde, l)),
                "data-testid": "listicle-product__pros-cons-container",
                "data-activity-map": r,
                children: [(0,
                s.jsxs)("div", {
                    className: tR().prosConsChild,
                    children: [(0,
                    s.jsx)("div", {
                        className: tR().prosConsLabel,
                        children: i.label || T.Ay.t("What we like")
                    }), (0,
                    s.jsx)("ul", {
                        className: tR().prosConsItems,
                        children: i.items.slice(0, 3).map(function(e) {
                            return (0,
                            s.jsx)("li", {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }, e)
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: tR().prosConsChild,
                    children: [(0,
                    s.jsx)("div", {
                        className: tR().prosConsLabel,
                        children: a.label || T.Ay.t("Something to note")
                    }), (null === (t = a.items) || void 0 === t ? void 0 : t.length) > 0 && (0,
                    s.jsx)("ul", {
                        className: tR().prosConsItems,
                        children: a.items.slice(0, 3).map(function(e) {
                            return (0,
                            s.jsx)("li", {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }, e)
                        })
                    }), !((null === (n = a.items) || void 0 === n ? void 0 : n.length) > 0) && (0,
                    s.jsx)("div", {
                        className: tR().prosConsFallback,
                        children: T.Ay.t("Nothing to note at this time")
                    })]
                })]
            })
        }
          , tF = n(61796)
          , tM = n.n(tF)
          , tD = {
            fullStar: (0,
            s.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "11",
                viewBox: "0 0 12 11",
                fill: "none",
                children: [(0,
                s.jsx)("path", {
                    className: tM().stroke,
                    d: "M6 0.788302L7.02374 3.84512L7.08034 4.01411L7.25855 4.01572L10.4821 4.04474L7.89125 5.96299L7.74802 6.06903L7.80157 6.23902L8.77009 9.31378L6.14512 7.4425L6 7.33905L5.85488 7.4425L3.22991 9.31378L4.19843 6.23902L4.25198 6.06903L4.10875 5.96299L1.51789 4.04474L4.74145 4.01572L4.91966 4.01411L4.97626 3.84512L6 0.788302Z",
                    stroke: "black",
                    strokeWidth: "0.5"
                }), (0,
                s.jsx)("path", {
                    className: tM().fill,
                    d: "M6 0.00106812L7.2608 3.76573L11.2308 3.80147L8.04002 6.16391L9.23282 9.95066L6 7.64607L2.76718 9.95066L3.95998 6.16391L0.769189 3.80147L4.7392 3.76573L6 0.00106812Z",
                    fill: "black"
                })]
            }),
            halfStar: (0,
            s.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "11",
                height: "12",
                viewBox: "0 0 11 12",
                fill: "none",
                children: [(0,
                s.jsx)("path", {
                    className: tM().stroke,
                    d: "M5.5 1.2883L6.52374 4.34512L6.58034 4.51411L6.75855 4.51572L9.98211 4.54474L7.39125 6.46299L7.24802 6.56903L7.30157 6.73902L8.27009 9.81378L5.64512 7.9425L5.5 7.83905L5.35488 7.9425L2.72991 9.81378L3.69843 6.73902L3.75198 6.56903L3.60875 6.46299L1.01789 4.54474L4.24145 4.51572L4.41966 4.51411L4.47626 4.34512L5.5 1.2883Z",
                    stroke: "#171717",
                    strokeWidth: "0.5"
                }), (0,
                s.jsx)("mask", {
                    id: "mask0_370_1416",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "6",
                    height: "12",
                    children: (0,
                    s.jsx)("rect", {
                        y: "0.501068",
                        width: "5.5",
                        height: "11",
                        fill: "#D9D9D9"
                    })
                }), (0,
                s.jsx)("g", {
                    mask: "url(#mask0_370_1416)",
                    children: (0,
                    s.jsx)("path", {
                        className: tM().fill,
                        d: "M5.5 0.501068L6.7608 4.26573L10.7308 4.30147L7.54002 6.66391L8.73282 10.4507L5.5 8.14607L2.26718 10.4507L3.45998 6.66391L0.269189 4.30147L4.2392 4.26573L5.5 0.501068Z",
                        fill: "#171717"
                    })
                })]
            }),
            emptyStar: (0,
            s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "11",
                viewBox: "0 0 12 11",
                fill: "none",
                children: (0,
                s.jsx)("path", {
                    className: tM().stroke,
                    d: "M6 0.788302L7.02374 3.84512L7.08034 4.01411L7.25855 4.01572L10.4821 4.04474L7.89125 5.96299L7.74802 6.06903L7.80157 6.23902L8.77009 9.31378L6.14512 7.4425L6 7.33905L5.85488 7.4425L3.22991 9.31378L4.19843 6.23902L4.25198 6.06903L4.10875 5.96299L1.51789 4.04474L4.74145 4.01572L4.91966 4.01411L4.97626 3.84512L6 0.788302Z",
                    stroke: "black",
                    strokeWidth: "0.5"
                })
            })
        }
          , tB = function(e) {
            var t, n = e.vertical, i = e.product, a = e.size, r = i.offers.find(function(e) {
                var t;
                return (null == e ? void 0 : null === (t = e.seller) || void 0 === t ? void 0 : t.name) === "Amazon"
            });
            if (!r)
                return null;
            var l = r.customerReviews;
            if (!(null == l ? void 0 : l.count) || !(null == l ? void 0 : null === (t = l.rating) || void 0 === t ? void 0 : t.value))
                return null;
            var o = l.count
              , c = l.rating.value;
            return (0,
            s.jsxs)(eE.A, {
                href: "".concat(r.externalUrl, "#customerReviews"),
                "data-testid": "reviews-link",
                className: tM().rating,
                target: "_blank",
                rel: "sponsored noopener noreferrer",
                onClick: function() {
                    eJ({
                        vertical: n,
                        product: i
                    }),
                    (0,
                    eq.stub)("track", "large" === a ? "mbt_spotlightode_click" : "mbt_producttease_click", {
                        action: "Amazon Reviews click"
                    })
                },
                children: [(0,
                s.jsx)("div", {
                    className: tM().stars,
                    children: function(e) {
                        for (var t = [], n = Math.floor(e), i = 0; i < n; i += 1)
                            t.push(tD.fullStar);
                        var a = e - n;
                        a > 0 && (a >= .5 ? t.push(tD.halfStar) : t.push(tD.emptyStar));
                        var r = 5 - Math.ceil(e);
                        if (r > 0)
                            for (var s = 0; s < r; s += 1)
                                t.push(tD.emptyStar);
                        return t
                    }(c)
                }), o.toLocaleString("en-US"), " ", "Amazon Reviews"]
            })
        };
        n(12827);
        var tU = "product";
        (0,
        eq.stub)("register", "mbt_producttease_click", {
            allowDuplicate: !0
        }),
        (0,
        eq.stub)("register", "mbt_spotlightode_click", {
            allowDuplicate: !0
        }),
        (0,
        eq.stub)("register", "mbt_ecommerce_shop_button", {
            allowDuplicate: !0
        });
        var tH = (0,
        e3.t)(function(e) {
            var t, n, i, a, r, o, d, u, _, m, p, v, h, f, g, y, x, b, w, j, N, C, A, k, S, O, E, P, D, B, U, H, q, z, V, W, G, K, Y, Z, X, J, Q, $, ee, et, en, ei, ea, er, es, el, eo, ec, ed, eu = e.addClassNames, e_ = e.articlePublishDate, em = e.product, ep = e.size, ev = void 0 === ep ? "medium" : ep, eh = e.vertical, ef = e.percentageOffIsVisible, eg = e.detailsHeader, ey = e.htmlElement, ex = e.hyphenId, eb = (0,
            R._)((0,
            l.useState)(null == em ? void 0 : null === (er = em.teaseImage) || void 0 === er ? void 0 : null === (ea = er.url) || void 0 === ea ? void 0 : ea.primary), 2), ew = eb[0], ej = eb[1], eN = (0,
            R._)((0,
            l.useState)(0), 2), eC = eN[0], eT = eN[1], eA = (0,
            R._)((0,
            l.useState)(!1), 2), ek = eA[0], eL = eA[1], eI = (0,
            R._)((0,
            l.useState)(!1), 2), eS = eI[0], eO = eI[1], eR = em.content, eP = em.id, eF = em.name, eM = em.offers, eD = em.productSpecifications, eB = em.promoCode, eU = em.promotionalMedia, eH = em.prosAndCons, eZ = em.teaseImage, eX = (0,
            l.useContext)(F.kj).canonicalUrl;
            (0,
            l.useEffect)(function() {
                eL(M.A.isS());
                var e = function() {
                    eL(M.A.isS())
                };
                return window.addEventListener("resize", e),
                (0,
                eq.stub)("register", "large" === ev ? "mbt_spotlightode_action" : "mbt_producttease_action", {
                    allowDuplicate: !0
                }),
                function() {
                    window.removeEventListener("resize", e)
                }
            }, []);
            var eQ = (0,
            l.useCallback)(function(e) {
                var t, n, i = null != e ? e : null == em ? void 0 : null === (n = em.offers) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.externalUrl;
                if (!(0,
                eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, eh)) {
                    var a = (0,
                    ez.getDateTime)("Wed Apr 15 2020 00:00:00");
                    (0,
                    ez.getDateTime)(e_) < a && (i = (0,
                    eG.Ay)({
                        url: i,
                        canonicalUrl: eX
                    }))
                }
                return i
            }, [e_, eX, em, eh])
              , e0 = function(e, t) {
                ej(e),
                eT(t)
            }
              , e1 = eQ()
              , e3 = eH || {}
              , e7 = e3.pros
              , e8 = void 0 === e7 ? {} : e7
              , e9 = e3.cons
              , e5 = "large" === ev
              , te = !!(null == eU ? void 0 : eU.length) && e5
              , tt = (null == e8 ? void 0 : null === (es = e8.items) || void 0 === es ? void 0 : es.length) > 0
              , tn = (null == eD ? void 0 : eD.length) > 0
              , ti = (null == eU ? void 0 : eU.length) > 1 && !e5
              , ta = !!(null == eR ? void 0 : null === (el = eR.markupAndEmbeds) || void 0 === el ? void 0 : el.length) || tt || tn;
            return (0,
            s.jsxs)("div", {
                id: eP,
                className: void 0 === eu ? "" : eu,
                "data-hyphen-id": ex,
                "data-testid": "article-product-unit",
                children: [(0,
                s.jsx)(td, {
                    affiliateLink: e1,
                    onClick: function() {
                        return eJ({
                            vertical: eh,
                            product: em
                        })
                    },
                    productId: eP,
                    productName: eF
                }), (0,
                s.jsxs)(tk, {
                    isLarge: e5,
                    productName: eF,
                    children: [(0,
                    s.jsxs)("div", {
                        className: c()("product__border", {
                            "df flex-column flex-row-m": e5
                        }),
                        children: [te && !ek && (0,
                        s.jsx)(tS, {
                            media: eU,
                            selectMedia: e0,
                            selectedIdx: eC,
                            additionalStyles: {
                                container: "dn df-m flex-column w-4-m flex-grow-0 flex-shrink-0",
                                item: "mb2"
                            }
                        }), (0,
                        s.jsxs)("div", {
                            className: c()("df flex-column items-stretch product__card-container", {
                                "flex-row-l flex-grow-1": e5,
                                "flex-row-m": !e5
                            }),
                            children: [ti ? (p = (null == eZ ? void 0 : eZ.altText) || eF,
                            v = eQ(),
                            h = null === (t = eU[0].url) || void 0 === t ? void 0 : t.primary,
                            f = {
                                s: I.Ay.FIT_320w,
                                l: I.Ay.FIT_260w,
                                xl: I.Ay.FIT_260w
                            },
                            g = c()("".concat(tU, "__pictureLink"), "product__picture-link", {
                                db: !h,
                                "db-m dn": !ek
                            }),
                            (0,
                            s.jsx)(tC, {
                                product: em,
                                vertical: eh,
                                media: eU,
                                link: v,
                                flagName: null == em ? void 0 : null === (i = em.taxonomy) || void 0 === i ? void 0 : null === (n = i.flag) || void 0 === n ? void 0 : n.name,
                                badgeUrl: null == em ? void 0 : null === (u = em.taxonomy) || void 0 === u ? void 0 : null === (d = u.badge) || void 0 === d ? void 0 : null === (o = d.logos[0]) || void 0 === o ? void 0 : null === (r = o.mediaAsset) || void 0 === r ? void 0 : null === (a = r.url) || void 0 === a ? void 0 : a.primary,
                                badgeAlt: null == em ? void 0 : null === (m = em.taxonomy) || void 0 === m ? void 0 : null === (_ = m.badge) || void 0 === _ ? void 0 : _.name,
                                additionalClasses: g,
                                flavor: "fit",
                                size: ev,
                                sizes: f,
                                altText: p,
                                contentId: eP,
                                contentType: e4.Ax,
                                onClick: function() {
                                    return eJ({
                                        vertical: eh,
                                        product: em
                                    })
                                }
                            })) : (D = null === (b = em.taxonomy) || void 0 === b ? void 0 : null === (x = b.flag) || void 0 === x ? void 0 : x.name,
                            B = (null === (A = em.taxonomy) || void 0 === A ? void 0 : null === (C = A.badge) || void 0 === C ? void 0 : null === (N = C.logos[0]) || void 0 === N ? void 0 : null === (j = N.mediaAsset) || void 0 === j ? void 0 : null === (w = j.url) || void 0 === w ? void 0 : w.primary) || "",
                            U = (null === (S = em.taxonomy) || void 0 === S ? void 0 : null === (k = S.badge) || void 0 === k ? void 0 : k.name) || "",
                            H = null === (O = em.teaseImage) || void 0 === O ? void 0 : O.width,
                            q = null === (E = em.teaseImage) || void 0 === E ? void 0 : E.height,
                            z = null == y ? void 0 : y.width,
                            V = null == y ? void 0 : y.height,
                            G = (W = "large" === ev) ? {
                                s: I.Ay.FOCAL_560x560
                            } : {
                                s: I.Ay.FIT_320w,
                                m: I.Ay.FIT_360w,
                                l: I.Ay.FIT_260w,
                                xl: I.Ay.FIT_260w
                            },
                            K = W ? "focal" : "fit",
                            Y = W ? 560 : z || H,
                            Z = W ? 560 : V || q,
                            X = B && U,
                            J = c()("".concat(tU, "__pictureLink"), "product__picture-link", {
                                db: !ew,
                                "db-m dn": !ek,
                                "product__picture-link--isOde": W
                            }),
                            Q = eQ(),
                            ee = ($ = (0,
                            e$.Dw)(Q)).productAsin,
                            et = $.associateTag,
                            (0,
                            s.jsxs)("div", {
                                className: J,
                                children: [D && (0,
                                s.jsx)(tf, {
                                    text: D
                                }), X && (0,
                                s.jsx)(tx, {
                                    src: B,
                                    alt: U
                                }), (0,
                                s.jsx)(eE.A, {
                                    className: "w-100",
                                    "data-product-id": em.id,
                                    "data-testid": "product-picture-link",
                                    "data-aps-asc-tag": et,
                                    "data-aps-asin": ee,
                                    href: Q,
                                    onClick: function() {
                                        return eJ({
                                            vertical: eh,
                                            product: em
                                        })
                                    },
                                    rel: "sponsored noopener noreferrer",
                                    target: "_blank",
                                    children: (0,
                                    s.jsx)(L.V, {
                                        alt: (null === (P = em.teaseImage) || void 0 === P ? void 0 : P.altText) || em.name,
                                        flavor: K,
                                        lazyloaded: !0,
                                        originalHeight: Z,
                                        originalWidth: Y,
                                        responsiveFlavors: G,
                                        url: ew
                                    })
                                }), (0,
                                s.jsx)(e6.e, {
                                    contentId: em.id,
                                    contentType: e4.Ax,
                                    options: {
                                        isThumbnail: !0,
                                        showCTA: !0
                                    }
                                })]
                            })), (0,
                            s.jsxs)("div", {
                                className: c()("".concat(tU, "__productCardInfo pt5 flex-grow-1"), {
                                    pb5: !tt && !ek
                                }, {
                                    "pt0-m pb0-m": !e5
                                }, "product__card-info"),
                                children: [te && ek && (0,
                                s.jsx)(tS, {
                                    media: eU,
                                    selectMedia: e0,
                                    selectedIdx: eC,
                                    isMobile: ek,
                                    additionalStyles: {
                                        container: "dn-m df mb7"
                                    }
                                }), (0,
                                eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, eh) && (null == eM ? void 0 : null === (en = eM[0]) || void 0 === en ? void 0 : en.seller) ? (0,
                                s.jsxs)("p", {
                                    className: "product__seller-name",
                                    children: ["Vendido por\xa0", eM[0].seller.name]
                                }) : null, (0,
                                s.jsx)(tB, {
                                    vertical: eh,
                                    product: em
                                }), Array.isArray(eM) && eM.map(function(e) {
                                    if (!e)
                                        return null;
                                    var t, n = eQ(e.externalUrl), i = (0,
                                    eV.B0)(eW.UNIVERSAL_CHECKOUT_ENABLED, eh) ? "Comprar" : null === (t = e.seller) || void 0 === t ? void 0 : t.name, a = (0,
                                    eY.uG)(e), r = a.list, l = a.sale, o = a.priceDiscount, c = (null == o ? void 0 : o.prefixText) || "";
                                    return (0,
                                    s.jsx)(e2, {
                                        productId: null == em ? void 0 : em.id,
                                        additionalStyles: {
                                            vendor: "product__vendor",
                                            cost: "product__cost",
                                            shop: "product__button"
                                        },
                                        articlePublishDate: e_,
                                        listPrice: r,
                                        name: null == em ? void 0 : em.name,
                                        productUrl: n,
                                        salePrice: l,
                                        seller: i,
                                        vertical: eh,
                                        priceDiscountPrefixText: c,
                                        isProductUnit: !0,
                                        showPercentOff: ef
                                    }, n)
                                })]
                            })]
                        })]
                    }), eB && (0,
                    s.jsx)("div", {
                        className: "product__promo-container",
                        children: (0,
                        s.jsx)(tu.r, {
                            promoCode: eB.code,
                            text: eB.suffixText,
                            startsAt: null === (eo = eB.eventDateTime) || void 0 === eo ? void 0 : eo.startsAt,
                            endsAt: null === (ec = eB.eventDateTime) || void 0 === ec ? void 0 : ec.endsAt
                        })
                    }), ta && (0,
                    s.jsxs)(tO.n, {
                        additionalStyles: tA(),
                        title: T.Ay.t(eg || "What to know"),
                        suppressScroll: !0,
                        onToggle: function() {
                            (0,
                            eq.stub)("track", "large" === ev ? "mbt_spotlightode_click" : "mbt_producttease_click", {
                                action: eS ? "what to know collapse" : "what to know expand"
                            }),
                            eO(!eS)
                        },
                        isOpen: eS,
                        children: [null == eR ? void 0 : null === (ed = eR.markupAndEmbeds) || void 0 === ed ? void 0 : ed.map(function(e, t) {
                            return ey(e, t)
                        }), tn && (ei = eD.map(function(e) {
                            return "<strong>".concat(e.label, ":</strong> ").concat(e.description)
                        }),
                        (0,
                        s.jsx)("div", {
                            className: "productSpecs",
                            dangerouslySetInnerHTML: {
                                __html: ei.join("\xa0| ")
                            }
                        })), tt && (0,
                        s.jsx)(tP, {
                            pros: e8,
                            cons: void 0 === e9 ? {} : e9,
                            isOde: e5,
                            dataActivityMapId: (0,
                            eK.$h)({
                                componentName: "product",
                                pageRegion: "article-body",
                                componentTitle: eF
                            })
                        })]
                    })]
                })]
            })
        }, void 0, function(e, t, n) {
            var i = e.product.id;
            return t ? n || i : void 0
        });
        n(28641);
        var tq = "pullquote";
        let tz = function(e) {
            var t, n = e.text, i = e.attribution, l = void 0 === i ? null : i, o = e.elementId, d = void 0 === o ? null : o, u = e.quip, _ = void 0 === u ? null : u, m = e.size, v = void 0 === m ? "small" : m, h = e.dataAttributes;
            return n ? (0,
            s.jsxs)("div", (0,
            r._)((0,
            a._)({
                id: d && "anchor-".concat(d),
                className: c()(tq, (t = {},
                (0,
                b._)(t, "".concat(tq, "--small"), "small" === v),
                (0,
                b._)(t, "".concat(tq, "--large"), "large" === v),
                t))
            }, h || {}), {
                "data-testid": "".concat(tq, "-").concat(v),
                children: [(0,
                s.jsx)("p", {
                    className: "".concat(tq, "__quote"),
                    "data-testid": "".concat(tq, "-quote"),
                    children: (0,
                    p.sc)(n)
                }), (l || _) && (0,
                s.jsxs)("p", {
                    className: "".concat(tq, "__attribution"),
                    children: [(0,
                    s.jsx)("cite", {
                        className: "".concat(tq, "__cite"),
                        "data-testid": "".concat(tq, "-attribution"),
                        children: (0,
                        p.sc)(l)
                    }), l && _ && (0,
                    s.jsx)("span", {
                        children: "\xa0"
                    }), (0,
                    s.jsx)("span", {
                        className: "".concat(tq, "__quip"),
                        "data-testid": "pullquote-quip",
                        children: (0,
                        p.sc)(_)
                    })]
                })]
            })) : null
        };
        var tV = n(19747)
          , tW = n(90327)
          , tG = n(60916)
          , tK = n(21737)
          , tY = n(8436)
          , tZ = n(53760)
          , tX = n.n(tZ)
          , tJ = function(e) {
            var t, n, i, a, r, l = e.content, o = e.elementId, d = void 0 === o ? null : o, u = (0,
            tK.Cn)().vertical, _ = (0,
            eQ.Bd)().t, p = (0,
            F.Jp)();
            if (!l)
                return null;
            var v = l.teaseImage
              , h = l.authors
              , f = l.type
              , g = void 0 === f ? "slideshow" : f
              , y = l.id
              , x = l.cookTime
              , w = l.prepTime
              , j = l.servingSize
              , N = l.yield
              , C = "recipe" === g ? "Get The Recipe" : "Slideshow"
              , T = m()(l, "url.primary", "")
              , A = m()(l, "headline.primary", "")
              , k = (0,
            ex.l)(l) || A
              , S = v || {}
              , O = S.url
              , E = S.height
              , R = S.width
              , P = (null === (t = (0,
            eV.B0)(eW.MYNEWS_ENABLED, u, p)) || void 0 === t ? void 0 : t.teaseSaveEnabled) || !1;
            return (0,
            s.jsxs)("div", {
                id: d && "anchor-".concat(d),
                className: tX().card,
                "data-testid": "article-card",
                children: [O && (0,
                s.jsxs)("div", {
                    className: tX().imageWrapper,
                    "data-testid": "article-card-image",
                    children: [(0,
                    s.jsxs)("div", {
                        className: tX().tiltWrapper,
                        children: [(0,
                        s.jsx)(eE.A, {
                            to: T,
                            children: (0,
                            s.jsx)(L.V, {
                                url: O.primary,
                                responsiveFlavors: {
                                    s: I.Ay.FOCAL_600x300,
                                    m: I.Ay.FOCAL_720x360,
                                    l: I.Ay.FOCAL_920x460,
                                    xl: I.Ay.FOCAL_860x430
                                },
                                className: tX().coverImage,
                                alt: k,
                                lazyloaded: !0,
                                originalHeight: E,
                                originalWidth: R
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: tX().byline,
                            children: (0,
                            tG.ue)(v)
                        })]
                    }), P ? (0,
                    s.jsx)(e6.e, {
                        contentId: y,
                        contentType: g,
                        options: {
                            isThumbnail: !0,
                            showCTA: !0
                        },
                        additionalClasses: tX().save
                    }) : null]
                }), (0,
                s.jsxs)("div", {
                    className: c()("content-link-card", tX().txtWrapper, (r = {},
                    (0,
                    b._)(r, tX().withDek, "recipe" !== g),
                    (0,
                    b._)(r, tX().noImg, !O),
                    r)),
                    "data-testid": "article-card-text",
                    children: [(0,
                    s.jsx)(tW.d, {
                        unibrow: {
                            url: {
                                primary: T
                            },
                            override: _(C)
                        },
                        hasDefaultTextStyle: !0,
                        children: (null === (n = l.slides) || void 0 === n ? void 0 : n.length) && (0,
                        s.jsxs)("span", {
                            className: tX().photos,
                            "data-testid": "article-card-photo-count",
                            children: ["\xa0\xa0", l.slides.length, " ", _("photos")]
                        })
                    }), (0,
                    s.jsx)("h3", {
                        className: tX().title,
                        children: (0,
                        s.jsxs)(eE.A, {
                            to: T,
                            "data-testid": "article-card-text-link",
                            children: [(0,
                            s.jsx)(tV.d, {
                                type: g,
                                size: "medium"
                            }), A]
                        })
                    }), "recipe" === g ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)(tY.A, {
                            type: g,
                            cookTime: x,
                            prepTime: w,
                            servingSize: j,
                            yields: N
                        }), (0,
                        s.jsx)("div", {
                            className: tX().author,
                            "data-testid": "article-card-author",
                            children: h && (null === (i = h[0]) || void 0 === i ? void 0 : i.name)
                        })]
                    }) : (0,
                    s.jsx)("div", {
                        className: tX().description,
                        "data-testid": "article-card-description",
                        children: null === (a = l.description) || void 0 === a ? void 0 : a.primary
                    })]
                })]
            })
        };
        tJ.propTypes = {
            content: k().shape({
                type: k().string,
                headline: k().shape({
                    primary: k().string
                }),
                authors: k().arrayOf(h.cy),
                teaseImage: k().shape({
                    url: k().shape({
                        primary: k().string
                    })
                }),
                url: k().shape({
                    primary: k().string
                }),
                description: k().shape({
                    primary: k().string,
                    seo: k().string
                }),
                slides: k().arrayOf(h.M6),
                id: k().string.isRequired,
                cookTime: k().string,
                prepTime: k().string,
                servingSize: k().string,
                yield: k().string
            }).isRequired,
            elementId: k().string
        },
        n(52331);
        var tQ = "summary-box";
        function t$(e) {
            var t = e.headline
              , n = e.items
              , i = e.vertical
              , a = e.elementId
              , r = void 0 === a ? null : a;
            if (!n || !(null == t ? void 0 : t.length) && !({
                better: !0,
                news: !0,
                select: !0,
                think: !0
            })[i])
                return null;
            var l = n.map(function(e) {
                return (0,
                s.jsx)("li", {
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }, e)
            });
            return (0,
            s.jsx)("div", {
                className: tQ,
                "data-testid": "summary-box",
                id: r && "anchor-".concat(r),
                children: (0,
                s.jsxs)("div", {
                    className: "".concat(tQ, "__content"),
                    children: [!!(null == t ? void 0 : t.length) && (0,
                    s.jsx)("h2", {
                        className: "".concat(tQ, "__headline"),
                        children: t
                    }), (0,
                    s.jsx)("ul", {
                        className: "".concat(tQ, "__items"),
                        children: l
                    })]
                })
            })
        }
        t$.propTypes = {
            elementId: k().string,
            headline: k().string.isRequired,
            items: k().arrayOf(k().string).isRequired,
            vertical: k().string.isRequired
        };
        var t0 = n(63060)
          , t1 = "faq-card";
        function t2(e) {
            var t = e.faq
              , n = t.question
              , i = t.answer.html
              , a = (0,
            R._)((0,
            l.useState)(!1), 2)
              , r = a[0]
              , o = a[1]
              , d = (0,
            R._)((0,
            l.useState)(null), 2)
              , u = d[0]
              , _ = d[1]
              , m = (0,
            l.useRef)(null);
            return (0,
            s.jsx)("div", {
                className: "".concat(t1, "__card"),
                "data-testid": "".concat(t1, "__card"),
                children: (0,
                s.jsxs)("div", {
                    className: c()("".concat(t1, "__content"), {
                        "faq--active": r
                    }),
                    children: [(0,
                    s.jsxs)("button", {
                        className: "".concat(t1, "__question"),
                        onClick: function() {
                            o(!r);
                            var e = m.current.children[0].clientHeight;
                            if (u)
                                _(null);
                            else {
                                var t, n = m.current.children[0].children[0];
                                _(e + parseFloat(null === (t = window.getComputedStyle(n)) || void 0 === t ? void 0 : t.getPropertyValue("margin-top")) || 1)
                            }
                        },
                        type: "button",
                        "data-testid": "".concat(t1, "__question"),
                        children: [(0,
                        s.jsx)("div", {
                            children: n
                        }), (0,
                        s.jsx)("div", {
                            children: (0,
                            s.jsx)(t0.F, {})
                        })]
                    }), (0,
                    s.jsx)("div", {
                        ref: m,
                        className: "".concat(t1, "__answer"),
                        style: {
                            maxHeight: u
                        },
                        "data-testid": "".concat(t1, "__answer"),
                        children: (0,
                        s.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        })
                    })]
                })
            })
        }
        t2.propTypes = {
            faq: k().shape({
                question: k().string.isRequired,
                answer: k().shape({
                    html: k().string
                }).isRequired
            }).isRequired
        },
        n(70924);
        var t6 = "faq-embed";
        function t4(e) {
            var t = e.headline
              , n = e.id
              , i = e.faqs
              , a = e.elementId
              , r = void 0 === a ? null : a;
            return t && i ? (0,
            s.jsx)("div", {
                className: t6,
                "data-testid": "article-faq-embed",
                id: r ? "anchor-".concat(r) : "faq-embed-jumplink-".concat(n),
                children: (0,
                s.jsxs)("div", {
                    className: "".concat(t6, "__content"),
                    children: [(0,
                    s.jsx)("h2", {
                        className: "".concat(t6, "__headline"),
                        children: (0,
                        s.jsx)("span", {
                            className: "text",
                            children: t
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "".concat(t6, "__cards"),
                        "data-testid": "".concat(t6, "__cards"),
                        children: i.map(function(e, t) {
                            return (0,
                            s.jsx)(t2, {
                                faq: e
                            }, "".concat(t, "-").concat(e.question))
                        })
                    })]
                })
            }) : null
        }
        t4.propTypes = {
            elementId: k().string,
            headline: k().string.isRequired,
            id: k().number.isRequired,
            faqs: k().arrayOf(k().shape({
                question: k().string.isRequired,
                answer: k().shape({
                    html: k().string
                }).isRequired
            }).isRequired).isRequired
        };
        var t3 = n(69995);
        function t7() {
            var e = (0,
            t3.z)();
            return ((0,
            l.useEffect)(function() {
                window._taboola = window._taboola || [],
                window._taboola.push({
                    mode: "reco-reel",
                    container: "taboola-mid-article-reco-reel",
                    placement: "Mid Article Reco Reel",
                    target_type: "mix"
                })
            }, []),
            e) ? null : (0,
            s.jsx)("div", {
                id: "taboola-mid-article-reco-reel",
                "data-testid": "taboola-mid-article-reco-reel"
            })
        }
        var t8 = n(82737)
          , t9 = n(39729)
          , t5 = n.n(t9)
          , ne = function(e) {
            var t = e.onShowMoreClick
              , n = void 0 === t ? Function.prototype : t
              , i = e.size
              , a = e.controls
              , r = e.headline
              , l = void 0 === r ? "" : r
              , o = (0,
            eQ.Bd)().t;
            return (0,
            s.jsx)("div", {
                className: t5().showMoreButtonWrapper,
                children: (0,
                s.jsx)(t8.$, {
                    displayType: "expand-down",
                    tiltClasses: t5().showMoreButtonTilt,
                    additionalClasses: t5().showMoreButton,
                    onClick: function() {
                        n(!0)
                    },
                    title: "".concat(o("Show more")),
                    size: void 0 === i ? "" : i,
                    ariaControls: void 0 === a ? "" : a,
                    ariaLabel: l ? "Show more of post ".concat(l) : "Show more of this blog post"
                })
            })
        };
        ne.propTypes = {
            onShowMoreClick: k().func,
            size: k().string,
            controls: k().string,
            headline: k().string
        };
        var nt = n(8437)
          , nn = n(85993)
          , ni = n(99298)
          , na = n(68437)
          , nr = n.n(na)
          , ns = function(e) {
            var t = e.cards
              , n = void 0 === t ? [] : t
              , i = e.callToActionText
              , a = void 0 === i ? {
                collapsed: "",
                expanded: ""
            } : i
              , r = e.trackDataAnalyticsClicks
              , o = void 0 === r ? function() {}
            : r
              , d = e.numberOfCardsToShow
              , u = void 0 === d ? 3 : d
              , _ = e.subtitle
              , m = void 0 === _ ? "" : _
              , p = e.title
              , v = void 0 === p ? "" : p;
            (0,
            ni.Z)();
            var h = l.useContext(F.O1)
              , f = -1 !== l.useContext(F.Pl).path.indexOf("embedded-pkg")
              , g = (0,
            R._)((0,
            l.useState)(!1), 2)
              , y = g[0]
              , x = g[1];
            if (!n.length)
                return null;
            var w = n.length > u
              , j = w ? n.length - u : 0
              , N = (0,
            l.useRef)()
              , C = function(e) {
                var t = e.expand
                  , n = e.callToAction;
                x(t),
                o(n)
            };
            return (0,
            s.jsxs)("div", {
                className: c()(nr().expandableList, (0,
                b._)({}, nr().expandableListAmp, f)),
                "data-testid": "expandable-list",
                children: [(0,
                s.jsx)("div", {
                    className: nr().expandableListHeader,
                    children: (0,
                    s.jsxs)("div", {
                        className: nr().expandableListHeaderTab,
                        children: ["select" === h && (0,
                        s.jsxs)("h3", {
                            className: nr().expandableListTitle,
                            children: [v, v && m && (0,
                            s.jsx)("span", {
                                className: nr().expandableListSubtitle,
                                "data-testid": "expandable-list__subtitle",
                                children: m
                            })]
                        }), "today" === h && (0,
                        s.jsxs)(s.Fragment, {
                            children: [(0,
                            s.jsx)("h3", {
                                className: nr().expandableListTitle,
                                children: v
                            }), v && m && (0,
                            s.jsx)("h4", {
                                className: nr().expandableListSubtitle,
                                "data-testid": "expandable-list__subtitle",
                                children: m
                            })]
                        })]
                    })
                }), (0,
                s.jsx)("ul", {
                    ref: N,
                    className: c()(nr().expandableListContainer, (0,
                    b._)({}, nr().expandableListContainerNoSubtitle, !m), (0,
                    b._)({}, nr().expandableListContainerNoExpand, !w)),
                    children: !w || w && y ? n.map(function(e) {
                        return (0,
                        s.jsx)("li", {
                            children: e
                        }, e.props.product.id)
                    }) : (0,
                    nn._)(n.slice(0, u).map(function(e) {
                        return (0,
                        s.jsx)("li", {
                            children: e
                        }, e.props.product.id)
                    })).concat([(0,
                    s.jsxs)("li", {
                        className: nr().expandableListAffordance,
                        "data-testid": "expandable-list__affordance",
                        inert: "true",
                        children: [(0,
                        s.jsx)("div", {
                            className: nr().expandableListOverlay
                        }), n[u]]
                    }, "affordance")], (0,
                    nn._)(n.slice(u + 1).map(function(e) {
                        return (0,
                        s.jsx)("li", {
                            style: {
                                display: "none"
                            },
                            children: e
                        }, u + e.props.product.id)
                    })))
                }), w && !y && (0,
                s.jsxs)("button", {
                    className: nr().expandableListButton,
                    onClick: function() {
                        return C({
                            expand: !0,
                            callToAction: "showmore"
                        })
                    },
                    onKeyDown: function(e) {
                        "Enter" === e.key && (x(!0),
                        setTimeout(function() {
                            N.current.querySelectorAll("li")[u].querySelector("a").focus()
                        }, 100))
                    },
                    type: "button",
                    children: [(null == a ? void 0 : a.collapsed) || "See ".concat(j, " More"), (0,
                    s.jsx)("span", {
                        className: "".concat(nr().icon, " ").concat(nr().iconDown, " icon icon-chevron-right")
                    })]
                }), w && y && (0,
                s.jsxs)("button", {
                    className: nr().expandableListButton,
                    onClick: function() {
                        return C({
                            expand: !1,
                            callToAction: "showless"
                        })
                    },
                    type: "button",
                    children: [(null == a ? void 0 : a.expanded) || "See Less", (0,
                    s.jsx)("span", {
                        className: "".concat(nr().icon, " ").concat(nr().iconUp, " icon icon-chevron-right")
                    })]
                })]
            })
        }
          , nl = n(40625)
          , no = n(99110)
          , nc = n(8698)
          , nd = n.n(nc);
        function nu(e) {
            var t = e.product
              , n = e.vertical
              , i = t.id
              , a = t.label
              , r = t.teaseImage
              , o = t.name
              , d = t.offers
              , u = (0,
            R._)(void 0 === d ? [] : d, 1)[0]
              , _ = void 0 === u ? {} : u
              , m = _.externalUrl
              , p = _.seller
              , v = (void 0 === p ? {} : p).name
              , h = _.prices
              , f = t.nameOverride;
            if (!i || !o || !v)
                return null;
            var g = (0,
            e$.Dw)(m)
              , y = g.productAsin
              , x = g.associateTag
              , w = (0,
            l.useRef)()
              , j = (0,
            eY.o4)({
                prices: h
            })
              , N = function() {
                return eJ({
                    vertical: n,
                    product: t
                })
            };
            return (0,
            s.jsxs)("div", {
                className: nd().container,
                children: [(0,
                s.jsx)("div", {
                    className: nd().teaseImage,
                    children: (0,
                    s.jsx)(no.A, {
                        computedValues: {
                            teaseImage: r
                        },
                        responsiveFlavors: {
                            s: I.Ay.FOCAL_100x100
                        }
                    })
                }), (0,
                s.jsxs)("div", {
                    className: nd().rightCol,
                    children: [(0,
                    s.jsx)("div", {
                        className: nd().superlative,
                        children: a
                    }), (0,
                    s.jsx)("div", {
                        className: nd().productName,
                        children: (0,
                        s.jsx)(eE.A, {
                            "data-aps-asc-tag": x,
                            "data-aps-asin": y,
                            "data-product-id": i,
                            href: m,
                            rel: "sponsored noopener noreferrer",
                            target: "_blank",
                            className: nd().productLink,
                            onClick: N,
                            children: f || o
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: nd().offer,
                        children: [(0,
                        s.jsxs)("div", {
                            className: c()(nd().prices, (0,
                            b._)({}, nd().onSale, (0,
                            eY.T2)({
                                salePrice: j.sale,
                                listPrice: j.list
                            }))),
                            children: [(0,
                            s.jsx)("div", {
                                className: nd().salePrice,
                                children: "$".concat(j.sale)
                            }), (0,
                            s.jsx)("div", {
                                className: nd().listPrice,
                                children: "$".concat(j.list)
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: nd().seller,
                            children: (0,
                            s.jsx)(eE.A, {
                                "data-aps-asc-tag": x,
                                "data-aps-asin": y,
                                "data-product-id": i,
                                className: nd().sellerName,
                                href: m,
                                rel: "sponsored noopener noreferrer",
                                target: "_blank",
                                tabIndex: "-1",
                                onClick: N,
                                children: v
                            })
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: nd().learnMoreContainer,
                        children: (0,
                        s.jsxs)("a", {
                            className: nd().learnMore,
                            href: "#".concat(i),
                            "data-product-id": i,
                            "data-testid": "learn-more",
                            ref: w,
                            onClick: function(e) {
                                e.preventDefault(),
                                e.stopPropagation();
                                var t = w.current
                                  , n = document.getElementById(t.dataset.productId);
                                null == n || n.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                }),
                                (0,
                                eq.stub)("track", "mbt_quicktake_click", {
                                    action: "learnmore"
                                }),
                                N()
                            },
                            children: ["Learn more", (0,
                            s.jsx)("svg", {
                                width: "8",
                                viewBox: "0 0 10 12",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: nd().downArrow,
                                children: (0,
                                s.jsx)("path", {
                                    d: "M1.70931 6.875L4.79683 9.96252L4.79683 0.75L5.38016 0.75L5.38016 9.96252L8.5885 6.875L9.00098 7.28748L5.0885 10.9583L1.29683 7.28748L1.70931 6.875Z"
                                })
                            })]
                        })
                    })]
                })]
            })
        }
        function n_(e) {
            var t = e.products
              , n = e.vertical
              , i = e.elementId
              , a = void 0 === i ? null : i
              , r = e.title
              , o = void 0 === r ? "" : r
              , c = e.subTitle
              , d = -1 !== l.useContext(F.Pl).path.indexOf("embedded-pkg")
              , u = (0,
            nl.Wx)({
                triggerOnce: !0
            }) || {}
              , _ = u.ref
              , m = u.inView;
            l.useEffect(function() {
                (m || d) && (0,
                eq.stub)("track", "mbt_quicktake_inview")
            }, [m, d]);
            var p = t.map(function(e) {
                return (0,
                s.jsx)(nu, {
                    product: e,
                    vertical: n
                })
            }).filter(function(e) {
                return !!e
            });
            if (0 === p.length)
                return null;
            var v = (0,
            eK.$h)({
                componentName: "quick-take",
                pageRegion: "article-body",
                componentTitle: o
            });
            return (0,
            s.jsx)("div", {
                "data-activity-map": v,
                ref: _,
                id: a && "anchor-".concat(a),
                children: (0,
                s.jsx)(ns, {
                    cards: p,
                    trackDataAnalyticsClicks: function(e) {
                        return (0,
                        eq.stub)("track", "mbt_quicktake_click", {
                            action: e
                        })
                    },
                    title: o,
                    subtitle: void 0 === c ? "" : c
                })
            })
        }
        nu.propTypes = {
            product: h.qM.isRequired,
            vertical: k().string.isRequired
        },
        (0,
        eq.stub)("register", "mbt_quicktake_click"),
        (0,
        eq.stub)("register", "mbt_quicktake_inview"),
        n_.propTypes = {
            elementId: k().string,
            title: k().string,
            subTitle: k().string,
            products: k().arrayOf(h.qM.isRequired).isRequired,
            vertical: k().string.isRequired
        };
        var nm = n(72423)
          , np = n(17530)
          , nv = n.n(np);
        function nh(e) {
            var t = e.attribution
              , n = void 0 === t ? null : t
              , i = e.attributionUrl
              , a = void 0 === i ? null : i
              , r = e.text
              , l = void 0 === r ? null : r;
            return l ? (0,
            s.jsxs)("blockquote", {
                className: nv().statement,
                cite: a,
                children: [(0,
                p.sc)(l).split(/[\n\r]+/).map(function(e) {
                    return (0,
                    s.jsx)("p", {
                        className: nv().statementText,
                        children: e
                    }, (0,
                    p.HZ)(e))
                }), n && (0,
                s.jsx)("footer", {
                    className: nv().statementFooter,
                    children: (0,
                    s.jsx)(em.H, {
                        href: a,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: (0,
                        p.sc)(n)
                    })
                })]
            }) : null
        }
        nh.propTypes = {
            attribution: k().string,
            attributionUrl: k().string,
            text: k().string
        };
        var nf = n(37781)
          , ng = n(43987)
          , ny = n(92684)
          , nx = n(80784)
          , nb = n(1514)
          , nw = n.n(nb);
        (0,
        eq.stub)("register", "content_embed_inview");
        var nj = function(e) {
            var t, n = e.activityMapId, i = e.htmlElement, o = e.icid, d = void 0 === o ? "" : o, u = e.item, _ = (void 0 === u ? {} : u).contentModule, m = e.path, p = e.vertical;
            if (!_)
                return null;
            var v = _.content
              , h = (void 0 === v ? {} : v).markupAndEmbeds
              , f = void 0 === h ? [] : h
              , g = _.date
              , y = void 0 === g ? {
                createdAt: "",
                modifiedAt: "",
                publishedAt: ""
            } : g
              , x = _.description
              , w = void 0 === x ? {
                tease: ""
            } : x
              , j = _.headline
              , N = void 0 === j ? {
                tease: ""
            } : j
              , C = (0,
            F.Jp)()["embedded-content-module"]
              , T = (0,
            l.useContext)(F.kj).subType
              , A = "news" === p
              , k = "msnbc" === p
              , L = "liveBlog" === T && A
              , I = (0,
            nl.Wx)({
                triggerOnce: !0,
                onChange: function(e) {
                    e && (0,
                    eq.stub)("track", "content_embed_inview", {
                        placement: "body"
                    })
                }
            }).ref;
            if (!C || "telemundo" === p)
                return null;
            var S = null == f ? void 0 : f.map(function(e, t) {
                var n = e.html;
                if (n.includes("<a ")) {
                    var s = n.replace(/(<a )/g, '$1data-icid="'.concat(d, '"'));
                    return i((0,
                    r._)((0,
                    a._)({}, e), {
                        html: s
                    }), t, m)
                }
                return i(e, t, m)
            })
              , O = c()(nw().contentModule, (t = {},
            (0,
            b._)(t, nw().news, A),
            (0,
            b._)(t, nw().msnbc, k),
            (0,
            b._)(t, nw().today, "today" === p),
            (0,
            b._)(t, nw().liveBlog, L),
            t));
            return (0,
            s.jsxs)("section", {
                className: O,
                "data-activity-map": void 0 === n ? "" : n,
                ref: I,
                children: [L && (0,
                s.jsx)(nx.U, {
                    pattern: {
                        height: 2,
                        width: 4
                    }
                }), k && (0,
                s.jsx)(ny.V, {}), ((null == N ? void 0 : N.tease) || (null == w ? void 0 : w.tease)) && (0,
                s.jsxs)("header", {
                    className: nw().header,
                    children: [(null == N ? void 0 : N.tease) && (0,
                    s.jsx)("h2", {
                        className: nw().headline,
                        children: N.tease
                    }), (null == w ? void 0 : w.tease) && (0,
                    s.jsx)("p", {
                        className: nw().description,
                        children: null == w ? void 0 : w.tease
                    })]
                }), S, (null == y ? void 0 : y.modifiedAt) && (0,
                s.jsx)("footer", {
                    className: nw().footer,
                    children: (0,
                    s.jsx)(ng.A, {
                        datePublished: null == y ? void 0 : y.modifiedAt,
                        delimiter: ", ",
                        hideMicroData: !0,
                        meta: !0,
                        styles: nw().timestamp,
                        timeZone: "America/New_York"
                    })
                })]
            })
        };
        function nN(e, t) {
            return (0,
            s.jsx)("pre", {
                style: {
                    backgroundColor: "#333",
                    borderRadius: "5px",
                    padding: "3em"
                },
                children: JSON.stringify(e, null, 2)
            }, t)
        }
        nj.propTypes = {
            activityMapId: k().string,
            icid: k().string,
            item: k().shape({
                contentModule: k().shape({
                    content: k().shape({
                        markupAndEmbeds: k().arrayOf(k().object.isRequired)
                    }),
                    description: k().shape({
                        tease: k().string
                    }),
                    headline: k().shape({
                        tease: k().string
                    }),
                    date: k().shape({
                        createdAt: k().instanceOf(Date).isRequired,
                        modifiedAt: k().instanceOf(Date).isRequired,
                        publishedAt: k().instanceOf(Date).isRequired
                    })
                })
            }),
            htmlElement: k().func.isRequired,
            path: k().string.isRequired,
            vertical: k().string.isRequired
        };
        var nC = n(89933)
          , nT = n(8389)
          , nA = n(88757)
          , nk = n(13560)
          , nL = n(43526)
          , nI = n(46629)
          , nS = n(21492)
          , nO = n(60899)
          , nE = n.n(nO);
        function nR(e) {
            var t = e.headline
              , n = e.unibrow
              , i = e.url
              , a = e.authors
              , r = e.publicationName
              , l = e.tease
              , o = void 0 === l ? null : l
              , c = e.type
              , d = void 0 === c ? null : c
              , u = e.icid
              , _ = void 0 === u ? null : u
              , m = "custom" === d
              , p = m ? "_blank" : "_top"
              , v = "video" === d && {
                url: i,
                redirect: !0
            };
            return (0,
            s.jsxs)(s.Fragment, {
                children: [o && (0,
                s.jsx)("div", {
                    className: nE().tease,
                    children: (0,
                    s.jsxs)(eE.A, {
                        target: p,
                        to: i,
                        icid: _,
                        children: [(0,
                        s.jsx)(L.V, {
                            preview: v,
                            responsiveFlavors: {
                                s: I.Ay.FOCAL_80x80
                            },
                            retina: !0,
                            url: o
                        }), (0,
                        s.jsx)(nS.A, {
                            type: d
                        })]
                    })
                }), (0,
                s.jsxs)("div", {
                    className: nE().info,
                    children: [(0,
                    s.jsx)(tW.d, {
                        className: nE().unibrow,
                        size: "h4",
                        target: p,
                        unibrow: n
                    }), (0,
                    s.jsx)("h4", {
                        className: nE().headline,
                        children: (0,
                        s.jsx)(eE.A, {
                            target: p,
                            to: i,
                            icid: _,
                            children: t
                        })
                    }), m && (0,
                    s.jsxs)(eE.A, {
                        className: nE().externalLink,
                        target: p,
                        to: i,
                        icid: _,
                        children: [void 0 === r ? null : r, (0,
                        s.jsx)("span", {
                            className: "icon icon-external-link-arrow"
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: nE().author,
                        children: (0,
                        s.jsx)(nI.Gj, {
                            authors: void 0 === a ? [] : a
                        })
                    })]
                })]
            })
        }
        nR.propTypes = {
            authors: k().arrayOf(h.cy),
            headline: k().string.isRequired,
            publicationName: k().string,
            tease: k().string,
            type: k().string,
            unibrow: h.Wp.isRequired,
            url: k().string.isRequired,
            icid: k().string
        };
        var nP = n(58517);
        function nF() {
            var e, t, n = l.useContext(F.kj), i = (0,
            nk.Sk)(n.taxonomy), a = [], r = !1;
            if (i.includes(nk._U.MSNBC.SECTION_COLUMNIST)) {
                e = m()(n, "authors", []).find(function(e) {
                    return void 0 !== e.person.url
                });
                for (var o = m()(e, ["person", "content", "items"], []), d = 0; d < o.length && (n.id !== o[d].id && a.push((0,
                tG._H)(o[d])),
                !(a.length >= 2)); d += 1)
                    ;
                a.length && (r = !0)
            }
            if (!a.length) {
                var u = (0,
                R._)((0,
                nL.s)("curation/slug/msnbc".concat("")), 3)
                  , _ = u[0]
                  , p = u[1]
                  , v = u[2];
                if (!0 === p || !0 === v || !_)
                    return null;
                var h = m()(_, ["curation"], {})
                  , f = (0,
                nA.JL)(h, "msnbcDailyArticles");
                if (!Array.isArray(f) || !f.length)
                    return null;
                for (var g = f[0], y = m()(g, ["metadata", "showFeature"], !0), x = m()(g, ["metadata", "showFeatureNumbered"], !1), w = m()(g, "items", []), j = 0; j < w.length; j += 1) {
                    var N = n.id === w[j].id;
                    if (0 === j && !N && (!y || y && x) && a.push((0,
                    tG._H)(w[j])),
                    j > 0 && !N && a.push((0,
                    tG._H)(w[j])),
                    a.length >= 2)
                        break
                }
            }
            var C = (0,
            eK.$h)({
                componentName: "msnbc-daily-recirc",
                pageRegion: "article-body",
                componentTitle: "MSNBC Daily"
            });
            return (0,
            s.jsxs)("div", {
                className: c()(nE().msnbcDailyRecircBody, (t = {},
                (0,
                b._)(t, nE().hasItems, a.length > 0),
                (0,
                b._)(t, nE().hasColumnist, r),
                t)),
                "data-activity-map": C,
                children: [(0,
                s.jsx)(ny.V, {}), (0,
                s.jsx)("div", {
                    className: nE().head,
                    children: r ? (0,
                    s.jsxs)(s.Fragment, {
                        children: [m()(e, ["person", "primaryImage", "url", "primary"], !1) && (0,
                        s.jsx)("div", {
                            className: nE().headshot,
                            children: (0,
                            s.jsx)(L.V, {
                                responsiveFlavors: {
                                    s: I.Ay.FOCAL_60x60
                                },
                                retina: !0,
                                url: m()(e, ["person", "primaryImage", "url", "primary"])
                            })
                        }), (0,
                        s.jsxs)("h3", {
                            className: nE().title,
                            children: ["More from\xa0", m()(e, ["person", "name"], "this author")]
                        })]
                    }) : (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("h3", {
                            className: nE().title,
                            children: "More from MSNBC Daily"
                        }), (0,
                        s.jsx)("p", {
                            className: nE().description,
                            children: "Must reads from Today's list"
                        })]
                    })
                }), (0,
                s.jsx)("div", {
                    className: nE().body,
                    children: a.map(function(e) {
                        var t = r ? "recircColumnist" : "recircArticleBody"
                          , n = (0,
                        nP.P)(m()(e, "url"), t)
                          , i = m()(e, "unibrow");
                        return (0,
                        s.jsx)("div", {
                            className: nE().item,
                            children: (0,
                            s.jsx)(nR, {
                                authors: e.authors,
                                headline: e.headline,
                                publicationName: m()(e, ["metadata", "publicationName"], null),
                                tease: e.tease,
                                type: e.type,
                                unibrow: i,
                                url: null == n ? void 0 : n.url,
                                icid: null == n ? void 0 : n.icid
                            })
                        }, e.id)
                    })
                })]
            })
        }
        var nM = n(92)
          , nD = function(e) {
            var t = e.className
              , n = e.element
              , i = e.html
              , r = e.id
              , o = e.index
              , c = void 0 === o ? 0 : o
              , d = e.sectionMarkup
              , u = void 0 === d ? [] : d
              , _ = e.dataAttributes
              , m = (0,
            l.useRef)()
              , p = (0,
            l.useContext)(F.O1)
              , v = (0,
            l.useCallback)(function() {
                if (!!m.current) {
                    var e = m.current.querySelector("a")
                      , t = (null == e ? void 0 : e.getAttribute("data-commerce-encoding")) === "true"
                      , n = null == e ? void 0 : e.getAttribute("data-seller-id");
                    if (t && n) {
                        for (var i = null, a = c; a < u.length; a += 1) {
                            var r = u[a];
                            if ("embeddedProduct" === r.type) {
                                i = r.product;
                                break
                            }
                        }
                        i && eJ({
                            vertical: p,
                            product: i
                        })
                    }
                }
            }, []);
            return (0,
            s.jsx)(null != n ? n : "p", (0,
            a._)({
                ref: m,
                id: r,
                className: t,
                dangerouslySetInnerHTML: {
                    __html: i
                },
                onClick: v
            }, _ || {}))
        };
        function nB(e, t, n, i, l, o) {
            var d, u = e.element, _ = e.html, m = void 0 === _ ? [] : _, p = e.insertEndmark, v = e.ecommerceEnabled, h = e.elementId, f = (null === (d = e.dataAttributes) || void 0 === d ? void 0 : d.reduce(function(e, t) {
                var n = t.key
                  , i = t.value;
                return e[n] = i,
                e
            }, {})) || {}, g = null != u ? u : "P", y = c()({
                endmark: "msnbc" !== o && p,
                sportsEndMark: p && "news" === o && "NBC Sports" === l,
                "break-above": "ul" === g,
                "body-ul": "ul" === g,
                "body-ol": "ol" === g,
                "body-list-el": "ul" === g || "ol" === g,
                "body-heading": ["h1", "h2", "h3", "h4", "h5", "h6"].includes(g),
                "body-hori-rule": "hr" === g,
                "body-graf": "p" === g
            });
            if (!m || !m.length)
                return (0,
                s.jsx)(g, (0,
                a._)({
                    className: y
                }, f), t);
            if ("blockquote" === g) {
                var x = m.replace(/(<([^>]+)>)/ig, "");
                return /class=['"]pullquote["']/.test(m) ? (0,
                s.jsx)(tz, {
                    dataAttributes: f,
                    text: x
                }, t) : (0,
                s.jsx)(ev, {
                    dataAttributes: f,
                    text: x
                }, t)
            }
            if (["h2", "h3", "h4"].includes(g.toLowerCase()) && !m.includes("<a") && v) {
                var b = m.replace(/[^A-Za-z0-9]/g, "")
                  , w = "anchor-".concat(h || b)
                  , j = "".concat(n, "#").concat(w);
                return (0,
                s.jsx)(eE.A, (0,
                r._)((0,
                a._)({
                    href: j,
                    id: w,
                    className: "scrollLink"
                }, f), {
                    children: (0,
                    s.jsx)(g, {
                        className: y,
                        dangerouslySetInnerHTML: {
                            __html: m
                        }
                    })
                }), t)
            }
            return (0,
            s.jsx)(nD, {
                id: h ? "anchor-".concat(h) : void 0,
                index: t,
                className: y,
                html: m,
                element: u,
                sectionMarkup: i,
                dataAttributes: f
            }, t)
        }
        function nU(e) {
            var t = e.item
              , n = e.article
              , i = e.isArticleEcommerceEnabled
              , o = e.i
              , u = e.path
              , _ = e.articlePublishDate
              , p = e.vertical
              , h = e.lazyLoadSection
              , f = e.setShowHiddenMarkupAndEmbeds
              , g = e.articleId
              , y = e.articleTrackingId
              , x = e.articleCanonicalUrl
              , b = e.sectionMarkup
              , w = e.isCard
              , j = e.parentId
              , N = e.parentHeadline
              , C = e.featureFlags
              , T = e.isChromeless
              , A = e.sourceName;
            switch (t.type) {
            case "markup":
                return nB(t, o, u, void 0 === b ? [] : b, A, p);
            case "embeddedCuratedList":
                var k = t.curatedList;
                if (k && g) {
                    var L, I, S, O = k.id, E = k.headline, R = k.body, F = k.ecommerceMetadata, M = k.ecommerceEnabled, D = k.content;
                    return (0,
                    s.jsx)(nm.b, {
                        id: O,
                        elementId: t.elementId,
                        articleId: g,
                        title: null == E ? void 0 : E.primary,
                        description: null == R ? void 0 : null === (L = R.map(function(e) {
                            return e.html
                        })) || void 0 === L ? void 0 : L.join(""),
                        curatedListTrackingId: null == F ? void 0 : F.trackingId,
                        articleTrackingId: y,
                        ecommerceEnabled: M,
                        disclaimerOverride: null == F ? void 0 : null === (S = F.disclaimer) || void 0 === S ? void 0 : null === (I = S.body[0]) || void 0 === I ? void 0 : I.html,
                        insertEndmark: t.insertEndmark,
                        items: null == D ? void 0 : D.items,
                        presentation: null == t ? void 0 : t.presentation,
                        path: u,
                        shortDisclaimer: null == F ? void 0 : F.shortDisclaimer
                    })
                }
                return null;
            case "embeddedWidget":
                return function(e, t, n, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
                      , c = arguments.length > 5 ? arguments[5] : void 0
                      , d = arguments.length > 6 ? arguments[6] : void 0;
                    if (!(null == e ? void 0 : e.widget))
                        return null;
                    var u = e.presentation.size
                      , _ = e.widget
                      , m = e.widget
                      , p = m.name
                      , v = m.properties
                      , h = void 0 === v ? {} : v
                      , f = (0,
                    r._)((0,
                    a._)({}, e), {
                        getDataActivityMapID: eK.$h
                    });
                    switch (p) {
                    case "nbc_blockquote":
                        var g = h["nbcblockquote-text"]
                          , y = h["nbcblockquote-attributionlink"]
                          , x = h["nbcblockquote-attribution"];
                        return (0,
                        s.jsx)(ev, {
                            attribution: x,
                            elementId: e.elementId,
                            source: y,
                            text: g
                        }, t);
                    case "nbc_liftout":
                        var b = h["liftout-text"];
                        return (0,
                        s.jsx)(eO, {
                            size: u,
                            text: b
                        }, t);
                    case "nbc_pullquote":
                    case "nbc_pull_quote":
                        var w = h["pullquote-attribution"]
                          , j = h["pullquote-text"]
                          , N = h.quip;
                        return (0,
                        s.jsx)(tz, {
                            attribution: w,
                            quip: N,
                            text: j,
                            size: u
                        }, t);
                    case "nbc_featuredlink":
                        return (0,
                        s.jsx)(ef, {
                            widget: _
                        }, t);
                    case "IFRAMELY_EXTERNAL_EMBED":
                        var C, T = (null == _ ? void 0 : _.properties["canonical-url"]) || "", A = /www\.(nbcnews|today|msnbc)\.com/.test(T), k = !!(null == _ ? void 0 : null === (C = _.properties) || void 0 === C ? void 0 : C.headline);
                        if (A && k && i) {
                            var L = {
                                properties: {
                                    "featuredlink-headline": _.properties.headline,
                                    "featuredlink-linktext": _.properties.description,
                                    "featuredlink-image": _.properties["image-url"],
                                    "featuredlink-linkurl": _.properties["canonical-url"]
                                }
                            };
                            return (0,
                            s.jsx)(ef, {
                                widget: L
                            }, t)
                        }
                        return (0,
                        l.createElement)(e_, (0,
                        r._)((0,
                        a._)({}, f), {
                            key: t
                        }));
                    case "newsvine_large_poll":
                        return (0,
                        s.jsx)(eB, {
                            widget: _
                        }, t);
                    case "CUSTOM_EMBED":
                        switch (h.embed.type) {
                        case "BLOCKQUOTE":
                            var I = h.embed
                              , S = I.attribution
                              , O = I.attributionUrl
                              , E = I.text;
                            return (0,
                            s.jsx)(ev, {
                                attribution: S,
                                elementId: e.elementId,
                                source: O,
                                text: E
                            }, t);
                        case "FACT_CHECK_STATEMENT":
                            var R = h.embed
                              , P = R.attribution
                              , F = R.attributionUrl
                              , M = R.text;
                            return (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)(nf._, {
                                    children: "Statement"
                                }), (0,
                                s.jsx)(nh, {
                                    attribution: P,
                                    attributionUrl: F,
                                    text: M
                                }, t)]
                            });
                        case "LIFT_OUT":
                            var D = h.embed.text;
                            return (0,
                            s.jsx)(eO, {
                                elementId: e.elementId,
                                size: u,
                                text: D
                            }, t);
                        case "PULL_QUOTE":
                            var B = h.embed
                              , U = B.attribution
                              , H = B.quip
                              , q = B.text;
                            return (0,
                            s.jsx)(tz, {
                                elementId: e.elementId,
                                attribution: U,
                                quip: H,
                                text: q,
                                size: u
                            }, t);
                        case "HTML":
                            var z = h.embed.html;
                            return (0,
                            s.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: z
                                }
                            });
                        case "SUMMARY_BOX":
                            var V = h.embed
                              , W = V.headline
                              , G = V.items;
                            return (0,
                            s.jsx)(t$, {
                                elementId: e.elementId,
                                headline: W,
                                items: G,
                                vertical: o
                            }, t);
                        case "FAQ":
                            var K = h.embed
                              , Y = K.faqs
                              , Z = K.headline;
                            return (0,
                            s.jsx)(t4, {
                                elementId: e.elementId,
                                id: t,
                                faqs: Y,
                                headline: Z
                            });
                        case "SHOW_MORE_BUTTON":
                            return h.embed.displayShowMore && (0,
                            s.jsx)(ne, {
                                size: u,
                                title: "Show More",
                                onShowMoreClick: n,
                                controls: "".concat(c, "-overflow-content"),
                                headline: d
                            }, "show-more-button");
                        case "ALL_PURPOSE_EMBED":
                            var X, J, Q, $, ee, et = (0,
                            r._)((0,
                            a._)({}, e), {
                                widget: (0,
                                r._)((0,
                                a._)({}, null !== (Q = null == e ? void 0 : e.widget) && void 0 !== Q ? Q : {}), {
                                    properties: (0,
                                    r._)((0,
                                    a._)({}, null !== ($ = null == e ? void 0 : null === (X = e.widget) || void 0 === X ? void 0 : X.properties) && void 0 !== $ ? $ : {}), {
                                        "embed-code": null !== (ee = null == h ? void 0 : null === (J = h.embed) || void 0 === J ? void 0 : J.code) && void 0 !== ee ? ee : ""
                                    })
                                }),
                                getDataActivityMapID: eK.$h
                            });
                            return (0,
                            l.createElement)(e_, (0,
                            r._)((0,
                            a._)({}, et), {
                                key: t
                            }));
                        case "COMMERCE_QUICK_TAKES":
                            var en = h.embed
                              , ei = en.title
                              , ea = en.subtitle
                              , er = en.products;
                            return (0,
                            s.jsx)(n_, {
                                elementId: e.elementId,
                                title: ei,
                                subTitle: ea,
                                products: er,
                                vertical: o
                            });
                        default:
                            return nN(e, t)
                        }
                    default:
                        return (0,
                        l.createElement)(e_, (0,
                        r._)((0,
                        a._)({}, f), {
                            key: t
                        }))
                    }
                }(t, o, f, i, p, j, N);
            case "embeddedImage":
                return B = t.presentation,
                U = t.elementId,
                H = void 0 === h || h || o > 4,
                "fullwidth" === B.size ? (0,
                s.jsx)(ey, {
                    content: t,
                    lazyloaded: H,
                    elementId: U
                }, o) : (0,
                s.jsx)(ek, {
                    content: t,
                    presentation: B.size,
                    lazyloaded: H,
                    elementId: U
                }, o);
            case "embeddedVideo":
                if (!t.video)
                    return null;
                var B, U, H, q, z = (0,
                s.jsx)(eL.A, {
                    addClassNames: c()({
                        endmark: t.insertEndmark
                    }),
                    disablePlaylistAutoplay: t.disablePlaylistAutoplay,
                    video: t.video,
                    presentation: t.presentation,
                    elementId: t.elementId
                }, null === (q = t.video) || void 0 === q ? void 0 : q.id);
                if (!w)
                    return z;
                return (0,
                s.jsx)(P.Ay, {
                    offset: 500,
                    placeholder: (0,
                    s.jsx)(eI, {}),
                    children: z
                });
            case "hr":
                return (0,
                s.jsx)("hr", {}, o);
            case "advertisement":
                return (0,
                s.jsx)(d.A, {
                    offsetViewport: 100,
                    slot: "boxinline"
                }, o);
            case "taboolaReadMoreBelow":
                return (0,
                s.jsx)("div", {
                    id: "taboolaReadMoreBelow"
                }, o);
            case "embeddedVideoPlaylist":
            case "embeddedTaxonomy":
                return null;
            case "embeddedRecipe":
                return (0,
                s.jsx)(tJ, {
                    elementId: t.elementId,
                    content: t.recipe
                }, o);
            case "embeddedSlideshow":
                return (0,
                s.jsx)(tJ, {
                    content: t.slideshow
                }, o);
            case "shoppingCartCarousel":
                return (0,
                s.jsx)(nt.A, {
                    article: t.article,
                    vertical: t.vertical
                }, o);
            case "embeddedProduct":
                var V, W, G = t || {}, K = G.product, Y = G.presentation, Z = G.elementId, X = G.percentageOffIsVisible, J = G.detailsHeader, Q = G.hyphenId;
                if (!K)
                    return null;
                var $ = C["product-embeds-2025-updates"];
                if (null != $ && $.publishedAfter && new Date($.publishedAfter) < new Date(_))
                    return (0,
                    s.jsx)(tH, {
                        addClassNames: c()({
                            endmark: t.insertEndmark
                        }),
                        product: K,
                        size: null !== (V = null == Y ? void 0 : Y.size) && void 0 !== V ? V : null,
                        articlePublishDate: _,
                        vertical: p,
                        elementId: Z,
                        articleCanonicalUrl: x,
                        percentageOffIsVisible: X,
                        detailsHeader: J,
                        htmlElement: nB,
                        hyphenId: Q
                    }, "product-".concat(K.id));
                return (0,
                s.jsx)(tl, {
                    addClassNames: c()({
                        endmark: t.insertEndmark
                    }),
                    product: K,
                    size: null !== (W = null == Y ? void 0 : Y.size) && void 0 !== W ? W : null,
                    articlePublishDate: _,
                    vertical: p,
                    elementId: Z,
                    hyphenId: Q
                }, "product-".concat(K.id));
            case "externalLink":
                return (0,
                s.jsxs)("p", {
                    children: [(0,
                    s.jsx)(eE.A, {
                        href: t.url,
                        children: "Read more here"
                    }), "."]
                }, o);
            case "inlineNewsletter":
                return (0,
                s.jsx)(eR.A, {
                    shouldThumbnailRender: !1,
                    isChromeless: T,
                    article: n,
                    vertical: p
                });
            case "recommended":
                return function(e, t, n) {
                    if (m()(e, ["content", "presentation", "hideRecommendations"], !1) || "select" === n)
                        return null;
                    var i = e.content
                      , a = void 0 === i ? {} : i
                      , r = a.taxonomy
                      , l = a.url
                      , o = e.mobile;
                    return (0,
                    v.dV)(n, r) ? o ? (0,
                    s.jsx)(nF, {
                        pageRegion: "article-body"
                    }, t) : null : (0,
                    s.jsx)(nT.A, {
                        mobile: o,
                        taxonomy: r,
                        url: (0,
                        nC.getCanonical)(l),
                        pageRegion: "article-body"
                    }, t)
                }(t, o, p);
            case nM.ZE:
                return (0,
                s.jsx)(t7, {}, "taboola-reco-reel");
            case "embeddedContentModule":
                return (0,
                s.jsx)(nj, {
                    activityMapId: "content_embed_viewed",
                    htmlElement: nB,
                    icid: "content_embed",
                    item: t,
                    path: u,
                    vertical: p
                });
            default:
                return nN(t, o)
            }
        }
    }
    ,
    87673: (e, t, n) => {
        "use strict";
        n.d(t, {
            n: () => _
        });
        var i = n(45526)
          , a = n(20294)
          , r = n(37876)
          , s = n(14232)
          , l = n(15039)
          , o = n.n(l)
          , c = n(21737)
          , d = n(72073)
          , u = n.n(d)
          , _ = (0,
        s.forwardRef)(function(e, t) {
            var n = e.additionalStyles
              , l = void 0 === n ? {} : n
              , d = e.children
              , _ = e.isCollapsible
              , m = void 0 === _ || _
              , p = e.suppressScroll
              , v = e.isOpen
              , h = e.openDirection
              , f = void 0 === h ? "down" : h
              , g = e.testId
              , y = e.title
              , x = e.onToggle
              , b = void 0 === x ? function() {}
            : x
              , w = e.onFocus
              , j = e.showAffordanceWithCount
              , N = e.onKeyDown
              , C = (0,
            a._)((0,
            s.useState)(!1), 2)
              , T = C[0]
              , A = C[1]
              , k = (0,
            a._)((0,
            s.useState)(!1), 2)
              , L = k[0]
              , I = k[1]
              , S = (0,
            s.useRef)(null)
              , O = void 0 !== v
              , E = O ? v : T
              , R = Object.keys(l).length > 0
              , P = (0,
            c.D2)(E && m || j, S, function() {
                O ? b() : A(function(e) {
                    return !e
                })
            })
              , F = P.button
              , M = P.content;
            if ((0,
            s.useEffect)(function() {
                var e = function() {
                    if (!p) {
                        if (m && E && S.current || j) {
                            if (j)
                                I(!0);
                            else {
                                var e = .6 * window.innerHeight;
                                I(S.current.scrollHeight > e)
                            }
                        } else
                            I(!1)
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    window.removeEventListener("resize", e)
                }
            }, [m, E, j]),
            !y || !d)
                return null;
            var D = (0,
            r.jsxs)("button", {
                "aria-controls": "accordion-content",
                "aria-expanded": E,
                className: o()(u().accordion__header, (0,
                i._)({}, l.accordion__header, R)),
                "data-testid": "accordion__button",
                disabled: !m,
                onClick: F.onClick,
                onKeyDown: F.onKeyDown,
                onFocus: w,
                ref: t,
                type: "button",
                role: "combobox",
                children: [y, m && (0,
                r.jsx)("span", {
                    className: o()(u().accordion__icon, (0,
                    i._)({}, l.accordion__icon, R), "icon", "icon-chevron-light-down", (0,
                    i._)({}, u().down, E)),
                    "data-testid": "accordion__toggle-icon"
                })]
            });
            return (0,
            r.jsxs)("div", {
                className: o()(u().accordion, (0,
                i._)({}, l.accordion, R), (0,
                i._)({}, u().open, E), (0,
                i._)({}, l.open, R && E), (0,
                i._)({}, l.closed, R && !E), (0,
                i._)({}, u().closed, !E)),
                "data-testid": void 0 === g ? "accordion" : g,
                "data-title": y,
                children: ["down" === f ? D : null, (0,
                r.jsxs)("div", {
                    "aria-hidden": !E,
                    className: o()(u().accordion__content, (0,
                    i._)({}, l.accordion__content, R), (0,
                    i._)({}, u().open, E && !l.open), (0,
                    i._)({}, l.open, R && E), (0,
                    i._)({}, u().closed, !E)),
                    "data-testid": "accordion__content",
                    ref: S,
                    role: "listbox",
                    tabIndex: -1,
                    onKeyDown: N || M.onKeyDown,
                    children: [d, L && (0,
                    r.jsx)("div", {
                        className: o()((0,
                        i._)({}, u().affordance, !j)),
                        "data-testid": "accordion__affordance"
                    })]
                }), "up" === f ? D : null]
            })
        })
    }
    ,
    89068: e => {
        e.exports = {
            factCheck: "styles_factCheck__b4fgH",
            stepSubhed: "styles_stepSubhed__MqNwd",
            citations: "styles_citations__2b6PU",
            "live-dot-blink": "styles_live-dot-blink__6LXp4",
            "fade-in": "styles_fade-in__qUlXW",
            "expand-in": "styles_expand-in__lavgu",
            "chatblog-expand-in": "styles_chatblog-expand-in__WDSvk"
        }
    }
    ,
    90406: () => {}
    ,
    94671: () => {}
    ,
    96268: e => {
        e.exports = {
            badge: "styles_badge__V00UH",
            "live-dot-blink": "styles_live-dot-blink__zsO0U",
            "fade-in": "styles_fade-in__qWeb9",
            "expand-in": "styles_expand-in__WdrJk",
            "chatblog-expand-in": "styles_chatblog-expand-in__A9VsG"
        }
    }
    ,
    96829: e => {
        e.exports = {
            carouselCard: "styles_carouselCard__ziHpj",
            carouselCardTextContentWrapper: "styles_carouselCardTextContentWrapper__cCly0",
            carouselCardTextContent: "styles_carouselCardTextContent__3ldIG",
            carouselCardTextContentWithSave: "styles_carouselCardTextContentWithSave___ETf6",
            carouselCardImgContainer: "styles_carouselCardImgContainer__0Nus7",
            singleCarouselCard: "styles_singleCarouselCard__hUdnu",
            pictureContainer: "styles_pictureContainer___2Z4q",
            carouselCardUnibrow: "styles_carouselCardUnibrow__al6Xv",
            carouselCardHeadline: "styles_carouselCardHeadline__jc70x",
            headlineNoImg: "styles_headlineNoImg__66pmm",
            headlineWithImg: "styles_headlineWithImg__XWed6",
            "live-dot-blink": "styles_live-dot-blink__5MBmY",
            "fade-in": "styles_fade-in__DcX7V",
            "expand-in": "styles_expand-in__GL89Z",
            "chatblog-expand-in": "styles_chatblog-expand-in__Bx3UK"
        }
    }
    ,
    99298: (e, t, n) => {
        "use strict";
        n.d(t, {
            Z: () => a
        });
        var i = n(14232)
          , a = function() {
            (0,
            i.useEffect)(function() {
                requestAnimationFrame(function() {
                    window.parent.postMessage({
                        sentinel: "amp",
                        type: "embed-size",
                        height: document.body.scrollHeight > 100 ? "".concat(document.body.scrollHeight, "px") : "555px"
                    }, "*")
                })
            })
        }
    }
}]);
