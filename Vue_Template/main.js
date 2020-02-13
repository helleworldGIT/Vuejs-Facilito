
// == NUESTRO OBJETO VUE ==

const app = new Vue({
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
        el: '#app',
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
        data: {
			saludo: "Soy un template para tus proyectos con Vuejs"
        }
    });