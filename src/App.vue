<script setup>
import { ref } from 'vue';

const items = ref([
  {
    separator: true
  },
  {
    label: 'Testele mele',
    to: '/my-tests'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]);

</script>

<template>
  <header>
    <nav>
      <Menubar id="menu-bar" :model="items">
        <template #start>
          <router-link to="/">
            <img src="@/assets/logo.png" alt="logo" />
          </router-link>
        </template>
        <template #end>
          <router-link to="/login">
            <Button
              id="auth-button"
              label="Autentificare"
              class="p-button-raised p-button-secondary"
            />
          </router-link>
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
  margin-top: 40px;
}
#menu-bar {
  padding-top: 0%;
  padding-bottom: 0%;
}
.p-menu-item {
  margin-left: 1%;
}
</style>
