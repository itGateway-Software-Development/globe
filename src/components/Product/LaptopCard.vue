<template>
  <div v-if="tab == 'home'" class="row vm gap-3">
    <div
      class="card col-12 col-md-6 col-lg-3"
      v-for="laptop in homeLaptop"
      :key="laptop.id"
    >
      <img :src="laptop.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ laptop.name }}</h5>
        <p class="card-text text-start">
          Memory: {{ laptop.ram }} <br />
          CPU: {{ laptop.cpu }} <br />
          Storage: {{ laptop.storage }} <br />
          Price: {{ laptop.price }} Ks
        </p>
      </div>
    </div>
    <div>
      <button
        v-if="!isViewAll1"
        class="btn main-btn mt-3"
        @click="viewMoreItem('home')"
      >
        View More
      </button>
      <button v-else class="btn main-btn mt-3">View All</button>
    </div>
  </div>

  <div class="row vm gap-3" v-if="tab == '2in1'">
    <div
      class="card col-12 col-md-6 col-lg-3"
      v-for="laptop in twoin1Laptop"
      :key="laptop.id"
    >
      <img :src="laptop.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ laptop.name }}</h5>
        <p class="card-text text-start">
          Memory: {{ laptop.ram }} <br />
          CPU: {{ laptop.cpu }} <br />
          Storage: {{ laptop.storage }} <br />
          Price: {{ laptop.price }} Ks
        </p>
      </div>
    </div>
    <div>
      <button
        v-if="!isViewAll2"
        class="btn main-btn vm mt-3"
        @click="viewMoreItem('2in1')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-3">View All</button>
    </div>
  </div>

  <div class="row vm gap-3" v-if="tab == 'productivity'">
    <div
      class="card col-12 col-md-6 col-lg-3"
      v-for="laptop in productivityLaptop"
      :key="laptop.id"
    >
      <img :src="laptop.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ laptop.name }}</h5>
        <p class="card-text text-start">
          Memory: {{ laptop.ram }} <br />
          CPU: {{ laptop.cpu }} <br />
          Storage: {{ laptop.storage }} <br />
          Price: {{ laptop.price }} Ks
        </p>
      </div>
    </div>
    <div>
      <button
        v-if="!isViewAll3"
        class="btn main-btn vm mt-3"
        @click="viewMoreItem('productivity')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-3">View All</button>
    </div>
  </div>
  <div class="row vm gap-3" v-if="tab == 'gaming'">
    <div
      class="card col-12 col-md-6 col-lg-3"
      v-for="laptop in gamingLaptop"
      :key="laptop.id"
    >
      <img :src="laptop.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ laptop.name }}</h5>
        <p class="card-text text-start">
          Memory: {{ laptop.ram }} <br />
          CPU: {{ laptop.cpu }} <br />
          Storage: {{ laptop.storage }} <br />
          Price: {{ laptop.price }} Ks
        </p>
      </div>
    </div>

    <button
      v-if="!isViewAll4"
      class="btn main-btn vm mt-3"
      @click="viewMoreItem('gaming')"
    >
      View More
    </button>
    <button v-else class="btn main-btn vm mt-3">View All</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["tab"],
  setup() {
    const AllLaptop = [
      {
        id: "1",
        name: "Lenovo X1 Carbon",
        ram: "32GB DDR5 400MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 2TB",
        price: "60,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "home",
      },
      {
        id: "2",
        name: "Lenovo X1 Carbon",
        ram: "16GB DDR5 400MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 1TB",
        price: "57,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "home",
      },
      {
        id: "3",
        name: "Lenovo X1 Carbon",
        ram: "16GB DDR5 400MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "53,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "home",
      },
      {
        id: "4",
        name: "Lenovo X1 Carbon",
        ram: "32GB DDR5 400MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 1TB",
        price: "58,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "home",
      },
      {
        id: "5",
        name: "Lenovo X1 Carbon",
        ram: "16GB DDR5 400MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 1TB",
        price: "55,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "home",
      },
      {
        id: "6",
        name: "Lenovo X1 Carbon",
        ram: "8GB DDR5 400MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "50,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "home",
      },
      {
        id: "7",
        name: "Microsoft Surface",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "50,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "2in1",
      },
      {
        id: "8",
        name: "Microsoft Surface",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "50,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "2in1",
      },
      {
        id: "9",
        name: "Microsoft Surface",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i7-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "50,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "2in1",
      },
      {
        id: "10",
        name: "Microsoft Surface",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "2in1",
      },
      {
        id: "11",
        name: "Microsoft Surface",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "2in1",
      },
      {
        id: "12",
        name: "Microsoft Surface",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/X1-Carbon.jpg"),
        cat: "2in1",
      },
      {
        id: "13",
        name: "MSI",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/msi.png"),
        cat: "productivity",
      },
      {
        id: "14",
        name: "MSI",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/msi.png"),
        cat: "productivity",
      },
      {
        id: "15",
        name: "MSI",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/msi.png"),
        cat: "productivity",
      },
      {
        id: "16",
        name: "MSI",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/msi.png"),
        cat: "productivity",
      },
      {
        id: "17",
        name: "MSI",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/msi.png"),
        cat: "productivity",
      },
      {
        id: "18",
        name: "MSI",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/msi.png"),
        cat: "productivity",
      },
      {
        id: "19",
        name: "ROG Strix",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/rog.png"),
        cat: "gaming",
      },
      {
        id: "20",
        name: "ROG Strix",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/rog.png"),
        cat: "gaming",
      },
      {
        id: "21",
        name: "ROG Strix",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/rog.png"),
        cat: "gaming",
      },
      {
        id: "22",
        name: "ROG Strix",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/rog.png"),
        cat: "gaming",
      },
      {
        id: "23",
        name: "ROG Strix",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/rog.png"),
        cat: "gaming",
      },
      {
        id: "24",
        name: "ROG Strix",
        ram: "8GB DDR5 4800MHz",
        cpu: "Intel Core i5-1165G7 @ 3.0",
        storage: "M.2 PCIE Gen 4 SSD 512TB",
        price: "30,000,000",
        img: require("@/assets/Laptop/rog.png"),
        cat: "gaming",
      },
    ];

    let isViewAll1 = ref(false);
    let isViewAll2 = ref(false);
    let isViewAll3 = ref(false);
    let isViewAll4 = ref(false);

    let homeLaptop = ref("");
    homeLaptop.value = AllLaptop.filter((laptop) => laptop.cat == "home").slice(
      0,
      4
    );
    let twoin1Laptop = ref("");
    twoin1Laptop.value = AllLaptop.filter(
      (laptop) => laptop.cat == "2in1"
    ).slice(0, 4);

    let productivityLaptop = ref("");
    productivityLaptop.value = AllLaptop.filter(
      (laptop) => laptop.cat == "productivity"
    ).slice(0, 4);

    let gamingLaptop = ref("");
    gamingLaptop.value = AllLaptop.filter(
      (laptop) => laptop.cat == "gaming"
    ).slice(0, 4);

    const viewMoreItem = (tabName) => {
      if (tabName == "home") {
        homeLaptop.value = AllLaptop.filter(
          (laptop) => laptop.cat == "home"
        ).slice(0, 8);
        isViewAll1.value = true;
      }

      if (tabName == "2in1") {
        twoin1Laptop.value = AllLaptop.filter(
          (laptop) => laptop.cat == "2in1"
        ).slice(0, 8);
        isViewAll2.value = true;
      }
      if (tabName == "productivity") {
        productivityLaptop.value = AllLaptop.filter(
          (laptop) => laptop.cat == "productivity"
        ).slice(0, 8);
        isViewAll3.value = true;
      }
      if (tabName == "gaming") {
        gamingLaptop.value = AllLaptop.filter(
          (laptop) => laptop.cat == "gaming"
        ).slice(0, 8);
        isViewAll4.value = true;
      }
    };

    return {
      homeLaptop,
      twoin1Laptop,
      productivityLaptop,
      gamingLaptop,
      viewMoreItem,
      isViewAll1,
      isViewAll2,
      isViewAll3,
      isViewAll4,
    };
  },
};
</script>

<style>
.card {
  width: 18rem;
}

@media (max-width: 500px) {
  .card {
    width: 200px;
  }
  .card-title {
    font-size: 14px;
    font-weight: 600;
  }
  .card-text {
    font-size: 14px;
  }
  .btn {
    font-size: 16px;
  }
}
</style>
