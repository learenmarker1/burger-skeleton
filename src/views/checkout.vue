<template>
  <div class="background">
    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg'>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg'>
    </button>

    <div>
      <h1 class="glow" align = "center">  {{ uiLabels.orderOverview }} </h1>

      <div class="myOrder">
        <br>

        <checkoutComponent
        v-for="(burger, key) in burgers"
        :burger="burger"
        :totalPrice="totalPrice"
        :ui-labels="uiLabels"
        :lang="lang"
        :key="key">
      </checkoutComponent>
    </div>
  </div>
  <br>


  <!-- <div id="order_confirmed">
  <h2 class="header2" align = "center">  {{ uiLabels.confirmed_text }} </h2>

  <h3 class="header3" align = "center">  {{ uiLabels.order_number_is }} # {{orderId}} </h3>
</div> -->


  <div align="center">
    <button id = "addButton" type="button" onclick="window.location= '/#/';" > {{ uiLabels.add_order }} </button>
    <button id = "payButton" type="button" onclick="window.location = '/#/thanks';" v-on:click="placeOrder()" > {{ uiLabels.payButton }} </button>
  </div>

  <div>

  </div>

</div>
</template>




<script>
import checkoutComponent from '@/components/checkoutComponent.vue'
//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'
import choose_burger from '@/views/choose_burger.vue'


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
      this.$store.commit('clearBurgers');
    },
  },
}

</script>


<style scoped>

button:hover {
  cursor: pointer;
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

#payButton {
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 14px;
  font-weight: bold;
  font-variant: small-caps;
  padding: 10px 10px 10px 10px;
  text-align: center;
}

#addButton {
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 14px;
  font-weight: bold;
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

.myOrder {
  border-radius: 40px;
  border-width: thick;
  border-color: pink;
  border-style: dotted;
  border-color: #DF9BBF;
}

.glow{
  font-family: "Snell Roundhand", cursive, sans-serif;
  font-size: 70px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

</style>
