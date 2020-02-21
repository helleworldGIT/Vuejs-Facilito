// == NUESTRO COMPONENTE VUE ==

//El componente Vue se crea con Vue.component('nombreDelComponente', { ... })
Vue.component('Presentacion', {
	//Por supuesto, el componente tiene su propio "data" donde guardar sus variables propias
  data() {
    return {
      saludo: '¡Hola! Soy Desiré, te saludo desde un componente'
    }
  },
// Dentro de la etiqueta 'template' creamos el HTML que pertenece a nuestro componente en cuestión...
  template:
  `
	<div>
		<p>{{ saludo }}</p>
	</div>
  `
})

// == NUESTRO OBJETO VUE ==

const app = new Vue({
	
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
	el: '#app',
	
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
	data: {		
		seen: false
	},
	
	//En Methods crearemos nuestras funciones, de igual manera que en Data creamos nuestras variables.
	methods: {
		see(){
			//Es necesario utilizar la palabra "this" para que Vue encuentre las variables creadas en Data.
			this.seen = true
		}
	}
});