<template>
	<div>
<<<<<<< HEAD

		<div class="order"> Order # {{orderId}}. </div> {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}

=======
<div v-if = "order.status === 'started'">
		<div class="order"> Order # {{orderId}}. </div> {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
</div>
<div v-if = "order.status === 'not-started'">
		<div class="order"> Order # {{orderId}} </div>
</div>
>>>>>>> 18eda7156cba8a1cdc17b42d4cfae5f7ee95bad8
	</div>
</template>
<script>
export default {
  name: 'OrderItem',
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  }
}
</script>
<style scoped>

.order {
	text-transform: uppercase;
	font-weight: bold;
}

</style>
