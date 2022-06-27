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

                <v-card-title>
                    <v-scroll-x-transition leave-absolute hide-on-leave>
                      <span v-if="hover">Elio.Teuber@swisscom.com</span>
                      <h4 v-else>E-Mail</h4>
                    </v-scroll-x-transition>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="mdi-phone">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="call('+41797495583')">
                <v-card-title>
                  <v-scroll-x-transition leave-absolute hide-on-leave>
                    <span v-if="hover">+41 79 749 55 83</span>
                    <h4 v-else>Telefon</h4>
                  </v-scroll-x-transition>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="mdi-linkedin">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }"
                      @click="link('https://www.linkedin.com/in/elio-teuber-28690b1ab/')">
                <v-card-title>
                  Linkedin
                </v-card-title>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="mdi-github">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="link('https://github.com/EloiMusk')">
                <v-card-title>
                  <v-scroll-x-transition leave-absolute hide-on-leave>
                    <span v-if="hover">EloiMusk</span>
                    <h4 v-else>Github</h4>
                  </v-scroll-x-transition>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-timeline-item>
          <v-timeline-item icon="$vuetify.icons.thm">
            <v-hover v-slot="{hover}" open-delay="110">
              <v-card :elevation="hover ? 4 : 2"
                      :class="{ 'on-hover': hover }" @click="link('https://tryhackme.com/p/MagicToast')">
                <v-card-title>
                  <v-scroll-x-transition leave-absolute hide-on-leave>
                    <span v-if="hover">MagicToast</span>
                    <h4 v-else>TryHackMe</h4>
                  </v-scroll-x-transition>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./Kontakt.ts">
</script>

<style scoped>
.v-card:is(.on-hover) {
  transition: .2s ease-in;
}
</style>