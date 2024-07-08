(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [38],
  {
    7015: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/team",
        function () {
          return r(9877);
        },
      ]);
    },
    4814: function (e, t) {
      "use strict";
      t.Z = {
        src: "http://localhost/brand/_next/static/media/move-down-dark.e55c1fb4.svg",
        height: 18,
        width: 18,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    8417: function (e, t) {
      "use strict";
      t.Z = {
        src: "http://localhost/brand/_next/static/media/move-down.31fd25f2.svg",
        height: 18,
        width: 18,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    7423: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(5893);
      function s(e) {
        let { children: t } = e;
        return (0, n.jsx)("section", {
          className: "tr__banner",
          children: (0, n.jsx)("div", {
            className: "tr__container tr__banner__container",
            children: (0, n.jsx)("div", {
              className: "tr__banner__content",
              children: t,
            }),
          }),
        });
      }
      r(7294);
    },
    9877: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return L;
          },
        });
      var n = r(5893),
        s = r(7294),
        i = r(9008),
        a = r.n(i),
        o = r(5675),
        l = r.n(o),
        c = r(1664),
        _ = r.n(c),
        d = r(9431),
        m = r(6377),
        u = r(990),
        h = r(3145),
        p = r.n(h),
        x = r(7162),
        g = r(6546),
        j = r.n(g);
      r(1491);
      var f = r(4712),
        w = r(7423),
        b = r(6874),
        v = r(6012),
        y = r(8365),
        A = r(437),
        Z = r(8417),
        N = r(4814),
        P = {
          src: "http://localhost/brand/_next/static/media/lion.8d65c3d2.webp",
          height: 1800,
          width: 2880,
          blurDataURL:
            "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JZwCdAEegKj9YQAA/t4gHoTc2pfey6VwAXG7aD3AeeV99dnjFlPGAEc0t9lFAAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        k = {
          src: "http://localhost/brand/_next/static/media/lion2.813c8d36.webp",
          height: 2654,
          width: 2880,
          blurDataURL:
            "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAcAAkA4JaQAApuCLLwAAP76DtppxRL28x07izod+1xCKKVD5vTwl4AAAA==",
          blurWidth: 8,
          blurHeight: 7,
        };
      function L(e) {
        let { darkMode: t, isRendered: r, scrollToSection: i } = e;
        return (
          (0, s.useEffect)(() => {
            let e;
            let t = document.querySelector(
                ".tr__team__members__slider__wrapper"
              ),
              r = u.ZP.utils.toArray(".tr__team__member__slide"),
              n = (function (e, t) {
                e = u.ZP.utils.toArray(e);
                let r = (t = t || {}).onChange,
                  n = 0,
                  s = u.ZP.timeline({
                    repeat: t.repeat,
                    onUpdate:
                      r &&
                      function () {
                        let t = s.closestIndex();
                        n !== t && ((n = t), r(e[t], t));
                      },
                    paused: t.paused,
                    defaults: { ease: "none" },
                    onReverseComplete: () =>
                      s.totalTime(s.rawTime() + 100 * s.duration()),
                  }),
                  i = e.length,
                  a = e[0].offsetLeft,
                  o = [],
                  l = [],
                  c = [],
                  _ = [],
                  d = 0,
                  m = !1,
                  h = t.center,
                  g = 100 * (t.speed || 1),
                  j = !1 === t.snap ? (e) => e : u.ZP.utils.snap(t.snap || 1),
                  f = 0,
                  w =
                    !0 === h
                      ? e[0].parentNode
                      : u.ZP.utils.toArray(h)[0] || e[0].parentNode,
                  b,
                  v = () =>
                    e[i - 1].offsetLeft +
                    (_[i - 1] / 100) * l[i - 1] -
                    a +
                    c[0] +
                    e[i - 1].offsetWidth *
                      u.ZP.getProperty(e[i - 1], "scaleX") +
                    (parseFloat(t.paddingRight) || 0),
                  y = () => {
                    let t = w.getBoundingClientRect(),
                      r;
                    e.forEach((e, n) => {
                      (l[n] = parseFloat(u.ZP.getProperty(e, "width", "px"))),
                        (_[n] = j(
                          (parseFloat(u.ZP.getProperty(e, "x", "px")) / l[n]) *
                            100 +
                            u.ZP.getProperty(e, "xPercent")
                        )),
                        (r = e.getBoundingClientRect()),
                        (c[n] = r.left - (n ? t.right : t.left)),
                        (t = r);
                    }),
                      u.ZP.set(e, { xPercent: (e) => _[e] }),
                      (b = v());
                  },
                  A,
                  Z = () => {
                    (f = h ? (s.duration() * (w.offsetWidth / 2)) / b : 0),
                      h &&
                        o.forEach((e, t) => {
                          o[t] = A(
                            s.labels["label" + t] +
                              (s.duration() * l[t]) / 2 / b -
                              f
                          );
                        });
                  },
                  N = (e, t, r) => {
                    let n = e.length,
                      s = 1e10,
                      i = 0,
                      a;
                    for (; n--; )
                      (a = Math.abs(e[n] - t)) > r / 2 && (a = r - a),
                        a < s && ((s = a), (i = n));
                    return i;
                  },
                  P = () => {
                    let t, r, n, d, m;
                    for (s.clear(), t = 0; t < i; t++)
                      (r = e[t]),
                        (n = (_[t] / 100) * l[t]),
                        (m =
                          (d = r.offsetLeft + n - a + c[0]) +
                          l[t] * u.ZP.getProperty(r, "scaleX")),
                        s
                          .to(
                            r,
                            {
                              xPercent: j(((n - m) / l[t]) * 100),
                              duration: m / g,
                            },
                            0
                          )
                          .fromTo(
                            r,
                            { xPercent: j(((n - m + b) / l[t]) * 100) },
                            {
                              xPercent: _[t],
                              duration: (n - m + b - n) / g,
                              immediateRender: !1,
                            },
                            m / g
                          )
                          .add("label" + t, d / g),
                        (o[t] = d / g);
                    A = u.ZP.utils.wrap(0, s.duration());
                  },
                  k = (e) => {
                    let t = s.progress();
                    s.progress(0, !0),
                      y(),
                      e && P(),
                      Z(),
                      e && s.draggable ? s.time(o[d], !0) : s.progress(t, !0);
                  },
                  L;
                function T(e, t) {
                  (t = t || {}),
                    Math.abs(e - d) > i / 2 && (e += e > d ? -i : i);
                  let r = u.ZP.utils.wrap(0, i, e),
                    n = o[r];
                  return (
                    n > s.time() != e > d &&
                      e !== d &&
                      (n += s.duration() * (e > d ? 1 : -1)),
                    (n < 0 || n > s.duration()) && (t.modifiers = { time: A }),
                    (d = r),
                    (t.overwrite = !0),
                    u.ZP.killTweensOf(L),
                    0 === t.duration ? s.time(A(n)) : s.tweenTo(n, t)
                  );
                }
                if (
                  (u.ZP.set(e, { x: 0 }),
                  y(),
                  P(),
                  Z(),
                  window.addEventListener("resize", () => k(!0)),
                  (s.toIndex = (e, t) => T(e, t)),
                  (s.closestIndex = (e) => {
                    let t = N(o, s.time(), s.duration());
                    return e && ((d = t), (m = !1)), t;
                  }),
                  (s.current = () => (m ? s.closestIndex(!0) : d)),
                  (s.next = (e) => T(s.current() + 1, e)),
                  (s.previous = (e) => T(s.current() - 1, e)),
                  (s.times = o),
                  s.progress(1, !0).progress(0, !0),
                  t.reversed && (s.vars.onReverseComplete(), s.reverse()),
                  t.draggable && "function" == typeof p())
                ) {
                  L = document.createElement("div");
                  let t = u.ZP.utils.wrap(0, 1),
                    r,
                    n,
                    i,
                    a,
                    l,
                    c = () => s.progress(t(n + (i.startX - i.x) * r)),
                    _ = () => s.closestIndex(!0);
                  void 0 === x.InertiaPlugin &&
                    console.warn(
                      "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
                    ),
                    (i = p().create(L, {
                      trigger: e[0].parentNode,
                      type: "x",
                      onPressInit() {
                        let e = this.x;
                        u.ZP.killTweensOf(s),
                          (n = s.progress()),
                          k(),
                          (l = -(n / (r = 1 / b)) - e),
                          u.ZP.set(L, { x: -(n / r) });
                      },
                      onDrag: c,
                      onDragEnd: function () {
                        document
                          .querySelector(".tr__cursor")
                          .classList.remove("tr__slide__cursor"),
                          document
                            .querySelector(".tr__cursor")
                            .classList.remove("tr__slide__cursor__dragging"),
                          document
                            .querySelector(".tr__cursor")
                            .classList.remove("tr__workImage__cursor"),
                          u.ZP.to(".tr__team__member__slide", {
                            duration: 0.5,
                            scale: 1,
                            ease: "Sine.easeInOut",
                          });
                      },
                      onThrowUpdate: c,
                      overshootTolerance: 0,
                      inertia: !0,
                      snap(e) {
                        if (10 > Math.abs(-(n / r) - this.x)) return a + l;
                        let t = -(e * r) * s.duration(),
                          i = A(t),
                          c = o[N(o, i, s.duration())] - i;
                        return (
                          Math.abs(c) > s.duration() / 2 &&
                            (c += c < 0 ? s.duration() : -s.duration()),
                          (a = -((t + c) / s.duration() / r))
                        );
                      },
                      onRelease() {
                        _(), i.isThrowing && (m = !0);
                      },
                      onThrowComplete: _,
                    })[0]),
                    (s.draggable = i);
                }
                return s.closestIndex(!0), (n = d), r && r(e[d], d), s;
              })(r, {
                paused: !0,
                draggable: !0,
                center: !1,
                onChange: (t, r) => {
                  e && e.classList.remove("active"),
                    t.classList.add("active"),
                    (e = t);
                },
              });
            r.forEach((e, t) =>
              e.addEventListener("click", () =>
                n.toIndex(t, { duration: 0.8, ease: "power1.inOut" })
              )
            ),
              t.addEventListener("mousedown", (e) => {
                document
                  .querySelector(".tr__cursor")
                  .classList.remove("tr__slide__cursor"),
                  document
                    .querySelector(".tr__cursor")
                    .classList.add("tr__slide__cursor__dragging"),
                  u.ZP.to(".tr__team__member__slide", {
                    duration: 0.5,
                    scale: 0.95,
                    ease: "Sine.easeInOut",
                  });
                let t = document.querySelectorAll(".tr__team__member__slide");
                u.ZP.to(t, { y: 0 });
              }),
              t.addEventListener("mouseup", (e) => {
                document
                  .querySelector(".tr__cursor")
                  .classList.remove("tr__slide__cursor__dragging"),
                  document
                    .querySelector(".tr__cursor")
                    .classList.add("tr__slide__cursor"),
                  u.ZP.to(".tr__team__member__slide", {
                    duration: 0.5,
                    scale: 1,
                    ease: "Sine.easeInOut",
                  });
              });
            let s = document.querySelector(
              ".tr__team__members__slider__wrapper"
            );
            s.addEventListener("mouseenter", function (e) {
              document
                .querySelector(".tr__cursor")
                .classList.add("tr__slide__cursor"),
                u.ZP.to(".tr__cursor", 0.3, {
                  width: "120px",
                  height: "120px",
                });
            }),
              s.addEventListener("mousedown", function (e) {
                document
                  .querySelector(".tr__cursor")
                  .classList.add("tr__slide__cursor"),
                  u.ZP.to(".tr__cursor", 0.3, {
                    width: "150px",
                    height: "150px",
                  });
              }),
              s.addEventListener("mouseup", function (e) {
                document
                  .querySelector(".tr__cursor")
                  .classList.add("tr__slide__cursor"),
                  u.ZP.to(".tr__cursor", 0.3, {
                    width: "120px",
                    height: "120px",
                  });
              }),
              s.addEventListener("mouseleave", function (e) {
                document
                  .querySelector(".tr__cursor")
                  .classList.remove("tr__slide__cursor"),
                  u.ZP.to(".tr__cursor", 0.3, {
                    width: "20px",
                    height: "20px",
                  });
              }),
              document
                .querySelectorAll(".tr__join__Inkfinity Tech__available__position")
                .forEach((e, t) => {
                  e.addEventListener("mouseenter", function (t) {
                    let r = e.querySelector(".line"),
                      n = e.previousSibling.querySelector(".line");
                    u.ZP.to(r, { width: "75%", marginLeft: "0" }),
                      u.ZP.to(n, { width: "75%", marginLeft: "0" });
                  }),
                    e.addEventListener("mouseleave", function (t) {
                      let r = e.querySelector(".line"),
                        n = e.previousSibling.querySelector(".line");
                      u.ZP.to(r, { width: "100%", marginLeft: "0" }),
                        u.ZP.to(n, { width: "100%", marginLeft: "0" });
                    });
                });
          }, []),
          (0, s.useEffect)(() => {
            let e = u.ZP.matchMedia(),
              t = document.querySelector(".tr__circular__talknow");
            u.ZP.set(t, { autoAlpha: 0, xPercent: 100 }),
              u.ZP.to(t, {
                xPercent: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: "power4",
                delay: 0.5,
              }),
              t.addEventListener("mouseenter", function (e) {
                u.ZP.to(".tr__cursor", 0.3, {
                  width: "150px",
                  height: "150px",
                  filter: "blur(10px)",
                });
              }),
              t.addEventListener("mouseleave", function (e) {
                u.ZP.to(".tr__cursor", 0.3, {
                  width: "20px",
                  height: "20px",
                  filter: "blur(0px)",
                });
              }),
              e.add("(min-width: 1024px)", () => {
                u.ZP.utils.toArray(".tr__join__Inkfinity Tech").forEach((e, t) => {
                  let r = e.querySelector(".tr__parallax__animation");
                  r &&
                    u.ZP.to(r, {
                      y: -(((20 * r.clientHeight) / 100) * 1),
                      "will-change": "transform",
                      duration: 1,
                      ease: "none",
                      immediateRender: !1,
                      scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        markers: !1,
                        scrub: 1,
                      },
                    });
                });
              });
          }, [r]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(a(), {
                children: [
                  (0, n.jsx)("meta", { charSet: "utf-8" }),
                  (0, n.jsx)("meta", {
                    httpEquiv: "X-UA-Compatible",
                    content: "IE=edge",
                  }),
                  (0, n.jsx)("title", { children: "Inkfinity Tech | Team" }),
                  (0, n.jsx)(
                    "meta",
                    {
                      name: "description",
                      content:
                        "Inkfinity Tech\xae - Experience the Brilliance of Our Creative, Innovative, and Experienced Web and Software Development Team.",
                    },
                    "desc"
                  ),
                  (0, n.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:url",
                    content: "https://Inkfinity Tech.com/",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:title",
                    content: "Inkfinity Tech | Team",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:description",
                    content:
                      "Inkfinity Tech\xae - Experience the Brilliance of Our Creative, Innovative, and Experienced Web and Software Development Team.",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:image",
                    content: A.ogLogo.src,
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:site_name",
                    content: "Inkfinity Tech\xae",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:copyright",
                    content: "hello@Inkfinity Tech.com",
                  }),
                  (0, n.jsx)("meta", {
                    name: "twitter:site",
                    content: "@Inkfinity Tech_design",
                  }),
                  (0, n.jsx)("meta", {
                    name: "HandheldFriendly",
                    content: "True",
                  }),
                  (0, n.jsx)("meta", {
                    name: "theme-color",
                    content: "#000000",
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "57x57",
                    href: A.ogIcon57.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "60x60",
                    href: A.ogIcon60.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "72x72",
                    href: A.ogIcon72.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "76x76",
                    href: A.ogIcon76.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: A.ogIcon114.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "120x120",
                    href: A.ogIcon120.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "144x144",
                    href: A.ogIcon144.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "152x152",
                    href: A.ogIcon152.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: A.ogIcon180.src,
                  }),
                ],
              }),
              (0, n.jsxs)(w.Z, {
                children: [
                  A.bannerData.teamBanner.title &&
                    (0, n.jsx)(f.Z, {
                      type: "h1",
                      customClass: "small",
                      children: A.bannerData.teamBanner.title.map((e, t) =>
                        (0, n.jsx)(
                          s.Fragment,
                          {
                            children: (0, n.jsx)("span", { children: e.data }),
                          },
                          t
                        )
                      ),
                    }),
                  A.bannerData.teamBanner.content &&
                    (0, n.jsx)("p", {
                      className: "mt-4 tr__banner__fadeUp",
                      children: A.bannerData.teamBanner.content.map((e, t) =>
                        (0, n.jsx)(
                          s.Fragment,
                          {
                            children: (0, n.jsx)("span", { children: e.data }),
                          },
                          t
                        )
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className:
                      "tr__banner_bottom justify-center tr__banner__fadeUp",
                    children: (0, n.jsx)(_(), {
                      href: "",
                      "aria-label": "Inkfinity Tech",
                      className: "tr__cursor__hoverable tr__magnetic",
                      onClick: (e) => i(e, ".tr__founder"),
                      children: (0, n.jsx)(
                        l(),
                        {
                          src: "true" == t ? Z.Z : N.Z,
                          alt: "Inkfinity Tech",
                          width: "24",
                          height: "24",
                          className: "".concat(
                            "true" == t ? "opacity-40" : "opacity-60"
                          ),
                        },
                        t
                      ),
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("section", {
                className: "tr__section tr__founder pb-24",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "tr__container tr__founder__container lg:max-w-3xl 2xl:max-w-6xl",
                    children: (0, n.jsx)(f.Z, {
                      type: "h2",
                      content:
                        'Our work excels, driven by our <br class="hidden sm:block" />wild and creative team, delivering <br class="hidden sm:block" />the highest quality.',
                      customClass: "tr__heading__animation mb-20",
                    }),
                  }),
                  (0, n.jsx)(y.Z, {
                    image1URL: P,
                    text1: "born with creative instincts.",
                    image2URL: P,
                    text2: "born with creative instincts.",
                  }),
                ],
              }),
              (0, n.jsxs)("section", {
                className: "tr__section tr__team",
                children: [
                  (0, n.jsxs)("div", {
                    className: "tr__container tr__team__container",
                    children: [
                      (0, n.jsx)(f.Z, {
                        type: "h2",
                        content:
                          "In the heart of our <br />wild team, we find <br />our strength.",
                        customClass:
                          "tr__heading__animation w-full lg:w-1/2 mb-10",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "w-full max-w-none lg:max-w-[580px] 2xl:max-w-[600px] ml-auto mb-24",
                        children: (0, n.jsx)("p", {
                          className: "tr__fadeUp",
                          children:
                            "In our creative jungle, designers, thinkers, strategists unite like a lion's roar, crafting vibrant projects resonating with the wild symphony of innovation.",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "tr__team__members",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "tr__team__members__slider__nav hidden",
                        children: [
                          (0, n.jsxs)("svg", {
                            id: "tr__team__members__slider__leftArrow",
                            className:
                              "tr__team__members__slider__arrow tr__team__members__slider__prev",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, n.jsx)("circle", {
                                cx: "16",
                                cy: "16",
                                r: "16.5",
                                transform:
                                  "matrix(4.37114e-08 -1 -1 -4.37114e-08 33 33)",
                              }),
                              (0, n.jsx)("path", {
                                d: "M15.6665 11.9419L10.6082 17.0003L15.6665 22.0586",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                              (0, n.jsx)("path", {
                                d: "M22.3335 17L11.0001 17",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("svg", {
                            id: "tr__team__members__slider__rightArrow",
                            className:
                              "tr__team__members__slider__arrow tr__team__members__slider__next",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, n.jsx)("circle", {
                                cx: "17",
                                cy: "17",
                                r: "16.5",
                                transform: "rotate(-90 17 17)",
                              }),
                              (0, n.jsx)("path", {
                                d: "M18.3335 11.9419L23.3918 17.0003L18.3335 22.0586",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                              (0, n.jsx)("path", {
                                d: "M11.6665 17L22.9999 17",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "tr__team__members__slider__wrapper",
                        children:
                          A.teamData &&
                          A.teamData.map((e, t) =>
                            (0, n.jsx)(
                              s.Fragment,
                              {
                                children: (0, n.jsx)("div", {
                                  className:
                                    "tr__team__member tr__team__member__slide",
                                  children: (0, n.jsxs)("div", {
                                    className:
                                      "tr__team__member tr__team__member__slide__wrapper",
                                    children: [
                                      (0, n.jsx)(l(), {
                                        src: e.photo,
                                        width: "100",
                                        height: "100",
                                        alt: "",
                                        style: {
                                          width: "100%",
                                          height: "auto",
                                        },
                                        className: "",
                                        "data-speed": "",
                                      }),
                                      (0, n.jsx)("h5", { children: e.name }),
                                      (0, n.jsx)("p", { children: e.position }),
                                      e.contact &&
                                        e.contact.map((e, t) =>
                                          (0, n.jsx)(
                                            s.Fragment,
                                            {
                                              children: (0, n.jsx)(
                                                _(),
                                                {
                                                  href: e.url,
                                                  "aria-label": e.name,
                                                  className:
                                                    "w-8 h-8 inline-block mt-2",
                                                  target: "_blank",
                                                  children: (0, n.jsx)(l(), {
                                                    src: e.icon,
                                                    width: "32",
                                                    height: "32",
                                                    alt: "Inkfinity Tech",
                                                  }),
                                                },
                                                t
                                              ),
                                            },
                                            t
                                          )
                                        ),
                                    ],
                                  }),
                                }),
                              },
                              t
                            )
                          ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("section", {
                className: "tr__section tr__join__Inkfinity Tech",
                children: [
                  (0, n.jsx)("div", {
                    className: "tr__container tr__join__Inkfinity Tech__container",
                    children: (0, n.jsx)(b.Z, {
                      sectionTitle: "wanna <br />join <br />Inkfinity Tech?",
                      sectionDesc:
                        'We are always looking for the best <br class="hidden sm:block" />talent in the digital jungle.',
                      sectionDescCustomClass: "tr__heading__animation",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "tr__join__static__image",
                    children: (0, n.jsx)(v.Z, {
                      imageURL: k,
                      customClass: "tr__parallax__animation",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "tr__container tr__join__Inkfinity Tech__available__positions",
                    children: [
                      (0, n.jsx)(f.Z, {
                        type: "h2",
                        content: "Do you aspire to <br />be like a lion?",
                        customClass: "tr__heading__animation mb-4",
                      }),
                      (0, n.jsxs)("p", {
                        className: "tr__fadeUp",
                        children: [
                          "Like a powerful lion joining our pack, every fresh ",
                          (0, n.jsx)("br", {}),
                          "team member strengthens our innovative and ",
                          (0, n.jsx)("br", {}),
                          "diligent wilderness.",
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "tr__fadeUp h-0 mt-16 mb-16 sm:mt-8 sm:mb-8",
                        children: (0, n.jsx)(m.Z, { customClass: "" }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "tr__join__Inkfinity Tech__available__position",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "tr__fadeUp w-full flex justify-between items-center flex-wrap",
                            children: [
                              (0, n.jsx)(f.Z, {
                                type: "h4",
                                content: "Web/ Mobile designers",
                                customClass: "w-full lg:w-auto",
                              }),
                              (0, n.jsx)(d.Z, {
                                buttonType: "link",
                                buttonTitle: "Apply now!",
                                buttonAction:
                                  "https://forms.gle/hTrkwhhaYP4GUwPJ7",
                                buttonCustomClass: "",
                                buttonTarget: "_blank",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "tr__fadeUp h-0 w-full mt-16 sm:mt-8",
                            children: (0, n.jsx)(m.Z, { customClass: "" }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "tr__join__Inkfinity Tech__available__position",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "tr__fadeUp w-full flex justify-between items-center flex-wrap",
                            children: [
                              (0, n.jsx)(f.Z, {
                                type: "h4",
                                content: "Front-end developers",
                                customClass: "w-full lg:w-auto",
                              }),
                              (0, n.jsx)(d.Z, {
                                buttonType: "link",
                                buttonTitle: "Apply now!",
                                buttonAction:
                                  "https://forms.gle/SaLSfqNXsD5ARiFG6",
                                buttonCustomClass: "",
                                buttonTarget: "_blank",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "tr__fadeUp h-0 w-full mt-16 sm:mt-8",
                            children: (0, n.jsx)(m.Z, { customClass: "" }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "tr__join__Inkfinity Tech__available__position",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "tr__fadeUp w-full flex justify-between items-center flex-wrap",
                            children: [
                              (0, n.jsx)(f.Z, {
                                type: "h4",
                                content: "Back-end developers",
                                customClass: "w-full lg:w-auto",
                              }),
                              (0, n.jsx)(d.Z, {
                                buttonType: "link",
                                buttonTitle: "Apply now!",
                                buttonAction:
                                  "https://forms.gle/TtRZXRjtRAGow2PaA",
                                buttonCustomClass: "",
                                buttonTarget: "_blank",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "tr__fadeUp h-0 w-full mt-16 sm:mt-8",
                            children: (0, n.jsx)(m.Z, { customClass: "" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("section", {
                className: "tr__section tr__jungle",
                children: [
                  (0, n.jsx)(f.Z, {
                    type: "h2",
                    content: "Our digital jungle!",
                    customClass: "tr__heading__animation mb-20",
                  }),
                  (0, n.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, n.jsx)("div", {
                      className: "tr__jungle__row",
                      children: (0, n.jsx)("div", {
                        className: "tr__jungle__wrapper",
                        children: (0, n.jsx)("div", {
                          className: "tr__marquee__item",
                          children:
                            A.digitalJungleData &&
                            A.digitalJungleData
                              .filter((e) => "row1" == e.row)
                              .map((e, t) =>
                                (0, n.jsx)(
                                  s.Fragment,
                                  {
                                    children: (0, n.jsx)("div", {
                                      className: "tr__jungle__item",
                                      children: (0, n.jsx)(l(), {
                                        src: e.logo,
                                        alt: "Inkfinity Tech",
                                        width: "200",
                                        height: "100",
                                      }),
                                    }),
                                  },
                                  t
                                )
                              ),
                        }),
                      }),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, n.jsx)("div", {
                      className: "tr__jungle__row",
                      children: (0, n.jsx)("div", {
                        className: "tr__jungle__wrapper",
                        children: (0, n.jsx)("div", {
                          className: "tr__marquee__item__rev",
                          children:
                            A.digitalJungleData &&
                            A.digitalJungleData
                              .filter((e) => "row2" == e.row)
                              .map((e, t) =>
                                (0, n.jsx)(
                                  s.Fragment,
                                  {
                                    children: (0, n.jsx)("div", {
                                      className: "tr__jungle__item",
                                      children: (0, n.jsx)(l(), {
                                        src: e.logo,
                                        alt: "Inkfinity Tech",
                                        width: "200",
                                        height: "100",
                                      }),
                                    }),
                                  },
                                  t
                                )
                              ),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      u.ZP.registerPlugin(j(), p(), x.InertiaPlugin);
    },
  },
  function (e) {
    e.O(0, [732, 774, 888, 179], function () {
      return e((e.s = 7015));
    }),
      (_N_E = e.O());
  },
]);
