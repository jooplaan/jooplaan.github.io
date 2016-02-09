---
layout: page
title: Work
description: Work in progress
permalink: /work/
weight: 10
class: page-work
---


Portfolio is under construction. While I work on the portfolio, I will posts updates to <a href="/blog/">the blog</a> about the progress.

<h2>Latest project</h2>

<h3><a href="http://constructingthecommons.com/">Constructing the Commons Conference website</a></h3>
<picture>
  <!-- wide crop -->
  <source
    media="(min-width: 600px)"
    srcset="http://res.cloudinary.com/kiux/image/upload/c_fill,q_873,w_1440,bo_1px_solid_black/constructing-the-commons-01_bacwkf.png 600w,
            http://res.cloudinary.com/kiux/image/upload/c_fill,q_873,w_1440,bo_1px_solid_black/constructing-the-commons-01_bacwkf.png 1200w"
    sizes="100vw" />
  <!-- standard crop -->
  <img
    srcset="http://res.cloudinary.com/kiux/image/upload/f_auto,q_243,w_400/constructing-the-commons-01_bacwkf.png 400w,
            http://res.cloudinary.com/kiux/image/upload/f_auto,q_485,w_800/constructing-the-commons-01_bacwkf.png 800w"
    src="http://res.cloudinary.com/kiux/image/upload/f_auto,q_243,w_400/constructing-the-commons-01_bacwkf.png"
    alt="Constructing the Commons Conference website"
    sizes="100vw" />
</picture>


{% for project in site.portfolio %}

{% if project.redirect %}
<!-- <div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div> -->
{% else %}

<!-- <div class="project ">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.id }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div> -->

{% endif %}

{% endfor %}
