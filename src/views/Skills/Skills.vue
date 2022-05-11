<template>
  <div class="skills">
    <h1>Skills</h1>
        <apexchart type="radar" :options="charData.chartOptions" :series="charData.series"/>
  </div>
</template>

<script lang="ts" src="@/views/Skills/Skills.ts"/>

