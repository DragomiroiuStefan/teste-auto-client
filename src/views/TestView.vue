<script setup>
import { ref } from 'vue';
import Timer from '@/components/Timer.vue'
import TestService from '@/services/TestService.js'

const questions = ref(null);
const totalCorrectAnswers = ref(0);
const totalWrongAnswers = ref(0);

function sendAnswer(index) {
  console.log(index)
  console.log(questions.value[index])
  questions.value[index].disabled = 'disabled'

  let question = questions.value[index]
  if (question.correctAnswers.toString() === question.selectedAnswers.toString()) {
    totalCorrectAnswers.value++;
  } else {
    totalWrongAnswers.value++;
  }
}

TestService.getTest('B')
  .then(response => {
    questions.value = response.data
  })
  .catch(error => {
    console.log(error)
  })

</script>

<template>
  <div class="p-d-flex p-flex-wrap">
    <p class="p-mr-2 p-d-inline">
      <span id="total-correct-answers">{{ totalCorrectAnswers }}</span> Raspunsuri corecte |
    </p>
    <p class="p-d-inline">
      <span id="total-wrong-answers">{{ totalWrongAnswers }}</span> Raspunsuri gresite
    </p>
  </div>
  <div class="p-d-flex p-jc-center">
    <Timer testDuration="20" />
  </div>

  <Carousel :value="questions" :numVisible="1" :numScroll="1">
    <template #item="slotProps">
      <div class="question-box">
        <h3>{{ slotProps.data.text }}</h3>
        <div class="p-field-checkbox">
          <Checkbox
            id="answer1"
            name="answer"
            value="1"
            v-model="slotProps.data.selectedAnswers"
            :disabled="slotProps.data.disabled"
          />
          <label for="answer1">{{ slotProps.data.answers[0] }}</label>
        </div>
        <div class="p-field-checkbox">
          <Checkbox
            id="answer2"
            name="answer"
            value="2"
            v-model="slotProps.data.selectedAnswers"
            :disabled="slotProps.data.disabled"
          />
          <label for="answer2">{{ slotProps.data.answers[1] }}</label>
        </div>
        <div class="p-field-checkbox">
          <Checkbox
            id="answer3"
            name="answer"
            value="3"
            v-model="slotProps.data.selectedAnswers"
            :disabled="slotProps.data.disabled"
          />
          <label for="answer3">{{ slotProps.data.answers[2] }}</label>
        </div>
        <Button
          label="Trimite raspunsul"
          @click="sendAnswer(slotProps.index)"
          :disabled="slotProps.data.disabled"
        />
      </div>
    </template>
  </Carousel>
</template>

<style scoped>
.question-box {
  margin-left: 3%;
  margin-top: 3%;
}
.p-field-checkbox {
  margin-bottom: 0.4rem;
}
.p-checkbox {
  margin-right: 0.5rem;
}
.p-button {
  margin-top: 1rem;
}
#total-correct-answers {
  color: rgb(0, 146, 0);
}
#total-wrong-answers {
  color: red;
}
</style>
