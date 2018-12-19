<template>
  <!-- Note in this component that it is using another component -->
  <div>
    <div v-for="(ingredient, key) in burger" :key="key">
      {{ingredient['ingredient_' + lang]}} {{ingredient.selling_price}} kr
    </div>
    <router-link id = "changeButton" type="button" to="/" > {{ uiLabels.changeButton }} </router-link>
    <button  id = "removeButton"  type="button"> {{ uiLabels.removeButton }} </button>

  </div>
</template>
<script>

export default {
  name: 'checkoutComponent',
  components: {
  },
  props: {
    uiLabels: Object,
    burger: Array,
    orderId: String,
    lang: String
  },
  methods: {
    nextStep: function () {
      // sending 'done' message to parent component or view so that it
      // can catch it with v-on:done in the component declaration
      this.$emit('nextStep');
    },
    cancelOrder: function () {
      this.$emit('cancelOrder');
    }
  }
}
</script>
<style scoped>

#changeButton {
  background-color: #BB86BB;
  color: white;
  margin: 20px;
  border: 5px solid #875187;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}

#removeButton {
  background-color: #BB86BB;
  color: white;
  margin: 20px;
  border: 5px solid #875187;
  font-size: 14px;
  text-align: center;
  display: inline-block;
}

</style>
