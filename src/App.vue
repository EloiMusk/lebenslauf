<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      light
      hide-on-scroll
    >
      <v-img
          contain
          src="@/assets/Logo512x512.png"
          max-height="50"
          max-width="50"
      >
      </v-img>
      <v-tabs centered>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/skills">Skills</v-tab>
        <v-tab to="/projekte">Projekte</v-tab>
        <v-tab to="/referenzen">Referenzen</v-tab>
        <v-tab to="/kontakt">Kontakt</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main id="content">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
