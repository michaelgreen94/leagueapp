<template>
  <div class="champions">
    <div v-for="champion in champions.data" :key="champion.id" class="champ">
      <!-- {{champion.image.full}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Champions",
  data() {
    return {
      //some stuff
    };
  },
  methods: {
    //methods for champions
  },
  computed: {
    champions() {
      return this.$store.state.champions;
    }
  }
};
</script>
<style>
.champ {
  position: relative;
  cursor: pointer;
  /* margin-left: auto;
  margin-right: auto; */
  background-image: url(../assets/logo.png);
  background-position: center;
  background-size: cover;
  height: 5rem;
  width: 5rem;
}

.champions {
  color: blue;
  column-count: 6;
  -moz-column-count: 6;
  -webkit-column-count: 6;
  column-gap: 0;
  -moz-column-gap: 0;
  -webkit-column-gap: 0;
  padding-bottom: 10rem;
}
</style>


