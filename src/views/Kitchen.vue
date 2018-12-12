<template>
<div id="orders">

  <button id="langButton" v-on:click="switchLang()">
    <img v-on:click="switchFlag()"  src= 'engflag.jpg'  width=40 >
    {{ uiLabels.language }}
  </button>

  <h1 align = "center" >{{ uiLabels.orders_pay_desc}}</h1>

  <div class = "row" align = "center">

  <div class = "column left">
    <h1>{{ uiLabels.ordersInQueue }}</h1>
    <div align = "left">
      <OrderItemToPrepare
        id = "order_in_que"
        v-for="(order, key) in orders"
        v-if="order.status === 'not-started'"
        v-on:nextStep="markPreparing(key)"
        :order-id="key"
        :order="order"
        :ui-labels="uiLabels"
        :key="key">
      </OrderItemToPrepare>
    </div>
  </div>

<div class = "column middle">
  <h1>{{ uiLabels.ordersStarted }}</h1>
  <div align = "left">
    <OrderItemToPrepare
      id = "order_in_que"
      v-for="(order, key) in orders"
      v-if="order.status === 'started'"
      v-on:nextStep="markDone(key)"
      :order-id="key"
      :order="order"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </OrderItemToPrepare>
  </div>
</div>

<div class = "column right">
  <h1>{{ uiLabels.ordersFinished }}</h1>
  <div align = "left">
    <OrderItem
      id ="order_finished"
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

<div class = "buttonGrid">

  <div class = "buttonL">
      <button align = "right" id = "stockButton" onclick="window.location = '/#/kitchen_staff';"> {{ uiLabels.kitchenStaffButton }} </button>
  </div>

  <div class = "buttonR">
    <button align = "right" id = "stockButton" onclick="window.location = '/#/stock';"> {{ uiLabels.stockButton }} </button>
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
    markPreparing: function (orderid) {
      this.$store.state.socket.emit("orderStarted", orderid);
    },
    markDone: function (orderid) {
      this.$store.state.socket.emit("orderDone", orderid);
    }
  }
}
</script>


<style scoped>

button:hover {
     cursor: pointer;
}

#langButton{
  position: absolute;
  top: 8px;
  right: 16px;
}

#orders {
    font-size:24pt;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.4em;
    color: white;
  }

  #order_in_que{
    border: solid darkorange;
    border-radius: 10px;
    background-color: orange;
    margin: 20px;
  }

  #order_finished{
    border: solid green;
    border-radius: 10px;
    background-color: lightgreen;
    margin: 20px;
  }
  .row {
    display: flex;
    height: 98%;
  }

  .column {
    border: solid lightgray;
    border-width: 3px;
    margin: -2px;
    padding: 15px;
    height: 450px;
  }
  .left {
    width: 20%;
    float: left;
    overflow: scroll;
  }


  .middle {
    width: 60%;
    float: left;
    overflow: scroll;
  }

  .right{
    width: 20%;
    float: left;
    overflow: scroll;
  }

  #stockButton{
    width: auto;
    border-radius: 10px;
    border: solid pink;
    background-color: violet;
    color: white;
    font-size: 1em;
    {
      background-color: #BB86BB;
      color: black;
      margin: 20px;
      border: 5px solid #875187;
      font-size: 14px;
      text-align: center;
      display: inline-block;
    }
  }
  .buttonGrid {
    display: grid;
    padding-top: 100px;
    grid-gap: 15px;
    grid-template-columns: 25% 25%;
    justify-content: center;
  }
  .buttonL{
    grid-column: 1;
  }
  .buttonR {
    grid-column: 2;
  }

</style>
