<template>
	<div>
		
		<input type="text" name="" v-model="myInput" placeholder="write something...">
		<h2>{{ myInput }}</h2>
		<br>
		<p>
			<small>
				<code>v-model</code> is a directive that creates a two-way data binding between a value in our template and a value in our data properties.
				<a href="https://compiletab.com/vue-get-input-value/">Read more</a>
			</small>
		</p>

	</div>
</template>

<script>
	export default {
		name: 'RealtimeEcho',
		data () {
			return {
				myInput: ""
			}
		}
	}
</script>

<style scoped>

input {
	font-size: 25px;
	padding: 20px;
}

h2 {
	font-size: 50px;

}

</style>