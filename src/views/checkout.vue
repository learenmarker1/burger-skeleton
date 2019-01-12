<template>
  <div class="background">
    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg'>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg'>
    </button>

    <div>
      <h1 class="glow" align = "center">  {{ uiLabels.orderOverview }} </h1>

      <checkoutComponent
      v-for="(burger, key) in burgers"
      :burger="burger"
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key">
    </checkoutComponent>
  </div>

  <div align="center">
    <button id = "payButton" type="button" onclick="window.location = '/#/thanks';" v-on:click="placeOrder();" > {{ uiLabels.payButton }} </button>
  </div>

</div>
</template>


<script>
import checkoutComponent from '@/components/checkoutComponent.vue'
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

export default {
  name: 'Checkout',
  components: {
    checkoutComponent
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  //the ordering system and the kitchen
  data: function(){
    return {

    }
  },
  methods: {
    payConfirm: function() {

    },
    placeOrder: function () {
      var i,
      //Wrap the order in an object
      order = {
        burgers: this.burgers
      };
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', order);
    },

  }
}

</script>


<style scoped>

button:hover {
  cursor: pointer;
}

/* .header{
font-size: 60px;
color: pink;
}

.header2{
font-size: 40px;
color: pink;
}

.header3{
font-size: 30px;
color: pink;
} */

/* #checkout {
margin: auto;
padding-top: 50px;
width: 100%;
background: radial-gradient(lightgray, darkgray);
color: white;
} */

#langButton{
  position: absolute;
  top: 8px;
  right: 16px;
}

/* #changeButton {
background-color: #DF9BBF;
border-radius: 20px;
border: 5px solid MediumVioletRed;
color: black;
font-size: 14px;
font-variant: small-caps;
padding: 10px 10px 10px 10px;
margin: 0px 15px 15px 15px;
text-align: center;
} */

#payButton {
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 14px;
  font-variant: small-caps;
  padding: 10px 10px 10px 10px;
  text-align: center;
}

.background {
  background-image: url("http://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg");
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 100px;
  color: white;
}

.glow{
  /* font-size: 60px;
  color: pink;
  text-shadow: 0 0 3px #875187, 0 0 5px #875187; */
  font-family: "Snell Roundhand", cursive, sans-serif;
  font-size: 70px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

</style>
