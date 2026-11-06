// Force page refresh / fresh load to always start at the Hero section (top of page)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

(() => {
    const isReload = window.performance && 
        window.performance.getEntriesByType && 
        window.performance.getEntriesByType('navigation')[0] && 
        window.performance.getEntriesByType('navigation')[0].type === 'reload';

    const hash = window.location.hash;
    const isProjectHash = hash && hash.startsWith('#project-');

    if (isReload || isProjectHash || !hash) {
        if (isProjectHash && history.replaceState) {
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 5. Instant In-Page Language Switcher
    // ==========================================
    const langSwitcher = document.querySelector('.lang-switcher');
    
    // I18n Dictionary
    const i18nDict = {
        en: {
            loadingWord: "LOADING",
            navAbout: "About",
            navSkills: "Skills",
            navServices: "Services",
            navExperience: "Experience",
            navClients: "Clients",
            navProjects: "Projects",
            navCv: "CV",
            navContact: "Get in Touch",
            navThemeAttr: "Toggle Theme",
            switcherText: "العربية",
            aboutTitle: "About Me",
            aboutP1: "I'm a results-driven Performance Marketer and Media Buyer with a strong focus on understanding user behavior and translating data into clear, actionable decisions.",
            aboutP2: "My main advantage is connecting ad strategies with creative testing and the full buyer journey in a way that actually converts.",
            aboutP3: "I bring solid experience in tracking KPIs and optimizing spend from hands-on roles at DHPS Agency, HQ Brands, and Clever Marketing ensuring marketing budgets are deployed efficiently to get the best return on investment.",
            aboutBtnTouch: "Get In Touch",
            aboutBtnCv: "Download CV",
            skillsSubtitle: "My Expertise",
            skillsTitle: "Tools & Platforms",
            skillsCat1: "Advertising & E-commerce",
            skillsCat2: "Creative Tools",
            skillsCat3: "AI Tools",
            skillsToolMeta: "Meta Ads Manager",
            skillsToolEasyOrders: "Easy Orders",
            skillsToolAiLp: "AI-Assisted Landing Page Customization",
            skillsToolCanva: "Canva",
            skillsToolPremiere: "Adobe Premiere Pro",
            skillsToolChatgpt: "ChatGPT",
            skillsToolGemini: "Gemini",
            skillsToolAntigravity: "Antigravity",
            skillsToolAiStudio: "Google AI Studio",
            servSubtitle: "What I Do",
            servTitle: "My Services",
            serv1Title: "Paid Ad Execution Support",
            serv1Desc: "Assisting in the setup, launching, and daily monitoring of paid advertising campaigns across Meta platforms, ensuring accurate ad delivery according to structured media buying guidelines.",
            serv2Title: "Marketing Data Entry & Basic Reporting",
            serv2Desc: "Gathering and organizing campaign metrics into clear data reports to track performance, help scale effective ad sets, and monitor target acquisition costs.",
            serv3Title: "Marketing Budget Tracking & Support",
            serv3Desc: "Regular tracking of daily and lifetime marketing ad spends to prevent overbudgeting, minimize waste, and ensure maximum budget efficiency.",
            serv4Title: "Organic Growth & Retention Support",
            serv4Desc: "Assisting in organic growth strategies and tracking audience retention metrics to help scale community pages, focus on engagement, and improve viewer consistency.",
            expSubtitle: "Career Path",
            expTitle: "Experience",
            exp0Title: "Junior Media Buyer",
            exp0Company: "La Vie for Manufacturing & Trade",
            exp0Item1: "Set up and managed Meta Ads Sales campaigns for e-commerce products.",
            exp0Item2: "Tested creatives, audiences, and advertising angles to identify better-performing combinations.",
            exp0Item3: "Monitored campaign performance and KPIs to support daily optimization and improve results.",
            exp0Item4: "Created and customized landing pages on Easy Orders, using AI-assisted HTML & CSS edits to improve layout and visual consistency.",
            exp0Item5: "Edited video creatives when needed to support advertising campaigns.",
            exp1Desc: "Managed advertising campaigns, adjusted budget allocations, and tracked core performance metrics.",
            exp2Desc: "Monitored live ad performance, executed creative testing, and optimized spend efficiency.",
            exp3Desc: "Handled client reporting, supervised ad intervals, and delivered high ROAS for e-commerce and app clients.",
            eduSubtitle: "Academic Background",
            eduTitle: "Education",
            eduDegree: "Bachelor's Degree",
            eduFaculty: "Faculty of Agriculture (Saba Basha)",
            eduUni: "Alexandria University",
            eduDate: "Graduated 2020",
            clientsSubtitle: "Brands I've Worked With",
            clientsTitle: "Client Portfolio",
            projSubtitle: "Track Record",
            projTitle: "Selected Work",
            allWorkLabel: "All Work",
            campaignsLabel: "Ads",
            landingPagesLabel: "Landing Pages",
            filterAllWork: "All Work",
            filterAds: "Ads",
            filterLandingPages: "Landing Pages",
            previewLabel: "Preview",
            viewFullPage: "View Full Page",
            previewBadge: "Live Preview",
            loadingPreview: "Loading preview...",
            tapToInteract: "Tap to interact",
            previewDefaultTitle: "Landing Page Preview",
            proj1Tag: "Sales Campaign",
            proj1Lbl: "Average ROAS",
            proj1Li1: "Revenue:",
            proj1Li2: "Direct purchases:",
            proj1Li3: "Peak daily ROAS:",
            proj2Tag: "Messages Campaign",
            proj2Lbl: "Average Cost Per Conversation",
            proj2Li1: "Conversations generated:",
            proj2Li2: "Best daily CPA:",
            proj3Tag: "Sales Campaign",
            proj3Lbl: "Peak ROAS",
            proj3Li1: "Revenue:",
            proj3Li2: "Direct conversions:",
            proj3Li3: "Average ROAS:",
            proj4Tag: "Organic Viral Reach",
            proj4Lbl: "Organic Views",
            proj4Li1: "Avg retention:",
            proj4Li1Sub: "views per user",
            proj4Li2: "Strategy:",
            proj4Li2Sub: "Trendjacking & seasonal relevance",
            proj4Li3: "Industry:",
            proj4Li3Sub: "Home Decor",
            contactSubtitle: "Let's Connect",
            contactTitle: "Get In Touch",
            contactHead: "Let's build something scalable.",
            contactDesc: "Ready to scale your business? Let's drive measurable results together.",
            contactLiDetails: "Connect with me",
            contactEmailLabel: "Email",
            contactFormName: "Name",
            contactFormNamePh: "John Doe",
            contactFormEmail: "Email",
            contactFormEmailPh: "john@example.com",
            contactFormMsg: "Message",
            contactFormMsgPh: "How can I help you scale?",
            contactFormSubmit: "Send Message",
            footerCopy: "2026 Mo'men Mohamed. All rights reserved."
        },
        ar: {
            loadingWord: "جاري التحميل",
            navAbout: "من أنا",
            navSkills: "المهارات",
            navServices: "الخدمات",
            navExperience: "الخبرة",
            navClients: "العملاء",
            navProjects: "المشاريع",
            navCv: "السيرة الذاتية",
            navContact: "تواصل معايا",
            navThemeAttr: "تغيير المظهر",
            switcherText: "EN",
            aboutTitle: "من أنا",
            aboutP1: "أنا Performance Marketer و Media Buyer بركز أساساً على فهم سلوك اليوزر وبحوّل الداتا لقرارات واضحة وعملية.",
            aboutP2: "نقطة قوتي الحقيقية هي ربط استراتيجيات الإعلانات بالـ Creative Testing ورحلة العميل الكبيرة بشكل يجيب تحويلات حقيقية.",
            aboutP3: "عندي خبرة عملية في متابعة الـ KPIs وتحسين الصرف الإعلاني من شغلي في DHPS Agency و HQ Brands و Clever Marketing، وبضمن إن ميزانية التسويق تتوجه صح عشان تحقق أعلى ROI ممكن.",
            aboutBtnTouch: "تواصل معايا",
            aboutBtnCv: "نزل السيرة الذاتية",
            skillsSubtitle: "خبراتي وإمكانياتي",
            skillsTitle: "الأدوات والمنصات",
            skillsCat1: "الإعلانات والتجارة الإلكترونية",
            skillsCat2: "الأدوات الإبداعية",
            skillsCat3: "أدوات الذكاء الاصطناعي",
            skillsToolMeta: "Meta Ads Manager",
            skillsToolEasyOrders: "Easy Orders",
            skillsToolAiLp: "AI-Assisted Landing Page Customization",
            skillsToolCanva: "Canva",
            skillsToolPremiere: "Adobe Premiere Pro",
            skillsToolChatgpt: "ChatGPT",
            skillsToolGemini: "Gemini",
            skillsToolAntigravity: "Antigravity",
            skillsToolAiStudio: "Google AI Studio",
            servSubtitle: "إيه اللي بقدر أقدمه",
            servTitle: "خدماتي",
            serv1Title: "إدارة وتنفيذ الإعلانات المدفوعة",
            serv1Desc: "بشتغل على تجهيز وإطلاق ومتابعة الحملات الإعلانية المدفوعة على منصات Meta يومياً، مع ضمان وصول الإعلانات للجمهور الصح حسب قواعد الـ Media Buying المضبوطة.",
            serv2Title: "إدخال داتا التسويق والتقارير الأساسية",
            serv2Desc: "بجمع وبنظم أرقام ومؤشرات الحملات في تقارير داتا واضحة عشان نتابع الأداء، ونكبر المجموعات الإعلانية الشغالة، ونتحكم في تكلفة الاستحواذ target CPA.",
            serv3Title: "متابعة ميزانيات التسويق والدعم الإداري",
            serv3Desc: "بتابع صرف الإعلانات اليومي والإجمالي بشكل دوري عشان نمنع أي تعدي للميزانية، ونقلل الهدر، ونضمن كفاءة كل جنيه بيتصرف.",
            serv4Title: "دعم النمو العضوي والاحتفاظ بالجمهور",
            serv4Desc: "بساعد في حط استراتيجيات النمو العضوي ومتابعة مقاييس الـ Retention عشان نكَبّر صفحات البراند، ونزود التفاعل والاستمرارية للمشاهدين.",
            expSubtitle: "المسار المهني",
            expTitle: "الخبرة العملية",
            exp0Title: "Junior Media Buyer",
            exp0Company: "La Vie for Manufacturing & Trade",
            exp0Item1: "ضبط وإدارة حملات Meta Ads Sales لمنتجات الـ E-commerce.",
            exp0Item2: "اختبار الـ creatives والـ audiences وزوايا الإعلان لتحديد أفضل التوليفات أداءً.",
            exp0Item3: "متابعة أداء الحملات والـ KPIs لدعم التحسين اليومي وتحقيق نتائج أفضل.",
            exp0Item4: "إنشاء وتخصيص صفحات الهبوط على Easy Orders، باستخدام تعديلات HTML & CSS بمساعدة الذكاء الاصطناعي لتحسين التصميم والاتساق البصري.",
            exp0Item5: "مونتاج الـ video creatives عند الحاجة لدعم الحملات الإعلانية.",
            exp1Desc: "إدارة الحملات الإعلانية، وتعديل توزيع الميزانيات، ومتابعة الـ KPIs الأساسية.",
            exp2Desc: "متابعة أداء الإعلانات الشغالة، وتنفيذ الـ Creative Testing، وتحسين كفاءة الصرف.",
            exp3Desc: "عمل تقارير العملاء، والإشراف على الفواصل الإعلانية، وتحقيق أعلى معدلات ROAS لعملاء الـ E-commerce والتطبيقات.",
            eduSubtitle: "الخلفية الأكاديمية",
            eduTitle: "التعليم",
            eduDegree: "بكالوريوس",
            eduFaculty: "كلية الزراعة (سابا باشا)",
            eduUni: "جامعة الإسكندرية",
            eduDate: "دفعة 2020",
            clientsSubtitle: "براندات اشتغلت معاها",
            clientsTitle: "محفظة العملاء",
            projSubtitle: "سجل الإنجازات",
            projTitle: "أعمال مختارة",
            allWorkLabel: "كل الأعمال",
            campaignsLabel: "الحملات الإعلانية",
            landingPagesLabel: "صفحات الهبوط",
            filterAllWork: "كل الأعمال",
            filterAds: "الإعلانات",
            filterLandingPages: "صفحات الهبوط",
            previewLabel: "معاينة",
            viewFullPage: "عرض الصفحة كاملة",
            previewBadge: "معاينة مباشرة",
            loadingPreview: "جارٍ تحميل المعاينة...",
            tapToInteract: "المس للتفاعل",
            previewDefaultTitle: "معاينة صفحة الهبوط",
            proj1Tag: "حملة مبيعات",
            proj1Lbl: "Average ROAS",
            proj1Li1: "المبيعات:",
            proj1Li2: "أوردرات مباشرة:",
            proj1Li3: "أعلى ROAS يومي:",
            proj2Tag: "حملة رسائل",
            proj2Lbl: "Average CPA",
            proj2Li1: "محادثات جاية:",
            proj2Li2: "أحسن CPA يومي:",
            proj3Tag: "حملة مبيعات",
            proj3Lbl: "Peak ROAS",
            proj3Li1: "المبيعات:",
            proj3Li2: "تحويلات مباشرة:",
            proj3Li3: "متوسط ROAS:",
            proj4Tag: "انتشار عضوي",
            proj4Lbl: "Organic Views",
            proj4Li1: "متوسط الـ Retention:",
            proj4Li1Sub: "views لكل يوزر",
            proj4Li2: "الاستراتيجية:",
            proj4Li2Sub: "Trendjacking & seasonal relevance",
            proj4Li3: "المجال:",
            proj4Li3Sub: "Home Decor",
            contactSubtitle: "تواصل معايا",
            contactTitle: "ابتدأ كلامنا",
            contactHead: "يلا نبني شغل تسويق يكبر ويستمر.",
            contactDesc: "جاهز تكبّر شغلك؟ خلّينا نحقق نتائج قابلة للقياس مع بعض.",
            contactLiDetails: "تواصل معايا على LinkedIn",
            contactEmailLabel: "البريد الإلكتروني",
            contactFormName: "الاسم",
            contactFormNamePh: "اسمك بالكامل",
            contactFormEmail: "البريد الإلكتروني",
            contactFormEmailPh: "name@example.com",
            contactFormMsg: "الرسالة",
            contactFormMsgPh: "إزاي أقدر أساعدك تكبر شغلك؟",
            contactFormSubmit: "ابعت الرسالة",
            footerCopy: "2026 Mo'men Mohamed. جميع الحقوق محفوظة."
        }
    };

    function applyLanguage(lang, updateUrl = true) {
        const savedY = window.scrollY;
        const htmlEl = document.documentElement;
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', 'ltr');

        // Apply text replacements for elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const targetVal = i18nDict[lang] && i18nDict[lang][key];
            if (targetVal !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', targetVal);
                    }
                } else {
                    el.innerText = targetVal;
                }
            }
        });

        // Update language switcher button text & href
        if (langSwitcher) {
            langSwitcher.innerText = lang === 'ar' ? 'EN' : 'العربية';
            const isSubfolder = window.location.pathname.includes('/ar/');
            const targetPath = lang === 'ar' ? (isSubfolder ? 'index.html' : 'ar/index.html') : (isSubfolder ? '../index.html' : 'index.html');
            langSwitcher.setAttribute('href', targetPath);
        }

        // Update URL via pushState without reloading page
        if (updateUrl) {
            const isSubfolder = window.location.pathname.includes('/ar/');
            let targetUrl = lang === 'ar' ? (isSubfolder ? 'index.html' : 'ar/index.html') : (isSubfolder ? '../index.html' : 'index.html');
            try {
                history.pushState({ lang }, '', targetUrl);
            } catch (e) {
                console.warn('pushState not allowed on local file protocol:', e);
            }
        }

        // Preserve scroll position instantly
        window.scrollTo({ top: savedY, behavior: 'instant' });
        if (typeof updateCachedPositions === 'function') updateCachedPositions();
    }

    if (langSwitcher) {
        langSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            // Language switching temporarily disabled
            return false;
        });
    }

    // Support browser Back/Forward without page refresh
    window.addEventListener('popstate', (e) => {
        const isArPage = window.location.pathname.includes('/ar/');
        const lang = isArPage ? 'ar' : 'en';
        applyLanguage(lang, false);
    });

    // ==========================================
    // 1. Theme Toggle (Dark Mode Default)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Set initial theme from localStorage or default to dark (safeguarded against blocked storage)
    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('theme') || 'dark';
    } catch (e) {
        console.warn('Storage is blocked, defaulting to dark theme:', e);
    }
    html.setAttribute('data-theme', savedTheme);
    refreshThemeIcon(savedTheme);
    refreshFavicon(savedTheme);

    function refreshThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (!icon) return;
        if (theme === 'dark') {
            icon.className = 'bx bx-sun';
        } else {
            icon.className = 'bx bx-moon';
        }
    }

    function refreshFavicon(theme) {
        const faviconLink = document.querySelector('link[rel="icon"]');
        if (!faviconLink) return;
        const prefix = (window.location.pathname.includes('/ar/') || document.documentElement.lang === 'ar') ? '../' : '';
        if (theme === 'dark') {
            faviconLink.href = prefix + 'images/favicon-dark.svg?v=3';
        } else {
            faviconLink.href = prefix + 'images/favicon-light.svg?v=3';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            try {
                localStorage.setItem('theme', newTheme);
            } catch (e) {
                console.warn('Storage is blocked, theme preference not saved:', e);
            }
            refreshThemeIcon(newTheme);
            refreshFavicon(newTheme);
        });
    }

    // ==========================================
    // 2. Mobile Menu Toggle
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const hamburgerIcon = document.querySelector('.hamburger i');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.classList.remove('bx-menu');
            hamburgerIcon.classList.add('bx-x');
        } else {
            hamburgerIcon.classList.remove('bx-x');
            hamburgerIcon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('bx-x');
            hamburgerIcon.classList.add('bx-menu');
        });
    });

    // ==========================================================================
        // 3. Sticky Header & Active Link Highlighting (Optimized with cached positions & RAF)
        // ==========================================================================
        const header = document.querySelector('.header');
        const sections = Array.from(document.querySelectorAll('section'));
        const floatingWhatsapp = document.getElementById('floating-whatsapp');
        const aboutSection = document.getElementById('about');
        const contactSection = document.getElementById('contact');
        const footer = document.querySelector('.footer');
    
        let sectionPositions = [];
        let aboutOffsetTop = 0;
        let contactOffsetTop = Infinity;
        let footerOffsetTop = Infinity;
        let windowHeight = window.innerHeight;
    
        function updateCachedPositions() {
            windowHeight = window.innerHeight;
            sectionPositions = sections.map(sec => ({
                id: sec.getAttribute('id'),
                top: sec.offsetTop
            }));
            if (aboutSection) aboutOffsetTop = aboutSection.offsetTop;
            if (contactSection) contactOffsetTop = contactSection.offsetTop;
            if (footer) footerOffsetTop = footer.offsetTop;
        }
    
        updateCachedPositions();
        window.addEventListener('resize', () => {
            updateCachedPositions();
            onScrollTick();
        }, { passive: true });
    
        let scrollTicking = false;
        let lastActiveSection = '';
        let isHeaderScrolled = false;
        let isWhatsAppVisible = false;
    
        function onScrollTick() {
            const scrollY = window.scrollY;
    
            // Sticky Header
            const shouldScroll = scrollY > 50;
            if (shouldScroll !== isHeaderScrolled) {
                isHeaderScrolled = shouldScroll;
                if (header) {
                    if (shouldScroll) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                }
            }
    
            // Active Link Highlighting
            let current = '';
            for (let i = 0; i < sectionPositions.length; i++) {
                if (scrollY >= (sectionPositions[i].top - 200)) {
                    current = sectionPositions[i].id;
                }
            }
    
            if (current !== lastActiveSection) {
                lastActiveSection = current;
                navLinksItems.forEach(link => {
                    const href = link.getAttribute('href');
                    if (current && href && href.includes(current)) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
    
            // Floating WhatsApp visibility logic
            if (floatingWhatsapp && aboutSection) {
                const aboutTop = aboutOffsetTop - scrollY;
                const contactTop = contactOffsetTop - scrollY;
                const footerTop = footerOffsetTop - scrollY;
    
                const isPastAbout = aboutTop <= (windowHeight * 0.6);
                const isAtContactOrFooter = (contactTop <= windowHeight * 0.6) || (footerTop <= windowHeight - 20);
                const shouldBeVisible = isPastAbout && !isAtContactOrFooter;
    
                if (shouldBeVisible !== isWhatsAppVisible) {
                    isWhatsAppVisible = shouldBeVisible;
                    if (shouldBeVisible) {
                        floatingWhatsapp.classList.add('is-visible');
                    } else {
                        floatingWhatsapp.classList.remove('is-visible');
                    }
                }
            }
    
            scrollTicking = false;
        }
    
        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                scrollTicking = true;
                requestAnimationFrame(onScrollTick);
            }
        }, { passive: true });

    // ==========================================
    // 4. Scroll Animations (Intersection Observer)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px 80px 0px', // Anticipate reveal 80px before element enters viewport
        threshold: 0 // Trigger immediately on first pixel of intersection
    };

    // Observer for scroll-triggered entrance animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const scrollObserver = ('IntersectionObserver' in window)
        ? new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions)
        : null;

    function checkAndRevealElement(element) {
        if (!element || element.classList.contains('is-visible')) return true;
        const rect = element.getBoundingClientRect();
        const triggerLine = (window.innerHeight || document.documentElement.clientHeight) + 80;
        if (rect.top <= triggerLine && rect.bottom >= 0) {
            element.classList.add('is-visible');
            if (scrollObserver) {
                try { scrollObserver.unobserve(element); } catch (e) {}
            }
            return true;
        }
        return false;
    }

    function startScrollObserver() {
        if (!scrollObserver) {
            // Immediate fallback for browsers without IntersectionObserver
            animateElements.forEach(el => el.classList.add('is-visible'));
            return;
        }

        animateElements.forEach(element => {
            if (!checkAndRevealElement(element)) {
                scrollObserver.observe(element);
            }
        });
    }

    // Initialize scroll observer immediately so elements in/near viewport are revealed promptly
    startScrollObserver();

    // Passive scroll, resize, and orientation fallback ensures content never stays hidden
    function checkScrollAnimationFallback() {
        let allVisible = true;
        animateElements.forEach(el => {
            if (!el.classList.contains('is-visible')) {
                if (!checkAndRevealElement(el)) {
                    allVisible = false;
                }
            }
        });
        if (allVisible) {
            window.removeEventListener('scroll', checkScrollAnimationFallback);
            window.removeEventListener('resize', checkScrollAnimationFallback);
        }
    }
    window.addEventListener('scroll', checkScrollAnimationFallback, { passive: true });
    window.addEventListener('resize', checkScrollAnimationFallback, { passive: true });
    window.addEventListener('orientationchange', checkScrollAnimationFallback, { passive: true });

    // Ensure anchor jump navigation reveals target section elements promptly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', () => {
            setTimeout(checkScrollAnimationFallback, 250);
            setTimeout(checkScrollAnimationFallback, 700);
        });
    });

    // Function to initialize startup flicker elements with random durations and delays
    function startStartupFlicker() {
        const animations = [
            'neon-startup-1',
            'neon-startup-2',
            'neon-startup-3',
            'neon-startup-4'
        ];

        document.querySelectorAll('.startup-flicker').forEach(el => {
            if (el.closest('#thank-you')) return;
            // Select a random keyframe animation from the 4 variations
            const randomAnim = animations[Math.floor(Math.random() * animations.length)];
            // Set random duration between 0.6s and 1.0s
            const duration = (0.6 + Math.random() * 0.4).toFixed(2) + 's';
            // Set random delay between 0s and 0.10s (extremely responsive!)
            const delay = (Math.random() * 0.1).toFixed(2) + 's';
            
            el.style.animationName = randomAnim;
            el.style.animationDuration = duration;
            el.style.animationDelay = delay;
            el.style.animationTimingFunction = 'linear';
            el.style.animationFillMode = 'forwards';
            
            el.addEventListener('animationend', () => {
                el.classList.remove('startup-flicker');
                // Clean up inline styles so hover effects/transitions are not overridden
                el.style.animationName = '';
                el.style.animationDuration = '';
                el.style.animationDelay = '';
                el.style.animationTimingFunction = '';
                el.style.animationFillMode = '';
                el.style.opacity = '';
            }, { once: true });
        });

        // Safety timeout: ensure hero flicker elements are visible even if animationend fails
        setTimeout(() => {
            document.querySelectorAll('.startup-flicker').forEach(el => {
                if (el.closest('#thank-you')) return;
                el.classList.remove('startup-flicker');
                el.style.opacity = '1';
            });
        }, 1500);
    }

    // Subtle one-time flicker for the Hero portrait after image loads
        function triggerHeroFlicker() {
            const heroPortrait = document.querySelector('.hero-portrait');
            if (!heroPortrait || heroPortrait.classList.contains('flicker-active')) return;
            heroPortrait.classList.add('flicker-active');
            heroPortrait.addEventListener('animationend', () => {
                heroPortrait.classList.remove('flicker-active');
            }, { once: true });
        }
    
        // Preloader fade-out and destruction logic (Lightweight, visible briefly without artificial long delay)
        const preloader = document.getElementById('preloader');
        let preloaderHandled = false;
        if (preloader) {
            const startTime = Date.now();
            function handlePreloaderRemoval() {
                if (preloaderHandled) return;
                preloaderHandled = true;
                const elapsed = Date.now() - startTime;
                const minDisplayTime = 1000; // Brief display (300ms) to ensure loading screen appears cleanly
                const remaining = Math.max(0, minDisplayTime - elapsed);
    
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    triggerHeroFlicker();
                    startStartupFlicker();
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(startScrollObserver, { timeout: 400 });
                    } else {
                        setTimeout(startScrollObserver, 40);
                    }
                    setTimeout(() => {
                        if (preloader.parentNode) preloader.remove();
                    }, 350);
                }, remaining);
            }
    
            handlePreloaderRemoval();
    } else {
        triggerHeroFlicker();
        // Fallback if preloader is not in DOM
        startStartupFlicker();
        startScrollObserver();
    }

    // ==========================================

    // Industry Accordion (outer level)
    // =================================
    const industryHeaders = document.querySelectorAll('.industry-accordion-header');
    industryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.industry-accordion-item');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
            header.setAttribute('aria-expanded', !isActive);
            if (!isActive) {
                detectCampaignOrientations();
            }
            if (!isActive && typeof checkAndLoadVisibleLandingIframes === 'function') {
                setTimeout(checkAndLoadVisibleLandingIframes, 150);
            }
        });
    });

    // Campaign Accordion & Lightbox Functionality
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.campaign-accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.campaign-accordion-item');
            const isActive = item.classList.contains('active');
            
            // Toggle clicked item
            item.classList.toggle('active', !isActive);
            header.setAttribute('aria-expanded', !isActive);
            if (!isActive) {
                detectCampaignOrientations();
            }
        });
    });

    // =========================================================================
    // Automatic Campaign Layout Orientation Detection
    // Automatically detects natural image dimensions (naturalHeight vs naturalWidth)
    // and applies 'layout-portrait' or 'layout-landscape' classes.
    // Never classifies images manually.
    // =========================================================================
    function detectCampaignOrientations() {
        const layouts = document.querySelectorAll('.campaign-content-layout');
        layouts.forEach(layout => {
            if (layout.classList.contains('brand-layout-balanced')) return;
            const img = layout.querySelector('.campaign-screenshot, img');
            if (!img) return;

            function applyOrientation() {
                if (img.naturalWidth && img.naturalHeight) {
                    const isPortrait = img.naturalHeight > img.naturalWidth;
                    if (isPortrait) {
                        layout.classList.add('layout-portrait');
                        if (!layout.querySelector('.campaign-brief-col')) {
                            layout.classList.add('no-brief');
                        }
                        layout.classList.remove('layout-landscape');
                        layout.setAttribute('data-orientation', 'portrait');
                    } else {
                        layout.classList.add('layout-landscape');
                        layout.classList.remove('layout-portrait');
                        layout.classList.remove('no-brief');
                        layout.setAttribute('data-orientation', 'landscape');
                    }
                }
            }

            if (img.complete && img.naturalWidth > 0) {
                applyOrientation();
            } else {
                img.addEventListener('load', applyOrientation, { once: true });
            }
        });
    }

    // Run orientation detection immediately and on window load
    detectCampaignOrientations();
    window.addEventListener('load', detectCampaignOrientations);

    // Zoom badge controls: ensures clicking badge/icon triggers lightbox reliably on mobile & desktop
    function initZoomBadgeControls() {
        document.querySelectorAll('.campaign-image-wrapper').forEach(wrapper => {
            const badge = wrapper.querySelector('.zoom-badge');
            const img = wrapper.querySelector('.campaign-screenshot, img');
            if (!badge) return;

            function handleZoom(e) {
                e.stopPropagation();
                const onclickAttr = wrapper.getAttribute('onclick');
                if (onclickAttr) {
                    try {
                        new Function(onclickAttr).call(wrapper);
                        return;
                    } catch (err) {}
                }
                if (window.openLightbox && img && img.src) {
                    window.openLightbox(img.src, img.alt || '');
                }
            }

            badge.addEventListener('click', handleZoom);
            badge.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleZoom(e);
                }
            });
        });
    }
    initZoomBadgeControls();

    // Campaign sub-tabs (inside Seha App)
    const tabButtons = document.querySelectorAll('.campaign-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const container = btn.closest('.campaign-accordion-item');
            const targetId = btn.getAttribute('data-tab');

            // Deactivate all sibling tabs & contents
            container.querySelectorAll('.campaign-tab-btn').forEach(b => b.classList.remove('active'));
            container.querySelectorAll('.campaign-tab-content').forEach(c => c.classList.remove('active'));

            // Activate target
            btn.classList.add('active');
            const targetContent = container.querySelector('#' + targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Lightbox functions (attached to window for inline onclick handlers)
    window.openLightbox = function(src, caption) {
        const modal = document.getElementById('campaign-lightbox');
        const img = document.getElementById('lightbox-img');
        const cap = document.getElementById('lightbox-caption');
        if (modal && img) {
            img.src = src;
            if (cap) cap.textContent = caption || '';
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function(e) {
        if (e) {
            if (e.target.id === 'lightbox-img' || e.target.closest('#lightbox-img')) {
                return; // don't close if clicking the image itself
            }
        }
        const modal = document.getElementById('campaign-lightbox');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                const img = document.getElementById('lightbox-img');
                if (img) img.src = '';
            }, 300);
            document.body.style.overflow = '';
        }
    };

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeLightbox();
        }
    });

    // ==========================================
    // Selected Work Filter Logic (Ads vs Landing Pages)
    // ==========================================
    function initProjectFilters() {
        const filterBar = document.querySelector('.projects-filter-bar');
        if (!filterBar) return;

        const filterBtns = filterBar.querySelectorAll('.project-filter-btn');
        const industryItems = document.querySelectorAll('.industry-accordion-item');
        const adsCards = document.querySelectorAll('.campaign-accordion-item[data-category="ads"]');
        const landingCards = document.querySelectorAll('.landing-page-card[data-category="landing-pages"]');

        // Dynamic count verification & update based on actual unique projects
        const countAds = adsCards.length;
        const countLanding = landingCards.length;
        const countAll = countAds + countLanding;

        const btnAllCount = filterBar.querySelector('[data-filter="all"] .filter-count');
        const btnAdsCount = filterBar.querySelector('[data-filter="ads"] .filter-count');
        const btnLpCount = filterBar.querySelector('[data-filter="landing-pages"] .filter-count');

        if (btnAllCount) btnAllCount.textContent = countAll;
        if (btnAdsCount) btnAdsCount.textContent = countAds;
        if (btnLpCount) btnLpCount.textContent = countLanding;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');

                // Update active button state & accessibility attributes
                filterBtns.forEach(b => {
                    const isActive = (b === btn);
                    b.classList.toggle('active', isActive);
                    b.setAttribute('aria-selected', isActive ? 'true' : 'false');
                });

                // Filter industry accordions
                industryItems.forEach(item => {
                    const cat = item.getAttribute('data-category');
                    if (filterValue === 'all') {
                        item.classList.remove('filter-hidden');
                    } else if (filterValue === 'ads') {
                        if (cat === 'ads') {
                            item.classList.remove('filter-hidden');
                        } else {
                            item.classList.add('filter-hidden');
                        }
                    } else if (filterValue === 'landing-pages') {
                        if (cat === 'landing-pages') {
                            item.classList.remove('filter-hidden');
                            // Auto expand landing pages accordion so all 8 cards are immediately visible
                            item.classList.add('active');
                            const header = item.querySelector('.industry-accordion-header');
                            if (header) header.setAttribute('aria-expanded', 'true');
                        } else {
                            item.classList.add('filter-hidden');
                        }
                    }
                });

                // If landing-pages filter was selected, check and load visible landing iframes
                if (filterValue === 'landing-pages' || filterValue === 'all') {
                    if (typeof checkAndLoadVisibleLandingIframes === 'function') {
                        checkAndLoadVisibleLandingIframes();
                    }
                }
            });
        });
    }

    // ==========================================
    // Staggered Landing Page Iframe Lazy Loading (Viewport-Based)
    // ==========================================
    let landingIframeObserver = null;

    function loadSingleLandingIframe(iframe) {
        if (!iframe || iframe.src) return;
        const dataSrc = iframe.getAttribute('data-src');
        if (!dataSrc) return;

        const viewport = iframe.closest('.landing-preview-viewport');
        const loader = viewport ? viewport.querySelector('.landing-preview-loader') : null;

        iframe.onload = () => {
            if (loader) loader.classList.add('loaded');
        };

        // Safety fallback: ensure loader hides even if external resources take long
        setTimeout(() => {
            if (loader && !loader.classList.contains('loaded')) {
                loader.classList.add('loaded');
            }
        }, 3500);

        iframe.src = dataSrc;
    }

    function checkAndLoadVisibleLandingIframes() {
        const cards = document.querySelectorAll('.landing-page-card');
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const margin = 250;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            // Check if card is within 250px of viewport vertically
            if (rect.top <= viewportHeight + margin && rect.bottom >= -margin) {
                const iframe = card.querySelector('.landing-card-iframe[data-src]');
                if (iframe && !iframe.src) {
                    loadSingleLandingIframe(iframe);
                    if (landingIframeObserver) {
                        landingIframeObserver.unobserve(card);
                    }
                }
            }
        });
    }

    function initLandingPageLazyLoading() {
        const cards = document.querySelectorAll('.landing-page-card');
        if (!cards.length) return;

        if ('IntersectionObserver' in window) {
            landingIframeObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const card = entry.target;
                        const iframe = card.querySelector('.landing-card-iframe[data-src]');
                        if (iframe && !iframe.src) {
                            loadSingleLandingIframe(iframe);
                        }
                        obs.unobserve(card);
                    }
                });
            }, {
                root: null,
                rootMargin: '250px 0px 250px 0px',
                threshold: 0.01
            });

            cards.forEach(card => landingIframeObserver.observe(card));
        } else {
            // Fallback for browsers without IntersectionObserver
            cards.forEach(card => {
                const iframe = card.querySelector('.landing-card-iframe[data-src]');
                if (iframe) loadSingleLandingIframe(iframe);
            });
        }

        // Viewport scroll listener fallback ensures mobile touch scrolling always triggers loading
        window.addEventListener('scroll', checkAndLoadVisibleLandingIframes, { passive: true });
    }

    // ==========================================
    // Mobile Touch Scroll Guard (Fixes Iframe Scroll Trapping)
    // ==========================================
    function initMobileScrollGuard() {
        const guards = document.querySelectorAll('.landing-scroll-guard');
        guards.forEach(guard => {
            guard.addEventListener('click', (e) => {
                e.stopPropagation();
                const viewport = guard.closest('.landing-preview-viewport');
                if (viewport) {
                    // Deactivate all other interacting viewports first
                    document.querySelectorAll('.landing-preview-viewport.interacting').forEach(vp => {
                        if (vp !== viewport) vp.classList.remove('interacting');
                    });
                    viewport.classList.add('interacting');
                }
            });
        });

        // Click outside any preview viewport restores normal page scrolling
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.landing-preview-viewport')) {
                document.querySelectorAll('.landing-preview-viewport.interacting').forEach(vp => {
                    vp.classList.remove('interacting');
                });
            }
        });

        // Window scroll restores guard so continuing to scroll the page is frictionless
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.landing-preview-viewport.interacting').forEach(vp => {
                vp.classList.remove('interacting');
            });
        }, { passive: true });
    }

    // =========================================================================
    // Clickable Client Logos: Smooth Scroll, Accordion Auto-Expand & Highlight
    // =========================================================================
    function initClickableClients() {
        const clientCards = document.querySelectorAll('.client-card[data-project-id], .client-card[href^="#project-"]');
        if (!clientCards.length) return;

        function navigateToProject(targetId) {
            if (!targetId) return;
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            // 1. Expand Industry Accordion if closed
            const industryItem = targetEl.closest('.industry-accordion-item');
            if (industryItem && !industryItem.classList.contains('active')) {
                industryItem.classList.add('active');
                const indHeader = industryItem.querySelector('.industry-accordion-header');
                if (indHeader) indHeader.setAttribute('aria-expanded', 'true');
            }

            // 2. Expand Campaign Accordion if closed
            if (!targetEl.classList.contains('active')) {
                targetEl.classList.add('active');
                const campHeader = targetEl.querySelector('.campaign-accordion-header');
                if (campHeader) campHeader.setAttribute('aria-expanded', 'true');
                if (typeof detectCampaignOrientations === 'function') {
                    detectCampaignOrientations();
                }
            }

            // 3. Smooth scroll with sticky navbar offset
            setTimeout(() => {
                const header = document.querySelector('.header');
                const navHeight = header ? header.offsetHeight : 80;
                const elementRect = targetEl.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const targetY = Math.max(0, absoluteElementTop - navHeight - 16);

                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });

                // 4. Trigger brief highlight pulse
                targetEl.classList.remove('project-target-highlight');
                void targetEl.offsetWidth; // Force reflow
                targetEl.classList.add('project-target-highlight');
                setTimeout(() => {
                    targetEl.classList.remove('project-target-highlight');
                }, 2300);
            }, 60);
        }

        clientCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = card.getAttribute('data-project-id') || 
                                (card.getAttribute('href') || '').replace(/^#/, '');
                navigateToProject(targetId);
            });

            // Keyboard accessibility for spacebar
            card.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        // Deep linking: support hash in URL on page load only if intentional direct navigation
        const isReload = window.performance && 
            window.performance.getEntriesByType && 
            window.performance.getEntriesByType('navigation')[0] && 
            window.performance.getEntriesByType('navigation')[0].type === 'reload';

        if (!isReload && window.location.hash && window.location.hash.startsWith('#project-')) {
            const hashId = window.location.hash.slice(1);
            setTimeout(() => {
                navigateToProject(hashId);
            }, 400);
        }
    }

    // Initialize Projects Filtering, Staggered Lazy Loading, Scroll Guard & Clickable Clients
    initProjectFilters();
    initLandingPageLazyLoading();
    initMobileScrollGuard();
    initClickableClients();

    // ==========================================
    // Contact Section Rocket Animation
    // Launches every time Contact section enters viewport
    // ==========================================
    const rocketContact = document.getElementById('contact');
    if (rocketContact) {
        let isContactVisible = false;
        const rocketObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!isContactVisible) {
                        isContactVisible = true;
                        rocketContact.classList.add('rocket-launched');
                    }
                } else {
                    if (isContactVisible) {
                        isContactVisible = false;
                        rocketContact.classList.remove('rocket-launched');
                    }
                }
            });
        }, { threshold: 0.02, rootMargin: '0px 0px 60px 0px' });
        rocketObserver.observe(rocketContact);
    }


    // ==========================================
    // Creative Content & Video Production (Elyumn Reels)
    // Lazy loading, single video playback, controls
    // ==========================================
    function initPortfolioVideos() {
        const videoWrappers = document.querySelectorAll('.video-wrapper');
        if (!videoWrappers.length) return;

        videoWrappers.forEach(wrapper => {
            const video = wrapper.querySelector('.portfolio-video');
            const playBtn = wrapper.querySelector('.video-play-btn');
            if (!video) return;

            function startPlayback() {
                if (!video.src) {
                    const source = video.getAttribute('data-src');
                    if (source) {
                        video.src = source;
                        video.load();
                    }
                }
                video.play().catch(err => {});
            }

            if (playBtn) {
                playBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    startPlayback();
                });
            }

            wrapper.addEventListener('click', (e) => {
                if (!wrapper.classList.contains('has-started')) {
                    if (e.target !== video) {
                        startPlayback();
                    }
                }
            });

            video.addEventListener('click', () => {
                if (!video.src) {
                    startPlayback();
                }
            });

            video.addEventListener('play', () => {
                wrapper.classList.add('is-playing', 'has-started');
                // Pause all other videos on the page
                document.querySelectorAll('.portfolio-video').forEach(other => {
                    if (other !== video && !other.paused) {
                        other.pause();
                    }
                });
            });

            video.addEventListener('pause', () => {
                wrapper.classList.remove('is-playing');
            });

            video.addEventListener('ended', () => {
                wrapper.classList.remove('is-playing', 'has-started');
            });
        });

        // Pause playing videos when accordion collapses
        const accordions = document.querySelectorAll('.campaign-accordion-item');
        accordions.forEach(acc => {
            const header = acc.querySelector('.campaign-accordion-header');
            if (!header) return;
            header.addEventListener('click', () => {
                setTimeout(() => {
                    const isExpanded = header.getAttribute('aria-expanded') === 'true';
                    if (!isExpanded) {
                        acc.querySelectorAll('.portfolio-video').forEach(v => {
                            if (!v.paused) v.pause();
                        });
                    }
                }, 50);
            });
        });
    }

    initPortfolioVideos();
        initThankYouFlicker();

});


    // Reusable flicker trigger for Thank You section on scroll
    function initThankYouFlicker() {
        const thankYou = document.getElementById('thank-you');
        if (!thankYou) return;

        let hasFlickered = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasFlickered) {
                    hasFlickered = true;
                    const animations = ['neon-startup-1', 'neon-startup-2', 'neon-startup-3', 'neon-startup-4'];
                    const targets = thankYou.querySelectorAll('.hero-title');
                    targets.forEach(el => {
                        const randomAnim = animations[Math.floor(Math.random() * animations.length)];
                        const duration = (0.6 + Math.random() * 0.4).toFixed(2) + 's';
                        const delay = (Math.random() * 0.1).toFixed(2) + 's';
                        el.style.animationName = randomAnim;
                        el.style.animationDuration = duration;
                        el.style.animationDelay = delay;
                        el.style.animationTimingFunction = 'linear';
                        el.style.animationFillMode = 'forwards';

                        el.addEventListener('animationend', () => {
                            el.classList.remove('startup-flicker');
                            el.style.animationName = '';
                            el.style.animationDuration = '';
                            el.style.animationDelay = '';
                            el.style.animationTimingFunction = '';
                            el.style.animationFillMode = '';
                            el.style.opacity = '1';
                        }, { once: true });
                    });

                    // Safety timeout: ensure thank-you flicker elements are visible even if animationend fails
                    setTimeout(() => {
                        targets.forEach(el => {
                            el.classList.remove('startup-flicker');
                            el.style.opacity = '1';
                        });
                    }, 1500);

                    const portrait = thankYou.querySelector('.hero-portrait');
                    if (portrait) {
                        portrait.classList.add('flicker-active');
                        portrait.addEventListener('animationend', () => {
                            portrait.classList.remove('flicker-active');
                        }, { once: true });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        observer.observe(thankYou);
    }
