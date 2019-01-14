<template>
<div id="orders">

  <button id="langButton" v-on:click="switchLang()">
    <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg' width=100>
    <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg' width=100>
  </button>

  <h1 align = "center" >
  <img id="BBlogo" src='../assets/BB-logo.png' style="width:150px">
      {{ uiLabels.kitchenOverview}}</h1>

  <div class = "wrapper" align = "center">

  <div class = "box left">
    <h1>STEKBORDET!!</h1>
    <div class = "box steaktable">
      <ul align = "left" v-for = "item in ingredients" v-if = 'item.category == 1' :key="item.ingredient_id">
        <div v-if="lang_en"> {{item.ingredient_en}}: </div>
        <div v-else-if="lang_sv"> {{item.ingredient_sv}}: </div>
      </ul>
      </div>
    <div class = "box inner_steaktable ">
    </div>
  </div>

<div class = "box right">
  <h1>STEKBORDET 2.0</h1>
  <OrderItem
    id = "order_in_que"
    v-for="(order, key) in orders"
    v-if="order.status === 'started'"
    :order-id="key"
    :order="order"
    :ui-labels="uiLabels"
    :lang="lang"
    :key="key">
  </OrderItem>


</div>
</div>
<div class = "buttonGrid">

  <div class = "buttonL">
      <button align = "right" id = "button" onclick="window.location = '/#/kitchen';"> {{ uiLabels.kitchenButton }} </button>
  </div>

  <div class = "buttonR">
    <button align = "right" id = "button" onclick="window.location = '/#/stockview';"> {{ uiLabels.stockButton }} </button>
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
  .wrapper {
    display: grid;
    grid-gap: 10px;
        grid-template-columns: repeat(2, [col] 25% ) ;
        grid-template-rows: repeat(1, [row] auto  );
        background-color: #fff;
        color: #444;
    }

  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 100%;
    }
  .box .box {
    background-color: #ccc;
    color: #444;
    font-size: 75%;
    }
  .left {
    grid-column: col / span 2;
    grid-row: row;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    }

  .right{
    grid-column: col 3 / span 2;
    grid-row: row;
  }

  .steaktable{
    grid-column: 1;
    grid-row: row;
    text-align: right;
  }

  .inner_steaktable{
    grid-column: 2;
    grid-row: row;
  }

  #button{
    background-color: #DF9BBF;
    border-radius: 20px;
    border: 5px solid MediumVioletRed;
    color: black;
    font-size: 20px;
    font-variant: small-caps;
    padding: 15px 15px 15px 15px;
    margin: 0px 15px 15px 15px;
    text-align: center;
    display: inline-block;
  }
  .buttonGrid {
    display: grid;
    padding-top: 50px;
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
