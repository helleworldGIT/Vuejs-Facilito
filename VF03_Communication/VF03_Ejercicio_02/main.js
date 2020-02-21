// == NUESTRO COMPONENTE VUE ==

//El componente Vue se crea con Vue.component('nombreDelComponente', { ... })
Vue.component('probando-props', {
	
	// Dentro de "props", declaramos las props que hemos creado en el objeto Vue y que usaremos dentro del componente.
	props: {
		//Como ves, es tan sencillo como declarar la variable y decir de qué tipo es (array, boolean, String, Number)
		imgs: Array,
		titulo: String
	},
	
	// Dentro de la etiqueta 'template' creamos el HTML que pertenece a nuestro componente en cuestión...
	template:
	`
	<div>
		<h1>
			{{ titulo }}
		</h1>
		<img v-for="img in imgs" :key="img.id" class="_img" :src="img">
	</div>
	`
})

// == NUESTRO OBJETO VUE ==

const app = new Vue({

	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
	el: '#app',

	//Recordemos que "data" es donde vamos a crear todas nuestras variables
		data: {
	//Es un aray de direcciones de imágenes del cielo porque Sky is the only limit 💜
	imgs: [
		"https://images.unsplash.com/photo-1528872042734-8f50f9d3c59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		"https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80",
		"https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		"https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		"https://images.unsplash.com/photo-1514519273132-6a1abd48302c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		"https://images.unsplash.com/photo-1499676277068-4f353b14870b?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
	],
	titulo: 'Mini galería de imágenes'
}
});