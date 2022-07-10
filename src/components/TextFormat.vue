<template>
	<div>
		<div class="demo">
			<p
				id="msg"
				:style="{
					fontSize: fontSize + 'px',
					fontFamily: fontFamily,
					color: color,
					fontWeight: [isBold ? 'bold' : 'normal'],
					fontStyle: [isItalic ? 'italic' : 'normal']
				}"
			>
				Lorem ipsum dolor sit amet
			</p>
		</div>
		<div class="controls">
			<label for="fontSize">Font Size</label>
			<input v-model="fontSize" type="range" name="fontSize" min="8" max="50">

			<label for="fontFamily">Font Family</label>
			<select v-model="fontFamily" name="fontFamily">
				<option
					v-for="fontFamily in fontFamilies"
					:value="fontFamily"
				>
					{{ fontFamily }}
				</option>
			</select>

			<label for="color">Color</label>
			<select v-model="color" name="color">
				<option
					v-for="color in colors"
					:style="{backgroundColor: color}"
					:value="color">
				</option>
			</select>

			<button
				id="boldBtn"
				:class="{ active:isBold }"
				@click="isBold=!isBold"
			>
				<strong>B</strong>
			</button>

			<button
				id="italicBtn"
				:class="{ active:isItalic }"
				@click="isItalic=!isItalic"
			>
				<em>I</em>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TextFormat',
		data () {
			return {
				fontSize: '16',
				fontFamily: 'Times New Roman',
				color: 'black',
				isBold: false,
				isItalic: false,

				fontFamilies: [
					'Arial',
					'Verdana',
					'Helvetica',
					'Tahoma',
					'Trebuchet MS',
					'Times New Roman',
					'Georgia',
					'Garamond',
					'Courier New',
					'Brush Script MT'
				],

				colors: [
					'#7FFFD4',
					'#A52A2A',
					'#6495ED',
					'#DC143C'
				]
			}
		}
	}
</script>

<style scoped>

.demo {
	height: 200px;
}

button {
	padding: 0.4em 1em;
}

button.active {
	background-color: #444;
	color: #fff;
}

</style>