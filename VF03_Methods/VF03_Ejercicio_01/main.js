const app = new Vue({
	
	//Recordamos que "el" hace referencia al sitio donde vue trabajará, es decir, "#app"
	el: '#app',
	
	//Recordemos que "data" es donde vamos a crear todas nuestras variables
	data: {		
		vidaEnemigo: 100,
		dañoAtaque: 20
	},
	
	//En Methods crearemos nuestras funciones, de igual manera que en Data creamos nuestras variables.
	methods: {
		
		//Creamos la función "atacar"
		atacar(){
			
			//Con una estructura if/else if vamos a ir comprobando cuándo el enemigo se queda sin vida
			if(this.vidaEnemigo > 0){
				
				//Si la vida del enemigo está por encima de 0, atacaremos
				this.vidaEnemigo = this.vidaEnemigo - this.dañoAtaque
				console.log('¡Vaya golpe!')
			}
			
			else if(this.vidaEnemigo <= 0){
				// Si la vida está por debajo o es 0 (el enemigo ha muerto) 
				// hemos ganado y reseteamos la vida del enemigo
				alert('¡Has ganado! Prueba otra vez ;)')
				this.vidaEnemigo = 100
			}
		}
	}
});