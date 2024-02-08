<template>
  <div class="sticky-header">
    <div class="header-group content-wrapper">
      <img src="../assets/logo.jpg" alt="" class="logo" />
      <div class="search-form">
        <div class="searh-bar">
          <form class="input-group" @click="search_bar = !search_bar">
            <input type="text" class="form-control" placeholder="Search Here" />
            <button
              class="btn btn-info search-bar-button"
              @click="search_bar = !search_bar"
            >
              <span class="material-symbols-outlined"> search </span>
            </button>
          </form>
        </div>
        <div class="hidden-search-bar" v-if="search_bar">
          <div class="item-1">
            <h3 class="text-start fs-4 text-header">Popular Gadget</h3>
            <div class="row align-baseline">
              <div class="col-lg-3 col-md-3 col-sm-4">
                <p class="text-stat fs-4 sub-text">Keyboard</p>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4">
                <p class="text-stat fs-4 sub-text">Keyboard</p>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4">
                <p class="text-stat fs-4 sub-text">Keyboard</p>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4">
                <p class="text-stat fs-4 sub-text">Keyboard</p>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-4">
                <p class="text-stat fs-4 sub-text">Keyboard</p>
              </div>
            </div>
            <div class="item-2">
              <h2 class="text-start fs-4 text-header">Popular Product</h2>
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-4 col-sm-4">
                  <div class="card" style="width: 10rem">
                    <img src="../assets/2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Keyboard</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4">
                  <div class="card" style="width: 10rem">
                    <img src="../assets/2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Keyboard</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4">
                  <div class="card" style="width: 10rem">
                    <img src="../assets/2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Keyboard</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4">
                  <div class="card" style="width: 10rem">
                    <img src="../assets/2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Keyboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-icon-group d-none">
        <div class="mb-icon">
          <p class="cart-icon">
            <span class="material-symbols-outlined icon"> shopping_cart </span>
          </p>
          <p class="heart-icon">
            <span class="material-symbols-outlined icon"> favorite </span>
          </p>
          <p class="sigin-icon">
            <span class="material-symbols-outlined icon"> account_circle </span>
          </p>
        </div>
      </div>
      <div class="icon-group">
        <p class="cart">
          <span class="material-symbols-outlined"> shopping_cart </span
          ><br />Cart
        </p>
        <p class="heart">
          <span class="material-symbols-outlined"> favorite </span> <br />
          Wish List
        </p>
        <p class="sigin">
          <span class="material-symbols-outlined"> account_circle </span>
          <br />
          Sign/up
        </p>
        <p class="contact">
          <span class="material-symbols-outlined"> call </span> Contact Us
          <br />
          +959 880 441 046
        </p>
        <div class="menu" @click="isShow = !isShow">
          <span class="material-symbols-outlined"> menu </span>
          <p>Menu</p>
        </div>
      </div>
    </div>
    <div class="content-wrapper navigation">
      <nav>
        <div class="close">
          <h3>Menu</h3>
          <span class="material-symbols-outlined" @click="isShow = !isShow">
            close
          </span>
        </div>
        <ul>
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Popular Gadgets</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="f-d"
              >Categories<span class="material-symbols-outlined">
                arrow_drop_down
              </span>
              <div class="dropdown">
                <div
                  class="dropdown-item"
                  v-for="item in categories"
                  :key="item.id"
                >
                  <router-link to="#" class="item">{{ item.name }}</router-link>
                  <div class="sub-dropdown">
                    <div class="sub-item">
                      <router-link
                        to="#"
                        class="item"
                        v-for="sub_item in item.subCategory"
                        :key="sub_item.id"
                        >{{ sub_item.name }}</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Brands</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Promotion</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="f-d"
              >Information<span class="material-symbols-outlined">
                arrow_drop_down
              </span>
              <div class="dropdown">
                <div
                  class="dropdown-item"
                  v-for="item in information"
                  :key="item.id"
                >
                  <router-link to="#" class="item">{{ item.name }}</router-link>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="content-wrapper mobile-navigation" v-if="isShow">
      <nav>
        <div class="close">
          <h3>Menu</h3>
          <span class="material-symbols-outlined" @click="isShow = !isShow">
            close
          </span>
        </div>
        <ul>
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Popular Gadgets</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              <div class="f-d" @click="dropdown = !dropdown">
                Categories<span class="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </div>
              <div class="dropdown" v-if="dropdown">
                <div
                  class="dropdown-item"
                  v-for="item in categories"
                  :key="item.id"
                >
                  <router-link to="#" class="item">{{ item.name }}</router-link>
                  <div class="sub-dropdown">
                    <div class="sub-item">
                      <router-link
                        to="#"
                        class="item"
                        v-for="sub_item in item.subCategory"
                        :key="sub_item.id"
                        >{{ sub_item.name }}</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Brands</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Promotion</router-link>
          </li>
          <li class="nav-item" @click="dropdown = !dropdown">
            <router-link to="/" class="f-d"
              >Information<span class="material-symbols-outlined">
                arrow_drop_down
              </span>
              <div class="dropdown" v-if="dropdown">
                <div class="dropdown-item">
                  <router-link
                    to="/"
                    v-for="text in Infromation"
                    :key="text"
                    class="item"
                  >
                    {{ text.name }}
                  </router-link>
                </div>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="d-flex"
              ><span class="material-symbols-outlined pe-3"> favorite </span
              >Favourite
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="d-flex">
              <span class="material-symbols-outlined pe-3"> shopping_cart </span
              >Cart</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="d-flex">
              <span class="material-symbols-outlined pe-3">
                account_circle
              </span>
              Sigin/up</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <MobileSearchBar></MobileSearchBar>
  </div>
