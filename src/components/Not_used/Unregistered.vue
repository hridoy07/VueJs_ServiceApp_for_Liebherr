<template>
  <div>
    <br>
    <h1 class="compHeading1">Unregistered Area</h1>
    <p>Information about the unregistered area</p>
    <button class="btn1" v-on:click="$router.push('unregistered_area')">Go</button>
    

  </div>
</template>

<script>
export default {
  name: "unregistered" //this is the name of the component
};
</script>
<style>
.btn1
{
  background-color: #394791; /* Blue */
  border: none;
  color: #fdc400;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 16px;
}
</style>