(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1689], {
    33215: e => {
        e.exports = {
            omegaVideoSlate: "styles_omegaVideoSlate__JQKIb",
            "omega-container": "styles_omega-container__CiEbR",
            "live-dot-blink": "styles_live-dot-blink__DESZc",
            "fade-in": "styles_fade-in__C_gKo",
            "expand-in": "styles_expand-in__HCkVt",
            "chatblog-expand-in": "styles_chatblog-expand-in__zrHCu"
        }
    }
    ,
    33729: (e, n, a) => {
        "use strict";
        a.d(n, {
            H: () => v
        });
        var t = a(45526)
          , i = a(67684)
          , o = a(62701)
          , r = a(65699)
          , s = a(20294)
          , l = a(37876)
          , c = a(14232)
          , d = a(95062)
          , p = a.n(d)
          , u = a(98570);
        function m(e) {
            return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
        }
        function v(e) {
            var n = e.name
              , a = e.key
              , d = function() {
                var e = (0,
                u.J)()
                  , t = (0,
                s._)((0,
                c.useState)(null), 2)
                  , i = t[0]
                  , o = t[1];
                return (0,
                c.useEffect)(function() {
                    var e, a, t = null !== (a = new URLSearchParams(window.location.search).get("clientFlagOverride")) && void 0 !== a ? a : "";
                    o((e = new RegExp("(?:^|,)([ +-])".concat(n, "(?:,|$)")).exec(t)) && "-" !== e[1])
                }, []),
                null !== i ? i : e[a]
            };
            function v(e) {
                var a = e.children
                  , t = (0,
                r._)(e, ["children"]);
                return (d() ? t["if".concat(m(n))] : a) || null
            }
            return v.propTypes = (0,
            t._)({
                children: p().node.isRequired
            }, "if".concat(m(n)), p().node.isRequired),
            v.displayName = "".concat(m(n), "FeatureFlagSwitch"),
            {
                hook: d,
                hoc: function(e) {
                    function a(a) {
                        var r = d()
                          , s = (0,
                        o._)((0,
                        i._)({}, a), (0,
                        t._)({}, "is".concat(m(n)), r));
                        return (0,
                        l.jsx)(e, (0,
                        i._)({}, s))
                    }
                    return a.displayName = "with".concat(m(n), "Flag"),
                    a
                },
                component: v
            }
        }
    }
    ,
    51689: (e, n, a) => {
        "use strict";
        a.d(n, {
            _: () => eH
        });
        var t = a(16927)
          , i = a(67684)
          , o = a(62701)
          , r = a(20294)
          , s = a(4902)
          , l = a(37876)
          , c = a(14232)
          , d = a(69995)
          , p = a(14571)
          , u = a(48011);
        function m() {
            var e = (0,
            r._)((0,
            c.useState)(!1), 2)
              , n = e[0]
              , a = e[1];
            return (0,
            c.useEffect)(function() {
                a(!0)
            }, []),
            n
        }
        var v = a(38458)
          , h = a(39324)
          , C = a.n(h)
          , f = a(89933)
          , y = a(66152);
        a(58537);
        var S = a(30223)
          , g = a(34223)
          , b = a(41224)
          , _ = a(57186)
          , O = a(5728)
          , A = a(367)
          , N = a(21737)
          , B = a(23548)
          , k = a(87992)
          , T = a(18847)
          , L = a.n(T)
          , w = L()(function() {
            return a.e(5813).then(a.bind(a, 65813)).then(function(e) {
                return e.VideoContextProvider
            })
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [65813]
                }
            },
            ssr: !1
        })
          , F = L()(function() {
            return a.e(5734).then(a.bind(a, 45734))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [45734]
                }
            },
            ssr: !1
        })
          , I = L()(function() {
            return a.e(8765).then(a.bind(a, 58765))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [58765]
                }
            },
            ssr: !1
        })
          , M = L()(function() {
            return Promise.all([a.e(888), a.e(3941), a.e(4856), a.e(3076)]).then(a.bind(a, 99123))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [99123]
                }
            },
            ssr: !1
        })
          , E = L()(function() {
            return a.e(6997).then(a.bind(a, 86997))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [86997]
                }
            },
            ssr: !1
        })
          , R = a(85993)
          , P = a(48148)
          , D = a(45526)
          , x = a(95062)
          , H = a.n(x)
          , V = a(15039)
          , j = a.n(V)
          , z = a(34846)
          , q = a(40625)
          , U = a(9874)
          , K = a(81481)
          , W = a(46844)
          , Y = a(10143)
          , J = a(39812);
        a(66832);
        var G = "sticky-pip";
        function Q(e) {
            var n, a = e.children, t = e.className, i = e.getShouldStickOnViewportExit, o = e.placeholderClassName, s = e.onClose, d = e.onInViewChange, p = e.onStuckChange, u = e.shouldStickOnlyOnFirstView, m = e.enabled, v = e.pipAlignDesktop, h = void 0 === v ? "bottom" : v, C = e.pipAlignMobile, f = void 0 === C ? "bottom" : C, y = e.noStuckChangeInFullscreen, S = void 0 !== y && y, g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, b = (0,
            z.Bd)().t, _ = (0,
            r._)(c.useState(!1), 2), O = _[0], A = _[1], N = (0,
            r._)(c.useState(!0), 2), B = N[0], k = N[1], T = (0,
            r._)(c.useState(!0), 2), L = T[0], w = T[1], F = (0,
            r._)(c.useState(!1), 2), I = F[0], M = F[1], E = c.useContext(J.A), R = !!document.fullscreenElement, P = c.useCallback(function(e) {
                (!S || !R) && (k(e),
                e && (M(!0),
                A(!1)),
                e || "function" != typeof i || w(i()),
                "function" == typeof d && d(e))
            }, [d, i, S, R]), x = (null == g ? void 0 : g.setStickyVideoFlag) || (null == E ? void 0 : E.setStickyVideoFlag), H = (void 0 === m || m) && (!(void 0 === u || u) || I) && !B && !O && L && !(S && R);
            c.useEffect(function() {
                (!S || !R) && "function" == typeof x && x(H)
            }, [x, H, S, R]),
            c.useEffect(function() {
                (!S || !R) && "function" == typeof s && s(O)
            }, [s, O, S, R]),
            c.useEffect(function() {
                (!S || !R) && "function" == typeof p && p(H)
            }, [p, H, S, R]);
            var V = (0,
            W.A)(K.A);
            return (0,
            l.jsxs)(q.pL, {
                className: t,
                onChange: P,
                rootMargin: "".concat(-V, "px 0px 0px 0px"),
                threshold: .3,
                children: [(0,
                l.jsx)(Y.O, {
                    responsiveFlavors: {
                        s: U.Ay.FOCAL_860x484
                    },
                    className: o
                }), (0,
                l.jsxs)("div", {
                    className: j()(G, (n = {},
                    (0,
                    D._)(n, "".concat(G, "--stuck"), H),
                    (0,
                    D._)(n, "".concat(G, "--desktopTop"), "top" === h),
                    (0,
                    D._)(n, "".concat(G, "--desktopBottom"), "bottom" === h),
                    (0,
                    D._)(n, "".concat(G, "--mobileTop"), "top" === f),
                    (0,
                    D._)(n, "".concat(G, "--mobileBottom"), "bottom" === f),
                    n)),
                    "data-testid": "sticky-pip__sticky-container",
                    children: [a, (0,
                    l.jsx)("div", {
                        className: "".concat(G, "__close"),
                        children: (0,
                        l.jsx)("button", {
                            type: "button",
                            className: "".concat(G, "__close-button icon icon-close"),
                            onClick: function() {
                                return A(!0)
                            },
                            children: (0,
                            l.jsx)("span", {
                                className: "".concat(G, "__close-label"),
                                children: b("Close")
                            })
                        })
                    })]
                })]
            })
        }
        Q.contextTypes = {
            setStickyVideoFlag: H().func
        };
        var X = a(61731)
          , $ = a(89711)
          , Z = a(574)
          , ee = a(91243);
        function en(e) {
            var n = e.children
              , a = e.className
              , t = e.placeholderClassName
              , i = e.shouldStickOnlyOnFirstView
              , o = e.disableStickyOnMute
              , s = void 0 !== o && o
              , d = e.disableStickyOnPause
              , p = void 0 === d || d
              , u = e.pipAlignDesktop
              , m = e.pipAlignMobile
              , v = e.onStuckChange
              , h = void 0 === v ? function() {}
            : v
              , C = e.noStuckChangeInFullscreen
              , f = (0,
            r._)((0,
            c.useState)(!1), 2)
              , y = f[0]
              , S = f[1]
              , g = (0,
            X.vj)()
              , b = (0,
            Z.JX)()
              , _ = b.play
              , O = b.pause
              , A = (0,
            $.HN)().muted
              , N = (0,
            c.useRef)({});
            (0,
            c.useEffect)(function() {
                var e, n, a = [ee.kI, function(e) {
                    return S(e.ref !== N.current)
                }
                , ee.Ld];
                return (e = P.A).on.apply(e, (0,
                R._)(a)),
                function() {
                    return (n = P.A).remove.apply(n, (0,
                    R._)(a))
                }
            }, []);
            var B = (0,
            c.useCallback)(function(e) {
                h(e),
                e && P.A.trigger(ee.kI, {
                    ref: N.current
                }, ee.Ld)
            }, [h])
              , k = (0,
            c.useCallback)(function(e) {
                e && !g && O()
            }, [g, O])
              , T = (0,
            c.useCallback)(function() {
                var e = !p || !g;
                return !(s && A) && e
            }, [s, p, A, g])
              , L = (0,
            c.useCallback)(function(e) {
                g ? e && A && (S(!1),
                g || _()) : S(!1)
            }, [A, g, _]);
            return (0,
            l.jsx)(Q, {
                className: a,
                getShouldStickOnViewportExit: T,
                onClose: k,
                onStuckChange: B,
                enabled: !y,
                onInViewChange: L,
                placeholderClassName: t,
                shouldStickOnlyOnFirstView: void 0 !== i && i,
                pipAlignDesktop: void 0 === u ? "bottom" : u,
                pipAlignMobile: void 0 === m ? "bottom" : m,
                noStuckChangeInFullscreen: void 0 !== C && C,
                children: n
            })
        }
        var ea = a(15794)
          , et = a(52652)
          , ei = (0,
        et.o0)() || {
            name: ""
        }
          , eo = a(11680)
          , er = a(13869);
        function es(e) {
            var n = e.isReady
              , a = (0,
            r._)((0,
            c.useState)(!0), 2)
              , t = a[0]
              , i = a[1]
              , o = (0,
            er.Fp)()
              , s = !n || o;
            return (0,
            c.useEffect)(function() {
                i(s)
            }, [s]),
            (0,
            l.jsx)(l.Fragment, {
                children: t ? (0,
                l.jsx)("div", {
                    className: "video-loading-animation",
                    style: {
                        placeSelf: "center"
                    },
                    children: (0,
                    l.jsx)(eo.a, {
                        showLoader: s,
                        animateIn: !0,
                        animateOut: !0,
                        onAnimationEnd: function() {
                            i(!1)
                        }
                    })
                }) : null
            })
        }
        es.propTypes = {
            isReady: H().bool.isRequired
        };
        var el = a(82646)
          , ec = a(13884)
          , ed = a(33215)
          , ep = a.n(ed)
          , eu = function(e) {
            var n, a, t, i, o = e.coreVideoReady, r = e.hasError, s = e.stream, d = e.errorCause, p = e.playmakerArt, u = void 0 === p ? null : p, v = m(), h = (0,
            k.Jp)(), C = h["googlebot-slate"], y = h["use-election-slate"], S = (0,
            c.useContext)(k.Pl), g = S.domain, b = S.path;
            if (o && !r)
                return null;
            var _ = s === ec.ES.NEWS_NOW && y && (null === (a = (0,
            f.tryParse)("http://".concat(g).concat(b))) || void 0 === a ? void 0 : null === (n = a.searchParams) || void 0 === n ? void 0 : n.get("election-page")) === "true" ? "election" : s
              , O = (0,
            f.isValidAbsoluteUrl)(u) ? u : null
              , A = {
                img: null !== (i = null != O ? O : ec.Ow[_]) && void 0 !== i ? i : ec.h6,
                alt: "Loading video. Please wait."
            }
              , N = C && v && ["Chrome", "Mobile", "iPhone", "OS"].some(function(e) {
                return navigator.userAgent.includes(e)
            }) && (null == d ? void 0 : null === (t = d.message) || void 0 === t ? void 0 : t.includes("4026"))
              , B = (0,
            l.jsx)(el.g, {
                slateType: "connection-error-slate",
                heading: "Something went wrong!",
                details: "Please check your internet connection and try again later."
            })
              , T = r && !N ? B : (0,
            l.jsx)("img", {
                src: A.img,
                alt: A.alt,
                className: "omega-loading-slate"
            })
              , L = j()(ep().omegaVideoSlate, ep().omegaVideoSlateContainer);
            return (0,
            l.jsx)("div", {
                className: L,
                children: T
            })
        };
        eu.propTypes = {
            coreVideoReady: H().bool.isRequired,
            errorCause: H().objectOf(H().string).isRequired,
            hasError: H().bool.isRequired,
            stream: H().string.isRequired
        };
        var em = a(97078)
          , ev = a(49841);
        function eh(e) {
            var n = e.isStickyEnabled
              , a = (0,
            X.vj)()
              , t = (0,
            ev.ug)();
            return (0,
            em.b)(!a && (t || n)),
            null
        }
        var eC = a(45267)
          , ef = Symbol("fetchWasPatched")
          , ey = a(91096)
          , eS = a(15574)
          , eg = a.n(eS)
          , eb = a(50046)
          , e_ = a.n(eb)
          , eO = {
            ISOBMFF: "ISOBMFF"
        }
          , eA = {
            Live: "Live"
        }
          , eN = {
            StreamTransport: {
                DASH: "DASH",
                HLS: "HLS",
                HSS: "HSS",
                PDL: "PDL",
                PSF: "PSF"
            }
        }
          , eB = {
            NEWS_NOW: {
                initializationOptions: {
                    appBrand: "nbcnews",
                    appName: "nbcnews"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    serviceKey: "5676009166762707117",
                    assetMetadata: {
                        channelId: "NBC News Now",
                        channelName: "nbc_news_now",
                        programmeId: "NBC News Now",
                        programmeTitle: "nbc_news_now",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(nnn)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(nnn)/master.mpd"
                        }
                    }
                }
            },
            MSNBC_TVE: {
                initializationOptions: {
                    appBrand: "msnbc",
                    appName: "nbcnews"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    serviceKey: "5608086763860174117",
                    assetMetadata: {
                        channelId: "MSNBC",
                        channelName: "msnbc",
                        programmeId: "MSNBC",
                        programmeTitle: "msnbc",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(msnbc)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(msnbc)/master.mpd"
                        }
                    }
                }
            },
            TODAY_ALL_DAY: {
                initializationOptions: {
                    appBrand: "today",
                    appName: "nbcnews"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    serviceKey: "7989219137174638117",
                    assetMetadata: {
                        channelId: "Today",
                        channelName: "today_all_day",
                        programmeId: "Today",
                        programmeTitle: "today_all_day",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(todayallday)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(todayallday)/master.mpd"
                        }
                    }
                }
            },
            CNBC: {
                initializationOptions: {
                    appBrand: "cnbc",
                    appName: "cnbc"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    serviceKey: "5724738528402108117",
                    assetMetadata: {
                        channelId: "CNBC",
                        channelName: "cnbc",
                        programmeId: "CNBC",
                        programmeTitle: "cnbc",
                        duration: 0,
                        brand: "CNBC"
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd.akamaized.net/Content/CMAF_OL1-CBC-4s/Live/channel(cnbc)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(cnbc)/master.mpd"
                        }
                    }
                }
            },
            CNBC_PRO: {
                initializationOptions: {
                    appBrand: "cnbcpro",
                    appName: "cnbc"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    serviceKey: "5724738528402108117",
                    assetMetadata: {
                        channelId: "CNBC Pro",
                        channelName: "cnbc_pro",
                        programmeId: "CNBC Pro",
                        programmeTitle: "cnbc_pro",
                        duration: 0,
                        brand: "CNBC"
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CBC-4s-v2/Live/channel(cnbc)/master_30min.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CBC-4s-v2/Live/channel(cnbc)/master_30min.mpd"
                        }
                    }
                }
            },
            CNBC_GLOBAL: {
                initializationOptions: {
                    appBrand: "cnbcplus",
                    appName: "cnbc"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    serviceKey: "",
                    assetMetadata: {
                        channelId: "",
                        channelName: "",
                        programmeId: "",
                        programmeTitle: "",
                        duration: 0,
                        brand: ""
                    },
                    assetByType: {
                        hlsCBCS: {
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CBC-4s-v2/Live/channel(cnbcpwog)/master_30min.m3u8",
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            }
                        },
                        dash: {
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s-v2/Live/channel(cnbcpwog)/master_30min.mpd",
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            }
                        }
                    }
                }
            },
            CNBC_DATA: {
                initializationOptions: {
                    appBrand: "cnbc",
                    appName: "cnbc"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    adsEnabled: !1,
                    serviceKey: "",
                    assetMetadata: {
                        channelId: "",
                        channelName: "",
                        programmeId: "",
                        programmeTitle: "",
                        duration: 0,
                        brand: ""
                    },
                    assetByType: {
                        hlsCBCS: {
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CBC-4s-v2/Live/channel(cnbcpwithg)/master_30min.m3u8",
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            }
                        },
                        dash: {
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s-v2/Live/channel(cnbcpwithg)/master_30min.mpd",
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            }
                        }
                    }
                }
            },
            CNBC_FULLEPISODE: {
                initializationOptions: {
                    appBrand: "cnbc",
                    appName: "cnbc"
                },
                streamConfig: {
                    playbackType: "VOD",
                    serviceKey: "",
                    assetMetadata: {
                        channelId: "CNBC FULL EPISODE",
                        channelName: "cnbc_full_episode",
                        programmeId: "",
                        programmeTitle: "",
                        duration: 0,
                        brand: "CNBC",
                        type: "ASSET/EPISODE"
                    },
                    adsEnabled: {
                        midRollAdEnabled: !0,
                        preRollAdEnabled: !0
                    },
                    assetByType: {
                        hlsCBCS: {
                            url: "",
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "not_required"
                            }
                        },
                        dash: {
                            url: "",
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "not_required"
                            }
                        }
                    }
                }
            },
            NOTICIAS_AHORA: {
                initializationOptions: {
                    appBrand: "telemundo",
                    appName: "nbcnews"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    keyId: "nota",
                    serviceKey: "7536064712744877117",
                    assetMetadata: {
                        channelId: "Noticias Telemundo Ahora",
                        channelName: "noticias_telemundo_ahora",
                        programmeId: "Noticias Telemundo Ahora",
                        programmeTitle: "noticias_telemundo_ahora",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(nota)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(nota)/master.mpd"
                        }
                    }
                }
            },
            DATELINE: {
                initializationOptions: {
                    appBrand: "nbcnews",
                    appName: "nbcnews"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    keyId: "dateline",
                    serviceKey: "7509458937090982117",
                    assetMetadata: {
                        channelId: "Dateline",
                        channelName: "dateline",
                        programmeId: "Dateline",
                        programmeTitle: "dateline_247",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(dateline)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(dateline)/master.mpd"
                        }
                    }
                }
            },
            SKY_NEWS: {
                initializationOptions: {
                    appBrand: "nbcnews",
                    appName: "nbcnews"
                },
                streamConfig: {
                    playbackType: eA.Live,
                    keyId: "skynews",
                    serviceKey: "4718718353051323117",
                    assetMetadata: {
                        channelId: "SkyNews",
                        channelName: "sky_news",
                        programmeId: "SkyNews",
                        programmeTitle: "skynews",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(skynews)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(skynews)/master.mpd"
                        }
                    }
                }
            },
            TELEMUNDO_AL_DIA: {
                initializationOptions: {
                    appName: "nbcnews",
                    appBrand: "telemundo"
                },
                streamConfig: {
                    serviceKey: "6550706683944612117",
                    playbackType: eA.Live,
                    keyId: "telemundoaldia",
                    assetMetadata: {
                        channelId: "Telemundo Al Dia",
                        channelName: "telemundo_al_dia",
                        programmeId: "Telemundo Al Dia",
                        programmeTitle: "telemundo_al_dia",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd.akamaized.net/Content/CMAF_OL2-CBC-4s/Live/channel(telemundoaldia)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://live-oneapp-prd.akamaized.net/Content/CMAF_OL2-CTR-4s/Live/channel(telemundoaldia)/master.mpd"
                        }
                    }
                }
            },
            TELEMUNDO_DEPORTES_AHORA: {
                initializationOptions: {
                    appName: "nbcnews",
                    appBrand: "telemundo"
                },
                streamConfig: {
                    serviceKey: "5923023667697108117",
                    playbackType: eA.Live,
                    keyId: "telemundodeportes",
                    assetMetadata: {
                        channelId: "Telemundo Deportes Ahora",
                        channelName: "telemundo_deportes_ahora",
                        programmeId: "Telemundo Deportes Ahora",
                        programmeTitle: "telemundo_deportes_ahora",
                        duration: 0
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://g001-live-us-cmaf-prd-ak.pcdn03.cssott.com/Content/CMAF_OL2-CBC-4s/Live/channel(telemundodeportes)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://g001-live-us-cmaf-prd-ak.pcdn03.cssott.com/Content/CMAF_OL2-CTR-4s/Live/channel(telemundodeportes)/master.mpd"
                        }
                    }
                }
            },
            NBC_SPORTS: {
                initializationOptions: {
                    appName: "nbcnews",
                    appBrand: "nbcnews"
                },
                streamConfig: {
                    serviceKey: "7938226791344603117",
                    playbackType: eA.Live,
                    keyId: "nbcsportspeacock",
                    assetMetadata: {
                        channelId: "NBC Sports NOW",
                        channelName: "nbc_sports_now",
                        programmeId: "NBC Sports NOW",
                        programmeTitle: "nbc_sports",
                        duration: 600
                    },
                    assetByType: {
                        hlsCBCS: {
                            transport: eN.StreamTransport.HLS,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-hls-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://g001-live-us-cmaf-prd-ak.pcdn03.cssott.com/Content/CMAF_OL2-CBC-4s/Live/channel(nbcsportspeacock)/master.m3u8"
                        },
                        dash: {
                            transport: eN.StreamTransport.DASH,
                            container: eO.ISOBMFF,
                            adCompatibility: {
                                encodingProfile: "cmaf-dash-30fps-NBCS-Oneapp-v1"
                            },
                            url: "https://g001-live-us-cmaf-prd-ak.pcdn03.cssott.com/Content/CMAF_OL2-CTR-4s/Live/channel(nbcsportspeacock)/master.mpd"
                        }
                    }
                }
            }
        }
          , ek = eg()({
            NOTICIAS_AHORA: {
                streamConfig: {
                    assetByType: {
                        hlsCBCS: {
                            url: "https://g001-live-us-cmaf-stg-ak.scdn03.cssott.com/Content/CMAF_OL1-CBC-4s/Live/channel(nota)/master.m3u8"
                        },
                        dash: {
                            url: "https://g001-live-us-cmaf-stg-ak.scdn03.cssott.com/Content/CMAF_OL1-CTR-4s/Live/channel(nota)/master.mpd"
                        }
                    }
                }
            },
            TELEMUNDO_AL_DIA: {
                streamConfig: {
                    assetByType: {
                        hlsCBCS: {
                            url: "https://g001-live-us-cmaf-stg-ak.scdn03.cssott.com/Content/CMAF_OL1-CBC-4s/Live/channel(telemundoaldia)/master.m3u8"
                        },
                        dash: {
                            url: "https://g001-live-us-cmaf-stg-ak.scdn03.cssott.com/Content/CMAF_OL1-CTR-4s/Live/channel(telemundoaldia)/master.mpd"
                        }
                    }
                }
            },
            TELEMUNDO_DEPORTES_AHORA: {
                streamConfig: {
                    assetByType: {
                        hlsCBCS: {
                            url: "https://g001-live-us-cmaf-stg-ak.scdn03.cssott.com/Content/CMAF_OL1-CBC-4s/Live/channel(telemundodeportes)/master.m3u8"
                        },
                        dash: {
                            url: "https://g001-live-us-cmaf-stg-ak.scdn03.cssott.com/Content/CMAF_OL1-CTR-4s/Live/channel(telemundodeportes)/master.mpd"
                        }
                    }
                }
            }
        }, function(e, n) {
            return e_()({}, eB[n], e)
        })
          , eT = a(94116)
          , eL = function(e) {
            var n, a, t, i, o, r, s, l, d, p, u, m, v = e.containerRef;
            return t = void 0 !== (a = (n = {
                autoplayEnabled: e.autoplayEnabled,
                onMountRequest: e.onMountRequest,
                onAutoplayRequest: e.onAutoplayRequest,
                onMutedAutoplayRequest: e.onMutedAutoplayRequest
            }).autoplayEnabled) && a,
            i = n.onMountRequest,
            o = n.onAutoplayRequest,
            r = n.onMutedAutoplayRequest,
            l = (s = (0,
            Z.JX)()).play,
            d = s.pause,
            p = s.setMute,
            u = (0,
            eT.gg)().seekToLiveEdge,
            m = (0,
            c.useRef)(!1),
            (0,
            c.useEffect)(function() {
                A.A.getVideoStatus(function(e) {
                    e.pipActive && d()
                }),
                A.A.playbackAction(function(e) {
                    "play" === e ? (t || m.current) && l() : "pause" === e ? (m.current = !0,
                    d()) : "mute" === e ? (p(!0),
                    r(!0)) : "unmute" === e ? (p(!1),
                    r(!1)) : "seekToLiveEdge" === e ? u() : "mount" === e ? i(!0) : "unmount" === e ? i(!1) : "autoplay" === e ? o(!0) : "clickToPlay" === e && o(!1)
                })
            }, []),
            (0,
            c.useEffect)(function() {
                var e = v.current;
                if ("undefined" != typeof document && e && null !== A.A.getIosBridge()) {
                    var n = function() {
                        var e = !!document.pictureInPictureElement;
                        A.A.pipStatus(e)
                    }
                      , a = function() {
                        var a = e.querySelector("video");
                        return !!a && (a.addEventListener("enterpictureinpicture", n),
                        a.addEventListener("leavepictureinpicture", n),
                        n(),
                        !0)
                    };
                    if (!a()) {
                        var t = new MutationObserver(function() {
                            a() && t.disconnect()
                        }
                        );
                        return t.observe(e, {
                            childList: !0,
                            subtree: !0
                        }),
                        function() {
                            t.disconnect()
                        }
                    }
                }
            }, [v]),
            null
        }
          , ew = C()().publicRuntimeConfig.CONVIVA_ENVIRONMENT || "none";
        function eF(e, n) {
            return eI.apply(this, arguments)
        }
        function eI() {
            return (eI = (0,
            t._)(function(e, n) {
                var a, t;
                return (0,
                s.__generator)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        var o, r, s;
                        a = "".concat((r = (o = C()()).serverRuntimeConfig.API_URL_SERVICES_SERVER,
                        s = o.publicRuntimeConfig.API_URL_SERVICES_PUBLIC,
                        (0,
                        f.stripTrailingSlash)(r || s)), "/signLicenseRequest?ts=").concat(e, "&drmType=").concat(n),
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        [4, fetch(a, {
                            cache: "no-store"
                        })];
                    case 2:
                        return [2, i.sent().json()];
                    case 3:
                        throw t = i.sent(),
                        (0,
                        b.vV)("[Default Error Message] ".concat(t, ", ").concat("Error in LinearVideoPlayer signRequest"), "500"),
                        t;
                    case 4:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        var eM = function(e) {
            var n = e.isChromeless
              , a = e.iosBridge
              , t = e.vertical;
            return !!n && !!a && t === B.NEWS
        };
        function eE(e) {
            var n, a, d, p = e.stream, h = e.mvpdHash, C = e.autoplay, f = void 0 !== C && C, B = e.mutedAutoplay, T = e.stickyEnabled, L = void 0 !== T && T, R = e.hasClickedToPlay, P = e.updateIsVideoPlaying, D = void 0 === P ? function() {}
            : P, x = e.onStuckChange, H = e.noStuckChangeInFullscreen, V = e.playmakerArt, j = m(), z = (0,
            O.o)().data;
            n = {
                platform: "platform",
                atts: "fwAtts",
                adconsent: "deviceAdvertisingTrackingConsent",
                did: "deviceAdvertisingId",
                adidtype: "deviceAdvertisingIdType",
                gpp: "gpp",
                gppsid: "gppSid",
                usprivacy: "usPrivacy"
            },
            (0,
            c.useEffect)(function() {
                try {
                    if (!window[ef]) {
                        window[ef] = !0;
                        var e = (0,
                        et.o0)()
                          , a = window.fetch;
                        window.fetch = (0,
                        t._)(function() {
                            var t, o, l, c, d, p, u, m, v, h, C, f, y = arguments;
                            return (0,
                            s.__generator)(this, function(s) {
                                for (t = y.length,
                                o = Array(t),
                                l = 0; l < t; l++)
                                    o[l] = y[l];
                                return d = (c = (0,
                                r._)(o, 2))[0],
                                p = c[1],
                                String(d).includes("freewheel-params") && (v = (m = (u = new URL(String(d))).searchParams).get("platform"),
                                ["crios", "fxios", "ios-webview"].includes((null == e ? void 0 : e.name) || "") && "safari" !== v && (m.set("platform", "safari"),
                                d = u),
                                window.location.search && (h = new URL(window.location.href).searchParams,
                                Object.entries(n).forEach(function(e) {
                                    var n = (0,
                                    r._)(e, 2)
                                      , a = n[0]
                                      , t = n[1];
                                    if (h.has(a)) {
                                        var i = h.get(a);
                                        h.delete(a),
                                        h.set(t, i)
                                    }
                                }),
                                h.forEach(function(e, a) {
                                    Object.values(n).includes(a) && m.set(a, e)
                                }),
                                d = u),
                                window.__liveVideoParameters && (C = "object" === (0,
                                eC._)(window.__liveVideoParameters) ? window.__liveVideoParameters : JSON.parse(window.__liveVideoParameters),
                                f = new URLSearchParams((0,
                                i._)({}, Object.fromEntries(m), C)),
                                Object.entries(n).forEach(function(e) {
                                    var n = (0,
                                    r._)(e, 2)
                                      , a = n[0]
                                      , t = n[1];
                                    if (f.has(a)) {
                                        var i = f.get(a);
                                        f.delete(a),
                                        f.set(t, i)
                                    }
                                }),
                                f.forEach(function(e, n) {
                                    m.set(n, e)
                                }),
                                d = u)),
                                [2, a(d, p)]
                            })
                        })
                    }
                } catch (e) {
                    console.error("Error monkey-patching fetch", e)
                }
            }, []);
            var q = (0,
            ey.Q)()
              , U = (0,
            v.x)()
              , K = (0,
            N.Cn)().vertical
              , W = (0,
            r._)((0,
            c.useState)(!1), 2)
              , Y = W[0]
              , J = W[1]
              , G = (0,
            r._)((0,
            c.useState)(!1), 2)
              , Q = G[0]
              , X = G[1]
              , $ = (0,
            r._)((0,
            c.useState)({}), 2)
              , Z = $[0]
              , ee = $[1]
              , eo = (0,
            r._)((0,
            c.useState)(""), 2)
              , er = eo[0]
              , ec = eo[1]
              , ed = (0,
            r._)((0,
            c.useState)(!1), 2)
              , ep = ed[0]
              , em = ed[1]
              , ev = (0,
            r._)((0,
            c.useState)(!0), 2)
              , eS = ev[0]
              , eg = ev[1]
              , eb = (0,
            r._)((0,
            c.useState)(!0), 2)
              , e_ = eb[0]
              , eO = eb[1]
              , eA = (0,
            c.useRef)(null)
              , eN = (0,
            k.Jp)()
              , eT = null == eN ? void 0 : eN["use-staging-streams"]
              , eI = (0,
            u.d4)(function(e) {
                return e.shared.isChromeless
            });
            (0,
            c.useEffect)(function() {
                try {
                    var e, n;
                    ec((null === (n = BI) || void 0 === n ? void 0 : null === (e = n.userInfo) || void 0 === e ? void 0 : e.get("mpid")) || (0,
                    _.A)())
                } catch (e) {
                    ec((0,
                    _.A)())
                }
            }, []);
            var eE = (0,
            i._)({}, null === (a = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return n ? ek[e] : eB[e]
            }(p, eT)) || void 0 === a ? void 0 : a.streamConfig, U ? {
                adsEnabled: !1
            } : {})
              , eR = A.A.getIosBridge()
              , eP = eM({
                isChromeless: eI,
                iosBridge: eR,
                vertical: K
            });
            if (q)
                return (0,
                l.jsx)(el.g, {
                    slateType: "geo-restricted",
                    heading: "We’re sorry.",
                    details: "You are not authorized to access this content from outside of the US and its territories."
                });
            var eD = j ? (0,
            l.jsxs)(S.d, {
                className: "omega_videoContainer",
                ref: eA,
                stickyEnabled: !0,
                children: [(0,
                l.jsx)(I, {}), (0,
                l.jsx)(M, {
                    signRequest: eF,
                    usPrivacy: ["ios-webview", "android", "chromium-webview", "edge-ios"].includes(null == ei ? void 0 : ei.name) ? "1YYN" : (0,
                    ea.Tk)() || "1---",
                    mutedAutoplay: eI ? e_ : void 0 !== B && B,
                    streamConfig: eE,
                    initializationOptions: null === (d = eB[p]) || void 0 === d ? void 0 : d.initializationOptions,
                    mvpdHash: void 0 === h ? "" : h,
                    onVideoControllerReady: function() {
                        J(!0),
                        D(!0)
                    },
                    gpp: z,
                    autoplay: (f || void 0 !== R && R) && (!eI || eS),
                    mParticleId: er,
                    convivaEnvironment: ew
                }), !Q && Y && (0,
                l.jsx)(es, {
                    isReady: Y
                }), (0,
                l.jsx)(E, {
                    showPipButton: !0,
                    onFullScreenRequest: eP ? function() {
                        return A.A.viewFullScreenLiveStream(eR)
                    }
                    : null
                }), (0,
                l.jsx)(F, {})]
            }) : null;
            return !j || ep ? null : (0,
            l.jsx)(S.d, {
                "data-testid": "omega-video-player",
                className: "omega-container",
                children: (0,
                l.jsxs)(g.t, {
                    errorHandler: function() {
                        return (0,
                        l.jsx)(eu, {
                            coreVideoReady: Y,
                            hasError: !0,
                            errorCause: Z,
                            stream: p
                        })
                    },
                    errorLogger: b.vV,
                    children: [(0,
                    l.jsx)(eu, {
                        coreVideoReady: Y,
                        hasError: Q,
                        stream: p,
                        errorCause: Z,
                        playmakerArt: void 0 === V ? "" : V
                    }), (0,
                    l.jsxs)(w, {
                        onError: function(e) {
                            var n = e.error
                              , a = e.context;
                            (0,
                            b.vV)(n, (0,
                            o._)((0,
                            i._)({}, a), {
                                stream: p,
                                cause: n.cause
                            })),
                            X(!0),
                            ee(n.cause)
                        },
                        videoContainerRef: eA,
                        onNonFatalError: function(e) {
                            var n = e.error
                              , a = e.context;
                            (0,
                            b.vV)(n, (0,
                            o._)((0,
                            i._)({}, a), {
                                stream: p,
                                cause: n.cause
                            }))
                        },
                        children: [!Q && !Y && (0,
                        l.jsx)(es, {
                            isReady: Y
                        }), (0,
                        l.jsx)(eh, {
                            isStickyEnabled: L || !1
                        }), (0,
                        l.jsx)("div", {
                            className: "omega_aspectRatioContainer",
                            children: L && (!eI || y.A.isAndroidWebView()) ? (0,
                            l.jsx)(en, {
                                onStuckChange: void 0 === x ? function() {}
                                : x,
                                noStuckChangeInFullscreen: void 0 !== H && H,
                                children: eD
                            }) : eD
                        }), eI && (0,
                        l.jsx)(eL, {
                            autoplayEnabled: f,
                            containerRef: eA,
                            onMountRequest: function(e) {
                                return em(!e)
                            },
                            onAutoplayRequest: function(e) {
                                return eg(e)
                            },
                            onMutedAutoplayRequest: function(e) {
                                eO(e)
                            }
                        })]
                    })]
                })
            })
        }
        function eR() {
            return (eR = (0,
            t._)(function(e) {
                var n, a;
                return (0,
                s.__generator)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 3, , 4]),
                        [4, fetch(e)];
                    case 1:
                        if (!(n = t.sent()).ok)
                            throw Error("Bento API request failed: ".concat(n.status, " ").concat(n.statusText));
                        return [4, n.json()];
                    case 2:
                        return [2, t.sent()];
                    case 3:
                        throw console.error("fetchBentoData error:", a = t.sent()),
                        a;
                    case 4:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        var eP = function(e) {
            var n = e.id
              , a = e.headline
              , t = void 0 === a ? "" : a
              , i = e.description
              , o = e.publisher
              , r = void 0 === o ? "" : o;
            return {
                id: "".concat(n, "-fallback"),
                headline: {
                    primary: t
                },
                description: {
                    primary: void 0 === i ? "" : i
                },
                publisher: {
                    name: r
                },
                primaryImage: {
                    id: "",
                    headline: {
                        primary: ""
                    },
                    caption: "",
                    altText: t,
                    url: {
                        primary: "",
                        slug: "",
                        short: ""
                    },
                    encodingFormat: "",
                    height: 0,
                    width: 0,
                    authors: [],
                    source: {
                        name: r
                    },
                    graphicContent: !1
                },
                duration: 0,
                videoAssets: [],
                mpxMetadata: {
                    guid: "".concat(n, "-fallback-guid"),
                    mpxId: "".concat(n, "-fallback-mpx")
                },
                url: {
                    primary: "",
                    slug: "",
                    short: ""
                },
                playable: !0
            }
        }
          , eD = {
            baseBentoUrl: "https://www.nbcnews.com",
            ids: {
                DATELINE: "248670277649",
                NBC_SPORTS: "248672325694",
                NEWS_NOW: "248671301631",
                NOTICIAS_AHORA: "248672325771",
                SKY_NEWS: "248671301664",
                TELEMUNDO_DEPORTES_AHORA: "248672837934",
                TODAY_ALL_DAY: "248670277645"
            }
        }
          , ex = {
            DATELINE: {
                fallbackProps: {
                    id: "dateline",
                    headline: "Dateline",
                    description: "Dateline 247",
                    publisher: "NBC News"
                }
            },
            NBC_SPORTS: {
                fallbackProps: {
                    id: "nbc-sports",
                    headline: "NBC Sports NOW",
                    description: "Live streaming coverage from NBC Sports NOW",
                    publisher: "NBC Sports"
                }
            },
            NEWS_NOW: {
                fallbackProps: {
                    id: "news-now",
                    headline: "NBC News Now",
                    description: "Live streaming news coverage from NBC News Now",
                    publisher: "NBC News"
                }
            },
            NOTICIAS_AHORA: {
                fallbackProps: {
                    id: "noticias-ahora",
                    headline: "Noticias Telemundo AHORA",
                    description: "Las \xfaltimas noticias y las historias m\xe1s importantes para la comunidad latina.",
                    publisher: "NBC News"
                }
            },
            SKY_NEWS: {
                fallbackProps: {
                    id: "sky-news",
                    headline: "Sky News",
                    description: "Sky News Live",
                    publisher: "Sky News"
                }
            },
            TELEMUNDO_DEPORTES_AHORA: {
                fallbackProps: {
                    id: "telemundo-deportes",
                    headline: "Telemundo Deportes AHORA",
                    description: "Telemundo Deportes AHORA Live",
                    publisher: "Telemundo"
                }
            },
            TODAY_ALL_DAY: {
                fallbackProps: {
                    id: "today-all-day",
                    headline: "TODAY All Day",
                    description: "TODAY All Day is a 24/7 streaming channel from NBC News where viewers can find everything they love about TODAY.",
                    publisher: "Today"
                }
            }
        };
        function eH(e) {
            var n = e.stream
              , a = e.autoplay
              , u = e.mutedAutoplay
              , m = e.stickyEnabled
              , v = e.hasClickedToPlay
              , h = e.mvpdHash
              , C = e.updateIsVideoPlaying
              , f = e.onStuckChange
              , y = e.noStuckChangeInFullscreen
              , g = e.playmakerArt
              , b = (0,
            d.T)()
              , _ = (0,
            k.Jp)()
              , O = (null == _ ? void 0 : _["live-video-mpx-configuration"]) || eD
              , A = JSON.stringify(O)
              , N = (0,
            c.useMemo)(function() {
                var e, a = (e = (null == O ? void 0 : O.baseBentoUrl) || null,
                Object.fromEntries(Object.entries(ex).map(function(n) {
                    var a = (0,
                    r._)(n, 2)
                      , t = a[0]
                      , i = a[1].fallbackProps
                      , o = function(e, n) {
                        if (!e || !n)
                            return null;
                        var a = String(e).replace(/\/+$/, "");
                        return "".concat(a, "/bentoapi/video/mmvo").concat(n)
                    }(e, O && O.ids && (null == O ? void 0 : O.ids[t]) || null);
                    return [t, {
                        bentoUrl: o,
                        fallbackVideoData: eP(i)
                    }]
                }))), t = null;
                try {
                    t = a && n && a[n] || null
                } catch (e) {
                    t = null
                }
                return t
            }, [A, n])
              , B = (0,
            r._)((0,
            c.useState)(null), 2)
              , T = B[0]
              , L = B[1]
              , w = (0,
            r._)((0,
            c.useState)(!1), 2)
              , F = w[0]
              , I = w[1];
            (0,
            c.useEffect)(function() {
                var e = !1;
                function n() {
                    return (n = (0,
                    t._)(function() {
                        var n, a, t, r, l, c, d, p, u, m, v;
                        return (0,
                        s.__generator)(this, function(s) {
                            switch (s.label) {
                            case 0:
                                if (!(n = null == N ? void 0 : N.bentoUrl))
                                    return [3, 6];
                                I(!0),
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, 4, 5]),
                                [4, function(e) {
                                    return eR.apply(this, arguments)
                                }(n)];
                            case 2:
                                return l = Array.isArray(null == (r = s.sent()) ? void 0 : null === (t = r.data) || void 0 === t ? void 0 : null === (a = t.video) || void 0 === a ? void 0 : a.videoAssets) && r.data.video.videoAssets.length > 0 ? r.data.video.videoAssets[0] : null,
                                e || L(l ? (0,
                                o._)((0,
                                i._)({}, null == N ? void 0 : N.fallbackVideoData, r.data.video), {
                                    headline: (0,
                                    i._)({}, null == N ? void 0 : null === (c = N.fallbackVideoData) || void 0 === c ? void 0 : c.headline, null === (d = r.data.video) || void 0 === d ? void 0 : d.headline),
                                    description: (0,
                                    i._)({}, null == N ? void 0 : null === (p = N.fallbackVideoData) || void 0 === p ? void 0 : p.description, null === (u = r.data.video) || void 0 === u ? void 0 : u.description),
                                    publisher: (0,
                                    i._)({}, null == N ? void 0 : null === (m = N.fallbackVideoData) || void 0 === m ? void 0 : m.publisher, null === (v = r.data.video) || void 0 === v ? void 0 : v.publisher)
                                }) : null),
                                [3, 5];
                            case 3:
                                return console.error("Failed to fetch video data from Bento:", s.sent()),
                                e || L(null),
                                [3, 5];
                            case 4:
                                return e || I(!1),
                                [7];
                            case 5:
                                return [3, 7];
                            case 6:
                                L(null),
                                s.label = 7;
                            case 7:
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                return !function() {
                    n.apply(this, arguments)
                }(),
                function() {
                    e = !0
                }
            }, [n, null == N ? void 0 : N.bentoUrl, A]);
            var M = (null == N ? void 0 : N.fallbackVideoData) || null;
            return b ? (null == N ? void 0 : N.bentoUrl) && F ? (0,
            l.jsx)(S.d, {
                "data-testid": "bento-loading-container",
                className: "omega-container",
                children: (0,
                l.jsx)(es, {
                    isReady: !1
                })
            }) : (0,
            l.jsx)(p.C, {
                video: T || M,
                autoPlay: a,
                onlyAutoplayMuted: u,
                isEmbedded: !1,
                useEmbeddedAds: !1,
                hideVideoTitle: !0
            }) : (0,
            l.jsx)(eE, {
                stream: n,
                autoplay: a,
                mutedAutoplay: u,
                stickyEnabled: m,
                hasClickedToPlay: v,
                mvpdHash: h,
                updateIsVideoPlaying: C,
                onStuckChange: f,
                noStuckChangeInFullscreen: y,
                playmakerArt: g
            })
        }
    }
    ,
    58537: () => {}
    ,
    66832: () => {}
    ,
    82646: (e, n, a) => {
        "use strict";
        a.d(n, {
            g: () => l
        });
        var t = a(37876);
        a(14232);
        var i = a(95062)
          , o = a.n(i)
          , r = a(96896)
          , s = a.n(r)
          , l = function(e) {
            var n = e.slateType
              , a = e.heading
              , i = e.details;
            return (0,
            t.jsxs)("div", {
                className: "".concat(s()[n], " ").concat(s().slate),
                children: [(0,
                t.jsx)("p", {
                    className: s().mainMessage,
                    children: a
                }), (0,
                t.jsx)("p", {
                    className: s().detailedMessage,
                    children: i
                })]
            })
        };
        l.propTypes = {
            slateType: o().string.isRequired,
            heading: o().string.isRequired,
            details: o().string.isRequired
        }
    }
    ,
    91096: (e, n, a) => {
        "use strict";
        a.d(n, {
            Q: () => r
        });
        var t = a(21737)
          , i = (0,
        a(33729).H)({
            key: "live-player-geo-restricted",
            name: "omega"
        }).hook
          , o = ["US", "AS", "GU", "MP", "PR", "VI"];
        function r() {
            var e = (0,
            t.aL)().geoLocation
              , n = i()
              , a = o.includes(void 0 === e ? "US" : e);
            return n && !a
        }
    }
    ,
    96896: e => {
        e.exports = {
            slate: "styles_slate__d64wy",
            detailedMessage: "styles_detailedMessage__MUuDc",
            mainMessage: "styles_mainMessage__Yv_km",
            "connection-error-slate": "styles_connection-error-slate__3SGly"
        }
    }
}]);
