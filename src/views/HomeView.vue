<script setup>
import { ref } from 'vue';
import CategoryService from '../services/CategoryService.js'

const selectedCategory = ref();

const categories = ref([]);

CategoryService.getCategories()
  .then(response => {
    categories.value = response.data
  })
  .catch(error => {
    console.log(error)
  })

</script>

<template>
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
      optionLabel="categoryId"
      placeholder="Selecteaza o categorie"
    />
    <router-link to="/test">
      <Button label="Incepe test" />
    </router-link>
</template>

<style scoped>
.p-dropdown {
  width: 16rem;
}
.p-button {
  margin-left: 1rem;
}
</style>
