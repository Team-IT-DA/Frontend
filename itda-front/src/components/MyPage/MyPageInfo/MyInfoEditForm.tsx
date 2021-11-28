import S from "../MyPageStyles";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import myPageAPI from "util/API/myPageAPI";
import auth from "util/API/authAPI";
import { IUserInfo ,IUserInputData } from "types/MyInfoTypes";
import ColorButton from "components/common/Atoms/ColorButton";
import theme from "styles/theme";

const MyInfoEditForm = () => {
  const [curPassword, setCurPassword] = useState<string>('');
  const [myInfoError, setMyInfoError] = useState<IUserInputData>({
    name: "",
    telephone: "",
    email: "",
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const [userInfo, setUserInfo] = useState<Pick<IUserInputData, 'name' | 'telephone' | 'email' | 'password'>>({
    name: "",
    telephone: "",
    email: "",
    password: "",
  });

  const [userInputData, setUserInputData] = useState<IUserInputData>({
    name: "",
    telephone: "",
    email: "",
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  useEffect(() => {
    setCurPassword(userInputData.password);
    setUserInputData({
      ...userInputData,
      name: userInfo.name,
      telephone: userInfo.telephone,
      email: userInfo.email,
    })
  }, [userInfo])

  const myInfoEditMutation = useMutation(
    async () => {
    // myPageAPI.user.checkUserInfo();
    }
  );

  useQuery('userData', myPageAPI.user.checkUserInfo,
  {
    onSuccess: data => {
      const userInfo: IUserInfo = data?.data;
      setUserInfo(userInfo as IUserInfo);
    }
  })

  const validateInputdata = (inputName: string, inputValue: string) => {
    const errors = myInfoError;

    if (inputName === "password") {
      errors.password =
        curPassword === inputValue ? "" : "비밀번호가 일치하지 않습니다.";
    }

    if (
      inputName === "newPassword" &&
      userInputData.newPasswordConfirm !== ""
    ) {
      errors.newPasswordConfirm =
        inputValue === userInputData.newPasswordConfirm
          ? ""
          : "입력하신 정보가 새로운 비밀번호와 일치하지 않습니다.";
      errors.newPasswordConfirm =
        inputValue === "" ? "" : errors.newPasswordConfirm;
    }

    if (
      inputName === "newPasswordConfirm" &&
      userInputData.newPassword !== ""
    ) {
      errors.newPasswordConfirm =
        userInputData.newPassword === inputValue
          ? ""
          : "입력하신 정보가 새로운 비밀번호와 일치하지 않습니다.";
    }

    if (inputName === "email") {
      if (inputValue === "") errors.email = "";
    }

    return errors;
  };

  const handleMyInfoFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInputData({
      ...userInputData,
      [name]: value,
    });

    const inputError = validateInputdata(name, value);
    setMyInfoError(inputError as IUserInputData);
  };

  const handleDuplicateCheckButtonClick = async () => {
    const isValidEmail = await auth.signUp.get.verifyEmail(userInputData.email as string);
    await createErrorMessage(isValidEmail);
  };

  const createErrorMessage = (isValidEmail: any) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (isValidEmail === '이메일이 중복되었습니다.') {
      setMyInfoError({
        ...myInfoError,
        email: "중복 되는 이메일 입니다. 다른 이메일 주소를 입력하세요.",
      })
    } else {
      alert('사용 가능한 이메일입니다.')
      setMyInfoError({
        ...myInfoError,
        email: ""
      })
    }

    if (!emailRegex.test(userInputData.email)) {
      setMyInfoError({
        ...myInfoError,
        email: "이메일 주소 형식이 올바르지 않습니다.",
      });
    }
  }

  const handleChangeUserInfoButtonClick = () => {
    console.log("회원정보수정 페이지 클릭됌");
    for(let key in userInputData) {
      // todo: 빈 값이 있다면 어느 인풋이 비어 있는지 찾고, setMyInfoError 로 해당 인풋에 에러메세지 보여주기
      // userInputData[key] === "" && alert('작성되지 않은 항목이 있습니다.')
    }
    // myPageAPI.user.updateUserInfo<IUserInfo>(userInfo);
  };


  return (
    <>
      <S.MyInfoAfter.HeaderLayer>기본 정보 수정</S.MyInfoAfter.HeaderLayer>
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
              error={myInfoError.password !== ""}
              helperText={myInfoError.password}
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
              error={myInfoError.newPassword !== ""}
              helperText={myInfoError.newPassword}
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
              onChange={handleMyInfoFormChange}
              error={myInfoError.newPasswordConfirm !== ""}
              helperText={myInfoError.newPasswordConfirm}
            />
          </S.MyInfoAfter.NewPasswordConfirmBlock>
          <S.MyInfoAfter.NameBlock>
            <S.MyInfoAfter.NameLabel>이름</S.MyInfoAfter.NameLabel>
            <S.MyInfoAfter.NameInput
              required
              name="name"
              label="이름을 입력해주세요."
              value={userInputData.name}
              variant="outlined"
              onChange={handleMyInfoFormChange}
              error={myInfoError.name !== ""}
              helperText={myInfoError.name}
            />
          </S.MyInfoAfter.NameBlock>
          <S.MyInfoAfter.EmailBlock>
            <S.MyInfoAfter.EmailLabel>이메일</S.MyInfoAfter.EmailLabel>
            <S.MyInfoAfter.EmailInput
              required
              name="email"
              label="이메일을 입력해주세요."
              value={userInputData.email}
              variant="outlined"
              onChange={handleMyInfoFormChange}
              error={myInfoError.email !== ""}
              helperText={myInfoError.email}
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
              value={userInputData.telephone}
              variant="outlined"
              onChange={handleMyInfoFormChange}
              error={myInfoError.telephone !== ""}
              helperText={myInfoError.telephone}
            />
          </S.MyInfoAfter.CellPhoneNumberBlock>
        </S.MyInfoAfter.FormInputsLayer>
        <S.MyInfoAfter.FormButtonsLayer>
          <S.MyInfoAfter.EmailCheckButton
            variant="outlined"
            onClick={handleDuplicateCheckButtonClick}
          >
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
  );
};

export default MyInfoEditForm;
