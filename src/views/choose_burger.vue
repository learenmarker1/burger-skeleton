<template>
  <div class="background">

    <header class="glow" id="header"><img id="BBlogo" src='../assets/BB-logo.png' style="width:125px"> Babes & Burgers  </header>

    <button id="langButton" v-on:click="switchLang()">
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_en" src= '@/assets/engflag.jpg'>
      <img id='langPic' v-on:click="switchFlag()" v-if="flag_sv" src= '@/assets/sweflag.jpg'>
    </button>

    <div id="ordering">
      <h1 align="center">
        {{ uiLabels.customizing }}
      </h1>

      <div class="panel">
        <div class="panel-title" v-on:click="sel == 1 ? sel = 0 : sel = 1">
          <img align="left" src='http://www.clker.com/cliparts/K/F/m/Q/B/D/bread-bun.svg'  height=35 width=35>
          {{ uiLabels.bun }}
          <div id="yourOrder">
            <div>
              {{ uiLabels.bunChoice }}
              <span v-for="(ing, key) in chosenIngredients.map(function (item) { if (item.category===4) return item['ingredient_'+lang]})" :key="key">
                {{ ing }}
              </span>
            </div>
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
        <img src='https://i.pinimg.com/originals/25/4f/c5/254fc531c68e435e237d523b05224987.png'  height=30>
        {{ uiLabels.patty }}
        <div id="yourOrder">
          {{uiLabels.pattyChoice }}
          <span v-for="ing in chosenIngredients.map(function (item) { if (item.category===1) return item['ingredient_'+lang]})">
            {{ ing }}
          </span>
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
      <img src='https://loinhacviet.info/images/lettuce-clipart-green-food-2.png'  height=40>
      {{ uiLabels.topping }}

      <div id="yourOrder">
        {{ uiLabels.toppingChoice }}
        <span v-for="ing in chosenIngredients.map(function (item) { if (item.category===2) return item['ingredient_'+lang]})">
          {{ ing }}
        </span>
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
    <img src='http://worldartsme.com/images/sauce-clipart-1.jpg'  height=40>
    {{ uiLabels.sauce }}
    <div id="yourOrder">
      {{ uiLabels.sauceChoice }}
      <span v-for="ing in chosenIngredients.map(function (item) { if (item.category===3) return item['ingredient_'+lang]})">
        {{ ing }}
      </span>
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
    <img src='http://www.clker.com/cliparts/2/F/F/v/d/Z/french-fries.svg'  height=40>
    {{ uiLabels.sideorders }}
    <div id="yourOrder">
      {{ uiLabels.addingsChoice }}
      <span v-for="ing in chosenIngredients.map(function (item) { if (item.category===5) return item['ingredient_'+lang]})">
        {{ ing }}
      </span>
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
    <img src='https://techflourish.com/images/hot-dog-chips-and-drink-clipart-18.png'  height=50>
    {{ uiLabels.drinks }}
    <div id="yourOrder">
      {{ uiLabels.drinksChoice }}
      <span v-for="ing in chosenIngredients.map(function (item) { if (item.category===6) return item['ingredient_'+lang]})">
        {{ ing }}
      </span>
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


<h1>{{ uiLabels.my_order }}</h1>
<p> {{ chosenIngredients.map(item => item["ingredient_"+lang]).join(', ') }}</p>
<p> {{ uiLabels.TotalSum}} {{ price }} kr  <button align ="right" id="placeButton" v-on:click="addBurger();showOrder()"> {{ uiLabels.add_order }}</button>
</p>

<p v-show='orderAdded'> {{ uiLabels.orderAdded }} </p>

<div>
  <button id = "backButton" onclick="window.location = '/#/';" > {{ uiLabels.backButton }} </button>
</div>

<div>
  <button align ="right" id = "checkoutButton" onclick="window.location = '/#/checkout';" > {{ uiLabels.checkoutButton }} </button>
</div>

<!-- <p> Estimated time: {{this.orderNumber}} </p> -->
</div>
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
      orderAdded: false,
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
    //detta ändrades i koden, bytte addburger mot placeorder --> ändrar mkt annat i koden också!
    addBurger: function () {
      let burger = this.chosenIngredients.splice(0);
      this.chosenIngredients = [];
      this.$store.commit('addBurger', burger);
      //set all counters to 0. Notice the use of $refs
      for (let i = 0; i < this.$refs.ingredient.length; i += 1) {
        this.$refs.ingredient[i].resetCounter();
      }
    },

    showOrder: function() {
      this.orderAdded=!this.orderAdded;
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
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("BBlogo").style.width = '50px';
  } else {
    document.getElementById("header").style.fontSize = "60px";
    document.getElementById("BBlogo").style.width = '125px';
  }
}

</script>
<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */

#header {
  /* background-color: lightgray; /* Grey background */*/
  background-image: url("http://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg");
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: auto;
  margin-top: 15px;
  transition: 0.2s; /* Add a transition effect (when scrolling - and font size is decreased) */
}


/* #ordering {
margin: auto;
padding-top: 50px;
width: 100%;
background: radial-gradient(lightgray, darkgray);
color: white;
} */

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

#yourOrder{
  text-align: right;
}

.ingredient {
  border: 3px solid #ccd;
  padding: 10px;
  background-color: dimgray;
  color: pink;
}
/* -------- */

/* .panel {
margin-bottom: 1rem;
border: 10px solid #ccc;
} */

.panel-title {
  font-weight: bold;
  background-color: #acabab;
  padding:5px;
  margin-bottom: 10px;
  cursor: pointer;
}

/* .panel-body {
padding: 0.01em 2px;
} */

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

#placeButton{
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 14px;
  font-variant: small-caps;
  padding: 10px 10px 10px 10px;
  margin: 0px 15px 15px 15px;
  text-align: center;
}

#backButton{
  position: absolute;
  left: 20px;
  margin: 20px 0 0 10px;
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 14px;
  font-variant: small-caps;
  padding: 10px 10px 10px 10px;
  text-align: center;
}

#checkoutButton{
  position: absolute;
  right: 20px;
  margin: 20px 0 0 10px;
  background-color: #DF9BBF;
  border-radius: 20px;
  border: 5px solid MediumVioletRed;
  color: black;
  font-size: 14px;
  font-variant: small-caps;
  padding: 10px 10px 10px 10px;
  text-align: center;
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
