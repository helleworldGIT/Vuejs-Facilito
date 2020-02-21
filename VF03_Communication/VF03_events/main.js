// == NUESTRO COMPONENTE VUE ==

//El componente Vue se crea con Vue.component('nombreDelComponente', { ... })
Vue.component('probando-props', {
	
	// Dentro de "props", declaramos las props que hemos creado en el objeto Vue y que usaremos dentro del componente.
	props: {
	},
	
	methods: {
		// == 2 ==, creamos una función que va a lanzar un evento llamado "activa-mensaje"
		eventoMensaje () {
			this.$emit('activa-mensaje')
		}
	},
	
	// Dentro de la etiqueta 'template' creamos el HTML que pertenece a nuestro componente en cuestión...
	template:
	`
	<div>
		<!-- 
			== Desde el boton del componente, llamamos a la función creada en el compontente
			que va a lanzar el evento 'activa-mensaje' al objeto Vue ==
		-->
		<button @click="eventoMensaje">Lanzar la función</button>
	</div>
	`
})

// == NUESTRO OBJETO VUE ==

const app = new Vue({
	
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
	el: '#app',
	
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
	data: {
	},
	
	methods: {
		// == 1 ==, crear la función que vamos a llamar desde el componente
		sacarMensaje(){
			alert('Hola, soy la función del objeto vue activada a través del componente')
		}
	}
});