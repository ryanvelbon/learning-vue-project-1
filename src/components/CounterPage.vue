<template>
	<div id="counter">
		<h3>{{ count }}</h3>
		<button @click="increment">Click Me</button>
	</div>
</template>

<script>
	export default {
		name: 'Counter',
		data () {
			return {
				count: 0
			}
		},
		methods: {
			increment() {
				this.count++
			}
		}
	}
</script>

<style>
	
</style>