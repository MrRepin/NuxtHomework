<script setup lang="ts">
const { src } = defineProps<{ src: string }>();
</script>

<template>
  <div :class="$style.avatar">
    <NuxtImg
      :src="src"
      width="24px"
      height="24px"
    />
  </div>
</template>

<style lang="postcss" module>
.avatar {
  background: red;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
}
</style>