</template>

<script>
import MobileSearchBar from "./SearchBar/MobileSearchBar";
import { onMounted, ref } from "vue";

export default {
  components: {
    MobileSearchBar,
  },
  setup() {
    const categories = [
      {
        id: 1,
        name: "Laptop",
        subCategory: [
          {
            id: 1,
            name: "Tablet PC",
          },
          {
            id: 1,
            name: "Professional",
          },
          {
            id: 1,
            name: "2 in 1 Laptop",
          },
        ],
      },
      {
        id: 2,
        name: "Desktop",
        subCategory: [
          {
            id: 1,
            name: "All in one PC",
          },
          {
            id: 2,
            name: "Micro - Mini PC",
          },
          {
            id: 3,
            name: "Work Station",
          },
          {
            id: 4,
            name: "Monitor",
          },
          {
            id: 5,
            name: "UPS",
          },
          {
            id: 6,
            name: "Printer",
          },
        ],
      },
      {
        id: 3,
        name: "Tech Gadgets",
        subCategory: [
          {
            id: 1,
            name: "Keyboard & Mouse",
          },
          {
            id: 2,
            name: "Docking & Adapter",
          },
          {
            id: 3,
            name: "Power Bank & Charger",
          },
          {
            id: 4,
            name: "Personal Storage",
          },
          {
            id: 5,
            name: "Back Pack",
          },
          {
            id: 6,
            name: "Smart Watch",
          },
          {
            id: 7,
            name: "Pen",
          },
          {
            id: 8,
            name: "Laptop Stand",
          },
          {
            id: 9,
            name: "Lighting",
          },
          {
            id: 10,
            name: "Webcam & Mic",
          },
          {
            id: 11,
            name: "Others",
          },
        ],
      },
      {
        id: 4,
        name: "Networking",
        subCategory: [
          {
            id: 1,
            name: "Wireless AP",
          },
          {
            id: 2,
            name: "Mesh Wi-Fi AP",
          },
          {
            id: 3,
            name: "Sim Router",
          },
          {
            id: 4,
            name: "Wireless Router",
          },
          {
            id: 5,
            name: "Network Switch",
          },
          {
            id: 6,
            name: "Network Tools Kit",
          },
          {
            id: 7,
            name: "Wi-Fi Adapter",
          },
          {
            id: 8,
            name: "Gateway",
          },
          {
            id: 9,
            name: "Rack",
          },
          {
            id: 10,
            name: "NAS & NAS HDD",
          },
        ],
      },
      {
        id: 5,
        name: "Telecommunication",
        subCategory: [
          {
            id: 1,
            name: "Video Conference",
          },
          {
            id: 2,
            name: "Conference Phone",
          },
          {
            id: 3,
            name: "Video-VOIP-SIP Phone",
          },
          {
            id: 4,
            name: "GSM Gateway",
          },
          {
            id: 5,
            name: "VOIP Gateway",
          },
          {
            id: 6,
            name: "Conference Mic",
          },
          {
            id: 7,
            name: "Conference Webcam",
          },
          {
            id: 8,
            name: "PBX / IP-PBX Devices",
          },
        ],
      },
      {
        id: 6,
        name: "Digital Display",
        subCategory: [
          {
            id: 1,
            name: "Black Borad",
          },
          {
            id: 2,
            name: "Interactive Flat Panel",
          },
          {
            id: 3,
            name: "Accessories",
          },
        ],
      },
      {
        id: 7,
        name: "Tablet and E-Reader",
        subCategory: [
          {
            id: 1,
            name: "Tablet and E-Reader",
          },
          {
            id: 2,
            name: "Tablet",
          },
          {
            id: 3,
            name: "Professional Tablet",
          },
          {
            id: 4,
            name: "Tablet PC",
          },
          {
            id: 5,
            name: "SIM Tablet",
          },
          {
            id: 6,
            name: "Smart Display",
          },
        ],
      },
      {
        id: 8,
        name: "Headset",
        subCategory: [
          {
            id: 1,
            name: "Business",
          },
          {
            id: 2,
            name: "Professional",
          },
          {
            id: 3,
            name: "Wireless",
          },
          {
            id: 4,
            name: "Mic",
          },
          {
            id: 5,
            name: "Wire Headset",
          },
        ],
      },
      {
        id: 9,
        name: "Speaker",
        subCategory: [
          {
            id: 1,
            name: "Home",
          },
          {
            id: 2,
            name: "Portable",
          },
          {
            id: 3,
            name: "Loud",
          },
          {
            id: 4,
            name: "Sound Bar",
          },
          {
            id: 5,
            name: "Conference",
          },
        ],
      },
      {
        id: 10,
        name: "Portable",
        subCategory: [
          {
            id: 1,
            name: "Monitor",
          },
          {
            id: 2,
            name: "Printer & Scanner",
          },
          {
            id: 3,
            name: "Photo Printer",
          },
          {
            id: 4,
            name: "Projector",
          },
          {
            id: 5,
            name: "Conferencing",
          },
          {
            id: 6,
            name: "Mobile Router",
          },
          {
            id: 7,
            name: "Sim Router",
          },
          {
            id: 8,
            name: "Speaker",
          },
          {
            id: 9,
            name: "Power Station",
          },
        ],
      },
      {
        id: 11,
        name: "XP-Pen",
        subCategory: [
          {
            id: 1,
            name: "Drawing Display",
          },
          {
            id: 2,
            name: "Drawing Tablet",
          },
          {
            id: 3,
            name: "Accessories",
          },
        ],
      },
    ];
    const information = [
      {
        id: 1,
        name: "About Us",
      },
      {
        id: 2,
        name: "News & Events",
      },
      {
        id: 3,
        name: "New Product",
      },
      {
        id: 4,
        name: "Shipping Policy",
      },
      {
        id: 5,
        name: "Our Store Location",
      },
    ];

    let search_bar = ref(false);

    let dropdown = ref(false);

    let isShow = ref(false);

    return { categories, isShow, dropdown, information, search_bar };
  },
};
</script>

