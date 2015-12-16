---
layout: post
title:  Good (part of the day)
date: 2015-12-16 20:50:-0.1
description: A dynamic message in Jekyll, the static site generator
---
<a href="https://jekyllrb.com/">Jekyll</a>, the static website generator that I choose to use, is –as the name indicates– a <em>static</em> website generator. After choosing Jekyll, I wanted to add a dymamic welcome message to the homepage. As the page is generated and static, I used Javascript to make it dynamic. When the homepage is loaded, the default welcome message is replaced by another one. Depending on the time of day it will say <em>Good evening</em>, <em>Good night</em>, <em>Good afternoon</em> or <em>Good morning</em> in a few different languages. Every time the page is loaded a random message is choosen to be displayed.

See this Javascript on how it works.
<script src="https://gist.github.com/jooplaan/1f4063c0d62f7597565b.js"></script>

I am not a Javascript expert and this code can probably be optimized, but hey it works! <a href="/">Reload the homepage a few times</a> to see it in action.



{% include prev-next.html %}
