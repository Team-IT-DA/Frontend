import S from "./AtomsStyles";

type TCheckButton = {
  onClick?: React.MouseEventHandler<SVGElement>;
};

const CancelButton = ({ onClick }: TCheckButton) => {
  return <S.CancelButton.Icon onClick={onClick} />;
};

export default CancelButton;
