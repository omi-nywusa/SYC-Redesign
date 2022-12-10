<template>
  <div class="sy-menu-panel">
    <div class="sy-menu-panel__header">
      <slot name="header" />
    </div>
    <div class="sy-menu-panel__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sy-menu-panel {
  background: #ffffff;
  border: 5px solid #ffa583;
  border-radius: 10px;
  width: 280px;
  &__header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    background: #ffa483;
    padding: 13px 0;
  }
  &__content {
    padding-top: 8px;
    padding-bottom: 20px;
  }
}
</style>
