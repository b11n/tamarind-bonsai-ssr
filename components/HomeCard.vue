<template>
  <div class="home-card">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: #838383;
}

.home-card {
  background: white;
  padding: 14px 24px 24px 24px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 32px;
  height: 100%;
}
</style>