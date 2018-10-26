<template>
  <div class="welcome">
  <v-layout row justify-center>
    <v-dialog v-model="openmodal" persistent max-width="45rem">
      <v-card>
        <v-card-title class="headline">Ultimate BRAVERY RULES!</v-card-title>
        <div class="rules-list">
        <ol>
          <li>
            <h3>You shall trust into Ultimate-Bravery!</h3>
            <p>There is now way back after pressing the Start-Button. You have to play the displayed champion and his special build. It doesn't matter if you like it or not!</p>
          </li>
          <li>
            <h3>You have to use your summoner-spells!</h3>
            <p>We have selected the best summoner-spells for the displayed champion in order to make him OP. Use the summoner-spells whenever you can, only NOOBs are playing with a flash/heal combo!</p>
          </li>
          <li>
            <h3>You have to maximize your main spell!</h3>
            <p>You have to level up the displayed main spell whenever you can. Yes, sometimes you have to delay your ultimate because the main spell is more important!</p>
          </li>
          <li>
            <h3>You have to buy the items in the correct order!</h3>
            <p>You have to reach the battlefield as fast as possible, therefore you buy boots as first item everytime. NEVER buy the so calles Doransitems, they are only for weaklings.</p>
          </li>
          <li>
            <h3>You shall not buy or use wards.</h3>
            <p>Do not buy Wards because they don't give you any combatstats. It's better to save your money for the good items. Trinkets which gives vision are disallowed as well. Buying potions is allowed.</p>
          </li>
          <li>
            <h3>Show your braveness</h3>
            <p>Whenever you play Ultimate-Bravery you have to share your special build to your allies. That's the only way that they can verify your braveness!</p>
          </li>
        </ol>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="modal-button" color="#404138" @click="geteverything()">Tilt Me!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      openmodal: true
    };
  },
  methods: {
    geteverything() {
      this.openmodal = false;
      this.$store.dispatch("getChamps");
    }
  }
};
</script>

<style>
.rules-list {
  text-align: left;
  padding: 1.5rem;
}

.headline {
  background-color: #404138;
  color: #edb852;
}

.modal-button {
  color: #edb852 !important;
}
</style>

