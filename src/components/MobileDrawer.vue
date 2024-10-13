<template>
  <v-list>
    <v-list-item @click="changeRoute('/')">
      <div class="d-flex justify-content-between align-items-center">
        <div class="logo d-flex align-items-center gap-2">
          <img :src="require('@/assets/images/logo.png')" alt="" />
          <h5 class="mt-2">
            Globe <br />
            IT & SMART ELECTRONIC
          </h5>
        </div>
        <span class="material-symbols-outlined fs-1 text-white"> close </span>
      </div>
    </v-list-item>
    <div style="width: 100%; height: 2px; background: #ec6316"></div>
    <v-list-group value="categories">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">Categories</v-list-item>
      </template>
      <v-list-item @click="changeRoute('#')">
        <v-list-item-title>Laptop</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Desktop</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Tech Gadgets</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Headset</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Speaker</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Portable</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Digital Display</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Tablet & E-Reader</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Networking</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Telecommunication</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <hr class="p-0 m-0" />

    <v-list-group value="XP-Pen">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">Xp-pen</v-list-item>
      </template>
      <v-list-item @click="changeRoute('#')">
        <v-list-item-title>Drawing Tablet</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Drawing Display</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Accessories</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <hr class="py-0 my-0" />

    <v-list-group value="Globe_Solar_solutions">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">Globe Solar Solutions</v-list-item>
      </template>
    </v-list-group>

    <hr class="py-0 my-0" />

    <v-list-group value="information">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">Information</v-list-item>
      </template>

      <v-list-item @click="changeRoute('#')">
        <v-list-item-title>Promotion​</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>Our Shop Loaction​</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>News & Event​</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>New Products​</v-list-item-title>
      </v-list-item>
    </v-list-group>

    <hr class="py-0 my-0" />

    <v-list-item @click="changeRoute('/#')">
      <v-list-item-title>About Us</v-list-item-title>
    </v-list-item>

    <hr class="py-0 my-0" />

    <v-list-item @click="changeRoute('/#')">
      <v-list-item-title>Contact Us</v-list-item-title>
    </v-list-item>

    <hr class="py-0 my-0" />

    <v-list-item @click="changeRoute('/#')">
      <v-list-item-title
        ><span class="material-symbols-outlined">
          favorite
        </span></v-list-item-title
      >
    </v-list-item>

    <hr class="py-0 my-0" />

    <v-list-item>
      <v-list-item-title>
        <div class="">
          <router-link to="/" class="d-flex align-items-center gap-1">
            <div class="d-flex align-items-center gap-1">
              <span class="icon-phone">
                <span class="material-symbols-outlined"> phone_in_talk </span>
              </span>
              <p class="text-bold">Call Us:</p>
            </div>
            <span class="color-text">+959 880 441 046</span>
          </router-link>
        </div>
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["language"],
  setup(props, { emit }) {
    const changeRoute = (route) => emit("changeRoute", route);
    const changeLanguage = (lang) => emit("switchLanguage", lang);
    return { changeRoute, changeLanguage };
  },
};
</script>

<style scoped>
.logo img {
  width: 50px;
}
</style>
