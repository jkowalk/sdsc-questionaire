const css_style_basic =
    `
        <style>
        body {
            background-image: url("https://www.sdsc-bw.de/wp-content/uploads/2021/02/bg-body.png");
            background-position: left top;
            background-size: auto;
            background-repeat: no-repeat;
            background-attachment: scroll;
            margin: 10px;
            font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
            color: #4a4a4a;
            text-align: center;
        }

        :root {
            /* Farbwerte (neu) */
            --lilac: rgb(188, 181, 249);
            --light_green: rgb(121, 218, 205);
            --light_blue: rgb(130, 219, 255);
            --light_gray: rgb(139, 155, 160);

            /* Corporate Colors (s. Logo SDSC-BW) */
            --corp_blue: #007ea9;
            --corp_green: rgb(0, 152, 129);
            --corp_yellow: rgb(255, 212, 0);
            --corp_anthracite: #4a4a4a;

            /* Varianten */
            --light_green_transparent: #79dacd59;
            --corp_anthracite_transparent: #4a4a4abf;
        }
        /* SDSC-BW Logo */
        .sdsc-logo {
            position: absolute;
            top: 0.5rem;
            right: 2rem;
            width: 11rem;
        }

        .title {
            font-weight: 700;
            font-size: 40px !important;
            line-height: 1.1em;
            color: #007ea9;
            margin-top: 7rem;
            text-align: center;
            margin-bottom: 0;
        }

        .subtitle {
            text-align: center;
            color: #007ea9;
            margin-top: 0;
        }

        header {
            align-content: center;
        }

        .text {
            background: #fff;
            border-radius: 20px;
            box-shadow: 2px 2px 10px grey;
            margin: 1rem;
            padding: 15px;
            page-break-inside: avoid;
        }
        footer > div {
            margin: 1.2rem;
            display: inline-block;
        }

         footer {
             margin: -10px;
        }
        #microservices {
            text-align: center;
            margin: -4rem -1rem -1rem;
            page-break-inside: avoid;
        }

        div#overall_score {
            position: relative;
            top: 324px;
            font-size: 40px;
            font-weight: 700;
        }

        div#score_perc1 {
            position: relative;
            top: 81px;
            font-size: 13px;
        }

        div#score_perc2 {
            position: relative;
            top: 183px;
            left: 204px;
            font-size: 13px;
        }

        div#score_perc3 {
            position: relative;
            top: 398px;
            left: 200px;
            font-size: 13px;
        }

        div#score_perc4 {
            position: relative;
            top: 496px;
            left: 0px;
            font-size: 13px;
        }

        div#score_perc5 {
            position: relative;
            top: 366px;
            left: -201px;
            font-size: 13px;
        }

        div#score_perc6 {
            position: relative;
            top: 123px;
            left: -208px;
            font-size: 13px;
        }

        div#overview_wrapper {
            margin-top: -6rem;
        }

        .score {
            text-align: right;
            position: relative;
            font-size: 18px;
            font-style: italic;
            font-weight: 600;
            top: 10px;
        }

        #surveyContainer {
            text-align: left;
            max-width: 90%;
            margin: auto;
        }

        .sv-action__content {
            display: none;
        }

        /* Page title */
        .sv-title.sv-page__title {
            color: #007ea9;
        }

        /* Question title */

        .sv-question__header.sv-question__header--location--top {
            color: #007ea9;
        }

        h4.sv-title.sv-panel__title {
            page-break-after: avoid;
        }

        .sv-panel.sv-row__panel > div:nth-child(2) > div {
            page-break-inside: avoid;
        }

        /* Survey Description */
        .custom-description {
            font-weight: 700;
            font-size: 22px !important;
            line-height: 1.3em;
        }


        .sv-root-modern {
            max-width: 70rem;
            margin: auto;
        }

        .sv-row:not(:last-child) {
            padding-bottom: 1rem;
        }

        .sv-panel .sv-row:not(:last-child) {
            padding-bottom: 1rem;
        }

        /* Navigation Buttons */
        .sv-footer.sv-body__footer.sv-clearfix {
            margin-top: 0;
        }


        .sv-container-modern {
            page-break-inside: avoid;
            font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
        }

        .sv-title {
            font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
        }

        .sv-body {
            font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
        }

        #microservices > svg > g > g.data > g:nth-child(1) > path {
            display: none;
        }

    </style>
    `;

const css_style_all_questions =
    `
            <style>
      body {
        background-image: url("https://www.sdsc-bw.de/wp-content/uploads/2021/02/bg-body.png");
        background-position: left top;
        background-size: auto;
        background-repeat: no-repeat;
        background-attachment: scroll;
        margin: 10px;
        font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
        color: #4a4a4a;
        text-align: center;
      }
    

      :root {
        /* Farbwerte (neu) */
        --lilac: rgb(188, 181, 249);
        --light_green: rgb(121, 218, 205);
        --light_blue: rgb(130, 219, 255);
        --light_gray: rgb(139, 155, 160);

        /* Corporate Colors (s. Logo SDSC-BW) */
        --corp_blue: #007ea9;
        --corp_green: rgb(0, 152, 129);
        --corp_yellow: rgb(255, 212, 0);
        --corp_anthracite: #4a4a4a;

        /* Varianten */
        --light_green_transparent: #79dacd59;
        --corp_anthracite_transparent: #4a4a4abf;
      }

      /* SDSC-BW Logo */
      .sdsc-logo {
        position: absolute;
        top: 0.5rem;
        right: 2rem;
        width: 11rem;
      }

      .title {
        font-weight: 700;
        font-size: 40px !important;
        line-height: 1.1em;
        color: #007ea9;
        margin-top: 7rem;
        text-align: center;
        margin-bottom: 0;
      }

      .subtitle {
        text-align: center;
        color: #007ea9;
        margin-top: 0;
      }

      header {
        align-content: center;
      }

      .text {
        background: #fff;
        border-radius: 20px;
        box-shadow: 2px 2px 10px grey;
        margin: 2rem;
        margin-top: 4rem;
        padding: 15px;
        page-break-inside: avoid;
      }

      #microservices {
        text-align: center;
        margin: -5rem -1rem -1rem;
        page-break-inside: avoid;
      }

      div#overall_score {
        position: relative;
        top: 314px;
        font-size: 40px;
        font-weight: 700;
      }

      div#score_perc1 {
        position: relative;
        top: 71px;
        font-size: 13px;
      }
      div#score_perc2 {
        position: relative;
        top: 173px;
        left: 204px;
        font-size: 13px;
      }
      div#score_perc3 {
        position: relative;
        top: 388px;
        left: 200px;
        font-size: 13px;
      }
      div#score_perc4 {
        position: relative;
        top: 486px;
        left: 0px;
        font-size: 13px;
      }
      div#score_perc5 {
        position: relative;
        top: 356px;
        left: -201px;
        font-size: 13px;
      }
      div#score_perc6 {
        position: relative;
        top: 113px;
        left: -208px;
        font-size: 13px;
      }

      .score {
        text-align: right;
        position: relative;
        font-size: 18px;
        font-style: italic;
        font-weight: 600;
        top: 10px;
      }

      #surveyContainer {
        text-align: left;
        max-width: 90%;
        margin: auto;
      }

      .sv-action__content {
        display: none;
      }

      /* Page title */
      .sv-title.sv-page__title {
        color: #007ea9;
      }

      /* Question title */

      .sv-question__header.sv-question__header--location--top {
        color: #007ea9;
      }

      h4.sv-title.sv-panel__title {
        page-break-after: avoid;
      }

      .sv-panel.sv-row__panel > div:nth-child(2) > div {
        page-break-inside: avoid;
      }

      /* Survey Description */
      .custom-description {
        font-weight: 700;
        font-size: 22px !important;
        line-height: 1.3em;
      }

      .sv-root-modern {
        max-width: 70rem;
        margin: auto;
      }

      .sv-row:not(:last-child) {
        padding-bottom: 1rem;
      }

      .sv-panel .sv-row:not(:last-child) {
        padding-bottom: 1rem;
      }

      /* Navigation Buttons */
      .sv-footer.sv-body__footer.sv-clearfix {
        margin-top: 0;
      }

      div#overview_wrapper {
        margin-top: -6rem;
        zoom: 1.2
      }


      .sv-container-modern {
        page-break-inside: avoid;
        font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
      }

      .sv-title {
        font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
      }

      .sv-body {
        font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
      }

      .tiles {
        display: flex;
        text-align: left;
        margin: 0.2rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
      }


      .tiles > div {
        margin: 1.5rem;
        display: inline-block;
      }

     .tiles > div > h4 {
        margin: 0;
      }

      #microservices > svg > g > g.data > g:nth-child(1) > path {
        display: none;
      }


    </style>
    `

const css_style_generic_report =
    `
            <style>
            body {
            font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
            }

      #surveyContainer {
        text-align: left;
        max-width: 90%;
        margin: auto;
      }

      .sv-action__content {
        display: none;
      }

      /* Page title */
      .sv-title.sv-page__title {
        color: #007ea9;
      }

      /* Question title */

      .sv-question__header.sv-question__header--location--top {
        color: #007ea9;
      }

      h4.sv-title.sv-panel__title {
        page-break-after: avoid;
      }

      .sv-panel.sv-row__panel > div:nth-child(2) > div {
        page-break-inside: avoid;
      }

      /* Survey Description */
      .custom-description {
        font-weight: 700;
        font-size: 22px !important;
        line-height: 1.3em;
      }

      .sv-root-modern {
        max-width: 70rem;
        margin: auto;
      }

      .sv-row:not(:last-child) {
        padding-bottom: 1rem;
      }

      .sv-panel .sv-row:not(:last-child) {
        padding-bottom: 1rem;
      }

      /* Navigation Buttons */
      .sv-footer.sv-body__footer.sv-clearfix {
        margin-top: 0;
      }

      .sv-title {
        font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
      }

      .sv-body {
        font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif !important;
      }
      
      footer {
        text-align: center;
      }
      
      footer > div {
            margin: 1.2rem;
            display: inline-block;
        }
    </style>
    `

