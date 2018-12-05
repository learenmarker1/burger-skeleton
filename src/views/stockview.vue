<template>
  <div id="orders">

    <h1 align = "center">{{ uiLabels.startHeader}}</h1>

    <button v-on:click="switchLang()">

      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png' width=40 >

      {{ uiLabels.language }}</button>

      <div class = "row">
        <div class = "column">
          <h3>{{ uiLabels.bun }}</h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 4'>
            <div :v-if="lang_en"> {{item.ingredient_en}} </div>
            <div :v-if="lang_sv"> {{item.ingredient_sv}} </div>
          </ul>
        </div>

        <div class = "column">
          <h3> {{ uiLabels.patty }} </h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 1'>
            <div :v-if="lang_en"> {{item.ingredient_en}} </div>
            <div :v-if="lang_sv"> {{item.ingredient_sv}} </div>
          </ul>
        </div>

        <div class = "column">
          <h3> {{ uiLabels.topping }} </h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 2'>
            <div :v-if="lang_sv"> {{item.ingredient_sv}} </div>
            <div :v-if="lang_en"> {{item.ingredient_en}} </div>
          </ul>
        </div>

        <div class = "column">
          <h3> {{ uiLabels.sauce }} </h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 3'>
            <div :v-if="lang_sv"> {{item.ingredient_sv}} </div>
            <div :v-if="lang_en"> {{item.ingredient_en}} </div>
          </ul>
        </div>


        <div class = "column">
          <h3>NAVIGERA</h3>
          <button id = "orderButton" onclick="window.location = '/#/kitchen';"> {{ uiLabels.orderButton }} </button>
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
      display: flex;
      /*text-align: center;*/
      font-size: 16pt;
    }
    .column {
      flex: 50%;
      border: solid lightgray;
      border-bottom:0;
      border-width: 3px;
      margin: -2px;
      padding: 15px;
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

    button:hover{
      cursor: pointer;
    }

    </style>
