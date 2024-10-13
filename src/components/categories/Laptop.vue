<template>
  <div class="categories-container">
    <div class="row">
      <div class="col-4 col-md-3 col-xl-3">
        <div class="content-group">
          <h5>NoteBook</h5>
          <ul>
            <li>
              <router-link to="/" class="hilight-font menu-route"
                ><p class="hilight-font">ASUS Notebook</p></router-link
              >
            </li>
            <li>
              <router-link to="/" class="hilight-font menu-route"
                ><p class="hilight-font">Acer NoteBook</p></router-link
              >
            </li>
            <li>
              <router-link to="/" class="hilight-font menu-route"
                ><p class="hilight-font">DELL NoteBook</p></router-link
              >
            </li>
            <li>
              <router-link to="/" class="hilight-font menu-route"
                ><p class="hilight-font">HP NoteBook</p></router-link
              >
            </li>
            <li>
              <router-link to="/" class="hilight-font menu-route"
                ><p class="hilight-font">MSI NoteBook</p></router-link
              >
            </li>
            <li>
              <router-link to="/" class="hilight-font menu-route"
                ><p>View All NoteBook</p></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4 col-md-3 col-xl-3">
        <div class="content-group">
          <h5>2 in 1 Laptop</h5>
        </div>
      </div>
      <div class="col-4 col-md-3 col-xl-3">
        <div class="content-group">
          <h5>Professional</h5>
        </div>
      </div>
      <div class="col-4 col-md-3 col-xl-3">
        <div class="content-group">
          <h5>Gaming</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-group ul li p {
  margin: 0px !important;
}
</style>
