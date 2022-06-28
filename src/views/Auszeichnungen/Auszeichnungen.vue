<template>
  <v-container>
    <v-card v-for="(platform, index) in platforms" :key="index">
      <v-card-title>
        {{ platform.name }}
      </v-card-title>
      <v-card-text>
        {{ platform.description }} <br> <a :href="platform.url">=> {{ platform.name }}</a>
        <v-tabs v-model="tabs">
          <v-tab v-if="platform.auszeichnungen.length > 0">
            <v-icon left>mdi-certificate</v-icon>
            <span>Auszeichnungen</span>
          </v-tab>
          <v-tab v-if="platform.badges.length > 0">
            <v-icon left>mdi-seal</v-icon>
            <span>Badges</span>
          </v-tab>
        </v-tabs>
      </v-card-text>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card-text>
            <v-container class="d-flex flex-wrap row justify-start">
              <v-hover class="ma-3" v-for="(auszeichnung, index) in platform.auszeichnungen" :key="index">
                <template v-slot:default="{ hover }">
                  <v-card
                      max-width="344"
                  >
                    <v-img :src="auszeichnung.image"></v-img>

                    <v-card-text>
                      <h2 class="text-h6 primary--text">
                        {{ auszeichnung.name }}
                      </h2>
                      <v-icon>mdi-calendar-outline</v-icon>
                      {{ auszeichnung.date }}
                    </v-card-text>

                    <v-fade-transition>
                      <v-overlay
                          v-if="hover"
                          absolute
                      >
                        <v-btn @click="openInNewWindow(auszeichnung.image)">Auszeichnung ansehen</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-container>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <v-container class="d-flex flex-wrap row justify-start">
              <v-hover class="ma-3" v-for="(badge, index) in platform.badges" :key="index">
                <template v-slot:default="{ hover }">
                  <v-card
                      width="200"
                      min-height="200"
                  >
                    <v-card-text>
                      <v-img transition="scale-transition" :src="badge.image"></v-img>
                      <h2 class="primary--text">
                        {{ badge.name }}
                      </h2>
                    </v-card-text>
                    <v-fade-transition>
                      <v-overlay
                          v-if="hover"
                          absolute
                      >
                        <v-btn @click="openInNewWindow(badge.url)">Badge ansehen</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-container>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./Auszeichnungen.ts"/>

<style scoped>
</style>