<template>
	<div>
<<<<<<< HEAD

		<div class="order"> Order # {{orderId}}. </div> {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}

=======
		# {{orderId}}. {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
>>>>>>> a66ccfe97b73ee8ffba505ffedb1f39dccd742af
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
