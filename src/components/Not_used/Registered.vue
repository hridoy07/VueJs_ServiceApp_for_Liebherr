<template>
  <div>
    <br>
    <h1 class="compHeading1">Registered Area</h1>
    <p>Information about the registered area</p>
    <button class="btn1" v-on:click="$router.push('registered_area')">Go</button>
  </div>
</template>

<script>
//<router-link class=links to ="/registered_area">Go there</router-link>
export default {
  name: "registred" //this is the name of the component
};
</script>
<style>
</style>