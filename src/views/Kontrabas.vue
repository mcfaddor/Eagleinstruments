<template>
<div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="kontrabas in kontrabas" :key="kontrabas.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ kontrabas.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ kontrabas.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ kontrabas.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ kontrabas.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="kontrabas.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

    <!---------------------------- MOBIL ---------------------------->

       <div class="mobile container">
        <div v-for="kontrabas in kontrabas" :key="kontrabas.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="kontrabas.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ kontrabas.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ kontrabas.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ kontrabas.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ kontrabas.Lanseringsar }}</p>
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
      kontrabas: [
        {
          img: require("@/img/Kontrabas/StellaBR.jpg"),
          Modell: "Stella",
          Farg: "Brown, Black",
          Listpris: 6995,
          Lanseringsar: "2002"
        },
        {
          img: require("@/img/Kontrabas/ShakingBillyBK.jpg"),
          Modell: "Shaking Billy",
          Farg: "Black, Brownburst",
          Listpris: 8995,
          Lanseringsar: "2007"
        },
        {
          img: require("@/img/Kontrabas/ShakingBillyHotFlames.jpg"),
          Modell: "Shaking Billy",
          Farg: "Hot flames",
          Listpris: 9995,
          Lanseringsar: "2007"
        },
      ]
    };
  }
};
</script>



<style src="../scss/style.scss" lang="scss">
</style>