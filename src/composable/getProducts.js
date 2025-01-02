import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

let getProducts = () => {
  const products = ref([]);
  const error = ref("");

  let loadProduct = async () => {
    try {
      let response = await axios.get(api.xppen);
      products.value = response.data.products;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { products, error, loadProduct };
};

export default getProducts;
