<template>
  <div class="sy-image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  alt?: string | undefined
}>()
</script>

<style lang="scss" scoped>
.sy-image {
  background-color: #d9d9d9;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
