"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1807], {
    38533: (e, t, n) => {
        n.d(t, {
            A: () => v
        });
        var i = n(20294)
          , o = n(37876);
        n(14232);
        var a = n(48011)
          , r = n(95062)
          , s = n.n(r)
          , c = n(77328)
          , l = n.n(c)
          , p = n(82780)
          , d = n.n(p)
          , m = n(61623)
          , u = n(96491)
          , g = n(3073)
          , y = n(89903)
          , x = function(e) {
            var t = e.vertical
              , n = e.currentPath;
            try {
                var o = (0,
                i._)(n.replace(/^\//, "").split("/"), 2)
                  , a = o[0]
                  , r = o[1]
                  , s = u.SHOW_BLOGS[t]["/".concat(a, "/").concat(r, "/")];
                return (null == s ? void 0 : s.ampArticleSubPath) || ""
            } catch (e) {
                return ""
            }
        }
          , h = function(e) {
            var t = e.content
              , n = e.currentPath
              , i = e.domain
              , o = e.isLiveBlog
              , a = e.isShowBlog
              , r = e.vertical
              , s = d()(t, "id", null);
            if (!i || !r || !s || !/^[ntrmw]/.test(s) || "deportes" === r)
                return null;
            var c = "amp";
            if ("video" === t.type) {
                if (!(0,
                y.B0)(u.AMPHTML_VIDEO_LINK, r))
                    return null;
                c = "amp-video"
            }
            if (d()(t, "nativeAd", !1) || (0,
            m.Bg)(t))
                return null;
            var l = "";
            if (o) {
                var p = d()(t, "subType", null);
                l = (0,
                g.Cd)(p) ? "blog/" : "live-blog/"
            } else
                a ? l = x({
                    vertical: r,
                    currentPath: n
                }) : "recipe" === t.type && (l = "recipes/");
            return "https://www.".concat(i, "/").concat(r, "/").concat(c, "/").concat(l).concat(s)
        }
          , j = function(e) {
            var t = e.content
              , n = e.currentPath
              , i = e.domain
              , a = e.isLiveBlog
              , r = e.isShowBlog
              , s = h({
                content: t,
                currentPath: void 0 === n ? "" : n,
                domain: i,
                isLiveBlog: void 0 !== a && a,
                isShowBlog: void 0 !== r && r,
                vertical: e.vertical
            });
            return s ? (0,
            o.jsx)(l(), {
                children: (0,
                o.jsx)("link", {
                    rel: "amphtml",
                    href: s
                })
            }) : null
        };
        j.propTypes = {
            content: s().shape({}).isRequired,
            currentPath: s().string,
            domain: s().string.isRequired,
            isLiveBlog: s().bool,
            isShowBlog: s().bool,
            vertical: s().string.isRequired
        };
        let v = (0,
        a.Ng)(function(e) {
            return {
                domain: e.router.domain
            }
        })(j)
    }
    ,
    45131: (e, t, n) => {
        n.d(t, {
            VQ: () => m,
            g1: () => g,
            jn: () => u,
            kR: () => y
        });
        var i = n(85993)
          , o = n(37876);
        n(14232);
        var a = n(89903)
          , r = n(96491)
          , s = n(13884)
          , c = n(68552)
          , l = n(97183)
          , p = "today/label/on-the-show"
          , d = ["3rd Hour of TODAY", "TODAY with Hoda & Jenna", "Weekend TODAY", "Sunday TODAY"]
          , m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (!e)
                return null;
            var s = e.shows
              , c = e.labels
              , l = e.additionalTerms;
            if (!(0,
            a.B0)(r.QUERYLY_SEARCH_METADATA, t))
                return null;
            var m = !1
              , u = new Set;
            Array.isArray(s) && s.forEach(function(e) {
                "show" === e.taxonomyType && u.add(e.name)
            }),
            n ? m = n.startsWith("tdy_") : Array.isArray(c) && (m = c.some(function(e) {
                return e.path === p
            })),
            Array.isArray(l) && l.forEach(function(e) {
                e.path === p && (m = !0),
                "show" === e.taxonomyType && u.add(e.name)
            });
            var g = (0,
            i._)(u)
              , y = !!g.length;
            return m || y ? (0,
            o.jsxs)(o.Fragment, {
                children: [m && (0,
                o.jsx)("meta", {
                    name: "additional_type",
                    content: "show"
                }), g.map(function(e) {
                    var t = d.includes(e) ? e : "".concat(e, "|TODAY");
                    return (0,
                    o.jsx)("meta", {
                        name: "shows",
                        content: t
                    }, e.replace(/\/s/i, "-"))
                }), m && !y && (0,
                o.jsx)("meta", {
                    name: "shows",
                    content: "TODAY"
                })]
            }) : null
        }
          , u = function(e) {
            var t, n = e.primaryMedia, i = (null == n ? void 0 : n.type) === "embeddedPlaymakerLiveVideo", a = i && s.W[null === (t = n.playmakerLiveVideo) || void 0 === t ? void 0 : t.playmakerId];
            return (0,
            o.jsx)(o.Fragment, {
                children: i && (0,
                o.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify((0,
                        c.jE)(a))
                    }
                })
            })
        }
          , g = function(e) {
            var t = (0,
            c.fv)(e)
              , n = Object.keys(t).length > 0;
            return (0,
            o.jsx)(o.Fragment, {
                children: n && (0,
                o.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(t)
                    }
                })
            })
        }
          , y = function(e) {
            var t = e.vertical
              , n = void 0 === t ? "" : t
              , i = e.organization
              , o = e.publisherLogo
              , a = e.section;
            return ["news", "msnbc", "select", "today"].includes(n) || !i ? (0,
            l.x)(n, a) : {
                "@type": "NewsMediaOrganization",
                name: i,
                logo: o ? {
                    "@type": "ImageObject",
                    url: o
                } : ""
            }
        }
    }
    ,
    69527: (e, t, n) => {
        n.d(t, {
            CJ: () => c,
            HZ: () => r,
            LM: () => s,
            W5: () => a,
            sc: () => o
        });
        var i = function(e) {
            return "string" == typeof e
        }
          , o = function(e) {
            try {
                if (i(e))
                    return decodeURIComponent(e)
            } catch (e) {}
            return e
        }
          , a = function(e, t) {
            return "string" == typeof e ? e.substring(0, t) : ""
        }
          , r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
            return i(e) ? e.replace(/\s+/g, "").substring(0, t) : e
        }
          , s = function(e) {
            return i(e) ? e.replace(/&amp;/g, "&") : e
        };
        function c(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " | ";
            return i(e) ? [e, t].join(n) : t
        }
    }
    ,
    91807: (e, t, n) => {
        n.d(t, {
            oH: () => h,
            D$: () => I,
            ze: () => D,
            Dt: () => k,
            Hv: () => J,
            wi: () => C,
            fN: () => B,
            iF: () => A,
            X$: () => W
        });
        var i = n(37876)
          , o = n(14232)
          , a = n(87992)
          , r = n(95062)
          , s = n.n(r)
          , c = n(77328)
          , l = n.n(c)
          , p = n(61702)
          , d = n(68552)
          , m = n(67544)
          , u = n(22844)
          , g = n(89933)
          , y = n(38533)
          , x = n(45131);
        function h(e) {
            var t, n, r, s, c, p, h, j, v, f, w, _, b, S, T, O, N, L, I, C, k, A, M, W, H, P, D, J, B, F, R = e.article, V = e.vertical, z = e.currentPath, q = e.isShowBlog, E = e.allVideos, Y = (0,
            o.useContext)(a.cq), U = "select" === V ? (0,
            d.ZF)(R) : null, X = (0,
            x.jn)(R), Q = (0,
            d.Du)(R, V), G = (0,
            x.g1)(R), Z = null !== (F = null == R ? void 0 : null === (J = R.body) || void 0 === J ? void 0 : J.filter(function(e) {
                return "embeddedProduct" === e.type && !!e.product
            }).map(function(e) {
                var t, n, i, o, a = e.product, r = e.hyphenId, s = a.id, c = a.description, l = a.name, p = a.offers, m = a.teaseImage, u = a.prosAndCons, g = a.productSpecifications, y = null !== (i = null === (t = p[0]) || void 0 === t ? void 0 : t.externalUrl) && void 0 !== i ? i : "#", x = null !== (o = null == m ? void 0 : null === (n = m.url) || void 0 === n ? void 0 : n.primary) && void 0 !== o ? o : "#";
                return JSON.parse((0,
                d.YY)({
                    id: s,
                    name: l,
                    description: c,
                    offers: p,
                    productUrl: y,
                    imageUrl: x,
                    prosAndCons: u,
                    article: R,
                    productSpecifications: g,
                    hyphenId: r
                }))
            })) && void 0 !== F ? F : [], K = (R.taxonomy.allTerms || []).find(function(e) {
                return e.path.match((0,
                m.M)(V))
            });
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0,
                            d.wK)(R, V))
                        }
                    }), K && (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0,
                            d.P5)(R, V, Y))
                        }
                    }), Z.length && (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0,
                            d.mm)({
                                items: Z
                            }))
                        }
                    }), X, (void 0 === E ? [] : E).map(function(e) {
                        return (0,
                        i.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify((0,
                                d.jo)({
                                    video: e,
                                    vertical: V
                                }))
                            }
                        }, "VideoObjectLD-".concat(e.id))
                    }), Q && (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(Q)
                        }
                    }), (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0,
                            d.hg)(R, V))
                        }
                    }), G, U && (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(U)
                        }
                    }), (null === (B = R.socialCopy) || void 0 === B ? void 0 : B.social) ? (0,
                    i.jsx)("meta", {
                        name: "socialCopy",
                        content: R.socialCopy.social
                    }) : null]
                }), (r = (n = R.date).modifiedAt,
                s = n.publishedAt,
                c = R.description,
                p = R.headline,
                h = R.primaryImage,
                j = R.socialImage,
                v = R.taxonomy.topics,
                f = R.teaseImage,
                w = R.url,
                _ = R.authors,
                S = null === (t = (b = j || f || h || {}).url) || void 0 === t ? void 0 : t.primary,
                T = R.nativeAd,
                O = R.searchable,
                L = (N = R.sponsoredBy) && N.includes("NBC News Brand Studio"),
                I = O && (!T || L) ? T && L ? (0,
                i.jsx)("meta", {
                    name: "ROBOTS",
                    content: "INDEX, NOFOLLOW"
                }) : null : (0,
                i.jsx)("meta", {
                    name: "ROBOTS",
                    content: "NOINDEX, NOFOLLOW"
                }),
                C = (0,
                x.VQ)(R.taxonomy, V),
                k = v.filter(Boolean).some(function(e) {
                    return "opinion" === e.slug.toLowerCase()
                }),
                A = p.social || p.primary,
                M = c.social || c.primary || c.seo,
                W = (0,
                u.pW)(S, V, "og"),
                H = "article",
                D = (P = _.map(function(e) {
                    var t;
                    return null == e ? void 0 : null === (t = e.person) || void 0 === t ? void 0 : t.name
                })).length > 1,
                (0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: p.seo || p.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "cXenseParse:author",
                        content: P.join(" | "),
                        "data-separator": D ? "|" : void 0
                    }), (0,
                    i.jsx)("meta", {
                        name: "cXenseParse:publishtime",
                        content: s
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: c.seo || c.primary
                    }), (0,
                    i.jsx)("link", {
                        rel: "canonical",
                        href: (0,
                        g.getCanonical)(w)
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:url",
                        content: w.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: A
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: M
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: W
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: (0,
                        u.pW)(S, V, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:type",
                        content: b.encodingFormat || "image/gif"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:height",
                        content: "630"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:type",
                        content: H
                    }), (0,
                    i.jsx)("meta", {
                        name: "branch:deeplink:title",
                        content: A
                    }), (0,
                    i.jsx)("meta", {
                        name: "branch:deeplink:description",
                        content: M
                    }), (0,
                    i.jsx)("meta", {
                        name: "branch:deeplink:image",
                        content: W
                    }), (0,
                    i.jsx)("meta", {
                        name: "branch:deeplink:type",
                        content: H
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image:src",
                        content: (0,
                        u.pW)(S, V, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image",
                        content: (0,
                        u.pW)(S, V, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:title",
                        content: p.social || p.primary
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:description",
                        content: c.social || c.primary || c.seo
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0,
                    i.jsx)("meta", {
                        property: "article:opinion",
                        content: k.toString()
                    }), (0,
                    i.jsx)("meta", {
                        property: "article:content_tier",
                        content: "free"
                    }), (0,
                    i.jsx)("meta", {
                        property: "article:published_time",
                        content: s
                    }), (0,
                    i.jsx)("meta", {
                        property: "article:modified_time",
                        content: r
                    }), (0,
                    i.jsx)("meta", {
                        name: "thumbnail",
                        content: (0,
                        u.pW)(S, V)
                    }), I, C]
                })), (0,
                i.jsx)(y.A, {
                    content: R,
                    vertical: V,
                    currentPath: void 0 === z ? "" : z,
                    isShowBlog: void 0 !== q && q
                })]
            })
        }
        h.propTypes = {
            article: p.jZ.isRequired,
            vertical: s().string.isRequired,
            currentPath: s().string,
            isShowBlog: s().bool
        };
        var j = n(39324)
          , v = n.n(j)
          , f = n(82780)
          , w = n.n(f)
          , _ = n(69527)
          , b = n(6226)
          , S = n(20309)
          , T = n(89903)
          , O = n(96491)
          , N = function(e) {
            var t = e.url
              , n = e.section
              , i = e.pageType
              , o = e.vertical
              , a = e.id
              , r = e.isContentGated;
            return JSON.stringify({
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
                    },
                    appVersion: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    gatedContentEnabled: {
                        "@id": "Text",
                        "@type": "@id"
                    }
                },
                "@type": "Dataset",
                name: "additionalTaxonomy",
                description: "This is additional taxonomy that helps us with analytics",
                url: void 0 === t ? "" : t,
                pageType: void 0 === i ? "" : i,
                vertical: void 0 === o ? "" : o,
                subVertical: (void 0 === n ? "" : n) || "",
                section: "",
                subSection: "",
                packageId: void 0 === a ? "" : a,
                sponsor: "",
                appVersion: w()(v()(), ["publicRuntimeConfig", "appVersion"], ""),
                gatedContentEnabled: void 0 !== r && r
            })
        }
          , L = function(e) {
            return function(t) {
                var n = e.find(function(e) {
                    return e.field === t
                });
                return w()(n, "source.value")
            }
        };
        function I(e) {
            var t, n, o, r = e.curation, s = e.domain, c = e.firstContentInZoneA, p = e.section, m = e.vertical, y = r.curationMetadata, h = r.dateCreated, j = r.dateModified, v = r.hidden, f = r.id, w = r.pageMetadata, I = r.pageType, C = r.title, k = r.pageRoute, A = L(void 0 === w ? [] : w), M = L(void 0 === y ? [] : y), W = A("seoTitle"), H = A("seoDescription"), P = M("socialDescription");
            "string" == typeof P && P.length || (P = H);
            var D = M("socialTitle");
            "string" == typeof D && D.length || (D = W || C);
            var J = null
              , B = A("socialImageUrl");
            B && (J = B);
            var F = M("socialImageUrl");
            F && (J = F);
            var R = (0,
            u.pW)(J, m)
              , V = (0,
            u.pW)(J, m, "og")
              , z = (0,
            u.pW)(J, m, "twitter")
              , q = W;
            "msnbc" === m ? (n = "MSNBC",
            t = "MSNBC") : "today" === m ? (n = "TODAY",
            q = (0,
            _.CJ)(W, n),
            t = "TodayShow") : (0,
            S.isTelemundoVertical)(m) ? (n = "Telemundo",
            q = (0,
            _.CJ)(W, n),
            t = "Telemundo") : (0,
            S.isNewsVertical)(m) && (n = "NBC News",
            q = (0,
            _.CJ)(W, n),
            t = "NBCNews",
            o = "https://media-cldnry.s-nbcnews.com/image/upload/h_60/v1696280688/newsgroup-logos/nbcnews/logo/primary-black-424x45.png");
            var E = "https://www.".concat(s);
            ["news", "msnbc", "today", "telemundo", "sponsoredcontent"].includes(m) || (E += "/".concat(m)),
            p && (E += "/".concat(p));
            var Y = c && "showLead" === c.type && c.metadata
              , U = (0,
            T.B0)(O.GATED_CONTENT, m)
              , X = (0,
            a.Jp)()
              , Q = null == X ? void 0 : X["today-gated-front"]
              , G = Y ? c.metadata.description : null
              , Z = "showPage" === I ? I : p ? "SectionFront" : "Front"
              , K = (0,
            d.A)(r, m)
              , $ = (0,
            d.l3)(r)
              , ee = "https://www.".concat(s, "/#publisher")
              , et = p && ["food", "today-table-recipes"].some(function(e) {
                return p.startsWith(e)
            })
              , en = (0,
            d.kr)({
                jsonLdPageType: Z,
                description: H,
                title: W,
                url: E,
                vertical: m,
                section: p
            }, m, ee, p);
            return (0,
            i.jsxs)(l(), {
                children: [(0,
                i.jsx)("title", {
                    children: q
                }), (0,
                i.jsx)("meta", {
                    name: "description",
                    content: H
                }), (0,
                i.jsx)("meta", {
                    name: "thumbnail",
                    content: R
                }), "news" === m && !p && (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)("meta", {
                        name: "pocket-site-verification",
                        content: "7d430daabab89c549b078097430be5"
                    }), (0,
                    i.jsx)("meta", {
                        name: "google-site-verification",
                        content: "xcFg25oVUcM7Zmt3RO2DdNXUrzie1AqgHOoKA_uTeks"
                    })]
                }), "today" === m && !p && (0,
                i.jsx)("meta", {
                    name: "google-site-verification",
                    content: "CW4UdAimFXD75AQd4jFiVmY4R-gOduNQJHSJMfzr8cw"
                }), "msnbc" === m && !p && (0,
                i.jsx)("meta", {
                    name: "google-site-verification",
                    content: "REPjLi_yDHx7TLKgH3OC5uFnLfGp1M-1m8QUec6g8qQ"
                }), (0,
                i.jsx)("link", {
                    rel: "canonical",
                    href: (0,
                    g.getCanonical)(E)
                }), (0,
                i.jsx)("meta", {
                    property: "og:url",
                    content: E
                }), (0,
                i.jsx)("meta", {
                    property: "og:title",
                    content: D
                }), (0,
                i.jsx)("meta", {
                    property: "og:description",
                    content: P
                }), (0,
                i.jsx)("meta", {
                    property: "og:image",
                    content: V
                }), (0,
                i.jsx)("meta", {
                    property: "og:image:width",
                    content: "1200"
                }), (0,
                i.jsx)("meta", {
                    property: "og:image:height",
                    content: "630"
                }), (0,
                i.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:site",
                    content: t
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:title",
                    content: D
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:description",
                    content: P
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:image",
                    content: z
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:image:src",
                    content: z
                }), (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    "data-testid": "front_CollectionPage",
                    dangerouslySetInnerHTML: {
                        __html: "".concat(JSON.stringify(en))
                    }
                }), (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    "data-testid": "front-jsonld",
                    dangerouslySetInnerHTML: {
                        __html: N({
                            url: E,
                            section: p,
                            vertical: m,
                            id: f,
                            pageType: Z,
                            isContentGated: k && ("/start-today" === k && Q || "/account" === k) && U
                        })
                    }
                }), "showPage" !== I ? (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    "data-testid": "jsonld__WebSite",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "WebSite",
                            url: E,
                            identifier: {
                                "@type": "PropertyValue",
                                propertyID: "Document Id",
                                value: f
                            },
                            headline: C,
                            alternativeHeadline: W,
                            dateCreated: (0,
                            b.A)(h),
                            datePublished: (0,
                            b.A)(h),
                            dateModified: (0,
                            b.A)(j),
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://www.".concat(s, "/search?q={search_term_string}"),
                                "query-input": "required name=search_term_string"
                            },
                            image: J ? {
                                "@type": "ImageObject",
                                url: J
                            } : "",
                            publisher: (0,
                            x.kR)({
                                vertical: m,
                                organization: n,
                                publisherLogo: o,
                                section: p
                            }),
                            description: H,
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                inLanguage: "English",
                                datePublished: h,
                                name: s,
                                "@id": E
                            }
                        })
                    }
                }) : (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    "data-testid": "jsonld__TVSeries",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "TVSeries",
                            url: E,
                            productionCompany: m,
                            temporalCoverage: G,
                            description: H,
                            thumbnailUrl: R
                        })
                    }
                }), $ && (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    "data-testid": "jsonld__ProductBestsellers",
                    dangerouslySetInnerHTML: {
                        __html: "".concat(JSON.stringify($))
                    }
                }), K && et && (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    "data-testid": "jsonld__RecipeCarousel",
                    dangerouslySetInnerHTML: {
                        __html: "".concat(JSON.stringify(K))
                    }
                }), v && (0,
                i.jsx)("meta", {
                    name: "robots",
                    content: "NOINDEX, NOFOLLOW",
                    "data-testid": "front__robots"
                })]
            })
        }
        function C(e) {
            var t, n, o, a, r, s, c, p, m, h, j, v, f, w, _, b, S, T = e.recipe, O = e.vertical;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify((0,
                            d.$Y)(T, O)))
                        }
                    }), (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify((0,
                            d.BA)(T, O)))
                        }
                    })]
                }), (n = T.dateModified,
                o = T.datePublished,
                a = T.description,
                r = T.headline,
                s = T.hidden,
                c = T.nativeAd,
                p = T.primaryImage,
                m = T.socialImage,
                h = T.teaseImage,
                j = T.url,
                v = T.authors,
                w = null === (t = (f = m || h || p || {}).url) || void 0 === t ? void 0 : t.primary,
                _ = (0,
                x.VQ)(T.taxonomy, O),
                S = (b = v.map(function(e) {
                    return null == e ? void 0 : e.name
                })).length > 1,
                (0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: r.seo || r.primary
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: a.seo || a.primary
                    }), (0,
                    i.jsx)("link", {
                        rel: "canonical",
                        href: (0,
                        g.getCanonical)(j)
                    }), (c || s) && (0,
                    i.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    }), (0,
                    i.jsx)("meta", {
                        property: "cXenseParse:author",
                        content: b.join(" | "),
                        "data-separator": S ? "|" : void 0
                    }), (0,
                    i.jsx)("meta", {
                        name: "cXenseParse:publishtime",
                        content: o
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:url",
                        content: j.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: r.social || r.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: a.social || a.primary || a.seo
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: (0,
                        u.pW)(w, O, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: (0,
                        u.pW)(w, O, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:type",
                        content: f.encodingFormat || "image/gif"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:height",
                        content: "630"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:type",
                        content: "recipe"
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image:src",
                        content: (0,
                        u.pW)(w, O, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image",
                        content: (0,
                        u.pW)(w, O, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:title",
                        content: r.social || r.primary
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:description",
                        content: a.social || a.primary || a.seo
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0,
                    i.jsx)("meta", {
                        property: "recipe:published",
                        content: o
                    }), (0,
                    i.jsx)("meta", {
                        property: "recipe:modified",
                        content: n
                    }), (0,
                    i.jsx)("meta", {
                        name: "thumbnail",
                        content: (0,
                        u.pW)(w, O)
                    }), _]
                })), (0,
                i.jsx)(y.A, {
                    content: T,
                    vertical: O
                })]
            })
        }
        I.propTypes = {
            curation: p.mn.isRequired,
            domain: s().string.isRequired,
            firstContentInZoneA: p.F7.isRequired,
            section: s().string.isRequired,
            vertical: s().string.isRequired
        },
        C.propTypes = {
            recipe: p.D4.isRequired,
            vertical: s().string.isRequired
        };
        let k = function() {
            return (0,
            i.jsx)(i.Fragment, {
                children: (0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: "NBC News - My News"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: "NBC News - My News"
                    }, "title")]
                })
            })
        };
        function A(e) {
            var t, n, o, a, r, s, c, p, m, y, h, j, v, f = e.slideshow, w = e.vertical;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        "data-testId": "slideshow__ld-json-gallery",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify((0,
                            d.xH)(f, w)))
                        }
                    }), (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        "data-testId": "slideshow__ld-json-image-gallery",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify((0,
                            d.iF)(f, w)))
                        }
                    })]
                }), (n = f.description,
                o = f.headline,
                a = f.hidden,
                r = f.teaseImage,
                s = f.primaryImage,
                c = f.url,
                p = f.datePublished,
                m = f.slides,
                y = null === (t = (s || r).url) || void 0 === t ? void 0 : t.primary,
                h = (0,
                x.VQ)(f.taxonomy, w),
                v = (j = m.flatMap(function(e) {
                    var t;
                    return (null === (t = e.authors) || void 0 === t ? void 0 : t.length) ? e.authors : []
                }).map(function(e) {
                    return null == e ? void 0 : e.name
                })).length > 1,
                (0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: o.seo || o.primary
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: n.primary
                    }), (0,
                    i.jsx)("link", {
                        rel: "canonical",
                        href: (0,
                        g.getCanonical)(c)
                    }), (0,
                    i.jsx)("meta", {
                        property: "cXenseParse:author",
                        content: j.join(" | "),
                        "data-separator": v ? "|" : void 0
                    }), (0,
                    i.jsx)("meta", {
                        name: "cXenseParse:publishtime",
                        content: p
                    }), a && (0,
                    i.jsx)("meta", {
                        name: "robots",
                        content: "NOINDEX, NOFOLLOW"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:url",
                        content: c.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: o.social || o.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: n.social || n.primary || n.seo
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: (0,
                        u.pW)(y, w, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: (0,
                        u.pW)(y, w, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:height",
                        content: "630"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:type",
                        content: "article"
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image",
                        content: (0,
                        u.pW)(y, w, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image:src",
                        content: (0,
                        u.pW)(y, w, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:title",
                        content: o.social || o.primary
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:description",
                        content: n.social || n.primary || n.seo
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0,
                    i.jsx)("meta", {
                        name: "thumbnail",
                        content: (0,
                        u.pW)(y, w)
                    }), h]
                }))]
            })
        }
        A.propTypes = {
            slideshow: p.Pe.isRequired,
            vertical: s().string.isRequired
        };
        let M = function(e, t) {
            var n = e.seo || e.primary;
            return "noticias" === t && (n = "".concat(n, " | Telemundo")),
            n
        };
        function W(e) {
            var t, n, o, a, r, s, c, p, m, h, j, v, f, _, b, S, T, O, N, L = e.video, I = e.vertical, C = (null == L ? void 0 : L.videoType) === "nonBroadcastLiveVideo" || (null == L ? void 0 : null === (v = L.source) || void 0 === v ? void 0 : v.name) === "Live Video", k = C ? null : L.duration;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify((0,
                            d.Y0)(L, I)))
                        }
                    }), (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: "".concat(JSON.stringify((0,
                            d.f$)(L, I)))
                        }
                    }), (0,
                    i.jsx)("script", {
                        type: "application/ld+json",
                        "data-testid": "canonical-live-video",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify((0,
                            d.jE)({
                                title: null === (f = L.headline) || void 0 === f ? void 0 : f.seo,
                                description: null === (_ = L.description) || void 0 === _ ? void 0 : _.seo,
                                duration: k,
                                thumbnailUrl: null === (S = L.primaryImage) || void 0 === S ? void 0 : null === (b = S.url) || void 0 === b ? void 0 : b.primary,
                                uploadDate: null === (T = L.date) || void 0 === T ? void 0 : T.publishedAt,
                                author: null === (O = L.publisher) || void 0 === O ? void 0 : O.name,
                                startDate: new Date(L.dateBroadcast),
                                url: null === (N = L.url) || void 0 === N ? void 0 : N.primary,
                                videoAssets: L.videoAssets,
                                closedCaptioning: L.closedCaptioning,
                                closedCaptioningContent: L.closedCaptioningContent
                            }, C))
                        }
                    })]
                }), (0,
                i.jsx)(y.A, {
                    content: L,
                    vertical: I
                }), (n = L.description,
                o = L.headline,
                a = L.hidden,
                r = L.nativeAd,
                s = L.searchable,
                c = L.primaryImage,
                p = L.url,
                m = L.datePublished,
                h = w()(c, "url.primary", {}),
                j = (0,
                x.VQ)(L.taxonomy, I, null === (t = L.mpxMetadata) || void 0 === t ? void 0 : t.guid),
                (0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: M(o, I)
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: n.seo || n.primary
                    }), (0,
                    i.jsx)("link", {
                        rel: "canonical",
                        href: (0,
                        g.getCanonical)(p)
                    }), (r || a || !1 === s) && (0,
                    i.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow",
                        "data-next-head": ""
                    }), (0,
                    i.jsx)("meta", {
                        name: "cXenseParse:publishtime",
                        content: m
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:url",
                        content: (0,
                        g.securify)(p.primary)
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: o.social || o.primary
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: n.primary || n.seo
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: (0,
                        u.pW)(h, I, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: (0,
                        u.pW)(h, I, "og")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image:height",
                        content: "630"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:type",
                        content: "article"
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image",
                        content: (0,
                        u.pW)(h, I, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:image:src",
                        content: (0,
                        u.pW)(h, I, "twitter")
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:title",
                        content: o.social || o.primary
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:description",
                        content: n.primary || n.seo
                    }), (0,
                    i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0,
                    i.jsx)("meta", {
                        name: "thumbnail",
                        content: (0,
                        u.pW)(h, I)
                    }), j]
                }))]
            })
        }
        W.propTypes = {
            video: p.Ki.isRequired,
            vertical: s().string.isRequired
        };
        var H = n(62256);
        let P = JSON.parse('{"news":{"app_id":"10150138890205613","admins":[],"pages":[155869377766434,114288853688,273864989376427,25987609066,103708747870,117112876419,493352494017633,143109582453645,153005644864469,598356233569407,62499551911,90692553761,108546889203630,154957517930371,114945745226947,164878620263509,219012311450917,280920811923248,358279854182174,809948162383434,864302923644949,868876563129583,1508175089456029]},"today":{"app_id":"122384521533","admins":[100001657893615],"pages":[12566691349,43060543381,877272149009111,363939277982,833762920078637,1228114460538309,184293318271345,157687092983]},"msnbc":{"app_id":"351594351545594","admins":[],"pages":[273864989376427,114114045339706,25987609066,153005644864469,598356233569407,62499551911,90692553761,114945745226947,280920811923248,809948162383434]},"select":{"app_id":"2226220344374044","admins":[],"pages":[]}}');
        function D(e) {
            var t, n, a = e.hidden, r = e.webFaviconLinks, s = void 0 === r ? null : r, c = (0,
            o.useContext)(H.O), p = P[c] || P.news, d = (0,
            S.getSiteConfigs)(c), m = d.iconUrl, u = d.ogSiteName, g = d.twitterContentCreator, y = d.twitterSite, x = function(e) {
                return "https://nodeassets.nbcnews.com/cdnassets/projects/ramen/favicon/".concat(m, "/all-other-sizes-PNG.ico/").concat(e)
            };
            return (0,
            i.jsxs)(l(), {
                children: [s && s(x) || (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)("link", {
                        rel: "shortcut icon",
                        type: "image/x-icon",
                        href: x("favicon.ico")
                    }, "favicon"), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: x("favicon-16x16.png")
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: x("favicon-32x32.png")
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "96x96",
                        href: x("favicon-96x96.png")
                    })]
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    href: x("apple-icon.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon-precomposed",
                    href: x("apple-icon-precomposed.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "57x57",
                    href: x("apple-icon-57x57.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "60x60",
                    href: x("apple-icon-60x60.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "72x72",
                    href: x("apple-icon-72x72.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "76x76",
                    href: x("apple-icon-76x76.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: x("apple-icon-114x114.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "120x120",
                    href: x("apple-icon-120x120.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "144x144",
                    href: x("apple-icon-144x144.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "152x152",
                    href: x("apple-icon-152x152.png")
                }), (0,
                i.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: x("apple-icon-180x180.png")
                }), (0,
                i.jsx)("link", {
                    rel: "manifest",
                    href: x("manifest.json")
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    sizes: "36x36",
                    href: x("android-icon-36x36.png")
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    sizes: "48x48",
                    href: x("android-icon-48x48.png")
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    sizes: "72x72",
                    href: x("android-icon-72x72.png")
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    sizes: "96x96",
                    href: x("android-icon-96x96.png")
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    sizes: "144x144",
                    href: x("android-icon-144x144.png")
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    sizes: "192x192",
                    href: x("android-icon-192x192.png")
                }), (0,
                i.jsx)("meta", {
                    name: "msapplication-config",
                    content: x("browserconfig.xml")
                }), (0,
                i.jsx)("meta", {
                    charSet: "utf-8"
                }), (0,
                i.jsx)("meta", {
                    httpEquiv: "x-ua-compatible",
                    content: "ie=edge"
                }), (0,
                i.jsx)("meta", {
                    name: "robots",
                    content: "max-image-preview:large"
                }), p.app_id && (0,
                i.jsx)("meta", {
                    property: "fb:app_id",
                    content: p.app_id
                }), (null === (t = p.admins) || void 0 === t ? void 0 : t.length) && p.admins.map(function(e) {
                    return (0,
                    i.jsx)("meta", {
                        property: "fb:admins",
                        content: e
                    }, e)
                }), (null === (n = p.pages) || void 0 === n ? void 0 : n.length) && p.pages.map(function(e) {
                    return (0,
                    i.jsx)("meta", {
                        property: "fb:pages",
                        content: e
                    }, e)
                }), (0,
                i.jsx)("meta", {
                    property: "og:site_name",
                    content: u
                }), (0,
                i.jsx)("meta", {
                    property: "og:locale",
                    content: "en_US"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:site",
                    content: y
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:creator",
                    content: g
                }), void 0 !== a && a && (0,
                i.jsx)("meta", {
                    name: "robots",
                    content: "NOINDEX, NOFOLLOW"
                }), (0,
                i.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, user-scalable=yes"
                })]
            })
        }
        function J() {
            var e, t, n, r, s = (0,
            o.useContext)(a.FN), c = (0,
            o.useContext)(a.Pl), p = (0,
            o.useContext)(a.O1), m = (0,
            S.getDisplayNameForVertical)(p), g = "".concat(m, " Author ").concat(s.name), y = "Read more about professional author ".concat(s.name, ".     View the writer's qualifications and read articles written by author ").concat(s.name, " at ").concat(m, "."), x = null == s ? void 0 : null === (t = s.primaryImage) || void 0 === t ? void 0 : null === (e = t.url) || void 0 === e ? void 0 : e.primary, h = null !== (r = null == s ? void 0 : null === (n = s.url) || void 0 === n ? void 0 : n.canonical) && void 0 !== r ? r : null, j = "https://www.".concat(c.domain), v = (0,
            d.v)(s, p, j);
            return (0,
            i.jsxs)(l(), {
                children: [(0,
                i.jsx)("title", {
                    children: g
                }), (0,
                i.jsx)("meta", {
                    name: "description",
                    content: y
                }), (0,
                i.jsx)("meta", {
                    name: "thumbnail",
                    content: (0,
                    u.pW)(x, p)
                }), (0,
                i.jsx)("meta", {
                    property: "og:url",
                    content: "".concat(j).concat(c.path)
                }), (0,
                i.jsx)("meta", {
                    property: "og:title",
                    content: g
                }), (0,
                i.jsx)("meta", {
                    property: "og:description",
                    content: y
                }), (0,
                i.jsx)("meta", {
                    property: "og:image",
                    content: (0,
                    u.pW)(x, p, "og")
                }), (0,
                i.jsx)("meta", {
                    property: "og:image:width",
                    content: "1200"
                }), (0,
                i.jsx)("meta", {
                    property: "og:image:height",
                    content: "630"
                }), (0,
                i.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:image",
                    content: (0,
                    u.pW)(x, p, "twitter")
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:title",
                    content: g
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:description",
                    content: y
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), (0,
                i.jsx)("link", {
                    rel: "canonical",
                    href: h
                }), (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: "".concat(JSON.stringify(v))
                    }
                }), (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: "".concat(JSON.stringify((0,
                        d.e4)(s, p)))
                    }
                })]
            })
        }
        function B() {
            var e = "Shop TODAY savings finds the best discounts from over 40,000 online stores so you never have to search for deals. Download the shopping extension for exclusive promo codes."
              , t = "Shop TODAY Savings: Deals and coupon shopping extension | TODAY"
              , n = "today"
              , o = (0,
            d.kr)({
                jsonLdPageType: "SectionFront",
                description: e,
                title: t,
                url: "https://www.today.com/savings",
                vertical: n
            }, n, "https://www.today.com/#publisher");
            return (0,
            i.jsxs)(l(), {
                children: [(0,
                i.jsx)("title", {
                    children: t
                }), (0,
                i.jsx)("link", {
                    rel: "canonical",
                    href: "https://www.today.com/savings"
                }), (0,
                i.jsx)("meta", {
                    name: "description",
                    content: e
                }), (0,
                i.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: "".concat(JSON.stringify(o))
                    }
                })]
            })
        }
        D.propTypes = {
            hidden: s().bool,
            webFaviconLinks: s().func
        }
    }
}]);
