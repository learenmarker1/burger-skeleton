<template>
  <div id="checkout">

    <button id="langButton" v-on:click="switchLang()">
      <img v-on:click="switchFlag()" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
      {{ uiLabels.language }}
    </button>

    <div>
      <h2> {{ uiLabels.orderOverview }} </h2>
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

  <div>
    <button id = "changeButton" type="button" onclick="window.location = '/#/choose_burger';" > {{ uiLabels.changeButton }} </button>
  </div>

  <div>
    <button id = "payButton" type="button" > {{ uiLabels.payButton }} </button>
  </div>

  <div id="order_confirmed">
    <h2> {{ uiLabels.confirmed_text }} </h2>
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

    }
  },
  methods: {
  }
}

</script>


<style scoped>

button:hover {
  cursor: pointer;
}

#checkout {
  margin: auto;
  padding-top: 50px;
  width: 100%;
  background: radial-gradient(lightgray, darkgray);
  color: white;
}

#langButton{
  position: absolute;
  top: 8px;
  right: 16px;
}

#changeButton {
  background-color: #BB86BB;
  color: black;
  margin: 20px;
  border: 5px solid #875187;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}

#payButton {
  background-color: #BB86BB;
  color: black;
  margin: 20px;
  border: 5px solid #875187;
  font-size: 14px;
  text-align: center;
  display: inline-block;

}

</style>
