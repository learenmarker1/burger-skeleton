<template>
  <div class="ingredient">
    <img id="burgerPic" :src="require('../assets/' + item.img)" width=80><br>
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
  width: 150px;
}

</style>
