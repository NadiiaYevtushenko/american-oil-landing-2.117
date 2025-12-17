(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9419], {
    3320: e => {
        e.exports = {
            googleLogin: "styles_googleLogin__YF2S6",
            "live-dot-blink": "styles_live-dot-blink__E_a3I",
            "fade-in": "styles_fade-in__SqDEU",
            "expand-in": "styles_expand-in__hounL",
            "chatblog-expand-in": "styles_chatblog-expand-in__2GLlE"
        }
    }
    ,
    4162: e => {
        e.exports = {
            passwordField: "styles_passwordField__Jom_a",
            eye: "styles_eye__F6Mog",
            tooltip: "styles_tooltip__jsFr6",
            error: "styles_error__MXzeh",
            "live-dot-blink": "styles_live-dot-blink__YZRkN",
            "fade-in": "styles_fade-in__vQLWu",
            "expand-in": "styles_expand-in__ICvk8",
            "chatblog-expand-in": "styles_chatblog-expand-in__2JJ0h"
        }
    }
    ,
    4269: e => {
        e.exports = {
            wrapper: "styles_wrapper__lXgZr"
        }
    }
    ,
    5985: (e, n, i) => {
        "use strict";
        i.d(n, {
            y: () => y
        });
        var t = i(20294)
          , s = i(37876)
          , a = i(14232)
          , r = i(48915)
          , l = i(45526)
          , o = i(15039)
          , c = i.n(o)
          , M = i(91801)
          , u = i.n(M)
          , d = i(87998)
          , j = i.n(d)
          , N = i(26674)
          , g = i.n(N)
          , I = function(e) {
            var n = e.isLoading
              , i = e.vertical
              , t = {
                news: j(),
                today: u()
            }[i]
              , a = c()(g().pianoLoadingScreen, (0,
            l._)({}, g().pianoLoadingScreenHide, !n));
            return (0,
            s.jsx)("div", {
                className: a,
                children: (0,
                s.jsxs)("div", {
                    children: [(0,
                    s.jsx)("div", {
                        className: g().pianoLoadingScreen__animation,
                        children: t && (0,
                        s.jsx)("img", {
                            src: t,
                            alt: "logo",
                            className: g().pianoLoadingScreen__logo
                        })
                    }), (0,
                    s.jsx)("p", {
                        className: g().pianoLoadingScreen__title,
                        children: "Just a moment."
                    }), (0,
                    s.jsx)("p", {
                        className: g().pianoLoadingScreen__text,
                        children: "We are getting your experience ready."
                    })]
                })
            })
        }
          , D = i(78266)
          , x = i.n(D)
          , y = function(e) {
            var n = e.id
              , i = e.minHeight
              , l = (0,
            t._)((0,
            a.useState)(""), 2)
              , o = l[0]
              , c = l[1]
              , M = (0,
            t._)((0,
            a.useState)(!0), 2)
              , u = M[0]
              , d = M[1]
              , j = (0,
            r.C)().vertical;
            return (0,
            a.useEffect)(function() {
                c(n)
            }, [n]),
            (0,
            a.useEffect)(function() {
                if (o) {
                    var e = document.querySelector("#".concat(o));
                    if (e) {
                        var n = new MutationObserver(function() {
                            var i = null == e ? void 0 : e.querySelector("iframe");
                            i && (i.addEventListener("load", function() {
                                setTimeout(function() {
                                    d(!1)
                                }, 250)
                            }),
                            n.disconnect())
                        }
                        );
                        return n.observe(e, {
                            childList: !0
                        }),
                        function() {
                            return n.disconnect()
                        }
                    }
                }
            }, [o]),
            (0,
            s.jsxs)("div", {
                className: x().inlineContainer,
                style: {
                    minHeight: "".concat(void 0 === i ? 200 : i, "px")
                },
                children: [(0,
                s.jsx)(I, {
                    isLoading: u,
                    vertical: j
                }), (0,
                s.jsx)("div", {
                    id: o
                })]
            })
        }
    }
    ,
    9939: e => {
        e.exports = {
            dek: "styles_dek__wfG3g",
            "live-dot-blink": "styles_live-dot-blink__8fnty",
            "fade-in": "styles_fade-in__xFqTB",
            "expand-in": "styles_expand-in__dqPr1",
            "chatblog-expand-in": "styles_chatblog-expand-in__KwOrz"
        }
    }
    ,
    10438: e => {
        e.exports = {
            circleWrapper: "styles_circleWrapper__KuVX6",
            circleLeft: "styles_circleLeft__3fwOO",
            circleRight: "styles_circleRight__04zXG",
            "live-dot-blink": "styles_live-dot-blink__UFhFH",
            "fade-in": "styles_fade-in__QDGU8",
            "expand-in": "styles_expand-in__5sJKV",
            "chatblog-expand-in": "styles_chatblog-expand-in__2tp21"
        }
    }
    ,
    11462: (e, n, i) => {
        "use strict";
        i.d(n, {
            LE: () => l,
            Om: () => M,
            X5: () => a,
            em: () => c,
            l9: () => o,
            y4: () => s
        });
        var t = i(91408)
          , s = (0,
        t.Ik)().shape({
            email: (0,
            t.Yj)().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email").required("Please enter a valid email")
        });
        (0,
        t.Ik)().shape({
            password: (0,
            t.Yj)().required("Please enter a valid password")
        });
        var a = (0,
        t.Ik)().shape({
            email: (0,
            t.Yj)().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email").required("Please enter a valid email"),
            password: (0,
            t.Yj)().required("Please enter a valid password")
        })
          , r = {
            LENGTH_12: "At least 12 characters",
            NUMBER: "Contains a number",
            LETTER: "Contains a letter",
            DISTINCT_FROM_EMAIL: "Cannot contain your email",
            CANNOT_USE_PASSWORD: 'Cannot contain "password"',
            TERMS_NOT_ACCEPTED: "Please select the box below"
        }
          , l = (0,
        t.Ik)().shape({
            email: (0,
            t.Yj)().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email").required("Please enter a valid email"),
            password: (0,
            t.Yj)().min(12, "Please enter a valid password.").matches(/[0-9]/, "Please enter a valid password.").matches(/[a-zA-Z]/, "Please enter a valid password.").test("Unique", "Please enter a valid password.", function(e, n) {
                var i = n.options.userEmail;
                return !i || !(null == e ? void 0 : e.includes(i))
            }).test("disallowPassword", "Please enter a valid password.", function(e) {
                return "string" != typeof e || !1 === /password/i.test(e)
            }).required("Please enter a valid password."),
            termsAndConditions: (0,
            t.zM)().oneOf([!0], "Please select the box below")
        });
        (0,
        t.Ik)().shape({
            password: (0,
            t.Yj)().min(12, r.LENGTH_12).matches(/[0-9]/, r.NUMBER).matches(/[a-zA-Z]/, r.LETTER).test("Unique", r.DISTINCT_FROM_EMAIL, function(e, n) {
                return e !== n.options.userEmail
            }).test("disallowPassword", r.CANNOT_USE_PASSWORD, function(e) {
                return "string" != typeof e || -1 === e.indexOf("password")
            }),
            termsAndConditions: (0,
            t.zM)().oneOf([!0], r.TERMS_NOT_ACCEPTED)
        });
        var o = (0,
        t.Yj)().length(6, "One time passcode must be 6 digits").matches(/^\d{6}$/, "One time passcode must be a 6-digit number").required("Please enter a valid code")
          , c = (0,
        t.Ik)().shape({
            oneTimeCode: o
        })
          , M = (0,
        t.Ik)().shape({
            termsAndConditions: t.lc().oneOf([!0], "Please select the box below")
        })
    }
    ,
    13878: e => {
        e.exports = {
            container: "styles_container__TeVOq",
            checkboxContainer: "styles_checkboxContainer__AyImB",
            error: "styles_error__D92n0",
            "live-dot-blink": "styles_live-dot-blink__fbcnw",
            "fade-in": "styles_fade-in__J_Z_a",
            "expand-in": "styles_expand-in__5y2av",
            "chatblog-expand-in": "styles_chatblog-expand-in__BgHj7"
        }
    }
    ,
    14383: e => {
        e.exports = {
            termsContainer: "styles_termsContainer__AaKfG",
            "live-dot-blink": "styles_live-dot-blink___K_7o",
            "fade-in": "styles_fade-in__D3mj2",
            "expand-in": "styles_expand-in__FQSAO",
            "chatblog-expand-in": "styles_chatblog-expand-in__dghcn"
        }
    }
    ,
    19020: (e, n, i) => {
        "use strict";
        i.d(n, {
            A: () => f
        });
        var t = i(45526)
          , s = i(67684)
          , a = i(65699)
          , r = i(37876)
          , l = i(14232)
          , o = i(88992)
          , c = i(15039)
          , M = i.n(c)
          , u = i(98063)
          , d = i(20294)
          , j = function() {
            return (0,
            r.jsxs)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.25754 2.25749C2.66759 1.84744 3.33241 1.84744 3.74246 2.25749L17.7425 16.2575C18.1525 16.6675 18.1525 17.3324 17.7425 17.7424C17.3324 18.1525 16.6676 18.1525 16.2575 17.7424L2.25754 3.74241C1.84749 3.33236 1.84749 2.66754 2.25754 2.25749Z",
                    fill: "#555555"
                }), (0,
                r.jsx)("path", {
                    d: "M6.76694 9.66603C6.75574 9.77581 6.75 9.88721 6.75 9.99995C6.75 11.7948 8.20506 13.25 10 13.25C10.1127 13.25 10.2241 13.2442 10.3339 13.233L6.76694 9.66603Z",
                    fill: "#555555"
                }), (0,
                r.jsx)("path", {
                    d: "M9.66608 6.7669C9.77586 6.75569 9.88726 6.74995 10 6.74995C11.7949 6.74995 13.25 8.20502 13.25 9.99995C13.25 10.1127 13.2443 10.2241 13.2331 10.3339L9.66608 6.7669Z",
                    fill: "#555555"
                }), (0,
                r.jsx)("path", {
                    d: "M15.2918 12.3926L16.7063 13.8071C16.7459 13.766 16.7848 13.7249 16.8233 13.6839C17.5775 12.8794 18.1526 12.0786 18.5393 11.48C18.7332 11.1797 18.8814 10.9277 18.9824 10.748L19.1444 10.4472C19.2852 10.1656 19.2852 9.83426 19.1444 9.55274L18.9824 9.25188C18.8814 9.07222 18.7332 8.82022 18.5393 8.51993C18.1526 7.92126 17.5775 7.12055 16.8233 6.31601C15.333 4.72639 13.0245 2.99995 10 2.99995C8.75806 2.99995 7.63684 3.29105 6.64343 3.74425L8.18696 5.28778C8.75628 5.10485 9.36129 4.99995 10 4.99995C12.2255 4.99995 14.042 6.27351 15.3642 7.68389C16.0162 8.37935 16.5193 9.07864 16.8592 9.60498C16.9544 9.75234 17.0362 9.88535 17.1045 9.99995C17.0362 10.1145 16.9544 10.2476 16.8592 10.3949C16.5193 10.9213 16.0162 11.6205 15.3642 12.316C15.3402 12.3416 15.3161 12.3671 15.2918 12.3926Z",
                    fill: "#555555"
                }), (0,
                r.jsx)("path", {
                    d: "M3.29367 6.19276C3.25414 6.23391 3.21515 6.27501 3.17671 6.31601C2.42246 7.12055 1.84738 7.92126 1.46074 8.51993C1.2668 8.82022 1.11864 9.07222 1.01758 9.25188L0.855573 9.55274C0.714809 9.83426 0.714809 10.1656 0.855573 10.4472L1.01758 10.748C1.11864 10.9277 1.2668 11.1797 1.46074 11.48C1.84738 12.0786 2.42246 12.8794 3.17671 13.6839C4.66698 15.2735 6.97549 17 10 17C11.2419 17 12.3632 16.7088 13.3566 16.2557L11.813 14.7121C11.2437 14.8951 10.6387 15 10 15C7.77451 15 5.95802 13.7264 4.63579 12.316C3.98379 11.6205 3.48075 10.9213 3.14082 10.3949C3.04565 10.2476 2.96377 10.1145 2.89549 9.99995C2.96377 9.88535 3.04565 9.75234 3.14082 9.60498C3.48075 9.07864 3.98379 8.37935 4.63579 7.68389C4.65977 7.65831 4.68391 7.63278 4.70821 7.6073L3.29367 6.19276Z",
                    fill: "#555555"
                })]
            })
        }
          , N = function() {
            return (0,
            r.jsxs)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("path", {
                    d: "M1.75 10C1.75 10 4.75 4 10 4C15.25 4 18.25 10 18.25 10C18.25 10 15.25 16 10 16C4.75 16 1.75 10 1.75 10Z",
                    stroke: "#555555",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M10 12.25C11.2426 12.25 12.25 11.2426 12.25 10C12.25 8.75736 11.2426 7.75 10 7.75C8.75736 7.75 7.75 8.75736 7.75 10C7.75 11.2426 8.75736 12.25 10 12.25Z",
                    stroke: "#555555",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , g = i(47483)
          , I = i.n(g)
          , D = function(e) {
            var n = e.name
              , i = e.isFocused
              , s = (0,
            o.xW)().watch
              , a = (0,
            d._)(l.useState(!0), 2)
              , c = a[0]
              , u = a[1]
              , j = s(n) || ""
              , N = s("email") || ""
              , g = [{
                key: "minLength",
                name: "At least 12 characters",
                isValid: j.length >= 12
            }, {
                key: "hasLetter",
                name: "At least 1 letter",
                isValid: /[a-zA-Z]/.test(j)
            }, {
                key: "hasNumber",
                name: "At least 1 number",
                isValid: /[0-9]/.test(j)
            }, {
                key: "containsEmail",
                name: "Cannot contain your email",
                isValid: c,
                validClass: I().dn
            }, {
                key: "containsPassword",
                name: 'Cannot contain "password"',
                isValid: !/password/i.test(j),
                validClass: I().dn
            }];
            return (0,
            l.useEffect)(function() {
                u(!N || !j.includes(N))
            }, [N, j]),
            i ? (0,
            r.jsx)("ul", {
                className: I().tooltip,
                "data-testid": "validation-tooltip",
                children: g.map(function(e) {
                    var n;
                    return (0,
                    r.jsxs)("li", {
                        className: M()((n = {},
                        (0,
                        t._)(n, String(I().initial), !j.length),
                        (0,
                        t._)(n, String(I().error), !e.isValid),
                        (0,
                        t._)(n, String(e.validClass || I().valid), e.isValid),
                        n)),
                        children: [(0,
                        r.jsx)("span", {
                            className: M()("icon", {
                                "icon-error-icon": !e.isValid,
                                "icon-check": e.isValid
                            })
                        }), e.name]
                    }, e.key)
                })
            }) : null
        }
          , x = i(4162)
          , y = i.n(x)
          , z = function(e) {
            var n = e.createPassword
              , i = void 0 !== n && n
              , o = e.className
              , c = void 0 === o ? "" : o
              , g = e.name
              , I = (0,
            a._)(e, ["createPassword", "className", "name"])
              , x = (0,
            d._)((0,
            l.useState)(!1), 2)
              , z = x[0]
              , _ = x[1]
              , T = (0,
            d._)((0,
            l.useState)(!1), 2)
              , h = T[0]
              , p = T[1];
            return (0,
            r.jsxs)("div", {
                className: M()(y().passwordField, (0,
                t._)({}, c, c)),
                "data-testid": "password-field",
                children: [(0,
                r.jsx)(u.F, (0,
                s._)({
                    type: z ? "text" : "password",
                    "aria-label": "password",
                    onFocus: i ? function() {
                        p(!0)
                    }
                    : void 0,
                    onBlur: i ? function() {
                        p(!1)
                    }
                    : void 0,
                    name: g
                }, I)), (0,
                r.jsx)("button", {
                    type: "button",
                    "data-testid": "toggle-password-visibility",
                    "aria-label": "toggle password visibility",
                    onClick: function() {
                        return _(!z)
                    },
                    className: y().eye,
                    children: z ? (0,
                    r.jsx)(j, {}) : (0,
                    r.jsx)(N, {})
                }), i ? (0,
                r.jsx)(D, {
                    name: g,
                    isFocused: h
                }) : null]
            })
        }
          , _ = i(85993)
          , T = i(37479)
          , h = i.n(T)
          , p = function(e) {
            var n = e.name
              , i = e.className
              , t = e.label
              , s = void 0 === t ? null : t
              , a = e.labelSize
              , l = void 0 === a ? null : a;
            return s ? (0,
            r.jsx)("label", {
                htmlFor: n,
                className: M().apply(void 0, (0,
                _._)(l ? [h()[l]] : []).concat([h().label, void 0 === i ? null : i])),
                children: s
            }) : null
        }
          , L = i(494)
          , m = i(23837)
          , A = i(9625)
          , S = i(78828)
          , O = i.n(S);
        function C(e) {
            var n, i;
            return (0,
            r.jsx)("div", {
                className: M()(O().slot, (0,
                t._)({}, null !== (n = O().isActive) && void 0 !== n ? n : "", e.isActive)),
                children: (0,
                r.jsx)("div", {
                    className: O().innerSlot,
                    children: null !== (i = e.char) && void 0 !== i ? i : e.placeholderChar
                })
            })
        }
        function E(e) {
            var n = e.name
              , i = e.dataTestId
              , l = e.isRequired
              , c = (0,
            a._)(e, ["name", "dataTestId", "isRequired"])
              , u = (0,
            o.xW)().control
              , d = (0,
            o.as)({
                name: n,
                control: u,
                rules: {
                    required: void 0 !== l && l
                }
            })
              , j = d.field
              , N = d.fieldState.error;
            return (0,
            r.jsx)("div", {
                className: O().otpInputContainer,
                children: (0,
                r.jsx)(m.wE, (0,
                s._)({
                    containerClassName: String(O().group),
                    render: function(e) {
                        var n, i = e.slots;
                        return (0,
                        r.jsx)(r.Fragment, {
                            children: (0,
                            r.jsx)("div", {
                                className: M()(O().flex, (0,
                                t._)({}, null !== (n = O().hasError) && void 0 !== n ? n : "", !!N)),
                                children: i.map(function(e, n) {
                                    return (0,
                                    r.jsx)(C, (0,
                                    s._)({}, e), n)
                                })
                            })
                        })
                    },
                    maxLength: 6,
                    "data-testid": void 0 === i ? "" : i,
                    "aria-invalid": !!N
                }, (0,
                A.Y)(c), j))
            })
        }
        var w = i(50784)
          , k = i.n(w)
          , f = function(e) {
            var n, i, c = (0,
            s._)({
                label: void 0,
                labelClassName: void 0,
                labelSize: void 0,
                ariaLabel: void 0
            }, e), d = c.name, j = c.ariaLabel, N = c.label, g = c.labelClassName, I = c.labelSize, D = c.type, x = void 0 === D ? "text" : D, y = (0,
            a._)(c, ["name", "ariaLabel", "label", "labelClassName", "labelSize", "type"]), _ = (0,
            o.xW)().formState.errors, T = (0,
            l.useId)(), h = {
                name: d,
                "aria-invalid": _[d] ? "true" : "false",
                "aria-describedby": _[d] ? T : void 0
            };
            return j && (h["aria-label"] = j),
            (0,
            r.jsxs)(r.Fragment, {
                children: [!j && (0,
                r.jsx)(p, {
                    name: d,
                    label: N,
                    className: g,
                    labelSize: I
                }), (0,
                r.jsxs)("div", {
                    className: M()(k().inputWrapper, (0,
                    t._)({}, k().error, _[d])),
                    children: [x.includes("password") ? (0,
                    r.jsx)(z, (0,
                    s._)({
                        createPassword: "create-password" === x
                    }, y, h)) : "one-time-code" === x ? (0,
                    r.jsx)(E, (0,
                    s._)({
                        pushPasswordManagerStrategy: "none"
                    }, y, h)) : (0,
                    r.jsx)(u.F, (0,
                    s._)({
                        type: x
                    }, y, h)), (null === (n = _[d]) || void 0 === n ? void 0 : n.message) && (0,
                    r.jsx)(L.I, {
                        id: T,
                        message: null === (i = _[d]) || void 0 === i ? void 0 : i.message
                    })]
                })]
            })
        }
    }
    ,
    26674: e => {
        e.exports = {
            pianoLoadingScreen: "styles_pianoLoadingScreen__PJkGF",
            pianoLoadingScreenHide: "styles_pianoLoadingScreenHide__dVsCu",
            pianoLoadingScreen__animation: "styles_pianoLoadingScreen__animation__8aLNv",
            wave: "styles_wave__HosFd",
            pianoLoadingScreen__logo: "styles_pianoLoadingScreen__logo__C3gK2",
            pianoLoadingScreen__title: "styles_pianoLoadingScreen__title__CBe7u",
            pianoLoadingScreen__text: "styles_pianoLoadingScreen__text__JqpV1"
        }
    }
    ,
    29419: (e, n, i) => {
        "use strict";
        i.d(n, {
            _: () => e0,
            r: () => e$
        });
        var t = i(37876)
          , s = i(14232)
          , a = i(15039)
          , r = i.n(a)
          , l = i(87663)
          , o = i(78835)
          , c = i(76697)
          , M = i(48915)
          , u = i(89099)
          , d = i(90027)
          , j = i.n(d)
          , N = function() {
            var e = (0,
            l.hZ)(function(e) {
                return e.screen
            })
              , n = (0,
            l.hZ)(function(e) {
                return e.setScreen
            });
            return "true" !== (0,
            u.useRouter)().query.MANUAL_SCREEN ? null : (0,
            t.jsxs)("div", {
                className: j().container,
                children: [(0,
                t.jsx)("p", {
                    children: "Manually set screen to bypass API calls"
                }), (0,
                t.jsx)("select", {
                    onChange: function(e) {
                        n(e.target.value)
                    },
                    value: e,
                    children: Object.values(o.cq).map(function(e) {
                        return (0,
                        t.jsx)("option", {
                            value: e,
                            children: e
                        }, e)
                    })
                })]
            })
        }
          , g = i(67684)
          , I = i(62701)
          , D = i(88992)
          , x = i(71090)
          , y = i(34278)
          , z = i(41042)
          , _ = i(16927)
          , T = i(20294)
          , h = i(4902)
          , p = i(98570)
          , L = i(29540)
          , m = i(76725)
          , A = function(e) {
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
          , S = function(e) {
            var n, i, a = e.submitCallback, r = e.trackingPayload, l = e.children, o = (0,
            T._)((0,
            s.useState)(null), 2), c = o[0], u = o[1], d = (0,
            T._)((0,
            s.useState)(!1), 2), j = d[0], N = d[1], g = (0,
            L.hZ)(function(e) {
                return e.setError
            }), I = (0,
            L.hZ)(function(e) {
                return e.track
            }), x = A((0,
            M.C)().vertical), y = (0,
            D.xW)(), z = y.handleSubmit, S = y.getValues, O = (0,
            p.J)(), C = null == O ? void 0 : O["account-login-recaptcha"], E = (n = (0,
            _._)(function(e) {
                return (0,
                h.__generator)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        if (r && I(r),
                        C)
                            return [3, 1];
                        return a(e),
                        [3, 4];
                    case 1:
                        if (!(c && j))
                            return [3, 3];
                        return [4, c.execute()];
                    case 2:
                        return n.sent(),
                        [3, 4];
                    case 3:
                        g("There was an error submitting your form. Please try again."),
                        n.label = 4;
                    case 4:
                        return [2]
                    }
                })
            }),
            function(e) {
                return n.apply(this, arguments)
            }
            ), w = (i = (0,
            _._)(function() {
                var e;
                return (0,
                h.__generator)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        e = S(),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, , 3, 4]),
                        [4, a(e)];
                    case 2:
                        return n.sent(),
                        [3, 4];
                    case 3:
                        return c && j && c.reset(),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }),
            function() {
                return i.apply(this, arguments)
            }
            );
            return (0,
            t.jsxs)("form", {
                onSubmit: z(E),
                children: [l, C ? (0,
                t.jsx)(m.default, {
                    ref: function(e) {
                        return u(e)
                    },
                    sitekey: x,
                    onVerify: w,
                    onLoad: function() {
                        N(!0)
                    },
                    size: "invisible"
                }) : null]
            })
        }
          , O = i(55486)
          , C = i(19020)
          , E = i(494)
          , w = i(39324)
          , k = i.n(w)
          , f = i(66973)
          , v = i(20309)
          , b = i(49002)
          , Y = i(65337)
          , Q = i.n(Y)
          , U = k()().publicRuntimeConfig
          , Z = U.NEWS_APPLE_CLIENT_ID
          , B = U.TODAY_APPLE_CLIENT_ID
          , V = function() {
            var e, n = (0,
            M.C)(), i = n.isNews, a = n.isToday, r = n.vertical, l = (0,
            L.hZ)(function(e) {
                return e.socialLogin
            }), o = (0,
            L.hZ)(function(e) {
                return e.setScreen
            }), c = (0,
            L.hZ)(function(e) {
                return e.searchUserByEmail
            }), u = (e = (0,
            _._)(function(e) {
                var n, i, t, s, a, M, u, d, j;
                return (0,
                h.__generator)(this, function(N) {
                    switch (N.label) {
                    case 0:
                        return t = e.detail.authorization.id_token,
                        s = null === (i = e.detail.user) || void 0 === i ? void 0 : null === (n = i.name) || void 0 === n ? void 0 : n.firstName,
                        a = (0,
                        v.getBedrockBrandForVertical)(r),
                        [4, c((M = (0,
                        b.Cq)(t).email) || "", a)];
                    case 1:
                        return d = !(null == (u = N.sent()) ? void 0 : u.success),
                        [4, l({
                            socialUser: {
                                idToken: t,
                                firstName: s || "",
                                email: M,
                                isNewUser: d
                            },
                            brand: a,
                            platform: "apple",
                            trackingPayload: {
                                action: "SignIn:Submit",
                                method: "SocialLogin:Apple:Click"
                            }
                        })];
                    case 2:
                        return (j = N.sent()) && o(j),
                        [2]
                    }
                })
            }),
            function(n) {
                return e.apply(this, arguments)
            }
            ), d = function() {
                console.error("There was an error logging in with Apple")
            }, j = function() {
                var e;
                return null === (e = [{
                    id: Z,
                    valid: i
                }, {
                    id: B,
                    valid: a
                }].find(function(e) {
                    return !!e.valid
                })) || void 0 === e ? void 0 : e.id
            };
            return (0,
            s.useEffect)(function() {
                var e = document.createElement("script");
                return e.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                e.async = !0,
                e.onload = function() {
                    window.AppleID.auth.init({
                        clientId: j(),
                        scope: "name email",
                        redirectURI: "https://".concat(window.location.hostname, "/account"),
                        state: "state",
                        nonce: "nonce",
                        usePopup: !0
                    })
                }
                ,
                e.onerror = function() {
                    console.error("Failed to load Apple ID SDK script."),
                    d()
                }
                ,
                document.body.appendChild(e),
                document.addEventListener("AppleIDSignInOnSuccess", u),
                document.addEventListener("AppleIDSignInOnFailure", d),
                function() {
                    document.removeEventListener("AppleIDSignInOnSuccess", u),
                    document.removeEventListener("AppleIDSignInOnFailure", d)
                }
            }, []),
            (0,
            t.jsx)("div", {
                id: "appleid-signin",
                "data-testid": "apple-login-btn",
                "data-mode": "center-align",
                "data-type": "continue",
                "data-color": "white",
                "data-border": "true",
                "data-border-radius": "8",
                "data-width": "100%",
                "data-height": "40",
                "data-padding": "0",
                className: Q().appleSignIn,
                role: "toolbar"
            })
        }
          , R = i(66216)
          , F = i(3320)
          , P = i.n(F)
          , G = k()().publicRuntimeConfig
          , W = G.NEWS_GOOGLE_CLIENT_ID
          , q = G.TODAY_GOOGLE_CLIENT_ID
          , H = function() {
            var e, n = (0,
            s.useRef)(null), i = (0,
            M.C)(), a = i.isNews, r = i.isToday, l = i.vertical, o = (0,
            L.hZ)(function(e) {
                return e.socialLogin
            }), c = (0,
            L.hZ)(function(e) {
                return e.setScreen
            }), u = (0,
            L.hZ)(function(e) {
                return e.searchUserByEmail
            }), d = (0,
            R.l)(n).offsetWidth, j = (0,
            T._)((0,
            s.useState)(!1), 2), N = j[0], g = j[1], I = (e = (0,
            _._)(function(e) {
                var n, i, t, s, a, r, M, d;
                return (0,
                h.__generator)(this, function(j) {
                    switch (j.label) {
                    case 0:
                        return n = e.credential,
                        t = (i = (0,
                        b.Cq)(n)).email,
                        s = i.given_name,
                        a = (0,
                        v.getBedrockBrandForVertical)(l),
                        [4, u(t || "", a)];
                    case 1:
                        return M = !(null == (r = j.sent()) ? void 0 : r.success),
                        [4, o({
                            socialUser: {
                                idToken: n,
                                firstName: s || "",
                                email: t,
                                isNewUser: M
                            },
                            brand: a,
                            platform: "google",
                            trackingPayload: {
                                action: "SignIn:Submit",
                                method: "SocialLogin:Google:Click"
                            }
                        })];
                    case 2:
                        return (d = j.sent()) && c(d),
                        [2]
                    }
                })
            }),
            function(n) {
                return e.apply(this, arguments)
            }
            ), D = function() {
                var e;
                return null === (e = [{
                    id: W,
                    valid: a
                }, {
                    id: q,
                    valid: r
                }].find(function(e) {
                    return !!e.valid
                })) || void 0 === e ? void 0 : e.id
            };
            return (0,
            s.useEffect)(function() {
                var e = n.current;
                e && N && d && (e.innerHTML = "",
                window.google.accounts.id.renderButton(e, {
                    type: "standard",
                    theme: "outline",
                    size: "large",
                    text: "continue_with",
                    shape: "rectangular",
                    logo_alignment: "center",
                    width: d
                }))
            }, [d, N]),
            (0,
            s.useEffect)(function() {
                var e = document.createElement("script");
                e.src = "https://accounts.google.com/gsi/client",
                e.async = !0,
                e.onload = function() {
                    window.google.accounts.id.initialize({
                        client_id: D(),
                        callback: I
                    }),
                    g(!0);
                    var e = n.current;
                    e && window.google.accounts.id.renderButton(e, {
                        type: "standard",
                        theme: "outline",
                        size: "large",
                        text: "continue_with",
                        shape: "rectangular",
                        logo_alignment: "center",
                        width: e.offsetWidth
                    })
                }
                ,
                document.body.appendChild(e)
            }, []),
            (0,
            t.jsx)("div", {
                ref: n,
                role: "toolbar",
                id: "google-login-button",
                className: P().googleLogin,
                "data-testid": "google-login-btn"
            })
        }
          , J = i(67479)
          , X = i.n(J)
          , K = function(e) {
            var n = e.hasResetPassword
              , i = (0,
            l.hZ)(function(e) {
                return e.setScreen
            })
              , s = (0,
            l.hZ)(function(e) {
                return e.track
            })
              , a = k()().publicRuntimeConfig.IDENTITY_ENV;
            return (0,
            t.jsxs)(O.B, {
                gapSize: 32,
                children: [(0,
                t.jsx)("div", {
                    className: X().separator,
                    children: (0,
                    t.jsx)("span", {
                        children: "or"
                    })
                }), (0,
                t.jsxs)(O.B, {
                    gapSize: 32,
                    className: X().linksContainer,
                    children: [(0,
                    t.jsxs)(O.B, {
                        gapSize: 16,
                        "data-testid": "social-login",
                        className: X().socialLogin,
                        children: [(0,
                        t.jsx)(H, {}), (0,
                        t.jsx)(V, {}), void 0 !== n && n ? (0,
                        t.jsxs)(f.V, {
                            className: X().resetPassword,
                            children: [(0,
                            t.jsx)("span", {
                                children: "Trouble logging in?\xa0\xa0\xa0\xa0"
                            }), (0,
                            t.jsx)(y.u, {
                                to: "https://".concat("production" === a ? "profile.id.nbcuni.com" : "stage-profile.id-envs.nbcuni.com", "/forgot-password"),
                                target: "_blank",
                                children: "Reset your password"
                            })]
                        }) : null]
                    }), (0,
                    t.jsx)(y.u, {
                        onClick: function() {
                            s({
                                action: "SignUp:Submit",
                                method: "PoweredByNBCUButton:Click"
                            }),
                            i(o.cq.NBCU_PROFILE)
                        },
                        variant: "block",
                        dataTestid: "nbcu-profile-button",
                        children: "Powered by NBCUniversal Profile"
                    })]
                })]
            })
        }
          , $ = i(11462)
          , ee = i(62914)
          , en = i.n(ee)
          , ei = function() {
            var e = (0,
            l.hZ)(function(e) {
                return e.setScreen
            })
              , n = (0,
            l.hZ)(function(e) {
                return e.userSignin
            })
              , i = (0,
            l.hZ)(function(e) {
                return e.setError
            })
              , s = (0,
            l.hZ)(function(e) {
                return e.track
            })
              , a = (0,
            l.hZ)(function(e) {
                return e.error
            })
              , r = (0,
            l.hZ)(function(e) {
                var n;
                return null === (n = e.user) || void 0 === n ? void 0 : n.email
            })
              , c = (0,
            l.hZ)(function(e) {
                var n;
                return null === (n = e.user) || void 0 === n ? void 0 : n.password
            })
              , u = (0,
            M.C)()
              , d = u.vertical
              , j = u.isToday
              , N = (0,
            D.mN)({
                resolver: (0,
                x.t)($.X5),
                defaultValues: {
                    email: r || "",
                    password: c || ""
                }
            });
            return (0,
            t.jsxs)(O.B, {
                gapSize: 32,
                children: [(0,
                t.jsxs)(O.B, {
                    gapSize: 12,
                    children: [(0,
                    t.jsx)("h2", {
                        "data-testid": "account-login",
                        children: "Log In"
                    }), (0,
                    t.jsxs)(f.V, {
                        styling: "loginSubtitle",
                        children: ["Don't have a login?\xa0", (0,
                        t.jsx)(y.u, {
                            onClick: function() {
                                s({
                                    action: "SignIn:Submit",
                                    method: "SignUp:Click"
                                }),
                                e(o.cq.REGISTER)
                            },
                            dataTestid: "create-account-button",
                            children: "Create Account"
                        })]
                    })]
                }), a ? (0,
                t.jsx)(E.I, {
                    message: a
                }) : null, (0,
                t.jsx)(D.Op, (0,
                I._)((0,
                g._)({}, N), {
                    children: (0,
                    t.jsx)(S, {
                        submitCallback: function(t) {
                            i(""),
                            n({
                                email: t.email,
                                password: t.password,
                                brand: (0,
                                v.getBedrockBrandForVertical)(d),
                                trackingPayload: {
                                    action: "SignIn:Submit",
                                    method: "SubmitButton:Click"
                                }
                            }).then(function(n) {
                                n && e(n)
                            })
                        },
                        children: (0,
                        t.jsxs)(O.B, {
                            gapSize: 32,
                            children: [(0,
                            t.jsxs)(O.B, {
                                gapSize: 16,
                                children: [(0,
                                t.jsx)(C.A, {
                                    name: "email",
                                    type: "email",
                                    dataTestId: "email-input-field",
                                    placeholder: "Email",
                                    isRequired: !0
                                }), (0,
                                t.jsx)(C.A, {
                                    name: "password",
                                    type: "password",
                                    dataTestId: "password-input-field",
                                    placeholder: "Password",
                                    isRequired: !0,
                                    className: en().input
                                })]
                            }), (0,
                            t.jsxs)(O.B, {
                                gapSize: 16,
                                children: [(0,
                                t.jsx)(z.b, {
                                    title: "Log In"
                                }), (0,
                                t.jsx)(y.u, {
                                    variant: "block",
                                    onClick: function() {
                                        s({
                                            action: "SignIn:Click",
                                            method: "OneTimeCodeButton:Click"
                                        }),
                                        e(o.cq.LOGIN_OTC_EMAIL)
                                    },
                                    size: j ? "small" : "medium",
                                    children: "Sign in With Code"
                                })]
                            })]
                        })
                    })
                })), (0,
                t.jsx)(K, {
                    hasResetPassword: !0
                })]
            })
        }
          , et = i(14383)
          , es = i.n(et)
          , ea = function() {
            var e = (0,
            M.C)().vertical
              , n = (0,
            v.getDisplayNameForVertical)(e);
            return (0,
            t.jsxs)("div", {
                className: es().termsContainer,
                children: [(0,
                t.jsxs)("p", {
                    children: ["*By checking this box and tapping", " ", (0,
                    t.jsx)("em", {
                        children: "Create Account"
                    }), " ", ", I agree to NBCUniversal’s", " ", (0,
                    t.jsx)("a", {
                        href: "https://www.nbc.com/general/pages/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Terms of Service"
                    }), " ", "and", " ", (0,
                    t.jsx)("a", {
                        href: "https://www.nbcuniversalprivacy.com/privacy?brandA=NBC_Entertainment&intake=NBC_Entertainment",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Privacy Policy"
                    }), " ", "and that NBCUniversal and its service providers may process my information. NBCUniversal Profile will provide access to content from multiple NBCUniversal brands."]
                }), (0,
                t.jsxs)("p", {
                    children: ["I understand that", " ", n, " ", "and NBCUniversal may send me the latest news, promotions and more."]
                })]
            })
        }
          , er = i(95212)
          , el = i(66032)
          , eo = function(e) {
            var n = e.branding
              , i = (0,
            l.hZ)(function(e) {
                return e.showAuthenticationModal
            })
              , a = (0,
            l.hZ)(function(e) {
                return e.userRegistration
            })
              , r = (0,
            l.hZ)(function(e) {
                return e.setScreen
            })
              , c = (0,
            l.hZ)(function(e) {
                return e.setError
            })
              , u = (0,
            l.hZ)(function(e) {
                return e.track
            })
              , d = (0,
            l.hZ)(function(e) {
                return e.error
            })
              , j = (0,
            l.hZ)(function(e) {
                return e.setEmail
            })
              , N = (0,
            M.C)().vertical
              , _ = (0,
            T._)((0,
            s.useState)(""), 2)
              , h = _[0]
              , p = _[1]
              , L = (0,
            D.mN)({
                resolver: (0,
                x.t)($.LE, {
                    userEmail: h
                }),
                defaultValues: {
                    email: "",
                    password: ""
                }
            })
              , m = L.watch("email");
            return (0,
            s.useEffect)(function() {
                p(m)
            }, [m]),
            (0,
            t.jsxs)(O.B, {
                gapSize: 32,
                "data-testid": "account-registration",
                children: [(0,
                t.jsxs)(O.B, {
                    gapSize: 12,
                    children: [(0,
                    t.jsx)("div", {
                        id: el._g.FORM_TITLE,
                        "data-testid": "formTitle",
                        children: (0,
                        t.jsx)("h2", {
                            children: {
                                "start-today": "Create a TODAY Account",
                                nbcnews: "Create an NBC News Account",
                                today: "Create Your Free TODAY Account"
                            }[n]
                        })
                    }), (0,
                    t.jsxs)(f.V, {
                        styling: "loginSubtitle",
                        children: [function(e) {
                            switch (e) {
                            case "nbcnews":
                                return "Already have an NBC News account?";
                            case "start-today":
                            case "today":
                                return "Already have a TODAY account?"
                            }
                        }(n), "\xa0", (0,
                        t.jsx)(y.u, {
                            onClick: function() {
                                u({
                                    action: "SignUp:Submit",
                                    method: "SignIn:Click"
                                }),
                                r(o.cq.LOGIN, {
                                    email: L.getValues("email"),
                                    password: L.getValues("password")
                                })
                            },
                            dataTestid: "sign-in-button",
                            children: "Sign In"
                        })]
                    })]
                }), (0,
                t.jsx)(E.I, {
                    message: d
                }), (0,
                t.jsx)(D.Op, (0,
                I._)((0,
                g._)({}, L), {
                    children: (0,
                    t.jsx)(S, {
                        submitCallback: function(e) {
                            var n = (0,
                            v.getBedrockBrandForVertical)(N);
                            c(""),
                            a({
                                method: "SubmitButton:Click",
                                registrationObj: {
                                    email: e.email,
                                    password: e.password,
                                    brand: n,
                                    source: "default"
                                }
                            }).then(function(n) {
                                n && (r(n),
                                j(e.email))
                            })
                        },
                        children: (0,
                        t.jsxs)(O.B, {
                            gapSize: 32,
                            children: [(0,
                            t.jsxs)(O.B, {
                                gapSize: 16,
                                children: [(0,
                                t.jsx)(C.A, {
                                    name: "email",
                                    type: "email",
                                    dataTestId: "email-input-field",
                                    placeholder: "Email",
                                    autoFocus: i,
                                    isRequired: !0
                                }), (0,
                                t.jsx)(C.A, {
                                    name: "password",
                                    type: "create-password",
                                    dataTestId: "password-input-field",
                                    placeholder: "Password",
                                    isRequired: !0
                                }), (0,
                                t.jsx)(er.S, {
                                    name: "termsAndConditions",
                                    dataTestId: "terms-checkbox",
                                    isRequired: !0,
                                    children: (0,
                                    t.jsx)(ea, {})
                                })]
                            }), (0,
                            t.jsx)(z.b, {
                                title: "Create Account"
                            })]
                        })
                    })
                })), (0,
                t.jsx)(K, {})]
            })
        }
          , ec = i(9939)
          , eM = i.n(ec)
          , eu = function() {
            var e = (0,
            L.hZ)(function(e) {
                return e.userSocialRegistration
            })
              , n = (0,
            L.hZ)(function(e) {
                return e.setScreen
            })
              , i = (0,
            L.hZ)(function(e) {
                return e.error
            })
              , s = (0,
            M.C)().vertical
              , a = (0,
            D.mN)({
                resolver: (0,
                x.t)($.Om)
            });
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsx)(D.Op, (0,
                I._)((0,
                g._)({}, a), {
                    children: (0,
                    t.jsx)("form", {
                        onSubmit: a.handleSubmit(function() {
                            e({
                                trackingPayload: {
                                    action: "SignIn:Submit",
                                    method: "SubmitButtonClick"
                                },
                                brand: (0,
                                v.getBedrockBrandForVertical)(s)
                            }).then(function(e) {
                                e && n(e)
                            })
                        }),
                        "data-testid": "account-social-registration",
                        children: (0,
                        t.jsxs)(O.B, {
                            gapSize: 32,
                            children: [(0,
                            t.jsxs)(O.B, {
                                gapSize: 12,
                                children: [(0,
                                t.jsx)("h2", {
                                    children: "Before we get started..."
                                }), i ? (0,
                                t.jsx)(E.I, {
                                    message: i
                                }) : null, (0,
                                t.jsx)(f.V, {
                                    className: eM().dek,
                                    children: "Just a quick check to make sure you're on board with our terms and conditions."
                                })]
                            }), (0,
                            t.jsx)(er.S, {
                                name: "termsAndConditions",
                                dataTestId: "terms-checkbox",
                                isRequired: !0,
                                children: (0,
                                t.jsx)(ea, {})
                            }), (0,
                            t.jsx)(z.b, {
                                title: "Create Account"
                            })]
                        })
                    })
                }))
            })
        }
          , ed = i(66342)
          , ej = i(86869)
          , eN = i(5985)
          , eg = i(4269)
          , eI = i.n(eg)
          , eD = function() {
            var e = (0,
            L.hZ)(function(e) {
                return e
            })
              , n = e.setScreen
              , i = e.track;
            return (0,
            s.useEffect)(function() {
                ej.A.reloadGate()
            }, []),
            (0,
            t.jsxs)("div", {
                className: eI().wrapper,
                children: [(0,
                t.jsx)(eN.y, {
                    id: el._g.FORM_CTA,
                    minHeight: 394
                }), (0,
                t.jsx)(y.u, {
                    onClick: function() {
                        i({
                            action: "SignIn:Click",
                            method: "FreeAccountButton"
                        }),
                        n(o.cq.REGISTRATION_COMPLETE)
                    },
                    children: "Continue with Free Account"
                })]
            })
        };
        function ex() {
            var e = (0,
            L.hZ)(function(e) {
                return e.track
            })
              , n = (0,
            L.hZ)(function(e) {
                return e.showAuthenticationModal
            })
              , i = (0,
            L.hZ)(function(e) {
                return e.setScreen
            })
              , s = function() {
                n ? i(o.cq.LOGIN_SUCCESS) : window.location.href = "/"
            };
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsxs)(O.B, {
                    gapSize: 32,
                    children: [(0,
                    t.jsxs)(O.B, {
                        gapSize: 12,
                        children: [(0,
                        t.jsx)("h2", {
                            "data-testid": "account-login-success",
                            children: "You’re in!"
                        }), (0,
                        t.jsx)(f.V, {
                            children: "You are successfully signed in."
                        })]
                    }), (0,
                    t.jsx)(z.b, {
                        title: "Continue",
                        onClick: function() {
                            e({
                                action: "SignIn:Click",
                                method: "GetStartedButton"
                            }),
                            s()
                        }
                    })]
                })
            })
        }
        var ey = i(39204)
          , ez = i.n(ey)
          , e_ = function() {
            return (0,
            t.jsx)("svg", {
                width: "201",
                height: "42",
                viewBox: "0 0 201 42",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                t.jsx)("g", {
                    id: "*TODAY* / Stacked / Positive Full Color",
                    children: (0,
                    t.jsx)("g", {
                        id: "Group 5",
                        children: (0,
                        t.jsx)("path", {
                            id: "TODAY",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M25.0849 38.9706V10.0709H38.4852V1.81383H1.52734V10.0709H14.744V38.9706H25.0849ZM80.8597 20.3899C80.8597 31.8319 72.0486 39.6761 60.8511 39.6761C49.6536 39.6761 40.8425 31.8319 40.8425 20.3899C40.8425 8.94798 49.6536 1.10376 60.8511 1.10376C72.0486 1.10376 80.8597 8.94798 80.8597 20.3899ZM70.1519 20.3922C70.1519 14.0815 66.5418 9.95294 60.8513 9.95294C55.1608 9.95294 51.5507 14.0815 51.5507 20.3922C51.5507 26.703 55.1608 30.8315 60.8513 30.8315C66.5418 30.8315 70.1519 26.703 70.1519 20.3922ZM96.8623 31.0633H100.962C107.693 31.0633 111.67 27.1707 111.67 20.3291C111.67 13.6055 107.693 9.7129 100.962 9.7129H96.8623V31.0633ZM86.4608 38.9706V1.81378H101.697C114.485 1.81378 122.378 8.77331 122.378 20.3922C122.378 32.0111 114.485 38.9706 101.697 38.9706H86.4608ZM138.563 1.81378H150.189L165.547 38.9706H154.472L151.596 31.7751H136.544L133.668 38.9706H123.205L138.563 1.81378ZM143.949 13.3143L139.544 24.2844H148.6L144.194 13.3143H143.949ZM180.306 15.202L188.566 1.81378H199.764L184.956 24.8746V38.9706H174.86V24.8746L160.053 1.81378H171.617L180.306 15.202Z",
                            fill: "#FF503C"
                        })
                    })
                })
            })
        }
          , eT = function() {
            return (0,
            t.jsxs)("svg", {
                width: "200",
                height: "97",
                viewBox: "0 0 200 97",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M199.914 92.5635C197.772 41.0931 153.861 0 100.004 0C46.5198 0 2.83158 40.5382 0.136548 91.5161C0.0431205 93.1809 0 94.8457 0 96.5175H25.9298C25.9298 94.9012 25.9873 93.278 26.1023 91.6826C28.6895 54.5018 60.843 25.0277 100.004 25.0277C139.308 25.0277 171.562 54.7307 173.934 92.1057C174.027 93.5694 174.077 95.033 174.077 96.5175H200C200 95.1995 199.978 93.8676 199.914 92.5635",
                    fill: "#FFD2C8"
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M100.005 32.1736C64.6607 32.1736 35.7484 58.7204 33.4846 92.2802C33.3768 93.6745 33.3408 95.0896 33.3408 96.5185H59.2634C59.2634 94.9855 59.3568 93.4595 59.5365 91.9681C61.8794 72.4343 79.142 57.1943 100.005 57.1943C120.983 57.1943 138.31 72.5799 140.51 92.2663C140.668 93.6676 140.747 95.0757 140.747 96.5185H166.669C166.669 95.1381 166.626 93.7924 166.54 92.4328C164.355 58.7967 135.4 32.1736 100.005 32.1736",
                    fill: "#FFA193"
                }), (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M100.004 64.3484C83.7476 64.3484 70.2078 75.572 67.2684 90.4304C66.8803 92.4005 66.6719 94.4399 66.6719 96.5278H133.336C133.336 94.9601 133.221 93.434 132.998 91.9496C130.699 76.342 116.807 64.3484 100.004 64.3484",
                    fill: "#FF503C"
                })]
            })
        }
          , eh = function() {
            var e, n = (0,
            M.C)().isNews, i = (0,
            L.hZ)(function(e) {
                return e.track
            }), s = (null !== (e = (0,
            p.J)()) && void 0 !== e ? e : {})["nbc-news-subscriptions"];
            return n ? s || ed.cp ? (0,
            t.jsx)(eD, {}) : (0,
            t.jsx)(ex, {}) : (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: ez().title,
                    children: [(0,
                    t.jsx)(eT, {}), (0,
                    t.jsx)("h3", {
                        className: ez().heading,
                        "data-testid": "account-login-success",
                        children: "Welcome to"
                    }), (0,
                    t.jsx)(e_, {})]
                }), (0,
                t.jsxs)(f.V, {
                    children: ["Thank you for joining us,", (0,
                    t.jsx)("br", {}), "we're so happy you're here!"]
                }), (0,
                t.jsx)(z.b, {
                    title: "Get Started",
                    variant: "form",
                    onClick: function() {
                        i({
                            action: "SignIn:Click",
                            method: "GetStartedButton"
                        }),
                        window.location.href = "/account"
                    }
                })]
            })
        }
          , ep = function() {
            var e = (0,
            M.C)().vertical
              , n = (0,
            L.hZ)(function(e) {
                return e.requestOneTimeCode
            })
              , i = (0,
            L.hZ)(function(e) {
                return e.setError
            })
              , s = (0,
            L.hZ)(function(e) {
                return e.setScreen
            })
              , a = (0,
            L.hZ)(function(e) {
                return e.setEmail
            })
              , r = (0,
            L.hZ)(function(e) {
                return e.error
            })
              , l = (0,
            D.mN)({
                resolver: (0,
                x.t)($.y4)
            });
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsx)(D.Op, (0,
                I._)((0,
                g._)({}, l), {
                    children: (0,
                    t.jsx)(S, {
                        submitCallback: function(t) {
                            i(""),
                            n({
                                brand: (0,
                                v.getBedrockBrandForVertical)(e),
                                email: t.email,
                                trackingPayload: {
                                    action: "SignIn:Start",
                                    method: "LogInOTCScreen:SubmitButton:Click"
                                }
                            }).then(function(e) {
                                e && (a(t.email),
                                s(e))
                            })
                        },
                        children: (0,
                        t.jsxs)(O.B, {
                            gapSize: 32,
                            children: [(0,
                            t.jsxs)(O.B, {
                                gapSize: 12,
                                children: [(0,
                                t.jsx)("h2", {
                                    "data-testid": "log-in-otc",
                                    children: "Log in with code"
                                }), r ? (0,
                                t.jsx)(E.I, {
                                    message: r
                                }) : null, (0,
                                t.jsx)(f.V, {
                                    children: "Get a one-time code sent to your email that will sign you in without your password"
                                })]
                            }), (0,
                            t.jsx)(C.A, {
                                name: "email",
                                isRequired: !0,
                                dataTestId: "email-input-field",
                                type: "email",
                                placeholder: "Email"
                            }), (0,
                            t.jsx)(z.b, {
                                title: "Continue"
                            })]
                        })
                    })
                }))
            })
        }
          , eL = i(53724)
          , em = function() {
            var e = (0,
            L.hZ)(function(e) {
                return e.updateUserProfile
            })
              , n = (0,
            L.hZ)(function(e) {
                return e.setScreen
            })
              , i = (0,
            L.hZ)(function(e) {
                return e.track
            })
              , s = (0,
            L.hZ)(function(e) {
                return e.signInType
            })
              , a = (0,
            L.hZ)(function(e) {
                return e.error
            })
              , r = (0,
            D.mN)({
                defaultValues: {
                    firstName: ""
                }
            });
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsx)(D.Op, (0,
                I._)((0,
                g._)({}, r), {
                    children: (0,
                    t.jsx)("form", {
                        onSubmit: r.handleSubmit(function(t) {
                            var s, a = {
                                first_name: null !== (s = t.firstName) && void 0 !== s ? s : ""
                            }, r = {
                                action: "SignUp:Submit",
                                method: "SubmitButton:Click"
                            };
                            i(r),
                            e(a).then(function(e) {
                                e.success && (i({
                                    action: "SignUp:Success",
                                    method: r.method
                                }),
                                n(e.screen))
                            })
                        }),
                        "data-testid": "account-firstName",
                        children: (0,
                        t.jsxs)(O.B, {
                            gapSize: 32,
                            children: [(0,
                            t.jsxs)(O.B, {
                                gapSize: 12,
                                children: [(0,
                                t.jsx)("h2", {
                                    "data-testid": "account-newUser",
                                    children: "Congrats! You now have a TODAY account!"
                                }), a ? (0,
                                t.jsx)(E.I, {
                                    message: a
                                }) : null, (0,
                                t.jsxs)(f.V, {
                                    children: ["Time to get to know you.", (0,
                                    t.jsx)("br", {}), (0,
                                    t.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "What is your first name?"
                                    })]
                                })]
                            }), (0,
                            t.jsx)(O.B, {
                                gapSize: 12,
                                children: (0,
                                t.jsx)(C.A, {
                                    dataTestId: "name-input-field",
                                    name: "firstName",
                                    "aria-label": "What is your first name?",
                                    placeholder: "Name"
                                })
                            }), (0,
                            t.jsxs)(O.B, {
                                gapSize: 12,
                                children: [(0,
                                t.jsx)(z.b, {
                                    title: "Continue"
                                }), (0,
                                t.jsx)(y.u, {
                                    onClick: function() {
                                        var e = "registration" === s ? o.cq.REGISTRATION_SUCCESS : o.cq.LOGIN_SUCCESS;
                                        i({
                                            action: "SignIn:Click",
                                            method: "SkipButton",
                                            targetScreen: e
                                        }),
                                        n(e)
                                    },
                                    dataTestid: "skip-button",
                                    variant: "block",
                                    children: "Skip"
                                })]
                            })]
                        })
                    })
                }))
            })
        }
          , eA = i(99551)
          , eS = i.n(eA)
          , eO = i(51140)
          , eC = i.n(eO)
          , eE = i(75656)
          , ew = i.n(eE)
          , ek = function() {
            return (0,
            t.jsxs)(O.B, {
                gapSize: 32,
                "data-testid": "powered-by-nbcu-profile",
                children: [(0,
                t.jsxs)(O.B, {
                    gapSize: 12,
                    children: [(0,
                    t.jsx)("img", {
                        className: eS().NBCUniLogoStyles,
                        src: eC(),
                        alt: "NBC Universal Logo"
                    }), (0,
                    t.jsx)(f.V, {
                        children: "We’re always adding new content and brands. Check back for more!"
                    })]
                }), (0,
                t.jsxs)(O.B, {
                    gapSize: 16,
                    children: [(0,
                    t.jsxs)("div", {
                        className: eS().rowsLogos,
                        children: [(0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/bravo-small-black.svg",
                                alt: "Bravo Logo"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/nbc-small-color.svg",
                                alt: "NBC Logo"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/the-voice.png",
                                alt: "The Voice Logo"
                            })
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: eS().rowsLogos,
                        children: [(0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/news-small-color.svg",
                                alt: "News Logo"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().NBCOlympics_style,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/olympics-small-color.svg",
                                alt: "Olympics Logo"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/sports-small-black.svg",
                                alt: "Sports Logo"
                            })
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: eS().rowsLogos,
                        children: [(0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/telemundo-small-color.svg",
                                alt: "Telemundo Logo"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().logoImages,
                                src: "https://id.nbcuni.com/kmpsdk/assets/brands/today-small-color.svg",
                                alt: "Today Logo"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: eS().circlesForLogos,
                            children: (0,
                            t.jsx)("img", {
                                className: eS().StartToday_style,
                                src: ew(),
                                alt: "Start TODAY Logo"
                            })
                        })]
                    })]
                })]
            })
        }
          , ef = function() {
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsx)("h2", {
                    "data-testid": "not-available",
                    children: "We’re sorry, this content is not available in your location."
                })
            })
        }
          , ev = i(84033)
          , eb = {
            article: "Sign up for your free TODAY account to read this article!",
            recipe: "Sign up for your free TODAY account to get this recipe!",
            default: "Access with your free TODAY account!"
        }
          , eY = function(e) {
            var n = e.contentType
              , i = (0,
            s.useContext)(ev.P).path;
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("h2", {
                    "data-testid": "chromeless",
                    children: eb[void 0 === n ? "default" : n]
                }), (0,
                t.jsx)(z.b, {
                    onClick: function() {
                        var e = (0,
                        T._)(i.split("?"), 1)[0];
                        window.open("".concat(e, "?account=signup"), "_blank")
                    },
                    variant: "primary",
                    title: "Sign Up"
                })]
            })
        }
          , eQ = i(48011)
          , eU = i(10438)
          , eZ = i.n(eU)
          , eB = function() {
            return (0,
            t.jsx)("svg", {
                fill: "none",
                viewBox: "0 0 366 176",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                t.jsxs)("g", {
                    fill: "#ffb186",
                    children: [(0,
                    t.jsx)("path", {
                        d: "m.157373 7.47363c3.908597 93.71037 84.048127 168.52637 182.340627 168.52637 97.61 0 177.343-73.806 182.262-166.6193.17-3.03105.249-6.0621.249-9.105777l-47.323-.000004c0 2.942641-.105 5.897911-.315 8.802671-4.722 67.69341-63.403 121.35541-134.873 121.35541-71.732 0-130.5975-54.0787-134.9258-122.12583-.1705-2.66479-.2623-5.32959-.2623-8.032275l-47.30993316-.000004c-.00000021 2.399579.03936156 4.824419.15740616 7.198739"
                    }), (0,
                    t.jsx)("path", {
                        d: "m181.776 58.1818c29.866.0001 54.742-20.2927 60.142-47.1575.713-3.56186 1.096-7.24918 1.096-11.02429106l-122.476-.00001071c0 2.83447177.211 5.59368177.62 8.27765177 4.225 28.21925 29.748 49.90415 60.618 49.90415"
                    }), (0,
                    t.jsx)("path", {
                        d: "m181.046 117.819c64.549 0 117.351-48.6086 121.485-110.05804.197-2.55298.263-5.14407.263-7.76055506l-47.342-.00000414c0 2.8070092-.171 5.6013192-.499 8.3321192-4.279 35.76718-35.805 63.67218-73.907 63.67218-38.311 0-69.956-28.1718-73.972-64.21835-.289-2.56569-.433-5.14407-.433-7.78596221l-47.3419-.00000414c0 2.52757635.0787 4.99164635.2362 7.48112635 3.99 61.58909 56.8707 110.33749 121.5107 110.33749"
                    })]
                })
            })
        }
          , eV = function() {
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("div", {
                    className: r()(eZ().circleWrapper, eZ().circleLeft),
                    children: (0,
                    t.jsx)(eB, {})
                }), (0,
                t.jsx)("div", {
                    className: r()(eZ().circleWrapper, eZ().circleRight),
                    children: (0,
                    t.jsx)(eB, {})
                })]
            })
        }
          , eR = i(54103)
          , eF = i(33218)
          , eP = i(85993)
          , eG = function(e) {
            return !!e && o.xP.includes(e)
        }
          , eW = function(e) {
            return o.NZ.includes(e)
        }
          , eq = function(e, n) {
            if (null == e ? void 0 : e.length) {
                var i = e[e.length - 1];
                if (!(eW(n) && eG(i)))
                    return i
            }
        }
          , eH = i(14620)
          , eJ = i.n(eH);
        function eX(e) {
            return e.loading ? (0,
            t.jsx)("div", {
                "data-testid": "loading",
                className: eJ().loader
            }) : null
        }
        var eK = function() {
            return (0,
            t.jsx)(eX, {
                loading: !0
            })
        }
          , e$ = function(e) {
            var n, i, a, u, d, j = e.layout, g = e.showSuccessScreen, I = void 0 !== g && g, D = e.callback, x = void 0 === D ? function() {}
            : D, y = e.onClose, z = e.isOverlay, _ = e.branding, T = e.pageView, h = e.isChromeless, p = void 0 !== h && h, L = e.contentType, m = e.className, A = e.isUSRegion, S = void 0 === A || A, C = (0,
            M.C)().isToday, E = null != _ ? _ : C ? "today" : "nbcnews", w = (0,
            l.hZ)(function(e) {
                return e.loading
            }), k = (0,
            l.hZ)(function(e) {
                return e.screen
            }), f = (0,
            l.hZ)(function(e) {
                return e.setScreen
            }), v = (0,
            l.hZ)(function(e) {
                return e.setPageView
            }), b = (0,
            l.hZ)(function(e) {
                return e.track
            }), Y = (0,
            l.hZ)(function(e) {
                return e.error
            }), Q = (0,
            l.hZ)(function(e) {
                return e.showAuthenticationModal
            }), U = (0,
            l.hZ)(function(e) {
                return e.isCheckoutFlow
            }), Z = (null !== (d = (0,
            c.a)()) && void 0 !== d ? d : {}).isUsa;
            (0,
            s.useEffect)(function() {
                v(T.charAt(0).toUpperCase() + T.slice(1))
            }, []),
            (0,
            s.useEffect)(function() {
                Y && b({
                    action: "Error",
                    method: "".concat(T, ":").concat(k, ":Error"),
                    error: Y
                })
            }, [Y]);
            var B = function() {
                if (!Z || !S)
                    return ef;
                if (p)
                    return eY;
                switch (k) {
                case o.cq.REGISTER:
                    return eo;
                case o.cq.LOGIN:
                    return ei;
                case o.cq.SOCIAL_REGISTRATION:
                    return eu;
                case o.cq.LOGIN_OTC_EMAIL:
                    return ep;
                case o.cq.VERIFY_OTC:
                case o.cq.LOGIN_OTC:
                    return eL.s;
                case o.cq.REGISTRATION_SUCCESS:
                    if (I && !U)
                        return eh;
                    return f(o.cq.LOGIN_SUCCESS),
                    null;
                case o.cq.REGISTRATION_COMPLETE:
                    return ex;
                case o.cq.LOGIN_SUCCESS:
                    return eK;
                case o.cq.NBCU_PROFILE:
                    return ek;
                case o.cq.USER_NAME:
                    return em;
                case o.cq.PREFERENCES:
                    return eR.l;
                default:
                    return eo
                }
            }()
              , V = o.g5.includes(k) ? 120 : 64;
            (0,
            s.useEffect)(function() {
                k === o.cq.LOGIN_SUCCESS && x({
                    isSuccess: !0
                })
            }, [k]);
            var R = o.le.includes(k)
              , F = (n = (0,
            s.useRef)([]),
            i = (0,
            s.useRef)(void 0),
            a = (0,
            s.useRef)(void 0),
            (0,
            s.useEffect)(function() {
                var e, t = i.current;
                t && t !== k && (a.current === t ? a.current = void 0 : (e = n.current,
                n.current = t && t !== k ? (0,
                eP._)(Array.isArray(e) ? e : []).concat([t]) : null != e ? e : [])),
                i.current = k
            }, [k]),
            u = function() {
                var e = eq(n.current, k);
                if (!e && i.current && i.current !== k) {
                    var t = i.current;
                    eW(k) && eG(t) || (e = t)
                }
                return e
            }
            ,
            {
                canShowBack: !o.Gd.includes(k) && !!u(),
                handleBackButtonClick: function() {
                    var e, i = u();
                    i && (null == b || b({
                        action: "SignIn:Click",
                        value: "BackButton",
                        screen: k,
                        targetScreen: i
                    }),
                    eq(n.current, k) === i && (n.current = (null == (e = n.current) ? void 0 : e.length) ? e.slice(0, -1) : []),
                    a.current = k,
                    null == f || f(i))
                }
            })
              , P = F.canShowBack
              , G = F.handleBackButtonClick;
            return B ? (0,
            t.jsxs)("div", {
                className: r()(eJ().wrapper, eJ()["wrapper__".concat(void 0 === j ? "fixed" : j)], void 0 === m ? "" : m),
                "data-testid": "screen-wrapper",
                "data-activity-map": "bedrock-login",
                children: [R && (0,
                t.jsx)(eV, {}), (0,
                t.jsxs)(O.B, {
                    gapSize: 12,
                    className: eJ().inFront,
                    children: [(0,
                    t.jsx)(N, {}), Q && !z ? null : (0,
                    t.jsxs)(O.B, {
                        gapSize: V,
                        className: eJ().screen,
                        children: [(0,
                        t.jsx)(eF.Y, {
                            onClose: y,
                            onBack: P ? G : void 0,
                            branding: E
                        }), (0,
                        t.jsx)("div", {
                            className: eJ().body,
                            children: (0,
                            t.jsx)(B, {
                                branding: E,
                                contentType: L
                            })
                        }), (0,
                        t.jsx)(eX, {
                            loading: w
                        })]
                    })]
                })]
            }) : null
        }
          , e0 = (0,
        eQ.Ng)(function(e) {
            var n, i = e.shared.pageView, t = e.shared.isChromeless;
            return {
                pageView: i = i ? "".concat(null === (n = i[0]) || void 0 === n ? void 0 : n.toUpperCase()).concat(i.slice(1)) : "",
                isChromeless: t
            }
        })(e$)
    }
    ,
    37479: e => {
        e.exports = {
            label: "styles_label__qHyDT",
            small: "styles_small__oQ8sQ",
            "live-dot-blink": "styles_live-dot-blink__25KFM",
            "fade-in": "styles_fade-in__zQBRP",
            "expand-in": "styles_expand-in__Msfr_",
            "chatblog-expand-in": "styles_chatblog-expand-in__XWWKl"
        }
    }
    ,
    39204: e => {
        e.exports = {
            title: "styles_title__F2wDE",
            heading: "styles_heading___htle",
            "live-dot-blink": "styles_live-dot-blink__Mrg8W",
            "fade-in": "styles_fade-in__AuZ6h",
            "expand-in": "styles_expand-in__ZYttF",
            "chatblog-expand-in": "styles_chatblog-expand-in__uAKWd"
        }
    }
    ,
    41355: e => {
        e.exports = {
            description: "styles_description__cwtOv",
            loginSubtitle: "styles_loginSubtitle__VSsOx",
            "live-dot-blink": "styles_live-dot-blink__whv_4",
            "fade-in": "styles_fade-in__vWI1G",
            "expand-in": "styles_expand-in__xexFb",
            "chatblog-expand-in": "styles_chatblog-expand-in__gxRoT"
        }
    }
    ,
    47483: e => {
        e.exports = {
            tooltip: "styles_tooltip__x7Y4p",
            valid: "styles_valid__TBPhG",
            error: "styles_error__6Ib2o",
            initial: "styles_initial__LIy4Q",
            icon: "styles_icon__FuBWj",
            dn: "styles_dn__87_bo",
            "live-dot-blink": "styles_live-dot-blink__WfhJL",
            "fade-in": "styles_fade-in__zZNKR",
            "expand-in": "styles_expand-in__OWvvP",
            "chatblog-expand-in": "styles_chatblog-expand-in__GbKEq"
        }
    }
    ,
    50784: e => {
        e.exports = {
            inputWrapper: "styles_inputWrapper__e1S0d",
            error: "styles_error__dt440",
            "live-dot-blink": "styles_live-dot-blink__sS2DE",
            "fade-in": "styles_fade-in__jmGNX",
            "expand-in": "styles_expand-in__gK05y",
            "chatblog-expand-in": "styles_chatblog-expand-in__w8q7I"
        }
    }
    ,
    51140: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ2IiB2aWV3Qm94PSIwIDAgMzAwIDQ2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI4OC4zOTggMzYuMzY1OUMyODcuODUxIDM1LjgxODEgMjg3Ljc2OCAzNS40ODE1IDI4Ny43NjggMzQuNDI4OFY2LjY0OTRIMjc5LjEwNVY3LjA3MDdMMjgwLjgzMSA4Ljc5NzdDMjgxLjM3NyA5LjM0NDQgMjgxLjQ2MSA5LjY3OTkgMjgxLjQ2MSAxMC43MzI2VjM0LjQyODhDMjgxLjQ2MSAzNS40ODE1IDI4MS4zNzcgMzUuODE4MSAyODAuODMxIDM2LjM2NTlMMjc5LjEwNSAzOC4wOTA3VjM4LjUxMkgyOTAuMTIyVjM4LjA5MDdMMjg4LjM5OCAzNi4zNjU5Wk0yNjguODE5IDI5LjQ2NDVDMjY4LjMxNSAyOS42MzE3IDI2Ny4zODkgMjkuNzE2NCAyNjYuMTcxIDI5LjhDMjYzLjM1MyAyOS45Njk0IDI2Mi4zODYgMzAuOTc5MiAyNjIuMzg2IDMyLjM2NjNDMjYyLjM4NiAzMy42MzEzIDI2My4yMjYgMzQuNjQxMSAyNjQuNjk5IDM0LjY0MTFDMjY3LjUxNSAzNC42NDExIDI2OC44MTkgMzIuNzQ1OCAyNjguODE5IDMwLjg1MTZWMjkuNDY0NVpNMjc1LjcxNCAzNi4zNjU5TDI3Ny40MzggMzguMDkxOFYzOC41MTJIMjY4Ljk0NFYzNS43Nzc0QzI2Ny45NzcgMzcuNzE0NSAyNjUuNjI0IDM5LjEwMTYgMjYyLjU5NiAzOS4xMDE2QzI1OC45MzcgMzkuMTAxNiAyNTYuMDc4IDM2Ljc4NzIgMjU2LjA3OCAzMy4yMUMyNTYuMDc4IDI4Ljc0ODQgMjU5LjIzMiAyNi42NDQxIDI2Ni4wNDUgMjYuNTE3NkMyNjguMjMxIDI2LjQ3NTggMjY4LjgxOSAyNi4wMTI3IDI2OC44MTkgMjQuODc1M0MyNjguODE5IDIzLjgyMzcgMjY3LjgwOSAyMi44MTM5IDI2NS4xNjEgMjIuODEzOUMyNjIuMzQ0IDIyLjgxMzkgMjYwLjkxNCAyNC4xMTc0IDI2MC4wMzIgMjQuOTE3MUwyNTYuNzUyIDIxLjA0NTFDMjU4LjY0MyAxOS4xNTIgMjYxLjcxMyAxNy45Mjk5IDI2NS43OTEgMTcuOTI5OUMyNzIuMjY2IDE3LjkyOTkgMjc1LjA4NCAyMC41ODIgMjc1LjA4NCAyNS43NTg2VjM0LjQyOTlDMjc1LjA4NCAzNS40ODI2IDI3NS4xNjggMzUuODIwMyAyNzUuNzE0IDM2LjM2NTlWMzYuMzY1OVpNMjQ3LjA3MiAyNi4xNDE0QzI0NC4zNCAyNS42NzgzIDI0Mi4xOTYgMjUuNTkzNiAyNDIuMTk2IDI0LjAzNzFDMjQyLjE5NiAyMy4xMTA5IDI0Mi45OTUgMjIuNDc5NSAyNDQuODQ0IDIyLjQ3OTVDMjQ3LjMyNSAyMi40Nzk1IDI0OS42MzcgMjMuMjgwMyAyNTAuNTE5IDI1LjE3MzRMMjUwLjk0MSAyNS4yOTg4TDI1Mi45MTYgMTcuNTk3N0wyNTIuNDk3IDE3LjQyODNDMjUxLjY1NiAxOC4wNTk3IDI1MC45NDEgMTguNDgxIDI0OS43MjEgMTguNDgxQzI0OC4zMzQgMTguNDgxIDI0Ny4wNzIgMTcuOTMzMiAyNDQuNDY2IDE3LjkzMzJDMjM5Ljk2NiAxNy45MzMyIDIzNS43NjIgMTkuNTMyNiAyMzUuNzYyIDI0LjU0MkMyMzUuNzYyIDI4LjQ1NjkgMjM4LjkxNiAyOS45NzE2IDI0MS45NDIgMzAuNDc2NUMyNDQuNzYgMzAuOTM5NiAyNDcuMDMxIDMxLjAyNDMgMjQ3LjAzMSAzMi43MDg0QzI0Ny4wMzEgMzMuNjc1MyAyNDYuMTg5IDM0LjM5MTQgMjQ0LjM0IDM0LjM5MTRDMjQxLjQzOSAzNC4zOTE0IDIzOSAzMy4yNTUxIDIzNy41NyAzMi4wNzdMMjM0LjYyNyAzNi4zNjkyQzIzNi44MTMgMzguMTc5OCAyNDAuMzg3IDM5LjEwNDkgMjQzLjkyIDM5LjEwNDlDMjQ5LjgwNSAzOS4xMDQ5IDI1My40NjMgMzYuNTM3NSAyNTMuNDYzIDMyLjAzNDFDMjUzLjQ2MyAyOC4xNjEgMjUwLjE0MSAyNi42NDYzIDI0Ny4wNzIgMjYuMTQxNFYyNi4xNDE0Wk0yMjUuMTMzIDIyLjM5MjZWMTguMzA5NEgyMTYuNjM5VjE4LjcyOTZMMjE4LjM2NCAyMC40NTU1QzIxOC45MSAyMS4wMDMzIDIxOC45OTMgMjEuMzM5OSAyMTguOTkzIDIyLjM5MjZWMzQuNDI4OEMyMTguOTkzIDM1LjQ4MjYgMjE4LjkxIDM1LjgxODEgMjE4LjM2NCAzNi4zNjU5TDIxNi42MzkgMzguMDkxOFYzOC41MTJIMjI3LjY1NlYzOC4wOTE4TDIyNS45MzIgMzYuMzY1OUMyMjUuMzg0IDM1LjgxODEgMjI1LjMwMSAzNS40ODI2IDIyNS4zMDEgMzQuNDI4OFYyOC4zMjZDMjI1LjMwMSAyNS4yOTY2IDIyNi44MTUgMjMuNjU0MyAyMjkuMjUzIDIzLjY1NDNDMjMwLjY0IDIzLjY1NDMgMjMxLjYwNyAyNC4yNDI4IDIzMi4yODEgMjQuODMzNUwyMzMuOTIgMTguNTE5NUMyMzMuMzc0IDE4LjIyNDcgMjMyLjQwNiAxNy45Mjk5IDIzMS4yNzEgMTcuOTI5OUMyMjguMjg1IDE3LjkyOTkgMjI2LjAxNSAxOS45NTA2IDIyNS4xMzMgMjIuMzkyNlYyMi4zOTI2Wk0yMDcuODg3IDI2LjU2MjdDMjA3Ljc2MSAyNC40MTU1IDIwNi41ODQgMjIuNjQ3OCAyMDQuMTA0IDIyLjY0NzhDMjAxLjU4IDIyLjY0NzggMjAwLjE1IDI0LjUwMDIgMTk5Ljk4MyAyNi41NjI3SDIwNy44ODdaTTIxNC4yOCAyOC40MTRDMjE0LjI4IDI5LjEzMDEgMjE0LjI0IDI5LjgwMzMgMjE0LjE5NiAzMC4yMjQ2SDIwMC4wNjlDMjAwLjMyMiAzMi4yMDI0IDIwMi4wODggMzQuMDExOSAyMDUuMTk5IDM0LjAxMTlDMjA3LjE3NSAzNC4wMTE5IDIwOC42ODggMzMuMjU1MSAyMDkuNTI5IDMyLjMyODlMMjEzLjAxOSAzNi40NTM5QzIxMS4yMTEgMzguMTM2OSAyMDguMDE2IDM5LjEwNiAyMDQuNjUyIDM5LjEwNkMxOTcuODg0IDM5LjEwNiAxOTMuNTk0IDM1LjA2NDYgMTkzLjU5NCAyOC43NTA2QzE5My41OTQgMjIuNDM3NyAxOTcuNzE0IDE3LjkzMzIgMjA0LjUyNSAxNy45MzMyQzIxMS4yOTYgMTcuOTMzMiAyMTQuMjggMjIuMzU0MSAyMTQuMjggMjguNDE0VjI4LjQxNFpNMTk0LjE1IDE4LjMwOTRIMTg2LjI4NkwxODIuNjI5IDI4LjA3NDFIMTgyLjU0NUwxNzguMzgyIDE4LjMwOTRIMTcwLjY0NlYxOC43NzI1QzE3Mi4yNDMgMTkuOTA4OCAxNzMuMDg1IDIxLjMzOTkgMTczLjg0MSAyMi44MTM5TDE4Mi4yMDkgMzkuNDM4MkgxODIuNjI5TDE5MC45NTQgMjIuODEzOUMxOTEuNzUzIDIxLjIxMzQgMTkyLjQ2NyAxOS45NTA2IDE5NC4xNSAxOC43NzI1VjE4LjMwOTRaTTE2NS4wMTMgMTUuMzIwN0MxNjcuMDMxIDE1LjMyMDcgMTY4LjcxMyAxMy44MDYgMTY4LjcxMyAxMS42NTg4QzE2OC43MTMgOS41MTI3IDE2Ny4wMzEgNy45OTY5IDE2NS4wMTMgNy45OTY5QzE2My4wMzcgNy45OTY5IDE2MS4yNzEgOS41MTI3IDE2MS4yNzEgMTEuNjU4OEMxNjEuMjcxIDEzLjgwNiAxNjMuMDM3IDE1LjMyMDcgMTY1LjAxMyAxNS4zMjA3VjE1LjMyMDdaTTE2OC4yMDkgMzQuNDI4OFYxOC4zMDk0SDE1OS41NDhWMTguNzMwN0wxNjEuMjcxIDIwLjQ1NTVDMTYxLjgxOCAyMS4wMDMzIDE2MS45MDIgMjEuMzM5OSAxNjEuOTAyIDIyLjM5MjZWMzQuNDI4OEMxNjEuOTAyIDM1LjQ4MjYgMTYxLjgxOCAzNS44MTgxIDE2MS4yNzEgMzYuMzY1OUwxNTkuNTQ4IDM4LjA5MThWMzguNTEySDE3MC41NjRWMzguMDkxOEwxNjguODQgMzYuMzY1OUMxNjguMjkzIDM1LjgxODEgMTY4LjIwOSAzNS40ODI2IDE2OC4yMDkgMzQuNDI4OFYzNC40Mjg4Wk0xNTQuODExIDM0LjQyODhWMjUuOTI4QzE1NC44MTEgMjAuODc2OCAxNTIuMjg4IDE3LjkyOTkgMTQ3LjkxNSAxNy45Mjk5QzE0NC45MzEgMTcuOTI5OSAxNDIuMTEzIDE5LjY1NTggMTQxLjE0NiAyMS45Mjg0VjE4LjMwOTRIMTMyLjY1M1YxOC43Mjk2TDEzNC4zNzcgMjAuNDU1NUMxMzQuOTI0IDIxLjAwMjIgMTM1LjAwNyAyMS4zMzg4IDEzNS4wMDcgMjIuMzkxNVYzNC40Mjg4QzEzNS4wMDcgMzUuNDgyNiAxMzQuOTI0IDM1LjgxODEgMTM0LjM3NyAzNi4zNjU5TDEzMi42NTMgMzguMDkxOFYzOC41MTJIMTQzLjY2OVYzOC4wOTE4TDE0MS45NDUgMzYuMzY1OUMxNDEuMzk5IDM1LjgxODEgMTQxLjMxNCAzNS40ODI2IDE0MS4zMTQgMzQuNDI4OFYyNy42NTI4QzE0MS4zMTQgMjUuMjUzNyAxNDIuNDkxIDIzLjM1OTUgMTQ1LjE4MyAyMy4zNTk1QzE0Ny40NTIgMjMuMzU5NSAxNDguNTA0IDI1LjAwMTggMTQ4LjUwNCAyNy4zMTYyVjM4LjUxMkgxNTcuMTY2VjM4LjA5MThMMTU1LjQ0MSAzNi4zNjU5QzE1NC44OTUgMzUuODE4MSAxNTQuODExIDM1LjQ4MjYgMTU0LjgxMSAzNC40Mjg4VjM0LjQyODhaTTExOS4zNzggOS40Nzk3TDEyMS4xMDEgMTEuMjA1NkMxMjEuNTIxIDExLjYyNjkgMTIxLjczMSAxMS45NjM1IDEyMS43MzEgMTIuNjM2N1YyNy4xMTZDMTIxLjczMSAzMS4zNjc1IDExOS41ODcgMzMuNDI4OSAxMTUuODAzIDMzLjQyODlDMTEyLjAxOSAzMy40Mjg5IDEwOS43OTEgMzEuNDUxMSAxMDkuNzkxIDI3LjExNlYxMi42MzY3QzEwOS43OTEgMTEuOTYzNSAxMTAgMTEuNjI2OSAxMTAuNDIxIDExLjIwNTZMMTEyLjE0NiA5LjQ3OTdWOS4wNTk1SDEwMC43OTNWOS40Nzk3TDEwMi41MTYgMTEuMjA1NkMxMDIuOTM3IDExLjYyNjkgMTAzLjE0OCAxMS45NjM1IDEwMy4xNDggMTIuNjM2N1YyNi45NDY2QzEwMy4xNDggMzUuMTEzIDEwOC40MDQgMzkuMTExNSAxMTUuODAzIDM5LjExMTVDMTIzLjE2MSAzOS4xMTE1IDEyOC40NTkgMzUuMTEzIDEyOC40NTkgMjYuOTQ2NlYxMi42MzY3QzEyOC40NTkgMTEuOTYzNSAxMjguNjY5IDExLjYyNjkgMTI5LjA5IDExLjIwNTZMMTMwLjgxMyA5LjQ3OTdWOS4wNTk1SDExOS4zNzhWOS40Nzk3Wk04OC4xMTMzIDMzLjUxNDdDODMuMDI0NiAzMy41MTQ3IDc5LjU3NjQgMjkuNjg1NiA3OS41NzY0IDIzLjkxODNDNzkuNTc2NCAxNy44MTU1IDgzLjQwMzcgMTQuMTk1NCA4OC40MDY3IDE0LjE5NTRDOTIuMzE3NCAxNC4xOTU0IDk0LjI1MDMgMTYuMzQyNiA5NC43OTc1IDE4LjE1MUw5NS4yNjAxIDE4LjI3ODZMOTcuNzgzIDguMjE4TDk3LjM2MjIgOC4wNTA4Qzk2LjU2MzMgOC42ODIyIDk1LjcyMjcgOS4xMDI0IDk0LjQxOTUgOS4xMDI0QzkyLjk4OTkgOS4xMDI0IDkwLjcxOTcgOC41NTU3IDg3Ljk4NjkgOC41NTU3Qzc5LjE1NjcgOC41NTU3IDcyLjM4NjcgMTQuMzYzNyA3Mi4zODY3IDIzLjg3NjVDNzIuMzg2NyAzMy4zNDc1IDc5LjExNDkgMzkuMTEzNyA4Ny44NjA1IDM5LjExMzdDOTIuOTA1MyAzOS4xMTM3IDk2LjczMjYgMzcuMjE4NCA5OS4wODYzIDM0LjY5MjhMOTUuMTMzNyAzMC4wMjExQzkzLjg3MjMgMzEuNzQ4MSA5MS42MDIxIDMzLjUxNDcgODguMTEzMyAzMy41MTQ3VjMzLjUxNDdaTTYzLjAxNDcgMjkuNDY2N0M2My4wMTQ3IDI2Ljg1NjQgNjEuNDE3IDI1Ljg0NjYgNTguMjYzMyAyNS44NDY2SDUwLjk0NzNWMzMuMDQyOEg1OC4yNjMzQzYwLjk1NDQgMzMuMDQyOCA2My4wMTQ3IDMyLjExNzcgNjMuMDE0NyAyOS40NjY3VjI5LjQ2NjdaTTUwLjk0NzMgMjAuNzExOEg1OC4zODk3QzYwLjY1OTkgMjAuNzExOCA2MS45NjMxIDE5LjY1OTEgNjEuOTYzMSAxNy41OTc3QzYxLjk2MzEgMTUuNzAzNSA2MC44MjggMTQuNDM5NiA1OC4zODk3IDE0LjQzOTZINTAuOTQ3M1YyMC43MTE4Wk02OS44MjYyIDMwLjEzOTlDNjkuODI2MiAzNS44NjQzIDY1Ljc0NzQgMzguNTE1MyA1OS4wNjIgMzguNTE1M0g0MS44NjUyVjM4LjA5NEw0My41ODkzIDM2LjM2OTJDNDQuMDA5MSAzNS45NDc5IDQ0LjIyIDM1LjYxMTMgNDQuMjIgMzQuOTM4MVYxMi42MzAxQzQ0LjIyIDExLjk1NjkgNDQuMDA5MSAxMS42MjAzIDQzLjU4OTMgMTEuMTk5TDQxLjg2NTIgOS40NzQyVjkuMDUxOEg1OS4yMzAyQzY1LjQ5NDYgOS4wNTE4IDY4LjYwNjUgMTEuOTk4NyA2OC42MDY1IDE3LjAwN0M2OC42MDY1IDIwLjI0ODcgNjYuMDQxOSAyMi40Mzc3IDYzLjMwOSAyMy4wMjYyVjIzLjExMDlDNjcuMzAzMyAyMy43ODQxIDY5LjgyNjIgMjYuMTQxNCA2OS44MjYyIDMwLjEzOTlWMzAuMTM5OVpNMjguNTIzIDkuMDQ5NkgzOS40MTI0VjkuNDY5OEwzNy42ODg0IDExLjE5NTdDMzcuMjY4NiAxMS42MTcgMzcuMDU3NiAxMS45NTQ3IDM3LjA1NzYgMTIuNjI2OFYzOS42NDk0SDM2LjYzNjhMMTYuMDM0NyAyMS4wMDMzVjM0LjkzNDhDMTYuMDM0NyAzNS42MDkxIDE2LjI0NDUgMzUuOTQ1NyAxNi42NjU0IDM2LjM2NTlMMTguMzg5NSAzOC4wOTE4VjM4LjUxMkg3LjVWMzguMDkxOEw5LjIyMjk4IDM2LjM2NTlDOS42NDM4MyAzNS45NDU3IDkuODUzNzEgMzUuNjA5MSA5Ljg1MzcxIDM0LjkzNDhWNy43MDIxSDEwLjI3NDZMMzAuODc2NyAyNi4zMDY0VjEyLjYyNjhDMzAuODc2NyAxMS45NTQ3IDMwLjY2NjggMTEuNjE3IDMwLjI0NTkgMTEuMTk1N0wyOC41MjMgOS40Njk4VjkuMDQ5NloiIGZpbGw9IiMyQTJBMkEiLz4KPC9zdmc+Cg=="
    }
    ,
    53724: (e, n, i) => {
        "use strict";
        i.d(n, {
            s: () => y
        });
        var t = i(67684)
          , s = i(62701)
          , a = i(37876);
        i(14232);
        var r = i(88992)
          , l = i(71090)
          , o = i(29540)
          , c = i(48915)
          , M = i(41042)
          , u = i(19020)
          , d = i(494)
          , j = i(66973)
          , N = i(34278)
          , g = i(55486)
          , I = i(78835)
          , D = i(20309)
          , x = i(11462)
          , y = function(e) {
            var n = e.useAsStandalone
              , i = void 0 !== n && n
              , y = (0,
            c.C)().vertical
              , z = (0,
            o.hZ)(function(e) {
                var n;
                return null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.email
            }) || ""
              , _ = (0,
            o.hZ)(function(e) {
                return e.requestOneTimeCode
            })
              , T = (0,
            o.hZ)(function(e) {
                return e.verifyOneTimeCode
            })
              , h = (0,
            o.hZ)(function(e) {
                return e.screen
            })
              , p = (0,
            o.hZ)(function(e) {
                return e.setScreen
            })
              , L = (0,
            o.hZ)(function(e) {
                return e.error
            })
              , m = i ? "Profile" : "SignIn"
              , A = h === I.cq.VERIFY_OTC ? (0,
            a.jsx)(a.Fragment, {
                children: "Verify your email address to continue"
            }) : (0,
            a.jsx)(a.Fragment, {
                children: "Log in with code"
            })
              , S = h === I.cq.VERIFY_OTC ? "Continue" : "Log in"
              , O = (0,
            r.mN)({
                resolver: (0,
                l.t)(x.em)
            });
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)(r.Op, (0,
                s._)((0,
                t._)({}, O), {
                    children: (0,
                    a.jsx)("form", {
                        onSubmit: O.handleSubmit(function(e) {
                            T({
                                email: z,
                                oneTimeCode: e.oneTimeCode,
                                brand: (0,
                                D.getBedrockBrandForVertical)(y),
                                trackingPayload: {
                                    action: "".concat(m, ":Submit"),
                                    method: "SubmitButton:Click"
                                },
                                accountFlow: m
                            }).then(function(e) {
                                i && e && window.history.back(),
                                e && p(e)
                            })
                        }),
                        "data-testid": "verify-otc",
                        children: (0,
                        a.jsxs)(g.B, {
                            gapSize: 32,
                            children: [(0,
                            a.jsxs)(g.B, {
                                gapSize: 12,
                                children: [(0,
                                a.jsx)("h2", {
                                    "data-testid": "account-verify-email",
                                    children: A
                                }), L ? (0,
                                a.jsx)(d.I, {
                                    message: L
                                }) : null, (0,
                                a.jsxs)(j.V, {
                                    children: ["We sent a one time code to", " ", (0,
                                    a.jsx)("strong", {
                                        "data-testid": "verifyOTC-userEmail",
                                        children: z || "example@example.com"
                                    })]
                                })]
                            }), (0,
                            a.jsx)(j.V, {
                                children: "If you can’t find our email, please check your spam folder."
                            }), (0,
                            a.jsx)(g.B, {
                                gapSize: 12,
                                children: (0,
                                a.jsx)(u.A, {
                                    dataTestId: "otc-input-field",
                                    name: "oneTimeCode",
                                    "aria-label": "What is your code?",
                                    type: "one-time-code"
                                })
                            }), (0,
                            a.jsxs)(g.B, {
                                gapSize: 12,
                                children: [(0,
                                a.jsx)(M.b, {
                                    title: S
                                }), (0,
                                a.jsx)(N.u, {
                                    onClick: function() {
                                        var e = (0,
                                        D.getBedrockBrandForVertical)(y);
                                        _({
                                            brand: e,
                                            trackingPayload: {
                                                action: "".concat(m, ":Submit"),
                                                method: "OneTimeCodeButton:Click",
                                                brand: e
                                            }
                                        })
                                    },
                                    dataTestid: "resend-code",
                                    variant: "block",
                                    children: "Send code again"
                                })]
                            })]
                        })
                    })
                }))
            })
        }
    }
    ,
    62914: e => {
        e.exports = {
            signIn: "styles_signIn__DbwJt",
            "live-dot-blink": "styles_live-dot-blink__bHlaK",
            "fade-in": "styles_fade-in__x0zxb",
            "expand-in": "styles_expand-in__pliy_",
            "chatblog-expand-in": "styles_chatblog-expand-in__bhA0_"
        }
    }
    ,
    65337: e => {
        e.exports = {
            appleSignIn: "styles_appleSignIn__UBkFL",
            "live-dot-blink": "styles_live-dot-blink__fbiDC",
            "fade-in": "styles_fade-in__DMd23",
            "expand-in": "styles_expand-in__NrDNj",
            "chatblog-expand-in": "styles_chatblog-expand-in___PI6c"
        }
    }
    ,
    66973: (e, n, i) => {
        "use strict";
        i.d(n, {
            V: () => c
        });
        var t = i(45526)
          , s = i(37876);
        i(14232);
        var a = i(15039)
          , r = i.n(a)
          , l = i(41355)
          , o = i.n(l)
          , c = function(e) {
            var n = e.children
              , i = e.className
              , a = e.styling;
            return (0,
            s.jsx)("p", {
                className: r()(o().description, a && o()[a], (0,
                t._)({}, String(i), i)),
                children: n
            })
        }
    }
    ,
    67479: e => {
        e.exports = {
            separator: "styles_separator__dfUOY",
            linksContainer: "styles_linksContainer__wQAoQ",
            socialLogin: "styles_socialLogin__4LWtU",
            resetPassword: "styles_resetPassword__RL35N",
            "live-dot-blink": "styles_live-dot-blink__UsZWy",
            "fade-in": "styles_fade-in__lelAh",
            "expand-in": "styles_expand-in__pL3R1",
            "chatblog-expand-in": "styles_chatblog-expand-in__hsn0c"
        }
    }
    ,
    75656: e => {
        e.exports = "/_next/static/images/StartTODAYLogo-8f776c28fdd35bc0cf99593f11aeda55.svg"
    }
    ,
    78266: e => {
        e.exports = {
            inlineContainer: "styles_inlineContainer__ohaBV"
        }
    }
    ,
    78828: e => {
        e.exports = {
            otpInputContainer: "styles_otpInputContainer__j6_13",
            group: "styles_group___5YSb",
            innerSlot: "styles_innerSlot__xFzDy",
            flex: "styles_flex__QBR44",
            slot: "styles_slot__Y1815",
            isActive: "styles_isActive__r8Sxf",
            hasError: "styles_hasError__kCcfE",
            "live-dot-blink": "styles_live-dot-blink__Y7EMh",
            "fade-in": "styles_fade-in___u0Fm",
            "expand-in": "styles_expand-in__ye3AR",
            "chatblog-expand-in": "styles_chatblog-expand-in__aZwUE"
        }
    }
    ,
    86847: e => {
        e.exports = {
            input: "styles_input__bJKu8",
            hasSuperTxt: "styles_hasSuperTxt__RpXAG",
            inputContainer: "styles_inputContainer___RnzA",
            errorInput: "styles_errorInput__Af6zk",
            placeholder: "styles_placeholder__E_CnA",
            visible: "styles_visible__G0qKa",
            "live-dot-blink": "styles_live-dot-blink__VdL5P",
            "fade-in": "styles_fade-in__Ai2Uk",
            "expand-in": "styles_expand-in__xjWpO",
            "chatblog-expand-in": "styles_chatblog-expand-in__ciGcY"
        }
    }
    ,
    87998: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM3M18yNjg3KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMTAwNiAwLjA2ODU1NTdDMTMuNTEwNiAtMC4zMDg5ODUgMTIuMDM5IDAuOTI3ODg0IDEyLjIwMjQgMi42MjQ5NEgxMi4yMDQzSDEzLjIzNDVDMTMuMjM0NSAyLjYyNDk0IDEzLjcxNTQgMi42MTkzIDEzLjg1NTMgMi45NDMzMUMxMy44NTUzIDIuOTQzMzEgMTIuMzMwMSAzLjUyMDg5IDEyLjQ1MTMgNC40NTkxMUwxMy40MDA4IDExLjM2MUwxNi43MjM1IDMuNDE3NTlDMTcuMjMwNiAyLjIxMTcxIDE2LjY2NDMgMC40MzI5NDggMTUuMTAwNiAwLjA2ODU1NTdaIiBmaWxsPSIjNjc1RUE5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNTUyMyAxMy45MzA1TDQuMDc2OCA5LjQxMzE1QzIuNDI4NTggOC4yNjA4MSAwLjc5ODIwNCA5LjQzNDc1IDAuNDUyNTk1IDEwLjY0OTFDLTAuMDU2NDI3OCAxMi40MzkxIDEuMDgzNzEgMTMuOTMwNSAyLjg3NTYyIDEzLjkzMDVIMTAuNTUyM1oiIGZpbGw9IiNGQ0NDMTYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MDI1IDIuNzM0NzlDMTEuNjQyIDAuOTgxMzg1IDEwLjE0MTIgLTAuMzE2NTI5IDguNTE2NDYgMC4wNjg1MjUzQzYuOTUyNzcgMC40MzI5MTggNi4zODY0NiAyLjIxMTY4IDYuODkzNiAzLjQxNzU2TDEwLjIxNjMgMTEuMzYwOUwxMS40MDI1IDIuNzM0NzlaIiBmaWxsPSIjRUQxOTQzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS45NTAzOSAxMi42NjM2TDYuNzYyOSA1LjA1NzM1QzYuMDE2MjcgMy4yOTM2MSA0LjA0MDI4IDMuMDc0NzkgMi45NDgwNCA0LjEwODhDMi4xNzk4MSA0LjgzNzU4IDEuNTgyNTEgNi44MjI5NiAzLjMwMjExIDguMDI1MDhMOS45NTAzOSAxMi42NjM2WiIgZmlsbD0iI0YzNzIyMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjA2NDcgMTMuOTMwNUwxOS41NDAyIDkuNDEzMTVDMjEuMTg4NCA4LjI2MDgxIDIyLjgxODggOS40MzQ3NSAyMy4xNjQ0IDEwLjY0OTFDMjMuNjczNCAxMi40MzkxIDIyLjUzMzMgMTMuOTMwNSAyMC43NDE0IDEzLjkzMDVIMTMuMDY0N1oiIGZpbGw9IiMxM0FDNEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42NjY1IDEyLjY2MzZMMTYuODU0IDUuMDU3MzVDMTcuNjAwNiAzLjI5MzYxIDE5LjU3NjYgMy4wNzQ3OSAyMC42Njg5IDQuMTA4OEMyMS40MzcxIDQuODM3NTggMjIuMDM0NCA2LjgyMjk2IDIwLjMxNDggOC4wMjUwOEwxMy42NjY1IDEyLjY2MzZaIiBmaWxsPSIjMUU5Q0Q4Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzczXzI2ODciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTMuODY2NyIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
    }
    ,
    90027: e => {
        e.exports = {
            container: "styles_container__a_Bja",
            "live-dot-blink": "styles_live-dot-blink__097Sj",
            "fade-in": "styles_fade-in__YBqhx",
            "expand-in": "styles_expand-in__wgaiZ",
            "chatblog-expand-in": "styles_chatblog-expand-in__NfeN6"
        }
    }
    ,
    91801: e => {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAxIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMC44MzQgNDcuOTkwMkM5OS43NTU0IDIyLjI2NzUgNzcuNjQwNCAxLjczMDk2IDUwLjUxNjIgMS43MzA5NkMyMy41ODAxIDEuNzMwOTYgMS41Nzc0NCAyMS45OTAyIDAuMjIwMTM3IDQ3LjQ2NjdDMC4xNzMwODQgNDguMjk4NyAwLjE1MTM2NyA0OS4xMzA3IDAuMTUxMzY3IDQ5Ljk2NjJIMTMuMjEwNEMxMy4yMTA0IDQ5LjE1ODQgMTMuMjM5MyA0OC4zNDcyIDEzLjI5NzMgNDcuNTQ5OUMxNC42MDAzIDI4Ljk2ODYgMzAuNzkzNyAxNC4yMzg3IDUwLjUxNjIgMTQuMjM4N0M3MC4zMTEgMTQuMjM4NyA4Ni41NTUyIDI5LjA4MyA4Ny43NDk2IDQ3Ljc2MTRDODcuNzk2NyA0OC40OTI4IDg3LjgyMiA0OS4yMjQzIDg3LjgyMiA0OS45NjYySDEwMC44NzdDMTAwLjg3NyA0OS4zMDc1IDEwMC44NjcgNDguNjQxOSAxMDAuODM0IDQ3Ljk5MDJaIiBmaWxsPSIjRkY1MDNDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTAuNTE2NSAxNy44MDk2QzMyLjcxNiAxNy44MDk2IDE4LjE1NDkgMzEuMDc2NSAxNy4wMTQ4IDQ3Ljg0ODJDMTYuOTYwNSA0OC41NDUgMTYuOTQyNCA0OS4yNTIyIDE2Ljk0MjQgNDkuOTY2NEgyOS45OTc4QzI5Ljk5NzggNDkuMjAwMiAzMC4wNDQ4IDQ4LjQzNzYgMzAuMTM1MyA0Ny42OTIyQzMxLjMxNTMgMzcuOTMwMSA0MC4wMDkyIDMwLjMxMzggNTAuNTE2NSAzMC4zMTM4QzYxLjA4MTcgMzAuMzEzOCA2OS44MDgzIDM4LjAwMjkgNzAuOTE1OCA0Ny44NDEzQzcwLjk5NTQgNDguNTQxNiA3MS4wMzUzIDQ5LjI0NTMgNzEuMDM1MyA0OS45NjY0SDg0LjA5MDdDODQuMDkwNyA0OS4yNzY1IDg0LjA2ODkgNDguNjA0IDg0LjAyNTUgNDcuOTI0NUM4Mi45MjUyIDMxLjExNDYgNjguMzQyNCAxNy44MDk2IDUwLjUxNjUgMTcuODA5NloiIGZpbGw9IiNGRjUwM0MiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MC41MTY2IDMzLjg5MDFDNDIuMzI5MyAzMy44OTAxIDM1LjUxMDMgMzkuNDk5MiAzNC4wMjk5IDQ2LjkyNDhDMzMuODM0NSA0Ny45MDkzIDMzLjcyOTUgNDguOTI4NSAzMy43Mjk1IDQ5Ljk3Mkg2Ny4zMDM2QzY3LjMwMzYgNDkuMTg4NSA2Ny4yNDU3IDQ4LjQyNTkgNjcuMTMzNSA0Ny42ODRDNjUuOTc1MyAzOS44ODQgNTguOTc4OSAzMy44OTAxIDUwLjUxNjYgMzMuODkwMVoiIGZpbGw9IiNGRjUwM0MiLz4KPC9zdmc+Cg=="
    }
    ,
    95212: (e, n, i) => {
        "use strict";
        i.d(n, {
            S: () => d
        });
        var t = i(67684)
          , s = i(65699)
          , a = i(37876)
          , r = i(14232)
          , l = i(88992)
          , o = i(98063)
          , c = i(494)
          , M = i(13878)
          , u = i.n(M)
          , d = function(e) {
            var n, i = e.name, M = e.children, d = (0,
            s._)(e, ["name", "children"]), j = (0,
            l.xW)().formState.errors, N = (0,
            r.useId)(), g = d.id || N;
            return (0,
            a.jsxs)("div", {
                className: u().container,
                "data-testid": "checkbox-container",
                children: [(0,
                a.jsx)(c.I, {
                    message: null === (n = j[i]) || void 0 === n ? void 0 : n.message,
                    className: u().error,
                    id: "err_".concat(g)
                }), (0,
                a.jsxs)("div", {
                    className: u().checkboxContainer,
                    children: [(0,
                    a.jsx)(o.F, (0,
                    t._)({
                        id: g,
                        type: "checkbox",
                        name: i,
                        "aria-describedby": j[i] ? "err_".concat(g) : void 0
                    }, d)), (0,
                    a.jsx)("div", {
                        children: M
                    })]
                })]
            })
        }
    }
    ,
    98063: (e, n, i) => {
        "use strict";
        i.d(n, {
            F: () => j
        });
        var t = i(45526)
          , s = i(67684)
          , a = i(62701)
          , r = i(65699)
          , l = i(37876);
        i(14232);
        var o = i(15039)
          , c = i.n(o)
          , M = i(88992)
          , u = i(86847)
          , d = i.n(u)
          , j = function(e) {
            var n, i, o = e.name, u = e.dataTestId, j = e.type, N = void 0 === j ? "text" : j, g = e.placeholder, I = e.isRequired, D = e.onBlur, x = e.className, y = void 0 === x ? "" : x, z = e.shouldSuperscriptPlaceholder, _ = void 0 === z || z, T = (0,
            r._)(e, ["name", "dataTestId", "type", "placeholder", "isRequired", "onBlur", "className", "shouldSuperscriptPlaceholder"]), h = (0,
            M.xW)(), p = h.watch, L = {
                name: o,
                control: h.control,
                rules: {
                    required: void 0 !== I && I
                }
            };
            "checkbox" === N && (L.defaultValue = !1);
            var m = (0,
            M.as)(L)
              , A = m.field
              , S = m.fieldState.error;
            return (0,
            l.jsxs)("div", {
                className: c()((n = {},
                (0,
                t._)(n, String(d().inputContainer), "checkbox" !== N),
                (0,
                t._)(n, y, y),
                n)),
                children: [g && _ ? (0,
                l.jsx)("span", {
                    className: c()(d().placeholder, (0,
                    t._)({}, String(d().visible), p(o))),
                    children: g
                }) : null, (0,
                l.jsx)("input", (0,
                a._)((0,
                s._)({
                    className: c()(d().input, (i = {},
                    (0,
                    t._)(i, String(d().errorInput), S),
                    (0,
                    t._)(i, String(d().hasSuperTxt), g && _ && p(o)),
                    i)),
                    "data-testid": void 0 === u ? "textbox" : u,
                    type: N,
                    placeholder: g,
                    "aria-invalid": S ? "true" : "false"
                }, T, A), {
                    name: o,
                    onBlur: function(e) {
                        D && D(e),
                        A.onBlur()
                    }
                }))]
            })
        }
    }
    ,
    99551: e => {
        e.exports = {
            container: "styles_container__WWSEL",
            NBCUniLogoStyles: "styles_NBCUniLogoStyles__IfpPo",
            subHeaderText: "styles_subHeaderText__R_Qa0",
            subHeaderTextMargin: "styles_subHeaderTextMargin__pUolO",
            rowsLogos: "styles_rowsLogos__ysygc",
            circlesForLogos: "styles_circlesForLogos__eB_Mj",
            NBCOlympics_style: "styles_NBCOlympics_style__cwIsN",
            logoImages: "styles_logoImages__gUbnA",
            StartToday_style: "styles_StartToday_style__uxgmq",
            "live-dot-blink": "styles_live-dot-blink__zqeNO",
            "fade-in": "styles_fade-in__gUNbL",
            "expand-in": "styles_expand-in__OaGoO",
            "chatblog-expand-in": "styles_chatblog-expand-in__arRzB"
        }
    }
}]);
