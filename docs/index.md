<script setup>
  import Hero from './components/Hero.vue'
  import ArticleCard from './components/ArticleCard.vue'
  import data from '../data.json'
</script>

<div v-for="(article, index) in data" :key="index">
  <div class="card-wrapper">
  <ArticleCard :title="article.title" :excerpt="article.excerpt" :image="article.image" :author="article.Author" :href="article.path" :date="article.Updated" />
  </div>
</div>
