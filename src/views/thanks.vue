<template>
  <div class="thanks_background">

    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg'>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg'>
    </button>

    <h1 id="glow"> {{ uiLabels.ThankYou}}</h1>

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


.thanks_background {
      background-image: url("http://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg");
      height: 100%;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 50px;
      position: absolute;
    }

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

   .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 70vw;
  }
  .ordernr{
    text-align: center;
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

  
  </style>
