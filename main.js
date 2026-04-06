/* ============================================
   AI ŠKOLENÍ — LANDING PAGE LOGIC
   Loads content from content.js (CONTENT)
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    renderMeta(CONTENT.meta);
    renderHeader();
    renderHero();
    renderProducts();
    renderWhyUs();
    renderAboutUs();
    renderReviews();
    renderCtaBanner();
    renderFooter();
    initHamburger();
    initScrollAnimations();
});

/* ─── META ──────────────────────────────── */
function renderMeta(metaContent) {
    const { title, description } = metaContent;
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
}

/* ─── HEADER ────────────────────────────── */
function renderHeader() {
    const { header } = CONTENT;
    const logo = document.getElementById("headerLogo");
    if (logo) logo.href = header.logoUrl;

    const nav = document.getElementById("mainNav");
    if (!nav) return;

    const homeLink = document.createElement("a");
    homeLink.href = header.logoUrl;
    homeLink.className = "nav-home";
    homeLink.textContent = "🏠";
    homeLink.setAttribute("aria-label", "Domů");
    nav.appendChild(homeLink);

    header.nav.forEach((item) => {
        if (item.separator) {
            const sep = document.createElement("span");
            sep.className = "nav-separator";
            nav.appendChild(sep);
            return;
        }

        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.label;

        if (item.icon === "school") {
            a.innerHTML = `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>${item.label}`;
        }

        nav.appendChild(a);
    });
}

