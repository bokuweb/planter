---
layout: doc
---

<script setup>
  import Hero from './components/Hero.vue'
  import ArticleCard from './components/ArticleCard.vue'
  import data from '../data.json'

  if ((window.location && !window.location.href.includes('articles')))  {
    const el = document.querySelector('a.next');
    if (el) el.style.display = 'none';
  }
</script>

<div v-for="(article, index) in data" :key="index">
  <div class="card-wrapper">
  <ArticleCard :title="article.title" :excerpt="article.excerpt" :image="article.image" :author="article.Author" :href="article.path" :date="article.Updated" />
  </div>
</div>
