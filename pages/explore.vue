<template>
    <div class="root">
        <Gallery />
    </div>
</template>

<script>
import Gallery from '~/components/Gallery'
export default {
    components: {
        Gallery
    },
head: function() {
    return {title: "Explore | Tamarind Bonsai Kottayam - Browse and buy Bonsai plants , tools and resources in Kottayam , Kerala"}
  },
}
</script>

<style scoped>
    .root {
        background: white;
    }
</style>