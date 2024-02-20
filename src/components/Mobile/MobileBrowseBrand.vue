<template>
  <div class="mobile-brands mt-3">
    <div class="mobile-brand-text">
      <h3 class="fs-5 text-center mb-3 fw-bold">Browse by Brands</h3>
    </div>
    <div class="row mobile-row">
      <div class="col-4 mobile-logo" v-for="img in filterLogo" :key="img.id">
        <div class="mobile-brand-photo">
          <img :src="img.img" class="img-fluid" />
        </div>
      </div>
    </div>
    <button
      v-if="!isViewAll"
      class="btn main-btn brand-btn"
      @click="viewMoreLogo"
    >
      View More
    </button>
    <button v-else class="btn main-btn brand-btn">View All</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let logo = [
      {
        id: "1",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "2",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "3",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "4",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "5",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "6",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "7",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "8",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "9",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "10",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "11",
        img: require("@/assets/Logo/dell.jpg"),
      },
      {
        id: "12",
        img: require("@/assets/Logo/dell.jpg"),
      },
    ];
    let filterLogo = ref("");
    filterLogo.value = logo.slice(0, 6);
    let isViewAll = ref(false);
    let viewMoreLogo = () => {
      filterLogo.value = logo.slice(0, 12);
      isViewAll.value = true;
    };

    return { filterLogo, isViewAll, viewMoreLogo };
  },
};
</script>

<style>
.mobile-brands {
  display: none;
}

@media (max-width: 500px) {
  .mobile-brands {
    display: block;
  }

  .mobile-row {
    justify-content: center;
    padding: 20px;
    margin: 0 auto;
  }

  .mobile-logo {
    width: 120px;
    padding: 20px;
    border: 1px solid;
    margin: 2px;
  }

  .brand-btn {
    padding: 6px 20px;
  }

  .mobile-row .mobile-logo img {
    width: 90px;
  }
}
</style>
