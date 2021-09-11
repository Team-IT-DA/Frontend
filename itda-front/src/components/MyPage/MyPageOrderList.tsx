import OrderList from "components/common/Atoms/OrderList";
import orders from "util/mock/orderListData";

const MyPageOrderList = () => {
  return (
    <>
      <OrderList orderList={orders} width={"80%"} useReviewButton={true} />
    </>
  );
};

export default MyPageOrderList;
