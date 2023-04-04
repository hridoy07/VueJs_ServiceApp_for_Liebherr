<template>
  <div name="unregistered_area">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br><br>
    <h1 class="product">{{$t('message.nav1')}}</h1>
    <br>
    <nav>
    <!-- Navigation elements with vue-loop -->
      <b-nav ref="bnav1" pills small align="center">
        <b-nav-item 
          v-for="item in items"
          v-bind:key="item.id"
          :to="item.to"
          v-on:click="doNavClick"
          class="bnav" 
          style="margin-right: 5px"
        >{{$t('message.unreg'+item.id)}}</b-nav-item>
      </b-nav>
    </nav>
  </div>
</template>

<script>
//import router from '../router'
import { Trans } from'../Translation'
var translation=Trans;
export default {
  name: "unregistered_area", //this is the name of the component
  data () {
   return {
    items: [
    { id: 1, to: translation.i18nRoute({name:'products'}), text: "Products" },
    { id: 2, to: translation.i18nRoute({name:'contact'}), text: "Contact" },
    ]
   };
  },

  methods: {
    doNavClick: function(event) {
      if (event) {
        let sib = event.target.parentElement.parentElement.childNodes; // siblings of li
        console.log(sib);
        sib.forEach(element => {
          element.childNodes[0].classList.remove("active");
        });
        event.target.classList.add("active");
      }
    },

      forceRerender() {
      //console.log("forceRerender");
      // update items
      this.updateItems();
    },

    updateItems() {
      // Updates Text and Links
      let PathNames = ["products", "contact"];
      let i = 0;
      PathNames.forEach(pan => {
        this.items[i].to = translation.i18nRoute({ name: pan });
        i++;
      });
    }
  }      
};
</script>
<style>
</style>
