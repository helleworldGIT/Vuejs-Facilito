<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hemos trasteado con un componente para ver la reactividad de Vue.
    </p>
    <img src="https://media.giphy.com/media/xUA7aMYThXDVx4y5O0/giphy.gif">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // La prop msg definida
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Añadiendo algo de espacio inferior a la imagen GIF */
img {
  margin-bottom: 4rem;
}
</style>
