import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

const ProductTab = () => {
  return (
    <div>
      <div>
        <div>상품설명 탭</div>
        <div>후기 탭</div>
      </div>
      <ProductDescription />
      <ProductReview />
    </div>
  );
};

export default ProductTab;
