import S from "./MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "components/MyPage/MyPageTabs";
import MyReview from "components/MyPage/MyReview";
import MyPageOrderList from "./MyPageOrderList";

const MyPage = () => {
  return (
    <>
      <S.MyPage.Layout>
        <S.MyPage.HeaderLayout>
          {/** sticky 헤더 적용안되는 것 같음ㅜ */}
          <Header isSticky={true} />
        </S.MyPage.HeaderLayout>
        <S.MyPage.MainLayout>
          <S.MyPage.SideTabLayout>
            <MyPageTabs />
          </S.MyPage.SideTabLayout>
          <S.MyPage.ContentLayout>
            <S.MyPage.ContentLayer>
              {/**어떤 컴포넌트가 들어올 지에 따라 다름 */}
              <MyReview />
            </S.MyPage.ContentLayer>
          </S.MyPage.ContentLayout>
        </S.MyPage.MainLayout>
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
