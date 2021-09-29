import { useState } from "react";
import TextInput from "components/common/Atoms/TextInput";
import ColorButton from "components/common/Atoms/ColorButton";
import theme from "styles/theme";
import S from "../MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";

const MyInfoEditAfter = () => {
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
            <S.MyInfoAfter.Layout>
              <S.MyInfoAfter.HeaderLayer>
                기본 정보 수정
              </S.MyInfoAfter.HeaderLayer>
              <S.MyInfoAfter.FormLayer>
                <S.MyInfoAfter.FormInputsLayer>
                  <S.MyInfoAfter.CurrentPasswordBlock>
                    <S.MyInfoAfter.CurrentPasswordLabel>
                      현재 비밀번호
                    </S.MyInfoAfter.CurrentPasswordLabel>
                    <TextInput
                      label="현재 비밀번호를 입력해주세요."
                      variant="outlined"
                      size="medium"
                      width="50%"
                      isRequired={true}
                      state={testState}
                      setState={setTestState}
                    />
                  </S.MyInfoAfter.CurrentPasswordBlock>
                  <S.MyInfoAfter.NewPasswordBlock>
                    <S.MyInfoAfter.NewPasswordLabel>
                      새 비밀번호
                    </S.MyInfoAfter.NewPasswordLabel>
                    <TextInput
                      label="새롭게 설정할 비밀번호를 입력해주세요."
                      variant="outlined"
                      size="medium"
                      width="50%"
                      isRequired={true}
                      state={testState}
                      setState={setTestState}
                    />
                  </S.MyInfoAfter.NewPasswordBlock>
                  <S.MyInfoAfter.NewPasswordConfirmBlock>
                    <S.MyInfoAfter.NewPasswordConfirmLabel>
                      새 비밀번호 확인
                    </S.MyInfoAfter.NewPasswordConfirmLabel>
                    <TextInput
                      label="새롭게 설정할 비밀번호를 다시 한번 입력해주세요."
                      variant="outlined"
                      size="medium"
                      width="50%"
                      isRequired={true}
                      state={testState}
                      setState={setTestState}
                    />
                  </S.MyInfoAfter.NewPasswordConfirmBlock>
                  <S.MyInfoAfter.NameBlock>
                    <S.MyInfoAfter.NameLabel>이름</S.MyInfoAfter.NameLabel>
                    <TextInput
                      label="이름을 입력해주세요."
                      variant="outlined"
                      size="medium"
                      width="50%"
                      isRequired={true}
                      state={testState}
                      setState={setTestState}
                    />
                  </S.MyInfoAfter.NameBlock>
                  <S.MyInfoAfter.EmailBlock>
                    <S.MyInfoAfter.EmailLabel>이메일</S.MyInfoAfter.EmailLabel>
                    <TextInput
                      label="이메일을 입력해주세요."
                      variant="outlined"
                      size="medium"
                      width="50%"
                      isRequired={true}
                      state={testState}
                      setState={setTestState}
                    />
                  </S.MyInfoAfter.EmailBlock>
                  <S.MyInfoAfter.CellPhoneNumberBlock>
                    <S.MyInfoAfter.CellPhoneNumberLabel>
                      휴대폰
                    </S.MyInfoAfter.CellPhoneNumberLabel>
                    <TextInput
                      label="휴대폰 번호를 입력해주세요."
                      variant="outlined"
                      size="medium"
                      width="50%"
                      isRequired={true}
                      state={testState}
                      setState={setTestState}
                    />
                  </S.MyInfoAfter.CellPhoneNumberBlock>
                </S.MyInfoAfter.FormInputsLayer>
                <S.MyInfoAfter.FormButtonsLayer>
                  <S.MyInfoAfter.EmailCheckButton variant="outlined">
                    중복확인
                  </S.MyInfoAfter.EmailCheckButton>
                  <S.MyInfoAfter.CellPhoneNumberCheckButton>
                    다른번호 인증
                  </S.MyInfoAfter.CellPhoneNumberCheckButton>
                </S.MyInfoAfter.FormButtonsLayer>
              </S.MyInfoAfter.FormLayer>
              <S.MyInfoAfter.ButtonLayer>
                <ColorButton
                  isWhiteButton={false}
                  baseColor={theme.colors.gray.normal}
                  width={"20%"}
                  fontSize={theme.fontSizes.lg}
                >
                  탈퇴하기
                </ColorButton>
                <ColorButton
                  isWhiteButton={false}
                  baseColor={theme.colors.navy.light}
                  width={"20%"}
                  fontSize={theme.fontSizes.lg}
                >
                  회원정보수정
                </ColorButton>
              </S.MyInfoAfter.ButtonLayer>
            </S.MyInfoAfter.Layout>
          </S.MyPage.ContentLayer>
        </S.MyPage.ContentLayout>
      </S.MyPage.MainLayout>
    </>
  );
};

export default MyInfoEditAfter;
