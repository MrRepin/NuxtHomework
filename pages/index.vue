<template>
  <div :class="$style.postsPage">
    <div :class="$style.posts">
      <PostCard />
    </div>
  </div>
</template>

<style lang="postcss" module>
.postsPage {
  display: flex;
  flex-direction: column;
  padding: 40px 140px;
}

.posts {
  width: 100%;
  max-width: 550px;
}
</style>