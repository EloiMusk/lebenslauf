<template>
  <v-container id="projects">
    <template>
      <v-timeline>
        <v-timeline-item icon="mdi-penguin" v-for="n in 6" :key="n">
          <v-card :loading="loading">
            <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>
            <template>
              <v-parallax
                  dark
                  height="250"
                  src="@/assets/rhel.jpg"
              ></v-parallax>
            </template>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <div>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs"
                            v-on="on">mdi-account
                    </v-icon>
                  </template>
                  <span>Projektanbieter/in</span>
                </v-tooltip>
                Max Muster
              </div>
              <div>
                <v-tooltip left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs"
                            v-on="on">mdi-calendar-clock-outline
                    </v-icon>
                  </template>
                  <span>Dauer</span>
                </v-tooltip>
                20.09.2019 - 30.09.2019
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>Kompetenzen</v-card-title>
            <v-card-text>
              <v-chip v-for="n in 4" :key="n" class="mr-1">{{ n }}</v-chip>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-container>
</template>

<script lang="ts" src="@/views/Projects/Projects.ts"/>
<style></style>

