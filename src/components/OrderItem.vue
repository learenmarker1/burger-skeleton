<template>
	<div>
		<div v-if="order.status === 'started' || order.status === 'not-started' ">
				<div class="order"> Order # {{orderId}} </div> {{order.type}}
				<div v-for="(ing, key) in order.burgers" :key="key">
					<div class = "order" id = "ordinord"> Item {{key + 1}}:</div>{{ ing.map(item=>item["ingredient_"+ lang]).join(", ") }}
				</div>
		</div>
		<div v-if="order.status === 'done'">
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
#ordinord {
	font-size: 75%;
	color: MediumVioletRed;
}

</style>
