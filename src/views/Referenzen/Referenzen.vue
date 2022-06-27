<template>
  <v-container v-if="false">
    <v-card rounded class="pa-10 d-flex d-table-row">
      <v-container v-for="(referenz, i) in referenzen" :key="i">
        <v-badge :content="referenz.funktion" offset-x="60px" overlap>
          <v-card
          >
            <v-card-title>
              {{referenz.name}}, {{referenz.abteilung}}
            </v-card-title>
          </v-card>
        </v-badge>
      </v-container>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      <v-card-title>Auf Anfrage</v-card-title>
      <v-card-text>Aus Datenschutzgründen können Referenzen nur auf Anfrage preis gegeben werden.</v-card-text>
      <v-card-actions><v-btn class="primary" @click="mail('elio.teuber@swisscom.com')">Anfragen</v-btn></v-card-actions>
    </v-card>
  </v-container>
</template>


<script lang="ts" src="./Referenzen.ts">
</script>

<style scoped>
.v-card:is(.on-hover) {
  transition: .2s ease-in;
}
</style>