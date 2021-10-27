import { useState} from "react";
import { useRecoilValue } from 'recoil';
import MyInfoEditForm from "./MyInfoEditForm"
import S from "../MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";
import { isSideDrawerClicked } from 'stores/SideDrawerAtoms';


const MyInfoEditAfter = () => {
  const isSideDrawerClickedState = useRecoilValue(isSideDrawerClicked);
  const [isSeller, setIsSeller] = useState(true); //임시

  return (
    <>
      <S.MyPage.HeaderLayout>
        <Header />
      </S.MyPage.HeaderLayout>
      <S.MyPage.MainLayout>
        <S.MyPage.SideTabLayout>
          <MyPageTabs isSeller={isSeller} />
        </S.MyPage.SideTabLayout>
        <S.MyPage.ContentLayout isSideDrawerClicked={isSideDrawerClickedState}>
          <S.MyPage.ContentLayer>
            <S.MyInfoAfter.Layout>
              <MyInfoEditForm />
            </S.MyInfoAfter.Layout>
          </S.MyPage.ContentLayer>
        </S.MyPage.ContentLayout>
      </S.MyPage.MainLayout>
    </>
  );
};

export default MyInfoEditAfter;
