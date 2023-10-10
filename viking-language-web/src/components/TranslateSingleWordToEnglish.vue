<template>
  <div class="question-item">
    <div class="question">
      {{word.latinNotation}}
    </div>
    <div class="answer">
      <input type="text" size="20">
      <button class="submit-button">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['word'],
  setup(props){
    console.log(props)
  },
  name: "TranslateSingleWordToEnglish"
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
  .submit-button {
    margin-left: 10px;
    border-radius: 10px;
  }
</style>