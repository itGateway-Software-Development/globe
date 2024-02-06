<template>
  <div class="mobile-header float-end">
    <nav class="float-end">
      <div class="nav-item"><h3>Menu</h3></div>
      <div class="nav-item"><a href="#">Home</a></div>
      <div class="nav-item"><a href="#">Popular Gadget</a></div>
      <div class="nav-item">
        <a href="" class="d-flex"
          >Categories
          <span class="material-symbols-outlined"> arrow_drop_down </span></a
        >
        <div class="dropdown">
          <div class="dropdown-item" v-for="item in categories" :key="item.id">
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
      </div>
      <div class="nav-item">
        <a href="#">Brands</a>
      </div>
      <div class="nav-item"><a href="#">Promotion</a></div>
      <div class="nav-item">
        <a href="#" class="d-flex"
          >Informaton<span class="material-symbols-outlined">
            arrow_drop_down
          </span></a
        >
        <div class="dropdown">
          <div class="dropdown-item">
            <router-link
              to="#"
              v-for="text in Information"
              :key="text"
              class="item"
            >
              {{ text.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mobile-header {
  display: none;
}

@media (max-width: 860px) {
  .mobile-header {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }

  nav {
    display: inline-block;
    text-align: left;
    background: #111;
    width: 300px;
    height: 700px;
    padding: 10px;
  }

  nav .nav-item {
    padding: 10px 20px;
  }
}
</style>
