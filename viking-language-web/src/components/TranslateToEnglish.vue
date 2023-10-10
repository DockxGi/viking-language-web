<template>
  <h2>Exercise 1</h2>
  <p class="task">
    Translate old norse words to english.

    <button @click="getWords">Start</button>
  </p>
  <div v-if="!loading" class="questions">
    <TranslateSingleWordToEnglish :word="word" v-for="word in words" :key="word.id" />
  </div>
</template>

<script>
import axios from 'axios'
import TranslateSingleWordToEnglish from "./TranslateSingleWordToEnglish.vue";

export default  {
  components: {TranslateSingleWordToEnglish},
  data() {
    return {
      words: null,
      loading: null
    }
  },
  methods: {
    async getWords() {
      this.loading = true;
      this.words = (await axios.post('http://localhost:8080/word/random/set', {
        amount: 10
      })).data;
      this.loading = null;
    }
  }
}
</script>

<style scoped>
 .questions {
   width: 100%;
   display: inline-flex;
   flex-direction: column;
   flex-wrap: wrap;
   height: 500px;
 }
</style>