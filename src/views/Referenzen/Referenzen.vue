<template>
  <v-container>
    <v-card rounded class="pa-10 d-flex d-table-row">
      <v-container>
        <v-badge content="Lernbegleiter" offset-x="60px" overlap>
          <v-card
          >
            <v-card-title>
              Naguelswaran Nithursan, GHR-OSA-NEX
            </v-card-title>
            <v-card-text>
              <v-timeline dense>

                <v-timeline-item icon="mdi-at">
                  <v-hover v-slot="{hover}" open-delay="110">
                    <v-card :elevation="hover ? 4 : 2"
                            :class="{ 'on-hover': hover }" @click="mail('mail@mail.com')">
                      mail@test.com
                    </v-card>
                  </v-hover>
                </v-timeline-item>
                <v-timeline-item icon="mdi-phone">
                  <v-hover v-slot="{hover}" open-delay="110">
                    <v-card :elevation="hover ? 4 : 2"
                            :class="{ 'on-hover': hover }" @click="call('+419999999')">
                      +41 999 999 999
                    </v-card>
                  </v-hover>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-badge>
      </v-container>
      <v-container>
        <v-badge content="Lernbegleiter" offset-x="60px" overlap>
          <v-card
          >
            <v-card-title>
              Naguelswaran Nithursan, GHR-OSA-NEX
            </v-card-title>
            <v-card-text>
              <v-timeline dense>
                <v-timeline-item icon="mdi-at">
                  <v-card @click="mail('mail@mail.com')">
                    <v-icon>mdi-at</v-icon>
                    mail@test.com
                  </v-card>
                </v-timeline-item>
                <v-timeline-item icon="mdi-phone">
                  <v-card @click="call('+419999999')">
                    +99 999 99 99
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-badge>
      </v-container>
    </v-card>
  </v-container>
</template>


<script lang="ts" src="@/views/Referenzen/Referenzen.ts">
</script>

<style scoped>
.v-card:is(.on-hover) {
  transition: .2s ease-in;
}
</style>