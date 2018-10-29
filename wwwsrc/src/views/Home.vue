<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <results/>
    <champions/>
    <welcome/>
  </div>
</template>

<script>
import Champions from "../components/Champions.vue";
import Welcome from "../components/Welcome.vue";
import Results from "../components/Results.vue";
export default {
  name: "home",
  components: {
    Champions,
    Welcome,
    Results
  }
};
</script>

<style>
* {
  border: 1 px solid black;
}

.results {
  color: red;
}

.champions {
  color: blue;
}
</style>
