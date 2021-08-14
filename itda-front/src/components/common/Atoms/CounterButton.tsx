import S from "./AtomsStyles";

type TCounter = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

const CounterButton = ({ state, setState }: TCounter) => {
  return (
    <S.CounterButton.Layout>
      <button disabled={state <= 1} onClick={() => setState(state - 1)}>
        <S.CounterButton.MinusIcon />
      </button>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>
        <S.CounterButton.PlusIcon />
      </button>
    </S.CounterButton.Layout>
  );
};

export default CounterButton;
