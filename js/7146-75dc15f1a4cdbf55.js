(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7146], {
    5406: (e, t, i) => {
        "use strict";
        i.d(t, {
            W: () => k
        });
        var n = i(67684)
          , a = i(62701)
          , r = i(20294)
          , l = i(37876)
          , s = i(14232)
          , o = i(40625)
          , d = i(48011)
          , c = i(51845)
          , u = i(56866)
          , p = i(87992)
          , h = i(20309)
          , _ = i(32240)
          , v = i(96491)
          , m = i(89903)
          , g = i(8964)
          , b = i(26677)
          , f = i(99298);
        (0,
        c.stub)("register", "mbt_bacon_click", {
            allowDuplicate: !0
        }),
        (0,
        c.stub)("register", "mbt_bacon_scroll");
        var y = {
            configurations: [{
                vertical: h.verticalSlugMap.today,
                condition: function(e) {
                    var t = e.article
                      , i = e.featureFlags;
                    return (0,
                    g.Gd)(t, i)
                },
                trackingId: function(e) {
                    return e.article.ecommerceEnabled ? "shoparticlebestsellersbacon" : "todayarticlebestsellersbacon"
                },
                bacon: {
                    subType: "oneOneProduct",
                    metadata: {
                        title: "Shop TODAY Reader Favorites",
                        disclaimerKey: "DEFAULT"
                    }
                },
                query: {
                    query: "type:Product AND taxonomy:today/label/shop-best-sellers",
                    size: 20,
                    sort: "datePublished:desc"
                }
            }, {
                vertical: h.verticalSlugMap.select,
                condition: function(e) {
                    var t = e.article;
                    return (0,
                    g.x)(t)
                },
                trackingId: "selectarticlebestsellersbacon",
                bacon: {
                    subType: "oneOneProduct",
                    metadata: {
                        title: "Select Bestsellers",
                        disclaimerKey: "DEFAULT"
                    }
                },
                query: {
                    query: "type:Product AND taxonomy:nbcnews/section/shopping/most-purchased",
                    size: 20,
                    sort: "datePublished:desc"
                }
            }],
            pageRegion: "article-bottom"
        }
          , x = function(e) {
            var t = e.product
              , i = e.pageRoute
              , r = e.vertical
              , l = e.trackingId;
            return {
                item: (0,
                a._)((0,
                n._)({}, t), {
                    offers: t.offers.map(function(e) {
                        return (0,
                        a._)((0,
                        n._)({}, e), {
                            externalUrl: (0,
                            _.S2)({
                                vertical: r,
                                baseUrl: e.externalUrl,
                                pageRoute: i,
                                trackingId: l
                            })
                        })
                    })
                }),
                computedValues: {
                    headline: t.name,
                    teaseImage: t.teaseImage,
                    url: null
                }
            }
        };
        function k(e) {
            var t, i, h, _ = e.configurations, k = void 0 === _ ? y.configurations : _, j = e.pageRegion, C = void 0 === j ? y.pageRegion : j, L = e.curatedList, w = void 0 === L ? null : L;
            (0,
            f.Z)();
            var I = s.useContext(p.kj)
              , A = s.useContext(p.O1)
              , N = s.useContext(p.Pl)
              , T = (0,
            r._)(s.useState(!1), 2)
              , S = T[0]
              , E = T[1]
              , M = (0,
            r._)(s.useState(!1), 2)
              , R = M[0]
              , P = M[1]
              , B = -1 !== N.path.indexOf("embedded-pkg")
              , O = (0,
            p.Jp)();
            s.useEffect(function() {
                P(!0)
            }, []);
            var F = !w && !!I && !!A && Array.isArray(k) && k.find(function(e) {
                return A === e.vertical && "function" == typeof e.condition && e.condition({
                    article: I,
                    featureFlags: O
                })
            })
              , D = (0,
            r._)((0,
            o.Wx)({
                initialInView: !1,
                triggerOnce: !0,
                rootMargin: "250px 0px"
            }) || [], 2)
              , U = D[0]
              , z = D[1]
              , H = (0,
            d.wA)()
              , W = (0,
            d.d4)(function(e) {
                var t;
                return (null == e ? void 0 : null === (t = e.product) || void 0 === t ? void 0 : t.items) || []
            });
            if (s.useEffect(function() {
                if (F) {
                    var e = F.query;
                    (z || B) && H((0,
                    u.b8)(e))
                }
            }, [z, B]),
            !R || !F && !w)
                return null;
            var q = F || {
                bacon: {
                    subType: "oneOneProduct",
                    metadata: {
                        title: null == w ? void 0 : null === (t = w.headline) || void 0 === t ? void 0 : t.primary,
                        disclaimerKey: "DEFAULT"
                    }
                },
                trackingId: null === (i = w.ecommerceMetadata) || void 0 === i ? void 0 : i.trackingId
            }
              , V = q.bacon
              , J = q.trackingId
              , Y = (null == w ? void 0 : null === (h = w.content) || void 0 === h ? void 0 : h.items) || W
              , Z = (0,
            m.B0)(v.ADDITIONAL_SELLERS, A)
              , G = "function" == typeof J ? J({
                article: I
            }) : J
              , Q = !!(F || w && !(0,
            g.x)(I, O));
            return (0,
            l.jsx)("div", {
                "data-testid": "recirc-bacon",
                ref: U,
                children: Y && Y.length > 0 && (0,
                l.jsx)("div", {
                    className: "layout-grid-container mv8 dn-print",
                    "data-testid": "recirc-bacon-wrapper",
                    children: (0,
                    l.jsx)("div", {
                        className: "layout-grid-item",
                        children: (0,
                        l.jsx)(b.AL, {
                            content: (0,
                            a._)((0,
                            n._)({}, V), {
                                metadata: (0,
                                a._)((0,
                                n._)({}, V.metadata), {
                                    trackingId: G,
                                    title: (0,
                                    g.ko)(O, w, V.metadata.title)
                                }),
                                items: Y.map(function(e) {
                                    var t = window.location.pathname.split("/").filter(function(e) {
                                        return e
                                    });
                                    return t.pop(),
                                    x({
                                        product: e,
                                        pageRoute: t.join("/"),
                                        vertical: A,
                                        trackingId: G
                                    })
                                })
                            }),
                            onScroll: function(e, t) {
                                var i = t.x
                                  , n = t.width;
                                !S && i / n > .5 && ((0,
                                c.stub)("track", "mbt_bacon_scroll", {
                                    action: "scroll"
                                }),
                                E(!0))
                            },
                            pageRegion: C,
                            vertical: A,
                            shouldShowAdditionalSeller: Z,
                            trackLink: function(e) {
                                var t, i;
                                (0,
                                c.stub)("track", "mbt_bacon_click", {
                                    action: "itemClick",
                                    id: e.id,
                                    name: e.name,
                                    seller: null === (i = e.offers[0]) || void 0 === i ? void 0 : null === (t = i.seller) || void 0 === t ? void 0 : t.name
                                })
                            },
                            useAltTitle: "today" === A,
                            titleSize: "small",
                            titleBgColor: "green",
                            showStripeBackground: Q
                        })
                    })
                })
            })
        }
    }
    ,
    6957: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => d
        });
        var n = i(37876);
        i(14232);
        var a = i(95062)
          , r = i.n(a)
          , l = i(30816)
          , s = i(7979);
        function o(e) {
            var t = e.callback
              , i = e.children
              , a = e.threshold;
            return (0,
            n.jsx)(s.A, {
                callback: t,
                rootMargin: "100000% 0px -100% 0px",
                threshold: void 0 === a ? null : a,
                children: void 0 === i ? null : i
            })
        }
        o.propTypes = {
            callback: r().func.isRequired,
            children: l.A,
            threshold: r().oneOfType([r().number, r().arrayOf(r().number)])
        };
        let d = o
    }
    ,
    7940: (e, t, i) => {
        "use strict";
        i.d(t, {
            v: () => j
        });
        var n = i(45526)
          , a = i(20294)
          , r = i(37876)
          , l = i(14232)
          , s = i(95062)
          , o = i.n(s)
          , d = i(15039)
          , c = i.n(d)
          , u = i(61623)
          , p = i(81481)
          , h = i(87992)
          , _ = i(61702)
          , v = i(20309)
          , m = i(86999)
          , g = i(8389)
          , b = i(62297)
          , f = i(94396)
          , y = v.verticalSlugMap.news
          , x = v.verticalSlugMap.today
          , k = v.verticalSlugMap.select
          , j = function(e) {
            var t, i, s, o, d, _, v, j, C, L, w, I, A, N, T, S = e.block, E = void 0 === S ? "" : S, M = e.section, R = e.sectionIndex, P = e.articleContainsLargeProduct, B = void 0 !== P && P, O = e.shouldRenderRightRailTaboola, F = e.getRightRailAdConfig, D = e.currentPath, U = e.boxflexAdRenderCheck, z = e.boxflexRendered, H = void 0 !== z && z, W = e.isScrollingUp, q = e.showTaboola, V = e.tableOfContents, J = (0,
            l.useContext)(h.kj), Y = (0,
            l.useContext)(h.O1), Z = (0,
            a._)((0,
            l.useState)(!1), 2), G = Z[0], Q = Z[1], K = (0,
            a._)((0,
            l.useState)(!1), 2), X = K[0], $ = K[1];
            (0,
            l.useEffect)(function() {
                var e = function() {
                    Q(p.A.isSorM())
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    window.removeEventListener("resize", e)
                }
            }, []),
            (0,
            l.useEffect)(function() {
                var e = M.ad
                  , t = document.querySelectorAll(".article-body__section")[R + 1]
                  , i = t && t.querySelector(".article-body").offsetHeight >= 600;
                $(Y === k && (void 0 === e ? {} : e).display && i)
            }, [Y, M, R]);
            var ee = null !== (j = null == J ? void 0 : null === (t = J.taxonomy) || void 0 === t ? void 0 : t.additionalTerms) && void 0 !== j ? j : []
              , et = null !== (C = null == J ? void 0 : null === (s = J.taxonomy) || void 0 === s ? void 0 : null === (i = s.primaryLabel) || void 0 === i ? void 0 : i.name) && void 0 !== C ? C : ""
              , ei = "shop" === (null !== (L = null == J ? void 0 : null === (d = J.taxonomy) || void 0 === d ? void 0 : null === (o = d.primarySection) || void 0 === o ? void 0 : o.name) && void 0 !== L ? L : "").toLowerCase()
              , en = (0,
            l.useMemo)(function() {
                var e = ee.find(function(e) {
                    var t;
                    return (null == e ? void 0 : null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase()) === "on the show"
                })
                  , t = "on the show" === et.toLowerCase();
                return e || t
            }, [ee, et])
              , ea = (0,
            l.useMemo)(function() {
                return en && ei
            }, [en, ei]);
            if (!J || !Y)
                return null;
            var er = M.ad
              , el = M.isFullWidth
              , es = M.hideRightRail
              , eo = J.ecommerceEnabled
              , ed = J.nativeAd
              , ec = J.url;
            if (el || es)
                return null;
            var eu = 0 === R
              , ep = 2 === R
              , eh = (null == V ? void 0 : null === (_ = V.links) || void 0 === _ ? void 0 : _.length) < 5
              , e_ = (null == V ? void 0 : null === (v = V.links) || void 0 === v ? void 0 : v.length) >= 5
              , ev = null;
            ev = B ? eh || e_ && ep : eh || e_;
            var em = (null == V ? void 0 : V.isEnabled) && !G && ev
              , eg = (0,
            u.Wp)(J, Y)
              , eb = (B ? ep : eu) && eg === x
              , ef = "function" == typeof F ? F({
                section: M,
                nativeAd: ed,
                sectionIndex: R,
                isFirstSection: eu,
                isThirdSection: ep
            }) : void 0 === er ? {} : er
              , ey = ef.display && (0,
            u.uV)(J) && !eo
              , ex = "function" == typeof O ? O({
                section: M,
                nativeAd: ed,
                sectionIndex: R,
                isFirstSection: eu,
                isThirdSection: ep
            }) : !(0,
            u.Bg)(J) && M.taboola && !p.A.isS();
            return ex || M.newsletter || ey || eb || X || em ? (0,
            r.jsxs)("div", {
                "data-testid": "right-rail-container",
                className: c()("".concat(E, "__right-rail"), "layout-grid-item", "grid-col-4_5-l", "grid-col-3_5-xl", "grid-col-push-half-xl", (w = {},
                (0,
                n._)(w, "".concat(E, "__right-rail-ecom di-l dn"), eb),
                (0,
                n._)(w, "HFSBumped", void 0 !== W && W),
                w)),
                children: [ex && (0,
                r.jsx)(f.F, {
                    isRail: !0,
                    article: J,
                    showTaboola: void 0 !== q && q
                }), (0,
                r.jsxs)("div", {
                    className: c()((0,
                    n._)({}, "".concat(E, "__right-rail--sticky"), !H)),
                    children: [em && (0,
                    r.jsx)(b.M, {
                        isCollapsible: !1,
                        title: V.title,
                        links: V.links,
                        variant: "sidebar"
                    }), eb && ea && (0,
                    r.jsx)(g.A, {
                        isShopTheShow: !0,
                        isTrending: !0,
                        url: ec.primary,
                        additionalClasses: c()("".concat(E, "__right-rail--recommended"), (I = {},
                        (0,
                        n._)(I, "".concat(E, "__non-sticky"), H),
                        (0,
                        n._)(I, "pb1", H),
                        I)),
                        isRightRail: !0,
                        pageRegion: "article-sidebar"
                    }), X && (0,
                    r.jsx)(g.A, {
                        isRightRail: !0,
                        currentPath: void 0 === D ? "" : D,
                        isSelect: !0,
                        url: ec.primary,
                        additionalClasses: c()("".concat(E, "__right-rail--recommended"), (A = {},
                        (0,
                        n._)(A, "".concat(E, "__non-sticky"), H),
                        (0,
                        n._)(A, "pb1", H),
                        A)),
                        dataTestId: "right-rail-select",
                        pageRegion: "article-sidebar"
                    }), eg === y && (0,
                    r.jsx)(g.A, {
                        isNBCNewsCommerce: !0,
                        url: ec.primary,
                        additionalClasses: c()("".concat(E, "__right-rail--recommended"), (N = {},
                        (0,
                        n._)(N, "".concat(E, "__non-sticky"), H),
                        (0,
                        n._)(N, "pb1", H),
                        N)),
                        isRightRail: !0,
                        pageRegion: "article-sidebar"
                    }), eb && !ea && (0,
                    r.jsx)(g.A, {
                        isTrending: !0,
                        url: ec.primary,
                        additionalClasses: c()("".concat(E, "__right-rail--recommended"), (T = {},
                        (0,
                        n._)(T, "".concat(E, "__non-sticky"), H),
                        (0,
                        n._)(T, "pb1", H),
                        T)),
                        isRightRail: !0,
                        pageRegion: "article-sidebar"
                    })]
                }), ey && (0,
                r.jsx)(m.A, {
                    slot: eu && Y === y ? "boxrail" : ef.slot,
                    enumerator: ef.index,
                    adClass: "".concat(E, "__right-rail--ad"),
                    offset: 10,
                    handler: U
                })]
            }) : null
        };
        j.propTypes = {
            block: o().string,
            section: _.uM.isRequired,
            sectionIndex: o().number.isRequired,
            articleContainsLargeProduct: o().bool,
            shouldRenderRightRailTaboola: o().func,
            getRightRailAdConfig: o().func,
            currentPath: o().string,
            boxflexAdRenderCheck: o().func,
            boxflexRendered: o().bool,
            isScrollingUp: o().bool,
            showTaboola: o().bool
        }
    }
    ,
    8964: (e, t, i) => {
        "use strict";
        i.d(t, {
            Gd: () => a,
            hM: () => l,
            ko: () => r,
            x: () => n
        });
        var n = function(e) {
            var t;
            return !!e.ecommerceEnabled && !(null == e ? void 0 : null === (t = e.presentation) || void 0 === t ? void 0 : t.hideProductRecommendations)
        }
          , a = function(e, t) {
            return n(e) && Object.keys((null == t ? void 0 : t["reader-favorites-and-customization"]) || {}).length
        }
          , r = function(e, t, i) {
            var n = e["bestseller-bacon-customization"]
              , a = (void 0 === n ? {} : n).title
              , r = e["reader-favorites-and-customization"]
              , l = (void 0 === r ? {} : r).title
              , s = "Shop TODAY Reader Favorites" === i;
            return s && l || !t && !s && a || i || ""
        }
          , l = function(e, t, i) {
            var n, a, r, l = "shop" === (null !== (r = null == t ? void 0 : null === (a = t.taxonomy) || void 0 === a ? void 0 : null === (n = a.primarySection) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : "").toLowerCase();
            return "today" === e && l && !!t.ecommerceEnabled && !!i
        }
    }
    ,
    9616: e => {
        e.exports = {
            logo: "styles_logo__1wCPE",
            logoLink: "styles_logoLink__F1wW7",
            "live-dot-blink": "styles_live-dot-blink__FL39_",
            "fade-in": "styles_fade-in__LDF1_",
            "expand-in": "styles_expand-in__IiNAH",
            "chatblog-expand-in": "styles_chatblog-expand-in__VqRWV"
        }
    }
    ,
    11863: e => {
        e.exports = {
            linkItem: "styles_linkItem__RP4xO",
            link: "styles_link__lShks",
            underline: "styles_underline__Rq_lV",
            highlighted: "styles_highlighted__jisS2",
            "live-dot-blink": "styles_live-dot-blink__WQm30",
            "fade-in": "styles_fade-in__1nQqU",
            "expand-in": "styles_expand-in__hR3oF",
            "chatblog-expand-in": "styles_chatblog-expand-in__FgvlD"
        }
    }
    ,
    12264: (e, t, i) => {
        "use strict";
        i.d(t, {
            Z: () => R
        });
        var n = i(67684)
          , a = i(62701)
          , r = i(20294)
          , l = i(37876)
          , s = i(14232)
          , o = i(15039)
          , d = i.n(o)
          , c = i(95062)
          , u = i.n(c)
          , p = i(61702)
          , h = i(87992)
          , _ = i(64759)
          , v = i(82780)
          , m = i.n(v)
          , g = i(46629)
          , b = i(31613)
          , f = i.n(b)
          , y = function(e) {
            var t = e.authors;
            if (!t || !t.length)
                return null;
            var i = 1 === t.length
              , n = m()(t[0], "person", t[0]);
            return (0,
            l.jsxs)("div", {
                className: f().cardByline,
                "data-testid": "byline-container",
                children: [i && (0,
                l.jsx)(g.oQ, {
                    additionalClasses: f().bylineThumbnail,
                    person: n,
                    position: 1
                }), (0,
                l.jsx)("div", {
                    className: f().inner,
                    children: (0,
                    l.jsx)("p", {
                        className: f().authors,
                        "data-testid": "byline",
                        children: (0,
                        l.jsx)(g.Gj, {
                            authors: t
                        })
                    })
                })]
            })
        };
        y.propTypes = {
            authors: u().arrayOf(p.cy || p.MV)
        };
        var x = i(16438)
          , k = i.n(x)
          , j = function(e) {
            var t = e.headline;
            return (0,
            l.jsx)("h2", {
                className: d()(k().cardHeadline),
                "data-testid": "headline",
                children: void 0 === t ? "" : t
            })
        };
        j.propTypes = {
            headline: u().string
        };
        var C = i(45526)
          , L = i(28533)
          , w = i(46410)
          , I = i.n(w)
          , A = function(e) {
            var t = e.date
              , i = e.isLive;
            return (0,
            l.jsx)("div", {
                className: d()(I().cardTimestamp, (0,
                C._)({}, I().eventEnded, !(void 0 !== i && i))),
                children: t && (0,
                l.jsx)(L.f, {
                    dateString: t.publishedAt
                })
            })
        };
        A.propTypes = {
            date: u().shape({
                createdAt: u().string,
                modifiedAt: u().string,
                publishedAt: u().string
            }),
            isLive: u().bool
        },
        i(63800);
        var N = i(2168)
          , T = i(89903)
          , S = i(96491)
          , E = i(56790)
          , M = {
            display: "inline-block",
            position: "absolute",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            height: 1,
            width: 1,
            margin: -1,
            padding: 0,
            border: 0
        }
          , R = function(e) {
            var t = e.cardType
              , i = e.authors
              , n = e.content
              , a = n.markupAndEmbeds
              , o = n.visibleMarkupAndEmbeds
              , c = n.hiddenMarkupAndEmbeds
              , u = e.date
              , p = e.headline.primary
              , v = e.isHeadlineHidden
              , m = e.id
              , g = e.path
              , b = e.cardData
              , f = e.socialUrl
              , x = e.newActiveItem
              , k = e.isChromeless
              , C = void 0 !== k && k
              , L = e.article
              , w = (0,
            s.useContext)(h.O1)
              , I = (0,
            s.useContext)(h._b).isLive
              , R = (0,
            r._)(s.useState(!1), 2)
              , P = R[0]
              , B = R[1]
              , O = (0,
            T.B0)(S.CARD_SHARE_THIS, w)
              , F = s.useRef(null);
            s.useEffect(function() {
                P && F.current && F.current.focus()
            }, [P]);
            var D = d()("live-blog-card", "article-body__content", "w-100 mh0 mb8 fn", {
                newActiveItem: void 0 !== x && x
            });
            return (0,
            l.jsxs)("div", {
                className: D,
                id: m,
                "data-testid": "card-container",
                children: [u && (0,
                l.jsx)(A, {
                    date: u,
                    isLive: I
                }), !(void 0 !== v && v) && p && (0,
                l.jsx)(j, {
                    headline: p
                }), (0,
                l.jsx)(y, {
                    authors: i
                }), (0,
                l.jsxs)("div", {
                    "data-icid": "live-blog-card-link",
                    "data-testid": "card-body-container",
                    children: [(0,
                    E.v)({
                        bodyItems: o || (void 0 === a ? [] : a),
                        path: g,
                        showHiddenMarkupAndEmbeds: P,
                        setShowHiddenMarkupAndEmbeds: B,
                        id: m,
                        headline: p,
                        isChromeless: C,
                        article: L
                    }), P ? (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsxs)("h3", {
                            tabIndex: "-1",
                            ref: F,
                            style: M,
                            children: [p, ", continued"]
                        }), (0,
                        E.v)({
                            bodyItems: c,
                            path: g,
                            id: m,
                            headline: p,
                            isChromeless: C,
                            article: L
                        })]
                    }) : (0,
                    l.jsx)("div", {
                        id: "".concat(m, "-overflow-content"),
                        className: d()("hidden-show-more-content", {
                            dn: !(null == c ? void 0 : c.length)
                        }),
                        children: (0,
                        E.v)({
                            bodyItems: c,
                            path: g,
                            id: m,
                            headline: p,
                            isChromeless: C,
                            article: L
                        })
                    }), "VIDEO" === t && (0,
                    l.jsx)(_.A, {
                        video: b
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "share-list__wrapper mt6",
                    children: (0,
                    l.jsx)(N.w, {
                        url: f,
                        trackingEventName: "mbt_navbar_socialShare",
                        actions: {
                            save: !1,
                            pinterest: !1,
                            shareThis: O
                        },
                        icid: "ed_npd_nn_nn_np_liveblog",
                        headline: p,
                        pageRegion: "blog-card",
                        useAriaLabelHeadline: !0
                    })
                })]
            }, m)
        };
        R.propTypes = (0,
        a._)((0,
        n._)({}, p.B0), {
            socialUrl: u().string.isRequired,
            newActiveItem: u().bool
        })
    }
    ,
    13101: e => {
        e.exports = {
            "chat-blog-card": "styles_chat-blog-card__wNypF",
            shows: "styles_shows__zLOmC",
            msnbc: "styles_msnbc__PQvsa",
            "body-list-el": "styles_body-list-el__1HV1O",
            liftout: "styles_liftout__norJL",
            related: "styles_related__d2Kpf",
            blockquote: "styles_blockquote__qKlaX",
            pullquote: "styles_pullquote__AndRx",
            liftout__text: "styles_liftout__text__Gul9u",
            pullquote__quote: "styles_pullquote__quote__TEcPW",
            "chat-blog-card__byline-thumbnail": "styles_chat-blog-card__byline-thumbnail___IKxn",
            "hidden-show-more-content": "styles_hidden-show-more-content__FOVN1",
            "time-stamp-social-share-container": "styles_time-stamp-social-share-container__pmafU",
            "authors-container": "styles_authors-container__wY7vB",
            isReply: "styles_isReply__QagGl",
            cardsContainer: "styles_cardsContainer__0dQ7Q",
            lastCard: "styles_lastCard__KvRIn",
            card: "styles_card__tFOWa",
            newActiveItem: "styles_newActiveItem__LQVpZ",
            zoomAndFadeIn: "styles_zoomAndFadeIn__X_GL8",
            "share-list__wrapper": "styles_share-list__wrapper__wjK_H",
            "share__link-copy": "styles_share__link-copy__xj58P",
            "icon-link": "styles_icon-link__3rJ_4",
            share__sms: "styles_share__sms__kjcOZ",
            "icon-sms": "styles_icon-sms__hmjS1",
            "author-thumbnails": "styles_author-thumbnails__qhUtP",
            "author-dropdown": "styles_author-dropdown__s_ZeC",
            isTapped: "styles_isTapped__xv4Q_",
            "dropdown-item": "styles_dropdown-item__KF7EM",
            "live-dot-blink": "styles_live-dot-blink__TrTws",
            "fade-in": "styles_fade-in__dW_cO",
            "expand-in": "styles_expand-in__aWNWs",
            "chatblog-expand-in": "styles_chatblog-expand-in__4_S9b"
        }
    }
    ,
    13257: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => d
        });
        var n = i(20294)
          , a = i(37876)
          , r = i(14232)
          , l = i(15039)
          , s = i.n(l)
          , o = i(86999);
        i(75940);
        let d = function() {
            var e = (0,
            n._)((0,
            r.useState)(!1), 2)
              , t = e[0]
              , i = e[1]
              , l = s()("ad--midresponsive", {
                "ad--loaded": t
            });
            return (0,
            a.jsx)(o.A, {
                slot: "midresponsive",
                adClass: l,
                refreshInterval: 0,
                offset: 300,
                handler: function(e) {
                    e.onRender(function(e) {
                        e && !e.empty && i(!0)
                    })
                }
            }, "midresponsiveAd")
        }
    }
    ,
    15709: e => {
        e.exports = {
            jumpLinkList: "styles_jumpLinkList__3j_rb",
            jumpLinkList__item: "styles_jumpLinkList__item___QFWB",
            jumpLinkList__itemLink: "styles_jumpLinkList__itemLink__WKl6G",
            jumpLinkList__activeItem: "styles_jumpLinkList__activeItem__iPi7F",
            "live-dot-blink": "styles_live-dot-blink__BA2sz",
            "fade-in": "styles_fade-in__WhQKt",
            "expand-in": "styles_expand-in__4fB79",
            "chatblog-expand-in": "styles_chatblog-expand-in__kLIZ9"
        }
    }
    ,
    16438: e => {
        e.exports = {
            cardHeadline: "styles_cardHeadline__tHxeP",
            "live-dot-blink": "styles_live-dot-blink__YWrBL",
            "fade-in": "styles_fade-in__urLGX",
            "expand-in": "styles_expand-in__8pMNd",
            "chatblog-expand-in": "styles_chatblog-expand-in__kvkwQ"
        }
    }
    ,
    16997: (e, t, i) => {
        "use strict";
        i.d(t, {
            l: () => O
        });
        var n = i(92955)
          , a = i(85993)
          , r = function(e, t) {
            if (!e.length)
                return [[t]];
            var i = e[e.length - 1];
            return t === i[i.length - 1] + 1 ? (i.push(t),
            e) : (0,
            a._)(e).concat([[t]])
        }
          , l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return !!(e.element && ["p"].indexOf(e.element) > -1) || !!t && !!e.type && "advertisement" === e.type || !!e.type && "recommended" === e.type
        };
        function s(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return function(i) {
                var n = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e.reduce(function(i, n, r) {
                        return r >= e.length - 1 ? i : l(n, t) && l(e[r + 1], t) ? (0,
                        a._)(i).concat([r]) : i
                    }, [])
                }(i, !t)
                  , s = n.reduce(r, [])
                  , o = function e(t, i, n) {
                    for (var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, r = a; r < t.length; r += 1)
                        if ("embeddedImage" === t[r].type) {
                            var l, s, o = r + 3;
                            if ((null === (l = t[o]) || void 0 === l ? void 0 : l.type) === "embeddedImage" || (null === (s = t[o + 1]) || void 0 === s ? void 0 : s.type) === "embeddedImage")
                                return e(t, i, n, o);
                            return o < t.length ? o : -1
                        }
                    return function(e, t) {
                        var i, n = e.length;
                        if (n < 0)
                            return -1;
                        if (n <= 2)
                            return 0;
                        var a = e[Math.ceil(n / 2)]
                          , r = {
                            reducedIndex: t.findIndex(function(e) {
                                var t = e.indexOf(a);
                                return t >= 0 && (i = t),
                                t >= 0
                            }),
                            positionInCluster: i
                        }
                          , l = r.reducedIndex
                          , s = r.positionInCluster
                          , o = t[l].length;
                        if (o >= 3 && s < o - 1)
                            return a;
                        var d = t.slice(l);
                        if (d) {
                            var c = d.findIndex(function(e) {
                                return e.length >= 3
                            });
                            if (c >= 0)
                                return d[c][0]
                        }
                        return e[n - 2]
                    }(i, n)
                }(i, n, s);
                return o >= 0 && i.splice(o + 1, 0, {
                    content: e,
                    mobile: t,
                    type: "recommended"
                }),
                i
            }
        }
        var o = i(61623)
          , d = function(e) {
            return e.element && ["p", "ul", "ol"].indexOf(e.element) > -1 || !1
        }
          , c = i(89903)
          , u = i(96491)
          , p = i(92)
          , h = i(67684)
          , _ = i(62701)
          , v = i(20294)
          , m = i(75277)
          , g = i(32240)
          , b = function(e) {
            var t = e.presentation.size;
            return "large" === t || "fullwidth" === t || "edgetoedge" === t
        }
          , f = function(e) {
            var t = e.presentation.size
              , i = e.ecommerceEnabled;
            return "small" !== t && "medium" !== t && !i
        };
        function y(e) {
            switch (e.type) {
            case "embeddedWidget":
                return b(e);
            case "embeddedImage":
                return f(e);
            case "embeddedVideo":
            default:
                return !1;
            case "embeddedProduct":
                return "large" === e.presentation.size;
            case "shoppingCartCarousel":
            case "embeddedProductList":
                return !0
            }
        }
        function x(e) {
            var t = null;
            return e.reduce(function(e, i) {
                if (!i)
                    return e;
                var n = y(i);
                if (null !== t && (n && !t || !n && t))
                    e.push([i]);
                else {
                    var a = e.length - 1;
                    e[a].push(i)
                }
                return t = n,
                e
            }, [[]])
        }
        var k = i(3073)
          , j = i(86450)
          , C = "taboola"
          , L = "boxrail"
          , w = "boxflex"
          , I = function(e) {
            var t;
            return !!e && ("p" === e.element || "ul" === e.element || "ol" === e.element || (null === (t = e.presentation) || void 0 === t ? void 0 : t.size) && ["small", "medium"].includes(e.presentation.size))
        }
          , A = function(e) {
            var t = e.path
              , i = e.article
              , n = e.articlePublishDate
              , a = e.vertical
              , r = e.lazyLoadSection
              , l = e.isArticleEcommerceEnabled
              , s = e.articleCanonicalUrl
              , o = e.articleId
              , d = e.articleTrackingId
              , c = e.sectionMarkup
              , u = e.featureFlags
              , p = e.isChromeless
              , h = e.sourceName;
            return function(e, _) {
                return (0,
                j.Pk)({
                    article: i,
                    isArticleEcommerceEnabled: l,
                    articleCanonicalUrl: s,
                    item: e,
                    i: _,
                    path: t,
                    articlePublishDate: n,
                    vertical: a,
                    lazyLoadSection: r,
                    articleId: o,
                    articleTrackingId: d,
                    sectionMarkup: c,
                    featureFlags: u,
                    isChromeless: p,
                    sourceName: h
                })
            }
        }
          , N = i(61311);
        function T(e) {
            return e.map(function(e) {
                return "markup" === e.type && e.html ? (0,
                _._)((0,
                h._)({}, e), {
                    html: (0,
                    N.F)(e.html)
                }) : e
            })
        }
        var S = {
            markup: {
                p: !0,
                ul: !0
            },
            embeddedWidget: !0,
            embeddedVideo: !0,
            embeddedProduct: !0,
            embeddedCuratedList: !0
        }
          , E = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length - 1; t >= 0; t -= 1) {
                var i = e[t] || {}
                  , n = S[i.type];
                if (n && (!0 === n || n[i.element])) {
                    i.insertEndmark = !0;
                    break
                }
            }
            return e
        }
          , M = i(45526);
        function R() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return e.map(function(e) {
                var t = "markup" === e.type && e.html;
                if (!t)
                    return e;
                var i = t.replace(/href="(.+?)"/g, function(e, t) {
                    var i = t.indexOf("#")
                      , n = t.substring(i + 1);
                    if (0 !== i || n.startsWith("anchor-"))
                        return e;
                    var a = "anchor-".concat(n.replace(/[^A-Za-z0-9]/g, ""));
                    return 'href="'.concat("".concat(t.substring(0, i), "#").concat(a), '"')
                });
                return (0,
                _._)((0,
                h._)({}, e), {
                    html: i
                })
            })
        }
        var P = i(61461);
        function B(e) {
            return e.filter(function(e) {
                return !(0,
                P.Rm)(e)
            })
        }
        function O(e) {
            var t, i, r, l, b, f, j, N, S, P, O, F, D, U, z, H, W, q, V, J, Y, Z, G, Q = e.adsEnabled, K = e.article, X = e.articleBody, $ = e.breakingNews, ee = e.ecommerceEnabled, et = e.isLiveBlog, ei = e.nativeAd, en = e.path, ea = e.taboolaRecoReelEnabled, er = e.vertical, el = e.isShoppable, es = e.gateAccess, eo = e.featureFlags, ed = e.isChromeless, ec = (0,
            o.Vi)(K, er), eu = K.datePublished, ep = K.ecommerceEnabled, eh = K.url.canonical, e_ = K.source, ev = (null == e_ ? void 0 : e_.name) || (null == e_ ? void 0 : null === (Y = e_.organization) || void 0 === Y ? void 0 : Y.name);
            return (0,
            n.A)(B, T, R, (t = null === (Z = K.ecommerceMetadata) || void 0 === Z ? void 0 : Z.trackingId,
            function(e) {
                return e.map(function(e) {
                    var i = "markup" === e.type && e.html;
                    if (!i || !t)
                        return e;
                    var n = i.replace(/href="(.+?)"/g, function(e, i) {
                        return i.includes(t) ? 'href="'.concat(i, '" rel="sponsored"') : e
                    });
                    return (0,
                    _._)((0,
                    h._)({}, e), {
                        html: n
                    })
                })
            }
            ), function(e) {
                var t, i, n, r, l, s, o;
                return ei || !Q ? e : ((o = (t = {
                    type: "advertisement"
                },
                i = 0,
                n = e.reduce(function(t, n, r) {
                    return r >= e.length - 1 ? t : (d(n) && (i += 1),
                    d(n) && d(e[r + 1])) ? (0,
                    a._)(t).concat([{
                        index: r,
                        contentCount: i
                    }]) : t
                }, []),
                r = 2,
                l = 0,
                n.filter(function(e) {
                    var t = !1
                      , i = !1
                      , n = !1;
                    return 2 === r && e.contentCount >= 2 ? (t = !0,
                    n = !0) : e.contentCount >= r && l + 4 <= e.index ? (i = !0,
                    n = !0) : e.contentCount >= r && l + 6 <= e.index && (i = !0,
                    n = !0),
                    t && (l = e.index,
                    r += 4),
                    i && (l = e.index,
                    r += 6),
                    n
                }).map(function(e) {
                    return e.index
                }).reverse().forEach(function(i) {
                    e.splice(i + 1, 0, t)
                }),
                s = e).findIndex(function(e) {
                    return "advertisement" === e.type
                })) > -1 && s.splice(o + 1, 0, {
                    type: "taboolaReadMoreBelow"
                }),
                s)
            }, function(e) {
                return 1 === e.length && e[0].type && "embeddedWidget" === e[0].type || ec ? e : (0,
                n.A)(s(K, !0), s(K, !1))(e)
            }, function(e) {
                if (!(0,
                c.B0)(u.ARTICLE_INLINE_NEWSLETTER, er) || et || $)
                    return e;
                var t = (0,
                a._)(e)
                  , i = t.filter(function(e) {
                    return e && "markup" === e.type
                }).length
                  , n = t.length - 1
                  , r = {
                    type: "inlineNewsletter",
                    props: {
                        article: K,
                        vertical: er
                    }
                };
                if ((0,
                c.B0)(u.MID_ARTICLE_NEWSLETTER, er) && i >= 8) {
                    for (var l = Math.floor(t.length / 2), s = function(e) {
                        var i, n, a;
                        return (null === (i = t[e].presentation) || void 0 === i ? void 0 : i.size) === "small" || (null === (n = t[e - 1].presentation) || void 0 === n ? void 0 : n.size) === "small" || (null === (a = t[e - 2].presentation) || void 0 === a ? void 0 : a.size) === "small"
                    }, o = function(e) {
                        return !!s(e) || "advertisement" === t[e - 1].type
                    }, d = o(l); d; )
                        l === n ? d = !1 : (l += 1,
                        d = o(l));
                    t.splice(l, 0, r)
                } else
                    t.push(r);
                return t
            }, (0,
            p.H7)({
                adsEnabled: Q,
                breakingNews: $,
                isLiveBlog: et,
                taboolaRecoReelEnabled: ea,
                vertical: er
            }), function(e) {
                return e.map(function(t) {
                    if ("embeddedWidget" !== t.type)
                        return t;
                    var i = t.widget
                      , n = i.name
                      , a = i.properties.embed
                      , r = void 0 === a ? {} : a
                      , l = r.products
                      , s = r.type
                      , o = (void 0 === l ? [] : l).filter(function(e) {
                        return !0 !== e.hidden
                    });
                    if ("CUSTOM_EMBED" !== n || "COMMERCE_QUICK_TAKES" !== s)
                        return t;
                    var d = e.filter(function(e) {
                        return "embeddedProduct" === e.type
                    }).reduce(function(e, t) {
                        return (0,
                        _._)((0,
                        h._)({}, e), (0,
                        M._)({}, t.product.id, t.product))
                    }, {});
                    return (0,
                    _._)((0,
                    h._)({}, t), {
                        widget: (0,
                        _._)((0,
                        h._)({}, t.widget), {
                            properties: (0,
                            _._)((0,
                            h._)({}, t.widget.properties), {
                                embed: (0,
                                _._)((0,
                                h._)({}, t.widget.properties.embed), {
                                    products: o.map(function(e) {
                                        return (0,
                                        h._)({}, e, d[e.id])
                                    })
                                })
                            })
                        })
                    })
                })
            }, (r = (i = {
                isShoppable: el,
                article: K,
                vertical: er
            }).isShoppable,
            l = i.article,
            b = i.vertical,
            r ? function(e) {
                var t, i = e.findIndex(function(e) {
                    return "embeddedProduct" === e.type
                }), n = (null === (t = e[i - 1]) || void 0 === t ? void 0 : t.element) === "h2" ? i - 1 : i;
                return (0,
                a._)(e.slice(0, n)).concat([{
                    type: "shoppingCartCarousel",
                    article: l,
                    vertical: b,
                    presentation: {
                        size: "edgetoedge"
                    }
                }], (0,
                a._)(e.slice(n)))
            }
            : function(e) {
                return e
            }
            ), function(e) {
                return (0,
                m.Hh)(e, function(t, i) {
                    var n = function(e) {
                        var t = e.item
                          , i = e.isLastItem
                          , n = e.prevItem
                          , a = e.nextItem
                          , r = e.ecommerceEnabled;
                        if (t && r && !i && "embeddedImage" === t.type && n && "markup" === n.type && "p" === n.element && n.html.startsWith("<strong>") && n.html.indexOf("<a") > -1)
                            return (0,
                            _._)((0,
                            h._)({}, t), {
                                shopLink: n
                            });
                        if (t && r && !i && "markup" === t.type && "p" === t.element && a && "embeddedImage" === a.type && t.html.startsWith("<strong>") && t.html.indexOf("<a") > -1) {
                            var l = t.html.match(/href="([^"]+)"/);
                            if (null == l ? void 0 : l.length) {
                                var s = (0,
                                v._)(l, 2)[1]
                                  , o = t.html.replace(/href="([^"]+)"/, 'href="'.concat((0,
                                g.Ay)({
                                    url: s
                                }), '" target="_blank"'));
                                return (0,
                                _._)((0,
                                h._)({}, t), {
                                    html: o
                                })
                            }
                        }
                        return t
                    }({
                        item: t,
                        isLastItem: i === e.length - 1,
                        prevItem: e[i - 1],
                        nextItem: e[i + 1],
                        ecommerceEnabled: ee
                    });
                    return [(0,
                    _._)((0,
                    h._)({}, n), {
                        ecommerceEnabled: ee
                    })]
                })
            }, E, x, (j = (f = {
                articleTrackingId: null === (G = K.ecommerceMetadata) || void 0 === G ? void 0 : G.trackingId,
                articleId: K.id,
                article: K,
                articlePublishDate: eu,
                isArticleEcommerceEnabled: ep,
                articleCanonicalUrl: eh,
                isShoppable: el,
                path: en,
                vertical: er,
                gateAccess: es,
                featureFlags: eo,
                isChromeless: ed,
                sourceName: ev
            }).path,
            N = f.article,
            S = f.articlePublishDate,
            P = f.isArticleEcommerceEnabled,
            O = f.articleCanonicalUrl,
            F = f.vertical,
            D = f.isShoppable,
            U = f.articleId,
            z = f.articleTrackingId,
            W = void 0 === (H = f.gateAccess) || H,
            q = f.featureFlags,
            V = f.isChromeless,
            J = f.sourceName,
            function(e) {
                return e.map(function(e, t) {
                    var i = [];
                    W ? i = e : 0 === t && (i = [e[0], e[1]]);
                    var n = e.filter(I).length
                      , a = e.every(function(e) {
                        var t;
                        return (null === (t = e.presentation) || void 0 === t ? void 0 : t.size) === "edgetoedge"
                    })
                      , r = e.every(function(e) {
                        return y(e)
                    })
                      , l = n < 3 ? [] : n < 5 ? [L] : n < 7 ? [C, L] : [C, w]
                      , s = (0,
                    k.UR)(j)
                      , o = {
                        items: i.map(A({
                            path: j,
                            article: N,
                            articlePublishDate: S,
                            vertical: F,
                            lazyLoadSection: t > 0,
                            isArticleEcommerceEnabled: P,
                            articleCanonicalUrl: O,
                            articleId: U,
                            articleTrackingId: z,
                            sectionMarkup: i,
                            featureFlags: q,
                            isChromeless: V,
                            sourceName: J
                        })),
                        isFullWidth: a,
                        hideRightRail: r,
                        ad: {
                            display: !1
                        },
                        taboola: !1
                    };
                    return l.length && (!D && (l.includes(C) || s) && (o.taboola = !0),
                    l.includes(L) && (o.ad.display = !0,
                    o.ad.slot = L),
                    l.includes(w) && (o.ad.display = !0,
                    o.ad.slot = w)),
                    o
                })
            }
            ))(Array.from(X))
        }
    }
    ,
    17533: e => {
        e.exports = {
            reportingFrom: "styles_reportingFrom__MzKFY",
            chatCardEyebrow: "styles_chatCardEyebrow__mnag3",
            "live-dot-blink": "styles_live-dot-blink__CjOid",
            "fade-in": "styles_fade-in___8XjR",
            "expand-in": "styles_expand-in__is2_G",
            "chatblog-expand-in": "styles_chatblog-expand-in__v7Rm_"
        }
    }
    ,
    18920: e => {
        e.exports = {
            replies: "styles_replies__XttTw",
            repliesCount: "styles_repliesCount__i2kAT",
            hasParent: "styles_hasParent__sobPy",
            "live-dot-blink": "styles_live-dot-blink__Dp3jW",
            "fade-in": "styles_fade-in__it25E",
            "expand-in": "styles_expand-in__kgeGE",
            "chatblog-expand-in": "styles_chatblog-expand-in__KFsEL"
        }
    }
    ,
    19099: () => {}
    ,
    19304: (e, t, i) => {
        "use strict";
        i.d(t, {
            C: () => n
        });
        var n = function(e) {
            var t = e.subType
              , i = void 0 === t ? "" : t
              , n = e.body;
            if ("externalLink" === i) {
                var a = e.description
                  , r = e.url;
                return [{
                    type: "markup",
                    element: "p",
                    html: a.primary || a.social
                }, {
                    type: i,
                    url: r.primary
                }]
            }
            return void 0 === n ? [] : n
        }
    }
    ,
    19373: () => {}
    ,
    23102: (e, t, i) => {
        "use strict";
        i.d(t, {
            AP: () => c,
            $H: () => f,
            A_: () => y
        });
        var n = i(3711)
          , a = i(85993)
          , r = i(75277)
          , l = i(81481);
        let s = function(e) {
            if (!e.length)
                return -1;
            var t, i = e.findIndex(function(e) {
                return e.packages[0] && "partnerRecirc" === e.packages[0].type
            });
            if (e[i - 1] && "fullWidth" !== e[i - 1].type)
                t = i;
            else {
                var n = e.length - 1;
                "fullWidth" !== e[n].type && (t = n + 1)
            }
            return t
        };
        var o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "boxinline";
            return {
                isCustomAd: !0,
                sticky: !1,
                autofill: null,
                id: e,
                items: [],
                manuallyCuratedAd: !1,
                metadata: {
                    slot: i,
                    packageId: e
                },
                name: "",
                type: "ad",
                zone: t
            }
        };
        let d = JSON.parse('{"news":[{"excludeLayouts":["fullWidth"],"excludePackages":["leadSectionFront"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":true,"interval":2,"adPlacement":0,"type":"boxinline"},{"excludeLayouts":[],"excludePackages":["leadSectionFront"],"excludeFirstPackages":["bigHeadline","embed"],"isRecurring":false,"placeAfterPackage":null,"interval":0,"adPlacement":2,"type":"boxinline","name":"News first ad"}],"today":[{"excludeLayouts":["rightRail","leftRail"],"excludePackages":["twoUp","partnerRecirc"],"placeAfterPackage":null,"isRecurring":true,"interval":5,"adPlacement":0,"type":"frontMidbanners","customTypeRule":[{"placement":2,"type":"midresponsive"}]}],"msnbc":[{"excludeLayouts":["fullWidth"],"excludePackages":["leadSectionFront","collectionTitle"],"excludeFirstPackages":["bigHeadline","embed"],"placeAfterPackage":null,"isRecurring":true,"interval":2,"adPlacement":0,"type":"boxinline"},{"excludeLayouts":[],"excludePackages":["leadSectionFront"],"excludeFirstPackages":["bigHeadline","embed"],"isRecurring":false,"placeAfterPackage":null,"interval":0,"adPlacement":1,"type":"boxinline"}]}');
        var c = function e(t, i, c) {
            var u = this
              , p = this;
            (0,
            n._)(this, e),
            this.isLayoutExcluded = function(e) {
                return u.rule.excludeLayouts.includes(e)
            }
            ,
            this.isPackageExcluded = function(e) {
                return u.rule.excludePackages.includes(e)
            }
            ,
            this.isExcludeFirstPackages = function(e) {
                return u.rule.excludeFirstPackages.includes(e)
            }
            ,
            this.isLastLayoutBeforeTaboola = function() {
                return u.totalLayoutParsed === u.lastNonFullWidthLayoutIndex
            }
            ,
            this.isLastPackageBeforeTaboola = function(e) {
                var t = u.packages.length - 1;
                return e === t && "partnerRecirc" === u.packages[t].type || u.isLastLayoutBeforeTaboola() && ("ad" === u.packages[t].type && t <= e || "ad" !== u.packages[t].type && t + 1 <= e)
            }
            ,
            this.isValidAdPlacement = function(e) {
                return e > u.packages.length || u.isLastPackageBeforeTaboola(e) ? null : e
            }
            ,
            this.setPackage = function(e) {
                var t;
                u.currentPackageIndex = 0,
                u.packages = (0,
                a._)(e),
                ("today" === u.vertical || "msnbc" === u.vertical) && (t = u.todayMsnbcPackageSorting),
                u.packages = (0,
                r.qd)(u.packages, function(e) {
                    return e.zone
                }, t)
            }
            ,
            this.todayMsnbcPackageSorting = function(e, t) {
                return e.value > t.value ? -1 : e.value < t.value || e.index > t.index ? 1 : e.index < t.index ? -1 : 0
            }
            ,
            this.placeAd = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , i = p.rule
                  , n = i.type
                  , a = i.customTypeRule
                  , r = null;
                a && a.forEach(function(e) {
                    e.placement === p.adCount && (r = e.type)
                }),
                p.adCount += 1,
                p.packages.splice(e, 0, p.getAd(t, r || n)),
                p.currentPackageIndex = e
            }
            ,
            this.placeAdAfterCertainPackage = function(e) {
                for (var t = u.currentPackageIndex; t < u.packages.length; t += 1) {
                    var i = u.packages[t]
                      , n = i.type
                      , a = i.zone;
                    if (e === n) {
                        if (u.isValidAdPlacement(t + 1))
                            return u.placeAd(t + 1, a),
                            !0;
                        break
                    }
                }
                return !1
            }
            ,
            this.placeAdsIntoPackages = function() {
                var e = u.rule
                  , t = e.adPlacement
                  , i = e.placeAfterPackage
                  , n = e.excludePackages
                  , a = e.name;
                if (t && n.length > 0) {
                    for (var r = 0; r < u.packages.length; r += 1) {
                        var l = u.packages[r]
                          , s = l.type
                          , o = l.zone;
                        if (0 === r && u.isExcludeFirstPackages(s) || "msnbc" === u.vertical && 2 === o || "News first ad" === a)
                            break;
                        if (!u.isPackageExcluded(s)) {
                            u.placeAd(r + 1, o);
                            break
                        }
                    }
                    return !0
                }
                return i ? u.placeAdAfterCertainPackage(i) : (u.placeAd(t),
                !0)
            }
            ,
            this.intervalAdPlacementToPackages = function(e) {
                for (var t = u.currentPackageIndex; t < u.packages.length; t += 1) {
                    var i = u.packages[t]
                      , n = i.type
                      , a = i.zone
                      , r = i.metadata
                      , l = (void 0 === r ? {} : r).cantShowAdBelow
                      , s = void 0 !== l && l;
                    if ("ad" !== n) {
                        var o = 1 === a && s && "news" === u.vertical && t !== u.packages.length - 1
                          , d = u.isPackageExcluded(n);
                        if (("NativeAd" === n || o || d) && (u.intervalCounter -= 1),
                        u.intervalCounter += 1,
                        u.intervalCounter === e) {
                            var c = u.isValidAdPlacement(t + 1);
                            if (c)
                                u.placeAd(c, a),
                                u.intervalCounter = 0;
                            else
                                break
                        }
                    }
                }
                return u.packages
            }
            ,
            this.addCustomAds = function(e, t) {
                return (u.totalLayoutParsed += 1,
                !u.rules || u.isLayoutExcluded(e.type) || !t.length || !["news", "today", "msnbc"].includes(u.vertical)) ? t : (u.setPackage(t),
                2 === u.totalLayoutParsed && u.addAdToTeaseList(),
                u.addCustomAdsForVertical())
            }
            ,
            this.addAdToTeaseList = function() {
                var e = u.packages.find(function(e) {
                    return "teaseList" === e.type
                });
                if (!e)
                    return !1;
                if ("today" === u.vertical)
                    e.adAboveList = !0,
                    e.adType = l.A.isSorM() ? "boxinline" : "boxrail";
                else {
                    try {
                        e.adAboveList = u.layouts[0].packages.length > 0
                    } catch (t) {
                        e.adAboveList = !1
                    }
                    e.adType = "boxrail"
                }
                return !0
            }
            ,
            this.addCustomAdsForVertical = function() {
                for (; u.rule; ) {
                    if (u.rule.isRecurring) {
                        var e = u.rule.interval;
                        return u.intervalAdPlacementToPackages(e)
                    }
                    if (u.placeAdsIntoPackages())
                        u.rule = u.rules.pop();
                    else
                        break
                }
                return u.packages
            }
            ,
            this.getAd = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "boxinline";
                return p.adIndex += 1,
                o(p.adIndex.toString(), e, t)
            }
            ,
            c || (c = t);
            var h = null == d ? void 0 : d[c];
            h && (this.vertical = t,
            this.rules = (0,
            a._)(h),
            this.layouts = i,
            this.lastNonFullWidthLayoutIndex = s(i),
            this.rule = this.rules.pop(),
            this.totalLayoutParsed = 0,
            this.currentPackageIndex = 0,
            this.intervalCounter = 0,
            this.packages = [],
            this.adIndex = 0x16cb283144,
            this.adCount = 1)
        }
          , u = i(92938)
          , p = i(67684)
          , h = i(62701)
          , _ = ["entityPage"]
          , v = {
            twoUp: "twoUp",
            threeUp: "threeUp",
            fourUp: "fourUp",
            threeFeatured: "threeFeatured",
            threeFeaturedPlusList: "threeFeaturedPlusList"
        }
          , m = {
            videoPkg: "videoPkg",
            pancake: "pancake",
            sevenUp: "sevenUp",
            leadSectionFront: "leadSectionFront",
            bigStoryTakeoverPlus4: "bigStoryTakeoverPlus4",
            mosaic: "mosaic"
        }
          , g = {
            globalcitizen: !0
        }
          , b = {
            boxinline: {
                firstSlot: 4,
                freq: 4,
                min: 4,
                last: !1
            },
            boxflex: {
                firstSlot: 3,
                freq: 6,
                min: 4
            },
            midresponsive: {
                firstSlot: 27,
                min: 27,
                freq: 1 / 0,
                last: !0
            }
        }
          , f = function() {
            function e(t, i, a) {
                var r = this
                  , l = this;
                (0,
                n._)(this, e),
                this.insertAdsIntoWaffle = function(e, t) {
                    var i = []
                      , n = b[t]
                      , a = n.firstSlot
                      , l = n.freq
                      , s = n.min
                      , d = n.last;
                    return r.pkgLength < s ? e : (r.currIdx = 0,
                    r.lastAdIdx = -1,
                    e.forEach(function(e) {
                        var n = r.currIdx < r.pkgLength - 1 || d;
                        if (i.push((0,
                        p._)({}, e)),
                        e && "ad" !== e.type && (r.currIdx += 1,
                        r.shouldInsertAd(a, l) && n)) {
                            var s = o(r.currIdx.toString(), 1, t);
                            i.push(s),
                            r.lastAdIdx = r.currIdx
                        }
                    }),
                    i)
                }
                ,
                this.shouldInsertAd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
                    return l.currIdx === e && l.lastAdIdx < 0 || l.currIdx - l.lastAdIdx === t && l.lastAdIdx >= 0
                }
                ,
                this.currIdx = 0,
                this.lastAdIdx = -1,
                this.vertical = t,
                this.nonPackageAdsDisabled = _.includes(a),
                this.addCustomAds = this.parsePackages
            }
            return (0,
            u._)(e, [{
                key: "parsePackages",
                value: function(e) {
                    var t = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (!d[this.vertical] && !g[this.vertical] || !i.length)
                        return i;
                    var n = [];
                    if (this.currIdx = 0,
                    this.lastAdIdx = -1,
                    "waffle" === i[0].type) {
                        var a = i[0].items;
                        this.pkgLength = a.length;
                        var r = this.insertAdsIntoWaffle(a, "boxflex")
                          , l = this.insertAdsIntoWaffle(r, "boxinline")
                          , s = this.insertAdsIntoWaffle(l, "midresponsive");
                        return i.map(function(e, t) {
                            return 0 === t ? (0,
                            h._)((0,
                            p._)({}, i[0]), {
                                items: s
                            }) : (0,
                            p._)({}, e)
                        })
                    }
                    return "today" === this.vertical ? i : (i.forEach(function(e, a) {
                        var r = e.type
                          , l = e.zone
                          , s = e.items
                          , d = v[r]
                          , c = a === i.length - 1
                          , u = [];
                        if (d) {
                            var _ = t.insertAdsIntoPackage(s, "threeFeaturedPlusList" === r ? 3 : null, l, c)
                              , g = _.itemsWithAds;
                            _.insertedAd && (u = g)
                        } else
                            s.length && (t.currIdx += 1);
                        var b = !u.length && !c;
                        if (m[r] && !c || b && t.shouldInsertAd()) {
                            var f = o(t.currIdx.toString(), l);
                            n.push(e, f),
                            t.lastAdIdx = t.currIdx,
                            t.currIdx += 1
                        } else {
                            var y = (0,
                            h._)((0,
                            p._)({}, e), {
                                items: u.length ? u : s
                            });
                            "ad" === r && (y.manuallyCuratedAd = !0),
                            n.push(y)
                        }
                    }),
                    n)
                }
            }, {
                key: "insertAdsIntoPackage",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = arguments.length > 3 ? arguments[3] : void 0, r = [], l = t ? Math.min(t, e.length) : e.length, s = !1, d = 0; d < l; d += 1) {
                        var c = e[d]
                          , u = n && d >= l - 1;
                        if (this.shouldInsertAd() && !u) {
                            var p = o(this.currIdx.toString(), i);
                            r.push(p),
                            s = !0,
                            this.lastAdIdx = this.currIdx,
                            this.currIdx += 1
                        }
                        r.push(c),
                        this.currIdx += 1
                    }
                    if (t) {
                        var h = e.slice(t);
                        r.push.apply(r, (0,
                        a._)(h))
                    }
                    return {
                        itemsWithAds: r,
                        insertedAd: s
                    }
                }
            }]),
            e
        }()
          , y = {
            insertBoxinlineAds: function(e) {
                var t = [];
                return e.forEach(function(e, i) {
                    i && !(i % 4) && t.push({
                        type: "ad",
                        slot: "boxinline",
                        key: "boxinline:".concat(i),
                        offsetViewport: 50
                    }),
                    t.push(e)
                }),
                t
            }
        }
    }
    ,
    24613: e => {
        e.exports = {
            chatCartByline: "styles_chatCartByline__mUVLh",
            inner: "styles_inner__C2T4Z",
            authors: "styles_authors__I__zM",
            "live-dot-blink": "styles_live-dot-blink__H7U_9",
            "fade-in": "styles_fade-in__1NgRL",
            "expand-in": "styles_expand-in__KNuB5",
            "chatblog-expand-in": "styles_chatblog-expand-in__K7KVH"
        }
    }
    ,
    25218: e => {
        e.exports = {
            chatCardByline: "styles_chatCardByline___KHac",
            "chatCardByline--name": "styles_chatCardByline--name__XxOL0",
            "chatCardByline--bio": "styles_chatCardByline--bio__moCJl",
            "chatCardByline--shortbio": "styles_chatCardByline--shortbio__fVvwi",
            "live-dot-blink": "styles_live-dot-blink__g_r_Y",
            "fade-in": "styles_fade-in__8zvBt",
            "expand-in": "styles_expand-in__QwkDi",
            "chatblog-expand-in": "styles_chatblog-expand-in__PSah_"
        }
    }
    ,
    27411: e => {
        e.exports = {
            chatCardBylineThumbnail: "styles_chatCardBylineThumbnail__HWngo",
            bylineThumbnail: "styles_bylineThumbnail__mMxrB",
            "live-dot-blink": "styles_live-dot-blink__NEgHh",
            "fade-in": "styles_fade-in__82OTX",
            "expand-in": "styles_expand-in__Zax_D",
            "chatblog-expand-in": "styles_chatblog-expand-in__e_RJV"
        }
    }
    ,
    28681: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjMkEyQTJBIi8+CjxyZWN0IHg9IjguNDE0MDYiIHk9IjciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA4LjQxNDA2IDcpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyMy45NzA3IiB5PSI3IiB3aWR0aD0iMiIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMjMuOTcwNyA3KSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
    }
    ,
    31613: e => {
        e.exports = {
            cardByline: "styles_cardByline__xytla",
            bylineThumbnail: "styles_bylineThumbnail__WW6mJ",
            inner: "styles_inner__k_XvF",
            authors: "styles_authors__d6hSl",
            "live-dot-blink": "styles_live-dot-blink__jVMBT",
            "fade-in": "styles_fade-in__dDxSI",
            "expand-in": "styles_expand-in__L_npQ",
            "chatblog-expand-in": "styles_chatblog-expand-in__Qo3Qw"
        }
    }
    ,
    34443: e => {
        e.exports = {
            title: "styles_title__h6aEM",
            titleLink: "styles_titleLink__npNIM",
            "live-dot-blink": "styles_live-dot-blink__WR5Yb",
            "fade-in": "styles_fade-in__tFTxB",
            "expand-in": "styles_expand-in__bdclx",
            "chatblog-expand-in": "styles_chatblog-expand-in__B2J93"
        }
    }
    ,
    35152: e => {
        e.exports = {
            pill: "styles_pill__2ebsZ",
            countLabel: "styles_countLabel__x4Q4O",
            backToTopIcon: "styles_backToTopIcon__vmbl5",
            "live-dot-blink": "styles_live-dot-blink__eYoHY",
            "fade-in": "styles_fade-in__gr6Xl",
            "expand-in": "styles_expand-in__JFeHx",
            "chatblog-expand-in": "styles_chatblog-expand-in__47N4d"
        }
    }
    ,
    35513: e => {
        e.exports = {
            expandableJumpLinkList: "styles_expandableJumpLinkList__1GJg8",
            expandableJumpLinkList__item: "styles_expandableJumpLinkList__item__K6k_4",
            "expandableJumpLinkList__item--hidden": "styles_expandableJumpLinkList__item--hidden__774Yx",
            expandableJumpLinkList__itemLink: "styles_expandableJumpLinkList__itemLink__Ud8cp",
            expandableJumpLinkList__activeItem: "styles_expandableJumpLinkList__activeItem__pcOuK",
            "expandableJumpLinkList__Container--NoExpand": "styles_expandableJumpLinkList__Container--NoExpand___KRu5",
            expandableJumpLinkList__Affordance: "styles_expandableJumpLinkList__Affordance__dLf78",
            expandableJumpLinkList__Overlay: "styles_expandableJumpLinkList__Overlay___9me0",
            expandableJumpLinkList__Button: "styles_expandableJumpLinkList__Button__QHcXz",
            icon: "styles_icon__pfqb8",
            iconDown: "styles_iconDown__SgXEv",
            iconUp: "styles_iconUp__iQyWy",
            "live-dot-blink": "styles_live-dot-blink__4yyT7",
            "fade-in": "styles_fade-in__C1jCJ",
            "expand-in": "styles_expand-in__awiJm",
            "chatblog-expand-in": "styles_chatblog-expand-in__ZtTqy"
        }
    }
    ,
    40838: (e, t, i) => {
        "use strict";
        i.d(t, {
            H: () => S
        });
        var n = i(37876)
          , a = i(14232)
          , r = i(15039)
          , l = i.n(r)
          , s = i(95062)
          , o = i.n(s)
          , d = i(61702)
          , c = i(13560)
          , u = i(20294)
          , p = i(82780)
          , h = i.n(p)
          , _ = i(88757)
          , v = i(87992)
          , m = i(60916)
          , g = i(92684)
          , b = i(92196)
          , f = i.n(b);
        function y() {
            return (0,
            n.jsxs)("div", {
                className: f().head,
                children: [(0,
                n.jsx)("h3", {
                    className: f().title,
                    children: "MSNBC Daily"
                }), (0,
                n.jsx)("p", {
                    className: f().description,
                    children: "Catch up on more stories from MSNBC Daily featuring the top voices and opinions driving today's conversation"
                })]
            })
        }
        var x = i(45526)
          , k = i(97247)
          , j = i(69605)
          , C = i(90327);
        function L(e) {
            var t = e.headline
              , i = e.index
              , a = e.unibrow
              , r = e.url
              , s = e.active
              , o = void 0 !== s && s
              , d = e.publicationName
              , c = e.type
              , u = e.icid
              , p = void 0 === u ? null : u
              , h = "custom" === (void 0 === c ? null : c)
              , _ = h ? "_blank" : "_top";
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("div", {
                    children: (0,
                    n.jsx)(j.y, {
                        active: o,
                        children: i
                    })
                }), (0,
                n.jsxs)("div", {
                    className: f().info,
                    children: [o && (0,
                    n.jsx)("div", {
                        "data-testid": "active",
                        className: f().active,
                        children: "Currently Reading"
                    }), (0,
                    n.jsx)(C.d, {
                        className: l()(f().unibrow, (0,
                        x._)({}, f().isActive, o)),
                        size: "h4",
                        target: _,
                        unibrow: a,
                        icid: p
                    }), (0,
                    n.jsx)(k.A, {
                        className: f().title,
                        target: _,
                        to: r,
                        icid: p,
                        children: t
                    }), h && (0,
                    n.jsxs)(k.A, {
                        className: f().externalLink,
                        target: _,
                        to: r,
                        icid: p,
                        children: [void 0 === d ? null : d, (0,
                        n.jsx)("span", {
                            className: "icon icon-external-link-arrow"
                        })]
                    })]
                })]
            })
        }
        L.propTypes = {
            active: o().bool,
            headline: o().string.isRequired,
            index: o().number.isRequired,
            publicationName: o().string,
            type: o().string,
            unibrow: d.Wp.isRequired,
            url: o().string.isRequired,
            icid: o().string
        };
        var w = i(43526)
          , I = i(10616)
          , A = i(58517);
        function N() {
            var e = (0,
            a.useContext)(v.kj)
              , t = (0,
            u._)((0,
            w.s)("curation/slug/msnbc".concat("")), 3)
              , i = t[0]
              , r = t[1]
              , s = t[2];
            if (!0 === r || !0 === s || !i)
                return null;
            var o = h()(i, ["curation"], {})
              , d = (0,
            _.JL)(o, "msnbcDailyArticles");
            if (!Array.isArray(d) || !d.length)
                return null;
            var c = d[0]
              , p = h()(c, "items", []).filter(function(e) {
                return e
            }).slice(0, 6)
              , b = (0,
            I.$h)({
                componentName: "msnbc-daily-recirc",
                pageRegion: "article-sidebar",
                componentTitle: "MSNBC Daily"
            });
            return (0,
            n.jsx)("div", {
                className: l()("layout-grid-container", f().msnbcDailyRecircEnd),
                "data-activity-map": b,
                children: (0,
                n.jsxs)("div", {
                    className: "layout-grid-item grid-col-12",
                    children: [(0,
                    n.jsx)("div", {
                        className: "layout-subgrid-container",
                        children: (0,
                        n.jsx)("div", {
                            className: "layout-subgrid-item grid-col-12 grid-col-9-l grid-col-8-xl",
                            children: (0,
                            n.jsx)(y, {})
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: f().borderTop
                    }), (0,
                    n.jsx)("div", {
                        className: l()(f().body, "layout-subgrid-container"),
                        children: p.map(function(t, i) {
                            var a = (0,
                            m._H)(t)
                              , r = (0,
                            A.P)(h()(a, "url"), "recircArticleBottom")
                              , s = h()(a, "unibrow");
                            return (0,
                            n.jsx)("div", {
                                className: l()(f().item, "layout-subgrid-item grid-col-12 grid-col-4-m"),
                                children: (0,
                                n.jsx)(L, {
                                    active: t.id === e.id,
                                    headline: a.headline,
                                    index: i + 1,
                                    publicationName: h()(a, ["metadata", "publicationName"], null),
                                    type: a.type,
                                    unibrow: s,
                                    url: null == r ? void 0 : r.url,
                                    icid: null == r ? void 0 : r.icid
                                })
                            }, t.id)
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: f().borderBottom,
                        children: (0,
                        n.jsx)(g.V, {})
                    })]
                })
            })
        }
        var T = i(8389);
        function S(e) {
            var t = e.vertical
              , i = e.article
              , a = e.currentPath
              , r = i.taxonomy
              , s = i.presentation.hideRecommendations
              , o = (0,
            c.Sk)(r)
              , d = !s && (o.includes(c._U.MSNBC.VERTICAL) || o.includes("nbcnews/section/msnbc")) && o.includes(c._U.MSNBC.SECTION_OPINION);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [d && (0,
                n.jsx)(N, {
                    pageRegion: "article-sidebar"
                }), !s && "select" === t && (0,
                n.jsx)(T.A, {
                    isRightRail: !0,
                    currentPath: a,
                    isSelect: !0,
                    additionalClasses: l()("related--select-foot"),
                    url: i.url.primary,
                    pageRegion: "article-sidebar"
                })]
            })
        }
        S.propTypes = {
            article: d.jZ.isRequired,
            currentPath: o().string.isRequired,
            vertical: o().string.isRequired
        }
    }
    ,
    41907: e => {
        e.exports = {
            msnbcDailyCount: "styles_msnbcDailyCount__F54En",
            inner: "styles_inner__09iKY",
            "live-dot-blink": "styles_live-dot-blink__k8Y_b",
            "fade-in": "styles_fade-in__n_m0z",
            "expand-in": "styles_expand-in__5SzoX",
            "chatblog-expand-in": "styles_chatblog-expand-in__K2xFp"
        }
    }
    ,
    45173: () => {}
    ,
    46410: e => {
        e.exports = {
            cardTimestamp: "styles_cardTimestamp__dAe6N",
            eventEnded: "styles_eventEnded___hyeJ",
            noWrap: "styles_noWrap__L_bF5",
            "live-dot-blink": "styles_live-dot-blink__4UQgk",
            "fade-in": "styles_fade-in__PpYpm",
            "expand-in": "styles_expand-in__flD_y",
            "chatblog-expand-in": "styles_chatblog-expand-in__HjDUE"
        }
    }
    ,
    47980: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => tH
        });
        var n = i(67684)
          , a = i(20294)
          , r = i(85993)
          , l = i(37876)
          , s = i(14232)
          , o = i(48011)
          , d = i(15039)
          , c = i.n(d)
          , u = i(82780)
          , p = i.n(u)
          , h = i(34846)
          , _ = i(51845)
          , v = i(20309)
          , m = i(10616)
          , g = i(20913)
          , b = i(96491)
          , f = i(89903)
          , y = i(29419)
          , x = i(61623)
          , k = i(66342)
          , j = i(1658)
          , C = i(20268)
          , L = i(41224)
          , w = i(62701)
          , I = i(21596)
          , A = i(61702)
          , N = i(87663)
          , T = i(86130)
          , S = i(86999)
          , E = i(27875)
          , M = i(81481)
          , R = i(87992)
          , P = i(81737)
          , B = i(77170)
          , O = i.n(B);
        i(45173);
        var F = "mbt_backtotop_click"
          , D = function() {
            var e = (0,
            s.useContext)(R.O1)
              , t = (0,
            s.useRef)(null)
              , i = (0,
            s.useRef)(null)
              , n = (0,
            a._)((0,
            s.useState)(!1), 2)
              , r = n[0]
              , o = n[1];
            return (0,
            s.useEffect)(function() {
                void 0 !== _.stub && (0,
                _.stub)("register", F, {
                    allowDuplicate: !0
                })
            }, []),
            (0,
            s.useEffect)(function() {
                t.current = window.scrollY;
                var e = O()(function() {
                    var e = window.scrollY;
                    e > t.current && o(!0),
                    e < t.current && o(!1),
                    t.current = e
                });
                return window.addEventListener("scroll", e),
                function() {
                    window.removeEventListener("scroll", e),
                    clearTimeout(i.current)
                }
            }, []),
            (0,
            l.jsx)("button", {
                className: c()("back-to-top-button", {
                    isVisible: !r
                }),
                onClick: function(t) {
                    t.preventDefault(),
                    void 0 !== _.stub && (0,
                    _.stub)("track", F, {
                        breakpoint: M.A.isSorM() ? "mobile" : "desktop",
                        vertical: e
                    }),
                    (0,
                    P.A)(0, 1e3, "easeInOut")
                },
                type: "button",
                children: (0,
                l.jsxs)("svg", {
                    width: "44",
                    height: "44",
                    viewBox: "0 0 44 44",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    l.jsxs)("g", {
                        filter: "url(#back_to_top)",
                        children: [(0,
                        l.jsx)("rect", {
                            x: "0",
                            y: "0",
                            width: "44",
                            height: "44",
                            className: "back-to-top-button__square"
                        }), (0,
                        l.jsxs)("g", {
                            clipPath: "url(#back_to_top_clip)",
                            children: [(0,
                            l.jsx)("path", {
                                d: "M31 44.417V23.5466",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "square",
                                strokeLinejoin: "round",
                                transform: "translate(-8.5, -9.5)"
                            }), (0,
                            l.jsx)("path", {
                                d: "M20.5642 32.4912L30.9994 22.056L41.4346 32.4912",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "square",
                                transform: "translate(-8.5, -8.9)"
                            }), (0,
                            l.jsx)("rect", {
                                x: "7.0928",
                                y: "7.0928",
                                width: "29.8148",
                                height: "1.49074",
                                fill: "white"
                            })]
                        })]
                    }), (0,
                    l.jsxs)("defs", {
                        children: [(0,
                        l.jsxs)("filter", {
                            id: "back_to_top",
                            x: "0",
                            y: "0",
                            width: "44",
                            height: "44",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0,
                            l.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0,
                            l.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            }), (0,
                            l.jsx)("feOffset", {}), (0,
                            l.jsx)("feGaussianBlur", {
                                stdDeviation: "5"
                            }), (0,
                            l.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }), (0,
                            l.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow"
                            }), (0,
                            l.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow",
                                result: "shape"
                            })]
                        }), (0,
                        l.jsx)("clipPath", {
                            id: "back_to_top_clip",
                            children: (0,
                            l.jsx)("rect", {
                                width: "44",
                                height: "44",
                                fill: "white"
                            })
                        })]
                    })]
                })
            })
        }
          , U = i(40625)
          , z = i(45526)
          , H = i(21737)
          , W = i(95062)
          , q = i.n(W)
          , V = i(12264)
          , J = i(64759)
          , Y = i(56790)
          , Z = i(2168)
          , G = i(28681)
          , Q = i.n(G)
          , K = i(67960)
          , X = i.n(K);
        i(60325);
        var $ = function(e) {
            var t = e.socialUrl
              , i = e.primaryHeadline
              , n = e.icid
              , r = e.id
              , o = void 0 === r ? "" : r
              , d = (0,
            a._)(s.useState(!1), 2)
              , u = d[0]
              , p = d[1]
              , h = o ? "share-list-".concat(o) : void 0;
            return (0,
            l.jsxs)("div", {
                className: "share-list-container df",
                children: [(0,
                l.jsx)("div", {
                    className: "share-list__wrapper",
                    "data-testid": "social-share-icon-list",
                    id: h,
                    "aria-hidden": !u,
                    inert: u ? void 0 : "true",
                    children: (0,
                    l.jsx)("div", {
                        className: c()("share-list__icons", {
                            showSocialShare: u
                        }),
                        children: (0,
                        l.jsx)(Z.w, {
                            url: t,
                            headline: void 0 === i ? "" : i,
                            actions: {
                                pinterest: !1,
                                save: !1
                            },
                            icid: void 0 === n ? "" : n,
                            trackingEventName: "mbt_navbar_socialShare",
                            pageRegion: "blog-card",
                            useAriaLabelHeadline: !0
                        })
                    })
                }), (0,
                l.jsxs)("button", {
                    className: "social-share-button",
                    type: "button",
                    onClick: function() {
                        return p(!u)
                    },
                    "data-testid": "chat-card-social-share-button",
                    "aria-expanded": u,
                    "aria-label": "".concat(u ? "close" : "open", " social share icon list"),
                    "aria-controls": h,
                    children: [(0,
                    l.jsx)("span", {
                        className: c()("share-btn-txt", {
                            showSocialShare: u
                        }),
                        children: "Share"
                    }), u ? (0,
                    l.jsx)("img", {
                        alt: "close icon",
                        src: Q(),
                        height: 28,
                        width: 28
                    }) : (0,
                    l.jsx)(l.Fragment, {
                        children: (0,
                        l.jsx)("img", {
                            alt: "social share icon trigger",
                            src: X(),
                            height: 30,
                            width: 30
                        })
                    })]
                })]
            })
        };
        $.propTypes = {
            socialUrl: q().string.isRequired,
            primaryHeadline: q().string,
            icid: q().string,
            id: q().string
        };
        var ee = i(56766)
          , et = i.n(ee)
          , ei = function(e) {
            var t = e.headline;
            return (0,
            l.jsx)("h2", {
                className: c()(et().chartCardHeadline),
                "data-testid": "chat-card-headline",
                children: void 0 === t ? "" : t
            })
        };
        ei.propTypes = {
            headline: q().string
        };
        var en = i(28533)
          , ea = i(50642)
          , er = i.n(ea)
          , el = function(e) {
            var t = e.date
              , i = void 0 === t ? null : t
              , n = e.isLive;
            return (0,
            l.jsx)("div", {
                className: c()(er().chatCardTimestamp, (0,
                z._)({}, er().eventEnded, !(void 0 !== n && n))),
                children: i && (0,
                l.jsx)(en.f, {
                    dateString: i.publishedAt,
                    chatStyle: !0
                })
            })
        };
        el.propTypes = {
            date: q().shape({
                createdAt: q().string,
                modifiedAt: q().string,
                publishedAt: q().string
            }),
            isLive: q().bool
        };
        var es = i(69527)
          , eo = i(77328)
          , ed = i.n(eo)
          , ec = i(67793)
          , eu = i(97247)
          , ep = i(25218)
          , eh = i.n(ep)
          , e_ = "chatCardByline"
          , ev = function(e) {
            var t = e.position
              , i = e.person
              , n = void 0 === i ? {} : i
              , a = e.additionalClasses
              , r = e.showShortBio
              , s = e.isLinked
              , o = void 0 !== s && s
              , d = p()(n, "name", null)
              , u = p()(n, "liveBlogShortBio", null)
              , h = (void 0 === r || r) && u;
            if (!d)
                return null;
            var _ = p()(n, ["url", "primary"], null)
              , v = d.trim()
              , m = (0,
            l.jsx)("span", {
                className: c()(eh()[e_], void 0 === a ? "" : a),
                "data-testid": "".concat(e_, "-name"),
                children: (0,
                l.jsxs)("span", {
                    className: eh()["".concat(e_, "--bio")],
                    children: [(0,
                    l.jsx)("span", {
                        className: eh()["".concat(e_, "--name")],
                        children: (0,
                        l.jsx)(eu.H, {
                            href: o ? _ : void 0,
                            tabIndex: o ? -1 : void 0,
                            children: v
                        })
                    }), h && (0,
                    l.jsx)("span", {
                        className: eh()["".concat(e_, "--shortbio")],
                        children: u
                    })]
                })
            });
            return d.startsWith("<component") && (m = (0,
            ec.A)(d)),
            (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(ed(), {
                    children: (0,
                    l.jsx)("meta", {
                        name: "branch:deeplink:authorName".concat(t),
                        content: v
                    })
                }), m]
            })
        };
        ev.propTypes = {
            person: A.MV,
            additionalClasses: q().string,
            position: q().number.isRequired,
            showShortBio: q().bool,
            isLinked: q().bool
        };
        var em = i(46629)
          , eg = i(27411)
          , eb = i.n(eg);
        function ef(e) {
            var t = e.position
              , i = e.isLinked
              , n = e.key
              , a = e.author
              , r = void 0 === a ? null : a;
            return r ? (0,
            l.jsx)("div", {
                className: eb().chatCardBylineThumbnail,
                "data-testid": "chat-card-byline-thumbnail",
                children: (0,
                l.jsx)(em.oQ, {
                    person: r,
                    position: t,
                    chatStyle: !0,
                    additionalClasses: eb().bylineThumbnail,
                    isLinked: void 0 !== i && i
                }, void 0 === n ? null : n)
            }) : null
        }
        ef.propTypes = {
            author: A.cy,
            position: q().number.isRequired,
            isLinked: q().bool,
            key: q().string
        };
        var ey = i(24613)
          , ex = i.n(ey)
          , ek = function(e) {
            var t = e.position
              , i = e.author
              , n = e.classNames;
            if (!i)
                return null;
            var a = p()(i, "person", i)
              , r = p()(i, "person", i)
              , s = p()(r, "name", null)
              , o = p()(r, "url.primary", null)
              , d = (0,
            es.HZ)(s)
              , u = (0,
            l.jsxs)("div", {
                className: c()(ex().chatCartByline, n),
                "data-testid": "chat-card-byline-container",
                children: [(0,
                l.jsx)(ef, {
                    author: a,
                    position: t,
                    isLinked: !1
                }, "byline-thumbnail".concat(i.id)), (0,
                l.jsx)("div", {
                    className: ex().inner,
                    children: (0,
                    l.jsx)("p", {
                        className: ex().authors,
                        "data-testid": "chat-card-byline",
                        children: (0,
                        l.jsx)(ev, {
                            person: r,
                            additionalClasses: ex().chatBlogBylineName,
                            position: t,
                            isLinked: !1
                        }, d)
                    })
                })]
            });
            return o ? (0,
            l.jsx)("a", {
                href: o,
                className: c()(ex().bylineLink, n),
                "data-testid": "chat-card-byline-link",
                children: u
            }) : u
        };
        ek.propTypes = {
            author: A.cy || A.MV,
            position: q().number.isRequired,
            classNames: q().string
        };
        var ej = i(48984)
          , eC = i.n(ej);
        function eL(e) {
            var t = e.count
              , i = void 0 === t ? null : t;
            return null === i ? null : (0,
            l.jsx)("div", {
                className: eC().countChip,
                "data-testid": "chat-card-author-count",
                children: "+".concat(i)
            })
        }
        function ew(e) {
            var t = e.index
              , i = e.author
              , n = void 0 === i ? null : i
              , a = e.totalAuthorCount
              , r = void 0 === a ? null : a;
            return null === n || null === r ? null : (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(ev, {
                    person: n,
                    position: t + 1,
                    chatStyle: !0,
                    showShortBio: 1 === r && 0 === t
                }, "byline-names-name".concat(n.id)), t !== r - 2 && t !== r - 1 && (0,
                l.jsx)(l.Fragment, {
                    children: ", "
                }), t === r - 2 && (0,
                l.jsx)(l.Fragment, {
                    children: " and "
                })]
            })
        }
        eL.propTypes = {
            count: q().number
        },
        ew.propTypes = {
            author: A.cy,
            index: q().number.isRequired,
            totalAuthorCount: q().number
        };
        var eI = i(75756)
          , eA = i.n(eI);
        function eN(e) {
            var t = e.text
              , i = void 0 === t ? "" : t
              , n = e.className;
            return i ? (0,
            l.jsxs)("div", {
                className: c()(eA().reportingFrom, void 0 === n ? "" : n),
                "data-testid": "chat-card-reporting-from",
                children: [(0,
                l.jsx)("svg", {
                    "aria-hidden": !0,
                    viewBox: "0 0 9 12",
                    className: eA().icon,
                    width: "9",
                    height: "12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0,
                    l.jsx)("path", {
                        d: "m4.5 6 .7-.3.2-.7a1 1 0 0 0-.2-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .2 0 .5.3.7l.7.2Zm0 4.6c1.1-1 2-2 2.7-3 .7-1 1-1.8 1-2.6 0-1-.4-2-1-2.7a4 4 0 0 0-2.7-1c-1.1 0-2 .3-2.7 1C1.1 3 .8 4 .8 5c0 .8.3 1.6 1 2.6.6 1 1.5 2 2.7 3Zm0 1A19.3 19.3 0 0 1 1 8.1C.4 7 0 6 0 5c0-1.3.4-2.4 1.2-3.3C2.1 1 3.2.5 4.5.5c1.3 0 2.3.4 3.2 1.3A4.9 4.9 0 0 1 7.9 8c-.8 1.1-2 2.3-3.4 3.6Z"
                    })
                }), (0,
                l.jsx)("p", {
                    className: c()(eA().text, "f2 fw3 mb0"),
                    children: i
                })]
            }) : null
        }
        eN.propTypes = {
            text: q().string,
            className: q().string
        };
        var eT = i(17533)
          , eS = i.n(eT)
          , eE = {
            FACT_CHECK: "Fact Check"
        };
        function eM(e) {
            var t = e.typeEnum
              , i = eE[void 0 === t ? "" : t];
            return i ? (0,
            l.jsx)("div", {
                className: c()(eS().chatCardEyebrow, "df items-center ttu"),
                children: i
            }) : null
        }
        eM.propTypes = {
            typeEnum: q().oneOf(Object.keys(eE))
        };
        var eR = i(13101)
          , eP = i.n(eR)
          , eB = i(37781);
        function eO(e) {
            var t = e.heading
              , i = void 0 === t ? "" : t
              , n = e.bodyItems
              , a = e.className
              , r = e.article
              , s = e.isChromeless;
            return (0,
            l.jsxs)("div", {
                className: void 0 === a ? "" : a,
                children: [i && (0,
                l.jsx)(eB._, {
                    children: i
                }), !!A.OC.length && (0,
                Y.v)({
                    bodyItems: void 0 === n ? [] : n,
                    article: r,
                    isChromeless: void 0 !== s && s
                })]
            })
        }
        eO.propTypes = {
            heading: q().string,
            bodyItems: A.OC,
            className: q().string,
            isChromeless: q().bool,
            article: A.jZ.isRequired
        };
        var eF = i(89068)
          , eD = i.n(eF)
          , eU = {
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
        function ez(e) {
            var t = e.id
              , i = void 0 === t ? "" : t
              , n = e.heading
              , a = e.bodyItems
              , r = void 0 === a ? [] : a;
            return (null == r ? void 0 : r.length) ? (0,
            l.jsxs)("footer", {
                className: eD().citations,
                children: [(0,
                l.jsx)("h3", {
                    style: eU,
                    children: void 0 === n ? "Blog Post Citations" : n
                }), r.map(function(e) {
                    var t = e.type
                      , n = e.element
                      , a = e.html;
                    return "markup" !== t ? null : (0,
                    l.jsx)(n, {
                        dangerouslySetInnerHTML: {
                            __html: a.replace(/href/g, "target='_blank' rel='noopener noreferrer' href")
                        }
                    }, "".concat(i, "-citation-element"))
                })]
            }) : null
        }
        function eH(e) {
            var t, i, n, a = e.id, r = e.classNames, s = e.factCheckContent, o = void 0 === s ? null : s, d = e.isChromeless, u = void 0 !== d && d, p = e.article;
            if (!o)
                return null;
            var h = o.verdict
              , _ = o.analysis
              , v = o.citations
              , m = !!(null == h ? void 0 : null === (t = h.markupAndEmbeds) || void 0 === t ? void 0 : t.length)
              , g = !!(null == _ ? void 0 : null === (i = _.markupAndEmbeds) || void 0 === i ? void 0 : i.length)
              , b = !!(null == v ? void 0 : null === (n = v.markupAndEmbeds) || void 0 === n ? void 0 : n.length);
            return m || g || b ? (0,
            l.jsxs)("div", {
                className: c()(eD().factCheck, void 0 === r ? "" : r),
                "data-testid": "chat-card-fact-check",
                children: [m && (0,
                l.jsx)(eO, {
                    heading: "Verdict",
                    bodyItems: h.markupAndEmbeds,
                    isChromeless: u,
                    article: p
                }), g && (0,
                l.jsx)(eO, {
                    heading: "Analysis",
                    bodyItems: _.markupAndEmbeds,
                    isChromeless: u,
                    article: p
                }), b && (0,
                l.jsx)(ez, {
                    id: void 0 === a ? "" : a,
                    bodyItems: v.markupAndEmbeds
                })]
            }) : null
        }
        ez.propTypes = {
            id: q().string,
            heading: q().string,
            bodyItems: A.OC
        },
        eH.propTypes = {
            id: q().string,
            classNames: q().string,
            isChromeless: q().bool,
            factCheckContent: q().shape({
                analysis: A.OC,
                citations: A.OC,
                verdict: A.OC
            }),
            article: A.jZ
        };
        var eW = {
            display: "inline-block",
            position: "absolute",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            height: 1,
            width: 1,
            margin: -1,
            padding: 0,
            border: 0
        }
          , eq = function(e) {
            var t, i, n = e.cardType, r = e.article, o = e.authors, d = void 0 === o ? [] : o, u = e.content, p = u.markupAndEmbeds, h = u.visibleMarkupAndEmbeds, _ = u.hiddenMarkupAndEmbeds, v = u.hasShowMoreBreakpoint, m = e.date, g = e.headline.primary, b = e.isHeadlineHidden, f = e.id, y = e.path, x = e.cardData, k = e.socialUrl, j = e.className, C = e.parentStyle, L = e.reportingFrom, w = void 0 === L ? null : L, I = e.factCheckContent, A = void 0 === I ? null : I, N = e.presentation, T = e.isChromeless, S = void 0 !== T && T, E = (0,
            s.useContext)(R._b).isLive, M = (0,
            s.useContext)(R.O1), P = (0,
            a._)((0,
            s.useState)(!1), 2), B = P[0], O = P[1], F = s.useRef(null), D = s.useRef(null), U = s.useRef(null), H = (0,
            a._)(s.useState(!1), 2), W = H[0], q = H[1], V = c()(eP()["chat-blog-card"], "isReply" === j && eP().isReply, "article-body__content", "w-100 mh0 fn", C);
            (0,
            s.useEffect)(function() {
                var e = function(e) {
                    e.composedPath().includes(F.current) || e.composedPath().includes(D.current) || O(!1)
                };
                return window.addEventListener("touchend", e),
                function() {
                    window.removeEventListener("touchend", e)
                }
            }, []),
            (0,
            s.useEffect)(function() {
                W && U.current && U.current.focus()
            }, [W]);
            var Z = null !== (i = null == d ? void 0 : d.length) && void 0 !== i ? i : 0;
            return (0,
            l.jsxs)("div", {
                className: V,
                id: f,
                "data-testid": "chat-card-container",
                children: [(0,
                l.jsx)(eM, {
                    typeEnum: null == N ? void 0 : N.style
                }), (0,
                l.jsxs)("div", {
                    className: c()(eP()["time-stamp-social-share-container"], "isReply" === j ? "pb1" : "pv1"),
                    children: [m && (0,
                    l.jsx)(el, {
                        date: m,
                        isLive: E
                    }), "isReply" !== j && (0,
                    l.jsx)($, {
                        vertical: M,
                        primaryHeadline: g,
                        socialUrl: k,
                        icid: "ed_npd_nn_nn_np_liveblog",
                        id: f
                    })]
                }), !(void 0 !== b && b) && g && (0,
                l.jsx)(l.Fragment, {
                    children: (0,
                    l.jsx)(ei, {
                        headline: g
                    })
                }), Array.isArray(d) && Z > 0 && (0,
                l.jsxs)("div", {
                    className: c()(eP()["authors-container"], w ? "mb2" : "mb3"),
                    "data-testid": "chat-card-authors-container",
                    children: [1 === Z && (0,
                    l.jsx)(ek, {
                        author: d[0],
                        position: 1
                    }, "byline-".concat(null === (t = d[0]) || void 0 === t ? void 0 : t.id)), Z > 1 && (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsxs)("div", {
                            className: c()(eP()["author-thumbnails"], (0,
                            z._)({}, eP().isTapped, B)),
                            onTouchEnd: function(e) {
                                e.nativeEvent.composedPath().includes(D.current) || O(!B)
                            },
                            ref: F,
                            "data-testid": "author-thumbnails",
                            children: [d.map(function(e, t) {
                                return (0,
                                l.jsx)(s.Fragment, {
                                    children: 2 === Z ? (0,
                                    l.jsx)(ef, {
                                        author: e,
                                        position: t + 1
                                    }, "bylinethumbnail-".concat(e.id)) : 0 === t && (0,
                                    l.jsx)(ef, {
                                        author: e,
                                        position: t + 1
                                    }, "bylinethumbnail-".concat(e.id))
                                }, e.id)
                            }), Z > 2 && (0,
                            l.jsx)(l.Fragment, {
                                children: (0,
                                l.jsx)(eL, {
                                    count: Z - 1
                                })
                            }), (0,
                            l.jsx)("div", {
                                className: eP()["author-dropdown"],
                                ref: D,
                                "data-testid": "author-dropdown",
                                children: d.map(function(e, t) {
                                    return (0,
                                    l.jsx)(ek, {
                                        author: e,
                                        position: t + 1,
                                        classNames: eP()["dropdown-item"]
                                    }, "dropdown-".concat(e.id))
                                })
                            })]
                        }), (0,
                        l.jsx)("div", {
                            className: "authors-names",
                            children: d.map(function(e, t) {
                                return (0,
                                l.jsx)(ew, {
                                    author: e,
                                    index: t,
                                    totalAuthorCount: Z
                                }, "bylinenames-".concat(e.id))
                            })
                        })]
                    })]
                }), w && (0,
                l.jsx)(eN, {
                    text: w,
                    className: "mb3"
                }), (0,
                l.jsxs)("div", {
                    "data-icid": "live-blog-card-link",
                    "data-testid": "chat-card-body-container",
                    children: [(0,
                    Y.v)({
                        bodyItems: h || (void 0 === p ? [] : p),
                        path: y,
                        showHiddenMarkupAndEmbeds: W,
                        setShowHiddenMarkupAndEmbeds: q,
                        id: f,
                        headline: g,
                        isChromeless: S,
                        article: r
                    }), A && !v && (0,
                    l.jsx)(eH, {
                        id: f,
                        factCheckContent: A,
                        isChromeless: S,
                        article: r
                    }), W ? (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsxs)("h3", {
                            tabIndex: "-1",
                            ref: U,
                            style: eW,
                            children: [g, ", continued"]
                        }), (0,
                        Y.v)({
                            bodyItems: _,
                            path: y,
                            id: f,
                            headline: g,
                            isChromeless: S,
                            article: r
                        }), (0,
                        l.jsx)(eH, {
                            id: f,
                            factCheckContent: A,
                            isChromeless: S,
                            article: r
                        })]
                    }) : (0,
                    l.jsxs)("div", {
                        id: "".concat(f, "-overflow-content"),
                        className: c()(eP()["hidden-show-more-content"], {
                            dn: !(null == _ ? void 0 : _.length)
                        }),
                        children: [(0,
                        Y.v)({
                            bodyItems: _,
                            path: y,
                            id: f,
                            headline: g,
                            isChromeless: S,
                            article: r
                        }), (0,
                        l.jsx)(eH, {
                            id: f,
                            factCheckContent: A,
                            isChromeless: S,
                            article: r
                        })]
                    }), "VIDEO" === n && (0,
                    l.jsx)(J.A, {
                        video: x
                    })]
                })]
            }, f)
        };
        eq.propTypes = (0,
        n._)({}, A.B0);
        var eV = (0,
        s.memo)(eq)
          , eJ = i(6957)
          , eY = i(34223)
          , eZ = i(23102)
          , eG = i(25628)
          , eQ = i(89933)
          , eK = i(18920)
          , eX = i.n(eK)
          , e$ = function(e) {
            var t, i = e.card, a = e.liveBlogChatRedesign, r = e.index, o = e.isLastCard, d = e.parentArticleCanonicalUrl, c = e.path, u = e.onFirstCardInView, p = e.isChromeless, h = e.article, _ = (0,
            s.useMemo)(function() {
                return "ad" === i.type ? null : (0,
                eG.MQ)(i)
            }, [i]);
            if ("ad" === i.type)
                return (0,
                l.jsx)(S.A, (0,
                w._)((0,
                n._)({}, i), {
                    adClass: "mb8"
                }), i.id);
            var v = !!(null === (t = i.replies) || void 0 === t ? void 0 : t.length)
              , m = (0,
            eQ.modifyIfUrl)(d, function(e) {
                e.pathname = "".concat((0,
                eQ.stripTrailingSlash)(e.pathname), "/").concat(i.id),
                e.hash = "",
                e.searchParams.set("canonicalCard", "true")
            })
              , g = (0,
            l.jsx)(eY.t, {
                errorLogger: L.vV,
                children: a ? (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    s.createElement)(eV, (0,
                    w._)((0,
                    n._)({}, i), {
                        content: _,
                        isLastCard: o,
                        path: c,
                        key: i.id,
                        socialUrl: m,
                        isChromeless: p,
                        article: h
                    })), v && (0,
                    l.jsxs)("div", {
                        children: [(0,
                        l.jsx)("div", {
                            className: eX().repliesCount,
                            children: "".concat(i.replies.length, " ").concat(1 === i.replies.length ? "reply" : "replies")
                        }), (0,
                        l.jsx)("div", {
                            className: eX().replies,
                            children: i.replies.map(function(e) {
                                return (0,
                                s.createElement)(eV, (0,
                                w._)((0,
                                n._)({}, e), {
                                    content: e.content,
                                    isLastCard: o,
                                    path: c,
                                    key: e.id,
                                    socialUrl: m,
                                    isHeadlineHidden: !0,
                                    isShareToolsHidden: !0,
                                    className: "isReply",
                                    parentStyle: eX().hasParent,
                                    isChromeless: p,
                                    article: h
                                }))
                            })
                        })]
                    })]
                }) : (0,
                s.createElement)(V.Z, (0,
                w._)((0,
                n._)({}, i), {
                    content: _,
                    isLastCard: o,
                    path: c,
                    key: i.id,
                    socialUrl: m,
                    isChromeless: p,
                    article: h
                }))
            });
            return 0 === r ? (0,
            l.jsx)(eJ.A, {
                threshold: .5,
                callback: u,
                children: g
            }, "".concat(i.id, "-window-top-observer")) : g
        };
        function e0(e) {
            var t = e.path
              , i = e.activeItems
              , n = e.trueTotalItems
              , a = e.parentArticleCanonicalUrl
              , r = e.onFirstCardInView
              , o = void 0 === r ? function() {}
            : r
              , d = e.isChromeless
              , c = e.article
              , u = (0,
            s.useContext)(R.cq)["live-blog-chat-redesign"]
              , p = eZ.A_.insertBoxinlineAds(void 0 === i ? [] : i)
              , h = 0;
            return p.map(function(e, i) {
                var r = (h += 1) === n;
                return (0,
                l.jsx)(e$, {
                    card: e,
                    isLastCard: r,
                    path: t,
                    liveBlogChatRedesign: u,
                    parentArticleCanonicalUrl: a,
                    onFirstCardInView: o,
                    index: i,
                    isChromeless: d,
                    article: c
                }, e.id || e.key)
            })
        }
        e$.propTypes = {
            card: q().shape(A.B0).isRequired,
            index: q().number.isRequired,
            isLastCard: q().bool.isRequired,
            liveBlogChatRedesign: q().bool.isRequired,
            parentArticleCanonicalUrl: q().string.isRequired,
            path: q().string.isRequired,
            onFirstCardInView: q().func.isRequired,
            isChromeless: q().bool,
            article: A.jZ
        },
        e0.propTypes = {
            activeItems: q().arrayOf(q().shape({})),
            onFirstCardInView: q().func,
            parentArticleCanonicalUrl: q().string,
            path: q().string,
            trueTotalItems: q().number,
            isChromeless: q().bool,
            article: A.jZ
        };
        var e1 = i(77092)
          , e2 = i.n(e1);
        function e3(e) {
            var t = e.additionalClasses
              , i = e.handleClick
              , n = void 0 === i ? Function.prototype : i
              , r = e.isHidden
              , o = (0,
            s.useRef)(null)
              , d = (0,
            s.useRef)(null)
              , u = (0,
            a._)((0,
            s.useState)(!1), 2)
              , p = u[0]
              , h = u[1]
              , _ = (0,
            a._)((0,
            s.useState)(!1), 2)
              , v = _[0]
              , m = _[1];
            return (0,
            s.useEffect)(function() {
                o.current = window.scrollY;
                var e = O()(function() {
                    var e = window.scrollY
                      , t = o.current - e;
                    e > o.current && (h(!0),
                    m(!1)),
                    e < o.current && h(!1),
                    t >= 80 && (m(!0),
                    clearTimeout(d.current),
                    d.current = setTimeout(function() {
                        m(!1)
                    }, 3e3)),
                    o.current = e
                }, 150);
                return window.addEventListener("scroll", e),
                function() {
                    window.removeEventListener("scroll", e),
                    clearTimeout(d.current)
                }
            }, []),
            (0,
            l.jsx)("button", {
                type: "button",
                className: c()(void 0 === t ? null : t, e2().backToTop, e2().hidden, (0,
                z._)({}, e2().isVisible, !p && v && !(void 0 === r || r))),
                onClick: n,
                title: "Back to Top",
                children: (0,
                l.jsxs)("svg", {
                    width: "34",
                    height: "34",
                    viewBox: "0 0 34 34",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    l.jsx)("path", {
                        d: "M17 29.75V9.91667",
                        strokeWidth: "2",
                        strokeLinecap: "square",
                        strokeLinejoin: "round"
                    }), (0,
                    l.jsx)("path", {
                        d: "M7.08317 18.417L16.9998 8.50033L26.9165 18.417",
                        strokeWidth: "2",
                        strokeLinecap: "square"
                    }), (0,
                    l.jsx)("rect", {
                        x: "2.8335",
                        y: "2.83301",
                        width: "28.3333",
                        height: "2.41667"
                    })]
                })
            })
        }
        e3.propTypes = {
            additionalClasses: q().string,
            handleClick: q().func,
            isHidden: q().bool
        },
        i(66092);
        let e4 = function(e) {
            var t = e.loadingMoreCards
              , i = void 0 !== t && t
              , n = e.onClick
              , a = (0,
            (0,
            h.Bd)().t)(i ? "Loading ..." : "Load More Posts");
            return (0,
            l.jsx)("div", {
                className: "df justify-center mt5 tc",
                children: (0,
                l.jsxs)("button", {
                    type: "button",
                    onClick: void 0 === n ? function() {}
                    : n,
                    className: c()("loadMoreButton f4 ttu z-1", {
                        "loadMoreButton--loading": i
                    }),
                    children: [i && (0,
                    l.jsx)("span", {
                        className: "icon icon-peacock mr2"
                    }), a]
                })
            })
        };
        var e6 = i(11806);
        function e9(e) {
            return (0,
            l.jsxs)("svg", (0,
            w._)((0,
            n._)({
                width: "100%",
                height: "100%",
                viewBox: "0 0 17 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {
                children: [(0,
                l.jsxs)("g", {
                    clipPath: "url(#clip0_7608_926)",
                    children: [(0,
                    l.jsx)("path", {
                        d: "M8.5 14L8.5 4.66667",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "square",
                        strokeLinejoin: "round"
                    }), (0,
                    l.jsx)("path", {
                        d: "M3.83341 8.66675L8.50008 4.00008L13.1667 8.66675",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "square"
                    }), (0,
                    l.jsx)("rect", {
                        x: "1.83325",
                        y: "1.33325",
                        width: "13.3333",
                        height: "0.666667",
                        fill: "currentColor"
                    })]
                }), (0,
                l.jsx)("defs", {
                    children: (0,
                    l.jsx)("clipPath", {
                        id: "clip0_7608_926",
                        children: (0,
                        l.jsx)("rect", {
                            width: "16",
                            height: "16",
                            fill: "white",
                            transform: "translate(0.5)"
                        })
                    })
                })]
            }))
        }
        var e7 = i(35152)
          , e8 = i.n(e7);
        function e5(e) {
            var t, i = e.count, n = e.additionalClasses, a = e.handleClick, r = void 0 === a ? Function.prototype : a, o = e.onRef, d = void 0 === o ? Function.prototype : o, u = e.onAnimationEnd, p = void 0 === u ? Function.prototype : u, h = e.liveBlogChatRedesign, _ = void 0 !== h && h, v = s.useRef(null);
            s.useEffect(function() {
                d(v)
            }, [v]),
            t = i >= 10 ? "9+ ".concat(e6.Ay.t("NEW_FEM_PLURAL")) : 1 === i ? "".concat(i, " ").concat(e6.Ay.t("NEW_FEM_SINGULAR")) : "".concat(i || "", " ").concat(e6.Ay.t("NEW_FEM_PLURAL"));
            var m = 1 === i ? e6.Ay.t(_ ? "POST" : "UPDATE") : e6.Ay.t(_ ? "POSTS" : "UPDATES");
            return (0,
            l.jsxs)("button", {
                type: "button",
                className: c()(void 0 === n ? null : n, e8().pill),
                onClick: r,
                ref: v,
                "data-testid": "pill",
                onAnimationEnd: p,
                children: [(0,
                l.jsx)(e9, {
                    className: e8().backToTopIcon
                }), (0,
                l.jsxs)("span", {
                    className: c()("lh-title", e8().countLabel),
                    children: [t, " ", m]
                })]
            })
        }
        e5.propTypes = {
            additionalClasses: q().string,
            count: q().number.isRequired,
            handleClick: q().func,
            onRef: q().func,
            onAnimationEnd: q().func,
            liveBlogChatRedesign: q().bool
        },
        i(74501);
        var te = "liveBlogCards";
        function tt(e) {
            var t, i, n = e.articleCanonicalUrl, r = e.backToTopBtnsAlignDesktop, o = void 0 === r ? "top" : r, d = e.backToTopBtnsAlignMobile, u = void 0 === d ? "top" : d, p = e.isChromeless, h = e.article, _ = (0,
            s.useContext)(R.Pl).path, v = (0,
            a._)((0,
            s.useState)(!1), 2), m = v[0], g = v[1], b = (0,
            a._)((0,
            s.useState)(!1), 2), f = b[0], y = b[1], x = (0,
            a._)((0,
            s.useState)(!1), 2), k = x[0], j = x[1], C = (0,
            s.useRef)(), w = s.useContext(R.cq).liveBlogChatRedesign, I = (0,
            R.a_)(), A = I.activeItems, N = I.isFetchingMoreCardsToLoad, T = I.isMoreCardsAvailable, S = I.makeLatestActive, E = I.countNewItems, M = I.loadMoreCards, B = (0,
            H.ZC)(E);
            (0,
            s.useEffect)(function() {
                E !== B && E >= 2 && j(!0)
            }, [E]);
            var O = (0,
            s.useCallback)(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                ;
                if (m || !C.current || !C.current.getBoundingClientRect)
                    return null;
                g(!0);
                var t = C.current.getBoundingClientRect().top + window.pageYOffset - 170;
                return (0,
                P.A)(t, 1e3, "easeInOut", function() {
                    g(!1),
                    "function" == typeof e && e()
                })
            }, [m])
              , F = (0,
            s.useCallback)(function() {
                O(function() {
                    S()
                })
            }, [O, S])
              , D = (0,
            s.useCallback)(function(e) {
                y((0,
                a._)(e, 1)[0].intersectionRatio >= .5)
            }, [])
              , U = (0,
            l.jsx)(eY.t, {
                errorLogger: L.vV,
                children: (0,
                l.jsx)(e5, {
                    additionalClasses: c()("".concat(te, "__button"), "".concat(te, "__posts-button"), (t = {},
                    (0,
                    z._)(t, "".concat(te, "__posts-button--hidden"), !E),
                    (0,
                    z._)(t, "".concat(te, "__button--hidden"), !E),
                    (0,
                    z._)(t, "".concat(te, "__posts-button--pulse"), k),
                    (0,
                    z._)(t, "".concat(te, "__posts-button--chat-style-redesign"), w),
                    t)),
                    count: E || B,
                    handleClick: F,
                    onAnimationEnd: function() {
                        return j(!1)
                    },
                    liveBlogChatRedesign: w
                })
            })
              , W = E || m || !f
              , q = (0,
            l.jsx)(eY.t, {
                errorLogger: L.vV,
                children: (0,
                l.jsx)(e3, {
                    additionalClasses: "".concat(te, "__button"),
                    handleClick: O,
                    isHidden: W
                })
            })
              , V = "".concat(te, "__scrollUpButtonContainer")
              , J = A.length > 0 && (0,
            l.jsxs)("div", {
                className: c()(V, (i = {},
                (0,
                z._)(i, "".concat(V, "--desktopTop"), "top" === o),
                (0,
                z._)(i, "".concat(V, "--desktopBottom"), "bottom" === o),
                (0,
                z._)(i, "".concat(V, "--mobileTop"), "top" === u),
                (0,
                z._)(i, "".concat(V, "--mobileBottom"), "bottom" === u),
                i)),
                children: [U, q]
            })
              , Y = (0,
            l.jsx)(eY.t, {
                errorLogger: L.vV,
                children: (0,
                l.jsx)(e4, {
                    onClick: function() {
                        return M()
                    },
                    loadingMoreCards: N
                })
            });
            return (0,
            l.jsxs)("div", {
                className: c()("LiveBlog relative", te),
                id: "liveBlogCards",
                ref: C,
                "data-testid": "live-blog-posts",
                children: [(0,
                l.jsx)("div", {
                    className: "cardsContainer",
                    children: (0,
                    l.jsx)(e0, {
                        activeItems: A,
                        onFirstCardInView: D,
                        parentArticleCanonicalUrl: n,
                        path: _,
                        isChromeless: p,
                        article: h
                    })
                }), J, T && Y]
            })
        }
        var ti = i(21410)
          , tn = i(5406)
          , ta = function(e) {
            var t = e.mostPopularStoryListItems;
            return (0,
            s.useContext)(R.cq)["is-most-popular-module-enabled"] && Number.isFinite(null == t ? void 0 : t.length) && !((null == t ? void 0 : t.length) < 3) ? (0,
            l.jsx)("span", {
                "data-testid": "most-popular-list"
            }) : null
        };
        function tr(e) {
            var t = e.bodyClasses;
            return (0,
            R.Jp)()["uni-checkout-well-fargo-banner"] ? (0,
            l.jsxs)("div", {
                className: c()("article-body__section--wells-fargo__banner", void 0 === t ? null : t),
                "data-testid": "wells-fargo-banner",
                children: [(0,
                l.jsx)(eu.A, {
                    href: "https://creditcards.wellsfargo.com/cards/active-cash-view-details/?product_code=CC&subproduct_code=AC&sub_channel=DIS&vendor_code=NB&FPID=0126D7IDF40000&placement_id=DIS_NB_CCD_AC_SHOP_ATL_E&creative_id=NBCUCOMM_E_AC2PER_LM}",
                    target: "_blank",
                    className: "article-body__section--wells-fargo__banner--link",
                    children: (0,
                    l.jsxs)("picture", {
                        children: [(0,
                        l.jsx)("source", {
                            media: "(min-width: 765px)",
                            srcSet: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/WellsFargoDesktopBanner-34908e.png",
                            alt: ""
                        }), (0,
                        l.jsx)("source", {
                            srcSet: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/WellsFargoMobileBanner-3eafcb.png"
                        }), (0,
                        l.jsx)("img", {
                            src: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/WellsFargoDesktopBanner-34908e.png",
                            alt: "Wells Fargo Active Cash - Gane recompensas ilimitadas en efectivo de 2% por cada compra. Publicidad pagada. Se aplican otros t\xe9rminos y condiciones. Aprenda m\xe1s."
                        })]
                    })
                }), (0,
                l.jsx)("img", {
                    width: "0",
                    height: "0",
                    src: "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11924120&rnd=%5bINSERT_CACHEBUSTER_HERE%5d&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
                }), (0,
                l.jsx)("img", {
                    width: "0",
                    height: "0",
                    src: "https://b.videoamp.com/d2/428a9391-3021-48c0-80c2-34fa504f80f1/8749/impression?bwb=310&vpxid=8749"
                }), (0,
                l.jsx)("img", {
                    width: "0",
                    height: "0",
                    src: "https://b.videoamp.com/d2/66eb80aa-e384-4d22-8d2a-86d85f31f37a/8761/impression?bwb=35&vpxid=8761&dnt=false&cevt=TELEMUNDO&us_privacy={{US_PRIVACY_STRING}}"
                })]
            }) : null
        }
        ta.propTypes = {
            mostPopularStoryListItems: q().arrayOf(q().shape({})).isRequired
        },
        i(90260),
        tr.propTypes = {
            bodyClasses: q().string
        };
        var tl = i(26677)
          , ts = function(e, t) {
            if (!e || !t)
                return null;
            var i, a = {
                subType: "twoOneLargeItems",
                type: "relatedArticles",
                items: e.map(function(e) {
                    var t = e.id
                      , i = e.datePublished
                      , n = e.unibrow
                      , a = e.headline
                      , r = e.url
                      , l = e.teaseImage
                      , s = e.alternateTeaseImages
                      , o = e.ecommerceEnabled
                      , d = e.cartVisibility;
                    return {
                        type: "article",
                        id: t || "",
                        item: {
                            datePublished: i || ""
                        },
                        computedValues: {
                            unibrow: n || {},
                            headline: (null == a ? void 0 : a.primary) || "",
                            url: (null == r ? void 0 : r.primary) || "",
                            teaseImage: l || {},
                            alternateTeaseImages: s || [],
                            isShoppable: o && "AVAILABLE_PRODUCTION" === d || !1
                        }
                    }
                }),
                metadata: {
                    title: "Related",
                    showTimestamp: !0
                }
            }, r = (null == t ? void 0 : null === (i = t.taxonomy) || void 0 === i ? void 0 : i.primaryLabel) || t.unibrow;
            return r && (a.metadata = (0,
            w._)((0,
            n._)({}, a.metadata), {
                title: r.name ? "More ".concat(r.name) : "Related",
                seeAllUrl: "/" === r.url.primary ? null : r.url.primary
            })),
            a
        }
          , to = i(69909)
          , td = i.n(to)
          , tc = function(e) {
            var t = e.vertical
              , i = e.relatedArticles
              , n = e.article;
            return (0,
            l.jsx)("div", {
                className: "".concat(td().container, " dn-print related-articles-container"),
                "data-testid": "related-articles",
                children: i && (0,
                l.jsx)(tl.AL, {
                    content: ts(i, n),
                    vertical: t,
                    useAltTitle: "today" === t
                })
            })
        };
        tc.propTypes = {
            relatedArticles: q().arrayOf(A.jZ).isRequired,
            article: A.jZ.isRequired,
            vertical: q().string.isRequired
        };
        var tu = i(94844)
          , tp = i(51355)
          , th = i.n(tp)
          , t_ = function(e) {
            var t = e.embeddedRecipes
              , i = (0,
            a._)((0,
            s.useState)(!1), 2)
              , n = i[0]
              , r = i[1]
              , o = (0,
            a._)((0,
            s.useState)(!1), 2)
              , d = o[0]
              , u = o[1]
              , p = (0,
            s.useRef)(null)
              , h = (0,
            s.useCallback)(function() {
                var e = p.current;
                r(e.scrollHeight > e.clientHeight)
            }, [])
              , _ = (0,
            s.useCallback)(function() {
                var e = p.current
                  , t = e.scrollTop
                  , i = e.scrollHeight;
                u(t + e.clientHeight >= i - 1)
            }, []);
            return (0,
            s.useEffect)(function() {
                h();
                var e = p.current;
                return e.addEventListener("scroll", _),
                function() {
                    e.removeEventListener("scroll", _)
                }
            }, [h, _]),
            (0,
            l.jsx)("div", {
                className: c()(th().wrapper, n && !d ? th().fade : ""),
                "data-activity-map": "featured-recipes",
                "data-testid": "featuredRecipes",
                children: (0,
                l.jsxs)("div", {
                    className: th().textContent,
                    ref: p,
                    "data-testid": "recipeText",
                    children: [(0,
                    l.jsx)("h1", {
                        className: th().header,
                        children: "Recipes Featured in this Article"
                    }), (0,
                    l.jsx)("ul", {
                        children: (void 0 === t ? [] : t).map(function(e) {
                            return (0,
                            l.jsxs)("li", {
                                className: th().listItem,
                                children: [(0,
                                l.jsx)(tu.e, {
                                    contentId: e.recipe.id,
                                    contentType: "recipe",
                                    additionalClasses: th().save
                                }), (0,
                                l.jsx)(eu.A, {
                                    className: th().link,
                                    to: e.recipe.url.primary,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: e.recipe.headline.primary
                                })]
                            }, e.recipe.id)
                        })
                    })]
                })
            })
        };
        t_.propTypes = {
            embeddedRecipes: q().arrayOf(q().shape({}))
        };
        var tv = i(62297)
          , tm = i(13560)
          , tg = i(78804)
          , tb = i(8964)
          , tf = i(86029)
          , ty = i(58666)
          , tx = i(40838)
          , tk = i(19304)
          , tj = i(16997)
          , tC = i(7940)
          , tL = i(94396)
          , tw = i(73548)
          , tI = function(e) {
            var t = e.bodyClasses
              , i = e.nativeAd
              , n = e.source
              , a = e.article;
            return (0,
            x.Bg)(a) ? null : (0,
            l.jsx)("div", {
                className: "article-body__section",
                children: (0,
                l.jsx)("div", {
                    className: t,
                    children: i && (null == n ? void 0 : n.copyright) ? (0,
                    l.jsx)("p", {
                        className: "article-body__sponsored-by-text",
                        children: n.copyright
                    }) : null
                })
            })
        };
        i(19099),
        i(66429);
        var tA = function(e) {
            var t = e.authors
              , i = void 0 === t ? null : t
              , n = e.vertical;
            if (!i || !i.length)
                return null;
            var a = (0,
            h.Bd)().t
              , r = v.verticalSlugMap.msnbc
              , s = (0,
            m.$h)({
                pageRegion: "article-top",
                componentName: "inline-byline"
            });
            return (0,
            l.jsxs)("div", {
                className: "article-inline-byline",
                "data-testid": "article-byline-inline",
                "data-activity-map": s,
                children: ["".concat(a("By"), " "), (0,
                l.jsx)(em.Gj, {
                    authors: i,
                    showJobTitle: n === r
                })]
            })
        };
        tA.propTypes = {
            authors: q().arrayOf(A.cy || A.MV),
            vertical: q().string.isRequired
        };
        var tN = i(54707)
          , tT = i(69279)
          , tS = i(65071)
          , tE = i(55497);
        function tM(e) {
            var t = e.isLiveBlog
              , i = e.showUserActions
              , n = void 0 !== i && i
              , a = e.showBylineTimestamp
              , r = void 0 !== a && a
              , s = e.showInlineByline
              , o = void 0 !== s && s
              , d = e.vertical
              , u = void 0 === d ? "" : d
              , p = e.bylineTimestampDatePublished
              , h = e.article
              , _ = e.contentId
              , v = e.tableOfContentsEnabled
              , m = e.showCreatedDate
              , g = e.isChromeless
              , y = h.ecommerceEnabled
              , k = h.headline
              , j = h.source
              , C = h.taxonomy
              , L = h.url
              , w = h.date
              , I = w.createdAt
              , A = w.publishedAt
              , N = h.breakingNews
              , T = h.authors
              , S = void 0 === T ? [] : T
              , E = (0,
            R.Jp)();
            if ((0,
            x.Bg)(h))
                return null;
            var M = (null == S ? void 0 : S.filter(function(e) {
                return "author" === e.authorType
            })) || []
              , P = (j || {}).organization
              , B = void 0 === P ? {} : P
              , O = B.name
              , F = B.externalUrl
              , D = N || void 0 !== t && t
              , U = n || r || o
              , z = ((0,
            f.B0)(b.MYNEWS_ENABLED, u, E) || {}).showBookmark
              , H = void 0 !== z && z;
            return (0,
            l.jsx)(l.Fragment, {
                children: U && (0,
                l.jsxs)("section", {
                    className: c()({
                        mb7: !y && !D,
                        mb6: !y && D
                    }),
                    children: [n && !H ? (0,
                    l.jsx)("div", {
                        className: "article-social-share-top",
                        "data-testid": "article-body-social-share-menu",
                        children: (0,
                        l.jsx)(Z.w, {
                            url: null == L ? void 0 : L.primary,
                            headline: k.tease,
                            contentId: _,
                            pageRegion: "article-top",
                            trackingEventName: "article_social_share"
                        })
                    }) : null, "news" === u && "NBC Sports" === O && (0,
                    l.jsx)("div", {
                        className: "sports-article-top-badge"
                    }), n && H ? (0,
                    l.jsx)("div", {
                        className: "article-bookmark-menu",
                        "data-testid": "article-body-bookmark-menu",
                        children: (0,
                        l.jsx)(tT.T, {
                            contentId: _,
                            contentType: tS.fj,
                            pageRegion: "article-top",
                            isChromeless: void 0 !== g && g
                        })
                    }) : null, r && (0,
                    l.jsx)(tE.T, {
                        dateCreated: I,
                        datePublished: (void 0 === p ? "" : p) || A,
                        orgName: O,
                        orgUrl: F,
                        showCreatedDate: void 0 !== m && m,
                        source: j,
                        testId: "article-body-timestamp"
                    }), o && (0,
                    l.jsxs)("div", {
                        className: "relative",
                        children: [(0,
                        l.jsx)(tA, {
                            authors: M,
                            vertical: u,
                            taxonomy: C
                        }), void 0 !== v && v && (0,
                        l.jsx)(tN.G, {
                            className: "byline"
                        })]
                    })]
                })
            })
        }
        var tR = i(71959)
          , tP = i(58232)
          , tB = i(48148)
          , tO = i(69590)
          , tF = i(66393)
          , tD = "article-body";
        (0,
        _.stub)("register", "rmn_amazon_products_known", {
            allowDuplicate: !0
        });
        var tU = v.verticalSlugMap.news
          , tz = v.verticalSlugMap.today;
        let tH = (0,
        o.Ng)(function(e) {
            var t = e.article
              , i = e.myNews;
            return {
                contentId: p()(t, "content[0].id", ""),
                myNews: i
            }
        })((0,
        C.A)(function(e) {
            var t = function(t) {
                var i = t.article
                  , a = (0,
                I.D)(i);
                return (0,
                l.jsx)(e, (0,
                w._)((0,
                n._)({}, t), {
                    gateAccess: a
                }))
            };
            return t.propTypes = {
                article: A.jZ.isRequired
            },
            e.getInitialProps && (t.getInitialProps = e.getInitialProps),
            t
        }(function(e) {
            var t, i, o, d, u, p, v, C, w, I, A, M, P, B, O, F, z, H, W, q, V, J, Y, G, Q, K, X, $, ee, et, ei, en, ea, er, el, es, eo, ed = e.article, ec = e.contentId, eu = e.showCreatedDate, ep = void 0 === eu || eu, eh = e.vertical, e_ = e.showUserActions, ev = void 0 === e_ ? b.MYNEWS_ENABLED.default : e_, em = e.showBylineTimestamp, eg = void 0 === em || em, eb = e.showInlineByline, ef = void 0 === eb || eb, ey = e.isLiveBlog, ex = void 0 !== ey && ey, ek = e.bylineTimestampDatePublished, ej = void 0 === ek ? void 0 : ek, eC = e.tableOfContentsEnabled, eL = void 0 !== eC && eC, ew = e.backToTopBtnsAlignDesktop, eI = void 0 === ew ? "top" : ew, eA = e.backToTopBtnsAlignMobile, eN = void 0 === eA ? "top" : eA, eT = e.path, eS = e.getRightRailAdConfig, eE = void 0 === eS ? null : eS, eM = e.shouldRenderRightRailTaboola, eR = void 0 === eM ? null : eM, eP = e.isChromeless, eB = void 0 !== eP && eP, eO = e.view, eF = e.isShoppable, eD = void 0 !== eF && eF, eU = e.path, ez = e.taboolaRecoReelEnabled, eH = e.className, eW = e.disableGrid, eq = void 0 !== eW && eW, eV = e.shouldRenderTaboolaFeed, eJ = void 0 === eV || eV, eZ = e.gateAccess, eG = e.mostPopularStoryListItems, eQ = e.relatedArticles, eK = void 0 === eQ ? [] : eQ, eX = e.showDecibelPlayer, e$ = e.boxBestsellersList, e0 = e.setIsInlineTableOfContentsInView, e1 = e.tableOfContents, e2 = void 0 === e1 ? [] : e1, e3 = e.bylineType, e4 = void 0 === e3 ? "standard" : e3, e6 = null == ed ? void 0 : null === (K = ed.url) || void 0 === K ? void 0 : K.canonical, e9 = (0,
            a._)((0,
            s.useState)(!1), 2), e7 = e9[0], e8 = e9[1], e5 = (0,
            N.GP)(function(e) {
                return e.saveHistory
            }), te = (0,
            N.GP)(function(e) {
                return e.savedContentId
            }), tl = (0,
            tg.yI)(), ts = (0,
            R.Jp)(), to = (0,
            s.useContext)(R.xo).isSorM, td = void 0 !== to && to, tu = "authenticated" === tl, tp = (0,
            tg.$2)();
            (0,
            s.useEffect)(function() {
                if (ed) {
                    var e = (0,
                    tk.C)(ed).filter(function(e) {
                        return "embeddedProduct" === e.type
                    }).map(function(e) {
                        return e.product
                    })
                      , t = (0,
                    g.RT)(e);
                    t && (0,
                    _.stub)("track", "rmn_amazon_products_known", t)
                }
            }, []);
            var th = (0,
            U.Wx)()
              , tA = th.ref
              , tN = th.inView
              , tT = th.entry
              , tE = !tN && (null == tT ? void 0 : tT.boundingClientRect.top) < 0;
            (0,
            s.useEffect)(function() {
                e0 && e0(!tE)
            }, [tE, e0]);
            var tH = []
              , tW = (o = void 0 === (i = (t = {
                article: ed,
                ads: tH
            }).article) ? {} : i,
            d = t.ads,
            p = (u = (0,
            a._)((0,
            s.useState)(!1), 2))[0],
            v = u[1],
            w = (C = (0,
            a._)((0,
            s.useState)(!1), 2))[0],
            I = C[1],
            M = (A = (0,
            a._)((0,
            s.useState)(!1), 2))[0],
            P = A[1],
            B = null,
            O = (0,
            s.useCallback)(function() {
                (0,
                tF.U8)({
                    isScrolledPastFirstWindow: p,
                    isScrollingUp: w,
                    isInView: M
                }, v)
            }, [p, w, M]),
            (0,
            s.useEffect)(function() {
                return window.addEventListener("scroll", O),
                tB.A.on("articleInView", (0,
                tF.Ul)(o, P)),
                d.length && (B = (0,
                tO.kp)({
                    isScrollingUp: w
                }, I)),
                function() {
                    tB.A.remove("articleInView", (0,
                    tF.Ul)(o, P)),
                    d.length && (0,
                    tO.eF)(B)
                }
            }, [O, o, p, M, w]),
            {
                isScrolledPastFirstWindow: p,
                isScrollingUp: w,
                isInView: M
            })
              , tq = tW.isScrolledPastFirstWindow
              , tV = tW.isScrollingUp
              , tJ = tW.isInView;
            z = (F = {
                authenticationState: tl,
                savedContentId: te,
                article: ed,
                saveHistory: e5,
                articleId: null == ed ? void 0 : ed.id,
                featureFlags: ts,
                pageType: "article"
            }).authenticationState,
            H = F.savedContentId,
            W = F.article,
            q = F.saveHistory,
            V = F.articleId,
            J = F.featureFlags,
            (0,
            s.useEffect)(function() {
                var e = (0,
                tR.D)();
                (0,
                tP.F)({
                    featureFlags: J
                }) && z === tS.K_ && H !== (null == W ? void 0 : W.id) && e && q({
                    contentId: V,
                    contentType: tS.fj
                })
            }, [z, null == W ? void 0 : W.id, q, H, null == J ? void 0 : J["nbc-news-bedrock"], null == J ? void 0 : J["account-history"]]);
            var tY = (0,
            s.useMemo)(function() {
                return (null == ed ? void 0 : ed.body.find(function(e) {
                    return "embeddedTaxonomy" === e.type
                })) || null
            }, [null == ed ? void 0 : ed.body]);
            if (!ed)
                return null;
            var tZ = ed.ecommerceEnabled
              , tG = ed.headline
              , tQ = ed.source
              , tK = ed.taxonomy
              , tX = ed.url
              , t$ = ed.breakingNews
              , t0 = ed.breakingTagDisabled
              , t1 = ed.primaryImage
              , t2 = ed.primaryMedia
              , t3 = ed.adsEnabled
              , t4 = ed.nativeAd
              , t6 = ed.authors
              , t9 = ex && tY
              , t7 = (0,
            tb.hM)(eh, ed, e$)
              , t8 = function(e) {
                var t = e && e.querySelector(".article-body__right-rail--ad");
                t && (tH.current = (0,
                r._)(tH).concat([t]))
            }
              , t5 = function(e) {
                var t = e.section
                  , i = e.sectionIndex
                  , n = e.articleContainsLargeProduct;
                return (0,
                l.jsx)("div", {
                    className: "".concat(tD, "--right-rail-container"),
                    ref: function(e) {
                        return t8(e)
                    },
                    children: (0,
                    l.jsx)(tC.v, {
                        block: tD,
                        section: t,
                        sectionIndex: i,
                        articleContainsLargeProduct: n,
                        shouldRenderRightRailTaboola: eR,
                        getRightRailAdConfig: eE,
                        currentPath: eT,
                        boxflexRendered: e7,
                        isScrollingUp: tV,
                        showTaboola: tJ,
                        boxflexAdRenderCheck: function(e) {
                            return (0,
                            tF.iu)({
                                mpsAd: e,
                                setBoxflexRendered: e8
                            })
                        },
                        tableOfContents: e2
                    })
                })
            }
              , ie = !(0,
            x.Bg)(ed)
              , it = ev && (0,
            f.B0)(b.USER_ACTIONS_BELOW_ARTICLE, eh)
              , ii = ie && it
              , ia = (0,
            tk.C)(ed)
              , ir = eD || !!ia.find(function(e) {
                var t = e.type
                  , i = e.presentation;
                return "embeddedProduct" === t && "large" === i.size
            })
              , il = !!ia.find(function(e) {
                return "embeddedProduct" === e.type
            })
              , is = "food" === (null !== (eo = null == ed ? void 0 : null === ($ = ed.taxonomy) || void 0 === $ ? void 0 : null === (X = $.primarySection) || void 0 === X ? void 0 : X.name) && void 0 !== eo ? eo : "").toLowerCase()
              , io = ia.filter(function(e) {
                return "embeddedRecipe" === e.type
            })
              , id = io && io.length > 1 && is
              , ic = (0,
            tj.l)({
                adsEnabled: t3,
                article: ed,
                articleBody: ia,
                breakingNews: t$,
                ecommerceEnabled: tZ,
                isShoppable: eD,
                isLiveBlog: ex,
                nativeAd: t4,
                path: eU,
                taboolaRecoReelEnabled: void 0 !== ez && ez,
                vertical: eh,
                gateAccess: eZ,
                featureFlags: ts,
                isChromeless: eB
            })
              , iu = ic.map(function(e, t) {
                return (0,
                n._)({
                    index: t
                }, e)
            })
              , ip = ic.length - 1
              , ih = c()("article-body__grid--container", function() {
                var e = {
                    "article-body__grid--container-no-main-image": !t1 && !t2,
                    "article-body__ecommerce-enabled": tZ,
                    "article-body__grid--container-live-blog": ex
                }
                  , t = (0,
                f.B0)(b.ARTICLE_TAXONOMY_SECTION_NUMBERING, eh);
                if (Array.isArray(t)) {
                    var i = (0,
                    tm.Sk)(tK)
                      , n = t.filter(function(e) {
                        return i.includes(e)
                    });
                    e["article-body__section-counter"] = n.length > 0
                }
                return e
            }(), {
                "article_body__grid--shell-container": (0,
                x.Bg)(ed),
                "article-body__gridContainer": (0,
                x.Bg)(ed)
            })
              , i_ = c()({
                "layout-grid-item layout-grid-item--with-gutter-s-only grid-col-10-m grid-col-push-1-m grid-col-6-xl grid-col-push-2-xl": !eq
            }, {
                "article-body--custom-column": !(0,
                x.Bg)(ed) && !eq
            })
              , iv = c()("article-body", i_)
              , im = !eB && !ex && eZ && eJ ? "read-more" : ""
              , ig = tq && !ex && tZ
              , ib = (0,
            m.$h)({
                pageRegion: "article-body",
                componentName: "article"
            })
              , iy = eh === tU
              , ix = ((0,
            f.B0)(b.SHOW_USER_ACTIONS, eh) || {}).showPinterest
              , ik = "shell" === ed.presentation.style
              , ij = (void 0 === eO ? null : eO) === T.g.START_TODAY_APP
              , iC = iy && !t$ && !eB && !t4 && !ik && !tZ
              , iL = ie && (null == eK ? void 0 : eK.length) >= 3 && !ij && !eB
              , iw = "standard" === e4
              , iI = function() {
                var e, t, i, n, a, r;
                return (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)(tM, {
                        article: ed,
                        block: tD,
                        bylineTimestampDatePublished: ej,
                        contentId: ec,
                        isChromeless: eB,
                        isLiveBlog: ex,
                        showBylineTimestamp: eg && iw,
                        showCreatedDate: ep,
                        showInlineByline: ef && iw,
                        showUserActions: ev,
                        tableOfContentsEnabled: eL,
                        vertical: eh
                    }), "expandable" === e4 && (0,
                    l.jsx)(tf.e, {
                        authors: t6,
                        createdAt: null == ed ? void 0 : null === (e = ed.date) || void 0 === e ? void 0 : e.createdAt,
                        className: "article-body__expandable-byline",
                        orgName: null == ed ? void 0 : null === (i = ed.source) || void 0 === i ? void 0 : null === (t = i.organization) || void 0 === t ? void 0 : t.name,
                        orgUrl: null == ed ? void 0 : null === (a = ed.source) || void 0 === a ? void 0 : null === (n = a.organization) || void 0 === n ? void 0 : n.externalUrl,
                        publishedAt: null == ed ? void 0 : null === (r = ed.date) || void 0 === r ? void 0 : r.publishedAt,
                        source: null == ed ? void 0 : ed.source
                    })]
                })
            }
              , iA = eX && !eB || "true" === (0,
            k.Ri)("forceShowDecibelPlayer")
              , iN = !!(null == ed ? void 0 : null === (en = ed.audioNarration) || void 0 === en ? void 0 : null === (ei = en.audio) || void 0 === ei ? void 0 : null === (et = ei.audioAssets) || void 0 === et ? void 0 : null === (ee = et[0]) || void 0 === ee ? void 0 : ee.playbackUrl)
              , iT = {
                consumer: "Ramen",
                trackingVariant: "article",
                segment: (null == ed ? void 0 : null === (es = ed.audioNarration) || void 0 === es ? void 0 : null === (el = es.audio) || void 0 === el ? void 0 : null === (er = el.audioAssets) || void 0 === er ? void 0 : null === (ea = er[0]) || void 0 === ea ? void 0 : ea.playbackUrl) || "",
                guid: "audio-".concat(ed.id),
                date: new Date
            };
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)("div", {
                    className: c()(tD, void 0 === eH ? null : eH, {
                        breaking: t$,
                        "is-live-blog": ex
                    }),
                    "data-activity-map": ib,
                    "data-taboola-target": im,
                    "data-testid": "article-body",
                    children: [ig && (0,
                    l.jsx)(D, {}), (0,
                    l.jsxs)("div", {
                        className: ih,
                        children: [(0,
                        x.uV)(ed) && [tU, tz].includes(eh) ? (0,
                        l.jsx)(S.A, {
                            slot: "interstitial",
                            refreshInterval: 0
                        }) : null, (0,
                        l.jsx)(tI, {
                            article: ed,
                            bodyClasses: iv,
                            nativeAd: t4,
                            source: tQ
                        }), eZ ? iu.map(function(e, t) {
                            var i, n, a, r;
                            return (0,
                            l.jsxs)("div", {
                                className: c()({
                                    "article-body__section layout-grid-container": !eq && !e.isFullWidth
                                }, {
                                    "article-body__last-section": t === ic.length - 1,
                                    "article-body__first-section": 0 === t
                                }),
                                children: [il && (0,
                                f.B0)(b.UNIVERSAL_CHECKOUT_WELLS_FARGO_BANNER, eh) && (0,
                                l.jsx)(tr, {
                                    bodyClasses: iv
                                }), (0,
                                l.jsxs)("div", {
                                    className: e.isFullWidth ? "article-body layout-grid-item" : iv,
                                    children: [0 === t && iI(), id ? (0,
                                    l.jsx)(t_, {
                                        embeddedRecipes: io
                                    }) : null, 0 === t && iA && !eB && iN && (0,
                                    l.jsx)(E.d, {
                                        env: "production",
                                        rum: j.L,
                                        disableControls: !tu,
                                        disabledControlsCallback: tp,
                                        $t: _.stub,
                                        baseTrackingData: iT,
                                        file: null == ed ? void 0 : null === (r = ed.audioNarration) || void 0 === r ? void 0 : null === (a = r.audio) || void 0 === a ? void 0 : null === (n = a.audioAssets) || void 0 === n ? void 0 : null === (i = n[0]) || void 0 === i ? void 0 : i.playbackUrl,
                                        offset: 60,
                                        font: "founders-cond",
                                        callToAction: tu ? "Listen to this article" : (0,
                                        l.jsxs)("div", {
                                            children: [(0,
                                            l.jsx)("span", {
                                                children: "Listen to this article with a "
                                            }), (0,
                                            l.jsx)("span", {
                                                className: "db:text-[#3061ff] db:cursor-pointer",
                                                children: "free account"
                                            })]
                                        })
                                    }), 0 === t && td && e2.isEnabled && (0,
                                    l.jsxs)(l.Fragment, {
                                        children: [(0,
                                        l.jsx)(tv.M, {
                                            isCollapsible: !1,
                                            links: e2.links,
                                            title: e2.title,
                                            variant: "inline"
                                        }), (0,
                                        l.jsx)("div", {
                                            "data-testid": "table-of-contents-anchor-wrapper",
                                            ref: tA,
                                            style: {
                                                height: 0,
                                                overflow: "hidden"
                                            },
                                            children: (0,
                                            l.jsx)("div", {
                                                "data-testid": "table-of-contents-anchor",
                                                style: {
                                                    height: 1
                                                }
                                            })
                                        })]
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "article-body__content",
                                        children: e.items
                                    }), t === ip && ex && ii && (0,
                                    l.jsx)(Z.w, {
                                        url: tX.primary,
                                        headline: tG.tease,
                                        contentId: ec,
                                        trackingEventName: "article_social_share_bottom",
                                        actions: {
                                            pinterest: ix
                                        }
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "article-body__content",
                                        children: [t === ip && (t$ || ex) && (0,
                                        l.jsxs)(l.Fragment, {
                                            children: [t9 && (0,
                                            l.jsx)(eY.t, {
                                                errorLogger: L.vV,
                                                children: (0,
                                                l.jsx)(tt, {
                                                    articleCanonicalUrl: e6,
                                                    backToTopBtnsAlignDesktop: eI,
                                                    backToTopBtnsAlignMobile: eN
                                                })
                                            }), !t$ || ex || t0 ? null : (0,
                                            l.jsxs)("div", {
                                                className: "articleDevelopingTag",
                                                "data-testid": "article-developing-tag",
                                                children: [(0,
                                                l.jsx)("div", {
                                                    className: "articleDevelopingTag__stripe-border",
                                                    children: (0,
                                                    l.jsx)("span", {
                                                        className: "articleDevelopingTag__stripe-border--solid db"
                                                    })
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "articleDevelopingTag__content",
                                                    children: (0,
                                                    l.jsxs)(h.x6, {
                                                        i18nKey: "developingStory",
                                                        children: ["This is a", (0,
                                                        l.jsx)("span", {
                                                            className: "articleDevelopingTag__content--red",
                                                            children: " developing "
                                                        }), "story. Please check back for updates."]
                                                    })
                                                })]
                                            }), (0,
                                            f.B0)(b.ARTICLE_INLINE_NEWSLETTER, eh) && "today" !== eh && (0,
                                            l.jsx)(ti.A, {
                                                article: ed,
                                                vertical: eh,
                                                isChromeless: eB
                                            })]
                                        }), t === ip && (0,
                                        l.jsxs)(l.Fragment, {
                                            children: [(0,
                                            x.Bg)(ed) ? null : (0,
                                            l.jsx)(ty.l, {
                                                article: ed,
                                                vertical: eh,
                                                additionalClasses: "articleBylineContainer",
                                                bylineAdditionalClasses: "article-expanded-byline"
                                            }), !ii || ex || ij ? null : (0,
                                            l.jsx)("div", {
                                                className: "article-social-share-bottom",
                                                children: (0,
                                                l.jsx)(Z.w, {
                                                    url: tX.primary,
                                                    headline: tG.tease,
                                                    contentId: ec,
                                                    pageRegion: "article-bottom",
                                                    trackingEventName: "article_social_share_bottom",
                                                    actions: {
                                                        pinterest: ix
                                                    }
                                                })
                                            })]
                                        })]
                                    })]
                                }), t5({
                                    section: e,
                                    sectionIndex: t,
                                    articleContainsLargeProduct: ir
                                })]
                            }, e.index)
                        }) : (Y = iu[0],
                        (0,
                        l.jsxs)("div", {
                            className: "article-body__gate article-body__first-section article-body__section layout-grid-container",
                            "data-testid": "gated-article-body",
                            children: [(0,
                            l.jsxs)("div", {
                                className: iv,
                                children: [iI(), (0,
                                l.jsx)("div", {
                                    className: c()("article-body__content", "article-body__content--gated"),
                                    children: Y.items
                                }), (0,
                                l.jsx)(y._, {
                                    layout: "fluid",
                                    contentType: "article",
                                    className: "gated-content--wrapper"
                                })]
                            }), t5({
                                section: ic[0],
                                sectionIndex: 0,
                                articleContainsLargeProduct: ir
                            })]
                        })), !eD && (0,
                        l.jsxs)(l.Fragment, {
                            children: [(0,
                            l.jsx)(tn.W, {
                                pageRegion: "article-bottom"
                            }), t7 && (0,
                            l.jsx)(tn.W, {
                                pageRegion: "article-bottom",
                                curatedList: e$
                            })]
                        }), (0,
                        l.jsx)(tw.P, {
                            block: tD,
                            currentPath: eU,
                            gridBodyClasses: i_,
                            shouldRenderTodayGiftGuide: (G = !(0,
                            x.RM)(ed),
                            Q = eh === tz && (0,
                            tb.x)(ed, ts),
                            (!td || !Q || !t7) && tZ && eh === tz && G),
                            showTaboola: tJ
                        })]
                    }), iC && (0,
                    l.jsx)(ta, {
                        mostPopularStoryListItems: void 0 === eG ? [] : eG
                    })]
                }), (0,
                l.jsx)(tx.H, {
                    vertical: eh,
                    currentPath: eU,
                    article: ed
                }), eJ && (0,
                l.jsx)(tL.F, {
                    article: ed,
                    showTaboola: tJ
                }), iL ? (0,
                l.jsx)(tc, {
                    article: ed,
                    relatedArticles: eK,
                    vertical: eh,
                    view: !0
                }) : null]
            })
        })), N.GP)
    }
    ,
    48984: e => {
        e.exports = {
            countChip: "styles_countChip__wkEXI",
            "live-dot-blink": "styles_live-dot-blink__oiOkM",
            "fade-in": "styles_fade-in__eiRfc",
            "expand-in": "styles_expand-in__FW_AE",
            "chatblog-expand-in": "styles_chatblog-expand-in__tbsNq"
        }
    }
    ,
    50044: (e, t, i) => {
        "use strict";
        i.d(t, {
            f: () => k
        });
        var n = i(37876);
        i(14232);
        var a = i(95062)
          , r = i.n(a)
          , l = i(97247)
          , s = i(34443)
          , o = i.n(s);
        function d(e) {
            var t = e.text
              , i = void 0 === t ? void 0 : t
              , a = e.url;
            return i ? (0,
            n.jsx)(l.H, {
                href: void 0 === a ? void 0 : a,
                className: o().titleLink,
                "data-icid": "topic_lb_subnav",
                children: (0,
                n.jsx)("h3", {
                    className: o().title,
                    children: i
                })
            }) : null
        }
        d.propTypes = {
            text: r().string,
            url: r().string
        };
        var c = i(45526)
          , u = i(15039)
          , p = i.n(u)
          , h = i(11863)
          , _ = i.n(h);
        function v(e) {
            var t, i = e.text, a = void 0 === i ? void 0 : i, r = e.url, s = e.isActiveLink, o = void 0 !== s && s, d = e.isHighlighted;
            return a ? (0,
            n.jsx)("li", {
                className: p()(_().linkItem, (t = {},
                (0,
                c._)(t, _().underline, o),
                (0,
                c._)(t, _().highlighted, void 0 !== d && d),
                t)),
                "data-testid": "topic-link-li",
                children: (0,
                n.jsx)(l.H, {
                    className: _().link,
                    href: o ? null : void 0 === r ? void 0 : r,
                    "data-icid": "topic_lb_subnav",
                    children: (0,
                    n.jsx)("span", {
                        className: _().link,
                        "data-testid": "topic-link-span",
                        children: a
                    })
                })
            }) : null
        }
        v.propTypes = {
            text: r().string,
            url: r().string,
            isActiveLink: r().bool,
            isHighlighted: r().bool
        };
        var m = i(68225)
          , g = i(9616)
          , b = i.n(g);
        function f(e) {
            var t, i = e.logo, a = void 0 === i ? void 0 : i, r = e.link, s = e.fallbackAlt, o = e.height;
            return a ? (0,
            n.jsx)(l.H, {
                className: p()(b().logoLink, "db"),
                href: void 0 === r ? void 0 : r,
                "data-icid": "topic_lb_subnav",
                children: (0,
                n.jsx)("img", {
                    className: p()(b().logo, "db"),
                    src: (0,
                    m.mt)(null === (t = a.url) || void 0 === t ? void 0 : t.primary, "fit-260w", "best", 2),
                    alt: a.altText ? a.altText : void 0 === s ? "Related Topic Logo" : s,
                    height: void 0 === o ? 21 : o
                })
            }) : null
        }
        f.propTypes = {
            logo: r().shape({
                url: r().shape({
                    primary: r().string
                }),
                altText: r().string
            }),
            link: r().string,
            fallbackAlt: r().string,
            height: r().number
        };
        var y = i(70355)
          , x = i.n(y);
        function k(e) {
            var t, i = e.titleText, a = void 0 === i ? void 0 : i, r = e.titleLink, l = void 0 === r ? void 0 : r, s = e.linkItems, o = void 0 === s ? void 0 : s, c = e.isActiveLink, u = void 0 === c ? void 0 : c, p = e.logo, h = void 0 === p ? void 0 : p, _ = null == o ? void 0 : null === (t = o.map) || void 0 === t ? void 0 : t.call(o, function(e) {
                if (!(null == e ? void 0 : e.headline) && !(null == e ? void 0 : e.text))
                    return null;
                var t, i, a = "liveBlog" === e.subType && "LIVE COVERAGE" === e.flag, r = "function" == typeof u ? u(e) : null != u && u;
                return (0,
                n.jsx)(v, {
                    text: (null == e ? void 0 : null === (t = e.headline) || void 0 === t ? void 0 : t.primary) || (null == e ? void 0 : e.text),
                    url: null == e ? void 0 : null === (i = e.url) || void 0 === i ? void 0 : i.primary,
                    isActiveLink: r,
                    isHighlighted: a
                }, null == e ? void 0 : e.id)
            });
            return (0,
            n.jsx)("nav", {
                className: x().topicSubNav,
                "data-testid": "topic-sub-nav",
                children: (0,
                n.jsx)("div", {
                    className: x().topicSubNavInner,
                    "data-testid": "topic-sub-nav-inner",
                    children: (0,
                    n.jsxs)("div", {
                        className: x().scrollingContent,
                        "data-testid": "subnav-scrolling-content",
                        children: [h ? (0,
                        n.jsx)(f, {
                            logo: h,
                            link: l,
                            fallbackAlt: a
                        }) : (0,
                        n.jsx)(d, {
                            text: a,
                            url: l
                        }), (0,
                        n.jsx)("ul", {
                            className: x().linkItems,
                            children: _
                        })]
                    })
                })
            })
        }
        k.propTypes = {
            titleText: r().string,
            titleLink: r().string,
            linkItems: r().arrayOf(r().shape({
                headline: r().shape({
                    primary: r().string
                }),
                id: r().string,
                url: r().shape({
                    primary: r().string
                })
            })),
            isActiveLink: r().oneOfType([r().bool, r().func]),
            logo: r().shape({
                url: r().shape({
                    primary: r().string
                }),
                altText: r().string
            })
        }
    }
    ,
    50642: e => {
        e.exports = {
            chatCardTimestamp: "styles_chatCardTimestamp__yjt2S",
            eventEnded: "styles_eventEnded__oScme",
            "live-dot-blink": "styles_live-dot-blink__dg_9r",
            "fade-in": "styles_fade-in__p8YV8",
            "expand-in": "styles_expand-in__VkkIT",
            "chatblog-expand-in": "styles_chatblog-expand-in__Z__M8"
        }
    }
    ,
    50729: (e, t, i) => {
        "use strict";
        i.d(t, {
            n: () => o
        });
        var n = i(39324)
          , a = i.n(n)
          , r = i(11520)
          , l = i.n(r)
          , s = i(20309);
        function o(e, t) {
            var i = new (l())(e.get("Link") || "")
              , n = a()().publicRuntimeConfig
              , r = n.MPS_URL_NBCNEWS
              , o = n.MPS_URL_TELEMUNDO
              , d = n.IDENTITY_ENV;
            i.set({
                uri: "https://nodeassets.nbcnews.com",
                rel: "preconnect",
                crossorigin: "anonymous"
            });
            var c = ["https://media-cldnry.s-nbcnews.com", "https://securepubads.g.doubleclick.net"];
            ("today" === t || "news" === t) && c.push("production" === d ? "https://id.nbcuni.com" : "https://stage.id-envs.nbcuni.com"),
            c.forEach(function(e) {
                return i.set({
                    rel: "preconnect",
                    uri: e
                })
            }),
            [(0,
            s.isTelemundoVertical)(t) ? o : r].forEach(function(e) {
                return i.set({
                    uri: e,
                    as: "script",
                    rel: "preload"
                })
            }),
            e.set("Link", i.toString())
        }
    }
    ,
    51355: e => {
        e.exports = {
            wrapper: "styles_wrapper__ukVMI",
            fade: "styles_fade__EEqtK",
            textContent: "styles_textContent__BQ_d0",
            header: "styles_header__jko7a",
            listItem: "styles_listItem__BT1zm",
            link: "styles_link__4PuJ_",
            "live-dot-blink": "styles_live-dot-blink__Zpoo7",
            "fade-in": "styles_fade-in__Xawko",
            "expand-in": "styles_expand-in__d4Bq8",
            "chatblog-expand-in": "styles_chatblog-expand-in__QBGND"
        }
    }
    ,
    56766: e => {
        e.exports = {
            chartCardHeadline: "styles_chartCardHeadline__hQEvw",
            "live-dot-blink": "styles_live-dot-blink__dtgDa",
            "fade-in": "styles_fade-in__xBu5F",
            "expand-in": "styles_expand-in__4aV3l",
            "chatblog-expand-in": "styles_chatblog-expand-in__bA3t6"
        }
    }
    ,
    56790: (e, t, i) => {
        "use strict";
        i.d(t, {
            v: () => s
        });
        var n = i(67684)
          , a = i(62701)
          , r = i(86450)
          , l = i(61311)
          , s = function(e) {
            var t = e.bodyItems
              , i = e.path
              , s = e.showHiddenMarkupAndEmbeds
              , o = e.setShowHiddenMarkupAndEmbeds
              , d = e.id
              , c = e.headline
              , u = e.isChromeless
              , p = e.article
              , h = !1;
            return null == t ? void 0 : t.map(function(e, t) {
                var _, v, m, g = null == e ? void 0 : e.html, b = "embeddedWidget" === e.type && (null === (_ = e.widget) || void 0 === _ ? void 0 : _.name) === "CUSTOM_EMBED" && (null === (m = e.widget) || void 0 === m ? void 0 : null === (v = m.properties) || void 0 === v ? void 0 : v.embed.type) === "SHOW_MORE_BUTTON";
                if (h)
                    return null;
                if (!g)
                    return h = b,
                    b && s ? null : (0,
                    r.Pk)({
                        item: e,
                        i: t,
                        path: i,
                        setShowHiddenMarkupAndEmbeds: o,
                        isCard: !0,
                        parentId: d,
                        parentHeadline: c,
                        isChromeless: u,
                        article: p
                    });
                var f = (0,
                a._)((0,
                n._)({}, e), {
                    html: (0,
                    l.F)(e.html)
                });
                return (0,
                r.Pk)({
                    item: f,
                    i: t,
                    path: i,
                    isCard: !0,
                    parentId: d,
                    parentHeadline: c,
                    isChromeless: u,
                    article: p
                })
            })
        }
    }
    ,
    58666: (e, t, i) => {
        "use strict";
        i.d(t, {
            l: () => w
        });
        var n = i(37876)
          , a = i(14232)
          , r = i(95062)
          , l = i.n(r)
          , s = i(15039)
          , o = i.n(s)
          , d = i(82780)
          , c = i.n(d)
          , u = i(61702)
          , p = i(20294)
          , h = i(46629)
          , _ = i(10616)
          , v = i(87992)
          , m = i(87673)
          , g = i(97247)
          , b = "expanded-byline"
          , f = (0,
        _.$h)({
            pageRegion: "article-bottom",
            componentName: "expanded-byline"
        })
          , y = function(e) {
            var t, i, r, l = e.author, s = void 0 === l ? {} : l, d = e.vertical, u = e.containerClass, _ = e.position, y = (0,
            v.Jp)()["author-byline-recirc-and-social-media-updates"], x = (0,
            p._)((0,
            a.useState)(!1), 2), k = x[0], j = x[1], C = c()(s, "person", s), L = c()(C, ["primaryImage", "url", "primary"], "") ? "" : "no-thumbnail";
            if (!C)
                return null;
            var w = (null == C ? void 0 : null === (i = C.content) || void 0 === i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t.length) > 3 ? C.content.items.slice(0, 3) : null == C ? void 0 : null === (r = C.content) || void 0 === r ? void 0 : r.items;
            return (0,
            n.jsxs)("div", {
                className: o()(b, void 0 === u ? "" : u, L),
                "data-activity-map": f,
                children: [(0,
                n.jsx)(h.oQ, {
                    person: C,
                    additionalClasses: "".concat(b, "__thumbnail"),
                    additionalClassesNoImage: "".concat(b, "__thumbnail"),
                    position: _
                }), (0,
                n.jsxs)("div", {
                    className: "".concat(b, "__info"),
                    children: [(0,
                    n.jsx)(h.H1, {
                        person: C,
                        additionalClasses: "".concat(b, "__name"),
                        position: _
                    }), (0,
                    n.jsx)(h.TV, {
                        person: C,
                        additionalClasses: "".concat(b, "__social")
                    })]
                }), (0,
                n.jsx)(h.w$, {
                    person: C,
                    additionalClasses: "".concat(b, "__bio ").concat(L)
                }), "select" === (void 0 === d ? "" : d) && y && (null == w ? void 0 : w.length) > 0 && (0,
                n.jsx)(m.n, {
                    title: k ? "Collapse" : "Latest articles",
                    openDirection: "up",
                    isOpen: k,
                    onToggle: function() {
                        return j(function(e) {
                            return !e
                        })
                    },
                    additionalStyles: {
                        accordion: "".concat(b, "__accordion"),
                        accordion__header: "".concat(b, "__show-more-button"),
                        accordion__icon: "".concat(b, "__accordion-icon"),
                        accordion__content: "".concat(b, "__article-list"),
                        open: "".concat(b, "__accordion--open"),
                        closed: "".concat(b, "__accordion--closed")
                    },
                    children: (0,
                    n.jsx)("ul", {
                        "data-testid": "byline-article-recirc",
                        children: w.map(function(e) {
                            var t, i, a;
                            return (0,
                            n.jsx)("li", {
                                children: (0,
                                n.jsx)(g.H, {
                                    href: null == e ? void 0 : null === (t = e.url) || void 0 === t ? void 0 : t.primary,
                                    children: null == e ? void 0 : null === (i = e.headline) || void 0 === i ? void 0 : i.primary
                                }, null == e ? void 0 : null === (a = e.headline) || void 0 === a ? void 0 : a.primary)
                            })
                        })
                    })
                })]
            })
        }
          , x = i(77328)
          , k = i.n(x)
          , j = i(34846)
          , C = i(75277)
          , L = function(e) {
            var t = e.authors
              , i = e.containerClass
              , a = (0,
            j.Bd)().t
              , r = (void 0 === t ? [] : t).map(function(e) {
                var t = c()(e, "person", e);
                return t ? t.name : null
            }).reduce(C.dH, []);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(k(), {
                    children: r.map(function(e, t) {
                        return (0,
                        n.jsx)("meta", {
                            name: "branch:deeplink:contributorName".concat(t + 1),
                            content: e
                        })
                    })
                }), (0,
                n.jsxs)("div", {
                    className: o()("expanded-contributors", void 0 === i ? "" : i),
                    children: [r, " ", a("contributed"), "."]
                })]
            })
        };
        L.propTypes = {
            authors: l().arrayOf(u.cy || u.MV),
            containerClass: l().string
        },
        i(19373);
        var w = function(e) {
            var t, i = e.article, a = void 0 === i ? {} : i, r = e.vertical, l = e.additionalClasses, s = e.contributorsAdditionalClasses, d = e.bylineAdditionalClasses, u = void 0 === d ? "" : d, p = a.presentation.byline, h = null !== (t = c()(a, "authors")) && void 0 !== t ? t : [], _ = h.filter(function(e) {
                return "author" === e.authorType
            }), v = h.filter(function(e) {
                return "contributor" === e.authorType
            }), m = p && "expanded" === p.toLowerCase() && Array.isArray(_) && !!_.length, g = Array.isArray(v) && !!v.length;
            return m || g ? (0,
            n.jsxs)("div", {
                className: o()("expanded-byline-contributors", void 0 === l ? "" : l),
                children: [m && _.map(function(e, t) {
                    return (0,
                    n.jsx)(y, {
                        author: e,
                        vertical: r,
                        containerClass: u,
                        position: t + 1
                    }, e.person.name)
                }), g && (0,
                n.jsx)(L, {
                    authors: v,
                    containerClass: void 0 === s ? "" : s
                })]
            }) : null
        };
        w.propTypes = {
            article: u.jZ,
            additionalClasses: l().string,
            bylineAdditionalClasses: l().string,
            contributorsAdditionalClasses: l().string
        }
    }
    ,
    60325: () => {}
    ,
    60707: e => {
        e.exports = {
            parallelogram: "shared_parallelogram__sLDFF",
            parallelogramNoAffordance: "shared_parallelogramNoAffordance__Jt_fG"
        }
    }
    ,
    61311: (e, t, i) => {
        "use strict";
        function n(e) {
            return e.replace(/(\/)([A-Za-z]crd[0-9]+)\??(#liveBlogHeader)?" target="_blank"/g, '#$2"')
        }
        i.d(t, {
            F: () => n
        })
    }
    ,
    62297: (e, t, i) => {
        "use strict";
        i.d(t, {
            M: () => L
        });
        var n = i(45526)
          , a = i(20294)
          , r = i(37876)
          , l = i(14232)
          , s = i(87673)
          , o = i(15039)
          , d = i.n(o)
          , c = i(51845)
          , u = i(15709)
          , p = i.n(u)
          , h = function(e) {
            var t = e.activeLink
              , i = void 0 === t ? "" : t
              , a = e.callback
              , s = void 0 === a ? function() {}
            : a
              , o = e.clickTrackingId
              , u = void 0 === o ? "mbt_jump_links" : o
              , h = e.links
              , _ = void 0 === h ? [] : h
              , v = e.testId;
            if ((0,
            l.useEffect)(function() {
                (0,
                c.stub)("register", u, {
                    allowDuplicate: !0
                })
            }, []),
            !_.length)
                return null;
            var m = function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                s(),
                (0,
                c.stub)("track", u, {
                    action: "jumpLink",
                    name: e.target.textContent
                }),
                window.location.href = e.target.href
            };
            return (0,
            r.jsx)("ul", {
                className: p().jumpLinkList,
                "data-testid": void 0 === v ? "jump-link-list" : v,
                children: _.map(function(e, t) {
                    return (0,
                    r.jsx)("li", {
                        className: d()(p().jumpLinkList__item, (0,
                        n._)({}, p().jumpLinkList__activeItem, i === e.href)),
                        children: (0,
                        r.jsx)("a", {
                            className: p().jumpLinkList__itemLink,
                            "data-testid": "jump-link-list__item-link-".concat(t),
                            href: e.href,
                            onClick: m,
                            children: e.linkText
                        })
                    }, e.href)
                })
            })
        }
          , _ = i(85993)
          , v = i(35513)
          , m = i.n(v)
          , g = function(e) {
            var t = e.activeLink
              , i = void 0 === t ? "" : t
              , s = e.callback
              , o = void 0 === s ? function() {}
            : s
              , u = e.clickTrackingId
              , p = e.links
              , h = void 0 === p ? [] : p
              , v = e.numberOfLinksToShow
              , g = void 0 === v ? 3 : v
              , b = (0,
            a._)((0,
            l.useState)(!1), 2)
              , f = b[0]
              , y = b[1]
              , x = (0,
            l.useRef)();
            if (!h.length)
                return null;
            var k = h.length > g
              , j = k ? h.length - g : 0
              , C = function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                o(),
                (0,
                c.stub)("track", u, {
                    action: "jumpLink",
                    name: e.target.textContent
                }),
                window.location.href = e.target.href
            }
              , L = function(e) {
                y(e.expand)
            };
            return (0,
            r.jsxs)("div", {
                className: m().expandableJumpLinkList,
                "data-testid": "expandable-jump-link-list",
                children: [(0,
                r.jsx)("ul", {
                    ref: x,
                    className: d()(m().expandableJumpLinkList__Container, (0,
                    n._)({}, m()["expandableJumpLinkList__Container--NoExpand"], !k)),
                    children: !k || k && f ? h.map(function(e, t) {
                        return (0,
                        r.jsx)("li", {
                            className: d()(m().expandableJumpLinkList__item, (0,
                            n._)({}, m().expandableJumpLinkList__activeItem, i === e.href)),
                            children: (0,
                            r.jsx)("a", {
                                className: m().expandableJumpLinkList__itemLink,
                                "data-testid": "expandable-jump-link-list__item-link-".concat(t),
                                href: e.href,
                                onClick: C,
                                children: e.linkText
                            })
                        }, g + e.href)
                    }) : (0,
                    _._)(h.slice(0, g).map(function(e, t) {
                        return (0,
                        r.jsx)("li", {
                            className: d()(m().expandableJumpLinkList__item, (0,
                            n._)({}, m().expandableJumpLinkList__activeItem, i === e.href)),
                            children: (0,
                            r.jsx)("a", {
                                className: m().expandableJumpLinkList__itemLink,
                                "data-testid": "jump-link-list__item-link-".concat(t),
                                href: e.href,
                                onClick: C,
                                children: e.linkText
                            })
                        }, e.href)
                    })).concat([(0,
                    r.jsxs)("li", {
                        className: d()(m().expandableJumpLinkList__Affordance, m().expandableJumpLinkList__item),
                        "data-testid": "expandable-jump-link-list__affordance",
                        inert: !0,
                        children: [(0,
                        r.jsx)("div", {
                            className: m().expandableJumpLinkList__Overlay
                        }), h[g].linkText]
                    }, "affordance")], (0,
                    _._)(h.slice(g + 1).map(function(e, t) {
                        return (0,
                        r.jsx)("li", {
                            className: d()(m().expandableJumpLinkList__item, (0,
                            n._)({}, m().expandableJumpLinkList__activeItem, i === e.href), (0,
                            n._)({}, m()["expandableJumpLinkList__item--hidden"], !f)),
                            children: (0,
                            r.jsx)("a", {
                                className: m().expandableJumpLinkList__itemLink,
                                "data-testid": "expandable-jump-link-list__item-link-".concat(t),
                                href: e.href,
                                onClick: C,
                                children: e.linkText
                            })
                        }, g + e.href)
                    })))
                }), k && !f && (0,
                r.jsxs)("button", {
                    className: m().expandableJumpLinkList__Button,
                    onClick: function() {
                        return L({
                            expand: !0
                        })
                    },
                    onKeyDown: function(e) {
                        "Enter" === e.key && (y(!0),
                        setTimeout(function() {
                            var e, t, i;
                            null == x || null === (i = x.current) || void 0 === i || null === (t = i.querySelectorAll("li")[g]) || void 0 === t || null === (e = t.querySelector("a")) || void 0 === e || e.focus()
                        }, 100))
                    },
                    type: "button",
                    children: ["See ".concat(j, " More"), (0,
                    r.jsx)("span", {
                        className: "".concat(m().icon, " ").concat(m().iconDown, " icon icon-chevron-right")
                    })]
                }), k && f && (0,
                r.jsxs)("button", {
                    className: m().expandableJumpLinkList__Button,
                    onClick: function() {
                        return L({
                            expand: !1
                        })
                    },
                    type: "button",
                    children: ["See Less", (0,
                    r.jsx)("span", {
                        className: "".concat(m().icon, " ").concat(m().iconUp, " icon icon-chevron-right")
                    })]
                })]
            })
        }
          , b = i(67684)
          , f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = (0,
            a._)((0,
            l.useState)(""), 2)
              , n = i[0]
              , r = i[1]
              , s = (0,
            l.useRef)(e);
            return (0,
            l.useEffect)(function() {
                s.current = e
            }, [e]),
            (0,
            l.useEffect)(function() {
                if (e.length) {
                    var i = e.filter(function(e) {
                        return e && e.length > 0
                    });
                    if (i.length) {
                        var n = function() {
                            var e = window.scrollY;
                            if (i.length > 0 && i[0]) {
                                var t = document.querySelector(s.current[0]);
                                if (t && e < t.getBoundingClientRect().top + window.scrollY - 350) {
                                    r("");
                                    return
                                }
                            }
                            var n = [];
                            i.forEach(function(t) {
                                var i = document.querySelector(t);
                                if (i) {
                                    var a = i.getBoundingClientRect().top + window.scrollY;
                                    a <= e + 350 && n.push({
                                        id: t,
                                        position: a
                                    })
                                }
                            }),
                            n.length > 0 ? (n.sort(function(e, t) {
                                return e.position - t.position
                            }),
                            r(n[n.length - 1].id)) : r("")
                        }
                          , a = new IntersectionObserver(function() {
                            n()
                        }
                        ,(0,
                        b._)({
                            rootMargin: "-350px 0px -60% 0px",
                            threshold: 0
                        }, t));
                        i.forEach(function(e) {
                            if (e) {
                                var t = document.querySelector(e);
                                t && a.observe(t)
                            }
                        });
                        var l = function() {
                            n()
                        };
                        return window.addEventListener("scroll", l, {
                            passive: !0
                        }),
                        n(),
                        function() {
                            window.removeEventListener("scroll", l),
                            i.forEach(function(e) {
                                if (e) {
                                    var t = document.querySelector(e);
                                    t && a.unobserve(t)
                                }
                            }),
                            a.disconnect()
                        }
                    }
                }
            }, [e, t]),
            n
        }
          , y = i(87992)
          , x = i(60707)
          , k = i.n(x)
          , j = i(80472)
          , C = i.n(j)
          , L = function(e) {
            var t = e.id
              , i = e.isCollapsible
              , o = void 0 === i || i
              , c = e.lastInteraction
              , u = void 0 === c ? void 0 : c
              , p = e.links
              , _ = void 0 === p ? [] : p
              , v = e.testId
              , m = e.title
              , b = void 0 === m ? "" : m
              , x = e.visible
              , j = e.variant
              , L = void 0 === j ? "default" : j
              , w = (0,
            l.useRef)(null)
              , I = (0,
            a._)((0,
            l.useState)(!o), 2)
              , A = I[0]
              , N = I[1]
              , T = (0,
            a._)((0,
            l.useState)(!1), 2)
              , S = T[0]
              , E = T[1]
              , M = f(_.map(function(e) {
                return e.href
            }))
              , R = "today" === (0,
            l.useContext)(y.O1)
              , P = "inline" === L
              , B = "topnav" === L
              , O = function() {
                o && N(function(e) {
                    return !e
                })
            };
            return b && _.length ? (0,
            r.jsx)("div", {
                className: d()(C().tableOfContents, (0,
                n._)({}, C().hidden, !(void 0 === x || x) && !S), (0,
                n._)({}, C().fullBleed, P), (0,
                n._)({}, k().parallelogram, R && !B), (0,
                n._)({}, k().parallelogramNoAffordance, R && !B && !P)),
                "data-testid": void 0 === v ? "table-of-contents" : v,
                "data-variant": L,
                "data-collapsible": o,
                ref: w,
                role: "button",
                tabIndex: "-1",
                id: void 0 === t ? "table-of-contents" : t,
                children: (0,
                r.jsxs)(s.n, {
                    additionalStyles: {
                        accordion: P && C().tableOfContents__accordionFullBleed,
                        open: C().tableOfContents__open,
                        accordion__content: P ? C().tableOfContents__accordionContentFullBleed : C().tableOfContents__accordion,
                        accordion__header: C().tableOfContents__accordionHeader
                    },
                    isCollapsible: o,
                    showAffordanceWithCount: P,
                    isOpen: A,
                    onToggle: O,
                    onFocus: function() {
                        "keydown" === u && E(!0)
                    },
                    title: b,
                    children: [!P && (0,
                    r.jsx)(h, {
                        callback: O,
                        clickTrackingId: "mbt_tableofcontents_jumplink",
                        activeLink: M,
                        links: _
                    }), P && (0,
                    r.jsx)(g, {
                        callback: O,
                        clickTrackingId: "mbt_tableofcontents_jumplink",
                        links: _
                    })]
                })
            }) : null
        }
    }
    ,
    63800: () => {}
    ,
    66092: () => {}
    ,
    66393: (e, t, i) => {
        "use strict";
        i.d(t, {
            U8: () => n,
            Ul: () => a,
            iu: () => r
        });
        var n = function(e, t) {
            var i = e.isScrolledPastFirstWindow
              , n = window.pageYOffset > window.innerHeight;
            n !== i && t(n)
        }
          , a = function(e, t) {
            return function(i) {
                i === e.id && t(!0)
            }
        }
          , r = function(e) {
            var t = e.mpsAd
              , i = e.setBoxflexRendered;
            (null == t ? void 0 : t.onRender) && (null == t || t.onRender(function(e) {
                e && !e.empty && i(!0)
            }))
        }
    }
    ,
    66429: () => {}
    ,
    67960: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiBmaWxsPSIjZmZmIiByPSIxNS41IiBzdHJva2U9IiM5OTkiLz48cGF0aCBkPSJtMTQuNjE1NCAyMC4wNzY5aC0zLjUzODVjLTEuMTI3OTMgMC0yLjA4OTQtLjM5NzMtMi44ODQ0LTEuMTkyMXMtMS4xOTI1LTEuNzU2MS0xLjE5MjUtMi44ODM3LjM5NzUtMi4wODkyIDEuMTkyNS0yLjg4NDcgMS43NTY0Ny0xLjE5MzMgMi44ODQ0LTEuMTkzM2gzLjUzODV2MWgtMy41Mzg1Yy0uODQ2MSAwLTEuNTcwNDguMzAxMy0yLjE3MzA1LjkwMzgtLjYwMjU3LjYwMjYtLjkwMzg1IDEuMzI3LS45MDM4NSAyLjE3MzEgMCAuODQ2Mi4zMDEyOCAxLjU3MDUuOTAzODUgMi4xNzMxczEuMzI2OTUuOTAzOCAyLjE3MzA1LjkwMzhoMy41Mzg1em0tMi4xMTU0LTMuNTc2OXYtMWg3djF6bTQuODg0NiAzLjU3Njl2LTFoMy41Mzg1Yy44NDYxIDAgMS41NzA1LS4zMDEyIDIuMTczMS0uOTAzOC42MDI1LS42MDI2LjkwMzgtMS4zMjY5LjkwMzgtMi4xNzMxIDAtLjg0NjEtLjMwMTMtMS41NzA1LS45MDM4LTIuMTczMS0uNjAyNi0uNjAyNS0xLjMyNy0uOTAzOC0yLjE3MzEtLjkwMzhoLTMuNTM4NXYtMWgzLjUzODVjMS4xMjc5IDAgMi4wODk0LjM5NzQgMi44ODQ0IDEuMTkyMnMxLjE5MjUgMS43NTYgMS4xOTI1IDIuODgzNmMwIDEuMTI3Ny0uMzk3NSAyLjA4OTMtMS4xOTI1IDIuODg0OHMtMS43NTY1IDEuMTkzMi0yLjg4NDQgMS4xOTMyeiIgZmlsbD0iIzU1NSIvPjwvc3ZnPg=="
    }
    ,
    69590: (e, t, i) => {
        "use strict";
        i.d(t, {
            eF: () => r,
            kp: () => a
        });
        var n = i(45526)
          , a = function(e, t) {
            var i = document.querySelector("#hfs-header > nav");
            if (i) {
                var a, r, l = new MutationObserver((a = e,
                r = t,
                function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = t[0], l = !((null === (e = i.target) || void 0 === e ? void 0 : e.classList) && i.target.classList.contains("stash-global"));
                    l !== a.state[r] && a.setState((0,
                    n._)({}, r, l))
                }
                ));
                return l.observe(i, {
                    attributes: !0
                }),
                l
            }
            return null
        }
          , r = function(e) {
            e && "function" == typeof e.disconnect && e.disconnect()
        }
    }
    ,
    69605: (e, t, i) => {
        "use strict";
        i.d(t, {
            y: () => c
        });
        var n = i(37876);
        i(14232);
        var a = i(95062)
          , r = i.n(a)
          , l = i(15039)
          , s = i.n(l)
          , o = i(41907)
          , d = i.n(o);
        function c(e) {
            var t = e.children
              , i = e.className;
            return (0,
            n.jsx)("div", {
                "data-testid": "count",
                className: d().msnbcDailyCount,
                children: (0,
                n.jsx)("div", {
                    className: s()(d().inner, void 0 === i ? null : i),
                    children: t
                })
            })
        }
        c.propTypes = {
            children: r().oneOfType([r().string, r().number]).isRequired,
            className: r().string
        }
    }
    ,
    69909: e => {
        e.exports = {
            container: "styles_container__KWZNf",
            "live-dot-blink": "styles_live-dot-blink__zqn_F",
            "fade-in": "styles_fade-in__D1D4Z",
            "expand-in": "styles_expand-in__7Fjid",
            "chatblog-expand-in": "styles_chatblog-expand-in__V7S_V"
        }
    }
    ,
    70355: e => {
        e.exports = {
            topicSubNav: "styles_topicSubNav__6l7lh",
            linkItems: "styles_linkItems__73al5",
            scrollingContent: "styles_scrollingContent___H4_p",
            pageBtnContainer: "styles_pageBtnContainer__wUn_L",
            topicSubNavInner: "styles_topicSubNavInner__1FbP4",
            "live-dot-blink": "styles_live-dot-blink__zeOQT",
            "fade-in": "styles_fade-in__AEebf",
            "expand-in": "styles_expand-in__yBfy0",
            "chatblog-expand-in": "styles_chatblog-expand-in__neX7q"
        }
    }
    ,
    73548: (e, t, i) => {
        "use strict";
        i.d(t, {
            P: () => m
        });
        var n = i(37876)
          , a = i(14232)
          , r = i(95062)
          , l = i.n(r)
          , s = i(15039)
          , o = i.n(s)
          , d = i(61623)
          , c = i(87992)
          , u = i(20309)
          , p = i(13257)
          , h = i(8389)
          , _ = u.verticalSlugMap.news
          , v = u.verticalSlugMap.today
          , m = function(e) {
            var t, i, r, l, s, u, m, g, b, f = e.block, y = void 0 === f ? "" : f, x = e.gridBodyClasses, k = void 0 === x ? "" : x, j = e.shouldRenderTodayGiftGuide, C = e.showTaboola, L = (0,
            a.useContext)(c.kj), w = (0,
            a.useContext)(c.O1), I = null !== (u = null == L ? void 0 : L.url) && void 0 !== u ? u : {}, A = null !== (m = null == L ? void 0 : null === (t = L.taxonomy) || void 0 === t ? void 0 : t.additionalTerms) && void 0 !== m ? m : [], N = null !== (g = null == L ? void 0 : null === (r = L.taxonomy) || void 0 === r ? void 0 : null === (i = r.primaryLabel) || void 0 === i ? void 0 : i.name) && void 0 !== g ? g : "", T = null !== (b = null == L ? void 0 : null === (s = L.taxonomy) || void 0 === s ? void 0 : null === (l = s.primarySection) || void 0 === l ? void 0 : l.name) && void 0 !== b ? b : "", S = (0,
            a.useMemo)(function() {
                var e = A.find(function(e) {
                    var t;
                    return (null == e ? void 0 : null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase()) === "on the show"
                })
                  , t = "on the show" === N.toLowerCase();
                return e || t
            }, [A, N]), E = (0,
            d.Wp)(L, w), M = (0,
            a.useMemo)(function() {
                return o()(k, "dn-l")
            }, [k]), R = (0,
            a.useMemo)(function() {
                return o()(k, y, "".concat(y, "__bottom-rail--recommended"))
            }, [k, y]), P = (0,
            a.useMemo)(function() {
                return "shop" === T.toLowerCase()
            }, [T]), B = (0,
            a.useMemo)(function() {
                return S && P
            }, [S, P]);
            return L && w ? (0,
            n.jsxs)("div", {
                className: "body-bottom-recommended",
                "data-testid": "body-bottom-recommended",
                children: [E === _ && (0,
                n.jsx)(h.A, {
                    additionalClasses: M,
                    isNBCNewsCommerce: !0,
                    sticky: !1,
                    url: I.primary,
                    pageRegion: "article-bottom"
                }), E === v && !B && (0,
                n.jsx)(h.A, {
                    additionalClasses: R,
                    isTrending: !0,
                    sticky: !1,
                    url: I.primary,
                    pageRegion: "article-bottom"
                }), B && (0,
                n.jsx)(h.A, {
                    additionalClasses: R,
                    isTrending: !0,
                    isShopTheShow: !0,
                    sticky: !1,
                    url: I.primary,
                    pageRegion: "article-bottom"
                }), (0,
                d.uV)(L) && !(void 0 !== C && C) && (0,
                n.jsx)(p.A, {}), void 0 !== j && j && (0,
                n.jsx)(h.A, {
                    additionalClasses: o()(k, y),
                    isGiftGuide: !0,
                    sticky: !1,
                    url: I.primary,
                    pageRegion: "article-bottom"
                })]
            }) : null
        };
        m.propTypes = {
            block: l().string,
            gridBodyClasses: l().string,
            shouldRenderTodayGiftGuide: l().bool,
            showTaboola: l().bool
        }
    }
    ,
    74501: () => {}
    ,
    75756: e => {
        e.exports = {
            reportingFrom: "styles_reportingFrom__cmKPT",
            icon: "styles_icon__UBlV_",
            "live-dot-blink": "styles_live-dot-blink__bjxLO",
            "fade-in": "styles_fade-in__7iOdI",
            "expand-in": "styles_expand-in__Aua64",
            "chatblog-expand-in": "styles_chatblog-expand-in__krIIM"
        }
    }
    ,
    75940: () => {}
    ,
    77092: e => {
        e.exports = {
            backToTop: "styles_backToTop__envaC",
            hidden: "styles_hidden__ohW0c",
            isVisible: "styles_isVisible__ic8Uq",
            "live-dot-blink": "styles_live-dot-blink__qMArR",
            "fade-in": "styles_fade-in__zPRci",
            "expand-in": "styles_expand-in__4cLhW",
            "chatblog-expand-in": "styles_chatblog-expand-in__cBwkN"
        }
    }
    ,
    80472: e => {
        e.exports = {
            tableOfContents: "styles_tableOfContents__PDvQI",
            hidden: "styles_hidden__0jwwd",
            fullBleed: "styles_fullBleed__V5Q5x",
            tableOfContents__accordion: "styles_tableOfContents__accordion__kVamE",
            tableOfContents__accordionFullBleed: "styles_tableOfContents__accordionFullBleed___IBwp",
            tableOfContents__open: "styles_tableOfContents__open__lGcLZ",
            tableOfContents__accordionContentFullBleed: "styles_tableOfContents__accordionContentFullBleed__9rXRv",
            tableOfContents__accordionHeader: "styles_tableOfContents__accordionHeader__8SgVt",
            "live-dot-blink": "styles_live-dot-blink__eJpFx",
            "fade-in": "styles_fade-in__lLd5W",
            "expand-in": "styles_expand-in__5wlqL",
            "chatblog-expand-in": "styles_chatblog-expand-in__YFoXY"
        }
    }
    ,
    81737: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => a
        });
        var n = {
            linear: function(e) {
                return e
            },
            easeIn: function(e) {
                return e * e
            },
            easeOut: function(e) {
                return e * (2 - e)
            },
            easeInOut: function(e) {
                return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
            }
        };
        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "linear"
              , a = arguments.length > 3 ? arguments[3] : void 0
              , r = window.pageYOffset
              , l = "now"in window.performance ? performance.now() : new Date().getTime()
              , s = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
              , o = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight
              , d = Math.max(0, Math.round("number" == typeof e ? e : e.offsetTop))
              , c = Math.round(s - d < o ? s - o : d);
            if ("requestAnimationFrame"in window == !1) {
                window.scroll(0, c),
                a && a();
                return
            }
            !function e() {
                var s = Math.min(1, (("now"in window.performance ? performance.now() : new Date().getTime()) - l) / t)
                  , o = Math.ceil(n[i](s) * (c - r) + r);
                if (window.scroll(0, o),
                Math.ceil(window.pageYOffset) === c || o === c) {
                    a && a();
                    return
                }
                requestAnimationFrame(e)
            }()
        }
    }
    ,
    90260: () => {}
    ,
    92196: e => {
        e.exports = {
            msnbcDailyRecircEnd: "styles_msnbcDailyRecircEnd__tmPxm",
            head: "styles_head__UN4Me",
            title: "styles_title__BDb_v",
            description: "styles_description__Oo0Jy",
            body: "styles_body__qfSus",
            item: "styles_item__P8SlN",
            info: "styles_info__G_lct",
            active: "styles_active__u14ei",
            unibrow: "styles_unibrow__ejfYD",
            isActive: "styles_isActive__dC__N",
            externalLink: "styles_externalLink__O9JyP",
            borderTop: "styles_borderTop__pJ2YX",
            borderBottom: "styles_borderBottom__0f2HC",
            "live-dot-blink": "styles_live-dot-blink__N2Pya",
            "fade-in": "styles_fade-in__gnpoA",
            "expand-in": "styles_expand-in___6TVa",
            "chatblog-expand-in": "styles_chatblog-expand-in__EoF3n"
        }
    }
    ,
    92955: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => n
        });
        let n = function() {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            return function(e) {
                return t.reduce(function(e, t) {
                    return t(e)
                }, e)
            }
        }
    }
    ,
    94396: (e, t, i) => {
        "use strict";
        i.d(t, {
            F: () => o
        });
        var n = i(37876)
          , a = i(14232)
          , r = i(61623)
          , l = i(82337)
          , s = i(87992)
          , o = function(e) {
            var t = e.isRail
              , i = void 0 !== t && t
              , o = e.article
              , d = e.showTaboola
              , c = (0,
            a.useContext)(s.xo).isS;
            if ((0,
            r.Bg)(o))
                return null;
            var u = o.id
              , p = o.url
              , h = o.ecommerceEnabled
              , _ = i && h ? "dn-l" : null;
            return (0,
            r.jW)(o, void 0 !== d && d, c) ? (0,
            n.jsx)(l.Ay, {
                id: u,
                canonicalUrl: p.canonical || p.primary,
                isRail: i,
                className: _,
                ecommerceEnabled: h
            }) : null
        }
    }
    ,
    95818: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => s
        });
        var n = i(37876)
          , a = i(14232)
          , r = i(20309)
          , l = i(34223);
        let s = function(e) {
            var t = e.vertical;
            return (0,
            a.useEffect)(function() {
                (0,
                r.isTelemundoVertical)(t) && function() {
                    try {
                        window.uscWidget.init({
                            theme: "telemundo",
                            lang: "es-US",
                            popoverRenewalTimeUnit: "days",
                            popoverRenewalTimeAmount: 60,
                            networkBrand: "nbcu-telemundo",
                            externalLinks: {
                                customerService: "/support/uc/#customer-service",
                                returnsPolicy: "/support/uc/#shipping-returns-policy",
                                faq: "/support/uc/#faqs",
                                termsAndConditions: "/support/uc/#terms-of-service",
                                privacyPolicy: "https://www.nbcuniversal.com/privacy-policies/privacy-latinamerica?brandA=Telemundo_Networks&intake=Telemundo_Networks"
                            }
                        })
                    } catch (e) {
                        console.error("Could not initialize Universal Checkout: ".concat(e))
                    }
                }()
            }, []),
            (0,
            n.jsx)(l.t, {
                children: (0,
                r.isTelemundoVertical)(t) ? (0,
                n.jsx)("script", {
                    src: "https://commerce.nbcuni.com/public/widget/latest/bootstrap.js"
                }) : null
            })
        }
    }
}]);
