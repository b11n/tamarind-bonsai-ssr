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
      <button v-if="!mini && currentPage != totalPage">Load More</button>
      <GalleryPlaceholder slot="placeholder" :mini="mini" />

      <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
          <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
          </div>
          <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

              <span class="rotation-wrapper">
              </span>

              <button class="pswp__button pswp__button--share" title="Share"></button>
              <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip"></div>
            </div>
            <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import GalleryPlaceholder from './GalleryPlaceholder'
import { layoutImages } from './common/utils.js'
import initPhotoSwipe from './common/photoSwipe.js';

export default {
  components: { GalleryPlaceholder },
  props: {
    mini: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return { rawPhotoList: [], photos: [], source: null, currentPage: 1,totalPage: 1 }
  },
  methods: {
    fetchPage: function() {
    this.$axios
      .get(`/api/photoList?pageNo=${this.currentPage}`)
      .then(({ data }) => {
        
        this.rawPhotoList = this.rawPhotoList.concat(data.photoset.photo)
        this.totalPage = data.photoset.pages;
        this.currentPage = parseInt(data.photoset.page)
        this.photos = layoutImages(this.rawPhotoList, {
          width: this.$refs.root.getBoundingClientRect().width,
          thumbnails: this.$props.mini
        });
      })
      .catch((e) => {
        this.photos = []
      })
    },
  },

  mounted: function() {
    this.fetchPage();
  },
  updated: function() {
    if(this.photos.length > 0) {
      initPhotoSwipe('.awesome-gallery', this);
    }
  },
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