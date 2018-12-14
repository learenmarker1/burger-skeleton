<template>
  <body class="wrap">
    <div id="ordering">
      <header>
        <div id="header">
          Babes & Burgers

          <button id="langButton" v-on:click="switchLang()">
            <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg' width=100>
            <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg' width=100>
          </button>

      </div>
    </header>

    <h1 align="center">{{ uiLabels.customizing }}</h1>

    <div class="panel">
      <div class="panel-title" v-on:click="sel == 1 ? sel = 0 : sel = 1">
        <img src='http://al-taiclub.com/images/icons-burger-clipart-2.png'  width=30>
        {{ uiLabels.bun }}

        <div id="yourOrder">
          {{ uiLabels.bunChoice }}
          {{chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}
        </div>

      </div>
      <div class="panel-body" v-show="sel == 1">
        <Ingredient
        ref="ingredient"
        v-for="item in ingredients"
        v-show="item.category===4"
        v-on:increment="addToOrder(item)"
        v-on:decrement="deleteFromOrder(item)"
        :item="item"
        :lang="lang"
        :key="item.ingredient_id">
      </Ingredient>
    </div>
  </div>


  <div class="panel">
    <div class="panel-title" v-on:click="sel == 2 ? sel = 0 : sel = 2">
      <img src='http://al-taiclub.com/images/icons-burger-clipart-2.png'  width=30>
      {{ uiLabels.patty }}
      <div id="yourOrder">
        {{ uiLabels.pattyChoice }}
        {{chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}
      </div>

    </div>
    <div class="panel-body" v-show="sel == 2">
      <Ingredient
      ref="ingredient"
      v-for="item in ingredients"
      v-show="item.category===1"
      v-on:increment="addToOrder(item)"
      v-on:decrement="deleteFromOrder(item)"
      :item="item"
      :lang="lang"
      :key="item.ingredient_id">
    </Ingredient>
  </div>
</div>

<div class="panel">
  <div class="panel-title" v-on:click="sel == 3 ? sel = 0 : sel = 3">
    <img src='http://al-taiclub.com/images/icons-burger-clipart-2.png'  width=30>
    {{ uiLabels.topping }}
    <div id="yourOrder">
      {{ uiLabels.toppingChoice }}
      {{chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}
    </div>
  </div>
  <div class="panel-body" v-show="sel == 3">
    <Ingredient
    ref="ingredient"
    v-for="item in ingredients"
    v-show="item.category===2"
    v-on:increment="addToOrder(item)"
    v-on:decrement="deleteFromOrder(item)"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
  </Ingredient>
</div>
</div>

<div class="panel">
  <div class="panel-title" v-on:click="sel == 4 ? sel = 0 : sel = 4">
    <img src='http://al-taiclub.com/images/icons-burger-clipart-2.png'  width=30>
    {{ uiLabels.sauce }}
    <div id="yourOrder">
      {{ uiLabels.sauceChoice }}
      {{chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}
    </div>
  </div>
  <div class="panel-body" v-show="sel == 4">
    <Ingredient
    ref="ingredient"
    v-for="item in ingredients"
    v-show="item.category===3"
    v-on:increment="addToOrder(item)"
    v-on:decrement="deleteFromOrder(item)"
    :item="item"
    :lang="lang"
    :key="item.ingredient_id">
  </Ingredient>
</div>
</div>



<h1 align="center">{{ uiLabels.sideOrder }}</h1>

<div class="panel">
  <div class="panel-title" v-on:click="sel == 6 ? sel = 0 : sel = 6">
    <img src='http://al-taiclub.com/images/icons-burger-clipart-2.png'  width=30>
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
    <img src='https://techflourish.com/images/hot-dog-chips-and-drink-clipart-18.png'  width=30>
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

<button  v-on:click="next()"> {{ uiLabels.next }} </button>

<h1>{{ uiLabels.order }}</h1>
{{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}, {{ price }} kr
<button v-on:click="placeOrder()">{{ uiLabels.placeOrder }}</button>

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
<!-- <p> Estimated time: {{this.orderNumber}} </p>  -->
</div>
</body>
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

.wrap{
  margin:0;
}
#header {
  background-color: #f1f1f1; /* Grey background */
  padding: 10px 10px; /* Some padding */
  color: pink;
  text-align: center; /* Centered text */
  font-size: 20px; /* Big font size */
  font-weight: bold;
  position: fixed; /* Fixed position - sit on top of the page */
  top: 0;
  /* opacity: 0.5; */
  width: 57%; /* Full width */
  transition: 0.2s; /* Add a transition effect (when scrolling - and font size is decreased) */
  z-index: 0;
}
#ordering {
  margin: auto;
  padding-top: 150px;
  max-width: 47em;
  background: radial-gradient(lightgray, darkgray);
  color: white;
}
#langButton{
  position: absolute;
  top: 8px;
  right: 16px;
  background-color: darkgray;
  padding:0;
}

#yourOrder{
  text-align: right;
}

.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  background-color: dimgray;
  color: pink;
}
.panel {
  margin-bottom: 1rem;
  border: 10px solid #ccc;
}
.panel-title {
  font-weight: bold;
  background-color: #ccc;
  padding: 0.01em 16px;
  cursor: pointer;
}
.panel-body {
  padding: 0.01em 2px;
}
</style>
