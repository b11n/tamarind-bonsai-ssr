<template>
  <div class="hello">
    <b-container>
      <b-row>
        <b-col sm="12" md="6" class="home-col">
          <HomeCard title="about">
            Tamarind Bonsai, Kottayam has 100+ varieties of tropical bonsai trees.
            These includes different varieties of Ficus tree, jade, tamarind, adenium etc.
            All of them have been developed with great care and scientifically over the years.
            One can also find saplings or very young versions of these at the Garden. Some of
            them are as old as 25 years. Please do visit to get a tour of the garden.
          </HomeCard>
        </b-col>
        <b-col sm="12" md="6" class="home-col">
          <HomeCard title="gallery">
            <gallery :mini="true" />
            <b-link class="btn btn-primary active learn-more" to="/gallery">View More</b-link>
          </HomeCard>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="12" class="home-col">
          <HomeCard title="contact">
            <icon />
          </HomeCard>
        </b-col>
      </b-row>
    </b-container>

    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="960"
      img-height="435"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src="../assets/slider/slide1.webp">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="960"
            height="435"
            src="../assets/slider/slide1.webp"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/slider/slide2.webp">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="960"
            height="435"
            src="../assets/slider/slide2.webp"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide img-src="../assets/slider/slide3.webp">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="960"
            height="435"
            src="../assets/slider/slide3.webp"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import {
  BCarousel,
  BCarouselSlide,
  BContainer,
  BLink,
  BRow,
  BCol
} from "bootstrap-vue";
import Gallery from "~/components/Gallery";
import Icon from "~/components/Icon";
import HomeCard from "~/components/HomeCard";

export default {
  name: "Home",
  head: function() {
    return {title: "Home | Tamarind Bonsai Kottayam - Browse and buy Bonsai plants , tools and resources in Kottayam , Kerala"};
  },
  components: {
    BCarousel,
    BCarouselSlide,
    BContainer,
    BRow,
    BLink,
    BCol,
    Gallery,
    Icon,
    HomeCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-col {
  margin-bottom: 32px;
}
.home-card {
  background: white;
  padding: 24px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 32px;
  height: 100%;
}

.learn-more {
  width: 100%;
}

.container {
  padding: 0;
}
</style>
