// == NUESTRO COMPONENTE VUE ==

//El componente Vue se crea con Vue.component('nombreDelComponente', { ... })
Vue.component('probando-props', {
	
	// Dentro de "props", declaramos las props que hemos creado en el objeto Vue y que usaremos dentro del componente.
	props: {
		//Como ves, es tan sencillo como declarar la variable y decir de qué tipo es (array, boolean, String, Number)
		saludame: String
	},
	
	// Dentro de la etiqueta 'template' creamos el HTML que pertenece a nuestro componente en cuestión...
	template:
	`
	<div>
		<p>
			{{ saludame }}
		</p>
	</div>
	`
})

// == NUESTRO OBJETO VUE ==

const app = new Vue({
	
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
	el: '#app',
	
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
	data: {
      saludo: '¡Hola! Me conocerás de capítulos anteriores, ahora estamos probando props'
	}
});