<template>
  <v-footer padless>
    <v-row>
      <v-col class="footer lighten-2 py-4 text-center" cols="12">
        Copyright © {{ new Date().getFullYear() }} —
        <strong>
          <a href="mailto:lisa.jacobsson@live.se" style="color:black;">Lisa Jacobsson</a> 
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  background-color: yellow;
  color: black;

  a {
    text-decoration: none;
    :hover, :visited, :active {
      color: black;
    }
  }
}
</style>