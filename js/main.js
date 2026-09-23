document.documentElement.classList.add("js");

const translations = {
  en: {
    "meta.title": "Bujingarav Erdenee | Cybersecurity & Software Engineer",
    "meta.description": "Portfolio of Bujingarav Erdenee, a cybersecurity and software engineer in Ulaanbaatar focused on secure systems, web development, and AI automation.",
    "meta.keywords": "Bujingarav Erdenee, cybersecurity engineer, software engineer, network security, secure web development, AI automation, Ulaanbaatar",
    "skip": "Skip to content",
    "aria.primaryNav": "Primary navigation",
    "aria.languageSwitcher": "Language switcher",
    "aria.primaryActions": "Primary actions",
    "aria.focusAreas": "Focus areas",
    "aria.keyFigures": "Key figures",
    "aria.openMenu": "Open navigation menu",
    "aria.closeMenu": "Close navigation menu",
    "alt.profile": "Bujingarav Erdenee, cybersecurity and software engineer",
    "alt.certificate": "Google Cybersecurity Professional Certificate awarded to Bujingarav Erdenee",
    "alt.steamexCertificate": "STEAMEX 2026 Certificate of Excellence awarded to Bujingarav Erdenee",
    "alt.spaceAwardCertificate": "International Space Kamp Mongolia 2025 Space Award presented to Bujingarav Erdenee",
    "alt.spaceCompletionCertificate": "International Space Kamp 2025 Award of Completion presented to Bujingarav Erdenee",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.languages": "Languages",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.cybersecurity": "Cybersecurity",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "hero.eyebrow": "Bujingarav Erdenee | Ulaanbaatar, Mongolia",
    "hero.title": "Cybersecurity Engineer & Software Engineer",
    "hero.intro": "Performance-focused engineer with 4+ years across IT support, software engineering, and AI-driven automation.",
    "hero.projects": "View Projects",
    "hero.contact": "Contact Me",
    "hero.cv": "Download CV",
    "hero.badge1": "Network Security",
    "hero.badge2": "Secure Web Development",
    "hero.badge3": "AI Automation",
    "hero.status": "Google Cybersecurity Certified | Pursuing BSc Computer Science",
    "stat.years": "Years across support, engineering & security",
    "stat.clients": "Clients supported at 95% resolution rate",
    "stat.vulns": "Fewer vulnerabilities after hardening work",
    "stat.courses": "Google cybersecurity courses completed",
    "about.eyebrow": "About",
    "about.title": "Securing systems, shipping software, automating the rest.",
    "about.summary": "Proven experience in network security, system administration, DNS/IP management, and web application development.",
    "about.copy1": "I work across the whole surface of a web product: secure delivery, coding standards, hosting, and DNS.",
    "about.copy2": "Before that I supported 200+ clients with hosting, DNS, IP, and domain issues at a 95% resolution rate.",
    "about.copy3": "I am pursuing a Bachelor of Computer Science at Huree University of ICT with a focus on cybersecurity and AI.",
    "about.card1.title": "Secure Web Delivery",
    "about.card1.text": "Custom sites with stronger engagement and fewer vulnerabilities.",
    "about.card2.title": "Infrastructure & Support",
    "about.card2.text": "Hosting, DNS, server monitoring, and security hardening.",
    "about.card3.title": "AI Automation",
    "about.card3.text": "Privacy-aware chatbots and workflow automation.",
    "skills.eyebrow": "Skills",
    "skills.title": "Technical and key skills.",
    "skills.summary": "Three practice areas, grouped the way my work actually splits.",
    "skills.cyber": "Cybersecurity & Networking",
    "skills.programming": "Programming & Development",
    "skills.ai": "AI, Automation & Ops",
    "languages.eyebrow": "Languages",
    "languages.title": "Language proficiency.",
    "languages.summary": "Working across Mongolian, English, and Russian contexts.",
    "languages.mongolian": "Mongolian",
    "languages.native": "Native language",
    "languages.english": "English",
    "languages.professional": "Professional working proficiency",
    "languages.duolingo": "Duolingo score",
    "languages.russian": "Russian",
    "languages.basic": "Basic conversational",
    "xp.eyebrow": "Experience",
    "xp.title": "Where the experience comes from.",
    "xp.summary": "Three roles, one through-line: keep systems reliable and keep them safe.",
    "xp.place": "Ulaanbaatar, MN",
    "xp.role1.dates": "September 2022 | June 2024",
    "xp.role1.title": "Software Engineer",
    "xp.role1.p1": "Designed and launched secure websites, improving client online engagement by 25%.",
    "xp.role1.p2": "Applied encryption and secure coding standards, reducing vulnerabilities by 30%.",
    "xp.role1.p3": "Integrated API automation tools, reducing manual work by 30%.",
    "xp.role2.dates": "Jan 2023 | Current",
    "xp.role2.title": "Prompt Engineering, Operations Manager",
    "xp.role2.p1": "Built AI chatbots that reduced customer response times by 40%.",
    "xp.role2.p2": "Configured secure social integrations and tested systems against data leakage.",
    "xp.role2.p3": "Implemented privacy safeguards and custom prompts for client workflows.",
    "xp.role3.dates": "Jan 2021 | Jan 2024",
    "xp.role3.title": "IT Support",
    "xp.role3.p1": "Supported 200+ clients and resolved hosting, DNS, IP, and domain issues at a 95% rate.",
    "xp.role3.p2": "Implemented server monitoring and security hardening to improve uptime.",
    "xp.role3.p3": "Created technical documentation and helped establish IT security protocols.",
    "xp.education": "Education",
    "xp.eduTitle": "Bachelor of Computer Science",
    "xp.eduOrg": "Huree University of ICT | Ulaanbaatar",
    "xp.eduDates": "Aug 2025 | Current | Focus: cybersecurity & AI",
    "xp.volunteer": "Volunteer & Awards",
    "xp.vol1": "STEAMEX 2026 | 74 volunteer hours, Certificate of Excellence",
    "xp.vol2": "International Space Kamp Mongolia 2025 | Space Award",
    "xp.vol3": "International Space Kamp | Award of Completion (2025)",
    "xp.galleryTitle": "Volunteer Certificates",
    "xp.gallerySummary": "Recognition from STEAMEX and International Space Kamp.",
    "xp.certSteam": "STEAMEX 2026 | Certificate of Excellence",
    "xp.certSpaceAward": "International Space Kamp 2025 | Space Award",
    "xp.certSpaceCompletion": "International Space Kamp 2025 | Award of Completion",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected software and cybersecurity projects.",
    "projects.summary": "Real websites, security tools, and learning writeups grouped by focus area.",
    "projects.softwareTitle": "Software Projects",
    "projects.softwareSummary": "Live websites built for ecommerce, networking, and public events.",
    "projects.cyberTitle": "Cybersecurity Projects",
    "projects.cyberSummary": "Security tools, labs, and writeups that show practical learning.",
    "projects.liveSite": "Live Site",
    "projects.writeups": "Writeups",
    "projects.resumeDetails": "Resume details",
    "project.bars.title": "Computer Electronics Ecommerce Website",
    "project.bars.desc": "Online store with clear product browsing and customer-friendly shopping flows.",
    "project.bars.stack": "Ecommerce / Web Development / UI-UX",
    "project.bars.note": "Security-aware handling of user data and checkout journeys.",
    "project.bni.title": "BNI Mongolia Business Network Website",
    "project.bni.desc": "Responsive business network website presenting community information and membership value.",
    "project.bni.stack": "Business Site / Responsive / Web Development",
    "project.bni.note": "Reliable forms and safe link handling throughout.",
    "project.wsw.title": "World Space Week 2025 Event Website",
    "project.wsw.desc": "Public event website for schedules, event details, and participation information.",
    "project.wsw.stack": "Event Website / Content Structure / Web Development",
    "project.wsw.note": "Structured public content over HTTPS with careful form handling.",
    "project.research.title": "Research and Analysis for Developing a Cyber Attack, Violation, and Crime Prevention System",
    "project.research.desc": "Research into Mongolia's legal, risk-assessment, and incident-response foundations for a national cyber-prevention system.",
    "project.research.partner": "Partner company: Digit LLC",
    "project.research.point1": "Analyzed Mongolia's cyber-security and cyber-resilience laws as prevention frameworks.",
    "project.research.point2": "Studied risk-assessment and information-security audit methods for critical infrastructure.",
    "project.research.point3": "Evaluated incident response, reporting, and cross-sector threat-information sharing requirements.",
    "project.research.stack": "Cybersecurity Research / Legal Analysis / Risk Assessment",
    "project.research.note": "Focused on preventive controls, coordinated response, and effective mitigation.",
    "project.passcheck.title": "PassCheck Password Security Tool",
    "project.passcheck.desc": "Web app that checks password strength, surfaces risk signals, and encourages safer credential habits.",
    "project.passcheck.stack": "Cybersecurity / Web App / Password Strength",
    "project.passcheck.note": "Reinforces password hygiene without retaining submitted passwords.",
    "project.ctf.title": "CTF Writeup Collection",
    "project.ctf.desc": "Learning notes covering web security labs, networking fundamentals, and common web risks.",
    "project.ctf.stack": "Markdown / Linux / Web Security",
    "project.ctf.note": "Focuses on learning process and responsible practice.",
    "cyber.eyebrow": "Cybersecurity",
    "cyber.title": "Hands-on security learning without exaggeration.",
    "cyber.summary": "Structured labs, CTF-style challenges, networking fundamentals, and careful writeups.",
    "cyber.practiceTitle": "Practice Areas",
    "cyber.practice1": "SIEM tooling and intrusion detection fundamentals",
    "cyber.practice2": "Python automation for security tasks",
    "cyber.practice3": "CTF and lab practice, working toward TryHackMe SAL1",
    "cyber.practice4": "Security writeups and notes on GitHub",
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
    "term.title": "Lab session | Practice log",
    "term.tag": "Illustrative",
    "term.footer": "Sample output from personal lab practice | Not client data",
    "cert.eyebrow": "Certifications",
    "cert.title": "One earned, one in progress, three on the way.",
    "cert.summary": "Each item carries its real status. Nothing is listed as earned until it is.",
    "cert.completed": "Completed",
    "cert.googleTitle": "Google Cybersecurity Professional Certificate",
    "cert.googleOrg": "Google | via Coursera",
    "cert.googleBody": "A nine-course program covering Python, Linux, SQL, SIEM tooling, intrusion detection, risks, threats, vulnerabilities, and mitigation.",
    "cert.verify": "Verify credential",
    "cert.openPdf": "Open certificate PDF",
    "cert.caption": "Certificate as issued | Verify at coursera.org",
    "cert.trackTitle": "Certification Track",
    "cert.trackSummary": "What I am studying now and what comes next.",
    "status.progress": "In progress",
    "status.planned": "Planned",
    "cert.sal1": "Hands-on SOC analyst skills, triage, and investigation.",
    "cert.secai": "Securing AI systems and using AI in security operations.",
    "cert.securityplus": "The baseline vendor-neutral security certification.",
    "cert.gcfa": "Incident response and digital forensics.",
    "contact.eyebrow": "Contact",
    "contact.title": "Open to security engineering and SOC roles.",
    "contact.summary": "Based in Ulaanbaatar, Mongolia. Available for collaboration, project discussion, or professional contact.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.button": "Contact Me",
    "contact.resume": "Download Resume",
    "footer.text": "© 2026 Bujingarav Erdenee.",
    "footer.back": "Back to top"
  },
  mn: {
    "meta.title": "Бүжингарав Эрдэнээ | Кибер аюулгүй байдал ба програм хангамжийн инженер",
    "meta.description": "Улаанбаатар хотод ажилладаг кибер аюулгүй байдал, програм хангамж, AI автоматжуулалтын инженер Бүжингарав Эрдэнээгийн портфолио.",
    "meta.keywords": "Бүжингарав Эрдэнээ, кибер аюулгүй байдал, програм хангамжийн инженер, сүлжээний аюулгүй байдал, AI автоматжуулалт",
    "skip": "Үндсэн агуулга руу очих",
    "aria.primaryNav": "Үндсэн цэс",
    "aria.languageSwitcher": "Хэл сонгох",
    "aria.primaryActions": "Үндсэн үйлдлүүд",
    "aria.focusAreas": "Гол чиглэлүүд",
    "aria.keyFigures": "Гол үзүүлэлтүүд",
    "aria.openMenu": "Цэс нээх",
    "aria.closeMenu": "Цэс хаах",
    "alt.profile": "Кибер аюулгүй байдал, програм хангамжийн инженер Бүжингарав Эрдэнээ",
    "alt.certificate": "Бүжингарав Эрдэнээгийн Google Cybersecurity Professional Certificate",
    "alt.steamexCertificate": "Бүжингарав Эрдэнээд олгосон STEAMEX 2026 Certificate of Excellence",
    "alt.spaceAwardCertificate": "Бүжингарав Эрдэнээд олгосон International Space Kamp Mongolia 2025 Space Award",
    "alt.spaceCompletionCertificate": "Бүжингарав Эрдэнээд олгосон International Space Kamp 2025 Award of Completion",
    "nav.home": "Нүүр",
    "nav.about": "Тухай",
    "nav.skills": "Ур чадвар",
    "nav.languages": "Хэл",
    "nav.experience": "Туршлага",
    "nav.projects": "Төслүүд",
    "nav.cybersecurity": "Кибер аюулгүй байдал",
    "nav.certifications": "Сертификат",
    "nav.contact": "Холбоо",
    "hero.eyebrow": "Бүжингарав Эрдэнээ | Улаанбаатар, Монгол",
    "hero.title": "Кибер аюулгүй байдал ба програм хангамжийн инженер",
    "hero.intro": "IT support, програм хангамж, AI автоматжуулалтын чиглэлээр 4+ жилийн туршлагатай инженер.",
    "hero.projects": "Төслүүд үзэх",
    "hero.contact": "Холбоо барих",
    "hero.cv": "CV татах",
    "hero.badge1": "Сүлжээний аюулгүй байдал",
    "hero.badge2": "Аюулгүй вэб хөгжүүлэлт",
    "hero.badge3": "AI автоматжуулалт",
    "hero.status": "Google Cybersecurity сертификаттай | Компьютерийн шинжлэх ухааны бакалаврт суралцаж байна",
    "stat.years": "Support, инженерчлэл, аюулгүй байдлын туршлага",
    "stat.clients": "95% шийдвэрлэлттэй үйлчилгээ үзүүлсэн клиент",
    "stat.vulns": "Хамгаалсны дараа буурсан эмзэг байдал",
    "stat.courses": "Дүүргэсэн Google кибер аюулгүй байдлын курс",
    "about.eyebrow": "Тухай",
    "about.title": "Системийг хамгаалж, програм бүтээж, бусдыг автоматжуулна.",
    "about.summary": "Сүлжээний аюулгүй байдал, системийн удирдлага, DNS/IP менежмент, вэб хөгжүүлэлтийн бодит туршлага.",
    "about.copy1": "Би вэб бүтээгдэхүүний аюулгүй хүргэлт, кодын стандарт, hosting, DNS зэрэг бүх давхаргад ажилладаг.",
    "about.copy2": "Үүнээс өмнө 200+ клиентэд hosting, DNS, IP, domain асуудлаар 95% шийдвэрлэлттэй техникийн дэмжлэг үзүүлсэн.",
    "about.copy3": "Одоо Хүрээ МХТДС-д кибер аюулгүй байдал, хиймэл оюун ухааныг илүү зорилгоо болгон Компьютерийн шинжлэх ухааны бакалаврт суралцаж байна.",
    "about.card1.title": "Аюулгүй вэб хүргэлт",
    "about.card1.text": "Илүү сайн хэрэглээ, цөөн эмзэг байдалтай захиалгат сайтууд.",
    "about.card2.title": "Дэд бүтэц ба дэмжлэг",
    "about.card2.text": "Hosting, DNS, серверийн хяналт, аюулгүй байдлын хатуужуулалт.",
    "about.card3.title": "AI автоматжуулалт",
    "about.card3.text": "Нууцлалд анхаарсан чатбот болон ажлын урсгалын автоматжуулалт.",
    "skills.eyebrow": "Ур чадвар",
    "skills.title": "Техникийн болон гол ур чадварууд.",
    "skills.summary": "Ажлын бодит гурван чиглэлээр ангилсан.",
    "skills.cyber": "Кибер аюулгүй байдал ба сүлжээ",
    "skills.programming": "Програмчлал ба хөгжүүлэлт",
    "skills.ai": "AI, автоматжуулалт ба Ops",
    "languages.eyebrow": "Хэл",
    "languages.title": "Хэлний мэдлэг.",
    "languages.summary": "Монгол, англи, орос хэлээр харилцах чадвар.",
    "languages.mongolian": "Монгол хэл",
    "languages.native": "Төрөлх хэл",
    "languages.english": "Англи хэл",
    "languages.professional": "Мэргэжлийн ажлын түвшин",
    "languages.duolingo": "Duolingo оноо",
    "languages.russian": "Орос хэл",
    "languages.basic": "Анхан шатны ярианы түвшин",
    "xp.eyebrow": "Туршлага",
    "xp.title": "Миний туршлага хаанаас бүрдсэн бэ.",
    "xp.summary": "Гурван ажил, нэг зорилго: системийг найдвартай, аюулгүй байлгах.",
    "xp.place": "Улаанбаатар, Монгол",
    "xp.role1.dates": "2022 оны 9-р сар | 2024 оны 6-р сар",
    "xp.role1.title": "Програм хангамжийн инженер",
    "xp.role1.p1": "Аюулгүй вэбсайтууд бүтээж, клиентийн онлайн оролцоог 25%-иар нэмэгдүүлсэн.",
    "xp.role1.p2": "Шифрлэлт, аюулгүй кодын стандарт хэрэглэж, эмзэг байдлыг 30%-иар бууруулсан.",
    "xp.role1.p3": "API автоматжуулалт нэвтрүүлж, гар ажиллагааг 30%-иар бууруулсан.",
    "xp.role2.dates": "2023 оны 1-р сар | Одоо",
    "xp.role2.title": "Prompt Engineering, үйл ажиллагааны менежер",
    "xp.role2.p1": "Хэрэглэгчийн хариулах хугацааг 40%-иар бууруулсан AI чатботууд хөгжүүлсэн.",
    "xp.role2.p2": "Сошиал сувгуудын аюулгүй холболт тохируулж, өгөгдөл алдагдах эрсдэлийг туршсан.",
    "xp.role2.p3": "Нууцлалын хамгаалалт болон клиентийн ажлын урсгалд тохирсон prompt нэвтрүүлсэн.",
    "xp.role3.dates": "2021 оны 1-р сар | 2024 оны 1-р сар",
    "xp.role3.title": "IT Support",
    "xp.role3.p1": "200+ клиентэд үйлчилж, hosting, DNS, IP, domain асуудлыг 95%-ийн шийдвэрлэлттэй ажилласан.",
    "xp.role3.p2": "Серверийн хяналт, аюулгүй байдлын хатуужуулалт нэвтрүүлж uptime-ийг сайжруулсан.",
    "xp.role3.p3": "Техникийн баримт бичиг боловсруулж, IT аюулгүй байдлын журам тогтооход оролцсон.",
    "xp.education": "Боловсрол",
    "xp.eduTitle": "Компьютерийн шинжлэх ухааны бакалавр",
    "xp.eduOrg": "Хүрээ МХТДС | Улаанбаатар",
    "xp.eduDates": "2025 оны 8-р сар | Одоо | Чиглэл: кибер аюулгүй байдал ба AI",
    "xp.volunteer": "Сайн дурын ажил ба шагнал",
    "xp.vol1": "STEAMEX 2026 | 74 цагийн сайн дурын ажил, Certificate of Excellence",
    "xp.vol2": "International Space Kamp Mongolia 2025 | Space Award",
    "xp.vol3": "International Space Kamp | Award of Completion (2025)",
    "xp.galleryTitle": "Сайн дурын ажлын сертификатууд",
    "xp.gallerySummary": "STEAMEX болон International Space Kamp-аас олгосон шагнал, батламжууд.",
    "xp.certSteam": "STEAMEX 2026 | Certificate of Excellence",
    "xp.certSpaceAward": "International Space Kamp 2025 | Space Award",
    "xp.certSpaceCompletion": "International Space Kamp 2025 | Award of Completion",
    "projects.eyebrow": "Төслүүд",
    "projects.title": "Програм хангамж, кибер аюулгүй байдлын хийгдсэн төслүүд.",
    "projects.summary": "Бодит вэбсайт, аюулгүй байдлын хэрэгсэл, сургалтын тэмдэглэлийг чиглэлээр ангилсан.",
    "projects.softwareTitle": "Програм хангамжийн төслүүд",
    "projects.softwareSummary": "Ecommerce, бизнесийн сүлжээ, олон нийтийн арга хэмжээний бодит вэбсайтууд.",
    "projects.cyberTitle": "Кибер аюулгүй байдлын төслүүд",
    "projects.cyberSummary": "Практик сургалтыг харуулах аюулгүй байдлын хэрэгсэл, лаборатори, тэмдэглэл.",
    "projects.liveSite": "Вэбсайт",
    "projects.writeups": "Тэмдэглэл",
    "projects.resumeDetails": "CV-ээс дэлгэрэнгүй үзэх",
    "project.bars.title": "Компьютер электроникийн ecommerce вэбсайт",
    "project.bars.desc": "Бүтээгдэхүүн үзэх, худалдан авах ойлгомжтой урсгалтай онлайн дэлгүүр.",
    "project.bars.stack": "Ecommerce / Вэб хөгжүүлэлт / UI-UX",
    "project.bars.note": "Хэрэглэгчийн өгөгдөл, төлбөрийн урсгалын аюулгүй байдлыг анхаарсан.",
    "project.bni.title": "BNI Mongolia бизнесийн сүлжээний вэбсайт",
    "project.bni.desc": "Нийгэмлэгийн мэдээлэл, гишүүнчлэлийн үнэ цэнийг харуулсан responsive сайт.",
    "project.bni.stack": "Бизнес сайт / Responsive / Вэб хөгжүүлэлт",
    "project.bni.note": "Найдвартай form, аюулгүй холбоосын ажиллагаатай.",
    "project.wsw.title": "World Space Week арга хэмжээний вэбсайт",
    "project.wsw.desc": "Хөтөлбөр, арга хэмжээ, оролцооны мэдээллийг нийтэд хүргэх сайт.",
    "project.wsw.stack": "Арга хэмжээ / Агуулгын бүтэц / Вэб хөгжүүлэлт",
    "project.wsw.note": "HTTPS дээрх бүтэцтэй, найдвартай нийтийн агуулга.",
    "project.research.title": "Кибер халдлага, зөрчил, гэмт хэргээс урьдчилан сэргийлэх тогтолцоо боловсруулах судалгаа, шинжилгээ",
    "project.research.desc": "Монгол Улсын үндэсний кибер урьдчилан сэргийлэх тогтолцооны эрх зүй, эрсдэлийн үнэлгээ, инцидентэд хариу арга хэмжээний суурийг судалсан.",
    "project.research.partner": "Хамтрагч компани: Digit LLC",
    "project.research.point1": "Кибер аюулгүй байдал, кибер дархлааны эрх зүйн зохицуулалтыг урьдчилан сэргийлэх хүрээнд шинжилсэн.",
    "project.research.point2": "Чухал дэд бүтцийн эрсдэлийн үнэлгээ, мэдээллийн аюулгүй байдлын аудитын аргачлалыг судалсан.",
    "project.research.point3": "Кибер инцидентэд хариу өгөх, мэдээлэх, салбар хооронд аюулын мэдээлэл солилцох шаардлагыг үнэлсэн.",
    "project.research.stack": "Кибер аюулгүй байдлын судалгаа / Эрх зүйн шинжилгээ / Эрсдэлийн үнэлгээ",
    "project.research.note": "Урьдчилан сэргийлэх хяналт, уялдаатай хариу арга хэмжээ, үр дүнтэй бууруулалтад төвлөрсөн.",
    "project.passcheck.title": "PassCheck нууц үгийн аюулгүй байдлын хэрэгсэл",
    "project.passcheck.desc": "Нууц үгийн бат бөх байдлыг шалгаж, эрсдэлийг ойлгомжтой харуулдаг вэб апп.",
    "project.passcheck.stack": "Кибер аюулгүй байдал / Вэб апп / Нууц үг",
    "project.passcheck.note": "Оруулсан нууц үгийг хадгалахгүйгээр зөв дадлыг дэмждэг.",
    "project.ctf.title": "CTF тэмдэглэлийн цуглуулга",
    "project.ctf.desc": "Вэб аюулгүй байдлын лаборатори, сүлжээ, нийтлэг эрсдэлийн сургалтын тэмдэглэл.",
    "project.ctf.stack": "Markdown / Linux / Вэб аюулгүй байдал",
    "project.ctf.note": "Хариуцлагатай дадлага, суралцах үйл явцад төвлөрсөн.",
    "cyber.eyebrow": "Кибер аюулгүй байдал",
    "cyber.title": "Хэтрүүлэггүй, практикт суурилсан аюулгүй байдлын сургалт.",
    "cyber.summary": "Бүтэцтэй лаборатори, CTF сорилт, сүлжээний үндэс, нягт тэмдэглэл.",
    "cyber.practiceTitle": "Дадлагын чиглэлүүд",
    "cyber.practice1": "SIEM хэрэгсэл болон intrusion detection үндэс",
    "cyber.practice2": "Аюулгүй байдлын ажлын Python автоматжуулалт",
    "cyber.practice3": "CTF, лабораторийн дадлага, TryHackMe SAL1 зорилт",
    "cyber.practice4": "GitHub дээрх аюулгүй байдлын тэмдэглэл",
    "cyber.writeups": "Security тэмдэглэл үзэх",
    "cyber.webTitle": "Вэб аюулгүй байдлын сэдвүүд",
    "cyber.networkTitle": "Сүлжээний сэдвүүд",
    "cyber.sameOrigin": "Same-Origin Policy",
    "cyber.sql": "SQL Injection үндэс",
    "cyber.xss": "XSS үндэс",
    "cyber.handshake": "3-way handshake",
    "cyber.udpTcp": "UDP / TCP үндэс",
    "cyber.ports": "Порт болон сервис",
    "cyber.packet": "Packet analysis",
    "cyber.linuxNetworking": "Linux networking",
    "cyber.scanning": "Scanning үндэс",
    "term.title": "Лабораторийн сесс | Дадлагын лог",
    "term.tag": "Жишээ",
    "term.footer": "Хувийн лабораторийн жишээ гаралт | Клиентийн дата биш",
    "cert.eyebrow": "Сертификат",
    "cert.title": "Нэг авсан, нэг хийж байгаа, гурав төлөвлөсөн.",
    "cert.summary": "Тус бүрийн бодит статусыг харуулав. Аваагүй сертификатыг авсан гэж бичээгүй.",
    "cert.completed": "Дүүргэсэн",
    "cert.googleTitle": "Google Cybersecurity Professional Certificate",
    "cert.googleOrg": "Google | Coursera",
    "cert.googleBody": "Python, Linux, SQL, SIEM, intrusion detection, эрсдэл, аюул, эмзэг байдал, mitigation хамарсан есөн курсын хөтөлбөр.",
    "cert.verify": "Сертификат шалгах",
    "cert.openPdf": "Сертификатын PDF нээх",
    "cert.caption": "Олгогдсон сертификат | coursera.org дээр шалгана уу",
    "cert.trackTitle": "Сертификатын төлөвлөгөө",
    "cert.trackSummary": "Одоо судалж байгаа болон дараагийн зорилтууд.",
    "status.progress": "Судалж байгаа",
    "status.planned": "Төлөвлөсөн",
    "cert.sal1": "SOC analyst-ийн практик ур чадвар, triage, investigation.",
    "cert.secai": "AI системийг хамгаалах, аюулгүй ажиллагаанд AI ашиглах.",
    "cert.securityplus": "Vendor-neutral аюулгүй байдлын суурь сертификат.",
    "cert.gcfa": "Incident response болон digital forensics.",
    "contact.eyebrow": "Холбоо барих",
    "contact.title": "Security engineering болон SOC ажилд нээлттэй.",
    "contact.summary": "Улаанбаатар, Монголд байрладаг. Хамтын ажиллагаа, төсөл, мэргэжлийн холбоонд нээлттэй.",
    "contact.email": "Имэйл",
    "contact.phone": "Утас",
    "contact.button": "Холбоо барих",
    "contact.resume": "Resume татах",
    "footer.text": "© 2026 Бүжингарав Эрдэнээ.",
    "footer.back": "Дээш буцах"
  },
  ru: {
    "meta.title": "Бужингарав Эрдэнээ | Инженер по кибербезопасности и разработке ПО",
    "meta.description": "Портфолио Бужингарав Эрдэнээ, инженера по кибербезопасности и разработке ПО из Улан-Батора, специализирующегося на защищённых системах, веб-разработке и автоматизации с ИИ.",
    "meta.keywords": "Бужингарав Эрдэнээ, инженер по кибербезопасности, инженер-программист, сетевая безопасность, защищённая веб-разработка, автоматизация ИИ, Улан-Батор",
    "skip": "Перейти к содержанию",
    "aria.primaryNav": "Основная навигация",
    "aria.languageSwitcher": "Выбор языка",
    "aria.primaryActions": "Основные действия",
    "aria.focusAreas": "Направления работы",
    "aria.keyFigures": "Ключевые показатели",
    "aria.openMenu": "Открыть меню навигации",
    "aria.closeMenu": "Закрыть меню навигации",
    "alt.profile": "Бужингарав Эрдэнээ, инженер по кибербезопасности и разработке ПО",
    "alt.certificate": "Профессиональный сертификат Google по кибербезопасности, выданный Бужингарав Эрдэнээ",
    "alt.steamexCertificate": "Сертификат отличия STEAMEX 2026, выданный Бужингарав Эрдэнээ",
    "alt.spaceAwardCertificate": "Премия Space Award International Space Kamp Mongolia 2025, вручённая Бужингарав Эрдэнээ",
    "alt.spaceCompletionCertificate": "Сертификат об окончании International Space Kamp 2025, вручённый Бужингарав Эрдэнээ",
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.languages": "Языки",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.cybersecurity": "Кибербезопасность",
    "nav.certifications": "Сертификаты",
    "nav.contact": "Контакты",
    "hero.eyebrow": "Бужингарав Эрдэнээ | Улан-Батор, Монголия",
    "hero.title": "Инженер по кибербезопасности и разработке ПО",
    "hero.intro": "Инженер с ориентацией на результат и более чем 4-летним опытом в ИТ-поддержке, разработке ПО и автоматизации на базе ИИ.",
    "hero.projects": "Смотреть проекты",
    "hero.contact": "Связаться",
    "hero.cv": "Скачать резюме",
    "hero.badge1": "Сетевая безопасность",
    "hero.badge2": "Защищённая веб-разработка",
    "hero.badge3": "Автоматизация с ИИ",
    "hero.status": "Сертификат Google по кибербезопасности | Бакалавриат по компьютерным наукам",
    "stat.years": "Года опыта в поддержке, разработке и безопасности",
    "stat.clients": "Клиентов при 95% успешных решений",
    "stat.vulns": "Снижение уязвимостей после усиления защиты",
    "stat.courses": "Завершённых курсов Google по кибербезопасности",
    "about.eyebrow": "Обо мне",
    "about.title": "Защищаю системы, создаю ПО и автоматизирую процессы.",
    "about.summary": "Практический опыт в сетевой безопасности, системном администрировании, управлении DNS/IP и разработке веб-приложений.",
    "about.copy1": "Работаю со всем циклом веб-продукта: защищённым развёртыванием, стандартами кода, хостингом и DNS.",
    "about.copy2": "Ранее оказывал техническую поддержку более чем 200 клиентам по вопросам хостинга, DNS, IP и доменов с показателем решения 95%.",
    "about.copy3": "Получаю степень бакалавра компьютерных наук в Университете ИКТ «Хурээ», специализируясь на кибербезопасности и ИИ.",
    "about.card1.title": "Защищённая веб-разработка",
    "about.card1.text": "Индивидуальные сайты с более высокой вовлечённостью и меньшим числом уязвимостей.",
    "about.card2.title": "Инфраструктура и поддержка",
    "about.card2.text": "Хостинг, DNS, мониторинг серверов и усиление безопасности.",
    "about.card3.title": "Автоматизация с ИИ",
    "about.card3.text": "Чат-боты и автоматизация рабочих процессов с учётом конфиденциальности.",
    "skills.eyebrow": "Навыки",
    "skills.title": "Технические и ключевые навыки.",
    "skills.summary": "Три практических направления, отражающие реальное распределение моей работы.",
    "skills.cyber": "Кибербезопасность и сети",
    "skills.programming": "Программирование и разработка",
    "skills.ai": "ИИ, автоматизация и эксплуатация",
    "languages.eyebrow": "Языки",
    "languages.title": "Владение языками.",
    "languages.summary": "Работа в монгольской, английской и русской языковой среде.",
    "languages.mongolian": "Монгольский",
    "languages.native": "Родной язык",
    "languages.english": "Английский",
    "languages.professional": "Профессиональный рабочий уровень",
    "languages.duolingo": "Балл Duolingo",
    "languages.russian": "Русский",
    "languages.basic": "Базовый разговорный уровень",
    "xp.eyebrow": "Опыт",
    "xp.title": "Опыт, на котором строится моя работа.",
    "xp.summary": "Три роли и один принцип: поддерживать надёжность и безопасность систем.",
    "xp.place": "Улан-Батор, Монголия",
    "xp.role1.dates": "Сент. 2022 | Июнь 2024",
    "xp.role1.title": "Инженер-программист",
    "xp.role1.p1": "Проектировал и запускал защищённые сайты, повысив онлайн-вовлечённость клиентов на 25%.",
    "xp.role1.p2": "Применял шифрование и стандарты безопасной разработки, снизив количество уязвимостей на 30%.",
    "xp.role1.p3": "Интегрировал API-инструменты автоматизации, сократив ручную работу на 30%.",
    "xp.role2.dates": "Янв. 2023 | По настоящее время",
    "xp.role2.title": "Промпт-инженер, операционный менеджер",
    "xp.role2.p1": "Разработал чат-ботов с ИИ, сокративших время ответа клиентам на 40%.",
    "xp.role2.p2": "Настраивал защищённые социальные интеграции и тестировал системы на утечки данных.",
    "xp.role2.p3": "Внедрял меры конфиденциальности и индивидуальные промпты для клиентских процессов.",
    "xp.role3.dates": "Янв. 2021 | Янв. 2024",
    "xp.role3.title": "Специалист ИТ-поддержки",
    "xp.role3.p1": "Поддерживал более 200 клиентов и решал вопросы хостинга, DNS, IP и доменов с показателем 95%.",
    "xp.role3.p2": "Внедрил мониторинг серверов и усиление безопасности для повышения доступности.",
    "xp.role3.p3": "Создавал техническую документацию и участвовал в разработке протоколов ИТ-безопасности.",
    "xp.education": "Образование",
    "xp.eduTitle": "Бакалавр компьютерных наук",
    "xp.eduOrg": "Университет ИКТ «Хурээ» | Улан-Батор",
    "xp.eduDates": "Авг. 2025 | По настоящее время | Кибербезопасность и ИИ",
    "xp.volunteer": "Волонтёрство и награды",
    "xp.vol1": "STEAMEX 2026 | 74 часа волонтёрской работы, Certificate of Excellence",
    "xp.vol2": "International Space Kamp Mongolia 2025 | Space Award",
    "xp.vol3": "International Space Kamp | Award of Completion (2025)",
    "xp.galleryTitle": "Сертификаты за волонтёрскую работу",
    "xp.gallerySummary": "Награды от STEAMEX и International Space Kamp.",
    "xp.certSteam": "STEAMEX 2026 | Certificate of Excellence",
    "xp.certSpaceAward": "International Space Kamp 2025 | Space Award",
    "xp.certSpaceCompletion": "International Space Kamp 2025 | Award of Completion",
    "projects.eyebrow": "Проекты",
    "projects.title": "Избранные проекты по разработке ПО и кибербезопасности.",
    "projects.summary": "Реальные сайты, инструменты безопасности и учебные материалы, сгруппированные по направлениям.",
    "projects.softwareTitle": "Проекты разработки ПО",
    "projects.softwareSummary": "Работающие сайты для электронной коммерции, деловых сообществ и публичных мероприятий.",
    "projects.cyberTitle": "Проекты по кибербезопасности",
    "projects.cyberSummary": "Исследования, инструменты, лабораторные работы и материалы, демонстрирующие практические навыки.",
    "projects.liveSite": "Открыть сайт",
    "projects.writeups": "Материалы",
    "projects.resumeDetails": "Подробнее в резюме",
    "project.bars.title": "Сайт электронной коммерции компьютерной техники",
    "project.bars.desc": "Интернет-магазин с понятным просмотром товаров и удобным процессом покупки.",
    "project.bars.stack": "Электронная коммерция / Веб-разработка / UI-UX",
    "project.bars.note": "Безопасная обработка пользовательских данных и этапов оформления заказа.",
    "project.bni.title": "Сайт делового сообщества BNI Mongolia",
    "project.bni.desc": "Адаптивный сайт делового сообщества с информацией о сети и преимуществах членства.",
    "project.bni.stack": "Корпоративный сайт / Адаптивность / Веб-разработка",
    "project.bni.note": "Надёжные формы и безопасная обработка ссылок.",
    "project.wsw.title": "Сайт мероприятия World Space Week 2025",
    "project.wsw.desc": "Публичный сайт с расписанием, сведениями о мероприятии и информацией для участников.",
    "project.wsw.stack": "Сайт мероприятия / Структура контента / Веб-разработка",
    "project.wsw.note": "Структурированный публичный контент по HTTPS и аккуратная обработка форм.",
    "project.research.title": "Исследование и анализ для разработки системы предотвращения кибератак, нарушений и преступлений",
    "project.research.desc": "Исследование правовых основ, оценки рисков и реагирования на инциденты для национальной системы киберпрофилактики Монголии.",
    "project.research.partner": "Компания-партнёр: Digit LLC",
    "project.research.point1": "Проанализированы законы Монголии о кибербезопасности и киберустойчивости как основы профилактики.",
    "project.research.point2": "Изучены методы оценки рисков и аудита информационной безопасности критической инфраструктуры.",
    "project.research.point3": "Оценены требования к реагированию, отчётности и межотраслевому обмену данными о киберугрозах.",
    "project.research.stack": "Исследования кибербезопасности / Правовой анализ / Оценка рисков",
    "project.research.note": "Фокус на превентивном контроле, согласованном реагировании и эффективном снижении рисков.",
    "project.passcheck.title": "Инструмент безопасности паролей PassCheck",
    "project.passcheck.desc": "Веб-приложение для оценки надёжности пароля, выявления рисков и формирования безопасных привычек.",
    "project.passcheck.stack": "Кибербезопасность / Веб-приложение / Надёжность паролей",
    "project.passcheck.note": "Помогает соблюдать гигиену паролей без сохранения введённых данных.",
    "project.ctf.title": "Коллекция разборов CTF",
    "project.ctf.desc": "Учебные материалы по лабораториям веб-безопасности, основам сетей и распространённым веб-рискам.",
    "project.ctf.stack": "Markdown / Linux / Веб-безопасность",
    "project.ctf.note": "Акцент на процессе обучения и ответственной практике.",
    "cyber.eyebrow": "Кибербезопасность",
    "cyber.title": "Практическое изучение безопасности без преувеличений.",
    "cyber.summary": "Структурированные лаборатории, CTF-задачи, основы сетей и аккуратные технические разборы.",
    "cyber.practiceTitle": "Практические направления",
    "cyber.practice1": "Основы SIEM и обнаружения вторжений",
    "cyber.practice2": "Автоматизация задач безопасности на Python",
    "cyber.practice3": "CTF и лабораторная практика, подготовка к TryHackMe SAL1",
    "cyber.practice4": "Материалы и заметки по безопасности на GitHub",
    "cyber.writeups": "Смотреть материалы по безопасности",
    "cyber.webTitle": "Темы веб-безопасности",
    "cyber.networkTitle": "Темы сетевых технологий",
    "cyber.sameOrigin": "Политика одного источника",
    "cyber.sql": "Основы SQL-инъекций",
    "cyber.xss": "Основы XSS",
    "cyber.handshake": "Трёхэтапное рукопожатие",
    "cyber.udpTcp": "Основы UDP / TCP",
    "cyber.ports": "Порты и службы",
    "cyber.packet": "Анализ пакетов",
    "cyber.linuxNetworking": "Сети в Linux",
    "cyber.scanning": "Основы сканирования",
    "term.title": "Лабораторная сессия | Журнал практики",
    "term.tag": "Пример",
    "term.footer": "Пример из личной лабораторной практики | Без клиентских данных",
    "cert.eyebrow": "Сертификаты",
    "cert.title": "Один получен, один в процессе, три запланированы.",
    "cert.summary": "Для каждого сертификата указан реальный статус. Неполученные сертификаты не обозначены как завершённые.",
    "cert.completed": "Завершён",
    "cert.googleTitle": "Профессиональный сертификат Google по кибербезопасности",
    "cert.googleOrg": "Google | через Coursera",
    "cert.googleBody": "Программа из девяти курсов по Python, Linux, SQL, SIEM, обнаружению вторжений, рискам, угрозам, уязвимостям и мерам защиты.",
    "cert.verify": "Проверить сертификат",
    "cert.openPdf": "Открыть PDF сертификата",
    "cert.caption": "Сертификат в выданном виде | Проверка на coursera.org",
    "cert.trackTitle": "План сертификации",
    "cert.trackSummary": "Что изучается сейчас и какие цели стоят дальше.",
    "status.progress": "В процессе",
    "status.planned": "Запланирован",
    "cert.sal1": "Практические навыки SOC-аналитика, триаж и расследование.",
    "cert.secai": "Защита систем ИИ и применение ИИ в операциях безопасности.",
    "cert.securityplus": "Базовый независимый от производителя сертификат по безопасности.",
    "cert.gcfa": "Реагирование на инциденты и цифровая криминалистика.",
    "contact.eyebrow": "Контакты",
    "contact.title": "Открыт к позициям в security engineering и SOC.",
    "contact.summary": "Нахожусь в Улан-Баторе, Монголия. Открыт к сотрудничеству, обсуждению проектов и профессиональным контактам.",
    "contact.email": "Эл. почта",
    "contact.phone": "Телефон",
    "contact.button": "Связаться",
    "contact.resume": "Скачать резюме",
    "footer.text": "© 2026 Бужингарав Эрдэнээ.",
    "footer.back": "Наверх"
  }
};

