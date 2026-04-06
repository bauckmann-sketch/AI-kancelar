/**
 * ===========================================
 *  AI ŠKOLENÍ — LANDING PAGE CONTENT
 *  Upravujte texty zde, nemusíte měnit HTML.
 * ===========================================
 */

const CONTENT = {

    // ─── META ──────────────────────────────────
    meta: {
        title: "AI školení a kurzy | AI v kostce × Inovatix",
        description: "Vyberte si AI vzdělávání přesně pro vás – od praktických nástrojů v kanceláři, přes komplexní akademii až po stavbu vlastních AI agentů.",
    },

    // ─── HEADER NAV ────────────────────────────
    header: {
        logoText: "AI v k□stce",
        logoUrl: "https://aivkostce.cz/",
        nav: [
            { label: "Podcasty", url: "https://aivkostce.cz/podcasty/" },
            { label: "Tutoriály", url: "https://aivkostce.cz/tutorialy/" },
            { label: "AI školení", url: "https://www.inovatix.cz/skoleni", icon: "school" },
            { separator: true },
            { label: "O nás", url: "https://aivkostce.cz/o-nas/" },
            { label: "Kontakty", url: "https://aivkostce.cz/kontakty/" },
        ],
    },

    // ─── HERO SEKCE ────────────────────────────
    hero: {
        heading: "Ovládněte AI nástroje.\nOd kanceláře po vlastního agenta.",
        subheading: "Podívejte se na záznam webináře a zjistěte, jak AI změní vaši každodenní práci. Pak si vyberte cestu, která sedí právě vám.",
        youtubeId: "4DIzoa3lqLo",
    },

    // ─── PRODUCTS SECTION ──────────────────────
    productsSection: {
        title: "Vyberte si svou cestu k AI",
        subtitle: "Tři programy, tři úrovně. Každý vás posune přesně tam, kde potřebujete být.",
    },

    // ─── PRODUCT CARDS ─────────────────────────
    products: [
        {
            id: "kancelar",
            color: "orange",
            badge: "BEST SELLER",
            icon: "💼",
            title: "AI pro kancelář",
            subtitle: "Konkrétní nástroje, které vám okamžitě ušetří hodiny práce. Žádná teorie — jen výsledky.",
            price: "4 500 Kč",
            originalPrice: "7 200 Kč",
            discountBadge: "— 37 %",
            priceNote: "6 webinářů v balíčku (ušetříte 2 700 Kč)",
            features: [
                { icon: "🎬", text: "Gamma, Notta, Sider", highlight: "— prezentace, přepisy, AI asistent v prohlížeči" },
                { icon: "📋", text: "Notion", highlight: "— váš druhý mozek na steroidech" },
                { icon: "🤖", text: "AI asistenti", highlight: "— nastavte si digitální kolegy" },
                { icon: "🤖", text: "AI Asistenti II", highlight: "— pokročilá práce s agenty" },
                { icon: "⚡", text: "Automatizace", highlight: "— propojte nástroje a nechte stroje dělat rutinu" },
                { icon: "💻", text: "MS Office Copilot", highlight: "— AI přímo ve Wordu, Excelu a Outlooku" },
                { icon: "🎁", text: "BONUS: Okamžitý přístup k záznamům", bold: true, highlight: "z minulých webinářů" },
            ],
            ctaLabel: "CHCI BALÍČEK SE SLEVOU 37 %",
            ctaUrl: "https://www.inovatix.cz/skoleni",
            extraInfo: "Každý webinář samostatně za 1 200 Kč. V balíčku všech 6 za zvýhodněnou cenu. Navíc ihned získáte záznam z posledního webináře — na živém se pak můžete ptát na konkrétní dotazy.",
            bonusNote: "🎓 Sleva 20 % na AI Akademii, pokud se ji rozhodnete v budoucnu absolvovat celou.",
        },
        {
            id: "akademie",
            color: "blue",
            badge: "PRO ZAČÁTEČNÍKY",
            icon: "🎓",
            title: "AI Akademie",
            subtitle: "3měsíční intenzivní program, který vás krok za krokem provede světem AI. Od chatu s modelem po vlastní projekt s certifikátem.",
            price: "14 900 Kč",
            originalPrice: "",
            priceNote: "Až 43 hodin online školení",
            features: [
                { icon: "📚", text: "6× 2h intenzivní školení", highlight: "s praktickými ukázkami" },
                { icon: "🔄", text: "5× 1h checkpoint", highlight: "— opakování a podpora při úkolech" },
                { icon: "🎯", text: "12× 2h odborných webinářů", highlight: "— ChatGPT, grafika, video, Notion a další" },
                { icon: "🏆", text: "Závěrečná prezentace", highlight: "a certifikát o absolvování" },
                { icon: "💬", text: "WhatsApp skupina", highlight: "+ sdílený ChatGPT účet" },
                { icon: "📅", text: "Start: 15. dubna 2026", bold: true, highlight: "— ranní i odpolední skupina" },
            ],
            ctaLabel: "CHCI NA AKADEMII",
            ctaUrl: "https://www.inovatix.cz/skoleni/jarni-ai-akademie-2026",
            extraInfo: "Pro začátečníky i pokročilé. Pro freelancery, firmy, pedagogy i zvědavce. Dostanete přístup ke sdílenému ChatGPT účtu po dobu kurzu.",
        },
        {
            id: "architekt",
            color: "dark",
            badge: "PRO POKROČILÉ",
            icon: "⚙️",
            title: "AI Agent Architekt",
            subtitle: "Přestaňte AI úkolovat — naučte se jí delegovat celé procesy. Stavba vlastních autonomních agentů, kteří běží 24/7.",
            price: "14 900 Kč",
            originalPrice: "",
            priceNote: "11× 90min školení · 3 měsíce",
            features: [
                { icon: "🤖", text: "Agentní systémy & OpenClaw", highlight: "— od instalace po pokročilé skilly" },
                { icon: "💻", text: "Vibecoding I, II, III", highlight: "— kód pomocí přirozeného jazyka" },
                { icon: "🗄️", text: "Data & Infrastruktura", highlight: "— API, Airtable, relační databáze" },
                { icon: "🚀", text: "Cursor, Antigravity, Claude Code", highlight: "— IDE budoucnosti" },
                { icon: "🔒", text: "Bezpečnost & Provoz", highlight: "— cron, anti-cyklení, best practices" },
                { icon: "🎁", text: "3× bonusový záznam", bold: true, highlight: "— MAKE, n8n, MCP" },
                { icon: "📅", text: "Start: 4. května 2026", bold: true, highlight: "" },
            ],
            ctaLabel: "CHCI STAVĚT AGENTY",
            ctaUrl: "https://www.inovatix.cz/skoleni/ai-agent-architekt-stavba-autonomnich-ai-systemu",
            extraInfo: "Pro vizionáře, freelancery a technické lídry. Záznamy ze všech webinářů. Vše přehledně v Notion – dostupné 6 měsíců po skončení.",
        },
    ],

    // ─── ABOUT US ─────────────────────────────
    aboutUs: {
        title: "Kdo za tím stojí?",
        subtitle: "AI v kostce — podcast, který poslouchá přes 35 000 lidí",
        text: "Jsme David a Martin z Inovatixu. Stojíme za podcastem AI v kostce, který je jedním z nejposlouchanějších AI podcastů v Česku. Každý týden sdílíme praktické tipy, novinky ze světa umělé inteligence a reálné příběhy firem, které AI už úspěšně nasadily. Naše školení vychází přímo z praxe — učíme to, co sami denně používáme.",
        stats: [
            { value: "35 000+", label: "posluchačů podcastu" },
            { value: "200+", label: "epizod" },
            { value: "500+", label: "proškolených lidí" },
            { value: "4,9 / 5", label: "hodnocení na Google" },
        ],
        podcastUrl: "https://aivkostce.cz/podcasty/",
    },

    // ─── WHY US ────────────────────────────────
    whyUs: {
        title: "Proč se vzdělávat s námi?",
        items: [
            {
                icon: "🎙️",
                title: "AI v kostce podcast",
                text: "Tisíce posluchačů nám důvěřují. Sdílíme reálné zkušenosti, ne buzzwordy.",
            },
            {
                icon: "🛠️",
                title: "Praktický přístup",
                text: "Žádná suchá teorie. Učíte se na reálných příkladech a odcházíte s funkčním řešením.",
            },
            {
                icon: "👨‍🏫",
                title: "Expertní lektoři",
                text: "Školí vás lidé, kteří AI denně používají ve své práci a podnikání.",
            },
            {
                icon: "🤝",
                title: "Komunita & podpora",
                text: "WhatsApp skupiny, záznamy z webinářů a přístup k materiálům i po skončení kurzu.",
            },
        ],
    },

    // ─── REVIEWS ───────────────────────────────
    reviews: {
        title: "Co říkají naši absolventi",
        subtitle: "4,9 / 5 ⭐ na Google · 29 hodnocení",
        googleUrl: "https://www.google.com/maps/place/AI+v+kostce/@50.0695753,14.3658669,17z/data=!4m8!3m7!1s0x470b960e16d12ba3:0x56f64d49ff1d28d1!8m2!3d50.0695753!4d14.3658669!9m1!1b1!16s%2Fg%2F11y3glr_0h",
        items: [
            {
                name: "Katka Čverhová",
                stars: 5,
                text: "Studium v rámci Zimní akademie u firmy Inovatix hodnotím velmi pozitivně. Oceňuji především praktické zaměření výuky a přístup lektorů, kteří mají reálné zkušenosti z praxe a umí je srozumitelně předat. Výuka je dobře strukturovaná, přehledná a zároveň zábavná.",
            },
            {
                name: "Jiří Rejmann",
                stars: 5,
                text: "V rámci AI akademie jsem získal celkový rámec a přehled o tom, co je ve světě AI aktuálně k dispozici a k tomu velmi dobrý základ pro práci v jednotlivých tématech. Pět hvězd s přehledem!",
            },
            {
                name: "Tomas Silhan",
                stars: 5,
                text: "Chlapi z Inovatixu jsou prostě skvělí. Jsou to odborníci, je s nimi výborná spolupráce, reagují na podněty, trénink, který nám připravili, byl udělaný na míru naší firmě. Absolutně pozitivně.",
            },
            {
                name: "Jana Spoustová",
                stars: 5,
                text: "Moc děkuji za skvělá školení a podcasty a za vstřícný a trpělivý přístup při seznamování s AI. Oceňuji, že přes to, že jde o odborné příspěvky, vedete je \u201Elidskou řečí\u201C a vše je srozumitelné i pro začátečníky. 👍",
            },
            {
                name: "Zdenda G. Zahradka",
                stars: 5,
                text: "Tým Inovatix tvoří perfektní dvojka s komplexním přístupem, která srozumitelně a poutavě vysvětluje podstatu i funkčnost umělé inteligence. Jejich prezentace, podcasty i tutoriály jsem si velmi oblíbil.",
            },
            {
                name: "Ondřej Šula",
                stars: 5,
                text: "Výborný tým se skvělými znalostmi a přístupnou formou. Velmi pravděpodobně ti nejlepší v oboru.",
            },
        ],
    },

    // ─── CTA BANNER ────────────────────────────
    ctaBanner: {
        heading: "Neztrácejte čas. AI čeká právě na vás.",
        sub: "Vyberte si kurz a začněte svou cestu k efektivnější práci ještě dnes.",
        btnLabel: "VYBRAT KURZ",
        btnUrl: "#productsSection",
    },

    // ─── FOOTER ────────────────────────────────
    footer: {
        columns: [
            {
                heading: "O AI v kostce",
                links: [
                    { label: "O projektu", url: "https://aivkostce.cz/o-nas/" },
                    { label: "Podcasty", url: "https://aivkostce.cz/podcasty/" },
                    { label: "GDPR", url: "https://aivkostce.cz/zasady-ochrany-osobnich-udaju-gdpr/" },
                    { label: "Obchodní podmínky (VOP)", url: "https://aivkostce.cz/vseobecne-obchodni-podminky/" },
                ],
            },
            {
                heading: "Provozovatel",
                textLines: [
                    "Inovatix Group s.r.o.",
                    "",
                    "WorkLounge",
                    "Plzeňská 155/113",
                    "150 00 Praha 5",
                    "IČO: 21815879",
                ],
            },
            {
                heading: "Kontakty",
                contacts: [
                    { icon: "phone", label: "+420 724 172 199", url: "tel:+420724172199" },
                    { icon: "email", label: "ai@aivkostce.cz", url: "mailto:ai@aivkostce.cz" },
                    { icon: "facebook", label: "Facebook", url: "https://www.facebook.com/aivkostce" },
                    { icon: "youtube", label: "YouTube", url: "https://www.youtube.com/@AIvkostce" },
                    { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/aivkostce/" },
                    { icon: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@aivkostce" },
                    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/showcase/aivkostce/" },
                ],
            },
        ],
        copyright: "© 2026 Inovatix Group s.r.o. Všechna práva vyhrazena.",
    },
};
