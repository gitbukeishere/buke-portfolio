const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#primary-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageButtons = document.querySelectorAll(".language-option");

const translations = {
  en: {
    "meta.title": "Buke | Software Engineer & Cybersecurity Engineer",
    "meta.description":
      "Buke's one-page portfolio for software engineering, secure web development, cybersecurity learning, CTF practice, and hands-on projects.",
    "meta.keywords":
      "Buke, Software Engineer, Cybersecurity Engineer, Web Development, Web Security, Portfolio, CTF, Secure Coding",
    "aria.primaryNav": "Primary navigation",
    "aria.languageSwitcher": "Language switcher",
    "aria.openMenu": "Open navigation menu",
    "aria.closeMenu": "Close navigation menu",
    "aria.primaryActions": "Primary actions",
    "aria.focusAreas": "Focus areas",
    "aria.profileSummary": "Profile summary",
    "aria.highlights": "Professional highlights",
    "aria.loginDemo": "Secure Login Page live demo placeholder",
    "aria.aiDemo": "AI Detector Platform live demo placeholder",
    "aria.portfolioDemo": "Portfolio Website live demo placeholder",
    "alt.profile": "Professional profile placeholder for Buke",
    "alt.project1": "Secure login page project preview",
    "alt.project2": "AI detector platform project preview",
    "alt.project3": "Portfolio website project preview",
    "skip": "Skip to content",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.cybersecurity": "Cybersecurity",
    "nav.contact": "Contact",
    "hero.eyebrow": "Personal Portfolio",
    "hero.title": "Software Engineer & Cybersecurity Engineer",
    "hero.intro":
      "I build secure, reliable, and user-focused web applications while continuously improving my cybersecurity skills through practical labs and projects.",
    "hero.projects": "View Projects",
    "hero.contact": "Contact Me",
    "hero.cv": "Download CV",
    "hero.badge1": "Web Development",
    "hero.badge2": "Security",
    "hero.badge3": "Problem Solving",
    "hero.status": "Building practical software and security projects",
    "about.eyebrow": "About",
    "about.title": "Focused on reliable software and secure habits.",
    "about.summary":
      "I am developing my skills across software engineering and cybersecurity, with a focus on clean implementation, secure coding, web applications, and practical security labs.",
    "about.copy1":
      "My work combines frontend development fundamentals with a growing understanding of application security. I enjoy building responsive websites, learning how systems fail, and improving projects through careful review, testing, and iteration.",
    "about.copy2":
      "I am currently practicing cybersecurity through CTF challenges, web security labs, networking exercises, and writeups that help turn theory into repeatable skills.",
    "about.card1.title": "Clean Code",
    "about.card1.text": "Readable structure, practical naming, and simple solutions that are easy to maintain.",
    "about.card2.title": "Secure Systems",
    "about.card2.text": "Learning secure defaults, safer authentication flows, and common web risks.",
    "about.card3.title": "Continuous Learning",
    "about.card3.text": "Practicing through labs, small projects, documentation, and honest iteration.",
    "skills.eyebrow": "Skills",
    "skills.title": "Core skills I am building and applying.",
    "skills.summary": "Grouped by practical engineering, web development, cybersecurity, and daily tools.",
    "skills.programming": "Programming",
    "skills.web": "Web Development",
    "skills.cyber": "Cybersecurity",
    "skills.tools": "Tools",
    "skills.responsive": "Responsive Design",
    "skills.git": "Git & GitHub",
    "skills.api": "API Basics",
    "skills.firebase": "Firebase Basics",
    "skills.webSecurity": "Web Security",
    "skills.networking": "Networking Basics",
    "skills.linux": "Linux Basics",
    "skills.ctf": "CTF Practice",
    "skills.vulnerability": "Vulnerability Analysis",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected engineering and security practice projects.",
    "projects.summary": "Each project is written with honest scope and beginner-friendly security notes.",
    "projects.login.title": "Secure Login Page",
    "projects.login.desc":
      "A responsive login interface focused on clear validation, accessible form states, and safer authentication UI patterns.",
    "projects.login.stack": "HTML · CSS · JavaScript",
    "projects.login.note": "Security note: explores input validation and safe error messaging.",
    "projects.ai.title": "AI Detector Platform",
    "projects.ai.desc":
      "A concept platform layout for analyzing submitted content, displaying confidence results, and explaining decisions clearly.",
    "projects.ai.stack": "HTML · CSS · JavaScript · API Basics",
    "projects.ai.note": "Security note: considers privacy, data handling, and user trust.",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.desc":
      "This static one-page website built for GitHub Pages with responsive sections, accessible navigation, and lightweight JavaScript.",
    "projects.portfolio.stack": "HTML5 · CSS3 · Vanilla JavaScript",
    "projects.portfolio.note": "Security note: no backend, no database, and no client secrets.",
    "projects.ctf.title": "CTF Writeup Collection",
    "projects.ctf.desc":
      "A growing set of learning notes from CTF practice, web security labs, and networking fundamentals.",
    "projects.ctf.stack": "Markdown · Linux · Web Security",
    "projects.ctf.note": "Security note: focuses on learning process and responsible practice.",
    "projects.github": "GitHub",
    "projects.demo": "Live Demo",
    "projects.writeups": "Writeups",
    "cyber.eyebrow": "Cybersecurity",
    "cyber.title": "Hands-on security learning without exaggeration.",
    "cyber.summary":
      "I am practicing cybersecurity through structured labs, CTF-style challenges, networking basics, and careful writeups.",
    "cyber.practiceTitle": "Practice Areas",
    "cyber.practice1": "CTF and lab practice",
    "cyber.practice2": "TryHackMe profile placeholder",
    "cyber.practice3": "HackTheBox profile placeholder",
    "cyber.practice4": "Security writeups and notes",
    "cyber.writeups": "View security writeups",
    "cyber.webTitle": "Web Security Topics",
    "cyber.networkTitle": "Networking Topics",
    "cyber.sameOrigin": "Same-Origin Policy",
    "cyber.sql": "SQL Injection basics",
    "cyber.xss": "XSS basics",
    "cyber.handshake": "3-way handshake",
    "cyber.udpTcp": "UDP / TCP basics",
    "cyber.ports": "Ports and services",
    "cyber.packet": "Packet analysis",
    "cyber.linuxNetworking": "Linux networking",
    "cyber.scanning": "Scanning basics",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's connect about software and security projects.",
    "contact.summary": "Use the links below for collaboration, project discussion, or professional contact.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.profile": "Profile link",
    "contact.button": "Contact Me",
    "footer.text": "© 2026 Buke. Built with HTML, CSS, JavaScript, and GitHub Pages.",
  },
  mn: {
    "meta.title": "Buke | Програм хангамж ба кибер аюулгүй байдлын инженер",
    "meta.description":
      "Buke-ийн програм хангамж, найдвартай вэб хөгжүүлэлт, кибер аюулгүй байдлын дадлага, CTF болон төслүүдийн нэг хуудаст портфолио.",
    "meta.keywords":
      "Buke, Програм хангамжийн инженер, Кибер аюулгүй байдлын инженер, Вэб хөгжүүлэлт, Вэб аюулгүй байдал, Портфолио, CTF",
    "aria.primaryNav": "Үндсэн цэс",
    "aria.languageSwitcher": "Хэл солих",
    "aria.openMenu": "Цэс нээх",
    "aria.closeMenu": "Цэс хаах",
    "aria.primaryActions": "Үндсэн үйлдлүүд",
    "aria.focusAreas": "Гол чиглэлүүд",
    "aria.profileSummary": "Товч танилцуулга",
    "aria.highlights": "Мэргэжлийн онцлогууд",
    "aria.loginDemo": "Secure Login Page төслийн демо холбоос",
    "aria.aiDemo": "AI Detector Platform төслийн демо холбоос",
    "aria.portfolioDemo": "Portfolio Website төслийн демо холбоос",
    "alt.profile": "Buke-ийн мэргэжлийн зураг орлуулагч",
    "alt.project1": "Secure login page төслийн урьдчилсан зураг",
    "alt.project2": "AI detector platform төслийн урьдчилсан зураг",
    "alt.project3": "Portfolio website төслийн урьдчилсан зураг",
    "skip": "Агуулга руу алгасах",
    "nav.home": "Нүүр",
    "nav.about": "Тухай",
    "nav.skills": "Ур чадвар",
    "nav.projects": "Төслүүд",
    "nav.cybersecurity": "Кибер аюулгүй байдал",
    "nav.contact": "Холбоо барих",
    "hero.eyebrow": "Хувийн портфолио",
    "hero.title": "Програм хангамж ба кибер аюулгүй байдлын инженер",
    "hero.intro":
      "Би найдвартай, хэрэглэгч төвтэй, аюулгүй вэб аппликейшн бүтээж, практик лаборатори болон төслүүдээр кибер аюулгүй байдлын ур чадвараа тасралтгүй сайжруулж байна.",
    "hero.projects": "Төслүүд үзэх",
    "hero.contact": "Холбоо барих",
    "hero.cv": "CV татах",
    "hero.badge1": "Вэб хөгжүүлэлт",
    "hero.badge2": "Аюулгүй байдал",
    "hero.badge3": "Асуудал шийдвэрлэх",
    "hero.status": "Програм хангамж болон аюулгүй байдлын практик төслүүд бүтээж байна",
    "about.eyebrow": "Тухай",
    "about.title": "Найдвартай програм хангамж, аюулгүй дадалд төвлөрдөг.",
    "about.summary":
      "Би програм хангамжийн инженерчлэл болон кибер аюулгүй байдлын ур чадвараа хөгжүүлж, цэвэр хэрэгжүүлэлт, secure coding, вэб аппликейшн, практик security lab-д анхаарч байна.",
    "about.copy1":
      "Миний ажил frontend хөгжүүлэлтийн суурь мэдлэгийг аппликейшний аюулгүй байдлын ойлголттой хослуулдаг. Responsive website бүтээх, систем хэрхэн алдаа гаргадгийг ойлгох, review, testing, iteration-аар төслөө сайжруулах дуртай.",
    "about.copy2":
      "Одоогоор CTF сорилт, web security lab, networking дасгал болон writeup-уудаар кибер аюулгүй байдлыг практик дээр сурч байна.",
    "about.card1.title": "Цэвэр код",
    "about.card1.text": "Уншихад ойлгомжтой бүтэц, зөв нэршил, арчлахад хялбар энгийн шийдэл.",
    "about.card2.title": "Аюулгүй систем",
    "about.card2.text": "Secure default, илүү аюулгүй authentication flow, түгээмэл вэб эрсдэлүүдийг судалж байна.",
    "about.card3.title": "Тасралтгүй суралцах",
    "about.card3.text": "Lab, жижиг төсөл, documentation, бодит давталтаар ур чадвараа хөгжүүлж байна.",
    "skills.eyebrow": "Ур чадвар",
    "skills.title": "Бүтээж, ашиглаж буй гол ур чадварууд.",
    "skills.summary": "Програмчлал, вэб хөгжүүлэлт, кибер аюулгүй байдал, өдөр тутмын хэрэгслүүдээр ангилсан.",
    "skills.programming": "Програмчлал",
    "skills.web": "Вэб хөгжүүлэлт",
    "skills.cyber": "Кибер аюулгүй байдал",
    "skills.tools": "Хэрэгслүүд",
    "skills.responsive": "Responsive Design",
    "skills.git": "Git & GitHub",
    "skills.api": "API суурь",
    "skills.firebase": "Firebase суурь",
    "skills.webSecurity": "Вэб аюулгүй байдал",
    "skills.networking": "Сүлжээний суурь",
    "skills.linux": "Linux суурь",
    "skills.ctf": "CTF дадлага",
    "skills.vulnerability": "Эмзэг байдлын шинжилгээ",
    "projects.eyebrow": "Төслүүд",
    "projects.title": "Инженерчлэл болон аюулгүй байдлын сонгосон практик төслүүд.",
    "projects.summary": "Төсөл бүрийг бодит цар хүрээтэй, эхлэн суралцагчид ойлгомжтой security note-той бичсэн.",
    "projects.login.title": "Аюулгүй нэвтрэх хуудас",
    "projects.login.desc":
      "Form validation, accessibility state, authentication UI-ийн илүү аюулгүй хэв маягт төвлөрсөн responsive login interface.",
    "projects.login.stack": "HTML · CSS · JavaScript",
    "projects.login.note": "Security note: input validation болон аюулгүй error message-ийг судалсан.",
    "projects.ai.title": "AI Detector Platform",
    "projects.ai.desc":
      "Илгээсэн контентыг шинжлэх, confidence result харуулах, шийдвэрийг ойлгомжтой тайлбарлах concept platform layout.",
    "projects.ai.stack": "HTML · CSS · JavaScript · API суурь",
    "projects.ai.note": "Security note: privacy, data handling, user trust-ийг харгалзсан.",
    "projects.portfolio.title": "Портфолио вебсайт",
    "projects.portfolio.desc":
      "GitHub Pages дээр ажиллах, responsive section, accessible navigation, lightweight JavaScript бүхий нэг хуудаст static website.",
    "projects.portfolio.stack": "HTML5 · CSS3 · Vanilla JavaScript",
    "projects.portfolio.note": "Security note: backend, database, client secret ашиглаагүй.",
    "projects.ctf.title": "CTF Writeup цуглуулга",
    "projects.ctf.desc":
      "CTF practice, web security lab, networking fundamentals-аас сурсан зүйлсийн өсөж буй тэмдэглэл.",
    "projects.ctf.stack": "Markdown · Linux · Web Security",
    "projects.ctf.note": "Security note: суралцах процесс болон хариуцлагатай дадлагад төвлөрсөн.",
    "projects.github": "GitHub",
    "projects.demo": "Демо",
    "projects.writeups": "Writeup",
    "cyber.eyebrow": "Кибер аюулгүй байдал",
    "cyber.title": "Хэтрүүлэггүй, практик дээр суурилсан security learning.",
    "cyber.summary":
      "Би structured lab, CTF-style challenge, networking basics, нягт writeup-аар кибер аюулгүй байдлыг дадлагажуулж байна.",
    "cyber.practiceTitle": "Дадлагын чиглэлүүд",
    "cyber.practice1": "CTF болон lab дадлага",
    "cyber.practice2": "TryHackMe profile placeholder",
    "cyber.practice3": "HackTheBox profile placeholder",
    "cyber.practice4": "Security writeup болон тэмдэглэл",
    "cyber.writeups": "Security writeup үзэх",
    "cyber.webTitle": "Вэб аюулгүй байдлын сэдвүүд",
    "cyber.networkTitle": "Сүлжээний сэдвүүд",
    "cyber.sameOrigin": "Same-Origin Policy",
    "cyber.sql": "SQL Injection суурь",
    "cyber.xss": "XSS суурь",
    "cyber.handshake": "3-way handshake",
    "cyber.udpTcp": "UDP / TCP суурь",
    "cyber.ports": "Порт болон сервис",
    "cyber.packet": "Packet analysis",
    "cyber.linuxNetworking": "Linux networking",
    "cyber.scanning": "Scanning суурь",
    "contact.eyebrow": "Холбоо барих",
    "contact.title": "Програм хангамж болон security төслөөр холбогдоорой.",
    "contact.summary": "Хамтын ажиллагаа, төсөл, мэргэжлийн холбоо барихад доорх холбоосуудыг ашиглаарай.",
    "contact.email": "Имэйл",
    "contact.linkedin": "LinkedIn",
    "contact.profile": "Профайл холбоос",
    "contact.button": "Холбоо барих",
    "footer.text": "© 2026 Buke. HTML, CSS, JavaScript болон GitHub Pages ашиглан бүтээв.",
  },
};

