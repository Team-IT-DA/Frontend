import { TextField } from "@material-ui/core";
import { addProductInfos, checkBlankInputs } from "stores/AddProductAtoms";
import { useRecoilState } from "recoil";
import { IAddProduct } from "types/AddProductTypes";

interface InameInput {
  name: string;
  label: string;
}

const AddProductTextField = (input: InameInput) => {
  const [productInput, setProductInput] =
    useRecoilState<IAddProduct>(addProductInfos);
  const [hasBlankInput, setBlank] = useRecoilState(checkBlankInputs);
  const handleProductInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newInput = {
      ...productInput,
      [name]: value,
    };
    setProductInput(newInput);
  };

  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      id="outlined-textarea"
      error={
        hasBlankInput &&
        (productInput[input.name] === "" || productInput[input.name] === 0)
          ? true
          : false
      }
      helperText={
        hasBlankInput &&
        (productInput[input.name] === "" || productInput[input.name] === 0)
          ? "필수 항목입니다!"
          : null
      }
      label={input.label}
      type="text"
      variant="outlined"
      size="small"
      onChange={handleProductInputChange}
      name={input.name}
    />
  );
};

export default AddProductTextField;
