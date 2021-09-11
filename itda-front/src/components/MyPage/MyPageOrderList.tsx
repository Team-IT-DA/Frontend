import OrderList from "components/common/Atoms/OrderList";
import orders from "util/mock/orderListData";
import ReviewWriteForm from "./ReviewWriteForm";

const MyPageOrderList = () => {
  return (
    <>
      <OrderList orderList={orders} width={"80%"} useReviewButton={true} />
      <ReviewWriteForm />
    </>
  );
};

export default MyPageOrderList;
