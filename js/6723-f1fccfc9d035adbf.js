(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6723], {
    5492: function(e) {
        e.exports = function(e, t, r) {
            var n = t.prototype
              , i = function(e) {
                return e && (e.indexOf ? e : e.s)
            }
              , a = function(e, t, r, n, a) {
                var o = e.name ? e : e.$locale()
                  , d = i(o[t])
                  , l = i(o[r])
                  , s = d || l.map(function(e) {
                    return e.slice(0, n)
                });
                if (!a)
                    return s;
                var c = o.weekStart;
                return s.map(function(e, t) {
                    return s[(t + (c || 0)) % 7]
                })
            }
              , o = function() {
                return r.Ls[r.locale()]
            }
              , d = function(e, t) {
                return e.formats[t] || e.formats[t.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, r) {
                    return t || r.slice(1)
                })
            }
              , l = function() {
                var e = this;
                return {
                    months: function(t) {
                        return t ? t.format("MMMM") : a(e, "months")
                    },
                    monthsShort: function(t) {
                        return t ? t.format("MMM") : a(e, "monthsShort", "months", 3)
                    },
                    firstDayOfWeek: function() {
                        return e.$locale().weekStart || 0
                    },
                    weekdays: function(t) {
                        return t ? t.format("dddd") : a(e, "weekdays")
                    },
                    weekdaysMin: function(t) {
                        return t ? t.format("dd") : a(e, "weekdaysMin", "weekdays", 2)
                    },
                    weekdaysShort: function(t) {
                        return t ? t.format("ddd") : a(e, "weekdaysShort", "weekdays", 3)
                    },
                    longDateFormat: function(t) {
                        return d(e.$locale(), t)
                    },
                    meridiem: this.$locale().meridiem,
                    ordinal: this.$locale().ordinal
                }
            };
            n.localeData = function() {
                return l.bind(this)()
            }
            ,
            r.localeData = function() {
                var e = o();
                return {
                    firstDayOfWeek: function() {
                        return e.weekStart || 0
                    },
                    weekdays: function() {
                        return r.weekdays()
                    },
                    weekdaysShort: function() {
                        return r.weekdaysShort()
                    },
                    weekdaysMin: function() {
                        return r.weekdaysMin()
                    },
                    months: function() {
                        return r.months()
                    },
                    monthsShort: function() {
                        return r.monthsShort()
                    },
                    longDateFormat: function(t) {
                        return d(e, t)
                    },
                    meridiem: e.meridiem,
                    ordinal: e.ordinal
                }
            }
            ,
            r.months = function() {
                return a(o(), "months")
            }
            ,
            r.monthsShort = function() {
                return a(o(), "monthsShort", "months", 3)
            }
            ,
            r.weekdays = function(e) {
                return a(o(), "weekdays", null, null, e)
            }
            ,
            r.weekdaysShort = function(e) {
                return a(o(), "weekdaysShort", "weekdays", 3, e)
            }
            ,
            r.weekdaysMin = function(e) {
                return a(o(), "weekdaysMin", "weekdays", 2, e)
            }
        }
    },
    5902: function(e) {
        e.exports = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(e) {
                var t = ["th", "st", "nd", "rd"]
                  , r = e % 100;
                return "[" + e + (t[(r - 20) % 10] || t[r] || "th") + "]"
            }
        }
    },
    25037: function(e, t, r) {
        e.exports = function(e) {
            "use strict";
            var t = {
                name: "es",
                monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                weekStart: 1,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un d\xeda",
                    dd: "%d d\xedas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un a\xf1o",
                    yy: "%d a\xf1os"
                },
                ordinal: function(e) {
                    return e + "\xba"
                }
            };
            return (e && "object" == typeof e && "default"in e ? e : {
                default: e
            }).default.locale(t, null, !0),
            t
        }(r(56557))
    },
    27875: (e, t, r) => {
        "use strict";
        r.d(t, {
            d: () => ex
        });
        var n, i, a, o = r(37876), d = r(14232);
        !function() {
            try {
                if ("u" > typeof document) {
                    var e = document.createElement("style");
                    e.appendChild(document.createTextNode('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial}}}@layer theme{:root,:host{--db-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--db-font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--db-color-black:#000;--db-color-white:#fff;--db-spacing:.25rem;--db-text-sm:.875rem;--db-text-sm--line-height:calc(1.25/.875);--db-text-base:1rem;--db-text-base--line-height: 1.5 ;--db-font-weight-bold:700;--db-default-font-family:var(--db-font-sans);--db-default-mono-font-family:var(--db-font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--db-default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--db-default-font-feature-settings,normal);font-variation-settings:var(--db-default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--db-default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--db-default-mono-font-feature-settings,normal);font-variation-settings:var(--db-default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.db\\:pointer-events-auto{pointer-events:auto}.db\\:pointer-events-none{pointer-events:none}.db\\:invisible{visibility:hidden}.db\\:visible{visibility:visible}.db\\:absolute{position:absolute}.db\\:relative{position:relative}.db\\:z-999{z-index:999}.db\\:m-0{margin:calc(var(--db-spacing)*0)}.db\\:mt-\\[-1px\\]{margin-top:-1px}.db\\:mt-\\[-5px\\]{margin-top:-5px}.db\\:mt-\\[0px\\]{margin-top:0}.db\\:mt-\\[2px\\]{margin-top:2px}.db\\:mt-\\[3px\\]{margin-top:3px}.db\\:mb-\\[30px\\]{margin-bottom:30px}.db\\:ml-auto{margin-left:auto}.db\\:flex{display:flex}.db\\:hidden{display:none}.db\\:h-\\[20px\\]{height:20px}.db\\:h-\\[32px\\]{height:32px}.db\\:h-\\[36px\\]{height:36px}.db\\:h-\\[105px\\]{height:105px}.db\\:h-fit{height:fit-content}.db\\:h-full{height:100%}.db\\:w-\\[20px\\]{width:20px}.db\\:w-\\[30\\%\\]{width:30%}.db\\:w-\\[34px\\]{width:34px}.db\\:w-\\[36px\\]{width:36px}.db\\:w-\\[70\\%\\]{width:70%}.db\\:w-\\[124px\\]{width:124px}.db\\:w-full{width:100%}.db\\:w-max{width:max-content}.db\\:max-w-\\[130px\\]{max-width:130px}.db\\:translate-x-\\[-90px\\]{--tw-translate-x:-90px;translate:var(--tw-translate-x)var(--tw-translate-y)}.db\\:translate-y-\\[5px\\]{--tw-translate-y:5px;translate:var(--tw-translate-x)var(--tw-translate-y)}.db\\:cursor-pointer{cursor:pointer}.db\\:flex-col{flex-direction:column}.db\\:flex-row{flex-direction:row}.db\\:items-center{align-items:center}.db\\:justify-between{justify-content:space-between}.db\\:justify-center{justify-content:center}.db\\:gap-2\\.5{gap:calc(var(--db-spacing)*2.5)}.db\\:gap-3{gap:calc(var(--db-spacing)*3)}.db\\:gap-\\[2px\\]{gap:2px}.db\\:gap-\\[10px\\]{gap:10px}.db\\:gap-\\[20px\\]{gap:20px}.db\\:gap-\\[50px\\]{gap:50px}.db\\:rounded-\\[50\\%\\]{border-radius:50%}.db\\:rounded-full{border-radius:3.40282e38px}.db\\:border{border-style:var(--tw-border-style);border-width:1px}.db\\:border-\\[1\\.5px\\]{border-style:var(--tw-border-style);border-width:1.5px}.db\\:border-\\[1px\\]{border-style:var(--tw-border-style);border-width:1px}.db\\:border-x-\\[0\\]{border-inline-style:var(--tw-border-style);border-inline-width:0}.db\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.db\\:border-solid{--tw-border-style:solid;border-style:solid}.db\\:border-\\[\\#555555\\]{border-color:#555}.db\\:border-\\[\\#cccccc\\]{border-color:#ccc}.db\\:border-white{border-color:var(--db-color-white)}.db\\:border-y-\\[\\#cccccc\\]{border-block-color:#ccc}.db\\:bg-\\[\\#555\\]{background-color:#555}.db\\:bg-\\[\\#f2f2f2\\]{background-color:#f2f2f2}.db\\:bg-\\[\\#fff\\],.db\\:bg-\\[\\#ffffff\\]{background-color:#fff}.db\\:bg-\\[var\\(--decibel-player-color\\)\\]{background-color:var(--decibel-player-color)}.db\\:bg-transparent{background-color:#0000}.db\\:bg-white{background-color:var(--db-color-white)}.db\\:p-0{padding:calc(var(--db-spacing)*0)}.db\\:p-2{padding:calc(var(--db-spacing)*2)}.db\\:p-\\[3px\\]{padding:3px}.db\\:p-\\[10px\\]{padding:10px}.db\\:px-\\[6px\\]{padding-inline:6px}.db\\:py-\\[2px\\]{padding-block:2px}.db\\:py-\\[5px\\]{padding-block:5px}.db\\:py-\\[12px\\]{padding-block:12px}.db\\:pt-\\[10px\\]{padding-top:10px}.db\\:pr-\\[12px\\]{padding-right:12px}.db\\:pb-\\[10px\\]{padding-bottom:10px}.db\\:pl-\\[12px\\]{padding-left:12px}.db\\:text-left{text-align:left}.db\\:text-base{font-size:var(--db-text-base);line-height:var(--tw-leading,var(--db-text-base--line-height))}.db\\:text-sm{font-size:var(--db-text-sm);line-height:var(--tw-leading,var(--db-text-sm--line-height))}.db\\:text-\\[16px\\]{font-size:16px}.db\\:text-\\[18px\\]{font-size:18px}.db\\:leading-\\[24px\\]{--tw-leading:24px;line-height:24px}.db\\:leading-\\[none\\]{--tw-leading:none;line-height:none}.db\\:leading-\\[normal\\]{--tw-leading:normal;line-height:normal}.db\\:leading-none{--tw-leading:1;line-height:1}.db\\:font-bold{--tw-font-weight:var(--db-font-weight-bold);font-weight:var(--db-font-weight-bold)}.db\\:text-\\[\\#3061ff\\]{color:#3061ff}.db\\:text-\\[\\#555555\\]{color:#555}.db\\:text-black{color:var(--db-color-black)}.db\\:text-white{color:var(--db-color-white)}.db\\:accent-white{accent-color:var(--db-color-white)}@media (hover:hover){.db\\:hover\\:opacity-80:hover{opacity:.8}}@media (min-width:48rem){.db\\:md\\:block{display:block}}}.oswald{letter-spacing:0;font-family:Oswald,Arial Narrow,Arial,sans-serif}.founders-cond{font-family:FoundersGroteskCond,Arial Narrow,Arial,sans-serif}.archivo-narrow-db{font-optical-sizing:auto;letter-spacing:-.5px;font-family:Archivo Narrow,sans-serif;font-style:normal;font-weight:300}:root{--decibel-player-color:#2f61ff}button:focus-visible,a:focus-visible,input:focus-visible{outline:none;box-shadow:0 0 0 2px #fff,0 0 0 5px #00a850}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}._scrubber_1sjaq_1{-webkit-appearance:none;appearance:none;width:100%;cursor:pointer;outline:none;height:3px;background:#ccc}._scrubber_1sjaq_1:not(:active)::-webkit-slider-thumb{visibility:hidden}._scrubber_1sjaq_1:is(:active)::-webkit-slider-thumb{margin-top:-6px;box-shadow:0 0 0 7px #3061ff36;border-radius:20px}._scrubber_1sjaq_1::-webkit-slider-runnable-track{width:100%;height:4px;cursor:pointer;animate:.2s;border-radius:0}._volumeInputRange_10me0_1{-webkit-appearance:none;width:20px;cursor:pointer;writing-mode:vertical-lr;direction:rtl;vertical-align:middle}._volumeInputRange_10me0_1::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:15px;height:15px;background:#555!important;border-radius:50%;margin-left:-5px}._volumeInputRange_10me0_1::-webkit-slider-runnable-track{background-color:#ccc;width:5px;-webkit-appearance:none}._active_10me0_25{background-color:#555}._volumeButton_10me0_29 path{stroke:#555}._active_10me0_25 path{stroke:#fff}._active_10me0_25._muted_10me0_36 path{fill:#fff}._check_18kr0_1 path{fill:#000}._aiIcon_d5m9c_1{width:20px;height:20px;border:solid 1px #555555}._aiIcon_d5m9c_1>svg path{fill:#555;transform:scale(1.5) translate(-2.5px,-2px)}._aiIcon_d5m9c_1:hover{border:solid 1px #555555;background-color:#555;transition:all .3s}._aiIcon_d5m9c_1:hover>svg path{fill:#fff}._popover_d5m9c_21{max-width:200px;translate:-95% 10px;left:100%;width:max-content}._popOverInner_d5m9c_28{gap:30px}._disclaimerCloseIcon_d5m9c_32 path{stroke:#555}@media screen and (max-width: 767px){._decibelWrapper_ayw8r_2{gap:5px}._ctaWrapper_ayw8r_5{width:100%;justify-content:space-between}._sticky_ayw8r_9{width:100%!important;left:0}._decibelWrapper_ayw8r_2:not(._sticky_ayw8r_9){height:92px;flex-direction:column;align-items:flex-start}}._decibelWrapper_ayw8r_2{height:60px}._sticky_ayw8r_9{box-shadow:0 3px 3px #00000026;top:var(--decibel-player-offset, 0px);position:fixed;z-index:9999;padding-left:16px;padding-right:16px}._sentinel_ayw8r_33:has(+._sticky_ayw8r_9){min-height:0}._playerCloseIcon_ayw8r_36 path{stroke:#555}')),
                    document.head.appendChild(e)
                }
            } catch (e) {
                console.error("vite-plugin-css-injected-by-js", e)
            }
        }();
        class l {
            #e;
            constructor(e) {
                this.#e = e
            }
            init({applicationId: e, clientToken: t, env: r, consumer: n}) {
                this.#e.init({
                    applicationId: e,
                    clientToken: t,
                    site: "datadoghq.com",
                    service: `decibel-player-${n}`,
                    env: r,
                    sessionSampleRate: 100,
                    sessionReplaySampleRate: 20
                })
            }
        }
        let s = e => d.createElement("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 71 71",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "decibel-play",
            ...e
        }, d.createElement("rect", {
            width: "100%",
            height: "100%",
            rx: 35.25
        }), d.createElement("path", {
            d: "M27.0849 49.6114V23.5002L49.8803 36.5558L27.0849 49.6114Z",
            fill: "white"
        }))
          , c = e => d.createElement("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 71 71",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "decibel-pause",
            ...e
        }, d.createElement("rect", {
            x: .25,
            y: .5,
            width: "100%",
            height: "100%",
            rx: 35.25
        }), d.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32.5833 47.167H25.9167C25.7932 47.167 25.6929 47.1284 25.6157 47.0513C25.5386 46.9741 25.5 46.8738 25.5 46.7503V27.5837C25.5 27.4602 25.5386 27.3599 25.6157 27.2827C25.6929 27.2056 25.7932 27.167 25.9167 27.167H32.5833C32.7068 27.167 32.8071 27.2056 32.8843 27.2827C32.9614 27.3599 33 27.4602 33 27.5837V46.7503C33 46.8738 32.9614 46.9741 32.8843 47.0513C32.8071 47.1284 32.7068 47.167 32.5833 47.167ZM45.0833 47.167H38.4167C38.2932 47.167 38.1929 47.1284 38.1157 47.0513C38.0386 46.9741 38 46.8738 38 46.7503V27.5837C38 27.4602 38.0386 27.3599 38.1157 27.2827C38.1929 27.2056 38.2932 27.167 38.4167 27.167H45.0833C45.2068 27.167 45.3071 27.2056 45.3843 27.2827C45.4614 27.3599 45.5 27.4602 45.5 27.5837V46.7503C45.5 46.8738 45.4614 46.9741 45.3843 47.0513C45.3071 47.1284 45.2068 47.167 45.0833 47.167Z",
            fill: "white"
        }))
          , u = ({onClick: e, isPlaying: t, isReady: r=!1}) => (0,
        o.jsx)("button", {
            disabled: !r,
            "data-testid": "play-pause-button",
            onClick: e,
            className: "db:hover:opacity-80 db:w-[36px] db:h-[36px] db:cursor-pointer db:rounded-[50%] db:bg-[var(--decibel-player-color)]",
            "aria-label": t ? "Audio Pause" : "Audio Play",
            children: t ? (0,
            o.jsx)(c, {
                "data-testid": "pause-icon",
                width: 36
            }) : (0,
            o.jsx)(s, {
                "data-testid": "play-icon",
                width: 36
            })
        })
          , b = {
            scrubber: "_scrubber_1sjaq_1"
        }
          , p = ({value: e=0, onChange: t, reference: r, duration: n, isReady: i=!1}) => (0,
        o.jsx)("div", {
            className: "scrubber",
            children: (0,
            o.jsx)("input", {
                className: b.scrubber,
                disabled: !i,
                ref: r,
                type: "range",
                max: "100",
                min: "0",
                step: 0,
                value: e,
                onInput: e => {
                    t(Number(e.target.value))
                }
                ,
                "aria-label": "Audio scrubber control",
                "data-testid": "audio-scrubber",
                "aria-valuetext": `The current position of the audio is at ${Math.round((n || 0) * e) / 100} seconds. Adjust the position of the audio by sliding the control`
            })
        })
          , m = e => d.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "100%",
            viewBox: "0 -960 960 960",
            width: "100%",
            ...e
        }, d.createElement("path", {
            fill: "#999999",
            strokeLinecap: "round",
            d: "M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"
        }))
          , h = e => d.createElement("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 15 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e
        }, d.createElement("path", {
            d: "M12.38 1.28667C13.6298 2.53685 14.3319 4.23224 14.3319 6C14.3319 7.76776 13.6298 9.46315 12.38 10.7133M10.0267 3.64C10.6516 4.26509 11.0026 5.11279 11.0026 5.99667C11.0026 6.88055 10.6516 7.72824 10.0267 8.35333M7 1.33333L3.66667 4H1V8H3.66667L7 10.6667V1.33333Z",
            width: "15px",
            stroke: "#999999",
            strokeWidth: 1.33333,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
          , f = e => {
            let[t,r] = (0,
            d.useState)(!1);
            return (0,
            d.useEffect)( () => {
                let t = t => {
                    e.current && !e.current.contains(t.target) && r(!1)
                }
                ;
                return document.addEventListener("mousedown", t),
                () => {
                    document.removeEventListener("mousedown", t)
                }
            }
            , [e]),
            {
                showPopover: t,
                setShowPopover: r
            }
        }
        ;
        function x(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var w = {
            exports: {}
        };
        let g = x((P || (P = 1,
        function(e) {
            (function() {
                var t = {}.hasOwnProperty;
                function r() {
                    for (var e = "", i = 0; i < arguments.length; i++) {
                        var a = arguments[i];
                        a && (e = n(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e)
                                return e;
                            if ("object" != typeof e)
                                return "";
                            if (Array.isArray(e))
                                return r.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                                return e.toString();
                            var i = "";
                            for (var a in e)
                                t.call(e, a) && e[a] && (i = n(i, a));
                            return i
                        }(a)))
                    }
                    return e
                }
                function n(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (r.default = r,
                e.exports = r) : window.classNames = r
            }
            )()
        }(w)),
        w.exports))
          , y = {
            volumeInputRange: "_volumeInputRange_10me0_1",
            active: "_active_10me0_25",
            volumeButton: "_volumeButton_10me0_29",
            muted: "_muted_10me0_36"
        }
          , v = ({handleVolumeChange: e, volume: t}) => {
            let r = d.useRef(null)
              , {setShowPopover: n, showPopover: i} = f(r)
              , a = 0 === t;
            return (0,
            d.useEffect)( () => {
                let e = e => {
                    i && "Escape" === e.key && n(!1)
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            , [i]),
            (0,
            o.jsx)(o.Fragment, {
                children: (0,
                o.jsxs)("div", {
                    ref: r,
                    className: "db:hidden db:md:block",
                    children: [(0,
                    o.jsx)("button", {
                        className: g(y.volumeButton, i && y.active, a && y.muted, "db:hover:opacity-80 db:p-[3px] db:flex db:items-center db:cursor-pointer db:justify-center db:w-[34px] db:h-[20px] db:border db:border-[1.5px] db:border-solid db:border-[#555555] "),
                        type: "button",
                        onClick: () => n(!i),
                        "aria-label": "Adjust volume",
                        "aria-expanded": i,
                        "aria-controls": "volume-slider",
                        "data-testid": "volume-control",
                        children: a ? (0,
                        o.jsx)(m, {
                            height: 17
                        }) : (0,
                        o.jsx)(h, {})
                    }), i && (0,
                    o.jsx)("div", {
                        className: "db:absolute db:px-[6px] db:py-[2px] db:h-[105px] db:mt-[2px] db:bg-white db:border-solid db:border-[#cccccc] db:border-[1px]",
                        children: (0,
                        o.jsx)("div", {
                            className: "db:flex db:h-full db:py-[5px]",
                            children: (0,
                            o.jsx)("input", {
                                id: "volume-slider",
                                className: g(y.volumeInputRange, "db:accent-white "),
                                type: "range",
                                min: "0",
                                max: "1",
                                step: "0.01",
                                "data-testid": "volume-knob",
                                onChange: t => e(parseFloat(t.target.value)),
                                value: t,
                                "aria-valuetext": `Current volume is ${100 * t} %`,
                                "aria-valuenow": t,
                                "aria-label": `Current volume is ${t}. Adjust volume of the audio by sliding the control`
                            })
                        })
                    })]
                })
            })
        }
          , _ = e => d.createElement("svg", {
            width: 12,
            height: 9,
            viewBox: "0 0 12 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e
        }, d.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.0791 1.0876C11.307 1.31541 11.307 1.68475 11.0791 1.91256L4.66248 8.32923C4.43467 8.55703 4.06533 8.55703 3.83752 8.32923L0.920854 5.41256C0.693049 5.18475 0.693049 4.81541 0.920854 4.5876C1.14866 4.3598 1.51801 4.3598 1.74581 4.5876L4.25 7.09179L10.2542 1.0876C10.482 0.859797 10.8513 0.859797 11.0791 1.0876Z",
            fill: "white"
        }))
          , k = {
            check: "_check_18kr0_1"
        }
          , j = ({value: e, currentRate: t}) => {
            let r = t === e;
            return (0,
            o.jsxs)("button", {
                className: `${r ? "db:bg-[#f2f2f2]" : "db:bg-white"} db:cursor-pointer db:h-[32px] db:w-full db:text-black db:text-base db:leading-[none] db:flex db:flex-row db:pl-[12px] db:pr-[12px] db:items-center db:pt-[10px] db:pb-[10px] db:gap-[2px]`,
                value: e,
                "aria-label": `Set playback speed to ${e}x`,
                "data-testid": `playback-speed-option-${e}`,
                children: [(0,
                o.jsx)(_, {
                    className: `db:h-[32px] ${r ? "db:visible" : "db:invisible"} ${k.check}`
                }), (0,
                o.jsx)("span", {
                    className: "db:h-[32px]"
                }), e, "x"]
            })
        }
          , C = [1, 1.5, 1.75, 2]
          , M = ({jwPlayerRef: e, trackAction: t, playbackRate: r}) => {
            let[n,i] = (0,
            d.useState)(0)
              , a = (0,
            d.useRef)([])
              , l = (0,
            d.useId)()
              , s = (0,
            d.useRef)(null)
              , {setShowPopover: c, showPopover: u} = f(s)
              , b = () => {
                s.current && c(!1)
            }
              , p = r => {
                e.setPlaybackRate(isNaN(r) ? 1 : r),
                t(r),
                b()
            }
            ;
            return (0,
            d.useEffect)( () => {
                let e = e => {
                    u && ("Escape" === e.key && c(!1),
                    "ArrowDown" === e.key ? (e.preventDefault(),
                    i(e => (e + 1) % C.length)) : "ArrowUp" === e.key && (e.preventDefault(),
                    i(e => {
                        let t = (e - 1) % C.length;
                        return t < 0 ? C.length - 1 : t
                    }
                    )))
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            , [u]),
            (0,
            d.useEffect)( () => {
                a.current[n] && a.current[n].focus()
            }
            , [n]),
            (0,
            o.jsxs)("div", {
                ref: s,
                children: [(0,
                o.jsx)("button", {
                    className: g(u ? "db:bg-[#555] db:text-white" : "db:bg-[#ffffff] db:text-[#555555]", "db:hover:opacity-80 db:w-[34px] db:h-[20px] db:border db:border-[1.5px] db:border-solid db:border-[#555555] db:cursor-pointer db:leading-[24px] db:flex db:items-center db:justify-center"),
                    type: "button",
                    onClick: () => c(!u),
                    "aria-label": "Set playback speed",
                    "aria-expanded": u,
                    "aria-controls": "playback-speed-menu",
                    "data-testid": "playback-speed-button",
                    children: (0,
                    o.jsxs)("span", {
                        className: "db:mt-[-1px]",
                        children: [r, "x"]
                    })
                }), u && (0,
                o.jsxs)("div", {
                    className: "db:w-[124px] db:translate-x-[-90px] db:translate-y-[5px] db:absolute db:border-solid db:border-[#cccccc] db:border-[1px] db:p-0 db:m-0 db:bg-white",
                    id: l,
                    children: [(0,
                    o.jsx)("div", {
                        className: "db:flex db:text-black db:flex-row db:justify-between db:p-[10px] db:border-white db:border-solid db:border-b",
                        children: (0,
                        o.jsx)("div", {
                            className: "db:text-[16px]",
                            children: "Playback Speed"
                        })
                    }), (0,
                    o.jsx)("ul", {
                        role: "menu",
                        "aria-label": "menu",
                        id: "playback-speed-menu",
                        "data-testid": "playback-speed-menu",
                        children: C.map( (e, t) => (0,
                        o.jsx)("li", {
                            ref: e => {
                                a.current[t] = e
                            }
                            ,
                            role: "menuitem",
                            tabIndex: t === n ? 0 : -1,
                            className: t === n ? "focused" : "",
                            onClick: () => p(e),
                            onKeyDown: t => {
                                "Enter" === t.key && p(e)
                            }
                            ,
                            children: (0,
                            o.jsx)(j, {
                                value: e,
                                currentRate: r
                            }, e)
                        }, e))
                    })]
                })]
            })
        }
          , E = {
            IN_VIEW: "decibel_player_inview",
            CLICK: "decibel_player_click",
            ACTION: "decibel_player_action"
        }
          , S = (e, t) => {
            let r = (0,
            d.useCallback)( () => {
                e && [E.IN_VIEW, E.CLICK, E.ACTION].forEach(r => {
                    e("register", r, {
                        allowDuplicate: !0,
                        consumer: t?.consumer || "decibel",
                        variant: t?.trackingVariant || "no variant"
                    })
                }
                )
            }
            , [e]);
            return (0,
            d.useEffect)( () => {
                e && r()
            }
            , [r, e]),
            {
                trackInView: r => {
                    e && e("track", "decibel_player_inview", {
                        consumer: t?.consumer || "decibel",
                        variant: t?.trackingVariant || "no variant",
                        placement: r
                    })
                }
                ,
                trackClick: () => {
                    e && e("track", "decibel_player_click", {
                        consumer: t?.consumer || "decibel",
                        variant: t?.trackingVariant || "no variant"
                    })
                }
                ,
                trackAction: (0,
                d.useCallback)( (r, n) => {
                    e && e("track", "decibel_player_action", {
                        action: r,
                        consumer: t?.consumer || "decibel",
                        variant: t?.trackingVariant || "no variant",
                        ...n,
                        segment: t?.segment || "default"
                    })
                }
                , [t, e])
            }
        }
          , R = e => d.createElement("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e
        }, d.createElement("path", {
            d: "M9.51232 7.9188H11.4861V14.75H9.51232V7.9188ZM9.51232 7.0861V5.1894H11.4861V7.0861H9.51232Z",
            fill: "white"
        }))
          , I = e => d.createElement("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "decibel-close-icon",
            ...e
        }, d.createElement("path", {
            d: "M18 6L6 18M6 6L18 18",
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
          , L = {
            aiIcon: "_aiIcon_d5m9c_1",
            popover: "_popover_d5m9c_21",
            disclaimerCloseIcon: "_disclaimerCloseIcon_d5m9c_32"
        }
          , N = ({disclaimerText: e}) => {
            let t = (0,
            d.useRef)(null)
              , {showPopover: r, setShowPopover: n} = f(t)
              , i = () => {
                n(!r)
            }
            ;
            return (0,
            d.useEffect)( () => {
                let e = e => {
                    r && "Escape" === e.key && n(!1)
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            , [r]),
            (0,
            o.jsxs)("div", {
                className: "db:relative",
                ref: t,
                children: [(0,
                o.jsx)("button", {
                    "data-testid": "disclaimer-button",
                    type: "button",
                    className: g(L.aiIcon, "db:mt-[2px] db:rounded-full db:flex db:items-center db:justify-center db:cursor-pointer"),
                    onClick: i,
                    "aria-label": "Toggle disclaimer to get more information about AI-generated audio.",
                    children: (0,
                    o.jsx)(R, {
                        width: 25
                    })
                }), r && (0,
                o.jsx)("div", {
                    className: g(L.popover, "db:flex db:flex-col db:items-center db:justify-center db:absolute db:bg-[#fff] db:border-solid db:border-[#cccccc] db:border-[1px]"),
                    children: (0,
                    o.jsxs)("div", {
                        className: "db:flex db:gap-[10px] db:p-[10px]  db:w-full",
                        children: [(0,
                        o.jsx)("div", {
                            className: g("db:flex db:text-left  db:leading-none db:text-black db:justify-between  db:w-full "),
                            children: (0,
                            o.jsx)("span", {
                                children: e
                            })
                        }), (0,
                        o.jsx)("button", {
                            type: "button",
                            className: "db:w-[20px] db:h-fit db:rounded-full db:bg-transparent db:cursor-pointer",
                            onClick: i,
                            "aria-label": "Close disclaimer",
                            children: (0,
                            o.jsx)(I, {
                                className: L.disclaimerCloseIcon
                            })
                        })]
                    })
                })]
            })
        }
          , T = {
            decibelWrapper: "_decibelWrapper_ayw8r_2",
            ctaWrapper: "_ctaWrapper_ayw8r_5",
            sticky: "_sticky_ayw8r_9",
            sentinel: "_sentinel_ayw8r_33",
            playerCloseIcon: "_playerCloseIcon_ayw8r_36"
        };
        var P, O, A = {};
        let D = x(function() {
            if (Y)
                return q;
            Y = 1;
            var e = function() {
                if (O)
                    return A;
                O = 1,
                A.match = function(e, t) {
                    return a(e).some(function(e) {
                        var r = e.inverse
                          , n = "all" === e.type || t.type === e.type;
                        if (n && r || !(n || r))
                            return !1;
                        var i = e.expressions.every(function(e) {
                            var r = e.feature
                              , n = e.modifier
                              , i = e.value
                              , a = t[r];
                            if (!a)
                                return !1;
                            switch (r) {
                            case "orientation":
                            case "scan":
                                return a.toLowerCase() === i.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                i = l(i),
                                a = l(a);
                                break;
                            case "resolution":
                                i = d(i),
                                a = d(a);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                i = o(i),
                                a = o(a);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                i = parseInt(i, 10) || 1,
                                a = parseInt(a, 10) || 0
                            }
                            switch (n) {
                            case "min":
                                return a >= i;
                            case "max":
                                return a <= i;
                            default:
                                return a === i
                            }
                        });
                        return i && !r || !i && r
                    })
                }
                ,
                A.parse = a;
                var e = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i
                  , t = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/
                  , r = /^(?:(min|max)-)?(.+)/
                  , n = /(em|rem|px|cm|mm|in|pt|pc)?$/
                  , i = /(dpi|dpcm|dppx)?$/;
                function a(n) {
                    return n.split(",").map(function(n) {
                        var i = (n = n.trim()).match(e)
                          , a = i[1]
                          , o = i[2]
                          , d = i[3] || ""
                          , l = {};
                        return l.inverse = !!a && "not" === a.toLowerCase(),
                        l.type = o ? o.toLowerCase() : "all",
                        l.expressions = (d = d.match(/\([^\)]+\)/g) || []).map(function(e) {
                            var n = e.match(t)
                              , i = n[1].toLowerCase().match(r);
                            return {
                                modifier: i[1],
                                feature: i[2],
                                value: n[2]
                            }
                        }),
                        l
                    })
                }
                function o(e) {
                    var t, r = Number(e);
                    return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]),
                    r
                }
                function d(e) {
                    var t = parseFloat(e);
                    switch (String(e).match(i)[1]) {
                    case "dpcm":
                        return t / 2.54;
                    case "dppx":
                        return 96 * t;
                    default:
                        return t
                    }
                }
                function l(e) {
                    var t = parseFloat(e);
                    switch (String(e).match(n)[1]) {
                    case "em":
                    case "rem":
                        return 16 * t;
                    case "cm":
                        return 96 * t / 2.54;
                    case "mm":
                        return 96 * t / 2.54 / 10;
                    case "in":
                        return 96 * t;
                    case "pt":
                        return 72 * t;
                    case "pc":
                        return 72 * t / 12;
                    default:
                        return t
                    }
                }
                return A
            }().match
              , t = "u" > typeof window ? window.matchMedia : null;
            function r(r, n, i) {
                var a, o = this;
                function d(e) {
                    o.matches = e.matches,
                    o.media = e.media
                }
                t && !i && (a = t.call(window, r)),
                a ? (this.matches = a.matches,
                this.media = a.media,
                a.addListener(d)) : (this.matches = e(r, n),
                this.media = r),
                this.addListener = function(e) {
                    a && a.addListener(e)
                }
                ,
                this.removeListener = function(e) {
                    a && a.removeListener(e)
                }
                ,
                this.dispose = function() {
                    a && a.removeListener(d)
                }
            }
            return q = function(e, t, n) {
                return new r(e,t,n)
            }
        }());
        var $ = /[A-Z]/g
          , z = /^ms-/
          , W = {};
        function V(e) {
            return "-" + e.toLowerCase()
        }
        function H(e) {
            if (W.hasOwnProperty(e))
                return W[e];
            var t = e.replace($, V);
            return W[e] = z.test(t) ? "-" + t : t
        }
        var q, Y, B, Z, F = {
            exports: {}
        };
        let U = x((a || (a = 1,
        F.exports = (function() {
            if (i)
                return n;
            i = 1;
            var e = Z ? B : (Z = 1,
            B = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            function t() {}
            function r() {}
            return r.resetWarningCache = t,
            n = function() {
                function n(t, r, n, i, a, o) {
                    if (o !== e) {
                        var d = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw d.name = "Invariant Violation",
                        d
                    }
                }
                function i() {
                    return n
                }
                n.isRequired = n;
                var a = {
                    array: n,
                    bigint: n,
                    bool: n,
                    func: n,
                    number: n,
                    object: n,
                    string: n,
                    symbol: n,
                    any: n,
                    arrayOf: i,
                    element: n,
                    elementType: n,
                    instanceOf: i,
                    node: n,
                    objectOf: i,
                    oneOf: i,
                    oneOfType: i,
                    shape: i,
                    exact: i,
                    checkPropTypes: r,
                    resetWarningCache: t
                };
                return a.PropTypes = a,
                a
            }
        }
        )()()),
        F.exports))
          , K = U.oneOfType([U.string, U.number])
          , J = {
            all: U.bool,
            grid: U.bool,
            aural: U.bool,
            braille: U.bool,
            handheld: U.bool,
            print: U.bool,
            projection: U.bool,
            screen: U.bool,
            tty: U.bool,
            tv: U.bool,
            embossed: U.bool
        }
          , {type: Q, ...G} = {
            orientation: U.oneOf(["portrait", "landscape"]),
            scan: U.oneOf(["progressive", "interlace"]),
            aspectRatio: U.string,
            deviceAspectRatio: U.string,
            height: K,
            deviceHeight: K,
            width: K,
            deviceWidth: K,
            color: U.bool,
            colorIndex: U.bool,
            monochrome: U.bool,
            resolution: K,
            type: Object.keys(J)
        }
          , X = {
            minAspectRatio: U.string,
            maxAspectRatio: U.string,
            minDeviceAspectRatio: U.string,
            maxDeviceAspectRatio: U.string,
            minHeight: K,
            maxHeight: K,
            minDeviceHeight: K,
            maxDeviceHeight: K,
            minWidth: K,
            maxWidth: K,
            minDeviceWidth: K,
            maxDeviceWidth: K,
            minColor: U.number,
            maxColor: U.number,
            minColorIndex: U.number,
            maxColorIndex: U.number,
            minMonochrome: U.number,
            maxMonochrome: U.number,
            minResolution: K,
            maxResolution: K,
            ...G
        };
        var ee = {
            all: {
                ...J,
                ...X
            }
        };
        let et = e => `not ${e}`
          , er = (e, t) => {
            let r = H(e);
            return "number" == typeof t && (t = `${t}px`),
            !0 === t ? r : !1 === t ? et(r) : `(${r}: ${t})`
        }
          , en = e => e.join(" and ")
          , ei = e => {
            let t = [];
            return Object.keys(ee.all).forEach(r => {
                let n = e[r];
                null != n && t.push(er(r, n))
            }
            ),
            en(t)
        }
          , ea = (0,
        d.createContext)(void 0)
          , eo = e => e.query || ei(e)
          , ed = e => e ? Object.keys(e).reduce( (t, r) => (t[H(r)] = e[r],
        t), {}) : void 0
          , el = () => {
            let e = (0,
            d.useRef)(!1);
            return (0,
            d.useEffect)( () => {
                e.current = !0
            }
            , []),
            e.current
        }
          , es = e => {
            let t = (0,
            d.useContext)(ea)
              , r = () => ed(e) || ed(t)
              , [n,i] = (0,
            d.useState)(r);
            return (0,
            d.useEffect)( () => {
                let e = r();
                (function(e, t) {
                    if (e === t)
                        return !0;
                    if (!e || !t)
                        return !1;
                    let r = Object.keys(e)
                      , n = Object.keys(t)
                      , i = r.length;
                    if (n.length !== i)
                        return !1;
                    for (let n = 0; n < i; n++) {
                        let i = r[n];
                        if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i))
                            return !1
                    }
                    return !0
                }
                )(n, e) || i(e)
            }
            , [e, t]),
            n
        }
          , ec = e => {
            let t = () => eo(e)
              , [r,n] = (0,
            d.useState)(t);
            return (0,
            d.useEffect)( () => {
                let e = t();
                r !== e && n(e)
            }
            , [e]),
            r
        }
          , eu = (e, t) => {
            let r = () => D(e, t || {}, !!t)
              , [n,i] = (0,
            d.useState)(r)
              , a = el();
            return (0,
            d.useEffect)( () => {
                if (a) {
                    let e = r();
                    return i(e),
                    () => {
                        e && e.dispose()
                    }
                }
            }
            , [e, t]),
            n
        }
          , eb = e => {
            let[t,r] = (0,
            d.useState)(e.matches);
            return (0,
            d.useEffect)( () => {
                let t = e => {
                    r(e.matches)
                }
                ;
                return e.addListener(t),
                r(e.matches),
                () => {
                    e.removeListener(t)
                }
            }
            , [e]),
            t
        }
          , ep = (e, t, r) => {
            let n = es(t)
              , i = ec(e);
            if (!i)
                throw Error("Invalid or missing MediaQuery!");
            let a = eu(i, n)
              , o = eb(a);
            return el(),
            (0,
            d.useEffect)( () => {}
            , [o]),
            (0,
            d.useEffect)( () => () => {
                a && a.dispose()
            }
            , []),
            o
        }
          , em = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        }
          , eh = (e={}) => {
            let t = {
                ...em,
                ...e
            }
              , r = (0,
            d.useRef)(null)
              , [n,i] = (0,
            d.useState)(null)
              , a = (0,
            d.useRef)(null);
            return (0,
            d.useEffect)( () => {
                let e = r.current;
                if (!e)
                    return;
                let n = new IntersectionObserver( ([e]) => {
                    i(e ?? null)
                }
                ,t);
                return a.current = n,
                n.observe(e),
                () => {
                    a.current && a.current.unobserve(e)
                }
            }
            , [r.current, t.root, t.rootMargin, t.threshold]),
            [r, n, a.current]
        }
          , ef = {
            progress: 0,
            currentTime: "00:00",
            duration: 0,
            volume: .5,
            isPlaying: !1,
            playbackRate: 1,
            isReady: !1
        }
          , ex = ({file: e, env: t="development", rum: r, $t: n, baseTrackingData: i={
            consumer: "decibel",
            trackingVariant: "default",
            segment: "default",
            guid: "",
            date: new Date
        }, callToAction: a, disclaimerText: s, offset: c=0, font: b="founders-cond", contentTitle: m="Test Title", disableControls: h=!1, disabledControlsCallback: f}) => {
            let x = r ? new l(r) : null
              , w = (0,
            d.useRef)(null)
              , y = (0,
            d.useRef)(null)
              , _ = (0,
            d.useRef)(null)
              , [k,j] = (0,
            d.useState)(null)
              , [C,E] = (0,
            d.useState)(!1)
              , [R,L] = (0,
            d.useState)("100%")
              , [P,O] = (0,
            d.useState)(ef)
              , [A,D] = (0,
            d.useState)(!1)
              , [$,z] = eh({
                threshold: 1,
                rootMargin: `-${c}px 0px 0px 0px`
            })
              , [W,V,H] = eh()
              , {trackAction: q, trackInView: Y} = S(n, i)
              , B = ep({
                query: "(max-width: 767px)"
            })
              , Z = ep({
                query: "(min-width: 768px) and (max-width: 999px)"
            })
              , F = ep({
                query: "(min-width: 1000px)"
            })
              , U = (0,
            d.useMemo)( () => B ? "mobile" : Z ? "tablet" : "desktop", [B, Z, F]);
            (0,
            d.useEffect)( () => {
                V?.isIntersecting && (Y(U),
                H?.unobserve(W.current))
            }
            , [V]),
            (0,
            d.useEffect)( () => {
                $.current && E(C && A ? "number" == typeof z?.boundingClientRect?.top && "number" == typeof c && z.boundingClientRect.top < c : P.isPlaying && "number" == typeof z?.boundingClientRect?.top && "number" == typeof c && z.boundingClientRect.top < c)
            }
            , [P, z]),
            (0,
            d.useEffect)( () => {
                q("init", i),
                x && x.init({
                    applicationId: "c77d6aa4-a8df-43c5-b0d3-2cc9c709a5ca",
                    clientToken: "pubc2e808db6db8d26afefdbf5ddff7d087",
                    env: t,
                    consumer: i?.consumer
                });
                let r = document.createElement("script");
                return r.src = "https://nodeassets.nbcnews.com/jwplayer/jwplayer-8.30.1/jwplayer.js",
                r.async = !0,
                r.onload = () => {
                    w.current && window.jwplayer && (window.jwplayer(w.current.id).setup({
                        file: e,
                        height: "30px",
                        key: "+9o3ihbMIU8/ixFry35xlHnkQ9tikKg9TU0io1QbWXfpeR0q"
                    }),
                    j(window.jwplayer(w.current.id)))
                }
                ,
                document.body.appendChild(r),
                () => {
                    document.body.contains(r) && document.body.removeChild(r),
                    w.current && window.jwplayer && window.jwplayer(w.current.id) && window.jwplayer(w.current.id).remove()
                }
            }
            , []);
            let K = e => {
                let t = (e && e > 1 ? e : 1) / 100 * 100;
                y.current && (y.current.style.background = `linear-gradient(to right, var(--decibel-player-color) ${t}%, #ccc ${t}%)`)
            }
            ;
            (0,
            d.useEffect)( () => k && P.isPlaying ? (_.current = setInterval( () => {
                q("time_spent", {
                    secondsElapsed: 3,
                    playheadPosition: k.getPosition() || 0
                })
            }
            , 3e3),
            () => {
                _.current && clearInterval(_.current)
            }
            ) : () => {
                _.current && clearInterval(_.current)
            }
            , [P.isPlaying]);
            let J = (0,
            d.useCallback)(e => {
                let t = e / 100;
                k && (k.seek((P.duration || 0) * t),
                q("progress_bar", {
                    time: (P.duration || 0) * t || 0,
                    playheadPosition: k.getPosition() || 0
                }))
            }
            , [k, q, P])
              , Q = (0,
            d.useCallback)(e => {
                let t = 100 * e;
                k && (k.setVolume(t),
                q("volume_change", {
                    volumeLevel: t
                }))
            }
            , [k, q])
              , G = (0,
            d.useCallback)(e => {
                q("playback_speed", {
                    speed: e
                })
            }
            , [e, q]);
            return (0,
            d.useEffect)( () => {
                let e = document?.querySelector(".article-body__content");
                if (!e)
                    return;
                let t = new ResizeObserver(e => {
                    let t = e[0];
                    L(`${t?.contentRect.width}px`)
                }
                );
                return t.observe(e),
                () => t.disconnect()
            }
            , []),
            (0,
            d.useEffect)( () => {
                k && (k.on("meta", e => {
                    O(t => ({
                        ...t,
                        progress: 0,
                        duration: e.duration,
                        isReady: !0
                    })),
                    K(null)
                }
                ),
                k.on("time", e => {
                    let t = e.currentTime / e.duration * 100;
                    O(r => ({
                        ...r,
                        progress: t,
                        duration: e.duration,
                        currentTime: new Date(1e3 * e.currentTime).toISOString().slice(14, 19)
                    })),
                    K(t)
                }
                ),
                k.on("volume", e => {
                    O(t => ({
                        ...t,
                        volume: e.volume / 100
                    }))
                }
                ),
                k.on("play", e => {
                    D(!1),
                    O(t => ({
                        ...t,
                        volume: e.volume / 100,
                        isPlaying: !0
                    })),
                    q("play", {
                        action: "play"
                    })
                }
                ),
                k.on("pause", e => {
                    O(t => ({
                        ...t,
                        volume: e.volume / 100,
                        isPlaying: !1
                    })),
                    q("pause", {
                        action: "pause"
                    })
                }
                ),
                k.on("complete", e => {
                    O(t => ({
                        ...t,
                        volume: e.volume / 100,
                        isPlaying: !1
                    })),
                    q("complete", {
                        action: "completed"
                    }),
                    k.stop()
                }
                ),
                k.on("playbackRateChanged", e => {
                    O(t => ({
                        ...t,
                        volume: e.volume / 100,
                        playbackRate: e.playbackRate
                    }))
                }
                ))
            }
            , [k]),
            e ? (0,
            o.jsxs)("div", {
                className: g(`db:text-[16px] db:flex db:items-center db:flex-co ${b} `),
                "data-testid": "decibel-player",
                ref: W,
                onClick: h ? f : void 0,
                children: [(0,
                o.jsx)("div", {
                    className: T.sentinel,
                    ref: $
                }), (0,
                o.jsxs)("div", {
                    "data-testid": "decibel-player-wrapper",
                    style: {
                        width: `${R}`,
                        "--decibel-player-offset": `${c}px`
                    },
                    className: g(T.decibelWrapper, C && T.sticky, "db:flex db:w-full db:gap-[20px] db:bg-white  db:z-999 db:py-[12px] db:border db:border-solid db:border-y-[#cccccc] db:border-x-[0] db:mt-[0px] db:mb-[30px]"),
                    children: [!C && (0,
                    o.jsxs)("div", {
                        className: g(T.ctaWrapper, "db:flex db:font-bold db:items-center db:gap-[10px]"),
                        children: [(0,
                        o.jsx)("div", {
                            className: "db:max-w-[130px] db:w-max db:text-[18px] db:leading-[normal]",
                            children: a
                        }), s && (0,
                        o.jsx)(N, {
                            disclaimerText: s
                        })]
                    }), (0,
                    o.jsx)("div", {
                        className: "db:hidden",
                        "data-testid": "decibel-jw-player-container",
                        children: (0,
                        o.jsx)("div", {
                            id: "decibel-jw-player",
                            ref: w
                        })
                    }), (0,
                    o.jsxs)("div", {
                        className: `db:flex db:items-center db:gap-3 db:w-full ${h ? "db:pointer-events-none" : "db:pointer-events-auto"}`,
                        "aria-label": m,
                        tabIndex: h ? -1 : 0,
                        "aria-hidden": !!h,
                        inert: !!h,
                        children: [(0,
                        o.jsx)(u, {
                            onClick: () => {
                                k && (P.isPlaying ? (C && D(!0),
                                k.pause()) : k.play())
                            }
                            ,
                            isPlaying: P.isPlaying,
                            isReady: P.isReady
                        }), (0,
                        o.jsxs)("div", {
                            className: "db:w-full db:mt-[3px]",
                            children: [(0,
                            o.jsx)(p, {
                                reference: y,
                                value: P.progress,
                                duration: P.duration,
                                onChange: J,
                                max: 100,
                                isReady: P.isReady
                            }), (0,
                            o.jsxs)("div", {
                                "data-testid": "time-display",
                                className: "db:flex db:justify-between db:items-center db:mt-[-5px] db:text-sm db:text-black",
                                children: [(0,
                                o.jsx)("span", {
                                    children: P.currentTime
                                }), (0,
                                o.jsx)("span", {
                                    children: new Date(1e3 * P.duration).toISOString().slice(14, 19)
                                })]
                            })]
                        }), (0,
                        o.jsxs)("div", {
                            className: "db:flex db:items-center db:gap-2.5 db:ml-auto",
                            children: [(0,
                            o.jsx)(v, {
                                handleVolumeChange: Q,
                                volume: P.volume
                            }), k && (0,
                            o.jsx)(M, {
                                jwPlayerRef: k,
                                trackAction: G,
                                playbackRate: P.playbackRate
                            }), C && (0,
                            o.jsx)(I, {
                                onClick: () => {
                                    E(!1),
                                    D(!1),
                                    k?.pause(),
                                    q("close", {
                                        action: "close"
                                    })
                                }
                                ,
                                className: g(T.playerCloseIcon, "db:cursor-pointer")
                            })]
                        })]
                    })]
                })]
            }) : (console.error("* Decibel player requires a valid audio file URL. *"),
            null)
        }
    }
    ,
    66315: function(e) {
        e.exports = function(e, t, r) {
            e = e || {};
            var n = t.prototype
              , i = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function a(e, t, r, i) {
                return n.fromToBase(e, t, r, i)
            }
            r.en.relativeTime = i,
            n.fromToBase = function(t, n, a, o, d) {
                for (var l, s, c, u = a.$locale().relativeTime || i, b = e.thresholds || [{
                    l: "s",
                    r: 44,
                    d: "second"
                }, {
                    l: "m",
                    r: 89
                }, {
                    l: "mm",
                    r: 44,
                    d: "minute"
                }, {
                    l: "h",
                    r: 89
                }, {
                    l: "hh",
                    r: 21,
                    d: "hour"
                }, {
                    l: "d",
                    r: 35
                }, {
                    l: "dd",
                    r: 25,
                    d: "day"
                }, {
                    l: "M",
                    r: 45
                }, {
                    l: "MM",
                    r: 10,
                    d: "month"
                }, {
                    l: "y",
                    r: 17
                }, {
                    l: "yy",
                    d: "year"
                }], p = b.length, m = 0; m < p; m += 1) {
                    var h = b[m];
                    h.d && (l = o ? r(t).diff(a, h.d, !0) : a.diff(t, h.d, !0));
                    var f = (e.rounding || Math.round)(Math.abs(l));
                    if (c = l > 0,
                    f <= h.r || !h.r) {
                        f <= 1 && m > 0 && (h = b[m - 1]);
                        var x = u[h.l];
                        d && (f = d("" + f)),
                        s = "string" == typeof x ? x.replace("%d", f) : x(f, n, h.l, c);
                        break
                    }
                }
                if (n)
                    return s;
                var w = c ? u.future : u.past;
                return "function" == typeof w ? w(s) : w.replace("%s", s)
            }
            ,
            n.to = function(e, t) {
                return a(e, t, this, !0)
            }
            ,
            n.from = function(e, t) {
                return a(e, t, this)
            }
            ;
            var o = function(e) {
                return e.$u ? r.utc() : r()
            };
            n.toNow = function(e) {
                return this.to(o(this), e)
            }
            ,
            n.fromNow = function(e) {
                return this.from(o(this), e)
            }
        }
    }
}]);
