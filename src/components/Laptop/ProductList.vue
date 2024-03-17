<template>
  <div class="laptop-list">
    <div
      class="list-header d-flex text-start ms-3 aligin-items-center justify-content-between mt-5"
    >
      <h1 class="fw-bold">Lenovo</h1>
      <div class="list-column">
        <span class="material-symbols-outlined pe-3" @click="showRow">
          view_comfy_alt
        </span>
        <span class="material-symbols-outlined" @click="showCol"> lists </span>
      </div>
    </div>
    <hr />
    <div class="row aligin-items-center ms-3" v-if="show">
      <div
        class="card col-4 col-lg-4 col-md-6 col-sm-12 me-4 mb-4"
        v-for="laptop in AllLaptops"
        :key="laptop.id"
      >
        <img :src="laptop.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ laptop.name }}</h5>
          <p class="card-text">
            Memory: {{ laptop.ram }} <br />
            CPU: {{ laptop.cpu }} <br />
            Storage: {{ laptop.storage }} <br />
            Price: {{ laptop.price }} Ks
          </p>
          <a href="#" class="btn main-btn">Add to Cart</a>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column aligin-items-center ms-3" v-if="show">
      <div
        class="col-12 d-flex mb-3 py-2 border-bottom"
        v-for="laptop in AllLaptops"
        :key="laptop.id"
      >
        <div>
          <img :src="laptop.img" class="card-img-top row-img" alt="..." />
        </div>

        <div class="text-start">
          <h5>
            {{ laptop.name }},CPU-{{ laptop.cpu }},Memory-{{
              laptop.ram
            }},Storage-{{ laptop.storage }},Price-{{ laptop.price }}
          </h5>
          <a href="" class="btn main-btn mt-3">Add to Cart</a>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let AllLaptops = [
      {
        id: "1",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 4000MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
      {
        id: "2",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 4000MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
      {
        id: "3",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 4000MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
      {
        id: "4",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 4000MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
      {
        id: "5",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 4000MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
      {
        id: "6",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 4000MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
    ];

    let show = ref();

    let isrow = ref(true);
    let iscol = ref(true);

    let showRow = () => {
      show.value = isrow.value;
    };

    let showCol = () => {
      show.value = iscol.value;
    };

    return {
      AllLaptops,
      isrow,
      iscol,
      show,
      showCol,
      showRow,
    };
  },
};
</script>

<style>
.card {
  width: 22rem;
}

.list-column {
  cursor: pointer;
  font-size: 32px;
}

.list-column span {
  font-size: 32px;
}

.row-img {
  width: 220px;
}

@media (max-width: 500px) {
  .card {
    width: 165px !important;
  }

  .main-btn {
    width: 100px !important;
    font-size: 14px !important;
  }

  .row-img {
    width: 100px;
  }
}
</style>
