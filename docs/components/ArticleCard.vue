<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  methods: {
    truncateText(text, length) {
      const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
      const segments = [...segmenter.segment(text)].map((s) => s.segment);
      if (segments.length > length) {
        return segments.slice(0, length).join("") + "...";
      }
      return text;
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="flex">
      <div class="media">
        <a :href="href">
          <img :src="image" :alt="title" loading="lazy" />
        </a>
      </div>
      <div class="details">
        <a :href="href">
          <h2 class="title">{{ title }}</h2>
        </a>
        <span class="date">{{ date }}</span>
        <p class="excerpt">{{ truncateText(excerpt, 100) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  overflow: hidden;
  width: 100%;
}

.card:hover {
  transition: ease-in-out 0.2s all;
}

.flex {
  display: flex;
}

.media {
  width: 30%;
  height: 100%;
  flex: none;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.title {
  border-top: none;
  margin: 0 0;
  padding: 0;
}

h2.title {
  border-top: none;
  margin: 0 0;
  padding: 0;
  font-size: 20px;
}

.date {
  margin: 0 0;
  font-size: 0.7rem;
}
</style>