const textBindings = [
  [".skip-link", "skip"],
  [".nav", "aria.primaryNav", "aria-label"],
  [".language-switcher", "aria.languageSwitcher", "aria-label"],
  [".hero-actions", "aria.primaryActions", "aria-label"],
  [".badge-list", "aria.focusAreas", "aria-label"],
  [".hero-card", "aria.profileSummary", "aria-label"],
  [".highlight-grid", "aria.highlights", "aria-label"],
  [".menu-toggle", "aria.openMenu", "aria-label"],
  [".hero-card img", "alt.profile", "alt"],
  [".project-card:nth-child(1) > img", "alt.project1", "alt"],
  [".project-card:nth-child(2) > img", "alt.project2", "alt"],
  [".project-card:nth-child(3) > img", "alt.project3", "alt"],
  [".project-card:nth-child(1) .project-links a:nth-child(2)", "aria.loginDemo", "aria-label"],
  [".project-card:nth-child(2) .project-links a:nth-child(2)", "aria.aiDemo", "aria-label"],
  [".project-card:nth-child(3) .project-links a:nth-child(2)", "aria.portfolioDemo", "aria-label"],
  [".nav-link[href='#home']", "nav.home"],
  [".nav-link[href='#about']", "nav.about"],
  [".nav-link[href='#skills']", "nav.skills"],
  [".nav-link[href='#projects']", "nav.projects"],
  [".nav-link[href='#cybersecurity']", "nav.cybersecurity"],
  [".nav-link[href='#contact']", "nav.contact"],
  [".hero-content .eyebrow", "hero.eyebrow"],
  ["#hero-title", "hero.title"],
  [".hero-intro", "hero.intro"],
  [".hero-actions .btn:nth-child(1)", "hero.projects"],
  [".hero-actions .btn:nth-child(2)", "hero.contact"],
  [".hero-actions .btn:nth-child(3)", "hero.cv"],
  [".badge-list li:nth-child(1)", "hero.badge1"],
  [".badge-list li:nth-child(2)", "hero.badge2"],
  [".badge-list li:nth-child(3)", "hero.badge3"],
  [".status-panel span:nth-child(2)", "hero.status"],
  ["#about .section-heading .eyebrow", "about.eyebrow"],
  ["#about-title", "about.title"],
  ["#about .section-heading p:last-child", "about.summary"],
  [".about-copy p:nth-child(1)", "about.copy1"],
  [".about-copy p:nth-child(2)", "about.copy2"],
  [".highlight-card:nth-child(1) h3", "about.card1.title"],
  [".highlight-card:nth-child(1) p", "about.card1.text"],
  [".highlight-card:nth-child(2) h3", "about.card2.title"],
  [".highlight-card:nth-child(2) p", "about.card2.text"],
  [".highlight-card:nth-child(3) h3", "about.card3.title"],
  [".highlight-card:nth-child(3) p", "about.card3.text"],
  ["#skills .section-heading .eyebrow", "skills.eyebrow"],
  ["#skills-title", "skills.title"],
  ["#skills .section-heading p:last-child", "skills.summary"],
  [".skill-card:nth-child(1) h3", "skills.programming"],
  [".skill-card:nth-child(2) h3", "skills.web"],
  [".skill-card:nth-child(3) h3", "skills.cyber"],
  [".skill-card:nth-child(4) h3", "skills.tools"],
  [".skill-card:nth-child(2) .tag-group span:nth-child(1)", "skills.responsive"],
  [".skill-card:nth-child(2) .tag-group span:nth-child(2)", "skills.git"],
  [".skill-card:nth-child(2) .tag-group span:nth-child(3)", "skills.api"],
  [".skill-card:nth-child(2) .tag-group span:nth-child(4)", "skills.firebase"],
  [".skill-card:nth-child(3) .tag-group span:nth-child(1)", "skills.webSecurity"],
  [".skill-card:nth-child(3) .tag-group span:nth-child(2)", "skills.networking"],
  [".skill-card:nth-child(3) .tag-group span:nth-child(3)", "skills.linux"],
  [".skill-card:nth-child(3) .tag-group span:nth-child(4)", "skills.ctf"],
  [".skill-card:nth-child(3) .tag-group span:nth-child(5)", "skills.vulnerability"],
  ["#projects .section-heading .eyebrow", "projects.eyebrow"],
  ["#projects-title", "projects.title"],
  ["#projects .section-heading p:last-child", "projects.summary"],
  [".project-card:nth-child(1) h3", "projects.login.title"],
  [".project-card:nth-child(1) .project-body > p:nth-of-type(1)", "projects.login.desc"],
  [".project-card:nth-child(1) .tech-stack", "projects.login.stack"],
  [".project-card:nth-child(1) .security-note", "projects.login.note"],
  [".project-card:nth-child(2) h3", "projects.ai.title"],
  [".project-card:nth-child(2) .project-body > p:nth-of-type(1)", "projects.ai.desc"],
  [".project-card:nth-child(2) .tech-stack", "projects.ai.stack"],
  [".project-card:nth-child(2) .security-note", "projects.ai.note"],
  [".project-card:nth-child(3) h3", "projects.portfolio.title"],
  [".project-card:nth-child(3) .project-body > p:nth-of-type(1)", "projects.portfolio.desc"],
  [".project-card:nth-child(3) .tech-stack", "projects.portfolio.stack"],
  [".project-card:nth-child(3) .security-note", "projects.portfolio.note"],
  [".project-card:nth-child(4) h3", "projects.ctf.title"],
  [".project-card:nth-child(4) .project-body > p:nth-of-type(1)", "projects.ctf.desc"],
  [".project-card:nth-child(4) .tech-stack", "projects.ctf.stack"],
  [".project-card:nth-child(4) .security-note", "projects.ctf.note"],
  [".project-card .project-links a:first-child", "projects.github"],
  [".project-card:nth-child(-n+3) .project-links a:nth-child(2)", "projects.demo"],
  [".project-card:nth-child(4) .project-links a:nth-child(2)", "projects.writeups"],
  ["#cybersecurity .section-heading .eyebrow", "cyber.eyebrow"],
  ["#cyber-title", "cyber.title"],
  ["#cybersecurity .section-heading p:last-child", "cyber.summary"],
  [".cyber-panel:nth-child(1) h3", "cyber.practiceTitle"],
  [".cyber-panel:nth-child(1) li:nth-child(1)", "cyber.practice1"],
  [".cyber-panel:nth-child(1) li:nth-child(2)", "cyber.practice2"],
  [".cyber-panel:nth-child(1) li:nth-child(3)", "cyber.practice3"],
  [".cyber-panel:nth-child(1) li:nth-child(4)", "cyber.practice4"],
  [".cyber-panel:nth-child(1) .inline-link", "cyber.writeups"],
  [".cyber-panel:nth-child(2) h3", "cyber.webTitle"],
  [".cyber-panel:nth-child(2) .topic-list span:nth-child(2)", "cyber.sameOrigin"],
  [".cyber-panel:nth-child(2) .topic-list span:nth-child(5)", "cyber.sql"],
  [".cyber-panel:nth-child(2) .topic-list span:nth-child(6)", "cyber.xss"],
  [".cyber-panel:nth-child(3) h3", "cyber.networkTitle"],
  [".cyber-panel:nth-child(3) .topic-list span:nth-child(1)", "cyber.handshake"],
  [".cyber-panel:nth-child(3) .topic-list span:nth-child(2)", "cyber.udpTcp"],
  [".cyber-panel:nth-child(3) .topic-list span:nth-child(3)", "cyber.ports"],
  [".cyber-panel:nth-child(3) .topic-list span:nth-child(4)", "cyber.packet"],
  [".cyber-panel:nth-child(3) .topic-list span:nth-child(5)", "cyber.linuxNetworking"],
  [".cyber-panel:nth-child(3) .topic-list span:nth-child(6)", "cyber.scanning"],
  ["#contact .section-heading .eyebrow", "contact.eyebrow"],
  ["#contact-title", "contact.title"],
  ["#contact .section-heading p:last-child", "contact.summary"],
  [".contact-card:nth-child(1) span", "contact.email"],
  [".contact-card:nth-child(1) strong", "contactEmail"],
  [".contact-card:nth-child(3) span", "contact.linkedin"],
  [".contact-card:nth-child(3) strong", "contact.profile"],
  [".contact-action .btn", "contact.button"],
  [".footer-content p", "footer.text"],
];

