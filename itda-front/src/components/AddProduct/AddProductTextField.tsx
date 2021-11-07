import { TextField } from "@material-ui/core";
import AddProductService from "./AddProductService";

interface InameInput {
  name: string;
  label: string;
}

const AddProductTextField = (input: InameInput) => {
  const { handleProductInputChange, isError, helperText } =
    AddProductService(input);

  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      id="outlined-textarea"
      error={isError}
      helperText={helperText}
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
