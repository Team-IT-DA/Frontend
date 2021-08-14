import S from "./AtomsStyles";

type TGradientButton = {
  width: string;
  children: React.ReactChild;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const GradientButton = ({
  width,
  children,
  onClick,
  disabled = false,
}: TGradientButton) => {
  return (
    <S.GradientButton disabled={disabled} width={width} onClick={onClick}>
      {children}
    </S.GradientButton>
  );
};

export default GradientButton;
