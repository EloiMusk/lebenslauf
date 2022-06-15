<template>
  <v-container id="projects">
    <template>
      <v-timeline>
        <v-timeline-item :icon="'mdi-'+project.icon" v-for="(project, i) in projects" :key="i">
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
                  height="300"
                  :src="require(`@/assets/${project.image}`)"
              ></v-parallax>
            </template>
            <v-card-title>{{ project.name }}</v-card-title>
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
                {{ project.pa }}
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
                {{ project.duration }}
              </div>
              <div id="description">
               {{ project.description }}
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>Kompetenzen</v-card-title>
            <v-card-text>
              <v-chip v-for="(skill, i) in project.technologies" :key="i" class="mr-1 mt-1">{{ skill }}</v-chip>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </template>
  </v-container>
</template>

<script lang="ts" src="./Projects.ts"/>
<style>
#description {
  line-height: 1.5;
  white-space: pre-wrap;
}
</style>

