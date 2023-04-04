<template>

  <b-container fluid>
    <img alt="Vue logo" src="../assets/logo.png" />
    <br><br>
    <h1 class="product">Failure search plan</h1>
    <b-row>
      <b-col sm="3">
        <label :for="`type-${labels[0].type}`"> <code class="label1">{{labels[0].label}}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${labels[0].type}`" :type="labels[0].type" class="form1" :placeholder="labels[0].placeHolder" v-model="labels[0].Input"></b-form-input>
    </b-col>
    </b-row>
        <b-row>
      <b-col sm="3">
        <label :for="`type-${labels[1].type}`"> <code class="label1">{{labels[1].label}}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${labels[1].type}`" :type="labels[1].type" class="form1" :placeholder="labels[1].placeHolder" v-model="labels[1].Input">{{labels[1].Input}}</b-form-input>
      </b-col>
    </b-row>
      <b-row>
      <b-col sm="3">
        <label :for="`type-${labels[2].type}`"> <code class="label1">{{labels[2].label}}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${labels[2].type}`" :type="labels[2].type" class="form1" :placeholder="labels[2].placeHolder" v-model="labels[2].Input"></b-form-input>
      </b-col>
    </b-row>

    <b-button style="margin-top:30px; background-color:#394791; color:#fdc400; margin-right:5px" v-on:click="getNextstep">Next</b-button>
    <b-button style="margin-top:30px; background-color:#394791; color:#fdc400" v-on:click="getFirststep">Select Plan</b-button>
    <b-button block style="margin-top:30px; background-color:#394791; color:#fdc400" v-on:click="sendReport">submit</b-button>

  </b-container>
</template>

<script>
import { Trans } from'../Translation';
var translation=Trans;
  export default {
    name:'failureplan',
    data() {
      return {
        labels:
        [
          {id:'1',type:'text',label:'Failure search plan id', placeHolder:'id',Input:''},
          {id:'2',type:'text',label:'Output step', placeHolder:'Output the next flow step',Input:''},
          {id:'3',type:'text',label:'Input', placeHolder:'Enter result of your current step',Input:''},
        ],
      
        submit:''
      }
    },
    methods:
    {

      getFirststep()
      {
        switch (this.labels[0].Input) {
          case 'P1019-00': 
            this.labels[1].Input = "Niederdruck prüfen";
            this.labels[2].Input = "Niederdruck prüfen";
            this.labels[0].Input = "";
          }
      },
      getNextstep()
        { 

          switch (this.labels[2].Input) {
          case 'Niederdruck prüfen i.o.': 
            this.labels[1].Input = "Hochdruckanschluss verschließen Und erneut prüfen (Motor mit Anlasser drehen)";
            this.labels[2].Input = "Hochdruckanschluss verschließen Und erneut prüfen (Motor mit Anlasser drehen)";
            break;
          case 'Hochdruckanschluss verschließen Und erneut prüfen (Motor mit Anlasser drehen) i.o.':
            this.labels[1].Input = "Injektoren, DRS, Leitungen auf Dichtheit prüfen";
            this.labels[2].Input = "Injektoren, DRS, Leitungen auf Dichtheit prüfen";
            break;
          case 'Defekte Teile ersetzen':
            this.labels[1].Input = "Klicken Sie auf Senden";
            this.labels[2].Input = "Klicken Sie auf Senden";
            break;
          case 'Injektoren, DRS, Leitungen auf Dichtheit prüfen':
            this.labels[1].Input = "Defekte Teile ersetzen";
            this.labels[2].Input = "Defekte Teile ersetzen";
            break;
          case 'Saugseitig prüfen/ Kraftstoffversorgung sicherstellen. Filter, Tank, Leitungen, usw… i.o.':
            this.labels[1].Input = "VFP ersetzen";
            this.labels[2].Input = "VFP ersetzen";
            break;
          case 'Saugseitig prüfen/ Kraftstoffversorgung sicherstellen. Filter, Tank, Leitungen, usw… n.i.o.':
            this.labels[1].Input = "Defekte Teile ersetzen";
            this.labels[2].Input = "Defekte Teile ersetzen";
            break;
          case 'Niederdruck prüfen n.i.o.': 
            this.labels[1].Input = "Saugseitig prüfen/Kraftstoffversorgung sicherstellen. Filter, Tank, Leitungen, usw… ";
            this.labels[2].Input = "Saugseitig prüfen/Kraftstoffversorgung sicherstellen. Filter, Tank, Leitungen, usw… ";
            break;
          case 'VFP ersetzen':
          this.labels[1].Input = "Klicken Sie auf Senden";
          this.labels[2].Input = "Klicken Sie auf Senden";
          break;
          case 'Hochdruckanschluss verschließen Und erneut prüfen (Motor mit Anlasser drehen) n.i.o.':
          this.labels[1].Input = "VCV Bestromung Prüfen auf Kurzschluss nach Plus";
          this.labels[2].Input = "VCV Bestromung Prüfen auf Kurzschluss nach Plus";
          break;
          case 'VCV Bestromung Prüfen auf Kurzschluss nach Plus i.o.':
          this.labels[1].Input = "VCV ausbauen und sichtprüfen ob auf Geschlossen blockiert";
          this.labels[2].Input = "VCV ausbauen und sichtprüfen ob auf Geschlossen blockiert";
          break;
          case 'VCV Bestromung Prüfen auf Kurzschluss nach Plus n.i.o.':
          this.labels[1].Input = "Verkabelung prüfen";
          this.labels[2].Input = "Verkabelung prüfen";
          break;
          case 'Verkabelung prüfen':
          this.labels[1].Input = "Defekte Teile  ersetzen";
          this.labels[2].Input = "Defekte Teile  ersetzen";
          break;
          case 'VCV ausbauen und sichtprüfen ob auf Geschlossen blockiert i.o.':
          this.labels[1].Input = "PCV ersetzen";
          this.labels[2].Input = "PCV ersetzen";
          break;
          case 'VCV ausbauen und sichtprüfen ob auf Geschlossen blockiert n.i.o.':
          this.labels[1].Input = "VCV ersetzen";
          this.labels[2].Input = "VCV ersetzen";
          break;
          case 'VCV ersetzen':
          this.labels[1].Input = "Klicken Sie auf Senden";
          this.labels[2].Input = "Klicken Sie auf Senden";
          break;
          case 'PCV ersetzen':
          this.labels[1].Input = "HDP ersetzen";
          this.labels[2].Input = "HDP ersetzen";
          break;
          case 'HDP ersetzen':
          this.labels[1].Input = "Klicken Sie auf Senden";
          this.labels[2].Input = "Klicken Sie auf Senden";
          break;
        }
      },
      sendReport()
        {
          if(this.labels[1].Input === "Klicken Sie auf Senden")
          this.$router.push('/'+translation.currentLanguage+'/registered_area/account/failureplan/report')
        }
    }

  }
  //button takes you to your account without entering data, (backend part)
</script>