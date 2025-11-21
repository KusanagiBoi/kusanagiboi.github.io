// Texte pentru fiecare limbă
const texts = {
    ro: {
        name: "Drug Erick Robert",
        job: "Viitor inginer de telecomunicatii",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.`,
        navHome: "Acasa",
        navEdu: "Educatie/Experienta",
        navHobby: "Hobby-uri",
        navGallery: "Galerie Foto",
        footerCopyright: "© 2025 Drug Erick Robert. Toate drepturile rezervate.",
        emailBtn: "Trimite email"
    },
    en: {
        name: "Drug Erick Robert",
        job: "Future Telecommunications Engineer",
        description: `ロレム イプスム ドロル シット アメト コンセクテトゥル アディピシング エリト セッド ド エイウスモッド テンポル インシディドゥント ウト ラボレ エト ドローレ マ
        グナ アリクア。 ウト エニム アド ミニム ヴェニアム、 クイス ノストルド エクサーシテーション ウラムコ ラボリス ニシ アウト アリキップ エクス エア コモード コンセクアット。 
        ドゥイス アウテ イリュレ ドロル イン レプレヘンデリット イン ヴォルプテ ヴェリット エッセ シルルム ドローレ エウ フィウギアト ヌラ パリアトゥル。 エクセプテウル シント オカエカ ット 
        クピダタット ノン プロイデント、 スント イン クルパ キ ウオフィチア デサルウント モリット アニム イデ スト ラボラム。サスペンディスセ プルリスク エスティ モルティス イン キュイ スケレティ
        ス セリフェ、 フェウギア セントゥム アシン ペル ヴェルティカリス。 ナム アクター ペルスピシアティス デライトゥル ラボルエ、 イリア スニ ミニム エイラス スクリプタ。 オティオ レギオナ ユタイ
        シス セネクティス イン コンヴァリスク、 ウト アクセプタ ウラム コンタエ シット ラボレ ドローレ。 インシディドゥント ウット ラボレ マグナ アリクア、 ヴェニアム キュイ オフフィシア デサルウン
        ト モ リット アニム イデ スト ラボラム。`,
        navHome: "Home",
        navEdu: "Education/Experience",
        navHobby: "Hobbies",
        navGallery: "Photo Gallery",
        footerCopyright: "© 2025 Drug Erick Robert. All rights reserved.",
        emailBtn: "Send Email"
    }
};

// Limba curentă din localStorage, default RO
let currentLang = localStorage.getItem('lang') || 'ro';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-btn');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const updateTexts = () => {
        // Main content
        const nameEl = document.getElementById('name');
        const jobEl = document.getElementById('job');
        const descEl = document.getElementById('description');
        const mailBtn = document.getElementById('mail'); // buton email

        if(nameEl) nameEl.textContent = texts[currentLang].name;
        if(jobEl) jobEl.textContent = texts[currentLang].job;
        if(descEl) descEl.textContent = texts[currentLang].description;
        if(mailBtn) mailBtn.textContent = texts[currentLang].emailBtn;

        // Navbar
        if(document.getElementById('nav-home')) document.getElementById('nav-home').textContent = texts[currentLang].navHome;
        if(document.getElementById('nav-edu')) document.getElementById('nav-edu').textContent = texts[currentLang].navEdu;
        if(document.getElementById('nav-hobby')) document.getElementById('nav-hobby').textContent = texts[currentLang].navHobby;
        if(document.getElementById('nav-gallery')) document.getElementById('nav-gallery').textContent = texts[currentLang].navGallery;

        // Footer
        const footerEl = document.getElementById('footer-copyright');
        if(footerEl) footerEl.textContent = texts[currentLang].footerCopyright;
    };

    const highlightNavbar = () => {
        const currentPath = window.location.pathname.split("/").pop();
        navLinks.forEach(link => {
            if(link.getAttribute('href') === currentPath) link.classList.add('active');
            else link.classList.remove('active');
        });
    };

    // Aplică textele și highlight la încărcare
    updateTexts();
    highlightNavbar();

    // Click pe butonul de limbă
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'ro' ? 'en' : 'ro';
        localStorage.setItem('lang', currentLang); // păstrează limba între pagini
        updateTexts();
    });
});
