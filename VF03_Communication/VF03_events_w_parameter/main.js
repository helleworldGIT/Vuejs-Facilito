// == NUESTRO COMPONENTE VUE ==

//El componente Vue se crea con Vue.component('nombreDelComponente', { ... })
Vue.component('probando-props', {
	
	props: {
	},
	
	methods: {
		//La función $emit de Vue acepta un segundo parámetro, es decir, un nombre de evento y otro valor. En esta caso la usaremos para pasar un nuevo color.
		cambiar() {
			this.$emit('activa-color', 'f5f644')
		}
	},
	
	template:
	`
	<div>
		<button @click="cambiar()">Cambiar color del mensaje</button>
	</div>
	`
})

// == NUESTRO OBJETO VUE ==

const app = new Vue({
	
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
	el: '#app',
	
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
	data: {
		name: 'Desiré',
		color: 'FF96C8'
	},
	
	methods: {
		//Para que el evento pueda pasar el nuevo color desde el componente, la función en el objeto Vue debe aceptar un parámetro.
		cambiarColor(newColor){
			this.color = newColor
		}
	}
});