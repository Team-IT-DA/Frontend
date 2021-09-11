import S from "./AtomsStyles";

interface IColorButtonProps {
  isWhiteButton?: boolean;
  baseColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  children: React.ReactChild;
  onClickButton?: React.MouseEventHandler<HTMLElement>;
}

const ColorButton = ({
  isWhiteButton = false,
  baseColor = "black",
  width = "300px",
  height = "60px",
  children,
  fontSize = "15px",
  onClickButton,
}: IColorButtonProps) => {
  return (
    <S.ColorButton.Layer
      isWhiteButton={isWhiteButton}
      baseColor={baseColor}
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClickButton}
    >
      {children}
    </S.ColorButton.Layer>
  );
};

export default ColorButton;
