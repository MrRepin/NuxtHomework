<template>
  <div :class="$style.container">
    <MainAside />
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<style lang="css" module>
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
}

.content {
  padding: 2rem;
}
</style>