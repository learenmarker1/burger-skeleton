<template>
  <div class="grid-container">
    <div id="orders_sheet">

      <div class="grid_view">
        <div class="grid_order">
        <h1 id="order_headline">{{ uiLabels.ordersInQueue }}</h1>
        <div id="order_queue">
          <OrderItemToPrepare
          v-for="(order, key) in orders"
          v-if="order.status !== 'done'"
          v-on:done="markDone(key)"
          :order-id="key"
          :order="order"
          :ui-labels="uiLabels"
          :lang="lang"
          :key="key">
        </OrderItemToPrepare>
      </div>
    </div>


      <div class="Finish_view">
        <h1 id="finish_headline">{{ uiLabels.ordersFinished }}</h1>
        <div  id="finish_queue">
          <OrderItem
          v-for="(order, key) in orders"
          v-if="order.status === 'done'"
          :order-id="key"
          :order="order"
          :lang="lang"
          :ui-labels="uiLabels"
          :key="key">
        </OrderItem>
      </div>
    </div>
  </div>
</div>
</div>

<div id="button_section">
  <button type="button">Lagersaldo</button>
  <br>
</div>


</div>

</template>
<script>


import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Ordering',
  components: {
    OrderItem,
    OrderItemToPrepare
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  //the ordering system and the kitchen
  data: function(){
    return {
      chosenIngredients: [],
      price: 0
    }
  },
  methods: {
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    }
  }
}
</script>



<style scoped>

#orders_sheet {
  background-color: #FFFFFF;
}

#order_headline {
  text-transform: uppercase;
  font-size: 30px;
  color: #9E4B4B
}

#order_queue{
  font-size:20pt;
  color: #9E4B4B
}

#finish_headline {
  text-transform: uppercase;
  font-size: 30px;
  color: #000000
}

#finish_queue {
  font-size:20pt;
}

.grid-container{
  position: relative;
  overflow: hidden;
  height: 400px;
}

.grid_view{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 50% 50%;
}

.grid_order{
  grid-column: 1;
}

.Finish_view{
  grid-column: 2;
}

</style>
