n<template>
  <div id="app">

  <TheLanguageSwitcher/>
  <router-view/>
  <br><br><br><br>
  <b-button v-on:click="getUser"  style="margin-bottom:4px; margin-right:5px; background-color:#c2c0bc; color:#394791; font-weight: bold;">Show User</b-button>
  <b-button v-on:click="hideUser" style="margin-bottom:4px; background-color:#c2c0bc; color:#394791; font-weight: bold;">Hide User</b-button>
  <div style="
  background:#394791;
  color: #fdc400; margin-bottom:4px">{{user}}</div>
  <Errors v-if='error' :msg="error" v-show='toggle' />
  </div>
</template>

<script>


import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Errors from "./components/Errors.vue";
import TheLanguageSwitcher from "./components/TheLanguageSwitcher.vue";

export default {

    data () {
   return { 
    user:'',
    toggle: true
   };
  },

  name: "app",
  components: {  
    
    Errors,
    TheLanguageSwitcher

  },
  computed: {
  ...mapGetters(['error']),

  },
  methods: 
  {

      ...mapActions(['getProfile']),
      getUser(){
        
          this.user=''
          this.toggle=true
          this.getProfile().then (res => {
          if(res.data.user!=null){
            this.user=res.data.user.username
          }
          })
      },
      hideUser()
      {
        this.user=''
        this.toggle=false
      },
  }
}
</script>

<style lang="scss">
@import "./assets/custom.scss";
@import "./assets/mycss.css";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #394791;
  margin-top: 60px;
}

</style>

