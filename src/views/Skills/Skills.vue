<template>
  <v-container>
    <v-expansion-panels  v-model="panel" popout>
      <v-expansion-panel
          v-for="(chart, i) in chartData"
          :key="i"
      >
        <v-expansion-panel-header>{{ chart.series[0].name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <apexchart
              v-bind:id="'chart' + i"
              :options="chart.chartOptions"
              :series="chart.series"
             ></apexchart>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" src="@/views/Skills/Skills.ts"/>

