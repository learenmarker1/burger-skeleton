<template>
<div id="orders">

  <h1 align = "center" id="header">{{ uiLabels.orders_pay_desc}}</h1>
  <button align = "right" v-on:click="switchLang()">{{ uiLabels.language }}</button>

  <div class = "row" align = "center">

  <div class = "column left">
  <h1>{{ uiLabels.ordersInQueue }}</h1>
  <div align = "left">
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

<div class = "column middle">
  <h1>{{ uiLabels.ordersFinished }}</h1>
  <div align = "left">
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

<div class = "column right">
<h1>Här ska ordrarna stÂ sen!!!</h1>
<button id = "stockButton" onclick="window.location = '/#/stock';"> {{ uiLabels.stockButton }} </button>

</div>
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
      price: 0,
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

#orders {
    font-size:24pt;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.4em;
    color: white;
  },

  #header{
    font-size: 2em;
    color: white;
  },

  #order_in_que{
    border: solid darkorange;
    border-radius: 10px;
    background-color: orange;
  },

  #order_finished{
    border: solid green;
    border-radius: 10px;
    background-color: lightgreen;
  }
  .row {
    display: flex;
  }
  .column {
    border: solid lightgray;
    border-bottom:0;
    border-width: 3px;
    margin: -2px;
    padding: 15px;
  }
  .left, .middle {
    width: 40%;
  }
  .right{
    width: 20%;
  },

  #stockButton{
    width: auto;
    border-radius: 10px;
    border: solid pink;
    background-color: violet;
    color: white;
    font-size: 1em;
  },

button:hover {
     cursor: pointer;
}


</style>
