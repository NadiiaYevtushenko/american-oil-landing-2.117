(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[512, 9038, 9656], {
    4324: e => {
        e.exports = {
            duetHero: "styles_duetHero__cjs68",
            hasNoMainMedia: "styles_hasNoMainMedia__DqMGx",
            duetHeroContainer: "styles_duetHeroContainer__tPuGX",
            duetLayout: "styles_duetLayout__bUeqg",
            gridAreaMainCaption: "styles_gridAreaMainCaption__kFIkg",
            gridAreaMainMedia: "styles_gridAreaMainMedia__3OSFR",
            gridAreaHeading: "styles_gridAreaHeading__jMkod",
            "live-dot-blink": "styles_live-dot-blink__3olWs",
            "fade-in": "styles_fade-in__YGhcB",
            "expand-in": "styles_expand-in__zKrkS",
            "chatblog-expand-in": "styles_chatblog-expand-in___OlLU"
        }
    }
    ,
    21501: (e, t, i) => {
        "use strict";
        i.d(t, {
            J: () => n
        });
        var n = function(e) {
            var t = e.subnavEnabled
              , i = e.eventDayRecircEnabled
              , n = e.tocEnabled;
            return i ? n || t ? "disabled" : "collapseOnScroll" : "visible"
        }
    }
    ,
    24348: (e, t, i) => {
        "use strict";
        i.r(t),
        i.d(t, {
            UnwrappedArticlePage: () => e1,
            default: () => e2,
            getArticleBodyBylineType: () => e0,
            getShowBylineTimestamp: () => eJ,
            navbarConfig: () => eQ
        });
        var n = i(16927)
          , a = i(67684)
          , l = i(62701)
          , r = i(20294)
          , o = i(4902)
          , s = i(37876)
          , d = i(14232)
          , c = i(77328)
          , u = i.n(c)
          , v = i(48011)
          , p = i(15039)
          , h = i.n(p)
          , _ = i(2002)
          , m = i.n(_)
          , y = i(39324)
          , f = i.n(y)
          , b = i(40403)
          , g = i(59331)
          , x = i(19192)
          , j = i(48148)
          , w = i(96491)
          , C = i(90353)
          , k = i(87992)
          , T = i(64905)
          , N = i(89903)
          , A = i(301)
          , E = i(56048)
          , S = i(1749)
          , L = i(96527)
          , R = i(13560)
          , I = i(50729)
          , M = i(61623)
          , O = i(86130)
          , D = i(69995)
          , B = i(6108)
          , P = i(61629)
          , F = i(97776)
          , U = i(92)
          , V = i(21501)
          , W = i(28707)
          , z = i(54601)
          , H = i(62297)
          , q = i(50044)
          , G = i(95062)
          , Z = i.n(G);
        function K(e) {
            var t = e.children
              , i = e.events
              , n = (0,
            r._)((0,
            d.useState)(null), 2)
              , a = n[0]
              , l = n[1];
            return (0,
            d.useEffect)(function() {
                var e = {};
                return i.forEach(function(t) {
                    e[t] = function() {
                        return l(t)
                    }
                    ,
                    document.addEventListener(t, e[t])
                }),
                function() {
                    i.forEach(function(t) {
                        document.removeEventListener(t, e[t])
                    })
                }
            }, [i]),
            t(a)
        }
        K.propTypes = {
            children: Z().func.isRequired,
            events: Z().arrayOf(Z().string).isRequired
        };
        var Y = function(e) {
            var t, i, n = e.subnav, a = e.articleId, l = e.tableOfContents;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [n.isEnabled && (0,
                s.jsx)(q.f, {
                    titleText: null === (t = n.headline) || void 0 === t ? void 0 : t.primary,
                    titleLink: n.externalUrl,
                    linkItems: null === (i = n.content) || void 0 === i ? void 0 : i.items,
                    isActiveLink: function(e) {
                        return (null == e ? void 0 : e.id) === a
                    },
                    logo: n.teaseImage
                }), l.isEnabled && l.isVisibleOnMobile && (0,
                s.jsx)(K, {
                    events: ["click", "keydown"],
                    children: function(e) {
                        return (0,
                        s.jsx)(H.M, {
                            lastInteraction: e,
                            links: l.links,
                            testId: "article-table-of-content",
                            title: l.title,
                            variant: "topnav",
                            visible: l.isVisibleOnMobile
                        })
                    }
                })]
            })
        }
          , X = i(34122)
          , J = i.n(X)
          , Q = (0,
        d.memo)(function(e) {
            var t = e.isChromeless
              , i = e.subnav
              , n = e.tableOfContents
              , a = e.articleId
              , l = e.eventDayRecirc
              , r = e.children
              , o = e.hfsLayout
              , d = (0,
            s.jsx)(Y, {
                subnav: i,
                tableOfContents: n,
                articleId: a
            });
            return t ? (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: J().navsContainer,
                    children: d
                }), r]
            }) : (0,
            s.jsx)(z.q, {
                layout: o,
                contentAboveHeader: l.isEnabled && (0,
                s.jsx)(W.b, {
                    headline: l.headline,
                    externalUrl: l.externalUrl,
                    content: l.content
                }),
                contentBelowHeader: d,
                isNavbarSticky: !i.isEnabled,
                mobileNavInsertVisibility: (0,
                V.J)({
                    subnavEnabled: null == i ? void 0 : i.isEnabled,
                    eventDayRecircEnabled: null == l ? void 0 : l.isEnabled,
                    tocEnabled: null == n ? void 0 : n.isEnabled
                }),
                children: r
            })
        })
          , $ = i(71740)
          , ee = i(47980)
          , et = i(81481)
          , ei = i(34223)
          , en = i(42336)
          , ea = i(41754)
          , el = i(91807)
          , er = i(23584)
          , eo = i(43914)
          , es = i(95818)
          , ed = i(61702)
          , ec = i(9874)
          , eu = i(31310)
          , ev = i(55943)
          , ep = i.n(ev)
          , eh = {
            s: ec.Ay.FIT_760w,
            m: ec.Ay.FIT_1000w,
            l: ec.Ay.FIT_760w,
            xl: ec.Ay.FIT_1240w
        };
        function e_(e) {
            var t, i, n, a, l, r, o = e.className, d = e.primaryMedia, c = void 0 === d ? null : d;
            if (!c)
                return null;
            var u = (null == c ? void 0 : c.type) === "embeddedImage" && (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsx)("figure", {
                    "aria-labelledby": "duet-main-media-caption",
                    "data-testid": "article-duet__main-media-figure",
                    children: (0,
                    s.jsx)(eu.V, {
                        preload: !0,
                        loadingLazy: !1,
                        url: null == c ? void 0 : null === (i = c.image) || void 0 === i ? void 0 : null === (t = i.url) || void 0 === t ? void 0 : t.primary,
                        alt: null == c ? void 0 : null === (a = c.image) || void 0 === a ? void 0 : null === (n = a.url) || void 0 === n ? void 0 : n.primary,
                        flavor: "fit",
                        responsiveFlavors: eh,
                        sizes: eh,
                        originalHeight: null == c ? void 0 : null === (l = c.image) || void 0 === l ? void 0 : l.height,
                        originalWidth: null == c ? void 0 : null === (r = c.image) || void 0 === r ? void 0 : r.width
                    })
                })
            });
            return (0,
            s.jsx)("div", {
                className: h()(ep().mainMedia, o),
                "data-testid": "article-duet__main-media",
                children: u
            })
        }
        e_.propTypes = {
            className: Z().string,
            primaryMedia: Z().oneOfType([ed.Sl, ed.Ki])
        };
        var em = i(37341)
          , ey = i(37154)
          , ef = i.n(ey);
        function eb(e) {
            var t = e.className
              , i = e.primaryMedia
              , n = void 0 === i ? null : i;
            return n ? (0,
            s.jsx)("div", {
                className: h()(ef().mediaCaption, t),
                "data-testid": "media-caption",
                children: (0,
                s.jsx)(em.A, {
                    image: null == n ? void 0 : n.image,
                    id: "duet-main-media-caption"
                })
            }) : null
        }
        eb.propTypes = {
            className: Z().string,
            primaryMedia: Z().oneOfType([ed.Sl, ed.Ki])
        };
        var eg = i(34846)
          , ex = i(26144)
          , ej = i(90327)
          , ew = i(50703)
          , eC = i(91026)
          , ek = i.n(eC);
        function eT(e) {
            var t = e.className
              , i = e.article
              , n = e.vertical
              , a = i.headline
              , l = i.dek
              , r = i.unibrow
              , o = i.breakingNews
              , d = i.datePublished
              , c = i.dateCreated
              , u = i.flag
              , v = (0,
            eg.Bd)().t;
            return (0,
            s.jsxs)("div", {
                className: h()(t, ek().heading),
                children: [o || u ? (0,
                s.jsx)(ew.A, {
                    isBreaking: !0,
                    label: v(u),
                    timestampWithUpdatedText: (0,
                    ex.y)(d, c, n)
                }) : null, (0,
                s.jsx)(ej.d, {
                    size: "div",
                    className: ek().eyebrow,
                    unibrow: r
                }), (0,
                s.jsx)("h1", {
                    className: ek().headline,
                    children: a.primary
                }), l && (0,
                s.jsx)("p", {
                    className: ek().dek,
                    children: l
                })]
            })
        }
        eT.propTypes = {
            article: ed.jZ.isRequired,
            className: Z().string,
            vertical: Z().string.isRequired
        };
        var eN = i(45526);
        function eA(e, t) {
            if (!e)
                return e;
            var i = h()(e.props.className, t);
            return d.cloneElement(e, {
                className: i
            })
        }
        var eE = i(4324)
          , eS = i.n(eE);
        function eL(e) {
            var t = e.mainMedia
              , i = e.headingContent
              , n = e.mediaCaption
              , a = e.mainContent
              , l = e.className
              , r = e.hasMainMedia;
            return (0,
            s.jsxs)("div", {
                className: h()(eS().duetLayout, void 0 === l ? void 0 : l, (0,
                eN._)({}, eS().hasNoMainMedia, !(void 0 !== r && r))),
                children: [(0,
                s.jsx)("div", {
                    className: eS().duetHeroContainer,
                    children: (0,
                    s.jsxs)("header", {
                        className: eS().duetHero,
                        children: [eA(void 0 === t ? null : t, eS().gridAreaMainMedia), eA(void 0 === n ? null : n, eS().gridAreaMainCaption), eA(void 0 === i ? null : i, eS().gridAreaHeading)]
                    })
                }), eA(void 0 === a ? null : a, eS().gridAreaMain)]
            })
        }
        eL.propTypes = {
            mainMedia: Z().element,
            headingContent: Z().element,
            mediaCaption: Z().element,
            mainContent: Z().element,
            className: Z().string,
            hasMainMedia: Z().bool
        };
        var eR = i(50819)
          , eI = i.n(eR)
          , eM = ["today", "select"];
        function eO(e) {
            var t = e.article
              , i = e.path
              , n = e.vertical
              , a = e.isChromeless
              , l = e.showCreatedDate
              , r = e.getRightRailAdConfig
              , o = e.showUserActions
              , d = e.shouldRenderRightRailTaboola
              , c = e.showDecibelPlayer
              , u = t.primaryMedia;
            return (0,
            s.jsx)(eL, {
                hasMainMedia: (null == u ? void 0 : u.type) === "embeddedImage",
                mainMedia: (0,
                s.jsx)(e_, {
                    primaryMedia: u
                }),
                mediaCaption: (0,
                s.jsx)(eb, {
                    primaryMedia: u
                }),
                headingContent: (0,
                s.jsx)(eT, {
                    article: t,
                    vertical: n,
                    className: "article-duet-layout--heading"
                }),
                mainContent: (0,
                s.jsx)(ee.A, {
                    vertical: n,
                    article: t,
                    index: 0,
                    path: void 0 === i ? "" : i,
                    isChromeless: void 0 !== a && a,
                    showCreatedDate: void 0 === l || l,
                    shouldRenderRightRailTaboola: void 0 === d ? null : d,
                    shouldRenderTaboolaFeed: !0,
                    getRightRailAdConfig: void 0 === r ? null : r,
                    showUserActions: void 0 === o || o,
                    showBylineTimestamp: !0,
                    showInlineByline: !0,
                    className: eI().articleDuetBody,
                    bylineType: eM.includes(n) ? "expandable" : "standard",
                    showDecibelPlayer: void 0 !== c && c
                })
            })
        }
        function eD() {
            return (0,
            s.jsx)("div", {
                className: "piano-gate",
                children: (0,
                s.jsx)("div", {
                    className: "paywallGate"
                })
            })
        }
        var eB = i(56335)
          , eP = i(63535)
          , eF = i(71131)
          , eU = i(64999)
          , eV = i(10616)
          , eW = i(67201)
          , ez = i(66342)
          , eH = i(87063);
        i(80007),
        i(61874);
        var eq = i(38508)
          , eG = i.n(eq)
          , eZ = i(90479)
          , eK = i.n(eZ)
          , eY = i(88220).Buffer
          , eX = "article"
          , eJ = function(e, t, i) {
            var n = t && (i === C.m["BREAKING NEWS"] || i === C.m.DEVELOPING)
              , a = null == e ? void 0 : e.publishedAt
              , l = null == e ? void 0 : e.createdAt;
            return n && l !== a || !n
        }
          , eQ = {
            theme: function(e) {
                var t = e.content
                  , i = e.vertical;
                if (Object.keys(t).length) {
                    var n, a, l, r, o = t.source, s = t.taxonomy.sections;
                    if ("DUET" === (null !== (l = null == t ? void 0 : null === (n = t.presentation) || void 0 === n ? void 0 : n.style) && void 0 !== l && l))
                        return "today" === i ? S.T.LIGHT : S.T.DARK;
                    if ((0,
                    R.zQ)(s, "shopping"))
                        return S.T.LIGHT;
                    var d = null !== (r = null == o ? void 0 : null === (a = o.organization) || void 0 === a ? void 0 : a.name) && void 0 !== r && r;
                    if ("news" === i && "StackCommerce" === d)
                        return S.T.VERTICAL
                }
                return ["today"].indexOf(i) >= 0 ? S.T.LIGHT : S.T.VERTICAL
            },
            headline: function(e) {
                var t, i = e.content;
                return null !== (t = null == i ? void 0 : i.headline) && void 0 !== t ? t : null
            },
            activeAt: function(e) {
                var t, i, n = e.vertical, a = e.navbarContent, l = (0,
                R.iy)(null == a ? void 0 : null === (i = a.taxonomy) || void 0 === i ? void 0 : null === (t = i.primaryTopic) || void 0 === t ? void 0 : t.slug);
                return "today" === n && !(0,
                M.Bg)(a) || (null == a ? void 0 : a.subnav) && !l ? null : 160
            },
            showShortcuts: function(e) {
                var t, i = e.content, n = null == i ? void 0 : null === (t = i.taxonomy) || void 0 === t ? void 0 : t.primaryTopic;
                return !n || !["2020", "2022"].some(function(e) {
                    return ["".concat(e, "-election"), "elecciones-estados-unidos-".concat(e)].includes((0,
                    R.Wh)(n))
                })
            }
        }
          , e$ = ["today", "select"]
          , e0 = function(e, t) {
            return e$.includes(e) ? "DUET" === t || "WIDE" === t ? "expandable" : "none" : "standard"
        }
          , e1 = function(e) {
            var t, i, n, o, c, v, p, _, m, y = e.active, f = e.articles, b = e.boxBestsellersList, g = e.debounceIntersectionObserver, x = e.eventDayList, C = e.shouldShowEventDayRecirc, A = e.isChromeless, E = e.isStartTodayAppRoute, L = e.layout, I = e.mostPopularStoryListObject, O = e.navUpdate, V = e.path, W = e.relatedArticles, z = e.statusCode, H = e.vertical, q = e.view, G = e.isNewsSubscriptionArticle, Z = e.showDecibelPlayer, K = e.isOliChatEnabled, Y = (0,
            r._)((0,
            d.useState)(!1), 2), X = Y[0], J = Y[1], ed = (0,
            r._)((0,
            d.useState)(!1), 2), ec = ed[0], eu = ed[1], ev = (0,
            r._)((0,
            d.useState)(!0), 2), ep = ev[0], eh = ev[1], e_ = (0,
            d.useRef)(null), em = (0,
            d.useCallback)(function(e, t) {
                return e_.current && clearTimeout(e_.current),
                e_.current = setTimeout(e, t),
                function() {
                    e_.current && clearTimeout(e_.current)
                }
            }, []), ey = g || em;
            (0,
            d.useEffect)(function() {
                return ey(function() {
                    eh(ec)
                }, 500)
            }, [ec, ey]);
            var ef = (null == f ? void 0 : f.length) && f[0]
              , eb = (0,
            k.Jp)()
              , eg = eb["taboola-reco-reel"]
              , ex = eb["shoppable-articles"]
              , ej = eb["topic-subnav"]
              , ew = eb["show-table-of-contents"]
              , eC = eb["primary-media-banner"]
              , ek = eb["show-expandable-bylines"]
              , eT = eb["nbc-news-subscriptions"]
              , eN = (0,
            D.z)();
            (0,
            d.useEffect)(function() {
                if (eN) {
                    var e;
                    document.querySelectorAll(".article-body, .article-body__content").forEach(function(e) {
                        e.style.maxHeight = "none",
                        e.style.height = "auto"
                    }),
                    null === (e = document.querySelector(".tbl-read-more-btn")) || void 0 === e || e.remove()
                }
            }, [eN]);
            var eA = (0,
            d.useCallback)(function() {
                J(et.A.isSorM())
            }, [])
              , eE = (0,
            d.useRef)();
            (0,
            d.useEffect)(function() {
                var e, t, i, n;
                "StackCommerce" === (null !== (n = null == f ? void 0 : null === (i = f[0]) || void 0 === i ? void 0 : null === (t = i.source) || void 0 === t ? void 0 : null === (e = t.organization) || void 0 === e ? void 0 : e.name) && void 0 !== n && n) && (!eE.current.active && y ? O({
                    theme: S.T.VERTICAL
                }) : eE.current.active && !y && O({
                    theme: S.T.LIGHT
                }))
            }, [f, y, O]),
            (0,
            d.useEffect)(function() {
                return window.addDecibelCookie = function() {
                    (0,
                    ez.TV)("forceShowDecibelPlayer", "true")
                }
                ,
                window.removeDecibelCookie = function() {
                    (0,
                    ez.Yj)("forceShowDecibelPlayer")
                }
                ,
                eA(),
                j.A.on("resize", eA),
                function() {
                    j.A.remove("resize", eA)
                }
            }, []);
            var eS = (0,
            d.useCallback)(function(e) {
                var t;
                if (null == e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.isIntersecting) {
                    var i, n = null == f ? void 0 : null === (i = f[0]) || void 0 === i ? void 0 : i.id;
                    j.A.trigger("articleInView", n)
                }
            }, [f])
              , eL = (0,
            d.useMemo)(function() {
                if (!ef)
                    return {};
                var e = ef.taxonomy
                  , t = (void 0 === e ? {} : e).allTerms
                  , i = ef.body
                  , n = (0,
                M.CH)(ew, H, t)
                  , a = n && X && !ep;
                return {
                    title: (0,
                    M.uS)(t),
                    links: (0,
                    M.G$)(i, H),
                    isEnabled: n,
                    isVisibleOnMobile: a
                }
            }, [f, ew, H, X, ep])
              , eR = (0,
            d.useMemo)(function() {
                if (!ef)
                    return {};
                var e, t, i = (0,
                R.iy)(null === (t = ef.taxonomy) || void 0 === t ? void 0 : null === (e = t.primaryTopic) || void 0 === e ? void 0 : e.slug), n = !!(ef.subnav && !i && ej && !C);
                return (0,
                l._)((0,
                a._)({}, ef.subnav), {
                    isEnabled: n
                })
            }, [f, ej, C])
              , eI = (0,
            d.useMemo)(function() {
                return (0,
                l._)((0,
                a._)({}, x), {
                    isEnabled: C
                })
            }, [x, C])
              , eM = null == I ? void 0 : null === (n = I.content) || void 0 === n ? void 0 : n.items;
            if (parseInt(z, 10) >= 400)
                return (0,
                s.jsx)(eH.default, {
                    statusCode: z,
                    layout: L
                });
            var eU = ef.id
              , eV = ef.breakingNews
              , eq = ef.date
              , eZ = ef.dateCreated
              , eY = ef.authors
              , eQ = ef.ecommerceEnabled
              , e$ = ef.unibrow
              , e1 = ef.nativeAd
              , e2 = ef.flag
              , e3 = ef.taxonomy.allTerms
              , e4 = void 0 === e3 ? [] : e3;
            (0,
            eW.d)(["setContentCreated", eZ]),
            (0,
            eW.d)(["setContentAuthor", null === (o = eY[0]) || void 0 === o ? void 0 : o.person.name]),
            (0,
            eW.d)(["setContentSection", null == e$ ? void 0 : e$.text]),
            (0,
            eW.d)(["setTags", null == e4 ? void 0 : e4.map(function(e) {
                return e.slug
            })]),
            (0,
            eW.d)(["setContentIsNative", e1]),
            (0,
            eW.d)(["setCustomVariable", "ecommerceEnabled", eQ]),
            (0,
            eW.d)(["setCustomVariable", "pageType", eX]);
            var e7 = e4.some(function(e) {
                return "today/label/shop-this-list" === e.path
            })
              , e9 = ex && eQ && e7
              , e6 = null == ef ? void 0 : null === (v = ef.taxonomy) || void 0 === v ? void 0 : null === (c = v.primarySection) || void 0 === c ? void 0 : c.name
              , e8 = (0,
            N.B0)(w.NEWSLETTER_SIGNUP_POPUP_MODULE, H)
              , e5 = (0,
            N.B0)(w.ARTICLE_HERO_LAYOUT, H)
              , te = "select" !== H ? null : function() {
                return {
                    display: !1
                }
            }
              , tt = "select" !== H ? null : function() {
                return !1
            }
              , ti = eJ(eq, eV, e2)
              , tn = (0,
            N.B0)(w.SHOW_USER_ACTIONS, H)
              , ta = !!tn;
            (null == tn ? void 0 : tn.hideFromChromeless) && (ta = !A),
            E && (ta = !1);
            var tl = eg && (0,
            U.Dp)(H)
              , tr = (0,
            T.lp)(ef)
              , to = ek && (t = H,
            i = eQ,
            "today" === t ? i ? "shop today" : "today" : "select" === t ? "select" : null)
              , ts = (null === (p = ef.presentation) || void 0 === p ? void 0 : p.style) === "DUET"
              , td = (null === (_ = ef.presentation) || void 0 === _ ? void 0 : _.style) === "WIDE"
              , tc = K && !A
              , tu = G && (eT || ez.cp) ? (0,
            s.jsx)(eD, {}) : (0,
            s.jsxs)(s.Fragment, {
                children: [e8 && (0,
                s.jsx)(ea.U, {}), ts ? (0,
                s.jsx)(eO, {
                    article: ef,
                    path: V,
                    vertical: H,
                    isChromeless: A,
                    showCreatedDate: !0,
                    getRightRailAdConfig: te,
                    showUserActions: ta,
                    shouldRenderRightRailTaboola: tt,
                    showDecibelPlayer: Z
                }) : (0,
                s.jsxs)(s.Fragment, {
                    children: [(0,
                    s.jsx)($.A, {
                        bylineBrand: !td && to,
                        content: ef,
                        heroLayoutType: e5,
                        isChromeless: A,
                        isPresentationStyleWide: td,
                        isShoppable: e9,
                        primaryMediaBannerEnabled: eC,
                        tableOfContentsEnabled: eL.isEnabled,
                        vertical: H,
                        view: q
                    }), (0,
                    s.jsx)(ee.A, {
                        showDecibelPlayer: Z,
                        vertical: H,
                        article: ef,
                        index: 0,
                        path: V,
                        isChromeless: A,
                        view: q,
                        isShoppable: e9,
                        getRightRailAdConfig: te,
                        shouldRenderRightRailTaboola: tt && !eN,
                        shouldRenderTaboolaFeed: !eN,
                        taboolaRecoReelEnabled: tl && !eN,
                        showUserActions: ta,
                        showBylineTimestamp: ti,
                        mostPopularStoryListItems: eM,
                        relatedArticles: W,
                        tableOfContentsEnabled: eL.isEnabled,
                        boxBestsellersList: b,
                        isInlineTableOfContentsInView: ec,
                        setIsInlineTableOfContentsInView: eu,
                        tableOfContents: eL,
                        bylineType: e0(H, null === (m = ef.presentation) || void 0 === m ? void 0 : m.style),
                        bylineBrand: to
                    })]
                })]
            });
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(u(), {
                    children: (0,
                    s.jsx)(eo.A, {})
                }), (0,
                s.jsx)(P.W, {
                    vertical: H
                }), (0,
                s.jsxs)("div", {
                    className: h()(eK().container, "bg-knockout-primary"),
                    id: "content",
                    children: [(0,
                    s.jsx)(Q, {
                        isChromeless: A,
                        subnav: eR,
                        tableOfContents: eL,
                        articleId: eU,
                        eventDayRecirc: eI,
                        hfsLayout: L,
                        children: (0,
                        s.jsx)(ei.t, {
                            errorHandler: function() {
                                return (0,
                                s.jsx)(eH.default, {
                                    statusCode: 500
                                })
                            },
                            children: (0,
                            s.jsx)(en.A, {
                                rootMargin: "100000% 0px -100% 0px",
                                threshold: 0,
                                callback: eS,
                                children: (0,
                                s.jsx)(er.A, {
                                    contentType: "article",
                                    contentUrl: ef.url.primary,
                                    children: (0,
                                    s.jsxs)(k.kj.Provider, {
                                        value: ef,
                                        children: [(0,
                                        s.jsx)(el.ze, {
                                            hidden: E
                                        }), (0,
                                        s.jsx)(el.oH, {
                                            article: ef,
                                            vertical: H
                                        }), (0,
                                        s.jsx)(eP.N, {
                                            videos: tr,
                                            vertical: H,
                                            section: e6
                                        }), (0,
                                        s.jsx)("article", {
                                            className: h()(eG().article, "article"),
                                            children: tu
                                        }, "articleWrapper-".concat(ef.id))]
                                    })
                                })
                            })
                        })
                    }), tc && (0,
                    s.jsx)(eF.B, {})]
                }), (0,
                s.jsx)(F.I, {
                    isChromeless: A,
                    pageID: eU
                }), (0,
                s.jsx)(B.A, {
                    isArticle: !0,
                    vertical: H
                }), (0,
                s.jsx)(es.A, {
                    vertical: H
                }), (0,
                s.jsx)(eB.w, {})]
            })
        };
        e1.getInitialProps = function() {
            var e = (0,
            n._)(function(e) {
                var t, i, n, r, s, d, c, u, v, p, h, _, y, j, C, k, T, S, R, M, D, B, P, F, U, V, W, z, H, q, G, Z, K, Y, X, J, Q, $, ee, et, ei, en, ea, el, er, eo, es, ed, ec, eu, ev, ep, eh, e_, em, ey, ef, eb, eg, ex, ej, ew, eC, ek, eT, eN, eA, eE, eS;
                return (0,
                o.__generator)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        if (h = (p = void 0 === (v = e.req) ? {} : v).originalUrl,
                        y = (void 0 === (_ = p.headers) ? {} : _).authorization,
                        j = p.params.id,
                        S = void 0 === (T = (k = (void 0 === (C = e.res) ? {} : C).locals).getLaunchDarklyFlag) ? function() {
                            return Promise.resolve({})
                        }
                        : T,
                        R = k.launchDarklyFlags,
                        M = k.vertical,
                        P = (B = void 0 === (D = k.data) ? {} : D).curatedList,
                        U = (void 0 === (F = B.boxBestsellers) ? {} : F).curatedList,
                        V = k.logger,
                        W = e.store,
                        H = E.A.article(j),
                        q = (0,
                        eU.H)(h),
                        Z = null !== (G = null == y ? void 0 : y.split(" ")[1]) && void 0 !== G ? G : "",
                        !q)
                            return [3, 2];
                        if (K = f()().serverRuntimeConfig.JWT_PUBLIC_KEY,
                        Y = {
                            navigating: !1,
                            pageView: eX,
                            isStartTodayAppRoute: q,
                            statusCode: 403,
                            eventDayList: P
                        },
                        !K)
                            return [2, Y];
                        X = {
                            headers: {
                                Authorization: "Bearer ".concat(Z)
                            }
                        };
                        try {
                            if (Q = (J = m().verify(Z, eY.from(K, "base64").toString("utf-8"))).exp,
                            $ = J.brand,
                            ee = "today" === $,
                            et = Q >= Math.floor(Date.now() / 1e3),
                            !ee || !et)
                                return [2, Y]
                        } catch (e) {
                            return [2, Y]
                        }
                        return [4, W.dispatch((0,
                        b.yu)(H, {
                            additionalRequestData: X
                        }))];
                    case 1:
                        if (el = (ea = void 0 === (en = (null !== (ei = o.sent()) && void 0 !== ei ? ei : {}).payload) ? {} : en).data,
                        er = ea.status,
                        !el)
                            return [2, (0,
                            l._)((0,
                            a._)({}, Y), {
                                statusCode: er
                            })];
                        return z = [W.dispatch((0,
                        x.r3)("start-today-article")), W.dispatch((0,
                        x.g6)(O.g.START_TODAY_APP)), W.dispatch((0,
                        x.AX)(!0)), W.dispatch((0,
                        b.$Z)(H, {
                            additionalRequestData: X
                        }))],
                        [3, 3];
                    case 2:
                        z = [W.dispatch((0,
                        b.$Z)(H)), W.dispatch((0,
                        x.r3)(eX))],
                        o.label = 3;
                    case 3:
                        eo = (0,
                        N.B0)(w.MOST_POPULAR_MODULE_BRAND_CONFIG, M),
                        es = !1,
                        o.label = 4;
                    case 4:
                        return o.trys.push([4, 6, , 7]),
                        [4, S("is-most-popular-module-enabled")];
                    case 5:
                        return es = o.sent(),
                        [3, 7];
                    case 6:
                        return ed = o.sent(),
                        console.error("Could not retrieve feature flag for Most Popular Module. Error is logged directly below."),
                        console.error(ed),
                        [3, 7];
                    case 7:
                        ec = !1,
                        o.label = 8;
                    case 8:
                        return o.trys.push([8, 10, , 11]),
                        [4, S("enable-oli-chat", function(e) {
                            return e({
                                custom: {
                                    pageType: "article",
                                    vertical: M,
                                    fullUrl: h,
                                    tag: h
                                }
                            })
                        })];
                    case 9:
                        return ec = o.sent(),
                        [3, 11];
                    case 10:
                        return o.sent(),
                        console.error("Could not retrieve feature flag."),
                        [3, 11];
                    case 11:
                        return eu = {
                            news: "nccl00011223344",
                            msnbc: "nccl00088112233",
                            today: "tdcl00055667799"
                        },
                        es && eo && (ev = eu[M],
                        z.push(W.dispatch((0,
                        b.ne)(ev)))),
                        [4, Promise.all(z)];
                    case 12:
                        return o.sent(),
                        e_ = null == (eh = null == (ep = W.getState().article) ? void 0 : null === (t = ep.content) || void 0 === t ? void 0 : t[0]) ? void 0 : eh.subType,
                        ey = null !== (em = null == eh ? void 0 : null === (i = eh.url) || void 0 === i ? void 0 : i.primary) && void 0 !== em ? em : "",
                        eb = null !== (ef = null == eh ? void 0 : eh.headline) && void 0 !== ef ? ef : {},
                        ex = null !== (eg = null == eh ? void 0 : eh.id) && void 0 !== eg ? eg : "",
                        ej = null == eh ? void 0 : null === (r = eh.taxonomy) || void 0 === r ? void 0 : null === (n = r.primaryLabel) || void 0 === n ? void 0 : n.path,
                        ew = null == eh ? void 0 : null === (s = eh.unibrow) || void 0 === s ? void 0 : s.taxonomyPath,
                        eC = (0,
                        L.P)(R, M, null == eh ? void 0 : null === (c = eh.taxonomy) || void 0 === c ? void 0 : null === (d = c.allTerms) || void 0 === d ? void 0 : d.map(function(e) {
                            return null == e ? void 0 : e.path
                        }), P),
                        "externalLink" === e_ && e.res.redirect(ey),
                        eT = null !== (ek = null == ep ? void 0 : null === (u = ep.error) || void 0 === u ? void 0 : u.status) && void 0 !== ek ? ek : 200,
                        [4, W.dispatch((0,
                        g.Gw)({
                            shareUrl: (0,
                            A.L)(ey),
                            headline: eb
                        }))];
                    case 13:
                        if (o.sent(),
                        (0,
                        I.n)(e.res, M),
                        eN = null != ej ? ej : ew,
                        !((0,
                        N.B0)(w.RELATED_ARTICLE_BOTTOM_RECIRC, M) && !(null == eh ? void 0 : eh.ecommerceEnabled)))
                            return [3, 15];
                        return eA = {
                            taxonomyPath: eN,
                            currentArticle: ex,
                            queryLimit: 10
                        },
                        [4, W.dispatch((0,
                        b.b9)(eA))];
                    case 14:
                        o.sent(),
                        o.label = 15;
                    case 15:
                        return "today" === M && h.startsWith("/shop") && (0,
                        eV.Gs)(V, eh),
                        [4, S("enable-decibel-audio-player")];
                    case 16:
                        var eL;
                        return eE = o.sent(),
                        eS = (0,
                        N.B0)(eE, M),
                        [2, {
                            isNewsSubscriptionArticle: (eL = h,
                            /\?subscriptions=true/.test(eL)),
                            boxBestsellersList: U,
                            eventDayList: P,
                            isStartTodayAppRoute: q,
                            navigating: !1,
                            pageView: eX,
                            shouldShowEventDayRecirc: eC,
                            statusCode: eT,
                            showDecibelPlayer: eS,
                            isOliChatEnabled: ec
                        }]
                    }
                })
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        let e2 = (0,
        S.v)(eQ)((0,
        v.Ng)(function(e) {
            var t = e.article
              , i = e.shared
              , n = e.router
              , a = e.navbar;
            return {
                articles: t.content,
                vertical: i.vertical,
                isChromeless: i.isChromeless,
                path: n.path,
                active: a.active,
                mostPopularStoryListObject: t.mostPopularStoryList,
                relatedArticles: t.relatedArticles
            }
        }, function(e) {
            return {
                navUpdate: function(t) {
                    return e((0,
                    g.Gw)(t))
                }
            }
        })(e1))
    }
    ,
    27831: e => {
        e.exports = {
            opaqueBackground: "styles_opaqueBackground__l83y3",
            container: "styles_container__7XlsI",
            content: "styles_content__nGfov",
            dots: "styles_dots__1ai4b",
            "live-dot-blink": "styles_live-dot-blink__LyHZu",
            "fade-in": "styles_fade-in__05Z_l",
            "expand-in": "styles_expand-in__V9V8d",
            "chatblog-expand-in": "styles_chatblog-expand-in__clDxc"
        }
    }
    ,
    28707: (e, t, i) => {
        "use strict";
        i.d(t, {
            b: () => y
        });
        var n = i(45526)
          , a = i(67684)
          , l = i(62701)
          , r = i(20294)
          , o = i(85993)
          , s = i(37876)
          , d = i(14232)
          , c = i(15039)
          , u = i.n(c)
          , v = i(97247)
          , p = i(84033)
          , h = i(89933)
          , _ = i(77717)
          , m = i.n(_);
        function y(e) {
            var t, i = e.headline, c = e.externalUrl, _ = e.content.items, y = void 0 === _ ? [] : _, f = (0,
            d.useRef)(), b = (0,
            r._)((0,
            d.useState)({
                hideLeftScroll: !0,
                hideRightScroll: !1
            }), 2), g = b[0], x = g.hideLeftScroll, j = g.hideRightScroll, w = b[1], C = (0,
            d.useContext)(p.P).path;
            if (0 === y.length)
                return null;
            var k = [{
                headline: i.primary,
                url: c
            }].concat((0,
            o._)(y.map(function(e) {
                return "article" === e.type ? {
                    headline: e.headline.primary,
                    url: e.url.primary
                } : "externalLink" === e.type ? {
                    headline: e.text,
                    url: e.url.primary
                } : null
            }))).filter(Boolean).map(function(e) {
                var t = e.url;
                try {
                    t = new URL(e.url).pathname
                } catch (e) {}
                return (0,
                l._)((0,
                a._)({}, e), {
                    active: t === C
                })
            })
              , T = function() {
                clearTimeout(t),
                t = setTimeout(function() {
                    w({
                        hideLeftScroll: x,
                        hideRightScroll: f.current.scrollWidth === f.current.clientWidth
                    })
                }, 100)
            };
            return (0,
            d.useEffect)(function() {
                return w({
                    hideLeftScroll: !0,
                    hideRightScroll: f.current.scrollWidth === f.current.clientWidth
                }),
                window.addEventListener("resize", T),
                function() {
                    window.removeEventListener("resize", T)
                }
            }, []),
            (0,
            s.jsx)("div", {
                className: m().container,
                "data-activity-map": "event-day-recirc-header",
                role: "menu",
                "data-testid": "event-day-recirc",
                children: (0,
                s.jsxs)("div", {
                    className: m().topBar,
                    children: [(0,
                    s.jsx)("button", {
                        "aria-label": "Left Scroll Button",
                        title: "Left Scroll Button",
                        type: "button",
                        onClick: function() {
                            var e = f.current;
                            e.scrollTo({
                                behavior: "smooth",
                                left: e.scrollLeft - e.clientWidth
                            })
                        },
                        className: u()(m().leftScroll, (0,
                        n._)({}, m().hide, x)),
                        children: (0,
                        s.jsx)("span", {
                            className: "icon icon-chevron-left"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: m().scrollContainer,
                        onScroll: function(e) {
                            var t = e.target;
                            return t.scrollLeft < 15 ? w({
                                hideLeftScroll: !0,
                                hideRightScroll: !1
                            }) : t.offsetWidth + t.scrollLeft + 15 >= t.scrollWidth ? w({
                                hideLeftScroll: !1,
                                hideRightScroll: !0
                            }) : w({
                                hideLeftScroll: !1,
                                hideRightScroll: !1
                            })
                        },
                        ref: f,
                        role: "navigation",
                        children: k.map(function(e, t) {
                            var i;
                            return (0,
                            h.isValidUrl)(e.url) ? (0,
                            s.jsx)(v.A, {
                                className: u()(m().link, (i = {},
                                (0,
                                n._)(i, m().topic, 0 === t),
                                (0,
                                n._)(i, m().current, e.active),
                                i)),
                                to: e.url,
                                icid: "eventday_work_".concat(t + 1),
                                children: (0,
                                s.jsx)("span", {
                                    className: m().linkText,
                                    children: e.headline
                                })
                            }, e.url) : (0,
                            s.jsx)("span", {
                                className: u()(m().edrText, (0,
                                n._)({}, m().topic, 0 === t)),
                                children: (0,
                                s.jsx)("span", {
                                    children: e.headline
                                })
                            })
                        })
                    }), (0,
                    s.jsx)("button", {
                        type: "button",
                        "aria-label": "Right Scroll Button",
                        title: "Right Scroll Button",
                        onClick: function() {
                            var e = f.current;
                            e.scrollTo({
                                behavior: "smooth",
                                left: e.scrollLeft + e.clientWidth
                            })
                        },
                        className: u()(m().rightScroll, (0,
                        n._)({}, m().hide, j)),
                        children: (0,
                        s.jsx)("span", {
                            className: "icon icon-chevron-right"
                        })
                    })]
                })
            })
        }
    }
    ,
    33884: () => {}
    ,
    34122: e => {
        e.exports = {
            navsContainer: "styles_navsContainer__qaDP2"
        }
    }
    ,
    35272: () => {}
    ,
    37154: e => {
        e.exports = {
            mediaCaption: "styles_mediaCaption__PG3Nm",
            "live-dot-blink": "styles_live-dot-blink__zUCAQ",
            "fade-in": "styles_fade-in___y6So",
            "expand-in": "styles_expand-in__6HqCr",
            "chatblog-expand-in": "styles_chatblog-expand-in__ADw6_"
        }
    }
    ,
    38194: () => {}
    ,
    38508: e => {
        e.exports = {
            article: "styles_article__Hkaio",
            hasStickyVideo: "styles_hasStickyVideo__oY4Yy",
            "live-dot-blink": "styles_live-dot-blink__xs9eE",
            "fade-in": "styles_fade-in__TR0L0",
            "expand-in": "styles_expand-in__1jIt7",
            "chatblog-expand-in": "styles_chatblog-expand-in__sjfn3"
        }
    }
    ,
    41754: (e, t, i) => {
        "use strict";
        i.d(t, {
            U: () => f
        });
        var n = i(20294)
          , a = i(37876)
          , l = i(14232)
          , r = i(15039)
          , o = i.n(r)
          , s = i(48011)
          , d = i(44717)
          , c = i(81237)
          , u = i(69319)
          , v = i(21216)
          , p = i(81917)
          , h = i(27831)
          , _ = i.n(h)
          , m = i(39844)
          , y = function(e) {
            if ("today" === e)
                return (0,
                a.jsx)(c.A, {
                    textColor: "black",
                    sunriseColor: "#FF503C"
                });
            var t = o()("icon", {
                "icon-nbcnews-white": "news" === e
            });
            return (0,
            a.jsx)("span", {
                className: t
            })
        }
          , f = (0,
        s.Ng)(function(e, t) {
            var i = e.shared;
            return {
                vertical: t.vertical || i.vertical
            }
        })((0,
        d.A)(function(e) {
            var t = e.vertical
              , i = void 0 === t ? "news" : t
              , r = e.cookies
              , s = (0,
            n._)((0,
            l.useState)(!1), 2)
              , d = s[0]
              , c = s[1]
              , h = (0,
            n._)((0,
            l.useState)(!0), 2)
              , f = h[0]
              , b = h[1]
              , g = (0,
            n._)((0,
            l.useState)(null), 2)
              , x = g[0]
              , j = g[1]
              , w = (0,
            n._)((0,
            l.useState)(""), 2)
              , C = w[0]
              , k = w[1]
              , T = (0,
            n._)((0,
            l.useState)(!1), 2)
              , N = T[0]
              , A = T[1];
            (0,
            l.useEffect)(function() {
                var e, t = new u.EventEmitter;
                return t.on("setModule", function(t) {
                    j(t),
                    e = t.newsletterId,
                    r && !r.get(e) ? r.set(e, !0, {
                        maxAge: 604800
                    }) : A(!0)
                }),
                window.setModuleEvent = t,
                function() {
                    t.removeAllListeners("setModule"),
                    window.setModuleEvent === t && delete window.setModuleEvent
                }
            }, [r]);
            var E = (0,
            l.useCallback)(function() {
                b(!1)
            }, [])
              , S = (0,
            l.useCallback)(function(e) {
                c(!0),
                k(e),
                document.dispatchEvent(new Event("emailSignup"))
            }, [])
              , L = d ? {
                title: "You have successfully signed up.",
                description: "".concat(C, " has subscribed to the newsletter. Check your inbox for a confirmation email.")
            } : x
              , R = (0,
            m.q)(i);
            return x && !N ? (0,
            a.jsx)(v.A, {
                children: (0,
                a.jsx)("div", {
                    id: "email-popup-module",
                    className: o()("fixed h-100 w-100 top0 left0 justify-center items-center df", _().opaqueBackground, {
                        "v-hidden": !f
                    }),
                    "data-testid": "newsletter-popup-module",
                    children: (0,
                    a.jsx)("div", {
                        className: o()("relative", _().container),
                        children: (0,
                        a.jsxs)("div", {
                            className: o()("relative", _().content),
                            children: [(0,
                            a.jsx)("button", {
                                className: "absolute top1 right1 f7 b-none bg-white",
                                onClick: E,
                                type: "button",
                                children: "✕"
                            }), y(i), (0,
                            a.jsx)("h2", {
                                className: "f8 mv3",
                                children: L.title
                            }), (0,
                            a.jsx)("h4", {
                                className: "publico-txt fw1 lh-copy mt0 mb4",
                                children: L.description
                            }), (0,
                            a.jsx)(p.default, {
                                newsletterId: x.newsletterId,
                                onSubmit: S,
                                signupSource: x.signupSource || "popup-mod",
                                sitekey: R,
                                vertical: i
                            }), (0,
                            a.jsx)("section", {
                                className: o()("absolute", _().dots)
                            })]
                        })
                    })
                })
            }) : null
        }))
    }
    ,
    43987: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => f
        });
        var n = i(67684)
          , a = i(62701)
          , l = i(37876)
          , r = i(15039)
          , o = i.n(r)
          , s = i(95062)
          , d = i.n(s)
          , c = i(14232)
          , u = i(34846)
          , v = i(30786)
          , p = i(20294)
          , h = i(11806)
          , _ = function(e, t, i, n) {
            var a = (0,
            v.getFormattedDateString)(e, t, {}, h.Ay)
              , l = (0,
            v.getFormattedDateTimeString)(e, t, i, h.Ay);
            return {
                timestamp: n ? a : l,
                monthAndDay: (0,
                v.getFormattedMonthAndDayString)(e, t, h.Ay),
                year: (0,
                v.getFormattedDateYearString)(e, t)
            }
        };
        let m = function(e) {
            var t = e.dateOnly
              , i = void 0 !== t && t
              , n = e.dateString
              , a = void 0 === n ? "" : n
              , r = e.delimiter
              , o = void 0 === r ? " / " : r
              , s = e.layout
              , d = e.timeZone
              , u = _(a, "America/New_York", o, i)
              , v = (0,
            p._)(c.useState(u.timestamp), 2)
              , h = v[0]
              , m = v[1]
              , y = (0,
            p._)(c.useState(u.monthAndDay), 2)
              , f = y[0]
              , b = y[1]
              , g = (0,
            p._)(c.useState(u.year), 2)
              , x = g[0]
              , j = g[1];
            return ((0,
            c.useEffect)(function() {
                var e = _(a, d, o, i)
                  , t = e.timestamp
                  , n = e.monthAndDay
                  , l = e.year;
                m(t),
                b(n),
                j(l)
            }, [a, d, i, o]),
            "" === a) ? null : (0,
            l.jsx)(l.Fragment, {
                children: "split" === s ? (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsxs)("span", {
                        className: "dib mr1 ws-nowrap",
                        "data-testid": "timestamp__monthDay",
                        children: [f, o]
                    }), (0,
                    l.jsx)("span", {
                        className: "dib ws-nowrap",
                        children: x
                    })]
                }) : h
            })
        };
        function y(e) {
            var t = e.dateCreated
              , i = void 0 === t ? "" : t
              , r = e.dateOnly
              , s = void 0 !== r && r
              , d = e.datePublished
              , c = void 0 === d ? "" : d
              , p = e.dateLabel
              , h = void 0 === p ? "Updated" : p
              , _ = e.delimiter
              , y = void 0 === _ ? "" : _
              , f = e.layout
              , b = void 0 === f ? "" : f
              , g = e.meta
              , x = void 0 !== g && g
              , j = e.showCreatedDate
              , w = void 0 !== j && j
              , C = e.hideMicroData
              , k = void 0 !== C && C
              , T = e.styles
              , N = e.timeZone
              , A = e.testId;
            if ("" === c)
                return null;
            var E = (0,
            u.Bd)().t
              , S = i !== c
              , L = S ? c : i
              , R = !w || S
              , I = x && S && !k
              , M = x && w && !k
              , O = (0,
            v.formatAsISO)(i)
              , D = (0,
            v.formatAsISO)(c);
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)("time", (0,
                a._)((0,
                n._)({
                    className: o()("relative z-1", void 0 === T ? "" : T),
                    dateTime: L,
                    "data-testid": (void 0 === A ? null : A) || "timestamp__datePublished"
                }, k ? {} : {
                    itemProp: "datePublished"
                }), {
                    content: D,
                    children: [w && (0,
                    l.jsx)(m, {
                        dateOnly: s,
                        dateString: i,
                        delimiter: y,
                        layout: b,
                        timeZone: void 0 === N ? "" : N
                    }), R && (0,
                    l.jsxs)(l.Fragment, {
                        children: [w && (0,
                        l.jsx)("span", {
                            children: "\xa0/\xa0"
                        }), h && (0,
                        l.jsxs)(l.Fragment, {
                            children: [E(h), "\xa0"]
                        }), (0,
                        l.jsx)(m, {
                            dateOnly: s,
                            dateString: L,
                            delimiter: y,
                            layout: b
                        })]
                    })]
                })), M && (0,
                l.jsx)("meta", {
                    "data-testid": "timestamp__datePublished--meta",
                    itemProp: "datePublished",
                    content: O
                }), I && (0,
                l.jsx)("meta", {
                    "data-testid": "timestamp__dateModified--meta",
                    itemProp: "dateModified",
                    content: D
                })]
            })
        }
        y.propTypes = {
            dateCreated: d().string,
            dateOnly: d().bool,
            datePublished: d().string,
            dateLabel: d().string,
            delimiter: d().string,
            layout: d().string,
            meta: d().bool,
            showCreatedDate: d().bool,
            hideMicroData: d().bool,
            styles: d().string,
            timeZone: d().string,
            testId: d().string
        };
        let f = y
    }
    ,
    46719: (e, t, i) => {
        "use strict";
        i.d(t, {
            jT: () => r,
            zq: () => a
        });
        var n = i(11806)
          , a = function(e) {
            return !!e && "video" === e.type && !!e.item && "tveEpisode" === e.item.videoType && "telemundo" === e.item.publisher.name || null
        }
          , l = function(e) {
            var t, i, n = {
                baseUrl: "https://telemundo.app.link",
                campaign: "tlmddotcom",
                channel: "tlmddotcom",
                feature: "marketing",
                canonicalURL: null === (t = e.item.url) || void 0 === t ? void 0 : t.canonical,
                ios_deeplink_path: e.item.mpxMetadata && "video/".concat(e.item.mpxMetadata.guid),
                android_deeplink_path: e.item.mpxMetadata && "video/".concat(e.item.mpxMetadata.guid),
                desktop_url: null === (i = e.item.url) || void 0 === i ? void 0 : i.primary
            };
            return "".concat(n.baseUrl, "/?~campaign=").concat(n.campaign, "&~channel=").concat(n.channel, "&feature=").concat(n.feature, "&canonicalUrl=").concat(encodeURI(n.canonicalURL), "&$ios_deeplink_path=").concat(n.ios_deeplink_path, "&$android_deeplink_path=").concat(n.android_deeplink_path, "&$desktop_url=").concat(encodeURI(n.desktop_url))
        }
          , r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (a(e) && t && ["oneUp", "twoUp", "threeUp", "fourUp", "sevenUp", "straightUp", "bacon", "canonicalPkg"].includes(t)) {
                var r, o, s = l(e);
                return {
                    url: i ? s : null === (r = e.item.url) || void 0 === r ? void 0 : r.primary,
                    urlCanonical: null === (o = e.item.url) || void 0 === o ? void 0 : o.canonical,
                    text: i ? n.Ay.t("Watch in Telemundo App") : n.Ay.t("Watch in NBC"),
                    episode: e.item.partOfEpisode && "".concat(n.Ay.t("Episode") + e.item.partOfEpisode.episodeNumber, " / "),
                    season: e.item.partOfSeason && "".concat(n.Ay.t("Season") + e.item.partOfSeason.seasonNumber, " / "),
                    datePublished: e.item.datePublished
                }
            }
            return null
        }
    }
    ,
    49983: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => c
        });
        var n = i(45526)
          , a = i(37876);
        i(14232);
        var l = i(15039)
          , r = i.n(l)
          , o = i(97247);
        i(38194);
        var s = i(89099)
          , d = "animated-ghost-button";
        let c = function(e) {
            var t, i = e.additionalClasses, l = e.animated, c = e.disabled, u = void 0 !== c && c, v = e.hasDarkBackground, p = e.iconStyle, h = void 0 === p ? "" : p, _ = e.id, m = e.onClick, y = void 0 === m ? null : m, f = e.size, b = e.target, g = e.title, x = void 0 === g ? "" : g, j = e.type, w = void 0 === j ? null : j, C = e.url, k = e.icid, T = e.isInverted, N = e.buttonType, A = void 0 === N ? "button-hover-animation" : N, E = e.ariaControls, S = e.ariaLabel, L = r()((t = {},
            (0,
            n._)(t, "".concat(d, " ").concat(d, "--").concat(void 0 === f ? "normal" : f), void 0 === l || l),
            (0,
            n._)(t, "".concat(d, "--darkBackground"), void 0 !== v && v),
            (0,
            n._)(t, "".concat(d, "--inverted"), void 0 !== T && T),
            (0,
            n._)(t, "disabled", u),
            t), void 0 === i ? null : i), R = ((0,
            s.useRouter)() || {}).query, I = (void 0 === R ? {} : R).page, M = "string" == typeof x ? x.toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s+/g, "-") : "", O = "recipe" === I ? "button-hover-animation-article-sidebar-".concat(M) : void 0;
            if ("link" === w)
                return (0,
                a.jsx)(o.A, {
                    className: L,
                    href: void 0 === C ? null : C,
                    target: void 0 === b ? "_self" : b,
                    icid: void 0 === k ? null : k,
                    "data-activity-map": O,
                    "data-testid": A,
                    children: x
                });
            if (y) {
                var D = x;
                return h && ("buttonWithIconEnd" === w ? D = (0,
                a.jsxs)(a.Fragment, {
                    children: [x, (0,
                    a.jsx)("span", {
                        className: h
                    })]
                }) : "buttonWithIconStart" === w && (D = (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)("span", {
                        className: h
                    }), x]
                }))),
                (0,
                a.jsx)("button", {
                    className: L,
                    disabled: u,
                    id: void 0 === _ ? null : _,
                    onClick: y,
                    type: "button",
                    "data-activity-map": O,
                    "data-testid": A,
                    "aria-controls": void 0 === E ? null : E,
                    "aria-label": void 0 === S ? null : S,
                    children: D
                })
            }
            return null
        }
    }
    ,
    50819: e => {
        e.exports = {
            articleDuetBody: "styles_articleDuetBody__aQ2dC",
            "live-dot-blink": "styles_live-dot-blink__qQkue",
            "fade-in": "styles_fade-in__wohQT",
            "expand-in": "styles_expand-in__iZlw_",
            "chatblog-expand-in": "styles_chatblog-expand-in__X1E_C"
        }
    }
    ,
    55943: e => {
        e.exports = {
            mainMedia: "styles_mainMedia__1jI25",
            "live-dot-blink": "styles_live-dot-blink__dmNls",
            "fade-in": "styles_fade-in__jkrdw",
            "expand-in": "styles_expand-in__WprSr",
            "chatblog-expand-in": "styles_chatblog-expand-in__cWvh3"
        }
    }
    ,
    56335: (e, t, i) => {
        "use strict";
        i.d(t, {
            w: () => c
        });
        var n = i(20294)
          , a = i(14232)
          , l = i(39324)
          , r = i.n(l)
          , o = i(87992)
          , s = i(94085)
          , d = i(69527);
        function c() {
            if (!r()().publicRuntimeConfig.COMMERCE_AMAZON_CI_ENABLE)
                return null;
            var e, t = a.useContext(o.Pl), i = t.domain, l = t.path, c = null, u = !1, v = function() {
                var t = window.BI
                  , a = (void 0 === t ? {} : t).userInfo
                  , r = (void 0 === a ? {} : a).get;
                if ("function" == typeof r) {
                    var o = r()
                      , c = o.cid
                      , u = o.referrer;
                    e = Date.now();
                    var v = {}
                      , p = (0,
                    d.W5)(void 0 === u ? "direct" : u, 64)
                      , h = "desktop";
                    s.XF ? h = "mobile" : s.v1 && (h = "tablet"),
                    v.asc_campaign = (0,
                    d.W5)(void 0 === c ? "" : c, 64),
                    v.asc_refurl = (0,
                    d.W5)("https://www.".concat(i).concat(l), 5120),
                    Array.from(document.getElementsByTagName("a")).forEach(function(e) {
                        if (e.href)
                            try {
                                var t = new URL(e.href);
                                t.hostname.match(/.*amazon\./) && (Object.entries(v).forEach(function(e) {
                                    var i = (0,
                                    n._)(e, 2)
                                      , a = i[0]
                                      , l = i[1];
                                    t.searchParams.set(a, l)
                                }),
                                t.searchParams.set("asc_source", [p, h].filter(Boolean).join("_")),
                                e.href = t.href)
                            } catch (e) {}
                    })
                }
            }, p = function() {
                e = Date.now(),
                v(),
                u = !1
            };
            return a.useEffect(function() {
                return c = new MutationObserver(function() {
                    Date.now() - e > 3e3 ? v() : u || (u = !0,
                    setTimeout(p, 3e3))
                }
                ),
                v(),
                c.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                }),
                function() {
                    c && "function" == typeof c.disconnect && c.disconnect()
                }
            }, []),
            null
        }
        c.propTypes = {}
    }
    ,
    58735: e => {
        e.exports = {
            packageTitle: "styles_packageTitle__4KDOM",
            rail: "styles_rail__gJI8S",
            fullWidth: "styles_fullWidth__e7egy",
            alternateDisplayFormat: "styles_alternateDisplayFormat__BF5e4",
            titleText: "styles_titleText__gCzi2",
            "live-dot-blink": "styles_live-dot-blink__9N_V1",
            "fade-in": "styles_fade-in__otSbd",
            "expand-in": "styles_expand-in__FtZnc",
            "chatblog-expand-in": "styles_chatblog-expand-in__X4AzJ"
        }
    }
    ,
    61874: () => {}
    ,
    69190: e => {
        e.exports = {
            button: "styles_button__91vz_",
            caret: "styles_caret__I6Cbf",
            buttonCaret: "styles_buttonCaret___lvz8",
            fullWidth: "styles_fullWidth__fRAO2",
            expandDown: "styles_expandDown__2uUoI",
            inlineFormButton: "styles_inlineFormButton__uzamz",
            submit: "styles_submit__1IFdv",
            right: "styles_right___qcfF",
            center: "styles_center__9EOAE",
            "live-dot-blink": "styles_live-dot-blink__UO5b_",
            "fade-in": "styles_fade-in__pBNlr",
            "expand-in": "styles_expand-in__hx0KN",
            "chatblog-expand-in": "styles_chatblog-expand-in__HZOli"
        }
    }
    ,
    70023: (e, t, i) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/article", function() {
            return i(24348)
        }
        ])
    }
    ,
    71131: (e, t, i) => {
        "use strict";
        i.d(t, {
            B: () => r
        });
        var n = i(37876);
        i(14232);
        var a = i(45105)
          , l = i.n(a);
        function r() {
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("style", {
                    children: "\n          #oli-chat { \n            --toast-z-index: 989;\n          }\n\n          body:has(.jw-flag-floating) #oli-chat,\n          body:has(.sticky-pip--stuck) #oli-chat {\n            --toast-bottom: 240px; \n          }\n\n          @media (min-width: 758px) {\n            body:has(.jw-flag-floating) #oli-chat,\n            body:has(.sticky-pip--stuck) #oli-chat {\n              --toast-bottom: 285px; \n            }\n          }\n        "
                }), (0,
                n.jsx)("div", {
                    id: "oli-chat",
                    "data-destination": "false"
                }), (0,
                n.jsx)(l(), {
                    id: "oli-script",
                    src: "https://envs-oli-chat.envs.nbcd.co/oli.min.js",
                    strategy: "afterInteractive"
                })]
            })
        }
    }
    ,
    77717: e => {
        e.exports = {
            container: "styles_container__6vrKX",
            topBar: "styles_topBar__hfrxM",
            scrollContainer: "styles_scrollContainer__cOyVQ",
            leftScroll: "styles_leftScroll__ejNM_",
            rightScroll: "styles_rightScroll__tVDTd",
            hide: "styles_hide__OHVtc",
            link: "styles_link__zXBH2",
            current: "styles_current__V_lG3",
            topic: "styles_topic__yp60r",
            edrText: "styles_edrText__aBGHg",
            linkText: "styles_linkText__i1t_B",
            "live-dot-blink": "styles_live-dot-blink__JBRx0",
            "fade-in": "styles_fade-in__Rxbfr",
            "expand-in": "styles_expand-in__SsfBv",
            "chatblog-expand-in": "styles_chatblog-expand-in__m6OtW"
        }
    }
    ,
    78168: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => o
        });
        var n = i(37876);
        i(14232);
        var a = i(95062)
          , l = i.n(a);
        i(97717);
        var r = function(e) {
            var t, i, a, l = e.alt, r = e.logoUrl, o = void 0 === r ? null : r, s = e.title, d = e.className;
            return o ? (0,
            n.jsx)("img", {
                className: "titleLogo",
                src: o,
                alt: void 0 === l ? "" : l,
                "data-testid": "title-logo"
            }) : (i = (t = {
                title: void 0 === s ? "" : s,
                className: void 0 === d ? "" : d
            }).title,
            a = t.className,
            Array.isArray(i) ? i.map(function(e) {
                return (0,
                n.jsx)("div", {
                    className: a,
                    children: e
                }, e)
            }) : i)
        };
        r.propTypes = {
            alt: l().string,
            logoUrl: l().string,
            className: l().string,
            title: l().oneOfType([l().string, l().arrayOf(l().string)])
        };
        let o = r
    }
    ,
    78187: e => {
        e.exports = {
            imageCredit: "styles_imageCredit__VVG1E",
            "live-dot-blink": "styles_live-dot-blink__VPxsU",
            "fade-in": "styles_fade-in__4gq2N",
            "expand-in": "styles_expand-in__wTNoH",
            "chatblog-expand-in": "styles_chatblog-expand-in__REu3s"
        }
    }
    ,
    80007: () => {}
    ,
    82737: (e, t, i) => {
        "use strict";
        i.d(t, {
            $: () => j
        });
        var n = i(67684)
          , a = i(65699)
          , l = i(37876)
          , r = i(14232)
          , o = i(95062)
          , s = i.n(o)
          , d = i(49983)
          , c = i(45526)
          , u = i(97247)
          , v = i(15039)
          , p = i.n(v)
          , h = i(34846)
          , _ = i(69190)
          , m = i.n(_)
          , y = function(e) {
            var t = e.title
              , i = e.type
              , n = void 0 === i ? null : i
              , a = (0,
            h.Bd)().t;
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(void 0 === t ? null : t) || a("See More"), "no-arrow" !== n && "submit" !== n ? (0,
                l.jsx)("span", {
                    className: p()(m().caret, "icon", "expand-down" === n ? "icon-chevron-light-down" : "icon-chevron-right"),
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-testid": "caret"
                }) : null]
            })
        };
        y.propTypes = {
            title: s().string,
            type: s().string
        };
        var f = function(e) {
            var t, i = e.title, a = void 0 === i ? null : i, o = e.url, s = void 0 === o ? null : o, d = e.target, v = e.alignment, h = void 0 === v ? null : v, _ = e.isFullWidth, f = e.tiltClasses, b = e.disabled, g = void 0 !== b && b, x = e.id, j = void 0 === x ? null : x, w = e.onClick, C = void 0 === w ? null : w, k = e.icid, T = e.displayType, N = void 0 === T ? null : T, A = p()(m().button, m()[h], m()[N], void 0 === f ? null : f, (t = {},
            (0,
            c._)(t, m().fullWidth, void 0 !== _ && _),
            (0,
            c._)(t, m().inlineFormButton, "inline-form-button" === N),
            (0,
            c._)(t, m().expandDown, "expand-down" === N),
            t)), E = h ? function(e) {
                return (0,
                l.jsx)("div", (0,
                n._)({
                    className: m()[h],
                    "data-testid": "div-wrap"
                }, e))
            }
            : r.Fragment;
            return C ? (0,
            l.jsx)(E, {
                children: (0,
                l.jsx)("button", {
                    className: A,
                    disabled: g,
                    id: j,
                    onClick: C,
                    type: "button",
                    "data-testid": "button-tilt",
                    children: (0,
                    l.jsx)(y, {
                        title: a,
                        type: N
                    })
                })
            }) : "submit" === N ? (0,
            l.jsx)(E, {
                children: (0,
                l.jsx)("button", {
                    className: A,
                    disabled: g,
                    id: j,
                    type: "submit",
                    "data-testid": "form-tilt",
                    children: (0,
                    l.jsx)(y, {
                        title: a,
                        type: N
                    })
                })
            }) : s ? (0,
            l.jsx)(E, {
                children: (0,
                l.jsx)(u.A, {
                    className: A,
                    role: "button",
                    href: s,
                    target: void 0 === d ? "_self" : d,
                    icid: void 0 === k ? null : k,
                    "data-testid": "link-tilt",
                    children: (0,
                    l.jsx)(y, {
                        title: a,
                        type: N
                    })
                })
            }) : null
        };
        f.propTypes = {
            title: s().string,
            url: s().string,
            target: s().string,
            alignment: s().oneOf(["right", "center"]),
            isFullWidth: s().bool,
            tiltClasses: s().string,
            disabled: s().bool,
            id: s().string,
            onClick: s().func,
            icid: s().string,
            displayType: s().oneOf(["expand-down", "inline-form-button", "no-arrow", "submit"])
        };
        var b = i(87992)
          , g = i(89903)
          , x = i(96491)
          , j = function(e) {
            var t = e.buttonType
              , i = e.ariaControls
              , o = e.ariaLabel
              , s = (0,
            a._)(e, ["buttonType", "ariaControls", "ariaLabel"])
              , c = (0,
            r.useContext)(b.O1)
              , u = (0,
            g.B0)(x.BUTTON_TYPE, c)
              , v = (void 0 === t ? null : t) || u
              , p = d.A;
            return "button-tilt" === v && (p = f),
            (0,
            l.jsx)(p, (0,
            n._)({
                buttonType: v,
                ariaControls: void 0 === i ? "" : i,
                ariaLabel: void 0 === o ? "" : o
            }, s))
        };
        j.propTypes = {
            buttonType: s().string,
            ariaControls: s().string,
            ariaLabel: s().string
        }
    }
    ,
    87381: e => {
        e.exports = {
            container: "styles_container__RKqdw",
            sportsContainer: "styles_sportsContainer__xXUP9",
            typeWrapper: "styles_typeWrapper__M9i2E",
            "live-dot-blink": "styles_live-dot-blink__y25Vi",
            "fade-in": "styles_fade-in__H0w9C",
            "expand-in": "styles_expand-in__btv3K",
            "chatblog-expand-in": "styles_chatblog-expand-in__o4aSW"
        }
    }
    ,
    90327: (e, t, i) => {
        "use strict";
        i.d(t, {
            d: () => _
        });
        var n = i(45526)
          , a = i(37876);
        i(14232);
        var l = i(15039)
          , r = i.n(l)
          , o = i(34846)
          , s = i(97247)
          , d = i(77328)
          , c = i.n(d)
          , u = i(90353)
          , v = i(82780)
          , p = i.n(v);
        i(35272);
        var h = "unibrow"
          , _ = function(e) {
            var t, i, l = e.children, d = e.className, v = e.size, _ = e.target, m = e.unibrow, y = e.rel, f = e.deepLink, b = e.enableLogos, g = void 0 !== b && b, x = e.icid, j = e.hasDefaultTextStyle, w = e.testId;
            if (!m)
                return null;
            var C = null
              , k = null
              , T = null
              , N = null
              , A = p()(m, "logo.logoAssets[0].mediaAsset.url.primary", !1)
              , E = p()(m, "logo.url.primary", !1)
              , S = p()(m, "taxonomyPath", !1)
              , L = p()(m, "logo.taxonomyPath", !1);
            f && (f.text && (C = (0,
            a.jsxs)("span", {
                className: "unibrow__external-link-container",
                children: [f.text, (0,
                a.jsx)("span", {
                    className: "unibrow__external-link-icon",
                    children: (0,
                    a.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "unibrow__external-link-svg",
                        children: (0,
                        a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.4 3H2.4H0V5.4V18.6V19.8V21H24L24 19.8L24 18.6L24 12.6H21.6V18.6H2.4V5.4H14.4V3ZM21.4368 7.63675L24 10.2V3H16.8L19.7397 5.93969L12.5397 13.1397L14.2368 14.8368L21.4368 7.63675Z",
                            className: "unibrow__external-link-path"
                        })
                    })
                })]
            })),
            k = f.url);
            var R = (0,
            o.Bd)().t
              , I = C || m.override || ((0,
            u.V)(m.text) ? R(m.text) : m.text) || ""
              , M = (0,
            a.jsx)("span", {
                "data-testid": "unibrow-text",
                children: I
            });
            return (k || (null == m ? void 0 : null === (t = m.url) || void 0 === t ? void 0 : t.primary)) && (N = k || m.url.override || m.url.primary,
            M = (0,
            a.jsx)(s.A, {
                href: N,
                target: _,
                rel: y,
                icid: x,
                children: M
            })),
            A && g && (T = (0,
            a.jsx)("img", {
                className: r()("unibrow-logo__image", {
                    "unibrow-logo__image-border": g
                }),
                src: A,
                alt: "unibrow"
            })),
            A && E && g && (T = (0,
            a.jsx)(s.A, {
                href: E,
                target: _,
                icid: x,
                children: T
            })),
            S && L && S === L && (M = null),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(c(), {
                    children: (0,
                    a.jsx)("meta", {
                        name: "branch:deeplink:unibrow",
                        content: I
                    })
                }), (0,
                a.jsxs)(void 0 === v ? "h2" : v, {
                    "data-testid": w || "unibrow-container",
                    className: r()(h, "articleTitleSection", d, (i = {
                        "unibrow-logo": A
                    },
                    (0,
                    n._)(i, "".concat(h, "--breaking-news"), (0,
                    u.V)(m.text)),
                    (0,
                    n._)(i, "unibrow--default", void 0 !== j && j),
                    i)),
                    children: [T, M, l]
                })]
            })
        }
    }
    ,
    90353: (e, t, i) => {
        "use strict";
        i.d(t, {
            V: () => a,
            m: () => n
        });
        var n = {
            "BREAKING NEWS": "BREAKING NEWS",
            EXCLUSIVE: "EXCLUSIVE",
            DEVELOPING: "DEVELOPING"
        }
          , a = function(e) {
            return n.hasOwnProperty(e)
        }
    }
    ,
    91026: e => {
        e.exports = {
            heading: "styles_heading__zAQJC",
            eyebrow: "styles_eyebrow__ArsYt",
            headline: "styles_headline__P_vNs",
            dek: "styles_dek__L7_Gb",
            "live-dot-blink": "styles_live-dot-blink__K_GNE",
            "fade-in": "styles_fade-in__dbFoX",
            "expand-in": "styles_expand-in__rnckO",
            "chatblog-expand-in": "styles_chatblog-expand-in__nTnlK"
        }
    }
    ,
    93149: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => b
        });
        var n = i(45526)
          , a = i(67684)
          , l = i(37876);
        i(14232);
        var r = i(11806)
          , o = i(15039)
          , s = i.n(o)
          , d = i(21737)
          , c = i(61702)
          , u = i(89903)
          , v = i(96491)
          , p = i(97247)
          , h = i(78168)
          , _ = i(58735)
          , m = i.n(_);
        i(33884);
        var y = ["blue", "green", "yellow"]
          , f = function(e) {
            var t, i, a = e.metadata, o = void 0 === a ? {} : a, c = e.alternateDisplayFormat, _ = void 0 !== c && c, f = e.titleBgColor, b = e.size, g = e.className, x = e.HTag, j = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, w = (0,
            d.Cn)().vertical;
            if (!(o && (o.title || o.logoUrl)))
                return null;
            var C = o.title
              , k = o.logoUrl
              , T = o.seeAllText
              , N = o.seeAllUrl
              , A = o.description
              , E = o.icid
              , S = o.anchorId
              , L = j.layoutType
              , R = j.pkgTitleColorIndex
              , I = (0,
            u.B0)(v.SEE_MORE_BUTTON, w)
              , M = !_
              , O = !1;
            f ? O = f : "number" == typeof R && (O = y[R]);
            var D = s()(m().titleText, "package-title__title-text", (t = {},
            (0,
            n._)(t, "package-title__title-text--".concat(O), O),
            (0,
            n._)(t, "package-title__title-text--".concat(b), b),
            t))
              , B = s()("package-title__container", "package-title", m().packageTitle, (i = {},
            (0,
            n._)(i, m().rail, "leftRail" === L || "rightRail" === L),
            (0,
            n._)(i, m().fullWidth, "fullWidth" === L),
            (0,
            n._)(i, "package-title--with-description", A),
            (0,
            n._)(i, m().alternateDisplayFormat, _),
            (0,
            n._)(i, "package-title--alternate-display-format", _),
            (0,
            n._)(i, g, g),
            i))
              , P = N && !I ? (0,
            l.jsx)(p.A, {
                className: s()("package-title__see-all-link", {
                    "package-title__see-all-link--alt-color": I && M
                }),
                to: N,
                icid: E,
                children: T || r.Ay.t("See More")
            }) : null;
            return (0,
            l.jsxs)("div", {
                className: B,
                children: [(0,
                l.jsx)(void 0 === x ? "h2" : x, {
                    className: D,
                    id: S,
                    children: (0,
                    l.jsx)(h.A, {
                        logoUrl: k,
                        title: C
                    })
                }), P, A && (0,
                l.jsx)("p", {
                    className: "package-title__description",
                    children: A
                })]
            })
        };
        f.contextTypes = (0,
        a._)({}, c.EM, c.YM);
        let b = f
    }
    ,
    96527: (e, t, i) => {
        "use strict";
        function n(e, t) {
            var i, n, a, l, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], o = arguments.length > 3 ? arguments[3] : void 0, s = null !== (l = null == e ? void 0 : null === (i = e["event-day-curated-list-".concat(t)]) || void 0 === i ? void 0 : i.taxonomy) && void 0 !== l ? l : [], d = r.some(function(e) {
                return s.some(function(t) {
                    if ("string" != typeof t)
                        return !1;
                    var i = t.trim();
                    return i.endsWith("*") ? e.startsWith(i.slice(0, -1)) : e === i
                })
            });
            return (null == o ? void 0 : null === (a = o.content) || void 0 === a ? void 0 : null === (n = a.items) || void 0 === n ? void 0 : n.length) > 0 && d
        }
        i.d(t, {
            P: () => n
        })
    }
    ,
    97717: () => {}
    ,
    99110: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => I
        });
        var n = i(45526)
          , a = i(67684)
          , l = i(62701)
          , r = i(65699)
          , o = i(37876)
          , s = i(14232)
          , d = i(15039)
          , c = i.n(d)
          , u = i(95062)
          , v = i.n(u)
          , p = i(61702)
          , h = i(48011)
          , _ = i(10143)
          , m = function(e) {
            var t = e.children
              , i = e.placeholder
              , n = void 0 === i || i
              , a = e.placeholderColor
              , l = e.lazyLoad;
            if (!(void 0 === l || l))
                return t;
            var r = t.props
              , d = ""
              , c = s.Children.map(t, function(e) {
                var t = {};
                return e.props && "boolean" == typeof e.props.lazyloaded && (t.lazyloaded = !0),
                n && (d = e.props.className,
                t.className = null),
                s.cloneElement(e, t)
            });
            return n && (void 0 === r ? {} : r).responsiveFlavors ? (0,
            o.jsxs)("div", {
                className: "relative ".concat(d),
                "data-testid": "native-lazy-load",
                children: [(0,
                o.jsx)("div", {
                    className: "absolute absolute-fill z-2 overflow-hidden",
                    children: c
                }), (0,
                o.jsx)("div", {
                    className: "relative z-1",
                    children: (0,
                    o.jsx)(_.O, {
                        color: void 0 === a ? "knockout-secondary" : a,
                        responsiveFlavors: t.props.responsiveFlavors
                    })
                })]
            }) : c
        };
        m.propTypes = {
            children: v().node.isRequired,
            placeholder: v().bool,
            placeholderColor: v().string,
            lazyLoad: v().bool
        };
        let y = (0,
        h.Ng)(function(e) {
            return {
                lazyLoad: !e.shared.disableLazyLoad
            }
        })(m);
        var f = i(68225)
          , b = i(69527)
          , g = i(60916)
          , x = i(78187)
          , j = i.n(x)
          , w = function(e, t) {
            var i = t ? "db" : "dn";
            return ({
                s: "".concat(i),
                m: "".concat(i, "-m"),
                l: "".concat(i, "-l"),
                xl: "".concat(i, "-xl")
            })[e]
        }
          , C = function(e, t) {
            var i = (0,
            f.HY)(e)
              , n = i.width
              , a = i.height
              , l = !!e && n === a
              , r = !!e && l && n < (t ? 900 : 480)
              , o = !!e && n < (t ? 300 : 150);
            return !r && !o
        }
          , k = function(e, t) {
            var i = {}
              , n = Object.keys(t)
              , a = n.map(function(e) {
                return w(e, !1)
            });
            n.forEach(function(n, l) {
                var r = (0,
                f.HY)(t[n])
                  , o = r.width
                  , s = r.height
                  , d = (0,
                g.Ni)(e, o === s)
                  , c = (0,
                g.ue)(d);
                i[c] || (i[c] = {
                    displays: a.slice(0),
                    ratio: "1x".concat(o / s)
                });
                var u = w(n, !0);
                i[c].displays[l] = u
            });
            var l = Object.keys(i);
            return 1 === l.length ? l[0] : l.map(function(e) {
                var t = i[e].displays
                  , n = i[e].ratio;
                return (0,
                o.jsx)("span", {
                    "data-testid": "image-credit-content-".concat(n),
                    className: c()("test__imageCredit__content--".concat(n), t),
                    children: e
                }, "credit-".concat(n))
            })
        };
        function T(e) {
            var t = e.responsiveFlavors
              , i = e.type
              , n = void 0 === i ? "" : i
              , a = e.retina
              , l = void 0 !== a && a
              , r = e.teaseImage
              , s = void 0 === r ? {} : r
              , d = e.computedValues
              , u = void 0 === d ? null : d;
            if ("video" === n || "relatedRecipe" === n)
                return null;
            var v = null;
            if (u ? v = k(u, t) : s && (v = s && (0,
            g.ue)(s)),
            v) {
                var p = C(t.s, l)
                  , h = f.BZ.map(function(e) {
                    var i = t[e]
                      , n = i ? C(i, l) : p;
                    return p !== n && (p = n),
                    w(e, n)
                });
                return (0,
                o.jsx)("div", {
                    "data-testid": "image-credit",
                    className: c()("test__imageCredit", "image-credit__text", j().imageCredit, h),
                    children: (0,
                    b.LM)(v)
                })
            }
            return null
        }
        T.propTypes = {
            type: v().string,
            retina: v().bool,
            teaseImage: p.Sl,
            computedValues: p.EW,
            responsiveFlavors: p.qI.isRequired
        };
        var N = i(31310)
          , A = i(21492)
          , E = i(87381)
          , S = i.n(E);
        function L(e) {
            var t = e.children
              , i = void 0 === t ? {} : t
              , n = e.lazyloaded
              , s = (0,
            r._)(e, ["children", "lazyloaded"]);
            return void 0 === n || n ? (0,
            o.jsx)(y, (0,
            l._)((0,
            a._)({}, s), {
                children: i
            })) : i
        }
        L.propTypes = {
            children: v().oneOfType([v().element, v().object]),
            lazyloaded: v().bool
        };
        var R = function(e) {
            var t, i, l, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = e.responsiveFlavors, u = void 0 === d ? {} : d, v = e.className, p = e.lazyload, h = (e.previewRedirect,
            e.type), m = e.height, y = e.width, f = e.hideCredit, b = e.isSportsVideo, g = (0,
            r._)(e, ["responsiveFlavors", "className", "lazyload", "previewRedirect", "type", "height", "width", "hideCredit", "isSportsVideo"]);
            if (!u)
                return null;
            var x = (0,
            a._)({
                placeholder: !1
            }, g)
              , j = x.computedValues
              , w = x.placeholder
              , C = x.placeholderColor
              , k = (j || {}).teaseImage;
            if (!k && w)
                return (0,
                o.jsx)(_.O, {
                    responsiveFlavors: u,
                    color: C
                });
            m && y ? (t = m,
            i = y) : (null == k ? void 0 : k.height) && (null == k ? void 0 : k.width) && (t = k.height,
            i = k.width);
            var E = s.topOfPagePackages
              , R = (void 0 === p || p) && !E;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(L, {
                    placeholder: w,
                    placeholderColor: C,
                    lazyloaded: R,
                    children: (0,
                    o.jsx)(N.V, (0,
                    a._)({
                        className: c()("teasePicture", (l = {},
                        (0,
                        n._)(l, v, v),
                        (0,
                        n._)(l, S().container, !b),
                        (0,
                        n._)(l, S().sportsContainer, b),
                        l)),
                        lazyloaded: R,
                        responsiveFlavors: u,
                        originalHeight: t,
                        originalWidth: i
                    }, x))
                }), (0,
                o.jsx)("div", {
                    className: S().typeWrapper,
                    children: (0,
                    o.jsx)(A.A, {
                        type: b
                    })
                }), !(void 0 !== f && f) && (0,
                o.jsx)(T, (0,
                a._)({
                    type: h,
                    responsiveFlavors: u
                }, x))]
            })
        };
        R.contextTypes = {
            topOfPagePackages: v().bool
        },
        R.propTypes = {
            responsiveFlavors: p.qI,
            className: v().oneOfType([v().string, v().object]),
            type: v().string,
            lazyload: v().bool,
            placeholder: v().bool,
            previewRedirect: v().bool,
            height: v().number,
            width: v().number,
            hideCredit: v().bool,
            isSportsVideo: v().string
        };
        let I = R
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [8513, 600, 1310, 7929, 4869, 3006, 2724, 1687, 4085, 3739, 3480, 6723, 8103, 8227, 6072, 1652, 9587, 7829, 5798, 8451, 8552, 1807, 7063, 6949, 4117, 1689, 7561, 2816, 9419, 2624, 6140, 7388, 7146, 636, 8974, 8792], () => t(70023)),
    _N_E = e.O()
}
]);
