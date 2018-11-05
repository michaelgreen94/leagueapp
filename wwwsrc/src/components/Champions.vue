<template>
  <div class="champions">
    <div v-for="champion in champions.data" :key="champion.id" class="champ">
      <img class="champimg" :src="`http://ddragon.leagueoflegends.com/cdn/8.21.1/img/champion/${champion.image.full}`" alt="">
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
  cursor: pointer;
  height: 6rem;
  width: 6rem;
  break-inside: avoid;
}

.champimg {
  height: 100%;
  width: 100%;
  object-position: 50% 50%;
  object-fit: cover;
}

.champions {
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  height: 90vh;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}
</style>


