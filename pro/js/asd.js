$(document).ready(function () {
    $('.card_error').click(function (e) {
        $('.preload').toggleClass('vis');
        $('body').toggleClass('oh');
    });

    $('.hambu').click(function () {
        $('.navleft').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#nav-icon4').toggleClass('open');
    });
    /*toastr options*/
    toastr.options = {
        closeButton: true,
        "positionClass": "toast-bottom-right",
        "timeOut": "300000"/*too long timeout for test*/
    };
    /*end toastr options*/
    $('#agree').click(function () {
        if ($(this).prop("checked") == true) {
            $('.login').removeClass('login_dis')
        } else if ($(this).prop("checked") == false) {
            $('.login').addClass('login_dis')
        }
    });
    $('.menu_parent').click(function () {
        $(this).toggleClass('open');
    });
})

$('#terms_link').click(function () {
    $.scrollTo($('#terms'), 1000, {axis: 'y', offset: -140});


});

$(window).on("load", function () {
    setTimeout(function () {
        $('body').removeClass('oh');
        $('.preload').removeClass('vis');
    }, 1);
});


const $menu = $('.menu_parent');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $menu.removeClass('open');
    }
});
var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['PRE_ENABLED ', 270],
            ['ENABLED', 320],
            ['REMOVE', 200],
            ['EXPIRED', 550],
            ['VIN_SPENT', 550]
        ],
        type: 'donut'
    },
    donut: {
        title: "100% ENABLED"
    },
    color: {
        pattern: [
            'rgb(121, 115, 62)',
            'rgb(69, 91, 58)',
            'rgb(125, 68, 40)',
            'rgb(102, 33, 33)',
            '#404040']
    },
    legend: {
        padding: 20,
        inset: {
            anchor: 'top-left',
            x: 10,
            y: 0,
            step: undefined
        },
        position: 'right'
    },
    padding: {
        bottom: 40
    }
});
$(window).on("resize", function () {
    console.log('zxc');
    chart.transform('pie');
    chart.load({
        legend: {
            position: 'bottom'
        }
    });
});


(window.webpackJsonp = window.webpackJsonp || []).push([["proposal"], {
    "+2oP": function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("hh1v"), a = n("6LWA"), o = n("I8vh"), s = n("UMSQ"), l = n("/GqU"), c = n("hBjN"),
            u = n("tiKp"), h = n("Hd5f")("slice"), d = u("species"), f = [].slice, p = Math.max;
        r({target: "Array", proto: !0, forced: !h}, {
            slice: function (t, e) {
                var n, r, u, h = l(this), g = s(h.length), y = o(t, g), _ = o(void 0 === e ? g : e, g);
                if (a(h) && ("function" != typeof (n = h.constructor) || n !== Array && !a(n.prototype) ? i(n) && null === (n = n[d]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return f.call(h, y, _);
                for (r = new (void 0 === n ? Array : n)(p(_ - y, 0)), u = 0; y < _; y++, u++) y in h && c(r, u, h[y]);
                return r.length = u, r
            }
        })
    }, "/byt": function (t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, "07d7": function (t, e, n) {
        var r = n("AO7/"), i = n("busE"), a = n("sEFX");
        r || i(Object.prototype, "toString", a, {unsafe: !0})
    }, "0oug": function (t, e, n) {
        n("dG/n")("iterator")
    }, "0rvr": function (t, e, n) {
        var r = n("glrk"), i = n("O741");
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1, n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {
            }
            return function (n, a) {
                return r(n), i(a), e ? t.call(n, a) : n.__proto__ = a, n
            }
        }() : void 0)
    }, "14Sl": function (t, e, n) {
        "use strict";
        n("rB9j");
        var r = n("busE"), i = n("0Dky"), a = n("tiKp"), o = n("kmMV"), s = n("kRJp"), l = a("species"),
            c = !i((function () {
                var t = /./;
                return t.exec = function () {
                    var t = [];
                    return t.groups = {a: "7"}, t
                }, "7" !== "".replace(t, "$<a>")
            })), u = "$0" === "a".replace(/./, "$0"), h = a("replace"), d = !!/./[h] && "" === /./[h]("a", "$0"),
            f = !i((function () {
                var t = /(?:)/, e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments)
                };
                var n = "ab".split(t);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            }));
        t.exports = function (t, e, n, h) {
            var p = a(t), g = !i((function () {
                var e = {};
                return e[p] = function () {
                    return 7
                }, 7 != ""[t](e)
            })), y = g && !i((function () {
                var e = !1, n = /a/;
                return "split" === t && ((n = {}).constructor = {}, n.constructor[l] = function () {
                    return n
                }, n.flags = "", n[p] = /./[p]), n.exec = function () {
                    return e = !0, null
                }, n[p](""), !e
            }));
            if (!g || !y || "replace" === t && (!c || !u || d) || "split" === t && !f) {
                var _ = /./[p], v = n(p, ""[t], (function (t, e, n, r, i) {
                    return e.exec === o ? g && !i ? {done: !0, value: _.call(e, n, r)} : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {done: !1}
                }), {REPLACE_KEEPS_$0: u, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d}), m = v[0], x = v[1];
                r(String.prototype, t, m), r(RegExp.prototype, p, 2 == e ? function (t, e) {
                    return x.call(t, this, e)
                } : function (t) {
                    return x.call(t, this)
                })
            }
            h && s(RegExp.prototype[p], "sham", !0)
        }
    }, "1E5z": function (t, e, n) {
        var r = n("m/L8").f, i = n("UTVS"), a = n("tiKp")("toStringTag");
        t.exports = function (t, e, n) {
            t && !i(t = n ? t : t.prototype, a) && r(t, a, {configurable: !0, value: e})
        }
    }, "1Y/n": function (t, e, n) {
        var r = n("HAuM"), i = n("ewvW"), a = n("RK3t"), o = n("UMSQ"), s = function (t) {
            return function (e, n, s, l) {
                r(n);
                var c = i(e), u = a(c), h = o(c.length), d = t ? h - 1 : 0, f = t ? -1 : 1;
                if (s < 2) for (; ;) {
                    if (d in u) {
                        l = u[d], d += f;
                        break
                    }
                    if (d += f, t ? d < 0 : h <= d) throw TypeError("Reduce of empty array with no initial value")
                }
                for (; t ? d >= 0 : h > d; d += f) d in u && (l = n(l, u[d], d, c));
                return l
            }
        };
        t.exports = {left: s(!1), right: s(!0)}
    }, "2B1R": function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("tycR").map;
        r({target: "Array", proto: !0, forced: !n("Hd5f")("map")}, {
            map: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, "3bBZ": function (t, e, n) {
        var r = n("2oRo"), i = n("/byt"), a = n("4mDm"), o = n("kRJp"), s = n("tiKp"), l = s("iterator"),
            c = s("toStringTag"), u = a.values;
        for (var h in i) {
            var d = r[h], f = d && d.prototype;
            if (f) {
                if (f[l] !== u) try {
                    o(f, l, u)
                } catch (t) {
                    f[l] = u
                }
                if (f[c] || o(f, c, h), i[h]) for (var p in a) if (f[p] !== a[p]) try {
                    o(f, p, a[p])
                } catch (t) {
                    f[p] = a[p]
                }
            }
        }
    }, "4Brf": function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("g6v/"), a = n("2oRo"), o = n("UTVS"), s = n("hh1v"), l = n("m/L8").f, c = n("6JNq"),
            u = a.Symbol;
        if (i && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
            var h = {}, d = function () {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof d ? new u(t) : void 0 === t ? u() : u(t);
                return "" === t && (h[e] = !0), e
            };
            c(d, u);
            var f = d.prototype = u.prototype;
            f.constructor = d;
            var p = f.toString, g = "Symbol(test)" == String(u("test")), y = /^Symbol\((.*)\)[^)]+$/;
            l(f, "description", {
                configurable: !0, get: function () {
                    var t = s(this) ? this.valueOf() : this, e = p.call(t);
                    if (o(h, t)) return "";
                    var n = g ? e.slice(7, -1) : e.replace(y, "$1");
                    return "" === n ? void 0 : n
                }
            }), r({global: !0, forced: !0}, {Symbol: d})
        }
    }, "4WOD": function (t, e, n) {
        var r = n("UTVS"), i = n("ewvW"), a = n("93I0"), o = n("4Xet"), s = a("IE_PROTO"), l = Object.prototype;
        t.exports = o ? Object.getPrototypeOf : function (t) {
            return t = i(t), r(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null
        }
    }, "4Xet": function (t, e, n) {
        var r = n("0Dky");
        t.exports = !r((function () {
            function t() {
            }

            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        }))
    }, "4l63": function (t, e, n) {
        var r = n("I+eb"), i = n("wg0c");
        r({global: !0, forced: parseInt != i}, {parseInt: i})
    }, "4mDm": function (t, e, n) {
        "use strict";
        var r = n("/GqU"), i = n("RNIs"), a = n("P4y1"), o = n("afO8"), s = n("fdAy"), l = o.set,
            c = o.getterFor("Array Iterator");
        t.exports = s(Array, "Array", (function (t, e) {
            l(this, {type: "Array Iterator", target: r(t), index: 0, kind: e})
        }), (function () {
            var t = c(this), e = t.target, n = t.kind, r = t.index++;
            return !e || r >= e.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {value: e[r], done: !1} : {value: [r, e[r]], done: !1}
        }), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
    }, "5Tg+": function (t, e, n) {
        var r = n("tiKp");
        e.f = r
    }, "6VoE": function (t, e, n) {
        var r = n("tiKp"), i = n("P4y1"), a = r("iterator"), o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (i.Array === t || o[a] === t)
        }
    }, "9d/t": function (t, e, n) {
        var r = n("AO7/"), i = n("xrYK"), a = n("tiKp")("toStringTag"), o = "Arguments" == i(function () {
            return arguments
        }());
        t.exports = r ? i : function (t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {
                }
            }(e = Object(t), a)) ? n : o ? i(e) : "Object" == (r = i(e)) && "function" == typeof e.callee ? "Arguments" : r
        }
    }, "AO7/": function (t, e, n) {
        var r = {};
        r[n("tiKp")("toStringTag")] = "z", t.exports = "[object z]" === String(r)
    }, "BX/b": function (t, e, n) {
        var r = n("/GqU"), i = n("JBy8").f, a = {}.toString,
            o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return o && "[object Window]" == a.call(t) ? function (t) {
                try {
                    return i(t)
                } catch (t) {
                    return o.slice()
                }
            }(t) : i(r(t))
        }
    }, DLK6: function (t, e, n) {
        var r = n("ewvW"), i = Math.floor, a = "".replace, o = /\$([$&'`]|\d\d?|<[^>]*>)/g, s = /\$([$&'`]|\d\d?)/g;
        t.exports = function (t, e, n, l, c, u) {
            var h = n + t.length, d = l.length, f = s;
            return void 0 !== c && (c = r(c), f = o), a.call(u, f, (function (r, a) {
                var o;
                switch (a.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return t;
                    case"`":
                        return e.slice(0, n);
                    case"'":
                        return e.slice(h);
                    case"<":
                        o = c[a.slice(1, -1)];
                        break;
                    default:
                        var s = +a;
                        if (0 === s) return r;
                        if (s > d) {
                            var u = i(s / 10);
                            return 0 === u ? r : u <= d ? void 0 === l[u - 1] ? a.charAt(1) : l[u - 1] + a.charAt(1) : r
                        }
                        o = l[s - 1]
                }
                return void 0 === o ? "" : o
            }))
        }
    }, DMt2: function (t, e, n) {
        var r = n("UMSQ"), i = n("EUja"), a = n("HYAF"), o = Math.ceil, s = function (t) {
            return function (e, n, s) {
                var l, c, u = String(a(e)), h = u.length, d = void 0 === s ? " " : String(s), f = r(n);
                return f <= h || "" == d ? u : (l = f - h, (c = i.call(d, o(l / d.length))).length > l && (c = c.slice(0, l)), t ? u + c : c + u)
            }
        };
        t.exports = {start: s(!1), end: s(!0)}
    }, DQNa: function (t, e, n) {
        var r = n("busE"), i = Date.prototype, a = i.toString, o = i.getTime;
        new Date(NaN) + "" != "Invalid Date" && r(i, "toString", (function () {
            var t = o.call(this);
            return t == t ? a.call(this) : "Invalid Date"
        }))
    }, E9XD: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("1Y/n").left, a = n("pkCn"), o = n("LQDL"), s = n("YF1G");
        r({target: "Array", proto: !0, forced: !a("reduce") || !s && o > 79 && o < 83}, {
            reduce: function (t) {
                return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, ELEc: function (t, e, n) {
    }, EUja: function (t, e, n) {
        "use strict";
        var r = n("ppGB"), i = n("HYAF");
        t.exports = "".repeat || function (t) {
            var e = String(i(this)), n = "", a = r(t);
            if (a < 0 || a == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; a > 0; (a >>>= 1) && (e += e)) 1 & a && (n += e);
            return n
        }
    }, EnZy: function (t, e, n) {
        "use strict";
        var r = n("14Sl"), i = n("ROdP"), a = n("glrk"), o = n("HYAF"), s = n("SEBh"), l = n("iqWW"), c = n("UMSQ"),
            u = n("FMNM"), h = n("kmMV"), d = n("0Dky"), f = [].push, p = Math.min, g = !d((function () {
                return !RegExp(4294967295, "y")
            }));
        r("split", 2, (function (t, e, n) {
            var r;
            return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
                var r = String(o(this)), a = void 0 === n ? 4294967295 : n >>> 0;
                if (0 === a) return [];
                if (void 0 === t) return [r];
                if (!i(t)) return e.call(r, t, a);
                for (var s, l, c, u = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, g = new RegExp(t.source, d + "g"); (s = h.call(g, r)) && !((l = g.lastIndex) > p && (u.push(r.slice(p, s.index)), s.length > 1 && s.index < r.length && f.apply(u, s.slice(1)), c = s[0].length, p = l, u.length >= a));) g.lastIndex === s.index && g.lastIndex++;
                return p === r.length ? !c && g.test("") || u.push("") : u.push(r.slice(p)), u.length > a ? u.slice(0, a) : u
            } : "0".split(void 0, 0).length ? function (t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n)
            } : e, [function (e, n) {
                var i = o(this), a = null == e ? void 0 : e[t];
                return void 0 !== a ? a.call(e, i, n) : r.call(String(i), e, n)
            }, function (t, i) {
                var o = n(r, t, this, i, r !== e);
                if (o.done) return o.value;
                var h = a(t), d = String(this), f = s(h, RegExp), y = h.unicode,
                    _ = (h.ignoreCase ? "i" : "") + (h.multiline ? "m" : "") + (h.unicode ? "u" : "") + (g ? "y" : "g"),
                    v = new f(g ? h : "^(?:" + h.source + ")", _), m = void 0 === i ? 4294967295 : i >>> 0;
                if (0 === m) return [];
                if (0 === d.length) return null === u(v, d) ? [d] : [];
                for (var x = 0, w = 0, b = []; w < d.length;) {
                    v.lastIndex = g ? w : 0;
                    var S, T = u(v, g ? d : d.slice(w));
                    if (null === T || (S = p(c(v.lastIndex + (g ? 0 : w)), d.length)) === x) w = l(d, w, y); else {
                        if (b.push(d.slice(x, w)), b.length === m) return b;
                        for (var A = 1; A <= T.length - 1; A++) if (b.push(T[A]), b.length === m) return b;
                        w = x = S
                    }
                }
                return b.push(d.slice(x)), b
            }]
        }), !g)
    }, F8JR: function (t, e, n) {
        "use strict";
        var r = n("tycR").forEach, i = n("pkCn")("forEach");
        t.exports = i ? [].forEach : function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }, FMNM: function (t, e, n) {
        var r = n("xrYK"), i = n("kmMV");
        t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var a = n.call(t, e);
                if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                return a
            }
            if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return i.call(t, e)
        }
    }, FZtP: function (t, e, n) {
        var r = n("2oRo"), i = n("/byt"), a = n("F8JR"), o = n("kRJp");
        for (var s in i) {
            var l = r[s], c = l && l.prototype;
            if (c && c.forEach !== a) try {
                o(c, "forEach", a)
            } catch (t) {
                c.forEach = a
            }
        }
    }, FlOX: function (t, e, n) {
        var r, i;
        /*! DataTables 1.10.23
         * ©2008-2020 SpryMedia Ltd - datatables.net/license
         */
        !function (a) {
            "use strict";
            r = [n("EVdn")], void 0 === (i = function (t) {
                return function (t, e, n, r) {
                    var i, a, o, s, l = function (e) {
                            this.$ = function (t, e) {
                                return this.api(!0).$(t, e)
                            }, this._ = function (t, e) {
                                return this.api(!0).rows(t, e).data()
                            }, this.api = function (t) {
                                return new a(t ? se(this[i.iApiIndex]) : this)
                            }, this.fnAddData = function (e, n) {
                                var i = this.api(!0),
                                    a = Array.isArray(e) && (Array.isArray(e[0]) || t.isPlainObject(e[0])) ? i.rows.add(e) : i.row.add(e);
                                return (n === r || n) && i.draw(), a.flatten().toArray()
                            }, this.fnAdjustColumnSizing = function (t) {
                                var e = this.api(!0).columns.adjust(), n = e.settings()[0], i = n.oScroll;
                                t === r || t ? e.draw(!1) : "" === i.sX && "" === i.sY || Xt(n)
                            }, this.fnClearTable = function (t) {
                                var e = this.api(!0).clear();
                                (t === r || t) && e.draw()
                            }, this.fnClose = function (t) {
                                this.api(!0).row(t).child.hide()
                            }, this.fnDeleteRow = function (t, e, n) {
                                var i = this.api(!0), a = i.rows(t), o = a.settings()[0], s = o.aoData[a[0][0]];
                                return a.remove(), e && e.call(this, o, s), (n === r || n) && i.draw(), s
                            }, this.fnDestroy = function (t) {
                                this.api(!0).destroy(t)
                            }, this.fnDraw = function (t) {
                                this.api(!0).draw(t)
                            }, this.fnFilter = function (t, e, n, i, a, o) {
                                var s = this.api(!0);
                                null === e || e === r ? s.search(t, n, i, o) : s.column(e).search(t, n, i, o), s.draw()
                            }, this.fnGetData = function (t, e) {
                                var n = this.api(!0);
                                if (t !== r) {
                                    var i = t.nodeName ? t.nodeName.toLowerCase() : "";
                                    return e !== r || "td" == i || "th" == i ? n.cell(t, e).data() : n.row(t).data() || null
                                }
                                return n.data().toArray()
                            }, this.fnGetNodes = function (t) {
                                var e = this.api(!0);
                                return t !== r ? e.row(t).node() : e.rows().nodes().flatten().toArray()
                            }, this.fnGetPosition = function (t) {
                                var e = this.api(!0), n = t.nodeName.toUpperCase();
                                if ("TR" == n) return e.row(t).index();
                                if ("TD" == n || "TH" == n) {
                                    var r = e.cell(t).index();
                                    return [r.row, r.columnVisible, r.column]
                                }
                                return null
                            }, this.fnIsOpen = function (t) {
                                return this.api(!0).row(t).child.isShown()
                            }, this.fnOpen = function (t, e, n) {
                                return this.api(!0).row(t).child(e, n).show().child()[0]
                            }, this.fnPageChange = function (t, e) {
                                var n = this.api(!0).page(t);
                                (e === r || e) && n.draw(!1)
                            }, this.fnSetColumnVis = function (t, e, n) {
                                var i = this.api(!0).column(t).visible(e);
                                (n === r || n) && i.columns.adjust().draw()
                            }, this.fnSettings = function () {
                                return se(this[i.iApiIndex])
                            }, this.fnSort = function (t) {
                                this.api(!0).order(t).draw()
                            }, this.fnSortListener = function (t, e, n) {
                                this.api(!0).order.listener(t, e, n)
                            }, this.fnUpdate = function (t, e, n, i, a) {
                                var o = this.api(!0);
                                return n === r || null === n ? o.row(e).data(t) : o.cell(e, n).data(t), (a === r || a) && o.columns.adjust(), (i === r || i) && o.draw(), 0
                            }, this.fnVersionCheck = i.fnVersionCheck;
                            var n = this, o = e === r, s = this.length;
                            for (var c in o && (e = {}), this.oApi = this.internal = i.internal, l.ext.internal) c && (this[c] = Me(c));
                            return this.each((function () {
                                var i, a = s > 1 ? ue({}, e, !0) : e, c = 0, u = this.getAttribute("id"), h = !1,
                                    d = l.defaults, f = t(this);
                                if ("table" == this.nodeName.toLowerCase()) {
                                    E(d), k(d.column), D(d, d, !0), D(d.column, d.column, !0), D(d, t.extend(a, f.data()), !0);
                                    var p = l.settings;
                                    for (c = 0, i = p.length; c < i; c++) {
                                        var g = p[c];
                                        if (g.nTable == this || g.nTHead && g.nTHead.parentNode == this || g.nTFoot && g.nTFoot.parentNode == this) {
                                            var y = a.bRetrieve !== r ? a.bRetrieve : d.bRetrieve,
                                                _ = a.bDestroy !== r ? a.bDestroy : d.bDestroy;
                                            if (o || y) return g.oInstance;
                                            if (_) {
                                                g.oInstance.fnDestroy();
                                                break
                                            }
                                            return void le(g, 0, "Cannot reinitialise DataTable", 3)
                                        }
                                        if (g.sTableId == this.id) {
                                            p.splice(c, 1);
                                            break
                                        }
                                    }
                                    null !== u && "" !== u || (u = "DataTables_Table_" + l.ext._unique++, this.id = u);
                                    var v = t.extend(!0, {}, l.models.oSettings, {
                                        sDestroyWidth: f[0].style.width,
                                        sInstance: u,
                                        sTableId: u
                                    });
                                    v.nTable = this, v.oApi = n.internal, v.oInit = a, p.push(v), v.oInstance = 1 === n.length ? n : f.dataTable(), E(a), L(a.oLanguage), a.aLengthMenu && !a.iDisplayLength && (a.iDisplayLength = Array.isArray(a.aLengthMenu[0]) ? a.aLengthMenu[0][0] : a.aLengthMenu[0]), a = ue(t.extend(!0, {}, d), a), ce(v.oFeatures, a, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), ce(v, a, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]), ce(v.oScroll, a, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]), ce(v.oLanguage, a, "fnInfoCallback"), de(v, "aoDrawCallback", a.fnDrawCallback, "user"), de(v, "aoServerParams", a.fnServerParams, "user"), de(v, "aoStateSaveParams", a.fnStateSaveParams, "user"), de(v, "aoStateLoadParams", a.fnStateLoadParams, "user"), de(v, "aoStateLoaded", a.fnStateLoaded, "user"), de(v, "aoRowCallback", a.fnRowCallback, "user"), de(v, "aoRowCreatedCallback", a.fnCreatedRow, "user"), de(v, "aoHeaderCallback", a.fnHeaderCallback, "user"), de(v, "aoFooterCallback", a.fnFooterCallback, "user"), de(v, "aoInitComplete", a.fnInitComplete, "user"), de(v, "aoPreDrawCallback", a.fnPreDrawCallback, "user"), v.rowIdFn = Z(a.rowId), V(v);
                                    var m = v.oClasses;
                                    if (t.extend(m, l.ext.classes, a.oClasses), f.addClass(m.sTable), v.iInitDisplayStart === r && (v.iInitDisplayStart = a.iDisplayStart, v._iDisplayStart = a.iDisplayStart), null !== a.iDeferLoading) {
                                        v.bDeferLoading = !0;
                                        var x = Array.isArray(a.iDeferLoading);
                                        v._iRecordsDisplay = x ? a.iDeferLoading[0] : a.iDeferLoading, v._iRecordsTotal = x ? a.iDeferLoading[1] : a.iDeferLoading
                                    }
                                    var w = v.oLanguage;
                                    t.extend(!0, w, a.oLanguage), w.sUrl && (t.ajax({
                                        dataType: "json",
                                        url: w.sUrl,
                                        success: function (e) {
                                            L(e), D(d.oLanguage, e), t.extend(!0, w, e), Rt(v)
                                        },
                                        error: function () {
                                            Rt(v)
                                        }
                                    }), h = !0), null === a.asStripeClasses && (v.asStripeClasses = [m.sStripeOdd, m.sStripeEven]);
                                    var b = v.asStripeClasses, S = f.children("tbody").find("tr").eq(0);
                                    -1 !== t.inArray(!0, t.map(b, (function (t, e) {
                                        return S.hasClass(t)
                                    }))) && (t("tbody tr", this).removeClass(b.join(" ")), v.asDestroyStripes = b.slice());
                                    var T, A = [], C = this.getElementsByTagName("thead");
                                    if (0 !== C.length && (dt(v.aoHeader, C[0]), A = ft(v)), null === a.aoColumns) for (T = [], c = 0, i = A.length; c < i; c++) T.push(null); else T = a.aoColumns;
                                    for (c = 0, i = T.length; c < i; c++) M(v, A ? A[c] : null);
                                    if (X(v, a.aoColumnDefs, T, (function (t, e) {
                                        O(v, t, e)
                                    })), S.length) {
                                        var P = function (t, e) {
                                            return null !== t.getAttribute("data-" + e) ? e : null
                                        };
                                        t(S[0]).children("th, td").each((function (t, e) {
                                            var n = v.aoColumns[t];
                                            if (n.mData === t) {
                                                var i = P(e, "sort") || P(e, "order"), a = P(e, "filter") || P(e, "search");
                                                null === i && null === a || (n.mData = {
                                                    _: t + ".display",
                                                    sort: null !== i ? t + ".@data-" + i : r,
                                                    type: null !== i ? t + ".@data-" + i : r,
                                                    filter: null !== a ? t + ".@data-" + a : r
                                                }, O(v, t))
                                            }
                                        }))
                                    }
                                    var I = v.oFeatures, R = function () {
                                        if (a.aaSorting === r) {
                                            var e = v.aaSorting;
                                            for (c = 0, i = e.length; c < i; c++) e[c][1] = v.aoColumns[c].asSorting[0]
                                        }
                                        re(v), I.bSort && de(v, "aoDrawCallback", (function () {
                                            if (v.bSorted) {
                                                var e = Zt(v), n = {};
                                                t.each(e, (function (t, e) {
                                                    n[e.src] = e.dir
                                                })), fe(v, null, "order", [v, e, n]), te(v)
                                            }
                                        })), de(v, "aoDrawCallback", (function () {
                                            (v.bSorted || "ssp" === ye(v) || I.bDeferRender) && re(v)
                                        }), "sc");
                                        var n = f.children("caption").each((function () {
                                            this._captionSide = t(this).css("caption-side")
                                        })), o = f.children("thead");
                                        0 === o.length && (o = t("<thead/>").appendTo(f)), v.nTHead = o[0];
                                        var s = f.children("tbody");
                                        0 === s.length && (s = t("<tbody/>").appendTo(f)), v.nTBody = s[0];
                                        var l = f.children("tfoot");
                                        if (0 === l.length && n.length > 0 && ("" !== v.oScroll.sX || "" !== v.oScroll.sY) && (l = t("<tfoot/>").appendTo(f)), 0 === l.length || 0 === l.children().length ? f.addClass(m.sNoFooter) : l.length > 0 && (v.nTFoot = l[0], dt(v.aoFooter, v.nTFoot)), a.aaData) for (c = 0; c < a.aaData.length; c++) B(v, a.aaData[c]); else (v.bDeferLoading || "dom" == ye(v)) && Y(v, t(v.nTBody).children("tr"));
                                        v.aiDisplay = v.aiDisplayMaster.slice(), v.bInitialised = !0, !1 === h && Rt(v)
                                    };
                                    a.bStateSave ? (I.bStateSave = !0, de(v, "aoDrawCallback", ae, "state_save"), oe(v, a, R)) : R()
                                } else le(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2)
                            })), n = null, this
                        }, c = {}, u = /[\r\n\u2028]/g, h = /<.*?>/g,
                        d = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
                        f = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
                        p = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, g = function (t) {
                            return !t || !0 === t || "-" === t
                        }, y = function (t) {
                            var e = parseInt(t, 10);
                            return !isNaN(e) && isFinite(t) ? e : null
                        }, _ = function (t, e) {
                            return c[e] || (c[e] = new RegExp(At(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(c[e], ".") : t
                        }, v = function (t, e, n) {
                            var r = "string" == typeof t;
                            return !!g(t) || (e && r && (t = _(t, e)), n && r && (t = t.replace(p, "")), !isNaN(parseFloat(t)) && isFinite(t))
                        }, m = function (t, e, n) {
                            return !!g(t) || (function (t) {
                                return g(t) || "string" == typeof t
                            }(t) && !!v(T(t), e, n) || null)
                        }, x = function (t, e, n) {
                            var i = [], a = 0, o = t.length;
                            if (n !== r) for (; a < o; a++) t[a] && t[a][e] && i.push(t[a][e][n]); else for (; a < o; a++) t[a] && i.push(t[a][e]);
                            return i
                        }, w = function (t, e, n, i) {
                            var a = [], o = 0, s = e.length;
                            if (i !== r) for (; o < s; o++) t[e[o]][n] && a.push(t[e[o]][n][i]); else for (; o < s; o++) a.push(t[e[o]][n]);
                            return a
                        }, b = function (t, e) {
                            var n, i = [];
                            e === r ? (e = 0, n = t) : (n = e, e = t);
                            for (var a = e; a < n; a++) i.push(a);
                            return i
                        }, S = function (t) {
                            for (var e = [], n = 0, r = t.length; n < r; n++) t[n] && e.push(t[n]);
                            return e
                        }, T = function (t) {
                            return t.replace(h, "")
                        }, A = function (t) {
                            if (function (t) {
                                if (t.length < 2) return !0;
                                for (var e = t.slice().sort(), n = e[0], r = 1, i = e.length; r < i; r++) {
                                    if (e[r] === n) return !1;
                                    n = e[r]
                                }
                                return !0
                            }(t)) return t.slice();
                            var e, n, r, i = [], a = t.length, o = 0;
                            t:for (n = 0; n < a; n++) {
                                for (e = t[n], r = 0; r < o; r++) if (i[r] === e) continue t;
                                i.push(e), o++
                            }
                            return i
                        }, C = function (t, e) {
                            if (Array.isArray(e)) for (var n = 0; n < e.length; n++) C(t, e[n]); else t.push(e);
                            return t
                        };
                    Array.isArray || (Array.isArray = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    });
                    String.prototype.trim || (String.prototype.trim = function () {
                        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    });

                    function P(e) {
                        var n, r, i = {};
                        t.each(e, (function (t, a) {
                            (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (r = t.replace(n[0], n[2].toLowerCase()), i[r] = t, "o" === n[1] && P(e[t]))
                        })), e._hungarianMap = i
                    }

                    function D(e, n, i) {
                        var a;
                        e._hungarianMap || P(e), t.each(n, (function (o, s) {
                            (a = e._hungarianMap[o]) === r || !i && n[a] !== r || ("o" === a.charAt(0) ? (n[a] || (n[a] = {}), t.extend(!0, n[a], n[o]), D(e[a], n[a], i)) : n[a] = n[o])
                        }))
                    }

                    function L(t) {
                        var e = l.defaults.oLanguage, n = e.sDecimal;
                        if (n && Ve(n), t) {
                            var r = t.sZeroRecords;
                            !t.sEmptyTable && r && "No data available in table" === e.sEmptyTable && ce(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && r && "Loading..." === e.sLoadingRecords && ce(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
                            var i = t.sDecimal;
                            i && n !== i && Ve(i)
                        }
                    }

                    l.util = {
                        throttle: function (t, e) {
                            var n, i, a = e !== r ? e : 200;
                            return function () {
                                var e = this, o = +new Date, s = arguments;
                                n && o < n + a ? (clearTimeout(i), i = setTimeout((function () {
                                    n = r, t.apply(e, s)
                                }), a)) : (n = o, t.apply(e, s))
                            }
                        }, escapeRegex: function (t) {
                            return t.replace(f, "\\$1")
                        }
                    };
                    var I = function (t, e, n) {
                        t[e] !== r && (t[n] = t[e])
                    };

                    function E(t) {
                        I(t, "ordering", "bSort"), I(t, "orderMulti", "bSortMulti"), I(t, "orderClasses", "bSortClasses"), I(t, "orderCellsTop", "bSortCellsTop"), I(t, "order", "aaSorting"), I(t, "orderFixed", "aaSortingFixed"), I(t, "paging", "bPaginate"), I(t, "pagingType", "sPaginationType"), I(t, "pageLength", "iDisplayLength"), I(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
                        var e = t.aoSearchCols;
                        if (e) for (var n = 0, r = e.length; n < r; n++) e[n] && D(l.models.oSearch, e[n])
                    }

                    function k(t) {
                        I(t, "orderable", "bSortable"), I(t, "orderData", "aDataSort"), I(t, "orderSequence", "asSorting"), I(t, "orderDataType", "sortDataType");
                        var e = t.aDataSort;
                        "number" != typeof e || Array.isArray(e) || (t.aDataSort = [e])
                    }

                    function V(n) {
                        if (!l.__browser) {
                            var r = {};
                            l.__browser = r;
                            var i = t("<div/>").css({
                                    position: "fixed",
                                    top: 0,
                                    left: -1 * t(e).scrollLeft(),
                                    height: 1,
                                    width: 1,
                                    overflow: "hidden"
                                }).append(t("<div/>").css({
                                    position: "absolute",
                                    top: 1,
                                    left: 1,
                                    width: 100,
                                    overflow: "scroll"
                                }).append(t("<div/>").css({width: "100%", height: 10}))).appendTo("body"), a = i.children(),
                                o = a.children();
                            r.barWidth = a[0].offsetWidth - a[0].clientWidth, r.bScrollOversize = 100 === o[0].offsetWidth && 100 !== a[0].clientWidth, r.bScrollbarLeft = 1 !== Math.round(o.offset().left), r.bBounding = !!i[0].getBoundingClientRect().width, i.remove()
                        }
                        t.extend(n.oBrowser, l.__browser), n.oScroll.iBarWidth = l.__browser.barWidth
                    }

                    function R(t, e, n, i, a, o) {
                        var s, l = i, c = !1;
                        for (n !== r && (s = n, c = !0); l !== a;) t.hasOwnProperty(l) && (s = c ? e(s, t[l], l, t) : t[l], c = !0, l += o);
                        return s
                    }

                    function M(e, r) {
                        var i = l.defaults.column, a = e.aoColumns.length, o = t.extend({}, l.models.oColumn, i, {
                            nTh: r || n.createElement("th"),
                            sTitle: i.sTitle ? i.sTitle : r ? r.innerHTML : "",
                            aDataSort: i.aDataSort ? i.aDataSort : [a],
                            mData: i.mData ? i.mData : a,
                            idx: a
                        });
                        e.aoColumns.push(o);
                        var s = e.aoPreSearchCols;
                        s[a] = t.extend({}, l.models.oSearch, s[a]), O(e, a, t(r).data())
                    }

                    function O(e, n, i) {
                        var a = e.aoColumns[n], o = e.oClasses, s = t(a.nTh);
                        if (!a.sWidthOrig) {
                            a.sWidthOrig = s.attr("width") || null;
                            var c = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                            c && (a.sWidthOrig = c[1])
                        }
                        i !== r && null !== i && (k(i), D(l.defaults.column, i, !0), i.mDataProp === r || i.mData || (i.mData = i.mDataProp), i.sType && (a._sManualType = i.sType), i.className && !i.sClass && (i.sClass = i.className), i.sClass && s.addClass(i.sClass), t.extend(a, i), ce(a, i, "sWidth", "sWidthOrig"), i.iDataSort !== r && (a.aDataSort = [i.iDataSort]), ce(a, i, "aDataSort"));
                        var u = a.mData, h = Z(u), d = a.mRender ? Z(a.mRender) : null, f = function (t) {
                            return "string" == typeof t && -1 !== t.indexOf("@")
                        };
                        a._bAttrSrc = t.isPlainObject(u) && (f(u.sort) || f(u.type) || f(u.filter)), a._setter = null, a.fnGetData = function (t, e, n) {
                            var i = h(t, e, r, n);
                            return d && e ? d(i, e, t, n) : i
                        }, a.fnSetData = function (t, e, n) {
                            return $(u)(t, e, n)
                        }, "number" != typeof u && (e._rowReadObject = !0), e.oFeatures.bSort || (a.bSortable = !1, s.addClass(o.sSortableNone));
                        var p = -1 !== t.inArray("asc", a.asSorting), g = -1 !== t.inArray("desc", a.asSorting);
                        a.bSortable && (p || g) ? p && !g ? (a.sSortingClass = o.sSortableAsc, a.sSortingClassJUI = o.sSortJUIAscAllowed) : !p && g ? (a.sSortingClass = o.sSortableDesc, a.sSortingClassJUI = o.sSortJUIDescAllowed) : (a.sSortingClass = o.sSortable, a.sSortingClassJUI = o.sSortJUI) : (a.sSortingClass = o.sSortableNone, a.sSortingClassJUI = "")
                    }

                    function G(t) {
                        if (!1 !== t.oFeatures.bAutoWidth) {
                            var e = t.aoColumns;
                            Ut(t);
                            for (var n = 0, r = e.length; n < r; n++) e[n].nTh.style.width = e[n].sWidth
                        }
                        var i = t.oScroll;
                        "" === i.sY && "" === i.sX || Xt(t), fe(t, null, "column-sizing", [t])
                    }

                    function F(t, e) {
                        var n = j(t, "bVisible");
                        return "number" == typeof n[e] ? n[e] : null
                    }

                    function N(e, n) {
                        var r = j(e, "bVisible"), i = t.inArray(n, r);
                        return -1 !== i ? i : null
                    }

                    function H(e) {
                        var n = 0;
                        return t.each(e.aoColumns, (function (e, r) {
                            r.bVisible && "none" !== t(r.nTh).css("display") && n++
                        })), n
                    }

                    function j(e, n) {
                        var r = [];
                        return t.map(e.aoColumns, (function (t, e) {
                            t[n] && r.push(e)
                        })), r
                    }

                    function z(t) {
                        var e, n, i, a, o, s, c, u, h, d = t.aoColumns, f = t.aoData, p = l.ext.type.detect;
                        for (e = 0, n = d.length; e < n; e++) if (h = [], !(c = d[e]).sType && c._sManualType) c.sType = c._sManualType; else if (!c.sType) {
                            for (i = 0, a = p.length; i < a; i++) {
                                for (o = 0, s = f.length; o < s && (h[o] === r && (h[o] = W(t, o, e, "type")), (u = p[i](h[o], t)) || i === p.length - 1) && "html" !== u; o++) ;
                                if (u) {
                                    c.sType = u;
                                    break
                                }
                            }
                            c.sType || (c.sType = "string")
                        }
                    }

                    function X(e, n, i, a) {
                        var o, s, l, c, u, h, d, f = e.aoColumns;
                        if (n) for (o = n.length - 1; o >= 0; o--) {
                            var p = (d = n[o]).targets !== r ? d.targets : d.aTargets;
                            for (Array.isArray(p) || (p = [p]), l = 0, c = p.length; l < c; l++) if ("number" == typeof p[l] && p[l] >= 0) {
                                for (; f.length <= p[l];) M(e);
                                a(p[l], d)
                            } else if ("number" == typeof p[l] && p[l] < 0) a(f.length + p[l], d); else if ("string" == typeof p[l]) for (u = 0, h = f.length; u < h; u++) ("_all" == p[l] || t(f[u].nTh).hasClass(p[l])) && a(u, d)
                        }
                        if (i) for (o = 0, s = i.length; o < s; o++) a(o, i[o])
                    }

                    function B(e, n, i, a) {
                        var o = e.aoData.length, s = t.extend(!0, {}, l.models.oRow, {src: i ? "dom" : "data", idx: o});
                        s._aData = n, e.aoData.push(s);
                        for (var c = e.aoColumns, u = 0, h = c.length; u < h; u++) c[u].sType = null;
                        e.aiDisplayMaster.push(o);
                        var d = e.rowIdFn(n);
                        return d !== r && (e.aIds[d] = s), !i && e.oFeatures.bDeferRender || at(e, o, i, a), o
                    }

                    function Y(e, n) {
                        var r;
                        return n instanceof t || (n = t(n)), n.map((function (t, n) {
                            return r = it(e, n), B(e, r.data, n, r.cells)
                        }))
                    }

                    function U(e, n, r) {
                        return t.inArray(r, e.aoData[n].anCells)
                    }

                    function W(t, e, n, i) {
                        var a = t.iDraw, o = t.aoColumns[n], s = t.aoData[e]._aData, l = o.sDefaultContent,
                            c = o.fnGetData(s, i, {settings: t, row: e, col: n});
                        if (c === r) return t.iDrawError != a && null === l && (le(t, 0, "Requested unknown parameter " + ("function" == typeof o.mData ? "{function}" : "'" + o.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = a), l;
                        if (c !== s && null !== c || null === l || i === r) {
                            if ("function" == typeof c) return c.call(s)
                        } else c = l;
                        return null === c && "display" == i ? "" : c
                    }

                    function Q(t, e, n, r) {
                        var i = t.aoColumns[n], a = t.aoData[e]._aData;
                        i.fnSetData(a, r, {settings: t, row: e, col: n})
                    }

                    var q = /\[.*?\]$/, J = /\(\)$/;

                    function K(e) {
                        return t.map(e.match(/(\\.|[^\.])+/g) || [""], (function (t) {
                            return t.replace(/\\\./g, ".")
                        }))
                    }

                    function Z(e) {
                        if (t.isPlainObject(e)) {
                            var n = {};
                            return t.each(e, (function (t, e) {
                                e && (n[t] = Z(e))
                            })), function (t, e, i, a) {
                                var o = n[e] || n._;
                                return o !== r ? o(t, e, i, a) : t
                            }
                        }
                        if (null === e) return function (t) {
                            return t
                        };
                        if ("function" == typeof e) return function (t, n, r, i) {
                            return e(t, n, r, i)
                        };
                        if ("string" != typeof e || -1 === e.indexOf(".") && -1 === e.indexOf("[") && -1 === e.indexOf("(")) return function (t, n) {
                            return t[e]
                        };
                        var i = function (t, e, n) {
                            var a, o, s, l;
                            if ("" !== n) for (var c = K(n), u = 0, h = c.length; u < h; u++) {
                                if (a = c[u].match(q), o = c[u].match(J), a) {
                                    if (c[u] = c[u].replace(q, ""), "" !== c[u] && (t = t[c[u]]), s = [], c.splice(0, u + 1), l = c.join("."), Array.isArray(t)) for (var d = 0, f = t.length; d < f; d++) s.push(i(t[d], e, l));
                                    var p = a[0].substring(1, a[0].length - 1);
                                    t = "" === p ? s : s.join(p);
                                    break
                                }
                                if (o) c[u] = c[u].replace(J, ""), t = t[c[u]](); else {
                                    if (null === t || t[c[u]] === r) return r;
                                    t = t[c[u]]
                                }
                            }
                            return t
                        };
                        return function (t, n) {
                            return i(t, n, e)
                        }
                    }

                    function $(e) {
                        if (t.isPlainObject(e)) return $(e._);
                        if (null === e) return function () {
                        };
                        if ("function" == typeof e) return function (t, n, r) {
                            e(t, "set", n, r)
                        };
                        if ("string" != typeof e || -1 === e.indexOf(".") && -1 === e.indexOf("[") && -1 === e.indexOf("(")) return function (t, n) {
                            t[e] = n
                        };
                        var n = function (t, e, i) {
                            for (var a, o, s, l, c, u = K(i), h = u[u.length - 1], d = 0, f = u.length - 1; d < f; d++) {
                                if ("__proto__" === u[d] || "constructor" === u[d]) throw new Error("Cannot set prototype values");
                                if (o = u[d].match(q), s = u[d].match(J), o) {
                                    if (u[d] = u[d].replace(q, ""), t[u[d]] = [], (a = u.slice()).splice(0, d + 1), c = a.join("."), Array.isArray(e)) for (var p = 0, g = e.length; p < g; p++) n(l = {}, e[p], c), t[u[d]].push(l); else t[u[d]] = e;
                                    return
                                }
                                s && (u[d] = u[d].replace(J, ""), t = t[u[d]](e)), null !== t[u[d]] && t[u[d]] !== r || (t[u[d]] = {}), t = t[u[d]]
                            }
                            h.match(J) ? t = t[h.replace(J, "")](e) : t[h.replace(q, "")] = e
                        };
                        return function (t, r) {
                            return n(t, r, e)
                        }
                    }

                    function tt(t) {
                        return x(t.aoData, "_aData")
                    }

                    function et(t) {
                        t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {}
                    }

                    function nt(t, e, n) {
                        for (var i = -1, a = 0, o = t.length; a < o; a++) t[a] == e ? i = a : t[a] > e && t[a]--;
                        -1 != i && n === r && t.splice(i, 1)
                    }

                    function rt(t, e, n, i) {
                        var a, o, s = t.aoData[e], l = function (n, r) {
                            for (; n.childNodes.length;) n.removeChild(n.firstChild);
                            n.innerHTML = W(t, e, r, "display")
                        };
                        if ("dom" !== n && (n && "auto" !== n || "dom" !== s.src)) {
                            var c = s.anCells;
                            if (c) if (i !== r) l(c[i], i); else for (a = 0, o = c.length; a < o; a++) l(c[a], a)
                        } else s._aData = it(t, s, i, i === r ? r : s._aData).data;
                        s._aSortData = null, s._aFilterData = null;
                        var u = t.aoColumns;
                        if (i !== r) u[i].sType = null; else {
                            for (a = 0, o = u.length; a < o; a++) u[a].sType = null;
                            ot(t, s)
                        }
                    }

                    function it(t, e, n, i) {
                        var a, o, s, l = [], c = e.firstChild, u = 0, h = t.aoColumns, d = t._rowReadObject;
                        i = i !== r ? i : d ? {} : [];
                        var f = function (t, e) {
                            if ("string" == typeof t) {
                                var n = t.indexOf("@");
                                if (-1 !== n) {
                                    var r = t.substring(n + 1);
                                    $(t)(i, e.getAttribute(r))
                                }
                            }
                        }, p = function (t) {
                            n !== r && n !== u || (o = h[u], s = t.innerHTML.trim(), o && o._bAttrSrc ? ($(o.mData._)(i, s), f(o.mData.sort, t), f(o.mData.type, t), f(o.mData.filter, t)) : d ? (o._setter || (o._setter = $(o.mData)), o._setter(i, s)) : i[u] = s);
                            u++
                        };
                        if (c) for (; c;) "TD" != (a = c.nodeName.toUpperCase()) && "TH" != a || (p(c), l.push(c)), c = c.nextSibling; else for (var g = 0, y = (l = e.anCells).length; g < y; g++) p(l[g]);
                        var _ = e.firstChild ? e : e.nTr;
                        if (_) {
                            var v = _.getAttribute("id");
                            v && $(t.rowId)(i, v)
                        }
                        return {data: i, cells: l}
                    }

                    function at(e, r, i, a) {
                        var o, s, l, c, u, h, d = e.aoData[r], f = d._aData, p = [];
                        if (null === d.nTr) {
                            for (o = i || n.createElement("tr"), d.nTr = o, d.anCells = p, o._DT_RowIndex = r, ot(e, d), c = 0, u = e.aoColumns.length; c < u; c++) l = e.aoColumns[c], (s = (h = !i) ? n.createElement(l.sCellType) : a[c])._DT_CellIndex = {
                                row: r,
                                column: c
                            }, p.push(s), !h && (!l.mRender && l.mData === c || t.isPlainObject(l.mData) && l.mData._ === c + ".display") || (s.innerHTML = W(e, r, c, "display")), l.sClass && (s.className += " " + l.sClass), l.bVisible && !i ? o.appendChild(s) : !l.bVisible && i && s.parentNode.removeChild(s), l.fnCreatedCell && l.fnCreatedCell.call(e.oInstance, s, W(e, r, c), f, r, c);
                            fe(e, "aoRowCreatedCallback", null, [o, f, r, p])
                        }
                    }

                    function ot(e, n) {
                        var r = n.nTr, i = n._aData;
                        if (r) {
                            var a = e.rowIdFn(i);
                            if (a && (r.id = a), i.DT_RowClass) {
                                var o = i.DT_RowClass.split(" ");
                                n.__rowc = n.__rowc ? A(n.__rowc.concat(o)) : o, t(r).removeClass(n.__rowc.join(" ")).addClass(i.DT_RowClass)
                            }
                            i.DT_RowAttr && t(r).attr(i.DT_RowAttr), i.DT_RowData && t(r).data(i.DT_RowData)
                        }
                    }

                    function st(e) {
                        var n, r, i, a, o, s = e.nTHead, l = e.nTFoot, c = 0 === t("th, td", s).length, u = e.oClasses,
                            h = e.aoColumns;
                        for (c && (a = t("<tr/>").appendTo(s)), n = 0, r = h.length; n < r; n++) o = h[n], i = t(o.nTh).addClass(o.sClass), c && i.appendTo(a), e.oFeatures.bSort && (i.addClass(o.sSortingClass), !1 !== o.bSortable && (i.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), ne(e, o.nTh, n))), o.sTitle != i[0].innerHTML && i.html(o.sTitle), ge(e, "header")(e, i, o, u);
                        if (c && dt(e.aoHeader, s), t(s).children("tr").attr("role", "row"), t(s).children("tr").children("th, td").addClass(u.sHeaderTH), t(l).children("tr").children("th, td").addClass(u.sFooterTH), null !== l) {
                            var d = e.aoFooter[0];
                            for (n = 0, r = d.length; n < r; n++) (o = h[n]).nTf = d[n].cell, o.sClass && t(o.nTf).addClass(o.sClass)
                        }
                    }

                    function lt(e, n, i) {
                        var a, o, s, l, c, u, h, d, f, p = [], g = [], y = e.aoColumns.length;
                        if (n) {
                            for (i === r && (i = !1), a = 0, o = n.length; a < o; a++) {
                                for (p[a] = n[a].slice(), p[a].nTr = n[a].nTr, s = y - 1; s >= 0; s--) e.aoColumns[s].bVisible || i || p[a].splice(s, 1);
                                g.push([])
                            }
                            for (a = 0, o = p.length; a < o; a++) {
                                if (h = p[a].nTr) for (; u = h.firstChild;) h.removeChild(u);
                                for (s = 0, l = p[a].length; s < l; s++) if (d = 1, f = 1, g[a][s] === r) {
                                    for (h.appendChild(p[a][s].cell), g[a][s] = 1; p[a + d] !== r && p[a][s].cell == p[a + d][s].cell;) g[a + d][s] = 1, d++;
                                    for (; p[a][s + f] !== r && p[a][s].cell == p[a][s + f].cell;) {
                                        for (c = 0; c < d; c++) g[a + c][s + f] = 1;
                                        f++
                                    }
                                    t(p[a][s].cell).attr("rowspan", d).attr("colspan", f)
                                }
                            }
                        }
                    }

                    function ct(e) {
                        var n = fe(e, "aoPreDrawCallback", "preDraw", [e]);
                        if (-1 === t.inArray(!1, n)) {
                            var i = [], a = 0, o = e.asStripeClasses, s = o.length,
                                l = (e.aoOpenRows.length, e.oLanguage), c = e.iInitDisplayStart, u = "ssp" == ye(e),
                                h = e.aiDisplay;
                            e.bDrawing = !0, c !== r && -1 !== c && (e._iDisplayStart = u ? c : c >= e.fnRecordsDisplay() ? 0 : c, e.iInitDisplayStart = -1);
                            var d = e._iDisplayStart, f = e.fnDisplayEnd();
                            if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++, jt(e, !1); else if (u) {
                                if (!e.bDestroying && !gt(e)) return
                            } else e.iDraw++;
                            if (0 !== h.length) for (var p = u ? 0 : d, g = u ? e.aoData.length : f, y = p; y < g; y++) {
                                var _ = h[y], v = e.aoData[_];
                                null === v.nTr && at(e, _);
                                var m = v.nTr;
                                if (0 !== s) {
                                    var x = o[a % s];
                                    v._sRowStripe != x && (t(m).removeClass(v._sRowStripe).addClass(x), v._sRowStripe = x)
                                }
                                fe(e, "aoRowCallback", null, [m, v._aData, a, y, _]), i.push(m), a++
                            } else {
                                var w = l.sZeroRecords;
                                1 == e.iDraw && "ajax" == ye(e) ? w = l.sLoadingRecords : l.sEmptyTable && 0 === e.fnRecordsTotal() && (w = l.sEmptyTable), i[0] = t("<tr/>", {class: s ? o[0] : ""}).append(t("<td />", {
                                    valign: "top",
                                    colSpan: H(e),
                                    class: e.oClasses.sRowEmpty
                                }).html(w))[0]
                            }
                            fe(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], tt(e), d, f, h]), fe(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], tt(e), d, f, h]);
                            var b = t(e.nTBody);
                            b.children().detach(), b.append(t(i)), fe(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1
                        } else jt(e, !1)
                    }

                    function ut(t, e) {
                        var n = t.oFeatures, r = n.bSort, i = n.bFilter;
                        r && $t(t), i ? xt(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, ct(t), t._drawHold = !1
                    }

                    function ht(e) {
                        var n = e.oClasses, r = t(e.nTable), i = t("<div/>").insertBefore(r), a = e.oFeatures,
                            o = t("<div/>", {
                                id: e.sTableId + "_wrapper",
                                class: n.sWrapper + (e.nTFoot ? "" : " " + n.sNoFooter)
                            });
                        e.nHolding = i[0], e.nTableWrapper = o[0], e.nTableReinsertBefore = e.nTable.nextSibling;
                        for (var s, c, u, h, d, f, p = e.sDom.split(""), g = 0; g < p.length; g++) {
                            if (s = null, "<" == (c = p[g])) {
                                if (u = t("<div/>")[0], "'" == (h = p[g + 1]) || '"' == h) {
                                    for (d = "", f = 2; p[g + f] != h;) d += p[g + f], f++;
                                    if ("H" == d ? d = n.sJUIHeader : "F" == d && (d = n.sJUIFooter), -1 != d.indexOf(".")) {
                                        var y = d.split(".");
                                        u.id = y[0].substr(1, y[0].length - 1), u.className = y[1]
                                    } else "#" == d.charAt(0) ? u.id = d.substr(1, d.length - 1) : u.className = d;
                                    g += f
                                }
                                o.append(u), o = t(u)
                            } else if (">" == c) o = o.parent(); else if ("l" == c && a.bPaginate && a.bLengthChange) s = Gt(e); else if ("f" == c && a.bFilter) s = mt(e); else if ("r" == c && a.bProcessing) s = Ht(e); else if ("t" == c) s = zt(e); else if ("i" == c && a.bInfo) s = Et(e); else if ("p" == c && a.bPaginate) s = Ft(e); else if (0 !== l.ext.feature.length) for (var _ = l.ext.feature, v = 0, m = _.length; v < m; v++) if (c == _[v].cFeature) {
                                s = _[v].fnInit(e);
                                break
                            }
                            if (s) {
                                var x = e.aanFeatures;
                                x[c] || (x[c] = []), x[c].push(s), o.append(s)
                            }
                        }
                        i.replaceWith(o), e.nHolding = null
                    }

                    function dt(e, n) {
                        var r, i, a, o, s, l, c, u, h, d, f = t(n).children("tr"), p = function (t, e, n) {
                            for (var r = t[e]; r[n];) n++;
                            return n
                        };
                        for (e.splice(0, e.length), a = 0, l = f.length; a < l; a++) e.push([]);
                        for (a = 0, l = f.length; a < l; a++) for (0, i = (r = f[a]).firstChild; i;) {
                            if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase()) for (u = (u = 1 * i.getAttribute("colspan")) && 0 !== u && 1 !== u ? u : 1, h = (h = 1 * i.getAttribute("rowspan")) && 0 !== h && 1 !== h ? h : 1, c = p(e, a, 0), d = 1 === u, s = 0; s < u; s++) for (o = 0; o < h; o++) e[a + o][c + s] = {
                                cell: i,
                                unique: d
                            }, e[a + o].nTr = r;
                            i = i.nextSibling
                        }
                    }

                    function ft(t, e, n) {
                        var r = [];
                        n || (n = t.aoHeader, e && dt(n = [], e));
                        for (var i = 0, a = n.length; i < a; i++) for (var o = 0, s = n[i].length; o < s; o++) !n[i][o].unique || r[o] && t.bSortCellsTop || (r[o] = n[i][o].cell);
                        return r
                    }

                    function pt(e, n, r) {
                        if (fe(e, "aoServerParams", "serverParams", [n]), n && Array.isArray(n)) {
                            var i = {}, a = /(.*?)\[\]$/;
                            t.each(n, (function (t, e) {
                                var n = e.name.match(a);
                                if (n) {
                                    var r = n[0];
                                    i[r] || (i[r] = []), i[r].push(e.value)
                                } else i[e.name] = e.value
                            })), n = i
                        }
                        var o, s = e.ajax, l = e.oInstance, c = function (t) {
                            fe(e, null, "xhr", [e, t, e.jqXHR]), r(t)
                        };
                        if (t.isPlainObject(s) && s.data) {
                            var u = "function" == typeof (o = s.data) ? o(n, e) : o;
                            n = "function" == typeof o && u ? u : t.extend(!0, n, u), delete s.data
                        }
                        var h = {
                            data: n, success: function (t) {
                                var n = t.error || t.sError;
                                n && le(e, 0, n), e.json = t, c(t)
                            }, dataType: "json", cache: !1, type: e.sServerMethod, error: function (n, r, i) {
                                var a = fe(e, null, "xhr", [e, null, e.jqXHR]);
                                -1 === t.inArray(!0, a) && ("parsererror" == r ? le(e, 0, "Invalid JSON response", 1) : 4 === n.readyState && le(e, 0, "Ajax error", 7)), jt(e, !1)
                            }
                        };
                        e.oAjaxData = n, fe(e, null, "preXhr", [e, n]), e.fnServerData ? e.fnServerData.call(l, e.sAjaxSource, t.map(n, (function (t, e) {
                            return {name: e, value: t}
                        })), c, e) : e.sAjaxSource || "string" == typeof s ? e.jqXHR = t.ajax(t.extend(h, {url: s || e.sAjaxSource})) : "function" == typeof s ? e.jqXHR = s.call(l, n, c, e) : (e.jqXHR = t.ajax(t.extend(h, s)), s.data = o)
                    }

                    function gt(t) {
                        return !t.bAjaxDataGet || (t.iDraw++, jt(t, !0), pt(t, yt(t), (function (e) {
                            _t(t, e)
                        })), !1)
                    }

                    function yt(e) {
                        var n, r, i, a, o = e.aoColumns, s = o.length, c = e.oFeatures, u = e.oPreviousSearch,
                            h = e.aoPreSearchCols, d = [], f = Zt(e), p = e._iDisplayStart,
                            g = !1 !== c.bPaginate ? e._iDisplayLength : -1, y = function (t, e) {
                                d.push({name: t, value: e})
                            };
                        y("sEcho", e.iDraw), y("iColumns", s), y("sColumns", x(o, "sName").join(",")), y("iDisplayStart", p), y("iDisplayLength", g);
                        var _ = {
                            draw: e.iDraw,
                            columns: [],
                            order: [],
                            start: p,
                            length: g,
                            search: {value: u.sSearch, regex: u.bRegex}
                        };
                        for (n = 0; n < s; n++) i = o[n], a = h[n], r = "function" == typeof i.mData ? "function" : i.mData, _.columns.push({
                            data: r,
                            name: i.sName,
                            searchable: i.bSearchable,
                            orderable: i.bSortable,
                            search: {value: a.sSearch, regex: a.bRegex}
                        }), y("mDataProp_" + n, r), c.bFilter && (y("sSearch_" + n, a.sSearch), y("bRegex_" + n, a.bRegex), y("bSearchable_" + n, i.bSearchable)), c.bSort && y("bSortable_" + n, i.bSortable);
                        c.bFilter && (y("sSearch", u.sSearch), y("bRegex", u.bRegex)), c.bSort && (t.each(f, (function (t, e) {
                            _.order.push({
                                column: e.col,
                                dir: e.dir
                            }), y("iSortCol_" + t, e.col), y("sSortDir_" + t, e.dir)
                        })), y("iSortingCols", f.length));
                        var v = l.ext.legacy.ajax;
                        return null === v ? e.sAjaxSource ? d : _ : v ? d : _
                    }

                    function _t(t, e) {
                        var n = function (t, n) {
                                return e[t] !== r ? e[t] : e[n]
                            }, i = vt(t, e), a = n("sEcho", "draw"), o = n("iTotalRecords", "recordsTotal"),
                            s = n("iTotalDisplayRecords", "recordsFiltered");
                        if (a !== r) {
                            if (1 * a < t.iDraw) return;
                            t.iDraw = 1 * a
                        }
                        et(t), t._iRecordsTotal = parseInt(o, 10), t._iRecordsDisplay = parseInt(s, 10);
                        for (var l = 0, c = i.length; l < c; l++) B(t, i[l]);
                        t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, ct(t), t._bInitComplete || Mt(t, e), t.bAjaxDataGet = !0, jt(t, !1)
                    }

                    function vt(e, n) {
                        var i = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== r ? e.ajax.dataSrc : e.sAjaxDataProp;
                        return "data" === i ? n.aaData || n[i] : "" !== i ? Z(i)(n) : n
                    }

                    function mt(e) {
                        var r = e.oClasses, i = e.sTableId, a = e.oLanguage, o = e.oPreviousSearch, s = e.aanFeatures,
                            l = '<input type="search" class="' + r.sFilterInput + '"/>', c = a.sSearch;
                        c = c.match(/_INPUT_/) ? c.replace("_INPUT_", l) : c + l;
                        var u = t("<div/>", {
                                id: s.f ? null : i + "_filter",
                                class: r.sFilter
                            }).append(t("<label/>").append(c)), h = function () {
                                s.f;
                                var t = this.value ? this.value : "";
                                t != o.sSearch && (xt(e, {
                                    sSearch: t,
                                    bRegex: o.bRegex,
                                    bSmart: o.bSmart,
                                    bCaseInsensitive: o.bCaseInsensitive
                                }), e._iDisplayStart = 0, ct(e))
                            }, d = null !== e.searchDelay ? e.searchDelay : "ssp" === ye(e) ? 400 : 0,
                            f = t("input", u).val(o.sSearch).attr("placeholder", a.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", d ? Wt(h, d) : h).on("mouseup", (function (t) {
                                setTimeout((function () {
                                    h.call(f[0])
                                }), 10)
                            })).on("keypress.DT", (function (t) {
                                if (13 == t.keyCode) return !1
                            })).attr("aria-controls", i);
                        return t(e.nTable).on("search.dt.DT", (function (t, r) {
                            if (e === r) try {
                                f[0] !== n.activeElement && f.val(o.sSearch)
                            } catch (t) {
                            }
                        })), u[0]
                    }

                    function xt(t, e, n) {
                        var i = t.oPreviousSearch, a = t.aoPreSearchCols, o = function (t) {
                            i.sSearch = t.sSearch, i.bRegex = t.bRegex, i.bSmart = t.bSmart, i.bCaseInsensitive = t.bCaseInsensitive
                        }, s = function (t) {
                            return t.bEscapeRegex !== r ? !t.bEscapeRegex : t.bRegex
                        };
                        if (z(t), "ssp" != ye(t)) {
                            St(t, e.sSearch, n, s(e), e.bSmart, e.bCaseInsensitive), o(e);
                            for (var l = 0; l < a.length; l++) bt(t, a[l].sSearch, l, s(a[l]), a[l].bSmart, a[l].bCaseInsensitive);
                            wt(t)
                        } else o(e);
                        t.bFiltered = !0, fe(t, null, "search", [t])
                    }

                    function wt(e) {
                        for (var n, r, i = l.ext.search, a = e.aiDisplay, o = 0, s = i.length; o < s; o++) {
                            for (var c = [], u = 0, h = a.length; u < h; u++) r = a[u], n = e.aoData[r], i[o](e, n._aFilterData, r, n._aData, u) && c.push(r);
                            a.length = 0, t.merge(a, c)
                        }
                    }

                    function bt(t, e, n, r, i, a) {
                        if ("" !== e) {
                            for (var o, s = [], l = t.aiDisplay, c = Tt(e, r, i, a), u = 0; u < l.length; u++) o = t.aoData[l[u]]._aFilterData[n], c.test(o) && s.push(l[u]);
                            t.aiDisplay = s
                        }
                    }

                    function St(t, e, n, r, i, a) {
                        var o, s, c, u = Tt(e, r, i, a), h = t.oPreviousSearch.sSearch, d = t.aiDisplayMaster, f = [];
                        if (0 !== l.ext.search.length && (n = !0), s = Dt(t), e.length <= 0) t.aiDisplay = d.slice(); else {
                            for ((s || n || r || h.length > e.length || 0 !== e.indexOf(h) || t.bSorted) && (t.aiDisplay = d.slice()), o = t.aiDisplay, c = 0; c < o.length; c++) u.test(t.aoData[o[c]]._sFilterRow) && f.push(o[c]);
                            t.aiDisplay = f
                        }
                    }

                    function Tt(e, n, r, i) {
                        if (e = n ? e : At(e), r) {
                            var a = t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], (function (t) {
                                if ('"' === t.charAt(0)) {
                                    var e = t.match(/^"(.*)"$/);
                                    t = e ? e[1] : t
                                }
                                return t.replace('"', "")
                            }));
                            e = "^(?=.*?" + a.join(")(?=.*?") + ").*$"
                        }
                        return new RegExp(e, i ? "i" : "")
                    }

                    var At = l.util.escapeRegex, Ct = t("<div>")[0], Pt = Ct.textContent !== r;

                    function Dt(t) {
                        var e, n, r, i, a, o, s, c, u = t.aoColumns, h = l.ext.type.search, d = !1;
                        for (n = 0, i = t.aoData.length; n < i; n++) if (!(c = t.aoData[n])._aFilterData) {
                            for (o = [], r = 0, a = u.length; r < a; r++) (e = u[r]).bSearchable ? (s = W(t, n, r, "filter"), h[e.sType] && (s = h[e.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (Ct.innerHTML = s, s = Pt ? Ct.textContent : Ct.innerText), s.replace && (s = s.replace(/[\r\n\u2028]/g, "")), o.push(s);
                            c._aFilterData = o, c._sFilterRow = o.join("  "), d = !0
                        }
                        return d
                    }

                    function Lt(t) {
                        return {
                            search: t.sSearch,
                            smart: t.bSmart,
                            regex: t.bRegex,
                            caseInsensitive: t.bCaseInsensitive
                        }
                    }

                    function It(t) {
                        return {
                            sSearch: t.search,
                            bSmart: t.smart,
                            bRegex: t.regex,
                            bCaseInsensitive: t.caseInsensitive
                        }
                    }

                    function Et(e) {
                        var n = e.sTableId, r = e.aanFeatures.i,
                            i = t("<div/>", {class: e.oClasses.sInfo, id: r ? null : n + "_info"});
                        return r || (e.aoDrawCallback.push({
                            fn: kt,
                            sName: "information"
                        }), i.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", n + "_info")), i[0]
                    }

                    function kt(e) {
                        var n = e.aanFeatures.i;
                        if (0 !== n.length) {
                            var r = e.oLanguage, i = e._iDisplayStart + 1, a = e.fnDisplayEnd(), o = e.fnRecordsTotal(),
                                s = e.fnRecordsDisplay(), l = s ? r.sInfo : r.sInfoEmpty;
                            s !== o && (l += " " + r.sInfoFiltered), l = Vt(e, l += r.sInfoPostFix);
                            var c = r.fnInfoCallback;
                            null !== c && (l = c.call(e.oInstance, e, i, a, o, s, l)), t(n).html(l)
                        }
                    }

                    function Vt(t, e) {
                        var n = t.fnFormatNumber, r = t._iDisplayStart + 1, i = t._iDisplayLength,
                            a = t.fnRecordsDisplay(), o = -1 === i;
                        return e.replace(/_START_/g, n.call(t, r)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, a)).replace(/_PAGE_/g, n.call(t, o ? 1 : Math.ceil(r / i))).replace(/_PAGES_/g, n.call(t, o ? 1 : Math.ceil(a / i)))
                    }

                    function Rt(t) {
                        var e, n, r, i = t.iInitDisplayStart, a = t.aoColumns, o = t.oFeatures, s = t.bDeferLoading;
                        if (t.bInitialised) {
                            for (ht(t), st(t), lt(t, t.aoHeader), lt(t, t.aoFooter), jt(t, !0), o.bAutoWidth && Ut(t), e = 0, n = a.length; e < n; e++) (r = a[e]).sWidth && (r.nTh.style.width = Kt(r.sWidth));
                            fe(t, null, "preInit", [t]), ut(t);
                            var l = ye(t);
                            ("ssp" != l || s) && ("ajax" == l ? pt(t, [], (function (n) {
                                var r = vt(t, n);
                                for (e = 0; e < r.length; e++) B(t, r[e]);
                                t.iInitDisplayStart = i, ut(t), jt(t, !1), Mt(t, n)
                            })) : (jt(t, !1), Mt(t)))
                        } else setTimeout((function () {
                            Rt(t)
                        }), 200)
                    }

                    function Mt(t, e) {
                        t._bInitComplete = !0, (e || t.oInit.aaData) && G(t), fe(t, null, "plugin-init", [t, e]), fe(t, "aoInitComplete", "init", [t, e])
                    }

                    function Ot(t, e) {
                        var n = parseInt(e, 10);
                        t._iDisplayLength = n, pe(t), fe(t, null, "length", [t, n])
                    }

                    function Gt(e) {
                        for (var n = e.oClasses, r = e.sTableId, i = e.aLengthMenu, a = Array.isArray(i[0]), o = a ? i[0] : i, s = a ? i[1] : i, l = t("<select/>", {
                            name: r + "_length",
                            "aria-controls": r,
                            class: n.sLengthSelect
                        }), c = 0, u = o.length; c < u; c++) l[0][c] = new Option("number" == typeof s[c] ? e.fnFormatNumber(s[c]) : s[c], o[c]);
                        var h = t("<div><label/></div>").addClass(n.sLength);
                        return e.aanFeatures.l || (h[0].id = r + "_length"), h.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), t("select", h).val(e._iDisplayLength).on("change.DT", (function (n) {
                            Ot(e, t(this).val()), ct(e)
                        })), t(e.nTable).on("length.dt.DT", (function (n, r, i) {
                            e === r && t("select", h).val(i)
                        })), h[0]
                    }

                    function Ft(e) {
                        var n = e.sPaginationType, r = l.ext.pager[n], i = "function" == typeof r, a = function (t) {
                            ct(t)
                        }, o = t("<div/>").addClass(e.oClasses.sPaging + n)[0], s = e.aanFeatures;
                        return i || r.fnInit(e, o, a), s.p || (o.id = e.sTableId + "_paginate", e.aoDrawCallback.push({
                            fn: function (t) {
                                if (i) {
                                    var e, n, o = t._iDisplayStart, l = t._iDisplayLength, c = t.fnRecordsDisplay(),
                                        u = -1 === l, h = u ? 0 : Math.ceil(o / l), d = u ? 1 : Math.ceil(c / l),
                                        f = r(h, d);
                                    for (e = 0, n = s.p.length; e < n; e++) ge(t, "pageButton")(t, s.p[e], e, f, h, d)
                                } else r.fnUpdate(t, a)
                            }, sName: "pagination"
                        })), o
                    }

                    function Nt(t, e, n) {
                        var r = t._iDisplayStart, i = t._iDisplayLength, a = t.fnRecordsDisplay();
                        0 === a || -1 === i ? r = 0 : "number" == typeof e ? (r = e * i) > a && (r = 0) : "first" == e ? r = 0 : "previous" == e ? (r = i >= 0 ? r - i : 0) < 0 && (r = 0) : "next" == e ? r + i < a && (r += i) : "last" == e ? r = Math.floor((a - 1) / i) * i : le(t, 0, "Unknown paging action: " + e, 5);
                        var o = t._iDisplayStart !== r;
                        return t._iDisplayStart = r, o && (fe(t, null, "page", [t]), n && ct(t)), o
                    }

                    function Ht(e) {
                        return t("<div/>", {
                            id: e.aanFeatures.r ? null : e.sTableId + "_processing",
                            class: e.oClasses.sProcessing
                        }).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]
                    }

                    function jt(e, n) {
                        e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", n ? "block" : "none"), fe(e, null, "processing", [e, n])
                    }

                    function zt(e) {
                        var n = t(e.nTable);
                        n.attr("role", "grid");
                        var r = e.oScroll;
                        if ("" === r.sX && "" === r.sY) return e.nTable;
                        var i = r.sX, a = r.sY, o = e.oClasses, s = n.children("caption"),
                            l = s.length ? s[0]._captionSide : null, c = t(n[0].cloneNode(!1)),
                            u = t(n[0].cloneNode(!1)), h = n.children("tfoot"), d = "<div/>", f = function (t) {
                                return t ? Kt(t) : null
                            };
                        h.length || (h = null);
                        var p = t(d, {class: o.sScrollWrapper}).append(t(d, {class: o.sScrollHead}).css({
                            overflow: "hidden",
                            position: "relative",
                            border: 0,
                            width: i ? f(i) : "100%"
                        }).append(t(d, {class: o.sScrollHeadInner}).css({
                            "box-sizing": "content-box",
                            width: r.sXInner || "100%"
                        }).append(c.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(n.children("thead"))))).append(t(d, {class: o.sScrollBody}).css({
                            position: "relative",
                            overflow: "auto",
                            width: f(i)
                        }).append(n));
                        h && p.append(t(d, {class: o.sScrollFoot}).css({
                            overflow: "hidden",
                            border: 0,
                            width: i ? f(i) : "100%"
                        }).append(t(d, {class: o.sScrollFootInner}).append(u.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(n.children("tfoot")))));
                        var g = p.children(), y = g[0], _ = g[1], v = h ? g[2] : null;
                        return i && t(_).on("scroll.DT", (function (t) {
                            var e = this.scrollLeft;
                            y.scrollLeft = e, h && (v.scrollLeft = e)
                        })), t(_).css("max-height", a), r.bCollapse || t(_).css("height", a), e.nScrollHead = y, e.nScrollBody = _, e.nScrollFoot = v, e.aoDrawCallback.push({
                            fn: Xt,
                            sName: "scrolling"
                        }), p[0]
                    }

                    function Xt(e) {
                        var n, i, a, o, s, l, c, u, h, d = e.oScroll, f = d.sX, p = d.sXInner, g = d.sY,
                            y = d.iBarWidth, _ = t(e.nScrollHead), v = _[0].style, m = _.children("div"),
                            w = m[0].style, b = m.children("table"), S = e.nScrollBody, T = t(S), A = S.style,
                            C = t(e.nScrollFoot).children("div"), P = C.children("table"), D = t(e.nTHead),
                            L = t(e.nTable), I = L[0], E = I.style, k = e.nTFoot ? t(e.nTFoot) : null, V = e.oBrowser,
                            R = V.bScrollOversize, M = x(e.aoColumns, "nTh"), O = [], N = [], H = [], j = [],
                            z = function (t) {
                                var e = t.style;
                                e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
                            }, X = S.scrollHeight > S.clientHeight;
                        if (e.scrollBarVis !== X && e.scrollBarVis !== r) return e.scrollBarVis = X, void G(e);
                        e.scrollBarVis = X, L.children("thead, tfoot").remove(), k && (l = k.clone().prependTo(L), i = k.find("tr"), o = l.find("tr")), s = D.clone().prependTo(L), n = D.find("tr"), a = s.find("tr"), s.find("th, td").removeAttr("tabindex"), f || (A.width = "100%", _[0].style.width = "100%"), t.each(ft(e, s), (function (t, n) {
                            c = F(e, t), n.style.width = e.aoColumns[c].sWidth
                        })), k && Bt((function (t) {
                            t.style.width = ""
                        }), o), h = L.outerWidth(), "" === f ? (E.width = "100%", R && (L.find("tbody").height() > S.offsetHeight || "scroll" == T.css("overflow-y")) && (E.width = Kt(L.outerWidth() - y)), h = L.outerWidth()) : "" !== p && (E.width = Kt(p), h = L.outerWidth()), Bt(z, a), Bt((function (e) {
                            H.push(e.innerHTML), O.push(Kt(t(e).css("width")))
                        }), a), Bt((function (e, n) {
                            -1 !== t.inArray(e, M) && (e.style.width = O[n])
                        }), n), t(a).height(0), k && (Bt(z, o), Bt((function (e) {
                            j.push(e.innerHTML), N.push(Kt(t(e).css("width")))
                        }), o), Bt((function (t, e) {
                            t.style.width = N[e]
                        }), i), t(o).height(0)), Bt((function (t, e) {
                            t.innerHTML = '<div class="dataTables_sizing">' + H[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = O[e]
                        }), a), k && Bt((function (t, e) {
                            t.innerHTML = '<div class="dataTables_sizing">' + j[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = N[e]
                        }), o), L.outerWidth() < h ? (u = S.scrollHeight > S.offsetHeight || "scroll" == T.css("overflow-y") ? h + y : h, R && (S.scrollHeight > S.offsetHeight || "scroll" == T.css("overflow-y")) && (E.width = Kt(u - y)), "" !== f && "" === p || le(e, 1, "Possible column misalignment", 6)) : u = "100%", A.width = Kt(u), v.width = Kt(u), k && (e.nScrollFoot.style.width = Kt(u)), g || R && (A.height = Kt(I.offsetHeight + y));
                        var B = L.outerWidth();
                        b[0].style.width = Kt(B), w.width = Kt(B);
                        var Y = L.height() > S.clientHeight || "scroll" == T.css("overflow-y"),
                            U = "padding" + (V.bScrollbarLeft ? "Left" : "Right");
                        w[U] = Y ? y + "px" : "0px", k && (P[0].style.width = Kt(B), C[0].style.width = Kt(B), C[0].style[U] = Y ? y + "px" : "0px"), L.children("colgroup").insertBefore(L.children("thead")), T.trigger("scroll"), !e.bSorted && !e.bFiltered || e._drawHold || (S.scrollTop = 0)
                    }

                    function Bt(t, e, n) {
                        for (var r, i, a = 0, o = 0, s = e.length; o < s;) {
                            for (r = e[o].firstChild, i = n ? n[o].firstChild : null; r;) 1 === r.nodeType && (n ? t(r, i, a) : t(r, a), a++), r = r.nextSibling, i = n ? i.nextSibling : null;
                            o++
                        }
                    }

                    var Yt = /<.*?>/g;

                    function Ut(n) {
                        var r, i, a, o = n.nTable, s = n.aoColumns, l = n.oScroll, c = l.sY, u = l.sX, h = l.sXInner,
                            d = s.length, f = j(n, "bVisible"), p = t("th", n.nTHead), g = o.getAttribute("width"),
                            y = o.parentNode, _ = !1, v = n.oBrowser, m = v.bScrollOversize, x = o.style.width;
                        for (x && -1 !== x.indexOf("%") && (g = x), r = 0; r < f.length; r++) null !== (i = s[f[r]]).sWidth && (i.sWidth = Qt(i.sWidthOrig, y), _ = !0);
                        if (m || !_ && !u && !c && d == H(n) && d == p.length) for (r = 0; r < d; r++) {
                            var w = F(n, r);
                            null !== w && (s[w].sWidth = Kt(p.eq(r).width()))
                        } else {
                            var b = t(o).clone().css("visibility", "hidden").removeAttr("id");
                            b.find("tbody tr").remove();
                            var S = t("<tr/>").appendTo(b.find("tbody"));
                            for (b.find("thead, tfoot").remove(), b.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()), b.find("tfoot th, tfoot td").css("width", ""), p = ft(n, b.find("thead")[0]), r = 0; r < f.length; r++) i = s[f[r]], p[r].style.width = null !== i.sWidthOrig && "" !== i.sWidthOrig ? Kt(i.sWidthOrig) : "", i.sWidthOrig && u && t(p[r]).append(t("<div/>").css({
                                width: i.sWidthOrig,
                                margin: 0,
                                padding: 0,
                                border: 0,
                                height: 1
                            }));
                            if (n.aoData.length) for (r = 0; r < f.length; r++) i = s[a = f[r]], t(qt(n, a)).clone(!1).append(i.sContentPadding).appendTo(S);
                            t("[name]", b).removeAttr("name");
                            var T = t("<div/>").css(u || c ? {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: 1,
                                right: 0,
                                overflow: "hidden"
                            } : {}).append(b).appendTo(y);
                            u && h ? b.width(h) : u ? (b.css("width", "auto"), b.removeAttr("width"), b.width() < y.clientWidth && g && b.width(y.clientWidth)) : c ? b.width(y.clientWidth) : g && b.width(g);
                            var A = 0;
                            for (r = 0; r < f.length; r++) {
                                var C = t(p[r]), P = C.outerWidth() - C.width(),
                                    D = v.bBounding ? Math.ceil(p[r].getBoundingClientRect().width) : C.outerWidth();
                                A += D, s[f[r]].sWidth = Kt(D - P)
                            }
                            o.style.width = Kt(A), T.remove()
                        }
                        if (g && (o.style.width = Kt(g)), (g || u) && !n._reszEvt) {
                            var L = function () {
                                t(e).on("resize.DT-" + n.sInstance, Wt((function () {
                                    G(n)
                                })))
                            };
                            m ? setTimeout(L, 1e3) : L(), n._reszEvt = !0
                        }
                    }

                    var Wt = l.util.throttle;

                    function Qt(e, r) {
                        if (!e) return 0;
                        var i = t("<div/>").css("width", Kt(e)).appendTo(r || n.body), a = i[0].offsetWidth;
                        return i.remove(), a
                    }

                    function qt(e, n) {
                        var r = Jt(e, n);
                        if (r < 0) return null;
                        var i = e.aoData[r];
                        return i.nTr ? i.anCells[n] : t("<td/>").html(W(e, r, n, "display"))[0]
                    }

                    function Jt(t, e) {
                        for (var n, r = -1, i = -1, a = 0, o = t.aoData.length; a < o; a++) (n = (n = (n = W(t, a, e, "display") + "").replace(Yt, "")).replace(/&nbsp;/g, " ")).length > r && (r = n.length, i = a);
                        return i
                    }

                    function Kt(t) {
                        return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
                    }

                    function Zt(e) {
                        var n, i, a, o, s, c, u, h = [], d = e.aoColumns, f = e.aaSortingFixed, p = t.isPlainObject(f),
                            g = [], y = function (e) {
                                e.length && !Array.isArray(e[0]) ? g.push(e) : t.merge(g, e)
                            };
                        for (Array.isArray(f) && y(f), p && f.pre && y(f.pre), y(e.aaSorting), p && f.post && y(f.post), n = 0; n < g.length; n++) for (i = 0, a = (o = d[u = g[n][0]].aDataSort).length; i < a; i++) c = d[s = o[i]].sType || "string", g[n]._idx === r && (g[n]._idx = t.inArray(g[n][1], d[s].asSorting)), h.push({
                            src: u,
                            col: s,
                            dir: g[n][1],
                            index: g[n]._idx,
                            type: c,
                            formatter: l.ext.type.order[c + "-pre"]
                        });
                        return h
                    }

                    function $t(t) {
                        var e, n, r, i, a, o = [], s = l.ext.type.order, c = t.aoData, u = (t.aoColumns, 0),
                            h = t.aiDisplayMaster;
                        for (z(t), e = 0, n = (a = Zt(t)).length; e < n; e++) (i = a[e]).formatter && u++, ie(t, i.col);
                        if ("ssp" != ye(t) && 0 !== a.length) {
                            for (e = 0, r = h.length; e < r; e++) o[h[e]] = e;
                            u === a.length ? h.sort((function (t, e) {
                                var n, r, i, s, l, u = a.length, h = c[t]._aSortData, d = c[e]._aSortData;
                                for (i = 0; i < u; i++) if (0 !== (s = (n = h[(l = a[i]).col]) < (r = d[l.col]) ? -1 : n > r ? 1 : 0)) return "asc" === l.dir ? s : -s;
                                return (n = o[t]) < (r = o[e]) ? -1 : n > r ? 1 : 0
                            })) : h.sort((function (t, e) {
                                var n, r, i, l, u, h = a.length, d = c[t]._aSortData, f = c[e]._aSortData;
                                for (i = 0; i < h; i++) if (n = d[(u = a[i]).col], r = f[u.col], 0 !== (l = (s[u.type + "-" + u.dir] || s["string-" + u.dir])(n, r))) return l;
                                return (n = o[t]) < (r = o[e]) ? -1 : n > r ? 1 : 0
                            }))
                        }
                        t.bSorted = !0
                    }

                    function te(t) {
                        for (var e, n, r = t.aoColumns, i = Zt(t), a = t.oLanguage.oAria, o = 0, s = r.length; o < s; o++) {
                            var l = r[o], c = l.asSorting, u = l.sTitle.replace(/<.*?>/g, ""), h = l.nTh;
                            h.removeAttribute("aria-sort"), l.bSortable ? (i.length > 0 && i[0].col == o ? (h.setAttribute("aria-sort", "asc" == i[0].dir ? "ascending" : "descending"), n = c[i[0].index + 1] || c[0]) : n = c[0], e = u + ("asc" === n ? a.sSortAscending : a.sSortDescending)) : e = u, h.setAttribute("aria-label", e)
                        }
                    }

                    function ee(e, n, i, a) {
                        var o, s = e.aoColumns[n], l = e.aaSorting, c = s.asSorting, u = function (e, n) {
                            var i = e._idx;
                            return i === r && (i = t.inArray(e[1], c)), i + 1 < c.length ? i + 1 : n ? null : 0
                        };
                        if ("number" == typeof l[0] && (l = e.aaSorting = [l]), i && e.oFeatures.bSortMulti) {
                            var h = t.inArray(n, x(l, "0"));
                            -1 !== h ? (null === (o = u(l[h], !0)) && 1 === l.length && (o = 0), null === o ? l.splice(h, 1) : (l[h][1] = c[o], l[h]._idx = o)) : (l.push([n, c[0], 0]), l[l.length - 1]._idx = 0)
                        } else l.length && l[0][0] == n ? (o = u(l[0]), l.length = 1, l[0][1] = c[o], l[0]._idx = o) : (l.length = 0, l.push([n, c[0]]), l[0]._idx = 0);
                        ut(e), "function" == typeof a && a(e)
                    }

                    function ne(t, e, n, r) {
                        var i = t.aoColumns[n];
                        he(e, {}, (function (e) {
                            !1 !== i.bSortable && (t.oFeatures.bProcessing ? (jt(t, !0), setTimeout((function () {
                                ee(t, n, e.shiftKey, r), "ssp" !== ye(t) && jt(t, !1)
                            }), 0)) : ee(t, n, e.shiftKey, r))
                        }))
                    }

                    function re(e) {
                        var n, r, i, a = e.aLastSort, o = e.oClasses.sSortColumn, s = Zt(e), l = e.oFeatures;
                        if (l.bSort && l.bSortClasses) {
                            for (n = 0, r = a.length; n < r; n++) i = a[n].src, t(x(e.aoData, "anCells", i)).removeClass(o + (n < 2 ? n + 1 : 3));
                            for (n = 0, r = s.length; n < r; n++) i = s[n].src, t(x(e.aoData, "anCells", i)).addClass(o + (n < 2 ? n + 1 : 3))
                        }
                        e.aLastSort = s
                    }

                    function ie(t, e) {
                        var n, r, i, a = t.aoColumns[e], o = l.ext.order[a.sSortDataType];
                        o && (n = o.call(t.oInstance, t, e, N(t, e)));
                        for (var s = l.ext.type.order[a.sType + "-pre"], c = 0, u = t.aoData.length; c < u; c++) (r = t.aoData[c])._aSortData || (r._aSortData = []), r._aSortData[e] && !o || (i = o ? n[c] : W(t, c, e, "sort"), r._aSortData[e] = s ? s(i) : i)
                    }

                    function ae(e) {
                        if (e.oFeatures.bStateSave && !e.bDestroying) {
                            var n = {
                                time: +new Date,
                                start: e._iDisplayStart,
                                length: e._iDisplayLength,
                                order: t.extend(!0, [], e.aaSorting),
                                search: Lt(e.oPreviousSearch),
                                columns: t.map(e.aoColumns, (function (t, n) {
                                    return {visible: t.bVisible, search: Lt(e.aoPreSearchCols[n])}
                                }))
                            };
                            fe(e, "aoStateSaveParams", "stateSaveParams", [e, n]), e.oSavedState = n, e.fnStateSaveCallback.call(e.oInstance, e, n)
                        }
                    }

                    function oe(e, n, i) {
                        var a, o, s = e.aoColumns, l = function (n) {
                            if (n && n.time) {
                                var l = fe(e, "aoStateLoadParams", "stateLoadParams", [e, n]);
                                if (-1 === t.inArray(!1, l)) {
                                    var c = e.iStateDuration;
                                    if (c > 0 && n.time < +new Date - 1e3 * c) i(); else if (n.columns && s.length !== n.columns.length) i(); else {
                                        if (e.oLoadedState = t.extend(!0, {}, n), n.start !== r && (e._iDisplayStart = n.start, e.iInitDisplayStart = n.start), n.length !== r && (e._iDisplayLength = n.length), n.order !== r && (e.aaSorting = [], t.each(n.order, (function (t, n) {
                                            e.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n)
                                        }))), n.search !== r && t.extend(e.oPreviousSearch, It(n.search)), n.columns) for (a = 0, o = n.columns.length; a < o; a++) {
                                            var u = n.columns[a];
                                            u.visible !== r && (s[a].bVisible = u.visible), u.search !== r && t.extend(e.aoPreSearchCols[a], It(u.search))
                                        }
                                        fe(e, "aoStateLoaded", "stateLoaded", [e, n]), i()
                                    }
                                } else i()
                            } else i()
                        };
                        if (e.oFeatures.bStateSave) {
                            var c = e.fnStateLoadCallback.call(e.oInstance, e, l);
                            c !== r && l(c)
                        } else i()
                    }

                    function se(e) {
                        var n = l.settings, r = t.inArray(e, x(n, "nTable"));
                        return -1 !== r ? n[r] : null
                    }

                    function le(t, n, r, i) {
                        if (r = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + r, i && (r += ". For more information about this error, please see http://datatables.net/tn/" + i), n) e.console && console.log && console.log(r); else {
                            var a = l.ext, o = a.sErrMode || a.errMode;
                            if (t && fe(t, null, "error", [t, i, r]), "alert" == o) alert(r); else {
                                if ("throw" == o) throw new Error(r);
                                "function" == typeof o && o(t, i, r)
                            }
                        }
                    }

                    function ce(e, n, i, a) {
                        Array.isArray(i) ? t.each(i, (function (t, r) {
                            Array.isArray(r) ? ce(e, n, r[0], r[1]) : ce(e, n, r)
                        })) : (a === r && (a = i), n[i] !== r && (e[a] = n[i]))
                    }

                    function ue(e, n, r) {
                        var i;
                        for (var a in n) n.hasOwnProperty(a) && (i = n[a], t.isPlainObject(i) ? (t.isPlainObject(e[a]) || (e[a] = {}), t.extend(!0, e[a], i)) : r && "data" !== a && "aaData" !== a && Array.isArray(i) ? e[a] = i.slice() : e[a] = i);
                        return e
                    }

                    function he(e, n, r) {
                        t(e).on("click.DT", n, (function (n) {
                            t(e).trigger("blur"), r(n)
                        })).on("keypress.DT", n, (function (t) {
                            13 === t.which && (t.preventDefault(), r(t))
                        })).on("selectstart.DT", (function () {
                            return !1
                        }))
                    }

                    function de(t, e, n, r) {
                        n && t[e].push({fn: n, sName: r})
                    }

                    function fe(e, n, r, i) {
                        var a = [];
                        if (n && (a = t.map(e[n].slice().reverse(), (function (t, n) {
                            return t.fn.apply(e.oInstance, i)
                        }))), null !== r) {
                            var o = t.Event(r + ".dt");
                            t(e.nTable).trigger(o, i), a.push(o.result)
                        }
                        return a
                    }

                    function pe(t) {
                        var e = t._iDisplayStart, n = t.fnDisplayEnd(), r = t._iDisplayLength;
                        e >= n && (e = n - r), e -= e % r, (-1 === r || e < 0) && (e = 0), t._iDisplayStart = e
                    }

                    function ge(e, n) {
                        var r = e.renderer, i = l.ext.renderer[n];
                        return t.isPlainObject(r) && r[n] ? i[r[n]] || i._ : "string" == typeof r && i[r] || i._
                    }

                    function ye(t) {
                        return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
                    }

                    var _e = [], ve = Array.prototype;
                    a = function (e, n) {
                        if (!(this instanceof a)) return new a(e, n);
                        var r = [], i = function (e) {
                            var n = function (e) {
                                var n, r, i = l.settings, a = t.map(i, (function (t, e) {
                                    return t.nTable
                                }));
                                return e ? e.nTable && e.oApi ? [e] : e.nodeName && "table" === e.nodeName.toLowerCase() ? -1 !== (n = t.inArray(e, a)) ? [i[n]] : null : e && "function" == typeof e.settings ? e.settings().toArray() : ("string" == typeof e ? r = t(e) : e instanceof t && (r = e), r ? r.map((function (e) {
                                    return -1 !== (n = t.inArray(this, a)) ? i[n] : null
                                })).toArray() : void 0) : []
                            }(e);
                            n && r.push.apply(r, n)
                        };
                        if (Array.isArray(e)) for (var o = 0, s = e.length; o < s; o++) i(e[o]); else i(e);
                        this.context = A(r), n && t.merge(this, n), this.selector = {
                            rows: null,
                            cols: null,
                            opts: null
                        }, a.extend(this, this, _e)
                    }, l.Api = a, t.extend(a.prototype, {
                        any: function () {
                            return 0 !== this.count()
                        }, concat: ve.concat, context: [], count: function () {
                            return this.flatten().length
                        }, each: function (t) {
                            for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
                            return this
                        }, eq: function (t) {
                            var e = this.context;
                            return e.length > t ? new a(e[t], this[t]) : null
                        }, filter: function (t) {
                            var e = [];
                            if (ve.filter) e = ve.filter.call(this, t, this); else for (var n = 0, r = this.length; n < r; n++) t.call(this, this[n], n, this) && e.push(this[n]);
                            return new a(this.context, e)
                        }, flatten: function () {
                            var t = [];
                            return new a(this.context, t.concat.apply(t, this.toArray()))
                        }, join: ve.join, indexOf: ve.indexOf || function (t, e) {
                            for (var n = e || 0, r = this.length; n < r; n++) if (this[n] === t) return n;
                            return -1
                        }, iterator: function (t, e, n, i) {
                            var o, s, l, c, u, h, d, f, p = [], g = this.context, y = this.selector;
                            for ("string" == typeof t && (i = n, n = e, e = t, t = !1), s = 0, l = g.length; s < l; s++) {
                                var _ = new a(g[s]);
                                if ("table" === e) (o = n.call(_, g[s], s)) !== r && p.push(o); else if ("columns" === e || "rows" === e) (o = n.call(_, g[s], this[s], s)) !== r && p.push(o); else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e) for (d = this[s], "column-rows" === e && (h = Te(g[s], y.opts)), c = 0, u = d.length; c < u; c++) f = d[c], (o = "cell" === e ? n.call(_, g[s], f.row, f.column, s, c) : n.call(_, g[s], f, s, c, h)) !== r && p.push(o)
                            }
                            if (p.length || i) {
                                var v = new a(g, t ? p.concat.apply([], p) : p), m = v.selector;
                                return m.rows = y.rows, m.cols = y.cols, m.opts = y.opts, v
                            }
                            return this
                        }, lastIndexOf: ve.lastIndexOf || function (t, e) {
                            return this.indexOf.apply(this.toArray.reverse(), arguments)
                        }, length: 0, map: function (t) {
                            var e = [];
                            if (ve.map) e = ve.map.call(this, t, this); else for (var n = 0, r = this.length; n < r; n++) e.push(t.call(this, this[n], n));
                            return new a(this.context, e)
                        }, pluck: function (t) {
                            return this.map((function (e) {
                                return e[t]
                            }))
                        }, pop: ve.pop, push: ve.push, reduce: ve.reduce || function (t, e) {
                            return R(this, t, e, 0, this.length, 1)
                        }, reduceRight: ve.reduceRight || function (t, e) {
                            return R(this, t, e, this.length - 1, -1, -1)
                        }, reverse: ve.reverse, selector: null, shift: ve.shift, slice: function () {
                            return new a(this.context, this)
                        }, sort: ve.sort, splice: ve.splice, toArray: function () {
                            return ve.slice.call(this)
                        }, to$: function () {
                            return t(this)
                        }, toJQuery: function () {
                            return t(this)
                        }, unique: function () {
                            return new a(this.context, A(this))
                        }, unshift: ve.unshift
                    }), a.extend = function (t, e, n) {
                        if (n.length && e && (e instanceof a || e.__dt_wrapper)) {
                            var r, i, o, s = function (t, e, n) {
                                return function () {
                                    var r = e.apply(t, arguments);
                                    return a.extend(r, r, n.methodExt), r
                                }
                            };
                            for (r = 0, i = n.length; r < i; r++) e[(o = n[r]).name] = "function" === o.type ? s(t, o.val, o) : "object" === o.type ? {} : o.val, e[o.name].__dt_wrapper = !0, a.extend(t, e[o.name], o.propExt)
                        }
                    }, a.register = o = function (e, n) {
                        if (Array.isArray(e)) for (var r = 0, i = e.length; r < i; r++) a.register(e[r], n); else {
                            var o, s, l, c, u = e.split("."), h = _e, d = function (t, e) {
                                for (var n = 0, r = t.length; n < r; n++) if (t[n].name === e) return t[n];
                                return null
                            };
                            for (o = 0, s = u.length; o < s; o++) {
                                var f = d(h, l = (c = -1 !== u[o].indexOf("()")) ? u[o].replace("()", "") : u[o]);
                                f || (f = {
                                    name: l,
                                    val: {},
                                    methodExt: [],
                                    propExt: [],
                                    type: "object"
                                }, h.push(f)), o === s - 1 ? (f.val = n, f.type = "function" == typeof n ? "function" : t.isPlainObject(n) ? "object" : "other") : h = c ? f.methodExt : f.propExt
                            }
                        }
                    }, a.registerPlural = s = function (t, e, n) {
                        a.register(t, n), a.register(e, (function () {
                            var t = n.apply(this, arguments);
                            return t === this ? this : t instanceof a ? t.length ? Array.isArray(t[0]) ? new a(t.context, t[0]) : t[0] : r : t
                        }))
                    };
                    var me = function (e, n) {
                        if (Array.isArray(e)) return t.map(e, (function (t) {
                            return me(t, n)
                        }));
                        if ("number" == typeof e) return [n[e]];
                        var r = t.map(n, (function (t, e) {
                            return t.nTable
                        }));
                        return t(r).filter(e).map((function (e) {
                            var i = t.inArray(this, r);
                            return n[i]
                        })).toArray()
                    };
                    o("tables()", (function (t) {
                        return t !== r && null !== t ? new a(me(t, this.context)) : this
                    })), o("table()", (function (t) {
                        var e = this.tables(t), n = e.context;
                        return n.length ? new a(n[0]) : e
                    })), s("tables().nodes()", "table().node()", (function () {
                        return this.iterator("table", (function (t) {
                            return t.nTable
                        }), 1)
                    })), s("tables().body()", "table().body()", (function () {
                        return this.iterator("table", (function (t) {
                            return t.nTBody
                        }), 1)
                    })), s("tables().header()", "table().header()", (function () {
                        return this.iterator("table", (function (t) {
                            return t.nTHead
                        }), 1)
                    })), s("tables().footer()", "table().footer()", (function () {
                        return this.iterator("table", (function (t) {
                            return t.nTFoot
                        }), 1)
                    })), s("tables().containers()", "table().container()", (function () {
                        return this.iterator("table", (function (t) {
                            return t.nTableWrapper
                        }), 1)
                    })), o("draw()", (function (t) {
                        return this.iterator("table", (function (e) {
                            "page" === t ? ct(e) : ("string" == typeof t && (t = "full-hold" !== t), ut(e, !1 === t))
                        }))
                    })), o("page()", (function (t) {
                        return t === r ? this.page.info().page : this.iterator("table", (function (e) {
                            Nt(e, t)
                        }))
                    })), o("page.info()", (function (t) {
                        if (0 === this.context.length) return r;
                        var e = this.context[0], n = e._iDisplayStart,
                            i = e.oFeatures.bPaginate ? e._iDisplayLength : -1, a = e.fnRecordsDisplay(), o = -1 === i;
                        return {
                            page: o ? 0 : Math.floor(n / i),
                            pages: o ? 1 : Math.ceil(a / i),
                            start: n,
                            end: e.fnDisplayEnd(),
                            length: i,
                            recordsTotal: e.fnRecordsTotal(),
                            recordsDisplay: a,
                            serverSide: "ssp" === ye(e)
                        }
                    })), o("page.len()", (function (t) {
                        return t === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", (function (e) {
                            Ot(e, t)
                        }))
                    }));
                    var xe = function (t, e, n) {
                        if (n) {
                            var r = new a(t);
                            r.one("draw", (function () {
                                n(r.ajax.json())
                            }))
                        }
                        if ("ssp" == ye(t)) ut(t, e); else {
                            jt(t, !0);
                            var i = t.jqXHR;
                            i && 4 !== i.readyState && i.abort(), pt(t, [], (function (n) {
                                et(t);
                                for (var r = vt(t, n), i = 0, a = r.length; i < a; i++) B(t, r[i]);
                                ut(t, e), jt(t, !1)
                            }))
                        }
                    };
                    o("ajax.json()", (function () {
                        var t = this.context;
                        if (t.length > 0) return t[0].json
                    })), o("ajax.params()", (function () {
                        var t = this.context;
                        if (t.length > 0) return t[0].oAjaxData
                    })), o("ajax.reload()", (function (t, e) {
                        return this.iterator("table", (function (n) {
                            xe(n, !1 === e, t)
                        }))
                    })), o("ajax.url()", (function (e) {
                        var n = this.context;
                        return e === r ? 0 === n.length ? r : (n = n[0]).ajax ? t.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", (function (n) {
                            t.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e
                        }))
                    })), o("ajax.url().load()", (function (t, e) {
                        return this.iterator("table", (function (n) {
                            xe(n, !1 === e, t)
                        }))
                    }));
                    var we = function (t, e, n, a, o) {
                        var s, l, c, u, h, d, f = [], p = typeof e;
                        for (e && "string" !== p && "function" !== p && e.length !== r || (e = [e]), c = 0, u = e.length; c < u; c++) for (h = 0, d = (l = e[c] && e[c].split && !e[c].match(/[\[\(:]/) ? e[c].split(",") : [e[c]]).length; h < d; h++) (s = n("string" == typeof l[h] ? l[h].trim() : l[h])) && s.length && (f = f.concat(s));
                        var g = i.selector[t];
                        if (g.length) for (c = 0, u = g.length; c < u; c++) f = g[c](a, o, f);
                        return A(f)
                    }, be = function (e) {
                        return e || (e = {}), e.filter && e.search === r && (e.search = e.filter), t.extend({
                            search: "none",
                            order: "current",
                            page: "all"
                        }, e)
                    }, Se = function (t) {
                        for (var e = 0, n = t.length; e < n; e++) if (t[e].length > 0) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
                        return t.length = 0, t
                    }, Te = function (e, n) {
                        var r, i = [], a = e.aiDisplay, o = e.aiDisplayMaster, s = n.search, l = n.order, c = n.page;
                        if ("ssp" == ye(e)) return "removed" === s ? [] : b(0, o.length);
                        if ("current" == c) for (h = e._iDisplayStart, d = e.fnDisplayEnd(); h < d; h++) i.push(a[h]); else if ("current" == l || "applied" == l) {
                            if ("none" == s) i = o.slice(); else if ("applied" == s) i = a.slice(); else if ("removed" == s) {
                                for (var u = {}, h = 0, d = a.length; h < d; h++) u[a[h]] = null;
                                i = t.map(o, (function (t) {
                                    return u.hasOwnProperty(t) ? null : t
                                }))
                            }
                        } else if ("index" == l || "original" == l) for (h = 0, d = e.aoData.length; h < d; h++) ("none" == s || -1 === (r = t.inArray(h, a)) && "removed" == s || r >= 0 && "applied" == s) && i.push(h);
                        return i
                    };
                    o("rows()", (function (e, n) {
                        e === r ? e = "" : t.isPlainObject(e) && (n = e, e = ""), n = be(n);
                        var i = this.iterator("table", (function (i) {
                            return function (e, n, i) {
                                var a;
                                return we("row", n, (function (n) {
                                    var o = y(n), s = e.aoData;
                                    if (null !== o && !i) return [o];
                                    if (a || (a = Te(e, i)), null !== o && -1 !== t.inArray(o, a)) return [o];
                                    if (null === n || n === r || "" === n) return a;
                                    if ("function" == typeof n) return t.map(a, (function (t) {
                                        var e = s[t];
                                        return n(t, e._aData, e.nTr) ? t : null
                                    }));
                                    if (n.nodeName) {
                                        var l = n._DT_RowIndex, c = n._DT_CellIndex;
                                        if (l !== r) return s[l] && s[l].nTr === n ? [l] : [];
                                        if (c) return s[c.row] && s[c.row].nTr === n.parentNode ? [c.row] : [];
                                        var u = t(n).closest("*[data-dt-row]");
                                        return u.length ? [u.data("dt-row")] : []
                                    }
                                    if ("string" == typeof n && "#" === n.charAt(0)) {
                                        var h = e.aIds[n.replace(/^#/, "")];
                                        if (h !== r) return [h.idx]
                                    }
                                    var d = S(w(e.aoData, a, "nTr"));
                                    return t(d).filter(n).map((function () {
                                        return this._DT_RowIndex
                                    })).toArray()
                                }), e, i)
                            }(i, e, n)
                        }), 1);
                        return i.selector.rows = e, i.selector.opts = n, i
                    })), o("rows().nodes()", (function () {
                        return this.iterator("row", (function (t, e) {
                            return t.aoData[e].nTr || r
                        }), 1)
                    })), o("rows().data()", (function () {
                        return this.iterator(!0, "rows", (function (t, e) {
                            return w(t.aoData, e, "_aData")
                        }), 1)
                    })), s("rows().cache()", "row().cache()", (function (t) {
                        return this.iterator("row", (function (e, n) {
                            var r = e.aoData[n];
                            return "search" === t ? r._aFilterData : r._aSortData
                        }), 1)
                    })), s("rows().invalidate()", "row().invalidate()", (function (t) {
                        return this.iterator("row", (function (e, n) {
                            rt(e, n, t)
                        }))
                    })), s("rows().indexes()", "row().index()", (function () {
                        return this.iterator("row", (function (t, e) {
                            return e
                        }), 1)
                    })), s("rows().ids()", "row().id()", (function (t) {
                        for (var e = [], n = this.context, r = 0, i = n.length; r < i; r++) for (var o = 0, s = this[r].length; o < s; o++) {
                            var l = n[r].rowIdFn(n[r].aoData[this[r][o]]._aData);
                            e.push((!0 === t ? "#" : "") + l)
                        }
                        return new a(n, e)
                    })), s("rows().remove()", "row().remove()", (function () {
                        var t = this;
                        return this.iterator("row", (function (e, n, i) {
                            var a, o, s, l, c, u, h = e.aoData, d = h[n];
                            for (h.splice(n, 1), a = 0, o = h.length; a < o; a++) if (u = (c = h[a]).anCells, null !== c.nTr && (c.nTr._DT_RowIndex = a), null !== u) for (s = 0, l = u.length; s < l; s++) u[s]._DT_CellIndex.row = a;
                            nt(e.aiDisplayMaster, n), nt(e.aiDisplay, n), nt(t[i], n, !1), e._iRecordsDisplay > 0 && e._iRecordsDisplay--, pe(e);
                            var f = e.rowIdFn(d._aData);
                            f !== r && delete e.aIds[f]
                        })), this.iterator("table", (function (t) {
                            for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e
                        })), this
                    })), o("rows.add()", (function (e) {
                        var n = this.iterator("table", (function (t) {
                            var n, r, i, a = [];
                            for (r = 0, i = e.length; r < i; r++) (n = e[r]).nodeName && "TR" === n.nodeName.toUpperCase() ? a.push(Y(t, n)[0]) : a.push(B(t, n));
                            return a
                        }), 1), r = this.rows(-1);
                        return r.pop(), t.merge(r, n), r
                    })), o("row()", (function (t, e) {
                        return Se(this.rows(t, e))
                    })), o("row().data()", (function (t) {
                        var e = this.context;
                        if (t === r) return e.length && this.length ? e[0].aoData[this[0]]._aData : r;
                        var n = e[0].aoData[this[0]];
                        return n._aData = t, Array.isArray(t) && n.nTr && n.nTr.id && $(e[0].rowId)(t, n.nTr.id), rt(e[0], this[0], "data"), this
                    })), o("row().node()", (function () {
                        var t = this.context;
                        return t.length && this.length && t[0].aoData[this[0]].nTr || null
                    })), o("row.add()", (function (e) {
                        e instanceof t && e.length && (e = e[0]);
                        var n = this.iterator("table", (function (t) {
                            return e.nodeName && "TR" === e.nodeName.toUpperCase() ? Y(t, e)[0] : B(t, e)
                        }));
                        return this.row(n[0])
                    }));
                    var Ae = function (t, e) {
                        var n = t.context;
                        if (n.length) {
                            var i = n[0].aoData[e !== r ? e : t[0]];
                            i && i._details && (i._details.remove(), i._detailsShow = r, i._details = r)
                        }
                    }, Ce = function (t, e) {
                        var n = t.context;
                        if (n.length && t.length) {
                            var r = n[0].aoData[t[0]];
                            r._details && (r._detailsShow = e, e ? r._details.insertAfter(r.nTr) : r._details.detach(), Pe(n[0]))
                        }
                    }, Pe = function (t) {
                        var e = new a(t), n = t.aoData;
                        e.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), x(n, "_details").length > 0 && (e.on("draw.dt.DT_details", (function (r, i) {
                            t === i && e.rows({page: "current"}).eq(0).each((function (t) {
                                var e = n[t];
                                e._detailsShow && e._details.insertAfter(e.nTr)
                            }))
                        })), e.on("column-visibility.dt.DT_details", (function (e, r, i, a) {
                            if (t === r) for (var o, s = H(r), l = 0, c = n.length; l < c; l++) (o = n[l])._details && o._details.children("td[colspan]").attr("colspan", s)
                        })), e.on("destroy.dt.DT_details", (function (r, i) {
                            if (t === i) for (var a = 0, o = n.length; a < o; a++) n[a]._details && Ae(e, a)
                        })))
                    };
                    o("row().child()", (function (e, n) {
                        var i = this.context;
                        return e === r ? i.length && this.length ? i[0].aoData[this[0]]._details : r : (!0 === e ? this.child.show() : !1 === e ? Ae(this) : i.length && this.length && function (e, n, r, i) {
                            var a = [], o = function (n, r) {
                                if (Array.isArray(n) || n instanceof t) for (var i = 0, s = n.length; i < s; i++) o(n[i], r); else if (n.nodeName && "tr" === n.nodeName.toLowerCase()) a.push(n); else {
                                    var l = t("<tr><td></td></tr>").addClass(r);
                                    t("td", l).addClass(r).html(n)[0].colSpan = H(e), a.push(l[0])
                                }
                            };
                            o(r, i), n._details && n._details.detach(), n._details = t(a), n._detailsShow && n._details.insertAfter(n.nTr)
                        }(i[0], i[0].aoData[this[0]], e, n), this)
                    })), o(["row().child.show()", "row().child().show()"], (function (t) {
                        return Ce(this, !0), this
                    })), o(["row().child.hide()", "row().child().hide()"], (function () {
                        return Ce(this, !1), this
                    })), o(["row().child.remove()", "row().child().remove()"], (function () {
                        return Ae(this), this
                    })), o("row().child.isShown()", (function () {
                        var t = this.context;
                        return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1
                    }));
                    var De = /^([^:]+):(name|visIdx|visible)$/, Le = function (t, e, n, r, i) {
                        for (var a = [], o = 0, s = i.length; o < s; o++) a.push(W(t, i[o], e));
                        return a
                    };
                    o("columns()", (function (e, n) {
                        e === r ? e = "" : t.isPlainObject(e) && (n = e, e = ""), n = be(n);
                        var i = this.iterator("table", (function (r) {
                            return function (e, n, r) {
                                var i = e.aoColumns, a = x(i, "sName"), o = x(i, "nTh");
                                return we("column", n, (function (n) {
                                    var s = y(n);
                                    if ("" === n) return b(i.length);
                                    if (null !== s) return [s >= 0 ? s : i.length + s];
                                    if ("function" == typeof n) {
                                        var l = Te(e, r);
                                        return t.map(i, (function (t, r) {
                                            return n(r, Le(e, r, 0, 0, l), o[r]) ? r : null
                                        }))
                                    }
                                    var c = "string" == typeof n ? n.match(De) : "";
                                    if (c) switch (c[2]) {
                                        case"visIdx":
                                        case"visible":
                                            var u = parseInt(c[1], 10);
                                            if (u < 0) {
                                                var h = t.map(i, (function (t, e) {
                                                    return t.bVisible ? e : null
                                                }));
                                                return [h[h.length + u]]
                                            }
                                            return [F(e, u)];
                                        case"name":
                                            return t.map(a, (function (t, e) {
                                                return t === c[1] ? e : null
                                            }));
                                        default:
                                            return []
                                    }
                                    if (n.nodeName && n._DT_CellIndex) return [n._DT_CellIndex.column];
                                    var d = t(o).filter(n).map((function () {
                                        return t.inArray(this, o)
                                    })).toArray();
                                    if (d.length || !n.nodeName) return d;
                                    var f = t(n).closest("*[data-dt-column]");
                                    return f.length ? [f.data("dt-column")] : []
                                }), e, r)
                            }(r, e, n)
                        }), 1);
                        return i.selector.cols = e, i.selector.opts = n, i
                    })), s("columns().header()", "column().header()", (function (t, e) {
                        return this.iterator("column", (function (t, e) {
                            return t.aoColumns[e].nTh
                        }), 1)
                    })), s("columns().footer()", "column().footer()", (function (t, e) {
                        return this.iterator("column", (function (t, e) {
                            return t.aoColumns[e].nTf
                        }), 1)
                    })), s("columns().data()", "column().data()", (function () {
                        return this.iterator("column-rows", Le, 1)
                    })), s("columns().dataSrc()", "column().dataSrc()", (function () {
                        return this.iterator("column", (function (t, e) {
                            return t.aoColumns[e].mData
                        }), 1)
                    })), s("columns().cache()", "column().cache()", (function (t) {
                        return this.iterator("column-rows", (function (e, n, r, i, a) {
                            return w(e.aoData, a, "search" === t ? "_aFilterData" : "_aSortData", n)
                        }), 1)
                    })), s("columns().nodes()", "column().nodes()", (function () {
                        return this.iterator("column-rows", (function (t, e, n, r, i) {
                            return w(t.aoData, i, "anCells", e)
                        }), 1)
                    })), s("columns().visible()", "column().visible()", (function (e, n) {
                        var i = this, a = this.iterator("column", (function (n, i) {
                            if (e === r) return n.aoColumns[i].bVisible;
                            !function (e, n, i) {
                                var a, o, s, l, c = e.aoColumns, u = c[n], h = e.aoData;
                                if (i === r) return u.bVisible;
                                if (u.bVisible !== i) {
                                    if (i) {
                                        var d = t.inArray(!0, x(c, "bVisible"), n + 1);
                                        for (o = 0, s = h.length; o < s; o++) l = h[o].nTr, a = h[o].anCells, l && l.insertBefore(a[n], a[d] || null)
                                    } else t(x(e.aoData, "anCells", n)).detach();
                                    u.bVisible = i
                                }
                            }(n, i, e)
                        }));
                        return e !== r && this.iterator("table", (function (a) {
                            lt(a, a.aoHeader), lt(a, a.aoFooter), a.aiDisplay.length || t(a.nTBody).find("td[colspan]").attr("colspan", H(a)), ae(a), i.iterator("column", (function (t, r) {
                                fe(t, null, "column-visibility", [t, r, e, n])
                            })), (n === r || n) && i.columns.adjust()
                        })), a
                    })), s("columns().indexes()", "column().index()", (function (t) {
                        return this.iterator("column", (function (e, n) {
                            return "visible" === t ? N(e, n) : n
                        }), 1)
                    })), o("columns.adjust()", (function () {
                        return this.iterator("table", (function (t) {
                            G(t)
                        }), 1)
                    })), o("column.index()", (function (t, e) {
                        if (0 !== this.context.length) {
                            var n = this.context[0];
                            if ("fromVisible" === t || "toData" === t) return F(n, e);
                            if ("fromData" === t || "toVisible" === t) return N(n, e)
                        }
                    })), o("column()", (function (t, e) {
                        return Se(this.columns(t, e))
                    }));
                    o("cells()", (function (e, n, i) {
                        if (t.isPlainObject(e) && (e.row === r ? (i = e, e = null) : (i = n, n = null)), t.isPlainObject(n) && (i = n, n = null), null === n || n === r) return this.iterator("table", (function (n) {
                            return function (e, n, i) {
                                var a, o, s, l, c, u, h, d = e.aoData, f = Te(e, i), p = S(w(d, f, "anCells")),
                                    g = t(C([], p)), y = e.aoColumns.length;
                                return we("cell", n, (function (n) {
                                    var i = "function" == typeof n;
                                    if (null === n || n === r || i) {
                                        for (o = [], s = 0, l = f.length; s < l; s++) for (a = f[s], c = 0; c < y; c++) u = {
                                            row: a,
                                            column: c
                                        }, i ? (h = d[a], n(u, W(e, a, c), h.anCells ? h.anCells[c] : null) && o.push(u)) : o.push(u);
                                        return o
                                    }
                                    if (t.isPlainObject(n)) return n.column !== r && n.row !== r && -1 !== t.inArray(n.row, f) ? [n] : [];
                                    var p = g.filter(n).map((function (t, e) {
                                        return {row: e._DT_CellIndex.row, column: e._DT_CellIndex.column}
                                    })).toArray();
                                    return p.length || !n.nodeName ? p : (h = t(n).closest("*[data-dt-row]")).length ? [{
                                        row: h.data("dt-row"),
                                        column: h.data("dt-column")
                                    }] : []
                                }), e, i)
                            }(n, e, be(i))
                        }));
                        var a, o, s, l, c = i ? {page: i.page, order: i.order, search: i.search} : {},
                            u = this.columns(n, c), h = this.rows(e, c), d = this.iterator("table", (function (t, e) {
                                var n = [];
                                for (a = 0, o = h[e].length; a < o; a++) for (s = 0, l = u[e].length; s < l; s++) n.push({
                                    row: h[e][a],
                                    column: u[e][s]
                                });
                                return n
                            }), 1), f = i && i.selected ? this.cells(d, i) : d;
                        return t.extend(f.selector, {cols: n, rows: e, opts: i}), f
                    })), s("cells().nodes()", "cell().node()", (function () {
                        return this.iterator("cell", (function (t, e, n) {
                            var i = t.aoData[e];
                            return i && i.anCells ? i.anCells[n] : r
                        }), 1)
                    })), o("cells().data()", (function () {
                        return this.iterator("cell", (function (t, e, n) {
                            return W(t, e, n)
                        }), 1)
                    })), s("cells().cache()", "cell().cache()", (function (t) {
                        return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", (function (e, n, r) {
                            return e.aoData[n][t][r]
                        }), 1)
                    })), s("cells().render()", "cell().render()", (function (t) {
                        return this.iterator("cell", (function (e, n, r) {
                            return W(e, n, r, t)
                        }), 1)
                    })), s("cells().indexes()", "cell().index()", (function () {
                        return this.iterator("cell", (function (t, e, n) {
                            return {row: e, column: n, columnVisible: N(t, n)}
                        }), 1)
                    })), s("cells().invalidate()", "cell().invalidate()", (function (t) {
                        return this.iterator("cell", (function (e, n, r) {
                            rt(e, n, t, r)
                        }))
                    })), o("cell()", (function (t, e, n) {
                        return Se(this.cells(t, e, n))
                    })), o("cell().data()", (function (t) {
                        var e = this.context, n = this[0];
                        return t === r ? e.length && n.length ? W(e[0], n[0].row, n[0].column) : r : (Q(e[0], n[0].row, n[0].column, t), rt(e[0], n[0].row, "data", n[0].column), this)
                    })), o("order()", (function (t, e) {
                        var n = this.context;
                        return t === r ? 0 !== n.length ? n[0].aaSorting : r : ("number" == typeof t ? t = [[t, e]] : t.length && !Array.isArray(t[0]) && (t = Array.prototype.slice.call(arguments)), this.iterator("table", (function (e) {
                            e.aaSorting = t.slice()
                        })))
                    })), o("order.listener()", (function (t, e, n) {
                        return this.iterator("table", (function (r) {
                            ne(r, t, e, n)
                        }))
                    })), o("order.fixed()", (function (e) {
                        if (!e) {
                            var n = this.context, i = n.length ? n[0].aaSortingFixed : r;
                            return Array.isArray(i) ? {pre: i} : i
                        }
                        return this.iterator("table", (function (n) {
                            n.aaSortingFixed = t.extend(!0, {}, e)
                        }))
                    })), o(["columns().order()", "column().order()"], (function (e) {
                        var n = this;
                        return this.iterator("table", (function (r, i) {
                            var a = [];
                            t.each(n[i], (function (t, n) {
                                a.push([n, e])
                            })), r.aaSorting = a
                        }))
                    })), o("search()", (function (e, n, i, a) {
                        var o = this.context;
                        return e === r ? 0 !== o.length ? o[0].oPreviousSearch.sSearch : r : this.iterator("table", (function (r) {
                            r.oFeatures.bFilter && xt(r, t.extend({}, r.oPreviousSearch, {
                                sSearch: e + "",
                                bRegex: null !== n && n,
                                bSmart: null === i || i,
                                bCaseInsensitive: null === a || a
                            }), 1)
                        }))
                    })), s("columns().search()", "column().search()", (function (e, n, i, a) {
                        return this.iterator("column", (function (o, s) {
                            var l = o.aoPreSearchCols;
                            if (e === r) return l[s].sSearch;
                            o.oFeatures.bFilter && (t.extend(l[s], {
                                sSearch: e + "",
                                bRegex: null !== n && n,
                                bSmart: null === i || i,
                                bCaseInsensitive: null === a || a
                            }), xt(o, o.oPreviousSearch, 1))
                        }))
                    })), o("state()", (function () {
                        return this.context.length ? this.context[0].oSavedState : null
                    })), o("state.clear()", (function () {
                        return this.iterator("table", (function (t) {
                            t.fnStateSaveCallback.call(t.oInstance, t, {})
                        }))
                    })), o("state.loaded()", (function () {
                        return this.context.length ? this.context[0].oLoadedState : null
                    })), o("state.save()", (function () {
                        return this.iterator("table", (function (t) {
                            ae(t)
                        }))
                    })), l.versionCheck = l.fnVersionCheck = function (t) {
                        for (var e, n, r = l.version.split("."), i = t.split("."), a = 0, o = i.length; a < o; a++) if ((e = parseInt(r[a], 10) || 0) !== (n = parseInt(i[a], 10) || 0)) return e > n;
                        return !0
                    }, l.isDataTable = l.fnIsDataTable = function (e) {
                        var n = t(e).get(0), r = !1;
                        return e instanceof l.Api || (t.each(l.settings, (function (e, i) {
                            var a = i.nScrollHead ? t("table", i.nScrollHead)[0] : null,
                                o = i.nScrollFoot ? t("table", i.nScrollFoot)[0] : null;
                            i.nTable !== n && a !== n && o !== n || (r = !0)
                        })), r)
                    }, l.tables = l.fnTables = function (e) {
                        var n = !1;
                        t.isPlainObject(e) && (n = e.api, e = e.visible);
                        var r = t.map(l.settings, (function (n) {
                            if (!e || e && t(n.nTable).is(":visible")) return n.nTable
                        }));
                        return n ? new a(r) : r
                    }, l.camelToHungarian = D, o("$()", (function (e, n) {
                        var r = this.rows(n).nodes(), i = t(r);
                        return t([].concat(i.filter(e).toArray(), i.find(e).toArray()))
                    })), t.each(["on", "one", "off"], (function (e, n) {
                        o(n + "()", (function () {
                            var e = Array.prototype.slice.call(arguments);
                            e[0] = t.map(e[0].split(/\s/), (function (t) {
                                return t.match(/\.dt\b/) ? t : t + ".dt"
                            })).join(" ");
                            var r = t(this.tables().nodes());
                            return r[n].apply(r, e), this
                        }))
                    })), o("clear()", (function () {
                        return this.iterator("table", (function (t) {
                            et(t)
                        }))
                    })), o("settings()", (function () {
                        return new a(this.context, this.context)
                    })), o("init()", (function () {
                        var t = this.context;
                        return t.length ? t[0].oInit : null
                    })), o("data()", (function () {
                        return this.iterator("table", (function (t) {
                            return x(t.aoData, "_aData")
                        })).flatten()
                    })), o("destroy()", (function (n) {
                        return n = n || !1, this.iterator("table", (function (r) {
                            var i, o = r.nTableWrapper.parentNode, s = r.oClasses, c = r.nTable, u = r.nTBody,
                                h = r.nTHead, d = r.nTFoot, f = t(c), p = t(u), g = t(r.nTableWrapper),
                                y = t.map(r.aoData, (function (t) {
                                    return t.nTr
                                }));
                            r.bDestroying = !0, fe(r, "aoDestroyCallback", "destroy", [r]), n || new a(r).columns().visible(!0), g.off(".DT").find(":not(tbody *)").off(".DT"), t(e).off(".DT-" + r.sInstance), c != h.parentNode && (f.children("thead").detach(), f.append(h)), d && c != d.parentNode && (f.children("tfoot").detach(), f.append(d)), r.aaSorting = [], r.aaSortingFixed = [], re(r), t(y).removeClass(r.asStripeClasses.join(" ")), t("th, td", h).removeClass(s.sSortable + " " + s.sSortableAsc + " " + s.sSortableDesc + " " + s.sSortableNone), p.children().detach(), p.append(y);
                            var _ = n ? "remove" : "detach";
                            f[_](), g[_](), !n && o && (o.insertBefore(c, r.nTableReinsertBefore), f.css("width", r.sDestroyWidth).removeClass(s.sTable), (i = r.asDestroyStripes.length) && p.children().each((function (e) {
                                t(this).addClass(r.asDestroyStripes[e % i])
                            })));
                            var v = t.inArray(r, l.settings);
                            -1 !== v && l.settings.splice(v, 1)
                        }))
                    })), t.each(["column", "row", "cell"], (function (t, e) {
                        o(e + "s().every()", (function (t) {
                            var n = this.selector.opts, i = this;
                            return this.iterator(e, (function (a, o, s, l, c) {
                                t.call(i[e](o, "cell" === e ? s : n, "cell" === e ? n : r), o, s, l, c)
                            }))
                        }))
                    })), o("i18n()", (function (e, n, i) {
                        var a = this.context[0], o = Z(e)(a.oLanguage);
                        return o === r && (o = n), i !== r && t.isPlainObject(o) && (o = o[i] !== r ? o[i] : o._), o.replace("%d", i)
                    })), l.version = "1.10.23", l.settings = [], l.models = {}, l.models.oSearch = {
                        bCaseInsensitive: !0,
                        sSearch: "",
                        bRegex: !1,
                        bSmart: !0
                    }, l.models.oRow = {
                        nTr: null,
                        anCells: null,
                        _aData: [],
                        _aSortData: null,
                        _aFilterData: null,
                        _sFilterRow: null,
                        _sRowStripe: "",
                        src: null,
                        idx: -1
                    }, l.models.oColumn = {
                        idx: null,
                        aDataSort: null,
                        asSorting: null,
                        bSearchable: null,
                        bSortable: null,
                        bVisible: null,
                        _sManualType: null,
                        _bAttrSrc: !1,
                        fnCreatedCell: null,
                        fnGetData: null,
                        fnSetData: null,
                        mData: null,
                        mRender: null,
                        nTh: null,
                        nTf: null,
                        sClass: null,
                        sContentPadding: null,
                        sDefaultContent: null,
                        sName: null,
                        sSortDataType: "std",
                        sSortingClass: null,
                        sSortingClassJUI: null,
                        sTitle: null,
                        sType: null,
                        sWidth: null,
                        sWidthOrig: null
                    }, l.defaults = {
                        aaData: null,
                        aaSorting: [[0, "asc"]],
                        aaSortingFixed: [],
                        ajax: null,
                        aLengthMenu: [10, 25, 50, 100],
                        aoColumns: null,
                        aoColumnDefs: null,
                        aoSearchCols: [],
                        asStripeClasses: null,
                        bAutoWidth: !0,
                        bDeferRender: !1,
                        bDestroy: !1,
                        bFilter: !0,
                        bInfo: !0,
                        bLengthChange: !0,
                        bPaginate: !0,
                        bProcessing: !1,
                        bRetrieve: !1,
                        bScrollCollapse: !1,
                        bServerSide: !1,
                        bSort: !0,
                        bSortMulti: !0,
                        bSortCellsTop: !1,
                        bSortClasses: !0,
                        bStateSave: !1,
                        fnCreatedRow: null,
                        fnDrawCallback: null,
                        fnFooterCallback: null,
                        fnFormatNumber: function (t) {
                            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
                        },
                        fnHeaderCallback: null,
                        fnInfoCallback: null,
                        fnInitComplete: null,
                        fnPreDrawCallback: null,
                        fnRowCallback: null,
                        fnServerData: null,
                        fnServerParams: null,
                        fnStateLoadCallback: function (t) {
                            try {
                                return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
                            } catch (t) {
                                return {}
                            }
                        },
                        fnStateLoadParams: null,
                        fnStateLoaded: null,
                        fnStateSaveCallback: function (t, e) {
                            try {
                                (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                            } catch (t) {
                            }
                        },
                        fnStateSaveParams: null,
                        iStateDuration: 7200,
                        iDeferLoading: null,
                        iDisplayLength: 10,
                        iDisplayStart: 0,
                        iTabIndex: 0,
                        oClasses: {},
                        oLanguage: {
                            oAria: {
                                sSortAscending: ": activate to sort column ascending",
                                sSortDescending: ": activate to sort column descending"
                            },
                            oPaginate: {sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous"},
                            sEmptyTable: "No data available in table",
                            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                            sInfoEmpty: "Showing 0 to 0 of 0 entries",
                            sInfoFiltered: "(filtered from _MAX_ total entries)",
                            sInfoPostFix: "",
                            sDecimal: "",
                            sThousands: ",",
                            sLengthMenu: "Show _MENU_ entries",
                            sLoadingRecords: "Loading...",
                            sProcessing: "Processing...",
                            sSearch: "Search:",
                            sSearchPlaceholder: "",
                            sUrl: "",
                            sZeroRecords: "No matching records found"
                        },
                        oSearch: t.extend({}, l.models.oSearch),
                        sAjaxDataProp: "data",
                        sAjaxSource: null,
                        sDom: "lfrtip",
                        searchDelay: null,
                        sPaginationType: "simple_numbers",
                        sScrollX: "",
                        sScrollXInner: "",
                        sScrollY: "",
                        sServerMethod: "GET",
                        renderer: null,
                        rowId: "DT_RowId"
                    }, P(l.defaults), l.defaults.column = {
                        aDataSort: null,
                        iDataSort: -1,
                        asSorting: ["asc", "desc"],
                        bSearchable: !0,
                        bSortable: !0,
                        bVisible: !0,
                        fnCreatedCell: null,
                        mData: null,
                        mRender: null,
                        sCellType: "td",
                        sClass: "",
                        sContentPadding: "",
                        sDefaultContent: null,
                        sName: "",
                        sSortDataType: "std",
                        sTitle: null,
                        sType: null,
                        sWidth: null
                    }, P(l.defaults.column), l.models.oSettings = {
                        oFeatures: {
                            bAutoWidth: null,
                            bDeferRender: null,
                            bFilter: null,
                            bInfo: null,
                            bLengthChange: null,
                            bPaginate: null,
                            bProcessing: null,
                            bServerSide: null,
                            bSort: null,
                            bSortMulti: null,
                            bSortClasses: null,
                            bStateSave: null
                        },
                        oScroll: {bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null},
                        oLanguage: {fnInfoCallback: null},
                        oBrowser: {bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0},
                        ajax: null,
                        aanFeatures: [],
                        aoData: [],
                        aiDisplay: [],
                        aiDisplayMaster: [],
                        aIds: {},
                        aoColumns: [],
                        aoHeader: [],
                        aoFooter: [],
                        oPreviousSearch: {},
                        aoPreSearchCols: [],
                        aaSorting: null,
                        aaSortingFixed: [],
                        asStripeClasses: null,
                        asDestroyStripes: [],
                        sDestroyWidth: 0,
                        aoRowCallback: [],
                        aoHeaderCallback: [],
                        aoFooterCallback: [],
                        aoDrawCallback: [],
                        aoRowCreatedCallback: [],
                        aoPreDrawCallback: [],
                        aoInitComplete: [],
                        aoStateSaveParams: [],
                        aoStateLoadParams: [],
                        aoStateLoaded: [],
                        sTableId: "",
                        nTable: null,
                        nTHead: null,
                        nTFoot: null,
                        nTBody: null,
                        nTableWrapper: null,
                        bDeferLoading: !1,
                        bInitialised: !1,
                        aoOpenRows: [],
                        sDom: null,
                        searchDelay: null,
                        sPaginationType: "two_button",
                        iStateDuration: 0,
                        aoStateSave: [],
                        aoStateLoad: [],
                        oSavedState: null,
                        oLoadedState: null,
                        sAjaxSource: null,
                        sAjaxDataProp: null,
                        bAjaxDataGet: !0,
                        jqXHR: null,
                        json: r,
                        oAjaxData: r,
                        fnServerData: null,
                        aoServerParams: [],
                        sServerMethod: null,
                        fnFormatNumber: null,
                        aLengthMenu: null,
                        iDraw: 0,
                        bDrawing: !1,
                        iDrawError: -1,
                        _iDisplayLength: 10,
                        _iDisplayStart: 0,
                        _iRecordsTotal: 0,
                        _iRecordsDisplay: 0,
                        oClasses: {},
                        bFiltered: !1,
                        bSorted: !1,
                        bSortCellsTop: null,
                        oInit: null,
                        aoDestroyCallback: [],
                        fnRecordsTotal: function () {
                            return "ssp" == ye(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
                        },
                        fnRecordsDisplay: function () {
                            return "ssp" == ye(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
                        },
                        fnDisplayEnd: function () {
                            var t = this._iDisplayLength, e = this._iDisplayStart, n = e + t, r = this.aiDisplay.length,
                                i = this.oFeatures, a = i.bPaginate;
                            return i.bServerSide ? !1 === a || -1 === t ? e + r : Math.min(e + t, this._iRecordsDisplay) : !a || n > r || -1 === t ? r : n
                        },
                        oInstance: null,
                        sInstance: null,
                        iTabIndex: 0,
                        nScrollHead: null,
                        nScrollFoot: null,
                        aLastSort: [],
                        oPlugins: {},
                        rowIdFn: null,
                        rowId: null
                    }, l.ext = i = {
                        buttons: {},
                        classes: {},
                        builder: "-source-",
                        errMode: "alert",
                        feature: [],
                        search: [],
                        selector: {cell: [], column: [], row: []},
                        internal: {},
                        legacy: {ajax: null},
                        pager: {},
                        renderer: {pageButton: {}, header: {}},
                        order: {},
                        type: {detect: [], search: {}, order: {}},
                        _unique: 0,
                        fnVersionCheck: l.fnVersionCheck,
                        iApiIndex: 0,
                        oJUIClasses: {},
                        sVersion: l.version
                    }, t.extend(i, {
                        afnFiltering: i.search,
                        aTypes: i.type.detect,
                        ofnSearch: i.type.search,
                        oSort: i.type.order,
                        afnSortData: i.order,
                        aoFeatures: i.feature,
                        oApi: i.internal,
                        oStdClasses: i.classes,
                        oPagination: i.pager
                    }), t.extend(l.ext.classes, {
                        sTable: "dataTable",
                        sNoFooter: "no-footer",
                        sPageButton: "paginate_button",
                        sPageButtonActive: "current",
                        sPageButtonDisabled: "disabled",
                        sStripeOdd: "odd",
                        sStripeEven: "even",
                        sRowEmpty: "dataTables_empty",
                        sWrapper: "dataTables_wrapper",
                        sFilter: "dataTables_filter",
                        sInfo: "dataTables_info",
                        sPaging: "dataTables_paginate paging_",
                        sLength: "dataTables_length",
                        sProcessing: "dataTables_processing",
                        sSortAsc: "sorting_asc",
                        sSortDesc: "sorting_desc",
                        sSortable: "sorting",
                        sSortableAsc: "sorting_asc_disabled",
                        sSortableDesc: "sorting_desc_disabled",
                        sSortableNone: "sorting_disabled",
                        sSortColumn: "sorting_",
                        sFilterInput: "",
                        sLengthSelect: "",
                        sScrollWrapper: "dataTables_scroll",
                        sScrollHead: "dataTables_scrollHead",
                        sScrollHeadInner: "dataTables_scrollHeadInner",
                        sScrollBody: "dataTables_scrollBody",
                        sScrollFoot: "dataTables_scrollFoot",
                        sScrollFootInner: "dataTables_scrollFootInner",
                        sHeaderTH: "",
                        sFooterTH: "",
                        sSortJUIAsc: "",
                        sSortJUIDesc: "",
                        sSortJUI: "",
                        sSortJUIAscAllowed: "",
                        sSortJUIDescAllowed: "",
                        sSortJUIWrapper: "",
                        sSortIcon: "",
                        sJUIHeader: "",
                        sJUIFooter: ""
                    });
                    var Ie = l.ext.pager;

                    function Ee(t, e) {
                        var n = [], r = Ie.numbers_length, i = Math.floor(r / 2);
                        return e <= r ? n = b(0, e) : t <= i ? ((n = b(0, r - 2)).push("ellipsis"), n.push(e - 1)) : t >= e - 1 - i ? ((n = b(e - (r - 2), e)).splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : ((n = b(t - i + 2, t + i - 1)).push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
                    }

                    t.extend(Ie, {
                        simple: function (t, e) {
                            return ["previous", "next"]
                        }, full: function (t, e) {
                            return ["first", "previous", "next", "last"]
                        }, numbers: function (t, e) {
                            return [Ee(t, e)]
                        }, simple_numbers: function (t, e) {
                            return ["previous", Ee(t, e), "next"]
                        }, full_numbers: function (t, e) {
                            return ["first", "previous", Ee(t, e), "next", "last"]
                        }, first_last_numbers: function (t, e) {
                            return ["first", Ee(t, e), "last"]
                        }, _numbers: Ee, numbers_length: 7
                    }), t.extend(!0, l.ext.renderer, {
                        pageButton: {
                            _: function (e, i, a, o, s, l) {
                                var c, u, h, d = e.oClasses, f = e.oLanguage.oPaginate,
                                    p = e.oLanguage.oAria.paginate || {}, g = 0, y = function (n, r) {
                                        var i, o, h, _, v = d.sPageButtonDisabled, m = function (t) {
                                            Nt(e, t.data.action, !0)
                                        };
                                        for (i = 0, o = r.length; i < o; i++) if (h = r[i], Array.isArray(h)) {
                                            var x = t("<" + (h.DT_el || "div") + "/>").appendTo(n);
                                            y(x, h)
                                        } else {
                                            switch (c = null, u = h, _ = e.iTabIndex, h) {
                                                case"ellipsis":
                                                    n.append('<span class="ellipsis">&#x2026;</span>');
                                                    break;
                                                case"first":
                                                    c = f.sFirst, 0 === s && (_ = -1, u += " " + v);
                                                    break;
                                                case"previous":
                                                    c = f.sPrevious, 0 === s && (_ = -1, u += " " + v);
                                                    break;
                                                case"next":
                                                    c = f.sNext, 0 !== l && s !== l - 1 || (_ = -1, u += " " + v);
                                                    break;
                                                case"last":
                                                    c = f.sLast, 0 !== l && s !== l - 1 || (_ = -1, u += " " + v);
                                                    break;
                                                default:
                                                    c = e.fnFormatNumber(h + 1), u = s === h ? d.sPageButtonActive : ""
                                            }
                                            null !== c && (he(t("<a>", {
                                                class: d.sPageButton + " " + u,
                                                "aria-controls": e.sTableId,
                                                "aria-label": p[h],
                                                "data-dt-idx": g,
                                                tabindex: _,
                                                id: 0 === a && "string" == typeof h ? e.sTableId + "_" + h : null
                                            }).html(c).appendTo(n), {action: h}, m), g++)
                                        }
                                    };
                                try {
                                    h = t(i).find(n.activeElement).data("dt-idx")
                                } catch (t) {
                                }
                                y(t(i).empty(), o), h !== r && t(i).find("[data-dt-idx=" + h + "]").trigger("focus")
                            }
                        }
                    }), t.extend(l.ext.type.detect, [function (t, e) {
                        var n = e.oLanguage.sDecimal;
                        return v(t, n) ? "num" + n : null
                    }, function (t, e) {
                        if (t && !(t instanceof Date) && !d.test(t)) return null;
                        var n = Date.parse(t);
                        return null !== n && !isNaN(n) || g(t) ? "date" : null
                    }, function (t, e) {
                        var n = e.oLanguage.sDecimal;
                        return v(t, n, !0) ? "num-fmt" + n : null
                    }, function (t, e) {
                        var n = e.oLanguage.sDecimal;
                        return m(t, n) ? "html-num" + n : null
                    }, function (t, e) {
                        var n = e.oLanguage.sDecimal;
                        return m(t, n, !0) ? "html-num-fmt" + n : null
                    }, function (t, e) {
                        return g(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
                    }]), t.extend(l.ext.type.search, {
                        html: function (t) {
                            return g(t) ? t : "string" == typeof t ? t.replace(u, " ").replace(h, "") : ""
                        }, string: function (t) {
                            return g(t) ? t : "string" == typeof t ? t.replace(u, " ") : t
                        }
                    });
                    var ke = function (t, e, n, r) {
                        return 0 === t || t && "-" !== t ? (e && (t = _(t, e)), t.replace && (n && (t = t.replace(n, "")), r && (t = t.replace(r, ""))), 1 * t) : -1 / 0
                    };

                    function Ve(e) {
                        t.each({
                            num: function (t) {
                                return ke(t, e)
                            }, "num-fmt": function (t) {
                                return ke(t, e, p)
                            }, "html-num": function (t) {
                                return ke(t, e, h)
                            }, "html-num-fmt": function (t) {
                                return ke(t, e, h, p)
                            }
                        }, (function (t, n) {
                            i.type.order[t + e + "-pre"] = n, t.match(/^html\-/) && (i.type.search[t + e] = i.type.search.html)
                        }))
                    }

                    t.extend(i.type.order, {
                        "date-pre": function (t) {
                            var e = Date.parse(t);
                            return isNaN(e) ? -1 / 0 : e
                        }, "html-pre": function (t) {
                            return g(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
                        }, "string-pre": function (t) {
                            return g(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
                        }, "string-asc": function (t, e) {
                            return t < e ? -1 : t > e ? 1 : 0
                        }, "string-desc": function (t, e) {
                            return t < e ? 1 : t > e ? -1 : 0
                        }
                    }), Ve(""), t.extend(!0, l.ext.renderer, {
                        header: {
                            _: function (e, n, r, i) {
                                t(e.nTable).on("order.dt.DT", (function (t, a, o, s) {
                                    if (e === a) {
                                        var l = r.idx;
                                        n.removeClass(r.sSortingClass + " " + i.sSortAsc + " " + i.sSortDesc).addClass("asc" == s[l] ? i.sSortAsc : "desc" == s[l] ? i.sSortDesc : r.sSortingClass)
                                    }
                                }))
                            }, jqueryui: function (e, n, r, i) {
                                t("<div/>").addClass(i.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(i.sSortIcon + " " + r.sSortingClassJUI)).appendTo(n), t(e.nTable).on("order.dt.DT", (function (t, a, o, s) {
                                    if (e === a) {
                                        var l = r.idx;
                                        n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == s[l] ? i.sSortAsc : "desc" == s[l] ? i.sSortDesc : r.sSortingClass), n.find("span." + i.sSortIcon).removeClass(i.sSortJUIAsc + " " + i.sSortJUIDesc + " " + i.sSortJUI + " " + i.sSortJUIAscAllowed + " " + i.sSortJUIDescAllowed).addClass("asc" == s[l] ? i.sSortJUIAsc : "desc" == s[l] ? i.sSortJUIDesc : r.sSortingClassJUI)
                                    }
                                }))
                            }
                        }
                    });
                    var Re = function (t) {
                        return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
                    };

                    function Me(t) {
                        return function () {
                            var e = [se(this[l.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                            return l.ext.internal[t].apply(this, e)
                        }
                    }

                    return l.render = {
                        number: function (t, e, n, r, i) {
                            return {
                                display: function (a) {
                                    if ("number" != typeof a && "string" != typeof a) return a;
                                    var o = a < 0 ? "-" : "", s = parseFloat(a);
                                    if (isNaN(s)) return Re(a);
                                    s = s.toFixed(n), a = Math.abs(s);
                                    var l = parseInt(a, 10), c = n ? e + (a - l).toFixed(n).substring(2) : "";
                                    return o + (r || "") + l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + c + (i || "")
                                }
                            }
                        }, text: function () {
                            return {display: Re, filter: Re}
                        }
                    }, t.extend(l.ext.internal, {
                        _fnExternApiFunc: Me,
                        _fnBuildAjax: pt,
                        _fnAjaxUpdate: gt,
                        _fnAjaxParameters: yt,
                        _fnAjaxUpdateDraw: _t,
                        _fnAjaxDataSrc: vt,
                        _fnAddColumn: M,
                        _fnColumnOptions: O,
                        _fnAdjustColumnSizing: G,
                        _fnVisibleToColumnIndex: F,
                        _fnColumnIndexToVisible: N,
                        _fnVisbleColumns: H,
                        _fnGetColumns: j,
                        _fnColumnTypes: z,
                        _fnApplyColumnDefs: X,
                        _fnHungarianMap: P,
                        _fnCamelToHungarian: D,
                        _fnLanguageCompat: L,
                        _fnBrowserDetect: V,
                        _fnAddData: B,
                        _fnAddTr: Y,
                        _fnNodeToDataIndex: function (t, e) {
                            return e._DT_RowIndex !== r ? e._DT_RowIndex : null
                        },
                        _fnNodeToColumnIndex: U,
                        _fnGetCellData: W,
                        _fnSetCellData: Q,
                        _fnSplitObjNotation: K,
                        _fnGetObjectDataFn: Z,
                        _fnSetObjectDataFn: $,
                        _fnGetDataMaster: tt,
                        _fnClearTable: et,
                        _fnDeleteIndex: nt,
                        _fnInvalidate: rt,
                        _fnGetRowElements: it,
                        _fnCreateTr: at,
                        _fnBuildHead: st,
                        _fnDrawHead: lt,
                        _fnDraw: ct,
                        _fnReDraw: ut,
                        _fnAddOptionsHtml: ht,
                        _fnDetectHeader: dt,
                        _fnGetUniqueThs: ft,
                        _fnFeatureHtmlFilter: mt,
                        _fnFilterComplete: xt,
                        _fnFilterCustom: wt,
                        _fnFilterColumn: bt,
                        _fnFilter: St,
                        _fnFilterCreateSearch: Tt,
                        _fnEscapeRegex: At,
                        _fnFilterData: Dt,
                        _fnFeatureHtmlInfo: Et,
                        _fnUpdateInfo: kt,
                        _fnInfoMacros: Vt,
                        _fnInitialise: Rt,
                        _fnInitComplete: Mt,
                        _fnLengthChange: Ot,
                        _fnFeatureHtmlLength: Gt,
                        _fnFeatureHtmlPaginate: Ft,
                        _fnPageChange: Nt,
                        _fnFeatureHtmlProcessing: Ht,
                        _fnProcessingDisplay: jt,
                        _fnFeatureHtmlTable: zt,
                        _fnScrollDraw: Xt,
                        _fnApplyToChildren: Bt,
                        _fnCalculateColumnWidths: Ut,
                        _fnThrottle: Wt,
                        _fnConvertToWidth: Qt,
                        _fnGetWidestNode: qt,
                        _fnGetMaxLenString: Jt,
                        _fnStringToCss: Kt,
                        _fnSortFlatten: Zt,
                        _fnSort: $t,
                        _fnSortAria: te,
                        _fnSortListener: ee,
                        _fnSortAttachListener: ne,
                        _fnSortingClasses: re,
                        _fnSortData: ie,
                        _fnSaveState: ae,
                        _fnLoadState: oe,
                        _fnSettingsFromNode: se,
                        _fnLog: le,
                        _fnMap: ce,
                        _fnBindAction: he,
                        _fnCallbackReg: de,
                        _fnCallbackFire: fe,
                        _fnLengthOverflow: pe,
                        _fnRenderer: ge,
                        _fnDataSource: ye,
                        _fnRowAttributes: ot,
                        _fnExtend: ue,
                        _fnCalculateEnd: function () {
                        }
                    }), t.fn.dataTable = l, l.$ = t, t.fn.dataTableSettings = l.settings, t.fn.dataTableExt = l.ext, t.fn.DataTable = function (e) {
                        return t(this).dataTable(e).api()
                    }, t.each(l, (function (e, n) {
                        t.fn.DataTable[e] = n
                    })), t.fn.dataTable
                }(t, window, document)
            }.apply(e, r)) || (t.exports = i)
        }()
    }, HH4o: function (t, e, n) {
        var r = n("tiKp")("iterator"), i = !1;
        try {
            var a = 0, o = {
                next: function () {
                    return {done: !!a++}
                }, return: function () {
                    i = !0
                }
            };
            o[r] = function () {
                return this
            }, Array.from(o, (function () {
                throw 2
            }))
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var a = {};
                a[r] = function () {
                    return {
                        next: function () {
                            return {done: n = !0}
                        }
                    }
                }, t(a)
            } catch (t) {
            }
            return n
        }
    }, Hd5f: function (t, e, n) {
        var r = n("0Dky"), i = n("tiKp"), a = n("LQDL"), o = i("species");
        t.exports = function (t) {
            return a >= 51 || !r((function () {
                var e = [];
                return (e.constructor = {})[o] = function () {
                    return {foo: 1}
                }, 1 !== e[t](Boolean).foo
            }))
        }
    }, J30X: function (t, e, n) {
        n("I+eb")({target: "Array", stat: !0}, {isArray: n("6LWA")})
    }, JTJg: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("WjRb"), a = n("HYAF");
        r({target: "String", proto: !0, forced: !n("qxPZ")("includes")}, {
            includes: function (t) {
                return !!~String(a(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, JfAA: function (t, e, n) {
        "use strict";
        var r = n("busE"), i = n("glrk"), a = n("0Dky"), o = n("rW0t"), s = RegExp.prototype, l = s.toString,
            c = a((function () {
                return "/a/b" != l.call({source: "a", flags: "b"})
            })), u = "toString" != l.name;
        (c || u) && r(RegExp.prototype, "toString", (function () {
            var t = i(this), e = String(t.source), n = t.flags;
            return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in s) ? o.call(t) : n)
        }), {unsafe: !0})
    }, JiZb: function (t, e, n) {
        "use strict";
        var r = n("0GbY"), i = n("m/L8"), a = n("tiKp"), o = n("g6v/"), s = a("species");
        t.exports = function (t) {
            var e = r(t), n = i.f;
            o && e && !e[s] && n(e, s, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, Junv: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("6LWA"), a = [].reverse, o = [1, 2];
        r({target: "Array", proto: !0, forced: String(o) === String(o.reverse())}, {
            reverse: function () {
                return i(this) && (this.length = this.length), a.call(this)
            }
        })
    }, KmKo: function (t, e, n) {
        var r = n("glrk");
        t.exports = function (t) {
            var e = t.return;
            if (void 0 !== e) return r(e.call(t)).value
        }
    }, LQDL: function (t, e, n) {
        var r, i, a = n("2oRo"), o = n("NC/Y"), s = a.process, l = s && s.versions, c = l && l.v8;
        c ? i = (r = c.split("."))[0] + r[1] : o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (i = r[1]), t.exports = i && +i
    }, LhY9: function (t, e, n) {
        "use strict";
        n("QWBl"), n("FZtP"), n("tkto"), n("wLYn"), n("J30X"), n("UxlC"), n("rB9j"), n("ma9I"), n("yXV3"), n("4l63"), n("2B1R"), n("07d7"), n("+2oP"), n("hDyC"), n("qePV"), n("DQNa"), n("ToJy"), n("TeQF"), n("R5XZ"), n("pDQq"), n("uL8W"), n("JfAA"), n("eoL8"), n("OM9Z"), n("zKZe"), n("4mDm"), n("3bBZ"), n("E9XD"), n("EnZy"), n("Rfxz"), n("yq1k"), n("JTJg"), n("sMBO"), n("Junv"), n("toAj"), n("oVuX"), n("pNMO"), n("4Brf"), n("0oug"), n("PKPk"), n("pjDv");

        function r() {
        }

        var i = function (t) {
            return null == t ? r : function () {
                return this.querySelector(t)
            }
        };

        function a() {
            return []
        }

        var o = function (t) {
            return null == t ? a : function () {
                return this.querySelectorAll(t)
            }
        }, s = function (t) {
            return function () {
                return this.matches(t)
            }
        }, l = function (t) {
            return new Array(t.length)
        };

        function c(t, e) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
        }

        c.prototype = {
            constructor: c, appendChild: function (t) {
                return this._parent.insertBefore(t, this._next)
            }, insertBefore: function (t, e) {
                return this._parent.insertBefore(t, e)
            }, querySelector: function (t) {
                return this._parent.querySelector(t)
            }, querySelectorAll: function (t) {
                return this._parent.querySelectorAll(t)
            }
        };

        function u(t, e, n, r, i, a) {
            for (var o, s = 0, l = e.length, u = a.length; s < u; ++s) (o = e[s]) ? (o.__data__ = a[s], r[s] = o) : n[s] = new c(t, a[s]);
            for (; s < l; ++s) (o = e[s]) && (i[s] = o)
        }

        function h(t, e, n, r, i, a, o) {
            var s, l, u, h = {}, d = e.length, f = a.length, p = new Array(d);
            for (s = 0; s < d; ++s) (l = e[s]) && (p[s] = u = "$" + o.call(l, l.__data__, s, e), u in h ? i[s] = l : h[u] = l);
            for (s = 0; s < f; ++s) (l = h[u = "$" + o.call(t, a[s], s, a)]) ? (r[s] = l, l.__data__ = a[s], h[u] = null) : n[s] = new c(t, a[s]);
            for (s = 0; s < d; ++s) (l = e[s]) && h[p[s]] === l && (i[s] = l)
        }

        function d(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }

        var f = "http://www.w3.org/1999/xhtml", p = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: f,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, g = function (t) {
            var e = t += "", n = e.indexOf(":");
            return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), p.hasOwnProperty(e) ? {
                space: p[e],
                local: t
            } : t
        };

        function y(t) {
            return function () {
                this.removeAttribute(t)
            }
        }

        function _(t) {
            return function () {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function v(t, e) {
            return function () {
                this.setAttribute(t, e)
            }
        }

        function m(t, e) {
            return function () {
                this.setAttributeNS(t.space, t.local, e)
            }
        }

        function x(t, e) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
            }
        }

        function w(t, e) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
            }
        }

        var b = function (t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };

        function S(t) {
            return function () {
                this.style.removeProperty(t)
            }
        }

        function T(t, e, n) {
            return function () {
                this.style.setProperty(t, e, n)
            }
        }

        function A(t, e, n) {
            return function () {
                var r = e.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
            }
        }

        function C(t, e) {
            return t.style.getPropertyValue(e) || b(t).getComputedStyle(t, null).getPropertyValue(e)
        }

        function P(t) {
            return function () {
                delete this[t]
            }
        }

        function D(t, e) {
            return function () {
                this[t] = e
            }
        }

        function L(t, e) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? delete this[t] : this[t] = n
            }
        }

        function I(t) {
            return t.trim().split(/^|\s+/)
        }

        function E(t) {
            return t.classList || new k(t)
        }

        function k(t) {
            this._node = t, this._names = I(t.getAttribute("class") || "")
        }

        function V(t, e) {
            for (var n = E(t), r = -1, i = e.length; ++r < i;) n.add(e[r])
        }

        function R(t, e) {
            for (var n = E(t), r = -1, i = e.length; ++r < i;) n.remove(e[r])
        }

        function M(t) {
            return function () {
                V(this, t)
            }
        }

        function O(t) {
            return function () {
                R(this, t)
            }
        }

        function G(t, e) {
            return function () {
                (e.apply(this, arguments) ? V : R)(this, t)
            }
        }

        k.prototype = {
            add: function (t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            }, remove: function (t) {
                var e = this._names.indexOf(t);
                e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
            }, contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        };

        function F() {
            this.textContent = ""
        }

        function N(t) {
            return function () {
                this.textContent = t
            }
        }

        function H(t) {
            return function () {
                var e = t.apply(this, arguments);
                this.textContent = null == e ? "" : e
            }
        }

        function j() {
            this.innerHTML = ""
        }

        function z(t) {
            return function () {
                this.innerHTML = t
            }
        }

        function X(t) {
            return function () {
                var e = t.apply(this, arguments);
                this.innerHTML = null == e ? "" : e
            }
        }

        function B() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function Y() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function U(t) {
            return function () {
                var e = this.ownerDocument, n = this.namespaceURI;
                return n === f && e.documentElement.namespaceURI === f ? e.createElement(t) : e.createElementNS(n, t)
            }
        }

        function W(t) {
            return function () {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }

        var Q = function (t) {
            var e = g(t);
            return (e.local ? W : U)(e)
        };

        function q() {
            return null
        }

        function J() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function K() {
            var t = this.cloneNode(!1), e = this.parentNode;
            return e ? e.insertBefore(t, this.nextSibling) : t
        }

        function Z() {
            var t = this.cloneNode(!0), e = this.parentNode;
            return e ? e.insertBefore(t, this.nextSibling) : t
        }

        var $ = {}, tt = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || ($ = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function et(t, e, n) {
            return t = nt(t, e, n), function (e) {
                var n = e.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e)
            }
        }

        function nt(t, e, n) {
            return function (r) {
                var i = tt;
                tt = r;
                try {
                    t.call(this, this.__data__, e, n)
                } finally {
                    tt = i
                }
            }
        }

        function rt(t) {
            return t.trim().split(/^|\s+/).map((function (t) {
                var e = "", n = t.indexOf(".");
                return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {type: t, name: e}
            }))
        }

        function it(t) {
            return function () {
                var e = this.__on;
                if (e) {
                    for (var n, r = 0, i = -1, a = e.length; r < a; ++r) n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++i ? e.length = i : delete this.__on
                }
            }
        }

        function at(t, e, n) {
            var r = $.hasOwnProperty(t.type) ? et : nt;
            return function (i, a, o) {
                var s, l = this.__on, c = r(e, a, o);
                if (l) for (var u = 0, h = l.length; u < h; ++u) if ((s = l[u]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = c, s.capture = n), void (s.value = e);
                this.addEventListener(t.type, c, n), s = {
                    type: t.type,
                    name: t.name,
                    value: e,
                    listener: c,
                    capture: n
                }, l ? l.push(s) : this.__on = [s]
            }
        }

        function ot(t, e, n, r) {
            var i = tt;
            t.sourceEvent = tt, tt = t;
            try {
                return e.apply(n, r)
            } finally {
                tt = i
            }
        }

        function st(t, e, n) {
            var r = b(t), i = r.CustomEvent;
            "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i)
        }

        function lt(t, e) {
            return function () {
                return st(this, t, e)
            }
        }

        function ct(t, e) {
            return function () {
                return st(this, t, e.apply(this, arguments))
            }
        }

        var ut = [null];

        function ht(t, e) {
            this._groups = t, this._parents = e
        }

        function dt() {
            return new ht([[document.documentElement]], ut)
        }

        ht.prototype = dt.prototype = {
            constructor: ht, select: function (t) {
                "function" != typeof t && (t = i(t));
                for (var e = this._groups, n = e.length, r = new Array(n), a = 0; a < n; ++a) for (var o, s, l = e[a], c = l.length, u = r[a] = new Array(c), h = 0; h < c; ++h) (o = l[h]) && (s = t.call(o, o.__data__, h, l)) && ("__data__" in o && (s.__data__ = o.__data__), u[h] = s);
                return new ht(r, this._parents)
            }, selectAll: function (t) {
                "function" != typeof t && (t = o(t));
                for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a) for (var s, l = e[a], c = l.length, u = 0; u < c; ++u) (s = l[u]) && (r.push(t.call(s, s.__data__, u, l)), i.push(s));
                return new ht(r, i)
            }, filter: function (t) {
                "function" != typeof t && (t = s(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var a, o = e[i], l = o.length, c = r[i] = [], u = 0; u < l; ++u) (a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a);
                return new ht(r, this._parents)
            }, data: function (t, e) {
                if (!t) return y = new Array(this.size()), d = -1, this.each((function (t) {
                    y[++d] = t
                })), y;
                var n, r = e ? h : u, i = this._parents, a = this._groups;
                "function" != typeof t && (n = t, t = function () {
                    return n
                });
                for (var o = a.length, s = new Array(o), l = new Array(o), c = new Array(o), d = 0; d < o; ++d) {
                    var f = i[d], p = a[d], g = p.length, y = t.call(f, f && f.__data__, d, i), _ = y.length,
                        v = l[d] = new Array(_), m = s[d] = new Array(_);
                    r(f, p, v, m, c[d] = new Array(g), y, e);
                    for (var x, w, b = 0, S = 0; b < _; ++b) if (x = v[b]) {
                        for (b >= S && (S = b + 1); !(w = m[S]) && ++S < _;) ;
                        x._next = w || null
                    }
                }
                return (s = new ht(s, i))._enter = l, s._exit = c, s
            }, enter: function () {
                return new ht(this._enter || this._groups.map(l), this._parents)
            }, exit: function () {
                return new ht(this._exit || this._groups.map(l), this._parents)
            }, join: function (t, e, n) {
                var r = this.enter(), i = this, a = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""), null != e && (i = e(i)), null == n ? a.remove() : n(a), r && i ? r.merge(i).order() : i
            }, merge: function (t) {
                for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s) for (var l, c = e[s], u = n[s], h = c.length, d = o[s] = new Array(h), f = 0; f < h; ++f) (l = c[f] || u[f]) && (d[f] = l);
                for (; s < r; ++s) o[s] = e[s];
                return new ht(o, this._parents)
            }, order: function () {
                for (var t = this._groups, e = -1, n = t.length; ++e < n;) for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0;) (r = i[a]) && (o && 4 ^ r.compareDocumentPosition(o) && o.parentNode.insertBefore(r, o), o = r);
                return this
            }, sort: function (t) {
                function e(e, n) {
                    return e && n ? t(e.__data__, n.__data__) : !e - !n
                }

                t || (t = d);
                for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
                    for (var o, s = n[a], l = s.length, c = i[a] = new Array(l), u = 0; u < l; ++u) (o = s[u]) && (c[u] = o);
                    c.sort(e)
                }
                return new ht(i, this._parents).order()
            }, call: function () {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            }, nodes: function () {
                var t = new Array(this.size()), e = -1;
                return this.each((function () {
                    t[++e] = this
                })), t
            }, node: function () {
                for (var t = this._groups, e = 0, n = t.length; e < n; ++e) for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
                    var o = r[i];
                    if (o) return o
                }
                return null
            }, size: function () {
                var t = 0;
                return this.each((function () {
                    ++t
                })), t
            }, empty: function () {
                return !this.node()
            }, each: function (t) {
                for (var e = this._groups, n = 0, r = e.length; n < r; ++n) for (var i, a = e[n], o = 0, s = a.length; o < s; ++o) (i = a[o]) && t.call(i, i.__data__, o, a);
                return this
            }, attr: function (t, e) {
                var n = g(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
                }
                return this.each((null == e ? n.local ? _ : y : "function" == typeof e ? n.local ? w : x : n.local ? m : v)(n, e))
            }, style: function (t, e, n) {
                return arguments.length > 1 ? this.each((null == e ? S : "function" == typeof e ? A : T)(t, e, null == n ? "" : n)) : C(this.node(), t)
            }, property: function (t, e) {
                return arguments.length > 1 ? this.each((null == e ? P : "function" == typeof e ? L : D)(t, e)) : this.node()[t]
            }, classed: function (t, e) {
                var n = I(t + "");
                if (arguments.length < 2) {
                    for (var r = E(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof e ? G : e ? M : O)(n, e))
            }, text: function (t) {
                return arguments.length ? this.each(null == t ? F : ("function" == typeof t ? H : N)(t)) : this.node().textContent
            }, html: function (t) {
                return arguments.length ? this.each(null == t ? j : ("function" == typeof t ? X : z)(t)) : this.node().innerHTML
            }, raise: function () {
                return this.each(B)
            }, lower: function () {
                return this.each(Y)
            }, append: function (t) {
                var e = "function" == typeof t ? t : Q(t);
                return this.select((function () {
                    return this.appendChild(e.apply(this, arguments))
                }))
            }, insert: function (t, e) {
                var n = "function" == typeof t ? t : Q(t), r = null == e ? q : "function" == typeof e ? e : i(e);
                return this.select((function () {
                    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
                }))
            }, remove: function () {
                return this.each(J)
            }, clone: function (t) {
                return this.select(t ? Z : K)
            }, datum: function (t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            }, on: function (t, e, n) {
                var r, i, a = rt(t + ""), o = a.length;
                if (!(arguments.length < 2)) {
                    for (s = e ? at : it, null == n && (n = !1), r = 0; r < o; ++r) this.each(s(a[r], e, n));
                    return this
                }
                var s = this.node().__on;
                if (s) for (var l, c = 0, u = s.length; c < u; ++c) for (r = 0, l = s[c]; r < o; ++r) if ((i = a[r]).type === l.type && i.name === l.name) return l.value
            }, dispatch: function (t, e) {
                return this.each(("function" == typeof e ? ct : lt)(t, e))
            }
        };
        var ft = dt, pt = function (t) {
            return "string" == typeof t ? new ht([[document.querySelector(t)]], [document.documentElement]) : new ht([[t]], ut)
        }, gt = function () {
            for (var t, e = tt; t = e.sourceEvent;) e = t;
            return e
        }, yt = function (t, e) {
            var n = t.ownerSVGElement || t;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
        }, _t = function (t) {
            var e = gt();
            return e.changedTouches && (e = e.changedTouches[0]), yt(t, e)
        }, vt = new Date, mt = new Date;

        function xt(t, e, n, r) {
            function i(e) {
                return t(e = 0 === arguments.length ? new Date : new Date(+e)), e
            }

            return i.floor = function (e) {
                return t(e = new Date(+e)), e
            }, i.ceil = function (n) {
                return t(n = new Date(n - 1)), e(n, 1), t(n), n
            }, i.round = function (t) {
                var e = i(t), n = i.ceil(t);
                return t - e < n - t ? e : n
            }, i.offset = function (t, n) {
                return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
            }, i.range = function (n, r, a) {
                var o, s = [];
                if (n = i.ceil(n), a = null == a ? 1 : Math.floor(a), !(n < r && a > 0)) return s;
                do {
                    s.push(o = new Date(+n)), e(n, a), t(n)
                } while (o < n && n < r);
                return s
            }, i.filter = function (n) {
                return xt((function (e) {
                    if (e >= e) for (; t(e), !n(e);) e.setTime(e - 1)
                }), (function (t, r) {
                    if (t >= t) if (r < 0) for (; ++r <= 0;) for (; e(t, -1), !n(t);) ; else for (; --r >= 0;) for (; e(t, 1), !n(t);) ;
                }))
            }, n && (i.count = function (e, r) {
                return vt.setTime(+e), mt.setTime(+r), t(vt), t(mt), Math.floor(n(vt, mt))
            }, i.every = function (t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (e) {
                    return r(e) % t == 0
                } : function (e) {
                    return i.count(0, e) % t == 0
                }) : i : null
            }), i
        }

        function wt(t) {
            return xt((function (e) {
                e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
            }), (function (t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }), (function (t, e) {
                return (e - t) / 6048e5
            }))
        }

        var bt = wt(0), St = wt(1), Tt = wt(2), At = wt(3), Ct = wt(4), Pt = wt(5), Dt = wt(6),
            Lt = (bt.range, St.range, Tt.range, At.range, Ct.range, Pt.range, Dt.range, xt((function (t) {
                t.setUTCHours(0, 0, 0, 0)
            }), (function (t, e) {
                t.setUTCDate(t.getUTCDate() + e)
            }), (function (t, e) {
                return (e - t) / 864e5
            }), (function (t) {
                return t.getUTCDate() - 1
            }))), It = Lt;
        Lt.range;

        function Et(t) {
            return xt((function (e) {
                e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
            }), (function (t, e) {
                t.setDate(t.getDate() + 7 * e)
            }), (function (t, e) {
                return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
            }))
        }

        var kt = Et(0), Vt = Et(1), Rt = Et(2), Mt = Et(3), Ot = Et(4), Gt = Et(5), Ft = Et(6),
            Nt = (kt.range, Vt.range, Rt.range, Mt.range, Ot.range, Gt.range, Ft.range, xt((function (t) {
                t.setHours(0, 0, 0, 0)
            }), (function (t, e) {
                t.setDate(t.getDate() + e)
            }), (function (t, e) {
                return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
            }), (function (t) {
                return t.getDate() - 1
            }))), Ht = Nt, jt = (Nt.range, xt((function (t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }), (function (t, e) {
                t.setFullYear(t.getFullYear() + e)
            }), (function (t, e) {
                return e.getFullYear() - t.getFullYear()
            }), (function (t) {
                return t.getFullYear()
            })));
        jt.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? xt((function (e) {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
            }), (function (e, n) {
                e.setFullYear(e.getFullYear() + n * t)
            })) : null
        };
        var zt = jt, Xt = (jt.range, xt((function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }), (function (t, e) {
            t.setUTCFullYear(t.getUTCFullYear() + e)
        }), (function (t, e) {
            return e.getUTCFullYear() - t.getUTCFullYear()
        }), (function (t) {
            return t.getUTCFullYear()
        })));
        Xt.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? xt((function (e) {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
            }), (function (e, n) {
                e.setUTCFullYear(e.getUTCFullYear() + n * t)
            })) : null
        };
        var Bt = Xt;
        Xt.range;

        function Yt(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return e.setFullYear(t.y), e
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }

        function Ut(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return e.setUTCFullYear(t.y), e
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }

        function Wt(t, e, n) {
            return {y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0}
        }

        var Qt, qt, Jt, Kt, Zt = {"-": "", _: " ", 0: "0"}, $t = /^\s*\d+/, te = /^%/, ee = /[\\^$*+?|[\]().{}]/g;

        function ne(t, e, n) {
            var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
            return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
        }

        function re(t) {
            return t.replace(ee, "\\$&")
        }

        function ie(t) {
            return new RegExp("^(?:" + t.map(re).join("|") + ")", "i")
        }

        function ae(t) {
            for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
            return e
        }

        function oe(t, e, n) {
            var r = $t.exec(e.slice(n, n + 1));
            return r ? (t.w = +r[0], n + r[0].length) : -1
        }

        function se(t, e, n) {
            var r = $t.exec(e.slice(n, n + 1));
            return r ? (t.u = +r[0], n + r[0].length) : -1
        }

        function le(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.U = +r[0], n + r[0].length) : -1
        }

        function ce(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.V = +r[0], n + r[0].length) : -1
        }

        function ue(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.W = +r[0], n + r[0].length) : -1
        }

        function he(t, e, n) {
            var r = $t.exec(e.slice(n, n + 4));
            return r ? (t.y = +r[0], n + r[0].length) : -1
        }

        function de(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1
        }

        function fe(t, e, n) {
            var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
        }

        function pe(t, e, n) {
            var r = $t.exec(e.slice(n, n + 1));
            return r ? (t.q = 3 * r[0] - 3, n + r[0].length) : -1
        }

        function ge(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.m = r[0] - 1, n + r[0].length) : -1
        }

        function ye(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.d = +r[0], n + r[0].length) : -1
        }

        function _e(t, e, n) {
            var r = $t.exec(e.slice(n, n + 3));
            return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
        }

        function ve(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.H = +r[0], n + r[0].length) : -1
        }

        function me(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.M = +r[0], n + r[0].length) : -1
        }

        function xe(t, e, n) {
            var r = $t.exec(e.slice(n, n + 2));
            return r ? (t.S = +r[0], n + r[0].length) : -1
        }

        function we(t, e, n) {
            var r = $t.exec(e.slice(n, n + 3));
            return r ? (t.L = +r[0], n + r[0].length) : -1
        }

        function be(t, e, n) {
            var r = $t.exec(e.slice(n, n + 6));
            return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
        }

        function Se(t, e, n) {
            var r = te.exec(e.slice(n, n + 1));
            return r ? n + r[0].length : -1
        }

        function Te(t, e, n) {
            var r = $t.exec(e.slice(n));
            return r ? (t.Q = +r[0], n + r[0].length) : -1
        }

        function Ae(t, e, n) {
            var r = $t.exec(e.slice(n));
            return r ? (t.s = +r[0], n + r[0].length) : -1
        }

        function Ce(t, e) {
            return ne(t.getDate(), e, 2)
        }

        function Pe(t, e) {
            return ne(t.getHours(), e, 2)
        }

        function De(t, e) {
            return ne(t.getHours() % 12 || 12, e, 2)
        }

        function Le(t, e) {
            return ne(1 + Ht.count(zt(t), t), e, 3)
        }

        function Ie(t, e) {
            return ne(t.getMilliseconds(), e, 3)
        }

        function Ee(t, e) {
            return Ie(t, e) + "000"
        }

        function ke(t, e) {
            return ne(t.getMonth() + 1, e, 2)
        }

        function Ve(t, e) {
            return ne(t.getMinutes(), e, 2)
        }

        function Re(t, e) {
            return ne(t.getSeconds(), e, 2)
        }

        function Me(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        }

        function Oe(t, e) {
            return ne(kt.count(zt(t) - 1, t), e, 2)
        }

        function Ge(t) {
            var e = t.getDay();
            return e >= 4 || 0 === e ? Ot(t) : Ot.ceil(t)
        }

        function Fe(t, e) {
            return t = Ge(t), ne(Ot.count(zt(t), t) + (4 === zt(t).getDay()), e, 2)
        }

        function Ne(t) {
            return t.getDay()
        }

        function He(t, e) {
            return ne(Vt.count(zt(t) - 1, t), e, 2)
        }

        function je(t, e) {
            return ne(t.getFullYear() % 100, e, 2)
        }

        function ze(t, e) {
            return ne((t = Ge(t)).getFullYear() % 100, e, 2)
        }

        function Xe(t, e) {
            return ne(t.getFullYear() % 1e4, e, 4)
        }

        function Be(t, e) {
            var n = t.getDay();
            return ne((t = n >= 4 || 0 === n ? Ot(t) : Ot.ceil(t)).getFullYear() % 1e4, e, 4)
        }

        function Ye(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : (e *= -1, "+")) + ne(e / 60 | 0, "0", 2) + ne(e % 60, "0", 2)
        }

        function Ue(t, e) {
            return ne(t.getUTCDate(), e, 2)
        }

        function We(t, e) {
            return ne(t.getUTCHours(), e, 2)
        }

        function Qe(t, e) {
            return ne(t.getUTCHours() % 12 || 12, e, 2)
        }

        function qe(t, e) {
            return ne(1 + It.count(Bt(t), t), e, 3)
        }

        function Je(t, e) {
            return ne(t.getUTCMilliseconds(), e, 3)
        }

        function Ke(t, e) {
            return Je(t, e) + "000"
        }

        function Ze(t, e) {
            return ne(t.getUTCMonth() + 1, e, 2)
        }

        function $e(t, e) {
            return ne(t.getUTCMinutes(), e, 2)
        }

        function tn(t, e) {
            return ne(t.getUTCSeconds(), e, 2)
        }

        function en(t) {
            var e = t.getUTCDay();
            return 0 === e ? 7 : e
        }

        function nn(t, e) {
            return ne(bt.count(Bt(t) - 1, t), e, 2)
        }

        function rn(t) {
            var e = t.getUTCDay();
            return e >= 4 || 0 === e ? Ct(t) : Ct.ceil(t)
        }

        function an(t, e) {
            return t = rn(t), ne(Ct.count(Bt(t), t) + (4 === Bt(t).getUTCDay()), e, 2)
        }

        function on(t) {
            return t.getUTCDay()
        }

        function sn(t, e) {
            return ne(St.count(Bt(t) - 1, t), e, 2)
        }

        function ln(t, e) {
            return ne(t.getUTCFullYear() % 100, e, 2)
        }

        function cn(t, e) {
            return ne((t = rn(t)).getUTCFullYear() % 100, e, 2)
        }

        function un(t, e) {
            return ne(t.getUTCFullYear() % 1e4, e, 4)
        }

        function hn(t, e) {
            var n = t.getUTCDay();
            return ne((t = n >= 4 || 0 === n ? Ct(t) : Ct.ceil(t)).getUTCFullYear() % 1e4, e, 4)
        }

        function dn() {
            return "+0000"
        }

        function fn() {
            return "%"
        }

        function pn(t) {
            return +t
        }

        function gn(t) {
            return Math.floor(+t / 1e3)
        }

        Qt = function (t) {
            var e = t.dateTime, n = t.date, r = t.time, i = t.periods, a = t.days, o = t.shortDays, s = t.months,
                l = t.shortMonths, c = ie(i), u = ae(i), h = ie(a), d = ae(a), f = ie(o), p = ae(o), g = ie(s),
                y = ae(s), _ = ie(l), v = ae(l), m = {
                    a: function (t) {
                        return o[t.getDay()]
                    },
                    A: function (t) {
                        return a[t.getDay()]
                    },
                    b: function (t) {
                        return l[t.getMonth()]
                    },
                    B: function (t) {
                        return s[t.getMonth()]
                    },
                    c: null,
                    d: Ce,
                    e: Ce,
                    f: Ee,
                    g: ze,
                    G: Be,
                    H: Pe,
                    I: De,
                    j: Le,
                    L: Ie,
                    m: ke,
                    M: Ve,
                    p: function (t) {
                        return i[+(t.getHours() >= 12)]
                    },
                    q: function (t) {
                        return 1 + ~~(t.getMonth() / 3)
                    },
                    Q: pn,
                    s: gn,
                    S: Re,
                    u: Me,
                    U: Oe,
                    V: Fe,
                    w: Ne,
                    W: He,
                    x: null,
                    X: null,
                    y: je,
                    Y: Xe,
                    Z: Ye,
                    "%": fn
                }, x = {
                    a: function (t) {
                        return o[t.getUTCDay()]
                    },
                    A: function (t) {
                        return a[t.getUTCDay()]
                    },
                    b: function (t) {
                        return l[t.getUTCMonth()]
                    },
                    B: function (t) {
                        return s[t.getUTCMonth()]
                    },
                    c: null,
                    d: Ue,
                    e: Ue,
                    f: Ke,
                    g: cn,
                    G: hn,
                    H: We,
                    I: Qe,
                    j: qe,
                    L: Je,
                    m: Ze,
                    M: $e,
                    p: function (t) {
                        return i[+(t.getUTCHours() >= 12)]
                    },
                    q: function (t) {
                        return 1 + ~~(t.getUTCMonth() / 3)
                    },
                    Q: pn,
                    s: gn,
                    S: tn,
                    u: en,
                    U: nn,
                    V: an,
                    w: on,
                    W: sn,
                    x: null,
                    X: null,
                    y: ln,
                    Y: un,
                    Z: dn,
                    "%": fn
                }, w = {
                    a: function (t, e, n) {
                        var r = f.exec(e.slice(n));
                        return r ? (t.w = p[r[0].toLowerCase()], n + r[0].length) : -1
                    }, A: function (t, e, n) {
                        var r = h.exec(e.slice(n));
                        return r ? (t.w = d[r[0].toLowerCase()], n + r[0].length) : -1
                    }, b: function (t, e, n) {
                        var r = _.exec(e.slice(n));
                        return r ? (t.m = v[r[0].toLowerCase()], n + r[0].length) : -1
                    }, B: function (t, e, n) {
                        var r = g.exec(e.slice(n));
                        return r ? (t.m = y[r[0].toLowerCase()], n + r[0].length) : -1
                    }, c: function (t, n, r) {
                        return T(t, e, n, r)
                    }, d: ye, e: ye, f: be, g: de, G: he, H: ve, I: ve, j: _e, L: we, m: ge, M: me, p: function (t, e, n) {
                        var r = c.exec(e.slice(n));
                        return r ? (t.p = u[r[0].toLowerCase()], n + r[0].length) : -1
                    }, q: pe, Q: Te, s: Ae, S: xe, u: se, U: le, V: ce, w: oe, W: ue, x: function (t, e, r) {
                        return T(t, n, e, r)
                    }, X: function (t, e, n) {
                        return T(t, r, e, n)
                    }, y: de, Y: he, Z: fe, "%": Se
                };

            function b(t, e) {
                return function (n) {
                    var r, i, a, o = [], s = -1, l = 0, c = t.length;
                    for (n instanceof Date || (n = new Date(+n)); ++s < c;) 37 === t.charCodeAt(s) && (o.push(t.slice(l, s)), null != (i = Zt[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), o.push(r), l = s + 1);
                    return o.push(t.slice(l, s)), o.join("")
                }
            }

            function S(t, e) {
                return function (n) {
                    var r, i, a = Wt(1900, void 0, 1);
                    if (T(a, t, n += "", 0) != n.length) return null;
                    if ("Q" in a) return new Date(a.Q);
                    if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
                    if (e && !("Z" in a) && (a.Z = 0), "p" in a && (a.H = a.H % 12 + 12 * a.p), void 0 === a.m && (a.m = "q" in a ? a.q : 0), "V" in a) {
                        if (a.V < 1 || a.V > 53) return null;
                        "w" in a || (a.w = 1), "Z" in a ? (i = (r = Ut(Wt(a.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? St.ceil(r) : St(r), r = It.offset(r, 7 * (a.V - 1)), a.y = r.getUTCFullYear(), a.m = r.getUTCMonth(), a.d = r.getUTCDate() + (a.w + 6) % 7) : (i = (r = Yt(Wt(a.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? Vt.ceil(r) : Vt(r), r = Ht.offset(r, 7 * (a.V - 1)), a.y = r.getFullYear(), a.m = r.getMonth(), a.d = r.getDate() + (a.w + 6) % 7)
                    } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), i = "Z" in a ? Ut(Wt(a.y, 0, 1)).getUTCDay() : Yt(Wt(a.y, 0, 1)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (i + 5) % 7 : a.w + 7 * a.U - (i + 6) % 7);
                    return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, Ut(a)) : Yt(a)
                }
            }

            function T(t, e, n, r) {
                for (var i, a, o = 0, s = e.length, l = n.length; o < s;) {
                    if (r >= l) return -1;
                    if (37 === (i = e.charCodeAt(o++))) {
                        if (i = e.charAt(o++), !(a = w[i in Zt ? e.charAt(o++) : i]) || (r = a(t, n, r)) < 0) return -1
                    } else if (i != n.charCodeAt(r++)) return -1
                }
                return r
            }

            return m.x = b(n, m), m.X = b(r, m), m.c = b(e, m), x.x = b(n, x), x.X = b(r, x), x.c = b(e, x), {
                format: function (t) {
                    var e = b(t += "", m);
                    return e.toString = function () {
                        return t
                    }, e
                }, parse: function (t) {
                    var e = S(t += "", !1);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcFormat: function (t) {
                    var e = b(t += "", x);
                    return e.toString = function () {
                        return t
                    }, e
                }, utcParse: function (t) {
                    var e = S(t += "", !0);
                    return e.toString = function () {
                        return t
                    }, e
                }
            }
        }({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }), qt = Qt.format, Jt = Qt.parse, Kt = Qt.utcFormat, Qt.utcParse;
        var yn = function (t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }, _n = function (t) {
            var e;
            return 1 === t.length && (e = t, t = function (t, n) {
                return yn(e(t), n)
            }), {
                left: function (e, n, r, i) {
                    for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
                        var a = r + i >>> 1;
                        t(e[a], n) < 0 ? r = a + 1 : i = a
                    }
                    return r
                }, right: function (e, n, r, i) {
                    for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
                        var a = r + i >>> 1;
                        t(e[a], n) > 0 ? i = a : r = a + 1
                    }
                    return r
                }
            }
        };
        var vn = _n(yn), mn = vn.right, xn = (vn.left, mn);
        var wn = function (t, e) {
                var n, r, i, a = t.length, o = -1;
                if (null == e) {
                    for (; ++o < a;) if (null != (n = t[o]) && n >= n) for (r = i = n; ++o < a;) null != (n = t[o]) && (r > n && (r = n), i < n && (i = n))
                } else for (; ++o < a;) if (null != (n = e(t[o], o, t)) && n >= n) for (r = i = n; ++o < a;) null != (n = e(t[o], o, t)) && (r > n && (r = n), i < n && (i = n));
                return [r, i]
            }, bn = Array.prototype, Sn = (bn.slice, bn.map, Math.sqrt(50)), Tn = Math.sqrt(10), An = Math.sqrt(2),
            Cn = function (t, e, n) {
                var r, i, a, o, s = -1;
                if (n = +n, (t = +t) === (e = +e) && n > 0) return [t];
                if ((r = e < t) && (i = t, t = e, e = i), 0 === (o = Pn(t, e, n)) || !isFinite(o)) return [];
                if (o > 0) for (t = Math.ceil(t / o), e = Math.floor(e / o), a = new Array(i = Math.ceil(e - t + 1)); ++s < i;) a[s] = (t + s) * o; else for (t = Math.floor(t * o), e = Math.ceil(e * o), a = new Array(i = Math.ceil(t - e + 1)); ++s < i;) a[s] = (t - s) / o;
                return r && a.reverse(), a
            };

        function Pn(t, e, n) {
            var r = (e - t) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
            return i >= 0 ? (a >= Sn ? 10 : a >= Tn ? 5 : a >= An ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= Sn ? 10 : a >= Tn ? 5 : a >= An ? 2 : 1)
        }

        function Dn(t, e, n) {
            var r = Math.abs(e - t) / Math.max(0, n), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
            return a >= Sn ? i *= 10 : a >= Tn ? i *= 5 : a >= An && (i *= 2), e < t ? -i : i
        }

        var Ln = function (t, e) {
            var n, r, i = t.length, a = -1;
            if (null == e) {
                for (; ++a < i;) if (null != (n = t[a]) && n >= n) for (r = n; ++a < i;) null != (n = t[a]) && r > n && (r = n)
            } else for (; ++a < i;) if (null != (n = e(t[a], a, t)) && n >= n) for (r = n; ++a < i;) null != (n = e(t[a], a, t)) && r > n && (r = n);
            return r
        };

        function In(t, e) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(e).domain(t)
            }
            return this
        }

        function En() {
        }

        function kn(t, e) {
            var n = new En;
            if (t instanceof En) t.each((function (t, e) {
                n.set(e, t)
            })); else if (Array.isArray(t)) {
                var r, i = -1, a = t.length;
                if (null == e) for (; ++i < a;) n.set(i, t[i]); else for (; ++i < a;) n.set(e(r = t[i], i, t), r)
            } else if (t) for (var o in t) n.set(o, t[o]);
            return n
        }

        En.prototype = kn.prototype = {
            constructor: En, has: function (t) {
                return "$" + t in this
            }, get: function (t) {
                return this["$" + t]
            }, set: function (t, e) {
                return this["$" + t] = e, this
            }, remove: function (t) {
                var e = "$" + t;
                return e in this && delete this[e]
            }, clear: function () {
                for (var t in this) "$" === t[0] && delete this[t]
            }, keys: function () {
                var t = [];
                for (var e in this) "$" === e[0] && t.push(e.slice(1));
                return t
            }, values: function () {
                var t = [];
                for (var e in this) "$" === e[0] && t.push(this[e]);
                return t
            }, entries: function () {
                var t = [];
                for (var e in this) "$" === e[0] && t.push({key: e.slice(1), value: this[e]});
                return t
            }, size: function () {
                var t = 0;
                for (var e in this) "$" === e[0] && ++t;
                return t
            }, empty: function () {
                for (var t in this) if ("$" === t[0]) return !1;
                return !0
            }, each: function (t) {
                for (var e in this) "$" === e[0] && t(this[e], e.slice(1), this)
            }
        };
        var Vn = kn;

        function Rn() {
        }

        var Mn = Vn.prototype;

        function On(t, e) {
            var n = new Rn;
            if (t instanceof Rn) t.each((function (t) {
                n.add(t)
            })); else if (t) {
                var r = -1, i = t.length;
                if (null == e) for (; ++r < i;) n.add(t[r]); else for (; ++r < i;) n.add(e(t[r], r, t))
            }
            return n
        }

        Rn.prototype = On.prototype = {
            constructor: Rn, has: Mn.has, add: function (t) {
                return this["$" + (t += "")] = t, this
            }, remove: Mn.remove, clear: Mn.clear, values: Mn.keys, size: Mn.size, empty: Mn.empty, each: Mn.each
        };
        var Gn = On, Fn = Array.prototype, Nn = Fn.map, Hn = Fn.slice;
        var jn = function (t, e, n) {
            t.prototype = e.prototype = n, n.constructor = t
        };

        function zn(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e) n[r] = e[r];
            return n
        }

        function Xn() {
        }

        var Bn = "\\s*([+-]?\\d+)\\s*", Yn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            Un = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Wn = /^#([0-9a-f]{3,8})$/,
            Qn = new RegExp("^rgb\\(" + [Bn, Bn, Bn] + "\\)$"), qn = new RegExp("^rgb\\(" + [Un, Un, Un] + "\\)$"),
            Jn = new RegExp("^rgba\\(" + [Bn, Bn, Bn, Yn] + "\\)$"),
            Kn = new RegExp("^rgba\\(" + [Un, Un, Un, Yn] + "\\)$"), Zn = new RegExp("^hsl\\(" + [Yn, Un, Un] + "\\)$"),
            $n = new RegExp("^hsla\\(" + [Yn, Un, Un, Yn] + "\\)$"), tr = {
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

        function er() {
            return this.rgb().formatHex()
        }

        function nr() {
            return this.rgb().formatRgb()
        }

        function rr(t) {
            var e, n;
            return t = (t + "").trim().toLowerCase(), (e = Wn.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? ir(e) : 3 === n ? new lr(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? ar(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? ar(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = Qn.exec(t)) ? new lr(e[1], e[2], e[3], 1) : (e = qn.exec(t)) ? new lr(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = Jn.exec(t)) ? ar(e[1], e[2], e[3], e[4]) : (e = Kn.exec(t)) ? ar(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Zn.exec(t)) ? dr(e[1], e[2] / 100, e[3] / 100, 1) : (e = $n.exec(t)) ? dr(e[1], e[2] / 100, e[3] / 100, e[4]) : tr.hasOwnProperty(t) ? ir(tr[t]) : "transparent" === t ? new lr(NaN, NaN, NaN, 0) : null
        }

        function ir(t) {
            return new lr(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function ar(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN), new lr(t, e, n, r)
        }

        function or(t) {
            return t instanceof Xn || (t = rr(t)), t ? new lr((t = t.rgb()).r, t.g, t.b, t.opacity) : new lr
        }

        function sr(t, e, n, r) {
            return 1 === arguments.length ? or(t) : new lr(t, e, n, null == r ? 1 : r)
        }

        function lr(t, e, n, r) {
            this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
        }

        function cr() {
            return "#" + hr(this.r) + hr(this.g) + hr(this.b)
        }

        function ur() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }

        function hr(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function dr(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new pr(t, e, n, r)
        }

        function fr(t) {
            if (t instanceof pr) return new pr(t.h, t.s, t.l, t.opacity);
            if (t instanceof Xn || (t = rr(t)), !t) return new pr;
            if (t instanceof pr) return t;
            var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r),
                o = NaN, s = a - i, l = (a + i) / 2;
            return s ? (o = e === a ? (n - r) / s + 6 * (n < r) : n === a ? (r - e) / s + 2 : (e - n) / s + 4, s /= l < .5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new pr(o, s, l, t.opacity)
        }

        function pr(t, e, n, r) {
            this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
        }

        function gr(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }

        function yr(t, e, n, r, i) {
            var a = t * t, o = a * t;
            return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
        }

        jn(Xn, rr, {
            copy: function (t) {
                return Object.assign(new this.constructor, this, t)
            }, displayable: function () {
                return this.rgb().displayable()
            }, hex: er, formatHex: er, formatHsl: function () {
                return fr(this).formatHsl()
            }, formatRgb: nr, toString: nr
        }), jn(lr, sr, zn(Xn, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new lr(this.r * t, this.g * t, this.b * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new lr(this.r * t, this.g * t, this.b * t, this.opacity)
            }, rgb: function () {
                return this
            }, displayable: function () {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            }, hex: cr, formatHex: cr, formatRgb: ur, toString: ur
        })), jn(pr, (function (t, e, n, r) {
            return 1 === arguments.length ? fr(t) : new pr(t, e, n, null == r ? 1 : r)
        }), zn(Xn, {
            brighter: function (t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new pr(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? .7 : Math.pow(.7, t), new pr(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l,
                    r = n + (n < .5 ? n : 1 - n) * e, i = 2 * n - r;
                return new lr(gr(t >= 240 ? t - 240 : t + 120, i, r), gr(t, i, r), gr(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            }, displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }, formatHsl: function () {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
            }
        }));
        var _r = function (t) {
            return function () {
                return t
            }
        };

        function vr(t, e) {
            return function (n) {
                return t + n * e
            }
        }

        function mr(t) {
            return 1 == (t = +t) ? xr : function (e, n) {
                return n - e ? function (t, e, n) {
                    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
                        return Math.pow(t + r * e, n)
                    }
                }(e, n, t) : _r(isNaN(e) ? n : e)
            }
        }

        function xr(t, e) {
            var n = e - t;
            return n ? vr(t, n) : _r(isNaN(t) ? e : t)
        }

        var wr = function t(e) {
            var n = mr(e);

            function r(t, e) {
                var r = n((t = sr(t)).r, (e = sr(e)).r), i = n(t.g, e.g), a = n(t.b, e.b), o = xr(t.opacity, e.opacity);
                return function (e) {
                    return t.r = r(e), t.g = i(e), t.b = a(e), t.opacity = o(e), t + ""
                }
            }

            return r.gamma = t, r
        }(1);

        function br(t) {
            return function (e) {
                var n, r, i = e.length, a = new Array(i), o = new Array(i), s = new Array(i);
                for (n = 0; n < i; ++n) r = sr(e[n]), a[n] = r.r || 0, o[n] = r.g || 0, s[n] = r.b || 0;
                return a = t(a), o = t(o), s = t(s), r.opacity = 1, function (t) {
                    return r.r = a(t), r.g = o(t), r.b = s(t), r + ""
                }
            }
        }

        br((function (t) {
            var e = t.length - 1;
            return function (n) {
                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), i = t[r], a = t[r + 1],
                    o = r > 0 ? t[r - 1] : 2 * i - a, s = r < e - 1 ? t[r + 2] : 2 * a - i;
                return yr((n - r / e) * e, o, i, a, s)
            }
        })), br((function (t) {
            var e = t.length;
            return function (n) {
                var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e), i = t[(r + e - 1) % e], a = t[r % e],
                    o = t[(r + 1) % e], s = t[(r + 2) % e];
                return yr((n - r / e) * e, i, a, o, s)
            }
        }));
        var Sr = function (t, e) {
            e || (e = []);
            var n, r = t ? Math.min(e.length, t.length) : 0, i = e.slice();
            return function (a) {
                for (n = 0; n < r; ++n) i[n] = t[n] * (1 - a) + e[n] * a;
                return i
            }
        };

        function Tr(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }

        function Ar(t, e) {
            var n, r = e ? e.length : 0, i = t ? Math.min(r, t.length) : 0, a = new Array(i), o = new Array(r);
            for (n = 0; n < i; ++n) a[n] = kr(t[n], e[n]);
            for (; n < r; ++n) o[n] = e[n];
            return function (t) {
                for (n = 0; n < i; ++n) o[n] = a[n](t);
                return o
            }
        }

        var Cr = function (t, e) {
            var n = new Date;
            return t = +t, e = +e, function (r) {
                return n.setTime(t * (1 - r) + e * r), n
            }
        }, Pr = function (t, e) {
            return t = +t, e = +e, function (n) {
                return t * (1 - n) + e * n
            }
        }, Dr = function (t, e) {
            var n, r = {}, i = {};
            for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = kr(t[n], e[n]) : i[n] = e[n];
            return function (t) {
                for (n in r) i[n] = r[n](t);
                return i
            }
        }, Lr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ir = new RegExp(Lr.source, "g");
        var Er = function (t, e) {
            var n, r, i, a = Lr.lastIndex = Ir.lastIndex = 0, o = -1, s = [], l = [];
            for (t += "", e += ""; (n = Lr.exec(t)) && (r = Ir.exec(e));) (i = r.index) > a && (i = e.slice(a, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (r = r[0]) ? s[o] ? s[o] += r : s[++o] = r : (s[++o] = null, l.push({
                i: o,
                x: Pr(n, r)
            })), a = Ir.lastIndex;
            return a < e.length && (i = e.slice(a), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? l[0] ? function (t) {
                return function (e) {
                    return t(e) + ""
                }
            }(l[0].x) : function (t) {
                return function () {
                    return t
                }
            }(e) : (e = l.length, function (t) {
                for (var n, r = 0; r < e; ++r) s[(n = l[r]).i] = n.x(t);
                return s.join("")
            })
        }, kr = function (t, e) {
            var n, r = typeof e;
            return null == e || "boolean" === r ? _r(e) : ("number" === r ? Pr : "string" === r ? (n = rr(e)) ? (e = n, wr) : Er : e instanceof rr ? wr : e instanceof Date ? Cr : Tr(e) ? Sr : Array.isArray(e) ? Ar : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? Dr : Pr)(t, e)
        }, Vr = function (t, e) {
            return t = +t, e = +e, function (n) {
                return Math.round(t * (1 - n) + e * n)
            }
        }, Rr = function (t) {
            return +t
        }, Mr = [0, 1];

        function Or(t) {
            return t
        }

        function Gr(t, e) {
            return (e -= t = +t) ? function (n) {
                return (n - t) / e
            } : (n = isNaN(e) ? NaN : .5, function () {
                return n
            });
            var n
        }

        function Fr(t) {
            var e, n = t[0], r = t[t.length - 1];
            return n > r && (e = n, n = r, r = e), function (t) {
                return Math.max(n, Math.min(r, t))
            }
        }

        function Nr(t, e, n) {
            var r = t[0], i = t[1], a = e[0], o = e[1];
            return i < r ? (r = Gr(i, r), a = n(o, a)) : (r = Gr(r, i), a = n(a, o)), function (t) {
                return a(r(t))
            }
        }

        function Hr(t, e, n) {
            var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
            for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r;) i[o] = Gr(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
            return function (e) {
                var n = xn(t, e, 1, r) - 1;
                return a[n](i[n](e))
            }
        }

        function jr(t, e) {
            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
        }

        function zr() {
            var t, e, n, r, i, a, o = Mr, s = Mr, l = kr, c = Or;

            function u() {
                return r = Math.min(o.length, s.length) > 2 ? Hr : Nr, i = a = null, h
            }

            function h(e) {
                return isNaN(e = +e) ? n : (i || (i = r(o.map(t), s, l)))(t(c(e)))
            }

            return h.invert = function (n) {
                return c(e((a || (a = r(s, o.map(t), Pr)))(n)))
            }, h.domain = function (t) {
                return arguments.length ? (o = Nn.call(t, Rr), c === Or || (c = Fr(o)), u()) : o.slice()
            }, h.range = function (t) {
                return arguments.length ? (s = Hn.call(t), u()) : s.slice()
            }, h.rangeRound = function (t) {
                return s = Hn.call(t), l = Vr, u()
            }, h.clamp = function (t) {
                return arguments.length ? (c = t ? Fr(o) : Or, h) : c !== Or
            }, h.interpolate = function (t) {
                return arguments.length ? (l = t, u()) : l
            }, h.unknown = function (t) {
                return arguments.length ? (n = t, h) : n
            }, function (n, r) {
                return t = n, e = r, u()
            }
        }

        function Xr(t, e) {
            return zr()(t, e)
        }

        var Br = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function Yr(t) {
            if (!(e = Br.exec(t))) throw new Error("invalid format: " + t);
            var e;
            return new Ur({
                fill: e[1],
                align: e[2],
                sign: e[3],
                symbol: e[4],
                zero: e[5],
                width: e[6],
                comma: e[7],
                precision: e[8] && e[8].slice(1),
                trim: e[9],
                type: e[10]
            })
        }

        function Ur(t) {
            this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
        }

        Yr.prototype = Ur.prototype, Ur.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };

        function Wr(t, e) {
            if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
            var n, r = t.slice(0, n);
            return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
        }

        var Qr, qr, Jr, Kr, Zr = function (t) {
                return (t = Wr(Math.abs(t))) ? t[1] : NaN
            }, $r = function (t, e) {
                var n = Wr(t, e);
                if (!n) return t + "";
                var r = n[0], i = n[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            }, ti = {
                "%": function (t, e) {
                    return (100 * t).toFixed(e)
                }, b: function (t) {
                    return Math.round(t).toString(2)
                }, c: function (t) {
                    return t + ""
                }, d: function (t) {
                    return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
                }, e: function (t, e) {
                    return t.toExponential(e)
                }, f: function (t, e) {
                    return t.toFixed(e)
                }, g: function (t, e) {
                    return t.toPrecision(e)
                }, o: function (t) {
                    return Math.round(t).toString(8)
                }, p: function (t, e) {
                    return $r(100 * t, e)
                }, r: $r, s: function (t, e) {
                    var n = Wr(t, e);
                    if (!n) return t + "";
                    var r = n[0], i = n[1], a = i - (Qr = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                        o = r.length;
                    return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Wr(t, Math.max(0, e + a - 1))[0]
                }, X: function (t) {
                    return Math.round(t).toString(16).toUpperCase()
                }, x: function (t) {
                    return Math.round(t).toString(16)
                }
            }, ei = function (t) {
                return t
            }, ni = Array.prototype.map,
            ri = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
            ii = function (t) {
                var e, n,
                    r = void 0 === t.grouping || void 0 === t.thousands ? ei : (e = ni.call(t.grouping, Number), n = t.thousands + "", function (t, r) {
                        for (var i = t.length, a = [], o = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(t.substring(i -= s, i + s)), !((l += s + 1) > r));) s = e[o = (o + 1) % e.length];
                        return a.reverse().join(n)
                    }), i = void 0 === t.currency ? "" : t.currency[0] + "",
                    a = void 0 === t.currency ? "" : t.currency[1] + "",
                    o = void 0 === t.decimal ? "." : t.decimal + "", s = void 0 === t.numerals ? ei : function (t) {
                        return function (e) {
                            return e.replace(/[0-9]/g, (function (e) {
                                return t[+e]
                            }))
                        }
                    }(ni.call(t.numerals, String)), l = void 0 === t.percent ? "%" : t.percent + "",
                    c = void 0 === t.minus ? "-" : t.minus + "", u = void 0 === t.nan ? "NaN" : t.nan + "";

                function h(t) {
                    var e = (t = Yr(t)).fill, n = t.align, h = t.sign, d = t.symbol, f = t.zero, p = t.width,
                        g = t.comma, y = t.precision, _ = t.trim, v = t.type;
                    "n" === v ? (g = !0, v = "g") : ti[v] || (void 0 === y && (y = 12), _ = !0, v = "g"), (f || "0" === e && "=" === n) && (f = !0, e = "0", n = "=");
                    var m = "$" === d ? i : "#" === d && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
                        x = "$" === d ? a : /[%p]/.test(v) ? l : "", w = ti[v], b = /[defgprs%]/.test(v);

                    function S(t) {
                        var i, a, l, d = m, S = x;
                        if ("c" === v) S = w(t) + S, t = ""; else {
                            var T = (t = +t) < 0 || 1 / t < 0;
                            if (t = isNaN(t) ? u : w(Math.abs(t), y), _ && (t = function (t) {
                                t:for (var e, n = t.length, r = 1, i = -1; r < n; ++r) switch (t[r]) {
                                    case".":
                                        i = e = r;
                                        break;
                                    case"0":
                                        0 === i && (i = r), e = r;
                                        break;
                                    default:
                                        if (!+t[r]) break t;
                                        i > 0 && (i = 0)
                                }
                                return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t
                            }(t)), T && 0 == +t && "+" !== h && (T = !1), d = (T ? "(" === h ? h : c : "-" === h || "(" === h ? "" : h) + d, S = ("s" === v ? ri[8 + Qr / 3] : "") + S + (T && "(" === h ? ")" : ""), b) for (i = -1, a = t.length; ++i < a;) if (48 > (l = t.charCodeAt(i)) || l > 57) {
                                S = (46 === l ? o + t.slice(i + 1) : t.slice(i)) + S, t = t.slice(0, i);
                                break
                            }
                        }
                        g && !f && (t = r(t, 1 / 0));
                        var A = d.length + t.length + S.length, C = A < p ? new Array(p - A + 1).join(e) : "";
                        switch (g && f && (t = r(C + t, C.length ? p - S.length : 1 / 0), C = ""), n) {
                            case"<":
                                t = d + t + S + C;
                                break;
                            case"=":
                                t = d + C + t + S;
                                break;
                            case"^":
                                t = C.slice(0, A = C.length >> 1) + d + t + S + C.slice(A);
                                break;
                            default:
                                t = C + d + t + S
                        }
                        return s(t)
                    }

                    return y = void 0 === y ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), S.toString = function () {
                        return t + ""
                    }, S
                }

                return {
                    format: h, formatPrefix: function (t, e) {
                        var n = h(((t = Yr(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(Zr(e) / 3))), i = Math.pow(10, -r),
                            a = ri[8 + r / 3];
                        return function (t) {
                            return n(i * t) + a
                        }
                    }
                }
            };
        !function (t) {
            qr = ii(t), Jr = qr.format, Kr = qr.formatPrefix
        }({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], minus: "-"});
        var ai = function (t, e, n, r) {
            var i, a = Dn(t, e, n);
            switch ((r = Yr(null == r ? ",f" : r)).type) {
                case"s":
                    var o = Math.max(Math.abs(t), Math.abs(e));
                    return null != r.precision || isNaN(i = function (t, e) {
                        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Zr(e) / 3))) - Zr(Math.abs(t)))
                    }(a, o)) || (r.precision = i), Kr(r, o);
                case"":
                case"e":
                case"g":
                case"p":
                case"r":
                    null != r.precision || isNaN(i = function (t, e) {
                        return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Zr(e) - Zr(t)) + 1
                    }(a, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = i - ("e" === r.type));
                    break;
                case"f":
                case"%":
                    null != r.precision || isNaN(i = function (t) {
                        return Math.max(0, -Zr(Math.abs(t)))
                    }(a)) || (r.precision = i - 2 * ("%" === r.type))
            }
            return Jr(r)
        };

        function oi(t) {
            var e = t.domain;
            return t.ticks = function (t) {
                var n = e();
                return Cn(n[0], n[n.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function (t, n) {
                var r = e();
                return ai(r[0], r[r.length - 1], null == t ? 10 : t, n)
            }, t.nice = function (n) {
                null == n && (n = 10);
                var r, i = e(), a = 0, o = i.length - 1, s = i[a], l = i[o];
                return l < s && (r = s, s = l, l = r, r = a, a = o, o = r), (r = Pn(s, l, n)) > 0 ? r = Pn(s = Math.floor(s / r) * r, l = Math.ceil(l / r) * r, n) : r < 0 && (r = Pn(s = Math.ceil(s * r) / r, l = Math.floor(l * r) / r, n)), r > 0 ? (i[a] = Math.floor(s / r) * r, i[o] = Math.ceil(l / r) * r, e(i)) : r < 0 && (i[a] = Math.ceil(s * r) / r, i[o] = Math.floor(l * r) / r, e(i)), t
            }, t
        }

        var si = function (t, e) {
            var n, r = 0, i = (t = t.slice()).length - 1, a = t[r], o = t[i];
            return o < a && (n = r, r = i, i = n, n = a, a = o, o = n), t[r] = e.floor(a), t[i] = e.ceil(o), t
        };
        var li = xt((function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }), (function (t, e) {
            t.setMonth(t.getMonth() + e)
        }), (function (t, e) {
            return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
        }), (function (t) {
            return t.getMonth()
        })), ci = li, ui = (li.range, xt((function (t) {
            t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes())
        }), (function (t, e) {
            t.setTime(+t + 36e5 * e)
        }), (function (t, e) {
            return (e - t) / 36e5
        }), (function (t) {
            return t.getHours()
        }))), hi = ui, di = (ui.range, xt((function (t) {
            t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds())
        }), (function (t, e) {
            t.setTime(+t + 6e4 * e)
        }), (function (t, e) {
            return (e - t) / 6e4
        }), (function (t) {
            return t.getMinutes()
        }))), fi = di, pi = (di.range, xt((function (t) {
            t.setTime(t - t.getMilliseconds())
        }), (function (t, e) {
            t.setTime(+t + 1e3 * e)
        }), (function (t, e) {
            return (e - t) / 1e3
        }), (function (t) {
            return t.getUTCSeconds()
        }))), gi = pi, yi = (pi.range, xt((function () {
        }), (function (t, e) {
            t.setTime(+t + e)
        }), (function (t, e) {
            return e - t
        })));
        yi.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? xt((function (e) {
                e.setTime(Math.floor(e / t) * t)
            }), (function (e, n) {
                e.setTime(+e + n * t)
            }), (function (e, n) {
                return (n - e) / t
            })) : yi : null
        };
        var _i = yi;
        yi.range;

        function vi(t) {
            return new Date(t)
        }

        function mi(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }

        function xi(t, e, n, r, i, a, o, s, l) {
            var c = Xr(Or, Or), u = c.invert, h = c.domain, d = l(".%L"), f = l(":%S"), p = l("%I:%M"), g = l("%I %p"),
                y = l("%a %d"), _ = l("%b %d"), v = l("%B"), m = l("%Y"),
                x = [[o, 1, 1e3], [o, 5, 5e3], [o, 15, 15e3], [o, 30, 3e4], [a, 1, 6e4], [a, 5, 3e5], [a, 15, 9e5], [a, 30, 18e5], [i, 1, 36e5], [i, 3, 108e5], [i, 6, 216e5], [i, 12, 432e5], [r, 1, 864e5], [r, 2, 1728e5], [n, 1, 6048e5], [e, 1, 2592e6], [e, 3, 7776e6], [t, 1, 31536e6]];

            function w(s) {
                return (o(s) < s ? d : a(s) < s ? f : i(s) < s ? p : r(s) < s ? g : e(s) < s ? n(s) < s ? y : _ : t(s) < s ? v : m)(s)
            }

            function b(e, n, r, i) {
                if (null == e && (e = 10), "number" == typeof e) {
                    var a = Math.abs(r - n) / e, o = _n((function (t) {
                        return t[2]
                    })).right(x, a);
                    o === x.length ? (i = Dn(n / 31536e6, r / 31536e6, e), e = t) : o ? (i = (o = x[a / x[o - 1][2] < x[o][2] / a ? o - 1 : o])[1], e = o[0]) : (i = Math.max(Dn(n, r, e), 1), e = s)
                }
                return null == i ? e : e.every(i)
            }

            return c.invert = function (t) {
                return new Date(u(t))
            }, c.domain = function (t) {
                return arguments.length ? h(Nn.call(t, mi)) : h().map(vi)
            }, c.ticks = function (t, e) {
                var n, r = h(), i = r[0], a = r[r.length - 1], o = a < i;
                return o && (n = i, i = a, a = n), n = (n = b(t, i, a, e)) ? n.range(i, a + 1) : [], o ? n.reverse() : n
            }, c.tickFormat = function (t, e) {
                return null == e ? w : l(e)
            }, c.nice = function (t, e) {
                var n = h();
                return (t = b(t, n[0], n[n.length - 1], e)) ? h(si(n, t)) : c
            }, c.copy = function () {
                return jr(c, xi(t, e, n, r, i, a, o, s, l))
            }, c
        }

        var wi = xt((function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }), (function (t, e) {
            t.setUTCMonth(t.getUTCMonth() + e)
        }), (function (t, e) {
            return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
        }), (function (t) {
            return t.getUTCMonth()
        })), bi = (wi.range, xt((function (t) {
            t.setUTCMinutes(0, 0, 0)
        }), (function (t, e) {
            t.setTime(+t + 36e5 * e)
        }), (function (t, e) {
            return (e - t) / 36e5
        }), (function (t) {
            return t.getUTCHours()
        }))), Si = (bi.range, xt((function (t) {
            t.setUTCSeconds(0, 0)
        }), (function (t, e) {
            t.setTime(+t + 6e4 * e)
        }), (function (t, e) {
            return (e - t) / 6e4
        }), (function (t) {
            return t.getUTCMinutes()
        })));
        Si.range;
        var Ti = function (t) {
            for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;) n[r] = "#" + t.slice(6 * r, 6 * ++r);
            return n
        }("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Ai = Math.PI, Ci = 2 * Ai, Pi = Ci - 1e-6;

        function Di() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function Li() {
            return new Di
        }

        Di.prototype = Li.prototype = {
            constructor: Di, moveTo: function (t, e) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
            }, closePath: function () {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            }, lineTo: function (t, e) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
            }, quadraticCurveTo: function (t, e, n, r) {
                this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
            }, bezierCurveTo: function (t, e, n, r, i, a) {
                this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
            }, arcTo: function (t, e, n, r, i) {
                t = +t, e = +e, n = +n, r = +r, i = +i;
                var a = this._x1, o = this._y1, s = n - t, l = r - e, c = a - t, u = o - e, h = c * c + u * u;
                if (i < 0) throw new Error("negative radius: " + i);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e); else if (h > 1e-6) if (Math.abs(u * s - l * c) > 1e-6 && i) {
                    var d = n - a, f = r - o, p = s * s + l * l, g = d * d + f * f, y = Math.sqrt(p), _ = Math.sqrt(h),
                        v = i * Math.tan((Ai - Math.acos((p + h - g) / (2 * y * _))) / 2), m = v / _, x = v / y;
                    Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * c) + "," + (e + m * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * d > c * f) + "," + (this._x1 = t + x * s) + "," + (this._y1 = e + x * l)
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e); else ;
            }, arc: function (t, e, n, r, i, a) {
                t = +t, e = +e, a = !!a;
                var o = (n = +n) * Math.cos(r), s = n * Math.sin(r), l = t + o, c = e + s, u = 1 ^ a,
                    h = a ? r - i : i - r;
                if (n < 0) throw new Error("negative radius: " + n);
                null === this._x1 ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) && (this._ += "L" + l + "," + c), n && (h < 0 && (h = h % Ci + Ci), h > Pi ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (t - o) + "," + (e - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = l) + "," + (this._y1 = c) : h > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(h >= Ai) + "," + u + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))))
            }, rect: function (t, e, n, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
            }, toString: function () {
                return this._
            }
        };
        var Ii = Li, Ei = function (t) {
                return function () {
                    return t
                }
            }, ki = Math.abs, Vi = Math.atan2, Ri = Math.cos, Mi = Math.max, Oi = Math.min, Gi = Math.sin, Fi = Math.sqrt,
            Ni = Math.PI, Hi = Ni / 2, ji = 2 * Ni;

        function zi(t) {
            return t > 1 ? 0 : t < -1 ? Ni : Math.acos(t)
        }

        function Xi(t) {
            return t >= 1 ? Hi : t <= -1 ? -Hi : Math.asin(t)
        }

        function Bi(t) {
            return t.innerRadius
        }

        function Yi(t) {
            return t.outerRadius
        }

        function Ui(t) {
            return t.startAngle
        }

        function Wi(t) {
            return t.endAngle
        }

        function Qi(t) {
            return t && t.padAngle
        }

        function qi(t, e, n, r, i, a, o, s) {
            var l = n - t, c = r - e, u = o - i, h = s - a, d = h * l - u * c;
            if (!(d * d < 1e-12)) return [t + (d = (u * (e - a) - h * (t - i)) / d) * l, e + d * c]
        }

        function Ji(t, e, n, r, i, a, o) {
            var s = t - n, l = e - r, c = (o ? a : -a) / Fi(s * s + l * l), u = c * l, h = -c * s, d = t + u, f = e + h,
                p = n + u, g = r + h, y = (d + p) / 2, _ = (f + g) / 2, v = p - d, m = g - f, x = v * v + m * m,
                w = i - a, b = d * g - p * f, S = (m < 0 ? -1 : 1) * Fi(Mi(0, w * w * x - b * b)),
                T = (b * m - v * S) / x, A = (-b * v - m * S) / x, C = (b * m + v * S) / x, P = (-b * v + m * S) / x,
                D = T - y, L = A - _, I = C - y, E = P - _;
            return D * D + L * L > I * I + E * E && (T = C, A = P), {
                cx: T,
                cy: A,
                x01: -u,
                y01: -h,
                x11: T * (i / w - 1),
                y11: A * (i / w - 1)
            }
        }

        var Ki = function (t, e) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
        }, Zi = function (t) {
            return t
        };

        function $i(t) {
            this._context = t
        }

        $i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, e) {
                switch (t = +t, e = +e, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, e)
                }
            }
        };
        var ta = function (t) {
            return new $i(t)
        };

        function ea(t) {
            return t[0]
        }

        function na(t) {
            return t[1]
        }

        var ra = function () {
            var t = ea, e = na, n = Ei(!0), r = null, i = ta, a = null;

            function o(o) {
                var s, l, c, u = o.length, h = !1;
                for (null == r && (a = i(c = Ii())), s = 0; s <= u; ++s) !(s < u && n(l = o[s], s, o)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(l, s, o), +e(l, s, o));
                if (c) return a = null, c + "" || null
            }

            return o.x = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : Ei(+e), o) : t
            }, o.y = function (t) {
                return arguments.length ? (e = "function" == typeof t ? t : Ei(+t), o) : e
            }, o.defined = function (t) {
                return arguments.length ? (n = "function" == typeof t ? t : Ei(!!t), o) : n
            }, o.curve = function (t) {
                return arguments.length ? (i = t, null != r && (a = i(r)), o) : i
            }, o.context = function (t) {
                return arguments.length ? (null == t ? r = a = null : a = i(r = t), o) : r
            }, o
        }, ia = {
            value: function () {
            }
        };

        function aa() {
            for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
                if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new oa(r)
        }

        function oa(t) {
            this._ = t
        }

        function sa(t, e) {
            return t.trim().split(/^|\s+/).map((function (t) {
                var n = "", r = t.indexOf(".");
                if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {type: t, name: n}
            }))
        }

        function la(t, e) {
            for (var n, r = 0, i = t.length; r < i; ++r) if ((n = t[r]).name === e) return n.value
        }

        function ca(t, e, n) {
            for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === e) {
                t[r] = ia, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            }
            return null != n && t.push({name: e, value: n}), t
        }

        oa.prototype = aa.prototype = {
            constructor: oa, on: function (t, e) {
                var n, r = this._, i = sa(t + "", r), a = -1, o = i.length;
                if (!(arguments.length < 2)) {
                    if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                    for (; ++a < o;) if (n = (t = i[a]).type) r[n] = ca(r[n], t.name, e); else if (null == e) for (n in r) r[n] = ca(r[n], t.name, null);
                    return this
                }
                for (; ++a < o;) if ((n = (t = i[a]).type) && (n = la(r[n], t.name))) return n
            }, copy: function () {
                var t = {}, e = this._;
                for (var n in e) t[n] = e[n].slice();
                return new oa(t)
            }, call: function (t, e) {
                if ((n = arguments.length - 2) > 0) for (var n, r, i = new Array(n), a = 0; a < n; ++a) i[a] = arguments[a + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (a = 0, n = (r = this._[t]).length; a < n; ++a) r[a].value.apply(e, i)
            }, apply: function (t, e, n) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n)
            }
        };
        var ua = aa;
        var ha = function () {
            tt.preventDefault(), tt.stopImmediatePropagation()
        }, da = function (t) {
            var e = t.document.documentElement, n = pt(t).on("dragstart.drag", ha, !0);
            "onselectstart" in e ? n.on("selectstart.drag", ha, !0) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none")
        };

        function fa(t, e) {
            var n = t.document.documentElement, r = pt(t).on("dragstart.drag", null);
            e && (r.on("click.drag", ha, !0), setTimeout((function () {
                r.on("click.drag", null)
            }), 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect)
        }

        var pa = Math.SQRT2;

        function ga(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        var ya, _a, va = function (t, e) {
                var n, r, i = t[0], a = t[1], o = t[2], s = e[0], l = e[1], c = e[2], u = s - i, h = l - a,
                    d = u * u + h * h;
                if (d < 1e-12) r = Math.log(c / o) / pa, n = function (t) {
                    return [i + t * u, a + t * h, o * Math.exp(pa * t * r)]
                }; else {
                    var f = Math.sqrt(d), p = (c * c - o * o + 4 * d) / (2 * o * 2 * f),
                        g = (c * c - o * o - 4 * d) / (2 * c * 2 * f), y = Math.log(Math.sqrt(p * p + 1) - p),
                        _ = Math.log(Math.sqrt(g * g + 1) - g);
                    r = (_ - y) / pa, n = function (t) {
                        var e, n = t * r, s = ga(y),
                            l = o / (2 * f) * (s * (e = pa * n + y, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function (t) {
                                return ((t = Math.exp(t)) - 1 / t) / 2
                            }(y));
                        return [i + l * u, a + l * h, o * s / ga(pa * n + y)]
                    }
                }
                return n.duration = 1e3 * r, n
            }, ma = function (t, e, n) {
                arguments.length < 3 && (n = e, e = gt().changedTouches);
                for (var r, i = 0, a = e ? e.length : 0; i < a; ++i) if ((r = e[i]).identifier === n) return yt(t, r);
                return null
            }, xa = 0, wa = 0, ba = 0, Sa = 0, Ta = 0, Aa = 0,
            Ca = "object" == typeof performance && performance.now ? performance : Date,
            Pa = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
                setTimeout(t, 17)
            };

        function Da() {
            return Ta || (Pa(La), Ta = Ca.now() + Aa)
        }

        function La() {
            Ta = 0
        }

        function Ia() {
            this._call = this._time = this._next = null
        }

        function Ea(t, e, n) {
            var r = new Ia;
            return r.restart(t, e, n), r
        }

        function ka() {
            Ta = (Sa = Ca.now()) + Aa, xa = wa = 0;
            try {
                !function () {
                    Da(), ++xa;
                    for (var t, e = ya; e;) (t = Ta - e._time) >= 0 && e._call.call(null, t), e = e._next;
                    --xa
                }()
            } finally {
                xa = 0, function () {
                    var t, e, n = ya, r = 1 / 0;
                    for (; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ya = e);
                    _a = t, Ra(r)
                }(), Ta = 0
            }
        }

        function Va() {
            var t = Ca.now(), e = t - Sa;
            e > 1e3 && (Aa -= e, Sa = t)
        }

        function Ra(t) {
            xa || (wa && (wa = clearTimeout(wa)), t - Ta > 24 ? (t < 1 / 0 && (wa = setTimeout(ka, t - Ca.now() - Aa)), ba && (ba = clearInterval(ba))) : (ba || (Sa = Ca.now(), ba = setInterval(Va, 1e3)), xa = 1, Pa(ka)))
        }

        Ia.prototype = Ea.prototype = {
            constructor: Ia, restart: function (t, e, n) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                n = (null == n ? Da() : +n) + (null == e ? 0 : +e), this._next || _a === this || (_a ? _a._next = this : ya = this, _a = this), this._call = t, this._time = n, Ra()
            }, stop: function () {
                this._call && (this._call = null, this._time = 1 / 0, Ra())
            }
        };
        var Ma = function (t, e, n) {
            var r = new Ia;
            return e = null == e ? 0 : +e, r.restart((function (n) {
                r.stop(), t(n + e)
            }), e, n), r
        }, Oa = ua("start", "end", "cancel", "interrupt"), Ga = [], Fa = function (t, e, n, r, i, a) {
            var o = t.__transition;
            if (o) {
                if (n in o) return
            } else t.__transition = {};
            !function (t, e, n) {
                var r, i = t.__transition;

                function a(l) {
                    var c, u, h, d;
                    if (1 !== n.state) return s();
                    for (c in i) if ((d = i[c]).name === n.name) {
                        if (3 === d.state) return Ma(a);
                        4 === d.state ? (d.state = 6, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[c]) : +c < e && (d.state = 6, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[c])
                    }
                    if (Ma((function () {
                        3 === n.state && (n.state = 4, n.timer.restart(o, n.delay, n.time), o(l))
                    })), n.state = 2, n.on.call("start", t, t.__data__, n.index, n.group), 2 === n.state) {
                        for (n.state = 3, r = new Array(h = n.tween.length), c = 0, u = -1; c < h; ++c) (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (r[++u] = d);
                        r.length = u + 1
                    }
                }

                function o(e) {
                    for (var i = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(s), n.state = 5, 1), a = -1, o = r.length; ++a < o;) r[a].call(t, i);
                    5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group), s())
                }

                function s() {
                    for (var r in n.state = 6, n.timer.stop(), delete i[e], i) return;
                    delete t.__transition
                }

                i[e] = n, n.timer = Ea((function (t) {
                    n.state = 1, n.timer.restart(a, n.delay, n.time), n.delay <= t && a(t - n.delay)
                }), 0, n.time)
            }(t, n, {
                name: e,
                index: r,
                group: i,
                on: Oa,
                tween: Ga,
                time: a.time,
                delay: a.delay,
                duration: a.duration,
                ease: a.ease,
                timer: null,
                state: 0
            })
        };

        function Na(t, e) {
            var n = ja(t, e);
            if (n.state > 0) throw new Error("too late; already scheduled");
            return n
        }

        function Ha(t, e) {
            var n = ja(t, e);
            if (n.state > 3) throw new Error("too late; already running");
            return n
        }

        function ja(t, e) {
            var n = t.__transition;
            if (!n || !(n = n[e])) throw new Error("transition not found");
            return n
        }

        var za, Xa, Ba, Ya, Ua = function (t, e) {
                var n, r, i, a = t.__transition, o = !0;
                if (a) {
                    for (i in e = null == e ? null : e + "", a) (n = a[i]).name === e ? (r = n.state > 2 && n.state < 5, n.state = 6, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete a[i]) : o = !1;
                    o && delete t.__transition
                }
            }, Wa = 180 / Math.PI, Qa = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
            qa = function (t, e, n, r, i, a) {
                var o, s, l;
                return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
                    translateX: i,
                    translateY: a,
                    rotate: Math.atan2(e, t) * Wa,
                    skewX: Math.atan(l) * Wa,
                    scaleX: o,
                    scaleY: s
                }
            };

        function Ja(t, e, n, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }

            return function (a, o) {
                var s = [], l = [];
                return a = t(a), o = t(o), function (t, r, i, a, o, s) {
                    if (t !== i || r !== a) {
                        var l = o.push("translate(", null, e, null, n);
                        s.push({i: l - 4, x: Pr(t, i)}, {i: l - 2, x: Pr(r, a)})
                    } else (i || a) && o.push("translate(" + i + e + a + n)
                }(a.translateX, a.translateY, o.translateX, o.translateY, s, l), function (t, e, n, a) {
                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), a.push({
                        i: n.push(i(n) + "rotate(", null, r) - 2,
                        x: Pr(t, e)
                    })) : e && n.push(i(n) + "rotate(" + e + r)
                }(a.rotate, o.rotate, s, l), function (t, e, n, a) {
                    t !== e ? a.push({
                        i: n.push(i(n) + "skewX(", null, r) - 2,
                        x: Pr(t, e)
                    }) : e && n.push(i(n) + "skewX(" + e + r)
                }(a.skewX, o.skewX, s, l), function (t, e, n, r, a, o) {
                    if (t !== n || e !== r) {
                        var s = a.push(i(a) + "scale(", null, ",", null, ")");
                        o.push({i: s - 4, x: Pr(t, n)}, {i: s - 2, x: Pr(e, r)})
                    } else 1 === n && 1 === r || a.push(i(a) + "scale(" + n + "," + r + ")")
                }(a.scaleX, a.scaleY, o.scaleX, o.scaleY, s, l), a = o = null, function (t) {
                    for (var e, n = -1, r = l.length; ++n < r;) s[(e = l[n]).i] = e.x(t);
                    return s.join("")
                }
            }
        }

        var Ka = Ja((function (t) {
            return "none" === t ? Qa : (za || (za = document.createElement("DIV"), Xa = document.documentElement, Ba = document.defaultView), za.style.transform = t, t = Ba.getComputedStyle(Xa.appendChild(za), null).getPropertyValue("transform"), Xa.removeChild(za), t = t.slice(7, -1).split(","), qa(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }), "px, ", "px)", "deg)"), Za = Ja((function (t) {
            return null == t ? Qa : (Ya || (Ya = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ya.setAttribute("transform", t), (t = Ya.transform.baseVal.consolidate()) ? (t = t.matrix, qa(t.a, t.b, t.c, t.d, t.e, t.f)) : Qa)
        }), ", ", ")", ")");

        function $a(t, e) {
            var n, r;
            return function () {
                var i = Ha(this, t), a = i.tween;
                if (a !== n) for (var o = 0, s = (r = n = a).length; o < s; ++o) if (r[o].name === e) {
                    (r = r.slice()).splice(o, 1);
                    break
                }
                i.tween = r
            }
        }

        function to(t, e, n) {
            var r, i;
            if ("function" != typeof n) throw new Error;
            return function () {
                var a = Ha(this, t), o = a.tween;
                if (o !== r) {
                    i = (r = o).slice();
                    for (var s = {name: e, value: n}, l = 0, c = i.length; l < c; ++l) if (i[l].name === e) {
                        i[l] = s;
                        break
                    }
                    l === c && i.push(s)
                }
                a.tween = i
            }
        }

        function eo(t, e, n) {
            var r = t._id;
            return t.each((function () {
                var t = Ha(this, r);
                (t.value || (t.value = {}))[e] = n.apply(this, arguments)
            })), function (t) {
                return ja(t, r).value[e]
            }
        }

        var no = function (t, e) {
            var n;
            return ("number" == typeof e ? Pr : e instanceof rr ? wr : (n = rr(e)) ? (e = n, wr) : Er)(t, e)
        };

        function ro(t) {
            return function () {
                this.removeAttribute(t)
            }
        }

        function io(t) {
            return function () {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function ao(t, e, n) {
            var r, i, a = n + "";
            return function () {
                var o = this.getAttribute(t);
                return o === a ? null : o === r ? i : i = e(r = o, n)
            }
        }

        function oo(t, e, n) {
            var r, i, a = n + "";
            return function () {
                var o = this.getAttributeNS(t.space, t.local);
                return o === a ? null : o === r ? i : i = e(r = o, n)
            }
        }

        function so(t, e, n) {
            var r, i, a;
            return function () {
                var o, s, l = n(this);
                if (null != l) return (o = this.getAttribute(t)) === (s = l + "") ? null : o === r && s === i ? a : (i = s, a = e(r = o, l));
                this.removeAttribute(t)
            }
        }

        function lo(t, e, n) {
            var r, i, a;
            return function () {
                var o, s, l = n(this);
                if (null != l) return (o = this.getAttributeNS(t.space, t.local)) === (s = l + "") ? null : o === r && s === i ? a : (i = s, a = e(r = o, l));
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function co(t, e) {
            return function (n) {
                this.setAttribute(t, e.call(this, n))
            }
        }

        function uo(t, e) {
            return function (n) {
                this.setAttributeNS(t.space, t.local, e.call(this, n))
            }
        }

        function ho(t, e) {
            var n, r;

            function i() {
                var i = e.apply(this, arguments);
                return i !== r && (n = (r = i) && uo(t, i)), n
            }

            return i._value = e, i
        }

        function fo(t, e) {
            var n, r;

            function i() {
                var i = e.apply(this, arguments);
                return i !== r && (n = (r = i) && co(t, i)), n
            }

            return i._value = e, i
        }

        function po(t, e) {
            return function () {
                Na(this, t).delay = +e.apply(this, arguments)
            }
        }

        function go(t, e) {
            return e = +e, function () {
                Na(this, t).delay = e
            }
        }

        function yo(t, e) {
            return function () {
                Ha(this, t).duration = +e.apply(this, arguments)
            }
        }

        function _o(t, e) {
            return e = +e, function () {
                Ha(this, t).duration = e
            }
        }

        function vo(t, e) {
            if ("function" != typeof e) throw new Error;
            return function () {
                Ha(this, t).ease = e
            }
        }

        function mo(t, e, n) {
            var r, i, a = function (t) {
                return (t + "").trim().split(/^|\s+/).every((function (t) {
                    var e = t.indexOf(".");
                    return e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                }))
            }(e) ? Na : Ha;
            return function () {
                var o = a(this, t), s = o.on;
                s !== r && (i = (r = s).copy()).on(e, n), o.on = i
            }
        }

        var xo = ft.prototype.constructor;

        function wo(t) {
            return function () {
                this.style.removeProperty(t)
            }
        }

        function bo(t, e, n) {
            return function (r) {
                this.style.setProperty(t, e.call(this, r), n)
            }
        }

        function So(t, e, n) {
            var r, i;

            function a() {
                var a = e.apply(this, arguments);
                return a !== i && (r = (i = a) && bo(t, a, n)), r
            }

            return a._value = e, a
        }

        function To(t) {
            return function (e) {
                this.textContent = t.call(this, e)
            }
        }

        function Ao(t) {
            var e, n;

            function r() {
                var r = t.apply(this, arguments);
                return r !== n && (e = (n = r) && To(r)), e
            }

            return r._value = t, r
        }

        var Co = 0;

        function Po(t, e, n, r) {
            this._groups = t, this._parents = e, this._name = n, this._id = r
        }

        function Do(t) {
            return ft().transition(t)
        }

        function Lo() {
            return ++Co
        }

        var Io = ft.prototype;
        Po.prototype = Do.prototype = {
            constructor: Po,
            select: function (t) {
                var e = this._name, n = this._id;
                "function" != typeof t && (t = i(t));
                for (var r = this._groups, a = r.length, o = new Array(a), s = 0; s < a; ++s) for (var l, c, u = r[s], h = u.length, d = o[s] = new Array(h), f = 0; f < h; ++f) (l = u[f]) && (c = t.call(l, l.__data__, f, u)) && ("__data__" in l && (c.__data__ = l.__data__), d[f] = c, Fa(d[f], e, n, f, d, ja(l, n)));
                return new Po(o, this._parents, e, n)
            },
            selectAll: function (t) {
                var e = this._name, n = this._id;
                "function" != typeof t && (t = o(t));
                for (var r = this._groups, i = r.length, a = [], s = [], l = 0; l < i; ++l) for (var c, u = r[l], h = u.length, d = 0; d < h; ++d) if (c = u[d]) {
                    for (var f, p = t.call(c, c.__data__, d, u), g = ja(c, n), y = 0, _ = p.length; y < _; ++y) (f = p[y]) && Fa(f, e, n, y, p, g);
                    a.push(p), s.push(c)
                }
                return new Po(a, s, e, n)
            },
            filter: function (t) {
                "function" != typeof t && (t = s(t));
                for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var a, o = e[i], l = o.length, c = r[i] = [], u = 0; u < l; ++u) (a = o[u]) && t.call(a, a.__data__, u, o) && c.push(a);
                return new Po(r, this._parents, this._name, this._id)
            },
            merge: function (t) {
                if (t._id !== this._id) throw new Error;
                for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s) for (var l, c = e[s], u = n[s], h = c.length, d = o[s] = new Array(h), f = 0; f < h; ++f) (l = c[f] || u[f]) && (d[f] = l);
                for (; s < r; ++s) o[s] = e[s];
                return new Po(o, this._parents, this._name, this._id)
            },
            selection: function () {
                return new xo(this._groups, this._parents)
            },
            transition: function () {
                for (var t = this._name, e = this._id, n = Lo(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, s = r[a], l = s.length, c = 0; c < l; ++c) if (o = s[c]) {
                    var u = ja(o, e);
                    Fa(o, t, n, c, s, {
                        time: u.time + u.delay + u.duration,
                        delay: 0,
                        duration: u.duration,
                        ease: u.ease
                    })
                }
                return new Po(r, this._parents, t, n)
            },
            call: Io.call,
            nodes: Io.nodes,
            node: Io.node,
            size: Io.size,
            empty: Io.empty,
            each: Io.each,
            on: function (t, e) {
                var n = this._id;
                return arguments.length < 2 ? ja(this.node(), n).on.on(t) : this.each(mo(n, t, e))
            },
            attr: function (t, e) {
                var n = g(t), r = "transform" === n ? Za : no;
                return this.attrTween(t, "function" == typeof e ? (n.local ? lo : so)(n, r, eo(this, "attr." + t, e)) : null == e ? (n.local ? io : ro)(n) : (n.local ? oo : ao)(n, r, e))
            },
            attrTween: function (t, e) {
                var n = "attr." + t;
                if (arguments.length < 2) return (n = this.tween(n)) && n._value;
                if (null == e) return this.tween(n, null);
                if ("function" != typeof e) throw new Error;
                var r = g(t);
                return this.tween(n, (r.local ? ho : fo)(r, e))
            },
            style: function (t, e, n) {
                var r = "transform" == (t += "") ? Ka : no;
                return null == e ? this.styleTween(t, function (t, e) {
                    var n, r, i;
                    return function () {
                        var a = C(this, t), o = (this.style.removeProperty(t), C(this, t));
                        return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o)
                    }
                }(t, r)).on("end.style." + t, wo(t)) : "function" == typeof e ? this.styleTween(t, function (t, e, n) {
                    var r, i, a;
                    return function () {
                        var o = C(this, t), s = n(this), l = s + "";
                        return null == s && (this.style.removeProperty(t), l = s = C(this, t)), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, s))
                    }
                }(t, r, eo(this, "style." + t, e))).each(function (t, e) {
                    var n, r, i, a, o = "style." + e, s = "end." + o;
                    return function () {
                        var l = Ha(this, t), c = l.on, u = null == l.value[o] ? a || (a = wo(e)) : void 0;
                        c === n && i === u || (r = (n = c).copy()).on(s, i = u), l.on = r
                    }
                }(this._id, t)) : this.styleTween(t, function (t, e, n) {
                    var r, i, a = n + "";
                    return function () {
                        var o = C(this, t);
                        return o === a ? null : o === r ? i : i = e(r = o, n)
                    }
                }(t, r, e), n).on("end.style." + t, null)
            },
            styleTween: function (t, e, n) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == e) return this.tween(r, null);
                if ("function" != typeof e) throw new Error;
                return this.tween(r, So(t, e, null == n ? "" : n))
            },
            text: function (t) {
                return this.tween("text", "function" == typeof t ? function (t) {
                    return function () {
                        var e = t(this);
                        this.textContent = null == e ? "" : e
                    }
                }(eo(this, "text", t)) : function (t) {
                    return function () {
                        this.textContent = t
                    }
                }(null == t ? "" : t + ""))
            },
            textTween: function (t) {
                var e = "text";
                if (arguments.length < 1) return (e = this.tween(e)) && e._value;
                if (null == t) return this.tween(e, null);
                if ("function" != typeof t) throw new Error;
                return this.tween(e, Ao(t))
            },
            remove: function () {
                return this.on("end.remove", (t = this._id, function () {
                    var e = this.parentNode;
                    for (var n in this.__transition) if (+n !== t) return;
                    e && e.removeChild(this)
                }));
                var t
            },
            tween: function (t, e) {
                var n = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = ja(this.node(), n).tween, a = 0, o = i.length; a < o; ++a) if ((r = i[a]).name === t) return r.value;
                    return null
                }
                return this.each((null == e ? $a : to)(n, t, e))
            },
            delay: function (t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? po : go)(e, t)) : ja(this.node(), e).delay
            },
            duration: function (t) {
                var e = this._id;
                return arguments.length ? this.each(("function" == typeof t ? yo : _o)(e, t)) : ja(this.node(), e).duration
            },
            ease: function (t) {
                var e = this._id;
                return arguments.length ? this.each(vo(e, t)) : ja(this.node(), e).ease
            },
            end: function () {
                var t, e, n = this, r = n._id, i = n.size();
                return new Promise((function (a, o) {
                    var s = {value: o}, l = {
                        value: function () {
                            0 == --i && a()
                        }
                    };
                    n.each((function () {
                        var n = Ha(this, r), i = n.on;
                        i !== t && ((e = (t = i).copy())._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), n.on = e
                    }))
                }))
            }
        };
        var Eo = {
            time: null, delay: 0, duration: 250, ease: function (t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
        };

        function ko(t, e) {
            for (var n; !(n = t.__transition) || !(n = n[e]);) if (!(t = t.parentNode)) return Eo.time = Da(), Eo;
            return n
        }

        ft.prototype.interrupt = function (t) {
            return this.each((function () {
                Ua(this, t)
            }))
        }, ft.prototype.transition = function (t) {
            var e, n;
            t instanceof Po ? (e = t._id, t = t._name) : (e = Lo(), (n = Eo).time = Da(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o, s = r[a], l = s.length, c = 0; c < l; ++c) (o = s[c]) && Fa(o, t, e, c, s, n || ko(o, e));
            return new Po(r, this._parents, t, e)
        };
        var Vo = function (t) {
            return function () {
                return t
            }
        };

        function Ro(t, e, n) {
            this.target = t, this.type = e, this.transform = n
        }

        function Mo(t, e, n) {
            this.k = t, this.x = e, this.y = n
        }

        Mo.prototype = {
            constructor: Mo, scale: function (t) {
                return 1 === t ? this : new Mo(this.k * t, this.x, this.y)
            }, translate: function (t, e) {
                return 0 === t & 0 === e ? this : new Mo(this.k, this.x + this.k * t, this.y + this.k * e)
            }, apply: function (t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            }, applyX: function (t) {
                return t * this.k + this.x
            }, applyY: function (t) {
                return t * this.k + this.y
            }, invert: function (t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            }, invertX: function (t) {
                return (t - this.x) / this.k
            }, invertY: function (t) {
                return (t - this.y) / this.k
            }, rescaleX: function (t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            }, rescaleY: function (t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            }, toString: function () {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var Oo = new Mo(1, 0, 0);

        function Go() {
            tt.stopImmediatePropagation()
        }

        Mo.prototype;
        var Fo = function () {
            tt.preventDefault(), tt.stopImmediatePropagation()
        };

        function No() {
            return !tt.ctrlKey && !tt.button
        }

        function Ho() {
            var t = this;
            return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]] : [[0, 0], [t.clientWidth, t.clientHeight]]
        }

        function jo() {
            return this.__zoom || Oo
        }

        function zo() {
            return -tt.deltaY * (1 === tt.deltaMode ? .05 : tt.deltaMode ? 1 : .002)
        }

        function Xo() {
            return navigator.maxTouchPoints || "ontouchstart" in this
        }

        function Bo(t, e, n) {
            var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], a = t.invertY(e[0][1]) - n[0][1],
                o = t.invertY(e[1][1]) - n[1][1];
            return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o))
        }

        var Yo = function (t) {
            return function () {
                return t
            }
        }, Uo = function (t, e, n) {
            this.target = t, this.type = e, this.selection = n
        };

        function Wo() {
            tt.stopImmediatePropagation()
        }

        var Qo = function () {
            tt.preventDefault(), tt.stopImmediatePropagation()
        }, qo = {name: "drag"}, Jo = {name: "space"}, Ko = {name: "handle"}, Zo = {name: "center"};

        function $o(t) {
            return [+t[0], +t[1]]
        }

        function ts(t) {
            return [$o(t[0]), $o(t[1])]
        }

        function es(t) {
            return function (e) {
                return ma(e, tt.touches, t)
            }
        }

        var ns = {
                name: "x", handles: ["w", "e"].map(cs), input: function (t, e) {
                    return null == t ? null : [[+t[0], e[0][1]], [+t[1], e[1][1]]]
                }, output: function (t) {
                    return t && [t[0][0], t[1][0]]
                }
            }, rs = {
                name: "y", handles: ["n", "s"].map(cs), input: function (t, e) {
                    return null == t ? null : [[e[0][0], +t[0]], [e[1][0], +t[1]]]
                }, output: function (t) {
                    return t && [t[0][1], t[1][1]]
                }
            }, is = (["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(cs), {
                overlay: "crosshair",
                selection: "move",
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            }), as = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"},
            os = {n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw"},
            ss = {overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1},
            ls = {overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1};

        function cs(t) {
            return {type: t}
        }

        function us() {
            return !tt.ctrlKey && !tt.button
        }

        function hs() {
            var t = this.ownerSVGElement || this;
            return t.hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
        }

        function ds() {
            return navigator.maxTouchPoints || "ontouchstart" in this
        }

        function fs(t) {
            for (; !t.__brush;) if (!(t = t.parentNode)) return;
            return t.__brush
        }

        function ps(t) {
            return t[0][0] === t[1][0] || t[0][1] === t[1][1]
        }

        function gs(t) {
            var e, n = hs, r = us, i = ds, a = !0, o = ua("start", "brush", "end"), s = 6;

            function l(e) {
                var n = e.property("__brush", g).selectAll(".overlay").data([cs("overlay")]);
                n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", is.overlay).merge(n).each((function () {
                    var t = fs(this).extent;
                    pt(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                })), e.selectAll(".selection").data([cs("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", is.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                var r = e.selectAll(".handle").data(t.handles, (function (t) {
                    return t.type
                }));
                r.exit().remove(), r.enter().append("rect").attr("class", (function (t) {
                    return "handle handle--" + t.type
                })).attr("cursor", (function (t) {
                    return is[t.type]
                })), e.each(c).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", d).filter(i).on("touchstart.brush", d).on("touchmove.brush", f).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function c() {
                var t = pt(this), e = fs(this).selection;
                e ? (t.selectAll(".selection").style("display", null).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]), t.selectAll(".handle").style("display", null).attr("x", (function (t) {
                    return "e" === t.type[t.type.length - 1] ? e[1][0] - s / 2 : e[0][0] - s / 2
                })).attr("y", (function (t) {
                    return "s" === t.type[0] ? e[1][1] - s / 2 : e[0][1] - s / 2
                })).attr("width", (function (t) {
                    return "n" === t.type || "s" === t.type ? e[1][0] - e[0][0] + s : s
                })).attr("height", (function (t) {
                    return "e" === t.type || "w" === t.type ? e[1][1] - e[0][1] + s : s
                }))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
            }

            function u(t, e, n) {
                var r = t.__brush.emitter;
                return !r || n && r.clean ? new h(t, e, n) : r
            }

            function h(t, e, n) {
                this.that = t, this.args = e, this.state = t.__brush, this.active = 0, this.clean = n
            }

            function d() {
                if ((!e || tt.touches) && r.apply(this, arguments)) {
                    var n, i, o, s, l, h, d, f, p, g, y, _ = this, v = tt.target.__data__.type,
                        m = "selection" === (a && tt.metaKey ? v = "overlay" : v) ? qo : a && tt.altKey ? Zo : Ko,
                        x = t === rs ? null : ss[v], w = t === ns ? null : ls[v], b = fs(_), S = b.extent,
                        T = b.selection, A = S[0][0], C = S[0][1], P = S[1][0], D = S[1][1], L = 0, I = 0,
                        E = x && w && a && tt.shiftKey, k = tt.touches ? es(tt.changedTouches[0].identifier) : _t,
                        V = k(_), R = V, M = u(_, arguments, !0).beforestart();
                    "overlay" === v ? (T && (p = !0), b.selection = T = [[n = t === rs ? A : V[0], o = t === ns ? C : V[1]], [l = t === rs ? P : n, d = t === ns ? D : o]]) : (n = T[0][0], o = T[0][1], l = T[1][0], d = T[1][1]), i = n, s = o, h = l, f = d;
                    var O = pt(_).attr("pointer-events", "none"), G = O.selectAll(".overlay").attr("cursor", is[v]);
                    if (tt.touches) M.moved = N, M.ended = j; else {
                        var F = pt(tt.view).on("mousemove.brush", N, !0).on("mouseup.brush", j, !0);
                        a && F.on("keydown.brush", z, !0).on("keyup.brush", X, !0), da(tt.view)
                    }
                    Wo(), Ua(_), c.call(_), M.start()
                }

                function N() {
                    var t = k(_);
                    !E || g || y || (Math.abs(t[0] - R[0]) > Math.abs(t[1] - R[1]) ? y = !0 : g = !0), R = t, p = !0, Qo(), H()
                }

                function H() {
                    var t;
                    switch (L = R[0] - V[0], I = R[1] - V[1], m) {
                        case Jo:
                        case qo:
                            x && (L = Math.max(A - n, Math.min(P - l, L)), i = n + L, h = l + L), w && (I = Math.max(C - o, Math.min(D - d, I)), s = o + I, f = d + I);
                            break;
                        case Ko:
                            x < 0 ? (L = Math.max(A - n, Math.min(P - n, L)), i = n + L, h = l) : x > 0 && (L = Math.max(A - l, Math.min(P - l, L)), i = n, h = l + L), w < 0 ? (I = Math.max(C - o, Math.min(D - o, I)), s = o + I, f = d) : w > 0 && (I = Math.max(C - d, Math.min(D - d, I)), s = o, f = d + I);
                            break;
                        case Zo:
                            x && (i = Math.max(A, Math.min(P, n - L * x)), h = Math.max(A, Math.min(P, l + L * x))), w && (s = Math.max(C, Math.min(D, o - I * w)), f = Math.max(C, Math.min(D, d + I * w)))
                    }
                    h < i && (x *= -1, t = n, n = l, l = t, t = i, i = h, h = t, v in as && G.attr("cursor", is[v = as[v]])), f < s && (w *= -1, t = o, o = d, d = t, t = s, s = f, f = t, v in os && G.attr("cursor", is[v = os[v]])), b.selection && (T = b.selection), g && (i = T[0][0], h = T[1][0]), y && (s = T[0][1], f = T[1][1]), T[0][0] === i && T[0][1] === s && T[1][0] === h && T[1][1] === f || (b.selection = [[i, s], [h, f]], c.call(_), M.brush())
                }

                function j() {
                    if (Wo(), tt.touches) {
                        if (tt.touches.length) return;
                        e && clearTimeout(e), e = setTimeout((function () {
                            e = null
                        }), 500)
                    } else fa(tt.view, p), F.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    O.attr("pointer-events", "all"), G.attr("cursor", is.overlay), b.selection && (T = b.selection), ps(T) && (b.selection = null, c.call(_)), M.end()
                }

                function z() {
                    switch (tt.keyCode) {
                        case 16:
                            E = x && w;
                            break;
                        case 18:
                            m === Ko && (x && (l = h - L * x, n = i + L * x), w && (d = f - I * w, o = s + I * w), m = Zo, H());
                            break;
                        case 32:
                            m !== Ko && m !== Zo || (x < 0 ? l = h - L : x > 0 && (n = i - L), w < 0 ? d = f - I : w > 0 && (o = s - I), m = Jo, G.attr("cursor", is.selection), H());
                            break;
                        default:
                            return
                    }
                    Qo()
                }

                function X() {
                    switch (tt.keyCode) {
                        case 16:
                            E && (g = y = E = !1, H());
                            break;
                        case 18:
                            m === Zo && (x < 0 ? l = h : x > 0 && (n = i), w < 0 ? d = f : w > 0 && (o = s), m = Ko, H());
                            break;
                        case 32:
                            m === Jo && (tt.altKey ? (x && (l = h - L * x, n = i + L * x), w && (d = f - I * w, o = s + I * w), m = Zo) : (x < 0 ? l = h : x > 0 && (n = i), w < 0 ? d = f : w > 0 && (o = s), m = Ko), G.attr("cursor", is[v]), H());
                            break;
                        default:
                            return
                    }
                    Qo()
                }
            }

            function f() {
                u(this, arguments).moved()
            }

            function p() {
                u(this, arguments).ended()
            }

            function g() {
                var e = this.__brush || {selection: null};
                return e.extent = ts(n.apply(this, arguments)), e.dim = t, e
            }

            return l.move = function (e, n) {
                e.selection ? e.on("start.brush", (function () {
                    u(this, arguments).beforestart().start()
                })).on("interrupt.brush end.brush", (function () {
                    u(this, arguments).end()
                })).tween("brush", (function () {
                    var e = this, r = e.__brush, i = u(e, arguments), a = r.selection,
                        o = t.input("function" == typeof n ? n.apply(this, arguments) : n, r.extent), s = kr(a, o);

                    function l(t) {
                        r.selection = 1 === t && null === o ? null : s(t), c.call(e), i.brush()
                    }

                    return null !== a && null !== o ? l : l(1)
                })) : e.each((function () {
                    var e = this, r = arguments, i = e.__brush,
                        a = t.input("function" == typeof n ? n.apply(e, r) : n, i.extent), o = u(e, r).beforestart();
                    Ua(e), i.selection = null === a ? null : a, c.call(e), o.start().brush().end()
                }))
            }, l.clear = function (t) {
                l.move(t, null)
            }, h.prototype = {
                beforestart: function () {
                    return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
                }, start: function () {
                    return this.starting ? (this.starting = !1, this.emit("start")) : this.emit("brush"), this
                }, brush: function () {
                    return this.emit("brush"), this
                }, end: function () {
                    return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
                }, emit: function (e) {
                    ot(new Uo(l, e, t.output(this.state.selection)), o.apply, o, [e, this.that, this.args])
                }
            }, l.extent = function (t) {
                return arguments.length ? (n = "function" == typeof t ? t : Yo(ts(t)), l) : n
            }, l.filter = function (t) {
                return arguments.length ? (r = "function" == typeof t ? t : Yo(!!t), l) : r
            }, l.touchable = function (t) {
                return arguments.length ? (i = "function" == typeof t ? t : Yo(!!t), l) : i
            }, l.handleSize = function (t) {
                return arguments.length ? (s = +t, l) : s
            }, l.keyModifiers = function (t) {
                return arguments.length ? (a = !!t, l) : a
            }, l.on = function () {
                var t = o.on.apply(o, arguments);
                return t === o ? l : t
            }, l
        }

        var ys = {
            select: pt, selectAll: function (t) {
                return "string" == typeof t ? new ht([document.querySelectorAll(t)], [document.documentElement]) : new ht([null == t ? [] : t], ut)
            }, mouse: _t, timeParse: Jt, timeFormat: qt, utcFormat: Kt, scaleLinear: function t() {
                var e = Xr(Or, Or);
                return e.copy = function () {
                    return jr(e, t())
                }, In.apply(e, arguments), oi(e)
            }, scaleTime: function () {
                return In.apply(xi(zt, ci, kt, Ht, hi, fi, gi, _i, qt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
            }, schemeCategory10: Ti, arc: function () {
                var t = Bi, e = Yi, n = Ei(0), r = null, i = Ui, a = Wi, o = Qi, s = null;

                function l() {
                    var l, c, u = +t.apply(this, arguments), h = +e.apply(this, arguments),
                        d = i.apply(this, arguments) - Hi, f = a.apply(this, arguments) - Hi, p = ki(f - d), g = f > d;
                    if (s || (s = l = Ii()), h < u && (c = h, h = u, u = c), h > 1e-12) if (p > ji - 1e-12) s.moveTo(h * Ri(d), h * Gi(d)), s.arc(0, 0, h, d, f, !g), u > 1e-12 && (s.moveTo(u * Ri(f), u * Gi(f)), s.arc(0, 0, u, f, d, g)); else {
                        var y, _, v = d, m = f, x = d, w = f, b = p, S = p, T = o.apply(this, arguments) / 2,
                            A = T > 1e-12 && (r ? +r.apply(this, arguments) : Fi(u * u + h * h)),
                            C = Oi(ki(h - u) / 2, +n.apply(this, arguments)), P = C, D = C;
                        if (A > 1e-12) {
                            var L = Xi(A / u * Gi(T)), I = Xi(A / h * Gi(T));
                            (b -= 2 * L) > 1e-12 ? (x += L *= g ? 1 : -1, w -= L) : (b = 0, x = w = (d + f) / 2), (S -= 2 * I) > 1e-12 ? (v += I *= g ? 1 : -1, m -= I) : (S = 0, v = m = (d + f) / 2)
                        }
                        var E = h * Ri(v), k = h * Gi(v), V = u * Ri(w), R = u * Gi(w);
                        if (C > 1e-12) {
                            var M, O = h * Ri(m), G = h * Gi(m), F = u * Ri(x), N = u * Gi(x);
                            if (p < Ni && (M = qi(E, k, F, N, O, G, V, R))) {
                                var H = E - M[0], j = k - M[1], z = O - M[0], X = G - M[1],
                                    B = 1 / Gi(zi((H * z + j * X) / (Fi(H * H + j * j) * Fi(z * z + X * X))) / 2),
                                    Y = Fi(M[0] * M[0] + M[1] * M[1]);
                                P = Oi(C, (u - Y) / (B - 1)), D = Oi(C, (h - Y) / (B + 1))
                            }
                        }
                        S > 1e-12 ? D > 1e-12 ? (y = Ji(F, N, E, k, h, D, g), _ = Ji(O, G, V, R, h, D, g), s.moveTo(y.cx + y.x01, y.cy + y.y01), D < C ? s.arc(y.cx, y.cy, D, Vi(y.y01, y.x01), Vi(_.y01, _.x01), !g) : (s.arc(y.cx, y.cy, D, Vi(y.y01, y.x01), Vi(y.y11, y.x11), !g), s.arc(0, 0, h, Vi(y.cy + y.y11, y.cx + y.x11), Vi(_.cy + _.y11, _.cx + _.x11), !g), s.arc(_.cx, _.cy, D, Vi(_.y11, _.x11), Vi(_.y01, _.x01), !g))) : (s.moveTo(E, k), s.arc(0, 0, h, v, m, !g)) : s.moveTo(E, k), u > 1e-12 && b > 1e-12 ? P > 1e-12 ? (y = Ji(V, R, O, G, u, -P, g), _ = Ji(E, k, F, N, u, -P, g), s.lineTo(y.cx + y.x01, y.cy + y.y01), P < C ? s.arc(y.cx, y.cy, P, Vi(y.y01, y.x01), Vi(_.y01, _.x01), !g) : (s.arc(y.cx, y.cy, P, Vi(y.y01, y.x01), Vi(y.y11, y.x11), !g), s.arc(0, 0, u, Vi(y.cy + y.y11, y.cx + y.x11), Vi(_.cy + _.y11, _.cx + _.x11), g), s.arc(_.cx, _.cy, P, Vi(_.y11, _.x11), Vi(_.y01, _.x01), !g))) : s.arc(0, 0, u, w, x, g) : s.lineTo(V, R)
                    } else s.moveTo(0, 0);
                    if (s.closePath(), l) return s = null, l + "" || null
                }

                return l.centroid = function () {
                    var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ni / 2;
                    return [Ri(r) * n, Gi(r) * n]
                }, l.innerRadius = function (e) {
                    return arguments.length ? (t = "function" == typeof e ? e : Ei(+e), l) : t
                }, l.outerRadius = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Ei(+t), l) : e
                }, l.cornerRadius = function (t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Ei(+t), l) : n
                }, l.padRadius = function (t) {
                    return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Ei(+t), l) : r
                }, l.startAngle = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Ei(+t), l) : i
                }, l.endAngle = function (t) {
                    return arguments.length ? (a = "function" == typeof t ? t : Ei(+t), l) : a
                }, l.padAngle = function (t) {
                    return arguments.length ? (o = "function" == typeof t ? t : Ei(+t), l) : o
                }, l.context = function (t) {
                    return arguments.length ? (s = null == t ? null : t, l) : s
                }, l
            }, pie: function () {
                var t = Zi, e = Ki, n = null, r = Ei(0), i = Ei(ji), a = Ei(0);

                function o(o) {
                    var s, l, c, u, h, d = o.length, f = 0, p = new Array(d), g = new Array(d),
                        y = +r.apply(this, arguments), _ = Math.min(ji, Math.max(-ji, i.apply(this, arguments) - y)),
                        v = Math.min(Math.abs(_) / d, a.apply(this, arguments)), m = v * (_ < 0 ? -1 : 1);
                    for (s = 0; s < d; ++s) (h = g[p[s] = s] = +t(o[s], s, o)) > 0 && (f += h);
                    for (null != e ? p.sort((function (t, n) {
                        return e(g[t], g[n])
                    })) : null != n && p.sort((function (t, e) {
                        return n(o[t], o[e])
                    })), s = 0, c = f ? (_ - d * m) / f : 0; s < d; ++s, y = u) l = p[s], u = y + ((h = g[l]) > 0 ? h * c : 0) + m, g[l] = {
                        data: o[l],
                        index: s,
                        value: h,
                        startAngle: y,
                        endAngle: u,
                        padAngle: v
                    };
                    return g
                }

                return o.value = function (e) {
                    return arguments.length ? (t = "function" == typeof e ? e : Ei(+e), o) : t
                }, o.sortValues = function (t) {
                    return arguments.length ? (e = t, n = null, o) : e
                }, o.sort = function (t) {
                    return arguments.length ? (n = t, e = null, o) : n
                }, o.startAngle = function (t) {
                    return arguments.length ? (r = "function" == typeof t ? t : Ei(+t), o) : r
                }, o.endAngle = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Ei(+t), o) : i
                }, o.padAngle = function (t) {
                    return arguments.length ? (a = "function" == typeof t ? t : Ei(+t), o) : a
                }, o
            }, area: function () {
                var t = ea, e = null, n = Ei(0), r = na, i = Ei(!0), a = null, o = ta, s = null;

                function l(l) {
                    var c, u, h, d, f, p = l.length, g = !1, y = new Array(p), _ = new Array(p);
                    for (null == a && (s = o(f = Ii())), c = 0; c <= p; ++c) {
                        if (!(c < p && i(d = l[c], c, l)) === g) if (g = !g) u = c, s.areaStart(), s.lineStart(); else {
                            for (s.lineEnd(), s.lineStart(), h = c - 1; h >= u; --h) s.point(y[h], _[h]);
                            s.lineEnd(), s.areaEnd()
                        }
                        g && (y[c] = +t(d, c, l), _[c] = +n(d, c, l), s.point(e ? +e(d, c, l) : y[c], r ? +r(d, c, l) : _[c]))
                    }
                    if (f) return s = null, f + "" || null
                }

                function c() {
                    return ra().defined(i).curve(o).context(a)
                }

                return l.x = function (n) {
                    return arguments.length ? (t = "function" == typeof n ? n : Ei(+n), e = null, l) : t
                }, l.x0 = function (e) {
                    return arguments.length ? (t = "function" == typeof e ? e : Ei(+e), l) : t
                }, l.x1 = function (t) {
                    return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : Ei(+t), l) : e
                }, l.y = function (t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Ei(+t), r = null, l) : n
                }, l.y0 = function (t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Ei(+t), l) : n
                }, l.y1 = function (t) {
                    return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Ei(+t), l) : r
                }, l.lineX0 = l.lineY0 = function () {
                    return c().x(t).y(n)
                }, l.lineY1 = function () {
                    return c().x(t).y(r)
                }, l.lineX1 = function () {
                    return c().x(e).y(n)
                }, l.defined = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Ei(!!t), l) : i
                }, l.curve = function (t) {
                    return arguments.length ? (o = t, null != a && (s = o(a)), l) : o
                }, l.context = function (t) {
                    return arguments.length ? (null == t ? a = s = null : s = o(a = t), l) : a
                }, l
            }, line: ra, curveLinear: ta, min: Ln, max: function (t, e) {
                var n, r, i = t.length, a = -1;
                if (null == e) {
                    for (; ++a < i;) if (null != (n = t[a]) && n >= n) for (r = n; ++a < i;) null != (n = t[a]) && n > r && (r = n)
                } else for (; ++a < i;) if (null != (n = e(t[a], a, t)) && n >= n) for (r = n; ++a < i;) null != (n = e(t[a], a, t)) && n > r && (r = n);
                return r
            }, extent: wn, merge: function (t) {
                for (var e, n, r, i = t.length, a = -1, o = 0; ++a < i;) o += t[a].length;
                for (n = new Array(o); --i >= 0;) for (e = (r = t[i]).length; --e >= 0;) n[--o] = r[e];
                return n
            }, zoom: function () {
                var t, e, n = No, r = Ho, i = Bo, a = zo, o = Xo, s = [0, 1 / 0],
                    l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], c = 250, u = va, h = ua("start", "zoom", "end"), d = 0;

                function f(t) {
                    t.property("__zoom", jo).on("wheel.zoom", x).on("mousedown.zoom", w).on("dblclick.zoom", b).filter(o).on("touchstart.zoom", S).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function p(t, e) {
                    return (e = Math.max(s[0], Math.min(s[1], e))) === t.k ? t : new Mo(e, t.x, t.y)
                }

                function g(t, e, n) {
                    var r = e[0] - n[0] * t.k, i = e[1] - n[1] * t.k;
                    return r === t.x && i === t.y ? t : new Mo(t.k, r, i)
                }

                function y(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function _(t, e, n) {
                    t.on("start.zoom", (function () {
                        v(this, arguments).start()
                    })).on("interrupt.zoom end.zoom", (function () {
                        v(this, arguments).end()
                    })).tween("zoom", (function () {
                        var t = this, i = arguments, a = v(t, i), o = r.apply(t, i),
                            s = null == n ? y(o) : "function" == typeof n ? n.apply(t, i) : n,
                            l = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]), c = t.__zoom,
                            h = "function" == typeof e ? e.apply(t, i) : e,
                            d = u(c.invert(s).concat(l / c.k), h.invert(s).concat(l / h.k));
                        return function (t) {
                            if (1 === t) t = h; else {
                                var e = d(t), n = l / e[2];
                                t = new Mo(n, s[0] - e[0] * n, s[1] - e[1] * n)
                            }
                            a.zoom(null, t)
                        }
                    }))
                }

                function v(t, e, n) {
                    return !n && t.__zooming || new m(t, e)
                }

                function m(t, e) {
                    this.that = t, this.args = e, this.active = 0, this.extent = r.apply(t, e), this.taps = 0
                }

                function x() {
                    if (n.apply(this, arguments)) {
                        var t = v(this, arguments), e = this.__zoom,
                            r = Math.max(s[0], Math.min(s[1], e.k * Math.pow(2, a.apply(this, arguments)))),
                            o = _t(this);
                        if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = e.invert(t.mouse[0] = o)), clearTimeout(t.wheel); else {
                            if (e.k === r) return;
                            t.mouse = [o, e.invert(o)], Ua(this), t.start()
                        }
                        Fo(), t.wheel = setTimeout(c, 150), t.zoom("mouse", i(g(p(e, r), t.mouse[0], t.mouse[1]), t.extent, l))
                    }

                    function c() {
                        t.wheel = null, t.end()
                    }
                }

                function w() {
                    if (!e && n.apply(this, arguments)) {
                        var t = v(this, arguments, !0),
                            r = pt(tt.view).on("mousemove.zoom", c, !0).on("mouseup.zoom", u, !0), a = _t(this),
                            o = tt.clientX, s = tt.clientY;
                        da(tt.view), Go(), t.mouse = [a, this.__zoom.invert(a)], Ua(this), t.start()
                    }

                    function c() {
                        if (Fo(), !t.moved) {
                            var e = tt.clientX - o, n = tt.clientY - s;
                            t.moved = e * e + n * n > d
                        }
                        t.zoom("mouse", i(g(t.that.__zoom, t.mouse[0] = _t(t.that), t.mouse[1]), t.extent, l))
                    }

                    function u() {
                        r.on("mousemove.zoom mouseup.zoom", null), fa(tt.view, t.moved), Fo(), t.end()
                    }
                }

                function b() {
                    if (n.apply(this, arguments)) {
                        var t = this.__zoom, e = _t(this), a = t.invert(e), o = t.k * (tt.shiftKey ? .5 : 2),
                            s = i(g(p(t, o), e, a), r.apply(this, arguments), l);
                        Fo(), c > 0 ? pt(this).transition().duration(c).call(_, s, e) : pt(this).call(f.transform, s)
                    }
                }

                function S() {
                    if (n.apply(this, arguments)) {
                        var e, r, i, a, o = tt.touches, s = o.length,
                            l = v(this, arguments, tt.changedTouches.length === s);
                        for (Go(), r = 0; r < s; ++r) i = o[r], a = [a = ma(this, o, i.identifier), this.__zoom.invert(a), i.identifier], l.touch0 ? l.touch1 || l.touch0[2] === a[2] || (l.touch1 = a, l.taps = 0) : (l.touch0 = a, e = !0, l.taps = 1 + !!t);
                        t && (t = clearTimeout(t)), e && (l.taps < 2 && (t = setTimeout((function () {
                            t = null
                        }), 500)), Ua(this), l.start())
                    }
                }

                function T() {
                    if (this.__zooming) {
                        var e, n, r, a, o = v(this, arguments), s = tt.changedTouches, c = s.length;
                        for (Fo(), t && (t = clearTimeout(t)), o.taps = 0, e = 0; e < c; ++e) n = s[e], r = ma(this, s, n.identifier), o.touch0 && o.touch0[2] === n.identifier ? o.touch0[0] = r : o.touch1 && o.touch1[2] === n.identifier && (o.touch1[0] = r);
                        if (n = o.that.__zoom, o.touch1) {
                            var u = o.touch0[0], h = o.touch0[1], d = o.touch1[0], f = o.touch1[1],
                                y = (y = d[0] - u[0]) * y + (y = d[1] - u[1]) * y,
                                _ = (_ = f[0] - h[0]) * _ + (_ = f[1] - h[1]) * _;
                            n = p(n, Math.sqrt(y / _)), r = [(u[0] + d[0]) / 2, (u[1] + d[1]) / 2], a = [(h[0] + f[0]) / 2, (h[1] + f[1]) / 2]
                        } else {
                            if (!o.touch0) return;
                            r = o.touch0[0], a = o.touch0[1]
                        }
                        o.zoom("touch", i(g(n, r, a), o.extent, l))
                    }
                }

                function A() {
                    if (this.__zooming) {
                        var t, n, r = v(this, arguments), i = tt.changedTouches, a = i.length;
                        for (Go(), e && clearTimeout(e), e = setTimeout((function () {
                            e = null
                        }), 500), t = 0; t < a; ++t) n = i[t], r.touch0 && r.touch0[2] === n.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === n.identifier && delete r.touch1;
                        if (r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0) r.touch0[1] = this.__zoom.invert(r.touch0[0]); else if (r.end(), 2 === r.taps) {
                            var o = pt(this).on("dblclick.zoom");
                            o && o.apply(this, arguments)
                        }
                    }
                }

                return f.transform = function (t, e, n) {
                    var r = t.selection ? t.selection() : t;
                    r.property("__zoom", jo), t !== r ? _(t, e, n) : r.interrupt().each((function () {
                        v(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end()
                    }))
                }, f.scaleBy = function (t, e, n) {
                    f.scaleTo(t, (function () {
                        var t = this.__zoom.k, n = "function" == typeof e ? e.apply(this, arguments) : e;
                        return t * n
                    }), n)
                }, f.scaleTo = function (t, e, n) {
                    f.transform(t, (function () {
                        var t = r.apply(this, arguments), a = this.__zoom,
                            o = null == n ? y(t) : "function" == typeof n ? n.apply(this, arguments) : n,
                            s = a.invert(o), c = "function" == typeof e ? e.apply(this, arguments) : e;
                        return i(g(p(a, c), o, s), t, l)
                    }), n)
                }, f.translateBy = function (t, e, n) {
                    f.transform(t, (function () {
                        return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), r.apply(this, arguments), l)
                    }))
                }, f.translateTo = function (t, e, n, a) {
                    f.transform(t, (function () {
                        var t = r.apply(this, arguments), o = this.__zoom,
                            s = null == a ? y(t) : "function" == typeof a ? a.apply(this, arguments) : a;
                        return i(Oo.translate(s[0], s[1]).scale(o.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, l)
                    }), a)
                }, m.prototype = {
                    start: function () {
                        return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                    }, zoom: function (t, e) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this
                    }, end: function () {
                        return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                    }, emit: function (t) {
                        ot(new Ro(f, t, this.that.__zoom), h.apply, h, [t, this.that, this.args])
                    }
                }, f.wheelDelta = function (t) {
                    return arguments.length ? (a = "function" == typeof t ? t : Vo(+t), f) : a
                }, f.filter = function (t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Vo(!!t), f) : n
                }, f.touchable = function (t) {
                    return arguments.length ? (o = "function" == typeof t ? t : Vo(!!t), f) : o
                }, f.extent = function (t) {
                    return arguments.length ? (r = "function" == typeof t ? t : Vo([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), f) : r
                }, f.scaleExtent = function (t) {
                    return arguments.length ? (s[0] = +t[0], s[1] = +t[1], f) : [s[0], s[1]]
                }, f.translateExtent = function (t) {
                    return arguments.length ? (l[0][0] = +t[0][0], l[1][0] = +t[1][0], l[0][1] = +t[0][1], l[1][1] = +t[1][1], f) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]]
                }, f.constrain = function (t) {
                    return arguments.length ? (i = t, f) : i
                }, f.duration = function (t) {
                    return arguments.length ? (c = +t, f) : c
                }, f.interpolate = function (t) {
                    return arguments.length ? (u = t, f) : u
                }, f.on = function () {
                    var t = h.on.apply(h, arguments);
                    return t === h ? f : t
                }, f.clickDistance = function (t) {
                    return arguments.length ? (d = (t = +t) * t, f) : Math.sqrt(d)
                }, f
            }, set: Gn, interpolate: kr, transition: Do, brushX: function () {
                return gs(ns)
            }
        };

        function _s(t) {
            return function (t) {
                if (Array.isArray(t)) return vs(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return vs(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vs(t, e)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function vs(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function ms(t) {
            return (ms = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        /* @license C3.js v0.7.18 | (c) C3 Team and other contributors | http://c3js.org/ */
        function xs(t) {
            var e = this;
            e.d3 = ys, e.api = t, e.config = e.getDefaultConfig(), e.data = {}, e.cache = {}, e.axes = {}
        }

        function ws(t) {
            this.internal = new xs(this), this.internal.loadConfig(t), this.internal.beforeInit(t), this.internal.init(), this.internal.afterInit(t), function t(e, n, r) {
                Object.keys(e).forEach((function (i) {
                    n[i] = e[i].bind(r), Object.keys(e[i]).length > 0 && t(e[i], n[i], r)
                }))
            }(ws.prototype, this, this)
        }

        var bs = function (t) {
            return Math.ceil(t) + .5
        }, Ss = function (t) {
            return 10 * Math.ceil(t / 10)
        }, Ts = function (t) {
            return t[1] - t[0]
        }, As = function (t, e, n) {
            return Ls(t[e]) ? t[e] : n
        }, Cs = function (t) {
            var e = Ps(t), n = [t.pathSegList.getItem(0), t.pathSegList.getItem(1)];
            return {x: n[0].x, y: Math.min(n[0].y, n[1].y), width: e.width, height: e.height}
        }, Ps = function (t) {
            try {
                return t.getBBox()
            } catch (t) {
                return {x: 0, y: 0, width: 0, height: 0}
            }
        }, Ds = function (t) {
            return Array.isArray(t)
        }, Ls = function (t) {
            return void 0 !== t
        }, Is = function (t) {
            return null == t || Vs(t) && 0 === t.length || "object" === ms(t) && 0 === Object.keys(t).length
        }, Es = function (t) {
            return "function" == typeof t
        }, ks = function (t) {
            return "number" == typeof t
        }, Vs = function (t) {
            return "string" == typeof t
        }, Rs = function (t) {
            return void 0 === t
        }, Ms = function (t) {
            return t || 0 === t
        }, Os = function (t) {
            return !Is(t)
        }, Gs = function (t) {
            return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t
        }, Fs = function (t) {
            var e = function (t) {
                void 0 === t && (t = window.navigator.userAgent);
                var e = t.indexOf("MSIE ");
                return e > 0 ? parseInt(t.substring(e + 5, t.indexOf(".", e)), 10) : (e = t.indexOf("Trident/")) > 0 && (e = t.indexOf("rv:"), parseInt(t.substring(e + 3, t.indexOf(".", e)), 10))
            }();
            return void 0 === t ? !!e : t === e
        };

        function Ns(t, e) {
            this.component = t, this.params = e || {}, this.d3 = t.d3, this.scale = this.d3.scaleLinear(), this.range, this.orient = "bottom", this.innerTickSize = 6, this.outerTickSize = this.params.withOuterTick ? 6 : 0, this.tickPadding = 3, this.tickValues = null, this.tickFormat, this.tickArguments, this.tickOffset = 0, this.tickCulling = !0, this.tickCentered, this.tickTextCharSize, this.tickTextRotate = this.params.tickTextRotate, this.tickLength, this.axis = this.generateAxis()
        }

        Ns.prototype.axisX = function (t, e, n) {
            t.attr("transform", (function (t) {
                return "translate(" + Math.ceil(e(t) + n) + ", 0)"
            }))
        }, Ns.prototype.axisY = function (t, e) {
            t.attr("transform", (function (t) {
                return "translate(0," + Math.ceil(e(t)) + ")"
            }))
        }, Ns.prototype.scaleExtent = function (t) {
            var e = t[0], n = t[t.length - 1];
            return e < n ? [e, n] : [n, e]
        }, Ns.prototype.generateTicks = function (t) {
            var e, n, r = [];
            if (t.ticks) return t.ticks.apply(t, this.tickArguments);
            for (n = t.domain(), e = Math.ceil(n[0]); e < n[1]; e++) r.push(e);
            return r.length > 0 && r[0] > 0 && r.unshift(r[0] - (r[1] - r[0])), r
        }, Ns.prototype.copyScale = function () {
            var t, e = this.scale.copy();
            return this.params.isCategory && (t = this.scale.domain(), e.domain([t[0], t[1] - 1])), e
        }, Ns.prototype.textFormatted = function (t) {
            var e = this.tickFormat ? this.tickFormat(t) : t;
            return void 0 !== e ? e : ""
        }, Ns.prototype.updateRange = function () {
            return this.range = this.scale.rangeExtent ? this.scale.rangeExtent() : this.scaleExtent(this.scale.range()), this.range
        }, Ns.prototype.updateTickTextCharSize = function (t) {
            var e = this;
            if (e.tickTextCharSize) return e.tickTextCharSize;
            var n = {h: 11.5, w: 5.5};
            return t.select("text").text((function (t) {
                return e.textFormatted(t)
            })).each((function (t) {
                var r = Ps(this), i = e.textFormatted(t), a = r.height, o = i ? r.width / i.length : void 0;
                a && o && (n.h = a, n.w = o)
            })).text(""), e.tickTextCharSize = n, n
        }, Ns.prototype.isVertical = function () {
            return "left" === this.orient || "right" === this.orient
        }, Ns.prototype.tspanData = function (t, e, n) {
            var r = this.params.tickMultiline ? this.splitTickText(t, n) : [].concat(this.textFormatted(t));
            return this.params.tickMultiline && this.params.tickMultilineMax > 0 && (r = this.ellipsify(r, this.params.tickMultilineMax)), r.map((function (t) {
                return {index: e, splitted: t, length: r.length}
            }))
        }, Ns.prototype.splitTickText = function (t, e) {
            var n, r, i, a = this, o = a.textFormatted(t), s = a.params.tickWidth;
            if ("[object Array]" === Object.prototype.toString.call(o)) return o;
            return (!s || s <= 0) && (s = a.isVertical() ? 95 : a.params.isCategory ? Math.ceil(e(1) - e(0)) - 12 : 110), function t(e, o) {
                r = void 0;
                for (var l = 1; l < o.length; l++) if (" " === o.charAt(l) && (r = l), n = o.substr(0, l + 1), i = a.tickTextCharSize.w * n.length, s < i) return t(e.concat(o.substr(0, r || l)), o.slice(r ? r + 1 : l));
                return e.concat(o)
            }([], o + "")
        }, Ns.prototype.ellipsify = function (t, e) {
            if (t.length <= e) return t;
            for (var n = t.slice(0, e), r = 3, i = e - 1; i >= 0; i--) {
                var a = n[i].length;
                if (n[i] = n[i].substr(0, a - r).padEnd(a, "."), (r -= a) <= 0) break
            }
            return n
        }, Ns.prototype.updateTickLength = function () {
            this.tickLength = Math.max(this.innerTickSize, 0) + this.tickPadding
        }, Ns.prototype.lineY2 = function (t) {
            var e = this.scale(t) + (this.tickCentered ? 0 : this.tickOffset);
            return this.range[0] < e && e < this.range[1] ? this.innerTickSize : 0
        }, Ns.prototype.textY = function () {
            var t = this.tickTextRotate;
            return t ? 11.5 - t / 15 * 2.5 * (t > 0 ? 1 : -1) : this.tickLength
        }, Ns.prototype.textTransform = function () {
            var t = this.tickTextRotate;
            return t ? "rotate(" + t + ")" : ""
        }, Ns.prototype.textTextAnchor = function () {
            var t = this.tickTextRotate;
            return t ? t > 0 ? "start" : "end" : "middle"
        }, Ns.prototype.tspanDx = function () {
            var t = this.tickTextRotate;
            return t ? 8 * Math.sin(Math.PI * (t / 180)) : 0
        }, Ns.prototype.tspanDy = function (t, e) {
            var n = this.tickTextCharSize.h;
            return 0 === e && (n = this.isVertical() ? -((t.length - 1) * (this.tickTextCharSize.h / 2) - 3) : ".71em"), n
        }, Ns.prototype.generateAxis = function () {
            var t = this, e = t.d3, n = t.params;

            function r(i, a) {
                var o;
                return i.each((function () {
                    var i, s, l, c = r.g = e.select(this), u = this.__chart__ || t.scale,
                        h = this.__chart__ = t.copyScale(), d = t.tickValues ? t.tickValues : t.generateTicks(h),
                        f = c.selectAll(".tick").data(d, h),
                        p = f.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                        g = f.exit().remove(), y = f.merge(p);
                    n.isCategory ? (t.tickOffset = Math.ceil((h(1) - h(0)) / 2), s = t.tickCentered ? 0 : t.tickOffset, l = t.tickCentered ? t.tickOffset : 0) : t.tickOffset = s = 0, t.updateRange(), t.updateTickLength(), t.updateTickTextCharSize(c.select(".tick"));
                    var _ = y.select("line").merge(p.append("line")), v = y.select("text").merge(p.append("text")),
                        m = y.selectAll("text").selectAll("tspan").data((function (e, n) {
                            return t.tspanData(e, n, h)
                        })), x = m.enter().append("tspan").merge(m).text((function (t) {
                            return t.splitted
                        }));
                    m.exit().remove();
                    var w = c.selectAll(".domain").data([0]),
                        b = w.enter().append("path").merge(w).attr("class", "domain");
                    switch (t.orient) {
                        case"bottom":
                            i = t.axisX, _.attr("x1", s).attr("x2", s).attr("y2", (function (e, n) {
                                return t.lineY2(e, n)
                            })), v.attr("x", 0).attr("y", (function (e, n) {
                                return t.textY(e, n)
                            })).attr("transform", (function (e, n) {
                                return t.textTransform(e, n)
                            })).style("text-anchor", (function (e, n) {
                                return t.textTextAnchor(e, n)
                            })), x.attr("x", 0).attr("dy", (function (e, n) {
                                return t.tspanDy(e, n)
                            })).attr("dx", (function (e, n) {
                                return t.tspanDx(e, n)
                            })), b.attr("d", "M" + t.range[0] + "," + t.outerTickSize + "V0H" + t.range[1] + "V" + t.outerTickSize);
                            break;
                        case"top":
                            i = t.axisX, _.attr("x1", s).attr("x2", s).attr("y2", (function (e, n) {
                                return -1 * t.lineY2(e, n)
                            })), v.attr("x", 0).attr("y", (function (e, r) {
                                return -1 * t.textY(e, r) - (n.isCategory ? 2 : t.tickLength - 2)
                            })).attr("transform", (function (e, n) {
                                return t.textTransform(e, n)
                            })).style("text-anchor", (function (e, n) {
                                return t.textTextAnchor(e, n)
                            })), x.attr("x", 0).attr("dy", (function (e, n) {
                                return t.tspanDy(e, n)
                            })).attr("dx", (function (e, n) {
                                return t.tspanDx(e, n)
                            })), b.attr("d", "M" + t.range[0] + "," + -t.outerTickSize + "V0H" + t.range[1] + "V" + -t.outerTickSize);
                            break;
                        case"left":
                            i = t.axisY, _.attr("x2", -t.innerTickSize).attr("y1", l).attr("y2", l), v.attr("x", -t.tickLength).attr("y", t.tickOffset).style("text-anchor", "end"), x.attr("x", -t.tickLength).attr("dy", (function (e, n) {
                                return t.tspanDy(e, n)
                            })), b.attr("d", "M" + -t.outerTickSize + "," + t.range[0] + "H0V" + t.range[1] + "H" + -t.outerTickSize);
                            break;
                        case"right":
                            i = t.axisY, _.attr("x2", t.innerTickSize).attr("y1", l).attr("y2", l), v.attr("x", t.tickLength).attr("y", t.tickOffset).style("text-anchor", "start"), x.attr("x", t.tickLength).attr("dy", (function (e, n) {
                                return t.tspanDy(e, n)
                            })), b.attr("d", "M" + t.outerTickSize + "," + t.range[0] + "H0V" + t.range[1] + "H" + t.outerTickSize)
                    }
                    if (h.rangeBand) {
                        var S = h, T = S.rangeBand() / 2;
                        u = h = function (t) {
                            return S(t) + T
                        }
                    } else u.rangeBand ? u = h : g.call(i, h, t.tickOffset);
                    p.call(i, u, t.tickOffset), o = (a ? y.transition(a) : y).style("opacity", 1).call(i, h, t.tickOffset)
                })), o
            }

            return r.scale = function (e) {
                return arguments.length ? (t.scale = e, r) : t.scale
            }, r.orient = function (e) {
                return arguments.length ? (t.orient = e in {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                } ? e + "" : "bottom", r) : t.orient
            }, r.tickFormat = function (e) {
                return arguments.length ? (t.tickFormat = e, r) : t.tickFormat
            }, r.tickCentered = function (e) {
                return arguments.length ? (t.tickCentered = e, r) : t.tickCentered
            }, r.tickOffset = function () {
                return t.tickOffset
            }, r.tickInterval = function () {
                var e;
                return (e = n.isCategory ? 2 * t.tickOffset : (r.g.select("path.domain").node().getTotalLength() - 2 * t.outerTickSize) / r.g.selectAll("line").size()) === 1 / 0 ? 0 : e
            }, r.ticks = function () {
                return arguments.length ? (t.tickArguments = arguments, r) : t.tickArguments
            }, r.tickCulling = function (e) {
                return arguments.length ? (t.tickCulling = e, r) : t.tickCulling
            }, r.tickValues = function (e) {
                if ("function" == typeof e) t.tickValues = function () {
                    return e(t.scale.domain())
                }; else {
                    if (!arguments.length) return t.tickValues;
                    t.tickValues = e
                }
                return r
            }, r
        };
        var Hs = {
            target: "c3-target",
            chart: "c3-chart",
            chartLine: "c3-chart-line",
            chartLines: "c3-chart-lines",
            chartBar: "c3-chart-bar",
            chartBars: "c3-chart-bars",
            chartText: "c3-chart-text",
            chartTexts: "c3-chart-texts",
            chartArc: "c3-chart-arc",
            chartArcs: "c3-chart-arcs",
            chartArcsTitle: "c3-chart-arcs-title",
            chartArcsBackground: "c3-chart-arcs-background",
            chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit",
            chartArcsGaugeMax: "c3-chart-arcs-gauge-max",
            chartArcsGaugeMin: "c3-chart-arcs-gauge-min",
            selectedCircle: "c3-selected-circle",
            selectedCircles: "c3-selected-circles",
            eventRect: "c3-event-rect",
            eventRects: "c3-event-rects",
            eventRectsSingle: "c3-event-rects-single",
            eventRectsMultiple: "c3-event-rects-multiple",
            zoomRect: "c3-zoom-rect",
            brush: "c3-brush",
            dragZoom: "c3-drag-zoom",
            focused: "c3-focused",
            defocused: "c3-defocused",
            region: "c3-region",
            regions: "c3-regions",
            title: "c3-title",
            tooltipContainer: "c3-tooltip-container",
            tooltip: "c3-tooltip",
            tooltipName: "c3-tooltip-name",
            shape: "c3-shape",
            shapes: "c3-shapes",
            line: "c3-line",
            lines: "c3-lines",
            bar: "c3-bar",
            bars: "c3-bars",
            circle: "c3-circle",
            circles: "c3-circles",
            arc: "c3-arc",
            arcLabelLine: "c3-arc-label-line",
            arcs: "c3-arcs",
            area: "c3-area",
            areas: "c3-areas",
            empty: "c3-empty",
            text: "c3-text",
            texts: "c3-texts",
            gaugeValue: "c3-gauge-value",
            grid: "c3-grid",
            gridLines: "c3-grid-lines",
            xgrid: "c3-xgrid",
            xgrids: "c3-xgrids",
            xgridLine: "c3-xgrid-line",
            xgridLines: "c3-xgrid-lines",
            xgridFocus: "c3-xgrid-focus",
            ygrid: "c3-ygrid",
            ygrids: "c3-ygrids",
            ygridLine: "c3-ygrid-line",
            ygridLines: "c3-ygrid-lines",
            colorScale: "c3-colorscale",
            stanfordElements: "c3-stanford-elements",
            stanfordLine: "c3-stanford-line",
            stanfordLines: "c3-stanford-lines",
            stanfordRegion: "c3-stanford-region",
            stanfordRegions: "c3-stanford-regions",
            stanfordText: "c3-stanford-text",
            stanfordTexts: "c3-stanford-texts",
            axis: "c3-axis",
            axisX: "c3-axis-x",
            axisXLabel: "c3-axis-x-label",
            axisY: "c3-axis-y",
            axisYLabel: "c3-axis-y-label",
            axisY2: "c3-axis-y2",
            axisY2Label: "c3-axis-y2-label",
            legendBackground: "c3-legend-background",
            legendItem: "c3-legend-item",
            legendItemEvent: "c3-legend-item-event",
            legendItemTile: "c3-legend-item-tile",
            legendItemHidden: "c3-legend-item-hidden",
            legendItemFocused: "c3-legend-item-focused",
            dragarea: "c3-dragarea",
            EXPANDED: "_expanded_",
            SELECTED: "_selected_",
            INCLUDED: "_included_"
        }, js = function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.owner = e, this.d3 = e.d3, this.internal = Ns
        };
        js.prototype.init = function () {
            var t = this.owner, e = t.config, n = t.main;
            t.axes.x = n.append("g").attr("class", Hs.axis + " " + Hs.axisX).attr("clip-path", e.axis_x_inner ? "" : t.clipPathForXAxis).attr("transform", t.getTranslate("x")).style("visibility", e.axis_x_show ? "visible" : "hidden"), t.axes.x.append("text").attr("class", Hs.axisXLabel).attr("transform", e.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), t.axes.y = n.append("g").attr("class", Hs.axis + " " + Hs.axisY).attr("clip-path", e.axis_y_inner ? "" : t.clipPathForYAxis).attr("transform", t.getTranslate("y")).style("visibility", e.axis_y_show ? "visible" : "hidden"), t.axes.y.append("text").attr("class", Hs.axisYLabel).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), t.axes.y2 = n.append("g").attr("class", Hs.axis + " " + Hs.axisY2).attr("transform", t.getTranslate("y2")).style("visibility", e.axis_y2_show ? "visible" : "hidden"), t.axes.y2.append("text").attr("class", Hs.axisY2Label).attr("transform", e.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this))
        }, js.prototype.getXAxis = function (t, e, n, r, i, a, o) {
            var s = this.owner, l = s.config, c = {
                isCategory: s.isCategorized(),
                withOuterTick: i,
                tickMultiline: l.axis_x_tick_multiline,
                tickMultilineMax: l.axis_x_tick_multiline ? Number(l.axis_x_tick_multilineMax) : 0,
                tickWidth: l.axis_x_tick_width,
                tickTextRotate: o ? 0 : l.axis_x_tick_rotate,
                withoutTransition: a
            }, u = new this.internal(this, c).axis.scale(t).orient(e);
            return s.isTimeSeries() && r && "function" != typeof r && (r = r.map((function (t) {
                return s.parseDate(t)
            }))), u.tickFormat(n).tickValues(r), s.isCategorized() && (u.tickCentered(l.axis_x_tick_centered), Is(l.axis_x_tick_culling) && (l.axis_x_tick_culling = !1)), u
        }, js.prototype.updateXAxisTickValues = function (t, e) {
            var n, r = this.owner, i = r.config;
            return (i.axis_x_tick_fit || i.axis_x_tick_count) && (n = this.generateTickValues(r.mapTargetsToUniqueXs(t), i.axis_x_tick_count, r.isTimeSeries())), e ? e.tickValues(n) : (r.xAxis.tickValues(n), r.subXAxis.tickValues(n)), n
        }, js.prototype.getYAxis = function (t, e, n, r, i, a, o) {
            var s = this.owner, l = s.config, c = l["axis_".concat(t, "_tick_format")];
            !c && s.isAxisNormalized(t) && (c = function (t) {
                return "".concat(t, "%")
            });
            var u = new this.internal(this, {
                withOuterTick: i,
                withoutTransition: a,
                tickTextRotate: o ? 0 : l.axis_y_tick_rotate
            }).axis.scale(e).orient(n);
            return c && u.tickFormat(c), s.isTimeSeriesY() ? u.ticks(l.axis_y_tick_time_type, l.axis_y_tick_time_interval) : u.tickValues(r), u
        }, js.prototype.getId = function (t) {
            var e = this.owner.config;
            return t in e.data_axes ? e.data_axes[t] : "y"
        }, js.prototype.getXAxisTickFormat = function () {
            var t = this.owner, e = t.config,
                n = t.isTimeSeries() ? t.defaultAxisTimeFormat : t.isCategorized() ? t.categoryName : function (t) {
                    return t
                };
            return e.axis_x_tick_format && (Es(e.axis_x_tick_format) ? n = e.axis_x_tick_format : t.isTimeSeries() && (n = function (n) {
                return n ? t.axisTimeFormat(e.axis_x_tick_format)(n) : ""
            })), Es(n) ? function (e) {
                return n.call(t, e)
            } : n
        }, js.prototype.getTickValues = function (t, e) {
            return t || (e ? e.tickValues() : void 0)
        }, js.prototype.getXAxisTickValues = function () {
            return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis)
        }, js.prototype.getYAxisTickValues = function () {
            return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis)
        }, js.prototype.getY2AxisTickValues = function () {
            return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis)
        }, js.prototype.getLabelOptionByAxisId = function (t) {
            var e, n = this.owner.config;
            return "y" === t ? e = n.axis_y_label : "y2" === t ? e = n.axis_y2_label : "x" === t && (e = n.axis_x_label), e
        }, js.prototype.getLabelText = function (t) {
            var e = this.getLabelOptionByAxisId(t);
            return Vs(e) ? e : e ? e.text : null
        }, js.prototype.setLabelText = function (t, e) {
            var n = this.owner.config, r = this.getLabelOptionByAxisId(t);
            Vs(r) ? "y" === t ? n.axis_y_label = e : "y2" === t ? n.axis_y2_label = e : "x" === t && (n.axis_x_label = e) : r && (r.text = e)
        }, js.prototype.getLabelPosition = function (t, e) {
            var n = this.getLabelOptionByAxisId(t), r = n && "object" === ms(n) && n.position ? n.position : e;
            return {
                isInner: r.indexOf("inner") >= 0,
                isOuter: r.indexOf("outer") >= 0,
                isLeft: r.indexOf("left") >= 0,
                isCenter: r.indexOf("center") >= 0,
                isRight: r.indexOf("right") >= 0,
                isTop: r.indexOf("top") >= 0,
                isMiddle: r.indexOf("middle") >= 0,
                isBottom: r.indexOf("bottom") >= 0
            }
        }, js.prototype.getXAxisLabelPosition = function () {
            return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right")
        }, js.prototype.getYAxisLabelPosition = function () {
            return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top")
        }, js.prototype.getY2AxisLabelPosition = function () {
            return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top")
        }, js.prototype.getLabelPositionById = function (t) {
            return "y2" === t ? this.getY2AxisLabelPosition() : "y" === t ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition()
        }, js.prototype.textForXAxisLabel = function () {
            return this.getLabelText("x")
        }, js.prototype.textForYAxisLabel = function () {
            return this.getLabelText("y")
        }, js.prototype.textForY2AxisLabel = function () {
            return this.getLabelText("y2")
        }, js.prototype.xForAxisLabel = function (t, e) {
            var n = this.owner;
            return t ? e.isLeft ? 0 : e.isCenter ? n.width / 2 : n.width : e.isBottom ? -n.height : e.isMiddle ? -n.height / 2 : 0
        }, js.prototype.dxForAxisLabel = function (t, e) {
            return t ? e.isLeft ? "0.5em" : e.isRight ? "-0.5em" : "0" : e.isTop ? "-0.5em" : e.isBottom ? "0.5em" : "0"
        }, js.prototype.textAnchorForAxisLabel = function (t, e) {
            return t ? e.isLeft ? "start" : e.isCenter ? "middle" : "end" : e.isBottom ? "start" : e.isMiddle ? "middle" : "end"
        }, js.prototype.xForXAxisLabel = function () {
            return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition())
        }, js.prototype.xForYAxisLabel = function () {
            return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition())
        }, js.prototype.xForY2AxisLabel = function () {
            return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition())
        }, js.prototype.dxForXAxisLabel = function () {
            return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition())
        }, js.prototype.dxForYAxisLabel = function () {
            return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition())
        }, js.prototype.dxForY2AxisLabel = function () {
            return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition())
        }, js.prototype.dyForXAxisLabel = function () {
            var t = this.owner, e = t.config, n = this.getXAxisLabelPosition();
            return e.axis_rotated ? n.isInner ? "1.2em" : -25 - (t.config.axis_x_inner ? 0 : this.getMaxTickWidth("x")) : n.isInner ? "-0.5em" : t.getHorizontalAxisHeight("x") - 10
        }, js.prototype.dyForYAxisLabel = function () {
            var t = this.owner, e = this.getYAxisLabelPosition();
            return t.config.axis_rotated ? e.isInner ? "-0.5em" : "3em" : e.isInner ? "1.2em" : -10 - (t.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10)
        }, js.prototype.dyForY2AxisLabel = function () {
            var t = this.owner, e = this.getY2AxisLabelPosition();
            return t.config.axis_rotated ? e.isInner ? "1.2em" : "-2.2em" : e.isInner ? "-0.5em" : 15 + (t.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15)
        }, js.prototype.textAnchorForXAxisLabel = function () {
            var t = this.owner;
            return this.textAnchorForAxisLabel(!t.config.axis_rotated, this.getXAxisLabelPosition())
        }, js.prototype.textAnchorForYAxisLabel = function () {
            var t = this.owner;
            return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getYAxisLabelPosition())
        }, js.prototype.textAnchorForY2AxisLabel = function () {
            var t = this.owner;
            return this.textAnchorForAxisLabel(t.config.axis_rotated, this.getY2AxisLabelPosition())
        }, js.prototype.getMaxTickWidth = function (t, e) {
            var n, r, i, a, o = this.owner, s = 0;
            return e && o.currentMaxTickWidths[t] || (o.svg && (n = o.filterTargetsToShow(o.data.targets), "y" === t ? (r = o.y.copy().domain(o.getYDomain(n, "y")), i = this.getYAxis(t, r, o.yOrient, o.yAxisTickValues, !1, !0, !0)) : "y2" === t ? (r = o.y2.copy().domain(o.getYDomain(n, "y2")), i = this.getYAxis(t, r, o.y2Orient, o.y2AxisTickValues, !1, !0, !0)) : (r = o.x.copy().domain(o.getXDomain(n)), i = this.getXAxis(r, o.xOrient, o.xAxisTickFormat, o.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(n, i)), (a = o.d3.select("body").append("div").classed("c3", !0)).append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0).append("g").call(i).each((function () {
                o.d3.select(this).selectAll("text").each((function () {
                    var t = Ps(this);
                    s < t.width && (s = t.width)
                })), a.remove()
            }))), o.currentMaxTickWidths[t] = s <= 0 ? o.currentMaxTickWidths[t] : s), o.currentMaxTickWidths[t]
        }, js.prototype.updateLabels = function (t) {
            var e = this.owner, n = e.main.select("." + Hs.axisX + " ." + Hs.axisXLabel),
                r = e.main.select("." + Hs.axisY + " ." + Hs.axisYLabel),
                i = e.main.select("." + Hs.axisY2 + " ." + Hs.axisY2Label);
            (t ? n.transition() : n).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (t ? r.transition() : r).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (t ? i.transition() : i).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))
        }, js.prototype.getPadding = function (t, e, n, r) {
            var i = "number" == typeof t ? t : t[e];
            return Ms(i) ? "ratio" === t.unit ? t[e] * r : this.convertPixelsToAxisPadding(i, r) : n
        }, js.prototype.convertPixelsToAxisPadding = function (t, e) {
            var n = this.owner;
            return e * (t / (n.config.axis_rotated ? n.width : n.height))
        }, js.prototype.generateTickValues = function (t, e, n) {
            var r, i, a, o, s, l, c, u = t;
            if (e) if (1 === (r = Es(e) ? e() : e)) u = [t[0]]; else if (2 === r) u = [t[0], t[t.length - 1]]; else if (r > 2) {
                for (o = r - 2, i = t[0], s = ((a = t[t.length - 1]) - i) / (o + 1), u = [i], l = 0; l < o; l++) c = +i + s * (l + 1), u.push(n ? new Date(c) : c);
                u.push(a)
            }
            return n || (u = u.sort((function (t, e) {
                return t - e
            }))), u
        }, js.prototype.generateTransitions = function (t) {
            var e = this.owner.axes;
            return {
                axisX: t ? e.x.transition().duration(t) : e.x,
                axisY: t ? e.y.transition().duration(t) : e.y,
                axisY2: t ? e.y2.transition().duration(t) : e.y2,
                axisSubX: t ? e.subx.transition().duration(t) : e.subx
            }
        }, js.prototype.redraw = function (t, e) {
            var n = this.owner, r = t ? n.d3.transition().duration(t) : null;
            n.axes.x.style("opacity", e ? 0 : 1).call(n.xAxis, r), n.axes.y.style("opacity", e ? 0 : 1).call(n.yAxis, r), n.axes.y2.style("opacity", e ? 0 : 1).call(n.y2Axis, r), n.axes.subx.style("opacity", e ? 0 : 1).call(n.subXAxis, r)
        };
        var zs = {
            version: "0.7.18",
            chart: {
                fn: ws.prototype,
                internal: {fn: xs.prototype, axis: {fn: js.prototype, internal: {fn: Ns.prototype}}}
            },
            generate: function (t) {
                return new ws(t)
            },
            d3: ys
        };

        function Xs(t, e, n) {
            var r = [.01, 10];

            function i(t) {
                return n(e(t))
            }

            return e || (e = t.scaleLinear()).range(r), n || ((n = t.scaleLog()).domain(r), n.nice()), i.domain = function (t) {
                return arguments.length ? (e.domain(t), i) : e.domain()
            }, i.range = function (t) {
                return arguments.length ? (n.range(t), i) : n.range()
            }, i.ticks = function (t) {
                return function (t, e, n) {
                    var r, i, a, o;
                    if (arguments.length < 3) n = 10; else if (0 === n) return [];
                    o = (e - t) / (i = n - 1), a = t, (r = new Array(n))[0] = Math.pow(10, a);
                    for (var s = 1; s < i; s++) a += o, r[s] = Math.pow(10, a);
                    return r[i] = Math.pow(10, e), r
                }(-2, 1, t || 10).map((function (t) {
                    return e.invert(t)
                }))
            }, i.copy = function () {
                return Xs(t, e.copy(), n.copy())
            }, i
        }

        function Bs(t) {
            return t / Math.pow(10, Math.ceil(Math.log(t) / Math.LN10 - 1e-12)) == 1
        }

        xs.prototype.beforeInit = function () {
        }, xs.prototype.afterInit = function () {
        }, xs.prototype.init = function () {
            var t = this, e = t.config;
            if (t.initParams(), e.data_url) t.convertUrlToData(e.data_url, e.data_mimeType, e.data_headers, e.data_keys, t.initWithData); else if (e.data_json) t.initWithData(t.convertJsonToData(e.data_json, e.data_keys)); else if (e.data_rows) t.initWithData(t.convertRowsToData(e.data_rows)); else {
                if (!e.data_columns) throw Error("url or json or rows or columns is required.");
                t.initWithData(t.convertColumnsToData(e.data_columns))
            }
        }, xs.prototype.initParams = function () {
            var t = this, e = t.d3, n = t.config;
            t.clipId = "c3-" + (new Date).valueOf() + "-clip", t.clipIdForXAxis = t.clipId + "-xaxis", t.clipIdForYAxis = t.clipId + "-yaxis", t.clipIdForGrid = t.clipId + "-grid", t.clipIdForSubchart = t.clipId + "-subchart", t.clipPath = t.getClipPath(t.clipId), t.clipPathForXAxis = t.getClipPath(t.clipIdForXAxis), t.clipPathForYAxis = t.getClipPath(t.clipIdForYAxis), t.clipPathForGrid = t.getClipPath(t.clipIdForGrid), t.clipPathForSubchart = t.getClipPath(t.clipIdForSubchart), t.dragStart = null, t.dragging = !1, t.flowing = !1, t.cancelClick = !1, t.mouseover = void 0, t.transiting = !1, t.color = t.generateColor(), t.levelColor = t.generateLevelColor(), t.dataTimeParse = (n.data_xLocaltime ? e.timeParse : e.utcParse)(t.config.data_xFormat), t.axisTimeFormat = n.axis_x_localtime ? e.timeFormat : e.utcFormat, t.defaultAxisTimeFormat = function (t) {
                return t.getMilliseconds() ? e.timeFormat(".%L")(t) : t.getSeconds() ? e.timeFormat(":%S")(t) : t.getMinutes() ? e.timeFormat("%I:%M")(t) : t.getHours() ? e.timeFormat("%I %p")(t) : t.getDay() && 1 !== t.getDate() || 1 !== t.getDate() || t.getMonth() ? e.timeFormat("%-m/%-d")(t) : e.timeFormat("%Y/%-m/%-d")(t)
            }, t.hiddenTargetIds = [], t.hiddenLegendIds = [], t.focusedTargetIds = [], t.defocusedTargetIds = [], t.xOrient = n.axis_rotated ? n.axis_x_inner ? "right" : "left" : n.axis_x_inner ? "top" : "bottom", t.yOrient = n.axis_rotated ? n.axis_y_inner ? "top" : "bottom" : n.axis_y_inner ? "right" : "left", t.y2Orient = n.axis_rotated ? n.axis_y2_inner ? "bottom" : "top" : n.axis_y2_inner ? "left" : "right", t.subXOrient = n.axis_rotated ? "left" : "bottom", t.isLegendRight = "right" === n.legend_position, t.isLegendInset = "inset" === n.legend_position, t.isLegendTop = "top-left" === n.legend_inset_anchor || "top-right" === n.legend_inset_anchor, t.isLegendLeft = "top-left" === n.legend_inset_anchor || "bottom-left" === n.legend_inset_anchor, t.legendStep = 0, t.legendItemWidth = 0, t.legendItemHeight = 0, t.currentMaxTickWidths = {
                x: 0,
                y: 0,
                y2: 0
            }, t.rotated_padding_left = 30, t.rotated_padding_right = n.axis_rotated && !n.axis_x_show ? 0 : 30, t.rotated_padding_top = 5, t.withoutFadeIn = {}, t.intervalForObserveInserted = void 0, t.axes.subx = e.selectAll([])
        }, xs.prototype.initChartElements = function () {
            this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText()
        }, xs.prototype.initWithData = function (t) {
            var e, n, r = this, i = r.d3, a = r.config, o = !0;
            r.axis = new js(r), a.bindto ? "function" == typeof a.bindto.node ? r.selectChart = a.bindto : r.selectChart = i.select(a.bindto) : r.selectChart = i.selectAll([]), r.selectChart.empty() && (r.selectChart = i.select(document.createElement("div")).style("opacity", 0), r.observeInserted(r.selectChart), o = !1), r.selectChart.html("").classed("c3", !0), r.data.xs = {}, r.data.targets = r.convertDataToTargets(t), a.data_filter && (r.data.targets = r.data.targets.filter(a.data_filter)), a.data_hide && r.addHiddenTargetIds(!0 === a.data_hide ? r.mapToIds(r.data.targets) : a.data_hide), a.legend_hide && r.addHiddenLegendIds(!0 === a.legend_hide ? r.mapToIds(r.data.targets) : a.legend_hide), r.isStanfordGraphType() && r.initStanfordData(), r.updateSizes(), r.updateScales(), r.x.domain(i.extent(r.getXDomain(r.data.targets))), r.y.domain(r.getYDomain(r.data.targets, "y")), r.y2.domain(r.getYDomain(r.data.targets, "y2")), r.subX.domain(r.x.domain()), r.subY.domain(r.y.domain()), r.subY2.domain(r.y2.domain()), r.orgXDomain = r.x.domain(), r.svg = r.selectChart.append("svg").style("overflow", "hidden").on("mouseenter", (function () {
                return a.onmouseover.call(r)
            })).on("mouseleave", (function () {
                return a.onmouseout.call(r)
            })), r.config.svg_classname && r.svg.attr("class", r.config.svg_classname), e = r.svg.append("defs"), r.clipChart = r.appendClip(e, r.clipId), r.clipXAxis = r.appendClip(e, r.clipIdForXAxis), r.clipYAxis = r.appendClip(e, r.clipIdForYAxis), r.clipGrid = r.appendClip(e, r.clipIdForGrid), r.clipSubchart = r.appendClip(e, r.clipIdForSubchart), r.updateSvgSize(), n = r.main = r.svg.append("g").attr("transform", r.getTranslate("main")), r.initPie && r.initPie(), r.initDragZoom && r.initDragZoom(), a.subchart_show && r.initSubchart && r.initSubchart(), r.initTooltip && r.initTooltip(), r.initLegend && r.initLegend(), r.initTitle && r.initTitle(), r.initZoom && r.initZoom(), r.isStanfordGraphType() && r.drawColorScale(), a.subchart_show && r.initSubchartBrush && r.initSubchartBrush(), n.append("text").attr("class", Hs.text + " " + Hs.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), r.initRegion(), r.initGrid(), n.append("g").attr("clip-path", r.clipPath).attr("class", Hs.chart), a.grid_lines_front && r.initGridLines(), r.initStanfordElements(), r.initEventRect(), r.initChartElements(), r.axis.init(), r.updateTargets(r.data.targets), a.axis_x_selection && r.brush.selectionAsValue(r.getDefaultSelection()), o && (r.updateDimension(), r.config.oninit.call(r), r.redraw({
                withTransition: !1,
                withTransform: !0,
                withUpdateXDomain: !0,
                withUpdateOrgXDomain: !0,
                withTransitionForAxis: !1
            })), r.bindResize(), r.bindWindowFocus(), r.api.element = r.selectChart.node()
        }, xs.prototype.smoothLines = function (t, e) {
            var n = this;
            "grid" === e && t.each((function () {
                var t = n.d3.select(this), e = t.attr("x1"), r = t.attr("x2"), i = t.attr("y1"), a = t.attr("y2");
                t.attr({x1: Math.ceil(e), x2: Math.ceil(r), y1: Math.ceil(i), y2: Math.ceil(a)})
            }))
        }, xs.prototype.updateSizes = function () {
            var t = this, e = t.config, n = t.legend ? t.getLegendHeight() : 0, r = t.legend ? t.getLegendWidth() : 0,
                i = t.isLegendRight || t.isLegendInset ? 0 : n, a = t.hasArcType(),
                o = e.axis_rotated || a ? 0 : t.getHorizontalAxisHeight("x"),
                s = e.subchart_show && !a ? e.subchart_size_height + o : 0;
            t.currentWidth = t.getCurrentWidth(), t.currentHeight = t.getCurrentHeight(), t.margin = e.axis_rotated ? {
                top: t.getHorizontalAxisHeight("y2") + t.getCurrentPaddingTop(),
                right: a ? 0 : t.getCurrentPaddingRight(),
                bottom: t.getHorizontalAxisHeight("y") + i + t.getCurrentPaddingBottom(),
                left: s + (a ? 0 : t.getCurrentPaddingLeft())
            } : {
                top: 4 + t.getCurrentPaddingTop(),
                right: a ? 0 : t.getCurrentPaddingRight(),
                bottom: o + s + i + t.getCurrentPaddingBottom(),
                left: a ? 0 : t.getCurrentPaddingLeft()
            }, t.margin2 = e.axis_rotated ? {
                top: t.margin.top,
                right: NaN,
                bottom: 20 + i,
                left: t.rotated_padding_left
            } : {top: t.currentHeight - s - i, right: NaN, bottom: o + i, left: t.margin.left}, t.margin3 = {
                top: 0,
                right: NaN,
                bottom: 0,
                left: 0
            }, t.updateSizeForLegend && t.updateSizeForLegend(n, r), t.width = t.currentWidth - t.margin.left - t.margin.right, t.height = t.currentHeight - t.margin.top - t.margin.bottom, t.width < 0 && (t.width = 0), t.height < 0 && (t.height = 0), t.width2 = e.axis_rotated ? t.margin.left - t.rotated_padding_left - t.rotated_padding_right : t.width, t.height2 = e.axis_rotated ? t.height : t.currentHeight - t.margin2.top - t.margin2.bottom, t.width2 < 0 && (t.width2 = 0), t.height2 < 0 && (t.height2 = 0), t.arcWidth = t.width - (t.isLegendRight ? r + 10 : 0), t.arcHeight = t.height - (t.isLegendRight ? 0 : 10), t.hasType("gauge") && !e.gauge_fullCircle && (t.arcHeight += t.height - t.getGaugeLabelHeight()), t.updateRadius && t.updateRadius(), t.isLegendRight && a && (t.margin3.left = t.arcWidth / 2 + 1.1 * t.radiusExpanded)
        }, xs.prototype.updateTargets = function (t) {
            var e = this, n = e.config;
            e.updateTargetsForText(t), e.updateTargetsForBar(t), e.updateTargetsForLine(t), e.hasArcType() && e.updateTargetsForArc && e.updateTargetsForArc(t), n.subchart_show && e.updateTargetsForSubchart && e.updateTargetsForSubchart(t), e.showTargets()
        }, xs.prototype.showTargets = function () {
            var t = this;
            t.svg.selectAll("." + Hs.target).filter((function (e) {
                return t.isTargetToShow(e.id)
            })).transition().duration(t.config.transition_duration).style("opacity", 1)
        }, xs.prototype.redraw = function (t, e) {
            var n, r, i, a, o, s, l, c, u, h, d, f, p, g, y, _, v, m, x, w, b, S, T, A, C, P, D, L, I, E, k, V = this,
                R = V.main, M = V.d3, O = V.config, G = V.getShapeIndices(V.isAreaType),
                F = V.getShapeIndices(V.isBarType), N = V.getShapeIndices(V.isLineType), H = V.hasArcType(),
                j = V.filterTargetsToShow(V.data.targets), z = V.xv.bind(V);
            if (n = As(t = t || {}, "withY", !0), r = As(t, "withSubchart", !0), i = As(t, "withTransition", !0), s = As(t, "withTransform", !1), l = As(t, "withUpdateXDomain", !1), c = As(t, "withUpdateOrgXDomain", !1), u = As(t, "withTrimXDomain", !0), p = As(t, "withUpdateXAxis", l), h = As(t, "withLegend", !1), d = As(t, "withEventRect", !0), f = As(t, "withDimension", !0), a = As(t, "withTransitionForExit", i), o = As(t, "withTransitionForAxis", i), x = i ? O.transition_duration : 0, w = a ? x : 0, b = o ? x : 0, e = e || V.axis.generateTransitions(b), h && O.legend_show ? V.updateLegend(V.mapToIds(V.data.targets), t, e) : f && V.updateDimension(!0), V.isCategorized() && 0 === j.length && V.x.domain([0, V.axes.x.selectAll(".tick").size()]), j.length ? (V.updateXDomain(j, l, c, u), O.axis_x_tick_values || (P = V.axis.updateXAxisTickValues(j))) : (V.xAxis.tickValues([]), V.subXAxis.tickValues([])), O.zoom_rescale && !t.flow && (I = V.x.orgDomain()), V.y.domain(V.getYDomain(j, "y", I)), V.y2.domain(V.getYDomain(j, "y2", I)), !O.axis_y_tick_values && O.axis_y_tick_count && V.yAxis.tickValues(V.axis.generateTickValues(V.y.domain(), O.axis_y_tick_count)), !O.axis_y2_tick_values && O.axis_y2_tick_count && V.y2Axis.tickValues(V.axis.generateTickValues(V.y2.domain(), O.axis_y2_tick_count)), V.axis.redraw(b, H), V.axis.updateLabels(i), (l || p) && j.length) if (O.axis_x_tick_culling && P) {
                for (D = 1; D < P.length; D++) if (P.length / D < O.axis_x_tick_culling_max) {
                    L = D;
                    break
                }
                V.svg.selectAll("." + Hs.axisX + " .tick text").each((function (t) {
                    var e = P.indexOf(t);
                    e >= 0 && M.select(this).style("display", e % L ? "none" : "block")
                }))
            } else V.svg.selectAll("." + Hs.axisX + " .tick text").style("display", "block");
            g = V.generateDrawArea ? V.generateDrawArea(G, !1) : void 0, y = V.generateDrawBar ? V.generateDrawBar(F) : void 0, _ = V.generateDrawLine ? V.generateDrawLine(N, !1) : void 0, v = V.generateXYForText(G, F, N, !0), m = V.generateXYForText(G, F, N, !1), V.updateCircleY(), E = (V.config.axis_rotated ? V.circleY : V.circleX).bind(V), k = (V.config.axis_rotated ? V.circleX : V.circleY).bind(V), n && (V.subY.domain(V.getYDomain(j, "y")), V.subY2.domain(V.getYDomain(j, "y2"))), V.updateXgridFocus(), R.select("text." + Hs.text + "." + Hs.empty).attr("x", V.width / 2).attr("y", V.height / 2).text(O.data_empty_label_text).transition().style("opacity", j.length ? 0 : 1), d && V.redrawEventRect(), V.updateGrid(x), V.updateStanfordElements(x), V.updateRegion(x), V.updateBar(w), V.updateLine(w), V.updateArea(w), V.updateCircle(E, k), V.hasDataLabel() && V.updateText(v, m, w), V.redrawTitle && V.redrawTitle(), V.redrawArc && V.redrawArc(x, w, s), O.subchart_show && V.redrawSubchart && V.redrawSubchart(r, e, x, w, G, F, N), V.isStanfordGraphType() && V.drawColorScale(), R.selectAll("." + Hs.selectedCircles).filter(V.isBarType.bind(V)).selectAll("circle").remove(), t.flow && (A = V.generateFlow({
                targets: j,
                flow: t.flow,
                duration: t.flow.duration,
                drawBar: y,
                drawLine: _,
                drawArea: g,
                cx: E,
                cy: k,
                xv: z,
                xForText: v,
                yForText: m
            })), x && V.isTabVisible() ? (C = M.transition().duration(x), S = [], [V.redrawBar(y, !0, C), V.redrawLine(_, !0, C), V.redrawArea(g, !0, C), V.redrawCircle(E, k, !0, C), V.redrawText(v, m, t.flow, !0, C), V.redrawRegion(!0, C), V.redrawGrid(!0, C)].forEach((function (t) {
                t.forEach((function (t) {
                    S.push(t)
                }))
            })), T = V.generateWait(), S.forEach((function (t) {
                T.add(t)
            })), T((function () {
                A && A(), O.onrendered && O.onrendered.call(V)
            }))) : (V.redrawBar(y), V.redrawLine(_), V.redrawArea(g), V.redrawCircle(E, k), V.redrawText(v, m, t.flow), V.redrawRegion(), V.redrawGrid(), A && A(), O.onrendered && O.onrendered.call(V)), V.mapToIds(V.data.targets).forEach((function (t) {
                V.withoutFadeIn[t] = !0
            }))
        }, xs.prototype.updateAndRedraw = function (t) {
            var e, n = this, r = n.config;
            (t = t || {}).withTransition = As(t, "withTransition", !0), t.withTransform = As(t, "withTransform", !1), t.withLegend = As(t, "withLegend", !1), t.withUpdateXDomain = As(t, "withUpdateXDomain", !0), t.withUpdateOrgXDomain = As(t, "withUpdateOrgXDomain", !0), t.withTransitionForExit = !1, t.withTransitionForTransform = As(t, "withTransitionForTransform", t.withTransition), n.updateSizes(), t.withLegend && r.legend_show || (e = n.axis.generateTransitions(t.withTransitionForAxis ? r.transition_duration : 0), n.updateScales(), n.updateSvgSize(), n.transformAll(t.withTransitionForTransform, e)), n.redraw(t, e)
        }, xs.prototype.redrawWithoutRescale = function () {
            this.redraw({withY: !1, withSubchart: !1, withEventRect: !1, withTransitionForAxis: !1})
        }, xs.prototype.isTimeSeries = function () {
            return "timeseries" === this.config.axis_x_type
        }, xs.prototype.isCategorized = function () {
            return this.config.axis_x_type.indexOf("categor") >= 0
        }, xs.prototype.isCustomX = function () {
            var t = this.config;
            return !this.isTimeSeries() && (t.data_x || Os(t.data_xs))
        }, xs.prototype.isTimeSeriesY = function () {
            return "timeseries" === this.config.axis_y_type
        }, xs.prototype.getTranslate = function (t) {
            var e, n, r = this, i = r.config;
            return "main" === t ? (e = bs(r.margin.left), n = bs(r.margin.top)) : "context" === t ? (e = bs(r.margin2.left), n = bs(r.margin2.top)) : "legend" === t ? (e = r.margin3.left, n = r.margin3.top) : "x" === t ? (e = 0, n = i.axis_rotated ? 0 : r.height) : "y" === t ? (e = 0, n = i.axis_rotated ? r.height : 0) : "y2" === t ? (e = i.axis_rotated ? 0 : r.width, n = i.axis_rotated ? 1 : 0) : "subx" === t ? (e = 0, n = i.axis_rotated ? 0 : r.height2) : "arc" === t && (e = r.arcWidth / 2, n = r.arcHeight / 2 - (r.hasType("gauge") ? 6 : 0)), "translate(" + e + "," + n + ")"
        }, xs.prototype.initialOpacity = function (t) {
            return null !== t.value && this.withoutFadeIn[t.id] ? 1 : 0
        }, xs.prototype.initialOpacityForCircle = function (t) {
            return null !== t.value && this.withoutFadeIn[t.id] ? this.opacityForCircle(t) : 0
        }, xs.prototype.opacityForCircle = function (t) {
            var e = (Es(this.config.point_show) ? this.config.point_show(t) : this.config.point_show) || this.isStanfordType(t) ? 1 : 0;
            return Ms(t.value) ? this.isScatterType(t) ? .5 : e : 0
        }, xs.prototype.opacityForText = function () {
            return this.hasDataLabel() ? 1 : 0
        }, xs.prototype.xx = function (t) {
            return t ? this.x(t.x) : null
        }, xs.prototype.xvCustom = function (t, e) {
            var n = this, r = e ? t[e] : t.value;
            return n.isTimeSeries() ? r = n.parseDate(t.value) : n.isCategorized() && "string" == typeof t.value && (r = n.config.axis_x_categories.indexOf(t.value)), Math.ceil(n.x(r))
        }, xs.prototype.yvCustom = function (t, e) {
            var n = t.axis && "y2" === t.axis ? this.y2 : this.y, r = e ? t[e] : t.value;
            return Math.ceil(n(r))
        }, xs.prototype.xv = function (t) {
            var e = this, n = t.value;
            return e.isTimeSeries() ? n = e.parseDate(t.value) : e.isCategorized() && "string" == typeof t.value && (n = e.config.axis_x_categories.indexOf(t.value)), Math.ceil(e.x(n))
        }, xs.prototype.yv = function (t) {
            var e = t.axis && "y2" === t.axis ? this.y2 : this.y;
            return Math.ceil(e(t.value))
        }, xs.prototype.subxx = function (t) {
            return t ? this.subX(t.x) : null
        }, xs.prototype.transformMain = function (t, e) {
            var n, r, i, a = this;
            e && e.axisX ? n = e.axisX : (n = a.main.select("." + Hs.axisX), t && (n = n.transition())), e && e.axisY ? r = e.axisY : (r = a.main.select("." + Hs.axisY), t && (r = r.transition())), e && e.axisY2 ? i = e.axisY2 : (i = a.main.select("." + Hs.axisY2), t && (i = i.transition())), (t ? a.main.transition() : a.main).attr("transform", a.getTranslate("main")), n.attr("transform", a.getTranslate("x")), r.attr("transform", a.getTranslate("y")), i.attr("transform", a.getTranslate("y2")), a.main.select("." + Hs.chartArcs).attr("transform", a.getTranslate("arc"))
        }, xs.prototype.transformAll = function (t, e) {
            var n = this;
            n.transformMain(t, e), n.config.subchart_show && n.transformContext(t, e), n.legend && n.transformLegend(t)
        }, xs.prototype.updateSvgSize = function () {
            var t = this, e = t.svg.select(".".concat(Hs.brush, " .overlay"));
            t.svg.attr("width", t.currentWidth).attr("height", t.currentHeight), t.svg.selectAll(["#" + t.clipId, "#" + t.clipIdForGrid]).select("rect").attr("width", t.width).attr("height", t.height), t.svg.select("#" + t.clipIdForXAxis).select("rect").attr("x", t.getXAxisClipX.bind(t)).attr("y", t.getXAxisClipY.bind(t)).attr("width", t.getXAxisClipWidth.bind(t)).attr("height", t.getXAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForYAxis).select("rect").attr("x", t.getYAxisClipX.bind(t)).attr("y", t.getYAxisClipY.bind(t)).attr("width", t.getYAxisClipWidth.bind(t)).attr("height", t.getYAxisClipHeight.bind(t)), t.svg.select("#" + t.clipIdForSubchart).select("rect").attr("width", t.width).attr("height", e.size() && e.attr("height") || 0), t.selectChart.style("max-height", t.currentHeight + "px")
        }, xs.prototype.updateDimension = function (t) {
            var e = this;
            t || (e.config.axis_rotated ? (e.axes.x.call(e.xAxis), e.axes.subx.call(e.subXAxis)) : (e.axes.y.call(e.yAxis), e.axes.y2.call(e.y2Axis))), e.updateSizes(), e.updateScales(), e.updateSvgSize(), e.transformAll(!1)
        }, xs.prototype.observeInserted = function (t) {
            var e, n = this;
            "undefined" != typeof MutationObserver ? (e = new MutationObserver((function (r) {
                r.forEach((function (r) {
                    "childList" === r.type && r.previousSibling && (e.disconnect(), n.intervalForObserveInserted = window.setInterval((function () {
                        t.node().parentNode && (window.clearInterval(n.intervalForObserveInserted), n.updateDimension(), n.brush && n.brush.update(), n.config.oninit.call(n), n.redraw({
                            withTransform: !0,
                            withUpdateXDomain: !0,
                            withUpdateOrgXDomain: !0,
                            withTransition: !1,
                            withTransitionForTransform: !1,
                            withLegend: !0
                        }), t.transition().style("opacity", 1))
                    }), 10))
                }))
            }))).observe(t.node(), {
                attributes: !0,
                childList: !0,
                characterData: !0
            }) : window.console.error("MutationObserver not defined.")
        }, xs.prototype.bindResize = function () {
            var t = this, e = t.config;
            if (t.resizeFunction = t.generateResize(), t.resizeFunction.add((function () {
                e.onresize.call(t)
            })), e.resize_auto && t.resizeFunction.add((function () {
                void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), t.resizeTimeout = window.setTimeout((function () {
                    delete t.resizeTimeout, t.updateAndRedraw({
                        withUpdateXDomain: !1,
                        withUpdateOrgXDomain: !1,
                        withTransition: !1,
                        withTransitionForTransform: !1,
                        withLegend: !0
                    }), t.brush && t.brush.update()
                }), 100)
            })), t.resizeFunction.add((function () {
                e.onresized.call(t)
            })), t.resizeIfElementDisplayed = function () {
                null != t.api && t.api.element.offsetParent && t.resizeFunction()
            }, window.attachEvent) window.attachEvent("onresize", t.resizeIfElementDisplayed); else if (window.addEventListener) window.addEventListener("resize", t.resizeIfElementDisplayed, !1); else {
                var n = window.onresize;
                n ? n.add && n.remove || (n = t.generateResize()).add(window.onresize) : n = t.generateResize(), n.add(t.resizeFunction), window.onresize = function () {
                    t.api.element.offsetParent && n()
                }
            }
        }, xs.prototype.bindWindowFocus = function () {
            var t = this;
            this.windowFocusHandler || (this.windowFocusHandler = function () {
                t.redraw()
            }, window.addEventListener("focus", this.windowFocusHandler))
        }, xs.prototype.unbindWindowFocus = function () {
            window.removeEventListener("focus", this.windowFocusHandler), delete this.windowFocusHandler
        }, xs.prototype.generateResize = function () {
            var t = [];

            function e() {
                t.forEach((function (t) {
                    t()
                }))
            }

            return e.add = function (e) {
                t.push(e)
            }, e.remove = function (e) {
                for (var n = 0; n < t.length; n++) if (t[n] === e) {
                    t.splice(n, 1);
                    break
                }
            }, e
        }, xs.prototype.endall = function (t, e) {
            var n = 0;
            t.each((function () {
                ++n
            })).on("end", (function () {
                --n || e.apply(this, arguments)
            }))
        }, xs.prototype.generateWait = function () {
            var t = this, e = [], n = function (n) {
                var r = setInterval((function () {
                    if (t.isTabVisible()) {
                        var i = 0;
                        e.forEach((function (t) {
                            if (t.empty()) i += 1; else try {
                                t.transition()
                            } catch (t) {
                                i += 1
                            }
                        })), i === e.length && (clearInterval(r), n && n())
                    }
                }), 50)
            };
            return n.add = function (t) {
                e.push(t)
            }, n
        }, xs.prototype.parseDate = function (t) {
            var e;
            return t instanceof Date ? e = t : "string" == typeof t ? e = this.dataTimeParse(t) : "object" === ms(t) ? e = new Date(+t) : "number" != typeof t || isNaN(t) || (e = new Date(+t)), e && !isNaN(+e) || window.console.error("Failed to parse x '" + t + "' to Date object"), e
        }, xs.prototype.isTabVisible = function () {
            return !document.hidden
        }, xs.prototype.getPathBox = Cs, xs.prototype.CLASS = Hs, "SVGPathSeg" in window || (window.SVGPathSeg = function (t, e, n) {
            this.pathSegType = t, this.pathSegTypeAsLetter = e, this._owningPathSegList = n
        }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function () {
            this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
        }, window.SVGPathSegClosePath = function (t) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t)
        }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function () {
            return "[object SVGPathSegClosePath]"
        }, window.SVGPathSegClosePath.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter
        }, window.SVGPathSegClosePath.prototype.clone = function () {
            return new window.SVGPathSegClosePath(void 0)
        }, window.SVGPathSegMovetoAbs = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), this._x = e, this._y = n
        }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function () {
            return "[object SVGPathSegMovetoAbs]"
        }, window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, window.SVGPathSegMovetoAbs.prototype.clone = function () {
            return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y)
        }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegMovetoRel = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), this._x = e, this._y = n
        }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function () {
            return "[object SVGPathSegMovetoRel]"
        }, window.SVGPathSegMovetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, window.SVGPathSegMovetoRel.prototype.clone = function () {
            return new window.SVGPathSegMovetoRel(void 0, this._x, this._y)
        }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegLinetoAbs = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), this._x = e, this._y = n
        }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoAbs]"
        }, window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, window.SVGPathSegLinetoAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y)
        }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegLinetoRel = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), this._x = e, this._y = n
        }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoRel]"
        }, window.SVGPathSegLinetoRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        }, window.SVGPathSegLinetoRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoRel(void 0, this._x, this._y)
        }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegCurvetoCubicAbs = function (t, e, n, r, i, a, o) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i, this._x2 = a, this._y2 = o
        }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicAbs]"
        }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
        }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
            get: function () {
                return this._x1
            }, set: function (t) {
                this._x1 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
            get: function () {
                return this._y1
            }, set: function (t) {
                this._y1 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
            get: function () {
                return this._x2
            }, set: function (t) {
                this._x2 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
            get: function () {
                return this._y2
            }, set: function (t) {
                this._y2 = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegCurvetoCubicRel = function (t, e, n, r, i, a, o) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i, this._x2 = a, this._y2 = o
        }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicRel]"
        }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
        }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
            get: function () {
                return this._x1
            }, set: function (t) {
                this._x1 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
            get: function () {
                return this._y1
            }, set: function (t) {
                this._y1 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
            get: function () {
                return this._x2
            }, set: function (t) {
                this._x2 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
            get: function () {
                return this._y2
            }, set: function (t) {
                this._y2 = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegCurvetoQuadraticAbs = function (t, e, n, r, i) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i
        }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticAbs]"
        }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
        }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1)
        }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
            get: function () {
                return this._x1
            }, set: function (t) {
                this._x1 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
            get: function () {
                return this._y1
            }, set: function (t) {
                this._y1 = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegCurvetoQuadraticRel = function (t, e, n, r, i) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), this._x = e, this._y = n, this._x1 = r, this._y1 = i
        }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticRel]"
        }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
        }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1)
        }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
            get: function () {
                return this._x1
            }, set: function (t) {
                this._x1 = t, this._segmentChanged()
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
            get: function () {
                return this._y1
            }, set: function (t) {
                this._y1 = t, this._segmentChanged()
            }, enumerable: !0
        }), window.SVGPathSegArcAbs = function (t, e, n, r, i, a, o, s) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), this._x = e, this._y = n, this._r1 = r, this._r2 = i, this._angle = a, this._largeArcFlag = o, this._sweepFlag = s
        }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function () {
            return "[object SVGPathSegArcAbs]"
        }, window.SVGPathSegArcAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
        }, window.SVGPathSegArcAbs.prototype.clone = function () {
            return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
        },Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
            get: function () {
                return this._r1
            }, set: function (t) {
                this._r1 = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
            get: function () {
                return this._r2
            }, set: function (t) {
                this._r2 = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
            get: function () {
                return this._angle
            }, set: function (t) {
                this._angle = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
            get: function () {
                return this._largeArcFlag
            }, set: function (t) {
                this._largeArcFlag = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
            get: function () {
                return this._sweepFlag
            }, set: function (t) {
                this._sweepFlag = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegArcRel = function (t, e, n, r, i, a, o, s) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), this._x = e, this._y = n, this._r1 = r, this._r2 = i, this._angle = a, this._largeArcFlag = o, this._sweepFlag = s
        },window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString = function () {
            return "[object SVGPathSegArcRel]"
        },window.SVGPathSegArcRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
        },window.SVGPathSegArcRel.prototype.clone = function () {
            return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
        },Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
            get: function () {
                return this._r1
            }, set: function (t) {
                this._r1 = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
            get: function () {
                return this._r2
            }, set: function (t) {
                this._r2 = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
            get: function () {
                return this._angle
            }, set: function (t) {
                this._angle = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
            get: function () {
                return this._largeArcFlag
            }, set: function (t) {
                this._largeArcFlag = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
            get: function () {
                return this._sweepFlag
            }, set: function (t) {
                this._sweepFlag = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), this._x = e
        },window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalAbs]"
        },window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x
        },window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
        },Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegLinetoHorizontalRel = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), this._x = e
        },window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoHorizontalRel]"
        },window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x
        },window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x)
        },Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegLinetoVerticalAbs = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), this._y = e
        },window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalAbs]"
        },window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y
        },window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y)
        },Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegLinetoVerticalRel = function (t, e) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), this._y = e
        },window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
            return "[object SVGPathSegLinetoVerticalRel]"
        },window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._y
        },window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
            return new window.SVGPathSegLinetoVerticalRel(void 0, this._y)
        },Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, r, i) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), this._x = e, this._y = n, this._x2 = r, this._y2 = i
        },window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothAbs]"
        },window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        },window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2)
        },Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
            get: function () {
                return this._x2
            }, set: function (t) {
                this._x2 = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
            get: function () {
                return this._y2
            }, set: function (t) {
                this._y2 = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, n, r, i) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), this._x = e, this._y = n, this._x2 = r, this._y2 = i
        },window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoCubicSmoothRel]"
        },window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
        },window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2)
        },Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
            get: function () {
                return this._x2
            }, set: function (t) {
                this._x2 = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
            get: function () {
                return this._y2
            }, set: function (t) {
                this._y2 = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), this._x = e, this._y = n
        },window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
        },window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        },window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y)
        },Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, n) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), this._x = e, this._y = n
        },window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
            return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
        },window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
        },window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y)
        },Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
            get: function () {
                return this._x
            }, set: function (t) {
                this._x = t, this._segmentChanged()
            }, enumerable: !0
        }),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
            get: function () {
                return this._y
            }, set: function (t) {
                this._y = t, this._segmentChanged()
            }, enumerable: !0
        }),window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
            return new window.SVGPathSegClosePath(void 0)
        },window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (t, e) {
            return new window.SVGPathSegMovetoAbs(void 0, t, e)
        },window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (t, e) {
            return new window.SVGPathSegMovetoRel(void 0, t, e)
        },window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (t, e) {
            return new window.SVGPathSegLinetoAbs(void 0, t, e)
        },window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (t, e) {
            return new window.SVGPathSegLinetoRel(void 0, t, e)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (t, e, n, r, i, a) {
            return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, n, r, i, a)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (t, e, n, r, i, a) {
            return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, n, r, i, a)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (t, e, n, r) {
            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, n, r)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (t, e, n, r) {
            return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, n, r)
        },window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (t, e, n, r, i, a, o) {
            return new window.SVGPathSegArcAbs(void 0, t, e, n, r, i, a, o)
        },window.SVGPathElement.prototype.createSVGPathSegArcRel = function (t, e, n, r, i, a, o) {
            return new window.SVGPathSegArcRel(void 0, t, e, n, r, i, a, o)
        },window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (t) {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, t)
        },window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (t) {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, t)
        },window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (t) {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, t)
        },window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (t) {
            return new window.SVGPathSegLinetoVerticalRel(void 0, t)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (t, e, n, r) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, n, r)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (t, e, n, r) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, n, r)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (t, e) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e)
        },window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (t, e) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e)
        },"getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
            if (void 0 === t || !isFinite(t)) throw"Invalid arguments.";
            var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
            e.setAttribute("d", this.getAttribute("d"));
            var n = e.pathSegList.numberOfItems - 1;
            if (n <= 0) return 0;
            do {
                if (e.pathSegList.removeItem(n), t > e.getTotalLength()) break;
                n--
            } while (n > 0);
            return n
        })), "SVGPathSegList" in window || (window.SVGPathSegList = function (t) {
            this._pathElement = t, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
                attributes: !0,
                attributeFilter: ["d"]
            }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function () {
                return this._checkPathSynchronizedToList(), this._list.length
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function () {
                return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
            get: function () {
                return this.pathSegList
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
            get: function () {
                return this.pathSegList
            }, enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
            get: function () {
                return this.pathSegList
            }, enumerable: !0
        }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
        }, window.SVGPathSegList.prototype._updateListFromPathMutations = function (t) {
            if (this._pathElement) {
                var e = !1;
                t.forEach((function (t) {
                    "d" == t.attributeName && (e = !0)
                })), e && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
            }
        }, window.SVGPathSegList.prototype._writeListToPath = function () {
            this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        }, window.SVGPathSegList.prototype.segmentChanged = function (t) {
            this._writeListToPath()
        }, window.SVGPathSegList.prototype.clear = function () {
            this._checkPathSynchronizedToList(), this._list.forEach((function (t) {
                t._owningPathSegList = null
            })), this._list = [], this._writeListToPath()
        }, window.SVGPathSegList.prototype.initialize = function (t) {
            return this._checkPathSynchronizedToList(), this._list = [t], t._owningPathSegList = this, this._writeListToPath(), t
        }, window.SVGPathSegList.prototype._checkValidIndex = function (t) {
            if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw"INDEX_SIZE_ERR"
        }, window.SVGPathSegList.prototype.getItem = function (t) {
            return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t]
        }, window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
            return this._checkPathSynchronizedToList(), e > this.numberOfItems && (e = this.numberOfItems), t._owningPathSegList && (t = t.clone()), this._list.splice(e, 0, t), t._owningPathSegList = this, this._writeListToPath(), t
        }, window.SVGPathSegList.prototype.replaceItem = function (t, e) {
            return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), this._list[e] = t, t._owningPathSegList = this, this._writeListToPath(), t
        }, window.SVGPathSegList.prototype.removeItem = function (t) {
            this._checkPathSynchronizedToList(), this._checkValidIndex(t);
            var e = this._list[t];
            return this._list.splice(t, 1), this._writeListToPath(), e
        }, window.SVGPathSegList.prototype.appendItem = function (t) {
            return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), t._owningPathSegList = this, this._writeListToPath(), t
        }, window.SVGPathSegList._pathSegArrayAsString = function (t) {
            var e = "", n = !0;
            return t.forEach((function (t) {
                n ? (n = !1, e += t._asPathString()) : e += " " + t._asPathString()
            })), e
        }, window.SVGPathSegList.prototype._parsePath = function (t) {
            if (!t || 0 == t.length) return [];
            var e = this, n = function () {
                this.pathSegList = []
            };
            n.prototype.appendSegment = function (t) {
                this.pathSegList.push(t)
            };
            var r = function (t) {
                this._string = t, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
            };
            r.prototype._isCurrentSpace = function () {
                var t = this._string[this._currentIndex];
                return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t)
            }, r.prototype._skipOptionalSpaces = function () {
                for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                return this._currentIndex < this._endIndex
            }, r.prototype._skipOptionalSpacesOrDelimiter = function () {
                return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
            }, r.prototype.hasMoreData = function () {
                return this._currentIndex < this._endIndex
            }, r.prototype.peekSegmentType = function () {
                var t = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(t)
            }, r.prototype._pathSegTypeFromChar = function (t) {
                switch (t) {
                    case"Z":
                    case"z":
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case"M":
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case"m":
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case"L":
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case"l":
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    case"C":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case"c":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case"Q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case"q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case"A":
                        return window.SVGPathSeg.PATHSEG_ARC_ABS;
                    case"a":
                        return window.SVGPathSeg.PATHSEG_ARC_REL;
                    case"H":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case"h":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case"V":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case"v":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case"S":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case"s":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case"T":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case"t":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN
                }
            }, r.prototype._nextCommandHelper = function (t, e) {
                return ("+" == t || "-" == t || "." == t || t >= "0" && t <= "9") && e != window.SVGPathSeg.PATHSEG_CLOSEPATH ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : e == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : e : window.SVGPathSeg.PATHSEG_UNKNOWN
            }, r.prototype.initialCommandIsMoveTo = function () {
                if (!this.hasMoreData()) return !0;
                var t = this.peekSegmentType();
                return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL
            }, r.prototype._parseNumber = function () {
                var t = 0, e = 0, n = 1, r = 0, i = 1, a = 1, o = this._currentIndex;
                if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, i = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                    for (var s = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
                    if (this._currentIndex != s) for (var l = this._currentIndex - 1, c = 1; l >= s;) e += c * (this._string.charAt(l--) - "0"), c *= 10;
                    if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                        if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) n *= 10, r += (this._string.charAt(this._currentIndex) - "0") / n, this._currentIndex += 1
                    }
                    if (this._currentIndex != o && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                        if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, a = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) t *= 10, t += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
                    }
                    var u = e + r;
                    if (u *= i, t && (u *= Math.pow(10, a * t)), o != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), u
                }
            }, r.prototype._parseArcFlag = function () {
                if (!(this._currentIndex >= this._endIndex)) {
                    var t = !1, e = this._string.charAt(this._currentIndex++);
                    if ("0" == e) t = !1; else {
                        if ("1" != e) return;
                        t = !0
                    }
                    return this._skipOptionalSpacesOrDelimiter(), t
                }
            }, r.prototype.parseSegment = function () {
                var t = this._string[this._currentIndex], n = this._pathSegTypeFromChar(t);
                if (n == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    if ((n = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null
                } else this._currentIndex++;
                switch (this._previousCommand = n, n) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        var r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegCurvetoCubicRel(e, r.x, r.y, r.x1, r.y1, r.x2, r.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicAbs(e, r.x, r.y, r.x1, r.y1, r.x2, r.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        return r = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicSmoothRel(e, r.x, r.y, r.x2, r.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        return r = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicSmoothAbs(e, r.x, r.y, r.x2, r.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoQuadraticRel(e, r.x, r.y, r.x1, r.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoQuadraticAbs(e, r.x, r.y, r.x1, r.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegArcRel(e, r.x, r.y, r.x1, r.y1, r.arcAngle, r.arcLarge, r.arcSweep);
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        return r = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegArcAbs(e, r.x, r.y, r.x1, r.y1, r.arcAngle, r.arcLarge, r.arcSweep);
                    default:
                        throw"Unknown path seg type."
                }
            };
            var i = new n, a = new r(t);
            if (!a.initialCommandIsMoveTo()) return [];
            for (; a.hasMoreData();) {
                var o = a.parseSegment();
                if (!o) return [];
                i.appendSegment(o)
            }
            return i.pathSegList
        }), String.prototype.padEnd || (String.prototype.padEnd = function (t, e) {
            return t >>= 0, e = String(void 0 !== e ? e : " "), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), String(this) + e.slice(0, t))
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function (t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(t), r = 1; r < arguments.length; r++) {
                    var i = arguments[r];
                    if (null != i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
                }
                return n
            }, writable: !0, configurable: !0
        }), ws.prototype.axis = function () {
        }, ws.prototype.axis.labels = function (t) {
            var e = this.internal;
            arguments.length && (Object.keys(t).forEach((function (n) {
                e.axis.setLabelText(n, t[n])
            })), e.axis.updateLabels())
        }, ws.prototype.axis.max = function (t) {
            var e = this.internal, n = e.config;
            if (!arguments.length) return {x: n.axis_x_max, y: n.axis_y_max, y2: n.axis_y2_max};
            "object" === ms(t) ? (Ms(t.x) && (n.axis_x_max = t.x), Ms(t.y) && (n.axis_y_max = t.y), Ms(t.y2) && (n.axis_y2_max = t.y2)) : n.axis_y_max = n.axis_y2_max = t, e.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })
        }, ws.prototype.axis.min = function (t) {
            var e = this.internal, n = e.config;
            if (!arguments.length) return {x: n.axis_x_min, y: n.axis_y_min, y2: n.axis_y2_min};
            "object" === ms(t) ? (Ms(t.x) && (n.axis_x_min = t.x), Ms(t.y) && (n.axis_y_min = t.y), Ms(t.y2) && (n.axis_y2_min = t.y2)) : n.axis_y_min = n.axis_y2_min = t, e.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })
        }, ws.prototype.axis.range = function (t) {
            if (!arguments.length) return {max: this.axis.max(), min: this.axis.min()};
            Ls(t.max) && this.axis.max(t.max), Ls(t.min) && this.axis.min(t.min)
        }, ws.prototype.axis.types = function (t) {
            var e = this.internal;
            if (void 0 === t) return {y: e.config.axis_y_type, y2: e.config.axis_y2_type};
            Ls(t.y) && (e.config.axis_y_type = t.y), Ls(t.y2) && (e.config.axis_y2_type = t.y2), e.updateScales(), e.redraw()
        }, ws.prototype.category = function (t, e) {
            var n = this.internal, r = n.config;
            return arguments.length > 1 && (r.axis_x_categories[t] = e, n.redraw()), r.axis_x_categories[t]
        }, ws.prototype.categories = function (t) {
            var e = this.internal, n = e.config;
            return arguments.length ? (n.axis_x_categories = t, e.redraw(), n.axis_x_categories) : n.axis_x_categories
        }, ws.prototype.resize = function (t) {
            var e = this.internal.config;
            e.size_width = t ? t.width : null, e.size_height = t ? t.height : null, this.flush()
        }, ws.prototype.flush = function () {
            this.internal.updateAndRedraw({withLegend: !0, withTransition: !1, withTransitionForTransform: !1})
        }, ws.prototype.destroy = function () {
            var t = this.internal;
            if (window.clearInterval(t.intervalForObserveInserted), void 0 !== t.resizeTimeout && window.clearTimeout(t.resizeTimeout), window.detachEvent) window.detachEvent("onresize", t.resizeIfElementDisplayed); else if (window.removeEventListener) window.removeEventListener("resize", t.resizeIfElementDisplayed); else {
                var e = window.onresize;
                e && e.add && e.remove && e.remove(t.resizeFunction)
            }
            return t.resizeFunction.remove(), t.unbindWindowFocus(), t.selectChart.classed("c3", !1).html(""), Object.keys(t).forEach((function (e) {
                t[e] = null
            })), null
        }, ws.prototype.color = function (t) {
            return this.internal.color(t)
        }, ws.prototype.data = function (t) {
            var e = this.internal.data.targets;
            return void 0 === t ? e : e.filter((function (e) {
                return [].concat(t).indexOf(e.id) >= 0
            }))
        }, ws.prototype.data.shown = function (t) {
            return this.internal.filterTargetsToShow(this.data(t))
        }, ws.prototype.data.values = function (t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = null;
            if (t) {
                var r = this.data(t);
                r && Ds(r) && (n = r.reduce((function (t, n) {
                    var r = n.values.map((function (t) {
                        return t.value
                    }));
                    return e ? t = t.concat(r) : t.push(r), t
                }), []))
            }
            return n
        }, ws.prototype.data.names = function (t) {
            return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", t)
        }, ws.prototype.data.colors = function (t) {
            return this.internal.updateDataAttributes("colors", t)
        }, ws.prototype.data.axes = function (t) {
            return this.internal.updateDataAttributes("axes", t)
        }, ws.prototype.data.stackNormalized = function (t) {
            if (void 0 === t) return this.internal.isStackNormalized();
            this.internal.config.data_stack_normalize = !!t, this.internal.redraw()
        }, ws.prototype.donut = function () {
        }, ws.prototype.donut.padAngle = function (t) {
            if (void 0 === t) return this.internal.config.donut_padAngle;
            this.internal.config.donut_padAngle = t, this.flush()
        }, ws.prototype.flow = function (t) {
            var e, n, r, i, a, o, s, l = this.internal, c = [], u = l.getMaxDataCount(), h = 0, d = 0;
            if (t.json) n = l.convertJsonToData(t.json, t.keys); else if (t.rows) n = l.convertRowsToData(t.rows); else {
                if (!t.columns) return;
                n = l.convertColumnsToData(t.columns)
            }
            e = l.convertDataToTargets(n, !0), l.data.targets.forEach((function (t) {
                var n, r, i = !1;
                for (n = 0; n < e.length; n++) if (t.id === e[n].id) {
                    for (i = !0, t.values[t.values.length - 1] && (d = t.values[t.values.length - 1].index + 1), h = e[n].values.length, r = 0; r < h; r++) e[n].values[r].index = d + r, l.isTimeSeries() || (e[n].values[r].x = d + r);
                    t.values = t.values.concat(e[n].values), e.splice(n, 1);
                    break
                }
                i || c.push(t.id)
            })), l.data.targets.forEach((function (t) {
                var e, n;
                for (e = 0; e < c.length; e++) if (t.id === c[e]) for (d = t.values[t.values.length - 1].index + 1, n = 0; n < h; n++) t.values.push({
                    id: t.id,
                    index: d + n,
                    x: l.isTimeSeries() ? l.getOtherTargetX(d + n) : d + n,
                    value: null
                })
            })), l.data.targets.length && e.forEach((function (t) {
                var e, n = [];
                for (e = l.data.targets[0].values[0].index; e < d; e++) n.push({
                    id: t.id,
                    index: e,
                    x: l.isTimeSeries() ? l.getOtherTargetX(e) : e,
                    value: null
                });
                t.values.forEach((function (t) {
                    t.index += d, l.isTimeSeries() || (t.x += d)
                })), t.values = n.concat(t.values)
            })), l.data.targets = l.data.targets.concat(e), l.getMaxDataCount(), a = (i = l.data.targets[0]).values[0], Ls(t.to) ? (h = 0, s = l.isTimeSeries() ? l.parseDate(t.to) : t.to, i.values.forEach((function (t) {
                t.x < s && h++
            }))) : Ls(t.length) && (h = t.length), u ? 1 === u && l.isTimeSeries() && (o = (i.values[i.values.length - 1].x - a.x) / 2, r = [new Date(+a.x - o), new Date(+a.x + o)], l.updateXDomain(null, !0, !0, !1, r)) : (o = l.isTimeSeries() ? i.values.length > 1 ? i.values[i.values.length - 1].x - a.x : a.x - l.getXDomain(l.data.targets)[0] : 1, r = [a.x - o, a.x], l.updateXDomain(null, !0, !0, !1, r)), l.updateTargets(l.data.targets), l.redraw({
                flow: {
                    index: a.index,
                    length: h,
                    duration: Ms(t.duration) ? t.duration : l.config.transition_duration,
                    done: t.done,
                    orgDataCount: u
                }, withLegend: !0, withTransition: u > 1, withTrimXDomain: !1, withUpdateXAxis: !0
            })
        }, xs.prototype.generateFlow = function (t) {
            var e = this, n = e.config, r = e.d3;
            return function () {
                var i, a, o, s, l, c, u, h, d, f, p, g = t.targets, y = t.flow, _ = t.drawBar, v = t.drawLine,
                    m = t.drawArea, x = t.cx, w = t.cy, b = t.xv, S = t.xForText, T = t.yForText, A = t.duration,
                    C = y.index, P = y.length, D = e.getValueOnIndex(e.data.targets[0].values, C),
                    L = e.getValueOnIndex(e.data.targets[0].values, C + P), I = e.x.domain(), E = y.duration || A,
                    k = y.done || function () {
                    }, V = e.generateWait();
                e.flowing = !0, e.data.targets.forEach((function (t) {
                    t.values.splice(0, P)
                })), o = e.updateXDomain(g, !0, !0), e.updateXGrid && e.updateXGrid(!0), s = e.xgrid || r.selectAll([]), l = e.xgridLines || r.selectAll([]), c = e.mainRegion || r.selectAll([]), u = e.mainText || r.selectAll([]), h = e.mainBar || r.selectAll([]), d = e.mainLine || r.selectAll([]), f = e.mainArea || r.selectAll([]), p = e.mainCircle || r.selectAll([]), y.orgDataCount ? i = 1 === y.orgDataCount || (D && D.x) === (L && L.x) || e.isTimeSeries() ? e.x(I[0]) - e.x(o[0]) : e.x(D.x) - e.x(L.x) : 1 !== e.data.targets[0].values.length ? i = e.x(I[0]) - e.x(o[0]) : e.isTimeSeries() ? (D = e.getValueOnIndex(e.data.targets[0].values, 0), L = e.getValueOnIndex(e.data.targets[0].values, e.data.targets[0].values.length - 1), i = e.x(D.x) - e.x(L.x)) : i = Ts(o) / 2, a = "translate(" + i + ",0) scale(" + Ts(I) / Ts(o) + ",1)", e.hideXGridFocus();
                var R = r.transition().ease(r.easeLinear).duration(E);
                V.add(e.xAxis(e.axes.x, R)), V.add(h.transition(R).attr("transform", a)), V.add(d.transition(R).attr("transform", a)), V.add(f.transition(R).attr("transform", a)), V.add(p.transition(R).attr("transform", a)), V.add(u.transition(R).attr("transform", a)), V.add(c.filter(e.isRegionOnX).transition(R).attr("transform", a)), V.add(s.transition(R).attr("transform", a)), V.add(l.transition(R).attr("transform", a)), V((function () {
                    var t, r = [], i = [];
                    if (P) {
                        for (t = 0; t < P; t++) r.push("." + Hs.shape + "-" + (C + t)), i.push("." + Hs.text + "-" + (C + t));
                        e.svg.selectAll("." + Hs.shapes).selectAll(r).remove(), e.svg.selectAll("." + Hs.texts).selectAll(i).remove(), e.svg.select("." + Hs.xgrid).remove()
                    }
                    s.attr("transform", null).attr("x1", e.xgridAttr.x1).attr("x2", e.xgridAttr.x2).attr("y1", e.xgridAttr.y1).attr("y2", e.xgridAttr.y2).style("opacity", e.xgridAttr.opacity), l.attr("transform", null), l.select("line").attr("x1", n.axis_rotated ? 0 : b).attr("x2", n.axis_rotated ? e.width : b), l.select("text").attr("x", n.axis_rotated ? e.width : 0).attr("y", b), h.attr("transform", null).attr("d", _), d.attr("transform", null).attr("d", v), f.attr("transform", null).attr("d", m), p.attr("transform", null).attr("cx", x).attr("cy", w), u.attr("transform", null).attr("x", S).attr("y", T).style("fill-opacity", e.opacityForText.bind(e)), c.attr("transform", null), c.filter(e.isRegionOnX).attr("x", e.regionX.bind(e)).attr("width", e.regionWidth.bind(e)), k(), e.flowing = !1
                }))
            }
        }, ws.prototype.focus = function (t) {
            var e, n = this.internal;
            t = n.mapToTargetIds(t), e = n.svg.selectAll(n.selectorTargets(t.filter(n.isTargetToShow, n))), this.revert(), this.defocus(), e.classed(Hs.focused, !0).classed(Hs.defocused, !1), n.hasArcType() && n.expandArc(t), n.toggleFocusLegend(t, !0), n.focusedTargetIds = t, n.defocusedTargetIds = n.defocusedTargetIds.filter((function (e) {
                return t.indexOf(e) < 0
            }))
        }, ws.prototype.defocus = function (t) {
            var e = this.internal;
            t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow, e))).classed(Hs.focused, !1).classed(Hs.defocused, !0), e.hasArcType() && e.unexpandArc(t), e.toggleFocusLegend(t, !1), e.focusedTargetIds = e.focusedTargetIds.filter((function (e) {
                return t.indexOf(e) < 0
            })), e.defocusedTargetIds = t
        }, ws.prototype.revert = function (t) {
            var e = this.internal;
            t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t)).classed(Hs.focused, !1).classed(Hs.defocused, !1), e.hasArcType() && e.unexpandArc(t), e.config.legend_show && (e.showLegend(t.filter(e.isLegendToShow.bind(e))), e.legend.selectAll(e.selectorLegends(t)).filter((function () {
                return e.d3.select(this).classed(Hs.legendItemFocused)
            })).classed(Hs.legendItemFocused, !1)), e.focusedTargetIds = [], e.defocusedTargetIds = []
        }, ws.prototype.xgrids = function (t) {
            var e = this.internal, n = e.config;
            return t ? (n.grid_x_lines = t, e.redrawWithoutRescale(), n.grid_x_lines) : n.grid_x_lines
        }, ws.prototype.xgrids.add = function (t) {
            var e = this.internal;
            return this.xgrids(e.config.grid_x_lines.concat(t || []))
        }, ws.prototype.xgrids.remove = function (t) {
            this.internal.removeGridLines(t, !0)
        }, ws.prototype.ygrids = function (t) {
            var e = this.internal, n = e.config;
            return t ? (n.grid_y_lines = t, e.redrawWithoutRescale(), n.grid_y_lines) : n.grid_y_lines
        }, ws.prototype.ygrids.add = function (t) {
            var e = this.internal;
            return this.ygrids(e.config.grid_y_lines.concat(t || []))
        }, ws.prototype.ygrids.remove = function (t) {
            this.internal.removeGridLines(t, !1)
        }, ws.prototype.groups = function (t) {
            var e = this.internal, n = e.config;
            return Rs(t) || (n.data_groups = t, e.redraw()), n.data_groups
        }, ws.prototype.legend = function () {
        }, ws.prototype.legend.show = function (t) {
            var e = this.internal;
            e.showLegend(e.mapToTargetIds(t)), e.updateAndRedraw({withLegend: !0})
        }, ws.prototype.legend.hide = function (t) {
            var e = this.internal;
            e.hideLegend(e.mapToTargetIds(t)), e.updateAndRedraw({withLegend: !1})
        }, ws.prototype.legend.position = function (t) {
            var e = this.internal;
            e.config.legend_position = t, e.isLegendRight = "right" === e.config.legend_position, e.updateAndRedraw({withLegend: !0})
        }, ws.prototype.load = function (t) {
            var e = this.internal, n = e.config;
            t.xs && e.addXs(t.xs), "names" in t && ws.prototype.data.names.bind(this)(t.names), "classes" in t && Object.keys(t.classes).forEach((function (e) {
                n.data_classes[e] = t.classes[e]
            })), "categories" in t && e.isCategorized() && (n.axis_x_categories = t.categories), "axes" in t && Object.keys(t.axes).forEach((function (e) {
                n.data_axes[e] = t.axes[e]
            })), "colors" in t && Object.keys(t.colors).forEach((function (e) {
                n.data_colors[e] = t.colors[e]
            })), "cacheIds" in t && e.hasCaches(t.cacheIds) ? e.load(e.getCaches(t.cacheIds), t.done) : t.unload ? e.unload(e.mapToTargetIds(!0 === t.unload ? null : t.unload), (function () {
                e.loadFromArgs(t)
            })) : e.loadFromArgs(t)
        }, ws.prototype.unload = function (t) {
            var e = this.internal;
            (t = t || {}) instanceof Array ? t = {ids: t} : "string" == typeof t && (t = {ids: [t]}), e.unload(e.mapToTargetIds(t.ids), (function () {
                e.redraw({withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0}), t.done && t.done()
            }))
        }, ws.prototype.pie = function () {
        }, ws.prototype.pie.padAngle = function (t) {
            if (void 0 === t) return this.internal.config.pie_padAngle;
            this.internal.config.pie_padAngle = t, this.flush()
        }, ws.prototype.regions = function (t) {
            var e = this.internal, n = e.config;
            return t ? (n.regions = t, e.redrawWithoutRescale(), n.regions) : n.regions
        }, ws.prototype.regions.add = function (t) {
            var e = this.internal, n = e.config;
            return t ? (n.regions = n.regions.concat(t), e.redrawWithoutRescale(), n.regions) : n.regions
        }, ws.prototype.regions.remove = function (t) {
            var e, n, r, i = this.internal, a = i.config;
            return e = As(t = t || {}, "duration", a.transition_duration), n = As(t, "classes", [Hs.region]), r = i.main.select("." + Hs.regions).selectAll(n.map((function (t) {
                return "." + t
            }))), (e ? r.transition().duration(e) : r).style("opacity", 0).remove(), a.regions = a.regions.filter((function (t) {
                var e = !1;
                return !t.class || (t.class.split(" ").forEach((function (t) {
                    n.indexOf(t) >= 0 && (e = !0)
                })), !e)
            })), a.regions
        }, ws.prototype.selected = function (t) {
            var e = this.internal, n = e.d3;
            return e.main.selectAll("." + Hs.shapes + e.getTargetSelectorSuffix(t)).selectAll("." + Hs.shape).filter((function () {
                return n.select(this).classed(Hs.SELECTED)
            })).nodes().map((function (t) {
                var e = t.__data__;
                return e.data ? e.data : e
            }))
        }, ws.prototype.select = function (t, e, n) {
            var r = this.internal, i = r.d3, a = r.config;
            a.data_selection_enabled && r.main.selectAll("." + Hs.shapes).selectAll("." + Hs.shape).each((function (o, s) {
                var l = i.select(this), c = o.data ? o.data.id : o.id, u = r.getToggle(this, o).bind(r),
                    h = a.data_selection_grouped || !t || t.indexOf(c) >= 0, d = !e || e.indexOf(s) >= 0,
                    f = l.classed(Hs.SELECTED);
                l.classed(Hs.line) || l.classed(Hs.area) || (h && d ? a.data_selection_isselectable(o) && !f && u(!0, l.classed(Hs.SELECTED, !0), o, s) : Ls(n) && n && f && u(!1, l.classed(Hs.SELECTED, !1), o, s))
            }))
        }, ws.prototype.unselect = function (t, e) {
            var n = this.internal, r = n.d3, i = n.config;
            i.data_selection_enabled && n.main.selectAll("." + Hs.shapes).selectAll("." + Hs.shape).each((function (a, o) {
                var s = r.select(this), l = a.data ? a.data.id : a.id, c = n.getToggle(this, a).bind(n),
                    u = i.data_selection_grouped || !t || t.indexOf(l) >= 0, h = !e || e.indexOf(o) >= 0,
                    d = s.classed(Hs.SELECTED);
                s.classed(Hs.line) || s.classed(Hs.area) || u && h && i.data_selection_isselectable(a) && d && c(!1, s.classed(Hs.SELECTED, !1), a, o)
            }))
        }, ws.prototype.show = function (t, e) {
            var n, r = this.internal;
            t = r.mapToTargetIds(t), e = e || {}, r.removeHiddenTargetIds(t), (n = r.svg.selectAll(r.selectorTargets(t))).transition().style("display", Fs() ? "block" : "initial", "important").style("opacity", 1, "important").call(r.endall, (function () {
                n.style("opacity", null).style("opacity", 1)
            })), e.withLegend && r.showLegend(t), r.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            })
        }, ws.prototype.hide = function (t, e) {
            var n, r = this.internal;
            t = r.mapToTargetIds(t), e = e || {}, r.addHiddenTargetIds(t), (n = r.svg.selectAll(r.selectorTargets(t))).transition().style("opacity", 0, "important").call(r.endall, (function () {
                n.style("opacity", null).style("opacity", 0), n.style("display", "none")
            })), e.withLegend && r.hideLegend(t), r.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            })
        }, ws.prototype.toggle = function (t, e) {
            var n = this, r = this.internal;
            r.mapToTargetIds(t).forEach((function (t) {
                r.isTargetToShow(t) ? n.hide(t, e) : n.show(t, e)
            }))
        }, ws.prototype.subchart = function () {
        }, ws.prototype.subchart.isShown = function () {
            return this.internal.config.subchart_show
        }, ws.prototype.subchart.show = function () {
            var t = this.internal;
            t.config.subchart_show || (t.config.subchart_show = !0, t.initSubchart(), t.updateDimension(), t.initSubchartBrush(), t.updateTargetsForSubchart(t.getTargets()), t.mapToIds(t.data.targets).forEach((function (e) {
                t.withoutFadeIn[e] = !1
            })), t.updateAndRedraw(), t.showTargets())
        }, ws.prototype.subchart.hide = function () {
            var t = this.internal;
            t.config.subchart_show && (t.config.subchart_show = !1, t.removeSubchart(), t.redraw())
        },ws.prototype.tooltip = function () {
        },ws.prototype.tooltip.show = function (t) {
            var e, n, r = this.internal, i = {};
            t.mouse ? i = t.mouse : (t.data ? n = t.data : void 0 !== t.x && (e = t.id ? r.data.targets.filter((function (e) {
                return e.id === t.id
            })) : r.data.targets, n = r.filterByX(e, t.x).slice(0, 1)[0]), i = n ? r.getMousePosition(n) : null), r.dispatchEvent("mousemove", i), r.config.tooltip_onshow.call(r, n)
        },ws.prototype.tooltip.hide = function () {
            this.internal.dispatchEvent("mouseout", 0), this.internal.config.tooltip_onhide.call(this)
        },ws.prototype.transform = function (t, e) {
            var n = this.internal, r = ["pie", "donut"].indexOf(t) >= 0 ? {withTransform: !0} : null;
            n.transformTo(e, t, r)
        },xs.prototype.transformTo = function (t, e, n) {
            var r = this, i = !r.hasArcType(), a = n || {withTransitionForAxis: i};
            a.withTransitionForTransform = !1, r.transiting = !1, r.setTargetType(t, e), r.updateTargets(r.data.targets), r.updateAndRedraw(a)
        },ws.prototype.x = function (t) {
            var e = this.internal;
            return arguments.length && (e.updateTargetX(e.data.targets, t), e.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })), e.data.xs
        },ws.prototype.xs = function (t) {
            var e = this.internal;
            return arguments.length && (e.updateTargetXs(e.data.targets, t), e.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })), e.data.xs
        },ws.prototype.zoom = function (t) {
            var e = this.internal;
            return t ? (e.isTimeSeries() && (t = t.map((function (t) {
                return e.parseDate(t)
            }))), e.config.subchart_show ? e.brush.selectionAsValue(t, !0) : (e.updateXDomain(null, !0, !1, !1, t), e.redraw({
                withY: e.config.zoom_rescale,
                withSubchart: !1
            })), e.config.zoom_onzoom.call(this, e.x.orgDomain()), t) : e.x.domain()
        },ws.prototype.zoom.enable = function (t) {
            var e = this.internal;
            e.config.zoom_enabled = t, e.updateAndRedraw()
        },ws.prototype.unzoom = function () {
            var t = this.internal;
            t.config.subchart_show ? t.brush.clear() : (t.updateXDomain(null, !0, !1, !1, t.subX.domain()), t.redraw({
                withY: t.config.zoom_rescale,
                withSubchart: !1
            }))
        },ws.prototype.zoom.max = function (t) {
            var e = this.internal, n = e.config, r = e.d3;
            if (0 !== t && !t) return n.zoom_x_max;
            n.zoom_x_max = r.max([e.orgXDomain[1], t])
        },ws.prototype.zoom.min = function (t) {
            var e = this.internal, n = e.config, r = e.d3;
            if (0 !== t && !t) return n.zoom_x_min;
            n.zoom_x_min = r.min([e.orgXDomain[0], t])
        },ws.prototype.zoom.range = function (t) {
            if (!arguments.length) return {max: this.domain.max(), min: this.domain.min()};
            Ls(t.max) && this.domain.max(t.max), Ls(t.min) && this.domain.min(t.min)
        },xs.prototype.initPie = function () {
            var t = this, e = t.d3;
            t.pie = e.pie().padAngle(this.getPadAngle.bind(this)).value((function (t) {
                return t.values.reduce((function (t, e) {
                    return t + e.value
                }), 0)
            }));
            var n = t.getOrderFunction();
            if (n && (t.isOrderAsc() || t.isOrderDesc())) {
                var r = n;
                n = function (t, e) {
                    return -1 * r(t, e)
                }
            }
            t.pie.sort(n || null)
        },xs.prototype.updateRadius = function () {
            var t = this, e = t.config, n = e.gauge_width || e.donut_width,
                r = t.filterTargetsToShow(t.data.targets).length * t.config.gauge_arcs_minWidth;
            t.radiusExpanded = Math.min(t.arcWidth, t.arcHeight) / 2 * (t.hasType("gauge") ? .85 : 1), t.radius = .95 * t.radiusExpanded, t.innerRadiusRatio = n ? (t.radius - n) / t.radius : .6, t.innerRadius = t.hasType("donut") || t.hasType("gauge") ? t.radius * t.innerRadiusRatio : 0, t.gaugeArcWidth = n || (r <= t.radius - t.innerRadius ? t.radius - t.innerRadius : r <= t.radius ? r : t.radius)
        },xs.prototype.getPadAngle = function () {
            return this.hasType("pie") ? this.config.pie_padAngle || 0 : this.hasType("donut") && this.config.donut_padAngle || 0
        },xs.prototype.updateArc = function () {
            var t = this;
            t.svgArc = t.getSvgArc(), t.svgArcExpanded = t.getSvgArcExpanded(), t.svgArcExpandedSub = t.getSvgArcExpanded(.98)
        },xs.prototype.updateAngle = function (t) {
            var e, n, r, i, a = this, o = a.config, s = !1, l = 0;
            return o ? (a.pie(a.filterTargetsToShow(a.data.targets)).forEach((function (e) {
                s || e.data.id !== t.data.id || (s = !0, (t = e).index = l), l++
            })), isNaN(t.startAngle) && (t.startAngle = 0), isNaN(t.endAngle) && (t.endAngle = t.startAngle), a.isGaugeType(t.data) && (e = o.gauge_min, n = o.gauge_max, r = Math.PI * (o.gauge_fullCircle ? 2 : 1) / (n - e), i = t.value < e ? 0 : t.value < n ? t.value - e : n - e, t.startAngle = o.gauge_startingAngle, t.endAngle = t.startAngle + r * i), s ? t : null) : null
        },xs.prototype.getSvgArc = function () {
            var t = this, e = t.hasType("gauge"), n = t.gaugeArcWidth / t.filterTargetsToShow(t.data.targets).length,
                r = t.d3.arc().outerRadius((function (r) {
                    return e ? t.radius - n * r.index : t.radius
                })).innerRadius((function (r) {
                    return e ? t.radius - n * (r.index + 1) : t.innerRadius
                })), i = function (e, n) {
                    var i;
                    return n ? r(e) : (i = t.updateAngle(e)) ? r(i) : "M 0 0"
                };
            return i.centroid = r.centroid, i
        },xs.prototype.getSvgArcExpanded = function (t) {
            t = t || 1;
            var e = this, n = e.hasType("gauge"), r = e.gaugeArcWidth / e.filterTargetsToShow(e.data.targets).length,
                i = Math.min(e.radiusExpanded * t - e.radius, .8 * r - 100 * (1 - t)),
                a = e.d3.arc().outerRadius((function (a) {
                    return n ? e.radius - r * a.index + i : e.radiusExpanded * t
                })).innerRadius((function (t) {
                    return n ? e.radius - r * (t.index + 1) : e.innerRadius
                }));
            return function (t) {
                var n = e.updateAngle(t);
                return n ? a(n) : "M 0 0"
            }
        },xs.prototype.getArc = function (t, e, n) {
            return n || this.isArcType(t.data) ? this.svgArc(t, e) : "M 0 0"
        },xs.prototype.transformForArcLabel = function (t) {
            var e, n, r, i, a, o = this, s = o.config, l = o.updateAngle(t), c = "", u = o.hasType("gauge");
            if (l && !u) e = this.svgArc.centroid(l), n = isNaN(e[0]) ? 0 : e[0], r = isNaN(e[1]) ? 0 : e[1], i = Math.sqrt(n * n + r * r), c = "translate(" + n * (a = o.hasType("donut") && s.donut_label_ratio ? Es(s.donut_label_ratio) ? s.donut_label_ratio(t, o.radius, i) : s.donut_label_ratio : o.hasType("pie") && s.pie_label_ratio ? Es(s.pie_label_ratio) ? s.pie_label_ratio(t, o.radius, i) : s.pie_label_ratio : o.radius && i ? (36 / o.radius > .375 ? 1.175 - 36 / o.radius : .8) * o.radius / i : 0) + "," + r * a + ")"; else if (l && u && o.filterTargetsToShow(o.data.targets).length > 1) {
                var h = Math.sin(l.endAngle - Math.PI / 2);
                c = "translate(" + (n = Math.cos(l.endAngle - Math.PI / 2) * (o.radiusExpanded + 25)) + "," + (r = h * (o.radiusExpanded + 15 - Math.abs(10 * h)) + 3) + ")"
            }
            return c
        },xs.prototype.getArcRatio = function (t) {
            return this.getRatio("arc", t)
        },xs.prototype.convertToArcData = function (t) {
            return this.addName({id: t.data.id, value: t.value, ratio: this.getRatio("arc", t), index: t.index})
        },xs.prototype.textForArcLabel = function (t) {
            var e, n, r, i, a, o = this;
            return o.shouldShowArcLabel() ? (n = (e = o.updateAngle(t)) ? e.value : null, r = o.getRatio("arc", e), i = t.data.id, o.hasType("gauge") || o.meetsArcLabelThreshold(r) ? (a = o.getArcLabelFormat()) ? a(n, r, i) : o.defaultArcValueFormat(n, r) : "") : ""
        },xs.prototype.textForGaugeMinMax = function (t, e) {
            var n = this.getGaugeLabelExtents();
            return n ? n(t, e) : t
        },xs.prototype.expandArc = function (t) {
            var e, n = this;
            n.transiting ? e = window.setInterval((function () {
                n.transiting || (window.clearInterval(e), n.legend.selectAll(".c3-legend-item-focused").size() > 0 && n.expandArc(t))
            }), 10) : (t = n.mapToTargetIds(t), n.svg.selectAll(n.selectorTargets(t, "." + Hs.chartArc)).each((function (t) {
                n.shouldExpand(t.data.id) && n.d3.select(this).selectAll("path").transition().duration(n.expandDuration(t.data.id)).attr("d", n.svgArcExpanded).transition().duration(2 * n.expandDuration(t.data.id)).attr("d", n.svgArcExpandedSub).each((function (t) {
                    n.isDonutType(t.data)
                }))
            })))
        },xs.prototype.unexpandArc = function (t) {
            var e = this;
            e.transiting || (t = e.mapToTargetIds(t), e.svg.selectAll(e.selectorTargets(t, "." + Hs.chartArc)).selectAll("path").transition().duration((function (t) {
                return e.expandDuration(t.data.id)
            })).attr("d", e.svgArc), e.svg.selectAll("." + Hs.arc))
        },xs.prototype.expandDuration = function (t) {
            var e = this.config;
            return this.isDonutType(t) ? e.donut_expand_duration : this.isGaugeType(t) ? e.gauge_expand_duration : this.isPieType(t) ? e.pie_expand_duration : 50
        },xs.prototype.shouldExpand = function (t) {
            var e = this.config;
            return this.isDonutType(t) && e.donut_expand || this.isGaugeType(t) && e.gauge_expand || this.isPieType(t) && e.pie_expand
        },xs.prototype.shouldShowArcLabel = function () {
            var t = this.config, e = !0;
            return this.hasType("donut") ? e = t.donut_label_show : this.hasType("pie") && (e = t.pie_label_show), e
        },xs.prototype.meetsArcLabelThreshold = function (t) {
            var e = this.config;
            return t >= (this.hasType("donut") ? e.donut_label_threshold : e.pie_label_threshold)
        },xs.prototype.getArcLabelFormat = function () {
            var t = this.config, e = t.pie_label_format;
            return this.hasType("gauge") ? e = t.gauge_label_format : this.hasType("donut") && (e = t.donut_label_format), e
        },xs.prototype.getGaugeLabelExtents = function () {
            return this.config.gauge_label_extents
        },xs.prototype.getArcTitle = function () {
            return this.hasType("donut") ? this.config.donut_title : ""
        },xs.prototype.updateTargetsForArc = function (t) {
            var e, n = this, r = n.main, i = n.classChartArc.bind(n), a = n.classArcs.bind(n), o = n.classFocus.bind(n);
            (e = r.select("." + Hs.chartArcs).selectAll("." + Hs.chartArc).data(n.pie(t)).attr("class", (function (t) {
                return i(t) + o(t.data)
            })).enter().append("g").attr("class", i)).append("g").attr("class", a), e.append("text").attr("dy", n.hasType("gauge") ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none")
        },xs.prototype.initArc = function () {
            var t = this;
            t.arcs = t.main.select("." + Hs.chart).append("g").attr("class", Hs.chartArcs).attr("transform", t.getTranslate("arc")), t.arcs.append("text").attr("class", Hs.chartArcsTitle).style("text-anchor", "middle").text(t.getArcTitle())
        },xs.prototype.redrawArc = function (t, e, n) {
            var r, i, a, o, s = this, l = s.d3, c = s.config, u = s.main, h = s.hasType("gauge");
            if (i = (r = u.selectAll("." + Hs.arcs).selectAll("." + Hs.arc).data(s.arcData.bind(s))).enter().append("path").attr("class", s.classArc.bind(s)).style("fill", (function (t) {
                return s.color(t.data)
            })).style("cursor", (function (t) {
                return c.interaction_enabled && c.data_selection_isselectable(t) ? "pointer" : null
            })).each((function (t) {
                s.isGaugeType(t.data) && (t.startAngle = t.endAngle = c.gauge_startingAngle), this._current = t
            })).merge(r), h && (o = (a = u.selectAll("." + Hs.arcs).selectAll("." + Hs.arcLabelLine).data(s.arcData.bind(s))).enter().append("rect").attr("class", (function (t) {
                return Hs.arcLabelLine + " " + Hs.target + " " + Hs.target + "-" + t.data.id
            })).merge(a), 1 === s.filterTargetsToShow(s.data.targets).length ? o.style("display", "none") : o.style("fill", (function (t) {
                return s.levelColor ? s.levelColor(t.data.values.reduce((function (t, e) {
                    return t + e.value
                }), 0)) : s.color(t.data)
            })).style("display", c.gauge_labelLine_show ? "" : "none").each((function (t) {
                var e = 0, n = 0, r = 0, i = "";
                if (s.hiddenTargetIds.indexOf(t.data.id) < 0) {
                    var a = s.updateAngle(t),
                        o = s.gaugeArcWidth / s.filterTargetsToShow(s.data.targets).length * (a.index + 1),
                        c = a.endAngle - Math.PI / 2, u = s.radius - o, h = c - (0 === u ? 0 : 1 / u);
                    e = s.radiusExpanded - s.radius + o, n = Math.cos(h) * u, r = Math.sin(h) * u, i = "rotate(" + 180 * c / Math.PI + ", " + n + ", " + r + ")"
                }
                l.select(this).attr("x", n).attr("y", r).attr("width", e).attr("height", 2).attr("transform", i).style("stroke-dasharray", "0, " + (e + 2) + ", 0")
            }))), i.attr("transform", (function (t) {
                return !s.isGaugeType(t.data) && n ? "scale(0)" : ""
            })).on("mouseover", c.interaction_enabled ? function (t) {
                var e, n;
                s.transiting || (e = s.updateAngle(t)) && (n = s.convertToArcData(e), s.expandArc(e.data.id), s.api.focus(e.data.id), s.toggleFocusLegend(e.data.id, !0), s.config.data_onmouseover(n, this))
            } : null).on("mousemove", c.interaction_enabled ? function (t) {
                var e, n = s.updateAngle(t);
                n && (e = [s.convertToArcData(n)], s.showTooltip(e, this))
            } : null).on("mouseout", c.interaction_enabled ? function (t) {
                var e, n;
                s.transiting || (e = s.updateAngle(t)) && (n = s.convertToArcData(e), s.unexpandArc(e.data.id), s.api.revert(), s.revertLegend(), s.hideTooltip(), s.config.data_onmouseout(n, this))
            } : null).on("click", c.interaction_enabled ? function (t, e) {
                var n, r = s.updateAngle(t);
                r && (n = s.convertToArcData(r), s.toggleShape && s.toggleShape(this, n, e), s.config.data_onclick.call(s.api, n, this))
            } : null).each((function () {
                s.transiting = !0
            })).transition().duration(t).attrTween("d", (function (t) {
                var e, n = s.updateAngle(t);
                return n ? (isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle), e = l.interpolate(this._current, n), this._current = e(0), function (n) {
                    if (null === s.config) return "M 0 0";
                    var r = e(n);
                    return r.data = t.data, s.getArc(r, !0)
                }) : function () {
                    return "M 0 0"
                }
            })).attr("transform", n ? "scale(1)" : "").style("fill", (function (t) {
                return s.levelColor ? s.levelColor(t.data.values.reduce((function (t, e) {
                    return t + e.value
                }), 0)) : s.color(t.data.id)
            })).call(s.endall, (function () {
                s.transiting = !1
            })), r.exit().transition().duration(e).style("opacity", 0).remove(), u.selectAll("." + Hs.chartArc).select("text").style("opacity", 0).attr("class", (function (t) {
                return s.isGaugeType(t.data) ? Hs.gaugeValue : ""
            })).text(s.textForArcLabel.bind(s)).attr("transform", s.transformForArcLabel.bind(s)).style("font-size", (function (t) {
                return s.isGaugeType(t.data) && 1 === s.filterTargetsToShow(s.data.targets).length ? Math.round(s.radius / 5) + "px" : ""
            })).transition().duration(t).style("opacity", (function (t) {
                return s.isTargetToShow(t.data.id) && s.isArcType(t.data) ? 1 : 0
            })), u.select("." + Hs.chartArcsTitle).style("opacity", s.hasType("donut") || h ? 1 : 0), h) {
                var d = 0,
                    f = s.arcs.select("g." + Hs.chartArcsBackground).selectAll("path." + Hs.chartArcsBackground).data(s.data.targets);
                f.enter().append("path").attr("class", (function (t, e) {
                    return Hs.chartArcsBackground + " " + Hs.chartArcsBackground + "-" + e
                })).merge(f).attr("d", (function (t) {
                    if (s.hiddenTargetIds.indexOf(t.id) >= 0) return "M 0 0";
                    var e = {
                        data: [{value: c.gauge_max}],
                        startAngle: c.gauge_startingAngle,
                        endAngle: -1 * c.gauge_startingAngle * (c.gauge_fullCircle ? Math.PI : 1),
                        index: d++
                    };
                    return s.getArc(e, !0, !0)
                })), f.exit().remove(), s.arcs.select("." + Hs.chartArcsGaugeUnit).attr("dy", ".75em").text(c.gauge_label_show ? c.gauge_units : ""), s.arcs.select("." + Hs.chartArcsGaugeMin).attr("dx", -1 * (s.innerRadius + (s.radius - s.innerRadius) / (c.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(c.gauge_label_show ? s.textForGaugeMinMax(c.gauge_min, !1) : ""), s.arcs.select("." + Hs.chartArcsGaugeMax).attr("dx", s.innerRadius + (s.radius - s.innerRadius) / (c.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(c.gauge_label_show ? s.textForGaugeMinMax(c.gauge_max, !0) : "")
            }
        },xs.prototype.initGauge = function () {
            var t = this.arcs;
            this.hasType("gauge") && (t.append("g").attr("class", Hs.chartArcsBackground), t.append("text").attr("class", Hs.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", Hs.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), t.append("text").attr("class", Hs.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"))
        },xs.prototype.getGaugeLabelHeight = function () {
            return this.config.gauge_label_show ? 20 : 0
        },xs.prototype.addToCache = function (t, e) {
            this.cache["$".concat(t)] = e
        },xs.prototype.getFromCache = function (t) {
            return this.cache["$".concat(t)]
        },xs.prototype.resetCache = function () {
            var t = this;
            Object.keys(this.cache).filter((function (t) {
                return /^\$/.test(t)
            })).forEach((function (e) {
                delete t.cache[e]
            }))
        },xs.prototype.hasCaches = function (t) {
            for (var e = 0; e < t.length; e++) if (!(t[e] in this.cache)) return !1;
            return !0
        },xs.prototype.addCache = function (t, e) {
            this.cache[t] = this.cloneTarget(e)
        },xs.prototype.getCaches = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e++) t[e] in this.cache && n.push(this.cloneTarget(this.cache[t[e]]));
            return n
        },xs.prototype.categoryName = function (t) {
            var e = this.config;
            return t < e.axis_x_categories.length ? e.axis_x_categories[t] : t
        },xs.prototype.generateTargetClass = function (t) {
            return t || 0 === t ? ("-" + t).replace(/\s/g, "-") : ""
        },xs.prototype.generateClass = function (t, e) {
            return " " + t + " " + t + this.generateTargetClass(e)
        },xs.prototype.classText = function (t) {
            return this.generateClass(Hs.text, t.index)
        },xs.prototype.classTexts = function (t) {
            return this.generateClass(Hs.texts, t.id)
        },xs.prototype.classShape = function (t) {
            return this.generateClass(Hs.shape, t.index)
        },xs.prototype.classShapes = function (t) {
            return this.generateClass(Hs.shapes, t.id)
        },xs.prototype.classLine = function (t) {
            return this.classShape(t) + this.generateClass(Hs.line, t.id)
        },xs.prototype.classLines = function (t) {
            return this.classShapes(t) + this.generateClass(Hs.lines, t.id)
        },xs.prototype.classCircle = function (t) {
            return this.classShape(t) + this.generateClass(Hs.circle, t.index)
        },xs.prototype.classCircles = function (t) {
            return this.classShapes(t) + this.generateClass(Hs.circles, t.id)
        },xs.prototype.classBar = function (t) {
            return this.classShape(t) + this.generateClass(Hs.bar, t.index)
        },xs.prototype.classBars = function (t) {
            return this.classShapes(t) + this.generateClass(Hs.bars, t.id)
        },xs.prototype.classArc = function (t) {
            return this.classShape(t.data) + this.generateClass(Hs.arc, t.data.id)
        },xs.prototype.classArcs = function (t) {
            return this.classShapes(t.data) + this.generateClass(Hs.arcs, t.data.id)
        },xs.prototype.classArea = function (t) {
            return this.classShape(t) + this.generateClass(Hs.area, t.id)
        },xs.prototype.classAreas = function (t) {
            return this.classShapes(t) + this.generateClass(Hs.areas, t.id)
        },xs.prototype.classRegion = function (t, e) {
            return this.generateClass(Hs.region, e) + " " + ("class" in t ? t.class : "")
        },xs.prototype.classEvent = function (t) {
            return this.generateClass(Hs.eventRect, t.index)
        },xs.prototype.classTarget = function (t) {
            var e = this.config.data_classes[t], n = "";
            return e && (n = " " + Hs.target + "-" + e), this.generateClass(Hs.target, t) + n
        },xs.prototype.classFocus = function (t) {
            return this.classFocused(t) + this.classDefocused(t)
        },xs.prototype.classFocused = function (t) {
            return " " + (this.focusedTargetIds.indexOf(t.id) >= 0 ? Hs.focused : "")
        },xs.prototype.classDefocused = function (t) {
            return " " + (this.defocusedTargetIds.indexOf(t.id) >= 0 ? Hs.defocused : "")
        },xs.prototype.classChartText = function (t) {
            return Hs.chartText + this.classTarget(t.id)
        },xs.prototype.classChartLine = function (t) {
            return Hs.chartLine + this.classTarget(t.id)
        },xs.prototype.classChartBar = function (t) {
            return Hs.chartBar + this.classTarget(t.id)
        },xs.prototype.classChartArc = function (t) {
            return Hs.chartArc + this.classTarget(t.data.id)
        },xs.prototype.getTargetSelectorSuffix = function (t) {
            var e = this.generateTargetClass(t);
            return window.CSS && window.CSS.escape ? window.CSS.escape(e) : e.replace(/([?!@#$%^&*()=+,.<>'":;\[\]\/|~`{}\\])/g, "\\$1")
        },xs.prototype.selectorTarget = function (t, e) {
            return (e || "") + "." + Hs.target + this.getTargetSelectorSuffix(t)
        },xs.prototype.selectorTargets = function (t, e) {
            var n = this;
            return (t = t || []).length ? t.map((function (t) {
                return n.selectorTarget(t, e)
            })) : null
        },xs.prototype.selectorLegend = function (t) {
            return "." + Hs.legendItem + this.getTargetSelectorSuffix(t)
        },xs.prototype.selectorLegends = function (t) {
            var e = this;
            return t && t.length ? t.map((function (t) {
                return e.selectorLegend(t)
            })) : null
        },xs.prototype.getClipPath = function (t) {
            return "url(" + (Fs(9) ? "" : document.URL.split("#")[0]) + "#" + t + ")"
        },xs.prototype.appendClip = function (t, e) {
            return t.append("clipPath").attr("id", e).append("rect")
        },xs.prototype.getAxisClipX = function (t) {
            var e = Math.max(30, this.margin.left);
            return t ? -(1 + e) : -(e - 1)
        },xs.prototype.getAxisClipY = function (t) {
            return t ? -20 : -this.margin.top
        },xs.prototype.getXAxisClipX = function () {
            return this.getAxisClipX(!this.config.axis_rotated)
        },xs.prototype.getXAxisClipY = function () {
            return this.getAxisClipY(!this.config.axis_rotated)
        },xs.prototype.getYAxisClipX = function () {
            return this.config.axis_y_inner ? -1 : this.getAxisClipX(this.config.axis_rotated)
        },xs.prototype.getYAxisClipY = function () {
            return this.getAxisClipY(this.config.axis_rotated)
        },xs.prototype.getAxisClipWidth = function (t) {
            var e = Math.max(30, this.margin.left), n = Math.max(30, this.margin.right);
            return t ? this.width + 2 + e + n : this.margin.left + 20
        },xs.prototype.getAxisClipHeight = function (t) {
            return (t ? this.margin.bottom : this.margin.top + this.height) + 20
        },xs.prototype.getXAxisClipWidth = function () {
            return this.getAxisClipWidth(!this.config.axis_rotated)
        },xs.prototype.getXAxisClipHeight = function () {
            return this.getAxisClipHeight(!this.config.axis_rotated)
        },xs.prototype.getYAxisClipWidth = function () {
            return this.getAxisClipWidth(this.config.axis_rotated) + (this.config.axis_y_inner ? 20 : 0)
        },xs.prototype.getYAxisClipHeight = function () {
            return this.getAxisClipHeight(this.config.axis_rotated)
        },xs.prototype.generateColor = function () {
            var t = this.config, e = this.d3, n = t.data_colors,
                r = Os(t.color_pattern) ? t.color_pattern : e.schemeCategory10, i = t.data_color, a = [];
            return function (t) {
                var e, o = t.id || t.data && t.data.id || t;
                return n[o] instanceof Function ? e = n[o](t) : n[o] ? e = n[o] : (a.indexOf(o) < 0 && a.push(o), e = r[a.indexOf(o) % r.length], n[o] = e), i instanceof Function ? i(e, t) : e
            }
        },xs.prototype.generateLevelColor = function () {
            var t = this.config, e = t.color_pattern, n = t.color_threshold, r = "value" === n.unit,
                i = n.values && n.values.length ? n.values : [], a = n.max || 100;
            return Os(n) && Os(e) ? function (t) {
                var n, o = e[e.length - 1];
                for (n = 0; n < i.length; n++) if ((r ? t : 100 * t / a) < i[n]) {
                    o = e[n];
                    break
                }
                return o
            } : null
        },xs.prototype.getDefaultConfig = function () {
            var t = {
                bindto: "#chart",
                svg_classname: void 0,
                size_width: void 0,
                size_height: void 0,
                padding_left: void 0,
                padding_right: void 0,
                padding_top: void 0,
                padding_bottom: void 0,
                resize_auto: !0,
                zoom_enabled: !1,
                zoom_initialRange: void 0,
                zoom_type: "scroll",
                zoom_disableDefaultBehavior: !1,
                zoom_privileged: !1,
                zoom_rescale: !1,
                zoom_onzoom: function () {
                },
                zoom_onzoomstart: function () {
                },
                zoom_onzoomend: function () {
                },
                zoom_x_min: void 0,
                zoom_x_max: void 0,
                interaction_brighten: !0,
                interaction_enabled: !0,
                onmouseover: function () {
                },
                onmouseout: function () {
                },
                onresize: function () {
                },
                onresized: function () {
                },
                oninit: function () {
                },
                onrendered: function () {
                },
                transition_duration: 350,
                data_epochs: "epochs",
                data_x: void 0,
                data_xs: {},
                data_xFormat: "%Y-%m-%d",
                data_xLocaltime: !0,
                data_xSort: !0,
                data_idConverter: function (t) {
                    return t
                },
                data_names: {},
                data_classes: {},
                data_groups: [],
                data_axes: {},
                data_type: void 0,
                data_types: {},
                data_labels: {},
                data_order: "desc",
                data_regions: {},
                data_color: void 0,
                data_colors: {},
                data_hide: !1,
                data_filter: void 0,
                data_selection_enabled: !1,
                data_selection_grouped: !1,
                data_selection_isselectable: function () {
                    return !0
                },
                data_selection_multiple: !0,
                data_selection_draggable: !1,
                data_stack_normalize: !1,
                data_onclick: function () {
                },
                data_onmouseover: function () {
                },
                data_onmouseout: function () {
                },
                data_onselected: function () {
                },
                data_onunselected: function () {
                },
                data_url: void 0,
                data_headers: void 0,
                data_json: void 0,
                data_rows: void 0,
                data_columns: void 0,
                data_mimeType: void 0,
                data_keys: void 0,
                data_empty_label_text: "",
                subchart_show: !1,
                subchart_size_height: 60,
                subchart_axis_x_show: !0,
                subchart_onbrush: function () {
                },
                color_pattern: [],
                color_threshold: {},
                legend_show: !0,
                legend_hide: !1,
                legend_position: "bottom",
                legend_inset_anchor: "top-left",
                legend_inset_x: 10,
                legend_inset_y: 0,
                legend_inset_step: void 0,
                legend_item_onclick: void 0,
                legend_item_onmouseover: void 0,
                legend_item_onmouseout: void 0,
                legend_equally: !1,
                legend_padding: 0,
                legend_item_tile_width: 16,
                legend_item_tile_height: 16,
                axis_rotated: !1,
                axis_x_show: !0,
                axis_x_type: "indexed",
                axis_x_localtime: !0,
                axis_x_categories: [],
                axis_x_tick_centered: !1,
                axis_x_tick_format: void 0,
                axis_x_tick_culling: {},
                axis_x_tick_culling_max: 10,
                axis_x_tick_count: void 0,
                axis_x_tick_fit: !0,
                axis_x_tick_values: null,
                axis_x_tick_rotate: 0,
                axis_x_tick_outer: !0,
                axis_x_tick_multiline: !0,
                axis_x_tick_multilineMax: 0,
                axis_x_tick_width: null,
                axis_x_max: void 0,
                axis_x_min: void 0,
                axis_x_padding: {},
                axis_x_height: void 0,
                axis_x_selection: void 0,
                axis_x_label: {},
                axis_x_inner: void 0,
                axis_y_show: !0,
                axis_y_type: "linear",
                axis_y_max: void 0,
                axis_y_min: void 0,
                axis_y_inverted: !1,
                axis_y_center: void 0,
                axis_y_inner: void 0,
                axis_y_label: {},
                axis_y_tick_format: void 0,
                axis_y_tick_outer: !0,
                axis_y_tick_values: null,
                axis_y_tick_rotate: 0,
                axis_y_tick_count: void 0,
                axis_y_tick_time_type: void 0,
                axis_y_tick_time_interval: void 0,
                axis_y_padding: {},
                axis_y_default: void 0,
                axis_y2_show: !1,
                axis_y2_type: "linear",
                axis_y2_max: void 0,
                axis_y2_min: void 0,
                axis_y2_inverted: !1,
                axis_y2_center: void 0,
                axis_y2_inner: void 0,
                axis_y2_label: {},
                axis_y2_tick_format: void 0,
                axis_y2_tick_outer: !0,
                axis_y2_tick_values: null,
                axis_y2_tick_count: void 0,
                axis_y2_padding: {},
                axis_y2_default: void 0,
                grid_x_show: !1,
                grid_x_type: "tick",
                grid_x_lines: [],
                grid_y_show: !1,
                grid_y_lines: [],
                grid_y_ticks: 10,
                grid_focus_show: !0,
                grid_lines_front: !0,
                point_show: !0,
                point_r: 2.5,
                point_sensitivity: 10,
                point_focus_expand_enabled: !0,
                point_focus_expand_r: void 0,
                point_select_r: void 0,
                line_connectNull: !1,
                line_step_type: "step",
                bar_width: void 0,
                bar_width_ratio: .6,
                bar_width_max: void 0,
                bar_zerobased: !0,
                bar_space: 0,
                area_zerobased: !0,
                area_above: !1,
                pie_label_show: !0,
                pie_label_format: void 0,
                pie_label_threshold: .05,
                pie_label_ratio: void 0,
                pie_expand: {},
                pie_expand_duration: 50,
                pie_padAngle: 0,
                gauge_fullCircle: !1,
                gauge_label_show: !0,
                gauge_labelLine_show: !0,
                gauge_label_format: void 0,
                gauge_min: 0,
                gauge_max: 100,
                gauge_startingAngle: -1 * Math.PI / 2,
                gauge_label_extents: void 0,
                gauge_units: void 0,
                gauge_width: void 0,
                gauge_arcs_minWidth: 5,
                gauge_expand: {},
                gauge_expand_duration: 50,
                donut_label_show: !0,
                donut_label_format: void 0,
                donut_label_threshold: .05,
                donut_label_ratio: void 0,
                donut_width: void 0,
                donut_title: "",
                donut_expand: {},
                donut_expand_duration: 50,
                donut_padAngle: 0,
                spline_interpolation_type: "cardinal",
                stanford_lines: [],
                stanford_regions: [],
                stanford_texts: [],
                stanford_scaleMin: void 0,
                stanford_scaleMax: void 0,
                stanford_scaleWidth: void 0,
                stanford_scaleFormat: void 0,
                stanford_scaleValues: void 0,
                stanford_colors: void 0,
                stanford_padding: {top: 0, right: 0, bottom: 0, left: 0},
                regions: [],
                tooltip_show: !0,
                tooltip_grouped: !0,
                tooltip_order: void 0,
                tooltip_format_title: void 0,
                tooltip_format_name: void 0,
                tooltip_format_value: void 0,
                tooltip_horizontal: void 0,
                tooltip_position: void 0,
                tooltip_contents: function (t, e, n, r) {
                    return this.getTooltipContent ? this.getTooltipContent(t, e, n, r) : ""
                },
                tooltip_init_show: !1,
                tooltip_init_x: 0,
                tooltip_init_position: {top: "0px", left: "50px"},
                tooltip_onshow: function () {
                },
                tooltip_onhide: function () {
                },
                title_text: void 0,
                title_padding: {top: 0, right: 0, bottom: 0, left: 0},
                title_position: "top-center"
            };
            return Object.keys(this.additionalConfig).forEach((function (e) {
                t[e] = this.additionalConfig[e]
            }), this), t
        },xs.prototype.additionalConfig = {},xs.prototype.loadConfig = function (t) {
            var e, n, r, i = this.config;
            Object.keys(i).forEach((function (a) {
                e = t, n = a.split("_"), r = function t() {
                    var r = n.shift();
                    return r && e && "object" === ms(e) && r in e ? (e = e[r], t()) : r ? void 0 : e
                }(), Ls(r) && (i[a] = r)
            }))
        },xs.prototype.convertUrlToData = function (t, e, n, r, i) {
            var a, o, s = this, l = e || "csv";
            "json" === l ? (a = s.d3.json, o = s.convertJsonToData) : "tsv" === l ? (a = s.d3.tsv, o = s.convertXsvToData) : (a = s.d3.csv, o = s.convertXsvToData), a(t, n).then((function (t) {
                i.call(s, o.call(s, t, r))
            })).catch((function (t) {
                throw t
            }))
        },xs.prototype.convertXsvToData = function (t) {
            var e = t.columns;
            return 0 === t.length ? {
                keys: e, rows: [e.reduce((function (t, e) {
                    return Object.assign(t, function (t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }({}, e, null))
                }), {})]
            } : {keys: e, rows: [].concat(t)}
        },xs.prototype.convertJsonToData = function (t, e) {
            var n, r, i = this, a = [];
            return e ? (e.x ? (n = e.value.concat(e.x), i.config.data_x = e.x) : n = e.value, a.push(n), t.forEach((function (t) {
                var e = [];
                n.forEach((function (n) {
                    var r = i.findValueInJson(t, n);
                    Rs(r) && (r = null), e.push(r)
                })), a.push(e)
            })), r = i.convertRowsToData(a)) : (Object.keys(t).forEach((function (e) {
                a.push([e].concat(t[e]))
            })), r = i.convertColumnsToData(a)), r
        },xs.prototype.findValueInJson = function (t, e) {
            if (e in t) return t[e];
            for (var n = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), r = 0; r < n.length; ++r) {
                var i = n[r];
                if (!(i in t)) return;
                t = t[i]
            }
            return t
        },xs.prototype.convertRowsToData = function (t) {
            for (var e = [], n = t[0], r = 1; r < t.length; r++) {
                for (var i = {}, a = 0; a < t[r].length; a++) {
                    if (Rs(t[r][a])) throw new Error("Source data is missing a component at (" + r + "," + a + ")!");
                    i[n[a]] = t[r][a]
                }
                e.push(i)
            }
            return {keys: n, rows: e}
        },xs.prototype.convertColumnsToData = function (t) {
            for (var e = [], n = [], r = 0; r < t.length; r++) {
                for (var i = t[r][0], a = 1; a < t[r].length; a++) {
                    if (Rs(e[a - 1]) && (e[a - 1] = {}), Rs(t[r][a])) throw new Error("Source data is missing a component at (" + r + "," + a + ")!");
                    e[a - 1][i] = t[r][a]
                }
                n.push(i)
            }
            return {keys: n, rows: e}
        },xs.prototype.convertDataToTargets = function (t, e) {
            var n, r, i, a, o, s = this, l = s.config;
            if (Ds(t) ? a = Object.keys(t[0]) : (a = t.keys, t = t.rows), i = a.filter(s.isX, s), s.isStanfordGraphType()) {
                if (o = a.filter(s.isEpochs, s), r = a.filter(s.isNotXAndNotEpochs, s), 1 !== i.length || 1 !== o.length || 1 !== r.length) throw new Error("You must define the 'x' key name and the 'epochs' for Stanford Diagrams")
            } else r = a.filter(s.isNotX, s);
            return r.forEach((function (n) {
                var r = s.getXKey(n);
                s.isCustomX() || s.isTimeSeries() ? i.indexOf(r) >= 0 ? s.data.xs[n] = (e && s.data.xs[n] ? s.data.xs[n] : []).concat(t.map((function (t) {
                    return t[r]
                })).filter(Ms).map((function (t, e) {
                    return s.generateTargetX(t, n, e)
                }))) : l.data_x ? s.data.xs[n] = s.getOtherTargetXs() : Os(l.data_xs) && (s.data.xs[n] = s.getXValuesOfXKey(r, s.data.targets)) : s.data.xs[n] = t.map((function (t, e) {
                    return e
                }))
            })), r.forEach((function (t) {
                if (!s.data.xs[t]) throw new Error('x is not defined for id = "' + t + '".')
            })), (n = r.map((function (e, n) {
                var r = l.data_idConverter(e);
                return {
                    id: r, id_org: e, values: t.map((function (t, i) {
                        var a, c, u = t[s.getXKey(e)], h = null === t[e] || isNaN(t[e]) ? null : +t[e];
                        return s.isCustomX() && s.isCategorized() && !Rs(u) ? (0 === n && 0 === i && (l.axis_x_categories = []), -1 === (a = l.axis_x_categories.indexOf(u)) && (a = l.axis_x_categories.length, l.axis_x_categories.push(u))) : a = s.generateTargetX(u, e, i), (Rs(t[e]) || s.data.xs[e].length <= i) && (a = void 0), c = {
                            x: a,
                            value: h,
                            id: r
                        }, s.isStanfordGraphType() && (c.epochs = t[o]), c
                    })).filter((function (t) {
                        return Ls(t.x)
                    }))
                }
            }))).forEach((function (t) {
                var e;
                l.data_xSort && (t.values = t.values.sort((function (t, e) {
                    return (t.x || 0 === t.x ? t.x : 1 / 0) - (e.x || 0 === e.x ? e.x : 1 / 0)
                }))), e = 0, t.values.forEach((function (t) {
                    t.index = e++
                })), s.data.xs[t.id].sort((function (t, e) {
                    return t - e
                }))
            })), s.hasNegativeValue = s.hasNegativeValueInTargets(n), s.hasPositiveValue = s.hasPositiveValueInTargets(n), l.data_type && s.setTargetType(s.mapToIds(n).filter((function (t) {
                return !(t in l.data_types)
            })), l.data_type), n.forEach((function (t) {
                s.addCache(t.id_org, t)
            })), n
        },xs.prototype.isEpochs = function (t) {
            var e = this.config;
            return e.data_epochs && t === e.data_epochs
        },xs.prototype.isX = function (t) {
            var e, n, r, i = this.config;
            return i.data_x && t === i.data_x || Os(i.data_xs) && (e = i.data_xs, n = t, r = !1, Object.keys(e).forEach((function (t) {
                e[t] === n && (r = !0)
            })), r)
        },xs.prototype.isNotX = function (t) {
            return !this.isX(t)
        },xs.prototype.isNotXAndNotEpochs = function (t) {
            return !this.isX(t) && !this.isEpochs(t)
        },xs.prototype.isStackNormalized = function () {
            return this.config.data_stack_normalize && this.config.data_groups.length > 0
        },xs.prototype.isAxisNormalized = function (t) {
            var e = this;
            return !!e.isStackNormalized() && e.data.targets.filter((function (n) {
                return e.axis.getId(n.id) === t
            })).some((function (t) {
                return e.isTargetNormalized(t.id)
            }))
        },xs.prototype.isTargetNormalized = function (t) {
            return this.isStackNormalized() && this.config.data_groups.some((function (e) {
                return e.includes(t)
            }))
        },xs.prototype.getXKey = function (t) {
            var e = this.config;
            return e.data_x ? e.data_x : Os(e.data_xs) ? e.data_xs[t] : null
        },xs.prototype.getTotalPerIndex = function (t) {
            var e = this;
            if (!e.isStackNormalized()) return null;
            var n = e.getFromCache("getTotalPerIndex");
            if (void 0 !== n) return n[t];
            var r = {y: [], y2: []};
            return e.data.targets.filter((function (t) {
                return e.isTargetNormalized(t.id)
            })).filter((function (t) {
                return e.isTargetToShow(t.id)
            })).forEach((function (t) {
                var n = r[e.axis.getId(t.id)];
                t.values.forEach((function (t, e) {
                    n[e] || (n[e] = 0), n[e] += ks(t.value) ? t.value : 0
                }))
            })), e.addToCache("getTotalPerIndex", r), r[t]
        },xs.prototype.getTotalDataSum = function () {
            var t = this, e = t.getFromCache("getTotalDataSum");
            if (void 0 !== e) return e;
            var n, r, i = (n = t.data.targets.filter((function (e) {
                return t.isTargetToShow(e.id)
            })).map((function (t) {
                return t.values
            })), Array.isArray(n) ? (r = []).concat.apply(r, _s(n)) : []).map((function (t) {
                return t.value
            })).reduce((function (t, e) {
                return t + e
            }), 0);
            return t.addToCache("getTotalDataSum", i), i
        },xs.prototype.getXValuesOfXKey = function (t, e) {
            var n, r = this;
            return (e && Os(e) ? r.mapToIds(e) : []).forEach((function (e) {
                r.getXKey(e) === t && (n = r.data.xs[e])
            })), n
        },xs.prototype.getXValue = function (t, e) {
            return t in this.data.xs && this.data.xs[t] && Ms(this.data.xs[t][e]) ? this.data.xs[t][e] : e
        },xs.prototype.getOtherTargetXs = function () {
            var t = Object.keys(this.data.xs);
            return t.length ? this.data.xs[t[0]] : null
        },xs.prototype.getOtherTargetX = function (t) {
            var e = this.getOtherTargetXs();
            return e && t < e.length ? e[t] : null
        },xs.prototype.addXs = function (t) {
            var e = this;
            Object.keys(t).forEach((function (n) {
                e.config.data_xs[n] = t[n]
            }))
        },xs.prototype.addName = function (t) {
            var e;
            return t && (e = this.config.data_names[t.id], t.name = void 0 !== e ? e : t.id), t
        },xs.prototype.getValueOnIndex = function (t, e) {
            var n = t.filter((function (t) {
                return t.index === e
            }));
            return n.length ? n[0] : null
        },xs.prototype.updateTargetX = function (t, e) {
            var n = this;
            t.forEach((function (t) {
                t.values.forEach((function (r, i) {
                    r.x = n.generateTargetX(e[i], t.id, i)
                })), n.data.xs[t.id] = e
            }))
        },xs.prototype.updateTargetXs = function (t, e) {
            var n = this;
            t.forEach((function (t) {
                e[t.id] && n.updateTargetX([t], e[t.id])
            }))
        },xs.prototype.generateTargetX = function (t, e, n) {
            var r = this;
            return r.isTimeSeries() ? t ? r.parseDate(t) : r.parseDate(r.getXValue(e, n)) : r.isCustomX() && !r.isCategorized() ? Ms(t) ? +t : r.getXValue(e, n) : n
        },xs.prototype.cloneTarget = function (t) {
            return {
                id: t.id, id_org: t.id_org, values: t.values.map((function (t) {
                    return {x: t.x, value: t.value, id: t.id}
                }))
            }
        },xs.prototype.getMaxDataCount = function () {
            return this.d3.max(this.data.targets, (function (t) {
                return t.values.length
            }))
        },xs.prototype.mapToIds = function (t) {
            return t.map((function (t) {
                return t.id
            }))
        },xs.prototype.mapToTargetIds = function (t) {
            return t ? [].concat(t) : this.mapToIds(this.data.targets)
        },xs.prototype.hasTarget = function (t, e) {
            var n, r = this.mapToIds(t);
            for (n = 0; n < r.length; n++) if (r[n] === e) return !0;
            return !1
        },xs.prototype.isTargetToShow = function (t) {
            return this.hiddenTargetIds.indexOf(t) < 0
        },xs.prototype.isLegendToShow = function (t) {
            return this.hiddenLegendIds.indexOf(t) < 0
        },xs.prototype.getTargetsToShow = function () {
            return this.filterTargetsToShow(this.data.targets)
        },xs.prototype.filterTargetsToShow = function (t) {
            var e = this;
            return t.filter((function (t) {
                return e.isTargetToShow(t.id)
            }))
        },xs.prototype.getTargets = function () {
            return this.data.targets
        },xs.prototype.mapTargetsToUniqueXs = function (t) {
            var e = this.d3.set(this.d3.merge(t.map((function (t) {
                return t.values.map((function (t) {
                    return +t.x
                }))
            })))).values();
            return (e = this.isTimeSeries() ? e.map((function (t) {
                return new Date(+t)
            })) : e.map((function (t) {
                return +t
            }))).sort((function (t, e) {
                return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
            }))
        },xs.prototype.addHiddenTargetIds = function (t) {
            t = t instanceof Array ? t : new Array(t);
            for (var e = 0; e < t.length; e++) this.hiddenTargetIds.indexOf(t[e]) < 0 && (this.hiddenTargetIds = this.hiddenTargetIds.concat(t[e]));
            this.resetCache()
        },xs.prototype.removeHiddenTargetIds = function (t) {
            this.hiddenTargetIds = this.hiddenTargetIds.filter((function (e) {
                return t.indexOf(e) < 0
            })), this.resetCache()
        },xs.prototype.addHiddenLegendIds = function (t) {
            t = t instanceof Array ? t : new Array(t);
            for (var e = 0; e < t.length; e++) this.hiddenLegendIds.indexOf(t[e]) < 0 && (this.hiddenLegendIds = this.hiddenLegendIds.concat(t[e]))
        },xs.prototype.removeHiddenLegendIds = function (t) {
            this.hiddenLegendIds = this.hiddenLegendIds.filter((function (e) {
                return t.indexOf(e) < 0
            }))
        },xs.prototype.getValuesAsIdKeyed = function (t) {
            var e = {};
            return t.forEach((function (t) {
                e[t.id] = [], t.values.forEach((function (n) {
                    e[t.id].push(n.value)
                }))
            })), e
        },xs.prototype.checkValueInTargets = function (t, e) {
            var n, r, i, a = Object.keys(t);
            for (n = 0; n < a.length; n++) for (i = t[a[n]].values, r = 0; r < i.length; r++) if (e(i[r].value)) return !0;
            return !1
        },xs.prototype.hasNegativeValueInTargets = function (t) {
            return this.checkValueInTargets(t, (function (t) {
                return t < 0
            }))
        },xs.prototype.hasPositiveValueInTargets = function (t) {
            return this.checkValueInTargets(t, (function (t) {
                return t > 0
            }))
        },xs.prototype.isOrderDesc = function () {
            var t = this.config;
            return "string" == typeof t.data_order && "desc" === t.data_order.toLowerCase()
        },xs.prototype.isOrderAsc = function () {
            var t = this.config;
            return "string" == typeof t.data_order && "asc" === t.data_order.toLowerCase()
        },xs.prototype.getOrderFunction = function () {
            var t = this.config, e = this.isOrderAsc(), n = this.isOrderDesc();
            if (e || n) {
                var r = function (t, e) {
                    return t + Math.abs(e.value)
                };
                return function (t, n) {
                    var i = t.values.reduce(r, 0), a = n.values.reduce(r, 0);
                    return e ? a - i : i - a
                }
            }
            if (Es(t.data_order)) return t.data_order;
            if (Ds(t.data_order)) {
                var i = t.data_order;
                return function (t, e) {
                    return i.indexOf(t.id) - i.indexOf(e.id)
                }
            }
        },xs.prototype.orderTargets = function (t) {
            var e = this.getOrderFunction();
            return e && t.sort(e), t
        },xs.prototype.filterByIndex = function (t, e) {
            return this.d3.merge(t.map((function (t) {
                return t.values.filter((function (t) {
                    return t.index === e
                }))
            })))
        },xs.prototype.filterByX = function (t, e) {
            return this.d3.merge(t.map((function (t) {
                return t.values
            }))).filter((function (t) {
                return t.x - e == 0
            }))
        },xs.prototype.filterRemoveNull = function (t) {
            return t.filter((function (t) {
                return Ms(t.value)
            }))
        },xs.prototype.filterByXDomain = function (t, e) {
            return t.map((function (t) {
                return {
                    id: t.id, id_org: t.id_org, values: t.values.filter((function (t) {
                        return e[0] <= t.x && t.x <= e[1]
                    }))
                }
            }))
        },xs.prototype.hasDataLabel = function () {
            var t = this.config;
            return !("boolean" != typeof t.data_labels || !t.data_labels) || !("object" !== ms(t.data_labels) || !Os(t.data_labels))
        },xs.prototype.getDataLabelLength = function (t, e, n) {
            var r = this, i = [0, 0];
            return r.selectChart.select("svg").selectAll(".dummy").data([t, e]).enter().append("text").text((function (t) {
                return r.dataLabelFormat(t.id)(t)
            })).each((function (t, e) {
                i[e] = 1.3 * Ps(this)[n]
            })).remove(), i
        },xs.prototype.isNoneArc = function (t) {
            return this.hasTarget(this.data.targets, t.id)
        },xs.prototype.isArc = function (t) {
            return "data" in t && this.hasTarget(this.data.targets, t.data.id)
        },xs.prototype.findClosestFromTargets = function (t, e) {
            var n = this, r = t.map((function (t) {
                return n.findClosest(t.values, e, n.config.tooltip_horizontal ? n.horizontalDistance.bind(n) : n.dist.bind(n), n.config.point_sensitivity)
            })).filter((function (t) {
                return t
            }));
            return 0 === r.length ? void 0 : 1 === r.length ? r[0] : n.findClosest(r, e, n.dist.bind(n))
        },xs.prototype.findClosestFromTargetsByX = function (t, e) {
            var n, r;
            return t.forEach((function (t) {
                t.values.forEach((function (t) {
                    var i = Math.abs(e - t.x);
                    (void 0 === r || i < r) && (n = t, r = i)
                }))
            })), n
        },xs.prototype.findClosest = function (t, e, n) {
            var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0, a = this;
            return t.filter((function (t) {
                return t && a.isBarType(t.id)
            })).forEach((function (t) {
                if (!r) {
                    var n = a.main.select("." + Hs.bars + a.getTargetSelectorSuffix(t.id) + " ." + Hs.bar + "-" + t.index).node();
                    a.isWithinBar(e, n) && (r = t)
                }
            })), t.filter((function (t) {
                return t && !a.isBarType(t.id)
            })).forEach((function (t) {
                var a = n(t, e);
                a < i && (i = a, r = t)
            })), r
        },xs.prototype.dist = function (t, e) {
            var n = this.config, r = n.axis_rotated ? 1 : 0, i = n.axis_rotated ? 0 : 1, a = this.circleY(t, t.index),
                o = this.x(t.x);
            return Math.sqrt(Math.pow(o - e[r], 2) + Math.pow(a - e[i], 2))
        },xs.prototype.horizontalDistance = function (t, e) {
            var n = this.config.axis_rotated ? 1 : 0, r = this.x(t.x);
            return Math.abs(r - e[n])
        },xs.prototype.convertValuesToStep = function (t) {
            var e, n = [].concat(t);
            if (!this.isCategorized()) return t;
            for (e = t.length + 1; 0 < e; e--) n[e] = n[e - 1];
            return n[0] = {x: n[0].x - 1, value: n[0].value, id: n[0].id}, n[t.length + 1] = {
                x: n[t.length].x + 1,
                value: n[t.length].value,
                id: n[t.length].id
            }, n
        },xs.prototype.getRatio = function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = this, i = r.api, a = 0;
            if (e && i.data.shown.call(i).length) if (a = e.ratio || e.value, "arc" === t) if (r.hasType("gauge")) a = (e.endAngle - e.startAngle) / (Math.PI * (r.config.gauge_fullCircle ? 2 : 1)); else {
                var o = r.getTotalDataSum();
                a = e.value / o
            } else if ("index" === t) {
                var s = r.getTotalPerIndex(r.axis.getId(e.id));
                e.ratio = ks(e.value) && s && s[e.index] > 0 ? e.value / s[e.index] : 0, a = e.ratio
            }
            return n && a ? 100 * a : a
        },xs.prototype.updateDataAttributes = function (t, e) {
            var n = this.config["data_" + t];
            return void 0 === e || (Object.keys(e).forEach((function (t) {
                n[t] = e[t]
            })), this.redraw({withLegend: !0})), n
        },xs.prototype.load = function (t, e) {
            var n = this;
            t && (e.filter && (t = t.filter(e.filter)), (e.type || e.types) && t.forEach((function (t) {
                var r = e.types && e.types[t.id] ? e.types[t.id] : e.type;
                n.setTargetType(t.id, r)
            })), n.data.targets.forEach((function (e) {
                for (var n = 0; n < t.length; n++) if (e.id === t[n].id) {
                    e.values = t[n].values, t.splice(n, 1);
                    break
                }
            })), n.data.targets = n.data.targets.concat(t)), n.updateTargets(n.data.targets), n.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            }), e.done && e.done()
        },xs.prototype.loadFromArgs = function (t) {
            var e = this;
            e.resetCache(), t.data ? e.load(e.convertDataToTargets(t.data), t) : t.url ? e.convertUrlToData(t.url, t.mimeType, t.headers, t.keys, (function (n) {
                e.load(e.convertDataToTargets(n), t)
            })) : t.json ? e.load(e.convertDataToTargets(e.convertJsonToData(t.json, t.keys)), t) : t.rows ? e.load(e.convertDataToTargets(e.convertRowsToData(t.rows)), t) : t.columns ? e.load(e.convertDataToTargets(e.convertColumnsToData(t.columns)), t) : e.load(null, t)
        },xs.prototype.unload = function (t, e) {
            var n = this;
            n.resetCache(), e || (e = function () {
            }), (t = t.filter((function (t) {
                return n.hasTarget(n.data.targets, t)
            }))) && 0 !== t.length ? (n.svg.selectAll(t.map((function (t) {
                return n.selectorTarget(t)
            }))).transition().style("opacity", 0).remove().call(n.endall, e), t.forEach((function (t) {
                n.withoutFadeIn[t] = !1, n.legend && n.legend.selectAll("." + Hs.legendItem + n.getTargetSelectorSuffix(t)).remove(), n.data.targets = n.data.targets.filter((function (e) {
                    return e.id !== t
                }))
            }))) : e()
        },xs.prototype.getYDomainMin = function (t) {
            var e, n, r, i, a, o, s = this, l = s.config, c = s.mapToIds(t), u = s.getValuesAsIdKeyed(t);
            if (l.data_groups.length > 0) for (o = s.hasNegativeValueInTargets(t), e = 0; e < l.data_groups.length; e++) if (0 !== (i = l.data_groups[e].filter((function (t) {
                return c.indexOf(t) >= 0
            }))).length) for (r = i[0], o && u[r] && u[r].forEach((function (t, e) {
                u[r][e] = t < 0 ? t : 0
            })), n = 1; n < i.length; n++) a = i[n], u[a] && u[a].forEach((function (t, e) {
                s.axis.getId(a) !== s.axis.getId(r) || !u[r] || o && +t > 0 || (u[r][e] += +t)
            }));
            return s.d3.min(Object.keys(u).map((function (t) {
                return s.d3.min(u[t])
            })))
        },xs.prototype.getYDomainMax = function (t) {
            var e, n, r, i, a, o, s = this, l = s.config, c = s.mapToIds(t), u = s.getValuesAsIdKeyed(t);
            if (l.data_groups.length > 0) for (o = s.hasPositiveValueInTargets(t), e = 0; e < l.data_groups.length; e++) if (0 !== (i = l.data_groups[e].filter((function (t) {
                return c.indexOf(t) >= 0
            }))).length) for (r = i[0], o && u[r] && u[r].forEach((function (t, e) {
                u[r][e] = t > 0 ? t : 0
            })), n = 1; n < i.length; n++) a = i[n], u[a] && u[a].forEach((function (t, e) {
                s.axis.getId(a) !== s.axis.getId(r) || !u[r] || o && +t < 0 || (u[r][e] += +t)
            }));
            return s.d3.max(Object.keys(u).map((function (t) {
                return s.d3.max(u[t])
            })))
        },xs.prototype.getYDomain = function (t, e, n) {
            var r = this, i = r.config;
            if (r.isAxisNormalized(e)) return [0, 100];
            var a, o, s, l, c, u, h, d, f, p, g = t.filter((function (t) {
                    return r.axis.getId(t.id) === e
                })), y = n ? r.filterByXDomain(g, n) : g, _ = "y2" === e ? i.axis_y2_min : i.axis_y_min,
                v = "y2" === e ? i.axis_y2_max : i.axis_y_max, m = r.getYDomainMin(y), x = r.getYDomainMax(y),
                w = "y2" === e ? i.axis_y2_center : i.axis_y_center,
                b = r.hasType("bar", y) && i.bar_zerobased || r.hasType("area", y) && i.area_zerobased,
                S = "y2" === e ? i.axis_y2_inverted : i.axis_y_inverted, T = r.hasDataLabel() && i.axis_rotated,
                A = r.hasDataLabel() && !i.axis_rotated;
            if (m = Ms(_) ? _ : Ms(v) ? m < v ? m : v - 10 : m, x = Ms(v) ? v : Ms(_) ? _ < x ? x : _ + 10 : x, 0 === y.length) return "y2" === e ? r.y2.domain() : r.y.domain();
            if (isNaN(m) && (m = 0), isNaN(x) && (x = m), m === x && (m < 0 ? x = 0 : m = 0), f = m >= 0 && x >= 0, p = m <= 0 && x <= 0, (Ms(_) && f || Ms(v) && p) && (b = !1), b && (f && (m = 0), p && (x = 0)), s = l = .1 * (o = Math.abs(x - m)), void 0 !== w && (x = w + (c = Math.max(Math.abs(m), Math.abs(x))), m = w - c), T) u = r.getDataLabelLength(m, x, "width"), h = Ts(r.y.range()), s += o * ((d = [u[0] / h, u[1] / h])[1] / (1 - d[0] - d[1])), l += o * (d[0] / (1 - d[0] - d[1])); else if (A) {
                u = r.getDataLabelLength(m, x, "height");
                var C = r.getY(i["axis_".concat(e, "_type")], [0, i.axis_rotated ? r.width : r.height], [0, o]);
                s += C(u[1]), l += C(u[0])
            }
            return "y" === e && Os(i.axis_y_padding) && (s = r.axis.getPadding(i.axis_y_padding, "top", s, o), l = r.axis.getPadding(i.axis_y_padding, "bottom", l, o)), "y2" === e && Os(i.axis_y2_padding) && (s = r.axis.getPadding(i.axis_y2_padding, "top", s, o), l = r.axis.getPadding(i.axis_y2_padding, "bottom", l, o)), b && (f && (l = m), p && (s = -x)), a = [m - l, x + s], S ? a.reverse() : a
        },xs.prototype.getXDomainMin = function (t) {
            var e = this, n = e.config;
            return Ls(n.axis_x_min) ? e.isTimeSeries() ? this.parseDate(n.axis_x_min) : n.axis_x_min : e.d3.min(t, (function (t) {
                return e.d3.min(t.values, (function (t) {
                    return t.x
                }))
            }))
        },xs.prototype.getXDomainMax = function (t) {
            var e = this, n = e.config;
            return Ls(n.axis_x_max) ? e.isTimeSeries() ? this.parseDate(n.axis_x_max) : n.axis_x_max : e.d3.max(t, (function (t) {
                return e.d3.max(t.values, (function (t) {
                    return t.x
                }))
            }))
        },xs.prototype.getXDomainPadding = function (t) {
            var e, n, r, i, a = this.config, o = t[1] - t[0];
            return n = this.isCategorized() ? 0 : this.hasType("bar") ? (e = this.getMaxDataCount()) > 1 ? o / (e - 1) / 2 : .5 : .01 * o, "object" === ms(a.axis_x_padding) && Os(a.axis_x_padding) ? (r = Ms(a.axis_x_padding.left) ? a.axis_x_padding.left : n, i = Ms(a.axis_x_padding.right) ? a.axis_x_padding.right : n) : r = i = "number" == typeof a.axis_x_padding ? a.axis_x_padding : n, {
                left: r,
                right: i
            }
        },xs.prototype.getXDomain = function (t) {
            var e = this, n = [e.getXDomainMin(t), e.getXDomainMax(t)], r = n[0], i = n[1], a = e.getXDomainPadding(n),
                o = 0, s = 0;
            return r - i != 0 || e.isCategorized() || (e.isTimeSeries() ? (r = new Date(.5 * r.getTime()), i = new Date(1.5 * i.getTime())) : (r = 0 === r ? 1 : .5 * r, i = 0 === i ? -1 : 1.5 * i)), (r || 0 === r) && (o = e.isTimeSeries() ? new Date(r.getTime() - a.left) : r - a.left), (i || 0 === i) && (s = e.isTimeSeries() ? new Date(i.getTime() + a.right) : i + a.right), [o, s]
        },xs.prototype.updateXDomain = function (t, e, n, r, i) {
            var a = this, o = a.config;
            return n && (a.x.domain(i || a.d3.extent(a.getXDomain(t))), a.orgXDomain = a.x.domain(), o.zoom_enabled && a.zoom.update(), a.subX.domain(a.x.domain()), a.brush && a.brush.updateScale(a.subX)), e && a.x.domain(i || (!a.brush || a.brush.empty() ? a.orgXDomain : a.brush.selectionAsValue())), r && a.x.domain(a.trimXDomain(a.x.orgDomain())), a.x.domain()
        },xs.prototype.trimXDomain = function (t) {
            var e = this.getZoomDomain(), n = e[0], r = e[1];
            return t[0] <= n && (t[1] = +t[1] + (n - t[0]), t[0] = n), r <= t[1] && (t[0] = +t[0] - (t[1] - r), t[1] = r), t
        },xs.prototype.drag = function (t) {
            var e, n, r, i, a, o, s, l, c = this, u = c.config, h = c.main, d = c.d3;
            c.hasArcType() || u.data_selection_enabled && u.data_selection_multiple && (e = c.dragStart[0], n = c.dragStart[1], r = t[0], i = t[1], a = Math.min(e, r), o = Math.max(e, r), s = u.data_selection_grouped ? c.margin.top : Math.min(n, i), l = u.data_selection_grouped ? c.height : Math.max(n, i), h.select("." + Hs.dragarea).attr("x", a).attr("y", s).attr("width", o - a).attr("height", l - s), h.selectAll("." + Hs.shapes).selectAll("." + Hs.shape).each((function (t, e) {
                if (u.data_selection_isselectable(t)) {
                    var n, r, i, h, f, p, g = d.select(this), y = g.classed(Hs.SELECTED), _ = g.classed(Hs.INCLUDED),
                        v = !1;
                    if (g.classed(Hs.circle)) n = 1 * g.attr("cx"), r = 1 * g.attr("cy"), f = c.togglePoint, v = a < n && n < o && s < r && r < l; else {
                        if (!g.classed(Hs.bar)) return;
                        n = (p = Cs(this)).x, r = p.y, i = p.width, h = p.height, f = c.togglePath, v = !(o < n || n + i < a || l < r || r + h < s)
                    }
                    v ^ _ && (g.classed(Hs.INCLUDED, !_), g.classed(Hs.SELECTED, !y), f.call(c, !y, g, t, e))
                }
            })))
        },xs.prototype.dragstart = function (t) {
            var e = this, n = e.config;
            e.hasArcType() || n.data_selection_enabled && (e.dragStart = t, e.main.select("." + Hs.chart).append("rect").attr("class", Hs.dragarea).style("opacity", .1), e.dragging = !0)
        },xs.prototype.dragend = function () {
            var t = this, e = t.config;
            t.hasArcType() || e.data_selection_enabled && (t.main.select("." + Hs.dragarea).transition().duration(100).style("opacity", 0).remove(), t.main.selectAll("." + Hs.shape).classed(Hs.INCLUDED, !1), t.dragging = !1)
        },xs.prototype.getYFormat = function (t) {
            var e = this, n = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.yFormat,
                r = t && !e.hasType("gauge") ? e.defaultArcValueFormat : e.y2Format;
            return function (t, i, a) {
                return ("y2" === e.axis.getId(a) ? r : n).call(e, t, i)
            }
        },xs.prototype.yFormat = function (t) {
            var e = this.config;
            return (e.axis_y_tick_format ? e.axis_y_tick_format : this.defaultValueFormat)(t)
        },xs.prototype.y2Format = function (t) {
            var e = this.config;
            return (e.axis_y2_tick_format ? e.axis_y2_tick_format : this.defaultValueFormat)(t)
        },xs.prototype.defaultValueFormat = function (t) {
            return Ms(t) ? +t : ""
        },xs.prototype.defaultArcValueFormat = function (t, e) {
            return (100 * e).toFixed(1) + "%"
        },xs.prototype.dataLabelFormat = function (t) {
            var e = this.config.data_labels, n = function (t) {
                return Ms(t) ? +t : ""
            };
            return "function" == typeof e.format ? e.format : "object" === ms(e.format) ? e.format[t] ? !0 === e.format[t] ? n : e.format[t] : function () {
                return ""
            } : n
        },xs.prototype.initGrid = function () {
            var t = this, e = t.config, n = t.d3;
            t.grid = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", Hs.grid), e.grid_x_show && t.grid.append("g").attr("class", Hs.xgrids), e.grid_y_show && t.grid.append("g").attr("class", Hs.ygrids), e.grid_focus_show && t.grid.append("g").attr("class", Hs.xgridFocus).append("line").attr("class", Hs.xgridFocus), t.xgrid = n.selectAll([]), e.grid_lines_front || t.initGridLines()
        },xs.prototype.initGridLines = function () {
            var t = this, e = t.d3;
            t.gridLines = t.main.append("g").attr("clip-path", t.clipPathForGrid).attr("class", Hs.grid + " " + Hs.gridLines), t.gridLines.append("g").attr("class", Hs.xgridLines), t.gridLines.append("g").attr("class", Hs.ygridLines), t.xgridLines = e.selectAll([])
        },xs.prototype.updateXGrid = function (t) {
            var e = this, n = e.config, r = e.d3, i = e.generateGridData(n.grid_x_type, e.x),
                a = e.isCategorized() ? e.xAxis.tickOffset() : 0;
            e.xgridAttr = n.axis_rotated ? {
                x1: 0, x2: e.width, y1: function (t) {
                    return e.x(t) - a
                }, y2: function (t) {
                    return e.x(t) - a
                }
            } : {
                x1: function (t) {
                    return e.x(t) + a
                }, x2: function (t) {
                    return e.x(t) + a
                }, y1: 0, y2: e.height
            }, e.xgridAttr.opacity = function () {
                return +r.select(this).attr(n.axis_rotated ? "y1" : "x1") === (n.axis_rotated ? e.height : 0) ? 0 : 1
            };
            var o = e.main.select("." + Hs.xgrids).selectAll("." + Hs.xgrid).data(i),
                s = o.enter().append("line").attr("class", Hs.xgrid).attr("x1", e.xgridAttr.x1).attr("x2", e.xgridAttr.x2).attr("y1", e.xgridAttr.y1).attr("y2", e.xgridAttr.y2).style("opacity", 0);
            e.xgrid = s.merge(o), t || e.xgrid.attr("x1", e.xgridAttr.x1).attr("x2", e.xgridAttr.x2).attr("y1", e.xgridAttr.y1).attr("y2", e.xgridAttr.y2).style("opacity", e.xgridAttr.opacity), o.exit().remove()
        },xs.prototype.updateYGrid = function () {
            var t = this, e = t.config, n = t.yAxis.tickValues() || t.y.ticks(e.grid_y_ticks),
                r = t.main.select("." + Hs.ygrids).selectAll("." + Hs.ygrid).data(n),
                i = r.enter().append("line").attr("class", Hs.ygrid);
            t.ygrid = i.merge(r), t.ygrid.attr("x1", e.axis_rotated ? t.y : 0).attr("x2", e.axis_rotated ? t.y : t.width).attr("y1", e.axis_rotated ? 0 : t.y).attr("y2", e.axis_rotated ? t.height : t.y), r.exit().remove(), t.smoothLines(t.ygrid, "grid")
        },xs.prototype.gridTextAnchor = function (t) {
            return t.position ? t.position : "end"
        },xs.prototype.gridTextDx = function (t) {
            return "start" === t.position ? 4 : "middle" === t.position ? 0 : -4
        },xs.prototype.xGridTextX = function (t) {
            return "start" === t.position ? -this.height : "middle" === t.position ? -this.height / 2 : 0
        },xs.prototype.yGridTextX = function (t) {
            return "start" === t.position ? 0 : "middle" === t.position ? this.width / 2 : this.width
        },xs.prototype.updateGrid = function (t) {
            var e, n, r, i, a = this, o = a.main, s = a.config, l = a.xv.bind(a), c = a.yv.bind(a),
                u = a.xGridTextX.bind(a), h = a.yGridTextX.bind(a);
            a.grid.style("visibility", a.hasArcType() ? "hidden" : "visible"), o.select("line." + Hs.xgridFocus).style("visibility", "hidden"), s.grid_x_show && a.updateXGrid(), (n = (e = o.select("." + Hs.xgridLines).selectAll("." + Hs.xgridLine).data(s.grid_x_lines)).enter().append("g").attr("class", (function (t) {
                return Hs.xgridLine + (t.class ? " " + t.class : "")
            }))).append("line").attr("x1", s.axis_rotated ? 0 : l).attr("x2", s.axis_rotated ? a.width : l).attr("y1", s.axis_rotated ? l : 0).attr("y2", s.axis_rotated ? l : a.height).style("opacity", 0), n.append("text").attr("text-anchor", a.gridTextAnchor).attr("transform", s.axis_rotated ? "" : "rotate(-90)").attr("x", s.axis_rotated ? h : u).attr("y", l).attr("dx", a.gridTextDx).attr("dy", -5).style("opacity", 0), a.xgridLines = n.merge(e), e.exit().transition().duration(t).style("opacity", 0).remove(), s.grid_y_show && a.updateYGrid(), (i = (r = o.select("." + Hs.ygridLines).selectAll("." + Hs.ygridLine).data(s.grid_y_lines)).enter().append("g").attr("class", (function (t) {
                return Hs.ygridLine + (t.class ? " " + t.class : "")
            }))).append("line").attr("x1", s.axis_rotated ? c : 0).attr("x2", s.axis_rotated ? c : a.width).attr("y1", s.axis_rotated ? 0 : c).attr("y2", s.axis_rotated ? a.height : c).style("opacity", 0), i.append("text").attr("text-anchor", a.gridTextAnchor).attr("transform", s.axis_rotated ? "rotate(-90)" : "").attr("x", s.axis_rotated ? u : h).attr("y", c).attr("dx", a.gridTextDx).attr("dy", -5).style("opacity", 0), a.ygridLines = i.merge(r), a.ygridLines.select("line").transition().duration(t).attr("x1", s.axis_rotated ? c : 0).attr("x2", s.axis_rotated ? c : a.width).attr("y1", s.axis_rotated ? 0 : c).attr("y2", s.axis_rotated ? a.height : c).style("opacity", 1), a.ygridLines.select("text").transition().duration(t).attr("x", s.axis_rotated ? a.xGridTextX.bind(a) : a.yGridTextX.bind(a)).attr("y", c).text((function (t) {
                return t.text
            })).style("opacity", 1), r.exit().transition().duration(t).style("opacity", 0).remove()
        },xs.prototype.redrawGrid = function (t, e) {
            var n = this, r = n.config, i = n.xv.bind(n), a = n.xgridLines.select("line"),
                o = n.xgridLines.select("text");
            return [(t ? a.transition(e) : a).attr("x1", r.axis_rotated ? 0 : i).attr("x2", r.axis_rotated ? n.width : i).attr("y1", r.axis_rotated ? i : 0).attr("y2", r.axis_rotated ? i : n.height).style("opacity", 1), (t ? o.transition(e) : o).attr("x", r.axis_rotated ? n.yGridTextX.bind(n) : n.xGridTextX.bind(n)).attr("y", i).text((function (t) {
                return t.text
            })).style("opacity", 1)]
        },xs.prototype.showXGridFocus = function (t) {
            var e = this, n = e.config, r = t.filter((function (t) {
                return t && Ms(t.value)
            })), i = e.main.selectAll("line." + Hs.xgridFocus), a = e.xx.bind(e);
            n.tooltip_show && (e.hasType("stanford") || e.hasArcType() || (i.style("visibility", "visible").data([r[0]]).attr(n.axis_rotated ? "y1" : "x1", a).attr(n.axis_rotated ? "y2" : "x2", a), e.smoothLines(i, "grid")))
        },xs.prototype.hideXGridFocus = function () {
            this.main.select("line." + Hs.xgridFocus).style("visibility", "hidden")
        },xs.prototype.updateXgridFocus = function () {
            var t = this.config;
            this.main.select("line." + Hs.xgridFocus).attr("x1", t.axis_rotated ? 0 : -10).attr("x2", t.axis_rotated ? this.width : -10).attr("y1", t.axis_rotated ? -10 : 0).attr("y2", t.axis_rotated ? -10 : this.height)
        },xs.prototype.generateGridData = function (t, e) {
            var n, r, i, a, o = [], s = this.main.select("." + Hs.axisX).selectAll(".tick").size();
            if ("year" === t) for (r = (n = this.getXDomain())[0].getFullYear(), i = n[1].getFullYear(), a = r; a <= i; a++) o.push(new Date(a + "-01-01 00:00:00")); else (o = e.ticks(10)).length > s && (o = o.filter((function (t) {
                return ("" + t).indexOf(".") < 0
            })));
            return o
        },xs.prototype.getGridFilterToRemove = function (t) {
            return t ? function (e) {
                var n = !1;
                return [].concat(t).forEach((function (t) {
                    ("value" in t && e.value === t.value || "class" in t && e.class === t.class) && (n = !0)
                })), n
            } : function () {
                return !0
            }
        },xs.prototype.removeGridLines = function (t, e) {
            var n = this.config, r = this.getGridFilterToRemove(t), i = function (t) {
                return !r(t)
            }, a = e ? Hs.xgridLines : Hs.ygridLines, o = e ? Hs.xgridLine : Hs.ygridLine;
            this.main.select("." + a).selectAll("." + o).filter(r).transition().duration(n.transition_duration).style("opacity", 0).remove(), e ? n.grid_x_lines = n.grid_x_lines.filter(i) : n.grid_y_lines = n.grid_y_lines.filter(i)
        },xs.prototype.initEventRect = function () {
            var t = this, e = t.config;
            t.main.select("." + Hs.chart).append("g").attr("class", Hs.eventRects).style("fill-opacity", 0), t.eventRect = t.main.select("." + Hs.eventRects).append("rect").attr("class", Hs.eventRect), e.zoom_enabled && t.zoom && (t.eventRect.call(t.zoom).on("dblclick.zoom", null), e.zoom_initialRange && t.eventRect.transition().duration(0).call(t.zoom.transform, t.zoomTransform(e.zoom_initialRange)))
        },xs.prototype.redrawEventRect = function () {
            var t = this, e = t.d3, n = t.config;

            function r() {
                t.svg.select("." + Hs.eventRect).style("cursor", null), t.hideXGridFocus(), t.hideTooltip(), t.unexpandCircles(), t.unexpandBars()
            }

            var i = function (e, r) {
                return r && (t.isBarType(r.id) || t.dist(r, e) < n.point_sensitivity)
            }, a = function (e) {
                return e ? t.addName(Object.assign({}, e)) : null
            };
            t.main.select("." + Hs.eventRects).style("cursor", n.zoom_enabled ? n.axis_rotated ? "ns-resize" : "ew-resize" : null), t.eventRect.attr("x", 0).attr("y", 0).attr("width", t.width).attr("height", t.height).on("mouseout", n.interaction_enabled ? function () {
                n && (t.hasArcType() || (t.mouseover && (n.data_onmouseout.call(t.api, t.mouseover), t.mouseover = void 0), r()))
            } : null).on("mousemove", n.interaction_enabled ? function () {
                if (!t.dragging) {
                    var o = t.getTargetsToShow();
                    if (!t.hasArcType(o)) {
                        var s, l = e.mouse(this), c = a(t.findClosestFromTargets(o, l)), u = i(l, c);
                        if (!t.mouseover || c && c.id === t.mouseover.id && c.index === t.mouseover.index || (n.data_onmouseout.call(t.api, t.mouseover), t.mouseover = void 0), c && !t.mouseover && (n.data_onmouseover.call(t.api, c), t.mouseover = c), t.svg.select("." + Hs.eventRect).style("cursor", u ? "pointer" : null), !n.tooltip_grouped || t.hasType("stanford", o)) c && (s = [c]); else {
                            var h;
                            if (c) h = c; else {
                                var d = n.axis_rotated ? l[1] : l[0];
                                h = t.findClosestFromTargetsByX(o, t.x.invert(d))
                            }
                            h && (s = t.filterByX(o, h.x))
                        }
                        if (!s || 0 === s.length) return r();
                        s = s.map(a), t.showTooltip(s, this), n.point_focus_expand_enabled && (t.unexpandCircles(), s.forEach((function (e) {
                            t.expandCircles(e.index, e.id, !1)
                        }))), t.unexpandBars(), s.forEach((function (e) {
                            t.expandBars(e.index, e.id, !1)
                        })), t.showXGridFocus(s)
                    }
                }
            } : null).on("click", n.interaction_enabled ? function () {
                var r = t.getTargetsToShow();
                if (!t.hasArcType(r)) {
                    var o = e.mouse(this), s = a(t.findClosestFromTargets(r, o));
                    if (i(o, s)) if ((!n.data_selection_grouped || t.isStanfordType(s) ? [s] : t.filterByX(r, s.x)).forEach((function (e) {
                        t.main.selectAll("." + Hs.shapes + t.getTargetSelectorSuffix(e.id)).selectAll("." + Hs.shape + "-" + e.index).each((function () {
                            (n.data_selection_grouped || t.isWithinShape(this, e)) && t.toggleShape(this, e, e.index)
                        }))
                    })), s) {
                        var l = t.main.selectAll("." + Hs.shapes + t.getTargetSelectorSuffix(s.id)).select("." + Hs.shape + "-" + s.index);
                        n.data_onclick.call(t.api, s, l.node())
                    }
                }
            } : null).call(n.interaction_enabled && n.data_selection_draggable && t.drag ? e.drag().on("drag", (function () {
                t.drag(e.mouse(this))
            })).on("start", (function () {
                t.dragstart(e.mouse(this))
            })).on("end", (function () {
                t.dragend()
            })) : function () {
            })
        },xs.prototype.getMousePosition = function (t) {
            return [this.x(t.x), this.getYScale(t.id)(t.value)]
        },xs.prototype.dispatchEvent = function (t, e) {
            var n = "." + Hs.eventRect, r = this.main.select(n).node(), i = r.getBoundingClientRect(),
                a = i.left + (e ? e[0] : 0), o = i.top + (e ? e[1] : 0), s = document.createEvent("MouseEvents");
            s.initMouseEvent(t, !0, !0, window, 0, a, o, a, o, !1, !1, !1, !1, 0, null), r.dispatchEvent(s)
        },xs.prototype.initLegend = function () {
            var t = this;
            if (t.legendItemTextBox = {}, t.legendHasRendered = !1, t.legend = t.svg.append("g").attr("transform", t.getTranslate("legend")), !t.config.legend_show) return t.legend.style("visibility", "hidden"), void (t.hiddenLegendIds = t.mapToIds(t.data.targets));
            t.updateLegendWithDefaults()
        },xs.prototype.updateLegendWithDefaults = function () {
            this.updateLegend(this.mapToIds(this.data.targets), {
                withTransform: !1,
                withTransitionForTransform: !1,
                withTransition: !1
            })
        },xs.prototype.updateSizeForLegend = function (t, e) {
            var n = this, r = n.config, i = {
                top: n.isLegendTop ? n.getCurrentPaddingTop() + r.legend_inset_y + 5.5 : n.currentHeight - t - n.getCurrentPaddingBottom() - r.legend_inset_y,
                left: n.isLegendLeft ? n.getCurrentPaddingLeft() + r.legend_inset_x + .5 : n.currentWidth - e - n.getCurrentPaddingRight() - r.legend_inset_x + .5
            };
            n.margin3 = {
                top: n.isLegendRight ? 0 : n.isLegendInset ? i.top : n.currentHeight - t,
                right: NaN,
                bottom: 0,
                left: n.isLegendRight ? n.currentWidth - e : n.isLegendInset ? i.left : 0
            }
        },xs.prototype.transformLegend = function (t) {
            (t ? this.legend.transition() : this.legend).attr("transform", this.getTranslate("legend"))
        },xs.prototype.updateLegendStep = function (t) {
            this.legendStep = t
        },xs.prototype.updateLegendItemWidth = function (t) {
            this.legendItemWidth = t
        },xs.prototype.updateLegendItemHeight = function (t) {
            this.legendItemHeight = t
        },xs.prototype.getLegendWidth = function () {
            var t = this;
            return t.config.legend_show ? t.isLegendRight || t.isLegendInset ? t.legendItemWidth * (t.legendStep + 1) : t.currentWidth : 0
        },xs.prototype.getLegendHeight = function () {
            var t = this, e = 0;
            return t.config.legend_show && (e = t.isLegendRight ? t.currentHeight : Math.max(20, t.legendItemHeight) * (t.legendStep + 1)), e
        },xs.prototype.opacityForLegend = function (t) {
            return t.classed(Hs.legendItemHidden) ? null : 1
        },xs.prototype.opacityForUnfocusedLegend = function (t) {
            return t.classed(Hs.legendItemHidden) ? null : .3
        },xs.prototype.toggleFocusLegend = function (t, e) {
            var n = this;
            t = n.mapToTargetIds(t), n.legend.selectAll("." + Hs.legendItem).filter((function (e) {
                return t.indexOf(e) >= 0
            })).classed(Hs.legendItemFocused, e).transition().duration(100).style("opacity", (function () {
                return (e ? n.opacityForLegend : n.opacityForUnfocusedLegend).call(n, n.d3.select(this))
            }))
        },xs.prototype.revertLegend = function () {
            var t = this, e = t.d3;
            t.legend.selectAll("." + Hs.legendItem).classed(Hs.legendItemFocused, !1).transition().duration(100).style("opacity", (function () {
                return t.opacityForLegend(e.select(this))
            }))
        },xs.prototype.showLegend = function (t) {
            var e = this, n = e.config;
            n.legend_show || (n.legend_show = !0, e.legend.style("visibility", "visible"), e.legendHasRendered || e.updateLegendWithDefaults()), e.removeHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("visibility", "visible").transition().style("opacity", (function () {
                return e.opacityForLegend(e.d3.select(this))
            }))
        },xs.prototype.hideLegend = function (t) {
            var e = this, n = e.config;
            n.legend_show && Is(t) && (n.legend_show = !1, e.legend.style("visibility", "hidden")), e.addHiddenLegendIds(t), e.legend.selectAll(e.selectorLegends(t)).style("opacity", 0).style("visibility", "hidden")
        },xs.prototype.clearLegendItemTextBoxCache = function () {
            this.legendItemTextBox = {}
        },xs.prototype.updateLegend = function (t, e, n) {
            var r, i, a, o, s, l, c, u, h, d, f, p, g, y, _, v, m = this, x = m.config, w = 0, b = 0,
                S = x.legend_item_tile_width + 5, T = 0, A = {}, C = {}, P = {}, D = [0], L = {}, I = 0;

            function E(e, n, r) {
                var i, a, o = 0 === r, s = r === t.length - 1, l = function (t, e) {
                        return m.legendItemTextBox[e] || (m.legendItemTextBox[e] = m.getTextRect(t.textContent, Hs.legendItem, t)), m.legendItemTextBox[e]
                    }(e, n), c = l.width + S + (!s || m.isLegendRight || m.isLegendInset ? 10 : 0) + x.legend_padding,
                    u = l.height + 4, h = m.isLegendRight || m.isLegendInset ? u : c,
                    d = m.isLegendRight || m.isLegendInset ? m.getLegendHeight() : m.getLegendWidth();

                function f(t, e) {
                    e || (i = (d - T - h) / 2) < 10 && (i = (d - h) / 2, T = 0, I++), L[t] = I, D[I] = m.isLegendInset ? 10 : i, A[t] = T, T += h
                }

                o && (T = 0, I = 0, w = 0, b = 0), !x.legend_show || m.isLegendToShow(n) ? (C[n] = c, P[n] = u, (!w || c >= w) && (w = c), (!b || u >= b) && (b = u), a = m.isLegendRight || m.isLegendInset ? b : w, x.legend_equally ? (Object.keys(C).forEach((function (t) {
                    C[t] = w
                })), Object.keys(P).forEach((function (t) {
                    P[t] = b
                })), (i = (d - a * t.length) / 2) < 10 ? (T = 0, I = 0, t.forEach((function (t) {
                    f(t)
                }))) : f(n, !0)) : f(n)) : C[n] = P[n] = L[n] = A[n] = 0
            }

            t = t.filter((function (t) {
                return !Ls(x.data_names[t]) || null !== x.data_names[t]
            })), f = As(e = e || {}, "withTransition", !0), p = As(e, "withTransitionForTransform", !0), m.isLegendInset && (I = x.legend_inset_step ? x.legend_inset_step : t.length, m.updateLegendStep(I)), m.isLegendRight ? (r = function (t) {
                return w * L[t]
            }, o = function (t) {
                return D[L[t]] + A[t]
            }) : m.isLegendInset ? (r = function (t) {
                return w * L[t] + 10
            }, o = function (t) {
                return D[L[t]] + A[t]
            }) : (r = function (t) {
                return D[L[t]] + A[t]
            }, o = function (t) {
                return b * L[t]
            }), i = function (t, e) {
                return r(t, e) + 4 + x.legend_item_tile_width
            }, s = function (t, e) {
                return o(t, e) + 9
            }, a = function (t, e) {
                return r(t, e)
            }, l = function (t, e) {
                return o(t, e) - 5
            }, c = function (t, e) {
                return r(t, e) - 2
            }, u = function (t, e) {
                return r(t, e) - 2 + x.legend_item_tile_width
            }, h = function (t, e) {
                return o(t, e) + 4
            }, (d = m.legend.selectAll("." + Hs.legendItem).data(t).enter().append("g").attr("class", (function (t) {
                return m.generateClass(Hs.legendItem, t)
            })).style("visibility", (function (t) {
                return m.isLegendToShow(t) ? "visible" : "hidden"
            })).style("cursor", (function () {
                return x.interaction_enabled ? "pointer" : "auto"
            })).on("click", x.interaction_enabled ? function (t) {
                x.legend_item_onclick ? x.legend_item_onclick.call(m, t) : m.d3.event.altKey ? (m.api.hide(), m.api.show(t)) : (m.api.toggle(t), m.isTargetToShow(t) ? m.api.focus(t) : m.api.revert())
            } : null).on("mouseover", x.interaction_enabled ? function (t) {
                x.legend_item_onmouseover ? x.legend_item_onmouseover.call(m, t) : (m.d3.select(this).classed(Hs.legendItemFocused, !0), !m.transiting && m.isTargetToShow(t) && m.api.focus(t))
            } : null).on("mouseout", x.interaction_enabled ? function (t) {
                x.legend_item_onmouseout ? x.legend_item_onmouseout.call(m, t) : (m.d3.select(this).classed(Hs.legendItemFocused, !1), m.api.revert())
            } : null)).append("text").text((function (t) {
                return Ls(x.data_names[t]) ? x.data_names[t] : t
            })).each((function (t, e) {
                E(this, t, e)
            })).style("pointer-events", "none").attr("x", m.isLegendRight || m.isLegendInset ? i : -200).attr("y", m.isLegendRight || m.isLegendInset ? -200 : s), d.append("rect").attr("class", Hs.legendItemEvent).style("fill-opacity", 0).attr("x", m.isLegendRight || m.isLegendInset ? a : -200).attr("y", m.isLegendRight || m.isLegendInset ? -200 : l), d.append("line").attr("class", Hs.legendItemTile).style("stroke", m.color).style("pointer-events", "none").attr("x1", m.isLegendRight || m.isLegendInset ? c : -200).attr("y1", m.isLegendRight || m.isLegendInset ? -200 : h).attr("x2", m.isLegendRight || m.isLegendInset ? u : -200).attr("y2", m.isLegendRight || m.isLegendInset ? -200 : h).attr("stroke-width", x.legend_item_tile_height), v = m.legend.select("." + Hs.legendBackground + " rect"), m.isLegendInset && w > 0 && 0 === v.size() && (v = m.legend.insert("g", "." + Hs.legendItem).attr("class", Hs.legendBackground).append("rect")), g = m.legend.selectAll("text").data(t).text((function (t) {
                return Ls(x.data_names[t]) ? x.data_names[t] : t
            })).each((function (t, e) {
                E(this, t, e)
            })), (f ? g.transition() : g).attr("x", i).attr("y", s), y = m.legend.selectAll("rect." + Hs.legendItemEvent).data(t), (f ? y.transition() : y).attr("width", (function (t) {
                return C[t]
            })).attr("height", (function (t) {
                return P[t]
            })).attr("x", a).attr("y", l), _ = m.legend.selectAll("line." + Hs.legendItemTile).data(t), (f ? _.transition() : _).style("stroke", m.levelColor ? function (t) {
                return m.levelColor(m.cache[t].values.reduce((function (t, e) {
                    return t + e.value
                }), 0))
            } : m.color).attr("x1", c).attr("y1", h).attr("x2", u).attr("y2", h), v && (f ? v.transition() : v).attr("height", m.getLegendHeight() - 12).attr("width", w * (I + 1) + 10), m.legend.selectAll("." + Hs.legendItem).classed(Hs.legendItemHidden, (function (t) {
                return !m.isTargetToShow(t)
            })), m.updateLegendItemWidth(w), m.updateLegendItemHeight(b), m.updateLegendStep(I), m.updateSizes(), m.updateScales(), m.updateSvgSize(), m.transformAll(p, n), m.legendHasRendered = !0
        },xs.prototype.initRegion = function () {
            this.region = this.main.append("g").attr("clip-path", this.clipPath).attr("class", Hs.regions)
        },xs.prototype.updateRegion = function (t) {
            var e = this, n = e.config;
            e.region.style("visibility", e.hasArcType() ? "hidden" : "visible");
            var r = e.main.select("." + Hs.regions).selectAll("." + Hs.region).data(n.regions),
                i = r.enter().append("g");
            i.append("rect").attr("x", e.regionX.bind(e)).attr("y", e.regionY.bind(e)).attr("width", e.regionWidth.bind(e)).attr("height", e.regionHeight.bind(e)).style("fill-opacity", (function (t) {
                return Ms(t.opacity) ? t.opacity : .1
            })), i.append("text").text(e.labelRegion.bind(e)), e.mainRegion = i.merge(r).attr("class", e.classRegion.bind(e)), r.exit().transition().duration(t).style("opacity", 0).remove()
        },xs.prototype.redrawRegion = function (t, e) {
            var n = this, r = n.mainRegion, i = n.mainRegion.selectAll("text");
            return [(t ? r.transition(e) : r).attr("x", n.regionX.bind(n)).attr("y", n.regionY.bind(n)).attr("width", n.regionWidth.bind(n)).attr("height", n.regionHeight.bind(n)).style("fill-opacity", (function (t) {
                return Ms(t.opacity) ? t.opacity : .1
            })), (t ? i.transition(e) : i).attr("x", n.labelOffsetX.bind(n)).attr("y", n.labelOffsetY.bind(n)).attr("transform", n.labelTransform.bind(n)).attr("style", "text-anchor: left;")]
        },xs.prototype.regionX = function (t) {
            var e = this, n = e.config, r = "y" === t.axis ? e.y : e.y2;
            return "y" === t.axis || "y2" === t.axis ? n.axis_rotated && "start" in t ? r(t.start) : 0 : n.axis_rotated ? 0 : "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0
        },xs.prototype.regionY = function (t) {
            var e = this, n = e.config, r = "y" === t.axis ? e.y : e.y2;
            return "y" === t.axis || "y2" === t.axis ? n.axis_rotated ? 0 : "end" in t ? r(t.end) : 0 : n.axis_rotated && "start" in t ? e.x(e.isTimeSeries() ? e.parseDate(t.start) : t.start) : 0
        },xs.prototype.regionWidth = function (t) {
            var e, n = this, r = n.config, i = n.regionX(t), a = "y" === t.axis ? n.y : n.y2;
            return (e = "y" === t.axis || "y2" === t.axis ? r.axis_rotated && "end" in t ? a(t.end) : n.width : r.axis_rotated ? n.width : "end" in t ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end) : n.width) < i ? 0 : e - i
        },xs.prototype.regionHeight = function (t) {
            var e, n = this, r = n.config, i = this.regionY(t), a = "y" === t.axis ? n.y : n.y2;
            return (e = "y" === t.axis || "y2" === t.axis ? r.axis_rotated ? n.height : "start" in t ? a(t.start) : n.height : r.axis_rotated && "end" in t ? n.x(n.isTimeSeries() ? n.parseDate(t.end) : t.end) : n.height) < i ? 0 : e - i
        },xs.prototype.isRegionOnX = function (t) {
            return !t.axis || "x" === t.axis
        },xs.prototype.labelRegion = function (t) {
            return "label" in t ? t.label : ""
        },xs.prototype.labelTransform = function (t) {
            return "vertical" in t && t.vertical ? "rotate(90)" : ""
        },xs.prototype.labelOffsetX = function (t) {
            var e = "paddingX" in t ? t.paddingX : 3, n = "paddingY" in t ? t.paddingY : 3;
            return "vertical" in t && t.vertical ? this.regionY(t) + n : this.regionX(t) + e
        },xs.prototype.labelOffsetY = function (t) {
            var e = "paddingX" in t ? t.paddingX : 3, n = "paddingY" in t ? t.paddingY : 3;
            return "vertical" in t && t.vertical ? -(this.regionX(t) + e) : this.regionY(t) + 10 + n
        },xs.prototype.getScale = function (t, e, n) {
            return (n ? this.d3.scaleTime() : this.d3.scaleLinear()).range([t, e])
        },xs.prototype.getX = function (t, e, n, r) {
            var i, a = this.getScale(t, e, this.isTimeSeries()), o = n ? a.domain(n) : a;
            for (i in this.isCategorized() ? (r = r || function () {
                return 0
            }, a = function (t, e) {
                var n = o(t) + r(t);
                return e ? n : Math.ceil(n)
            }) : a = function (t, e) {
                var n = o(t);
                return e ? n : Math.ceil(n)
            }, o) a[i] = o[i];
            return a.orgDomain = function () {
                return o.domain()
            }, this.isCategorized() && (a.domain = function (t) {
                return arguments.length ? (o.domain(t), a) : [(t = this.orgDomain())[0], t[1] + 1]
            }), a
        },xs.prototype.getY = function (t, e, n) {
            var r;
            if ("timeseries" === t || "time" === t) r = this.d3.scaleTime(); else if ("log" === t) r = Xs(this.d3); else {
                if ("linear" !== t && void 0 !== t) throw new Error('Invalid Y axis type: "'.concat(t, '"'));
                r = this.d3.scaleLinear()
            }
            return e && r.domain(e), n && r.range(n), r
        },xs.prototype.getYScale = function (t) {
            return "y2" === this.axis.getId(t) ? this.y2 : this.y
        },xs.prototype.getSubYScale = function (t) {
            return "y2" === this.axis.getId(t) ? this.subY2 : this.subY
        },xs.prototype.updateScales = function () {
            var t = this, e = t.config, n = !t.x;
            t.xMin = e.axis_rotated ? 1 : 0, t.xMax = e.axis_rotated ? t.height : t.width, t.yMin = e.axis_rotated ? 0 : t.height, t.yMax = e.axis_rotated ? t.width : 1, t.subXMin = t.xMin, t.subXMax = t.xMax, t.subYMin = e.axis_rotated ? 0 : t.height2, t.subYMax = e.axis_rotated ? t.width2 : 1, t.x = t.getX(t.xMin, t.xMax, n ? void 0 : t.x.orgDomain(), (function () {
                return t.xAxis.tickOffset()
            })), t.y = t.getY(e.axis_y_type, n ? e.axis_y_default : t.y.domain(), [t.yMin, t.yMax]), t.y2 = t.getY(e.axis_y2_type, n ? e.axis_y2_default : t.y2.domain(), [t.yMin, t.yMax]), t.subX = t.getX(t.xMin, t.xMax, t.orgXDomain, (function (e) {
                return e % 1 ? 0 : t.subXAxis.tickOffset()
            })), t.subY = t.getY(e.axis_y_type, n ? e.axis_y_default : t.subY.domain(), [t.subYMin, t.subYMax]), t.subY2 = t.getY(e.axis_y2_type, n ? e.axis_y2_default : t.subY2.domain(), [t.subYMin, t.subYMax]), t.xAxisTickFormat = t.axis.getXAxisTickFormat(), t.xAxisTickValues = t.axis.getXAxisTickValues(), t.yAxisTickValues = t.axis.getYAxisTickValues(), t.y2AxisTickValues = t.axis.getY2AxisTickValues(), t.xAxis = t.axis.getXAxis(t.x, t.xOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.subXAxis = t.axis.getXAxis(t.subX, t.subXOrient, t.xAxisTickFormat, t.xAxisTickValues, e.axis_x_tick_outer), t.yAxis = t.axis.getYAxis("y", t.y, t.yOrient, t.yAxisTickValues, e.axis_y_tick_outer), t.y2Axis = t.axis.getYAxis("y2", t.y2, t.y2Orient, t.y2AxisTickValues, e.axis_y2_tick_outer), n || t.brush && t.brush.updateScale(t.subX), t.updateArc && t.updateArc()
        },xs.prototype.selectPoint = function (t, e, n) {
            var r = this, i = r.config, a = (i.axis_rotated ? r.circleY : r.circleX).bind(r),
                o = (i.axis_rotated ? r.circleX : r.circleY).bind(r), s = r.pointSelectR.bind(r);
            i.data_onselected.call(r.api, e, t.node()), r.main.select("." + Hs.selectedCircles + r.getTargetSelectorSuffix(e.id)).selectAll("." + Hs.selectedCircle + "-" + n).data([e]).enter().append("circle").attr("class", (function () {
                return r.generateClass(Hs.selectedCircle, n)
            })).attr("cx", a).attr("cy", o).attr("stroke", (function () {
                return r.color(e)
            })).attr("r", (function (t) {
                return 1.4 * r.pointSelectR(t)
            })).transition().duration(100).attr("r", s)
        },xs.prototype.unselectPoint = function (t, e, n) {
            this.config.data_onunselected.call(this.api, e, t.node()), this.main.select("." + Hs.selectedCircles + this.getTargetSelectorSuffix(e.id)).selectAll("." + Hs.selectedCircle + "-" + n).transition().duration(100).attr("r", 0).remove()
        },xs.prototype.togglePoint = function (t, e, n, r) {
            t ? this.selectPoint(e, n, r) : this.unselectPoint(e, n, r)
        },xs.prototype.selectPath = function (t, e) {
            var n = this;
            n.config.data_onselected.call(n, e, t.node()), n.config.interaction_brighten && t.transition().duration(100).style("fill", (function () {
                return n.d3.rgb(n.color(e)).brighter(.75)
            }))
        },xs.prototype.unselectPath = function (t, e) {
            var n = this;
            n.config.data_onunselected.call(n, e, t.node()), n.config.interaction_brighten && t.transition().duration(100).style("fill", (function () {
                return n.color(e)
            }))
        },xs.prototype.togglePath = function (t, e, n, r) {
            t ? this.selectPath(e, n, r) : this.unselectPath(e, n, r)
        },xs.prototype.getToggle = function (t, e) {
            var n;
            return "circle" === t.nodeName ? n = this.isStepType(e) ? function () {
            } : this.togglePoint : "path" === t.nodeName && (n = this.togglePath), n
        },xs.prototype.toggleShape = function (t, e, n) {
            var r = this, i = r.d3, a = r.config, o = i.select(t), s = o.classed(Hs.SELECTED),
                l = r.getToggle(t, e).bind(r);
            a.data_selection_enabled && a.data_selection_isselectable(e) && (a.data_selection_multiple || r.main.selectAll("." + Hs.shapes + (a.data_selection_grouped ? r.getTargetSelectorSuffix(e.id) : "")).selectAll("." + Hs.shape).each((function (t, e) {
                var n = i.select(this);
                n.classed(Hs.SELECTED) && l(!1, n.classed(Hs.SELECTED, !1), t, e)
            })), o.classed(Hs.SELECTED, !s), l(!s, o, e, n))
        },xs.prototype.initBar = function () {
            this.main.select("." + Hs.chart).append("g").attr("class", Hs.chartBars)
        },xs.prototype.updateTargetsForBar = function (t) {
            var e = this, n = e.config, r = e.classChartBar.bind(e), i = e.classBars.bind(e), a = e.classFocus.bind(e);
            e.main.select("." + Hs.chartBars).selectAll("." + Hs.chartBar).data(t).attr("class", (function (t) {
                return r(t) + a(t)
            })).enter().append("g").attr("class", r).style("pointer-events", "none").append("g").attr("class", i).style("cursor", (function (t) {
                return n.data_selection_isselectable(t) ? "pointer" : null
            }))
        },xs.prototype.updateBar = function (t) {
            var e = this, n = e.barData.bind(e), r = e.classBar.bind(e), i = e.initialOpacity.bind(e),
                a = function (t) {
                    return e.color(t.id)
                }, o = e.main.selectAll("." + Hs.bars).selectAll("." + Hs.bar).data(n),
                s = o.enter().append("path").attr("class", r).style("stroke", a).style("fill", a);
            e.mainBar = s.merge(o).style("opacity", i), o.exit().transition().duration(t).style("opacity", 0)
        },xs.prototype.redrawBar = function (t, e, n) {
            var r = this;
            return [(e ? this.mainBar.transition(n) : this.mainBar).attr("d", t).style("stroke", this.color).style("fill", this.color).style("opacity", (function (t) {
                return r.isTargetToShow(t.id) ? 1 : 0
            }))]
        },xs.prototype.getBarW = function (t, e) {
            var n = this.config,
                r = "number" == typeof n.bar_width ? n.bar_width : e ? t.tickInterval() * n.bar_width_ratio / e : 0;
            return n.bar_width_max && r > n.bar_width_max ? n.bar_width_max : r
        },xs.prototype.getBars = function (t, e) {
            return (e ? this.main.selectAll("." + Hs.bars + this.getTargetSelectorSuffix(e)) : this.main).selectAll("." + Hs.bar + (Ms(t) ? "-" + t : ""))
        },xs.prototype.expandBars = function (t, e, n) {
            n && this.unexpandBars(), this.getBars(t, e).classed(Hs.EXPANDED, !0)
        },xs.prototype.unexpandBars = function (t) {
            this.getBars(t).classed(Hs.EXPANDED, !1)
        },xs.prototype.generateDrawBar = function (t, e) {
            var n = this.config, r = this.generateGetBarPoints(t, e);
            return function (t, e) {
                var i = r(t, e), a = n.axis_rotated ? 1 : 0, o = n.axis_rotated ? 0 : 1;
                return "M " + i[0][a] + "," + i[0][o] + " L" + i[1][a] + "," + i[1][o] + " L" + i[2][a] + "," + i[2][o] + " L" + i[3][a] + "," + i[3][o] + " z"
            }
        },xs.prototype.generateGetBarPoints = function (t, e) {
            var n = this, r = e ? n.subXAxis : n.xAxis, i = t.__max__ + 1, a = n.getBarW(r, i),
                o = n.getShapeX(a, i, t, !!e), s = n.getShapeY(!!e), l = n.getShapeOffset(n.isBarType, t, !!e),
                c = a * (n.config.bar_space / 2), u = e ? n.getSubYScale : n.getYScale;
            return function (t, e) {
                var r = u.call(n, t.id)(0), i = l(t, e) || r, h = o(t), d = s(t);
                return n.config.axis_rotated && (0 < t.value && d < r || t.value < 0 && r < d) && (d = r), [[h + c, i], [h + c, d -= r - i], [h + a - c, d], [h + a - c, i]]
            }
        },xs.prototype.isWithinBar = function (t, e) {
            return function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = e.x - n,
                    i = e.x + e.width + n, a = e.y + e.height + n, o = e.y - n;
                return r < t[0] && t[0] < i && o < t[1] && t[1] < a
            }(t, Ps(e), 2)
        },xs.prototype.getShapeIndices = function (t) {
            var e, n, r = this.config, i = {}, a = 0;
            return this.filterTargetsToShow(this.data.targets.filter(t, this)).forEach((function (t) {
                for (e = 0; e < r.data_groups.length; e++) if (!(r.data_groups[e].indexOf(t.id) < 0)) for (n = 0; n < r.data_groups[e].length; n++) if (r.data_groups[e][n] in i) {
                    i[t.id] = i[r.data_groups[e][n]];
                    break
                }
                Rs(i[t.id]) && (i[t.id] = a++)
            })), i.__max__ = a - 1, i
        },xs.prototype.getShapeX = function (t, e, n, r) {
            var i = r ? this.subX : this.x;
            return function (r) {
                var a = r.id in n ? n[r.id] : 0;
                return r.x || 0 === r.x ? i(r.x) - t * (e / 2 - a) : 0
            }
        },xs.prototype.getShapeY = function (t) {
            var e = this;
            return function (n) {
                return (t ? e.getSubYScale(n.id) : e.getYScale(n.id))(e.isTargetNormalized(n.id) ? e.getRatio("index", n, !0) : n.value)
            }
        },xs.prototype.getShapeOffset = function (t, e, n) {
            var r = this, i = r.orderTargets(r.filterTargetsToShow(r.data.targets.filter(t, r))),
                a = i.map((function (t) {
                    return t.id
                }));
            return function (t, o) {
                var s = n ? r.getSubYScale(t.id) : r.getYScale(t.id), l = s(0), c = l;
                return i.forEach((function (n) {
                    var i = r.isStepType(t) ? r.convertValuesToStep(n.values) : n.values,
                        u = r.isTargetNormalized(t.id), h = i.map((function (t) {
                            return u ? r.getRatio("index", t, !0) : t.value
                        }));
                    n.id !== t.id && e[n.id] === e[t.id] && a.indexOf(n.id) < a.indexOf(t.id) && ((Rs(i[o]) || +i[o].x != +t.x) && (o = -1, i.forEach((function (e, n) {
                        (e.x.constructor === Date ? +e.x : e.x) === (t.x.constructor === Date ? +t.x : t.x) && (o = n)
                    }))), o in i && i[o].value * t.value >= 0 && (c += s(h[o]) - l))
                })), c
            }
        },xs.prototype.isWithinShape = function (t, e) {
            var n, r = this, i = r.d3.select(t);
            return r.isTargetToShow(e.id) ? "circle" === t.nodeName ? n = r.isStepType(e) ? r.isWithinStep(t, r.getYScale(e.id)(e.value)) : r.isWithinCircle(t, 1.5 * r.pointSelectR(e)) : "path" === t.nodeName && (n = !i.classed(Hs.bar) || r.isWithinBar(r.d3.mouse(t), t)) : n = !1, n
        },xs.prototype.getInterpolate = function (t) {
            var e = this, n = e.d3, r = {
                linear: n.curveLinear,
                "linear-closed": n.curveLinearClosed,
                basis: n.curveBasis,
                "basis-open": n.curveBasisOpen,
                "basis-closed": n.curveBasisClosed,
                bundle: n.curveBundle,
                cardinal: n.curveCardinal,
                "cardinal-open": n.curveCardinalOpen,
                "cardinal-closed": n.curveCardinalClosed,
                monotone: n.curveMonotoneX,
                step: n.curveStep,
                "step-before": n.curveStepBefore,
                "step-after": n.curveStepAfter
            };
            return e.isSplineType(t) ? r[e.config.spline_interpolation_type] || r.cardinal : e.isStepType(t) ? r[e.config.line_step_type] : r.linear
        },xs.prototype.initLine = function () {
            this.main.select("." + Hs.chart).append("g").attr("class", Hs.chartLines)
        },xs.prototype.updateTargetsForLine = function (t) {
            var e, n = this, r = n.config, i = n.classChartLine.bind(n), a = n.classLines.bind(n),
                o = n.classAreas.bind(n), s = n.classCircles.bind(n), l = n.classFocus.bind(n);
            (e = n.main.select("." + Hs.chartLines).selectAll("." + Hs.chartLine).data(t).attr("class", (function (t) {
                return i(t) + l(t)
            })).enter().append("g").attr("class", i).style("opacity", 0).style("pointer-events", "none")).append("g").attr("class", a), e.append("g").attr("class", o), e.append("g").attr("class", (function (t) {
                return n.generateClass(Hs.selectedCircles, t.id)
            })), e.append("g").attr("class", s).style("cursor", (function (t) {
                return r.data_selection_isselectable(t) ? "pointer" : null
            })), t.forEach((function (t) {
                n.main.selectAll("." + Hs.selectedCircles + n.getTargetSelectorSuffix(t.id)).selectAll("." + Hs.selectedCircle).each((function (e) {
                    e.value = t.values[e.index].value
                }))
            }))
        },xs.prototype.updateLine = function (t) {
            var e = this, n = e.main.selectAll("." + Hs.lines).selectAll("." + Hs.line).data(e.lineData.bind(e)),
                r = n.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color);
            e.mainLine = r.merge(n).style("opacity", e.initialOpacity.bind(e)).style("shape-rendering", (function (t) {
                return e.isStepType(t) ? "crispEdges" : ""
            })).attr("transform", null), n.exit().transition().duration(t).style("opacity", 0)
        },xs.prototype.redrawLine = function (t, e, n) {
            return [(e ? this.mainLine.transition(n) : this.mainLine).attr("d", t).style("stroke", this.color).style("opacity", 1)]
        },xs.prototype.generateDrawLine = function (t, e) {
            var n = this, r = n.config, i = n.d3.line(), a = n.generateGetLinePoints(t, e),
                o = e ? n.getSubYScale : n.getYScale, s = function (t) {
                    return (e ? n.subxx : n.xx).call(n, t)
                }, l = function (t, e) {
                    return r.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(t.value)
                };
            return i = r.axis_rotated ? i.x(l).y(s) : i.x(s).y(l), r.line_connectNull || (i = i.defined((function (t) {
                return null != t.value
            }))), function (t) {
                var a, s = r.line_connectNull ? n.filterRemoveNull(t.values) : t.values, l = e ? n.subX : n.x,
                    c = o.call(n, t.id), u = 0, h = 0;
                return n.isLineType(t) ? r.data_regions[t.id] ? a = n.lineWithRegions(s, l, c, r.data_regions[t.id]) : (n.isStepType(t) && (s = n.convertValuesToStep(s)), a = i.curve(n.getInterpolate(t))(s)) : (s[0] && (u = l(s[0].x), h = c(s[0].value)), a = r.axis_rotated ? "M " + h + " " + u : "M " + u + " " + h), a || "M 0 0"
            }
        },xs.prototype.generateGetLinePoints = function (t, e) {
            var n = this, r = n.config, i = t.__max__ + 1, a = n.getShapeX(0, i, t, !!e), o = n.getShapeY(!!e),
                s = n.getShapeOffset(n.isLineType, t, !!e), l = e ? n.getSubYScale : n.getYScale;
            return function (t, e) {
                var i = l.call(n, t.id)(0), c = s(t, e) || i, u = a(t), h = o(t);
                return r.axis_rotated && (0 < t.value && h < i || t.value < 0 && i < h) && (h = i), [[u, h - (i - c)], [u, h - (i - c)], [u, h - (i - c)], [u, h - (i - c)]]
            }
        },xs.prototype.lineWithRegions = function (t, e, n, r) {
            var i, a, o, s, l, c, u, h, d, f, p, g = this, y = g.config, _ = "M", v = g.isCategorized() ? .5 : 0,
                m = [];

            function x(t, e) {
                var n;
                for (n = 0; n < e.length; n++) if (e[n].start < t && t <= e[n].end) return !0;
                return !1
            }

            if (Ls(r)) for (i = 0; i < r.length; i++) m[i] = {}, Rs(r[i].start) ? m[i].start = t[0].x : m[i].start = g.isTimeSeries() ? g.parseDate(r[i].start) : r[i].start, Rs(r[i].end) ? m[i].end = t[t.length - 1].x : m[i].end = g.isTimeSeries() ? g.parseDate(r[i].end) : r[i].end;

            function w(t) {
                return "M" + t[0][0] + " " + t[0][1] + " " + t[1][0] + " " + t[1][1]
            }

            for (f = y.axis_rotated ? function (t) {
                return n(t.value)
            } : function (t) {
                return e(t.x)
            }, p = y.axis_rotated ? function (t) {
                return e(t.x)
            } : function (t) {
                return n(t.value)
            }, o = g.isTimeSeries() ? function (t, r, i, a) {
                var o = t.x.getTime(), s = r.x - t.x, c = new Date(o + s * i), u = new Date(o + s * (i + a));
                return w(y.axis_rotated ? [[n(l(i)), e(c)], [n(l(i + a)), e(u)]] : [[e(c), n(l(i))], [e(u), n(l(i + a))]])
            } : function (t, r, i, a) {
                return w(y.axis_rotated ? [[n(l(i), !0), e(s(i))], [n(l(i + a), !0), e(s(i + a))]] : [[e(s(i), !0), n(l(i))], [e(s(i + a), !0), n(l(i + a))]])
            }, i = 0; i < t.length; i++) {
                if (Rs(m) || !x(t[i].x, m)) _ += " " + f(t[i]) + " " + p(t[i]); else for (s = g.getScale(t[i - 1].x + v, t[i].x + v, g.isTimeSeries()), l = g.getScale(t[i - 1].value, t[i].value), c = e(t[i].x) - e(t[i - 1].x), u = n(t[i].value) - n(t[i - 1].value), d = 2 * (h = 2 / Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2))), a = h; a <= 1; a += d) _ += o(t[i - 1], t[i], a, h);
                t[i].x
            }
            return _
        },xs.prototype.updateArea = function (t) {
            var e = this, n = e.d3,
                r = e.main.selectAll("." + Hs.areas).selectAll("." + Hs.area).data(e.lineData.bind(e)),
                i = r.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", (function () {
                    return e.orgAreaOpacity = +n.select(this).style("opacity"), 0
                }));
            e.mainArea = i.merge(r).style("opacity", e.orgAreaOpacity), r.exit().transition().duration(t).style("opacity", 0)
        },xs.prototype.redrawArea = function (t, e, n) {
            return [(e ? this.mainArea.transition(n) : this.mainArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity)]
        },xs.prototype.generateDrawArea = function (t, e) {
            var n = this, r = n.config, i = n.d3.area(), a = n.generateGetAreaPoints(t, e),
                o = e ? n.getSubYScale : n.getYScale, s = function (t) {
                    return (e ? n.subxx : n.xx).call(n, t)
                }, l = function (t, e) {
                    return r.data_groups.length > 0 ? a(t, e)[0][1] : o.call(n, t.id)(n.getAreaBaseValue(t.id))
                }, c = function (t, e) {
                    return r.data_groups.length > 0 ? a(t, e)[1][1] : o.call(n, t.id)(t.value)
                };
            return i = r.axis_rotated ? i.x0(l).x1(c).y(s) : i.x(s).y0(r.area_above ? 0 : l).y1(c), r.line_connectNull || (i = i.defined((function (t) {
                return null !== t.value
            }))), function (t) {
                var e, a = r.line_connectNull ? n.filterRemoveNull(t.values) : t.values, o = 0, s = 0;
                return n.isAreaType(t) ? (n.isStepType(t) && (a = n.convertValuesToStep(a)), e = i.curve(n.getInterpolate(t))(a)) : (a[0] && (o = n.x(a[0].x), s = n.getYScale(t.id)(a[0].value)), e = r.axis_rotated ? "M " + s + " " + o : "M " + o + " " + s), e || "M 0 0"
            }
        },xs.prototype.getAreaBaseValue = function () {
            return 0
        },xs.prototype.generateGetAreaPoints = function (t, e) {
            var n = this, r = n.config, i = t.__max__ + 1, a = n.getShapeX(0, i, t, !!e), o = n.getShapeY(!!e),
                s = n.getShapeOffset(n.isAreaType, t, !!e), l = e ? n.getSubYScale : n.getYScale;
            return function (t, e) {
                var i = l.call(n, t.id)(0), c = s(t, e) || i, u = a(t), h = o(t);
                return r.axis_rotated && (0 < t.value && h < i || t.value < 0 && i < h) && (h = i), [[u, c], [u, h - (i - c)], [u, h - (i - c)], [u, c]]
            }
        },xs.prototype.updateCircle = function (t, e) {
            var n = this,
                r = n.main.selectAll("." + Hs.circles).selectAll("." + Hs.circle).data(n.lineOrScatterOrStanfordData.bind(n)),
                i = r.enter().append("circle").attr("shape-rendering", n.isStanfordGraphType() ? "crispEdges" : "").attr("class", n.classCircle.bind(n)).attr("cx", t).attr("cy", e).attr("r", n.pointR.bind(n)).style("color", n.isStanfordGraphType() ? n.getStanfordPointColor.bind(n) : n.color);
            n.mainCircle = i.merge(r).style("opacity", n.isStanfordGraphType() ? 1 : n.initialOpacityForCircle.bind(n)), r.exit().style("opacity", 0)
        },xs.prototype.redrawCircle = function (t, e, n, r) {
            var i = this, a = i.main.selectAll("." + Hs.selectedCircle);
            return [(n ? i.mainCircle.transition(r) : i.mainCircle).style("opacity", this.opacityForCircle.bind(i)).style("color", i.isStanfordGraphType() ? i.getStanfordPointColor.bind(i) : i.color).attr("cx", t).attr("cy", e), (n ? a.transition(r) : a).attr("cx", t).attr("cy", e)]
        },xs.prototype.circleX = function (t) {
            return t.x || 0 === t.x ? this.x(t.x) : null
        },xs.prototype.updateCircleY = function () {
            var t, e, n = this;
            n.config.data_groups.length > 0 ? (t = n.getShapeIndices(n.isLineType), e = n.generateGetLinePoints(t), n.circleY = function (t, n) {
                return e(t, n)[0][1]
            }) : n.circleY = function (t) {
                return n.getYScale(t.id)(t.value)
            }
        },xs.prototype.getCircles = function (t, e) {
            return (e ? this.main.selectAll("." + Hs.circles + this.getTargetSelectorSuffix(e)) : this.main).selectAll("." + Hs.circle + (Ms(t) ? "-" + t : ""))
        },xs.prototype.expandCircles = function (t, e, n) {
            var r = this.pointExpandedR.bind(this);
            n && this.unexpandCircles(), this.getCircles(t, e).classed(Hs.EXPANDED, !0).attr("r", r)
        },xs.prototype.unexpandCircles = function (t) {
            var e = this, n = e.pointR.bind(e);
            e.getCircles(t).filter((function () {
                return e.d3.select(this).classed(Hs.EXPANDED)
            })).classed(Hs.EXPANDED, !1).attr("r", n)
        },xs.prototype.pointR = function (t) {
            var e = this.config;
            return this.isStepType(t) ? 0 : Es(e.point_r) ? e.point_r(t) : e.point_r
        },xs.prototype.pointExpandedR = function (t) {
            var e = this.config;
            return e.point_focus_expand_enabled ? Es(e.point_focus_expand_r) ? e.point_focus_expand_r(t) : e.point_focus_expand_r ? e.point_focus_expand_r : 1.75 * this.pointR(t) : this.pointR(t)
        },xs.prototype.pointSelectR = function (t) {
            var e = this.config;
            return Es(e.point_select_r) ? e.point_select_r(t) : e.point_select_r ? e.point_select_r : 4 * this.pointR(t)
        },xs.prototype.isWithinCircle = function (t, e) {
            var n = this.d3, r = n.mouse(t), i = n.select(t), a = +i.attr("cx"), o = +i.attr("cy");
            return Math.sqrt(Math.pow(a - r[0], 2) + Math.pow(o - r[1], 2)) < e
        },xs.prototype.isWithinStep = function (t, e) {
            return Math.abs(e - this.d3.mouse(t)[1]) < 30
        },xs.prototype.getCurrentWidth = function () {
            var t = this.config;
            return t.size_width ? t.size_width : this.getParentWidth()
        },xs.prototype.getCurrentHeight = function () {
            var t = this.config, e = t.size_height ? t.size_height : this.getParentHeight();
            return e > 0 ? e : 320 / (this.hasType("gauge") && !t.gauge_fullCircle ? 2 : 1)
        },xs.prototype.getCurrentPaddingTop = function () {
            var t = this.config, e = Ms(t.padding_top) ? t.padding_top : 0;
            return this.title && this.title.node() && (e += this.getTitlePadding()), e
        },xs.prototype.getCurrentPaddingBottom = function () {
            var t = this.config;
            return Ms(t.padding_bottom) ? t.padding_bottom : 0
        },xs.prototype.getCurrentPaddingLeft = function (t) {
            var e = this.config;
            return Ms(e.padding_left) ? e.padding_left : e.axis_rotated ? !e.axis_x_show || e.axis_x_inner ? 1 : Math.max(Ss(this.getAxisWidthByAxisId("x", t)), 40) : !e.axis_y_show || e.axis_y_inner ? this.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : Ss(this.getAxisWidthByAxisId("y", t))
        },xs.prototype.getCurrentPaddingRight = function () {
            var t = this, e = t.config, n = 0, r = t.isLegendRight ? t.getLegendWidth() + 20 : 0;
            return n = Ms(e.padding_right) ? e.padding_right + 1 : e.axis_rotated ? 10 + r : !e.axis_y2_show || e.axis_y2_inner ? 2 + r + (t.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : Ss(t.getAxisWidthByAxisId("y2")) + r, t.colorScale && t.colorScale.node() && (n += t.getColorScalePadding()), n
        },xs.prototype.getParentRectValue = function (t) {
            for (var e, n = this.selectChart.node(); n && "BODY" !== n.tagName;) {
                try {
                    e = n.getBoundingClientRect()[t]
                } catch (r) {
                    "width" === t && (e = n.offsetWidth)
                }
                if (e) break;
                n = n.parentNode
            }
            return e
        },xs.prototype.getParentWidth = function () {
            return this.getParentRectValue("width")
        },xs.prototype.getParentHeight = function () {
            var t = this.selectChart.style("height");
            return t.indexOf("px") > 0 ? +t.replace("px", "") : 0
        },xs.prototype.getSvgLeft = function (t) {
            var e = this, n = e.config, r = n.axis_rotated || !n.axis_rotated && !n.axis_y_inner,
                i = n.axis_rotated ? Hs.axisX : Hs.axisY, a = e.main.select("." + i).node(),
                o = a && r ? a.getBoundingClientRect() : {right: 0}, s = e.selectChart.node().getBoundingClientRect(),
                l = e.hasArcType(), c = o.right - s.left - (l ? 0 : e.getCurrentPaddingLeft(t));
            return c > 0 ? c : 0
        },xs.prototype.getAxisWidthByAxisId = function (t, e) {
            var n = this.axis.getLabelPositionById(t);
            return this.axis.getMaxTickWidth(t, e) + (n.isInner ? 20 : 40)
        },xs.prototype.getHorizontalAxisHeight = function (t) {
            var e = this, n = e.config, r = 30;
            return "x" !== t || n.axis_x_show ? "x" === t && n.axis_x_height ? n.axis_x_height : "y" !== t || n.axis_y_show ? "y2" !== t || n.axis_y2_show ? ("x" === t && !n.axis_rotated && n.axis_x_tick_rotate && (r = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - Math.abs(n.axis_x_tick_rotate)) / 180)), "y" === t && n.axis_rotated && n.axis_y_tick_rotate && (r = 30 + e.axis.getMaxTickWidth(t) * Math.cos(Math.PI * (90 - Math.abs(n.axis_y_tick_rotate)) / 180)), r + (e.axis.getLabelPositionById(t).isInner ? 0 : 10) + ("y2" === t ? -10 : 0)) : e.rotated_padding_top : !n.legend_show || e.isLegendRight || e.isLegendInset ? 1 : 10 : 8
        },xs.prototype.initBrush = function (t) {
            var e = this, n = e.d3;
            return e.brush = (e.config.axis_rotated ? n.brushY() : n.brushX()).on("brush", (function () {
                var t = n.event.sourceEvent;
                t && "zoom" === t.type || e.redrawForBrush()
            })).on("end", (function () {
                var t = n.event.sourceEvent;
                t && "zoom" === t.type || e.brush.empty() && t && "end" !== t.type && e.brush.clear()
            })), e.brush.updateExtent = function () {
                var t, n = this.scale.range();
                return t = e.config.axis_rotated ? [[0, n[0]], [e.width2, n[1]]] : [[n[0], 0], [n[1], e.height2]], this.extent(t), this
            }, e.brush.updateScale = function (t) {
                return this.scale = t, this
            }, e.brush.update = function (t) {
                this.updateScale(t || e.subX).updateExtent(), e.context.select("." + Hs.brush).call(this)
            }, e.brush.clear = function () {
                e.context.select("." + Hs.brush).call(e.brush.move, null)
            }, e.brush.selection = function () {
                return n.brushSelection(e.context.select("." + Hs.brush).node())
            }, e.brush.selectionAsValue = function (t, n) {
                var r, i;
                return t ? (e.context && (r = [this.scale(t[0]), this.scale(t[1])], i = e.context.select("." + Hs.brush), n && (i = i.transition()), e.brush.move(i, r)), []) : (r = e.brush.selection() || [0, 0], [this.scale.invert(r[0]), this.scale.invert(r[1])])
            }, e.brush.empty = function () {
                var t = e.brush.selection();
                return !t || t[0] === t[1]
            }, e.brush.updateScale(t)
        },xs.prototype.initSubchart = function () {
            var t = this, e = t.config, n = t.context = t.svg.append("g").attr("transform", t.getTranslate("context"));
            n.style("visibility", "visible"), n.append("g").attr("clip-path", t.clipPathForSubchart).attr("class", Hs.chart), n.select("." + Hs.chart).append("g").attr("class", Hs.chartBars), n.select("." + Hs.chart).append("g").attr("class", Hs.chartLines), n.append("g").attr("clip-path", t.clipPath).attr("class", Hs.brush), t.axes.subx = n.append("g").attr("class", Hs.axisX).attr("transform", t.getTranslate("subx")).attr("clip-path", e.axis_rotated ? "" : t.clipPathForXAxis)
        },xs.prototype.initSubchartBrush = function () {
            this.initBrush(this.subX).updateExtent(), this.context.select("." + Hs.brush).call(this.brush)
        },xs.prototype.updateTargetsForSubchart = function (t) {
            var e, n, r, i, a = this, o = a.context, s = a.config, l = a.classChartBar.bind(a), c = a.classBars.bind(a),
                u = a.classChartLine.bind(a), h = a.classLines.bind(a), d = a.classAreas.bind(a);
            (r = (i = o.select("." + Hs.chartBars).selectAll("." + Hs.chartBar).data(t)).enter().append("g").style("opacity", 0)).merge(i).attr("class", l), r.append("g").attr("class", c), (e = (n = o.select("." + Hs.chartLines).selectAll("." + Hs.chartLine).data(t)).enter().append("g").style("opacity", 0)).merge(n).attr("class", u), e.append("g").attr("class", h), e.append("g").attr("class", d), o.selectAll("." + Hs.brush + " rect").attr(s.axis_rotated ? "width" : "height", s.axis_rotated ? a.width2 : a.height2)
        },xs.prototype.updateBarForSubchart = function (t) {
            var e = this, n = e.context.selectAll("." + Hs.bars).selectAll("." + Hs.bar).data(e.barData.bind(e)),
                r = n.enter().append("path").attr("class", e.classBar.bind(e)).style("stroke", "none").style("fill", e.color);
            n.exit().transition().duration(t).style("opacity", 0).remove(), e.contextBar = r.merge(n).style("opacity", e.initialOpacity.bind(e))
        },xs.prototype.redrawBarForSubchart = function (t, e, n) {
            (e ? this.contextBar.transition(Math.random().toString()).duration(n) : this.contextBar).attr("d", t).style("opacity", 1)
        },xs.prototype.updateLineForSubchart = function (t) {
            var e = this, n = e.context.selectAll("." + Hs.lines).selectAll("." + Hs.line).data(e.lineData.bind(e)),
                r = n.enter().append("path").attr("class", e.classLine.bind(e)).style("stroke", e.color);
            n.exit().transition().duration(t).style("opacity", 0).remove(), e.contextLine = r.merge(n).style("opacity", e.initialOpacity.bind(e))
        },xs.prototype.redrawLineForSubchart = function (t, e, n) {
            (e ? this.contextLine.transition(Math.random().toString()).duration(n) : this.contextLine).attr("d", t).style("opacity", 1)
        },xs.prototype.updateAreaForSubchart = function (t) {
            var e = this, n = e.d3,
                r = e.context.selectAll("." + Hs.areas).selectAll("." + Hs.area).data(e.lineData.bind(e)),
                i = r.enter().append("path").attr("class", e.classArea.bind(e)).style("fill", e.color).style("opacity", (function () {
                    return e.orgAreaOpacity = +n.select(this).style("opacity"), 0
                }));
            r.exit().transition().duration(t).style("opacity", 0).remove(), e.contextArea = i.merge(r).style("opacity", 0)
        },xs.prototype.redrawAreaForSubchart = function (t, e, n) {
            (e ? this.contextArea.transition(Math.random().toString()).duration(n) : this.contextArea).attr("d", t).style("fill", this.color).style("opacity", this.orgAreaOpacity)
        },xs.prototype.redrawSubchart = function (t, e, n, r, i, a, o) {
            var s, l, c, u = this, h = u.d3;
            h.event && "zoom" === h.event.type && u.brush.selectionAsValue(u.x.orgDomain()), t && (u.brush.empty() || u.brush.selectionAsValue(u.x.orgDomain()), s = u.generateDrawArea(i, !0), l = u.generateDrawBar(a, !0), c = u.generateDrawLine(o, !0), u.updateBarForSubchart(n), u.updateLineForSubchart(n), u.updateAreaForSubchart(n), u.redrawBarForSubchart(l, n, n), u.redrawLineForSubchart(c, n, n), u.redrawAreaForSubchart(s, n, n))
        },xs.prototype.redrawForBrush = function () {
            var t, e = this, n = e.x, r = e.d3;
            e.redraw({
                withTransition: !1,
                withY: e.config.zoom_rescale,
                withSubchart: !1,
                withUpdateXDomain: !0,
                withEventRect: !1,
                withDimension: !1
            }), t = r.event.selection || e.brush.scale.range(), e.main.select("." + Hs.eventRect).call(e.zoom.transform, r.zoomIdentity.scale(e.width / (t[1] - t[0])).translate(-t[0], 0)), e.config.subchart_onbrush.call(e.api, n.orgDomain())
        },xs.prototype.transformContext = function (t, e) {
            var n;
            e && e.axisSubX ? n = e.axisSubX : (n = this.context.select("." + Hs.axisX), t && (n = n.transition())), this.context.attr("transform", this.getTranslate("context")), n.attr("transform", this.getTranslate("subx"))
        },xs.prototype.getDefaultSelection = function () {
            var t = this, e = t.config,
                n = Es(e.axis_x_selection) ? e.axis_x_selection(t.getXDomain(t.data.targets)) : e.axis_x_selection;
            return t.isTimeSeries() && (n = [t.parseDate(n[0]), t.parseDate(n[1])]), n
        },xs.prototype.removeSubchart = function () {
            this.brush = null, this.context.remove(), this.context = null
        },xs.prototype.initText = function () {
            this.main.select("." + Hs.chart).append("g").attr("class", Hs.chartTexts), this.mainText = this.d3.selectAll([])
        },xs.prototype.updateTargetsForText = function (t) {
            var e = this, n = e.classChartText.bind(e), r = e.classTexts.bind(e), i = e.classFocus.bind(e),
                a = e.main.select("." + Hs.chartTexts).selectAll("." + Hs.chartText).data(t),
                o = a.enter().append("g").attr("class", n).style("opacity", 0).style("pointer-events", "none");
            o.append("g").attr("class", r), o.merge(a).attr("class", (function (t) {
                return n(t) + i(t)
            }))
        },xs.prototype.updateText = function (t, e, n) {
            var r = this, i = r.config, a = r.barOrLineData.bind(r), o = r.classText.bind(r),
                s = r.main.selectAll("." + Hs.texts).selectAll("." + Hs.text).data(a),
                l = s.enter().append("text").attr("class", o).attr("text-anchor", (function (t) {
                    return i.axis_rotated ? t.value < 0 ? "end" : "start" : "middle"
                })).style("stroke", "none").attr("x", t).attr("y", e).style("fill", (function (t) {
                    return r.color(t)
                })).style("fill-opacity", 0);
            r.mainText = l.merge(s).text((function (t, e, n) {
                return r.dataLabelFormat(t.id)(t.value, t.id, e, n)
            })), s.exit().transition().duration(n).style("fill-opacity", 0).remove()
        },xs.prototype.redrawText = function (t, e, n, r, i) {
            return [(r ? this.mainText.transition(i) : this.mainText).attr("x", t).attr("y", e).style("fill", this.color).style("fill-opacity", n ? 0 : this.opacityForText.bind(this))]
        },xs.prototype.getTextRect = function (t, e, n) {
            var r, i = this.d3.select("body").append("div").classed("c3", !0),
                a = i.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0),
                o = this.d3.select(n).style("font");
            return a.selectAll(".dummy").data([t]).enter().append("text").classed(e || "", !0).style("font", o).text(t).each((function () {
                r = Ps(this)
            })), i.remove(), r
        },xs.prototype.generateXYForText = function (t, e, n, r) {
            var i = this, a = i.generateGetAreaPoints(t, !1), o = i.generateGetBarPoints(e, !1),
                s = i.generateGetLinePoints(n, !1), l = r ? i.getXForText : i.getYForText;
            return function (t, e) {
                var n = i.isAreaType(t) ? a : i.isBarType(t) ? o : s;
                return l.call(i, n(t, e), t, this)
            }
        },xs.prototype.getXForText = function (t, e, n) {
            var r, i, a = this, o = Ps(n);
            return a.config.axis_rotated ? (i = a.isBarType(e) ? 4 : 6, r = t[2][1] + i * (e.value < 0 ? -1 : 1)) : r = a.hasType("bar") ? (t[2][0] + t[0][0]) / 2 : t[0][0], null === e.value && (r > a.width ? r = a.width - o.width : r < 0 && (r = 4)), r
        },xs.prototype.getYForText = function (t, e, n) {
            var r, i = this, a = Ps(n);
            return i.config.axis_rotated ? r = (t[0][0] + t[2][0] + .6 * a.height) / 2 : (r = t[2][1], e.value < 0 || 0 === e.value && !i.hasPositiveValue ? (r += a.height, i.isBarType(e) && i.isSafari() ? r -= 3 : !i.isBarType(e) && i.isChrome() && (r += 3)) : r += i.isBarType(e) ? -3 : -6), null !== e.value || i.config.axis_rotated || (r < a.height ? r = a.height : r > this.height && (r = this.height - 4)), r
        },xs.prototype.initTitle = function () {
            this.title = this.svg.append("text").text(this.config.title_text).attr("class", this.CLASS.title)
        },xs.prototype.redrawTitle = function () {
            var t = this;
            t.title.attr("x", t.xForTitle.bind(t)).attr("y", t.yForTitle.bind(t))
        },xs.prototype.xForTitle = function () {
            var t = this, e = t.config, n = e.title_position || "left";
            return n.indexOf("right") >= 0 ? t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width - e.title_padding.right : n.indexOf("center") >= 0 ? Math.max((t.currentWidth - t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).width) / 2, 0) : e.title_padding.left
        },xs.prototype.yForTitle = function () {
            var t = this;
            return t.config.title_padding.top + t.getTextRect(t.title.node().textContent, t.CLASS.title, t.title.node()).height
        },xs.prototype.getTitlePadding = function () {
            return this.yForTitle() + this.config.title_padding.bottom
        },xs.prototype.drawColorScale = function () {
            var t, e, n, r, i, a, o, s = this, l = s.d3, c = s.config, u = s.data.targets[0];
            if (t = isNaN(c.stanford_scaleWidth) ? 20 : c.stanford_scaleWidth, 5, t < 0) throw Error("Colorscale's barheight and barwidth must be greater than 0.");
            o = s.height - c.stanford_padding.bottom - c.stanford_padding.top, n = l.range(c.stanford_padding.bottom, o, 5), a = l.scaleSequential(u.colors).domain([n[n.length - 1], n[0]]), s.colorScale && s.colorScale.remove(), s.colorScale = s.svg.append("g").attr("width", 50).attr("height", o).attr("class", Hs.colorScale), s.colorScale.append("g").attr("transform", "translate(0, ".concat(c.stanford_padding.top, ")")).selectAll("bars").data(n).enter().append("rect").attr("y", (function (t, e) {
                return 5 * e
            })).attr("x", 0).attr("width", t).attr("height", 5).attr("fill", (function (t) {
                return a(t)
            })), i = l.scaleLog().domain([u.minEpochs, u.maxEpochs]).range([n[0] + c.stanford_padding.top + n[n.length - 1] + 5 - 1, n[0] + c.stanford_padding.top]), r = l.axisRight(i), "pow10" === c.stanford_scaleFormat ? r.tickValues([1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7]) : Es(c.stanford_scaleFormat) ? r.tickFormat(c.stanford_scaleFormat) : r.tickFormat(l.format("d")), Es(c.stanford_scaleValues) && r.tickValues(c.stanford_scaleValues(u.minEpochs, u.maxEpochs)), e = s.colorScale.append("g").attr("class", "legend axis").attr("transform", "translate(".concat(t, ",0)")).call(r), "pow10" === c.stanford_scaleFormat && e.selectAll(".tick text").text(null).filter(Bs).text(10).append("tspan").attr("dy", "-.7em").text((function (t) {
                return Math.round(Math.log(t) / Math.LN10)
            })), s.colorScale.attr("transform", "translate(".concat(s.currentWidth - s.xForColorScale(), ", 0)"))
        },xs.prototype.xForColorScale = function () {
            return this.config.stanford_padding.right + Ps(this.colorScale.node()).width
        },xs.prototype.getColorScalePadding = function () {
            return this.xForColorScale() + this.config.stanford_padding.left + 20
        },xs.prototype.isStanfordGraphType = function () {
            return "stanford" === this.config.data_type
        },xs.prototype.initStanfordData = function () {
            var t, e, n, r = this.d3, i = this.config, a = this.data.targets[0];
            if (a.values.sort(Ws), t = a.values.map((function (t) {
                return t.epochs
            })), (n = isNaN(i.stanford_scaleMin) ? r.min(t) : i.stanford_scaleMin) > (e = isNaN(i.stanford_scaleMax) ? r.max(t) : i.stanford_scaleMax)) throw Error("Number of minEpochs has to be smaller than maxEpochs");
            a.colors = Es(i.stanford_colors) ? i.stanford_colors : r.interpolateHslLong(r.hsl(250, 1, .5), r.hsl(0, 1, .5)), a.colorscale = r.scaleSequentialLog(a.colors).domain([n, e]), a.minEpochs = n, a.maxEpochs = e
        },xs.prototype.getStanfordPointColor = function (t) {
            return this.data.targets[0].colorscale(t.epochs)
        },xs.prototype.getCentroid = function (t) {
            var e, n, r, i, a, o = Ys(t), s = 0, l = 0;
            for (e = 0, n = t.length - 1; e < t.length; n = e, e += 1) i = t[e], a = t[n], r = i.x * a.y - a.x * i.y, s += (i.x + a.x) * r, l += (i.y + a.y) * r;
            return {x: s / (r = 6 * o), y: l / r}
        },xs.prototype.getStanfordTooltipTitle = function (t) {
            var e = this.axis.getLabelText("x"), n = this.axis.getLabelText("y");
            return "\n      <tr><th>".concat(e ? Gs(e) : "x", "</th><th class='value'>").concat(t.x, "</th></tr>\n      <tr><th>").concat(n ? Gs(n) : "y", "</th><th class='value'>").concat(t.value, "</th></tr>\n    ")
        },xs.prototype.countEpochsInRegion = function (t) {
            var e, n, r = this.data.targets[0];
            return e = r.values.reduce((function (t, e) {
                return t + Number(e.epochs)
            }), 0), {
                value: n = r.values.reduce((function (e, n) {
                    return Us(n, t) ? e + Number(n.epochs) : e
                }), 0), percentage: 0 !== n ? (n / e * 100).toFixed(1) : 0
            }
        };
        var Ys = function (t) {
            var e, n, r, i, a = 0;
            for (e = 0, n = t.length - 1; e < t.length; n = e, e += 1) r = t[e], i = t[n], a += r.x * i.y, a -= r.y * i.x;
            return a /= 2
        }, Us = function (t, e) {
            for (var n, r, i, a, o = t.x, s = t.value, l = !1, c = 0, u = e.length - 1; c < e.length; u = c++) n = e[c].x, r = e[c].y, a = e[u].x, r > s != (i = e[u].y) > s && o < (a - n) * (s - r) / (i - r) + n && (l = !l);
            return l
        }, Ws = function (t, e) {
            return t.epochs < e.epochs ? -1 : t.epochs > e.epochs ? 1 : 0
        };
        xs.prototype.initStanfordElements = function () {
            var t = this;
            t.stanfordElements = t.main.select("." + Hs.chart).append("g").attr("class", Hs.stanfordElements), t.stanfordElements.append("g").attr("class", Hs.stanfordLines), t.stanfordElements.append("g").attr("class", Hs.stanfordTexts), t.stanfordElements.append("g").attr("class", Hs.stanfordRegions)
        }, xs.prototype.updateStanfordElements = function (t) {
            var e, n, r, i, a, o, s = this, l = s.main, c = s.config, u = s.xvCustom.bind(s), h = s.yvCustom.bind(s),
                d = s.countEpochsInRegion.bind(s);
            (n = (e = l.select("." + Hs.stanfordLines).style("shape-rendering", "geometricprecision").selectAll("." + Hs.stanfordLine).data(c.stanford_lines)).enter().append("g").attr("class", (function (t) {
                return Hs.stanfordLine + (t.class ? " " + t.class : "")
            }))).append("line").attr("x1", (function (t) {
                return c.axis_rotated ? h(t, "value_y1") : u(t, "value_x1")
            })).attr("x2", (function (t) {
                return c.axis_rotated ? h(t, "value_y2") : u(t, "value_x2")
            })).attr("y1", (function (t) {
                return c.axis_rotated ? u(t, "value_x1") : h(t, "value_y1")
            })).attr("y2", (function (t) {
                return c.axis_rotated ? u(t, "value_x2") : h(t, "value_y2")
            })).style("opacity", 0), s.stanfordLines = n.merge(e), s.stanfordLines.select("line").transition().duration(t).attr("x1", (function (t) {
                return c.axis_rotated ? h(t, "value_y1") : u(t, "value_x1")
            })).attr("x2", (function (t) {
                return c.axis_rotated ? h(t, "value_y2") : u(t, "value_x2")
            })).attr("y1", (function (t) {
                return c.axis_rotated ? u(t, "value_x1") : h(t, "value_y1")
            })).attr("y2", (function (t) {
                return c.axis_rotated ? u(t, "value_x2") : h(t, "value_y2")
            })).style("opacity", 1), e.exit().transition().duration(t).style("opacity", 0).remove(), (o = (a = l.select("." + Hs.stanfordTexts).selectAll("." + Hs.stanfordText).data(c.stanford_texts)).enter().append("g").attr("class", (function (t) {
                return Hs.stanfordText + (t.class ? " " + t.class : "")
            }))).append("text").attr("x", (function (t) {
                return c.axis_rotated ? h(t, "y") : u(t, "x")
            })).attr("y", (function (t) {
                return c.axis_rotated ? u(t, "x") : h(t, "y")
            })).style("opacity", 0), s.stanfordTexts = o.merge(a), s.stanfordTexts.select("text").transition().duration(t).attr("x", (function (t) {
                return c.axis_rotated ? h(t, "y") : u(t, "x")
            })).attr("y", (function (t) {
                return c.axis_rotated ? u(t, "x") : h(t, "y")
            })).text((function (t) {
                return t.content
            })).style("opacity", 1), a.exit().transition().duration(t).style("opacity", 0).remove(), (i = (r = l.select("." + Hs.stanfordRegions).selectAll("." + Hs.stanfordRegion).data(c.stanford_regions)).enter().append("g").attr("class", (function (t) {
                return Hs.stanfordRegion + (t.class ? " " + t.class : "")
            }))).append("polygon").attr("points", (function (t) {
                return t.points.map((function (t) {
                    return [c.axis_rotated ? h(t, "y") : u(t, "x"), c.axis_rotated ? u(t, "x") : h(t, "y")].join(",")
                })).join(" ")
            })).style("opacity", 0), i.append("text").attr("x", (function (t) {
                return s.getCentroid(t.points).x
            })).attr("y", (function (t) {
                return s.getCentroid(t.points).y
            })).style("opacity", 0), s.stanfordRegions = i.merge(r), s.stanfordRegions.select("polygon").transition().duration(t).attr("points", (function (t) {
                return t.points.map((function (t) {
                    return [c.axis_rotated ? h(t, "y") : u(t, "x"), c.axis_rotated ? u(t, "x") : h(t, "y")].join(",")
                })).join(" ")
            })).style("opacity", (function (t) {
                return t.opacity ? t.opacity : .2
            })), s.stanfordRegions.select("text").transition().duration(t).attr("x", (function (t) {
                return c.axis_rotated ? h(s.getCentroid(t.points), "y") : u(s.getCentroid(t.points), "x")
            })).attr("y", (function (t) {
                return c.axis_rotated ? u(s.getCentroid(t.points), "x") : h(s.getCentroid(t.points), "y")
            })).text((function (t) {
                var e, n, r;
                return t.text ? (s.isStanfordGraphType() && (e = (r = d(t.points)).value, n = r.percentage), t.text(e, n)) : ""
            })).attr("text-anchor", "middle").attr("dominant-baseline", "middle").style("opacity", 1), r.exit().transition().duration(t).style("opacity", 0).remove()
        }, xs.prototype.initTooltip = function () {
            var t, e = this, n = e.config;
            if (e.tooltip = e.selectChart.style("position", "relative").append("div").attr("class", Hs.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), n.tooltip_init_show) {
                if (e.isTimeSeries() && Vs(n.tooltip_init_x)) {
                    for (n.tooltip_init_x = e.parseDate(n.tooltip_init_x), t = 0; t < e.data.targets[0].values.length && e.data.targets[0].values[t].x - n.tooltip_init_x != 0; t++) ;
                    n.tooltip_init_x = t
                }
                e.tooltip.html(n.tooltip_contents.call(e, e.data.targets.map((function (t) {
                    return e.addName(t.values[n.tooltip_init_x])
                })), e.axis.getXAxisTickFormat(), e.getYFormat(e.hasArcType()), e.color)), e.tooltip.style("top", n.tooltip_init_position.top).style("left", n.tooltip_init_position.left).style("display", "block")
            }
        }, xs.prototype.getTooltipSortFunction = function () {
            var t = this, e = t.config;
            if (0 !== e.data_groups.length && void 0 === e.tooltip_order) {
                var n = t.orderTargets(t.data.targets).map((function (t) {
                    return t.id
                }));
                return (t.isOrderAsc() || t.isOrderDesc()) && (n = n.reverse()), function (t, e) {
                    return n.indexOf(t.id) - n.indexOf(e.id)
                }
            }
            var r = e.tooltip_order;
            void 0 === r && (r = e.data_order);
            var i = function (t) {
                return t ? t.value : null
            };
            if (Vs(r) && "asc" === r.toLowerCase()) return function (t, e) {
                return i(t) - i(e)
            };
            if (Vs(r) && "desc" === r.toLowerCase()) return function (t, e) {
                return i(e) - i(t)
            };
            if (Es(r)) {
                var a = r;
                return void 0 === e.tooltip_order && (a = function (t, e) {
                    return r(t ? {id: t.id, values: [t]} : null, e ? {id: e.id, values: [e]} : null)
                }), a
            }
            return Ds(r) ? function (t, e) {
                return r.indexOf(t.id) - r.indexOf(e.id)
            } : void 0
        }, xs.prototype.getTooltipContent = function (t, e, n, r) {
            var i, a, o, s, l, c, u = this, h = u.config, d = h.tooltip_format_title || e,
                f = h.tooltip_format_name || function (t) {
                    return t
                }, p = h.tooltip_format_value;
            p || (p = u.isTargetNormalized(t.id) ? function (t, e) {
                return "".concat((100 * e).toFixed(2), "%")
            } : n);
            var g = this.getTooltipSortFunction();
            for (g && t.sort(g), a = 0; a < t.length; a++) if (t[a] && (t[a].value || 0 === t[a].value)) {
                if (u.isStanfordGraphType()) i || (o = u.getStanfordTooltipTitle(t[a]), i = "<table class='" + u.CLASS.tooltip + "'>" + o), c = u.getStanfordPointColor(t[a]), l = Gs(h.data_epochs), s = t[a].epochs; else if (i || (o = Gs(d ? d(t[a].x, t[a].index) : t[a].x), i = "<table class='" + u.CLASS.tooltip + "'>" + (o || 0 === o ? "<tr><th colspan='2'>" + o + "</th></tr>" : "")), void 0 !== (s = Gs(p(t[a].value, t[a].ratio, t[a].id, t[a].index, t)))) {
                    if (null === t[a].name) continue;
                    l = Gs(f(t[a].name, t[a].ratio, t[a].id, t[a].index)), c = u.levelColor ? u.levelColor(t[a].value) : r(t[a].id)
                }
                void 0 !== s && (i += "<tr class='" + u.CLASS.tooltipName + "-" + u.getTargetSelectorSuffix(t[a].id) + "'>", i += "<td class='name'><span style='background-color:" + c + "'></span>" + l + "</td>", i += "<td class='value'>" + s + "</td>", i += "</tr>")
            }
            return i + "</table>"
        }, xs.prototype.tooltipPosition = function (t, e, n, r) {
            var i, a, o, s, l, c = this, u = c.config, h = c.d3, d = c.hasArcType(), f = h.mouse(r);
            return d ? (a = (c.width - (c.isLegendRight ? c.getLegendWidth() : 0)) / 2 + f[0], s = (c.hasType("gauge") ? c.height : c.height / 2) + f[1] + 20) : (i = c.getSvgLeft(!0), u.axis_rotated ? (o = (a = i + f[0] + 100) + e, l = c.currentWidth - c.getCurrentPaddingRight(), s = c.x(t[0].x) + 20) : (o = (a = i + c.getCurrentPaddingLeft(!0) + c.x(t[0].x) + 20) + e, l = i + c.currentWidth - c.getCurrentPaddingRight(), s = f[1] + 15), o > l && (a -= o - l + 20), s + n > c.currentHeight && (s -= n + 30)), s < 0 && (s = 0), {
                top: s,
                left: a
            }
        }, xs.prototype.showTooltip = function (t, e) {
            var n, r, i, a = this, o = a.config, s = a.hasArcType(), l = t.filter((function (t) {
                return t && Ms(t.value)
            })), c = o.tooltip_position || xs.prototype.tooltipPosition;
            0 !== l.length && o.tooltip_show ? (a.tooltip.html(o.tooltip_contents.call(a, t, a.axis.getXAxisTickFormat(), a.getYFormat(s), a.color)).style("display", "block"), n = a.tooltip.property("offsetWidth"), r = a.tooltip.property("offsetHeight"), i = c.call(this, l, n, r, e), a.tooltip.style("top", i.top + "px").style("left", i.left + "px")) : a.hideTooltip()
        }, xs.prototype.hideTooltip = function () {
            this.tooltip.style("display", "none")
        }, xs.prototype.setTargetType = function (t, e) {
            var n = this, r = n.config;
            n.mapToTargetIds(t).forEach((function (t) {
                n.withoutFadeIn[t] = e === r.data_types[t], r.data_types[t] = e
            })), t || (r.data_type = e)
        }, xs.prototype.hasType = function (t, e) {
            var n = this.config.data_types, r = !1;
            return (e = e || this.data.targets) && e.length ? e.forEach((function (e) {
                var i = n[e.id];
                (i && i.indexOf(t) >= 0 || !i && "line" === t) && (r = !0)
            })) : Object.keys(n).length ? Object.keys(n).forEach((function (e) {
                n[e] === t && (r = !0)
            })) : r = this.config.data_type === t, r
        }, xs.prototype.hasArcType = function (t) {
            return this.hasType("pie", t) || this.hasType("donut", t) || this.hasType("gauge", t)
        }, xs.prototype.isLineType = function (t) {
            var e = this.config, n = Vs(t) ? t : t.id;
            return !e.data_types[n] || ["line", "spline", "area", "area-spline", "step", "area-step"].indexOf(e.data_types[n]) >= 0
        }, xs.prototype.isStepType = function (t) {
            var e = Vs(t) ? t : t.id;
            return ["step", "area-step"].indexOf(this.config.data_types[e]) >= 0
        }, xs.prototype.isSplineType = function (t) {
            var e = Vs(t) ? t : t.id;
            return ["spline", "area-spline"].indexOf(this.config.data_types[e]) >= 0
        }, xs.prototype.isAreaType = function (t) {
            var e = Vs(t) ? t : t.id;
            return ["area", "area-spline", "area-step"].indexOf(this.config.data_types[e]) >= 0
        }, xs.prototype.isBarType = function (t) {
            var e = Vs(t) ? t : t.id;
            return "bar" === this.config.data_types[e]
        }, xs.prototype.isScatterType = function (t) {
            var e = Vs(t) ? t : t.id;
            return "scatter" === this.config.data_types[e]
        }, xs.prototype.isStanfordType = function (t) {
            var e = Vs(t) ? t : t.id;
            return "stanford" === this.config.data_types[e]
        }, xs.prototype.isPieType = function (t) {
            var e = Vs(t) ? t : t.id;
            return "pie" === this.config.data_types[e]
        }, xs.prototype.isGaugeType = function (t) {
            var e = Vs(t) ? t : t.id;
            return "gauge" === this.config.data_types[e]
        }, xs.prototype.isDonutType = function (t) {
            var e = Vs(t) ? t : t.id;
            return "donut" === this.config.data_types[e]
        }, xs.prototype.isArcType = function (t) {
            return this.isPieType(t) || this.isDonutType(t) || this.isGaugeType(t)
        }, xs.prototype.lineData = function (t) {
            return this.isLineType(t) ? [t] : []
        }, xs.prototype.arcData = function (t) {
            return this.isArcType(t.data) ? [t] : []
        }, xs.prototype.barData = function (t) {
            return this.isBarType(t) ? t.values : []
        }, xs.prototype.lineOrScatterOrStanfordData = function (t) {
            return this.isLineType(t) || this.isScatterType(t) || this.isStanfordType(t) ? t.values : []
        }, xs.prototype.barOrLineData = function (t) {
            return this.isBarType(t) || this.isLineType(t) ? t.values : []
        }, xs.prototype.isSafari = function () {
            var t = window.navigator.userAgent;
            return t.indexOf("Safari") >= 0 && t.indexOf("Chrome") < 0
        }, xs.prototype.isChrome = function () {
            return window.navigator.userAgent.indexOf("Chrome") >= 0
        }, xs.prototype.initZoom = function () {
            var t, e = this, n = e.d3, r = e.config;
            return e.zoom = n.zoom().on("start", (function () {
                if ("scroll" === r.zoom_type) {
                    var i = n.event.sourceEvent;
                    i && "brush" === i.type || (t = i, r.zoom_onzoomstart.call(e.api, i))
                }
            })).on("zoom", (function () {
                if ("scroll" === r.zoom_type) {
                    var t = n.event.sourceEvent;
                    t && "brush" === t.type || (e.redrawForZoom(), r.zoom_onzoom.call(e.api, e.x.orgDomain()))
                }
            })).on("end", (function () {
                if ("scroll" === r.zoom_type) {
                    var i = n.event.sourceEvent;
                    i && "brush" === i.type || i && t.clientX === i.clientX && t.clientY === i.clientY || r.zoom_onzoomend.call(e.api, e.x.orgDomain())
                }
            })), e.zoom.updateDomain = function () {
                return n.event && n.event.transform && e.x.domain(n.event.transform.rescaleX(e.subX).domain()), this
            }, e.zoom.updateExtent = function () {
                return this.scaleExtent([1, 1 / 0]).translateExtent([[0, 0], [e.width, e.height]]).extent([[0, 0], [e.width, e.height]]), this
            }, e.zoom.update = function () {
                return this.updateExtent().updateDomain()
            }, e.zoom.updateExtent()
        }, xs.prototype.zoomTransform = function (t) {
            var e = [this.x(t[0]), this.x(t[1])];
            return this.d3.zoomIdentity.scale(this.width / (e[1] - e[0])).translate(-e[0], 0)
        }, xs.prototype.initDragZoom = function () {
            var t = this, e = t.d3, n = t.config, r = t.context = t.svg, i = t.margin.left + 20.5,
                a = t.margin.top + .5;
            if ("drag" === n.zoom_type && n.zoom_enabled) {
                var o = function (e) {
                    return e && e.map((function (e) {
                        return t.x.invert(e)
                    }))
                }, s = t.dragZoomBrush = e.brushX().on("start", (function () {
                    t.api.unzoom(), t.svg.select("." + Hs.dragZoom).classed("disabled", !1), n.zoom_onzoomstart.call(t.api, e.event.sourceEvent)
                })).on("brush", (function () {
                    n.zoom_onzoom.call(t.api, o(e.event.selection))
                })).on("end", (function () {
                    if (null != e.event.selection) {
                        var r = o(e.event.selection);
                        n.zoom_disableDefaultBehavior || t.api.zoom(r), t.svg.select("." + Hs.dragZoom).classed("disabled", !0), n.zoom_onzoomend.call(t.api, r)
                    }
                }));
                r.append("g").classed(Hs.dragZoom, !0).attr("clip-path", t.clipPath).attr("transform", "translate(" + i + "," + a + ")").call(s)
            }
        }, xs.prototype.getZoomDomain = function () {
            var t = this.config, e = this.d3;
            return [e.min([this.orgXDomain[0], t.zoom_x_min]), e.max([this.orgXDomain[1], t.zoom_x_max])]
        }, xs.prototype.redrawForZoom = function () {
            var t = this, e = t.d3, n = t.config, r = t.zoom, i = t.x;
            n.zoom_enabled && 0 !== t.filterTargetsToShow(t.data.targets).length && (r.update(), n.zoom_disableDefaultBehavior || (t.isCategorized() && i.orgDomain()[0] === t.orgXDomain[0] && i.domain([t.orgXDomain[0] - 1e-10, i.orgDomain()[1]]), t.redraw({
                withTransition: !1,
                withY: n.zoom_rescale,
                withSubchart: !1,
                withEventRect: !1,
                withDimension: !1
            }), e.event.sourceEvent && "mousemove" === e.event.sourceEvent.type && (t.cancelClick = !0)))
        };
        e.a = zs
    }, "NC/Y": function (t, e, n) {
        var r = n("0GbY");
        t.exports = r("navigator", "userAgent") || ""
    }, NaFW: function (t, e, n) {
        var r = n("9d/t"), i = n("P4y1"), a = n("tiKp")("iterator");
        t.exports = function (t) {
            if (null != t) return t[a] || t["@@iterator"] || i[r(t)]
        }
    }, O741: function (t, e, n) {
        var r = n("hh1v");
        t.exports = function (t) {
            if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
            return t
        }
    }, OM9Z: function (t, e, n) {
        n("I+eb")({target: "String", proto: !0}, {repeat: n("EUja")})
    }, P4y1: function (t, e) {
        t.exports = {}
    }, PKPk: function (t, e, n) {
        "use strict";
        var r = n("ZUd8").charAt, i = n("afO8"), a = n("fdAy"), o = i.set, s = i.getterFor("String Iterator");
        a(String, "String", (function (t) {
            o(this, {type: "String Iterator", string: String(t), index: 0})
        }), (function () {
            var t, e = s(this), n = e.string, i = e.index;
            return i >= n.length ? {value: void 0, done: !0} : (t = r(n, i), e.index += t.length, {value: t, done: !1})
        }))
    }, QIpd: function (t, e, n) {
        var r = n("xrYK");
        t.exports = function (t) {
            if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
            return +t
        }
    }, QWBl: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("F8JR");
        r({target: "Array", proto: !0, forced: [].forEach != i}, {forEach: i})
    }, R5XZ: function (t, e, n) {
        var r = n("I+eb"), i = n("2oRo"), a = n("NC/Y"), o = [].slice, s = function (t) {
            return function (e, n) {
                var r = arguments.length > 2, i = r ? o.call(arguments, 2) : void 0;
                return t(r ? function () {
                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                } : e, n)
            }
        };
        r({global: !0, bind: !0, forced: /MSIE .\./.test(a)}, {
            setTimeout: s(i.setTimeout),
            setInterval: s(i.setInterval)
        })
    }, ROdP: function (t, e, n) {
        var r = n("hh1v"), i = n("xrYK"), a = n("tiKp")("match");
        t.exports = function (t) {
            var e;
            return r(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == i(t))
        }
    }, Rfxz: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("tycR").some;
        r({target: "Array", proto: !0, forced: !n("pkCn")("some")}, {
            some: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, Rm1S: function (t, e, n) {
        "use strict";
        var r = n("14Sl"), i = n("glrk"), a = n("UMSQ"), o = n("HYAF"), s = n("iqWW"), l = n("FMNM");
        r("match", 1, (function (t, e, n) {
            return [function (e) {
                var n = o(this), r = null == e ? void 0 : e[t];
                return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
            }, function (t) {
                var r = n(e, t, this);
                if (r.done) return r.value;
                var o = i(t), c = String(this);
                if (!o.global) return l(o, c);
                var u = o.unicode;
                o.lastIndex = 0;
                for (var h, d = [], f = 0; null !== (h = l(o, c));) {
                    var p = String(h[0]);
                    d[f] = p, "" === p && (o.lastIndex = s(c, a(o.lastIndex), u)), f++
                }
                return 0 === f ? null : d
            }]
        }))
    }, SEBh: function (t, e, n) {
        var r = n("glrk"), i = n("HAuM"), a = n("tiKp")("species");
        t.exports = function (t, e) {
            var n, o = r(t).constructor;
            return void 0 === o || null == (n = r(o)[a]) ? e : i(n)
        }
    }, SYor: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("WKiH").trim;
        r({target: "String", proto: !0, forced: n("yNLB")("trim")}, {
            trim: function () {
                return i(this)
            }
        })
    }, TWNs: function (t, e, n) {
        var r = n("g6v/"), i = n("2oRo"), a = n("lMq5"), o = n("cVYH"), s = n("m/L8").f, l = n("JBy8").f, c = n("ROdP"),
            u = n("rW0t"), h = n("n3/R"), d = n("busE"), f = n("0Dky"), p = n("afO8").set, g = n("JiZb"),
            y = n("tiKp")("match"), _ = i.RegExp, v = _.prototype, m = /a/g, x = /a/g, w = new _(m) !== m,
            b = h.UNSUPPORTED_Y;
        if (r && a("RegExp", !w || b || f((function () {
            return x[y] = !1, _(m) != m || _(x) == x || "/a/i" != _(m, "i")
        })))) {
            for (var S = function (t, e) {
                var n, r = this instanceof S, i = c(t), a = void 0 === e;
                if (!r && i && t.constructor === S && a) return t;
                w ? i && !a && (t = t.source) : t instanceof S && (a && (e = u.call(t)), t = t.source), b && (n = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
                var s = o(w ? new _(t, e) : _(t, e), r ? this : v, S);
                return b && n && p(s, {sticky: n}), s
            }, T = function (t) {
                t in S || s(S, t, {
                    configurable: !0, get: function () {
                        return _[t]
                    }, set: function (e) {
                        _[t] = e
                    }
                })
            }, A = l(_), C = 0; A.length > C;) T(A[C++]);
            v.constructor = S, S.prototype = v, d(i, "RegExp", S)
        }
        g("RegExp")
    }, TeQF: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("tycR").filter;
        r({target: "Array", proto: !0, forced: !n("Hd5f")("filter")}, {
            filter: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, TfTi: function (t, e, n) {
        "use strict";
        var r = n("A2ZE"), i = n("ewvW"), a = n("m92n"), o = n("6VoE"), s = n("UMSQ"), l = n("hBjN"), c = n("NaFW");
        t.exports = function (t) {
            var e, n, u, h, d, f, p = i(t), g = "function" == typeof this ? this : Array, y = arguments.length,
                _ = y > 1 ? arguments[1] : void 0, v = void 0 !== _, m = c(p), x = 0;
            if (v && (_ = r(_, y > 2 ? arguments[2] : void 0, 2)), null == m || g == Array && o(m)) for (n = new g(e = s(p.length)); e > x; x++) f = v ? _(p[x], x) : p[x], l(n, x, f); else for (d = (h = m.call(p)).next, n = new g; !(u = d.call(h)).done; x++) f = v ? a(h, _, [u.value, x], !0) : u.value, l(n, x, f);
            return n.length = x, n
        }
    }, ToJy: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("HAuM"), a = n("ewvW"), o = n("0Dky"), s = n("pkCn"), l = [], c = l.sort,
            u = o((function () {
                l.sort(void 0)
            })), h = o((function () {
                l.sort(null)
            })), d = s("sort");
        r({target: "Array", proto: !0, forced: u || !h || !d}, {
            sort: function (t) {
                return void 0 === t ? c.call(a(this)) : c.call(a(this), i(t))
            }
        })
    }, UxlC: function (t, e, n) {
        "use strict";
        var r = n("14Sl"), i = n("glrk"), a = n("UMSQ"), o = n("ppGB"), s = n("HYAF"), l = n("iqWW"), c = n("DLK6"),
            u = n("FMNM"), h = Math.max, d = Math.min;
        r("replace", 2, (function (t, e, n, r) {
            var f = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, p = r.REPLACE_KEEPS_$0, g = f ? "$" : "$0";
            return [function (n, r) {
                var i = s(this), a = null == n ? void 0 : n[t];
                return void 0 !== a ? a.call(n, i, r) : e.call(String(i), n, r)
            }, function (t, r) {
                if (!f && p || "string" == typeof r && -1 === r.indexOf(g)) {
                    var s = n(e, t, this, r);
                    if (s.done) return s.value
                }
                var y = i(t), _ = String(this), v = "function" == typeof r;
                v || (r = String(r));
                var m = y.global;
                if (m) {
                    var x = y.unicode;
                    y.lastIndex = 0
                }
                for (var w = []; ;) {
                    var b = u(y, _);
                    if (null === b) break;
                    if (w.push(b), !m) break;
                    "" === String(b[0]) && (y.lastIndex = l(_, a(y.lastIndex), x))
                }
                for (var S, T = "", A = 0, C = 0; C < w.length; C++) {
                    b = w[C];
                    for (var P = String(b[0]), D = h(d(o(b.index), _.length), 0), L = [], I = 1; I < b.length; I++) L.push(void 0 === (S = b[I]) ? S : String(S));
                    var E = b.groups;
                    if (v) {
                        var k = [P].concat(L, D, _);
                        void 0 !== E && k.push(E);
                        var V = String(r.apply(void 0, k))
                    } else V = c(P, _, D, L, E, r);
                    D >= A && (T += _.slice(A, D) + V, A = D + P.length)
                }
                return T + _.slice(A)
            }]
        }))
    }, WJkJ: function (t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }, WKiH: function (t, e, n) {
        var r = n("HYAF"), i = "[" + n("WJkJ") + "]", a = RegExp("^" + i + i + "*"), o = RegExp(i + i + "*$"),
            s = function (t) {
                return function (e) {
                    var n = String(r(e));
                    return 1 & t && (n = n.replace(a, "")), 2 & t && (n = n.replace(o, "")), n
                }
            };
        t.exports = {start: s(1), end: s(2), trim: s(3)}
    }, WjRb: function (t, e, n) {
        var r = n("ROdP");
        t.exports = function (t) {
            if (r(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    }, YF1G: function (t, e, n) {
        var r = n("xrYK"), i = n("2oRo");
        t.exports = "process" == r(i.process)
    }, YIA6: function (t, e, n) {
    }, YNrV: function (t, e, n) {
        "use strict";
        var r = n("g6v/"), i = n("0Dky"), a = n("33Wh"), o = n("dBg+"), s = n("0eef"), l = n("ewvW"), c = n("RK3t"),
            u = Object.assign, h = Object.defineProperty;
        t.exports = !u || i((function () {
            if (r && 1 !== u({b: 1}, u(h({}, "a", {
                enumerable: !0, get: function () {
                    h(this, "b", {value: 3, enumerable: !1})
                }
            }), {b: 2})).b) return !0;
            var t = {}, e = {}, n = Symbol();
            return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
                e[t] = t
            })), 7 != u({}, t)[n] || "abcdefghijklmnopqrst" != a(u({}, e)).join("")
        })) ? function (t, e) {
            for (var n = l(t), i = arguments.length, u = 1, h = o.f, d = s.f; i > u;) for (var f, p = c(arguments[u++]), g = h ? a(p).concat(h(p)) : a(p), y = g.length, _ = 0; y > _;) f = g[_++], r && !d.call(p, f) || (n[f] = p[f]);
            return n
        } : u
    }, ZUd8: function (t, e, n) {
        var r = n("ppGB"), i = n("HYAF"), a = function (t) {
            return function (e, n) {
                var a, o, s = String(i(e)), l = r(n), c = s.length;
                return l < 0 || l >= c ? t ? "" : void 0 : (a = s.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === c || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? s.charAt(l) : a : t ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536
            }
        };
        t.exports = {codeAt: a(!1), charAt: a(!0)}
    }, aRcC: function (t, e, n) {
    }, cVYH: function (t, e, n) {
        var r = n("hh1v"), i = n("0rvr");
        t.exports = function (t, e, n) {
            var a, o;
            return i && "function" == typeof (a = e.constructor) && a !== n && r(o = a.prototype) && o !== n.prototype && i(t, o), t
        }
    }, "dG/n": function (t, e, n) {
        var r = n("Qo9l"), i = n("UTVS"), a = n("5Tg+"), o = n("m/L8").f;
        t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = {});
            i(e, t) || o(e, t, {value: a.f(t)})
        }
    }, dwii: function (t, e, n) {
        "use strict";
        n.r(e), function (t) {
            n("+2oP"), n("fbCW"), n("ma9I"), n("4l63"), n("rNhl"), n("aRcC"), n("ELEc"), n("oUry"), n("YIA6");
            var e = n("p7r9"), r = (n("FlOX"), n("yZSC"), n("LhY9")),
                i = new Intl.NumberFormat("en-US", {maximumFractionDigits: 2});
            t("#js_table").DataTable({
                paging: !1,
                searching: !1,
                bInfo: !1,
                order: [[0, "desc"]],
                columnDefs: [{targets: ["datatable-nosort"], orderable: !1, bsortable: !1}],
                responsive: !0
            });
            var a = t("#js_modal"), o = a.find("input[type=text]");
            if (t("input.js_vote_yes, input.js_vote_no").click((function (e) {
                var n = t(e.target), r = n.closest("tr").data("hash"), i = !!n.hasClass("js_vote_yes"),
                    s = "mnbudgetvote many ".concat(r, " ").concat(i ? "yes" : "no");
                o.val(s), t("#js_vote_key").html(i ? t("#js_trans_yes").val() : t("#js_trans_no").val()), a.find("h4").html(n.closest("tr").data("title")), a.show(), o.select(), document.execCommand("copy")
            })), t("#js_modal_close").click((function (t) {
                t.preventDefault(), t.stopImmediatePropagation(), a.hide()
            })), window.onclick = function (t) {
                t.target == a[0] && a.hide()
            }, t(document).keyup((function (t) {
                "Escape" === t.key && a.hide()
            })), t("#js_flipdown").length && new e.a(parseInt(t("#js_flipdown").data("endtime")), "js_flipdown", {theme: "dark"}).start(), t("#js_chart_budget").length) {
                var s = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = !1, i = !0;
                        e <= u && (i = !1, "bottom" != h && (h = "bottom", r = !0)), e > u && (i = !0, "right" != h && (h = "right", r = !0)), (r || n) && (r && d.legend.position(h), i ? (t("#js_chart_budget text.c3-chart-arcs-title").show(), t("#js_chart_budget g.c3-chart-arc text").show()) : (t("#js_chart_budget text.c3-chart-arcs-title").hide(), t("#js_chart_budget g.c3-chart-arc text").hide()))
                    }, l = parseInt(t("#js_chart_budget").data("maxi")) - parseFloat(t("#js_chart_budget").data("used")),
                    c = [];
                t("td.proposal_paid").each((function (e) {
                    var n = t(this).data("name"), r = t(this).data("piv");
                    t(this).data("percent");
                    c.push(["".concat(n, " (").concat(i.format(r), " PIV)"), r])
                })), l > 0 && c.push(["".concat(t("#js_trans_available").val(), " (").concat(i.format(l), " PIV)"), l]);
                var u = 768,
                    h = t(window).width() > u ? "right" : "bottom",
                    d = r.a.generate({
                    bindto: "#js_chart_budget",
                    data: {columns: c, type: "donut"},
                    donut: {
                        title: "".concat(i.format(l), " PIV ").concat(t("#js_trans_available").val()),
                        label: {threshold: .04}
                    },
                    legend: {position: h}
                });
                t(window).resize((function (e) {
                    s(t(window).width())
                })), t(document).ready((function () {
                    s(t(window).width(), !0)
                }))
            }
        }.call(this, n("EVdn"))
    }, fbCW: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("tycR").find, a = n("RNIs"), o = !0;
        "find" in [] && Array(1).find((function () {
            o = !1
        })), r({target: "Array", proto: !0, forced: o}, {
            find: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), a("find")
    }, fdAy: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("ntOU"), a = n("4WOD"), o = n("0rvr"), s = n("1E5z"), l = n("kRJp"), c = n("busE"),
            u = n("tiKp"), h = n("xDBR"), d = n("P4y1"), f = n("rpNk"), p = f.IteratorPrototype,
            g = f.BUGGY_SAFARI_ITERATORS, y = u("iterator"), _ = function () {
                return this
            };
        t.exports = function (t, e, n, u, f, v, m) {
            i(n, e, u);
            var x, w, b, S = function (t) {
                    if (t === f && D) return D;
                    if (!g && t in C) return C[t];
                    switch (t) {
                        case"keys":
                        case"values":
                        case"entries":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this)
                    }
                }, T = e + " Iterator", A = !1, C = t.prototype, P = C[y] || C["@@iterator"] || f && C[f],
                D = !g && P || S(f), L = "Array" == e && C.entries || P;
            if (L && (x = a(L.call(new t)), p !== Object.prototype && x.next && (h || a(x) === p || (o ? o(x, p) : "function" != typeof x[y] && l(x, y, _)), s(x, T, !0, !0), h && (d[T] = _))), "values" == f && P && "values" !== P.name && (A = !0, D = function () {
                return P.call(this)
            }), h && !m || C[y] === D || l(C, y, D), d[e] = D, f) if (w = {
                values: S("values"),
                keys: v ? D : S("keys"),
                entries: S("entries")
            }, m) for (b in w) (g || A || !(b in C)) && c(C, b, w[b]); else r({
                target: e,
                proto: !0,
                forced: g || A
            }, w);
            return w
        }
    }, fhKU: function (t, e, n) {
        var r = n("2oRo"), i = n("WKiH").trim, a = n("WJkJ"), o = r.parseFloat, s = 1 / o(a + "-0") != -1 / 0;
        t.exports = s ? function (t) {
            var e = i(String(t)), n = o(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n
        } : o
    }, hBjN: function (t, e, n) {
        "use strict";
        var r = n("wE6v"), i = n("m/L8"), a = n("XGwC");
        t.exports = function (t, e, n) {
            var o = r(e);
            o in t ? i.f(t, o, a(0, n)) : t[o] = n
        }
    }, hDyC: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("DMt2").end;
        r({target: "String", proto: !0, forced: n("mgyK")}, {
            padEnd: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, iqWW: function (t, e, n) {
        "use strict";
        var r = n("ZUd8").charAt;
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1)
        }
    }, kmMV: function (t, e, n) {
        "use strict";
        var r, i, a = n("rW0t"), o = n("n3/R"), s = RegExp.prototype.exec, l = String.prototype.replace, c = s,
            u = (r = /a/, i = /b*/g, s.call(r, "a"), s.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
            h = o.UNSUPPORTED_Y || o.BROKEN_CARET, d = void 0 !== /()??/.exec("")[1];
        (u || d || h) && (c = function (t) {
            var e, n, r, i, o = this, c = h && o.sticky, f = a.call(o), p = o.source, g = 0, y = t;
            return c && (-1 === (f = f.replace("y", "")).indexOf("g") && (f += "g"), y = String(t).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== t[o.lastIndex - 1]) && (p = "(?: " + p + ")", y = " " + y, g++), n = new RegExp("^(?:" + p + ")", f)), d && (n = new RegExp("^" + p + "$(?!\\s)", f)), u && (e = o.lastIndex), r = s.call(c ? n : o, y), c ? r ? (r.input = r.input.slice(g), r[0] = r[0].slice(g), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : u && r && (o.lastIndex = o.global ? r.index + r[0].length : e), d && r && r.length > 1 && l.call(r[0], n, (function () {
                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
            })), r
        }), t.exports = c
    }, m92n: function (t, e, n) {
        var r = n("glrk"), i = n("KmKo");
        t.exports = function (t, e, n, a) {
            try {
                return a ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                throw i(t), e
            }
        }
    }, ma9I: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("0Dky"), a = n("6LWA"), o = n("hh1v"), s = n("ewvW"), l = n("UMSQ"), c = n("hBjN"),
            u = n("ZfDv"), h = n("Hd5f"), d = n("tiKp"), f = n("LQDL"), p = d("isConcatSpreadable"),
            g = f >= 51 || !i((function () {
                var t = [];
                return t[p] = !1, t.concat()[0] !== t
            })), y = h("concat"), _ = function (t) {
                if (!o(t)) return !1;
                var e = t[p];
                return void 0 !== e ? !!e : a(t)
            };
        r({target: "Array", proto: !0, forced: !g || !y}, {
            concat: function (t) {
                var e, n, r, i, a, o = s(this), h = u(o, 0), d = 0;
                for (e = -1, r = arguments.length; e < r; e++) if (_(a = -1 === e ? o : arguments[e])) {
                    if (d + (i = l(a.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < i; n++, d++) n in a && c(h, d, a[n])
                } else {
                    if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    c(h, d++, a)
                }
                return h.length = d, h
            }
        })
    }, mgyK: function (t, e, n) {
        var r = n("NC/Y");
        t.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)
    }, "n3/R": function (t, e, n) {
        "use strict";
        var r = n("0Dky");

        function i(t, e) {
            return RegExp(t, e)
        }

        e.UNSUPPORTED_Y = r((function () {
            var t = i("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })), e.BROKEN_CARET = r((function () {
            var t = i("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str")
        }))
    }, ntOU: function (t, e, n) {
        "use strict";
        var r = n("rpNk").IteratorPrototype, i = n("fHMY"), a = n("XGwC"), o = n("1E5z"), s = n("P4y1"),
            l = function () {
                return this
            };
        t.exports = function (t, e, n) {
            var c = e + " Iterator";
            return t.prototype = i(r, {next: a(1, n)}), o(t, c, !1, !0), s[c] = l, t
        }
    }, oUry: function (t, e, n) {
    }, oVuX: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("RK3t"), a = n("/GqU"), o = n("pkCn"), s = [].join, l = i != Object,
            c = o("join", ",");
        r({target: "Array", proto: !0, forced: l || !c}, {
            join: function (t) {
                return s.call(a(this), void 0 === t ? "," : t)
            }
        })
    }, p7r9: function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return o
        }));
        n("R5XZ"), n("wLYn"), n("DQNa"), n("07d7"), n("JfAA"), n("+2oP"), n("EnZy"), n("rB9j"), n("QWBl"), n("FZtP"), n("eoL8"), n("pNMO"), n("4Brf"), n("0oug"), n("PKPk"), n("4mDm"), n("3bBZ");

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        var o = function () {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flipdown",
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (i(this, t), "number" != typeof e) throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(r(e), " instead."));
                "object" === r(n) && (a = n, n = "flipdown"), this.version = "0.3.2", this.initialised = !1, this.now = this._getTime(), this.epoch = e, this.countdownEnded = !1, this.hasEndedCallback = null, this.element = document.getElementById(n), this.rotors = [], this.rotorLeafFront = [], this.rotorLeafRear = [], this.rotorTops = [], this.rotorBottoms = [], this.countdown = null, this.daysRemaining = 0, this.clockValues = {}, this.clockStrings = {}, this.clockValuesAsString = [], this.prevClockValuesAsString = [], this.opts = this._parseOptions(a), this._setOptions()
            }

            var e, n, o;
            return e = t, (n = [{
                key: "start", value: function () {
                    return this.initialised || this._init(), this.countdown = setInterval(this._tick.bind(this), 1e3), this
                }
            }, {
                key: "ifEnded", value: function (t) {
                    return this.hasEndedCallback = function () {
                        t(), this.hasEndedCallback = null
                    }, this
                }
            }, {
                key: "_getTime", value: function () {
                    return (new Date).getTime() / 1e3
                }
            }, {
                key: "_hasCountdownEnded", value: function () {
                    return this.epoch - this.now < 0 ? (this.countdownEnded = !0, null != this.hasEndedCallback && (this.hasEndedCallback(), this.hasEndedCallback = null), !0) : (this.countdownEnded = !1, !1)
                }
            }, {
                key: "_parseOptions", value: function (t) {
                    var e = ["Days", "Hours", "Minutes", "Seconds"];
                    return t.headings && 4 === t.headings.length && (e = t.headings), {
                        theme: t.hasOwnProperty("theme") ? t.theme : "light",
                        headings: e
                    }
                }
            }, {
                key: "_setOptions", value: function () {
                    this.element.classList.add("flipdown__theme-".concat(this.opts.theme))
                }
            }, {
                key: "_init", value: function () {
                    this.initialised = !0, this._hasCountdownEnded() ? this.daysremaining = 0 : this.daysremaining = Math.floor((this.epoch - this.now) / 86400).toString().length;
                    for (var t = this.daysremaining <= 2 ? 2 : this.daysremaining, e = 0; e < t + 6; e++) this.rotors.push(this._createRotor(0));
                    var n = [];
                    for (e = 0; e < t; e++) n.push(this.rotors[e]);
                    this.element.appendChild(this._createRotorGroup(n, 0));
                    var r = t;
                    for (e = 0; e < 3; e++) {
                        for (var i = [], a = 0; a < 2; a++) i.push(this.rotors[r]), r++;
                        this.element.appendChild(this._createRotorGroup(i, e + 1))
                    }
                    return this.rotorLeafFront = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")), this.rotorLeafRear = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")), this.rotorTop = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")), this.rotorBottom = Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")), this._tick(), this._updateClockValues(!0), this
                }
            }, {
                key: "_createRotorGroup", value: function (t, e) {
                    var n = document.createElement("div");
                    n.className = "rotor-group";
                    var r = document.createElement("div");
                    return r.className = "rotor-group-heading", r.setAttribute("data-before", this.opts.headings[e]), n.appendChild(r), l(n, t), n
                }
            }, {
                key: "_createRotor", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = document.createElement("div"), n = document.createElement("div"),
                        r = document.createElement("figure"), i = document.createElement("figure"),
                        a = document.createElement("div"), o = document.createElement("div");
                    return e.className = "rotor", n.className = "rotor-leaf", r.className = "rotor-leaf-rear", i.className = "rotor-leaf-front", a.className = "rotor-top", o.className = "rotor-bottom", r.textContent = t, a.textContent = t, o.textContent = t, l(e, [n, a, o]), l(n, [r, i]), e
                }
            }, {
                key: "_tick", value: function () {
                    this.now = this._getTime();
                    var t = this.epoch - this.now <= 0 ? 0 : this.epoch - this.now;
                    this.clockValues.d = Math.floor(t / 86400), t -= 86400 * this.clockValues.d, this.clockValues.h = Math.floor(t / 3600), t -= 3600 * this.clockValues.h, this.clockValues.m = Math.floor(t / 60), t -= 60 * this.clockValues.m, this.clockValues.s = Math.floor(t), this._updateClockValues(), this._hasCountdownEnded()
                }
            }, {
                key: "_updateClockValues", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                    function n() {
                        var t = this;
                        this.rotorTop.forEach((function (e, n) {
                            e.textContent != t.clockValuesAsString[n] && (e.textContent = t.clockValuesAsString[n])
                        }))
                    }

                    function r() {
                        var t = this;
                        this.rotorLeafRear.forEach((function (e, n) {
                            if (e.textContent != t.clockValuesAsString[n]) {
                                e.textContent = t.clockValuesAsString[n], e.parentElement.classList.add("flipped");
                                var r = setInterval(function () {
                                    e.parentElement.classList.remove("flipped"), clearInterval(r)
                                }.bind(t), 500)
                            }
                        }))
                    }

                    this.clockStrings.d = s(this.clockValues.d, 2), this.clockStrings.h = s(this.clockValues.h, 2), this.clockStrings.m = s(this.clockValues.m, 2), this.clockStrings.s = s(this.clockValues.s, 2), this.clockValuesAsString = (this.clockStrings.d + this.clockStrings.h + this.clockStrings.m + this.clockStrings.s).split(""), this.rotorLeafFront.forEach((function (e, n) {
                        e.textContent = t.prevClockValuesAsString[n]
                    })), this.rotorBottom.forEach((function (e, n) {
                        e.textContent = t.prevClockValuesAsString[n]
                    })), e ? (n.call(this), r.call(this)) : (setTimeout(n.bind(this), 500), setTimeout(r.bind(this), 500)), this.prevClockValuesAsString = this.clockValuesAsString
                }
            }]) && a(e.prototype, n), o && a(e, o), t
        }();

        function s(t, e) {
            return (t = t.toString()).length < e ? s("0" + t, e) : t
        }

        function l(t, e) {
            e.forEach((function (e) {
                t.appendChild(e)
            }))
        }
    }, pDQq: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("I8vh"), a = n("ppGB"), o = n("UMSQ"), s = n("ewvW"), l = n("ZfDv"), c = n("hBjN"),
            u = n("Hd5f")("splice"), h = Math.max, d = Math.min;
        r({target: "Array", proto: !0, forced: !u}, {
            splice: function (t, e) {
                var n, r, u, f, p, g, y = s(this), _ = o(y.length), v = i(t, _), m = arguments.length;
                if (0 === m ? n = r = 0 : 1 === m ? (n = 0, r = _ - v) : (n = m - 2, r = d(h(a(e), 0), _ - v)), _ + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
                for (u = l(y, r), f = 0; f < r; f++) (p = v + f) in y && c(u, f, y[p]);
                if (u.length = r, n < r) {
                    for (f = v; f < _ - r; f++) g = f + n, (p = f + r) in y ? y[g] = y[p] : delete y[g];
                    for (f = _; f > _ - r + n; f--) delete y[f - 1]
                } else if (n > r) for (f = _ - r; f > v; f--) g = f + n - 1, (p = f + r - 1) in y ? y[g] = y[p] : delete y[g];
                for (f = 0; f < n; f++) y[f + v] = arguments[f + 2];
                return y.length = _ - r + n, u
            }
        })
    }, pNMO: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("2oRo"), a = n("0GbY"), o = n("xDBR"), s = n("g6v/"), l = n("STAE"), c = n("/b8u"),
            u = n("0Dky"), h = n("UTVS"), d = n("6LWA"), f = n("hh1v"), p = n("glrk"), g = n("ewvW"), y = n("/GqU"),
            _ = n("wE6v"), v = n("XGwC"), m = n("fHMY"), x = n("33Wh"), w = n("JBy8"), b = n("BX/b"), S = n("dBg+"),
            T = n("Bs8V"), A = n("m/L8"), C = n("0eef"), P = n("kRJp"), D = n("busE"), L = n("VpIT"), I = n("93I0"),
            E = n("0BK2"), k = n("kOOl"), V = n("tiKp"), R = n("5Tg+"), M = n("dG/n"), O = n("1E5z"), G = n("afO8"),
            F = n("tycR").forEach, N = I("hidden"), H = V("toPrimitive"), j = G.set, z = G.getterFor("Symbol"),
            X = Object.prototype, B = i.Symbol, Y = a("JSON", "stringify"), U = T.f, W = A.f, Q = b.f, q = C.f,
            J = L("symbols"), K = L("op-symbols"), Z = L("string-to-symbol-registry"),
            $ = L("symbol-to-string-registry"), tt = L("wks"), et = i.QObject,
            nt = !et || !et.prototype || !et.prototype.findChild, rt = s && u((function () {
                return 7 != m(W({}, "a", {
                    get: function () {
                        return W(this, "a", {value: 7}).a
                    }
                })).a
            })) ? function (t, e, n) {
                var r = U(X, e);
                r && delete X[e], W(t, e, n), r && t !== X && W(X, e, r)
            } : W, it = function (t, e) {
                var n = J[t] = m(B.prototype);
                return j(n, {type: "Symbol", tag: t, description: e}), s || (n.description = e), n
            }, at = c ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return Object(t) instanceof B
            }, ot = function (t, e, n) {
                t === X && ot(K, e, n), p(t);
                var r = _(e, !0);
                return p(n), h(J, r) ? (n.enumerable ? (h(t, N) && t[N][r] && (t[N][r] = !1), n = m(n, {enumerable: v(0, !1)})) : (h(t, N) || W(t, N, v(1, {})), t[N][r] = !0), rt(t, r, n)) : W(t, r, n)
            }, st = function (t, e) {
                p(t);
                var n = y(e), r = x(n).concat(ht(n));
                return F(r, (function (e) {
                    s && !lt.call(n, e) || ot(t, e, n[e])
                })), t
            }, lt = function (t) {
                var e = _(t, !0), n = q.call(this, e);
                return !(this === X && h(J, e) && !h(K, e)) && (!(n || !h(this, e) || !h(J, e) || h(this, N) && this[N][e]) || n)
            }, ct = function (t, e) {
                var n = y(t), r = _(e, !0);
                if (n !== X || !h(J, r) || h(K, r)) {
                    var i = U(n, r);
                    return !i || !h(J, r) || h(n, N) && n[N][r] || (i.enumerable = !0), i
                }
            }, ut = function (t) {
                var e = Q(y(t)), n = [];
                return F(e, (function (t) {
                    h(J, t) || h(E, t) || n.push(t)
                })), n
            }, ht = function (t) {
                var e = t === X, n = Q(e ? K : y(t)), r = [];
                return F(n, (function (t) {
                    !h(J, t) || e && !h(X, t) || r.push(J[t])
                })), r
            };
        (l || (D((B = function () {
            if (this instanceof B) throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, e = k(t),
                n = function (t) {
                    this === X && n.call(K, t), h(this, N) && h(this[N], e) && (this[N][e] = !1), rt(this, e, v(1, t))
                };
            return s && nt && rt(X, e, {configurable: !0, set: n}), it(e, t)
        }).prototype, "toString", (function () {
            return z(this).tag
        })), D(B, "withoutSetter", (function (t) {
            return it(k(t), t)
        })), C.f = lt, A.f = ot, T.f = ct, w.f = b.f = ut, S.f = ht, R.f = function (t) {
            return it(V(t), t)
        }, s && (W(B.prototype, "description", {
            configurable: !0, get: function () {
                return z(this).description
            }
        }), o || D(X, "propertyIsEnumerable", lt, {unsafe: !0}))), r({
            global: !0,
            wrap: !0,
            forced: !l,
            sham: !l
        }, {Symbol: B}), F(x(tt), (function (t) {
            M(t)
        })), r({target: "Symbol", stat: !0, forced: !l}, {
            for: function (t) {
                var e = String(t);
                if (h(Z, e)) return Z[e];
                var n = B(e);
                return Z[e] = n, $[n] = e, n
            }, keyFor: function (t) {
                if (!at(t)) throw TypeError(t + " is not a symbol");
                if (h($, t)) return $[t]
            }, useSetter: function () {
                nt = !0
            }, useSimple: function () {
                nt = !1
            }
        }), r({target: "Object", stat: !0, forced: !l, sham: !s}, {
            create: function (t, e) {
                return void 0 === e ? m(t) : st(m(t), e)
            }, defineProperty: ot, defineProperties: st, getOwnPropertyDescriptor: ct
        }), r({target: "Object", stat: !0, forced: !l}, {
            getOwnPropertyNames: ut,
            getOwnPropertySymbols: ht
        }), r({
            target: "Object", stat: !0, forced: u((function () {
                S.f(1)
            }))
        }, {
            getOwnPropertySymbols: function (t) {
                return S.f(g(t))
            }
        }), Y) && r({
            target: "JSON", stat: !0, forced: !l || u((function () {
                var t = B();
                return "[null]" != Y([t]) || "{}" != Y({a: t}) || "{}" != Y(Object(t))
            }))
        }, {
            stringify: function (t, e, n) {
                for (var r, i = [t], a = 1; arguments.length > a;) i.push(arguments[a++]);
                if (r = e, (f(e) || void 0 !== t) && !at(t)) return d(e) || (e = function (t, e) {
                    if ("function" == typeof r && (e = r.call(this, t, e)), !at(e)) return e
                }), i[1] = e, Y.apply(null, i)
            }
        });
        B.prototype[H] || P(B.prototype, H, B.prototype.valueOf), O(B, "Symbol"), E[N] = !0
    }, piMb: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("tycR").every;
        r({target: "Array", proto: !0, forced: !n("pkCn")("every")}, {
            every: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, pjDv: function (t, e, n) {
        var r = n("I+eb"), i = n("TfTi");
        r({
            target: "Array", stat: !0, forced: !n("HH4o")((function (t) {
                Array.from(t)
            }))
        }, {from: i})
    }, pkCn: function (t, e, n) {
        "use strict";
        var r = n("0Dky");
        t.exports = function (t, e) {
            var n = [][t];
            return !!n && r((function () {
                n.call(null, e || function () {
                    throw 1
                }, 1)
            }))
        }
    }, qePV: function (t, e, n) {
        "use strict";
        var r = n("g6v/"), i = n("2oRo"), a = n("lMq5"), o = n("busE"), s = n("UTVS"), l = n("xrYK"), c = n("cVYH"),
            u = n("wE6v"), h = n("0Dky"), d = n("fHMY"), f = n("JBy8").f, p = n("Bs8V").f, g = n("m/L8").f,
            y = n("WKiH").trim, _ = i.Number, v = _.prototype, m = "Number" == l(d(v)), x = function (t) {
                var e, n, r, i, a, o, s, l, c = u(t, !1);
                if ("string" == typeof c && c.length > 2) if (43 === (e = (c = y(c)).charCodeAt(0)) || 45 === e) {
                    if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === e) {
                    switch (c.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, i = 55;
                            break;
                        default:
                            return +c
                    }
                    for (o = (a = c.slice(2)).length, s = 0; s < o; s++) if ((l = a.charCodeAt(s)) < 48 || l > i) return NaN;
                    return parseInt(a, r)
                }
                return +c
            };
        if (a("Number", !_(" 0o1") || !_("0b1") || _("+0x1"))) {
            for (var w, b = function (t) {
                var e = arguments.length < 1 ? 0 : t, n = this;
                return n instanceof b && (m ? h((function () {
                    v.valueOf.call(n)
                })) : "Number" != l(n)) ? c(new _(x(e)), n, b) : x(e)
            }, S = r ? f(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0; S.length > T; T++) s(_, w = S[T]) && !s(b, w) && g(b, w, p(_, w));
            b.prototype = v, v.constructor = b, o(i, "Number", b)
        }
    }, qxPZ: function (t, e, n) {
        var r = n("tiKp")("match");
        t.exports = function (t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (n) {
                try {
                    return e[r] = !1, "/./"[t](e)
                } catch (t) {
                }
            }
            return !1
        }
    }, rB9j: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("kmMV");
        r({target: "RegExp", proto: !0, forced: /./.exec !== i}, {exec: i})
    }, rNhl: function (t, e, n) {
        var r = n("I+eb"), i = n("fhKU");
        r({global: !0, forced: parseFloat != i}, {parseFloat: i})
    }, rW0t: function (t, e, n) {
        "use strict";
        var r = n("glrk");
        t.exports = function () {
            var t = r(this), e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, rpNk: function (t, e, n) {
        "use strict";
        var r, i, a, o = n("0Dky"), s = n("4WOD"), l = n("kRJp"), c = n("UTVS"), u = n("tiKp"), h = n("xDBR"),
            d = u("iterator"), f = !1;
        [].keys && ("next" in (a = [].keys()) ? (i = s(s(a))) !== Object.prototype && (r = i) : f = !0);
        var p = null == r || o((function () {
            var t = {};
            return r[d].call(t) !== t
        }));
        p && (r = {}), h && !p || c(r, d) || l(r, d, (function () {
            return this
        })), t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f}
    }, sEFX: function (t, e, n) {
        "use strict";
        var r = n("AO7/"), i = n("9d/t");
        t.exports = r ? {}.toString : function () {
            return "[object " + i(this) + "]"
        }
    }, sMBO: function (t, e, n) {
        var r = n("g6v/"), i = n("m/L8").f, a = Function.prototype, o = a.toString, s = /^\s*function ([^ (]*)/;
        r && !("name" in a) && i(a, "name", {
            configurable: !0, get: function () {
                try {
                    return o.call(this).match(s)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, tkto: function (t, e, n) {
        var r = n("I+eb"), i = n("ewvW"), a = n("33Wh");
        r({
            target: "Object", stat: !0, forced: n("0Dky")((function () {
                a(1)
            }))
        }, {
            keys: function (t) {
                return a(i(t))
            }
        })
    }, toAj: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("ppGB"), a = n("QIpd"), o = n("EUja"), s = n("0Dky"), l = 1..toFixed, c = Math.floor,
            u = function (t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? u(t, e - 1, n * t) : u(t * t, e / 2, n)
            }, h = function (t, e, n) {
                for (var r = -1, i = n; ++r < 6;) i += e * t[r], t[r] = i % 1e7, i = c(i / 1e7)
            }, d = function (t, e) {
                for (var n = 6, r = 0; --n >= 0;) r += t[n], t[n] = c(r / e), r = r % e * 1e7
            }, f = function (t) {
                for (var e = 6, n = ""; --e >= 0;) if ("" !== n || 0 === e || 0 !== t[e]) {
                    var r = String(t[e]);
                    n = "" === n ? r : n + o.call("0", 7 - r.length) + r
                }
                return n
            };
        r({
            target: "Number",
            proto: !0,
            forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !s((function () {
                l.call({})
            }))
        }, {
            toFixed: function (t) {
                var e, n, r, s, l = a(this), c = i(t), p = [0, 0, 0, 0, 0, 0], g = "", y = "0";
                if (c < 0 || c > 20) throw RangeError("Incorrect fraction digits");
                if (l != l) return "NaN";
                if (l <= -1e21 || l >= 1e21) return String(l);
                if (l < 0 && (g = "-", l = -l), l > 1e-21) if (n = (e = function (t) {
                    for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                    for (; n >= 2;) e += 1, n /= 2;
                    return e
                }(l * u(2, 69, 1)) - 69) < 0 ? l * u(2, -e, 1) : l / u(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                    for (h(p, 0, n), r = c; r >= 7;) h(p, 1e7, 0), r -= 7;
                    for (h(p, u(10, r, 1), 0), r = e - 1; r >= 23;) d(p, 1 << 23), r -= 23;
                    d(p, 1 << r), h(p, 1, 1), d(p, 2), y = f(p)
                } else h(p, 0, n), h(p, 1 << -e, 0), y = f(p) + o.call("0", c);
                return y = c > 0 ? g + ((s = y.length) <= c ? "0." + o.call("0", c - s) + y : y.slice(0, s - c) + "." + y.slice(s - c)) : g + y
            }
        })
    }, uL8W: function (t, e, n) {
        n("I+eb")({target: "Object", stat: !0, sham: !n("g6v/")}, {create: n("fHMY")})
    }, wg0c: function (t, e, n) {
        var r = n("2oRo"), i = n("WKiH").trim, a = n("WJkJ"), o = r.parseInt, s = /^[+-]?0[Xx]/,
            l = 8 !== o(a + "08") || 22 !== o(a + "0x16");
        t.exports = l ? function (t, e) {
            var n = i(String(t));
            return o(n, e >>> 0 || (s.test(n) ? 16 : 10))
        } : o
    }, yNLB: function (t, e, n) {
        var r = n("0Dky"), i = n("WJkJ");
        t.exports = function (t) {
            return r((function () {
                return !!i[t]() || "​᠎" != "​᠎"[t]() || i[t].name !== t
            }))
        }
    }, yXV3: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("TWQb").indexOf, a = n("pkCn"), o = [].indexOf, s = !!o && 1 / [1].indexOf(1, -0) < 0,
            l = a("indexOf");
        r({target: "Array", proto: !0, forced: s || !l}, {
            indexOf: function (t) {
                return s ? o.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, yZSC: function (t, e, n) {
        var r, i;
        n("ToJy"), n("R5XZ"), n("piMb"), n("2B1R"), n("Rm1S"), n("rB9j"), n("sMBO"), n("yXV3"), n("EnZy"), n("SYor"), n("TWNs"), n("JfAA"), n("TeQF"), n("+2oP"), n("fbCW"), n("oVuX"), n("pNMO"), n("4Brf"), n("07d7"), n("0oug"), n("PKPk"), n("4mDm"), n("3bBZ"), r = [n("EVdn"), n("FlOX")], void 0 === (i = function (t) {
            return function (t, e, n, r) {
                "use strict";
                var i = t.fn.dataTable, a = function e(n, r) {
                    if (!i.versionCheck || !i.versionCheck("1.10.10")) throw"DataTables Responsive requires DataTables 1.10.10 or newer";
                    this.s = {
                        dt: new i.Api(n),
                        columns: [],
                        current: []
                    }, this.s.dt.settings()[0].responsive || (r && "string" == typeof r.details ? r.details = {type: r.details} : r && !1 === r.details ? r.details = {type: !1} : r && !0 === r.details && (r.details = {type: "inline"}), this.c = t.extend(!0, {}, e.defaults, i.defaults.responsive, r), n.responsive = this, this._constructor())
                };
                t.extend(a.prototype, {
                    _constructor: function () {
                        var n = this, r = this.s.dt, a = r.settings()[0], o = t(e).innerWidth();
                        r.settings()[0]._responsive = this, t(e).on("resize.dtr orientationchange.dtr", i.util.throttle((function () {
                            var r = t(e).innerWidth();
                            r !== o && (n._resize(), o = r)
                        }))), a.oApi._fnCallbackReg(a, "aoRowCreatedCallback", (function (e, i, a) {
                            -1 !== t.inArray(!1, n.s.current) && t(">td, >th", e).each((function (e) {
                                var i = r.column.index("toData", e);
                                !1 === n.s.current[i] && t(this).css("display", "none")
                            }))
                        })), r.on("destroy.dtr", (function () {
                            r.off(".dtr"), t(r.table().body()).off(".dtr"), t(e).off("resize.dtr orientationchange.dtr"), r.cells(".dtr-control").nodes().to$().removeClass("dtr-control"), t.each(n.s.current, (function (t, e) {
                                !1 === e && n._setColumnVis(t, !0)
                            }))
                        })), this.c.breakpoints.sort((function (t, e) {
                            return t.width < e.width ? 1 : t.width > e.width ? -1 : 0
                        })), this._classLogic(), this._resizeAuto();
                        var s = this.c.details;
                        !1 !== s.type && (n._detailsInit(), r.on("column-visibility.dtr", (function () {
                            n._timer && clearTimeout(n._timer), n._timer = setTimeout((function () {
                                n._timer = null, n._classLogic(), n._resizeAuto(), n._resize(!0), n._redrawChildren()
                            }), 100)
                        })), r.on("draw.dtr", (function () {
                            n._redrawChildren()
                        })), t(r.table().node()).addClass("dtr-" + s.type)), r.on("column-reorder.dtr", (function (t, e, r) {
                            n._classLogic(), n._resizeAuto(), n._resize(!0)
                        })), r.on("column-sizing.dtr", (function () {
                            n._resizeAuto(), n._resize()
                        })), r.on("preXhr.dtr", (function () {
                            var t = [];
                            r.rows().every((function () {
                                this.child.isShown() && t.push(this.id(!0))
                            })), r.one("draw.dtr", (function () {
                                n._resizeAuto(), n._resize(), r.rows(t).every((function () {
                                    n._detailsDisplay(this, !1)
                                }))
                            }))
                        })), r.on("draw.dtr", (function () {
                            n._controlClass()
                        })).on("init.dtr", (function (e, i, a) {
                            "dt" === e.namespace && (n._resizeAuto(), n._resize(), t.inArray(!1, n.s.current) && r.columns.adjust())
                        })), this._resize()
                    }, _columnsVisiblity: function (e) {
                        var n, r, i = this.s.dt, a = this.s.columns, o = a.map((function (t, e) {
                            return {columnIdx: e, priority: t.priority}
                        })).sort((function (t, e) {
                            return t.priority !== e.priority ? t.priority - e.priority : t.columnIdx - e.columnIdx
                        })), s = t.map(a, (function (n, r) {
                            return !1 === i.column(r).visible() ? "not-visible" : (!n.auto || null !== n.minWidth) && (!0 === n.auto ? "-" : -1 !== t.inArray(e, n.includeIn))
                        })), l = 0;
                        for (n = 0, r = s.length; n < r; n++) !0 === s[n] && (l += a[n].minWidth);
                        var c = i.settings()[0].oScroll, u = c.sY || c.sX ? c.iBarWidth : 0,
                            h = i.table().container().offsetWidth - u - l;
                        for (n = 0, r = s.length; n < r; n++) a[n].control && (h -= a[n].minWidth);
                        var d = !1;
                        for (n = 0, r = o.length; n < r; n++) {
                            var f = o[n].columnIdx;
                            "-" === s[f] && !a[f].control && a[f].minWidth && (d || h - a[f].minWidth < 0 ? (d = !0, s[f] = !1) : s[f] = !0, h -= a[f].minWidth)
                        }
                        var p = !1;
                        for (n = 0, r = a.length; n < r; n++) if (!a[n].control && !a[n].never && !1 === s[n]) {
                            p = !0;
                            break
                        }
                        for (n = 0, r = a.length; n < r; n++) a[n].control && (s[n] = p), "not-visible" === s[n] && (s[n] = !1);
                        return -1 === t.inArray(!0, s) && (s[0] = !0), s
                    }, _classLogic: function () {
                        var e = this, n = this.c.breakpoints, i = this.s.dt, a = i.columns().eq(0).map((function (t) {
                            var e = this.column(t), n = e.header().className,
                                a = i.settings()[0].aoColumns[t].responsivePriority,
                                o = e.header().getAttribute("data-priority");
                            return a === r && (a = o === r || null === o ? 1e4 : 1 * o), {
                                className: n,
                                includeIn: [],
                                auto: !1,
                                control: !1,
                                never: !!n.match(/\bnever\b/),
                                priority: a
                            }
                        })), o = function (e, n) {
                            var r = a[e].includeIn;
                            -1 === t.inArray(n, r) && r.push(n)
                        }, s = function (t, r, i, s) {
                            var l, c, u;
                            if (i) {
                                if ("max-" === i) for (l = e._find(r).width, c = 0, u = n.length; c < u; c++) n[c].width <= l && o(t, n[c].name); else if ("min-" === i) for (l = e._find(r).width, c = 0, u = n.length; c < u; c++) n[c].width >= l && o(t, n[c].name); else if ("not-" === i) for (c = 0, u = n.length; c < u; c++) -1 === n[c].name.indexOf(s) && o(t, n[c].name)
                            } else a[t].includeIn.push(r)
                        };
                        a.each((function (e, r) {
                            for (var i = e.className.split(" "), a = !1, o = 0, l = i.length; o < l; o++) {
                                var c = i[o].trim();
                                if ("all" === c) return a = !0, void (e.includeIn = t.map(n, (function (t) {
                                    return t.name
                                })));
                                if ("none" === c || e.never) return void (a = !0);
                                if ("control" === c || "dtr-control" === c) return a = !0, void (e.control = !0);
                                t.each(n, (function (t, e) {
                                    var n = e.name.split("-"),
                                        i = new RegExp("(min\\-|max\\-|not\\-)?(" + n[0] + ")(\\-[_a-zA-Z0-9])?"),
                                        o = c.match(i);
                                    o && (a = !0, o[2] === n[0] && o[3] === "-" + n[1] ? s(r, e.name, o[1], o[2] + o[3]) : o[2] !== n[0] || o[3] || s(r, e.name, o[1], o[2]))
                                }))
                            }
                            a || (e.auto = !0)
                        })), this.s.columns = a
                    }, _controlClass: function () {
                        if ("inline" === this.c.details.type) {
                            var e = this.s.dt, n = this.s.current, r = t.inArray(!0, n);
                            e.cells(null, (function (t) {
                                return t !== r
                            }), {page: "current"}).nodes().to$().filter(".dtr-control").removeClass("dtr-control"), e.cells(null, r, {page: "current"}).nodes().to$().addClass("dtr-control")
                        }
                    }, _detailsDisplay: function (e, n) {
                        var r = this, i = this.s.dt, a = this.c.details;
                        if (a && !1 !== a.type) {
                            var o = a.display(e, n, (function () {
                                return a.renderer(i, e[0], r._detailsObj(e[0]))
                            }));
                            !0 !== o && !1 !== o || t(i.table().node()).triggerHandler("responsive-display.dt", [i, e, o, n])
                        }
                    }, _detailsInit: function () {
                        var e = this, n = this.s.dt, i = this.c.details;
                        "inline" === i.type && (i.target = "td.dtr-control, th.dtr-control"), n.on("draw.dtr", (function () {
                            e._tabIndexes()
                        })), e._tabIndexes(), t(n.table().body()).on("keyup.dtr", "td, th", (function (e) {
                            13 === e.keyCode && t(this).data("dtr-keyboard") && t(this).click()
                        }));
                        var a = i.target, o = "string" == typeof a ? a : "td, th";
                        a === r && null === a || t(n.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", o, (function (r) {
                            if (t(n.table().node()).hasClass("collapsed") && -1 !== t.inArray(t(this).closest("tr").get(0), n.rows().nodes().toArray())) {
                                if ("number" == typeof a) {
                                    var i = a < 0 ? n.columns().eq(0).length + a : a;
                                    if (n.cell(this).index().column !== i) return
                                }
                                var o = n.row(t(this).closest("tr"));
                                "click" === r.type ? e._detailsDisplay(o, !1) : "mousedown" === r.type ? t(this).css("outline", "none") : "mouseup" === r.type && t(this).trigger("blur").css("outline", "")
                            }
                        }))
                    }, _detailsObj: function (e) {
                        var n = this, r = this.s.dt;
                        return t.map(this.s.columns, (function (i, a) {
                            if (!i.never && !i.control) {
                                var o = r.settings()[0].aoColumns[a];
                                return {
                                    className: o.sClass,
                                    columnIndex: a,
                                    data: r.cell(e, a).render(n.c.orthogonal),
                                    hidden: r.column(a).visible() && !n.s.current[a],
                                    rowIndex: e,
                                    title: null !== o.sTitle ? o.sTitle : t(r.column(a).header()).text()
                                }
                            }
                        }))
                    }, _find: function (t) {
                        for (var e = this.c.breakpoints, n = 0, r = e.length; n < r; n++) if (e[n].name === t) return e[n]
                    }, _redrawChildren: function () {
                        var t = this, e = this.s.dt;
                        e.rows({page: "current"}).iterator("row", (function (n, r) {
                            e.row(r), t._detailsDisplay(e.row(r), !0)
                        }))
                    }, _resize: function (n) {
                        var r, i, a = this, o = this.s.dt, s = t(e).innerWidth(), l = this.c.breakpoints, c = l[0].name,
                            u = this.s.columns, h = this.s.current.slice();
                        for (r = l.length - 1; r >= 0; r--) if (s <= l[r].width) {
                            c = l[r].name;
                            break
                        }
                        var d = this._columnsVisiblity(c);
                        this.s.current = d;
                        var f = !1;
                        for (r = 0, i = u.length; r < i; r++) if (!1 === d[r] && !u[r].never && !u[r].control && 0 == !o.column(r).visible()) {
                            f = !0;
                            break
                        }
                        t(o.table().node()).toggleClass("collapsed", f);
                        var p = !1, g = 0;
                        o.columns().eq(0).each((function (t, e) {
                            !0 === d[e] && g++, (n || d[e] !== h[e]) && (p = !0, a._setColumnVis(t, d[e]))
                        })), p && (this._redrawChildren(), t(o.table().node()).trigger("responsive-resize.dt", [o, this.s.current]), 0 === o.page.info().recordsDisplay && t("td", o.table().body()).eq(0).attr("colspan", g)), a._controlClass()
                    }, _resizeAuto: function () {
                        var e = this.s.dt, n = this.s.columns;
                        if (this.c.auto && -1 !== t.inArray(!0, t.map(n, (function (t) {
                            return t.auto
                        })))) {
                            t.isEmptyObject(o) || t.each(o, (function (t) {
                                var n = t.split("-");
                                s(e, 1 * n[0], 1 * n[1])
                            })), e.table().node().offsetWidth, e.columns;
                            var r = e.table().node().cloneNode(!1), i = t(e.table().header().cloneNode(!1)).appendTo(r),
                                a = t(e.table().body()).clone(!1, !1).empty().appendTo(r);
                            r.style.width = "auto";
                            var l = e.columns().header().filter((function (t) {
                                return e.column(t).visible()
                            })).to$().clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
                            t(a).append(t(e.rows({page: "current"}).nodes()).clone(!1)).find("th, td").css("display", "");
                            var c = e.table().footer();
                            if (c) {
                                var u = t(c.cloneNode(!1)).appendTo(r), h = e.columns().footer().filter((function (t) {
                                    return e.column(t).visible()
                                })).to$().clone(!1).css("display", "table-cell");
                                t("<tr/>").append(h).appendTo(u)
                            }
                            t("<tr/>").append(l).appendTo(i), "inline" === this.c.details.type && t(r).addClass("dtr-inline collapsed"), t(r).find("[name]").removeAttr("name"), t(r).css("position", "relative");
                            var d = t("<div/>").css({width: 1, height: 1, overflow: "hidden", clear: "both"}).append(r);
                            d.insertBefore(e.table().node()), l.each((function (t) {
                                var r = e.column.index("fromVisible", t);
                                n[r].minWidth = this.offsetWidth || 0
                            })), d.remove()
                        }
                    }, _responsiveOnlyHidden: function () {
                        var e = this.s.dt;
                        return t.map(this.s.current, (function (t, n) {
                            return !1 === e.column(n).visible() || t
                        }))
                    }, _setColumnVis: function (e, n) {
                        var r = this.s.dt, i = n ? "" : "none";
                        t(r.column(e).header()).css("display", i), t(r.column(e).footer()).css("display", i), r.column(e).nodes().to$().css("display", i), t.isEmptyObject(o) || r.cells(null, e).indexes().each((function (t) {
                            s(r, t.row, t.column)
                        }))
                    }, _tabIndexes: function () {
                        var e = this.s.dt, n = e.cells({page: "current"}).nodes().to$(), r = e.settings()[0],
                            i = this.c.details.target;
                        n.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), "number" == typeof i ? e.cells(null, i, {page: "current"}).nodes().to$().attr("tabIndex", r.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === i && (i = ">td:first-child, >th:first-child"), t(i, e.rows({page: "current"}).nodes()).attr("tabIndex", r.iTabIndex).data("dtr-keyboard", 1))
                    }
                }), a.breakpoints = [{name: "desktop", width: 1 / 0}, {
                    name: "tablet-l",
                    width: 1024
                }, {name: "tablet-p", width: 768}, {name: "mobile-l", width: 480}, {
                    name: "mobile-p",
                    width: 320
                }], a.display = {
                    childRow: function (e, n, r) {
                        return n ? t(e.node()).hasClass("parent") ? (e.child(r(), "child").show(), !0) : void 0 : e.child.isShown() ? (e.child(!1), t(e.node()).removeClass("parent"), !1) : (e.child(r(), "child").show(), t(e.node()).addClass("parent"), !0)
                    }, childRowImmediate: function (e, n, r) {
                        return !n && e.child.isShown() || !e.responsive.hasHidden() ? (e.child(!1), t(e.node()).removeClass("parent"), !1) : (e.child(r(), "child").show(), t(e.node()).addClass("parent"), !0)
                    }, modal: function (e) {
                        return function (r, i, a) {
                            if (i) t("div.dtr-modal-content").empty().append(a()); else {
                                var o = function () {
                                        s.remove(), t(n).off("keypress.dtr")
                                    },
                                    s = t('<div class="dtr-modal"/>').append(t('<div class="dtr-modal-display"/>').append(t('<div class="dtr-modal-content"/>').append(a())).append(t('<div class="dtr-modal-close">&times;</div>').click((function () {
                                        o()
                                    })))).append(t('<div class="dtr-modal-background"/>').click((function () {
                                        o()
                                    }))).appendTo("body");
                                t(n).on("keyup.dtr", (function (t) {
                                    27 === t.keyCode && (t.stopPropagation(), o())
                                }))
                            }
                            e && e.header && t("div.dtr-modal-content").prepend("<h2>" + e.header(r) + "</h2>")
                        }
                    }
                };
                var o = {};

                function s(t, e, n) {
                    var i = e + "-" + n;
                    if (o[i]) {
                        for (var a = t.cell(e, n).node(), s = o[i][0].parentNode.childNodes, l = [], c = 0, u = s.length; c < u; c++) l.push(s[c]);
                        for (var h = 0, d = l.length; h < d; h++) a.appendChild(l[h]);
                        o[i] = r
                    }
                }

                a.renderer = {
                    listHiddenNodes: function () {
                        return function (e, n, r) {
                            var i = t('<ul data-dtr-index="' + n + '" class="dtr-details"/>'), a = !1;
                            return t.each(r, (function (n, r) {
                                if (r.hidden) {
                                    var s = r.className ? 'class="' + r.className + '"' : "";
                                    t("<li " + s + ' data-dtr-index="' + r.columnIndex + '" data-dt-row="' + r.rowIndex + '" data-dt-column="' + r.columnIndex + '"><span class="dtr-title">' + r.title + "</span> </li>").append(t('<span class="dtr-data"/>').append(function (t, e, n) {
                                        var r = e + "-" + n;
                                        if (o[r]) return o[r];
                                        for (var i = [], a = t.cell(e, n).node().childNodes, s = 0, l = a.length; s < l; s++) i.push(a[s]);
                                        return o[r] = i, i
                                    }(e, r.rowIndex, r.columnIndex))).appendTo(i), a = !0
                                }
                            })), !!a && i
                        }
                    }, listHidden: function () {
                        return function (e, n, r) {
                            var i = t.map(r, (function (t) {
                                var e = t.className ? 'class="' + t.className + '"' : "";
                                return t.hidden ? "<li " + e + ' data-dtr-index="' + t.columnIndex + '" data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><span class="dtr-title">' + t.title + '</span> <span class="dtr-data">' + t.data + "</span></li>" : ""
                            })).join("");
                            return !!i && t('<ul data-dtr-index="' + n + '" class="dtr-details"/>').append(i)
                        }
                    }, tableAll: function (e) {
                        return e = t.extend({tableClass: ""}, e), function (n, r, i) {
                            var a = t.map(i, (function (t) {
                                return "<tr " + (t.className ? 'class="' + t.className + '"' : "") + ' data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>"
                            })).join("");
                            return t('<table class="' + e.tableClass + ' dtr-details" width="100%"/>').append(a)
                        }
                    }
                }, a.defaults = {
                    breakpoints: a.breakpoints,
                    auto: !0,
                    details: {
                        display: a.display.childRow,
                        renderer: a.renderer.listHidden(),
                        target: 0,
                        type: "inline"
                    },
                    orthogonal: "display"
                };
                var l = t.fn.dataTable.Api;
                return l.register("responsive()", (function () {
                    return this
                })), l.register("responsive.index()", (function (e) {
                    return {column: (e = t(e)).data("dtr-index"), row: e.parent().data("dtr-index")}
                })), l.register("responsive.rebuild()", (function () {
                    return this.iterator("table", (function (t) {
                        t._responsive && t._responsive._classLogic()
                    }))
                })), l.register("responsive.recalc()", (function () {
                    return this.iterator("table", (function (t) {
                        t._responsive && (t._responsive._resizeAuto(), t._responsive._resize())
                    }))
                })), l.register("responsive.hasHidden()", (function () {
                    var e = this.context[0];
                    return !!e._responsive && -1 !== t.inArray(!1, e._responsive._responsiveOnlyHidden())
                })), l.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", (function () {
                    return this.iterator("column", (function (t, e) {
                        return !!t._responsive && t._responsive._responsiveOnlyHidden()[e]
                    }), 1)
                })), a.version = "2.2.7", t.fn.dataTable.Responsive = a, t.fn.DataTable.Responsive = a, t(n).on("preInit.dt.dtr", (function (e, n, r) {
                    if ("dt" === e.namespace && (t(n.nTable).hasClass("responsive") || t(n.nTable).hasClass("dt-responsive") || n.oInit.responsive || i.defaults.responsive)) {
                        var o = n.oInit.responsive;
                        !1 !== o && new a(n, t.isPlainObject(o) ? o : {})
                    }
                })), a
            }(t, window, document)
        }.apply(e, r)) || (t.exports = i)
    }, yq1k: function (t, e, n) {
        "use strict";
        var r = n("I+eb"), i = n("TWQb").includes, a = n("RNIs");
        r({target: "Array", proto: !0}, {
            includes: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), a("includes")
    }, zKZe: function (t, e, n) {
        var r = n("I+eb"), i = n("YNrV");
        r({target: "Object", stat: !0, forced: Object.assign !== i}, {assign: i})
    }
}, [["dwii", "runtime", 0, 1]]]);