<template>
  <v-app>
    <Navbar />
    <v-content>
      <go-top></go-top>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import * as routes from "../src/router";
import GoTop from "../src/components/ToTop";

export default {
  components: {
    Footer,
    Navbar,
    GoTop
  },
  methods: {
    toggleSidebar(index) {
      this.sideBarLinks.routes.forEach(
        (menu, i) => (menu.active = i === index)
      );
    }
  },

  data() {
    return {
      sideBarLinks: {
        routes
      }
    };
  }
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.11.0/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Play");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  font-family: "Play", Tahoma;
  background-color: #ccc;
  color: #333;
}

#app {
  position: relative;
}
</style>
