<template>
  <v-container>
    <apexchart
        :width="'50%'"
        align="center"
        v-bind:id="'chart' + i"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </v-container>
</template>

<script src="SkillChart.ts" lang="ts"/>

<style scoped>

</style>