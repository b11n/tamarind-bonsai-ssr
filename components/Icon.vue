<template>
  <div class="root">
    <a href="tel:+919447272157">
      <div class="icon-wrap">
        <div class="icon-box">
          <svg
            class="svg"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
            />
          </svg>
        </div>
        <b-button variant="link">CALL</b-button>
      </div>
    </a>
    <a target="_blank" href="https://www.google.com/maps/dir//Tamarind%20Bonsai,%20Kottayam">
      <div class="icon-wrap">
        <div class="icon-box">
          <svg
            class="svg"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"
            />
          </svg>
        </div>
        <b-button variant="link">DIRECTIONS</b-button>
      </div>
    </a>
  </div>
</template>

<script>
import { BIcon, BButton } from "bootstrap-vue";

export default {
  components: {
    BIcon, 
    BButton
  }
};
</script>


 <style scoped>
.icon-wrap {
  width: 64px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.icon-box {
  width: 48px;
  height: 48px;
  border: 2px solid #1782ff;
  border-radius: 50%;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg {
  width: 32px;
  height: 32px;
  padding: 0px;
  fill: #1782ff;
}

.root {
  display: flex;
  justify-content: space-around;
      align-items: center;
    height: 100%;
}
</style>