const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const languageButtons = Array.from(document.querySelectorAll(".language-option"));
const backToTop = document.querySelector(".back-to-top");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentLanguage = "en";

function translateAttribute(attribute, dataAttribute) {
  document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
    const key = element.getAttribute(dataAttribute);
    const value = translations[currentLanguage][key] || translations.en[key];
    if (value) element.setAttribute(attribute, value);
  });
}

function updateMenuLabel() {
  if (!menuToggle) return;
  const key = navMenu?.classList.contains("open") ? "aria.closeMenu" : "aria.openMenu";
  menuToggle.setAttribute("aria-label", translations[currentLanguage][key]);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = dictionary["meta.title"];
  document.querySelector("meta[name='description']")?.setAttribute("content", dictionary["meta.description"]);
  document.querySelector("meta[name='keywords']")?.setAttribute("content", dictionary["meta.keywords"]);
  document.querySelector("meta[property='og:title']")?.setAttribute("content", dictionary["meta.title"]);
  document.querySelector("meta[property='og:description']")?.setAttribute("content", dictionary["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key] || translations.en[key];
    if (value) element.textContent = value;
  });

  translateAttribute("aria-label", "data-i18n-aria-label");
  translateAttribute("alt", "data-i18n-alt");
  updateMenuLabel();

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("preferredLanguage", currentLanguage);
  } catch {
    // The site still works when storage is unavailable.
  }
}

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem("preferredLanguage");
    if (translations[stored]) return stored;
  } catch {
    // Fall back to the browser locale.
  }
  return navigator.language?.toLowerCase().startsWith("mn") ? "mn" : "en";
}

