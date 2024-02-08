<template>
  <div class="mobile-search-bar">
    <div class="control">
      <div class="form-control">
        <input
          type=" text"
          value=""
          placeholder="Search Here"
          @click="hidden = !hidden"
        />
        <button class="btn btn-info mobile-search-icon">
          <span class="material-symbols-outlined"> search </span>
        </button>
      </div>
    </div>
    <div class="hidden-search-mobile container" v-if="hidden">
      <div class="mobile-item-1">
        <h3 class="text-start fs-4 text-header">Popular Gadget</h3>
        <div class="row align-baseline">
          <div class="col">
            <p class="text-start fs-6 sub-text">Keyboard</p>
          </div>
          <div class="col">
            <p class="text-start fs-6 sub-text">Keyboard</p>
          </div>
          <div class="col">
            <p class="text-start fs-6 sub-text">Keyboard</p>
          </div>
          <div class="col">
            <p class="text-start fs-6 sub-text">Keyboard</p>
          </div>
          <div class="col">
            <p class="text-start fs-6 sub-text">Keyboard</p>
          </div>
        </div>
        <div class="mobile-item-2">
          <h2 class="text-start fs-4 text-header">Popular Product</h2>
          <div class="row align-items-center">
            <div class="col mb-2">
              <div class="card" style="width: 8rem">
                <img src="../../assets/2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text fs-6">Keyboard</p>
                </div>
              </div>
            </div>
            <div class="col mb-2">
              <div class="card" style="width: 8rem">
                <img src="../../assets/2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text fs-6">Keyboard</p>
                </div>
              </div>
            </div>
            <div class="col mb-2">
              <div class="card" style="width: 8rem">
                <img src="../../assets/2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text fs-6">Keyboard</p>
                </div>
              </div>
            </div>
            <div class="col mb-2">
              <div class="card" style="width: 8rem">
                <img src="../../assets/2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text fs-6">Keyboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let hidden = ref(false);

    return { hidden };
  },
};
</script>

<style>
.mobile-search-bar {
  display: none;
}

@media (max-width: 500px) {
  .mobile-search-bar {
    display: block !important;
    padding: 0px;
    width: 600px;
    height: 50px;
    margin-top: -35px;
    position: relative;
  }
  .control {
    margin: 0 auto;
    width: 500px;
    height: 300px;
    position: absolute;
  }
  .form-control {
    display: flex;
    width: 500px;
    padding: 0;
    justify-content: center;
  }
  .form-control input {
    width: 451px;
  }
  .mobile-search-icon {
    border-radius: 0px;
  }
  .mobile-search-icon .material-symbols-outlined {
    margin-top: 5px;
    color: #fff;
  }
  .hidden-search-mobile {
    margin-top: 50px;
    width: 490px;
    height: 400px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #333;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .mobile-item-1 .sub-text {
    background: #717171;
    border-radius: 5px;
    padding: 2px;
    color: #fff;
  }

  .hidden-search-mobile .text-header {
    border-bottom: 2px solid #111;
  }
}
</style>
