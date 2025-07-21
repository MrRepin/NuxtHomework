<script setup lang="ts">
import type {NuxtError} from "#app";

const errorsText = {
  404: 'Страница не найдена, попробуйте перейти на главную страницу',
};

const { error } = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div :class="$style.errorPage">
    <div :class="$style.error">
      <h1 :class="$style.title">
        {{ error.statusCode }} ошибка
      </h1>
      <div :class="$style.content">
        {{ errorsText[error.statusCode as keyof typeof errorsText] }}
      </div>
      <UiButton :class="$style.button" type="ghost" @click="navigateTo('/')">
        Главная страница
      </UiButton>
    </div>
  </div>
</template>

<style lang="css" module>
.errorPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.error {
  height: max-content;
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  text-align: center;
  align-items: center;
}

.title {
  font-weight: var(--font-weight-medium);
  font-size: 3.3rem;
}

.content {
  color: var(--color-grey-light);
  font-size: 2rem;
}

.button {
  margin-top: 40px;
  width: max-content;
}
</style>