function closeMenu() {
  body.classList.remove("menu-open");
  navMenu?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  updateMenuLabel();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("open") || false;
  body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  updateMenuLabel();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (href?.startsWith("#")) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });
      history.pushState(null, "", href);
    }
    closeMenu();
  });
});

backToTop?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: reducedMotion ? "auto" : "smooth"
  });
  history.replaceState(null, "", `${location.pathname}${location.search}`);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu?.classList.contains("open")) {
    closeMenu();
    menuToggle?.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) closeMenu();
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-38% 0px -56% 0px", threshold: 0 }
  );
  sections.forEach((section) => navObserver.observe(section));
}

function animateCount(element) {
  if (element.dataset.animated === "true") return;
  element.dataset.animated = "true";
  const target = Number.parseInt(element.dataset.count, 10) || 0;
  const suffix = element.dataset.suffix || "";

  if (reducedMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const start = performance.now();
  const duration = 1000;
  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function activateElement(element) {
  element.classList.add("visible");
  element.querySelectorAll("[data-count]").forEach(animateCount);
  element.querySelectorAll("[data-meter]").forEach((meter) => {
    meter.style.setProperty("--meter-width", `${meter.dataset.meter}%`);
    meter.classList.add("filled");
  });
  if (element.matches("[data-meter]")) {
    element.style.setProperty("--meter-width", `${element.dataset.meter}%`);
    element.classList.add("filled");
  }
}

const revealTargets = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach(activateElement);
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        activateElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((target) => revealObserver.observe(target));
}

const terminalLines = [
  { text: "$ nmap -sV -p- 10.10.x.x", type: "command" },
  { text: "  22/tcp   open   ssh", type: "" },
  { text: "  80/tcp   open   http", type: "" },
  { text: "$ curl -sI https://target/ | find security", type: "command" },
  { text: "  strict-transport-security: configured", type: "" },
  { text: "  x-frame-options: MISSING", type: "warning" },
  { text: "  finding: review clickjacking controls", type: "warning" },
  { text: "$ python parse_auth_log.py --failed-ssh", type: "command" },
  { text: "  14 failed logins flagged for review", type: "warning" },
  { text: "  session complete | 0 production systems touched", type: "" }
];

const terminal = document.querySelector("[data-terminal]");
if (terminal) {
  const appendLine = (line) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line.text;
    if (line.type) paragraph.className = line.type;
    terminal.appendChild(paragraph);
  };

  if (reducedMotion) {
    terminalLines.forEach(appendLine);
  } else {
    terminalLines.forEach((line, index) => {
      window.setTimeout(() => appendLine(line), 650 + index * 430);
    });
  }
}

applyLanguage(getInitialLanguage());
