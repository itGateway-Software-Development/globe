import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getRandom = () => {
  const randomProducts = ref([]);
  const errors = ref("");

  const getRandomProduct = async () => {
    try {
      let response = await axios.get(api.random);
      randomProducts.value = response.data.products;
    } catch (err) {
      errors.value = err.message;
    }
  };
  return { randomProducts, errors, getRandomProduct };
};

export default getRandom;
