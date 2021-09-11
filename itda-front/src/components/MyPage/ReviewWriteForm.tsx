import ColorButton from "components/common/Atoms/ColorButton";
import theme from "styles/theme";
import S from "./MyPageStyles";

const ReviewWriteForm = () => {
  return (
    <S.ReviewBox.Wrapper>
      <S.ReviewBox.Layout>
        <S.ReviewBox.TopLayer>
          <h2>리뷰 작성</h2>
          <button>x</button>
        </S.ReviewBox.TopLayer>
        <S.ReviewBox.TextFieldLayer>
          <S.ReviewBox.ReviewTextBox
            id="outlined-multiline-static"
            multiline
            rows={11}
            defaultValue="Default Value"
            variant="outlined"
          />
          <input type="file" />
        </S.ReviewBox.TextFieldLayer>
        <S.ReviewBox.BottomLayer>
          <ColorButton
            width="70px"
            height="40px"
            baseColor={theme.colors.navy.normal}
          >
            작성
          </ColorButton>
        </S.ReviewBox.BottomLayer>
      </S.ReviewBox.Layout>
    </S.ReviewBox.Wrapper>
  );
};

export default ReviewWriteForm;
