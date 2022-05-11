<template>
<div class="skills">
<h1>Skills</h1>
  <div :key="category.name" v-for="category in categories">
    <p>{{category.name}}</p>
    <p :key="skill.name" v-for="skill in category.skills"> {{ skill.name }} | {{skill.value}}</p>
  </div>
</div>
</template>

<script lang="ts" src="@/views/Skills/Skills.ts"/>

