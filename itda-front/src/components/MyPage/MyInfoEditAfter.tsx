import S from "./MyPageStyles";

const MyInfoEditAfter = () => {
  return (
    <S.MyInfoAfter.Layout>
      <S.MyInfoAfter.HeaderLayer>개인정보 수정</S.MyInfoAfter.HeaderLayer>
      <S.MyInfoAfter.FormLayer></S.MyInfoAfter.FormLayer>
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
