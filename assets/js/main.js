/* =========================================================================
   三交設備株式会社 コーポレートサイト — 共通スクリプト
   - モバイルナビの開閉
   - 採用応募フォームの簡易バリデーション（デザイン確認用モック）
   ========================================================================= */
(function () {
  'use strict';

  /* ---- モバイルナビ ---------------------------------------------------- */
  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    var mq = window.matchMedia('(max-width: 900px)');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.hidden = !open;
    }

    // 初期状態: モバイル幅では閉じる、それ以外は常時表示（hidden解除）
    function sync() {
      if (mq.matches) {
        setOpen(false);
      } else {
        nav.hidden = false;
        toggle.setAttribute('aria-expanded', 'false');
      }
    }

    toggle.addEventListener('click', function () {
      setOpen(nav.hidden);
    });

    // ナビ内リンクをタップしたら閉じる
    nav.addEventListener('click', function (e) {
      if (mq.matches && e.target.closest('a')) setOpen(false);
    });

    mq.addEventListener('change', sync);
    sync();
  }

  /* ---- 採用応募フォーム ------------------------------------------------ */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var errorEl = document.getElementById('form-error');
    var successEl = document.getElementById('form-success');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (form.elements.name.value || '').trim();
      var email = (form.elements.email.value || '').trim();
      var message = (form.elements.message.value || '').trim();

      if (!name || !email || !message) {
        if (errorEl) errorEl.hidden = false;
        return;
      }

      if (errorEl) errorEl.hidden = true;
      form.hidden = true;
      if (successEl) successEl.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavToggle();
    initContactForm();
  });
})();
