<template>
  <!-- Note in this component that it is using another component -->
  <div align="center" class="overview">
    <div v-for="(ingredient, key) in burger" :key="key">
      {{ingredient['ingredient_' + lang]}} {{ingredient.selling_price}} kr

    </div>
    <button id = "changeremoveButton" type="button"  onclick="window.location = '/#/';"> {{ uiLabels.changeButton }} </button>
    <button  id = "changeremoveButton"  type="button" > {{ uiLabels.removeButton }} </button>
  </div>
</template>
<script>

export default {
  name: 'checkoutComponent',
  totalPrice: 0,
  components: {
  },
  props: {
    uiLabels: Object,
    burger: Array,
    totalPrice: Number,
    orderId: String,
    lang: String
  },
  methods: {
    nextStep: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('nextStep');
    },
    calcPrice: function () {
      this.totalPrice += ingredient.selling_price;
    },
    cancelOrder: function () {
      this.$emit('cancelOrder');
    }

  }
}
</script>
<style scoped>

#changeremoveButton {
  background-color: #DF9BBF;
  border-radius: 15px;
  color: black;
  margin: 15px;
  border: 3px solid MediumVioletRed;
  font-size: 10px;
  text-align: center;
  font-variant: small-caps;
  padding: 10px 10px 10px 10px;
  margin: 0px 15px 15px 15px;
  text-align: center;
}

.overview{
  /* font-size: 60px;
  color: pink;
  text-shadow: 0 0 3px #875187, 0 0 5px #875187; */
  font-size: 20px;
  color: MediumVioletRed;
  text-align: center;
}

</style>
