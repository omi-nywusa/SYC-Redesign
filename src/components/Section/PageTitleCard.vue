<template>
  <div class="page-title-card">
    <div class="page-title-card__img">
      <img src="" alt="" />
    </div>
    <div class="page-title-card__title">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.page-title-card {
  width: 1000px;
  height: 130px;
  margin: 0 auto;
  background-color: #d9d9d9;
  position: relative;
  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Archivo';
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
  }
}
</style>
