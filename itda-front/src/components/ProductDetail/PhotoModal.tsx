import S from "./ProductDetailStyles";

const PhotoModal = ({
  handlePhotoClick,
}: {
  handlePhotoClick: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <S.PhotoModal.ModalWrapper onClick={handlePhotoClick}>
      <div>
        <img
          alt="reviewImage"
          className="photoImg"
          src="https://ifh.cc/g/gFFnTG.jpg"
        />
      </div>
    </S.PhotoModal.ModalWrapper>
  );
};

export default PhotoModal;
