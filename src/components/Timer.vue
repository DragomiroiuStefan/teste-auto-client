<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  testDuration: Number
})

let minutes = ref(props.testDuration)
let seconds = ref(0)

const displayedSeconds = computed(() => {
  return seconds.value < 10 ? '0' + seconds.value : seconds.value;
})

let timerInterval = setInterval(function () {
  seconds.value--;
  if (seconds.value < 0) {
    seconds.value = 59
    minutes.value--
  }
  if (minutes.value < 0) {
    seconds.value = 0
    minutes.value = 0
    clearInterval(timerInterval);
    //todo finish test
  }
}, 1000);

</script>

<template>
<div id="timer">
  <p>{{ minutes }} : {{ displayedSeconds }}</p>
</div>
</template>

<style scoped>
#timer {
  width: 100px;
  text-align: center;
  font-size: 1.5em;
  border: 1px solid black;
  border-radius: 10px;
}
p {
  margin: 10px 0px 7px 0px;
}
</style>