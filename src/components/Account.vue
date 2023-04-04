<template>
  <div name="account">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br><br>
    <h1 class="product">{{$t('message.acc')}}</h1>
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
        >{{$t('message.acc'+item.id)}}</b-nav-item>
      </b-nav>
    </nav>
    <br><br>
    <nav>
    <b-nav-item v-on:click="logoutUser" class="bnav">logout</b-nav-item>
    </nav>
  </div>
</template>

<script>
import { Trans } from'../Translation';
import {mapActions} from 'vuex';
var translation=Trans;
export default {
  name: "account", //this is the name of the component
  data () {
   return { 
    items: [
    { id: 1, to: translation.i18nRoute({ name: "failureplan" }), text: "Failure Plan" },
    { id: 2, to: translation.i18nRoute({ name: "chat" }), text: "Chat" },
    ],
    user:''
   };
  },

  methods: {
      ...mapActions(["logout","getProfile"]),
      logoutUser(){
        
        this.logout().then (res => {
          console.log(res)
            this.$router.push('/'+translation.currentLanguage+'/registered_area/login');
        })
        /*.catach(err=> {
          console.log (err);
        });*/
      },
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
      let PathNames = ["failureplan", "chat"];
      let i = 0;
      PathNames.forEach(pan => {
        this.items[i].to = translation.i18nRoute({ name: pan });
        i++;
      });
    },
  }      
};
</script>
<style>
</style>