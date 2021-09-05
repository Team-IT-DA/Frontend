import S from "./AtomsStyles";

interface IColorButtonProps {
  isWhiteButton: boolean;
  baseColor: string;
  width: string;
  height: string;
  children: React.ReactChild;
}

const ColorButton = ({
  isWhiteButton,
  baseColor,
  width,
  height,
  children,
}: IColorButtonProps) => {
  return (
    <S.ColorButton.Layer
      isWhiteButton={isWhiteButton}
      baseColor={baseColor}
      width={width}
      height={height}
    >
      {children}
    </S.ColorButton.Layer>
  );
};

export default ColorButton;
