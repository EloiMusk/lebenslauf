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

      <v-tabs class="menu_tabs"  centered>
        <v-tab class="menu_tabs" @mouseleave="home = false" @mouseenter="home = true" to="/">
          <v-scroll-x-transition leave-absolute hide-on-leave>
            <span v-if="home">Home</span>
            <v-icon v-else>mdi-home</v-icon>
          </v-scroll-x-transition>
        </v-tab>
        <v-tab class="menu_tabs" @mouseleave="skills = false" @mouseenter="skills = true" to="/skills">
          <v-scroll-x-transition leave-absolute hide-on-leave>
            <span v-if="skills">Skills</span>
            <v-icon v-else>mdi-code-braces</v-icon>
          </v-scroll-x-transition>
        </v-tab>
        <v-tab class="menu_tabs" @mouseleave="auszeichnungen = false" @mouseenter="auszeichnungen = true" to="/auszeichnungen">
          <v-scroll-x-transition hide-on-leave>
            <span v-if="auszeichnungen">Auszeichnungen</span>
            <v-icon v-else>mdi-certificate</v-icon>
          </v-scroll-x-transition>
        </v-tab>
        <v-tab @mouseleave="projekte=false" @mouseenter="projekte=true" class="menu_tabs" to="/projekte">
          <v-scroll-x-transition leave-absolute hide-on-leave>
            <span v-if="projekte">Projekte</span>
            <v-icon v-else>mdi-briefcase-outline</v-icon>
          </v-scroll-x-transition>
        </v-tab>
        <v-tab @mouseenter="referenzen=true" @mouseleave="referenzen=false" class="menu_tabs" to="/referenzen">
          <v-scroll-x-transition leave-absolute hide-on-leave>
            <span v-if="referenzen">Referenzen</span>
            <v-icon v-else>mdi-account-star</v-icon>
          </v-scroll-x-transition>
        </v-tab>
        <v-tab @mouseenter="kontakt=true" @mouseleave="kontakt=false" class="menu_tabs" to="/kontakt">
          <v-scroll-x-transition leave-absolute hide-on-leave>
            <span v-if="kontakt">Kontakt</span>
            <v-icon v-else>mdi-email</v-icon>
          </v-scroll-x-transition>
        </v-tab>
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
  components: {},
  data() {
    return {
      home: false,
      skills: false,
      auszeichnungen: false,
      projekte: false,
      referenzen: false,
      kontakt: false
    };
  },
  mounted() {
    if ((window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('mode')) || localStorage.getItem('mode') === 'dark') {
      this.$vuetify.theme.dark = true;
      localStorage.setItem('mode', 'dark');
    } else if (localStorage.getItem('mode') == 'light') {
      this.$vuetify.theme.dark = false;
    }
  },
  updated() {
    if (this.$vuetify.theme.dark) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  }
});
</script>
