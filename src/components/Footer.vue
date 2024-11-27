<template>
  <div class="footer-wrapper" :class="{ 'no-padding': route.meta.hideNavbar }">
    <div class="row content-wrapper">
      <div class="col-12 col-sm-6 col-md-3 col-xl-3">
        <div class="footer-heading mt-5"><h5>Information</h5></div>
        <div class="footer-list mt-5">
          <ul>
            <li class="hilight-font">
              <router-link to="/">Promotion</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">About us</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-xl-3">
        <div class="footer-heading mt-5"><h5>Service</h5></div>
        <div class="footer-list mt-5">
          <ul>
            <li class="hilight-font">
              <router-link to="/">Globe Solar Solution</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-xl-3">
        <div class="footer-heading mt-5"><h5>Shop Now</h5></div>
        <div class="footer-list mt-5">
          <ul>
            <li class="hilight-font">
              <router-link to="/">XP-Pen</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Laptop</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Tech Gadget</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Speaker</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">HeadSet</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Portable</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Netwroking</router-link>
            </li>
            <li class="hilight-font">
              <router-link to="/">Telecommunication</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-12 col-xl-3">
        <div class="content-group align-items-center gap-5">
          <div class="address">
            <div class="footer-heading mt-5"><h5>Address</h5></div>
            <div class="mt-5 d-flex align-items center gap-2">
              <span class="material-symbols-outlined"> map </span>
              <p class="hilight-font">
                No.508 A, Lower Kyee Myin daing Road, (Home Lan Bus Stop), Kyee
                Myin Daing Township. Yangon.
              </p>
            </div>
          </div>
          <div class="contact">
            <div class="footer-heading mt-5"><h5>Contact Us</h5></div>
            <div class="contact-us mt-5">
              <div class="phone d-flex align-items-center gap-2 mb-2">
                <span class="material-symbols-outlined"> call </span>
                <p class="hilight-font">+959 880 441 046</p>
              </div>

              <div class="mail d-flex align-items-center gap-2">
                <span class="material-symbols-outlined"> mail </span>
                <p class="hilight-font">info@globetradingmm.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-heading mt-5"><h5>Follow Us</h5></div>
        <div class="icon-group mt-5">
          <div class="d-flex align-items-center gap-5">
            <a href="https://www.facebook.com/globe.trading" target="_blank"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a
              href="https://www.tiktok.com/@globe_trading1?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <i class="fa-brands fa-tiktok"></i
            ></a>
            <a
              href="https://www.instagram.com/globetrading4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right mt-5">
      <div
        class="content-wrapper d-flex flex-column flex-md-row align-items-center justify-content-between"
      >
        <p class="text-center">
          © Copyright <span>itGateway Technology Group Ltd.</span> All Rights
          Reserved.
        </p>
        <p>
          Designed by
          <a href="https://itgateway.org/" _target="_blank"
            ><span class="color-text">itGateway Software Development</span></a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>

<style scoped>
.footer-wrapper {
  margin-top: 90px;
  background: var(--background-color);
  width: 100%;
}

.no-padding {
  margin-top: 0px;
}

.footer-heading h5 {
  font-size: 24px;
  font-family: "Gilory-Bold", sans-serif;
  color: var(--font-color-white);
}

.footer-list ul {
  padding: 0px;
}

.footer-list ul li {
  list-style: none;
  margin: 5px 0px;
  color: #ffffff;
  transition: 0.3s;
}

.footer-list a {
  transition: 0.3s;

  font-family: "Gilory-Medium", sans-serif;
  font-weight: 400;
  font-size: 17px;
}

.footer-list a:hover {
  opacity: 1;
}

.footer-list ul li:hover {
  opacity: 1;
  color: #0a65af;
}

.address,
.contact-us {
  color: var(--font-color-white);
}

.icon-group {
  color: var(--font-color-white);
}

.icon-group .fa-brands {
  font-size: 22px;
  opacity: 0.8;
}

.icon-group a:hover .fa-brands {
  opacity: 1;
  color: #0a65af;
}

.copy-right {
  background: var(--background-white-color);
  width: 100%;
}

.copy-right p {
  font-size: 16px !important;
}

.copy-right span {
  font-weight: bold;
  font-size: 16px !important;
}

.copy-right .color-text {
  color: #23b5de;
}

@media (max-width: 1100px) {
  .content-group {
    display: flex;
  }

  .address {
    width: 300px;
  }
}

@media (max-width: 770px) {
  .content-group {
    display: block;
  }
  .copy-right p {
    margin-bottom: 10px !important;
  }
}
</style>
