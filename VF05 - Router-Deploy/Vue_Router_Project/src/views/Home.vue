<template>
  <div class="home">
    <img alt="Gif" src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif">
    <h1>¡Hola!</h1>
    <p>
      Veo que has llegado a este pequeño proyecto, ¡eso quiere decir que has llegado a Vuejs Facilito 05!
      <br><br>
      (O que estabas curioseando el repositorio de Github)
      <br><br>
      El objetivo de este proyecto es que eches un ojo al <span class="codemark"><i>index.js</i></span> dentro de la carpeta router y entiendas cómo funciona el Router de Vue.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  p{
    width: 40%;
    margin: auto;
    span{
      background-color: purple;
      font-weight: bold;
      color: white;
    }
  }
</style>