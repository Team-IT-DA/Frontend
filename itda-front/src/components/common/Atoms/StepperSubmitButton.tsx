import S from "./AtomsStyles";

type TStepperSubmitButton = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const StepperSubmitButton = ({ onClick }: TStepperSubmitButton) => {
  return <S.StepperSubmitButton onClick={onClick}>변경</S.StepperSubmitButton>;
};

export default StepperSubmitButton;
