<template>
  <div class="home">
    <h2 class="home-title">Welcome to State Your CASE!</h2>
    <div class="home-section">
      <section class="home-section__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Feugiat in ante metus dictum at
        tempor commodo. Aliquam faucibus purus in massa tempor nec feugiat nisl. Viverra tellus in hac habitasse platea.
        <div class="home-section__content-btn">
          <SyButton> Add Your School </SyButton>
        </div>
      </section>
      <div class="home-section__slideshow">
        <SySlideshow />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SyButton from '../components/Section/SyButton.vue'
import SySlideshow from '../components/Section/SySlideshow.vue'
</script>

<style lang="scss" scoped>
.home {
  &-title {
    text-align: center;
    color: #4e4e4e;
    font-size: 40px;
    line-height: 50px;
    font-weight: 500;
    padding-top: 18px;
  }
  &-section {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    &__content {
      margin-top: 40px;
      width: 710px;
      padding-left: 60px;
      padding-right: 58px;
      font-size: 20px;
      line-height: 45px;
      color: #4e4e4e;
      &-btn {
        margin-top: 138px;
        display: flex;
        justify-content: center;
      }
    }
    &__slideshow {
      width: 567px;
      padding-right: 40px;
      padding-bottom: 88px;
      height: 630px;
    }
  }
}
</style>
