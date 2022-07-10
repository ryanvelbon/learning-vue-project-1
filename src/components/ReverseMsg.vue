<template>
	<div>
		<h1>{{ msg }}</h1>
		<input v-model="msg" type="text" value="{msg}" placeholder="Type something and click...">
		<br>
		<button @click="reverse">Reverse</button>
	</div>
</template>

<script>
	export default {
		name: 'ReverseMsg',
		data () {
			return {
				msg: ""
			}
		},
		methods: {
			reverse() {
				this.msg = this.msg.split("").reverse().join("")
			}
		}
	}	
</script>

<style>

input {
	color: #777;
	padding: 1.3rem;
	width:  200px;
}

button {
	padding: 1rem 2rem;
	border-radius: 2rem;
	margin-top: 2rem;
}

	
</style>