<template>
  <div id="orders">

    <h1 align = "center">
      {{ uiLabels.stockHeader}}
    </h1>

    <button id = "kitchenButton" onclick="window.location = '/#/kitchen';"> {{ uiLabels.kitchenButton }} </button>

    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg' width=100>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg' width=100>
    </button>

    <div class = "row">
      <div class = "column">
        <h3>{{ uiLabels.bun }}</h3>
        <ul v-for="item in ingredients" v-if='item.category == 4' :key="item.ingredient_id">
          <div class = "stocknr"> {{uiLabels.currentStock}}: {{item.stock}}</div>
          <div v-if="lang_en"> {{item.ingredient_en}}</div>
          <div v-if="lang_sv"> {{item.ingredient_sv}}</div>
          <div id = "quantity"> {{item.quantity}} </div>
<<<<<<< HEAD
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.add_order }}  </button>
=======
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.To_order}}  </button>
>>>>>>> 72bc9c753c32d3fce9669674e1b0c2fa4c37b1b6
        </ul>
      </div>

      <div class = "column">
        <h3> {{ uiLabels.patty }} </h3>
        <ul v-for = "item in ingredients" v-if = 'item.category == 1' :key="item.ingredient_id">
          <div class = "stocknr"> {{uiLabels.currentStock}}: {{item.stockQ}}</div>
          <div v-if="lang_en"> {{item.ingredient_en}} </div>
          <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
          <div id = "quantity"> {{item.quantity}}  </div>
<<<<<<< HEAD
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.add_order }} </button>
=======
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.To_order}} </button>
>>>>>>> 72bc9c753c32d3fce9669674e1b0c2fa4c37b1b6
        </ul>
      </div>

      <div class = "column">
        <h3> {{ uiLabels.topping }} </h3>
        <ul v-for = "item in ingredients" v-if = 'item.category == 2' :key="item.ingredient_id" >
          <div class = "stocknr"> {{uiLabels.currentStock}}: {{item.stockQ}}</div>
          <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
          <div v-if="lang_en"> {{item.ingredient_en}} </div>
          <div id = "quantity"> {{item.quantity}}  </div>
<<<<<<< HEAD
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.add_order }} </button>
=======
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.To_order }} </button>
>>>>>>> 72bc9c753c32d3fce9669674e1b0c2fa4c37b1b6
        </ul>
      </div>

      <div class = "column">
        <h3> {{ uiLabels.sauce }} </h3>
        <ul v-for = "item in ingredients" v-if = 'item.category == 3' :key="item.ingredient_id">
          <div class = "stocknr"> {{uiLabels.currentStock}}: {{item.stockQ}}</div>
          <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
          <div v-if="lang_en"> {{item.ingredient_en}} </div>
          <div id = "quantity"> {{item.quantity}}  </div>
          <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.add_order }} </button>
        </ul>
      </div>


      <div class = "column">
        <h3> {{ uiLabels.To_order }} </h3>
        <p> {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}</p>

        <button id = "stockOrderButton" > {{ uiLabels.sendOrderStock }} </button>

        <!-- <button align ="right" id="placeButton" > {{ uiLabels.add_order }}</button> -->

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
    OrderItemToPrepare,
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
    },
    addToOrder: function (item) {
      this.chosenIngredients.push(item);
    },
    showOrder: function() {
      this.orderAdded=!this.orderAdded;
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
  color: white; }

  #header{
    font-size: 2em;
    color: white;
  }

  h3  {
    text-transform: uppercase;
    text-align: center;
    font-size: 24pt;
    color: black;
  }

  .row {
    /*text-align: center;*/
    font-size: 16pt;
    display: flex;
    height: 98%;
  }
  .column {
    flex: 50%;
    border: solid lightgray;
    border-bottom:0;
    border-width: 3px;
    margin: -2px;
    padding: 15px;
    overflow: scroll;
    height: 600px;
  }

  #langButton{
    position: absolute;
    top: 8px;
    right: 16px;
    background-color: darkgray;
    padding:0;
  }

  #kitchenButton{
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
  #stockOrderButton{
      background-color: #DF9BBF;
      border-radius: 20px;
      border: 5px solid MediumVioletRed;
      color: black;
      font-size: 20px;
      font-variant: small-caps;
      padding: 15px 15px 15px 15px;
      margin-left: 45px;
      text-align: center;
      display: inline-block;

    }

  #order_item_Button {
    background-color: #DF9BBF;
    border-radius: 20px;
    border: 2px solid MediumVioletRed;
    color: black;
    font-size: 15px;
    font-variant: small-caps;
    text-align: center;
    display: inline-block;
  }

  #quantity {
    font-size: 15px;
    text-align: left;
  }

  button:hover{
    cursor: pointer;
  }

  </style>
