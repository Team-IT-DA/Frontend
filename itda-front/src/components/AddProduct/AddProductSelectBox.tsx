import {
  InputLabel,
  FormControl,
  NativeSelect,
  FormHelperText,
} from "@material-ui/core";
import {
  checkBlankInputs,
  addProductSelectInput,
} from "stores/AddProductAtoms";
import { useRecoilState, useRecoilValue } from "recoil";

const AddProductSelectBox = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) => {
  const [productSelectInput, setProductSelectInput] = useRecoilState(
    addProductSelectInput
  );
  const hasBlankInput = useRecoilValue(checkBlankInputs);

  const handleProductSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductSelectInput({ ...productSelectInput, [name]: value });
    console.log(productSelectInput[name]);
  };

  const isError = hasBlankInput && productSelectInput[name] === "";

  return (
    <FormControl error={isError}>
      <InputLabel shrink={true} htmlFor="name-native-error">
        {label}
      </InputLabel>
      <NativeSelect
        name={name}
        inputProps={{
          id: "name-native-error",
        }}
        onChange={handleProductSelectChange}
      >
        {options.map((optionName) => (
          <option key={optionName} value={optionName}>
            {optionName}
          </option>
        ))}
      </NativeSelect>
      {isError && <FormHelperText>필수 항목입니다!</FormHelperText>}
    </FormControl>
  );
};

export default AddProductSelectBox;
