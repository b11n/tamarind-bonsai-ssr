<template>
  <div class="root">
    <div v-for="row in rowCount" :key="row" :class="className">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    rowCount() {
      return this.mini ? 2 : 10
    },
    className() {
      return this.mini ? 'placeholder' : 'placeholder max'
    }
  },
  props: {
    mini: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>
.root {
  min-height: 100%;
}
.root {
  margin-bottom: 12px;
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.box {
  -webkit-animation-duration: 1.25s;
  animation-duration: 1.25s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: #f6f6f6;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, #f6f6f6),
    color-stop(18%, #f0f0f0),
    color-stop(33%, #f6f6f6)
  );
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 800px 104px;
  position: relative;
}

.placeholder {
  display: flex;
  justify-content: flex-start;
}

.placeholder.max .box {
  height: 140px;
}

.box {
  min-height: 80px;
  width: 25%;
  margin: 4px;
}
</style>