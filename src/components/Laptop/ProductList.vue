<template>
  <div class="laptop-list">
    <div class="list-header text-start ms-3 mt-5">
      <h1 class="fw-bold">Lenovo</h1>
    </div>
    <hr />
    <div class="row aligin-items-center ms-3">
      <div
        class="card col-4 col-lg-4 col-md-6 col-sm-12 me-4 mb-4"
        style="width: 22rem"
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
  </div>
</template>

<script>
export default {
  setup() {
    let AllLaptops = [
      {
        id: "1",
        name: "Lenovo X1 Carbon",
        Brand: "Dell",
        ram: "32GB DDR5 400MHz",
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
        ram: "32GB DDR5 400MHz",
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
        ram: "32GB DDR5 400MHz",
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
        ram: "32GB DDR5 400MHz",
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
        ram: "32GB DDR5 400MHz",
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
        ram: "32GB DDR5 400MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "business",
      },
    ];

    return {
      AllLaptops,
    };
  },
};
</script>

<style></style>