<style scoped>
.sticky-header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: white;
  z-index: 99;
}

.header-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-group {
  width: 600px;
  height: 50px;
  border: 1px solid #767676;
  border-radius: 7px;
  color: #767676;
}

.input-group .material-symbols-outlined {
  color: #fff;
}

.search-form {
  position: relative;
  display: inline-block;
  margin-top: 10px;
  padding: 10px 10px;
  z-index: 1;
}

.search-bar {
  position: absolute;
}

.hidden-search-bar {
  position: absolute;
  width: 800px;
  height: 400px;
  display: block;
  border: 1px solid #767676;
  background: #fff;
  margin: 1px 0;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
}

.hidden-search-bar .item-2 {
  padding-top: 30px;
}

.hidden-search-bar .text-header {
  border-bottom: 2px solid #767676;
}

.hidden-search-bar .sub-text {
  border: 2px solid #767676;
  background: #767676;
  color: #fff;
  border-radius: 5px;
}

.card-img-top {
  object-fit: fill;
}

.search-bar-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 150px;
}

.icon-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.material-symbols-outlined {
  font-size: 32px;
  font-weight: 500;
  color: #0f8ec5;
}

.icon-group p {
  padding: 0 20px 0 20px;
  text-align: center;
  font-size: 20px;
}
.contact span {
  padding: 0px 10px;
}

.menu {
  display: none;
}

.navigation {
  background: #0f8ec5;
  width: 100%;
}

.mobile-navigation {
  display: none;
}
nav {
  padding: 0 !important;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 120px;
  cursor: pointer;
  text-align: center;
}

nav .close {
  display: none;
}

.close .material-symbols-outlined {
  color: #fff;
}

nav .f-d {
  display: flex;
  cursor: pointer;
}

.f-d .material-symbols-outlined {
  color: #fff;
}

nav h3 {
  display: none;
}

