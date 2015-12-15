---
layout: page
permalink: /poetry/
title: Poetry
description: Showcase your writing, short stories, or poems. Replace this text with your description.
weight: 10
class: page-poetry
---

<ul class="post-list">
{% for poem in site.poetry reversed %}
    <li>
        <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a></h2>
        <p class="post-meta">{{ poem.date | date: "%-d %B %Y" }}</p>
      </li>
{% endfor %}
</ul>
