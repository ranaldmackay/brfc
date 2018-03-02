---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<h1>This is the home page</h1>

<ul>
{% for post in site.posts %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>

<ul>
{% for preview in site.previews %}
<li>
  <a href="{{ preview.url }}">{{ preview.title }}</a>
</li>
{% endfor %}
</ul>
