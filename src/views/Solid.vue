<template>
  <div id="app">
    <div class="card-container">
      <div class="screen">
        <div v-for="solid in solid" :key="solid.Modell" class="screenwrap container">
          <div class="screencard">
            <div class="info">
              <div class="text-left card-text">
                <h3>{{ solid.Modell }}</h3>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Färg:</p>
                <p class="svar">{{ solid.Farg }}</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Listpris:</p>
                <p class="svar">{{ solid.Listpris }}</p>
                <p class="svar ml-1">:-</p>
              </div>
              <div class="text-left black--text card-text">
                <p class="rubrik">Lanseringår:</p>
                <p class="svar">{{ solid.Lanseringsar }}</p>
              </div>
            </div>
                       <div class="img col-xs-6 col-lg-6">
              <img :src="solid.img" class="img" />
            </div>
          </div>
          
        </div>
      </div>

      <!---------------------------- MOBIL ---------------------------->

      <div class="mobile container">
        <div v-for="solid in solid" :key="solid.Modell" class="mobilewrap">
          <div class="mobile-img">
            <img :src="solid.img" />
          </div>

          <div class="text-left card-text">
            <h3>{{ solid.Modell }}</h3>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Färg:</p>
            <p class="svar">{{ solid.Farg }}</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Listpris:</p>
            <p class="svar">{{ solid.Listpris }}</p>
            <p class="svar ml-1">:-</p>
          </div>
          <div class="text-left black--text card-text">
            <p class="rubrik">Lanseringsår:</p>
            <p class="svar">{{ solid.Lanseringsar }}</p>
          </div>
        </div>
      </div>
    </div>



    <!---------------------------- MOBIL ---------------------------->

    <div class="mobile container">
      <div v-for="solid in solid" :key="solid.Modell" class="mobilewrap">
        <div class="mobile-img">
          <img :src="solid.img" />
        </div>

        <div class="text-left card-text pt-4">
          <h3>{{ solid.Modell }}</h3>
        </div>
        <div class="text-left black--text card-text">
          <p class="rubrik">Färg:</p>
          <p class="svar">{{ solid.Farg }}</p>
        </div>
        <div class="text-left black--text card-text">
          <p class="rubrik">Listpris:</p>
          <p class="svar">{{ solid.Listpris }}</p>
          <p class="svar ml-1">:-</p>
        </div>
        <div class="text-left black--text card-text">
          <p class="rubrik">Lanseringsår:</p>
          <p class="svar">{{ solid.Lanseringsar }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      solid: [
        {
          img: require("@/img/Solid/Stageflower761HB.jpg"),
          Modell: "Stageflower 761",
          Farg: "Honeyburst",
          Listpris: 3995,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Solid/Stagebird763BLBSB.jpg"),
          Modell: "Stagebird 763",
          Farg: "Blueburst, Sunburst",
          Listpris: 3995,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Solid/StageEdge765TRD.jpg"),
          Modell: "Stage Edge 765",
          Farg: "Transparent red",
          Listpris: 3660,
          Lanseringsar: "1999"
        },
        {
          //  img: require("@/img/Solid/Studiobird.jpg"),
          Modell: "Studiobird II",
          Farg: "Blackburst",
          Listpris: 3595,
          Lanseringsar: "2000"
        },
        {
           img: require("@/img/Solid/Lambretta58.jpg"),
          Modell: "Studiobird III",
          Farg: "Blueburst",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/StageShark990P.jpg"),
          Modell: "Stage Shark 990P",
          Farg: "Yellow Pearl",
          Listpris: 3190,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/StudiobirdAbalone205EagleBK.jpg"),
          Modell: "Studiobird Abalone 205 Eagle",
          Farg: "Black",
          Listpris: 7995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/StudiobirdLazer990Eagle.jpg"),
          Modell: "Studiobird Lazer 990 Eagle ",
          Farg: "Natural",
          Listpris: 6995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/UltraHighwayTremoloTGE.jpg"),
          Modell: "Ultra Highway Tremolo ",
          Farg: "Tiger, Blueburst",
          Listpris: 5995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/HighwayScullBK.jpg"),
          Modell: "Highway Scull",
          Farg: "Black",
          Listpris: 4995,
          Lanseringsar: "2005"
        },
        {
           img: require("@/img/Solid/Studio55.jpg"),
          Modell: "Studio 55",
          Farg: "Goldtop",
          Listpris: 4450,
          Lanseringsar: "2000"
        },
        {
           img: require("@/img/Solid/Studio59SBFLMPL.jpg"),
          Modell: "Studio 59",
          Farg: "Sunburst flame maple",
          Listpris: 4450,
          Lanseringsar: "2000"
        },
        {
           img: require("@/img/Solid/MetalSTTHBBK.jpg"),
          Modell: "STT HB",
          Farg: "Metallic black",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/MetalSTTBK.jpg"),
          Modell: "Metal STT",
          Farg: "Black",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/FlashSTTGFL.jpg"),
          Modell: "Flash STT",
          Farg: "Silver flake",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/UltimateSMahognyNA.jpg"),
          Modell: "Ultimate S Mahogny",
          Farg: "Natural",
          Listpris: 6995,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/UltimateSASwampashNA.jpg"),
          Modell: "Ultimate SA Swampash",
          Farg: "Natural",
          Listpris: 7995,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/EE777BK.jpg"),
          Modell: "EE 777",
          Farg: "Black",
          Listpris: 4495,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/FlashBBRFLBKBKB.jpg"),
          Modell: "Flash BB (tidigare Flash LP)",
          Farg: "Brown, Gold flake, Silver flake, Red flake",
          Listpris: 3995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/UltraLightPlayerBK.jpg"),
          Modell: "Ultra light player",
          Farg: "Honeyburst, Blackburst, Transparent black",
          Listpris: 4995,
          Lanseringsar: "2003"
        },
        {
          img: require("@/img/Solid/ULPResonatorguitar.jpg"),
          Modell: "ULP Baritone",
          Farg: "Black",
          Listpris: 4995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/FlashSBBLFL.jpg"),
          Modell: "Flash SB",
          Farg: "Blue flake",
          Listpris: 5995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/SB55GT.jpg"),
          Modell: "SB 55",
          Farg: "Goldtop",
          Listpris: 5995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/SB59SBFLMPL.jpg"),
          Modell: "SB 59",
          Farg: "Sunburst flame maple",
          Listpris: 5995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/SB59RHRegularHeadWRDMPL.jpg"),
          Modell: "SB 59 RH regular head",
          Farg: "Winered flame maple, Sunburst flame maple",
          Listpris: 4995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/HP870SB.jpg"),
          Modell: "HP 870",
          Farg: "Sunburst",
          Listpris: 3495,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/FlashBBRFLBKBKB.jpg"),
          Modell: "Flash BB",
          Farg: "Black, Blackburst, Silver flake, Gold flake, Red flake",
          Listpris: 4995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/FlashSTTGFL.jpg"),
          Modell: "Flash STT",
          Farg: "Gold flake, Silver flake",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
           img: require("@/img/Solid/FlashSTTGFL.jpg"),
          Modell: "Flash STT HB",
          Farg: "Gold flake, Silver flake",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/FlashTHHOLOGRAM.jpg"),
          Modell: "Flash TH",
          Farg: "Hologram",
          Listpris: 4495,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Solid/FlashTPKFL.jpg"),
          Modell: "Flash T",
          Farg: "Pink flake",
          Listpris: 3995,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Solid/BluesTBR.jpg"),
          Modell: "Blues T",
          Farg: "Brown",
          Listpris: 2995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/BluesTFBKB.jpg"),
          Modell: "Blues TF",
          Farg: "Blackburst",
          Listpris: 2995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/MetalTBK.jpg"),
          Modell: "Metal T",
          Farg: "Black",
          Listpris: 3495,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/MetalTT.jpg"),
          Modell: "Metal TT",
          Farg: "Black",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/SSFullThrottleGuitarBKRDBL.jpg"),
          Modell: "SS6 Full Throttle Guitar ",
          Farg: "Red, Blue, Black",
          Listpris: 2495,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/SSFullThrottleGuitarDLCHBKBCHSB.jpg"),
          Modell: "SS6 Full Throttle Guitar DL ",
          Farg: "Cherryred sunburst, Blackburst, Cherryred",
          Listpris: 4495,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/BullhornAbaloneTBK.jpg"),
          Modell: "Bullhorn Abalone",
          Farg: "Honeyburst, Transparent black",
          Listpris: 5995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/BullhornBROIL.jpg"),
          Modell: "Bullhorn",
          Farg: "Brown oil satin",
          Listpris: 5995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/ChopperMBL.jpg"),
          Modell: "Chopper",
          Farg: "Metallic blue, White",
          Listpris: 4495,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/AwesomeBK.jpg"),
          Modell: "Flash awesome",
          Farg: "Golf flake, Silver flake, Blackburst, Black cherryred",
          Listpris: 5995,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/MezzBRCURLYMPL.jpg"),
          Modell: "Mezz",
          Farg: "Orange satin, Natural satin, Brown curly maple, Brown",
          Listpris: 3995,
          Lanseringsar: "2002"
        },
        {
          img: require("@/img/Solid/MezzNATSATIN.jpg"),
          Modell: "Mezz Van Zandt (1 ex)",
          Farg: "Natural",
          Listpris: 7600,
          Lanseringsar: "2002"
        },
        {
          img: require("@/img/Solid/SoulTWH.jpg"),
          Modell: "Soul T",
          Farg:
            "Cherryred, Antique sunburst, White, Blueburst, Natural, Honeyburst",
          Listpris: 3995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/SoulTSHSustainHeadHB.jpg"),
          Modell: "Soul T sustain head",
          Farg: "Honeyburst",
          Listpris: 4795,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/SoulTLefthandHBFLMPL.jpg"),
          Modell: "Soul T Lefthand",
          Farg: "Cherryred, Honeyburst flame maple",
          Listpris: 4495,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/SoulT12-string.jpg"),
          Modell: "Soul T 12-string",
          Farg: "Cherryred, Antique sunburst",
          Listpris: 3995,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/SoulTConnyRodsonBK.jpg"),
          Modell: "Soul T Conny Rodson",
          Farg: "Black",
          Listpris: 3995,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/SoulT180BRB.jpg"),
          Modell: "Soul buddy 180",
          Farg: "Sunburst, Brownburst",
          Listpris: 3995,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/SoulBuddyIICCYngström.jpg"),
          Modell: "Soul Buddy II C. Yngström",
          Farg: "Cherryred, Brown, White, Blueburst",
          Listpris: 3995,
          Lanseringsar: "2001"
        },
        {
          img: require("@/img/Solid/SoulBuddyIll.jpg"),
          Modell: "Soul Buddy III C. Yngström",
          Farg: "Black, Red, Yellow",
          Listpris: 4495,
          Lanseringsar: "2002"
        },
        {
          img: require("@/img/Solid/LilithBKS.jpg"),
          Modell: "Lilith",
          Farg: "Black, Tiger 3-tone Sunburst",
          Listpris: 5995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/RetrobirdFB800.jpg"),
          Modell: "Retrobird FB800",
          Farg: "Blackburst",
          Listpris: 6995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/UltraEXBKS.jpg"),
          Modell: "Ultra EX",
          Farg: "Black satin",
          Listpris: 4995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/BatmanBKS.jpg"),
          Modell: "Bat beast",
          Farg: "Black satin",
          Listpris: 4995,
          Lanseringsar: "2002"
        },
        {
          // img: require("@/img/Solid/.jpg"),
          Modell: "EFV 110",
          Farg: "Blackburst",
          Listpris: 3995,
          Lanseringsar: "1999"
        },
        {
          img: require("@/img/Solid/MetalVEEBassBK.jpg"),
          Modell: "Metal Vee",
          Farg: "Blackburst, White",
          Listpris: 5995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/RSWongoKingBR-OIL.jpg"),
          Modell: "RS Wongo King",
          Farg: "Brown oil satin",
          Listpris: 5995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/JJStageBladeBK.jpg"),
          Modell: "JJ Stage blade",
          Farg: "Black",
          Listpris: 3795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/JJStageBladeLazloBK.jpg"),
          Modell: "JJ Stage blade lazlo (1 ex.)",
          Farg: "Black",
          Listpris: 4795,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/BBStoneSignatureSBFLMPL.jpg"),
          Modell: "BB stone signature",
          Farg: "Sunburst flame maple",
          Listpris: 4995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/AwardBLB.jpg"),
          Modell: "Award",
          Farg: "Blackburst",
          Listpris: 5995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/SnowflakeWH.jpg"),
          Modell: "Snowflake",
          Farg: "White",
          Listpris: 5995,
          Lanseringsar: "2000"
        },
        {
          img: require("@/img/Solid/LuciferBK.jpg"),
          Modell: "Lucifer",
          Farg: "Black satin, Black, Tiger 3-tone sunburst,Redburst",
          Listpris: 4995,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/LuciferBK.jpg"),
          Modell: "Lucifer med case",
          Farg: "Black satin, Black",
          Listpris: 5995,
          Lanseringsar: "2006"
        },
        {
          img: require("@/img/Solid/LuciferFloydRoseBK.jpg"),
          Modell: "Lucifer floyd rose",
          Farg: "Black, Black satin",
          Listpris: 5995,
          Lanseringsar: "2005"
        },
        {
          // img: require("@/img/Solid/Lucifer.jpg"),
          Modell: "Lucifer 7-string",
          Farg: "Black",
          Listpris: 5995,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/LuciferLefthandBK.jpg"),
          Modell: "Lucifer lefthand",
          Farg: "Black",
          Listpris: 5995,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/LuciferCustomShop.jpg"),
          Modell: "Lucifer custom shop",
          Farg: "Fireflames",
          Listpris: 8000,
          Lanseringsar: "2005"
        },
        {
          img: require("@/img/Solid/EagleJammer.jpg"),
          Modell: "Jammer with built in amp",
          Farg: "Yellow",
          Listpris: 2222,
          Lanseringsar: "1999"
        }
      ]
    };
  }
};
</script>


<style src="../scss/style.scss" lang="scss">
</style>

