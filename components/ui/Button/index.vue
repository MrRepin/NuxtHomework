<script setup lang="ts">
const { type = 'primary' } = defineProps<{
  type?: 'primary' | 'ghost'
}>();
</script>

<template>
  <button :class="[$style.button, $style[type]]">
    <slot />
  </button>
</template>

<style lang="css" module>
.button {
  border: 1px solid var(--color-black);
  border-radius: var(--radius-default);
  background-color: var(--color-white);
  cursor: pointer;
  padding: 1.6rem 1.8rem;
  font-weight: var(--font-weight-bold);
  font-size: 1.6rem;

  &.primary {
    background-color: var(--color-black);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-white);
      color: var(--color-black);
    }
  }

  &.ghost {
    background-color: var(--color-white);
    color: var(--color-black);

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }
}
</style>