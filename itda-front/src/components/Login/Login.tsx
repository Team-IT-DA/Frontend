import ProductCard from "components/common/ProductCard";

const Login = () => {
  return (
    <div>
      <ProductCard
        size="small"
        seller="박크롱"
        productImg="https://t1.daumcdn.net/news/202105/25/catlab/20210525054449077awum.jpg"
        productName="박크롱의 신선한 당근 2kg"
        productPrice={3000}
        horizontal={false}
      />
    </div>
  );
};

export default Login;