nav ul {
  display: flex;
  gap: 100px;
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-align: left;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border-bottom: 2px solid transparent;
  transition: 0.4ms;
}

.nav-item .material-symbols-outlined {
  color: #fff;
}

nav .nav-item {
  position: relative;
  height: 100%;
}

.dropdown {
  width: 210px;
  margin-top: 40px;
  position: absolute;
  transform: translateY(0px);
  transition: 0.5s;
  background: #0f8ec5;
  visibility: hidden;
  z-index: 99;
}

.dropdown .dropdown-item {
  color: #fff !important;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.sub-dropdown {
  width: 250px;
  transform: translateX(210px);
  position: absolute;
  background: #0f8ec5;
  transition: 0s;
  visibility: hidden;
}

.sub-dropdown .sub-item {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.dropdown a.router-link-exact-active {
  color: #fff;
}

.nav-item:hover {
  overflow: visible;
}

.nav-item:hover .dropdown {
  visibility: visible;
  transform: translateY(0px);
}

.dropdown .dropdown-item:hover .sub-dropdown {
  visibility: visible;
  transform: translateX(210px);
}

.dropdown .item {
  display: inline-block;
  border-bottom: 2px solid #fff;
  width: 100%;
  text-align: start;
  padding: 10px;
}

@media (max-width: 1600px) {
  nav ul {
    gap: 70px;
  }
  .content-wrapper {
    padding: 10px 5% !important;
  }
}

@media (max-width: 1200px) {
  .icon-group p.heart,
  p.contact {
    display: none;
  }

  .content-wrapper {
    padding: 10px 5% !important;
  }

  nav ul {
    gap: 35px !important;
  }
}

@media (max-width: 1024px) {
  .header-group {
    padding: 0px 20px !important;
  }
}

@media (max-width: 860px) {
  .icon-group p.heart,
  p.cart,
  p.contact,
  p.sigin {
    display: none;
  }
  .icon-group .menu {
    display: block !important;
    cursor: pointer;
  }

  .hidden-search-bar {
    width: 600px;
    height: 384px;
    overflow: hidden;
  }

  .menu {
    margin-top: -10px;
  }

  .menu p {
    display: none;
  }

  .input-group {
    width: 500px;
  }

  .sticky-header {
    position: fixed;
    justify-content: center;
    background: #fff;
  }

  .content-wrapper {
    padding: 0 !important;
  }

  .header-group {
    padding: 0 30px !important;
    z-index: -1;
  }

  .navigation {
    position: absolute;
    background: none;
    display: none;
    top: 0;
    right: 0;
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .mobile-navigation {
    position: absolute;
    background: none;
    width: 100%;
    top: 0;
    right: 0;
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
  }

  nav .mobile-navigation .close {
    display: block;
  }

  nav .close {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 120px;
    color: #fff;
  }

  .close .material-symbols-outlined {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;
  }

  nav {
    position: relative;
    float: right;
    background: #0f8ec5;
    height: 1000px;
    width: 30%;
    display: inline-block;
    text-align: left;
  }
  nav h3 {
    display: block;
  }

  nav ul {
    display: inline-block;
    padding: 0 0 20px 0;
    width: 100%;
  }

  nav .nav-item {
    padding: 10px 20px;
    border-bottom: 1px solid #fff;
  }
  .dropdown {
    width: 210px;
    margin: 0 !important;
    position: relative;
    transform: translateY(0px);
    transition: 0ms;
    background: #0f8ec5;
  }
  .sub-dropdown {
    display: none;
  }
}

@media (max-width: 500px) {
  .input-group .form-control {
    display: none;
  }
  .input-group {
    display: none;
  }
  .search-bar {
    background: none;
    border: none;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .header-group {
    margin: 0 auto;
    padding: 0 !important;
  }

  .icon-group {
    display: block !important;
    margin-top: -10px;
  }
  .mobile-input {
    display: flex;
  }
  nav {
    width: 70%;
  }
  nav .close {
    gap: 160px;
  }
  .mobile-icon-group {
    display: block !important;
    position: relative;
    margin-top: 25px;
  }
  .mb-icon {
    display: flex !important;
    margin-bottom: 40px;
    margin-left: 20px;
  }
  p.heart-icon .material-symbols-outlined,
  p.cart-icon .material-symbols-outlined,
  p.sigin-icon .material-symbols-outlined {
    font-size: 20px;
    margin-top: 5px;
    padding: 10px;
    color: #0f8ec5;
  }

  .menu p {
    display: none;
  }
  .menu {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 30px;
  }
}
</style>
