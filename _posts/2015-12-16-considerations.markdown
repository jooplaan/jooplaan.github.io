---
layout: post
title:  First set up
date: 2015-12-16 08:50:-0.1
description: Taking typography as base for design
---
On the beach, enjoying the sand, sea and sun two weeks ago, I read a few books that I didn't get to before. One of these books was  &ldquo;<a href="http://abookapart.com/products/on-web-typography">On Web Typograpy</a>&rdquo; by Jason Santa Maria. After reading this book I decided to take typography as a starting point when building my next website. <em>Et voila</em>, this is my next website. There are still many rough edges to iron out, but I feel the basis is here.

The font family I choose to use is <a href="https://daltonmaag.com/library/aller">Aller</a> by Dalton Maag. Aller is a font family with a unique design and warm tone of voice. It is a sans serif font with some interesting features that make this a characterful alternative to less inventive sans serifs. This font family is very successful at what it does, maintaining its individuality without detracting from it’s main purpose: communication.

While I add more content to the website, the details of the typography are worked out: relative size in different contexts, line-height and color. So the next time you visit this website, the typography will be better. But the base is there and it is called Aller (which is French for <em>go</em> :).

<div class="PageNavigation">
  {% if page.previous.url %}
    <a class="prev" href="{{page.previous.url}}">&laquo; {{page.previous.title}}</a>
  {% endif %}
  {% if page.next.url %}
    <a class="next" href="{{page.next.url}}">{{page.next.title}} &raquo;</a>
  {% endif %}
</div>
