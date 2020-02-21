Vue.component('todo-list', {
	
	props: {
		listaDeTodo: Array
	},

	template:
	`
	<div>
		<p @click="cambia()" v-for="item in listaDeTodo" :key="item.id">
			{{ item }} 
		</p>
	</div>
	`
})

// == NUESTRO OBJETO VUE ==

const app = new Vue({

	el: '#app',

	data: {
		listaDeTodo: [
		'Comprar pan',
		'Poner colada',
		'Recoger la casa',
		],
		newTodo: ''
	},
	
	methods: {
		addTodo(){
			if(this.newTodo == ''){
				alert('¡Oye! ¡No puede estar vacío!')
			}
			else{
				this.listaDeTodo.push(this.newTodo)
			}
		}
	}
});