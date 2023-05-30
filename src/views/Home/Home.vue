<template>
  <v-container v-if="homeData">
    <v-card id="general" class="flex-row d-flex">
      <v-img class="imageTumbnail" v-ripple contain src="{{}}" max-width="500px"></v-img>
      <v-container>
        <h1 class="mb-4">{{ homeData.general.title }}</h1>
        <v-timeline dense>
          <v-timeline-item icon="mdi-card-account-details-outline">
            <v-card-title>{{ homeData.general.person.name }}</v-card-title>
          </v-timeline-item>
          <v-divider inset></v-divider>
          <v-timeline-item icon="mdi-clock-outline">
            <v-card-title>{{ homeData.general.person.profession }}</v-card-title>
          </v-timeline-item>
          <v-divider inset></v-divider>
          <v-timeline-item icon="mdi-cake-variant-outline">
            <v-card-title>{{ new DateTimeFormat('local',{day: "numeric", month:"long", year:"numeric"}).format(homeData.general.person.birthday) }}</v-card-title>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-card>
    <v-card class="mt-5" id="ambitions">
      <v-card-title>
        <h1>{{homeData.myAmbition.title}}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle>
        <h2>{{homeData.myAmbition.sentenceStart}}...</h2>
      </v-card-subtitle>
      <v-card-text class="ml-10">
        <v-card-title v-for="(ambition, i) in homeData.myAmbition.ambition" :key="i">...{{ambition.text}}</v-card-title>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        <h1>{{ homeData.myInterests.title}}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-expansion-panels>
        <v-expansion-panel v-for="(interest, i) in homeData.myInterests.interests" :key="i">
          <v-expansion-panel-header><h2>{{interest.title}}</h2></v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-html="interest.description">
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
  <v-container v-else
                class="d-flex align-center justify-center"
                fill-height
  >
    <v-progress-linear color="primary" indeterminate :height="6"></v-progress-linear>
  </v-container>
</template>

<script lang="ts" src="./Home.ts"/>
<style>
.imageTumbnail {
  margin: auto;
}

@media only screen and (max-width: 1270px) {
  .imageTumbnail {
    display: none;
  }
}

</style>
