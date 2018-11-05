<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <results/>
    <champions/>
    <welcome/>
    <button @click="randomRoll()">Roll</button>
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
  },
  methods: {
    randomRoll() {
      this.$store.dispatch("randomRoll");
    }
  }
};
</script>

<style>
* {
  border: 1px solid black;
}

.home {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.results {
  color: red;
  height: 50%;
  width: 50%;
}

.champions {
  color: blue;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: 50%;
  width: 50%;
}
</style>
