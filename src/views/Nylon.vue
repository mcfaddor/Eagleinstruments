<template>
<div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="nylon in nylon" :key="nylon.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ nylon.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ nylon.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ nylon.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ nylon.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="nylon.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

    <!---------------------------- MOBIL ---------------------------->

     <div class="mobile container">
        <div v-for="nylon in nylon" :key="nylon.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="nylon.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ nylon.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ nylon.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ nylon.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ nylon.Lanseringsar }}</p>
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
      nylon: [
        {
          img: require("@/img/Nylon/CC12BK.jpg"),
          Modell: 'CC12 Eaglesias',
          Farg: 'Black, Natural',
          Listpris: 995,
          Lanseringsar: '2009'
        },
        {
          // img: require("@/img/Nylon/CC100.jpg"), Ingen bild på just nu!
          Modell: 'CC100',
          Farg: 'Natural',
          Listpris: 2295,
          Lanseringsar: '2010'
        },
        {
          img: require("@/img/Nylon/CC108.jpg"),
          Modell: 'CC108',
          Farg: 'Natural',
          Listpris: 2995,
          Lanseringsar: '2010'
        },
        {
          img: require("@/img/Nylon/UC30CE.jpg"),
          Modell: 'UC 30CE Nylon',
          Farg: 'Natural',
          Listpris: 2995,
          Lanseringsar: '1999'
        }
      ]
    };
  }
};
</script>

<style src="../scss/style.scss" lang="scss">
</style>
