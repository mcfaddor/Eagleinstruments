<template>
  <div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="thinarchtop in thinarchtop" :key="thinarchtop.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ thinarchtop.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ thinarchtop.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ thinarchtop.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ thinarchtop.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="thinarchtop.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

      <!---------------------------- MOBIL ---------------------------->

      <div class="mobile container">
        <div v-for="thinarchtop in thinarchtop" :key="thinarchtop.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="thinarchtop.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ thinarchtop.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ thinarchtop.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ thinarchtop.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ thinarchtop.Lanseringsar }}</p>
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
      thinarchtop: [
        {
          img: require("@/img/ThinArchtop/JHBCH.jpg"),
          Modell: 'JHB',
          Farg: 'Cherryred, Sunburst',
          Listpris: 7495,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/ThinArchtop/JHBBigsby.jpg"),
          Modell: 'JHB bigsby',
          Farg: 'Cherryred',
          Listpris: 8190,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/ThinArchtop/JHBLefthand.jpg"),
          Modell: 'JHB lefthand',
          Farg: 'Cherryred, Sunburst',
          Listpris: 7995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/ThinArchtop/ClasYSignature.jpg"),
          Modell: 'Clas Yngström signature',
          Farg: 'White',
          Listpris: 5995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/ThinArchtop/720.jpg"),
          Modell: '720',
          Farg: 'Cherryred, Gold flake, Blue flake',
          Listpris: 4995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/ThinArchtop/820.jpg"),
          Modell: '820',
          Farg: 'Amber sunburst, Orange flame maple, Natural flame maple, Blue flake',
          Listpris: 5995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/ThinArchtop/840MahognyMAH-BURST.jpg"),
          Modell: '840 Mahogny',
          Farg: 'Mah-burst',
          Listpris: 6995,
          Lanseringsar: '2006'
        },
        {
          img: require("@/img/ThinArchtop/ULPResonator.jpg"),
          Modell: 'ULP Resonator guitar',
          Farg: 'Brown',
          Listpris: 4995,
          Lanseringsar: '2005'
        }
      ],
    }
  }
};
</script>


<style src="../scss/style.scss" lang="scss">
</style>