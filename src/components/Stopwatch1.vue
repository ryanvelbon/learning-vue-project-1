<template>
	<div>
		<div id="time">
			<h2>Stopwatch 1</h2>
			<h3>(still in development)</h3>
			<h1>
				<!-- hours -->
				<span>{{ digits[7].value }}</span>
				<span>{{ digits[6].value }}</span>
				<span>:</span>
				<!-- minutes -->
				<span>{{ digits[5].value }}</span>
				<span>{{ digits[4].value }}</span>
				<span>:</span>
				<!-- seconds -->
				<span>{{ digits[3].value }}</span>
				<span>{{ digits[2].value }}</span>
				<span>:</span>
				<!-- milliseconds -->
				<span>{{ digits[1].value }}</span>
				<span>{{ digits[0].value }}</span>
			</h1>
			<p>Each digit is updated independently and do not refer to a <code>counter</code> global variable as a common reference. Hence the digits end up out of sync.</p>
		</div>
		<div id="controls">
			<button @click="incrementTime">Start</button>
			<button>Reset</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Stopwatch1',
		data () {
			return {
				digits: [
					{
						value: 0,
						interval: 10 // number of milliseconds that need to pass to increment `value` by 1
					},
					{
						value: 0,
						interval: 100
					},
					{
						value: 0,
						interval: 1000
					},
					{
						value: 0,
						interval: 10000
					},
					{
						value: 0,
						interval: 60000
					},
					{
						value: 0,
						interval: 600000
					},
					{
						value: 0,
						interval: 3600000
					},
					{
						value: 0,
						interval: 36000000
					}
				]
			}
		},
		methods: {
			incrementTime() {
				this.digits.forEach((digit) => setInterval(() => {
					digit.value++
					digit.value %= 10
				}, digit.interval))
			}
		}
	}
</script>