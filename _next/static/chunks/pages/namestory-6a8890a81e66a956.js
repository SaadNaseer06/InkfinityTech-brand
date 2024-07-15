(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    6927: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/namestory",
        function () {
          return a(4261);
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
    7423: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(5893);
      function r(e) {
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
      a(7294);
    },
    4261: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        });
      var n = a(5893),
        r = a(7294),
        s = a(9008),
        i = a.n(s),
        o = a(5675),
        c = a.n(o),
        l = a(1664),
        _ = a.n(l),
        h = a(6874),
        d = a(990),
        m = a(6546),
        p = a.n(m),
        g = a(1491),
        A = a(4712),
        u = a(7423),
        x = a(8365),
        w = a(437),
        b = a(8417),
        f = a(4814),
        j = {
          src: "http://localhost/brand/_next/static/media/brahma.9e76bbd3.webp",
          height: 1100,
          width: 780,
          blurDataURL:
            "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoGAAgAAkA4JaACdADze7hYAP5OICwVoKs57+pXN0Ur7pbP1X1mFsrMbJ7Yn4YZbRkf9dgGnOwpTha/QfFxVHrBr8wS3ycgAAA=",
          blurWidth: 6,
          blurHeight: 8,
        },
        N = {
          src: "http://localhost/brand/_next/static/media/vishnu.e3f8e5c7.webp",
          height: 1100,
          width: 780,
          blurDataURL:
            "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoGAAgAAkA4JZQCdADzHOYAAPz/w6AUo1urhGPkIkFJqU4UQ7dg0hW+kO6mmKypDMtujsP/IPDtgJQAAAA=",
          blurWidth: 6,
          blurHeight: 8,
        },
        y = {
          src: "http://localhost/brand/_next/static/media/mahesh.bd6e7044.webp",
          height: 1100,
          width: 780,
          blurDataURL:
            "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACwAQCdASoGAAgAAkA4JQBOgB5vdzEAAP64RflUzaJgW/a36dGyod0DFovMme37zycqHYq3Ku7c0cjcTC0fUqB8k8Oi+UCuVow6+SXEcduB68AA",
          blurWidth: 6,
          blurHeight: 8,
        },
        v = {
          src: "http://localhost/brand/_next/static/media/lion.082ab744.webp",
          height: 848,
          width: 1240,
          blurDataURL:
            "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAKAEd8GwAADhoMXnxmDBYNEilohIBYFitwWGh/VmYXNz0AKzMkAABWUDggIgAAAFABAJ0BKggABQACQDglAE6AKAAA/vp08/r4a7QA+08NwAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        k = {
          src: "http://localhost/brand/_next/static/media/narasimha.20df08a8.webp",
          height: 1600,
          width: 2880,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAQAAkA4JYwCdAEf/tJogAD++6E7nFXbDilK9bXEgrylvCZjO4LbE8FffIpdc8wAAA==",
          blurWidth: 8,
          blurHeight: 4,
        };
      function I(e) {
        let {
          darkMode: t,
          isRendered: a,
          scrollToSection: s,
          dropDownValue: o,
          createSelect: l,
        } = e;
        return (
          (0, g.L)(() => {
            let e = d.ZP.context(() => {
              d.ZP.matchMedia().add("(min-width: 1024px)", () => {
                d.ZP.utils.toArray(".tr__trimurti").forEach((e, t) => {
                  e.querySelectorAll(".tr__parallax__animation").forEach(
                    (t, a) => {
                      d.ZP.from(t, {
                        y: 0.5 * window.innerHeight * a,
                        duration: 1.5,
                        scrollTrigger: {
                          trigger: e,
                          start: "top bottom",
                          markers: !1,
                          scrub: 1,
                        },
                      });
                    }
                  );
                }),
                  d.ZP.utils
                    .toArray(".tr__om__namo__narayana")
                    .forEach((e, t) => {
                      e.querySelectorAll(".tr__parallax__animation").forEach(
                        (t, a) => {
                          d.ZP.from(t, {
                            y: 0.5 * window.innerHeight,
                            duration: 1,
                            scrollTrigger: {
                              trigger: e,
                              markers: !1,
                              scrub: 1,
                            },
                          });
                        }
                      );
                    });
              });
            });
            return () => e.revert();
          }),
          (0, r.useEffect)(() => {
            let e = document.querySelector(".tr__circular__talknow");
            d.ZP.set(e, { autoAlpha: 0, xPercent: 100 }),
              d.ZP.to(e, {
                xPercent: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: "power4",
                delay: 0.5,
              }),
              e.addEventListener("mouseenter", function (e) {
                d.ZP.to(".tr__cursor", 0.3, {
                  width: "150px",
                  height: "150px",
                  filter: "blur(10px)",
                });
              }),
              e.addEventListener("mouseleave", function (e) {
                d.ZP.to(".tr__cursor", 0.3, {
                  width: "20px",
                  height: "20px",
                  filter: "blur(0px)",
                });
              });
          }, [a]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(i(), {
                children: [
                  (0, n.jsx)("meta", { charSet: "utf-8" }),
                  (0, n.jsx)("meta", {
                    httpEquiv: "X-UA-Compatible",
                    content: "IE=edge",
                  }),
                  (0, n.jsx)("title", { children: "Inkfinity Tech | Name Story" }),
                  (0, n.jsx)(
                    "meta",
                    {
                      name: "description",
                      content:
                        "Inkfinity Tech\xae - The Insightful Tale Behind Our Branding Name and Logo",
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
                    content: "Inkfinity Tech | Name Story",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:description",
                    content:
                      "Inkfinity Tech\xae - The Insightful Tale Behind Our Branding Name and Logo",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:image",
                    content: w.ogLogo.src,
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:site_name",
                    content: "Inkfinity Tech\xae",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:copyright",
                    content: "hello@inkfinitytech.com",
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
                    href: w.ogIcon57.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "60x60",
                    href: w.ogIcon60.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "72x72",
                    href: w.ogIcon72.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "76x76",
                    href: w.ogIcon76.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "114x114",
                    href: w.ogIcon114.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "120x120",
                    href: w.ogIcon120.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "144x144",
                    href: w.ogIcon144.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "152x152",
                    href: w.ogIcon152.src,
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: w.ogIcon180.src,
                  }),
                ],
              }),
              (0, n.jsxs)(u.Z, {
                children: [
                  w.bannerData.nameBanner.title &&
                    (0, n.jsx)(A.Z, {
                      type: "h1",
                      customClass: "small",
                      children: w.bannerData.nameBanner.title.map((e, t) =>
                        (0, n.jsx)(
                          r.Fragment,
                          {
                            children: (0, n.jsx)("span", { children: e.data }),
                          },
                          t
                        )
                      ),
                    }),
                  w.bannerData.nameBanner.content &&
                    (0, n.jsx)("p", {
                      className: "mt-4",
                      children: w.bannerData.nameBanner.content.map((e, t) =>
                        (0, n.jsx)(
                          r.Fragment,
                          {
                            children: (0, n.jsx)("span", { children: e.data }),
                          },
                          t
                        )
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: "tr__banner_bottom justify-center",
                    children: (0, n.jsx)(_(), {
                      href: "",
                      "aria-label": "Inkfinity Tech",
                      className: "tr__cursor__hoverable tr__magnetic",
                      onClick: (e) => s(e, ".tr__contact__forms"),
                      children: (0, n.jsx)(
                        c(),
                        {
                          src: "true" == t ? b.Z : f.Z,
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
              (0, n.jsx)("section", {
                className: "tr__section tr__trimurti",
                children: (0, n.jsxs)("div", {
                  className: "tr__container tr__trimurti__content",
                  children: [
                    (0, n.jsx)(A.Z, {
                      type: "h2",
                      content:
                        'Combining the power of three <br class="hidden sm:block" />roars, echoing the strength of <br class="hidden sm:block" />Trimurti.</span>',
                      customClass: "tr__heading__animation",
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex justify-between items-center space-x-8",
                      children: [
                        (0, n.jsx)("div", {
                          className: "w-4/12 tr__parallax__animation",
                          children: (0, n.jsx)(c(), {
                            src: j,
                            width: j.width,
                            height: j.height,
                            alt: "Brahma",
                            className: "rounded-full",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "w-4/12 tr__parallax__animation",
                          children: (0, n.jsx)(c(), {
                            src: N,
                            width: N.width,
                            height: N.height,
                            alt: "Vishnu",
                            className: "rounded-full",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "w-4/12 tr__parallax__animation",
                          children: (0, n.jsx)(c(), {
                            src: y,
                            width: y.width,
                            height: y.height,
                            alt: "Mahesh",
                            className: "rounded-full",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                className: "tr__section tr__namestory__page",
                children: (0, n.jsxs)("div", {
                  className: "tr__container tr__namestory__page__container",
                  children: [
                    (0, n.jsx)(A.Z, {
                      type: "h2",
                      content:
                        'In the name "TRI.ONN," TRI represents the number three (3), signifying the trio of Lord Brahma, Lord Vishnu, and Lord Mahesh — referred to as Trimurti, Tridev, or the Trinity in Hinduism.',
                      customClass: "tr__heading__animation mb-10",
                    }),
                    (0, n.jsxs)("div", {
                      className: "tr__namestory__page__wrapper",
                      children: [
                        (0, n.jsx)("div", {
                          className: "tr__namestory__page__wrapper__left",
                        }),
                        (0, n.jsxs)("div", {
                          className: "tr__namestory__page__wrapper__right",
                          children: [
                            (0, n.jsx)("p", {
                              className: "tr__fadeUp",
                              children:
                                'Additionally, my former company was named Trinity Web Tech in honor of it\'s name, and I retained "TRI" as a starting point.',
                            }),
                            (0, n.jsx)("p", {
                              className: "tr__fadeUp",
                              children:
                                'In Vedic times, it is said that saints used to chant the mantra "Om Namo Narayana," which holds deep significance. So, in Inkfinity Tech, "ONN" stands for "Om Namo Narayana."',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("section", {
                className: "tr__section tr__om__namo__narayana",
                children: [
                  (0, n.jsx)("div", {
                    className: "tr__container tr__om__namo__narayana__content",
                    children: (0, n.jsx)(h.Z, {
                      sectionTitle: "om<br />namo<br />narayana",
                      sectionDesc:
                        "<span>Now, let's delve into </span><span>Inkfinity Tech's symbol. </span>",
                      sectionDescCustomClass: "tr__heading__animation",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "tr__container",
                    children: (0, n.jsx)("div", {
                      className:
                        "tr__om__namo__narayana__symbol tr__parallax__animation",
                      children: (0, n.jsx)(c(), {
                        src: v,
                        width: v.width,
                        height: v.height,
                        alt: "Inkfinity Tech",
                        className: "max-w-[45vw]",
                      }),
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "tr__container tr__namestory__page__container text-left",
                    children: [
                      (0, n.jsx)(A.Z, {
                        type: "h2",
                        content:
                          'Within it, you will discover a three-headed lion. You may be wondering about the connection between a lion and the word "Inkfinity Tech".',
                        customClass: "tr__heading__animation mb-10",
                      }),
                      (0, n.jsxs)("div", {
                        className: "tr__namestory__page__wrapper",
                        children: [
                          (0, n.jsx)("div", {
                            className: "tr__namestory__page__wrapper__left",
                          }),
                          (0, n.jsx)("div", {
                            className: "tr__namestory__page__wrapper__right",
                            children: (0, n.jsx)("p", {
                              className: "tr__fadeUp",
                              children:
                                "According to Hindu mythology, Lord Vishnu is widely recognized as the preserver of the universe, and among his ten avatars, one is Lord Narasimha.",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("section", {
                className: "tr__section tr__narasimha",
                children: [
                  (0, n.jsx)(x.Z, {
                    image1URL: k,
                    text1: "lord narasimha",
                    image2URL: k,
                    text2: "lord narasimha",
                  }),
                  (0, n.jsxs)("div", {
                    className: "tr__container tr__narasimha__container mt-20",
                    children: [
                      (0, n.jsx)(A.Z, {
                        type: "h2",
                        content:
                          "Lord Narasimha possesses a human-like torso and lower body, along with a lion-like face and claws.",
                        customClass: "tr__heading__animation mb-10",
                      }),
                      (0, n.jsxs)("div", {
                        className: "tr__namestory__page__wrapper",
                        children: [
                          (0, n.jsx)("div", {
                            className: "tr__namestory__page__wrapper__left",
                          }),
                          (0, n.jsx)("div", {
                            className: "tr__namestory__page__wrapper__right",
                            children: (0, n.jsx)("p", {
                              className: "tr__fadeUp",
                              children:
                                'Lord Narasimha possesses a human-like torso and lower body, along with a lion-like face and claws. Therefore, I chose the lion as a symbol of divinity and strength for the logo. Since it\'s "TRI," the logo features a three-headed lion, resulting in a unique and meaningful mascot for the company.',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      d.ZP.registerPlugin(p());
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 6927));
    }),
      (_N_E = e.O());
  },
]);
