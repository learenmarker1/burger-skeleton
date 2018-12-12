<template>
  <!-- Note in this component that it is using another component -->
  <div>
    <OrderItem
    :ui-labels="uiLabels"
    :lang="lang"
    :order-id="orderId"
    :order="order">
  </OrderItem>
  <div>
    <button align ="right" id = "changeButton"  type="button" onclick="window.location = '/#/choose_burger';" > {{ uiLabels.changeButton }} </button>
  </div>

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

#changeButton {
  background-color: #BB86BB;
  color: white;
  margin: 20px;
  border: 5px solid #875187;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}

</style>
