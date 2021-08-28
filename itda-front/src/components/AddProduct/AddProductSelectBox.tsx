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
import { useRecoilState } from "recoil";

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

  const handleProductSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductSelectInput({ ...productSelectInput, [name]: value });
  };

  return (
    <FormControl error={false}>
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
          <option value={optionName}>{optionName}</option>
        ))}
      </NativeSelect>
      {/* <FormHelperText>Error</FormHelperText> */}
    </FormControl>
  );
};

export default AddProductSelectBox;
