<template>
  <div class="static_background">

    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg'>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg'>
    </button>

    <h1 class="glow"> {{ uiLabels.ThankYou}}</h1>

      <transition name = "toStart">
        <img class="animation logo" onclick="window.location = '/#/';" src= "@/assets/BB-logo.png">
      </transition>

      <h1 class="glow"> {{ uiLabels.SeeYou}} </h1>

      <button id = "orderButton" onclick="window.location = '/#/';" > {{ uiLabels.newOrder }} </button>

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
  /* @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; */

  .toStart-enter-active{
    transition: allows 2s;
  }

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }

    .animation{
      animation-duration: 10s;
      animation-name: ani;
      animation-iteration-count: infinite;
      /* animation-direction: alternate; */
    }
  @keyframes ani {
    from {
    transform:rotate(360deg);
  }

  to {
    transform:rotate(0deg);
  }
}

  /* .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 70vw;
  } */
  .ordernr{
    text-align: center;
  }
/*
  #orderButton {
    background-color: #DF9BBF;
    border-radius: 20px;
    border: 5px solid MediumVioletRed;
    color: black;
    font-size: 14px;
    font-variant: small-caps;
    padding: 15px 15px 15px 15px;
    margin: 15px 15px 15px 15px;
    text-align: center;
    display: inline-block;
    position: absolute;
    right: 35%;
    bottom: 100px;
  } */

  </style>
