<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(img, i) in images"
        :key="i"
        class="d-flex child-flex"
        cols="12"
        sm="6"
        md="4"
      >
        <Thumbnail :index="i" :img-url="img" :carousel="$refs.carousel" />
      </v-col>
    </v-row>

    <div class="d-flex justify-center">
      <v-btn
        large
        color="primary"
        @click="showMore(9)"
        :loading="imgsLoading"
        :disabled="imgsLoading"
      >
        Показать больше
      </v-btn>
    </div>

    <Carousel :images="images" ref="carousel"/>
  </v-container>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Thumbnail from '../components/Thumbnail.vue';

export default {
  name: 'Home',
  components: { Thumbnail, Carousel },
  data: () => ({
    images: [],
    imgsLoading: false,
  }),
  methods: {
    showMore(count) {
      this.imgsLoading = true;

      const imgSource = 'https://picsum.photos/800/600?image=';
      const lastIndex = this.images.length;

      for (let i = lastIndex; i < lastIndex + count; i += 1) {
        this.images.push(`${imgSource}${i * 5}`);
      }

      this.imgsLoading = false;
    },
  },
  mounted() {
    const initCount = 9;

    this.showMore(initCount);
  },
};
</script>
