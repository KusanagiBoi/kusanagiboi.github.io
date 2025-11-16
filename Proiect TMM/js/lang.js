const texts = {
    ro: {
        name: "Drug Erick Robert",
        job: "Vitor inginer de telecomunicatii",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.`,
    },
    en: {
        name: "Drug Erick Robert",
        job: "Future Telecommunications Engineer",
        description: `ロレム イプスム ドロル シット アメト コンセクテトゥル アディピシング エリト セッド ド エイウスモッド テンポル インシディドゥント ウト ラボレ エト ドローレ マ
        グナ アリクア。 ウト エニム アド ミニム ヴェニアム、 クイス ノストルド エクサーシテーション ウラムコ ラボリス ニシ アウト アリキップ エクス エア コモード コンセクアット。
        ドゥイス アウテ イリュレ ドロル イン レプレヘンデリット イン ヴォルプテ ヴェリット エッセ シルルム ドローレ エウ フィウギアト ヌラ パリアトゥル。 エクセプテウル シント オカエカ
        ット クピダタット ノン プロイデント、 スント イン クルパ キ ウオフィチア デサルウント モリット アニム イデ スト ラボラム。サスペンディスセ プルリスク エスティ モルティス イン
        キュイ スケレティス セリフェ、 フェウギア セントゥム アシン ペル ヴェルティカリス。 ナム アクター ペルスピシアティス デライトゥル ラボルエ、 イリア スニ ミニム エイラス スクリプタ。 オティオ レギオナ ユタイシス セネクティス イン コンヴァリスク、 ウト アクセプタ ウラム コンタエ シット ラボレ ドローレ。 インシディドゥント ウット ラボレ マグナ アリクア、 ヴェニアム キュイ オフフィシア デサルウント モ
        リット アニム イデ スト ラボラム。`

    }
};

// verifică limba salvată, default = ro
let currentLang = localStorage.getItem('lang') || 'ro';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-btn');

    // la încărcarea paginii, setează textul conform limbii curente
    document.getElementById('name').textContent = texts[currentLang].name;
    document.getElementById('job').textContent = texts[currentLang].job;
    document.getElementById('description').textContent = texts[currentLang].description;

    btn.addEventListener('click', () => {
        // comută limba
        currentLang = currentLang === 'ro' ? 'en' : 'ro';

        // salvează limba în localStorage
        localStorage.setItem('lang', currentLang);

        // schimbă textele paginii
        document.getElementById('name').textContent = texts[currentLang].name;
        document.getElementById('job').textContent = texts[currentLang].job;
        document.getElementById('description').textContent = texts[currentLang].description;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop(); // ex: "index.html"
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});