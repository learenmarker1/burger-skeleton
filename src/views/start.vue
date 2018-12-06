<template>
  <div id="ordering">
    <button align = "right" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
      {{ uiLabels.language }}</button>

    <h1 class="header" align = "center"> {{ uiLabels.startHeader}} <br> {{ uiLabels.startHeaderCont }}<br/> </h1>


  <div class = "row">

  <div class = "buttonL">
      <button id = "orderButtons" type="button" onclick="window.location = '/#/menu_burger';" > {{uiLabels.menu_button}} </button>
  </div>


  <div class = "buttonR">
      <button id = "orderButtons" type="button" onclick="window.location = '/#/choose_burger';" > {{uiLabels.choose_button}} </button>
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
  font-size: 80px;
  color: pink;
}
#ordering {
  margin: auto;
  padding-top: 50px;
  padding-bottom: 200px;
  max-width: 47em;
  background: radial-gradient(lightgray, darkgray);
  color: white;
}
#orderButtons {
  height: 150px;
  width: 150px;
  padding: 15px;
  margin: 25px;
  background-color: #BB86BB;
  border-radius: 20px;
  color: black;
  border: 5px solid #875187;
  font-size: 20px;
  text-align: center;
  display: inline-block;

}
.row {
  display: grid;
  padding-top: 100px;
  /*text-align: center;*/
  /* font-size: 16pt; */
  grid-gap: 10px;
  grid-template-columns: 25% 25%;
}
/* #orderButtons {
  /* flex: 50%; */
  /* margin: 50px;
  padding: 15px;
} */
.buttonL{

  grid-column: 2;
}
.buttonR {

  grid-column: 3;
}


</style>
