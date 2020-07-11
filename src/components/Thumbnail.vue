<template>
  <v-hover v-slot:default="{ hover }">
    <v-card flat class="d-flex" @click="openCarousel(index)">
      <v-img
        :src="imgUrl"
        :aspect-ratio="16/9"
      >
        <v-fade-transition v-if="$vuetify.breakpoint.mdAndUp && hover">
          <v-overlay
            absolute
            color="#10AB98"
            z-index="0"
          >
            <v-icon size="60">mdi-magnify-plus-outline</v-icon>
          </v-overlay>
        </v-fade-transition>

        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate
                                 color="grey"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: 'Thumbnail',
  props: {
    index: Number,
    imgUrl: String,
    carousel: Object,
  },
  methods: {
    openCarousel(index) {
      if (this.$vuetify.breakpoint.xs) return;

      this.carousel.show(index);
    },
  },
};
</script>
