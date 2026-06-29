// Yandex.Metrika — counter 110250466
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
)(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(110250466,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});

/* PRO5 disclaimer integration */
(function () {
  'use strict';

  function addDisclaimerElements() {
    var footerGroups = document.querySelectorAll('.pc-footer-links');
    var footerHasLink = document.querySelector('[data-pro5-disclaimer-link]');

    if (!footerHasLink) {
      for (var i = 0; i < footerGroups.length; i += 1) {
        var heading = footerGroups[i].querySelector('strong');
        if (heading && heading.textContent.trim() === 'Проект') {
          var footerLink = document.createElement('a');
          footerLink.href = '/disclaimer.html';
          footerLink.textContent = 'Отказ от ответственности';
          footerLink.setAttribute('data-pro5-disclaimer-link', '');
          footerGroups[i].appendChild(footerLink);
          break;
        }
      }
    }

    if (!document.body || document.body.getAttribute('data-page-type') !== 'article') {
      return;
    }

    if (document.querySelector('[data-pro5-disclaimer-notice]')) {
      return;
    }

    var articleTitle = document.querySelector('.pc-article .pc-article-header h1');
    if (!articleTitle) {
      return;
    }

    var notice = document.createElement('aside');
    notice.className = 'pro5-disclaimer-notice';
    notice.setAttribute('data-pro5-disclaimer-notice', '');
    notice.setAttribute('role', 'note');
    notice.setAttribute('aria-label', 'Справочное уведомление');
    notice.innerHTML = '<span class="pro5-disclaimer-notice__label">Справочно</span>' +
      '<p>Материал носит справочный характер. PRO5 не является официальным сайтом «Пятёрочки» или X5 Group. Правила программ лояльности, акций, возвратов, вакансий и сервисов могут меняться — перед действием проверьте информацию в официальном приложении, условиях программы или службе поддержки. <a href="/disclaimer.html">Подробнее</a></p>';

    articleTitle.insertAdjacentElement('afterend', notice);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addDisclaimerElements, { once: true });
  } else {
    addDisclaimerElements();
  }
}());
