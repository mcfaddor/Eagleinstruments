<template>
<div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="akustiskbas in akustiskbas" :key="akustiskbas.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ akustiskbas.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ akustiskbas.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ akustiskbas.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ akustiskbas.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="akustiskbas.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

    <!---------------------------- MOBIL ---------------------------->

     <div class="mobile container">
        <div v-for="akustiskbas in akustiskbas" :key="akustiskbas.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="akustiskbas.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ akustiskbas.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ akustiskbas.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ akustiskbas.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ akustiskbas.Lanseringsar }}</p>
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
      akustiskbas: [
        {
          img: require("@/img/Akustiskbas/UJB20EBass.jpg"),
          Modell: 'UJB 20E Bass',
          Farg: 'Natural',
          Listpris: 3350,
          Lanseringsar: '1999'
        }
      ]
    };
  }
};
</script>


<style src="../scss/style.scss" lang="scss">

</style>

