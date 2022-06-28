<template>
  <v-container>
    <v-card id="general" class="flex-row d-flex">
      <v-img class="imageTumbnail" v-ripple contain src="@/assets/me.jpg" max-width="500px"></v-img>
      <v-container>
        <h1>Allgemeine Informationen</h1>
        <v-timeline dense>
          <v-timeline-item icon="mdi-card-account-details-outline">
            <v-card-title>Elio Teuber</v-card-title>
          </v-timeline-item>
          <v-divider inset></v-divider>
          <v-timeline-item icon="mdi-clock-outline">
            <v-card-title>Betriebsinformatiker {{ currentYear }}.Lehrjahr</v-card-title>
          </v-timeline-item>
          <v-divider inset></v-divider>
          <v-timeline-item icon="mdi-cake-variant-outline">
            <v-card-title>20.April.2003</v-card-title>
          </v-timeline-item>
          <v-divider inset></v-divider>
          <v-timeline-item icon="mdi-school-outline">
            <v-card-title>
              <v-chip-group>
                <v-chip>Montag</v-chip>
                <v-chip>Dienstag</v-chip>
                <v-chip>Mittwoch</v-chip>
                <v-chip color="primary">Donnerstag</v-chip>
                <v-chip color="primary">Freitag</v-chip>
              </v-chip-group>
            </v-card-title>
          </v-timeline-item>
        </v-timeline>
      </v-container>
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
        <v-card-title>...wenn immer möglich Neues zu lernen.</v-card-title>
        <v-card-title>...mein Bestes zu geben.</v-card-title>
        <v-card-title>...anderen zu helfen.</v-card-title>
        <v-card-title>...nicht aufzugeben.</v-card-title>
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
              ein gewisses Führungspotenzial gewonnen. Ich plane jede Woche gemeinsam mit meinem Leitungsteam
              Aktivitäten, welche wir anschliessend jeweils am Samstag durchführen. Generell liefert mir die Pfadi eine
              gute Abwechslung zum Arbeitsalltag.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><h2>Coden / Lernen</h2></v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Wenn ich nicht gerade mit Pfadi, Arbeiten oder der Schule beschäftigt bin, engagiere ich mich sehr Neues
              im
              Bereich des Programmierens zu lernen oder kleine Programmierprojekte umzusetzen. Generell nutze ich meine
              freizeit sehr gerne, um neues zu Lernen oder Gelerntes umzusetzen.
              Einige Projekte, welche ich in meiner Freizeit realisiert habe sind:
            </p>
            <ul>
              <li>Sprachsteuerung für diverse elektronische Geräte</li>
              <li>Heimnetzwerk auf neueste Standards upgraden (mehr als 1Gbit Bandbreite für jedes verbundene Gerät)
              </li>
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
