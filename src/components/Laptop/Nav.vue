<template>
  <div class="laptop-nav">
    <div
      class="d-flex align-items-centers laptop-spec"
      @click="specFilter = !specFilter"
    >
      <h2 class="fw-bold fs-3">
        Specification Filter
        <span class="material-symbols-outlined"> expand_more </span>
      </h2>
    </div>
    <hr />
    <div
      class="spec-list lh-lg text-start d-flex flex-column"
      v-if="specFilter"
      data-aos="fade-down"
      data-aos-delay="10"
      data-aos-duration="1000"
    >
      <div class="cpu-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="cpuList = !cpuList"
        >
          CPU
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="cpuList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> Intel Core i7-12th Gen</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> Intel Core i7-11th Gen</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> Intel Core i7-10th Gen</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> Intel Core i5-12th Gen</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> Intel Core i5-11th Gen</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="gpu-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="gpuList = !gpuList"
        >
          GPU
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="gpuList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"
                >Nvidia Geforce RTX 4080 8GB</label
              >
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"
                >Nvidia Geforce RTX 3060 6GB</label
              >
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"
                >Nvidia Geforce RTX 3050 4GB</label
              >
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"
                >Nvidia Geforce RTX 2080 8GB</label
              >
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"
                >Nvidia Geforce RTX 2060 4GB</label
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="ram-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="ramList = !ramList"
        >
          Memory
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="ramList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">8 GB</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">16 GB</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">32 GB</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="storage-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="storageList = !storageList"
        >
          Storage
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="storageList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> M.2 SSD 2TB</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> M.2 SSD 1TB</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> M.2 SSD 512GB</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> M.2 SSD 256GB</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> M.2 SSD 128GB</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="screen-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="screenList = !screenList"
        >
          Screen Size
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="screenList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> 13 inches</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> 14 inches</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> 15 inches</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> 15.6 inches</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> 16 inches</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="type-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="typeList = !typeList"
        >
          Type
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="typeList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">Business & School</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">Gaming</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">Designer</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="price-list">
        <div
          class="d-flex align-items-center fs-5 fw-semibold"
          @click="priceList = !priceList"
        >
          Price
          <span class="material-symbols-outlined"> expand_more </span>
        </div>
        <ul v-if="priceList">
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label"> 600,000 to 800,000</label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">800,000 to 1,000,000 </label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">1,000,000 to 2,000,000 </label>
            </div>
          </li>
          <li>
            <div class="form-check fs-5">
              <input class="form-check-input" type="checkbox" />
              <label class="form-check-label">2,000,000 to </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let specFilter = ref(true);
    let cpuList = ref(false);
    let gpuList = ref(false);
    let ramList = ref(false);
    let storageList = ref(false);
    let screenList = ref(false);
    let typeList = ref(false);
    let priceList = ref(false);
    return {
      specFilter,
      cpuList,
      gpuList,
      ramList,
      storageList,
      screenList,
      typeList,
      priceList,
    };
  },
};
</script>

<style>
.laptop-spec {
  cursor: pointer;
}

.spec-list {
  cursor: pointer;
}

.spec-list ul {
  padding: 10px;
}
</style>
