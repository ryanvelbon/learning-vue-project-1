<template>
	<div class="about">
		<h2>About</h2>
		<p>This project is my first attempt at tinkering around with Vue.</p>
		<p>I haven't read any of the documentation yet. But I feel that I am understanding how this framework works.</p>
		<p>Written by {{author}}</p>
	</div>
</template>

<script>
export default {
	name: 'AboutPage',
	data () {
		return {
			author: 'Ryan Vella Bonello'
		}
	}
}
</script>