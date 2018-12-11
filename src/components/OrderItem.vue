<template>
	<div>
<<<<<<< HEAD
		# {{orderId}}.  {{order.type}} {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
=======
		# {{orderId}}. {{order.type}}  {{ order.ingredients.map(item=>item["ingredient_"+ lang]).join(", ") }}
>>>>>>> 832b36408378fd630cd068dbe905c97f992e99e3
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

</style>
