<template>
  <v-container>
    <v-card id="general" class="flex-row d-flex">
      <v-img class="imageTumbnail" v-ripple contain src="@/assets/me.jpg" max-width="500"></v-img>
      <v-list class="ml-3" width="100%">
        <h1>Algemeine Informationen</h1>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-subheader>Elio Teuber</v-subheader>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Tätigkeit</v-list-item-title>
            <v-subheader>Betriebsinformatiker {{ currentYear() }}.Lehrjahr</v-subheader>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Geburtstag</v-list-item-title>
            <v-subheader>20.April.2003</v-subheader>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Schultage</v-list-item-title>
            <v-subheader>Donnerstag, Freitag</v-subheader>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mt-5" id="ambitions">
      <v-card-title>
        <h1>Meine Ambitionen</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle>
        <h2>Ich strebe danach...</h2>
      </v-card-subtitle>
      <v-card-text class="ml-10">
        <v-subheader>...wenn immer möglich Neues zu lernen.</v-subheader>
        <v-subheader>...mein Bestes zu geben.</v-subheader>
        <v-subheader>...anderen zu helfen.</v-subheader>
        <v-subheader>...nicht aufzugeben.</v-subheader>
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        <h1>Mehr über mich</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header><h2>Pfadi</h2></v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>In meiner Freizeit bin ich sehr aktiv in der Pfadi als Leiter der 4-12 jährigen Kinder. Dadurch habe ich
              ein gewisses führungspotenzial gewonnen. Ich plane jede Woche gemeinsam mit meinem Leitungsteam
              Aktvitäten, welche wir anschliessend jeweils am Samstag durchführen. Generell liefert mir die Pfadi eine
              gute Abwechslung zum Arbeitsaltag.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><h2>Coden / Lernen</h2></v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Wenn ich nicht gerade mit Pfadi, Arbeiten oder der Schule beschäfitigt bin, engagiere ich mich sehr Neues im
              Bereich des Programmierens zu lernen oder kleine Programmierprojekte umzusetzen. Generell nutze ich meine
              freizeit sehr gerne, um neues zu Lernen oder Gelerntes umzusetzen.
              Einige Projekte, welche ich in meiner Freizet realisiert habe sind:
            </p>
            <ul>
              <li>Sprachsteuerung für diverse elektronische Geräte</li>
              <li>Heimnetzwerk auf neueste Standarts upgraden (mehr als 1Gbit Bandbreite für jedes verbundene Gerät)</li>
              <li> Diverse Bots zur Automatisierung von Prozessen</li>
              <li> LED Strip Controller</li>
              <li> Temperatur gesteuerter Ventilator</li>
              
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>

</template>

<script lang="ts" src="@/views/Home/Home.ts"/>
<style>
.imageTumbnail {
  margin: auto;
}
</style>
