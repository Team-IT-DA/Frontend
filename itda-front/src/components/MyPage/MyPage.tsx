import S from "./MyPageStyles";
import Header from "components/common/Header";
import MyPageOrderList from "./MyPageOrderList";
import MyPageTabs from "components/MyPage/MyPageTabs";

const MyPage = () => {
  return (
    <>
      <S.MyPage.Layout>
        <S.MyPage.HeaderLayout>
          <Header />
        </S.MyPage.HeaderLayout>
        <S.MyPage.MainLayout>
          <S.MyPage.SideTabLayout>
            <MyPageTabs />
          </S.MyPage.SideTabLayout>
          <S.MyPage.ContentLayout>
            <S.MyPage.ContentLayer></S.MyPage.ContentLayer>
          </S.MyPage.ContentLayout>
        </S.MyPage.MainLayout>
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
