<template>
<div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="mandolin in mandolin" :key="mandolin.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ mandolin.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ mandolin.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ mandolin.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ mandolin.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="mandolin.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

    <!---------------------------- MOBIL ---------------------------->

    <div class="mobile container">
        <div v-for="mandolin in mandolin" :key="mandolin.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="mandolin.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ mandolin.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ mandolin.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ mandolin.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ mandolin.Lanseringsar }}</p>
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
      mandolin: [
             {
          img: require("@/img/MandolinBanjo/BMB8.jpg"),
          Modell: 'BMB-8 Mandolibanjo',
          Farg: 'Metall',
          Listpris: 2995,
          Lanseringsar: '2002'
        }
      ]
    };
  }
};
</script>

<style src="../scss/style.scss" lang="scss">
</style>