import S from "./AtomsStyles";

type TSelectBox = {
  selectArray: string[];
  state: string;
  setState: (input: string) => void;
};

const SelectBox = ({ selectArray, state, setState }: TSelectBox) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
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
