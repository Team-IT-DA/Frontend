import S from "./SignUpStyles";
import SignUpService from "./SignUpService";
import ValidateForm from "./ValidateForm";

const SignForm = () => {
  const {
    handleSignUpFormChange,
    signUpInfo,
    signUpError,
    handleSignUpButtonClick,
  } = SignUpService(ValidateForm);

  return (
    <S.SignUp.SignUpLayout>
      <S.SignUp.UserSignUpLayer>
        <S.SignUp.NameInput
          name="name"
          type="text"
          id="outlined-textarea"
          label="이름"
          placeholder="홍길동"
          variant="outlined"
          error={signUpError.name !== undefined}
          helperText={signUpError.name}
          onChange={handleSignUpFormChange}
        />
        <S.SignUp.TelephoneInput
          required
          id="outlined-textarea"
          label="전화번호"
          placeholder="01011112222"
          variant="outlined"
          name="telephone"
          error={signUpError.telephone !== undefined}
          helperText={signUpError.telephone}
          onChange={handleSignUpFormChange}
        />
        <S.SignUp.EmailBlock>
          <S.SignUp.EmailInput
            required
            id="outlined-textarea"
            label="이메일"
            name="email"
            error={signUpError.email !== undefined}
            helperText={signUpError.email}
            placeholder="drake_cool@gmail.com"
            variant="outlined"
            onChange={handleSignUpFormChange}
          />
          <S.SignUp.DuplicateCheckButton variant="contained" disableElevation>
            중복확인
          </S.SignUp.DuplicateCheckButton>
        </S.SignUp.EmailBlock>
        <S.SignUp.Password
          required
          name="password"
          id="outlined-textarea"
          error={signUpError.password !== undefined}
          helperText={signUpError.password}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          variant="outlined"
          onChange={handleSignUpFormChange}
        />
        <S.SignUp.PasswordConfirm
          required
          id="outlined-textarea"
          label="비밀번호 재확인"
          name="password2"
          error={signUpError.password2 !== undefined}
          helperText={signUpError.password2}
          placeholder="비밀번호 재확인"
          variant="outlined"
          onChange={handleSignUpFormChange}
        />
      </S.SignUp.UserSignUpLayer>
      <S.SignUp.AdminSignUpLayer>
        <S.SignUp.BlankLine />
        <S.SignUp.AdminVerificationCode
          id="outlined-textarea"
          name="authCode"
          label="판매자 인증코드"
          placeholder="판매자 인증코드를 입력하세요."
          variant="outlined"
          helperText="*판매자로 가입하시는 경우, 인증코드를 입력하세요."
          onChange={handleSignUpFormChange}
        />
      </S.SignUp.AdminSignUpLayer>
      <S.SignUp.SignUpButtonLayer>
        <S.SignUp.SignUpButton
          onClick={handleSignUpButtonClick}
          variant="contained"
          disableElevation
        >
          가입하기
        </S.SignUp.SignUpButton>
      </S.SignUp.SignUpButtonLayer>
    </S.SignUp.SignUpLayout>
  );
};

export default SignForm;
