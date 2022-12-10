<script lang="ts" setup>
import TheHeader from '../components/TheHeader.vue'

const route = useRoute()
const bodyColor = computed(() => route.meta.bodyColor)
</script>

<template>
  <the-header />
  <div class="bg-color-wrapper"></div>
  <div class="content-wrapper">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.bg-color-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: v-bind(bodyColor);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: all 400ms ease-out;
}
.content-wrapper {
  max-width: 1280px;
  width: 100%;
  margin: 40px auto;
  background: #ffffff;
  border-radius: 10px;
}
</style>
