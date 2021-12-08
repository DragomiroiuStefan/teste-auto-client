<script setup>
import { ref } from 'vue'
import UserTestService from '@/services/UserTestService.js'

let userId = 2;
let userTests = ref([]);

UserTestService.getUserTests(userId)
  .then(response => {
    userTests.value = response.data
  })
  .catch(error => {
    console.log(error)
  })
</script>

<template>
  <div>
    <h1>Ultimele rezultate</h1>

    <DataTable
      :value="userTests"
      showGridlines
      stripedRows
      responsiveLayout="scroll"
      :paginator="true"
      :rows="3"
    >
      <Column field="categoryId" header="Categorie" :sortable="true"></Column>
      <Column field="endTime" header="Finalizat la" :sortable="true"></Column>
      <Column field="timeSpent" header="Durata"></Column>
      <Column field="answers" header="Raspunsuri"></Column>
      <Column field="total" header="Total"></Column>
    </DataTable>
  </div>
</template>

<style scoped>
</style>
