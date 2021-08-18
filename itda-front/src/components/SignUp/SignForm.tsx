import S from "./SignUpStyles";

const SignForm = () => {
  return (
    <S.SignUp.SignUpLayout>
      <S.SignUp.UserSignUpLayer>
        <S.SignUp.NameInput
          required
          id="outlined-helperText"
          label="이름"
          placeholder="홍길동"
          variant="outlined"
        />
        <S.SignUp.TelephoneInput
          required
          id="outlined-helperText"
          label="전화번호"
          placeholder="01011112222"
          variant="outlined"
        />
        <S.SignUp.EmailBlock>
          <S.SignUp.EmailInput
            required
            id="outlined-helperText"
            label="이메일"
            placeholder="drake_cool@gmail.com"
            variant="outlined"
          />
          <S.SignUp.DuplicateCheckButton variant="contained" disableElevation>
            중복확인
          </S.SignUp.DuplicateCheckButton>
        </S.SignUp.EmailBlock>
        <S.SignUp.Password
          required
          id="outlined-helperText"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          variant="outlined"
        />
        <S.SignUp.PasswordConfirm
          required
          id="outlined-helperText"
          label="비밀번호 재확인"
          placeholder="비밀번호 재확인"
          variant="outlined"
        />
      </S.SignUp.UserSignUpLayer>
      <S.SignUp.AdminSignUpLayer>
        <S.SignUp.BlankLine />
        <S.SignUp.AdminVerificationCode
          id="outlined-helperText"
          label="판매자 인증코드"
          placeholder="판매자 인증코드를 입력하세요."
          variant="outlined"
          helperText="*판매자로 가입하시는 경우, 인증코드를 입력하세요."
        />
      </S.SignUp.AdminSignUpLayer>
      <S.SignUp.SignUpButtonLayer>
        <S.SignUp.SignUpButton variant="contained" disableElevation>
          가입하기
        </S.SignUp.SignUpButton>
      </S.SignUp.SignUpButtonLayer>
    </S.SignUp.SignUpLayout>
  );
};

export default SignForm;
