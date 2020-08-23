<template>
  <div id="app">
    <div class="container mt-5">
      <div class="contact col-sm-12 col-md-6">
        <strong class="text">Kontaktperson:</strong>
        <p>Örjan Jacobsson</p>

        <strong class="text">Mailadress:</strong>

        <p>
          <a href="mailto:orjan.jacobsson@gmail.com">orjan.jacobsson@gmail.com</a>
        </p>

        <strong class="text">Telefonnummer:</strong>

        <p>
          <a href="tel:0733174374">073 317 43 74</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

.contact {
  margin: 20px auto;
  text-align: center;
  border: 1px solid black;
  border-radius: 15%;
  max-width: 500px;
  padding: 40px;

  .text {
    font-size: 25px;
    padding-bottom: 10px;
  }
}

.v-application p {
  font-family: "Indie Flower", cursive;
  font-size: 30px;
  line-height: 22px;
  margin-bottom: 30px;
}

.v-application a {
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
}
</style>
