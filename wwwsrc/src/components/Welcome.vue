<template>
  <div class="welcome">
    <v-layout row>
    <v-dialog v-model="newvisit" class="modal" absolute max-width="45rem" transition="scale-transition">
      <h1>Coming Soon</h1>
      <button @click="geteverything()">Play!</button>
    </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      newvisit: false
    };
  }
};
</script>
