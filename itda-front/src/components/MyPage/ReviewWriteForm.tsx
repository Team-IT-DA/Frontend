import ColorButton from "components/common/Atoms/ColorButton";
import React from "react";
import theme from "styles/theme";
import S from "./MyPageStyles";

const ReviewWriteForm = ({
  handleModalOpen,
}: {
  handleModalOpen: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <S.ReviewBox.Wrapper onClick={handleModalOpen}>
      <S.ReviewBox.Layout className="reviewModal">
        <S.ReviewBox.TopLayer>
          <h2>리뷰 작성</h2>
        </S.ReviewBox.TopLayer>
        <S.ReviewBox.TextFieldLayer>
          <S.ReviewBox.ReviewTextBox
            id="outlined-multiline-static"
            multiline
            rows={11}
            placeholder="따뜻한 리뷰 한마디"
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
