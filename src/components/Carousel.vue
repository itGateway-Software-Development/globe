<template>
  <div class="carousel-wrapper">
    <v-carousel
      show-arrows="hover"
      cycle
      hide-delimiters
      class="carousel"
      height="1000"
    >
      <v-carousel-item
        v-for="item in carousel_img"
        :key="item.index"
        class="carousel-item"
      >
        <img :src="item.img" alt="" class="carousel-img img-fluid" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const carousel_img = ref([
      {
        img: require("@/assets/images/slider/slider-1.jpg"),
      },
      {
        img: require("@/assets/images/slider/slider-2.jpg"),
      },
      {
        img: require("@/assets/images/slider/slider-3.jpg"),
      },
      {
        img: require("@/assets/images/slider/slider-4.jpg"),
      },
      {
        img: require("@/assets/images/slider/slider-5.jpg"),
      },
      {
        img: require("@/assets/images/slider/slider-6.jpg"),
      },
    ]);

    return {
      carousel_img,
    };
  },
};
</script>

<style scoped>
.carousel-wrapper {
  margin-top: 130px;
}

.carousel {
  height: max-content !important;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: max-content;
  height: max-content;
  padding: 25px;
  border-radius: 50px;
  background: var(--bacl);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
}
</style>
