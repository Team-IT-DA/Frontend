import ColorButton from "components/common/Atoms/ColorButton";
import theme from "styles/theme";
import S from "../MyPageStyles";
import TextInput from "components/common/Atoms/TextInput";
import { useState } from "react";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";

const MyInfoEditBefore = () => {
  const [testState, setTestState] = useState("");
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
            <S.MyInfoBefore.Layout>
              <S.MyInfoBefore.HeaderLayer>
                개인정보 수정
              </S.MyInfoBefore.HeaderLayer>
              <S.MyInfoBefore.TitleLayer>
                <div>비밀번호 재확인</div>
                <div>
                  회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번
                  확인해주세요.
                </div>
              </S.MyInfoBefore.TitleLayer>
              <S.MyInfoBefore.Divider3px />
              <S.MyInfoBefore.FormLayer>
                <S.MyInfoBefore.FormBlock>
                  <S.MyInfoBefore.FormTitle>아이디</S.MyInfoBefore.FormTitle>
                  <TextInput
                    width={"100%"}
                    size="medium"
                    state={testState}
                    setState={setTestState}
                  />
                </S.MyInfoBefore.FormBlock>
                <S.MyInfoBefore.FormBlock>
                  <S.MyInfoBefore.FormTitle>비밀번호</S.MyInfoBefore.FormTitle>
                  <TextInput
                    width={"100%"}
                    size="medium"
                    state={testState}
                    setState={setTestState}
                  />
                </S.MyInfoBefore.FormBlock>
              </S.MyInfoBefore.FormLayer>
              <S.MyInfoBefore.Divider1px />
              <S.MyInfoBefore.ButtonLayer>
                <ColorButton
                  isWhiteButton={false}
                  baseColor={theme.colors.navy.normal}
                  width="30%"
                  height="3.5rem"
                  fontSize="18px"
                >
                  확인
                </ColorButton>
              </S.MyInfoBefore.ButtonLayer>
            </S.MyInfoBefore.Layout>
          </S.MyPage.ContentLayer>
        </S.MyPage.ContentLayout>
      </S.MyPage.MainLayout>
    </>
  );
};

export default MyInfoEditBefore;
