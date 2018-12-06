'use strict';

// Stuff that is used both in the ordering system and in the kitchen
var sharedVueStuff = {
  data: function () {
    return {
      orders: {},
      uiLabels: {},
      ingredients: {},
      lang: "en",
      flag_sv: true,
      flag_en: false,
      lang_en: true,
      lang_sv: false
    }
  },
  created: function () {
    this.$store.state.socket.emit("switchPage");
    this.$store.state.socket.on('initialize', function (data) {
      this.orders = data.orders;
      this.uiLabels = data.uiLabels;
      this.ingredients = data.ingredients;

    }.bind(this));

    this.$store.state.socket.on('switchLang', function (data) {
      this.uiLabels = data;
    }.bind(this));

    this.$store.state.socket.on('currentQueue', function (data) {
      this.orders = data.orders;
      if (typeof data.ingredients !== 'undefined') {
        this.ingredients = data.ingredients;
      }
    }.bind(this));
  },
  methods: {
    switchLang: function () {
      if (this.lang === "en" && this.flag_en===false) {
        this.lang = "sv";
        this.lang_sv = true;
        this.lang_en = false;
        this.flag_en = true;
        this.flag_sv = false;

      } else {
        this.lang = "en";
        this.flag_sv = true;
        this.flag_en = false;
        this.lang_en = true;
        this.lang_sv = false;

      }
      this.$store.state.socket.emit('switchLang', this.lang);
    },
    // switchFlag: function(){
    //   if (this.getElementById("langPic").src == "https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png")
    //   {
    //     (this.getElementById("langPic").src = "https://st3.depositphotos.com/1798678/14061/v/1600/depositphotos_140613046-stock-illustration-uk-flag-england-symbol-vector.jpg";
    //   } else {
    //     (this.getElementById("langPic").src = "https://cdn.pixabay.com/photo/2017/01/31/16/46/banner-2025451__340.png";
    //   }
    //   this.$store.state.socket.emit('switchFlag', this.flag);
    // }
  }
};

export default sharedVueStuff;
