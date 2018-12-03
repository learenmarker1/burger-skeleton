<template>
<div id="orders">
  <h1 align = "center" id="header">{{ uiLabels.stockHeader}}</h1>
    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>
    <div class = "row">
      <div class = "column">
        <h3>BUN</h3>
          <ul v-for = "item in ingredients" v-if = 'item.category == 4'>
            <div> {{item.ingredient_sv}} </div>
          </ul>
      </div>
      <div class = "column">
        <h3>PATTY</h3>
    <ul v-for = "item in ingredients" v-if = 'item.category == 1'>
      <div> {{item.ingredient_sv}} </div>
    </ul>
     </div>
     <div class = "column">
       <h3>TOPPINGS</h3>
         <ul v-for = "item in ingredients" v-if = 'item.category == 2'>
           <div> {{item.ingredient_sv}} </div>
         </ul>
     </div>
     <div class = "column">
       <h3>SAUCE</h3>
         <ul v-for = "item in ingredients" v-if = 'item.category == 3'>
           <div> {{item.ingredient_sv}} </div>
         </ul>
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

    .row {
      display: flex;
    }
  .column {
    flex: 50%;
    border: solid lightgray;
    border-bottom:0;
    border-width: 3px;
    margin: -2px;
    padding: 15px;
  }
</style>
