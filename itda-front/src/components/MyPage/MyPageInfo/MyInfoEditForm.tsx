import S from "../MyPageStyles";
import React, { useState} from "react";
import { useRecoilState } from "recoil";
import { myInfoErrorData } from 'stores/MyPageAtoms';
import { useMutation } from "react-query";
import myPageAPI from "util/API/myPageAPI";
import {IUserInfo, IUserInputDate} from 'types/MyInfoTypes';
import ColorButton from "components/common/Atoms/ColorButton";
import theme from "styles/theme";

const MyInfoEditForm = () => {
  const [myInfoError, setMyInfoError] = useRecoilState<IUserInputDate>(myInfoErrorData)
  // !--------api로 받아오는 initial 사용자 정보 - 임시 mock 데이터. 실제 api가져오는 로직으로 바꿔야함.
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: "홍길동",
    telephone: "01011112222",
    email: "roach@test.com",
    password: "test",
  });

  //사용자로부터 입력받는 input 데이터 (input들의 상태를 관리)
  const [userInputData, setUserInputData] = useState<IUserInputDate>({
    name: userInfo.name,
    telephone: userInfo.telephone,
    email: userInfo.email,
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const myInfoEditMutation = useMutation(async () => {
    myPageAPI.user.checkUserInfo();
  });

  const validateInputdata = (inputName:string, inputValue:string) => {
      const errors ={};
      console.log("에러를 만들어요.")
      return errors;
  }

  // todo: 사용자의 정보를 먼저 가져와서 input에 보여줘야 함. 서버 작동하면 살릴 것.
  // useEffect(() => {
  //   setUserInfo(mutation.data as any);
  // }, []);

  //todo: 여기서 하는 일: 에러검사, 에러메세지 보여주고 userInputData에서 해당하는 상태 업데이트
  const handleMyInfoFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInputData({
      ...userInputData,
      [name]: value
    })
    console.log(userInputData)
    const inputErrors = validateInputdata(name, value);
    setMyInfoError(inputErrors as IUserInputDate);
  }


  const handleChangeUserInfoButtonClick = () => {
    console.log("회원정보수정 페이지 클릭됌");
    // myPageAPI.user.updateUserInfo<IUserInfo>(userInfo);
  };

    return (
        <>
            <S.MyInfoAfter.HeaderLayer>
                기본 정보 수정
              </S.MyInfoAfter.HeaderLayer>
              <S.MyInfoAfter.FormLayer>
                <S.MyInfoAfter.FormInputsLayer>
                  <S.MyInfoAfter.CurrentPasswordBlock>
                    <S.MyInfoAfter.CurrentPasswordLabel>
                      현재 비밀번호
                    </S.MyInfoAfter.CurrentPasswordLabel>
                    <S.MyInfoAfter.CurrentPasswordInput
                      required
                      name="password"
                      type="password"
                      label="현재 비밀번호를 입력해주세요."
                      placeholder="Example1234"
                      variant="outlined"
                      onChange={handleMyInfoFormChange}
                      error={userInputData.password === ""}
                      helperText="에러메세지가 나오는 곳"
                    />
                  </S.MyInfoAfter.CurrentPasswordBlock>
                  <S.MyInfoAfter.NewPasswordBlock>
                    <S.MyInfoAfter.NewPasswordLabel>
                      새 비밀번호
                    </S.MyInfoAfter.NewPasswordLabel>
                    <S.MyInfoAfter.NewPasswordInput
                      required
                      name="newPassword"
                      type="password"
                      label="새롭게 설정할 비밀번호를 입력해주세요."
                      placeholder="Example5678"
                      variant="outlined"
                      onChange={handleMyInfoFormChange}
                    />
                  </S.MyInfoAfter.NewPasswordBlock>
                  <S.MyInfoAfter.NewPasswordConfirmBlock>
                    <S.MyInfoAfter.NewPasswordConfirmLabel>
                      새 비밀번호 확인
                    </S.MyInfoAfter.NewPasswordConfirmLabel>
                    <S.MyInfoAfter.NewPasswordConfirmInput
                      required
                      name="newPasswordConfirm"
                      type="password"
                      label="새롭게 설정할 비밀번호를 다시 한번 입력해주세요."
                      placeholder="Example5678"
                      variant="outlined"
                      onChange={(e) => {
                       // TODO: newPassword랑 같은지 검사하는 로직 필요
                      }}
                    />
                  </S.MyInfoAfter.NewPasswordConfirmBlock>
                  <S.MyInfoAfter.NameBlock>
                    <S.MyInfoAfter.NameLabel>이름</S.MyInfoAfter.NameLabel>
                    <S.MyInfoAfter.NameInput
                    required
                    name="name"
                    label="이름을 입력해주세요."
                    value={userInputData.name && userInputData.name}
                    variant="outlined"
                    onChange={handleMyInfoFormChange}
                    />
                  </S.MyInfoAfter.NameBlock>
                  <S.MyInfoAfter.EmailBlock>
                    <S.MyInfoAfter.EmailLabel>이메일</S.MyInfoAfter.EmailLabel>
                    <S.MyInfoAfter.EmailInput
                    required
                    name="email"
                    label="이메일을 입력해주세요."
                    value={userInputData.email && userInputData.email}
                    variant="outlined"
                    onChange={handleMyInfoFormChange}
                    />
                  </S.MyInfoAfter.EmailBlock>
                  <S.MyInfoAfter.CellPhoneNumberBlock>
                    <S.MyInfoAfter.CellPhoneNumberLabel>
                      휴대폰
                    </S.MyInfoAfter.CellPhoneNumberLabel>
                    <S.MyInfoAfter.CellPhoneNumberInput
                    required
                    name="telephone"
                    label="휴대폰 번호를 입력해주세요."
                    value={userInputData.telephone && userInputData.telephone}
                    variant="outlined"
                    onChange={handleMyInfoFormChange}
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
                  baseColor={theme.colors.navy.light}
                  width={"20%"}
                  fontSize={theme.fontSizes.lg}
                  onClickButton={handleChangeUserInfoButtonClick}
                >
                  회원정보수정
                </ColorButton>
              </S.MyInfoAfter.ButtonLayer>
        </>
    )
}

export default MyInfoEditForm