const radar_chart_script =
    `
        <script>
    // Radar Chart Script
    var radar = function (t) {
        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        var e = {};
        return n.m = t, n.c = e, n.i = function (t) {
            return t
        }, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: r})
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, n.p = "", n(n.s = 111)
    }([function (t, n, e) {
        "use strict";

        function r(t, n, e, u) {
            function c(n) {
                return t(n = new Date(+n)), n
            }

            return c.floor = c, c.ceil = function (e) {
                return t(e = new Date(e - 1)), n(e, 1), t(e), e
            }, c.round = function (t) {
                var n = c(t), e = c.ceil(t);
                return t - n < e - t ? n : e
            }, c.offset = function (t, e) {
                return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
            }, c.range = function (e, r, i) {
                var a = [];
                if (e = c.ceil(e), i = null == i ? 1 : Math.floor(i), !(e < r && i > 0)) return a;
                do {
                    a.push(new Date(+e))
                } while (n(e, i), t(e), e < r);
                return a
            }, c.filter = function (e) {
                return r(function (n) {
                    if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
                }, function (t, r) {
                    if (t >= t) for (; --r >= 0;) for (; n(t, 1), !e(t);) ;
                })
            }, e && (c.count = function (n, r) {
                return i.setTime(+n), a.setTime(+r), t(i), t(a), Math.floor(e(i, a))
            }, c.every = function (t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? c.filter(u ? function (n) {
                    return u(n) % t == 0
                } : function (n) {
                    return c.count(0, n) % t == 0
                }) : c : null
            }), c
        }

        n.a = r;
        var i = new Date, a = new Date
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._groups = t, this._parents = n
        }

        function i() {
            return new r([[document.documentElement]], O)
        }

        e.d(n, "c", function () {
            return O
        }), n.b = r;
        var a = e(199), u = e(200), c = e(188), o = e(182), s = e(79), f = e(187), l = e(192), h = e(195), d = e(202),
            _ = e(180), p = e(194), v = e(193), b = e(201), y = e(186), g = e(185), x = e(179), m = e(81),
            M = e(196), w = e(181), T = e(203), k = e(189), N = e(197), A = e(191), S = e(178), C = e(190),
            E = e(198), P = e(183), D = e(39), U = e(184), O = [null];
        r.prototype = i.prototype = {
            constructor: r,
            select: a.a,
            selectAll: u.a,
            filter: c.a,
            data: o.a,
            enter: s.a,
            exit: f.a,
            merge: l.a,
            order: h.a,
            sort: d.a,
            call: _.a,
            nodes: p.a,
            node: v.a,
            size: b.a,
            empty: y.a,
            each: g.a,
            attr: x.a,
            style: m.b,
            property: M.a,
            classed: w.a,
            text: T.a,
            html: k.a,
            raise: N.a,
            lower: A.a,
            append: S.a,
            insert: C.a,
            remove: E.a,
            datum: P.a,
            on: D.c,
            dispatch: U.a
        }, n.a = i
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(50);
        e.d(n, "bisect", function () {
            return r.a
        }), e.d(n, "bisectRight", function () {
            return r.b
        }), e.d(n, "bisectLeft", function () {
            return r.c
        });
        var i = e(8);
        e.d(n, "ascending", function () {
            return i.a
        });
        var a = e(51);
        e.d(n, "bisector", function () {
            return a.a
        });
        var u = e(113);
        e.d(n, "cross", function () {
            return u.a
        });
        var c = e(114);
        e.d(n, "descending", function () {
            return c.a
        });
        var o = e(52);
        e.d(n, "deviation", function () {
            return o.a
        });
        var s = e(53);
        e.d(n, "extent", function () {
            return s.a
        });
        var f = e(115);
        e.d(n, "histogram", function () {
            return f.a
        });
        var l = e(125);
        e.d(n, "thresholdFreedmanDiaconis", function () {
            return l.a
        });
        var h = e(126);
        e.d(n, "thresholdScott", function () {
            return h.a
        });
        var d = e(57);
        e.d(n, "thresholdSturges", function () {
            return d.a
        });
        var _ = e(117);
        e.d(n, "max", function () {
            return _.a
        });
        var p = e(118);
        e.d(n, "mean", function () {
            return p.a
        });
        var v = e(119);
        e.d(n, "median", function () {
            return v.a
        });
        var b = e(120);
        e.d(n, "merge", function () {
            return b.a
        });
        var y = e(54);
        e.d(n, "min", function () {
            return y.a
        });
        var g = e(55);
        e.d(n, "pairs", function () {
            return g.a
        });
        var x = e(121);
        e.d(n, "permute", function () {
            return x.a
        });
        var m = e(27);
        e.d(n, "quantile", function () {
            return m.a
        });
        var M = e(56);
        e.d(n, "range", function () {
            return M.a
        });
        var w = e(122);
        e.d(n, "scan", function () {
            return w.a
        });
        var T = e(123);
        e.d(n, "shuffle", function () {
            return T.a
        });
        var k = e(124);
        e.d(n, "sum", function () {
            return k.a
        });
        var N = e(58);
        e.d(n, "ticks", function () {
            return N.a
        }), e.d(n, "tickIncrement", function () {
            return N.b
        }), e.d(n, "tickStep", function () {
            return N.c
        });
        var A = e(59);
        e.d(n, "transpose", function () {
            return A.a
        });
        var S = e(60);
        e.d(n, "variance", function () {
            return S.a
        });
        var C = e(127);
        e.d(n, "zip", function () {
            return C.a
        })
    }, function (t, n, e) {
        "use strict";
        e.d(n, "e", function () {
            return r
        }), e.d(n, "d", function () {
            return i
        }), e.d(n, "c", function () {
            return a
        }), e.d(n, "b", function () {
            return u
        }), e.d(n, "a", function () {
            return c
        });
        var r = 1e3, i = 6e4, a = 36e5, u = 864e5, c = 6048e5
    }, function (t, n, e) {
        "use strict";
        var r = e(29);
        e.d(n, "f", function () {
            return r.h
        }), e.d(n, "e", function () {
            return r.g
        }), e.d(n, "d", function () {
            return r.f
        });
        var i = e(135);
        e.d(n, "c", function () {
            return i.b
        }), e.d(n, "b", function () {
            return i.a
        });
        var a = e(134);
        e.d(n, "a", function () {
            return a.a
        })
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return i
        }), e.d(n, "b", function () {
            return a
        });
        var r = Array.prototype, i = r.map, a = r.slice
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.orbital = n.cartesian = void 0;
        var r = e(10);
        n.cartesian = function (t, n, e) {
            return {
                x: function () {
                    return e * (0, r.cos)(t * n - Math.PI / 2)
                }, y: function () {
                    return e * (0, r.sin)(t * n - Math.PI / 2)
                }
            }
        }, n.orbital = function (t, n, e) {
            return n - t * (n / (1 + (0, r.max)(e) - (0, r.min)(e)))
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(33);
        e.d(n, "interpolate", function () {
            return r.a
        });
        var i = e(67);
        e.d(n, "interpolateArray", function () {
            return i.a
        });
        var a = e(32);
        e.d(n, "interpolateBasis", function () {
            return a.a
        });
        var u = e(68);
        e.d(n, "interpolateBasisClosed", function () {
            return u.a
        });
        var c = e(70);
        e.d(n, "interpolateDate", function () {
            return c.a
        });
        var o = e(20);
        e.d(n, "interpolateNumber", function () {
            return o.a
        });
        var s = e(71);
        e.d(n, "interpolateObject", function () {
            return s.a
        });
        var f = e(150);
        e.d(n, "interpolateRound", function () {
            return f.a
        });
        var l = e(73);
        e.d(n, "interpolateString", function () {
            return l.a
        });
        var h = e(152);
        e.d(n, "interpolateTransformCss", function () {
            return h.a
        }), e.d(n, "interpolateTransformSvg", function () {
            return h.b
        });
        var d = e(154);
        e.d(n, "interpolateZoom", function () {
            return d.a
        });
        var _ = e(72);
        e.d(n, "interpolateRgb", function () {
            return _.a
        }), e.d(n, "interpolateRgbBasis", function () {
            return _.b
        }), e.d(n, "interpolateRgbBasisClosed", function () {
            return _.c
        });
        var p = e(147);
        e.d(n, "interpolateHsl", function () {
            return p.a
        }), e.d(n, "interpolateHslLong", function () {
            return p.b
        });
        var v = e(148);
        e.d(n, "interpolateLab", function () {
            return v.a
        });
        var b = e(146);
        e.d(n, "interpolateHcl", function () {
            return b.a
        }), e.d(n, "interpolateHclLong", function () {
            return b.b
        });
        var y = e(145);
        e.d(n, "interpolateCubehelix", function () {
            return y.a
        }), e.d(n, "interpolateCubehelixLong", function () {
            return y.b
        });
        var g = e(149);
        e.d(n, "quantize", function () {
            return g.a
        })
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        n.min = function (t) {
            return Math.min.apply(null, t)
        }, n.max = function (t) {
            return Math.max.apply(null, t)
        }, n.cos = function (t) {
            return Math.cos(t)
        }, n.sin = function (t) {
            return Math.sin(t)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return null === t ? NaN : +t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return function (e) {
                return t + e * n
            }
        }

        function i(t, n, e) {
            return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
                return Math.pow(t + r * n, e)
            }
        }

        function a(t, n) {
            var i = n - t;
            return i ? r(t, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : e.i(o.a)(isNaN(t) ? n : t)
        }

        function u(t) {
            return 1 == (t = +t) ? c : function (n, r) {
                return r - n ? i(n, r, t) : e.i(o.a)(isNaN(n) ? r : n)
            }
        }

        function c(t, n) {
            var i = n - t;
            return i ? r(t, i) : e.i(o.a)(isNaN(t) ? n : t)
        }

        n.b = a, n.c = u, n.a = c;
        var o = e(69)
    }, function (t, n, e) {
        "use strict";
        var r = e(155);
        e.d(n, "a", function () {
            return r.a
        })
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t.match(/.{6}/g).map(function (t) {
                return "#" + t
            })
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = t.domain;
            return t.ticks = function (t) {
                var r = n();
                return e.i(a.ticks)(r[0], r[r.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function (t, r) {
                return e.i(o.a)(n(), t, r)
            }, t.nice = function (r) {
                null == r && (r = 10);
                var i, u = n(), c = 0, o = u.length - 1, s = u[c], f = u[o];
                return f < s && (i = s, s = f, f = i, i = c, c = o, o = i), i = e.i(a.tickIncrement)(s, f, r), i > 0 ? (s = Math.floor(s / i) * i, f = Math.ceil(f / i) * i, i = e.i(a.tickIncrement)(s, f, r)) : i < 0 && (s = Math.ceil(s * i) / i, f = Math.floor(f * i) / i, i = e.i(a.tickIncrement)(s, f, r)), i > 0 ? (u[c] = Math.floor(s / i) * i, u[o] = Math.ceil(f / i) * i, n(u)) : i < 0 && (u[c] = Math.ceil(s * i) / i, u[o] = Math.floor(f * i) / i, n(u)), t
            }, t
        }

        function i() {
            var t = e.i(c.a)(c.b, u.interpolateNumber);
            return t.copy = function () {
                return e.i(c.c)(t, i())
            }, r(t)
        }

        n.b = r, n.a = i;
        var a = e(2), u = e(9), c = e(21), o = e(170)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t > 1 ? 0 : t < -1 ? d : Math.acos(t)
        }

        function i(t) {
            return t >= 1 ? _ : t <= -1 ? -_ : Math.asin(t)
        }

        e.d(n, "g", function () {
            return a
        }), e.d(n, "m", function () {
            return u
        }), e.d(n, "h", function () {
            return c
        }), e.d(n, "e", function () {
            return o
        }), e.d(n, "j", function () {
            return s
        }), e.d(n, "i", function () {
            return f
        }), e.d(n, "d", function () {
            return l
        }), e.d(n, "a", function () {
            return h
        }), e.d(n, "b", function () {
            return d
        }), e.d(n, "f", function () {
            return _
        }), e.d(n, "c", function () {
            return p
        }), n.l = r, n.k = i;
        var a = Math.abs, u = Math.atan2, c = Math.cos, o = Math.max, s = Math.min, f = Math.sin, l = Math.sqrt,
            h = 1e-12, d = Math.PI, _ = d / 2, p = 2 * d
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            if ((i = t.length) > 1) for (var e, r, i, a = 1, u = t[n[0]], c = u.length; a < i; ++a) for (r = u, u = t[n[a]], e = 0; e < c; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
            return e
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(31);
        n.a = function (t) {
            return t = e.i(r.a)(Math.abs(t)), t ? t[1] : NaN
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return t = +t, n -= t, function (e) {
                return t + n * e
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return (n -= t = +t) ? function (e) {
                return (e - t) / n
            } : e.i(d.a)(n)
        }

        function i(t) {
            return function (n, e) {
                var r = t(n = +n, e = +e);
                return function (t) {
                    return t <= n ? 0 : t >= e ? 1 : r(t)
                }
            }
        }

        function a(t) {
            return function (n, e) {
                var r = t(n = +n, e = +e);
                return function (t) {
                    return t <= 0 ? n : t >= 1 ? e : r(t)
                }
            }
        }

        function u(t, n, e, r) {
            var i = t[0], a = t[1], u = n[0], c = n[1];
            return a < i ? (i = e(a, i), u = r(c, u)) : (i = e(i, a), u = r(u, c)), function (t) {
                return u(i(t))
            }
        }

        function c(t, n, r, i) {
            var a = Math.min(t.length, n.length) - 1, u = new Array(a), c = new Array(a), o = -1;
            for (t[a] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < a;) u[o] = r(t[o], t[o + 1]), c[o] = i(n[o], n[o + 1]);
            return function (n) {
                var r = e.i(f.bisect)(t, n, 1, a) - 1;
                return c[r](u[r](n))
            }
        }

        function o(t, n) {
            return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }

        function s(t, n) {
            function e() {
                return s = Math.min(v.length, b.length) > 2 ? c : u, f = d = null, o
            }

            function o(n) {
                return (f || (f = s(v, b, g ? i(t) : t, y)))(+n)
            }

            var s, f, d, v = p, b = p, y = l.interpolate, g = !1;
            return o.invert = function (t) {
                return (d || (d = s(b, v, r, g ? a(n) : n)))(+t)
            }, o.domain = function (t) {
                return arguments.length ? (v = h.a.call(t, _.a), e()) : v.slice()
            }, o.range = function (t) {
                return arguments.length ? (b = h.b.call(t), e()) : b.slice()
            }, o.rangeRound = function (t) {
                return b = h.b.call(t), y = l.interpolateRound, e()
            }, o.clamp = function (t) {
                return arguments.length ? (g = !!t, e()) : g
            }, o.interpolate = function (t) {
                return arguments.length ? (y = t, e()) : y
            }, e()
        }

        n.b = r, n.c = o, n.a = s;
        var f = e(2), l = e(9), h = e(5), d = e(34), _ = e(75), p = [0, 1]
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(35);
        e.d(n, "creator", function () {
            return r.a
        });
        var i = e(174);
        e.d(n, "local", function () {
            return i.a
        });
        var a = e(78);
        e.d(n, "matcher", function () {
            return a.a
        });
        var u = e(175);
        e.d(n, "mouse", function () {
            return u.a
        });
        var c = e(36);
        e.d(n, "namespace", function () {
            return c.a
        });
        var o = e(37);
        e.d(n, "namespaces", function () {
            return o.a
        });
        var s = e(176);
        e.d(n, "select", function () {
            return s.a
        });
        var f = e(177);
        e.d(n, "selectAll", function () {
            return f.a
        });
        var l = e(1);
        e.d(n, "selection", function () {
            return l.a
        });
        var h = e(40);
        e.d(n, "selector", function () {
            return h.a
        });
        var d = e(82);
        e.d(n, "selectorAll", function () {
            return d.a
        });
        var _ = e(81);
        e.d(n, "style", function () {
            return _.a
        });
        var p = e(204);
        e.d(n, "touch", function () {
            return p.a
        });
        var v = e(205);
        e.d(n, "touches", function () {
            return v.a
        });
        var b = e(42);
        e.d(n, "window", function () {
            return b.a
        });
        var y = e(39);
        e.d(n, "event", function () {
            return y.a
        }), e.d(n, "customEvent", function () {
            return y.b
        })
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
        }

        function i(t) {
            this._context = t
        }

        n.c = r, n.b = i, i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 3:
                        r(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        r(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        }, n.a = function (t) {
            return new i(t)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
        }

        function i(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        n.c = r, n.b = i, i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        r(this, this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        r(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, n.a = function t(n) {
            function e(t) {
                return new i(t, n)
            }

            return e.tension = function (n) {
                return t(+n)
            }, e
        }(0)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        }, n.a = function (t) {
            return new r(t)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(11);
        n.a = function (t, n, e) {
            if (null == e && (e = r.a), i = t.length) {
                if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
                if (n >= 1) return +e(t[i - 1], i - 1, t);
                var i, a = (i - 1) * n, u = Math.floor(a), c = +e(t[u], u, t);
                return c + (+e(t[u + 1], u + 1, t) - c) * (a - u)
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
        }

        function i(t, n) {
            var e = new r;
            if (t instanceof r) t.each(function (t, n) {
                e.set(n, t)
            }); else if (Array.isArray(t)) {
                var i, a = -1, u = t.length;
                if (null == n) for (; ++a < u;) e.set(a, t[a]); else for (; ++a < u;) e.set(n(i = t[a], a, t), i)
            } else if (t) for (var c in t) e.set(c, t[c]);
            return e
        }

        e.d(n, "b", function () {
            return a
        });
        var a = "$";
        r.prototype = i.prototype = {
            constructor: r, has: function (t) {
                return a + t in this
            }, get: function (t) {
                return this[a + t]
            }, set: function (t, n) {
                return this[a + t] = n, this
            }, remove: function (t) {
                var n = a + t;
                return n in this && delete this[n]
            }, clear: function () {
                for (var t in this) t[0] === a && delete this[t]
            }, keys: function () {
                var t = [];
                for (var n in this) n[0] === a && t.push(n.slice(1));
                return t
            }, values: function () {
                var t = [];
                for (var n in this) n[0] === a && t.push(this[n]);
                return t
            }, entries: function () {
                var t = [];
                for (var n in this) n[0] === a && t.push({key: n.slice(1), value: this[n]});
                return t
            }, size: function () {
                var t = 0;
                for (var n in this) n[0] === a && ++t;
                return t
            }, empty: function () {
                for (var t in this) if (t[0] === a) return !1;
                return !0
            }, each: function (t) {
                for (var n in this) n[0] === a && t(this[n], n.slice(1), this)
            }
        }, n.a = i
    }, function (t, n, e) {
        "use strict";

        function r() {
        }

        function i(t) {
            var n;
            return t = (t + "").trim().toLowerCase(), (n = m.exec(t)) ? (n = parseInt(n[1], 16), new s(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = M.exec(t)) ? a(parseInt(n[1], 16)) : (n = w.exec(t)) ? new s(n[1], n[2], n[3], 1) : (n = T.exec(t)) ? new s(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = k.exec(t)) ? u(n[1], n[2], n[3], n[4]) : (n = N.exec(t)) ? u(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = A.exec(t)) ? f(n[1], n[2] / 100, n[3] / 100, 1) : (n = S.exec(t)) ? f(n[1], n[2] / 100, n[3] / 100, n[4]) : C.hasOwnProperty(t) ? a(C[t]) : "transparent" === t ? new s(NaN, NaN, NaN, 0) : null
        }

        function a(t) {
            return new s(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function u(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN), new s(t, n, e, r)
        }

        function c(t) {
            return t instanceof r || (t = i(t)), t ? (t = t.rgb(), new s(t.r, t.g, t.b, t.opacity)) : new s
        }

        function o(t, n, e, r) {
            return 1 === arguments.length ? c(t) : new s(t, n, e, null == r ? 1 : r)
        }

        function s(t, n, e, r) {
            this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
        }

        function f(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new d(t, n, e, r)
        }

        function l(t) {
            if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
            if (t instanceof r || (t = i(t)), !t) return new d;
            if (t instanceof d) return t;
            t = t.rgb();
            var n = t.r / 255, e = t.g / 255, a = t.b / 255, u = Math.min(n, e, a), c = Math.max(n, e, a), o = NaN,
                s = c - u, f = (c + u) / 2;
            return s ? (o = n === c ? (e - a) / s + 6 * (e < a) : e === c ? (a - n) / s + 2 : (n - e) / s + 4, s /= f < .5 ? c + u : 2 - c - u, o *= 60) : s = f > 0 && f < 1 ? 0 : o, new d(o, s, f, t.opacity)
        }

        function h(t, n, e, r) {
            return 1 === arguments.length ? l(t) : new d(t, n, e, null == r ? 1 : r)
        }

        function d(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        function _(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }

        n.c = r, e.d(n, "e", function () {
            return v
        }), e.d(n, "d", function () {
            return b
        }), n.h = i, n.b = c, n.g = o, n.a = s, n.f = h;
        var p = e(30), v = .7, b = 1 / v, y = "\\\\s*([+-]?\\\\d+)\\\\s*",
            g = "\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*",
            x = "\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*", m = /^#([0-9a-f]{3})$/, M = /^#([0-9a-f]{6})$/,
            w = new RegExp("^rgb\\\\(" + [y, y, y] + "\\\\)$"), T = new RegExp("^rgb\\\\(" + [x, x, x] + "\\\\)$"),
            k = new RegExp("^rgba\\\\(" + [y, y, y, g] + "\\\\)$"),
            N = new RegExp("^rgba\\\\(" + [x, x, x, g] + "\\\\)$"), A = new RegExp("^hsl\\\\(" + [g, x, x] + "\\\\)$"),
            S = new RegExp("^hsla\\\\(" + [g, x, x, g] + "\\\\)$"), C = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };
        e.i(p.a)(r, i, {
            displayable: function () {
                return this.rgb().displayable()
            }, toString: function () {
                return this.rgb() + ""
            }
        }), e.i(p.a)(s, o, e.i(p.b)(r, {
            brighter: function (t) {
                return t = null == t ? b : Math.pow(b, t), new s(this.r * t, this.g * t, this.b * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? v : Math.pow(v, t), new s(this.r * t, this.g * t, this.b * t, this.opacity)
            }, rgb: function () {
                return this
            }, displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            }, toString: function () {
                var t = this.opacity;
                return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), e.i(p.a)(d, h, e.i(p.b)(r, {
            brighter: function (t) {
                return t = null == t ? b : Math.pow(b, t), new d(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? v : Math.pow(v, t), new d(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n, i = 2 * e - r;
                return new s(_(t >= 240 ? t - 240 : t + 120, i, r), _(t, i, r), _(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            }, displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }))
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n) e[r] = n[r];
            return e
        }

        n.b = r, n.a = function (t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
            var e, r = t.slice(0, e);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r, i) {
            var a = t * t, u = a * t;
            return ((1 - 3 * t + 3 * a - u) * n + (4 - 6 * a + 3 * u) * e + (1 + 3 * t + 3 * a - 3 * u) * r + u * i) / 6
        }

        n.b = r, n.a = function (t) {
            var n = t.length - 1;
            return function (e) {
                var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), a = t[i], u = t[i + 1],
                    c = i > 0 ? t[i - 1] : 2 * a - u, o = i < n - 1 ? t[i + 2] : 2 * u - a;
                return r((e - i / n) * n, c, a, u, o)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(4), i = e(72), a = e(67), u = e(70), c = e(20), o = e(71), s = e(73), f = e(69);
        n.a = function (t, n) {
            var l, h = typeof n;
            return null == n || "boolean" === h ? e.i(f.a)(n) : ("number" === h ? c.a : "string" === h ? (l = e.i(r.f)(n)) ? (n = l, i.a) : s.a : n instanceof r.f ? i.a : n instanceof Date ? u.a : Array.isArray(n) ? a.a : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? o.a : c.a)(t, n)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function () {
                var n = this.ownerDocument, e = this.namespaceURI;
                return e === u.b && n.documentElement.namespaceURI === u.b ? n.createElement(t) : n.createElementNS(e, t)
            }
        }

        function i(t) {
            return function () {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }

        var a = e(36), u = e(37);
        n.a = function (t) {
            var n = e.i(a.a)(t);
            return (n.local ? i : r)(n)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(37);
        n.a = function (t) {
            var n = t += "", e = n.indexOf(":");
            return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.a.hasOwnProperty(n) ? {
                space: r.a[n],
                local: t
            } : t
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return r
        });
        var r = "http://www.w3.org/1999/xhtml";
        n.a = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: r,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e = t.ownerSVGElement || t;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            return t = i(t, n, e), function (n) {
                var e = n.relatedTarget;
                e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
            }
        }

        function i(t, n, e) {
            return function (r) {
                var i = f;
                f = r;
                try {
                    t.call(this, this.__data__, n, e)
                } finally {
                    f = i
                }
            }
        }

        function a(t) {
            return t.trim().split(/^|\\s+/).map(function (t) {
                var n = "", e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
            })
        }

        function u(t) {
            return function () {
                var n = this.__on;
                if (n) {
                    for (var e, r = 0, i = -1, a = n.length; r < a; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++i ? n.length = i : delete this.__on
                }
            }
        }

        function c(t, n, e) {
            var a = s.hasOwnProperty(t.type) ? r : i;
            return function (r, i, u) {
                var c, o = this.__on, s = a(n, i, u);
                if (o) for (var f = 0, l = o.length; f < l; ++f) if ((c = o[f]).type === t.type && c.name === t.name) return this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = s, c.capture = e), void (c.value = n);
                this.addEventListener(t.type, s, e), c = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: s,
                    capture: e
                }, o ? o.push(c) : this.__on = [c]
            }
        }

        function o(t, n, e, r) {
            var i = f;
            t.sourceEvent = f, f = t;
            try {
                return n.apply(e, r)
            } finally {
                f = i
            }
        }

        e.d(n, "a", function () {
            return f
        }), n.b = o;
        var s = {}, f = null;
        if ("undefined" != typeof document) {
            "onmouseenter" in document.documentElement || (s = {mouseenter: "mouseover", mouseleave: "mouseout"})
        }
        n.c = function (t, n, e) {
            var r, i, o = a(t + ""), s = o.length;
            {
                if (!(arguments.length < 2)) {
                    for (f = n ? c : u, null == e && (e = !1), r = 0; r < s; ++r) this.each(f(o[r], n, e));
                    return this
                }
                var f = this.node().__on;
                if (f) for (var l, h = 0, d = f.length; h < d; ++h) for (r = 0, l = f[h]; r < s; ++r) if ((i = o[r]).type === l.type && i.name === l.name) return l.value
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
        }

        n.a = function (t) {
            return null == t ? r : function () {
                return this.querySelector(t)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(39);
        n.a = function () {
            for (var t, n = r.a; t = n.sourceEvent;) n = t;
            return n
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = t._x1, i = t._y1, u = t._x2, c = t._y2;
            if (t._l01_a > a.a) {
                var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, s = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, i = (i * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
            }
            if (t._l23_a > a.a) {
                var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                u = (u * f + t._x1 * t._l23_2a - n * t._l12_2a) / l, c = (c * f + t._y1 * t._l23_2a - e * t._l12_2a) / l
            }
            t._context.bezierCurveTo(r, i, u, c, t._x2, t._y2)
        }

        function i(t, n) {
            this._context = t, this._alpha = n
        }

        n.b = r;
        var a = e(16), u = e(24);
        i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        r(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, n.a = function t(n) {
            function e(t) {
                return n ? new i(t, n) : new u.b(t, 0)
            }

            return e.alpha = function (n) {
                return t(+n)
            }, e
        }(.5)
    }, function (t, n, e) {
        "use strict";
        var r = e(13), i = e(6), a = e(25), u = e(46);
        n.a = function () {
            function t(t) {
                var i, a, u, h = t.length, d = !1;
                for (null == s && (l = f(u = e.i(r.a)())), i = 0; i <= h; ++i) !(i < h && o(a = t[i], i, t)) === d && ((d = !d) ? l.lineStart() : l.lineEnd()), d && l.point(+n(a, i, t), +c(a, i, t));
                if (u) return l = null, u + "" || null
            }

            var n = u.a, c = u.b, o = e.i(i.a)(!0), s = null, f = a.a, l = null;
            return t.x = function (r) {
                return arguments.length ? (n = "function" == typeof r ? r : e.i(i.a)(+r), t) : n
            }, t.y = function (n) {
                return arguments.length ? (c = "function" == typeof n ? n : e.i(i.a)(+n), t) : c
            }, t.defined = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : e.i(i.a)(!!n), t) : o
            }, t.curve = function (n) {
                return arguments.length ? (f = n, null != s && (l = f(s)), t) : f
            }, t.context = function (n) {
                return arguments.length ? (null == n ? s = l = null : l = f(s = n), t) : s
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            for (var n, e = 0, r = -1, i = t.length; ++r < i;) (n = +t[r][1]) && (e += n);
            return e
        }

        n.b = r;
        var i = e(18);
        n.a = function (t) {
            var n = t.map(r);
            return e.i(i.a)(t).sort(function (t, e) {
                return n[t] - n[e]
            })
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t[0]
        }

        function i(t) {
            return t[1]
        }

        n.a = r, n.b = i
    }, function (t, n, e) {
        "use strict";
        e.d(n, "c", function () {
            return i
        }), e.d(n, "a", function () {
            return u
        }), e.d(n, "b", function () {
            return c
        });
        var r, i, a, u, c, o = e(99);
        !function (t) {
            r = e.i(o.a)(t), i = r.format, a = r.parse, u = r.utcFormat, c = r.utcParse
        }({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        })
    }, function (t, n, e) {
        "use strict";
        var r = (e(0), e(234));
        e.d(n, "t", function () {
            return r.a
        }), e.d(n, "h", function () {
            return r.a
        });
        var i = e(237);
        e.d(n, "s", function () {
            return i.a
        }), e.d(n, "g", function () {
            return i.a
        });
        var a = e(235);
        e.d(n, "r", function () {
            return a.a
        });
        var u = e(233);
        e.d(n, "q", function () {
            return u.a
        });
        var c = e(232);
        e.d(n, "i", function () {
            return c.a
        });
        var o = e(244);
        e.d(n, "p", function () {
            return o.a
        }), e.d(n, "k", function () {
            return o.a
        }), e.d(n, "l", function () {
            return o.b
        });
        var s = e(236);
        e.d(n, "o", function () {
            return s.a
        });
        var f = e(245);
        e.d(n, "j", function () {
            return f.a
        });
        var l = e(240);
        e.d(n, "f", function () {
            return l.a
        });
        var h = e(239);
        e.d(n, "e", function () {
            return h.a
        });
        var d = e(238);
        e.d(n, "d", function () {
            return d.a
        });
        var _ = e(242);
        e.d(n, "c", function () {
            return _.a
        }), e.d(n, "m", function () {
            return _.a
        }), e.d(n, "n", function () {
            return _.b
        });
        var p = e(241);
        e.d(n, "b", function () {
            return p.a
        });
        var v = e(243);
        e.d(n, "a", function () {
            return v.a
        })
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return i
        }), e.d(n, "a", function () {
            return a
        });
        var r = Array.prototype, i = r.slice, a = r.map
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return u
        }), e.d(n, "c", function () {
            return c
        });
        var r = e(8), i = e(51), a = e.i(i.a)(r.a), u = a.right, c = a.left;
        n.a = u
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function (n, r) {
                return e.i(i.a)(t(n), r)
            }
        }

        var i = e(8);
        n.a = function (t) {
            return 1 === t.length && (t = r(t)), {
                left: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var a = r + i >>> 1;
                        t(n[a], e) < 0 ? r = a + 1 : i = a
                    }
                    return r
                }, right: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                        var a = r + i >>> 1;
                        t(n[a], e) > 0 ? i = a : r = a + 1
                    }
                    return r
                }
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(60);
        n.a = function (t, n) {
            var i = e.i(r.a)(t, n);
            return i ? Math.sqrt(i) : i
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r, i, a = t.length, u = -1;
            if (null == n) {
                for (; ++u < a;) if (null != (e = t[u]) && e >= e) for (r = i = e; ++u < a;) null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
            } else for (; ++u < a;) if (null != (e = n(t[u], u, t)) && e >= e) for (r = i = e; ++u < a;) null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
            return [r, i]
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r, i = t.length, a = -1;
            if (null == n) {
                for (; ++a < i;) if (null != (e = t[a]) && e >= e) for (r = e; ++a < i;) null != (e = t[a]) && r > e && (r = e)
            } else for (; ++a < i;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = e; ++a < i;) null != (e = n(t[a], a, t)) && r > e && (r = e);
            return r
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return [t, n]
        }

        n.b = r, n.a = function (t, n) {
            null == n && (n = r);
            for (var e = 0, i = t.length - 1, a = t[0], u = new Array(i < 0 ? 0 : i); e < i;) u[e] = n(a, a = t[++e]);
            return u
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e) {
            t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
            for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;) a[r] = t + r * e;
            return a
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return Math.ceil(Math.log(t.length) / Math.LN2) + 1
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e) {
            var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
            return i >= 0 ? (o >= a ? 10 : o >= u ? 5 : o >= c ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= a ? 10 : o >= u ? 5 : o >= c ? 2 : 1)
        }

        function i(t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
            return o >= a ? i *= 10 : o >= u ? i *= 5 : o >= c && (i *= 2), n < t ? -i : i
        }

        n.b = r, n.c = i;
        var a = Math.sqrt(50), u = Math.sqrt(10), c = Math.sqrt(2);
        n.a = function (t, n, e) {
            var i, a, u, c = n < t, o = -1;
            if (c && (i = t, t = n, n = i), 0 === (u = r(t, n, e)) || !isFinite(u)) return [];
            if (u > 0) for (t = Math.ceil(t / u), n = Math.floor(n / u), a = new Array(i = Math.ceil(n - t + 1)); ++o < i;) a[o] = (t + o) * u; else for (t = Math.floor(t * u), n = Math.ceil(n * u), a = new Array(i = Math.ceil(t - n + 1)); ++o < i;) a[o] = (t - o) / u;
            return c && a.reverse(), a
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.length
        }

        var i = e(54);
        n.a = function (t) {
            if (!(c = t.length)) return [];
            for (var n = -1, a = e.i(i.a)(t, r), u = new Array(a); ++n < a;) for (var c, o = -1, s = u[n] = new Array(c); ++o < c;) s[o] = t[o][n];
            return u
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(11);
        n.a = function (t, n) {
            var i, a, u = t.length, c = 0, o = -1, s = 0, f = 0;
            if (null == n) for (; ++o < u;) isNaN(i = e.i(r.a)(t[o])) || (a = i - s, s += a / ++c, f += a * (i - s)); else for (; ++o < u;) isNaN(i = e.i(r.a)(n(t[o], o, t))) || (a = i - s, s += a / ++c, f += a * (i - s));
            if (c > 1) return f / (c - 1)
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return r
        }), e.d(n, "a", function () {
            return i
        });
        var r = Math.PI / 180, i = 180 / Math.PI
    }, function (t, n, e) {
        "use strict";
        var r = e(136);
        e.d(n, "f", function () {
            return r.a
        }), e.d(n, "c", function () {
            return r.b
        });
        var i = (e(66), e(64));
        e.d(n, "a", function () {
            return i.a
        });
        var a = e(142);
        e.d(n, "e", function () {
            return a.a
        });
        var u = e(143);
        e.d(n, "b", function () {
            return u.a
        });
        var c = e(144);
        e.d(n, "d", function () {
            return c.a
        })
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return r
        });
        var r, i = e(31);
        n.a = function (t, n) {
            var a = e.i(i.a)(t, n);
            if (!a) return t + "";
            var u = a[0], c = a[1], o = c - (r = 3 * Math.max(-8, Math.min(8, Math.floor(c / 3)))) + 1, s = u.length;
            return o === s ? u : o > s ? u + new Array(o - s + 1).join("0") : o > 0 ? u.slice(0, o) + "." + u.slice(o) : "0." + new Array(1 - o).join("0") + e.i(i.a)(t, Math.max(0, n + o - 1))[0]
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return new i(t)
        }

        function i(t) {
            if (!(n = u.exec(t))) throw new Error("invalid format: " + t);
            var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", c = n[4] || "", o = !!n[5], s = n[6] && +n[6],
                f = !!n[7], l = n[8] && +n[8].slice(1), h = n[9] || "";
            "n" === h ? (f = !0, h = "g") : a.a[h] || (h = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = c, this.zero = o, this.width = s, this.comma = f, this.precision = l, this.type = h
        }

        n.a = r;
        var a = e(65), u = /^(?:(.)?([<>=^]))?([+\\-\\( ])?([$#])?(0)?(\\d+)?(,)?(\\.\\d+)?([a-z%])?$/i;
        r.prototype = i.prototype, i.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(137), i = e(63), a = e(140);
        n.a = {
            "": r.a, "%": function (t, n) {
                return (100 * t).toFixed(n)
            }, b: function (t) {
                return Math.round(t).toString(2)
            }, c: function (t) {
                return t + ""
            }, d: function (t) {
                return Math.round(t).toString(10)
            }, e: function (t, n) {
                return t.toExponential(n)
            }, f: function (t, n) {
                return t.toFixed(n)
            }, g: function (t, n) {
                return t.toPrecision(n)
            }, o: function (t) {
                return Math.round(t).toString(8)
            }, p: function (t, n) {
                return e.i(a.a)(100 * t, n)
            }, r: a.a, s: i.a, X: function (t) {
                return Math.round(t).toString(16).toUpperCase()
            }, x: function (t) {
                return Math.round(t).toString(16)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(19), i = e(138), a = e(139), u = e(64), c = e(65), o = e(63), s = e(141),
            f = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        n.a = function (t) {
            function n(t) {
                function n(t) {
                    var n, e, u, c = m, s = M;
                    if ("c" === x) s = w(t) + s, t = ""; else {
                        t = +t;
                        var d = t < 0;
                        if (t = w(Math.abs(t), g), d && 0 == +t && (d = !1), c = (d ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + c, s = s + ("s" === x ? f[8 + o.b / 3] : "") + (d && "(" === a ? ")" : ""), T) for (n = -1, e = t.length; ++n < e;) if (48 > (u = t.charCodeAt(n)) || u > 57) {
                            s = (46 === u ? _ + t.slice(n + 1) : t.slice(n)) + s, t = t.slice(0, n);
                            break
                        }
                    }
                    y && !l && (t = h(t, 1 / 0));
                    var v = c.length + t.length + s.length, k = v < b ? new Array(b - v + 1).join(r) : "";
                    switch (y && l && (t = h(k + t, k.length ? b - s.length : 1 / 0), k = ""), i) {
                        case"<":
                            t = c + t + s + k;
                            break;
                        case"=":
                            t = c + k + t + s;
                            break;
                        case"^":
                            t = k.slice(0, v = k.length >> 1) + c + t + s + k.slice(v);
                            break;
                        default:
                            t = k + c + t + s
                    }
                    return p(t)
                }

                t = e.i(u.a)(t);
                var r = t.fill, i = t.align, a = t.sign, s = t.symbol, l = t.zero, b = t.width, y = t.comma,
                    g = t.precision, x = t.type,
                    m = "$" === s ? d[0] : "#" === s && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "",
                    M = "$" === s ? d[1] : /[%p]/.test(x) ? v : "", w = c.a[x], T = !x || /[defgprs%]/.test(x);
                return g = null == g ? x ? 6 : 12 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)), n.toString = function () {
                    return t + ""
                }, n
            }

            function l(t, i) {
                var a = n((t = e.i(u.a)(t), t.type = "f", t)),
                    c = 3 * Math.max(-8, Math.min(8, Math.floor(e.i(r.a)(i) / 3))), o = Math.pow(10, -c),
                    s = f[8 + c / 3];
                return function (t) {
                    return a(o * t) + s
                }
            }

            var h = t.grouping && t.thousands ? e.i(i.a)(t.grouping, t.thousands) : s.a, d = t.currency, _ = t.decimal,
                p = t.numerals ? e.i(a.a)(t.numerals) : s.a, v = t.percent || "%";
            return {format: n, formatPrefix: l}
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(33);
        n.a = function (t, n) {
            var i, a = n ? n.length : 0, u = t ? Math.min(a, t.length) : 0, c = new Array(a), o = new Array(a);
            for (i = 0; i < u; ++i) c[i] = e.i(r.a)(t[i], n[i]);
            for (; i < a; ++i) o[i] = n[i];
            return function (t) {
                for (i = 0; i < u; ++i) o[i] = c[i](t);
                return o
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(32);
        n.a = function (t) {
            var n = t.length;
            return function (i) {
                var a = Math.floor(((i %= 1) < 0 ? ++i : i) * n), u = t[(a + n - 1) % n], c = t[a % n],
                    o = t[(a + 1) % n], s = t[(a + 2) % n];
                return e.i(r.b)((i - a / n) * n, u, c, o, s)
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e = new Date;
            return t = +t, n -= t, function (r) {
                return e.setTime(t + n * r), e
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(33);
        n.a = function (t, n) {
            var i, a = {}, u = {};
            null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
            for (i in n) i in t ? a[i] = e.i(r.a)(t[i], n[i]) : u[i] = n[i];
            return function (t) {
                for (i in a) u[i] = a[i](t);
                return u
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function (n) {
                var r, a, u = n.length, c = new Array(u), o = new Array(u), s = new Array(u);
                for (r = 0; r < u; ++r) a = e.i(i.e)(n[r]), c[r] = a.r || 0, o[r] = a.g || 0, s[r] = a.b || 0;
                return c = t(c), o = t(o), s = t(s), a.opacity = 1, function (t) {
                    return a.r = c(t), a.g = o(t), a.b = s(t), a + ""
                }
            }
        }

        e.d(n, "b", function () {
            return o
        }), e.d(n, "c", function () {
            return s
        });
        var i = e(4), a = e(32), u = e(68), c = e(12);
        n.a = function t(n) {
            function r(t, n) {
                var r = a((t = e.i(i.e)(t)).r, (n = e.i(i.e)(n)).r), u = a(t.g, n.g), o = a(t.b, n.b),
                    s = e.i(c.a)(t.opacity, n.opacity);
                return function (n) {
                    return t.r = r(n), t.g = u(n), t.b = o(n), t.opacity = s(n), t + ""
                }
            }

            var a = e.i(c.c)(n);
            return r.gamma = t, r
        }(1);
        var o = r(a.a), s = r(u.a)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function () {
                return t
            }
        }

        function i(t) {
            return function (n) {
                return t(n) + ""
            }
        }

        var a = e(20), u = /[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g, c = new RegExp(u.source, "g");
        n.a = function (t, n) {
            var o, s, f, l = u.lastIndex = c.lastIndex = 0, h = -1, d = [], _ = [];
            for (t += "", n += ""; (o = u.exec(t)) && (s = c.exec(n));) (f = s.index) > l && (f = n.slice(l, f), d[h] ? d[h] += f : d[++h] = f), (o = o[0]) === (s = s[0]) ? d[h] ? d[h] += s : d[++h] = s : (d[++h] = null, _.push({
                i: h,
                x: e.i(a.a)(o, s)
            })), l = c.lastIndex;
            return l < n.length && (f = n.slice(l), d[h] ? d[h] += f : d[++h] = f), d.length < 2 ? _[0] ? i(_[0].x) : r(n) : (n = _.length, function (t) {
                for (var e, r = 0; r < n; ++r) d[(e = _[r]).i] = e.x(t);
                return d.join("")
            })
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            t = t.slice();
            var e, r = 0, i = t.length - 1, a = t[r], u = t[i];
            return u < a && (e = r, r = i, i = e, e = a, a = u, u = e), t[r] = n.floor(a), t[i] = n.ceil(u), t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return +t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n) {
                var e = n + "", r = c.get(e);
                if (!r) {
                    if (s !== u) return s;
                    c.set(e, r = o.push(n))
                }
                return t[(r - 1) % t.length]
            }

            var c = e.i(i.a)(), o = [], s = u;
            return t = null == t ? [] : a.b.call(t), n.domain = function (t) {
                if (!arguments.length) return o.slice();
                o = [], c = e.i(i.a)();
                for (var r, a, u = -1, s = t.length; ++u < s;) c.has(a = (r = t[u]) + "") || c.set(a, o.push(r));
                return n
            }, n.range = function (e) {
                return arguments.length ? (t = a.b.call(e), n) : t.slice()
            }, n.unknown = function (t) {
                return arguments.length ? (s = t, n) : s
            }, n.copy = function () {
                return r().domain(o).range(t).unknown(s)
            }, n
        }

        e.d(n, "b", function () {
            return u
        }), n.a = r;
        var i = e(128), a = e(5), u = {name: "implicit"}
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return new Date(t)
        }

        function i(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }

        function a(t, n, o, s, x, m, M, w, T) {
            function k(e) {
                return (M(e) < e ? E : m(e) < e ? P : x(e) < e ? D : s(e) < e ? U : n(e) < e ? o(e) < e ? O : q : t(e) < e ? L : Y)(e)
            }

            function N(n, r, i, a) {
                if (null == n && (n = 10), "number" == typeof n) {
                    var c = Math.abs(i - r) / n, o = e.i(u.bisector)(function (t) {
                        return t[2]
                    }).right(j, c);
                    o === j.length ? (a = e.i(u.tickStep)(r / g, i / g, n), n = t) : o ? (o = j[c / j[o - 1][2] < j[o][2] / c ? o - 1 : o], a = o[1], n = o[0]) : (a = e.i(u.tickStep)(r, i, n), n = w)
                }
                return null == a ? n : n.every(a)
            }

            var A = e.i(l.a)(l.b, c.interpolateNumber), S = A.invert, C = A.domain, E = T(".%L"), P = T(":%S"),
                D = T("%I:%M"), U = T("%I %p"), O = T("%a %d"), q = T("%b %d"), L = T("%B"), Y = T("%Y"),
                j = [[M, 1, d], [M, 5, 5 * d], [M, 15, 15 * d], [M, 30, 30 * d], [m, 1, _], [m, 5, 5 * _], [m, 15, 15 * _], [m, 30, 30 * _], [x, 1, p], [x, 3, 3 * p], [x, 6, 6 * p], [x, 12, 12 * p], [s, 1, v], [s, 2, 2 * v], [o, 1, b], [n, 1, y], [n, 3, 3 * y], [t, 1, g]];
            return A.invert = function (t) {
                return new Date(S(t))
            }, A.domain = function (t) {
                return arguments.length ? C(f.a.call(t, i)) : C().map(r)
            }, A.ticks = function (t, n) {
                var e, r = C(), i = r[0], a = r[r.length - 1], u = a < i;
                return u && (e = i, i = a, a = e), e = N(t, i, a, n), e = e ? e.range(i, a + 1) : [], u ? e.reverse() : e
            }, A.tickFormat = function (t, n) {
                return null == n ? k : T(n)
            }, A.nice = function (t, n) {
                var r = C();
                return (t = N(t, r[0], r[r.length - 1], n)) ? C(e.i(h.a)(r, t)) : A
            }, A.copy = function () {
                return e.i(l.c)(A, a(t, n, o, s, x, m, M, w, T))
            }, A
        }

        n.b = a;
        var u = e(2), c = e(9), o = e(48), s = e(97), f = e(5), l = e(21), h = e(74), d = 1e3, _ = 60 * d, p = 60 * _,
            v = 24 * p, b = 7 * v, y = 30 * v, g = 365 * v;
        n.a = function () {
            return a(o.j, o.o, o.p, o.i, o.q, o.r, o.s, o.t, s.b).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        }
    }, function (t, n, e) {
        "use strict";
        var r = function (t) {
            return function () {
                return this.matches(t)
            }
        };
        if ("undefined" != typeof document) {
            var i = document.documentElement;
            if (!i.matches) {
                var a = i.webkitMatchesSelector || i.msMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector;
                r = function (t) {
                    return function () {
                        return a.call(this, t)
                    }
                }
            }
        }
        n.a = r
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
        }

        n.b = r;
        var i = e(80), a = e(1);
        n.a = function () {
            return new a.b(this._enter || this._groups.map(i.a), this._parents)
        }, r.prototype = {
            constructor: r, appendChild: function (t) {
                return this._parent.insertBefore(t, this._next)
            }, insertBefore: function (t, n) {
                return this._parent.insertBefore(t, n)
            }, querySelector: function (t) {
                return this._parent.querySelector(t)
            }, querySelectorAll: function (t) {
                return this._parent.querySelectorAll(t)
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return new Array(t.length)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function () {
                this.style.removeProperty(t)
            }
        }

        function i(t, n, e) {
            return function () {
                this.style.setProperty(t, n, e)
            }
        }

        function a(t, n, e) {
            return function () {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }

        function u(t, n) {
            return t.style.getPropertyValue(n) || e.i(c.a)(t).getComputedStyle(t, null).getPropertyValue(n)
        }

        n.a = u;
        var c = e(42);
        n.b = function (t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? r : "function" == typeof n ? a : i)(t, n, null == e ? "" : e)) : u(this.node(), t)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            return []
        }

        n.a = function (t) {
            return null == t ? r : function () {
                return this.querySelectorAll(t)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(13), i = e(6), a = e(25), u = e(44), c = e(46);
        n.a = function () {
            function t(t) {
                var n, i, a, u, c, v = t.length, b = !1, y = new Array(v), g = new Array(v);
                for (null == d && (p = _(c = e.i(r.a)())), n = 0; n <= v; ++n) {
                    if (!(n < v && h(u = t[n], n, t)) === b) if (b = !b) i = n, p.areaStart(), p.lineStart(); else {
                        for (p.lineEnd(), p.lineStart(), a = n - 1; a >= i; --a) p.point(y[a], g[a]);
                        p.lineEnd(), p.areaEnd()
                    }
                    b && (y[n] = +o(u, n, t), g[n] = +f(u, n, t), p.point(s ? +s(u, n, t) : y[n], l ? +l(u, n, t) : g[n]))
                }
                if (c) return p = null, c + "" || null
            }

            function n() {
                return e.i(u.a)().defined(h).curve(_).context(d)
            }

            var o = c.a, s = null, f = e.i(i.a)(0), l = c.b, h = e.i(i.a)(!0), d = null, _ = a.a, p = null;
            return t.x = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : e.i(i.a)(+n), s = null, t) : o
            }, t.x0 = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : e.i(i.a)(+n), t) : o
            }, t.x1 = function (n) {
                return arguments.length ? (s = null == n ? null : "function" == typeof n ? n : e.i(i.a)(+n), t) : s
            }, t.y = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : e.i(i.a)(+n), l = null, t) : f
            }, t.y0 = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : e.i(i.a)(+n), t) : f
            }, t.y1 = function (n) {
                return arguments.length ? (l = null == n ? null : "function" == typeof n ? n : e.i(i.a)(+n), t) : l
            }, t.lineX0 = t.lineY0 = function () {
                return n().x(o).y(f)
            }, t.lineY1 = function () {
                return n().x(o).y(l)
            }, t.lineX1 = function () {
                return n().x(s).y(f)
            }, t.defined = function (n) {
                return arguments.length ? (h = "function" == typeof n ? n : e.i(i.a)(!!n), t) : h
            }, t.curve = function (n) {
                return arguments.length ? (_ = n, null != d && (p = _(d)), t) : _
            }, t.context = function (n) {
                return arguments.length ? (null == n ? d = p = null : p = _(d = n), t) : d
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return r
        });
        var r = Array.prototype.slice
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        n.b = r;
        var i = e(26), a = e(24);
        r.prototype = {
            areaStart: i.a, areaEnd: i.a, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        e.i(a.c)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, n.a = function t(n) {
            function e(t) {
                return new r(t, n)
            }

            return e.tension = function (n) {
                return t(+n)
            }, e
        }(0)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }

        n.b = r;
        var i = e(24);
        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        e.i(i.c)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, n.a = function t(n) {
            function e(t) {
                return new r(t, n)
            }

            return e.tension = function (n) {
                return t(+n)
            }, e
        }(0)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._curve = t
        }

        function i(t) {
            function n(n) {
                return new r(t(n))
            }

            return n._curve = t, n
        }

        e.d(n, "b", function () {
            return u
        }), n.a = i;
        var a = e(25), u = i(a.a);
        r.prototype = {
            areaStart: function () {
                this._curve.areaStart()
            }, areaEnd: function () {
                this._curve.areaEnd()
            }, lineStart: function () {
                this._curve.lineStart()
            }, lineEnd: function () {
                this._curve.lineEnd()
            }, point: function (t, n) {
                this._curve.point(n * Math.sin(t), n * -Math.cos(t))
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = t.curve;
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
                return arguments.length ? n(e.i(i.a)(t)) : n()._curve
            }, t
        }

        n.b = r;
        var i = e(87), a = e(44);
        n.a = function () {
            return r(e.i(a.a)().curve(i.b))
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(16);
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / r.b);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, r.c)
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = Math.sqrt(1 / 3), i = 2 * r;
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / i), a = e * r;
                t.moveTo(0, -e), t.lineTo(a, 0), t.lineTo(0, e), t.lineTo(-a, 0), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n), r = -e / 2;
                t.rect(r, r, e, e)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(16), i = Math.sin(r.b / 10) / Math.sin(7 * r.b / 10), a = Math.sin(r.c / 10) * i,
            u = -Math.cos(r.c / 10) * i;
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(.8908130915292852 * n), i = a * e, c = u * e;
                t.moveTo(0, -e), t.lineTo(i, c);
                for (var o = 1; o < 5; ++o) {
                    var s = r.c * o / 5, f = Math.cos(s), l = Math.sin(s);
                    t.lineTo(l * e, -f * e), t.lineTo(f * i - l * c, l * i + f * c)
                }
                t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = Math.sqrt(3);
        n.a = {
            draw: function (t, n) {
                var e = -Math.sqrt(n / (3 * r));
                t.moveTo(0, 2 * e), t.lineTo(-r * e, -e), t.lineTo(r * e, -e), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = -.5, i = Math.sqrt(3) / 2, a = 1 / Math.sqrt(12), u = 3 * (a / 2 + 1);
        n.a = {
            draw: function (t, n) {
                var e = Math.sqrt(n / u), c = e / 2, o = e * a, s = c, f = e * a + e, l = -s, h = f;
                t.moveTo(c, o), t.lineTo(s, f), t.lineTo(l, h), t.lineTo(r * c - i * o, i * c + r * o), t.lineTo(r * s - i * f, i * s + r * f), t.lineTo(r * l - i * h, i * l + r * h), t.lineTo(r * c + i * o, r * o - i * c), t.lineTo(r * s + i * f, r * f - i * s), t.lineTo(r * l + i * h, r * h - i * l), t.closePath()
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(47);
        e.d(n, "b", function () {
            return r.c
        }), e.d(n, "a", function () {
            return r.a
        });
        e(99), e(98), e(231)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.toISOString()
        }

        e.d(n, "a", function () {
            return a
        });
        var i = e(47), a = "%Y-%m-%dT%H:%M:%S.%LZ";
        Date.prototype.toISOString || e.i(i.a)(a)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return n.setFullYear(t.y), n
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }

        function i(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return n.setUTCFullYear(t.y), n
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }

        function a(t) {
            return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
        }

        function u(t) {
            function n(t, n) {
                return function (e) {
                    var r, i, a, u = [], c = -1, o = 0, s = t.length;
                    for (e instanceof Date || (e = new Date(+e)); ++c < s;) 37 === t.charCodeAt(c) && (u.push(t.slice(o, c)), null != (i = nt[r = t.charAt(++c)]) ? r = t.charAt(++c) : i = "e" === r ? " " : "0", (a = n[r]) && (r = a(e, i)), u.push(r), o = c + 1);
                    return u.push(t.slice(o, c)), u.join("")
                }
            }

            function e(t, n) {
                return function (e) {
                    var r = a(1900);
                    if (u(r, t, e += "", 0) != e.length) return null;
                    if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "W" in r || "U" in r) {
                        "w" in r || (r.w = "W" in r ? 1 : 0);
                        var c = "Z" in r ? i(a(r.y)).getUTCDay() : n(a(r.y)).getDay();
                        r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (c + 5) % 7 : r.w + 7 * r.U - (c + 6) % 7
                    }
                    return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, i(r)) : n(r)
                }
            }

            function u(t, n, e, r) {
                for (var i, a, u = 0, c = n.length, o = e.length; u < c;) {
                    if (r >= o) return -1;
                    if (37 === (i = n.charCodeAt(u++))) {
                        if (i = n.charAt(u++), !(a = Yt[i in nt ? n.charAt(u++) : i]) || (r = a(t, e, r)) < 0) return -1
                    } else if (i != e.charCodeAt(r++)) return -1
                }
                return r
            }

            function c(t, n, e) {
                var r = kt.exec(n.slice(e));
                return r ? (t.p = Nt[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function o(t, n, e) {
                var r = Ct.exec(n.slice(e));
                return r ? (t.w = Et[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function tt(t, n, e) {
                var r = At.exec(n.slice(e));
                return r ? (t.w = St[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function et(t, n, e) {
                var r = Ut.exec(n.slice(e));
                return r ? (t.m = Ot[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function rt(t, n, e) {
                var r = Pt.exec(n.slice(e));
                return r ? (t.m = Dt[r[0].toLowerCase()], e + r[0].length) : -1
            }

            function it(t, n, e) {
                return u(t, bt, n, e)
            }

            function at(t, n, e) {
                return u(t, yt, n, e)
            }

            function ut(t, n, e) {
                return u(t, gt, n, e)
            }

            function ct(t) {
                return Mt[t.getDay()]
            }

            function ot(t) {
                return mt[t.getDay()]
            }

            function st(t) {
                return Tt[t.getMonth()]
            }

            function ft(t) {
                return wt[t.getMonth()]
            }

            function lt(t) {
                return xt[+(t.getHours() >= 12)]
            }

            function ht(t) {
                return Mt[t.getUTCDay()]
            }

            function dt(t) {
                return mt[t.getUTCDay()]
            }

            function _t(t) {
                return Tt[t.getUTCMonth()]
            }

            function pt(t) {
                return wt[t.getUTCMonth()]
            }

            function vt(t) {
                return xt[+(t.getUTCHours() >= 12)]
            }

            var bt = t.dateTime, yt = t.date, gt = t.time, xt = t.periods, mt = t.days, Mt = t.shortDays, wt = t.months,
                Tt = t.shortMonths, kt = s(xt), Nt = f(xt), At = s(mt), St = f(mt), Ct = s(Mt), Et = f(Mt),
                Pt = s(wt), Dt = f(wt), Ut = s(Tt), Ot = f(Tt), qt = {
                    a: ct,
                    A: ot,
                    b: st,
                    B: ft,
                    c: null,
                    d: k,
                    e: k,
                    H: N,
                    I: A,
                    j: S,
                    L: C,
                    m: E,
                    M: P,
                    p: lt,
                    S: D,
                    U: U,
                    w: O,
                    W: q,
                    x: null,
                    X: null,
                    y: L,
                    Y: Y,
                    Z: j,
                    "%": K
                }, Lt = {
                    a: ht,
                    A: dt,
                    b: _t,
                    B: pt,
                    c: null,
                    d: F,
                    e: F,
                    H: z,
                    I: R,
                    j: H,
                    L: I,
                    m: X,
                    M: B,
                    p: vt,
                    S: $,
                    U: Z,
                    w: V,
                    W: W,
                    x: null,
                    X: null,
                    y: J,
                    Y: G,
                    Z: Q,
                    "%": K
                }, Yt = {
                    a: o,
                    A: tt,
                    b: et,
                    B: rt,
                    c: it,
                    d: y,
                    e: y,
                    H: x,
                    I: x,
                    j: g,
                    L: w,
                    m: b,
                    M: m,
                    p: c,
                    S: M,
                    U: h,
                    w: l,
                    W: d,
                    x: at,
                    X: ut,
                    y: p,
                    Y: _,
                    Z: v,
                    "%": T
                };
            return qt.x = n(yt, qt), qt.X = n(gt, qt), qt.c = n(bt, qt), Lt.x = n(yt, Lt), Lt.X = n(gt, Lt), Lt.c = n(bt, Lt), {
                format: function (t) {
                    var e = n(t += "", qt);
                    return e.toString = function () {
                        return t
                    }, e
                }, parse: function (t) {
                    var n = e(t += "", r);
                    return n.toString = function () {
                        return t
                    }, n
                }, utcFormat: function (t) {
                    var e = n(t += "", Lt);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcParse: function (t) {
                    var n = e(t, i);
                    return n.toString = function () {
                        return t
                    }, n
                }
            }
        }

        function c(t, n, e) {
            var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
            return r + (a < e ? new Array(e - a + 1).join(n) + i : i)
        }

        function o(t) {
            return t.replace(it, "\\\\$&")
        }

        function s(t) {
            return new RegExp("^(?:" + t.map(o).join("|") + ")", "i")
        }

        function f(t) {
            for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
            return n
        }

        function l(t, n, e) {
            var r = et.exec(n.slice(e, e + 1));
            return r ? (t.w = +r[0], e + r[0].length) : -1
        }

        function h(t, n, e) {
            var r = et.exec(n.slice(e));
            return r ? (t.U = +r[0], e + r[0].length) : -1
        }

        function d(t, n, e) {
            var r = et.exec(n.slice(e));
            return r ? (t.W = +r[0], e + r[0].length) : -1
        }

        function _(t, n, e) {
            var r = et.exec(n.slice(e, e + 4));
            return r ? (t.y = +r[0], e + r[0].length) : -1
        }

        function p(t, n, e) {
            var r = et.exec(n.slice(e, e + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
        }

        function v(t, n, e) {
            var r = /^(Z)|([+-]\\d\\d)(?:\\:?(\\d\\d))?/.exec(n.slice(e, e + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
        }

        function b(t, n, e) {
            var r = et.exec(n.slice(e, e + 2));
            return r ? (t.m = r[0] - 1, e + r[0].length) : -1
        }

        function y(t, n, e) {
            var r = et.exec(n.slice(e, e + 2));
            return r ? (t.d = +r[0], e + r[0].length) : -1
        }

        function g(t, n, e) {
            var r = et.exec(n.slice(e, e + 3));
            return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
        }

        function x(t, n, e) {
            var r = et.exec(n.slice(e, e + 2));
            return r ? (t.H = +r[0], e + r[0].length) : -1
        }

        function m(t, n, e) {
            var r = et.exec(n.slice(e, e + 2));
            return r ? (t.M = +r[0], e + r[0].length) : -1
        }

        function M(t, n, e) {
            var r = et.exec(n.slice(e, e + 2));
            return r ? (t.S = +r[0], e + r[0].length) : -1
        }

        function w(t, n, e) {
            var r = et.exec(n.slice(e, e + 3));
            return r ? (t.L = +r[0], e + r[0].length) : -1
        }

        function T(t, n, e) {
            var r = rt.exec(n.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function k(t, n) {
            return c(t.getDate(), n, 2)
        }

        function N(t, n) {
            return c(t.getHours(), n, 2)
        }

        function A(t, n) {
            return c(t.getHours() % 12 || 12, n, 2)
        }

        function S(t, n) {
            return c(1 + tt.i.count(e.i(tt.j)(t), t), n, 3)
        }

        function C(t, n) {
            return c(t.getMilliseconds(), n, 3)
        }

        function E(t, n) {
            return c(t.getMonth() + 1, n, 2)
        }

        function P(t, n) {
            return c(t.getMinutes(), n, 2)
        }

        function D(t, n) {
            return c(t.getSeconds(), n, 2)
        }

        function U(t, n) {
            return c(tt.k.count(e.i(tt.j)(t), t), n, 2)
        }

        function O(t) {
            return t.getDay()
        }

        function q(t, n) {
            return c(tt.l.count(e.i(tt.j)(t), t), n, 2)
        }

        function L(t, n) {
            return c(t.getFullYear() % 100, n, 2)
        }

        function Y(t, n) {
            return c(t.getFullYear() % 1e4, n, 4)
        }

        function j(t) {
            var n = t.getTimezoneOffset();
            return (n > 0 ? "-" : (n *= -1, "+")) + c(n / 60 | 0, "0", 2) + c(n % 60, "0", 2)
        }

        function F(t, n) {
            return c(t.getUTCDate(), n, 2)
        }

        function z(t, n) {
            return c(t.getUTCHours(), n, 2)
        }

        function R(t, n) {
            return c(t.getUTCHours() % 12 || 12, n, 2)
        }

        function H(t, n) {
            return c(1 + tt.d.count(e.i(tt.a)(t), t), n, 3)
        }

        function I(t, n) {
            return c(t.getUTCMilliseconds(), n, 3)
        }

        function X(t, n) {
            return c(t.getUTCMonth() + 1, n, 2)
        }

        function B(t, n) {
            return c(t.getUTCMinutes(), n, 2)
        }

        function $(t, n) {
            return c(t.getUTCSeconds(), n, 2)
        }

        function Z(t, n) {
            return c(tt.m.count(e.i(tt.a)(t), t), n, 2)
        }

        function V(t) {
            return t.getUTCDay()
        }

        function W(t, n) {
            return c(tt.n.count(e.i(tt.a)(t), t), n, 2)
        }

        function J(t, n) {
            return c(t.getUTCFullYear() % 100, n, 2)
        }

        function G(t, n) {
            return c(t.getUTCFullYear() % 1e4, n, 4)
        }

        function Q() {
            return "+0000"
        }

        function K() {
            return "%"
        }

        n.a = u;
        var tt = e(48), nt = {"-": "", _: " ", 0: "0"}, et = /^\\s*\\d+/, rt = /^%/,
            it = /[\\\\\\^\\$\\*\\+\\?\\|\\[\\]\\(\\)\\.\\{\\}]/g
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.graphics = void 0;
        var r = e(22);
        n.graphics = function (t, n) {
            var e = t.size;
            return (0, r.select)(n).append("svg").attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + ", " + e / 2 + ")")
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.data = void 0;
        var r = e(105), i = e(106);
        n.data = function (t, n, e) {
            var a = n.append("g").attr("class", "data");
            (0, i.shape)(a, t, {colour: "#ccc", opacity: .3}, e.map(function (t) {
                return t.target
            })), (0, i.shape)(a, t, {colour: (0, r.colourize)(e), hover: !0, opacity: .45}, e.map(function (t) {
                return t.actual
            }));
            return n
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.overlay = void 0;
        var r = (e(22), e(7), e(107));
        n.overlay = function (t, n, e) {
            var i = n.append("g").attr("class", "overlay");
            (0, r.markers)(t, e, i);
            return n
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.surface = void 0;
        var r = e(108), i = e(109), a = e(110);
        n.surface = function (t, n, e) {
            var u = n.append("g").attr("class", "surface");
            (0, a.scale)(t, u), (0, r.axes)(t, e, u), (0, i.markers)(t, e, u);
            return u
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(156);
        e.d(n, "scaleBand", function () {
            return r.a
        }), e.d(n, "scalePoint", function () {
            return r.b
        });
        var i = e(162);
        e.d(n, "scaleIdentity", function () {
            return i.a
        });
        var a = e(15);
        e.d(n, "scaleLinear", function () {
            return a.a
        });
        var u = e(163);
        e.d(n, "scaleLog", function () {
            return u.a
        });
        var c = e(76);
        e.d(n, "scaleOrdinal", function () {
            return c.a
        }), e.d(n, "scaleImplicit", function () {
            return c.b
        });
        var o = e(164);
        e.d(n, "scalePow", function () {
            return o.a
        }), e.d(n, "scaleSqrt", function () {
            return o.b
        });
        var s = e(165);
        e.d(n, "scaleQuantile", function () {
            return s.a
        });
        var f = e(166);
        e.d(n, "scaleQuantize", function () {
            return f.a
        });
        var l = e(169);
        e.d(n, "scaleThreshold", function () {
            return l.a
        });
        var h = e(77);
        e.d(n, "scaleTime", function () {
            return h.a
        });
        var d = e(171);
        e.d(n, "scaleUtc", function () {
            return d.a
        });
        var _ = e(157);
        e.d(n, "schemeCategory10", function () {
            return _.a
        });
        var p = e(159);
        e.d(n, "schemeCategory20b", function () {
            return p.a
        });
        var v = e(160);
        e.d(n, "schemeCategory20c", function () {
            return v.a
        });
        var b = e(158);
        e.d(n, "schemeCategory20", function () {
            return b.a
        });
        var y = e(161);
        e.d(n, "interpolateCubehelixDefault", function () {
            return y.a
        });
        var g = e(167);
        e.d(n, "interpolateRainbow", function () {
            return g.a
        }), e.d(n, "interpolateWarm", function () {
            return g.b
        }), e.d(n, "interpolateCool", function () {
            return g.c
        });
        var x = e(172);
        e.d(n, "interpolateViridis", function () {
            return x.a
        }), e.d(n, "interpolateMagma", function () {
            return x.b
        }), e.d(n, "interpolateInferno", function () {
            return x.c
        }), e.d(n, "interpolatePlasma", function () {
            return x.d
        });
        var m = e(168);
        e.d(n, "scaleSequential", function () {
            return m.a
        })
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.colourize = void 0;
        var r = e(9), i = e(10), a = (0, r.interpolateRgbBasis)(["#c00", "#f90", "#ff0", "#0f0"]);
        n.colourize = function (t) {
            var n = t.map(function (t) {
                return t.target
            }).reduce(function (t, n) {
                return t + n
            }, 0), e = t.map(function (t) {
                return (0, i.max)([0, t.target - t.actual])
            }).reduce(function (t, n) {
                return t - n
            }, n);
            return a(e / n)
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.shape = void 0;
        var r = e(22), i = e(206), a = e(7), u = function (t) {
            return t.append("g").attr("class", "shape")
        }, c = function (t, n) {
            var e = t.arc, r = t.scale;
            return (0, i.lineRadial)(n).curve(i.curveLinearClosed).radius(function (t) {
                return r(t)
            }).angle(function (t, n) {
                return n * e
            })
        }, o = function (t, n, e, i) {
            var a = e.colour, u = e.hover, c = e.opacity,
                o = t.append("path").attr("class", "path").attr("d", function () {
                    return n(i)
                }).style("fill", a).style("fill-opacity", c).style("stroke", a).style("stroke-opacity", 2 * c).style("stroke-width", 1);
            return u ? o.on("mouseover", function (t, n, e) {
                return (0, r.select)(e[n]).style("fill-opacity", 1.4 * c)
            }).on("mouseout", function (t, n, e) {
                return (0, r.select)(e[n]).style("fill-opacity", c)
            }) : o
        }, s = function (t, n, e, r) {
            var i = n.arc, u = n.scale, c = e.colour, o = e.opacity;
            return t.selectAll(".markers").data(r).enter().append("circle").attr("r", 4).attr("cx", function (t, n) {
                return (0, a.cartesian)(i, n, u(t)).x()
            }).attr("cy", function (t, n) {
                return (0, a.cartesian)(i, n, u(t)).y()
            }).style("fill", c).style("fill-opacity", 2 * o)
        };
        n.shape = function (t, n, e, r) {
            var i = u(t), a = c(n, r);
            o(i, a, e, r), s(i, n, e, r);
            return t
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.markers = void 0;
        var r = e(22), i = e(7), a = function (t, n) {
            return n.selectAll(".overlay").data(t.map(function (t) {
                return t.range
            })).enter().append("g").attr("class", "axis")
        }, u = function (t, n) {
            var e = n.arc, a = n.scale;
            return t.selectAll(".axis").data(function (t, n) {
                return t.map(function (t) {
                    return {axis: n, value: t}
                })
            }).enter().append("circle").attr("r", 8).attr("cx", function (t, n) {
                return (0, i.cartesian)(e, t.axis, a(n)).x()
            }).attr("cy", function (t, n) {
                return (0, i.cartesian)(e, t.axis, a(n)).y()
            }).style("fill", "#fff").style("fill-opacity", 0).on("mouseover", function (t, n, e) {
                return (0, r.select)(e[n]).style("fill-opacity", .3)
            }).on("mouseout", function (t, n, e) {
                return (0, r.select)(e[n]).style("fill-opacity", 0)
            }).append("svg:title").text(function (t) {
                return t.value
            })
        };
        n.markers = function (t, n, e) {
            var r = a(n, e);
            u(r, t);
            return e
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.axes = void 0;
        var r = e(7), i = e(10), a = function (t, n) {
            return n.append("g").attr("class", "axes").selectAll(".surface").data(t.map(function (t) {
                return t.name
            })).enter().append("g").attr("class", "axis")
        }, u = function (t, n) {
            var e = n.arc, a = n.range, u = n.scale;
            return t.append("line").attr("x1", 0).attr("y1", 0).attr("x2", function (t, n) {
                return (0, r.cartesian)(e, n, u((0, i.max)(a))).x()
            }).attr("y2", function (t, n) {
                return (0, r.cartesian)(e, n, u((0, i.max)(a))).y()
            }).attr("class", "line").style("stroke", "#fff").style("stroke-width", 1)
        }, c = function (t, n) {
            var e = n.arc, a = n.range, u = n.scale;
            return t.append("text").attr("text-anchor", "middle").attr("x", function (t, n) {
                return (0, r.cartesian)(e, n, 1.25 * u((0, i.max)(a))).x()
            }).attr("y", function (t, n) {
                return (0, r.cartesian)(e, n, 1.25 * u((0, i.max)(a))).y()
            }).style("fill", "#999").style("font-family", "sans-serif").style("font-size", "11px").text(function (t) {
                return t
            })
        };
        n.axes = function (t, n, e) {
            var r = a(n, e);
            u(r, t), c(r, t);
            return e
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.markers = void 0;
        var r = e(7), i = function (t, n) {
            return n.append("g").attr("class", "markers").selectAll(".markers").data(t.map(function (t) {
                return t.range
            })).enter().append("g").attr("class", "axis")
        }, a = function (t, n) {
            var e = n.arc, i = n.scale;
            return t.selectAll(".axis").data(function (t, n) {
                return t.map(function (t) {
                    return n
                })
            }).enter().append("circle").attr("r", 5).attr("cx", function (t, n) {
                return (0, r.cartesian)(e, t, i(n)).x()
            }).attr("cy", function (t, n) {
                return (0, r.cartesian)(e, t, i(n)).y()
            }).style("fill", "#fff")
        };
        n.markers = function (t, n, e) {
            var r = i(n, e);
            a(r, t);
            return e
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.scale = void 0;
        var r = e(7), i = (e(10), function (t, n) {
            var e = t.range;
            return n.append("g").attr("class", "circles").selectAll(".surface").data(e).enter().append("g").attr("class", "circle")
        }), a = function (t, n) {
            var e = n.radius, i = n.range;
            return t.append("circle").attr("r", function (t, n) {
                return (0, r.orbital)(n, e, i)
            }).style("fill", "#ccc").style("fill-opacity", .25).style("stroke", "#fff").style("stroke-width", 1)
        }, u = function (t, n) {
            var e = n.radius, i = n.range;
            return t.append("text").attr("x", 7).attr("y", function (t, n) {
                return -1 * (0, r.orbital)(n, e, i)
            }).attr("dy", 5).style("fill", "#999").style("font-family", "sans-serif").style("font-size", "11px").text(function (t) {
                return t
            })
        };
        n.scale = function (t, n) {
            var e = i(t, n);
            return {circles: a(e, t), labels: u(e, t)}
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.show = n.dimensions = void 0;
        var r = e(2), i = e(104), a = e(10), u = e(100), c = e(101), o = e(102), s = e(103),
            f = n.dimensions = function (t, n) {
                var e = n / 3, u = (0, r.range)(0, (0, a.max)(t.map(function (t) {
                    return t.range.length
                }))).reverse();
                return {
                    arc: 2 * Math.PI / (u.length + 1),
                    radius: e,
                    range: u,
                    scale: (0, i.scaleLinear)().range([e / u.length, e]).domain([0, (0, a.max)(u)]),
                    size: n
                }
            };
        n.show = function (t, n) {
            var e = (n.curve, n.metrics), r = n.size, i = f(e, r), a = (0, u.graphics)(i, t);
            (0, s.surface)(i, a, e), (0, c.data)(i, a, e), (0, o.overlay)(i, a, e);
            return a
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(55);
        n.a = function (t, n, e) {
            var i, a, u, c, o = t.length, s = n.length, f = new Array(o * s);
            for (null == e && (e = r.b), i = u = 0; i < o; ++i) for (c = t[i], a = 0; a < s; ++a, ++u) f[u] = e(c, n[a]);
            return f
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(49), i = e(50), a = e(112), u = e(53), c = e(116), o = e(56), s = e(58), f = e(57);
        n.a = function () {
            function t(t) {
                var r, a, u = t.length, c = new Array(u);
                for (r = 0; r < u; ++r) c[r] = n(t[r], r, t);
                var f = l(c), d = f[0], _ = f[1], p = h(c, d, _);
                Array.isArray(p) || (p = e.i(s.c)(d, _, p), p = e.i(o.a)(Math.ceil(d / p) * p, Math.floor(_ / p) * p, p));
                for (var v = p.length; p[0] <= d;) p.shift(), --v;
                for (; p[v - 1] > _;) p.pop(), --v;
                var b, y = new Array(v + 1);
                for (r = 0; r <= v; ++r) b = y[r] = [], b.x0 = r > 0 ? p[r - 1] : d, b.x1 = r < v ? p[r] : _;
                for (r = 0; r < u; ++r) a = c[r], d <= a && a <= _ && y[e.i(i.a)(p, a, 0, v)].push(t[r]);
                return y
            }

            var n = c.a, l = u.a, h = f.a;
            return t.value = function (r) {
                return arguments.length ? (n = "function" == typeof r ? r : e.i(a.a)(r), t) : n
            }, t.domain = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : e.i(a.a)([n[0], n[1]]), t) : l
            }, t.thresholds = function (n) {
                return arguments.length ? (h = "function" == typeof n ? n : Array.isArray(n) ? e.i(a.a)(r.b.call(n)) : e.i(a.a)(n), t) : h
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r, i = t.length, a = -1;
            if (null == n) {
                for (; ++a < i;) if (null != (e = t[a]) && e >= e) for (r = e; ++a < i;) null != (e = t[a]) && e > r && (r = e)
            } else for (; ++a < i;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = e; ++a < i;) null != (e = n(t[a], a, t)) && e > r && (r = e);
            return r
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(11);
        n.a = function (t, n) {
            var i, a = t.length, u = a, c = -1, o = 0;
            if (null == n) for (; ++c < a;) isNaN(i = e.i(r.a)(t[c])) ? --u : o += i; else for (; ++c < a;) isNaN(i = e.i(r.a)(n(t[c], c, t))) ? --u : o += i;
            if (u) return o / u
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8), i = e(11), a = e(27);
        n.a = function (t, n) {
            var u, c = t.length, o = -1, s = [];
            if (null == n) for (; ++o < c;) isNaN(u = e.i(i.a)(t[o])) || s.push(u); else for (; ++o < c;) isNaN(u = e.i(i.a)(n(t[o], o, t))) || s.push(u);
            return e.i(a.a)(s.sort(r.a), .5)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n, e, r, i = t.length, a = -1, u = 0; ++a < i;) u += t[a].length;
            for (e = new Array(u); --i >= 0;) for (r = t[i], n = r.length; --n >= 0;) e[--u] = r[n];
            return e
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
            return r
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(8);
        n.a = function (t, n) {
            if (e = t.length) {
                var e, i, a = 0, u = 0, c = t[u];
                for (null == n && (n = r.a); ++a < e;) (n(i = t[a], c) < 0 || 0 !== n(c, c)) && (c = i, u = a);
                return 0 === n(c, c) ? u : void 0
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n, e) {
            for (var r, i, a = (null == e ? t.length : e) - (n = null == n ? 0 : +n); a;) i = Math.random() * a-- | 0, r = t[a + n], t[a + n] = t[i + n], t[i + n] = r;
            return t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            var e, r = t.length, i = -1, a = 0;
            if (null == n) for (; ++i < r;) (e = +t[i]) && (a += e); else for (; ++i < r;) (e = +n(t[i], i, t)) && (a += e);
            return a
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(49), i = e(8), a = e(11), u = e(27);
        n.a = function (t, n, c) {
            return t = r.a.call(t, a.a).sort(i.a), Math.ceil((c - n) / (2 * (e.i(u.a)(t, .75) - e.i(u.a)(t, .25)) * Math.pow(t.length, -1 / 3)))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(52);
        n.a = function (t, n, i) {
            return Math.ceil((i - n) / (3.5 * e.i(r.a)(t) * Math.pow(t.length, -1 / 3)))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(59);
        n.a = function () {
            return e.i(r.a)(arguments)
        }
    }, function (t, n, e) {
        "use strict";
        var r = (e(131), e(132), e(28));
        e.d(n, "a", function () {
            return r.a
        });
        e(130), e(133), e(129)
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict";
        e(28)
    }, function (t, n, e) {
        "use strict";

        function r() {
        }

        function i(t, n) {
            var e = new r;
            if (t instanceof r) t.each(function (t) {
                e.add(t)
            }); else if (t) {
                var i = -1, a = t.length;
                if (null == n) for (; ++i < a;) e.add(t[i]); else for (; ++i < a;) e.add(n(t[i], i, t))
            }
            return e
        }

        var a = e(28), u = a.a.prototype;
        r.prototype = i.prototype = {
            constructor: r, has: u.has, add: function (t) {
                return t += "", this[a.b + t] = t, this
            }, remove: u.remove, clear: u.clear, values: u.keys, size: u.size, empty: u.empty, each: u.each
        }
    }, function (t, n, e) {
        "use strict"
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            if (t instanceof a) return new a(t.h, t.s, t.l, t.opacity);
            t instanceof c.a || (t = e.i(c.b)(t));
            var n = t.r / 255, r = t.g / 255, i = t.b / 255, u = (v * i + _ * n - p * r) / (v + _ - p), s = i - u,
                f = (d * (r - u) - l * s) / h, b = Math.sqrt(f * f + s * s) / (d * u * (1 - u)),
                y = b ? Math.atan2(f, s) * o.a - 120 : NaN;
            return new a(y < 0 ? y + 360 : y, b, u, t.opacity)
        }

        function i(t, n, e, i) {
            return 1 === arguments.length ? r(t) : new a(t, n, e, null == i ? 1 : i)
        }

        function a(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        n.a = i;
        var u = e(30), c = e(29), o = e(61), s = -.14861, f = 1.78277, l = -.29227, h = -.90649, d = 1.97294,
            _ = d * h, p = d * f, v = f * l - h * s;
        e.i(u.a)(a, i, e.i(u.b)(c.c, {
            brighter: function (t) {
                return t = null == t ? c.d : Math.pow(c.d, t), new a(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? c.e : Math.pow(c.e, t), new a(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * o.b, n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
                return new c.a(255 * (n + e * (s * r + f * i)), 255 * (n + e * (l * r + h * i)), 255 * (n + e * (d * r)), this.opacity)
            }
        }))
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            if (t instanceof a) return new a(t.l, t.a, t.b, t.opacity);
            if (t instanceof h) {
                var n = t.h * p.b;
                return new a(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }
            t instanceof _.a || (t = e.i(_.b)(t));
            var r = s(t.r), i = s(t.g), c = s(t.b), o = u((.4124564 * r + .3575761 * i + .1804375 * c) / v),
                f = u((.2126729 * r + .7151522 * i + .072175 * c) / b);
            return new a(116 * f - 16, 500 * (o - f), 200 * (f - u((.0193339 * r + .119192 * i + .9503041 * c) / y)), t.opacity)
        }

        function i(t, n, e, i) {
            return 1 === arguments.length ? r(t) : new a(t, n, e, null == i ? 1 : i)
        }

        function a(t, n, e, r) {
            this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
        }

        function u(t) {
            return t > M ? Math.pow(t, 1 / 3) : t / m + g
        }

        function c(t) {
            return t > x ? t * t * t : m * (t - g)
        }

        function o(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function s(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function f(t) {
            if (t instanceof h) return new h(t.h, t.c, t.l, t.opacity);
            t instanceof a || (t = r(t));
            var n = Math.atan2(t.b, t.a) * p.a;
            return new h(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function l(t, n, e, r) {
            return 1 === arguments.length ? f(t) : new h(t, n, e, null == r ? 1 : r)
        }

        function h(t, n, e, r) {
            this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
        }

        n.b = i, n.a = l;
        var d = e(30), _ = e(29), p = e(61), v = .95047, b = 1, y = 1.08883, g = 4 / 29, x = 6 / 29, m = 3 * x * x,
            M = x * x * x;
        e.i(d.a)(a, i, e.i(d.b)(_.c, {
            brighter: function (t) {
                return new a(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, darker: function (t) {
                return new a(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, rgb: function () {
                var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return t = b * c(t), n = v * c(n), e = y * c(e), new _.a(o(3.2404542 * n - 1.5371385 * t - .4985314 * e), o(-.969266 * n + 1.8760108 * t + .041556 * e), o(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
            }
        })), e.i(d.a)(h, l, e.i(d.b)(_.c, {
            brighter: function (t) {
                return new h(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            }, darker: function (t) {
                return new h(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            }, rgb: function () {
                return r(this).rgb()
            }
        }))
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return i
        }), e.d(n, "b", function () {
            return a
        });
        var r, i, a, u = e(66);
        !function (t) {
            r = e.i(u.a)(t), i = r.format, a = r.formatPrefix
        }({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]})
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            t = t.toPrecision(n);
            t:for (var e, r = t.length, i = 1, a = -1; i < r; ++i) switch (t[i]) {
                case".":
                    a = e = i;
                    break;
                case"0":
                    0 === a && (a = i), e = i;
                    break;
                case"e":
                    break t;
                default:
                    a > 0 && (a = 0)
            }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return function (e, r) {
                for (var i = e.length, a = [], u = 0, c = t[0], o = 0; i > 0 && c > 0 && (o + c + 1 > r && (c = Math.max(1, r - o)), a.push(e.substring(i -= c, i + c)), !((o += c + 1) > r));) c = t[u = (u + 1) % t.length];
                return a.reverse().join(n)
            }
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                    return t[+n]
                })
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(31);
        n.a = function (t, n) {
            var i = e.i(r.a)(t, n);
            if (!i) return t + "";
            var a = i[0], u = i[1];
            return u < 0 ? "0." + new Array(-u).join("0") + a : a.length > u + 1 ? a.slice(0, u + 1) + "." + a.slice(u + 1) : a + new Array(u - a.length + 2).join("0")
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(19);
        n.a = function (t) {
            return Math.max(0, -e.i(r.a)(Math.abs(t)))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(19);
        n.a = function (t, n) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(e.i(r.a)(n) / 3))) - e.i(r.a)(Math.abs(t)))
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(19);
        n.a = function (t, n) {
            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, e.i(r.a)(n) - e.i(r.a)(t)) + 1
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function n(r) {
                function u(n, u) {
                    var c = t((n = e.i(i.a)(n)).h, (u = e.i(i.a)(u)).h), o = e.i(a.a)(n.s, u.s), s = e.i(a.a)(n.l, u.l),
                        f = e.i(a.a)(n.opacity, u.opacity);
                    return function (t) {
                        return n.h = c(t), n.s = o(t), n.l = s(Math.pow(t, r)), n.opacity = f(t), n + ""
                    }
                }

                return r = +r, u.gamma = n, u
            }(1)
        }

        e.d(n, "b", function () {
            return u
        });
        var i = e(4), a = e(12);
        n.a = r(a.b);
        var u = r(a.a)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function (n, r) {
                var u = t((n = e.i(i.b)(n)).h, (r = e.i(i.b)(r)).h), c = e.i(a.a)(n.c, r.c), o = e.i(a.a)(n.l, r.l),
                    s = e.i(a.a)(n.opacity, r.opacity);
                return function (t) {
                    return n.h = u(t), n.c = c(t), n.l = o(t), n.opacity = s(t), n + ""
                }
            }
        }

        e.d(n, "b", function () {
            return u
        });
        var i = e(4), a = e(12);
        n.a = r(a.b);
        var u = r(a.a)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function (n, r) {
                var u = t((n = e.i(i.d)(n)).h, (r = e.i(i.d)(r)).h), c = e.i(a.a)(n.s, r.s), o = e.i(a.a)(n.l, r.l),
                    s = e.i(a.a)(n.opacity, r.opacity);
                return function (t) {
                    return n.h = u(t), n.s = c(t), n.l = o(t), n.opacity = s(t), n + ""
                }
            }
        }

        e.d(n, "b", function () {
            return u
        });
        var i = e(4), a = e(12);
        n.a = r(a.b);
        var u = r(a.a)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            var r = e.i(a.a)((t = e.i(i.c)(t)).l, (n = e.i(i.c)(n)).l), u = e.i(a.a)(t.a, n.a), c = e.i(a.a)(t.b, n.b),
                o = e.i(a.a)(t.opacity, n.opacity);
            return function (n) {
                return t.l = r(n), t.a = u(n), t.b = c(n), t.opacity = o(n), t + ""
            }
        }

        n.a = r;
        var i = e(4), a = e(12)
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
            return e
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return t = +t, n -= t, function (e) {
                return Math.round(t + n * e)
            }
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return i
        });
        var r = 180 / Math.PI, i = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1};
        n.b = function (t, n, e, i, a, u) {
            var c, o, s;
            return (c = Math.sqrt(t * t + n * n)) && (t /= c, n /= c), (s = t * e + n * i) && (e -= t * s, i -= n * s), (o = Math.sqrt(e * e + i * i)) && (e /= o, i /= o, s /= o), t * i < n * e && (t = -t, n = -n, s = -s, c = -c), {
                translateX: a,
                translateY: u,
                rotate: Math.atan2(n, t) * r,
                skewX: Math.atan(s) * r,
                scaleX: c,
                scaleY: o
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, r, a) {
            function u(t) {
                return t.length ? t.pop() + " " : ""
            }

            function c(t, a, u, c, o, s) {
                if (t !== u || a !== c) {
                    var f = o.push("translate(", null, n, null, r);
                    s.push({i: f - 4, x: e.i(i.a)(t, u)}, {i: f - 2, x: e.i(i.a)(a, c)})
                } else (u || c) && o.push("translate(" + u + n + c + r)
            }

            function o(t, n, r, c) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), c.push({
                    i: r.push(u(r) + "rotate(", null, a) - 2,
                    x: e.i(i.a)(t, n)
                })) : n && r.push(u(r) + "rotate(" + n + a)
            }

            function s(t, n, r, c) {
                t !== n ? c.push({
                    i: r.push(u(r) + "skewX(", null, a) - 2,
                    x: e.i(i.a)(t, n)
                }) : n && r.push(u(r) + "skewX(" + n + a)
            }

            function f(t, n, r, a, c, o) {
                if (t !== r || n !== a) {
                    var s = c.push(u(c) + "scale(", null, ",", null, ")");
                    o.push({i: s - 4, x: e.i(i.a)(t, r)}, {i: s - 2, x: e.i(i.a)(n, a)})
                } else 1 === r && 1 === a || c.push(u(c) + "scale(" + r + "," + a + ")")
            }

            return function (n, e) {
                var r = [], i = [];
                return n = t(n), e = t(e), c(n.translateX, n.translateY, e.translateX, e.translateY, r, i), o(n.rotate, e.rotate, r, i), s(n.skewX, e.skewX, r, i), f(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
                    for (var n, e = -1, a = i.length; ++e < a;) r[(n = i[e]).i] = n.x(t);
                    return r.join("")
                }
            }
        }

        e.d(n, "a", function () {
            return u
        }), e.d(n, "b", function () {
            return c
        });
        var i = e(20), a = e(153), u = r(a.a, "px, ", "px)", "deg)"), c = r(a.b, ", ", ")", ")")
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return "none" === t ? s.a : (a || (a = document.createElement("DIV"), u = document.documentElement, c = document.defaultView), a.style.transform = t, t = c.getComputedStyle(u.appendChild(a), null).getPropertyValue("transform"), u.removeChild(a), t = t.slice(7, -1).split(","), e.i(s.b)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }

        function i(t) {
            return null == t ? s.a : (o || (o = document.createElementNS("http://www.w3.org/2000/svg", "g")), o.setAttribute("transform", t), (t = o.transform.baseVal.consolidate()) ? (t = t.matrix, e.i(s.b)(t.a, t.b, t.c, t.d, t.e, t.f)) : s.a)
        }

        n.a = r, n.b = i;
        var a, u, c, o, s = e(151)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        function i(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }

        function a(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }

        var u = Math.SQRT2;
        n.a = function (t, n) {
            var e, c, o = t[0], s = t[1], f = t[2], l = n[0], h = n[1], d = n[2], _ = l - o, p = h - s,
                v = _ * _ + p * p;
            if (v < 1e-12) c = Math.log(d / f) / u, e = function (t) {
                return [o + t * _, s + t * p, f * Math.exp(u * t * c)]
            }; else {
                var b = Math.sqrt(v), y = (d * d - f * f + 4 * v) / (2 * f * 2 * b),
                    g = (d * d - f * f - 4 * v) / (2 * d * 2 * b), x = Math.log(Math.sqrt(y * y + 1) - y),
                    m = Math.log(Math.sqrt(g * g + 1) - g);
                c = (m - x) / u, e = function (t) {
                    var n = t * c, e = r(x), l = f / (2 * b) * (e * a(u * n + x) - i(x));
                    return [o + l * _, s + l * p, f * e / r(u * n + x)]
                }
            }
            return e.duration = 1e3 * c, e
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function i() {
            return new r
        }

        var a = Math.PI, u = 2 * a, c = u - 1e-6;
        r.prototype = i.prototype = {
            constructor: r, moveTo: function (t, n) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
            }, closePath: function () {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            }, lineTo: function (t, n) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
            }, quadraticCurveTo: function (t, n, e, r) {
                this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
            }, bezierCurveTo: function (t, n, e, r, i, a) {
                this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
            }, arcTo: function (t, n, e, r, i) {
                t = +t, n = +n, e = +e, r = +r, i = +i;
                var u = this._x1, c = this._y1, o = e - t, s = r - n, f = u - t, l = c - n, h = f * f + l * l;
                if (i < 0) throw new Error("negative radius: " + i);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (h > 1e-6) if (Math.abs(l * o - s * f) > 1e-6 && i) {
                    var d = e - u, _ = r - c, p = o * o + s * s, v = d * d + _ * _, b = Math.sqrt(p), y = Math.sqrt(h),
                        g = i * Math.tan((a - Math.acos((p + h - v) / (2 * b * y))) / 2), x = g / y, m = g / b;
                    Math.abs(x - 1) > 1e-6 && (this._ += "L" + (t + x * f) + "," + (n + x * l)), this._ += "A" + i + "," + i + ",0,0," + +(l * d > f * _) + "," + (this._x1 = t + m * o) + "," + (this._y1 = n + m * s)
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else ;
            }, arc: function (t, n, e, r, i, o) {
                t = +t, n = +n, e = +e;
                var s = e * Math.cos(r), f = e * Math.sin(r), l = t + s, h = n + f, d = 1 ^ o, _ = o ? r - i : i - r;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + l + "," + h), e && (_ < 0 && (_ = _ % u + u), _ > c ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - s) + "," + (n - f) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = l) + "," + (this._y1 = h) : _ > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(_ >= a) + "," + d + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
            }, rect: function (t, n, e, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
            }, toString: function () {
                return this._
            }
        }, n.a = i
    }, function (t, n, e) {
        "use strict";

        function r() {
            function t() {
                var t = o().length, r = f[1] < f[0], a = f[r - 0], c = f[1 - r];
                n = (c - a) / Math.max(1, t - h + 2 * d), l && (n = Math.floor(n)), a += (c - a - n * (t - h)) * _, i = n * (1 - h), l && (a = Math.round(a), i = Math.round(i));
                var p = e.i(u.range)(t).map(function (t) {
                    return a + n * t
                });
                return s(r ? p.reverse() : p)
            }

            var n, i, a = e.i(c.a)().unknown(void 0), o = a.domain, s = a.range, f = [0, 1], l = !1, h = 0, d = 0,
                _ = .5;
            return delete a.unknown, a.domain = function (n) {
                return arguments.length ? (o(n), t()) : o()
            }, a.range = function (n) {
                return arguments.length ? (f = [+n[0], +n[1]], t()) : f.slice()
            }, a.rangeRound = function (n) {
                return f = [+n[0], +n[1]], l = !0, t()
            }, a.bandwidth = function () {
                return i
            }, a.step = function () {
                return n
            }, a.round = function (n) {
                return arguments.length ? (l = !!n, t()) : l
            }, a.padding = function (n) {
                return arguments.length ? (h = d = Math.max(0, Math.min(1, n)), t()) : h
            }, a.paddingInner = function (n) {
                return arguments.length ? (h = Math.max(0, Math.min(1, n)), t()) : h
            }, a.paddingOuter = function (n) {
                return arguments.length ? (d = Math.max(0, Math.min(1, n)), t()) : d
            }, a.align = function (n) {
                return arguments.length ? (_ = Math.max(0, Math.min(1, n)), t()) : _
            }, a.copy = function () {
                return r().domain(o()).range(f).round(l).paddingInner(h).paddingOuter(d).align(_)
            }, t()
        }

        function i(t) {
            var n = t.copy;
            return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
                return i(n())
            }, t
        }

        function a() {
            return i(r().paddingInner(1))
        }

        n.a = r, n.b = a;
        var u = e(2), c = e(76)
    }, function (t, n, e) {
        "use strict";
        var r = e(14);
        n.a = e.i(r.a)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")
    }, function (t, n, e) {
        "use strict";
        var r = e(14);
        n.a = e.i(r.a)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5")
    }, function (t, n, e) {
        "use strict";
        var r = e(14);
        n.a = e.i(r.a)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6")
    }, function (t, n, e) {
        "use strict";
        var r = e(14);
        n.a = e.i(r.a)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9")
    }, function (t, n, e) {
        "use strict";
        var r = e(4), i = e(9);
        n.a = e.i(i.interpolateCubehelixLong)(e.i(r.a)(300, .5, 0), e.i(r.a)(-240, .5, 1))
    }, function (t, n, e) {
        "use strict";

        function r() {
            function t(t) {
                return +t
            }

            var n = [0, 1];
            return t.invert = t, t.domain = t.range = function (e) {
                return arguments.length ? (n = i.a.call(e, u.a), t) : n.slice()
            }, t.copy = function () {
                return r().domain(n)
            }, e.i(a.b)(t)
        }

        n.a = r;
        var i = e(5), a = e(15), u = e(75)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return (n = Math.log(n / t)) ? function (e) {
                return Math.log(e / t) / n
            } : e.i(h.a)(n)
        }

        function i(t, n) {
            return t < 0 ? function (e) {
                return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
            } : function (e) {
                return Math.pow(n, e) * Math.pow(t, 1 - e)
            }
        }

        function a(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }

        function u(t) {
            return 10 === t ? a : t === Math.E ? Math.exp : function (n) {
                return Math.pow(t, n)
            }
        }

        function c(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
                return Math.log(n) / t
            })
        }

        function o(t) {
            return function (n) {
                return -t(-n)
            }
        }

        function s() {
            function t() {
                return p = c(h), v = u(h), a()[0] < 0 && (p = o(p), v = o(v)), n
            }

            var n = e.i(_.a)(r, i).domain([1, 10]), a = n.domain, h = 10, p = c(10), v = u(10);
            return n.base = function (n) {
                return arguments.length ? (h = +n, t()) : h
            }, n.domain = function (n) {
                return arguments.length ? (a(n), t()) : a()
            }, n.ticks = function (t) {
                var n, r = a(), i = r[0], u = r[r.length - 1];
                (n = u < i) && (l = i, i = u, u = l);
                var c, o, s, l = p(i), d = p(u), _ = null == t ? 10 : +t, b = [];
                if (!(h % 1) && d - l < _) {
                    if (l = Math.round(l) - 1, d = Math.round(d) + 1, i > 0) {
                        for (; l < d; ++l) for (o = 1, c = v(l); o < h; ++o) if (!((s = c * o) < i)) {
                            if (s > u) break;
                            b.push(s)
                        }
                    } else for (; l < d; ++l) for (o = h - 1, c = v(l); o >= 1; --o) if (!((s = c * o) < i)) {
                        if (s > u) break;
                        b.push(s)
                    }
                } else b = e.i(f.ticks)(l, d, Math.min(d - l, _)).map(v);
                return n ? b.reverse() : b
            }, n.tickFormat = function (t, r) {
                if (null == r && (r = 10 === h ? ".0e" : ","), "function" != typeof r && (r = e.i(l.f)(r)), t === 1 / 0) return r;
                null == t && (t = 10);
                var i = Math.max(1, h * t / n.ticks().length);
                return function (t) {
                    var n = t / v(Math.round(p(t)));
                    return n * h < h - .5 && (n *= h), n <= i ? r(t) : ""
                }
            }, n.nice = function () {
                return a(e.i(d.a)(a(), {
                    floor: function (t) {
                        return v(Math.floor(p(t)))
                    }, ceil: function (t) {
                        return v(Math.ceil(p(t)))
                    }
                }))
            }, n.copy = function () {
                return e.i(_.c)(n, s().base(h))
            }, n
        }

        n.a = s;
        var f = e(2), l = e(62), h = e(34), d = e(74), _ = e(21)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        }

        function i() {
            function t(t, n) {
                return (n = r(n, a) - (t = r(t, a))) ? function (e) {
                    return (r(e, a) - t) / n
                } : e.i(u.a)(n)
            }

            function n(t, n) {
                return n = r(n, a) - (t = r(t, a)), function (e) {
                    return r(t + n * e, 1 / a)
                }
            }

            var a = 1, s = e.i(o.a)(t, n), f = s.domain;
            return s.exponent = function (t) {
                return arguments.length ? (a = +t, f(f())) : a
            }, s.copy = function () {
                return e.i(o.c)(s, i().exponent(a))
            }, e.i(c.b)(s)
        }

        function a() {
            return i().exponent(.5)
        }

        n.a = i, n.b = a;
        var u = e(34), c = e(15), o = e(21)
    }, function (t, n, e) {
        "use strict";

        function r() {
            function t() {
                var t = 0, r = Math.max(1, c.length);
                for (o = new Array(r - 1); ++t < r;) o[t - 1] = e.i(i.quantile)(u, t / r);
                return n
            }

            function n(t) {
                if (!isNaN(t = +t)) return c[e.i(i.bisect)(o, t)]
            }

            var u = [], c = [], o = [];
            return n.invertExtent = function (t) {
                var n = c.indexOf(t);
                return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : u[0], n < o.length ? o[n] : u[u.length - 1]]
            }, n.domain = function (n) {
                if (!arguments.length) return u.slice();
                u = [];
                for (var e, r = 0, a = n.length; r < a; ++r) null == (e = n[r]) || isNaN(e = +e) || u.push(e);
                return u.sort(i.ascending), t()
            }, n.range = function (n) {
                return arguments.length ? (c = a.b.call(n), t()) : c.slice()
            }, n.quantiles = function () {
                return o.slice()
            }, n.copy = function () {
                return r().domain(u).range(c)
            }, n
        }

        n.a = r;
        var i = e(2), a = e(5)
    }, function (t, n, e) {
        "use strict";

        function r() {
            function t(t) {
                if (t <= t) return l[e.i(i.bisect)(f, t, 0, s)]
            }

            function n() {
                var n = -1;
                for (f = new Array(s); ++n < s;) f[n] = ((n + 1) * o - (n - s) * c) / (s + 1);
                return t
            }

            var c = 0, o = 1, s = 1, f = [.5], l = [0, 1];
            return t.domain = function (t) {
                return arguments.length ? (c = +t[0], o = +t[1], n()) : [c, o]
            }, t.range = function (t) {
                return arguments.length ? (s = (l = a.b.call(t)).length - 1, n()) : l.slice()
            }, t.invertExtent = function (t) {
                var n = l.indexOf(t);
                return n < 0 ? [NaN, NaN] : n < 1 ? [c, f[0]] : n >= s ? [f[s - 1], o] : [f[n - 1], f[n]]
            }, t.copy = function () {
                return r().domain([c, o]).range(l)
            }, e.i(u.b)(t)
        }

        n.a = r;
        var i = e(2), a = e(5), u = e(15)
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return a
        }), e.d(n, "c", function () {
            return u
        });
        var r = e(4), i = e(9), a = e.i(i.interpolateCubehelixLong)(e.i(r.a)(-100, .75, .35), e.i(r.a)(80, 1.5, .8)),
            u = e.i(i.interpolateCubehelixLong)(e.i(r.a)(260, .75, .35), e.i(r.a)(80, 1.5, .8)), c = e.i(r.a)();
        n.a = function (t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var n = Math.abs(t - .5);
            return c.h = 360 * t - 100, c.s = 1.5 - 1.5 * n, c.l = .8 - .9 * n, c + ""
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            function n(n) {
                var e = (n - a) / (u - a);
                return t(c ? Math.max(0, Math.min(1, e)) : e)
            }

            var a = 0, u = 1, c = !1;
            return n.domain = function (t) {
                return arguments.length ? (a = +t[0], u = +t[1], n) : [a, u]
            }, n.clamp = function (t) {
                return arguments.length ? (c = !!t, n) : c
            }, n.interpolator = function (e) {
                return arguments.length ? (t = e, n) : t
            }, n.copy = function () {
                return r(t).domain([a, u]).clamp(c)
            }, e.i(i.b)(n)
        }

        n.a = r;
        var i = e(15)
    }, function (t, n, e) {
        "use strict";

        function r() {
            function t(t) {
                if (t <= t) return u[e.i(i.bisect)(n, t, 0, c)]
            }

            var n = [.5], u = [0, 1], c = 1;
            return t.domain = function (e) {
                return arguments.length ? (n = a.b.call(e), c = Math.min(n.length, u.length - 1), t) : n.slice()
            }, t.range = function (e) {
                return arguments.length ? (u = a.b.call(e), c = Math.min(n.length, u.length - 1), t) : u.slice()
            }, t.invertExtent = function (t) {
                var e = u.indexOf(t);
                return [n[e - 1], n[e]]
            }, t.copy = function () {
                return r().domain(n).range(u)
            }, t
        }

        n.a = r;
        var i = e(2), a = e(5)
    }, function (t, n, e) {
        "use strict";
        var r = e(2), i = e(62);
        n.a = function (t, n, a) {
            var u, c = t[0], o = t[t.length - 1], s = e.i(r.tickStep)(c, o, null == n ? 10 : n);
            switch (a = e.i(i.a)(null == a ? ",f" : a), a.type) {
                case"s":
                    var f = Math.max(Math.abs(c), Math.abs(o));
                    return null != a.precision || isNaN(u = e.i(i.b)(s, f)) || (a.precision = u), e.i(i.c)(a, f);
                case"":
                case"e":
                case"g":
                case"p":
                case"r":
                    null != a.precision || isNaN(u = e.i(i.d)(s, Math.max(Math.abs(c), Math.abs(o)))) || (a.precision = u - ("e" === a.type));
                    break;
                case"f":
                case"%":
                    null != a.precision || isNaN(u = e.i(i.e)(s)) || (a.precision = u - 2 * ("%" === a.type))
            }
            return e.i(i.f)(a)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(77), i = e(97), a = e(48);
        n.a = function () {
            return e.i(r.b)(a.a, a.b, a.c, a.d, a.e, a.f, a.g, a.h, i.a).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = t.length;
            return function (e) {
                return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
            }
        }

        e.d(n, "b", function () {
            return a
        }), e.d(n, "c", function () {
            return u
        }), e.d(n, "d", function () {
            return c
        });
        var i = e(14);
        n.a = r(e.i(i.a)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
        var a = r(e.i(i.a)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
            u = r(e.i(i.a)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
            c = r(e.i(i.a)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            return new i
        }

        function i() {
            this._ = "@" + (++a).toString(36)
        }

        n.a = r;
        var a = 0;
        i.prototype = r.prototype = {
            constructor: i, get: function (t) {
                for (var n = this._; !(n in t);) if (!(t = t.parentNode)) return;
                return t[n]
            }, set: function (t, n) {
                return t[this._] = n
            }, remove: function (t) {
                return this._ in t && delete t[this._]
            }, toString: function () {
                return this._
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(41), i = e(38);
        n.a = function (t) {
            var n = e.i(r.a)();
            return n.changedTouches && (n = n.changedTouches[0]), e.i(i.a)(t, n)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1);
        n.a = function (t) {
            return "string" == typeof t ? new r.b([[document.querySelector(t)]], [document.documentElement]) : new r.b([[t]], r.c)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1);
        n.a = function (t) {
            return "string" == typeof t ? new r.b([document.querySelectorAll(t)], [document.documentElement]) : new r.b([null == t ? [] : t], r.c)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(35);
        n.a = function (t) {
            var n = "function" == typeof t ? t : e.i(r.a)(t);
            return this.select(function () {
                return this.appendChild(n.apply(this, arguments))
            })
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function () {
                this.removeAttribute(t)
            }
        }

        function i(t) {
            return function () {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function a(t, n) {
            return function () {
                this.setAttribute(t, n)
            }
        }

        function u(t, n) {
            return function () {
                this.setAttributeNS(t.space, t.local, n)
            }
        }

        function c(t, n) {
            return function () {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }

        function o(t, n) {
            return function () {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }

        var s = e(36);
        n.a = function (t, n) {
            var f = e.i(s.a)(t);
            if (arguments.length < 2) {
                var l = this.node();
                return f.local ? l.getAttributeNS(f.space, f.local) : l.getAttribute(f)
            }
            return this.each((null == n ? f.local ? i : r : "function" == typeof n ? f.local ? o : c : f.local ? u : a)(f, n))
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.trim().split(/^|\\s+/)
        }

        function i(t) {
            return t.classList || new a(t)
        }

        function a(t) {
            this._node = t, this._names = r(t.getAttribute("class") || "")
        }

        function u(t, n) {
            for (var e = i(t), r = -1, a = n.length; ++r < a;) e.add(n[r])
        }

        function c(t, n) {
            for (var e = i(t), r = -1, a = n.length; ++r < a;) e.remove(n[r])
        }

        function o(t) {
            return function () {
                u(this, t)
            }
        }

        function s(t) {
            return function () {
                c(this, t)
            }
        }

        function f(t, n) {
            return function () {
                (n.apply(this, arguments) ? u : c)(this, t)
            }
        }

        a.prototype = {
            add: function (t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            }, remove: function (t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            }, contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        }, n.a = function (t, n) {
            var e = r(t + "");
            if (arguments.length < 2) {
                for (var a = i(this.node()), u = -1, c = e.length; ++u < c;) if (!a.contains(e[u])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? f : n ? o : s)(e, n))
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, e, r, i, a) {
            for (var c, o = 0, s = n.length, f = a.length; o < f; ++o) (c = n[o]) ? (c.__data__ = a[o], r[o] = c) : e[o] = new u.b(t, a[o]);
            for (; o < s; ++o) (c = n[o]) && (i[o] = c)
        }

        function i(t, n, e, r, i, a, c) {
            var s, f, l, h = {}, d = n.length, _ = a.length, p = new Array(d);
            for (s = 0; s < d; ++s) (f = n[s]) && (p[s] = l = o + c.call(f, f.__data__, s, n), l in h ? i[s] = f : h[l] = f);
            for (s = 0; s < _; ++s) l = o + c.call(t, a[s], s, a), (f = h[l]) ? (r[s] = f, f.__data__ = a[s], h[l] = null) : e[s] = new u.b(t, a[s]);
            for (s = 0; s < d; ++s) (f = n[s]) && h[p[s]] === f && (i[s] = f)
        }

        var a = e(1), u = e(79), c = e(173), o = "$";
        n.a = function (t, n) {
            if (!t) return y = new Array(this.size()), _ = -1, this.each(function (t) {
                y[++_] = t
            }), y;
            var u = n ? i : r, o = this._parents, s = this._groups;
            "function" != typeof t && (t = e.i(c.a)(t));
            for (var f = s.length, l = new Array(f), h = new Array(f), d = new Array(f), _ = 0; _ < f; ++_) {
                var p = o[_], v = s[_], b = v.length, y = t.call(p, p && p.__data__, _, o), g = y.length,
                    x = h[_] = new Array(g), m = l[_] = new Array(g);
                u(p, v, x, m, d[_] = new Array(b), y, n);
                for (var M, w, T = 0, k = 0; T < g; ++T) if (M = x[T]) {
                    for (T >= k && (k = T + 1); !(w = m[k]) && ++k < g;) ;
                    M._next = w || null
                }
            }
            return l = new a.b(l, o), l._enter = h, l._exit = d, l
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n, r) {
            var i = e.i(u.a)(t), a = i.CustomEvent;
            "function" == typeof a ? a = new a(n, r) : (a = i.document.createEvent("Event"), r ? (a.initEvent(n, r.bubbles, r.cancelable), a.detail = r.detail) : a.initEvent(n, !1, !1)), t.dispatchEvent(a)
        }

        function i(t, n) {
            return function () {
                return r(this, t, n)
            }
        }

        function a(t, n) {
            return function () {
                return r(this, t, n.apply(this, arguments))
            }
        }

        var u = e(42);
        n.a = function (t, n) {
            return this.each(("function" == typeof n ? a : i)(t, n))
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e) for (var i, a = n[e], u = 0, c = a.length; u < c; ++u) (i = a[u]) && t.call(i, i.__data__, u, a);
            return this
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            return !this.node()
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(80), i = e(1);
        n.a = function () {
            return new i.b(this._exit || this._groups.map(r.a), this._parents)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1), i = e(78);
        n.a = function (t) {
            "function" != typeof t && (t = e.i(i.a)(t));
            for (var n = this._groups, a = n.length, u = new Array(a), c = 0; c < a; ++c) for (var o, s = n[c], f = s.length, l = u[c] = [], h = 0; h < f; ++h) (o = s[h]) && t.call(o, o.__data__, h, s) && l.push(o);
            return new r.b(u, this._parents)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this.innerHTML = ""
        }

        function i(t) {
            return function () {
                this.innerHTML = t
            }
        }

        function a(t) {
            return function () {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }

        n.a = function (t) {
            return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? a : i)(t)) : this.node().innerHTML
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            return null
        }

        var i = e(35), a = e(40);
        n.a = function (t, n) {
            var u = "function" == typeof t ? t : e.i(i.a)(t),
                c = null == n ? r : "function" == typeof n ? n : e.i(a.a)(n);
            return this.select(function () {
                return this.insertBefore(u.apply(this, arguments), c.apply(this, arguments) || null)
            })
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        n.a = function () {
            return this.each(r)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1);
        n.a = function (t) {
            for (var n = this._groups, e = t._groups, i = n.length, a = e.length, u = Math.min(i, a), c = new Array(i), o = 0; o < u; ++o) for (var s, f = n[o], l = e[o], h = f.length, d = c[o] = new Array(h), _ = 0; _ < h; ++_) (s = f[_] || l[_]) && (d[_] = s);
            for (; o < i; ++o) c[o] = n[o];
            return new r.b(c, this._parents)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
                var u = r[i];
                if (u) return u
            }
            return null
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            var t = new Array(this.size()), n = -1;
            return this.each(function () {
                t[++n] = this
            }), t
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;) for (var r, i = t[n], a = i.length - 1, u = i[a]; --a >= 0;) (r = i[a]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
            return this
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return function () {
                delete this[t]
            }
        }

        function i(t, n) {
            return function () {
                this[t] = n
            }
        }

        function a(t, n) {
            return function () {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }

        n.a = function (t, n) {
            return arguments.length > 1 ? this.each((null == n ? r : "function" == typeof n ? a : i)(t, n)) : this.node()[t]
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        n.a = function () {
            return this.each(r)
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        n.a = function () {
            return this.each(r)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1), i = e(40);
        n.a = function (t) {
            "function" != typeof t && (t = e.i(i.a)(t));
            for (var n = this._groups, a = n.length, u = new Array(a), c = 0; c < a; ++c) for (var o, s, f = n[c], l = f.length, h = u[c] = new Array(l), d = 0; d < l; ++d) (o = f[d]) && (s = t.call(o, o.__data__, d, f)) && ("__data__" in o && (s.__data__ = o.__data__), h[d] = s);
            return new r.b(u, this._parents)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(1), i = e(82);
        n.a = function (t) {
            "function" != typeof t && (t = e.i(i.a)(t));
            for (var n = this._groups, a = n.length, u = [], c = [], o = 0; o < a; ++o) for (var s, f = n[o], l = f.length, h = 0; h < l; ++h) (s = f[h]) && (u.push(t.call(s, s.__data__, h, f)), c.push(s));
            return new r.b(u, c)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function () {
            var t = 0;
            return this.each(function () {
                ++t
            }), t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }

        var i = e(1);
        n.a = function (t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }

            t || (t = r);
            for (var e = this._groups, a = e.length, u = new Array(a), c = 0; c < a; ++c) {
                for (var o, s = e[c], f = s.length, l = u[c] = new Array(f), h = 0; h < f; ++h) (o = s[h]) && (l[h] = o);
                l.sort(n)
            }
            return new i.b(u, this._parents).order()
        }
    }, function (t, n, e) {
        "use strict";

        function r() {
            this.textContent = ""
        }

        function i(t) {
            return function () {
                this.textContent = t
            }
        }

        function a(t) {
            return function () {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        n.a = function (t) {
            return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? a : i)(t)) : this.node().textContent
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(41), i = e(38);
        n.a = function (t, n, a) {
            arguments.length < 3 && (a = n, n = e.i(r.a)().changedTouches);
            for (var u, c = 0, o = n ? n.length : 0; c < o; ++c) if ((u = n[c]).identifier === a) return e.i(i.a)(t, u);
            return null
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(41), i = e(38);
        n.a = function (t, n) {
            null == n && (n = e.i(r.a)().touches);
            for (var a = 0, u = n ? n.length : 0, c = new Array(u); a < u; ++a) c[a] = e.i(i.a)(t, n[a]);
            return c
        }
    }, function (t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var r = e(207);
        e.d(n, "arc", function () {
            return r.a
        });
        var i = e(83);
        e.d(n, "area", function () {
            return i.a
        });
        var a = e(44);
        e.d(n, "line", function () {
            return a.a
        });
        var u = e(228);
        e.d(n, "pie", function () {
            return u.a
        });
        var c = e(208);
        e.d(n, "areaRadial", function () {
            return c.a
        }), e.d(n, "radialArea", function () {
            return c.a
        });
        var o = e(88);
        e.d(n, "lineRadial", function () {
            return o.a
        }), e.d(n, "radialLine", function () {
            return o.a
        });
        var s = e(89);
        e.d(n, "pointRadial", function () {
            return s.a
        });
        var f = e(220);
        e.d(n, "linkHorizontal", function () {
            return f.a
        }), e.d(n, "linkVertical", function () {
            return f.b
        }), e.d(n, "linkRadial", function () {
            return f.c
        });
        var l = e(230);
        e.d(n, "symbol", function () {
            return l.a
        }), e.d(n, "symbols", function () {
            return l.b
        });
        var h = e(90);
        e.d(n, "symbolCircle", function () {
            return h.a
        });
        var d = e(91);
        e.d(n, "symbolCross", function () {
            return d.a
        });
        var _ = e(92);
        e.d(n, "symbolDiamond", function () {
            return _.a
        });
        var p = e(93);
        e.d(n, "symbolSquare", function () {
            return p.a
        });
        var v = e(94);
        e.d(n, "symbolStar", function () {
            return v.a
        });
        var b = e(95);
        e.d(n, "symbolTriangle", function () {
            return b.a
        });
        var y = e(96);
        e.d(n, "symbolWye", function () {
            return y.a
        });
        var g = e(209);
        e.d(n, "curveBasisClosed", function () {
            return g.a
        });
        var x = e(210);
        e.d(n, "curveBasisOpen", function () {
            return x.a
        });
        var m = e(23);
        e.d(n, "curveBasis", function () {
            return m.a
        });
        var M = e(211);
        e.d(n, "curveBundle", function () {
            return M.a
        });
        var w = e(85);
        e.d(n, "curveCardinalClosed", function () {
            return w.a
        });
        var T = e(86);
        e.d(n, "curveCardinalOpen", function () {
            return T.a
        });
        var k = e(24);
        e.d(n, "curveCardinal", function () {
            return k.a
        });
        var N = e(212);
        e.d(n, "curveCatmullRomClosed", function () {
            return N.a
        });
        var A = e(213);
        e.d(n, "curveCatmullRomOpen", function () {
            return A.a
        });
        var S = e(43);
        e.d(n, "curveCatmullRom", function () {
            return S.a
        });
        var C = e(214);
        e.d(n, "curveLinearClosed", function () {
            return C.a
        });
        var E = e(25);
        e.d(n, "curveLinear", function () {
            return E.a
        });
        var P = e(215);
        e.d(n, "curveMonotoneX", function () {
            return P.a
        }), e.d(n, "curveMonotoneY", function () {
            return P.b
        });
        var D = e(216);
        e.d(n, "curveNatural", function () {
            return D.a
        });
        var U = e(217);
        e.d(n, "curveStep", function () {
            return U.a
        }), e.d(n, "curveStepAfter", function () {
            return U.b
        }), e.d(n, "curveStepBefore", function () {
            return U.c
        });
        var O = e(229);
        e.d(n, "stack", function () {
            return O.a
        });
        var q = e(222);
        e.d(n, "stackOffsetExpand", function () {
            return q.a
        });
        var L = e(221);
        e.d(n, "stackOffsetDiverging", function () {
            return L.a
        });
        var Y = e(17);
        e.d(n, "stackOffsetNone", function () {
            return Y.a
        });
        var j = e(223);
        e.d(n, "stackOffsetSilhouette", function () {
            return j.a
        });
        var F = e(224);
        e.d(n, "stackOffsetWiggle", function () {
            return F.a
        });
        var z = e(45);
        e.d(n, "stackOrderAscending", function () {
            return z.a
        });
        var R = e(225);
        e.d(n, "stackOrderDescending", function () {
            return R.a
        });
        var H = e(226);
        e.d(n, "stackOrderInsideOut", function () {
            return H.a
        });
        var I = e(18);
        e.d(n, "stackOrderNone", function () {
            return I.a
        });
        var X = e(227);
        e.d(n, "stackOrderReverse", function () {
            return X.a
        })
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.innerRadius
        }

        function i(t) {
            return t.outerRadius
        }

        function a(t) {
            return t.startAngle
        }

        function u(t) {
            return t.endAngle
        }

        function c(t) {
            return t && t.padAngle
        }

        function o(t, n, e, r, i, a, u, c) {
            var o = e - t, s = r - n, f = u - i, l = c - a, h = (f * (n - a) - l * (t - i)) / (l * o - f * s);
            return [t + h * o, n + h * s]
        }

        function s(t, n, r, i, a, u, c) {
            var o = t - r, s = n - i, f = (c ? u : -u) / e.i(h.d)(o * o + s * s), l = f * s, d = -f * o, _ = t + l,
                p = n + d, v = r + l, b = i + d, y = (_ + v) / 2, g = (p + b) / 2, x = v - _, m = b - p,
                M = x * x + m * m, w = a - u, T = _ * b - v * p,
                k = (m < 0 ? -1 : 1) * e.i(h.d)(e.i(h.e)(0, w * w * M - T * T)), N = (T * m - x * k) / M,
                A = (-T * x - m * k) / M, S = (T * m + x * k) / M, C = (-T * x + m * k) / M, E = N - y, P = A - g,
                D = S - y, U = C - g;
            return E * E + P * P > D * D + U * U && (N = S, A = C), {
                cx: N,
                cy: A,
                x01: -l,
                y01: -d,
                x11: N * (a / w - 1),
                y11: A * (a / w - 1)
            }
        }

        var f = e(13), l = e(6), h = e(16);
        n.a = function () {
            function t() {
                var t, r, i = +n.apply(this, arguments), a = +d.apply(this, arguments),
                    u = v.apply(this, arguments) - h.f, c = b.apply(this, arguments) - h.f, l = e.i(h.g)(c - u),
                    x = c > u;
                if (g || (g = t = e.i(f.a)()), a < i && (r = a, a = i, i = r), a > h.a) if (l > h.c - h.a) g.moveTo(a * e.i(h.h)(u), a * e.i(h.i)(u)), g.arc(0, 0, a, u, c, !x), i > h.a && (g.moveTo(i * e.i(h.h)(c), i * e.i(h.i)(c)), g.arc(0, 0, i, c, u, x)); else {
                    var m, M, w = u, T = c, k = u, N = c, A = l, S = l, C = y.apply(this, arguments) / 2,
                        E = C > h.a && (p ? +p.apply(this, arguments) : e.i(h.d)(i * i + a * a)),
                        P = e.i(h.j)(e.i(h.g)(a - i) / 2, +_.apply(this, arguments)), D = P, U = P;
                    if (E > h.a) {
                        var O = e.i(h.k)(E / i * e.i(h.i)(C)), q = e.i(h.k)(E / a * e.i(h.i)(C));
                        (A -= 2 * O) > h.a ? (O *= x ? 1 : -1, k += O, N -= O) : (A = 0, k = N = (u + c) / 2), (S -= 2 * q) > h.a ? (q *= x ? 1 : -1, w += q, T -= q) : (S = 0, w = T = (u + c) / 2)
                    }
                    var L = a * e.i(h.h)(w), Y = a * e.i(h.i)(w), j = i * e.i(h.h)(N), F = i * e.i(h.i)(N);
                    if (P > h.a) {
                        var z = a * e.i(h.h)(T), R = a * e.i(h.i)(T), H = i * e.i(h.h)(k), I = i * e.i(h.i)(k);
                        if (l < h.b) {
                            var X = A > h.a ? o(L, Y, H, I, z, R, j, F) : [j, F], B = L - X[0], $ = Y - X[1],
                                Z = z - X[0],
                                V = R - X[1],
                                W = 1 / e.i(h.i)(e.i(h.l)((B * Z + $ * V) / (e.i(h.d)(B * B + $ * $) * e.i(h.d)(Z * Z + V * V))) / 2),
                                J = e.i(h.d)(X[0] * X[0] + X[1] * X[1]);
                            D = e.i(h.j)(P, (i - J) / (W - 1)), U = e.i(h.j)(P, (a - J) / (W + 1))
                        }
                    }
                    S > h.a ? U > h.a ? (m = s(H, I, L, Y, a, U, x), M = s(z, R, j, F, a, U, x), g.moveTo(m.cx + m.x01, m.cy + m.y01), U < P ? g.arc(m.cx, m.cy, U, e.i(h.m)(m.y01, m.x01), e.i(h.m)(M.y01, M.x01), !x) : (g.arc(m.cx, m.cy, U, e.i(h.m)(m.y01, m.x01), e.i(h.m)(m.y11, m.x11), !x), g.arc(0, 0, a, e.i(h.m)(m.cy + m.y11, m.cx + m.x11), e.i(h.m)(M.cy + M.y11, M.cx + M.x11), !x), g.arc(M.cx, M.cy, U, e.i(h.m)(M.y11, M.x11), e.i(h.m)(M.y01, M.x01), !x))) : (g.moveTo(L, Y), g.arc(0, 0, a, w, T, !x)) : g.moveTo(L, Y), i > h.a && A > h.a ? D > h.a ? (m = s(j, F, z, R, i, -D, x), M = s(L, Y, H, I, i, -D, x), g.lineTo(m.cx + m.x01, m.cy + m.y01), D < P ? g.arc(m.cx, m.cy, D, e.i(h.m)(m.y01, m.x01), e.i(h.m)(M.y01, M.x01), !x) : (g.arc(m.cx, m.cy, D, e.i(h.m)(m.y01, m.x01), e.i(h.m)(m.y11, m.x11), !x), g.arc(0, 0, i, e.i(h.m)(m.cy + m.y11, m.cx + m.x11), e.i(h.m)(M.cy + M.y11, M.cx + M.x11), x), g.arc(M.cx, M.cy, D, e.i(h.m)(M.y11, M.x11), e.i(h.m)(M.y01, M.x01), !x))) : g.arc(0, 0, i, N, k, x) : g.lineTo(j, F)
                } else g.moveTo(0, 0);
                if (g.closePath(), t) return g = null, t + "" || null
            }

            var n = r, d = i, _ = e.i(l.a)(0), p = null, v = a, b = u, y = c, g = null;
            return t.centroid = function () {
                var t = (+n.apply(this, arguments) + +d.apply(this, arguments)) / 2,
                    r = (+v.apply(this, arguments) + +b.apply(this, arguments)) / 2 - h.b / 2;
                return [e.i(h.h)(r) * t, e.i(h.i)(r) * t]
            }, t.innerRadius = function (r) {
                return arguments.length ? (n = "function" == typeof r ? r : e.i(l.a)(+r), t) : n
            }, t.outerRadius = function (n) {
                return arguments.length ? (d = "function" == typeof n ? n : e.i(l.a)(+n), t) : d
            }, t.cornerRadius = function (n) {
                return arguments.length ? (_ = "function" == typeof n ? n : e.i(l.a)(+n), t) : _
            }, t.padRadius = function (n) {
                return arguments.length ? (p = null == n ? null : "function" == typeof n ? n : e.i(l.a)(+n), t) : p
            }, t.startAngle = function (n) {
                return arguments.length ? (v = "function" == typeof n ? n : e.i(l.a)(+n), t) : v
            }, t.endAngle = function (n) {
                return arguments.length ? (b = "function" == typeof n ? n : e.i(l.a)(+n), t) : b
            }, t.padAngle = function (n) {
                return arguments.length ? (y = "function" == typeof n ? n : e.i(l.a)(+n), t) : y
            }, t.context = function (n) {
                return arguments.length ? (g = null == n ? null : n, t) : g
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(87), i = e(83), a = e(88);
        n.a = function () {
            var t = e.i(i.a)().curve(r.b), n = t.curve, u = t.lineX0, c = t.lineX1, o = t.lineY0, s = t.lineY1;
            return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
                return e.i(a.b)(u())
            }, delete t.lineX0, t.lineEndAngle = function () {
                return e.i(a.b)(c())
            }, delete t.lineX1, t.lineInnerRadius = function () {
                return e.i(a.b)(o())
            }, delete t.lineY0, t.lineOuterRadius = function () {
                return e.i(a.b)(s())
            }, delete t.lineY1, t.curve = function (t) {
                return arguments.length ? n(e.i(r.a)(t)) : n()._curve
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        var i = e(26), a = e(23);
        r.prototype = {
            areaStart: i.a, areaEnd: i.a, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        e.i(a.c)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        }, n.a = function (t) {
            return new r(t)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        var i = e(23);
        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var r = (this._x0 + 4 * this._x1 + t) / 6, a = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(r, a) : this._context.moveTo(r, a);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        e.i(i.c)(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        }, n.a = function (t) {
            return new r(t)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._basis = new i.b(t), this._beta = n
        }

        var i = e(23);
        r.prototype = {
            lineStart: function () {
                this._x = [], this._y = [], this._basis.lineStart()
            }, lineEnd: function () {
                var t = this._x, n = this._y, e = t.length - 1;
                if (e > 0) for (var r, i = t[0], a = n[0], u = t[e] - i, c = n[e] - a, o = -1; ++o <= e;) r = o / e, this._basis.point(this._beta * t[o] + (1 - this._beta) * (i + r * u), this._beta * n[o] + (1 - this._beta) * (a + r * c));
                this._x = this._y = null, this._basis.lineEnd()
            }, point: function (t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        }, n.a = function t(n) {
            function e(t) {
                return 1 === n ? new i.b(t) : new r(t, n)
            }

            return e.beta = function (n) {
                return t(+n)
            }, e
        }(.85)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._alpha = n
        }

        var i = e(85), a = e(26), u = e(43);
        r.prototype = {
            areaStart: a.a, areaEnd: a.a, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            }, point: function (t, n) {
                if (t = +t, n = +n, this._point) {
                    var r = this._x2 - t, i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        e.i(u.b)(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, n.a = function t(n) {
            function e(t) {
                return n ? new r(t, n) : new i.b(t, 0)
            }

            return e.alpha = function (n) {
                return t(+n)
            }, e
        }(.5)
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._alpha = n
        }

        var i = e(86), a = e(43);
        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                if (t = +t, n = +n, this._point) {
                    var r = this._x2 - t, i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        e.i(a.b)(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, n.a = function t(n) {
            function e(t) {
                return n ? new r(t, n) : new i.b(t, 0)
            }

            return e.alpha = function (n) {
                return t(+n)
            }, e
        }(.5)
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        var i = e(26);
        r.prototype = {
            areaStart: i.a, areaEnd: i.a, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                this._point && this._context.closePath()
            }, point: function (t, n) {
                t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
            }
        }, n.a = function (t) {
            return new r(t)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t < 0 ? -1 : 1
        }

        function i(t, n, e) {
            var i = t._x1 - t._x0, a = n - t._x1, u = (t._y1 - t._y0) / (i || a < 0 && -0),
                c = (e - t._y1) / (a || i < 0 && -0), o = (u * a + c * i) / (i + a);
            return (r(u) + r(c)) * Math.min(Math.abs(u), Math.abs(c), .5 * Math.abs(o)) || 0
        }

        function a(t, n) {
            var e = t._x1 - t._x0;
            return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
        }

        function u(t, n, e) {
            var r = t._x0, i = t._y0, a = t._x1, u = t._y1, c = (a - r) / 3;
            t._context.bezierCurveTo(r + c, i + c * n, a - c, u - c * e, a, u)
        }

        function c(t) {
            this._context = t
        }

        function o(t) {
            this._context = new s(t)
        }

        function s(t) {
            this._context = t
        }

        function f(t) {
            return new c(t)
        }

        function l(t) {
            return new o(t)
        }

        n.a = f, n.b = l, c.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        u(this, this._t0, a(this, this._t0))
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, n) {
                var e = NaN;
                if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, u(this, a(this, e = i(this, t, n)), e);
                            break;
                        default:
                            u(this, this._t0, e = i(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                }
            }
        }, (o.prototype = Object.create(c.prototype)).point = function (t, n) {
            c.prototype.point.call(this, n, t)
        }, s.prototype = {
            moveTo: function (t, n) {
                this._context.moveTo(n, t)
            }, closePath: function () {
                this._context.closePath()
            }, lineTo: function (t, n) {
                this._context.lineTo(n, t)
            }, bezierCurveTo: function (t, n, e, r, i, a) {
                this._context.bezierCurveTo(n, t, r, e, a, i)
            }
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            this._context = t
        }

        function i(t) {
            var n, e, r = t.length - 1, i = new Array(r), a = new Array(r), u = new Array(r);
            for (i[0] = 0, a[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, a[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
            for (i[r - 1] = 2, a[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / a[n - 1], a[n] -= e, u[n] -= e * u[n - 1];
            for (i[r - 1] = u[r - 1] / a[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / a[n];
            for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) a[n] = 2 * t[n + 1] - i[n + 1];
            return [i, a]
        }

        r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x = [], this._y = []
            }, lineEnd: function () {
                var t = this._x, n = this._y, e = t.length;
                if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]); else for (var r = i(t), a = i(n), u = 0, c = 1; c < e; ++u, ++c) this._context.bezierCurveTo(r[0][u], a[0][u], r[1][u], a[1][u], t[c], n[c]);
                (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            }, point: function (t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        }, n.a = function (t) {
            return new r(t)
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            this._context = t, this._t = n
        }

        function i(t) {
            return new r(t, 0)
        }

        function a(t) {
            return new r(t, 1)
        }

        n.c = i, n.b = a, r.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x = this._y = NaN, this._point = 0
            }, lineEnd: function () {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
            }, point: function (t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                }
                this._x = t, this._y = n
            }
        }, n.a = function (t) {
            return new r(t, .5)
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
        }
    }, function (t, n, e) {
        "use strict";
        n.a = function (t) {
            return t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return t.source
        }

        function i(t) {
            return t.target
        }

        function a(t) {
            function n() {
                var n, r = d.a.call(arguments), i = a.apply(this, r), f = u.apply(this, r);
                if (s || (s = n = e.i(h.a)()), t(s, +c.apply(this, (r[0] = i, r)), +o.apply(this, r), +c.apply(this, (r[0] = f, r)), +o.apply(this, r)), n) return s = null, n + "" || null
            }

            var a = r, u = i, c = p.a, o = p.b, s = null;
            return n.source = function (t) {
                return arguments.length ? (a = t, n) : a
            }, n.target = function (t) {
                return arguments.length ? (u = t, n) : u
            }, n.x = function (t) {
                return arguments.length ? (c = "function" == typeof t ? t : e.i(_.a)(+t), n) : c
            }, n.y = function (t) {
                return arguments.length ? (o = "function" == typeof t ? t : e.i(_.a)(+t), n) : o
            }, n.context = function (t) {
                return arguments.length ? (s = null == t ? null : t, n) : s
            }, n
        }

        function u(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
        }

        function c(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
        }

        function o(t, n, r, i, a) {
            var u = e.i(v.a)(n, r), c = e.i(v.a)(n, r = (r + a) / 2), o = e.i(v.a)(i, r), s = e.i(v.a)(i, a);
            t.moveTo(u[0], u[1]), t.bezierCurveTo(c[0], c[1], o[0], o[1], s[0], s[1])
        }

        function s() {
            return a(u)
        }

        function f() {
            return a(c)
        }

        function l() {
            var t = a(o);
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
        }

        n.a = s, n.b = f, n.c = l;
        var h = e(13), d = e(84), _ = e(6), p = e(46), v = e(89)
    }, function (t, n, e) {
        "use strict";
        n.a = function (t, n) {
            if ((c = t.length) > 1) for (var e, r, i, a, u, c, o = 0, s = t[n[0]].length; o < s; ++o) for (a = u = 0, e = 0; e < c; ++e) (i = (r = t[n[e]][o])[1] - r[0]) >= 0 ? (r[0] = a, r[1] = a += i) : i < 0 ? (r[1] = u, r[0] = u += i) : r[0] = a
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(17);
        n.a = function (t, n) {
            if ((a = t.length) > 0) {
                for (var i, a, u, c = 0, o = t[0].length; c < o; ++c) {
                    for (u = i = 0; i < a; ++i) u += t[i][c][1] || 0;
                    if (u) for (i = 0; i < a; ++i) t[i][c][1] /= u
                }
                e.i(r.a)(t, n)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(17);
        n.a = function (t, n) {
            if ((i = t.length) > 0) {
                for (var i, a = 0, u = t[n[0]], c = u.length; a < c; ++a) {
                    for (var o = 0, s = 0; o < i; ++o) s += t[o][a][1] || 0;
                    u[a][1] += u[a][0] = -s / 2
                }
                e.i(r.a)(t, n)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(17);
        n.a = function (t, n) {
            if ((u = t.length) > 0 && (a = (i = t[n[0]]).length) > 0) {
                for (var i, a, u, c = 0, o = 1; o < a; ++o) {
                    for (var s = 0, f = 0, l = 0; s < u; ++s) {
                        for (var h = t[n[s]], d = h[o][1] || 0, _ = h[o - 1][1] || 0, p = (d - _) / 2, v = 0; v < s; ++v) {
                            var b = t[n[v]];
                            p += (b[o][1] || 0) - (b[o - 1][1] || 0)
                        }
                        f += d, l += p * d
                    }
                    i[o - 1][1] += i[o - 1][0] = c, f && (c -= l / f)
                }
                i[o - 1][1] += i[o - 1][0] = c, e.i(r.a)(t, n)
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(45);
        n.a = function (t) {
            return e.i(r.a)(t).reverse()
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(18), i = e(45);
        n.a = function (t) {
            var n, a, u = t.length, c = t.map(i.b), o = e.i(r.a)(t).sort(function (t, n) {
                return c[n] - c[t]
            }), s = 0, f = 0, l = [], h = [];
            for (n = 0; n < u; ++n) a = o[n], s < f ? (s += c[a], l.push(a)) : (f += c[a], h.push(a));
            return h.reverse().concat(l)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(18);
        n.a = function (t) {
            return e.i(r.a)(t).reverse()
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(6), i = e(218), a = e(219), u = e(16);
        n.a = function () {
            function t(t) {
                var e, r, i, a, h, d = t.length, _ = 0, p = new Array(d), v = new Array(d),
                    b = +s.apply(this, arguments),
                    y = Math.min(u.c, Math.max(-u.c, f.apply(this, arguments) - b)),
                    g = Math.min(Math.abs(y) / d, l.apply(this, arguments)), x = g * (y < 0 ? -1 : 1);
                for (e = 0; e < d; ++e) (h = v[p[e] = e] = +n(t[e], e, t)) > 0 && (_ += h);
                for (null != c ? p.sort(function (t, n) {
                    return c(v[t], v[n])
                }) : null != o && p.sort(function (n, e) {
                    return o(t[n], t[e])
                }), e = 0, i = _ ? (y - d * x) / _ : 0; e < d; ++e, b = a) r = p[e], h = v[r], a = b + (h > 0 ? h * i : 0) + x, v[r] = {
                    data: t[r],
                    index: e,
                    value: h,
                    startAngle: b,
                    endAngle: a,
                    padAngle: g
                };
                return v
            }

            var n = a.a, c = i.a, o = null, s = e.i(r.a)(0), f = e.i(r.a)(u.c), l = e.i(r.a)(0);
            return t.value = function (i) {
                return arguments.length ? (n = "function" == typeof i ? i : e.i(r.a)(+i), t) : n
            }, t.sortValues = function (n) {
                return arguments.length ? (c = n, o = null, t) : c
            }, t.sort = function (n) {
                return arguments.length ? (o = n, c = null, t) : o
            }, t.startAngle = function (n) {
                return arguments.length ? (s = "function" == typeof n ? n : e.i(r.a)(+n), t) : s
            }, t.endAngle = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : e.i(r.a)(+n), t) : f
            }, t.padAngle = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : e.i(r.a)(+n), t) : l
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t, n) {
            return t[n]
        }

        var i = e(84), a = e(6), u = e(17), c = e(18);
        n.a = function () {
            function t(t) {
                var e, r, i = n.apply(this, arguments), a = t.length, u = i.length, c = new Array(u);
                for (e = 0; e < u; ++e) {
                    for (var l, h = i[e], d = c[e] = new Array(a), _ = 0; _ < a; ++_) d[_] = l = [0, +f(t[_], h, _, t)], l.data = t[_];
                    d.key = h
                }
                for (e = 0, r = o(c); e < u; ++e) c[r[e]].index = e;
                return s(c, r), c
            }

            var n = e.i(a.a)([]), o = c.a, s = u.a, f = r;
            return t.keys = function (r) {
                return arguments.length ? (n = "function" == typeof r ? r : e.i(a.a)(i.a.call(r)), t) : n
            }, t.value = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : e.i(a.a)(+n), t) : f
            }, t.order = function (n) {
                return arguments.length ? (o = null == n ? c.a : "function" == typeof n ? n : e.i(a.a)(i.a.call(n)), t) : o
            }, t.offset = function (n) {
                return arguments.length ? (s = null == n ? u.a : n, t) : s
            }, t
        }
    }, function (t, n, e) {
        "use strict";
        e.d(n, "b", function () {
            return h
        });
        var r = e(13), i = e(90), a = e(91), u = e(92), c = e(94), o = e(93), s = e(95), f = e(96), l = e(6),
            h = [i.a, a.a, u.a, o.a, c.a, s.a, f.a];
        n.a = function () {
            function t() {
                var t;
                if (u || (u = t = e.i(r.a)()), n.apply(this, arguments).draw(u, +a.apply(this, arguments)), t) return u = null, t + "" || null
            }

            var n = e.i(l.a)(i.a), a = e.i(l.a)(64), u = null;
            return t.type = function (r) {
                return arguments.length ? (n = "function" == typeof r ? r : e.i(l.a)(r), t) : n
            }, t.size = function (n) {
                return arguments.length ? (a = "function" == typeof n ? n : e.i(l.a)(+n), t) : a
            }, t.context = function (n) {
                return arguments.length ? (u = null == n ? null : n, t) : u
            }, t
        }
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            var n = new Date(t);
            return isNaN(n) ? null : n
        }

        var i = e(98), a = e(47);
        +new Date("2000-01-01T00:00:00.000Z") || e.i(a.b)(i.a)
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setDate(t.getDate() + n)
        }, function (t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * i.d) / i.b
        }, function (t) {
            return t.getDate() - 1
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            var n = t.getTimezoneOffset() * i.d % i.c;
            n < 0 && (n += i.c), t.setTime(Math.floor((+t - n) / i.c) * i.c + n)
        }, function (t, n) {
            t.setTime(+t + n * i.c)
        }, function (t, n) {
            return (n - t) / i.c
        }, function (t) {
            return t.getHours()
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e.i(r.a)(function () {
        }, function (t, n) {
            t.setTime(+t + n)
        }, function (t, n) {
            return n - t
        });
        i.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? e.i(r.a)(function (n) {
                n.setTime(Math.floor(n / t) * t)
            }, function (n, e) {
                n.setTime(+n + e * t)
            }, function (n, e) {
                return (e - n) / t
            }) : i : null
        }, n.a = i;
        i.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            t.setTime(Math.floor(t / i.d) * i.d)
        }, function (t, n) {
            t.setTime(+t + n * i.d)
        }, function (t, n) {
            return (n - t) / i.d
        }, function (t) {
            return t.getMinutes()
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e.i(r.a)(function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setMonth(t.getMonth() + n)
        }, function (t, n) {
            return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        }, function (t) {
            return t.getMonth()
        });
        n.a = i;
        i.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            t.setTime(Math.floor(t / i.e) * i.e)
        }, function (t, n) {
            t.setTime(+t + n * i.e)
        }, function (t, n) {
            return (n - t) / i.e
        }, function (t) {
            return t.getUTCSeconds()
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + n)
        }, function (t, n) {
            return (n - t) / i.b
        }, function (t) {
            return t.getUTCDate() - 1
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            t.setUTCMinutes(0, 0, 0)
        }, function (t, n) {
            t.setTime(+t + n * i.c)
        }, function (t, n) {
            return (n - t) / i.c
        }, function (t) {
            return t.getUTCHours()
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e(3), a = e.i(r.a)(function (t) {
            t.setUTCSeconds(0, 0)
        }, function (t, n) {
            t.setTime(+t + n * i.d)
        }, function (t, n) {
            return (n - t) / i.d
        }, function (t) {
            return t.getUTCMinutes()
        });
        n.a = a;
        a.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e.i(r.a)(function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCMonth(t.getUTCMonth() + n)
        }, function (t, n) {
            return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
        }, function (t) {
            return t.getUTCMonth()
        });
        n.a = i;
        i.range
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return e.i(i.a)(function (n) {
                n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setUTCDate(t.getUTCDate() + 7 * n)
            }, function (t, n) {
                return (n - t) / a.a
            })
        }

        e.d(n, "a", function () {
            return u
        }), e.d(n, "b", function () {
            return c
        });
        var i = e(0), a = e(3), u = r(0), c = r(1), o = r(2), s = r(3), f = r(4), l = r(5), h = r(6);
        u.range, c.range, o.range, s.range, f.range, l.range, h.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e.i(r.a)(function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n)
        }, function (t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear()
        }, function (t) {
            return t.getUTCFullYear()
        });
        i.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? e.i(r.a)(function (n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
            }, function (n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t)
            }) : null
        }, n.a = i;
        i.range
    }, function (t, n, e) {
        "use strict";

        function r(t) {
            return e.i(i.a)(function (n) {
                n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setDate(t.getDate() + 7 * n)
            }, function (t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * a.d) / a.a
            })
        }

        e.d(n, "a", function () {
            return u
        }), e.d(n, "b", function () {
            return c
        });
        var i = e(0), a = e(3), u = r(0), c = r(1), o = r(2), s = r(3), f = r(4), l = r(5), h = r(6);
        u.range, c.range, o.range, s.range, f.range, l.range, h.range
    }, function (t, n, e) {
        "use strict";
        var r = e(0), i = e.i(r.a)(function (t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function (t, n) {
            return n.getFullYear() - t.getFullYear()
        }, function (t) {
            return t.getFullYear()
        });
        i.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? e.i(r.a)(function (n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
            }, function (n, e) {
                n.setFullYear(n.getFullYear() + e * t)
            }) : null
        }, n.a = i;
        i.range
    }]);
</script>
    `;


exports.css_style_basic = css_style_basic;
exports.css_style_all_questions = css_style_all_questions;
exports.radar_chart_script = radar_chart_script;
exports.css_style_generic_report = css_style_generic_report;