/* ─── HERO ──────────────────────────────── */
function renderHero() {
    const { hero } = CONTENT;

    const heading = document.getElementById("heroHeading");
    if (heading) heading.textContent = hero.heading;

    const sub = document.getElementById("heroSub");
    if (sub) sub.textContent = hero.subheading;

    // YouTube embed
    const videoContainer = document.getElementById("videoContainer");
    if (videoContainer && hero.youtubeId) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${hero.youtubeId}?rel=0&modestbranding=1`;
        iframe.title = hero.heading;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
    }
}

/* ─── PRODUCTS ──────────────────────────── */
function renderProducts() {
    const { productsSection, products } = CONTENT;

    const sectionTitle = document.getElementById("productsSectionTitle");
    if (sectionTitle) sectionTitle.textContent = productsSection.title;

    const sectionSub = document.getElementById("productsSectionSubtitle");
    if (sectionSub) sectionSub.textContent = productsSection.subtitle;

    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = `product-card product-card--${product.color}`;
        card.id = `product-${product.id}`;

        // Badge
        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = product.badge;
        card.appendChild(badge);

        // Body
        const body = document.createElement("div");
        body.className = "product-card-body";

        // Header wrapper (fixed height to align prices)
        const header = document.createElement("div");
        header.className = "product-card-header";

        // Icon
        const icon = document.createElement("span");
        icon.className = "product-card-icon";
        icon.textContent = product.icon;
        header.appendChild(icon);

        // Title
        const title = document.createElement("h3");
        title.className = "product-card-title";
        title.textContent = product.title;
        header.appendChild(title);

        // Subtitle
        const subtitle = document.createElement("p");
        subtitle.className = "product-card-subtitle";
        subtitle.textContent = product.subtitle;
        header.appendChild(subtitle);

        body.appendChild(header);

        // Price
        const priceWrap = document.createElement("div");
        priceWrap.className = "product-card-price";

        const priceCurrent = document.createElement("span");
        priceCurrent.className = "price-current";
        priceCurrent.textContent = product.price;
        priceWrap.appendChild(priceCurrent);

        if (product.originalPrice) {
            const priceOrig = document.createElement("span");
            priceOrig.className = "price-original";
            priceOrig.textContent = product.originalPrice;
            priceWrap.appendChild(priceOrig);
        }

        if (product.discountBadge) {
            const discBadge = document.createElement("span");
            discBadge.className = "discount-badge";
            discBadge.textContent = product.discountBadge;
            priceWrap.appendChild(discBadge);
        }

        body.appendChild(priceWrap);

        // Price note
        if (product.priceNote) {
            const priceNote = document.createElement("p");
            priceNote.className = "price-note";
            priceNote.textContent = product.priceNote;
            body.appendChild(priceNote);
        }

        // Features
        const featuresList = document.createElement("ul");
        featuresList.className = "product-features";

        product.features.forEach((f) => {
            const li = document.createElement("li");

            const iconSpan = document.createElement("span");
            iconSpan.className = "feature-icon";
            iconSpan.textContent = f.icon;

            const textSpan = document.createElement("span");
            let textHtml = f.text;

            if (f.highlight) {
                textHtml += ` <span class="feature-highlight">${f.highlight}</span>`;
            }

            textSpan.innerHTML = textHtml;

            if (f.bold) {
                textSpan.classList.add("feature-bold");
            }

            li.appendChild(iconSpan);
            li.appendChild(textSpan);
            featuresList.appendChild(li);
        });

        body.appendChild(featuresList);

        // Extra info
        if (product.extraInfo) {
            const extra = document.createElement("div");
            extra.className = "product-extra";
            extra.textContent = product.extraInfo;
            body.appendChild(extra);
        }

        card.appendChild(body);

        // Footer
        const footer = document.createElement("div");
        footer.className = "product-card-footer";

        const cta = document.createElement("a");
        cta.className = "btn-product";
        cta.textContent = product.ctaLabel;
        cta.href = product.ctaUrl;
        cta.target = "_blank";
        cta.rel = "noopener";
        footer.appendChild(cta);

        card.appendChild(footer);

        // Bonus note (below CTA)
        if (product.bonusNote) {
            const bonus = document.createElement("div");
            bonus.className = "product-bonus-note";
            bonus.textContent = product.bonusNote;
            card.appendChild(bonus);
        }

        grid.appendChild(card);
    });
}

/* ─── ABOUT US ──────────────────────────── */
function renderAboutUs() {
    const { aboutUs } = CONTENT;
    if (!aboutUs) return;

    const title = document.getElementById("aboutUsTitle");
    if (title) title.textContent = aboutUs.title;

    const subtitle = document.getElementById("aboutUsSubtitle");
    if (subtitle) subtitle.textContent = aboutUs.subtitle;

    const text = document.getElementById("aboutUsText");
    if (text) text.textContent = aboutUs.text;

    const btn = document.getElementById("aboutUsBtn");
    if (btn && aboutUs.podcastUrl) btn.href = aboutUs.podcastUrl;

    const statsGrid = document.getElementById("aboutStats");
    if (!statsGrid) return;

    aboutUs.stats.forEach((stat) => {
        const card = document.createElement("div");
        card.className = "about-stat";
        card.innerHTML = `
            <span class="about-stat-value">${stat.value}</span>
            <span class="about-stat-label">${stat.label}</span>
        `;
        statsGrid.appendChild(card);
    });
}

/* ─── WHY US ────────────────────────────── */
function renderWhyUs() {
    const { whyUs } = CONTENT;

    const title = document.getElementById("whyUsTitle");
    if (title) title.textContent = whyUs.title;

    const grid = document.getElementById("whyGrid");
    if (!grid) return;

    whyUs.items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "why-card";

        card.innerHTML = `
            <span class="why-card-icon">${item.icon}</span>
            <h3 class="why-card-title">${item.title}</h3>
            <p class="why-card-text">${item.text}</p>
        `;

        grid.appendChild(card);
    });
}

/* ─── REVIEWS ───────────────────────────── */
function renderReviews() {
    const { reviews } = CONTENT;

    const title = document.getElementById("reviewsTitle");
    if (title) title.textContent = reviews.title;

    const subtitle = document.getElementById("reviewsSubtitle");
    if (subtitle) subtitle.textContent = reviews.subtitle;

    const grid = document.getElementById("reviewsGrid");
    if (!grid) return;

    reviews.items.forEach((review) => {
        const card = document.createElement("a");
        card.className = "review-card";
        card.href = reviews.googleUrl || "#";
        card.target = "_blank";
        card.rel = "noopener";

        // Stars
        const starsDiv = document.createElement("div");
        starsDiv.className = "review-stars";
        starsDiv.textContent = "★".repeat(review.stars) + "☆".repeat(5 - review.stars);
        card.appendChild(starsDiv);

        // Text
        const textP = document.createElement("p");
        textP.className = "review-text";
        textP.textContent = `„${review.text}"`;
        card.appendChild(textP);

        // Author
        const authorDiv = document.createElement("div");
        authorDiv.className = "review-author";

        const avatar = document.createElement("div");
        avatar.className = "review-avatar";
        avatar.textContent = review.name.split(" ").map(n => n[0]).join("");
        authorDiv.appendChild(avatar);

        const nameWrap = document.createElement("div");
        const nameSpan = document.createElement("div");
        nameSpan.className = "review-name";
        nameSpan.textContent = review.name;
        nameWrap.appendChild(nameSpan);

        const sourceSpan = document.createElement("div");
        sourceSpan.className = "review-source";
        sourceSpan.textContent = "Google recenze";
        nameWrap.appendChild(sourceSpan);

        authorDiv.appendChild(nameWrap);
        card.appendChild(authorDiv);

        grid.appendChild(card);
    });
}

