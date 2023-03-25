// ハンバーガー
// ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector(".hamburger");

// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
const navi = document.getElementById("navi");

// ハンバーガーメニュー内の各セクションの要素
const humbergerMenuSections = document.querySelectorAll(".menu-sec");

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle('active');
});



// フェードイン
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});

