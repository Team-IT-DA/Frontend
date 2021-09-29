import { useState } from "react";
import S from "components/MyPage/MyPageStyles";
import SS from "./SellerInfoStyles";
import ProfileImageUploader from "./ProfileImageUploader";
import ProfileTextForm from "./ProfileTextForm";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";

const SellerInfoEdit = () => {
  const [isSeller, setIsSeller] = useState(true);
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
            <SS.SellerInfoEdit.Layout>
              <SS.SellerInfoEdit.HeaderLayer>
                판매자 정보 수정
              </SS.SellerInfoEdit.HeaderLayer>
              <SS.SellerInfoEdit.FormLayer>
                <SS.SellerInfoEdit.ProfileImageBlock>
                  <ProfileImageUploader />
                </SS.SellerInfoEdit.ProfileImageBlock>
                <SS.SellerInfoEdit.DescriptionBlock>
                  <ProfileTextForm />
                </SS.SellerInfoEdit.DescriptionBlock>
              </SS.SellerInfoEdit.FormLayer>
            </SS.SellerInfoEdit.Layout>
          </S.MyPage.ContentLayer>
        </S.MyPage.ContentLayout>
      </S.MyPage.MainLayout>
    </>
  );
};

export default SellerInfoEdit;
