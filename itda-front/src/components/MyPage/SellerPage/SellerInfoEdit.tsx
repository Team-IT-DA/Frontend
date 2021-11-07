import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import S from "components/MyPage/MyPageStyles";
import SS from "./SellerInfoStyles";
import ProfileImageUploader from "./ProfileImageUploader";
import ProfileTextForm from "./ProfileTextForm";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";
import { sellerProfileText } from "stores/SellerInfoAtoms";
import { sellerProfilePreviewImage } from "stores/SellerInfoAtoms";
import sellerAPI from 'util/API/sellerAPI';

const SellerInfoEdit = () => {
  const [isSeller, setIsSeller] = useState(true);
  const [profileImage, setProfileImage] = useRecoilState(sellerProfilePreviewImage);
  const [profileText, setProfileText] = useRecoilState(sellerProfileText);

  // todo: GET api 생기면 먼저 초기 데이터 받아와서 보여주기!!
  const { data } = useQuery(
    "sellerProfileData",
    sellerAPI.get.getSellerInfo,
    {
      onSuccess:data => {
        console.log(data);
        setProfileText({ "text": data.description });
        setProfileImage({
          "file": null,
          "previewURL": data.imgUrl
        })
      }
    }
  );

  useEffect(() => {
    const newSellerData = {
      "description": profileText.text,
      "imgUrl": profileImage.previewURL
    }
    sellerAPI.post.updateSellerInfo(newSellerData);
  }, [profileText, profileImage])

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
