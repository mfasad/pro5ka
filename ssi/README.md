# 📦 Слоты для вставки кода (без пересборки)

Этот сайт поддерживает **вставку произвольного кода** в любую страницу
**без пересборки** всех 21170 статей.

## 🔧 Как это работает

### Вариант 1: Nginx SSI (VPS)

Добавь в nginx-конфиг:
```nginx
ssi on;
```

Затем редактируй файлы в `/ssi/`:

| Файл | Место вставки | Пример |
|------|--------------|--------|
| `head.html` | Перед `</head>` | Яндекс.Метрика, стили |
| `body_top.html` | После `<body>` | GTM, топ-баннер |
| `article_before.html` | Перед текстом статьи | Реклама перед контентом |
| `article_after.html` | После текста статьи | Реклама после контента |
| `body_bottom.html` | Перед `</body>` | Скрипты, попапы |

### Вариант 2: JavaScript (Vercel / любой хостинг)

Редактируй файл `/static/js/inject.js`.
Он подключается на **каждой** странице и выполняется при загрузке.

### Пример: Яндекс.Метрика

**Через SSI** (head.html):
```html
<script type="text/javascript">
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
  )(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(XXXXXXX, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
</script>
<noscript><img src="https://mc.yandex.ru/watch/XXXXXXX" style="position:absolute; left:-9999px;" alt="" /></noscript>
```

**Через JS** (inject.js):
```javascript
(function(){
  var s = document.createElement('script');
  s.src = 'https://mc.yandex.ru/metrika/tag.js';
  s.async = true;
  s.onload = function(){ ym(XXXXXXX, 'init', {clickmap:true}); };
  document.head.appendChild(s);
})();
```

---
Сгенерировано Комбайном · PRO5 — информационный портал
