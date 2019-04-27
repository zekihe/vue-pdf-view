! function(e, h) {
    function b() {
        var u = d.getBoundingClientRect().width;
        u / a > 750 && (u = 750 * a);
        var v = u / 7.5;
        d.style.fontSize = v + "px", f.rem = e.rem = v
    }
    var n, t = e.document,
        d = t.documentElement,
        l = t.querySelector('meta[name="viewport"]'),
        o = t.querySelector('meta[name="flexible"]'),
        a = 0,
        s = 0,
        f = h.flexible || (h.flexible = {});
    if (l) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var g = l.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        g && (s = parseFloat(g[1]), a = parseInt(1 / s))
    } else {
        if (o) {
            var k = o.getAttribute("content");
            if (k) {
                var p = k.match(/initial\-dpr=([\d\.]+)/),
                    c = k.match(/maximum\-dpr=([\d\.]+)/);
                p && (a = parseFloat(p[1]), s = parseFloat((1 / a).toFixed(2))), c && (a = parseFloat(c[1]), s = parseFloat((1 / a).toFixed(2)))
            }
        }
    }
    if (!a && !s) {
        var r = e.navigator.userAgent,
            j = (!!r.match(/android/gi), !!r.match(/iphone/gi)),
            q = j && !!r.match(/OS 9_3/),
            m = e.devicePixelRatio;
        a = j && !q ? m >= 3 && (!a || a >= 3) ? 3 : m >= 2 && (!a || a >= 2) ? 2 : 1 : 1, s = 1 / a
    }
    if (d.setAttribute("data-dpr", a), !l) {
        if (l = t.createElement("meta"), l.setAttribute("name", "viewport"), l.setAttribute("content", "initial-scale=" + s + ", maximum-scale=" + s + ", minimum-scale=" + s + ", user-scalable=no"), d.firstElementChild) {
            d.firstElementChild.appendChild(l)
        } else {
            var i = t.createElement("div");
            i.appendChild(l), t.write(i.innerHTML)
        }
    }
    e.addEventListener("resize", function() {
        clearTimeout(n), n = setTimeout(b, 300)
    }, !1), e.addEventListener("pageshow", function(u) {
        u.persisted && (clearTimeout(n), n = setTimeout(b, 300))
    }, !1), "complete" === t.readyState ? t.body.style.fontSize = 12 * a + "px" : t.addEventListener("DOMContentLoaded", function() {
        t.body.style.fontSize = 12 * a + "px"
    }, !1), b(), f.dpr = e.dpr = a, f.refreshRem = b, f.rem2px = function(v) {
        var u = parseFloat(v) * this.rem;
        return "string" == typeof v && v.match(/rem$/) && (u += "px"), u
    }, f.px2rem = function(v) {
        var u = parseFloat(v) / this.rem;
        return "string" == typeof v && v.match(/px$/) && (u += "rem"), u
    }
}(window, (window.lib || (window.lib = {})));