import { useState } from "react";
import S from "./AtomsStyles";

type TRadioButton = {
  value: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const RadioButton = ({ value, state, setState }: TRadioButton) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <S.RadioButton.Layout>
      <S.RadioButton.Button
        checked={state === value}
        onChange={handleChange}
        value={value}
        color="default"
      />
      <S.RadioButton.Text>{value}</S.RadioButton.Text>
    </S.RadioButton.Layout>
  );
};

export default RadioButton;
