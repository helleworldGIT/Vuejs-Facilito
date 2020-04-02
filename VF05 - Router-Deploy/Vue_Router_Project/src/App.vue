<template>
  <div id="app">
    <div id="nav">
      <!-- La etiqueta "router-link" en Vue simula la etiqueta <a> en HTML -->
      <router-link to="/"><span>『</span>Home<span>』</span></router-link>
      <router-link to="/about"><span>『</span>About<span>』</span></router-link>
      <router-link to="/gifparty"><span>『</span>Gif PARTY<span>』</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 0.667rem;
    span{
      display: none;
    }

    &.router-link-exact-active {
      color: #42b983;
      span{
        display: inline;
      }
    }
  }
}
</style>
