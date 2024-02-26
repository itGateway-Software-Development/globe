<template>
  <div class="by-brand">
    <div class="brand-banner">
      <img src="../assets/Banner/brandbanner.png" alt="" class="w-100" />
    </div>
    <div class="brand-list">
      <div class="brand-list-text text-center fs-5 mt-5 mb-5">
        <h2>Shop by Brands</h2>
      </div>
      <div class="row brand-logo-list">
        <div
          class="col-2 mb-3"
          v-for="image in logo"
          :key="image.id"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <div class="logo-card">
            <img :src="image.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  setup() {
    let logo = [
      {
        id: 1,
        img: require("@/assets/Logo/dell.png"),
      },
      {
        id: 2,
        img: require("@/assets/Logo/acer.png"),
      },
      {
        id: 3,
        img: require("@/assets/Logo/lenovo.png"),
      },
      {
        id: 4,
        img: require("@/assets/Logo/asus.png"),
      },
      {
        id: 5,
        img: require("@/assets/Logo/avita.png"),
      },
      {
        id: 6,
        img: require("@/assets/Logo/alldocube.png"),
      },
      {
        id: 7,
        img: require("@/assets/Logo/venturer.png"),
      },
      {
        id: 8,
        img: require("@/assets/Logo/Microsoft.png"),
      },
      {
        id: 9,
        img: require("@/assets/Logo/hp.png"),
      },
      {
        id: 10,
        img: require("@/assets/Logo/gimi.png"),
      },
      {
        id: 11,
        img: require("@/assets/Logo/Logitech.png"),
      },
      {
        id: 12,
        img: require("@/assets/Logo/aoc.png"),
      },
      {
        id: 13,
        img: require("@/assets/Logo/brother.png"),
      },
      {
        id: 14,
        img: require("@/assets/Logo/gk.png"),
      },
      {
        id: 15,
        img: require("@/assets/Logo/ssk.png"),
      },
      {
        id: 16,
        img: require("@/assets/Logo/segate.png"),
      },
      {
        id: 17,
        img: require("@/assets/Logo/sandisk.png"),
      },
      {
        id: 18,
        img: require("@/assets/Logo/philips.png"),
      },
      {
        id: 19,
        img: require("@/assets/Logo/mofii.png"),
      },
      {
        id: 20,
        img: require("@/assets/Logo/jbl.png"),
      },
      {
        id: 21,
        img: require("@/assets/Logo/sony.png"),
      },
      {
        id: 22,
        img: require("@/assets/Logo/samsung.png"),
      },
      {
        id: 23,
        img: require("@/assets/Logo/jabra.png"),
      },
      {
        id: 24,
        img: require("@/assets/Logo/canon.png"),
      },
      {
        id: 25,
        img: require("@/assets/Logo/mashall.png"),
      },
      {
        id: 26,
        img: require("@/assets/Logo/epson.png"),
      },
      {
        id: 27,
        img: require("@/assets/Logo/goip.png"),
      },
      {
        id: 28,
        img: require("@/assets/Logo/prolink.png"),
      },
      {
        id: 29,
        img: require("@/assets/Logo/apc.png"),
      },
      {
        id: 30,
        img: require("@/assets/Logo/tp-link.png"),
      },
      {
        id: 21,
        img: require("@/assets/Logo/d-link.png"),
      },
      {
        id: 32,
        img: require("@/assets/Logo/cisco.png"),
      },
      {
        id: 33,
        img: require("@/assets/Logo/synology.png"),
      },
      {
        id: 34,
        img: require("@/assets/Logo/toten.png"),
      },
      {
        id: 35,
        img: require("@/assets/Logo/viewsonic.png"),
      },
      {
        id: 36,
        img: require("@/assets/Logo/xp-pen.jpg"),
      },
    ];
    return { logo };
  },
};
</script>

<style scoped>
.brand-list {
  margin: 0 auto;
  justify-content: center;
  padding: 0 100px;
}

.logo-card img {
  width: 250px;
  border-radius: 20px;
  border: 1px solid #111;
}

.brand-list-text h2 {
  font-weight: 700;
}

@media (max-width: 1400px) {
  .logo-card img {
    width: 200px;
    border-radius: 20px;
    border: 1px solid #111;
  }
  .brand-list {
    margin: 0 auto;
    justify-content: center;
    padding: 0 80px;
  }
}

@media (max-width: 1200px) {
  .logo-card img {
    width: 150px;
    border-radius: 20px;
    border: 1px solid #111;
  }
  .brand-list {
    margin: 0 auto;
    justify-content: center;
    padding: 0 80px;
  }

  @media (max-width: 860px) {
    .logo-card img {
      width: 100px;
      border-radius: 20px;
      border: 1px solid #111;
    }
    .brand-list {
      margin: 0 auto;
      justify-content: center;
      padding: 0 70px;
    }
  }

  @media (max-width: 500px) {
    .logo-card img {
      width: 60px;
      border-radius: 10px;
      border: 1px solid #111;
    }
    .brand-list {
      margin: 0 auto;
      justify-content: center;
      padding: 0 50px;
    }
  }
}
</style>
