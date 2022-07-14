<template>
  <v-container>
    <v-expansion-panels v-model="panel" popout>
      <v-expansion-panel
          v-for="(chart, i) in chartData"
          :key="i"
      >
        <v-expansion-panel-header>
          {{ chart.label }}
          <div id="skillBar" class="d-flex d-table-row ml-3 mr-3" v-if="i !== panel">
            <v-hover :key="t" v-for="(skill, t) in chart.data.datasets[0].data" v-slot="{hover}">
              <div :style="getStyle(skill, chart.data.datasets[0].data, t)" class="d-flex justify-center">
                <v-scale-transition hide-on-leave>
                  <span v-if="hover">{{ chart.data.labels[t] }}: {{ skill }}</span>
                  <v-icon v-else class="transparent--text">mdi-circle-outline</v-icon>
                </v-scale-transition>
              </div>
            </v-hover>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content :eager="true">
          <canvas class="chart-canvas" ref="chart"></canvas>
          <v-tooltip color="transparent" top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  fab
                  dark
                  small
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Skill Punkte Skala</v-card-title>
              <v-card-text>
                <div class="row">
                <span class="col-12">
                Die punkte sind eine slebstseinschätzung auf einer skala von 0 - 100.
                </span>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="row skillGradient rounded-pill">
                      <label class="col-4 d-flex justify-start">0</label>
                      <label class="col-4 d-flex justify-center">50</label>
                      <label class="col-4 d-flex justify-end">100</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="col-4 d-flex justify-start">Anfänger</label>
                  <label class="col-4 d-flex justify-center">Fortgeschritten</label>
                  <label class="col-4 d-flex justify-end">Experte</label>
                </div>
              </v-card-text>
            </v-card>
          </v-tooltip>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" src="./Skills.ts"/>

<style>
.v-expansion-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}

.skillGradient {
  background: linear-gradient(to left, #00bcd4, #ff9800, #ff5722);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .chart-canvas {
    width: 300px;
    height: 300px;
  }

  #skillBar {
    display: none !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .chart-canvas {
    width: 500px;
    height: 500px;
  }

  #skillBar {
    display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .chart-canvas {
    width: 600px;
    height: 600px;
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .chart-canvas {
    width: 600px;
    height: 600px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .chart-canvas {
    width: 600px;
    height: 600px;
  }
}


</style>

