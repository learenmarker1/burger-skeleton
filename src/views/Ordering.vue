<template>
  <div id="ordering">
    <button v-on:click="switchLang()">{{ uiLabels.language }}</button>

    <h1 align="center">{{ uiLabels.ingredients }}</h1>

    <!-- <div>  BREAD  </div>

          <Ingredient
            ref="ingredient"
            v-for="item in ingredients"
            v-show="item.category===showCategory"
            v-on:increment="addToOrder(item)"
            :item="item"
            :lang="lang"
            :key="item.ingredient_id">
          </Ingredient> -->

-----------
  <div class="panel">
    <div class="panel-title" v-on:click="sel == 1 ? sel = 0 : sel = 1">
      BUN
    </div>
    <div class="panel-body" v-show="sel == 1">
      <Ingredient
        ref="ingredient"
        v-for="item in ingredients"
        v-show="item.category===4"
        v-on:increment="addToOrder(item)"
        :item="item"
        :lang="lang"
        :key="item.ingredient_id">
      </Ingredient>
    </div>
  </div>
    <div class="panel">
      <div class="panel-title" v-on:click="sel == 2 ? sel = 0 : sel = 2">
        PATTY
    </div>
      <div class="panel-body" v-show="sel == 2">
        <Ingredient
          ref="ingredient"
          v-for="item in ingredients"
          v-show="item.category===1"
          v-on:increment="addToOrder(item)"
          :item="item"
          :lang="lang"
          :key="item.ingredient_id">
        </Ingredient>
      </div>
    </div>
      <div class="panel">
        <div class="panel-title" v-on:click="sel == 3 ? sel = 0 : sel = 3">
          TOPPINGS
        </div>
        <div class="panel-body" v-show="sel == 3">
          <Ingredient
            ref="ingredient"
            v-for="item in ingredients"
            v-show="item.category===2"
            v-on:increment="addToOrder(item)"
            :item="item"
            :lang="lang"
            :key="item.ingredient_id">
        </Ingredient>
      </div>
    </div>
      <div class="panel">
        <div class="panel-title" v-on:click="sel == 3 ? sel = 0 : sel = 3">
          SAUCE
        </div>
        <div class="panel-body" v-show="sel == 3">
          <Ingredient
            ref="ingredient"
            v-for="item in ingredients"
            v-show="item.category===3"
            v-on:increment="addToOrder(item)"
            :item="item"
            :lang="lang"
            :key="item.ingredient_id">
          </Ingredient>
        </div>
      </div>

--------

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
    }
  }
}
</script>
<style scoped>
/* scoped in the style tag means that these rules will only apply to elements, classes and ids in this template and no other templates. */
#ordering {
  margin: auto;
  padding-top: 50px;
  width: 40em;
  background: radial-gradient(lightgray, darkgray);
  color: white;
}
.collapsible {
  background-color: gray;
  color: black;
  width: 100%;
  cursor: pointer;
  font-size: 15px;
}
.content {
  background-color: lightgray;
  display: none;
  overflow: hidden;
}
.ingredient {
  border: 1px solid #ccd;
  padding: 1em;
  background-image: url('~@/assets/exampleImage.jpg');
  color: pink;
}
/* -------- */
.panel {
  margin-bottom: 1rem;
  border: 1px solid #ccc;
}
.panel-title {
  font-weight: bold;
  background-color: #ccc;
  padding: 0.01em 16px;
  cursor: pointer;
}
.panel-body {
  padding: 0.01em 16px;
}
</style>
