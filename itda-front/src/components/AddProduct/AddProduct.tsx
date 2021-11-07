import Header from "components/common/Header";
import AddProductForm from "./AddProductForm";
import productAPI from "util/API/productAPI";

const AddProduct = () => {
  const addCate = () => {
    productAPI.category.post.postCategory("과일/견과/쌀");
  };

  return (
    <>
      <Header />
      <AddProductForm />
      <button onClick={addCate}>추가</button>
    </>
  );
};

export default AddProduct;
