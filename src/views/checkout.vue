<template>
  <div id="checkout">

    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png' width=40 >
    </button>

    <div>
    <h1 class="header" align = "center"> {{ uiLabels.orderOverview }} </h1>

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
    <button id = "changeButton"  type="button" onclick="window.location = '/#/choose_burger';" > {{ uiLabels.changeButton }} </button>
  </div>

  <div align="center">
    <button id = "payButton" type="button" > {{ uiLabels.payButton }} </button>
  </div>

  <div id="order_confirmed">
    <h2 class="header2" align = "center">  {{ uiLabels.confirmed_text }} </h2>



  </div>

</div>
</template>


<script>
import OrderItem from '@/components/OrderItem.vue'
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue'
import Checkoutitems from '@/components/Checkoutitems.vue'
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

.header{
  font-size: 60px;
  color: pink;
}

.header2{
  font-size: 40px;
  color: pink;
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
  height: 100px;
  width: 200px;
  background-color: #BB86BB;
  border-radius: 20px;
  border: 5px solid #875187;
  color: black;
  font-size: 20px;
  /*  text-align: center;*/
  display: inline-block;
}

</style>
