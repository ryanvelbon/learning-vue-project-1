<template>
	<div>
		<h2>Stopwatch 2</h2>
		<p>Counter: {{ counter }} milliseconds</p>
		<h1>
			<span>{{ (hh).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}:</span>
			<span>{{ (mm).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}:</span>
			<span>{{ (ss).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}:</span>
			<span>{{ (ms).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) }}</span>
		</h1>
		<button v-if="isRunning" @click="toggle">Pause</button>
		<button v-else @click="toggle">Start</button>
		<button @click="resetTimer">Reset</button>
	</div>
</template>

<script>
	export default {
		name: 'Stopwatch2',
		data () {
			return {
				foobar: null, // interval for the counter update
				zoobar: null, // interval for the time display
				counter: 0,
				isRunning: false,

				// intervals need to be at least 10 milliseconds; READ: https://stackoverflow.com/questions/40752982/setinterval-at-1ms-doesnt-seem-to-actually-be-1ms
				interval1: 11, // the frequency (in ms) at which the counter is updated
				interval2: 235, // the frequency (in ms) at which the time is calculated (formatted)

				hh: 0,
				mm: 0,
				ss: 0,
				ms: 0
			}
		},
		methods: {
			formatTime() {
				this.ms = Math.floor(this.counter/10) % 100
				this.ss = Math.floor(this.counter/1000) % 60
				this.mm = Math.floor(this.counter/60000) % 60
				this.hh = Math.floor(this.counter/3600000) % 24
			},
			startTimer() {

				this.foobar = setInterval(() => {
					this.counter += this.interval1
				}, this.interval1)

				this.zoobar = setInterval(this.formatTime, this.interval2)
			},
			pauseTimer() {
				clearInterval(this.foobar)
			},
			resetTimer() {
				this.isRunning = false
				this.pauseTimer()
				this.counter = 0
			},
			toggle() {
				this.isRunning = !this.isRunning
				if (this.isRunning) {
					this.startTimer()
				} else {
					this.pauseTimer()
				}
			}
		}
	}
</script>