import S from "./MyPageStyles";
import Header from "components/common/Header";
import MyPageOrderList from "./MyPageOrderList";
import VerticalTabs from "components/MyPage/MyPageTabs";

const MyPage = () => {
  return (
    <>
      <S.MyPage.HeaderLayout>
        <Header />
      </S.MyPage.HeaderLayout>
      <S.MyPage.MainLayout>
        <S.MyPage.SideTabLayout>
          <VerticalTabs>
            <MyPageOrderList />
          </VerticalTabs>
        </S.MyPage.SideTabLayout>
        <S.MyPage.ContentLayout></S.MyPage.ContentLayout>
      </S.MyPage.MainLayout>
    </>
  );
};

export default MyPage;
