<template>
  <div class="root">
    <div class="title">
      <h1 class="title-text">{{blog.title}}</h1>
      <div class="date">{{blog.date}}</div>
    </div>
    <div class="summary" v-html="blog.html"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
  },
  data: function() {
      return {
          title: ''
      }
  },
  head: function() {
      return {
          title: this.title
      }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://www.tamarindbonsai.in/api/blogList`
    )
    const thisBlog = data.find((item)=>{
        return item.slug === params.id;
    });
    return { blog: thisBlog, title: thisBlog.title }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

.root {
  max-width: 960px;
  font-family: 'Nunito', sans-serif;
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
  margin-bottom: 24px;
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