<template>
  <div v-if="tab == 'VC'" class="row vm gap-3 content-wrapper">
    <div
      class="card col-12 col-md-6 col-lg-3"
      v-for="gadget in KM"
      :key="gadget.id"
    >
      <div class="card-top-image" v-for="(img, i) in gadget.img" :key="i">
        <img
          class="w-100 hover_img"
          :class="{ 'd-none': img.status == 'sec_img' }"
          :src="img.url"
          alt=""
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ gadget.name }}</h5>
        <div class="card-text text-start d-flex">
          <p>Specification:</p>
          <p>{{ gadget.spec }}</p>
        </div>
        <p class="card-text text-start">Price: {{ gadget.price }} $</p>
      </div>
    </div>
    <div>
      <button
        v-if="!isViewAll1"
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('VC')"
      >
        View More
      </button>
      <button v-else class="btn main-btn mt-5">View All</button>
    </div>
  </div>

  <div class="row vm gap-3 content-wrapper" v-if="tab == 'CP'">
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
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('CP')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>

  <div class="row vm gap-3 content-wrapper" v-if="tab == 'VVSP'">
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
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('VVSP')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>
  <div class="row vm gap-3 content-wrapper" v-if="tab == 'GSM'">
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
    <div>
      <button
        v-if="!isViewAll4"
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('GSM')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>
  <div class="row vm gap-3 content-wrapper" v-if="tab == 'VOIP'">
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
    <div>
      <button
        v-if="!isViewAll4"
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('VOIP')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>
  <div class="row vm gap-3 content-wrapper" v-if="tab == 'CM'">
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
    <div>
      <button
        v-if="!isViewAll4"
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('CM')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>
  <div class="row vm gap-3 content-wrapper" v-if="tab == 'CW'">
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
    <div>
      <button
        v-if="!isViewAll4"
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('CW')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>
  <div class="row vm gap-3 content-wrapper" v-if="tab == 'PBX'">
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
    <div>
      <button
        v-if="!isViewAll4"
        class="btn main-btn vm mt-5"
        @click="viewMoreItem('PBX')"
      >
        View More
      </button>
      <button v-else class="btn main-btn vm mt-5">View All</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: ["tab"],
  setup() {
    const AllGadget = [
      {
        id: "1",
        name: "Cisco Video Conference",
        spec: "Cisco Video Conference",
        price: "48",
        img: [
          {
            url: require("@/assets/Telecommunication/cisco.jpg"),
            status: "primary_img",
          },
          { url: require("@/assets/Laptop/X1-Carbon.jpg"), status: "sec_img" },
        ],
        cat: "K&M",
      },
      {
        id: "2",
        name: "Cisco Video Conference",
        spec: "Cisco Video Conference",
        price: "48",
        img: [
          {
            url: require("@/assets/Telecommunication/cisco.jpg"),
            status: "primary_img",
          },
          { url: require("@/assets/Laptop/X1-Carbon.jpg"), status: "sec_img" },
        ],
        cat: "K&M",
      },
      {
        id: "3",
        name: "Cisco Video Conference",
        spec: "Cisco Video Conference",
        price: "48",
        img: [
          {
            url: require("@/assets/Telecommunication/cisco.jpg"),
            status: "primary_img",
          },
          { url: require("@/assets/Laptop/X1-Carbon.jpg"), status: "sec_img" },
        ],
        cat: "K&M",
      },
      {
        id: "4",
        name: "Cisco Video Conference",
        spec: "Cisco Video Conference",
        price: "48",
        img: [
          {
            url: require("@/assets/Telecommunication/cisco.jpg"),
            status: "primary_img",
          },
          { url: require("@/assets/Laptop/X1-Carbon.jpg"), status: "sec_img" },
        ],
        cat: "K&M",
      },
      {
        id: "5",
        name: "RK 61",
        spec: "RK 61 is a special 60% Mechnical Keyboard",
        price: "48",
        img: [
          { url: require("@/assets/Keyboard/RK61.jpg"), status: "primary_img" },
          { url: require("@/assets/Laptop/X1-Carbon.jpg"), status: "sec_img" },
        ],
        cat: "K&M",
      },
      {
        id: "6",
        name: "RK 61",
        spec: "RK 61 is a special 60% Mechnical Keyboard",
        price: "48",
        img: [
          { url: require("@/assets/Keyboard/RK61.jpg"), status: "primary_img" },
          { url: require("@/assets/Laptop/X1-Carbon.jpg"), status: "sec_img" },
        ],
        cat: "K&M",
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

    let KM = ref("");
    KM.value = AllGadget.filter((gadget) => gadget.cat == "K&M").slice(0, 4);
    let twoin1Laptop = ref("");
    twoin1Laptop.value = AllGadget.filter(
      (laptop) => laptop.cat == "2in1"
    ).slice(0, 4);

    let productivityLaptop = ref("");
    productivityLaptop.value = AllGadget.filter(
      (laptop) => laptop.cat == "productivity"
    ).slice(0, 4);

    let gamingLaptop = ref("");
    gamingLaptop.value = AllGadget.filter(
      (laptop) => laptop.cat == "gaming"
    ).slice(0, 4);

    const viewMoreItem = (tabName) => {
      if (tabName == "WAP") {
        KM.value = AllGadget.filter((gadget) => gadget.cat == "K&M").slice(
          0,
          8
        );
        isViewAll1.value = true;
      }

      if (tabName == "2in1") {
        twoin1Laptop.value = AllGadget.filter(
          (laptop) => laptop.cat == "2in1"
        ).slice(0, 8);
        isViewAll2.value = true;
      }
      if (tabName == "productivity") {
        productivityLaptop.value = AllGadget.filter(
          (laptop) => laptop.cat == "productivity"
        ).slice(0, 8);
        isViewAll3.value = true;
      }
      if (tabName == "gaming") {
        gamingLaptop.value = AllGadget.filter(
          (laptop) => laptop.cat == "gaming"
        ).slice(0, 8);
        isViewAll4.value = true;
      }
    };

    // onMounted(() => {
    //   let imgs = document.querySelectorAll(".hover_img");

    //   imgs.forEach((img) => {
    //     img.addEventListener("mouseover", function (e) {
    //       e.target.style.display = "none";
    //     });

    //     img.addEventListener("mouseleave", function (e) {
    //       e.target.style.display = "block";
    //     });
    //   });
    // });

    return {
      KM,
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

@media (max-width: 860px) {
  .card {
    width: 300px;
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
