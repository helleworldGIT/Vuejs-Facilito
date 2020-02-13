
// == NUESTRO OBJETO VUE ==

const app = new Vue({
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
        el: '#app',
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
        data: {
			semana: [
			{ id: 0, nombre: "lunes", posicion: 0 },
			{ id: 1, nombre: "martes", posicion: 1 },
			{ id: 2, nombre: "miércoles", posicion: 2 },
			{ id: 3, nombre: "jueves", posicion: 3 },
			{ id: 4, nombre: "viernes", posicion: 4 },
			{ id: 5, nombre: "sábado", posicion: 5 },
			{ id: 6, nombre: "domingo", posicion: 6 },
			]
        }
    });