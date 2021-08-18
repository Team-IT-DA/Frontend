import S from "./AtomsStyles";

type TCounter = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

const StepperButton = ({ state, setState }: TCounter) => {
  return (
    <S.StepperButton.Layout>
      <button disabled={state <= 1} onClick={() => setState(state - 1)}>
        <S.StepperButton.MinusIcon />
      </button>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>
        <S.StepperButton.PlusIcon />
      </button>
    </S.StepperButton.Layout>
  );
};

export default StepperButton;
