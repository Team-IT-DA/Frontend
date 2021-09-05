import S from "./AtomsStyles";

type TCheckButton = {
  onClick?: React.MouseEventHandler<SVGElement>;
  hoverEffect?: boolean;
};

const CancelButton = ({ onClick, hoverEffect = true }: TCheckButton) => {
  return <S.CancelButton.Icon onClick={onClick} hoverEffect={hoverEffect} />;
};

export default CancelButton;
