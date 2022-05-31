<template>
  <v-container>
    <v-expansion-panels  v-model="panel" popout>
      <v-expansion-panel
          v-for="(chart, i) in chartData"
          :key="i"
      >
        <v-expansion-panel-header>
          {{ chart.label }}
          <div class="d-flex d-table-row ml-3 mr-3" v-if="i !== panel">
              <v-tooltip :key="t" v-for="(skill, t) in chart.data.datasets[0].data" bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs"
                  v-on="on"  :style="getStyle(skill, chart.data.datasets[0].data, t)" class="d-flex justify-center">
                    <v-icon class="transparent--text">mdi-star</v-icon>
                  </div>
                </template>
                <span>{{ chart.data.labels[t] }}: {{skill}}</span>
              </v-tooltip>

          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content :eager="true">
          <canvas width="669" height="669" ref="chart"></canvas>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" src="@/views/Skills/Skills.ts">
</script>
<style>
.v-expansion-panel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
}


</style>

