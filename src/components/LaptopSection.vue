<template>
  <div class="laptop-wrapper content-wrapper">
    <div class="content-heading text-center"><h2>Laptop List</h2></div>

    <div class="laptop-list">
      <div class="row">
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Acer Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Asus Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Dell Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>HP Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Lenovo Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Microsoft Surface Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Samsung Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Alldocube Notebook Collection</h5>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-3 mb-5">
          <div class="laptop-card">
            <div class="card-top-img">
              <img src="../assets/2.png" alt="" />
            </div>
            <div class="card-content">
              <h5>Venturer Notebook Collection</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <router-link class="btn primary-btn text-center"> View All </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.laptop-wrapper {
  margin-top: 60px;
}

.laptop-list {
  margin-top: 30px;
}

.btn-group {
  display: block;
  margin: 20px auto;
}

.laptop-card {
  border: 1px solid #111111;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.5s ease-in-out;
  height: 100%;
  background: var(--background-color);
}

.btn-group {
  margin: 20px auto;
}

.laptop-card-xl {
  width: 100%;

  height: 100%;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card-top-img {
  align-content: center;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.card-top-img img {
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card-content {
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 20px 15px;
  color: #ffffff;
  text-align: center;
}
.card-content h5 {
  margin: 0px;
  font-family: "Gilory-Medium", sans-serif;
  font-weight: 400;
  opacity: 0.8;
}

.laptop-card:hover {
  transform: translateY(-10px);
  box-shadow: #23b6de90 0px 5px 15px;
}

.laptop-card:hover .card-content h5 {
  opacity: 1;
}

.laptop-card-xl img {
  width: 100%;
  height: 100%;
  background: var(--background-color);
  border-radius: 6px;
}

.v-window {
  height: 238px !important;
}

@media (max-width: 1230px) {
  .card-content {
    padding: 20px 10px;
  }
}

@media (max-width: 1000px) {
  .card-content {
    padding: 20px 18px;
  }
}

@media (max-width: 690px) {
  .card-content {
    padding: 20px 16px;
  }
  .card-content h5 {
    font-size: 15px;
  }
}

@media (max-width: 600px) {
  .card-content h5 {
    font-size: 15px;
  }

  .card-content {
    padding: 10px;
  }
}
</style>
