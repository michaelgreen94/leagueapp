<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <champions/>
    <welcome/>
  </div>
</template>

<script>
import Champions from "../components/Champions.vue";
import Welcome from "../components/Welcome.vue";
export default {
  name: "home",
  components: {
    Champions,
    Welcome
  }
};
</script>
