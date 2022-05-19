<template>
  <v-container>
    <v-card>
      <v-card-title>
        Elio Teuber, GHR-OSA-NEX
      </v-card-title>
      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item icon="mdi-at">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="mail('elio.teuber@swisscom.com')">
                elio.teuber@swisscom.com
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="mdi-phone">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="call('+41 79 9999999')">
                +41 79 9999999
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="mdi-linkedin">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="open('https://www.linkedin.com/in/elio-teuber-28690b1ab/')">
                Linkedin
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="mdi-github">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="open('https://github.com/EloiMusk')">
                GitHub
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="$vuetify.icons.thm">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="open('https://tryhackme.com/p/MagicToast')">
                TryHackMe
              </v-card>
            </v-hover>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="@/views/Kontakt/Kontakt.ts">
</script>

<style scoped>
.v-card:is(.on-hover) {
  transition: .2s ease-in;
}
</style>