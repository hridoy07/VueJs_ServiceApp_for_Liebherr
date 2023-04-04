<template>
<div name="login">
  <b-container fluid>
    <img alt="Vue logo" src="../assets/logo.png" />
    <br><br>
    <h1 class="product">{{$t('message.reg1')}}</h1>
    <b-row v-for="(label) in (labels)" :key="label.id">
      <b-col sm="3">
        <label :for="`type-${label.type}`"> <code class="label1">{{$t("message.lgn"+label.id)}}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${label.type}`" :type="label.type" class="form1" :placeholder="label.placeHolder" v-model="label.Input"></b-form-input>
      </b-col>
    </b-row>
    <b-button block style="margin-top:30px; background-color:#394791; color:#fdc400" v-on:click="loginUser">{{$t("message.submit")}}</b-button>
  </b-container>
</div>
</template>

<script>

import {mapActions } from 'vuex';
import { Trans } from'../Translation';
import { i18n } from'../i18n';
var translation=Trans;
var int=i18n;
  export default {
    data() {
      return {
        labels:
        [
          {id:'1',type:'text',label:int.t("message.lgn1"), placeHolder:'Enter your user name',Input:''},
          {id:'2',type:'password',label:int.t("message.lgn2"), placeHolder:'Enter your password',Input:''},
        ],
      };
    },
    methods: {
      ...mapActions(["login"]),
      loginUser(){
        let user = {
          username: this.labels[0].Input,
          password: this.labels[1].Input
        };
        
        this.login(user).then (res => {
          if(res.data.success){
            this.$router.push('/'+translation.currentLanguage+'/registered_area/account');
          }
        })
        /*.catach(err=> {
          console.log (err);
        });*/
      },
    forceRerender() {
      //console.log("forceRerender");
      // update items
      this.updateItems();
    },

    updateItems() {
      // Updates Text and Links
      let Names = [int.t("message.lgn1"), int.t("message.lgn2")];
      let i = 0;
      Names.forEach(n => {
        // console.log(i);
        // console.log(pan);
        this.labels[i].label = n;
        i++;
      });
    }
    }
  };
  //button takes you to your account without entering data, (backend part)
</script>