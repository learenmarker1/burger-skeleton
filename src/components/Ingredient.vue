<template>
  <div class="ingredient">
    <div class="innerGrid" v-if="item.category===7">
    <img id="burgerPic" :src="require('../assets/' + item.img)" width=10>
    <div class="ingrList"> {{uiLabels.ingredients}}:<br/>
      <div class='ingrList' v-if="item.milk_free ">• {{uiLabels.lactoseFree}}</div>
      <div class='ingrList' v-else-if="!item.milk_free ">• {{uiLabels.lactose}}</div>
      <div class='ingrList' v-if="item.gluten_free">• {{uiLabels.glutenFree}}</div>
      <div class='ingrList' v-else-if="!item.gluten_free">• {{uiLabels.gluten}}</div>
      <div class='ingrList' v-if="item.vegan">• {{uiLabels.vegan}}</div>
      <div class='ingrList' v-else-if="!item.vegan">• {{uiLabels.notVegan}}</div>
  </div>
  </div>
    <label>
      {{item["ingredient_"+ lang]}}, {{item.selling_price}}:-
    </label>


<div class="chosenIngredientButton">
<button v-on:click="decrementCounter">-</button>
{{ counter }}
<button v-on:click="incrementCounter">+</button>
</div>

  </div>
</template>
<script>

export default {
  name: 'Ingredient',
  props: {
    item: Object,
    uiLabels: Object,
    lang: String
  },
    data: function () {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      // sending 'increment' message to parent component or view so that it
      // can catch it with v-on:increment in the component declaration
      this.$emit('increment');
    },
    decrementCounter: function () {
      this.counter -= 1;
      if (this.counter< 0){
        this.counter = 0;
      }
      else {
        this.$emit('decrement');
      }
    },
    resetCounter: function () {
      this.counter = 0;
    }
  }

}
</script>
<style scoped>

.chosenIngredientButton{
margin-right: 0px;
}
#burgerPic{
  width: 80px;
}
.innerGrid{
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: auto auto auto auto;
  justify-content: space-evenly;
}
.ingrList{
  /* text-align: right;
  top: 8px;
  right: 16px; */
  grid-column: 2;
  grid-row: 1;
  font-size: 85%;
  color: #DF9BBF;
}

</style>
