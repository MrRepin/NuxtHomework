<template>
  <div :class="$style.postCard">
    <div :class="$style.postCardHeader">
      <UiAvatar src="~/assets/images/avatar.png" />
      <span :class="$style.userName">
        PurpleSchool
      </span>
      <span :class="$style.days">
        4 дня назад
      </span>
    </div>
    <NuxtLink to="/posts/1" :class="$style.title">
      Добавить функцию голосования
    </NuxtLink>
    <p :class="$style.preview">
      Попробовать добавить в приложение функцию голосования, которая позволит определить,
      какая фича более полезна, а какая нет. После добавления поста появляется...
    </p>
    <div :class="$style.postCardFooter">
      <div :class="$style.likes">
        <div :class="$style.like">
          10 <Icon name="homework:thumbsup" size="18" />
        </div>
        <div :class="$style.like">
          1 <Icon name="homework:thumbsdown" size="18" />
        </div>
      </div>
      <div :class="$style.controls">
        <div :class="$style.archive">
          <Icon name="homework:archive" size="18" />
        </div>
        <div :class="$style.change">
          <Icon name="homework:pencil" size="18" />
          Изменить
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" module>
.postCard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 40px 0;
  border-top: 1px solid var(--color-grey-lighter);
}

.postCardHeader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: var(--font-weight-light);

  .userName {
    color: var(--color-black);
  }

  .days {
    color: var(--color-grey-light);
    padding-left: 8px;
  }
}

.title {
  font-size: 2.2rem;
  text-decoration: none;
  color: var(--color-black);
}

.preview {
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--color-grey-light);
  font-weight: var(--font-weight-light);
}

.postCardFooter,
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.likes {
  display: flex;
  align-items: center;
  gap: 13px;
}

.like,
.change{
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: var(--font-weight-light);
  font-size: 1.4rem;
  cursor: pointer;
}

.controls {
  gap: 2rem;
}
</style>