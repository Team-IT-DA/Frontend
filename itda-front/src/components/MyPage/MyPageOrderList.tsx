import OrderList from "components/common/Atoms/OrderList";
import useToggle from "hooks/useToggle";
import orders from "util/mock/orderListData";
import ReviewWriteForm from "./ReviewWriteForm";

const MyPageOrderList = () => {
  const [isReviewModalOpen, toggleReviewModal] = useToggle(false);

  const reviewModalHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".reviewModal")) return;
    toggleReviewModal();
  };

  return (
    <>
      <OrderList
        orderList={orders}
        width={"80%"}
        useReviewButton={true}
        onClickReviewButton={reviewModalHandler}
      />
      {isReviewModalOpen && (
        <ReviewWriteForm handleModalOpen={reviewModalHandler} />
      )}
    </>
  );
};

export default MyPageOrderList;
