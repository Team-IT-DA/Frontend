import S from "./MyPageStyles";

const MyInfoEditAfter = () => {
  return (
    <S.MyInfoAfter.Layout>
      <S.MyInfoAfter.HeaderLayer>기본 정보 수정</S.MyInfoAfter.HeaderLayer>
      <S.MyInfoAfter.FormLayer>
        <S.MyInfoAfter.FormInputsLayer>
          <S.MyInfoAfter.CurrentPasswordBlock>
            <S.MyInfoAfter.CurrentPasswordLabel>
              현재 비밀번호
            </S.MyInfoAfter.CurrentPasswordLabel>
            <S.MyInfoAfter.CurrentPasswordInput
              id="outlined-secondary"
              label="현재 비밀번호를 입력해주세요."
              variant="outlined"
              color="secondary"
            />
          </S.MyInfoAfter.CurrentPasswordBlock>
          <S.MyInfoAfter.NewPasswordBlock>
            <S.MyInfoAfter.NewPasswordLabel>
              새 비밀번호
            </S.MyInfoAfter.NewPasswordLabel>
            <S.MyInfoAfter.NewPasswordInput
              id="outlined-secondary"
              label="새롭게 설정할 비밀번호를 입력해주세요."
              variant="outlined"
              color="secondary"
            />
          </S.MyInfoAfter.NewPasswordBlock>
          <S.MyInfoAfter.NewPasswordConfirmBlock>
            <S.MyInfoAfter.NewPasswordConfirmLabel>
              새 비밀번호 확인
            </S.MyInfoAfter.NewPasswordConfirmLabel>
            <S.MyInfoAfter.NewPasswordConfirmInput
              id="outlined-secondary"
              label="새롭게 설정할 비밀번호를 다시 한번 입력해주세요."
              variant="outlined"
              color="secondary"
            />
          </S.MyInfoAfter.NewPasswordConfirmBlock>
          <S.MyInfoAfter.NameBlock>
            <S.MyInfoAfter.NameLabel>이름</S.MyInfoAfter.NameLabel>
            <S.MyInfoAfter.NameInput
              id="outlined-secondary"
              label="이름을 입력해주세요."
              variant="outlined"
              color="secondary"
            />
          </S.MyInfoAfter.NameBlock>
          <S.MyInfoAfter.EmailBlock>
            <S.MyInfoAfter.EmailLabel>이메일</S.MyInfoAfter.EmailLabel>
            <S.MyInfoAfter.EmailInput
              id="outlined-secondary"
              label="이메일을 입력해주세요."
              variant="outlined"
              color="secondary"
            />
          </S.MyInfoAfter.EmailBlock>
          <S.MyInfoAfter.CellPhoneNumberBlock>
            <S.MyInfoAfter.CellPhoneNumberLabel>
              휴대폰
            </S.MyInfoAfter.CellPhoneNumberLabel>
            <S.MyInfoAfter.CellPhoneNumberInput
              id="outlined-secondary"
              label="휴대폰 번호를 입력해주세요."
              variant="outlined"
              color="secondary"
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
        <S.MyInfoAfter.ButtonExpireAccount>
          탈퇴하기
        </S.MyInfoAfter.ButtonExpireAccount>
        <S.MyInfoAfter.ButtonConfirmEdit>
          회원정보수정
        </S.MyInfoAfter.ButtonConfirmEdit>
      </S.MyInfoAfter.ButtonLayer>
    </S.MyInfoAfter.Layout>
  );
};

export default MyInfoEditAfter;
