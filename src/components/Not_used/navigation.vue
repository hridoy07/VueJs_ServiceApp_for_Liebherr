<template>

  <nav>
    <!-- Navigation elements with vue-loop -->
    <b-nav ref="bnav1" pills small align="center">
      <b-nav-item
        v-for="item in items"
        v-bind:key="item.id"
        :to="item.to"
        v-on:click="doNavClick"
      >{{item.text}}</b-nav-item>
    </b-nav>
    <router-view /><!-- Component-view for test here, probably move it later in another component  -->
  </nav>

</template>

<script>

export default {
  data() {
    return {
      activeItem: 1,
      items: [
        { id: 1, to: "/", text: "Unregistered" },
        { id: 2, to: "/registered", text: "Registered" }
      ]
    };
  },
  name: 'Navigation', //this is the name of the component
  created: function() {
    //let rootElement = this.el; // this.el not valid here
    //let childElement = this.$refs; // another way to store values
  },
  mounted() {
    console.log(this.$el.childNodes);
    console.log(this.$refs.bnav1.childNodes[1]); // .bnav1.$el.outerHTML
    // activate first Nav element
    this.$refs.bnav1.childNodes[0].childNodes[0].classList.add("active");
  },
  methods: {
    setActive(i) {
      console.log(i);
      this.activeItem = i;
    },
    doNavClick: function(event) {
      // `this` inside methods points to the Vue instance
      //alert("Hello " + this.$options.name + "!");
      // `event` is the native DOM event
      if (event) {
        let sib = event.target.parentElement.parentElement.childNodes; // siblings of li
        console.log(sib);
        sib.forEach(element => {
          element.childNodes[0].classList.remove("active");
        });

        event.target.classList.add("active");
        //alert(event.target.tagName); // DOm element
      }
    }
  }
};
</script>

<style>
</style>