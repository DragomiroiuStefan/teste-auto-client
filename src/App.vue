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
  {
    label: 'Autentificare',
    visible: true,
    class: 'menu-right'
  },
  {
    label: 'Inregistrare',
    visible: true,
    class: 'menu-right'
  }
]);

</script>

<template>
  <header>
    <nav>
      <Menubar :model="items">
        <!-- <template #end>
          <Button label="Autentificare" />
          <Button label="Inregistrare" />
        </template>-->
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
  margin-top: 40px;
}
</style>
