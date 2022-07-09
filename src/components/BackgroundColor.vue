<template>
	<div>
		<label for="red">Red</label>
		<input v-model="red" type="range" id="red" name="red" min="0" max="255">
		<br>

		<label for="green">Green</label>
		<input v-model="green" type="range" id="green" name="green" min="0" max="255">
		<br>

		<label for="blue">Blue</label>
		<input v-model="blue" type="range" id="blue" name="blue" min="0" max="255">
		<br>

		<div id="canvas" :style="{backgroundColor: `rgb(${red}, ${green}, ${blue})`}">
			<h1>Lorem ipsum</h1>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'BackgroundColor',
		data () {
			return {
				red: 220,
				green: 20,
				blue: 60
			}
		}
	}
</script>

<style scoped>
	#canvas h1 {
		padding: 2rem;
	}
</style>