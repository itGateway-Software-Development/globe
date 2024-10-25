<template>
  <div class="popular-item-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>Popular Items</h2>
    </div>
    <swiper
      :slidesPerView="6"
      :spaceBetween="30"
      :loop="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper desktop"
      data-aos="fade-down"
    >
      <swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route">
            <img src="../assets/images/popular/1.jpg" alt=""
          /></router-link></div
      ></swiper-slide>
      <swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/2.jpg" alt="" />
          </router-link>
        </div> </swiper-slide
      ><swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/3.jpg" alt=""
          /></router-link></div
      ></swiper-slide>
      <swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/4.jpg" alt=""
          /></router-link></div></swiper-slide
      ><swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/5.jpg" alt=""
          /></router-link></div
      ></swiper-slide>
      <swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/6.jpg" alt=""
          /></router-link></div></swiper-slide
      ><swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/7.jpeg" alt=""
          /></router-link></div
      ></swiper-slide>
      <swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/8.png" alt=""
          /></router-link></div></swiper-slide
      ><swiper-slide
        ><div class="img-container">
          <router-link to="/" class="menu-route"
            ><img src="../assets/images/popular/9.jpg" alt=""
          /></router-link></div
      ></swiper-slide>
    </swiper>

    <div class="mobile" data-aos="fade-down">
      <v-carousel hide-delimiters cycle :show-arrows="false">
        <template v-slot:prev="{ props }">
          <v-btn variant="elevated" @click="props.onClick" class="prev"
            ><span class="material-symbols-outlined">
              chevron_left
            </span></v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="elevated" @click="props.onClick" class="next"
            ><span class="material-symbols-outlined">
              chevron_right
            </span></v-btn
          >
        </template>
        <v-carousel-item>
          <div
            class="d-flex align-items-center justify-content-center gap-5 item-list px-5"
          >
            <img src="../assets/images/popular/1.jpg" alt="" />
            <img src="../assets/images/popular/2.jpg" alt="" />
            <img src="../assets/images/popular/3.jpg" alt="" /></div
        ></v-carousel-item>

        <v-carousel-item>
          <div
            class="d-flex align-items-center justify-content-center gap-5 item-list px-5"
          >
            <img src="../assets/images/popular/4.jpg" alt="" />
            <img src="../assets/images/popular/5.jpg" alt="" />
            <img src="../assets/images/popular/6.jpg" alt="" /></div
        ></v-carousel-item>

        <v-carousel-item>
          <div
            class="d-flex align-items-center justify-content-center gap-5 item-list px-5"
          >
            <img src="../assets/images/popular/7.jpeg" alt="" />
            <img src="../assets/images/popular/8.png" alt="" />
            <img src="../assets/images/popular/9.jpg" alt="" /></div
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.popular-item-wrapper {
  margin-top: 90px;
}

.mobile {
  display: none;
}

.img-container {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: ease-out 0.5s;
}

.img-container img {
  width: 180px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 6px;
}

.swiper {
  height: 220px;
}

.swiper-slide {
  padding: 30px 0px;
}

.img-container:hover {
  transform: translateY(-20px);
}

@media (max-width: 1200px) {
  .img-container img {
    width: 120px;
  }
}

@media (max-width: 1080px) {
  .img-container img {
    width: 120px;
  }
}

@media (max-width: 860px) {
  .img-container img {
    width: 100px;
  }
}

@media (max-width: 770px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }

  .item-list img {
    width: 300px !important;
    border: 1px solid var(--background-color);
    border-radius: 6px;
  }

  .v-window {
    height: max-content !important;
  }

  .v-btn {
    height: 60px !important;
    border: 1px solid var(--background-color);
    color: var(--background-color);
    border-radius: 50%;
  }

  .prev {
    left: 74%;
  }
  .next {
    right: 2%;
  }
}
</style>
