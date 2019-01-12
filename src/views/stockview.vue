<template>
  <div id="orders">

    <h1 align = "center">{{ uiLabels.stockHeader}}</h1>
    <button id = "orderButton" onclick="window.location = '/#/kitchen';"> {{ uiLabels.orderButton }} </button>


    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg' width=100>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg' width=100>
    </button>

      <div class = "row">
        <div class = "column">
          <h3>{{ uiLabels.bun }}</h3>
          <ul v-for="item in ingredients" v-if='item.category == 4' :key="item.ingredient_id">
            <div v-if="lang_en"> {{item.ingredient_en}} </div>
            <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
            <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.placeOrder }} </button>
          </ul>
        </div>

        <div class = "column">
          <h3> {{ uiLabels.patty }} </h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 1' :key="item.ingredient_id">
            <div v-if="lang_en"> {{item.ingredient_en}} </div>
            <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
            <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.placeOrder }} </button>
          </ul>
        </div>

        <div class = "column">
          <h3> {{ uiLabels.topping }} </h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 2' :key="item.ingredient_id" >
            <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
            <div v-if="lang_en"> {{item.ingredient_en}} </div>
            <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.placeOrder }} </button>
          </ul>
        </div>

        <div class = "column">
          <h3> {{ uiLabels.sauce }} </h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 3' :key="item.ingredient_id">
            <div v-if="lang_sv"> {{item.ingredient_sv}} </div>
            <div v-if="lang_en"> {{item.ingredient_en}} </div>
            <button id = "order_item_Button" type="button" v-on:click="addToOrder(item)"> {{ uiLabels.placeOrder }} </button>
          </ul>
        </div>


        <div class = "column">

          <p> {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}</p>

          </p>
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

    #orderButton{
      width: auto;
      align-items: right;
      border-radius: 10px;
      border: solid pink;
      background-color: violet;
      color: white;
      font-size: 1em;
    }

    #order_item_Button {
      background-color: violet;
      color: black;
      border: 3px solid black;
      font-size: 12px;
      font-variant: small-caps;
      margin: 0px 15px 15px 15px;
    }

    button:hover{
      cursor: pointer;
    }

    </style>
