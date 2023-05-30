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

      <v-tabs v-if="navData" class="menu_tabs" centered>
        <v-tab v-for="(tab, i) in navData.tabs" :key="i" class="menu_tabs" @mouseleave="toggleTab(i, false)"
               @mouseenter="toggleTab(i, true)" :to="tab.link">
          <v-scroll-x-transition leave-absolute hide-on-leave>
            <span v-if="tab.active">{{tab.displayText}}</span>
            <v-icon v-else>mdi-{{tab.iconName}}</v-icon>
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

<script src="./App.ts" lang="ts"/>
