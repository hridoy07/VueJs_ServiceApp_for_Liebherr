<template>
<div name="login">
  <b-container fluid>
    <img alt="Vue logo" src="../assets/logo.png" />
    <br><br>
    <h1 class="product">{{$t('message.reg2')}}</h1>
    <b-row v-for="(label) in (labels)" :key="label.id">
      <b-col sm="3">
        <label :for="`type-${label.label}`"> <code class="label1">{{$t("message.sgn"+label.id)}}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${label.label}`" :type="label.type" :placeholder="label.placeHolder" class="form1" v-model="label.Input"></b-form-input>
      </b-col>
    </b-row>
    <b-button block style="margin-top:30px; background-color:#394791; color:#fdc400" v-on:click="registerUser">{{$t("message.submit")}}</b-button>
  </b-container>
</div>
</template>

<script>
import {mapActions } from 'vuex';
import { Trans } from'../Translation';
import { i18n } from'../i18n';
var int=i18n;
var translation=Trans;
  export default {
    data() {
      return {
        labels:
        [
          {id:'1',type:'text',label:int.t("message.sgn1"), placeHolder:'Enter your name',Input:''},
          {id:'2',type:'text',label:int.t("message.sgn2"),placeHolder:'Enter your preferred user name',Input:''},
          {id:'3',type:'email',label:int.t("message.sgn3"),placeHolder:'Enter your E-mail',Input:''},
          {id:'4',type:'password',label:int.t("message.sgn4"),placeHolder:'Enter your password',Input:''},
          {id:'5',type:'password',label:int.t("message.sgn5"),placeHolder:'Retype your password',Input:''},
        ],
      };
    },
    methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.labels[1].Input,
        password: this.labels[3].Input,
        confirm_password: this.labels[4].Input,
        email: this.labels[2].Input,
        name: this.labels[0].Input
      };
      
      this.register(user).then(res => {
        if (res.data.success) {
        this.$router.push('/'+translation.currentLanguage+'/registered_area/login');
        }
      });
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
</script>