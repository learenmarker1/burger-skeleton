<template>
	<div>

		<div class="order"> Order # {{orderId}}. </div> {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}

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
