import S from "./AtomsStyles";
type TCheckButton = {
  checked: boolean;
  onClick?: React.MouseEventHandler<SVGElement>;
};
const CheckButton = ({ checked = false, onClick }: TCheckButton) => {
  return checked ? (
    <S.CheckButton.Checked onClick={onClick} />
  ) : (
    <S.CheckButton.Unchecked onClick={onClick} />
  );
};

export default CheckButton;
