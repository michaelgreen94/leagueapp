<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <results/>
    <div class="champions-container">
    <champions/>
    </div>
    <welcome/>
    <button class="roll" @click="randomRoll()">Roll</button>
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
  height: 95vh;
  flex-wrap: wrap;
}

.results {
  color: red;
  height: 50%;
  width: 60%;
}

.champions-container {
  width: 40%;
  margin: 0 auto;
  font-size: 0;
  text-align: center;
}
</style>
