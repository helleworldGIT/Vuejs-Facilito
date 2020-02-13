// == NUESTRO COMPONENTE VUE ==

//El componente Vue se crea con Vue.component('nombreDelComponente', { ... })
Vue.component('Listado', {
	//Por supuesto, el componente tiene su propio "data" donde guardar sus variables propias
  data() {
    return {
      listaCompra: [
		  { nombre: "Servilletas", precio: 5},
		  { nombre: "Esponja", precio: 15},
		  { nombre: "Verduras", precio: 35},
		  { nombre: "Ensalada", precio: 30},
		  { nombre: "Pilas", precio: 7},
		  { nombre: "Crema", precio: 10},
		  { nombre: "Salsa", precio: 8},
	  ],
	  dineroDisponible: 20
    }
  },
// Dentro de la etiqueta 'template' creamos el HTML que pertenece a nuestro componente en cuestión...
  template:
  `
		<div>
	    	<p v-for="(item, index) in listaCompra" :key="item.id" :class>
				He de comprar {{ item.nombre }}, lo he 
				colocado en el puesto nº {{ index }},
				prioridad: 
					<span v-if="item.precio < dineroDisponible"> 🙃 </span> 
					<span v-if="item.precio > dineroDisponible"> 😐 </span>
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
			color: 'f4f4f4'
        }
    });