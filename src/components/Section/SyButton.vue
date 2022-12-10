<template>
  <button class="sy-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sy-button {
  background-color: #f279ca;
  border-radius: 10px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  line-height: 50px;
  padding: 0 27px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: #e471bd;
  }
}
</style>
