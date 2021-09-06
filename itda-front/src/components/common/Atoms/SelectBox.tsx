import { useState } from "react";

import S from "./AtomsStyles";

type TSelectBox = {
  selectArray: string[];
};

const SelectBox = ({ selectArray }: TSelectBox) => {
  const [state, setState] = useState(""); //state 밖에서 받아오기
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string);
  };
  const options = selectArray.map(value => (
    <option value={value}>{value}</option>
  ));

  return (
    <S.SelectBox.NativeSelect onChange={handleChange}>
      {options}
    </S.SelectBox.NativeSelect>
  );
};

export default SelectBox;
