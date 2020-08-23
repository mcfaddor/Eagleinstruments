<template>
<div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="archtop in archtop" :key="archtop.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ archtop.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ archtop.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ archtop.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ archtop.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="archtop.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>
    <!---------------------------- MOBIL ---------------------------->

      <div class="mobile container">
        <div v-for="archtop in archtop" :key="archtop.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="archtop.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ archtop.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ archtop.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ archtop.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ archtop.Lanseringsar }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      archtop: [
        {
          img: require("@/img/Archtop/JazzJr.jpg"),
          Modell: "Jazz Jr",
          Farg: "Sunburst",
          Listpris: 8995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Archtop/FBJTommyJayjpg.jpg"),
          Modell: "FBJ Tommy jay",
          Farg: "Sunburst",
          Listpris: 5995,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Archtop/SCJ925.jpg"),
          Modell: "SCJ 925",
          Farg: "Cherryred sunburst, Sunburst, Natural",
          Listpris: 7995,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Archtop/PasadenaNASB.jpg"),
          Modell: "Pasadena P90",
          Farg: "Sunburst flame maple",
          Listpris: 9995,
          Lanseringsar: "2003"
        },
        {
          img: require("@/img/Archtop/RudyRuthlessOR.jpg"),
          Modell: "Rudy ruthless",
          Farg: "Orange",
          Listpris: "8995",
          Lanseringsar: "2003"
        },
        {
          img: require("@/img/Archtop/JiveSuper2006GT.jpg"),
          Modell: "Jive super 2006 goldtop",
          Farg: "Goldtop",
          Listpris: 7995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Archtop/Super2006PiezoMBL.jpg"),
          Modell: "Super 2006 Piezo",
          Farg: "Metallic blue",
          Listpris: 7995,
          Lanseringsar: "2006"
        }
      ]
    };
  }
};
</script>


<style src="../scss/style.scss" lang="scss">
</style>
