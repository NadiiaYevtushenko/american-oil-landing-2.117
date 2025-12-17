(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6949], {
    2168: (e, t, n) => {
        "use strict";
        n.d(t, {
            w: () => M
        });
        var a = n(16927)
          , i = n(45526)
          , r = n(67684)
          , o = n(20294)
          , s = n(4902)
          , c = n(37876);
        n(14232);
        var l = n(15039)
          , d = n.n(l)
          , u = n(95062)
          , m = n.n(u)
          , h = n(48011)
          , p = n(89099)
          , f = n(4792)
          , _ = n(89933)
          , v = n(22844)
          , b = n(21737)
          , y = function(e) {
            var t = new URL(e)
              , n = t.hash.substring(1);
            if (!n)
                return e;
            var a = new URLSearchParams(t.searchParams);
            return a.set("post", n),
            t.search = a,
            t.toString()
        }
          , g = function(e) {
            var t = e.pageRegion
              , n = void 0 === t ? "not-set" : t
              , a = e.componentName
              , i = e.componentTitle
              , r = i ? i.toLowerCase().replace(/ /g, "-") : "";
            return r ? "".concat(a, "-").concat(n, "-").concat(r) : "".concat(a, "-").concat(n)
        }
          , x = n(23548)
          , N = n(34846)
          , k = n(87663)
          , j = n(78804)
          , T = n(94844)
          , w = n(17940)
          , D = n.n(w)
          , S = {
            pinterest: function(e) {
                var t = e.url
                  , n = e.cidEventNamePrefix;
                return "http://pinterest.com/pin/create/link/?url=".concat(decodeURI(t), "&cid=").concat(n, "_pinterest")
            },
            facebook: function(e) {
                var t = e.url
                  , n = e.cidEventNamePrefix;
                return "https://www.facebook.com/sharer/sharer.php?u=".concat(decodeURI(t), "&cid=").concat(n, "_facebook")
            },
            twitter: function(e) {
                var t = e.url
                  , n = e.headline
                  , a = e.via
                  , i = e.cidEventNamePrefix;
                return "https://x.com/intent/post?text=".concat(encodeURIComponent(n), "&via=").concat(a, "&url=").concat(decodeURI(t), "&original_referer=").concat(decodeURI(t), "&cid=").concat(i, "_twitter")
            },
            email: function(e) {
                var t = e.url
                  , n = e.headline;
                return "mailto:?subject=".concat(n, "&body=").concat(decodeURI(t))
            },
            sms: function(e) {
                var t = e.url
                  , n = e.headline
                  , a = e.publisher;
                return "sms:?&body=".concat(n, " via ").concat(a, " - ").concat(t)
            }
        }
          , A = {
            facebook: !0,
            twitter: !0,
            pinterest: !1,
            email: !0,
            copy: !0,
            embed: !1,
            sms: !0,
            print: !1,
            save: !0,
            shareThis: !1,
            remove: !1
        }
          , M = function(e) {
            var t, n, l, u = e.url, m = e.headline, w = e.pageRegion, M = void 0 === w ? "article-top" : w, C = e.trackingEventName, E = e.cidEventNamePrefix, I = e.actions, P = e.contentId, R = e.icid, O = e.tooltipAlign, F = e.useAriaLabelHeadline, Y = e.addClassName, L = (0,
            p.useRouter)().query.page, H = (0,
            b.Cn)().isToday, U = (0,
            N.Bd)().t, q = (0,
            j.YK)(), z = (0,
            h.d4)(function(e) {
                var t, n, a, i, r, o, s, c = e.article, l = e.video;
                return "article" === L ? null !== (o = null == c ? void 0 : null === (a = c.content) || void 0 === a ? void 0 : null === (n = a[0]) || void 0 === n ? void 0 : null === (t = n.publisher) || void 0 === t ? void 0 : t.name) && void 0 !== o ? o : "" : "video" === L && null !== (s = null == l ? void 0 : null === (r = l.current) || void 0 === r ? void 0 : null === (i = r.publisher) || void 0 === i ? void 0 : i.name) && void 0 !== s ? s : ""
            }), J = (0,
            h.d4)(function(e) {
                return e.shared.socialMediaProfiles
            }), K = (0,
            v.al)(J), B = (0,
            k.GP)(function(e) {
                return e.deleteBookmark
            }), G = (0,
            o._)((0,
            b.Cj)(1500), 2), Q = G[0], W = G[1], X = (0,
            o._)((0,
            b.Cj)(1500), 2), Z = X[0], V = X[1], $ = (0,
            o._)((0,
            b.Cj)(1500), 2), ee = $[0], et = $[1], en = (void 0 === E ? {} : E) || C, ea = (0,
            b.z1)(C), ei = g({
                pageRegion: M,
                componentName: "social-share-links"
            }), er = (0,
            r._)({}, A, void 0 === I ? {} : I), eo = (t = (0,
            a._)(function() {
                return (0,
                s.__generator)(this, function(e) {
                    return B({
                        contentId: P,
                        customerId: q
                    }),
                    ea({
                        platform: "remove"
                    }),
                    [2]
                })
            }),
            function() {
                return t.apply(this, arguments)
            }
            ), es = "Share to", ec = void 0 !== F && F ? ", ".concat(m) : "";
            return (0,
            c.jsxs)("ul", {
                className: d()(void 0 === Y ? "" : Y, D().container, "social-share-menu__container"),
                "data-activity-map": ei,
                "data-testid": "social-share-menu",
                children: [er.shareThis && (0,
                c.jsx)("li", {
                    className: D().shareThis,
                    "data-testid": "social-share-share-this",
                    children: "".concat(U("Share this"), " -")
                }), er.facebook ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-facebook",
                    className: d()(D().item, D().facebook),
                    children: (0,
                    c.jsx)(f.A, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: S.facebook({
                            url: u,
                            cidEventNamePrefix: en
                        }),
                        className: D().link,
                        onClick: function() {
                            return ea({
                                platform: "facebook"
                            })
                        },
                        "aria-label": "".concat(es, " Facebook").concat(ec),
                        "data-icid": R,
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-share-facebook"),
                            "aria-hidden": !0
                        })
                    })
                }) : null, er.twitter ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-twitter",
                    className: d()(D().item, D().twitter),
                    children: (0,
                    c.jsx)(f.A, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: S.twitter({
                            url: u,
                            headline: m,
                            via: K,
                            cidEventNamePrefix: en
                        }),
                        className: D().link,
                        onClick: function() {
                            return ea({
                                platform: "twitter"
                            })
                        },
                        "aria-label": "".concat(es, " X").concat(ec),
                        "data-icid": R,
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-twitter"),
                            "aria-hidden": !0
                        })
                    })
                }) : null, er.pinterest ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-pinterest",
                    className: d()(D().item, D().pinterest),
                    children: (0,
                    c.jsx)(f.A, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: S.pinterest({
                            url: u,
                            headline: m,
                            cidEventNamePrefix: en
                        }),
                        className: D().link,
                        onClick: function() {
                            return ea({
                                platform: "pinterest"
                            })
                        },
                        "aria-label": "".concat(es, " Pinterest").concat(ec),
                        "data-icid": R,
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-share-pinterest"),
                            "aria-hidden": !0
                        })
                    })
                }) : null, er.email ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-email",
                    className: d()(D().item, D().email),
                    children: (0,
                    c.jsx)(f.A, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: S.email({
                            url: u,
                            headline: m
                        }),
                        className: D().link,
                        onClick: function() {
                            return ea({
                                platform: "email"
                            })
                        },
                        "aria-label": "Email link".concat(ec),
                        "data-icid": R,
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-share-email"),
                            "aria-hidden": !0
                        })
                    })
                }) : null, er.copy ? (0,
                c.jsxs)("li", {
                    "data-testid": "social-share-copy",
                    className: d()("dn db-m share-list__copy_icon", D().item, D().copy),
                    children: [(0,
                    c.jsx)("button", {
                        type: "button",
                        className: D().button,
                        onClick: function(e) {
                            return (ea({
                                platform: "copy"
                            }),
                            e.altKey && e.shiftKey) ? et(y(u)) : W(u)
                        },
                        "aria-label": "Copy link".concat(ec),
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-link"),
                            "aria-hidden": !0
                        })
                    }), (0,
                    c.jsxs)("div", {
                        className: d()(D().copyTooltip, (l = {},
                        (0,
                        i._)(l, D().success, Q || ee),
                        (0,
                        i._)(l, D().alignRight, "right" === (void 0 === O ? "center" : O)),
                        l)),
                        children: [H ? (0,
                        c.jsx)("span", {
                            className: "icon icon-check"
                        }) : (0,
                        c.jsx)("span", {
                            className: "icon icon-alt-check"
                        }), Q ? (0,
                        c.jsx)("span", {
                            className: D().text,
                            "data-testid": "link-copied",
                            children: "".concat(U(x.LINK_COPIED_TEXT))
                        }) : null, ee ? (0,
                        c.jsx)("span", {
                            className: D().text,
                            "data-testid": "share-link-copied",
                            children: "".concat(U(x.SHARE_LINK_COPIED_TEXT))
                        }) : null]
                    })]
                }) : null, (null === (n = er.embed) || void 0 === n ? void 0 : n.path) ? (0,
                c.jsxs)("li", {
                    "data-testid": "social-share-embed ",
                    className: d()("dn", "db-m", D().item, D().embed),
                    children: [(0,
                    c.jsx)("button", {
                        type: "button",
                        className: D().button,
                        onClick: function() {
                            ea({
                                platform: "embed"
                            });
                            var e = window.location
                              , t = e.protocol
                              , n = e.host
                              , a = (0,
                            _.stripLeadingSlash)(er.embed.path);
                            V("<iframe loading='lazy' width='560' height='315' src='".concat(t, "//").concat(n, "/").concat(a, "' scrolling='no' frameborder='0' allowfullscreen></iframe>"))
                        },
                        "aria-label": "Copy embed code".concat(ec),
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-embed"),
                            "aria-hidden": !0
                        })
                    }), (0,
                    c.jsxs)("div", {
                        className: d()(D().embedTooltip, (0,
                        i._)({}, D().success, Z)),
                        children: [H ? (0,
                        c.jsx)("span", {
                            className: "icon icon-check"
                        }) : (0,
                        c.jsx)("span", {
                            className: "icon icon-alt-check"
                        }), (0,
                        c.jsx)("span", {
                            className: D().text,
                            children: "".concat(U(x.EMBED_COPIED_TEXT))
                        })]
                    })]
                }) : null, er.sms ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-sms",
                    className: d()(D().item, D().sms),
                    children: (0,
                    c.jsx)(f.A, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: S.sms({
                            url: u,
                            headline: m,
                            publisher: z
                        }),
                        className: D().link,
                        onClick: function() {
                            return ea({
                                platform: "sms"
                            })
                        },
                        "data-icid": R,
                        "aria-label": "".concat(es, " SMS").concat(ec),
                        children: (0,
                        c.jsx)("span", {
                            className: "icon icon-sms",
                            "aria-hidden": !0
                        })
                    })
                }) : null, er.print ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-print",
                    className: d()(D().print),
                    children: (0,
                    c.jsxs)("button", {
                        type: "button",
                        className: D().button,
                        onClick: function() {
                            window.print && (ea({
                                platform: "print"
                            }),
                            window.print())
                        },
                        children: [(0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-share-print", D().icon),
                            "aria-hidden": !0
                        }), (0,
                        c.jsx)("span", {
                            className: D().text,
                            children: "Print"
                        })]
                    })
                }) : null, P && er.save ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-save",
                    className: D().save,
                    children: (0,
                    c.jsx)(T.e, {
                        contentId: P,
                        contentType: L,
                        options: M
                    })
                }) : null, P && er.remove ? (0,
                c.jsx)("li", {
                    "data-testid": "social-share-remove",
                    className: d()(D().remove, "share__remove", D().item),
                    children: (0,
                    c.jsx)("button", {
                        type: "button",
                        className: D().button,
                        onClick: eo,
                        children: (0,
                        c.jsx)("span", {
                            className: d()("icon", "icon-remove", D().icon)
                        })
                    })
                }) : null]
            })
        };
        M.propTypes = {
            url: m().string.isRequired,
            headline: m().string.isRequired,
            contentId: m().string,
            tooltipAlign: m().oneOf(["right", "center"]),
            pageRegion: m().string,
            trackingEventName: m().string.isRequired,
            cidEventNamePrefix: m().string,
            icid: m().string,
            addClassName: m().string,
            actions: m().shape({
                facebook: m().bool,
                twitter: m().bool,
                pinterest: m().bool,
                email: m().bool,
                copy: m().bool,
                embed: m().shape({
                    path: m().string.isRequired
                }),
                sms: m().bool,
                print: m().bool,
                save: m().bool
            }),
            useAriaLabelHeadline: m().bool
        }
    }
    ,
    17940: e => {
        e.exports = {
            container: "styles_container__GcKIQ",
            link: "styles_link__zhvMF",
            button: "styles_button__ZavSV",
            shareThis: "styles_shareThis__SxdQk",
            item: "styles_item__mbZKv",
            facebook: "styles_facebook__9umol",
            twitter: "styles_twitter__f6qbO",
            pinterest: "styles_pinterest__T_Jsk",
            copy: "styles_copy__qdnAE",
            embed: "styles_embed___lhld",
            sms: "styles_sms__cqTbv",
            print: "styles_print__e7UHp",
            icon: "styles_icon__ctpj5",
            text: "styles_text__cLeKs",
            save: "styles_save__LRpdT",
            remove: "styles_remove__NyMSm",
            copyTooltip: "styles_copyTooltip__BbAu3",
            embedTooltip: "styles_embedTooltip__3g7C8",
            alignRight: "styles_alignRight__9NeGF",
            success: "styles_success__GGafF",
            "live-dot-blink": "styles_live-dot-blink__JLQhQ",
            "fade-in": "styles_fade-in__4zYmr",
            "expand-in": "styles_expand-in__II940",
            "chatblog-expand-in": "styles_chatblog-expand-in__ZmtIb"
        }
    }
    ,
    30786: (e, t, n) => {
        "use strict";
        var a = n(37562)
          , i = n(25697)
          , r = n(56557)
          , o = n(20355)
          , s = n(71576)
          , c = n(64301)
          , l = n(21826);
        r.extend(s),
        r.extend(c),
        r.extend(o);
        var d = {
            1: "Jan.",
            2: "Feb.",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "Aug.",
            9: "Sept.",
            10: "Oct.",
            11: "Nov.",
            12: "Dec."
        }
          , u = Object.values(d)
          , m = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        }
          , h = Object.values(m)
          , p = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }
          , f = Object.values(p)
          , _ = function(e) {
            return a(String(e), 2, "0")
        }
          , v = function(e, t) {
            return e.findIndex(function(e) {
                return e.includes(t)
            })
        }
          , b = function() {
            return l.determine().name()
        }
          , y = {
            t: function(e) {
                return e
            }
        }
          , g = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y
              , i = n || {}
              , o = i.format
              , s = void 0 === o ? "M D YYYY" : o
              , c = i.useAP
              , l = i.commaAfterDay
              , u = i.commaAfterDayOfWeek
              , h = s.split(" ")
              , f = r(e);
            t && (f = f.tz(t));
            var _ = f.format(s).split(" ")
              , b = v(h, "M");
            if (-1 !== b) {
                var g = (void 0 === c || c ? d : m)[_[b]];
                _[b] = a.t(g, {
                    keySeparator: !1
                })
            }
            var x = v(h, "d");
            if (-1 !== x) {
                var N = _[x]
                  , k = a.t(p[N], {
                    keySeparator: !1
                });
                _[x] = "".concat(k).concat(void 0 === u || u ? "," : "")
            }
            var j = v(h, "D");
            if (-1 !== j) {
                var T = _[j];
                _[j] = "".concat(T).concat(void 0 === l || l ? "," : "")
            }
            return _.join(" ")
        }
          , x = function(e, t) {
            var n = r(e);
            return t && (n = n.tz(t)),
            n.format("h:mm A z")
        }
          , N = function(e) {
            try {
                var t, n, a, r = e;
                if ("string" == typeof r && (r.startsWith("PT") || (r = "PT".concat(r)),
                r = i(r)),
                !r)
                    return null;
                return {
                    hour: (t = r,
                    Math.floor(t / 36e5 % 24)),
                    minute: (n = r,
                    Math.floor(n / 6e4 % 60)),
                    second: (a = r,
                    Math.floor(a / 1e3 % 60))
                }
            } catch (e) {
                return null
            }
        }
          , k = function(e) {
            var t = N(e);
            if (!t)
                return null;
            var n = t.hour
              , a = t.minute
              , i = t.second
              , r = "";
            return n && n > 0 && (r += "".concat(n, " hour"),
            n > 1 && (r += "s")),
            a && a > 0 && (r += " ".concat(a, " minute"),
            a > 1 && (r += "s")),
            i && i > 0 && (r += " ".concat(i, " second"),
            i > 1 && (r += "s")),
            r = r.trim()
        };
        e.exports = {
            AP_MONTH_MAP: d,
            AP_MONTHS: u,
            MONTH_MAP: m,
            MONTHS: h,
            DAY_MAP: p,
            DAYS: f,
            addDays: function(e, t) {
                var n = new Date(e.valueOf());
                return n.setDate(n.getDate() + t),
                n
            },
            timeToSeconds: function(e) {
                var t = N(e);
                return t ? 3600 * t.hour + 60 * t.minute + t.second : 0
            },
            formatAsISO: function(e) {
                var t = new Date(e);
                return Number.isNaN(Date.parse(t)) ? "" : t.toISOString()
            },
            formatDuration: function(e) {
                var t = N(e);
                if (!t)
                    return null;
                var n = t.hour
                  , a = t.minute
                  , i = t.second;
                return n ? "".concat(_(n), ":").concat(_(a), ":").concat(_(i)) : "".concat(_(a), ":").concat(_(i))
            },
            getDateTime: function(e) {
                return new Date(e)
            },
            getDuration: N,
            getDurationString: k,
            getShortDurationString: function(e) {
                if (!e)
                    return null;
                var t = k(e);
                return t ? t = (t = (t = t.replace("minute", "min")).replace("hour", "hr")).includes("seconds") ? t.replace("seconds", "sec") : t.replace("second", "sec") : null
            },
            getFormattedDateString: g,
            getFormattedDateTimeString: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " / "
                  , a = arguments.length > 3 ? arguments[3] : void 0
                  , i = g(e, t, {}, a)
                  , r = x(e, t);
                return "".concat(i).concat(n).concat(r)
            },
            getFormattedDateYearString: function(e, t) {
                return g(e, t, {
                    format: "YYYY"
                })
            },
            getFormattedMonthAndDayString: function(e, t, n) {
                return g(e, t, {
                    format: "M D",
                    commaAfterDay: !1
                }, n)
            },
            getFormattedTimeString: x,
            getHourDifference: function(e, t) {
                return Math.abs(e - t) / 36e5
            },
            getRuntimeIANATimeZone: b,
            getSecondsElapsed: function(e) {
                return r().diff(e, "s")
            },
            hasExpired: function(e) {
                return new Date(parseInt(e, 10)) < new Date
            },
            isBefore: function(e, t) {
                var n = new Date(e);
                return Math.abs(Date.now() - n.getTime()) < t
            },
            parseDate: function(e, t) {
                t || (t = b());
                var n = r(e).tz(t);
                return {
                    year: n.year(),
                    month: n.month(),
                    day: n.date(),
                    dayOfWeek: n.day(),
                    hours: n.hour(),
                    minutes: n.minute(),
                    seconds: n.second(),
                    milliseconds: n.millisecond()
                }
            },
            timeFrom: function(e) {
                var t = new Date(e)
                  , n = Math.abs(Date.now() - t.getTime())
                  , a = (n / 6e4).toFixed(0)
                  , i = (n / 36e5).toFixed(0)
                  , r = (n / 864e5).toFixed(0);
                return a < 60 ? "".concat(a, "m") : i < 24 ? "".concat(i, "h") : "".concat(r, "d")
            }
        }
    }
}]);
