<template>
  <div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="steel in steel" :key="steel.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ steel.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ steel.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ steel.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ steel.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="steel.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

      <!---------------------------- MOBIL ---------------------------->

      <div class="mobile container">
        <div v-for="steel in steel" :key="steel.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="steel.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ steel.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ steel.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ steel.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ steel.Lanseringsar }}</p>
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
      steel: [
 {
          img: require("@/img/Steel/SantaMonica.jpg"),
          Modell: 'Santa monica',
          Farg: 'Natur',
          Listpris: 6995,
          Lanseringsar: '2004'
        },
        {
          img: require("@/img/Steel/Bruno.jpg"),
          Modell: 'Bruno ',
          Farg: 'Natur',
          Listpris: 4995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Steel/D38.jpg"),
          Modell: 'D38',
          Farg: 'Natur',
          Listpris: 3995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Steel/RagtimeL28NS.jpg"),
          Modell: 'Ragtime L28 NS',
          Farg: 'Natur',
          Listpris: 8995,
          Lanseringsar: '2004'
        },
        {
          // img: require("@/img/Steel/D38.jpg"),
          Modell: 'FC 504 Crossroads',
          Farg: 'Black',
          Listpris: 1795,
          Lanseringsar: '2004'
        },
        {
        //  img: require("@/img/Steel/D38.jpg"),
          Modell: 'CE257, Ovation yup',
          Farg: 'Blackcherry sunburst, Black, Blueburst, Honeyburst, Redburst',
          Listpris: 3995,
          Lanseringsar: '2007'
        },
        {
          img: require("@/img/Steel/J200SB.jpg"),
          Modell: 'J200 SB',
          Farg: 'Sunburst',
          Listpris: 2995,
          Lanseringsar: '2007'
        },
        {
          img: require("@/img/Steel/UEA40.jpg"),
          Modell: 'EAJ 40CE',
          Farg: 'Sunburst',
          Listpris: 2895,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Steel/EO10CE.jpg"),
          Modell: 'EO 10CE',
          Farg: 'Sunburst',
          Listpris: 2995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Steel/UEA40.jpg"),
          Modell: 'UEA 40',
          Farg: 'Natural',
          Listpris: 2995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Steel/UD30CE.jpg"),
          Modell: 'UD 30CE',
          Farg: 'Sunburst',
          Listpris: 3995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Steel/UD30CE.jpg"),
          Modell: 'UOV 10CE, Ovation typ',
          Farg: 'Transparent gold yellow',
          Listpris: 2995,
          Lanseringsar: '1999'
        },
        {
          // img: require("@/img/Steel/UEA40.jpg"),
          Modell: 'UOV 40CE, Ovation typ',
          Farg: 'Cherryred sunburst',
          Listpris: 3495,
          Lanseringsar: '1999'
        }
      ]
    };
  }
};
</script>


<style src="../scss/style.scss" lang="scss">
</style>