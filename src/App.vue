<script lang="ts" setup></script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
#nprogress {
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
}
#nprogress .bar {
  background: #f56c6c !important;
  height: 2px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #4e4e4e;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}
</style>
