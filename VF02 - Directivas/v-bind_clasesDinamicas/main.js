
// == NUESTRO OBJETO VUE ==

const app = new Vue({
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
        el: '#app',
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
        data: {
			precios: [200, 120, 25, 67, 45, 657],
			precioMedio: 100
        }
    });