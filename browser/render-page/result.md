## Анализируемая страница: 
```https://www.laroche-posay.ru/anthelios-uvmune400-tinted-fluid```

<p>скриншот отчета - https://monosnap.com/direct/Fw4wiZIRAkneahHxo3aS1FjNDkGkPp</p>
<p>ссылка на отчет - https://pagespeed.web.dev/analysis/https-www-laroche-posay-ru-anthelios-uvmune400-tinted-fluid/79b5zd31x6?form_factor=desktop</p>

Основые показатели скорости загрузки, - Largest Contentful Paint (LCP), Interaction to Next Paint (INP), First Contentful Paint (FCP), First Input Delay (FID), в допустимых пределах.

Показатели - Cumulative Layout Shift (CLS) и Time to First Byte (TTFB), уже в желтом пределе значений.

Предлодения по улучшению:
1) Использовать CSS-дескриптор font-display, при подключении шрифтов
2) Сделать отложенную загрузку скриптов для капчи и аналитики
3) По возможности разбить дефолтные бандлы стилей и скриптов мадженты на более мешьшие файлы (врядли такое возможно скорее всего)
4) Подключить lazy load к изображениям галереии товара
5) Извлечь критический CSS и отложить загрузку некритического
6) Проанализировать js и css и удалить ненужные подключаемые либы и скрипты, если такие найдуться, например, в коде страницы есть закомменченный js в <script>, animate.css в <style>
7) Указать атрибуты размера width и height для изображений, чтобы уменьшить смещение макета
