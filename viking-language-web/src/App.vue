<script setup>
import { ref, computed } from 'vue'
import NavBar from './components/NavBar.vue'
import TranslateToEnglish from './components/TranslateToEnglish.vue'
import ConjugateWeakVerb from "./components/ConjugateWeakVerb.vue";

const routes = {
  '/exercise1': TranslateToEnglish,
  '/exercise2': ConjugateWeakVerb
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <header>
  </header>

  <main>
    <NavBar></NavBar>
    <component :is="currentView" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
