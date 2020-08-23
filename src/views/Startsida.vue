<template>
  <div class="container">
    <h2 class="pt-5">Välkomna till Eagle Instruments sida!</h2>

    <div class="picturewrap">
      <img class="picture" :src="require('../img/collage.jpg')" />
    </div>
  </div>
</template>

<script>
export default {};
</script>



<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

.container {
  h2 {
    text-align: center;
    font-family: "Indie Flower", cursive;
    font-weight: bold;
    font-size: 40px;
    padding-bottom: 10px;
  }

  p {
    text-align: left;
    padding-bottom: 30px;
  }

  .picturewrap {
    text-align: center;
    margin: 20px auto;
   

    .picture {
      height: 100%;
    }
  }
}
</style>