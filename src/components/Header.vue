<template>
  <div class="sticky-header">
    <div class="header-group content-wrapper">
      <img src="../assets/logo.jpg" alt="" class="logo" />
      <form class="input-group">
        <input type="text" class="form-control" placeholder="Search Here" />
        <button class="btn btn-info search-bar">
          <span class="material-symbols-outlined"> search </span>
        </button>
      </form>
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
          <span class="material-symbols-outlined"> account_circle </span> <br />
          Sign/up
        </p>
        <p class="contact">
          Contact Us <br />
          +959 880 441 046
        </p>
        <div class="menu" @click="MobileToggle()" v-if="!isShow">
          <span class="material-symbols-outlined" > menu </span>
          <p>Menu</p>
        </div>
      </div>
    </div>
    <div class="content-wrapper navigation" v-if="isShow">
      <nav>
        <div class="close">
          <h3>Menu</h3>
          <span class="material-symbols-outlined" @click="MobileToggle()">
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
            <router-link to="/" class="f-d">Categories<span class="material-symbols-outlined">
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
            <router-link to="/" class="d-flex">Information<span class="material-symbols-outlined">
              arrow_drop_down
            </span>
            <div class="dropdown">
              <div class="dropdown-item">
                <router-link to="/" v-for="text in Infromation" :key="text" class="item">
                  {{ text.name }}
                </router-link>
              </div>
            </div>
          </router-link>
          </li>
         
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MobileMenu from './MobileMenu.vue';
export default {
  components: { MobileMenu },
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
            name: "Headset 1",
          },
        ],
      },
      {
        id: 9,
        name: "Speaker",
        subCategory: [
          {
            id: 1,
            name: "Speaker 4.0",
          },
        ],
      },
      {
        id: 10,
        name: "Portable",
        subCategory: [
          {
            id: 1,
            name: "Portable 1 ",
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

    let isShow = ref(false)
    let MobileToggle=()=>{
     isShow!=isShow
    }

    return { categories, isShow, MobileToggle };
  },
};
</script>

<style scoped>
.sticky-header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  background: white;
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

.search-bar {
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
}

.icon-group p {
  padding: 0 20px 0 20px;
  text-align: center;
  font-size: 20px;
}

.menu {
  display: none;
}

.navigation {
  background: #0f8ec5;
  width: 100%;
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



nav .nav-item {
  position: relative;
}

.dropdown {
  width: 210px;
  margin-top: 40px;
  position: absolute;
  transform: translateY(0px);
  transition: 0.5s;
  background: #0f8ec5;
  visibility: hidden;
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
}

@media (max-width: 1200px) {
  .icon-group p.heart,
  p.contact {
    display: none;
  }

 .content-wrapper {
    padding: 10px 10% !important;
  }

  nav ul{
   gap: 35px;
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
    display: block;
    cursor: pointer;
  }

  .menu{
    margin-top: 6px;
  }

  .menu p{
    margin-top: -10px;
  }

  .input-group {
    width: 500px;
  }

  .sticky-header {
    position: fixed;
    justify-content: center;
    background: #fff;
  }

  .content-wrapper{
    padding:0 !important;
  }

  .header-group{
    padding: 0 30px !important;
    z-index: -1;
  }

  .navigation{
    position: absolute;
    background: none;
    display: block;
    top: 0;
    right: 0;
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .close{
    padding: 10px;
    display: flex;
    gap:  100px;
  }

  .close .material-symbols-outlined{
    font-size: 32px;
    font-weight: 600;
    cursor: pointer;
  }

  nav{
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

  nav ul{
    display: inline-block;
    padding: 0 0 20px 0;
    width: 100%;
  }

  nav .nav-item {
    padding: 10px 20px;
    border-bottom: 1px solid #fff;
  }
}
</style>
