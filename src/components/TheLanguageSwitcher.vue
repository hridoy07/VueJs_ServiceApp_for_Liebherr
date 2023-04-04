<template>
    <select class="LanguageSwitcher" name="language" @change="changeLanguage">
      <option
        v-for="lang in supportedLanguages"
        :key="lang"
        :selected="isCurrentLanguage(lang)"
        :class="{ 'is-selected': isCurrentLanguage(lang) }"
        :value="lang"
      >{{lang}}</option>
    </select>
</template>
<script>
import { Trans } from "@/Translation.js";

export default {
  computed: {
    supportedLanguages() {
      return Trans.supportedLanguages;
    },
    currentLanguage() {
      return Trans.currentLanguage;
    }
  },
  methods: {
    changeLanguage(e) {
      const lang = e.target.value;
      const to = this.$router.resolve({ params: { lang } });

      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location);
        // Update navigation
        var products = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "products" })
        if(!products)
        {
        var contact = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "contact" })
          if(!contact){
          var home = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "home" })
          if(home)
          home._vnode.componentInstance.forceRerender(this.currentLanguage);
          var unregistered = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "unregistered_area" })
          if(unregistered)
          unregistered._vnode.componentInstance.forceRerender();
          var registered = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "registered_area" })
          if(registered)
          registered._vnode.componentInstance.forceRerender();
          var account = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "account" })
          if(account)
          account._vnode.componentInstance.forceRerender(); 
          var info = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "info" })
          if(info)
          info._vnode.componentInstance.forceRerender();  
          var login = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "login" })
          if(login)
          login._vnode.componentInstance.forceRerender();   
          var register = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "register" })
          if(register)
          register._vnode.componentInstance.forceRerender();    
          var chat = this.$parent.$children.find(child => { return child.$el.attributes.name.value === "chat" })
          if(chat)
          chat._vnode.componentInstance.forceRerender();  
          }   
        }
      });
    },
    isCurrentLanguage(lang) {
      return lang === this.currentLanguage;
    }
  }
};
</script>

<style>
.LanguageSwitcher {
  margin-bottom: 1rem;
}
</style>
