<template>
  <div class="champions">
    <div v-for="champion in champions.data" :key="champion.id" class="champ">
      {{champion.image.full}}
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

