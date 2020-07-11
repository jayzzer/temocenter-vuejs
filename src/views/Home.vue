<template>
  <v-container fluid>
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col
            v-for="n in 9"
            :key="n"
            class="d-flex child-flex"
            cols="4"
          >
            <v-card flat class="d-flex">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5}`"
                :lazy-src="`https://picsum.photos/500/300?image=${n * 5}`"
                :aspect-ratio="16/9"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>
