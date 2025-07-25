<template>
  <div :class="$style.mainAside">
    <div :class="$style.widget">
      <NuxtLink :active-class="$style.activeLink" to="/">
        <Icon name="homework:home" size="24" />
      </NuxtLink>
    </div>
    <div :class="$style.widget">
      <NuxtLink :active-class="$style.activeLink" to="/">
        <Icon name="homework:exit" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="css" module>
.mainAside {
  padding: 40px 30px;
  border-right: 1px solid var(--color-grey-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: var(--color-grey-light);
}

.activeLink {
  color: var(--color-black);

  &:hover {
    color: var(--color-black);
  }
}

.widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
}
</style>