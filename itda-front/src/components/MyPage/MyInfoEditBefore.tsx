import S from "./MyPageStyles";

const MyInfoEditBefore = () => {
  return (
    <S.MyInfoBefore.Layout>
      <S.MyInfoBefore.HeaderLayer>개인정보 수정</S.MyInfoBefore.HeaderLayer>
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
          <S.MyInfoBefore.FormInput id="outlined-basic" variant="outlined" />
        </S.MyInfoBefore.FormBlock>
        <S.MyInfoBefore.FormBlock>
          <S.MyInfoBefore.FormTitle>비밀번호</S.MyInfoBefore.FormTitle>
          <S.MyInfoBefore.FormInput
            id="outlined-password-input"
            type="password"
            variant="outlined"
          />
        </S.MyInfoBefore.FormBlock>
      </S.MyInfoBefore.FormLayer>
      <S.MyInfoBefore.Divider1px />
      <S.MyInfoBefore.ButtonLayer>
        <S.MyInfoBefore.ButtonOK>확인</S.MyInfoBefore.ButtonOK>
      </S.MyInfoBefore.ButtonLayer>
    </S.MyInfoBefore.Layout>
  );
};

export default MyInfoEditBefore;
