---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---
<h1>This is the home page</h1>

<h2>News Articles</h2>
<ul>
{% for post in site.posts %}
<li>
  <a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>

<h2>Upcoming Fixtures</h2>
<ul>
{% assign upcoming = site.fixtures | sort: 'match-date' | where: 'status', 'Upcoming' %}
{% for fixture in upcoming %}
<li>
  <a href="{{ fixture.url }}">{{ fixture.match-date }} {{ fixture.title }}</a>
</li>
{% endfor %}
</ul>


<h2>Completed Fixtures</h2>
<ul>
{% assign completed = site.fixtures | sort: 'match-date' | where: 'status', 'Completed' %}
{% for fixture in completed %}
<li>
  <a href="{{ fixture.url }}">{{ fixture.match-date }} {{ fixture.title }} {{ fixture.home-score }} - {{ fixture.away-score }}</a>
</li>
{% endfor %}
</ul>
