<template>
  <nav>
    <v-app-bar prominent flat app style="background-color: white;">
      <div class="wrap row">
        <div class="hamburger col-sm-2 col-lg-2">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>

        <div class="headerImg col-sm-8 col-lg-8">
          <router-link to="/">
            <img class="picture" :src="require('../img/eagle.jpg')" />
          </router-link>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary class="navigation">
      <div id="sidebar">
        <div class="SidebarHeader text-center">
          <router-link to="/">
            <div id="img"></div>
          </router-link>
        </div>

        <div id="sidebar">
          <ul id="navigation">


            <div class="title" style="text-indent: 20px;">
              <router-link to="/Historia">Historia</router-link>
            </div>

            <li v-for="(item, index) in navigation" :key="'item'+index">
              <i
                v-if="item.children"
                class="fas"
                :class="{'fa-chevron-down':!item.open,
                    'fa-chevron-up':item.open}"
              ></i>
          <div class="title" @click="item.open = !item.open"><span :to="item.path">{{ item.title }}</span></div>
              <Dropdown v-if="item.children" :list="item" />
            </li>


          <div class="title" style="text-indent: 20px;">
            <router-link to="/Kontakt">Kontakt</router-link>
          </div>


          </ul>
        </div>
      </div>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  computed: {
    navigation() {
      return this.$store.getters.navigation;
    }
  },
  data() {
    return {
      drawer: false
    };
  },
  components: {
    Dropdown
  }
};
</script>




<style lang="scss" sco>
.headerImg {
  text-align: center;
  height: 100px;
}

#img {
  margin: auto;
  background-image: url("../img/eagle.jpg");
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.SidebarHeader {
  background: radial-gradient(white, yellow);
  padding-top: 38px;
  height: 190px;
}

.v-application.v-application--is-ltr.theme--light
  div.v-application--wrap
  nav
  header.v-sheet.v-sheet--tile.theme--light.v-toolbar.v-toolbar--flat.v-toolbar--prominent.v-app-bar.v-app-bar--fixed
  div.v-toolbar__content
  div.wrap.row
  div.hamburger.col-lg-2
  button.v-app-bar__nav-icon.v-btn.v-btn--flat.v-btn--icon.v-btn--round.theme--light.v-size--default {
  background-color: yellow;
  overflow: hidden;
}

.v-toolbar__content {
  height: 150px !important;
  background-color: white;
}

.wrap {
  display: flex;
  align-items: center;

  .hamburger {
    padding-left: 40px;
  }
}

img.picture {
  height: 120px;
}

// NAVIGATION STIL

ul#navigation {
  padding: 0;
  padding-top: 30px;
  background-color: yellow;

  .sub-items {
    padding: 0;
  }

  li {
    border: none;
    height: 100%;
  }

  a {
    color: black;
    text-decoration: none;
    list-style: none;
    border: none !important;
  }
}

#sidebar {
  width: 100%;
  max-width: 350px;
  min-height: 80vh;
  background-color: yellow;
}

#navigation {
  list-style: none;
  border-bottom: 1px solid #dedede;

  li {
    position: relative;
    color: #555;
    border-top: 1px solid #dedede;
    cursor: pointer;

    .title {
      padding: 10px 0;
      text-indent: 20px;
    }

    i {
      position: absolute;
      top: 12px;
      right: 10px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .container {
    margin-top: 20px;
  }
  .hamburger {
    margin-top: 20px;
  }

  .headerImg {
    position: absolute;
    text-align: center;
    height: 100px;
    z-index: -1;

    img {
      height: 100px;
    }
  }






}

</style>