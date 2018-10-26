<template>
  <div class="champions">
    <div v-for="champion in champions" :key="champion._id" class="champ">
      {{champion.name}}
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