translations.en.contactEmail = "bujingaravwork@gmail.com";
translations.mn.contactEmail = "bujingaravwork@gmail.com";

let currentLanguage = "en";

function getTranslation(key) {
  return translations[currentLanguage][key] || translations.en[key] || "";
}

function setContent(selector, key, attribute) {
  document.querySelectorAll(selector).forEach((element) => {
    const value = getTranslation(key);
    if (attribute) {
      element.setAttribute(attribute, value);
    } else {
      element.textContent = value;
    }
  });
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.title = getTranslation("meta.title");
  document.querySelector("meta[name='description']")?.setAttribute("content", getTranslation("meta.description"));
  document.querySelector("meta[name='keywords']")?.setAttribute("content", getTranslation("meta.keywords"));
  document.querySelector("meta[property='og:title']")?.setAttribute("content", getTranslation("meta.title"));
  document
    .querySelector("meta[property='og:description']")
    ?.setAttribute("content", getTranslation("meta.description"));

  textBindings.forEach(([selector, key, attribute]) => setContent(selector, key, attribute));

  const isOpen = navMenu.classList.contains("open");
  menuToggle.setAttribute("aria-label", getTranslation(isOpen ? "aria.closeMenu" : "aria.openMenu"));

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferredLanguage", currentLanguage);
}

function getInitialLanguage() {
  const storedLanguage = localStorage.getItem("preferredLanguage");
  if (translations[storedLanguage]) {
    return storedLanguage;
  }

  return navigator.language?.toLowerCase().startsWith("mn") ? "mn" : "en";
}

function closeMenu() {
  body.classList.remove("menu-open");
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", getTranslation("aria.openMenu"));
}

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", getTranslation(isOpen ? "aria.closeMenu" : "aria.openMenu"));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId && targetId.startsWith("#")) {
      event.preventDefault();
      document
        .querySelector(targetId)
        ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", targetId);
    }

    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu.classList.contains("open")) {
    closeMenu();
    menuToggle.focus();
  }
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      navLinks.forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      });

      activeLink?.classList.add("active");
      activeLink?.setAttribute("aria-current", "page");
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => navObserver.observe(section));

const revealTargets = document.querySelectorAll(
  ".section-heading, .highlight-card, .skill-card, .project-card, .cyber-panel, .contact-card"
);

applyLanguage(getInitialLanguage());

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    revealObserver.observe(target);
  });
}
