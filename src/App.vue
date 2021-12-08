<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Teste-auto',
    to: '/'
  },
  {
    label: 'Testele mele',
    to: '/my-tests'
  },
]);

</script>

<template>
  <header>
    <nav>
      <Menubar :model="items">
        <template #end>
          <Button id="auth-button" label="Autentificare" class="p-button-raised p-button-secondary"/>
        </template>
      </Menubar>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  margin: auto;
  width: 80%;
  margin-top: 20px;
}

</style>
