<template>
  <!-- slideshow -->
  <div class="sy-slideshow">
    <div class="sy-slideshow__container">
      <div
        class="sy-slideshow__container__slides"
        :style="{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: `transform ${transitionDuration}ms`,
        }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="sy-slideshow__container__slides__slide">
          <img :src="slide.src" :alt="slide.alt" />
        </div>
      </div>
      <div class="sy-slideshow__container__dots">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="sy-slideshow__container__dots__dot"
          :class="{ 'sy-slideshow__container__dots__dot--active': index === currentSlide }"
          @click="currentSlide = index"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const slides = ref([
  {
    id: 1,
    src: 'https://images.pexels.com/photos/12238173/pexels-photo-12238173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '#',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/10610441/pexels-photo-10610441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '#',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/10026662/pexels-photo-10026662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: '#',
  },
])
const currentSlide = ref(0)
const slideInterval = ref(5000)
const transitionDuration = ref(800)

onMounted(() => {
  setInterval(() => {
    if (currentSlide.value < slides.value.length - 1) {
      currentSlide.value += 1
    } else {
      currentSlide.value = 0
    }
    console.log(currentSlide.value)
  }, slideInterval.value)
})
</script>

<style lang="scss" scoped>
.sy-slideshow {
  width: 100%;
  height: 100%;
  &__container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    &__slides {
      width: 100%;
      height: 100%;
      display: flex;
      &__slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        background-color: #d9d9d9;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    &__dots {
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      &__dot {
        width: 34px;
        height: 30px;
        border-radius: 50%;
        background-color: #d9d9d9;
        margin: 0 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        &--active {
          background-color: #4e4e4e;
        }
        &:hover {
          background-color: #4e4e4e;
        }
      }
    }
  }
}
</style>
