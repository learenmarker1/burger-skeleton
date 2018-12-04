<template>
  <div>

    <h1 align = "center"> {{ uiLabels.startHeader}} </h1>

    <button align = "right" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
      {{ uiLabels.language }}</button>

  <div class = "button left" align="left">
      <button id = "orderButtons" type="button" onclick="window.location = '/#/menu_burger';"> {{uiLabels.menu_button}} </button>
  </div>


  <div class = "button right" align="right">
      <button id = "orderButtons" type="button" onclick="window.location = '/#/choose_burger';"> {{uiLabels.choose_button}} </button>
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

#orderButtons {
  height: auto;
  width: 150px;
  padding: 15px;
  margin: 25px;
  background-color: #BB86BB;
  color: black;
  border: 5px solid #875187;
  font-size: 20px;
  text-align: center;
  display: inline-block;

}

.button {
  border: solid lightgray;
  border-width: 3px;
  margin: 2px;
  padding: 15px;
}
.left{
  width: 40%;
}
.right{
  width: 20%;
},

}

</style>
