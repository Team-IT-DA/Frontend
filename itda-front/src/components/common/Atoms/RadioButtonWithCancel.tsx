import { useState } from "react";
import S from "./AtomsStyles";
import CancelButton from "components/common/Atoms/CancelButton";

type TRadioButton = {
  value: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const RadioButtonWithCancel = ({ value, state, setState }: TRadioButton) => {
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
      <CancelButton></CancelButton>
    </S.RadioButton.Layout>
  );
};

export default RadioButtonWithCancel;
