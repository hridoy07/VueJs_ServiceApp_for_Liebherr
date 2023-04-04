<template>
  <div name="products">
  <h1 class="product">{{$t('message.prod1')}}</h1>
  <carousel-3d 
  @after-slide-change="onAfterSlideChange" 
  @before-slide-change="onBeforeSlideChange" 
  @last-slide="onLastSlide"
  :width="600"
  :height="530"
  :controls-visible="true" 
  :clickable="false"
  >
    <slide
    v-for="(slide,i) in slidesProtofolios" 
    :index="i"
    :key="i"
    >

    <h1 class="compHeading1">{{$t('message.comp'+protofolios[i].id)}}</h1>
    <router-link :to="protofolios[i].addr">
    <img :src="protofolios[i].src">
    </router-link>

    </slide>
  
  </carousel-3d>
  <h1 class="product">{{$t('message.prod2')}}</h1>
  <carousel-3d 
  @after-slide-change="onAfterSlideChange" 
  @before-slide-change="onBeforeSlideChange" 
  @last-slide="onLastSlide"
  :width="520"
  :height="375"
  :controls-visible="true" 
  :clickable="false"
  >
    <slide
    v-for="(slide,i) in slidesSpareParts" 
    :index="i"
    :key="i"
    >
    
    <h1 class="compHeading1">{{$t('message.sp'+spareParts[i].id)}}</h1>
    <router-link :to="spareParts[i].addr">
    <img :src="spareParts[i].src">
    </router-link>

    </slide>
  
  </carousel-3d>
</div>
</template>

<script>
import { Trans } from'../Translation';
var translation=Trans;
  export default {
  name: "products",
  data() {
    return {
      slidesProtofolios: 15,
      slidesSpareParts: 5,
      protofolios:[
      {addr: translation.i18nRoute({name:'info'}), text:"Dieselmotoren", src:"/1.png", id:1},
      {addr: "/Products/Compnents/2", text:"Gasmotoren", src:"/2.png", id:2},
      {addr: "/Products/Compnents/3", text:"Einspritzsysteme und Motorsteuergeräte", src:"/3.png", id:3},
      {addr: "/Products/Compnents/4", text:"Axialkolbenpumpen und -motoren", src:"/4.png", id:4},
      {addr: "/Products/Compnents/5", text:"Hydraulikzylinder und -aggregate", src:"/5.png", id:5},
      {addr: "/Products/Compnents/6", text:"Großwälzlager", src:"/6.png", id:6},
      {addr: "/Products/Compnents/7", text:"Getriebe und Seilwinden", src:"/7.png", id:7},
      {addr: "/Products/Compnents/8", text:"Elektrische Maschinen", src:"/8.png", id:8},
      {addr: "/Products/Compnents/9", text:"Mensch-Maschine-Interfaces und Gateways", src:"/9.png", id:9},
      {addr: "/Products/Compnents/10", text:"Steuerelektronik und Sensorik", src:"/10.png", id:10},
      {addr: "/Products/Compnents/11", text:"Leistungselektronik", src:"/11.png", id:11},
      {addr: "/Products/Compnents/12", text:"Schaltanlagen", src:"/12.png", id:12},
      {addr: "/Products/Compnents/13", text:"Lösungen für Teil- und Komplettsysteme", src:"/13.png", id:13},
      {addr: "/Products/Compnents/14", text:"Customer Service", src:"/14.png", id:14},
      {addr: "/Products/Compnents/15", text:"Reman-Programm", src:"/15.png", id:15},
       ],
      spareParts:[
        {addr: "/Products/spareparts/1", text:"Motorsteuergerät ECU2-HD", src:"/ecu2.png",id:1},
        {addr: "/Products/spareparts/2", text:"Common-Rail-Hochdruckpumpe LP11.2", src:"/lP11.2.png",id:2},
        {addr: "/Products/spareparts/3", text:"Motorsteuergerät ECU3", src:"/ecu3.png",id:3},
        {addr: "/Products/spareparts/4", text:"Common-Rail-Hochdruckpumpe LP11.5 / LP11.6", src:"/lp11.5.png",id:4},
        {addr: "/Products/spareparts/5", text:"Common-Rail-Injektor LI1", src:"/li1.png",id:5},
       ],
  };
  },
  methods: {
    onAfterSlideChange(index) {
      console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
      console.log('this.slides')
    },
    onBeforeSlideChange(index) {
      console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    onLastSlide(index) {
      console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
    }
  }
  }

</script>