<template>
  <!-- Note in this component that it is using another component -->
<div>
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>

<button @click="nextStep"> {{ uiLabels.next }} </button>
<button @click="cancelOrder"> {{ uiLabels.cancel }} </button>

</div>
</template>
<script>
import OrderItem from '@/components/OrderItem.vue'

export default {
  name: 'OrderItemToPrepare',
  components: { OrderItem },
  props: {
    uiLabels: Object,
    order: Object,
    orderId: String,
    lang: String
  },
  methods: {
    nextStep: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('nextStep');
    },
    cancelOrder: function () {
      this.$emit('cancelOrder');
    }
  }
}
</script>
<style scoped>

</style>
