import api from "@/service/api";
import axios from "axios";
import { ref } from "vue";

const getSingleProduct = () => {
  const singleProduct = ref({});
  const error = ref("");
  const getProduct = async (slug) => {
    try {
      let response = await axios.get(api.singlexppen + slug);
      singleProduct.value = response.data.product;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { singleProduct, error, getProduct };
};

export default getSingleProduct;
