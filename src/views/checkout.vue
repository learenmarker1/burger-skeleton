<template>
  <div>

    <h1>Hej</h1>

    <div>
      <button id = "orderButton" type="button" onclick="window.location = '/#/';"> Skräddarsy din hamburgare </button>
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

#orderButton {
  background-color: #BB86BB;
  color: black;
  border: 5px solid #875187;
  font-size: 20px;
  text-align: center;
  display: inline-block;
}

</style>
