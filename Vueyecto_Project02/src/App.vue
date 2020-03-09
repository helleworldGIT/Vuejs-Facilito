<template>
  <div id="app">
    <!-- Importamos el componente Menu -->
    <Menu/>
    <!-- Importamos el componente Main -->
    <MainComp/>
    <!-- Importamos el componente Footer -->
    <FooterComp/>
  </div>
</template>

<script>
// Importando los componentes que queremos usar
import Menu from './components/Menu.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    Menu, MainComp, FooterComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
