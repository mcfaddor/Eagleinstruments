<template>
  <div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="ukulele in ukulele" :key="ukulele.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ ukulele.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ ukulele.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ ukulele.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ ukulele.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="ukulele.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

      <!---------------------------- MOBIL ---------------------------->

      <div class="mobile container">
        <div v-for="ukulele in ukulele" :key="ukulele.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="ukulele.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ ukulele.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ ukulele.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ ukulele.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ ukulele.Lanseringsar }}</p>
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
      ukulele: [
        {
          img: require("@/img/Ukulele/UK100.jpg"),
          Modell: "UK-100",
          Farg: "Sunburst, Green, Blue, Red, Black, White, Pink",
          Listpris: 295,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Ukulele/FLATULELE.jpg"),
          Modell: "Flat-u-lele",
          Farg: "Cherry sunburst, Natural, Pink, Red, White, Yellow, Violet",
          Listpris: 240,
          Lanseringsar: "2007"
        },
        {
          img: require("@/img/Ukulele/UK200.jpg"),
          Modell: "UK200 Jerker Loudmouth",
          Farg: "Black, Natural",
          Listpris: 695,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Ukulele/UK45Lullulele.jpg"),
          Modell: "UK45 Lullullele",
          Farg: "Natural",
          Listpris: 3695,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Ukulele/U26F.jpg"),
          Modell: "U26 F-hål",
          Farg: "Brown burst",
          Listpris: 595,
          Lanseringsar: "2006"
        }
      ]
    };
  }
};
</script>


<style src="../scss/style.scss" lang="scss">
</style>

