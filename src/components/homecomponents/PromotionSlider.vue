<template>
  <div class="promotion-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>Promotion</h2>
    </div>
    <v-carousel hide-delimiters data-aos="fade-down" class="desktop">
      <v-carousel-item>
        <div class="row">
          <div
            class="col-4 col-md-4 col-xl-4"
            v-for="item in slider1"
            :key="item.id"
          >
            <img :src="item.img" alt="" class="img-fluid promotion-img" />
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item>
        <div class="row">
          <div
            class="col-4 col-md-4 col-xl-4"
            v-for="item in slider1"
            :key="item.id"
          >
            <img :src="item.img" alt="" class="img-fluid promotion-img" />
          </div></div
      ></v-carousel-item>
    </v-carousel>

    <v-carousel
      hide-delimiters
      :show-arrows="false"
      data-aos="fade-down"
      class="mobile"
    >
      <v-carousel-item>
        <div class="row">
          <div
            class="col-4 col-md-4 col-xl-4"
            v-for="item in slider1"
            :key="item.id"
          >
            <img :src="item.img" alt="" class="img-fluid promotion-img" />
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item>
        <div class="row">
          <div
            class="col-4 col-md-4 col-xl-4"
            v-for="item in slider1"
            :key="item.id"
          >
            <img :src="item.img" alt="" class="img-fluid promotion-img" />
          </div></div
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const slider1 = ref([
      {
        id: 1,
        img: require("@/assets/images/promotion-1.jpg"),
      },
      {
        id: 2,
        img: require("@/assets/images/promotion-1.jpg"),
      },
      {
        id: 3,
        img: require("@/assets/images/promotion-1.jpg"),
      },
    ]);

    return { slider1 };
  },
};
</script>

<style scoped>
.promotion-wrapper {
  margin-top: 90px;
}

.content-heading {
  margin-bottom: 30px;
}

.v-window {
  height: max-content !important;
}

.promotion-img {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.slider-btn {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50px;
}

.v-btn .material-symbols-outlined {
  font-size: 20px;
}

.mobile {
  display: none;
}

@media (max-width: 600px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
