import S from "./AtomsStyles";
import { useState } from "react";

type TTextInput = {
  label?: string | number;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  width?: "small" | "medium" | "large";
};

const TextInput = ({
  label,
  size = "small",
  variant = "outlined",
  width = "small",
}: TTextInput) => {
  const [inputState, setInputState] = useState("");
  const handleError = () => {
    return inputState === "" ? true : false; //왜 안되지
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const getCustomInput = () => {
    switch (width) {
      case "small": {
        return (
          <S.TextInput.Small
            error={handleError()}
            type="text"
            label={label}
            variant={variant}
            size={size}
            onChange={handleInputChange}
          />
        );
      }
      case "medium": {
        return (
          <S.TextInput.Medium
            type="text"
            label={label}
            variant={variant}
            size={size}
            onChange={handleInputChange}
          />
        );
      }
      case "large": {
        return (
          <S.TextInput.Large
            type="text"
            label={label}
            variant={variant}
            size={size}
            onChange={handleInputChange}
          />
        );
      }
    }
  };

  return <>{getCustomInput()}</>;
};

export default TextInput;
