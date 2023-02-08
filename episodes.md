---
layout: default
title: Episodes
permalink: /episodes/
---

<div class = "episodes">

<h2> Episodes </h2>
<ul>
{% for post in site.posts %}    
    {% if post.type == "main" %}
        <li>
            <a href="{{ post.url }}"> {{ post.title }} </a>
        </li>
    {% endif %}

{% endfor %}

</ul>

</div>
