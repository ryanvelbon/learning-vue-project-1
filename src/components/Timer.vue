<template>
	<div>
		<h2>Timer</h2>
		<h3 hidden>Total Seconds : {{ totalSeconds }}</h3>
		<p hidden>countdown: {{ remainingSeconds }} seconds</p>
		<input
			id="textInput"
			type="text"
			@keydown.prevent="handle"
			v-model="input"
			:disabled="isRunning"
		>
		<h1 id="timeDisplay"
			@click="switchToEditMode"
			:class="{ 'edit-mode': !isRunning }"
		>
			<span>{{ twoDigits(Math.floor(this.remainingSeconds/3600) % 100) }}</span>
			<small>h</small>
			<span>{{ twoDigits(Math.floor(this.remainingSeconds/60) % 60)  }}</span>
			<small>m</small>
			<span>{{ twoDigits(this.remainingSeconds % 60) }}</span>
			<small>s</small>
		</h1>

		<button v-if="isRunning" @click="stop">Pause</button>
		<button v-else @click="start">Start</button>

		<button v-if="isRunning" @click="reset">Reset</button>
		<button v-else @click="clear">Clear</button>
		
	</div>
</template>

<script>
	export default {
		name: 'Timer',
		data () {
			return {
				timer: null,
				isRunning: false,
				input: "000000",
				totalSeconds: 0,
				remainingSeconds: 0
			}
		},
		methods: {
			switchToEditMode() {
				this.isRunning = false
				document.getElementById("textInput").focus();
			},

			/**
			 * @param   {String}  str   A 6-digit string representing hours, min, & sec
			 * 
			 */
			calcTotalSeconds(str) {
				this.totalSeconds = 0
				this.remainingSeconds = 0

				this.totalSeconds += Number(str.substring(0,2)) * 3600
				this.totalSeconds += Number(str.substring(2,4)) * 60
				this.totalSeconds += Number(str.substring(4,6))

				this.remainingSeconds = this.totalSeconds
			},

			/**
			 * Handles various key presses.
			 * @param   {Event}  e  The keyboard event
			 */
			handle(e) {

				let key = e.keyCode

				// if user enters digit
				if ((48 <= key && key <= 57)) {

					// append digit to end of string
					this.input += String.fromCharCode(key)

					// if string exceeds max. length of 6 digits
					if (this.input.length > 6) {

						// trim off the left-most digit
						this.input = this.input.substring(1)
					}
				}
				// else if backspace
				else if (key == 8) {
					// trim off the right-most digit and prepend a zero
					this.input = "0" + this.input.substring(0,5)
				}
				// else if ENTER
				else if (key == 13 && !this.isRunning) {
					this.start()
				}

				this.calcTotalSeconds(this.input)

			},

			start() {
				this.isRunning = true;
				this.timer = setInterval(() => {
					if (this.remainingSeconds <= 0) {
						this.stop()
						return;
					}
					this.remainingSeconds--
				}, 1000)
			},

			stop() {
				this.isRunning = false;
				clearInterval(this.timer)
			},

			reset() {
				this.stop()
				this.remainingSeconds = this.totalSeconds
			},

			clear() {
				this.totalSeconds = 0
				this.remainingSeconds = 0
			},

			/**
			 * Rewrites a numeric string in a 2-digit format. E.g. twoDigits("4") returns "04"
			 * 
			 */
			twoDigits(str) {
				return (str).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
			}
		}
	}
</script>

<style scoped>

#timeDisplay {
	font-size: 50px;
	cursor:  pointer;
}

#timeDisplay small {
	font-size: 20px;
}

.edit-mode {
	background-color: #00000011;
	color: #444;
}

</style>