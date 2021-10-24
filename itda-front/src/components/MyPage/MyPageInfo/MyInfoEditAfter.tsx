import { useState} from "react";
import { useRecoilValue } from 'recoil';
import { useMutation } from "react-query";
import TextInput from "components/common/Atoms/TextInput";
import ColorButton from "components/common/Atoms/ColorButton";
import theme from "styles/theme";
import S from "../MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "../MyPageTab/MyPageTabs";
import myPageAPI from "util/API/myPageAPI";
import { isSideDrawerClicked } from 'stores/SideDrawerAtoms';

interface IUserInfo {
  name: string;
  telephone: string; //number로 받으면 맨 앞의 0이 8진수 리터럴로 인식됨. string => number 변환할 것.
  email: string;
  password: string;
}

interface IUserInputDate {
  name: string;
  telephone: string;
  email: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const MyInfoEditAfter = () => {
  const isSideDrawerClickedState = useRecoilValue(isSideDrawerClicked);
  console.log("isSideDrawerClickedState", isSideDrawerClickedState);
  const [isSeller, setIsSeller] = useState(true); //임시
  // api로 받아오는 initial 사용자 정보 - 임시로 mock 데이터 넣어둠.
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "홍길동",
    telephone: "01011112222",
    email: "roach@test.com",
    password: "test",
  });
  //사용자로부터 입력받는 input 데이터
  const [userInputData, setUserInputData] = useState<IUserInputDate>({
    name: userInfo.name,
    telephone: userInfo.telephone,
    email: userInfo.email,
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const mutation = useMutation(async () => {
    myPageAPI.user.checkUserInfo();
  });

  // todo: 사용자의 정보를 먼저 가져와서 input에 보여줘야 함. 서버 작동하면 살릴 것.
  // useEffect(() => {
  //   setUserInfo(mutation.data as any);
  // }, []);

  const handleChangeUserInfoButtonClick = () => {
    console.log("회원정보수정 페이지 클릭됌");
    // myPageAPI.user.updateUserInfo<IUserInfo>(userInfo);
  };

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
                      value={userInputData.password}
                      state={userInputData.password}
                      setState={(userInput) =>
                        setUserInputData({
                          ...userInputData,
                          password: userInput,
                        })
                      }
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
                      value={userInputData.newPassword}
                      state={userInputData.newPassword}
                      setState={(userInput) =>
                        setUserInputData({
                          ...userInputData,
                          newPassword: userInput,
                        })
                      }
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
                      value={userInputData.newPasswordConfirm}
                      state={userInputData.newPasswordConfirm}
                      setState={(userInput) => {
                        setUserInputData({
                          ...userInputData,
                          newPasswordConfirm: userInput,
                        });
                      }}
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
                      value={userInputData.name}
                      state={userInputData.name}
                      setState={(userInput) => {
                        setUserInputData({
                          ...userInputData,
                          name: userInput,
                        });
                      }}
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
                      value={userInputData.email}
                      state={userInputData.email}
                      setState={(userInput) => {
                        setUserInputData({
                          ...userInputData,
                          email: userInput,
                        });
                      }}
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
                      value={userInputData.telephone}
                      state={userInputData.telephone}
                      setState={(userInput) => {
                        setUserInputData({
                          ...userInputData,
                          telephone: userInput,
                        });
                      }}
                    />
                  </S.MyInfoAfter.CellPhoneNumberBlock>
                </S.MyInfoAfter.FormInputsLayer>
                <S.MyInfoAfter.FormButtonsLayer>
                  {/* todo: 중복확인 로직 필요 */}
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
                  onClickButton={handleChangeUserInfoButtonClick}
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
