<template>
  <!-- Note in this component that it is using another component -->
<div>
  <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>

<button class = "button" v-show = "order.status === 'started'" @click="cancelOrder"> {{ uiLabels.cancel }} </button>
<button class = "button" v-show = "order.status === 'not-started' || order.status === 'started'" @click="nextStep"> {{ uiLabels.next }} </button>


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
.button {
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 20px;
  font-variant: small-caps;
  text-align: center;
  display: inline-block;
}
</style>
