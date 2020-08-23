<template>
<div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="bas in bas" :key="bas.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ bas.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ bas.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ bas.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ bas.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="bas.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

    <!---------------------------- MOBIL ---------------------------->

     <div class="mobile container">
        <div v-for="bas in bas" :key="bas.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="bas.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ bas.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ bas.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ bas.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ bas.Lanseringsar }}</p>
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
      bas: [
       {
          img: require("@/img/Bas/EB491BassBR.jpg"),
          Modell: 'EB 491 Bass',
          Farg: 'Brown',
          Listpris: 2995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/EB590BassFretlessMRD.jpg"),
          Modell: 'EB 590 Bass Fretless',
          Farg: 'Metallic red',
          Listpris: 3550,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/EBIV681BLB.jpg"),
          Modell: 'EB IV 681 A Bass',
          Farg: 'Blueburst',
          Listpris: 3995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/EB790Bass.jpg"),
          Modell: 'EB 790 Bass',
          Farg: 'Blueburst',
          Listpris: 3250,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/EBV795HY.jpg"),
          Modell: 'EB V 795 Bass',
          Farg: 'Honey brown',
          Listpris: 3425,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/EBV895BRB.jpg"),
          Modell: 'EB V 895 Bass',
          Farg: 'Blue burst',
          Listpris: 3995,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/896BassNA.jpg"),
          Modell: 'EB VI 896 Bass',
          Farg: 'Brown',
          Listpris: 4495,
          Lanseringsar: '1999'
        },
        {
          img: require("@/img/Bas/MMTBassIVBUTTERSCOTCH.jpg"),
          Modell: 'MMT Bass IV ',
          Farg: 'Brown, Butterscotch',
          Listpris: 4495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/MMTBassVBBBR.jpg"),
          Modell: 'MMT Bass V ',
          Farg: 'Brown, Blackburst',
          Listpris: 4495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/ABBassIVNA.jpg"),
          Modell: 'AB Bass IV',
          Farg: 'Natural, Black, Brown, Blueburst, Blackburst, Brown oil satin',
          Listpris: 5995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/ABBassVI FretlessNADBR.jpg"),
          Modell: 'AB Bass IV Fretless',
          Farg: 'Natural, Brown, Brown oil satin',
          Listpris: 6995,
          Lanseringsar: '2001'
        },
        {
         img: require("@/img/Bas/ABBassVBLFLMPL.jpg"),
          Modell: 'AB Bass V',
          Farg: 'Dark brown, Black flame maple',
          Listpris: 6995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/ABBassVINA.jpg"),
          Modell: 'AB Bass VI',
          Farg: 'Natural, Brown, Black',
          Listpris: 6995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/ABBassVI FretlessNADBR.jpg"),
          Modell: 'AB Bass VI Fretless',
          Farg: 'Natural, Dark brown',
          Listpris: 6995,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Bas/RKBBK.jpg"),
          Modell: 'RKB Bass',
          Farg: 'Fireglow, Black, Natural (med case)',
          Listpris: 6995,
          Lanseringsar: '2008'
        },
        {
          img: require("@/img/Bas/USB201BassBKB.jpg"),
          Modell: 'USB-201 IV Bass',
          Farg: 'Blackburst, Antique sunburst ',
          Listpris: 4495,
          Lanseringsar: '2006'
        },
        {
          img: require("@/img/Bas/USB201VBKB.jpg"),
          Modell: 'USB-201 V Bass ',
          Farg: 'Blackburst',
          Listpris: 4995,
          Lanseringsar: '2006'
        },
        {
          img: require("@/img/Bas/ApegBass.jpg"),
          Modell: 'Apeg Bass ',
          Farg: 'Black',
          Listpris: 6495,
          Lanseringsar: '2006'
        },
        {
          img: require("@/img/Bas/HazzeWazeenSignatureGFL.jpg"),
          Modell: 'Hazze Wazzen Signature V',
          Farg: 'Gold flake',
          Listpris: 7495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/EagleAB12-string.jpg"),
          Modell: 'Eagle AB 12-string (1 ex.)',
          Farg: 'Black',
          Listpris: 6995,
          Lanseringsar: '2000'
        },
        {
         img: require("@/img/Bas/MetalTBassBK.jpg"),
          Modell: 'Metal T Bass',
          Farg: 'Black',
          Listpris: 3995,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/FlashTBassBLFLSFLGFL.jpg"),
          Modell: 'Flash T Bass',
          Farg: 'Blue flake. Gold flake, Silver flake',
          Listpris: 4495,
          Lanseringsar: '2000'
        },
        {
          img: require("@/img/Bas/SoulTBassCHSBBR.jpg"),
          Modell: 'Soul T Bass',
          Farg: 'Cherryred sunburst',
          Listpris: 6495,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Bas/SS4FullThrottleBassBLMPPMRD.jpg"),
          Modell: 'SS4 Full Throttle Bass',
          Farg: 'Black, Blue metal, Metallic purple',
          Listpris: 2795,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Bas/MetalTBassBK.jpg"),
          Modell: 'Metal Vee Bass',
          Farg: 'Black',
          Listpris: 5995,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Bas/BatmanBassBK.jpg"),
          Modell: 'Bat Beast Bass',
          Farg: 'Black satin',
          Listpris: 5995,
          Lanseringsar: '2002'
        },
        {
          img: require("@/img/Bas/DynamiteIVBK.jpg"),
          Modell: 'Dynamite IV Bass',
          Farg: 'Black',
          Listpris: 5995,
          Lanseringsar: '2001'
        },
        {
          img: require("@/img/Bas/DynamiteVBK.jpg"),
          Modell: 'Dynamite V Bass',
          Farg: 'Black',
          Listpris: 6495,
          Lanseringsar: '2001'
        }
      ]
    };
  }
};
</script>

<style src="../scss/style.scss" lang="scss">
</style>