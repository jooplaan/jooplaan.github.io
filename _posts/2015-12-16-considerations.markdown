---
layout: post
title:  A new focus
date: 2015-12-16 00:01:-0.1
description: Some considerations when creating a new website
---
Second blog post comes here.

<div class="PageNavigation">
  {% if page.previous.url %}
    <a class="prev" href="{{page.previous.url}}">&laquo; {{page.previous.title}}</a>
  {% endif %}
  {% if page.next.url %}
    <a class="next" href="{{page.next.url}}">{{page.next.title}} &raquo;</a>
  {% endif %}
</div>
