<template>
  <div name="home" ref="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br><br>
    <h1 class="product">{{$t('message.home')}}</h1>
    <br>
    <nav>
    <!-- Navigation elements with vue-loop -->
    <b-nav ref="bnav1" pills small align="center">
      <b-nav-item 
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:addr="item.addr"
        :to="item.to"
        v-on:click="doNavClick"
        class="bnav" 
      >{{$t('message.nav'+item.id)}}</b-nav-item>
    </b-nav>
  </nav>
  </div>
</template>

<script>
import { Trans } from'../Translation'
var translation=Trans;
export default {
 data() {
    return {
      items: [
        { id: 1, to: translation.i18nRoute({name:'unregistered_area'}),text: "Unregistered" },
        { id: 2, to: translation.i18nRoute({name:'registered_area'}),text: "Registered" }
      ],
      test:"unregistered_area",
      navkey:""
    };
 },
  name: "home", //this is the name of the component
  methods:{
      doNavClick: function(event) {
      //console.log(router.currentRoute.fullPath);
      if (event) {
        let sib = event.target.parentElement.parentElement.childNodes; // siblings of li
        //console.log(sib);
        sib.forEach(element => {
          element.childNodes[0].classList.remove("active");
        });
        event.target.classList.add("active");
      }
    },

      forceRerender(l) {
      //console.log("forceRerender");
      // update items
      this.updateItems();
      this.navKey = l; // l = currLanguage
    },

    updateItems() {
      // Updates Text and Links
      let PathNames = ["unregistered_area", "registered_area"];
      let i = 0;
      PathNames.forEach(pan => {
        // console.log(i);
        // console.log(pan);
        this.items[i].to = translation.i18nRoute({ name: pan });
        i++;
      });
    }
  }
};
</script>
<style>
</style>