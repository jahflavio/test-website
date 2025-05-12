let lenis;
const initSmoothScrolling = () => {
    (lenis = new Lenis({ lerp: 0.1, smoothWheel: !0 })),
        lenis.on("scroll", () => ScrollTrigger.update()),
        gsap.ticker.add((e) => {
            lenis.raf(1e3 * e);
        }),
        gsap.ticker.lagSmoothing(0);
},
    setupLenisSmoothScrollLinks = () => {
        const e = document.querySelectorAll(".lenis-scroll-to");
        e.forEach((t) => {
            t.addEventListener("click", function (e) {
                e.preventDefault();
                e = t.getAttribute("href");
                e && lenis.scrollTo(e, { offset: -100, duration: 1.7, easing: (e) => 1 - Math.pow(1 - e, 3) });
            });
        });
    },
    DarkMode = {
        init() {
            (this.elements = { darkIcon: document.getElementById("theme-toggle-dark-icon"), lightIcon: document.getElementById("theme-toggle-light-icon"), toggleBtn: document.getElementById("theme-toggle") }),
                this.setInitialTheme(),
                this.bindEvents();
        },
        setInitialTheme() {
            "dark" === localStorage.getItem("color-theme") || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
                ? (this.elements.lightIcon?.classList.remove("hidden"), document.documentElement?.classList.add("dark"))
                : (this.elements.darkIcon?.classList.remove("hidden"), document.documentElement?.classList.remove("dark"));
        },
        bindEvents() {
            this.elements.toggleBtn && this.elements.toggleBtn.addEventListener("click", () => this.toggleTheme());
        },
        toggleTheme() {
            this.elements.darkIcon.classList.toggle("hidden"), this.elements.lightIcon.classList.toggle("hidden");
            var e = document.documentElement.classList.toggle("dark");
            localStorage.setItem("color-theme", e ? "dark" : "light");
        },
    },
    Animations = {
        initHeroGradient() {
            var e = document.getElementById("hero-gradient-wrapper"),
                t = document.getElementById("hero-gradient");
            e && t && (gsap.to(e, { scale: 0.6, repeat: -1, duration: 3, yoyo: !0, ease: Linear.easeNone }).play(), gsap.to(t, { repeat: -1, duration: 3, rotation: 360, ease: Linear.easeNone }).play());
        },
        initPointerAnimation() {
            const t = document.querySelector(".pointer");
            1023 <= window.innerWidth &&
                ["mousemove", "mouseenter"].forEach((e) => {
                    document.addEventListener(e, (e) => {
                        gsap.to(t, { duration: 0.8, left: e.clientX, top: e.clientY, ease: "expo.out" });
                    });
                });
        },
        initTextReveal() {
            const e = document.querySelectorAll(".reveal-text");
            e.forEach((e) => {
                var t = new SplitType(e, { types: "words" });
                gsap.from(t.words, { scrollTrigger: { trigger: e, start: "top 34%", end: "top -10%", scrub: !0, pin: ".about", pinSpacing: !0 }, opacity: 0.2, stagger: 0.1, duration: 1, ease: "power2.out" });
            });
        },
        initTextReveal2() {
            const e = document.querySelectorAll(".reveal-text-2");
            e.forEach((e) => {
                var t = new SplitType(e, { types: "words" });
                gsap.from(t.words, { scrollTrigger: { trigger: e, start: "top 90%", end: "top 40%", scrub: !0 }, opacity: 0.2, stagger: 0.1, duration: 1, ease: "power2.out" });
            });
        },
        initHorizontalScroll() {
            const t = document.querySelector(".service-wrapper");
            if (t) {
                const o = () => {
                    var e = t.parentElement.offsetWidth;
                    return -(t.scrollWidth - e);
                };
                var e = gsap.to(t, { x: o, duration: 3, ease: "none" });
                ScrollTrigger.create({ trigger: ".service-section", start: "top top", end: () => `+=${Math.abs(o())}`, pin: !0, animation: e, scrub: 1, invalidateOnRefresh: !0 }),
                    window.addEventListener("resize", () => {
                        ScrollTrigger.refresh();
                    });
            }
        },
        initCtaImageReveal() {
            var e = document.getElementById("cta-img");
            e && gsap.from(e, { scale: 0, rotation: -45, duration: 2.1, ease: "elastic.out(1.4, 1.2)", scrollTrigger: { trigger: e, start: "top 70%", end: "top 30%", scrub: !1 } });
        },
        initImageHorizontalScroll() {
            const e = document.getElementById("extra-large-image-container");
            e &&
                (ScrollTrigger.addEventListener("refreshInit", () => { }),
                    gsap.to(e, {
                        x: () => -(e.scrollWidth - document.documentElement.clientWidth),
                        ease: "none",
                        pin: !0,
                        scrollTrigger: { trigger: e, pin: !1, start: "top 90%", end: () => `+=${e.scrollWidth - document.documentElement.clientWidth}`, scrub: 1, invalidateOnRefresh: !1, anticipatePin: 1 },
                    }),
                    window.addEventListener("resize", () => {
                        ScrollTrigger.refresh();
                    }));
        },
        initSectionTitles() {
            const e = document.querySelectorAll(".text-appear");
            e.forEach((t) => {
                const e = new SplitType(t, { types: "lines" });
                e.lines.forEach((e) => {
                    e = new SplitType(e, { types: "words" });
                    gsap.from(e.words, {
                        scrollTrigger: {
                            trigger: t,
                            start: "top 80%",
                            end: "top 50%",
                            scrub: false
                        },
                        y: 80,
                        rotation: 10,
                        stagger: 0.01,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                });
            });
        },
        initSectionTitles2() {
            const e = document.querySelectorAll(".text-appear-2");
            e.forEach((t) => {
                const e = new SplitType(t, { types: "lines" });
                e.lines.forEach((e) => {
                    e = new SplitType(e, { types: "words" });
                    gsap.from(e.words, { scrollTrigger: { trigger: t, start: "top 90%", end: "top 30%", scrub: !1 }, y: 120, rotation: 21, stagger: 0.02, duration: 0.7, ease: "power2.out" });
                });
            });
        },
        initRevealElements() {
            const e = document.querySelectorAll(".reveal-me");
            e.forEach((e) => {
                gsap.from(e, { scrollTrigger: { trigger: e, start: "top 85%", end: "top 50%", scrub: !1 }, opacity: 0, y: 95, rotation: 2, filter: "blur(10px)", duration: 0.9, stagger: 0.1, ease: "power2.out" });
            });
        },
        initRevealElementsV2() {
            const e = document.querySelectorAll(".reveal-me-2");
            e.forEach((e) => {
                gsap.from(e, { scrollTrigger: { trigger: e, start: "top 95%", end: "top 50%", scrub: !1 }, opacity: 0, y: 95, rotation: 2, filter: "blur(10px)", duration: 0.9, stagger: 0.1, ease: "power2.out" });
            });
        },
        initZoomAnimation() {
            var e = document.querySelector(".zoom-image");
            e && gsap.to(e, { scale: 3.2, ease: "expoScale", scrollTrigger: { trigger: e, start: "top 20%", end: "top -30%", pin: !0, scrub: 1 } });
        },
        initVideoAnimation() {
            var e = document.querySelector(".video-wrapper");
            e && gsap.to(e, { scale: 1, scrollTrigger: { trigger: ".video-parents", start: "top 80%", end: "top 0%", scrub: 1 } });
        },
        initScaleSmallAnimation() {
            var e = document.querySelector(".scale-small-img");
            e && gsap.to(e, { scale: 0.8, scrollTrigger: { trigger: e, start: "top 50%", end: "top 0%", scrub: 1, ease: "power4.inOut" } });
        },
        initScaleSmallAnimation2() {
            var e = document.querySelector(".scale-hero-img");
            e && gsap.to(e, { scale: 0.94, duration: 0.8, scrollTrigger: { trigger: e, start: "top 7%", end: "top 0%", scrub: 1, ease: "power4.inOut" } });
        },
        initBlogCardScaleAnimation() {
            const t = document.querySelectorAll(".blog-card");
            0 < t.length && t[0].classList.add("active-card"),
                t.forEach((e) => {
                    e.addEventListener("mouseenter", function () {
                        t.forEach((e) => e.classList.remove("active-card")), this.classList.add("active-card");
                    });
                });
        },
        initAboutImageScaleAnimation() {
            const t = document.querySelectorAll(".about-image");
            0 < t.length && t[0].classList.add("about-active-image"),
                t.forEach((e) => {
                    e.addEventListener("mouseenter", function () {
                        t.forEach((e) => e.classList.remove("about-active-image")), this.classList.add("about-active-image");
                    });
                });
        },
        initRandomImageAnimation() {
            const e = document.getElementById("hero-button"),
                t = document.querySelectorAll(".decorative-image"),
                i = ["/images/home-4/random-1.png", "/images/home-4/random-2.png", "/images/home-4/random-3.png", "/images/home-4/random-4.png", "/images/home-4/random-5.png", "/images/home-4/random-6.png"],
                a = [
                    { x: "-50%", y: "-8%" },
                    { x: "50%", y: "-8%" },
                    { x: "0%", y: "-8%" },
                    { x: "0%", y: "-8%" },
                    { x: "-50%", y: "-8%" },
                    { x: "0%", y: "-8%" },
                ];
            e &&
                t &&
                (e.addEventListener("mouseenter", () => {
                    t.forEach((e, t) => {
                        const o = i[Math.floor(Math.random() * i.length)],
                            n = a[t % a.length];
                        gsap.to(e, {
                            duration: 0.7,
                            x: n.x,
                            y: n.y,
                            opacity: 0,
                            onComplete: () => {
                                (e.src = o), gsap.set(e, { x: n.x, y: n.y, opacity: 0, scale: 0 }), gsap.to(e, { duration: 0.7, opacity: 1, scale: 1 });
                            },
                        });
                    });
                }),
                    e.addEventListener("mouseleave", () => {
                        t.forEach((e, t) => {
                            t = a[t % a.length];
                            gsap.to(e, {
                                duration: 0.7,
                                x: t.x,
                                y: t.y,
                                opacity: 0,
                                onComplete: () => {
                                    (e.src = e.dataset.originalSrc || e.src), gsap.set(e, { x: "0%", y: "0%", opacity: 0, scale: 0 }), gsap.to(e, { duration: 0.7, opacity: 1, scale: 1 });
                                },
                            });
                        });
                    }),
                    t.forEach((e) => {
                        e.dataset.originalSrc = e.src;
                    }));
        },
        careerImageGalleryAnimation() {
            var e = document.getElementById("career-image-1"),
                t = document.getElementById("career-image-2"),
                o = document.getElementById("career-image-3"),
                n = document.getElementById("career-image-4");
            if (e && t && o && n) {
                const i = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 80%", end: "bottom 20%", toggleActions: "play none none none" } });
                i.from(e, { duration: 0.8, x: -100, opacity: 0 }).from(t, { duration: 0.8, x: 100, opacity: 0 }, "-=0.3").from(o, { duration: 0.8, y: 100, opacity: 0 }, "-=0.3").from(n, { duration: 0.8, y: -100, opacity: 0 }, "-=0.3");
            }
        },
        startHeroImageAnimation() {
            var e = document.getElementById("hero-1"),
                t = document.getElementById("hero-2"),
                o = document.getElementById("hero-3"),
                n = document.getElementById("hero-4");
            if (e && t && o && n) {
                const i = gsap.timeline({ scrollTrigger: { trigger: e, start: "top 80%", end: "bottom 20%", toggleActions: "play none none none" } });
                i.from(e, { duration: 0.8, x: -300, opacity: 0 }).from(t, { duration: 0.8, x: 100, opacity: 0 }, "-=0.3").from(o, { duration: 0.8, y: 100, opacity: 0 }, "-=0.3").from(n, { duration: 0.8, y: -100, opacity: 0 }, "-=0.3");
            }
        },
        initHeroImagesAnimationV2() {
            const e = document.getElementById("hero-image-1"),
                t = document.getElementById("hero-image-2"),
                o = document.getElementById("hero-image-3"),
                n = document.getElementById("hero-button-02");

            if (n && e && t && o) {
                // Configuramos el estado inicial de las imágenes (ocultas)
                gsap.set(e, { x: -320, opacity: 0, rotate: -20 });
                gsap.set(t, { x: 280, opacity: 0, rotate: 20 });
                gsap.set(o, { scale: 0, opacity: 0, rotate: -17 });

                // Evento cuando el mouse entra al botón
                n.addEventListener("mouseenter", () => {
                    gsap.to(e, { duration: 0.5, x: 0, opacity: 1, rotate: 0, ease: "power2.out" });
                    gsap.to(t, { duration: 0.5, x: 0, opacity: 1, rotate: 0, ease: "power2.out" });
                    gsap.to(o, { duration: 0.5, scale: 1, opacity: 1, rotate: 0, ease: "power2.out" });
                });

                // Evento cuando el mouse sale del botón
                n.addEventListener("mouseleave", () => {
                    gsap.to(e, { duration: 0.7, x: -320, opacity: 0, rotate: -20, ease: "power2.out" });
                    gsap.to(t, { duration: 0.7, x: 280, opacity: 0, rotate: 20, ease: "power2.out" });
                    gsap.to(o, { duration: 0.6, scale: 0, opacity: 0, rotate: -17, ease: "power2.out" });
                });
            }
        },
        initTableHoverAnimation() {
            const n = document.querySelector("#preview"),
                o = document.querySelector("#preview-img"),
                e = document.querySelectorAll("#projects .row");
            e.forEach((e) => {
                const t = e.getAttribute("data-img");
                e.addEventListener("mouseenter", () => {
                    (o.src = t), gsap.to(n, { duration: 0.3, scale: 1, rotate: 15, ease: "power2.out" });
                }),
                    e.addEventListener("mousemove", (e) => {
                        var t = n.offsetWidth / 2,
                            o = n.offsetHeight / 2;
                        (n.style.left = `${e.pageX - t}px`), (n.style.top = `${e.pageY - o}px`);
                    }),
                    e.addEventListener("mouseleave", () => {
                        gsap.to(n, { duration: 0.3, scale: 0, rotate: -15, ease: "power2.out" });
                    });
            });
        },
        initSocialProofSvgAnimation() {
            TweenMax.to("#master", 40, { rotation: 360, svgOrigin: "326 326", ease: Linear.easeNone, repeat: -1 }), TweenMax.to("#master > g", 40, { rotation: -360, transformOrigin: "center center", ease: Linear.easeNone, repeat: -1 });
        },
    },
    Components = {
        initCircleText(e = ".text", o = 10.3) {
            const t = document.querySelector(e);
            if (t) {
                const n = (e, t) => `<span style="transform:rotate(${t * o}deg)">${e}</span>`;
                requestAnimationFrame(() => {
                    t.innerHTML = Array.from(t.textContent.trim()).map(n).join("");
                });
            }
        },
        initCircleTextV2(e = ".text-2", o = 10.3) {
            const t = document.querySelector(e);
            if (t) {
                const n = (e, t) => `<span style="transform:rotate(${t * o}deg)">${e}</span>`;
                requestAnimationFrame(() => {
                    t.innerHTML = Array.from(t.textContent.trim()).map(n).join("");
                });
            }
        },
        initScrollingMarquee() {
            const o = document.querySelector(".marquee-inner");
            let n = 0;
            if (o) {
                var i = o.innerHTML;
                o.innerHTML = i + i + i;
                const a = o.offsetWidth / 3,
                    r = gsap.to(".marquee-inner", {
                        x: 2 * -a,
                        duration: 60,
                        ease: "none",
                        repeat: -1,
                        onRepeat: () => {
                            gsap.set(".marquee-inner", { x: -a });
                        },
                    });
                let e;
                window.addEventListener("scroll", () => {
                    e && window.cancelAnimationFrame(e),
                        (e = window.requestAnimationFrame(() => {
                            var e = window.pageYOffset;
                            1 < Math.abs(e - n) && (r.timeScale(e > n ? 1 : -1), (n = e));
                        }));
                });
                let t;
                window.addEventListener("resize", () => {
                    t && window.cancelAnimationFrame(t),
                        (t = window.requestAnimationFrame(() => {
                            var e = o.offsetWidth / 3;
                            (r.vars.x = 2 * -e), gsap.set(".marquee-inner", { x: -e }), r.invalidate().restart();
                        }));
                });
            }
        },
        initFAQ() {
            const i = document.querySelectorAll(".accordion-item"),
                r = document.querySelectorAll(".accordion-itemV4"),
                a = document.querySelectorAll(".accordion-itemV5");
            i.forEach((o) => {
                const n = o.querySelector(".accordion-header");
                n.addEventListener("click", () => {
                    var e = n.classList.contains("open");
                    if (
                        (i.forEach((e) => {
                            const t = e.querySelector(".accordion-header"),
                                o = e.querySelector(".accordion-body");
                            t.classList.remove("open", "active"), (o.style.height = "0"), (e.style.borderColor = "transparent"), (e.style.paddingBottom = "0");
                        }),
                            !e)
                    ) {
                        n.classList.add("open", "active");
                        const t = o.querySelector(".accordion-body");
                        (t.style.height = `${t.scrollHeight}px`), (o.style.border = "1px solid black"), (o.style.paddingBottom = "40px");
                    }
                });
            });
            r.forEach((t, o) => {
                const n = t.querySelector(".accordion-headerV4"),
                    a = t.querySelector(".accordion-bodyV4");
                t.setAttribute("data-active", "false"),
                    n.addEventListener("click", () => {
                        var i,
                            e = n.classList.toggle("open");
                        (i = o),
                            r.forEach((e, t) => {
                                if (t !== i) {
                                    const o = e.querySelector(".accordion-headerV4"),
                                        n = e.querySelector(".accordion-bodyV4");
                                    o.classList.remove("open", "active"), (n.style.height = "0"), (n.style.marginBottom = "0"), e.setAttribute("data-active", "false");
                                }
                            }),
                            e
                                ? ((a.style.height = `${a.scrollHeight}px`), n.classList.add("active"), t.setAttribute("data-active", "true"), (a.style.marginBottom = "20px"))
                                : ((a.style.height = "0"), n.classList.remove("active"), t.setAttribute("data-active", "false"), (a.style.marginBottom = "0"));
                    });
            });
            a.forEach((o) => {
                const n = o.querySelector(".accordion-header");
                n.addEventListener("click", () => {
                    var e = n.classList.contains("open");
                    if (
                        (a.forEach((e) => {
                            const t = e.querySelector(".accordion-header"),
                                o = e.querySelector(".accordion-body");
                            t.classList.remove("open", "active"), (o.style.height = "0"), (e.style.paddingBottom = "0");
                        }),
                            !e)
                    ) {
                        n.classList.add("open", "active");
                        const t = o.querySelector(".accordion-body");
                        (t.style.height = `${t.scrollHeight}px`), (o.style.paddingBottom = "40px");
                    }
                });
            });
        },
        initCounter() {
            const t = document.querySelector("#counter");
            if (t) {
                const o = document.querySelectorAll(".counter"),
                    n = new IntersectionObserver(
                        (e) => {
                            var [e] = e;
                            e.isIntersecting &&
                                (o.forEach((n, e) => {
                                    const i = () => {
                                        var e = +n.getAttribute("data-value"),
                                            t = +n.innerText || 0,
                                            o = Math.ceil(e / 100);
                                        t < e && ((n.innerText = Math.min(t + o, e)), setTimeout(i, 20));
                                    };
                                    (n.innerText = "0"), i();
                                    const t = n.parentElement;
                                    (t.style.opacity = "0"),
                                        (t.style.transform = "translateY(20px)"),
                                        setTimeout(() => {
                                            (t.style.transition = "all 0.7s ease"), (t.style.opacity = "1"), (t.style.transform = "translateY(0)");
                                        }, 200 * e);
                                }),
                                    n.unobserve(t));
                        },
                        { threshold: 0.17 }
                    );
                n.observe(t);
            }
        },
        initTeam() {
            const e = document.querySelectorAll(".tab-member"),
                i = document.querySelector(".our-team-details");
            let a = !1;
            e.forEach((e) => {
                e.addEventListener("click", () => {
                    var n;
                    e.classList.contains("tab-active") ||
                        a ||
                        (document.querySelector(".tab-active")?.classList.remove("tab-active"),
                            e.classList.add("tab-active"),
                            (n = e),
                            a ||
                            ((a = !0),
                                i.classList.add("transitioning"),
                                setTimeout(() => {
                                    var e = n.querySelector("h3").textContent,
                                        t = n.querySelector("p").textContent,
                                        o = n.querySelector("img").src;
                                    (i.querySelector("h2").textContent = e),
                                        (i.querySelector("p").textContent = t),
                                        (i.querySelector("img").src = o),
                                        i.offsetWidth,
                                        i.classList.remove("transitioning"),
                                        setTimeout(() => {
                                            a = !1;
                                        }, 400);
                                }, 300)));
                });
            });
        },
        initPricingToggle() {
            const e = document.getElementById("toggle"),
                t = document.getElementById("monthlyOption"),
                o = document.getElementById("yearlyOption"),
                n = document.getElementById("monthlyCharge"),
                i = document.getElementById("yearlyCharge");
            let a = !1;
            e &&
                (t.classList.add("active"),
                    e.addEventListener("click", () => {
                        (a = !a), e.classList.toggle("yearly"), t.classList.toggle("active"), o.classList.toggle("active"), (n.style.display = a ? "none" : "block"), (i.style.display = a ? "block" : "none");
                    }));
        },
        initCtaSlider() {
            const e = document.querySelector(".cta-inline-slider");
            let t = 0;
            setInterval(function () {
                (t = (t + 1) % 3), e && (e.style.transform = `translateY(-${100 * t}px)`);
            }, 3e3);
        },
        initHeadroom() {
            var e = document.getElementById("header");
            if (e) {
                const t = new Headroom(e);
                t.init();
            }
        },
        initMarquees() {
            new InfiniteMarquee({
                element: ".marquee-container",
                speed: 50000,
                smoothEdges: !0,
                direction: "left",
                pauseOnHover: !0,
                gap: "30px",
                duplicateCount: 1,
                mobileSettings: { direction: "top", speed: 15e4 },
                on: { beforeInit: () => console.log("Not Yet Initialized"), afterInit: () => console.log("Initialized") },
            }),
                new InfiniteMarquee({
                    element: ".marquee-reverse-container",
                    speed: 50000,
                    smoothEdges: !0,
                    direction: "right",
                    pauseOnHover: !0,
                    gap: "30px",
                    duplicateCount: 1,
                    mobileSettings: { direction: "right", speed: 15e4 },
                    on: { beforeInit: () => console.log("Not Yet Initialized"), afterInit: () => console.log("Initialized") },
                });
        },
        initSkewMarquee() {
            var e = document.getElementById("skew-Marquee");
            e && gsap.from(e, { scrollTrigger: { trigger: e, start: "top 80%", end: "top 50%", scrub: !1 }, y: 200, skewX: "0deg", skewY: "0deg", rotation: 0, duration: 3 });
        },
        initVideoPlayPause() {
            document.querySelector(".custom-modal") ||
                document.body.insertAdjacentHTML(
                    "beforeend",
                    `
        <div class="custom-modal">
          <div class="modal-overlay"></div>
          <div class="modal-container">
            <div class="modal-content">
              <button class="modal-close">&times;</button>
              <div class="video-container"></div>
            </div>
          </div>
        </div>
      `
                );
            const o = document.querySelector(".custom-modal"),
                n = document.querySelector(".modal-overlay"),
                i = document.querySelector(".modal-content"),
                e = document.querySelector(".modal-close"),
                a = document.querySelector(".video-container");
            function t() {
                const e = gsap.timeline();
                e.to(i, { opacity: 0, scale: 0.8, y: 40, duration: 0.3, ease: "power2.in" }).to(n, { opacity: 0, duration: 0.3 }, "-=0.2"),
                    e.eventCallback("onComplete", () => {
                        (o.style.display = "none"), (document.body.style.overflow = "auto"), (a.innerHTML = "");
                    });
            }
            !(function () {
                const e = document.querySelectorAll(".video-section");
                e.forEach((e) => {
                    const t = e.querySelectorAll(".hero-video");
                    t.forEach((t) => {
                        t.addEventListener("click", (e) => {
                            e.preventDefault(),
                                (function (e) {
                                    (o.style.display = "block"), (document.body.style.overflow = "hidden"), gsap.set([n, i], { opacity: 0 }), gsap.set(i, { scale: 0.8, y: 40 });
                                    const t = gsap.timeline();
                                    t.to(n, { opacity: 1, duration: 0.3 }).to(i, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.1"),
                                        (e = e.split("v=")[1]),
                                        (a.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${e}?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `);
                                })(t.getAttribute("href"));
                        });
                    });
                });
            })(),
                e.addEventListener("click", t),
                n.addEventListener("click", t);
        },
        initHeroShowCaseVideo() {
            const e = document.getElementById("heroToggleShowCaseVideo"),
                t = document.getElementById("hero-show-case-video"),
                o = document.getElementById("play-icon"),
                n = document.getElementById("pause-icon");
            gsap.set(n, { scale: 0, opacity: 0 }),
                e &&
                e.addEventListener("click", function () {
                    t.paused
                        ? (t.play(),
                            gsap.to(o, { scale: 1.8, opacity: 0, duration: 0.9, ease: "power2.out" }),
                            gsap.to(n, { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }),
                            gsap.to(n, { scale: 0, opacity: 0, delay: 0.4, duration: 0.6, ease: "power2.inOut" }))
                        : (t.pause(), gsap.to(n, { opacity: 0, scale: 0, duration: 0.9, ease: "power2.out" }), gsap.to(o, { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" }));
                });
        },
    },
    MenuHandler = {
        init() {
            (this.elements = {
                menu: document.querySelector(".menu"),
                overflow: document.querySelector(".menu-overflow"),
                items: document.querySelectorAll(".menu-list"),
                anchors: document.querySelectorAll(".menu-list-item"),
                dropdownAnchors: document.querySelectorAll(".menu-list-item-anchor"),
                openBtn: document.querySelector(".menu-open"),
                closeBtn: document.querySelector(".menu-close"),
            }),
                (this.timeline = gsap.timeline({ paused: !0, defaults: { ease: "custom", duration: 0.8 } })),
                gsap.registerEase("custom", function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                }),
                this.setupInitialState(),
                this.createTimeline(),
                this.bindEvents();
        },
        setupInitialState() {
            gsap.set(this.elements.menu, { pointerEvents: "none", autoAlpha: 0 }),
                gsap.set(this.elements.overflow, { pointerEvents: "none", autoAlpha: 0, y: -30, rotate: -1, scale: 0.98 }),
                gsap.set(this.elements.items, { autoAlpha: 0, y: -10, scale: 0.95 }),
                gsap.set(this.elements.closeBtn, { autoAlpha: 0, y: -10, scale: 0.95 });
        },
        createTimeline() {
            this.timeline
                .to(this.elements.menu, { autoAlpha: 1, pointerEvents: "auto", duration: 0.5, ease: "power2.out" }, 0)
                .to(this.elements.overflow, { autoAlpha: 1, pointerEvents: "auto", y: 0, rotate: 0, scale: 1, duration: 0.6, ease: "custom" }, 0.1)
                .to(this.elements.items, { autoAlpha: 1, y: 0, scale: 1, stagger: { amount: 0.4, ease: "power2.out" }, duration: 0.7, ease: "custom" }, 0.2)
                .to(this.elements.closeBtn, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, 0.3)
                .to(this.elements.openBtn, { autoAlpha: 0, y: -10, scale: 0.95, duration: 0.5, delay: 0.3, ease: "back.out(1.7)" }, 0.1)
                .to("body", { overflow: "hidden", pointerEvents: "none", duration: 0.1 }, 0);
        },
        bindEvents() {
            this.elements.openBtn && this.elements.openBtn.addEventListener("click", () => this.open()),
                this.elements.closeBtn && this.elements.closeBtn.addEventListener("click", () => this.close()),
                this.elements.dropdownAnchors.forEach((e) => {
                    e.addEventListener("click", () => this.handleDropdownClick(e));
                });
        },
        handleDropdownClick(e) {
            768 <= window.screen.width
                ? (this.elements.dropdownAnchors.forEach((e) => {
                    e.classList.remove("active");
                }),
                    e.classList.add("active"))
                : e.classList.toggle("active");
        },
        open() {
            gsap.set(this.elements.overflow, { scale: 0.98 }), this.elements.openBtn.classList.add("opacity-0"), this.timeline.timeScale(1).play(), (this.elements.menu.style.pointerEvents = "auto");
        },
        close() {
            this.elements.openBtn.classList.remove("opacity-1"),
                gsap.to(this.elements.openBtn, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, delay: 0.5, ease: "back.out(1.7)" }),
                this.timeline.timeScale(1.2).reverse(),
                (this.elements.menu.style.pointerEvents = "none");
        },
    };
function initializeSliders() {
    new Swiper(".user-swiper", {
        loop: !0,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        allowTouchMove: !0,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: !0 },
    }),
        new Swiper(".user-swiper-v2", {
            loop: !0,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 1500,
            allowTouchMove: !0,
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            pagination: { el: ".swiper-pagination-v2", clickable: !0 },
        }),
        new Swiper("#reviewer", { loop: !0, slidesPerView: 1, spaceBetween: 30, speed: 700, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
    const e = document.querySelector("#custom-3d-slider");
    if (e) {
        const a = e.querySelectorAll(".slide");
        let c = 0,
            t;
        function o() {
            const s = a.length,
                l = a[0].offsetWidth;
            a.forEach((e, t) => {
                var o = t - c,
                    n = s - Math.abs(o),
                    i = o * (l + 20);
                let a = 1 - 0.2 * Math.abs(o);
                t = 1 - 0.1 * Math.abs(o);
                let r = 100 * -Math.abs(o);
                0 == o && ((a = 1.2), (r = 0)), (e.style.transform = `translateX(${i}px) translateZ(${r}px) scale(${a})`), (e.style.opacity = t), (e.style.zIndex = n);
            });
        }
        function n() {
            (c = (c + 1) % a.length), o();
        }
        function i() {
            t = setInterval(n, 2500);
        }
        o(),
            i(),
            a.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    clearInterval(t);
                }),
                    e.addEventListener("mouseleave", () => {
                        i();
                    });
            });
    }
    new Swiper(".ai-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        pagination: { el: ".swiper-pagination", clickable: !0 },
        breakpoints: { 640: { slidesPerView: 1, spaceBetween: 24 }, 768: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 24 } },
    }),
        new Swiper(".cardSwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
                1280: { slidesPerView: 3, spaceBetween: 30 },
                1430: { slidesPerView: 4, spaceBetween: 30 },
            },
        });
}
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScrolling(),
        setupLenisSmoothScrollLinks(),
        DarkMode.init(),
        MenuHandler.init(),
        Components.initCircleText(),
        Components.initCircleTextV2(),
        Components.initScrollingMarquee(),
        Components.initFAQ(),
        Components.initCounter(),
        Components.initTeam(),
        Components.initPricingToggle(),
        Components.initCtaSlider(),
        Components.initHeadroom(),
        Components.initMarquees(),
        Components.initSkewMarquee(),
        Components.initVideoPlayPause(),
        Components.initHeroShowCaseVideo(),
        Animations.initHeroGradient(),
        Animations.initPointerAnimation(),
        Animations.initTextReveal(),
        Animations.initTextReveal2(),
        Animations.initHorizontalScroll(),
        Animations.initImageHorizontalScroll(),
        Animations.initCtaImageReveal(),
        Animations.initSectionTitles(),
        Animations.initSectionTitles2(),
        Animations.initRevealElements(),
        Animations.initRevealElementsV2(),
        Animations.initZoomAnimation(),
        Animations.initVideoAnimation(),
        Animations.initScaleSmallAnimation(),
        Animations.initScaleSmallAnimation2(),
        Animations.initBlogCardScaleAnimation(),
        Animations.initAboutImageScaleAnimation(),
        Animations.initRandomImageAnimation(),
        Animations.careerImageGalleryAnimation(),
        Animations.startHeroImageAnimation(),
        Animations.initHeroImagesAnimationV2(),
        Animations.initTableHoverAnimation(),
        Animations.initSocialProofSvgAnimation(),
        initializeSliders();
});


document.addEventListener('DOMContentLoaded', function () {
    // Para los menús principales
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const parent = this.closest('.menu-list-item-anchor');
            const dropdown = parent.querySelector('.menu-list-item-dropdown');

            // Cerrar todos los demás dropdowns primero
            document.querySelectorAll('.menu-list-item-dropdown').forEach(item => {
                if (item !== dropdown) {
                    item.classList.add('hidden');
                }
            });

            // Alternar visibilidad del dropdown actual
            dropdown.classList.toggle('hidden');
        });
    });

    // Para los submenús (Servicios administrados, etc.)
    const subItemToggles = document.querySelectorAll('.dropdown-toggle-subitem');

    subItemToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const parent = this.closest('li');
            const subDropdown = parent.querySelector('.subitem-dropdown');

            // Cerrar todos los demás sub-dropdowns primero
            document.querySelectorAll('.subitem-dropdown').forEach(item => {
                if (item !== subDropdown) {
                    item.classList.add('hidden');
                }
            });

            // Alternar visibilidad del sub-dropdown actual
            subDropdown.classList.toggle('hidden');
        });
    });

    // Botón de cierre del menú
    const menuCloseButton = document.querySelector('.menu-close');
    if (menuCloseButton) {
        menuCloseButton.addEventListener('click', function () {
            const menu = document.querySelector('.menu');
            menu.classList.add('closed');
            // Aquí puedes agregar más lógica para cerrar el menú si es necesario
        });
    }
});



 // Función para detectar dispositivos móviles
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
  
  // Obtener los metadatos de la página para compartir
  function getPageMetadata() {
    const url = window.location.href;
    const title = document.title || 'Página para compartir';
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Échale un vistazo a esta página';
    
    return { url, title, description };
  }
  
  // Para dispositivos móviles, usamos las URLs de aplicación nativa cuando sea posible
  document.addEventListener('DOMContentLoaded', function() {
    if (isMobileDevice()) {
      const metadata = getPageMetadata();
      
      // WhatsApp en móvil usa un esquema de URL diferente
      const whatsappLinks = document.querySelectorAll('a[onclick*="whatsapp"]');
      whatsappLinks.forEach(link => {
        link.setAttribute('href', `whatsapp://send?text=${encodeURIComponent(metadata.title + ' ' + metadata.url)}`);
        link.removeAttribute('onclick');
      });
    }
  });


  // Script para controlar el comportamiento del megamenú
document.addEventListener('DOMContentLoaded', function() {
  // 1. Detectar si estamos en una pantalla grande (desktop)
  const isDesktop = window.innerWidth >= 1024;
  
  // 2. Solo aplicar el código específico de desktop si corresponde
  if (isDesktop) {
    setupDesktopMenu();
  }
  
  // 3. Configurar evento de redimensionamiento para manejar cambios de tamaño
  window.addEventListener('resize', function() {
    const currentIsDesktop = window.innerWidth >= 1024;
    
    // Si cambiamos entre móvil y desktop, recargar la página
    // (Alternativa: re-ejecutar la configuración apropiada)
    if (currentIsDesktop !== isDesktop) {
      // Opcional: en lugar de recargar, puedes ejecutar la configuración adecuada
      // location.reload();
      if (currentIsDesktop) {
        setupDesktopMenu();
      } else {
        teardownDesktopMenu();
      }
    }
  });
  
  // Función para configurar el menú desktop
  function setupDesktopMenu() {
    // Obtener todos los elementos de menú con megamenú
    const menuItems = document.querySelectorAll('.desktop-menu-item.has-megamenu');
    
    // Para cada elemento del menú que tiene megamenú
    menuItems.forEach(function(item) {
      // 4. Variables para controlar el temporizador (evitar cierres accidentales)
      let openTimer = null;
      let closeTimer = null;
      
      // 5. Listener para cuando el mouse entra en el ítem
      item.addEventListener('mouseenter', function() {
        // Cancelar cualquier cierre programado
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        
        // Abrir el megamenú con un pequeño retraso
        openTimer = setTimeout(function() {
          // Cerrar otros megamenús abiertos primero
          document.querySelectorAll('.desktop-megamenu.active').forEach(function(menu) {
            if (!item.contains(menu)) {
              menu.classList.remove('active');
            }
          });
          
          // Abrir este megamenú
          const megamenu = item.querySelector('.desktop-megamenu');
          if (megamenu) {
            megamenu.classList.add('active');
            megamenu.style.display = 'block';
          }
        }, 50); // 50ms de retraso para abrir (apenas perceptible)
      });
      
      // 6. Listener para cuando el mouse sale del ítem
      item.addEventListener('mouseleave', function() {
        // Cancelar cualquier apertura programada
        if (openTimer) {
          clearTimeout(openTimer);
          openTimer = null;
        }
        
        // Cerrar el megamenú con un pequeño retraso
        closeTimer = setTimeout(function() {
          const megamenu = item.querySelector('.desktop-megamenu');
          if (megamenu) {
            megamenu.classList.remove('active');
            megamenu.style.display = '';
          }
        }, 200); // 200ms de retraso para cerrar
      });
      
      // 7. Añadir manejo de clic para dispositivos táctiles
      const menuToggle = item.querySelector('.desktop-dropdown-toggle');
      if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
          // Prevenir navegación si hay megamenú
          if (item.querySelector('.desktop-megamenu')) {
            e.preventDefault();
            
            // Alternar estado del megamenú
            const megamenu = item.querySelector('.desktop-megamenu');
            const isActive = megamenu.classList.contains('active');
            
            // Cerrar otros megamenús primero
            document.querySelectorAll('.desktop-megamenu.active').forEach(function(menu) {
              menu.classList.remove('active');
              menu.style.display = '';
            });
            
            // Abrir/cerrar este megamenú
            if (!isActive) {
              megamenu.classList.add('active');
              megamenu.style.display = 'block';
            }
          }
        });
      }
    });
    
    // 8. Cerrar al hacer clic fuera del menú
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.desktop-menu-item')) {
        document.querySelectorAll('.desktop-megamenu.active').forEach(function(menu) {
          menu.classList.remove('active');
          menu.style.display = '';
        });
      }
    });
  }
  
  // Función para desactivar el menú desktop
  function teardownDesktopMenu() {
    // Obtener todos los elementos de menú con megamenú
    const menuItems = document.querySelectorAll('.desktop-menu-item.has-megamenu');
    
    // Eliminar listeners (simplificado - en un caso real habría que eliminar cada listener específico)
    menuItems.forEach(function(item) {
      const megamenu = item.querySelector('.desktop-megamenu');
      if (megamenu) {
        megamenu.classList.remove('active');
        megamenu.style.display = '';
      }
    });
  }
});