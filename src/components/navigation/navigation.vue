<template>
  <div id="navigation">
    <vs-navbar target-scroll="#hide-scroll-content" hide-scroll center-collapsed v-model="active">
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
    </vs-navbar>
    <div id="hide-scroll-content">
      <vs-content>
        <router-view></router-view>
      </vs-content>
  </div>
  </div>
</template>

<script src="navigation.js">
</script>

<style scoped>

</style>