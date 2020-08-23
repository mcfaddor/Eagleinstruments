<template>
  <div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="semisolid in semisolid" :key="semisolid.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ semisolid.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ semisolid.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ semisolid.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ semisolid.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="semisolid.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

    <!---------------------------- MOBIL ---------------------------->

   <div class="mobile container">
        <div v-for="semisolid in semisolid" :key="semisolid.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="semisolid.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ semisolid.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ semisolid.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ semisolid.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ semisolid.Lanseringsar }}</p>
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
      semisolid: [
        {
          img: require("@/img/Semisolid/RB300yeahYeah.jpg"),
          Modell: 'RB 300 Yeah Yeah',
          Farg: 'Fireglow, Black med case',
          Listpris: 5795,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/Pasadena.jpg"),
          Modell: 'RB 500',
          Farg: 'Fireglow',
          Listpris: 5995,
          Lanseringsar: '2006'
        },
        {
          img: require("@/img/Semisolid/RB512.jpg"),
          Modell: 'RB 512',
          Farg: 'Fireglow, Black',
          Listpris: 4995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Semisolid/RB512lh.jpg"),
          Modell: 'RB 512 lefthand',
          Farg: 'Fireglow',
          Listpris: 5995,
          Lanseringsar: '2004'
        },
        {
          img: require("@/img/Semisolid/335DSB.jpg"),
          Modell: '335 D',
          Farg: 'Sunburst',
          Listpris: 3995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/Flash11.jpg"),
          Modell: 'Flash 11',
          Farg: 'Blackburst, Sunburst, Orange flame maple',
          Listpris: 5495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/Comet56Bigsby.jpg"),
          Modell: 'Comet 56 bigsby',
          Farg: 'Surf blue',
          Listpris: 6495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/NysseSGooferGFL.jpg"),
          Modell: 'Nysse signature goofer',
          Farg: 'Gold flake',
          Listpris: 6995,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Semisolid/SlideRider.jpg"),
          Modell: 'Slide rider',
          Farg: 'Natural flame maple',
          Listpris: 7995,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Semisolid/BlackDevilBK.jpg"),
          Modell: 'Black devil',
          Farg: 'Black',
          Listpris: 5995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/Comet58MBKSB.jpg"),
          Modell: 'Comet 58',
          Farg: 'Metallic black, Sunburst',
          Listpris: 6995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/Lambretta58.jpg"),
          Modell: 'Lambretta 58',
          Farg: 'Black',
          Listpris: 6995,
          Lanseringsar: '2005'
        },
        {
          img: require("@/img/Semisolid/Blues56.jpg"),
          Modell: 'Blues 56',
          Farg: 'Sunburst',
          Listpris: 6495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Semisolid/Blues58GT.jpg"),
          Modell: 'Blues 58',
          Farg: 'Goldtop',
          Listpris: 6495,
          Lanseringsar: '2000'
        }
      ]
    };
  }
};
</script>


<style src="../scss/style.scss" lang="scss">
</style>