
<template>
  <div>
    <ListItem
      v-for="blogSummary in blogSummaryList"
      :key="blogSummary.id"
      :title="blogSummary.title"
      :summary="blogSummary.summary"
      :date="blogSummary.date"
      :slug="blogSummary.slug"
    />
  </div>
</template>

<script>
import ListItem from '~/components/blog/ListItem'

export default {
  components:{
      ListItem
  },
  head: function() {
    return {title: "Blog | Tamarind Bonsai Kottayam - Browse and buy Bonsai plants , tools and resources in Kottayam , Kerala"};
  },
  async asyncData ({ $axios, params }) {
    const { data } = await $axios.get('/api/blogList')
    return { blogSummaryList: data.reverse() }
  }
}
</script>