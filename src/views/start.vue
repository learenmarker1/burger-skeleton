<template>
  <div class="static_background">

    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg'>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg'>
    </button>

    <h1 id="glow"> {{ uiLabels.startHeader}}<br>{{ uiLabels.startTO}}</h1>
      <img id="logo" src= "@/assets/BB-logo.png">

      <div class = "row">
        <div class = "buttonL">
          <button class="orderButtons" type="button" onclick="window.location = '/#/menu_burger';" > {{uiLabels.menu_button}} </button>
        </div>
        <div class = "buttonR">
          <button class="orderButtons" type="button" onclick="window.location = '/#/choose_burger';" > {{uiLabels.choose_button}} </button>
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


  <style>

  button:hover {
    cursor: pointer;
    box-shadow: 2px 10px 12px 2px rgba(0,0,0,0.15), 1px 1px 1px 1px rgba(0,0,0,0.15);
  }

  .static_background {
    background-image: url("http://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg");
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* padding-top: 50px;
    padding-bottom: 100px; */
    position: absolute;
  }

  #langButton{
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: gray;
    padding:0;
  }

  #langPic{
    width: 60px;
  }

  #glow{
    font-family: "Snell Roundhand", cursive, sans-serif;
    font-size: 30pt;
    color: white;
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }

  #logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 65vw;
  }

  .orderButtons {
    background-color: #DF9BBF;
    border-radius: 20px;
    border: 5px solid MediumVioletRed;
    color: black;
    font-size: 12pt;
    font-variant: small-caps;
    padding: 10px 10px 10px 10px;
    margin: 0px 15px 15px 15px;
    text-align: center;
    display: inline-block;
  }
  .row {
    display: grid;
    grid-gap: 30px;
    grid-template-columns:25% 25%;
    justify-content: center;
  }
  .buttonL{
    grid-column: 1;
  }
  .buttonR {
    grid-column: 2;
  }

  </style>
