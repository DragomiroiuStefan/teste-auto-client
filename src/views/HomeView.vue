<script setup>
import { ref } from 'vue';

const selectedCategory = ref();

const categories = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <main>
    <h1>Simulare examen auto</h1>
    <p>
      În această secțiune, chestionarele sunt concepute după modelul chestionarelor de la examinarea teoretică pe care o vei susține pentru obținerea
      permisului de conducere. Atentie! De această dată întrebările nu mai au indicii și explicații.
      Chestionarele auto conțin 26 de întrebări din toate capitolele și, dupa cum știi, pentru promovarea examinării ai nevoie de obținerea unui punctaj
      de minim 22 de răspunsuri corecte.
    </p>
    <Dropdown
      v-model="selectedCategory"
      :options="categories"
      optionLabel="name"
      placeholder="Select a Category"
    />
    <Button label="Incepe test" />
  </main>
</template>

<style scoped>
main {
  margin: auto;
  width: 60%;
  margin-top: 40px;
}
.p-dropdown {
    width: 12rem;
}
.p-button {
  margin-left: 1%;
}
</style>
