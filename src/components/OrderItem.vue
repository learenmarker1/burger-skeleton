<template>
	<div>

		<div class="order"> Order # {{orderId}}. </div> {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}

<div v-if = "order.status === 'started'">
		<div class="order"> Order # {{orderId}}. </div> {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
</div>
<div v-if = "order.status === 'not-started'">
		<div class="order"> Order # {{orderId}} </div>
</div>
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
