import Header from "components/common/Header";
import S from "./SignUpStyles";

const SignUpCompletePage = () => {
  return (
    <>
      <Header />
      <S.SignUpComplete.Layout>
        <S.SignUpComplete.TitleLayer>
          회원가입이 완료되었습니다!
        </S.SignUpComplete.TitleLayer>
        <S.SignUpComplete.LineDivider />
        <S.SignUpComplete.InfoLayer>
          <dl>
            <dt>아이디</dt>
            <dd>crong1234</dd>
          </dl>
          <S.SignUpComplete.LineDivider />
          <dl>
            <dt>이름</dt>
            <dd>박크롱</dd>
          </dl>
          <S.SignUpComplete.LineDivider />
          <dl>
            <dt>이메일</dt>
            <dd>crong1234@gmail.com</dd>
          </dl>
        </S.SignUpComplete.InfoLayer>
        <S.SignUpComplete.LineDivider />
        <S.SignUpComplete.ButtonLayer>
          <button>로그인 하기</button>
        </S.SignUpComplete.ButtonLayer>
      </S.SignUpComplete.Layout>
    </>
  );
};

export default SignUpCompletePage;
