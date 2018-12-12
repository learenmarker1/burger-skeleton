<template>
  <div id="ordering">

    <button id="langButton" v-on:click="switchLang()">
      <img v-on:click="switchFlag()" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
      {{ uiLabels.language }}
    </button>

    <h1 class="header" align = "center"> KITCHEN STAFF VIEW </h1>
    <img align= "center"  class= "logo" src= "@/assets/BB-logo.png">
    <div class = "row">

      <div class = "buttonL">
        <button id="orderButtons" type="button" onclick="window.location = '/#/menu_burger';" > {{uiLabels.menu_button}} </button>

      </div>

      <div class = "buttonR">
        <button id="orderButtons" type="button" onclick="window.location = '/#/choose_burger';" > {{uiLabels.choose_button}} </button>
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
.header{
  font-size: 60px;
  color: pink;
}
#ordering {
  margin: auto;
  padding-top: 50px;
  padding-bottom: 200px;
  max-width: 50em;
  background: radial-gradient(lightgray, darkgray);
  color: white;
}

#langButton{
  position: absolute;
  top: 16px;
  right: 250px;
}

#orderButtons {
  height: 150px;
  width: 150px;
  background-color: #BB86BB;
  border-radius: 20px;
  border: 5px solid #875187;
  color: black;
  font-size: 20px;
  /*  text-align: center;*/
  display: inline-block;

}
.row {
  display: grid;
  padding-top: 100px;
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
.logo {
  width: 300px;
  align: "center";
}

</style>
