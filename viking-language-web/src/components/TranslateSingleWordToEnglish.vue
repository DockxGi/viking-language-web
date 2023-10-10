<template>
  <div class="question-item">
    <div class="question">
      <span>{{word.latinNotation}}</span>
      <span class="correct-answer" v-if="correct">rét</span>
      <span class="wrong-answer" v-if="correct === false">rangt</span>
    </div>
    <div class="answer">
      <input type="text" size="20" v-model="userText">
      <button class="submit-button" @click="checkAnswer(userText)">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['word'],
  data() {
    return {
      userText: null,
      correct: null
    }
  },
  name: "TranslateSingleWordToEnglish",
  methods: {
    checkAnswer(userText) {
      let _this = this;

      function matchesEnglishTranslation(translations, userText) {
        console.log("dockxdockx", translations);
        for(let translation of translations){
          if (translation.languageCode === 'en'&& userText === translation.text){
            return true;
          }
        }
        return false;
      }

      function onTranslationsReceived(translations) {
        let correct = matchesEnglishTranslation(translations, userText);
        console.info("Correct Answer: ", correct);
        _this.correct = correct;
      }

      axios.get('http://localhost:8080/word/' + this.word.id + '/translation').then((response) =>{
        onTranslationsReceived(response.data);
      });
    }
  }
}
</script>

<style scoped>
  .question-item {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    border-radius: 10px;
    font-size: 2em;
    display: inline-block;
    background-color: lightblue;
    padding: 10px;
    margin: 10px;
  }
  .correct-answer {
    margin-left: 10px;
    color: ivory;
    background-color: green;
    border-radius: 10px;
    padding: 5px;
  }
  .wrong-answer {
    margin-left: 10px;
    color: ivory;
    background-color: red;
    border-radius: 10px;
    padding: 5px;
  }
  .submit-button {
    margin-left: 10px;
    border-radius: 10px;
  }
</style>