/* ─── CTA BANNER ────────────────────────── */
function renderCtaBanner() {
    const { ctaBanner } = CONTENT;

    const heading = document.getElementById("ctaHeading");
    if (heading) heading.textContent = ctaBanner.heading;

    const sub = document.getElementById("ctaSub");
    if (sub) sub.textContent = ctaBanner.sub;

    const btn = document.getElementById("ctaBtn");
    if (btn) {
        btn.textContent = ctaBanner.btnLabel;
        btn.href = ctaBanner.btnUrl;
    }
}

/* ─── FOOTER ────────────────────────────── */
function renderFooter() {
    const { footer } = CONTENT;
    const grid = document.getElementById("footerColumns");
    if (!grid) return;

    footer.columns.forEach((col) => {
        const div = document.createElement("div");
        div.className = "footer-col";

        const h3 = document.createElement("h3");
        h3.textContent = col.heading;
        div.appendChild(h3);

        if (col.links) {
            col.links.forEach((link) => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.label;
                a.target = "_blank";
                a.rel = "noopener";
                div.appendChild(a);
            });
        }

        if (col.textLines) {
            col.textLines.forEach((line) => {
                if (line === "") {
                    div.appendChild(document.createElement("br"));
                } else {
                    const p = document.createElement("p");
                    p.className = "text-line";
                    p.textContent = line;
                    div.appendChild(p);
                }
            });
        }

        if (col.contacts) {
            col.contacts.forEach((c) => {
                const a = document.createElement("a");
                a.href = c.url;
                a.className = "footer-contact";
                a.target = "_blank";
                a.rel = "noopener";

                const svg = getSocialIcon(c.icon);
                a.innerHTML = `<span class="footer-contact-icon">${svg}</span>${c.label}`;

                div.appendChild(a);
            });
        }

        grid.appendChild(div);
    });

    document.getElementById("footerCopyright").textContent = footer.copyright;
}

/* ─── SOCIAL ICONS (SVG) ────────────────── */
function getSocialIcon(name) {
    const icons = {
        phone: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
        email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
        facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
        tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    };
    return icons[name] || "";
}

/* ─── HAMBURGER MENU ────────────────────── */
function initHamburger() {
    const btn = document.getElementById("hamburger");
    const nav = document.getElementById("mainNav");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen);
    });

    nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            nav.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
        });
    });
}

/* ─── SCROLL ANIMATIONS ─────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.product-card, .why-card, .review-card, .about-stat').forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}
