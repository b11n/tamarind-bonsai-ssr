<template>
  <div id="app">
    <div class="header">
      <div class="mask"></div>
      <div class="content-block-app">
        <div class="main logo">Tamarind Bonsai</div>
      </div>
    </div>
    <div class="nav-wrapper">
      <div class="content-block-app">
        <div ref="smallLogo" class="small-logo">
          <div class="logo">Tamarind Bonsai</div>
        </div>
        <div class="nav-item">
          <div class="text">
            <router-link to="/">Home</router-link>
          </div>
        </div>
        <div class="nav-item">
          <div class="text">
            <router-link to="/gallery">Gallery</router-link>
          </div>
        </div>
        <div class="nav-item">
          <div class="text">
            <router-link to="/blog">Blog</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="content-block-app" ref="root">
        <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Tamarind Bonsai Kottayam- Browse and buy Bonsai plants , tools and resources in Kottayam Kerala' }
      ]
    }
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  background: #f6f6f6 !important;
  font-family: "Open Sans", sans-serif;
}

.text a {
  text-decoration: none;
  padding: 14px 24px;
}

.text a:hover {
  text-decoration: none;
  padding: 14px 24px;
}


.content-block-app {
  padding: 24px;
  box-sizing: border-box;
}

.small-logo {
    overflow: hidden;
    transition: width .2s ease;
    width: 0;
}

.small-logo.shown {
  width: 72px;
}

.small-logo .logo {
  font-family: "Girassol", sans-serif;
  font-size: 18px;
}

.main.logo {
  font-family: "Girassol", sans-serif;
  font-size: 48px;
  min-height: 84px;
  position: absolute;
  bottom: -20px;
  color: white;
}

.header {
  position: relative;
  background-image: url("~assets/cover2-min.jpg");
  height: 256px;
  background-position: center;
  background-size: cover;
}

.content-block-app {
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
}

.mask {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0.733) 0%,
    rgba(0, 0, 0, 0.62) 5%,
    rgba(0, 0, 0, 0) 34%
  );
}

.nav-wrapper {
  height: 48px;
  background: white;
  border-bottom: 2px solid #e1e1e1;
  position: sticky;
  top: 0;
  z-index: 1;
  
}

.nav-wrapper .content-block-app {
  display: flex;
  align-items: center;
  position: sticky !important;
  top: 0;
}

.nav-item {
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.nav-item:hover::after {
  content: " ";
  display: block;
  height: 2px;
  background: #00be13;
  top: 10px;
  position: relative;
}

.kg-card-markdown img {
   margin: 0 auto;
   display: block;
   max-width: 100%;
}

.kg-card-markdown {
  display: flex;
  flex-direction: column;
}
</style>
