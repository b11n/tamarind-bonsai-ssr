<template>
  <div ref="root" class="root">
    <client-only>
      <div v-if="photos.length === 0">
        <GalleryPlaceholder slot="placeholder" :mini="mini" />
      </div>
      <div v-else class="awesome-gallery">
        <div v-for="row in photos" class="gallery-row" :key="row.id">
          <figure
            v-for="image in row.list"
            :key="image.id"
            itemprop="associatedMedia"
            itemscope
            itemtype="http://schema.org/ImageObject"
          >
            <a :href="image.url_l" itemprop="contentUrl" :data-size="image.dimension.s_text">
              <img
                class="imgInner"
                :src="image.url_s"
                itemprop="thumbnail"
                :alt="image.title"
                :width="image.dimension.width"
                :height="image.dimension.height"
              />
            </a>
            <figcaption itemprop="caption description">{{image.title}}</figcaption>
          </figure>
        </div>
      </div>
      <GalleryPlaceholder slot="placeholder" :mini="mini" />
    </client-only>
  </div>
</template>

<script>
import axios from 'axios'
import GalleryPlaceholder from './GalleryPlaceholder'
import { layoutImages } from './common/utils.js'
export default {
  components: { GalleryPlaceholder },
  props: {
    mini: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return { photos: [], source: null }
  },

  mounted: function() {
    axios
      .get(`https://us-central1-tamarind-bonsai.cloudfunctions.net/api/api/photoList`)
      .then(({ data }) => {
        this.photos = layoutImages(data, {
          width: this.$refs.root.getBoundingClientRect().width,
          thumbnails: this.$props.mini
        })
      })
      .catch(() => {
        this.photos = []
      })
  }
}
</script>


<style scoped>
.gallery-row {
  display: flex;
}

.imgInner {
  padding: 5px;
  box-sizing: border-box;
}

figure {
  margin: 0;
}

figcaption {
  display: none;
}

.loader {
  min-height: 200px;
}
</style>