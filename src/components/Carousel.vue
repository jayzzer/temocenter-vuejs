<template>
  <div
    id="carousel-wrapper"
    v-if="isActive"
    class="d-flex align-center"
    @click.self="isActive = false"
  >
    <v-btn
      id="close-carousel"
      @click="isActive = false"
      icon
      large
      color="white"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-carousel
      id="img-carousel"
      height="auto"
      hide-delimiter-background
      :hide-delimiters="$vuetify.breakpoint.mobile"
      show-arrows-on-hover
      show-arrows
      v-model="current"
      :touch="{
              left: () => current++,
              right: () => {
                current = !current ? images.length-1 : current-1;
              }
            }"
    >
      <v-carousel-item
        v-for="(img, i) in images"
        :key="i"
      >
        <v-img
          :src="img"
          class="grey lighten-2"
          :aspect-ratio="16/9"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    images: Array,
  },
  data: () => ({
    isActive: false,
    current: 0,
  }),
  methods: {
    show(index) {
      if (this.isActive) return;

      this.current = index;
      this.isActive = true;
    },
  },
};
</script>

<style scoped>
  #carousel-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.61);
  }

  #img-carousel {
    width: 80%;
    margin: 0 auto;
  }

  #close-carousel {
    position: absolute;
    z-index: 2;
    right: 25px;
    top: 10px;
  }
</style>
