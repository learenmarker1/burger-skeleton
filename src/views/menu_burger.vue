<template>
    <div id="ordering">
        <div id="header">Babes & Burgers<button id="langButton" v-on:click="switchLang()">
          <img id='langPic' v-on:click="switchFlag()" src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png'  width=40 >
          <!-- <img src='https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png' width=40> -->
          {{ uiLabels.language }}
        </button>
      </div>

<h1 align="center">{{ uiLabels.fromMenu }}</h1>
<div class="panel-title" > <!--v-on:click="sel == 5 ? sel = 0 : sel = 5" -->
<img src='http://al-taiclub.com/images/icons-burger-clipart-2.png'  height=50>
 BABES AND BURGERS FAVOURITES
</div>
<div class="panel" id="panelGrid">

  <!--<div class="panel-body" v-show="sel == 5">
     <Ingredient
    ref="ingredient"
    v-for="item in ingredients"
    v-show="item.category===7"
    v-on:increment="addToOrder(item)"
    v-on:decrement="deleteFromOrder(item)"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
  </Ingredient> -->
  <Ingredient
  ref="ingredient"
  v-for="item in ingredients"
  v-show="item.category===7"
  v-on:increment="addToOrder(item)"
  v-on:decrement="deleteFromOrder(item)"
  :item="item"
  :lang="lang"
  :key="item.ingredient_id"
  >

</Ingredient>

</div>
<!-- </div> -->

<h1 align="center">{{ uiLabels.sideOrder }}</h1>

<div class="panel">
  <div class="panel-title" v-on:click="sel == 6 ? sel = 0 : sel = 6">
    <img src='http://www.clker.com/cliparts/2/F/F/v/d/Z/french-fries.svg'  height=35>
    {{ uiLabels.sideorders }}
    <div id="yourOrder">
      {{ uiLabels.addingsChoice }}
      {{chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}
    </div>
  </div>
  <div class="panel-body" v-show="sel == 6">
    <Ingredient
    ref="ingredient"
    v-for="item in ingredients"
    v-show="item.category===5"
    v-on:increment="addToOrder(item)"
    v-on:decrement="deleteFromOrder(item)"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
  </Ingredient>
</div>
</div>
<div class="panel">
  <div class="panel-title" v-on:click="sel == 7 ? sel = 0 : sel = 7">
    <img src='https://techflourish.com/images/hot-dog-chips-and-drink-clipart-18.png'  height=45>
    {{ uiLabels.drinks }}
    <div id="yourOrder">
      {{ uiLabels.drinksChoice }}
      {{chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}
    </div>
  </div>
  <div class="panel-body" v-show="sel == 7">
    <Ingredient
    ref="ingredient"
    v-for="item in ingredients"
    v-show="item.category===6"
    v-on:increment="addToOrder(item)"
    v-on:decrement="deleteFromOrder(item)"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
  </Ingredient>
</div>
</div>
<!--
<button  v-on:click="next()"> {{ uiLabels.next }} </button> -->

<h1>{{ uiLabels.order }}</h1>
{{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}, {{ price }} kr
<button id="placeButton" v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>

<h1>{{ uiLabels.ordersInQueue }}</h1>
<div>
  <OrderItem
  v-for="(order, key) in orders"
  v-if="order.status !== 'done'"
  :order-id="key"
  :order="order"
  :ui-labels="uiLabels"
  :lang="lang"
  :key="key">
</OrderItem>
</div>


<div>
  <button id = "backButton" onclick="window.location = '/#/';"> {{ uiLabels.backButton }} </button>
</div>

<div>
  <button align ="right" id = "checkoutButton" onclick="window.location = '/#/checkout';"> {{ uiLabels.checkoutButton }} </button>
</div>

<!-- <p> Estimated time: {{this.orderNumber}} </p> -->
</div>
</template>

<script>

//import the components that are used in the template, the name that you
//use for importing will be used in the template above and also below in
//components
import Ingredient from '@/components/Ingredient.vue'
import OrderItem from '@/components/OrderItem.vue'

//import methods and data that are shared between ordering and kitchen views
import sharedVueStuff from '@/components/sharedVueStuff.js'

/* instead of defining a Vue instance, export default allows the only
necessary Vue instance (found in main.js) to import your data and methods */
export default {
  name: 'Ordering',
  components: {
    Ingredient,
    OrderItem
  },
  mixins: [sharedVueStuff], // include stuff that is used in both
  // the ordering system and the kitchen
  data: function() { //Not that data is a function!
    return {
      chosenIngredients: [],
      price: 0,
      orderNumber: "",
      showCategory: 1,
      sel: 0,
      categoryHeadline: ["Buns", "Patties", "Toppings", "Sauces"]
    }
  },
  created: function () {
    this.$store.state.socket.on('orderNumber', function (data) {
      this.orderNumber = data;
    }.bind(this));
  },
  methods: {
    addToOrder: function (item) {
      this.chosenIngredients.push(item);
      this.price += +item.selling_price;
    },
    deleteFromOrder: function (item) {
      this.chosenIngredients.splice(this.chosenIngredients.indexOf(item),1);
      this.price += -item.selling_price;
    },
    placeOrder: function () {
      var i,
      //Wrap the order in an object
      order = {
        ingredients: this.chosenIngredients,
        price: this.price
      };
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', {order: order});
      //set all counters to 0. Notice the use of $refs
      for (i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }
      this.price = 0;
      this.chosenIngredients = [];
    },

    next: function () {
      this.showCategory += 1;
    },
    switchFlag: function (){
      if (document.getElementById("langPic").src === "https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png")
      {
        document.getElementById("langPic").src = "https://st3.depositphotos.com/1798678/14061/v/1600/depositphotos_140613046-stock-illustration-uk-flag-england-symbol-vector.jpg";
      } else {
        document.getElementById("langPic").src = "https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png";
      }
    }
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

</script>
<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */

/* .wrap{
  margin:0;
} */
#header {
  background-color: #f1f1f1; /* Grey background */
  color: pink;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: auto;
  transition: 0.2s; /* Add a transition effect (when scrolling - and font size is decreased) */
}

#ordering {
  margin: auto;
  padding-top: 150px;
  width: 47em;
  background: radial-gradient(lightgray, darkgray);
  color: white;
}
#langButton{
  position: absolute;
  top: 8px;
  right: 16px;
}

#yourOrder{
  text-align: right;
}

#placeButton{
  align-items: right;
  height: 50px;
  left: 16px;
  background-color: #BB86BB;
  border-radius: 20px;
  border: 5px solid #875187;
  color: black;
  text-align: center;
  font-size: 20;
}

#backButton{
  position: absolute;
  margin-top: 10px;
  left: 6px;
  background-color: #BB86BB;
  border-radius: 20px;
  border: 5px solid #875187;
  color: black;
  text-align: center;
}

#checkoutButton{
  position: absolute;
  margin-top: 10px;
  right: 16px;
  background-color: #BB86BB;
  border-radius: 20px;
  border: 5px solid #875187;
  color: black;
  text-align: center;
}

.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  /* background-image: url('~@/assets/exampleImage.jpg'); */
  background-color: dimgray;
  color: pink;
}
/* -------- */
.panel {
  /* margin-bottom: 1em; */
  /* border: 0px solid #ccc; */
}
#panelGrid{
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: auto auto auto auto;
  justify-content: space-evenly;
}
.panel-title {
  font-weight: bold;
  background-color: #ccc;
  padding: 0.01em 5px;
  cursor: pointer;
}
.panel-body {
  padding: 0.01em 2px;
}
</style>
