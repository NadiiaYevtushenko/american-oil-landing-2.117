"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8552], {
    6226: (e, i, t) => {
        t.d(i, {
            A: () => n
        });
        let n = function(e) {
            return !e || Number.isNaN(Date.parse(e)) ? e : new Date(e).toISOString()
        }
    }
    ,
    33749: (e, i, t) => {
        t.d(i, {
            i: () => l
        });
        var n = t(67684)
          , r = t(62701)
          , o = t(55883)
          , a = {
            news: {
                name: "NBC News",
                url: "https://www.nbcnews.com"
            },
            select: {
                name: "NBC Select",
                url: "https://www.nbcnews.com/select"
            },
            msnbc: {
                name: "MSNBC",
                url: "https://www.msnbc.com"
            },
            today: {
                name: "TODAY",
                url: "https://www.today.com"
            }
        }
          , l = function(e) {
            var i, t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t)
                return {
                    "@context": "https://schema.org/",
                    "@type": "NewsMediaOrganization",
                    name: "Shop TODAY",
                    url: "https://www.today.com/shop"
                };
            var l = null !== (i = a[e]) && void 0 !== i ? i : {}
              , d = l.name
              , u = l.url;
            return d && u ? (0,
            r._)((0,
            n._)({}, (0,
            o.I)("NewsMediaOrganization")), {
                name: d,
                url: u
            }) : (0,
            r._)((0,
            n._)({}, (0,
            o.I)("Organization")), {
                name: "NBC Universal",
                "@id": "https://www.nbcuniversal.com/"
            })
        }
    }
    ,
    42458: (e, i, t) => {
        t.d(i, {
            C: () => o,
            q: () => r
        });
        var n = /<\/?(?:strong|em|a)[^>]*>/g
          , r = function(e) {
            return e.replace(n, "")
        }
          , o = function(e) {
            return null == e ? void 0 : e.map(r)
        }
    }
    ,
    48970: (e, i, t) => {
        t.d(i, {
            C: () => r
        });
        var n = t(20294);
        function r(e) {
            try {
                var i = new URL(e)
                  , t = i.origin
                  , r = i.pathname
                  , o = i.search
                  , a = RegExp("(?:/)([a-zA-Z]crd[0-9].*)$")
                  , l = r.match(a);
                if (!l)
                    return e;
                var d = (0,
                n._)(l, 2)
                  , u = d[0]
                  , s = d[1]
                  , p = r.replace(u, "");
                return new URL("".concat(t).concat(p).concat(o).concat("#".concat(s))).toString()
            } catch (i) {
                return console.error(i),
                e
            }
        }
    }
    ,
    55883: (e, i, t) => {
        t.d(i, {
            I: () => n
        });
        var n = function(e) {
            return {
                "@context": "https://schema.org/",
                "@type": e
            }
        }
    }
    ,
    61461: (e, i, t) => {
        t.d(i, {
            YY: () => c,
            Rm: () => s
        });
        var n = t(20294)
          , r = t(76550)
          , o = t(23548)
          , a = t(67064);
        function l(e) {
            return e.map(function(e, i) {
                return {
                    "@type": "ListItem",
                    position: i + 1,
                    name: e
                }
            })
        }
        var d = function(e) {
            var i, t, n, r, o, a, d, u, s, p, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, v = {
                "@type": "Review"
            };
            return (null == c ? void 0 : null === (n = c.authors) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : null === (i = t.person) || void 0 === i ? void 0 : i.name) && (v.author = {
                "@type": "Person",
                name: null == c ? void 0 : null === (a = c.authors) || void 0 === a ? void 0 : null === (o = a[0]) || void 0 === o ? void 0 : null === (r = o.person) || void 0 === r ? void 0 : r.name,
                url: (null == c ? void 0 : null === (p = c.authors) || void 0 === p ? void 0 : null === (s = p[0]) || void 0 === s ? void 0 : null === (u = s.person) || void 0 === u ? void 0 : null === (d = u.url) || void 0 === d ? void 0 : d.primary) || ""
            }),
            e.pros.items && e.pros.items.length > 0 && (v.positiveNotes = {
                "@type": "ItemList",
                itemListElement: l(e.pros.items)
            }),
            e.cons.items && e.cons.items.length > 0 && (v.negativeNotes = {
                "@type": "ItemList",
                itemListElement: l(e.cons.items)
            }),
            v
        }
          , u = function(e) {
            var i = [];
            return e.forEach(function(e) {
                var t;
                (null == e ? void 0 : null === (t = e.prices) || void 0 === t ? void 0 : t.length) && e.prices.forEach(function(e) {
                    var t;
                    i.push(null !== (t = (0,
                    r.z7)(e.price)) && void 0 !== t ? t : 0)
                })
            }),
            i
        }
          , s = function(e) {
            return "markup" === e.type && "h4" === e.element && "product specs" === (0,
            a.parse)(e.html || "").innerText.trim().toLowerCase()
        }
          , p = function(e, i) {
            for (var t = i.findIndex(function(i) {
                return "embeddedProduct" === i.type && i.product.id === e
            }), r = t + 1; r < i.length; r += 1) {
                var o, l = i[r];
                if ("embeddedProduct" === l.type)
                    break;
                if (s(l))
                    return o = i[r + 1].html,
                    (0,
                    a.parse)(o).innerText.split(" | ").filter(function(e) {
                        return "" !== e.trim()
                    }).map(function(e) {
                        var i = (0,
                        n._)(e.split(":").map(function(e) {
                            return e.trim()
                        }), 2);
                        return {
                            label: i[0],
                            description: i[1]
                        }
                    })
            }
            return []
        }
          , c = function(e) {
            var i, t, n, l, s, c, v, m, y, h = e.id, g = e.name, f = e.description, b = e.productUrl, w = e.offers, x = e.imageUrl, T = e.prosAndCons, A = e.article, O = void 0 === A ? {} : A, S = e.hyphenId, I = e.productSpecifications, _ = u(w).sort(function(e, i) {
                return e - i
            }), C = {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: g,
                brand: {
                    "@type": "Thing"
                }
            };
            x && "#" !== x && (C.image = [x]),
            (null == f ? void 0 : f.primary) === null && (C.description = g);
            var P = [];
            (w.forEach(function(e) {
                var i, t = (null == e ? void 0 : e.state) === "OUT_OF_STOCK" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock";
                P.push({
                    "@type": "Offer",
                    url: e.externalUrl,
                    availability: t,
                    offeredBy: {
                        name: null == e ? void 0 : null === (i = e.seller) || void 0 === i ? void 0 : i.name,
                        "@type": "Organization"
                    }
                })
            }),
            (null == w ? void 0 : w.length) > 1) ? (n = {
                "@type": "AggregateOffer",
                highPrice: _.pop(),
                lowPrice: _.shift(),
                offerCount: w.length,
                offers: P
            },
            w[0].prices && (n.priceCurrency = w[0].prices[0].priceCurrency)) : (null == w ? void 0 : w.length) === 1 ? (l = {
                "@type": "Offer",
                url: b,
                availability: (null === (s = w[0]) || void 0 === s ? void 0 : s.state) === o.OFFER_OUT_OF_STOCK ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"
            },
            w[0].prices && (l.priceCurrency = w[0].prices[0].priceCurrency,
            l.price = (0,
            r.z7)(w[0].prices[0].price),
            l.offeredBy = {
                name: null !== (m = null === (v = w[0]) || void 0 === v ? void 0 : null === (c = v.seller) || void 0 === c ? void 0 : c.name) && void 0 !== m ? m : "",
                "@type": "Organization"
            })) : l = {
                "@type": "Offer",
                url: b,
                priceCurrency: "",
                price: 0,
                offeredBy: {}
            },
            C.offers = null != n ? n : l,
            (null == T ? void 0 : null === (t = T.pros) || void 0 === t ? void 0 : null === (i = t.items) || void 0 === i ? void 0 : i.length) > 0 && (C.review = d(T, O));
            var E = null !== (y = O.body) && void 0 !== y ? y : []
              , N = (null == I ? void 0 : I.length) ? I.map(function(e) {
                return {
                    label: e.label,
                    description: (0,
                    a.parse)(e.description).innerText
                }
            }) : p(h, E);
            return (null == N ? void 0 : N.length) && (C.additionalProperty = N.map(function(e) {
                return {
                    "@type": "PropertyValue",
                    name: e.label,
                    value: e.description
                }
            })),
            S && (C.identifier = {
                "@type": "PropertyValue",
                name: "HyphenId",
                value: S
            }),
            JSON.stringify(C)
        }
    }
    ,
    67544: (e, i, t) => {
        t.d(i, {
            M: () => m,
            P: () => y
        });
        var n = t(67684)
          , r = t(56557)
          , o = t.n(r)
          , a = t(6226)
          , l = t(97183)
          , d = t(68225)
          , u = t(79401)
          , s = t(42458)
          , p = t(84368)
          , c = t(99918)
          , v = t(80506);
        function m(e) {
            return new RegExp("(?:".concat(e, "|nbcnews)/usageRule/commerce-live-event-(\\d+)-hrs"))
        }
        function y(e, i) {
            var t, r, m, y, h, g, f, b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, w = e.authors, x = e.dateCreated, T = e.datePublished, A = e.description, O = e.headline, S = e.items, I = e.url, _ = e.primaryMedia, C = e.taxonomy, P = C.allTerms, E = C.primarySection, N = e.content.text, D = e.body, B = e.eventDateTime, M = null !== (f = null == _ ? void 0 : null === (m = _.image) || void 0 === m ? void 0 : null === (r = m.url) || void 0 === r ? void 0 : r.primary) && void 0 !== f ? f : null, L = new RegExp("(?:".concat(i, "|nbcnews)/usageRule/commerce-live-event-(\\d+)-hrs")), V = (P || []).find(function(e) {
                return e.path.match(L)
            }), U = !!V, k = Number((null == V ? void 0 : null === (h = V.path) || void 0 === h ? void 0 : null === (y = h.match(L)) || void 0 === y ? void 0 : y[1]) || "22"), j = o()(x).toISOString(), R = (null == B ? void 0 : B.endsAt) || o()(j).add(k, "hour").toISOString(), z = (null == E ? void 0 : E.name) || "", Y = function(e) {
                var i, t, n = (null == e ? void 0 : null === (t = e.widget) || void 0 === t ? void 0 : null === (i = t.properties) || void 0 === i ? void 0 : i.embed) || {}, r = n.headline, o = n.items, a = (0,
                s.C)(o);
                return " ".concat(r, " ").concat(null == a ? void 0 : a.join(" "))
            }, F = function(e) {
                var i = (0,
                n._)({}, e)
                  , t = null == D ? void 0 : D.find(function(e) {
                    var i, t, n;
                    return (null == e ? void 0 : null === (n = e.widget) || void 0 === n ? void 0 : null === (t = n.properties) || void 0 === t ? void 0 : null === (i = t.embed) || void 0 === i ? void 0 : i.type) === "SUMMARY_BOX"
                });
                return N && Array.isArray(N) ? i.articleBody = N.join("\n\n") : A && (A.seo || A.primary) && (i.articleBody = A.seo || A.primary),
                D && t && (i.articleBody += Y(t)),
                i
            }, W = {
                "@context": {
                    "@vocab": "https://schema.org"
                },
                "@type": "LiveBlogPosting",
                author: {
                    "@type": "NewsMediaOrganization",
                    name: (0,
                    l.x)(i, z).name,
                    url: "select" === i ? "https://www.nbcnews.com" : (null === (g = u.z[i]) || void 0 === g ? void 0 : g.siteUrl) || "https://www.nbcnews.com"
                },
                url: I.primary,
                coverageStartTime: j,
                datePublished: j,
                dateModified: (0,
                a.A)(T),
                headline: O.seo || O.primary,
                alternativeHeadline: O.primary,
                description: A.seo || A.primary,
                liveBlogUpdate: (t = b["extend-commerce-live-event"],
                U ? [F({
                    "@context": "https://schema.org/",
                    "@type": "BlogPosting",
                    publisher: (0,
                    l.x)(i, z),
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": I.primary
                    },
                    headline: O.seo || O.primary,
                    url: I.primary,
                    datePublished: t ? (0,
                    a.A)(T) : j,
                    dateModified: t ? void 0 : (0,
                    a.A)(T),
                    author: (0,
                    c.h)({
                        authors: w,
                        vertical: i
                    })
                })] : Array.isArray(S) && S.map(function(t) {
                    return (0,
                    p.N)(t, i, e, z)
                })),
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": I.primary
                },
                coverageEndTime: R,
                publisher: (0,
                l.x)(i, z)
            };
            return (M && (W.image = (0,
            d.xb)(M, v.x)),
            U) ? W : F(W)
        }
    }
    ,
    68552: (e, i, t) => {
        t.d(i, {
            e4: () => o,
            Nh: () => d.N,
            ZF: () => l,
            kr: () => y,
            hg: () => T,
            fv: () => A,
            xH: () => O,
            iF: () => P,
            mm: () => N,
            P5: () => D.P,
            jE: () => F,
            wK: () => W,
            YY: () => E.YY,
            l3: () => et,
            v: () => X,
            BA: () => $,
            Du: () => ee,
            A: () => en,
            $Y: () => er,
            Y0: () => eo,
            f$: () => ea,
            jo: () => Y
        });
        var n = t(39324)
          , r = t.n(n);
        function o(e, i) {
            var t, n, o, a = e.url, l = e.primarySubvertical, d = void 0 === l ? "" : l, u = e.primarySection, s = void 0 === u ? "" : u, p = e.primaryTopic, c = void 0 === p ? "" : p, v = e.nativeAd, m = e.source, y = void 0 === m ? "" : m;
            return {
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
                    }
                },
                "@type": "Dataset",
                name: "additionalTaxonomy",
                description: "This is additional taxonomy that helps us with analytics",
                url: (void 0 === a ? {
                    primary: ""
                } : a).primary,
                pageType: "author",
                vertical: i,
                subVertical: (null == d ? void 0 : d.slug) || "",
                section: (null == s ? void 0 : s.slug) || "",
                subSection: (null == c ? void 0 : c.slug) || "",
                packageId: "",
                sponsor: (void 0 === v ? "" : v) ? null == y ? void 0 : y.name : "",
                appVersion: null !== (o = null === (n = r()()) || void 0 === n ? void 0 : null === (t = n.publicRuntimeConfig) || void 0 === t ? void 0 : t.appVersion) && void 0 !== o ? o : ""
            }
        }
        var a = t(99918)
          , l = function(e) {
            var i, t, n, r = null === (t = e.unibrow) || void 0 === t ? void 0 : null === (i = t.url) || void 0 === i ? void 0 : i.primary, o = null === (n = e.unibrow) || void 0 === n ? void 0 : n.text, a = e.url.primary, l = e.headline.seo;
            return r && o && r !== a ? {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [{
                    "@type": "ListItem",
                    position: 1,
                    name: o,
                    item: r
                }, {
                    "@type": "ListItem",
                    position: 2,
                    name: l,
                    item: a
                }]
            } : null
        }
          , d = t(84368)
          , u = t(67684)
          , s = t(62701)
          , p = t(89903)
          , c = t(96491)
          , v = t(55883)
          , m = t(97183);
        function y(e, i) {
            var t, n, r, o, a, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://www.nbcnews.com/#publisher", d = arguments.length > 3 ? arguments[3] : void 0, y = (0,
            p.B0)(c.ENABLE_NEWS_MEDIA_ORG_SCHEMA_TYPE, i), h = (0,
            s._)((0,
            u._)({}, (0,
            v.I)("CollectionPage")), {
                inLanguage: "en-US",
                copyrightHolder: (0,
                u._)({
                    "@id": l
                }, y && {
                    "@type": "NewsMediaOrganization"
                }),
                copyrightYear: new Date().getFullYear(),
                publisher: (0,
                m.x)(i, d),
                sourceOrganization: (0,
                u._)({
                    "@id": l
                }, y && {
                    "@type": "NewsMediaOrganization"
                }),
                description: void 0,
                name: void 0,
                url: void 0
            });
            return (null == e ? void 0 : e.type) === "person" ? h = (0,
            s._)((0,
            u._)({}, h), {
                mainEntity: (t = null == e ? void 0 : null === (r = e.content) || void 0 === r ? void 0 : r.items,
                n = (0,
                s._)((0,
                u._)({}, (0,
                v.I)("ItemList")), {
                    itemListElement: [],
                    numberOfItems: t.length
                }),
                t.forEach(function(e, i) {
                    var t;
                    n.itemListElement.push((0,
                    s._)((0,
                    u._)({}, (0,
                    v.I)("ListItem")), {
                        url: null == e ? void 0 : null === (t = e.url) || void 0 === t ? void 0 : t.primary,
                        position: i + 1
                    }))
                }),
                n),
                mainEntityOfPage: null == e ? void 0 : null === (o = e.url) || void 0 === o ? void 0 : o.primary,
                name: null == e ? void 0 : e.name,
                url: null == e ? void 0 : null === (a = e.url) || void 0 === a ? void 0 : a.primary
            }) : (null == e ? void 0 : e.jsonLdPageType) === "SectionFront" && (h = (0,
            s._)((0,
            u._)({}, h), {
                description: null == e ? void 0 : e.description,
                name: null == e ? void 0 : e.title,
                publisher: (0,
                m.x)(i, d),
                url: null == e ? void 0 : e.url
            })),
            h
        }
        var h = t(85993)
          , g = t(21737)
          , f = t(61623)
          , b = function(e, i) {
            return (0,
            h._)(new Set(e.filter(function(e) {
                return e && "string" == typeof e.path && e.path.match(i)
            }).map(function(e) {
                return e.name
            }))).join(",")
        }
          , w = function(e) {
            return "embeddedVideo" === e.type && e.video
        }
          , x = function(e, i) {
            if (!Array.isArray(i))
                return [];
            var t = i.filter(w);
            return e && w(e) ? [e].concat((0,
            h._)(t)) : t
        };
        function T(e, i) {
            var t, n, o, a, l = e.body, d = e.ecommerceEnabled, u = e.nativeAd, s = e.source, p = e.primaryMedia, c = e.taxonomy, v = e.url, m = c.primarySubvertical, y = c.primarySection, h = c.primaryTopic, w = c.primaryLabel, T = c.additionalTerms, A = (0,
            f.Bg)(e), O = (0,
            g.DT)(e);
            return {
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
                    label: {
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
                    ecommerceEnabled: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    videoPlayerCount: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    appVersion: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    tags: {
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
                url: v.primary,
                pageType: "Article",
                vertical: i,
                subVertical: (null == m ? void 0 : m.slug) || "",
                section: (null == y ? void 0 : y.slug) || "",
                subSection: (null == h ? void 0 : h.slug) || "",
                label: (null == w ? void 0 : w.slug) || "",
                packageId: "",
                sponsor: u || A ? null == s ? void 0 : null === (t = s.organization) || void 0 === t ? void 0 : t.name : "",
                ecommerceEnabled: d,
                videoPlayerCount: x(p, void 0 === l ? [] : l).length,
                appVersion: null !== (a = null === (o = r()()) || void 0 === o ? void 0 : null === (n = o.publicRuntimeConfig) || void 0 === n ? void 0 : n.appVersion) && void 0 !== a ? a : "",
                tags: b(T || [], /\w\/keyword\/\w?/),
                gatedContentEnabled: !O
            }
        }
        function A(e) {
            var i, t, n, r, o, a = ((null == (o = (void 0 === (r = e.body) ? [] : r).find(function(e) {
                var i, t, n;
                return "embeddedWidget" === e.type && (null === (n = e.widget) || void 0 === n ? void 0 : null === (t = n.properties) || void 0 === t ? void 0 : null === (i = t.embed) || void 0 === i ? void 0 : i.faqs)
            })) ? void 0 : null === (n = o.widget) || void 0 === n ? void 0 : null === (t = n.properties) || void 0 === t ? void 0 : null === (i = t.embed) || void 0 === i ? void 0 : i.faqs) || []).map(function(e) {
                return {
                    "@type": "Question",
                    name: e.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: e.answer.html
                    }
                }
            });
            return a.length ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: a
            } : {}
        }
        var O = function(e, i) {
            var t, n, o, a = e.url, l = e.primarySubvertical, d = void 0 === l ? "" : l, u = e.primarySection, s = void 0 === u ? "" : u, p = e.primaryTopic, c = void 0 === p ? "" : p, v = e.nativeAd, m = e.source, y = void 0 === m ? "" : m;
            return {
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
                    }
                },
                "@type": "Dataset",
                name: "additionalTaxonomy",
                description: "This is additional taxonomy that helps us with analytics",
                url: (void 0 === a ? {
                    primary: ""
                } : a).primary,
                pageType: "Gallery",
                vertical: i,
                subVertical: (null == d ? void 0 : d.slug) || "",
                section: (null == s ? void 0 : s.slug) || "",
                subSection: (null == c ? void 0 : c.slug) || "",
                packageId: "",
                sponsor: (void 0 === v ? "" : v) ? null == y ? void 0 : y.name : "",
                appVersion: null !== (o = null === (n = r()()) || void 0 === n ? void 0 : null === (t = n.publicRuntimeConfig) || void 0 === t ? void 0 : t.appVersion) && void 0 !== o ? o : ""
            }
        }
          , S = t(6226)
          , I = t(68225)
          , _ = t(22844)
          , C = t(80506)
          , P = function(e, i) {
            var t = e.headline
              , n = void 0 === t ? {
                primary: "",
                seo: ""
            } : t
              , r = e.url
              , o = void 0 === r ? {
                primary: ""
            } : r
              , a = e.imageUrl
              , l = e.dateCreated
              , d = void 0 === l ? "" : l
              , u = e.dateModified
              , s = e.primarySection
              , p = e.id
              , c = void 0 === p ? "" : p
              , v = e.description
              , y = e.slides.map(function(e) {
                if (e) {
                    var i, t = e.image || {};
                    return {
                        "@type": "ImageObject",
                        url: (0,
                        I.xb)(t.url.primary, C.x),
                        name: (null === (i = t.headline) || void 0 === i ? void 0 : i.primary) || "",
                        caption: t.caption
                    }
                }
                return ""
            });
            return {
                "@context": {
                    "@vocab": "http://schema.org",
                    articleId: {
                        "@id": "Text",
                        "@type": "@id"
                    }
                },
                "@type": "imageGallery",
                headline: n.primary,
                url: o.primary,
                thumbnailUrl: (0,
                _.pW)(void 0 === a ? "" : a, i),
                creator: (0,
                m.X)(i),
                alternativeHeadline: n.seo,
                dateCreated: (0,
                S.A)(d),
                datePublished: (0,
                S.A)(d),
                dateModified: (0,
                S.A)(void 0 === u ? "" : u),
                articleSection: (void 0 === s ? {
                    displayName: ""
                } : s).displayName,
                articleId: c,
                identifier: {
                    "@type": "PropertyValue",
                    propertyID: "uid",
                    value: c
                },
                image: y,
                publisher: (0,
                m.x)(i),
                description: (void 0 === v ? {
                    primary: ""
                } : v).primary,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": o.primary
                }
            }
        }
          , E = t(61461)
          , N = function(e) {
            var i = e.items;
            return (null == i ? void 0 : i.length) ? {
                "@context": "https://schema.org/",
                "@type": "ItemList",
                numberOfItems: i.length,
                itemListElement: (0,
                h._)(i)
            } : null
        }
          , D = t(67544)
          , B = t(56557)
          , M = t.n(B)
          , L = t(89933)
          , V = t(86090)
          , U = t.n(V);
        function k(e) {
            if (!Array.isArray(e) || !e.length)
                return null;
            var i = e.filter(function(e) {
                return e
            });
            if (!i.length)
                return null;
            try {
                var t, n = (t = Math).max.apply(t, (0,
                h._)(i.map(function(e) {
                    return e.bitrate
                }))), r = i.find(function(e) {
                    return e.bitrate === n
                }).publicUrl, o = new URL(r), a = o.origin, l = o.pathname, d = o.searchParams;
                return d.append("format", "redirect"),
                "".concat(a).concat(l, "?").concat(d.toString())
            } catch (e) {
                return null
            }
        }
        var j = function(e, i) {
            return e && i ? {
                "@type": "MediaObject",
                encodingFormat: i,
                url: e,
                inLanguage: "en"
            } : null
        };
        function R(e, i) {
            var t = e.author
              , n = e.closedCaptioning
              , r = e.closedCaptioningContent
              , o = e.contentUrl
              , a = e.description
              , l = e.duration
              , d = e.endDate
              , p = e.genre
              , c = e.isLiveBroadcast
              , v = e.name
              , m = e.startDate
              , y = e.publisher
              , h = e.thumbnailUrl
              , g = e.url
              , f = e.uploadDate
              , b = e.showName
              , w = null == i ? void 0 : i.includePublicationData
              , x = null == i ? void 0 : i.includeMainEntityOfPage
              , T = (null == r ? void 0 : r.text) || null
              , A = (null == n ? void 0 : n.webvtt) || null
              , O = [j((null == n ? void 0 : n.srt) || null, "srt"), j(A, "vtt")].filter(function(e) {
                return null !== e
            })
              , S = w && {
                publication: [(0,
                s._)((0,
                u._)({
                    "@type": "BroadcastEvent"
                }, b && {
                    name: b
                }), {
                    isLiveBroadcast: c,
                    startDate: m,
                    endDate: d
                })]
            }
              , I = x && {
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": g
                }
            };
            return (0,
            u._)({
                "@context": "http://schema.org",
                "@type": "VideoObject",
                "@id": g,
                name: v,
                description: a,
                author: t,
                thumbnailUrl: h,
                contentUrl: o,
                duration: l,
                publisher: y,
                uploadDate: f,
                genre: p,
                url: g
            }, S, I, (null == T ? void 0 : T.length) > 0 && {
                transcript: T.join(" ")
            }, (null == O ? void 0 : O.length) > 0 && {
                caption: O
            })
        }
        M().extend(U());
        var z = function(e, i) {
            if (!e)
                return !1;
            var t = M()(i)
              , n = M().duration(e);
            return t.isValid() && !Number.isNaN(n.asMilliseconds()) && t.add(n.asMilliseconds(), "ms").toISOString()
        };
        function Y(e) {
            var i = e.video
              , t = e.options
              , n = e.vertical
              , r = e.section
              , o = i.headline
              , a = void 0 === o ? {} : o
              , l = a.primary
              , d = a.seo
              , u = a.social
              , s = a.tease
              , p = i.url
              , c = (void 0 === p ? {} : p).primary
              , v = i.description
              , y = void 0 === v ? {} : v
              , h = y.primary
              , g = y.seo
              , f = y.social
              , b = y.tease
              , w = i.duration
              , x = i.date
              , T = i.primaryImage
              , A = (void 0 === T ? {} : T).url
              , O = (void 0 === A ? {} : A).primary
              , S = i.videoAssets
              , _ = i.liveVideoStatus
              , P = i.dateBroadcast
              , E = i.closedCaptioning
              , N = k(S)
              , D = (0,
            I.xb)(O, C.x)
              , B = "string" == typeof _ && "NONE" !== _
              , L = B ? z(w, P) || M()().add(1, "day").startOf("hour").toISOString() : void 0
              , V = null == t ? void 0 : t.includePublicationData;
            return R({
                "@context": "http://schema.org",
                "@type": "VideoObject",
                "@id": c,
                name: d || u || l || s,
                description: g || f || h || b,
                thumbnailUrl: [D],
                contentUrl: N,
                duration: w,
                publisher: (0,
                m.x)(n, r),
                uploadDate: null == x ? void 0 : x.publishedAt,
                url: c,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": c
                },
                startDate: P,
                endDate: L,
                isLiveBroadcast: "LIVE" === _,
                closedCaptioning: E
            }, {
                includePublicationData: B,
                includeMainEntityOfPage: V
            })
        }
        function F(e) {
            var i = e.title
              , t = e.description
              , n = e.duration
              , r = e.thumbnailUrl
              , o = e.uploadDate
              , a = e.startDate
              , l = e.includeMainEntityOfPage
              , d = e.url
              , u = e.videoAssets
              , s = e.closedCaptioning
              , p = e.closedCaptioningContent
              , c = e.showName
              , v = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return R({
                name: i,
                description: t,
                duration: n,
                thumbnailUrl: r,
                contentUrl: (0,
                L.getContentUrl)(u),
                uploadDate: o,
                startDate: a,
                endDate: M()().add(1, "day").startOf("hour").toISOString(),
                isLiveBroadcast: v,
                url: d,
                closedCaptioning: s,
                closedCaptioningContent: p,
                showName: c
            }, {
                includePublicationData: v,
                includeMainEntityOfPage: l
            })
        }
        function W(e, i) {
            var t, n, r = e.authors, o = e.experts, l = e.date, d = l.createdAt, p = l.publishedAt, v = e.description, y = e.headline, f = e.id, w = e.primaryImage, x = e.socialImage, T = e.taxonomy, A = T.allTerms, O = T.primarySection, S = T.primaryVertical, P = void 0 === S ? {} : S, E = e.teaseImage, N = e.topics, D = e.url, B = e.content, M = x || E || w || {}, L = null === (t = M.url) || void 0 === t ? void 0 : t.primary, V = b([P].concat((0,
            h._)(A || [])), /\w\/(vertical|category)\/\w?/) || (null == P ? void 0 : P.name), U = (0,
            g.DT)(e), k = B && Array.isArray(B.text) ? B.text.join(" ") : "", j = null == r ? void 0 : r.filter(function(e) {
                return "author" === e.authorType
            }), R = null == r ? void 0 : r.filter(function(e) {
                return "contributor" === e.authorType
            }), z = (0,
            h._)(Array.isArray(R) ? R : []).concat((0,
            h._)(Array.isArray(o) ? o : [])), Y = c.NEWSARTICLE_LDJSON_DATES[i] ? {
                dateCreated: d,
                datePublished: d,
                dateModified: p
            } : {
                dateModified: p,
                datePublished: d
            }, F = (0,
            s._)((0,
            u._)({
                "@context": {
                    "@vocab": "http://schema.org",
                    articleId: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    topics: {
                        "@id": "Text",
                        "@type": "@id"
                    }
                },
                "@type": "NewsArticle",
                headline: y.seo || y.primary,
                url: D.primary,
                thumbnailUrl: (0,
                _.pW)(L, i),
                creator: null == r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.name,
                alternativeHeadline: y.primary,
                articleBody: k
            }, Y), {
                articleSection: (null == O ? void 0 : O.slug) || "news",
                articleId: f,
                identifier: {
                    "@type": "PropertyValue",
                    propertyID: "uid",
                    value: f
                },
                topics: N && N.map(function(e) {
                    return e.slug
                }).join(",") || "",
                image: M.url ? {
                    "@type": "ImageObject",
                    url: (0,
                    I.xb)(M.url.primary, C.x),
                    caption: M.caption
                } : "",
                author: (0,
                a.h)({
                    authors: j,
                    vertical: i
                }),
                publisher: (0,
                m.x)(i, null == O ? void 0 : O.slug),
                description: v.seo,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": D.primary
                },
                keywords: V
            });
            if (z && z.length > 0 && (F.contributor = (0,
            a.h)({
                authors: z.map(function(e) {
                    return e.person
                }),
                vertical: i
            })),
            U || (F.isAccessibleForFree = "False",
            F.hasPart = {
                "@type": "WebPageElement",
                isAccessibleForFree: "False",
                cssSelector: ".article-body__content",
                value: k
            }),
            ["tdna161374", "ncna1280612", "rcna150631", "rcna226078"].includes(f)) {
                var W = F.author[0].name.toLowerCase().includes(" staff") ? F.author[0].name : F.author[0].name += " Staff";
                F["@type"] = "AboutPage",
                F.author[0]["@type"] = "Person",
                F.author[0].name = W,
                F.author[0].url = D.primary,
                delete F.articleBody,
                delete F.articleSection
            }
            return F
        }
        var H = t(33749)
          , J = t(68590);
        function X(e, i) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://www.nbcnews.com/#publisher"
              , n = (0,
            J.M)({
                person: e,
                useAuthorShortBio: !1,
                vertical: i
            });
            return (0,
            s._)((0,
            u._)({}, (0,
            v.I)("ProfilePage")), {
                dateCreated: (0,
                S.A)(e.dateCreated),
                dateModified: (0,
                S.A)(e.dateModified),
                mainEntity: n,
                hasPart: (0,
                u._)({}, y(e, i, t))
            })
        }
        var q = t(81442)
          , G = t.n(q)
          , K = function(e) {
            var i = e.chefNotes && Array.isArray(e.chefNotes) ? e.chefNotes.map(function(e) {
                return e.html
            }).join(" ") : ""
              , t = e.ingredients && Array.isArray(e.ingredients) ? e.ingredients.map(function(e) {
                return e.ingredients.map(function(e) {
                    return e.description
                }).join(" ")
            }).join(" ") : ""
              , n = e.instructions && Array.isArray(e.instructions) ? e.instructions.map(function(e) {
                return e.html || ""
            }).join(" ") : "";
            return "".concat(i, " ").concat(t, " ").concat(n)
        }
          , $ = function(e, i) {
            var t = e.description
              , n = t.primary
              , r = t.seo
              , o = t.social
              , l = t.tease
              , d = e.headline
              , u = d.primary
              , s = d.seo
              , p = d.social
              , c = d.tease
              , v = e.authors
              , y = e.associatedVideo
              , h = e.dateModified
              , f = e.datePublished
              , w = e.cookTime
              , x = e.prepTime
              , T = e.aggregateRating
              , A = e.yield
              , O = e.id
              , I = e.ingredients
              , C = e.instructions
              , P = e.nutrition
              , E = e.totalTime
              , N = e.teaseImage
              , D = e.primaryImage
              , B = e.taxonomy
              , M = e.url
              , L = null != T ? T : {}
              , V = L.ratingCount
              , U = L.ratingValue
              , j = N || D || {}
              , R = null !== (q = null == j ? void 0 : null === (X = j.url) || void 0 === X ? void 0 : X.primary) && void 0 !== q ? q : ""
              , z = B || {}
              , Y = z.recipeCategories
              , F = z.cuisines
              , W = z.courseTypes
              , H = (0,
            g.DT)(e)
              , J = {
                "@context": {
                    "@vocab": "https://schema.org/",
                    articleId: {
                        "@id": "Text",
                        "@type": "@id"
                    }
                },
                "@type": "Recipe",
                name: s || p || u || c,
                author: (0,
                a.h)({
                    authors: v,
                    vertical: i
                }),
                dateCreated: (0,
                S.A)(f),
                datePublished: (0,
                S.A)(f),
                dateModified: (0,
                S.A)(h),
                description: r || o || n || l,
                image: j.url ? {
                    "@type": "ImageObject",
                    url: j.url.primary,
                    caption: j.caption
                } : "",
                prepTime: x,
                cookTime: w,
                totalTime: E,
                recipeYield: A,
                nutrition: {
                    "@type": "NutritionInformation",
                    calories: P ? P.calories : ""
                },
                recipeIngredient: I && Array.isArray(I) ? G()(I.map(function(e) {
                    return (e.ingredients || []).map(function(e) {
                        return e.description
                    })
                })) : [],
                recipeInstructions: C && Array.isArray(C) ? C.map(function(e) {
                    if ("embeddedImage" === e.type) {
                        var t, n, r, o, a = e.image, l = void 0 === a ? {} : a;
                        return {
                            "@type": "HowToStep",
                            text: null !== (r = null == l ? void 0 : null === (t = l.headline) || void 0 === t ? void 0 : t.seo) && void 0 !== r ? r : "",
                            image: null !== (o = null == l ? void 0 : null === (n = l.url) || void 0 === n ? void 0 : n.primary) && void 0 !== o ? o : ""
                        }
                    }
                    if ("embeddedVideo" === e.type) {
                        var d, u, s, p, c, v, m, y, h, g, f, b = e.video, w = void 0 === b ? {} : b, x = null !== (m = null == w ? void 0 : null === (u = w.primaryImage) || void 0 === u ? void 0 : null === (d = u.url) || void 0 === d ? void 0 : d.primary) && void 0 !== m ? m : "";
                        return {
                            "@type": "HowToStep",
                            text: null !== (y = null == w ? void 0 : null === (s = w.headline) || void 0 === s ? void 0 : s.seo) && void 0 !== y ? y : "",
                            video: {
                                "@type": "VideoObject",
                                name: null !== (h = null == w ? void 0 : null === (p = w.headline) || void 0 === p ? void 0 : p.seo) && void 0 !== h ? h : "",
                                description: null !== (g = null == w ? void 0 : null === (c = w.description) || void 0 === c ? void 0 : c.seo) && void 0 !== g ? g : "",
                                thumbnailUrl: (0,
                                _.pW)(x, i),
                                uploadDate: (0,
                                S.A)(w.datePublished),
                                duration: w.duration,
                                url: null !== (f = null == w ? void 0 : null === (v = w.url) || void 0 === v ? void 0 : v.primary) && void 0 !== f ? f : ""
                            }
                        }
                    }
                    var T = e.html.trim()
                      , A = T.replace(/^\s?\d+[.\s]/, "");
                    return T ? {
                        "@type": "HowToStep",
                        text: A
                    } : null
                }) : [],
                recipeCategory: b(W || [], /\w\/courseType\/\w?/),
                recipeCuisine: b(F || [], /\w\/cuisine\/\w?/),
                keywords: b(Y || [], /\w\/recipeCategory\/\w?/),
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: U || 0,
                    ratingCount: V || 0
                },
                thumbnailUrl: (0,
                _.pW)(R, i),
                articleId: O,
                creator: (0,
                m.X)(i),
                headline: s || p || u || c,
                alternativeHeadline: u,
                identifier: {
                    "@type": "PropertyValue",
                    propertyID: "uid",
                    value: O
                },
                publisher: (0,
                m.x)(i),
                url: M.primary,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": M.primary
                }
            };
            if (y) {
                var X, q, $, Q, Z = y.headline, ee = void 0 === Z ? {} : Z, ei = ee.primary, et = ee.seo, en = ee.social, er = ee.tease, eo = y.url, ea = y.description, el = void 0 === ea ? {} : ea, ed = el.primary, eu = el.seo, es = el.social, ep = el.tease, ec = y.duration, ev = y.date, em = y.primaryImage, ey = k(y.videoAssets), eh = null !== (Q = null == em ? void 0 : null === ($ = em.url) || void 0 === $ ? void 0 : $.primary) && void 0 !== Q ? Q : "";
                J.video = {
                    "@type": "VideoObject",
                    name: et || en || ei || er,
                    url: (void 0 === eo ? {} : eo).primary,
                    description: eu || es || ed || ep,
                    thumbnailUrl: (0,
                    _.pW)(eh, i),
                    contentUrl: ey,
                    duration: ec,
                    uploadDate: null == ev ? void 0 : ev.publishedAt
                }
            }
            return H || (J.isAccessibleForFree = "False",
            J.hasPart = {
                "@type": "WebPageElement",
                isAccessibleForFree: "False",
                cssSelector: ".recipe-body__content",
                value: K(e)
            }),
            J
        }
          , Q = function(e) {
            var i, t;
            return "embeddedRecipe" === e.type && (null === (t = e.recipe) || void 0 === t ? void 0 : null === (i = t.url) || void 0 === i ? void 0 : i.primary)
        }
          , Z = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).body;
            return e && Array.isArray(e) ? e.filter(Q) : []
        }
          , ee = function(e, i) {
            if (!(0,
            p.B0)(c.LD_JSON_RECIPE_CAROUSELS, i))
                return null;
            var t = Z(e);
            return t.length < 2 ? null : {
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: t.map(function(e, i) {
                    return {
                        "@type": "ListItem",
                        position: i + 1,
                        url: e.recipe.url.primary
                    }
                })
            }
        }
          , ei = t(88757)
          , et = function(e) {
            var i, t, n, r, o;
            return N({
                items: null !== (o = null === (r = (0,
                ei.Ys)(e).map(function(e) {
                    return e.items
                })) || void 0 === r ? void 0 : null === (n = r.filter(Boolean)) || void 0 === n ? void 0 : null === (t = n.reduce(function(e, i) {
                    var t = i.reduce(function(e, i) {
                        var t = (i || {}).related;
                        return (0,
                        h._)(e).concat((0,
                        h._)(t || []))
                    }, []);
                    return (0,
                    h._)(e).concat((0,
                    h._)(i), (0,
                    h._)(t))
                }, [])) || void 0 === t ? void 0 : null === (i = t.filter(function(e) {
                    var i;
                    return e && "product" === e.type && (null === (i = e.computedValues) || void 0 === i ? void 0 : i.url)
                })) || void 0 === i ? void 0 : i.map(function(e) {
                    var i, t, n, r, o = e.item, a = o.description, l = o.name, d = o.offers, u = o.teaseImage, s = null !== (n = null === (i = d[0]) || void 0 === i ? void 0 : i.externalUrl) && void 0 !== n ? n : "#", p = null !== (r = null == u ? void 0 : null === (t = u.url) || void 0 === t ? void 0 : t.primary) && void 0 !== r ? r : "#";
                    return JSON.parse((0,
                    E.YY)({
                        name: l,
                        description: a,
                        offers: d,
                        productUrl: s,
                        imageUrl: p
                    }))
                })) && void 0 !== o ? o : []
            })
        }
          , en = function(e, i) {
            if (!(0,
            p.B0)(c.LD_JSON_RECIPE_CAROUSELS, i))
                return null;
            var t = (0,
            ei.Ys)(e).map(function(e) {
                return e.items
            }).filter(Boolean).reduce(function(e, i) {
                var t = i.reduce(function(e, i) {
                    var t = (i || {}).related;
                    return (0,
                    h._)(e).concat((0,
                    h._)(t || []))
                }, []);
                return (0,
                h._)(e).concat((0,
                h._)(i), (0,
                h._)(t))
            }, []).filter(function(e) {
                var i;
                return e && "recipe" === e.type && (null === (i = e.computedValues) || void 0 === i ? void 0 : i.url)
            }).map(function(e) {
                var i, t;
                return null !== (t = null == e ? void 0 : null === (i = e.computedValues) || void 0 === i ? void 0 : i.url) && void 0 !== t ? t : null
            }).filter(Boolean);
            return t.length < 2 ? null : {
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: t.map(function(e, i) {
                    return {
                        "@type": "ListItem",
                        position: i + 1,
                        url: e
                    }
                })
            }
        }
          , er = function(e, i) {
            var t, n, o, a = e.taxonomy, l = e.url, d = e.nativeAd, u = e.source, s = e.ecommerceEnabled, p = a || {}, c = p.primarySubvertical, v = p.primarySection, m = p.primaryTopic, y = p.primaryLabel, h = p.additionalTerms, f = (0,
            g.DT)(e);
            return {
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
                    label: {
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
                    tags: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    ecommerceEnabled: {
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
                url: (void 0 === l ? {
                    primary: ""
                } : l).primary,
                pageType: "recipe",
                vertical: i,
                subVertical: (null == c ? void 0 : c.slug) || "",
                section: (null == v ? void 0 : v.slug) || "",
                subSection: (null == m ? void 0 : m.slug) || "",
                label: (null == y ? void 0 : y.slug) || "",
                packageId: "",
                sponsor: d ? null == u ? void 0 : u.name : "",
                appVersion: null !== (o = null === (n = r()()) || void 0 === n ? void 0 : null === (t = n.publicRuntimeConfig) || void 0 === t ? void 0 : t.appVersion) && void 0 !== o ? o : "",
                tags: b(h || [], /\w\/keyword\/\w?/),
                ecommerceEnabled: s,
                gatedContentEnabled: !f
            }
        }
          , eo = function(e, i) {
            var t, n, o, a, l, d = e.date, u = e.duration, s = e.primaryImage, p = void 0 === s ? {
                url: {}
            } : s, c = e.nativeAd, v = e.primarySection, m = void 0 === v ? "" : v, y = e.primarySubvertical, h = void 0 === y ? "" : y, g = e.primaryTopic, f = void 0 === g ? "" : g, b = e.source, w = void 0 === b ? "" : b, x = e.tags, T = e.url, A = e.videoAssets, O = null !== (a = null == p ? void 0 : null === (t = p.url) || void 0 === t ? void 0 : t.primary) && void 0 !== a ? a : {}, S = (0,
            L.getContentUrl)(A);
            return {
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
                    thumbnailUrl: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    uploadDate: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    contentUrl: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    duration: {
                        "@id": "Text",
                        "@type": "@id"
                    },
                    tags: {
                        "@id": "Text",
                        "@type": "@id"
                    }
                },
                "@type": "Dataset",
                name: "additionalTaxonomy",
                description: "This is additional taxonomy that helps us with analytics",
                url: (void 0 === T ? {
                    primary: ""
                } : T).primary,
                pageType: "Video",
                vertical: i,
                subVertical: (null == h ? void 0 : h.slug) || "",
                section: (null == m ? void 0 : m.slug) || "",
                subSection: (null == f ? void 0 : f.slug) || "",
                packageId: "",
                sponsor: void 0 !== c && c ? null == w ? void 0 : w.name : "",
                appVersion: null !== (l = null === (o = r()()) || void 0 === o ? void 0 : null === (n = o.publicRuntimeConfig) || void 0 === n ? void 0 : n.appVersion) && void 0 !== l ? l : "",
                thumbnailUrl: (0,
                _.pW)(O, i),
                uploadDate: null == d ? void 0 : d.publishedAt,
                contentUrl: S,
                duration: void 0 === u ? "" : u,
                tags: void 0 === x ? "" : x
            }
        }
          , ea = function(e, i) {
            var t, n, r = e.headline, o = void 0 === r ? {
                seo: ""
            } : r, a = e.description, l = e.url, d = e.date, s = void 0 === d ? {
                createdAt: "",
                publishedAt: "",
                modifiedAt: ""
            } : d, p = e.primarySection, c = void 0 === p ? "" : p, v = e.mpxId, y = void 0 === v ? "" : v, h = e.primaryImage, g = void 0 === h ? {
                url: {}
            } : h, f = e.keywords, b = null !== (n = null == g ? void 0 : null === (t = g.url) || void 0 === t ? void 0 : t.primary) && void 0 !== n ? n : {};
            return {
                "@context": {
                    "@vocab": "http://schema.org",
                    articleId: {
                        "@id": "Text",
                        "@type": "@id"
                    }
                },
                "@type": "NewsArticle",
                headline: o.seo,
                description: (void 0 === a ? {
                    seo: "",
                    primary: ""
                } : a).seo,
                url: (void 0 === l ? {
                    primary: ""
                } : l).primary,
                thumbnailUrl: (0,
                _.pW)(b, i),
                creator: (0,
                m.X)(i),
                alternativeHeadline: o.seo,
                dateCreated: s.createdAt,
                datePublished: s.publishedAt,
                dateModified: s.modifiedAt,
                articleSection: (null == c ? void 0 : c.slug) || "",
                articleId: y,
                identifier: {
                    "@type": "PropertyValue",
                    propertyID: "uid",
                    value: y
                },
                image: g ? {
                    "@type": "ImageObject",
                    url: (0,
                    I.xb)(g.url.primary, C.x)
                } : "",
                author: [(0,
                u._)({}, (0,
                H.i)(i))],
                publisher: (0,
                m.x)(i),
                keywords: void 0 === f ? "" : f
            }
        }
    }
    ,
    68590: (e, i, t) => {
        t.d(i, {
            M: () => v
        });
        var n = t(67684)
          , r = t(62701)
          , o = t(68225)
          , a = t(22844)
          , l = t(89903)
          , d = t(96491)
          , u = t(80506)
          , s = t(55883)
          , p = /(<([^>]+)>)/ig
          , c = function(e, i) {
            var t, n = (null !== (t = null == e ? void 0 : e[i]) && void 0 !== t ? t : []).find(function(e) {
                return "markup" === e.type && "p" === e.element
            });
            if (n && "string" == typeof n.html)
                return n.html.replace(p, "")
        }
          , v = function(e) {
            var i, t, p, v, m, y, h, g, f, b, w, x = e.person, T = void 0 === x ? {} : x, A = e.useAuthorShortBio, O = e.vertical, S = null !== (y = null == T ? void 0 : null === (t = T.primaryImage) || void 0 === t ? void 0 : null === (i = t.url) || void 0 === i ? void 0 : i.primary) && void 0 !== y ? y : null, I = (0,
            r._)((0,
            n._)({}, (0,
            s.I)("Person")), {
                name: null !== (h = null == T ? void 0 : T.name) && void 0 !== h ? h : null,
                image: (0,
                o.xb)(S, u.x),
                jobTitle: null !== (g = null == T ? void 0 : null === (p = T.jobTitle) || void 0 === p ? void 0 : p[0]) && void 0 !== g ? g : null
            }), _ = null !== (f = null == T ? void 0 : T.shortBio) && void 0 !== f ? f : null;
            if ((void 0 === A || A) && _)
                I.description = _;
            else {
                var C = c(T, "bio");
                C && (I.description = C)
            }
            if ((0,
            l.B0)(d.ENABLE_NEW_AUTHOR_PAGE_SEO, void 0 === O ? "" : O)) {
                var P = c(T, "educationAndExpertise");
                P && (I.knowsAbout = P);
                var E = c(T, "experience");
                E && (I.disambiguatingDescription = E);
                var N = c(T, "awards");
                N && (I.award = N)
            }
            var D = null !== (b = null == T ? void 0 : null === (v = T.url) || void 0 === v ? void 0 : v.primary) && void 0 !== b ? b : null;
            D && (I.url = D);
            var B = null == T ? void 0 : null === (m = T.worksFor) || void 0 === m ? void 0 : m.name;
            B && (I.worksFor = [(0,
            r._)((0,
            n._)({}, (0,
            s.I)("Organization")), {
                name: B
            })]);
            var M = null !== (w = null == T ? void 0 : T.socialMediaProfiles) && void 0 !== w ? w : {}
              , L = Object.keys(M).filter(function(e) {
                return !!M[e] && "signal" !== e && "whatsapp" !== e
            });
            return L.length && (I.sameAs = [],
            L.forEach(function(e) {
                I.sameAs.push((0,
                a.fz)(e, M[e]))
            })),
            I
        }
    }
    ,
    80506: (e, i, t) => {
        t.d(i, {
            x: () => n
        });
        var n = t(9874).Ay.FIT_1500w
    }
    ,
    84368: (e, i, t) => {
        t.d(i, {
            N: () => u
        });
        var n = t(6226)
          , r = t(97183)
          , o = t(68225)
          , a = t(48970)
          , l = t(80506)
          , d = t(99918);
        function u(e, i) {
            var t, u, s, p, c, v, m, y, h, g, f, b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, w = arguments.length > 3 ? arguments[3] : void 0, x = e.authors, T = e.content, A = (void 0 === T ? {} : T).text, O = e.date, S = void 0 === O ? {} : O, I = S.createdAt, _ = S.modifiedAt, C = e.description, P = e.headline, E = void 0 === P ? {} : P, N = e.url, D = (0,
            n.A)((null !== (m = null == e ? void 0 : e.dateCreated) && void 0 !== m ? m : void 0) || I), B = (0,
            n.A)((null !== (y = null == e ? void 0 : e.datePublished) && void 0 !== y ? y : void 0) || _), M = (null == N ? void 0 : N.primary) ? (0,
            a.C)(N.primary) : null, L = {
                "@context": "https://schema.org/",
                "@type": "BlogPosting",
                publisher: (0,
                r.x)(i, w),
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": M
                },
                headline: E.seo || E.primary,
                url: M,
                datePublished: D,
                dateModified: B,
                author: (0,
                d.h)({
                    authors: x,
                    vertical: i
                })
            }, V = null !== (h = null == e ? void 0 : null === (u = e.primaryImage) || void 0 === u ? void 0 : null === (t = u.url) || void 0 === t ? void 0 : t.primary) && void 0 !== h ? h : null, U = null !== (g = null == b ? void 0 : null === (p = b.teaseImage) || void 0 === p ? void 0 : null === (s = p.url) || void 0 === s ? void 0 : s.primary) && void 0 !== g ? g : null, k = null !== (f = null == e ? void 0 : null === (v = e.teaseImage) || void 0 === v ? void 0 : null === (c = v.url) || void 0 === c ? void 0 : c.primary) && void 0 !== f ? f : null, j = (null == C ? void 0 : C.seo) || (null == C ? void 0 : C.primary);
            return L.image = (0,
            o.xb)(V || U || k, l.x),
            A && Array.isArray(A) ? L.articleBody = A.join("\n\n") : j && (L.articleBody = j),
            j && "liveBlog" !== b.subType && (L.description = j),
            L
        }
    }
    ,
    97183: (e, i, t) => {
        t.d(i, {
            X: () => l,
            x: () => o
        });
        var n = t(67684)
          , r = t(22844);
        function o(e, i) {
            var t = (null == i ? void 0 : i.toLowerCase()) || ""
              , o = "today" === e && "shop" === t ? "shop" : e
              , a = {
                "@type": "NewsMediaOrganization",
                name: "TODAY",
                masthead: "https://www.today.com/about/today/today-digital-masthead-rcna155416",
                url: "https://www.today.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://media-cldnry.s-nbcnews.com/image/upload/v1657223867/rockcms/2022-07/TODAY-Publisher-Logo-8226ca.svg"
                },
                sameAs: (0,
                r.ey)("today")
            }
              , l = {
                "@type": "NewsMediaOrganization",
                name: "NBC News",
                masthead: "https://www.nbcnews.com/news/us-news/nbc-news-digital-editors-n893846",
                url: "https://www.nbcnews.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://media-cldnry.s-nbcnews.com/image/upload/h_60/v1696280688/newsgroup-logos/nbcnews/logo/primary-black-424x45.png"
                },
                sameAs: (0,
                r.ey)("news")
            }
              , d = {
                subOrganization: {
                    "@type": "NewsMediaOrganization",
                    name: "Shop TODAY",
                    masthead: "https://www.today.com/shop/shop-today-editorial-team-rcna187940",
                    url: "https://www.today.com/shop",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/shop-today-orange-black-433d00.png"
                    },
                    sameAs: (0,
                    r.ey)("shop")
                }
            }
              , u = {
                subOrganization: {
                    "@type": "NewsMediaOrganization",
                    name: "NBC Select",
                    masthead: "https://www.nbcnews.com/select/shopping/masthead-rcna167949",
                    url: "https://www.nbcnews.com/select",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://media-cldnry.s-nbcnews.com/image/upload/h_60/newsgroup-logos/nbc-select/logo-horizontal/default-blue-360x102.png"
                    },
                    sameAs: (0,
                    r.ey)("select")
                }
            };
            switch (o) {
            case "msnbc":
                return {
                    "@type": "NewsMediaOrganization",
                    name: "MSNBC",
                    masthead: "https://www.msnbc.com/msnbc/msnbccom-digital-contacts-rcna53317",
                    url: "https://www.msnbc.com",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://media-cldnry.s-nbcnews.com/image/upload/newsgroup-logos/msnbc/logo-horizontal/default-black-424x60.png"
                    },
                    sameAs: (0,
                    r.ey)(o)
                };
            case "noticias":
                return {
                    "@type": "NewsMediaOrganization",
                    name: "TELEMUNDO",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://media-cldnry.s-nbcnews.com/image/upload/h_60/v1696280688/newsgroup-logos/nbcnews/logo/primary-black-424x45.png"
                    },
                    sameAs: (0,
                    r.ey)(o)
                };
            case "shop":
                return {
                    "@type": "NewsMediaOrganization",
                    name: "Shop TODAY",
                    masthead: "https://www.today.com/shop/shop-today-editorial-team-rcna187940",
                    url: "https://www.today.com/shop",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/shop-today-orange-black-433d00.png"
                    },
                    sameAs: (0,
                    r.ey)(o),
                    parentOrganization: a
                };
            case "today":
                return (0,
                n._)({}, a, d);
            case "select":
                return {
                    "@type": "NewsMediaOrganization",
                    name: "NBC Select",
                    masthead: "https://www.nbcnews.com/select/shopping/masthead-rcna167949",
                    url: "https://www.nbcnews.com/select",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://media-cldnry.s-nbcnews.com/image/upload/h_60/newsgroup-logos/nbc-select/logo-horizontal/default-blue-360x102.png"
                    },
                    sameAs: (0,
                    r.ey)(e),
                    parentOrganization: l
                };
            default:
                return (0,
                n._)({}, l, u)
            }
        }
        var a = {
            today: "TODAY.com",
            msnbc: "MSNBC.com"
        };
        function l(e) {
            return a[e] || "NBCNews.com"
        }
    }
    ,
    99918: (e, i, t) => {
        t.d(i, {
            h: () => d
        });
        var n = t(67684)
          , r = t(89903)
          , o = t(96491)
          , a = t(33749)
          , l = t(68590)
          , d = function(e) {
            var i = e.authors
              , t = void 0 === i ? [] : i
              , d = e.vertical
              , u = void 0 === d ? "" : d;
            if (!Array.isArray(t) || !t.length)
                return [(0,
                n._)({}, (0,
                a.i)(u))];
            var s = (0,
            r.B0)(o.RENDER_SHORT_BIO, u);
            return t.reduce(function(e, i) {
                var t = i.type
                  , r = i.name
                  , o = i.person
                  , d = null !== (p = null == o ? void 0 : o.name) && void 0 !== p ? p : r;
                if (["NBC News", "NBC Select", "MSNBC", "TODAY", "Shop TODAY"].includes(d)) {
                    var p, c, v = null !== (c = ({
                        "NBC News": "news",
                        "NBC Select": "select",
                        MSNBC: "msnbc",
                        TODAY: "today"
                    })[d]) && void 0 !== c ? c : u;
                    e.push((0,
                    n._)({}, (0,
                    a.i)(v, "Shop TODAY" === d)))
                } else
                    "embeddedPerson" === t && void 0 !== o ? e.push((0,
                    l.M)({
                        person: o,
                        useAuthorShortBio: s,
                        vertical: u
                    })) : "person" === t ? e.push((0,
                    l.M)({
                        person: i,
                        useAuthorShortBio: s,
                        vertical: u
                    })) : void 0 !== r && e.push((0,
                    l.M)({
                        person: {
                            name: r
                        },
                        useAuthorShortBio: s,
                        vertical: u
                    }));
                return e
            }, [])
        }
    }
}]);
