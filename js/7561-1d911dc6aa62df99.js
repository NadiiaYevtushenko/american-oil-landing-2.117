(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7561], {
    794: (e, t, n) => {
        "use strict";
        n.d(t, {
            y: () => a
        });
        var a = function(e, t) {
            return "externalLink" === t && "NBC Sports" === e
        }
    }
    ,
    1432: e => {
        e.exports = {
            disclaimerModal: "styles_disclaimerModal__RDcWS",
            toggleBtn: "styles_toggleBtn__VUfi0",
            open: "styles_open__MIGEV",
            line: "styles_line__jNr8E",
            infoBtn: "styles_infoBtn__flve_",
            card: "styles_card__i5o6b",
            small: "styles_small__RpLnT",
            text: "styles_text__Lc3g8",
            "live-dot-blink": "styles_live-dot-blink__ZLdt_",
            "fade-in": "styles_fade-in__VP6Fg",
            "expand-in": "styles_expand-in__SA_rz",
            "chatblog-expand-in": "styles_chatblog-expand-in__8G3_n"
        }
    }
    ,
    1636: (e, t, n) => {
        "use strict";
        n.d(t, {
            k: () => w
        });
        var a = n(16927)
          , i = n(20294)
          , s = n(4902)
          , o = n(37876)
          , l = n(14232)
          , r = n(82780)
          , d = n.n(r)
          , c = n(61702)
          , u = n(21120)
          , _ = n(69527)
          , p = n(85993);
        function m(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
              , a = e.exec(t);
            return a ? m(e, t, (0,
            p._)(n).concat([a])) : n
        }
        var b = n(1767)
          , h = n(40625)
          , v = n(69995)
          , y = n(89933)
          , g = n(55463)
          , f = /<script[^>]+?src="([^"]+?)"[^>]*?><\/script>/gi
          , C = /<script>([^]+?)<\/script>/gi
          , w = function(e) {
            var t = e.widget
              , n = e.getDataActivityMapID
              , r = (0,
            l.useRef)(!0)
              , c = (0,
            h.Wx)({
                threshold: 0,
                rootMargin: "0px 0px 125% 0px"
            })
              , p = c.ref
              , w = c.inView
              , x = c.entry
              , k = void 0 === x ? {} : x;
            (0,
            l.useEffect)(function() {
                function e() {
                    return (e = (0,
                    a._)(function() {
                        var e, n;
                        return (0,
                        s.__generator)(this, function(a) {
                            switch (a.label) {
                            case 0:
                                if (!((e = (0,
                                _.sc)(d()(t, "properties['embed-code']", ""))) && "string" == typeof e))
                                    return [3, 2];
                                return [4, Promise.all(m(f, e).map(function(e) {
                                    var t = (0,
                                    i._)(e, 2)[1];
                                    return (0,
                                    u.A)(t, {
                                        location: k.target || "head",
                                        attributes: {
                                            defer: !0
                                        },
                                        force: !0
                                    })
                                }))];
                            case 1:
                                a.sent(),
                                n = document.createDocumentFragment(),
                                m(C, e).forEach(function(e) {
                                    var t = (0,
                                    i._)(e, 2)[1]
                                      , a = document.createElement("script");
                                    a.innerHTML = t,
                                    n.appendChild(a)
                                }),
                                k.target && k.target.appendChild(n),
                                a.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                w && r.current && (r.current = !1,
                function() {
                    e.apply(this, arguments)
                }())
            }, [w]);
            var j = (0,
            i._)((0,
            l.useState)(function() {
                return (0,
                _.sc)(d()(t, "properties['embed-code']", ""))
            }), 2)
              , T = j[0]
              , L = j[1]
              , B = (0,
            v.T)();
            if ((0,
            l.useEffect)(function() {
                if ("string" == typeof T && T.match(/<iframe.*src=".*?\.nbcsports.com\/video\/embed/) && B) {
                    var e = (0,
                    i._)(/src="([^"]+?)"/.exec(T) || [], 2)[1]
                      , t = (0,
                    y.modifyIfUrl)(e, function(e) {
                        e.searchParams.delete("embedType")
                    });
                    "string" == typeof t && L(T.replace(e, t))
                }
            }, [T, B]),
            !T || "string" != typeof T)
                return null;
            if (/^https?:\/\/nodeassets.nbcnews/.test(T))
                return (0,
                o.jsx)("iframe", {
                    loading: "lazy",
                    width: "100%",
                    height: "500px",
                    src: T,
                    title: "embed"
                });
            var N = (0,
            _.sc)((0,
            b.A)(T, "lazy"));
            if (N.match(/class=["“”]menu-embed["“”]/) && N.match(/embedId=["“”][0-9]+["“”]/))
                return (0,
                o.jsx)(g.y8, {
                    className: "menu-embed",
                    html: N,
                    getDataActivityMapID: n
                });
            if (/vimeo.com/.test(N)) {
                var O = N.replace(/\s*(width|height)=["']([^"]+)["']/g, "");
                return (0,
                o.jsx)("div", {
                    className: "embed-widget__use-presentation embed-widget__vimeo",
                    children: (0,
                    o.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: O
                        }
                    })
                })
            }
            var P = N.replace(f, "").replace(C, "");
            return (0,
            o.jsx)("div", {
                ref: p,
                className: "embed-widget__use-presentation",
                "data-testid": "advanced-embed",
                dangerouslySetInnerHTML: {
                    __html: P
                }
            })
        };
        w.propTypes = {
            widget: c.HL.isRequired
        }
    }
    ,
    1767: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => a
        });
        let a = function(e, t) {
            return e.replace(/<iframe/g, '<iframe loading="'.concat(t, '" '))
        }
    }
    ,
    3030: e => {
        e.exports = {
            baconCardsAuthor: "styles_baconCardsAuthor__fcwA3",
            baconCardsAuthorPhotoGroup: "styles_baconCardsAuthorPhotoGroup__6wWQe",
            baconCardsAuthorTextGroup: "styles_baconCardsAuthorTextGroup__bDVpP",
            baconCardsAuthorPhoto: "styles_baconCardsAuthorPhoto__8uFn2",
            baconCardsAuthorName: "styles_baconCardsAuthorName__zECGm",
            baconCardsAuthorHeadline: "styles_baconCardsAuthorHeadline__yBcoq",
            "live-dot-blink": "styles_live-dot-blink__TeCYu",
            "fade-in": "styles_fade-in__OMfeC",
            "expand-in": "styles_expand-in__JNaPG",
            "chatblog-expand-in": "styles_chatblog-expand-in__cQP8h"
        }
    }
    ,
    5225: (e, t, n) => {
        "use strict";
        n.d(t, {
            U: () => c
        });
        var a = n(37876);
        n(14232);
        var i = n(95062)
          , s = n.n(i)
          , o = n(97247)
          , l = n(61702)
          , r = n(3030)
          , d = n.n(r)
          , c = function(e) {
            var t, n, i, s, l, r, c, u, _, p, m, b = e.card, h = void 0 === b ? {} : b, v = h.computedValues, y = h.id, g = h.item, f = h.icid, C = null !== (r = null == v ? void 0 : v.headline) && void 0 !== r ? r : "", w = null !== (c = null == v ? void 0 : v.url) && void 0 !== c ? c : void 0, x = null !== (u = null == g ? void 0 : null === (n = g.authors) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.person) && void 0 !== u ? u : {}, k = null !== (_ = null == x ? void 0 : x.name) && void 0 !== _ ? _ : "", j = null !== (p = null == x ? void 0 : null === (i = x.url) || void 0 === i ? void 0 : i.primary) && void 0 !== p ? p : "", T = null !== (m = null == x ? void 0 : null === (l = x.primaryImage) || void 0 === l ? void 0 : null === (s = l.url) || void 0 === s ? void 0 : s.primary) && void 0 !== m ? m : "https://media-cldnry.s-nbcnews.com/image/upload/newsgroup-logos/msnbc/columnists/default-square-120x120.png";
            return (0,
            a.jsxs)("div", {
                className: d().baconCardsAuthor,
                "data-contentid": y,
                children: [T && (0,
                a.jsx)("div", {
                    className: d().baconCardsAuthorPhotoGroup,
                    children: j ? (0,
                    a.jsx)(o.A, {
                        to: j,
                        className: d().baconCardsAuthorPhotoLink,
                        icid: f,
                        children: (0,
                        a.jsx)("img", {
                            src: T,
                            alt: k,
                            className: d().baconCardsAuthorPhoto
                        })
                    }) : (0,
                    a.jsx)("img", {
                        src: T,
                        alt: k,
                        className: d().baconCardsAuthorPhoto
                    })
                }), (0,
                a.jsxs)("div", {
                    className: d().baconCardsAuthorTextGroup,
                    children: [j ? (0,
                    a.jsx)(o.A, {
                        to: j,
                        className: d().baconCardsAuthorPhotoLink,
                        icid: f,
                        children: (0,
                        a.jsx)("span", {
                            className: d().baconCardsAuthorName,
                            children: (0,
                            a.jsx)("span", {
                                children: k
                            })
                        })
                    }) : (0,
                    a.jsx)("span", {
                        className: d().baconCardsAuthorName,
                        children: (0,
                        a.jsx)("span", {
                            children: k
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: d().baconCardsAuthorHeadline,
                        children: w ? (0,
                        a.jsx)(o.A, {
                            to: w,
                            className: d().baconCardsArticleLink,
                            icid: f,
                            children: C
                        }) : C
                    })]
                })]
            })
        };
        c.contextTypes = {
            vertical: s().string
        },
        c.propTypes = {
            card: l.Qs
        }
    }
    ,
    8436: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => p
        });
        var a = n(37876);
        n(14232);
        var i = n(95062)
          , s = n.n(i)
          , o = n(15039)
          , l = n.n(o)
          , r = n(78882)
          , d = n(30786)
          , c = n(61108)
          , u = n.n(c)
          , _ = function(e) {
            var t = e.cookTime
              , n = e.prepTime
              , i = e.type
              , s = e.servingSize
              , o = void 0 === s ? "" : s
              , c = e.yields;
            if ("recipe" !== i && "relatedRecipe" !== i)
                return null;
            var _ = (0,
            d.getShortDurationString)(t)
              , p = (0,
            d.getShortDurationString)(n)
              , m = o || (void 0 === c ? "" : c);
            return (0,
            a.jsxs)("div", {
                className: l()(u().container, "recipe-detail-container"),
                "data-testid": "recipe-details",
                children: [(0,
                a.jsx)(r.A, {
                    value: _,
                    label: "Cook Time:"
                }), (0,
                a.jsx)(r.A, {
                    value: p,
                    label: "Prep Time:"
                }), (null == m ? void 0 : m.length) ? (0,
                a.jsx)(r.A, {
                    value: m,
                    label: o ? "Servings:" : "Yields:"
                }) : null]
            })
        };
        _.propTypes = {
            cookTime: s().string.isRequired,
            prepTime: s().string.isRequired,
            servingSize: s().string,
            yields: s().string,
            type: s().string.isRequired
        };
        let p = _
    }
    ,
    10616: (e, t, n) => {
        "use strict";
        n.d(t, {
            $h: () => M,
            n9: () => E,
            xM: () => I,
            aR: () => O,
            f9: () => D,
            CX: () => W,
            rr: () => A,
            vw: () => P,
            Gs: () => F
        });
        var a = n(45526)
          , i = n(37876)
          , s = n(15039)
          , o = n.n(s)
          , l = n(14232)
          , r = n(9874)
          , d = n(13884)
          , c = n(53371)
          , u = n(89903)
          , _ = n(96491)
          , p = function(e, t) {
            return t ? "".concat(e, "-").concat(t) : null
        }
          , m = {
            embeddedArticle: "article",
            embeddedCard: "card",
            embeddedContentModule: "contentModule",
            embeddedCuratedList: "curatedList",
            embeddedImage: "image",
            embeddedPlaymakerLiveVideo: "playmakerLiveVideo",
            embeddedProduct: "product",
            embeddedProductList: "productList",
            embeddedRecipe: "recipe",
            embeddedSlideshow: "slideshow",
            embeddedTaxonomy: "taxonomy",
            embeddedVideo: "video",
            embeddedVideoPlaylist: "videoPlaylist",
            embeddedWidget: "widget"
        }
          , b = {
            id: function(e) {
                return "article-".concat(e)
            },
            primaryMedia: function(e) {
                var t, n = m[null == e ? void 0 : e.type], a = null === (t = e[n]) || void 0 === t ? void 0 : t.id;
                return p(n, a)
            },
            taxonomy: function(e) {
                var t;
                return null == e ? void 0 : null === (t = e.allTerms) || void 0 === t ? void 0 : t.map(function(e) {
                    return p("taxonomy", null == e ? void 0 : e.id)
                })
            },
            primaryImage: function(e) {
                return p("image", null == e ? void 0 : e.id)
            },
            teaseImage: function(e) {
                return p("image", null == e ? void 0 : e.id)
            },
            socialImage: function(e) {
                return p("image", null == e ? void 0 : e.id)
            },
            experts: function(e) {
                return null == e ? void 0 : e.map(function(e) {
                    var t;
                    return p("person", null == e ? void 0 : null === (t = e.person) || void 0 === t ? void 0 : t.id)
                })
            },
            authors: function(e) {
                return null == e ? void 0 : e.map(function(e) {
                    var t;
                    return p("person", null == e ? void 0 : null === (t = e.person) || void 0 === t ? void 0 : t.id)
                })
            },
            body: function(e) {
                var t = [];
                return null == e || e.forEach(function(e) {
                    var n, a = m[null == e ? void 0 : e.type];
                    a && t.push(p(a, null === (n = e[a]) || void 0 === n ? void 0 : n.id))
                }),
                t
            },
            source: function(e) {
                var t;
                return p("organization", null == e ? void 0 : null === (t = e.organization) || void 0 === t ? void 0 : t.id)
            }
        }
          , h = n(95062)
          , v = n.n(h)
          , y = n(32288)
          , g = n.n(y)
          , f = function(e) {
            var t, n = e.dek, s = e.hasNoImage, l = e.isShoppingSection, r = e.isLiveBreakingNews;
            return (0,
            i.jsx)("div", {
                className: o()(g().articleDek, (t = {},
                (0,
                a._)(t, g().withImage, !(void 0 !== s && s)),
                (0,
                a._)(t, g().isShoppingSection, void 0 !== l && l),
                (0,
                a._)(t, g().isLiveBreakingNews, void 0 !== r && r),
                t)),
                "data-testid": "article-dek",
                children: n
            })
        };
        f.propTypes = {
            dek: v().string.isRequired,
            hasNoImage: v().bool,
            isShoppingSection: v().bool,
            isLiveBreakingNews: v().bool
        };
        var C = n(37341)
          , w = n(64759)
          , x = n(31310)
          , k = n(51689)
          , j = n(38363)
          , T = n(67684)
          , L = n(62701)
          , B = n(1636)
          , N = n(55463)
          , O = function(e) {
            var t, n, a, i, s, o = e.isRecipe, l = null == e ? void 0 : null === (a = e.content) || void 0 === a ? void 0 : null === (n = a.primaryMedia) || void 0 === n ? void 0 : null === (t = n.presentation) || void 0 === t ? void 0 : t.style, r = null == e ? void 0 : null === (s = e.content) || void 0 === s ? void 0 : null === (i = s.primaryMedia) || void 0 === i ? void 0 : i.type;
            return r && ["embeddedPlaymakerLiveVideo", "embeddedVideo"].includes(r) || o ? "default" : l && ["default", "spread"].includes(l) ? l : "none"
        }
          , P = function(e, t) {
            var n = e.content.dek
              , a = e.isRecipe
              , s = e.isShoppingSection;
            if (!n || a)
                return null;
            var o = O(e);
            return (0,
            i.jsx)(f, {
                dek: n,
                isShoppingSection: s,
                isLiveBreakingNews: t,
                hasNoImage: "none" === o
            })
        }
          , A = function(e) {
            var t, n = e.block, s = e.content, l = void 0 === s ? {} : s, r = l.primaryImage, d = l.primaryMedia, c = e.isRecipe, u = e.isLiveBlog, _ = e.isShowBlog, p = e.heroLayoutType, m = d || {}, b = m.image, h = m.type;
            if (!h && !c)
                return null;
            var v = "embeddedPlaymakerLiveVideo" === h
              , y = v || c ? r : b;
            return (0,
            i.jsx)(C.A, {
                image: y,
                className: o()("".concat(n, "__caption layout-grid-item"), (t = {},
                (0,
                a._)(t, "".concat(n, "__caption--cvsdk"), v),
                (0,
                a._)(t, "grid-col-10-xl grid-col-push-2-xl", !u && !_ && !(null == p ? void 0 : p.wide) && !c),
                (0,
                a._)(t, "grid-col-7_5-l grid-col-6-xl grid-col-push-2-xl", u && !(null == p ? void 0 : p.wide)),
                (0,
                a._)(t, "".concat(n, "__caption--recipe dn-print"), c),
                (0,
                a._)(t, "grid-col-11-m grid-col-10-xl grid-col-push-1-xl", null == p ? void 0 : p.wide),
                (0,
                a._)(t, "grid-col-10-m grid-col-12-l grid-col-10-xl grid-col-push-1-m grid-col-push-0-l grid-col-push-1-xl", c),
                t))
            })
        }
          , H = function(e) {
            var t, n = e.block, a = e.isRecipe, s = e.isShowBlog, l = e.isPresentationStyleWide, d = e.content, u = d.primaryMedia, _ = d.primaryImage;
            t = s ? {
                s: r.Ay.FIT_760w,
                l: r.Ay.FIT_560w
            } : l ? {
                s: r.Ay.FIT_760w,
                m: r.Ay.FIT_1000w,
                l: r.Ay.FIT_1240w,
                xl: r.Ay.FIT_1520w
            } : {
                s: r.Ay.FIT_560w,
                m: r.Ay.FIT_760w,
                l: r.Ay.FIT_1000w
            };
            var p = (a ? _ : u.image) || {}
              , m = p.width
              , b = p.height
              , h = p.url.primary;
            return (0,
            i.jsx)("figure", {
                className: o()("".concat(n, "__main"), {
                    mb4: s
                }),
                children: (0,
                i.jsx)(x.V, {
                    preload: !0,
                    loadingLazy: !1,
                    url: h,
                    className: "".concat(n, "__main-image"),
                    alt: (0,
                    c.R)(p),
                    flavor: "fit",
                    responsiveFlavors: t,
                    sizes: t,
                    originalHeight: b,
                    originalWidth: m
                })
            })
        }
          , S = function(e) {
            var t, n, a, s, o, l = e.block, r = e.content, d = r.primaryMedia, c = r.subType, p = e.isChromeless, m = e.socialMediaProfiles, b = e.vertical, h = e.primaryMediaBannerEnabled, v = e.pipAlignDesktop, y = e.pipAlignMobile, g = (a = (n = (t = (0,
            u.B0)(_.AUTOPLAY_ARTICLE_HERO_VIDEOS, b)) || {}).muted,
            s = n.chromelessAutoplay,
            o = "boolean" == typeof (null == d ? void 0 : d.autoplay) ? d.autoplay : (null == t ? void 0 : t.autoplay) || !1,
            {
                autoPlay: o = p ? void 0 !== s && s : o,
                onlyAutoplayMuted: void 0 !== a && a
            }), f = g.autoPlay, C = g.onlyAutoplayMuted;
            return (0,
            i.jsxs)("div", {
                className: "".concat(l, "__video"),
                children: [(0,
                i.jsx)(w.A, {
                    loadingLazy: !1,
                    autoPlay: f,
                    disablePlaylistAutoplay: d.disablePlaylistAutoplay,
                    autoplayCapabilities: {
                        canAutoplayMuted: !0,
                        canAutoplayUnmuted: !1,
                        isTestingAutoplayCapabilities: !1
                    },
                    isHero: !0,
                    onlyAutoplayMuted: C,
                    social: m,
                    video: d.video,
                    disableSticky: !1,
                    pipAlignDesktop: v,
                    pipAlignMobile: y
                }), h && "news" === b && "FEATURED" !== c && (0,
                i.jsx)(j.F, {
                    type: "newsNow",
                    dataIcid: "article_primary-media-banner-cta"
                })]
            })
        }
          , V = function(e) {
            var t, n, a, s, l = e.block, r = e.vertical, c = e.authenticated, u = e.provider, _ = e.hasTempPass, p = e.videoError, m = e.primaryMediaBannerEnabled, b = null == e ? void 0 : null === (t = e.content) || void 0 === t ? void 0 : t.subType, h = null == e ? void 0 : null === (s = e.content) || void 0 === s ? void 0 : null === (a = s.primaryMedia) || void 0 === a ? void 0 : null === (n = a.playmakerLiveVideo) || void 0 === n ? void 0 : n.playmakerId, v = (0,
            d.pO)(h);
            if (h === d.ES.MSNBC && (h = d.ES.MSNBC_TVE),
            v) {
                var y = (0,
                i.jsx)(k._, {
                    autoplay: !0,
                    mutedAutoplay: !0,
                    stickyEnabled: !0,
                    stream: h
                });
                return (0,
                i.jsxs)("div", {
                    className: o()("".concat(l, "__video"), {
                        "article-hero__video__subheader-large": c && u && !_ || p,
                        "article-hero__video__subheader-small": !u || _
                    }),
                    children: [(0,
                    i.jsx)("div", {
                        className: o()("".concat(l, "__video-outer")),
                        children: (0,
                        i.jsx)("div", {
                            className: "".concat(l, "__video-inner"),
                            children: y
                        })
                    }), m && "news" === r && "FEATURED" !== b && (0,
                    i.jsx)(j.F, {
                        type: "newsNow"
                    })]
                })
            }
            return null
        }
          , M = function(e) {
            var t = e.pageRegion
              , n = void 0 === t ? "not-set" : t
              , a = e.componentName
              , i = e.componentTitle
              , s = i ? i.toLowerCase().replace(/ /g, "-") : "";
            return s ? "".concat(a, "-").concat(n, "-").concat(s) : "".concat(a, "-").concat(n)
        }
          , I = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = (null == e ? void 0 : e.content).primaryMedia;
            switch (null == n ? void 0 : n.type) {
            case "embeddedVideo":
                return S(e);
            case "embeddedPlaymakerLiveVideo":
                return V(e);
            case "embeddedImage":
                return H(e);
            case "embeddedWidget":
                return t ? function(e, t, n, a, i) {
                    if (!(null == e ? void 0 : e.widget))
                        return null;
                    var s, o, r, d = (0,
                    L._)((0,
                    T._)({}, e), {
                        widget: (0,
                        L._)((0,
                        T._)({}, null == e ? void 0 : e.widget), {
                            properties: (0,
                            L._)((0,
                            T._)({}, null == e ? void 0 : null === (s = e.widget) || void 0 === s ? void 0 : s.properties), {
                                "embed-code": null === (r = e.widget.properties) || void 0 === r ? void 0 : null === (o = r.embed) || void 0 === o ? void 0 : o.code
                            })
                        })
                    });
                    return (0,
                    l.createElement)(t, (0,
                    L._)((0,
                    T._)({}, d), {
                        key: void 0,
                        MenuEmbed: n,
                        getDataActivityMapID: a
                    }))
                }(n, B.k, N.y8, M) : null;
            default:
                return null
            }
        }
          , W = function(e) {
            var t, n, a;
            return null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : null === (t = n.html) || void 0 === t ? void 0 : t.includes("sponsored by Walmart")
        }
          , E = function(e) {
            var t = e.content;
            return e.isRecipe ? (t || {}).authors.map(function(e) {
                return e.name
            }).join(", ") : null
        }
          , D = function(e) {
            var t, n, a;
            switch (null !== (a = null == e ? void 0 : null === (n = e.content) || void 0 === n ? void 0 : null === (t = n.primaryMedia) || void 0 === t ? void 0 : t.type) && void 0 !== a ? a : null) {
            case "embeddedVideo":
            case "embeddedPlaymakerLiveVideo":
                return "video";
            case "embeddedImage":
                return "image";
            default:
                return null
            }
        };
        function F(e, t) {
            if (t)
                try {
                    var n, a = (n = new Set,
                    Object.keys(b).forEach(function(e) {
                        var a = t[e];
                        if (a) {
                            var i = b[e](a);
                            if (i) {
                                if (Array.isArray(i)) {
                                    i.filter(Boolean).forEach(function(e) {
                                        return n.add(e)
                                    });
                                    return
                                }
                                n.add(i)
                            }
                        }
                    }),
                    Array.from(n));
                    e.info({
                        message: "GetArticleCacheTags",
                        articleId: t.id,
                        cacheTags: a
                    })
                } catch (n) {
                    e.error({
                        message: "GetArticleCacheTagsError",
                        articleId: null == t ? void 0 : t.id,
                        err: n
                    })
                }
        }
    }
    ,
    14295: (e, t, n) => {
        "use strict";
        n.d(t, {
            V: () => a
        });
        var a = function(e) {
            switch (e) {
            case "related-article":
                return "icon-dot";
            case "slideshow":
                return "icon-gallery";
            case "video":
                return "icon-video";
            case "shop":
                return "icon-shop";
            default:
                return ""
            }
        }
    }
    ,
    15076: () => {}
    ,
    16488: e => {
        e.exports = {
            disclaimer: "styles_disclaimer__XT0Rm",
            content: "styles_content__Vhzs7",
            disclaimerAlternate: "styles_disclaimerAlternate__blj2w",
            "live-dot-blink": "styles_live-dot-blink__xZEBk",
            "fade-in": "styles_fade-in__ZgPrF",
            "expand-in": "styles_expand-in__ycXuI",
            "chatblog-expand-in": "styles_chatblog-expand-in__yv2Ap"
        }
    }
    ,
    17612: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => i
        });
        var a = function(e, t) {
            if (!e)
                return e;
            for (var n = e.substring(0, t), a = n.charAt(n.length - 1), i = 0; " " !== a && i < t; )
                i += 1,
                a = n.charAt(n.length - 1 - i);
            return "".concat(e.substring(0, n.length - 1 - i), "...")
        };
        function i(e, t) {
            return !e.length || e.length <= t ? e : a(e, t)
        }
    }
    ,
    19747: (e, t, n) => {
        "use strict";
        n.d(t, {
            d: () => h
        });
        var a = n(37876);
        n(14232);
        var i = n(95062)
          , s = n.n(i)
          , o = n(61702)
          , l = n(15039)
          , r = n.n(l)
          , d = n(82581)
          , c = n.n(d)
          , u = ["video", "shop", "recipe", "relatedRecipe", "slideshow", "product"]
          , _ = function() {
            return (0,
            a.jsx)("svg", {
                className: r()(c().svg, c().video),
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                a.jsxs)("g", {
                    children: [(0,
                    a.jsx)("circle", {
                        cx: "7.17188",
                        cy: "7",
                        r: "6.375",
                        stroke: "#FF503C",
                        strokeWidth: "1.25"
                    }), (0,
                    a.jsx)("path", {
                        d: "M5.07031 10.5V3.5L10.6703 7L5.07031 10.5Z",
                        fill: "#FF503C"
                    })]
                })
            })
        }
          , p = function() {
            return (0,
            a.jsxs)("svg", {
                className: c().svg,
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                a.jsx)("path", {
                    className: c().path,
                    d: "M9.33621 23.9645C10.4665 23.9645 11.3828 23.0483 11.3828 21.918C11.3828 20.7877 10.4665 19.8714 9.33621 19.8714C8.20593 19.8714 7.28966 20.7877 7.28966 21.918C7.28966 23.0483 8.20593 23.9645 9.33621 23.9645Z",
                    fill: "#231F20"
                }), (0,
                a.jsx)("path", {
                    className: c().path,
                    d: "M21.7422 23.9645C22.8725 23.9645 23.7888 23.0483 23.7888 21.918C23.7888 20.7877 22.8725 19.8714 21.7422 19.8714C20.6119 19.8714 19.6957 20.7877 19.6957 21.918C19.6957 23.0483 20.6119 23.9645 21.7422 23.9645Z",
                    fill: "#231F20"
                }), (0,
                a.jsx)("path", {
                    className: c().path,
                    d: "M24 12.21V4.91003C24 4.28762 23.4959 3.78349 22.8735 3.78349H6.37716C6.20066 3.78349 6 3.78349 5.84054 3.78349L5.3689 1.65527C5.28066 1.27225 4.93894 1 4.54559 1H0.844905C0.37833 1 0 1.37833 0 1.84491C0 2.31148 0.37833 2.68981 0.844905 2.68981H3.87342L7.42296 18.0699C7.51121 18.4529 7.85292 18.7252 8.24627 18.7252H22.9157C23.3823 18.7252 23.7606 18.3468 23.7606 17.8803C23.7606 17.4137 23.3823 17.0354 22.9157 17.0354H8.91844L8.43779 14.9531L22.8735 13.3366C23.5419 13.2408 24 12.8324 24 12.21Z",
                    fill: "#231F20"
                })]
            })
        }
          , m = function() {
            return (0,
            a.jsxs)("svg", {
                className: r()(c().svg, c().recipe),
                width: "20",
                height: "17",
                viewBox: "0 0 20 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                a.jsx)("path", {
                    className: c().path,
                    d: "M14.4729 14.1796L7.02238 7.17899C7.46427 5.98259 6.88534 4.23595 5.49816 2.89282C3.82291 1.27316 1.60788 0.847086 0.55351 1.97577C-0.500863 3.10445 -0.00583887 5.30256 1.67221 6.92221C3.10414 8.31049 4.93322 8.80993 6.09386 8.22866L13.5192 15.2124C13.6547 15.3398 13.8347 15.4078 14.0198 15.4015C14.2049 15.3951 14.3799 15.3149 14.5065 15.1785C14.5694 15.1108 14.6185 15.0312 14.6509 14.9443C14.6833 14.8574 14.6984 14.7648 14.6953 14.672C14.6922 14.5792 14.6709 14.488 14.6328 14.4035C14.5946 14.319 14.5403 14.2429 14.4729 14.1796Z"
                }), (0,
                a.jsx)("path", {
                    className: c().path,
                    d: "M8.75684 12.3877L6.17476 15.1784C6.04504 15.2998 5.87449 15.3671 5.69752 15.3667C5.52055 15.3663 5.35032 15.2981 5.22117 15.1761C5.09202 15.054 5.01355 14.8871 5.0016 14.7089C4.98964 14.5308 5.04509 14.3547 5.15675 14.2162L7.73255 11.4255L8.25195 12.0839L8.75684 12.3877ZM19.7696 3.31309C19.7285 3.27599 19.6805 3.24743 19.6284 3.22904C19.5764 3.21066 19.5212 3.20282 19.4662 3.20596C19.4111 3.20911 19.3572 3.22318 19.3075 3.24737C19.2578 3.27157 19.2134 3.30541 19.1767 3.34695L17.149 5.64382L16.6428 5.17542L18.6872 2.86726C18.724 2.82576 18.7522 2.77737 18.7704 2.72485C18.7886 2.67232 18.7964 2.6167 18.7932 2.56115C18.7901 2.5056 18.7762 2.45122 18.7522 2.4011C18.7283 2.35099 18.6948 2.30612 18.6537 2.26906C18.6125 2.23201 18.5646 2.20349 18.5125 2.18514C18.4604 2.16679 18.4053 2.15896 18.3503 2.1621C18.2952 2.16525 18.2413 2.1793 18.1916 2.20346C18.142 2.22763 18.0975 2.26142 18.0608 2.30292L16.0247 4.60261L15.4654 4.09188C15.4744 4.08507 15.4828 4.07752 15.4905 4.06931L17.6189 1.66522C17.6592 1.62456 17.6909 1.57602 17.7121 1.52258C17.7332 1.46913 17.7433 1.4119 17.7418 1.35439C17.7402 1.29687 17.7271 1.24027 17.7031 1.18805C17.6792 1.13583 17.645 1.08908 17.6025 1.05066C17.56 1.01225 17.5103 0.982967 17.4562 0.964613C17.4022 0.946259 17.345 0.939217 17.2881 0.943917C17.2313 0.948617 17.176 0.96496 17.1256 0.991947C17.0753 1.01893 17.0309 1.056 16.9952 1.10088L14.8669 3.50497V3.52472L14.3075 2.99706L16.3044 0.70584C16.3786 0.622023 16.4167 0.511911 16.4104 0.399726C16.4041 0.287542 16.3539 0.182475 16.2708 0.107638C16.2297 0.0705833 16.1817 0.0420654 16.1297 0.0237129C16.0776 0.00536045 16.0225 -0.00246712 15.9674 0.000677112C15.8562 0.00702718 15.7521 0.0576823 15.6779 0.141499L13.5552 2.53995L12.3358 3.88026C11.9858 4.3089 11.77 4.8328 11.7158 5.38544C11.6615 5.93808 11.7712 6.49453 12.031 6.98413L7.73255 11.4255L8.25195 12.0839L8.75684 12.3877L12.9819 8.03945C13.5193 8.38651 14.1583 8.53769 14.7927 8.46789C15.4271 8.39808 16.0187 8.1115 16.4694 7.6557L17.6636 6.34078L17.6804 6.32103L17.7643 6.22791L19.7919 3.93951C19.8338 3.89829 19.8667 3.84869 19.8884 3.79388C19.9102 3.73908 19.9203 3.6803 19.9182 3.62131C19.9161 3.56231 19.9018 3.50442 19.8762 3.45134C19.8506 3.39826 19.8143 3.35117 19.7696 3.31309Z"
                })]
            })
        }
          , b = function() {
            return (0,
            a.jsxs)("svg", {
                className: c().svg,
                width: "18",
                height: "13",
                viewBox: "0 0 18 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.6 0.8125H0.8V10.5625H0V0H13.6V0.8125ZM2.4 2.4375H16V13H2.4V2.4375ZM3.2 3.25H15.2V12.1875H3.2V3.25Z",
                    fill: "white"
                }), (0,
                a.jsx)("mask", {
                    id: "mask0_597_17791",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "16",
                    height: "13",
                    children: (0,
                    a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.6 0.8125H0.8V10.5625H0V0H13.6V0.8125ZM2.4 2.4375H16V13H2.4V2.4375ZM3.2 3.25H15.2V12.1875H3.2V3.25Z",
                        fill: "white"
                    })
                }), (0,
                a.jsx)("g", {
                    mask: "url(#mask0_597_17791)",
                    children: (0,
                    a.jsx)("rect", {
                        y: "-1.625",
                        width: "15.9503",
                        height: "16.25",
                        className: c().path
                    })
                })]
            })
        }
          , h = function(e) {
            var t, n = e.type, i = void 0 !== n && n, s = e.taxonomy, o = void 0 === s ? null : s, l = e.size, d = e.className, h = null == o ? void 0 : null === (t = o.primarySection) || void 0 === t ? void 0 : t.slug, v = u.includes(i) ? i : u.includes(h) && h;
            if (!v)
                return null;
            var y = r()(c().container, c()[v], c()[void 0 === l ? "small" : l], void 0 === d ? null : d)
              , g = _;
            return ("shop" === v || "product" === v ? g = p : "recipe" === v || "relatedRecipe" === v ? g = m : "slideshow" === v && (g = b),
            "shop" === v) ? null : (0,
            a.jsx)("span", {
                className: y,
                "data-testid": v,
                children: g()
            })
        };
        h.propTypes = {
            type: s().oneOfType([s().string, s().bool]),
            taxonomy: o.gg,
            size: s().string,
            className: s().string
        }
    }
    ,
    20001: e => {
        e.exports = {
            PrimaryMediaBannerCta: "styles_PrimaryMediaBannerCta__zHJ0H",
            LightPrimaryMediaBannerCta: "styles_LightPrimaryMediaBannerCta__ylZdB",
            DarkPrimaryMediaBannerCta: "styles_DarkPrimaryMediaBannerCta__Smtts"
        }
    }
    ,
    20689: (e, t, n) => {
        "use strict";
        n.d(t, {
            P: () => p
        });
        var a = n(45526)
          , i = n(37876)
          , s = n(14232)
          , o = n(15039)
          , l = n.n(o)
          , r = n(21216)
          , d = n(90988)
          , c = n.n(d)
          , u = n(87992);
        n(31118);
        var _ = "card-overlay"
          , p = function(e) {
            var t, n = e.activeOnHover, o = e.additionalClasses, d = void 0 === o ? {
                border: "",
                container: ""
            } : o, p = e.children, m = e.isActive, b = void 0 !== m && m, h = e.useModal, v = (0,
            s.useContext)(u.xo).isS, y = [_, d.border || null, d.container];
            return v ? b && void 0 !== h && h ? (0,
            i.jsx)(r.A, {
                preventBackgroundScroll: !0,
                children: (0,
                i.jsx)("div", {
                    className: l()(y, "".concat(_, "--modal")),
                    children: p
                })
            }) : null : (0,
            i.jsx)("div", {
                className: l()(y, "".concat(_, "--absolute"), (t = {},
                (0,
                a._)(t, c().cardOverlayHover, n),
                (0,
                a._)(t, "active", b),
                t)),
                "data-testid": "cardOverlay",
                children: p
            })
        }
    }
    ,
    20913: (e, t, n) => {
        "use strict";
        n.d(t, {
            Dw: () => o,
            RT: () => l,
            Tt: () => a,
            am: () => s,
            je: () => i
        }),
        n(13560);
        var a = "https://www.today.com/shop/everything-you-need-know-about-shop-today-t161374"
          , i = {
            DEFAULT: "Our editors independently selected these items because we think you will enjoy them and might like them at these prices. If you purchase something through our links, we may earn a commission. Pricing and availability are accurate as of publish time.",
            PRIME_DAY: "Prime Day is an event created by Amazon. Our editors independently selected these items because we think you will enjoy them and might like them at these prices. If you purchase something through our links, we may earn a commission. Pricing and availability are accurate as of publish time.",
            TARGET_SHOP_THIS_LIST: "This content is sponsored by Target. Our editorial team independently selected these products. When you buy through our links, we earn a commission. ",
            SELECT_CUSTOMER: 'Select is editorially independent. We may earn a commission from affiliate partner links. Read more about <a href="https://www.nbcnews.com/select/about" target="_blank">NBC Select</a>.',
            PRODUCT: '<span class="disclaimer__lead-in">DISCLAIMER</span>: Our editors independently selected these items because we think you will enjoy them and might like them at these prices. If you purchase something through our links, we may earn a commission. Pricing and availability are accurate ' + 'as of publish time. <a href="'.concat(a, '">Learn more about Shop TODAY</a>'),
            SELECT_DEFAULT: "Select is editorially independent. Our editors selected these deals and items because we think you will enjoy them at these prices. If you purchase something through our links, we may earn a commission. Pricing and availability are accurate as of publish time."
        }
          , s = function(e) {
            return "nbcNewsGeneralCommerceStackCommerce" === e
        };
        function o(e) {
            if (!e || "string" != typeof e || !function(e) {
                try {
                    var t = new URL(e).hostname.toLowerCase();
                    return "amazon.com" === t || t.endsWith(".amazon.com")
                } catch (e) {
                    return !1
                }
            }(e))
                return {};
            try {
                var t = new URL(e)
                  , n = t.pathname.split("/").filter(function(e) {
                    return e.length > 0
                });
                if (0 === n.length)
                    return {};
                var a = n[n.length - 1]
                  , i = t.searchParams.get("tag");
                return {
                    productAsin: a,
                    associateTag: i
                }
            } catch (e) {
                return {}
            }
        }
        function l(e) {
            var t = []
              , n = e.map(function(e) {
                var n = ((null == e ? void 0 : e.offers) || []).find(function(e) {
                    var t;
                    return (null == e ? void 0 : null === (t = e.seller) || void 0 === t ? void 0 : t.name) === "Amazon"
                });
                if (!n)
                    return null;
                var a = o(n.externalUrl)
                  , i = a.productAsin
                  , s = a.associateTag;
                return t.push(s),
                {
                    asin: i
                }
            }).filter(Boolean);
            return 0 === n.length ? null : {
                accountId: "3219",
                associateTag: t[0],
                products: n
            }
        }
    }
    ,
    26677: (e, t, n) => {
        "use strict";
        n.d(t, {
            AL: () => e7,
            Kb: () => te
        });
        var a, i, s, o, l, r, d, c, u, _ = n(45526), p = n(67684), m = n(62701), b = n(20294), h = n(37876), v = n(14232), y = n(11806), g = n(39324), f = n.n(g), C = n(15039), w = n.n(C), x = n(77170), k = n.n(x), j = n(51845), T = n(40625), L = n(82737), B = n(794), N = n(62870);
        function O(e, t) {
            var n = t.trackingId;
            window.NFW ? window.NFW.addProducts(e, {
                trackingId: n
            }) : window.open("https://content-cart-api-prod.northfork.se/carts/push-to-cart" + "?campaign=".concat(n, "&storeId=2503&storeProvider=target&partner=nbcu&extraProductIds=").concat(e.join(",")), "_blank")
        }
        var P = n(20309)
          , A = n(10616)
          , H = n(20913)
          , S = n(89903)
          , V = n(39149)
          , M = n.n(V)
          , I = n(81481)
          , W = function(e, t, n, a) {
            if (!e)
                return null;
            var i = e.clientWidth ? Math.max(e.clientWidth - a, 1) : 1
              , s = e.querySelectorAll(".".concat(t))
              , o = (0,
            b._)(s, 1)[0]
              , l = (null == o ? void 0 : o.offsetWidth) || n || 1
              , r = (Math.floor(i / l) || 1) * l
              , d = Math.ceil((e.scrollWidth || s.length * l) / r - .25);
            return {
                cardWidth: l,
                containerWidth: i,
                totalPages: Math.min(s.length, d) || 1,
                pageWidth: r
            }
        }
          , E = function(e) {
            var t = e.containerScrollLeft
              , n = e.containerScrollWidth
              , a = e.containerWidth
              , i = e.pageWidth
              , s = e.totalPages;
            return t && a ? t + a >= n ? s : Math.floor(t / i + 1.5) : 1
        }
          , D = function(e) {
            var t = e.scrollContainerRef
              , n = e.paginationButtonSize
              , a = void 0 === n ? 0 : n
              , i = e.onScroll
              , s = e.cardWrapperClass
              , o = e.fallbackCardWidth
              , l = (0,
            b._)((0,
            v.useState)(1), 2)
              , r = l[0]
              , d = l[1]
              , c = (0,
            b._)((0,
            v.useState)(1), 2)
              , u = c[0]
              , _ = c[1]
              , p = (0,
            b._)((0,
            v.useState)(!0), 2)
              , m = p[0]
              , h = p[1]
              , y = (0,
            b._)((0,
            v.useState)(0), 2)
              , g = y[0]
              , f = y[1]
              , C = (0,
            v.useRef)(!1)
              , w = (0,
            v.useCallback)(function(e) {
                var n = t.current;
                if (n) {
                    var i = W(n, s, "function" == typeof o ? o(e) : o, a);
                    i && (_(i.totalPages),
                    f(i.pageWidth),
                    h(!e && i.totalPages > 1))
                }
            }, [t, s, a, o])
              , x = (0,
            v.useCallback)(function() {
                w(I.A.isS())
            }, []);
            (0,
            v.useEffect)(function() {
                return x(),
                window.addEventListener("resize", x),
                function() {
                    window.removeEventListener("resize", x)
                }
            }, [w]);
            var k = (0,
            v.useCallback)(function(e) {
                var n = g * (e - 1);
                !C.current && (C.current = !0,
                t.current.scrollTo({
                    behavior: "smooth",
                    left: n
                }),
                setTimeout(function() {
                    C.current = !1,
                    d(e)
                }, 500))
            }, [g, t])
              , j = (0,
            v.useCallback)(function() {
                r > 1 && k(r - 1)
            }, [k, r])
              , T = (0,
            v.useCallback)(function() {
                k(r === u ? 1 : r + 1)
            }, [k, u, r])
              , L = (0,
            v.useCallback)(function(e) {
                k(e)
            }, [k])
              , B = (0,
            v.useCallback)(M()(function(e) {
                var n = t.current;
                n && !C.current && (d(E({
                    containerScrollLeft: n.scrollLeft,
                    containerScrollWidth: n.scrollWidth,
                    containerWidth: n.clientWidth,
                    pageWidth: g,
                    totalPages: u
                })),
                null == i || i(e, {
                    x: t.current.scrollLeft + t.current.clientWidth,
                    width: t.current.scrollWidth
                }))
            }, 250), [t, g, a, u, i]);
            return {
                currentPage: r,
                shouldShowPagination: m,
                totalPages: u,
                handleScrollPrev: j,
                handleScrollNext: T,
                handleScrollToPage: L,
                onContainerScroll: B
            }
        }
          , F = n(96491)
          , R = n(87992)
          , Z = n(40918)
          , z = n(97247)
          , U = n(78168)
          , G = n(93149)
          , q = n(76550)
          , X = n(92036)
          , K = n(23548);
        function Q(e) {
            return e === K.SHOP_LIST_BY_ONE_PRODUCT
        }
        function Y(e) {
            return e === K.PRODUCT_BACON
        }
        var $ = n(8436)
          , J = n(93783)
          , ee = n(5225)
          , et = n(95062)
          , en = n.n(et)
          , ea = n(61702)
          , ei = n(34846)
          , es = n(99110)
          , eo = n(43987)
          , el = n(90327)
          , er = n(19747)
          , ed = n(96157)
          , ec = n(30786)
          , eu = n(14295)
          , e_ = n(60916)
          , ep = n(46719)
          , em = n(9874)
          , eb = n(94844)
          , eh = n(83850)
          , ev = n.n(eh)
          , ey = {
            one: "one",
            two: "two"
        }
          , eg = (a = {},
        (0,
        _._)(a, ey.one, {
            s: em.Ay.FOCAL_240x240
        }),
        (0,
        _._)(a, ey.two, {
            small: {
                s: em.Ay.FOCAL_260x130
            },
            large: {
                s: em.Ay.FOCAL_260x130,
                m: em.Ay.FOCAL_360x180
            }
        }),
        a)
          , ef = (i = {},
        (0,
        _._)(i, ey.one, "ASPECT_1X1"),
        (0,
        _._)(i, ey.two, "ASPECT_2X1"),
        i)
          , eC = (s = {},
        (0,
        _._)(s, ey.two, {
            better: "https://media4.s-nbcnews.com/i/newscms/2019_23/2888161/2x1_better_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            globalcitizen: "https://media1.s-nbcnews.com/i/newscms/2019_23/2888166/2x1_global-citizen_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            mach: "https://media3.s-nbcnews.com/i/newscms/2019_23/2888181/2x1_mach_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            msnbc: "https://media2.s-nbcnews.com/i/newscms/2019_23/2888186/2x1_msnbc_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            news: "https://media1.s-nbcnews.com/i/newscms/2019_23/2888216/2x1_nbcnews_fallback_image_0_cbf07ab7dd92887d74bd5e4ed1bde2e5.jpg",
            select: "https://media4.s-nbcnews.com/i/newscms/2021_38/3507110/fallback_2_1_select_b61f24cd574be68f4e1d2ac299748364.png",
            think: "https://media2.s-nbcnews.com/i/newscms/2019_23/2888206/2x1_think_fallback_image_0_a5e44c6d5a0a2527b7c92c966f3fb003.jpg",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }),
        (0,
        _._)(s, ey.one, {
            better: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507103/fallback_1_1_better_b61f24cd574be68f4e1d2ac299748364.png",
            globalcitizen: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507104/fallback_1_1_globalcitizen_b61f24cd574be68f4e1d2ac299748364.png",
            msnbc: "https://media1.s-nbcnews.com/i/newscms/2021_38/3507106/fallback_1_1_msnbc_b61f24cd574be68f4e1d2ac299748364.png",
            news: "https://media2.s-nbcnews.com/i/newscms/2021_38/3507107/fallback_1_1_nbc_b61f24cd574be68f4e1d2ac299748364.png",
            select: "https://media4.s-nbcnews.com/i/newscms/2021_38/3507108/fallback_1_1_select_b61f24cd574be68f4e1d2ac299748364.png",
            think: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507109/fallback_1_1_think_b61f24cd574be68f4e1d2ac299748364.png",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }),
        s)
          , ew = function(e) {
            var t, n, a, i, s, o, l, r, d, c, u, b, y, g, f, C, x, k, j, T, L, B, N, O, P = e.width, A = e.title, V = void 0 === A ? "" : A, M = e.trackBacon, I = void 0 === M ? function() {}
            : M, W = e.card, E = void 0 === W ? {} : W, D = E.computedValues, Z = void 0 === D ? {} : D, U = E.id, G = E.isLazyLoaded, q = E.item, X = E.type, K = e.openInNewTab, Q = e.pkgType, Y = e.showEyebrow, $ = void 0 === Y || Y, J = e.showTimestamp, ee = e.size, et = void 0 === ee ? ey.two : ee, en = e.variant, ea = void 0 === en ? void 0 : en, em = q || {}, eh = Z.headline, ew = void 0 === eh ? "" : eh, ex = Z.unibrow, ek = Z.url, ej = (0,
            v.useContext)(R.xo).isS, eT = (0,
            v.useContext)(R.O1), eL = (null == em ? void 0 : null === (N = em.taxonomy) || void 0 === N ? void 0 : null === (B = N.additionalTerms) || void 0 === B ? void 0 : null === (L = B.filter(function(e) {
                var t = e.termName;
                return (null == t ? void 0 : t.display) === "Workflow: NBC Sports Video"
            })) || void 0 === L ? void 0 : L.length) > 0, eB = (0,
            ep.jT)({
                item: em,
                type: X
            }, void 0 === Q ? null : Q, void 0 !== ej && ej), eN = eB && "_blank" || (void 0 !== K && K ? "_blank" : "_self");
            ek = eB ? eB.url : ek;
            var eO = (0,
            H.Dw)(ek)
              , eP = eO.productAsin
              , eA = eO.associateTag
              , eH = ea ? eg[et][ea] : eg[et]
              , eS = (0,
            e_.Tg)(Z, eC[et], eT, ef[et])
              , eV = (null === (O = (0,
            S.B0)(F.MYNEWS_ENABLED, eT)) || void 0 === O ? void 0 : O.teaseSaveEnabled) || !1;
            return (0,
            h.jsxs)("div", {
                className: ev().baconCardsWidthByOne,
                "data-testid": "x-by-one__container",
                "data-contentid": U,
                children: [(0,
                h.jsxs)("div", {
                    className: ev().baconCardsWidthByOneTeasePictureLinkWrapper,
                    children: [(0,
                    h.jsx)("div", {
                        children: (0,
                        h.jsxs)(z.A, {
                            className: w()(ev().baconCardsWidthByOneTeasePictureLink, (0,
                            _._)({}, ev().baconCardsWidthByOneTeasePictureLinkDeepLink, eB)),
                            "data-aps-asc-tag": eA,
                            "data-aps-asin": eP,
                            "data-product-id": U,
                            "data-testid": "x-by-one__tease-picture__link",
                            onClick: function() {
                                return I({
                                    action: "cardClick",
                                    title: V,
                                    id: U,
                                    headlineText: ew
                                })
                            },
                            target: eN,
                            to: ek,
                            children: [Z.isShoppable ? (0,
                            h.jsx)(ed.a, {}) : null, (0,
                            h.jsx)(es.A, {
                                computedValues: eS,
                                height: P / ("two" === et ? 2 : 1),
                                isSportsVideo: eL ? "video" : null,
                                lazyload: void 0 === G || G,
                                responsiveFlavors: eH,
                                type: X,
                                width: P
                            }), (0,
                            eu.V)(X) ? function(e) {
                                var t = e.computedValues
                                  , n = e.item
                                  , a = e.type
                                  , i = e.deepLink
                                  , s = (null == t ? void 0 : t.unibrow) ? (0,
                                p._)({}, t.unibrow) : {};
                                if (s.url = (0,
                                m._)((0,
                                p._)({}, s.url), {
                                    primary: t.url
                                }),
                                "slideshow" === a) {
                                    var o, l = null == n ? void 0 : null === (o = n.slides) || void 0 === o ? void 0 : o.length;
                                    s.text = "".concat(l, " IMAGES")
                                }
                                if ("video" === a) {
                                    var r = (0,
                                    ei.Bd)().t;
                                    s.text = (null == n ? void 0 : n.duration) ? (0,
                                    ec.formatDuration)(n.duration) : r("Watch")
                                }
                                var d = "".concat(ev().baconCardsWidthByOneIcon, " icon ").concat((0,
                                eu.V)(a));
                                return (0,
                                h.jsxs)("div", {
                                    className: "".concat(ev().baconCardsWidthByOneTeaseCategory, " x-by-one__tease-category"),
                                    "data-testid": "x-by-one__tease-category",
                                    children: [(0,
                                    h.jsx)(el.d, {
                                        className: w()(ev().baconCardsWidthByOneEyebrow, (0,
                                        _._)({}, ev().baconCardsWidthByOneEyebrowVideo, "video" === a), (0,
                                        _._)({}, ev().baconCardsWidthByOneEyebrowSlideshow, "slideshow" === a), a, (0,
                                        _._)({}, ev().baconCardsWidthByOneEyebrowDeepLink, i)),
                                        unibrow: (0,
                                        m._)((0,
                                        p._)({}, s), {
                                            url: null
                                        }),
                                        testId: "x-by-one__tease-category__unibrow"
                                    }), (0,
                                    h.jsxs)("div", {
                                        className: ev().baconCardsWidthByOneIconContainer,
                                        children: [(0,
                                        h.jsx)("span", {
                                            className: d,
                                            "data-testid": "x-by-one__tease-category__type-icon"
                                        }), (0,
                                        h.jsx)("span", {
                                            className: ev().baconCardsWidthByOneIconBackground
                                        })]
                                    })]
                                })
                            }({
                                computedValues: Z,
                                item: em,
                                type: X,
                                deepLink: eB,
                                target: eN
                            }) : null]
                        })
                    }), eV ? (0,
                    h.jsx)(eb.e, {
                        contentId: U || em.id,
                        contentType: X || em.type,
                        options: {
                            isThumbnail: !0,
                            showCTA: !0
                        }
                    }) : null]
                }), (n = (t = {
                    headlineText: ew,
                    url: ek,
                    type: X,
                    target: eN,
                    deepLink: eB,
                    productId: U,
                    showEyebrow: $
                }).headlineText,
                a = t.url,
                i = t.type,
                s = t.target,
                o = t.deepLink,
                l = t.productId,
                r = t.showEyebrow,
                c = (d = (0,
                H.Dw)(a)).productAsin,
                u = d.associateTag,
                (0,
                h.jsx)("h3", {
                    className: w()(ev().baconCardsWidthByOneHeader, (0,
                    _._)({}, ev().noEyebrow, !r)),
                    "data-testid": "x-by-one__headline__header",
                    children: (0,
                    h.jsxs)(z.A, {
                        className: ev().baconCardsWidthByOneHeaderLink,
                        "data-aps-asc-tag": u,
                        "data-aps-asin": c,
                        "data-product-id": l,
                        "data-testid": "x-by-one__headline__link",
                        target: s,
                        to: a,
                        children: [(0,
                        h.jsx)("span", {
                            className: ev().baconCardsWidthByOneHeaderLinkIcon,
                            children: (0,
                            h.jsx)(er.d, {
                                type: i
                            })
                        }), o && (0,
                        h.jsx)("span", {
                            className: ev().baconCardsWidthByOneHeaderDeepLinkEpisode,
                            children: o.episode
                        }), n]
                    })
                })), eB ? (0,
                h.jsxs)("span", {
                    className: ev().xByOneDeepLinkSeasonDate,
                    children: [(0,
                    h.jsx)("span", {
                        className: ev().xByOneDeepLinkSeason,
                        children: eB.season
                    }), (0,
                    h.jsx)(eo.A, {
                        dateLabel: "Air Date",
                        dateOnly: !0,
                        datePublished: eB.datePublished
                    })]
                }) : (b = void 0 === ex ? {} : ex,
                y = {
                    showEyebrow: $,
                    showTimestamp: void 0 !== J && J,
                    vertical: eT
                },
                g = em.dateCreated,
                f = em.datePublished,
                C = y.showEyebrow,
                x = y.showTimestamp,
                k = ev().baconCardsWidthByOneFontStyle,
                j = ev().baconCardsWidthByOneTimestampStyle,
                T = (0,
                h.jsx)("span", {
                    className: w()(k, j),
                    "data-testid": "x-by-one__info__delimiter",
                    children: "\xa0/\xa0"
                }),
                (0,
                h.jsxs)("div", {
                    children: [C && b.text && (0,
                    h.jsx)(el.d, {
                        className: w()(k, ev().baconCardsWidthByOneUnibrowSectionName),
                        unibrow: b,
                        testId: "x-by-one__info__unibrow",
                        target: eN
                    }), C && x && T, x && (0,
                    h.jsx)(eo.A, {
                        dateCreated: g,
                        datePublished: f,
                        dateOnly: !0,
                        testId: "x-by-one__info__timestamp",
                        styles: w()(k, j)
                    })]
                }))]
            })
        };
        ew.propTypes = {
            title: en().string,
            trackBacon: en().func,
            card: ea.Qs,
            openInNewTab: en().bool,
            pkgType: en().string,
            showEyebrow: en().bool,
            showTimestamp: en().bool,
            size: en().oneOf([ey.one, ey.two]),
            variant: en().string,
            width: en().number.isRequired
        };
        var ex = n(50898)
          , ek = n.n(ex)
          , ej = {
            one: "one",
            two: "two"
        }
          , eT = (o = {},
        (0,
        _._)(o, ej.one, {
            s: em.Ay.FOCAL_240x240
        }),
        (0,
        _._)(o, ej.two, {
            s: em.Ay.FOCAL_440x220
        }),
        o)
          , eL = (l = {},
        (0,
        _._)(l, ej.one, "ASPECT_1X1"),
        (0,
        _._)(l, ej.two, "ASPECT_2X1"),
        l)
          , eB = (r = {},
        (0,
        _._)(r, ej.two, {
            better: "https://media4.s-nbcnews.com/i/newscms/2019_23/2888161/2x1_better_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            globalcitizen: "https://media1.s-nbcnews.com/i/newscms/2019_23/2888166/2x1_global-citizen_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            mach: "https://media3.s-nbcnews.com/i/newscms/2019_23/2888181/2x1_mach_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            msnbc: "https://media2.s-nbcnews.com/i/newscms/2019_23/2888186/2x1_msnbc_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            news: "https://media1.s-nbcnews.com/i/newscms/2019_23/2888216/2x1_nbcnews_fallback_image_0_cbf07ab7dd92887d74bd5e4ed1bde2e5.jpg",
            select: "https://media4.s-nbcnews.com/i/newscms/2021_38/3507110/fallback_2_1_select_b61f24cd574be68f4e1d2ac299748364.png",
            think: "https://media2.s-nbcnews.com/i/newscms/2019_23/2888206/2x1_think_fallback_image_0_a5e44c6d5a0a2527b7c92c966f3fb003.jpg",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }),
        (0,
        _._)(r, ej.one, {
            better: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507103/fallback_1_1_better_b61f24cd574be68f4e1d2ac299748364.png",
            globalcitizen: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507104/fallback_1_1_globalcitizen_b61f24cd574be68f4e1d2ac299748364.png",
            msnbc: "https://media1.s-nbcnews.com/i/newscms/2021_38/3507106/fallback_1_1_msnbc_b61f24cd574be68f4e1d2ac299748364.png",
            news: "https://media2.s-nbcnews.com/i/newscms/2021_38/3507107/fallback_1_1_nbc_b61f24cd574be68f4e1d2ac299748364.png",
            select: "https://media4.s-nbcnews.com/i/newscms/2021_38/3507108/fallback_1_1_select_b61f24cd574be68f4e1d2ac299748364.png",
            think: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507109/fallback_1_1_think_b61f24cd574be68f4e1d2ac299748364.png",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }),
        r)
          , eN = function(e) {
            var t, n, a, i, s, o, l, r, d, c, u, _ = e.card, p = void 0 === _ ? {} : _, m = p.computedValues, b = void 0 === m ? {} : m, y = p.id, g = p.isLazyLoaded, f = p.item, C = p.type, w = e.card, x = void 0 === w ? {} : w, k = e.shouldShowDescription, T = e.size, L = void 0 === T ? ej.two : T, B = e.width, N = f || {}, O = (null === (d = x.item) || void 0 === d ? void 0 : d.offers.filter(function(e) {
                return e.seller
            })) || [], P = O[0], A = (null === (c = N.description) || void 0 === c ? void 0 : c.primary) || "", S = b.headline, V = b.dek, M = (0,
            v.useContext)(R.O1), I = "_blank", W = eT[L], E = (0,
            e_.Tg)(b, eB[L], M, eL[L]), D = null == P ? void 0 : P.externalUrl, F = (0,
            H.Dw)(D), Z = F.productAsin, U = F.associateTag, G = null == P ? void 0 : P.prices.find(function(e) {
                return (null == e ? void 0 : e.type) === "SALE" || (null == e ? void 0 : e.type) === "LIST"
            }), X = null == P ? void 0 : null === (u = P.seller) || void 0 === u ? void 0 : u.name;
            return (0,
            h.jsxs)("div", {
                className: ek().baconCardsWidthByOne,
                "data-testid": "additionalSellerByOne",
                "data-contentid": y,
                children: [(0,
                h.jsxs)("div", {
                    className: ek().baconCardsWidthByOneTeasePictureLinkWrapper,
                    children: [(0,
                    h.jsx)(z.A, {
                        "data-aps-asc-tag": U,
                        "data-aps-asin": Z,
                        "data-product-id": null == f ? void 0 : f.id,
                        "data-testid": "x-by-one__tease-picture__link",
                        onClick: function() {
                            var e;
                            (0,
                            j.stub)("track", "mbt_bacon_click", {
                                action: "itemClick",
                                name: null === (e = x.item) || void 0 === e ? void 0 : e.name,
                                listPrice: null == G ? void 0 : G.price,
                                seller: X
                            })
                        },
                        rel: "sponsored",
                        target: I,
                        to: D,
                        children: (0,
                        h.jsx)(es.A, {
                            computedValues: E,
                            height: B / ("two" === L ? 2 : 1),
                            lazyload: void 0 === g || g,
                            responsiveFlavors: W,
                            type: C,
                            width: B
                        })
                    }), (0,
                    h.jsx)(eb.e, {
                        contentId: N.id,
                        contentType: N.type,
                        options: {
                            isThumbnail: !0,
                            showCTA: !0
                        }
                    })]
                }), (n = (t = {
                    headlineText: void 0 === S ? "" : S,
                    url: D,
                    target: I,
                    product: x.item,
                    vertical: M
                }).headlineText,
                a = t.url,
                i = t.target,
                s = t.product,
                l = (o = (0,
                H.Dw)(a)).productAsin,
                r = o.associateTag,
                (0,
                h.jsx)("h3", {
                    className: ek().baconCardsWidthByOneHeader,
                    "data-testid": "x-by-one__headline__header",
                    children: (0,
                    h.jsx)(z.A, {
                        "data-aps-asc-tag": r,
                        "data-aps-asin": l,
                        "data-testid": "x-by-one__headline__link",
                        "data-product-id": null == s ? void 0 : s.id,
                        onClick: function() {
                            var e, t, n, a;
                            (0,
                            j.stub)("track", "mbt_bacon_click", {
                                action: "itemClick",
                                name: null == s ? void 0 : s.name,
                                listPrice: null == s ? void 0 : null === (t = s.offers[0]) || void 0 === t ? void 0 : null === (e = t.prices[0]) || void 0 === e ? void 0 : e.price,
                                seller: null == s ? void 0 : null === (a = s.offers[0]) || void 0 === a ? void 0 : null === (n = a.seller) || void 0 === n ? void 0 : n.name
                            })
                        },
                        rel: "sponsored",
                        target: i,
                        to: a,
                        children: n
                    })
                })), void 0 !== k && k && (0,
                h.jsx)("p", {
                    className: ek().description,
                    children: V || A
                }), O.map(function(e) {
                    var t, n = e.prices, a = void 0 === n ? [] : n, i = e.price, s = (0,
                    H.Dw)(e.externalUrl), o = s.productAsin, l = s.associateTag, r = e.seller || {}, d = (null == (t = r.name) ? void 0 : t.length) > 30 ? "".concat(t.slice(0, 30), "...") : t;
                    if (!r)
                        return null;
                    if (a.length > 1) {
                        var c = a.find(function(e) {
                            return "SALE" === e.type
                        })
                          , u = (0,
                        q.z7)(null == c ? void 0 : c.price)
                          , _ = (0,
                        q.z7)(i);
                        return (0,
                        h.jsx)(z.A, {
                            "data-aps-asc-tag": l,
                            "data-aps-asin": o,
                            "data-product-id": x.item.id,
                            "data-testid": "x-by-one__saleprice__link",
                            onClick: function() {
                                var e;
                                (0,
                                j.stub)("track", "mbt_bacon_click", {
                                    action: "itemClick",
                                    name: null === (e = x.item) || void 0 === e ? void 0 : e.name,
                                    listPrice: null == c ? void 0 : c.price,
                                    seller: null == r ? void 0 : r.name
                                })
                            },
                            rel: "sponsored",
                            target: "_blank",
                            to: e.externalUrl,
                            children: (0,
                            h.jsxs)("div", {
                                className: ek().productSellerWrapper,
                                children: [(0,
                                h.jsx)("div", {
                                    className: ek().priceWrapper,
                                    children: u !== _ ? (0,
                                    h.jsxs)(h.Fragment, {
                                        children: [(0,
                                        h.jsx)("p", {
                                            className: "".concat(ek().price, " ").concat(ek().newPrice),
                                            children: "$".concat(null == c ? void 0 : c.price)
                                        }), (0,
                                        h.jsx)("p", {
                                            className: ek().previousPrice,
                                            children: "$".concat(i)
                                        })]
                                    }) : (0,
                                    h.jsx)("p", {
                                        className: ek().price,
                                        children: "$".concat(i)
                                    })
                                }), (0,
                                h.jsx)("p", {
                                    className: ek().seller,
                                    children: d
                                })]
                            })
                        }, "".concat(r.id, "-").concat(r.name))
                    }
                    return (0,
                    h.jsx)(z.A, {
                        "data-aps-asc-tag": l,
                        "data-aps-asin": o,
                        "data-product-id": x.item.id,
                        "data-testid": "x-by-one__listprice__link",
                        onClick: function() {
                            var e;
                            (0,
                            j.stub)("track", "mbt_bacon_click", {
                                action: "itemClick",
                                name: null === (e = x.item) || void 0 === e ? void 0 : e.name,
                                listPrice: i,
                                seller: null == r ? void 0 : r.name
                            })
                        },
                        rel: "sponsored",
                        target: "_blank",
                        to: e.externalUrl,
                        children: (0,
                        h.jsxs)("div", {
                            className: ek().productSellerWrapper,
                            "data-testid": "additional-seller-price",
                            children: [(0,
                            h.jsx)("div", {
                                className: ek().priceWrapper,
                                children: (0,
                                h.jsx)("p", {
                                    className: ek().price,
                                    children: "$".concat(i)
                                })
                            }), (0,
                            h.jsx)("p", {
                                className: ek().seller,
                                children: d
                            })]
                        })
                    }, "".concat(r.id, "-").concat(r.name))
                })]
            })
        };
        eN.propTypes = {
            card: ea.Qs,
            shouldShowDescription: en().bool,
            size: en().oneOf([ej.one, ej.two]),
            width: en().number.isRequired
        };
        var eO = n(84180)
          , eP = n.n(eO)
          , eA = {
            one: "one",
            two: "two"
        }
          , eH = (d = {},
        (0,
        _._)(d, eA.one, {
            s: em.Ay.FOCAL_240x240
        }),
        (0,
        _._)(d, eA.two, {
            s: em.Ay.FOCAL_440x440
        }),
        d)
          , eS = (c = {},
        (0,
        _._)(c, eA.one, "ASPECT_1X1"),
        (0,
        _._)(c, eA.two, "ASPECT_2X1"),
        c)
          , eV = (u = {},
        (0,
        _._)(u, eA.two, {
            better: "https://media4.s-nbcnews.com/i/newscms/2019_23/2888161/2x1_better_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            globalcitizen: "https://media1.s-nbcnews.com/i/newscms/2019_23/2888166/2x1_global-citizen_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            mach: "https://media3.s-nbcnews.com/i/newscms/2019_23/2888181/2x1_mach_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            msnbc: "https://media2.s-nbcnews.com/i/newscms/2019_23/2888186/2x1_msnbc_fallback_image_215abc36bbb66c1ffd105ebd4f190283.jpg",
            news: "https://media1.s-nbcnews.com/i/newscms/2019_23/2888216/2x1_nbcnews_fallback_image_0_cbf07ab7dd92887d74bd5e4ed1bde2e5.jpg",
            select: "https://media4.s-nbcnews.com/i/newscms/2021_38/3507110/fallback_2_1_select_b61f24cd574be68f4e1d2ac299748364.png",
            think: "https://media2.s-nbcnews.com/i/newscms/2019_23/2888206/2x1_think_fallback_image_0_a5e44c6d5a0a2527b7c92c966f3fb003.jpg",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }),
        (0,
        _._)(u, eA.one, {
            better: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507103/fallback_1_1_better_b61f24cd574be68f4e1d2ac299748364.png",
            globalcitizen: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507104/fallback_1_1_globalcitizen_b61f24cd574be68f4e1d2ac299748364.png",
            msnbc: "https://media1.s-nbcnews.com/i/newscms/2021_38/3507106/fallback_1_1_msnbc_b61f24cd574be68f4e1d2ac299748364.png",
            news: "https://media2.s-nbcnews.com/i/newscms/2021_38/3507107/fallback_1_1_nbc_b61f24cd574be68f4e1d2ac299748364.png",
            select: "https://media4.s-nbcnews.com/i/newscms/2021_38/3507108/fallback_1_1_select_b61f24cd574be68f4e1d2ac299748364.png",
            think: "https://media3.s-nbcnews.com/i/newscms/2021_38/3507109/fallback_1_1_think_b61f24cd574be68f4e1d2ac299748364.png",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }),
        u)
          , eM = function(e) {
            var t, n, a, i = e.width, s = e.indexOffset, o = e.totalNumberOfCards, l = e.onAddProduct, r = e.card, d = void 0 === r ? {} : r, c = e.card, u = void 0 === c ? {} : c, p = u.computedValues, m = void 0 === p ? {} : p, y = u.id, g = u.isLazyLoaded, f = u.type, C = u.item, x = e.size, k = void 0 === x ? eA.two : x, T = e.shouldShowDescription, L = void 0 !== T && T, B = (0,
            b._)((0,
            v.useState)("add to cart"), 2), N = B[0], O = B[1], P = function() {
                var e, t, n, a, i = d.item, s = void 0 === i ? {} : i, o = s.name, l = s.offers, r = (0,
                b._)(null != l ? l : [], 1)[0], c = void 0 === r ? {} : r, u = (0,
                q.o4)(c), _ = null !== (t = null == c ? void 0 : null === (e = c.seller) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : null, p = null !== (n = null == u ? void 0 : u.list) && void 0 !== n ? n : null, m = null !== (a = null == u ? void 0 : u.sale) && void 0 !== a ? a : null;
                (0,
                j.stub)("track", "mbt_bacon_click", {
                    action: "addToCart",
                    item: {
                        name: void 0 === o ? "" : o,
                        seller: _,
                        listPrice: p,
                        salePrice: m
                    }
                }),
                O("added to cart"),
                setTimeout(function() {
                    return O("add to cart")
                }, 600)
            }, A = (0,
            q.pY)(d.item || []), H = m.headline, S = m.dek, V = (0,
            v.useContext)(R.O1), M = eH[k], I = (0,
            e_.Tg)(m, eV[k], V, eS[k]), W = (0,
            b._)(A, 1)[0], E = (0,
            q.o4)(W), D = (0,
            q.PL)(W), F = (C || {}).description, Z = (void 0 === F ? {} : F).primary;
            return (0,
            h.jsxs)("div", {
                className: eP().baconCardsWidthByOne,
                "data-contentid": y,
                "data-testid": "shop_list_by_one",
                children: [(0,
                h.jsxs)("div", {
                    className: eP().imageAndSaveButtonWrapper,
                    children: [(0,
                    h.jsx)(es.A, {
                        computedValues: I,
                        height: i / ("two" === k ? 2 : 1),
                        lazyload: void 0 === g || g,
                        responsiveFlavors: M,
                        type: f,
                        width: i
                    }), (0,
                    h.jsx)(eb.e, {
                        contentId: null == d ? void 0 : null === (t = d.item) || void 0 === t ? void 0 : t.id,
                        contentType: null == d ? void 0 : null === (n = d.item) || void 0 === n ? void 0 : n.type,
                        options: {
                            isThumbnail: !0,
                            showCTA: !0
                        }
                    })]
                }), (0,
                h.jsx)("p", {
                    className: eP().productNumbering,
                    children: "".concat(s, " of ").concat(o)
                }), (0,
                h.jsx)("h3", {
                    className: w()((a = {},
                    (0,
                    _._)(a, eP().baconCardsWidthByOneHeader, !L),
                    (0,
                    _._)(a, eP().baconCardsWidthByOneHeaderWithDescription, L),
                    a)),
                    "data-testid": "x-by-one__headline__header",
                    children: void 0 === H ? "" : H
                }), L && (0,
                h.jsx)("p", {
                    className: eP().description,
                    "data-testid": "description",
                    children: S || (void 0 === Z ? "" : Z)
                }), (0,
                h.jsxs)("div", {
                    className: eP().productSellerWrapper,
                    children: [(0,
                    q.T2)({
                        salePrice: E.sale,
                        listPrice: E.list
                    }) ? (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("p", {
                            className: eP().salePrice,
                            children: "$".concat(E.sale)
                        }), (0,
                        h.jsx)("p", {
                            className: eP().listPriceWithSale,
                            children: "$".concat(E.list)
                        })]
                    }) : (0,
                    h.jsx)("p", {
                        className: eP().listPrice,
                        children: "$".concat(E.list)
                    }), (0,
                    h.jsxs)("button", {
                        className: eP().addToCart,
                        "data-testid": "shoplistbyone-add-to-cart",
                        type: "button",
                        onClick: function() {
                            P(),
                            l(D)
                        },
                        children: [(0,
                        h.jsx)("div", {
                            alt: "Add to Cart Icon",
                            className: eP().addToCartIcon,
                            children: (0,
                            h.jsx)("svg", {
                                width: "19",
                                height: "19",
                                viewBox: "0 0 19 19",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                h.jsxs)("g", {
                                    children: [(0,
                                    h.jsx)("path", {
                                        d: "M7.39118 18.9723C8.28598 18.9723 9.01136 18.2469 9.01136 17.3521C9.01136 16.4573 8.28598 15.7319 7.39118 15.7319C6.49638 15.7319 5.771 16.4573 5.771 17.3521C5.771 18.2469 6.49638 18.9723 7.39118 18.9723Z"
                                    }), (0,
                                    h.jsx)("path", {
                                        d: "M17.2126 18.9723C18.1074 18.9723 18.8328 18.2469 18.8328 17.3521C18.8328 16.4573 18.1074 15.7319 17.2126 15.7319C16.3178 15.7319 15.5924 16.4573 15.5924 17.3521C15.5924 18.2469 16.3178 18.9723 17.2126 18.9723Z"
                                    }), (0,
                                    h.jsx)("path", {
                                        d: "M19 9.66659V3.88743C19 3.39469 18.6009 2.99559 18.1082 2.99559H5.04861C4.90889 2.99559 4.75003 2.99559 4.62379 2.99559L4.25041 1.31075C4.18055 1.00752 3.91002 0.791992 3.59862 0.791992H0.668914C0.299542 0.791992 3.05176e-05 1.0915 3.05176e-05 1.46088C3.05176e-05 1.83025 0.299542 2.12976 0.668914 2.12976H3.06649L5.87654 14.3057C5.9464 14.6089 6.21693 14.8244 6.52833 14.8244H18.1416C18.511 14.8244 18.8105 14.5249 18.8105 14.1555C18.8105 13.7862 18.511 13.4867 18.1416 13.4867H7.06047L6.67994 11.8382L18.1082 10.5584C18.6373 10.4826 19 10.1593 19 9.66659Z"
                                    })]
                                })
                            })
                        }), (0,
                        h.jsx)("span", {
                            className: eP().addToCart,
                            children: N
                        })]
                    })]
                })]
            })
        };
        eM.propTypes = {
            card: ea.Qs,
            size: en().oneOf([eA.one, eA.two]),
            width: en().number.isRequired,
            indexOffset: en().number.isRequired,
            totalNumberOfCards: en().number.isRequired,
            onAddProduct: en().func.isRequired,
            shouldShowDescription: en().bool
        };
        var eI = function(e) {
            var t = e.card
              , n = void 0 === t ? {} : t
              , a = e.openInNewTab
              , i = void 0 !== a && a
              , s = e.pkgType
              , o = void 0 === s ? null : s
              , l = e.showEyebrow
              , r = e.showTimestamp
              , d = e.width
              , c = void 0 === d ? 260 : d
              , u = e.indexOffset
              , _ = e.totalNumberOfCards
              , p = e.shouldShowAdditionalSeller
              , m = e.shouldShowDescription
              , b = void 0 !== m && m;
            return Q(o) ? (0,
            h.jsx)(eM, {
                card: n,
                openInNewTab: i,
                pkgType: o,
                size: "one",
                width: c,
                indexOffset: void 0 === u ? null : u,
                totalNumberOfCards: void 0 === _ ? null : _,
                shouldShowDescription: b
            }) : void 0 !== p && p ? (0,
            h.jsx)(eN, {
                card: n,
                openInNewTab: i,
                pkgType: o,
                shouldShowDescription: b,
                size: "one",
                width: c
            }) : (0,
            h.jsx)(ew, {
                card: n,
                openInNewTab: i,
                pkgType: o,
                showEyebrow: void 0 === l || l,
                showTimestamp: void 0 !== r && r,
                size: "one",
                width: c
            })
        };
        eI.propTypes = {
            card: ea.Qs,
            openInNewTab: en().bool,
            pkgType: en().string,
            showEyebrow: en().bool,
            showTimestamp: en().bool,
            width: en().number,
            indexOffset: en().number,
            totalNumberOfCards: en().number,
            shouldShowAdditionalSeller: en().bool,
            shouldShowDescription: en().bool
        };
        var eW = n(78640)
          , eE = n(96365)
          , eD = n(30309)
          , eF = n.n(eD)
          , eR = {
            s: em.Ay.FOCAL_440x440
        }
          , eZ = function(e) {
            var t, n, a, i, s, o, l, r, d, c, u, p, m, b, v, y = e.card, g = void 0 === y ? {} : y, f = g.computedValues, C = g.computedValues, x = (void 0 === C ? {} : C).headline, k = g.type, j = g.id, T = g.isLazyLoaded, L = e.openInNewTab, B = void 0 === L || L, N = e.width, O = void 0 === N ? 260 : N, P = e.trackLink, A = void 0 === P ? function() {}
            : P, S = B ? "_blank" : "_self", V = B ? "sponsored noopener noreferrer" : "", M = (0,
            e_.r0)(e), I = M.list, W = M.sale, E = M.productUrl;
            return (0,
            h.jsxs)("div", {
                className: eF().baconCardsOneByOne,
                "data-contentid": j,
                children: [(0,
                h.jsx)(z.A, {
                    "data-product-id": j,
                    className: "db relative",
                    rel: V,
                    target: S,
                    to: E,
                    onClick: A,
                    children: (0,
                    h.jsx)(es.A, {
                        computedValues: void 0 === f ? {} : f,
                        height: O,
                        lazyload: void 0 === T || T,
                        responsiveFlavors: eR,
                        type: k,
                        width: O
                    })
                }), function(e) {
                    var t, n = e.card, a = n.isCustomAd, i = n.id, s = e.openInNewTab, o = e.trackLink;
                    if (a)
                        return null;
                    var l = (0,
                    e_.r0)(e)
                      , r = l.list
                      , d = l.productName
                      , c = l.productUrl
                      , u = l.seller
                      , _ = (0,
                    H.Dw)(c)
                      , p = _.productAsin
                      , m = _.associateTag;
                    return (0,
                    h.jsx)(z.A, {
                        "data-aps-asc-tag": m,
                        "data-aps-asin": p,
                        "data-product-id": i,
                        className: eF().baconCardsOneByOneProductButton,
                        rel: s ? "sponsored noopener noreferrer" : "",
                        target: s ? "_blank" : "_self",
                        to: c,
                        onClick: o,
                        children: (0,
                        h.jsx)(eE.A, {
                            additionalStyles: {
                                shop: eF().baconCardsOneByOneProductButtonShop,
                                vendor: eF().baconCardsOneByOneProductButtonVendor
                            },
                            block: "BaconProduct",
                            isLink: !0,
                            isWaffle: !1,
                            isBacon: !0,
                            listPrice: r,
                            name: d || "",
                            seller: null !== (t = null == u ? void 0 : u.name) && void 0 !== t ? t : "",
                            trackingCode: "mbt_bacon_click"
                        })
                    })
                }(e), (n = (t = {
                    headlineText: void 0 === x ? "" : x,
                    url: E,
                    target: S,
                    rel: V,
                    productId: j,
                    trackLink: A
                }).headlineText,
                a = t.url,
                i = t.target,
                s = t.rel,
                o = t.trackLink,
                l = t.productId,
                (0,
                h.jsx)("h3", {
                    className: eF().baconCardsOneByOneProductHeadline,
                    children: (0,
                    h.jsx)(z.A, {
                        "data-product-id": l,
                        className: eF().baconCardsOneByOneProductHeadlineLink,
                        rel: s,
                        target: i,
                        to: a,
                        onClick: o,
                        children: n
                    })
                })), (u = (void 0 === (c = (d = void 0 === (r = e.card) ? {} : r).computedValues) ? {} : c).dek,
                b = (void 0 === (m = (void 0 === (p = d.item) ? {} : p).description) ? {} : m).primary,
                (v = u || (void 0 === b ? "" : b)) ? (0,
                h.jsx)("div", {
                    className: eF().baconCardsOneByOneProductDescription,
                    children: v
                }) : null), function(e, t) {
                    if (!e)
                        return null;
                    var n = (0,
                    q.T2)({
                        salePrice: t,
                        listPrice: e
                    })
                      , a = (0,
                    h.jsxs)(h.Fragment, {
                        children: [n && (0,
                        h.jsxs)("div", {
                            children: ["$", t]
                        }), (0,
                        h.jsxs)("div", {
                            children: ["$", e]
                        })]
                    });
                    return (0,
                    h.jsx)("div", {
                        className: w()(eF().baconCardsOneByOneProductPrice, (0,
                        _._)({}, eF().baconCardsOneByOneProductPriceSale, n)),
                        children: a
                    })
                }(I, W)]
            })
        };
        eZ.propTypes = {
            card: eW.A,
            openInNewTab: en().bool,
            width: en().number,
            trackLink: en().func
        };
        var ez = function(e) {
            var t = e.title
              , n = e.trackBacon
              , a = e.card
              , i = e.openInNewTab
              , s = e.pkgType
              , o = e.showEyebrow
              , l = e.showTimestamp
              , r = e.variant
              , d = e.width;
            return (0,
            h.jsx)(ew, {
                card: void 0 === a ? {} : a,
                openInNewTab: void 0 !== i && i,
                pkgType: void 0 === s ? null : s,
                showEyebrow: void 0 === o || o,
                showTimestamp: void 0 !== l && l,
                size: "two",
                width: void 0 === d ? 260 : d,
                title: void 0 === t ? "" : t,
                trackBacon: void 0 === n ? function() {}
                : n,
                variant: void 0 === r ? "small" : r
            })
        };
        ez.propTypes = {
            title: en().string,
            trackBacon: en().func,
            card: ea.Qs,
            openInNewTab: en().bool,
            pkgType: en().string,
            showEyebrow: en().bool,
            showTimestamp: en().bool,
            variant: en().string,
            width: en().number
        };
        var eU = n(91655)
          , eG = n(20689)
          , eq = n(17612)
          , eX = n(68225)
          , eK = n(90988)
          , eQ = n.n(eK)
          , eY = {
            better: "https://media4.s-nbcnews.com/i/newscms/2019_23/2887891/2x3_better_fallback_image_75962cb529381dae91e4953bf772b192.jpg",
            globalcitizen: "https://media3.s-nbcnews.com/i/newscms/2019_23/2887896/2x3_global-citizen_fallback_image_75962cb529381dae91e4953bf772b192.jpg",
            mach: "https://media2.s-nbcnews.com/i/newscms/2019_23/2887911/2x3_mach_fallback_image_75962cb529381dae91e4953bf772b192.jpg",
            msnbc: "https://media1.s-nbcnews.com/i/newscms/2019_23/2887916/2x3_msnbc_fallback_image_75962cb529381dae91e4953bf772b192.jpg",
            news: "https://media4.s-nbcnews.com/i/newscms/2019_23/2887921/2x3_nbcnews_fallback_image_75962cb529381dae91e4953bf772b192.jpg",
            think: "https://media1.s-nbcnews.com/i/newscms/2019_23/2887926/2x3_think_fallback_image_d1b83678453221b54caeeaba1d24d1b5.jpg",
            today: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/sunrise-846ed5.svg"
        }
          , e$ = function(e) {
            var t = e.url
              , n = e.target
              , a = e.productId
              , i = e.renderCaret
              , s = (0,
            ei.Bd)().t;
            return (0,
            h.jsxs)(z.A, {
                "data-product-id": a,
                "data-testid": "button",
                href: t,
                className: eQ().baconCardsTwoByThreeButton,
                target: n,
                children: [s("VIEW"), i && (0,
                h.jsx)("span", {
                    className: w()(eQ().caret, "icon", "icon-chevron-right"),
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-testid": "caret"
                })]
            })
        }
          , eJ = function(e) {
            var t = e.card
              , n = void 0 === t ? {} : t
              , a = e.openInNewTab
              , i = v.useContext(R.O1)
              , s = n.computedValues
              , o = void 0 === s ? {} : s
              , l = o.dek
              , r = o.headline
              , d = o.url
              , c = o.id
              , u = w()((0,
            _._)({}, eQ().baconCardsTwoByThreeOverlay, !!(null == l ? void 0 : l.length)))
              , p = /^\s+$/
              , m = !l || p.test(l)
              , b = m && p.test(r)
              , y = void 0 !== a && a ? "_blank" : "_self"
              , g = !b && (0,
            S.B0)(F.SHOW_2x3_CARD_GRADIENT, i);
            return (0,
            h.jsxs)("div", {
                className: eQ().baconCardsTwoByThreeContainer,
                "data-testid": "container",
                "data-contentid": c,
                children: [r && (0,
                h.jsx)("div", {
                    className: eQ().baconCardsTwoByThreeTitleWrapper,
                    children: (0,
                    h.jsx)(z.A, {
                        "data-product-id": c,
                        href: d,
                        className: eQ().baconCardsTwoByThreeTitleLink,
                        target: y,
                        children: (0,
                        h.jsx)("div", {
                            "data-testid": "title",
                            className: w()(eQ().baconCardsTwoByThreeTitle, (0,
                            _._)({}, eQ().noBG, b)),
                            children: (0,
                            eq.A)(r, 45)
                        })
                    })
                }), (0,
                h.jsx)(eU.A, {
                    imageUrl: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "news";
                        (0,
                        e_.Mj)(e) || Object.assign(e, {
                            alternateTeaseImages: [{
                                aspectRatio: "ASPECT_2X1",
                                image: {
                                    altText: t,
                                    url: {
                                        primary: eY[t.toLowerCase()]
                                    }
                                }
                            }]
                        });
                        var n = (0,
                        e_.WQ)({
                            computedValues: e
                        });
                        return (0,
                        eX.Qc)(n, em.Ay.FOCAL_240x360, "best", 2)
                    }(n.computedValues, i),
                    useBackground: !0,
                    styleOverride: {
                        bgContent: eQ().baconCardsTwoByThreeBgContent,
                        bgWrapper: eQ().baconCardsTwoByThreeBgWrapper,
                        bgGradient: !!g && [eQ().baconCardsTwoByThreeGradient, eQ().baconCardsTwoByThreeAdditionalGradient]
                    },
                    children: !m && (0,
                    h.jsxs)(eG.P, {
                        additionalClasses: {
                            container: u
                        },
                        activeOnHover: !0,
                        children: [(0,
                        h.jsx)("div", {
                            className: eQ().baconCardsTwoByThreeDescription,
                            "data-testid": "dek",
                            children: (0,
                            eq.A)(l, 220)
                        }), e$({
                            url: d,
                            target: y,
                            productId: c,
                            renderCaret: (0,
                            S.B0)(F.SHOW_2x3_BUTTON_CARET, i)
                        })]
                    })
                })]
            })
        };
        eJ.contextTypes = {
            vertical: en().string
        },
        eJ.propTypes = {
            card: eW.A,
            openInNewTab: en().bool
        };
        var e0 = {
            default: ez,
            twoOneSmall: ez,
            twoOneLarge: ez,
            twoOneLargeItems: ez,
            oneOne: eI,
            shopListByOneProduct: eM,
            oneOneProduct: eZ,
            twoThreePortrait: eJ,
            author: ee.U
        }
          , e1 = {
            twoOneLarge: "large",
            twoOneLargeItems: "large"
        }
          , e2 = {
            default: eI,
            oneOne: eI,
            shopListByOneProduct: eM
        };
        function e3(e) {
            var t, n, a, i, s, o, l, r = e.content, d = e.shouldShowAdditionalSeller, c = e.showItemDescriptions, u = e.item, _ = e.totalNumberOfCards, p = e.indexOffset, m = e.containerClasses, b = e.setMbtBaconClickTracking, v = e.vertical, y = e.trackLink, g = e.onAddProduct, f = e.shouldOpenLinkInNewTab, C = r.type, w = r.subType, x = r.metadata, k = r.cardType, j = void 0 === k ? void 0 : k, T = null == u ? void 0 : null === (t = u.authors) || void 0 === t ? void 0 : t[0], L = null == T ? void 0 : null === (n = T.person) || void 0 === n ? void 0 : n.name, B = null == T ? void 0 : null === (s = T.person) || void 0 === s ? void 0 : null === (i = s.primaryImage) || void 0 === i ? void 0 : null === (a = i.url) || void 0 === a ? void 0 : a.primary;
            if ("author" === j && !L && !B)
                return null;
            var N = (x || {}).title
              , O = u.metadata
              , P = u.item
              , A = u.related
              , H = d ? e2 : e0
              , S = null !== (l = H[w]) && void 0 !== l ? l : null !== (o = H[j]) && void 0 !== o ? o : H.default
              , V = e1[w]
              , M = (null == P ? void 0 : P.cookTime) || (null == u ? void 0 : u.cookTime)
              , I = (null == P ? void 0 : P.prepTime) || (null == u ? void 0 : u.prepTime);
            return (0,
            h.jsxs)("div", {
                className: m,
                "data-test-id": "card",
                "data-testid": "baconCardWrapper",
                children: [(0,
                h.jsx)(S, {
                    totalNumberOfCards: _,
                    indexOffset: p,
                    card: u,
                    title: N,
                    openInNewTab: void 0 !== f && f || (void 0 === O ? {} : O).openInNewTab,
                    pkgType: void 0 === C ? null : C,
                    showEyebrow: null == x ? void 0 : x.showEyebrow,
                    showTimestamp: null == x ? void 0 : x.showTimestamp,
                    trackBacon: b,
                    trackLink: void 0 === y ? null : y,
                    shouldShowAdditionalSeller: d,
                    onAddProduct: void 0 === g ? null : g,
                    shouldShowDescription: c,
                    variant: V,
                    vertical: v
                }), M || I ? (0,
                h.jsx)($.A, {
                    type: null == u ? void 0 : u.type,
                    cookTime: M,
                    prepTime: I
                }) : null, A ? (0,
                h.jsx)(J.A, {
                    related: A
                }) : null]
            })
        }
        var e6 = n(65952)
          , e8 = n.n(e6);
        (0,
        j.stub)("register", "mbt_bacon_click", {
            allowDuplicate: !0
        }),
        (0,
        j.stub)("register", "rmn_amazon_products_known", {
            allowDuplicate: !0
        });
        var e9 = {
            default: 260,
            author: 263,
            oneOneSmall: 260,
            oneOneProduct: 260,
            shopListByOneProduct: 260,
            twoOneSmall: 260,
            twoOneLarge: function(e) {
                return e ? 260 : 360
            },
            twoOneLargeItems: function(e) {
                return e ? 228 : 300
            },
            twoThreePortrait: 250,
            twoOneLargeVideoPage: function(e) {
                return e ? 260 : 220
            }
        }
          , e5 = "Add All Items To Cart"
          , e4 = function(e) {
            var t = e.items
              , n = e.trackingId
              , a = t;
            if (n) {
                var i = "production" === f()().publicRuntimeConfig.CODE_ENVIRONMENT ? "" : "test";
                i.length > 0 && (a = a.map(function(e) {
                    var t, a = ((null == e ? void 0 : null === (t = e.item) || void 0 === t ? void 0 : t.offers) || []).map(function(e) {
                        return (0,
                        m._)((0,
                        p._)({}, e), {
                            externalUrl: e.externalUrl.replace(n, "".concat(n).concat(i))
                        })
                    });
                    return (0,
                    m._)((0,
                    p._)({}, e), {
                        item: (0,
                        m._)((0,
                        p._)({}, e.item), {
                            offers: a
                        })
                    })
                }))
            }
            return a
        }
          , e7 = function(e) {
            var t, n, a, i, s, o, l, r, d, c, u, g, f, C, x, N, V, M, I = e.content, W = e.pageRegion, E = e.vertical, K = e.trackLink, $ = void 0 === K ? function() {}
            : K, J = e.onScroll, ee = e.shouldShowAdditionalSeller, et = void 0 !== ee && ee, en = e.inlineArticle, ea = void 0 !== en && en, ei = e.titleBgColor, es = void 0 === ei ? null : ei, eo = e.titleSize, el = void 0 === eo ? null : eo, er = e.useAltTitle, ed = void 0 !== er && er, ec = e.shouldOverrideShortDisclaimer, eu = void 0 !== ec && ec, e_ = e.showStripeBackground, ep = e.presentationStyle, em = void 0 === ep ? "" : ep, eb = (0,
            v.useRef)(), eh = (0,
            b._)((0,
            v.useState)(e5), 2), ev = eh[0], ey = eh[1], eg = v.useContext(R.MQ).isFluidWidthPage, ef = (0,
            b._)((0,
            v.useState)(null), 2), eC = ef[0], ew = ef[1], ex = D({
                cardWrapperClass: e8().baconCardWrapper,
                fallbackCardWidth: e9[null == I ? void 0 : I.cardType] || e9.default,
                onScroll: void 0 === J ? function() {}
                : J,
                paginationButtonSize: 50,
                scrollContainerRef: eb
            }), ek = ex.currentPage, ej = ex.totalPages, eT = ex.shouldShowPagination, eL = ex.handleScrollToPage, eB = ex.handleScrollPrev, eN = ex.handleScrollNext, eO = ex.onContainerScroll, eP = (0,
            b._)((0,
            T.Wx)({
                initialInView: !1,
                triggerOnce: !0,
                rootMargin: "250px 0px"
            }), 2), eA = eP[0], eH = eP[1];
            (0,
            v.useEffect)(function() {
                if (eH) {
                    var e, t, n = null == I ? void 0 : null === (t = I.items) || void 0 === t ? void 0 : null === (e = t.map(function(e) {
                        return null == e ? void 0 : e.item
                    })) || void 0 === e ? void 0 : e.filter(function(e) {
                        return (null == e ? void 0 : e.type) === "product"
                    }), a = (0,
                    H.RT)(n);
                    a && (0,
                    j.stub)("track", "rmn_amazon_products_known", a)
                }
            }, [eH]);
            var eS = function(e) {
                (0,
                j.stub)("track", "mbt_bacon_click", (0,
                p._)((0,
                m._)((0,
                p._)({}, e), {
                    content: I
                }), em && {
                    presentation: em
                }))
            }
              , eV = function() {
                var e = I.metadata
                  , t = I.subType
                  , n = e || {}
                  , a = n.componentTitle
                  , i = n.disclaimerKey
                  , s = n.disclaimerOverride
                  , o = n.ecommerceEnabled
                  , l = void 0 === o || o
                  , r = n.shortDisclaimer
                  , d = void 0 === r ? null : r;
                return "NONE" === i ? null : (("curated-list" === a || eu) && ((null == d ? void 0 : d.length) > 0 && eC !== d ? ew(d) : d || null === eC || ew(null)),
                "curated-list" === a) ? void 0 !== s && s && l && t && t.toLowerCase().includes("product") : l && t && t.toLowerCase().includes("product")
            }
              , eM = function() {
                var e = I.subType
                  , t = I.metadata || {}
                  , n = t.componentTitle
                  , a = t.description
                  , i = t.seeAllText
                  , s = t.seeAllUrl;
                if (!a)
                    return null;
                var o = Y(e) && "curated-list" !== n;
                return Q(e) || o ? (0,
                h.jsxs)("div", {
                    className: e8().description,
                    "data-testid": "bacon__description--read-more",
                    children: [a, s && (0,
                    h.jsx)(z.A, {
                        className: e8().readMoreLink,
                        to: s,
                        children: i || y.Ay.t("READ MORE")
                    })]
                }) : ea ? (0,
                h.jsx)("div", {
                    className: e8().description,
                    "data-testid": "bacon__description--rich-text",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                }) : (0,
                h.jsx)("div", {
                    className: e8().description,
                    "data-testid": "bacon__description",
                    children: a
                })
            }
              , eI = function() {
                if (!eV())
                    return null;
                var e = I.metadata || {}
                  , t = e.disclaimerKey
                  , n = e.disclaimerOverride
                  , a = e.hideDisclaimerLearnMore
                  , i = e.learnMoreLink;
                return (0,
                h.jsx)(Z.DisclaimerModal, {
                    disclaimerKey: t,
                    disclaimerOverride: {
                        disclaimerOverride: n
                    },
                    learnMoreLinkOverride: i,
                    showCloseButton: !0,
                    hideLearnMore: a,
                    small: !0,
                    children: (0,
                    h.jsx)(h.Fragment, {
                        children: null != eC ? eC : "".concat((0,
                        P.getDisplayNameForVertical)(E), " earns a commission on purchases through these links.")
                    })
                })
            }
              , eW = function() {
                return eT ? (0,
                h.jsx)("div", {
                    className: e8().baconPagingDots,
                    "data-testid": "bacon__paging-dots",
                    children: Array.from({
                        length: ej
                    }).map(function(e, t) {
                        var n = t + 1;
                        return (0,
                        h.jsx)("button", {
                            type: "button",
                            "aria-label": "Pagination",
                            onClick: function() {
                                eL(n),
                                eS({
                                    action: "navClick",
                                    type: "pagingDotNumber: ".concat(n)
                                })
                            },
                            "data-testid": "bacon__header__paging-dot",
                            className: w()(e8().baconPagingDot, (0,
                            _._)({}, e8().baconPagingDotIsCurrent, ek === n))
                        }, "".concat(n, "/").concat(ej))
                    })
                }) : null
            }
              , eE = I.metadata
              , eD = I.subType
              , eF = I.items
              , eR = eE || {}
              , eZ = eR.description
              , ez = eR.title
              , eU = eR.componentTitle
              , eG = eR.trackingId
              , eq = eR.showBottomBorder
              , eX = "curated-list" === eU
              , eK = Y(eD) && !eX
              , eQ = (void 0 === eF ? [] : eF).filter(function(e) {
                return !!e && ("product" !== e.type || !!e.id && !!e.item)
            });
            if (0 === eQ.length)
                return null;
            var eY = e4({
                items: eQ,
                trackingId: eG
            })
              , e$ = eV()
              , eJ = e$ || !!eZ
              , e0 = !!eY.find(function(e) {
                var t, n, a;
                return (null === (n = e.item) || void 0 === n ? void 0 : null === (t = n.description) || void 0 === t ? void 0 : t.primary) || (null === (a = e.computedValues) || void 0 === a ? void 0 : a.dek)
            })
              , e1 = (0,
            A.$h)({
                componentName: "bacon",
                pageRegion: void 0 === W ? "article-body" : W,
                componentTitle: eU || ez
            })
              , e2 = null != eD ? eD : I.cardType
              , e6 = "twoOneLargeItems" === eD
              , e7 = (0,
            S.B0)(F.SEE_MORE_BUTTON, E);
            return (0,
            h.jsxs)("section", {
                className: w()((V = {},
                (0,
                _._)(V, e8().stripe, (null == eD ? void 0 : eD.includes("Product")) && (void 0 === e_ || e_)),
                (0,
                _._)(V, "isShowingPagination", eT),
                (0,
                _._)(V, e8().inlineArticle, ea),
                (0,
                _._)(V, e8().twoOneLargeItemsBacon, e6),
                V), e8().baconPackage, "pkg bacon"),
                "data-packageid": I.id,
                "data-activity-map": e1,
                "data-testid": "baconPackage",
                ref: eA,
                children: [(0,
                h.jsx)(X.c, {
                    className: e8().baconHeaderTopBorder,
                    "data-testid": "bacon__header__top-border"
                }), (0,
                h.jsxs)("div", {
                    className: w()(e8().baconHeader, (M = {},
                    (0,
                    _._)(M, e8().baconHeaderFull, eJ),
                    (0,
                    _._)(M, e8().centerAlign, Q(eD)),
                    (0,
                    _._)(M, e8().flexColumn, !eJ),
                    M)),
                    children: [function() {
                        var e = I.metadata
                          , t = I.subType
                          , n = e || {}
                          , a = n.logoUrl
                          , i = n.seeAllText
                          , s = n.seeAllUrl
                          , o = n.title
                          , l = n.icid
                          , r = n.anchorId
                          , d = (0,
                        S.B0)(F.SEE_MORE_BUTTON, E)
                          , c = !Q(t) && !d && !!s
                          , u = w()(e8().baconTitle, (0,
                        _._)({}, e8().shopList, Q(t)));
                        if (!(o || a))
                            return null;
                        var p = w()("bacon-pkg-title", {
                            "bacon-pkg-title--inline-article": ea
                        });
                        return (0,
                        h.jsx)("div", {
                            className: e8().baconHeaderHeadline,
                            children: (0,
                            h.jsx)("button", {
                                onClick: function() {
                                    return eS({
                                        action: "navClick",
                                        type: "bacon-header"
                                    })
                                },
                                type: "button",
                                className: e8().baconHeaderHeadlineBtn,
                                "data-testid": "bacon__header",
                                children: (o || a) && (ed || eg ? (0,
                                h.jsx)(G.A, {
                                    metadata: {
                                        title: o,
                                        seeAllUrl: s,
                                        icid: l,
                                        logoUrl: a,
                                        anchorId: r
                                    },
                                    titleBgColor: es,
                                    size: el,
                                    className: p
                                }) : (0,
                                h.jsx)("h2", {
                                    className: u,
                                    "data-testid": "bacon__headline",
                                    children: (0,
                                    h.jsxs)(h.Fragment, {
                                        children: [(0,
                                        h.jsx)(U.A, {
                                            logoUrl: a,
                                            title: o
                                        }), c ? (0,
                                        h.jsx)(z.A, {
                                            className: e8().baconTitleLink,
                                            "data-testid": "bacon__header__see-all-link",
                                            to: s,
                                            icid: l,
                                            children: i || y.Ay.t("SEE ALL")
                                        }) : null]
                                    })
                                }))
                            })
                        })
                    }(), (0,
                    h.jsxs)("div", {
                        className: e8().baconHeaderInner,
                        children: [eK && (0,
                        h.jsxs)("div", {
                            className: e8().descriptionWrapper,
                            "data-testid": "bacon__header__dek",
                            children: [eM(), eI(), (0,
                            h.jsx)("div", {
                                className: e8().baconAddButtonPagingDots,
                                children: eW()
                            })]
                        }), Q(eD) && (0,
                        h.jsxs)("div", {
                            className: e8().descriptionWrapper,
                            "data-testid": "bacon__header__dek",
                            children: [eM(), eI(), (0,
                            h.jsxs)("div", {
                                className: e8().baconAddButtonPagingDots,
                                children: [(t = I.metadata,
                                n = I.items,
                                a = (t || {}).trackingId,
                                i = (0,
                                q.AQ)(n),
                                s = n.filter(function(e) {
                                    return !!e && !!e.item
                                }).map(function(e) {
                                    var t, n, a, i, s = e.item || {}, o = s.name, l = s.offers, r = (0,
                                    b._)(null != l ? l : [], 1)[0], d = void 0 === r ? {} : r, c = (0,
                                    q.o4)(d);
                                    return {
                                        name: o,
                                        seller: null !== (n = null == d ? void 0 : null === (t = d.seller) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null,
                                        listPrice: null !== (a = null == c ? void 0 : c.list) && void 0 !== a ? a : null,
                                        salePrice: null !== (i = null == c ? void 0 : c.sale) && void 0 !== i ? i : null
                                    }
                                }),
                                (0,
                                h.jsx)("button", {
                                    type: "button",
                                    className: e8().allItemsToCart,
                                    onClick: function() {
                                        (0,
                                        j.stub)("track", "mbt_bacon_click", {
                                            action: "addAllItemsToCart",
                                            items: s
                                        }),
                                        O(i, {
                                            trackingId: a
                                        }),
                                        ey("Added All Items To Cart"),
                                        setTimeout(function() {
                                            ey(e5)
                                        }, 600)
                                    },
                                    children: ev
                                })), eW()]
                            })]
                        }), ea && (0,
                        h.jsxs)("div", {
                            className: e8().descriptionWrapper,
                            "data-testid": "bacon__header__dek",
                            children: [eM(), (0,
                            h.jsxs)("div", {
                                className: e8().baconDisclaimerPagingDots,
                                children: [eI(), eW()]
                            })]
                        }), !ea && !Q(eD) && !eK && e$ && (0,
                        h.jsx)("div", {
                            className: e8().descriptionWrapper,
                            "data-testid": "bacon__header__dek",
                            children: (0,
                            h.jsxs)("div", {
                                className: e8().baconDisclaimerPagingDots,
                                children: [eI(), eW()]
                            })
                        }), !ea && !Q(eD) && !eK && !e$ && (0,
                        h.jsxs)(h.Fragment, {
                            children: [eM(), eW()]
                        })]
                    })]
                }), (0,
                h.jsxs)("div", {
                    className: w()(e8().baconScrollWrapper, (0,
                    _._)({}, e8().centerAlign, Q(eD))),
                    children: [(o = (eb.current || {}).scrollLeft,
                    1 === ek ? null : (0,
                    h.jsx)("div", {
                        className: w()(e8().baconPrevBtnContainer, (0,
                        _._)({}, e8().baconPrevBtnActive, eT && 0 !== (void 0 === o ? 0 : o))),
                        "data-testid": "bacon__page-btns__prev-container",
                        children: (0,
                        h.jsx)("button", {
                            type: "button",
                            className: e8().baconPageBtnPrev,
                            onClick: function() {
                                eB(),
                                eS({
                                    action: "navClick",
                                    type: "left arrow"
                                })
                            },
                            "data-testid": "bacon__page-btns__prev",
                            children: (0,
                            h.jsx)("span", {
                                className: w()(e8().baconPageBtnIcon, "icon icon-angle-down")
                            })
                        })
                    })), (0,
                    h.jsx)(R.cq.Consumer, {
                        children: function(e) {
                            return (0,
                            h.jsx)("div", {
                                "data-testid": "bacon-scroll-container",
                                className: e8().baconScrollContainer,
                                ref: eb,
                                onScroll: eO,
                                children: eY.map(function(t, n) {
                                    if (!t || !(null == t ? void 0 : t.computedValues))
                                        return null;
                                    var a, i, s, o, l, r, d = null !== (l = null == t ? void 0 : null === (a = t.item) || void 0 === a ? void 0 : a.id) && void 0 !== l ? l : t.id, c = null !== (r = null == t ? void 0 : t.item) && void 0 !== r ? r : t, u = e["show-nbc-sports-front"], _ = (null == c ? void 0 : null === (i = c.source) || void 0 === i ? void 0 : i.name) || (null == c ? void 0 : null === (o = c.source) || void 0 === o ? void 0 : null === (s = o.organization) || void 0 === s ? void 0 : s.name), p = !!u && (0,
                                    B.y)(_, null == c ? void 0 : c.subType);
                                    return (0,
                                    h.jsx)(e3, {
                                        item: t,
                                        shouldShowAdditionalSeller: et,
                                        totalNumberOfCards: eY.length,
                                        indexOffset: n + 1,
                                        showItemDescriptions: e0,
                                        content: I,
                                        trackLink: function() {
                                            return $(c)
                                        },
                                        onAddProduct: function(e) {
                                            return O([e], {
                                                trackingId: eG
                                            })
                                        },
                                        containerClasses: w()(e8().baconCardWrapper, e8()[e2], {
                                            lastItem: n === eY.length - 1
                                        }),
                                        setMbtBaconClickTracking: eS,
                                        vertical: E,
                                        shouldOpenLinkInNewTab: p
                                    }, d)
                                })
                            })
                        }
                    }), (0,
                    h.jsx)("div", {
                        className: w()(e8().baconNextBtnContainer, (0,
                        _._)({}, e8().baconNextBtnContainerNoPagination, !eT)),
                        "data-testid": "bacon__page-btns__next-container",
                        children: (0,
                        h.jsx)("button", {
                            type: "button",
                            className: e8().baconPageBtnNext,
                            onClick: k()(function() {
                                eN(),
                                eS({
                                    action: "navClick",
                                    type: "right arrow"
                                })
                            }, 250, {
                                leading: !0,
                                trailing: !0
                            }),
                            "data-testid": "bacon__page-btns__next",
                            children: (0,
                            h.jsx)("span", {
                                className: w()(e8().baconPageBtnIcon, "icon icon-angle-down")
                            })
                        })
                    })]
                }), (l = I.metadata,
                r = I.subType,
                c = (d = l || {}).sponsorLogoText,
                u = d.sponsorLogoUrl,
                Q(r) && c && u ? (0,
                h.jsxs)("div", {
                    className: e8().footer,
                    "data-testid": "bacon__footer--sponsor",
                    children: [(0,
                    h.jsx)("div", {
                        children: c
                    }), (0,
                    h.jsx)("img", {
                        className: e8().logo,
                        alt: "sponsor-logo",
                        src: u
                    })]
                }) : null), void 0 !== eq && eq && (0,
                h.jsx)("hr", {
                    className: e8().baconBottomBorder,
                    "data-testid": "bacon__bottom-border"
                }), e7 && (g = I.metadata,
                f = I.subType,
                x = (C = g || {}).seeAllText,
                N = C.seeAllUrl,
                !Q(f) && N && (0,
                h.jsx)("div", {
                    children: (0,
                    h.jsx)(L.$, {
                        size: "normal",
                        alignment: "right",
                        title: x || y.Ay.t("See More"),
                        type: "link",
                        url: N
                    })
                }))]
            })
        }
          , te = (0,
        N.t)(e7, "300px")
    }
    ,
    26700: () => {}
    ,
    28533: (e, t, n) => {
        "use strict";
        n.d(t, {
            f: () => b
        });
        var a = n(20294)
          , i = n(37876)
          , s = n(95062)
          , o = n.n(s)
          , l = n(14232)
          , r = n(34846)
          , d = n(15039)
          , c = n.n(d)
          , u = n(30786)
          , _ = n(62021)
          , p = n.n(_)
          , m = function(e, t, n) {
            var a = (0,
            u.timeFrom)(e)
              , i = (0,
            u.getFormattedTimeString)(e)
              , s = "".concat(n("time_ago", {
                time: a
            }))
              , o = t ? "".concat(s, " / ").concat(i) : s
              , l = "0m" === a;
            return {
                formattedDateString: l ? "".concat(n("Just now")) : o,
                justNow: l
            }
        };
        function b(e) {
            var t = e.dateString
              , n = e.chatStyle
              , s = e.displayTime
              , o = void 0 === s || s
              , d = (0,
            r.Bd)().t
              , u = (0,
            a._)((0,
            l.useState)({
                formattedDaysFromDate: "",
                justNow: !1
            }), 2)
              , _ = u[0]
              , b = _.formattedDateString
              , h = _.justNow
              , v = u[1];
            return (0,
            l.useEffect)(function() {
                v(m(t, o, d));
                var e = setInterval(function() {
                    v(m(t, o, d))
                }, 6e4);
                return function() {
                    clearInterval(e)
                }
            }, [t, o]),
            (0,
            i.jsx)("div", {
                className: c()(p().timestamp, void 0 !== n && n && p().chatStyleTimeStamp, h && p().justNow),
                "data-testid": "timestamp",
                suppressHydrationWarning: !0,
                children: b
            })
        }
        b.propTypes = {
            dateString: o().string.isRequired,
            chatStyle: o().bool,
            displayTime: o().bool
        }
    }
    ,
    30309: e => {
        e.exports = {
            baconCardsOneByOne: "styles_baconCardsOneByOne__RqoeF",
            icon: "styles_icon__j9TnA",
            unibrow: "styles_unibrow__OorEV",
            baconCardsOneByOneProductHeadline: "styles_baconCardsOneByOneProductHeadline__pTt3H",
            baconCardsOneByOneProductHeadlineLink: "styles_baconCardsOneByOneProductHeadlineLink__Ofyr2",
            baconCardsOneByOneProductDescription: "styles_baconCardsOneByOneProductDescription__7ivXI",
            baconCardsOneByOneProductButton: "styles_baconCardsOneByOneProductButton__X_Czt",
            baconCardsOneByOneProductButtonShop: "styles_baconCardsOneByOneProductButtonShop__jpEzR",
            baconCardsOneByOneProductButtonVendor: "styles_baconCardsOneByOneProductButtonVendor__lc6Zf",
            baconCardsOneByOneProductPrice: "styles_baconCardsOneByOneProductPrice__Gcd_r",
            baconCardsOneByOneProductPriceSale: "styles_baconCardsOneByOneProductPriceSale__fkNRs",
            baconCardsOneByOneProductPriceOutOfStock: "styles_baconCardsOneByOneProductPriceOutOfStock__JDPE1",
            "live-dot-blink": "styles_live-dot-blink__SMmtr",
            "fade-in": "styles_fade-in__xD4dB",
            "expand-in": "styles_expand-in__8MyjR",
            "chatblog-expand-in": "styles_chatblog-expand-in__ooTfr"
        }
    }
    ,
    31118: () => {}
    ,
    32288: e => {
        e.exports = {
            articleDek: "styles_articleDek__Y1jmL",
            withImage: "styles_withImage__tTh_v",
            isShoppingSection: "styles_isShoppingSection__F7mI3",
            isLiveBreakingNews: "styles_isLiveBreakingNews__DmOih",
            "live-dot-blink": "styles_live-dot-blink__bQnfB",
            "fade-in": "styles_fade-in__47_xN",
            "expand-in": "styles_expand-in__SPSrA",
            "chatblog-expand-in": "styles_chatblog-expand-in__Dz3yP"
        }
    }
    ,
    32542: () => {}
    ,
    33710: () => {}
    ,
    37341: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => p
        });
        var a = n(37876);
        n(14232);
        var i = n(82780)
          , s = n.n(i)
          , o = n(95062)
          , l = n.n(o)
          , r = n(15039)
          , d = n.n(r)
          , c = n(61702)
          , u = n(69527);
        n(33710);
        var _ = function(e) {
            var t, n = e.className, i = e.image, o = e.id, l = (void 0 === i ? {} : i) || {}, r = l.caption, c = l.authors, _ = l.source, p = s()(c, "[0].name.length", !1), m = s()(_, "name.length", !1);
            if (p ? t = "".concat(c[0].name).concat(m ? " / ".concat(_.name) : "") : m && (t = _.name),
            r || t) {
                var b = d()("caption", void 0 === n ? "" : n);
                return (0,
                a.jsxs)("figcaption", {
                    className: b,
                    "data-testid": "caption",
                    id: void 0 === o ? null : o,
                    children: [r && (0,
                    a.jsx)("span", {
                        className: "caption__container",
                        "data-testid": "caption__container",
                        children: (0,
                        u.LM)(r)
                    }), t && (0,
                    a.jsx)("span", {
                        className: "caption__source",
                        "data-testid": "caption__source",
                        children: (0,
                        u.LM)(t)
                    })]
                })
            }
            return null
        };
        _.propTypes = {
            className: l().string,
            image: c.Sl,
            id: l().string
        };
        let p = _
    }
    ,
    38363: (e, t, n) => {
        "use strict";
        n.d(t, {
            F: () => C
        });
        var a = n(45526)
          , i = n(37876)
          , s = n(14232)
          , o = n(95062)
          , l = n.n(o)
          , r = n(15039)
          , d = n.n(r)
          , c = n(20001)
          , u = n.n(c)
          , _ = n(63060)
          , p = n(87992)
          , m = function() {
            return (0,
            i.jsxs)("svg", {
                width: "144",
                height: "16",
                viewBox: "0 0 144 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                i.jsx)("title", {
                    children: "NBC News Now"
                }), (0,
                i.jsx)("g", {
                    clipPath: "url(#clip0_3686_260016)",
                    children: [{
                        d: "M143.711 12.9351H106.432V15.7204H143.711V12.9351Z",
                        fill: "currentColor"
                    }, {
                        d: "M138.308 11.0828H141.078L143.924 0.253418H141.218L139.725 6.7182H139.678L138.044 0.253418H135.417L133.77 6.7182H133.708L132.215 0.253418H129.276L132.114 11.0828H135.005L136.655 4.66263H136.747L138.308 11.0828Z",
                        fill: "currentColor"
                    }, {
                        d: "M120.534 5.67944C120.534 3.79098 121.713 2.45958 123.394 2.45958C125.074 2.45958 126.254 3.76034 126.254 5.67944C126.254 7.59855 125.072 8.89651 123.394 8.89651C121.716 8.89651 120.534 7.59576 120.534 5.67944ZM123.394 11.3253C126.814 11.3253 129.206 8.89652 129.206 5.67944C129.206 2.46237 126.828 0.0307617 123.394 0.0307617C119.959 0.0307617 117.578 2.45958 117.578 5.67944C117.578 8.8993 119.956 11.3253 123.394 11.3253V11.3253Z",
                        fill: "currentColor"
                    }, {
                        d: "M113.118 11.0827H116.427V0.250488H113.625V6.71528H113.564L109.74 0.250488H106.429V11.0827H109.23V4.61234H109.294L113.118 11.0827Z",
                        fill: "currentColor"
                    }, {
                        d: "M93.1764 3.4594C93.1764 1.43446 94.8964 0 97.608 0C99.9219 0 101.706 1.11414 102.169 2.87169L99.6474 3.4594C99.3672 2.60987 98.6557 2.15308 97.6613 2.15308C96.7368 2.15308 96.0757 2.54581 96.0757 3.26721C96.0757 5.42029 102.423 3.07224 102.423 7.70427C102.423 9.85734 100.572 11.2946 97.9414 11.2946C94.9664 11.2946 93.1147 9.98825 92.5181 7.70427L95.0981 7.31432C95.2562 7.86892 95.5951 8.35559 96.0616 8.69791C96.5281 9.04022 97.0957 9.21879 97.6753 9.20557C98.7958 9.20557 99.5269 8.68471 99.5269 7.96609C99.5353 5.7406 93.1764 8.09143 93.1764 3.4594Z",
                        fill: "currentColor"
                    }, {
                        d: "M85.7161 4.61826H85.6489L84.0157 11.083H81.1051L78.2422 0.248047H81.22L82.7411 6.70726H82.8055L84.4583 0.248047H87.1055L88.7583 6.70726H88.8227L90.3439 0.248047H93.0555L90.2122 11.083H87.4361L85.7161 4.61826Z",
                        fill: "currentColor"
                    }, {
                        d: "M77.4499 0.248047V2.53203H71.7633V4.42328H76.2453V6.70726H71.7633V8.79627H77.5815V11.083H68.9199V0.248047H77.4499Z",
                        fill: "currentColor"
                    }, {
                        d: "M60.5243 4.61826L60.4571 11.083H57.6138V0.248047H60.9193L64.7543 6.70726H64.8215V0.248047H67.6649V11.083H64.3593L60.5243 4.61826Z",
                        fill: "currentColor"
                    }, {
                        d: "M42.5679 5.67658C42.5679 2.35087 44.8818 0.0668945 48.2545 0.0668945C50.899 0.0668945 52.8823 1.43728 53.6779 3.78532L50.9662 4.30619C50.7735 3.76474 50.4145 3.29724 49.94 2.96983C49.4654 2.64242 48.8993 2.47169 48.3218 2.48178C46.6018 2.48178 45.5429 3.72126 45.5429 5.67658C45.5429 7.63189 46.6634 8.87416 48.3218 8.87416C48.8996 8.88405 49.466 8.71291 49.9406 8.38498C50.4152 8.05704 50.774 7.58894 50.9662 7.04697L53.6106 7.57062C52.7506 9.98273 50.899 11.289 48.2545 11.289C44.8818 11.289 42.5679 8.941 42.5679 5.67658Z",
                        fill: "currentColor"
                    }, {
                        d: "M32.4521 0.248047H37.741C40.1221 0.248047 41.6433 1.16164 41.6433 3.24786C41.6452 3.75624 41.4774 4.25089 41.1661 4.65418C40.8548 5.05747 40.4177 5.34658 39.9232 5.47614V5.5402C40.9821 5.73796 41.9066 6.52064 41.9066 8.01916C41.9066 10.1722 40.3855 11.083 38.0072 11.083H32.4521V0.248047ZM35.3627 4.49012H37.2788C38.3993 4.49012 38.7999 4.2283 38.7999 3.50968C38.7999 2.79107 38.3377 2.53203 37.2788 2.53203H35.3627V4.49012ZM35.3627 6.51229V8.79627H37.346C38.5366 8.79627 39.0632 8.4676 39.0632 7.68214C39.0632 6.89667 38.5366 6.568 37.346 6.568H35.3627V6.51229Z",
                        fill: "currentColor"
                    }, {
                        d: "M24.054 4.61826L23.984 11.083H21.1406V0.248047H24.449L28.284 6.70726H28.3484V0.248047H31.1917V11.083H27.8862L24.054 4.61826Z",
                        fill: "currentColor"
                    }, {
                        d: "M16.9526 7.11688C16.5767 7.10716 16.2056 7.20323 15.8822 7.39403L10.6504 11.0274H16.9526C17.473 11.0274 17.9721 10.8219 18.3401 10.456C18.7081 10.09 18.9149 9.59378 18.9149 9.07631C18.9149 8.55884 18.7081 8.06257 18.3401 7.69667C17.9721 7.33076 17.473 7.12519 16.9526 7.12519V7.11688Z",
                        fill: "#0DB14B"
                    }, {
                        d: "M10.8291 10.1962L16.5432 6.29952C16.7602 6.16158 16.9478 5.98248 17.0953 5.77245C17.2427 5.56242 17.3471 5.32557 17.4025 5.07542C17.4579 4.82527 17.4632 4.56673 17.4181 4.31455C17.373 4.06237 17.2784 3.82147 17.1397 3.60565C17.0009 3.38983 16.8208 3.20329 16.6096 3.05669C16.3983 2.91008 16.1601 2.80626 15.9086 2.75119C15.657 2.69611 15.3969 2.69085 15.1433 2.73569C14.8897 2.78054 14.6474 2.87463 14.4304 3.01257C14.109 3.20856 13.8499 3.49107 13.6833 3.82738L10.8291 10.1962Z",
                        fill: "#0089CF"
                    }, {
                        d: "M12.5989 0.249348C12.8333 0.357094 13.0439 0.510047 13.2185 0.699339C13.393 0.88863 13.528 1.1105 13.6156 1.35206C13.7033 1.59363 13.7418 1.85008 13.729 2.10657C13.7162 2.36306 13.6523 2.61446 13.541 2.84621L10.8206 8.79378L9.93701 3.17879C9.90412 3.02045 9.93406 2.85561 10.0206 2.71873C10.238 2.3917 10.7843 2.13396 10.7815 2.09793C10.7788 2.0619 10.7286 1.98984 10.5028 1.98984H9.78369C9.79649 1.71105 9.86569 1.43769 9.98716 1.1861C10.0955 0.952999 10.2494 0.743609 10.4397 0.570069C10.6301 0.396529 10.8533 0.262295 11.0962 0.175156C11.3392 0.0880165 11.5971 0.04971 11.855 0.0624465C12.113 0.0751829 12.3658 0.138705 12.5989 0.249348V0.249348Z",
                        fill: "#645FAA"
                    }, {
                        d: "M6.41914 0.249348C6.1847 0.357094 5.97407 0.510047 5.79954 0.699339C5.625 0.88863 5.49 1.1105 5.40236 1.35206C5.31472 1.59363 5.27621 1.85008 5.28902 2.10657C5.30183 2.36306 5.36574 2.61446 5.47701 2.84621L8.19747 8.79378L9.22319 2.27251C9.26287 1.89961 9.19624 1.52313 9.03088 1.1861C8.92252 0.952999 8.76869 0.743609 8.57831 0.570069C8.38793 0.396529 8.16478 0.262295 7.92183 0.175156C7.67888 0.0880165 7.42095 0.04971 7.163 0.0624465C6.90504 0.0751829 6.65221 0.138705 6.41914 0.249348V0.249348Z",
                        fill: "#C9234A"
                    }, {
                        d: "M2.46669 6.2992L8.18075 10.1959L5.31535 3.82151C5.14952 3.48468 4.89036 3.20198 4.56836 3.0067C4.12998 2.72812 3.59826 2.63411 3.09017 2.74534C2.58207 2.85656 2.13921 3.16392 1.85903 3.5998C1.57886 4.03567 1.48432 4.56437 1.59619 5.06957C1.70805 5.57476 2.01715 6.01507 2.45553 6.29365L2.46669 6.2992Z",
                        fill: "#F37021"
                    }, {
                        d: "M2.06533 7.11707C1.5449 7.11707 1.04575 7.32263 0.677748 7.68853C0.309746 8.05443 0.103027 8.55071 0.103027 9.06817C0.103027 9.58564 0.309746 10.0819 0.677748 10.4478C1.04575 10.8137 1.5449 11.0193 2.06533 11.0193H8.36752L3.13566 7.40252C2.81314 7.20881 2.44206 7.10985 2.06533 7.11707Z",
                        fill: "#FDB913"
                    }].map(function(e) {
                        return (0,
                        i.jsx)("path", {
                            d: e.d,
                            fill: e.fill
                        }, e.d)
                    })
                }), (0,
                i.jsx)("defs", {
                    children: (0,
                    i.jsx)("clipPath", {
                        id: "clip0_3686_260016",
                        children: (0,
                        i.jsx)("rect", {
                            width: "144",
                            height: "16",
                            fill: "white"
                        })
                    })
                })]
            })
        }
          , b = function() {
            return (0,
            i.jsxs)("svg", {
                width: "138.66",
                height: "12",
                viewBox: "0 0 327 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                i.jsx)("path", {
                    d: "M17.9709 23.3904L6.5868 15.8039C3.69036 13.8686 0.823962 15.8425 0.214637 17.8807C-0.682186 20.8887 1.32601 23.3904 4.47562 23.3904H17.9709Z",
                    fill: "#FCCC12"
                }), (0,
                i.jsx)("path", {
                    d: "M35.88 23.3904C39.0296 23.3904 41.0336 20.8845 40.141 17.8807C39.5317 15.8425 36.6696 13.8686 33.7688 15.8039L22.3848 23.3904H35.88Z",
                    fill: "#05AC3F"
                }), (0,
                i.jsx)("path", {
                    d: "M28.8204 5.73708L22.9804 19.0779L21.3112 7.48783C21.0966 5.91302 23.7785 4.94324 23.7785 4.94324C23.5339 4.39828 22.6886 4.40687 22.6886 4.40687H20.8778H20.8735C20.586 1.55763 23.1735 -0.519228 25.9669 0.115843C28.7175 0.725168 29.713 3.71172 28.8204 5.73708Z",
                    fill: "#6E55DC"
                }), (0,
                i.jsx)("path", {
                    d: "M19.4644 4.59143C19.885 1.64779 17.246 -0.532058 14.3925 0.115887C11.6419 0.729503 10.6464 3.71606 11.5389 5.74142L17.379 19.0822L19.4644 4.59143Z",
                    fill: "#EF1541"
                }), (0,
                i.jsx)("path", {
                    d: "M16.9129 21.2663L11.3088 8.49197C9.99577 5.53116 6.52004 5.16213 4.60196 6.89999C3.25028 8.12293 2.20327 11.4571 5.22415 13.4738L16.9129 21.2663Z",
                    fill: "#FF7112"
                }), (0,
                i.jsx)("path", {
                    d: "M35.136 13.4738C38.1569 11.457 37.1099 8.12292 35.7582 6.89569C33.8401 5.16212 30.3644 5.52685 29.0513 8.48766L23.4473 21.262L35.136 13.4738Z",
                    fill: "#069DE0"
                }), (0,
                i.jsx)("path", {
                    d: "M117.772 15.6579C115.52 17.5803 114.086 18.6659 110.838 18.6659H110.701C106.23 18.6659 103.462 15.1945 103.462 11.9805C103.462 8.29452 106.723 5.2951 110.727 5.2951C113.953 5.32513 115.661 7.05441 116.481 7.89116L116.61 8.0199L120.377 4.25666C119.957 3.83614 116.743 0.00427246 110.765 0.00427246C103.882 0.00427246 98.1668 5.23073 98.1367 11.9548C98.1367 18.4814 103.625 23.9696 110.701 23.9997C116.026 23.9997 118.721 21.8241 121.222 19.6829L117.772 15.6579Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M96.0643 16.2158C96.0643 22.4163 91.0996 23.3904 87.9929 23.3904H74.7422V0.596436H87.98C92.0393 0.596436 95.2833 2.90072 95.2833 7.22178C95.2833 9.3587 93.7772 10.5387 92.6315 11.1223C94.5195 12.0663 96.0643 13.4609 96.0643 16.2158ZM79.5868 4.87459V9.18707C79.5868 9.18707 86.5425 9.18707 87.4007 9.18707C88.6923 9.18707 90.1083 8.65068 90.1083 7.04584C90.1083 5.441 89.0055 4.87459 87.2205 4.87459C86.2035 4.87459 79.5868 4.87459 79.5868 4.87459ZM90.9151 16.2158C90.9151 14.0273 89.0914 13.4609 87.3192 13.4609C85.7272 13.4609 79.5868 13.4609 79.5868 13.4609V18.9062C79.5868 18.9062 86.0619 18.9062 87.5037 18.9062C88.9455 18.9062 90.9151 18.4042 90.9151 16.2158Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M49.1289 0.596436H54.4755L65.482 15.3404V0.596436H70.4939V23.3904H65.1473L54.1365 8.61636V23.3904H49.1289V0.596436Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M174.81 18.5973V23.3946H155.436V0.600708H174.531V5.17064H160.289V9.18705H172.484V13.7527H160.289V18.5801L174.81 18.5973Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M129.834 0.596436H135.181L146.187 15.3404V0.596436H151.199V23.3904H145.852L134.842 8.61636V23.3904H129.834V0.596436Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M203.545 0.600708L199.357 15.4562L195.045 0.600708H189.857L185.549 15.4562L181.356 0.600708H176.619L182.871 23.3946H187.969L192.453 9.03686L196.933 23.3946H202.035L208.287 0.600708H203.545Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M225.546 10.543C221.714 8.91675 214.896 10.1526 214.943 7.03727C214.96 5.8315 216.72 4.79307 219.539 4.77161C222.71 4.74587 226.726 6.43224 226.726 6.43224L229.279 2.37723C229.279 2.37723 224.087 0 219.625 0C212.819 0 209.609 2.99942 209.609 6.74119C209.609 10.5817 211.759 12.105 212.926 12.6714C216.711 14.5122 220.95 14.0102 223.238 15.1516C225.739 16.4003 224.748 19.3868 219.625 18.9663C215.857 18.6574 213.63 17.9064 210.918 16.3059L208.129 20.2193C213.403 23.4762 218.487 23.9911 219.629 23.9997C223.611 24.0211 230.069 22.9656 229.97 16.4175C229.927 13.7399 228.631 11.8518 225.546 10.543Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M326.454 20.4552H315.881V23.3903H326.454V20.4552Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M239.492 0.596436H244.839L255.845 15.3404V0.596436H260.857V23.3904H255.511L244.504 8.62065V23.3904H239.492V0.596436Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M314.237 0.596436L310.045 15.4562L305.732 0.596436H300.549L296.236 15.4562L292.044 0.596436H287.307L293.559 23.3904H298.661L303.14 9.03688L307.62 23.3904H312.722L318.974 0.596436H314.237Z",
                    fill: "black"
                }), (0,
                i.jsx)("path", {
                    d: "M275.541 5.1578C279.312 5.1578 282.381 8.22589 282.381 11.9977C282.381 15.7695 279.312 18.8376 275.541 18.8376C271.769 18.8376 268.701 15.7695 268.701 11.9977C268.701 8.22589 271.769 5.1578 275.541 5.1578ZM275.541 0C268.915 0 263.543 5.37236 263.543 11.9977C263.543 18.623 268.915 23.9954 275.541 23.9954C282.166 23.9954 287.538 18.623 287.538 11.9977C287.538 5.37236 282.166 0 275.541 0Z",
                    fill: "black"
                })]
            })
        }
          , h = function() {
            return (0,
            i.jsxs)("svg", {
                width: "138.66",
                height: "12",
                viewBox: "0 0 327 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                i.jsx)("path", {
                    d: "M17.9709 23.3904L6.5868 15.8039C3.69036 13.8686 0.823962 15.8425 0.214637 17.8807C-0.682186 20.8887 1.32601 23.3904 4.47562 23.3904H17.9709Z",
                    fill: "#FCCC12"
                }), (0,
                i.jsx)("path", {
                    d: "M35.88 23.3904C39.0296 23.3904 41.0335 20.8845 40.141 17.8807C39.5317 15.8425 36.6696 13.8686 33.7688 15.8039L22.3848 23.3904H35.88Z",
                    fill: "#05AC3F"
                }), (0,
                i.jsx)("path", {
                    d: "M28.8204 5.73708L22.9804 19.0779L21.3112 7.48783C21.0966 5.91302 23.7785 4.94324 23.7785 4.94324C23.5339 4.39828 22.6886 4.40687 22.6886 4.40687H20.8778H20.8735C20.586 1.55763 23.1735 -0.519228 25.9669 0.115843C28.7175 0.725168 29.713 3.71172 28.8204 5.73708Z",
                    fill: "#6E55DC"
                }), (0,
                i.jsx)("path", {
                    d: "M19.4644 4.59143C19.885 1.64779 17.246 -0.532057 14.3925 0.115887C11.6419 0.729503 10.6464 3.71606 11.5389 5.74142L17.379 19.0822L19.4644 4.59143Z",
                    fill: "#EF1541"
                }), (0,
                i.jsx)("path", {
                    d: "M16.9129 21.2663L11.3088 8.49197C9.99577 5.53116 6.52004 5.16213 4.60196 6.89999C3.25028 8.12293 2.20327 11.4571 5.22415 13.4738L16.9129 21.2663Z",
                    fill: "#FF7112"
                }), (0,
                i.jsx)("path", {
                    d: "M35.136 13.4738C38.1569 11.457 37.1099 8.12292 35.7582 6.89569C33.8401 5.16212 30.3644 5.52685 29.0513 8.48766L23.4473 21.262L35.136 13.4738Z",
                    fill: "#069DE0"
                }), (0,
                i.jsx)("path", {
                    d: "M117.772 15.6579C115.52 17.5803 114.086 18.6659 110.838 18.6659H110.701C106.23 18.6659 103.462 15.1945 103.462 11.9805C103.462 8.29452 106.723 5.2951 110.727 5.2951C113.953 5.32513 115.661 7.05441 116.481 7.89116L116.61 8.0199L120.377 4.25666C119.957 3.83614 116.743 0.00427246 110.765 0.00427246C103.882 0.00427246 98.1668 5.23073 98.1367 11.9548C98.1367 18.4814 103.625 23.9696 110.701 23.9997C116.026 23.9997 118.721 21.8241 121.222 19.6829L117.772 15.6579Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M96.0643 16.2158C96.0643 22.4163 91.0996 23.3904 87.9929 23.3904H74.7422V0.596436H87.98C92.0393 0.596436 95.2833 2.90072 95.2833 7.22178C95.2833 9.3587 93.7772 10.5387 92.6315 11.1223C94.5195 12.0663 96.0643 13.4609 96.0643 16.2158ZM79.5868 4.87459V9.18707C79.5868 9.18707 86.5425 9.18707 87.4007 9.18707C88.6923 9.18707 90.1083 8.65068 90.1083 7.04584C90.1083 5.441 89.0055 4.87459 87.2205 4.87459C86.2035 4.87459 79.5868 4.87459 79.5868 4.87459ZM90.9151 16.2158C90.9151 14.0273 89.0914 13.4609 87.3192 13.4609C85.7272 13.4609 79.5868 13.4609 79.5868 13.4609V18.9062C79.5868 18.9062 86.0619 18.9062 87.5037 18.9062C88.9455 18.9062 90.9151 18.4042 90.9151 16.2158Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M49.1289 0.596436H54.4755L65.482 15.3404V0.596436H70.4939V23.3904H65.1473L54.1365 8.61636V23.3904H49.1289V0.596436Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M174.81 18.5973V23.3946H155.436V0.600708H174.531V5.17064H160.289V9.18705H172.484V13.7527H160.289V18.5801L174.81 18.5973Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M129.834 0.596436H135.181L146.187 15.3404V0.596436H151.199V23.3904H145.852L134.842 8.61636V23.3904H129.834V0.596436Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M203.545 0.600708L199.357 15.4562L195.045 0.600708H189.857L185.549 15.4562L181.356 0.600708H176.619L182.871 23.3946H187.969L192.453 9.03686L196.933 23.3946H202.035L208.287 0.600708H203.545Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M225.546 10.543C221.714 8.91675 214.896 10.1526 214.943 7.03727C214.96 5.8315 216.72 4.79307 219.539 4.77161C222.71 4.74587 226.726 6.43224 226.726 6.43224L229.279 2.37723C229.279 2.37723 224.087 0 219.625 0C212.819 0 209.609 2.99942 209.609 6.74119C209.609 10.5817 211.759 12.105 212.926 12.6714C216.711 14.5122 220.95 14.0102 223.238 15.1516C225.739 16.4003 224.748 19.3868 219.625 18.9663C215.857 18.6574 213.63 17.9064 210.918 16.3059L208.129 20.2193C213.403 23.4762 218.487 23.9911 219.629 23.9997C223.611 24.0211 230.069 22.9656 229.97 16.4175C229.927 13.7399 228.631 11.8518 225.546 10.543Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M326.454 20.4552H315.881V23.3903H326.454V20.4552Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M239.492 0.596436H244.839L255.845 15.3404V0.596436H260.857V23.3904H255.511L244.504 8.62065V23.3904H239.492V0.596436Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M314.237 0.596436L310.045 15.4562L305.732 0.596436H300.549L296.236 15.4562L292.044 0.596436H287.307L293.559 23.3904H298.661L303.14 9.03688L307.62 23.3904H312.722L318.974 0.596436H314.237Z",
                    fill: "white"
                }), (0,
                i.jsx)("path", {
                    d: "M275.541 5.1578C279.312 5.1578 282.381 8.22589 282.381 11.9977C282.381 15.7695 279.312 18.8376 275.541 18.8376C271.769 18.8376 268.701 15.7695 268.701 11.9977C268.701 8.22589 271.769 5.1578 275.541 5.1578ZM275.541 0C268.915 0 263.543 5.37236 263.543 11.9977C263.543 18.623 268.915 23.9954 275.541 23.9954C282.166 23.9954 287.538 18.623 287.538 11.9977C287.538 5.37236 282.166 0 275.541 0Z",
                    fill: "white"
                })]
            })
        }
          , v = n(48171)
          , y = n.n(v)
          , g = (0,
        i.jsxs)("svg", {
            width: "39",
            height: "22",
            viewBox: "0 0 39 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0,
            i.jsx)("title", {
                children: "Live"
            }), (0,
            i.jsx)("rect", {
                width: "39",
                height: "22",
                rx: "3",
                fill: "#CB1111"
            }), (0,
            i.jsx)("path", {
                d: "M5.756 5.66H8.186V15.002H12.506V17H5.756V5.66ZM13.5783 5.66H16.0083V17H13.5783V5.66ZM22.5198 17H20.0718L16.7958 5.66H19.2798L21.3498 13.31H21.4218L23.5098 5.66H25.7958L22.5198 17ZM33.3901 15.002V17H26.5861V5.66H33.3541V7.658H28.9621V10.25H32.3101V12.212H28.9621V15.002H33.3901Z",
                fill: "white"
            })]
        })
          , f = function(e) {
            var t = e.theme
              , n = (0,
            s.useContext)(p.cq)["feature-flag-logo-update"];
            return (0,
            i.jsxs)("div", {
                className: y().newsNow,
                "data-testid": "news-now",
                children: ["Get more news", (0,
                i.jsx)("span", {
                    className: d()(y().img, y()["live-img"]),
                    children: g
                }), "on", n ? (0,
                i.jsx)("span", {
                    className: d()(y().img, y()["news-now-img-updated"]),
                    children: "light" === (void 0 === t ? "light" : t) ? (0,
                    i.jsx)(b, {}) : (0,
                    i.jsx)(h, {})
                }) : (0,
                i.jsx)("span", {
                    className: d()(y().img, y()["news-now-img"]),
                    children: (0,
                    i.jsx)(m, {})
                }), (0,
                i.jsx)("span", {
                    className: d()(y().img, y()["chevron-img"]),
                    children: (0,
                    i.jsx)(_.F, {})
                })]
            })
        };
        f.propTypes = {
            theme: l().string
        };
        function C(e) {
            var t, n, s = e.type, o = e.theme, l = void 0 === o ? "light" : o, r = e.dataIcid, c = (t = 0,
            {
                url: "https://www.nbcnews.com/watch",
                component: f
            }), _ = c.component, p = c.url;
            return (0,
            i.jsx)("a", {
                className: d()(u().PrimaryMediaBannerCta, (n = {},
                (0,
                a._)(n, u().LightPrimaryMediaBannerCta, "light" === l),
                (0,
                a._)(n, u().DarkPrimaryMediaBannerCta, "dark" === l),
                n)),
                "data-icid": void 0 === r ? "" : r,
                "data-testid": "primary-media-banner",
                href: p,
                children: (0,
                i.jsx)(_, {
                    theme: l
                })
            })
        }
        C.propTypes = {
            type: l().string.isRequired,
            theme: l().string,
            dataIcid: l().string
        }
    }
    ,
    40079: (e, t, n) => {
        "use strict";
        n.d(t, {
            T: () => i,
            o: () => a
        });
        var a = function(e) {
            return e ? e.length >= 8 : null
        }
          , i = function(e) {
            return !e || e.length < 10 ? "f3 f4-m" : e.length <= 12 ? "f2 f3-l" : e.length <= 15 ? "f1 f2-m f3-l" : "f1"
        }
    }
    ,
    40918: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            DisclaimerDefault: () => _,
            DisclaimerModal: () => g
        });
        var a = n(45526)
          , i = n(37876)
          , s = n(14232)
          , o = n(15039)
          , l = n.n(o)
          , r = n(10616)
          , d = n(20913)
          , c = n(16488)
          , u = n.n(c);
        function _(e) {
            var t = e.type
              , n = e.verbiage
              , s = void 0 === n ? "" : n;
            if (!s)
                return null;
            var o = (0,
            d.am)(t)
              , c = (0,
            r.$h)({
                componentName: "disclaimer",
                pageRegion: "article-top"
            });
            return (0,
            i.jsx)("section", {
                "data-activity-map": c,
                "data-testid": "ecommerce-disclaimer",
                className: l()("ecommerce-disclaimer", u().disclaimer, (0,
                a._)({}, u().disclaimerAlternate, o)),
                children: (0,
                i.jsx)("p", {
                    "data-testid": "ecommerce-disclaimer__content",
                    className: l()("ecommerce-disclaimer__content", u().content),
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            })
        }
        var p = n(20294)
          , m = n(63060)
          , b = n(87992)
          , h = n(1432)
          , v = n.n(h)
          , y = function(e, t, n, a) {
            if (!(a || "today" === e && !t && !n))
                return null;
            var i = a || d.Tt;
            return '<a data-testid="disclaimer-learn-more" href="'.concat(i, '">Learn more.</a>')
        };
        function g(e) {
            var t, n, o, r, c = e.children, u = e.disclaimerKey, _ = void 0 === u ? "DEFAULT" : u, h = e.disclaimerOverride, g = e.showCloseButton, f = e.small, C = e.hideLearnMore, w = e.learnMoreLinkOverride, x = (0,
            p._)(s.useState(!1), 2), k = x[0], j = x[1], T = s.useContext(b.O1), L = function() {
                j(!k)
            };
            return (0,
            i.jsxs)("div", {
                className: l()("disclaimer-modal", v().disclaimerModal, (0,
                a._)({}, v().open, k)),
                "data-testid": "disclaimer",
                children: [c ? (0,
                i.jsxs)(i.Fragment, {
                    children: [c, (0,
                    i.jsx)("button", {
                        className: v().infoBtn,
                        onClick: L,
                        type: "button",
                        children: (0,
                        i.jsx)("span", {
                            className: "icon icon-info"
                        })
                    })]
                }) : (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsxs)("button", {
                        className: v().toggleBtn,
                        onClick: L,
                        type: "button",
                        children: [k ? "Hide Disclaimer" : "Show Disclaimer", (0,
                        i.jsx)(m.F, {})]
                    }), (0,
                    i.jsx)("div", {
                        className: v().line
                    })]
                }), k && (0,
                i.jsxs)("div", {
                    className: l()(v().card, (0,
                    a._)({}, v().small, void 0 !== f && f)),
                    "data-testid": "disclaimer-box",
                    children: [void 0 !== g && g && (0,
                    i.jsx)("button", {
                        className: "css-reset-btn absolute",
                        onClick: function() {
                            j(!1)
                        },
                        type: "button",
                        children: (0,
                        i.jsx)("span", {
                            className: "icon icon-close f2"
                        })
                    }), (0,
                    i.jsx)("p", {
                        className: v().text,
                        "data-testid": "disclaimer-text",
                        children: (0,
                        i.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: (t = "OVERRIDE" === _ && "string" == typeof (null == h ? void 0 : h.disclaimerOverride) && (null == h ? void 0 : h.disclaimerOverride.length) > 0,
                                n = d.je[_] || d.je.DEFAULT,
                                o = t ? h.disclaimerOverride : n,
                                (r = y(T, "NONE" === _, void 0 !== C && C, w)) && (o += " ".concat(r)),
                                o)
                            }
                        })
                    })]
                })]
            })
        }
    }
    ,
    48171: e => {
        e.exports = {
            newsNow: "styles_newsNow__M_63_",
            img: "styles_img__gUAMI",
            "live-img": "styles_live-img__EPBAb",
            "news-now-img": "styles_news-now-img__X3K5O",
            "news-now-img-updated": "styles_news-now-img-updated__ThH0c",
            "chevron-img": "styles_chevron-img__9Ibgq"
        }
    }
    ,
    50898: e => {
        e.exports = {
            baconCardsWidthByOne: "styles_baconCardsWidthByOne___uyJd",
            baconCardsWidthByOneTeasePictureLinkWrapper: "styles_baconCardsWidthByOneTeasePictureLinkWrapper__48DJQ",
            baconCardsSingleSeller: "styles_baconCardsSingleSeller__wjy1H",
            baconCardsWidthByOneHeader: "styles_baconCardsWidthByOneHeader__9_jIs",
            description: "styles_description__fAER6",
            productSellerWrapper: "styles_productSellerWrapper__Sb2QY",
            outOfStock: "styles_outOfStock__tFEBV",
            seller: "styles_seller__D5_jU",
            priceWrapper: "styles_priceWrapper__7IlV0",
            price: "styles_price__xaRbM",
            newPrice: "styles_newPrice__cs9qJ",
            previousPrice: "styles_previousPrice__KfA8P",
            "live-dot-blink": "styles_live-dot-blink__x5M8s",
            "fade-in": "styles_fade-in__9xMzS",
            "expand-in": "styles_expand-in__AqpVW",
            "chatblog-expand-in": "styles_chatblog-expand-in__r7WFD"
        }
    }
    ,
    52494: () => {}
    ,
    52786: e => {
        e.exports = {
            notchedHorizontalRule: "styles_notchedHorizontalRule__IXHHh",
            "live-dot-blink": "styles_live-dot-blink__mL06b",
            "fade-in": "styles_fade-in__Y1yP_",
            "expand-in": "styles_expand-in__JkDLp",
            "chatblog-expand-in": "styles_chatblog-expand-in__MuUNz"
        }
    }
    ,
    53116: (e, t, n) => {
        "use strict";
        n.d(t, {
            I: () => a
        });
        var a = function(e) {
            if (!e)
                return null;
            var t = e.split("-").pop()
              , n = t[0]
              , a = t.substring(1);
            return "n" === n ? "ncna".concat(a) : "t" === n ? "tdna".concat(a) : /\d/.test(n) ? "mmvo".concat(t) : null
        }
    }
    ,
    55463: (e, t, n) => {
        "use strict";
        n.d(t, {
            y8: () => y
        });
        var a = n(37876)
          , i = n(14232)
          , s = n(48011)
          , o = n(82780)
          , l = n.n(o)
          , r = n(15039)
          , d = n.n(r)
          , c = n(89930)
          , u = n(89903)
          , _ = n(96491)
          , p = n(53116)
          , m = n(58963)
          , b = n(97247)
          , h = n(82737);
        function v(e, t) {
            var n = null == e ? void 0 : e.match(/embedId=["“”]([0-9]+)["“”]/)
              , a = null == n ? void 0 : n[1];
            return a ? "today" === t ? "tdmn".concat(a) : "ncmn".concat(a) : null
        }
        n(15076);
        var y = (0,
        s.Ng)(function(e) {
            var t, n, a = e.article, i = e.menu, s = e.shared;
            return {
                articleId: null === (n = a.content) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.id,
                menu: i.current,
                vertical: s.vertical
            }
        }, function(e) {
            return {
                loadEmbedMenu: function(t) {
                    return e((0,
                    c.wE)(t))
                }
            }
        })(function(e) {
            var t = e.articleId
              , n = e.html
              , s = e.menu
              , o = e.loadEmbedMenu
              , r = e.className
              , c = e.vertical
              , y = e.getDataActivityMapID;
            (0,
            i.useEffect)(function() {
                var e = v(n, c);
                e && o(e)
            }, [n, o, v]);
            var g = (0,
            i.useCallback)(function(e) {
                return e.map(function(e, n) {
                    var i = l()(e, "url.primary", null)
                      , s = (0,
                    p.I)(i)
                      , o = e.text;
                    if (t === s || n > 6)
                        return null;
                    if (6 === n)
                        return (0,
                        a.jsx)(h.$, {
                            size: "normal",
                            type: "link",
                            url: i,
                            title: "See More"
                        }, n + i);
                    var r = "relatedList_".concat(n + 1);
                    return (0,
                    a.jsx)("li", {
                        className: "menu-embed__link",
                        children: (0,
                        a.jsx)(b.A, {
                            href: (0,
                            m.w)(i, {
                                icid: r
                            }),
                            icid: r,
                            children: (void 0 === o ? "" : o).slice(0, 100)
                        })
                    }, "".concat(n + i))
                })
            }, [t])
              , f = s || {}
              , C = f.name
              , w = f.menuItems
              , x = void 0 === w ? [] : w
              , k = (0,
            u.B0)(_.HAS_CUSTOM_TITLE, c)
              , j = (void 0 === C ? "" : C).slice(0, 30)
              , T = y && y({
                componentName: "menu-embed",
                pageRegion: "article-body",
                componentTitle: j
            });
            return x.length ? (0,
            a.jsxs)("div", {
                className: r,
                "data-activity-map": T,
                "data-testid": "menu-embed",
                children: [(0,
                a.jsx)("h4", {
                    className: d()("menu-embed__title", {
                        "menu-embed__title--default": !k,
                        "menu-embed__title--custom": k
                    }),
                    children: j
                }), (0,
                a.jsx)("ul", {
                    className: "menu-embed__items",
                    children: g(x)
                })]
            }) : null
        })
    }
    ,
    58963: (e, t, n) => {
        "use strict";
        n.d(t, {
            w: () => i
        });
        var a = n(20294);
        function i(e, t) {
            if (!e || !t)
                return e;
            var n = (0,
            a._)(e.split("#"), 2)
              , i = n[0]
              , s = n[1]
              , o = Object.keys(t).reduce(function(e, n) {
                var a = t[n]
                  , i = RegExp("[?&]".concat(n, "="), "g");
                if (!n || !a || i.test(e))
                    return e;
                var s = -1 === e.indexOf("?") ? "?" : "&";
                return "".concat(e).concat(s).concat(n, "=").concat(a)
            }, i);
            return "".concat(o).concat(s ? "#".concat(s) : "")
        }
    }
    ,
    59880: () => {}
    ,
    61108: e => {
        e.exports = {
            container: "styles_container__05kQN",
            "live-dot-blink": "styles_live-dot-blink__Vg2qS",
            "fade-in": "styles_fade-in__hPQoP",
            "expand-in": "styles_expand-in__3oMmD",
            "chatblog-expand-in": "styles_chatblog-expand-in__ebGww"
        }
    }
    ,
    62021: e => {
        e.exports = {
            timestamp: "styles_timestamp__H642o",
            chatStyleTimeStamp: "styles_chatStyleTimeStamp__51bHB",
            justNow: "styles_justNow__xCTll",
            "live-dot-blink": "styles_live-dot-blink__sNTY0",
            "fade-in": "styles_fade-in__rljTg",
            "expand-in": "styles_expand-in__DoBri",
            "chatblog-expand-in": "styles_chatblog-expand-in__AKajO"
        }
    }
    ,
    62870: (e, t, n) => {
        "use strict";
        n.d(t, {
            t: () => _
        });
        var a = n(67684)
          , i = n(37876)
          , s = n(14232)
          , o = n(95062)
          , l = n.n(o)
          , r = n(40625)
          , d = n(87992)
          , c = n(51845)
          , u = "lazy_component_rendered";
        (0,
        c.stub)("register", u);
        var _ = function(e, t, n) {
            var o = function(o) {
                var l = (0,
                a._)({
                    minHeight: "min-content",
                    elementId: ""
                }, o)
                  , _ = l.elementId
                  , p = void 0 === _ ? "" : _
                  , m = (0,
                r.Wx)({
                    initialInView: !1,
                    rootMargin: "200px 0px",
                    threshold: 0,
                    triggerOnce: !0
                })
                  , b = m.ref
                  , h = m.inView
                  , v = (0,
                d.Jp)()["lazy-render-commerce-components"]
                  , y = -1 !== s.useContext(d.Pl).path.indexOf("embedded-pkg");
                s.useEffect(function() {
                    h && v && (0,
                    c.stub)("track", u, {
                        component: e.displayName || e.name || "unknown",
                        el: b.current
                    })
                }, [h, v]);
                var g = h && v || y || !v
                  , f = p ? "anchor-".concat(p) : void 0
                  , C = n ? n(l, g, f) : f;
                return (0,
                i.jsx)("div", {
                    ref: b,
                    style: {
                        minHeight: t
                    },
                    id: C,
                    children: g ? (0,
                    i.jsx)(e, (0,
                    a._)({}, l)) : null
                })
            };
            return o.propTypes = {
                minHeight: l().string,
                elementId: l().string
            },
            o.displayName = "withViewportVisibility(".concat(e.displayName || e.name || "Component", ")"),
            o
        }
    }
    ,
    63060: (e, t, n) => {
        "use strict";
        n.d(t, {
            F: () => i
        });
        var a = n(37876);
        n(14232);
        var i = function() {
            return (0,
            a.jsx)("svg", {
                viewBox: "0 0 10 7",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                a.jsx)("path", {
                    d: "M1 1.07454L4.96238 5L9 1",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                })
            })
        }
    }
    ,
    64759: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => w
        });
        var a = n(45526)
          , i = n(67684)
          , s = n(62701)
          , o = n(20294)
          , l = n(37876)
          , r = n(14232)
          , d = n(95062)
          , c = n.n(d)
          , u = n(15039)
          , _ = n.n(u)
          , p = n(68129)
          , m = n(81481)
          , b = n(48148)
          , h = n(61702)
          , v = n(46844)
          , y = n(51845);
        n(59880);
        var g = n(39812)
          , f = "inline-video";
        function C(e) {
            var t, n = e.addClassNames, d = e.autoPlay, c = e.isEmbedded, u = void 0 !== c && c, h = e.isHero, C = void 0 !== h && h, w = e.onlyAutoplayMuted, x = e.video, k = e.disableSticky, j = void 0 === k ? null : k, T = e.disablePlaylistAutoplay, L = void 0 !== T && T, B = e.isArticleVideoDateEnabled, N = e.elementId, O = void 0 === N ? "" : N, P = ((0,
            r.useContext)(g.A) || {}).isLiveBlog, A = (0,
            r.useRef)(null), H = (0,
            r.useRef)(!1), S = (0,
            r.useRef)(null), V = null == x ? void 0 : x.associatedVideoPlaylist, M = (0,
            o._)((0,
            r.useState)(x), 2), I = M[0], W = M[1], E = !u && !C;
            (0,
            r.useEffect)(function() {
                void 0 !== y.stub && (0,
                y.stub)("register", ["inlineVideoFullyInView"])
            }, []);
            var D = (0,
            r.useCallback)(function() {
                void 0 === y.stub || H.current || ((0,
                y.stub)("track", "inlineVideoFullyInView"),
                H.current = !0)
            }, [])
              , F = (0,
            r.useCallback)(function() {
                var e = A.current;
                if (e) {
                    var t = window.pageYOffset
                      , n = (0,
                    v.A)(m.A)
                      , a = e.getBoundingClientRect()
                      , i = a.top
                      , s = a.height
                      , o = i + t
                      , l = o + s < t + window.innerHeight;
                    o > t + n && l && D()
                }
            }, [D]);
            (0,
            r.useEffect)(function() {
                if (E)
                    return b.A.on("scroll", F, "debounce"),
                    function() {
                        b.A.remove("scroll", F, "debounce")
                    }
            }, [E, F]);
            var R = (0,
            r.useCallback)(function(e) {
                W(e)
            }, []);
            if (!I)
                return null;
            var Z = _()(f, (0,
            a._)({}, "".concat(f, "--in-body"), !u && !C && !P), void 0 === n ? "" : n)
              , z = L ? (0,
            s._)((0,
            i._)({}, V), {
                videos: [null == V ? void 0 : null === (t = V.videos) || void 0 === t ? void 0 : t.find(function(e) {
                    return e.id === I.id
                })]
            }) : V;
            return (0,
            l.jsx)("section", {
                className: Z,
                "data-testid": "".concat(f),
                id: O ? "anchor-".concat(O) : void 0,
                children: (0,
                l.jsx)("div", {
                    className: "".concat(f, "__background"),
                    children: (0,
                    l.jsxs)("div", {
                        className: "".concat(f, "__player"),
                        ref: A,
                        children: [(0,
                        l.jsx)("div", {
                            ref: S,
                            tabIndex: -1
                        }), (0,
                        l.jsx)(p.A, {
                            autoPlay: void 0 !== d && d,
                            continuousPlay: !L,
                            disableSticky: null != j ? j : P && !C,
                            isEmbedded: u,
                            onlyAutoplayMuted: void 0 !== w && w,
                            onVideoEnd: R,
                            playlist: [z],
                            video: I,
                            hidePublishedDate: !(void 0 !== B && B)
                        })]
                    })
                })
            })
        }
        C.propTypes = {
            addClassNames: c().string,
            autoPlay: c().bool,
            isEmbedded: c().bool,
            isHero: c().bool,
            onlyAutoplayMuted: c().bool,
            video: h.Ki.isRequired,
            disableSticky: c().bool,
            disablePlaylistAutoplay: c().bool,
            isArticleVideoDateEnabled: c().bool,
            elementId: c().string
        };
        let w = C
    }
    ,
    65952: e => {
        e.exports = {
            inlineArticle: "styles_inlineArticle__l36aV",
            default: "styles_default__ZDaiP",
            oneOne: "styles_oneOne__P8Otk",
            twoOneLarge: "styles_twoOneLarge__XIhNz",
            twoOneLargeItems: "styles_twoOneLargeItems__uRAbj",
            twoOneSmall: "styles_twoOneSmall__E6bM_",
            twoThreePortrait: "styles_twoThreePortrait__78dhK",
            twoOneLargeItemsBacon: "styles_twoOneLargeItemsBacon__hOqIw",
            baconPageBtnNext: "styles_baconPageBtnNext__mlUg7",
            baconPageBtnPrev: "styles_baconPageBtnPrev__imMrX",
            baconPageBtnIcon: "styles_baconPageBtnIcon__vjUT4",
            baconPackage: "styles_baconPackage__W322O",
            descriptionWrapper: "styles_descriptionWrapper___PXVM",
            stripe: "styles_stripe__96_oz",
            baconHeaderTopBorder: "styles_baconHeaderTopBorder__Sw6Cm",
            baconHeader: "styles_baconHeader__SYJx3",
            baconHeaderFull: "styles_baconHeaderFull__Unhl6",
            flexColumn: "styles_flexColumn__h7Qo8",
            baconHeaderHeadline: "styles_baconHeaderHeadline__S_a7Q",
            baconHeaderHeadlineBtn: "styles_baconHeaderHeadlineBtn__CYkpm",
            allItemsToCart: "styles_allItemsToCart__0Lb8V",
            baconHeaderInner: "styles_baconHeaderInner__iaSYc",
            baconTitle: "styles_baconTitle__RkfHT",
            description: "styles_description__Ga69M",
            baconScrollWrapper: "styles_baconScrollWrapper__q1wnG",
            disclaimer: "styles_disclaimer__OEKF2",
            readMoreLink: "styles_readMoreLink__UmhjK",
            baconTitleLink: "styles_baconTitleLink__sCHVE",
            footer: "styles_footer__zATd5",
            logo: "styles_logo__K59ow",
            baconAddButtonPagingDots: "styles_baconAddButtonPagingDots__uBpd3",
            baconDisclaimerPagingDots: "styles_baconDisclaimerPagingDots__5qeF5",
            baconPagingDots: "styles_baconPagingDots__iECGl",
            baconPagingDot: "styles_baconPagingDot__S9DSy",
            baconPagingDotIsCurrent: "styles_baconPagingDotIsCurrent__xCa4g",
            centerAlign: "styles_centerAlign__Shqmz",
            baconScrollContainer: "styles_baconScrollContainer__a9nYF",
            baconCardWrapper: "styles_baconCardWrapper__Z3RXY",
            oneOneProduct: "styles_oneOneProduct__cE4vv",
            oneOneSmall: "styles_oneOneSmall__lN6W1",
            shopListByOneProduct: "styles_shopListByOneProduct__vvXoS",
            twoOneLargeVideoPage: "styles_twoOneLargeVideoPage__w5sOv",
            author: "styles_author__n13pC",
            baconPrevBtnContainer: "styles_baconPrevBtnContainer__0K_To",
            baconPrevBtnActive: "styles_baconPrevBtnActive__IrBAD",
            baconNextBtnContainer: "styles_baconNextBtnContainer__PIkfA",
            baconNextBtnContainerNoPagination: "styles_baconNextBtnContainerNoPagination__IHcPV",
            baconBottomBorder: "styles_baconBottomBorder__5nKeg",
            "live-dot-blink": "styles_live-dot-blink__ShkWQ",
            "fade-in": "styles_fade-in__nnpxa",
            "expand-in": "styles_expand-in__5VkRJ",
            "chatblog-expand-in": "styles_chatblog-expand-in__p0YNu"
        }
    }
    ,
    68129: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => h
        });
        var a = n(67684)
          , i = n(62701)
          , s = n(65699)
          , o = n(37876);
        n(14232);
        var l = n(14571)
          , r = n(87992)
          , d = n(48915)
          , c = n(34223)
          , u = n(41224)
          , _ = n(20309)
          , p = n(66152);
        function m() {
            return (0,
            p.B)() && document && document.referrer
        }
        var b = {
            article: null,
            autoPlay: !1,
            manualPlay: !1,
            continuousPlay: !1,
            replay: !1,
            playlist: [],
            onAdPlay: Function.prototype,
            onAdEnd: Function.prototype,
            onVideoPlay: Function.prototype,
            onVideoPause: Function.prototype,
            onVideoEnd: Function.prototype,
            onVideoMute: Function.prototype,
            onVideoUnmute: Function.prototype,
            hasClickedToPlay: !1,
            isChromeless: !1,
            isRailLayout: !1,
            playButtonStyle: null,
            centerPlayButtonAtMobile: !1,
            isEmbedded: !1,
            isLiveVideoEmbed: !1,
            shouldStickWhilePaused: !1,
            shouldPauseWhenMutedAndOutOfView: !1,
            disableSticky: !1,
            disableStickyOnMute: !1,
            mute: !1,
            autoplayCapabilities: null,
            onlyAutoplayMuted: !0,
            adPlayButtonPosition: "default",
            loadingLazy: null,
            pipAlignDesktop: "bottom",
            pipAlignMobile: "bottom",
            vertical: "",
            pageView: "",
            hideVideoTitle: !1,
            isStoryline: !1,
            showHeadlineInlineVid: !1,
            inlineHeadlineOverride: ""
        };
        let h = function(e) {
            var t, n, p = (0,
            d.C)().vertical, h = (0,
            a._)({}, b, e), v = h.vertical, y = h.playlist, g = h.isEmbedded, f = h.video, C = h.hideVideoTitle, w = h.isStoryline, x = h.showHeadlineInlineVid, k = h.inlineHeadlineOverride, j = (0,
            s._)(h, ["vertical", "playlist", "isEmbedded", "video", "hideVideoTitle", "isStoryline", "showHeadlineInlineVid", "inlineHeadlineOverride"]), T = v || p, L = (0,
            _.isTelemundoVertical)(T), B = L && !(!(t = m()) || t.match(/:\/\/[^.]+\.telemundo\.com\//)), N = !L && !(!(n = m()) || n.match(/:\/\/[^.]+\.(nbcnews|today|msnbc)\.com\//)), O = g && (B || N);
            return (0,
            o.jsx)(r.O1.Provider, {
                value: T,
                children: (0,
                o.jsx)(c.t, {
                    errorLogger: u.vV,
                    children: (0,
                    o.jsx)(l.C, (0,
                    i._)((0,
                    a._)({}, j), {
                        hideVideoTitle: C,
                        video: f,
                        isEmbedded: g,
                        useEmbeddedAds: O,
                        isStoryline: w,
                        showHeadlineInlineVid: x,
                        inlineHeadlineOverride: k,
                        playlist: null == y ? void 0 : y[0]
                    }))
                })
            })
        }
    }
    ,
    78882: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => o
        });
        var a = n(37876);
        n(14232);
        var i = n(95062)
          , s = n.n(i);
        function o(e) {
            var t = e.value
              , n = void 0 === t ? "" : t
              , i = e.label;
            return n ? (0,
            a.jsxs)("div", {
                className: "info-tile",
                "data-testid": "info-tile",
                children: [(0,
                a.jsx)("div", {
                    className: "info-tile__key black-print",
                    children: void 0 === i ? "" : i
                }), (0,
                a.jsx)("div", {
                    className: "info-tile__value black-print",
                    children: n
                })]
            }) : null
        }
        n(26700),
        o.propTypes = {
            value: s().string,
            label: s().string
        }
    }
    ,
    82581: e => {
        e.exports = {
            svg: "styles_svg__4HV8f",
            path: "styles_path__x2TqR",
            container: "styles_container__9nKLV",
            small: "styles_small___zOYd",
            medium: "styles_medium__HFE8b",
            large: "styles_large__fMVB5",
            "live-dot-blink": "styles_live-dot-blink__pHRve",
            "fade-in": "styles_fade-in__yBXKt",
            "expand-in": "styles_expand-in__mUbQu",
            "chatblog-expand-in": "styles_chatblog-expand-in__GKlGg"
        }
    }
    ,
    83850: e => {
        e.exports = {
            baconCardsWidthByOne: "styles_baconCardsWidthByOne__d_vwp",
            unibrow: "styles_unibrow__5PTYz",
            baconCardsWidthByOneIcon: "styles_baconCardsWidthByOneIcon__NEil_",
            baconCardsWidthByOneIconContainer: "styles_baconCardsWidthByOneIconContainer__vCHN9",
            baconCardsWidthByOneIconBackground: "styles_baconCardsWidthByOneIconBackground__Np1v4",
            baconCardsWidthByOneTeasePictureLinkWrapper: "styles_baconCardsWidthByOneTeasePictureLinkWrapper__rpL7L",
            baconCardsWidthByOneTeasePictureLink: "styles_baconCardsWidthByOneTeasePictureLink__HvxdX",
            "icon-gallery": "styles_icon-gallery__6Hbny",
            "icon-shop": "styles_icon-shop__QsuBp",
            baconCardsWidthByOneUnibrowSectionName: "styles_baconCardsWidthByOneUnibrowSectionName__wAhsN",
            baconCardsWidthByOneTeasePictureLinkDeepLink: "styles_baconCardsWidthByOneTeasePictureLinkDeepLink__xLX1F",
            baconCardsWidthByOneTeaseCategory: "styles_baconCardsWidthByOneTeaseCategory__s9t_1",
            baconCardsWidthByOneEyebrow: "styles_baconCardsWidthByOneEyebrow__4fusB",
            baconCardsWidthByOneEyebrowSlideshow: "styles_baconCardsWidthByOneEyebrowSlideshow__8KMou",
            baconCardsWidthByOneEyebrowVideo: "styles_baconCardsWidthByOneEyebrowVideo__hDbdK",
            baconCardsWidthByOneEyebrowDeepLinkVideo: "styles_baconCardsWidthByOneEyebrowDeepLinkVideo__kVTji",
            baconCardsWidthByOneFontStyle: "styles_baconCardsWidthByOneFontStyle__TtjLV",
            baconCardsWidthByOneTimestampStyle: "styles_baconCardsWidthByOneTimestampStyle__21_5x",
            baconCardsWidthByOneHeader: "styles_baconCardsWidthByOneHeader__aSmeN",
            noEyebrow: "styles_noEyebrow__ZjcmK",
            baconCardsWidthByOneHeaderLink: "styles_baconCardsWidthByOneHeaderLink__nK0bL",
            baconCardsWidthByOneHeaderLinkIcon: "styles_baconCardsWidthByOneHeaderLinkIcon__YsziH",
            baconCardsWidthByOneHeaderDeepLinkEpisode: "styles_baconCardsWidthByOneHeaderDeepLinkEpisode__j1x2h",
            xByOneDeepLinkSeason: "styles_xByOneDeepLinkSeason__37MPP",
            xByOneDeepLinkSeasonDate: "styles_xByOneDeepLinkSeasonDate__sdm90",
            "live-dot-blink": "styles_live-dot-blink__bMt6T",
            "fade-in": "styles_fade-in__D4AA3",
            "expand-in": "styles_expand-in__OUQ2y",
            "chatblog-expand-in": "styles_chatblog-expand-in__7Ku0B"
        }
    }
    ,
    84180: e => {
        e.exports = {
            baconCardsWidthByOne: "styles_baconCardsWidthByOne__2zDHr",
            imageAndSaveButtonWrapper: "styles_imageAndSaveButtonWrapper__ZjVU_",
            productNumbering: "styles_productNumbering__PB0yF",
            baconCardsWidthByOneHeader: "styles_baconCardsWidthByOneHeader___5ANL",
            baconCardsWidthByOneHeaderWithDescription: "styles_baconCardsWidthByOneHeaderWithDescription__Nqwhs",
            description: "styles_description__UCQ7y",
            productSellerWrapper: "styles_productSellerWrapper__K2qKc",
            addToCartIcon: "styles_addToCartIcon__C41X2",
            addToCart: "styles_addToCart__WPNW9",
            listPriceWithSale: "styles_listPriceWithSale__3PHIF",
            salePrice: "styles_salePrice__miLGr",
            listPrice: "styles_listPrice__v8ixX",
            "live-dot-blink": "styles_live-dot-blink__J1fEu",
            "fade-in": "styles_fade-in__T5dz1",
            "expand-in": "styles_expand-in__sVc7v",
            "chatblog-expand-in": "styles_chatblog-expand-in__XL6Z8"
        }
    }
    ,
    90988: e => {
        e.exports = {
            baconCardsTwoByThreeContainer: "styles_baconCardsTwoByThreeContainer__PYA_X",
            baconCardsTwoByThreeBgContent: "styles_baconCardsTwoByThreeBgContent__aegHp",
            baconCardsTwoByThreeBgWrapper: "styles_baconCardsTwoByThreeBgWrapper__b8t7J",
            baconCardsTwoByThreeGradient: "styles_baconCardsTwoByThreeGradient__vAswN",
            baconCardsTwoByThreeAdditionalGradient: "styles_baconCardsTwoByThreeAdditionalGradient__Dead8",
            baconCardsTwoByThreeOverlay: "styles_baconCardsTwoByThreeOverlay__RD0sY",
            cardOverlayHover: "styles_cardOverlayHover__OqFR0",
            baconCardsTwoByThreeTitleWrapper: "styles_baconCardsTwoByThreeTitleWrapper__3xiGi",
            baconCardsTwoByThreeTitleLink: "styles_baconCardsTwoByThreeTitleLink__6dWFI",
            baconCardsTwoByThreeTitle: "styles_baconCardsTwoByThreeTitle__eXJTC",
            noBG: "styles_noBG__1UKfy",
            baconCardsTwoByThreeDescription: "styles_baconCardsTwoByThreeDescription__Ualkf",
            baconCardsTwoByThreeButton: "styles_baconCardsTwoByThreeButton___lDhW",
            caret: "styles_caret__7CFq0",
            "live-dot-blink": "styles_live-dot-blink__9b3g7",
            "fade-in": "styles_fade-in__w0nHf",
            "expand-in": "styles_expand-in__MCXKy",
            "chatblog-expand-in": "styles_chatblog-expand-in__BECZ9"
        }
    }
    ,
    91655: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => b
        });
        var a = n(45526)
          , i = n(67684)
          , s = n(37876);
        n(14232);
        var o = n(95062)
          , l = n.n(o)
          , r = n(15039)
          , d = n.n(r)
          , c = n(68225)
          , u = n(31310)
          , _ = n(61702)
          , p = n(9874);
        n(52494);
        var m = function(e) {
            var t = e.children
              , n = e.useBackground
              , i = e.imageUrl
              , o = e.styleOverride
              , l = void 0 === o ? {
                bgWrapper: "",
                bgPicture: "",
                bgBackground: "",
                bgGradient: "",
                bgColor: ""
            } : o
              , r = e.animate
              , _ = void 0 !== r && r
              , m = function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return (0,
                s.jsx)("div", {
                    className: d()((t = {
                        "bg-background__gradient": !e
                    },
                    (0,
                    a._)(t, e, e),
                    (0,
                    a._)(t, "hasImage", !0),
                    t), "absolute absolute-fill"),
                    "data-testid": "bg-getGradient"
                }, "".concat(e).concat(n))
            };
            return (0,
            s.jsxs)("div", {
                "data-testid": "background",
                className: d()("background", "bg-background__wrapper", l.bgWrapper, {
                    "bg-use-background": n
                }),
                children: [function() {
                    if (!i)
                        return (0,
                        s.jsx)("div", {
                            className: d()({
                                "bg-background__color": !l.bgColor
                            }, l.bgColor, "absolute absolute-fill"),
                            "data-testid": "background-color"
                        });
                    var e = null;
                    return !1 !== l.bgGradient && (e = Array.isArray(l.bgGradient) ? l.bgGradient.map(m) : m(l.bgGradient)),
                    (0,
                    s.jsxs)(s.Fragment, {
                        children: [(0,
                        s.jsx)("div", {
                            className: d()({
                                "bg-background": n
                            }, l.bgBackground),
                            children: n ? (0,
                            s.jsx)("div", {
                                className: d()("bg-background__picture", l.bgPicture, "w-100 h-100", {
                                    "bg-background__picture": _
                                }),
                                style: {
                                    backgroundImage: "url('".concat(i, "')")
                                },
                                "data-testid": "background-image"
                            }) : (0,
                            c.PI)(i) ? (0,
                            s.jsx)(u.V, {
                                url: i,
                                flavor: "fit",
                                responsiveFlavors: {
                                    s: p.Ay.FIT_760w,
                                    m: p.Ay.FIT_1000w,
                                    xl: p.Ay.FIT_1500w
                                },
                                className: d()("bg-background__picture", l.bgPicture, "absolute absolute-fill overflow-hidden", {
                                    "bg-background__animate": _
                                })
                            }) : "\x3c!-- Must be resizable image --\x3e"
                        }), e]
                    })
                }(), !!t && (0,
                s.jsx)("div", {
                    className: d()(l.bgContent, {
                        "relative df flex-column justify-center": n
                    }),
                    children: t
                })]
            })
        };
        m.propTypes = {
            children: l().node,
            useBackground: l().bool.isRequired,
            imageUrl: l().string,
            styleOverride: l().shape({
                bgWrapper: l().string,
                bgPicture: l().string,
                bgBackground: l().string,
                bgGradient: l().oneOfType([l().string, l().arrayOf(l().string), l().bool]),
                bgContent: l().oneOfType([l().string, l().arrayOf(l().string), l().bool]),
                bgColor: l().string
            }),
            animate: l().bool
        },
        m.contextTypes = (0,
        i._)({}, _.EM);
        let b = m
    }
    ,
    92036: (e, t, n) => {
        "use strict";
        n.d(t, {
            c: () => _
        });
        var a = n(67684)
          , i = n(65699)
          , s = n(37876);
        n(14232);
        var o = n(95062)
          , l = n.n(o)
          , r = n(15039)
          , d = n.n(r)
          , c = n(52786)
          , u = n.n(c);
        function _(e) {
            var t = e.className
              , n = (0,
            i._)(e, ["className"]);
            return (0,
            s.jsx)("div", (0,
            a._)({
                className: d()(u().notchedHorizontalRule, void 0 === t ? null : t)
            }, n))
        }
        _.propTypes = {
            className: l().string
        }
    }
    ,
    93783: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => f
        });
        var a = n(45526)
          , i = n(37876)
          , s = n(14232)
          , o = n(34846)
          , l = n(87992)
          , r = n(95062)
          , d = n.n(r)
          , c = n(15039)
          , u = n.n(c);
        n(32542);
        var _ = n(97247)
          , p = n(21492)
          , m = n(3073)
          , b = n(53613)
          , h = n(28533)
          , v = n(19747)
          , y = {
            supported: ["slideshow", "video", "shop"]
        };
        function g(e) {
            var t, n = e.related, r = e.isRailAdjacent, d = e.displayTimeAgo, c = void 0 !== d && d, g = e.pkgClassName, f = void 0 === g ? "" : g, C = e.parentNoImage, w = (0,
            s.useContext)(l.O1), x = f && f.includes("standardLeadPlus") ? "pkg related-content__item-featured--standard-lead" : f, k = ["pkg related-content__item-featured--one-up", "pkg related-content__item-featured--standard-lead", "pkg related-content__item-featured--straight-up"].includes(x), j = "pkg related-content__item--lead-section-front" === x, T = x && (t = x.replace("pkg ", ""),
            void 0 !== r && r ? t.concat("--rail-adjacent") : t);
            return !!n.length && (0,
            i.jsx)("div", {
                className: u()("relatedContent", "related-content", {
                    "related-content__parent-no-img": void 0 !== C && C
                }),
                "data-testid": "related-content",
                children: (0,
                i.jsx)("ul", {
                    className: "related-content__list",
                    "data-testid": "related-content__list",
                    children: n.map(function(e) {
                        var t, n, s, l, r, d, g = e.computedValues, f = e.id, C = e.item, x = e.type;
                        if (!g)
                            return null;
                        var L = null == g ? void 0 : g.headline
                          , B = null == g ? void 0 : null === (d = g.unibrow) || void 0 === d ? void 0 : null === (r = d.url) || void 0 === r ? void 0 : r.primary
                          , N = null == g ? void 0 : g.url
                          , O = null == g ? void 0 : g.flag
                          , P = null == C ? void 0 : C.datePublished
                          , A = "liveBlog" === x && (0,
                        m.fU)(P) && !(0,
                        m.pI)(O)
                          , H = (0,
                        b.m)({
                            item: C
                        })
                          , S = "today" === w;
                        return (0,
                        i.jsxs)("li", {
                            className: u()("related-content__item", (0,
                            a._)({
                                "related-content__item-featured": k
                            }, T, k || j)),
                            "data-contentid": f,
                            "data-testid": "related-content__list__item",
                            children: [S ? (0,
                            i.jsx)("span", {
                                "data-testid": "type-icon-inline",
                                children: (0,
                                i.jsx)(v.d, {
                                    type: x,
                                    taxonomy: null == C ? void 0 : C.taxonomy,
                                    className: "related-content__type-icon-inline"
                                })
                            }) : null, S ? null : (t = "liveBlog" === x,
                            n = y.supported.includes(x),
                            (0,
                            i.jsx)(p.A, {
                                type: n ? x : "related-article",
                                className: u()("related-content__icon", {
                                    "related-content__icon-liveblog": t,
                                    active: A,
                                    "related-content__icon-gallery": "slideshow" === x,
                                    "related-content__icon-opinion": "think" === H && "think" !== w
                                })
                            })), "think" !== w && "think" === H && function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                  , t = (0,
                                o.Bd)().t;
                                return (0,
                                i.jsx)("h2", {
                                    className: "related-content__eyebrow",
                                    children: (0,
                                    i.jsx)(_.A, {
                                        to: e,
                                        className: "related-content__eyebrow-link",
                                        "data-testid": "related-content__eyebrow",
                                        children: t("Opinion")
                                    })
                                })
                            }(B), (l = null == C ? void 0 : null === (s = C.date) || void 0 === s ? void 0 : s.publishedAt,
                            (0,
                            i.jsxs)("h3", {
                                className: "related-content__headline",
                                "data-testid": "related-content__headline",
                                children: [c ? (0,
                                i.jsx)(h.f, {
                                    dateString: l,
                                    displayTime: !1
                                }) : null, (0,
                                i.jsxs)(_.A, {
                                    to: N,
                                    className: "related-content__headline-link",
                                    "data-testid": "related-content__headline__link",
                                    children: ["liveBlog" === x && (0,
                                    i.jsx)("span", {
                                        className: u()("related-content__headline--liveblog", {
                                            active: A
                                        }),
                                        children: "Live Updates\xa0/\xa0"
                                    }), L]
                                })]
                            }))]
                        }, f)
                    })
                })
            })
        }
        g.contextTypes = {
            vertical: d().string
        },
        g.propTypes = {
            isRailAdjacent: d().bool,
            displayTimeAgo: d().bool,
            pkgClassName: d().string,
            parentNoImage: d().bool,
            related: d().arrayOf(d().instanceOf(Object)).isRequired
        };
        let f = g
    }
    ,
    96157: (e, t, n) => {
        "use strict";
        n.d(t, {
            a: () => r
        });
        var a = n(37876);
        n(14232);
        var i = n(15039)
          , s = n.n(i)
          , o = n(95062)
          , l = n.n(o)
          , r = function(e) {
            var t = e.additionalClasses;
            return (0,
            a.jsxs)("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className: s()(void 0 === t ? "" : t, "shoppable-icon"),
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                a.jsx)("title", {
                    id: "shoppingCartIcon",
                    children: "The ingredients to this recipe can be purchased online"
                }), (0,
                a.jsx)("rect", {
                    width: "36",
                    height: "36",
                    fill: "#FF503C"
                }), (0,
                a.jsxs)("g", {
                    clipPath: "url(#clip0_1325_36556)",
                    children: [(0,
                    a.jsx)("path", {
                        d: "M15.7802 27.9705C16.7221 27.9705 17.4856 27.2069 17.4856 26.265C17.4856 25.3231 16.7221 24.5596 15.7802 24.5596C14.8383 24.5596 14.0747 25.3231 14.0747 26.265C14.0747 27.2069 14.8383 27.9705 15.7802 27.9705Z",
                        fill: "white"
                    }), (0,
                    a.jsx)("path", {
                        d: "M26.1185 27.9705C27.0604 27.9705 27.824 27.2069 27.824 26.265C27.824 25.3231 27.0604 24.5596 26.1185 24.5596C25.1766 24.5596 24.4131 25.3231 24.4131 26.265C24.4131 27.2069 25.1766 27.9705 26.1185 27.9705Z",
                        fill: "white"
                    }), (0,
                    a.jsx)("path", {
                        d: "M28 18.1752V12.0919C28 11.5732 27.5799 11.1531 27.0612 11.1531H13.3143C13.1672 11.1531 13 11.1531 12.8671 11.1531L12.4741 9.37956C12.4005 9.06037 12.1158 8.8335 11.788 8.8335H8.70409C8.31527 8.8335 8 9.14877 8 9.53758C8 9.9264 8.31527 10.2417 8.70409 10.2417H11.2279L14.1858 23.0584C14.2593 23.3776 14.5441 23.6045 14.8719 23.6045H27.0964C27.4852 23.6045 27.8005 23.2892 27.8005 22.9004C27.8005 22.5116 27.4852 22.1963 27.0964 22.1963H15.432L15.0315 20.4611L27.0612 19.114C27.6182 19.0342 28 18.6939 28 18.1752Z",
                        fill: "white"
                    })]
                })]
            })
        };
        r.propTypes = {
            additionalClasses: l().string
        }
    }
    ,
    96365: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => u
        });
        var a = n(37876);
        n(14232);
        var i = n(51845)
          , s = n(40079)
          , o = n(15039)
          , l = n.n(o)
          , r = n(76550)
          , d = n(34846);
        function c(e) {
            var t, n = e.listPrice, i = void 0 === n ? "" : n, s = e.salePrice, o = void 0 === s ? "" : s, l = e.seller, c = void 0 === l ? "" : l, u = (0,
            r.T2)({
                salePrice: o,
                listPrice: i
            }), _ = (0,
            d.Bd)().t;
            return t = u ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("span", {
                    className: "salePrice",
                    "data-testid": "shop-button__sale-price",
                    children: "$".concat(o, " ")
                }), (0,
                a.jsx)("span", {
                    className: "listPrice onSale",
                    "data-testid": "shop-button__strikeout-list-price",
                    children: "$".concat(i)
                })]
            }) : (0,
            a.jsx)("span", {
                className: "listPrice",
                "data-testid": "shop-button__list-price",
                children: "$".concat(i)
            }),
            (0,
            a.jsxs)("span", {
                className: "shop-button-info__vendor-name",
                "data-testid": "shop-button-variation",
                children: [t, c && (0,
                a.jsx)("span", {
                    className: "sellerText",
                    "data-testid": "shop-button-variation__seller-text",
                    children: " ".concat(_("at"), " ").concat(c)
                })]
            })
        }
        let u = function(e) {
            var t = e.additionalStyles
              , n = e.block
              , o = e.isWaffle
              , r = e.isBacon
              , d = void 0 !== r && r
              , u = e.listPrice
              , _ = e.salePrice
              , p = e.name
              , m = e.seller
              , b = e.shouldTrackClicks
              , h = e.trackingCode
              , v = void 0 === h ? "mbt_ecommerce_shop_button" : h;
            if (!u && !_)
                return null;
            var y = (0,
            s.o)(m);
            return (0,
            i.stub)("register", v, {
                allowDuplicate: !0
            }),
            (0,
            a.jsx)("button", {
                tabIndex: -1,
                type: "button",
                "data-testid": "shop-button-info",
                className: l()("".concat(n, "__vendorBtn"), null == t ? void 0 : t.vendor, "shop-button-info__vendor", {
                    "shop-button-info__vendor-fit-text pl3-m": y && o,
                    "shop-button-info__vendor-fit-text": y,
                    "shop-button-info__bacon-button": d,
                    "shop-button-info__not-bacon-button": !d
                }),
                onClick: void 0 === b || b ? function() {
                    (0,
                    i.stub)("track", v, {
                        action: "itemClick",
                        name: p,
                        listPrice: u,
                        seller: m
                    })
                }
                : void 0,
                children: (0,
                a.jsx)(c, {
                    listPrice: u,
                    salePrice: _,
                    seller: m
                })
            })
        }
    }
}]);
