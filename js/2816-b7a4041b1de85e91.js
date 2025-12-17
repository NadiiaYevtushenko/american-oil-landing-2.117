(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2816], {
    7979: (e, o, a) => {
        "use strict";
        a.d(o, {
            A: () => n
        });
        var l = a(67684)
          , t = a(37876)
          , i = a(14232);
        let n = function(e) {
            var o = e.callback
              , a = e.children
              , n = e.options
              , r = void 0 === n ? null : n
              , s = e.root
              , m = void 0 === s ? null : s
              , b = e.rootMargin
              , c = void 0 === b ? "0px" : b
              , d = e.threshold
              , p = void 0 === d ? null : d
              , u = (0,
            i.useRef)(null)
              , h = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)(function() {
                var e = (0,
                l._)({
                    root: m,
                    rootMargin: c,
                    threshold: p
                }, r);
                if ("function" == typeof o) {
                    var a = new IntersectionObserver(function(e) {
                        try {
                            o(e)
                        } catch (e) {}
                    }
                    ,e);
                    a && "function" == typeof a.observe && u.current && (h.current = a,
                    a.observe(u.current))
                }
                return function() {
                    h.current && u.current && h.current.unobserve(u.current)
                }
            }, []),
            (0,
            t.jsx)("div", {
                ref: u,
                "data-testid": "intersection-observer",
                children: void 0 === a ? null : a
            })
        }
    }
    ,
    8225: e => {
        e.exports = {
            taboola: "styles_taboola__aZDx3",
            "live-dot-blink": "styles_live-dot-blink__HJKHG",
            "fade-in": "styles_fade-in__xDUI2",
            "expand-in": "styles_expand-in__1NQGv",
            "chatblog-expand-in": "styles_chatblog-expand-in__2ooFF"
        }
    }
    ,
    12541: e => {
        e.exports = {
            promoContainer: "styles_promoContainer__ZBsYg",
            wrapped: "styles_wrapped__x1y3b",
            mainText: "styles_mainText__DRcWR",
            isLarge: "styles_isLarge__D2vU8",
            promoCodeContainer: "styles_promoCodeContainer__AUUNR",
            promoText: "styles_promoText__d1Kd7",
            promoCodeIcon: "styles_promoCodeIcon__r_bwe",
            promoCodeIconShape: "styles_promoCodeIconShape__YaLFU",
            "live-dot-blink": "styles_live-dot-blink__HBBGd",
            "fade-in": "styles_fade-in__UrGG_",
            "expand-in": "styles_expand-in__IJeCU",
            "chatblog-expand-in": "styles_chatblog-expand-in__Trvo1"
        }
    }
    ,
    15421: () => {}
    ,
    38550: () => {}
    ,
    42336: (e, o, a) => {
        "use strict";
        a.d(o, {
            A: () => l
        });
        let l = a(7979).A
    }
    ,
    46330: (e, o, a) => {
        "use strict";
        a.d(o, {
            A: () => r
        });
        var l = a(37876);
        a(14232);
        var t = a(95062)
          , i = a.n(t);
        function n(e) {
            var o = e.src
              , a = e.alt
              , t = e.className
              , i = e.loadingLazy
              , n = e.originalWidth
              , r = e.originalHeight;
            return (0,
            l.jsx)("img", {
                width: void 0 === n ? null : n,
                height: void 0 === r ? null : r,
                loading: void 0 !== i && i ? "lazy" : "auto",
                src: o,
                alt: void 0 === a ? null : a,
                className: void 0 === t ? null : t,
                "data-testid": "raw-image"
            })
        }
        n.propTypes = {
            src: i().string.isRequired,
            alt: i().string,
            className: i().string,
            loadingLazy: i().bool,
            originalWidth: i().number,
            originalHeight: i().number
        };
        let r = n
    }
    ,
    46629: (e, o, a) => {
        "use strict";
        a.d(o, {
            w$: () => w,
            Gj: () => A,
            H1: () => C,
            TV: () => N,
            oQ: () => M
        });
        var l = a(37876)
          , t = a(14232)
          , i = a(82780)
          , n = a.n(i)
          , r = a(95062)
          , s = a.n(r)
          , m = a(15039)
          , b = a.n(m)
          , c = a(87992)
          , d = a(89903)
          , p = a(96491)
          , u = a(61702)
          , h = a(69527)
          , w = function(e) {
            var o = e.person
              , a = void 0 === o ? null : o
              , i = e.additionalClasses
              , r = void 0 === i ? "" : i
              , s = (0,
            t.useContext)(c.O1)
              , m = (0,
            d.B0)(p.RENDER_SHORT_BIO, s)
              , u = "byline-bio"
              , w = n()(a, "shortBio", null)
              , v = n()(a, "bio", null);
            return w || v ? (0,
            l.jsx)("div", {
                className: b()("expanded-byline__bio-wrapper", r),
                children: m && w ? (0,
                l.jsx)("p", {
                    className: b()(u, r),
                    children: w
                }) : v.map(function(e, o) {
                    if ((null == e ? void 0 : e.type) === "markup") {
                        var a = (0,
                        h.HZ)(o)
                          , t = e.html
                          , i = e.element;
                        return (0,
                        l.jsx)(i, {
                            dangerouslySetInnerHTML: {
                                __html: t
                            },
                            className: b()(u, r)
                        }, a)
                    }
                    return null
                })
            }) : null
        };
        w.propTypes = {
            person: u.MV,
            additionalClasses: s().string
        };
        var v = a(77328)
          , g = a.n(v)
          , f = a(75277)
          , _ = a(67793)
          , T = a(97247);
        a(15421);
        var B = "byline-name"
          , C = function(e) {
            var o = e.position
              , a = e.person
              , t = void 0 === a ? {} : a
              , i = e.showJobTitle
              , r = e.additionalClasses
              , s = n()(t, "name", null);
            if (!s)
                return null;
            var m = n()(t, ["url", "primary"], null)
              , c = s.trim()
              , d = n()(t, ["jobTitle"], null)
              , p = d ? d.reduce(f.dH, []) : ""
              , u = (0,
            l.jsxs)("span", {
                className: b()(B, void 0 === r ? "" : r),
                "data-testid": B,
                children: [(0,
                l.jsx)(T.H, {
                    href: m,
                    children: c
                }), void 0 !== i && i && d.length > 0 && (0,
                l.jsxs)(l.Fragment, {
                    children: [", ", p]
                })]
            });
            return s.startsWith("<component") && (u = (0,
            _.A)(s)),
            (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(g(), {
                    children: (0,
                    l.jsx)("meta", {
                        name: "branch:deeplink:authorName".concat(o),
                        content: c
                    })
                }), u]
            })
        };
        C.propTypes = {
            person: u.MV,
            showJobTitle: s().bool,
            additionalClasses: s().string,
            position: s().number.isRequired
        };
        var A = function(e) {
            var o = e.authors
              , a = e.additionalClasses
              , t = void 0 === a ? "" : a
              , i = e.showJobTitle
              , r = void 0 !== i && i
              , s = e.isMsnbcDaily
              , m = (void 0 === o ? {} : o).map(function(e, o) {
                var a = n()(e, "person", e)
                  , i = n()(a, "name", null)
                  , s = (0,
                h.HZ)(i);
                return (0,
                l.jsx)(C, {
                    person: a,
                    showJobTitle: r,
                    additionalClasses: t,
                    position: o + 1
                }, s)
            });
            return s ? m : m.reduce(f.dH, [])
        };
        A.propTypes = {
            isMsnbcDaily: s().bool,
            authors: s().arrayOf(u.cy || u.MV),
            showJobTitle: s().bool,
            additionalClasses: s().string
        };
        var y = a(9874)
          , x = a(58415)
          , k = a(77371)
          , F = "byline-thumbnail"
          , M = function(e) {
            var o = e.person
              , a = void 0 === o ? null : o
              , t = e.additionalClasses
              , i = void 0 === t ? "" : t
              , r = e.additionalClassesNoImage
              , s = e.chatStyle
              , m = e.isLinked
              , c = void 0 === m || m
              , d = e.position;
            if (!a)
                return null;
            var p = n()(a, ["primaryImage", "url", "primary"], "")
              , u = n()(a, ["primaryImage", "altText"], null)
              , h = "Author Thumbnail"
              , w = n()(a, ["url", "primary"], "");
            return p ? (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)(g(), {
                    children: (0,
                    l.jsx)("meta", {
                        name: "branch:deeplink:authorThumbnail".concat(void 0 === d ? null : d),
                        content: p
                    })
                }), (0,
                l.jsx)("div", {
                    className: b()(F, "".concat(F, "--has-image"), i),
                    "data-testid": F,
                    children: (0,
                    l.jsx)(T.H, {
                        href: c && w,
                        tabIndex: c ? -1 : void 0,
                        children: (0,
                        l.jsx)(x.A, {
                            label: u,
                            originalHeight: 48,
                            originalWidth: 48,
                            responsiveFlavors: {
                                s: y.Ay.FOCAL_60x60
                            },
                            thumbnail: p
                        })
                    })
                })]
            }) : void 0 !== s && s ? (0,
            l.jsx)("span", {
                className: b()(F, "".concat(F, "--generic-thumbnail"), i),
                children: c && w ? (0,
                l.jsx)(T.H, {
                    href: w,
                    children: (0,
                    l.jsx)(k.e, {
                        alt: h
                    })
                }) : (0,
                l.jsx)(k.e, {
                    alt: h
                })
            }) : (0,
            l.jsx)("span", {
                className: b()(F, "".concat(F, "--no-image"), void 0 === r ? "" : r),
                "data-testid": F
            })
        };
        M.propTypes = {
            additionalClasses: s().string,
            additionalClassesNoImage: s().string,
            person: u.MV,
            position: s().number,
            chatStyle: s().bool,
            isLinked: s().bool
        };
        var L = a(22844)
          , j = "byline-social"
          , R = [{
            key: "instagram",
            url: function(e) {
                return "https://instagram.com/".concat((0,
                L.aj)(e))
            },
            icon: "icon-instagram"
        }, {
            key: "facebook",
            url: function(e) {
                return "https://facebook.com/".concat((0,
                L.aj)(e))
            },
            icon: "icon-facebook"
        }, {
            key: "twitter",
            url: function(e) {
                return "https://x.com/".concat((0,
                L.aj)(e))
            },
            icon: "icon-twitter"
        }, {
            key: "tiktok",
            url: function(e) {
                return "https://tiktok.com/".concat((0,
                L.aj)(e))
            },
            icon: "icon-tiktok"
        }]
          , N = function(e) {
            var o = e.person
              , a = void 0 === o ? {} : o
              , t = e.additionalClasses
              , i = n()(a, "email", null)
              , r = n()(a, "socialMediaProfiles", null);
            return i || r ? (0,
            l.jsxs)("span", {
                className: b()(j, void 0 === t ? "" : t),
                children: [R.map(function(e) {
                    var o = e.key
                      , a = e.url
                      , t = e.icon;
                    return (null == r ? void 0 : r[o]) ? (0,
                    l.jsx)(T.A, {
                        href: a(r[o]),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        className: "".concat(j, "--link"),
                        children: (0,
                        l.jsx)("span", {
                            className: "icon ".concat(t)
                        })
                    }, o) : null
                }), i && (0,
                l.jsx)(T.A, {
                    href: "mailto:".concat(i.trim()),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: function(e) {
                        e.stopPropagation()
                    },
                    className: "".concat(j, "--link"),
                    children: (0,
                    l.jsx)("span", {
                        className: "icon icon-email"
                    })
                })]
            }) : null
        }
    }
    ,
    50506: e => {
        e.exports = {
            msnbcDailyBorder: "styles_msnbcDailyBorder__5G3wr",
            "live-dot-blink": "styles_live-dot-blink__hcw_B",
            "fade-in": "styles_fade-in__ojk9x",
            "expand-in": "styles_expand-in__xJ_gc",
            "chatblog-expand-in": "styles_chatblog-expand-in__dDLUT"
        }
    }
    ,
    55598: () => {}
    ,
    57098: e => {
        e.exports = {
            stripePattern: "styles_stripePattern__ie_EI",
            "live-dot-blink": "styles_live-dot-blink__mwgf6",
            "fade-in": "styles_fade-in__SYpiH",
            "expand-in": "styles_expand-in__OW_0s",
            "chatblog-expand-in": "styles_chatblog-expand-in__6k6tN"
        }
    }
    ,
    58415: (e, o, a) => {
        "use strict";
        a.d(o, {
            A: () => c
        });
        var l = a(37876);
        a(14232);
        var t = a(95062)
          , i = a.n(t)
          , n = a(31310)
          , r = a(46330)
          , s = a(68225)
          , m = a(97178)
          , b = function(e) {
            var o = e.thumbnail
              , a = e.additionalStyles
              , t = void 0 === a ? {
                raw: null,
                thumbnail: null
            } : a
              , i = e.label
              , b = e.responsiveFlavors
              , c = e.originalWidth
              , d = void 0 === c ? null : c
              , p = e.originalHeight
              , u = void 0 === p ? null : p;
            return (0,
            s.PI)(o) ? (0,
            l.jsx)(n.V, {
                lazyloaded: !0,
                responsiveFlavors: b,
                url: (0,
                m.L$)(o),
                retina: !0,
                className: t.thumbnail,
                originalWidth: d,
                originalHeight: u
            }) : (0,
            l.jsx)(r.A, {
                src: o,
                alt: i,
                minWidth: 100,
                minHeight: 100,
                originalWidth: d,
                originalHeight: u,
                layout: "fill",
                className: t.raw
            })
        };
        b.propTypes = {
            additionalStyles: i().shape({
                raw: i().string,
                thumbnail: i().string
            }),
            label: i().string,
            originalHeight: i().number,
            originalWidth: i().number,
            responsiveFlavors: i().shape({}),
            thumbnail: i().string.isRequired
        };
        let c = b
    }
    ,
    58517: (e, o, a) => {
        "use strict";
        a.d(o, {
            P: () => t
        });
        var l = {
            pkgArticle: "msd_topgrid",
            pkgColumnist: "msd_botgrid",
            recircArticleBody: "msd_recirc",
            recircColumnist: "msd_columnrecirc",
            recircArticleBottom: "msd_botrecric"
        };
        function t(e, o) {
            return {
                url: e,
                icid: l[o]
            }
        }
    }
    ,
    67793: (e, o, a) => {
        "use strict";
        function l(e) {
            var o = /<Byline>.*?<FirstName>(.+?)<\/FirstName>.*?<LastName>(.+?)<\/LastName>/.exec(e)
              , a = (null == o ? void 0 : o[1]) || ""
              , l = (null == o ? void 0 : o[2]) || "";
            return "".concat(a, " ").concat(l)
        }
        a.d(o, {
            A: () => l
        })
    }
    ,
    75154: (e, o, a) => {
        "use strict";
        a.d(o, {
            r: () => w
        });
        var l = a(45526)
          , t = a(37876);
        a(14232);
        var i = a(15039)
          , n = a.n(i)
          , r = a(51845)
          , s = a(20294)
          , m = a(34846)
          , b = a(95062)
          , c = a.n(b)
          , d = a(21737);
        a(38550);
        var p = function(e) {
            var o = e.buttonText
              , a = e.copiedText
              , l = e.buttonClasses
              , i = e.tooltipText
              , r = e.tooltipClasses
              , b = e.handleClick
              , c = (0,
            m.Bd)().t
              , p = (0,
            s._)((0,
            d.Cj)(), 2)
              , u = p[0]
              , h = p[1]
              , w = n()({
                copied: u
            }, "copy-to-clipboard__button", void 0 === l ? "" : l)
              , v = n()("copy-to-clipboard__tooltip", "arrow-top", void 0 === r ? "" : r);
            return (0,
            t.jsxs)("div", {
                className: "copy-to-clipboard",
                children: [(0,
                t.jsx)("button", {
                    "data-testid": "copy-to-clipboard-button",
                    type: "button",
                    className: w,
                    onClick: function() {
                        h(a),
                        b && b()
                    },
                    children: o
                }), (0,
                t.jsx)("span", {
                    className: v,
                    children: (void 0 === i ? "" : i) || c("Copied")
                })]
            })
        };
        p.propTypes = {
            buttonText: c().string.isRequired,
            buttonClasses: c().string,
            copiedText: c().string.isRequired,
            tooltipText: c().string,
            tooltipClasses: c().string,
            handleClick: c().func
        };
        var u = a(12541)
          , h = a.n(u);
        function w(e) {
            var o, a, i = e.promoCode, s = e.isLarge, m = void 0 !== s && s, b = e.text, c = void 0 === b ? "" : b, d = e.startsAt, u = void 0 === d ? "" : d, w = e.endsAt, v = void 0 === w ? "" : w, g = new Date, f = u ? new Date(u) : null, _ = v ? new Date(v) : null;
            if (f && g < f || _ && g > _)
                return null;
            var T = "product" == (c ? "product" : "waffle")
              , B = (0,
            t.jsxs)("svg", {
                className: n()(h().promoCodeIcon, (0,
                l._)({}, h().wrapped, T)),
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "18",
                viewBox: "0 0 10 18",
                fill: "none",
                children: [(0,
                t.jsx)("path", {
                    d: "M0 6.13446L5 1.49744L10 6.13446V18.4999H0V6.13446Z",
                    className: h().promoCodeIconShape
                }), (0,
                t.jsx)("path", {
                    d: "M5.75854 4.09228C5.75854 4.51101 5.41909 4.85046 5.00036 4.85046C4.58163 4.85046 4.24219 4.51101 4.24219 4.09228C4.24219 3.67355 4.58163 3.33411 5.00036 3.33411C5.41909 3.33411 5.75854 3.67355 5.75854 4.09228Z",
                    fill: "white"
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.65128 16.9542C4.55346 16.9542 4.47335 16.8819 4.46626 16.7903L4.46574 16.7771L4.4657 15.9567C4.28468 15.9272 4.10889 15.8834 3.93825 15.8251C3.7345 15.7556 3.56635 15.6852 3.43386 15.614C3.30131 15.5429 3.17872 15.467 3.06609 15.3863L3.01996 15.3531C2.93946 15.2945 2.88095 15.2491 2.84439 15.2169L2.835 15.2084C2.79357 15.1705 2.76457 15.142 2.74801 15.1231C2.69167 15.0566 2.68837 14.9918 2.7381 14.9285L3.24997 14.2881C3.27314 14.2565 3.31127 14.2375 3.36427 14.2312C3.41395 14.2249 3.45373 14.2391 3.48355 14.2739L3.49351 14.2834C3.86789 14.5965 4.27042 14.7941 4.70119 14.8764C4.82379 14.9016 4.94637 14.9143 5.06896 14.9143C5.33731 14.9143 5.5734 14.8463 5.77716 14.7103C5.98091 14.5743 6.08281 14.3814 6.08281 14.1316C6.08281 14.043 6.05794 13.9592 6.00825 13.8801C5.95857 13.8011 5.90305 13.7347 5.84176 13.6809C5.78046 13.6271 5.68356 13.5678 5.55102 13.503L5.44778 13.4531C5.36057 13.4116 5.28568 13.3776 5.22303 13.3512L5.16578 13.3276C5.08201 13.2937 4.96859 13.2501 4.82544 13.197L4.48023 13.0631C4.42446 13.0411 4.35656 13.0132 4.27648 12.9793L4.21414 12.9527C4.08495 12.8974 3.98139 12.8483 3.90354 12.8056C3.82568 12.763 3.73209 12.7068 3.62276 12.6372C3.51343 12.5676 3.42479 12.5004 3.35689 12.4356C3.28894 12.3708 3.21691 12.2933 3.1407 12.2032C3.0645 12.113 3.00568 12.0213 2.96426 11.928C2.92283 11.8347 2.88805 11.7295 2.85988 11.6125C2.83176 11.4955 2.81767 11.3722 2.81767 11.2425C2.81767 10.8061 2.97999 10.4234 3.30468 10.0944C3.60703 9.78816 3.99405 9.58335 4.46585 9.47999V8.63012C4.46585 8.53229 4.54892 8.453 4.65139 8.453H5.40196C5.44834 8.453 5.48647 8.46724 5.51629 8.49572L5.5222 8.50165L5.52772 8.50788C5.55954 8.53963 5.57906 8.58268 5.57906 8.63012V9.44172L5.62375 9.4467C5.79045 9.467 5.95261 9.50108 6.11015 9.54885C6.28743 9.60261 6.43153 9.65558 6.54255 9.70779C6.65353 9.75997 6.75874 9.81924 6.85811 9.88566L6.91723 9.92555C6.97756 9.96669 7.02017 9.99732 7.04498 10.0175L7.05194 10.0233C7.08176 10.0485 7.10658 10.0707 7.12645 10.0897C7.17905 10.1428 7.18974 10.1987 7.15862 10.2573L6.74877 10.9625C6.72225 11.01 6.68417 11.0353 6.63448 11.0385C6.58805 11.0479 6.54336 11.0369 6.50028 11.0052L6.49019 10.9963C6.47746 10.9857 6.45676 10.9697 6.4282 10.9483L6.40481 10.9314C6.36573 10.9042 6.30892 10.8679 6.23441 10.8226C6.1433 10.7672 6.04636 10.7166 5.94368 10.6708C5.84095 10.6249 5.71754 10.5838 5.57342 10.5474C5.42928 10.5111 5.28764 10.4929 5.14849 10.4929C4.83376 10.4929 4.57697 10.5609 4.37817 10.6969C4.17937 10.8329 4.08 11.0084 4.08 11.2235C4.08 11.3057 4.09409 11.3816 4.12221 11.4512C4.15038 11.5208 4.19924 11.5864 4.26884 11.648C4.3384 11.7097 4.40387 11.7619 4.46516 11.8046C4.52133 11.8437 4.60397 11.8882 4.71303 11.938L4.83976 11.9941C4.90036 12.0205 4.95387 12.0432 5.00016 12.0621L5.07924 12.0934C5.14801 12.1201 5.24134 12.155 5.35924 12.1982L5.56429 12.2728C5.65819 12.3073 5.73492 12.3363 5.79456 12.3596L5.83972 12.3778C5.92684 12.4135 6.03769 12.4628 6.17224 12.5257C6.3313 12.6 6.45636 12.6672 6.54749 12.7273C6.6386 12.7874 6.74128 12.8665 6.85562 12.9645C6.96991 13.0625 7.05771 13.163 7.11901 13.2657C7.1803 13.3685 7.23247 13.4895 7.27555 13.6287C7.31863 13.7678 7.34014 13.9164 7.34014 14.0746C7.34014 14.5585 7.17534 14.9751 6.84565 15.3246C6.51979 15.67 6.09764 15.8849 5.57921 15.9692L5.57908 16.777C5.57908 16.8192 5.56365 16.8579 5.53791 16.8883L5.52778 16.8993C5.52422 16.9035 5.52039 16.9075 5.51631 16.9114C5.48649 16.9399 5.44836 16.9541 5.40198 16.9541L4.65128 16.9542Z",
                    fill: "white"
                })]
            })
              , C = (0,
            t.jsx)(p, {
                buttonText: i,
                buttonClasses: n()(h().promoText, (o = {},
                (0,
                l._)(o, h().isLarge, m),
                (0,
                l._)(o, h().wrapped, T),
                o)),
                copiedText: null == i ? void 0 : i.toUpperCase(),
                textAreaSelector: "#product-waffle-clipboard",
                tooltipText: "Code Copied!",
                handleClick: T ? function() {
                    (0,
                    r.stub)("track", "mbt_producttease_click", {
                        action: "Promo code copied",
                        promoCode: i
                    })
                }
                : void 0
            });
            return (0,
            t.jsxs)("div", {
                className: n()(h().promoContainer, (0,
                l._)({}, h().wrapped, T)),
                children: [B, (0,
                t.jsx)("div", {
                    className: n()(h().mainText, (a = {},
                    (0,
                    l._)(a, h().wrapped, T),
                    (0,
                    l._)(a, h().isLarge, m),
                    a)),
                    children: T ? "USE PROMO CODE " : "PROMO CODE"
                }), (0,
                t.jsx)("div", {
                    className: n()(h().promoCodeContainer, (0,
                    l._)({}, h().wrapped, T)),
                    children: C
                }), c && T && (0,
                t.jsxs)("span", {
                    className: "".concat(h().mainText, " ").concat(h().wrapped),
                    children: [" ", c]
                })]
            })
        }
        (0,
        r.stub)("register", "mbt_producttease_click", {
            allowDuplicate: !0
        })
    }
    ,
    75205: e => {
        "use strict";
        e.exports = {
            news: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                liveBlog: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Live Blog Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Mobile Below Homepage Thumbnails"
                    }
                },
                category: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-feed",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            noticias: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Mobile Below Homepage Thumbnails"
                    }
                },
                category: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-o",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            deportes: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Mobile Below Homepage Thumbnails"
                    }
                },
                category: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-o",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            entretenimiento: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Mobile Below Homepage Thumbnails"
                    },
                    midFront: {
                        mode: "thumbnails-feed-3x1",
                        container: "taboola-mid-article-thumbnails---entertainment",
                        placement: "Mid Article Thumbnails - Entertainment"
                    }
                },
                category: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-o",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            shows: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Mobile Below Homepage Thumbnails"
                    }
                },
                category: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-o",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            telemundo: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Mobile Below Homepage Thumbnails"
                    }
                },
                category: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-category-thumbnails",
                        placement: "Below Category Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-o",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            mach: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed - MACH"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-feed",
                        placement: "Mobile Below Article - Taboola Feed - MACH"
                    },
                    chromeless_mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-feed",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            better: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed - Better"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-feed",
                        placement: "Mobile Below Article - Taboola Feed - Better"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-feed",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            think: {
                article: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed - Think"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-feed-mobile",
                        placement: "Mobile Below Article - Taboola Feed - Think"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-feed",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            today: {
                article: {
                    desktop: {
                        mode: "thumbnails-h",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-i",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-1x1_redesign",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed_ios: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    },
                    "commerce-mobile": {
                        mode: "thumbnails-i",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed - Commerce"
                    },
                    commerce: {
                        mode: "thumbnails-h",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed - Commerce"
                    }
                },
                liveBlog: {
                    desktop: {
                        mode: "thumbnails-o",
                        container: "taboola-below-article-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Live Blog Bento"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-h",
                        container: "taboola-below-homepage-thumbnails---bento",
                        placement: "Below Homepage Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-i",
                        container: "taboola-mobile-below-homepage-thumbnails---bento",
                        placement: "Mobile Below Homepage Thumbnails - Bento"
                    }
                },
                recipe: {
                    desktop: {
                        mode: "thumbnails-h",
                        container: "taboola-below-recipe---taboola-feed",
                        placement: "Below Recipe - Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-i",
                        container: "taboola-mobile-below-recipe---taboola-feed",
                        placement: "Mobile Below Recipe - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-1x1_redesign",
                        container: "taboola-app-below-recipe-thumbnails",
                        placement: "Mobile Below Recipe - Taboola Feed"
                    },
                    chromeless_feed_ios: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-recipe-thumbnails",
                        placement: "App Below Recipe Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-recipe-thumbnails",
                        placement: "Mobile App Below Recipe Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-recipe-thumbnails",
                        placement: "App tablet Below Recipe Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-feed-4x1",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            msnbc: {
                article: {
                    desktop: {
                        mode: "thumbnails-feed-2x1",
                        container: "taboola-below-article---taboola-feed",
                        placement: "Below Article - Taboola Feed"
                    },
                    rail: {
                        mode: "thumbnails-rr",
                        container: "taboola-right-rail-thumbnails-%id",
                        placement: "Right Rail Thumbnails - Bento"
                    },
                    mobile: {
                        mode: "thumbnails-feed-2x1",
                        container: "taboola-mobile-below-article---taboola-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                },
                home: {
                    desktop: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    },
                    mobile: {
                        mode: "thumbnails-q",
                        container: "taboola-below-homepage-thumbnails",
                        placement: "Below Homepage Thumbnails"
                    }
                },
                video: {
                    desktop: {
                        mode: "thumbnails-feed",
                        container: "taboola-below-video-thumbnails",
                        placement: "Below Video Taboola Feed"
                    },
                    mobile: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-mobile-below-video-thumbnails",
                        placement: "Mobile Below Video Taboola Feed"
                    }
                }
            },
            select: {
                article: {
                    desktop: {
                        mode: "thumbnails-a",
                        container: "taboola-below-article---taboola-feed---select",
                        placement: "Below Article - Taboola Feed - Select"
                    },
                    mobile: {
                        mode: "thumbnails-p",
                        container: "taboola-below-article-mobile-feed",
                        placement: "Mobile Below Article - Taboola Feed"
                    },
                    chromeless_feed: {
                        mode: "thumbnails-feed-mobile",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App Below Article Thumbnails"
                    },
                    chromeless_mobile: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "Mobile App Below Article Thumbnails"
                    },
                    chromeless_tablet: {
                        mode: "thumbs-app",
                        container: "taboola-app-below-article-thumbnails",
                        placement: "App tablet Below Article Thumbnails"
                    }
                }
            }
        }
    }
    ,
    75277: (e, o, a) => {
        "use strict";
        a.d(o, {
            Hh: () => n,
            V8: () => i,
            dH: () => m,
            qd: () => s
        });
        var l = a(85993);
        a(37876),
        a(14232);
        var t = a(11806)
          , i = function(e, o) {
            return !!(Array.isArray(e) && Array.isArray(o)) && e.length === o.length && e.every(function(e, a) {
                return e === o[a]
            })
        }
          , n = function(e, o) {
            return e.reduce(function(e) {
                for (var a = arguments.length, t = Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
                    t[i - 1] = arguments[i];
                return e.concat(o.apply(void 0, (0,
                l._)(t)))
            }, [])
        };
        function r(e, o) {
            return e.value > o.value ? 1 : e.value < o.value ? -1 : e.index > o.index ? 1 : e.index < o.index ? -1 : 0
        }
        function s(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                return e
            }
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r
              , l = e.map(function(e, a) {
                return {
                    index: a,
                    value: o(e, a)
                }
            });
            return l.sort(a),
            l.map(function(o) {
                return e[o.index]
            })
        }
        var m = function(e, o, a, l) {
            return a > 0 && e.push(a + 1 < l.length ? ", " : " ".concat(t.Ay.t("and"), " ")),
            e.push(o),
            e
        }
    }
    ,
    77371: (e, o, a) => {
        "use strict";
        a.d(o, {
            e: () => n
        });
        var l = a(37876);
        a(14232);
        var t = a(95062)
          , i = a.n(t);
        function n(e) {
            var o = e.className
              , a = e.alt;
            return (0,
            l.jsxs)("svg", {
                alt: void 0 === a ? null : a,
                className: void 0 === o ? null : o,
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                l.jsx)("circle", {
                    cx: "14",
                    cy: "14",
                    r: "14",
                    fill: "none"
                }), (0,
                l.jsx)("path", {
                    d: "M18.0825 9.79415L15.266 16.2227L14.4633 10.6359C14.3603 9.87584 15.6531 9.40702 15.6531 9.40702C15.5359 9.14419 15.1274 9.14774 15.1274 9.14774H14.2537C14.1152 7.77323 15.3618 6.77165 16.7079 7.0771C18.0327 7.37189 18.5122 8.81033 18.0825 9.78705",
                    fill: "#6E55DC"
                }), (0,
                l.jsx)("path", {
                    d: "M12.8509 18.304L7.36349 14.6457C5.96767 13.7116 4.58606 14.6635 4.29127 15.6473C3.85797 17.0964 4.82758 18.304 6.34415 18.304H12.8509Z",
                    fill: "#FCCC12"
                }), (0,
                l.jsx)("path", {
                    d: "M13.5715 9.24013C13.774 7.81945 12.5024 6.7717 11.1244 7.0807C9.7996 7.37549 9.32012 8.81748 9.74988 9.79064L12.5664 16.2192L13.5715 9.23658V9.24013Z",
                    fill: "#EF1541"
                }), (0,
                l.jsx)("path", {
                    d: "M12.3421 17.2777L9.63926 11.1226C9.00706 9.69479 7.33065 9.51721 6.40721 10.3554C5.75725 10.945 5.24936 12.5539 6.70556 13.5235L12.3385 17.2777H12.3421Z",
                    fill: "#FF7112"
                }), (0,
                l.jsx)("path", {
                    d: "M21.4846 18.3039C23.0012 18.3039 23.9708 17.0963 23.5375 15.6472C23.2462 14.6634 21.8646 13.7151 20.4688 14.6456L14.9814 18.3039H21.4846Z",
                    fill: "#05AC3F"
                }), (0,
                l.jsx)("path", {
                    d: "M21.1262 13.5235C22.5824 12.5504 22.078 10.945 21.4245 10.3554C20.4975 9.51721 18.8247 9.69479 18.1925 11.1226L15.4932 17.2777L21.1262 13.5235Z",
                    fill: "#069DE0"
                })]
            })
        }
        n.propTypes = {
            alt: i().string,
            className: i().string
        }
    }
    ,
    80784: (e, o, a) => {
        "use strict";
        a.d(o, {
            U: () => s
        });
        var l = a(37876)
          , t = a(14232)
          , i = a(61702)
          , n = a(57098)
          , r = a.n(n);
        function s(e) {
            var o = e.svg
              , a = void 0 === o ? {} : o
              , i = a.height
              , n = a.width
              , s = e.pattern
              , m = void 0 === s ? {} : s
              , b = m.height
              , c = m.width
              , d = m.patternTransform
              , p = e.line
              , u = void 0 === p ? {} : p
              , h = u.x1
              , w = u.y
              , v = u.x2
              , g = u.y2
              , f = u.strokeWidth
              , _ = e.rect
              , T = void 0 === _ ? {} : _
              , B = T.width
              , C = T.height
              , A = (0,
            t.useId)();
            return (0,
            l.jsx)("div", {
                className: "".concat(r().stripePattern, " stripe-pattern"),
                children: (0,
                l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: void 0 === n ? "100%" : n,
                    height: void 0 === i ? "100%" : i,
                    children: [(0,
                    l.jsx)("defs", {
                        children: (0,
                        l.jsx)("pattern", {
                            id: A,
                            patternUnits: "userSpaceOnUse",
                            width: void 0 === c ? "3" : c,
                            height: void 0 === b ? "3" : b,
                            patternTransform: void 0 === d ? "rotate(45)" : d,
                            children: (0,
                            l.jsx)("line", {
                                x1: void 0 === h ? "0" : h,
                                y1: void 0 === w ? "0" : w,
                                x2: void 0 === v ? "0" : v,
                                y2: void 0 === g ? "3" : g,
                                strokeWidth: void 0 === f ? "3" : f
                            })
                        })
                    }), (0,
                    l.jsx)("rect", {
                        width: void 0 === B ? "100%" : B,
                        height: void 0 === C ? "100%" : C,
                        fill: "url(#".concat(A, ")")
                    })]
                })
            })
        }
        s.propTypes = i.ww
    }
    ,
    82337: (e, o, a) => {
        "use strict";
        a.d(o, {
            Ay: () => E
        });
        var l = a(16927)
          , t = a(45526)
          , i = a(67684)
          , n = a(4902)
          , r = a(37876)
          , s = a(14232)
          , m = a(48011)
          , b = a(15039)
          , c = a.n(b)
          , d = a(82780)
          , p = a.n(d)
          , u = a(21120)
          , h = a(87992)
          , w = a(75205)
          , v = a.n(w)
          , g = a(34704)
          , f = a(367)
          , _ = a(89903)
          , T = a(96491)
          , B = a(19192)
          , C = a(61623)
          , A = a(86130)
          , y = a(69995)
          , x = a(8225)
          , k = a.n(x)
          , F = {
            entretenimiento: !0,
            msnbc: !0,
            news: !0,
            noticias: !0,
            deportes: !0,
            select: !0,
            shows: !0,
            telemundo: !0,
            today: !0
        }
          , M = {
            default: "nbcnews",
            entretenimiento: "telemundocom",
            msnbc: "nbcuniversal-msnbc",
            news: "nbcnews",
            noticias: "telemundocom",
            deportes: "telemundocom",
            select: "nbcuniversal-network",
            shows: "telemundocom",
            telemundo: "telemundocom",
            today: "nbc-today"
        }
          , L = {
            today: {
                android: "nbc-todayappandroid",
                ios: "nbctodayappios"
            },
            news: {
                android: "nbcnewsappandroid",
                ios: "nbcnewsappios"
            },
            mach: {
                android: "nbcnewsappandroid",
                ios: "nbcnewsappios"
            },
            better: {
                android: "nbcnewsappandroid",
                ios: "nbcnewsappios"
            },
            think: {
                android: "nbcnewsappandroid",
                ios: "nbcnewsappios"
            },
            noticias: {
                android: "telemundocom-app-android",
                ios: "telemundocom-app-ios"
            },
            deportes: {
                android: "telemundocom-app-android",
                ios: "telemundocom-app-ios"
            },
            entretenimiento: {
                android: "telemundocom-app-android",
                ios: "telemundocom-app-ios"
            },
            shows: {
                android: "telemundocom-app-android",
                ios: "telemundocom-app-ios"
            },
            telemundo: {
                android: "telemundocom-app-android",
                ios: "telemundocom-app-ios"
            },
            msnbc: {
                android: "msnbcappandroid",
                ios: "msnbcappios"
            },
            default: "nbcnews-app"
        }
          , j = function(e) {
            var o = g.A.Android() ? "android" : "ios";
            return L[e] ? L[e][o] : L.default
        }
          , R = function(e, o, a) {
            return ({
                msnbc: o && !a,
                news: o && !a,
                telemundo: !1,
                today: o && !a
            })[e]
        }
          , N = function(e, o, a) {
            return "front" === e && F[o] ? "" === a || "today-cover-redesign" === a || "cover" === a ? "home" : "category" : "card" === e || "showBlog" === e ? "article" : e
        }
          , H = function(e, o, a, l) {
            if (R(e, o, a)) {
                var t = {
                    msnbc: !1,
                    news: !1,
                    telemundo: !1,
                    today: g.A.iOS()
                };
                return "chromeless_feed".concat(t[e] ? "_ios" : "")
            }
            return o ? l ? "chromeless_mobile" : "chromeless_tablet" : l ? "mobile" : "desktop"
        }
          , V = function(e, o, a) {
            return p()(v(), [e, o, a], null)
        }
          , q = function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , a = e.vertical
              , l = e.isRail
              , t = e.isMidFront
              , i = e.isChromeless
              , n = e.ecommerceEnabled
              , r = e.isLiveBlog
              , s = e.section
              , m = e.pageView
              , b = o.isS
              , c = o.isLorXL
              , d = N(m, a, s)
              , p = (0,
            _.B0)(T.TABOOLA_CUSTOM_PLACEMENT, a)
              , u = H(a, i, n, void 0 !== b && b);
            return (l && (u = (void 0 === c || c) && !i ? "rail" : null),
            p && (u = t ? "midFront" : null),
            "today" !== a || !n || i || l) ? "article" === d && r ? v().news.liveBlog[u] : V(a, d, u) : "mobile" === u ? v().today.article["commerce-mobile"] : v().today.article.commerce
        }
          , D = s.memo(function(e) {
            var o, a = e.dispatch, m = e.vertical, b = e.id, d = void 0 === b ? "1" : b, p = e.pageView, w = e.section, v = void 0 === w ? null : w, _ = e.canonicalUrl, T = void 0 === _ ? null : _, C = e.isRail, x = void 0 !== C && C, F = e.isChromeless, H = e.isLiveBlog, D = void 0 !== H && H, E = e.loaderLoaded, S = e.className, I = e.adsDisabled, O = void 0 !== I && I, U = e.pkgClassName, P = e.ecommerceEnabled, W = void 0 !== P && P, Z = e.view, J = (0,
            s.useRef)(null), G = (0,
            s.useContext)(h.xo), z = G.isS, Y = G.isLorXL, X = G.hasCheckedViewportSize, K = (0,
            y.z)(), Q = (o = (0,
            l._)(function() {
                var e, o;
                return (0,
                n.__generator)(this, function(l) {
                    return O || K ? [2, null] : E ? [2, null] : (e = F ? j(m) : M[m] || M.default,
                    "today" === m && g.A.Android() && null !== f.A.getAndroidBridge() && (e = L.today.android),
                    o = "loader",
                    R(m, F, W) && (o = "mobile-loader"),
                    a((0,
                    B.o2)()),
                    [2, (0,
                    u.A)("//cdn.taboola.com/libtrc/".concat(e, "/").concat(o, ".js"))])
                })
            }),
            function() {
                return o.apply(this, arguments)
            }
            ), $ = function() {
                var e = N(p, m, v)
                  , o = "recipe" === e ? {
                    category: "auto"
                } : (0,
                t._)({}, e, "auto");
                if ("article" === e) {
                    if (!F) {
                        var a = V(m, e, "rail");
                        if (D && (a = V(m, "liveBlog", "rail")),
                        a) {
                            var l = (0,
                            i._)({
                                target_type: "mix"
                            }, a);
                            l.container = l.container.replace("%id", d),
                            window._taboola.push(l)
                        }
                    }
                    T && (o.url = T)
                }
                R(m, F, W) && (window._taboola.mobile = [],
                window._taboola.mobile.push({
                    allow_sdkless_load: !0,
                    taboola_view_id: new Date().getTime(),
                    publisher: j(m)
                })),
                window._taboola.push(o),
                "article" !== e && window._taboola.push({
                    flush: !0
                })
            };
            return ((0,
            s.useEffect)(function() {
                var o;
                X && (o = (0,
                l._)(function() {
                    var o, a;
                    return (0,
                    n.__generator)(this, function(l) {
                        switch (l.label) {
                        case 0:
                            if (O || K)
                                return [2];
                            if (!(o = q(e, {
                                isS: z,
                                isLorXL: Y
                            })))
                                return [3, 2];
                            if ((a = (0,
                            i._)({
                                target_type: "mix"
                            }, o)).container = o.container.replace("%id", d),
                            J.current && (J.current.id = a.container),
                            x)
                                return [2];
                            return window._taboola = window._taboola || [],
                            window._taboola.push(a),
                            $(),
                            [4, Q()];
                        case 1:
                            l.sent(),
                            window.performance && "function" == typeof window.performance.mark && window.performance.mark("tbl_ic"),
                            l.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                }),
                function() {
                    return o.apply(this, arguments)
                }
                )()
            }, [X]),
            (0,
            s.useEffect)(function() {
                K && window._taboola && (window._taboola = [])
            }, [K]),
            (void 0 === Z ? null : Z) === A.g.START_TODAY_APP || O || K) ? null : (0,
            r.jsx)("div", {
                className: c()(void 0 === U ? "pkg taboola" : U, k().taboola, void 0 === S ? null : S, "dn-print"),
                "data-packageid": d,
                "data-testid": "taboola",
                "data-activity-map": "taboola-".concat(x ? "article-sidebar" : "article-bottom"),
                children: (0,
                r.jsx)("div", {
                    "data-testid": "taboola-content",
                    ref: J
                })
            })
        });
        D.displayName = "Taboola";
        let E = (0,
        m.Ng)(function(e) {
            var o, a, l, t = e.front, i = e.shared, n = e.article;
            return {
                isLiveBlog: (0,
                C.RM)(null == n ? void 0 : null === (o = n.content) || void 0 === o ? void 0 : o[0]),
                vertical: i.vertical,
                pageView: "card" === i.pageView ? "article" : i.pageView,
                section: i.section,
                isChromeless: i.isChromeless,
                loaderLoaded: i.taboolaLoaderLoaded,
                adsDisabled: t.curation.adsDisabled,
                taboolaFeed: i.taboolaFeed,
                ecommerceEnabled: null == n ? void 0 : null === (l = n.content) || void 0 === l ? void 0 : null === (a = l[0]) || void 0 === a ? void 0 : a.ecommerceEnabled,
                view: i.view
            }
        })(D)
    }
    ,
    92684: (e, o, a) => {
        "use strict";
        a.d(o, {
            V: () => n
        });
        var l = a(37876);
        a(14232);
        var t = a(50506)
          , i = a.n(t);
        function n() {
            return (0,
            l.jsx)("div", {
                className: i().msnbcDailyBorder,
                "data-testid": "msnbcDailyBorder"
            })
        }
    }
}]);
