<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- La prop "msg" ya está definida dentro del componente, le pasamos un valor -->
    <HelloWorld msg="¡Cambiamos un componente!"/>
  </div>
</template>

<script>
// Importando el componente que queremos usar, HelloWorld
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
