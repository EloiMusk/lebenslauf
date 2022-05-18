<template>
  <v-app>
    <v-app-bar
        app
        hide-on-scroll
    >
      <v-icon
          large
      >
        $vuetify.icons.logo
      </v-icon>

      <v-tabs centered>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/skills">Skills</v-tab>
        <v-tab to="/projekte">Projekte</v-tab>
        <v-tab to="/referenzen">Referenzen</v-tab>
        <v-tab to="/kontakt">Kontakt</v-tab>
      </v-tabs>
      <v-switch
          v-model="$vuetify.theme.dark"
          inset
          prepend-icon="mdi-theme-light-dark"
          label=""
      ></v-switch>
    </v-app-bar>
    <v-main id="content">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('dark') !== 'false') {
      this.$vuetify.theme.dark = true;
      localStorage.setItem('dark', 'true');
    }
  },
  updated() {
    if (this.$vuetify.theme.dark) {
      localStorage.setItem('dark', 'true');
    }else{
      localStorage.setItem('dark', 'false');
    }
  }
});
</script>
