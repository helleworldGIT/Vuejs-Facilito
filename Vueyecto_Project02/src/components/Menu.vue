<template>
  <div>
    <ul>
      <li>
        Inicio
      </li>
      <li>
        Sobre mí
      </li>
      <li>
        Galería
      </li>
      <li>
        Contacto
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  text-align: right;
  margin-right: 3em;
}
ul li{
  display: inline-block;
  padding: 0.667rem;
}
ul li:hover{
  font-weight: bold;
  color: #cc0e74;
  cursor: pointer;
}
</style>
