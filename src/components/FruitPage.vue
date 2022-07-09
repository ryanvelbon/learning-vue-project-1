<template>
	<div id="fruit">
		<h2>My Favourite Fruits</h2>
		<ol>
			<li v-for="fruit in fruits">
				<h3>{{ fruit.title }}</h3>
				<p>{{ fruit.description }}</p>
				<span><a v-bind:href="fruit.link" target="_blank">Read more</a></span>
			</li>
		</ol>
	</div>
</template>

<script>
export default {
  name: 'FruitPage',
  data () {
    return {
      fruits: [
      	{
      		title: 'apple',
      		description: 'An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.',
      		link: 'https://en.wikipedia.org/wiki/Apple'
      	},
      	{
      		title: 'banana',
      		description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
      		link: 'https://en.wikipedia.org/wiki/Banana'

      	},
      	{
      		title: 'cherry',
      		description: 'A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit). Red cherries with stems.',
      		link: 'https://en.wikipedia.org/wiki/Cherry'
      	},
      	{
      		title: 'durian',
      		description: "Durian is a strange combination of savory, sweet, and creamy all at once. A durian is supposed to have subtle hints of chives mixed with powdered sugar. It's supposed to taste like diced garlic and caramel poured into whipped cream. So relax and let the cacophony of flavors blow you away.",
      		link: 'https://migrationology.com/how-to-love-durian-fruit'
      	}
      ]
    }
  }
}
</script>

<style scoped>
* {
	text-align: left;
}
</style>