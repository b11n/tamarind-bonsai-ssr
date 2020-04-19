<template>
  <div class="root">
    <div class="title">
      <b-link :to="fullSlug">
        <div class="title-text">{{title}}</div>
      </b-link>
      <div class="date">{{date}}</div>
    </div>
    <div class="summary">
      {{summary}}
      <b-link class="read-more" :to="fullSlug">Read more</b-link>
    </div>
  </div>
</template>

<script>
import { BLink } from "bootstrap-vue";
export default {
  components: {
    BLink
  },
  props: {
    title: {
      default: "",
      type: String
    },
    summary: {
      default: "",
      type: String
    },
    date: {
      default: "",
      type: String
    },
    slug: {
      default: "",
      type: String
    }
  },
  computed: {
    fullSlug: function() {
      return "/blog/" + this.$props.slug;
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

.root {
  max-width: 960px;
  font-family: "Nunito", sans-serif;
  margin: 0 auto;
  margin-bottom: 32px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.title-text {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
  font-size: 22px;
}

.date {
  color: #2c3e50;
  font-size: 15px;
  font-weight: bold;
}

.read-more {
  font-size: 14px;
}

.summary {
  color: #2c3e50;
}
</style>