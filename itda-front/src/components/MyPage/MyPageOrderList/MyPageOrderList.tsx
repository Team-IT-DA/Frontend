import useToggle from "hooks/useToggle";
import newOrderListData from "util/mock/newOrderListData";
import ReviewWriteForm from "./ReviewWriteForm";
import Pagination from "components/common/Atoms/Pagination";
import SelectBox from "components/common/Atoms/SelectBox";
import ReceiptModal from "./ReceiptModal";
import { useState } from "react";
import MyOrderList from "./MyOrderList";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";
import S from "../MyPageStyles";

const MyPageOrderList = () => {
  const [isSeller, setIsSeller] = useState(true);
  const [isReviewModalOpen, toggleReviewModal] = useToggle(false);
  const [isOrderDetailModalOpen, toggleOrderDetailModal] = useToggle(false);
  const [page, setPage] = useState(1);
  const reviewModalHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".reviewModal")) return;
    toggleReviewModal();
  };

  const orderDetailHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".receipt-modal")) return;
    toggleOrderDetailModal();
  };
  const orderPerPage = 5;
  const dateFilter = ["전체", "최근 3개월", "최근 6개월", "최근 1년"];
  const { orderList } = newOrderListData;
  return (
    <>
      <S.MyPage.HeaderLayout>
        <Header />
      </S.MyPage.HeaderLayout>
      <S.MyPage.MainLayout>
        <S.MyPage.SideTabLayout>
          <MyPageTabs isSeller={isSeller} />
        </S.MyPage.SideTabLayout>
        <S.MyPage.ContentLayout>
          <S.MyPage.ContentLayer>
            <S.MyOrderList.Layout>
              <SelectBox selectArray={dateFilter} />
              <MyOrderList
                orderList={orderList}
                width={"75%"}
                onClickReviewButton={reviewModalHandler}
                onClickOrderDetailButton={orderDetailHandler}
              />
              {isReviewModalOpen && (
                <ReviewWriteForm handleModalOpen={reviewModalHandler} />
              )}
              {isOrderDetailModalOpen && (
                <ReceiptModal
                  orderList={orderList}
                  handleModalOpen={orderDetailHandler}
                  toggleHandler={toggleOrderDetailModal}
                />
              )}
              <Pagination
                itemsPerPage={orderPerPage}
                totalPosts={20}
                paginate={setPage}
                currentPage={page}
              />
            </S.MyOrderList.Layout>
          </S.MyPage.ContentLayer>
        </S.MyPage.ContentLayout>
      </S.MyPage.MainLayout>
    </>
  );
};

export default MyPageOrderList;
