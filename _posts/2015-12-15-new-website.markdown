---
layout: post
title:  A new website
date: 2015-12-15 21:01:00
description: Yet another website (again?)
---
In 1997 I build my first website. I took the HTML source from the homepage of XS4ALL, my internet provider at the time. The Internet Archive still has <a href="https://web.archive.org/web/19980210114416/http://www.xs4all.nl/">a copy of that site</a>.

One of the greatest things of the web then and now: view source. Look at the source of something and learn.

The first website I made was HTML only. The second website was using a self made Content Managment System (CMS) build in PHP. The third one was using <a href="https://wordpress.org/">Wordpress</a> as CMS. The fourth one was using <a href="https://www.drupal.org/">Drupal</a>. The fifth Wordpress again, the sixth a <a href="https://groups.drupal.org/headless-drupal">headless Drupal</a> instance with an <a href="https://angularjs.org/">AngularJS</a> front end. It became more and more complex.

I decided to make it simple again. This website is made using <a href="https://jekyllrb.com/">Jekyll</a>, a gem for simple, blog-aware, static sites. The website is hosted on <a href="https://github.com/jooplaan/jooplaan.github.io">Github</a>. You can fetch a copy of the complete source from there, if you like. :)

<div class="PageNavigation">
  {% if page.previous.url %}
    <a class="prev" href="{{page.previous.url}}">&laquo; {{page.previous.title}}</a>
  {% endif %}
  {% if page.next.url %}
    <a class="next" href="{{page.next.url}}">{{page.next.title}} &raquo;</a>
  {% endif %}
</div>
